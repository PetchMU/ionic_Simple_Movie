angular.module('CinemaApp.controllers', [])

.controller('HomeCtrl', function($scope){  

})

.controller('MovieCtrl', function($scope, MovieProvider){  
	//$scope.movie_list = MovieProvider.all();
	MovieProvider.all().then(function(movies){
		$scope.movie_list = movies;
	});
})

.controller('DetailCtrl', function($scope, $stateParams, MovieProvider, UserProvider, FavoriteProvider){  
	var id = $stateParams.id
	
	$scope.islogin = UserProvider.isLogin();
	var  IdUser = UserProvider.isLogin() ? UserProvider.getInfo()['Id'] : 0;
	
	FavoriteProvider.isFavorite(IdUser,id).then(function(fav){
		$scope.fav = fav;
	});
	
	MovieProvider.get(id).then(function(movie){
		$scope.title = movie.Title;
		$scope.detail = movie.Detail;
		$scope.image = movie.Image;
		$scope.category = movie.Category;
		$scope.youtubeUrl = 'https://www.youtube.com/embed/' + movie.Youtube;
	});
	
	$scope.clickFav = function(){
		FavoriteProvider.addFavorite(IdUser, id);
		$scope.fav= true;
	};
	$scope.clickUnFav = function(){
		FavoriteProvider.removeFavorite(IdUser, id);
		$scope.fav= false;
	};

})

.controller('UserCtrl', function($scope, $stateParams, UserProvider, FavoriteProvider){ 
	$scope.login = function(){
		$scope.err = '';
		var u = document.getElementById('txtEmail').value;
		var p = document.getElementById('txtPassword').value;
		console.log(u,p);
		UserProvider.login(u,p).then(function(done){
			if(done){
				console.log('logined');
				$scope.islogin = true;
				$scope.email = UserProvider.getInfo()['Email'];
				$scope.birthdate = UserProvider.getInfo()['BirthDate'];
				
				FavoriteProvider.getMovies(UserProvider.getInfo()['Id']).then(function(list){
					$scope.movie_list = list;
				})
			}
			else{
				$scope.err = 'wrong!';
			}
		});
	}
	
	$scope.logout= function(){
		UserProvider.logout();
		$scope.islogin = false
	}
	
	$scope.islogin = UserProvider.isLogin();
	
	if( UserProvider.isLogin() ){
		$scope.islogin = true;
		$scope.email = UserProvider.getInfo()['Email'];
		$scope.birthdate = UserProvider.getInfo()['BirthDate'];
		FavoriteProvider.getMovies(UserProvider.getInfo()['Id']).then(function(list){
			$scope.movie_list = list;
		})
	}
	
})

