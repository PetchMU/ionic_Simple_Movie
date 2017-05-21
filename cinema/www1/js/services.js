angular.module('CinemaApp.services', [])

.factory('MovieProvider',function($cordovaSQLite){
	/*var movies=[
	{id:1,
	title:"BAB",
	detail:"...",
	catagory:["a","b"],
	length: 138,
	releastDate: '2017-05-31'
	},
	{id:2,
	title:"2499",
	detail:"...",
	catagory:["a","b"],
	length: 138,
	releastDate: '2017-05-31'
	}
	];*/
	
	
	
	
	return{
		all:function(){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'SELECT * FROM Movies').then(function(res){
					var movies = [];
					for(var i = 0; i<res.rows.length; i++){
						movies[i] = res.rows.item(i);
					}
					done(movies);
				})
			});
			return p;
		},
		get:function(id){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'SELECT * FROM Movies where Id  = ?', [id]).then(function(res){
					done(res.rows.item(0));
				})
			});
			return p;
		}
	}
	
	
	

	
	
})



.factory('UserProvider',function($cordovaSQLite){
	
	var info = null;
	
	return{
		login:function(email, password){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'SELECT * FROM Users where Email = ? and Password = ?', [email, password]).then(function(res){
					console.log(res);
					if(res.rows.length > 0) {
						info = res.rows.item(0);
					}
					done(res.rows.length > 0);
				})
			});
			return p;
		},
		logout:function(){
			info = null;
		},
		isLogin:function(){
			return info != null;
		},
		getInfo:function(){
			return info;
		}
	}
	
	
	

	
	
})


.factory('FavoriteProvider',function($cordovaSQLite){
	
	return{
		getMovies:function(IdUser){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'SELECT * FROM Favorite f join Movies m on f.IdMovie = m.Id where f.IdUser = ?', [IdUser]).then(function(res){
				//$cordovaSQLite.execute(db,'SELECT * FROM Favorite where IdUser = ?', [IdUser]).then(function(res){
					
					var m = [];
					for(var i = 0; i < res.rows.length; i++){
						m[i] = res.rows.item(i);
					}
					console.log(IdUser, m);
					
					done(m);
				})
			});
			return p;
		},
		isFavorite:function(IdUser,IdMovie){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'select * from Favorite where IdUser = ? and IdMovie = ?', [IdUser, IdMovie]).then(function(res){
					done(res.rows.length > 0);
				})
			});
			return p;
		},
		addFavorite:function(IdUser,IdMovie){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'INSERT INTO Favorite values(?,?)', [IdUser, IdMovie]).then(function(res){
					done();
				})
			});
			return p;
		},
		removeFavorite:function(IdUser,IdMovie){
			var p = new Promise(function(done){
				$cordovaSQLite.execute(db,'DELETE FROM Favorite where IdUser = ? and IdMovie = ?', [IdUser, IdMovie]).then(function(res){
					done();
				})
			});
			return p;
		}
	}
	
	
	

	
	
})






;