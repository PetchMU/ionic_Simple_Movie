// Ionic Starter App คล้ายๆ boostap คือจุดเริ่มของการทำงานทั้งหมด
var db;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('CinemaApp', ['ionic','ngCordova','CinemaApp.controllers','CinemaApp.services'])    // เหมือนตัวเรียกใช้ ว่าจะใช้อะไรบ้าง

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
	if(window.cordova){
		db = $cordovaSQLite.openDB({name : 'CinemaApp.db'});
	}else{
		db = window.openDatabase("CinemaApp.db",'1','CinemaApp',1024 *1024 *100);
	}
	
	
	if(true){
	$cordovaSQLite.execute(db,`DROP TABLE Movies`)
	
	$cordovaSQLite.execute(db,
	`CREATE TABLE IF NOT EXISTS Movies
	(
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		Title TEXT,
		Detail TEXT,
		Category TEXT,
		Length INTEGER,
		ReleaseDate TEXT,
		Image TEXT,
		Youtube TEXT
	)
	`)
	
	$cordovaSQLite.execute(db,`DELETE FROM Movies`)
	
	
	/*$cordovaSQLite.execute(db,`INSERT INTO Movies(Title,Detail,Category,Length,ReleaseDate,Image, Youtube) VALUES 
	(?,?,?,?,?,?,?)`,["KingKong","..........","Action",130,"2017-01-01","img/cover/KingKong.jpg", "7-zYoocu2Jo"])
	
	$cordovaSQLite.execute(db,`INSERT INTO Movies(Title,Detail,Category,Length,ReleaseDate,Image, Youtube) VALUES 
	(?,?,?,?,?,?,?)`,["Fast8","..........","Action",135,"2017-04-12","img/cover/img1.png", "838jf3rzaww"])*/
	
	$cordovaSQLite.execute(db,`INSERT INTO Movies(Title,Detail,Category,Length,ReleaseDate,Image, Youtube) 
	VALUES(?,?,?,?,?,?,?)`,["The Boss Baby","A suit-wearing briefcase-carrying baby pairs up with his seven-year old brother to stop the dastardly plot of the CEO of Puppy Co.","Animation",97,"2017-03-30","img/cover/The Boss Baby.jpg", "tquIfapGVqs"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,  Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['The Smurfs 3','In this fully animated, all-new take on the Smurfs, a mysterious map sets Smurfette and her friends Brainy, Clumsy and Hefty on an exciting race through the Forbidden Forest leading to the discovery of the biggest secret in Smurf history.',
	 'Adventure / Animation / Comedy',89,'2017-04-06',"img/cover/The Smurfs3.jpg", "vu1qZCG6Yo8"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image, Youtube)
	VALUES(?,?,?,?,?,?,?)`,['Beauty and the Beast','Belle, whose father is imprisoned by the Beast, offers herself instead, unaware her captor to be an enchanted prince.','Adventure / Fantasy',129,'2017-03-16',"img/cover/Beauty and the Beast.jpg", "OvW_L8sTu5E"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['Fast And Furious 8',' With Dom and Letty married, Brian and Mia retired and the rest of the crew exonerated, the globe-trotting team has found some semblance of a normal life. They soon face an unexpected challenge when a mysterious woman named Cipher forces Dom to betray them all. Now, they must unite to bring home the man who made them a family and stop Cipher from unleashing chaos.'
	 ,'Action',136,'2017-04-12',"img/cover/Fast And Furious 8.jpg", "uisBaTkQAEs"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['TGhost in the Shell','In the near future, Major is the first of her kind: a human who is cyber-enhanced to be a perfect soldier devoted to stopping the world most dangerous criminals. When terrorism reaches a new level that includes the ability to hack into peoples minds and control them, Major is uniquely qualified to stop it. As she prepares to face a new enemy, Major discovers that her life was stolen instead of saved. Now, she will stop at nothing to recover her past while punishing those who did this to her.',
	 'Action / Crime / Drama',120,'2017-03-30',"img/cover/Ghost in the Shell.jpg", "G4VmJcZR0Yg"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['Colossal','A woman discovers that severe catastrophic events are somehow connected to the mental breakdown from which her suffering.',
	 'Action / Comedy / Sci-Fi',110,'2017-05-11',"img/cover/Colossal.jpg", "AVIAtpumxSM"])

	$cordovaSQLite.execute (db, ` INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['The Monster','A mother and daughter must confront a terrifying monster when they break down on a deserted road.',
	 'Drama / Fantasy / Horror',91,'2017-05-25',"img/cover/The Monster.jpg", "tbyCUdzR87Y"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['Guardians Galaxy 2','Set to the backdrop of Awesome Mixtape #2, Guardians of the Galaxy Vol. 2 continues the team adventures as they unravel the mystery of Peter Quill true parentage.',
	 'Action / Fantasy',135,'2017-04-26',"img/cover/Guardians Galaxy 2.jpg", "duGqrYw4usE"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['Form a House on Willow Street','After a young woman is kidnapped, her captors soon come to realize that in fact they may be the ones in danger and this young woman has a dark secret inside her.',
	 'Horror',90,'2017-04-20',"img/cover/Form a House on Willow Street.jpg", "KF916U44neg"])

	$cordovaSQLite.execute (db, `INSERT INTO Movies (Title,Detail,Category,Length,ReleaseDate,Image,Youtube)
	 VALUES(?,?,?,?,?,?,?)`,['Moonlight','A timeless story of human self-discovery and connection, Moonlight chronicles the life of a young black man from childhood to adulthood as he struggles to find his place in the world while growing up in a rough neighborhood of Miami.',
	 'Drama',111,'2017-02-09',"img/cover/Moonlight.jpg", "9NJj12tJzqc"])
	
	
	
	$cordovaSQLite.execute(db,
	`CREATE TABLE IF NOT EXISTS Users
	(
		Id INTEGER PRIMARY KEY AUTOINCREMENT,
		Email TEXT,
		Password TEXT,
		BirthDate TEXT
		
	)
	`)
	$cordovaSQLite.execute(db,`DELETE FROM Users`)
	
	$cordovaSQLite.execute(db,`INSERT INTO Users(Email,Password,BirthDate) VALUES 
	(?,?,?)`,["test","test","1995-04-01"])
	$cordovaSQLite.execute(db,`INSERT INTO Users(Email,Password,BirthDate) VALUES 
	(?,?,?)`,["petch.kr@gamil.com","123","1995-04-01"])
	
		
	$cordovaSQLite.execute(db,
	`CREATE TABLE IF NOT EXISTS Favorite
	(
		IdUser INTEGER,
		IdMovie INTEGER
		
	)
	`)
	
	
	}
	
  });
})

.config(function($stateProvider,$urlRouterProvider, $sceDelegateProvider){
	
	$sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);
	
	$stateProvider
	.state('tab',{
		url:'/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html'
	})

	.state('tab.home', {
		url: '/home',     
		views: {		// หน้าตาที่จะเอามาแสดง
			't-home': {
				templateUrl: 'templates/home.html',
				controller: 'HomeCtrl'			// controller ที่เอามาใช้กับtabนี้    -- 1page1 controller
			}
		}
	})  //1ตัว จะทำอันใหม่ก็อบถึงตรงนี้  
	
	.state('tab.movie', {
		url: '/movie',     
		views: {		// หน้าตาที่จะเอามาแสดง
			't-movie': {
				templateUrl: 'templates/movie.html',
				controller: 'MovieCtrl'			// controller ที่เอามาใช้กับtabนี้    -- 1page1 controller
			}
		}
	})
	
	.state('tab.movie-detail', {
		url: '/movie/:id',     
		views: {		// หน้าตาที่จะเอามาแสดง
			't-movie': {
				templateUrl: 'templates/detail.html',
				controller: 'DetailCtrl'			// controller ที่เอามาใช้กับtabนี้    -- 1page1 controller
			}
		}
	})
	
	.state('tab.user', {
		cache: false,
		url: '/user',     
		views: {		
			't-user': {
				templateUrl: 'templates/user.html',
				controller: 'UserCtrl'	
			}
		}
	})

	$urlRouterProvider.otherwise('/tab/home');

})


.filter('trustAsResourceUrl', ['$sce', function($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	};
}])

