/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.twitch.tv/helix/streams');
// xhr.responseType = 'json';
// xhr.setRequestHeader('Client-ID', 'xs37hj3ec9i8585sig0axgc7u60t74');
// xhr.setRequestHeader('Authorization', 'Bearer 55e4vzxtb1gy43imdu9n3t9nwlir01');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK)
//       console.log(xhr.response.data); // 'This is the returned text.'
//   } else {
//     console.log('Error: ' + xhr.status); // An error occurred during the request.
//   }
// };


var data = [{
  "id": "27580713600",
  "user_id": "14408894",
  "game_id": "33214",
  "community_ids": [],
  "type": "live",
  "title": "Fortlife | BeeN Woke | [+] Always | Sub/Follow 👉 YouTube/Twitter: CDNThe3rd | !app | !LastVid | [+]",
  "viewer_count": 19576,
  "started_at": "2018-02-12T04:20:17Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_cdnthe3rd-{width}x{height}.jpg"
}, {
  "id": "27580551552",
  "user_id": "29795919",
  "game_id": "138585",
  "community_ids": [],
  "type": "live",
  "title": "TSM Kripp Hipster Paladin & Newdeck Later? !twitchprime (✿☯‿☯✿)(✿☯‿☯✿)",
  "viewer_count": 18398,
  "started_at": "2018-02-12T03:59:27Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nl_kripp-{width}x{height}.jpg"
}, {
  "id": "27581039472",
  "user_id": "24538518",
  "game_id": "21779",
  "community_ids": [],
  "type": "live",
  "title": "league",
  "viewer_count": 16489,
  "started_at": "2018-02-12T05:11:11Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_c9sneaky-{width}x{height}.jpg"
}, {
  "id": "27581222144",
  "user_id": "160075583",
  "game_id": "488552",
  "community_ids": [],
  "type": "live",
  "title": "2018 오버워치 컨텐더스 트라이얼 시즌1 SEVEN vs Requiem Six l BSG vs MVP SPACE l Meta Bellum vs Meta Athena",
  "viewer_count": 14967,
  "started_at": "2018-02-12T05:44:25Z",
  "language": "ko",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_playoverwatch_kr-{width}x{height}.jpg"
}, {
  "id": "27580402480",
  "user_id": "15564828",
  "game_id": "33214",
  "community_ids": [],
  "type": "live",
  "title": "Tournaments fortALLnite! (1000+ Wins) | #MFAM | 100Thieves",
  "viewer_count": 14131,
  "started_at": "2018-02-12T03:40:33Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_nickmercs-{width}x{height}.jpg"
}, {
  "id": "27580168656",
  "user_id": "76385901",
  "game_id": "33214",
  "community_ids": ["311c162f-2f5d-40a4-a840-277166c49990", "848d95be-90b3-44a5-b143-6e373754c382", "fd0eab99-832a-4d7e-8cc0-04d73deb2e54"],
  "type": "live",
  "title": "TEAM OSO LOS MEJORES Twitter: @dedreviil",
  "viewer_count": 9514,
  "started_at": "2018-02-12T03:12:02Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_elded-{width}x{height}.jpg"
}, {
  "id": "27580887616",
  "user_id": "30104304",
  "game_id": "25270",
  "community_ids": ["12fad0e6-c0b6-49b5-8304-60ec6555d325"],
  "type": "live",
  "title": "TEENAGE MUTANT NINJA TURTLE CLASSICS w/YoVideogames (2-11)",
  "viewer_count": 8677,
  "started_at": "2018-02-12T04:45:32Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_maximilian_dood-{width}x{height}.jpg"
}, {
  "id": "27581203808",
  "user_id": "118170488",
  "game_id": "29595",
  "community_ids": [],
  "type": "live",
  "title": "[EN] Mineski vs Geek Fam | Epicenter XL SEA Closed Qualifiers | Casted by @MLPDotA and @johnxfire |",
  "viewer_count": 8442,
  "started_at": "2018-02-12T05:40:50Z",
  "language": "en-gb",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_epicenter_en1-{width}x{height}.jpg"
}, {
  "id": "27580275456",
  "user_id": "84574550",
  "game_id": "488552",
  "community_ids": [],
  "type": "live",
  "title": "ok only happy time all the time ~ @aimbotcalvin",
  "viewer_count": 8410,
  "started_at": "2018-02-12T03:24:47Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_aimbotcalvin-{width}x{height}.jpg"
}, {
  "id": "27581071600",
  "user_id": "25725272",
  "game_id": "4182",
  "community_ids": [],
  "type": "live",
  "title": "Corruptions",
  "viewer_count": 8166,
  "started_at": "2018-02-12T05:16:41Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_vinesauce-{width}x{height}.jpg"
}, {
  "id": "27580831488",
  "user_id": "23728142",
  "game_id": "18846",
  "community_ids": ["53164dd1-b11d-4a87-931c-3802273f31d4", "fd0eab99-832a-4d7e-8cc0-04d73deb2e54"],
  "type": "live",
  "title": "a little bit of scary (18+ NSFW)",
  "viewer_count": 8116,
  "started_at": "2018-02-12T04:36:53Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_immortalhd-{width}x{height}.jpg"
}, {
  "id": "27580393264",
  "user_id": "54706574",
  "game_id": "493057",
  "community_ids": [],
  "type": "live",
  "title": "LateOG ~~ HUGE PC Giveaway: bit.ly/JoshDS-OG ",
  "viewer_count": 7575,
  "started_at": "2018-02-12T03:39:20Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_joshog-{width}x{height}.jpg"
}, {
  "id": "27577767328",
  "user_id": "42583390",
  "game_id": "494717",
  "community_ids": [],
  "type": "live",
  "title": "chat, you're perfect",
  "viewer_count": 7400,
  "started_at": "2018-02-11T23:02:34Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_xchocobars-{width}x{height}.jpg"
}, {
  "id": "27580558544",
  "user_id": "31478096",
  "game_id": "27471",
  "community_ids": ["311c162f-2f5d-40a4-a840-277166c49990"],
  "type": "live",
  "title": "Vendo Quesos #25",
  "viewer_count": 7249,
  "started_at": "2018-02-12T04:00:12Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_mym_alkapone-{width}x{height}.jpg"
}, {
  "id": "27581320048",
  "user_id": "108593690",
  "game_id": "26936",
  "community_ids": [],
  "type": "live",
  "title": "🔴 收聽佔有率第一的流行音樂電台 KISSRADIO 大眾廣播 FM99.9 24小時不中斷 / KISSRadio Live Streaming 24/7",
  "viewer_count": 6765,
  "started_at": "2018-02-12T06:04:02Z",
  "language": "zh-tw",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kissradio_fm999-{width}x{height}.jpg"
}, {
  "id": "27579743040",
  "user_id": "31106024",
  "game_id": "494717",
  "community_ids": [],
  "type": "live",
  "title": "i am hufflepuff*",
  "viewer_count": 6171,
  "started_at": "2018-02-12T02:23:49Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_lilypichu-{width}x{height}.jpg"
}, {
  "id": "27576765472",
  "user_id": "63602976",
  "game_id": "32982",
  "community_ids": [],
  "type": "live",
  "title": "👉👊💣 - SkipNhO Attack 📺PUBG até o server de GTA volta.. 22h",
  "viewer_count": 5235,
  "started_at": "2018-02-11T21:30:31Z",
  "language": "pt-br",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_skipnho-{width}x{height}.jpg"
}, {
  "id": "27580514512",
  "user_id": "27680990",
  "game_id": "21779",
  "community_ids": ["5c5a67db-215f-4c38-82c5-454d9983cfb5", "ad14d4fc-1a7c-413f-aa32-4906ef3669ae"],
  "type": "live",
  "title": "yeTz -stream rapida antes de viajar| qm aproveitou aproveitou  ",
  "viewer_count": 5071,
  "started_at": "2018-02-12T03:54:46Z",
  "language": "pt-br",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_yetz-{width}x{height}.jpg"
}, {
  "id": "27579592880",
  "user_id": "16689163",
  "game_id": "498744",
  "community_ids": [],
  "type": "live",
  "title": "SCP Night - !multi",
  "viewer_count": 4780,
  "started_at": "2018-02-12T02:07:42Z",
  "language": "en",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_criken-{width}x{height}.jpg"
}, {
  "id": "27578918112",
  "user_id": "92371909",
  "game_id": "138585",
  "community_ids": [],
  "type": "live",
  "title": "일단 전설 가고 2급시작",
  "viewer_count": 4752,
  "started_at": "2018-02-12T00:58:16Z",
  "language": "ko",
  "thumbnail_url": "https://static-cdn.jtvnw.net/previews-ttv/live_user_flurry1989-{width}x{height}.jpg"
}];

var gameIds = {};
var userIds = [];
var viewerCounts = [];
var titles = [];

data.forEach(function (obj) {
  if (gameIds[obj.game_id]) {
    gameIds[obj.game_id] += 1;
  } else {
    gameIds[obj.game_id] = 1;
  }
  if (!userIds.includes(obj.user_id)) {
    userIds.push(obj.user_id);
  }
  if (!viewerCounts.includes(obj.viewer_count)) {
    viewerCounts.push(obj.viewer_count);
  }
  if (!titles.includes(obj.title)) {
    titles.push(obj.title);
  }
});

var games = Object.keys(gameIds);
var numGames = Object.values(gameIds);

console.log(games);
console.log(numGames);

// *** GAMES
// var xhr = new XMLHttpRequest();
// xhr.open('GET', `https://api.twitch.tv/helix/games?id=${gameIds.join('&id=')}`);
// xhr.responseType = 'json';
// xhr.setRequestHeader('Client-ID', 'xs37hj3ec9i8585sig0axgc7u60t74');
// xhr.setRequestHeader('Authorization', 'Bearer 55e4vzxtb1gy43imdu9n3t9nwlir01');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK)
//       console.log(xhr.response); // 'This is the returned text.'
//   } else {
//     console.log('Error: ' + xhr.status); // An error occurred during the request.
//   }
// };

// *** USERS
// let userData = [];

// var xhr = new XMLHttpRequest();
// xhr.open('GET', `https://api.twitch.tv/helix/users?id=${userIds.join('&id=')}`);
// xhr.responseType = 'json';
// xhr.setRequestHeader('Client-ID', 'xs37hj3ec9i8585sig0axgc7u60t74');
// xhr.setRequestHeader('Authorization', 'Bearer 55e4vzxtb1gy43imdu9n3t9nwlir01');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK)
//       userData = xhr.response.data;
//       let displayNames = [];
//       let totalViews = [];

//       userData.forEach((obj) => {
//         if (!displayNames.includes(obj.display_name)) {
//           displayNames.push(obj.display_name);
//         }
//         if (!totalViews.includes(obj.view_count)) {
//           totalViews.push(obj.view_count);
//         }
//       });

//       console.log(displayNames);
//       console.log(totalViews);
//       console.log(xhr.response.data); // 'This is the returned text.'
//   } else {
//     console.log('Error: ' + xhr.status); // An error occurred during the request.
//   }
// };

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map