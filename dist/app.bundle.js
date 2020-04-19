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

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var RelationshipTag;
(function (RelationshipTag) {
    RelationshipTag[RelationshipTag["crush"] = 0] = "crush";
    RelationshipTag[RelationshipTag["dislike"] = 1] = "dislike";
    RelationshipTag[RelationshipTag["friend_like"] = 2] = "friend_like";
    RelationshipTag[RelationshipTag["friend"] = 3] = "friend";
    RelationshipTag[RelationshipTag["lover"] = 4] = "lover";
    RelationshipTag[RelationshipTag["ex"] = 5] = "ex";
    RelationshipTag[RelationshipTag["political_dis"] = 6] = "political_dis";
})(RelationshipTag = exports.RelationshipTag || (exports.RelationshipTag = {}));
var RelationshipTagMap = (_a = {},
    _a[RelationshipTag.crush] = 'crush',
    _a[RelationshipTag.dislike] = 'dislike',
    _a[RelationshipTag.friend_like] = 'like as a friend',
    _a[RelationshipTag.friend] = 'friend',
    _a[RelationshipTag.lover] = 'lover',
    _a[RelationshipTag.ex] = 'ex',
    _a[RelationshipTag.political_dis] = 'political disagreement',
    _a);
exports.RelationshipTagMap = RelationshipTagMap;
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
})(HumanTag = exports.HumanTag || (exports.HumanTag = {}));
var HumanTagMap = (_b = {},
    _b[HumanTag.introvert] = 'introvert',
    _b[HumanTag.extrovert] = 'extrovert',
    _b[HumanTag.angry_drunk] = 'angry when drunk',
    _b[HumanTag.sad_drunk] = 'sad when drunk',
    _b[HumanTag.good_bowler] = 'good bowler',
    _b[HumanTag.bad_bowler] = 'bad bowler',
    _b[HumanTag.promiscuous] = 'promiscuous',
    _b[HumanTag.jealous] = 'jealous',
    _b[HumanTag.disagreeable] = 'disagreeable',
    _b);
exports.HumanTagMap = HumanTagMap;


/***/ }),

/***/ "./src/content/friendshipManager.ts":
/*!******************************************!*\
  !*** ./src/content/friendshipManager.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FriendshipManager = /** @class */ (function () {
    function FriendshipManager(hateGraph, peopleGraph) {
        this.hateGraph = hateGraph;
        this.peopleGraph = peopleGraph;
    }
    FriendshipManager.prototype.applyMeeting = function (trip) {
        var _this = this;
        var appliedEffects = new Array();
        this.hateGraph.constraints.forEach(function (con) {
            var appEffForCurrCon = _this.tryApplyConstraint(con, trip); // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon);
        });
        return appliedEffects;
    };
    FriendshipManager.prototype.tryApplyConstraint = function (con, trip) {
        var _this = this;
        var applicableEffects = con.GetApplicableEffects(trip, this.peopleGraph);
        applicableEffects.forEach(function (eff) {
            eff.addedRelTags.forEach(function (at) { return _this.peopleGraph.addRelTag(at[0], at[1]); });
            eff.removedRelTags.forEach(function (at) { return _this.peopleGraph.removeRelTag(at[0], at[1]); });
            eff.addedHumTags.forEach(function (ah) { return _this.peopleGraph.addHumTag(ah[0], ah[1]); });
            eff.removedHumTags.forEach(function (rh) { return _this.peopleGraph.removeHumTag(rh[0], rh[1]); });
        });
        return applicableEffects;
    };
    return FriendshipManager;
}());
exports.FriendshipManager = FriendshipManager;


/***/ }),

/***/ "./src/content/hateGraph.ts":
/*!**********************************!*\
  !*** ./src/content/hateGraph.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HateGraph = /** @class */ (function () {
    function HateGraph(constraints) {
        this.constraints = constraints;
    }
    return HateGraph;
}());
exports.HateGraph = HateGraph;
var SituationEffect = /** @class */ (function () {
    function SituationEffect(description, addedRelTags, removedRelTags, addedHumTags, removedHumTags) {
        this.description = description;
        this.addedRelTags = addedRelTags !== null && addedRelTags !== void 0 ? addedRelTags : new Array();
        this.removedRelTags = removedRelTags !== null && removedRelTags !== void 0 ? removedRelTags : new Array();
        this.addedHumTags = addedHumTags !== null && addedHumTags !== void 0 ? addedHumTags : new Array();
        this.removedHumTags = removedHumTags !== null && removedHumTags !== void 0 ? removedHumTags : new Array();
    }
    return SituationEffect;
}());
exports.SituationEffect = SituationEffect;


/***/ }),

/***/ "./src/content/human.ts":
/*!******************************!*\
  !*** ./src/content/human.ts ***!
  \******************************/
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

/***/ "./src/content/level.ts":
/*!******************************!*\
  !*** ./src/content/level.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var peopleGraph_1 = __webpack_require__(/*! ./peopleGraph */ "./src/content/peopleGraph.ts");
var friendshipManager_1 = __webpack_require__(/*! ./friendshipManager */ "./src/content/friendshipManager.ts");
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var Level = /** @class */ (function () {
    function Level(humans, locations, relationships, initialTags, hateGraph) {
        this.humans = humans;
        this.locations = locations;
        var peopleGraph = new peopleGraph_1.PeopleGraph(this.humans, relationships, initialTags);
        this.friendshipManager = new friendshipManager_1.FriendshipManager(hateGraph, peopleGraph);
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
    Level.prototype.goOut = function (tripSummary) {
        var _a;
        // Update friendships based on trip
        var effects = this.friendshipManager.applyMeeting(tripSummary);
        // Construct msgs for effects
        var _b = this.reduceEffectsPerPerson(effects), perPersonRelMsg = _b.perPersonRelMsg, perPersonHumMsg = _b.perPersonHumMsg;
        var effectsMsgs = this.createEffectsMsgs(perPersonRelMsg, perPersonHumMsg);
        effectsMsgs.concat(effects.map(function (effect) {
            return effect.description;
        }));
        var effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰";
        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay();
        console.log("Effects:", effects);
        console.log("Humans:", this.humans);
        console.log("Relationships", this.friendshipManager.peopleGraph);
        // Construct final msg
        var friendList = tripSummary.goPeople.map(function (human) { return human.name; }).join(', ');
        var statusMessage = "You went out to " + ((_a = tripSummary.goLocation) === null || _a === void 0 ? void 0 : _a.name) + " with " + friendList + ".\n" + effectMsg;
        return statusMessage;
    };
    Level.prototype.createEffectsMsgs = function (perPersonRelMsg, perPersonHumMsg) {
        var relMsgs = Array();
        perPersonRelMsg.forEach(function (changes, couple) {
            var newRelTags = changes[0].map(function (t) { return entityTags_1.RelationshipTagMap[t]; }).join(", ");
            var oldRelTags = changes[1].map(function (t) { return entityTags_1.RelationshipTagMap[t]; }).join(", ");
            relMsgs.push(couple[0] + " now " + newRelTags + " and no longer " + oldRelTags + "  " + couple[1] + ".");
        });
        var humMsgs = Array();
        perPersonHumMsg.forEach(function (changes, person) {
            var newHumTags = changes[0].map(function (t) { return entityTags_1.HumanTagMap[t]; }).join(", ");
            var oldHumTags = changes[1].map(function (t) { return entityTags_1.HumanTagMap[t]; }).join(", ");
            relMsgs.push(person[0] + " is now " + newHumTags + " and no longer " + oldHumTags + ".");
        });
        var effectsMsgs = relMsgs.concat(humMsgs);
        return effectsMsgs;
    };
    Level.prototype.reduceEffectsPerPerson = function (effects) {
        // first array in keys is always added tags, second removed
        var perPersonRelMsg = new Map();
        var perPersonHumMsg = new Map();
        var addToMap = function (key, value, valueStore, addedRemovedStoreSwitch) {
            var _a;
            var perKeyStore = (_a = valueStore.get(key)) !== null && _a !== void 0 ? _a : [new Array(), new Array()];
            perKeyStore[addedRemovedStoreSwitch].push(value);
            valueStore.set(key, perKeyStore);
        };
        effects.forEach(function (effect) {
            effect.addedHumTags.forEach(function (ah) { return addToMap(ah[0], ah[1], perPersonHumMsg, 0); });
            effect.removedHumTags.forEach(function (rh) { return addToMap(rh[0], rh[1], perPersonHumMsg, 1); });
            effect.addedRelTags.forEach(function (ah) { return addToMap(ah[0], ah[1], perPersonRelMsg, 0); });
            effect.removedRelTags.forEach(function (ah) { return addToMap(ah[0], ah[1], perPersonRelMsg, 1); });
        });
        return { perPersonRelMsg: perPersonRelMsg, perPersonHumMsg: perPersonHumMsg };
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/content/levels.ts":
/*!*******************************!*\
  !*** ./src/content/levels.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hateGraph_1 = __webpack_require__(/*! ./hateGraph */ "./src/content/hateGraph.ts");
var level_1 = __webpack_require__(/*! ./level */ "./src/content/level.ts");
var peopleGraph_1 = __webpack_require__(/*! ./peopleGraph */ "./src/content/peopleGraph.ts");
var human_1 = __webpack_require__(/*! ./human */ "./src/content/human.ts");
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var situationTypes_1 = __webpack_require__(/*! ./situationTypes */ "./src/content/situationTypes.ts");
exports.levels = [];
var locations = [
    { name: 'Bowling', limit: { min: 2, max: 5 } },
    { name: 'Drink', limit: { min: 2, max: 4 } },
    { name: 'Forest', limit: { min: 2, max: 6 } },
    { name: 'Movie', limit: { min: 2, max: 6 } },
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
function flattenRelationshipList(relationships) {
    var res = [];
    for (var _i = 0, relationships_1 = relationships; _i < relationships_1.length; _i++) {
        var r = relationships_1[_i];
        if (r instanceof peopleGraph_1.Relationship) {
            res.push(r);
        }
        else {
            var ra = r[0], rb = r[1];
            res.push(ra, rb);
        }
    }
    return res;
}
exports.levels.push(new level_1.Level([
    new human_1.Human('You'),
    new human_1.Human('Alex'),
    new human_1.Human('Beatrice'),
    new human_1.Human('Cecil'),
    new human_1.Human('Dan'),
    new human_1.Human('Eric'),
], locations, flattenRelationshipList([
    mutualRelationship(['Alex', 'Beatrice'], [entityTags_1.RelationshipTag.crush]),
    mutualRelationship(['Alex', 'Cecil'], [entityTags_1.RelationshipTag.crush]),
    new peopleGraph_1.Relationship(['Dan', 'Beatrice'], new Set([entityTags_1.RelationshipTag.ex])),
    new peopleGraph_1.Relationship(['Dan', 'You'], new Set([entityTags_1.RelationshipTag.ex])),
    mutualRelationship(['Eric', 'Alex'], [entityTags_1.RelationshipTag.crush]),
    mutualRelationship(['Eric', 'Beatrice'], [entityTags_1.RelationshipTag.crush]),
]), [
    ['Beatrice', entityTags_1.HumanTag.promiscuous],
    ['Cecil', entityTags_1.HumanTag.introvert],
    ['Dan', entityTags_1.HumanTag.extrovert],
    ['Dan', entityTags_1.HumanTag.angry_drunk],
], new hateGraph_1.HateGraph([
    new situationTypes_1.NobodyLikesAngryDrunk(),
    new situationTypes_1.MutualCrush(),
])));


/***/ }),

/***/ "./src/content/peopleGraph.ts":
/*!************************************!*\
  !*** ./src/content/peopleGraph.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var PeopleGraph = /** @class */ (function () {
    function PeopleGraph(people, initialRelationships, initialTags) {
        var _this = this;
        if (people === void 0) { people = []; }
        if (initialRelationships === void 0) { initialRelationships = []; }
        this.relationshipTags = new Map();
        this.humansTags = new Map();
        this.oriented = true;
        people.forEach(function (h) {
            people.forEach(function (hh) {
                if (h.name != hh.name) {
                    _this.setRelTags([h.name, hh.name], new Set());
                }
            });
        });
        initialTags.forEach(function (hTagTuple) {
            var hName = hTagTuple[0], hTag = hTagTuple[1];
            _this.addHumTag(hName, hTag);
        });
        initialRelationships.forEach(function (rel) {
            _this.setRelTags(rel.people, rel.tags);
        });
    }
    PeopleGraph.prototype.addHumTag = function (person, tag) {
        var _a;
        var hTags = (_a = this.humansTags.get(person)) !== null && _a !== void 0 ? _a : new Set();
        hTags.add(tag);
        this.humansTags.set(person, hTags);
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
        var graphKey = this.toEdgeKey(people);
        this.relationshipTags.set(graphKey, tags);
    };
    PeopleGraph.prototype.getRelTags = function (people) {
        var graphKey = this.toEdgeKey(people);
        return this.relationshipTags.get(graphKey);
    };
    PeopleGraph.prototype.addRelTag = function (people, tag) {
        var _a;
        (_a = this.getRelTags(people)) === null || _a === void 0 ? void 0 : _a.add(tag);
    };
    PeopleGraph.prototype.removeRelTag = function (people, tag) {
        var _a, _b;
        return (_b = (_a = this.getRelTags(people)) === null || _a === void 0 ? void 0 : _a.delete(tag)) !== null && _b !== void 0 ? _b : false;
    };
    PeopleGraph.prototype.getOutRelationships = function (person) {
        var _this = this;
        var result = new Array;
        this.relationshipTags.forEach(function (val, key) {
            if (key.startsWith(person)) {
                result.push(new Relationship(_this.fromEdgeKey(key), val));
            }
        });
        return result;
    };
    PeopleGraph.prototype.getInRelationships = function (person) {
        var _this = this;
        var result = new Array;
        this.relationshipTags.forEach(function (val, key) {
            if (key.endsWith(person)) {
                result.push(new Relationship(_this.fromEdgeKey(key), val));
            }
        });
        return result;
    };
    PeopleGraph.prototype.getRelationshipsBetween = function (a, b) {
        var _a;
        return Array.from((_a = this.relationshipTags.get(this.toEdgeKey([a, b]))) !== null && _a !== void 0 ? _a : []);
    };
    PeopleGraph.prototype.getMutualRelationshipsBetween = function (a, b) {
        var ab = this.getRelationshipsBetween(a, b);
        var ba = this.getRelationshipsBetween(a, b);
        return intersection(ab, ba);
    };
    PeopleGraph.prototype.toEdgeKey = function (unorderedPair) {
        var a = unorderedPair[0], b = unorderedPair[1];
        var orderedPair = a <= b || this.oriented ? [a, b] : [b, a];
        return orderedPair.join('|');
    };
    PeopleGraph.prototype.fromEdgeKey = function (key) {
        var names = key.split('|');
        console.assert(names.length == 2);
        return [names[0], names[1]];
    };
    return PeopleGraph;
}());
exports.PeopleGraph = PeopleGraph;
var Relationship = /** @class */ (function () {
    function Relationship(people, tags) {
        this.people = people;
        this.tags = tags !== null && tags !== void 0 ? tags : new Set();
    }
    Relationship.prototype.toString = function () {
        return this.people[1] + ": " + Array.from(this.tags).map(function (x) { return entityTags_1.RelationshipTagMap[x]; }).join(', ');
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

/***/ "./src/content/situationTypes.ts":
/*!***************************************!*\
  !*** ./src/content/situationTypes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hateGraph_1 = __webpack_require__(/*! ./hateGraph */ "./src/content/hateGraph.ts");
var entityTags_1 = __webpack_require__(/*! ./entityTags */ "./src/content/entityTags.ts");
var SituationUtils = /** @class */ (function () {
    function SituationUtils() {
    }
    SituationUtils.startToDate = function (couple) {
        var a = couple[0], b = couple[1];
        return new hateGraph_1.SituationEffect(a + " and " + b + " started dating!", [
            [[a, b], entityTags_1.RelationshipTag.lover],
            [[b, a], entityTags_1.RelationshipTag.lover],
        ], [
            [[a, b], entityTags_1.RelationshipTag.crush],
            [[b, a], entityTags_1.RelationshipTag.crush],
        ]);
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
            this.allowedLocations.some(function (loc) { var _a; return loc.name == ((_a = trip.goLocation) === null || _a === void 0 ? void 0 : _a.name); });
    };
    return SimpleSituation;
}());
exports.SimpleSituation = SimpleSituation;
var NobodyLikesAngryDrunk = /** @class */ (function () {
    function NobodyLikesAngryDrunk() {
    }
    NobodyLikesAngryDrunk.prototype.GetApplicableEffects = function (trip, currentState) {
        if (trip.goLocation.name != "Drink") {
            return new Array();
        }
        var effects = new Array();
        trip.goPeople.forEach(function (person) {
            var personTags = currentState.getHumTags(person.name);
            if (personTags.has(entityTags_1.HumanTag.angry_drunk)) {
                trip.goPeople.filter(function (p) { return p != person; }).forEach(function (otherPerson) {
                    effects.push(new hateGraph_1.SituationEffect("Nobody likes drunk people", [
                        [[otherPerson.name, person.name], entityTags_1.RelationshipTag.dislike],
                    ]));
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
        // I know this is _terribly_ inefficient :(
        var effects = new Array();
        var crushesMap = new Map();
        var _loop_1 = function (person) {
            var crushesPresent = trip.goPeople.filter(function (b) { return currentState.getMutualRelationshipsBetween(person.name, b.name).includes(entityTags_1.RelationshipTag.crush); }).map(function (h) { return h.name; });
            crushesMap.set(person.name, crushesPresent);
        };
        for (var _i = 0, _a = trip.goPeople; _i < _a.length; _i++) {
            var person = _a[_i];
            _loop_1(person);
        }
        for (var _b = 0, _c = trip.goPeople; _b < _c.length; _b++) {
            var person = _c[_b];
            var crushes = crushesMap.get(person.name);
            if (crushes.length === 1) {
                var crush = crushes[0];
                // Break symmetry by comparing names
                if (crushesMap.get(crush).length === 1 && crush <= person.name) {
                    effects.push(SituationUtils.startToDate([person.name, crush]));
                }
            }
        }
        return effects;
    };
    return MutualCrush;
}());
exports.MutualCrush = MutualCrush;
var Complex = /** @class */ (function () {
    function Complex(haveToBePresent, cannotBePresent, allowedLocations, humTagsReq, humTagsBan, relTagsReq, relTagsBan, effect) {
        this.humReq = haveToBePresent;
        this.humBan = cannotBePresent;
        this.allowedLocations = allowedLocations;
        this.humTagsReq = humTagsReq;
        this.humTagsBan = humTagsBan;
        this.relTagsReq = relTagsReq;
        this.relTagsBan = relTagsBan;
        this.effect = effect;
    }
    Complex.prototype.GetApplicableEffects = function (trip, currentState) {
        return this.isApplicable(trip, currentState) ? this.effect : new Array();
    };
    Complex.prototype.isApplicable = function (trip, currentState) {
        var namesPresent = trip.goPeople.map(function (p) { return p.name; });
        return this.humReq.every(function (hp) { return namesPresent.includes(hp); }) &&
            this.humBan.every(function (cp) { return !namesPresent.includes(cp); }) &&
            this.allowedLocations.some(function (loc) { var _a; return loc.name == ((_a = trip.goLocation) === null || _a === void 0 ? void 0 : _a.name); }) &&
            this.humTagsReq.every(function (hr) { return currentState.getHumTags(hr[0]).has(hr[1]); }) &&
            this.humTagsBan.every(function (br) { return !currentState.getHumTags(br[0]).has(br[1]); }) &&
            this.relTagsReq.every(function (rr) { return currentState.getRelTags(rr[0]).has(rr[1]); }) &&
            this.relTagsBan.every(function (br) { return !currentState.getRelTags(br[0]).has(br[1]); });
    };
    return Complex;
}());
exports.Complex = Complex;


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
    title: 'Sustainable Friendships',
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
var tripsummary_1 = __webpack_require__(/*! ./tripsummary */ "./src/management/tripsummary.ts");
var phone_stage_1 = __webpack_require__(/*! ./phone_stage */ "./src/management/phone_stage.ts");
var human_stage_1 = __webpack_require__(/*! ./human_stage */ "./src/management/human_stage.ts");
var location_stage_1 = __webpack_require__(/*! ./location_stage */ "./src/management/location_stage.ts");
var BoardScene = /** @class */ (function (_super) {
    __extends(BoardScene, _super);
    function BoardScene() {
        var _this = _super.call(this, {
            key: 'management',
        }) || this;
        _this.level = levels_1.levels[0];
        _this.tripSummary = new tripsummary_1.TripSummary(_this.level.humans[0]);
        return _this;
    }
    BoardScene.prototype.preload = function () {
        this.transitionFader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(2001);
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
            .setWordWrapWidth(400)
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
        if (!this.tripSummary.prepare(location))
            return;
        var message = this.level.goOut(this.tripSummary);
        this.tripFader.input.enabled = false;
        this.locationStage.enable(false);
        this.infoText.setText(message);
        this.add.tween({
            targets: [this.infoText, this.tripFader],
            alpha: { from: 0, to: 1 },
            duration: 1000,
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
            duration: 1000,
            onComplete: function () { return _this.tripFader.input.enabled = true; }
        });
    };
    BoardScene.prototype.refresh = function () {
        var _a, _b;
        this.tripSummary = new tripsummary_1.TripSummary(this.level.humans[0]);
        (_a = this.phone) === null || _a === void 0 ? void 0 : _a.display(this.level.humans[0], 0);
        (_b = this.humanStage) === null || _b === void 0 ? void 0 : _b.redrawLines(this.level);
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
        var centerY = 200;
        var radius = 150;
        var radiusInner = 100;
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
                y: centerY + Math.sin(angle) * radiusInner * 0.9,
            };
        });
        var _loop_1 = function (i) {
            var human = level.humans[i];
            var position = this_1.positions[i];
            var image = scene.add.image(0, 0, 'portrait_big', i)
                .setOrigin(0.5, -0.2)
                .setScale(0.3)
                .setInteractive({ useHandCursor: true })
                .on('pointerover', function () {
                _this.display(human, Number(i));
            });
            var circle = scene.add.ellipse(0, 0, 80, 80, 0xcccccc)
                .setOrigin(0.5, 0.5)
                .setAlpha((Number(i) == 0 ? this_1.CIRCLE_ALPHA_OK : this_1.CIRCLE_ALPHA_BD))
                .setInteractive({ useHandCursor: true })
                .on('pointerover', function () {
                _this.display(human, Number(i));
            });
            var text = scene.add.text(0, 0, "" + human.name, {
                fill: '#e0e0e0',
                fontFamily: 'Roboto',
                fontSize: '18px'
            })
                .setOrigin(0.5, 0.5)
                .setInteractive({ useHandCursor: true })
                .setAlpha(Number(i) == 0 ? this_1.TEXT_ALPHA_OK : this_1.TEXT_ALPHA_BD)
                .on('pointerover', function () {
                _this.display(human, Number(i));
            });
            scene.add.group([image, text, circle]).setXY(position.x, position.y);
            // TBH I have no idea why this is not relative to the group, but whatevs
            text.setPosition(position.x, position.y + 100);
            circle.setPosition(position.x, position.y + 45);
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
    HumanStage.prototype.redrawLines = function (level) {
        var peopleGraph = level.friendshipManager.peopleGraph;
        for (var hi1 in level.humans) {
            var human1 = level.humans[hi1];
            var group = this.scene.add.group()
                .setXY(0, 50)
                .setAlpha(0);
            for (var hi2 in level.humans) {
                var human2 = level.humans[hi2];
                if (hi1 == hi2)
                    continue;
                var tags = peopleGraph.getRelTags([human1.name, human2.name]);
                if (tags.size != 0) {
                    var line = this.scene.add.line(0, 0, this.positionsInner[hi1].x - 5, this.positionsInner[hi1].y + 10, this.positionsInner[hi2].x - 5, this.positionsInner[hi2].y + 10, 0xffffff, 0.1);
                    line.setOrigin(0, 0);
                    group.add(line);
                    var avgX = (this.positionsInner[hi1].x + this.positionsInner[hi2].x) / 2;
                    var avgY = (this.positionsInner[hi1].y + this.positionsInner[hi2].y) / 2;
                    console.log(avgX, avgY);
                    var symbol = this.scene.add.image(avgX, avgY, 'rel_tags')
                        .setFrame(Array.from(tags)[0]);
                    // .setOrigin(0, 0)
                    symbol.setPosition(avgX, avgY);
                    group.add(symbol);
                }
            }
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
        var text = scene.add.text(700, 10, 'Go to:', { fill: 'black', fontFamily: 'Roboto' });
        var _loop_1 = function (i) {
            var location_1 = level.locations[i];
            var img = scene.add.image(709, 53 + Number(i) * 120, 'location_thumb')
                .setFrame(i)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0, 0)
                .setDisplaySize(80, 80)
                .on('pointerdown', function () {
                scene.goOut(location_1);
                scene.tripSummary.goLocation = location_1;
            });
            this_1.allLocationImage.push(img);
            var text_1 = scene.add.text(700, 40 + Number(i) * 120, "" + location_1.name, { fill: 'black', fontFamily: 'Roboto' });
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
var PhoneStage = /** @class */ (function () {
    function PhoneStage(scene) {
        // scene.add.rectangle(0, 0, 240, 500, 0xaaaaaa)
        //     .setOrigin(0, 0)
        this.scene = scene;
        this.portrait = scene.add.image(20, 20, 'portrait_big')
            .setOrigin(0, 0);
        this.text = scene.add.text(10, 250, '', { fill: 'black', fontFamily: 'Roboto' })
            .setWordWrapWidth(230);
    }
    PhoneStage.prototype.display = function (human, index) {
        this.portrait.setFrame(index);
        var tagString = Array.from(human.tags).map(function (x) { return entityTags_1.HumanTagMap[x]; }).join(', ');
        var relString = human.relationships.filter(function (x) { return x.tags.size != 0; }).join('\n\n');
        this.text.setText(human.name + "\n" + tagString + "\n\n" + relString);
    };
    return PhoneStage;
}());
exports.PhoneStage = PhoneStage;


/***/ }),

/***/ "./src/management/tripsummary.ts":
/*!***************************************!*\
  !*** ./src/management/tripsummary.ts ***!
  \***************************************/
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
        if (this.goPeople.length + 1 < this.goLocation.limit.min)
            return false;
        if (this.goPeople.length + 1 > this.goLocation.limit.max)
            return false;
        return true;
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
        this.load.setBaseURL('assets/');
        this.load.image('board_background', 'board_background.png');
        this.load.spritesheet('rel_tags', 'rel_tags.png', { frameWidth: 30, frameHeight: 30 });
        this.load.spritesheet('portrait_big', 'portrait_big.png', { frameWidth: 200, frameHeight: 200 });
        this.load.spritesheet('location_thumb', 'location_thumb.png', { frameWidth: 200, frameHeight: 200 });
        this.fader = this.add.rectangle(0, 0, 800, 500, 0x0)
            .setOrigin(0, 0)
            .setDepth(1001)
            .setAlpha(1);
        this.mockText = this.add.text(100, 100, '', { fill: '#fff', fontFamily: 'Roboto' })
            .setDepth(1001)
            .setAlpha(0);
    };
    LoadingScene.prototype.create = function () {
        this.scene.start('management');
    };
    return LoadingScene;
}(Phaser.Scene));
exports.LoadingScene = LoadingScene;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvZW50aXR5VGFncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9mcmllbmRzaGlwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9oYXRlR3JhcGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvaHVtYW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvbGV2ZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvbGV2ZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3Blb3BsZUdyYXBoLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3NpdHVhdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2JvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2h1bWFuX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L2xvY2F0aW9uX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L3Bob25lX3N0YWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2VtZW50L3RyaXBzdW1tYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9sb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBLElBQVksZUFBaUY7QUFBN0YsV0FBWSxlQUFlO0lBQUcsdURBQUs7SUFBRSwyREFBTztJQUFFLG1FQUFXO0lBQUUseURBQU07SUFBRSx1REFBSztJQUFFLGlEQUFFO0lBQUUsdUVBQWE7QUFBQyxDQUFDLEVBQWpGLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBQWtFO0FBQzdGLElBQUksa0JBQWtCO0lBQ2xCLEdBQUMsZUFBZSxDQUFDLEtBQUssSUFBRyxPQUFPO0lBQ2hDLEdBQUMsZUFBZSxDQUFDLE9BQU8sSUFBRyxTQUFTO0lBQ3BDLEdBQUMsZUFBZSxDQUFDLFdBQVcsSUFBRyxrQkFBa0I7SUFDakQsR0FBQyxlQUFlLENBQUMsTUFBTSxJQUFHLFFBQVE7SUFDbEMsR0FBQyxlQUFlLENBQUMsS0FBSyxJQUFHLE9BQU87SUFDaEMsR0FBQyxlQUFlLENBQUMsRUFBRSxJQUFHLElBQUk7SUFDMUIsR0FBQyxlQUFlLENBQUMsYUFBYSxJQUFHLHdCQUF3QjtPQUM1RDtBQUNRLGdEQUFrQjtBQUUzQixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDaEIsaURBQVM7SUFBRSxpREFBUztJQUFFLHFEQUFXO0lBQUUsaURBQVM7SUFDNUMscURBQVc7SUFBRSxtREFBVTtJQUFFLHFEQUFXO0lBQUUsNkNBQU87SUFBRSx1REFBWTtBQUMvRCxDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7QUFFRCxJQUFJLFdBQVc7SUFDWCxHQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUcsV0FBVztJQUNqQyxHQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUcsV0FBVztJQUNqQyxHQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUcsa0JBQWtCO0lBQzFDLEdBQUMsUUFBUSxDQUFDLFNBQVMsSUFBRyxnQkFBZ0I7SUFDdEMsR0FBQyxRQUFRLENBQUMsV0FBVyxJQUFHLGFBQWE7SUFDckMsR0FBQyxRQUFRLENBQUMsVUFBVSxJQUFHLFlBQVk7SUFDbkMsR0FBQyxRQUFRLENBQUMsV0FBVyxJQUFHLGFBQWE7SUFDckMsR0FBQyxRQUFRLENBQUMsT0FBTyxJQUFHLFNBQVM7SUFDN0IsR0FBQyxRQUFRLENBQUMsWUFBWSxJQUFHLGNBQWM7T0FDMUM7QUFDUSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJwQjtJQUlJLDJCQUFZLFNBQW9CLEVBQUUsV0FBd0I7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztJQUNsQyxDQUFDO0lBRU0sd0NBQVksR0FBbkIsVUFBb0IsSUFBaUI7UUFBckMsaUJBU0M7UUFSRyxJQUFJLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBbUI7UUFFakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUc7WUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUUsaUNBQWlDO1lBQy9GLGNBQWMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0QsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGNBQWM7SUFDekIsQ0FBQztJQUVPLDhDQUFrQixHQUExQixVQUEyQixHQUFjLEVBQUUsSUFBaUI7UUFBNUQsaUJBYUM7UUFaRyxJQUFJLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpFLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ3pCLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQUUsSUFBSSxZQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXhDLENBQXdDLENBQUM7WUFDeEUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBRSxJQUFJLFlBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBM0MsQ0FBMkMsQ0FBQztZQUU3RSxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFFLElBQUksWUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDO1lBQ3hFLEdBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQUUsSUFBSSxZQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTNDLENBQTJDLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLGlCQUFpQjtJQUU1QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDO0FBbENZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDQzlCO0lBR0ksbUJBQVksV0FBNkI7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO0lBQ2xDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFOWSw4QkFBUztBQWF0QjtJQVNJLHlCQUNJLFdBQW1CLEVBQ25CLFlBQWtELEVBQ2xELGNBQW9ELEVBQ3BELFlBQTJDLEVBQzNDLGNBQTZDO1FBRTdDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksYUFBWixZQUFZLGNBQVosWUFBWSxHQUFJLElBQUksS0FBSyxFQUFFO1FBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxhQUFkLGNBQWMsY0FBZCxjQUFjLEdBQUksSUFBSSxLQUFLLEVBQUU7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLGFBQVosWUFBWSxjQUFaLFlBQVksR0FBSSxJQUFJLEtBQUssRUFBRTtRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsYUFBZCxjQUFjLGNBQWQsY0FBYyxHQUFJLElBQUksS0FBSyxFQUFFO0lBQ3ZELENBQUM7SUFDTCxzQkFBQztBQUFELENBQUM7QUF0QlksMENBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ2I1QjtJQU9JLGVBQVksSUFBZTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBRTtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0lBQ3pCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQztBQVpZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUNGbEIsNkZBQXlEO0FBRXpELCtHQUF1RDtBQUN2RCwwRkFBeUY7QUFFekY7SUFNSSxlQUNJLE1BQW9CLEVBQ3BCLFNBQTBCLEVBQzFCLGFBQWtDLEVBQ2xDLFdBQXlDLEVBQ3pDLFNBQW9CO1FBRXBCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUUxRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBRXRFLCtCQUErQjtRQUMvQixJQUFJLENBQUMscUNBQXFDLEVBQUU7SUFFaEQsQ0FBQztJQUVPLHFEQUFxQyxHQUE3QztRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBQztZQUNqQixDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNoRixDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbEUsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVNLHFCQUFLLEdBQVosVUFBYSxXQUF3Qjs7UUFDakMsbUNBQW1DO1FBQ25DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTlELDZCQUE2QjtRQUV6Qiw2Q0FBeUUsRUFBeEUsb0NBQWUsRUFBRSxvQ0FBdUQ7UUFDN0UsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxlQUFlLENBQUM7UUFDMUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFNO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFdBQVc7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbEMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxpQ0FBaUM7UUFFdkMsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxxQ0FBcUMsRUFBRTtRQUU1QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDO1FBRWhFLHNCQUFzQjtRQUN0QixJQUFJLFVBQVUsR0FBVyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVksSUFBSyxZQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUYsSUFBSSxhQUFhLEdBQUcsNEJBQW1CLFdBQVcsQ0FBQyxVQUFVLDBDQUFFLElBQUksZUFBUyxVQUFVLFdBQU0sU0FBVztRQUV2RyxPQUFPLGFBQWE7SUFDeEIsQ0FBQztJQUVPLGlDQUFpQixHQUF6QixVQUNJLGVBQThFLEVBQzlFLGVBQXNEO1FBRXRELElBQUksT0FBTyxHQUFHLEtBQUssRUFBVTtRQUM3QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksc0NBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RFLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLHNDQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RSxPQUFPLENBQUMsSUFBSSxDQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBUSxVQUFVLHVCQUFrQixVQUFVLFVBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7UUFDN0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxPQUFPLEdBQUcsS0FBSyxFQUFVO1FBQzdCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSwrQkFBVyxDQUFDLENBQUMsQ0FBQyxFQUFkLENBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDL0QsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksK0JBQVcsQ0FBQyxDQUFDLENBQUMsRUFBZCxDQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQy9ELE9BQU8sQ0FBQyxJQUFJLENBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBVyxVQUFVLHVCQUFrQixVQUFVLE1BQUcsQ0FBQztRQUNsRixDQUFDLENBQUM7UUFDRixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUV6QyxPQUFPLFdBQVc7SUFDdEIsQ0FBQztJQUVPLHNDQUFzQixHQUE5QixVQUErQixPQUEwQjtRQUNyRCwyREFBMkQ7UUFDM0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQTRFO1FBQ3pHLElBQUksZUFBZSxHQUFHLElBQUksR0FBRyxFQUFpRDtRQUU5RSxJQUFJLFFBQVEsR0FBRyxVQUFlLEdBQU0sRUFBRSxLQUFRLEVBQUUsVUFBd0MsRUFBRSx1QkFBNEI7O1lBQ2xILElBQUksV0FBVyxTQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1DQUFJLENBQUMsSUFBSSxLQUFLLEVBQUssRUFBRSxJQUFJLEtBQUssRUFBSyxDQUFDO1lBQ3pFLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDaEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQUUsSUFBSSxlQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7WUFDN0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsWUFBRSxJQUFJLGVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQztZQUMvRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFFLElBQUksZUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQUUsSUFBSSxlQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7UUFDbkYsQ0FBQyxDQUFDO1FBRUYsT0FBTyxFQUFFLGVBQWUsbUJBQUUsZUFBZSxtQkFBRTtJQUMvQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUF2R1ksc0JBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ1JsQix1RkFBdUM7QUFDdkMsMkVBQStCO0FBQy9CLDZGQUE0QztBQUM1QywyRUFBMEM7QUFDMUMsMEZBQXdEO0FBQ3hELHNHQUE4RjtBQUVuRixjQUFNLEdBQWlCLEVBQUU7QUFFcEMsSUFBSSxTQUFTLEdBQUc7SUFDWixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxFQUFDO0lBQ3hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsRUFBQztJQUN6QyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUM7Q0FDM0M7QUFFRCx1Q0FBdUM7QUFFdkMsU0FBUyxrQkFBa0IsQ0FBQyxNQUE4QixFQUFFLElBQXVCO0lBQy9FLElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUNyQixpQkFBQyxFQUFFLGFBQUMsQ0FBVTtJQUVyQixPQUFPO1FBQ0gsSUFBSSwwQkFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztRQUNoQyxJQUFJLDBCQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQ25DO0FBQ0wsQ0FBQztBQUVELFNBQVMsdUJBQXVCLENBQUMsYUFBaUU7SUFDOUYsSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUVaLEtBQWdCLFVBQWEsRUFBYiwrQkFBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFO1FBQTFCLElBQU0sQ0FBQztRQUNSLElBQUksQ0FBQyxZQUFZLDBCQUFZLEVBQUU7WUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDZDthQUFNO1lBQ0ksYUFBRSxFQUFFLFNBQUUsQ0FBSztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDbkI7S0FDSjtJQUVELE9BQU8sR0FBRztBQUNkLENBQUM7QUFFRCxjQUFNLENBQUMsSUFBSSxDQUNQLElBQUksYUFBSyxDQUNMO0lBQ0ksSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2hCLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQixJQUFJLGFBQUssQ0FBQyxVQUFVLENBQUM7SUFDckIsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDO0lBQ2xCLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQztJQUNoQixJQUFJLGFBQUssQ0FBQyxNQUFNLENBQUM7Q0FDcEIsRUFDRCxTQUFTLEVBQ1QsdUJBQXVCLENBQUM7SUFDcEIsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyw0QkFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pFLGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RCxJQUFJLDBCQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyw0QkFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEUsSUFBSSwwQkFBWSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUMsNEJBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9ELGtCQUFrQixDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsNEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3RCxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLDRCQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDcEUsQ0FBQyxFQUNGO0lBQ0ksQ0FBQyxVQUFVLEVBQUUscUJBQVEsQ0FBQyxXQUFXLENBQUM7SUFDbEMsQ0FBQyxPQUFPLEVBQUUscUJBQVEsQ0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQyxLQUFLLEVBQUUscUJBQVEsQ0FBQyxTQUFTLENBQUM7SUFDM0IsQ0FBQyxLQUFLLEVBQUUscUJBQVEsQ0FBQyxXQUFXLENBQUM7Q0FDaEMsRUFFRCxJQUFJLHFCQUFTLENBQUM7SUFDVixJQUFJLHNDQUFxQixFQUFFO0lBQzNCLElBQUksNEJBQVcsRUFBRTtDQUNwQixDQUFDLENBQ0wsQ0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDekVELDBGQUE0RTtBQUs1RTtJQU1JLHFCQUFZLE1BQW9CLEVBQUUsb0JBQThDLEVBQUUsV0FBeUM7UUFBM0gsaUJBcUJDO1FBckJXLG9DQUFvQjtRQUFFLGdFQUE4QztRQUM1RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7UUFFcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFDO1lBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFFO2dCQUNiLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFO29CQUNuQixLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQW1CLENBQUM7aUJBQ2pFO1lBQ0wsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUYsV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQkFBUztZQUNwQix3QkFBSyxFQUFFLG1CQUFJLENBQWE7WUFDN0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQy9CLENBQUMsQ0FBQztRQUVGLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQzVCLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixNQUFpQixFQUFFLEdBQWE7O1FBQzdDLElBQUksS0FBSyxTQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQ0FBSSxJQUFJLEdBQUcsRUFBWTtRQUM5RCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE1BQWlCLEVBQUUsR0FBYTs7UUFDaEQsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxHQUFHLG9DQUFLLEtBQUs7SUFDNUQsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLE1BQWlCOztRQUMvQixhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxtQ0FBSSxJQUFJLEdBQUcsRUFBRTtJQUNuRCxDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsTUFBaUIsRUFBRSxJQUEwQjtRQUMzRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLE1BQWlCO1FBQy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUU7SUFDL0MsQ0FBQztJQUVNLCtCQUFTLEdBQWhCLFVBQWlCLE1BQWlCLEVBQUUsR0FBb0I7O1FBQ3BELFVBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDBDQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUM7SUFDckMsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLE1BQWlCLEVBQUUsR0FBb0I7O1FBQ3ZELG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLDBDQUFFLE1BQU0sQ0FBQyxHQUFHLG9DQUFLLEtBQUs7SUFDeEQsQ0FBQztJQUVNLHlDQUFtQixHQUExQixVQUEyQixNQUFpQjtRQUE1QyxpQkFVQztRQVRHLElBQUksTUFBTSxHQUFHLElBQUksS0FBSztRQUV0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDbkMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUQ7UUFDTCxDQUFDLENBQUM7UUFFRixPQUFPLE1BQU07SUFDakIsQ0FBQztJQUVNLHdDQUFrQixHQUF6QixVQUEwQixNQUFpQjtRQUEzQyxpQkFVQztRQVRHLElBQUksTUFBTSxHQUFHLElBQUksS0FBSztRQUV0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDbkMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDNUQ7UUFDTCxDQUFDLENBQUM7UUFFRixPQUFPLE1BQU07SUFDakIsQ0FBQztJQUVNLDZDQUF1QixHQUE5QixVQUErQixDQUFZLEVBQUUsQ0FBWTs7UUFDckQsT0FBTyxLQUFLLENBQUMsSUFBSSxPQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFJLEVBQUUsQ0FBQztJQUM5RSxDQUFDO0lBRU0sbURBQTZCLEdBQXBDLFVBQXFDLENBQVksRUFBRSxDQUFZO1FBQzNELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLCtCQUFTLEdBQWpCLFVBQWtCLGFBQXdCO1FBQ2pDLHdCQUFDLEVBQUUsb0JBQUMsQ0FBaUI7UUFDMUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTNELE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDaEMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQVk7UUFDNUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUVqQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBN0dZLGtDQUFXO0FBK0d4QjtJQUlJLHNCQUFZLE1BQWlCLEVBQUUsSUFBMkI7UUFDdEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFKLElBQUksY0FBSixJQUFJLEdBQUksSUFBSSxHQUFHLEVBQW1CO0lBQ2xELENBQUM7SUFFTSwrQkFBUSxHQUFmO1FBQ0ksT0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxzQ0FBa0IsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUc7SUFDckcsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQVpZLG9DQUFZO0FBZXpCLFNBQWdCLFlBQVksQ0FBSSxFQUFPLEVBQUUsRUFBTztJQUM1QyxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUs7SUFFbkIsS0FBZ0IsVUFBRSxFQUFGLFNBQUUsRUFBRixnQkFBRSxFQUFGLElBQUUsRUFBRTtRQUFmLElBQU0sQ0FBQztRQUNSLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNkO0tBQ0o7SUFFRCxPQUFPLEdBQUc7QUFDZCxDQUFDO0FBVkQsb0NBVUM7Ozs7Ozs7Ozs7Ozs7OztBQzdJRCx1RkFBd0Q7QUFJeEQsMEZBQXdEO0FBRXhEO0lBQUE7SUFnQkEsQ0FBQztJQWZpQiwwQkFBVyxHQUF6QixVQUEwQixNQUFpQjtRQUNoQyxpQkFBQyxFQUFFLGFBQUMsQ0FBVTtRQUVyQixPQUFPLElBQUksMkJBQWUsQ0FDbkIsQ0FBQyxhQUFRLENBQUMscUJBQWtCLEVBQy9CO1lBQ0ksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSw0QkFBZSxDQUFDLEtBQUssQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLDRCQUFlLENBQUMsS0FBSyxDQUFDO1NBQ2xDLEVBQ0Q7WUFDSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLDRCQUFlLENBQUMsS0FBSyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsNEJBQWUsQ0FBQyxLQUFLLENBQUM7U0FDbEMsQ0FDSjtJQUNMLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUM7QUFoQlksd0NBQWM7QUFrQjNCO0lBT0kseUJBQ0ksZUFBaUMsRUFDakMsZUFBaUMsRUFDakMsZ0JBQWlDLEVBQ2pDLE1BQThCO1FBRzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWU7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDeEIsQ0FBQztJQUVNLDhDQUFvQixHQUEzQixVQUE0QixJQUFpQixFQUFFLENBQWM7UUFDekQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtJQUM5RCxDQUFDO0lBRU0sc0NBQVksR0FBbkIsVUFBb0IsSUFBaUI7UUFDakMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDO1FBRWpELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsWUFBRSxJQUFJLG1CQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6QixDQUF5QixDQUFDO1lBQzlELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFlBQUUsSUFBSSxRQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQTFCLENBQTBCLENBQUM7WUFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFHLFlBQUksVUFBRyxDQUFDLElBQUksV0FBSSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxJQUFJLEtBQUM7SUFDNUUsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQztBQS9CWSwwQ0FBZTtBQWlDNUI7SUFBQTtJQXVCQSxDQUFDO0lBdEJVLG9EQUFvQixHQUEzQixVQUE0QixJQUFpQixFQUFFLFlBQXlCO1FBQ3BFLElBQUksSUFBSSxDQUFDLFVBQVcsQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxLQUFLLEVBQUU7U0FDckI7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBTTtZQUN4QixJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDckQsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLHFCQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLElBQUksTUFBTSxFQUFYLENBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBVztvQkFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLDJCQUFlLENBQzVCLDJCQUEyQixFQUMzQjt3QkFDSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsNEJBQWUsQ0FBQyxPQUFPLENBQUM7cUJBQzdELENBQ0osQ0FBQztnQkFDTixDQUFDLENBQUM7YUFFTDtRQUNMLENBQUMsQ0FBQztRQUNGLE9BQU8sT0FBTztJQUNsQixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDO0FBdkJZLHNEQUFxQjtBQXlCbEM7SUFBQTtJQTZCQSxDQUFDO0lBNUJVLDBDQUFvQixHQUEzQixVQUE0QixJQUFpQixFQUFFLFlBQXlCO1FBQ3BFLDJDQUEyQztRQUMzQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUV6QixJQUFJLFVBQVUsR0FBZ0MsSUFBSSxHQUFHLEVBQUU7Z0NBRTVDLE1BQU07WUFDYixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDckMsV0FBQyxJQUFJLG1CQUFZLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUFlLENBQUMsS0FBSyxDQUFDLEVBQS9GLENBQStGLENBQ3ZHLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQztZQUNsQixVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDOztRQUovQyxLQUFxQixVQUFhLEVBQWIsU0FBSSxDQUFDLFFBQVEsRUFBYixjQUFhLEVBQWIsSUFBYTtZQUE3QixJQUFNLE1BQU07b0JBQU4sTUFBTTtTQUtoQjtRQUVELEtBQXFCLFVBQWEsRUFBYixTQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhLEVBQUU7WUFBL0IsSUFBTSxNQUFNO1lBQ2IsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFO1lBQzVDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLG9DQUFvQztnQkFDcEMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQzdELE9BQU8sQ0FBQyxJQUFJLENBQ1IsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDbkQ7aUJBQ0o7YUFDSjtTQUNKO1FBRUQsT0FBTyxPQUFPO0lBQ2xCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUE3Qlksa0NBQVc7QUErQnhCO0lBYUksaUJBQ0ksZUFBaUMsRUFBRSxlQUFpQyxFQUNwRSxnQkFBaUMsRUFDakMsVUFBd0MsRUFBRSxVQUF3QyxFQUNsRixVQUErQyxFQUFFLFVBQStDLEVBQ2hHLE1BQThCO1FBRzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZTtRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWU7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtRQUV4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO0lBQ3hCLENBQUM7SUFFTSxzQ0FBb0IsR0FBM0IsVUFBNEIsSUFBaUIsRUFBRSxZQUF5QjtRQUNwRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtJQUM1RSxDQUFDO0lBRU0sOEJBQVksR0FBbkIsVUFBb0IsSUFBaUIsRUFBRSxZQUF5QjtRQUM1RCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFFLElBQUksbUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQXpCLENBQXlCLENBQUM7WUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBRSxJQUFJLFFBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQztZQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQUcsWUFBSSxVQUFHLENBQUMsSUFBSSxXQUFJLElBQUksQ0FBQyxVQUFVLDBDQUFFLElBQUksS0FBQztZQUVwRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFFLElBQUksbUJBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQUUsSUFBSSxRQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDO1lBRXZFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQUUsSUFBSSxtQkFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXpDLENBQXlDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBRSxJQUFJLFFBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTFDLENBQTBDLENBQUM7SUFDL0UsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDO0FBbERZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNsSHBCLHNGQUFnQztBQUNoQyx5RkFBK0M7QUFDL0MscUZBQThDO0FBRTlDLElBQU0sVUFBVSxHQUFpQztJQUMvQyxLQUFLLEVBQUUseUJBQXlCO0lBRWhDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtJQUVqQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO0tBQ1o7SUFFRCxNQUFNLEVBQUUsU0FBUztJQUNqQixlQUFlLEVBQUUsTUFBTTtJQUV2QixLQUFLLEVBQUcsQ0FBQyxzQkFBWSxFQUFFLGtCQUFVLENBQUM7Q0FDbkMsQ0FBQztBQUVXLFlBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmhELHVGQUF5QztBQUN6QyxnR0FBMkM7QUFDM0MsZ0dBQTBDO0FBQzFDLGdHQUEwQztBQUMxQyx5R0FBZ0Q7QUFJaEQ7SUFBZ0MsOEJBQVk7SUFXeEM7UUFBQSxZQUNJLGtCQUFNO1lBQ0YsR0FBRyxFQUFFLFlBQVk7U0FDcEIsQ0FBQyxTQUdMO1FBRkcsS0FBSSxDQUFDLEtBQUssR0FBRyxlQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOztJQUM1RCxDQUFDO0lBRU0sNEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzthQUN6RCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUVNLDJCQUFNLEdBQWI7UUFBQSxpQkEwQkM7UUF6QkcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsQ0FBQzthQUNuQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDbkQsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZixRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNYLGNBQWMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN2QyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQU0sWUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNoRyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNYLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFDbEIsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQ3JCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBRXhCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw4QkFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx3QkFBVSxDQUFDLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNYLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZTtZQUM3QixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekIsUUFBUSxFQUFFLEdBQUc7U0FDaEIsQ0FBQztJQUNOLENBQUM7SUFFTSwwQkFBSyxHQUFaLFVBQWEsUUFBa0I7UUFBL0IsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkMsT0FBTTtRQUNWLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDckMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsS0FBSSxDQUFDLFNBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUk7Z0JBQ3BDLEtBQUksQ0FBQyxhQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEMsS0FBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFTywyQkFBTSxHQUFkO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsVUFBVyxDQUFDLFlBQVksRUFBRTtRQUMvQixJQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNYLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN4QyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDekIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsY0FBTSxZQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUFwQyxDQUFvQztTQUN6RCxDQUFDO0lBQ04sQ0FBQztJQUVPLDRCQUFPLEdBQWY7O1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsVUFBSSxDQUFDLEtBQUssMENBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQztRQUM1QyxVQUFJLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBQztJQUM1QyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBeEYrQixNQUFNLENBQUMsS0FBSyxHQXdGM0M7QUF4RlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ0Z2QjtJQVdJLG9CQUFvQixLQUFpQixFQUFFLEtBQVk7UUFBbkQsaUJBaUdDO1FBakdtQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBVjdCLG1CQUFjLEdBQW1DLEVBQUU7UUFDbkQscUJBQWdCLEdBQXNDLEVBQUU7UUFDeEQsbUJBQWMsR0FBb0MsRUFBRTtRQUNwRCxrQkFBYSxHQUFHLENBQUM7UUFDakIsa0JBQWEsR0FBRyxHQUFHO1FBQ25CLG9CQUFlLEdBQUcsR0FBRztRQUNyQixvQkFBZSxHQUFHLENBQUM7UUFLdkIsSUFBTSxPQUFPLEdBQUcsR0FBRztRQUNuQixJQUFNLE9BQU8sR0FBRyxHQUFHO1FBQ25CLElBQU0sTUFBTSxHQUFHLEdBQUc7UUFDbEIsSUFBTSxXQUFXLEdBQUcsR0FBRztRQUV2QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQVM7WUFDM0MsSUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQzNELE9BQU87Z0JBQ0gsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU07Z0JBQ3JDLENBQUMsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNO2FBQ3hDO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFTO1lBQ2hELElBQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTtZQUMzRCxPQUFPO2dCQUNILENBQUMsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXO2dCQUMxQyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxHQUFHLEdBQUc7YUFDbkQ7UUFDTCxDQUFDLENBQUM7Z0NBRU8sQ0FBQztZQUNOLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQU0sUUFBUSxHQUFHLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7aUJBQy9DLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7aUJBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUM7aUJBQ2IsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUN2QyxFQUFFLENBQUMsYUFBYSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDLENBQUM7WUFFTixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDO2lCQUNqRCxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztpQkFDbkIsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQUssZUFBZSxDQUFDLENBQUM7aUJBQ3hFLGNBQWMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDdkMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDZixLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDO1lBRU4sSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFHLEtBQUssQ0FBQyxJQUFNLEVBQUU7Z0JBQzdDLElBQUksRUFBRSxTQUFTO2dCQUNmLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixRQUFRLEVBQUUsTUFBTTthQUNuQixDQUFDO2lCQUNHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO2lCQUNuQixjQUFjLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBSyxhQUFhLENBQUM7aUJBQ2xFLEVBQUUsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUVOLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFcEUsd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFL0MsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQixJQUFNLE9BQU8sR0FBRztvQkFDWixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN2QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs0QkFDYixPQUFPLEVBQUUsSUFBSTs0QkFDYixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRTs0QkFDM0QsUUFBUSxFQUFFLEdBQUc7eUJBQ2hCLENBQUM7d0JBQ0YsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7NEJBQ2IsT0FBTyxFQUFFLE1BQU07NEJBQ2YsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUU7NEJBQy9ELFFBQVEsRUFBRSxHQUFHO3lCQUNoQixDQUFDO3FCQUNMO3lCQUFNO3dCQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzRCQUNiLE9BQU8sRUFBRSxJQUFJOzRCQUNiLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFOzRCQUMzRCxRQUFRLEVBQUUsR0FBRzt5QkFDaEIsQ0FBQzt3QkFDRixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs0QkFDYixPQUFPLEVBQUUsTUFBTTs0QkFDZixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGVBQWUsRUFBRTs0QkFDL0QsUUFBUSxFQUFFLEdBQUc7eUJBQ2hCLENBQUM7cUJBQ0w7Z0JBQ0wsQ0FBQztnQkFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQztnQkFDakMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2FBQ25DO1lBRUQsT0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixPQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7OztRQXZFdEMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTTtvQkFBakIsQ0FBQztTQXdFVDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFTSxpQ0FBWSxHQUFuQjtRQUNJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUMxRDtTQUNKO0lBQ0wsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxLQUFZLEVBQUUsS0FBYTtRQUN0QyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDL0IsNERBQTREO1lBQzVELDhDQUE4QztZQUM5QyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLEtBQWtCLFVBQTBDLEVBQTFDLFNBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUExQyxjQUEwQyxFQUExQyxJQUEwQyxFQUFFO29CQUF6RCxJQUFJLEtBQUs7b0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO3dCQUNsQixPQUFPLEVBQUUsS0FBSzt3QkFDZCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUcsS0FBaUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTt3QkFDaEUsUUFBUSxFQUFFLEdBQUc7cUJBQ2hCLENBQUM7aUJBQ0w7YUFDSjtpQkFBTTtnQkFDSCxLQUFrQixVQUEwQyxFQUExQyxTQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBMUMsY0FBMEMsRUFBMUMsSUFBMEMsRUFBRTtvQkFBekQsSUFBSSxLQUFLO29CQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLEtBQUs7d0JBQ2QsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFHLEtBQWlDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ2hFLFFBQVEsRUFBRSxHQUFHO3FCQUNoQixDQUFDO2lCQUNMO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxnQ0FBVyxHQUFsQixVQUFtQixLQUFZO1FBQzNCLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO1FBQ3JELEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7aUJBQzdCLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNaLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDOUIsSUFBSSxHQUFHLElBQUksR0FBRztvQkFDVixTQUFRO2dCQUNaLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQy9ELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQy9ELFFBQVEsRUFBRSxHQUFHLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDcEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7b0JBRWYsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3hFLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7b0JBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQzt5QkFDckQsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pDLG1CQUFtQjtvQkFDbkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO29CQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztpQkFDcEI7YUFDSjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNsQztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFqTFksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QjtJQUdJLHVCQUFZLEtBQWlCLEVBQUUsS0FBWTtRQUZuQyxxQkFBZ0IsR0FBb0MsRUFBRTtRQUcxRCxrREFBa0Q7UUFDbEQsdUJBQXVCO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0NBRzVFLENBQUM7WUFDTixJQUFJLFVBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsZ0JBQWdCLENBQUM7aUJBQ2pFLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ1gsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUN2QyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDZixjQUFjLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztpQkFDdEIsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDZixLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVEsQ0FBQztnQkFDckIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBUTtZQUMzQyxDQUFDLENBQUM7WUFDTixPQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDL0IsSUFBSSxNQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUcsVUFBUSxDQUFDLElBQU0sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDOzs7UUFackgsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsU0FBUztvQkFBcEIsQ0FBQztTQWFUO0lBQ0wsQ0FBQztJQUVNLDhCQUFNLEdBQWIsVUFBYyxLQUFjO1FBQ3hCLEtBQWdCLFVBQXFCLEVBQXJCLFNBQUksQ0FBQyxnQkFBZ0IsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFsQyxJQUFJLEdBQUc7WUFDUixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLO1NBQzVCO0lBQ0wsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQTlCWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7O0FDRjFCLG1HQUFtRDtBQUVuRDtJQUlJLG9CQUFvQixLQUFtQjtRQUNuQyxnREFBZ0Q7UUFDaEQsdUJBQXVCO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUluQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDO2FBQ2xELFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUMzRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBZSxLQUFZLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLCtCQUFXLENBQUMsQ0FBQyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1RSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBSSxLQUFLLENBQUMsSUFBSSxVQUFLLFNBQVMsWUFBTyxTQUFXLENBQUM7SUFDcEUsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQXJCWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0FDQXZCO0lBSUkscUJBQVksWUFBbUI7UUFIeEIsYUFBUSxHQUFpQixJQUFJLEtBQUssRUFBUztRQUk5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDcEMsQ0FBQztJQUVNLG9DQUFjLEdBQXJCLFVBQXNCLEtBQVk7UUFDOUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksRUFBckIsQ0FBcUIsQ0FBQztRQUNoRSxPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07SUFDM0MsQ0FBQztJQUVNLGtDQUFZLEdBQW5CLFVBQW9CLEtBQVk7UUFDNUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLFVBQVU7WUFDVixPQUFPLEtBQUs7U0FDZjthQUFNO1lBQ0gsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUk7U0FDZDtJQUNMLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDbkQsT0FBTyxLQUFLO1FBQ2hCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUc7WUFDbkQsT0FBTyxLQUFLO1FBQ2hCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUFqQ1ksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeEI7SUFBa0MsZ0NBQVk7SUFJMUM7ZUFDSSxrQkFBTTtZQUNGLEdBQUcsRUFBRSxTQUFTO1NBQ2pCLENBQUM7SUFDTixDQUFDO0lBRU0sOEJBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxzQkFBc0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNwRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7YUFDL0MsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZixRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUM7YUFDOUUsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNkLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFcEIsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxDQTdCaUMsTUFBTSxDQUFDLEtBQUssR0E2QjdDO0FBN0JZLG9DQUFZIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBlbnVtIFJlbGF0aW9uc2hpcFRhZyB7IGNydXNoLCBkaXNsaWtlLCBmcmllbmRfbGlrZSwgZnJpZW5kLCBsb3ZlciwgZXgsIHBvbGl0aWNhbF9kaXMgfVxubGV0IFJlbGF0aW9uc2hpcFRhZ01hcDogeyBba2V5IGluIFJlbGF0aW9uc2hpcFRhZ106IHN0cmluZyB9ID0ge1xuICAgIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hdOiAnY3J1c2gnLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcuZGlzbGlrZV06ICdkaXNsaWtlJyxcbiAgICBbUmVsYXRpb25zaGlwVGFnLmZyaWVuZF9saWtlXTogJ2xpa2UgYXMgYSBmcmllbmQnLFxuICAgIFtSZWxhdGlvbnNoaXBUYWcuZnJpZW5kXTogJ2ZyaWVuZCcsXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5sb3Zlcl06ICdsb3ZlcicsXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5leF06ICdleCcsXG4gICAgW1JlbGF0aW9uc2hpcFRhZy5wb2xpdGljYWxfZGlzXTogJ3BvbGl0aWNhbCBkaXNhZ3JlZW1lbnQnLFxufVxuZXhwb3J0IHsgUmVsYXRpb25zaGlwVGFnTWFwIH1cblxuZXhwb3J0IGVudW0gSHVtYW5UYWcge1xuICAgIGludHJvdmVydCwgZXh0cm92ZXJ0LCBhbmdyeV9kcnVuaywgc2FkX2RydW5rLFxuICAgIGdvb2RfYm93bGVyLCBiYWRfYm93bGVyLCBwcm9taXNjdW91cywgamVhbG91cywgZGlzYWdyZWVhYmxlXG59XG5cbmxldCBIdW1hblRhZ01hcDogeyBba2V5IGluIEh1bWFuVGFnXTogc3RyaW5nIH0gPSB7XG4gICAgW0h1bWFuVGFnLmludHJvdmVydF06ICdpbnRyb3ZlcnQnLFxuICAgIFtIdW1hblRhZy5leHRyb3ZlcnRdOiAnZXh0cm92ZXJ0JyxcbiAgICBbSHVtYW5UYWcuYW5ncnlfZHJ1bmtdOiAnYW5ncnkgd2hlbiBkcnVuaycsXG4gICAgW0h1bWFuVGFnLnNhZF9kcnVua106ICdzYWQgd2hlbiBkcnVuaycsXG4gICAgW0h1bWFuVGFnLmdvb2RfYm93bGVyXTogJ2dvb2QgYm93bGVyJyxcbiAgICBbSHVtYW5UYWcuYmFkX2Jvd2xlcl06ICdiYWQgYm93bGVyJyxcbiAgICBbSHVtYW5UYWcucHJvbWlzY3VvdXNdOiAncHJvbWlzY3VvdXMnLFxuICAgIFtIdW1hblRhZy5qZWFsb3VzXTogJ2plYWxvdXMnLFxuICAgIFtIdW1hblRhZy5kaXNhZ3JlZWFibGVdOiAnZGlzYWdyZWVhYmxlJ1xufVxuZXhwb3J0IHsgSHVtYW5UYWdNYXAgfVxuIiwiaW1wb3J0IHsgSGF0ZUdyYXBoLCBTaXR1YXRpb24sIFNpdHVhdGlvbkVmZmVjdCB9IGZyb20gXCIuL2hhdGVHcmFwaFwiO1xuaW1wb3J0IHsgUGVvcGxlR3JhcGggfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiO1xuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi4vbWFuYWdlbWVudC90cmlwc3VtbWFyeVwiO1xuXG5leHBvcnQgY2xhc3MgRnJpZW5kc2hpcE1hbmFnZXIge1xuICAgIHB1YmxpYyBoYXRlR3JhcGg6IEhhdGVHcmFwaFxuICAgIHB1YmxpYyBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGhcblxuICAgIGNvbnN0cnVjdG9yKGhhdGVHcmFwaDogSGF0ZUdyYXBoLCBwZW9wbGVHcmFwaDogUGVvcGxlR3JhcGgpIHtcbiAgICAgICAgdGhpcy5oYXRlR3JhcGggPSBoYXRlR3JhcGhcbiAgICAgICAgdGhpcy5wZW9wbGVHcmFwaCA9IHBlb3BsZUdyYXBoXG4gICAgfVxuXG4gICAgcHVibGljIGFwcGx5TWVldGluZyh0cmlwOiBUcmlwU3VtbWFyeSk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBsZXQgYXBwbGllZEVmZmVjdHMgPSBuZXcgQXJyYXk8U2l0dWF0aW9uRWZmZWN0PigpXG5cbiAgICAgICAgdGhpcy5oYXRlR3JhcGguY29uc3RyYWludHMuZm9yRWFjaChjb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgYXBwRWZmRm9yQ3VyckNvbiA9IHRoaXMudHJ5QXBwbHlDb25zdHJhaW50KGNvbiwgdHJpcCk7ICAvLyBXZSBrbm93IGl0J3MgZ29ubmEgYmUgYXNzaWduZWRcbiAgICAgICAgICAgIGFwcGxpZWRFZmZlY3RzID0gYXBwbGllZEVmZmVjdHMuY29uY2F0KGFwcEVmZkZvckN1cnJDb24pO1xuXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXBwbGllZEVmZmVjdHNcbiAgICB9XG5cbiAgICBwcml2YXRlIHRyeUFwcGx5Q29uc3RyYWludChjb246IFNpdHVhdGlvbiwgdHJpcDogVHJpcFN1bW1hcnkpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgbGV0IGFwcGxpY2FibGVFZmZlY3RzID0gY29uLkdldEFwcGxpY2FibGVFZmZlY3RzKHRyaXAsIHRoaXMucGVvcGxlR3JhcGgpO1xuXG4gICAgICAgIGFwcGxpY2FibGVFZmZlY3RzLmZvckVhY2goZWZmID0+IHtcbiAgICAgICAgICAgIGVmZi5hZGRlZFJlbFRhZ3MuZm9yRWFjaChhdCA9PiB0aGlzLnBlb3BsZUdyYXBoLmFkZFJlbFRhZyhhdFswXSwgYXRbMV0pKVxuICAgICAgICAgICAgZWZmLnJlbW92ZWRSZWxUYWdzLmZvckVhY2goYXQgPT4gdGhpcy5wZW9wbGVHcmFwaC5yZW1vdmVSZWxUYWcoYXRbMF0sIGF0WzFdKSlcblxuICAgICAgICAgICAgZWZmLmFkZGVkSHVtVGFncy5mb3JFYWNoKGFoID0+IHRoaXMucGVvcGxlR3JhcGguYWRkSHVtVGFnKGFoWzBdLCBhaFsxXSkpXG4gICAgICAgICAgICBlZmYucmVtb3ZlZEh1bVRhZ3MuZm9yRWFjaChyaCA9PiB0aGlzLnBlb3BsZUdyYXBoLnJlbW92ZUh1bVRhZyhyaFswXSwgcmhbMV0pKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXBwbGljYWJsZUVmZmVjdHNcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IFRyaXBTdW1tYXJ5IH0gZnJvbSBcIi4uL21hbmFnZW1lbnQvdHJpcHN1bW1hcnlcIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgQ291cGxlS2V5LCBQZW9wbGVHcmFwaCB9IGZyb20gXCIuL3Blb3BsZUdyYXBoXCJcbmltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuXCJcblxuZXhwb3J0IGNsYXNzIEhhdGVHcmFwaCB7XG4gICAgcHVibGljIGNvbnN0cmFpbnRzOiBBcnJheTxTaXR1YXRpb24+XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25zdHJhaW50czogQXJyYXk8U2l0dWF0aW9uPikge1xuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gY29uc3RyYWludHNcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2l0dWF0aW9uIHtcbiAgICBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD5cbn1cblxuXG5leHBvcnQgY2xhc3MgU2l0dWF0aW9uRWZmZWN0IHtcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG5cbiAgICBhZGRlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+XG4gICAgcmVtb3ZlZFJlbFRhZ3M6IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+XG5cbiAgICBhZGRlZEh1bVRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT5cbiAgICByZW1vdmVkSHVtVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgICAgIGFkZGVkUmVsVGFncz86IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+LFxuICAgICAgICByZW1vdmVkUmVsVGFncz86IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+LFxuICAgICAgICBhZGRlZEh1bVRhZ3M/OiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+LFxuICAgICAgICByZW1vdmVkSHVtVGFncz86IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmFkZGVkUmVsVGFncyA9IGFkZGVkUmVsVGFncyA/PyBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnJlbW92ZWRSZWxUYWdzID0gcmVtb3ZlZFJlbFRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5hZGRlZEh1bVRhZ3MgPSBhZGRlZEh1bVRhZ3MgPz8gbmV3IEFycmF5KClcbiAgICAgICAgdGhpcy5yZW1vdmVkSHVtVGFncyA9IHJlbW92ZWRIdW1UYWdzID8/IG5ldyBBcnJheSgpXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiO1xuaW1wb3J0IHsgSHVtYW5UYWcgfSBmcm9tIFwiLi9lbnRpdHlUYWdzXCI7XG5cbmV4cG9ydCB0eXBlIEh1bWFuTmFtZSA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgSHVtYW4ge1xuICAgIG5hbWU6IEh1bWFuTmFtZVxuICAgIFxuICAgIC8vIHRoZXNlIGFyZSByZWFkIG9ubHlcbiAgICBwdWJsaWMgcmVsYXRpb25zaGlwczogQXJyYXk8UmVsYXRpb25zaGlwPlxuICAgIHB1YmxpYyB0YWdzOiBTZXQ8SHVtYW5UYWc+XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBIdW1hbk5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcHMgPSBuZXcgQXJyYXkoKVxuICAgICAgICB0aGlzLnRhZ3MgPSBuZXcgU2V0KClcbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4sIEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuXCJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb25cIlxuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tIFwiLi4vbWFuYWdlbWVudC90cmlwc3VtbWFyeVwiXG5pbXBvcnQgeyBQZW9wbGVHcmFwaCwgUmVsYXRpb25zaGlwIH0gZnJvbSBcIi4vcGVvcGxlR3JhcGhcIlxuaW1wb3J0IHsgSGF0ZUdyYXBoLCBTaXR1YXRpb25FZmZlY3QgfSBmcm9tIFwiLi9oYXRlR3JhcGhcIlxuaW1wb3J0IHsgRnJpZW5kc2hpcE1hbmFnZXIgfSBmcm9tIFwiLi9mcmllbmRzaGlwTWFuYWdlclwiXG5pbXBvcnQgeyBIdW1hblRhZywgSHVtYW5UYWdNYXAsIFJlbGF0aW9uc2hpcFRhZywgUmVsYXRpb25zaGlwVGFnTWFwIH0gZnJvbSBcIi4vZW50aXR5VGFnc1wiXG5cbmV4cG9ydCBjbGFzcyBMZXZlbCB7XG4gICAgcHVibGljIGh1bWFuczogQXJyYXk8SHVtYW4+XG4gICAgcHVibGljIGxvY2F0aW9uczogQXJyYXk8TG9jYXRpb24+XG5cbiAgICBwdWJsaWMgZnJpZW5kc2hpcE1hbmFnZXI6IEZyaWVuZHNoaXBNYW5hZ2VyXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaHVtYW5zOiBBcnJheTxIdW1hbj4sXG4gICAgICAgIGxvY2F0aW9uczogQXJyYXk8TG9jYXRpb24+LFxuICAgICAgICByZWxhdGlvbnNoaXBzOiBBcnJheTxSZWxhdGlvbnNoaXA+LFxuICAgICAgICBpbml0aWFsVGFnczogQXJyYXk8W0h1bWFuTmFtZSwgSHVtYW5UYWddPixcbiAgICAgICAgaGF0ZUdyYXBoOiBIYXRlR3JhcGgsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaHVtYW5zID0gaHVtYW5zXG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gbG9jYXRpb25zXG4gICAgICAgIGxldCBwZW9wbGVHcmFwaCA9IG5ldyBQZW9wbGVHcmFwaCh0aGlzLmh1bWFucywgcmVsYXRpb25zaGlwcywgaW5pdGlhbFRhZ3MpXG5cbiAgICAgICAgdGhpcy5mcmllbmRzaGlwTWFuYWdlciA9IG5ldyBGcmllbmRzaGlwTWFuYWdlcihoYXRlR3JhcGgsIHBlb3BsZUdyYXBoKVxuXG4gICAgICAgIC8vIEluaXQgcmVsYXRpb25zaGlwcyBvbiBwZW9wbGVcbiAgICAgICAgdGhpcy51cGRhdGVIdW1hbnNGcm9tUGVvcGxlR3JhcGhGb3JEaXNwbGF5KClcblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSHVtYW5zRnJvbVBlb3BsZUdyYXBoRm9yRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5odW1hbnMuZm9yRWFjaChoID0+IHtcbiAgICAgICAgICAgIGgucmVsYXRpb25zaGlwcyA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIucGVvcGxlR3JhcGguZ2V0T3V0UmVsYXRpb25zaGlwcyhoLm5hbWUpXG4gICAgICAgICAgICBoLnRhZ3MgPSB0aGlzLmZyaWVuZHNoaXBNYW5hZ2VyLnBlb3BsZUdyYXBoLmdldEh1bVRhZ3MoaC5uYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnb091dCh0cmlwU3VtbWFyeTogVHJpcFN1bW1hcnkpOiBzdHJpbmcge1xuICAgICAgICAvLyBVcGRhdGUgZnJpZW5kc2hpcHMgYmFzZWQgb24gdHJpcFxuICAgICAgICBsZXQgZWZmZWN0cyA9IHRoaXMuZnJpZW5kc2hpcE1hbmFnZXIuYXBwbHlNZWV0aW5nKHRyaXBTdW1tYXJ5KVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBtc2dzIGZvciBlZmZlY3RzXG5cbiAgICAgICAgbGV0IHtwZXJQZXJzb25SZWxNc2csIHBlclBlcnNvbkh1bU1zZ30gPSB0aGlzLnJlZHVjZUVmZmVjdHNQZXJQZXJzb24oZWZmZWN0cylcbiAgICAgICAgbGV0IGVmZmVjdHNNc2dzID0gdGhpcy5jcmVhdGVFZmZlY3RzTXNncyhwZXJQZXJzb25SZWxNc2csIHBlclBlcnNvbkh1bU1zZylcbiAgICAgICAgZWZmZWN0c01zZ3MuY29uY2F0KGVmZmVjdHMubWFwKGVmZmVjdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZWZmZWN0LmRlc2NyaXB0aW9uXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGxldCBlZmZlY3RNc2cgPSBlZmZlY3RzTXNncy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGVmZmVjdHNNc2dzLmpvaW4oJ1xcbicpXG4gICAgICAgICAgICA6IFwiTm8gb25lIGNhcmVkIGZvciB5b3VyIHRyaXAuIOKVr++4v+KVsFwiXG5cbiAgICAgICAgLy8gVXBkYXRlIHJlbGF0aW9uc2hpcHMgb24gcGVvcGxlXG4gICAgICAgIHRoaXMudXBkYXRlSHVtYW5zRnJvbVBlb3BsZUdyYXBoRm9yRGlzcGxheSgpXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJFZmZlY3RzOlwiLCBlZmZlY3RzKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkh1bWFuczpcIiwgdGhpcy5odW1hbnMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVsYXRpb25zaGlwc1wiLCB0aGlzLmZyaWVuZHNoaXBNYW5hZ2VyLnBlb3BsZUdyYXBoKVxuXG4gICAgICAgIC8vIENvbnN0cnVjdCBmaW5hbCBtc2dcbiAgICAgICAgbGV0IGZyaWVuZExpc3Q6IHN0cmluZyA9IHRyaXBTdW1tYXJ5LmdvUGVvcGxlLm1hcCgoaHVtYW46IEh1bWFuKSA9PiBodW1hbi5uYW1lKS5qb2luKCcsICcpXG4gICAgICAgIGxldCBzdGF0dXNNZXNzYWdlID0gYFlvdSB3ZW50IG91dCB0byAke3RyaXBTdW1tYXJ5LmdvTG9jYXRpb24/Lm5hbWV9IHdpdGggJHtmcmllbmRMaXN0fS5cXG4ke2VmZmVjdE1zZ31gXG5cbiAgICAgICAgcmV0dXJuIHN0YXR1c01lc3NhZ2VcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUVmZmVjdHNNc2dzKFxuICAgICAgICBwZXJQZXJzb25SZWxNc2c6IE1hcDxbc3RyaW5nLCBzdHJpbmddLCBbUmVsYXRpb25zaGlwVGFnW10sIFJlbGF0aW9uc2hpcFRhZ1tdXT4sXG4gICAgICAgIHBlclBlcnNvbkh1bU1zZzogTWFwPHN0cmluZywgW0h1bWFuVGFnW10sIEh1bWFuVGFnW11dPikge1xuXG4gICAgICAgIGxldCByZWxNc2dzID0gQXJyYXk8c3RyaW5nPigpXG4gICAgICAgIHBlclBlcnNvblJlbE1zZy5mb3JFYWNoKChjaGFuZ2VzLCBjb3VwbGUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdSZWxUYWdzID0gY2hhbmdlc1swXS5tYXAodCA9PiBSZWxhdGlvbnNoaXBUYWdNYXBbdF0pLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgbGV0IG9sZFJlbFRhZ3MgPSBjaGFuZ2VzWzFdLm1hcCh0ID0+IFJlbGF0aW9uc2hpcFRhZ01hcFt0XSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICByZWxNc2dzLnB1c2goYCR7Y291cGxlWzBdfSBub3cgJHtuZXdSZWxUYWdzfSBhbmQgbm8gbG9uZ2VyICR7b2xkUmVsVGFnc30gICR7Y291cGxlWzFdfS5gKVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBodW1Nc2dzID0gQXJyYXk8c3RyaW5nPigpXG4gICAgICAgIHBlclBlcnNvbkh1bU1zZy5mb3JFYWNoKChjaGFuZ2VzLCBwZXJzb24pID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdIdW1UYWdzID0gY2hhbmdlc1swXS5tYXAodCA9PiBIdW1hblRhZ01hcFt0XSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICBsZXQgb2xkSHVtVGFncyA9IGNoYW5nZXNbMV0ubWFwKHQgPT4gSHVtYW5UYWdNYXBbdF0pLmpvaW4oXCIsIFwiKVxuICAgICAgICAgICAgcmVsTXNncy5wdXNoKGAke3BlcnNvblswXX0gaXMgbm93ICR7bmV3SHVtVGFnc30gYW5kIG5vIGxvbmdlciAke29sZEh1bVRhZ3N9LmApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBlZmZlY3RzTXNncyA9IHJlbE1zZ3MuY29uY2F0KGh1bU1zZ3MpXG5cbiAgICAgICAgcmV0dXJuIGVmZmVjdHNNc2dzXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWR1Y2VFZmZlY3RzUGVyUGVyc29uKGVmZmVjdHM6IFNpdHVhdGlvbkVmZmVjdFtdKSB7XG4gICAgICAgIC8vIGZpcnN0IGFycmF5IGluIGtleXMgaXMgYWx3YXlzIGFkZGVkIHRhZ3MsIHNlY29uZCByZW1vdmVkXG4gICAgICAgIGxldCBwZXJQZXJzb25SZWxNc2cgPSBuZXcgTWFwPFtIdW1hbk5hbWUsIEh1bWFuTmFtZV0sIFtBcnJheTxSZWxhdGlvbnNoaXBUYWc+LCBBcnJheTxSZWxhdGlvbnNoaXBUYWc+XT4oKVxuICAgICAgICBsZXQgcGVyUGVyc29uSHVtTXNnID0gbmV3IE1hcDxIdW1hbk5hbWUsIFtBcnJheTxIdW1hblRhZz4sIEFycmF5PEh1bWFuVGFnPl0+KClcblxuICAgICAgICBsZXQgYWRkVG9NYXAgPSBmdW5jdGlvbjxLLCBWPihrZXk6IEssIHZhbHVlOiBWLCB2YWx1ZVN0b3JlOiBNYXA8SywgW0FycmF5PFY+LCBBcnJheTxWPl0+LCBhZGRlZFJlbW92ZWRTdG9yZVN3aXRjaDogMHwxKSB7XG4gICAgICAgICAgICBsZXQgcGVyS2V5U3RvcmUgPSB2YWx1ZVN0b3JlLmdldChrZXkpID8/IFtuZXcgQXJyYXk8Vj4oKSwgbmV3IEFycmF5PFY+KCldXG4gICAgICAgICAgICBwZXJLZXlTdG9yZVthZGRlZFJlbW92ZWRTdG9yZVN3aXRjaF0ucHVzaCh2YWx1ZSlcbiAgICAgICAgICAgIHZhbHVlU3RvcmUuc2V0KGtleSwgcGVyS2V5U3RvcmUpXG4gICAgICAgIH1cblxuICAgICAgICBlZmZlY3RzLmZvckVhY2goZWZmZWN0ID0+IHtcbiAgICAgICAgICAgIGVmZmVjdC5hZGRlZEh1bVRhZ3MuZm9yRWFjaChhaCA9PiBhZGRUb01hcChhaFswXSwgYWhbMV0sIHBlclBlcnNvbkh1bU1zZywgMCkpXG4gICAgICAgICAgICBlZmZlY3QucmVtb3ZlZEh1bVRhZ3MuZm9yRWFjaChyaCA9PiBhZGRUb01hcChyaFswXSwgcmhbMV0sIHBlclBlcnNvbkh1bU1zZywgMSkpXG4gICAgICAgICAgICBlZmZlY3QuYWRkZWRSZWxUYWdzLmZvckVhY2goYWggPT4gYWRkVG9NYXAoYWhbMF0sIGFoWzFdLCBwZXJQZXJzb25SZWxNc2csIDApKVxuICAgICAgICAgICAgZWZmZWN0LnJlbW92ZWRSZWxUYWdzLmZvckVhY2goYWggPT4gYWRkVG9NYXAoYWhbMF0sIGFoWzFdLCBwZXJQZXJzb25SZWxNc2csIDEpKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7IHBlclBlcnNvblJlbE1zZywgcGVyUGVyc29uSHVtTXNnIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIYXRlR3JhcGggfSBmcm9tIFwiLi9oYXRlR3JhcGhcIlxuaW1wb3J0IHsgTGV2ZWwgfSBmcm9tIFwiLi9sZXZlbFwiXG5pbXBvcnQgeyBSZWxhdGlvbnNoaXAgfSBmcm9tIFwiLi9wZW9wbGVHcmFwaFwiXG5pbXBvcnQgeyBIdW1hbiwgSHVtYW5OYW1lIH0gZnJvbSBcIi4vaHVtYW5cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuaW1wb3J0IHsgQ29tcGxleCwgTXV0dWFsQ3J1c2gsIE5vYm9keUxpa2VzQW5ncnlEcnVuaywgU2l0dWF0aW9uVXRpbHMgfSBmcm9tIFwiLi9zaXR1YXRpb25UeXBlc1wiXG5cbmV4cG9ydCBsZXQgbGV2ZWxzOiBBcnJheTxMZXZlbD4gPSBbXVxuXG5sZXQgbG9jYXRpb25zID0gW1xuICAgIHtuYW1lOiAnQm93bGluZycsIGxpbWl0OiB7bWluOiAyLCBtYXg6IDV9fSxcbiAgICB7bmFtZTogJ0RyaW5rJywgbGltaXQ6IHttaW46IDIsIG1heDogNH19LFxuICAgIHtuYW1lOiAnRm9yZXN0JywgbGltaXQ6IHttaW46IDIsIG1heDogNn19LFxuICAgIHtuYW1lOiAnTW92aWUnLCBsaW1pdDoge21pbjogMiwgbWF4OiA2fX0sXG5dXG5cbi8vIFlvdSBpcyBhbHdheXMgb24gdGhlIHplcm90aCBwb3NpdGlvblxuXG5mdW5jdGlvbiBtdXR1YWxSZWxhdGlvbnNoaXAocGVvcGxlOiBbSHVtYW5OYW1lLCBIdW1hbk5hbWVdLCB0YWdzOiBSZWxhdGlvbnNoaXBUYWdbXSk6IFtSZWxhdGlvbnNoaXAsIFJlbGF0aW9uc2hpcF0ge1xuICAgIGNvbnN0IHRhZ1NldCA9IG5ldyBTZXQodGFncylcbiAgICBjb25zdCBbYSwgYl0gPSBwZW9wbGVcblxuICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBSZWxhdGlvbnNoaXAoW2EsIGJdLCB0YWdTZXQpLFxuICAgICAgICBuZXcgUmVsYXRpb25zaGlwKFtiLCBhXSwgdGFnU2V0KSxcbiAgICBdXG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5SZWxhdGlvbnNoaXBMaXN0KHJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcCB8IFtSZWxhdGlvbnNoaXAsIFJlbGF0aW9uc2hpcF0+KSB7XG4gICAgbGV0IHJlcyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IHIgb2YgcmVsYXRpb25zaGlwcykge1xuICAgICAgICBpZiAociBpbnN0YW5jZW9mIFJlbGF0aW9uc2hpcCkge1xuICAgICAgICAgICAgcmVzLnB1c2gocilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IFtyYSwgcmJdID0gclxuICAgICAgICAgICAgcmVzLnB1c2gocmEsIHJiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1xufVxuXG5sZXZlbHMucHVzaChcbiAgICBuZXcgTGV2ZWwoXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBIdW1hbignWW91JyksXG4gICAgICAgICAgICBuZXcgSHVtYW4oJ0FsZXgnKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbignQmVhdHJpY2UnKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbignQ2VjaWwnKSxcbiAgICAgICAgICAgIG5ldyBIdW1hbignRGFuJyksXG4gICAgICAgICAgICBuZXcgSHVtYW4oJ0VyaWMnKSxcbiAgICAgICAgXSxcbiAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICBmbGF0dGVuUmVsYXRpb25zaGlwTGlzdChbXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoWydBbGV4JywgJ0JlYXRyaWNlJ10sIFtSZWxhdGlvbnNoaXBUYWcuY3J1c2hdKSxcbiAgICAgICAgICAgIG11dHVhbFJlbGF0aW9uc2hpcChbJ0FsZXgnLCAnQ2VjaWwnXSwgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaF0pLFxuICAgICAgICAgICAgbmV3IFJlbGF0aW9uc2hpcChbJ0RhbicsICdCZWF0cmljZSddLCBuZXcgU2V0KFtSZWxhdGlvbnNoaXBUYWcuZXhdKSksXG4gICAgICAgICAgICBuZXcgUmVsYXRpb25zaGlwKFsnRGFuJywgJ1lvdSddLCBuZXcgU2V0KFtSZWxhdGlvbnNoaXBUYWcuZXhdKSksXG4gICAgICAgICAgICBtdXR1YWxSZWxhdGlvbnNoaXAoWydFcmljJywgJ0FsZXgnXSwgW1JlbGF0aW9uc2hpcFRhZy5jcnVzaF0pLFxuICAgICAgICAgICAgbXV0dWFsUmVsYXRpb25zaGlwKFsnRXJpYycsICdCZWF0cmljZSddLCBbUmVsYXRpb25zaGlwVGFnLmNydXNoXSksXG4gICAgICAgIF0pLFxuICAgICAgICBbXG4gICAgICAgICAgICBbJ0JlYXRyaWNlJywgSHVtYW5UYWcucHJvbWlzY3VvdXNdLFxuICAgICAgICAgICAgWydDZWNpbCcsIEh1bWFuVGFnLmludHJvdmVydF0sXG4gICAgICAgICAgICBbJ0RhbicsIEh1bWFuVGFnLmV4dHJvdmVydF0sXG4gICAgICAgICAgICBbJ0RhbicsIEh1bWFuVGFnLmFuZ3J5X2RydW5rXSxcbiAgICAgICAgXVxuICAgICAgICAsXG4gICAgICAgIG5ldyBIYXRlR3JhcGgoW1xuICAgICAgICAgICAgbmV3IE5vYm9keUxpa2VzQW5ncnlEcnVuaygpLFxuICAgICAgICAgICAgbmV3IE11dHVhbENydXNoKCksXG4gICAgICAgIF0pLFxuICAgICksXG4pIiwiaW1wb3J0IHsgSHVtYW4sIEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuXCJcbmltcG9ydCB7IEh1bWFuVGFnLCBSZWxhdGlvbnNoaXBUYWcsIFJlbGF0aW9uc2hpcFRhZ01hcCB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuXG50eXBlIEVkZ2VLZXkgPSBzdHJpbmdcbmV4cG9ydCB0eXBlIENvdXBsZUtleSA9IFtIdW1hbk5hbWUsIEh1bWFuTmFtZV1cblxuZXhwb3J0IGNsYXNzIFBlb3BsZUdyYXBoIHtcbiAgICBwcml2YXRlIHJlbGF0aW9uc2hpcFRhZ3M6IE1hcDxFZGdlS2V5LCBTZXQ8UmVsYXRpb25zaGlwVGFnPj5cbiAgICBwcml2YXRlIGh1bWFuc1RhZ3M6IE1hcDxIdW1hbk5hbWUsIFNldDxIdW1hblRhZz4+XG5cbiAgICBwcml2YXRlIG9yaWVudGVkOiBCb29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcihwZW9wbGU6IEh1bWFuW10gPSBbXSwgaW5pdGlhbFJlbGF0aW9uc2hpcHM6IEFycmF5PFJlbGF0aW9uc2hpcD4gPSBbXSwgaW5pdGlhbFRhZ3M6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4pIHtcbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzID0gbmV3IE1hcCgpXG4gICAgICAgIHRoaXMuaHVtYW5zVGFncyA9IG5ldyBNYXAoKVxuICAgICAgICB0aGlzLm9yaWVudGVkID0gdHJ1ZVxuXG4gICAgICAgIHBlb3BsZS5mb3JFYWNoKGggPT4ge1xuICAgICAgICAgICAgcGVvcGxlLmZvckVhY2goaGggPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoLm5hbWUgIT0gaGgubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFJlbFRhZ3MoW2gubmFtZSwgaGgubmFtZV0sIG5ldyBTZXQ8UmVsYXRpb25zaGlwVGFnPigpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaW5pdGlhbFRhZ3MuZm9yRWFjaChoVGFnVHVwbGUgPT4ge1xuICAgICAgICAgICAgbGV0IFtoTmFtZSwgaFRhZ10gPSBoVGFnVHVwbGVcbiAgICAgICAgICAgIHRoaXMuYWRkSHVtVGFnKGhOYW1lLCBoVGFnKVxuICAgICAgICB9KVxuXG4gICAgICAgIGluaXRpYWxSZWxhdGlvbnNoaXBzLmZvckVhY2gocmVsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVsVGFncyhyZWwucGVvcGxlLCByZWwudGFncylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkSHVtVGFnKHBlcnNvbjogSHVtYW5OYW1lLCB0YWc6IEh1bWFuVGFnKSB7XG4gICAgICAgIGxldCBoVGFncyA9IHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKSA/PyBuZXcgU2V0PEh1bWFuVGFnPigpXG4gICAgICAgIGhUYWdzLmFkZCh0YWcpXG4gICAgICAgIHRoaXMuaHVtYW5zVGFncy5zZXQocGVyc29uLCBoVGFncylcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlSHVtVGFnKHBlcnNvbjogSHVtYW5OYW1lLCB0YWc6IEh1bWFuVGFnKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh1bWFuc1RhZ3MuZ2V0KHBlcnNvbik/LmRlbGV0ZSh0YWcpID8/IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGdldEh1bVRhZ3MocGVyc29uOiBIdW1hbk5hbWUpOiBTZXQ8SHVtYW5UYWc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtYW5zVGFncy5nZXQocGVyc29uKSA/PyBuZXcgU2V0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UmVsVGFncyhwZW9wbGU6IENvdXBsZUtleSwgdGFnczogU2V0PFJlbGF0aW9uc2hpcFRhZz4pIHtcbiAgICAgICAgbGV0IGdyYXBoS2V5ID0gdGhpcy50b0VkZ2VLZXkocGVvcGxlKVxuICAgICAgICB0aGlzLnJlbGF0aW9uc2hpcFRhZ3Muc2V0KGdyYXBoS2V5LCB0YWdzKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZWxUYWdzKHBlb3BsZTogQ291cGxlS2V5KTogU2V0PFJlbGF0aW9uc2hpcFRhZz4ge1xuICAgICAgICBsZXQgZ3JhcGhLZXkgPSB0aGlzLnRvRWRnZUtleShwZW9wbGUpXG4gICAgICAgIHJldHVybiB0aGlzLnJlbGF0aW9uc2hpcFRhZ3MuZ2V0KGdyYXBoS2V5KSFcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUmVsVGFnKHBlb3BsZTogQ291cGxlS2V5LCB0YWc6IFJlbGF0aW9uc2hpcFRhZykge1xuICAgICAgICB0aGlzLmdldFJlbFRhZ3MocGVvcGxlKT8uYWRkKHRhZylcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlUmVsVGFnKHBlb3BsZTogQ291cGxlS2V5LCB0YWc6IFJlbGF0aW9uc2hpcFRhZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWxUYWdzKHBlb3BsZSk/LmRlbGV0ZSh0YWcpID8/IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGdldE91dFJlbGF0aW9uc2hpcHMocGVyc29uOiBIdW1hbk5hbWUpOiBBcnJheTxSZWxhdGlvbnNoaXA+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheVxuXG4gICAgICAgIHRoaXMucmVsYXRpb25zaGlwVGFncy5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKHBlcnNvbikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUmVsYXRpb25zaGlwKHRoaXMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldEluUmVsYXRpb25zaGlwcyhwZXJzb246IEh1bWFuTmFtZSk6IEFycmF5PFJlbGF0aW9uc2hpcD4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEFycmF5XG5cbiAgICAgICAgdGhpcy5yZWxhdGlvbnNoaXBUYWdzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5LmVuZHNXaXRoKHBlcnNvbikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgUmVsYXRpb25zaGlwKHRoaXMuZnJvbUVkZ2VLZXkoa2V5KSwgdmFsKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucmVsYXRpb25zaGlwVGFncy5nZXQodGhpcy50b0VkZ2VLZXkoW2EsIGJdKSkgPz8gW10pXG4gICAgfVxuXG4gICAgcHVibGljIGdldE11dHVhbFJlbGF0aW9uc2hpcHNCZXR3ZWVuKGE6IEh1bWFuTmFtZSwgYjogSHVtYW5OYW1lKTogQXJyYXk8UmVsYXRpb25zaGlwVGFnPiB7XG4gICAgICAgIGxldCBhYiA9IHRoaXMuZ2V0UmVsYXRpb25zaGlwc0JldHdlZW4oYSwgYilcbiAgICAgICAgbGV0IGJhID0gdGhpcy5nZXRSZWxhdGlvbnNoaXBzQmV0d2VlbihhLCBiKVxuXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24oYWIsIGJhKVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9FZGdlS2V5KHVub3JkZXJlZFBhaXI6IENvdXBsZUtleSk6IEVkZ2VLZXkge1xuICAgICAgICBsZXQgW2EsIGJdID0gdW5vcmRlcmVkUGFpclxuICAgICAgICBsZXQgb3JkZXJlZFBhaXIgPSBhIDw9IGIgfHwgdGhpcy5vcmllbnRlZCA/IFthLCBiXSA6IFtiLCBhXVxuXG4gICAgICAgIHJldHVybiBvcmRlcmVkUGFpci5qb2luKCd8JylcbiAgICB9XG5cbiAgICBwcml2YXRlIGZyb21FZGdlS2V5KGtleTogRWRnZUtleSk6IENvdXBsZUtleSB7XG4gICAgICAgIGxldCBuYW1lcyA9IGtleS5zcGxpdCgnfCcpXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG5hbWVzLmxlbmd0aCA9PSAyKVxuXG4gICAgICAgIHJldHVybiBbbmFtZXNbMF0sIG5hbWVzWzFdXVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uc2hpcCB7XG4gICAgcGVvcGxlOiBDb3VwbGVLZXlcbiAgICB0YWdzOiBTZXQ8UmVsYXRpb25zaGlwVGFnPlxuXG4gICAgY29uc3RydWN0b3IocGVvcGxlOiBDb3VwbGVLZXksIHRhZ3M/OiBTZXQ8UmVsYXRpb25zaGlwVGFnPikge1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZVxuICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzID8/IG5ldyBTZXQ8UmVsYXRpb25zaGlwVGFnPigpXG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnBlb3BsZVsxXX06ICR7QXJyYXkuZnJvbSh0aGlzLnRhZ3MpLm1hcCgoeCkgPT4gUmVsYXRpb25zaGlwVGFnTWFwW3hdKS5qb2luKCcsICcpfWBcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbjxUPihhczogVFtdLCBiczogVFtdKTogVFtdIHtcbiAgICBsZXQgcmVzID0gbmV3IEFycmF5XG5cbiAgICBmb3IgKGNvbnN0IGEgb2YgYXMpIHtcbiAgICAgICAgaWYgKGJzLmluY2x1ZGVzKGEpKSB7XG4gICAgICAgICAgICByZXMucHVzaChhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1xufSIsImltcG9ydCB7IEh1bWFuTmFtZSB9IGZyb20gXCIuL2h1bWFuXCJcbmltcG9ydCB7IFNpdHVhdGlvbiwgU2l0dWF0aW9uRWZmZWN0IH0gZnJvbSBcIi4vaGF0ZUdyYXBoXCJcbmltcG9ydCB7IFRyaXBTdW1tYXJ5IH0gZnJvbSBcIi4uL21hbmFnZW1lbnQvdHJpcHN1bW1hcnlcIlxuaW1wb3J0IHsgQ291cGxlS2V5LCBQZW9wbGVHcmFwaCB9IGZyb20gXCIuL3Blb3BsZUdyYXBoXCJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4vbG9jYXRpb25cIlxuaW1wb3J0IHsgSHVtYW5UYWcsIFJlbGF0aW9uc2hpcFRhZyB9IGZyb20gXCIuL2VudGl0eVRhZ3NcIlxuXG5leHBvcnQgY2xhc3MgU2l0dWF0aW9uVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRUb0RhdGUoY291cGxlOiBDb3VwbGVLZXkpIHtcbiAgICAgICAgY29uc3QgW2EsIGJdID0gY291cGxlXG5cbiAgICAgICAgcmV0dXJuIG5ldyBTaXR1YXRpb25FZmZlY3QoXG4gICAgICAgICAgICBgJHthfSBhbmQgJHtifSBzdGFydGVkIGRhdGluZyFgLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFtbYSwgYl0sIFJlbGF0aW9uc2hpcFRhZy5sb3Zlcl0sXG4gICAgICAgICAgICAgICAgW1tiLCBhXSwgUmVsYXRpb25zaGlwVGFnLmxvdmVyXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1thLCBiXSwgUmVsYXRpb25zaGlwVGFnLmNydXNoXSxcbiAgICAgICAgICAgICAgICBbW2IsIGFdLCBSZWxhdGlvbnNoaXBUYWcuY3J1c2hdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbXBsZVNpdHVhdGlvbiBpbXBsZW1lbnRzIFNpdHVhdGlvbiB7XG4gICAgcHJpdmF0ZSBoYXZlVG9CZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT5cbiAgICBwcml2YXRlIGNhbm5vdEJlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPlxuICAgIHByaXZhdGUgYWxsb3dlZExvY2F0aW9uczogQXJyYXk8TG9jYXRpb24+XG5cbiAgICBwdWJsaWMgZWZmZWN0OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaGF2ZVRvQmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+LFxuICAgICAgICBjYW5ub3RCZVByZXNlbnQ6IEFycmF5PEh1bWFuTmFtZT4sXG4gICAgICAgIGFsbG93ZWRMb2NhdGlvbnM6IEFycmF5PExvY2F0aW9uPixcbiAgICAgICAgZWZmZWN0OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+LFxuICAgICkge1xuXG4gICAgICAgIHRoaXMuaGF2ZVRvQmVQcmVzZW50ID0gaGF2ZVRvQmVQcmVzZW50XG4gICAgICAgIHRoaXMuY2Fubm90QmVQcmVzZW50ID0gY2Fubm90QmVQcmVzZW50XG4gICAgICAgIHRoaXMuYWxsb3dlZExvY2F0aW9ucyA9IGFsbG93ZWRMb2NhdGlvbnNcbiAgICAgICAgdGhpcy5lZmZlY3QgPSBlZmZlY3RcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIF86IFBlb3BsZUdyYXBoKTogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXBwbGljYWJsZSh0cmlwKSA/IHRoaXMuZWZmZWN0IDogbmV3IEFycmF5KClcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNBcHBsaWNhYmxlKHRyaXA6IFRyaXBTdW1tYXJ5KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBuYW1lc1ByZXNlbnQgPSB0cmlwLmdvUGVvcGxlLm1hcChwID0+IHAubmFtZSlcblxuICAgICAgICByZXR1cm4gdGhpcy5oYXZlVG9CZVByZXNlbnQuZXZlcnkoaHAgPT4gbmFtZXNQcmVzZW50LmluY2x1ZGVzKGhwKSkgJiZcbiAgICAgICAgICAgIHRoaXMuY2Fubm90QmVQcmVzZW50LmV2ZXJ5KGNwID0+ICFuYW1lc1ByZXNlbnQuaW5jbHVkZXMoY3ApKSAmJlxuICAgICAgICAgICAgdGhpcy5hbGxvd2VkTG9jYXRpb25zLnNvbWUobG9jID0+IGxvYy5uYW1lID09IHRyaXAuZ29Mb2NhdGlvbj8ubmFtZSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb2JvZHlMaWtlc0FuZ3J5RHJ1bmsgaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICBpZiAodHJpcC5nb0xvY2F0aW9uIS5uYW1lICE9IFwiRHJpbmtcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZWZmZWN0cyA9IG5ldyBBcnJheSgpXG4gICAgICAgIHRyaXAuZ29QZW9wbGUuZm9yRWFjaChwZXJzb24gPT4ge1xuICAgICAgICAgICAgbGV0IHBlcnNvblRhZ3MgPSBjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhwZXJzb24ubmFtZSlcbiAgICAgICAgICAgIGlmIChwZXJzb25UYWdzLmhhcyhIdW1hblRhZy5hbmdyeV9kcnVuaykpIHtcbiAgICAgICAgICAgICAgICB0cmlwLmdvUGVvcGxlLmZpbHRlcihwID0+IHAgIT0gcGVyc29uKS5mb3JFYWNoKG90aGVyUGVyc29uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0cy5wdXNoKG5ldyBTaXR1YXRpb25FZmZlY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk5vYm9keSBsaWtlcyBkcnVuayBwZW9wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbW290aGVyUGVyc29uLm5hbWUsIHBlcnNvbi5uYW1lXSwgUmVsYXRpb25zaGlwVGFnLmRpc2xpa2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBlZmZlY3RzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTXV0dWFsQ3J1c2ggaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHB1YmxpYyBHZXRBcHBsaWNhYmxlRWZmZWN0cyh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IEFycmF5PFNpdHVhdGlvbkVmZmVjdD4ge1xuICAgICAgICAvLyBJIGtub3cgdGhpcyBpcyBfdGVycmlibHlfIGluZWZmaWNpZW50IDooXG4gICAgICAgIGxldCBlZmZlY3RzID0gbmV3IEFycmF5KClcblxuICAgICAgICBsZXQgY3J1c2hlc01hcDogTWFwPEh1bWFuTmFtZSwgSHVtYW5OYW1lW10+ID0gbmV3IE1hcCgpXG5cbiAgICAgICAgZm9yIChjb25zdCBwZXJzb24gb2YgdHJpcC5nb1Blb3BsZSkge1xuICAgICAgICAgICAgbGV0IGNydXNoZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgYiA9PiBjdXJyZW50U3RhdGUuZ2V0TXV0dWFsUmVsYXRpb25zaGlwc0JldHdlZW4ocGVyc29uLm5hbWUsIGIubmFtZSkuaW5jbHVkZXMoUmVsYXRpb25zaGlwVGFnLmNydXNoKSxcbiAgICAgICAgICAgICkubWFwKGggPT4gaC5uYW1lKVxuICAgICAgICAgICAgY3J1c2hlc01hcC5zZXQocGVyc29uLm5hbWUsIGNydXNoZXNQcmVzZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBwZXJzb24gb2YgdHJpcC5nb1Blb3BsZSkge1xuICAgICAgICAgICAgY29uc3QgY3J1c2hlcyA9IGNydXNoZXNNYXAuZ2V0KHBlcnNvbi5uYW1lKSFcbiAgICAgICAgICAgIGlmIChjcnVzaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNydXNoID0gY3J1c2hlc1swXVxuICAgICAgICAgICAgICAgIC8vIEJyZWFrIHN5bW1ldHJ5IGJ5IGNvbXBhcmluZyBuYW1lc1xuICAgICAgICAgICAgICAgIGlmIChjcnVzaGVzTWFwLmdldChjcnVzaCkhLmxlbmd0aCA9PT0gMSAmJiBjcnVzaCA8PSBwZXJzb24ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3RzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXR1YXRpb25VdGlscy5zdGFydFRvRGF0ZShbcGVyc29uLm5hbWUsIGNydXNoXSksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWZmZWN0c1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBsZXggaW1wbGVtZW50cyBTaXR1YXRpb24ge1xuICAgIHByaXZhdGUgaHVtUmVxOiBBcnJheTxIdW1hbk5hbWU+XG4gICAgcHJpdmF0ZSBodW1CYW46IEFycmF5PEh1bWFuTmFtZT5cbiAgICBwcml2YXRlIGFsbG93ZWRMb2NhdGlvbnM6IEFycmF5PExvY2F0aW9uPlxuXG4gICAgcHJpdmF0ZSBodW1UYWdzUmVxOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+XG4gICAgcHJpdmF0ZSBodW1UYWdzQmFuOiBBcnJheTxbSHVtYW5OYW1lLCBIdW1hblRhZ10+XG5cbiAgICBwcml2YXRlIHJlbFRhZ3NSZXE6IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+XG4gICAgcHJpdmF0ZSByZWxUYWdzQmFuOiBBcnJheTxbQ291cGxlS2V5LCBSZWxhdGlvbnNoaXBUYWddPlxuXG4gICAgcHVibGljIGVmZmVjdDogQXJyYXk8U2l0dWF0aW9uRWZmZWN0PlxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGhhdmVUb0JlUHJlc2VudDogQXJyYXk8SHVtYW5OYW1lPiwgY2Fubm90QmVQcmVzZW50OiBBcnJheTxIdW1hbk5hbWU+LFxuICAgICAgICBhbGxvd2VkTG9jYXRpb25zOiBBcnJheTxMb2NhdGlvbj4sXG4gICAgICAgIGh1bVRhZ3NSZXE6IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sIGh1bVRhZ3NCYW46IEFycmF5PFtIdW1hbk5hbWUsIEh1bWFuVGFnXT4sXG4gICAgICAgIHJlbFRhZ3NSZXE6IEFycmF5PFtDb3VwbGVLZXksIFJlbGF0aW9uc2hpcFRhZ10+LCByZWxUYWdzQmFuOiBBcnJheTxbQ291cGxlS2V5LCBSZWxhdGlvbnNoaXBUYWddPixcbiAgICAgICAgZWZmZWN0OiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+LFxuICAgICkge1xuXG4gICAgICAgIHRoaXMuaHVtUmVxID0gaGF2ZVRvQmVQcmVzZW50XG4gICAgICAgIHRoaXMuaHVtQmFuID0gY2Fubm90QmVQcmVzZW50XG4gICAgICAgIHRoaXMuYWxsb3dlZExvY2F0aW9ucyA9IGFsbG93ZWRMb2NhdGlvbnNcblxuICAgICAgICB0aGlzLmh1bVRhZ3NSZXEgPSBodW1UYWdzUmVxXG4gICAgICAgIHRoaXMuaHVtVGFnc0JhbiA9IGh1bVRhZ3NCYW5cbiAgICAgICAgdGhpcy5yZWxUYWdzUmVxID0gcmVsVGFnc1JlcVxuICAgICAgICB0aGlzLnJlbFRhZ3NCYW4gPSByZWxUYWdzQmFuXG5cbiAgICAgICAgdGhpcy5lZmZlY3QgPSBlZmZlY3RcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0QXBwbGljYWJsZUVmZmVjdHModHJpcDogVHJpcFN1bW1hcnksIGN1cnJlbnRTdGF0ZTogUGVvcGxlR3JhcGgpOiBBcnJheTxTaXR1YXRpb25FZmZlY3Q+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBcHBsaWNhYmxlKHRyaXAsIGN1cnJlbnRTdGF0ZSkgPyB0aGlzLmVmZmVjdCA6IG5ldyBBcnJheSgpXG4gICAgfVxuXG4gICAgcHVibGljIGlzQXBwbGljYWJsZSh0cmlwOiBUcmlwU3VtbWFyeSwgY3VycmVudFN0YXRlOiBQZW9wbGVHcmFwaCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgbmFtZXNQcmVzZW50ID0gdHJpcC5nb1Blb3BsZS5tYXAocCA9PiBwLm5hbWUpXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHVtUmVxLmV2ZXJ5KGhwID0+IG5hbWVzUHJlc2VudC5pbmNsdWRlcyhocCkpICYmXG4gICAgICAgICAgICB0aGlzLmh1bUJhbi5ldmVyeShjcCA9PiAhbmFtZXNQcmVzZW50LmluY2x1ZGVzKGNwKSkgJiZcbiAgICAgICAgICAgIHRoaXMuYWxsb3dlZExvY2F0aW9ucy5zb21lKGxvYyA9PiBsb2MubmFtZSA9PSB0cmlwLmdvTG9jYXRpb24/Lm5hbWUpICYmXG5cbiAgICAgICAgICAgIHRoaXMuaHVtVGFnc1JlcS5ldmVyeShociA9PiBjdXJyZW50U3RhdGUuZ2V0SHVtVGFncyhoclswXSkuaGFzKGhyWzFdKSkgJiZcbiAgICAgICAgICAgIHRoaXMuaHVtVGFnc0Jhbi5ldmVyeShiciA9PiAhY3VycmVudFN0YXRlLmdldEh1bVRhZ3MoYnJbMF0pLmhhcyhiclsxXSkpICYmXG5cbiAgICAgICAgICAgIHRoaXMucmVsVGFnc1JlcS5ldmVyeShyciA9PiBjdXJyZW50U3RhdGUuZ2V0UmVsVGFncyhyclswXSkuaGFzKHJyWzFdKSkgJiZcbiAgICAgICAgICAgIHRoaXMucmVsVGFnc0Jhbi5ldmVyeShiciA9PiAhY3VycmVudFN0YXRlLmdldFJlbFRhZ3MoYnJbMF0pLmhhcyhiclsxXSkpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCB7IEJvYXJkU2NlbmUgfSBmcm9tICcuL21hbmFnZW1lbnQvYm9hcmQnXG5pbXBvcnQgeyBMb2FkaW5nU2NlbmUgfSBmcm9tICcuL3V0aWxzL2xvYWRpbmcnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU3VzdGFpbmFibGUgRnJpZW5kc2hpcHMnLFxuIFxuICB0eXBlOiBQaGFzZXIuQVVUTyxcbiBcbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogODAwLFxuICAgIGhlaWdodDogNTAwLFxuICB9LFxuIFxuICBwYXJlbnQ6ICdjb250ZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzg4OCcsXG5cbiAgc2NlbmU6ICBbTG9hZGluZ1NjZW5lLCBCb2FyZFNjZW5lXSxcbn07XG4gXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQge2xldmVscyB9IGZyb20gJy4uL2NvbnRlbnQvbGV2ZWxzJ1xuaW1wb3J0IHsgVHJpcFN1bW1hcnkgfSBmcm9tICcuL3RyaXBzdW1tYXJ5J1xuaW1wb3J0IHsgUGhvbmVTdGFnZSB9IGZyb20gJy4vcGhvbmVfc3RhZ2UnXG5pbXBvcnQgeyBIdW1hblN0YWdlIH0gZnJvbSAnLi9odW1hbl9zdGFnZSdcbmltcG9ydCB7IExvY2F0aW9uU3RhZ2UgfSBmcm9tICcuL2xvY2F0aW9uX3N0YWdlJ1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb250ZW50L2xvY2F0aW9uJ1xuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4uL2NvbnRlbnQvbGV2ZWxcIlxuXG5leHBvcnQgY2xhc3MgQm9hcmRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcHJpdmF0ZSB0cmlwRmFkZXI/OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgcHJpdmF0ZSB0cmFuc2l0aW9uRmFkZXI/OiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgcHJpdmF0ZSBpbmZvVGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgcHJpdmF0ZSBsZXZlbDogTGV2ZWxcbiAgICBcbiAgICBwdWJsaWMgdHJpcFN1bW1hcnk6IFRyaXBTdW1tYXJ5XG4gICAgcHVibGljIHBob25lPzogUGhvbmVTdGFnZVxuICAgIHByaXZhdGUgaHVtYW5TdGFnZT86IEh1bWFuU3RhZ2VcbiAgICBwcml2YXRlIGxvY2F0aW9uU3RhZ2U/OiBMb2NhdGlvblN0YWdlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAga2V5OiAnbWFuYWdlbWVudCcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWxzWzBdXG4gICAgICAgIHRoaXMudHJpcFN1bW1hcnkgPSBuZXcgVHJpcFN1bW1hcnkodGhpcy5sZXZlbC5odW1hbnNbMF0pXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbkZhZGVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKDAsIDAsIDgwMCwgNTAwLCAweDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAuc2V0RGVwdGgoMjAwMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFkZC5pbWFnZSgwLCAwLCAnYm9hcmRfYmFja2dyb3VuZCcpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAsIDApXG5cbiAgICAgICAgdGhpcy50cmlwRmFkZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoMCwgMCwgODAwLCA1MDAsIDB4MClcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5nb0JhY2soKSlcbiAgICAgICAgdGhpcy5pbmZvVGV4dCA9IHRoaXMuYWRkLnRleHQoNDAwLCAyMDAsICcnLCB7IGZpbGw6ICcjZmZmJywgZm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMjBweCcgfSlcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG4gICAgICAgICAgICAuc2V0V29yZFdyYXBXaWR0aCg0MDApXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuXG4gICAgICAgIHRoaXMubG9jYXRpb25TdGFnZSA9IG5ldyBMb2NhdGlvblN0YWdlKHRoaXMsIHRoaXMubGV2ZWwpXG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZSA9IG5ldyBIdW1hblN0YWdlKHRoaXMsIHRoaXMubGV2ZWwpXG4gICAgICAgIHRoaXMucGhvbmUgPSBuZXcgUGhvbmVTdGFnZSh0aGlzKVxuXG4gICAgICAgIHRoaXMuYWRkLnR3ZWVuKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMudHJhbnNpdGlvbkZhZGVyLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGdvT3V0KGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgICAgICBpZiAoIXRoaXMudHJpcFN1bW1hcnkucHJlcGFyZShsb2NhdGlvbikpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzLmxldmVsLmdvT3V0KHRoaXMudHJpcFN1bW1hcnkpXG4gICAgICAgIHRoaXMudHJpcEZhZGVyIS5pbnB1dC5lbmFibGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5sb2NhdGlvblN0YWdlIS5lbmFibGUoZmFsc2UpXG4gICAgICAgIHRoaXMuaW5mb1RleHQhLnNldFRleHQobWVzc2FnZSlcbiAgICAgICAgdGhpcy5hZGQudHdlZW4oe1xuICAgICAgICAgICAgdGFyZ2V0czogW3RoaXMuaW5mb1RleHQsIHRoaXMudHJpcEZhZGVyXSxcbiAgICAgICAgICAgIGFscGhhOiB7IGZyb206IDAsIHRvOiAxIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaXBGYWRlciEuaW5wdXQuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uU3RhZ2UhLmVuYWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMuaHVtYW5TdGFnZSEuYmxlYWNoUGVvcGxlKClcbiAgICAgICAgdGhpcy50cmlwRmFkZXIhLmlucHV0LmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLmFkZC50d2Vlbih7XG4gICAgICAgICAgICB0YXJnZXRzOiBbdGhpcy5pbmZvVGV4dCwgdGhpcy50cmlwRmFkZXJdLFxuICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gdGhpcy50cmlwRmFkZXIhLmlucHV0LmVuYWJsZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLnRyaXBTdW1tYXJ5ID0gbmV3IFRyaXBTdW1tYXJ5KHRoaXMubGV2ZWwuaHVtYW5zWzBdKVxuICAgICAgICB0aGlzLnBob25lPy5kaXNwbGF5KHRoaXMubGV2ZWwuaHVtYW5zWzBdLCAwKVxuICAgICAgICB0aGlzLmh1bWFuU3RhZ2U/LnJlZHJhd0xpbmVzKHRoaXMubGV2ZWwpXG4gICAgfVxufSIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL2NvbnRlbnQvbGV2ZWxcIlxuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gXCIuL2JvYXJkXCJcbmltcG9ydCB7IEhhdGVHcmFwaCB9IGZyb20gXCIuLi9jb250ZW50L2hhdGVHcmFwaFwiXG5pbXBvcnQgeyBQZW9wbGVHcmFwaCB9IGZyb20gXCIuLi9jb250ZW50L3Blb3BsZUdyYXBoXCJcbmltcG9ydCB7IEh1bWFuIH0gZnJvbSBcIi4uL2NvbnRlbnQvaHVtYW5cIlxuXG5leHBvcnQgY2xhc3MgSHVtYW5TdGFnZSB7XG4gICAgcHJpdmF0ZSBhbGxQZW9wbGVUZXh0czogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLlRleHQ+ID0gW11cbiAgICBwcml2YXRlIGFsbFBlb3BsZUNpcmNsZXM6IEFycmF5PFBoYXNlci5HYW1lT2JqZWN0cy5FbGxpcHNlPiA9IFtdXG4gICAgcHJpdmF0ZSBhbGxQZW9wbGVMaW5lczogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwPiA9IFtdXG4gICAgcHJpdmF0ZSBURVhUX0FMUEhBX09LID0gMVxuICAgIHByaXZhdGUgVEVYVF9BTFBIQV9CRCA9IDAuM1xuICAgIHByaXZhdGUgQ0lSQ0xFX0FMUEhBX09LID0gMC4xXG4gICAgcHJpdmF0ZSBDSVJDTEVfQUxQSEFfQkQgPSAwXG4gICAgcHJpdmF0ZSBwb3NpdGlvbnM6IEFycmF5PHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfT5cbiAgICBwcml2YXRlIHBvc2l0aW9uc0lubmVyOiBBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjZW5lOiBCb2FyZFNjZW5lLCBsZXZlbDogTGV2ZWwpIHtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IDQ1MFxuICAgICAgICBjb25zdCBjZW50ZXJZID0gMjAwXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDE1MFxuICAgICAgICBjb25zdCByYWRpdXNJbm5lciA9IDEwMFxuXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gbGV2ZWwuaHVtYW5zLm1hcCgoXywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogKGkgKyAwLjUpIC8gbGV2ZWwuaHVtYW5zLmxlbmd0aFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBjZW50ZXJYICsgTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbnNJbm5lciA9IGxldmVsLmh1bWFucy5tYXAoKF8sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIChpICsgMC41KSAvIGxldmVsLmh1bWFucy5sZW5ndGhcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogY2VudGVyWCArIE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1c0lubmVyLFxuICAgICAgICAgICAgICAgIHk6IGNlbnRlclkgKyBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXNJbm5lciAqIDAuOSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3IgKGxldCBpIGluIGxldmVsLmh1bWFucykge1xuICAgICAgICAgICAgbGV0IGh1bWFuID0gbGV2ZWwuaHVtYW5zW2ldXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb25zW2ldXG5cbiAgICAgICAgICAgIGxldCBpbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCAncG9ydHJhaXRfYmlnJywgaSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgLTAuMilcbiAgICAgICAgICAgICAgICAuc2V0U2NhbGUoMC4zKVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoaHVtYW4sIE51bWJlcihpKSlcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY2lyY2xlID0gc2NlbmUuYWRkLmVsbGlwc2UoMCwgMCwgODAsIDgwLCAweGNjY2NjYylcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICAgICAgICAgIC5zZXRBbHBoYSgoTnVtYmVyKGkpID09IDAgPyB0aGlzLkNJUkNMRV9BTFBIQV9PSyA6IHRoaXMuQ0lSQ0xFX0FMUEhBX0JEKSlcbiAgICAgICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KGh1bWFuLCBOdW1iZXIoaSkpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHRleHQgPSBzY2VuZS5hZGQudGV4dCgwLCAwLCBgJHtodW1hbi5uYW1lfWAsIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2UwZTBlMCcsXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1JvYm90bycsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxOHB4J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2V0T3JpZ2luKDAuNSwgMC41KVxuICAgICAgICAgICAgICAgIC5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAuc2V0QWxwaGEoTnVtYmVyKGkpID09IDAgPyB0aGlzLlRFWFRfQUxQSEFfT0sgOiB0aGlzLlRFWFRfQUxQSEFfQkQpXG4gICAgICAgICAgICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KGh1bWFuLCBOdW1iZXIoaSkpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2NlbmUuYWRkLmdyb3VwKFtpbWFnZSwgdGV4dCwgY2lyY2xlXSkuc2V0WFkocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcblxuICAgICAgICAgICAgLy8gVEJIIEkgaGF2ZSBubyBpZGVhIHdoeSB0aGlzIGlzIG5vdCByZWxhdGl2ZSB0byB0aGUgZ3JvdXAsIGJ1dCB3aGF0ZXZzXG4gICAgICAgICAgICB0ZXh0LnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyAxMDApXG4gICAgICAgICAgICBjaXJjbGUuc2V0UG9zaXRpb24ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIDQ1KVxuXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICE9IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NlbmUudHJpcFN1bW1hcnkuZmxpcEdvUGVvcGxlKGh1bWFuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLlRFWFRfQUxQSEFfQkQsIHRvOiB0aGlzLlRFWFRfQUxQSEFfT0sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNpcmNsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHBoYTogeyBmcm9tOiB0aGlzLkNJUkNMRV9BTFBIQV9CRCwgdG86IHRoaXMuQ0lSQ0xFX0FMUEhBX09LIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuVEVYVF9BTFBIQV9PSywgdG86IHRoaXMuVEVYVF9BTFBIQV9CRCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogY2lyY2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhOiB7IGZyb206IHRoaXMuQ0lSQ0xFX0FMUEhBX09LLCB0bzogdGhpcy5DSVJDTEVfQUxQSEFfQkQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRleHQub24oJ3BvaW50ZXJkb3duJywgb25DbGljaylcbiAgICAgICAgICAgICAgICBjaXJjbGUub24oJ3BvaW50ZXJkb3duJywgb25DbGljaylcbiAgICAgICAgICAgICAgICBpbWFnZS5vbigncG9pbnRlcmRvd24nLCBvbkNsaWNrKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVRleHRzLnB1c2godGV4dClcbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlQ2lyY2xlcy5wdXNoKGNpcmNsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVkcmF3TGluZXMobGV2ZWwpXG4gICAgfVxuXG4gICAgcHVibGljIGJsZWFjaFBlb3BsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmFsbFBlb3BsZVRleHRzKSB7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBlb3BsZVRleHRzW2ldLnNldEFscGhhKHRoaXMuVEVYVF9BTFBIQV9CRClcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBlb3BsZUNpcmNsZXNbaV0uc2V0QWxwaGEodGhpcy5DSVJDTEVfQUxQSEFfQkQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheShodW1hbjogSHVtYW4sIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmFsbFBlb3BsZUxpbmVzKSB7XG4gICAgICAgICAgICAvLyBJIHZlcnkgbXVjaCBhZG1pdCB0aGF0IHRoaXMgaXMgc3VwZXIgc2xvdyBhbmQgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgIC8vIEJVVCBXVEYgSVMgTk9UIEdST1VQIEFMUEhBIEVYUE9TRUQgUFVCTElDTFlcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzW2ldLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogKGNoaWxkIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5MaW5lKS5hbHBoYSwgdG86IDEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmFsbFBlb3BsZUxpbmVzW2ldLmNoaWxkcmVuLmdldEFycmF5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGNoaWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxwaGE6IHsgZnJvbTogKGNoaWxkIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5MaW5lKS5hbHBoYSwgdG86IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NlbmUucGhvbmUhLmRpc3BsYXkoaHVtYW4sIE51bWJlcihpbmRleCkpXG4gICAgfVxuXG4gICAgcHVibGljIHJlZHJhd0xpbmVzKGxldmVsOiBMZXZlbCkge1xuICAgICAgICBsZXQgcGVvcGxlR3JhcGggPSBsZXZlbC5mcmllbmRzaGlwTWFuYWdlci5wZW9wbGVHcmFwaFxuICAgICAgICBmb3IgKGxldCBoaTEgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICBsZXQgaHVtYW4xID0gbGV2ZWwuaHVtYW5zW2hpMV1cbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuc2NlbmUuYWRkLmdyb3VwKClcbiAgICAgICAgICAgICAgICAuc2V0WFkoMCwgNTApXG4gICAgICAgICAgICAgICAgLnNldEFscGhhKDApXG4gICAgICAgICAgICBmb3IgKGxldCBoaTIgaW4gbGV2ZWwuaHVtYW5zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGh1bWFuMiA9IGxldmVsLmh1bWFuc1toaTJdXG4gICAgICAgICAgICAgICAgaWYgKGhpMSA9PSBoaTIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgbGV0IHRhZ3MgPSBwZW9wbGVHcmFwaC5nZXRSZWxUYWdzKFtodW1hbjEubmFtZSwgaHVtYW4yLm5hbWVdKVxuICAgICAgICAgICAgICAgIGlmICh0YWdzLnNpemUgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGluZSA9IHRoaXMuc2NlbmUuYWRkLmxpbmUoMCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS54IC0gNSwgdGhpcy5wb3NpdGlvbnNJbm5lcltoaTFdLnkgKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS54IC0gNSwgdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLnkgKyAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDB4ZmZmZmZmLCAwLjEpXG4gICAgICAgICAgICAgICAgICAgIGxpbmUuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLmFkZChsaW5lKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBhdmdYID0gKHRoaXMucG9zaXRpb25zSW5uZXJbaGkxXS54ICsgdGhpcy5wb3NpdGlvbnNJbm5lcltoaTJdLngpIC8gMlxuICAgICAgICAgICAgICAgICAgICBsZXQgYXZnWSA9ICh0aGlzLnBvc2l0aW9uc0lubmVyW2hpMV0ueSArIHRoaXMucG9zaXRpb25zSW5uZXJbaGkyXS55KSAvIDJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXZnWCwgYXZnWSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKGF2Z1gsIGF2Z1ksICdyZWxfdGFncycpXG4gICAgICAgICAgICAgICAgICAgICAgIC5zZXRGcmFtZShBcnJheS5mcm9tKHRhZ3MpWzBdKVxuICAgICAgICAgICAgICAgICAgICAvLyAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbC5zZXRQb3NpdGlvbihhdmdYLCBhdmdZKVxuICAgICAgICAgICAgICAgICAgICBncm91cC5hZGQoc3ltYm9sKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWxsUGVvcGxlTGluZXMucHVzaChncm91cClcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4uL2NvbnRlbnQvbGV2ZWxcIlxuaW1wb3J0IHsgQm9hcmRTY2VuZSB9IGZyb20gXCIuL2JvYXJkXCJcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU3RhZ2Uge1xuICAgIHByaXZhdGUgYWxsTG9jYXRpb25JbWFnZTogQXJyYXk8UGhhc2VyLkdhbWVPYmplY3RzLkltYWdlPiA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogQm9hcmRTY2VuZSwgbGV2ZWw6IExldmVsKSB7XG4gICAgICAgIC8vIHNjZW5lLmFkZC5yZWN0YW5nbGUoNjgwLCAwLCAxMjAsIDUwMCwgMHhjY2NjY2MpXG4gICAgICAgIC8vICAgICAuc2V0T3JpZ2luKDAsIDApXG4gICAgICAgIGxldCB0ZXh0ID0gc2NlbmUuYWRkLnRleHQoNzAwLCAxMCwgJ0dvIHRvOicsIHsgZmlsbDogJ2JsYWNrJywgZm9udEZhbWlseTogJ1JvYm90bycgfSlcblxuXG4gICAgICAgIGZvciAobGV0IGkgaW4gbGV2ZWwubG9jYXRpb25zKSB7XG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBsZXZlbC5sb2NhdGlvbnNbaV1cbiAgICAgICAgICAgIGxldCBpbWcgPSBzY2VuZS5hZGQuaW1hZ2UoNzA5LCA1MyArIE51bWJlcihpKSAqIDEyMCwgJ2xvY2F0aW9uX3RodW1iJylcbiAgICAgICAgICAgICAgICAuc2V0RnJhbWUoaSlcbiAgICAgICAgICAgICAgICAuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgICAgIC5zZXREaXNwbGF5U2l6ZSg4MCwgODApXG4gICAgICAgICAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2NlbmUuZ29PdXQobG9jYXRpb24pXG4gICAgICAgICAgICAgICAgICAgIHNjZW5lLnRyaXBTdW1tYXJ5LmdvTG9jYXRpb24gPSBsb2NhdGlvblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmFsbExvY2F0aW9uSW1hZ2UucHVzaChpbWcpXG4gICAgICAgICAgICBsZXQgdGV4dCA9IHNjZW5lLmFkZC50ZXh0KDcwMCwgNDAgKyBOdW1iZXIoaSkgKiAxMjAsIGAke2xvY2F0aW9uLm5hbWV9YCwgeyBmaWxsOiAnYmxhY2snLCBmb250RmFtaWx5OiAnUm9ib3RvJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBmb3IgKGxldCBpbWcgb2YgdGhpcy5hbGxMb2NhdGlvbkltYWdlKSB7XG4gICAgICAgICAgICBpbWcuaW5wdXQuZW5hYmxlZCA9IHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tICcuLi9jb250ZW50L2h1bWFuJ1xuaW1wb3J0IHsgSHVtYW5UYWdNYXAgfSBmcm9tICcuLi9jb250ZW50L2VudGl0eVRhZ3MnXG5cbmV4cG9ydCBjbGFzcyBQaG9uZVN0YWdlIHtcbiAgICBwcml2YXRlIHBvcnRyYWl0IDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gICAgcHJpdmF0ZSB0ZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzY2VuZTogUGhhc2VyLlNjZW5lKSB7XG4gICAgICAgIC8vIHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgMjQwLCA1MDAsIDB4YWFhYWFhKVxuICAgICAgICAvLyAgICAgLnNldE9yaWdpbigwLCAwKVxuXG4gICAgICAgIHRoaXMucG9ydHJhaXQgPSBzY2VuZS5hZGQuaW1hZ2UoMjAsIDIwLCAncG9ydHJhaXRfYmlnJylcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMCwgMClcblxuICAgICAgICB0aGlzLnRleHQgPSBzY2VuZS5hZGQudGV4dCgxMCwgMjUwLCAnJywgeyBmaWxsOiAnYmxhY2snLCBmb250RmFtaWx5OiAnUm9ib3RvJyB9KVxuICAgICAgICAgICAgLnNldFdvcmRXcmFwV2lkdGgoMjMwKVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5KGh1bWFuOiBIdW1hbiwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBvcnRyYWl0LnNldEZyYW1lKGluZGV4KVxuICAgICAgICBsZXQgdGFnU3RyaW5nID0gQXJyYXkuZnJvbShodW1hbi50YWdzKS5tYXAoKHgpID0+IEh1bWFuVGFnTWFwW3hdKS5qb2luKCcsICcpXG4gICAgICAgIGxldCByZWxTdHJpbmcgPSBodW1hbi5yZWxhdGlvbnNoaXBzLmZpbHRlcih4ID0+IHgudGFncy5zaXplICE9IDApLmpvaW4oJ1xcblxcbicpXG4gICAgICAgIHRoaXMudGV4dC5zZXRUZXh0KGAke2h1bWFuLm5hbWV9XFxuJHt0YWdTdHJpbmd9XFxuXFxuJHtyZWxTdHJpbmd9YClcbiAgICB9XG59IiwiaW1wb3J0IHsgSHVtYW4gfSBmcm9tICcuLi9jb250ZW50L2h1bWFuJ1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9jb250ZW50L2xvY2F0aW9uJ1xuXG5leHBvcnQgY2xhc3MgVHJpcFN1bW1hcnkge1xuICAgIHB1YmxpYyBnb1Blb3BsZTogQXJyYXk8SHVtYW4+ID0gbmV3IEFycmF5PEh1bWFuPigpXG4gICAgcHVibGljIGdvTG9jYXRpb24/OiBMb2NhdGlvblxuXG4gICAgY29uc3RydWN0b3Ioc3BlY2lhbEd1ZXN0OiBIdW1hbikge1xuICAgICAgICB0aGlzLmdvUGVvcGxlLnB1c2goc3BlY2lhbEd1ZXN0KVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVHb1Blb3BsZShodW1hbjogSHVtYW4pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHByZXZTaXplID0gdGhpcy5nb1Blb3BsZS5sZW5ndGhcbiAgICAgICAgdGhpcy5nb1Blb3BsZSA9IHRoaXMuZ29QZW9wbGUuZmlsdGVyKHggPT4geC5uYW1lICE9PSBodW1hbi5uYW1lKVxuICAgICAgICByZXR1cm4gcHJldlNpemUgIT0gdGhpcy5nb1Blb3BsZS5sZW5ndGhcbiAgICB9XG5cbiAgICBwdWJsaWMgZmxpcEdvUGVvcGxlKGh1bWFuOiBIdW1hbik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5yZW1vdmVHb1Blb3BsZShodW1hbikpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IGRlbGV0ZWQsIHNvIGFkZFxuICAgICAgICAgICAgdGhpcy5nb1Blb3BsZS5wdXNoKGh1bWFuKVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVwYXJlKGxvY2F0aW9uOiBMb2NhdGlvbik6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLmdvTG9jYXRpb24gPSBsb2NhdGlvblxuICAgICAgICBpZiAodGhpcy5nb1Blb3BsZS5sZW5ndGggKzEgPCB0aGlzLmdvTG9jYXRpb24ubGltaXQubWluKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmdvUGVvcGxlLmxlbmd0aCArMSA+IHRoaXMuZ29Mb2NhdGlvbi5saW1pdC5tYXgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIExvYWRpbmdTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcHJpdmF0ZSBmYWRlcj86IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBwcml2YXRlIG1vY2tUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBrZXk6ICdsb2FkaW5nJyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdib2FyZF9iYWNrZ3JvdW5kJywgJ2JvYXJkX2JhY2tncm91bmQucG5nJylcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdyZWxfdGFncycsICdyZWxfdGFncy5wbmcnLCB7IGZyYW1lV2lkdGg6IDMwLCBmcmFtZUhlaWdodDogMzAgfSlcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0cmFpdF9iaWcnLCAncG9ydHJhaXRfYmlnLnBuZycsIHsgZnJhbWVXaWR0aDogMjAwLCBmcmFtZUhlaWdodDogMjAwIH0pXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnbG9jYXRpb25fdGh1bWInLCAnbG9jYXRpb25fdGh1bWIucG5nJywgeyBmcmFtZVdpZHRoOiAyMDAsIGZyYW1lSGVpZ2h0OiAyMDAgfSlcbiAgICAgICAgdGhpcy5mYWRlciA9IHRoaXMuYWRkLnJlY3RhbmdsZSgwLCAwLCA4MDAsIDUwMCwgMHgwKVxuICAgICAgICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgICAgICAgLnNldERlcHRoKDEwMDEpXG4gICAgICAgICAgICAuc2V0QWxwaGEoMSlcbiAgICAgICAgdGhpcy5tb2NrVGV4dCA9IHRoaXMuYWRkLnRleHQoMTAwLCAxMDAsICcnLCB7IGZpbGw6ICcjZmZmJywgZm9udEZhbWlseTogJ1JvYm90bycgfSlcbiAgICAgICAgICAgIC5zZXREZXB0aCgxMDAxKVxuICAgICAgICAgICAgLnNldEFscGhhKDApXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdtYW5hZ2VtZW50JylcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==