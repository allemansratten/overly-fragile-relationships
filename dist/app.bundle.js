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
        situations_1.SituationUtils.breakUp([humans_1.HumanName.Dan, humans_1.HumanName.Beatrice]).setDescription(""),
        situations_1.SituationUtils.breakUp([humans_1.HumanName.Dan, humans_1.HumanName.Flavie]).setDescription(""),
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
            .changeFondness([[[humans_1.HumanName.Flavie, humans_1.HumanName.Alex], +4]])
            .addHumTags([[humans_1.HumanName.Flavie, entityTags_1.HumanTag.fragile_flavie_2]])
            .setDescription('Alex saw that her comment really hurt Flavie\'s feelings, and apologised. She even brought her a vegan Flapjack.')],
});
var flavieFomo1 = new situations_1.Complex({
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
    processEffects: function (trip, currentState, baseEffects) {
        return trip.goPeople.length >= 4 ? baseEffects : [];
    }
});
var flavieFomo2 = new situations_1.Complex({
    humBan: [humans_1.HumanName.Flavie],
    humTagsReq: [[humans_1.HumanName.Flavie, entityTags_1.HumanTag.flavie_angry]],
    effects: [new situation_1.SituationEffect().changeFondness([[[humans_1.HumanName.Flavie, humans_1.HumanName.You], -10]])
            .setDescription('Flavie came uninvited, chewed you out, and left. Forever.')],
    processEffects: function (trip, currentState, baseEffects) {
        return trip.goPeople.length >= 4 ? baseEffects : [];
    }
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
            .setDescription('Alex helped Beatrice get over her breakup. She feels better now.')
            .changeFondness([
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.You], 1],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], 1],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Cecil], 1],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Dan], 1],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], 1],
            [[humans_1.HumanName.Beatrice, humans_1.HumanName.Flavie], 1],
        ])
    ],
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
    new peopleGraph_1.Relationship([humans_1.HumanName.Beatrice, humans_1.HumanName.Flavie], new Set([entityTags_1.RelationshipTag.dislike])),
    new peopleGraph_1.Relationship([humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], new Set([entityTags_1.RelationshipTag.dislike])),
]), [
    [humans_1.HumanName.Cecil, entityTags_1.HumanTag.introvert],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.extrovert],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.angry_drunk],
    [humans_1.HumanName.Dan, entityTags_1.HumanTag.promiscuous],
], [
    [[humans_1.HumanName.Alex, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Cecil, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Dan, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Eric, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Flavie, humans_1.HumanName.You], 6],
    [[humans_1.HumanName.Alex, humans_1.HumanName.Beatrice], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Alex], 7],
    [[humans_1.HumanName.Dan, humans_1.HumanName.Beatrice], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Dan], 7],
    [[humans_1.HumanName.Dan, humans_1.HumanName.Flavie], 7],
    [[humans_1.HumanName.Flavie, humans_1.HumanName.Dan], 7],
    [[humans_1.HumanName.Cecil, humans_1.HumanName.Flavie], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Flavie], 4],
    [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], 4],
], [
    new situations_1.Sympathies(),
    new situations_1.GoodCompany(),
    new situations_1.ExtrovertsIntroverts(),
    new situations_1.NobodyLikesAngryDrunk(),
    new situations_1.AlexAndCecil(),
    new situations_1.MutualCrush(),
    new situations_1.LeftOutWithoutCrush(),
    new situations_1.EternalCouple(humans_1.HumanName.Dan, humans_1.HumanName.Flavie),
    new situations_1.EricVSAAndB(),
    new situations_1.AlexAndBeatriceGetDrunk(),
    new situations_1.CecilCrushConundrum(),
    bowlingbrawl,
    flavieFomo2,
    flavieFomo1,
    danTwoGirlfriendsBusted,
    baseFondnessChanges,
    fragileFlavie2,
    fragileFlavie1,
    alexSupportive,
    new situations_1.Depression(),
    new situations_1.BeatriceBreakups(),
    new situations_1.UpdateFondnessBasedTags(),
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
var human_1 = __webpack_require__(/*! ../model/human */ "./src/model/human.ts");
var SituationUtils = /** @class */ (function () {
    function SituationUtils() {
    }
    SituationUtils.startToDate = function (couple) {
        var a = couple[0], b = couple[1];
        return this.changeRelationship(couple, [entityTags_1.RelationshipTag.lover], [entityTags_1.RelationshipTag.crush, entityTags_1.RelationshipTag.ex], +10).setDescription(["After having fun at the night out, " + a + " and " + b + " started dating.",
            a + " and " + b + " seemed to have a good time together at the party and ended up getting together.",
            "Everybody saw it coming - " + a + " and " + b + " got together.",
            "After checking each other out for some time, " + a + " and " + b + " finally became a couple.",
            "After " + a + " and " + b + " finally confessed their feelings, they started dating.",
            "What if " + a + " and " + b + " started dating, that'd be so weird? Haha, just kidding... unless? Oh, it just happened."]);
    };
    SituationUtils.breakUp = function (couple) {
        var a = couple[0], b = couple[1];
        return this.changeRelationship(couple, [entityTags_1.RelationshipTag.ex], [entityTags_1.RelationshipTag.lover], -6).setDescription([a + " and " + b + " broke up!",
            a + " and " + b + "'s relationship seemed rough lately, and now it finally came to an end.",
            "After some stress " + a + " and " + b + " separated and are no longer together.",
            "As all things do, even " + a + " and " + b + "'s dating era came to an end..."]);
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
                var desc = "";
                if (trip.goPeople.length > 2) {
                    desc = person.name + " got drunk and angry; the others weren't happy about that.";
                }
                else {
                    desc = person.name + " got drunk and angry, but you're used to it at this point.";
                }
                var effect_1 = new situation_1.SituationEffect()
                    .setDescription(desc);
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
                "Have you heard? " + description + ".",
                "Have you heard? " + description + " again.",
                "You won't believe this: " + description + " again.",
                "Oh, by the way: " + description + ", yet again.",
                "Oh, by the way: " + description + ", to nobody's surprise.",
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
var GoodCompany = /** @class */ (function () {
    function GoodCompany() {
    }
    GoodCompany.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var fondnessChange = new Array();
        var goodTimePeople = new Array();
        var badTimePeople = new Array();
        for (var _i = 0, _a = trip.getNames(); _i < _a.length; _i++) {
            var a = _a[_i];
            if (a == humans_1.HumanName.You)
                continue;
            var totalChange = 0;
            var goodNames = [];
            var badNames = [];
            for (var _b = 0, _c = trip.getNames(); _b < _c.length; _b++) {
                var b = _c[_b];
                if (a == b)
                    continue;
                if (b == humans_1.HumanName.You)
                    continue;
                var curChange = 0;
                // if (currentState.getFondness([a, b]) > GoodCompany.GOOD_FONDNESS) {
                //     curChange++
                // }
                if (currentState.getFondness([a, b]) <= GoodCompany.BAD_FONDNESS) {
                    curChange--;
                }
                // if (currentState.getRelationshipsBetween(a, b).includes(RelationshipTag.like)) {
                //     curChange++
                // }
                if (currentState.getRelationshipsBetween(a, b).includes(entityTags_1.RelationshipTag.dislike)) {
                    curChange--;
                }
                // Maybe clamp curChange between -1 and 1?
                totalChange += curChange * 2;
                if (curChange > 0) {
                    goodNames.push(b);
                }
                if (curChange < 0) {
                    badNames.push(b);
                }
            }
            if (totalChange === 0)
                continue;
            totalChange = Math.max(totalChange, -4);
            fondnessChange.push([[a, humans_1.HumanName.You], totalChange]);
            // TODO: specify the person they were happy/unhappy about, if it's just one person
            if (totalChange < 0) {
                badTimePeople.push(a);
            }
            else {
                goodTimePeople.push(a);
            }
        }
        var effects = Array();
        if (fondnessChange.length > 0) {
            effects.push(new situation_1.SituationEffect().changeFondness(fondnessChange));
        }
        if (badTimePeople.length > 0) {
            var peopleString = human_1.HumanUtils.peopleToString(badTimePeople);
            effects.push(new situation_1.SituationEffect()
                .setDescription(peopleString + " " + (goodTimePeople.length <= 1 ? "wasn't" : "weren't") + " happy about who you invited."));
        }
        // TODO: good are currently unused (on purpose, so that the game is harder)
        if (goodTimePeople.length > 0) {
            var peopleString = human_1.HumanUtils.peopleToString(goodTimePeople);
            effects.push(new situation_1.SituationEffect()
                .setDescription(peopleString + " enjoyed their company."));
        }
        return effects;
    };
    GoodCompany.BAD_FONDNESS = 3;
    GoodCompany.GOOD_FONDNESS = 7;
    return GoodCompany;
}());
exports.GoodCompany = GoodCompany;
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
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], -2],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], -2],
                        [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], -2],
                        [[humans_1.HumanName.Alex, humans_1.HumanName.Eric], -2],
                    ])
                        .addRelTags([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.dislike],
                    ]),
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
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Cecil], entityTags_1.RelationshipTag.crushable],
                        [[humans_1.HumanName.Cecil, humans_1.HumanName.Eric], entityTags_1.RelationshipTag.crushable],
                    ])
                        .changeFondness([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Cecil], 4],
                        [[humans_1.HumanName.Cecil, humans_1.HumanName.Eric], 4],
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
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], 2],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], 2],
                        [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], 2],
                        [[humans_1.HumanName.Alex, humans_1.HumanName.Eric], 2],
                    ])
                        .removeRelTags([
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], entityTags_1.RelationshipTag.dislike],
                        [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], entityTags_1.RelationshipTag.dislike],
                    ]),
                ];
            }
        }
        return [];
    };
    return EricVSAAndB;
}());
exports.EricVSAAndB = EricVSAAndB;
var CecilCrushConundrum = /** @class */ (function () {
    function CecilCrushConundrum() {
        this.flavieAndDanBreakupCounter = 0;
        this.togetherWas = false;
        this.triggered = false;
    }
    CecilCrushConundrum.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
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
                ]),
            ];
        }
        this.togetherWas = togetherNow;
        return [];
    };
    return CecilCrushConundrum;
}());
exports.CecilCrushConundrum = CecilCrushConundrum;
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
                    // TODO: this is bad if multiple people have the tag, we assume it's just Beatrice
                    effect.setDescription(a + " is depressed... if only a friend of hers could comfort her...");
                }
            }
        }
        return [effect];
    };
    return Depression;
}());
exports.Depression = Depression;
var LeftOutWithoutCrush = /** @class */ (function () {
    function LeftOutWithoutCrush() {
    }
    LeftOutWithoutCrush.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        for (var _i = 0, _a = currentState.getHumanNames(); _i < _a.length; _i++) {
            var h = _a[_i];
            if (!trip.allPresent(h) &&
                currentState.getOutRelationshipsOfType(h, entityTags_1.RelationshipTag.crush).length > 0 &&
                currentState.getOutRelationshipsOfType(h, entityTags_1.RelationshipTag.crush).every(function (rel) { return trip.allPresent(rel.people[1]); })) {
                2;
                return [new situation_1.SituationEffect().changeFondness([[[h, humans_1.HumanName.You], -1]])];
            }
        }
        return [];
    };
    return LeftOutWithoutCrush;
}());
exports.LeftOutWithoutCrush = LeftOutWithoutCrush;
var ExtrovertsIntroverts = /** @class */ (function () {
    function ExtrovertsIntroverts() {
    }
    ExtrovertsIntroverts.prototype.GetApplicableEffects = function (trip, currentState, tripCount) {
        var results = new Array();
        if (trip.goPeople.length > 4) {
            results.push(this.effectDoesntLike(entityTags_1.HumanTag.introvert, trip, currentState, "so many"));
        }
        if (trip.goPeople.length <= 4) {
            results.push(this.effectDoesntLike(entityTags_1.HumanTag.extrovert, trip, currentState, "this few"));
        }
        return results;
    };
    ExtrovertsIntroverts.prototype.effectDoesntLike = function (tag, trip, currentState, msg) {
        var relevantPeople = trip.goPeople.filter(function (per) { return currentState.getHumTags(per.name).has(tag); });
        if (tag == entityTags_1.HumanTag.extrovert) {
            relevantPeople = relevantPeople.filter(function (per) {
                return !trip.goPeople.some(function (pPer) {
                    return (pPer.name != per.name) &&
                        (currentState.haveMutualRelationshipTag(per.name, pPer.name, entityTags_1.RelationshipTag.crush) ||
                            currentState.haveMutualRelationshipTag(per.name, pPer.name, entityTags_1.RelationshipTag.lover));
                });
            });
        }
        if (relevantPeople.length <= 0) {
            return new situation_1.SituationEffect();
        }
        var fondnessChanges = relevantPeople.map(function (rel) { return [[rel.name, humans_1.HumanName.You], -3]; });
        var sitEffect = new situation_1.SituationEffect()
            .changeFondness(fondnessChanges)
            .setDescription(human_1.HumanUtils.peopleToString(relevantPeople.map(function (p) { return p.name; })) + " "
            + ((relevantPeople.length > 1 ? "weren't" : "wasn't") + " too happy to hang out with ")
            + ((tag == entityTags_1.HumanTag.introvert ? "this many" : "this few") + " people."));
        return sitEffect;
    };
    return ExtrovertsIntroverts;
}());
exports.ExtrovertsIntroverts = ExtrovertsIntroverts;


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
        _this.levelCount = 0;
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
        var _a, _b, _c;
        this.add.image(0, 0, 'board_background')
            .setOrigin(0, 0);
        this.tripFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(0)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', function () { return _this.goBack(); });
        this.infoText = this.add.text(400, 140, '', { fill: '#fff', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001)
            .setAlpha(0)
            .setAlign('center')
            .setWordWrapWidth(560)
            .setOrigin(0.5, 0);
        this.levelsText = this.add.text(270, 20, 'week: 1', { fill: '#000', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001);
        this.locationStage = new location_stage_1.LocationStage(this, this.level);
        this.humanStage = new human_stage_1.HumanStage(this, this.level);
        this.phone = new phone_stage_1.PhoneStage(this);
        this.add.tween({
            targets: this.transitionFader,
            alpha: { from: 1, to: 0 },
            duration: 500,
        });
        (_a = this.phone) === null || _a === void 0 ? void 0 : _a.display(this.level.humans[0], 0);
        (_b = this.humanStage) === null || _b === void 0 ? void 0 : _b.redrawLines(this.level);
        (_c = this.humanStage) === null || _c === void 0 ? void 0 : _c.display(this.level.humans[0], 0);
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
        var _a, _b, _c, _d;
        this.tripSummary = new tripSummary_1.TripSummary(this.level.humans[0]);
        (_a = this.phone) === null || _a === void 0 ? void 0 : _a.display(this.level.humans[0], 0);
        (_b = this.humanStage) === null || _b === void 0 ? void 0 : _b.redrawLines(this.level);
        (_c = this.humanStage) === null || _c === void 0 ? void 0 : _c.display(this.level.humans[0], 0);
        this.levelCount += 1;
        (_d = this.levelsText) === null || _d === void 0 ? void 0 : _d.setText("week: " + this.levelCount);
    };
    BoardScene.prototype.fail = function (message) {
        // +1 because turns are 0-based, weeks aren't
        this.messageQueue = [message + ("\nYou kept the friendship network alive for " + (1 + this.levelCount) + " weeks"), function () { window.location.reload(); }];
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
        this.WARNING_ALPHA_OK = 0.9;
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
            var warning = scene.add.text(0, 0, '!', { color: '#ff0000', fontSize: '33px' })
                .setOrigin(0.5, 0.5)
                .setAlpha(this_1.WARNING_ALPHA_OK);
            scene.add.group([image, text, circle, warning]).setXY(position.x, position.y);
            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100 + 10);
            circle.setPosition(position.x, position.y + 50 + 10);
            image.setPosition(position.x, position.y + 45 + 10);
            warning.setPosition(position.x + 19, position.y + 30);
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
        // aint got time to do this properly
        // level is 0 to 10
        if (level <= 1) {
            return 0xde0000;
        }
        else if (level <= 2) {
            return 0xcf3636;
        }
        else if (level <= 3) {
            return 0xd46c6c;
        }
        else if (level <= 4) {
            return 0xb08787;
        }
        else if (level <= 5) {
            return 0xa3a3a3;
        }
        else if (level <= 6) {
            return 0x93a390;
        }
        else if (level <= 7) {
            return 0x73ba7a;
        }
        else if (level <= 8) {
            return 0x62bd6b;
        }
        else if (level <= 9) {
            return 0x3bb847;
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
                if (fondness != peopleGraph_1.DEFAULT_FONDNESS || tags.length != 0 || youChange) {
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
var HumanUtils = /** @class */ (function () {
    function HumanUtils() {
    }
    HumanUtils.peopleToString = function (people) {
        if (people.length == 1) {
            return people[0];
        }
        else if (people.length == 2) {
            return people.join(" and ");
        }
        else {
            var copy = people.slice();
            copy[copy.length - 1] = "and " + copy[copy.length - 1];
            return copy.join(", ");
        }
    };
    return HumanUtils;
}());
exports.HumanUtils = HumanUtils;


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
            failMsgs.push("\nGame over.");
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
        var statusMessage = "You went " + tripSummary.goLocation + ".\n" + effectMsg;
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
    TripSummary.prototype.getNames = function () {
        return this.goPeople.map(function (p) { return p.name; });
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
        var title = this.add.text(100, 100, 'Overly Fragile Relationships', {
            fill: '#fff',
            fontFamily: 'Roboto',
            fontSize: '30px',
        })
            .setDepth(1002);
        var help = this.add.text(100, 200, 'Pick one or more friends to join you on nights out.\n'
            + 'Try to keep your friendship network alive.\n'
            + 'You lose if one of your friends begins to hate somebody.\n'
            + 'People get upset if you don\'t go out with them for a longer time\n'
            + 'or when they have to spend time with someone they don\'t like\n'
            + 'or when they have a generally bad time.\n'
            + '\n'
            + 'It\'s complex.', { fill: '#fff', fontFamily: 'Roboto', fontSize: '18px' })
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
            var text = scene.add.text(50 + 400 - humans.length * 100 / 2 + Number(hi) * 100, 95, "" + human.name, {
                fill: '#e0e0e0',
                fontFamily: 'Roboto',
                fontSize: '18px',
            })
                .setDepth(3001)
                .setOrigin(0.5, 0);
            group.add(image);
            group.add(circle);
            group.add(text);
        }
        return group;
    };
    return Utils;
}());
exports.Utils = Utils;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZW50aXR5VGFncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9odW1hbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvbGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2xvY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9zaXR1YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2h1bWFuX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2xvY2F0aW9uX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L3Bob25lX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9mcmllbmRzaGlwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaHVtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9wZW9wbGVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2l0dWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC90cmlwU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEtBQUssQ0FBQztpQkFDMUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNuQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFHLEtBQUssQ0FBQyxJQUFNLEVBQUU7Z0JBQ2xHLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsTUFBTTthQUNuQixDQUFDO2lCQUNHLFFBQVEsQ0FBQyxJQUFJLENBQUM7aUJBQ2QsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDakIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFFRCxPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDO0FBekJZLHNCQUFLIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBlbnVtIFJlbGF0aW9uc2hpcFRhZyB7XG4gICAgY3J1c2gsXG4gICAgbG92ZXIsXG4gICAgZXgsXG4gICAgcG9saXRpY2FsX2RpcyxcbiAgICBsaWtlLCBkaXNsaWtlLCAvLyBzeW1wYXRoaWVzXG4gICAgY3J1c2hhYmxlLFxuICAgIGJvd2xpbmdfYnJhd2wsXG4gICAgZGlzYWJsZV9tdXR1YWxfY3J1c2hfZGF0aW5nLCAvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IHdheSBvZiBnZXR0aW5nIHRvZ2V0aGVyXG4gICAgYXdrYXdhcmRuZXNzLCAvLyBhZnRlciBBIGFuZCBCIHNsZXB0IHRvZ2V0aGVyXG59XG5cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXBUYWdNYXA6IE1hcDxSZWxhdGlvbnNoaXBUYWcsIHN0cmluZz4gPSBuZXcgTWFwKFtcbiAgICBbUmVsYXRpb25zaGlwVGFnLmNydXNoLCAnY3J1c2gnXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmxvdmVyLCAnbG92ZXInXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmV4LCAnZXgnXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLnBvbGl0aWNhbF9kaXMsICdwb2xpdGljYWwgZGlzYWdyZWVtZW50J10sXG5dKVxuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnTWFwU3Rvcnk6IE1hcDxSZWxhdGlvbnNoaXBUYWcsIFtzdHJpbmcsIHN0cmluZ10+ID0gbmV3IE1hcChbXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaCwgWydTVUJKIG5vdyBoYXMgYSBjcnVzaCBvbiBPQkonLCAnU1VCSiBsb3N0IGEgY3J1c2ggb24gT0JKJ11dLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXIsIFtgU1VCSiBhbmQgT0JKIHN0YXJ0ZWQgZGF0aW5nIWAsICdTVUJKIGFuZCBPQkogYXJlIG5vIGxvbmdlciBsb3ZlcnMnXV0sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5leCwgW2BEaWQgeW91IGhlYXI/IFNVQkogYW5kIE9CSiBicm9rZSB1cCFgLCAnU1VCSiBpcyBub3QgYW4gZXggb2YgT0JKIGFueW1vcmUnXV0sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5wb2xpdGljYWxfZGlzLCBbJ1NVQkogbm93IGhhcyBhIHBvbGl0aWNhbCBkaXNhZ3JlZW1lbnQgd2l0aCBPQkonLCAnU1VCSiBubyBsb25nZXIgaGFzIGEgcG9saXRpY2FsIGRpc2FncmVlbWVudCB3aXRoIE9CSiddXSxcbl0pXG5cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsOiBTZXQ8UmVsYXRpb25zaGlwVGFnPiA9IG5ldyBTZXQoW1xuICAgIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcixcbiAgICBSZWxhdGlvbnNoaXBUYWcucG9saXRpY2FsX2RpcyxcbiAgICBSZWxhdGlvbnNoaXBUYWcuZXgsXG5dKVxuXG4vLyBJZiB0aGUgZmlyc3QgaXRlbSBpcyBpbiBORVcsIHRoZSBzZWNvbmQgaXMgcmVtb3ZlZCBmcm9tIFJFTVxuZXhwb3J0IGNvbnN0IHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ05ld1JlbTogQXJyYXk8W1JlbGF0aW9uc2hpcFRhZywgUmVsYXRpb25zaGlwVGFnXT4gPSBbXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5sb3ZlciwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmV4LCBSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuXG5dXG5cbi8vIElmIHRoZSBmaXJzdCBpdGVtIGlzIGluIFJFTSwgdGhlIHNlY29uZCBpcyByZW1vdmVkIGZyb20gTkVXXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nUmVtTmV3OiBBcnJheTxbUmVsYXRpb25zaGlwVGFnLCBSZWxhdGlvbnNoaXBUYWddPiA9IFtcbl1cblxuZXhwb3J0IGVudW0gSHVtYW5UYWcge1xuICAgIGludHJvdmVydCwgZXh0cm92ZXJ0LCBhbmdyeV9kcnVuaywgc2FkX2RydW5rLFxuICAgIGdvb2RfYm93bGVyLCBiYWRfYm93bGVyLCBwcm9taXNjdW91cywgamVhbG91cywgZGlzYWdyZWVhYmxlLFxuICAgIGFncmVlYWJsZSwgc3VwcG9ydGl2ZSwgYXR0ZW50aW9uLFxuICAgIGZsYXZpZV9hbmdyeSxcbiAgICBkYW5fYnVzdGVkLFxuICAgIGdvbmUsXG4gICAgZnJhZ2lsZV9mbGF2aWVfMSwgZnJhZ2lsZV9mbGF2aWVfMixcbiAgICBkZXByZXNzZWQsIC8vIEJlYXRyaWNlIGFmdGVyIGJyZWFraW5nIHVwXG59XG5cbmV4cG9ydCBjb25zdCBodW1hblRhZ01hcDogTWFwPEh1bWFuVGFnLCBzdHJpbmc+ID0gbmV3IE1hcChbXG4gICAgW0h1bWFuVGFnLmludHJvdmVydCwgJ2ludHJvdmVydCddLFxuICAgIFtIdW1hblRhZy5leHRyb3ZlcnQsICdleHRyb3ZlcnQnXSxcbiAgICBbSHVtYW5UYWcuYW5ncnlfZHJ1bmssICdhbmdyeSB3aGVuIGRydW5rJ10sXG4gICAgW0h1bWFuVGFnLnNhZF9kcnVuaywgJ3NhZCB3aGVuIGRydW5rJ10sXG4gICAgW0h1bWFuVGFnLmdvb2RfYm93bGVyLCAnZ29vZCBib3dsZXInXSxcbiAgICBbSHVtYW5UYWcuYmFkX2Jvd2xlciwgJ2JhZCBib3dsZXInXSxcbiAgICAvLyBbSHVtYW5UYWcucHJvbWlzY3VvdXMsICdwcm9taXNjdW91cyddLFxuICAgIFtIdW1hblRhZy5qZWFsb3VzLCAnamVhbG91cyddLFxuICAgIFtIdW1hblRhZy5kaXNhZ3JlZWFibGUsICdkaXNhZ3JlZWFibGUnXSxcbiAgICBbSHVtYW5UYWcuYWdyZWVhYmxlLCAnYWdyZWVhYmxlJ10sXG4gICAgW0h1bWFuVGFnLnN1cHBvcnRpdmUsICdzdXBwb3J0aXZlIGZyaWVuZCddLFxuICAgIFtIdW1hblRhZy5hdHRlbnRpb24sICdhdHRlbnRpb24gc2Vla2VyJ10sXG4gICAgW0h1bWFuVGFnLmRlcHJlc3NlZCwgJ2RlcHJlc3NlZCddLFxuXSlcblxuXG5leHBvcnQgY29uc3QgaHVtYW5UYWdEaXNwbGF5OiBTZXQ8SHVtYW5UYWc+ID0gbmV3IFNldChbXG4gICAgSHVtYW5UYWcuZGVwcmVzc2VkLFxuXSlcbiIsImV4cG9ydCBlbnVtIEh1bWFuTmFtZSB7XG4gICAgWW91ID0gJ1lvdScsXG4gICAgQWxleCA9ICdBbGV4JyxcbiAgICBCZWF0cmljZSA9ICdCZWF0cmljZScsXG4gICAgQ2VjaWwgPSAnQ2VjaWwnLFxuICAgIERhbiA9ICdEYW4nLFxuICAgIEVyaWMgPSAnRXJpYycsXG4gICAgRmxhdmllID0gJ0ZsYXZpZScsXG59XG5cbmV4cG9ydCBjb25zdCBIdW1hbk5hbWVJbmRleDogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAnWW91JyxcbiAgICAnQWxleCcsXG4gICAgJ0JlYXRyaWNlJyxcbiAgICAnQ2VjaWwnLFxuICAgICdEYW4nLFxuICAgICdFcmljJyxcbiAgICAnRmxhdmllJyxcbl1cblxuZXhwb3J0IGNvbnN0IEh1bWFuQmlvOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICcnLFxuICAgICdIZXIgaHVtb3IgbWF5IGNvbWUgb2ZmIGFzIGNydWRlLCBidXQgc2hlIHJlYWxseSBjYXJlcyBhYm91dCBoZXIgZnJpZW5kcy4nLFxuICAgICdKb2tpbmdseSBmbGlydHMgd2l0aCBhbGwgb2YgaGVyIGZyaWVuZHMgYW5kIGlzIGFmcmFpZCB0byBjb21taXQgdG8gYSByZWxhdGlvbnNoaXAuJyxcbiAgICAnQSBjaGlsbCwgaW50cm92ZXJ0ZWQgZ3V5LCB0aG91Z2ggeW91XFwndmUgc2VlbiBoaW0gYmxvdyB1cCBiZWZvcmUuIEhlXFwncyBxdWl0ZSBzcG9ydHkuJyxcbiAgICAnQW4gYXRobGV0aWMgZXh0cm92ZXJ0LCB3aG8gbGVhdmVzIGEgZ29vZCBmaXJzdCBpbXByZXNzaW9uLiBIaXMgY29uZmlkZW5jZSBzb21ldGltZXMgYm9yZGVycyBvbiBhcnJvZ2FuY2UuJyxcbiAgICAnUmFpc2VkIGluIGEgcmVsaWdpb3VzIGhvdXNlaG9sZCwgaGUgZ2V0cyBhbG9uZyB3ZWxsIHdpdGggcGVvcGxlLiBIZSB3YXMgbmV2ZXIgaW4gYSByZWxhdGlvbnNoaXAuJyxcbiAgICAnT25lIG9mIHRoZSBtb3N0IGNhcmluZyBwZW9wbGUgeW91IGtub3cuIFNoZSBleHBlY3RzIHRoZSBzYW1lIGZyb20gZXZlcnlib2R5IGVsc2UgYW5kIGlzIG9mdGVuIGxldCBkb3duLidcbl0iLCJpbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9tb2RlbC9sZXZlbFwiXG5pbXBvcnQgeyBDb3VwbGUsIFJlbGF0aW9uc2hpcCB9IGZyb20gXCIuLi9tb2RlbC9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBIdW1hbiB9IGZyb20gXCIuLi9tb2RlbC9odW1hblwiXG5pbXBvcnQgeyBIdW1hblRhZywgUmVsYXRpb25zaGlwVGFnIH0gZnJvbSBcIi4vZW50aXR5VGFnc1wiXG5pbXBvcnQge1xuICAgIEFsZXhBbmRCZWF0cmljZUdldERydW5rLFxuICAgIEFsZXhBbmRDZWNpbCxcbiAgICBCZWF0cmljZUJyZWFrdXBzLFxuICAgIENlY2lsQ3J1c2hDb251bmRydW0sXG4gICAgQ29tcGxleCxcbiAgICBEZXByZXNzaW9uLFxuICAgIEVyaWNWU0FBbmRCLFxuICAgIEV0ZXJuYWxDb3VwbGUsXG4gICAgRXh0cm92ZXJ0c0ludHJvdmVydHMsXG4gICAgR29vZENvbXBhbnksXG4gICAgTGVmdE91dFdpdGhvdXRDcnVzaCxcbiAgICBNdXR1YWxDcnVzaCxcbiAgICBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmssXG4gICAgU2l0dWF0aW9uVXRpbHMsXG4gICAgU3ltcGF0aGllcyxcbiAgICBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncyxcbn0gZnJvbSBcIi4vc2l0dWF0aW9uc1wiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi9odW1hbnNcIlxuaW1wb3J0IHsgTG9jYXRpb25OYW1lIH0gZnJvbSBcIi4vbG9jYXRpb25zXCJcbmltcG9ydCB7IFNpdHVhdGlvbkVmZmVjdCB9IGZyb20gXCIuLi9tb2RlbC9zaXR1YXRpb25cIlxuXG5leHBvcnQgbGV0IGxldmVsczogQXJyYXk8TGV2ZWw+ID0gW11cblxubGV0IGxvY2F0aW9uczogTG9jYXRpb25OYW1lW10gPSBbXG4gICAgTG9jYXRpb25OYW1lLkJvd2xpbmcsXG4gICAgTG9jYXRpb25OYW1lLkRyaW5rLFxuICAgIExvY2F0aW9uTmFtZS5IaWtpbmcsXG5dXG5cbi8vIFlvdSBpcyBhbHdheXMgb24gdGhlIHplcm90aCBwb3NpdGlvblxuXG5mdW5jdGlvbiBtdXR1YWxSZWxhdGlvbnNoaXAocGVvcGxlOiBDb3VwbGUsIHRhZ3M6IFJlbGF0aW9uc2hpcFRhZ1tdKTogW1JlbGF0aW9uc2hpcCwgUmVsYXRpb25zaGlwXSB7XG4gICAgY29uc3QgdGFnU2V0ID0gbmV3IFNldCh0YWdzKVxuICAgIGNvbnN0IFthLCBiXSA9IHBlb3BsZVxuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IFJlbGF0aW9uc2hpcChbYSwgYl0sIHRhZ1NldCksXG4gICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW2IsIGFdLCB0YWdTZXQpLFxuICAgIF1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbjxUPihhcnI6IEFycmF5PFQgfCBUW10+KTogQXJyYXk8VD4ge1xuICAgIGxldCByZXMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBhIG9mIGFycikge1xuICAgICAgICBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICByZXMucHVzaCguLi5hKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnB1c2goYSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbn1cblxuY29uc3QgZGFuVHdvR2lybGZyaWVuZHNCdXN0ZWQgPSBuZXcgQ29tcGxleCh7XG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRmxhdmllXSxcbiAgICByZWxUYWdzUmVxOiBbXG4gICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyXSwgLy8gc2hvdWxkIGJlIHN5bW1ldHJpYyBhbnl3YXlzXG4gICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0sIFJlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sXG4gICAgXSxcbiAgICBlZmZlY3RzOiBbXG4gICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0pLnNldERlc2NyaXB0aW9uKFwiXCIpLFxuICAgICAgICBTaXR1YXRpb25VdGlscy5icmVha1VwKFtIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRmxhdmllXSkuc2V0RGVzY3JpcHRpb24oXCJcIiksXG4gICAgICAgIG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5kYW5fYnVzdGVkXV0pXG4gICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLllvdV0sIC01XSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkRhbl0sIC03XSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0sIC0yXSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5EYW5dLCAtN10sXG4gICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRmxhdmllXSwgLTJdLFxuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgKzRdLFxuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRmxhdmllXSwgKzRdLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIlVoIG9oLi4uIERhbiB3YXMgZGF0aW5nIEJlYXRyaWNlIGFuZCBGbGF2aWUgYXQgdGhlIHNhbWUgdGltZSxcIiArXG4gICAgICAgICAgICAgICAgXCIgYW5kIG5vdyB0aGV5IGZvdW5kIG91dCEgTm8gbW9yZSBEYW4gSnVhbi5cIiksXG4gICAgXSxcbn0pXG5jb25zdCBmcmFnaWxlRmxhdmllMSA9IG5ldyBDb21wbGV4KHsgICAgLy9GbGF2aWUgdnMgQWxleCBldmVudCAxXG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5GbGF2aWVdLFxuICAgIGFsbG93ZWRMb2NhdGlvbnM6IFtMb2NhdGlvbk5hbWUuSGlraW5nXSxcbiAgICBodW1UYWdzQmFuOiBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuVGFnLmZyYWdpbGVfZmxhdmllXzFdXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIC0zXV0pLmFkZFJlbFRhZ3MoW1xuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdXSlcbiAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8xXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQWxleCBtYWRlIGZ1biBvZiBGbGF2aWVcXCdzIHZlZ2FuIHNuYWNrcywgYW5kIHNoZSBnb3QgcmVhbGx5IHVwc2V0LiBCdXQgQWxleCBtYWtlcyBmdW4gb2YgZXZlcnlib2R5LCByaWdodD8nKV0sXG59KVxuY29uc3QgZnJhZ2lsZUZsYXZpZTIgPSBuZXcgQ29tcGxleCh7ICAgIC8vRmxhdmllIHZzIEFsZXggZXZlbnQgMlxuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuRmxhdmllXSxcbiAgICBhbGxvd2VkTG9jYXRpb25zOiBbTG9jYXRpb25OYW1lLkhpa2luZ10sXG4gICAgaHVtVGFnc1JlcTogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8xXV0sXG4gICAgaHVtVGFnc0JhbjogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8yXV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5yZW1vdmVSZWxUYWdzKFtbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdXSlcbiAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5BbGV4XSwgKzRdXSlcbiAgICAgICAgLmFkZEh1bVRhZ3MoW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8yXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQWxleCBzYXcgdGhhdCBoZXIgY29tbWVudCByZWFsbHkgaHVydCBGbGF2aWVcXCdzIGZlZWxpbmdzLCBhbmQgYXBvbG9naXNlZC4gU2hlIGV2ZW4gYnJvdWdodCBoZXIgYSB2ZWdhbiBGbGFwamFjay4nKV0sXG59KVxuXG5jb25zdCBmbGF2aWVGb21vMSA9IG5ldyBDb21wbGV4KHsgICAgLy9GbGF2aWUgRk9NTyBldmVudCAxXG4gICAgaHVtQmFuOiBbSHVtYW5OYW1lLkZsYXZpZV0sXG4gICAgaHVtVGFnc0JhbjogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mbGF2aWVfYW5ncnldXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIC0xXSxcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkNlY2lsXSwgLTFdLFxuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5EYW5dLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkVyaWNdLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLllvdV0sIC0zXSxcbiAgICBdKS5hZGRIdW1UYWdzKFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZmxhdmllX2FuZ3J5XV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignRmxhdmllIGlzIGFuZ3J5IHRoYXQgeW91IGludml0ZWQgZXZlcnlib2R5IGV4Y2VwdCBoZXIuJyldLFxuICAgIHByb2Nlc3NFZmZlY3RzOiAodHJpcCwgY3VycmVudFN0YXRlLCBiYXNlRWZmZWN0cykgPT4ge1xuICAgICAgICByZXR1cm4gdHJpcC5nb1Blb3BsZS5sZW5ndGggPj0gNCA/IGJhc2VFZmZlY3RzIDogW11cbiAgICB9XG59KVxuXG5jb25zdCBmbGF2aWVGb21vMiA9IG5ldyBDb21wbGV4KHsgICAgLy9GbGF2aWUgRk9NTyBldmVudCAyXG4gICAgaHVtQmFuOiBbSHVtYW5OYW1lLkZsYXZpZV0sXG4gICAgaHVtVGFnc1JlcTogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mbGF2aWVfYW5ncnldXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5Zb3VdLCAtMTBdXSlcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKCdGbGF2aWUgY2FtZSB1bmludml0ZWQsIGNoZXdlZCB5b3Ugb3V0LCBhbmQgbGVmdC4gRm9yZXZlci4nKV0sXG4gICAgcHJvY2Vzc0VmZmVjdHM6ICh0cmlwLCBjdXJyZW50U3RhdGUsIGJhc2VFZmZlY3RzKSA9PiB7XG4gICAgICAgIHJldHVybiB0cmlwLmdvUGVvcGxlLmxlbmd0aCA+PSA0ID8gYmFzZUVmZmVjdHMgOiBbXVxuICAgIH1cbn0pXG5cbmNvbnN0IGJvd2xpbmdicmF3bCA9IG5ldyBDb21wbGV4KHtcbiAgICBodW1SZXE6IFtIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5EYW5dLFxuICAgIGFsbG93ZWRMb2NhdGlvbnM6IFtMb2NhdGlvbk5hbWUuQm93bGluZ10sXG4gICAgcmVsVGFnc0JhbjogW1tbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRGFuXSwgUmVsYXRpb25zaGlwVGFnLmJvd2xpbmdfYnJhd2xdXSxcbiAgICBlZmZlY3RzOiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5EYW5dLCAtMl0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkNlY2lsXSwgLTJdXSlcbiAgICAgICAgLmFkZFJlbFRhZ3MoW1tbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRGFuXSwgUmVsYXRpb25zaGlwVGFnLmJvd2xpbmdfYnJhd2xdXSlcbiAgICAgICAgLnNldERlc2NyaXB0aW9uKCdDZWNpbCBhbmQgRGFuIGJldCB3aG8gY291bGQgc2NvcmUgdGhlIG1vc3QgaW4gYm93bGluZy4nICtcbiAgICAgICAgICAgICcgRGFuIHRob3VnaHQgaGUgd291bGQgd2luIGVhc2lseSwgYnV0IENlY2lsIGRpZC4nICtcbiAgICAgICAgICAgICcgU28gRGFuIGFjY3VzZWQgaGltIG9mIGNoZWF0aW5nLCBhbmQgdGhleSBnb3QgaW50byBhIGZpZ2h0IScpXSxcbiAgICBwcm9jZXNzRWZmZWN0czogZnVuY3Rpb24gKHRyaXAsIGN1cnJlbnRTdGF0ZSwgYmFzZUVmZmVjdHMpIHtcbiAgICAgICAgdHJpcC5nb1Blb3BsZS5maWx0ZXIocCA9PiAocC5uYW1lICE9IEh1bWFuTmFtZS5DZWNpbCkgJiYgKHAubmFtZSAhPSBIdW1hbk5hbWUuRGFuKSkuZm9yRWFjaChwID0+IHtcbiAgICAgICAgICAgIGJhc2VFZmZlY3RzWzBdLmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbcC5uYW1lLCBIdW1hbk5hbWUuQ2VjaWxdLCAtMl0pXG4gICAgICAgICAgICBiYXNlRWZmZWN0c1swXS5jaGFuZ2VkRm9uZG5lc3MucHVzaChbW3AubmFtZSwgSHVtYW5OYW1lLkRhbl0sIC0xXSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGJhc2VFZmZlY3RzXG4gICAgfSxcbn0pXG5cbmNvbnN0IGFsZXhTdXBwb3J0aXZlID0gbmV3IENvbXBsZXgoe1xuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLFxuICAgIHJlbFRhZ3NCYW46IFtcbiAgICAgICAgW1tIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmF3a2F3YXJkbmVzc10sXG4gICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuQWxleF0sIFJlbGF0aW9uc2hpcFRhZy5hd2thd2FyZG5lc3NdLFxuICAgIF0sXG4gICAgYWxsb3dlZExvY2F0aW9uczogW0xvY2F0aW9uTmFtZS5Cb3dsaW5nLCBMb2NhdGlvbk5hbWUuSGlraW5nXSxcbiAgICBodW1UYWdzUmVxOiBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5UYWcuZGVwcmVzc2VkXV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAucmVtb3ZlSHVtVGFncyhbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5UYWcuZGVwcmVzc2VkXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQWxleCBoZWxwZWQgQmVhdHJpY2UgZ2V0IG92ZXIgaGVyIGJyZWFrdXAuIFNoZSBmZWVscyBiZXR0ZXIgbm93LicpXG4gICAgICAgIC5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLllvdV0sIDFdLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5BbGV4XSwgMV0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkNlY2lsXSwgMV0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkRhbl0sIDFdLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5FcmljXSwgMV0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkZsYXZpZV0sIDFdLFxuICAgICAgICBdKVxuICAgIF0sXG59KVxuXG5jb25zdCBQUkVTRU5UX0ZPTkRORVNTX0NIQU5HRSA9ICsyXG5jb25zdCBBQlNFTlRfRk9ORE5FU1NfQ0hBTkdFID0gLTFcblxuY29uc3QgYmFzZUZvbmRuZXNzQ2hhbmdlcyA9IG5ldyBDb21wbGV4KHtcbiAgICBwcm9jZXNzRWZmZWN0czogZnVuY3Rpb24gKHRyaXAsIGN1cnJlbnRTdGF0ZSwgYmFzZUVmZmVjdHMpIHtcbiAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICBjdXJyZW50U3RhdGUuZ2V0QWxsSHVtYW5OYW1lcygpLmZvckVhY2goaE5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSkuaW5jbHVkZXMoaE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbaE5hbWUsIEh1bWFuTmFtZS5Zb3VdLCBBQlNFTlRfRk9ORE5FU1NfQ0hBTkdFXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbaE5hbWUsIEh1bWFuTmFtZS5Zb3VdLCBQUkVTRU5UX0ZPTkRORVNTX0NIQU5HRV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGJhc2VFZmZlY3RzLmNvbmNhdChbZWZmZWN0XSlcbiAgICB9LFxufSlcblxubGV2ZWxzLnB1c2goXG4gICAgbmV3IExldmVsKFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLllvdSksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkFsZXgpLFxuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5CZWF0cmljZSksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkNlY2lsKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbihIdW1hbk5hbWUuRGFuKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbihIdW1hbk5hbWUuRXJpYyksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkZsYXZpZSksXG4gICAgICAgIF0sXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgZmxhdHRlbihbXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLFxuICAgICAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2gsIFJlbGF0aW9uc2hpcFRhZy5kaXNhYmxlX211dHVhbF9jcnVzaF9kYXRpbmddKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5DZWNpbF0sXG4gICAgICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaCwgUmVsYXRpb25zaGlwVGFnLmxpa2UsIFJlbGF0aW9uc2hpcFRhZy5kaXNhYmxlX211dHVhbF9jcnVzaF9kYXRpbmddKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0pLFxuICAgICAgICAgICAgbXV0dWFsUmVsYXRpb25zaGlwKFtIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuRmxhdmllXSwgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaCwgUmVsYXRpb25zaGlwVGFnLmxpa2VdKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRmxhdmllXSwgW1JlbGF0aW9uc2hpcFRhZy5saWtlXSksXG4gICAgICAgICAgICBuZXcgUmVsYXRpb25zaGlwKFtIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5GbGF2aWVdLCBuZXcgU2V0KFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdKSksXG4gICAgICAgICAgICBuZXcgUmVsYXRpb25zaGlwKFtIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5GbGF2aWVdLCBuZXcgU2V0KFtSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0pKSxcbiAgICAgICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBuZXcgU2V0KFtSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0pKSxcbiAgICAgICAgXSksXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuVGFnLmludHJvdmVydF0sXG4gICAgICAgICAgICBbSHVtYW5OYW1lLkRhbiwgSHVtYW5UYWcuZXh0cm92ZXJ0XSxcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5hbmdyeV9kcnVua10sXG4gICAgICAgICAgICBbSHVtYW5OYW1lLkRhbiwgSHVtYW5UYWcucHJvbWlzY3VvdXNdLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuWW91XSwgNl0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLllvdV0sIDZdLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5Zb3VdLCA2XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLllvdV0sIDZdLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLllvdV0sIDZdLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuWW91XSwgNl0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuQWxleF0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRGFuXSwgN10sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWVdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkRhbl0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5GbGF2aWVdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRmxhdmllXSwgNF0sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA0XSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFN5bXBhdGhpZXMoKSxcbiAgICAgICAgICAgIG5ldyBHb29kQ29tcGFueSgpLFxuICAgICAgICAgICAgbmV3IEV4dHJvdmVydHNJbnRyb3ZlcnRzKCksXG5cbiAgICAgICAgICAgIG5ldyBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmsoKSxcbiAgICAgICAgICAgIG5ldyBBbGV4QW5kQ2VjaWwoKSxcbiAgICAgICAgICAgIG5ldyBNdXR1YWxDcnVzaCgpLFxuICAgICAgICAgICAgbmV3IExlZnRPdXRXaXRob3V0Q3J1c2goKSxcbiAgICAgICAgICAgIG5ldyBFdGVybmFsQ291cGxlKEh1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWUpLFxuICAgICAgICAgICAgbmV3IEVyaWNWU0FBbmRCKCksXG4gICAgICAgICAgICBuZXcgQWxleEFuZEJlYXRyaWNlR2V0RHJ1bmsoKSxcbiAgICAgICAgICAgIG5ldyBDZWNpbENydXNoQ29udW5kcnVtKCksXG5cbiAgICAgICAgICAgIGJvd2xpbmdicmF3bCxcbiAgICAgICAgICAgIGZsYXZpZUZvbW8yLCAvLyAyIG11c3QgYmUgYmVmb3JlIDEgKGVsc2UgYm90aCBoYXBwZW4gc2ltdWx0YW5lb3VzbHkpXG4gICAgICAgICAgICBmbGF2aWVGb21vMSxcbiAgICAgICAgICAgIGRhblR3b0dpcmxmcmllbmRzQnVzdGVkLFxuICAgICAgICAgICAgYmFzZUZvbmRuZXNzQ2hhbmdlcyxcbiAgICAgICAgICAgIGZyYWdpbGVGbGF2aWUyLCAvLyB6YXMgc3Rlam5laiBpc3N1ZVxuICAgICAgICAgICAgZnJhZ2lsZUZsYXZpZTEsXG5cbiAgICAgICAgICAgIGFsZXhTdXBwb3J0aXZlLFxuICAgICAgICAgICAgbmV3IERlcHJlc3Npb24oKSxcbiAgICAgICAgICAgIG5ldyBCZWF0cmljZUJyZWFrdXBzKCksXG5cbiAgICAgICAgICAgIG5ldyBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncygpLFxuICAgICAgICBdLFxuICAgICksXG4pICAgICAgICAiLCJleHBvcnQgZW51bSBMb2NhdGlvbk5hbWUge1xuICAgIEJvd2xpbmcgPSAnQm93bGluZycsXG4gICAgRHJpbmsgPSAnRHJpbmtpbmcnLFxuICAgIEhpa2luZyA9ICdIaWtpbmcnLFxufSIsImltcG9ydCB7IFNpdHVhdGlvbiwgU2l0dWF0aW9uRWZmZWN0IH0gZnJvbSBcIi4uL21vZGVsL3NpdHVhdGlvblwiXG5pbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gXCIuLi9tb2RlbC90cmlwU3VtbWFyeVwiXG5pbXBvcnQgeyBDb3VwbGUsIFBlb3BsZUdyYXBoIH0gZnJvbSBcIi4uL21vZGVsL3Blb3BsZUdyYXBoXCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcgfSBmcm9tIFwiLi9lbnRpdHlUYWdzXCJcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuc1wiXG5pbXBvcnQgeyBMb2NhdGlvbk5hbWUgfSBmcm9tIFwiLi9sb2NhdGlvbnNcIlxuaW1wb3J0IHsgSHVtYW4sIEh1bWFuVXRpbHMgfSBmcm9tIFwiLi4vbW9kZWwvaHVtYW5cIlxuXG5cbmV4cG9ydCBjbGFzcyBTaXR1YXRpb25VdGlscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0VG9EYXRlKGNvdXBsZTogQ291cGxlKTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gY291cGxlXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVJlbGF0aW9uc2hpcChcbiAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaCwgUmVsYXRpb25zaGlwVGFnLmV4XSxcbiAgICAgICAgICAgICsxMCxcbiAgICAgICAgKS5zZXREZXNjcmlwdGlvbihbYEFmdGVyIGhhdmluZyBmdW4gYXQgdGhlIG5pZ2h0IG91dCwgJHthfSBhbmQgJHtifSBzdGFydGVkIGRhdGluZy5gLFxuICAgICAgICAgICAgYCR7YX0gYW5kICR7Yn0gc2VlbWVkIHRvIGhhdmUgYSBnb29kIHRpbWUgdG9nZXRoZXIgYXQgdGhlIHBhcnR5IGFuZCBlbmRlZCB1cCBnZXR0aW5nIHRvZ2V0aGVyLmAsXG4gICAgICAgICAgICBgRXZlcnlib2R5IHNhdyBpdCBjb21pbmcgLSAke2F9IGFuZCAke2J9IGdvdCB0b2dldGhlci5gLFxuICAgICAgICAgICAgYEFmdGVyIGNoZWNraW5nIGVhY2ggb3RoZXIgb3V0IGZvciBzb21lIHRpbWUsICR7YX0gYW5kICR7Yn0gZmluYWxseSBiZWNhbWUgYSBjb3VwbGUuYCxcbiAgICAgICAgICAgIGBBZnRlciAke2F9IGFuZCAke2J9IGZpbmFsbHkgY29uZmVzc2VkIHRoZWlyIGZlZWxpbmdzLCB0aGV5IHN0YXJ0ZWQgZGF0aW5nLmAsXG4gICAgICAgICAgICBgV2hhdCBpZiAke2F9IGFuZCAke2J9IHN0YXJ0ZWQgZGF0aW5nLCB0aGF0J2QgYmUgc28gd2VpcmQ/IEhhaGEsIGp1c3Qga2lkZGluZy4uLiB1bmxlc3M/IE9oLCBpdCBqdXN0IGhhcHBlbmVkLmBdKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYnJlYWtVcChjb3VwbGU6IENvdXBsZSk6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIGNvbnN0IFthLCBiXSA9IGNvdXBsZVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VSZWxhdGlvbnNoaXAoXG4gICAgICAgICAgICBjb3VwbGUsXG4gICAgICAgICAgICBbUmVsYXRpb25zaGlwVGFnLmV4XSxcbiAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuICAgICAgICAgICAgLTYsXG4gICAgICAgICkuc2V0RGVzY3JpcHRpb24oW2Ake2F9IGFuZCAke2J9IGJyb2tlIHVwIWAsXG4gICAgICAgICAgICBgJHthfSBhbmQgJHtifSdzIHJlbGF0aW9uc2hpcCBzZWVtZWQgcm91Z2ggbGF0ZWx5LCBhbmQgbm93IGl0IGZpbmFsbHkgY2FtZSB0byBhbiBlbmQuYCxcbiAgICAgICAgICAgIGBBZnRlciBzb21lIHN0cmVzcyAke2F9IGFuZCAke2J9IHNlcGFyYXRlZCBhbmQgYXJlIG5vIGxvbmdlciB0b2dldGhlci5gLFxuICAgICAgICAgICAgYEFzIGFsbCB0aGluZ3MgZG8sIGV2ZW4gJHthfSBhbmQgJHtifSdzIGRhdGluZyBlcmEgY2FtZSB0byBhbiBlbmQuLi5gXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNoYW5nZVJlbGF0aW9uc2hpcChcbiAgICAgICAgY291cGxlOiBDb3VwbGUsXG4gICAgICAgIGFkZGVkUmVsVGFnczogUmVsYXRpb25zaGlwVGFnW10sXG4gICAgICAgIHJlbW92ZWRSZWxUYWdzOiBSZWxhdGlvbnNoaXBUYWdbXSxcbiAgICAgICAgZm9uZG5lc3NDaGFuZ2U6IG51bWJlcixcbiAgICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmcsXG4gICAgKTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gY291cGxlXG5cbiAgICAgICAgZnVuY3Rpb24gYnJvYWRjYXN0KHRhZ3M6IFJlbGF0aW9uc2hpcFRhZ1tdKTogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4ge1xuICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBBcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtbYSwgYl0sIHRhZ10pXG4gICAgICAgICAgICAgICAgcmVzLnB1c2goW1tiLCBhXSwgdGFnXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU2l0dWF0aW9uRWZmZWN0KGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgLmFkZFJlbFRhZ3MoYnJvYWRjYXN0KGFkZGVkUmVsVGFncykpXG4gICAgICAgICAgICAucmVtb3ZlUmVsVGFncyhicm9hZGNhc3QocmVtb3ZlZFJlbFRhZ3MpKVxuICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgICAgICAgICBbW2EsIGJdLCBmb25kbmVzc0NoYW5nZV0sXG4gICAgICAgICAgICAgICAgW1tiLCBhXSwgZm9uZG5lc3NDaGFuZ2VdLFxuICAgICAgICAgICAgXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFNvbWVvbmVPblRyaXBXaXRoVGFnKHRyaXA6IFRyaXBTdW1tYXJ5LCBwZXJzb246IEh1bWFuTmFtZSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpIHtcbiAgICAgICAgcmV0dXJuIHRyaXAuZ29QZW9wbGVcbiAgICAgICAgICAgIC5maWx0ZXIob1BlcnNvbiA9PiBvUGVyc29uLm5hbWUgIT0gcGVyc29uKVxuICAgICAgICAgICAgLmZpbmQob1BlcnNvbiA9PiBjdXJyZW50U3RhdGUuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4ocGVyc29uLCBvUGVyc29uLm5hbWUpLnNvbWUodCA9PiB0ID09IHRhZykpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb3ZlcnMocGVyc29uOiBIdW1hbk5hbWUsIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBIdW1hbk5hbWVbXSB7XG4gICAgICAgIGxldCByZXMgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3QgcmVsIG9mIGN1cnJlbnRTdGF0ZS5nZXRPdXRSZWxhdGlvbnNoaXBzKHBlcnNvbikpIHtcbiAgICAgICAgICAgIGlmIChyZWwudGFncy5oYXMoUmVsYXRpb25zaGlwVGFnLmxvdmVyKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHJlbC5wZW9wbGVbMV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc1NpbmdsZShwZXJzb246IEh1bWFuTmFtZSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRMb3ZlcnMocGVyc29uLCBjdXJyZW50U3RhdGUpLmxlbmd0aCA9PSAwXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzdWJzZXQ8VD4oYXM6IFRbXSwgYnM6IFRbXSkge1xuICAgICAgICByZXR1cm4gYXMuZXZlcnkoYSA9PiBicy5pbmNsdWRlcyhhKSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVTaXR1YXRpb24gaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHByaXZhdGUgaGF2ZVRvQmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+XG4gICAgcHJpdmF0ZSBjYW5ub3RCZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT5cbiAgICBwcml2YXRlIGFsbG93ZWRMb2NhdGlvbnM6IEFycmF5PExvY2F0aW9uTmFtZT5cblxuICAgIHB1YmxpYyBlZmZlY3Q6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBoYXZlVG9CZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT4sXG4gICAgICAgIGNhbm5vdEJlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPixcbiAgICAgICAgYWxsb3dlZExvY2F0aW9uczogQXJyYXk8TG9jYXRpb25OYW1lPixcbiAgICAgICAgZWZmZWN0OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+LFxuICAgICkge1xuXG4gICAgICAgIHRoaXMuaGF2ZVRvQmVQcmVzZW50ID0gaGF2ZVRvQmVQcmVzZW50XG4gICAgICAgIHRoaXMuY2Fubm90QmVQcmVzZW50ID0gY2Fubm90QmVQcmVzZW50XG4gICAgICAgIHRoaXMuYWxsb3dlZExvY2F0aW9ucyA9IGFsbG93ZWRMb2NhdGlvbnNcbiAgICAgICAgdGhpcy5lZmZlY3QgPSBlZmZlY3RcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIF86IFBlb3BsZUdyYXBoKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXBwbGljYWJsZSh0cmlwKSA/IHRoaXMuZWZmZWN0IDogbmV3IEFycmF5KClcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBcHBsaWNhYmxlKHRyaXA6IFRyaXBTdW1tYXJ5KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBuYW1lc1ByZXNlbnQgPSB0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSlcblxuICAgICAgICByZXR1cm4gdGhpcy5oYXZlVG9CZVByZXNlbnQuZXZlcnkoaHAgPT4gbmFtZXNQcmVzZW50LmluY2x1ZGVzKGhwKSkgJiZcbiAgICAgICAgICAgIHRoaXMuY2Fubm90QmVQcmVzZW50LmV2ZXJ5KGNwID0+ICFuYW1lc1ByZXNlbnQuaW5jbHVkZXMoY3ApKSAmJlxuICAgICAgICAgICAgdGhpcy5hbGxvd2VkTG9jYXRpb25zLnNvbWUobG9jID0+IGxvYyA9PSB0cmlwLmdvTG9jYXRpb24pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm9ib2R5TGlrZXNBbmdyeURydW5rIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgaWYgKHRyaXAuZ29Mb2NhdGlvbiAhPSBMb2NhdGlvbk5hbWUuRHJpbmspIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGVmZmVjdHMgPSBuZXcgQXJyYXkoKVxuXG4gICAgICAgIHRyaXAuZ29QZW9wbGUuZm9yRWFjaChwZXJzb24gPT4ge1xuICAgICAgICAgICAgbGV0IHBlcnNvblRhZ3MgPSBjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhwZXJzb24ubmFtZSlcbiAgICAgICAgICAgIGlmIChwZXJzb25UYWdzLmhhcyhIdW1hblRhZy5hbmdyeV9kcnVuaykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IFwiXCJcbiAgICAgICAgICAgICAgICBpZiAodHJpcC5nb1Blb3BsZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2MgPSBgJHtwZXJzb24ubmFtZX0gZ290IGRydW5rIGFuZCBhbmdyeTsgdGhlIG90aGVycyB3ZXJlbid0IGhhcHB5IGFib3V0IHRoYXQuYFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2MgPSBgJHtwZXJzb24ubmFtZX0gZ290IGRydW5rIGFuZCBhbmdyeSwgYnV0IHlvdSdyZSB1c2VkIHRvIGl0IGF0IHRoaXMgcG9pbnQuYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgZWZmZWN0ID0gbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihkZXNjKVxuXG4gICAgICAgICAgICAgICAgdHJpcC5nb1Blb3BsZS5maWx0ZXIocCA9PiBwICE9IHBlcnNvbikuZm9yRWFjaChvdGhlclBlcnNvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VGb25kbmVzcyhbW1tvdGhlclBlcnNvbi5uYW1lLCBwZXJzb24ubmFtZV0sIC0xXV0pXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGVmZmVjdHMucHVzaChlZmZlY3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBlZmZlY3RzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXV0dWFsQ3J1c2ggaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHN0YXRpYyBNSU5fREFUSU5HX0ZPTkRORVNTID0gN1xuXG4gICAgcHVibGljIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCBlZmZlY3RzID0gbmV3IEFycmF5KClcbiAgICAgICAgbGV0IGNydXNoZXNNYXA6IE1hcDxIdW1hbk5hbWUsIEh1bWFuTmFtZVtdPiA9IG5ldyBNYXAoKVxuICAgICAgICBsZXQgZWxpZ2libGVQZW9wbGUgPSBbXVxuXG4gICAgICAgIGZvciAoY29uc3QgcGVyc29uIG9mIHRyaXAuZ29QZW9wbGUpIHtcbiAgICAgICAgICAgIGxldCBsb3Zlck9uVHJpcCA9IFNpdHVhdGlvblV0aWxzLmdldFNvbWVvbmVPblRyaXBXaXRoVGFnKHRyaXAsIHBlcnNvbi5uYW1lLCBjdXJyZW50U3RhdGUsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcilcbiAgICAgICAgICAgIGlmIChsb3Zlck9uVHJpcCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChTaXR1YXRpb25VdGlscy5nZXRMb3ZlcnMocGVyc29uLm5hbWUsIGN1cnJlbnRTdGF0ZSkubGVuZ3RoID49IDFcbiAgICAgICAgICAgICAgICAmJiAhY3VycmVudFN0YXRlLmdldEh1bVRhZ3MocGVyc29uLm5hbWUpLmhhcyhIdW1hblRhZy5wcm9taXNjdW91cykpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBwb2x5Z2FteSB1bmxlc3MgdGhlIHByb21pc2N1b3VzIHRhZyBpcyBwcmVzZW50LlxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjcnVzaGVzUHJlc2VudCA9IHRyaXAuZ29QZW9wbGUuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGIgPT4gY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKHBlcnNvbi5uYW1lLCBiLm5hbWUpLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5jcnVzaCksXG4gICAgICAgICAgICApLm1hcChoID0+IGgubmFtZSlcblxuICAgICAgICAgICAgaWYgKGNydXNoZXNQcmVzZW50Lmxlbmd0aCAhPSAxKSB7XG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNydXNoZXNNYXAuc2V0KHBlcnNvbi5uYW1lLCBjcnVzaGVzUHJlc2VudClcbiAgICAgICAgICAgIGVsaWdpYmxlUGVvcGxlLnB1c2gocGVyc29uLm5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHBlcnNvbiBvZiBlbGlnaWJsZVBlb3BsZSkge1xuICAgICAgICAgICAgY29uc3QgY3J1c2hlcyA9IGNydXNoZXNNYXAuZ2V0KHBlcnNvbilcbiAgICAgICAgICAgIGlmIChjcnVzaGVzPy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjcnVzaCA9IGNydXNoZXNbMF1cbiAgICAgICAgICAgICAgICBpZiAoIWVsaWdpYmxlUGVvcGxlLmluY2x1ZGVzKGNydXNoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtwZXJzb24sIGNydXNoXSkgPCBNdXR1YWxDcnVzaC5NSU5fREFUSU5HX0ZPTkRORVNTXG4gICAgICAgICAgICAgICAgICAgIHx8IGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbY3J1c2gsIHBlcnNvbl0pIDwgTXV0dWFsQ3J1c2guTUlOX0RBVElOR19GT05ETkVTUykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKHBlcnNvbiwgY3J1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcuZGlzYWJsZV9tdXR1YWxfY3J1c2hfZGF0aW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBCcmVhayBzeW1tZXRyeSBieSBjb21wYXJpbmcgbmFtZXNcbiAgICAgICAgICAgICAgICBpZiAoY3J1c2hlc01hcC5nZXQoY3J1c2gpPy5sZW5ndGggPT09IDEgJiYgY3J1c2ggPD0gcGVyc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdHMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLnN0YXJ0VG9EYXRlKFtwZXJzb24sIGNydXNoXSksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWZmZWN0c1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV0ZXJuYWxDb3VwbGUgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIGFsd2F5czogSHVtYW5OYW1lXG4gICAgb25seVdoZW5Ob3RJbk90aGVyUmVsOiBIdW1hbk5hbWVcblxuICAgIGxhc3RDaGFuZ2U6IG51bWJlciA9IDBcbiAgICBzdGF0aWMgQ0hBTkdFX0FGVEVSID0gM1xuICAgIHRvZ2V0aGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBuQnJlYWt1cHMgPSAwXG4gICAgbk1ha2V1cHMgPSAwXG4gICAgZGFuQnVzdGVkTWVzc2FnZUZpcmVkID0gZmFsc2VcblxuICAgIGNvbnN0cnVjdG9yKGFsd2F5czogSHVtYW5OYW1lLCBvbmx5V2hlbk5vdEluT3RoZXJSZWw6IEh1bWFuTmFtZSkge1xuICAgICAgICB0aGlzLmFsd2F5cyA9IGFsd2F5c1xuICAgICAgICB0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbCA9IG9ubHlXaGVuTm90SW5PdGhlclJlbFxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcHMgPSBjdXJyZW50U3RhdGUuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4odGhpcy5hbHdheXMsIHRoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsKVxuXG4gICAgICAgIGlmICghcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcuZXgpICYmICFyZWxhdGlvbnNoaXBzLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikpIHtcbiAgICAgICAgICAgIC8vIE5vdCB0cmlnZ2VyZWQgeWV0XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZ2V0aGVyTm93ID0gcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpXG5cbiAgICAgICAgaWYgKHRyaXBDb3VudCA+IDAgJiYgdGhpcy50b2dldGhlciAhPSB0b2dldGhlck5vdykge1xuICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcyBjaGFuZ2VkIGV4dGVybmFsbHlcbiAgICAgICAgICAgIHRoaXMubGFzdENoYW5nZSA9IHRyaXBDb3VudFxuICAgICAgICAgICAgdGhpcy50b2dldGhlciA9IHRvZ2V0aGVyTm93XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9nZXRoZXIgPSB0b2dldGhlck5vd1xuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGFuZ2UgKyBFdGVybmFsQ291cGxlLkNIQU5HRV9BRlRFUiA8PSB0cmlwQ291bnQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoYW5nZSA9IHRyaXBDb3VudFxuXG4gICAgICAgICAgICBsZXQgZWZmZWN0OiBTaXR1YXRpb25FZmZlY3RcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgICAgICAgICBsZXQgd3JhcHBlckluZGV4OiBudW1iZXJcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnRvZ2V0aGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZS5nZXRPdXRSZWxhdGlvbnNoaXBzT2ZUeXBlKHRoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsLCBSZWxhdGlvbnNoaXBUYWcubG92ZXIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgaW4gcmVsYXRpb25zaGlwIC0+IG5vdCBnZXR0aW5nIGJhY2sgdG9ndGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFzIGNoYW5nZWQgZXh0ZXJuYWxseVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDaGFuZ2UgPSB0cmlwQ291bnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dldGhlciA9IHRvZ2V0aGVyTm93XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVmZmVjdCA9IFNpdHVhdGlvblV0aWxzLnN0YXJ0VG9EYXRlKFt0aGlzLmFsd2F5cywgdGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWxdKVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gYCR7dGhpcy5hbHdheXN9IGFuZCAke3RoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsfSBzdGFydGVkIGRhdGluZ2BcbiAgICAgICAgICAgICAgICB3cmFwcGVySW5kZXggPSB0aGlzLm5NYWtldXBzXG4gICAgICAgICAgICAgICAgdGhpcy5uTWFrZXVwcysrXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVmZmVjdCA9IFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW3RoaXMuYWx3YXlzLCB0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbF0pXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBgJHt0aGlzLmFsd2F5c30gYW5kICR7dGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWx9IGJyb2tlIHVwYFxuICAgICAgICAgICAgICAgIHdyYXBwZXJJbmRleCA9IHRoaXMubkJyZWFrdXBzXG4gICAgICAgICAgICAgICAgdGhpcy5uQnJlYWt1cHMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlZERlc2NyaXB0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBgSGF2ZSB5b3UgaGVhcmQ/ICR7ZGVzY3JpcHRpb259LmAsXG4gICAgICAgICAgICAgICAgYEhhdmUgeW91IGhlYXJkPyAke2Rlc2NyaXB0aW9ufSBhZ2Fpbi5gLFxuICAgICAgICAgICAgICAgIGBZb3Ugd29uJ3QgYmVsaWV2ZSB0aGlzOiAke2Rlc2NyaXB0aW9ufSBhZ2Fpbi5gLFxuICAgICAgICAgICAgICAgIGBPaCwgYnkgdGhlIHdheTogJHtkZXNjcmlwdGlvbn0sIHlldCBhZ2Fpbi5gLFxuICAgICAgICAgICAgICAgIGBPaCwgYnkgdGhlIHdheTogJHtkZXNjcmlwdGlvbn0sIHRvIG5vYm9keSdzIHN1cnByaXNlLmAsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kYW5CdXN0ZWRNZXNzYWdlRmlyZWQgJiYgY3VycmVudFN0YXRlLmdldEh1bVRhZ3MoSHVtYW5OYW1lLkRhbikuaGFzKEh1bWFuVGFnLmRhbl9idXN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYW5CdXN0ZWRNZXNzYWdlRmlyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZWZmZWN0LnNldERlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICBcIldoYXQ/IEV2ZW4gYWZ0ZXIgRGFuJ3Mgc2hlbmFuaWdhbnMsXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiBpdCBzZWVtcyB0aGF0IEZsYXZpZSBmb3JnYXZlIGhpbSBhbmQgdGhleSBnb3QgYmFjayB0b2dldGhlci4uLiE/XCIsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVySW5kZXggPSBNYXRoLm1pbih3cmFwcGVySW5kZXgsIHdyYXBwZWREZXNjcmlwdGlvbnMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBlZmZlY3Quc2V0RGVzY3JpcHRpb24od3JhcHBlZERlc2NyaXB0aW9uc1t3cmFwcGVySW5kZXhdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW2VmZmVjdF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGxleCBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHVibGljIGh1bVJlcTogQXJyYXk8SHVtYW5OYW1lPiA9IEFycmF5KClcbiAgICBwdWJsaWMgaHVtQmFuOiBBcnJheTxIdW1hbk5hbWU+ID0gQXJyYXkoKVxuICAgIHB1YmxpYyBhbGxvd2VkTG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+ID0gQXJyYXkoKVxuXG4gICAgcHVibGljIGh1bVRhZ3NSZXE6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4gPSBBcnJheSgpXG4gICAgcHVibGljIGh1bVRhZ3NCYW46IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4gPSBBcnJheSgpXG5cbiAgICBwdWJsaWMgcmVsVGFnc1JlcTogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4gPSBBcnJheSgpXG4gICAgcHVibGljIHJlbFRhZ3NCYW46IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+ID0gQXJyYXkoKVxuXG4gICAgcHVibGljIGVmZmVjdHM6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4gPSBBcnJheSgpXG4gICAgcHVibGljIHByb2Nlc3NFZmZlY3RzPzogKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCBiYXNlRWZmZWN0czogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PikgPT4gQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGZpZWxkcz86IHtcbiAgICAgICAgICAgIGh1bVJlcT86IEFycmF5PEh1bWFuTmFtZT4sIGh1bUJhbj86IEFycmF5PEh1bWFuTmFtZT4sXG4gICAgICAgICAgICBhbGxvd2VkTG9jYXRpb25zPzogQXJyYXk8TG9jYXRpb25OYW1lPixcbiAgICAgICAgICAgIGh1bVRhZ3NSZXE/OiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LCBodW1UYWdzQmFuPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgICAgIHJlbFRhZ3NSZXE/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPiwgcmVsVGFnc0Jhbj86IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+LFxuICAgICAgICAgICAgZWZmZWN0cz86IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4sXG4gICAgICAgICAgICBwcm9jZXNzRWZmZWN0cz86ICh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgYmFzZUVmZmVjdHM6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4pID0+IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cbiAgICAgICAgfSkge1xuICAgICAgICBpZiAoZmllbGRzKSBPYmplY3QuYXNzaWduKHRoaXMsIGZpZWxkcylcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBcHBsaWNhYmxlKHRyaXAsIGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgICAgID8gdGhpcy5wcm9jZXNzRWZmZWN0cyA/IHRoaXMucHJvY2Vzc0VmZmVjdHModHJpcCwgY3VycmVudFN0YXRlLCB0aGlzLmVmZmVjdHMpIDogdGhpcy5lZmZlY3RzXG4gICAgICAgICAgICA6IG5ldyBBcnJheSgpXG4gICAgfVxuXG4gICAgcHVibGljIGlzQXBwbGljYWJsZSh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbmFtZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG5cbiAgICAgICAgLy8gSWYgbm8gbG9jYXRpb25zIGFyZSBzZXQsIHRoaXMgbWVhbnMgYWxsIGxvY2F0aW9ucyBhcmUgYWxsb3dlZFxuICAgICAgICBsZXQgbG9jYXRpb25PayA9ICh0aGlzLmFsbG93ZWRMb2NhdGlvbnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5hbGxvd2VkTG9jYXRpb25zLnNvbWUobG9jID0+IGxvYyA9PSB0cmlwLmdvTG9jYXRpb24pXG5cbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uT2sgJiZcbiAgICAgICAgICAgIHRoaXMuaHVtUmVxLmV2ZXJ5KGhwID0+IG5hbWVzUHJlc2VudC5pbmNsdWRlcyhocCkpICYmXG4gICAgICAgICAgICB0aGlzLmh1bUJhbi5ldmVyeShjcCA9PiAhbmFtZXNQcmVzZW50LmluY2x1ZGVzKGNwKSkgJiZcblxuICAgICAgICAgICAgdGhpcy5odW1UYWdzUmVxLmV2ZXJ5KGhyID0+IGN1cnJlbnRTdGF0ZS5nZXRIdW1UYWdzKGhyWzBdKS5oYXMoaHJbMV0pKSAmJlxuICAgICAgICAgICAgdGhpcy5odW1UYWdzQmFuLmV2ZXJ5KGJyID0+ICFjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhiclswXSkuaGFzKGJyWzFdKSkgJiZcblxuICAgICAgICAgICAgdGhpcy5yZWxUYWdzUmVxLmV2ZXJ5KHJyID0+IGN1cnJlbnRTdGF0ZS5nZXRSZWxUYWdzKHJyWzBdKS5oYXMocnJbMV0pKSAmJlxuICAgICAgICAgICAgdGhpcy5yZWxUYWdzQmFuLmV2ZXJ5KGJyID0+ICFjdXJyZW50U3RhdGUuZ2V0UmVsVGFncyhiclswXSkuaGFzKGJyWzFdKSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTeW1wYXRoaWVzIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBzdGF0aWMgTElLRV9DSEFOR0UgPSArMVxuICAgIHN0YXRpYyBESVNMSUtFX0NIQU5HRSA9IC0xXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuXG4gICAgICAgIGZvciAoY29uc3QgciBvZiBjdXJyZW50U3RhdGUuZ2V0QWxsUmVsYXRpb25zaGlwcygpKSB7XG4gICAgICAgICAgICAvLyBCb3RoIHBhcnRpZXMgbXVzdCBiZSBwcmVzZW50XG4gICAgICAgICAgICBpZiAoci5wZW9wbGUuZXZlcnkocCA9PiB0cmlwLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGFncy5oYXMoUmVsYXRpb25zaGlwVGFnLmxpa2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VGb25kbmVzcyhbW3IucGVvcGxlLCBTeW1wYXRoaWVzLkxJS0VfQ0hBTkdFXV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyLnRhZ3MuaGFzKFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlKSkge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QuY2hhbmdlRm9uZG5lc3MoW1tyLnBlb3BsZSwgU3ltcGF0aGllcy5ESVNMSUtFX0NIQU5HRV1dKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2VmZmVjdF1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHb29kQ29tcGFueSBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG5cbiAgICBzdGF0aWMgQkFEX0ZPTkRORVNTID0gM1xuICAgIHN0YXRpYyBHT09EX0ZPTkRORVNTID0gN1xuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCBmb25kbmVzc0NoYW5nZSA9IG5ldyBBcnJheTxbQ291cGxlLCBudW1iZXJdPigpXG4gICAgICAgIGxldCBnb29kVGltZVBlb3BsZSA9IG5ldyBBcnJheTxIdW1hbk5hbWU+KClcbiAgICAgICAgbGV0IGJhZFRpbWVQZW9wbGUgPSBuZXcgQXJyYXk8SHVtYW5OYW1lPigpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGNvbnN0IGEgb2YgdHJpcC5nZXROYW1lcygpKSB7XG4gICAgICAgICAgICBpZiAoYSA9PSBIdW1hbk5hbWUuWW91KSBjb250aW51ZVxuXG5cbiAgICAgICAgICAgIGxldCB0b3RhbENoYW5nZSA9IDBcbiAgICAgICAgICAgIGxldCBnb29kTmFtZXMgPSBbXVxuICAgICAgICAgICAgbGV0IGJhZE5hbWVzID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCBiIG9mIHRyaXAuZ2V0TmFtZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChhID09IGIpIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgaWYgKGIgPT0gSHVtYW5OYW1lLllvdSkgY29udGludWVcblxuICAgICAgICAgICAgICAgIGxldCBjdXJDaGFuZ2UgPSAwXG4gICAgICAgICAgICAgICAgLy8gaWYgKGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYSwgYl0pID4gR29vZENvbXBhbnkuR09PRF9GT05ETkVTUykge1xuICAgICAgICAgICAgICAgIC8vICAgICBjdXJDaGFuZ2UrK1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFthLCBiXSkgPD0gR29vZENvbXBhbnkuQkFEX0ZPTkRORVNTKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoYW5nZS0tXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIChjdXJyZW50U3RhdGUuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYikuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmxpa2UpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGN1ckNoYW5nZSsrXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYikuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmRpc2xpa2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1ckNoYW5nZS0tXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWF5YmUgY2xhbXAgY3VyQ2hhbmdlIGJldHdlZW4gLTEgYW5kIDE/XG4gICAgICAgICAgICAgICAgdG90YWxDaGFuZ2UgKz0gY3VyQ2hhbmdlICogMlxuICAgICAgICAgICAgICAgIGlmIChjdXJDaGFuZ2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGdvb2ROYW1lcy5wdXNoKGIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJDaGFuZ2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhZE5hbWVzLnB1c2goYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG90YWxDaGFuZ2UgPT09IDApIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlID0gTWF0aC5tYXgodG90YWxDaGFuZ2UsIC00KVxuICAgICAgICAgICAgZm9uZG5lc3NDaGFuZ2UucHVzaChbW2EsIEh1bWFuTmFtZS5Zb3VdLCB0b3RhbENoYW5nZV0pXG5cbiAgICAgICAgICAgIC8vIFRPRE86IHNwZWNpZnkgdGhlIHBlcnNvbiB0aGV5IHdlcmUgaGFwcHkvdW5oYXBweSBhYm91dCwgaWYgaXQncyBqdXN0IG9uZSBwZXJzb25cbiAgICAgICAgICAgIGlmICh0b3RhbENoYW5nZSA8IDApIHtcbiAgICAgICAgICAgICAgICBiYWRUaW1lUGVvcGxlLnB1c2goYSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ29vZFRpbWVQZW9wbGUucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBlZmZlY3RzID0gQXJyYXk8U2l0dWF0aW9uRWZmZWN0PigpXG5cbiAgICAgICAgaWYgKGZvbmRuZXNzQ2hhbmdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGVmZmVjdHMucHVzaChuZXcgU2l0dWF0aW9uRWZmZWN0KCkuY2hhbmdlRm9uZG5lc3MoZm9uZG5lc3NDaGFuZ2UpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChiYWRUaW1lUGVvcGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBlb3BsZVN0cmluZyA9IEh1bWFuVXRpbHMucGVvcGxlVG9TdHJpbmcoYmFkVGltZVBlb3BsZSlcbiAgICAgICAgICAgIGVmZmVjdHMucHVzaChcbiAgICAgICAgICAgICAgICBuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKGAke3Blb3BsZVN0cmluZ30gJHtnb29kVGltZVBlb3BsZS5sZW5ndGggPD0gMSA/IFwid2Fzbid0XCIgOiBcIndlcmVuJ3RcIn0gaGFwcHkgYWJvdXQgd2hvIHlvdSBpbnZpdGVkLmApXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBnb29kIGFyZSBjdXJyZW50bHkgdW51c2VkIChvbiBwdXJwb3NlLCBzbyB0aGF0IHRoZSBnYW1lIGlzIGhhcmRlcilcbiAgICAgICAgaWYgKGdvb2RUaW1lUGVvcGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBlb3BsZVN0cmluZyA9IEh1bWFuVXRpbHMucGVvcGxlVG9TdHJpbmcoZ29vZFRpbWVQZW9wbGUpXG4gICAgICAgICAgICBlZmZlY3RzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHtwZW9wbGVTdHJpbmd9IGVuam95ZWQgdGhlaXIgY29tcGFueS5gKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVmZmVjdHMgICAgXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncyBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCBlZmZlY3QgPSBuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgbGV0IG90aGVyRWZmZWN0cyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBhIG9mIGN1cnJlbnRTdGF0ZS5nZXRIdW1hbk5hbWVzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYiBvZiBjdXJyZW50U3RhdGUuZ2V0SHVtYW5OYW1lcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT0gYikgY29udGludWVcbiAgICAgICAgICAgICAgICBjb25zdCBmb25kbmVzcyA9IGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYSwgYl0pXG4gICAgICAgICAgICAgICAgY29uc3QgbXV0dWFsUmVsYXRpb25zaGlwcyA9IGN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2VlbihhLCBiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcHMgPSBjdXJyZW50U3RhdGUuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYilcbiAgICAgICAgICAgICAgICBpZiAoZm9uZG5lc3MgPj0gNSAmJiByZWxhdGlvbnNoaXBzLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbXV0dWFsUmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3QuYWRkUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1thLCBiXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QucmVtb3ZlUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW2EsIGJdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBpZiAoYSA8IGIgJiYgbXV0dWFsUmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckVmZmVjdHMucHVzaChTaXR1YXRpb25VdGlscy5icmVha1VwKFthLCBiXSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyRWZmZWN0cy5wdXNoKGVmZmVjdClcbiAgICAgICAgcmV0dXJuIG90aGVyRWZmZWN0c1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJlYXRyaWNlQnJlYWt1cHMgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHN0YXRpYyBCUkVBS19VUF9BRlRFUiA9IDJcblxuICAgIHJlbGF0aW9uc2hpcExlbmd0aCA9IC0xXG4gICAgbG92ZXI6IEh1bWFuTmFtZSB8IG51bGwgPSBudWxsXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgY29uc3QgbG92ZXJzID0gU2l0dWF0aW9uVXRpbHMuZ2V0TG92ZXJzKEh1bWFuTmFtZS5CZWF0cmljZSwgY3VycmVudFN0YXRlKVxuICAgICAgICBjb25zdCBuZXdMb3ZlciA9IGxvdmVycy5sZW5ndGggPT0gMCA/IG51bGwgOiBsb3ZlcnNbMF1cblxuICAgICAgICBpZiAodGhpcy5sb3ZlciAhPT0gbmV3TG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpb25zaGlwTGVuZ3RoID0gLTFcbiAgICAgICAgICAgIHRoaXMubG92ZXIgPSBuZXdMb3ZlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBMZW5ndGgrK1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobG92ZXJzLmxlbmd0aCA8PSAxKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG92ZXIgIT0gbnVsbCAmJiB0aGlzLnJlbGF0aW9uc2hpcExlbmd0aCA+PSBCZWF0cmljZUJyZWFrdXBzLkJSRUFLX1VQX0FGVEVSKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5CZWF0cmljZSwgbG92ZXJzWzBdXSkuc2V0RGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIGBPaCBuby4uLiBCZWF0cmljZSBnb3QgaW50byBhIGJpZyBmaWdodCB3aXRoICR7bG92ZXJzWzBdfSwgYW5kIHRoZXkgYnJva2UgdXAuYFxuICAgICAgICAgICAgICAgICAgICArIGAgU2hlJ3MgYmVlbiBsb29raW5nIHJlYWxseSBkZXByZXNzZWQgc2luY2UuLi5gLFxuICAgICAgICAgICAgICAgICkuYWRkSHVtVGFncyhbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5UYWcuZGVwcmVzc2VkXV0pLFxuICAgICAgICAgICAgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbGV4QW5kQmVhdHJpY2VHZXREcnVuayBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGNvbnN0IHBlb3BsZVByZXNlbnQgPSB0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSlcbiAgICAgICAgaWYgKCFTaXR1YXRpb25VdGlscy5zdWJzZXQoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBwZW9wbGVQcmVzZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaXAuZ29Mb2NhdGlvbiAhPSBMb2NhdGlvbk5hbWUuRHJpbmspIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVhdHJpY2UgbXVzdCBiZSBzaW5nbGUsIGJ1dCBpdCdzIHN1ZmZpY2llbnQgZm9yIEFsZXgncyBsb3ZlciBub3QgdG8gYmUgcHJlc2VudFxuICAgICAgICBpZiAoU2l0dWF0aW9uVXRpbHMuZ2V0TG92ZXJzKEh1bWFuTmFtZS5CZWF0cmljZSwgY3VycmVudFN0YXRlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxleExvdmVyT25UcmlwID0gU2l0dWF0aW9uVXRpbHMuZ2V0U29tZW9uZU9uVHJpcFdpdGhUYWcodHJpcCwgSHVtYW5OYW1lLkFsZXgsIGN1cnJlbnRTdGF0ZSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKVxuICAgICAgICBpZiAoYWxleExvdmVyT25UcmlwKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKEh1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2UpXG4gICAgICAgICAgICAuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmNydXNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWxleExvdmVycyA9IFNpdHVhdGlvblV0aWxzLmdldExvdmVycyhIdW1hbk5hbWUuQWxleCwgY3VycmVudFN0YXRlKVxuXG4gICAgICAgIGlmIChhbGV4TG92ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxleCBpcyBzaW5nbGVcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgU2l0dWF0aW9uVXRpbHMuc3RhcnRUb0RhdGUoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJFbmNvdXJhZ2VkIGJ5IGFsY29ob2wsIEFsZXggYW5kIEJlYXRyaWNlIHJldmVhbGVkIHRoZWlyIHRydWUgZmVlbGluZ3MgdG93YXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiIG9uZSBhbm90aGVyISBBZnRlciBnb2luZyBob21lIHRvZ2V0aGVyIGF0IHRoZSBuaWdodCBvdXQgd2l0aCB5b3UsIHRoZXkgc3RhcnRlZCBkYXRpbmcuXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWxleCBoYXMgYSBsb3ZlclxuICAgICAgICAgICAgY29uc3QgbG92ZXIgPSBhbGV4TG92ZXJzWzBdXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5BbGV4LCBsb3Zlcl0pXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgRW5jb3VyYWdlZCBieSBhbGNvaG9sLCBBbGV4IGNoZWF0ZWQgb24gJHtsb3Zlcn0gd2l0aCBCZWF0cmljZS5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtsb3Zlcn0gZm91bmQgb3V0IGFuZCBicm9rZSB1cCB3aXRoIEFsZXguYClcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG92ZXIsIEh1bWFuTmFtZS5BbGV4XSwgLTJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgLTRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLllvdV0sIC0zXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZVJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmF3a2F3YXJkbmVzc10sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuYXdrYXdhcmRuZXNzXSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFcmljVlNBQW5kQiBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogXCJpbml0XCIgfCBcImFiRGF0aW5nXCIgfCBcImNlY2lsQ3J1c2hcIiB8IFwiZG9uZVwiID0gXCJpbml0XCJcbiAgICBwcml2YXRlIGFiVmlzaWJsZVN0YXJ0ZWREYXRpbmcgPSAwXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT0gXCJpbml0XCIpIHtcblxuICAgICAgICAgICAgaWYgKHRyaXAuYWxsUHJlc2VudChIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRXJpYykgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuaGF2ZU11dHVhbFJlbGF0aW9uc2hpcFRhZyhIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlLCBSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hYlZpc2libGVTdGFydGVkRGF0aW5nID0gdHJpcENvdW50XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFwiYWJEYXRpbmdcIlxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihcIkVyaWMgc2FpZCBzb21ldGhpbmcgYWJvdXQgQWxleCdzIGFuZCBCZWF0cmljZSdzIHJlbGF0aW9uc2hpcCBiZWluZyB1bm5hdHVyYWwgYW5kIHN0b3JtZWQgb2ZmLlwiKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCAtMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCAtMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkVyaWNdLCAtMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuRXJpY10sIC0yXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09IFwiYWJEYXRpbmdcIiAmJiB0cmlwQ291bnQgPj0gMiArIHRoaXMuYWJWaXNpYmxlU3RhcnRlZERhdGluZykge1xuICAgICAgICAgICAgaWYgKHRyaXAuYWxsUHJlc2VudChIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkNlY2lsKSAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5DZWNpbF0pID4gMyAmJiBjdXJyZW50U3RhdGUuZ2V0Rm9uZG5lc3MoW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkVyaWNdKSA+IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJjZWNpbENydXNoXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJFcmljIGFuZCBDZWNpbCBzZWVtIGF3ZnVsbHkgY2xvc2UsIGZvciBob3cgaGFyc2ggRXJpYyB3YXMgdG93YXJkcyBBbGV4IGFuZCBCZWF0cmljZS4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAuYWRkUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQ2VjaWxdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRXJpY10sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGVdLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkNlY2lsXSwgNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkVyaWNdLCA0XSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PSBcImNlY2lsQ3J1c2hcIiAmJiB0cmlwQ291bnQgPj0gMiArIHRoaXMuYWJWaXNpYmxlU3RhcnRlZERhdGluZykge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZS5oYXZlTXV0dWFsUmVsYXRpb25zaGlwVGFnKEh1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQ2VjaWwsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gXCJkb25lXCJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJPaCEgRXJpYyBtdXN0IGhhdmUgYmVlbiByZXByZXNzaW5nIHRoZXNlIGZlZWxpbmdzIGZvciBhIHdoaWxlLiBOb3cgdGhhdCBoZSdzIGRhdGluZyBDZWNpbCBoZSB3ZW50IHRvIGFwb2xvZ2l6ZSB0byBBbGV4IGFuZCBCZWF0cmljZS4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5CZWF0cmljZV0sIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5FcmljXSwgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuRXJpY10sIDJdLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQWxleF0sIFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5CZWF0cmljZV0sIFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlXSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlY2lsQ3J1c2hDb251bmRydW0gaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHByaXZhdGUgZmxhdmllQW5kRGFuQnJlYWt1cENvdW50ZXIgPSAwXG4gICAgcHJpdmF0ZSB0b2dldGhlcldhcyA9IGZhbHNlXG4gICAgcHJpdmF0ZSB0cmlnZ2VyZWQgPSBmYWxzZVxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKEh1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWUpXG4gICAgICAgIGNvbnN0IHRvZ2V0aGVyTm93ID0gcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpXG5cbiAgICAgICAgaWYgKHRvZ2V0aGVyTm93ID09PSBmYWxzZSAmJiB0aGlzLnRvZ2V0aGVyV2FzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXZpZUFuZERhbkJyZWFrdXBDb3VudGVyICs9IDFcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50cmlnZ2VyZWQgJiZcbiAgICAgICAgICAgIHRoaXMuZmxhdmllQW5kRGFuQnJlYWt1cENvdW50ZXIgPj0gMiAmJlxuICAgICAgICAgICAgY3VycmVudFN0YXRlLmdldEZvbmRuZXNzKFtIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQ2VjaWxdKSA+IDggJiZcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5nZXRPdXRSZWxhdGlvbnNoaXBzT2ZUeXBlKEh1bWFuTmFtZS5GbGF2aWUsIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcikpIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcmVkID0gdHJ1ZVxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJGbGF2aWUgaXMgc3RhcnRpbmcgdG8gc2VlIHRoYXQgQ2VjaWwgbWlnaHQgYmUgcmlnaHQgZm9yIGhlciBhZnRlciBhbGwhXCIpXG4gICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5DZWNpbF0sIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0sXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2V0aGVyV2FzID0gdG9nZXRoZXJOb3dcblxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEFsZXhBbmRDZWNpbCBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgZmlyZWQgPSBmYWxzZVxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGlmICh0aGlzLmZpcmVkKSByZXR1cm4gW11cbiAgICAgICAgY29uc3QgYSA9IEh1bWFuTmFtZS5BbGV4XG4gICAgICAgIGNvbnN0IGMgPSBIdW1hbk5hbWUuQ2VjaWxcblxuICAgICAgICBpZiAodHJpcC5hbGxBYnNlbnQoYSwgYylcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYSwgY10pID49IDdcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYywgYV0pID49IDdcbiAgICAgICAgICAgICYmIFNpdHVhdGlvblV0aWxzLmlzU2luZ2xlKGEsIGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgICAgICYmIFNpdHVhdGlvblV0aWxzLmlzU2luZ2xlKGMsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gW1NpdHVhdGlvblV0aWxzLnN0YXJ0VG9EYXRlKFthLCBjXSlcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJXaGlsZSB5b3Ugd2VyZSBvdXQgd2l0aCBvdGhlciBwZW9wbGUsIEFsZXggc3RhcnRlZCBkYXRpbmcgQ2VjaWwsXCJcbiAgICAgICAgICAgICAgICAgICAgKyBcIiBzaW5jZSB0aGV5IGZvdW5kIG91dCB0aGV5IGVuam95IGVhY2ggb3RoZXJzJyBjb21wYW55IHNvIG11Y2guXCIpXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXByZXNzaW9uIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuXG4gICAgICAgIGZvciAoY29uc3QgYSBvZiBjdXJyZW50U3RhdGUuZ2V0SHVtYW5OYW1lcygpKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlLmdldEh1bVRhZ3MoYSkuaGFzKEh1bWFuVGFnLmRlcHJlc3NlZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVNpdHVhdGlvblV0aWxzLmlzU2luZ2xlKGEsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGF2aW5nIGEgbG92ZXIgcmVtb3ZlcyBkZXByZXNzaW9uXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5yZW1vdmVIdW1UYWdzKFtbYSwgSHVtYW5UYWcuZGVwcmVzc2VkXV0pXG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGIgb2YgY3VycmVudFN0YXRlLmdldEh1bWFuTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT0gYikgY29udGludWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VGb25kbmVzcyhbW1thLCBiXSwgLTFdXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGJhZCBpZiBtdWx0aXBsZSBwZW9wbGUgaGF2ZSB0aGUgdGFnLCB3ZSBhc3N1bWUgaXQncyBqdXN0IEJlYXRyaWNlXG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5zZXREZXNjcmlwdGlvbihgJHthfSBpcyBkZXByZXNzZWQuLi4gaWYgb25seSBhIGZyaWVuZCBvZiBoZXJzIGNvdWxkIGNvbWZvcnQgaGVyLi4uYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW2VmZmVjdF1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMZWZ0T3V0V2l0aG91dENydXNoIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgZm9yIChjb25zdCBoIG9mIGN1cnJlbnRTdGF0ZS5nZXRIdW1hbk5hbWVzKCkpIHtcbiAgICAgICAgICAgIGlmICghdHJpcC5hbGxQcmVzZW50KGgpICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmdldE91dFJlbGF0aW9uc2hpcHNPZlR5cGUoaCwgUmVsYXRpb25zaGlwVGFnLmNydXNoKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFN0YXRlLmdldE91dFJlbGF0aW9uc2hpcHNPZlR5cGUoaCwgUmVsYXRpb25zaGlwVGFnLmNydXNoKS5ldmVyeShyZWwgPT4gdHJpcC5hbGxQcmVzZW50KHJlbC5wZW9wbGVbMV0pKSkge1xuMlxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNpdHVhdGlvbkVmZmVjdCgpLmNoYW5nZUZvbmRuZXNzKFtbW2gsIEh1bWFuTmFtZS5Zb3VdLCAtMV1dKV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4dHJvdmVydHNJbnRyb3ZlcnRzIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBTaXR1YXRpb25FZmZlY3RbXSB7XG4gICAgICAgIGxldCByZXN1bHRzID0gbmV3IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4oKVxuICAgICAgICBpZiAodHJpcC5nb1Blb3BsZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5lZmZlY3REb2VzbnRMaWtlKEh1bWFuVGFnLmludHJvdmVydCwgdHJpcCwgY3VycmVudFN0YXRlLCBcInNvIG1hbnlcIikpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaXAuZ29QZW9wbGUubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmVmZmVjdERvZXNudExpa2UoSHVtYW5UYWcuZXh0cm92ZXJ0LCB0cmlwLCBjdXJyZW50U3RhdGUsIFwidGhpcyBmZXdcIikpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0c1xuICAgIH1cblxuICAgIHByaXZhdGUgZWZmZWN0RG9lc250TGlrZSh0YWc6IEh1bWFuVGFnLmludHJvdmVydCB8IEh1bWFuVGFnLmV4dHJvdmVydCwgdHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIG1zZzogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IHJlbGV2YW50UGVvcGxlID0gdHJpcC5nb1Blb3BsZS5maWx0ZXIocGVyID0+IGN1cnJlbnRTdGF0ZS5nZXRIdW1UYWdzKHBlci5uYW1lKS5oYXModGFnKSlcbiAgICAgICAgaWYgKHRhZyA9PSBIdW1hblRhZy5leHRyb3ZlcnQpIHtcbiAgICAgICAgICAgIHJlbGV2YW50UGVvcGxlID0gcmVsZXZhbnRQZW9wbGUuZmlsdGVyKHBlciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0cmlwLmdvUGVvcGxlLnNvbWUocFBlciA9PiBcbiAgICAgICAgICAgICAgICAgICAgKHBQZXIubmFtZSAhPSBwZXIubmFtZSkgJiYgXG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZS5oYXZlTXV0dWFsUmVsYXRpb25zaGlwVGFnKHBlci5uYW1lLCBwUGVyLm5hbWUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaCkgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUuaGF2ZU11dHVhbFJlbGF0aW9uc2hpcFRhZyhwZXIubmFtZSwgcFBlci5uYW1lLCBSZWxhdGlvbnNoaXBUYWcubG92ZXIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWxldmFudFBlb3BsZS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZvbmRuZXNzQ2hhbmdlcyA9IHJlbGV2YW50UGVvcGxlLm1hcChyZWwgPT4gW1tyZWwubmFtZSwgSHVtYW5OYW1lLllvdV0sIC0zXSkgYXMgQXJyYXk8W0NvdXBsZSwgbnVtYmVyXT5cbiAgICAgICAgbGV0IHNpdEVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKGZvbmRuZXNzQ2hhbmdlcylcbiAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgJHtIdW1hblV0aWxzLnBlb3BsZVRvU3RyaW5nKHJlbGV2YW50UGVvcGxlLm1hcChwID0+IHAubmFtZSkpfSBgXG4gICAgICAgICAgICAgICAgKyBgJHtyZWxldmFudFBlb3BsZS5sZW5ndGggPiAxID8gXCJ3ZXJlbid0XCIgOiBcIndhc24ndFwifSB0b28gaGFwcHkgdG8gaGFuZyBvdXQgd2l0aCBgXG4gICAgICAgICAgICAgICAgKyBgJHt0YWcgPT0gSHVtYW5UYWcuaW50cm92ZXJ0ID8gXCJ0aGlzIG1hbnlcIiA6IFwidGhpcyBmZXdcIn0gcGVvcGxlLmApXG4gICAgICAgIHJldHVybiBzaXRFZmZlY3RcbiAgICB9XG5cbn1cblxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tICcuL21hbmFnZW1lbnQvYm9hcmQnXG5pbXBvcnQgeyBMb2FkaW5nU2NlbmUgfSBmcm9tICcuL3V0aWxzL2xvYWRpbmcnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnT3Zlcmx5IEZyYWdpbGUgUmVsYXRpb25zaGlwcycsXG4gXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuIFxuICBzY2FsZToge1xuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gIH0sXG4gXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4JyxcblxuICBzY2VuZTogIFtMb2FkaW5nU2NlbmUsIEJvYXJkU2NlbmVdLFxufTtcbiBcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGxldmVscyB9IGZyb20gJy4uL2NvbnRlbnQvbGV2ZWxzJ1xuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tICcuLi9tb2RlbC90cmlwU3VtbWFyeSdcbmltcG9ydCB7IFBob25lU3RhZ2UgfSBmcm9tICcuL3Bob25lX3N0YWdlJ1xuaW1wb3J0IHsgSHVtYW5TdGFnZSB9IGZyb20gJy4vaHVtYW5fc3RhZ2UnXG5pbXBvcnQgeyBMb2NhdGlvblN0YWdlIH0gZnJvbSAnLi9sb2NhdGlvbl9zdGFnZSdcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gJy4uL2NvbnRlbnQvbG9jYXRpb25zJ1xuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgTW9kYWxEaWFsb2cgfSBmcm9tICcuLi91dGlscy9tb2RhbCdcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmV4cG9ydCBjbGFzcyBCb2FyZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBwcml2YXRlIHRyaXBGYWRlcj86IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIHRyYW5zaXRpb25GYWRlcj86IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIGluZm9UZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBwcml2YXRlIGxldmVsc1RleHQ/OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIHByaXZhdGUgbGV2ZWxDb3VudDogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgbGV2ZWw6IExldmVsXG5cbiAgICBwdWJsaWMgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5XG4gICAgcHVibGljIHBob25lPzogUGhvbmVTdGFnZVxuICAgIHByaXZhdGUgaHVtYW5TdGFnZT86IEh1bWFuU3RhZ2VcbiAgICBwcml2YXRlIGxvY2F0aW9uU3RhZ2U/OiBMb2NhdGlvblN0YWdlXG4gICAgdGVtcFBlb3BsZVBvcnRyYWl0cz86IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGtleTogJ21hbmFnZW1lbnQnLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsc1swXVxuICAgICAgICB0aGlzLnRyaXBTdW1tYXJ5ID0gbmV3IFRyaXBTdW1tYXJ5KHRoaXMubGV2ZWwuaHVtYW5zWzBdKVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25GYWRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldERlcHRoKDIwMDEpXG5cbiAgICAgICAgbGV0IG11c2ljID0gdGhpcy5zb3VuZC5hZGQoJ21haW5fbXVzaWMnLCB7XG4gICAgICAgICAgICB2b2x1bWU6IDAuNSxcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIH0pLnBsYXkoKVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5hZGQuaW1hZ2UoMCwgMCwgJ2JvYXJkX2JhY2tncm91bmQnKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuXG4gICAgICAgIHRoaXMudHJpcEZhZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDgwMCwgNTAwLCAweDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuZ29CYWNrKCkpXG4gICAgICAgIHRoaXMuaW5mb1RleHQgPSB0aGlzLmFkZC50ZXh0KDQwMCwgMTQwLCAnJywgeyBmaWxsOiAnI2ZmZicsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoNTYwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDApXG5cbiAgICAgICAgdGhpcy5sZXZlbHNUZXh0ID0gdGhpcy5hZGQudGV4dCgyNzAsIDIwLCAnd2VlazogMScsIHsgZmlsbDogJyMwMDAnLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcyMHB4JyB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDEpXG5cbiAgICAgICAgdGhpcy5sb2NhdGlvblN0YWdlID0gbmV3IExvY2F0aW9uU3RhZ2UodGhpcywgdGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlID0gbmV3IEh1bWFuU3RhZ2UodGhpcywgdGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5waG9uZSA9IG5ldyBQaG9uZVN0YWdlKHRoaXMpXG5cbiAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50cmFuc2l0aW9uRmFkZXIsXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMucGhvbmU/LmRpc3BsYXkodGhpcy5sZXZlbC5odW1hbnNbMF0sIDApXG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZT8ucmVkcmF3TGluZXModGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlPy5kaXNwbGF5KHRoaXMubGV2ZWwuaHVtYW5zWzBdLCAwKVxuICAgIH1cblxuICAgIHB1YmxpYyBnb091dChsb2NhdGlvbjogTG9jYXRpb25OYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLnRyaXBTdW1tYXJ5LmdvUGVvcGxlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBsZXQgdHV0b3JpYWwgPSAnU2VsZWN0IHNvbWUgb2YgeW91ciBmcmllbmRzIHRvIGpvaW4geW91LidcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSAnSGlraW5nJykge1xuICAgICAgICAgICAgICAgIG5ldyBNb2RhbERpYWxvZyh0aGlzLCBgWW91IGNhbid0IGdvIGhpa2luZyBhbG9uZS5cXG4ke3R1dG9yaWFsfWApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09ICdCb3dsaW5nJykge1xuICAgICAgICAgICAgICAgIG5ldyBNb2RhbERpYWxvZyh0aGlzLCBgWW91IGNhbid0IGdvIGJvd2xpbmcgYWxvbmUuXFxuJHt0dXRvcmlhbH1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiA9PSAnRHJpbmtpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV3IE1vZGFsRGlhbG9nKHRoaXMsIGBZb3UgY2FuJ3QgZ28gZHJpbmtpbmcgYWxvbmUuXFxuJHt0dXRvcmlhbH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaXBTdW1tYXJ5LnByZXBhcmUobG9jYXRpb24pXG4gICAgICAgIGxldCBtZXNzYWdlID0gdGhpcy5sZXZlbC5nb091dCh0aGlzLCB0aGlzLnRyaXBTdW1tYXJ5KVxuICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMubG9jYXRpb25TdGFnZSEuZW5hYmxlKGZhbHNlKVxuICAgICAgICB0aGlzLmluZm9UZXh0IS5zZXRUZXh0KG1lc3NhZ2UpXG4gICAgICAgIHRoaXMudGVtcFBlb3BsZVBvcnRyYWl0cyA9IFV0aWxzLmRyYXdQb3J0cmFpdHModGhpcy50cmlwU3VtbWFyeS5nb1Blb3BsZSwgdGhpcylcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLnRlbXBQZW9wbGVQb3J0cmFpdHMuY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMuaW5mb1RleHQsIHRoaXMudHJpcEZhZGVyXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcEZhZGVyIS5pbnB1dC5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25TdGFnZSEuZW5hYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5odW1hblN0YWdlIS5ibGVhY2hQZW9wbGUoKVxuICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLmluZm9UZXh0LCB0aGlzLnRyaXBGYWRlcl0sXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtZXNzYWdlIHF1ZXVlIGhhcyBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1lc3NhZ2VRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgTW9kYWxEaWFsb2codGhpcywgdGhpcy5tZXNzYWdlUXVldWVbMF0sIHRoaXMubWVzc2FnZVF1ZXVlWzFdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3IobGV0IGNoaWxkIG9mIHRoaXMudGVtcFBlb3BsZVBvcnRyYWl0cyEuY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBQZW9wbGVQb3J0cmFpdHMhLmRlc3Ryb3koZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy50cmlwU3VtbWFyeSA9IG5ldyBUcmlwU3VtbWFyeSh0aGlzLmxldmVsLmh1bWFuc1swXSlcbiAgICAgICAgdGhpcy5waG9uZT8uZGlzcGxheSh0aGlzLmxldmVsLmh1bWFuc1swXSwgMClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlPy5yZWRyYXdMaW5lcyh0aGlzLmxldmVsKVxuICAgICAgICB0aGlzLmh1bWFuU3RhZ2U/LmRpc3BsYXkodGhpcy5sZXZlbC5odW1hbnNbMF0sIDApXG5cbiAgICAgICAgdGhpcy5sZXZlbENvdW50ICs9IDFcbiAgICAgICAgdGhpcy5sZXZlbHNUZXh0Py5zZXRUZXh0KGB3ZWVrOiAke3RoaXMubGV2ZWxDb3VudH1gKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlPzogW3N0cmluZywgKCkgPT4gdm9pZF0gPSB1bmRlZmluZWRcbiAgICBwdWJsaWMgZmFpbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gKzEgYmVjYXVzZSB0dXJucyBhcmUgMC1iYXNlZCwgd2Vla3MgYXJlbid0XG4gICAgICAgIHRoaXMubWVzc2FnZVF1ZXVlID0gW21lc3NhZ2UgKyBgXFxuWW91IGtlcHQgdGhlIGZyaWVuZHNoaXAgbmV0d29yayBhbGl2ZSBmb3IgJHsxICsgdGhpcy5sZXZlbENvdW50fSB3ZWVrc2AsICgpID0+IHsgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpIH1dXG4gICAgfVxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL21vZGVsL2xldmVsXCJcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tIFwiLi9ib2FyZFwiXG5pbXBvcnQgeyBIdW1hbiB9IGZyb20gXCIuLi9tb2RlbC9odW1hblwiXG5pbXBvcnQgeyByZWxhdGlvbnNoaXBUYWdNYXAgfSBmcm9tIFwiLi4vY29udGVudC9lbnRpdHlUYWdzXCJcbmltcG9ydCB7IERFRkFVTFRfRk9ORE5FU1MgfSBmcm9tIFwiLi4vbW9kZWwvcGVvcGxlR3JhcGhcIlxuXG5leHBvcnQgY2xhc3MgSHVtYW5TdGFnZSB7XG4gICAgcHJpdmF0ZSBhbGxQZW9wbGVUZXh0czogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLlRleHQ+ID0gW11cbiAgICBwcml2YXRlIGFsbFBlb3BsZUNpcmNsZXM6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5FbGxpcHNlPiA9IFtdXG4gICAgcHJpdmF0ZSBhbGxQZW9wbGVMaW5lczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwPiA9IFtdXG4gICAgcHJpdmF0ZSBhbGxQZW9wbGVXYXJuaW5nOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBbXVxuICAgIHByaXZhdGUgVEVYVF9BTFBIQV9PSyA9IDFcbiAgICBwcml2YXRlIFRFWFRfQUxQSEFfQkQgPSAwLjNcbiAgICBwcml2YXRlIENJUkNMRV9BTFBIQV9PSyA9IDAuMlxuICAgIHByaXZhdGUgQ0lSQ0xFX0FMUEhBX0JEID0gMFxuICAgIHByaXZhdGUgV0FSTklOR19BTFBIQV9PSyA9IDAuOVxuICAgIHByaXZhdGUgV0FSTklOR19BTFBIQV9CRCA9IDBcbiAgICBwcml2YXRlIHBvc2l0aW9uczogQXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9PlxuICAgIHByaXZhdGUgcG9zaXRpb25zSW5uZXI6IEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NlbmU6IEJvYXJkU2NlbmUsIHByaXZhdGUgbGV2ZWw6IExldmVsKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSA0NTBcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IDE4MFxuICAgICAgICBjb25zdCByYWRpdXMgPSAxNTBcbiAgICAgICAgY29uc3QgcmFkaXVzSW5uZXIgPSAxNDVcblxuICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IGxldmVsLmh1bWFucy5tYXAoKF8sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIChpICsgMC41KSAvIGxldmVsLmh1bWFucy5sZW5ndGhcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgICAgICB5OiBjZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucG9zaXRpb25zSW5uZXIgPSBsZXZlbC5odW1hbnMubWFwKChfLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiAoaSArIDAuNSkgLyBsZXZlbC5odW1hbnMubGVuZ3RoXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXNJbm5lcixcbiAgICAgICAgICAgICAgICB5OiBjZW50ZXJZICsgTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzSW5uZXIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBsZXZlbC5odW1hbnMpIHtcbiAgICAgICAgICAgIGxldCBodW1hbiA9IGxldmVsLmh1bWFuc1tpXVxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uc1tpXVxuXG5cbiAgICAgICAgICAgIGxldCBjaXJjbGUgPSBzY2VuZS5hZGQuZWxsaXBzZSgwLCAwLCA4MCwgODAsIDB4MmUyZTJlKVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgICAgICAgICAgLnNldEFscGhhKChOdW1iZXIoaSkgPT0gMCA/IHRoaXMuQ0lSQ0xFX0FMUEhBX09LIDogdGhpcy5DSVJDTEVfQUxQSEFfQkQpKVxuXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ3BvcnRyYWl0X3NtYWxsJywgaSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoaHVtYW4sIE51bWJlcihpKSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KGxldmVsLmh1bWFuc1swXSwgMClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHNjZW5lLmFkZC50ZXh0KDAsIDAsIGAke2h1bWFuLm5hbWV9YCwge1xuICAgICAgICAgICAgICAgIGZpbGw6ICcjMWMxYzFjJyxcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnUm9ib3RvJyxcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuc2V0QWxwaGEoTnVtYmVyKGkpID09IDAgPyB0aGlzLlRFWFRfQUxQSEFfT0sgOiB0aGlzLlRFWFRfQUxQSEFfQkQpXG5cbiAgICAgICAgICAgIGxldCB3YXJuaW5nID0gc2NlbmUuYWRkLnRleHQoMCwgMCwgJyEnLCB7Y29sb3I6ICcjZmYwMDAwJywgZm9udFNpemU6ICczM3B4J30pXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgICAgICAuc2V0QWxwaGEodGhpcy5XQVJOSU5HX0FMUEhBX09LKVxuXG4gICAgICAgICAgICBzY2VuZS5hZGQuZ3JvdXAoW2ltYWdlLCB0ZXh0LCBjaXJjbGUsIHdhcm5pbmddKS5zZXRYWShwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuXG4gICAgICAgICAgICAvLyBUQkggSSBoYXZlIG5vIGlkZWEgd2h5IHRoaXMgaXMgbm90IHJlbGF0aXZlIHRvIHRoZSBncm91cCwgYnV0IHdoYXRldnNcbiAgICAgICAgICAgIHRleHQuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIDEwMCArIDEwKVxuICAgICAgICAgICAgY2lyY2xlLnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyA1MCArIDEwKVxuICAgICAgICAgICAgaW1hZ2Uuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIDQ1ICsgMTApXG4gICAgICAgICAgICB3YXJuaW5nLnNldFBvc2l0aW9uKHBvc2l0aW9uLnggKyAxOSwgcG9zaXRpb24ueSArIDMwKVxuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICE9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUudHJpcFN1bW1hcnkuZmxpcEdvUGVvcGxlKGh1bWFuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLlRFWFRfQUxQSEFfQkQsIHRvOiB0aGlzLlRFWFRfQUxQSEFfT0sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNpcmNsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLkNJUkNMRV9BTFBIQV9CRCwgdG86IHRoaXMuQ0lSQ0xFX0FMUEhBX09LIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuVEVYVF9BTFBIQV9PSywgdG86IHRoaXMuVEVYVF9BTFBIQV9CRCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2lyY2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuQ0lSQ0xFX0FMUEhBX09LLCB0bzogdGhpcy5DSVJDTEVfQUxQSEFfQkQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRleHQub24oJ3BvaW50ZXJkb3duJywgb25DbGljaylcbiAgICAgICAgICAgICAgICBjaXJjbGUub24oJ3BvaW50ZXJkb3duJywgb25DbGljaylcbiAgICAgICAgICAgICAgICBpbWFnZS5vbigncG9pbnRlcmRvd24nLCBvbkNsaWNrKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVRleHRzLnB1c2godGV4dClcbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlQ2lyY2xlcy5wdXNoKGNpcmNsZSlcbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlV2FybmluZy5wdXNoKHdhcm5pbmcpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZHJhd0xpbmVzKGxldmVsKVxuICAgIH1cblxuICAgIHB1YmxpYyBibGVhY2hQZW9wbGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5sZXZlbC5odW1hbnMpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlVGV4dHNbaV0uc2V0QWxwaGEodGhpcy5URVhUX0FMUEhBX0JEKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlQ2lyY2xlc1tpXS5zZXRBbHBoYSh0aGlzLkNJUkNMRV9BTFBIQV9CRClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5KGh1bWFuOiBIdW1hbiwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuYWxsUGVvcGxlTGluZXMpIHtcbiAgICAgICAgICAgIC8vIEkgdmVyeSBtdWNoIGFkbWl0IHRoYXQgdGhpcyBpcyBzdXBlciBzbG93IGFuZCB1bm9wdGltaXplZFxuICAgICAgICAgICAgLy8gQlVUIFdURiBJUyBOT1QgR1JPVVAgQUxQSEEgRVhQT1NFRCBQVUJMSUNMWVxuICAgICAgICAgICAgaWYgKE51bWJlcihpKSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYWxsUGVvcGxlTGluZXNbaV0uY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAoY2hpbGQgYXMgUGhhc2VyLkdhbWVPYmplY3RzLkxpbmUpLmFscGhhLCB0bzogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYWxsUGVvcGxlTGluZXNbaV0uY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAoY2hpbGQgYXMgUGhhc2VyLkdhbWVPYmplY3RzLkxpbmUpLmFscGhhLCB0bzogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZS5waG9uZSEuZGlzcGxheShodW1hbiwgTnVtYmVyKGluZGV4KSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpbmVhclNjYWxlQmxhY2sobGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIGxldmVsIGlzIDAgdG8gMVxuICAgICAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChsZXZlbCoyNTUqMjU1KjI1NSkgKyBNYXRoLnJvdW5kKGxldmVsKjI1NSkgKyBNYXRoLnJvdW5kKGxldmVsKjI1NSlcblxuICAgICAgICAvLyBhaW50IGdvdCB0aW1lIHRvIGRvIHRoaXMgcHJvcGVybHlcbiAgICAgICAgLy8gbGV2ZWwgaXMgMCB0byAxMFxuICAgICAgICBpZiAobGV2ZWwgPD0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIDB4ZGUwMDAwXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gMikge1xuICAgICAgICAgICAgcmV0dXJuIDB4Y2YzNjM2XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgcmV0dXJuIDB4ZDQ2YzZjXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIDB4YjA4Nzg3XG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIDB4YTNhM2EzXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNikge1xuICAgICAgICAgICAgcmV0dXJuIDB4OTNhMzkwXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gNykge1xuICAgICAgICAgICAgcmV0dXJuIDB4NzNiYTdhXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gOCkge1xuICAgICAgICAgICAgcmV0dXJuIDB4NjJiZDZiXG4gICAgICAgIH0gZWxzZSBpZiAobGV2ZWwgPD0gOSkge1xuICAgICAgICAgICAgcmV0dXJuIDB4M2JiODQ3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMHgwMGRlMTNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWRyYXdMaW5lcyhsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgZm9yIChsZXQgZyBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzKSB7XG4gICAgICAgICAgICBnLmRlc3Ryb3kodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFsbFBlb3BsZUxpbmVzID0gW11cblxuICAgICAgICBsZXQgcGVvcGxlR3JhcGggPSBsZXZlbC5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaFxuICAgICAgICBmb3IgKGxldCBoaTEgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICBsZXQgaHVtYW4xID0gbGV2ZWwuaHVtYW5zW2hpMV1cbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKClcbiAgICAgICAgICAgICAgICAuc2V0WFkoMCwgNTApXG4gICAgICAgICAgICBmb3IgKGxldCBoaTIgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGh1bWFuMiA9IGxldmVsLmh1bWFuc1toaTJdXG4gICAgICAgICAgICAgICAgaWYgKGhpMSA9PSBoaTIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZndcbiAgICAgICAgICAgICAgICBsZXQgeW91Q2hhbmdlID0gaHVtYW4xLm5hbWUgPT0gJ1lvdSdcbiAgICAgICAgICAgICAgICBpZiAoeW91Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBodW1hbjJcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4yID0gaHVtYW4xXG4gICAgICAgICAgICAgICAgICAgIGh1bWFuMSA9IHRtcFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB0YWdzID0gQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgLmZyb20ocGVvcGxlR3JhcGguZ2V0UmVsVGFncyhbaHVtYW4xLm5hbWUsIGh1bWFuMi5uYW1lXSkpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHJlbGF0aW9uc2hpcFRhZ01hcC5oYXMoeCkpXG4gICAgICAgICAgICAgICAgbGV0IGZvbmRuZXNzID0gcGVvcGxlR3JhcGguZ2V0Rm9uZG5lc3MoW2h1bWFuMS5uYW1lLCBodW1hbjIubmFtZV0pXG5cbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLnNjZW5lLmFkZC5ncmFwaGljcygpXG5cbiAgICAgICAgICAgICAgICBpZiAoZm9uZG5lc3MgIT0gREVGQVVMVF9GT05ETkVTUyB8fCB0YWdzLmxlbmd0aCAhPSAwIHx8IHlvdUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZlggPSAodGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnggLSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZZID0gKHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS55IC0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLnkpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmWE4gPSBkaWZmWCAvIE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZZTiA9IGRpZmZZIC8gTWF0aC5zcXJ0KGRpZmZYICogZGlmZlggKyBkaWZmWSAqIGRpZmZZKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMubGluZWFyU2NhbGVCbGFjayhmb25kbmVzcylcblxuICAgICAgICAgICAgICAgICAgICBsZXQgeDEgPSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueCAtIDQ1ICogZGlmZlhOXG4gICAgICAgICAgICAgICAgICAgIGxldCB5MSA9IHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS55ICsgNjAgLSA0NSAqIGRpZmZZTlxuICAgICAgICAgICAgICAgICAgICBsZXQgeDIgPSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueCArIDQ1ICogZGlmZlhOXG4gICAgICAgICAgICAgICAgICAgIGxldCB5MiA9IHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS55ICsgNjAgKyA0NSAqIGRpZmZZTlxuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuc2NlbmUuYWRkLmxpbmUoMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxLCB5MSwgeDIsIHkyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0TGluZVdpZHRoKDIpXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmFkZChsaW5lKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyaWFuZ2xlID0gdGhpcy5zY2VuZS5hZGQudHJpYW5nbGUoeW91Q2hhbmdlID8geDEgOiB4MiwgeW91Q2hhbmdlID8geTEgOiB5MiwgLTEwLCAwLCAxMCwgMCwgMCwgMTAsIGNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFJvdGF0aW9uKE1hdGguYXRhbjIoeTIgLSB5MSwgeDIgLSB4MSkgLSBNYXRoLlBJIC8gMiArICh5b3VDaGFuZ2UgPyBNYXRoLlBJIDogMCkpXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmFkZCh0cmlhbmdsZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHRhZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9IHRhZ3NbaV1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2Z1ggPSAodGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnggKyB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueCkgLyAyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdmdZID0gKHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS55ICsgdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLnkpIC8gMiArIDYwXG4gICAgICAgICAgICAgICAgICAgIGxldCBzeW1ib2wgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShhdmdYICsgKE51bWJlcihpKSAtIHRhZ3MubGVuZ3RoIC8gMiArIDAuNCkgKiAyNywgYXZnWSwgJ3JlbF90YWdzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRGcmFtZSh0YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0RGlzcGxheVNpemUoMjUsIDI1KVxuICAgICAgICAgICAgICAgICAgICBncm91cC5hZGQoc3ltYm9sKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBiYWNrIFxuICAgICAgICAgICAgICAgIGlmICh5b3VDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcCA9IGh1bWFuMlxuICAgICAgICAgICAgICAgICAgICBodW1hbjIgPSBodW1hbjFcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4xID0gdG1wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXAuc2V0QWxwaGEoMClcbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlTGluZXMucHVzaChncm91cClcblxuXG5cbiAgICAgICAgICAgIGxldCBmb25kbmVzc0JhZCA6IGJvb2xlYW4gPSB0aGlzLmxldmVsLmh1bWFucy5tYXAoXG4gICAgICAgICAgICAgICAgeCA9PiB4Lm5hbWUgPT0gaHVtYW4xLm5hbWUgPyAxMCA6IHRoaXMubGV2ZWwuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0Rm9uZG5lc3MoW2h1bWFuMS5uYW1lLCB4Lm5hbWVdKVxuICAgICAgICAgICAgKS5zb21lKHggPT4geCA8PSAyKVxuICAgICAgICAgICAgdGhpcy5hbGxQZW9wbGVXYXJuaW5nW2hpMV0uc2V0QWxwaGEoZm9uZG5lc3NCYWQgPyB0aGlzLldBUk5JTkdfQUxQSEFfT0sgOiB0aGlzLldBUk5JTkdfQUxQSEFfQkQpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9tb2RlbC9sZXZlbFwiXG5pbXBvcnQgeyBCb2FyZFNjZW5lIH0gZnJvbSBcIi4vYm9hcmRcIlxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TdGFnZSB7XG4gICAgcHJpdmF0ZSBhbGxMb2NhdGlvbkltYWdlOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U+ID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCb2FyZFNjZW5lLCBsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgLy8gc2NlbmUuYWRkLnJlY3RhbmdsZSg2ODAsIDAsIDEyMCwgNTAwLCAweGNjY2NjYylcbiAgICAgICAgLy8gICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgbGV0IHRleHQgPSBzY2VuZS5hZGQudGV4dCg2ODksIDI1LCAnQWN0aXZpdHknLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBsZXZlbC5sb2NhdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGxldmVsLmxvY2F0aW9uc1tpXVxuICAgICAgICAgICAgbGV0IGltZyA9IHNjZW5lLmFkZC5pbWFnZSg2ODIsIDcwICsgTnVtYmVyKGkpICogMTM1LCAnbG9jYXRpb25fdGh1bWInKVxuICAgICAgICAgICAgICAgIC5zZXRGcmFtZShpKVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgLnNldERpc3BsYXlTaXplKDkwLCA5MClcbiAgICAgICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5nb091dChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUudHJpcFN1bW1hcnkuZ29Mb2NhdGlvbiA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYWxsTG9jYXRpb25JbWFnZS5wdXNoKGltZylcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoNzI1LCA4NSArIE51bWJlcihpKSAqIDEzNSArIDkwLCBgJHtsb2NhdGlvbn1gLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nIH0pXG4gICAgICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgICAgIC5zZXRXb3JkV3JhcFdpZHRoKDEyMClcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBmb3IgKGxldCBpbWcgb2YgdGhpcy5hbGxMb2NhdGlvbkltYWdlKSB7XG4gICAgICAgICAgICBpbWcuaW5wdXQuZW5hYmxlZCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tICcuLi9tb2RlbC9odW1hbidcbmltcG9ydCB7IGh1bWFuVGFnTWFwLCByZWxhdGlvbnNoaXBUYWdNYXAsIGh1bWFuVGFnRGlzcGxheSB9IGZyb20gJy4uL2NvbnRlbnQvZW50aXR5VGFncydcbmltcG9ydCB7IEh1bWFuTmFtZSwgSHVtYW5CaW8gfSBmcm9tICcuLi9jb250ZW50L2h1bWFucydcblxuZXhwb3J0IGNsYXNzIFBob25lU3RhZ2Uge1xuICAgIHByaXZhdGUgcG9ydHJhaXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICAgIHByaXZhdGUgaW5mb1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgcHJpdmF0ZSBuYW1lVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgICAgICAvLyBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDI0MCwgNTAwLCAweGFhYWFhYSlcbiAgICAgICAgLy8gICAgIC5zZXRPcmlnaW4oMCwgMClcblxuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gc2NlbmUuYWRkLmltYWdlKDIwLCAyMCwgJ3BvcnRyYWl0X2JpZycpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgdGhpcy5uYW1lVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDExNSwgMjU1LCAnJywgeyBmaWxsOiAnYmxhY2snLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcyMHB4JyB9KVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoMTkwKVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDI1LCAyNzAsICcnLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzE0cHgnIH0pXG4gICAgICAgICAgICAuc2V0V29yZFdyYXBXaWR0aCgxOTApXG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXkoaHVtYW46IEh1bWFuLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQuc2V0RnJhbWUoaW5kZXgpXG4gICAgICAgIGxldCBodW1TdHJpbmcgPSBBcnJheS5mcm9tKGh1bWFuLnRhZ3MpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4gaHVtYW5UYWdNYXAuaGFzKHgpICYmIGh1bWFuVGFnRGlzcGxheS5oYXMoeCkpXG4gICAgICAgICAgICAubWFwKCh4KSA9PiBodW1hblRhZ01hcC5nZXQoeCkpXG4gICAgICAgICAgICAuam9pbignLCAnKVxuXG4gICAgICAgIC8vIFRoaXMgY291bGQgYmUgcGVyaGFwcyBkb25lIGluIGEgZnVuY3Rpb25hbCB3YXksIGJ1dCB0aGlzIHNlZW1zIG1vcmUgcmVhZGFibGVcbiAgICAgICAgbGV0IHJlbFN0cmluZyA9IFtdXG4gICAgICAgIGZvciAobGV0IHJlbGF0aW9uc2hpcCBvZiBodW1hbi5yZWxhdGlvbnNoaXBzKSB7XG4gICAgICAgICAgICBsZXQgcmVsU3RyaW5nSW5kaXZpZHVhbDogQXJyYXk8c3RyaW5nPiA9IFtdXG4gICAgICAgICAgICByZWxhdGlvbnNoaXAudGFncy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcFRhZ01hcC5oYXMoeCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsU3RyaW5nSW5kaXZpZHVhbC5wdXNoKHJlbGF0aW9uc2hpcFRhZ01hcC5nZXQoeCkgYXMgc3RyaW5nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBpZiAocmVsU3RyaW5nSW5kaXZpZHVhbC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIHJlbFN0cmluZy5wdXNoKGAke3JlbGF0aW9uc2hpcC5wZW9wbGVbMV19OiAke3JlbFN0cmluZ0luZGl2aWR1YWwuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgYmlvU3RyaW5nID0gSHVtYW5CaW9baW5kZXhdXG5cbiAgICAgICAgdGhpcy5uYW1lVGV4dC5zZXRUZXh0KEh1bWFuTmFtZVtodW1hbi5uYW1lXSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dC5zZXRUZXh0KGAke2h1bVN0cmluZ31cXG5cXG4ke2Jpb1N0cmluZ31cXG5cXG4ke3JlbFN0cmluZy5qb2luKCdcXG4nKX1gLnJlcGxhY2UoL15cXG5cXG4vLCAnJykpXG4gICAgfVxufSIsImltcG9ydCB7IFNpdHVhdGlvbiwgU2l0dWF0aW9uRWZmZWN0IH0gZnJvbSBcIi4vc2l0dWF0aW9uXCJcbmltcG9ydCB7IFBlb3BsZUdyYXBoIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi90cmlwU3VtbWFyeVwiXG5cbmV4cG9ydCBjbGFzcyBGcmllbmRzaGlwTWFuYWdlciB7XG4gICAgcHJpdmF0ZSB0cmlwQ291bnQ6IG51bWJlclxuICAgIHByaXZhdGUgc2l0dWF0aW9uQWRkQ2FsZW5kYXI6IE1hcDxudW1iZXIsIFNpdHVhdGlvbj5cblxuICAgIHB1YmxpYyBzaXR1YXRpb25zOiBTaXR1YXRpb25bXVxuICAgIHB1YmxpYyBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGhcblxuICAgIGNvbnN0cnVjdG9yKHNpdHVhdGlvbnM6IFNpdHVhdGlvbltdLCBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGgpIHtcbiAgICAgICAgdGhpcy50cmlwQ291bnQgPSAwXG4gICAgICAgIHRoaXMuc2l0dWF0aW9uQWRkQ2FsZW5kYXIgPSBuZXcgTWFwKClcblxuICAgICAgICB0aGlzLnNpdHVhdGlvbnMgPSBzaXR1YXRpb25zXG4gICAgICAgIHRoaXMucGVvcGxlR3JhcGggPSBwZW9wbGVHcmFwaFxuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseU1lZXRpbmcodHJpcDogVHJpcFN1bW1hcnkpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgLy8gdXBkYXRlIHN5c3RlbSB3aXRoIG5ld2x5IGFkZGVkIHNpdHVhdGlvbnNcbiAgICAgICAgbGV0IG5ld1NpdEZvclRoaXNNZWV0aW5nID0gdGhpcy5zaXR1YXRpb25BZGRDYWxlbmRhci5nZXQodGhpcy50cmlwQ291bnQpID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMuc2l0dWF0aW9ucy5jb25jYXQobmV3U2l0Rm9yVGhpc01lZXRpbmcpXG5cbiAgICAgICAgLy8gdHJ5IHRvIGFwcGx5IGFsbCBzaXR1YXRpb25zXG4gICAgICAgIGxldCBhcHBsaWVkRWZmZWN0cyA9IG5ldyBBcnJheTxTaXR1YXRpb25FZmZlY3Q+KClcbiAgICAgICAgdGhpcy5zaXR1YXRpb25zLmZvckVhY2goc2l0dWF0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFwcEVmZkZvckN1cnJDb24gPSB0aGlzLnRyeUFwcGx5Q29uc3RyYWludChzaXR1YXRpb24sIHRyaXApICAvLyBXZSBrbm93IGl0J3MgZ29ubmEgYmUgYXNzaWduZWRcbiAgICAgICAgICAgIGFwcGxpZWRFZmZlY3RzID0gYXBwbGllZEVmZmVjdHMuY29uY2F0KGFwcEVmZkZvckN1cnJDb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50cmlwQ291bnQgKz0gMVxuICAgICAgICByZXR1cm4gYXBwbGllZEVmZmVjdHNcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeUFwcGx5Q29uc3RyYWludChjb246IFNpdHVhdGlvbiwgdHJpcDogVHJpcFN1bW1hcnkpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGFwcGxpY2FibGVFZmZlY3RzID0gY29uLkdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXAsIHRoaXMucGVvcGxlR3JhcGgsIHRoaXMudHJpcENvdW50KVxuXG4gICAgICAgIGFwcGxpY2FibGVFZmZlY3RzLmZvckVhY2goZWZmID0+IHtcbiAgICAgICAgICAgIGVmZi5hZGRlZFJlbFRhZ3MgPSBlZmYuYWRkZWRSZWxUYWdzLmZpbHRlcihhdCA9PiB0aGlzLnBlb3BsZUdyYXBoLmFkZFJlbFRhZyhhdFswXSwgYXRbMV0pKVxuICAgICAgICAgICAgZWZmLnJlbW92ZWRSZWxUYWdzID0gZWZmLnJlbW92ZWRSZWxUYWdzLmZpbHRlcihhdCA9PiB0aGlzLnBlb3BsZUdyYXBoLnJlbW92ZVJlbFRhZyhhdFswXSwgYXRbMV0pKVxuXG4gICAgICAgICAgICBlZmYuYWRkZWRIdW1UYWdzID0gZWZmLmFkZGVkSHVtVGFncy5maWx0ZXIoYWggPT4gdGhpcy5wZW9wbGVHcmFwaC5hZGRIdW1UYWcoYWhbMF0sIGFoWzFdKSlcbiAgICAgICAgICAgIGVmZi5yZW1vdmVkSHVtVGFncyA9IGVmZi5yZW1vdmVkSHVtVGFncy5maWx0ZXIocmggPT4gdGhpcy5wZW9wbGVHcmFwaC5yZW1vdmVIdW1UYWcocmhbMF0sIHJoWzFdKSlcblxuICAgICAgICAgICAgZWZmLmNoYW5nZWRGb25kbmVzcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIChbY291cGxlLCBjaGFuZ2VdKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZUdyYXBoLmNoYW5nZUZvbmRuZXNzKGNvdXBsZSwgY2hhbmdlKSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZWZmLm5ld0Z1dHVyZVNpdHVhdGlvbnMuZm9yRWFjaChuZXdTaXQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l0dWF0aW9uQWRkQ2FsZW5kYXIuc2V0KHRoaXMudHJpcENvdW50ICsgbmV3U2l0WzBdLCBuZXdTaXRbMV0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYXBwbGljYWJsZUVmZmVjdHNcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiO1xuaW1wb3J0IHsgSHVtYW5UYWcgfSBmcm9tIFwiLi4vY29udGVudC9lbnRpdHlUYWdzXCI7XG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIjtcblxuZXhwb3J0IGNsYXNzIEh1bWFuIHtcbiAgICBuYW1lOiBIdW1hbk5hbWVcbiAgICBcbiAgICAvLyB0aGVzZSBhcmUgcmVhZCBvbmx5XG4gICAgcHVibGljIHJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD5cbiAgICBwdWJsaWMgdGFnczogU2V0PEh1bWFuVGFnPlxuXG4gICAgY29uc3RydWN0b3IobmFtZTogSHVtYW5OYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBzID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy50YWdzID0gbmV3IFNldCgpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHVtYW5VdGlsc3tcbiAgICBwdWJsaWMgc3RhdGljIHBlb3BsZVRvU3RyaW5nKHBlb3BsZTogSHVtYW5OYW1lW10pIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHBlb3BsZS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBlb3BsZVswXVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBlb3BsZS5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHBlb3BsZS5qb2luKFwiIGFuZCBcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb3B5OiBzdHJpbmdbXSA9IHBlb3BsZS5zbGljZSgpXG4gICAgICAgICAgICBjb3B5W2NvcHkubGVuZ3RoIC0gMV0gPSBgYW5kICR7Y29weVtjb3B5Lmxlbmd0aCAtIDFdfWBcbiAgICAgICAgICAgIHJldHVybiBjb3B5LmpvaW4oXCIsIFwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4vaHVtYW5cIlxuaW1wb3J0IHsgTG9jYXRpb25OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvbG9jYXRpb25zXCJcbmltcG9ydCB7IFRyaXBTdW1tYXJ5IH0gZnJvbSBcIi4vdHJpcFN1bW1hcnlcIlxuaW1wb3J0IHsgQ291cGxlLCBDb3VwbGVVdGlscywgRWRnZUtleSwgTUlOX0ZPTkRORVNTLCBQZW9wbGVHcmFwaCwgUmVsYXRpb25zaGlwIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgU2l0dWF0aW9uLCBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi9zaXR1YXRpb25cIlxuaW1wb3J0IHsgRnJpZW5kc2hpcE1hbmFnZXIgfSBmcm9tIFwiLi9mcmllbmRzaGlwTWFuYWdlclwiXG5pbXBvcnQge1xuICAgIEh1bWFuVGFnLFxuICAgIGh1bWFuVGFnTWFwLFxuICAgIFJlbGF0aW9uc2hpcFRhZyxcbiAgICByZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsLFxuICAgIHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5LFxuICAgIHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ05ld1JlbSxcbiAgICByZWxhdGlvbnNoaXBUYWdTaGFkb3dpbmdSZW1OZXcsXG59IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tIFwiLi4vbWFuYWdlbWVudC9ib2FyZFwiXG5cbmV4cG9ydCBjbGFzcyBMZXZlbCB7XG4gICAgcHVibGljIGh1bWFuczogQXJyYXk8SHVtYW4+XG4gICAgcHVibGljIGxvY2F0aW9uczogQXJyYXk8TG9jYXRpb25OYW1lPlxuICAgIHB1YmxpYyBmcmllbmRzaGlwTWFuYWdlcjogRnJpZW5kc2hpcE1hbmFnZXJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBodW1hbnM6IEFycmF5PEh1bWFuPixcbiAgICAgICAgbG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+LFxuICAgICAgICByZWxhdGlvbnNoaXBzOiBBcnJheTxSZWxhdGlvbnNoaXA+LFxuICAgICAgICBpbml0aWFsVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgaW5pdGlhbEZvbmRuZXNzOiBBcnJheTxbQ291cGxlLCBudW1iZXJdPixcbiAgICAgICAgc2l0dWF0aW9uczogQXJyYXk8U2l0dWF0aW9uPixcbiAgICApIHtcbiAgICAgICAgdGhpcy5odW1hbnMgPSBodW1hbnNcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnNcbiAgICAgICAgbGV0IHBlb3BsZUdyYXBoID0gbmV3IFBlb3BsZUdyYXBoKHRoaXMuaHVtYW5zLCByZWxhdGlvbnNoaXBzLCBpbml0aWFsVGFncywgaW5pdGlhbEZvbmRuZXNzKVxuXG4gICAgICAgIHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIgPSBuZXcgRnJpZW5kc2hpcE1hbmFnZXIoc2l0dWF0aW9ucywgcGVvcGxlR3JhcGgpXG5cbiAgICAgICAgLy8gSW5pdCByZWxhdGlvbnNoaXBzIG9uIHBlb3BsZVxuICAgICAgICB0aGlzLnVwZGF0ZUh1bWFuc0Zyb21QZW9wbGVHcmFwaEZvckRpc3BsYXkoKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIdW1hbnNGcm9tUGVvcGxlR3JhcGhGb3JEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmh1bWFucy5mb3JFYWNoKGggPT4ge1xuICAgICAgICAgICAgaC5yZWxhdGlvbnNoaXBzID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRPdXRSZWxhdGlvbnNoaXBzKGgubmFtZSlcbiAgICAgICAgICAgIGgudGFncyA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0SHVtVGFncyhoLm5hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaXhBZ3JlZW1lbnQodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UoL1lvdSB3YXMvZywgJ1lvdSB3ZXJlJylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29PdXQoYm9hcmQ6IEJvYXJkU2NlbmUsIHRyaXBTdW1tYXJ5OiBUcmlwU3VtbWFyeSk6IHN0cmluZyB7XG4gICAgICAgIC8vIFVwZGF0ZSBmcmllbmRzaGlwcyBiYXNlZCBvbiB0cmlwXG4gICAgICAgIGxldCBlZmZlY3RzID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5hcHBseU1lZXRpbmcodHJpcFN1bW1hcnkpXG5cbiAgICAgICAgLy8gVXBkYXRlIHJlbGF0aW9uc2hpcHMgb24gcGVvcGxlXG4gICAgICAgIHRoaXMudXBkYXRlSHVtYW5zRnJvbVBlb3BsZUdyYXBoRm9yRGlzcGxheSgpXG5cbiAgICAgICAgLy8gRGVidWcgbG9nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWZmZWN0czpcIiwgZWZmZWN0cylcbiAgICAgICAgY29uc29sZS5sb2coXCJIdW1hbnM6XCIsIHRoaXMuaHVtYW5zKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbGF0aW9uc2hpcHNcIiwgdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaClcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgbXNncyBmb3IgZWZmZWN0c1xuICAgICAgICBsZXQgc3RhdHVzTWVzc2FnZSA9IHRoaXMuY29uc3RydWN0U3RhdHVzTWVzc2FnZShlZmZlY3RzLCB0cmlwU3VtbWFyeSlcblxuICAgICAgICAvLyBjb25zdHJ1Y3QgZmFpbCBtc2dcbiAgICAgICAgbGV0IGZhaWxNc2dzID0gdGhpcy5jaGVja0ZvbmRuZXNzQW5kUHJlcGFyZUZhaWxNc2coKVxuICAgICAgICBpZiAoZmFpbE1zZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmFpbE1zZ3MucHVzaChcIlxcbkdhbWUgb3Zlci5cIilcbiAgICAgICAgICAgIGJvYXJkLmZhaWwoZmFpbE1zZ3Muam9pbignXFxuJykpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdHVzTWVzc2FnZVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb25kbmVzc0FuZFByZXBhcmVGYWlsTXNnKCkge1xuICAgICAgICBsZXQgZmFpbE1zZ3MgPSBBcnJheTxzdHJpbmc+KClcbiAgICAgICAgZm9yIChsZXQgaDEgb2YgdGhpcy5odW1hbnMpIHtcbiAgICAgICAgICAgIGxldCBoMUhhdGVzTGlzdCA9IEFycmF5PEh1bWFuTmFtZT4oKVxuICAgICAgICAgICAgZm9yIChsZXQgaDIgb2YgdGhpcy5odW1hbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaDEgPT0gaDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0Rm9uZG5lc3MoW2gxLm5hbWUsIGgyLm5hbWVdKSA8PSBNSU5fRk9ORE5FU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgaDFIYXRlc0xpc3QucHVzaChoMi5uYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGgxSGF0ZXNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaDFIYXRlc1N0cmluZyA9IGgxSGF0ZXNMaXN0Lmxlbmd0aCA9PSAyXG4gICAgICAgICAgICAgICAgICAgID8gaDFIYXRlc0xpc3Quam9pbihcIiBhbmQgXCIpXG4gICAgICAgICAgICAgICAgICAgIDogaDFIYXRlc0xpc3Quam9pbihcIiwgXCIpXG5cbiAgICAgICAgICAgICAgICBmYWlsTXNncy5wdXNoKGAke2gxLm5hbWV9ICR7aDEubmFtZSA9PSAnWW91JyA/IGBoYXRlYCA6IGBoYXRlc2B9ICR7aDFIYXRlc1N0cmluZ30gdG9vIG11Y2guYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFpbE1zZ3NcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdFN0YXR1c01lc3NhZ2UoZWZmZWN0czogU2l0dWF0aW9uRWZmZWN0W10sIHRyaXBTdW1tYXJ5OiBUcmlwU3VtbWFyeSkge1xuICAgICAgICBsZXQgeyBwZXJQZXJzb25SZWxDaGFuZ2VzLCBwZXJQZXJzb25IdW1DaGFuZ2VzIH0gPSB0aGlzLnJlZHVjZUVmZmVjdHNQZXJQZXJzb24oZWZmZWN0cylcbiAgICAgICAgdGhpcy5yZWR1Y2VUYWdzU2hhZG93aW5nKHBlclBlcnNvblJlbENoYW5nZXMpXG5cbiAgICAgICAgLy8gZGVkdXBsaWNhdGUgZWZmZWN0IGRlc2NyaXB0aW9ucyBcbiAgICAgICAgbGV0IGVmZmVjdHNNc2dzID0gQXJyYXkuZnJvbShuZXcgU2V0KGVmZmVjdHMubWFwKGVmZmVjdCA9PiB0aGlzLmZpeEFncmVlbWVudChlZmZlY3QuZ2V0UmFuZG9tRGVzY3JpcHRpb24oKSkpKSlcblxuICAgICAgICAvLyBlZmZlY3RzTXNncy5wdXNoKFwiXCIpIC8vIHNlcGFyYXRvciBkdW1teVxuICAgICAgICAvLyBlZmZlY3RzTXNncyA9IGVmZmVjdHNNc2dzLmNvbmNhdCh0aGlzLmNyZWF0ZUVmZmVjdHNNc2dzKHBlclBlcnNvblJlbENoYW5nZXMsIHBlclBlcnNvbkh1bUNoYW5nZXMpKVxuICAgICAgICBjb25zb2xlLmxvZyhcIk1zZ3M6XCIsIGVmZmVjdHNNc2dzKVxuXG4gICAgICAgIGVmZmVjdHNNc2dzID0gZWZmZWN0c01zZ3MuZmlsdGVyKG1zZyA9PiB7XG4gICAgICAgICAgICBsZXQgZ29uZVBlb3BsZSA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0UGVvcGxlV2l0aFRhZ3MoSHVtYW5UYWcuZ29uZSlcbiAgICAgICAgICAgIHJldHVybiBnb25lUGVvcGxlLmV2ZXJ5KGdwID0+ICFtc2cuaW5jbHVkZXMoZ3ApKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZmZlY3RNc2cgPSBlZmZlY3RzTXNncy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGVmZmVjdHNNc2dzLmpvaW4oJ1xcbicpXG4gICAgICAgICAgICA6IFwiTm90aGluZyBzaWduaWZpY2FudCBvY2N1cnJlZC5cIlxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBmaW5hbCBtc2dcbiAgICAgICAgbGV0IGZyaWVuZExpc3Q6IHN0cmluZyA9IHRyaXBTdW1tYXJ5LmdvUGVvcGxlLmZpbHRlcigoeDogSHVtYW4pID0+IHgubmFtZSAhPSAnWW91JykubWFwKChodW1hbjogSHVtYW4pID0+IGh1bWFuLm5hbWUpLmpvaW4oJywgJylcbiAgICAgICAgbGV0IHN0YXR1c01lc3NhZ2UgPSBgWW91IHdlbnQgJHt0cmlwU3VtbWFyeS5nb0xvY2F0aW9ufS5cXG4ke2VmZmVjdE1zZ31gXG5cbiAgICAgICAgcmV0dXJuIHN0YXR1c01lc3NhZ2VcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZHVjZVRhZ3NTaGFkb3dpbmcocGVyUGVyc29uUmVsTXNnOiBNYXA8RWRnZUtleSwgW1JlbGF0aW9uc2hpcFRhZ1tdLCBSZWxhdGlvbnNoaXBUYWdbXV0+KSB7XG4gICAgICAgIHBlclBlcnNvblJlbE1zZy5mb3JFYWNoKChjaGFuZ2VzLCBjb3VwbGUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdUYWdzID0gY2hhbmdlc1swXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3MgPSBjaGFuZ2VzWzFdXG4gICAgICAgICAgICBsZXQgdG9SZW1OZXc6IEFycmF5PFJlbGF0aW9uc2hpcFRhZz4gPSBbXVxuICAgICAgICAgICAgbGV0IHRvUmVtUmVtOiBBcnJheTxSZWxhdGlvbnNoaXBUYWc+ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IHRhZyBvZiBuZXdUYWdzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdGFnSyBvZiByZWxhdGlvbnNoaXBUYWdTaGFkb3dpbmdOZXdSZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ0tbMF0gPT0gdGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1JlbVJlbS5wdXNoKHRhZ0tbMV0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCB0YWcgb2YgcmVtVGFncykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRhZ0sgb2YgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nUmVtTmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdLWzBdID09IHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9SZW1OZXcucHVzaCh0YWdLWzFdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VGFncyA9IG5ld1RhZ3MuZmlsdGVyKHggPT4gIXRvUmVtTmV3LmluY2x1ZGVzKHgpKVxuICAgICAgICAgICAgcmVtVGFncyA9IHJlbVRhZ3MuZmlsdGVyKHggPT4gIXRvUmVtUmVtLmluY2x1ZGVzKHgpKVxuICAgICAgICAgICAgcGVyUGVyc29uUmVsTXNnLnNldChjb3VwbGUsIFtuZXdUYWdzLCByZW1UYWdzXSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHBlclBlcnNvblJlbE1zZ1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRWZmZWN0c01zZ3MoXG4gICAgICAgIHBlclBlcnNvblJlbE1zZzogTWFwPEVkZ2VLZXksIFtSZWxhdGlvbnNoaXBUYWdbXSwgUmVsYXRpb25zaGlwVGFnW11dPixcbiAgICAgICAgcGVyUGVyc29uSHVtTXNnOiBNYXA8SHVtYW5OYW1lLCBbSHVtYW5UYWdbXSwgSHVtYW5UYWdbXV0+LFxuICAgICk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICBsZXQgZWZmZWN0TXNnOiBBcnJheTxzdHJpbmc+ID0gW11cblxuICAgICAgICBwZXJQZXJzb25IdW1Nc2cuZm9yRWFjaCgoY2hhbmdlcywgcGVyc29uKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGFncyA9IGNoYW5nZXNbMF1cbiAgICAgICAgICAgIGxldCByZW1UYWdzID0gY2hhbmdlc1sxXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3NBcnIgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgcmVtVGFnIG9mIHJlbVRhZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoaHVtYW5UYWdNYXAuaGFzKHJlbVRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtVGFnc0Fyci5wdXNoKGh1bWFuVGFnTWFwLmdldChyZW1UYWcpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdUYWdzQXJyID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IG5ld1RhZyBvZiBuZXdUYWdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGh1bWFuVGFnTWFwLmhhcyhuZXdUYWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1RhZ3NBcnIucHVzaChodW1hblRhZ01hcC5nZXQobmV3VGFnKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVtVGFnc0Fyci5sZW5ndGggIT0gMCAmJiBuZXdUYWdzQXJyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goYCR7cGVyc29ufSBsb3N0ICR7cmVtVGFnc0Fyci5qb2luKCcsICcpfSwgYnV0IGdhaW5lZCAke25ld1RhZ3NBcnIuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZW1UYWdzQXJyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goYCR7cGVyc29ufSBsb3N0ICR7cmVtVGFnc0Fyci5qb2luKCcsICcpfWApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1RhZ3NBcnIubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RNc2cucHVzaChgJHtwZXJzb259IGdhaW5lZCAke25ld1RhZ3NBcnIuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgICAgbGV0IHJlbGF0aW9uc2hpcFRlbXBsYXRlczogQXJyYXk8W3N0cmluZywgQ291cGxlXT4gPSBbXVxuICAgICAgICBsZXQgYWRkSWZOb3RDb250YWlucyA9ICh0YWc6IFJlbGF0aW9uc2hpcFRhZywgbWVzc2FnZTogc3RyaW5nLCBjb3VwbGU6IENvdXBsZSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgLy8gSWYgaXQncyBub3QgYmlkaXJlY3Rpb25hbCBleHBsaWNpdGx5LCB3ZSBkb24ndCBkZWR1cGxpY2F0ZVxuICAgICAgICAgICAgaWYgKCFyZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgcmVsYXRpb25zaGlwVGVtcGxhdGVzLnB1c2goW21lc3NhZ2UsIGNvdXBsZV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgeCBvZiByZWxhdGlvbnNoaXBUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoeFswXSA9PSBtZXNzYWdlICYmICgoeFsxXVswXSA9PSBjb3VwbGVbMF0gJiYgeFsxXVsxXSA9PSBjb3VwbGVbMV0pIHx8ICh4WzFdWzBdID09IGNvdXBsZVsxXSAmJiB4WzFdWzFdID09IGNvdXBsZVswXSkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbGF0aW9uc2hpcFRlbXBsYXRlcy5wdXNoKFttZXNzYWdlLCBjb3VwbGVdKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHBlclBlcnNvblJlbE1zZy5mb3JFYWNoKChjaGFuZ2VzLCBlZGdlS2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgY291cGxlID0gQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoZWRnZUtleSlcbiAgICAgICAgICAgIGxldCBuZXdUYWdzID0gY2hhbmdlc1swXVxuICAgICAgICAgICAgbGV0IHJlbVRhZ3MgPSBjaGFuZ2VzWzFdXG4gICAgICAgICAgICBmb3IgKGxldCByZW1UYWcgb2YgcmVtVGFncykge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBUYWdNYXBTdG9yeS5oYXMocmVtVGFnKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRJZk5vdENvbnRhaW5zKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5LmdldChyZW1UYWcpIGFzIFtzdHJpbmcsIHN0cmluZ10pWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291cGxlLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbmV3VGFnIG9mIG5ld1RhZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwVGFnTWFwU3RvcnkuaGFzKG5ld1RhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSWZOb3RDb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxhdGlvbnNoaXBUYWdNYXBTdG9yeS5nZXQobmV3VGFnKSBhcyBbc3RyaW5nLCBzdHJpbmddKVswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCB4IG9mIHJlbGF0aW9uc2hpcFRlbXBsYXRlcykge1xuICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goXG4gICAgICAgICAgICAgICAgeFswXS5yZXBsYWNlKCdTVUJKJywgeFsxXVswXSkucmVwbGFjZSgnT0JKJywgeFsxXVsxXSksXG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWZmZWN0TXNnXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWR1Y2VFZmZlY3RzUGVyUGVyc29uKGVmZmVjdHM6IFNpdHVhdGlvbkVmZmVjdFtdKSB7XG4gICAgICAgIC8vIGZpcnN0IGFycmF5IGluIGtleXMgaXMgYWx3YXlzIGFkZGVkIHRhZ3MsIHNlY29uZCByZW1vdmVkXG4gICAgICAgIGxldCBwZXJQZXJzb25SZWxDaGFuZ2VzID0gbmV3IE1hcDxFZGdlS2V5LCBbQXJyYXk8UmVsYXRpb25zaGlwVGFnPiwgQXJyYXk8UmVsYXRpb25zaGlwVGFnPl0+KClcbiAgICAgICAgbGV0IHBlclBlcnNvbkh1bUNoYW5nZXMgPSBuZXcgTWFwPEh1bWFuTmFtZSwgW0FycmF5PEh1bWFuVGFnPiwgQXJyYXk8SHVtYW5UYWc+XT4oKVxuXG4gICAgICAgIGxldCBhZGRUb01hcCA9IGZ1bmN0aW9uIDxLLCBWPihrZXk6IEssIHZhbHVlOiBWLCB2YWx1ZVN0b3JlOiBNYXA8SywgW0FycmF5PFY+LCBBcnJheTxWPl0+LCBhZGRlZFJlbW92ZWRTdG9yZVN3aXRjaDogMCB8IDEpIHtcbiAgICAgICAgICAgIGxldCBwZXJLZXlTdG9yZSA9IHZhbHVlU3RvcmUuZ2V0KGtleSkgPz8gW25ldyBBcnJheTxWPigpLCBuZXcgQXJyYXk8Vj4oKV1cbiAgICAgICAgICAgIHBlcktleVN0b3JlW2FkZGVkUmVtb3ZlZFN0b3JlU3dpdGNoXS5wdXNoKHZhbHVlKVxuICAgICAgICAgICAgdmFsdWVTdG9yZS5zZXQoa2V5LCBwZXJLZXlTdG9yZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdHMuZm9yRWFjaChlZmZlY3QgPT4ge1xuICAgICAgICAgICAgZWZmZWN0LmFkZGVkSHVtVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKGFoWzBdLCBhaFsxXSwgcGVyUGVyc29uSHVtQ2hhbmdlcywgMCkpXG4gICAgICAgICAgICBlZmZlY3QucmVtb3ZlZEh1bVRhZ3MuZm9yRWFjaChyaCA9PiBhZGRUb01hcChyaFswXSwgcmhbMV0sIHBlclBlcnNvbkh1bUNoYW5nZXMsIDEpKVxuICAgICAgICAgICAgZWZmZWN0LmFkZGVkUmVsVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKENvdXBsZVV0aWxzLnRvRWRnZUtleShhaFswXSksIGFoWzFdLCBwZXJQZXJzb25SZWxDaGFuZ2VzLCAwKSlcbiAgICAgICAgICAgIGVmZmVjdC5yZW1vdmVkUmVsVGFncy5mb3JFYWNoKGFoID0+IGFkZFRvTWFwKENvdXBsZVV0aWxzLnRvRWRnZUtleShhaFswXSksIGFoWzFdLCBwZXJQZXJzb25SZWxDaGFuZ2VzLCAxKSlcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHJldHVybiB7IHBlclBlcnNvblJlbENoYW5nZXMsIHBlclBlcnNvbkh1bUNoYW5nZXMgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4vaHVtYW5cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZywgcmVsYXRpb25zaGlwVGFnTWFwIH0gZnJvbSBcIi4uL2NvbnRlbnQvZW50aXR5VGFnc1wiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIlxuXG5leHBvcnQgdHlwZSBFZGdlS2V5ID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb3VwbGUgPSBbSHVtYW5OYW1lLCBIdW1hbk5hbWVdXG5cbmV4cG9ydCBjb25zdCBNSU5fRk9ORE5FU1MgPSAwXG5leHBvcnQgY29uc3QgREVGQVVMVF9GT05ETkVTUyA9IDVcbmV4cG9ydCBjb25zdCBNQVhfRk9ORE5FU1MgPSAxMFxuXG5leHBvcnQgY2xhc3MgUGVvcGxlR3JhcGgge1xuICAgIHByaXZhdGUgcGVvcGxlOiBBcnJheTxIdW1hbj5cbiAgICBwcml2YXRlIHJlbGF0aW9uc2hpcFRhZ3M6IE1hcDxFZGdlS2V5LCBTZXQ8UmVsYXRpb25zaGlwVGFnPj4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGZvbmRuZXNzOiBNYXA8RWRnZUtleSwgbnVtYmVyPiA9IG5ldyBNYXAoKVxuICAgIHByaXZhdGUgaHVtYW5zVGFnczogTWFwPEh1bWFuTmFtZSwgU2V0PEh1bWFuVGFnPj4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGh1bWFuTmFtZXM6IEFycmF5PEh1bWFuTmFtZT5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwZW9wbGU6IEh1bWFuW10gPSBbXSxcbiAgICAgICAgaW5pdGlhbFJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD4gPSBbXSxcbiAgICAgICAgaW5pdGlhbFRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgICAgIGluaXRpYWxGb25kbmVzczogQXJyYXk8W0NvdXBsZSwgbnVtYmVyXT4sXG4gICAgKSB7XG4gICAgICAgIHRoaXMucGVvcGxlID0gcGVvcGxlXG5cbiAgICAgICAgcGVvcGxlLmZvckVhY2goaCA9PiB7XG4gICAgICAgICAgICBwZW9wbGUuZm9yRWFjaChoaCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGgubmFtZSAhPSBoaC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmVsVGFncyhbaC5uYW1lLCBoaC5uYW1lXSwgbmV3IFNldDxSZWxhdGlvbnNoaXBUYWc+KCkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9uZG5lc3Muc2V0KENvdXBsZVV0aWxzLnRvRWRnZUtleShbaC5uYW1lLCBoaC5uYW1lXSksIERFRkFVTFRfRk9ORE5FU1MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBwZW9wbGUuZm9yRWFjaChwID0+e1xuICAgICAgICAgICAgdGhpcy5odW1hbnNUYWdzLnNldChwLm5hbWUsIG5ldyBTZXQoKSlcbiAgICAgICAgfSlcblxuICAgICAgICBpbml0aWFsVGFncy5mb3JFYWNoKGhUYWdUdXBsZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2hOYW1lLCBoVGFnXSA9IGhUYWdUdXBsZVxuICAgICAgICAgICAgdGhpcy5hZGRIdW1UYWcoaE5hbWUsIGhUYWcpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaW5pdGlhbFJlbGF0aW9uc2hpcHMuZm9yRWFjaChyZWwgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRSZWxUYWdzKHJlbC5wZW9wbGUsIHJlbC50YWdzKVxuICAgICAgICB9KVxuXG4gICAgICAgIGluaXRpYWxGb25kbmVzcy5mb3JFYWNoKChbY291cGxlLCBmb25kbmVzc10pID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KE1JTl9GT05ETkVTUyA8PSBmb25kbmVzcyAmJiBmb25kbmVzcyA8PSBNQVhfRk9ORE5FU1MpXG4gICAgICAgICAgICB0aGlzLmZvbmRuZXNzLnNldChDb3VwbGVVdGlscy50b0VkZ2VLZXkoY291cGxlKSwgZm9uZG5lc3MpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5odW1hbk5hbWVzID0gcGVvcGxlLm1hcChwID0+IHAubmFtZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVtYW5OYW1lcygpOiBBcnJheTxIdW1hbk5hbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5OYW1lc1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRIdW1UYWcocGVyc29uOiBIdW1hbk5hbWUsIHRhZzogSHVtYW5UYWcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGhUYWdzID0gdGhpcy5odW1hbnNUYWdzLmdldChwZXJzb24pXG4gICAgICAgIGxldCBuZXdseUFkZGVkID0gIWhUYWdzPy5oYXModGFnKVxuICAgICAgICBoVGFncz8uYWRkKHRhZylcblxuICAgICAgICByZXR1cm4gbmV3bHlBZGRlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVIdW1UYWcocGVyc29uOiBIdW1hbk5hbWUsIHRhZzogSHVtYW5UYWcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKT8uZGVsZXRlKHRhZykgPz8gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SHVtVGFncyhwZXJzb246IEh1bWFuTmFtZSk6IFNldDxIdW1hblRhZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odW1hbnNUYWdzLmdldChwZXJzb24pID8/IG5ldyBTZXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRSZWxUYWdzKHBlb3BsZTogQ291cGxlLCB0YWdzOiBTZXQ8UmVsYXRpb25zaGlwVGFnPikge1xuICAgICAgICBsZXQgZ3JhcGhLZXkgPSBDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcFRhZ3Muc2V0KGdyYXBoS2V5LCB0YWdzKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWxUYWdzKHBlb3BsZTogQ291cGxlKTogU2V0PFJlbGF0aW9uc2hpcFRhZz4ge1xuICAgICAgICBsZXQgZ3JhcGhLZXkgPSBDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICByZXR1cm4gdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmdldChncmFwaEtleSkhXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFJlbFRhZyhwZW9wbGU6IENvdXBsZSwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpIHtcbiAgICAgICAgY29uc3QgcmVsVGFncyA9IHRoaXMuZ2V0UmVsVGFncyhwZW9wbGUpXG4gICAgICAgIGxldCBuZXdseUFkZGVkID0gIXJlbFRhZ3M/Lmhhcyh0YWcpXG4gICAgICAgIHJlbFRhZ3M/LmFkZCh0YWcpXG5cbiAgICAgICAgcmV0dXJuIG5ld2x5QWRkZWRcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVsVGFnKHBlb3BsZTogQ291cGxlLCB0YWc6IFJlbGF0aW9uc2hpcFRhZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWxUYWdzKHBlb3BsZSk/LmRlbGV0ZSh0YWcpID8/IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUZvbmRuZXNzKHBlb3BsZTogQ291cGxlLCBjaGFuZ2U6IG51bWJlcikge1xuICAgICAgICBsZXQgdG8gPSB0aGlzLmZvbmRuZXNzLmdldChDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKSkhICsgY2hhbmdlXG4gICAgICAgIHRvID0gTWF0aC5taW4odG8sIE1BWF9GT05ETkVTUylcbiAgICAgICAgdG8gPSBNYXRoLm1heCh0bywgTUlOX0ZPTkRORVNTKVxuICAgICAgICB0aGlzLnNldEZvbmRuZXNzKHBlb3BsZSwgdG8pXG4gICAgfVxuXG4gICAgcHVibGljIHNldEZvbmRuZXNzKHBlb3BsZTogQ291cGxlLCB0bzogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZm9uZG5lc3Muc2V0KENvdXBsZVV0aWxzLnRvRWRnZUtleShwZW9wbGUpLCB0bylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Rm9uZG5lc3MocGVvcGxlOiBDb3VwbGUpOiBudW1iZXIge1xuICAgICAgICBsZXQgZWRnZUtleSA9IENvdXBsZVV0aWxzLnRvRWRnZUtleShwZW9wbGUpXG4gICAgICAgIHJldHVybiB0aGlzLmZvbmRuZXNzLmdldChlZGdlS2V5KSA/PyAwXG4gICAgfVxuXG4gICAgcHVibGljIGdldE91dFJlbGF0aW9uc2hpcHMocGVyc29uOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXA+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheVxuXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwVGFncy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKEh1bWFuTmFtZVtwZXJzb25dKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSZWxhdGlvbnNoaXAoQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldEluUmVsYXRpb25zaGlwcyhwZXJzb246IEh1bWFuTmFtZSk6IEFycmF5PFJlbGF0aW9uc2hpcD4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKEh1bWFuTmFtZVtwZXJzb25dKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ldyBSZWxhdGlvbnNoaXAoQ291cGxlVXRpbHMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVsYXRpb25zaGlwVGFncy5nZXQoQ291cGxlVXRpbHMudG9FZGdlS2V5KFthLCBiXSkpID8/IFtdKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRSZWxhdGlvbnNoaXBzT2ZUeXBlKGE6IEh1bWFuTmFtZSwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpOiBBcnJheTxSZWxhdGlvbnNoaXA+e1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPdXRSZWxhdGlvbnNoaXBzKGEpLmZpbHRlcihyZWwgPT4gcmVsLnRhZ3MuaGFzKHRhZykpXG4gICAgfVxuXG4gICAgcHVibGljIGhhdmVNdXR1YWxSZWxhdGlvbnNoaXBUYWcoYTogSHVtYW5OYW1lLCBiOiBIdW1hbk5hbWUsIHRhZzogUmVsYXRpb25zaGlwVGFnKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYikuaW5jbHVkZXModGFnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4oYTogSHVtYW5OYW1lLCBiOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXBUYWc+IHtcbiAgICAgICAgbGV0IGFiID0gdGhpcy5nZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihhLCBiKVxuICAgICAgICBsZXQgYmEgPSB0aGlzLmdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGIsIGEpXG5cbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbihhYiwgYmEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldEFsbFJlbGF0aW9uc2hpcHMoKTogUmVsYXRpb25zaGlwW10ge1xuICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmZvckVhY2goKHRhZ3MsIGVkZ2VLZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdXBsZSA9IENvdXBsZVV0aWxzLmZyb21FZGdlS2V5KGVkZ2VLZXkpXG4gICAgICAgICAgICByZXMucHVzaChuZXcgUmVsYXRpb25zaGlwKGNvdXBsZSwgdGFncykpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxIdW1hbk5hbWVzKCk6IEFycmF5PEh1bWFuTmFtZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZW9wbGUubWFwKHAgPT4gcC5uYW1lKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQZW9wbGVXaXRoVGFncyh0YWc6IEh1bWFuVGFnKTogQXJyYXk8SHVtYW5OYW1lPntcbiAgICAgICAgbGV0IHJlcyA9IEFycmF5KClcbiAgICAgICAgdGhpcy5odW1hbnNUYWdzLmZvckVhY2goKHRhZ3MsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmICh0YWdzLmhhcyh0YWcpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gobmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlc1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb3VwbGVVdGlscyB7XG4gICAgc3RhdGljIG9yaWVudGVkOiBib29sZWFuID0gdHJ1ZVxuXG4gICAgcHVibGljIHN0YXRpYyB0b0VkZ2VLZXkodW5vcmRlcmVkUGFpcjogQ291cGxlKTogRWRnZUtleSB7XG4gICAgICAgIGxldCBbYSwgYl0gPSB1bm9yZGVyZWRQYWlyXG4gICAgICAgIGxldCBvcmRlcmVkUGFpciA9IGEgPD0gYiB8fCB0aGlzLm9yaWVudGVkID8gW2EsIGJdIDogW2IsIGFdXG5cbiAgICAgICAgcmV0dXJuIG9yZGVyZWRQYWlyLm1hcCh2ID0+IHYpLmpvaW4oJ3wnKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUVkZ2VLZXkoa2V5OiBFZGdlS2V5KTogQ291cGxlIHtcbiAgICAgICAgbGV0IG5hbWVzID0ga2V5LnNwbGl0KCd8JylcbiAgICAgICAgY29uc29sZS5hc3NlcnQobmFtZXMubGVuZ3RoID09IDIpXG5cbiAgICAgICAgcmV0dXJuIFtuYW1lc1swXSBhcyBIdW1hbk5hbWUsIG5hbWVzWzFdIGFzIEh1bWFuTmFtZV1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcCB7XG4gICAgcGVvcGxlOiBDb3VwbGVcbiAgICB0YWdzOiBTZXQ8UmVsYXRpb25zaGlwVGFnPlxuXG4gICAgY29uc3RydWN0b3IocGVvcGxlOiBDb3VwbGUsIHRhZ3M/OiBTZXQ8UmVsYXRpb25zaGlwVGFnPikge1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZVxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzID8/IG5ldyBTZXQ8UmVsYXRpb25zaGlwVGFnPigpXG4gICAgfVxuXG4gICAgLy8gQGRlcHJlY2F0ZWRcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucGVvcGxlWzFdfTogJHtBcnJheS5mcm9tKHRoaXMudGFncykubWFwKCh4KSA9PiByZWxhdGlvbnNoaXBUYWdNYXAuZ2V0KHgpID8/IFwiP1wiKS5qb2luKCcsICcpfWBcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb248VD4oYXM6IFRbXSwgYnM6IFRbXSk6IFRbXSB7XG4gICAgbGV0IHJlcyA9IG5ldyBBcnJheVxuXG4gICAgZm9yIChjb25zdCBhIG9mIGFzKSB7XG4gICAgICAgIGlmIChicy5pbmNsdWRlcyhhKSkge1xuICAgICAgICAgICAgcmVzLnB1c2goYSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbn0iLCJpbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gXCIuL3RyaXBTdW1tYXJ5XCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcgfSBmcm9tIFwiLi4vY29udGVudC9lbnRpdHlUYWdzXCJcbmltcG9ydCB7IENvdXBsZSwgUGVvcGxlR3JhcGggfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxufVxuXG5cbmV4cG9ydCBjbGFzcyBTaXR1YXRpb25FZmZlY3Qge1xuICAgIGRlc2NyaXB0aW9uOiBBcnJheTxzdHJpbmc+XG5cbiAgICBhZGRlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+XG4gICAgcmVtb3ZlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+XG5cbiAgICBhZGRlZEh1bVRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT5cbiAgICByZW1vdmVkSHVtVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPlxuXG4gICAgY2hhbmdlZEZvbmRuZXNzOiBBcnJheTxbQ291cGxlLCBudW1iZXJdPlxuICAgIG5ld0Z1dHVyZVNpdHVhdGlvbnM6IEFycmF5PFtudW1iZXIsIFNpdHVhdGlvbl0+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICAgICAgICBhZGRlZFJlbFRhZ3M/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgcmVtb3ZlZFJlbFRhZ3M/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgYWRkZWRIdW1UYWdzPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgcmVtb3ZlZEh1bVRhZ3M/OiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LFxuICAgICAgICBjaGFuZ2VkRm9uZG5lc3M/OiBBcnJheTxbQ291cGxlLCBudW1iZXJdPixcbiAgICAgICAgbmV3RnV0dXJlU2l0dWF0aW9ucz86IEFycmF5PFtudW1iZXIsIFNpdHVhdGlvbl0+XG4gICAgKSB7XG4gICAgICAgIGxldCBhc3NpZ25lZERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24gPz8gbmV3IEFycmF5PHN0cmluZz4oKVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gQXJyYXkuaXNBcnJheShhc3NpZ25lZERlc2NyaXB0aW9uKSBcbiAgICAgICAgICAgID8gYXNzaWduZWREZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIDogW2Fzc2lnbmVkRGVzY3JpcHRpb25dXG4gICAgICAgIHRoaXMuYWRkZWRSZWxUYWdzID0gYWRkZWRSZWxUYWdzID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMucmVtb3ZlZFJlbFRhZ3MgPSByZW1vdmVkUmVsVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLmFkZGVkSHVtVGFncyA9IGFkZGVkSHVtVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzID0gcmVtb3ZlZEh1bVRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5jaGFuZ2VkRm9uZG5lc3MgPSBjaGFuZ2VkRm9uZG5lc3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5uZXdGdXR1cmVTaXR1YXRpb25zID0gbmV3RnV0dXJlU2l0dWF0aW9ucyA/PyBuZXcgQXJyYXkoKVxuICAgIH1cblxuICAgIGFkZFJlbFRhZ3ModGFnczogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncy5wdXNoKC4uLnRhZ3MpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVtb3ZlUmVsVGFncyh0YWdzOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPik6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIHRoaXMucmVtb3ZlZFJlbFRhZ3MucHVzaCguLi50YWdzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZEh1bVRhZ3ModGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPik6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIHRoaXMuYWRkZWRIdW1UYWdzLnB1c2goLi4udGFncylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICByZW1vdmVIdW1UYWdzKHRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzLnB1c2goLi4udGFncylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbjogc3RyaW5nfEFycmF5PHN0cmluZz4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbikgXG4gICAgICAgICAgICA/IGRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgOiBbZGVzY3JpcHRpb25dXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcHVibGljIGdldFJhbmRvbURlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGVzY3JpcHRpb24ubGVuZ3RoKV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUZvbmRuZXNzKGNoYW5nZXM6IEFycmF5PFtDb3VwbGUsIG51bWJlcl0+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRm9uZG5lc3MucHVzaCguLi5jaGFuZ2VzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFkZE5ld0Z1dHVyZVNpdHVhdGlvbnMobmV3RnV0dXJlU2l0dWF0aW9uczogQXJyYXk8W251bWJlciwgU2l0dWF0aW9uXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMucHVzaCguLi5uZXdGdXR1cmVTaXR1YXRpb25zKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGFwcGVuZFRvVGhpcyhlZmZlY3Q6IFNpdHVhdGlvbkVmZmVjdCkge1xuICAgICAgICB0aGlzLmFkZGVkSHVtVGFncyA9IHRoaXMuYWRkZWRIdW1UYWdzLmNvbmNhdChlZmZlY3QuYWRkZWRIdW1UYWdzKVxuICAgICAgICB0aGlzLnJlbW92ZWRIdW1UYWdzID0gdGhpcy5yZW1vdmVkSHVtVGFncy5jb25jYXQoZWZmZWN0LnJlbW92ZWRIdW1UYWdzKVxuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncyA9IHRoaXMuYWRkZWRSZWxUYWdzLmNvbmNhdChlZmZlY3QuYWRkZWRSZWxUYWdzKVxuICAgICAgICB0aGlzLnJlbW92ZWRSZWxUYWdzID0gdGhpcy5yZW1vdmVkUmVsVGFncy5jb25jYXQoZWZmZWN0LnJlbW92ZWRSZWxUYWdzKVxuICAgICAgICB0aGlzLmNoYW5nZWRGb25kbmVzcyA9IHRoaXMuY2hhbmdlZEZvbmRuZXNzLmNvbmNhdChlZmZlY3QuY2hhbmdlZEZvbmRuZXNzKVxuICAgICAgICB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMgPSB0aGlzLm5ld0Z1dHVyZVNpdHVhdGlvbnMuY29uY2F0KGVmZmVjdC5uZXdGdXR1cmVTaXR1YXRpb25zKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSAnLi9odW1hbidcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gJy4uL2NvbnRlbnQvbG9jYXRpb25zJ1xuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcblxuZXhwb3J0IGNsYXNzIFRyaXBTdW1tYXJ5IHtcbiAgICBwdWJsaWMgZ29QZW9wbGU6IEFycmF5PEh1bWFuPiA9IG5ldyBBcnJheTxIdW1hbj4oKVxuICAgIHB1YmxpYyBnb0xvY2F0aW9uPzogTG9jYXRpb25OYW1lXG5cbiAgICBjb25zdHJ1Y3RvcihzcGVjaWFsR3Vlc3Q6IEh1bWFuKSB7XG4gICAgICAgIHRoaXMuZ29QZW9wbGUucHVzaChzcGVjaWFsR3Vlc3QpXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUdvUGVvcGxlKGh1bWFuOiBIdW1hbik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcHJldlNpemUgPSB0aGlzLmdvUGVvcGxlLmxlbmd0aFxuICAgICAgICB0aGlzLmdvUGVvcGxlID0gdGhpcy5nb1Blb3BsZS5maWx0ZXIoeCA9PiB4Lm5hbWUgIT09IGh1bWFuLm5hbWUpXG4gICAgICAgIHJldHVybiBwcmV2U2l6ZSAhPSB0aGlzLmdvUGVvcGxlLmxlbmd0aFxuICAgIH1cblxuICAgIHB1YmxpYyBmbGlwR29QZW9wbGUoaHVtYW46IEh1bWFuKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnJlbW92ZUdvUGVvcGxlKGh1bWFuKSkge1xuICAgICAgICAgICAgLy8gZGVsZXRlZFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgZGVsZXRlZCwgc28gYWRkXG4gICAgICAgICAgICB0aGlzLmdvUGVvcGxlLnB1c2goaHVtYW4pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZXBhcmUobG9jYXRpb246IExvY2F0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmdvTG9jYXRpb24gPSBsb2NhdGlvblxuICAgIH1cblxuICAgIHB1YmxpYyBhbGxQcmVzZW50KC4uLnBlb3BsZTogSHVtYW5OYW1lW10pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBlb3BsZS5ldmVyeShwID0+IHRoaXMuZ29QZW9wbGUubWFwKHEgPT4gcS5uYW1lKS5pbmNsdWRlcyhwKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc29tZVByZXNlbnQoLi4ucGVvcGxlOiBIdW1hbk5hbWVbXSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGVvcGxlLnNvbWUocCA9PiB0aGlzLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpXG4gICAgfVxuXG4gICAgcHVibGljIGFsbEFic2VudCguLi5wZW9wbGU6IEh1bWFuTmFtZVtdKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBwZW9wbGUuZXZlcnkocCA9PiAhdGhpcy5nb1Blb3BsZS5tYXAocSA9PiBxLm5hbWUpLmluY2x1ZGVzKHApKVxuICAgIH1cblxuICAgIHB1YmxpYyBzb21lQWJzZW50KC4uLnBlb3BsZTogSHVtYW5OYW1lW10pOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHBlb3BsZS5zb21lKHAgPT4gIXRoaXMuZ29QZW9wbGUubWFwKHEgPT4gcS5uYW1lKS5pbmNsdWRlcyhwKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZXMoKTogSHVtYW5OYW1lW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgZmFkZXI/OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgcHJpdmF0ZSBtb2NrVGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib2FyZF9iYWNrZ3JvdW5kJywgJ2JvYXJkX2JhY2tncm91bmQucG5nJylcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdyZWxfdGFncycsICdyZWxfdGFncy5wbmcnLCB7IGZyYW1lV2lkdGg6IDMwLCBmcmFtZUhlaWdodDogMzAgfSlcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0cmFpdF9iaWcnLCAncG9ydHJhaXRfYmlnLnBuZycsIHsgZnJhbWVXaWR0aDogMjAwLCBmcmFtZUhlaWdodDogMjAwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydHJhaXRfc21hbGwnLCAncG9ydHJhaXRfc21hbGwucG5nJywgeyBmcmFtZVdpZHRoOiA2MCwgZnJhbWVIZWlnaHQ6IDYwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnbG9jYXRpb25fdGh1bWInLCAnbG9jYXRpb25fdGh1bWIucG5nJywgeyBmcmFtZVdpZHRoOiA5MCwgZnJhbWVIZWlnaHQ6IDkwIH0pXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbWFpbl9tdXNpYycsICdtb250dW5vLm1wMycpXG5cbiAgICAgICAgdGhpcy5mYWRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDEpXG4gICAgICAgICAgICAuc2V0QWxwaGEoMSlcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnbWFuYWdlbWVudCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB0aGlzLm1vY2tUZXh0ID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwMCwgJycsIHsgZmlsbDogJyNmZmYnLCBmb250RmFtaWx5OiAnUm9ib3RvJyB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDEpXG4gICAgICAgICAgICAuc2V0QWxwaGEoMClcblxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMDAsICdPdmVybHkgRnJhZ2lsZSBSZWxhdGlvbnNoaXBzJywge1xuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gICAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDIpXG4gICAgICAgIGxldCBoZWxwID0gdGhpcy5hZGQudGV4dCgxMDAsIDIwMCxcbiAgICAgICAgICAgICdQaWNrIG9uZSBvciBtb3JlIGZyaWVuZHMgdG8gam9pbiB5b3Ugb24gbmlnaHRzIG91dC5cXG4nXG4gICAgICAgICAgICArICdUcnkgdG8ga2VlcCB5b3VyIGZyaWVuZHNoaXAgbmV0d29yayBhbGl2ZS5cXG4nXG4gICAgICAgICAgICArICdZb3UgbG9zZSBpZiBvbmUgb2YgeW91ciBmcmllbmRzIGJlZ2lucyB0byBoYXRlIHNvbWVib2R5LlxcbidcbiAgICAgICAgICAgICsgJ1Blb3BsZSBnZXQgdXBzZXQgaWYgeW91IGRvblxcJ3QgZ28gb3V0IHdpdGggdGhlbSBmb3IgYSBsb25nZXIgdGltZVxcbidcbiAgICAgICAgICAgICsgJ29yIHdoZW4gdGhleSBoYXZlIHRvIHNwZW5kIHRpbWUgd2l0aCBzb21lb25lIHRoZXkgZG9uXFwndCBsaWtlXFxuJ1xuICAgICAgICAgICAgKyAnb3Igd2hlbiB0aGV5IGhhdmUgYSBnZW5lcmFsbHkgYmFkIHRpbWUuXFxuJ1xuICAgICAgICAgICAgKyAnXFxuJ1xuICAgICAgICAgICAgKyAnSXRcXCdzIGNvbXBsZXguJyxcbiAgICAgICAgICAgIHsgZmlsbDogJyNmZmYnLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcxOHB4JyB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDIpXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb2RhbERpYWxvZyB7XG4gICAgcHJpdmF0ZSBwcmV2ZW50Q2xpY2s6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIGJsYWNrQm9hcmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIG1lc3NhZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgcHJpdmF0ZSBkeWluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRleHQ6IHN0cmluZywgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfSkge1xuICAgICAgICB0aGlzLnByZXZlbnRDbGljayA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgODAwLCA1MDAsIDB4MDAwMDAwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoNDAwLCAyNTAsIDYwMCwgMzAwLCAweDAwMDAwMClcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzY2VuZS5hZGQudGV4dCg0MDAsIDI1MCwgdGV4dCwgeyBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcyMHB4JyB9KVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgIC5zZXRXb3JkV3JhcFdpZHRoKDUwMClcbiAgICAgICAgICAgIC8vIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmRlc3Ryb3koKSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuXG4gICAgICAgIHNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5wcmV2ZW50Q2xpY2tdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMCwgdG86IDAuNCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KVxuICAgICAgICBzY2VuZS5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMuYmxhY2tCb2FyZCwgdGhpcy5tZXNzYWdlXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5keWluZylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLmR5aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmNhbGxiYWNrKClcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5tZXNzYWdlLCB0aGlzLmJsYWNrQm9hcmRdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tCb2FyZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRDbGljay5kZXN0cm95KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMucHJldmVudENsaWNrXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAuNCwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4uL21vZGVsL2h1bWFuXCI7XG5pbXBvcnQgeyBIdW1hbk5hbWVJbmRleCB9IGZyb20gXCIuLi9jb250ZW50L2h1bWFuc1wiO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgZHJhd1BvcnRyYWl0cyhodW1hbnM6IEFycmF5PEh1bWFuPiwgc2NlbmU6IFBoYXNlci5TY2VuZSk6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cCB7XG4gICAgICAgIGxldCBncm91cCA9IHNjZW5lLmFkZC5ncm91cCgpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICBmb3IgKGxldCBoaSBpbiBodW1hbnMpIHtcbiAgICAgICAgICAgIGxldCBodW1hbiA9IGh1bWFuc1toaV1cbiAgICAgICAgICAgIGxldCBpbmRleCA9IEh1bWFuTmFtZUluZGV4LmluZGV4T2YoaHVtYW4ubmFtZSlcbiAgICAgICAgICAgIGxldCBjaXJjbGUgPSBzY2VuZS5hZGQuZWxsaXBzZSg1MCArIDQwMCAtIGh1bWFucy5sZW5ndGggKiAxMDAgLyAyICsgTnVtYmVyKGhpKSAqIDEwMCwgNTAsIDgwLCA4MCwgMHgyZTJlMmUpXG4gICAgICAgICAgICAgICAgLnNldERlcHRoKDMwMDApXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBzY2VuZS5hZGQuaW1hZ2UoNTAgKyA0MDAgLSBodW1hbnMubGVuZ3RoICogMTAwIC8gMiArIE51bWJlcihoaSkgKiAxMDAsIDUwLCAncG9ydHJhaXRfc21hbGwnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuc2V0RGVwdGgoMzAwMSlcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoNTAgKyA0MDAgLSBodW1hbnMubGVuZ3RoICogMTAwIC8gMiArIE51bWJlcihoaSkgKiAxMDAsIDk1LCBgJHtodW1hbi5uYW1lfWAsIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2UwZTBlMCcsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnNldERlcHRoKDMwMDEpXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDApXG4gICAgICAgICAgICBncm91cC5hZGQoaW1hZ2UpXG4gICAgICAgICAgICBncm91cC5hZGQoY2lyY2xlKVxuICAgICAgICAgICAgZ3JvdXAuYWRkKHRleHQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ3JvdXBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==