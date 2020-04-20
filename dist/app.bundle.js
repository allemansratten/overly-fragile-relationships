/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content/entityTags.ts":
/*!***********************************!*\
  !*** ./src/content/entityTags.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RelationshipTag;
(function (RelationshipTag) {
    RelationshipTag[RelationshipTag["crush"] = 0] = "crush";
    RelationshipTag[RelationshipTag["lover"] = 1] = "lover";
    RelationshipTag[RelationshipTag["ex"] = 2] = "ex";
    RelationshipTag[RelationshipTag["political_dis"] = 3] = "political_dis";
    RelationshipTag[RelationshipTag["like"] = 4] = "like";
    RelationshipTag[RelationshipTag["dislike"] = 5] = "dislike";
    RelationshipTag[RelationshipTag["crushable"] = 6] = "crushable";
    RelationshipTag[RelationshipTag["bowling_brawl"] = 7] = "bowling_brawl";
    RelationshipTag[RelationshipTag["disable_mutual_crush_dating"] = 8] = "disable_mutual_crush_dating";
    RelationshipTag[RelationshipTag["awkawardness"] = 9] = "awkawardness";
})(RelationshipTag = exports.RelationshipTag || (exports.RelationshipTag = {}));
exports.relationshipTagMap = new Map([
    [RelationshipTag.crush, 'crush'],
    [RelationshipTag.lover, 'lover'],
    [RelationshipTag.ex, 'ex'],
    [RelationshipTag.political_dis, 'political disagreement'],
]);
exports.relationshipTagMapStory = new Map([
    [RelationshipTag.crush, ['SUBJ now has a crush on OBJ', 'SUBJ lost a crush on OBJ']],
    [RelationshipTag.lover, ["SUBJ and OBJ started dating!", 'SUBJ and OBJ are no longer lovers']],
    [RelationshipTag.ex, ["Did you hear? SUBJ and OBJ broke up!", 'SUBJ is not an ex of OBJ anymore']],
    [RelationshipTag.political_dis, ['SUBJ now has a political disagreement with OBJ', 'SUBJ no longer has a political disagreement with OBJ']],
]);
exports.relationshipTagBidirectional = new Set([
    RelationshipTag.lover,
    RelationshipTag.political_dis,
    RelationshipTag.ex,
]);
// If the first item is in NEW, the second is removed from REM
exports.relationshipTagShadowingNewRem = [
    [RelationshipTag.lover, RelationshipTag.crush],
    [RelationshipTag.ex, RelationshipTag.lover],
];
// If the first item is in REM, the second is removed from NEW
exports.relationshipTagShadowingRemNew = [];
var HumanTag;
(function (HumanTag) {
    HumanTag[HumanTag["introvert"] = 0] = "introvert";
    HumanTag[HumanTag["extrovert"] = 1] = "extrovert";
    HumanTag[HumanTag["angry_drunk"] = 2] = "angry_drunk";
    HumanTag[HumanTag["sad_drunk"] = 3] = "sad_drunk";
    HumanTag[HumanTag["good_bowler"] = 4] = "good_bowler";
    HumanTag[HumanTag["bad_bowler"] = 5] = "bad_bowler";
    HumanTag[HumanTag["promiscuous"] = 6] = "promiscuous";
    HumanTag[HumanTag["jealous"] = 7] = "jealous";
    HumanTag[HumanTag["disagreeable"] = 8] = "disagreeable";
    HumanTag[HumanTag["agreeable"] = 9] = "agreeable";
    HumanTag[HumanTag["supportive"] = 10] = "supportive";
    HumanTag[HumanTag["attention"] = 11] = "attention";
    HumanTag[HumanTag["flavie_angry"] = 12] = "flavie_angry";
    HumanTag[HumanTag["dan_busted"] = 13] = "dan_busted";
    HumanTag[HumanTag["gone"] = 14] = "gone";
    HumanTag[HumanTag["fragile_flavie_1"] = 15] = "fragile_flavie_1";
    HumanTag[HumanTag["fragile_flavie_2"] = 16] = "fragile_flavie_2";
    HumanTag[HumanTag["depressed"] = 17] = "depressed";
})(HumanTag = exports.HumanTag || (exports.HumanTag = {}));
exports.humanTagMap = new Map([
    [HumanTag.introvert, 'introvert'],
    [HumanTag.extrovert, 'extrovert'],
    [HumanTag.angry_drunk, 'angry when drunk'],
    [HumanTag.sad_drunk, 'sad when drunk'],
    [HumanTag.good_bowler, 'good bowler'],
    [HumanTag.bad_bowler, 'bad bowler'],
    // [HumanTag.promiscuous, 'promiscuous'],
    [HumanTag.jealous, 'jealous'],
    [HumanTag.disagreeable, 'disagreeable'],
    [HumanTag.agreeable, 'agreeable'],
    [HumanTag.supportive, 'supportive friend'],
    [HumanTag.attention, 'attention seeker'],
    [HumanTag.depressed, 'depressed'],
]);
exports.humanTagDisplay = new Set([
    HumanTag.depressed,
]);


/***/ }),

/***/ "./src/content/humans.ts":
/*!*******************************!*\
  !*** ./src/content/humans.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HumanName;
(function (HumanName) {
    HumanName["You"] = "You";
    HumanName["Alex"] = "Alex";
    HumanName["Beatrice"] = "Beatrice";
    HumanName["Cecil"] = "Cecil";
    HumanName["Dan"] = "Dan";
    HumanName["Eric"] = "Eric";
    HumanName["Flavie"] = "Flavie";
})(HumanName = exports.HumanName || (exports.HumanName = {}));
exports.HumanNameIndex = [
    'You',
    'Alex',
    'Beatrice',
    'Cecil',
    'Dan',
    'Eric',
    'Flavie',
];
exports.HumanBio = [
    '',
    'Her humor may come off as crude, but she really cares about her friends.',
    'Jokingly flirts with all of her friends and is afraid to commit to a relationship.',
    'A chill, introverted guy, though you\'ve seen him blow up before. He\'s quite sporty.',
    'An athletic extrovert, who leaves a good first impression. His confidence sometimes borders on arrogance.',
    'Raised in a religious household, he gets along well with people. He was never in a relationship.',
    'One of the most caring people you know. She expects the same from everybody else and is often let down.'
];


/***/ }),

/***/ "./src/content/levels.ts":
/*!*******************************!*\
  !*** ./src/content/levels.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var level_1 = __webpack_require__(/*! ../model/level */ "./src/model/level.ts");
var peopleGraph_1 = __webpack_require__(/*! ../model/peopleGraph */ "./src/model/peopleGraph.ts");
var human_1 = __webpack_require__(/*! ../model/human */ "./src/model/human.ts");
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var situations_1 = __webpack_require__(/*! ./situations */ "./src/content/situations.ts");
var humans_1 = __webpack_require__(/*! ./humans */ "./src/content/humans.ts");
var locations_1 = __webpack_require__(/*! ./locations */ "./src/content/locations.ts");
var situation_1 = __webpack_require__(/*! ../model/situation */ "./src/model/situation.ts");
exports.levels = [];
var locations = [
    locations_1.LocationName.Bowling,
    locations_1.LocationName.Drink,
    locations_1.LocationName.Hiking,
];
// You is always on the zeroth position
function mutualRelationship(people, tags) {
    var tagSet = new Set(tags);
    var a = people[0], b = people[1];
    return [
        new peopleGraph_1.Relationship([a, b], tagSet),
        new peopleGraph_1.Relationship([b, a], tagSet),
    ];
}
function flatten(arr) {
    var res = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var a = arr_1[_i];
        if (a instanceof Array) {
            res.push.apply(res, a);
        }
        else {
            res.push(a);
        }
    }
    return res;
}
var danTwoGirlfriendsBusted = new situations_1.Complex({
    humReq: [humans_1.HumanName.Dan, humans_1.HumanName.Beatrice, humans_1.HumanName.Flavie],
    relTagsReq: [
        [[humans_1.HumanName.Dan, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.lover],
        [[humans_1.HumanName.Dan, humans_1.HumanName.Flavie], entityTags_1.RelationshipTag.lover],
    ],
    effects: [
        situations_1.SituationUtils.breakUp([humans_1.HumanName.Dan, humans_1.HumanName.Beatrice]),
        situations_1.SituationUtils.breakUp([humans_1.HumanName.Dan, humans_1.HumanName.Flavie]),
        new situation_1.SituationEffect()
            .addHumTags([[humans_1.HumanName.Dan, entityTags_1.HumanTag.dan_busted]])
            .changeFondness([
            [[humans_1.HumanName.Dan, humans_1.HumanName.You], -5],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Dan], -7],
            [[humans_1.HumanName.Dan, humans_1.HumanName.Beatrice], -2],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Dan], -7],
            [[humans_1.HumanName.Dan, humans_1.HumanName.Flavie], -2],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Beatrice], +4],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Flavie], +4],
        ])
            .setDescription("Uh oh... Dan was dating Beatrice and Flavie at the same time," +
            " and now they found out! No more Dan Juan."),
    ],
});
var fragileFlavie1 = new situations_1.Complex({
    humReq: [humans_1.HumanName.Alex, humans_1.HumanName.Flavie],
    allowedLocations: [locations_1.LocationName.Hiking],
    humTagsBan: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_1]],
    effects: [new situation_1.SituationEffect().changeFondness([
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], -3]
        ]).addRelTags([
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike]
        ])
            .addHumTags([[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_1]])
            .setDescription('Alex made fun of Flavie\'s vegan snacks, and she got really upset. But Alex makes fun of everybody, right?')],
});
var fragileFlavie2 = new situations_1.Complex({
    humReq: [humans_1.HumanName.Alex, humans_1.HumanName.Flavie],
    allowedLocations: [locations_1.LocationName.Hiking],
    humTagsReq: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_1]],
    humTagsBan: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_2]],
    effects: [new situation_1.SituationEffect().removeRelTags([[[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike]])
            .changeFondness([[[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], +1]])
            .addHumTags([[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_2]])
            .setDescription('Alex saw that her comment really hurt Flavie\'s feelings, and apologised. She even brought her a vegan Flapjack.')],
});
var flavieFomo1 = new situations_1.Complex({
    humReq: [humans_1.HumanName.Alex, humans_1.HumanName.Beatrice, humans_1.HumanName.Cecil, humans_1.HumanName.Dan, humans_1.HumanName.Eric],
    humBan: [humans_1.HumanName.Flavie],
    humTagsBan: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.flavie_angry]],
    effects: [new situation_1.SituationEffect().changeFondness([
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], -1],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Beatrice], -1],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Cecil], -1],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Dan], -1],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.Eric], -1],
            [[humans_1.HumanName.Flavie, humans_1.HumanName.You], -3],
        ]).addHumTags([[humans_1.HumanName.Flavie, entityTags_1.HumanTag.flavie_angry]])
            .setDescription('Flavie is angry that you invited everybody except her.')],
});
var flavieFomo2 = new situations_1.Complex({
    humReq: [humans_1.HumanName.Alex, humans_1.HumanName.Beatrice, humans_1.HumanName.Cecil, humans_1.HumanName.Dan, humans_1.HumanName.Eric],
    humBan: [humans_1.HumanName.Flavie],
    humTagsReq: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.flavie_angry]],
    effects: [new situation_1.SituationEffect().changeFondness([[[humans_1.HumanName.Flavie, humans_1.HumanName.You], -10]])
            .setDescription('Flavie came uninvited, chewed you out, and left. Forever.')],
});
var bowlingbrawl = new situations_1.Complex({
    humReq: [humans_1.HumanName.Cecil, humans_1.HumanName.Dan],
    allowedLocations: [locations_1.LocationName.Bowling],
    relTagsBan: [[[humans_1.HumanName.Cecil, humans_1.HumanName.Dan], entityTags_1.RelationshipTag.bowling_brawl]],
    effects: [new situation_1.SituationEffect().changeFondness([
            [[humans_1.HumanName.Cecil, humans_1.HumanName.Dan], -2],
            [[humans_1.HumanName.Dan, humans_1.HumanName.Cecil], -2]
        ])
            .addRelTags([[[humans_1.HumanName.Cecil, humans_1.HumanName.Dan], entityTags_1.RelationshipTag.bowling_brawl]])
            .setDescription('Cecil and Dan bet who could score the most in bowling.' +
            ' Dan thought he would win easily, but Cecil did.' +
            ' So Dan accused him of cheating, and they got into a fight!')],
    processEffects: function (trip, currentState, baseEffects) {
        trip.goPeople.filter(function (p) { return (p.name != humans_1.HumanName.Cecil) && (p.name != humans_1.HumanName.Dan); }).forEach(function (p) {
            baseEffects[0].changedFondness.push([[p.name, humans_1.HumanName.Cecil], -2]);
            baseEffects[0].changedFondness.push([[p.name, humans_1.HumanName.Dan], -1]);
        });
        return baseEffects;
    },
});
var alexSupportive = new situations_1.Complex({
    humReq: [humans_1.HumanName.Alex, humans_1.HumanName.Beatrice],
    relTagsBan: [
        [[humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.awkawardness],
        [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.awkawardness],
    ],
    allowedLocations: [locations_1.LocationName.Bowling, locations_1.LocationName.Hiking],
    humTagsReq: [[humans_1.HumanName.Beatrice, entityTags_1.HumanTag.depressed]],
    effects: [new situation_1.SituationEffect()
            .removeHumTags([[humans_1.HumanName.Beatrice, entityTags_1.HumanTag.depressed]])
            .setDescription('Alex helped Beatrice get over her breakup. She feels better now.')],
});
var PRESENT_FONDNESS_CHANGE = +2;
var ABSENT_FONDNESS_CHANGE = -1;
var baseFondnessChanges = new situations_1.Complex({
    processEffects: function (trip, currentState, baseEffects) {
        var effect = new situation_1.SituationEffect();
        currentState.getAllHumanNames().forEach(function (hName) {
            if (!trip.goPeople.map(function (p) { return p.name; }).includes(hName)) {
                effect.changedFondness.push([[hName, humans_1.HumanName.You], ABSENT_FONDNESS_CHANGE]);
            }
            else {
                effect.changedFondness.push([[hName, humans_1.HumanName.You], PRESENT_FONDNESS_CHANGE]);
            }
        });
        return baseEffects.concat([effect]);
    },
});
exports.levels.push(new level_1.Level([
    new human_1.Human(humans_1.HumanName.You),
    new human_1.Human(humans_1.HumanName.Alex),
    new human_1.Human(humans_1.HumanName.Beatrice),
    new human_1.Human(humans_1.HumanName.Cecil),
    new human_1.Human(humans_1.HumanName.Dan),
    new human_1.Human(humans_1.HumanName.Eric),
    new human_1.Human(humans_1.HumanName.Flavie),
], locations, flatten([
    mutualRelationship([humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush, entityTags_1.RelationshipTag.disable_mutual_crush_dating]),
    mutualRelationship([humans_1.HumanName.Alex, humans_1.HumanName.Cecil], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush, entityTags_1.RelationshipTag.like, entityTags_1.RelationshipTag.disable_mutual_crush_dating]),
    mutualRelationship([humans_1.HumanName.Dan, humans_1.HumanName.Beatrice], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush]),
    mutualRelationship([humans_1.HumanName.Dan, humans_1.HumanName.Flavie], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush, entityTags_1.RelationshipTag.like]),
    mutualRelationship([humans_1.HumanName.Cecil, humans_1.HumanName.Flavie], [entityTags_1.RelationshipTag.like]),
    new peopleGraph_1.Relationship([humans_1.HumanName.Cecil, humans_1.HumanName.Flavie], new Set([entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush])),
]), [
    [humans_1.HumanName.Cecil, entityTags_1.HumanTag.introvert],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.extrovert],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.angry_drunk],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.promiscuous],
], [
    [[humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], 7],
    [[humans_1.HumanName.Dan, humans_1.HumanName.Beatrice], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Dan], 7],
    [[humans_1.HumanName.Dan, humans_1.HumanName.Flavie], 7],
    [[humans_1.HumanName.Flavie, humans_1.HumanName.Dan], 7],
    [[humans_1.HumanName.Cecil, humans_1.HumanName.Flavie], 7],
], [
    new situations_1.Sympathies(),
    new situations_1.NobodyLikesAngryDrunk(),
    new situations_1.AlexAndCecil(),
    new situations_1.MutualCrush(),
    new situations_1.EternalCouple(humans_1.HumanName.Dan, humans_1.HumanName.Flavie),
    new situations_1.AlexAndBeatriceGetDrunk(),
    bowlingbrawl,
    flavieFomo2,
    flavieFomo1,
    danTwoGirlfriendsBusted,
    baseFondnessChanges,
    fragileFlavie2,
    fragileFlavie1,
    new situations_1.Depression(),
    alexSupportive,
    new situations_1.BeatriceBreakups(),
    new situations_1.UpdateFondnessBasedTags(),
    new situations_1.EricVSAAndB(),
]));


/***/ }),

/***/ "./src/content/locations.ts":
/*!**********************************!*\
  !*** ./src/content/locations.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocationName;
(function (LocationName) {
    LocationName["Bowling"] = "Bowling";
    LocationName["Drink"] = "Drinking";
    LocationName["Hiking"] = "Hiking";
})(LocationName = exports.LocationName || (exports.LocationName = {}));


/***/ }),

/***/ "./src/content/situations.ts":
/*!***********************************!*\
  !*** ./src/content/situations.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var situation_1 = __webpack_require__(/*! ../model/situation */ "./src/model/situation.ts");
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var humans_1 = __webpack_require__(/*! ./humans */ "./src/content/humans.ts");
var locations_1 = __webpack_require__(/*! ./locations */ "./src/content/locations.ts");
var SituationUtils = /** @class */ (function () {
    function SituationUtils() {
    }
    SituationUtils.startToDate = function (couple) {
        var a = couple[0], b = couple[1];
        return this.changeRelationship(couple, [entityTags_1.RelationshipTag.lover], [entityTags_1.RelationshipTag.crush, entityTags_1.RelationshipTag.ex], +10).setDescription("After having fun at the night out, " + a + " and " + b + " started dating.");
    };
    SituationUtils.breakUp = function (couple) {
        var a = couple[0], b = couple[1];
        return this.changeRelationship(couple, [entityTags_1.RelationshipTag.ex], [entityTags_1.RelationshipTag.lover], -6).setDescription(a + " and " + b + " broke up!");
    };
    SituationUtils.changeRelationship = function (couple, addedRelTags, removedRelTags, fondnessChange, description) {
        var a = couple[0], b = couple[1];
        function broadcast(tags) {
            var res = new Array;
            for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
                var tag = tags_1[_i];
                res.push([[a, b], tag]);
                res.push([[b, a], tag]);
            }
            return res;
        }
        return new situation_1.SituationEffect(description)
            .addRelTags(broadcast(addedRelTags))
            .removeRelTags(broadcast(removedRelTags))
            .changeFondness([
            [[a, b], fondnessChange],
            [[b, a], fondnessChange],
        ]);
    };
    SituationUtils.getSomeoneOnTripWithTag = function (trip, person, currentState, tag) {
        return trip.goPeople
            .filter(function (oPerson) { return oPerson.name != person; })
            .find(function (oPerson) { return currentState.getRelationshipsBetween(person, oPerson.name).some(function (t) { return t == tag; }); });
    };
    SituationUtils.getLovers = function (person, currentState) {
        var res = [];
        for (var _i = 0, _a = currentState.getOutRelationships(person); _i < _a.length; _i++) {
            var rel = _a[_i];
            if (rel.tags.has(entityTags_1.RelationshipTag.lover)) {
                res.push(rel.people[1]);
            }
        }
        return res;
    };
    SituationUtils.isSingle = function (person, currentState) {
        return this.getLovers(person, currentState).length == 0;
    };
    SituationUtils.subset = function (as, bs) {
        return as.every(function (a) { return bs.includes(a); });
    };
    return SituationUtils;
}());
exports.SituationUtils = SituationUtils;
var SimpleSituation = /** @class */ (function () {
    function SimpleSituation(haveToBePresent, cannotBePresent, allowedLocations, effect) {
        this.haveToBePresent = haveToBePresent;
        this.cannotBePresent = cannotBePresent;
        this.allowedLocations = allowedLocations;
        this.effect = effect;
    }
    SimpleSituation.prototype.GetApplicableEffects = function (trip, _) {
        return this.isApplicable(trip) ? this.effect : new Array();
    };
    SimpleSituation.prototype.isApplicable = function (trip) {
        var namesPresent = trip.goPeople.map(function (p) { return p.name; });
        return this.haveToBePresent.every(function (hp) { return namesPresent.includes(hp); }) &&
            this.cannotBePresent.every(function (cp) { return !namesPresent.includes(cp); }) &&
            this.allowedLocations.some(function (loc) { return loc == trip.goLocation; });
    };
    return SimpleSituation;
}());
exports.SimpleSituation = SimpleSituation;
var NobodyLikesAngryDrunk = /** @class */ (function () {
    function NobodyLikesAngryDrunk() {
    }
    NobodyLikesAngryDrunk.prototype.GetApplicableEffects = function (trip, currentState) {
        if (trip.goLocation != locations_1.LocationName.Drink) {
            return [];
        }
        var effects = new Array();
        trip.goPeople.forEach(function (person) {
            var personTags = currentState.getHumTags(person.name);
            if (personTags.has(entityTags_1.HumanTag.angry_drunk)) {
                var effect_1 = new situation_1.SituationEffect()
                    .setDescription(person.name + " got drunk and angry; the others weren't happy about that.");
                trip.goPeople.filter(function (p) { return p != person; }).forEach(function (otherPerson) {
                    effect_1.changeFondness([[[otherPerson.name, person.name], -1]]);
                });
                effects.push(effect_1);
            }
        });
        return effects;
    };
    return NobodyLikesAngryDrunk;
}());
exports.NobodyLikesAngryDrunk = NobodyLikesAngryDrunk;
var MutualCrush = /** @class */ (function () {
    function MutualCrush() {
    }
    MutualCrush.prototype.GetApplicableEffects = function (trip, currentState) {
        var _a;
        var effects = new Array();
        var crushesMap = new Map();
        var eligiblePeople = [];
        var _loop_1 = function (person) {
            var loverOnTrip = SituationUtils.getSomeoneOnTripWithTag(trip, person.name, currentState, entityTags_1.RelationshipTag.lover);
            if (loverOnTrip) {
                return "continue";
            }
            if (SituationUtils.getLovers(person.name, currentState).length >= 1
                && !currentState.getHumTags(person.name).has(entityTags_1.HumanTag.promiscuous)) {
                return "continue";
            }
            var crushesPresent = trip.goPeople.filter(function (b) { return currentState.getMutualRelationshipsBetween(person.name, b.name).includes(entityTags_1.RelationshipTag.crush); }).map(function (h) { return h.name; });
            if (crushesPresent.length != 1) {
                return "continue";
            }
            crushesMap.set(person.name, crushesPresent);
            eligiblePeople.push(person.name);
        };
        for (var _i = 0, _b = trip.goPeople; _i < _b.length; _i++) {
            var person = _b[_i];
            _loop_1(person);
        }
        for (var _c = 0, eligiblePeople_1 = eligiblePeople; _c < eligiblePeople_1.length; _c++) {
            var person = eligiblePeople_1[_c];
            var crushes = crushesMap.get(person);
            if ((crushes === null || crushes === void 0 ? void 0 : crushes.length) === 1) {
                var crush = crushes[0];
                if (!eligiblePeople.includes(crush)) {
                    continue;
                }
                if (currentState.getFondness([person, crush]) < MutualCrush.MIN_DATING_FONDNESS
                    || currentState.getFondness([crush, person]) < MutualCrush.MIN_DATING_FONDNESS) {
                    continue;
                }
                if (currentState.getMutualRelationshipsBetween(person, crush)
                    .includes(entityTags_1.RelationshipTag.disable_mutual_crush_dating)) {
                    continue;
                }
                // Break symmetry by comparing names
                if (((_a = crushesMap.get(crush)) === null || _a === void 0 ? void 0 : _a.length) === 1 && crush <= person) {
                    effects.push(SituationUtils.startToDate([person, crush]));
                }
            }
        }
        return effects;
    };
    MutualCrush.MIN_DATING_FONDNESS = 7;
    return MutualCrush;
}());
exports.MutualCrush = MutualCrush;
var EternalCouple = /** @class */ (function () {
    function EternalCouple(always, onlyWhenNotInOtherRel) {
        this.lastChange = 0;
        this.together = false;
        this.nBreakups = 0;
        this.nMakeups = 0;
        this.danBustedMessageFired = false;
        this.always = always;
        this.onlyWhenNotInOtherRel = onlyWhenNotInOtherRel;
    }
    EternalCouple.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var relationships = currentState.getMutualRelationshipsBetween(this.always, this.onlyWhenNotInOtherRel);
        if (!relationships.includes(entityTags_1.RelationshipTag.ex) && !relationships.includes(entityTags_1.RelationshipTag.lover)) {
            // Not triggered yet
            return [];
        }
        var togetherNow = relationships.includes(entityTags_1.RelationshipTag.lover);
        if (tripCount > 0 && this.together != togetherNow) {
            // Something has changed externally
            this.lastChange = tripCount;
            this.together = togetherNow;
            return [];
        }
        this.together = togetherNow;
        if (this.lastChange + EternalCouple.CHANGE_AFTER <= tripCount) {
            this.lastChange = tripCount;
            var effect = void 0;
            var description = void 0;
            var wrapperIndex = void 0;
            if (!this.together) {
                if (currentState.getOutRelationshipsOfType(this.onlyWhenNotInOtherRel, entityTags_1.RelationshipTag.lover).length > 0) {
                    // is in relationship -> not getting back togther
                    // Something has changed externally
                    this.lastChange = tripCount;
                    this.together = togetherNow;
                    return [];
                }
                effect = SituationUtils.startToDate([this.always, this.onlyWhenNotInOtherRel]);
                description = this.always + " and " + this.onlyWhenNotInOtherRel + " started dating";
                wrapperIndex = this.nMakeups;
                this.nMakeups++;
            }
            else {
                effect = SituationUtils.breakUp([this.always, this.onlyWhenNotInOtherRel]);
                description = this.always + " and " + this.onlyWhenNotInOtherRel + " broke up";
                wrapperIndex = this.nBreakups;
                this.nBreakups++;
            }
            var wrappedDescriptions = [
                description + ".",
                description + " again.",
                "You won't believe this: " + description + " again.",
                description + ", yet again.",
                description + ", to nobody's surprise.",
            ];
            if (!this.danBustedMessageFired && currentState.getHumTags(humans_1.HumanName.Dan).has(entityTags_1.HumanTag.dan_busted)) {
                this.danBustedMessageFired = true;
                effect.setDescription("What? Even after Dan's shenanigans," +
                    " it seems that Flavie forgave him and they got back together...!?");
            }
            else {
                wrapperIndex = Math.min(wrapperIndex, wrappedDescriptions.length - 1);
                effect.setDescription(wrappedDescriptions[wrapperIndex]);
            }
            return [effect];
        }
        else {
            return [];
        }
    };
    EternalCouple.CHANGE_AFTER = 3;
    return EternalCouple;
}());
exports.EternalCouple = EternalCouple;
var Complex = /** @class */ (function () {
    function Complex(fields) {
        this.humReq = Array();
        this.humBan = Array();
        this.allowedLocations = Array();
        this.humTagsReq = Array();
        this.humTagsBan = Array();
        this.relTagsReq = Array();
        this.relTagsBan = Array();
        this.effects = Array();
        if (fields)
            Object.assign(this, fields);
    }
    Complex.prototype.GetApplicableEffects = function (trip, currentState) {
        return this.isApplicable(trip, currentState)
            ? this.processEffects ? this.processEffects(trip, currentState, this.effects) : this.effects
            : new Array();
    };
    Complex.prototype.isApplicable = function (trip, currentState) {
        var namesPresent = trip.goPeople.map(function (p) { return p.name; });
        // If no locations are set, this means all locations are allowed
        var locationOk = (this.allowedLocations.length === 0)
            || this.allowedLocations.some(function (loc) { return loc == trip.goLocation; });
        return locationOk &&
            this.humReq.every(function (hp) { return namesPresent.includes(hp); }) &&
            this.humBan.every(function (cp) { return !namesPresent.includes(cp); }) &&
            this.humTagsReq.every(function (hr) { return currentState.getHumTags(hr[0]).has(hr[1]); }) &&
            this.humTagsBan.every(function (br) { return !currentState.getHumTags(br[0]).has(br[1]); }) &&
            this.relTagsReq.every(function (rr) { return currentState.getRelTags(rr[0]).has(rr[1]); }) &&
            this.relTagsBan.every(function (br) { return !currentState.getRelTags(br[0]).has(br[1]); });
    };
    return Complex;
}());
exports.Complex = Complex;
var Sympathies = /** @class */ (function () {
    function Sympathies() {
    }
    Sympathies.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var effect = new situation_1.SituationEffect();
        for (var _i = 0, _a = currentState.getAllRelationships(); _i < _a.length; _i++) {
            var r = _a[_i];
            // Both parties must be present
            if (r.people.every(function (p) { return trip.goPeople.map(function (q) { return q.name; }).includes(p); })) {
                if (r.tags.has(entityTags_1.RelationshipTag.like)) {
                    effect.changeFondness([[r.people, Sympathies.LIKE_CHANGE]]);
                }
                if (r.tags.has(entityTags_1.RelationshipTag.dislike)) {
                    effect.changeFondness([[r.people, Sympathies.DISLIKE_CHANGE]]);
                }
            }
        }
        return [effect];
    };
    Sympathies.LIKE_CHANGE = +1;
    Sympathies.DISLIKE_CHANGE = -1;
    return Sympathies;
}());
exports.Sympathies = Sympathies;
var UpdateFondnessBasedTags = /** @class */ (function () {
    function UpdateFondnessBasedTags() {
    }
    UpdateFondnessBasedTags.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var effect = new situation_1.SituationEffect();
        var otherEffects = [];
        for (var _i = 0, _a = currentState.getHumanNames(); _i < _a.length; _i++) {
            var a = _a[_i];
            for (var _b = 0, _c = currentState.getHumanNames(); _b < _c.length; _b++) {
                var b = _c[_b];
                if (a == b)
                    continue;
                var fondness = currentState.getFondness([a, b]);
                var mutualRelationships = currentState.getMutualRelationshipsBetween(a, b);
                var relationships = currentState.getRelationshipsBetween(a, b);
                if (fondness >= 5 && relationships.includes(entityTags_1.RelationshipTag.crushable)) {
                    if (!mutualRelationships.includes(entityTags_1.RelationshipTag.lover)) {
                        effect.addRelTags([
                            [[a, b], entityTags_1.RelationshipTag.crush],
                        ]);
                    }
                }
                else {
                    effect.removeRelTags([
                        [[a, b], entityTags_1.RelationshipTag.crush],
                    ]);
                    if (a < b && mutualRelationships.includes(entityTags_1.RelationshipTag.lover)) {
                        otherEffects.push(SituationUtils.breakUp([a, b]));
                    }
                }
            }
        }
        otherEffects.push(effect);
        return otherEffects;
    };
    return UpdateFondnessBasedTags;
}());
exports.UpdateFondnessBasedTags = UpdateFondnessBasedTags;
var BeatriceBreakups = /** @class */ (function () {
    function BeatriceBreakups() {
        this.relationshipLength = -1;
        this.lover = null;
    }
    BeatriceBreakups.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var lovers = SituationUtils.getLovers(humans_1.HumanName.Beatrice, currentState);
        var newLover = lovers.length == 0 ? null : lovers[0];
        if (this.lover !== newLover) {
            this.relationshipLength = -1;
            this.lover = newLover;
        }
        else {
            this.relationshipLength++;
            console.assert(lovers.length <= 1);
        }
        if (this.lover != null && this.relationshipLength >= BeatriceBreakups.BREAK_UP_AFTER) {
            return [
                SituationUtils.breakUp([humans_1.HumanName.Beatrice, lovers[0]]).setDescription("Oh no... Beatrice got into a big fight with " + lovers[0] + ", and they broke up."
                    + " She's been looking really depressed since...").addHumTags([[humans_1.HumanName.Beatrice, entityTags_1.HumanTag.depressed]]),
            ];
        }
        else {
            return [];
        }
    };
    BeatriceBreakups.BREAK_UP_AFTER = 2;
    return BeatriceBreakups;
}());
exports.BeatriceBreakups = BeatriceBreakups;
var AlexAndBeatriceGetDrunk = /** @class */ (function () {
    function AlexAndBeatriceGetDrunk() {
    }
    AlexAndBeatriceGetDrunk.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var peoplePresent = trip.goPeople.map(function (p) { return p.name; });
        if (!SituationUtils.subset([humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], peoplePresent)) {
            return [];
        }
        if (trip.goLocation != locations_1.LocationName.Drink) {
            return [];
        }
        // Beatrice must be single, but it's sufficient for Alex's lover not to be present
        if (SituationUtils.getLovers(humans_1.HumanName.Beatrice, currentState).length > 0) {
            return [];
        }
        var alexLoverOnTrip = SituationUtils.getSomeoneOnTripWithTag(trip, humans_1.HumanName.Alex, currentState, entityTags_1.RelationshipTag.lover);
        if (alexLoverOnTrip) {
            return [];
        }
        if (!currentState.getMutualRelationshipsBetween(humans_1.HumanName.Alex, humans_1.HumanName.Beatrice)
            .includes(entityTags_1.RelationshipTag.crush)) {
            return [];
        }
        var alexLovers = SituationUtils.getLovers(humans_1.HumanName.Alex, currentState);
        if (alexLovers.length === 0) {
            // Alex is single
            return [
                SituationUtils.startToDate([humans_1.HumanName.Alex, humans_1.HumanName.Beatrice])
                    .setDescription("Encouraged by alcohol, Alex and Beatrice revealed their true feelings towards"
                    + " one another! After going home together at the night out with you, they started dating."),
            ];
        }
        else {
            // Alex has a lover
            var lover = alexLovers[0];
            return [
                SituationUtils.breakUp([humans_1.HumanName.Alex, lover])
                    .setDescription("Encouraged by alcohol, Alex cheated on " + lover + " with Beatrice." +
                    (" " + lover + " found out and broke up with Alex."))
                    .changeFondness([
                    [[lover, humans_1.HumanName.Alex], -2],
                    [[lover, humans_1.HumanName.Beatrice], -4],
                    [[lover, humans_1.HumanName.You], -3],
                ])
                    .removeRelTags([
                    [[humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.crushable],
                    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.crushable],
                ])
                    .addRelTags([
                    [[lover, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.dislike],
                    [[humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.awkawardness],
                    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.awkawardness],
                ]),
            ];
        }
        return [];
    };
    return AlexAndBeatriceGetDrunk;
}());
exports.AlexAndBeatriceGetDrunk = AlexAndBeatriceGetDrunk;
var EricVSAAndB = /** @class */ (function () {
    function EricVSAAndB() {
        this.state = "init";
        this.abVisibleStartedDating = 0;
    }
    EricVSAAndB.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        if (this.state == "init") {
            if (trip.allPresent(humans_1.HumanName.Alex, humans_1.HumanName.Beatrice, humans_1.HumanName.Eric) &&
                currentState.haveMutualRelationshipTag(humans_1.HumanName.Alex, humans_1.HumanName.Beatrice, entityTags_1.RelationshipTag.lover)) {
                this.abVisibleStartedDating = tripCount;
                this.state = "abDating";
                return [new situation_1.SituationEffect()
                        .setDescription("Eric said something about Alex's and Beatrice's relationship being unnatural and stormed off.")
                        .changeFondness([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], -4],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], -4],
                        [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], -2],
                        [[humans_1.HumanName.Alex, humans_1.HumanName.Eric], -2]
                    ])
                        .addRelTags([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.dislike],
                    ])
                ];
            }
        }
        else if (this.state == "abDating" && tripCount >= 2 + this.abVisibleStartedDating) {
            if (trip.allPresent(humans_1.HumanName.Eric, humans_1.HumanName.Cecil) &&
                currentState.getFondness([humans_1.HumanName.Eric, humans_1.HumanName.Cecil]) > 3 && currentState.getFondness([humans_1.HumanName.Cecil, humans_1.HumanName.Eric]) > 4) {
                this.state = "cecilCrush";
                return [new situation_1.SituationEffect()
                        .setDescription("Eric and Cecil seem awfully close, for how harsh Eric was towards Alex and Beatrice...")
                        .addRelTags([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Cecil], entityTags_1.RelationshipTag.crush],
                        [[humans_1.HumanName.Cecil, humans_1.HumanName.Eric], entityTags_1.RelationshipTag.crush],
                    ])
                ];
            }
        }
        else if (this.state == "cecilCrush" && tripCount >= 2 + this.abVisibleStartedDating) {
            if (currentState.haveMutualRelationshipTag(humans_1.HumanName.Eric, humans_1.HumanName.Cecil, entityTags_1.RelationshipTag.lover)) {
                this.state = "done";
                return [new situation_1.SituationEffect()
                        .setDescription("Oh! Eric must have been repressing these feelings for a while. Now that he's dating Cecil he went to apologize to Alex and Beatrice...")
                        .changeFondness([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], 4],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], 4],
                        [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], 2],
                        [[humans_1.HumanName.Alex, humans_1.HumanName.Eric], 2]
                    ])
                        .removeRelTags([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.dislike],
                    ])
                ];
            }
        }
        return [];
    };
    return EricVSAAndB;
}());
exports.EricVSAAndB = EricVSAAndB;
var CecilCrushConandrum = /** @class */ (function () {
    function CecilCrushConandrum() {
        this.flavieAndDanBreakupCounter = 0;
        this.togetherWas = false;
        this.triggered = false;
    }
    CecilCrushConandrum.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var relationships = currentState.getMutualRelationshipsBetween(humans_1.HumanName.Dan, humans_1.HumanName.Flavie);
        var togetherNow = relationships.includes(entityTags_1.RelationshipTag.lover);
        if (togetherNow === false && this.togetherWas === true) {
            this.flavieAndDanBreakupCounter += 1;
        }
        if (!this.triggered &&
            this.flavieAndDanBreakupCounter >= 2 &&
            currentState.getFondness([humans_1.HumanName.Flavie, humans_1.HumanName.Cecil]) > 8 &&
            currentState.getOutRelationshipsOfType(humans_1.HumanName.Flavie, entityTags_1.RelationshipTag.lover)) {
            this.triggered = true;
            return [new situation_1.SituationEffect()
                    .setDescription("Flavie is starting to see that Cecil might be right for her after all!")
                    .addRelTags([
                    [[humans_1.HumanName.Flavie, humans_1.HumanName.Cecil], entityTags_1.RelationshipTag.crush],
                ])
            ];
        }
        this.togetherWas = togetherNow;
        return [];
    };
    return CecilCrushConandrum;
}());
exports.CecilCrushConandrum = CecilCrushConandrum;
var AlexAndCecil = /** @class */ (function () {
    function AlexAndCecil() {
        this.fired = false;
    }
    AlexAndCecil.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        if (this.fired)
            return [];
        var a = humans_1.HumanName.Alex;
        var c = humans_1.HumanName.Cecil;
        if (trip.allAbsent(a, c)
            && currentState.getFondness([a, c]) >= 7
            && currentState.getFondness([c, a]) >= 7
            && SituationUtils.isSingle(a, currentState)
            && SituationUtils.isSingle(c, currentState)) {
            this.fired = true;
            return [SituationUtils.startToDate([a, c])
                    .setDescription("While you were out with other people, Alex started dating Cecil,"
                    + " since they found out they enjoy each others' company so much.")];
        }
        else {
            return [];
        }
    };
    return AlexAndCecil;
}());
exports.AlexAndCecil = AlexAndCecil;
var Depression = /** @class */ (function () {
    function Depression() {
    }
    Depression.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var effect = new situation_1.SituationEffect();
        for (var _i = 0, _a = currentState.getHumanNames(); _i < _a.length; _i++) {
            var a = _a[_i];
            if (currentState.getHumTags(a).has(entityTags_1.HumanTag.depressed)) {
                if (!SituationUtils.isSingle(a, currentState)) {
                    // Having a lover removes depression
                    effect.removeHumTags([[a, entityTags_1.HumanTag.depressed]]);
                }
                else {
                    for (var _b = 0, _c = currentState.getHumanNames(); _b < _c.length; _b++) {
                        var b = _c[_b];
                        if (a == b)
                            continue;
                        effect.changeFondness([[[a, b], -1]]);
                    }
                }
            }
        }
        return [effect];
    };
    return Depression;
}());
exports.Depression = Depression;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var board_1 = __webpack_require__(/*! ./management/board */ "./src/management/board.ts");
var loading_1 = __webpack_require__(/*! ./utils/loading */ "./src/utils/loading.ts");
var gameConfig = {
    title: 'Overly Fragile Relationships',
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 500,
    },
    parent: 'content',
    backgroundColor: '#888',
    scene: [loading_1.LoadingScene, board_1.BoardScene],
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/management/board.ts":
/*!*********************************!*\
  !*** ./src/management/board.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var levels_1 = __webpack_require__(/*! ../content/levels */ "./src/content/levels.ts");
var tripSummary_1 = __webpack_require__(/*! ../model/tripSummary */ "./src/model/tripSummary.ts");
var phone_stage_1 = __webpack_require__(/*! ./phone_stage */ "./src/management/phone_stage.ts");
var human_stage_1 = __webpack_require__(/*! ./human_stage */ "./src/management/human_stage.ts");
var location_stage_1 = __webpack_require__(/*! ./location_stage */ "./src/management/location_stage.ts");
var modal_1 = __webpack_require__(/*! ../utils/modal */ "./src/utils/modal.ts");
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
var BoardScene = /** @class */ (function (_super) {
    __extends(BoardScene, _super);
    function BoardScene() {
        var _this = _super.call(this, {
            key: 'management',
        }) || this;
        _this.messageQueue = undefined;
        _this.level = levels_1.levels[0];
        _this.tripSummary = new tripSummary_1.TripSummary(_this.level.humans[0]);
        return _this;
    }
    BoardScene.prototype.preload = function () {
        this.transitionFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(2001);
        var music = this.sound.add('main_music', {
            volume: 0.5,
            loop: true,
        }).play();
    };
    BoardScene.prototype.create = function () {
        var _this = this;
        this.add.image(0, 0, 'board_background')
            .setOrigin(0, 0);
        this.tripFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', function () { return _this.goBack(); });
        this.infoText = this.add.text(400, 110, '', { fill: '#fff', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001)
            .setAlpha(0)
            .setAlign('center')
            .setWordWrapWidth(550)
            .setOrigin(0.5, 0);
        this.locationStage = new location_stage_1.LocationStage(this, this.level);
        this.humanStage = new human_stage_1.HumanStage(this, this.level);
        this.phone = new phone_stage_1.PhoneStage(this);
        this.add.tween({
            targets: this.transitionFader,
            alpha: { from: 1, to: 0 },
            duration: 500,
        });
    };
    BoardScene.prototype.goOut = function (location) {
        var _this = this;
        if (this.tripSummary.goPeople.length <= 1) {
            var tutorial = 'Select some of your friends to join you.';
            if (location == 'Hiking') {
                new modal_1.ModalDialog(this, "You can't go hiking alone.\n" + tutorial);
            }
            else if (location == 'Bowling') {
                new modal_1.ModalDialog(this, "You can't go bowling alone.\n" + tutorial);
            }
            else if (location == 'Drinking') {
                new modal_1.ModalDialog(this, "You can't go drinking alone.\n" + tutorial);
            }
            return;
        }
        this.tripSummary.prepare(location);
        var message = this.level.goOut(this, this.tripSummary);
        this.tripFader.input.enabled = false;
        this.locationStage.enable(false);
        this.infoText.setText(message);
        this.tempPeoplePortraits = utils_1.Utils.drawPortraits(this.tripSummary.goPeople, this);
        for (var _i = 0, _a = this.tempPeoplePortraits.children.getArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            this.add.tween({
                targets: child,
                alpha: { from: 0, to: 1 },
                duration: 500,
            });
        }
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 0, to: 1 },
            duration: 500,
            onComplete: function () {
                _this.tripFader.input.enabled = true;
                _this.locationStage.enable(true);
                _this.refresh();
            }
        });
    };
    BoardScene.prototype.goBack = function () {
        var _this = this;
        this.humanStage.bleachPeople();
        this.tripFader.input.enabled = false;
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: function () {
                _this.tripFader.input.enabled = true;
                // check if message queue has something
                if (_this.messageQueue) {
                    new modal_1.ModalDialog(_this, _this.messageQueue[0], _this.messageQueue[1]);
                }
            }
        });
        var _loop_1 = function (child) {
            this_1.add.tween({
                targets: child,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: function () {
                    child.destroy();
                    _this.tempPeoplePortraits.destroy(false);
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.tempPeoplePortraits.children.getArray(); _i < _a.length; _i++) {
            var child = _a[_i];
            _loop_1(child);
        }
    };
    BoardScene.prototype.refresh = function () {
        var _a, _b, _c;
        this.tripSummary = new tripSummary_1.TripSummary(this.level.humans[0]);
        (_a = this.phone) === null || _a === void 0 ? void 0 : _a.display(this.level.humans[0], 0);
        (_b = this.humanStage) === null || _b === void 0 ? void 0 : _b.redrawLines(this.level);
        (_c = this.humanStage) === null || _c === void 0 ? void 0 : _c.display(this.level.humans[0], 0);
    };
    BoardScene.prototype.fail = function (message) {
        this.messageQueue = [message, function () { window.location.reload(); }];
    };
    return BoardScene;
}(Phaser.Scene));
exports.BoardScene = BoardScene;


/***/ }),

/***/ "./src/management/human_stage.ts":
/*!***************************************!*\
  !*** ./src/management/human_stage.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entityTags_1 = __webpack_require__(/*! ../content/entityTags */ "./src/content/entityTags.ts");
var peopleGraph_1 = __webpack_require__(/*! ../model/peopleGraph */ "./src/model/peopleGraph.ts");
var HumanStage = /** @class */ (function () {
    function HumanStage(scene, level) {
        var _this = this;
        this.scene = scene;
        this.level = level;
        this.allPeopleTexts = [];
        this.allPeopleCircles = [];
        this.allPeopleLines = [];
        this.allPeopleWarning = [];
        this.TEXT_ALPHA_OK = 1;
        this.TEXT_ALPHA_BD = 0.3;
        this.CIRCLE_ALPHA_OK = 0.2;
        this.CIRCLE_ALPHA_BD = 0;
        this.WARNING_ALPHA_OK = 0.4;
        this.WARNING_ALPHA_BD = 0;
        var centerX = 450;
        var centerY = 180;
        var radius = 150;
        var radiusInner = 145;
        this.positions = level.humans.map(function (_, i) {
            var angle = 2 * Math.PI * (i + 0.5) / level.humans.length;
            return {
                x: centerX + Math.cos(angle) * radius,
                y: centerY + Math.sin(angle) * radius,
            };
        });
        this.positionsInner = level.humans.map(function (_, i) {
            var angle = 2 * Math.PI * (i + 0.5) / level.humans.length;
            return {
                x: centerX + Math.cos(angle) * radiusInner,
                y: centerY + Math.sin(angle) * radiusInner,
            };
        });
        var _loop_1 = function (i) {
            var human = level.humans[i];
            var position = this_1.positions[i];
            var circle = scene.add.ellipse(0, 0, 80, 80, 0x2e2e2e)
                .setOrigin(0.5, 0.5)
                .setAlpha((Number(i) == 0 ? this_1.CIRCLE_ALPHA_OK : this_1.CIRCLE_ALPHA_BD));
            var image = scene.add.image(0, 0, 'portrait_small', i)
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', function () {
                _this.display(human, Number(i));
            })
                .on('pointerout', function () {
                _this.display(level.humans[0], 0);
            });
            var text = scene.add.text(0, 0, "" + human.name, {
                fill: '#1c1c1c',
                fontFamily: 'Roboto',
                fontSize: '18px',
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .setAlpha(Number(i) == 0 ? this_1.TEXT_ALPHA_OK : this_1.TEXT_ALPHA_BD);
            var warning = scene.add.ellipse(0, 0, 10, 10, 0xff0000)
                .setOrigin(0.5, 0.5)
                .setAlpha(this_1.WARNING_ALPHA_OK);
            scene.add.group([image, text, circle, warning]).setXY(position.x, position.y);
            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100 + 10);
            circle.setPosition(position.x, position.y + 50 + 10);
            image.setPosition(position.x, position.y + 45 + 10);
            warning.setPosition(position.x + 10, position.y + 30);
            if (Number(i) != 0) {
                var onClick = function () {
                    if (scene.tripSummary.flipGoPeople(human)) {
                        scene.tweens.add({
                            targets: text,
                            alpha: { from: _this.TEXT_ALPHA_BD, to: _this.TEXT_ALPHA_OK },
                            duration: 500,
                        });
                        scene.tweens.add({
                            targets: circle,
                            alpha: { from: _this.CIRCLE_ALPHA_BD, to: _this.CIRCLE_ALPHA_OK },
                            duration: 500,
                        });
                    }
                    else {
                        scene.tweens.add({
                            targets: text,
                            alpha: { from: _this.TEXT_ALPHA_OK, to: _this.TEXT_ALPHA_BD },
                            duration: 500,
                        });
                        scene.tweens.add({
                            targets: circle,
                            alpha: { from: _this.CIRCLE_ALPHA_OK, to: _this.CIRCLE_ALPHA_BD },
                            duration: 500,
                        });
                    }
                };
                text.on('pointerdown', onClick);
                circle.on('pointerdown', onClick);
                image.on('pointerdown', onClick);
            }
            this_1.allPeopleTexts.push(text);
            this_1.allPeopleCircles.push(circle);
            this_1.allPeopleWarning.push(warning);
        };
        var this_1 = this;
        for (var i in level.humans) {
            _loop_1(i);
        }
        this.redrawLines(level);
    }
    HumanStage.prototype.bleachPeople = function () {
        for (var i in this.level.humans) {
            if (Number(i) != 0) {
                this.allPeopleTexts[i].setAlpha(this.TEXT_ALPHA_BD);
                this.allPeopleCircles[i].setAlpha(this.CIRCLE_ALPHA_BD);
            }
        }
    };
    HumanStage.prototype.display = function (human, index) {
        for (var i in this.allPeopleLines) {
            // I very much admit that this is super slow and unoptimized
            // BUT WTF IS NOT GROUP ALPHA EXPOSED PUBLICLY
            if (Number(i) == index) {
                for (var _i = 0, _a = this.allPeopleLines[i].children.getArray(); _i < _a.length; _i++) {
                    var child = _a[_i];
                    this.scene.tweens.add({
                        targets: child,
                        alpha: { from: child.alpha, to: 1 },
                        duration: 300,
                    });
                }
            }
            else {
                for (var _b = 0, _c = this.allPeopleLines[i].children.getArray(); _b < _c.length; _b++) {
                    var child = _c[_b];
                    this.scene.tweens.add({
                        targets: child,
                        alpha: { from: child.alpha, to: 0 },
                        duration: 300,
                    });
                }
            }
        }
        this.scene.phone.display(human, Number(index));
    };
    HumanStage.prototype.linearScaleBlack = function (level) {
        // level is 0 to 1
        // return Math.round(level*255*255*255) + Math.round(level*255) + Math.round(level*255)
        // level is 0 to 10
        if (level <= 2) {
            return 0xde0000;
        }
        else if (level <= 4) {
            return 0xd46c6c;
        }
        else if (level <= 6) {
            return 0xa3a3a3;
        }
        else if (level <= 8) {
            return 0x70cc78;
        }
        else {
            return 0x00de13;
        }
    };
    HumanStage.prototype.redrawLines = function (level) {
        var _this = this;
        for (var _i = 0, _a = this.allPeopleLines; _i < _a.length; _i++) {
            var g = _a[_i];
            g.destroy(true);
        }
        this.allPeopleLines = [];
        var peopleGraph = level.friendshipManager.peopleGraph;
        var _loop_2 = function (hi1) {
            var human1 = level.humans[hi1];
            var group = this_2.scene.add.group()
                .setXY(0, 50);
            for (var hi2 in level.humans) {
                var human2 = level.humans[hi2];
                if (hi1 == hi2)
                    continue;
                // change fw
                var youChange = human1.name == 'You';
                if (youChange) {
                    var tmp = human2;
                    human2 = human1;
                    human1 = tmp;
                }
                var tags = Array
                    .from(peopleGraph.getRelTags([human1.name, human2.name]))
                    .filter(function (x) { return entityTags_1.relationshipTagMap.has(x); });
                var fondness = peopleGraph.getFondness([human1.name, human2.name]);
                var graphics = this_2.scene.add.graphics();
                if (fondness != peopleGraph_1.DEFAULT_FONDNESS || tags.length != 0) {
                    var diffX = (this_2.positionsInner[hi1].x - this_2.positionsInner[hi2].x);
                    var diffY = (this_2.positionsInner[hi1].y - this_2.positionsInner[hi2].y);
                    var diffXN = diffX / Math.sqrt(diffX * diffX + diffY * diffY);
                    var diffYN = diffY / Math.sqrt(diffX * diffX + diffY * diffY);
                    var color = this_2.linearScaleBlack(fondness);
                    var x1 = this_2.positionsInner[hi1].x - 45 * diffXN;
                    var y1 = this_2.positionsInner[hi1].y + 60 - 45 * diffYN;
                    var x2 = this_2.positionsInner[hi2].x + 45 * diffXN;
                    var y2 = this_2.positionsInner[hi2].y + 60 + 45 * diffYN;
                    var line = this_2.scene.add.line(0, 0, x1, y1, x2, y2, color, 0.3)
                        .setOrigin(0, 0)
                        .setLineWidth(2);
                    group.add(line);
                    var triangle = this_2.scene.add.triangle(youChange ? x1 : x2, youChange ? y1 : y2, -10, 0, 10, 0, 0, 10, color)
                        .setOrigin(0, 0)
                        .setRotation(Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2 + (youChange ? Math.PI : 0));
                    group.add(triangle);
                }
                for (var i in tags) {
                    var tag = tags[i];
                    var avgX = (this_2.positionsInner[hi1].x + this_2.positionsInner[hi2].x) / 2;
                    var avgY = (this_2.positionsInner[hi1].y + this_2.positionsInner[hi2].y) / 2 + 60;
                    var symbol = this_2.scene.add.image(avgX + (Number(i) - tags.length / 2 + 0.4) * 27, avgY, 'rel_tags')
                        .setFrame(tag)
                        .setDisplaySize(25, 25);
                    group.add(symbol);
                }
                // change back 
                if (youChange) {
                    var tmp = human2;
                    human2 = human1;
                    human1 = tmp;
                }
            }
            group.setAlpha(0);
            this_2.allPeopleLines.push(group);
            var fondnessBad = this_2.level.humans.map(function (x) { return x.name == human1.name ? 10 : _this.level.friendshipManager.peopleGraph.getFondness([human1.name, x.name]); }).some(function (x) { return x <= 2; });
            this_2.allPeopleWarning[hi1].setAlpha(fondnessBad ? this_2.WARNING_ALPHA_OK : this_2.WARNING_ALPHA_BD);
        };
        var this_2 = this;
        for (var hi1 in level.humans) {
            _loop_2(hi1);
        }
    };
    return HumanStage;
}());
exports.HumanStage = HumanStage;


/***/ }),

/***/ "./src/management/location_stage.ts":
/*!******************************************!*\
  !*** ./src/management/location_stage.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocationStage = /** @class */ (function () {
    function LocationStage(scene, level) {
        this.allLocationImage = [];
        // scene.add.rectangle(680, 0, 120, 500, 0xcccccc)
        //     .setOrigin(0, 0)
        var text = scene.add.text(689, 25, 'Activity', { fill: 'black', fontFamily: 'Roboto', fontSize: '20px' });
        var _loop_1 = function (i) {
            var location_1 = level.locations[i];
            var img = scene.add.image(682, 70 + Number(i) * 135, 'location_thumb')
                .setFrame(i)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0, 0)
                .setDisplaySize(90, 90)
                .on('pointerdown', function () {
                scene.goOut(location_1);
                scene.tripSummary.goLocation = location_1;
            });
            this_1.allLocationImage.push(img);
            var text_1 = scene.add.text(725, 85 + Number(i) * 135 + 90, "" + location_1, { fill: 'black', fontFamily: 'Roboto' })
                .setAlign('center')
                .setWordWrapWidth(120)
                .setOrigin(0.5, 0.5);
        };
        var this_1 = this;
        for (var i in level.locations) {
            _loop_1(i);
        }
    }
    LocationStage.prototype.enable = function (value) {
        for (var _i = 0, _a = this.allLocationImage; _i < _a.length; _i++) {
            var img = _a[_i];
            img.input.enabled = value;
        }
    };
    return LocationStage;
}());
exports.LocationStage = LocationStage;


/***/ }),

/***/ "./src/management/phone_stage.ts":
/*!***************************************!*\
  !*** ./src/management/phone_stage.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entityTags_1 = __webpack_require__(/*! ../content/entityTags */ "./src/content/entityTags.ts");
var humans_1 = __webpack_require__(/*! ../content/humans */ "./src/content/humans.ts");
var PhoneStage = /** @class */ (function () {
    function PhoneStage(scene) {
        // scene.add.rectangle(0, 0, 240, 500, 0xaaaaaa)
        //     .setOrigin(0, 0)
        this.scene = scene;
        this.portrait = scene.add.image(20, 20, 'portrait_big')
            .setOrigin(0, 0);
        this.nameText = scene.add.text(115, 255, '', { fill: 'black', fontFamily: 'Roboto', fontSize: '20px' })
            .setWordWrapWidth(190)
            .setAlign('center')
            .setOrigin(0.5, 0.5);
        this.infoText = scene.add.text(25, 270, '', { fill: 'black', fontFamily: 'Roboto', fontSize: '14px' })
            .setWordWrapWidth(190);
    }
    PhoneStage.prototype.display = function (human, index) {
        this.portrait.setFrame(index);
        var humString = Array.from(human.tags)
            .filter(function (x) { return entityTags_1.humanTagMap.has(x) && entityTags_1.humanTagDisplay.has(x); })
            .map(function (x) { return entityTags_1.humanTagMap.get(x); })
            .join(', ');
        // This could be perhaps done in a functional way, but this seems more readable
        var relString = [];
        var _loop_1 = function (relationship) {
            var relStringIndividual = [];
            relationship.tags.forEach(function (x) {
                if (entityTags_1.relationshipTagMap.has(x)) {
                    relStringIndividual.push(entityTags_1.relationshipTagMap.get(x));
                }
            });
            if (relStringIndividual.length != 0) {
                relString.push(relationship.people[1] + ": " + relStringIndividual.join(', '));
            }
        };
        for (var _i = 0, _a = human.relationships; _i < _a.length; _i++) {
            var relationship = _a[_i];
            _loop_1(relationship);
        }
        var bioString = humans_1.HumanBio[index];
        this.nameText.setText(humans_1.HumanName[human.name]);
        this.infoText.setText((humString + "\n\n" + bioString + "\n\n" + relString.join('\n')).replace(/^\n\n/, ''));
    };
    return PhoneStage;
}());
exports.PhoneStage = PhoneStage;


/***/ }),

/***/ "./src/model/friendshipManager.ts":
/*!****************************************!*\
  !*** ./src/model/friendshipManager.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FriendshipManager = /** @class */ (function () {
    function FriendshipManager(situations, peopleGraph) {
        this.tripCount = 0;
        this.situationAddCalendar = new Map();
        this.situations = situations;
        this.peopleGraph = peopleGraph;
    }
    FriendshipManager.prototype.applyMeeting = function (trip) {
        var _this = this;
        var _a;
        // update system with newly added situations
        var newSitForThisMeeting = (_a = this.situationAddCalendar.get(this.tripCount)) !== null && _a !== void 0 ? _a : new Array();
        this.situations.concat(newSitForThisMeeting);
        // try to apply all situations
        var appliedEffects = new Array();
        this.situations.forEach(function (situation) {
            var appEffForCurrCon = _this.tryApplyConstraint(situation, trip); // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon);
        });
        this.tripCount += 1;
        return appliedEffects;
    };
    FriendshipManager.prototype.tryApplyConstraint = function (con, trip) {
        var _this = this;
        var applicableEffects = con.GetApplicableEffects(trip, this.peopleGraph, this.tripCount);
        applicableEffects.forEach(function (eff) {
            eff.addedRelTags = eff.addedRelTags.filter(function (at) { return _this.peopleGraph.addRelTag(at[0], at[1]); });
            eff.removedRelTags = eff.removedRelTags.filter(function (at) { return _this.peopleGraph.removeRelTag(at[0], at[1]); });
            eff.addedHumTags = eff.addedHumTags.filter(function (ah) { return _this.peopleGraph.addHumTag(ah[0], ah[1]); });
            eff.removedHumTags = eff.removedHumTags.filter(function (rh) { return _this.peopleGraph.removeHumTag(rh[0], rh[1]); });
            eff.changedFondness.forEach(function (_a) {
                var couple = _a[0], change = _a[1];
                return _this.peopleGraph.changeFondness(couple, change);
            });
            eff.newFutureSituations.forEach(function (newSit) {
                _this.situationAddCalendar.set(_this.tripCount + newSit[0], newSit[1]);
            });
        });
        return applicableEffects;
    };
    return FriendshipManager;
}());
exports.FriendshipManager = FriendshipManager;


/***/ }),

/***/ "./src/model/human.ts":
/*!****************************!*\
  !*** ./src/model/human.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
        this.relationships = new Array();
        this.tags = new Set();
    }
    return Human;
}());
exports.Human = Human;


/***/ }),

/***/ "./src/model/level.ts":
/*!****************************!*\
  !*** ./src/model/level.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var peopleGraph_1 = __webpack_require__(/*! ./peopleGraph */ "./src/model/peopleGraph.ts");
var friendshipManager_1 = __webpack_require__(/*! ./friendshipManager */ "./src/model/friendshipManager.ts");
var entityTags_1 = __webpack_require__(/*! ../content/entityTags */ "./src/content/entityTags.ts");
var Level = /** @class */ (function () {
    function Level(humans, locations, relationships, initialTags, initialFondness, situations) {
        this.humans = humans;
        this.locations = locations;
        var peopleGraph = new peopleGraph_1.PeopleGraph(this.humans, relationships, initialTags, initialFondness);
        this.friendshipManager = new friendshipManager_1.FriendshipManager(situations, peopleGraph);
        // Init relationships on people
        this.updateHumansFromPeopleGraphForDisplay();
    }
    Level.prototype.updateHumansFromPeopleGraphForDisplay = function () {
        var _this = this;
        this.humans.forEach(function (h) {
            h.relationships = _this.friendshipManager.peopleGraph.getOutRelationships(h.name);
            h.tags = _this.friendshipManager.peopleGraph.getHumTags(h.name);
        });
    };
    Level.prototype.fixAgreement = function (val) {
        return val.replace(/You was/g, 'You were');
    };
    Level.prototype.goOut = function (board, tripSummary) {
        // Update friendships based on trip
        var effects = this.friendshipManager.applyMeeting(tripSummary);
        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay();
        // Debug log
        console.log("Effects:", effects);
        console.log("Humans:", this.humans);
        console.log("Relationships", this.friendshipManager.peopleGraph);
        // Construct msgs for effects
        var statusMessage = this.constructStatusMessage(effects, tripSummary);
        // construct fail msg
        var failMsgs = this.checkFondnessAndPrepareFailMsg();
        if (failMsgs.length > 0) {
            failMsgs.push("Game over.");
            board.fail(failMsgs.join('\n'));
        }
        return statusMessage;
    };
    Level.prototype.checkFondnessAndPrepareFailMsg = function () {
        var failMsgs = Array();
        for (var _i = 0, _a = this.humans; _i < _a.length; _i++) {
            var h1 = _a[_i];
            var h1HatesList = Array();
            for (var _b = 0, _c = this.humans; _b < _c.length; _b++) {
                var h2 = _c[_b];
                if (h1 == h2) {
                    continue;
                }
                else if (this.friendshipManager.peopleGraph.getFondness([h1.name, h2.name]) <= peopleGraph_1.MIN_FONDNESS) {
                    h1HatesList.push(h2.name);
                }
            }
            if (h1HatesList.length > 0) {
                var h1HatesString = h1HatesList.length == 2
                    ? h1HatesList.join(" and ")
                    : h1HatesList.join(", ");
                failMsgs.push(h1.name + " " + (h1.name == 'You' ? "hate" : "hates") + " " + h1HatesString + " too much.");
            }
        }
        return failMsgs;
    };
    Level.prototype.constructStatusMessage = function (effects, tripSummary) {
        var _this = this;
        var _a = this.reduceEffectsPerPerson(effects), perPersonRelChanges = _a.perPersonRelChanges, perPersonHumChanges = _a.perPersonHumChanges;
        this.reduceTagsShadowing(perPersonRelChanges);
        // deduplicate effect descriptions 
        var effectsMsgs = Array.from(new Set(effects.map(function (effect) { return _this.fixAgreement(effect.getRandomDescription()); })));
        // effectsMsgs.push("") // separator dummy
        // effectsMsgs = effectsMsgs.concat(this.createEffectsMsgs(perPersonRelChanges, perPersonHumChanges))
        console.log("Msgs:", effectsMsgs);
        effectsMsgs = effectsMsgs.filter(function (msg) {
            var gonePeople = _this.friendshipManager.peopleGraph.getPeopleWithTags(entityTags_1.HumanTag.gone);
            return gonePeople.every(function (gp) { return !msg.includes(gp); });
        });
        var effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "Nothing significant occurred.";
        // Construct final msg
        var friendList = tripSummary.goPeople.filter(function (x) { return x.name != 'You'; }).map(function (human) { return human.name; }).join(', ');
        var statusMessage = "You went " + tripSummary.goLocation + " with " + friendList + ".\n" + effectMsg;
        return statusMessage;
    };
    Level.prototype.reduceTagsShadowing = function (perPersonRelMsg) {
        perPersonRelMsg.forEach(function (changes, couple) {
            var newTags = changes[0];
            var remTags = changes[1];
            var toRemNew = [];
            var toRemRem = [];
            for (var _i = 0, newTags_1 = newTags; _i < newTags_1.length; _i++) {
                var tag = newTags_1[_i];
                for (var _a = 0, relationshipTagShadowingNewRem_1 = entityTags_1.relationshipTagShadowingNewRem; _a < relationshipTagShadowingNewRem_1.length; _a++) {
                    var tagK = relationshipTagShadowingNewRem_1[_a];
                    if (tagK[0] == tag) {
                        toRemRem.push(tagK[1]);
                    }
                }
            }
            for (var _b = 0, remTags_1 = remTags; _b < remTags_1.length; _b++) {
                var tag = remTags_1[_b];
                for (var _c = 0, relationshipTagShadowingRemNew_1 = entityTags_1.relationshipTagShadowingRemNew; _c < relationshipTagShadowingRemNew_1.length; _c++) {
                    var tagK = relationshipTagShadowingRemNew_1[_c];
                    if (tagK[0] == tag) {
                        toRemNew.push(tagK[1]);
                    }
                }
            }
            newTags = newTags.filter(function (x) { return !toRemNew.includes(x); });
            remTags = remTags.filter(function (x) { return !toRemRem.includes(x); });
            perPersonRelMsg.set(couple, [newTags, remTags]);
        });
        return perPersonRelMsg;
    };
    Level.prototype.createEffectsMsgs = function (perPersonRelMsg, perPersonHumMsg) {
        var effectMsg = [];
        perPersonHumMsg.forEach(function (changes, person) {
            var newTags = changes[0];
            var remTags = changes[1];
            var remTagsArr = [];
            for (var _i = 0, remTags_2 = remTags; _i < remTags_2.length; _i++) {
                var remTag = remTags_2[_i];
                if (entityTags_1.humanTagMap.has(remTag)) {
                    remTagsArr.push(entityTags_1.humanTagMap.get(remTag));
                }
            }
            var newTagsArr = [];
            for (var _a = 0, newTags_2 = newTags; _a < newTags_2.length; _a++) {
                var newTag = newTags_2[_a];
                if (entityTags_1.humanTagMap.has(newTag)) {
                    newTagsArr.push(entityTags_1.humanTagMap.get(newTag));
                }
            }
            if (remTagsArr.length != 0 && newTagsArr.length != 0) {
                effectMsg.push(person + " lost " + remTagsArr.join(', ') + ", but gained " + newTagsArr.join(', '));
            }
            else if (remTagsArr.length != 0) {
                effectMsg.push(person + " lost " + remTagsArr.join(', '));
            }
            else if (newTagsArr.length != 0) {
                effectMsg.push(person + " gained " + newTagsArr.join(', '));
            }
        });
        var relationshipTemplates = [];
        var addIfNotContains = function (tag, message, couple) {
            // If it's not bidirectional explicitly, we don't deduplicate
            if (!entityTags_1.relationshipTagBidirectional.has(tag)) {
                relationshipTemplates.push([message, couple]);
                return true;
            }
            for (var _i = 0, relationshipTemplates_2 = relationshipTemplates; _i < relationshipTemplates_2.length; _i++) {
                var x = relationshipTemplates_2[_i];
                if (x[0] == message && ((x[1][0] == couple[0] && x[1][1] == couple[1]) || (x[1][0] == couple[1] && x[1][1] == couple[0])))
                    return false;
            }
            relationshipTemplates.push([message, couple]);
            return true;
        };
        perPersonRelMsg.forEach(function (changes, edgeKey) {
            var couple = peopleGraph_1.CoupleUtils.fromEdgeKey(edgeKey);
            var newTags = changes[0];
            var remTags = changes[1];
            for (var _i = 0, remTags_3 = remTags; _i < remTags_3.length; _i++) {
                var remTag = remTags_3[_i];
                if (entityTags_1.relationshipTagMapStory.has(remTag)) {
                    addIfNotContains(remTag, entityTags_1.relationshipTagMapStory.get(remTag)[1], couple);
                }
            }
            for (var _a = 0, newTags_3 = newTags; _a < newTags_3.length; _a++) {
                var newTag = newTags_3[_a];
                if (entityTags_1.relationshipTagMapStory.has(newTag)) {
                    addIfNotContains(newTag, entityTags_1.relationshipTagMapStory.get(newTag)[0], couple);
                }
            }
        });
        for (var _i = 0, relationshipTemplates_1 = relationshipTemplates; _i < relationshipTemplates_1.length; _i++) {
            var x = relationshipTemplates_1[_i];
            effectMsg.push(x[0].replace('SUBJ', x[1][0]).replace('OBJ', x[1][1]));
        }
        return effectMsg;
    };
    Level.prototype.reduceEffectsPerPerson = function (effects) {
        // first array in keys is always added tags, second removed
        var perPersonRelChanges = new Map();
        var perPersonHumChanges = new Map();
        var addToMap = function (key, value, valueStore, addedRemovedStoreSwitch) {
            var _a;
            var perKeyStore = (_a = valueStore.get(key)) !== null && _a !== void 0 ? _a : [new Array(), new Array()];
            perKeyStore[addedRemovedStoreSwitch].push(value);
            valueStore.set(key, perKeyStore);
        };
        effects.forEach(function (effect) {
            effect.addedHumTags.forEach(function (ah) { return addToMap(ah[0], ah[1], perPersonHumChanges, 0); });
            effect.removedHumTags.forEach(function (rh) { return addToMap(rh[0], rh[1], perPersonHumChanges, 1); });
            effect.addedRelTags.forEach(function (ah) { return addToMap(peopleGraph_1.CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelChanges, 0); });
            effect.removedRelTags.forEach(function (ah) { return addToMap(peopleGraph_1.CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelChanges, 1); });
        });
        return { perPersonRelChanges: perPersonRelChanges, perPersonHumChanges: perPersonHumChanges };
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/model/peopleGraph.ts":
/*!**********************************!*\
  !*** ./src/model/peopleGraph.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entityTags_1 = __webpack_require__(/*! ../content/entityTags */ "./src/content/entityTags.ts");
var humans_1 = __webpack_require__(/*! ../content/humans */ "./src/content/humans.ts");
exports.MIN_FONDNESS = 0;
exports.DEFAULT_FONDNESS = 5;
exports.MAX_FONDNESS = 10;
var PeopleGraph = /** @class */ (function () {
    function PeopleGraph(people, initialRelationships, initialTags, initialFondness) {
        var _this = this;
        if (people === void 0) { people = []; }
        if (initialRelationships === void 0) { initialRelationships = []; }
        this.relationshipTags = new Map();
        this.fondness = new Map();
        this.humansTags = new Map();
        this.people = people;
        people.forEach(function (h) {
            people.forEach(function (hh) {
                if (h.name != hh.name) {
                    _this.setRelTags([h.name, hh.name], new Set());
                    _this.fondness.set(CoupleUtils.toEdgeKey([h.name, hh.name]), exports.DEFAULT_FONDNESS);
                }
            });
        });
        people.forEach(function (p) {
            _this.humansTags.set(p.name, new Set());
        });
        initialTags.forEach(function (hTagTuple) {
            var hName = hTagTuple[0], hTag = hTagTuple[1];
            _this.addHumTag(hName, hTag);
        });
        initialRelationships.forEach(function (rel) {
            _this.setRelTags(rel.people, rel.tags);
        });
        initialFondness.forEach(function (_a) {
            var couple = _a[0], fondness = _a[1];
            console.assert(exports.MIN_FONDNESS <= fondness && fondness <= exports.MAX_FONDNESS);
            _this.fondness.set(CoupleUtils.toEdgeKey(couple), fondness);
        });
        this.humanNames = people.map(function (p) { return p.name; });
    }
    PeopleGraph.prototype.getHumanNames = function () {
        return this.humanNames;
    };
    PeopleGraph.prototype.addHumTag = function (person, tag) {
        var hTags = this.humansTags.get(person);
        var newlyAdded = !(hTags === null || hTags === void 0 ? void 0 : hTags.has(tag));
        hTags === null || hTags === void 0 ? void 0 : hTags.add(tag);
        return newlyAdded;
    };
    PeopleGraph.prototype.removeHumTag = function (person, tag) {
        var _a, _b;
        return (_b = (_a = this.humansTags.get(person)) === null || _a === void 0 ? void 0 : _a.delete(tag)) !== null && _b !== void 0 ? _b : false;
    };
    PeopleGraph.prototype.getHumTags = function (person) {
        var _a;
        return (_a = this.humansTags.get(person)) !== null && _a !== void 0 ? _a : new Set();
    };
    PeopleGraph.prototype.setRelTags = function (people, tags) {
        var graphKey = CoupleUtils.toEdgeKey(people);
        this.relationshipTags.set(graphKey, tags);
    };
    PeopleGraph.prototype.getRelTags = function (people) {
        var graphKey = CoupleUtils.toEdgeKey(people);
        return this.relationshipTags.get(graphKey);
    };
    PeopleGraph.prototype.addRelTag = function (people, tag) {
        var relTags = this.getRelTags(people);
        var newlyAdded = !(relTags === null || relTags === void 0 ? void 0 : relTags.has(tag));
        relTags === null || relTags === void 0 ? void 0 : relTags.add(tag);
        return newlyAdded;
    };
    PeopleGraph.prototype.removeRelTag = function (people, tag) {
        var _a, _b;
        return (_b = (_a = this.getRelTags(people)) === null || _a === void 0 ? void 0 : _a.delete(tag)) !== null && _b !== void 0 ? _b : false;
    };
    PeopleGraph.prototype.changeFondness = function (people, change) {
        var to = this.fondness.get(CoupleUtils.toEdgeKey(people)) + change;
        to = Math.min(to, exports.MAX_FONDNESS);
        to = Math.max(to, exports.MIN_FONDNESS);
        this.setFondness(people, to);
    };
    PeopleGraph.prototype.setFondness = function (people, to) {
        this.fondness.set(CoupleUtils.toEdgeKey(people), to);
    };
    PeopleGraph.prototype.getFondness = function (people) {
        var _a;
        var edgeKey = CoupleUtils.toEdgeKey(people);
        return (_a = this.fondness.get(edgeKey)) !== null && _a !== void 0 ? _a : 0;
    };
    PeopleGraph.prototype.getOutRelationships = function (person) {
        var result = new Array;
        this.relationshipTags.forEach(function (val, key) {
            if (key.startsWith(humans_1.HumanName[person])) {
                result.push(new Relationship(CoupleUtils.fromEdgeKey(key), val));
            }
        });
        return result;
    };
    PeopleGraph.prototype.getInRelationships = function (person) {
        var result = new Array;
        this.relationshipTags.forEach(function (val, key) {
            if (key.endsWith(humans_1.HumanName[person])) {
                result.push(new Relationship(CoupleUtils.fromEdgeKey(key), val));
            }
        });
        return result;
    };
    PeopleGraph.prototype.getRelationshipsBetween = function (a, b) {
        var _a;
        return Array.from((_a = this.relationshipTags.get(CoupleUtils.toEdgeKey([a, b]))) !== null && _a !== void 0 ? _a : []);
    };
    PeopleGraph.prototype.getOutRelationshipsOfType = function (a, tag) {
        return this.getOutRelationships(a).filter(function (rel) { return rel.tags.has(tag); });
    };
    PeopleGraph.prototype.haveMutualRelationshipTag = function (a, b, tag) {
        return this.getMutualRelationshipsBetween(a, b).includes(tag);
    };
    PeopleGraph.prototype.getMutualRelationshipsBetween = function (a, b) {
        var ab = this.getRelationshipsBetween(a, b);
        var ba = this.getRelationshipsBetween(b, a);
        return intersection(ab, ba);
    };
    PeopleGraph.prototype.getAllRelationships = function () {
        var res = new Array;
        this.relationshipTags.forEach(function (tags, edgeKey) {
            var couple = CoupleUtils.fromEdgeKey(edgeKey);
            res.push(new Relationship(couple, tags));
        });
        return res;
    };
    PeopleGraph.prototype.getAllHumanNames = function () {
        return this.people.map(function (p) { return p.name; });
    };
    PeopleGraph.prototype.getPeopleWithTags = function (tag) {
        var res = Array();
        this.humansTags.forEach(function (tags, name) {
            if (tags.has(tag)) {
                res.push(name);
            }
        });
        return res;
    };
    return PeopleGraph;
}());
exports.PeopleGraph = PeopleGraph;
var CoupleUtils = /** @class */ (function () {
    function CoupleUtils() {
    }
    CoupleUtils.toEdgeKey = function (unorderedPair) {
        var a = unorderedPair[0], b = unorderedPair[1];
        var orderedPair = a <= b || this.oriented ? [a, b] : [b, a];
        return orderedPair.map(function (v) { return v; }).join('|');
    };
    CoupleUtils.fromEdgeKey = function (key) {
        var names = key.split('|');
        console.assert(names.length == 2);
        return [names[0], names[1]];
    };
    CoupleUtils.oriented = true;
    return CoupleUtils;
}());
exports.CoupleUtils = CoupleUtils;
var Relationship = /** @class */ (function () {
    function Relationship(people, tags) {
        this.people = people;
        this.tags = tags !== null && tags !== void 0 ? tags : new Set();
    }
    // @deprecated
    Relationship.prototype.toString = function () {
        return this.people[1] + ": " + Array.from(this.tags).map(function (x) { var _a; return (_a = entityTags_1.relationshipTagMap.get(x)) !== null && _a !== void 0 ? _a : "?"; }).join(', ');
    };
    return Relationship;
}());
exports.Relationship = Relationship;
function intersection(as, bs) {
    var res = new Array;
    for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
        var a = as_1[_i];
        if (bs.includes(a)) {
            res.push(a);
        }
    }
    return res;
}
exports.intersection = intersection;


/***/ }),

/***/ "./src/model/situation.ts":
/*!********************************!*\
  !*** ./src/model/situation.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SituationEffect = /** @class */ (function () {
    function SituationEffect(description, addedRelTags, removedRelTags, addedHumTags, removedHumTags, changedFondness, newFutureSituations) {
        var assignedDescription = description !== null && description !== void 0 ? description : new Array();
        this.description = Array.isArray(assignedDescription)
            ? assignedDescription
            : [assignedDescription];
        this.addedRelTags = addedRelTags !== null && addedRelTags !== void 0 ? addedRelTags : new Array();
        this.removedRelTags = removedRelTags !== null && removedRelTags !== void 0 ? removedRelTags : new Array();
        this.addedHumTags = addedHumTags !== null && addedHumTags !== void 0 ? addedHumTags : new Array();
        this.removedHumTags = removedHumTags !== null && removedHumTags !== void 0 ? removedHumTags : new Array();
        this.changedFondness = changedFondness !== null && changedFondness !== void 0 ? changedFondness : new Array();
        this.newFutureSituations = newFutureSituations !== null && newFutureSituations !== void 0 ? newFutureSituations : new Array();
    }
    SituationEffect.prototype.addRelTags = function (tags) {
        var _a;
        (_a = this.addedRelTags).push.apply(_a, tags);
        return this;
    };
    SituationEffect.prototype.removeRelTags = function (tags) {
        var _a;
        (_a = this.removedRelTags).push.apply(_a, tags);
        return this;
    };
    SituationEffect.prototype.addHumTags = function (tags) {
        var _a;
        (_a = this.addedHumTags).push.apply(_a, tags);
        return this;
    };
    SituationEffect.prototype.removeHumTags = function (tags) {
        var _a;
        (_a = this.removedHumTags).push.apply(_a, tags);
        return this;
    };
    SituationEffect.prototype.setDescription = function (description) {
        this.description = Array.isArray(description)
            ? description
            : [description];
        return this;
    };
    SituationEffect.prototype.getRandomDescription = function () {
        if (this.description.length === 0) {
            return "";
        }
        else {
            return this.description[Math.floor(Math.random() * this.description.length)];
        }
    };
    SituationEffect.prototype.changeFondness = function (changes) {
        var _a;
        (_a = this.changedFondness).push.apply(_a, changes);
        return this;
    };
    SituationEffect.prototype.addNewFutureSituations = function (newFutureSituations) {
        var _a;
        (_a = this.newFutureSituations).push.apply(_a, newFutureSituations);
        return this;
    };
    SituationEffect.prototype.appendToThis = function (effect) {
        this.addedHumTags = this.addedHumTags.concat(effect.addedHumTags);
        this.removedHumTags = this.removedHumTags.concat(effect.removedHumTags);
        this.addedRelTags = this.addedRelTags.concat(effect.addedRelTags);
        this.removedRelTags = this.removedRelTags.concat(effect.removedRelTags);
        this.changedFondness = this.changedFondness.concat(effect.changedFondness);
        this.newFutureSituations = this.newFutureSituations.concat(effect.newFutureSituations);
        return this;
    };
    return SituationEffect;
}());
exports.SituationEffect = SituationEffect;


/***/ }),

/***/ "./src/model/tripSummary.ts":
/*!**********************************!*\
  !*** ./src/model/tripSummary.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TripSummary = /** @class */ (function () {
    function TripSummary(specialGuest) {
        this.goPeople = new Array();
        this.goPeople.push(specialGuest);
    }
    TripSummary.prototype.removeGoPeople = function (human) {
        var prevSize = this.goPeople.length;
        this.goPeople = this.goPeople.filter(function (x) { return x.name !== human.name; });
        return prevSize != this.goPeople.length;
    };
    TripSummary.prototype.flipGoPeople = function (human) {
        if (this.removeGoPeople(human)) {
            // deleted
            return false;
        }
        else {
            // not deleted, so add
            this.goPeople.push(human);
            return true;
        }
    };
    TripSummary.prototype.prepare = function (location) {
        this.goLocation = location;
    };
    TripSummary.prototype.allPresent = function () {
        var _this = this;
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.every(function (p) { return _this.goPeople.map(function (q) { return q.name; }).includes(p); });
    };
    TripSummary.prototype.somePresent = function () {
        var _this = this;
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.some(function (p) { return _this.goPeople.map(function (q) { return q.name; }).includes(p); });
    };
    TripSummary.prototype.allAbsent = function () {
        var _this = this;
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.every(function (p) { return !_this.goPeople.map(function (q) { return q.name; }).includes(p); });
    };
    TripSummary.prototype.someAbsent = function () {
        var _this = this;
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        return people.some(function (p) { return !_this.goPeople.map(function (q) { return q.name; }).includes(p); });
    };
    return TripSummary;
}());
exports.TripSummary = TripSummary;


/***/ }),

/***/ "./src/utils/loading.ts":
/*!******************************!*\
  !*** ./src/utils/loading.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingScene = /** @class */ (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        return _super.call(this, {
            key: 'loading',
        }) || this;
    }
    LoadingScene.prototype.preload = function () {
        var _this = this;
        this.load.setBaseURL('assets/');
        this.load.image('board_background', 'board_background.png');
        this.load.spritesheet('rel_tags', 'rel_tags.png', { frameWidth: 30, frameHeight: 30 });
        this.load.spritesheet('portrait_big', 'portrait_big.png', { frameWidth: 200, frameHeight: 200 });
        this.load.spritesheet('portrait_small', 'portrait_small.png', { frameWidth: 60, frameHeight: 60 });
        this.load.spritesheet('location_thumb', 'location_thumb.png', { frameWidth: 90, frameHeight: 90 });
        this.load.audio('main_music', 'montuno.mp3');
        this.fader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(1)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', function () {
            _this.scene.start('management');
        });
        this.mockText = this.add.text(100, 100, '', { fill: '#fff', fontFamily: 'Roboto' })
            .setDepth(1001)
            .setAlpha(0);
    };
    LoadingScene.prototype.create = function () {
        var title = this.add.text(100, 100, 'Overly Fragile Relationships', { fill: '#fff', fontFamily: 'Roboto', fontSize: '30px' })
            .setDepth(1002);
        var help = this.add.text(100, 200, 'Pick people to join you on nights out.\nTry to keep your friendship network alive.', { fill: '#fff', fontFamily: 'Roboto', fontSize: '18px' })
            .setDepth(1002);
    };
    return LoadingScene;
}(Phaser.Scene));
exports.LoadingScene = LoadingScene;


/***/ }),

/***/ "./src/utils/modal.ts":
/*!****************************!*\
  !*** ./src/utils/modal.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModalDialog = /** @class */ (function () {
    function ModalDialog(scene, text, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        this.scene = scene;
        this.callback = callback;
        this.dying = false;
        this.preventClick = scene.add.rectangle(0, 0, 800, 500, 0x000000)
            .setOrigin(0, 0)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', function () {
            _this.destroy();
        });
        this.blackBoard = scene.add.rectangle(400, 250, 600, 300, 0x000000)
            .setInteractive({ useHandCursor: true })
            .setAlpha(0)
            .on('pointerdown', function () {
            _this.destroy();
        });
        this.message = scene.add.text(400, 250, text, { fontFamily: 'Roboto', fontSize: '20px' })
            .setAlign('center')
            .setOrigin(0.5, 0.5)
            .setWordWrapWidth(500)
            // .on('pointerdown', () => this.destroy())
            .setAlpha(0);
        scene.add.tween({
            targets: [this.preventClick],
            alpha: { from: 0, to: 0.4 },
            duration: 500
        });
        scene.add.tween({
            targets: [this.blackBoard, this.message],
            alpha: { from: 0, to: 1 },
            duration: 500
        });
    }
    ModalDialog.prototype.destroy = function () {
        var _this = this;
        if (this.dying)
            return;
        this.dying = true;
        this.callback();
        this.scene.add.tween({
            targets: [this.message, this.blackBoard],
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: function () {
                _this.message.destroy();
                _this.blackBoard.destroy();
                _this.preventClick.destroy();
            }
        });
        this.scene.add.tween({
            targets: [this.preventClick],
            alpha: { from: 0.4, to: 0 },
            duration: 500,
        });
    };
    return ModalDialog;
}());
exports.ModalDialog = ModalDialog;


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var humans_1 = __webpack_require__(/*! ../content/humans */ "./src/content/humans.ts");
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.drawPortraits = function (humans, scene) {
        var group = scene.add.group()
            .setOrigin(0.5, 0.5);
        for (var hi in humans) {
            var human = humans[hi];
            var index = humans_1.HumanNameIndex.indexOf(human.name);
            var circle = scene.add.ellipse(50 + 400 - humans.length * 100 / 2 + Number(hi) * 100, 50, 80, 80, 0x2e2e2e)
                .setDepth(3000);
            var image = scene.add.image(50 + 400 - humans.length * 100 / 2 + Number(hi) * 100, 50, 'portrait_small', index)
                .setDepth(3001);
            group.add(image);
            group.add(circle);
        }
        return group;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZW50aXR5VGFncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9odW1hbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvbGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2xvY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9zaXR1YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2h1bWFuX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2xvY2F0aW9uX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L3Bob25lX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9mcmllbmRzaGlwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaHVtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9wZW9wbGVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2l0dWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC90cmlwU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO2lCQUN0RyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxLQUFLO0lBQ2hCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQWpCWSxzQkFBSyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgZW51bSBSZWxhdGlvbnNoaXBUYWcge1xuICAgIGNydXNoLFxuICAgIGxvdmVyLFxuICAgIGV4LFxuICAgIHBvbGl0aWNhbF9kaXMsXG4gICAgbGlrZSwgZGlzbGlrZSwgLy8gc3ltcGF0aGllc1xuICAgIGNydXNoYWJsZSxcbiAgICBib3dsaW5nX2JyYXdsLFxuICAgIGRpc2FibGVfbXV0dWFsX2NydXNoX2RhdGluZywgLy8gZGlzYWJsZSB0aGUgZGVmYXVsdCB3YXkgb2YgZ2V0dGluZyB0b2dldGhlclxuICAgIGF3a2F3YXJkbmVzcywgLy8gYWZ0ZXIgQSBhbmQgQiBzbGVwdCB0b2dldGhlclxufVxuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnTWFwOiBNYXA8UmVsYXRpb25zaGlwVGFnLCBzdHJpbmc+ID0gbmV3IE1hcChbXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaCwgJ2NydXNoJ10sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5sb3ZlciwgJ2xvdmVyJ10sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5leCwgJ2V4J10sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5wb2xpdGljYWxfZGlzLCAncG9saXRpY2FsIGRpc2FncmVlbWVudCddLFxuXSlcblxuZXhwb3J0IGNvbnN0IHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5OiBNYXA8UmVsYXRpb25zaGlwVGFnLCBbc3RyaW5nLCBzdHJpbmddPiA9IG5ldyBNYXAoW1xuICAgIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2gsIFsnU1VCSiBub3cgaGFzIGEgY3J1c2ggb24gT0JKJywgJ1NVQkogbG9zdCBhIGNydXNoIG9uIE9CSiddXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmxvdmVyLCBbYFNVQkogYW5kIE9CSiBzdGFydGVkIGRhdGluZyFgLCAnU1VCSiBhbmQgT0JKIGFyZSBubyBsb25nZXIgbG92ZXJzJ11dLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcuZXgsIFtgRGlkIHlvdSBoZWFyPyBTVUJKIGFuZCBPQkogYnJva2UgdXAhYCwgJ1NVQkogaXMgbm90IGFuIGV4IG9mIE9CSiBhbnltb3JlJ11dLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcucG9saXRpY2FsX2RpcywgWydTVUJKIG5vdyBoYXMgYSBwb2xpdGljYWwgZGlzYWdyZWVtZW50IHdpdGggT0JKJywgJ1NVQkogbm8gbG9uZ2VyIGhhcyBhIHBvbGl0aWNhbCBkaXNhZ3JlZW1lbnQgd2l0aCBPQkonXV0sXG5dKVxuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnQmlkaXJlY3Rpb25hbDogU2V0PFJlbGF0aW9uc2hpcFRhZz4gPSBuZXcgU2V0KFtcbiAgICBSZWxhdGlvbnNoaXBUYWcubG92ZXIsXG4gICAgUmVsYXRpb25zaGlwVGFnLnBvbGl0aWNhbF9kaXMsXG4gICAgUmVsYXRpb25zaGlwVGFnLmV4LFxuXSlcblxuLy8gSWYgdGhlIGZpcnN0IGl0ZW0gaXMgaW4gTkVXLCB0aGUgc2Vjb25kIGlzIHJlbW92ZWQgZnJvbSBSRU1cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXBUYWdTaGFkb3dpbmdOZXdSZW06IEFycmF5PFtSZWxhdGlvbnNoaXBUYWcsIFJlbGF0aW9uc2hpcFRhZ10+ID0gW1xuICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXIsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5leCwgUmVsYXRpb25zaGlwVGFnLmxvdmVyXSxcblxuXVxuXG4vLyBJZiB0aGUgZmlyc3QgaXRlbSBpcyBpbiBSRU0sIHRoZSBzZWNvbmQgaXMgcmVtb3ZlZCBmcm9tIE5FV1xuZXhwb3J0IGNvbnN0IHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ1JlbU5ldzogQXJyYXk8W1JlbGF0aW9uc2hpcFRhZywgUmVsYXRpb25zaGlwVGFnXT4gPSBbXG5dXG5cbmV4cG9ydCBlbnVtIEh1bWFuVGFnIHtcbiAgICBpbnRyb3ZlcnQsIGV4dHJvdmVydCwgYW5ncnlfZHJ1bmssIHNhZF9kcnVuayxcbiAgICBnb29kX2Jvd2xlciwgYmFkX2Jvd2xlciwgcHJvbWlzY3VvdXMsIGplYWxvdXMsIGRpc2FncmVlYWJsZSxcbiAgICBhZ3JlZWFibGUsIHN1cHBvcnRpdmUsIGF0dGVudGlvbixcbiAgICBmbGF2aWVfYW5ncnksXG4gICAgZGFuX2J1c3RlZCxcbiAgICBnb25lLFxuICAgIGZyYWdpbGVfZmxhdmllXzEsIGZyYWdpbGVfZmxhdmllXzIsXG4gICAgZGVwcmVzc2VkLCAvLyBCZWF0cmljZSBhZnRlciBicmVha2luZyB1cFxufVxuXG5leHBvcnQgY29uc3QgaHVtYW5UYWdNYXA6IE1hcDxIdW1hblRhZywgc3RyaW5nPiA9IG5ldyBNYXAoW1xuICAgIFtIdW1hblRhZy5pbnRyb3ZlcnQsICdpbnRyb3ZlcnQnXSxcbiAgICBbSHVtYW5UYWcuZXh0cm92ZXJ0LCAnZXh0cm92ZXJ0J10sXG4gICAgW0h1bWFuVGFnLmFuZ3J5X2RydW5rLCAnYW5ncnkgd2hlbiBkcnVuayddLFxuICAgIFtIdW1hblRhZy5zYWRfZHJ1bmssICdzYWQgd2hlbiBkcnVuayddLFxuICAgIFtIdW1hblRhZy5nb29kX2Jvd2xlciwgJ2dvb2QgYm93bGVyJ10sXG4gICAgW0h1bWFuVGFnLmJhZF9ib3dsZXIsICdiYWQgYm93bGVyJ10sXG4gICAgLy8gW0h1bWFuVGFnLnByb21pc2N1b3VzLCAncHJvbWlzY3VvdXMnXSxcbiAgICBbSHVtYW5UYWcuamVhbG91cywgJ2plYWxvdXMnXSxcbiAgICBbSHVtYW5UYWcuZGlzYWdyZWVhYmxlLCAnZGlzYWdyZWVhYmxlJ10sXG4gICAgW0h1bWFuVGFnLmFncmVlYWJsZSwgJ2FncmVlYWJsZSddLFxuICAgIFtIdW1hblRhZy5zdXBwb3J0aXZlLCAnc3VwcG9ydGl2ZSBmcmllbmQnXSxcbiAgICBbSHVtYW5UYWcuYXR0ZW50aW9uLCAnYXR0ZW50aW9uIHNlZWtlciddLFxuICAgIFtIdW1hblRhZy5kZXByZXNzZWQsICdkZXByZXNzZWQnXSxcbl0pXG5cblxuZXhwb3J0IGNvbnN0IGh1bWFuVGFnRGlzcGxheTogU2V0PEh1bWFuVGFnPiA9IG5ldyBTZXQoW1xuICAgIEh1bWFuVGFnLmRlcHJlc3NlZCxcbl0pXG4iLCJleHBvcnQgZW51bSBIdW1hbk5hbWUge1xuICAgIFlvdSA9ICdZb3UnLFxuICAgIEFsZXggPSAnQWxleCcsXG4gICAgQmVhdHJpY2UgPSAnQmVhdHJpY2UnLFxuICAgIENlY2lsID0gJ0NlY2lsJyxcbiAgICBEYW4gPSAnRGFuJyxcbiAgICBFcmljID0gJ0VyaWMnLFxuICAgIEZsYXZpZSA9ICdGbGF2aWUnLFxufVxuXG5leHBvcnQgY29uc3QgSHVtYW5OYW1lSW5kZXg6IEFycmF5PHN0cmluZz4gPSBbXG4gICAgJ1lvdScsXG4gICAgJ0FsZXgnLFxuICAgICdCZWF0cmljZScsXG4gICAgJ0NlY2lsJyxcbiAgICAnRGFuJyxcbiAgICAnRXJpYycsXG4gICAgJ0ZsYXZpZScsXG5dXG5cbmV4cG9ydCBjb25zdCBIdW1hbkJpbzogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAnJyxcbiAgICAnSGVyIGh1bW9yIG1heSBjb21lIG9mZiBhcyBjcnVkZSwgYnV0IHNoZSByZWFsbHkgY2FyZXMgYWJvdXQgaGVyIGZyaWVuZHMuJyxcbiAgICAnSm9raW5nbHkgZmxpcnRzIHdpdGggYWxsIG9mIGhlciBmcmllbmRzIGFuZCBpcyBhZnJhaWQgdG8gY29tbWl0IHRvIGEgcmVsYXRpb25zaGlwLicsXG4gICAgJ0EgY2hpbGwsIGludHJvdmVydGVkIGd1eSwgdGhvdWdoIHlvdVxcJ3ZlIHNlZW4gaGltIGJsb3cgdXAgYmVmb3JlLiBIZVxcJ3MgcXVpdGUgc3BvcnR5LicsXG4gICAgJ0FuIGF0aGxldGljIGV4dHJvdmVydCwgd2hvIGxlYXZlcyBhIGdvb2QgZmlyc3QgaW1wcmVzc2lvbi4gSGlzIGNvbmZpZGVuY2Ugc29tZXRpbWVzIGJvcmRlcnMgb24gYXJyb2dhbmNlLicsXG4gICAgJ1JhaXNlZCBpbiBhIHJlbGlnaW91cyBob3VzZWhvbGQsIGhlIGdldHMgYWxvbmcgd2VsbCB3aXRoIHBlb3BsZS4gSGUgd2FzIG5ldmVyIGluIGEgcmVsYXRpb25zaGlwLicsXG4gICAgJ09uZSBvZiB0aGUgbW9zdCBjYXJpbmcgcGVvcGxlIHlvdSBrbm93LiBTaGUgZXhwZWN0cyB0aGUgc2FtZSBmcm9tIGV2ZXJ5Ym9keSBlbHNlIGFuZCBpcyBvZnRlbiBsZXQgZG93bi4nXG5dIiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgQ291cGxlLCBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi4vbW9kZWwvcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgSHVtYW4gfSBmcm9tIFwiLi4vbW9kZWwvaHVtYW5cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuaW1wb3J0IHtcbiAgICBBbGV4QW5kQmVhdHJpY2VHZXREcnVuayxcbiAgICBBbGV4QW5kQ2VjaWwsXG4gICAgQmVhdHJpY2VCcmVha3VwcyxcbiAgICBDb21wbGV4LFxuICAgIERlcHJlc3Npb24sXG4gICAgRXRlcm5hbENvdXBsZSxcbiAgICBNdXR1YWxDcnVzaCxcbiAgICBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmssXG4gICAgU2l0dWF0aW9uVXRpbHMsXG4gICAgU3ltcGF0aGllcyxcbiAgICBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncyxcbiAgICBFcmljVlNBQW5kQixcbn0gZnJvbSBcIi4vc2l0dWF0aW9uc1wiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi9odW1hbnNcIlxuaW1wb3J0IHsgTG9jYXRpb25OYW1lIH0gZnJvbSBcIi4vbG9jYXRpb25zXCJcbmltcG9ydCB7IFNpdHVhdGlvbkVmZmVjdCB9IGZyb20gXCIuLi9tb2RlbC9zaXR1YXRpb25cIlxuXG5leHBvcnQgbGV0IGxldmVsczogQXJyYXk8TGV2ZWw+ID0gW11cblxubGV0IGxvY2F0aW9uczogTG9jYXRpb25OYW1lW10gPSBbXG4gICAgTG9jYXRpb25OYW1lLkJvd2xpbmcsXG4gICAgTG9jYXRpb25OYW1lLkRyaW5rLFxuICAgIExvY2F0aW9uTmFtZS5IaWtpbmcsXG5dXG5cbi8vIFlvdSBpcyBhbHdheXMgb24gdGhlIHplcm90aCBwb3NpdGlvblxuXG5mdW5jdGlvbiBtdXR1YWxSZWxhdGlvbnNoaXAocGVvcGxlOiBDb3VwbGUsIHRhZ3M6IFJlbGF0aW9uc2hpcFRhZ1tdKTogW1JlbGF0aW9uc2hpcCwgUmVsYXRpb25zaGlwXSB7XG4gICAgY29uc3QgdGFnU2V0ID0gbmV3IFNldCh0YWdzKVxuICAgIGNvbnN0IFthLCBiXSA9IHBlb3BsZVxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IFJlbGF0aW9uc2hpcChbYSwgYl0sIHRhZ1NldCksXG4gICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW2IsIGFdLCB0YWdTZXQpLFxuICAgIF1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbjxUPihhcnI6IEFycmF5PFQgfCBUW10+KTogQXJyYXk8VD4ge1xuICAgIGxldCByZXMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBhIG9mIGFycikge1xuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXMucHVzaCguLi5hKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnB1c2goYSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbn1cblxuY29uc3QgZGFuVHdvR2lybGZyaWVuZHNCdXN0ZWQgPSBuZXcgQ29tcGxleCh7XG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRmxhdmllXSxcbiAgICByZWxUYWdzUmVxOiBbXG4gICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyXSwgLy8gc2hvdWxkIGJlIHN5bW1ldHJpYyBhbnl3YXlzXG4gICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0sIFJlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sXG4gICAgXSxcbiAgICBlZmZlY3RzOiBbXG4gICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0pLFxuICAgICAgICBTaXR1YXRpb25VdGlscy5icmVha1VwKFtIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRmxhdmllXSksXG4gICAgICAgIG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5kYW5fYnVzdGVkXV0pXG4gICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLllvdV0sIC01XSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkRhbl0sIC03XSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0sIC0yXSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5EYW5dLCAtN10sXG4gICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRmxhdmllXSwgLTJdLFxuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgKzRdLFxuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRmxhdmllXSwgKzRdLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIlVoIG9oLi4uIERhbiB3YXMgZGF0aW5nIEJlYXRyaWNlIGFuZCBGbGF2aWUgYXQgdGhlIHNhbWUgdGltZSxcIiArXG4gICAgICAgICAgICAgICAgXCIgYW5kIG5vdyB0aGV5IGZvdW5kIG91dCEgTm8gbW9yZSBEYW4gSnVhbi5cIiksXG4gICAgXSxcbn0pXG5jb25zdCBmcmFnaWxlRmxhdmllMSA9IG5ldyBDb21wbGV4KHsgICAgLy9GbGF2aWUgdnMgQWxleCBldmVudCAxXG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5GbGF2aWVdLFxuICAgIGFsbG93ZWRMb2NhdGlvbnM6IFtMb2NhdGlvbk5hbWUuSGlraW5nXSxcbiAgICBodW1UYWdzQmFuOiBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuVGFnLmZyYWdpbGVfZmxhdmllXzFdXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIC0zXV0pLmFkZFJlbFRhZ3MoW1xuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdXSlcbiAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8xXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQWxleCBtYWRlIGZ1biBvZiBGbGF2aWVcXCdzIHZlZ2FuIHNuYWNrcywgYW5kIHNoZSBnb3QgcmVhbGx5IHVwc2V0LiBCdXQgQWxleCBtYWtlcyBmdW4gb2YgZXZlcnlib2R5LCByaWdodD8nKV0sXG59KVxuY29uc3QgZnJhZ2lsZUZsYXZpZTIgPSBuZXcgQ29tcGxleCh7ICAgIC8vRmxhdmllIHZzIEFsZXggZXZlbnQgMlxuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuRmxhdmllXSxcbiAgICBhbGxvd2VkTG9jYXRpb25zOiBbTG9jYXRpb25OYW1lLkhpa2luZ10sXG4gICAgaHVtVGFnc1JlcTogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8xXV0sXG4gICAgaHVtVGFnc0JhbjogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8yXV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5yZW1vdmVSZWxUYWdzKFtbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdXSlcbiAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgKzFdXSlcbiAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8yXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQWxleCBzYXcgdGhhdCBoZXIgY29tbWVudCByZWFsbHkgaHVydCBGbGF2aWVcXCdzIGZlZWxpbmdzLCBhbmQgYXBvbG9naXNlZC4gU2hlIGV2ZW4gYnJvdWdodCBoZXIgYSB2ZWdhbiBGbGFwamFjay4nKV0sXG59KVxuXG5jb25zdCBmbGF2aWVGb21vMSA9IG5ldyBDb21wbGV4KHsgICAgLy9GbGF2aWUgRk9NTyBldmVudCAxXG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRXJpY10sXG4gICAgaHVtQmFuOiBbSHVtYW5OYW1lLkZsYXZpZV0sXG4gICAgaHVtVGFnc0JhbjogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mbGF2aWVfYW5ncnldXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIC0xXSxcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkNlY2lsXSwgLTFdLFxuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5EYW5dLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkVyaWNdLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLllvdV0sIC0zXSxcbiAgICBdKS5hZGRIdW1UYWdzKFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZmxhdmllX2FuZ3J5XV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignRmxhdmllIGlzIGFuZ3J5IHRoYXQgeW91IGludml0ZWQgZXZlcnlib2R5IGV4Y2VwdCBoZXIuJyldLFxufSlcblxuY29uc3QgZmxhdmllRm9tbzIgPSBuZXcgQ29tcGxleCh7ICAgIC8vRmxhdmllIEZPTU8gZXZlbnQgMlxuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkVyaWNdLFxuICAgIGh1bUJhbjogW0h1bWFuTmFtZS5GbGF2aWVdLFxuICAgIGh1bVRhZ3NSZXE6IFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZmxhdmllX2FuZ3J5XV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5jaGFuZ2VGb25kbmVzcyhbW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuWW91XSwgLTEwXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignRmxhdmllIGNhbWUgdW5pbnZpdGVkLCBjaGV3ZWQgeW91IG91dCwgYW5kIGxlZnQuIEZvcmV2ZXIuJyldLFxufSlcblxuY29uc3QgYm93bGluZ2JyYXdsID0gbmV3IENvbXBsZXgoe1xuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbl0sXG4gICAgYWxsb3dlZExvY2F0aW9uczogW0xvY2F0aW9uTmFtZS5Cb3dsaW5nXSxcbiAgICByZWxUYWdzQmFuOiBbW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5EYW5dLCBSZWxhdGlvbnNoaXBUYWcuYm93bGluZ19icmF3bF1dLFxuICAgIGVmZmVjdHM6IFtuZXcgU2l0dWF0aW9uRWZmZWN0KCkuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICBbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbl0sIC0yXSxcbiAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuQ2VjaWxdLCAtMl1dKVxuICAgICAgICAuYWRkUmVsVGFncyhbW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5EYW5dLCBSZWxhdGlvbnNoaXBUYWcuYm93bGluZ19icmF3bF1dKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0NlY2lsIGFuZCBEYW4gYmV0IHdobyBjb3VsZCBzY29yZSB0aGUgbW9zdCBpbiBib3dsaW5nLicgK1xuICAgICAgICAgICAgJyBEYW4gdGhvdWdodCBoZSB3b3VsZCB3aW4gZWFzaWx5LCBidXQgQ2VjaWwgZGlkLicgK1xuICAgICAgICAgICAgJyBTbyBEYW4gYWNjdXNlZCBoaW0gb2YgY2hlYXRpbmcsIGFuZCB0aGV5IGdvdCBpbnRvIGEgZmlnaHQhJyldLFxuICAgIHByb2Nlc3NFZmZlY3RzOiBmdW5jdGlvbiAodHJpcCwgY3VycmVudFN0YXRlLCBiYXNlRWZmZWN0cykge1xuICAgICAgICB0cmlwLmdvUGVvcGxlLmZpbHRlcihwID0+IChwLm5hbWUgIT0gSHVtYW5OYW1lLkNlY2lsKSAmJiAocC5uYW1lICE9IEh1bWFuTmFtZS5EYW4pKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgYmFzZUVmZmVjdHNbMF0uY2hhbmdlZEZvbmRuZXNzLnB1c2goW1twLm5hbWUsIEh1bWFuTmFtZS5DZWNpbF0sIC0yXSlcbiAgICAgICAgICAgIGJhc2VFZmZlY3RzWzBdLmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbcC5uYW1lLCBIdW1hbk5hbWUuRGFuXSwgLTFdKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYmFzZUVmZmVjdHNcbiAgICB9LFxufSlcblxuY29uc3QgYWxleFN1cHBvcnRpdmUgPSBuZXcgQ29tcGxleCh7XG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZV0sXG4gICAgcmVsVGFnc0JhbjogW1xuICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBSZWxhdGlvbnNoaXBUYWcuYXdrYXdhcmRuZXNzXSxcbiAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmF3a2F3YXJkbmVzc10sXG4gICAgXSxcbiAgICBhbGxvd2VkTG9jYXRpb25zOiBbTG9jYXRpb25OYW1lLkJvd2xpbmcsIExvY2F0aW9uTmFtZS5IaWtpbmddLFxuICAgIGh1bVRhZ3NSZXE6IFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hblRhZy5kZXByZXNzZWRdXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgIC5yZW1vdmVIdW1UYWdzKFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hblRhZy5kZXByZXNzZWRdXSlcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKCdBbGV4IGhlbHBlZCBCZWF0cmljZSBnZXQgb3ZlciBoZXIgYnJlYWt1cC4gU2hlIGZlZWxzIGJldHRlciBub3cuJyldLFxufSlcblxuY29uc3QgUFJFU0VOVF9GT05ETkVTU19DSEFOR0UgPSArMlxuY29uc3QgQUJTRU5UX0ZPTkRORVNTX0NIQU5HRSA9IC0xXG5cbmNvbnN0IGJhc2VGb25kbmVzc0NoYW5nZXMgPSBuZXcgQ29tcGxleCh7XG4gICAgcHJvY2Vzc0VmZmVjdHM6IGZ1bmN0aW9uICh0cmlwLCBjdXJyZW50U3RhdGUsIGJhc2VFZmZlY3RzKSB7XG4gICAgICAgIGxldCBlZmZlY3QgPSBuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgY3VycmVudFN0YXRlLmdldEFsbEh1bWFuTmFtZXMoKS5mb3JFYWNoKGhOYW1lID0+IHtcbiAgICAgICAgICAgIGlmICghdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpLmluY2x1ZGVzKGhOYW1lKSkge1xuICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VkRm9uZG5lc3MucHVzaChbW2hOYW1lLCBIdW1hbk5hbWUuWW91XSwgQUJTRU5UX0ZPTkRORVNTX0NIQU5HRV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VkRm9uZG5lc3MucHVzaChbW2hOYW1lLCBIdW1hbk5hbWUuWW91XSwgUFJFU0VOVF9GT05ETkVTU19DSEFOR0VdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBiYXNlRWZmZWN0cy5jb25jYXQoW2VmZmVjdF0pXG4gICAgfSxcbn0pXG5cbmxldmVscy5wdXNoKFxuICAgIG5ldyBMZXZlbChcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5Zb3UpLFxuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5BbGV4KSxcbiAgICAgICAgICAgIG5ldyBIdW1hbihIdW1hbk5hbWUuQmVhdHJpY2UpLFxuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5DZWNpbCksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkRhbiksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkVyaWMpLFxuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5GbGF2aWUpLFxuICAgICAgICBdLFxuICAgICAgICBsb2NhdGlvbnMsXG4gICAgICAgIGZsYXR0ZW4oW1xuICAgICAgICAgICAgbXV0dWFsUmVsYXRpb25zaGlwKFtIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSxcbiAgICAgICAgICAgICAgICBbUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZSwgUmVsYXRpb25zaGlwVGFnLmNydXNoLCBSZWxhdGlvbnNoaXBUYWcuZGlzYWJsZV9tdXR1YWxfY3J1c2hfZGF0aW5nXSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQ2VjaWxdLFxuICAgICAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2gsIFJlbGF0aW9uc2hpcFRhZy5saWtlLCBSZWxhdGlvbnNoaXBUYWcuZGlzYWJsZV9tdXR1YWxfY3J1c2hfZGF0aW5nXSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0sIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0sIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2gsIFJlbGF0aW9uc2hpcFRhZy5saWtlXSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkZsYXZpZV0sIFtSZWxhdGlvbnNoaXBUYWcubGlrZV0pLFxuICAgICAgICAgICAgbmV3IFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRmxhdmllXSwgbmV3IFNldChbUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSkpLFxuICAgICAgICBdKSxcbiAgICAgICAgW1xuICAgICAgICAgICAgW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5UYWcuaW50cm92ZXJ0XSxcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5leHRyb3ZlcnRdLFxuICAgICAgICAgICAgW0h1bWFuTmFtZS5EYW4sIEh1bWFuVGFnLmFuZ3J5X2RydW5rXSxcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5wcm9taXNjdW91c10sXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZV0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5BbGV4XSwgN10sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5EYW5dLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuRGFuXSwgN10sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkZsYXZpZV0sIDddLFxuICAgICAgICBdLFxuICAgICAgICBbXG5cbiAgICAgICAgICAgIG5ldyBTeW1wYXRoaWVzKCksXG4gICAgICAgICAgICBuZXcgTm9ib2R5TGlrZXNBbmdyeURydW5rKCksXG4gICAgICAgICAgICBuZXcgQWxleEFuZENlY2lsKCksIC8vIG11c3QgYmUgYmVmb3JlIE11dHVhbENydXNoXG4gICAgICAgICAgICBuZXcgTXV0dWFsQ3J1c2goKSxcbiAgICAgICAgICAgIG5ldyBFdGVybmFsQ291cGxlKEh1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWUpLFxuICAgICAgICAgICAgbmV3IEFsZXhBbmRCZWF0cmljZUdldERydW5rKCksXG5cbiAgICAgICAgICAgIGJvd2xpbmdicmF3bCxcbiAgICAgICAgICAgIGZsYXZpZUZvbW8yLCAvLyAyIG11c3QgYmUgYmVmb3JlIDEgKGVsc2UgYm90aCBoYXBwZW4gc2ltdWx0YW5lb3VzbHkpXG4gICAgICAgICAgICBmbGF2aWVGb21vMSxcbiAgICAgICAgICAgIGRhblR3b0dpcmxmcmllbmRzQnVzdGVkLFxuICAgICAgICAgICAgYmFzZUZvbmRuZXNzQ2hhbmdlcyxcbiAgICAgICAgICAgIGZyYWdpbGVGbGF2aWUyLCAvLyB6YXMgc3Rlam5laiBpc3N1ZVxuICAgICAgICAgICAgZnJhZ2lsZUZsYXZpZTEsXG5cbiAgICAgICAgICAgIG5ldyBEZXByZXNzaW9uKCksXG4gICAgICAgICAgICBhbGV4U3VwcG9ydGl2ZSxcbiAgICAgICAgICAgIG5ldyBCZWF0cmljZUJyZWFrdXBzKCksXG5cbiAgICAgICAgICAgIG5ldyBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncygpLFxuICAgICAgICAgICAgbmV3IEVyaWNWU0FBbmRCKCksXG4gICAgICAgIF0sXG4gICAgKSxcbikgICAgICAgICIsImV4cG9ydCBlbnVtIExvY2F0aW9uTmFtZSB7XG4gICAgQm93bGluZyA9ICdCb3dsaW5nJyxcbiAgICBEcmluayA9ICdEcmlua2luZycsXG4gICAgSGlraW5nID0gJ0hpa2luZycsXG59IiwiaW1wb3J0IHsgU2l0dWF0aW9uLCBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi4vbW9kZWwvc2l0dWF0aW9uXCJcbmltcG9ydCB7IFRyaXBTdW1tYXJ5IH0gZnJvbSBcIi4uL21vZGVsL3RyaXBTdW1tYXJ5XCJcbmltcG9ydCB7IENvdXBsZSwgUGVvcGxlR3JhcGggfSBmcm9tIFwiLi4vbW9kZWwvcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4vaHVtYW5zXCJcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gXCIuL2xvY2F0aW9uc1wiXG5cblxuZXhwb3J0IGNsYXNzIFNpdHVhdGlvblV0aWxzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRUb0RhdGUoY291cGxlOiBDb3VwbGUpOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBjb3VwbGVcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlUmVsYXRpb25zaGlwKFxuICAgICAgICAgICAgY291cGxlLFxuICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sXG4gICAgICAgICAgICBbUmVsYXRpb25zaGlwVGFnLmNydXNoLCBSZWxhdGlvbnNoaXBUYWcuZXhdLFxuICAgICAgICAgICAgKzEwLFxuICAgICAgICApLnNldERlc2NyaXB0aW9uKGBBZnRlciBoYXZpbmcgZnVuIGF0IHRoZSBuaWdodCBvdXQsICR7YX0gYW5kICR7Yn0gc3RhcnRlZCBkYXRpbmcuYClcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGJyZWFrVXAoY291cGxlOiBDb3VwbGUpOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBjb3VwbGVcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlUmVsYXRpb25zaGlwKFxuICAgICAgICAgICAgY291cGxlLFxuICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5leF0sXG4gICAgICAgICAgICBbUmVsYXRpb25zaGlwVGFnLmxvdmVyXSxcbiAgICAgICAgICAgIC02LFxuICAgICAgICApLnNldERlc2NyaXB0aW9uKGAke2F9IGFuZCAke2J9IGJyb2tlIHVwIWApXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VSZWxhdGlvbnNoaXAoXG4gICAgICAgIGNvdXBsZTogQ291cGxlLFxuICAgICAgICBhZGRlZFJlbFRhZ3M6IFJlbGF0aW9uc2hpcFRhZ1tdLFxuICAgICAgICByZW1vdmVkUmVsVGFnczogUmVsYXRpb25zaGlwVGFnW10sXG4gICAgICAgIGZvbmRuZXNzQ2hhbmdlOiBudW1iZXIsXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgICk6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IGNvdXBsZVxuXG4gICAgICAgIGZ1bmN0aW9uIGJyb2FkY2FzdCh0YWdzOiBSZWxhdGlvbnNoaXBUYWdbXSk6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+IHtcbiAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChbW2EsIGJdLCB0YWddKVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtbYiwgYV0sIHRhZ10pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFNpdHVhdGlvbkVmZmVjdChkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIC5hZGRSZWxUYWdzKGJyb2FkY2FzdChhZGRlZFJlbFRhZ3MpKVxuICAgICAgICAgICAgLnJlbW92ZVJlbFRhZ3MoYnJvYWRjYXN0KHJlbW92ZWRSZWxUYWdzKSlcbiAgICAgICAgICAgIC5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgICAgICAgICAgW1thLCBiXSwgZm9uZG5lc3NDaGFuZ2VdLFxuICAgICAgICAgICAgICAgIFtbYiwgYV0sIGZvbmRuZXNzQ2hhbmdlXSxcbiAgICAgICAgICAgIF0pXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRTb21lb25lT25UcmlwV2l0aFRhZyh0cmlwOiBUcmlwU3VtbWFyeSwgcGVyc29uOiBIdW1hbk5hbWUsIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRhZzogUmVsYXRpb25zaGlwVGFnKSB7XG4gICAgICAgIHJldHVybiB0cmlwLmdvUGVvcGxlXG4gICAgICAgICAgICAuZmlsdGVyKG9QZXJzb24gPT4gb1BlcnNvbi5uYW1lICE9IHBlcnNvbilcbiAgICAgICAgICAgIC5maW5kKG9QZXJzb24gPT4gY3VycmVudFN0YXRlLmdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKHBlcnNvbiwgb1BlcnNvbi5uYW1lKS5zb21lKHQgPT4gdCA9PSB0YWcpKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG92ZXJzKHBlcnNvbjogSHVtYW5OYW1lLCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoKTogSHVtYW5OYW1lW10ge1xuICAgICAgICBsZXQgcmVzID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IHJlbCBvZiBjdXJyZW50U3RhdGUuZ2V0T3V0UmVsYXRpb25zaGlwcyhwZXJzb24pKSB7XG4gICAgICAgICAgICBpZiAocmVsLnRhZ3MuaGFzKFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikpIHtcbiAgICAgICAgICAgICAgICByZXMucHVzaChyZWwucGVvcGxlWzFdKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNTaW5nbGUocGVyc29uOiBIdW1hbk5hbWUsIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG92ZXJzKHBlcnNvbiwgY3VycmVudFN0YXRlKS5sZW5ndGggPT0gMFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgc3Vic2V0PFQ+KGFzOiBUW10sIGJzOiBUW10pIHtcbiAgICAgICAgcmV0dXJuIGFzLmV2ZXJ5KGEgPT4gYnMuaW5jbHVkZXMoYSkpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlU2l0dWF0aW9uIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBwcml2YXRlIGhhdmVUb0JlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPlxuICAgIHByaXZhdGUgY2Fubm90QmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+XG4gICAgcHJpdmF0ZSBhbGxvd2VkTG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+XG5cbiAgICBwdWJsaWMgZWZmZWN0OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaGF2ZVRvQmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+LFxuICAgICAgICBjYW5ub3RCZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT4sXG4gICAgICAgIGFsbG93ZWRMb2NhdGlvbnM6IEFycmF5PExvY2F0aW9uTmFtZT4sXG4gICAgICAgIGVmZmVjdDogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PixcbiAgICApIHtcblxuICAgICAgICB0aGlzLmhhdmVUb0JlUHJlc2VudCA9IGhhdmVUb0JlUHJlc2VudFxuICAgICAgICB0aGlzLmNhbm5vdEJlUHJlc2VudCA9IGNhbm5vdEJlUHJlc2VudFxuICAgICAgICB0aGlzLmFsbG93ZWRMb2NhdGlvbnMgPSBhbGxvd2VkTG9jYXRpb25zXG4gICAgICAgIHRoaXMuZWZmZWN0ID0gZWZmZWN0XG4gICAgfVxuXG4gICAgcHVibGljIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBfOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FwcGxpY2FibGUodHJpcCkgPyB0aGlzLmVmZmVjdCA6IG5ldyBBcnJheSgpXG4gICAgfVxuXG4gICAgcHVibGljIGlzQXBwbGljYWJsZSh0cmlwOiBUcmlwU3VtbWFyeSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbmFtZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGF2ZVRvQmVQcmVzZW50LmV2ZXJ5KGhwID0+IG5hbWVzUHJlc2VudC5pbmNsdWRlcyhocCkpICYmXG4gICAgICAgICAgICB0aGlzLmNhbm5vdEJlUHJlc2VudC5ldmVyeShjcCA9PiAhbmFtZXNQcmVzZW50LmluY2x1ZGVzKGNwKSkgJiZcbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZExvY2F0aW9ucy5zb21lKGxvYyA9PiBsb2MgPT0gdHJpcC5nb0xvY2F0aW9uKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vYm9keUxpa2VzQW5ncnlEcnVuayBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHVibGljIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGlmICh0cmlwLmdvTG9jYXRpb24gIT0gTG9jYXRpb25OYW1lLkRyaW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlZmZlY3RzID0gbmV3IEFycmF5KClcblxuICAgICAgICB0cmlwLmdvUGVvcGxlLmZvckVhY2gocGVyc29uID0+IHtcbiAgICAgICAgICAgIGxldCBwZXJzb25UYWdzID0gY3VycmVudFN0YXRlLmdldEh1bVRhZ3MocGVyc29uLm5hbWUpXG4gICAgICAgICAgICBpZiAocGVyc29uVGFncy5oYXMoSHVtYW5UYWcuYW5ncnlfZHJ1bmspKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYCR7cGVyc29uLm5hbWV9IGdvdCBkcnVuayBhbmQgYW5ncnk7IHRoZSBvdGhlcnMgd2VyZW4ndCBoYXBweSBhYm91dCB0aGF0LmApXG5cbiAgICAgICAgICAgICAgICB0cmlwLmdvUGVvcGxlLmZpbHRlcihwID0+IHAgIT0gcGVyc29uKS5mb3JFYWNoKG90aGVyUGVyc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZUZvbmRuZXNzKFtbW290aGVyUGVyc29uLm5hbWUsIHBlcnNvbi5uYW1lXSwgLTFdXSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZWZmZWN0cy5wdXNoKGVmZmVjdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGVmZmVjdHNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNdXR1YWxDcnVzaCBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgc3RhdGljIE1JTl9EQVRJTkdfRk9ORE5FU1MgPSA3XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGVmZmVjdHMgPSBuZXcgQXJyYXkoKVxuICAgICAgICBsZXQgY3J1c2hlc01hcDogTWFwPEh1bWFuTmFtZSwgSHVtYW5OYW1lW10+ID0gbmV3IE1hcCgpXG4gICAgICAgIGxldCBlbGlnaWJsZVBlb3BsZSA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBwZXJzb24gb2YgdHJpcC5nb1Blb3BsZSkge1xuICAgICAgICAgICAgbGV0IGxvdmVyT25UcmlwID0gU2l0dWF0aW9uVXRpbHMuZ2V0U29tZW9uZU9uVHJpcFdpdGhUYWcodHJpcCwgcGVyc29uLm5hbWUsIGN1cnJlbnRTdGF0ZSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKVxuICAgICAgICAgICAgaWYgKGxvdmVyT25UcmlwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFNpdHVhdGlvblV0aWxzLmdldExvdmVycyhwZXJzb24ubmFtZSwgY3VycmVudFN0YXRlKS5sZW5ndGggPj0gMVxuICAgICAgICAgICAgICAgICYmICFjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhwZXJzb24ubmFtZSkuaGFzKEh1bWFuVGFnLnByb21pc2N1b3VzKSkge1xuICAgICAgICAgICAgICAgIC8vIE5vIHBvbHlnYW15IHVubGVzcyB0aGUgcHJvbWlzY3VvdXMgdGFnIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNydXNoZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYiA9PiBjdXJyZW50U3RhdGUuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4ocGVyc29uLm5hbWUsIGIubmFtZSkuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmNydXNoKSxcbiAgICAgICAgICAgICkubWFwKGggPT4gaC5uYW1lKVxuXG4gICAgICAgICAgICBpZiAoY3J1c2hlc1ByZXNlbnQubGVuZ3RoICE9IDEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3J1c2hlc01hcC5zZXQocGVyc29uLm5hbWUsIGNydXNoZXNQcmVzZW50KVxuICAgICAgICAgICAgZWxpZ2libGVQZW9wbGUucHVzaChwZXJzb24ubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgcGVyc29uIG9mIGVsaWdpYmxlUGVvcGxlKSB7XG4gICAgICAgICAgICBjb25zdCBjcnVzaGVzID0gY3J1c2hlc01hcC5nZXQocGVyc29uKVxuICAgICAgICAgICAgaWYgKGNydXNoZXM/Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNydXNoID0gY3J1c2hlc1swXVxuICAgICAgICAgICAgICAgIGlmICghZWxpZ2libGVQZW9wbGUuaW5jbHVkZXMoY3J1c2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuZ2V0Rm9uZG5lc3MoW3BlcnNvbiwgY3J1c2hdKSA8IE11dHVhbENydXNoLk1JTl9EQVRJTkdfRk9ORE5FU1NcbiAgICAgICAgICAgICAgICAgICAgfHwgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtjcnVzaCwgcGVyc29uXSkgPCBNdXR1YWxDcnVzaC5NSU5fREFUSU5HX0ZPTkRORVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4ocGVyc29uLCBjcnVzaClcbiAgICAgICAgICAgICAgICAgICAgLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5kaXNhYmxlX211dHVhbF9jcnVzaF9kYXRpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIHN5bW1ldHJ5IGJ5IGNvbXBhcmluZyBuYW1lc1xuICAgICAgICAgICAgICAgIGlmIChjcnVzaGVzTWFwLmdldChjcnVzaCk/Lmxlbmd0aCA9PT0gMSAmJiBjcnVzaCA8PSBwZXJzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0dWF0aW9uVXRpbHMuc3RhcnRUb0RhdGUoW3BlcnNvbiwgY3J1c2hdKSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlZmZlY3RzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXRlcm5hbENvdXBsZSBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgYWx3YXlzOiBIdW1hbk5hbWVcbiAgICBvbmx5V2hlbk5vdEluT3RoZXJSZWw6IEh1bWFuTmFtZVxuXG4gICAgbGFzdENoYW5nZTogbnVtYmVyID0gMFxuICAgIHN0YXRpYyBDSEFOR0VfQUZURVIgPSAzXG4gICAgdG9nZXRoZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIG5CcmVha3VwcyA9IDBcbiAgICBuTWFrZXVwcyA9IDBcbiAgICBkYW5CdXN0ZWRNZXNzYWdlRmlyZWQgPSBmYWxzZVxuXG4gICAgY29uc3RydWN0b3IoYWx3YXlzOiBIdW1hbk5hbWUsIG9ubHlXaGVuTm90SW5PdGhlclJlbDogSHVtYW5OYW1lKSB7XG4gICAgICAgIHRoaXMuYWx3YXlzID0gYWx3YXlzXG4gICAgICAgIHRoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsID0gb25seVdoZW5Ob3RJbk90aGVyUmVsXG4gICAgfVxuXG4gICAgcHVibGljIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0cmlwQ291bnQ6IG51bWJlcik6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgcmVsYXRpb25zaGlwcyA9IGN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2Vlbih0aGlzLmFsd2F5cywgdGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWwpXG5cbiAgICAgICAgaWYgKCFyZWxhdGlvbnNoaXBzLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5leCkgJiYgIXJlbGF0aW9uc2hpcHMuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgLy8gTm90IHRyaWdnZXJlZCB5ZXRcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9nZXRoZXJOb3cgPSByZWxhdGlvbnNoaXBzLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5sb3ZlcilcblxuICAgICAgICBpZiAodHJpcENvdW50ID4gMCAmJiB0aGlzLnRvZ2V0aGVyICE9IHRvZ2V0aGVyTm93KSB7XG4gICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFzIGNoYW5nZWQgZXh0ZXJuYWxseVxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hhbmdlID0gdHJpcENvdW50XG4gICAgICAgICAgICB0aGlzLnRvZ2V0aGVyID0gdG9nZXRoZXJOb3dcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2dldGhlciA9IHRvZ2V0aGVyTm93XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoYW5nZSArIEV0ZXJuYWxDb3VwbGUuQ0hBTkdFX0FGVEVSIDw9IHRyaXBDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hhbmdlID0gdHJpcENvdW50XG5cbiAgICAgICAgICAgIGxldCBlZmZlY3Q6IFNpdHVhdGlvbkVmZmVjdFxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICAgICAgICAgIGxldCB3cmFwcGVySW5kZXg6IG51bWJlclxuXG4gICAgICAgICAgICBpZiAoIXRoaXMudG9nZXRoZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmdldE91dFJlbGF0aW9uc2hpcHNPZlR5cGUodGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWwsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpcyBpbiByZWxhdGlvbnNoaXAgLT4gbm90IGdldHRpbmcgYmFjayB0b2d0aGVyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXMgY2hhbmdlZCBleHRlcm5hbGx5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdENoYW5nZSA9IHRyaXBDb3VudFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2V0aGVyID0gdG9nZXRoZXJOb3dcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gU2l0dWF0aW9uVXRpbHMuc3RhcnRUb0RhdGUoW3RoaXMuYWx3YXlzLCB0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbF0pXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBgJHt0aGlzLmFsd2F5c30gYW5kICR7dGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWx9IHN0YXJ0ZWQgZGF0aW5nYFxuICAgICAgICAgICAgICAgIHdyYXBwZXJJbmRleCA9IHRoaXMubk1ha2V1cHNcbiAgICAgICAgICAgICAgICB0aGlzLm5NYWtldXBzKytcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0ID0gU2l0dWF0aW9uVXRpbHMuYnJlYWtVcChbdGhpcy5hbHdheXMsIHRoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsXSlcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGAke3RoaXMuYWx3YXlzfSBhbmQgJHt0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbH0gYnJva2UgdXBgXG4gICAgICAgICAgICAgICAgd3JhcHBlckluZGV4ID0gdGhpcy5uQnJlYWt1cHNcbiAgICAgICAgICAgICAgICB0aGlzLm5CcmVha3VwcysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVkRGVzY3JpcHRpb25zID0gW1xuICAgICAgICAgICAgICAgIGAke2Rlc2NyaXB0aW9ufS5gLFxuICAgICAgICAgICAgICAgIGAke2Rlc2NyaXB0aW9ufSBhZ2Fpbi5gLFxuICAgICAgICAgICAgICAgIGBZb3Ugd29uJ3QgYmVsaWV2ZSB0aGlzOiAke2Rlc2NyaXB0aW9ufSBhZ2Fpbi5gLFxuICAgICAgICAgICAgICAgIGAke2Rlc2NyaXB0aW9ufSwgeWV0IGFnYWluLmAsXG4gICAgICAgICAgICAgICAgYCR7ZGVzY3JpcHRpb259LCB0byBub2JvZHkncyBzdXJwcmlzZS5gLFxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGFuQnVzdGVkTWVzc2FnZUZpcmVkICYmIGN1cnJlbnRTdGF0ZS5nZXRIdW1UYWdzKEh1bWFuTmFtZS5EYW4pLmhhcyhIdW1hblRhZy5kYW5fYnVzdGVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGFuQnVzdGVkTWVzc2FnZUZpcmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGVmZmVjdC5zZXREZXNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgXCJXaGF0PyBFdmVuIGFmdGVyIERhbidzIHNoZW5hbmlnYW5zLFwiICtcbiAgICAgICAgICAgICAgICAgICAgXCIgaXQgc2VlbXMgdGhhdCBGbGF2aWUgZm9yZ2F2ZSBoaW0gYW5kIHRoZXkgZ290IGJhY2sgdG9nZXRoZXIuLi4hP1wiLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlckluZGV4ID0gTWF0aC5taW4od3JhcHBlckluZGV4LCB3cmFwcGVkRGVzY3JpcHRpb25zLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgZWZmZWN0LnNldERlc2NyaXB0aW9uKHdyYXBwZWREZXNjcmlwdGlvbnNbd3JhcHBlckluZGV4XSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFtlZmZlY3RdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBsZXggaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHB1YmxpYyBodW1SZXE6IEFycmF5PEh1bWFuTmFtZT4gPSBBcnJheSgpXG4gICAgcHVibGljIGh1bUJhbjogQXJyYXk8SHVtYW5OYW1lPiA9IEFycmF5KClcbiAgICBwdWJsaWMgYWxsb3dlZExvY2F0aW9uczogQXJyYXk8TG9jYXRpb25OYW1lPiA9IEFycmF5KClcblxuICAgIHB1YmxpYyBodW1UYWdzUmVxOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+ID0gQXJyYXkoKVxuICAgIHB1YmxpYyBodW1UYWdzQmFuOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+ID0gQXJyYXkoKVxuXG4gICAgcHVibGljIHJlbFRhZ3NSZXE6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+ID0gQXJyYXkoKVxuICAgIHB1YmxpYyByZWxUYWdzQmFuOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPiA9IEFycmF5KClcblxuICAgIHB1YmxpYyBlZmZlY3RzOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+ID0gQXJyYXkoKVxuICAgIHB1YmxpYyBwcm9jZXNzRWZmZWN0cz86ICh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgYmFzZUVmZmVjdHM6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4pID0+IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBmaWVsZHM/OiB7XG4gICAgICAgICAgICBodW1SZXE/OiBBcnJheTxIdW1hbk5hbWU+LCBodW1CYW4/OiBBcnJheTxIdW1hbk5hbWU+LFxuICAgICAgICAgICAgYWxsb3dlZExvY2F0aW9ucz86IEFycmF5PExvY2F0aW9uTmFtZT4sXG4gICAgICAgICAgICBodW1UYWdzUmVxPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPiwgaHVtVGFnc0Jhbj86IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgICAgICAgICByZWxUYWdzUmVxPzogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4sIHJlbFRhZ3NCYW4/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgICAgIGVmZmVjdHM/OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+LFxuICAgICAgICAgICAgcHJvY2Vzc0VmZmVjdHM/OiAodHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIGJhc2VFZmZlY3RzOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+KSA9PiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+XG4gICAgICAgIH0pIHtcbiAgICAgICAgaWYgKGZpZWxkcykgT2JqZWN0LmFzc2lnbih0aGlzLCBmaWVsZHMpXG4gICAgfVxuXG4gICAgcHVibGljIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXBwbGljYWJsZSh0cmlwLCBjdXJyZW50U3RhdGUpXG4gICAgICAgICAgICA/IHRoaXMucHJvY2Vzc0VmZmVjdHMgPyB0aGlzLnByb2Nlc3NFZmZlY3RzKHRyaXAsIGN1cnJlbnRTdGF0ZSwgdGhpcy5lZmZlY3RzKSA6IHRoaXMuZWZmZWN0c1xuICAgICAgICAgICAgOiBuZXcgQXJyYXkoKVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0FwcGxpY2FibGUodHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG5hbWVzUHJlc2VudCA9IHRyaXAuZ29QZW9wbGUubWFwKHAgPT4gcC5uYW1lKVxuXG4gICAgICAgIC8vIElmIG5vIGxvY2F0aW9ucyBhcmUgc2V0LCB0aGlzIG1lYW5zIGFsbCBsb2NhdGlvbnMgYXJlIGFsbG93ZWRcbiAgICAgICAgbGV0IGxvY2F0aW9uT2sgPSAodGhpcy5hbGxvd2VkTG9jYXRpb25zLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHx8IHRoaXMuYWxsb3dlZExvY2F0aW9ucy5zb21lKGxvYyA9PiBsb2MgPT0gdHJpcC5nb0xvY2F0aW9uKVxuXG4gICAgICAgIHJldHVybiBsb2NhdGlvbk9rICYmXG4gICAgICAgICAgICB0aGlzLmh1bVJlcS5ldmVyeShocCA9PiBuYW1lc1ByZXNlbnQuaW5jbHVkZXMoaHApKSAmJlxuICAgICAgICAgICAgdGhpcy5odW1CYW4uZXZlcnkoY3AgPT4gIW5hbWVzUHJlc2VudC5pbmNsdWRlcyhjcCkpICYmXG5cbiAgICAgICAgICAgIHRoaXMuaHVtVGFnc1JlcS5ldmVyeShociA9PiBjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhoclswXSkuaGFzKGhyWzFdKSkgJiZcbiAgICAgICAgICAgIHRoaXMuaHVtVGFnc0Jhbi5ldmVyeShiciA9PiAhY3VycmVudFN0YXRlLmdldEh1bVRhZ3MoYnJbMF0pLmhhcyhiclsxXSkpICYmXG5cbiAgICAgICAgICAgIHRoaXMucmVsVGFnc1JlcS5ldmVyeShyciA9PiBjdXJyZW50U3RhdGUuZ2V0UmVsVGFncyhyclswXSkuaGFzKHJyWzFdKSkgJiZcbiAgICAgICAgICAgIHRoaXMucmVsVGFnc0Jhbi5ldmVyeShiciA9PiAhY3VycmVudFN0YXRlLmdldFJlbFRhZ3MoYnJbMF0pLmhhcyhiclsxXSkpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ltcGF0aGllcyBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgc3RhdGljIExJS0VfQ0hBTkdFID0gKzFcbiAgICBzdGF0aWMgRElTTElLRV9DSEFOR0UgPSAtMVxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCBlZmZlY3QgPSBuZXcgU2l0dWF0aW9uRWZmZWN0KClcblxuICAgICAgICBmb3IgKGNvbnN0IHIgb2YgY3VycmVudFN0YXRlLmdldEFsbFJlbGF0aW9uc2hpcHMoKSkge1xuICAgICAgICAgICAgLy8gQm90aCBwYXJ0aWVzIG11c3QgYmUgcHJlc2VudFxuICAgICAgICAgICAgaWYgKHIucGVvcGxlLmV2ZXJ5KHAgPT4gdHJpcC5nb1Blb3BsZS5tYXAocSA9PiBxLm5hbWUpLmluY2x1ZGVzKHApKSkge1xuICAgICAgICAgICAgICAgIGlmIChyLnRhZ3MuaGFzKFJlbGF0aW9uc2hpcFRhZy5saWtlKSkge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QuY2hhbmdlRm9uZG5lc3MoW1tyLnBlb3BsZSwgU3ltcGF0aGllcy5MSUtFX0NIQU5HRV1dKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoci50YWdzLmhhcyhSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZUZvbmRuZXNzKFtbci5wZW9wbGUsIFN5bXBhdGhpZXMuRElTTElLRV9DSEFOR0VdXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtlZmZlY3RdXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlRm9uZG5lc3NCYXNlZFRhZ3MgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0cmlwQ291bnQ6IG51bWJlcik6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgZWZmZWN0ID0gbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgIGxldCBvdGhlckVmZmVjdHMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3QgYSBvZiBjdXJyZW50U3RhdGUuZ2V0SHVtYW5OYW1lcygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGIgb2YgY3VycmVudFN0YXRlLmdldEh1bWFuTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChhID09IGIpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgY29uc3QgZm9uZG5lc3MgPSBjdXJyZW50U3RhdGUuZ2V0Rm9uZG5lc3MoW2EsIGJdKVxuICAgICAgICAgICAgICAgIGNvbnN0IG11dHVhbFJlbGF0aW9uc2hpcHMgPSBjdXJyZW50U3RhdGUuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYilcbiAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbnNoaXBzID0gY3VycmVudFN0YXRlLmdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGEsIGIpXG4gICAgICAgICAgICAgICAgaWYgKGZvbmRuZXNzID49IDUgJiYgcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW11dHVhbFJlbGF0aW9uc2hpcHMuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0LmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtbYSwgYl0sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnJlbW92ZVJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1thLCBiXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPCBiICYmIG11dHVhbFJlbGF0aW9uc2hpcHMuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJFZmZlY3RzLnB1c2goU2l0dWF0aW9uVXRpbHMuYnJlYWtVcChbYSwgYl0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBvdGhlckVmZmVjdHMucHVzaChlZmZlY3QpXG4gICAgICAgIHJldHVybiBvdGhlckVmZmVjdHNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCZWF0cmljZUJyZWFrdXBzIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBzdGF0aWMgQlJFQUtfVVBfQUZURVIgPSAyXG5cbiAgICByZWxhdGlvbnNoaXBMZW5ndGggPSAtMVxuICAgIGxvdmVyOiBIdW1hbk5hbWUgfCBudWxsID0gbnVsbFxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGNvbnN0IGxvdmVycyA9IFNpdHVhdGlvblV0aWxzLmdldExvdmVycyhIdW1hbk5hbWUuQmVhdHJpY2UsIGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgY29uc3QgbmV3TG92ZXIgPSBsb3ZlcnMubGVuZ3RoID09IDAgPyBudWxsIDogbG92ZXJzWzBdXG5cbiAgICAgICAgaWYgKHRoaXMubG92ZXIgIT09IG5ld0xvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcExlbmd0aCA9IC0xXG4gICAgICAgICAgICB0aGlzLmxvdmVyID0gbmV3TG92ZXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpb25zaGlwTGVuZ3RoKytcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGxvdmVycy5sZW5ndGggPD0gMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxvdmVyICE9IG51bGwgJiYgdGhpcy5yZWxhdGlvbnNoaXBMZW5ndGggPj0gQmVhdHJpY2VCcmVha3Vwcy5CUkVBS19VUF9BRlRFUikge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBTaXR1YXRpb25VdGlscy5icmVha1VwKFtIdW1hbk5hbWUuQmVhdHJpY2UsIGxvdmVyc1swXV0pLnNldERlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICBgT2ggbm8uLi4gQmVhdHJpY2UgZ290IGludG8gYSBiaWcgZmlnaHQgd2l0aCAke2xvdmVyc1swXX0sIGFuZCB0aGV5IGJyb2tlIHVwLmBcbiAgICAgICAgICAgICAgICAgICAgKyBgIFNoZSdzIGJlZW4gbG9va2luZyByZWFsbHkgZGVwcmVzc2VkIHNpbmNlLi4uYCxcbiAgICAgICAgICAgICAgICApLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuVGFnLmRlcHJlc3NlZF1dKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxleEFuZEJlYXRyaWNlR2V0RHJ1bmsgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0cmlwQ291bnQ6IG51bWJlcik6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBjb25zdCBwZW9wbGVQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG4gICAgICAgIGlmICghU2l0dWF0aW9uVXRpbHMuc3Vic2V0KFtIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgcGVvcGxlUHJlc2VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlwLmdvTG9jYXRpb24gIT0gTG9jYXRpb25OYW1lLkRyaW5rKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlYXRyaWNlIG11c3QgYmUgc2luZ2xlLCBidXQgaXQncyBzdWZmaWNpZW50IGZvciBBbGV4J3MgbG92ZXIgbm90IHRvIGJlIHByZXNlbnRcbiAgICAgICAgaWYgKFNpdHVhdGlvblV0aWxzLmdldExvdmVycyhIdW1hbk5hbWUuQmVhdHJpY2UsIGN1cnJlbnRTdGF0ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFsZXhMb3Zlck9uVHJpcCA9IFNpdHVhdGlvblV0aWxzLmdldFNvbWVvbmVPblRyaXBXaXRoVGFnKHRyaXAsIEh1bWFuTmFtZS5BbGV4LCBjdXJyZW50U3RhdGUsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcilcbiAgICAgICAgaWYgKGFsZXhMb3Zlck9uVHJpcCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2VlbihIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlKVxuICAgICAgICAgICAgLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5jcnVzaCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFsZXhMb3ZlcnMgPSBTaXR1YXRpb25VdGlscy5nZXRMb3ZlcnMoSHVtYW5OYW1lLkFsZXgsIGN1cnJlbnRTdGF0ZSlcblxuICAgICAgICBpZiAoYWxleExvdmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIEFsZXggaXMgc2luZ2xlXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLnN0YXJ0VG9EYXRlKFtIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSlcbiAgICAgICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKFwiRW5jb3VyYWdlZCBieSBhbGNvaG9sLCBBbGV4IGFuZCBCZWF0cmljZSByZXZlYWxlZCB0aGVpciB0cnVlIGZlZWxpbmdzIHRvd2FyZHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBvbmUgYW5vdGhlciEgQWZ0ZXIgZ29pbmcgaG9tZSB0b2dldGhlciBhdCB0aGUgbmlnaHQgb3V0IHdpdGggeW91LCB0aGV5IHN0YXJ0ZWQgZGF0aW5nLlwiKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFsZXggaGFzIGEgbG92ZXJcbiAgICAgICAgICAgIGNvbnN0IGxvdmVyID0gYWxleExvdmVyc1swXVxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBTaXR1YXRpb25VdGlscy5icmVha1VwKFtIdW1hbk5hbWUuQWxleCwgbG92ZXJdKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oYEVuY291cmFnZWQgYnkgYWxjb2hvbCwgQWxleCBjaGVhdGVkIG9uICR7bG92ZXJ9IHdpdGggQmVhdHJpY2UuYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgICR7bG92ZXJ9IGZvdW5kIG91dCBhbmQgYnJva2UgdXAgd2l0aCBBbGV4LmApXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW2xvdmVyLCBIdW1hbk5hbWUuQWxleF0sIC0yXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG92ZXIsIEh1bWFuTmFtZS5CZWF0cmljZV0sIC00XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG92ZXIsIEh1bWFuTmFtZS5Zb3VdLCAtM10sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVSZWxUYWdzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZV0sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZV0sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIC5hZGRSZWxUYWdzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG92ZXIsIEh1bWFuTmFtZS5CZWF0cmljZV0sIFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZV0sIFJlbGF0aW9uc2hpcFRhZy5hd2thd2FyZG5lc3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmF3a2F3YXJkbmVzc10sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXJpY1ZTQUFuZEIgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHByaXZhdGUgc3RhdGU6IFwiaW5pdFwiIHwgXCJhYkRhdGluZ1wiIHwgXCJjZWNpbENydXNoXCIgfCBcImRvbmVcIiA9IFwiaW5pdFwiXG4gICAgcHJpdmF0ZSBhYlZpc2libGVTdGFydGVkRGF0aW5nID0gMFxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IFwiaW5pdFwiKSB7XG5cbiAgICAgICAgICAgIGlmICh0cmlwLmFsbFByZXNlbnQoSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkVyaWMpICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmhhdmVNdXR1YWxSZWxhdGlvbnNoaXBUYWcoSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5CZWF0cmljZSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWJWaXNpYmxlU3RhcnRlZERhdGluZyA9IHRyaXBDb3VudFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImFiRGF0aW5nXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJFcmljIHNhaWQgc29tZXRoaW5nIGFib3V0IEFsZXgncyBhbmQgQmVhdHJpY2UncyByZWxhdGlvbnNoaXAgYmVpbmcgdW5uYXR1cmFsIGFuZCBzdG9ybWVkIG9mZi5cIilcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5BbGV4XSwgLTRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkJlYXRyaWNlXSwgLTRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5FcmljXSwgLTJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkVyaWNdLCAtMl1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gXCJhYkRhdGluZ1wiICYmIHRyaXBDb3VudCA+PSAyICsgdGhpcy5hYlZpc2libGVTdGFydGVkRGF0aW5nKSB7XG4gICAgICAgICAgICBpZiAodHJpcC5hbGxQcmVzZW50KEh1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQ2VjaWwpICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkNlY2lsXSkgPiAzICYmIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRXJpY10pID4gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImNlY2lsQ3J1c2hcIlxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIkVyaWMgYW5kIENlY2lsIHNlZW0gYXdmdWxseSBjbG9zZSwgZm9yIGhvdyBoYXJzaCBFcmljIHdhcyB0b3dhcmRzIEFsZXggYW5kIEJlYXRyaWNlLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRSZWxUYWdzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5DZWNpbF0sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkVyaWNdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09IFwiY2VjaWxDcnVzaFwiICYmIHRyaXBDb3VudCA+PSAyICsgdGhpcy5hYlZpc2libGVTdGFydGVkRGF0aW5nKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmhhdmVNdXR1YWxSZWxhdGlvbnNoaXBUYWcoSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5DZWNpbCwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBcImRvbmVcIlxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIk9oISBFcmljIG11c3QgaGF2ZSBiZWVuIHJlcHJlc3NpbmcgdGhlc2UgZmVlbGluZ3MgZm9yIGEgd2hpbGUuIE5vdyB0aGF0IGhlJ3MgZGF0aW5nIENlY2lsIGhlIHdlbnQgdG8gYXBvbG9naXplIHRvIEFsZXggYW5kIEJlYXRyaWNlLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgIC5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQWxleF0sIDRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkJlYXRyaWNlXSwgNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkVyaWNdLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5FcmljXSwgMl1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZVJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlY2lsQ3J1c2hDb25hbmRydW0gaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHByaXZhdGUgZmxhdmllQW5kRGFuQnJlYWt1cENvdW50ZXIgPSAwXG4gICAgcHJpdmF0ZSB0b2dldGhlcldhcyA9IGZhbHNlXG4gICAgcHJpdmF0ZSB0cmlnZ2VyZWQgPSBmYWxzZVxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKEh1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWUpXG4gICAgICAgIGNvbnN0IHRvZ2V0aGVyTm93ID0gcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpXG5cbiAgICAgICAgaWYgKHRvZ2V0aGVyTm93ID09PSBmYWxzZSAmJiB0aGlzLnRvZ2V0aGVyV2FzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXZpZUFuZERhbkJyZWFrdXBDb3VudGVyICs9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50cmlnZ2VyZWQgJiZcbiAgICAgICAgICAgIHRoaXMuZmxhdmllQW5kRGFuQnJlYWt1cENvdW50ZXIgPj0gMiAmJlxuICAgICAgICAgICAgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQ2VjaWxdKSA+IDggJiZcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5nZXRPdXRSZWxhdGlvbnNoaXBzT2ZUeXBlKEh1bWFuTmFtZS5GbGF2aWUsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJGbGF2aWUgaXMgc3RhcnRpbmcgdG8gc2VlIHRoYXQgQ2VjaWwgbWlnaHQgYmUgcmlnaHQgZm9yIGhlciBhZnRlciBhbGwhXCIpXG4gICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5DZWNpbF0sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0sXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZXRoZXJXYXMgPSB0b2dldGhlck5vd1xuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgQWxleEFuZENlY2lsIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBmaXJlZCA9IGZhbHNlXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgaWYgKHRoaXMuZmlyZWQpIHJldHVybiBbXVxuICAgICAgICBjb25zdCBhID0gSHVtYW5OYW1lLkFsZXhcbiAgICAgICAgY29uc3QgYyA9IEh1bWFuTmFtZS5DZWNpbFxuXG4gICAgICAgIGlmICh0cmlwLmFsbEFic2VudChhLCBjKVxuICAgICAgICAgICAgJiYgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFthLCBjXSkgPj0gN1xuICAgICAgICAgICAgJiYgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtjLCBhXSkgPj0gN1xuICAgICAgICAgICAgJiYgU2l0dWF0aW9uVXRpbHMuaXNTaW5nbGUoYSwgY3VycmVudFN0YXRlKVxuICAgICAgICAgICAgJiYgU2l0dWF0aW9uVXRpbHMuaXNTaW5nbGUoYywgY3VycmVudFN0YXRlKSkge1xuICAgICAgICAgICAgdGhpcy5maXJlZCA9IHRydWVcbiAgICAgICAgICAgIHJldHVybiBbU2l0dWF0aW9uVXRpbHMuc3RhcnRUb0RhdGUoW2EsIGNdKVxuICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIldoaWxlIHlvdSB3ZXJlIG91dCB3aXRoIG90aGVyIHBlb3BsZSwgQWxleCBzdGFydGVkIGRhdGluZyBDZWNpbCxcIlxuICAgICAgICAgICAgICAgICAgICArIFwiIHNpbmNlIHRoZXkgZm91bmQgb3V0IHRoZXkgZW5qb3kgZWFjaCBvdGhlcnMnIGNvbXBhbnkgc28gbXVjaC5cIildXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlcHJlc3Npb24gaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0cmlwQ291bnQ6IG51bWJlcik6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgZWZmZWN0ID0gbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG5cbiAgICAgICAgZm9yIChjb25zdCBhIG9mIGN1cnJlbnRTdGF0ZS5nZXRIdW1hbk5hbWVzKCkpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhhKS5oYXMoSHVtYW5UYWcuZGVwcmVzc2VkKSkge1xuICAgICAgICAgICAgICAgIGlmICghU2l0dWF0aW9uVXRpbHMuaXNTaW5nbGUoYSwgY3VycmVudFN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBIYXZpbmcgYSBsb3ZlciByZW1vdmVzIGRlcHJlc3Npb25cbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0LnJlbW92ZUh1bVRhZ3MoW1thLCBIdW1hblRhZy5kZXByZXNzZWRdXSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGIgb2YgY3VycmVudFN0YXRlLmdldEh1bWFuTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT0gYikgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VGb25kbmVzcyhbW1thLCBiXSwgLTFdXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbZWZmZWN0XVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gJy4vbWFuYWdlbWVudC9ib2FyZCdcbmltcG9ydCB7IExvYWRpbmdTY2VuZSB9IGZyb20gJy4vdXRpbHMvbG9hZGluZydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdPdmVybHkgRnJhZ2lsZSBSZWxhdGlvbnNoaXBzJyxcbiBcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDUwMCxcbiAgfSxcbiBcbiAgcGFyZW50OiAnY29udGVudCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyM4ODgnLFxuXG4gIHNjZW5lOiAgW0xvYWRpbmdTY2VuZSwgQm9hcmRTY2VuZV0sXG59O1xuIFxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgbGV2ZWxzIH0gZnJvbSAnLi4vY29udGVudC9sZXZlbHMnXG5pbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gJy4uL21vZGVsL3RyaXBTdW1tYXJ5J1xuaW1wb3J0IHsgUGhvbmVTdGFnZSB9IGZyb20gJy4vcGhvbmVfc3RhZ2UnXG5pbXBvcnQgeyBIdW1hblN0YWdlIH0gZnJvbSAnLi9odW1hbl9zdGFnZSdcbmltcG9ydCB7IExvY2F0aW9uU3RhZ2UgfSBmcm9tICcuL2xvY2F0aW9uX3N0YWdlJ1xuaW1wb3J0IHsgTG9jYXRpb25OYW1lIH0gZnJvbSAnLi4vY29udGVudC9sb2NhdGlvbnMnXG5pbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9tb2RlbC9sZXZlbFwiXG5pbXBvcnQgeyBNb2RhbERpYWxvZyB9IGZyb20gJy4uL3V0aWxzL21vZGFsJ1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuLi91dGlscy91dGlscydcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgdHJpcEZhZGVyPzogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZhZGVyPzogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgaW5mb1RleHQ/OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIHByaXZhdGUgbGV2ZWw6IExldmVsXG5cbiAgICBwdWJsaWMgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5XG4gICAgcHVibGljIHBob25lPzogUGhvbmVTdGFnZVxuICAgIHByaXZhdGUgaHVtYW5TdGFnZT86IEh1bWFuU3RhZ2VcbiAgICBwcml2YXRlIGxvY2F0aW9uU3RhZ2U/OiBMb2NhdGlvblN0YWdlXG4gICAgdGVtcFBlb3BsZVBvcnRyYWl0cz86IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGtleTogJ21hbmFnZW1lbnQnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsc1swXVxuICAgICAgICB0aGlzLnRyaXBTdW1tYXJ5ID0gbmV3IFRyaXBTdW1tYXJ5KHRoaXMubGV2ZWwuaHVtYW5zWzBdKVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25GYWRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldERlcHRoKDIwMDEpXG5cbiAgICAgICAgbGV0IG11c2ljID0gdGhpcy5zb3VuZC5hZGQoJ21haW5fbXVzaWMnLCB7XG4gICAgICAgICAgICB2b2x1bWU6IDAuNSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIH0pLnBsYXkoKVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgMCwgJ2JvYXJkX2JhY2tncm91bmQnKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuXG4gICAgICAgIHRoaXMudHJpcEZhZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDgwMCwgNTAwLCAweDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuZ29CYWNrKCkpXG4gICAgICAgIHRoaXMuaW5mb1RleHQgPSB0aGlzLmFkZC50ZXh0KDQwMCwgMTEwLCAnJywgeyBmaWxsOiAnI2ZmZicsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoNTUwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDApXG5cbiAgICAgICAgdGhpcy5sb2NhdGlvblN0YWdlID0gbmV3IExvY2F0aW9uU3RhZ2UodGhpcywgdGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlID0gbmV3IEh1bWFuU3RhZ2UodGhpcywgdGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5waG9uZSA9IG5ldyBQaG9uZVN0YWdlKHRoaXMpXG5cbiAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50cmFuc2l0aW9uRmFkZXIsXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29PdXQobG9jYXRpb246IExvY2F0aW9uTmFtZSkge1xuICAgICAgICBpZiAodGhpcy50cmlwU3VtbWFyeS5nb1Blb3BsZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgbGV0IHR1dG9yaWFsID0gJ1NlbGVjdCBzb21lIG9mIHlvdXIgZnJpZW5kcyB0byBqb2luIHlvdS4nXG4gICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gJ0hpa2luZycpIHtcbiAgICAgICAgICAgICAgICBuZXcgTW9kYWxEaWFsb2codGhpcywgYFlvdSBjYW4ndCBnbyBoaWtpbmcgYWxvbmUuXFxuJHt0dXRvcmlhbH1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PSAnQm93bGluZycpIHtcbiAgICAgICAgICAgICAgICBuZXcgTW9kYWxEaWFsb2codGhpcywgYFlvdSBjYW4ndCBnbyBib3dsaW5nIGFsb25lLlxcbiR7dHV0b3JpYWx9YClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT0gJ0RyaW5raW5nJykge1xuICAgICAgICAgICAgICAgIG5ldyBNb2RhbERpYWxvZyh0aGlzLCBgWW91IGNhbid0IGdvIGRyaW5raW5nIGFsb25lLlxcbiR7dHV0b3JpYWx9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmlwU3VtbWFyeS5wcmVwYXJlKGxvY2F0aW9uKVxuICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXMubGV2ZWwuZ29PdXQodGhpcywgdGhpcy50cmlwU3VtbWFyeSlcbiAgICAgICAgdGhpcy50cmlwRmFkZXIhLmlucHV0LmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmxvY2F0aW9uU3RhZ2UhLmVuYWJsZShmYWxzZSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dCEuc2V0VGV4dChtZXNzYWdlKVxuICAgICAgICB0aGlzLnRlbXBQZW9wbGVQb3J0cmFpdHMgPSBVdGlscy5kcmF3UG9ydHJhaXRzKHRoaXMudHJpcFN1bW1hcnkuZ29QZW9wbGUsIHRoaXMpXG4gICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy50ZW1wUGVvcGxlUG9ydHJhaXRzLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBjaGlsZCxcbiAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAwLCB0bzogMSB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLmluZm9UZXh0LCB0aGlzLnRyaXBGYWRlcl0sXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAwLCB0bzogMSB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uU3RhZ2UhLmVuYWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZSEuYmxlYWNoUGVvcGxlKClcbiAgICAgICAgdGhpcy50cmlwRmFkZXIhLmlucHV0LmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5pbmZvVGV4dCwgdGhpcy50cmlwRmFkZXJdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlwRmFkZXIhLmlucHV0LmVuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgbWVzc2FnZSBxdWV1ZSBoYXMgc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgaWYodGhpcy5tZXNzYWdlUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE1vZGFsRGlhbG9nKHRoaXMsIHRoaXMubWVzc2FnZVF1ZXVlWzBdLCB0aGlzLm1lc3NhZ2VRdWV1ZVsxXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLnRlbXBQZW9wbGVQb3J0cmFpdHMhLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBjaGlsZCxcbiAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wUGVvcGxlUG9ydHJhaXRzIS5kZXN0cm95KGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudHJpcFN1bW1hcnkgPSBuZXcgVHJpcFN1bW1hcnkodGhpcy5sZXZlbC5odW1hbnNbMF0pXG4gICAgICAgIHRoaXMucGhvbmU/LmRpc3BsYXkodGhpcy5sZXZlbC5odW1hbnNbMF0sIDApXG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZT8ucmVkcmF3TGluZXModGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlPy5kaXNwbGF5KHRoaXMubGV2ZWwuaHVtYW5zWzBdLCAwKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlPzogW3N0cmluZywgKCkgPT4gdm9pZF0gPSB1bmRlZmluZWRcbiAgICBwdWJsaWMgZmFpbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWUgPSBbbWVzc2FnZSwgKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkgfV1cbiAgICB9XG59IiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gXCIuL2JvYXJkXCJcbmltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4uL21vZGVsL2h1bWFuXCJcbmltcG9ydCB7IHJlbGF0aW9uc2hpcFRhZ01hcCB9IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgREVGQVVMVF9GT05ETkVTUyB9IGZyb20gXCIuLi9tb2RlbC9wZW9wbGVHcmFwaFwiXG5cbmV4cG9ydCBjbGFzcyBIdW1hblN0YWdlIHtcbiAgICBwcml2YXRlIGFsbFBlb3BsZVRleHRzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBbXVxuICAgIHByaXZhdGUgYWxsUGVvcGxlQ2lyY2xlczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkVsbGlwc2U+ID0gW11cbiAgICBwcml2YXRlIGFsbFBlb3BsZUxpbmVzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA+ID0gW11cbiAgICBwcml2YXRlIGFsbFBlb3BsZVdhcm5pbmc6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5FbGxpcHNlPiA9IFtdXG4gICAgcHJpdmF0ZSBURVhUX0FMUEhBX09LID0gMVxuICAgIHByaXZhdGUgVEVYVF9BTFBIQV9CRCA9IDAuM1xuICAgIHByaXZhdGUgQ0lSQ0xFX0FMUEhBX09LID0gMC4yXG4gICAgcHJpdmF0ZSBDSVJDTEVfQUxQSEFfQkQgPSAwXG4gICAgcHJpdmF0ZSBXQVJOSU5HX0FMUEhBX09LID0gMC40XG4gICAgcHJpdmF0ZSBXQVJOSU5HX0FMUEhBX0JEID0gMFxuICAgIHByaXZhdGUgcG9zaXRpb25zOiBBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+XG4gICAgcHJpdmF0ZSBwb3NpdGlvbnNJbm5lcjogQXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9PlxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2VuZTogQm9hcmRTY2VuZSwgcHJpdmF0ZSBsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IDQ1MFxuICAgICAgICBjb25zdCBjZW50ZXJZID0gMTgwXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDE1MFxuICAgICAgICBjb25zdCByYWRpdXNJbm5lciA9IDE0NVxuXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbGV2ZWwuaHVtYW5zLm1hcCgoXywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogKGkgKyAwLjUpIC8gbGV2ZWwuaHVtYW5zLmxlbmd0aFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbm5lciA9IGxldmVsLmh1bWFucy5tYXAoKF8sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIChpICsgMC41KSAvIGxldmVsLmh1bWFucy5sZW5ndGhcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1c0lubmVyLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNJbm5lcixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBpIGluIGxldmVsLmh1bWFucykge1xuICAgICAgICAgICAgbGV0IGh1bWFuID0gbGV2ZWwuaHVtYW5zW2ldXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25zW2ldXG5cblxuICAgICAgICAgICAgbGV0IGNpcmNsZSA9IHNjZW5lLmFkZC5lbGxpcHNlKDAsIDAsIDgwLCA4MCwgMHgyZTJlMmUpXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgICAgICAuc2V0QWxwaGEoKE51bWJlcihpKSA9PSAwID8gdGhpcy5DSVJDTEVfQUxQSEFfT0sgOiB0aGlzLkNJUkNMRV9BTFBIQV9CRCkpXG5cbiAgICAgICAgICAgIGxldCBpbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCAncG9ydHJhaXRfc21hbGwnLCBpKVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheShodW1hbiwgTnVtYmVyKGkpKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkobGV2ZWwuaHVtYW5zWzBdLCAwKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoMCwgMCwgYCR7aHVtYW4ubmFtZX1gLCB7XG4gICAgICAgICAgICAgICAgZmlsbDogJyMxYzFjMWMnLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5zZXRBbHBoYShOdW1iZXIoaSkgPT0gMCA/IHRoaXMuVEVYVF9BTFBIQV9PSyA6IHRoaXMuVEVYVF9BTFBIQV9CRClcblxuICAgICAgICAgICAgbGV0IHdhcm5pbmcgPSBzY2VuZS5hZGQuZWxsaXBzZSgwLCAwLCAxMCwgMTAsIDB4ZmYwMDAwKVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgICAgICAgICAgLnNldEFscGhhKHRoaXMuV0FSTklOR19BTFBIQV9PSylcblxuICAgICAgICAgICAgc2NlbmUuYWRkLmdyb3VwKFtpbWFnZSwgdGV4dCwgY2lyY2xlLCB3YXJuaW5nXSkuc2V0WFkocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcblxuICAgICAgICAgICAgLy8gVEJIIEkgaGF2ZSBubyBpZGVhIHdoeSB0aGlzIGlzIG5vdCByZWxhdGl2ZSB0byB0aGUgZ3JvdXAsIGJ1dCB3aGF0ZXZzXG4gICAgICAgICAgICB0ZXh0LnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyAxMDAgKyAxMClcbiAgICAgICAgICAgIGNpcmNsZS5zZXRQb3NpdGlvbihwb3NpdGlvbi54LCBwb3NpdGlvbi55ICsgNTAgKyAxMClcbiAgICAgICAgICAgIGltYWdlLnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyA0NSArIDEwKVxuICAgICAgICAgICAgd2FybmluZy5zZXRQb3NpdGlvbihwb3NpdGlvbi54ICsgMTAsIHBvc2l0aW9uLnkgKyAzMClcblxuICAgICAgICAgICAgaWYgKE51bWJlcihpKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjZW5lLnRyaXBTdW1tYXJ5LmZsaXBHb1Blb3BsZShodW1hbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogdGhpcy5URVhUX0FMUEhBX0JELCB0bzogdGhpcy5URVhUX0FMUEhBX09LIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjaXJjbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogdGhpcy5DSVJDTEVfQUxQSEFfQkQsIHRvOiB0aGlzLkNJUkNMRV9BTFBIQV9PSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLlRFWFRfQUxQSEFfT0ssIHRvOiB0aGlzLlRFWFRfQUxQSEFfQkQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNpcmNsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLkNJUkNMRV9BTFBIQV9PSywgdG86IHRoaXMuQ0lSQ0xFX0FMUEhBX0JEIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZXh0Lm9uKCdwb2ludGVyZG93bicsIG9uQ2xpY2spXG4gICAgICAgICAgICAgICAgY2lyY2xlLm9uKCdwb2ludGVyZG93bicsIG9uQ2xpY2spXG4gICAgICAgICAgICAgICAgaW1hZ2Uub24oJ3BvaW50ZXJkb3duJywgb25DbGljaylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hbGxQZW9wbGVUZXh0cy5wdXNoKHRleHQpXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZUNpcmNsZXMucHVzaChjaXJjbGUpXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVdhcm5pbmcucHVzaCh3YXJuaW5nKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdMaW5lcyhsZXZlbClcbiAgICB9XG5cbiAgICBwdWJsaWMgYmxlYWNoUGVvcGxlKCkge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMubGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVRleHRzW2ldLnNldEFscGhhKHRoaXMuVEVYVF9BTFBIQV9CRClcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBlb3BsZUNpcmNsZXNbaV0uc2V0QWxwaGEodGhpcy5DSVJDTEVfQUxQSEFfQkQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheShodW1hbjogSHVtYW4sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmFsbFBlb3BsZUxpbmVzKSB7XG4gICAgICAgICAgICAvLyBJIHZlcnkgbXVjaCBhZG1pdCB0aGF0IHRoaXMgaXMgc3VwZXIgc2xvdyBhbmQgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgIC8vIEJVVCBXVEYgSVMgTk9UIEdST1VQIEFMUEhBIEVYUE9TRUQgUFVCTElDTFlcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzW2ldLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogKGNoaWxkIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5MaW5lKS5hbHBoYSwgdG86IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzW2ldLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogKGNoaWxkIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5MaW5lKS5hbHBoYSwgdG86IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NlbmUucGhvbmUhLmRpc3BsYXkoaHVtYW4sIE51bWJlcihpbmRleCkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaW5lYXJTY2FsZUJsYWNrKGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBsZXZlbCBpcyAwIHRvIDFcbiAgICAgICAgLy8gcmV0dXJuIE1hdGgucm91bmQobGV2ZWwqMjU1KjI1NSoyNTUpICsgTWF0aC5yb3VuZChsZXZlbCoyNTUpICsgTWF0aC5yb3VuZChsZXZlbCoyNTUpXG5cbiAgICAgICAgLy8gbGV2ZWwgaXMgMCB0byAxMFxuICAgICAgICBpZiAobGV2ZWwgPD0gMikge1xuICAgICAgICAgICAgcmV0dXJuIDB4ZGUwMDAwXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIDB4ZDQ2YzZjXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNikge1xuICAgICAgICAgICAgcmV0dXJuIDB4YTNhM2EzXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gOCkge1xuICAgICAgICAgICAgcmV0dXJuIDB4NzBjYzc4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMHgwMGRlMTNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWRyYXdMaW5lcyhsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgZm9yIChsZXQgZyBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzKSB7XG4gICAgICAgICAgICBnLmRlc3Ryb3kodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbFBlb3BsZUxpbmVzID0gW11cblxuICAgICAgICBsZXQgcGVvcGxlR3JhcGggPSBsZXZlbC5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaFxuICAgICAgICBmb3IgKGxldCBoaTEgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICBsZXQgaHVtYW4xID0gbGV2ZWwuaHVtYW5zW2hpMV1cbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKClcbiAgICAgICAgICAgICAgICAuc2V0WFkoMCwgNTApXG4gICAgICAgICAgICBmb3IgKGxldCBoaTIgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGh1bWFuMiA9IGxldmVsLmh1bWFuc1toaTJdXG4gICAgICAgICAgICAgICAgaWYgKGhpMSA9PSBoaTIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZndcbiAgICAgICAgICAgICAgICBsZXQgeW91Q2hhbmdlID0gaHVtYW4xLm5hbWUgPT0gJ1lvdSdcbiAgICAgICAgICAgICAgICBpZiAoeW91Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBodW1hbjJcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4yID0gaHVtYW4xXG4gICAgICAgICAgICAgICAgICAgIGh1bWFuMSA9IHRtcFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB0YWdzID0gQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLmZyb20ocGVvcGxlR3JhcGguZ2V0UmVsVGFncyhbaHVtYW4xLm5hbWUsIGh1bWFuMi5uYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHJlbGF0aW9uc2hpcFRhZ01hcC5oYXMoeCkpXG4gICAgICAgICAgICAgICAgbGV0IGZvbmRuZXNzID0gcGVvcGxlR3JhcGguZ2V0Rm9uZG5lc3MoW2h1bWFuMS5uYW1lLCBodW1hbjIubmFtZV0pXG5cbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpXG5cbiAgICAgICAgICAgICAgICBpZiAoZm9uZG5lc3MgIT0gREVGQVVMVF9GT05ETkVTUyB8fCB0YWdzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmWCA9ICh0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueCAtIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS54KVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZlkgPSAodGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnkgLSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZYTiA9IGRpZmZYIC8gTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZllOID0gZGlmZlkgLyBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5saW5lYXJTY2FsZUJsYWNrKGZvbmRuZXNzKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB4MSA9IHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS54IC0gNDUgKiBkaWZmWE5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHkxID0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnkgKyA2MCAtIDQ1ICogZGlmZllOXG4gICAgICAgICAgICAgICAgICAgIGxldCB4MiA9IHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS54ICsgNDUgKiBkaWZmWE5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHkyID0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLnkgKyA2MCArIDQ1ICogZGlmZllOXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lID0gdGhpcy5zY2VuZS5hZGQubGluZSgwLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDEsIHkxLCB4MiwgeTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuMylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRMaW5lV2lkdGgoMilcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYWRkKGxpbmUpXG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJpYW5nbGUgPSB0aGlzLnNjZW5lLmFkZC50cmlhbmdsZSh5b3VDaGFuZ2UgPyB4MSA6IHgyLCB5b3VDaGFuZ2UgPyB5MSA6IHkyLCAtMTAsIDAsIDEwLCAwLCAwLCAxMCwgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0Um90YXRpb24oTWF0aC5hdGFuMih5MiAtIHkxLCB4MiAtIHgxKSAtIE1hdGguUEkgLyAyICsgKHlvdUNoYW5nZSA/IE1hdGguUEkgOiAwKSlcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYWRkKHRyaWFuZ2xlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGFncykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFnID0gdGFnc1tpXVxuICAgICAgICAgICAgICAgICAgICBsZXQgYXZnWCA9ICh0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueCArIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS54KSAvIDJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2Z1kgPSAodGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnkgKyB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueSkgLyAyICsgNjBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKGF2Z1ggKyAoTnVtYmVyKGkpIC0gdGFncy5sZW5ndGggLyAyICsgMC40KSAqIDI3LCBhdmdZLCAncmVsX3RhZ3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEZyYW1lKHRhZylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXREaXNwbGF5U2l6ZSgyNSwgMjUpXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmFkZChzeW1ib2wpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGJhY2sgXG4gICAgICAgICAgICAgICAgaWYgKHlvdUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gaHVtYW4yXG4gICAgICAgICAgICAgICAgICAgIGh1bWFuMiA9IGh1bWFuMVxuICAgICAgICAgICAgICAgICAgICBodW1hbjEgPSB0bXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgdGhpcy5hbGxQZW9wbGVMaW5lcy5wdXNoKGdyb3VwKVxuXG5cblxuICAgICAgICAgICAgbGV0IGZvbmRuZXNzQmFkIDogYm9vbGVhbiA9IHRoaXMubGV2ZWwuaHVtYW5zLm1hcChcbiAgICAgICAgICAgICAgICB4ID0+IHgubmFtZSA9PSBodW1hbjEubmFtZSA/IDEwIDogdGhpcy5sZXZlbC5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRGb25kbmVzcyhbaHVtYW4xLm5hbWUsIHgubmFtZV0pXG4gICAgICAgICAgICApLnNvbWUoeCA9PiB4IDw9IDIpXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVdhcm5pbmdbaGkxXS5zZXRBbHBoYShmb25kbmVzc0JhZCA/IHRoaXMuV0FSTklOR19BTFBIQV9PSyA6IHRoaXMuV0FSTklOR19BTFBIQV9CRClcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL21vZGVsL2xldmVsXCJcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tIFwiLi9ib2FyZFwiXG5cbmV4cG9ydCBjbGFzcyBMb2NhdGlvblN0YWdlIHtcbiAgICBwcml2YXRlIGFsbExvY2F0aW9uSW1hZ2U6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZT4gPSBbXVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IEJvYXJkU2NlbmUsIGxldmVsOiBMZXZlbCkge1xuICAgICAgICAvLyBzY2VuZS5hZGQucmVjdGFuZ2xlKDY4MCwgMCwgMTIwLCA1MDAsIDB4Y2NjY2NjKVxuICAgICAgICAvLyAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICBsZXQgdGV4dCA9IHNjZW5lLmFkZC50ZXh0KDY4OSwgMjUsICdBY3Rpdml0eScsIHsgZmlsbDogJ2JsYWNrJywgZm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMjBweCcgfSlcblxuICAgICAgICBmb3IgKGxldCBpIGluIGxldmVsLmxvY2F0aW9ucykge1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gbGV2ZWwubG9jYXRpb25zW2ldXG4gICAgICAgICAgICBsZXQgaW1nID0gc2NlbmUuYWRkLmltYWdlKDY4MiwgNzAgKyBOdW1iZXIoaSkgKiAxMzUsICdsb2NhdGlvbl90aHVtYicpXG4gICAgICAgICAgICAgICAgLnNldEZyYW1lKGkpXG4gICAgICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgICAgICAuc2V0RGlzcGxheVNpemUoOTAsIDkwKVxuICAgICAgICAgICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLmdvT3V0KGxvY2F0aW9uKVxuICAgICAgICAgICAgICAgICAgICBzY2VuZS50cmlwU3VtbWFyeS5nb0xvY2F0aW9uID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5hbGxMb2NhdGlvbkltYWdlLnB1c2goaW1nKVxuICAgICAgICAgICAgbGV0IHRleHQgPSBzY2VuZS5hZGQudGV4dCg3MjUsIDg1ICsgTnVtYmVyKGkpICogMTM1ICsgOTAsIGAke2xvY2F0aW9ufWAsIHsgZmlsbDogJ2JsYWNrJywgZm9udEZhbWlseTogJ1JvYm90bycgfSlcbiAgICAgICAgICAgICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG4gICAgICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoMTIwKVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIGZvciAobGV0IGltZyBvZiB0aGlzLmFsbExvY2F0aW9uSW1hZ2UpIHtcbiAgICAgICAgICAgIGltZy5pbnB1dC5lbmFibGVkID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBIdW1hbiB9IGZyb20gJy4uL21vZGVsL2h1bWFuJ1xuaW1wb3J0IHsgaHVtYW5UYWdNYXAsIHJlbGF0aW9uc2hpcFRhZ01hcCwgaHVtYW5UYWdEaXNwbGF5IH0gZnJvbSAnLi4vY29udGVudC9lbnRpdHlUYWdzJ1xuaW1wb3J0IHsgSHVtYW5OYW1lLCBIdW1hbkJpbyB9IGZyb20gJy4uL2NvbnRlbnQvaHVtYW5zJ1xuXG5leHBvcnQgY2xhc3MgUGhvbmVTdGFnZSB7XG4gICAgcHJpdmF0ZSBwb3J0cmFpdDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gICAgcHJpdmF0ZSBpbmZvVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBwcml2YXRlIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lKSB7XG4gICAgICAgIC8vIHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjQwLCA1MDAsIDB4YWFhYWFhKVxuICAgICAgICAvLyAgICAgLnNldE9yaWdpbigwLCAwKVxuXG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBzY2VuZS5hZGQuaW1hZ2UoMjAsIDIwLCAncG9ydHJhaXRfYmlnJylcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcblxuICAgICAgICB0aGlzLm5hbWVUZXh0ID0gc2NlbmUuYWRkLnRleHQoMTE1LCAyNTUsICcnLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG4gICAgICAgICAgICAuc2V0V29yZFdyYXBXaWR0aCgxOTApXG4gICAgICAgICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICB0aGlzLmluZm9UZXh0ID0gc2NlbmUuYWRkLnRleHQoMjUsIDI3MCwgJycsIHsgZmlsbDogJ2JsYWNrJywgZm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMTRweCcgfSlcbiAgICAgICAgICAgIC5zZXRXb3JkV3JhcFdpZHRoKDE5MClcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheShodW1hbjogSHVtYW4sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wb3J0cmFpdC5zZXRGcmFtZShpbmRleClcbiAgICAgICAgbGV0IGh1bVN0cmluZyA9IEFycmF5LmZyb20oaHVtYW4udGFncylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiBodW1hblRhZ01hcC5oYXMoeCkgJiYgaHVtYW5UYWdEaXNwbGF5Lmhhcyh4KSlcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IGh1bWFuVGFnTWFwLmdldCh4KSlcbiAgICAgICAgICAgIC5qb2luKCcsICcpXG5cbiAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSBwZXJoYXBzIGRvbmUgaW4gYSBmdW5jdGlvbmFsIHdheSwgYnV0IHRoaXMgc2VlbXMgbW9yZSByZWFkYWJsZVxuICAgICAgICBsZXQgcmVsU3RyaW5nID0gW11cbiAgICAgICAgZm9yIChsZXQgcmVsYXRpb25zaGlwIG9mIGh1bWFuLnJlbGF0aW9uc2hpcHMpIHtcbiAgICAgICAgICAgIGxldCByZWxTdHJpbmdJbmRpdmlkdWFsOiBBcnJheTxzdHJpbmc+ID0gW11cbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcC50YWdzLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwVGFnTWFwLmhhcyh4KSkge1xuICAgICAgICAgICAgICAgICAgICByZWxTdHJpbmdJbmRpdmlkdWFsLnB1c2gocmVsYXRpb25zaGlwVGFnTWFwLmdldCh4KSBhcyBzdHJpbmcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChyZWxTdHJpbmdJbmRpdmlkdWFsLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgcmVsU3RyaW5nLnB1c2goYCR7cmVsYXRpb25zaGlwLnBlb3BsZVsxXX06ICR7cmVsU3RyaW5nSW5kaXZpZHVhbC5qb2luKCcsICcpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBiaW9TdHJpbmcgPSBIdW1hbkJpb1tpbmRleF1cblxuICAgICAgICB0aGlzLm5hbWVUZXh0LnNldFRleHQoSHVtYW5OYW1lW2h1bWFuLm5hbWVdKVxuICAgICAgICB0aGlzLmluZm9UZXh0LnNldFRleHQoYCR7aHVtU3RyaW5nfVxcblxcbiR7YmlvU3RyaW5nfVxcblxcbiR7cmVsU3RyaW5nLmpvaW4oJ1xcbicpfWAucmVwbGFjZSgvXlxcblxcbi8sICcnKSlcbiAgICB9XG59IiwiaW1wb3J0IHsgU2l0dWF0aW9uLCBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi9zaXR1YXRpb25cIlxuaW1wb3J0IHsgUGVvcGxlR3JhcGggfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gXCIuL3RyaXBTdW1tYXJ5XCJcblxuZXhwb3J0IGNsYXNzIEZyaWVuZHNoaXBNYW5hZ2VyIHtcbiAgICBwcml2YXRlIHRyaXBDb3VudDogbnVtYmVyXG4gICAgcHJpdmF0ZSBzaXR1YXRpb25BZGRDYWxlbmRhcjogTWFwPG51bWJlciwgU2l0dWF0aW9uPlxuXG4gICAgcHVibGljIHNpdHVhdGlvbnM6IFNpdHVhdGlvbltdXG4gICAgcHVibGljIHBlb3BsZUdyYXBoOiBQZW9wbGVHcmFwaFxuXG4gICAgY29uc3RydWN0b3Ioc2l0dWF0aW9uczogU2l0dWF0aW9uW10sIHBlb3BsZUdyYXBoOiBQZW9wbGVHcmFwaCkge1xuICAgICAgICB0aGlzLnRyaXBDb3VudCA9IDBcbiAgICAgICAgdGhpcy5zaXR1YXRpb25BZGRDYWxlbmRhciA9IG5ldyBNYXAoKVxuXG4gICAgICAgIHRoaXMuc2l0dWF0aW9ucyA9IHNpdHVhdGlvbnNcbiAgICAgICAgdGhpcy5wZW9wbGVHcmFwaCA9IHBlb3BsZUdyYXBoXG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5TWVldGluZyh0cmlwOiBUcmlwU3VtbWFyeSk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICAvLyB1cGRhdGUgc3lzdGVtIHdpdGggbmV3bHkgYWRkZWQgc2l0dWF0aW9uc1xuICAgICAgICBsZXQgbmV3U2l0Rm9yVGhpc01lZXRpbmcgPSB0aGlzLnNpdHVhdGlvbkFkZENhbGVuZGFyLmdldCh0aGlzLnRyaXBDb3VudCkgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5zaXR1YXRpb25zLmNvbmNhdChuZXdTaXRGb3JUaGlzTWVldGluZylcblxuICAgICAgICAvLyB0cnkgdG8gYXBwbHkgYWxsIHNpdHVhdGlvbnNcbiAgICAgICAgbGV0IGFwcGxpZWRFZmZlY3RzID0gbmV3IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4oKVxuICAgICAgICB0aGlzLnNpdHVhdGlvbnMuZm9yRWFjaChzaXR1YXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgYXBwRWZmRm9yQ3VyckNvbiA9IHRoaXMudHJ5QXBwbHlDb25zdHJhaW50KHNpdHVhdGlvbiwgdHJpcCkgIC8vIFdlIGtub3cgaXQncyBnb25uYSBiZSBhc3NpZ25lZFxuICAgICAgICAgICAgYXBwbGllZEVmZmVjdHMgPSBhcHBsaWVkRWZmZWN0cy5jb25jYXQoYXBwRWZmRm9yQ3VyckNvbilcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnRyaXBDb3VudCArPSAxXG4gICAgICAgIHJldHVybiBhcHBsaWVkRWZmZWN0c1xuICAgIH1cblxuICAgIHByaXZhdGUgdHJ5QXBwbHlDb25zdHJhaW50KGNvbjogU2l0dWF0aW9uLCB0cmlwOiBUcmlwU3VtbWFyeSk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgYXBwbGljYWJsZUVmZmVjdHMgPSBjb24uR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcCwgdGhpcy5wZW9wbGVHcmFwaCwgdGhpcy50cmlwQ291bnQpXG5cbiAgICAgICAgYXBwbGljYWJsZUVmZmVjdHMuZm9yRWFjaChlZmYgPT4ge1xuICAgICAgICAgICAgZWZmLmFkZGVkUmVsVGFncyA9IGVmZi5hZGRlZFJlbFRhZ3MuZmlsdGVyKGF0ID0+IHRoaXMucGVvcGxlR3JhcGguYWRkUmVsVGFnKGF0WzBdLCBhdFsxXSkpXG4gICAgICAgICAgICBlZmYucmVtb3ZlZFJlbFRhZ3MgPSBlZmYucmVtb3ZlZFJlbFRhZ3MuZmlsdGVyKGF0ID0+IHRoaXMucGVvcGxlR3JhcGgucmVtb3ZlUmVsVGFnKGF0WzBdLCBhdFsxXSkpXG5cbiAgICAgICAgICAgIGVmZi5hZGRlZEh1bVRhZ3MgPSBlZmYuYWRkZWRIdW1UYWdzLmZpbHRlcihhaCA9PiB0aGlzLnBlb3BsZUdyYXBoLmFkZEh1bVRhZyhhaFswXSwgYWhbMV0pKVxuICAgICAgICAgICAgZWZmLnJlbW92ZWRIdW1UYWdzID0gZWZmLnJlbW92ZWRIdW1UYWdzLmZpbHRlcihyaCA9PiB0aGlzLnBlb3BsZUdyYXBoLnJlbW92ZUh1bVRhZyhyaFswXSwgcmhbMV0pKVxuXG4gICAgICAgICAgICBlZmYuY2hhbmdlZEZvbmRuZXNzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKFtjb3VwbGUsIGNoYW5nZV0pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGVvcGxlR3JhcGguY2hhbmdlRm9uZG5lc3MoY291cGxlLCBjaGFuZ2UpLFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBlZmYubmV3RnV0dXJlU2l0dWF0aW9ucy5mb3JFYWNoKG5ld1NpdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXR1YXRpb25BZGRDYWxlbmRhci5zZXQodGhpcy50cmlwQ291bnQgKyBuZXdTaXRbMF0sIG5ld1NpdFsxXSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBhcHBsaWNhYmxlRWZmZWN0c1xuXG4gICAgfVxufSIsImltcG9ydCB7IFJlbGF0aW9uc2hpcCB9IGZyb20gXCIuL3Blb3BsZUdyYXBoXCI7XG5pbXBvcnQgeyBIdW1hblRhZyB9IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIjtcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuLi9jb250ZW50L2h1bWFuc1wiO1xuXG5leHBvcnQgY2xhc3MgSHVtYW4ge1xuICAgIG5hbWU6IEh1bWFuTmFtZVxuICAgIFxuICAgIC8vIHRoZXNlIGFyZSByZWFkIG9ubHlcbiAgICBwdWJsaWMgcmVsYXRpb25zaGlwczogQXJyYXk8UmVsYXRpb25zaGlwPlxuICAgIHB1YmxpYyB0YWdzOiBTZXQ8SHVtYW5UYWc+XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBIdW1hbk5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcHMgPSBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgU2V0KClcbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tIFwiLi9odW1hblwiXG5pbXBvcnQgeyBMb2NhdGlvbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9sb2NhdGlvbnNcIlxuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi90cmlwU3VtbWFyeVwiXG5pbXBvcnQgeyBDb3VwbGUsIENvdXBsZVV0aWxzLCBFZGdlS2V5LCBNSU5fRk9ORE5FU1MsIFBlb3BsZUdyYXBoLCBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBTaXR1YXRpb24sIFNpdHVhdGlvbkVmZmVjdCB9IGZyb20gXCIuL3NpdHVhdGlvblwiXG5pbXBvcnQgeyBGcmllbmRzaGlwTWFuYWdlciB9IGZyb20gXCIuL2ZyaWVuZHNoaXBNYW5hZ2VyXCJcbmltcG9ydCB7XG4gICAgSHVtYW5UYWcsXG4gICAgaHVtYW5UYWdNYXAsXG4gICAgUmVsYXRpb25zaGlwVGFnLFxuICAgIHJlbGF0aW9uc2hpcFRhZ0JpZGlyZWN0aW9uYWwsXG4gICAgcmVsYXRpb25zaGlwVGFnTWFwU3RvcnksXG4gICAgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nTmV3UmVtLFxuICAgIHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ1JlbU5ldyxcbn0gZnJvbSBcIi4uL2NvbnRlbnQvZW50aXR5VGFnc1wiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIlxuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gXCIuLi9tYW5hZ2VtZW50L2JvYXJkXCJcblxuZXhwb3J0IGNsYXNzIExldmVsIHtcbiAgICBwdWJsaWMgaHVtYW5zOiBBcnJheTxIdW1hbj5cbiAgICBwdWJsaWMgbG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+XG4gICAgcHVibGljIGZyaWVuZHNoaXBNYW5hZ2VyOiBGcmllbmRzaGlwTWFuYWdlclxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGh1bWFuczogQXJyYXk8SHVtYW4+LFxuICAgICAgICBsb2NhdGlvbnM6IEFycmF5PExvY2F0aW9uTmFtZT4sXG4gICAgICAgIHJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD4sXG4gICAgICAgIGluaXRpYWxUYWdzOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LFxuICAgICAgICBpbml0aWFsRm9uZG5lc3M6IEFycmF5PFtDb3VwbGUsIG51bWJlcl0+LFxuICAgICAgICBzaXR1YXRpb25zOiBBcnJheTxTaXR1YXRpb24+LFxuICAgICkge1xuICAgICAgICB0aGlzLmh1bWFucyA9IGh1bWFuc1xuICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IGxvY2F0aW9uc1xuICAgICAgICBsZXQgcGVvcGxlR3JhcGggPSBuZXcgUGVvcGxlR3JhcGgodGhpcy5odW1hbnMsIHJlbGF0aW9uc2hpcHMsIGluaXRpYWxUYWdzLCBpbml0aWFsRm9uZG5lc3MpXG5cbiAgICAgICAgdGhpcy5mcmllbmRzaGlwTWFuYWdlciA9IG5ldyBGcmllbmRzaGlwTWFuYWdlcihzaXR1YXRpb25zLCBwZW9wbGVHcmFwaClcblxuICAgICAgICAvLyBJbml0IHJlbGF0aW9uc2hpcHMgb24gcGVvcGxlXG4gICAgICAgIHRoaXMudXBkYXRlSHVtYW5zRnJvbVBlb3BsZUdyYXBoRm9yRGlzcGxheSgpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUh1bWFuc0Zyb21QZW9wbGVHcmFwaEZvckRpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaHVtYW5zLmZvckVhY2goaCA9PiB7XG4gICAgICAgICAgICBoLnJlbGF0aW9uc2hpcHMgPSB0aGlzLmZyaWVuZHNoaXBNYW5hZ2VyLnBlb3BsZUdyYXBoLmdldE91dFJlbGF0aW9uc2hpcHMoaC5uYW1lKVxuICAgICAgICAgICAgaC50YWdzID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRIdW1UYWdzKGgubmFtZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpeEFncmVlbWVudCh2YWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvWW91IHdhcy9nLCAnWW91IHdlcmUnKVxuICAgIH1cblxuICAgIHB1YmxpYyBnb091dChib2FyZDogQm9hcmRTY2VuZSwgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5KTogc3RyaW5nIHtcbiAgICAgICAgLy8gVXBkYXRlIGZyaWVuZHNoaXBzIGJhc2VkIG9uIHRyaXBcbiAgICAgICAgbGV0IGVmZmVjdHMgPSB0aGlzLmZyaWVuZHNoaXBNYW5hZ2VyLmFwcGx5TWVldGluZyh0cmlwU3VtbWFyeSlcblxuICAgICAgICAvLyBVcGRhdGUgcmVsYXRpb25zaGlwcyBvbiBwZW9wbGVcbiAgICAgICAgdGhpcy51cGRhdGVIdW1hbnNGcm9tUGVvcGxlR3JhcGhGb3JEaXNwbGF5KClcblxuICAgICAgICAvLyBEZWJ1ZyBsb2dcbiAgICAgICAgY29uc29sZS5sb2coXCJFZmZlY3RzOlwiLCBlZmZlY3RzKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkh1bWFuczpcIiwgdGhpcy5odW1hbnMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVsYXRpb25zaGlwc1wiLCB0aGlzLmZyaWVuZHNoaXBNYW5hZ2VyLnBlb3BsZUdyYXBoKVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBtc2dzIGZvciBlZmZlY3RzXG4gICAgICAgIGxldCBzdGF0dXNNZXNzYWdlID0gdGhpcy5jb25zdHJ1Y3RTdGF0dXNNZXNzYWdlKGVmZmVjdHMsIHRyaXBTdW1tYXJ5KVxuXG4gICAgICAgIC8vIGNvbnN0cnVjdCBmYWlsIG1zZ1xuICAgICAgICBsZXQgZmFpbE1zZ3MgPSB0aGlzLmNoZWNrRm9uZG5lc3NBbmRQcmVwYXJlRmFpbE1zZygpXG4gICAgICAgIGlmIChmYWlsTXNncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmYWlsTXNncy5wdXNoKFwiR2FtZSBvdmVyLlwiKVxuICAgICAgICAgICAgYm9hcmQuZmFpbChmYWlsTXNncy5qb2luKCdcXG4nKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0dXNNZXNzYWdlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0ZvbmRuZXNzQW5kUHJlcGFyZUZhaWxNc2coKSB7XG4gICAgICAgIGxldCBmYWlsTXNncyA9IEFycmF5PHN0cmluZz4oKVxuICAgICAgICBmb3IgKGxldCBoMSBvZiB0aGlzLmh1bWFucykge1xuICAgICAgICAgICAgbGV0IGgxSGF0ZXNMaXN0ID0gQXJyYXk8SHVtYW5OYW1lPigpXG4gICAgICAgICAgICBmb3IgKGxldCBoMiBvZiB0aGlzLmh1bWFucykge1xuICAgICAgICAgICAgICAgIGlmIChoMSA9PSBoMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRGb25kbmVzcyhbaDEubmFtZSwgaDIubmFtZV0pIDw9IE1JTl9GT05ETkVTUykge1xuICAgICAgICAgICAgICAgICAgICBoMUhhdGVzTGlzdC5wdXNoKGgyLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaDFIYXRlc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBoMUhhdGVzU3RyaW5nID0gaDFIYXRlc0xpc3QubGVuZ3RoID09IDJcbiAgICAgICAgICAgICAgICAgICAgPyBoMUhhdGVzTGlzdC5qb2luKFwiIGFuZCBcIilcbiAgICAgICAgICAgICAgICAgICAgOiBoMUhhdGVzTGlzdC5qb2luKFwiLCBcIilcblxuICAgICAgICAgICAgICAgIGZhaWxNc2dzLnB1c2goYCR7aDEubmFtZX0gJHtoMS5uYW1lID09ICdZb3UnID8gYGhhdGVgIDogYGhhdGVzYH0gJHtoMUhhdGVzU3RyaW5nfSB0b28gbXVjaC5gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWlsTXNnc1xuICAgIH1cblxuICAgIHByaXZhdGUgY29uc3RydWN0U3RhdHVzTWVzc2FnZShlZmZlY3RzOiBTaXR1YXRpb25FZmZlY3RbXSwgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5KSB7XG4gICAgICAgIGxldCB7IHBlclBlcnNvblJlbENoYW5nZXMsIHBlclBlcnNvbkh1bUNoYW5nZXMgfSA9IHRoaXMucmVkdWNlRWZmZWN0c1BlclBlcnNvbihlZmZlY3RzKVxuICAgICAgICB0aGlzLnJlZHVjZVRhZ3NTaGFkb3dpbmcocGVyUGVyc29uUmVsQ2hhbmdlcylcblxuICAgICAgICAvLyBkZWR1cGxpY2F0ZSBlZmZlY3QgZGVzY3JpcHRpb25zIFxuICAgICAgICBsZXQgZWZmZWN0c01zZ3MgPSBBcnJheS5mcm9tKG5ldyBTZXQoZWZmZWN0cy5tYXAoZWZmZWN0ID0+IHRoaXMuZml4QWdyZWVtZW50KGVmZmVjdC5nZXRSYW5kb21EZXNjcmlwdGlvbigpKSkpKVxuXG4gICAgICAgIC8vIGVmZmVjdHNNc2dzLnB1c2goXCJcIikgLy8gc2VwYXJhdG9yIGR1bW15XG4gICAgICAgIC8vIGVmZmVjdHNNc2dzID0gZWZmZWN0c01zZ3MuY29uY2F0KHRoaXMuY3JlYXRlRWZmZWN0c01zZ3MocGVyUGVyc29uUmVsQ2hhbmdlcywgcGVyUGVyc29uSHVtQ2hhbmdlcykpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXNnczpcIiwgZWZmZWN0c01zZ3MpXG5cbiAgICAgICAgZWZmZWN0c01zZ3MgPSBlZmZlY3RzTXNncy5maWx0ZXIobXNnID0+IHtcbiAgICAgICAgICAgIGxldCBnb25lUGVvcGxlID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRQZW9wbGVXaXRoVGFncyhIdW1hblRhZy5nb25lKVxuICAgICAgICAgICAgcmV0dXJuIGdvbmVQZW9wbGUuZXZlcnkoZ3AgPT4gIW1zZy5pbmNsdWRlcyhncCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IGVmZmVjdE1zZyA9IGVmZmVjdHNNc2dzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZWZmZWN0c01zZ3Muam9pbignXFxuJylcbiAgICAgICAgICAgIDogXCJOb3RoaW5nIHNpZ25pZmljYW50IG9jY3VycmVkLlwiXG5cbiAgICAgICAgLy8gQ29uc3RydWN0IGZpbmFsIG1zZ1xuICAgICAgICBsZXQgZnJpZW5kTGlzdDogc3RyaW5nID0gdHJpcFN1bW1hcnkuZ29QZW9wbGUuZmlsdGVyKCh4OiBIdW1hbikgPT4geC5uYW1lICE9ICdZb3UnKS5tYXAoKGh1bWFuOiBIdW1hbikgPT4gaHVtYW4ubmFtZSkuam9pbignLCAnKVxuICAgICAgICBsZXQgc3RhdHVzTWVzc2FnZSA9IGBZb3Ugd2VudCAke3RyaXBTdW1tYXJ5LmdvTG9jYXRpb259IHdpdGggJHtmcmllbmRMaXN0fS5cXG4ke2VmZmVjdE1zZ31gXG5cbiAgICAgICAgcmV0dXJuIHN0YXR1c01lc3NhZ2VcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZHVjZVRhZ3NTaGFkb3dpbmcocGVyUGVyc29uUmVsTXNnOiBNYXA8RWRnZUtleSwgW1JlbGF0aW9uc2hpcFRhZ1tdLCBSZWxhdGlvbnNoaXBUYWdbXV0+KSB7XG4gICAgICAgIHBlclBlcnNvblJlbE1zZy5mb3JFYWNoKChjaGFuZ2VzLCBjb3VwbGUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYWdzID0gY2hhbmdlc1swXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3MgPSBjaGFuZ2VzWzFdXG4gICAgICAgICAgICBsZXQgdG9SZW1OZXc6IEFycmF5PFJlbGF0aW9uc2hpcFRhZz4gPSBbXVxuICAgICAgICAgICAgbGV0IHRvUmVtUmVtOiBBcnJheTxSZWxhdGlvbnNoaXBUYWc+ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IHRhZyBvZiBuZXdUYWdzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdGFnSyBvZiByZWxhdGlvbnNoaXBUYWdTaGFkb3dpbmdOZXdSZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ0tbMF0gPT0gdGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1JlbVJlbS5wdXNoKHRhZ0tbMV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB0YWcgb2YgcmVtVGFncykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRhZ0sgb2YgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nUmVtTmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdLWzBdID09IHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9SZW1OZXcucHVzaCh0YWdLWzFdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VGFncyA9IG5ld1RhZ3MuZmlsdGVyKHggPT4gIXRvUmVtTmV3LmluY2x1ZGVzKHgpKVxuICAgICAgICAgICAgcmVtVGFncyA9IHJlbVRhZ3MuZmlsdGVyKHggPT4gIXRvUmVtUmVtLmluY2x1ZGVzKHgpKVxuICAgICAgICAgICAgcGVyUGVyc29uUmVsTXNnLnNldChjb3VwbGUsIFtuZXdUYWdzLCByZW1UYWdzXSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBlclBlcnNvblJlbE1zZ1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRWZmZWN0c01zZ3MoXG4gICAgICAgIHBlclBlcnNvblJlbE1zZzogTWFwPEVkZ2VLZXksIFtSZWxhdGlvbnNoaXBUYWdbXSwgUmVsYXRpb25zaGlwVGFnW11dPixcbiAgICAgICAgcGVyUGVyc29uSHVtTXNnOiBNYXA8SHVtYW5OYW1lLCBbSHVtYW5UYWdbXSwgSHVtYW5UYWdbXV0+LFxuICAgICk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBsZXQgZWZmZWN0TXNnOiBBcnJheTxzdHJpbmc+ID0gW11cblxuICAgICAgICBwZXJQZXJzb25IdW1Nc2cuZm9yRWFjaCgoY2hhbmdlcywgcGVyc29uKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGFncyA9IGNoYW5nZXNbMF1cbiAgICAgICAgICAgIGxldCByZW1UYWdzID0gY2hhbmdlc1sxXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3NBcnIgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgcmVtVGFnIG9mIHJlbVRhZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoaHVtYW5UYWdNYXAuaGFzKHJlbVRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtVGFnc0Fyci5wdXNoKGh1bWFuVGFnTWFwLmdldChyZW1UYWcpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdUYWdzQXJyID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IG5ld1RhZyBvZiBuZXdUYWdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGh1bWFuVGFnTWFwLmhhcyhuZXdUYWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RhZ3NBcnIucHVzaChodW1hblRhZ01hcC5nZXQobmV3VGFnKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVtVGFnc0Fyci5sZW5ndGggIT0gMCAmJiBuZXdUYWdzQXJyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goYCR7cGVyc29ufSBsb3N0ICR7cmVtVGFnc0Fyci5qb2luKCcsICcpfSwgYnV0IGdhaW5lZCAke25ld1RhZ3NBcnIuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZW1UYWdzQXJyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goYCR7cGVyc29ufSBsb3N0ICR7cmVtVGFnc0Fyci5qb2luKCcsICcpfWApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1RhZ3NBcnIubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RNc2cucHVzaChgJHtwZXJzb259IGdhaW5lZCAke25ld1RhZ3NBcnIuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcFRlbXBsYXRlczogQXJyYXk8W3N0cmluZywgQ291cGxlXT4gPSBbXVxuICAgICAgICBsZXQgYWRkSWZOb3RDb250YWlucyA9ICh0YWc6IFJlbGF0aW9uc2hpcFRhZywgbWVzc2FnZTogc3RyaW5nLCBjb3VwbGU6IENvdXBsZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgLy8gSWYgaXQncyBub3QgYmlkaXJlY3Rpb25hbCBleHBsaWNpdGx5LCB3ZSBkb24ndCBkZWR1cGxpY2F0ZVxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwVGVtcGxhdGVzLnB1c2goW21lc3NhZ2UsIGNvdXBsZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgeCBvZiByZWxhdGlvbnNoaXBUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoeFswXSA9PSBtZXNzYWdlICYmICgoeFsxXVswXSA9PSBjb3VwbGVbMF0gJiYgeFsxXVsxXSA9PSBjb3VwbGVbMV0pIHx8ICh4WzFdWzBdID09IGNvdXBsZVsxXSAmJiB4WzFdWzFdID09IGNvdXBsZVswXSkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcFRlbXBsYXRlcy5wdXNoKFttZXNzYWdlLCBjb3VwbGVdKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHBlclBlcnNvblJlbE1zZy5mb3JFYWNoKChjaGFuZ2VzLCBlZGdlS2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291cGxlID0gQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoZWRnZUtleSlcbiAgICAgICAgICAgIGxldCBuZXdUYWdzID0gY2hhbmdlc1swXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3MgPSBjaGFuZ2VzWzFdXG4gICAgICAgICAgICBmb3IgKGxldCByZW1UYWcgb2YgcmVtVGFncykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBUYWdNYXBTdG9yeS5oYXMocmVtVGFnKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJZk5vdENvbnRhaW5zKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5LmdldChyZW1UYWcpIGFzIFtzdHJpbmcsIHN0cmluZ10pWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbmV3VGFnIG9mIG5ld1RhZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwVGFnTWFwU3RvcnkuaGFzKG5ld1RhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSWZOb3RDb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxhdGlvbnNoaXBUYWdNYXBTdG9yeS5nZXQobmV3VGFnKSBhcyBbc3RyaW5nLCBzdHJpbmddKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCB4IG9mIHJlbGF0aW9uc2hpcFRlbXBsYXRlcykge1xuICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goXG4gICAgICAgICAgICAgICAgeFswXS5yZXBsYWNlKCdTVUJKJywgeFsxXVswXSkucmVwbGFjZSgnT0JKJywgeFsxXVsxXSksXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWZmZWN0TXNnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWR1Y2VFZmZlY3RzUGVyUGVyc29uKGVmZmVjdHM6IFNpdHVhdGlvbkVmZmVjdFtdKSB7XG4gICAgICAgIC8vIGZpcnN0IGFycmF5IGluIGtleXMgaXMgYWx3YXlzIGFkZGVkIHRhZ3MsIHNlY29uZCByZW1vdmVkXG4gICAgICAgIGxldCBwZXJQZXJzb25SZWxDaGFuZ2VzID0gbmV3IE1hcDxFZGdlS2V5LCBbQXJyYXk8UmVsYXRpb25zaGlwVGFnPiwgQXJyYXk8UmVsYXRpb25zaGlwVGFnPl0+KClcbiAgICAgICAgbGV0IHBlclBlcnNvbkh1bUNoYW5nZXMgPSBuZXcgTWFwPEh1bWFuTmFtZSwgW0FycmF5PEh1bWFuVGFnPiwgQXJyYXk8SHVtYW5UYWc+XT4oKVxuXG4gICAgICAgIGxldCBhZGRUb01hcCA9IGZ1bmN0aW9uIDxLLCBWPihrZXk6IEssIHZhbHVlOiBWLCB2YWx1ZVN0b3JlOiBNYXA8SywgW0FycmF5PFY+LCBBcnJheTxWPl0+LCBhZGRlZFJlbW92ZWRTdG9yZVN3aXRjaDogMCB8IDEpIHtcbiAgICAgICAgICAgIGxldCBwZXJLZXlTdG9yZSA9IHZhbHVlU3RvcmUuZ2V0KGtleSkgPz8gW25ldyBBcnJheTxWPigpLCBuZXcgQXJyYXk8Vj4oKV1cbiAgICAgICAgICAgIHBlcktleVN0b3JlW2FkZGVkUmVtb3ZlZFN0b3JlU3dpdGNoXS5wdXNoKHZhbHVlKVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoa2V5LCBwZXJLZXlTdG9yZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdHMuZm9yRWFjaChlZmZlY3QgPT4ge1xuICAgICAgICAgICAgZWZmZWN0LmFkZGVkSHVtVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKGFoWzBdLCBhaFsxXSwgcGVyUGVyc29uSHVtQ2hhbmdlcywgMCkpXG4gICAgICAgICAgICBlZmZlY3QucmVtb3ZlZEh1bVRhZ3MuZm9yRWFjaChyaCA9PiBhZGRUb01hcChyaFswXSwgcmhbMV0sIHBlclBlcnNvbkh1bUNoYW5nZXMsIDEpKVxuICAgICAgICAgICAgZWZmZWN0LmFkZGVkUmVsVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKENvdXBsZVV0aWxzLnRvRWRnZUtleShhaFswXSksIGFoWzFdLCBwZXJQZXJzb25SZWxDaGFuZ2VzLCAwKSlcbiAgICAgICAgICAgIGVmZmVjdC5yZW1vdmVkUmVsVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKENvdXBsZVV0aWxzLnRvRWRnZUtleShhaFswXSksIGFoWzFdLCBwZXJQZXJzb25SZWxDaGFuZ2VzLCAxKSlcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHJldHVybiB7IHBlclBlcnNvblJlbENoYW5nZXMsIHBlclBlcnNvbkh1bUNoYW5nZXMgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4vaHVtYW5cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZywgcmVsYXRpb25zaGlwVGFnTWFwIH0gZnJvbSBcIi4uL2NvbnRlbnQvZW50aXR5VGFnc1wiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIlxuXG5leHBvcnQgdHlwZSBFZGdlS2V5ID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb3VwbGUgPSBbSHVtYW5OYW1lLCBIdW1hbk5hbWVdXG5cbmV4cG9ydCBjb25zdCBNSU5fRk9ORE5FU1MgPSAwXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT05ETkVTUyA9IDVcbmV4cG9ydCBjb25zdCBNQVhfRk9ORE5FU1MgPSAxMFxuXG5leHBvcnQgY2xhc3MgUGVvcGxlR3JhcGgge1xuICAgIHByaXZhdGUgcGVvcGxlOiBBcnJheTxIdW1hbj5cbiAgICBwcml2YXRlIHJlbGF0aW9uc2hpcFRhZ3M6IE1hcDxFZGdlS2V5LCBTZXQ8UmVsYXRpb25zaGlwVGFnPj4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGZvbmRuZXNzOiBNYXA8RWRnZUtleSwgbnVtYmVyPiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgaHVtYW5zVGFnczogTWFwPEh1bWFuTmFtZSwgU2V0PEh1bWFuVGFnPj4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGh1bWFuTmFtZXM6IEFycmF5PEh1bWFuTmFtZT5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwZW9wbGU6IEh1bWFuW10gPSBbXSxcbiAgICAgICAgaW5pdGlhbFJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD4gPSBbXSxcbiAgICAgICAgaW5pdGlhbFRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgICAgIGluaXRpYWxGb25kbmVzczogQXJyYXk8W0NvdXBsZSwgbnVtYmVyXT4sXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlXG5cbiAgICAgICAgcGVvcGxlLmZvckVhY2goaCA9PiB7XG4gICAgICAgICAgICBwZW9wbGUuZm9yRWFjaChoaCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGgubmFtZSAhPSBoaC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVsVGFncyhbaC5uYW1lLCBoaC5uYW1lXSwgbmV3IFNldDxSZWxhdGlvbnNoaXBUYWc+KCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9uZG5lc3Muc2V0KENvdXBsZVV0aWxzLnRvRWRnZUtleShbaC5uYW1lLCBoaC5uYW1lXSksIERFRkFVTFRfRk9ORE5FU1MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBwZW9wbGUuZm9yRWFjaChwID0+e1xuICAgICAgICAgICAgdGhpcy5odW1hbnNUYWdzLnNldChwLm5hbWUsIG5ldyBTZXQoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBpbml0aWFsVGFncy5mb3JFYWNoKGhUYWdUdXBsZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2hOYW1lLCBoVGFnXSA9IGhUYWdUdXBsZVxuICAgICAgICAgICAgdGhpcy5hZGRIdW1UYWcoaE5hbWUsIGhUYWcpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaW5pdGlhbFJlbGF0aW9uc2hpcHMuZm9yRWFjaChyZWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRSZWxUYWdzKHJlbC5wZW9wbGUsIHJlbC50YWdzKVxuICAgICAgICB9KVxuXG4gICAgICAgIGluaXRpYWxGb25kbmVzcy5mb3JFYWNoKChbY291cGxlLCBmb25kbmVzc10pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KE1JTl9GT05ETkVTUyA8PSBmb25kbmVzcyAmJiBmb25kbmVzcyA8PSBNQVhfRk9ORE5FU1MpXG4gICAgICAgICAgICB0aGlzLmZvbmRuZXNzLnNldChDb3VwbGVVdGlscy50b0VkZ2VLZXkoY291cGxlKSwgZm9uZG5lc3MpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5odW1hbk5hbWVzID0gcGVvcGxlLm1hcChwID0+IHAubmFtZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVtYW5OYW1lcygpOiBBcnJheTxIdW1hbk5hbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5OYW1lc1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRIdW1UYWcocGVyc29uOiBIdW1hbk5hbWUsIHRhZzogSHVtYW5UYWcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGhUYWdzID0gdGhpcy5odW1hbnNUYWdzLmdldChwZXJzb24pXG4gICAgICAgIGxldCBuZXdseUFkZGVkID0gIWhUYWdzPy5oYXModGFnKVxuICAgICAgICBoVGFncz8uYWRkKHRhZylcblxuICAgICAgICByZXR1cm4gbmV3bHlBZGRlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVIdW1UYWcocGVyc29uOiBIdW1hbk5hbWUsIHRhZzogSHVtYW5UYWcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKT8uZGVsZXRlKHRhZykgPz8gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVtVGFncyhwZXJzb246IEh1bWFuTmFtZSk6IFNldDxIdW1hblRhZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odW1hbnNUYWdzLmdldChwZXJzb24pID8/IG5ldyBTZXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSZWxUYWdzKHBlb3BsZTogQ291cGxlLCB0YWdzOiBTZXQ8UmVsYXRpb25zaGlwVGFnPikge1xuICAgICAgICBsZXQgZ3JhcGhLZXkgPSBDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcFRhZ3Muc2V0KGdyYXBoS2V5LCB0YWdzKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWxUYWdzKHBlb3BsZTogQ291cGxlKTogU2V0PFJlbGF0aW9uc2hpcFRhZz4ge1xuICAgICAgICBsZXQgZ3JhcGhLZXkgPSBDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmdldChncmFwaEtleSkhXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlbFRhZyhwZW9wbGU6IENvdXBsZSwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpIHtcbiAgICAgICAgY29uc3QgcmVsVGFncyA9IHRoaXMuZ2V0UmVsVGFncyhwZW9wbGUpXG4gICAgICAgIGxldCBuZXdseUFkZGVkID0gIXJlbFRhZ3M/Lmhhcyh0YWcpXG4gICAgICAgIHJlbFRhZ3M/LmFkZCh0YWcpXG5cbiAgICAgICAgcmV0dXJuIG5ld2x5QWRkZWRcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVsVGFnKHBlb3BsZTogQ291cGxlLCB0YWc6IFJlbGF0aW9uc2hpcFRhZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWxUYWdzKHBlb3BsZSk/LmRlbGV0ZSh0YWcpID8/IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUZvbmRuZXNzKHBlb3BsZTogQ291cGxlLCBjaGFuZ2U6IG51bWJlcikge1xuICAgICAgICBsZXQgdG8gPSB0aGlzLmZvbmRuZXNzLmdldChDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKSkhICsgY2hhbmdlXG4gICAgICAgIHRvID0gTWF0aC5taW4odG8sIE1BWF9GT05ETkVTUylcbiAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgTUlOX0ZPTkRORVNTKVxuICAgICAgICB0aGlzLnNldEZvbmRuZXNzKHBlb3BsZSwgdG8pXG4gICAgfVxuXG4gICAgcHVibGljIHNldEZvbmRuZXNzKHBlb3BsZTogQ291cGxlLCB0bzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9uZG5lc3Muc2V0KENvdXBsZVV0aWxzLnRvRWRnZUtleShwZW9wbGUpLCB0bylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Rm9uZG5lc3MocGVvcGxlOiBDb3VwbGUpOiBudW1iZXIge1xuICAgICAgICBsZXQgZWRnZUtleSA9IENvdXBsZVV0aWxzLnRvRWRnZUtleShwZW9wbGUpXG4gICAgICAgIHJldHVybiB0aGlzLmZvbmRuZXNzLmdldChlZGdlS2V5KSA/PyAwXG4gICAgfVxuXG4gICAgcHVibGljIGdldE91dFJlbGF0aW9uc2hpcHMocGVyc29uOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXA+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheVxuXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwVGFncy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKEh1bWFuTmFtZVtwZXJzb25dKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSZWxhdGlvbnNoaXAoQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldEluUmVsYXRpb25zaGlwcyhwZXJzb246IEh1bWFuTmFtZSk6IEFycmF5PFJlbGF0aW9uc2hpcD4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKEh1bWFuTmFtZVtwZXJzb25dKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSZWxhdGlvbnNoaXAoQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVsYXRpb25zaGlwVGFncy5nZXQoQ291cGxlVXRpbHMudG9FZGdlS2V5KFthLCBiXSkpID8/IFtdKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRSZWxhdGlvbnNoaXBzT2ZUeXBlKGE6IEh1bWFuTmFtZSwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpOiBBcnJheTxSZWxhdGlvbnNoaXA+e1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPdXRSZWxhdGlvbnNoaXBzKGEpLmZpbHRlcihyZWwgPT4gcmVsLnRhZ3MuaGFzKHRhZykpXG4gICAgfVxuXG4gICAgcHVibGljIGhhdmVNdXR1YWxSZWxhdGlvbnNoaXBUYWcoYTogSHVtYW5OYW1lLCBiOiBIdW1hbk5hbWUsIHRhZzogUmVsYXRpb25zaGlwVGFnKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYikuaW5jbHVkZXModGFnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4oYTogSHVtYW5OYW1lLCBiOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXBUYWc+IHtcbiAgICAgICAgbGV0IGFiID0gdGhpcy5nZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihhLCBiKVxuICAgICAgICBsZXQgYmEgPSB0aGlzLmdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGIsIGEpXG5cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbihhYiwgYmEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFJlbGF0aW9uc2hpcHMoKTogUmVsYXRpb25zaGlwW10ge1xuICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmZvckVhY2goKHRhZ3MsIGVkZ2VLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdXBsZSA9IENvdXBsZVV0aWxzLmZyb21FZGdlS2V5KGVkZ2VLZXkpXG4gICAgICAgICAgICByZXMucHVzaChuZXcgUmVsYXRpb25zaGlwKGNvdXBsZSwgdGFncykpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxIdW1hbk5hbWVzKCk6IEFycmF5PEh1bWFuTmFtZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW9wbGUubWFwKHAgPT4gcC5uYW1lKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQZW9wbGVXaXRoVGFncyh0YWc6IEh1bWFuVGFnKTogQXJyYXk8SHVtYW5OYW1lPntcbiAgICAgICAgbGV0IHJlcyA9IEFycmF5KClcbiAgICAgICAgdGhpcy5odW1hbnNUYWdzLmZvckVhY2goKHRhZ3MsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0YWdzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gobmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb3VwbGVVdGlscyB7XG4gICAgc3RhdGljIG9yaWVudGVkOiBib29sZWFuID0gdHJ1ZVxuXG4gICAgcHVibGljIHN0YXRpYyB0b0VkZ2VLZXkodW5vcmRlcmVkUGFpcjogQ291cGxlKTogRWRnZUtleSB7XG4gICAgICAgIGxldCBbYSwgYl0gPSB1bm9yZGVyZWRQYWlyXG4gICAgICAgIGxldCBvcmRlcmVkUGFpciA9IGEgPD0gYiB8fCB0aGlzLm9yaWVudGVkID8gW2EsIGJdIDogW2IsIGFdXG5cbiAgICAgICAgcmV0dXJuIG9yZGVyZWRQYWlyLm1hcCh2ID0+IHYpLmpvaW4oJ3wnKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUVkZ2VLZXkoa2V5OiBFZGdlS2V5KTogQ291cGxlIHtcbiAgICAgICAgbGV0IG5hbWVzID0ga2V5LnNwbGl0KCd8JylcbiAgICAgICAgY29uc29sZS5hc3NlcnQobmFtZXMubGVuZ3RoID09IDIpXG5cbiAgICAgICAgcmV0dXJuIFtuYW1lc1swXSBhcyBIdW1hbk5hbWUsIG5hbWVzWzFdIGFzIEh1bWFuTmFtZV1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcCB7XG4gICAgcGVvcGxlOiBDb3VwbGVcbiAgICB0YWdzOiBTZXQ8UmVsYXRpb25zaGlwVGFnPlxuXG4gICAgY29uc3RydWN0b3IocGVvcGxlOiBDb3VwbGUsIHRhZ3M/OiBTZXQ8UmVsYXRpb25zaGlwVGFnPikge1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZVxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzID8/IG5ldyBTZXQ8UmVsYXRpb25zaGlwVGFnPigpXG4gICAgfVxuXG4gICAgLy8gQGRlcHJlY2F0ZWRcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGVvcGxlWzFdfTogJHtBcnJheS5mcm9tKHRoaXMudGFncykubWFwKCh4KSA9PiByZWxhdGlvbnNoaXBUYWdNYXAuZ2V0KHgpID8/IFwiP1wiKS5qb2luKCcsICcpfWBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb248VD4oYXM6IFRbXSwgYnM6IFRbXSk6IFRbXSB7XG4gICAgbGV0IHJlcyA9IG5ldyBBcnJheVxuXG4gICAgZm9yIChjb25zdCBhIG9mIGFzKSB7XG4gICAgICAgIGlmIChicy5pbmNsdWRlcyhhKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goYSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbn0iLCJpbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gXCIuL3RyaXBTdW1tYXJ5XCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcgfSBmcm9tIFwiLi4vY29udGVudC9lbnRpdHlUYWdzXCJcbmltcG9ydCB7IENvdXBsZSwgUGVvcGxlR3JhcGggfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxufVxuXG5cbmV4cG9ydCBjbGFzcyBTaXR1YXRpb25FZmZlY3Qge1xuICAgIGRlc2NyaXB0aW9uOiBBcnJheTxzdHJpbmc+XG5cbiAgICBhZGRlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+XG4gICAgcmVtb3ZlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+XG5cbiAgICBhZGRlZEh1bVRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT5cbiAgICByZW1vdmVkSHVtVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPlxuXG4gICAgY2hhbmdlZEZvbmRuZXNzOiBBcnJheTxbQ291cGxlLCBudW1iZXJdPlxuICAgIG5ld0Z1dHVyZVNpdHVhdGlvbnM6IEFycmF5PFtudW1iZXIsIFNpdHVhdGlvbl0+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICAgICAgICBhZGRlZFJlbFRhZ3M/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgcmVtb3ZlZFJlbFRhZ3M/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgYWRkZWRIdW1UYWdzPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgcmVtb3ZlZEh1bVRhZ3M/OiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LFxuICAgICAgICBjaGFuZ2VkRm9uZG5lc3M/OiBBcnJheTxbQ291cGxlLCBudW1iZXJdPixcbiAgICAgICAgbmV3RnV0dXJlU2l0dWF0aW9ucz86IEFycmF5PFtudW1iZXIsIFNpdHVhdGlvbl0+XG4gICAgKSB7XG4gICAgICAgIGxldCBhc3NpZ25lZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gPz8gbmV3IEFycmF5PHN0cmluZz4oKVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gQXJyYXkuaXNBcnJheShhc3NpZ25lZERlc2NyaXB0aW9uKSBcbiAgICAgICAgICAgID8gYXNzaWduZWREZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIDogW2Fzc2lnbmVkRGVzY3JpcHRpb25dXG4gICAgICAgIHRoaXMuYWRkZWRSZWxUYWdzID0gYWRkZWRSZWxUYWdzID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMucmVtb3ZlZFJlbFRhZ3MgPSByZW1vdmVkUmVsVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLmFkZGVkSHVtVGFncyA9IGFkZGVkSHVtVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzID0gcmVtb3ZlZEh1bVRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5jaGFuZ2VkRm9uZG5lc3MgPSBjaGFuZ2VkRm9uZG5lc3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5uZXdGdXR1cmVTaXR1YXRpb25zID0gbmV3RnV0dXJlU2l0dWF0aW9ucyA/PyBuZXcgQXJyYXkoKVxuICAgIH1cblxuICAgIGFkZFJlbFRhZ3ModGFnczogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncy5wdXNoKC4uLnRhZ3MpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVtb3ZlUmVsVGFncyh0YWdzOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPik6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIHRoaXMucmVtb3ZlZFJlbFRhZ3MucHVzaCguLi50YWdzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZEh1bVRhZ3ModGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPik6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIHRoaXMuYWRkZWRIdW1UYWdzLnB1c2goLi4udGFncylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICByZW1vdmVIdW1UYWdzKHRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzLnB1c2goLi4udGFncylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nfEFycmF5PHN0cmluZz4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbikgXG4gICAgICAgICAgICA/IGRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgOiBbZGVzY3JpcHRpb25dXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhbmRvbURlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoKV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUZvbmRuZXNzKGNoYW5nZXM6IEFycmF5PFtDb3VwbGUsIG51bWJlcl0+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRm9uZG5lc3MucHVzaCguLi5jaGFuZ2VzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZE5ld0Z1dHVyZVNpdHVhdGlvbnMobmV3RnV0dXJlU2l0dWF0aW9uczogQXJyYXk8W251bWJlciwgU2l0dWF0aW9uXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMucHVzaCguLi5uZXdGdXR1cmVTaXR1YXRpb25zKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFwcGVuZFRvVGhpcyhlZmZlY3Q6IFNpdHVhdGlvbkVmZmVjdCkge1xuICAgICAgICB0aGlzLmFkZGVkSHVtVGFncyA9IHRoaXMuYWRkZWRIdW1UYWdzLmNvbmNhdChlZmZlY3QuYWRkZWRIdW1UYWdzKVxuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzID0gdGhpcy5yZW1vdmVkSHVtVGFncy5jb25jYXQoZWZmZWN0LnJlbW92ZWRIdW1UYWdzKVxuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncyA9IHRoaXMuYWRkZWRSZWxUYWdzLmNvbmNhdChlZmZlY3QuYWRkZWRSZWxUYWdzKVxuICAgICAgICB0aGlzLnJlbW92ZWRSZWxUYWdzID0gdGhpcy5yZW1vdmVkUmVsVGFncy5jb25jYXQoZWZmZWN0LnJlbW92ZWRSZWxUYWdzKVxuICAgICAgICB0aGlzLmNoYW5nZWRGb25kbmVzcyA9IHRoaXMuY2hhbmdlZEZvbmRuZXNzLmNvbmNhdChlZmZlY3QuY2hhbmdlZEZvbmRuZXNzKVxuICAgICAgICB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMgPSB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMuY29uY2F0KGVmZmVjdC5uZXdGdXR1cmVTaXR1YXRpb25zKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSAnLi9odW1hbidcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gJy4uL2NvbnRlbnQvbG9jYXRpb25zJ1xuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcblxuZXhwb3J0IGNsYXNzIFRyaXBTdW1tYXJ5IHtcbiAgICBwdWJsaWMgZ29QZW9wbGU6IEFycmF5PEh1bWFuPiA9IG5ldyBBcnJheTxIdW1hbj4oKVxuICAgIHB1YmxpYyBnb0xvY2F0aW9uPzogTG9jYXRpb25OYW1lXG5cbiAgICBjb25zdHJ1Y3RvcihzcGVjaWFsR3Vlc3Q6IEh1bWFuKSB7XG4gICAgICAgIHRoaXMuZ29QZW9wbGUucHVzaChzcGVjaWFsR3Vlc3QpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUdvUGVvcGxlKGh1bWFuOiBIdW1hbik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcHJldlNpemUgPSB0aGlzLmdvUGVvcGxlLmxlbmd0aFxuICAgICAgICB0aGlzLmdvUGVvcGxlID0gdGhpcy5nb1Blb3BsZS5maWx0ZXIoeCA9PiB4Lm5hbWUgIT09IGh1bWFuLm5hbWUpXG4gICAgICAgIHJldHVybiBwcmV2U2l6ZSAhPSB0aGlzLmdvUGVvcGxlLmxlbmd0aFxuICAgIH1cblxuICAgIHB1YmxpYyBmbGlwR29QZW9wbGUoaHVtYW46IEh1bWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUdvUGVvcGxlKGh1bWFuKSkge1xuICAgICAgICAgICAgLy8gZGVsZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgZGVsZXRlZCwgc28gYWRkXG4gICAgICAgICAgICB0aGlzLmdvUGVvcGxlLnB1c2goaHVtYW4pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmUobG9jYXRpb246IExvY2F0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmdvTG9jYXRpb24gPSBsb2NhdGlvblxuICAgIH1cblxuICAgIHB1YmxpYyBhbGxQcmVzZW50KC4uLnBlb3BsZTogSHVtYW5OYW1lW10pIHtcbiAgICAgICAgcmV0dXJuIHBlb3BsZS5ldmVyeShwID0+IHRoaXMuZ29QZW9wbGUubWFwKHEgPT4gcS5uYW1lKS5pbmNsdWRlcyhwKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc29tZVByZXNlbnQoLi4ucGVvcGxlOiBIdW1hbk5hbWVbXSkge1xuICAgICAgICByZXR1cm4gcGVvcGxlLnNvbWUocCA9PiB0aGlzLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpXG4gICAgfVxuXG4gICAgcHVibGljIGFsbEFic2VudCguLi5wZW9wbGU6IEh1bWFuTmFtZVtdKSB7XG4gICAgICAgIHJldHVybiBwZW9wbGUuZXZlcnkocCA9PiAhdGhpcy5nb1Blb3BsZS5tYXAocSA9PiBxLm5hbWUpLmluY2x1ZGVzKHApKVxuICAgIH1cblxuICAgIHB1YmxpYyBzb21lQWJzZW50KC4uLnBlb3BsZTogSHVtYW5OYW1lW10pIHtcbiAgICAgICAgcmV0dXJuIHBlb3BsZS5zb21lKHAgPT4gIXRoaXMuZ29QZW9wbGUubWFwKHEgPT4gcS5uYW1lKS5pbmNsdWRlcyhwKSlcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcHJpdmF0ZSBmYWRlcj86IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIG1vY2tUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib2FyZF9iYWNrZ3JvdW5kJywgJ2JvYXJkX2JhY2tncm91bmQucG5nJylcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdyZWxfdGFncycsICdyZWxfdGFncy5wbmcnLCB7IGZyYW1lV2lkdGg6IDMwLCBmcmFtZUhlaWdodDogMzAgfSlcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0cmFpdF9iaWcnLCAncG9ydHJhaXRfYmlnLnBuZycsIHsgZnJhbWVXaWR0aDogMjAwLCBmcmFtZUhlaWdodDogMjAwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydHJhaXRfc21hbGwnLCAncG9ydHJhaXRfc21hbGwucG5nJywgeyBmcmFtZVdpZHRoOiA2MCwgZnJhbWVIZWlnaHQ6IDYwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnbG9jYXRpb25fdGh1bWInLCAnbG9jYXRpb25fdGh1bWIucG5nJywgeyBmcmFtZVdpZHRoOiA5MCwgZnJhbWVIZWlnaHQ6IDkwIH0pXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWFpbl9tdXNpYycsICdtb250dW5vLm1wMycpXG5cbiAgICAgICAgdGhpcy5mYWRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDEpXG4gICAgICAgICAgICAuc2V0QWxwaGEoMSlcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7dXNlSGFuZEN1cnNvcjogdHJ1ZX0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ21hbmFnZW1lbnQnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tb2NrVGV4dCA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMDAsICcnLCB7IGZpbGw6ICcjZmZmJywgZm9udEZhbWlseTogJ1JvYm90bycgfSlcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLmFkZC50ZXh0KDEwMCwgMTAwLCAnT3Zlcmx5IEZyYWdpbGUgUmVsYXRpb25zaGlwcycsIHsgZmlsbDogJyNmZmYnLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICczMHB4JyB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDIpXG4gICAgICAgIGxldCBoZWxwID0gdGhpcy5hZGQudGV4dCgxMDAsIDIwMCwgJ1BpY2sgcGVvcGxlIHRvIGpvaW4geW91IG9uIG5pZ2h0cyBvdXQuXFxuVHJ5IHRvIGtlZXAgeW91ciBmcmllbmRzaGlwIG5ldHdvcmsgYWxpdmUuJywgeyBmaWxsOiAnI2ZmZicsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzE4cHgnIH0pXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMilcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1vZGFsRGlhbG9nIHtcbiAgICBwcml2YXRlIHByZXZlbnRDbGljazogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgYmxhY2tCb2FyZDogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgbWVzc2FnZTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBwcml2YXRlIGR5aW5nOiBib29sZWFuID0gZmFsc2VcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZSwgdGV4dDogc3RyaW5nLCBwcml2YXRlIGNhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9KSB7XG4gICAgICAgIHRoaXMucHJldmVudENsaWNrID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwMDAwMDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAuc2V0QWxwaGEoMClcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ibGFja0JvYXJkID0gc2NlbmUuYWRkLnJlY3RhbmdsZSg0MDAsIDI1MCwgNjAwLCAzMDAsIDB4MDAwMDAwKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHNjZW5lLmFkZC50ZXh0KDQwMCwgMjUwLCB0ZXh0LCB7IGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG4gICAgICAgICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoNTAwKVxuICAgICAgICAgICAgLy8gLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuZGVzdHJveSgpKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG5cbiAgICAgICAgc2NlbmUuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLnByZXZlbnRDbGlja10sXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAwLCB0bzogMC40IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pXG4gICAgICAgIHNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5ibGFja0JvYXJkLCB0aGlzLm1lc3NhZ2VdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMCwgdG86IDEgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmR5aW5nKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIHRoaXMuZHlpbmcgPSB0cnVlXG4gICAgICAgIHRoaXMuY2FsbGJhY2soKVxuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLm1lc3NhZ2UsIHRoaXMuYmxhY2tCb2FyZF0sXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5ibGFja0JvYXJkLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIHRoaXMucHJldmVudENsaWNrLmRlc3Ryb3koKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5wcmV2ZW50Q2xpY2tdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMC40LCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgfSlcbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tIFwiLi4vbW9kZWwvaHVtYW5cIjtcbmltcG9ydCB7IEh1bWFuTmFtZUluZGV4IH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCI7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgcHVibGljIHN0YXRpYyBkcmF3UG9ydHJhaXRzKGh1bWFuczogQXJyYXk8SHVtYW4+LCBzY2VuZTogUGhhc2VyLlNjZW5lKTogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwIHtcbiAgICAgICAgbGV0IGdyb3VwID0gc2NlbmUuYWRkLmdyb3VwKClcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgIGZvciAobGV0IGhpIGluIGh1bWFucykge1xuICAgICAgICAgICAgbGV0IGh1bWFuID0gaHVtYW5zW2hpXVxuICAgICAgICAgICAgbGV0IGluZGV4ID0gSHVtYW5OYW1lSW5kZXguaW5kZXhPZihodW1hbi5uYW1lKVxuICAgICAgICAgICAgbGV0IGNpcmNsZSA9IHNjZW5lLmFkZC5lbGxpcHNlKDUwKzQwMCAtIGh1bWFucy5sZW5ndGggKiAxMDAvMiArIE51bWJlcihoaSkgKiAxMDAsIDUwLCA4MCwgODAsIDB4MmUyZTJlKVxuICAgICAgICAgICAgICAgIC5zZXREZXB0aCgzMDAwKVxuICAgICAgICAgICAgbGV0IGltYWdlID0gc2NlbmUuYWRkLmltYWdlKDUwKzQwMCAtIGh1bWFucy5sZW5ndGggKiAxMDAvMiArIE51bWJlcihoaSkgKiAxMDAsIDUwLCAncG9ydHJhaXRfc21hbGwnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuc2V0RGVwdGgoMzAwMSlcbiAgICAgICAgICAgIGdyb3VwLmFkZChpbWFnZSlcbiAgICAgICAgICAgIGdyb3VwLmFkZChjaXJjbGUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==