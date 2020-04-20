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
    mutualRelationship([humans_1.HumanName.Eric, humans_1.HumanName.Alex], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush]),
    mutualRelationship([humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], [entityTags_1.RelationshipTag.crushable, entityTags_1.RelationshipTag.crush]),
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
    [[humans_1.HumanName.Eric, humans_1.HumanName.Alex], 7],
    [[humans_1.HumanName.Alex, humans_1.HumanName.Eric], 7],
    [[humans_1.HumanName.Eric, humans_1.HumanName.Beatrice], 7],
    [[humans_1.HumanName.Beatrice, humans_1.HumanName.Eric], 7],
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
    new situations_1.BeatriceBreakups(),
    new situations_1.AlexAndBeatriceGetDrunk(),
    bowlingbrawl,
    flavieFomo2,
    flavieFomo1,
    danTwoGirlfriendsBusted,
    baseFondnessChanges,
    fragileFlavie2,
    fragileFlavie1,
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
            return new Array();
        }
        var effects = new Array();
        trip.goPeople.forEach(function (person) {
            var personTags = currentState.getHumTags(person.name);
            if (personTags.has(entityTags_1.HumanTag.angry_drunk)) {
                trip.goPeople.filter(function (p) { return p != person; }).forEach(function (otherPerson) {
                    // TODO: make this be one effect (so that we have one description and can say "the others weren't happy"
                    effects.push(new situation_1.SituationEffect(person.name + " got drunk and angry; " + otherPerson.name + " wasn't happy about that.").changeFondness([[[otherPerson.name, person.name], -1]]));
                });
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
                SituationUtils.breakUp([humans_1.HumanName.Beatrice, lovers[0]]).setDescription("Oh no... Beatrice got into a big fight with " + lovers[0] + ", and they broke up."),
            ];
        }
        else {
            return [];
        }
    };
    BeatriceBreakups.BREAK_UP_AFTER = 3;
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
                ]),
            ];
        }
        return [];
    };
    return AlexAndBeatriceGetDrunk;
}());
exports.AlexAndBeatriceGetDrunk = AlexAndBeatriceGetDrunk;
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
        this.infoText = this.add.text(400, 200, '', { fill: '#fff', fontFamily: 'Roboto', fontSize: '20px' })
            .setDepth(1001)
            .setAlpha(0)
            .setAlign('center')
            .setWordWrapWidth(550)
            .setOrigin(0.5, 0.5);
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
        this.allPeopleTexts = [];
        this.allPeopleCircles = [];
        this.allPeopleLines = [];
        this.TEXT_ALPHA_OK = 1;
        this.TEXT_ALPHA_BD = 0.3;
        this.CIRCLE_ALPHA_OK = 0.1;
        this.CIRCLE_ALPHA_BD = 0;
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
            var image = scene.add.image(0, 0, 'portrait_small', i)
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', function () {
                _this.display(human, Number(i));
            })
                .on('pointerout', function () {
                _this.display(level.humans[0], 0);
            });
            var circle = scene.add.ellipse(0, 0, 80, 80, 0x2e2e2e)
                .setOrigin(0.5, 0.5)
                .setAlpha((Number(i) == 0 ? this_1.CIRCLE_ALPHA_OK : this_1.CIRCLE_ALPHA_BD));
            // .setInteractive({ useHandCursor: true })
            // .on('pointerover', () => {
            //     this.display(human, Number(i))
            // })
            var text = scene.add.text(0, 0, "" + human.name, {
                fill: '#1c1c1c',
                fontFamily: 'Roboto',
                fontSize: '18px',
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .setAlpha(Number(i) == 0 ? this_1.TEXT_ALPHA_OK : this_1.TEXT_ALPHA_BD);
            // .on('pointerover', () => {
            //     this.display(human, Number(i))
            // })
            scene.add.group([image, text, circle]).setXY(position.x, position.y);
            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100 + 10);
            circle.setPosition(position.x, position.y + 45 + 15);
            image.setPosition(position.x, position.y + 45 + 10);
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
        };
        var this_1 = this;
        for (var i in level.humans) {
            _loop_1(i);
        }
        this.redrawLines(level);
    }
    HumanStage.prototype.bleachPeople = function () {
        for (var i in this.allPeopleTexts) {
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
        for (var _i = 0, _a = this.allPeopleLines; _i < _a.length; _i++) {
            var g = _a[_i];
            g.destroy(true);
        }
        this.allPeopleLines = [];
        var peopleGraph = level.friendshipManager.peopleGraph;
        for (var hi1 in level.humans) {
            var human1 = level.humans[hi1];
            var group = this.scene.add.group()
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
                var graphics = this.scene.add.graphics();
                if (fondness != peopleGraph_1.DEFAULT_FONDNESS || tags.length != 0) {
                    var diffX = (this.positionsInner[hi1].x - this.positionsInner[hi2].x);
                    var diffY = (this.positionsInner[hi1].y - this.positionsInner[hi2].y);
                    var diffXN = diffX / Math.sqrt(diffX * diffX + diffY * diffY);
                    var diffYN = diffY / Math.sqrt(diffX * diffX + diffY * diffY);
                    var color = this.linearScaleBlack(fondness);
                    var x1 = this.positionsInner[hi1].x - 45 * diffXN;
                    var y1 = this.positionsInner[hi1].y + 60 - 45 * diffYN;
                    var x2 = this.positionsInner[hi2].x + 45 * diffXN;
                    var y2 = this.positionsInner[hi2].y + 60 + 45 * diffYN;
                    var line = this.scene.add.line(0, 0, x1, y1, x2, y2, color, 0.3)
                        .setOrigin(0, 0)
                        .setLineWidth(2);
                    group.add(line);
                    var triangle = this.scene.add.triangle(youChange ? x1 : x2, youChange ? y1 : y2, -10, 0, 10, 0, 0, 10, color)
                        .setOrigin(0, 0)
                        .setRotation(Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2 + (youChange ? Math.PI : 0));
                    group.add(triangle);
                }
                for (var i in tags) {
                    var tag = tags[i];
                    var avgX = (this.positionsInner[hi1].x + this.positionsInner[hi2].x) / 2;
                    var avgY = (this.positionsInner[hi1].y + this.positionsInner[hi2].y) / 2 + 60;
                    var symbol = this.scene.add.image(avgX + (Number(i) - tags.length / 2 + 0.4) * 27, avgY, 'rel_tags')
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
            this.allPeopleLines.push(group);
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
        this.infoText = scene.add.text(25, 270, '', { fill: 'black', fontFamily: 'Roboto' })
            .setWordWrapWidth(190);
    }
    PhoneStage.prototype.display = function (human, index) {
        this.portrait.setFrame(index);
        var humString = Array.from(human.tags)
            .filter(function (x) { return entityTags_1.humanTagMap.has(x); })
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
        this.nameText.setText(humans_1.HumanName[human.name]);
        this.infoText.setText(humString + "\n\n" + relString.join('\n\n'));
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZW50aXR5VGFncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9odW1hbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvbGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2xvY2F0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9zaXR1YXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2h1bWFuX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2xvY2F0aW9uX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L3Bob25lX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9mcmllbmRzaGlwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvaHVtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9wZW9wbGVHcmFwaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvc2l0dWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC90cmlwU3VtbWFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9hZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUEsaUJBcUJDO1FBcEJHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFDVixPQUFNO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFFZixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDakIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3hDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN6QixRQUFRLEVBQUUsR0FBRztZQUNiLFVBQVUsRUFBRTtnQkFDUixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1lBQy9CLENBQUM7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDNUIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLFFBQVEsRUFBRSxHQUFHO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBL0RZLGtDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBlbnVtIFJlbGF0aW9uc2hpcFRhZyB7XG4gICAgY3J1c2gsXG4gICAgbG92ZXIsXG4gICAgZXgsXG4gICAgcG9saXRpY2FsX2RpcyxcbiAgICBsaWtlLCBkaXNsaWtlLCAvLyBzeW1wYXRoaWVzXG4gICAgY3J1c2hhYmxlLFxuICAgIGJvd2xpbmdfYnJhd2wsXG4gICAgZGlzYWJsZV9tdXR1YWxfY3J1c2hfZGF0aW5nLCAvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IHdheSBvZiBnZXR0aW5nIHRvZ2V0aGVyXG59XG5cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXBUYWdNYXA6IE1hcDxSZWxhdGlvbnNoaXBUYWcsIHN0cmluZz4gPSBuZXcgTWFwKFtcbiAgICBbUmVsYXRpb25zaGlwVGFnLmNydXNoLCAnY3J1c2gnXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmxvdmVyLCAnbG92ZXInXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmV4LCAnZXgnXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLnBvbGl0aWNhbF9kaXMsICdwb2xpdGljYWwgZGlzYWdyZWVtZW50J10sXG5dKVxuXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnTWFwU3Rvcnk6IE1hcDxSZWxhdGlvbnNoaXBUYWcsIFtzdHJpbmcsIHN0cmluZ10+ID0gbmV3IE1hcChbXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaCwgWydTVUJKIG5vdyBoYXMgYSBjcnVzaCBvbiBPQkonLCAnU1VCSiBsb3N0IGEgY3J1c2ggb24gT0JKJ11dLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXIsIFtgU1VCSiBhbmQgT0JKIHN0YXJ0ZWQgZGF0aW5nIWAsICdTVUJKIGFuZCBPQkogYXJlIG5vIGxvbmdlciBsb3ZlcnMnXV0sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5leCwgW2BEaWQgeW91IGhlYXI/IFNVQkogYW5kIE9CSiBicm9rZSB1cCFgLCAnU1VCSiBpcyBub3QgYW4gZXggb2YgT0JKIGFueW1vcmUnXV0sXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5wb2xpdGljYWxfZGlzLCBbJ1NVQkogbm93IGhhcyBhIHBvbGl0aWNhbCBkaXNhZ3JlZW1lbnQgd2l0aCBPQkonLCAnU1VCSiBubyBsb25nZXIgaGFzIGEgcG9saXRpY2FsIGRpc2FncmVlbWVudCB3aXRoIE9CSiddXSxcbl0pXG5cbmV4cG9ydCBjb25zdCByZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsOiBTZXQ8UmVsYXRpb25zaGlwVGFnPiA9IG5ldyBTZXQoW1xuICAgIFJlbGF0aW9uc2hpcFRhZy5sb3ZlcixcbiAgICBSZWxhdGlvbnNoaXBUYWcucG9saXRpY2FsX2RpcyxcbiAgICBSZWxhdGlvbnNoaXBUYWcuZXgsXG5dKVxuXG4vLyBJZiB0aGUgZmlyc3QgaXRlbSBpcyBpbiBORVcsIHRoZSBzZWNvbmQgaXMgcmVtb3ZlZCBmcm9tIFJFTVxuZXhwb3J0IGNvbnN0IHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ05ld1JlbTogQXJyYXk8W1JlbGF0aW9uc2hpcFRhZywgUmVsYXRpb25zaGlwVGFnXT4gPSBbXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5sb3ZlciwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmV4LCBSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuXG5dXG5cbi8vIElmIHRoZSBmaXJzdCBpdGVtIGlzIGluIFJFTSwgdGhlIHNlY29uZCBpcyByZW1vdmVkIGZyb20gTkVXXG5leHBvcnQgY29uc3QgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nUmVtTmV3OiBBcnJheTxbUmVsYXRpb25zaGlwVGFnLCBSZWxhdGlvbnNoaXBUYWddPiA9IFtcbl1cblxuZXhwb3J0IGVudW0gSHVtYW5UYWcge1xuICAgIGludHJvdmVydCwgZXh0cm92ZXJ0LCBhbmdyeV9kcnVuaywgc2FkX2RydW5rLFxuICAgIGdvb2RfYm93bGVyLCBiYWRfYm93bGVyLCBwcm9taXNjdW91cywgamVhbG91cywgZGlzYWdyZWVhYmxlLFxuICAgIGFncmVlYWJsZSwgc3VwcG9ydGl2ZSwgYXR0ZW50aW9uLFxuICAgIGZsYXZpZV9hbmdyeSxcbiAgICBkYW5fYnVzdGVkLFxuICAgIGdvbmUsXG4gICAgZnJhZ2lsZV9mbGF2aWVfMSwgZnJhZ2lsZV9mbGF2aWVfMlxufVxuXG5leHBvcnQgY29uc3QgaHVtYW5UYWdNYXA6IE1hcDxIdW1hblRhZywgc3RyaW5nPiA9IG5ldyBNYXAoW1xuICAgIFtIdW1hblRhZy5pbnRyb3ZlcnQsICdpbnRyb3ZlcnQnXSxcbiAgICBbSHVtYW5UYWcuZXh0cm92ZXJ0LCAnZXh0cm92ZXJ0J10sXG4gICAgW0h1bWFuVGFnLmFuZ3J5X2RydW5rLCAnYW5ncnkgd2hlbiBkcnVuayddLFxuICAgIFtIdW1hblRhZy5zYWRfZHJ1bmssICdzYWQgd2hlbiBkcnVuayddLFxuICAgIFtIdW1hblRhZy5nb29kX2Jvd2xlciwgJ2dvb2QgYm93bGVyJ10sXG4gICAgW0h1bWFuVGFnLmJhZF9ib3dsZXIsICdiYWQgYm93bGVyJ10sXG4gICAgLy8gW0h1bWFuVGFnLnByb21pc2N1b3VzLCAncHJvbWlzY3VvdXMnXSxcbiAgICBbSHVtYW5UYWcuamVhbG91cywgJ2plYWxvdXMnXSxcbiAgICBbSHVtYW5UYWcuZGlzYWdyZWVhYmxlLCAnZGlzYWdyZWVhYmxlJ10sXG4gICAgW0h1bWFuVGFnLmFncmVlYWJsZSwgJ2FncmVlYWJsZSddLFxuICAgIFtIdW1hblRhZy5zdXBwb3J0aXZlLCAnc3VwcG9ydGl2ZSBmcmllbmQnXSxcbiAgICBbSHVtYW5UYWcuYXR0ZW50aW9uLCAnYXR0ZW50aW9uIHNlZWtlciddLFxuXSlcbiIsImV4cG9ydCBlbnVtIEh1bWFuTmFtZSB7XG4gICAgWW91ID0gJ1lvdScsXG4gICAgQWxleCA9ICdBbGV4JyxcbiAgICBCZWF0cmljZSA9ICdCZWF0cmljZScsXG4gICAgQ2VjaWwgPSAnQ2VjaWwnLFxuICAgIERhbiA9ICdEYW4nLFxuICAgIEVyaWMgPSAnRXJpYycsXG4gICAgRmxhdmllID0gJ0ZsYXZpZScsXG59IiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgQ291cGxlLCBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi4vbW9kZWwvcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgSHVtYW4gfSBmcm9tIFwiLi4vbW9kZWwvaHVtYW5cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuaW1wb3J0IHtcbiAgICBBbGV4QW5kQmVhdHJpY2VHZXREcnVuayxcbiAgICBBbGV4QW5kQ2VjaWwsXG4gICAgQmVhdHJpY2VCcmVha3VwcyxcbiAgICBDb21wbGV4LFxuICAgIEV0ZXJuYWxDb3VwbGUsXG4gICAgTXV0dWFsQ3J1c2gsXG4gICAgTm9ib2R5TGlrZXNBbmdyeURydW5rLFxuICAgIFNpdHVhdGlvblV0aWxzLFxuICAgIFN5bXBhdGhpZXMsXG4gICAgVXBkYXRlRm9uZG5lc3NCYXNlZFRhZ3MsXG59IGZyb20gXCIuL3NpdHVhdGlvbnNcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4vaHVtYW5zXCJcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gXCIuL2xvY2F0aW9uc1wiXG5pbXBvcnQgeyBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi4vbW9kZWwvc2l0dWF0aW9uXCJcblxuZXhwb3J0IGxldCBsZXZlbHM6IEFycmF5PExldmVsPiA9IFtdXG5cbmxldCBsb2NhdGlvbnM6IExvY2F0aW9uTmFtZVtdID0gW1xuICAgIExvY2F0aW9uTmFtZS5Cb3dsaW5nLFxuICAgIExvY2F0aW9uTmFtZS5EcmluayxcbiAgICBMb2NhdGlvbk5hbWUuSGlraW5nLFxuXVxuXG4vLyBZb3UgaXMgYWx3YXlzIG9uIHRoZSB6ZXJvdGggcG9zaXRpb25cblxuZnVuY3Rpb24gbXV0dWFsUmVsYXRpb25zaGlwKHBlb3BsZTogQ291cGxlLCB0YWdzOiBSZWxhdGlvbnNoaXBUYWdbXSk6IFtSZWxhdGlvbnNoaXAsIFJlbGF0aW9uc2hpcF0ge1xuICAgIGNvbnN0IHRhZ1NldCA9IG5ldyBTZXQodGFncylcbiAgICBjb25zdCBbYSwgYl0gPSBwZW9wbGVcblxuICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW2EsIGJdLCB0YWdTZXQpLFxuICAgICAgICBuZXcgUmVsYXRpb25zaGlwKFtiLCBhXSwgdGFnU2V0KSxcbiAgICBdXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW48VD4oYXJyOiBBcnJheTxUIHwgVFtdPik6IEFycmF5PFQ+IHtcbiAgICBsZXQgcmVzID0gW11cblxuICAgIGZvciAoY29uc3QgYSBvZiBhcnIpIHtcbiAgICAgICAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgcmVzLnB1c2goLi4uYSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzXG59XG5cbmNvbnN0IGRhblR3b0dpcmxmcmllbmRzQnVzdGVkID0gbmV3IENvbXBsZXgoe1xuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkZsYXZpZV0sXG4gICAgcmVsVGFnc1JlcTogW1xuICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5CZWF0cmljZV0sIFJlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sIC8vIHNob3VsZCBiZSBzeW1tZXRyaWMgYW55d2F5c1xuICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWVdLCBSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuICAgIF0sXG4gICAgZWZmZWN0czogW1xuICAgICAgICBTaXR1YXRpb25VdGlscy5icmVha1VwKFtIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuQmVhdHJpY2VdKSxcbiAgICAgICAgU2l0dWF0aW9uVXRpbHMuYnJlYWtVcChbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0pLFxuICAgICAgICBuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgICAgIC5hZGRIdW1UYWdzKFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5UYWcuZGFuX2J1c3RlZF1dKVxuICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5Zb3VdLCAtNV0sXG4gICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5EYW5dLCAtN10sXG4gICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCAtMl0sXG4gICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuRGFuXSwgLTddLFxuICAgICAgICAgICAgICAgIFtbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZV0sIC0yXSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5CZWF0cmljZV0sICs0XSxcbiAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkZsYXZpZV0sICs0XSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJVaCBvaC4uLiBEYW4gd2FzIGRhdGluZyBCZWF0cmljZSBhbmQgRmxhdmllIGF0IHRoZSBzYW1lIHRpbWUsXCIgK1xuICAgICAgICAgICAgICAgIFwiIGFuZCBub3cgdGhleSBmb3VuZCBvdXQhIE5vIG1vcmUgRGFuIEp1YW4uXCIpLFxuICAgIF0sXG59KVxuY29uc3QgZnJhZ2lsZUZsYXZpZTEgPSBuZXcgQ29tcGxleCh7ICAgIC8vRmxhdmllIHZzIEFsZXggZXZlbnQgMVxuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuRmxhdmllXSxcbiAgICBhbGxvd2VkTG9jYXRpb25zOiBbTG9jYXRpb25OYW1lLkhpa2luZ10sXG4gICAgaHVtVGFnc0JhbjogW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hblRhZy5mcmFnaWxlX2ZsYXZpZV8xXV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkFsZXhdLCAtM11dKS5hZGRSZWxUYWdzKFtcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlXV0pXG4gICAgICAgIC5hZGRIdW1UYWdzKFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZnJhZ2lsZV9mbGF2aWVfMV1dKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0FsZXggbWFkZSBmdW4gb2YgRmxhdmllXFwncyB2ZWdhbiBzbmFja3MsIGFuZCBzaGUgZ290IHJlYWxseSB1cHNldC4gQnV0IEFsZXggbWFrZXMgZnVuIG9mIGV2ZXJ5Ym9keSwgcmlnaHQ/JyldLFxufSlcbmNvbnN0IGZyYWdpbGVGbGF2aWUyID0gbmV3IENvbXBsZXgoeyAgICAvL0ZsYXZpZSB2cyBBbGV4IGV2ZW50IDJcbiAgICBodW1SZXE6IFtIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkZsYXZpZV0sXG4gICAgYWxsb3dlZExvY2F0aW9uczogW0xvY2F0aW9uTmFtZS5IaWtpbmddLFxuICAgIGh1bVRhZ3NSZXE6IFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZnJhZ2lsZV9mbGF2aWVfMV1dLFxuICAgIGh1bVRhZ3NCYW46IFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZnJhZ2lsZV9mbGF2aWVfMl1dLFxuICAgIGVmZmVjdHM6IFtuZXcgU2l0dWF0aW9uRWZmZWN0KCkucmVtb3ZlUmVsVGFncyhbW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sIFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlXV0pXG4gICAgICAgIC5jaGFuZ2VGb25kbmVzcyhbW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuQWxleF0sICsxXV0pXG4gICAgICAgIC5hZGRIdW1UYWdzKFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZnJhZ2lsZV9mbGF2aWVfMl1dKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0FsZXggc2F3IHRoYXQgaGVyIGNvbW1lbnQgcmVhbGx5IGh1cnQgRmxhdmllXFwncyBmZWVsaW5ncywgYW5kIGFwb2xvZ2lzZWQuIFNoZSBldmVuIGJyb3VnaHQgaGVyIGEgdmVnYW4gRmxhcGphY2suJyldLFxufSlcblxuY29uc3QgZmxhdmllRm9tbzEgPSBuZXcgQ29tcGxleCh7ICAgIC8vRmxhdmllIEZPTU8gZXZlbnQgMVxuICAgIGh1bVJlcTogW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2UsIEh1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkVyaWNdLFxuICAgIGh1bUJhbjogW0h1bWFuTmFtZS5GbGF2aWVdLFxuICAgIGh1bVRhZ3NCYW46IFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5UYWcuZmxhdmllX2FuZ3J5XV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkFsZXhdLCAtMV0sXG4gICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgLTFdLFxuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5DZWNpbF0sIC0xXSxcbiAgICAgICAgW1tIdW1hbk5hbWUuRmxhdmllLCBIdW1hbk5hbWUuRGFuXSwgLTFdLFxuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5FcmljXSwgLTFdLFxuICAgICAgICBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuTmFtZS5Zb3VdLCAtM10sXG4gICAgXSkuYWRkSHVtVGFncyhbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuVGFnLmZsYXZpZV9hbmdyeV1dKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0ZsYXZpZSBpcyBhbmdyeSB0aGF0IHlvdSBpbnZpdGVkIGV2ZXJ5Ym9keSBleGNlcHQgaGVyLicpXSxcbn0pXG5cbmNvbnN0IGZsYXZpZUZvbW8yID0gbmV3IENvbXBsZXgoeyAgICAvL0ZsYXZpZSBGT01PIGV2ZW50IDJcbiAgICBodW1SZXE6IFtIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5FcmljXSxcbiAgICBodW1CYW46IFtIdW1hbk5hbWUuRmxhdmllXSxcbiAgICBodW1UYWdzUmVxOiBbW0h1bWFuTmFtZS5GbGF2aWUsIEh1bWFuVGFnLmZsYXZpZV9hbmdyeV1dLFxuICAgIGVmZmVjdHM6IFtuZXcgU2l0dWF0aW9uRWZmZWN0KCkuY2hhbmdlRm9uZG5lc3MoW1tbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLllvdV0sIC0xMF1dKVxuICAgICAgICAuc2V0RGVzY3JpcHRpb24oJ0ZsYXZpZSBjYW1lIHVuaW52aXRlZCwgY2hld2VkIHlvdSBvdXQsIGFuZCBsZWZ0LiBGb3JldmVyLicpXSxcbn0pXG5jb25zdCBib3dsaW5nYnJhd2wgPSBuZXcgQ29tcGxleCh7XG4gICAgaHVtUmVxOiBbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRGFuXSxcbiAgICBhbGxvd2VkTG9jYXRpb25zOiBbTG9jYXRpb25OYW1lLkJvd2xpbmddLFxuICAgIHJlbFRhZ3NCYW46IFtbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbl0sIFJlbGF0aW9uc2hpcFRhZy5ib3dsaW5nX2JyYXdsXV0sXG4gICAgZWZmZWN0czogW25ldyBTaXR1YXRpb25FZmZlY3QoKS5jaGFuZ2VGb25kbmVzcyhbXG4gICAgICAgIFtbSHVtYW5OYW1lLkNlY2lsLCBIdW1hbk5hbWUuRGFuXSwgLTJdLFxuICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5DZWNpbF0sIC0yXV0pXG4gICAgICAgIC5hZGRSZWxUYWdzKFtbW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkRhbl0sIFJlbGF0aW9uc2hpcFRhZy5ib3dsaW5nX2JyYXdsXV0pXG4gICAgICAgIC5zZXREZXNjcmlwdGlvbignQ2VjaWwgYW5kIERhbiBiZXQgd2hvIGNvdWxkIHNjb3JlIHRoZSBtb3N0IGluIGJvd2xpbmcuJyArXG4gICAgICAgICAgICAnIERhbiB0aG91Z2h0IGhlIHdvdWxkIHdpbiBlYXNpbHksIGJ1dCBDZWNpbCBkaWQuJyArXG4gICAgICAgICAgICAnIFNvIERhbiBhY2N1c2VkIGhpbSBvZiBjaGVhdGluZywgYW5kIHRoZXkgZ290IGludG8gYSBmaWdodCEnKV0sXG4gICAgcHJvY2Vzc0VmZmVjdHM6IGZ1bmN0aW9uICh0cmlwLCBjdXJyZW50U3RhdGUsIGJhc2VFZmZlY3RzKSB7XG4gICAgICAgIHRyaXAuZ29QZW9wbGUuZmlsdGVyKHAgPT4gKHAubmFtZSAhPSBIdW1hbk5hbWUuQ2VjaWwpICYmIChwLm5hbWUgIT0gSHVtYW5OYW1lLkRhbikpLmZvckVhY2gocCA9PiB7XG4gICAgICAgICAgICBiYXNlRWZmZWN0c1swXS5jaGFuZ2VkRm9uZG5lc3MucHVzaChbW3AubmFtZSwgSHVtYW5OYW1lLkNlY2lsXSwgLTJdKVxuICAgICAgICAgICAgYmFzZUVmZmVjdHNbMF0uY2hhbmdlZEZvbmRuZXNzLnB1c2goW1twLm5hbWUsIEh1bWFuTmFtZS5EYW5dLCAtMV0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBiYXNlRWZmZWN0c1xuICAgIH0sXG59KVxuXG5jb25zdCBQUkVTRU5UX0ZPTkRORVNTX0NIQU5HRSA9ICsyXG5jb25zdCBBQlNFTlRfRk9ORE5FU1NfQ0hBTkdFID0gLTFcblxuY29uc3QgYmFzZUZvbmRuZXNzQ2hhbmdlcyA9IG5ldyBDb21wbGV4KHtcbiAgICBwcm9jZXNzRWZmZWN0czogZnVuY3Rpb24gKHRyaXAsIGN1cnJlbnRTdGF0ZSwgYmFzZUVmZmVjdHMpIHtcbiAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuICAgICAgICBjdXJyZW50U3RhdGUuZ2V0QWxsSHVtYW5OYW1lcygpLmZvckVhY2goaE5hbWUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSkuaW5jbHVkZXMoaE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbaE5hbWUsIEh1bWFuTmFtZS5Zb3VdLCBBQlNFTlRfRk9ORE5FU1NfQ0hBTkdFXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0LmNoYW5nZWRGb25kbmVzcy5wdXNoKFtbaE5hbWUsIEh1bWFuTmFtZS5Zb3VdLCBQUkVTRU5UX0ZPTkRORVNTX0NIQU5HRV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIGJhc2VFZmZlY3RzLmNvbmNhdChbZWZmZWN0XSlcbiAgICB9LFxufSlcblxubGV2ZWxzLnB1c2goXG4gICAgbmV3IExldmVsKFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLllvdSksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkFsZXgpLFxuICAgICAgICAgICAgbmV3IEh1bWFuKEh1bWFuTmFtZS5CZWF0cmljZSksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkNlY2lsKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbihIdW1hbk5hbWUuRGFuKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbihIdW1hbk5hbWUuRXJpYyksXG4gICAgICAgICAgICBuZXcgSHVtYW4oSHVtYW5OYW1lLkZsYXZpZSksXG4gICAgICAgIF0sXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgZmxhdHRlbihbXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLFxuICAgICAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2gsIFJlbGF0aW9uc2hpcFRhZy5kaXNhYmxlX211dHVhbF9jcnVzaF9kYXRpbmddKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5DZWNpbF0sXG4gICAgICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaCwgUmVsYXRpb25zaGlwVGFnLmxpa2UsIFJlbGF0aW9uc2hpcFRhZy5kaXNhYmxlX211dHVhbF9jcnVzaF9kYXRpbmddKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkVyaWMsIEh1bWFuTmFtZS5BbGV4XSxbUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkJlYXRyaWNlXSxbUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWVdLCBbUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZSwgUmVsYXRpb25zaGlwVGFnLmNydXNoLCBSZWxhdGlvbnNoaXBUYWcubGlrZV0pLFxuICAgICAgICAgICAgbXV0dWFsUmVsYXRpb25zaGlwKFtIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5GbGF2aWVdLCBbUmVsYXRpb25zaGlwVGFnLmxpa2VdKSxcbiAgICAgICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW0h1bWFuTmFtZS5DZWNpbCwgSHVtYW5OYW1lLkZsYXZpZV0sIG5ldyBTZXQoW1JlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUsIFJlbGF0aW9uc2hpcFRhZy5jcnVzaF0pKSxcbiAgICAgICAgXSksXG4gICAgICAgIFtcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuVGFnLmludHJvdmVydF0sXG4gICAgICAgICAgICBbSHVtYW5OYW1lLkRhbiwgSHVtYW5UYWcuZXh0cm92ZXJ0XSxcbiAgICAgICAgICAgIFtIdW1hbk5hbWUuRGFuLCBIdW1hblRhZy5hbmdyeV9kcnVua10sXG4gICAgICAgICAgICBbSHVtYW5OYW1lLkRhbiwgSHVtYW5UYWcucHJvbWlzY3VvdXNdLFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuQWxleF0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRXJpYywgSHVtYW5OYW1lLkFsZXhdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkFsZXgsIEh1bWFuTmFtZS5FcmljXSwgN10sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5FcmljLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRXJpY10sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuRGFuLCBIdW1hbk5hbWUuQmVhdHJpY2VdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkJlYXRyaWNlLCBIdW1hbk5hbWUuRGFuXSwgN10sXG4gICAgICAgICAgICBbW0h1bWFuTmFtZS5EYW4sIEh1bWFuTmFtZS5GbGF2aWVdLCA3XSxcbiAgICAgICAgICAgIFtbSHVtYW5OYW1lLkZsYXZpZSwgSHVtYW5OYW1lLkRhbl0sIDddLFxuICAgICAgICAgICAgW1tIdW1hbk5hbWUuQ2VjaWwsIEh1bWFuTmFtZS5GbGF2aWVdLCA3XSxcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFN5bXBhdGhpZXMoKSxcbiAgICAgICAgICAgIG5ldyBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmsoKSxcbiAgICAgICAgICAgIG5ldyBBbGV4QW5kQ2VjaWwoKSwgLy8gbXVzdCBiZSBiZWZvcmUgTXV0dWFsQ3J1c2hcbiAgICAgICAgICAgIG5ldyBNdXR1YWxDcnVzaCgpLFxuICAgICAgICAgICAgbmV3IEV0ZXJuYWxDb3VwbGUoSHVtYW5OYW1lLkRhbiwgSHVtYW5OYW1lLkZsYXZpZSksXG4gICAgICAgICAgICBuZXcgQmVhdHJpY2VCcmVha3VwcygpLFxuICAgICAgICAgICAgbmV3IEFsZXhBbmRCZWF0cmljZUdldERydW5rKCksXG5cbiAgICAgICAgICAgIGJvd2xpbmdicmF3bCxcbiAgICAgICAgICAgIGZsYXZpZUZvbW8yLCAvLyAyIG11c3QgYmUgYmVmb3JlIDEgKGVsc2UgYm90aCBoYXBwZW4gc2ltdWx0YW5lb3VzbHkpXG4gICAgICAgICAgICBmbGF2aWVGb21vMSxcbiAgICAgICAgICAgIGRhblR3b0dpcmxmcmllbmRzQnVzdGVkLFxuICAgICAgICAgICAgYmFzZUZvbmRuZXNzQ2hhbmdlcyxcbiAgICAgICAgICAgIGZyYWdpbGVGbGF2aWUyLCAvLyB6YXMgc3Rlam5laiBpc3N1ZVxuICAgICAgICAgICAgZnJhZ2lsZUZsYXZpZTEsXG5cbiAgICAgICAgICAgIG5ldyBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncygpLFxuICAgICAgICBdLFxuICAgICksXG4pICAgICAgICAiLCJleHBvcnQgZW51bSBMb2NhdGlvbk5hbWUge1xuICAgIEJvd2xpbmcgPSAnQm93bGluZycsXG4gICAgRHJpbmsgPSAnRHJpbmtpbmcnLFxuICAgIEhpa2luZyA9ICdIaWtpbmcnLFxufSIsImltcG9ydCB7IFNpdHVhdGlvbiwgU2l0dWF0aW9uRWZmZWN0IH0gZnJvbSBcIi4uL21vZGVsL3NpdHVhdGlvblwiXG5pbXBvcnQgeyBUcmlwU3VtbWFyeSB9IGZyb20gXCIuLi9tb2RlbC90cmlwU3VtbWFyeVwiXG5pbXBvcnQgeyBDb3VwbGUsIFBlb3BsZUdyYXBoIH0gZnJvbSBcIi4uL21vZGVsL3Blb3BsZUdyYXBoXCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcgfSBmcm9tIFwiLi9lbnRpdHlUYWdzXCJcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuc1wiXG5pbXBvcnQgeyBMb2NhdGlvbk5hbWUgfSBmcm9tIFwiLi9sb2NhdGlvbnNcIlxuXG5cbmV4cG9ydCBjbGFzcyBTaXR1YXRpb25VdGlscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0VG9EYXRlKGNvdXBsZTogQ291cGxlKTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gY291cGxlXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVJlbGF0aW9uc2hpcChcbiAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcubG92ZXJdLFxuICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaCwgUmVsYXRpb25zaGlwVGFnLmV4XSxcbiAgICAgICAgICAgICsxMCxcbiAgICAgICAgKS5zZXREZXNjcmlwdGlvbihgQWZ0ZXIgaGF2aW5nIGZ1biBhdCB0aGUgbmlnaHQgb3V0LCAke2F9IGFuZCAke2J9IHN0YXJ0ZWQgZGF0aW5nLmApXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBicmVha1VwKGNvdXBsZTogQ291cGxlKTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gY291cGxlXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZVJlbGF0aW9uc2hpcChcbiAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgIFtSZWxhdGlvbnNoaXBUYWcuZXhdLFxuICAgICAgICAgICAgW1JlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sXG4gICAgICAgICAgICAtNixcbiAgICAgICAgKS5zZXREZXNjcmlwdGlvbihgJHthfSBhbmQgJHtifSBicm9rZSB1cCFgKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlUmVsYXRpb25zaGlwKFxuICAgICAgICBjb3VwbGU6IENvdXBsZSxcbiAgICAgICAgYWRkZWRSZWxUYWdzOiBSZWxhdGlvbnNoaXBUYWdbXSxcbiAgICAgICAgcmVtb3ZlZFJlbFRhZ3M6IFJlbGF0aW9uc2hpcFRhZ1tdLFxuICAgICAgICBmb25kbmVzc0NoYW5nZTogbnVtYmVyLFxuICAgICAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICApOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICBjb25zdCBbYSwgYl0gPSBjb3VwbGVcblxuICAgICAgICBmdW5jdGlvbiBicm9hZGNhc3QodGFnczogUmVsYXRpb25zaGlwVGFnW10pOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gbmV3IEFycmF5XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB0YWdzKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goW1thLCBiXSwgdGFnXSlcbiAgICAgICAgICAgICAgICByZXMucHVzaChbW2IsIGFdLCB0YWddKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBTaXR1YXRpb25FZmZlY3QoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAuYWRkUmVsVGFncyhicm9hZGNhc3QoYWRkZWRSZWxUYWdzKSlcbiAgICAgICAgICAgIC5yZW1vdmVSZWxUYWdzKGJyb2FkY2FzdChyZW1vdmVkUmVsVGFncykpXG4gICAgICAgICAgICAuY2hhbmdlRm9uZG5lc3MoW1xuICAgICAgICAgICAgICAgIFtbYSwgYl0sIGZvbmRuZXNzQ2hhbmdlXSxcbiAgICAgICAgICAgICAgICBbW2IsIGFdLCBmb25kbmVzc0NoYW5nZV0sXG4gICAgICAgICAgICBdKVxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U29tZW9uZU9uVHJpcFdpdGhUYWcodHJpcDogVHJpcFN1bW1hcnksIHBlcnNvbjogSHVtYW5OYW1lLCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0YWc6IFJlbGF0aW9uc2hpcFRhZykge1xuICAgICAgICByZXR1cm4gdHJpcC5nb1Blb3BsZVxuICAgICAgICAgICAgLmZpbHRlcihvUGVyc29uID0+IG9QZXJzb24ubmFtZSAhPSBwZXJzb24pXG4gICAgICAgICAgICAuZmluZChvUGVyc29uID0+IGN1cnJlbnRTdGF0ZS5nZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihwZXJzb24sIG9QZXJzb24ubmFtZSkuc29tZSh0ID0+IHQgPT0gdGFnKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldExvdmVycyhwZXJzb246IEh1bWFuTmFtZSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEh1bWFuTmFtZVtdIHtcbiAgICAgICAgbGV0IHJlcyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCByZWwgb2YgY3VycmVudFN0YXRlLmdldE91dFJlbGF0aW9uc2hpcHMocGVyc29uKSkge1xuICAgICAgICAgICAgaWYgKHJlbC50YWdzLmhhcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocmVsLnBlb3BsZVsxXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzU2luZ2xlKHBlcnNvbjogSHVtYW5OYW1lLCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExvdmVycyhwZXJzb24sIGN1cnJlbnRTdGF0ZSkubGVuZ3RoID09IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN1YnNldDxUPihhczogVFtdLCBiczogVFtdKSB7XG4gICAgICAgIHJldHVybiBhcy5ldmVyeShhID0+IGJzLmluY2x1ZGVzKGEpKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbXBsZVNpdHVhdGlvbiBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHJpdmF0ZSBoYXZlVG9CZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT5cbiAgICBwcml2YXRlIGNhbm5vdEJlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPlxuICAgIHByaXZhdGUgYWxsb3dlZExvY2F0aW9uczogQXJyYXk8TG9jYXRpb25OYW1lPlxuXG4gICAgcHVibGljIGVmZmVjdDogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGhhdmVUb0JlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPixcbiAgICAgICAgY2Fubm90QmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+LFxuICAgICAgICBhbGxvd2VkTG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+LFxuICAgICAgICBlZmZlY3Q6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4sXG4gICAgKSB7XG5cbiAgICAgICAgdGhpcy5oYXZlVG9CZVByZXNlbnQgPSBoYXZlVG9CZVByZXNlbnRcbiAgICAgICAgdGhpcy5jYW5ub3RCZVByZXNlbnQgPSBjYW5ub3RCZVByZXNlbnRcbiAgICAgICAgdGhpcy5hbGxvd2VkTG9jYXRpb25zID0gYWxsb3dlZExvY2F0aW9uc1xuICAgICAgICB0aGlzLmVmZmVjdCA9IGVmZmVjdFxuICAgIH1cblxuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgXzogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBcHBsaWNhYmxlKHRyaXApID8gdGhpcy5lZmZlY3QgOiBuZXcgQXJyYXkoKVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0FwcGxpY2FibGUodHJpcDogVHJpcFN1bW1hcnkpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IG5hbWVzUHJlc2VudCA9IHRyaXAuZ29QZW9wbGUubWFwKHAgPT4gcC5uYW1lKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmhhdmVUb0JlUHJlc2VudC5ldmVyeShocCA9PiBuYW1lc1ByZXNlbnQuaW5jbHVkZXMoaHApKSAmJlxuICAgICAgICAgICAgdGhpcy5jYW5ub3RCZVByZXNlbnQuZXZlcnkoY3AgPT4gIW5hbWVzUHJlc2VudC5pbmNsdWRlcyhjcCkpICYmXG4gICAgICAgICAgICB0aGlzLmFsbG93ZWRMb2NhdGlvbnMuc29tZShsb2MgPT4gbG9jID09IHRyaXAuZ29Mb2NhdGlvbilcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmsgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBpZiAodHJpcC5nb0xvY2F0aW9uICE9IExvY2F0aW9uTmFtZS5Ecmluaykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZWZmZWN0cyA9IG5ldyBBcnJheSgpXG4gICAgICAgIHRyaXAuZ29QZW9wbGUuZm9yRWFjaChwZXJzb24gPT4ge1xuICAgICAgICAgICAgbGV0IHBlcnNvblRhZ3MgPSBjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhwZXJzb24ubmFtZSlcbiAgICAgICAgICAgIGlmIChwZXJzb25UYWdzLmhhcyhIdW1hblRhZy5hbmdyeV9kcnVuaykpIHtcbiAgICAgICAgICAgICAgICB0cmlwLmdvUGVvcGxlLmZpbHRlcihwID0+IHAgIT0gcGVyc29uKS5mb3JFYWNoKG90aGVyUGVyc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogbWFrZSB0aGlzIGJlIG9uZSBlZmZlY3QgKHNvIHRoYXQgd2UgaGF2ZSBvbmUgZGVzY3JpcHRpb24gYW5kIGNhbiBzYXkgXCJ0aGUgb3RoZXJzIHdlcmVuJ3QgaGFwcHlcIlxuICAgICAgICAgICAgICAgICAgICBlZmZlY3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgU2l0dWF0aW9uRWZmZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3BlcnNvbi5uYW1lfSBnb3QgZHJ1bmsgYW5kIGFuZ3J5OyAke290aGVyUGVyc29uLm5hbWV9IHdhc24ndCBoYXBweSBhYm91dCB0aGF0LmAsXG4gICAgICAgICAgICAgICAgICAgICAgICApLmNoYW5nZUZvbmRuZXNzKFtbW290aGVyUGVyc29uLm5hbWUsIHBlcnNvbi5uYW1lXSwgLTFdXSksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBlZmZlY3RzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXV0dWFsQ3J1c2ggaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgZWZmZWN0cyA9IG5ldyBBcnJheSgpXG4gICAgICAgIGxldCBjcnVzaGVzTWFwOiBNYXA8SHVtYW5OYW1lLCBIdW1hbk5hbWVbXT4gPSBuZXcgTWFwKClcbiAgICAgICAgbGV0IGVsaWdpYmxlUGVvcGxlID0gW11cblxuICAgICAgICBmb3IgKGNvbnN0IHBlcnNvbiBvZiB0cmlwLmdvUGVvcGxlKSB7XG4gICAgICAgICAgICBsZXQgbG92ZXJPblRyaXAgPSBTaXR1YXRpb25VdGlscy5nZXRTb21lb25lT25UcmlwV2l0aFRhZyh0cmlwLCBwZXJzb24ubmFtZSwgY3VycmVudFN0YXRlLCBSZWxhdGlvbnNoaXBUYWcubG92ZXIpXG4gICAgICAgICAgICBpZiAobG92ZXJPblRyaXApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoU2l0dWF0aW9uVXRpbHMuZ2V0TG92ZXJzKHBlcnNvbi5uYW1lLCBjdXJyZW50U3RhdGUpLmxlbmd0aCA+PSAxXG4gICAgICAgICAgICAgICAgJiYgIWN1cnJlbnRTdGF0ZS5nZXRIdW1UYWdzKHBlcnNvbi5uYW1lKS5oYXMoSHVtYW5UYWcucHJvbWlzY3VvdXMpKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gcG9seWdhbXkgdW5sZXNzIHRoZSBwcm9taXNjdW91cyB0YWcgaXMgcHJlc2VudC5cbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3J1c2hlc1ByZXNlbnQgPSB0cmlwLmdvUGVvcGxlLmZpbHRlcihcbiAgICAgICAgICAgICAgICBiID0+IGN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2VlbihwZXJzb24ubmFtZSwgYi5uYW1lKS5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcuY3J1c2gpLFxuICAgICAgICAgICAgKS5tYXAoaCA9PiBoLm5hbWUpXG5cbiAgICAgICAgICAgIGlmIChjcnVzaGVzUHJlc2VudC5sZW5ndGggIT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcnVzaGVzTWFwLnNldChwZXJzb24ubmFtZSwgY3J1c2hlc1ByZXNlbnQpXG4gICAgICAgICAgICBlbGlnaWJsZVBlb3BsZS5wdXNoKHBlcnNvbi5uYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBwZXJzb24gb2YgZWxpZ2libGVQZW9wbGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNydXNoZXMgPSBjcnVzaGVzTWFwLmdldChwZXJzb24pXG4gICAgICAgICAgICBpZiAoY3J1c2hlcz8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3J1c2ggPSBjcnVzaGVzWzBdXG4gICAgICAgICAgICAgICAgaWYgKCFlbGlnaWJsZVBlb3BsZS5pbmNsdWRlcyhjcnVzaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2VlbihwZXJzb24sIGNydXNoKVxuICAgICAgICAgICAgICAgICAgICAuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmRpc2FibGVfbXV0dWFsX2NydXNoX2RhdGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQnJlYWsgc3ltbWV0cnkgYnkgY29tcGFyaW5nIG5hbWVzXG4gICAgICAgICAgICAgICAgaWYgKGNydXNoZXNNYXAuZ2V0KGNydXNoKT8ubGVuZ3RoID09PSAxICYmIGNydXNoIDw9IHBlcnNvbikge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXR1YXRpb25VdGlscy5zdGFydFRvRGF0ZShbcGVyc29uLCBjcnVzaF0pLFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVmZmVjdHNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFdGVybmFsQ291cGxlIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBhbHdheXM6IEh1bWFuTmFtZVxuICAgIG9ubHlXaGVuTm90SW5PdGhlclJlbDogSHVtYW5OYW1lXG5cbiAgICBsYXN0Q2hhbmdlOiBudW1iZXIgPSAwXG4gICAgc3RhdGljIENIQU5HRV9BRlRFUiA9IDNcbiAgICB0b2dldGhlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgbkJyZWFrdXBzID0gMFxuICAgIG5NYWtldXBzID0gMFxuICAgIGRhbkJ1c3RlZE1lc3NhZ2VGaXJlZCA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3RvcihhbHdheXM6IEh1bWFuTmFtZSwgb25seVdoZW5Ob3RJbk90aGVyUmVsOiBIdW1hbk5hbWUpIHtcbiAgICAgICAgdGhpcy5hbHdheXMgPSBhbHdheXNcbiAgICAgICAgdGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWwgPSBvbmx5V2hlbk5vdEluT3RoZXJSZWxcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBzID0gY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKHRoaXMuYWx3YXlzLCB0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbClcblxuICAgICAgICBpZiAoIXJlbGF0aW9uc2hpcHMuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmV4KSAmJiAhcmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAvLyBOb3QgdHJpZ2dlcmVkIHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b2dldGhlck5vdyA9IHJlbGF0aW9uc2hpcHMuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmxvdmVyKVxuXG4gICAgICAgIGlmICh0cmlwQ291bnQgPiAwICYmIHRoaXMudG9nZXRoZXIgIT0gdG9nZXRoZXJOb3cpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aGluZyBoYXMgY2hhbmdlZCBleHRlcm5hbGx5XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGFuZ2UgPSB0cmlwQ291bnRcbiAgICAgICAgICAgIHRoaXMudG9nZXRoZXIgPSB0b2dldGhlck5vd1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvZ2V0aGVyID0gdG9nZXRoZXJOb3dcblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hhbmdlICsgRXRlcm5hbENvdXBsZS5DSEFOR0VfQUZURVIgPD0gdHJpcENvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGFuZ2UgPSB0cmlwQ291bnRcblxuICAgICAgICAgICAgbGV0IGVmZmVjdDogU2l0dWF0aW9uRWZmZWN0XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgICAgICAgICAgbGV0IHdyYXBwZXJJbmRleDogbnVtYmVyXG5cbiAgICAgICAgICAgIGlmICghdGhpcy50b2dldGhlcikge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUuZ2V0T3V0UmVsYXRpb25zaGlwc09mVHlwZSh0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbCwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlzIGluIHJlbGF0aW9uc2hpcCAtPiBub3QgZ2V0dGluZyBiYWNrIHRvZ3RoZXJcbiAgICAgICAgICAgICAgICAgICAgLy8gU29tZXRoaW5nIGhhcyBjaGFuZ2VkIGV4dGVybmFsbHlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Q2hhbmdlID0gdHJpcENvdW50XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZXRoZXIgPSB0b2dldGhlck5vd1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlZmZlY3QgPSBTaXR1YXRpb25VdGlscy5zdGFydFRvRGF0ZShbdGhpcy5hbHdheXMsIHRoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsXSlcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGAke3RoaXMuYWx3YXlzfSBhbmQgJHt0aGlzLm9ubHlXaGVuTm90SW5PdGhlclJlbH0gc3RhcnRlZCBkYXRpbmdgXG4gICAgICAgICAgICAgICAgd3JhcHBlckluZGV4ID0gdGhpcy5uTWFrZXVwc1xuICAgICAgICAgICAgICAgIHRoaXMubk1ha2V1cHMrK1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZmZlY3QgPSBTaXR1YXRpb25VdGlscy5icmVha1VwKFt0aGlzLmFsd2F5cywgdGhpcy5vbmx5V2hlbk5vdEluT3RoZXJSZWxdKVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gYCR7dGhpcy5hbHdheXN9IGFuZCAke3RoaXMub25seVdoZW5Ob3RJbk90aGVyUmVsfSBicm9rZSB1cGBcbiAgICAgICAgICAgICAgICB3cmFwcGVySW5kZXggPSB0aGlzLm5CcmVha3Vwc1xuICAgICAgICAgICAgICAgIHRoaXMubkJyZWFrdXBzKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZWREZXNjcmlwdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgYCR7ZGVzY3JpcHRpb259LmAsXG4gICAgICAgICAgICAgICAgYCR7ZGVzY3JpcHRpb259IGFnYWluLmAsXG4gICAgICAgICAgICAgICAgYFlvdSB3b24ndCBiZWxpZXZlIHRoaXM6ICR7ZGVzY3JpcHRpb259IGFnYWluLmAsXG4gICAgICAgICAgICAgICAgYCR7ZGVzY3JpcHRpb259LCB5ZXQgYWdhaW4uYCxcbiAgICAgICAgICAgICAgICBgJHtkZXNjcmlwdGlvbn0sIHRvIG5vYm9keSdzIHN1cnByaXNlLmAsXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGlmICghdGhpcy5kYW5CdXN0ZWRNZXNzYWdlRmlyZWQgJiYgY3VycmVudFN0YXRlLmdldEh1bVRhZ3MoSHVtYW5OYW1lLkRhbikuaGFzKEh1bWFuVGFnLmRhbl9idXN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYW5CdXN0ZWRNZXNzYWdlRmlyZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgZWZmZWN0LnNldERlc2NyaXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICBcIldoYXQ/IEV2ZW4gYWZ0ZXIgRGFuJ3Mgc2hlbmFuaWdhbnMsXCIgK1xuICAgICAgICAgICAgICAgICAgICBcIiBpdCBzZWVtcyB0aGF0IEZsYXZpZSBmb3JnYXZlIGhpbSBhbmQgdGhleSBnb3QgYmFjayB0b2dldGhlci4uLiE/XCIsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVySW5kZXggPSBNYXRoLm1pbih3cmFwcGVySW5kZXgsIHdyYXBwZWREZXNjcmlwdGlvbnMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBlZmZlY3Quc2V0RGVzY3JpcHRpb24od3JhcHBlZERlc2NyaXB0aW9uc1t3cmFwcGVySW5kZXhdKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gW2VmZmVjdF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGxleCBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHVibGljIGh1bVJlcTogQXJyYXk8SHVtYW5OYW1lPiA9IEFycmF5KClcbiAgICBwdWJsaWMgaHVtQmFuOiBBcnJheTxIdW1hbk5hbWU+ID0gQXJyYXkoKVxuICAgIHB1YmxpYyBhbGxvd2VkTG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+ID0gQXJyYXkoKVxuXG4gICAgcHVibGljIGh1bVRhZ3NSZXE6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4gPSBBcnJheSgpXG4gICAgcHVibGljIGh1bVRhZ3NCYW46IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4gPSBBcnJheSgpXG5cbiAgICBwdWJsaWMgcmVsVGFnc1JlcTogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4gPSBBcnJheSgpXG4gICAgcHVibGljIHJlbFRhZ3NCYW46IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+ID0gQXJyYXkoKVxuXG4gICAgcHVibGljIGVmZmVjdHM6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4gPSBBcnJheSgpXG4gICAgcHVibGljIHByb2Nlc3NFZmZlY3RzPzogKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCBiYXNlRWZmZWN0czogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PikgPT4gQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGZpZWxkcz86IHtcbiAgICAgICAgICAgIGh1bVJlcT86IEFycmF5PEh1bWFuTmFtZT4sIGh1bUJhbj86IEFycmF5PEh1bWFuTmFtZT4sXG4gICAgICAgICAgICBhbGxvd2VkTG9jYXRpb25zPzogQXJyYXk8TG9jYXRpb25OYW1lPixcbiAgICAgICAgICAgIGh1bVRhZ3NSZXE/OiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LCBodW1UYWdzQmFuPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgICAgIHJlbFRhZ3NSZXE/OiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPiwgcmVsVGFnc0Jhbj86IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+LFxuICAgICAgICAgICAgZWZmZWN0cz86IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4sXG4gICAgICAgICAgICBwcm9jZXNzRWZmZWN0cz86ICh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgYmFzZUVmZmVjdHM6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4pID0+IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cbiAgICAgICAgfSkge1xuICAgICAgICBpZiAoZmllbGRzKSBPYmplY3QuYXNzaWduKHRoaXMsIGZpZWxkcylcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBcHBsaWNhYmxlKHRyaXAsIGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgICAgID8gdGhpcy5wcm9jZXNzRWZmZWN0cyA/IHRoaXMucHJvY2Vzc0VmZmVjdHModHJpcCwgY3VycmVudFN0YXRlLCB0aGlzLmVmZmVjdHMpIDogdGhpcy5lZmZlY3RzXG4gICAgICAgICAgICA6IG5ldyBBcnJheSgpXG4gICAgfVxuXG4gICAgcHVibGljIGlzQXBwbGljYWJsZSh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbmFtZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG5cbiAgICAgICAgLy8gSWYgbm8gbG9jYXRpb25zIGFyZSBzZXQsIHRoaXMgbWVhbnMgYWxsIGxvY2F0aW9ucyBhcmUgYWxsb3dlZFxuICAgICAgICBsZXQgbG9jYXRpb25PayA9ICh0aGlzLmFsbG93ZWRMb2NhdGlvbnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgfHwgdGhpcy5hbGxvd2VkTG9jYXRpb25zLnNvbWUobG9jID0+IGxvYyA9PSB0cmlwLmdvTG9jYXRpb24pXG5cbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uT2sgJiZcbiAgICAgICAgICAgIHRoaXMuaHVtUmVxLmV2ZXJ5KGhwID0+IG5hbWVzUHJlc2VudC5pbmNsdWRlcyhocCkpICYmXG4gICAgICAgICAgICB0aGlzLmh1bUJhbi5ldmVyeShjcCA9PiAhbmFtZXNQcmVzZW50LmluY2x1ZGVzKGNwKSkgJiZcblxuICAgICAgICAgICAgdGhpcy5odW1UYWdzUmVxLmV2ZXJ5KGhyID0+IGN1cnJlbnRTdGF0ZS5nZXRIdW1UYWdzKGhyWzBdKS5oYXMoaHJbMV0pKSAmJlxuICAgICAgICAgICAgdGhpcy5odW1UYWdzQmFuLmV2ZXJ5KGJyID0+ICFjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhiclswXSkuaGFzKGJyWzFdKSkgJiZcblxuICAgICAgICAgICAgdGhpcy5yZWxUYWdzUmVxLmV2ZXJ5KHJyID0+IGN1cnJlbnRTdGF0ZS5nZXRSZWxUYWdzKHJyWzBdKS5oYXMocnJbMV0pKSAmJlxuICAgICAgICAgICAgdGhpcy5yZWxUYWdzQmFuLmV2ZXJ5KGJyID0+ICFjdXJyZW50U3RhdGUuZ2V0UmVsVGFncyhiclswXSkuaGFzKGJyWzFdKSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTeW1wYXRoaWVzIGltcGxlbWVudHMgU2l0dWF0aW9uIHtcbiAgICBzdGF0aWMgTElLRV9DSEFOR0UgPSArMVxuICAgIHN0YXRpYyBESVNMSUtFX0NIQU5HRSA9IC0xXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGVmZmVjdCA9IG5ldyBTaXR1YXRpb25FZmZlY3QoKVxuXG4gICAgICAgIGZvciAoY29uc3QgciBvZiBjdXJyZW50U3RhdGUuZ2V0QWxsUmVsYXRpb25zaGlwcygpKSB7XG4gICAgICAgICAgICAvLyBCb3RoIHBhcnRpZXMgbXVzdCBiZSBwcmVzZW50XG4gICAgICAgICAgICBpZiAoci5wZW9wbGUuZXZlcnkocCA9PiB0cmlwLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHIudGFncy5oYXMoUmVsYXRpb25zaGlwVGFnLmxpa2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdC5jaGFuZ2VGb25kbmVzcyhbW3IucGVvcGxlLCBTeW1wYXRoaWVzLkxJS0VfQ0hBTkdFXV0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyLnRhZ3MuaGFzKFJlbGF0aW9uc2hpcFRhZy5kaXNsaWtlKSkge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QuY2hhbmdlRm9uZG5lc3MoW1tyLnBlb3BsZSwgU3ltcGF0aGllcy5ESVNMSUtFX0NIQU5HRV1dKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2VmZmVjdF1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVGb25kbmVzc0Jhc2VkVGFncyBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGxldCBlZmZlY3QgPSBuZXcgU2l0dWF0aW9uRWZmZWN0KClcbiAgICAgICAgbGV0IG90aGVyRWZmZWN0cyA9IFtdXG5cbiAgICAgICAgZm9yIChjb25zdCBhIG9mIGN1cnJlbnRTdGF0ZS5nZXRIdW1hbk5hbWVzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYiBvZiBjdXJyZW50U3RhdGUuZ2V0SHVtYW5OYW1lcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT0gYikgY29udGludWVcbiAgICAgICAgICAgICAgICBjb25zdCBmb25kbmVzcyA9IGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYSwgYl0pXG4gICAgICAgICAgICAgICAgY29uc3QgbXV0dWFsUmVsYXRpb25zaGlwcyA9IGN1cnJlbnRTdGF0ZS5nZXRNdXR1YWxSZWxhdGlvbnNoaXBzQmV0d2VlbihhLCBiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcHMgPSBjdXJyZW50U3RhdGUuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYilcbiAgICAgICAgICAgICAgICBpZiAoZm9uZG5lc3MgPj0gNSAmJiByZWxhdGlvbnNoaXBzLmluY2x1ZGVzKFJlbGF0aW9uc2hpcFRhZy5jcnVzaGFibGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbXV0dWFsUmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3QuYWRkUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1thLCBiXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3QucmVtb3ZlUmVsVGFncyhbXG4gICAgICAgICAgICAgICAgICAgICAgICBbW2EsIGJdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBpZiAoYSA8IGIgJiYgbXV0dWFsUmVsYXRpb25zaGlwcy5pbmNsdWRlcyhSZWxhdGlvbnNoaXBUYWcubG92ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckVmZmVjdHMucHVzaChTaXR1YXRpb25VdGlscy5icmVha1VwKFthLCBiXSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG90aGVyRWZmZWN0cy5wdXNoKGVmZmVjdClcbiAgICAgICAgcmV0dXJuIG90aGVyRWZmZWN0c1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJlYXRyaWNlQnJlYWt1cHMgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHN0YXRpYyBCUkVBS19VUF9BRlRFUiA9IDNcblxuICAgIHJlbGF0aW9uc2hpcExlbmd0aCA9IC0xXG4gICAgbG92ZXI6IEh1bWFuTmFtZSB8IG51bGwgPSBudWxsXG5cbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCwgdHJpcENvdW50OiBudW1iZXIpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgY29uc3QgbG92ZXJzID0gU2l0dWF0aW9uVXRpbHMuZ2V0TG92ZXJzKEh1bWFuTmFtZS5CZWF0cmljZSwgY3VycmVudFN0YXRlKVxuICAgICAgICBjb25zdCBuZXdMb3ZlciA9IGxvdmVycy5sZW5ndGggPT0gMCA/IG51bGwgOiBsb3ZlcnNbMF1cblxuICAgICAgICBpZiAodGhpcy5sb3ZlciAhPT0gbmV3TG92ZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmVsYXRpb25zaGlwTGVuZ3RoID0gLTFcbiAgICAgICAgICAgIHRoaXMubG92ZXIgPSBuZXdMb3ZlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBMZW5ndGgrK1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobG92ZXJzLmxlbmd0aCA8PSAxKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubG92ZXIgIT0gbnVsbCAmJiB0aGlzLnJlbGF0aW9uc2hpcExlbmd0aCA+PSBCZWF0cmljZUJyZWFrdXBzLkJSRUFLX1VQX0FGVEVSKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5CZWF0cmljZSwgbG92ZXJzWzBdXSkuc2V0RGVzY3JpcHRpb24oXG4gICAgICAgICAgICAgICAgICAgIGBPaCBuby4uLiBCZWF0cmljZSBnb3QgaW50byBhIGJpZyBmaWdodCB3aXRoICR7bG92ZXJzWzBdfSwgYW5kIHRoZXkgYnJva2UgdXAuYCxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbGV4QW5kQmVhdHJpY2VHZXREcnVuayBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGNvbnN0IHBlb3BsZVByZXNlbnQgPSB0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSlcbiAgICAgICAgaWYgKCFTaXR1YXRpb25VdGlscy5zdWJzZXQoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdLCBwZW9wbGVQcmVzZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyaXAuZ29Mb2NhdGlvbiAhPSBMb2NhdGlvbk5hbWUuRHJpbmspIHtcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVhdHJpY2UgbXVzdCBiZSBzaW5nbGUsIGJ1dCBpdCdzIHN1ZmZpY2llbnQgZm9yIEFsZXgncyBsb3ZlciBub3QgdG8gYmUgcHJlc2VudFxuICAgICAgICBpZiAoU2l0dWF0aW9uVXRpbHMuZ2V0TG92ZXJzKEh1bWFuTmFtZS5CZWF0cmljZSwgY3VycmVudFN0YXRlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxleExvdmVyT25UcmlwID0gU2l0dWF0aW9uVXRpbHMuZ2V0U29tZW9uZU9uVHJpcFdpdGhUYWcodHJpcCwgSHVtYW5OYW1lLkFsZXgsIGN1cnJlbnRTdGF0ZSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyKVxuICAgICAgICBpZiAoYWxleExvdmVyT25UcmlwKSB7XG4gICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY3VycmVudFN0YXRlLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKEh1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2UpXG4gICAgICAgICAgICAuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmNydXNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWxleExvdmVycyA9IFNpdHVhdGlvblV0aWxzLmdldExvdmVycyhIdW1hbk5hbWUuQWxleCwgY3VycmVudFN0YXRlKVxuXG4gICAgICAgIGlmIChhbGV4TG92ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gQWxleCBpcyBzaW5nbGVcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgU2l0dWF0aW9uVXRpbHMuc3RhcnRUb0RhdGUoW0h1bWFuTmFtZS5BbGV4LCBIdW1hbk5hbWUuQmVhdHJpY2VdKVxuICAgICAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJFbmNvdXJhZ2VkIGJ5IGFsY29ob2wsIEFsZXggYW5kIEJlYXRyaWNlIHJldmVhbGVkIHRoZWlyIHRydWUgZmVlbGluZ3MgdG93YXJkc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiIG9uZSBhbm90aGVyISBBZnRlciBnb2luZyBob21lIHRvZ2V0aGVyIGF0IHRoZSBuaWdodCBvdXQgd2l0aCB5b3UsIHRoZXkgc3RhcnRlZCBkYXRpbmcuXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQWxleCBoYXMgYSBsb3ZlclxuICAgICAgICAgICAgY29uc3QgbG92ZXIgPSBhbGV4TG92ZXJzWzBdXG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFNpdHVhdGlvblV0aWxzLmJyZWFrVXAoW0h1bWFuTmFtZS5BbGV4LCBsb3Zlcl0pXG4gICAgICAgICAgICAgICAgICAgIC5zZXREZXNjcmlwdGlvbihgRW5jb3VyYWdlZCBieSBhbGNvaG9sLCBBbGV4IGNoZWF0ZWQgb24gJHtsb3Zlcn0gd2l0aCBCZWF0cmljZS5gICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtsb3Zlcn0gZm91bmQgb3V0IGFuZCBicm9rZSB1cCB3aXRoIEFsZXguYClcbiAgICAgICAgICAgICAgICAgICAgLmNoYW5nZUZvbmRuZXNzKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG92ZXIsIEh1bWFuTmFtZS5BbGV4XSwgLTJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgLTRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLllvdV0sIC0zXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZVJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tIdW1hbk5hbWUuQWxleCwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoYWJsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbW0h1bWFuTmFtZS5CZWF0cmljZSwgSHVtYW5OYW1lLkFsZXhdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hhYmxlXSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgLmFkZFJlbFRhZ3MoW1xuICAgICAgICAgICAgICAgICAgICAgICAgW1tsb3ZlciwgSHVtYW5OYW1lLkJlYXRyaWNlXSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFsZXhBbmRDZWNpbCBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgZmlyZWQgPSBmYWxzZVxuXG4gICAgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgsIHRyaXBDb3VudDogbnVtYmVyKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIGlmICh0aGlzLmZpcmVkKSByZXR1cm4gW11cbiAgICAgICAgY29uc3QgYSA9IEh1bWFuTmFtZS5BbGV4XG4gICAgICAgIGNvbnN0IGMgPSBIdW1hbk5hbWUuQ2VjaWxcblxuICAgICAgICBpZiAodHJpcC5hbGxBYnNlbnQoYSwgYylcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYSwgY10pID49IDdcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdGF0ZS5nZXRGb25kbmVzcyhbYywgYV0pID49IDdcbiAgICAgICAgICAgICYmIFNpdHVhdGlvblV0aWxzLmlzU2luZ2xlKGEsIGN1cnJlbnRTdGF0ZSlcbiAgICAgICAgICAgICYmIFNpdHVhdGlvblV0aWxzLmlzU2luZ2xlKGMsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZWQgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gW1NpdHVhdGlvblV0aWxzLnN0YXJ0VG9EYXRlKFthLCBjXSlcbiAgICAgICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24oXCJXaGlsZSB5b3Ugd2VyZSBvdXQgd2l0aCBvdGhlciBwZW9wbGUsIEFsZXggc3RhcnRlZCBkYXRpbmcgQ2VjaWwsXCJcbiAgICAgICAgICAgICAgICAgICAgKyBcIiBzaW5jZSB0aGV5IGZvdW5kIG91dCB0aGV5IGVuam95IGVhY2ggb3RoZXJzJyBjb21wYW55IHNvIG11Y2guXCIpXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tICcuL21hbmFnZW1lbnQvYm9hcmQnXG5pbXBvcnQgeyBMb2FkaW5nU2NlbmUgfSBmcm9tICcuL3V0aWxzL2xvYWRpbmcnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnT3Zlcmx5IEZyYWdpbGUgUmVsYXRpb25zaGlwcycsXG4gXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuIFxuICBzY2FsZToge1xuICAgIHdpZHRoOiA4MDAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gIH0sXG4gXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjODg4JyxcblxuICBzY2VuZTogIFtMb2FkaW5nU2NlbmUsIEJvYXJkU2NlbmVdLFxufTtcbiBcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IGxldmVscyB9IGZyb20gJy4uL2NvbnRlbnQvbGV2ZWxzJ1xuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tICcuLi9tb2RlbC90cmlwU3VtbWFyeSdcbmltcG9ydCB7IFBob25lU3RhZ2UgfSBmcm9tICcuL3Bob25lX3N0YWdlJ1xuaW1wb3J0IHsgSHVtYW5TdGFnZSB9IGZyb20gJy4vaHVtYW5fc3RhZ2UnXG5pbXBvcnQgeyBMb2NhdGlvblN0YWdlIH0gZnJvbSAnLi9sb2NhdGlvbl9zdGFnZSdcbmltcG9ydCB7IExvY2F0aW9uTmFtZSB9IGZyb20gJy4uL2NvbnRlbnQvbG9jYXRpb25zJ1xuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgTW9kYWxEaWFsb2cgfSBmcm9tICcuLi91dGlscy9tb2RhbCdcblxuZXhwb3J0IGNsYXNzIEJvYXJkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgdHJpcEZhZGVyPzogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgdHJhbnNpdGlvbkZhZGVyPzogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHByaXZhdGUgaW5mb1RleHQ/OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIHByaXZhdGUgbGV2ZWw6IExldmVsXG5cbiAgICBwdWJsaWMgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5XG4gICAgcHVibGljIHBob25lPzogUGhvbmVTdGFnZVxuICAgIHByaXZhdGUgaHVtYW5TdGFnZT86IEh1bWFuU3RhZ2VcbiAgICBwcml2YXRlIGxvY2F0aW9uU3RhZ2U/OiBMb2NhdGlvblN0YWdlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAga2V5OiAnbWFuYWdlbWVudCcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWxzWzBdXG4gICAgICAgIHRoaXMudHJpcFN1bW1hcnkgPSBuZXcgVHJpcFN1bW1hcnkodGhpcy5sZXZlbC5odW1hbnNbMF0pXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZhZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDgwMCwgNTAwLCAweDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAuc2V0RGVwdGgoMjAwMSlcblxuICAgICAgICBsZXQgbXVzaWMgPSB0aGlzLnNvdW5kLmFkZCgnbWFpbl9tdXNpYycsIHtcbiAgICAgICAgICAgIHZvbHVtZTogMC41LFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgfSkucGxheSgpXG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcblxuICAgICAgICB0aGlzLmFkZC5pbWFnZSgwLCAwLCAnYm9hcmRfYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgdGhpcy50cmlwRmFkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgODAwLCA1MDAsIDB4MClcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5nb0JhY2soKSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dCA9IHRoaXMuYWRkLnRleHQoNDAwLCAyMDAsICcnLCB7IGZpbGw6ICcjZmZmJywgZm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMjBweCcgfSlcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG4gICAgICAgICAgICAuc2V0V29yZFdyYXBXaWR0aCg1NTApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuXG4gICAgICAgIHRoaXMubG9jYXRpb25TdGFnZSA9IG5ldyBMb2NhdGlvblN0YWdlKHRoaXMsIHRoaXMubGV2ZWwpXG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZSA9IG5ldyBIdW1hblN0YWdlKHRoaXMsIHRoaXMubGV2ZWwpXG4gICAgICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmVTdGFnZSh0aGlzKVxuXG4gICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMudHJhbnNpdGlvbkZhZGVyLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvT3V0KGxvY2F0aW9uOiBMb2NhdGlvbk5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMudHJpcFN1bW1hcnkuZ29QZW9wbGUubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIGxldCB0dXRvcmlhbCA9ICdTZWxlY3Qgc29tZSBvZiB5b3VyIGZyaWVuZHMgdG8gam9pbiB5b3UuJ1xuICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09ICdIaWtpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV3IE1vZGFsRGlhbG9nKHRoaXMsIGBZb3UgY2FuJ3QgZ28gaGlraW5nIGFsb25lLlxcbiR7dHV0b3JpYWx9YClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gPT0gJ0Jvd2xpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmV3IE1vZGFsRGlhbG9nKHRoaXMsIGBZb3UgY2FuJ3QgZ28gYm93bGluZyBhbG9uZS5cXG4ke3R1dG9yaWFsfWApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uID09ICdEcmlua2luZycpIHtcbiAgICAgICAgICAgICAgICBuZXcgTW9kYWxEaWFsb2codGhpcywgYFlvdSBjYW4ndCBnbyBkcmlua2luZyBhbG9uZS5cXG4ke3R1dG9yaWFsfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJpcFN1bW1hcnkucHJlcGFyZShsb2NhdGlvbilcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmxldmVsLmdvT3V0KHRoaXMsIHRoaXMudHJpcFN1bW1hcnkpXG4gICAgICAgIHRoaXMudHJpcEZhZGVyIS5pbnB1dC5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5sb2NhdGlvblN0YWdlIS5lbmFibGUoZmFsc2UpXG4gICAgICAgIHRoaXMuaW5mb1RleHQhLnNldFRleHQobWVzc2FnZSlcbiAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMuaW5mb1RleHQsIHRoaXMudHJpcEZhZGVyXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpcEZhZGVyIS5pbnB1dC5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25TdGFnZSEuZW5hYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5odW1hblN0YWdlIS5ibGVhY2hQZW9wbGUoKVxuICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IGZhbHNlXG4gICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt0aGlzLmluZm9UZXh0LCB0aGlzLnRyaXBGYWRlcl0sXG4gICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBtZXNzYWdlIHF1ZXVlIGhhcyBzb21ldGhpbmdcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1lc3NhZ2VRdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXcgTW9kYWxEaWFsb2codGhpcywgdGhpcy5tZXNzYWdlUXVldWVbMF0sIHRoaXMubWVzc2FnZVF1ZXVlWzFdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMudHJpcFN1bW1hcnkgPSBuZXcgVHJpcFN1bW1hcnkodGhpcy5sZXZlbC5odW1hbnNbMF0pXG4gICAgICAgIHRoaXMucGhvbmU/LmRpc3BsYXkodGhpcy5sZXZlbC5odW1hbnNbMF0sIDApXG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZT8ucmVkcmF3TGluZXModGhpcy5sZXZlbClcbiAgICAgICAgdGhpcy5odW1hblN0YWdlPy5kaXNwbGF5KHRoaXMubGV2ZWwuaHVtYW5zWzBdLCAwKVxuICAgIH1cblxuICAgIHByaXZhdGUgbWVzc2FnZVF1ZXVlPzogW3N0cmluZywgKCkgPT4gdm9pZF0gPSB1bmRlZmluZWRcbiAgICBwdWJsaWMgZmFpbChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlUXVldWUgPSBbbWVzc2FnZSwgKCkgPT4geyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkgfV1cbiAgICB9XG59IiwiaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi4vbW9kZWwvbGV2ZWxcIlxuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gXCIuL2JvYXJkXCJcbmltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4uL21vZGVsL2h1bWFuXCJcbmltcG9ydCB7IHJlbGF0aW9uc2hpcFRhZ01hcCB9IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgREVGQVVMVF9GT05ETkVTUyB9IGZyb20gXCIuLi9tb2RlbC9wZW9wbGVHcmFwaFwiXG5cbmV4cG9ydCBjbGFzcyBIdW1hblN0YWdlIHtcbiAgICBwcml2YXRlIGFsbFBlb3BsZVRleHRzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBbXVxuICAgIHByaXZhdGUgYWxsUGVvcGxlQ2lyY2xlczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkVsbGlwc2U+ID0gW11cbiAgICBwcml2YXRlIGFsbFBlb3BsZUxpbmVzOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXA+ID0gW11cbiAgICBwcml2YXRlIFRFWFRfQUxQSEFfT0sgPSAxXG4gICAgcHJpdmF0ZSBURVhUX0FMUEhBX0JEID0gMC4zXG4gICAgcHJpdmF0ZSBDSVJDTEVfQUxQSEFfT0sgPSAwLjFcbiAgICBwcml2YXRlIENJUkNMRV9BTFBIQV9CRCA9IDBcbiAgICBwcml2YXRlIHBvc2l0aW9uczogQXJyYXk8eyB4OiBudW1iZXIsIHk6IG51bWJlciB9PlxuICAgIHByaXZhdGUgcG9zaXRpb25zSW5uZXI6IEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NlbmU6IEJvYXJkU2NlbmUsIGxldmVsOiBMZXZlbCkge1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gNDUwXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSAxODBcbiAgICAgICAgY29uc3QgcmFkaXVzID0gMTUwXG4gICAgICAgIGNvbnN0IHJhZGl1c0lubmVyID0gMTQ1XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBsZXZlbC5odW1hbnMubWFwKChfLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiAoaSArIDAuNSkgLyBsZXZlbC5odW1hbnMubGVuZ3RoXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGNlbnRlclggKyBNYXRoLmNvcyhhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICAgICAgeTogY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnBvc2l0aW9uc0lubmVyID0gbGV2ZWwuaHVtYW5zLm1hcCgoXywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogKGkgKyAwLjUpIC8gbGV2ZWwuaHVtYW5zLmxlbmd0aFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzSW5uZXIsXG4gICAgICAgICAgICAgICAgeTogY2VudGVyWSArIE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c0lubmVyLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGZvciAobGV0IGkgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICBsZXQgaHVtYW4gPSBsZXZlbC5odW1hbnNbaV1cbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbnNbaV1cblxuICAgICAgICAgICAgbGV0IGltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdwb3J0cmFpdF9zbWFsbCcsIGkpXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KGh1bWFuLCBOdW1iZXIoaSkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheShsZXZlbC5odW1hbnNbMF0sIDApXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGNpcmNsZSA9IHNjZW5lLmFkZC5lbGxpcHNlKDAsIDAsIDgwLCA4MCwgMHgyZTJlMmUpXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgICAgICAuc2V0QWxwaGEoKE51bWJlcihpKSA9PSAwID8gdGhpcy5DSVJDTEVfQUxQSEFfT0sgOiB0aGlzLkNJUkNMRV9BTFBIQV9CRCkpXG4gICAgICAgICAgICAgICAgLy8gLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC8vIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZGlzcGxheShodW1hbiwgTnVtYmVyKGkpKVxuICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoMCwgMCwgYCR7aHVtYW4ubmFtZX1gLCB7XG4gICAgICAgICAgICAgICAgZmlsbDogJyMxYzFjMWMnLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMC41LCAwLjUpXG4gICAgICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgIC5zZXRBbHBoYShOdW1iZXIoaSkgPT0gMCA/IHRoaXMuVEVYVF9BTFBIQV9PSyA6IHRoaXMuVEVYVF9BTFBIQV9CRClcbiAgICAgICAgICAgICAgICAvLyAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmRpc3BsYXkoaHVtYW4sIE51bWJlcihpKSlcbiAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICBzY2VuZS5hZGQuZ3JvdXAoW2ltYWdlLCB0ZXh0LCBjaXJjbGVdKS5zZXRYWShwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuXG4gICAgICAgICAgICAvLyBUQkggSSBoYXZlIG5vIGlkZWEgd2h5IHRoaXMgaXMgbm90IHJlbGF0aXZlIHRvIHRoZSBncm91cCwgYnV0IHdoYXRldnNcbiAgICAgICAgICAgIHRleHQuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIDEwMCArIDEwKVxuICAgICAgICAgICAgY2lyY2xlLnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyA0NSArIDE1KVxuICAgICAgICAgICAgaW1hZ2Uuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIDQ1ICsgMTApXG5cbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgIT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2VuZS50cmlwU3VtbWFyeS5mbGlwR29QZW9wbGUoaHVtYW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuVEVYVF9BTFBIQV9CRCwgdG86IHRoaXMuVEVYVF9BTFBIQV9PSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2lyY2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuQ0lSQ0xFX0FMUEhBX0JELCB0bzogdGhpcy5DSVJDTEVfQUxQSEFfT0sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogdGhpcy5URVhUX0FMUEhBX09LLCB0bzogdGhpcy5URVhUX0FMUEhBX0JEIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBjaXJjbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogdGhpcy5DSVJDTEVfQUxQSEFfT0ssIHRvOiB0aGlzLkNJUkNMRV9BTFBIQV9CRCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGV4dC5vbigncG9pbnRlcmRvd24nLCBvbkNsaWNrKVxuICAgICAgICAgICAgICAgIGNpcmNsZS5vbigncG9pbnRlcmRvd24nLCBvbkNsaWNrKVxuICAgICAgICAgICAgICAgIGltYWdlLm9uKCdwb2ludGVyZG93bicsIG9uQ2xpY2spXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlVGV4dHMucHVzaCh0ZXh0KVxuICAgICAgICAgICAgdGhpcy5hbGxQZW9wbGVDaXJjbGVzLnB1c2goY2lyY2xlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWRyYXdMaW5lcyhsZXZlbClcbiAgICB9XG5cbiAgICBwdWJsaWMgYmxlYWNoUGVvcGxlKCkge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuYWxsUGVvcGxlVGV4dHMpIHtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgIT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlVGV4dHNbaV0uc2V0QWxwaGEodGhpcy5URVhUX0FMUEhBX0JEKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlQ2lyY2xlc1tpXS5zZXRBbHBoYSh0aGlzLkNJUkNMRV9BTFBIQV9CRClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5KGh1bWFuOiBIdW1hbiwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuYWxsUGVvcGxlTGluZXMpIHtcbiAgICAgICAgICAgIC8vIEkgdmVyeSBtdWNoIGFkbWl0IHRoYXQgdGhpcyBpcyBzdXBlciBzbG93IGFuZCB1bm9wdGltaXplZFxuICAgICAgICAgICAgLy8gQlVUIFdURiBJUyBOT1QgR1JPVVAgQUxQSEEgRVhQT1NFRCBQVUJMSUNMWVxuICAgICAgICAgICAgaWYgKE51bWJlcihpKSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYWxsUGVvcGxlTGluZXNbaV0uY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAoY2hpbGQgYXMgUGhhc2VyLkdhbWVPYmplY3RzLkxpbmUpLmFscGhhLCB0bzogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuYWxsUGVvcGxlTGluZXNbaV0uY2hpbGRyZW4uZ2V0QXJyYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2hpbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiAoY2hpbGQgYXMgUGhhc2VyLkdhbWVPYmplY3RzLkxpbmUpLmFscGhhLCB0bzogMCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2VuZS5waG9uZSEuZGlzcGxheShodW1hbiwgTnVtYmVyKGluZGV4KSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpbmVhclNjYWxlQmxhY2sobGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIGxldmVsIGlzIDAgdG8gMVxuICAgICAgICAvLyByZXR1cm4gTWF0aC5yb3VuZChsZXZlbCoyNTUqMjU1KjI1NSkgKyBNYXRoLnJvdW5kKGxldmVsKjI1NSkgKyBNYXRoLnJvdW5kKGxldmVsKjI1NSlcblxuICAgICAgICAvLyBsZXZlbCBpcyAwIHRvIDEwXG4gICAgICAgIGlmIChsZXZlbCA8PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gMHhkZTAwMDBcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA8PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gMHhkNDZjNmNcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA8PSA2KSB7XG4gICAgICAgICAgICByZXR1cm4gMHhhM2EzYTNcbiAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA8PSA4KSB7XG4gICAgICAgICAgICByZXR1cm4gMHg3MGNjNzhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAweDAwZGUxM1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlZHJhd0xpbmVzKGxldmVsOiBMZXZlbCkge1xuICAgICAgICBmb3IgKGxldCBnIG9mIHRoaXMuYWxsUGVvcGxlTGluZXMpIHtcbiAgICAgICAgICAgIGcuZGVzdHJveSh0cnVlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsUGVvcGxlTGluZXMgPSBbXVxuXG4gICAgICAgIGxldCBwZW9wbGVHcmFwaCA9IGxldmVsLmZyaWVuZHNoaXBNYW5hZ2VyLnBlb3BsZUdyYXBoXG4gICAgICAgIGZvciAobGV0IGhpMSBpbiBsZXZlbC5odW1hbnMpIHtcbiAgICAgICAgICAgIGxldCBodW1hbjEgPSBsZXZlbC5odW1hbnNbaGkxXVxuICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5zY2VuZS5hZGQuZ3JvdXAoKVxuICAgICAgICAgICAgICAgIC5zZXRYWSgwLCA1MClcbiAgICAgICAgICAgIGZvciAobGV0IGhpMiBpbiBsZXZlbC5odW1hbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaHVtYW4yID0gbGV2ZWwuaHVtYW5zW2hpMl1cbiAgICAgICAgICAgICAgICBpZiAoaGkxID09IGhpMilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBmd1xuICAgICAgICAgICAgICAgIGxldCB5b3VDaGFuZ2UgPSBodW1hbjEubmFtZSA9PSAnWW91J1xuICAgICAgICAgICAgICAgIGlmICh5b3VDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcCA9IGh1bWFuMlxuICAgICAgICAgICAgICAgICAgICBodW1hbjIgPSBodW1hbjFcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4xID0gdG1wXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhZ3MgPSBBcnJheVxuICAgICAgICAgICAgICAgICAgICAuZnJvbShwZW9wbGVHcmFwaC5nZXRSZWxUYWdzKFtodW1hbjEubmFtZSwgaHVtYW4yLm5hbWVdKSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeCkgPT4gcmVsYXRpb25zaGlwVGFnTWFwLmhhcyh4KSlcbiAgICAgICAgICAgICAgICBsZXQgZm9uZG5lc3MgPSBwZW9wbGVHcmFwaC5nZXRGb25kbmVzcyhbaHVtYW4xLm5hbWUsIGh1bWFuMi5uYW1lXSlcblxuICAgICAgICAgICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuc2NlbmUuYWRkLmdyYXBoaWNzKClcblxuICAgICAgICAgICAgICAgIGlmIChmb25kbmVzcyAhPSBERUZBVUxUX0ZPTkRORVNTIHx8IHRhZ3MubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmZYID0gKHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS54IC0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLngpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmWSA9ICh0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueSAtIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS55KVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZlhOID0gZGlmZlggLyBNYXRoLnNxcnQoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkpXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmWU4gPSBkaWZmWSAvIE1hdGguc3FydChkaWZmWCAqIGRpZmZYICsgZGlmZlkgKiBkaWZmWSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmxpbmVhclNjYWxlQmxhY2soZm9uZG5lc3MpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHgxID0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnggLSA0NSAqIGRpZmZYTlxuICAgICAgICAgICAgICAgICAgICBsZXQgeTEgPSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueSArIDYwIC0gNDUgKiBkaWZmWU5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHgyID0gdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLnggKyA0NSAqIGRpZmZYTlxuICAgICAgICAgICAgICAgICAgICBsZXQgeTIgPSB0aGlzLnBvc2l0aW9uc0lubmVyW2hpMl0ueSArIDYwICsgNDUgKiBkaWZmWU5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUgPSB0aGlzLnNjZW5lLmFkZC5saW5lKDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB4MSwgeTEsIHgyLCB5MixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldExpbmVXaWR0aCgyKVxuICAgICAgICAgICAgICAgICAgICBncm91cC5hZGQobGluZSlcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmlhbmdsZSA9IHRoaXMuc2NlbmUuYWRkLnRyaWFuZ2xlKHlvdUNoYW5nZSA/IHgxIDogeDIsIHlvdUNoYW5nZSA/IHkxIDogeTIsIC0xMCwgMCwgMTAsIDAsIDAsIDEwLCBjb2xvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRSb3RhdGlvbihNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpIC0gTWF0aC5QSSAvIDIgKyAoeW91Q2hhbmdlID8gTWF0aC5QSSA6IDApKVxuICAgICAgICAgICAgICAgICAgICBncm91cC5hZGQodHJpYW5nbGUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0YWdzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWcgPSB0YWdzW2ldXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdmdYID0gKHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS54ICsgdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLngpIC8gMlxuICAgICAgICAgICAgICAgICAgICBsZXQgYXZnWSA9ICh0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueSArIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS55KSAvIDIgKyA2MFxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ltYm9sID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoYXZnWCArIChOdW1iZXIoaSkgLSB0YWdzLmxlbmd0aCAvIDIgKyAwLjQpICogMjcsIGF2Z1ksICdyZWxfdGFncycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0RnJhbWUodGFnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldERpc3BsYXlTaXplKDI1LCAyNSlcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAuYWRkKHN5bWJvbClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgYmFjayBcbiAgICAgICAgICAgICAgICBpZiAoeW91Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXAgPSBodW1hbjJcbiAgICAgICAgICAgICAgICAgICAgaHVtYW4yID0gaHVtYW4xXG4gICAgICAgICAgICAgICAgICAgIGh1bWFuMSA9IHRtcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwLnNldEFscGhhKDApXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZUxpbmVzLnB1c2goZ3JvdXApXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMZXZlbCB9IGZyb20gXCIuLi9tb2RlbC9sZXZlbFwiXG5pbXBvcnQgeyBCb2FyZFNjZW5lIH0gZnJvbSBcIi4vYm9hcmRcIlxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TdGFnZSB7XG4gICAgcHJpdmF0ZSBhbGxMb2NhdGlvbkltYWdlOiBBcnJheTxQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U+ID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBCb2FyZFNjZW5lLCBsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgLy8gc2NlbmUuYWRkLnJlY3RhbmdsZSg2ODAsIDAsIDEyMCwgNTAwLCAweGNjY2NjYylcbiAgICAgICAgLy8gICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgbGV0IHRleHQgPSBzY2VuZS5hZGQudGV4dCg2ODksIDI1LCAnQWN0aXZpdHknLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzIwcHgnIH0pXG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBsZXZlbC5sb2NhdGlvbnMpIHtcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGxldmVsLmxvY2F0aW9uc1tpXVxuICAgICAgICAgICAgbGV0IGltZyA9IHNjZW5lLmFkZC5pbWFnZSg2ODIsIDcwICsgTnVtYmVyKGkpICogMTM1LCAnbG9jYXRpb25fdGh1bWInKVxuICAgICAgICAgICAgICAgIC5zZXRGcmFtZShpKVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgLnNldERpc3BsYXlTaXplKDkwLCA5MClcbiAgICAgICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY2VuZS5nb091dChsb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUudHJpcFN1bW1hcnkuZ29Mb2NhdGlvbiA9IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuYWxsTG9jYXRpb25JbWFnZS5wdXNoKGltZylcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoNzI1LCA4NSArIE51bWJlcihpKSAqIDEzNSArIDkwLCBgJHtsb2NhdGlvbn1gLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nIH0pXG4gICAgICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgICAgIC5zZXRXb3JkV3JhcFdpZHRoKDEyMClcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBmb3IgKGxldCBpbWcgb2YgdGhpcy5hbGxMb2NhdGlvbkltYWdlKSB7XG4gICAgICAgICAgICBpbWcuaW5wdXQuZW5hYmxlZCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tICcuLi9tb2RlbC9odW1hbidcbmltcG9ydCB7IGh1bWFuVGFnTWFwLCByZWxhdGlvbnNoaXBUYWdNYXAgfSBmcm9tICcuLi9jb250ZW50L2VudGl0eVRhZ3MnXG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tICcuLi9jb250ZW50L2h1bWFucydcblxuZXhwb3J0IGNsYXNzIFBob25lU3RhZ2Uge1xuICAgIHByaXZhdGUgcG9ydHJhaXQ6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICAgIHByaXZhdGUgaW5mb1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgcHJpdmF0ZSBuYW1lVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2NlbmU6IFBoYXNlci5TY2VuZSkge1xuICAgICAgICAvLyBzY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIDI0MCwgNTAwLCAweGFhYWFhYSlcbiAgICAgICAgLy8gICAgIC5zZXRPcmlnaW4oMCwgMClcblxuICAgICAgICB0aGlzLnBvcnRyYWl0ID0gc2NlbmUuYWRkLmltYWdlKDIwLCAyMCwgJ3BvcnRyYWl0X2JpZycpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgdGhpcy5uYW1lVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDExNSwgMjU1LCAnJywgeyBmaWxsOiAnYmxhY2snLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcyMHB4JyB9KVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoMTkwKVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDI1LCAyNzAsICcnLCB7IGZpbGw6ICdibGFjaycsIGZvbnRGYW1pbHk6ICdSb2JvdG8nIH0pXG4gICAgICAgICAgICAuc2V0V29yZFdyYXBXaWR0aCgxOTApXG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BsYXkoaHVtYW46IEh1bWFuLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucG9ydHJhaXQuc2V0RnJhbWUoaW5kZXgpXG4gICAgICAgIGxldCBodW1TdHJpbmcgPSBBcnJheS5mcm9tKGh1bWFuLnRhZ3MpXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4gaHVtYW5UYWdNYXAuaGFzKHgpKVxuICAgICAgICAgICAgLm1hcCgoeCkgPT4gaHVtYW5UYWdNYXAuZ2V0KHgpKVxuICAgICAgICAgICAgLmpvaW4oJywgJylcblxuICAgICAgICAvLyBUaGlzIGNvdWxkIGJlIHBlcmhhcHMgZG9uZSBpbiBhIGZ1bmN0aW9uYWwgd2F5LCBidXQgdGhpcyBzZWVtcyBtb3JlIHJlYWRhYmxlXG4gICAgICAgIGxldCByZWxTdHJpbmcgPSBbXVxuICAgICAgICBmb3IgKGxldCByZWxhdGlvbnNoaXAgb2YgaHVtYW4ucmVsYXRpb25zaGlwcykge1xuICAgICAgICAgICAgbGV0IHJlbFN0cmluZ0luZGl2aWR1YWw6IEFycmF5PHN0cmluZz4gPSBbXVxuICAgICAgICAgICAgcmVsYXRpb25zaGlwLnRhZ3MuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWxhdGlvbnNoaXBUYWdNYXAuaGFzKHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbFN0cmluZ0luZGl2aWR1YWwucHVzaChyZWxhdGlvbnNoaXBUYWdNYXAuZ2V0KHgpIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaWYgKHJlbFN0cmluZ0luZGl2aWR1YWwubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgICAgICByZWxTdHJpbmcucHVzaChgJHtyZWxhdGlvbnNoaXAucGVvcGxlWzFdfTogJHtyZWxTdHJpbmdJbmRpdmlkdWFsLmpvaW4oJywgJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hbWVUZXh0LnNldFRleHQoSHVtYW5OYW1lW2h1bWFuLm5hbWVdKVxuICAgICAgICB0aGlzLmluZm9UZXh0LnNldFRleHQoYCR7aHVtU3RyaW5nfVxcblxcbiR7cmVsU3RyaW5nLmpvaW4oJ1xcblxcbicpfWApXG4gICAgfVxufSIsImltcG9ydCB7IFNpdHVhdGlvbiwgU2l0dWF0aW9uRWZmZWN0IH0gZnJvbSBcIi4vc2l0dWF0aW9uXCJcbmltcG9ydCB7IFBlb3BsZUdyYXBoIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi90cmlwU3VtbWFyeVwiXG5cbmV4cG9ydCBjbGFzcyBGcmllbmRzaGlwTWFuYWdlciB7XG4gICAgcHJpdmF0ZSB0cmlwQ291bnQ6IG51bWJlclxuICAgIHByaXZhdGUgc2l0dWF0aW9uQWRkQ2FsZW5kYXI6IE1hcDxudW1iZXIsIFNpdHVhdGlvbj5cblxuICAgIHB1YmxpYyBzaXR1YXRpb25zOiBTaXR1YXRpb25bXVxuICAgIHB1YmxpYyBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGhcblxuICAgIGNvbnN0cnVjdG9yKHNpdHVhdGlvbnM6IFNpdHVhdGlvbltdLCBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGgpIHtcbiAgICAgICAgdGhpcy50cmlwQ291bnQgPSAwXG4gICAgICAgIHRoaXMuc2l0dWF0aW9uQWRkQ2FsZW5kYXIgPSBuZXcgTWFwKClcblxuICAgICAgICB0aGlzLnNpdHVhdGlvbnMgPSBzaXR1YXRpb25zXG4gICAgICAgIHRoaXMucGVvcGxlR3JhcGggPSBwZW9wbGVHcmFwaFxuICAgIH1cblxuICAgIHB1YmxpYyBhcHBseU1lZXRpbmcodHJpcDogVHJpcFN1bW1hcnkpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgLy8gdXBkYXRlIHN5c3RlbSB3aXRoIG5ld2x5IGFkZGVkIHNpdHVhdGlvbnNcbiAgICAgICAgbGV0IG5ld1NpdEZvclRoaXNNZWV0aW5nID0gdGhpcy5zaXR1YXRpb25BZGRDYWxlbmRhci5nZXQodGhpcy50cmlwQ291bnQpID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMuc2l0dWF0aW9ucy5jb25jYXQobmV3U2l0Rm9yVGhpc01lZXRpbmcpXG5cbiAgICAgICAgLy8gdHJ5IHRvIGFwcGx5IGFsbCBzaXR1YXRpb25zXG4gICAgICAgIGxldCBhcHBsaWVkRWZmZWN0cyA9IG5ldyBBcnJheTxTaXR1YXRpb25FZmZlY3Q+KClcbiAgICAgICAgdGhpcy5zaXR1YXRpb25zLmZvckVhY2goc2l0dWF0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFwcEVmZkZvckN1cnJDb24gPSB0aGlzLnRyeUFwcGx5Q29uc3RyYWludChzaXR1YXRpb24sIHRyaXApICAvLyBXZSBrbm93IGl0J3MgZ29ubmEgYmUgYXNzaWduZWRcbiAgICAgICAgICAgIGFwcGxpZWRFZmZlY3RzID0gYXBwbGllZEVmZmVjdHMuY29uY2F0KGFwcEVmZkZvckN1cnJDb24pXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50cmlwQ291bnQgKz0gMVxuICAgICAgICByZXR1cm4gYXBwbGllZEVmZmVjdHNcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeUFwcGx5Q29uc3RyYWludChjb246IFNpdHVhdGlvbiwgdHJpcDogVHJpcFN1bW1hcnkpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGFwcGxpY2FibGVFZmZlY3RzID0gY29uLkdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXAsIHRoaXMucGVvcGxlR3JhcGgsIHRoaXMudHJpcENvdW50KVxuXG4gICAgICAgIGFwcGxpY2FibGVFZmZlY3RzLmZvckVhY2goZWZmID0+IHtcbiAgICAgICAgICAgIGVmZi5hZGRlZFJlbFRhZ3MgPSBlZmYuYWRkZWRSZWxUYWdzLmZpbHRlcihhdCA9PiB0aGlzLnBlb3BsZUdyYXBoLmFkZFJlbFRhZyhhdFswXSwgYXRbMV0pKVxuICAgICAgICAgICAgZWZmLnJlbW92ZWRSZWxUYWdzID0gZWZmLnJlbW92ZWRSZWxUYWdzLmZpbHRlcihhdCA9PiB0aGlzLnBlb3BsZUdyYXBoLnJlbW92ZVJlbFRhZyhhdFswXSwgYXRbMV0pKVxuXG4gICAgICAgICAgICBlZmYuYWRkZWRIdW1UYWdzID0gZWZmLmFkZGVkSHVtVGFncy5maWx0ZXIoYWggPT4gdGhpcy5wZW9wbGVHcmFwaC5hZGRIdW1UYWcoYWhbMF0sIGFoWzFdKSlcbiAgICAgICAgICAgIGVmZi5yZW1vdmVkSHVtVGFncyA9IGVmZi5yZW1vdmVkSHVtVGFncy5maWx0ZXIocmggPT4gdGhpcy5wZW9wbGVHcmFwaC5yZW1vdmVIdW1UYWcocmhbMF0sIHJoWzFdKSlcblxuICAgICAgICAgICAgZWZmLmNoYW5nZWRGb25kbmVzcy5mb3JFYWNoKFxuICAgICAgICAgICAgICAgIChbY291cGxlLCBjaGFuZ2VdKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlb3BsZUdyYXBoLmNoYW5nZUZvbmRuZXNzKGNvdXBsZSwgY2hhbmdlKSxcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgZWZmLm5ld0Z1dHVyZVNpdHVhdGlvbnMuZm9yRWFjaChuZXdTaXQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l0dWF0aW9uQWRkQ2FsZW5kYXIuc2V0KHRoaXMudHJpcENvdW50ICsgbmV3U2l0WzBdLCBuZXdTaXRbMV0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gYXBwbGljYWJsZUVmZmVjdHNcblxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiO1xuaW1wb3J0IHsgSHVtYW5UYWcgfSBmcm9tIFwiLi4vY29udGVudC9lbnRpdHlUYWdzXCI7XG5pbXBvcnQgeyBIdW1hbk5hbWUgfSBmcm9tIFwiLi4vY29udGVudC9odW1hbnNcIjtcblxuZXhwb3J0IGNsYXNzIEh1bWFuIHtcbiAgICBuYW1lOiBIdW1hbk5hbWVcbiAgICBcbiAgICAvLyB0aGVzZSBhcmUgcmVhZCBvbmx5XG4gICAgcHVibGljIHJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD5cbiAgICBwdWJsaWMgdGFnczogU2V0PEh1bWFuVGFnPlxuXG4gICAgY29uc3RydWN0b3IobmFtZTogSHVtYW5OYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBzID0gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy50YWdzID0gbmV3IFNldCgpXG4gICAgfVxufSIsImltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4vaHVtYW5cIlxuaW1wb3J0IHsgTG9jYXRpb25OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvbG9jYXRpb25zXCJcbmltcG9ydCB7IFRyaXBTdW1tYXJ5IH0gZnJvbSBcIi4vdHJpcFN1bW1hcnlcIlxuaW1wb3J0IHsgQ291cGxlLCBDb3VwbGVVdGlscywgRWRnZUtleSwgTUlOX0ZPTkRORVNTLCBQZW9wbGVHcmFwaCwgUmVsYXRpb25zaGlwIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgU2l0dWF0aW9uLCBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi9zaXR1YXRpb25cIlxuaW1wb3J0IHsgRnJpZW5kc2hpcE1hbmFnZXIgfSBmcm9tIFwiLi9mcmllbmRzaGlwTWFuYWdlclwiXG5pbXBvcnQge1xuICAgIEh1bWFuVGFnLFxuICAgIGh1bWFuVGFnTWFwLFxuICAgIFJlbGF0aW9uc2hpcFRhZyxcbiAgICByZWxhdGlvbnNoaXBUYWdCaWRpcmVjdGlvbmFsLFxuICAgIHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5LFxuICAgIHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ05ld1JlbSxcbiAgICByZWxhdGlvbnNoaXBUYWdTaGFkb3dpbmdSZW1OZXcsXG59IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tIFwiLi4vbWFuYWdlbWVudC9ib2FyZFwiXG5cbmV4cG9ydCBjbGFzcyBMZXZlbCB7XG4gICAgcHVibGljIGh1bWFuczogQXJyYXk8SHVtYW4+XG4gICAgcHVibGljIGxvY2F0aW9uczogQXJyYXk8TG9jYXRpb25OYW1lPlxuICAgIHB1YmxpYyBmcmllbmRzaGlwTWFuYWdlcjogRnJpZW5kc2hpcE1hbmFnZXJcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBodW1hbnM6IEFycmF5PEh1bWFuPixcbiAgICAgICAgbG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbk5hbWU+LFxuICAgICAgICByZWxhdGlvbnNoaXBzOiBBcnJheTxSZWxhdGlvbnNoaXA+LFxuICAgICAgICBpbml0aWFsVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgaW5pdGlhbEZvbmRuZXNzOiBBcnJheTxbQ291cGxlLCBudW1iZXJdPixcbiAgICAgICAgc2l0dWF0aW9uczogQXJyYXk8U2l0dWF0aW9uPixcbiAgICApIHtcbiAgICAgICAgdGhpcy5odW1hbnMgPSBodW1hbnNcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnNcbiAgICAgICAgbGV0IHBlb3BsZUdyYXBoID0gbmV3IFBlb3BsZUdyYXBoKHRoaXMuaHVtYW5zLCByZWxhdGlvbnNoaXBzLCBpbml0aWFsVGFncywgaW5pdGlhbEZvbmRuZXNzKVxuXG4gICAgICAgIHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIgPSBuZXcgRnJpZW5kc2hpcE1hbmFnZXIoc2l0dWF0aW9ucywgcGVvcGxlR3JhcGgpXG5cbiAgICAgICAgLy8gSW5pdCByZWxhdGlvbnNoaXBzIG9uIHBlb3BsZVxuICAgICAgICB0aGlzLnVwZGF0ZUh1bWFuc0Zyb21QZW9wbGVHcmFwaEZvckRpc3BsYXkoKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIdW1hbnNGcm9tUGVvcGxlR3JhcGhGb3JEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmh1bWFucy5mb3JFYWNoKGggPT4ge1xuICAgICAgICAgICAgaC5yZWxhdGlvbnNoaXBzID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaC5nZXRPdXRSZWxhdGlvbnNoaXBzKGgubmFtZSlcbiAgICAgICAgICAgIGgudGFncyA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0SHVtVGFncyhoLm5hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaXhBZ3JlZW1lbnQodmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdmFsLnJlcGxhY2UoL1lvdSB3YXMvZywgJ1lvdSB3ZXJlJylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29PdXQoYm9hcmQ6IEJvYXJkU2NlbmUsIHRyaXBTdW1tYXJ5OiBUcmlwU3VtbWFyeSk6IHN0cmluZyB7XG4gICAgICAgIC8vIFVwZGF0ZSBmcmllbmRzaGlwcyBiYXNlZCBvbiB0cmlwXG4gICAgICAgIGxldCBlZmZlY3RzID0gdGhpcy5mcmllbmRzaGlwTWFuYWdlci5hcHBseU1lZXRpbmcodHJpcFN1bW1hcnkpXG5cbiAgICAgICAgLy8gVXBkYXRlIHJlbGF0aW9uc2hpcHMgb24gcGVvcGxlXG4gICAgICAgIHRoaXMudXBkYXRlSHVtYW5zRnJvbVBlb3BsZUdyYXBoRm9yRGlzcGxheSgpXG5cbiAgICAgICAgLy8gRGVidWcgbG9nXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRWZmZWN0czpcIiwgZWZmZWN0cylcbiAgICAgICAgY29uc29sZS5sb2coXCJIdW1hbnM6XCIsIHRoaXMuaHVtYW5zKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlbGF0aW9uc2hpcHNcIiwgdGhpcy5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaClcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgbXNncyBmb3IgZWZmZWN0c1xuICAgICAgICBsZXQgc3RhdHVzTWVzc2FnZSA9IHRoaXMuY29uc3RydWN0U3RhdHVzTWVzc2FnZShlZmZlY3RzLCB0cmlwU3VtbWFyeSlcblxuICAgICAgICAvLyBjb25zdHJ1Y3QgZmFpbCBtc2dcbiAgICAgICAgbGV0IGZhaWxNc2dzID0gdGhpcy5jaGVja0ZvbmRuZXNzQW5kUHJlcGFyZUZhaWxNc2coKVxuICAgICAgICBpZiAoZmFpbE1zZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmFpbE1zZ3MucHVzaChcIkdhbWUgb3Zlci5cIilcbiAgICAgICAgICAgIGJvYXJkLmZhaWwoZmFpbE1zZ3Muam9pbignXFxuJykpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdHVzTWVzc2FnZVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb25kbmVzc0FuZFByZXBhcmVGYWlsTXNnKCkge1xuICAgICAgICBsZXQgZmFpbE1zZ3MgPSBBcnJheTxzdHJpbmc+KClcbiAgICAgICAgZm9yIChsZXQgaDEgb2YgdGhpcy5odW1hbnMpIHtcbiAgICAgICAgICAgIGxldCBoMUhhdGVzTGlzdCA9IEFycmF5PEh1bWFuTmFtZT4oKVxuICAgICAgICAgICAgZm9yIChsZXQgaDIgb2YgdGhpcy5odW1hbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaDEgPT0gaDIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0Rm9uZG5lc3MoW2gxLm5hbWUsIGgyLm5hbWVdKSA8PSBNSU5fRk9ORE5FU1MpIHtcbiAgICAgICAgICAgICAgICAgICAgaDFIYXRlc0xpc3QucHVzaChoMi5uYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGgxSGF0ZXNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgaDFIYXRlc1N0cmluZyA9IGgxSGF0ZXNMaXN0Lmxlbmd0aCA9PSAyXG4gICAgICAgICAgICAgICAgICAgID8gaDFIYXRlc0xpc3Quam9pbihcIiBhbmQgXCIpXG4gICAgICAgICAgICAgICAgICAgIDogaDFIYXRlc0xpc3Quam9pbihcIiwgXCIpXG5cbiAgICAgICAgICAgICAgICBmYWlsTXNncy5wdXNoKGAke2gxLm5hbWV9ICR7aDEubmFtZSA9PSAnWW91JyA/IGBoYXRlYCA6IGBoYXRlc2B9ICR7aDFIYXRlc1N0cmluZ30gdG9vIG11Y2guYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFpbE1zZ3NcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdFN0YXR1c01lc3NhZ2UoZWZmZWN0czogU2l0dWF0aW9uRWZmZWN0W10sIHRyaXBTdW1tYXJ5OiBUcmlwU3VtbWFyeSkge1xuICAgICAgICBsZXQgeyBwZXJQZXJzb25SZWxDaGFuZ2VzLCBwZXJQZXJzb25IdW1DaGFuZ2VzIH0gPSB0aGlzLnJlZHVjZUVmZmVjdHNQZXJQZXJzb24oZWZmZWN0cylcbiAgICAgICAgdGhpcy5yZWR1Y2VUYWdzU2hhZG93aW5nKHBlclBlcnNvblJlbENoYW5nZXMpXG5cbiAgICAgICAgLy8gZGVkdXBsaWNhdGUgZWZmZWN0IGRlc2NyaXB0aW9ucyBcbiAgICAgICAgbGV0IGVmZmVjdHNNc2dzID0gQXJyYXkuZnJvbShuZXcgU2V0KGVmZmVjdHMubWFwKGVmZmVjdCA9PiB0aGlzLmZpeEFncmVlbWVudChlZmZlY3QuZ2V0UmFuZG9tRGVzY3JpcHRpb24oKSkpKSlcblxuICAgICAgICAvLyBlZmZlY3RzTXNncy5wdXNoKFwiXCIpIC8vIHNlcGFyYXRvciBkdW1teVxuICAgICAgICAvLyBlZmZlY3RzTXNncyA9IGVmZmVjdHNNc2dzLmNvbmNhdCh0aGlzLmNyZWF0ZUVmZmVjdHNNc2dzKHBlclBlcnNvblJlbENoYW5nZXMsIHBlclBlcnNvbkh1bUNoYW5nZXMpKVxuICAgICAgICBjb25zb2xlLmxvZyhcIk1zZ3M6XCIsIGVmZmVjdHNNc2dzKVxuXG4gICAgICAgIGVmZmVjdHNNc2dzID0gZWZmZWN0c01zZ3MuZmlsdGVyKG1zZyA9PiB7XG4gICAgICAgICAgICBsZXQgZ29uZVBlb3BsZSA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0UGVvcGxlV2l0aFRhZ3MoSHVtYW5UYWcuZ29uZSlcbiAgICAgICAgICAgIHJldHVybiBnb25lUGVvcGxlLmV2ZXJ5KGdwID0+ICFtc2cuaW5jbHVkZXMoZ3ApKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBlZmZlY3RNc2cgPSBlZmZlY3RzTXNncy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGVmZmVjdHNNc2dzLmpvaW4oJ1xcbicpXG4gICAgICAgICAgICA6IFwiTm90aGluZyBzaWduaWZpY2FudCBvY2N1cnJlZC5cIlxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBmaW5hbCBtc2dcbiAgICAgICAgbGV0IGZyaWVuZExpc3Q6IHN0cmluZyA9IHRyaXBTdW1tYXJ5LmdvUGVvcGxlLmZpbHRlcigoeDogSHVtYW4pID0+IHgubmFtZSAhPSAnWW91JykubWFwKChodW1hbjogSHVtYW4pID0+IGh1bWFuLm5hbWUpLmpvaW4oJywgJylcbiAgICAgICAgbGV0IHN0YXR1c01lc3NhZ2UgPSBgWW91IHdlbnQgJHt0cmlwU3VtbWFyeS5nb0xvY2F0aW9ufSB3aXRoICR7ZnJpZW5kTGlzdH0uXFxuJHtlZmZlY3RNc2d9YFxuXG4gICAgICAgIHJldHVybiBzdGF0dXNNZXNzYWdlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWR1Y2VUYWdzU2hhZG93aW5nKHBlclBlcnNvblJlbE1zZzogTWFwPEVkZ2VLZXksIFtSZWxhdGlvbnNoaXBUYWdbXSwgUmVsYXRpb25zaGlwVGFnW11dPikge1xuICAgICAgICBwZXJQZXJzb25SZWxNc2cuZm9yRWFjaCgoY2hhbmdlcywgY291cGxlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VGFncyA9IGNoYW5nZXNbMF1cbiAgICAgICAgICAgIGxldCByZW1UYWdzID0gY2hhbmdlc1sxXVxuICAgICAgICAgICAgbGV0IHRvUmVtTmV3OiBBcnJheTxSZWxhdGlvbnNoaXBUYWc+ID0gW11cbiAgICAgICAgICAgIGxldCB0b1JlbVJlbTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCB0YWcgb2YgbmV3VGFncykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHRhZ0sgb2YgcmVsYXRpb25zaGlwVGFnU2hhZG93aW5nTmV3UmVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWdLWzBdID09IHRhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9SZW1SZW0ucHVzaCh0YWdLWzFdKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgdGFnIG9mIHJlbVRhZ3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB0YWdLIG9mIHJlbGF0aW9uc2hpcFRhZ1NoYWRvd2luZ1JlbU5ldykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnS1swXSA9PSB0YWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvUmVtTmV3LnB1c2godGFnS1sxXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1RhZ3MgPSBuZXdUYWdzLmZpbHRlcih4ID0+ICF0b1JlbU5ldy5pbmNsdWRlcyh4KSlcbiAgICAgICAgICAgIHJlbVRhZ3MgPSByZW1UYWdzLmZpbHRlcih4ID0+ICF0b1JlbVJlbS5pbmNsdWRlcyh4KSlcbiAgICAgICAgICAgIHBlclBlcnNvblJlbE1zZy5zZXQoY291cGxlLCBbbmV3VGFncywgcmVtVGFnc10pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwZXJQZXJzb25SZWxNc2dcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVmZmVjdHNNc2dzKFxuICAgICAgICBwZXJQZXJzb25SZWxNc2c6IE1hcDxFZGdlS2V5LCBbUmVsYXRpb25zaGlwVGFnW10sIFJlbGF0aW9uc2hpcFRhZ1tdXT4sXG4gICAgICAgIHBlclBlcnNvbkh1bU1zZzogTWFwPEh1bWFuTmFtZSwgW0h1bWFuVGFnW10sIEh1bWFuVGFnW11dPixcbiAgICApOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgbGV0IGVmZmVjdE1zZzogQXJyYXk8c3RyaW5nPiA9IFtdXG5cbiAgICAgICAgcGVyUGVyc29uSHVtTXNnLmZvckVhY2goKGNoYW5nZXMsIHBlcnNvbikgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1RhZ3MgPSBjaGFuZ2VzWzBdXG4gICAgICAgICAgICBsZXQgcmVtVGFncyA9IGNoYW5nZXNbMV1cbiAgICAgICAgICAgIGxldCByZW1UYWdzQXJyID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IHJlbVRhZyBvZiByZW1UYWdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGh1bWFuVGFnTWFwLmhhcyhyZW1UYWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbVRhZ3NBcnIucHVzaChodW1hblRhZ01hcC5nZXQocmVtVGFnKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3VGFnc0FyciA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBuZXdUYWcgb2YgbmV3VGFncykge1xuICAgICAgICAgICAgICAgIGlmIChodW1hblRhZ01hcC5oYXMobmV3VGFnKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdUYWdzQXJyLnB1c2goaHVtYW5UYWdNYXAuZ2V0KG5ld1RhZykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbVRhZ3NBcnIubGVuZ3RoICE9IDAgJiYgbmV3VGFnc0Fyci5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGVmZmVjdE1zZy5wdXNoKGAke3BlcnNvbn0gbG9zdCAke3JlbVRhZ3NBcnIuam9pbignLCAnKX0sIGJ1dCBnYWluZWQgJHtuZXdUYWdzQXJyLmpvaW4oJywgJyl9YClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVtVGFnc0Fyci5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICAgIGVmZmVjdE1zZy5wdXNoKGAke3BlcnNvbn0gbG9zdCAke3JlbVRhZ3NBcnIuam9pbignLCAnKX1gKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdUYWdzQXJyLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgZWZmZWN0TXNnLnB1c2goYCR7cGVyc29ufSBnYWluZWQgJHtuZXdUYWdzQXJyLmpvaW4oJywgJyl9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICAgIGxldCByZWxhdGlvbnNoaXBUZW1wbGF0ZXM6IEFycmF5PFtzdHJpbmcsIENvdXBsZV0+ID0gW11cbiAgICAgICAgbGV0IGFkZElmTm90Q29udGFpbnMgPSAodGFnOiBSZWxhdGlvbnNoaXBUYWcsIG1lc3NhZ2U6IHN0cmluZywgY291cGxlOiBDb3VwbGUpOiBib29sZWFuID0+IHtcbiAgICAgICAgICAgIC8vIElmIGl0J3Mgbm90IGJpZGlyZWN0aW9uYWwgZXhwbGljaXRseSwgd2UgZG9uJ3QgZGVkdXBsaWNhdGVcbiAgICAgICAgICAgIGlmICghcmVsYXRpb25zaGlwVGFnQmlkaXJlY3Rpb25hbC5oYXModGFnKSkge1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uc2hpcFRlbXBsYXRlcy5wdXNoKFttZXNzYWdlLCBjb3VwbGVdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IHggb2YgcmVsYXRpb25zaGlwVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhbMF0gPT0gbWVzc2FnZSAmJiAoKHhbMV1bMF0gPT0gY291cGxlWzBdICYmIHhbMV1bMV0gPT0gY291cGxlWzFdKSB8fCAoeFsxXVswXSA9PSBjb3VwbGVbMV0gJiYgeFsxXVsxXSA9PSBjb3VwbGVbMF0pKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWxhdGlvbnNoaXBUZW1wbGF0ZXMucHVzaChbbWVzc2FnZSwgY291cGxlXSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBwZXJQZXJzb25SZWxNc2cuZm9yRWFjaCgoY2hhbmdlcywgZWRnZUtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvdXBsZSA9IENvdXBsZVV0aWxzLmZyb21FZGdlS2V5KGVkZ2VLZXkpXG4gICAgICAgICAgICBsZXQgbmV3VGFncyA9IGNoYW5nZXNbMF1cbiAgICAgICAgICAgIGxldCByZW1UYWdzID0gY2hhbmdlc1sxXVxuICAgICAgICAgICAgZm9yIChsZXQgcmVtVGFnIG9mIHJlbVRhZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zaGlwVGFnTWFwU3RvcnkuaGFzKHJlbVRhZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkSWZOb3RDb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbVRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWxhdGlvbnNoaXBUYWdNYXBTdG9yeS5nZXQocmVtVGFnKSBhcyBbc3RyaW5nLCBzdHJpbmddKVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdXBsZSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG5ld1RhZyBvZiBuZXdUYWdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlbGF0aW9uc2hpcFRhZ01hcFN0b3J5LmhhcyhuZXdUYWcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZElmTm90Q29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVsYXRpb25zaGlwVGFnTWFwU3RvcnkuZ2V0KG5ld1RhZykgYXMgW3N0cmluZywgc3RyaW5nXSlbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VwbGUsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgZm9yIChsZXQgeCBvZiByZWxhdGlvbnNoaXBUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgIGVmZmVjdE1zZy5wdXNoKFxuICAgICAgICAgICAgICAgIHhbMF0ucmVwbGFjZSgnU1VCSicsIHhbMV1bMF0pLnJlcGxhY2UoJ09CSicsIHhbMV1bMV0pLFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVmZmVjdE1zZ1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVkdWNlRWZmZWN0c1BlclBlcnNvbihlZmZlY3RzOiBTaXR1YXRpb25FZmZlY3RbXSkge1xuICAgICAgICAvLyBmaXJzdCBhcnJheSBpbiBrZXlzIGlzIGFsd2F5cyBhZGRlZCB0YWdzLCBzZWNvbmQgcmVtb3ZlZFxuICAgICAgICBsZXQgcGVyUGVyc29uUmVsQ2hhbmdlcyA9IG5ldyBNYXA8RWRnZUtleSwgW0FycmF5PFJlbGF0aW9uc2hpcFRhZz4sIEFycmF5PFJlbGF0aW9uc2hpcFRhZz5dPigpXG4gICAgICAgIGxldCBwZXJQZXJzb25IdW1DaGFuZ2VzID0gbmV3IE1hcDxIdW1hbk5hbWUsIFtBcnJheTxIdW1hblRhZz4sIEFycmF5PEh1bWFuVGFnPl0+KClcblxuICAgICAgICBsZXQgYWRkVG9NYXAgPSBmdW5jdGlvbiA8SywgVj4oa2V5OiBLLCB2YWx1ZTogViwgdmFsdWVTdG9yZTogTWFwPEssIFtBcnJheTxWPiwgQXJyYXk8Vj5dPiwgYWRkZWRSZW1vdmVkU3RvcmVTd2l0Y2g6IDAgfCAxKSB7XG4gICAgICAgICAgICBsZXQgcGVyS2V5U3RvcmUgPSB2YWx1ZVN0b3JlLmdldChrZXkpID8/IFtuZXcgQXJyYXk8Vj4oKSwgbmV3IEFycmF5PFY+KCldXG4gICAgICAgICAgICBwZXJLZXlTdG9yZVthZGRlZFJlbW92ZWRTdG9yZVN3aXRjaF0ucHVzaCh2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KGtleSwgcGVyS2V5U3RvcmUpXG4gICAgICAgIH1cblxuICAgICAgICBlZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IHtcbiAgICAgICAgICAgIGVmZmVjdC5hZGRlZEh1bVRhZ3MuZm9yRWFjaChhaCA9PiBhZGRUb01hcChhaFswXSwgYWhbMV0sIHBlclBlcnNvbkh1bUNoYW5nZXMsIDApKVxuICAgICAgICAgICAgZWZmZWN0LnJlbW92ZWRIdW1UYWdzLmZvckVhY2gocmggPT4gYWRkVG9NYXAocmhbMF0sIHJoWzFdLCBwZXJQZXJzb25IdW1DaGFuZ2VzLCAxKSlcbiAgICAgICAgICAgIGVmZmVjdC5hZGRlZFJlbFRhZ3MuZm9yRWFjaChhaCA9PiBhZGRUb01hcChDb3VwbGVVdGlscy50b0VkZ2VLZXkoYWhbMF0pLCBhaFsxXSwgcGVyUGVyc29uUmVsQ2hhbmdlcywgMCkpXG4gICAgICAgICAgICBlZmZlY3QucmVtb3ZlZFJlbFRhZ3MuZm9yRWFjaChhaCA9PiBhZGRUb01hcChDb3VwbGVVdGlscy50b0VkZ2VLZXkoYWhbMF0pLCBhaFsxXSwgcGVyUGVyc29uUmVsQ2hhbmdlcywgMSkpXG4gICAgICAgIH0pXG5cblxuICAgICAgICByZXR1cm4geyBwZXJQZXJzb25SZWxDaGFuZ2VzLCBwZXJQZXJzb25IdW1DaGFuZ2VzIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIdW1hbiB9IGZyb20gXCIuL2h1bWFuXCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcsIHJlbGF0aW9uc2hpcFRhZ01hcCB9IGZyb20gXCIuLi9jb250ZW50L2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcblxuZXhwb3J0IHR5cGUgRWRnZUtleSA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ291cGxlID0gW0h1bWFuTmFtZSwgSHVtYW5OYW1lXVxuXG5leHBvcnQgY29uc3QgTUlOX0ZPTkRORVNTID0gMFxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRk9ORE5FU1MgPSA1XG5leHBvcnQgY29uc3QgTUFYX0ZPTkRORVNTID0gMTBcblxuZXhwb3J0IGNsYXNzIFBlb3BsZUdyYXBoIHtcbiAgICBwcml2YXRlIHBlb3BsZTogQXJyYXk8SHVtYW4+XG4gICAgcHJpdmF0ZSByZWxhdGlvbnNoaXBUYWdzOiBNYXA8RWRnZUtleSwgU2V0PFJlbGF0aW9uc2hpcFRhZz4+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBmb25kbmVzczogTWFwPEVkZ2VLZXksIG51bWJlcj4gPSBuZXcgTWFwKClcbiAgICBwcml2YXRlIGh1bWFuc1RhZ3M6IE1hcDxIdW1hbk5hbWUsIFNldDxIdW1hblRhZz4+ID0gbmV3IE1hcCgpXG4gICAgcHJpdmF0ZSBodW1hbk5hbWVzOiBBcnJheTxIdW1hbk5hbWU+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcGVvcGxlOiBIdW1hbltdID0gW10sXG4gICAgICAgIGluaXRpYWxSZWxhdGlvbnNoaXBzOiBBcnJheTxSZWxhdGlvbnNoaXA+ID0gW10sXG4gICAgICAgIGluaXRpYWxUYWdzOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LFxuICAgICAgICBpbml0aWFsRm9uZG5lc3M6IEFycmF5PFtDb3VwbGUsIG51bWJlcl0+LFxuICAgICkge1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZVxuXG4gICAgICAgIHBlb3BsZS5mb3JFYWNoKGggPT4ge1xuICAgICAgICAgICAgcGVvcGxlLmZvckVhY2goaGggPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoLm5hbWUgIT0gaGgubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJlbFRhZ3MoW2gubmFtZSwgaGgubmFtZV0sIG5ldyBTZXQ8UmVsYXRpb25zaGlwVGFnPigpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbmRuZXNzLnNldChDb3VwbGVVdGlscy50b0VkZ2VLZXkoW2gubmFtZSwgaGgubmFtZV0pLCBERUZBVUxUX0ZPTkRORVNTKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcGVvcGxlLmZvckVhY2gocCA9PntcbiAgICAgICAgICAgIHRoaXMuaHVtYW5zVGFncy5zZXQocC5uYW1lLCBuZXcgU2V0KCkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaW5pdGlhbFRhZ3MuZm9yRWFjaChoVGFnVHVwbGUgPT4ge1xuICAgICAgICAgICAgbGV0IFtoTmFtZSwgaFRhZ10gPSBoVGFnVHVwbGVcbiAgICAgICAgICAgIHRoaXMuYWRkSHVtVGFnKGhOYW1lLCBoVGFnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGluaXRpYWxSZWxhdGlvbnNoaXBzLmZvckVhY2gocmVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVsVGFncyhyZWwucGVvcGxlLCByZWwudGFncylcbiAgICAgICAgfSlcblxuICAgICAgICBpbml0aWFsRm9uZG5lc3MuZm9yRWFjaCgoW2NvdXBsZSwgZm9uZG5lc3NdKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChNSU5fRk9ORE5FU1MgPD0gZm9uZG5lc3MgJiYgZm9uZG5lc3MgPD0gTUFYX0ZPTkRORVNTKVxuICAgICAgICAgICAgdGhpcy5mb25kbmVzcy5zZXQoQ291cGxlVXRpbHMudG9FZGdlS2V5KGNvdXBsZSksIGZvbmRuZXNzKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuaHVtYW5OYW1lcyA9IHBlb3BsZS5tYXAocCA9PiBwLm5hbWUpXG4gICAgfVxuXG4gICAgcHVibGljIGdldEh1bWFuTmFtZXMoKTogQXJyYXk8SHVtYW5OYW1lPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh1bWFuTmFtZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSHVtVGFnKHBlcnNvbjogSHVtYW5OYW1lLCB0YWc6IEh1bWFuVGFnKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBoVGFncyA9IHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKVxuICAgICAgICBsZXQgbmV3bHlBZGRlZCA9ICFoVGFncz8uaGFzKHRhZylcbiAgICAgICAgaFRhZ3M/LmFkZCh0YWcpXG5cbiAgICAgICAgcmV0dXJuIG5ld2x5QWRkZWRcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSHVtVGFnKHBlcnNvbjogSHVtYW5OYW1lLCB0YWc6IEh1bWFuVGFnKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh1bWFuc1RhZ3MuZ2V0KHBlcnNvbik/LmRlbGV0ZSh0YWcpID8/IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGdldEh1bVRhZ3MocGVyc29uOiBIdW1hbk5hbWUpOiBTZXQ8SHVtYW5UYWc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKSA/PyBuZXcgU2V0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UmVsVGFncyhwZW9wbGU6IENvdXBsZSwgdGFnczogU2V0PFJlbGF0aW9uc2hpcFRhZz4pIHtcbiAgICAgICAgbGV0IGdyYXBoS2V5ID0gQ291cGxlVXRpbHMudG9FZGdlS2V5KHBlb3BsZSlcbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLnNldChncmFwaEtleSwgdGFncylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UmVsVGFncyhwZW9wbGU6IENvdXBsZSk6IFNldDxSZWxhdGlvbnNoaXBUYWc+IHtcbiAgICAgICAgbGV0IGdyYXBoS2V5ID0gQ291cGxlVXRpbHMudG9FZGdlS2V5KHBlb3BsZSlcbiAgICAgICAgcmV0dXJuIHRoaXMucmVsYXRpb25zaGlwVGFncy5nZXQoZ3JhcGhLZXkpIVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRSZWxUYWcocGVvcGxlOiBDb3VwbGUsIHRhZzogUmVsYXRpb25zaGlwVGFnKSB7XG4gICAgICAgIGNvbnN0IHJlbFRhZ3MgPSB0aGlzLmdldFJlbFRhZ3MocGVvcGxlKVxuICAgICAgICBsZXQgbmV3bHlBZGRlZCA9ICFyZWxUYWdzPy5oYXModGFnKVxuICAgICAgICByZWxUYWdzPy5hZGQodGFnKVxuXG4gICAgICAgIHJldHVybiBuZXdseUFkZGVkXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVJlbFRhZyhwZW9wbGU6IENvdXBsZSwgdGFnOiBSZWxhdGlvbnNoaXBUYWcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVsVGFncyhwZW9wbGUpPy5kZWxldGUodGFnKSA/PyBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VGb25kbmVzcyhwZW9wbGU6IENvdXBsZSwgY2hhbmdlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRvID0gdGhpcy5mb25kbmVzcy5nZXQoQ291cGxlVXRpbHMudG9FZGdlS2V5KHBlb3BsZSkpISArIGNoYW5nZVxuICAgICAgICB0byA9IE1hdGgubWluKHRvLCBNQVhfRk9ORE5FU1MpXG4gICAgICAgIHRvID0gTWF0aC5tYXgodG8sIE1JTl9GT05ETkVTUylcbiAgICAgICAgdGhpcy5zZXRGb25kbmVzcyhwZW9wbGUsIHRvKVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGb25kbmVzcyhwZW9wbGU6IENvdXBsZSwgdG86IG51bWJlcikge1xuICAgICAgICB0aGlzLmZvbmRuZXNzLnNldChDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKSwgdG8pXG4gICAgfVxuXG4gICAgcHVibGljIGdldEZvbmRuZXNzKHBlb3BsZTogQ291cGxlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGVkZ2VLZXkgPSBDb3VwbGVVdGlscy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICByZXR1cm4gdGhpcy5mb25kbmVzcy5nZXQoZWRnZUtleSkgPz8gMFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRPdXRSZWxhdGlvbnNoaXBzKHBlcnNvbjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwPiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXlcblxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcFRhZ3MuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChIdW1hbk5hbWVbcGVyc29uXSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUmVsYXRpb25zaGlwKENvdXBsZVV0aWxzLmZyb21FZGdlS2V5KGtleSksIHZhbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJblJlbGF0aW9uc2hpcHMocGVyc29uOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXA+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheVxuXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwVGFncy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5lbmRzV2l0aChIdW1hbk5hbWVbcGVyc29uXSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUmVsYXRpb25zaGlwKENvdXBsZVV0aWxzLmZyb21FZGdlS2V5KGtleSksIHZhbCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihhOiBIdW1hbk5hbWUsIGI6IEh1bWFuTmFtZSk6IEFycmF5PFJlbGF0aW9uc2hpcFRhZz4ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnJlbGF0aW9uc2hpcFRhZ3MuZ2V0KENvdXBsZVV0aWxzLnRvRWRnZUtleShbYSwgYl0pKSA/PyBbXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0T3V0UmVsYXRpb25zaGlwc09mVHlwZShhOiBIdW1hbk5hbWUsIHRhZzogUmVsYXRpb25zaGlwVGFnKTogQXJyYXk8UmVsYXRpb25zaGlwPntcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3V0UmVsYXRpb25zaGlwcyhhKS5maWx0ZXIocmVsID0+IHJlbC50YWdzLmhhcyh0YWcpKVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXZlTXV0dWFsUmVsYXRpb25zaGlwVGFnKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lLCB0YWc6IFJlbGF0aW9uc2hpcFRhZyk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGEsIGIpLmluY2x1ZGVzKHRhZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiB7XG4gICAgICAgIGxldCBhYiA9IHRoaXMuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYilcbiAgICAgICAgbGV0IGJhID0gdGhpcy5nZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihiLCBhKVxuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24oYWIsIGJhKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBbGxSZWxhdGlvbnNoaXBzKCk6IFJlbGF0aW9uc2hpcFtdIHtcbiAgICAgICAgbGV0IHJlcyA9IG5ldyBBcnJheVxuXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwVGFncy5mb3JFYWNoKCh0YWdzLCBlZGdlS2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3VwbGUgPSBDb3VwbGVVdGlscy5mcm9tRWRnZUtleShlZGdlS2V5KVxuICAgICAgICAgICAgcmVzLnB1c2gobmV3IFJlbGF0aW9uc2hpcChjb3VwbGUsIHRhZ3MpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QWxsSHVtYW5OYW1lcygpOiBBcnJheTxIdW1hbk5hbWU+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVvcGxlLm1hcChwID0+IHAubmFtZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UGVvcGxlV2l0aFRhZ3ModGFnOiBIdW1hblRhZyk6IEFycmF5PEh1bWFuTmFtZT57XG4gICAgICAgIGxldCByZXMgPSBBcnJheSgpXG4gICAgICAgIHRoaXMuaHVtYW5zVGFncy5mb3JFYWNoKCh0YWdzLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFncy5oYXModGFnKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKG5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZXNcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgQ291cGxlVXRpbHMge1xuICAgIHN0YXRpYyBvcmllbnRlZDogYm9vbGVhbiA9IHRydWVcblxuICAgIHB1YmxpYyBzdGF0aWMgdG9FZGdlS2V5KHVub3JkZXJlZFBhaXI6IENvdXBsZSk6IEVkZ2VLZXkge1xuICAgICAgICBsZXQgW2EsIGJdID0gdW5vcmRlcmVkUGFpclxuICAgICAgICBsZXQgb3JkZXJlZFBhaXIgPSBhIDw9IGIgfHwgdGhpcy5vcmllbnRlZCA/IFthLCBiXSA6IFtiLCBhXVxuXG4gICAgICAgIHJldHVybiBvcmRlcmVkUGFpci5tYXAodiA9PiB2KS5qb2luKCd8JylcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21FZGdlS2V5KGtleTogRWRnZUtleSk6IENvdXBsZSB7XG4gICAgICAgIGxldCBuYW1lcyA9IGtleS5zcGxpdCgnfCcpXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG5hbWVzLmxlbmd0aCA9PSAyKVxuXG4gICAgICAgIHJldHVybiBbbmFtZXNbMF0gYXMgSHVtYW5OYW1lLCBuYW1lc1sxXSBhcyBIdW1hbk5hbWVdXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBSZWxhdGlvbnNoaXAge1xuICAgIHBlb3BsZTogQ291cGxlXG4gICAgdGFnczogU2V0PFJlbGF0aW9uc2hpcFRhZz5cblxuICAgIGNvbnN0cnVjdG9yKHBlb3BsZTogQ291cGxlLCB0YWdzPzogU2V0PFJlbGF0aW9uc2hpcFRhZz4pIHtcbiAgICAgICAgdGhpcy5wZW9wbGUgPSBwZW9wbGVcbiAgICAgICAgdGhpcy50YWdzID0gdGFncyA/PyBuZXcgU2V0PFJlbGF0aW9uc2hpcFRhZz4oKVxuICAgIH1cblxuICAgIC8vIEBkZXByZWNhdGVkXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBlb3BsZVsxXX06ICR7QXJyYXkuZnJvbSh0aGlzLnRhZ3MpLm1hcCgoeCkgPT4gcmVsYXRpb25zaGlwVGFnTWFwLmdldCh4KSA/PyBcIj9cIikuam9pbignLCAnKX1gXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uPFQ+KGFzOiBUW10sIGJzOiBUW10pOiBUW10ge1xuICAgIGxldCByZXMgPSBuZXcgQXJyYXlcblxuICAgIGZvciAoY29uc3QgYSBvZiBhcykge1xuICAgICAgICBpZiAoYnMuaW5jbHVkZXMoYSkpIHtcbiAgICAgICAgICAgIHJlcy5wdXNoKGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzXG59IiwiaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi90cmlwU3VtbWFyeVwiXG5pbXBvcnQgeyBIdW1hblRhZywgUmVsYXRpb25zaGlwVGFnIH0gZnJvbSBcIi4uL2NvbnRlbnQvZW50aXR5VGFnc1wiXG5pbXBvcnQgeyBDb3VwbGUsIFBlb3BsZUdyYXBoIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgSHVtYW5OYW1lIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5zXCJcblxuZXhwb3J0IGludGVyZmFjZSBTaXR1YXRpb24ge1xuICAgIEdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXA6IFRyaXBTdW1tYXJ5LCBjdXJyZW50U3RhdGU6IFBlb3BsZUdyYXBoLCB0cmlwQ291bnQ6IG51bWJlcik6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2l0dWF0aW9uRWZmZWN0IHtcbiAgICBkZXNjcmlwdGlvbjogQXJyYXk8c3RyaW5nPlxuXG4gICAgYWRkZWRSZWxUYWdzOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPlxuICAgIHJlbW92ZWRSZWxUYWdzOiBBcnJheTxbQ291cGxlLCBSZWxhdGlvbnNoaXBUYWddPlxuXG4gICAgYWRkZWRIdW1UYWdzOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+XG4gICAgcmVtb3ZlZEh1bVRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT5cblxuICAgIGNoYW5nZWRGb25kbmVzczogQXJyYXk8W0NvdXBsZSwgbnVtYmVyXT5cbiAgICBuZXdGdXR1cmVTaXR1YXRpb25zOiBBcnJheTxbbnVtYmVyLCBTaXR1YXRpb25dPlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPixcbiAgICAgICAgYWRkZWRSZWxUYWdzPzogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4sXG4gICAgICAgIHJlbW92ZWRSZWxUYWdzPzogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4sXG4gICAgICAgIGFkZGVkSHVtVGFncz86IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgICAgIHJlbW92ZWRIdW1UYWdzPzogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgY2hhbmdlZEZvbmRuZXNzPzogQXJyYXk8W0NvdXBsZSwgbnVtYmVyXT4sXG4gICAgICAgIG5ld0Z1dHVyZVNpdHVhdGlvbnM/OiBBcnJheTxbbnVtYmVyLCBTaXR1YXRpb25dPlxuICAgICkge1xuICAgICAgICBsZXQgYXNzaWduZWREZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uID8/IG5ldyBBcnJheTxzdHJpbmc+KClcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEFycmF5LmlzQXJyYXkoYXNzaWduZWREZXNjcmlwdGlvbikgXG4gICAgICAgICAgICA/IGFzc2lnbmVkRGVzY3JpcHRpb24gXG4gICAgICAgICAgICA6IFthc3NpZ25lZERlc2NyaXB0aW9uXVxuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncyA9IGFkZGVkUmVsVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnJlbW92ZWRSZWxUYWdzID0gcmVtb3ZlZFJlbFRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5hZGRlZEh1bVRhZ3MgPSBhZGRlZEh1bVRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5yZW1vdmVkSHVtVGFncyA9IHJlbW92ZWRIdW1UYWdzID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMuY2hhbmdlZEZvbmRuZXNzID0gY2hhbmdlZEZvbmRuZXNzID8/IG5ldyBBcnJheSgpXG4gICAgICAgIHRoaXMubmV3RnV0dXJlU2l0dWF0aW9ucyA9IG5ld0Z1dHVyZVNpdHVhdGlvbnMgPz8gbmV3IEFycmF5KClcbiAgICB9XG5cbiAgICBhZGRSZWxUYWdzKHRhZ3M6IEFycmF5PFtDb3VwbGUsIFJlbGF0aW9uc2hpcFRhZ10+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5hZGRlZFJlbFRhZ3MucHVzaCguLi50YWdzKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJlbW92ZVJlbFRhZ3ModGFnczogQXJyYXk8W0NvdXBsZSwgUmVsYXRpb25zaGlwVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLnJlbW92ZWRSZWxUYWdzLnB1c2goLi4udGFncylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBhZGRIdW1UYWdzKHRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4pOiBTaXR1YXRpb25FZmZlY3Qge1xuICAgICAgICB0aGlzLmFkZGVkSHVtVGFncy5wdXNoKC4uLnRhZ3MpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmVtb3ZlSHVtVGFncyh0YWdzOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5yZW1vdmVkSHVtVGFncy5wdXNoKC4uLnRhZ3MpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZ3xBcnJheTxzdHJpbmc+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb24pIFxuICAgICAgICAgICAgPyBkZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIDogW2Rlc2NyaXB0aW9uXVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSYW5kb21EZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRlc2NyaXB0aW9uLmxlbmd0aCldXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VGb25kbmVzcyhjaGFuZ2VzOiBBcnJheTxbQ291cGxlLCBudW1iZXJdPik6IFNpdHVhdGlvbkVmZmVjdCB7XG4gICAgICAgIHRoaXMuY2hhbmdlZEZvbmRuZXNzLnB1c2goLi4uY2hhbmdlcylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBhZGROZXdGdXR1cmVTaXR1YXRpb25zKG5ld0Z1dHVyZVNpdHVhdGlvbnM6IEFycmF5PFtudW1iZXIsIFNpdHVhdGlvbl0+KTogU2l0dWF0aW9uRWZmZWN0IHtcbiAgICAgICAgdGhpcy5uZXdGdXR1cmVTaXR1YXRpb25zLnB1c2goLi4ubmV3RnV0dXJlU2l0dWF0aW9ucylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBhcHBlbmRUb1RoaXMoZWZmZWN0OiBTaXR1YXRpb25FZmZlY3QpIHtcbiAgICAgICAgdGhpcy5hZGRlZEh1bVRhZ3MgPSB0aGlzLmFkZGVkSHVtVGFncy5jb25jYXQoZWZmZWN0LmFkZGVkSHVtVGFncylcbiAgICAgICAgdGhpcy5yZW1vdmVkSHVtVGFncyA9IHRoaXMucmVtb3ZlZEh1bVRhZ3MuY29uY2F0KGVmZmVjdC5yZW1vdmVkSHVtVGFncylcbiAgICAgICAgdGhpcy5hZGRlZFJlbFRhZ3MgPSB0aGlzLmFkZGVkUmVsVGFncy5jb25jYXQoZWZmZWN0LmFkZGVkUmVsVGFncylcbiAgICAgICAgdGhpcy5yZW1vdmVkUmVsVGFncyA9IHRoaXMucmVtb3ZlZFJlbFRhZ3MuY29uY2F0KGVmZmVjdC5yZW1vdmVkUmVsVGFncylcbiAgICAgICAgdGhpcy5jaGFuZ2VkRm9uZG5lc3MgPSB0aGlzLmNoYW5nZWRGb25kbmVzcy5jb25jYXQoZWZmZWN0LmNoYW5nZWRGb25kbmVzcylcbiAgICAgICAgdGhpcy5uZXdGdXR1cmVTaXR1YXRpb25zID0gdGhpcy5uZXdGdXR1cmVTaXR1YXRpb25zLmNvbmNhdChlZmZlY3QubmV3RnV0dXJlU2l0dWF0aW9ucylcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIdW1hbiB9IGZyb20gJy4vaHVtYW4nXG5pbXBvcnQgeyBMb2NhdGlvbk5hbWUgfSBmcm9tICcuLi9jb250ZW50L2xvY2F0aW9ucydcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuLi9jb250ZW50L2h1bWFuc1wiXG5cbmV4cG9ydCBjbGFzcyBUcmlwU3VtbWFyeSB7XG4gICAgcHVibGljIGdvUGVvcGxlOiBBcnJheTxIdW1hbj4gPSBuZXcgQXJyYXk8SHVtYW4+KClcbiAgICBwdWJsaWMgZ29Mb2NhdGlvbj86IExvY2F0aW9uTmFtZVxuXG4gICAgY29uc3RydWN0b3Ioc3BlY2lhbEd1ZXN0OiBIdW1hbikge1xuICAgICAgICB0aGlzLmdvUGVvcGxlLnB1c2goc3BlY2lhbEd1ZXN0KVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVHb1Blb3BsZShodW1hbjogSHVtYW4pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHByZXZTaXplID0gdGhpcy5nb1Blb3BsZS5sZW5ndGhcbiAgICAgICAgdGhpcy5nb1Blb3BsZSA9IHRoaXMuZ29QZW9wbGUuZmlsdGVyKHggPT4geC5uYW1lICE9PSBodW1hbi5uYW1lKVxuICAgICAgICByZXR1cm4gcHJldlNpemUgIT0gdGhpcy5nb1Blb3BsZS5sZW5ndGhcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxpcEdvUGVvcGxlKGh1bWFuOiBIdW1hbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVHb1Blb3BsZShodW1hbikpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGRlbGV0ZWQsIHNvIGFkZFxuICAgICAgICAgICAgdGhpcy5nb1Blb3BsZS5wdXNoKGh1bWFuKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVwYXJlKGxvY2F0aW9uOiBMb2NhdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5nb0xvY2F0aW9uID0gbG9jYXRpb25cbiAgICB9XG5cbiAgICBwdWJsaWMgYWxsUHJlc2VudCguLi5wZW9wbGU6IEh1bWFuTmFtZVtdKSB7XG4gICAgICAgIHJldHVybiBwZW9wbGUuZXZlcnkocCA9PiB0aGlzLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpXG4gICAgfVxuXG4gICAgcHVibGljIHNvbWVQcmVzZW50KC4uLnBlb3BsZTogSHVtYW5OYW1lW10pIHtcbiAgICAgICAgcmV0dXJuIHBlb3BsZS5zb21lKHAgPT4gdGhpcy5nb1Blb3BsZS5tYXAocSA9PiBxLm5hbWUpLmluY2x1ZGVzKHApKVxuICAgIH1cblxuICAgIHB1YmxpYyBhbGxBYnNlbnQoLi4ucGVvcGxlOiBIdW1hbk5hbWVbXSkge1xuICAgICAgICByZXR1cm4gcGVvcGxlLmV2ZXJ5KHAgPT4gIXRoaXMuZ29QZW9wbGUubWFwKHEgPT4gcS5uYW1lKS5pbmNsdWRlcyhwKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgc29tZUFic2VudCguLi5wZW9wbGU6IEh1bWFuTmFtZVtdKSB7XG4gICAgICAgIHJldHVybiBwZW9wbGUuc29tZShwID0+ICF0aGlzLmdvUGVvcGxlLm1hcChxID0+IHEubmFtZSkuaW5jbHVkZXMocCkpXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBMb2FkaW5nU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHByaXZhdGUgZmFkZXI/OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgcHJpdmF0ZSBtb2NrVGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnYXNzZXRzLycpXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYm9hcmRfYmFja2dyb3VuZCcsICdib2FyZF9iYWNrZ3JvdW5kLnBuZycpXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncmVsX3RhZ3MnLCAncmVsX3RhZ3MucG5nJywgeyBmcmFtZVdpZHRoOiAzMCwgZnJhbWVIZWlnaHQ6IDMwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydHJhaXRfYmlnJywgJ3BvcnRyYWl0X2JpZy5wbmcnLCB7IGZyYW1lV2lkdGg6IDIwMCwgZnJhbWVIZWlnaHQ6IDIwMCB9KVxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRyYWl0X3NtYWxsJywgJ3BvcnRyYWl0X3NtYWxsLnBuZycsIHsgZnJhbWVXaWR0aDogNjAsIGZyYW1lSGVpZ2h0OiA2MCB9KVxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2xvY2F0aW9uX3RodW1iJywgJ2xvY2F0aW9uX3RodW1iLnBuZycsIHsgZnJhbWVXaWR0aDogOTAsIGZyYW1lSGVpZ2h0OiA5MCB9KVxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ21haW5fbXVzaWMnLCAnbW9udHVuby5tcDMnKVxuXG4gICAgICAgIHRoaXMuZmFkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgODAwLCA1MDAsIDB4MClcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDEpXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoe3VzZUhhbmRDdXJzb3I6IHRydWV9KVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdtYW5hZ2VtZW50JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIHRoaXMubW9ja1RleHQgPSB0aGlzLmFkZC50ZXh0KDEwMCwgMTAwLCAnJywgeyBmaWxsOiAnI2ZmZicsIGZvbnRGYW1pbHk6ICdSb2JvdG8nIH0pXG4gICAgICAgICAgICAuc2V0RGVwdGgoMTAwMSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuXG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5hZGQudGV4dCgxMDAsIDEwMCwgJ092ZXJseSBGcmFnaWxlIFJlbGF0aW9uc2hpcHMnLCB7IGZpbGw6ICcjZmZmJywgZm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMzBweCcgfSlcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAyKVxuICAgICAgICBsZXQgaGVscCA9IHRoaXMuYWRkLnRleHQoMTAwLCAyMDAsICdQaWNrIHBlb3BsZSB0byBqb2luIHlvdSBvbiBuaWdodHMgb3V0LlxcblRyeSB0byBrZWVwIHlvdXIgZnJpZW5kc2hpcCBuZXR3b3JrIGFsaXZlLicsIHsgZmlsbDogJyNmZmYnLCBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcxOHB4JyB9KVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDIpXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNb2RhbERpYWxvZyB7XG4gICAgcHJpdmF0ZSBwcmV2ZW50Q2xpY2s6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIGJsYWNrQm9hcmQ6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIG1lc3NhZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgcHJpdmF0ZSBkeWluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRleHQ6IHN0cmluZywgcHJpdmF0ZSBjYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfSkge1xuICAgICAgICB0aGlzLnByZXZlbnRDbGljayA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgODAwLCA1MDAsIDB4MDAwMDAwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoNDAwLCAyNTAsIDYwMCwgMzAwLCAweDAwMDAwMClcbiAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBzY2VuZS5hZGQudGV4dCg0MDAsIDI1MCwgdGV4dCwgeyBmb250RmFtaWx5OiAnUm9ib3RvJywgZm9udFNpemU6ICcyMHB4JyB9KVxuICAgICAgICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLjUsIDAuNSlcbiAgICAgICAgICAgIC5zZXRXb3JkV3JhcFdpZHRoKDUwMClcbiAgICAgICAgICAgIC8vIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmRlc3Ryb3koKSlcbiAgICAgICAgICAgIC5zZXRBbHBoYSgwKVxuXG4gICAgICAgIHNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5wcmV2ZW50Q2xpY2tdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMCwgdG86IDAuNCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICB9KVxuICAgICAgICBzY2VuZS5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMuYmxhY2tCb2FyZCwgdGhpcy5tZXNzYWdlXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5keWluZylcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB0aGlzLmR5aW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmNhbGxiYWNrKClcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5tZXNzYWdlLCB0aGlzLmJsYWNrQm9hcmRdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tCb2FyZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZlbnRDbGljay5kZXN0cm95KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMucHJldmVudENsaWNrXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAuNCwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=