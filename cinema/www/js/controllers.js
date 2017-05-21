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
		$scope.Length = movie.Length;
		$scope.ReleaseDate = movie.ReleaseDate;
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

	var whenLogined = function(done){
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
		};

	$scope.login = function(){
		$scope.err = '';
		var u = document.getElementById('txtEmail').value;
		var p = document.getElementById('txtPassword').value;
		console.log(u,p);
		UserProvider.login(u,p).then(whenLogined);
		
	}
		
	$scope.register = function(){
		var u = document.getElementById('txtEmail2').value;
		var p = document.getElementById('txtPassword2').value;
		var b = document.getElementById('txtBD').value;
		
		UserProvider.regis(u,p,b).then(function(){
			UserProvider.login(u,p).then(whenLogined);
		});
		
	};
	
	
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

.controller('PromotionCtrl', function($scope){  

})

