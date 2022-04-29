// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cqgHy":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9de4c2507b826fc7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jzLXg":[function(require,module,exports) {
/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */ !function(t, e) {
    module.exports = e(function() {
        try {
            return require("moment");
        } catch (t) {}
    }());
}(this, function(t1) {
    "use strict";
    t1 = t1 && t1.hasOwnProperty("default") ? t1.default : t1;
    var e1 = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    }, n1 = function(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }(function(t2) {
        var n2 = {};
        for(var i2 in e1)e1.hasOwnProperty(i2) && (n2[e1[i2]] = i2);
        var a2 = t2.exports = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: [
                    "hex"
                ]
            },
            keyword: {
                channels: 1,
                labels: [
                    "keyword"
                ]
            },
            ansi16: {
                channels: 1,
                labels: [
                    "ansi16"
                ]
            },
            ansi256: {
                channels: 1,
                labels: [
                    "ansi256"
                ]
            },
            hcg: {
                channels: 3,
                labels: [
                    "h",
                    "c",
                    "g"
                ]
            },
            apple: {
                channels: 3,
                labels: [
                    "r16",
                    "g16",
                    "b16"
                ]
            },
            gray: {
                channels: 1,
                labels: [
                    "gray"
                ]
            }
        };
        for(var r2 in a2)if (a2.hasOwnProperty(r2)) {
            if (!("channels" in a2[r2])) throw new Error("missing channels property: " + r2);
            if (!("labels" in a2[r2])) throw new Error("missing channel labels property: " + r2);
            if (a2[r2].labels.length !== a2[r2].channels) throw new Error("channel and label counts mismatch: " + r2);
            var o = a2[r2].channels, s = a2[r2].labels;
            delete a2[r2].channels, delete a2[r2].labels, Object.defineProperty(a2[r2], "channels", {
                value: o
            }), Object.defineProperty(a2[r2], "labels", {
                value: s
            });
        }
        a2.rgb.hsl = function(t) {
            var e, n, i = t[0] / 255, a = t[1] / 255, r = t[2] / 255, o = Math.min(i, a, r), s = Math.max(i, a, r), l = s - o;
            return s === o ? e = 0 : i === s ? e = (a - r) / l : a === s ? e = 2 + (r - i) / l : r === s && (e = 4 + (i - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (o + s) / 2, [
                e,
                100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)),
                100 * n
            ];
        }, a2.rgb.hsv = function(t3) {
            var e, n, i, a, r, o = t3[0] / 255, s = t3[1] / 255, l = t3[2] / 255, u = Math.max(o, s, l), d = u - Math.min(o, s, l), h = function(t) {
                return (u - t) / 6 / d + .5;
            };
            return 0 === d ? a = r = 0 : (r = d / u, e = h(o), n = h(s), i = h(l), o === u ? a = i - n : s === u ? a = 1 / 3 + e - i : l === u && (a = 2 / 3 + n - e), a < 0 ? a += 1 : a > 1 && (a -= 1)), [
                360 * a,
                100 * r,
                100 * u
            ];
        }, a2.rgb.hwb = function(t) {
            var e = t[0], n = t[1], i = t[2];
            return [
                a2.rgb.hsl(t)[0],
                100 * (1 / 255 * Math.min(e, Math.min(n, i))),
                100 * (i = 1 - 1 / 255 * Math.max(e, Math.max(n, i)))
            ];
        }, a2.rgb.cmyk = function(t) {
            var e, n = t[0] / 255, i = t[1] / 255, a = t[2] / 255;
            return [
                100 * ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) || 0),
                100 * ((1 - i - e) / (1 - e) || 0),
                100 * ((1 - a - e) / (1 - e) || 0),
                100 * e
            ];
        }, a2.rgb.keyword = function(t) {
            var i = n2[t];
            if (i) return i;
            var a, r, o, s = 1 / 0;
            for(var l in e1)if (e1.hasOwnProperty(l)) {
                var u = e1[l], d = (r = t, o = u, Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2) + Math.pow(r[2] - o[2], 2));
                d < s && (s = d, a = l);
            }
            return a;
        }, a2.keyword.rgb = function(t) {
            return e1[t];
        }, a2.rgb.xyz = function(t) {
            var e = t[0] / 255, n = t[1] / 255, i = t[2] / 255;
            return [
                100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)),
                100 * (.2126 * e + .7152 * n + .0722 * i),
                100 * (.0193 * e + .1192 * n + .9505 * i)
            ];
        }, a2.rgb.lab = function(t) {
            var e = a2.rgb.xyz(t), n = e[0], i = e[1], r = e[2];
            return i /= 100, r /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [
                116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16,
                500 * (n - i),
                200 * (i - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))
            ];
        }, a2.hsl.rgb = function(t) {
            var e, n, i, a, r, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
            if (0 === s) return [
                r = 255 * l,
                r,
                r
            ];
            e = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), a = [
                0,
                0,
                0
            ];
            for(var u = 0; u < 3; u++)(i = o + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, r = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * r;
            return a;
        }, a2.hsl.hsv = function(t) {
            var e = t[0], n = t[1] / 100, i = t[2] / 100, a = n, r = Math.max(i, .01);
            return n *= (i *= 2) <= 1 ? i : 2 - i, a *= r <= 1 ? r : 2 - r, [
                e,
                100 * (0 === i ? 2 * a / (r + a) : 2 * n / (i + n)),
                100 * ((i + n) / 2)
            ];
        }, a2.hsv.rgb = function(t) {
            var e = t[0] / 60, n = t[1] / 100, i = t[2] / 100, a = Math.floor(e) % 6, r = e - Math.floor(e), o = 255 * i * (1 - n), s = 255 * i * (1 - n * r), l = 255 * i * (1 - n * (1 - r));
            switch(i *= 255, a){
                case 0:
                    return [
                        i,
                        l,
                        o
                    ];
                case 1:
                    return [
                        s,
                        i,
                        o
                    ];
                case 2:
                    return [
                        o,
                        i,
                        l
                    ];
                case 3:
                    return [
                        o,
                        s,
                        i
                    ];
                case 4:
                    return [
                        l,
                        o,
                        i
                    ];
                case 5:
                    return [
                        i,
                        o,
                        s
                    ];
            }
        }, a2.hsv.hsl = function(t) {
            var e, n, i, a = t[0], r = t[1] / 100, o = t[2] / 100, s = Math.max(o, .01);
            return i = (2 - r) * o, n = r * s, [
                a,
                100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0),
                100 * (i /= 2)
            ];
        }, a2.hwb.rgb = function(t) {
            var e, n, i, a, r, o, s, l = t[0] / 360, u = t[1] / 100, d = t[2] / 100, h = u + d;
            switch(h > 1 && (u /= h, d /= h), i = 6 * l - (e = Math.floor(6 * l)), 0 != (1 & e) && (i = 1 - i), a = u + i * ((n = 1 - d) - u), e){
                default:
                case 6:
                case 0:
                    r = n, o = a, s = u;
                    break;
                case 1:
                    r = a, o = n, s = u;
                    break;
                case 2:
                    r = u, o = n, s = a;
                    break;
                case 3:
                    r = u, o = a, s = n;
                    break;
                case 4:
                    r = a, o = u, s = n;
                    break;
                case 5:
                    r = n, o = u, s = a;
            }
            return [
                255 * r,
                255 * o,
                255 * s
            ];
        }, a2.cmyk.rgb = function(t) {
            var e = t[0] / 100, n = t[1] / 100, i = t[2] / 100, a = t[3] / 100;
            return [
                255 * (1 - Math.min(1, e * (1 - a) + a)),
                255 * (1 - Math.min(1, n * (1 - a) + a)),
                255 * (1 - Math.min(1, i * (1 - a) + a))
            ];
        }, a2.xyz.rgb = function(t) {
            var e, n, i, a = t[0] / 100, r = t[1] / 100, o = t[2] / 100;
            return n = -0.9689 * a + 1.8758 * r + .0415 * o, i = .0557 * a + -0.204 * r + 1.057 * o, e = (e = 3.2406 * a + -1.5372 * r + -0.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : 12.92 * i, [
                255 * (e = Math.min(Math.max(0, e), 1)),
                255 * (n = Math.min(Math.max(0, n), 1)),
                255 * (i = Math.min(Math.max(0, i), 1))
            ];
        }, a2.xyz.lab = function(t) {
            var e = t[0], n = t[1], i = t[2];
            return n /= 100, i /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [
                116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16,
                500 * (e - n),
                200 * (n - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))
            ];
        }, a2.lab.xyz = function(t) {
            var e, n, i, a = t[0];
            e = t[1] / 500 + (n = (a + 16) / 116), i = n - t[2] / 200;
            var r = Math.pow(n, 3), o = Math.pow(e, 3), s = Math.pow(i, 3);
            return n = r > .008856 ? r : (n - 16 / 116) / 7.787, e = o > .008856 ? o : (e - 16 / 116) / 7.787, i = s > .008856 ? s : (i - 16 / 116) / 7.787, [
                e *= 95.047,
                n *= 100,
                i *= 108.883
            ];
        }, a2.lab.lch = function(t) {
            var e, n = t[0], i = t[1], a = t[2];
            return (e = 360 * Math.atan2(a, i) / 2 / Math.PI) < 0 && (e += 360), [
                n,
                Math.sqrt(i * i + a * a),
                e
            ];
        }, a2.lch.lab = function(t) {
            var e, n = t[0], i = t[1];
            return e = t[2] / 360 * 2 * Math.PI, [
                n,
                i * Math.cos(e),
                i * Math.sin(e)
            ];
        }, a2.rgb.ansi16 = function(t) {
            var e = t[0], n = t[1], i = t[2], r = 1 in arguments ? arguments[1] : a2.rgb.hsv(t)[2];
            if (0 === (r = Math.round(r / 50))) return 30;
            var o = 30 + (Math.round(i / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
            return 2 === r && (o += 60), o;
        }, a2.hsv.ansi16 = function(t) {
            return a2.rgb.ansi16(a2.hsv.rgb(t), t[2]);
        }, a2.rgb.ansi256 = function(t) {
            var e = t[0], n = t[1], i = t[2];
            return e === n && n === i ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(i / 255 * 5);
        }, a2.ansi16.rgb = function(t) {
            var e = t % 10;
            if (0 === e || 7 === e) return t > 50 && (e += 3.5), [
                e = e / 10.5 * 255,
                e,
                e
            ];
            var n = .5 * (1 + ~~(t > 50));
            return [
                (1 & e) * n * 255,
                (e >> 1 & 1) * n * 255,
                (e >> 2 & 1) * n * 255
            ];
        }, a2.ansi256.rgb = function(t) {
            if (t >= 232) {
                var e = 10 * (t - 232) + 8;
                return [
                    e,
                    e,
                    e
                ];
            }
            var n;
            return t -= 16, [
                Math.floor(t / 36) / 5 * 255,
                Math.floor((n = t % 36) / 6) / 5 * 255,
                n % 6 / 5 * 255
            ];
        }, a2.rgb.hex = function(t) {
            var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
            return "000000".substring(e.length) + e;
        }, a2.hex.rgb = function(t4) {
            var e = t4.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!e) return [
                0,
                0,
                0
            ];
            var n = e[0];
            3 === e[0].length && (n = n.split("").map(function(t) {
                return t + t;
            }).join(""));
            var i = parseInt(n, 16);
            return [
                i >> 16 & 255,
                i >> 8 & 255,
                255 & i
            ];
        }, a2.rgb.hcg = function(t) {
            var e, n = t[0] / 255, i = t[1] / 255, a = t[2] / 255, r = Math.max(Math.max(n, i), a), o = Math.min(Math.min(n, i), a), s = r - o;
            return e = s <= 0 ? 0 : r === n ? (i - a) / s % 6 : r === i ? 2 + (a - n) / s : 4 + (n - i) / s + 4, e /= 6, [
                360 * (e %= 1),
                100 * s,
                100 * (s < 1 ? o / (1 - s) : 0)
            ];
        }, a2.hsl.hcg = function(t) {
            var e = t[1] / 100, n = t[2] / 100, i = 1, a = 0;
            return (i = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (a = (n - .5 * i) / (1 - i)), [
                t[0],
                100 * i,
                100 * a
            ];
        }, a2.hsv.hcg = function(t) {
            var e = t[1] / 100, n = t[2] / 100, i = e * n, a = 0;
            return i < 1 && (a = (n - i) / (1 - i)), [
                t[0],
                100 * i,
                100 * a
            ];
        }, a2.hcg.rgb = function(t) {
            var e = t[0] / 360, n = t[1] / 100, i = t[2] / 100;
            if (0 === n) return [
                255 * i,
                255 * i,
                255 * i
            ];
            var a, r = [
                0,
                0,
                0
            ], o = e % 1 * 6, s = o % 1, l = 1 - s;
            switch(Math.floor(o)){
                case 0:
                    r[0] = 1, r[1] = s, r[2] = 0;
                    break;
                case 1:
                    r[0] = l, r[1] = 1, r[2] = 0;
                    break;
                case 2:
                    r[0] = 0, r[1] = 1, r[2] = s;
                    break;
                case 3:
                    r[0] = 0, r[1] = l, r[2] = 1;
                    break;
                case 4:
                    r[0] = s, r[1] = 0, r[2] = 1;
                    break;
                default:
                    r[0] = 1, r[1] = 0, r[2] = l;
            }
            return a = (1 - n) * i, [
                255 * (n * r[0] + a),
                255 * (n * r[1] + a),
                255 * (n * r[2] + a)
            ];
        }, a2.hcg.hsv = function(t) {
            var e = t[1] / 100, n = e + t[2] / 100 * (1 - e), i = 0;
            return n > 0 && (i = e / n), [
                t[0],
                100 * i,
                100 * n
            ];
        }, a2.hcg.hsl = function(t) {
            var e = t[1] / 100, n = t[2] / 100 * (1 - e) + .5 * e, i = 0;
            return n > 0 && n < .5 ? i = e / (2 * n) : n >= .5 && n < 1 && (i = e / (2 * (1 - n))), [
                t[0],
                100 * i,
                100 * n
            ];
        }, a2.hcg.hwb = function(t) {
            var e = t[1] / 100, n = e + t[2] / 100 * (1 - e);
            return [
                t[0],
                100 * (n - e),
                100 * (1 - n)
            ];
        }, a2.hwb.hcg = function(t) {
            var e = t[1] / 100, n = 1 - t[2] / 100, i = n - e, a = 0;
            return i < 1 && (a = (n - i) / (1 - i)), [
                t[0],
                100 * i,
                100 * a
            ];
        }, a2.apple.rgb = function(t) {
            return [
                t[0] / 65535 * 255,
                t[1] / 65535 * 255,
                t[2] / 65535 * 255
            ];
        }, a2.rgb.apple = function(t) {
            return [
                t[0] / 255 * 65535,
                t[1] / 255 * 65535,
                t[2] / 255 * 65535
            ];
        }, a2.gray.rgb = function(t) {
            return [
                t[0] / 100 * 255,
                t[0] / 100 * 255,
                t[0] / 100 * 255
            ];
        }, a2.gray.hsl = a2.gray.hsv = function(t) {
            return [
                0,
                0,
                t[0]
            ];
        }, a2.gray.hwb = function(t) {
            return [
                0,
                100,
                t[0]
            ];
        }, a2.gray.cmyk = function(t) {
            return [
                0,
                0,
                0,
                t[0]
            ];
        }, a2.gray.lab = function(t) {
            return [
                t[0],
                0,
                0
            ];
        }, a2.gray.hex = function(t) {
            var e = 255 & Math.round(t[0] / 100 * 255), n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
            return "000000".substring(n.length) + n;
        }, a2.rgb.gray = function(t) {
            return [
                (t[0] + t[1] + t[2]) / 3 / 255 * 100
            ];
        };
    });
    n1.rgb, n1.hsl, n1.hsv, n1.hwb, n1.cmyk, n1.xyz, n1.lab, n1.lch, n1.hex, n1.keyword, n1.ansi16, n1.ansi256, n1.hcg, n1.apple, n1.gray;
    function i1(t5) {
        var e2 = function() {
            for(var t = {}, e = Object.keys(n1), i = e.length, a = 0; a < i; a++)t[e[a]] = {
                distance: -1,
                parent: null
            };
            return t;
        }(), i3 = [
            t5
        ];
        for(e2[t5].distance = 0; i3.length;)for(var a3 = i3.pop(), r = Object.keys(n1[a3]), o = r.length, s = 0; s < o; s++){
            var l = r[s], u = e2[l];
            -1 === u.distance && (u.distance = e2[a3].distance + 1, u.parent = a3, i3.unshift(l));
        }
        return e2;
    }
    function a1(t, e) {
        return function(n) {
            return e(t(n));
        };
    }
    function r1(t, e) {
        for(var i = [
            e[t].parent,
            t
        ], r = n1[e[t].parent][t], o = e[t].parent; e[o].parent;)i.unshift(e[o].parent), r = a1(n1[e[o].parent][o], r), o = e[o].parent;
        return r.conversion = i, r;
    }
    var o1 = {};
    Object.keys(n1).forEach(function(t6) {
        o1[t6] = {}, Object.defineProperty(o1[t6], "channels", {
            value: n1[t6].channels
        }), Object.defineProperty(o1[t6], "labels", {
            value: n1[t6].labels
        });
        var e3 = function(t) {
            for(var e = i1(t), n = {}, a = Object.keys(e), o = a.length, s = 0; s < o; s++){
                var l = a[s];
                null !== e[l].parent && (n[l] = r1(l, e));
            }
            return n;
        }(t6);
        Object.keys(e3).forEach(function(n3) {
            var i4 = e3[n3];
            o1[t6][n3] = function(t) {
                var e4 = function(e) {
                    if (null == e) return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n) for(var i = n.length, a = 0; a < i; a++)n[a] = Math.round(n[a]);
                    return n;
                };
                return "conversion" in t && (e4.conversion = t.conversion), e4;
            }(i4), o1[t6][n3].raw = function(t) {
                var e5 = function(e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e));
                };
                return "conversion" in t && (e5.conversion = t.conversion), e5;
            }(i4);
        });
    });
    var s1 = o1, l1 = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    }, u1 = {
        getRgba: d1,
        getHsla: h1,
        getRgb: function(t) {
            var e = d1(t);
            return e && e.slice(0, 3);
        },
        getHsl: function(t) {
            var e = h1(t);
            return e && e.slice(0, 3);
        },
        getHwb: c1,
        getAlpha: function(t) {
            var e = d1(t);
            if (e) return e[3];
            if (e = h1(t)) return e[3];
            if (e = c1(t)) return e[3];
        },
        hexString: function(t, e) {
            e = void 0 !== e && 3 === t.length ? e : t[3];
            return "#" + v1(t[0]) + v1(t[1]) + v1(t[2]) + (e >= 0 && e < 1 ? v1(Math.round(255 * e)) : "");
        },
        rgbString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return f1(t, e);
            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: f1,
        percentString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return g1(t, e);
            var n = Math.round(t[0] / 255 * 100), i = Math.round(t[1] / 255 * 100), a = Math.round(t[2] / 255 * 100);
            return "rgb(" + n + "%, " + i + "%, " + a + "%)";
        },
        percentaString: g1,
        hslString: function(t, e) {
            if (e < 1 || t[3] && t[3] < 1) return p1(t, e);
            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: p1,
        hwbString: function(t, e) {
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function(t) {
            return b1[t.slice(0, 3)];
        }
    };
    function d1(t) {
        if (t) {
            var e = [
                0,
                0,
                0
            ], n = 1, i = t.match(/^#([a-fA-F0-9]{3,4})$/i), a = "";
            if (i) {
                a = (i = i[1])[3];
                for(var r = 0; r < e.length; r++)e[r] = parseInt(i[r] + i[r], 16);
                a && (n = Math.round(parseInt(a + a, 16) / 255 * 100) / 100);
            } else if (i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                a = i[2], i = i[1];
                for(r = 0; r < e.length; r++)e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
                a && (n = Math.round(parseInt(a, 16) / 255 * 100) / 100);
            } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for(r = 0; r < e.length; r++)e[r] = parseInt(i[r + 1]);
                n = parseFloat(i[4]);
            } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for(r = 0; r < e.length; r++)e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
                n = parseFloat(i[4]);
            } else if (i = t.match(/(\w+)/)) {
                if ("transparent" == i[1]) return [
                    0,
                    0,
                    0,
                    0
                ];
                if (!(e = l1[i[1]])) return;
            }
            for(r = 0; r < e.length; r++)e[r] = m1(e[r], 0, 255);
            return n = n || 0 == n ? m1(n, 0, 1) : 1, e[3] = n, e;
        }
    }
    function h1(t) {
        if (t) {
            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [
                    m1(parseInt(e[1]), 0, 360),
                    m1(parseFloat(e[2]), 0, 100),
                    m1(parseFloat(e[3]), 0, 100),
                    m1(isNaN(n) ? 1 : n, 0, 1)
                ];
            }
        }
    }
    function c1(t) {
        if (t) {
            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e) {
                var n = parseFloat(e[4]);
                return [
                    m1(parseInt(e[1]), 0, 360),
                    m1(parseFloat(e[2]), 0, 100),
                    m1(parseFloat(e[3]), 0, 100),
                    m1(isNaN(n) ? 1 : n, 0, 1)
                ];
            }
        }
    }
    function f1(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
    }
    function g1(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
    }
    function p1(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
    }
    function m1(t, e, n) {
        return Math.min(Math.max(e, t), n);
    }
    function v1(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
    }
    var b1 = {};
    for(var x1 in l1)b1[l1[x1]] = x1;
    var y1 = function(t) {
        var e;
        return t instanceof y1 ? t : this instanceof y1 ? (this.valid = !1, this.values = {
            rgb: [
                0,
                0,
                0
            ],
            hsl: [
                0,
                0,
                0
            ],
            hsv: [
                0,
                0,
                0
            ],
            hwb: [
                0,
                0,
                0
            ],
            cmyk: [
                0,
                0,
                0,
                0
            ],
            alpha: 1
        }, void ("string" == typeof t ? (e = u1.getRgba(t)) ? this.setValues("rgb", e) : (e = u1.getHsla(t)) ? this.setValues("hsl", e) : (e = u1.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new y1(t);
    };
    y1.prototype = {
        isValid: function() {
            return this.valid;
        },
        rgb: function() {
            return this.setSpace("rgb", arguments);
        },
        hsl: function() {
            return this.setSpace("hsl", arguments);
        },
        hsv: function() {
            return this.setSpace("hsv", arguments);
        },
        hwb: function() {
            return this.setSpace("hwb", arguments);
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments);
        },
        rgbArray: function() {
            return this.values.rgb;
        },
        hslArray: function() {
            return this.values.hsl;
        },
        hsvArray: function() {
            return this.values.hsv;
        },
        hwbArray: function() {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([
                t.alpha
            ]) : t.hwb;
        },
        cmykArray: function() {
            return this.values.cmyk;
        },
        rgbaArray: function() {
            var t = this.values;
            return t.rgb.concat([
                t.alpha
            ]);
        },
        hslaArray: function() {
            var t = this.values;
            return t.hsl.concat([
                t.alpha
            ]);
        },
        alpha: function(t) {
            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function(t) {
            return this.setChannel("rgb", 0, t);
        },
        green: function(t) {
            return this.setChannel("rgb", 1, t);
        },
        blue: function(t) {
            return this.setChannel("rgb", 2, t);
        },
        hue: function(t) {
            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function(t) {
            return this.setChannel("hsl", 1, t);
        },
        lightness: function(t) {
            return this.setChannel("hsl", 2, t);
        },
        saturationv: function(t) {
            return this.setChannel("hsv", 1, t);
        },
        whiteness: function(t) {
            return this.setChannel("hwb", 1, t);
        },
        blackness: function(t) {
            return this.setChannel("hwb", 2, t);
        },
        value: function(t) {
            return this.setChannel("hsv", 2, t);
        },
        cyan: function(t) {
            return this.setChannel("cmyk", 0, t);
        },
        magenta: function(t) {
            return this.setChannel("cmyk", 1, t);
        },
        yellow: function(t) {
            return this.setChannel("cmyk", 2, t);
        },
        black: function(t) {
            return this.setChannel("cmyk", 3, t);
        },
        hexString: function() {
            return u1.hexString(this.values.rgb);
        },
        rgbString: function() {
            return u1.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
            return u1.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
            return u1.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
            return u1.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
            return u1.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
            return u1.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
            return u1.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function() {
            var t = this.values.rgb;
            return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function() {
            for(var t = this.values.rgb, e = [], n = 0; n < t.length; n++){
                var i = t[n] / 255;
                e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
            }
            return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function(t) {
            var e = this.luminosity(), n = t.luminosity();
            return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function(t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function() {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function() {
            return !this.dark();
        },
        negate: function() {
            for(var t = [], e = 0; e < 3; e++)t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this;
        },
        lighten: function(t) {
            var e = this.values.hsl;
            return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function(t) {
            var e = this.values.hsl;
            return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function(t) {
            var e = this.values.hsl;
            return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function(t) {
            var e = this.values.hsl;
            return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function(t) {
            var e = this.values.hwb;
            return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function(t) {
            var e = this.values.hwb;
            return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function() {
            var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
            return this.setValues("rgb", [
                e,
                e,
                e
            ]), this;
        },
        clearer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function(t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this;
        },
        rotate: function(t) {
            var e = this.values.hsl, n = (e[0] + t) % 360;
            return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
        },
        mix: function(t, e) {
            var n = t, i = void 0 === e ? .5 : e, a = 2 * i - 1, r = this.alpha() - n.alpha(), o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2, s = 1 - o;
            return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i));
        },
        toJSON: function() {
            return this.rgb();
        },
        clone: function() {
            var t, e, n = new y1, i = this.values, a = n.values;
            for(var r in i)i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = ({}).toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
            return n;
        }
    }, y1.prototype.spaces = {
        rgb: [
            "red",
            "green",
            "blue"
        ],
        hsl: [
            "hue",
            "saturation",
            "lightness"
        ],
        hsv: [
            "hue",
            "saturation",
            "value"
        ],
        hwb: [
            "hue",
            "whiteness",
            "blackness"
        ],
        cmyk: [
            "cyan",
            "magenta",
            "yellow",
            "black"
        ]
    }, y1.prototype.maxes = {
        rgb: [
            255,
            255,
            255
        ],
        hsl: [
            360,
            100,
            100
        ],
        hsv: [
            360,
            100,
            100
        ],
        hwb: [
            360,
            100,
            100
        ],
        cmyk: [
            100,
            100,
            100,
            100
        ]
    }, y1.prototype.getValues = function(t) {
        for(var e = this.values, n = {}, i = 0; i < t.length; i++)n[t.charAt(i)] = e[t][i];
        return 1 !== e.alpha && (n.a = e.alpha), n;
    }, y1.prototype.setValues = function(t, e) {
        var n, i, a = this.values, r = this.spaces, o = this.maxes, l = 1;
        if (this.valid = !0, "alpha" === t) l = e;
        else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];
        else if (void 0 !== e[t.charAt(0)]) {
            for(n = 0; n < t.length; n++)a[t][n] = e[t.charAt(n)];
            l = e.a;
        } else if (void 0 !== e[r[t][0]]) {
            var u = r[t];
            for(n = 0; n < t.length; n++)a[t][n] = e[u[n]];
            l = e.alpha;
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
        for(n = 0; n < t.length; n++)i = Math.max(0, Math.min(o[t][n], a[t][n])), a[t][n] = Math.round(i);
        for(var d in r)d !== t && (a[d] = s1[t][d](a[t]));
        return !0;
    }, y1.prototype.setSpace = function(t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
    }, y1.prototype.setChannel = function(t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
    }, "undefined" != typeof window && (window.Color = y1);
    var _1 = y1;
    function k1(t) {
        return -1 === [
            "__proto__",
            "prototype",
            "constructor"
        ].indexOf(t);
    }
    var w1, M1 = {
        noop: function() {},
        uid: (w1 = 0, function() {
            return w1++;
        }),
        isNullOrUndef: function(t) {
            return null == t;
        },
        isArray: function(t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            var e = Object.prototype.toString.call(t);
            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
        },
        isObject: function(t) {
            return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        isFinite: function(t) {
            return ("number" == typeof t || t instanceof Number) && isFinite(t);
        },
        valueOrDefault: function(t, e) {
            return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function(t, e, n) {
            return M1.valueOrDefault(M1.isArray(t) ? t[e] : t, n);
        },
        callback: function(t, e, n) {
            if (t && "function" == typeof t.call) return t.apply(n, e);
        },
        each: function(t, e, n, i) {
            var a, r, o;
            if (M1.isArray(t)) {
                if (r = t.length, i) for(a = r - 1; a >= 0; a--)e.call(n, t[a], a);
                else for(a = 0; a < r; a++)e.call(n, t[a], a);
            } else if (M1.isObject(t)) for(r = (o = Object.keys(t)).length, a = 0; a < r; a++)e.call(n, t[o[a]], o[a]);
        },
        arrayEquals: function(t, e) {
            var n, i, a, r;
            if (!t || !e || t.length !== e.length) return !1;
            for(n = 0, i = t.length; n < i; ++n)if (a = t[n], r = e[n], a instanceof Array && r instanceof Array) {
                if (!M1.arrayEquals(a, r)) return !1;
            } else if (a !== r) return !1;
            return !0;
        },
        clone: function(t) {
            if (M1.isArray(t)) return t.map(M1.clone);
            if (M1.isObject(t)) {
                for(var e = Object.create(t), n = Object.keys(t), i = n.length, a = 0; a < i; ++a)e[n[a]] = M1.clone(t[n[a]]);
                return e;
            }
            return t;
        },
        _merger: function(t, e, n, i) {
            if (k1(t)) {
                var a = e[t], r = n[t];
                M1.isObject(a) && M1.isObject(r) ? M1.merge(a, r, i) : e[t] = M1.clone(r);
            }
        },
        _mergerIf: function(t, e, n) {
            if (k1(t)) {
                var i = e[t], a = n[t];
                M1.isObject(i) && M1.isObject(a) ? M1.mergeIf(i, a) : e.hasOwnProperty(t) || (e[t] = M1.clone(a));
            }
        },
        merge: function(t, e, n) {
            var i, a, r, o, s, l = M1.isArray(e) ? e : [
                e
            ], u = l.length;
            if (!M1.isObject(t)) return t;
            for(i = (n = n || {}).merger || M1._merger, a = 0; a < u; ++a)if (e = l[a], M1.isObject(e)) for(s = 0, o = (r = Object.keys(e)).length; s < o; ++s)i(r[s], t, e, n);
            return t;
        },
        mergeIf: function(t, e) {
            return M1.merge(t, e, {
                merger: M1._mergerIf
            });
        },
        extend: Object.assign || function(t7) {
            return M1.merge(t7, [].slice.call(arguments, 1), {
                merger: function(t, e, n) {
                    e[t] = n[t];
                }
            });
        },
        inherits: function(t) {
            var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                return e.apply(this, arguments);
            }, i = function() {
                this.constructor = n;
            };
            return i.prototype = e.prototype, n.prototype = new i, n.extend = M1.inherits, t && M1.extend(n.prototype, t), n.__super__ = e.prototype, n;
        },
        _deprecated: function(t, e, n, i) {
            void 0 !== e && console.warn(t + ': "' + n + '" is deprecated. Please use "' + i + '" instead');
        }
    }, S1 = M1;
    M1.callCallback = M1.callback, M1.indexOf = function(t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
    }, M1.getValueOrDefault = M1.valueOrDefault, M1.getValueAtIndexOrDefault = M1.valueAtIndexOrDefault;
    var C1 = {
        linear: function(t) {
            return t;
        },
        easeInQuad: function(t) {
            return t * t;
        },
        easeOutQuad: function(t) {
            return -t * (t - 2);
        },
        easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function(t) {
            return t * t * t;
        },
        easeOutCubic: function(t) {
            return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function(t) {
            return t * t * t * t;
        },
        easeOutQuart: function(t) {
            return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function(t) {
            return t * t * t * t * t;
        },
        easeOutQuint: function(t) {
            return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function(t) {
            return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function(t) {
            return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function(t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function(t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function(t) {
            return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function(t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        },
        easeOutElastic: function(t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        },
        easeInOutElastic: function(t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -0.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
        },
        easeInBack: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        easeOutBack: function(t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function(t) {
            return 1 - C1.easeOutBounce(1 - t);
        },
        easeOutBounce: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function(t) {
            return t < .5 ? .5 * C1.easeInBounce(2 * t) : .5 * C1.easeOutBounce(2 * t - 1) + .5;
        }
    }, P1 = {
        effects: C1
    };
    S1.easingEffects = C1;
    var A1 = Math.PI, D1 = A1 / 180, T1 = 2 * A1, I1 = A1 / 2, F1 = A1 / 4, O = 2 * A1 / 3, L = {
        clear: function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function(t, e, n, i, a, r) {
            if (r) {
                var o = Math.min(r, a / 2, i / 2), s = e + o, l = n + o, u = e + i - o, d = n + a - o;
                t.moveTo(e, l), s < u && l < d ? (t.arc(s, l, o, -A1, -I1), t.arc(u, l, o, -I1, 0), t.arc(u, d, o, 0, I1), t.arc(s, d, o, I1, A1)) : s < u ? (t.moveTo(s, n), t.arc(u, l, o, -I1, I1), t.arc(s, l, o, I1, A1 + I1)) : l < d ? (t.arc(s, l, o, -A1, 0), t.arc(s, d, o, 0, A1)) : t.arc(s, l, o, -A1, A1), t.closePath(), t.moveTo(e, n);
            } else t.rect(e, n, i, a);
        },
        drawPoint: function(t, e, n, i, a, r) {
            var o, s, l, u, d, h = (r || 0) * D1;
            if (e && "object" == typeof e && ("[object HTMLImageElement]" === (o = e.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, a), t.rotate(h), t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height), void t.restore();
            if (!(isNaN(n) || n <= 0)) {
                switch(t.beginPath(), e){
                    default:
                        t.arc(i, a, n, 0, T1), t.closePath();
                        break;
                    case "triangle":
                        t.moveTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += O, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), h += O, t.lineTo(i + Math.sin(h) * n, a - Math.cos(h) * n), t.closePath();
                        break;
                    case "rectRounded":
                        u = n - (d = .516 * n), s = Math.cos(h + F1) * u, l = Math.sin(h + F1) * u, t.arc(i - s, a - l, d, h - A1, h - I1), t.arc(i + l, a - s, d, h - I1, h), t.arc(i + s, a + l, d, h, h + I1), t.arc(i - l, a + s, d, h + I1, h + A1), t.closePath();
                        break;
                    case "rect":
                        if (!r) {
                            u = Math.SQRT1_2 * n, t.rect(i - u, a - u, 2 * u, 2 * u);
                            break;
                        }
                        h += F1;
                    case "rectRot":
                        s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + l, a - s), t.lineTo(i + s, a + l), t.lineTo(i - l, a + s), t.closePath();
                        break;
                    case "crossRot":
                        h += F1;
                    case "cross":
                        s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                        break;
                    case "star":
                        s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s), h += F1, s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l), t.moveTo(i + l, a - s), t.lineTo(i - l, a + s);
                        break;
                    case "line":
                        s = Math.cos(h) * n, l = Math.sin(h) * n, t.moveTo(i - s, a - l), t.lineTo(i + s, a + l);
                        break;
                    case "dash":
                        t.moveTo(i, a), t.lineTo(i + Math.cos(h) * n, a + Math.sin(h) * n);
                }
                t.fill(), t.stroke();
            }
        },
        _isPointInArea: function(t, e) {
            return t.x > e.left - 1e-6 && t.x < e.right + 1e-6 && t.y > e.top - 1e-6 && t.y < e.bottom + 1e-6;
        },
        clipArea: function(t, e) {
            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function(t) {
            t.restore();
        },
        lineTo: function(t, e, n, i) {
            var a = n.steppedLine;
            if (a) {
                if ("middle" === a) {
                    var r = (e.x + n.x) / 2;
                    t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
                } else "after" === a && !i || "after" !== a && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y);
            } else n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
        }
    }, R = L;
    S1.clear = L.clear, S1.drawRoundedRectangle = function(t) {
        t.beginPath(), L.roundedRect.apply(L, arguments);
    };
    var z = {
        _set: function(t, e) {
            return S1.merge(this[t] || (this[t] = {}), e);
        }
    };
    z._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
    });
    var N = z, B = S1.valueOrDefault;
    var E = {
        toLineHeight: function(t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch(t = +n[2], n[3]){
                case "px":
                    return t;
                case "%":
                    t /= 100;
            }
            return e * t;
        },
        toPadding: function(t) {
            var e, n, i, a;
            return S1.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, i = +t.bottom || 0, a = +t.left || 0) : e = n = i = a = +t || 0, {
                top: e,
                right: n,
                bottom: i,
                left: a,
                height: e + i,
                width: a + n
            };
        },
        _parseFont: function(t8) {
            var e = N.global, n = B(t8.fontSize, e.defaultFontSize), i = {
                family: B(t8.fontFamily, e.defaultFontFamily),
                lineHeight: S1.options.toLineHeight(B(t8.lineHeight, e.defaultLineHeight), n),
                size: n,
                style: B(t8.fontStyle, e.defaultFontStyle),
                weight: null,
                string: ""
            };
            return i.string = function(t) {
                return !t || S1.isNullOrUndef(t.size) || S1.isNullOrUndef(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
            }(i), i;
        },
        resolve: function(t, e, n, i) {
            var a, r, o, s = !0;
            for(a = 0, r = t.length; a < r; ++a)if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), s = !1), void 0 !== n && S1.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return i && !s && (i.cacheable = !1), o;
        }
    }, W = {
        _factorize: function(t9) {
            var e6, n = [], i = Math.sqrt(t9);
            for(e6 = 1; e6 < i; e6++)t9 % e6 == 0 && (n.push(e6), n.push(t9 / e6));
            return i === (0 | i) && n.push(i), n.sort(function(t, e) {
                return t - e;
            }).pop(), n;
        },
        log10: Math.log10 || function(t) {
            var e = Math.log(t) * Math.LOG10E, n = Math.round(e);
            return t === Math.pow(10, n) ? n : e;
        }
    }, V = W;
    S1.log10 = W.log10;
    var H = S1, j = P1, q = R, U = E, Y = V, G = {
        getRtlAdapter: function(t10, e7, n4) {
            return t10 ? function(t11, e8) {
                return {
                    x: function(n) {
                        return t11 + t11 + e8 - n;
                    },
                    setWidth: function(t) {
                        e8 = t;
                    },
                    textAlign: function(t) {
                        return "center" === t ? t : "right" === t ? "left" : "right";
                    },
                    xPlus: function(t, e) {
                        return t - e;
                    },
                    leftForLtr: function(t, e) {
                        return t - e;
                    }
                };
            }(e7, n4) : {
                x: function(t) {
                    return t;
                },
                setWidth: function(t) {},
                textAlign: function(t) {
                    return t;
                },
                xPlus: function(t, e) {
                    return t + e;
                },
                leftForLtr: function(t, e) {
                    return t;
                }
            };
        },
        overrideTextDirection: function(t, e) {
            var n, i;
            "ltr" !== e && "rtl" !== e || (i = [
                (n = t.canvas.style).getPropertyValue("direction"),
                n.getPropertyPriority("direction")
            ], n.setProperty("direction", e, "important"), t.prevTextDirection = i);
        },
        restoreTextDirection: function(t) {
            var e = t.prevTextDirection;
            void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
        }
    };
    H.easing = j, H.canvas = q, H.options = U, H.math = Y, H.rtl = G;
    var X = function(t) {
        H.extend(this, t), this.initialize.apply(this, arguments);
    };
    H.extend(X.prototype, {
        _type: void 0,
        initialize: function() {
            this.hidden = !1;
        },
        pivot: function() {
            var t = this;
            return t._view || (t._view = H.extend({}, t._model)), t._start = {}, t;
        },
        transition: function(t12) {
            var e9 = this, n5 = e9._model, i5 = e9._start, a4 = e9._view;
            return n5 && 1 !== t12 ? (a4 || (a4 = e9._view = {}), i5 || (i5 = e9._start = {}), function(t, e, n, i) {
                var a, r, o, s, l, u, d, h, c, f = Object.keys(n);
                for(a = 0, r = f.length; a < r; ++a)if (u = n[o = f[a]], e.hasOwnProperty(o) || (e[o] = u), (s = e[o]) !== u && "_" !== o[0]) {
                    if (t.hasOwnProperty(o) || (t[o] = s), (d = typeof u) === typeof (l = t[o])) {
                        if ("string" === d) {
                            if ((h = _1(l)).valid && (c = _1(u)).valid) {
                                e[o] = c.mix(h, i).rgbString();
                                continue;
                            }
                        } else if (H.isFinite(l) && H.isFinite(u)) {
                            e[o] = l + (u - l) * i;
                            continue;
                        }
                    }
                    e[o] = u;
                }
            }(i5, a4, n5, t12), e9) : (e9._view = H.extend({}, n5), e9._start = null, e9);
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            };
        },
        hasValue: function() {
            return H.isNumber(this._model.x) && H.isNumber(this._model.y);
        }
    }), X.extend = H.inherits;
    var K = X, Z = K.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), $ = Z;
    Object.defineProperty(Z.prototype, "animationObject", {
        get: function() {
            return this;
        }
    }), Object.defineProperty(Z.prototype, "chartInstance", {
        get: function() {
            return this.chart;
        },
        set: function(t) {
            this.chart = t;
        }
    }), N._set("global", {
        animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: H.noop,
            onComplete: H.noop
        }
    });
    var J = {
        animations: [],
        request: null,
        addAnimation: function(t, e, n, i) {
            var a, r, o = this.animations;
            for(e.chart = t, e.startTime = Date.now(), e.duration = n, i || (t.animating = !0), a = 0, r = o.length; a < r; ++a)if (o[a].chart === t) return void (o[a] = e);
            o.push(e), 1 === o.length && this.requestAnimationFrame();
        },
        cancelAnimation: function(t) {
            var e10 = H.findIndex(this.animations, function(e) {
                return e.chart === t;
            });
            -1 !== e10 && (this.animations.splice(e10, 1), t.animating = !1);
        },
        requestAnimationFrame: function() {
            var t = this;
            null === t.request && (t.request = H.requestAnimFrame.call(window, function() {
                t.request = null, t.startDigest();
            }));
        },
        startDigest: function() {
            this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
        },
        advance: function() {
            for(var t, e, n, i, a = this.animations, r = 0; r < a.length;)e = (t = a[r]).chart, n = t.numSteps, i = Math.floor((Date.now() - t.startTime) / t.duration * n) + 1, t.currentStep = Math.min(i, n), H.callback(t.render, [
                e,
                t
            ], e), H.callback(t.onAnimationProgress, [
                t
            ], e), t.currentStep >= n ? (H.callback(t.onAnimationComplete, [
                t
            ], e), e.animating = !1, a.splice(r, 1)) : ++r;
        }
    }, Q = H.options.resolve, tt = [
        "push",
        "pop",
        "shift",
        "splice",
        "unshift"
    ];
    function et(t, e11) {
        var n = t._chartjs;
        if (n) {
            var i = n.listeners, a = i.indexOf(e11);
            -1 !== a && i.splice(a, 1), i.length > 0 || (tt.forEach(function(e) {
                delete t[e];
            }), delete t._chartjs);
        }
    }
    var nt = function(t, e) {
        this.initialize(t, e);
    };
    H.extend(nt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth"
        ],
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "pointStyle"
        ],
        initialize: function(t, e) {
            var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements(), n._type = n.getMeta().type;
        },
        updateIndex: function(t) {
            this.index = t;
        },
        linkScales: function() {
            var t = this.getMeta(), e = this.chart, n = e.scales, i = this.getDataset(), a = e.options.scales;
            null !== t.xAxisID && t.xAxisID in n && !i.xAxisID || (t.xAxisID = i.xAxisID || a.xAxes[0].id), null !== t.yAxisID && t.yAxisID in n && !i.yAxisID || (t.yAxisID = i.yAxisID || a.yAxes[0].id);
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index];
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function(t) {
            return this.chart.scales[t];
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID;
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function() {
            this._update(!0);
        },
        destroy: function() {
            this._data && et(this._data, this);
        },
        createMetaDataset: function() {
            var t = this.datasetElementType;
            return t && new t({
                _chart: this.chart,
                _datasetIndex: this.index
            });
        },
        createMetaData: function(t) {
            var e = this.dataElementType;
            return e && new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t
            });
        },
        addElements: function() {
            var t, e, n = this.getMeta(), i = this.getDataset().data || [], a = n.data;
            for(t = 0, e = i.length; t < e; ++t)a[t] = a[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset();
        },
        addElementAndReset: function(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
        },
        buildOrUpdateElements: function() {
            var t13, e12, n6 = this, i6 = n6.getDataset(), a5 = i6.data || (i6.data = []);
            n6._data !== a5 && (n6._data && et(n6._data, n6), a5 && Object.isExtensible(a5) && (e12 = n6, (t13 = a5)._chartjs ? t13._chartjs.listeners.push(e12) : (Object.defineProperty(t13, "_chartjs", {
                configurable: !0,
                enumerable: !1,
                value: {
                    listeners: [
                        e12
                    ]
                }
            }), tt.forEach(function(e13) {
                var n = "onData" + e13.charAt(0).toUpperCase() + e13.slice(1), i = t13[e13];
                Object.defineProperty(t13, e13, {
                    configurable: !0,
                    enumerable: !1,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments), a = i.apply(this, e);
                        return H.each(t13._chartjs.listeners, function(t) {
                            "function" == typeof t[n] && t[n].apply(t, e);
                        }), a;
                    }
                });
            }))), n6._data = a5), n6.resyncElements();
        },
        _configure: function() {
            this._config = H.merge(Object.create(null), [
                this.chart.options.datasets[this._type],
                this.getDataset()
            ], {
                merger: function(t, e, n) {
                    "_meta" !== t && "data" !== t && H._merger(t, e, n);
                }
            });
        },
        _update: function(t) {
            this._configure(), this._cachedDataOpts = null, this.update(t);
        },
        update: H.noop,
        transition: function(t) {
            for(var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a)n[a].transition(t);
            e.dataset && e.dataset.transition(t);
        },
        draw: function() {
            var t = this.getMeta(), e = t.data || [], n = e.length, i = 0;
            for(t.dataset && t.dataset.draw(); i < n; ++i)e[i].draw();
        },
        getStyle: function(t) {
            var e, n = this.getMeta(), i = n.dataset;
            return this._configure(), i && void 0 === t ? e = this._resolveDatasetElementOptions(i || {}) : (t = t || 0, e = this._resolveDataElementOptions(n.data[t] || {}, t)), !1 !== e.fill && null !== e.fill || (e.backgroundColor = e.borderColor), e;
        },
        _resolveDatasetElementOptions: function(t, e) {
            var n, i, a, r, o = this, s = o.chart, l = o._config, u = t.custom || {}, d = s.options.elements[o.datasetElementType.prototype._type] || {}, h = o._datasetElementOptions, c = {}, f = {
                chart: s,
                dataset: o.getDataset(),
                datasetIndex: o.index,
                hover: e
            };
            for(n = 0, i = h.length; n < i; ++n)a = h[n], r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a, c[a] = Q([
                u[r],
                l[r],
                d[r]
            ], f);
            return c;
        },
        _resolveDataElementOptions: function(t, e) {
            var n = this, i = t && t.custom, a = n._cachedDataOpts;
            if (a && !i) return a;
            var r, o, s, l, u = n.chart, d = n._config, h = u.options.elements[n.dataElementType.prototype._type] || {}, c = n._dataElementOptions, f = {}, g = {
                chart: u,
                dataIndex: e,
                dataset: n.getDataset(),
                datasetIndex: n.index
            }, p = {
                cacheable: !i
            };
            if (i = i || {}, H.isArray(c)) for(o = 0, s = c.length; o < s; ++o)f[l = c[o]] = Q([
                i[l],
                d[l],
                h[l]
            ], g, e, p);
            else for(o = 0, s = (r = Object.keys(c)).length; o < s; ++o)f[l = r[o]] = Q([
                i[l],
                d[c[l]],
                d[l],
                h[l]
            ], g, e, p);
            return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
        },
        removeHoverStyle: function(t) {
            H.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
        },
        setHoverStyle: function(t) {
            var e = this.chart.data.datasets[t._datasetIndex], n = t._index, i = t.custom || {}, a = t._model, r = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: a.backgroundColor,
                borderColor: a.borderColor,
                borderWidth: a.borderWidth
            }, a.backgroundColor = Q([
                i.hoverBackgroundColor,
                e.hoverBackgroundColor,
                r(a.backgroundColor)
            ], void 0, n), a.borderColor = Q([
                i.hoverBorderColor,
                e.hoverBorderColor,
                r(a.borderColor)
            ], void 0, n), a.borderWidth = Q([
                i.hoverBorderWidth,
                e.hoverBorderWidth,
                a.borderWidth
            ], void 0, n);
        },
        _removeDatasetHoverStyle: function() {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t);
        },
        _setDatasetHoverStyle: function() {
            var t, e, n, i, a, r, o = this.getMeta().dataset, s = {};
            if (o) {
                for(r = o._model, a = this._resolveDatasetElementOptions(o, !0), t = 0, e = (i = Object.keys(a)).length; t < e; ++t)s[n = i[t]] = r[n], r[n] = a[n];
                o.$previousStyle = s;
            }
        },
        resyncElements: function() {
            var t = this.getMeta(), e = this.getDataset().data, n = t.data.length, i = e.length;
            i < n ? t.data.splice(i, n - i) : i > n && this.insertElements(n, i - n);
        },
        insertElements: function(t, e) {
            for(var n = 0; n < e; ++n)this.addElementAndReset(t + n);
        },
        onDataPush: function() {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t);
        },
        onDataPop: function() {
            this.getMeta().data.pop();
        },
        onDataShift: function() {
            this.getMeta().data.shift();
        },
        onDataSplice: function(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length);
        }
    }), nt.extend = H.inherits;
    var it = nt, at = 2 * Math.PI;
    function rt(t, e) {
        var n = e.startAngle, i = e.endAngle, a = e.pixelMargin, r = a / e.outerRadius, o = e.x, s = e.y;
        t.beginPath(), t.arc(o, s, e.outerRadius, n - r, i + r), e.innerRadius > a ? (r = a / e.innerRadius, t.arc(o, s, e.innerRadius - a, i + r, n - r, !0)) : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2), t.closePath(), t.clip();
    }
    function ot(t14, e14, n7) {
        var i7 = "inner" === e14.borderAlign;
        i7 ? (t14.lineWidth = 2 * e14.borderWidth, t14.lineJoin = "round") : (t14.lineWidth = e14.borderWidth, t14.lineJoin = "bevel"), n7.fullCircles && function(t, e, n, i) {
            var a, r = n.endAngle;
            for(i && (n.endAngle = n.startAngle + at, rt(t, n), n.endAngle = r, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += at, n.fullCircles--)), t.beginPath(), t.arc(n.x, n.y, n.innerRadius, n.startAngle + at, n.startAngle, !0), a = 0; a < n.fullCircles; ++a)t.stroke();
            for(t.beginPath(), t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.startAngle + at), a = 0; a < n.fullCircles; ++a)t.stroke();
        }(t14, e14, n7, i7), i7 && rt(t14, n7), t14.beginPath(), t14.arc(n7.x, n7.y, e14.outerRadius, n7.startAngle, n7.endAngle), t14.arc(n7.x, n7.y, n7.innerRadius, n7.endAngle, n7.startAngle, !0), t14.closePath(), t14.stroke();
    }
    N._set("global", {
        elements: {
            arc: {
                backgroundColor: N.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var st = K.extend({
        _type: "arc",
        inLabelRange: function(t) {
            var e = this._view;
            return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function(t, e) {
            var n = this._view;
            if (n) {
                for(var i = H.getAngleFromPoint(n, {
                    x: t,
                    y: e
                }), a = i.angle, r = i.distance, o = n.startAngle, s = n.endAngle; s < o;)s += at;
                for(; a > s;)a -= at;
                for(; a < o;)a += at;
                var l = a >= o && a <= s, u = r >= n.innerRadius && r <= n.outerRadius;
                return l && u;
            }
            return !1;
        },
        getCenterPoint: function() {
            var t = this._view, e = (t.startAngle + t.endAngle) / 2, n = (t.innerRadius + t.outerRadius) / 2;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            };
        },
        getArea: function() {
            var t = this._view;
            return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function() {
            var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2, n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return {
                x: t.x + Math.cos(e) * n,
                y: t.y + Math.sin(e) * n
            };
        },
        draw: function() {
            var t, e = this._chart.ctx, n = this._view, i = "inner" === n.borderAlign ? .33 : 0, a = {
                x: n.x,
                y: n.y,
                innerRadius: n.innerRadius,
                outerRadius: Math.max(n.outerRadius - i, 0),
                pixelMargin: i,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                fullCircles: Math.floor(n.circumference / at)
            };
            if (e.save(), e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, a.fullCircles) {
                for(a.endAngle = a.startAngle + at, e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), t = 0; t < a.fullCircles; ++t)e.fill();
                a.endAngle = a.startAngle + n.circumference % at;
            }
            e.beginPath(), e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle), e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0), e.closePath(), e.fill(), n.borderWidth && ot(e, n, a), e.restore();
        }
    }), lt = H.valueOrDefault, ut = N.global.defaultColor;
    N._set("global", {
        elements: {
            line: {
                tension: .4,
                backgroundColor: ut,
                borderWidth: 3,
                borderColor: ut,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: !0,
                fill: !0
            }
        }
    });
    var dt = K.extend({
        _type: "line",
        draw: function() {
            var t, e, n, i = this, a = i._view, r = i._chart.ctx, o = a.spanGaps, s = i._children.slice(), l = N.global, u = l.elements.line, d = -1, h = i._loop;
            if (s.length) {
                if (i._loop) {
                    for(t = 0; t < s.length; ++t)if (e = H.previousItem(s, t), !s[t]._view.skip && e._view.skip) {
                        s = s.slice(t).concat(s.slice(0, t)), h = o;
                        break;
                    }
                    h && s.push(s[0]);
                }
                for(r.save(), r.lineCap = a.borderCapStyle || u.borderCapStyle, r.setLineDash && r.setLineDash(a.borderDash || u.borderDash), r.lineDashOffset = lt(a.borderDashOffset, u.borderDashOffset), r.lineJoin = a.borderJoinStyle || u.borderJoinStyle, r.lineWidth = lt(a.borderWidth, u.borderWidth), r.strokeStyle = a.borderColor || l.defaultColor, r.beginPath(), (n = s[0]._view).skip || (r.moveTo(n.x, n.y), d = 0), t = 1; t < s.length; ++t)n = s[t]._view, e = -1 === d ? H.previousItem(s, t) : s[d], n.skip || (d !== t - 1 && !o || -1 === d ? r.moveTo(n.x, n.y) : H.canvas.lineTo(r, e._view, n), d = t);
                h && r.closePath(), r.stroke(), r.restore();
            }
        }
    }), ht = H.valueOrDefault, ct = N.global.defaultColor;
    function ft(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
    }
    N._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: ct,
                borderColor: ct,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var gt = K.extend({
        _type: "point",
        inRange: function(t, e) {
            var n = this._view;
            return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
        },
        inLabelRange: ft,
        inXRange: ft,
        inYRange: function(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
        },
        getCenterPoint: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            };
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y,
                padding: t.radius + t.borderWidth
            };
        },
        draw: function(t) {
            var e = this._view, n = this._chart.ctx, i = e.pointStyle, a = e.rotation, r = e.radius, o = e.x, s = e.y, l = N.global, u = l.defaultColor;
            e.skip || (void 0 === t || H.canvas._isPointInArea(e, t)) && (n.strokeStyle = e.borderColor || u, n.lineWidth = ht(e.borderWidth, l.elements.point.borderWidth), n.fillStyle = e.backgroundColor || u, H.canvas.drawPoint(n, i, r, o, s, a));
        }
    }), pt = N.global.defaultColor;
    function mt(t) {
        return t && void 0 !== t.width;
    }
    function vt(t) {
        var e, n, i, a, r;
        return mt(t) ? (r = t.width / 2, e = t.x - r, n = t.x + r, i = Math.min(t.y, t.base), a = Math.max(t.y, t.base)) : (r = t.height / 2, e = Math.min(t.x, t.base), n = Math.max(t.x, t.base), i = t.y - r, a = t.y + r), {
            left: e,
            top: i,
            right: n,
            bottom: a
        };
    }
    function bt(t, e, n) {
        return t === e ? n : t === n ? e : t;
    }
    function xt(t15, e15, n8) {
        var i, a, r, o, s = t15.borderWidth, l = function(t) {
            var e = t.borderSkipped, n = {};
            return e ? (t.horizontal ? t.base > t.x && (e = bt(e, "left", "right")) : t.base < t.y && (e = bt(e, "bottom", "top")), n[e] = !0, n) : n;
        }(t15);
        return H.isObject(s) ? (i = +s.top || 0, a = +s.right || 0, r = +s.bottom || 0, o = +s.left || 0) : i = a = r = o = +s || 0, {
            t: l.top || i < 0 ? 0 : i > n8 ? n8 : i,
            r: l.right || a < 0 ? 0 : a > e15 ? e15 : a,
            b: l.bottom || r < 0 ? 0 : r > n8 ? n8 : r,
            l: l.left || o < 0 ? 0 : o > e15 ? e15 : o
        };
    }
    function yt(t, e, n) {
        var i = null === e, a = null === n, r = !(!t || i && a) && vt(t);
        return r && (i || e >= r.left && e <= r.right) && (a || n >= r.top && n <= r.bottom);
    }
    N._set("global", {
        elements: {
            rectangle: {
                backgroundColor: pt,
                borderColor: pt,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var _t = K.extend({
        _type: "rectangle",
        draw: function() {
            var t16 = this._chart.ctx, e16 = this._view, n9 = function(t) {
                var e = vt(t), n = e.right - e.left, i = e.bottom - e.top, a = xt(t, n / 2, i / 2);
                return {
                    outer: {
                        x: e.left,
                        y: e.top,
                        w: n,
                        h: i
                    },
                    inner: {
                        x: e.left + a.l,
                        y: e.top + a.t,
                        w: n - a.l - a.r,
                        h: i - a.t - a.b
                    }
                };
            }(e16), i8 = n9.outer, a6 = n9.inner;
            t16.fillStyle = e16.backgroundColor, t16.fillRect(i8.x, i8.y, i8.w, i8.h), i8.w === a6.w && i8.h === a6.h || (t16.save(), t16.beginPath(), t16.rect(i8.x, i8.y, i8.w, i8.h), t16.clip(), t16.fillStyle = e16.borderColor, t16.rect(a6.x, a6.y, a6.w, a6.h), t16.fill("evenodd"), t16.restore());
        },
        height: function() {
            var t = this._view;
            return t.base - t.y;
        },
        inRange: function(t, e) {
            return yt(this._view, t, e);
        },
        inLabelRange: function(t, e) {
            var n = this._view;
            return mt(n) ? yt(n, t, null) : yt(n, null, e);
        },
        inXRange: function(t) {
            return yt(this._view, t, null);
        },
        inYRange: function(t) {
            return yt(this._view, null, t);
        },
        getCenterPoint: function() {
            var t, e, n = this._view;
            return mt(n) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
                x: t,
                y: e
            };
        },
        getArea: function() {
            var t = this._view;
            return mt(t) ? t.width * Math.abs(t.y - t.base) : t.height * Math.abs(t.x - t.base);
        },
        tooltipPosition: function() {
            var t = this._view;
            return {
                x: t.x,
                y: t.y
            };
        }
    }), kt = {}, wt = st, Mt = dt, St = gt, Ct = _t;
    kt.Arc = wt, kt.Line = Mt, kt.Point = St, kt.Rectangle = Ct;
    var Pt = H._deprecated, At = H.valueOrDefault;
    function Dt(t17, e17, n10) {
        var i9, a7, r3 = n10.barThickness, o2 = e17.stackCount, s = e17.pixels[t17], l = H.isNullOrUndef(r3) ? function(t, e) {
            var n, i, a, r, o = t._length;
            for(a = 1, r = e.length; a < r; ++a)o = Math.min(o, Math.abs(e[a] - e[a - 1]));
            for(a = 0, r = t.getTicks().length; a < r; ++a)i = t.getPixelForTick(a), o = a > 0 ? Math.min(o, Math.abs(i - n)) : o, n = i;
            return o;
        }(e17.scale, e17.pixels) : -1;
        return H.isNullOrUndef(r3) ? (i9 = l * n10.categoryPercentage, a7 = n10.barPercentage) : (i9 = r3 * o2, a7 = 1), {
            chunk: i9 / o2,
            ratio: a7,
            start: s - i9 / 2
        };
    }
    N._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [
                {
                    type: "category",
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }
            ],
            yAxes: [
                {
                    type: "linear"
                }
            ]
        }
    }), N._set("global", {
        datasets: {
            bar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var Tt = it.extend({
        dataElementType: kt.Rectangle,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength"
        ],
        initialize: function() {
            var t, e, n = this;
            it.prototype.initialize.apply(n, arguments), (t = n.getMeta()).stack = n.getDataset().stack, t.bar = !0, e = n._getIndexScale().options, Pt("bar chart", e.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Pt("bar chart", e.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Pt("bar chart", e.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Pt("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Pt("bar chart", e.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness");
        },
        update: function(t) {
            var e, n, i = this.getMeta().data;
            for(this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e)this.updateElement(i[e], e, t);
        },
        updateElement: function(t, e, n) {
            var i = this, a = i.getMeta(), r = i.getDataset(), o = i._resolveDataElementOptions(t, e);
            t._xScale = i.getScaleForId(a.xAxisID), t._yScale = i.getScaleForId(a.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderSkipped: o.borderSkipped,
                borderWidth: o.borderWidth,
                datasetLabel: r.label,
                label: i.chart.data.labels[e]
            }, H.isArray(r.data[e]) && (t._model.borderSkipped = null), i._updateElementGeometry(t, e, n, o), t.pivot();
        },
        _updateElementGeometry: function(t, e, n, i) {
            var a = this, r = t._model, o = a._getValueScale(), s = o.getBasePixel(), l = o.isHorizontal(), u = a._ruler || a.getRuler(), d = a.calculateBarValuePixels(a.index, e, i), h = a.calculateBarIndexPixels(a.index, e, u, i);
            r.horizontal = l, r.base = n ? s : d.base, r.x = l ? n ? s : d.head : h.center, r.y = l ? h.center : n ? s : d.head, r.height = l ? h.size : void 0, r.width = l ? void 0 : h.size;
        },
        _getStacks: function(t) {
            var e, n, i = this._getIndexScale(), a = i._getMatchingVisibleMetas(this._type), r = i.options.stacked, o = a.length, s = [];
            for(e = 0; e < o && (n = a[e], (!1 === r || -1 === s.indexOf(n.stack) || void 0 === r && void 0 === n.stack) && s.push(n.stack), n.index !== t); ++e);
            return s;
        },
        getStackCount: function() {
            return this._getStacks().length;
        },
        getStackIndex: function(t, e) {
            var n = this._getStacks(t), i = void 0 !== e ? n.indexOf(e) : -1;
            return -1 === i ? n.length - 1 : i;
        },
        getRuler: function() {
            var t, e, n = this._getIndexScale(), i = [];
            for(t = 0, e = this.getMeta().data.length; t < e; ++t)i.push(n.getPixelForValue(null, t, this.index));
            return {
                pixels: i,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: this.getStackCount(),
                scale: n
            };
        },
        calculateBarValuePixels: function(t, e, n) {
            var i, a, r, o, s, l, u, d = this.chart, h = this._getValueScale(), c = h.isHorizontal(), f = d.data.datasets, g = h._getMatchingVisibleMetas(this._type), p = h._parseValue(f[t].data[e]), m = n.minBarLength, v = h.options.stacked, b = this.getMeta().stack, x = void 0 === p.start ? 0 : p.max >= 0 && p.min >= 0 ? p.min : p.max, y = void 0 === p.start ? p.end : p.max >= 0 && p.min >= 0 ? p.max - p.min : p.min - p.max, _ = g.length;
            if (v || void 0 === v && void 0 !== b) for(i = 0; i < _ && (a = g[i]).index !== t; ++i)a.stack === b && (r = void 0 === (u = h._parseValue(f[a.index].data[e])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (p.min < 0 && r < 0 || p.max >= 0 && r > 0) && (x += r));
            return o = h.getPixelForValue(x), l = (s = h.getPixelForValue(x + y)) - o, void 0 !== m && Math.abs(l) < m && (l = m, s = y >= 0 && !c || y < 0 && c ? o - m : o + m), {
                size: l,
                base: o,
                head: s,
                center: s + l / 2
            };
        },
        calculateBarIndexPixels: function(t18, e18, n11, i10) {
            var a8 = "flex" === i10.barThickness ? function(t, e, n) {
                var i, a = e.pixels, r = a[t], o = t > 0 ? a[t - 1] : null, s = t < a.length - 1 ? a[t + 1] : null, l = n.categoryPercentage;
                return null === o && (o = r - (null === s ? e.end - e.start : s - r)), null === s && (s = r + r - o), i = r - (r - Math.min(o, s)) / 2 * l, {
                    chunk: Math.abs(s - o) / 2 * l / e.stackCount,
                    ratio: n.barPercentage,
                    start: i
                };
            }(e18, n11, i10) : Dt(e18, n11, i10), r4 = this.getStackIndex(t18, this.getMeta().stack), o3 = a8.start + a8.chunk * r4 + a8.chunk / 2, s2 = Math.min(At(i10.maxBarThickness, 1 / 0), a8.chunk * a8.ratio);
            return {
                base: o3 - s2 / 2,
                head: o3 + s2 / 2,
                center: o3,
                size: s2
            };
        },
        draw: function() {
            var t = this.chart, e = this._getValueScale(), n = this.getMeta().data, i = this.getDataset(), a = n.length, r = 0;
            for(H.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r){
                var o = e._parseValue(i.data[r]);
                isNaN(o.min) || isNaN(o.max) || n[r].draw();
            }
            H.canvas.unclipArea(t.ctx);
        },
        _resolveDataElementOptions: function() {
            var t = this, e = H.extend({}, it.prototype._resolveDataElementOptions.apply(t, arguments)), n = t._getIndexScale().options, i = t._getValueScale().options;
            return e.barPercentage = At(n.barPercentage, e.barPercentage), e.barThickness = At(n.barThickness, e.barThickness), e.categoryPercentage = At(n.categoryPercentage, e.categoryPercentage), e.maxBarThickness = At(n.maxBarThickness, e.maxBarThickness), e.minBarLength = At(i.minBarLength, e.minBarLength), e;
        }
    }), It = H.valueOrDefault, Ft = H.options.resolve;
    N._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom",
                    id: "x-axis-0"
                }
            ],
            yAxes: [
                {
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }
            ]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "", i = e.datasets[t.datasetIndex].data[t.index];
                    return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
                }
            }
        }
    });
    var Ot = it.extend({
        dataElementType: kt.Point,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation"
        ],
        update: function(t) {
            var e = this, n12 = e.getMeta().data;
            H.each(n12, function(n, i) {
                e.updateElement(n, i, t);
            });
        },
        updateElement: function(t, e, n) {
            var i = this, a = i.getMeta(), r = t.custom || {}, o = i.getScaleForId(a.xAxisID), s = i.getScaleForId(a.yAxisID), l = i._resolveDataElementOptions(t, e), u = i.getDataset().data[e], d = i.index, h = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, e, d), c = n ? s.getBasePixel() : s.getPixelForValue(u, e, d);
            t._xScale = o, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                hitRadius: l.hitRadius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                radius: n ? 0 : l.radius,
                skip: r.skip || isNaN(h) || isNaN(c),
                x: h,
                y: c
            }, t.pivot();
        },
        setHoverStyle: function(t) {
            var e = t._model, n = t._options, i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = It(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = It(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = It(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
        },
        _resolveDataElementOptions: function(t, e) {
            var n = this, i = n.chart, a = n.getDataset(), r = t.custom || {}, o = a.data[e] || {}, s = it.prototype._resolveDataElementOptions.apply(n, arguments), l = {
                chart: i,
                dataIndex: e,
                dataset: a,
                datasetIndex: n.index
            };
            return n._cachedDataOpts === s && (s = H.extend({}, s)), s.radius = Ft([
                r.radius,
                o.r,
                n._config.radius,
                i.options.elements.point.radius
            ], l, e), s;
        }
    }), Lt = H.valueOrDefault, Rt = Math.PI, zt = 2 * Rt, Nt = Rt / 2;
    N._set("doughnut", {
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"), r = t.data, o = r.datasets, s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length) for(e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                        var a = t.getDatasetMeta(0), r = a.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                            index: i
                        };
                    }) : [];
                }
            },
            onClick: function(t, e) {
                var n, i, a, r = e.index, o = this.chart;
                for(n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r] && (a.data[r].hidden = !a.data[r].hidden);
                o.update();
            }
        },
        cutoutPercentage: 50,
        rotation: -Nt,
        circumference: zt,
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    var n = e.labels[t.index], i = ": " + e.datasets[t.datasetIndex].data[t.index];
                    return H.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
                }
            }
        }
    });
    var Bt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth"
        ],
        getRingIndex: function(t) {
            for(var e = 0, n = 0; n < t; ++n)this.chart.isDatasetVisible(n) && ++e;
            return e;
        },
        update: function(t) {
            var e, n, i, a, r = this, o = r.chart, s = o.chartArea, l = o.options, u = 1, d = 1, h = 0, c = 0, f = r.getMeta(), g = f.data, p = l.cutoutPercentage / 100 || 0, m = l.circumference, v = r._getRingWeight(r.index);
            if (m < zt) {
                var b = l.rotation % zt, x = (b += b >= Rt ? -zt : b < -Rt ? zt : 0) + m, y = Math.cos(b), _ = Math.sin(b), k = Math.cos(x), w = Math.sin(x), M = b <= 0 && x >= 0 || x >= zt, S = b <= Nt && x >= Nt || x >= zt + Nt, C = b <= -Nt && x >= -Nt || x >= Rt + Nt, P = b === -Rt || x >= Rt ? -1 : Math.min(y, y * p, k, k * p), A = C ? -1 : Math.min(_, _ * p, w, w * p), D = M ? 1 : Math.max(y, y * p, k, k * p), T = S ? 1 : Math.max(_, _ * p, w, w * p);
                u = (D - P) / 2, d = (T - A) / 2, h = -(D + P) / 2, c = -(T + A) / 2;
            }
            for(i = 0, a = g.length; i < a; ++i)g[i]._options = r._resolveDataElementOptions(g[i], i);
            for(o.borderWidth = r.getMaxBorderWidth(), e = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / d, o.outerRadius = Math.max(Math.min(e, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * p, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (r._getVisibleDatasetWeightTotal() || 1), o.offsetX = h * o.outerRadius, o.offsetY = c * o.outerRadius, f.total = r.calculateTotal(), r.outerRadius = o.outerRadius - o.radiusLength * r._getRingWeightOffset(r.index), r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0), i = 0, a = g.length; i < a; ++i)r.updateElement(g[i], i, t);
        },
        updateElement: function(t, e, n) {
            var i = this, a = i.chart, r = a.chartArea, o = a.options, s = o.animation, l = (r.left + r.right) / 2, u = (r.top + r.bottom) / 2, d = o.rotation, h = o.rotation, c = i.getDataset(), f = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(c.data[e]) * (o.circumference / zt), g = n && s.animateScale ? 0 : i.innerRadius, p = n && s.animateScale ? 0 : i.outerRadius, m = t._options || {};
            H.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _model: {
                    backgroundColor: m.backgroundColor,
                    borderColor: m.borderColor,
                    borderWidth: m.borderWidth,
                    borderAlign: m.borderAlign,
                    x: l + a.offsetX,
                    y: u + a.offsetY,
                    startAngle: d,
                    endAngle: h,
                    circumference: f,
                    outerRadius: p,
                    innerRadius: g,
                    label: H.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
                }
            });
            var v = t._model;
            n && s.animateRotate || (v.startAngle = 0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot();
        },
        calculateTotal: function() {
            var t, e = this.getDataset(), n13 = this.getMeta(), i = 0;
            return H.each(n13.data, function(n, a) {
                t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t));
            }), i;
        },
        calculateCircumference: function(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? zt * (Math.abs(t) / e) : 0;
        },
        getMaxBorderWidth: function(t) {
            var e, n, i, a, r, o, s, l, u = 0, d = this.chart;
            if (!t) {
                for(e = 0, n = d.data.datasets.length; e < n; ++e)if (d.isDatasetVisible(e)) {
                    t = (i = d.getDatasetMeta(e)).data, e !== this.index && (r = i.controller);
                    break;
                }
            }
            if (!t) return 0;
            for(e = 0, n = t.length; e < n; ++e)a = t[e], r ? (r._configure(), o = r._resolveDataElementOptions(a, e)) : o = a._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
            return u;
        },
        setHoverStyle: function(t) {
            var e = t._model, n = t._options, i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = Lt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth);
        },
        _getRingWeightOffset: function(t) {
            for(var e = 0, n = 0; n < t; ++n)this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e;
        },
        _getRingWeight: function(t) {
            return Math.max(Lt(this.chart.data.datasets[t].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
        }
    });
    N._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom"
                }
            ],
            yAxes: [
                {
                    type: "category",
                    position: "left",
                    offset: !0,
                    gridLines: {
                        offsetGridLines: !0
                    }
                }
            ]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    }), N._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: .8,
                barPercentage: .9
            }
        }
    });
    var Et = Tt.extend({
        _getValueScaleId: function() {
            return this.getMeta().xAxisID;
        },
        _getIndexScaleId: function() {
            return this.getMeta().yAxisID;
        }
    }), Wt = H.valueOrDefault, Vt = H.options.resolve, Ht = H.canvas._isPointInArea;
    function jt(t, e) {
        var n = t && t.options.ticks || {}, i = n.reverse, a = void 0 === n.min ? e : 0, r = void 0 === n.max ? e : 0;
        return {
            start: i ? r : a,
            end: i ? a : r
        };
    }
    function qt(t, e, n) {
        var i = n / 2, a = jt(t, i), r = jt(e, i);
        return {
            top: r.end,
            right: a.end,
            bottom: r.start,
            left: a.start
        };
    }
    function Ut(t) {
        var e, n, i, a;
        return H.isObject(t) ? (e = t.top, n = t.right, i = t.bottom, a = t.left) : e = n = i = a = t, {
            top: e,
            right: n,
            bottom: i,
            left: a
        };
    }
    N._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [
                {
                    type: "category",
                    id: "x-axis-0"
                }
            ],
            yAxes: [
                {
                    type: "linear",
                    id: "y-axis-0"
                }
            ]
        }
    });
    var Yt = it.extend({
        datasetElementType: kt.Line,
        dataElementType: kt.Point,
        _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill"
        ],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        update: function(t) {
            var e, n, i = this, a = i.getMeta(), r = a.dataset, o = a.data || [], s = i.chart.options, l = i._config, u = i._showLine = Wt(l.showLine, s.showLines);
            for(i._xScale = i.getScaleForId(a.xAxisID), i._yScale = i.getScaleForId(a.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = i._yScale, r._datasetIndex = i.index, r._children = o, r._model = i._resolveDatasetElementOptions(r), r.pivot()), e = 0, n = o.length; e < n; ++e)i.updateElement(o[e], e, t);
            for(u && 0 !== r._model.tension && i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)o[e].pivot();
        },
        updateElement: function(t, e, n) {
            var i, a, r = this, o = r.getMeta(), s = t.custom || {}, l = r.getDataset(), u = r.index, d = l.data[e], h = r._xScale, c = r._yScale, f = o.dataset._model, g = r._resolveDataElementOptions(t, e);
            i = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = n ? c.getBasePixel() : r.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._options = g, t._datasetIndex = u, t._index = e, t._model = {
                x: i,
                y: a,
                skip: s.skip || isNaN(i) || isNaN(a),
                radius: g.radius,
                pointStyle: g.pointStyle,
                rotation: g.rotation,
                backgroundColor: g.backgroundColor,
                borderColor: g.borderColor,
                borderWidth: g.borderWidth,
                tension: Wt(s.tension, f ? f.tension : 0),
                steppedLine: !!f && f.steppedLine,
                hitRadius: g.hitRadius
            };
        },
        _resolveDatasetElementOptions: function(t) {
            var e = this, n = e._config, i = t.custom || {}, a = e.chart.options, r = a.elements.line, o = it.prototype._resolveDatasetElementOptions.apply(e, arguments);
            return o.spanGaps = Wt(n.spanGaps, a.spanGaps), o.tension = Wt(n.lineTension, r.tension), o.steppedLine = Vt([
                i.steppedLine,
                n.steppedLine,
                r.stepped
            ]), o.clip = Ut(Wt(n.clip, qt(e._xScale, e._yScale, o.borderWidth))), o;
        },
        calculatePointY: function(t, e, n) {
            var i, a, r, o, s, l, u, d = this.chart, h = this._yScale, c = 0, f = 0;
            if (h.options.stacked) {
                for(s = +h.getRightValue(t), u = (l = d._getSortedVisibleDatasetMetas()).length, i = 0; i < u && (r = l[i]).index !== n; ++i)a = d.data.datasets[r.index], "line" === r.type && r.yAxisID === h.id && ((o = +h.getRightValue(a.data[e])) < 0 ? f += o || 0 : c += o || 0);
                return s < 0 ? h.getPixelForValue(f + s) : h.getPixelForValue(c + s);
            }
            return h.getPixelForValue(t);
        },
        updateBezierControlPoints: function() {
            var t19, e19, n14, i, a = this.chart, r = this.getMeta(), o = r.dataset._model, s = a.chartArea, l = r.data || [];
            function u(t, e, n) {
                return Math.max(Math.min(t, n), e);
            }
            if (o.spanGaps && (l = l.filter(function(t) {
                return !t._model.skip;
            })), "monotone" === o.cubicInterpolationMode) H.splineCurveMonotone(l);
            else for(t19 = 0, e19 = l.length; t19 < e19; ++t19)n14 = l[t19]._model, i = H.splineCurve(H.previousItem(l, t19)._model, n14, H.nextItem(l, t19)._model, o.tension), n14.controlPointPreviousX = i.previous.x, n14.controlPointPreviousY = i.previous.y, n14.controlPointNextX = i.next.x, n14.controlPointNextY = i.next.y;
            if (a.options.elements.line.capBezierPoints) for(t19 = 0, e19 = l.length; t19 < e19; ++t19)n14 = l[t19]._model, Ht(n14, s) && (t19 > 0 && Ht(l[t19 - 1]._model, s) && (n14.controlPointPreviousX = u(n14.controlPointPreviousX, s.left, s.right), n14.controlPointPreviousY = u(n14.controlPointPreviousY, s.top, s.bottom)), t19 < l.length - 1 && Ht(l[t19 + 1]._model, s) && (n14.controlPointNextX = u(n14.controlPointNextX, s.left, s.right), n14.controlPointNextY = u(n14.controlPointNextY, s.top, s.bottom)));
        },
        draw: function() {
            var t, e = this.chart, n = this.getMeta(), i = n.data || [], a = e.chartArea, r = e.canvas, o = 0, s = i.length;
            for(this._showLine && (t = n.dataset._model.clip, H.canvas.clipArea(e.ctx, {
                left: !1 === t.left ? 0 : a.left - t.left,
                right: !1 === t.right ? r.width : a.right + t.right,
                top: !1 === t.top ? 0 : a.top - t.top,
                bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom
            }), n.dataset.draw(), H.canvas.unclipArea(e.ctx)); o < s; ++o)i[o].draw(a);
        },
        setHoverStyle: function(t) {
            var e = t._model, n = t._options, i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = Wt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Wt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Wt(n.hoverBorderWidth, n.borderWidth), e.radius = Wt(n.hoverRadius, n.radius);
        }
    }), Gt = H.options.resolve;
    N._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: !1
            },
            gridLines: {
                circular: !0
            },
            pointLabels: {
                display: !1
            },
            ticks: {
                beginAtZero: !0
            }
        },
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        startAngle: -0.5 * Math.PI,
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"), r = t.data, o = r.datasets, s = r.labels;
            if (a.setAttribute("class", t.id + "-legend"), o.length) for(e = 0, n = o[0].data.length; e < n; ++e)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[e], s[e] && i.appendChild(document.createTextNode(s[e]));
            return a.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t) {
                    var e = t.data;
                    return e.labels.length && e.datasets.length ? e.labels.map(function(n, i) {
                        var a = t.getDatasetMeta(0), r = a.controller.getStyle(i);
                        return {
                            text: n,
                            fillStyle: r.backgroundColor,
                            strokeStyle: r.borderColor,
                            lineWidth: r.borderWidth,
                            hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                            index: i
                        };
                    }) : [];
                }
            },
            onClick: function(t, e) {
                var n, i, a, r = e.index, o = this.chart;
                for(n = 0, i = (o.data.datasets || []).length; n < i; ++n)(a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
                o.update();
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t, e) {
                    return e.labels[t.index] + ": " + t.yLabel;
                }
            }
        }
    });
    var Xt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth"
        ],
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t) {
            var e, n, i, a = this, r = a.getDataset(), o = a.getMeta(), s = a.chart.options.startAngle || 0, l = a._starts = [], u = a._angles = [], d = o.data;
            for(a._updateRadius(), o.count = a.countVisibleElements(), e = 0, n = r.data.length; e < n; e++)l[e] = s, i = a._computeAngle(e), u[e] = i, s += i;
            for(e = 0, n = d.length; e < n; ++e)d[e]._options = a._resolveDataElementOptions(d[e], e), a.updateElement(d[e], e, t);
        },
        _updateRadius: function() {
            var t = this, e = t.chart, n = e.chartArea, i = e.options, a = Math.min(n.right - n.left, n.bottom - n.top);
            e.outerRadius = Math.max(a / 2, 0), e.innerRadius = Math.max(i.cutoutPercentage ? e.outerRadius / 100 * i.cutoutPercentage : 1, 0), e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount(), t.outerRadius = e.outerRadius - e.radiusLength * t.index, t.innerRadius = t.outerRadius - e.radiusLength;
        },
        updateElement: function(t, e, n) {
            var i = this, a = i.chart, r = i.getDataset(), o = a.options, s = o.animation, l = a.scale, u = a.data.labels, d = l.xCenter, h = l.yCenter, c = o.startAngle, f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]), g = i._starts[e], p = g + (t.hidden ? 0 : i._angles[e]), m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]), v = t._options || {};
            H.extend(t, {
                _datasetIndex: i.index,
                _index: e,
                _scale: l,
                _model: {
                    backgroundColor: v.backgroundColor,
                    borderColor: v.borderColor,
                    borderWidth: v.borderWidth,
                    borderAlign: v.borderAlign,
                    x: d,
                    y: h,
                    innerRadius: 0,
                    outerRadius: n ? m : f,
                    startAngle: n && s.animateRotate ? c : g,
                    endAngle: n && s.animateRotate ? c : p,
                    label: H.valueAtIndexOrDefault(u, e, u[e])
                }
            }), t.pivot();
        },
        countVisibleElements: function() {
            var t = this.getDataset(), e20 = this.getMeta(), n = 0;
            return H.each(e20.data, function(e, i) {
                isNaN(t.data[i]) || e.hidden || n++;
            }), n;
        },
        setHoverStyle: function(t) {
            var e = t._model, n = t._options, i = H.getHoverColor, a = H.valueOrDefault;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth
            }, e.backgroundColor = a(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = a(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = a(n.hoverBorderWidth, n.borderWidth);
        },
        _computeAngle: function(t) {
            var e = this, n = this.getMeta().count, i = e.getDataset(), a = e.getMeta();
            if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
            var r = {
                chart: e.chart,
                dataIndex: t,
                dataset: i,
                datasetIndex: e.index
            };
            return Gt([
                e.chart.options.elements.arc.angle,
                2 * Math.PI / n
            ], r, t);
        }
    });
    N._set("pie", H.clone(N.doughnut)), N._set("pie", {
        cutoutPercentage: 0
    });
    var Kt = Bt, Zt = H.valueOrDefault;
    N._set("radar", {
        spanGaps: !1,
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                fill: "start",
                tension: 0
            }
        }
    });
    var $t = it.extend({
        datasetElementType: kt.Line,
        dataElementType: kt.Point,
        linkScales: H.noop,
        _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill"
        ],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t) {
            var e, n, i = this, a = i.getMeta(), r = a.dataset, o = a.data || [], s = i.chart.scale, l = i._config;
            for(void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), r._scale = s, r._datasetIndex = i.index, r._children = o, r._loop = !0, r._model = i._resolveDatasetElementOptions(r), r.pivot(), e = 0, n = o.length; e < n; ++e)i.updateElement(o[e], e, t);
            for(i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)o[e].pivot();
        },
        updateElement: function(t, e, n) {
            var i = this, a = t.custom || {}, r = i.getDataset(), o = i.chart.scale, s = o.getPointPositionForValue(e, r.data[e]), l = i._resolveDataElementOptions(t, e), u = i.getMeta().dataset._model, d = n ? o.xCenter : s.x, h = n ? o.yCenter : s.y;
            t._scale = o, t._options = l, t._datasetIndex = i.index, t._index = e, t._model = {
                x: d,
                y: h,
                skip: a.skip || isNaN(d) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: Zt(a.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius
            };
        },
        _resolveDatasetElementOptions: function() {
            var t = this, e = t._config, n = t.chart.options, i = it.prototype._resolveDatasetElementOptions.apply(t, arguments);
            return i.spanGaps = Zt(e.spanGaps, n.spanGaps), i.tension = Zt(e.lineTension, n.elements.line.tension), i;
        },
        updateBezierControlPoints: function() {
            var t20, e21, n15, i, a = this.getMeta(), r = this.chart.chartArea, o = a.data || [];
            function s(t, e, n) {
                return Math.max(Math.min(t, n), e);
            }
            for(a.dataset._model.spanGaps && (o = o.filter(function(t) {
                return !t._model.skip;
            })), t20 = 0, e21 = o.length; t20 < e21; ++t20)n15 = o[t20]._model, i = H.splineCurve(H.previousItem(o, t20, !0)._model, n15, H.nextItem(o, t20, !0)._model, n15.tension), n15.controlPointPreviousX = s(i.previous.x, r.left, r.right), n15.controlPointPreviousY = s(i.previous.y, r.top, r.bottom), n15.controlPointNextX = s(i.next.x, r.left, r.right), n15.controlPointNextY = s(i.next.y, r.top, r.bottom);
        },
        setHoverStyle: function(t) {
            var e = t._model, n = t._options, i = H.getHoverColor;
            t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius
            }, e.backgroundColor = Zt(n.hoverBackgroundColor, i(n.backgroundColor)), e.borderColor = Zt(n.hoverBorderColor, i(n.borderColor)), e.borderWidth = Zt(n.hoverBorderWidth, n.borderWidth), e.radius = Zt(n.hoverRadius, n.radius);
        }
    });
    N._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [
                {
                    id: "x-axis-1",
                    type: "linear",
                    position: "bottom"
                }
            ],
            yAxes: [
                {
                    id: "y-axis-1",
                    type: "linear",
                    position: "left"
                }
            ]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t) {
                    return "(" + t.xLabel + ", " + t.yLabel + ")";
                }
            }
        }
    }), N._set("global", {
        datasets: {
            scatter: {
                showLine: !1
            }
        }
    });
    var Jt = {
        bar: Tt,
        bubble: Ot,
        doughnut: Bt,
        horizontalBar: Et,
        line: Yt,
        polarArea: Xt,
        pie: Kt,
        radar: $t,
        scatter: Yt
    };
    function Qt(t, e) {
        return t.native ? {
            x: t.x,
            y: t.y
        } : H.getRelativePosition(t, e);
    }
    function te(t, e) {
        var n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas();
        for(i = 0, r = l.length; i < r; ++i)for(a = 0, o = (n = l[i].data).length; a < o; ++a)(s = n[a])._view.skip || e(s);
    }
    function ee(t21, e) {
        var n = [];
        return te(t21, function(t) {
            t.inRange(e.x, e.y) && n.push(t);
        }), n;
    }
    function ne(t22, e, n, i) {
        var a = Number.POSITIVE_INFINITY, r = [];
        return te(t22, function(t) {
            if (!n || t.inRange(e.x, e.y)) {
                var o = t.getCenterPoint(), s = i(e, o);
                s < a ? (r = [
                    t
                ], a = s) : s === a && r.push(t);
            }
        }), r;
    }
    function ie(t23) {
        var e = -1 !== t23.indexOf("x"), n = -1 !== t23.indexOf("y");
        return function(t, i) {
            var a = e ? Math.abs(t.x - i.x) : 0, r = n ? Math.abs(t.y - i.y) : 0;
            return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
    }
    function ae(t24, e22, n) {
        var i = Qt(e22, t24);
        n.axis = n.axis || "x";
        var a = ie(n.axis), r = n.intersect ? ee(t24, i) : ne(t24, i, !1, a), o = [];
        return r.length ? (t24._getSortedVisibleDatasetMetas().forEach(function(t) {
            var e = t.data[r[0]._index];
            e && !e._view.skip && o.push(e);
        }), o) : [];
    }
    var re = {
        modes: {
            single: function(t25, e) {
                var n = Qt(e, t25), i = [];
                return te(t25, function(t) {
                    if (t.inRange(n.x, n.y)) return i.push(t), i;
                }), i.slice(0, 1);
            },
            label: ae,
            index: ae,
            dataset: function(t, e, n) {
                var i = Qt(e, t);
                n.axis = n.axis || "xy";
                var a = ie(n.axis), r = n.intersect ? ee(t, i) : ne(t, i, !1, a);
                return r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data), r;
            },
            "x-axis": function(t, e) {
                return ae(t, e, {
                    intersect: !1
                });
            },
            point: function(t, e) {
                return ee(t, Qt(e, t));
            },
            nearest: function(t, e, n) {
                var i = Qt(e, t);
                n.axis = n.axis || "xy";
                var a = ie(n.axis);
                return ne(t, i, n.intersect, a);
            },
            x: function(t26, e, n) {
                var i = Qt(e, t26), a = [], r = !1;
                return te(t26, function(t) {
                    t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                }), n.intersect && !r && (a = []), a;
            },
            y: function(t27, e, n) {
                var i = Qt(e, t27), a = [], r = !1;
                return te(t27, function(t) {
                    t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                }), n.intersect && !r && (a = []), a;
            }
        }
    }, oe = H.extend;
    function se(t28, e) {
        return H.where(t28, function(t) {
            return t.pos === e;
        });
    }
    function le(t29, e) {
        return t29.sort(function(t, n) {
            var i = e ? n : t, a = e ? t : n;
            return i.weight === a.weight ? i.index - a.index : i.weight - a.weight;
        });
    }
    function ue(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
    }
    function de(t, e, n) {
        var i, a, r = n.box, o = t.maxPadding;
        if (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? r.height : r.width, t[n.pos] += n.size, r.getPadding) {
            var s = r.getPadding();
            o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right);
        }
        if (i = e.outerWidth - ue(o, t, "left", "right"), a = e.outerHeight - ue(o, t, "top", "bottom"), i !== t.w || a !== t.h) {
            t.w = i, t.h = a;
            var l = n.horizontal ? [
                i,
                t.w
            ] : [
                a,
                t.h
            ];
            return !(l[0] === l[1] || isNaN(l[0]) && isNaN(l[1]));
        }
    }
    function he(t30, e) {
        var n = e.maxPadding;
        function i11(t31) {
            var i = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t31.forEach(function(t) {
                i[t] = Math.max(e[t], n[t]);
            }), i;
        }
        return i11(t30 ? [
            "left",
            "right"
        ] : [
            "top",
            "bottom"
        ]);
    }
    function ce(t, e, n) {
        var i, a, r, o, s, l, u = [];
        for(i = 0, a = t.length; i < a; ++i)(o = (r = t[i]).box).update(r.width || e.w, r.height || e.h, he(r.horizontal, e)), de(e, n, r) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(r);
        return s && ce(u, e, n) || l;
    }
    function fe(t, e, n) {
        var i, a, r, o, s = n.padding, l = e.x, u = e.y;
        for(i = 0, a = t.length; i < a; ++i)o = (r = t[i]).box, r.horizontal ? (o.left = o.fullWidth ? s.left : e.left, o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = e.top, o.bottom = e.top + e.h, o.height = o.bottom - o.top, l = o.right);
        e.x = l, e.y = u;
    }
    N._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var ge, pe = {
        defaults: {},
        addBox: function(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                return [
                    {
                        z: 0,
                        draw: function() {
                            e.draw.apply(e, arguments);
                        }
                    }
                ];
            }, t.boxes.push(e);
        },
        removeBox: function(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
        },
        configure: function(t, e, n) {
            for(var i, a = [
                "fullWidth",
                "position",
                "weight"
            ], r = a.length, o = 0; o < r; ++o)i = a[o], n.hasOwnProperty(i) && (e[i] = n[i]);
        },
        update: function(t32, e23, n16) {
            if (t32) {
                var i12 = t32.options.layout || {}, a9 = H.options.toPadding(i12.padding), r5 = e23 - a9.width, o = n16 - a9.height, s = function(t33) {
                    var e24 = function(t) {
                        var e, n, i, a = [];
                        for(e = 0, n = (t || []).length; e < n; ++e)i = t[e], a.push({
                            index: e,
                            box: i,
                            pos: i.position,
                            horizontal: i.isHorizontal(),
                            weight: i.weight
                        });
                        return a;
                    }(t33), n17 = le(se(e24, "left"), !0), i14 = le(se(e24, "right")), a11 = le(se(e24, "top"), !0), r = le(se(e24, "bottom"));
                    return {
                        leftAndTop: n17.concat(a11),
                        rightAndBottom: i14.concat(r),
                        chartArea: se(e24, "chartArea"),
                        vertical: n17.concat(i14),
                        horizontal: a11.concat(r)
                    };
                }(t32.boxes), l = s.vertical, u = s.horizontal, d = Object.freeze({
                    outerWidth: e23,
                    outerHeight: n16,
                    padding: a9,
                    availableWidth: r5,
                    vBoxMaxWidth: r5 / 2 / l.length,
                    hBoxMaxHeight: o / 2
                }), h = oe({
                    maxPadding: oe({}, a9),
                    w: r5,
                    h: o,
                    x: a9.left,
                    y: a9.top
                }, a9);
                !function(t, e) {
                    var n, i, a;
                    for(n = 0, i = t.length; n < i; ++n)(a = t[n]).width = a.horizontal ? a.box.fullWidth && e.availableWidth : e.vBoxMaxWidth, a.height = a.horizontal && e.hBoxMaxHeight;
                }(l.concat(u), d), ce(l, h, d), ce(u, h, d) && ce(l, h, d), function(t) {
                    var e = t.maxPadding;
                    function n18(n) {
                        var i = Math.max(e[n] - t[n], 0);
                        return t[n] += i, i;
                    }
                    t.y += n18("top"), t.x += n18("left"), n18("right"), n18("bottom");
                }(h), fe(s.leftAndTop, h, d), h.x += h.w, h.y += h.h, fe(s.rightAndBottom, h, d), t32.chartArea = {
                    left: h.left,
                    top: h.top,
                    right: h.left + h.w,
                    bottom: h.top + h.h
                }, H.each(s.chartArea, function(e) {
                    var n = e.box;
                    oe(n, t32.chartArea), n.update(h.w, h.h);
                });
            }
        }
    }, me = (ge = Object.freeze({
        __proto__: null,
        default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
    })) && ge.default || ge, ve = "$chartjs", be = "chartjs-size-monitor", xe = "chartjs-render-monitor", ye = "chartjs-render-animation", _e = [
        "animationstart",
        "webkitAnimationStart"
    ], ke = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    };
    function we(t, e) {
        var n = H.getStyle(t, e), i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0;
    }
    var Me = !!function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0;
                }
            });
            window.addEventListener("e", null, e);
        } catch (t34) {}
        return t;
    }() && {
        passive: !0
    };
    function Se(t, e, n) {
        t.addEventListener(e, n, Me);
    }
    function Ce(t, e, n) {
        t.removeEventListener(e, n, Me);
    }
    function Pe(t, e, n, i, a) {
        return {
            type: t,
            chart: e,
            native: a || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== i ? i : null
        };
    }
    function Ae(t) {
        var e = document.createElement("div");
        return e.className = t || "", e;
    }
    function De(t35, e25, n19) {
        var i15, a12, r, o, s = t35[ve] || (t35[ve] = {}), l = s.resizer = function(t) {
            var e = Ae(be), n = Ae(be + "-expand"), i = Ae(be + "-shrink");
            n.appendChild(Ae()), i.appendChild(Ae()), e.appendChild(n), e.appendChild(i), e._reset = function() {
                n.scrollLeft = 1e6, n.scrollTop = 1e6, i.scrollLeft = 1e6, i.scrollTop = 1e6;
            };
            var a = function() {
                e._reset(), t();
            };
            return Se(n, "scroll", a.bind(n, "expand")), Se(i, "scroll", a.bind(i, "shrink")), e;
        }((i15 = function() {
            if (s.resizer) {
                var i = n19.options.maintainAspectRatio && t35.parentNode, a = i ? i.clientWidth : 0;
                e25(Pe("resize", n19)), i && i.clientWidth < a && n19.canvas && e25(Pe("resize", n19));
            }
        }, r = !1, o = [], function() {
            o = Array.prototype.slice.call(arguments), a12 = a12 || this, r || (r = !0, H.requestAnimFrame.call(window, function() {
                r = !1, i15.apply(a12, o);
            }));
        }));
        !function(t36, e26) {
            var n = t36[ve] || (t36[ve] = {}), i = n.renderProxy = function(t) {
                t.animationName === ye && e26();
            };
            H.each(_e, function(e) {
                Se(t36, e, i);
            }), n.reflow = !!t36.offsetParent, t36.classList.add(xe);
        }(t35, function() {
            if (s.resizer) {
                var e = t35.parentNode;
                e && e !== l.parentNode && e.insertBefore(l, e.firstChild), l._reset();
            }
        });
    }
    function Te(t37) {
        var e27 = t37[ve] || {}, n20 = e27.resizer;
        delete e27.resizer, function(t) {
            var e28 = t[ve] || {}, n = e28.renderProxy;
            n && (H.each(_e, function(e) {
                Ce(t, e, n);
            }), delete e28.renderProxy), t.classList.remove(xe);
        }(t37), n20 && n20.parentNode && n20.parentNode.removeChild(n20);
    }
    var Ie = {
        disableCSSInjection: !1,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t38) {
            if (!this.disableCSSInjection) {
                var e29 = t38.getRootNode ? t38.getRootNode() : document;
                !function(t, e) {
                    var n = t[ve] || (t[ve] = {});
                    if (!n.containsStyles) {
                        n.containsStyles = !0, e = "/* Chart.js */\n" + e;
                        var i = document.createElement("style");
                        i.setAttribute("type", "text/css"), i.appendChild(document.createTextNode(e)), t.appendChild(i);
                    }
                }(e29.host ? e29 : document.head, me);
            }
        },
        acquireContext: function(t39, e31) {
            "string" == typeof t39 ? t39 = document.getElementById(t39) : t39.length && (t39 = t39[0]), t39 && t39.canvas && (t39 = t39.canvas);
            var n21 = t39 && t39.getContext && t39.getContext("2d");
            return n21 && n21.canvas === t39 ? (this._ensureLoaded(t39), function(t, e) {
                var n = t.style, i = t.getAttribute("height"), a = t.getAttribute("width");
                if (t[ve] = {
                    initial: {
                        height: i,
                        width: a,
                        style: {
                            display: n.display,
                            height: n.height,
                            width: n.width
                        }
                    }
                }, n.display = n.display || "block", null === a || "" === a) {
                    var r = we(t, "width");
                    void 0 !== r && (t.width = r);
                }
                if (null === i || "" === i) {
                    if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                        var o = we(t, "height");
                        void 0 !== r && (t.height = o);
                    }
                }
            }(t39, e31), n21) : null;
        },
        releaseContext: function(t40) {
            var e = t40.canvas;
            if (e[ve]) {
                var n22 = e[ve].initial;
                [
                    "height",
                    "width"
                ].forEach(function(t) {
                    var i = n22[t];
                    H.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
                }), H.each(n22.style || {}, function(t, n) {
                    e.style[n] = t;
                }), e.width = e.width, delete e[ve];
            }
        },
        addEventListener: function(t41, e32, n24) {
            var i16 = t41.canvas;
            if ("resize" !== e32) {
                var a = n24[ve] || (n24[ve] = {});
                Se(i16, e32, (a.proxies || (a.proxies = {}))[t41.id + "_" + e32] = function(e33) {
                    n24(function(t, e) {
                        var n = ke[t.type] || t.type, i = H.getRelativePosition(t, e);
                        return Pe(n, e, i.x, i.y, t);
                    }(e33, t41));
                });
            } else De(i16, n24, t41);
        },
        removeEventListener: function(t, e, n) {
            var i = t.canvas;
            if ("resize" !== e) {
                var a = ((n[ve] || {}).proxies || {})[t.id + "_" + e];
                a && Ce(i, e, a);
            } else Te(i);
        }
    };
    H.addEvent = Se, H.removeEvent = Ce;
    var Fe = Ie._enabled ? Ie : {
        acquireContext: function(t) {
            return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
    }, Oe = H.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
    }, Fe);
    N._set("global", {
        plugins: {}
    });
    var Le = {
        _plugins: [],
        _cacheId: 0,
        register: function(t42) {
            var e = this._plugins;
            [].concat(t42).forEach(function(t) {
                -1 === e.indexOf(t) && e.push(t);
            }), this._cacheId++;
        },
        unregister: function(t43) {
            var e = this._plugins;
            [].concat(t43).forEach(function(t) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
            }), this._cacheId++;
        },
        clear: function() {
            this._plugins = [], this._cacheId++;
        },
        count: function() {
            return this._plugins.length;
        },
        getAll: function() {
            return this._plugins;
        },
        notify: function(t, e, n) {
            var i, a, r, o, s, l = this.descriptors(t), u = l.length;
            for(i = 0; i < u; ++i)if ("function" == typeof (s = (r = (a = l[i]).plugin)[e]) && ((o = [
                t
            ].concat(n || [])).push(a.options), !1 === s.apply(r, o))) return !1;
            return !0;
        },
        descriptors: function(t44) {
            var e34 = t44.$plugins || (t44.$plugins = {});
            if (e34.id === this._cacheId) return e34.descriptors;
            var n = [], i = [], a13 = t44 && t44.config || {}, r = a13.options && a13.options.plugins || {};
            return this._plugins.concat(a13.plugins || []).forEach(function(t) {
                if (-1 === n.indexOf(t)) {
                    var e = t.id, a = r[e];
                    !1 !== a && (!0 === a && (a = H.clone(N.global.plugins[e])), n.push(t), i.push({
                        plugin: t,
                        options: a || {}
                    }));
                }
            }), e34.descriptors = i, e34.id = this._cacheId, i;
        },
        _invalidate: function(t) {
            delete t.$plugins;
        }
    }, Re = {
        constructors: {},
        defaults: {},
        registerScaleType: function(t, e, n) {
            this.constructors[t] = e, this.defaults[t] = H.clone(n);
        },
        getScaleConstructor: function(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
        },
        getScaleDefaults: function(t) {
            return this.defaults.hasOwnProperty(t) ? H.merge(Object.create(null), [
                N.scale,
                this.defaults[t]
            ]) : {};
        },
        updateScaleDefaults: function(t, e) {
            this.defaults.hasOwnProperty(t) && (this.defaults[t] = H.extend(this.defaults[t], e));
        },
        addScalesToLayout: function(t) {
            H.each(t.scales, function(e) {
                e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, pe.addBox(t, e);
            });
        }
    }, ze = H.valueOrDefault, Ne = H.rtl.getRtlAdapter;
    N._set("global", {
        tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: H.noop,
                title: function(t, e) {
                    var n = "", i = e.labels, a = i ? i.length : 0;
                    if (t.length > 0) {
                        var r = t[0];
                        r.label ? n = r.label : r.xLabel ? n = r.xLabel : a > 0 && r.index < a && (n = i[r.index]);
                    }
                    return n;
                },
                afterTitle: H.noop,
                beforeBody: H.noop,
                beforeLabel: H.noop,
                label: function(t, e) {
                    var n = e.datasets[t.datasetIndex].label || "";
                    return n && (n += ": "), H.isNullOrUndef(t.value) ? n += t.yLabel : n += t.value, n;
                },
                labelColor: function(t, e) {
                    var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                    return {
                        borderColor: n.borderColor,
                        backgroundColor: n.backgroundColor
                    };
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor;
                },
                afterLabel: H.noop,
                afterBody: H.noop,
                beforeFooter: H.noop,
                footer: H.noop,
                afterFooter: H.noop
            }
        }
    });
    var Be = {
        average: function(t) {
            if (!t.length) return !1;
            var e, n, i = 0, a = 0, r = 0;
            for(e = 0, n = t.length; e < n; ++e){
                var o = t[e];
                if (o && o.hasValue()) {
                    var s = o.tooltipPosition();
                    i += s.x, a += s.y, ++r;
                }
            }
            return {
                x: i / r,
                y: a / r
            };
        },
        nearest: function(t, e) {
            var n, i, a, r = e.x, o = e.y, s = Number.POSITIVE_INFINITY;
            for(n = 0, i = t.length; n < i; ++n){
                var l = t[n];
                if (l && l.hasValue()) {
                    var u = l.getCenterPoint(), d = H.distanceBetweenPoints(e, u);
                    d < s && (s = d, a = l);
                }
            }
            if (a) {
                var h = a.tooltipPosition();
                r = h.x, o = h.y;
            }
            return {
                x: r,
                y: o
            };
        }
    };
    function Ee(t, e) {
        return e && (H.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
    }
    function We(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
    }
    function Ve(t) {
        var e = N.global;
        return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: ze(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: ze(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: ze(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: ze(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: ze(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: ze(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: ze(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: ze(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: ze(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
        };
    }
    function He(t, e) {
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - t.xPadding : t.x + t.xPadding;
    }
    function je(t) {
        return Ee([], We(t));
    }
    var qe = K.extend({
        initialize: function() {
            this._model = Ve(this._options), this._lastActive = [];
        },
        getTitle: function() {
            var t = this, e = t._options, n = e.callbacks, i = n.beforeTitle.apply(t, arguments), a = n.title.apply(t, arguments), r = n.afterTitle.apply(t, arguments), o = [];
            return o = Ee(o, We(i)), o = Ee(o, We(a)), o = Ee(o, We(r));
        },
        getBeforeBody: function() {
            return je(this._options.callbacks.beforeBody.apply(this, arguments));
        },
        getBody: function(t45, e) {
            var n = this, i = n._options.callbacks, a = [];
            return H.each(t45, function(t) {
                var r = {
                    before: [],
                    lines: [],
                    after: []
                };
                Ee(r.before, We(i.beforeLabel.call(n, t, e))), Ee(r.lines, i.label.call(n, t, e)), Ee(r.after, We(i.afterLabel.call(n, t, e))), a.push(r);
            }), a;
        },
        getAfterBody: function() {
            return je(this._options.callbacks.afterBody.apply(this, arguments));
        },
        getFooter: function() {
            var t = this, e = t._options.callbacks, n = e.beforeFooter.apply(t, arguments), i = e.footer.apply(t, arguments), a = e.afterFooter.apply(t, arguments), r = [];
            return r = Ee(r, We(n)), r = Ee(r, We(i)), r = Ee(r, We(a));
        },
        update: function(t46) {
            var e35, n25, i17, a14, r7, o4, s3, l2, u2, d2, h2 = this, c2 = h2._options, f2 = h2._model, g2 = h2._model = Ve(c2), p = h2._active, m = h2._data, v = {
                xAlign: f2.xAlign,
                yAlign: f2.yAlign
            }, b = {
                x: f2.x,
                y: f2.y
            }, x = {
                width: f2.width,
                height: f2.height
            }, y = {
                x: f2.caretX,
                y: f2.caretY
            };
            if (p.length) {
                g2.opacity = 1;
                var _ = [], k = [];
                y = Be[c2.position].call(h2, p, h2._eventPosition);
                var w = [];
                for(e35 = 0, n25 = p.length; e35 < n25; ++e35)w.push((i17 = p[e35], a14 = void 0, r7 = void 0, o4 = void 0, s3 = void 0, l2 = void 0, u2 = void 0, d2 = void 0, a14 = i17._xScale, r7 = i17._yScale || i17._scale, o4 = i17._index, s3 = i17._datasetIndex, l2 = i17._chart.getDatasetMeta(s3).controller, u2 = l2._getIndexScale(), d2 = l2._getValueScale(), {
                    xLabel: a14 ? a14.getLabelForIndex(o4, s3) : "",
                    yLabel: r7 ? r7.getLabelForIndex(o4, s3) : "",
                    label: u2 ? "" + u2.getLabelForIndex(o4, s3) : "",
                    value: d2 ? "" + d2.getLabelForIndex(o4, s3) : "",
                    index: o4,
                    datasetIndex: s3,
                    x: i17._model.x,
                    y: i17._model.y
                }));
                c2.filter && (w = w.filter(function(t) {
                    return c2.filter(t, m);
                })), c2.itemSort && (w = w.sort(function(t, e) {
                    return c2.itemSort(t, e, m);
                })), H.each(w, function(t) {
                    _.push(c2.callbacks.labelColor.call(h2, t, h2._chart)), k.push(c2.callbacks.labelTextColor.call(h2, t, h2._chart));
                }), g2.title = h2.getTitle(w, m), g2.beforeBody = h2.getBeforeBody(w, m), g2.body = h2.getBody(w, m), g2.afterBody = h2.getAfterBody(w, m), g2.footer = h2.getFooter(w, m), g2.x = y.x, g2.y = y.y, g2.caretPadding = c2.caretPadding, g2.labelColors = _, g2.labelTextColors = k, g2.dataPoints = w, x = function(t47, e36) {
                    var n = t47._chart.ctx, i = 2 * e36.yPadding, a = 0, r = e36.body, o = r.reduce(function(t, e) {
                        return t + e.before.length + e.lines.length + e.after.length;
                    }, 0);
                    o += e36.beforeBody.length + e36.afterBody.length;
                    var s = e36.title.length, l = e36.footer.length, u = e36.titleFontSize, d = e36.bodyFontSize, h = e36.footerFontSize;
                    i += s * u, i += s ? (s - 1) * e36.titleSpacing : 0, i += s ? e36.titleMarginBottom : 0, i += o * d, i += o ? (o - 1) * e36.bodySpacing : 0, i += l ? e36.footerMarginTop : 0, i += l * h, i += l ? (l - 1) * e36.footerSpacing : 0;
                    var c = 0, f = function(t) {
                        a = Math.max(a, n.measureText(t).width + c);
                    };
                    return n.font = H.fontString(u, e36._titleFontStyle, e36._titleFontFamily), H.each(e36.title, f), n.font = H.fontString(d, e36._bodyFontStyle, e36._bodyFontFamily), H.each(e36.beforeBody.concat(e36.afterBody), f), c = e36.displayColors ? d + 2 : 0, H.each(r, function(t) {
                        H.each(t.before, f), H.each(t.lines, f), H.each(t.after, f);
                    }), c = 0, n.font = H.fontString(h, e36._footerFontStyle, e36._footerFontFamily), H.each(e36.footer, f), {
                        width: a += 2 * e36.xPadding,
                        height: i
                    };
                }(this, g2), b = function(t, e, n, i) {
                    var a = t.x, r = t.y, o = t.caretSize, s = t.caretPadding, l = t.cornerRadius, u = n.xAlign, d = n.yAlign, h = o + s, c = l + s;
                    return "right" === u ? a -= e.width : "center" === u && ((a -= e.width / 2) + e.width > i.width && (a = i.width - e.width), a < 0 && (a = 0)), "top" === d ? r += h : r -= "bottom" === d ? e.height + h : e.height / 2, "center" === d ? "left" === u ? a += h : "right" === u && (a -= h) : "left" === u ? a -= c : "right" === u && (a += c), {
                        x: a,
                        y: r
                    };
                }(g2, x, v = function(t48, e) {
                    var n, i, a, r, o, s = t48._model, l = t48._chart, u = t48._chart.chartArea, d = "center", h = "center";
                    s.y < e.height ? h = "top" : s.y > l.height - e.height && (h = "bottom");
                    var c = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2;
                    "center" === h ? (n = function(t) {
                        return t <= c;
                    }, i = function(t) {
                        return t > c;
                    }) : (n = function(t) {
                        return t <= e.width / 2;
                    }, i = function(t) {
                        return t >= l.width - e.width / 2;
                    }), a = function(t) {
                        return t + e.width + s.caretSize + s.caretPadding > l.width;
                    }, r = function(t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0;
                    }, o = function(t) {
                        return t <= f ? "top" : "bottom";
                    }, n(s.x) ? (d = "left", a(s.x) && (d = "center", h = o(s.y))) : i(s.x) && (d = "right", r(s.x) && (d = "center", h = o(s.y)));
                    var g = t48._options;
                    return {
                        xAlign: g.xAlign ? g.xAlign : d,
                        yAlign: g.yAlign ? g.yAlign : h
                    };
                }(this, x), h2._chart);
            } else g2.opacity = 0;
            return g2.xAlign = v.xAlign, g2.yAlign = v.yAlign, g2.x = b.x, g2.y = b.y, g2.width = x.width, g2.height = x.height, g2.caretX = y.x, g2.caretY = y.y, h2._model = g2, t46 && c2.custom && c2.custom.call(h2, g2), h2;
        },
        drawCaret: function(t, e) {
            var n = this._chart.ctx, i = this._view, a = this.getCaretPosition(t, e, i);
            n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
        },
        getCaretPosition: function(t, e, n) {
            var i, a, r, o, s, l, u = n.caretSize, d = n.cornerRadius, h = n.xAlign, c = n.yAlign, f = t.x, g = t.y, p = e.width, m = e.height;
            if ("center" === c) s = g + m / 2, "left" === h ? (a = (i = f) - u, r = i, o = s + u, l = s - u) : (a = (i = f + p) + u, r = i, o = s - u, l = s + u);
            else if ("left" === h ? (i = (a = f + d + u) - u, r = a + u) : "right" === h ? (i = (a = f + p - d - u) - u, r = a + u) : (i = (a = n.caretX) - u, r = a + u), "top" === c) s = (o = g) - u, l = o;
            else {
                s = (o = g + m) + u, l = o;
                var v = r;
                r = i, i = v;
            }
            return {
                x1: i,
                x2: a,
                x3: r,
                y1: o,
                y2: s,
                y3: l
            };
        },
        drawTitle: function(t, e, n) {
            var i, a, r, o = e.title, s = o.length;
            if (s) {
                var l = Ne(e.rtl, e.x, e.width);
                for(t.x = He(e, e._titleAlign), n.textAlign = l.textAlign(e._titleAlign), n.textBaseline = "middle", i = e.titleFontSize, a = e.titleSpacing, n.fillStyle = e.titleFontColor, n.font = H.fontString(i, e._titleFontStyle, e._titleFontFamily), r = 0; r < s; ++r)n.fillText(o[r], l.x(t.x), t.y + i / 2), t.y += i + a, r + 1 === s && (t.y += e.titleMarginBottom - a);
            }
        },
        drawBody: function(t, e37, n) {
            var i, a, r, o, s, l, u, d, h = e37.bodyFontSize, c = e37.bodySpacing, f = e37._bodyAlign, g = e37.body, p = e37.displayColors, m = 0, v = p ? He(e37, "left") : 0, b = Ne(e37.rtl, e37.x, e37.width), x = function(e) {
                n.fillText(e, b.x(t.x + m), t.y + h / 2), t.y += h + c;
            }, y = b.textAlign(f);
            for(n.textAlign = f, n.textBaseline = "middle", n.font = H.fontString(h, e37._bodyFontStyle, e37._bodyFontFamily), t.x = He(e37, y), n.fillStyle = e37.bodyFontColor, H.each(e37.beforeBody, x), m = p && "right" !== y ? "center" === f ? h / 2 + 1 : h + 2 : 0, s = 0, u = g.length; s < u; ++s){
                for(i = g[s], a = e37.labelTextColors[s], r = e37.labelColors[s], n.fillStyle = a, H.each(i.before, x), l = 0, d = (o = i.lines).length; l < d; ++l){
                    if (p) {
                        var _ = b.x(v);
                        n.fillStyle = e37.legendColorBackground, n.fillRect(b.leftForLtr(_, h), t.y, h, h), n.lineWidth = 1, n.strokeStyle = r.borderColor, n.strokeRect(b.leftForLtr(_, h), t.y, h, h), n.fillStyle = r.backgroundColor, n.fillRect(b.leftForLtr(b.xPlus(_, 1), h - 2), t.y + 1, h - 2, h - 2), n.fillStyle = a;
                    }
                    x(o[l]);
                }
                H.each(i.after, x);
            }
            m = 0, H.each(e37.afterBody, x), t.y -= c;
        },
        drawFooter: function(t, e, n) {
            var i, a, r = e.footer, o = r.length;
            if (o) {
                var s = Ne(e.rtl, e.x, e.width);
                for(t.x = He(e, e._footerAlign), t.y += e.footerMarginTop, n.textAlign = s.textAlign(e._footerAlign), n.textBaseline = "middle", i = e.footerFontSize, n.fillStyle = e.footerFontColor, n.font = H.fontString(i, e._footerFontStyle, e._footerFontFamily), a = 0; a < o; ++a)n.fillText(r[a], s.x(t.x), t.y + i / 2), t.y += i + e.footerSpacing;
            }
        },
        drawBackground: function(t, e, n, i) {
            n.fillStyle = e.backgroundColor, n.strokeStyle = e.borderColor, n.lineWidth = e.borderWidth;
            var a = e.xAlign, r = e.yAlign, o = t.x, s = t.y, l = i.width, u = i.height, d = e.cornerRadius;
            n.beginPath(), n.moveTo(o + d, s), "top" === r && this.drawCaret(t, i), n.lineTo(o + l - d, s), n.quadraticCurveTo(o + l, s, o + l, s + d), "center" === r && "right" === a && this.drawCaret(t, i), n.lineTo(o + l, s + u - d), n.quadraticCurveTo(o + l, s + u, o + l - d, s + u), "bottom" === r && this.drawCaret(t, i), n.lineTo(o + d, s + u), n.quadraticCurveTo(o, s + u, o, s + u - d), "center" === r && "left" === a && this.drawCaret(t, i), n.lineTo(o, s + d), n.quadraticCurveTo(o, s, o + d, s), n.closePath(), n.fill(), e.borderWidth > 0 && n.stroke();
        },
        draw: function() {
            var t = this._chart.ctx, e = this._view;
            if (0 !== e.opacity) {
                var n = {
                    width: e.width,
                    height: e.height
                }, i = {
                    x: e.x,
                    y: e.y
                }, a = Math.abs(e.opacity < .001) ? 0 : e.opacity, r = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                this._options.enabled && r && (t.save(), t.globalAlpha = a, this.drawBackground(i, e, t, n), i.y += e.yPadding, H.rtl.overrideTextDirection(t, e.textDirection), this.drawTitle(i, e, t), this.drawBody(i, e, t), this.drawFooter(i, e, t), H.rtl.restoreTextDirection(t, e.textDirection), t.restore());
            }
        },
        handleEvent: function(t) {
            var e, n = this, i = n._options;
            return n._lastActive = n._lastActive || [], "mouseout" === t.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(t, i.mode, i), i.reverse && n._active.reverse()), (e = !H.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
                x: t.x,
                y: t.y
            }, n.update(!0), n.pivot())), e;
        }
    }), Ue = Be, Ye = qe;
    Ye.positioners = Ue;
    var Ge = H.valueOrDefault;
    function Xe() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                if ("xAxes" === t || "yAxes" === t) {
                    var a, r, o, s = n[t].length;
                    for(e[t] || (e[t] = []), a = 0; a < s; ++a)o = n[t][a], r = Ge(o.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || o.type && o.type !== e[t][a].type ? H.merge(e[t][a], [
                        Re.getScaleDefaults(r),
                        o
                    ]) : H.merge(e[t][a], o);
                } else H._merger(t, e, n, i);
            }
        });
    }
    function Ke() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t, e, n, i) {
                var a = e[t] || Object.create(null), r = n[t];
                "scales" === t ? e[t] = Xe(a, r) : "scale" === t ? e[t] = H.merge(a, [
                    Re.getScaleDefaults(r.type),
                    r
                ]) : H._merger(t, e, n, i);
            }
        });
    }
    function Ze(t) {
        var e38 = t.options;
        H.each(t.scales, function(e) {
            pe.removeBox(t, e);
        }), e38 = Ke(N.global, N[t.config.type], e38), t.options = t.config.options = e38, t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.tooltip._options = e38.tooltips, t.tooltip.initialize();
    }
    function $e(t49, e, n) {
        var i, a = function(t) {
            return t.id === i;
        };
        do i = e + n++;
        while (H.findIndex(t49, a) >= 0)
        return i;
    }
    function Je(t) {
        return "top" === t || "bottom" === t;
    }
    function Qe(t, e) {
        return function(n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
        };
    }
    N._set("global", {
        elements: {},
        events: [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
    });
    var tn = function(t, e) {
        return this.construct(t, e), this;
    };
    H.extend(tn.prototype, {
        construct: function(t50, e39) {
            var n = this;
            e39 = function(t) {
                var e = (t = t || Object.create(null)).data = t.data || {};
                return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = Ke(N.global, N[t.type], t.options || {}), t;
            }(e39);
            var i = Oe.acquireContext(t50, e39), a = i && i.canvas, r = a && a.height, o = a && a.width;
            n.id = H.uid(), n.ctx = i, n.canvas = a, n.config = e39, n.width = o, n.height = r, n.aspectRatio = r ? o / r : null, n.options = e39.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, tn.instances[n.id] = n, Object.defineProperty(n, "data", {
                get: function() {
                    return n.config.data;
                },
                set: function(t) {
                    n.config.data = t;
                }
            }), i && a ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item");
        },
        initialize: function() {
            var t = this;
            return Le.notify(t, "beforeInit"), H.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.initToolTip(), Le.notify(t, "afterInit"), t;
        },
        clear: function() {
            return H.canvas.clear(this), this;
        },
        stop: function() {
            return J.cancelAnimation(this), this;
        },
        resize: function(t) {
            var e = this, n = e.options, i = e.canvas, a = n.maintainAspectRatio && e.aspectRatio || null, r = Math.max(0, Math.floor(H.getMaximumWidth(i))), o = Math.max(0, Math.floor(a ? r / a : H.getMaximumHeight(i)));
            if ((e.width !== r || e.height !== o) && (i.width = e.width = r, i.height = e.height = o, i.style.width = r + "px", i.style.height = o + "px", H.retinaScale(e, n.devicePixelRatio), !t)) {
                var s = {
                    width: r,
                    height: o
                };
                Le.notify(e, "resize", [
                    s
                ]), n.onResize && n.onResize(e, s), e.stop(), e.update({
                    duration: n.responsiveAnimationDuration
                });
            }
        },
        ensureScalesHaveIDs: function() {
            var t51 = this.options, e = t51.scales || {}, n26 = t51.scale;
            H.each(e.xAxes, function(t, n) {
                t.id || (t.id = $e(e.xAxes, "x-axis-", n));
            }), H.each(e.yAxes, function(t, n) {
                t.id || (t.id = $e(e.yAxes, "y-axis-", n));
            }), n26 && (n26.id = n26.id || "scale");
        },
        buildOrUpdateScales: function() {
            var t52 = this, e40 = t52.options, n = t52.scales || {}, i18 = [], a = Object.keys(n).reduce(function(t, e) {
                return t[e] = !1, t;
            }, {});
            e40.scales && (i18 = i18.concat((e40.scales.xAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "category",
                    dposition: "bottom"
                };
            }), (e40.scales.yAxes || []).map(function(t) {
                return {
                    options: t,
                    dtype: "linear",
                    dposition: "left"
                };
            }))), e40.scale && i18.push({
                options: e40.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
            }), H.each(i18, function(e) {
                var i = e.options, r = i.id, o = Ge(i.type, e.dtype);
                Je(i.position) !== Je(e.dposition) && (i.position = e.dposition), a[r] = !0;
                var s = null;
                if (r in n && n[r].type === o) (s = n[r]).options = i, s.ctx = t52.ctx, s.chart = t52;
                else {
                    var l = Re.getScaleConstructor(o);
                    if (!l) return;
                    s = new l({
                        id: r,
                        type: o,
                        options: i,
                        ctx: t52.ctx,
                        chart: t52
                    }), n[s.id] = s;
                }
                s.mergeTicksOptions(), e.isDefault && (t52.scale = s);
            }), H.each(a, function(t, e) {
                t || delete n[e];
            }), t52.scales = n, Re.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function() {
            var t, e, n = this, i = [], a = n.data.datasets;
            for(t = 0, e = a.length; t < e; t++){
                var r = a[t], o = n.getDatasetMeta(t), s = r.type || n.config.type;
                if (o.type && o.type !== s && (n.destroyDatasetMeta(t), o = n.getDatasetMeta(t)), o.type = s, o.order = r.order || 0, o.index = t, o.controller) o.controller.updateIndex(t), o.controller.linkScales();
                else {
                    var l = Jt[o.type];
                    if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
                    o.controller = new l(n, t), i.push(o.controller);
                }
            }
            return i;
        },
        resetElements: function() {
            var t = this;
            H.each(t.data.datasets, function(e, n) {
                t.getDatasetMeta(n).controller.reset();
            }, t);
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize();
        },
        update: function(t53) {
            var e, n, i = this;
            if (t53 && "object" == typeof t53 || (t53 = {
                duration: t53,
                lazy: arguments[1]
            }), Ze(i), Le._invalidate(i), !1 !== Le.notify(i, "beforeUpdate")) {
                i.tooltip._data = i.data;
                var a = i.buildOrUpdateControllers();
                for(e = 0, n = i.data.datasets.length; e < n; e++)i.getDatasetMeta(e).controller.buildOrUpdateElements();
                i.updateLayout(), i.options.animation && i.options.animation.duration && H.each(a, function(t) {
                    t.reset();
                }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], Le.notify(i, "afterUpdate"), i._layers.sort(Qe("z", "_idx")), i._bufferedRender ? i._bufferedRequest = {
                    duration: t53.duration,
                    easing: t53.easing,
                    lazy: t53.lazy
                } : i.render(t53);
            }
        },
        updateLayout: function() {
            var t54 = this;
            !1 !== Le.notify(t54, "beforeLayout") && (pe.update(this, this.width, this.height), t54._layers = [], H.each(t54.boxes, function(e) {
                e._configure && e._configure(), t54._layers.push.apply(t54._layers, e._layers());
            }, t54), t54._layers.forEach(function(t, e) {
                t._idx = e;
            }), Le.notify(t54, "afterScaleUpdate"), Le.notify(t54, "afterLayout"));
        },
        updateDatasets: function() {
            if (!1 !== Le.notify(this, "beforeDatasetsUpdate")) {
                for(var t = 0, e = this.data.datasets.length; t < e; ++t)this.updateDataset(t);
                Le.notify(this, "afterDatasetsUpdate");
            }
        },
        updateDataset: function(t) {
            var e = this.getDatasetMeta(t), n = {
                meta: e,
                index: t
            };
            !1 !== Le.notify(this, "beforeDatasetUpdate", [
                n
            ]) && (e.controller._update(), Le.notify(this, "afterDatasetUpdate", [
                n
            ]));
        },
        render: function(t55) {
            var e41 = this;
            t55 && "object" == typeof t55 || (t55 = {
                duration: t55,
                lazy: arguments[1]
            });
            var n27 = e41.options.animation, i19 = Ge(t55.duration, n27 && n27.duration), a15 = t55.lazy;
            if (!1 !== Le.notify(e41, "beforeRender")) {
                var r = function(t) {
                    Le.notify(e41, "afterRender"), H.callback(n27 && n27.onComplete, [
                        t
                    ], e41);
                };
                if (n27 && i19) {
                    var o = new $({
                        numSteps: i19 / 16.66,
                        easing: t55.easing || n27.easing,
                        render: function(t, e) {
                            var n = H.easing.effects[e.easing], i = e.currentStep, a = i / e.numSteps;
                            t.draw(n(a), a, i);
                        },
                        onAnimationProgress: n27.onProgress,
                        onAnimationComplete: r
                    });
                    J.addAnimation(e41, o, i19, a15);
                } else e41.draw(), r(new $({
                    numSteps: 0,
                    chart: e41
                }));
                return e41;
            }
        },
        draw: function(t) {
            var e, n, i = this;
            if (i.clear(), H.isNullOrUndef(t) && (t = 1), i.transition(t), !(i.width <= 0 || i.height <= 0) && !1 !== Le.notify(i, "beforeDraw", [
                t
            ])) {
                for(n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e)n[e].draw(i.chartArea);
                for(i.drawDatasets(t); e < n.length; ++e)n[e].draw(i.chartArea);
                i._drawTooltip(t), Le.notify(i, "afterDraw", [
                    t
                ]);
            }
        },
        transition: function(t) {
            for(var e = 0, n = (this.data.datasets || []).length; e < n; ++e)this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t);
        },
        _getSortedDatasetMetas: function(t) {
            var e, n, i = [];
            for(e = 0, n = (this.data.datasets || []).length; e < n; ++e)t && !this.isDatasetVisible(e) || i.push(this.getDatasetMeta(e));
            return i.sort(Qe("order", "index")), i;
        },
        _getSortedVisibleDatasetMetas: function() {
            return this._getSortedDatasetMetas(!0);
        },
        drawDatasets: function(t) {
            var e, n;
            if (!1 !== Le.notify(this, "beforeDatasetsDraw", [
                t
            ])) {
                for(n = (e = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n)this.drawDataset(e[n], t);
                Le.notify(this, "afterDatasetsDraw", [
                    t
                ]);
            }
        },
        drawDataset: function(t, e) {
            var n = {
                meta: t,
                index: t.index,
                easingValue: e
            };
            !1 !== Le.notify(this, "beforeDatasetDraw", [
                n
            ]) && (t.controller.draw(e), Le.notify(this, "afterDatasetDraw", [
                n
            ]));
        },
        _drawTooltip: function(t) {
            var e = this.tooltip, n = {
                tooltip: e,
                easingValue: t
            };
            !1 !== Le.notify(this, "beforeTooltipDraw", [
                n
            ]) && (e.draw(), Le.notify(this, "afterTooltipDraw", [
                n
            ]));
        },
        getElementAtEvent: function(t) {
            return re.modes.single(this, t);
        },
        getElementsAtEvent: function(t) {
            return re.modes.label(this, t, {
                intersect: !0
            });
        },
        getElementsAtXAxis: function(t) {
            return re.modes["x-axis"](this, t, {
                intersect: !0
            });
        },
        getElementsAtEventForMode: function(t, e, n) {
            var i = re.modes[e];
            return "function" == typeof i ? i(this, t, n) : [];
        },
        getDatasetAtEvent: function(t) {
            return re.modes.dataset(this, t, {
                intersect: !0
            });
        },
        getDatasetMeta: function(t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return n || (n = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e.order || 0,
                index: t
            }), n;
        },
        getVisibleDatasetCount: function() {
            for(var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)this.isDatasetVisible(e) && t++;
            return t;
        },
        isDatasetVisible: function(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
        },
        generateLegend: function() {
            return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function(t) {
            var e = this.id, n = this.data.datasets[t], i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]);
        },
        destroy: function() {
            var t, e, n = this, i = n.canvas;
            for(n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)n.destroyDatasetMeta(t);
            i && (n.unbindEvents(), H.canvas.clear(n), Oe.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Le.notify(n, "destroy"), delete tn.instances[n.id];
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function() {
            var t = this;
            t.tooltip = new Ye({
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips
            }, t);
        },
        bindEvents: function() {
            var t = this, e = t._listeners = {}, n = function() {
                t.eventHandler.apply(t, arguments);
            };
            H.each(t.options.events, function(i) {
                Oe.addEventListener(t, i, n), e[i] = n;
            }), t.options.responsive && (n = function() {
                t.resize();
            }, Oe.addEventListener(t, "resize", n), e.resize = n);
        },
        unbindEvents: function() {
            var t = this, e42 = t._listeners;
            e42 && (delete t._listeners, H.each(e42, function(e, n) {
                Oe.removeEventListener(t, n, e);
            }));
        },
        updateHoverStyle: function(t, e, n) {
            var i, a, r, o = n ? "set" : "remove";
            for(a = 0, r = t.length; a < r; ++a)(i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](i);
            "dataset" === e && this.getDatasetMeta(t[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]();
        },
        eventHandler: function(t) {
            var e = this, n = e.tooltip;
            if (!1 !== Le.notify(e, "beforeEvent", [
                t
            ])) {
                e._bufferedRender = !0, e._bufferedRequest = null;
                var i = e.handleEvent(t);
                n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)), Le.notify(e, "afterEvent", [
                    t
                ]);
                var a = e._bufferedRequest;
                return a ? e.render(a) : i && !e.animating && (e.stop(), e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                })), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
        },
        handleEvent: function(t) {
            var e, n = this, i = n.options || {}, a = i.hover;
            return n.lastActive = n.lastActive || [], "mouseout" === t.type ? n.active = [] : n.active = n.getElementsAtEventForMode(t, a.mode, a), H.callback(i.onHover || i.hover.onHover, [
                t.native,
                n.active
            ], n), "mouseup" !== t.type && "click" !== t.type || i.onClick && i.onClick.call(n, t.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1), n.active.length && a.mode && n.updateHoverStyle(n.active, a.mode, !0), e = !H.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, e;
        }
    }), tn.instances = {};
    var en = tn;
    tn.Controller = tn, tn.types = {}, H.configMerge = Ke, H.scaleMerge = Xe;
    function nn() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
    }
    function an(t) {
        this.options = t || {};
    }
    H.extend(an.prototype, {
        formats: nn,
        parse: nn,
        format: nn,
        add: nn,
        diff: nn,
        startOf: nn,
        endOf: nn,
        _create: function(t) {
            return t;
        }
    }), an.override = function(t) {
        H.extend(an.prototype, t);
    };
    var rn = {
        _date: an
    }, on = {
        formatters: {
            values: function(t) {
                return H.isArray(t) ? t : "" + t;
            },
            linear: function(t, e, n) {
                var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
                var a = H.log10(Math.abs(i)), r = "";
                if (0 !== t) {
                    if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                        var o = H.log10(Math.abs(t)), s = Math.floor(o) - Math.floor(a);
                        s = Math.max(Math.min(s, 20), 0), r = t.toExponential(s);
                    } else {
                        var l = -1 * Math.floor(a);
                        l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
                    }
                } else r = "0";
                return r;
            },
            logarithmic: function(t, e, n) {
                var i = t / Math.pow(10, Math.floor(H.log10(t)));
                return 0 === t ? "0" : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1 ? t.toExponential() : "";
            }
        }
    }, sn = H.isArray, ln = H.isNullOrUndef, un = H.valueOrDefault, dn = H.valueAtIndexOrDefault;
    function hn(t, e, n) {
        var i, a = t.getTicks().length, r = Math.min(e, a - 1), o = t.getPixelForTick(r), s = t._startPixel, l = t._endPixel;
        if (!(n && (i = 1 === a ? Math.max(o - s, l - o) : 0 === e ? (t.getPixelForTick(1) - o) / 2 : (o - t.getPixelForTick(r - 1)) / 2, (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6))) return o;
    }
    function cn(t56, e43, n28, i20) {
        var a16, r, o, s, l, u, d, h, c, f, g, p, m, v = n28.length, b = [], x = [], y = [], _ = 0, k = 0;
        for(a16 = 0; a16 < v; ++a16){
            if (s = n28[a16].label, l = n28[a16].major ? e43.major : e43.minor, t56.font = u = l.string, d = i20[u] = i20[u] || {
                data: {},
                gc: []
            }, h = l.lineHeight, c = f = 0, ln(s) || sn(s)) {
                if (sn(s)) for(r = 0, o = s.length; r < o; ++r)g = s[r], ln(g) || sn(g) || (c = H.measureText(t56, d.data, d.gc, c, g), f += h);
            } else c = H.measureText(t56, d.data, d.gc, c, s), f = h;
            b.push(c), x.push(f), y.push(h / 2), _ = Math.max(c, _), k = Math.max(f, k);
        }
        function w(t) {
            return {
                width: b[t] || 0,
                height: x[t] || 0,
                offset: y[t] || 0
            };
        }
        return function(t57, e) {
            H.each(t57, function(t) {
                var n, i = t.gc, a = i.length / 2;
                if (a > e) {
                    for(n = 0; n < a; ++n)delete t.data[i[n]];
                    i.splice(0, a);
                }
            });
        }(i20, v), p = b.indexOf(_), m = x.indexOf(k), {
            first: w(0),
            last: w(v - 1),
            widest: w(p),
            highest: w(m)
        };
    }
    function fn(t) {
        return t.drawTicks ? t.tickMarkLength : 0;
    }
    function gn(t) {
        var e, n;
        return t.display ? (e = H.options._parseFont(t), n = H.options.toPadding(t.padding), e.lineHeight + n.height) : 0;
    }
    function pn(t, e) {
        return H.extend(H.options._parseFont({
            fontFamily: un(e.fontFamily, t.fontFamily),
            fontSize: un(e.fontSize, t.fontSize),
            fontStyle: un(e.fontStyle, t.fontStyle),
            lineHeight: un(e.lineHeight, t.lineHeight)
        }), {
            color: H.options.resolve([
                e.fontColor,
                t.fontColor,
                N.global.defaultFontColor
            ])
        });
    }
    function mn(t) {
        var e = pn(t, t.minor);
        return {
            minor: e,
            major: t.major.enabled ? pn(t, t.major) : e
        };
    }
    function vn(t) {
        var e, n, i, a = [];
        for(n = 0, i = t.length; n < i; ++n)void 0 !== (e = t[n])._index && a.push(e);
        return a;
    }
    function bn(t, e, n, i) {
        var a, r, o, s, l = un(n, 0), u = Math.min(un(i, t.length), t.length), d = 0;
        for(e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l; s < 0;)d++, s = Math.round(l + d * e);
        for(r = Math.max(l, 0); r < u; r++)o = t[r], r === s ? (o._index = r, d++, s = Math.round(l + d * e)) : delete o.label;
    }
    N._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: !1,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: on.formatters.values,
            minor: {},
            major: {}
        }
    });
    var xn = K.extend({
        zeroLineIndex: 0,
        getPadding: function() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            };
        },
        getTicks: function() {
            return this._ticks;
        },
        _getLabels: function() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
        },
        mergeTicksOptions: function() {},
        beforeUpdate: function() {
            H.callback(this.options.beforeUpdate, [
                this
            ]);
        },
        update: function(t58, e44, n29) {
            var i21, a17, r8, o, s, l = this, u = l.options.ticks, d = u.sampleSize;
            if (l.beforeUpdate(), l.maxWidth = t58, l.maxHeight = e44, l.margins = H.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, n29), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks) for(o = [], i21 = 0, a17 = l.ticks.length; i21 < a17; ++i21)o.push({
                value: l.ticks[i21],
                major: !1
            });
            return l._ticks = o, s = d < o.length, r8 = l._convertTicksToLabels(s ? function(t, e) {
                for(var n = [], i = t.length / e, a = 0, r = t.length; a < r; a += i)n.push(t[Math.floor(a)]);
                return n;
            }(o, d) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (r8 = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = r8, l.afterUpdate(), l.minSize;
        },
        _configure: function() {
            var t, e, n = this, i = n.options.ticks.reverse;
            n.isHorizontal() ? (t = n.left, e = n.right) : (t = n.top, e = n.bottom, i = !i), n._startPixel = t, n._endPixel = e, n._reversePixels = i, n._length = e - t;
        },
        afterUpdate: function() {
            H.callback(this.options.afterUpdate, [
                this
            ]);
        },
        beforeSetDimensions: function() {
            H.callback(this.options.beforeSetDimensions, [
                this
            ]);
        },
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
        },
        afterSetDimensions: function() {
            H.callback(this.options.afterSetDimensions, [
                this
            ]);
        },
        beforeDataLimits: function() {
            H.callback(this.options.beforeDataLimits, [
                this
            ]);
        },
        determineDataLimits: H.noop,
        afterDataLimits: function() {
            H.callback(this.options.afterDataLimits, [
                this
            ]);
        },
        beforeBuildTicks: function() {
            H.callback(this.options.beforeBuildTicks, [
                this
            ]);
        },
        buildTicks: H.noop,
        afterBuildTicks: function(t) {
            var e = this;
            return sn(t) && t.length ? H.callback(e.options.afterBuildTicks, [
                e,
                t
            ]) : (e.ticks = H.callback(e.options.afterBuildTicks, [
                e,
                e.ticks
            ]) || e.ticks, t);
        },
        beforeTickToLabelConversion: function() {
            H.callback(this.options.beforeTickToLabelConversion, [
                this
            ]);
        },
        convertTicksToLabels: function() {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
        },
        afterTickToLabelConversion: function() {
            H.callback(this.options.afterTickToLabelConversion, [
                this
            ]);
        },
        beforeCalculateTickRotation: function() {
            H.callback(this.options.beforeCalculateTickRotation, [
                this
            ]);
        },
        calculateTickRotation: function() {
            var t, e, n, i, a, r, o, s = this, l = s.options, u = l.ticks, d = s.getTicks().length, h = u.minRotation || 0, c = u.maxRotation, f = h;
            !s._isVisible() || !u.display || h >= c || d <= 1 || !s.isHorizontal() ? s.labelRotation = h : (e = (t = s._getLabelSizes()).widest.width, n = t.highest.height - t.highest.offset, i = Math.min(s.maxWidth, s.chart.width - e), e + 6 > (a = l.offset ? s.maxWidth / d : i / (d - 1)) && (a = i / (d - (l.offset ? .5 : 1)), r = s.maxHeight - fn(l.gridLines) - u.padding - gn(l.scaleLabel), o = Math.sqrt(e * e + n * n), f = H.toDegrees(Math.min(Math.asin(Math.min((t.highest.height + 6) / a, 1)), Math.asin(Math.min(r / o, 1)) - Math.asin(n / o))), f = Math.max(h, Math.min(c, f))), s.labelRotation = f);
        },
        afterCalculateTickRotation: function() {
            H.callback(this.options.afterCalculateTickRotation, [
                this
            ]);
        },
        beforeFit: function() {
            H.callback(this.options.beforeFit, [
                this
            ]);
        },
        fit: function() {
            var t = this, e = t.minSize = {
                width: 0,
                height: 0
            }, n = t.chart, i = t.options, a = i.ticks, r = i.scaleLabel, o = i.gridLines, s = t._isVisible(), l = "bottom" === i.position, u = t.isHorizontal();
            if (u ? e.width = t.maxWidth : s && (e.width = fn(o) + gn(r)), u ? s && (e.height = fn(o) + gn(r)) : e.height = t.maxHeight, a.display && s) {
                var d = mn(a), h = t._getLabelSizes(), c = h.first, f = h.last, g = h.widest, p = h.highest, m = .4 * d.minor.lineHeight, v = a.padding;
                if (u) {
                    var b = 0 !== t.labelRotation, x = H.toRadians(t.labelRotation), y = Math.cos(x), _ = Math.sin(x), k = _ * g.width + y * (p.height - (b ? p.offset : 0)) + (b ? 0 : m);
                    e.height = Math.min(t.maxHeight, e.height + k + v);
                    var w, M, S = t.getPixelForTick(0) - t.left, C = t.right - t.getPixelForTick(t.getTicks().length - 1);
                    b ? (w = l ? y * c.width + _ * c.offset : _ * (c.height - c.offset), M = l ? _ * (f.height - f.offset) : y * f.width + _ * f.offset) : (w = c.width / 2, M = f.width / 2), t.paddingLeft = Math.max((w - S) * t.width / (t.width - S), 0) + 3, t.paddingRight = Math.max((M - C) * t.width / (t.width - C), 0) + 3;
                } else {
                    var P = a.mirror ? 0 : g.width + v + m;
                    e.width = Math.min(t.maxWidth, e.width + P), t.paddingTop = c.height / 2, t.paddingBottom = f.height / 2;
                }
            }
            t.handleMargins(), u ? (t.width = t._length = n.width - t.margins.left - t.margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t.margins.top - t.margins.bottom);
        },
        handleMargins: function() {
            var t = this;
            t.margins && (t.margins.left = Math.max(t.paddingLeft, t.margins.left), t.margins.top = Math.max(t.paddingTop, t.margins.top), t.margins.right = Math.max(t.paddingRight, t.margins.right), t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom));
        },
        afterFit: function() {
            H.callback(this.options.afterFit, [
                this
            ]);
        },
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
        },
        isFullWidth: function() {
            return this.options.fullWidth;
        },
        getRightValue: function(t) {
            if (ln(t)) return NaN;
            if (("number" == typeof t || t instanceof Number) && !isFinite(t)) return NaN;
            if (t) {
                if (this.isHorizontal()) {
                    if (void 0 !== t.x) return this.getRightValue(t.x);
                } else if (void 0 !== t.y) return this.getRightValue(t.y);
            }
            return t;
        },
        _convertTicksToLabels: function(t59) {
            var e, n, i, a = this;
            for(a.ticks = t59.map(function(t) {
                return t.value;
            }), a.beforeTickToLabelConversion(), e = a.convertTicksToLabels(t59) || a.ticks, a.afterTickToLabelConversion(), n = 0, i = t59.length; n < i; ++n)t59[n].label = e[n];
            return e;
        },
        _getLabelSizes: function() {
            var t = this, e = t._labelSizes;
            return e || (t._labelSizes = e = cn(t.ctx, mn(t.options.ticks), t.getTicks(), t.longestTextCache), t.longestLabelWidth = e.widest.width), e;
        },
        _parseValue: function(t) {
            var e, n, i, a;
            return sn(t) ? (e = +this.getRightValue(t[0]), n = +this.getRightValue(t[1]), i = Math.min(e, n), a = Math.max(e, n)) : (e = void 0, n = t = +this.getRightValue(t), i = t, a = t), {
                min: i,
                max: a,
                start: e,
                end: n
            };
        },
        _getScaleLabel: function(t) {
            var e = this._parseValue(t);
            return void 0 !== e.start ? "[" + e.start + ", " + e.end + "]" : +this.getRightValue(t);
        },
        getLabelForIndex: H.noop,
        getPixelForValue: H.noop,
        getValueForPixel: H.noop,
        getPixelForTick: function(t) {
            var e = this.options.offset, n = this._ticks.length, i = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1 ? null : this.getPixelForDecimal(t * i + (e ? i / 2 : 0));
        },
        getPixelForDecimal: function(t) {
            return this._reversePixels && (t = 1 - t), this._startPixel + t * this._length;
        },
        getDecimalForPixel: function(t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function() {
            var t = this.min, e = this.max;
            return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        },
        _autoSkip: function(t60) {
            var e45, n30, i22, a18, r9 = this.options.ticks, o5 = this._length, s4 = r9.maxTicksLimit || o5 / this._tickSize() + 1, l3 = r9.major.enabled ? function(t) {
                var e, n, i = [];
                for(e = 0, n = t.length; e < n; e++)t[e].major && i.push(e);
                return i;
            }(t60) : [], u3 = l3.length, d = l3[0], h = l3[u3 - 1];
            if (u3 > s4) return function(t, e, n) {
                var i, a, r = 0, o = e[0];
                for(n = Math.ceil(n), i = 0; i < t.length; i++)a = t[i], i === o ? (a._index = i, o = e[++r * n]) : delete a.label;
            }(t60, l3, u3 / s4), vn(t60);
            if (i22 = function(t61, e46, n31, i23) {
                var a, r, o, s, l = function(t) {
                    var e, n, i = t.length;
                    if (i < 2) return !1;
                    for(n = t[0], e = 1; e < i; ++e)if (t[e] - t[e - 1] !== n) return !1;
                    return n;
                }(t61), u = (e46.length - 1) / i23;
                if (!l) return Math.max(u, 1);
                for(o = 0, s = (a = H.math._factorize(l)).length - 1; o < s; o++)if ((r = a[o]) > u) return r;
                return Math.max(u, 1);
            }(l3, t60, 0, s4), u3 > 0) {
                for(e45 = 0, n30 = u3 - 1; e45 < n30; e45++)bn(t60, i22, l3[e45], l3[e45 + 1]);
                return a18 = u3 > 1 ? (h - d) / (u3 - 1) : null, bn(t60, i22, H.isNullOrUndef(a18) ? 0 : d - a18, d), bn(t60, i22, h, H.isNullOrUndef(a18) ? t60.length : h + a18), vn(t60);
            }
            return bn(t60, i22), vn(t60);
        },
        _tickSize: function() {
            var t = this.options.ticks, e = H.toRadians(this.labelRotation), n = Math.abs(Math.cos(e)), i = Math.abs(Math.sin(e)), a = this._getLabelSizes(), r = t.autoSkipPadding || 0, o = a ? a.widest.width + r : 0, s = a ? a.highest.height + r : 0;
            return this.isHorizontal() ? s * n > o * i ? o / n : s / i : s * i < o * n ? s / n : o / i;
        },
        _isVisible: function() {
            var t, e, n, i = this.chart, a = this.options.display;
            if ("auto" !== a) return !!a;
            for(t = 0, e = i.data.datasets.length; t < e; ++t)if (i.isDatasetVisible(t) && ((n = i.getDatasetMeta(t)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
            return !1;
        },
        _computeGridLineItems: function(t62) {
            var e, n, i, a, r, o, s, l, u, d, h, c, f, g, p, m, v, b = this, x = b.chart, y = b.options, _ = y.gridLines, k = y.position, w = _.offsetGridLines, M = b.isHorizontal(), S = b._ticksToDraw, C = S.length + (w ? 1 : 0), P = fn(_), A = [], D = _.drawBorder ? dn(_.lineWidth, 0, 0) : 0, T = D / 2, I = H._alignPixel, F = function(t) {
                return I(x, t, D);
            };
            for("top" === k ? (e = F(b.bottom), s = b.bottom - P, u = e - T, h = F(t62.top) + T, f = t62.bottom) : "bottom" === k ? (e = F(b.top), h = t62.top, f = F(t62.bottom) - T, s = e + T, u = b.top + P) : "left" === k ? (e = F(b.right), o = b.right - P, l = e - T, d = F(t62.left) + T, c = t62.right) : (e = F(b.left), d = t62.left, c = F(t62.right) - T, o = e + T, l = b.left + P), n = 0; n < C; ++n)i = S[n] || {}, ln(i.label) && n < S.length || (n === b.zeroLineIndex && y.offset === w ? (g = _.zeroLineWidth, p = _.zeroLineColor, m = _.zeroLineBorderDash || [], v = _.zeroLineBorderDashOffset || 0) : (g = dn(_.lineWidth, n, 1), p = dn(_.color, n, "rgba(0,0,0,0.1)"), m = _.borderDash || [], v = _.borderDashOffset || 0), void 0 !== (a = hn(b, i._index || n, w)) && (r = I(x, a, g), M ? o = l = d = c = r : s = u = h = f = r, A.push({
                tx1: o,
                ty1: s,
                tx2: l,
                ty2: u,
                x1: d,
                y1: h,
                x2: c,
                y2: f,
                width: g,
                color: p,
                borderDash: m,
                borderDashOffset: v
            })));
            return A.ticksLength = C, A.borderValue = e, A;
        },
        _computeLabelItems: function() {
            var t, e, n, i, a, r, o, s, l, u, d, h, c = this, f = c.options, g = f.ticks, p = f.position, m = g.mirror, v = c.isHorizontal(), b = c._ticksToDraw, x = mn(g), y = g.padding, _ = fn(f.gridLines), k = -H.toRadians(c.labelRotation), w = [];
            for("top" === p ? (r = c.bottom - _ - y, o = k ? "left" : "center") : "bottom" === p ? (r = c.top + _ + y, o = k ? "right" : "center") : "left" === p ? (a = c.right - (m ? 0 : _) - y, o = m ? "left" : "right") : (a = c.left + (m ? 0 : _) + y, o = m ? "right" : "left"), t = 0, e = b.length; t < e; ++t)i = (n = b[t]).label, ln(i) || (s = c.getPixelForTick(n._index || t) + g.labelOffset, u = (l = n.major ? x.major : x.minor).lineHeight, d = sn(i) ? i.length : 1, v ? (a = s, h = "top" === p ? ((k ? 1 : .5) - d) * u : (k ? 0 : .5) * u) : (r = s, h = (1 - d) * u / 2), w.push({
                x: a,
                y: r,
                rotation: k,
                label: i,
                font: l,
                textOffset: h,
                textAlign: o
            }));
            return w;
        },
        _drawGrid: function(t) {
            var e = this, n = e.options.gridLines;
            if (n.display) {
                var i, a, r, o, s, l = e.ctx, u = e.chart, d = H._alignPixel, h = n.drawBorder ? dn(n.lineWidth, 0, 0) : 0, c = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
                for(r = 0, o = c.length; r < o; ++r)i = (s = c[r]).width, a = s.color, i && a && (l.save(), l.lineWidth = i, l.strokeStyle = a, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
                if (h) {
                    var f, g, p, m, v = h, b = dn(n.lineWidth, c.ticksLength - 1, 1), x = c.borderValue;
                    e.isHorizontal() ? (f = d(u, e.left, v) - v / 2, g = d(u, e.right, b) + b / 2, p = m = x) : (p = d(u, e.top, v) - v / 2, m = d(u, e.bottom, b) + b / 2, f = g = x), l.lineWidth = h, l.strokeStyle = dn(n.color, 0), l.beginPath(), l.moveTo(f, p), l.lineTo(g, m), l.stroke();
                }
            }
        },
        _drawLabels: function() {
            var t = this;
            if (t.options.ticks.display) {
                var e, n, i, a, r, o, s, l, u = t.ctx, d = t._labelItems || (t._labelItems = t._computeLabelItems());
                for(e = 0, i = d.length; e < i; ++e){
                    if (o = (r = d[e]).font, u.save(), u.translate(r.x, r.y), u.rotate(r.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = r.textAlign, s = r.label, l = r.textOffset, sn(s)) for(n = 0, a = s.length; n < a; ++n)u.fillText("" + s[n], 0, l), l += o.lineHeight;
                    else u.fillText(s, 0, l);
                    u.restore();
                }
            }
        },
        _drawTitle: function() {
            var t = this, e = t.ctx, n = t.options, i = n.scaleLabel;
            if (i.display) {
                var a, r, o = un(i.fontColor, N.global.defaultFontColor), s = H.options._parseFont(i), l = H.options.toPadding(i.padding), u = s.lineHeight / 2, d = n.position, h = 0;
                if (t.isHorizontal()) a = t.left + t.width / 2, r = "bottom" === d ? t.bottom - u - l.bottom : t.top + u + l.top;
                else {
                    var c = "left" === d;
                    a = c ? t.left + u + l.top : t.right - u - l.top, r = t.top + t.height / 2, h = c ? -0.5 * Math.PI : .5 * Math.PI;
                }
                e.save(), e.translate(a, r), e.rotate(h), e.textAlign = "center", e.textBaseline = "middle", e.fillStyle = o, e.font = s.string, e.fillText(i.labelString, 0, 0), e.restore();
            }
        },
        draw: function(t) {
            this._isVisible() && (this._drawGrid(t), this._drawTitle(), this._drawLabels());
        },
        _layers: function() {
            var t = this, e = t.options, n = e.ticks && e.ticks.z || 0, i = e.gridLines && e.gridLines.z || 0;
            return t._isVisible() && n !== i && t.draw === t._draw ? [
                {
                    z: i,
                    draw: function() {
                        t._drawGrid.apply(t, arguments), t._drawTitle.apply(t, arguments);
                    }
                },
                {
                    z: n,
                    draw: function() {
                        t._drawLabels.apply(t, arguments);
                    }
                }
            ] : [
                {
                    z: n,
                    draw: function() {
                        t.draw.apply(t, arguments);
                    }
                }
            ];
        },
        _getMatchingVisibleMetas: function(t) {
            var e = this, n = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function(i) {
                return (!t || i.type === t) && (n ? i.xAxisID === e.id : i.yAxisID === e.id);
            });
        }
    });
    xn.prototype._draw = xn.prototype.draw;
    var yn = xn, _n = H.isNullOrUndef, kn = yn.extend({
        determineDataLimits: function() {
            var t, e = this, n = e._getLabels(), i = e.options.ticks, a = i.min, r = i.max, o = 0, s = n.length - 1;
            void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t), void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t), e.minIndex = o, e.maxIndex = s, e.min = n[o], e.max = n[s];
        },
        buildTicks: function() {
            var t = this._getLabels(), e = this.minIndex, n = this.maxIndex;
            this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
        },
        getLabelForIndex: function(t, e) {
            var n = this.chart;
            return n.getDatasetMeta(e).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[e].data[t]) : this._getLabels()[t];
        },
        _configure: function() {
            var t = this, e = t.options.offset, n = t.ticks;
            yn.prototype._configure.call(t), t.isHorizontal() || (t._reversePixels = !t._reversePixels), n && (t._startValue = t.minIndex - (e ? .5 : 0), t._valueRange = Math.max(n.length - (e ? 0 : 1), 1));
        },
        getPixelForValue: function(t, e, n) {
            var i, a, r, o = this;
            return _n(e) || _n(n) || (t = o.chart.data.datasets[n].data[e]), _n(t) || (i = o.isHorizontal() ? t.x : t.y), (void 0 !== i || void 0 !== t && isNaN(e)) && (a = o._getLabels(), t = H.valueOrDefault(i, t), e = -1 !== (r = a.indexOf(t)) ? r : e, isNaN(e) && (e = t)), o.getPixelForDecimal((e - o._startValue) / o._valueRange);
        },
        getPixelForTick: function(t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t], t + this.minIndex);
        },
        getValueForPixel: function(t) {
            var e = Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
            return Math.min(Math.max(e, 0), this.ticks.length - 1);
        },
        getBasePixel: function() {
            return this.bottom;
        }
    }), wn = {
        position: "bottom"
    };
    kn._defaults = wn;
    var Mn = H.noop, Sn = H.isNullOrUndef;
    var Cn = yn.extend({
        getRightValue: function(t) {
            return "string" == typeof t ? +t : yn.prototype.getRightValue.call(this, t);
        },
        handleTickRangeOptions: function() {
            var t = this, e = t.options.ticks;
            if (e.beginAtZero) {
                var n = H.sign(t.min), i = H.sign(t.max);
                n < 0 && i < 0 ? t.max = 0 : n > 0 && i > 0 && (t.min = 0);
            }
            var a = void 0 !== e.min || void 0 !== e.suggestedMin, r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== r && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
        },
        getTickLimit: function() {
            var t, e = this.options.ticks, n = e.stepSize, i = e.maxTicksLimit;
            return n ? t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (t = this._computeTickLimit(), i = i || 11), i && (t = Math.min(i, t)), t;
        },
        _computeTickLimit: function() {
            return Number.POSITIVE_INFINITY;
        },
        handleDirectionalChanges: Mn,
        buildTicks: function() {
            var t63 = this, e47 = t63.options.ticks, n32 = t63.getTickLimit(), i24 = {
                maxTicks: n32 = Math.max(2, n32),
                min: e47.min,
                max: e47.max,
                precision: e47.precision,
                stepSize: H.valueOrDefault(e47.fixedStepSize, e47.stepSize)
            }, a19 = t63.ticks = function(t, e) {
                var n, i, a, r, o = [], s = t.stepSize, l = s || 1, u = t.maxTicks - 1, d = t.min, h = t.max, c = t.precision, f = e.min, g = e.max, p = H.niceNum((g - f) / u / l) * l;
                if (p < 1e-14 && Sn(d) && Sn(h)) return [
                    f,
                    g
                ];
                (r = Math.ceil(g / p) - Math.floor(f / p)) > u && (p = H.niceNum(r * p / u / l) * l), s || Sn(c) ? n = Math.pow(10, H._decimalPlaces(p)) : (n = Math.pow(10, c), p = Math.ceil(p * n) / n), i = Math.floor(f / p) * p, a = Math.ceil(g / p) * p, s && (!Sn(d) && H.almostWhole(d / p, p / 1e3) && (i = d), !Sn(h) && H.almostWhole(h / p, p / 1e3) && (a = h)), r = (a - i) / p, r = H.almostEquals(r, Math.round(r), p / 1e3) ? Math.round(r) : Math.ceil(r), i = Math.round(i * n) / n, a = Math.round(a * n) / n, o.push(Sn(d) ? i : d);
                for(var m = 1; m < r; ++m)o.push(Math.round((i + m * p) * n) / n);
                return o.push(Sn(h) ? a : h), o;
            }(i24, t63);
            t63.handleDirectionalChanges(), t63.max = H.max(a19), t63.min = H.min(a19), e47.reverse ? (a19.reverse(), t63.start = t63.max, t63.end = t63.min) : (t63.start = t63.min, t63.end = t63.max);
        },
        convertTicksToLabels: function() {
            var t = this;
            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), yn.prototype.convertTicksToLabels.call(t);
        },
        _configure: function() {
            var t, e = this, n = e.getTicks(), i = e.min, a = e.max;
            yn.prototype._configure.call(e), e.options.offset && n.length && (i -= t = (a - i) / Math.max(n.length - 1, 1) / 2, a += t), e._startValue = i, e._endValue = a, e._valueRange = a - i;
        }
    }), Pn = {
        position: "left",
        ticks: {
            callback: on.formatters.linear
        }
    };
    function An(t64, e48, n33, i25) {
        var a, r, o = t64.options, s = function(t, e, n) {
            var i = [
                n.type,
                void 0 === e && void 0 === n.stack ? n.index : "",
                n.stack
            ].join(".");
            return void 0 === t[i] && (t[i] = {
                pos: [],
                neg: []
            }), t[i];
        }(e48, o.stacked, n33), l = s.pos, u = s.neg, d = i25.length;
        for(a = 0; a < d; ++a)r = t64._parseValue(i25[a]), isNaN(r.min) || isNaN(r.max) || n33.data[a].hidden || (l[a] = l[a] || 0, u[a] = u[a] || 0, o.relativePoints ? l[a] = 100 : r.min < 0 || r.max < 0 ? u[a] += r.min : l[a] += r.max);
    }
    function Dn(t, e, n) {
        var i, a, r = n.length;
        for(i = 0; i < r; ++i)a = t._parseValue(n[i]), isNaN(a.min) || isNaN(a.max) || e.data[i].hidden || (t.min = Math.min(t.min, a.min), t.max = Math.max(t.max, a.max));
    }
    var Tn = Cn.extend({
        determineDataLimits: function() {
            var t65, e, n, i, a = this, r = a.options, o = a.chart.data.datasets, s = a._getMatchingVisibleMetas(), l = r.stacked, u = {}, d = s.length;
            if (a.min = Number.POSITIVE_INFINITY, a.max = Number.NEGATIVE_INFINITY, void 0 === l) for(t65 = 0; !l && t65 < d; ++t65)l = void 0 !== (e = s[t65]).stack;
            for(t65 = 0; t65 < d; ++t65)n = o[(e = s[t65]).index].data, l ? An(a, u, e, n) : Dn(a, e, n);
            H.each(u, function(t) {
                i = t.pos.concat(t.neg), a.min = Math.min(a.min, H.min(i)), a.max = Math.max(a.max, H.max(i));
            }), a.min = H.isFinite(a.min) && !isNaN(a.min) ? a.min : 0, a.max = H.isFinite(a.max) && !isNaN(a.max) ? a.max : 1, a.handleTickRangeOptions();
        },
        _computeTickLimit: function() {
            var t;
            return this.isHorizontal() ? Math.ceil(this.width / 40) : (t = H.options._parseFont(this.options.ticks), Math.ceil(this.height / t.lineHeight));
        },
        handleDirectionalChanges: function() {
            this.isHorizontal() || this.ticks.reverse();
        },
        getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
        },
        getPixelForValue: function(t) {
            return this.getPixelForDecimal((+this.getRightValue(t) - this._startValue) / this._valueRange);
        },
        getValueForPixel: function(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        },
        getPixelForTick: function(t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
        }
    }), In = Pn;
    Tn._defaults = In;
    var Fn = H.valueOrDefault, On = H.math.log10;
    var Ln = {
        position: "left",
        ticks: {
            callback: on.formatters.logarithmic
        }
    };
    function Rn(t, e) {
        return H.isFinite(t) && t >= 0 ? t : e;
    }
    var zn = yn.extend({
        determineDataLimits: function() {
            var t66, e49, n34, i, a, r, o = this, s = o.options, l = o.chart, u = l.data.datasets, d = o.isHorizontal();
            function h(t) {
                return d ? t.xAxisID === o.id : t.yAxisID === o.id;
            }
            o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
            var c = s.stacked;
            if (void 0 === c) {
                for(t66 = 0; t66 < u.length; t66++)if (e49 = l.getDatasetMeta(t66), l.isDatasetVisible(t66) && h(e49) && void 0 !== e49.stack) {
                    c = !0;
                    break;
                }
            }
            if (s.stacked || c) {
                var f = {};
                for(t66 = 0; t66 < u.length; t66++){
                    var g = [
                        (e49 = l.getDatasetMeta(t66)).type,
                        void 0 === s.stacked && void 0 === e49.stack ? t66 : "",
                        e49.stack
                    ].join(".");
                    if (l.isDatasetVisible(t66) && h(e49)) for(void 0 === f[g] && (f[g] = []), a = 0, r = (i = u[t66].data).length; a < r; a++){
                        var p = f[g];
                        n34 = o._parseValue(i[a]), isNaN(n34.min) || isNaN(n34.max) || e49.data[a].hidden || n34.min < 0 || n34.max < 0 || (p[a] = p[a] || 0, p[a] += n34.max);
                    }
                }
                H.each(f, function(t) {
                    if (t.length > 0) {
                        var e = H.min(t), n = H.max(t);
                        o.min = Math.min(o.min, e), o.max = Math.max(o.max, n);
                    }
                });
            } else for(t66 = 0; t66 < u.length; t66++)if (e49 = l.getDatasetMeta(t66), l.isDatasetVisible(t66) && h(e49)) for(a = 0, r = (i = u[t66].data).length; a < r; a++)n34 = o._parseValue(i[a]), isNaN(n34.min) || isNaN(n34.max) || e49.data[a].hidden || n34.min < 0 || n34.max < 0 || (o.min = Math.min(n34.min, o.min), o.max = Math.max(n34.max, o.max), 0 !== n34.min && (o.minNotZero = Math.min(n34.min, o.minNotZero)));
            o.min = H.isFinite(o.min) ? o.min : null, o.max = H.isFinite(o.max) ? o.max : null, o.minNotZero = H.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions();
        },
        handleTickRangeOptions: function() {
            var t = this, e = t.options.ticks;
            t.min = Rn(e.min, t.min), t.max = Rn(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(On(t.min)) - 1), t.max = Math.pow(10, Math.floor(On(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(On(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(On(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(On(t.max))) : t.minNotZero = 1);
        },
        buildTicks: function() {
            var t67 = this, e50 = t67.options.ticks, n35 = !t67.isHorizontal(), i26 = {
                min: Rn(e50.min),
                max: Rn(e50.max)
            }, a20 = t67.ticks = function(t, e) {
                var n, i, a = [], r = Fn(t.min, Math.pow(10, Math.floor(On(e.min)))), o = Math.floor(On(e.max)), s = Math.ceil(e.max / Math.pow(10, o));
                0 === r ? (n = Math.floor(On(e.minNotZero)), i = Math.floor(e.minNotZero / Math.pow(10, n)), a.push(r), r = i * Math.pow(10, n)) : (n = Math.floor(On(r)), i = Math.floor(r / Math.pow(10, n)));
                var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                do a.push(r), 10 === ++i && (i = 1, l = ++n >= 0 ? 1 : l), r = Math.round(i * Math.pow(10, n) * l) / l;
                while (n < o || n === o && i < s)
                var u = Fn(t.max, r);
                return a.push(u), a;
            }(i26, t67);
            t67.max = H.max(a20), t67.min = H.min(a20), e50.reverse ? (n35 = !n35, t67.start = t67.max, t67.end = t67.min) : (t67.start = t67.min, t67.end = t67.max), n35 && a20.reverse();
        },
        convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice(), yn.prototype.convertTicksToLabels.call(this);
        },
        getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
        },
        getPixelForTick: function(t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t]);
        },
        _getFirstTickValue: function(t) {
            var e = Math.floor(On(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
        },
        _configure: function() {
            var t = this, e = t.min, n = 0;
            yn.prototype._configure.call(t), 0 === e && (e = t._getFirstTickValue(t.minNotZero), n = Fn(t.options.ticks.fontSize, N.global.defaultFontSize) / t._length), t._startValue = On(e), t._valueOffset = n, t._valueRange = (On(t.max) - On(e)) / (1 - n);
        },
        getPixelForValue: function(t) {
            var e = this, n = 0;
            return (t = +e.getRightValue(t)) > e.min && t > 0 && (n = (On(t) - e._startValue) / e._valueRange + e._valueOffset), e.getPixelForDecimal(n);
        },
        getValueForPixel: function(t) {
            var e = this, n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min ? 0 : Math.pow(10, e._startValue + (n - e._valueOffset) * e._valueRange);
        }
    }), Nn = Ln;
    zn._defaults = Nn;
    var Bn = H.valueOrDefault, En = H.valueAtIndexOrDefault, Wn = H.options.resolve, Vn = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        gridLines: {
            circular: !1
        },
        ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: on.formatters.linear
        },
        pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function(t) {
                return t;
            }
        }
    };
    function Hn(t) {
        var e = t.ticks;
        return e.display && t.display ? Bn(e.fontSize, N.global.defaultFontSize) + 2 * e.backdropPaddingY : 0;
    }
    function jn(t, e, n, i, a) {
        return t === i || t === a ? {
            start: e - n / 2,
            end: e + n / 2
        } : t < i || t > a ? {
            start: e - n,
            end: e
        } : {
            start: e,
            end: e + n
        };
    }
    function qn(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
    }
    function Un(t, e, n, i) {
        var a, r, o = n.y + i / 2;
        if (H.isArray(e)) for(a = 0, r = e.length; a < r; ++a)t.fillText(e[a], n.x, o), o += i;
        else t.fillText(e, n.x, o);
    }
    function Yn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
    }
    function Gn(t) {
        return H.isNumber(t) ? t : 0;
    }
    var Xn = Cn.extend({
        setDimensions: function() {
            var t = this;
            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = Hn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2;
        },
        determineDataLimits: function() {
            var t = this, e51 = t.chart, n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
            H.each(e51.data.datasets, function(a21, r10) {
                if (e51.isDatasetVisible(r10)) {
                    var o = e51.getDatasetMeta(r10);
                    H.each(a21.data, function(e, a) {
                        var r = +t.getRightValue(e);
                        isNaN(r) || o.data[a].hidden || (n = Math.min(r, n), i = Math.max(r, i));
                    });
                }
            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
        },
        _computeTickLimit: function() {
            return Math.ceil(this.drawingArea / Hn(this.options));
        },
        convertTicksToLabels: function() {
            var t = this;
            Cn.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(function() {
                var e = H.callback(t.options.pointLabels.callback, arguments, t);
                return e || 0 === e ? e : "";
            });
        },
        getLabelForIndex: function(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
        },
        fit: function() {
            var t68 = this.options;
            t68.display && t68.pointLabels.display ? function(t) {
                var e, n, i, a = H.options._parseFont(t.options.pointLabels), r = {
                    l: 0,
                    r: t.width,
                    t: 0,
                    b: t.height - t.paddingTop
                }, o = {};
                t.ctx.font = a.string, t._pointLabelSizes = [];
                var s, l, u, d = t.chart.data.labels.length;
                for(e = 0; e < d; e++){
                    i = t.getPointPosition(e, t.drawingArea + 5), s = t.ctx, l = a.lineHeight, u = t.pointLabels[e], n = H.isArray(u) ? {
                        w: H.longestText(s, s.font, u),
                        h: u.length * l
                    } : {
                        w: s.measureText(u).width,
                        h: l
                    }, t._pointLabelSizes[e] = n;
                    var h = t.getIndexAngle(e), c = H.toDegrees(h) % 360, f = jn(c, i.x, n.w, 0, 180), g = jn(c, i.y, n.h, 90, 270);
                    f.start < r.l && (r.l = f.start, o.l = h), f.end > r.r && (r.r = f.end, o.r = h), g.start < r.t && (r.t = g.start, o.t = h), g.end > r.b && (r.b = g.end, o.b = h);
                }
                t.setReductions(t.drawingArea, r, o);
            }(this) : this.setCenterPoint(0, 0, 0, 0);
        },
        setReductions: function(t, e, n) {
            var i = this, a = e.l / Math.sin(n.l), r = Math.max(e.r - i.width, 0) / Math.sin(n.r), o = -e.t / Math.cos(n.t), s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
            a = Gn(a), r = Gn(r), o = Gn(o), s = Gn(s), i.drawingArea = Math.min(Math.floor(t - (a + r) / 2), Math.floor(t - (o + s) / 2)), i.setCenterPoint(a, r, o, s);
        },
        setCenterPoint: function(t, e, n, i) {
            var a = this, r = a.width - e - a.drawingArea, o = t + a.drawingArea, s = n + a.drawingArea, l = a.height - a.paddingTop - i - a.drawingArea;
            a.xCenter = Math.floor((o + r) / 2 + a.left), a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop);
        },
        getIndexAngle: function(t) {
            var e = this.chart, n = (t * (360 / e.data.labels.length) + ((e.options || {}).startAngle || 0)) % 360;
            return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360;
        },
        getDistanceFromCenterForValue: function(t) {
            var e = this;
            if (H.isNullOrUndef(t)) return NaN;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
        },
        getPointPosition: function(t, e) {
            var n = this.getIndexAngle(t) - Math.PI / 2;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter
            };
        },
        getPointPositionForValue: function(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        },
        getBasePosition: function(t) {
            var e = this.min, n = this.max;
            return this.getPointPositionForValue(t || 0, this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0);
        },
        _drawGrid: function() {
            var t69, e52, n36, i27 = this, a22 = i27.ctx, r11 = i27.options, o6 = r11.gridLines, s5 = r11.angleLines, l4 = Bn(s5.lineWidth, o6.lineWidth), u4 = Bn(s5.color, o6.color);
            if (r11.pointLabels.display && function(t) {
                var e = t.ctx, n = t.options, i = n.pointLabels, a = Hn(n), r = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), o = H.options._parseFont(i);
                e.save(), e.font = o.string, e.textBaseline = "middle";
                for(var s = t.chart.data.labels.length - 1; s >= 0; s--){
                    var l = 0 === s ? a / 2 : 0, u = t.getPointPosition(s, r + l + 5), d = En(i.fontColor, s, N.global.defaultFontColor);
                    e.fillStyle = d;
                    var h = t.getIndexAngle(s), c = H.toDegrees(h);
                    e.textAlign = qn(c), Yn(c, t._pointLabelSizes[s], u), Un(e, t.pointLabels[s], u, o.lineHeight);
                }
                e.restore();
            }(i27), o6.display && H.each(i27.ticks, function(t70, n37) {
                0 !== n37 && (e52 = i27.getDistanceFromCenterForValue(i27.ticksAsNumbers[n37]), function(t, e, n, i) {
                    var a, r = t.ctx, o = e.circular, s = t.chart.data.labels.length, l = En(e.color, i - 1), u = En(e.lineWidth, i - 1);
                    if ((o || s) && l && u) {
                        if (r.save(), r.strokeStyle = l, r.lineWidth = u, r.setLineDash && (r.setLineDash(e.borderDash || []), r.lineDashOffset = e.borderDashOffset || 0), r.beginPath(), o) r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                        else {
                            a = t.getPointPosition(0, n), r.moveTo(a.x, a.y);
                            for(var d = 1; d < s; d++)a = t.getPointPosition(d, n), r.lineTo(a.x, a.y);
                        }
                        r.closePath(), r.stroke(), r.restore();
                    }
                }(i27, o6, e52, n37));
            }), s5.display && l4 && u4) {
                for(a22.save(), a22.lineWidth = l4, a22.strokeStyle = u4, a22.setLineDash && (a22.setLineDash(Wn([
                    s5.borderDash,
                    o6.borderDash,
                    []
                ])), a22.lineDashOffset = Wn([
                    s5.borderDashOffset,
                    o6.borderDashOffset,
                    0
                ])), t69 = i27.chart.data.labels.length - 1; t69 >= 0; t69--)e52 = i27.getDistanceFromCenterForValue(r11.ticks.reverse ? i27.min : i27.max), n36 = i27.getPointPosition(t69, e52), a22.beginPath(), a22.moveTo(i27.xCenter, i27.yCenter), a22.lineTo(n36.x, n36.y), a22.stroke();
                a22.restore();
            }
        },
        _drawLabels: function() {
            var t = this, e = t.ctx, n = t.options.ticks;
            if (n.display) {
                var i, a, r12 = t.getIndexAngle(0), o = H.options._parseFont(n), s = Bn(n.fontColor, N.global.defaultFontColor);
                e.save(), e.font = o.string, e.translate(t.xCenter, t.yCenter), e.rotate(r12), e.textAlign = "center", e.textBaseline = "middle", H.each(t.ticks, function(r, l) {
                    (0 !== l || n.reverse) && (i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]), n.showLabelBackdrop && (a = e.measureText(r).width, e.fillStyle = n.backdropColor, e.fillRect(-a / 2 - n.backdropPaddingX, -i - o.size / 2 - n.backdropPaddingY, a + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), e.fillStyle = s, e.fillText(r, 0, -i));
                }), e.restore();
            }
        },
        _drawTitle: H.noop
    }), Kn = Vn;
    Xn._defaults = Kn;
    var Zn = H._deprecated, $n = H.options.resolve, Jn = H.valueOrDefault, Qn = Number.MIN_SAFE_INTEGER || -9007199254740991, ti = Number.MAX_SAFE_INTEGER || 9007199254740991, ei = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
        },
        second: {
            common: !0,
            size: 1e3,
            steps: 60
        },
        minute: {
            common: !0,
            size: 6e4,
            steps: 60
        },
        hour: {
            common: !0,
            size: 36e5,
            steps: 24
        },
        day: {
            common: !0,
            size: 864e5,
            steps: 30
        },
        week: {
            common: !1,
            size: 6048e5,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628e6,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
        },
        year: {
            common: !0,
            size: 3154e7
        }
    }, ni = Object.keys(ei);
    function ii(t, e) {
        return t - e;
    }
    function ai(t) {
        return H.valueOrDefault(t.time.min, t.ticks.min);
    }
    function ri(t) {
        return H.valueOrDefault(t.time.max, t.ticks.max);
    }
    function oi(t71, e53, n38, i28) {
        var a23 = function(t, e, n) {
            for(var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s;){
                if (a = t[(i = o + s >> 1) - 1] || null, r = t[i], !a) return {
                    lo: null,
                    hi: r
                };
                if (r[e] < n) o = i + 1;
                else {
                    if (!(a[e] > n)) return {
                        lo: a,
                        hi: r
                    };
                    s = i - 1;
                }
            }
            return {
                lo: r,
                hi: null
            };
        }(t71, e53, n38), r14 = a23.lo ? a23.hi ? a23.lo : t71[t71.length - 2] : t71[0], o7 = a23.lo ? a23.hi ? a23.hi : t71[t71.length - 1] : t71[1], s6 = o7[e53] - r14[e53], l = s6 ? (n38 - r14[e53]) / s6 : 0, u = (o7[i28] - r14[i28]) * l;
        return r14[i28] + u;
    }
    function si(t, e) {
        var n = t._adapter, i = t.options.time, a = i.parser, r = a || i.format, o = e;
        return "function" == typeof a && (o = a(o)), H.isFinite(o) || (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)), null !== o ? +o : (a || "function" != typeof r || (o = r(e), H.isFinite(o) || (o = n.parse(o))), o);
    }
    function li(t, e) {
        if (H.isNullOrUndef(e)) return null;
        var n = t.options.time, i = si(t, t.getRightValue(e));
        return null === i ? i : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
    }
    function ui(t, e, n, i) {
        var a, r, o, s = ni.length;
        for(a = ni.indexOf(t); a < s - 1; ++a)if (o = (r = ei[ni[a]]).steps ? r.steps : ti, r.common && Math.ceil((n - e) / (o * r.size)) <= i) return ni[a];
        return ni[s - 1];
    }
    function di(t72, e54, n39) {
        var i29, a24, r15 = [], o8 = {}, s7 = e54.length;
        for(i29 = 0; i29 < s7; ++i29)o8[a24 = e54[i29]] = i29, r15.push({
            value: a24,
            major: !1
        });
        return 0 !== s7 && n39 ? function(t, e, n, i) {
            var a, r, o = t._adapter, s = +o.startOf(e[0].value, i), l = e[e.length - 1].value;
            for(a = s; a <= l; a = +o.add(a, 1, i))(r = n[a]) >= 0 && (e[r].major = !0);
            return e;
        }(t72, r15, o8, n39) : r15;
    }
    var hi = yn.extend({
        initialize: function() {
            this.mergeTicksOptions(), yn.prototype.initialize.call(this);
        },
        update: function() {
            var t = this, e = t.options, n = e.time || (e.time = {}), i = t._adapter = new rn._date(e.adapters.date);
            return Zn("time scale", n.format, "time.format", "time.parser"), Zn("time scale", n.min, "time.min", "ticks.min"), Zn("time scale", n.max, "time.max", "ticks.max"), H.mergeIf(n.displayFormats, i.formats()), yn.prototype.update.apply(t, arguments);
        },
        getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), yn.prototype.getRightValue.call(this, t);
        },
        determineDataLimits: function() {
            var t73, e55, n40, i30, a25, r16, o, s = this, l = s.chart, u = s._adapter, d = s.options, h = d.time.unit || "day", c = ti, f = Qn, g = [], p = [], m = [], v = s._getLabels();
            for(t73 = 0, n40 = v.length; t73 < n40; ++t73)m.push(li(s, v[t73]));
            for(t73 = 0, n40 = (l.data.datasets || []).length; t73 < n40; ++t73)if (l.isDatasetVisible(t73)) {
                if (a25 = l.data.datasets[t73].data, H.isObject(a25[0])) for(p[t73] = [], e55 = 0, i30 = a25.length; e55 < i30; ++e55)r16 = li(s, a25[e55]), g.push(r16), p[t73][e55] = r16;
                else p[t73] = m.slice(0), o || (g = g.concat(m), o = !0);
            } else p[t73] = [];
            m.length && (c = Math.min(c, m[0]), f = Math.max(f, m[m.length - 1])), g.length && (g = n40 > 1 ? (function(t) {
                var e, n, i, a = {}, r = [];
                for(e = 0, n = t.length; e < n; ++e)a[i = t[e]] || (a[i] = !0, r.push(i));
                return r;
            })(g).sort(ii) : g.sort(ii), c = Math.min(c, g[0]), f = Math.max(f, g[g.length - 1])), c = li(s, ai(d)) || c, f = li(s, ri(d)) || f, c = c === ti ? +u.startOf(Date.now(), h) : c, f = f === Qn ? +u.endOf(Date.now(), h) + 1 : f, s.min = Math.min(c, f), s.max = Math.max(c + 1, f), s._table = [], s._timestamps = {
                data: g,
                datasets: p,
                labels: m
            };
        },
        buildTicks: function() {
            var t74, e56, n41, i31 = this, a26 = i31.min, r17 = i31.max, o9 = i31.options, s8 = o9.ticks, l5 = o9.time, u5 = i31._timestamps, d3 = [], h3 = i31.getLabelCapacity(a26), c3 = s8.source, f = o9.distribution;
            for(u5 = "data" === c3 || "auto" === c3 && "series" === f ? u5.data : "labels" === c3 ? u5.labels : function(t, e, n, i) {
                var a, r = t._adapter, o = t.options, s = o.time, l = s.unit || ui(s.minUnit, e, n, i), u = $n([
                    s.stepSize,
                    s.unitStepSize,
                    1
                ]), d = "week" === l && s.isoWeekday, h = e, c = [];
                if (d && (h = +r.startOf(h, "isoWeek", d)), h = +r.startOf(h, d ? "day" : l), r.diff(n, e, l) > 1e5 * u) throw e + " and " + n + " are too far apart with stepSize of " + u + " " + l;
                for(a = h; a < n; a = +r.add(a, u, l))c.push(a);
                return a !== n && "ticks" !== o.bounds || c.push(a), c;
            }(i31, a26, r17, h3), "ticks" === o9.bounds && u5.length && (a26 = u5[0], r17 = u5[u5.length - 1]), a26 = li(i31, ai(o9)) || a26, r17 = li(i31, ri(o9)) || r17, t74 = 0, e56 = u5.length; t74 < e56; ++t74)(n41 = u5[t74]) >= a26 && n41 <= r17 && d3.push(n41);
            return i31.min = a26, i31.max = r17, i31._unit = l5.unit || (s8.autoSkip ? ui(l5.minUnit, i31.min, i31.max, h3) : function(t, e, n, i, a) {
                var r, o;
                for(r = ni.length - 1; r >= ni.indexOf(n); r--)if (o = ni[r], ei[o].common && t._adapter.diff(a, i, o) >= e - 1) return o;
                return ni[n ? ni.indexOf(n) : 0];
            }(i31, d3.length, l5.minUnit, i31.min, i31.max)), i31._majorUnit = s8.major.enabled && "year" !== i31._unit ? function(t) {
                for(var e = ni.indexOf(t) + 1, n = ni.length; e < n; ++e)if (ei[ni[e]].common) return ni[e];
            }(i31._unit) : void 0, i31._table = function(t, e, n, i) {
                if ("linear" === i || !t.length) return [
                    {
                        time: e,
                        pos: 0
                    },
                    {
                        time: n,
                        pos: 1
                    }
                ];
                var a, r, o, s, l, u = [], d = [
                    e
                ];
                for(a = 0, r = t.length; a < r; ++a)(s = t[a]) > e && s < n && d.push(s);
                for(d.push(n), a = 0, r = d.length; a < r; ++a)l = d[a + 1], o = d[a - 1], s = d[a], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
                    time: s,
                    pos: a / (r - 1)
                });
                return u;
            }(i31._timestamps.data, a26, r17, f), i31._offsets = function(t, e, n, i, a) {
                var r, o, s = 0, l = 0;
                return a.offset && e.length && (r = oi(t, "time", e[0], "pos"), s = 1 === e.length ? 1 - r : (oi(t, "time", e[1], "pos") - r) / 2, o = oi(t, "time", e[e.length - 1], "pos"), l = 1 === e.length ? o : (o - oi(t, "time", e[e.length - 2], "pos")) / 2), {
                    start: s,
                    end: l,
                    factor: 1 / (s + 1 + l)
                };
            }(i31._table, d3, 0, 0, o9), s8.reverse && d3.reverse(), di(i31, d3, i31._majorUnit);
        },
        getLabelForIndex: function(t, e) {
            var n = this, i = n._adapter, a = n.chart.data, r = n.options.time, o = a.labels && t < a.labels.length ? a.labels[t] : "", s = a.datasets[e].data[t];
            return H.isObject(s) && (o = n.getRightValue(s)), r.tooltipFormat ? i.format(si(n, o), r.tooltipFormat) : "string" == typeof o ? o : i.format(si(n, o), r.displayFormats.datetime);
        },
        tickFormatFunction: function(t, e, n, i) {
            var a = this._adapter, r = this.options, o = r.time.displayFormats, s = o[this._unit], l = this._majorUnit, u = o[l], d = n[e], h = r.ticks, c = l && u && d && d.major, f = a.format(t, i || (c ? u : s)), g = c ? h.major : h.minor, p = $n([
                g.callback,
                g.userCallback,
                h.callback,
                h.userCallback
            ]);
            return p ? p(f, e, n) : f;
        },
        convertTicksToLabels: function(t) {
            var e, n, i = [];
            for(e = 0, n = t.length; e < n; ++e)i.push(this.tickFormatFunction(t[e].value, e, t));
            return i;
        },
        getPixelForOffset: function(t) {
            var e = this._offsets, n = oi(this._table, "time", t, "pos");
            return this.getPixelForDecimal((e.start + n) * e.factor);
        },
        getPixelForValue: function(t, e, n) {
            var i = null;
            if (void 0 !== e && void 0 !== n && (i = this._timestamps.datasets[n][e]), null === i && (i = li(this, t)), null !== i) return this.getPixelForOffset(i);
        },
        getPixelForTick: function(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
        },
        getValueForPixel: function(t) {
            var e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end, i = oi(this._table, "pos", n, "time");
            return this._adapter._create(i);
        },
        _getLabelSize: function(t) {
            var e = this.options.ticks, n = this.ctx.measureText(t).width, i = H.toRadians(this.isHorizontal() ? e.maxRotation : e.minRotation), a = Math.cos(i), r = Math.sin(i), o = Jn(e.fontSize, N.global.defaultFontSize);
            return {
                w: n * a + o * r,
                h: n * r + o * a
            };
        },
        getLabelWidth: function(t) {
            return this._getLabelSize(t).w;
        },
        getLabelCapacity: function(t) {
            var e = this, n = e.options.time, i = n.displayFormats, a = i[n.unit] || i.millisecond, r = e.tickFormatFunction(t, 0, di(e, [
                t
            ], e._majorUnit), a), o = e._getLabelSize(r), s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
            return e.options.offset && s--, s > 0 ? s : 1;
        }
    }), ci = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    hi._defaults = ci;
    var fi = {
        category: kn,
        linear: Tn,
        logarithmic: zn,
        radialLinear: Xn,
        time: hi
    }, gi = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY"
    };
    rn._date.override("function" == typeof t1 ? {
        _id: "moment",
        formats: function() {
            return gi;
        },
        parse: function(e, n) {
            return "string" == typeof e && "string" == typeof n ? e = t1(e, n) : e instanceof t1 || (e = t1(e)), e.isValid() ? e.valueOf() : null;
        },
        format: function(e, n) {
            return t1(e).format(n);
        },
        add: function(e, n, i) {
            return t1(e).add(n, i).valueOf();
        },
        diff: function(e, n, i) {
            return t1(e).diff(t1(n), i);
        },
        startOf: function(e, n, i) {
            return e = t1(e), "isoWeek" === n ? e.isoWeekday(i).valueOf() : e.startOf(n).valueOf();
        },
        endOf: function(e, n) {
            return t1(e).endOf(n).valueOf();
        },
        _create: function(e) {
            return t1(e);
        }
    } : {}), N._set("global", {
        plugins: {
            filler: {
                propagate: !0
            }
        }
    });
    var pi = {
        dataset: function(t) {
            var e57 = t.fill, n = t.chart, i = n.getDatasetMeta(e57), a = i && n.isDatasetVisible(e57) && i.dataset._children || [], r = a.length || 0;
            return r ? function(t, e) {
                return e < r && a[e]._view || null;
            } : null;
        },
        boundary: function(t75) {
            var e = t75.boundary, n42 = e ? e.x : null, i = e ? e.y : null;
            return H.isArray(e) ? function(t, n) {
                return e[n];
            } : function(t) {
                return {
                    x: null === n42 ? t.x : n42,
                    y: null === i ? t.y : i
                };
            };
        }
    };
    function mi(t, e, n) {
        var i, a = t._model || {}, r = a.fill;
        if (void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r) return !1;
        if (!0 === r) return "origin";
        if (i = parseFloat(r, 10), isFinite(i) && Math.floor(i) === i) return "-" !== r[0] && "+" !== r[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;
        switch(r){
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r;
            default:
                return !1;
        }
    }
    function vi(t76) {
        return (t76.el._scale || {}).getPointPositionForValue ? function(t) {
            var e, n, i, a, r, o = t.el._scale, s = o.options, l = o.chart.data.labels.length, u = t.fill, d = [];
            if (!l) return null;
            for(e = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, i = o.getPointPositionForValue(0, e), a = 0; a < l; ++a)r = "start" === u || "end" === u ? o.getPointPositionForValue(a, "start" === u ? e : n) : o.getBasePosition(a), s.gridLines.circular && (r.cx = i.x, r.cy = i.y, r.angle = o.getIndexAngle(a) - Math.PI / 2), d.push(r);
            return d;
        }(t76) : function(t) {
            var e, n = t.el._model || {}, i = t.el._scale || {}, a = t.fill, r = null;
            if (isFinite(a)) return null;
            if ("start" === a ? r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? r = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? r = n.scaleZero : i.getBasePixel && (r = i.getBasePixel()), null != r) {
                if (void 0 !== r.x && void 0 !== r.y) return r;
                if (H.isFinite(r)) return {
                    x: (e = i.isHorizontal()) ? r : null,
                    y: e ? null : r
                };
            }
            return null;
        }(t76);
    }
    function bi(t, e, n) {
        var i, a = t[e].fill, r = [
            e
        ];
        if (!n) return a;
        for(; !1 !== a && -1 === r.indexOf(a);){
            if (!isFinite(a)) return a;
            if (!(i = t[a])) return !1;
            if (i.visible) return a;
            r.push(a), a = i.fill;
        }
        return !1;
    }
    function xi(t) {
        var e = t.fill, n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), pi[n](t));
    }
    function yi(t) {
        return t && !t.skip;
    }
    function _i(t, e, n, i, a) {
        var r, o, s, l;
        if (i && a) {
            for(t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r)H.canvas.lineTo(t, e[r - 1], e[r]);
            if (void 0 === n[0].angle) for(t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r)H.canvas.lineTo(t, n[r], n[r - 1], !0);
            else for(o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), r = a - 1; r > 0; --r)t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0);
        }
    }
    function ki(t, e, n, i, a, r) {
        var o, s, l, u, d, h, c, f, g = e.length, p = i.spanGaps, m = [], v = [], b = 0, x = 0;
        for(t.beginPath(), o = 0, s = g; o < s; ++o)d = n(u = e[l = o % g]._view, l, i), h = yi(u), c = yi(d), r && void 0 === f && h && (s = g + (f = o + 1)), h && c ? (b = m.push(u), x = v.push(d)) : b && x && (p ? (h && m.push(u), c && v.push(d)) : (_i(t, m, v, b, x), b = x = 0, m = [], v = []));
        _i(t, m, v, b, x), t.closePath(), t.fillStyle = a, t.fill();
    }
    var wi = {
        id: "filler",
        afterDatasetsUpdate: function(t, e) {
            var n, i, a, r, o = (t.data.datasets || []).length, s = e.propagate, l = [];
            for(i = 0; i < o; ++i)r = null, (a = (n = t.getDatasetMeta(i)).dataset) && a._model && a instanceof kt.Line && (r = {
                visible: t.isDatasetVisible(i),
                fill: mi(a, i, o),
                chart: t,
                el: a
            }), n.$filler = r, l.push(r);
            for(i = 0; i < o; ++i)(r = l[i]) && (r.fill = bi(l, i, s), r.boundary = vi(r), r.mapper = xi(r));
        },
        beforeDatasetsDraw: function(t) {
            var e, n, i, a, r, o, s, l = t._getSortedVisibleDatasetMetas(), u = t.ctx;
            for(n = l.length - 1; n >= 0; --n)(e = l[n].$filler) && e.visible && (a = (i = e.el)._view, r = i._children || [], o = e.mapper, s = a.backgroundColor || N.global.defaultColor, o && s && r.length && (H.canvas.clipArea(u, t.chartArea), ki(u, r, o, a, s, i._loop), H.canvas.unclipArea(u)));
        }
    }, Mi = H.rtl.getRtlAdapter, Si = H.noop, Ci = H.valueOrDefault;
    function Pi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
    }
    N._set("global", {
        legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function(t, e) {
                var n = e.datasetIndex, i = this.chart, a = i.getDatasetMeta(n);
                a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t) {
                    var e = t.data.datasets, n43 = t.options.legend || {}, i = n43.labels && n43.labels.usePointStyle;
                    return t._getSortedDatasetMetas().map(function(n) {
                        var a = n.controller.getStyle(i ? 0 : void 0);
                        return {
                            text: e[n.index].label,
                            fillStyle: a.backgroundColor,
                            hidden: !t.isDatasetVisible(n.index),
                            lineCap: a.borderCapStyle,
                            lineDash: a.borderDash,
                            lineDashOffset: a.borderDashOffset,
                            lineJoin: a.borderJoinStyle,
                            lineWidth: a.borderWidth,
                            strokeStyle: a.borderColor,
                            pointStyle: a.pointStyle,
                            rotation: a.rotation,
                            datasetIndex: n.index
                        };
                    }, this);
                }
            }
        },
        legendCallback: function(t) {
            var e, n, i, a = document.createElement("ul"), r = t.data.datasets;
            for(a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length; e < n; e++)(i = a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r[e].backgroundColor, r[e].label && i.appendChild(document.createTextNode(r[e].label));
            return a.outerHTML;
        }
    });
    var Ai = K.extend({
        initialize: function(t) {
            H.extend(this, t), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1;
        },
        beforeUpdate: Si,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        },
        afterUpdate: Si,
        beforeSetDimensions: Si,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: Si,
        beforeBuildLabels: Si,
        buildLabels: function() {
            var t = this, e = t.options.labels || {}, n44 = H.callback(e.generateLabels, [
                t.chart
            ], t) || [];
            e.filter && (n44 = n44.filter(function(n) {
                return e.filter(n, t.chart.data);
            })), t.options.reverse && n44.reverse(), t.legendItems = n44;
        },
        afterBuildLabels: Si,
        beforeFit: Si,
        fit: function() {
            var t77 = this, e58 = t77.options, n = e58.labels, i32 = e58.display, a = t77.ctx, r = H.options._parseFont(n), o = r.size, s = t77.legendHitBoxes = [], l = t77.minSize, u = t77.isHorizontal();
            if (u ? (l.width = t77.maxWidth, l.height = i32 ? 10 : 0) : (l.width = i32 ? 10 : 0, l.height = t77.maxHeight), i32) {
                if (a.font = r.string, u) {
                    var d = t77.lineWidths = [
                        0
                    ], h = 0;
                    a.textAlign = "left", a.textBaseline = "middle", H.each(t77.legendItems, function(t, e) {
                        var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                        (0 === e || d[d.length - 1] + i + 2 * n.padding > l.width) && (h += o + n.padding, d[d.length - (e > 0 ? 0 : 1)] = 0), s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        }, d[d.length - 1] += i + n.padding;
                    }), l.height += h;
                } else {
                    var c = n.padding, f = t77.columnWidths = [], g = t77.columnHeights = [], p = n.padding, m = 0, v = 0;
                    H.each(t77.legendItems, function(t, e) {
                        var i = Pi(n, o) + o / 2 + a.measureText(t.text).width;
                        e > 0 && v + o + 2 * c > l.height && (p += m + n.padding, f.push(m), g.push(v), m = 0, v = 0), m = Math.max(m, i), v += o + c, s[e] = {
                            left: 0,
                            top: 0,
                            width: i,
                            height: o
                        };
                    }), p += m, f.push(m), g.push(v), l.width += p;
                }
                t77.width = l.width, t77.height = l.height;
            } else t77.width = l.width = t77.height = l.height = 0;
        },
        afterFit: Si,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function() {
            var t78 = this, e59 = t78.options, n45 = e59.labels, i33 = N.global, a27 = i33.defaultColor, r18 = i33.elements.line, o10 = t78.height, s9 = t78.columnHeights, l6 = t78.width, u6 = t78.lineWidths;
            if (e59.display) {
                var d, h = Mi(e59.rtl, t78.left, t78.minSize.width), c = t78.ctx, f3 = Ci(n45.fontColor, i33.defaultFontColor), g3 = H.options._parseFont(n45), p = g3.size;
                c.textAlign = h.textAlign("left"), c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f3, c.fillStyle = f3, c.font = g3.string;
                var m = Pi(n45, p), v = t78.legendHitBoxes, b = function(t, i) {
                    switch(e59.align){
                        case "start":
                            return n45.padding;
                        case "end":
                            return t - i;
                        default:
                            return (t - i + n45.padding) / 2;
                    }
                }, x = t78.isHorizontal();
                d = x ? {
                    x: t78.left + b(l6, u6[0]),
                    y: t78.top + n45.padding,
                    line: 0
                } : {
                    x: t78.left + n45.padding,
                    y: t78.top + b(o10, s9[0]),
                    line: 0
                }, H.rtl.overrideTextDirection(t78.ctx, e59.textDirection);
                var y = p + n45.padding;
                H.each(t78.legendItems, function(e60, i34) {
                    var f = c.measureText(e60.text).width, g = m + p / 2 + f, _ = d.x, k = d.y;
                    h.setWidth(t78.minSize.width), x ? i34 > 0 && _ + g + n45.padding > t78.left + t78.minSize.width && (k = d.y += y, d.line++, _ = d.x = t78.left + b(l6, u6[d.line])) : i34 > 0 && k + y > t78.top + t78.minSize.height && (_ = d.x = _ + t78.columnWidths[d.line] + n45.padding, d.line++, k = d.y = t78.top + b(o10, s9[d.line]));
                    var w = h.x(_);
                    !function(t, e, i) {
                        if (!(isNaN(m) || m <= 0)) {
                            c.save();
                            var o = Ci(i.lineWidth, r18.borderWidth);
                            if (c.fillStyle = Ci(i.fillStyle, a27), c.lineCap = Ci(i.lineCap, r18.borderCapStyle), c.lineDashOffset = Ci(i.lineDashOffset, r18.borderDashOffset), c.lineJoin = Ci(i.lineJoin, r18.borderJoinStyle), c.lineWidth = o, c.strokeStyle = Ci(i.strokeStyle, a27), c.setLineDash && c.setLineDash(Ci(i.lineDash, r18.borderDash)), n45 && n45.usePointStyle) {
                                var s = m * Math.SQRT2 / 2, l = h.xPlus(t, m / 2), u = e + p / 2;
                                H.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation);
                            } else c.fillRect(h.leftForLtr(t, m), e, m, p), 0 !== o && c.strokeRect(h.leftForLtr(t, m), e, m, p);
                            c.restore();
                        }
                    }(w, k, e60), v[i34].left = h.leftForLtr(w, v[i34].width), v[i34].top = k, function(t, e, n, i) {
                        var a = p / 2, r = h.xPlus(t, m + a), o = e + a;
                        c.fillText(n.text, r, o), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(r, o), c.lineTo(h.xPlus(r, i), o), c.stroke());
                    }(w, k, e60, f), x ? d.x += g + n45.padding : d.y += y;
                }), H.rtl.restoreTextDirection(t78.ctx, e59.textDirection);
            }
        },
        _getLegendItemAt: function(t, e) {
            var n, i, a, r = this;
            if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom) {
                for(a = r.legendHitBoxes, n = 0; n < a.length; ++n)if (t >= (i = a[n]).left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return r.legendItems[n];
            }
            return null;
        },
        handleEvent: function(t) {
            var e, n = this, i = n.options, a = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === a) {
                if (!i.onHover && !i.onLeave) return;
            } else {
                if ("click" !== a) return;
                if (!i.onClick) return;
            }
            e = n._getLegendItemAt(t.x, t.y), "click" === a ? e && i.onClick && i.onClick.call(n, t.native, e) : (i.onLeave && e !== n._hoveredItem && (n._hoveredItem && i.onLeave.call(n, t.native, n._hoveredItem), n._hoveredItem = e), i.onHover && e && i.onHover.call(n, t.native, e));
        }
    });
    function Di(t, e) {
        var n = new Ai({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        pe.configure(t, n, e), pe.addBox(t, n), t.legend = n;
    }
    var Ti = {
        id: "legend",
        _element: Ai,
        beforeInit: function(t) {
            var e = t.options.legend;
            e && Di(t, e);
        },
        beforeUpdate: function(t) {
            var e = t.options.legend, n = t.legend;
            e ? (H.mergeIf(e, N.global.legend), n ? (pe.configure(t, n, e), n.options = e) : Di(t, e)) : n && (pe.removeBox(t, n), delete t.legend);
        },
        afterEvent: function(t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
        }
    }, Ii = H.noop;
    N._set("global", {
        title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        }
    });
    var Fi = K.extend({
        initialize: function(t) {
            H.extend(this, t), this.legendHitBoxes = [];
        },
        beforeUpdate: Ii,
        update: function(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
        },
        afterUpdate: Ii,
        beforeSetDimensions: Ii,
        setDimensions: function() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: Ii,
        beforeBuildLabels: Ii,
        buildLabels: Ii,
        afterBuildLabels: Ii,
        beforeFit: Ii,
        fit: function() {
            var t, e = this, n = e.options, i = e.minSize = {}, a = e.isHorizontal();
            n.display ? (t = (H.isArray(n.text) ? n.text.length : 1) * H.options._parseFont(n).lineHeight + 2 * n.padding, e.width = i.width = a ? e.maxWidth : t, e.height = i.height = a ? t : e.maxHeight) : e.width = i.width = e.height = i.height = 0;
        },
        afterFit: Ii,
        isHorizontal: function() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
        },
        draw: function() {
            var t = this, e = t.ctx, n = t.options;
            if (n.display) {
                var i, a, r, o = H.options._parseFont(n), s = o.lineHeight, l = s / 2 + n.padding, u = 0, d = t.top, h = t.left, c = t.bottom, f = t.right;
                e.fillStyle = H.valueOrDefault(n.fontColor, N.global.defaultFontColor), e.font = o.string, t.isHorizontal() ? (a = h + (f - h) / 2, r = d + l, i = f - h) : (a = "left" === n.position ? h + l : f - l, r = d + (c - d) / 2, i = c - d, u = Math.PI * ("left" === n.position ? -0.5 : .5)), e.save(), e.translate(a, r), e.rotate(u), e.textAlign = "center", e.textBaseline = "middle";
                var g = n.text;
                if (H.isArray(g)) for(var p = 0, m = 0; m < g.length; ++m)e.fillText(g[m], 0, p, i), p += s;
                else e.fillText(g, 0, 0, i);
                e.restore();
            }
        }
    });
    function Oi(t, e) {
        var n = new Fi({
            ctx: t.ctx,
            options: e,
            chart: t
        });
        pe.configure(t, n, e), pe.addBox(t, n), t.titleBlock = n;
    }
    var Li = {}, Ri = wi, zi = Ti, Ni = {
        id: "title",
        _element: Fi,
        beforeInit: function(t) {
            var e = t.options.title;
            e && Oi(t, e);
        },
        beforeUpdate: function(t) {
            var e = t.options.title, n = t.titleBlock;
            e ? (H.mergeIf(e, N.global.title), n ? (pe.configure(t, n, e), n.options = e) : Oi(t, e)) : n && (pe.removeBox(t, n), delete t.titleBlock);
        }
    };
    for(var Bi in Li.filler = Ri, Li.legend = zi, Li.title = Ni, en.helpers = H, function() {
        function t79(t, e, n) {
            var i;
            return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }
        function e61(t) {
            return null != t && "none" !== t;
        }
        function n46(n, i, a) {
            var r = document.defaultView, o = H._getParentNode(n), s = r.getComputedStyle(n)[i], l = r.getComputedStyle(o)[i], u = e61(s), d = e61(l), h = Number.POSITIVE_INFINITY;
            return u || d ? Math.min(u ? t79(s, n, a) : h, d ? t79(l, o, a) : h) : "none";
        }
        H.where = function(t80, e) {
            if (H.isArray(t80) && Array.prototype.filter) return t80.filter(e);
            var n = [];
            return H.each(t80, function(t) {
                e(t) && n.push(t);
            }), n;
        }, H.findIndex = Array.prototype.findIndex ? function(t, e, n) {
            return t.findIndex(e, n);
        } : function(t, e, n) {
            n = void 0 === n ? t : n;
            for(var i = 0, a = t.length; i < a; ++i)if (e.call(n, t[i], i, t)) return i;
            return -1;
        }, H.findNextWhere = function(t, e, n) {
            H.isNullOrUndef(n) && (n = -1);
            for(var i = n + 1; i < t.length; i++){
                var a = t[i];
                if (e(a)) return a;
            }
        }, H.findPreviousWhere = function(t, e, n) {
            H.isNullOrUndef(n) && (n = t.length);
            for(var i = n - 1; i >= 0; i--){
                var a = t[i];
                if (e(a)) return a;
            }
        }, H.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
        }, H.almostEquals = function(t, e, n) {
            return Math.abs(t - e) < n;
        }, H.almostWhole = function(t, e) {
            var n = Math.round(t);
            return n - e <= t && n + e >= t;
        }, H.max = function(t81) {
            return t81.reduce(function(t, e) {
                return isNaN(e) ? t : Math.max(t, e);
            }, Number.NEGATIVE_INFINITY);
        }, H.min = function(t82) {
            return t82.reduce(function(t, e) {
                return isNaN(e) ? t : Math.min(t, e);
            }, Number.POSITIVE_INFINITY);
        }, H.sign = Math.sign ? function(t) {
            return Math.sign(t);
        } : function(t) {
            return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, H.toRadians = function(t) {
            return t * (Math.PI / 180);
        }, H.toDegrees = function(t) {
            return t * (180 / Math.PI);
        }, H._decimalPlaces = function(t) {
            if (H.isFinite(t)) {
                for(var e = 1, n = 0; Math.round(t * e) / e !== t;)e *= 10, n++;
                return n;
            }
        }, H.getAngleFromPoint = function(t, e) {
            var n = e.x - t.x, i = e.y - t.y, a = Math.sqrt(n * n + i * i), r = Math.atan2(i, n);
            return r < -0.5 * Math.PI && (r += 2 * Math.PI), {
                angle: r,
                distance: a
            };
        }, H.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, H.aliasPixel = function(t) {
            return t % 2 == 0 ? 0 : .5;
        }, H._alignPixel = function(t, e, n) {
            var i = t.currentDevicePixelRatio, a = n / 2;
            return Math.round((e - a) * i) / i + a;
        }, H.splineCurve = function(t, e, n, i) {
            var a = t.skip ? e : t, r = e, o = n.skip ? e : n, s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)), l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)), u = s / (s + l), d = l / (s + l), h = i * (u = isNaN(u) ? 0 : u), c = i * (d = isNaN(d) ? 0 : d);
            return {
                previous: {
                    x: r.x - h * (o.x - a.x),
                    y: r.y - h * (o.y - a.y)
                },
                next: {
                    x: r.x + c * (o.x - a.x),
                    y: r.y + c * (o.y - a.y)
                }
            };
        }, H.EPSILON = Number.EPSILON || 1e-14, H.splineCurveMonotone = function(t83) {
            var e, n, i, a, r, o, s, l, u, d = (t83 || []).map(function(t) {
                return {
                    model: t._model,
                    deltaK: 0,
                    mK: 0
                };
            }), h = d.length;
            for(e = 0; e < h; ++e)if (!(i = d[e]).model.skip) {
                if (n = e > 0 ? d[e - 1] : null, (a = e < h - 1 ? d[e + 1] : null) && !a.model.skip) {
                    var c = a.model.x - i.model.x;
                    i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0;
                }
                !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
            }
            for(e = 0; e < h - 1; ++e)i = d[e], a = d[e + 1], i.model.skip || a.model.skip || (H.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (r = i.mK / i.deltaK, o = a.mK / i.deltaK, (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), i.mK = r * s * i.deltaK, a.mK = o * s * i.deltaK)));
            for(e = 0; e < h; ++e)(i = d[e]).model.skip || (n = e > 0 ? d[e - 1] : null, a = e < h - 1 ? d[e + 1] : null, n && !n.model.skip && (u = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - u, i.model.controlPointPreviousY = i.model.y - u * i.mK), a && !a.model.skip && (u = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + u, i.model.controlPointNextY = i.model.y + u * i.mK));
        }, H.nextItem = function(t, e, n) {
            return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, H.previousItem = function(t, e, n) {
            return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, H.niceNum = function(t, e) {
            var n = Math.floor(H.log10(t)), i = t / Math.pow(10, n);
            return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
        }, H.requestAnimFrame = "undefined" == typeof window ? function(t) {
            t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60);
        }, H.getRelativePosition = function(t, e) {
            var n, i, a = t.originalEvent || t, r = t.target || t.srcElement, o = r.getBoundingClientRect(), s = a.touches;
            s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);
            var l = parseFloat(H.getStyle(r, "padding-left")), u = parseFloat(H.getStyle(r, "padding-top")), d = parseFloat(H.getStyle(r, "padding-right")), h = parseFloat(H.getStyle(r, "padding-bottom")), c = o.right - o.left - l - d, f = o.bottom - o.top - u - h;
            return {
                x: n = Math.round((n - o.left - l) / c * r.width / e.currentDevicePixelRatio),
                y: i = Math.round((i - o.top - u) / f * r.height / e.currentDevicePixelRatio)
            };
        }, H.getConstraintWidth = function(t) {
            return n46(t, "max-width", "clientWidth");
        }, H.getConstraintHeight = function(t) {
            return n46(t, "max-height", "clientHeight");
        }, H._calculatePadding = function(t, e, n) {
            return (e = H.getStyle(t, e)).indexOf("%") > -1 ? n * parseInt(e, 10) / 100 : parseInt(e, 10);
        }, H._getParentNode = function(t) {
            var e = t.parentNode;
            return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
        }, H.getMaximumWidth = function(t) {
            var e = H._getParentNode(t);
            if (!e) return t.clientWidth;
            var n = e.clientWidth, i = n - H._calculatePadding(e, "padding-left", n) - H._calculatePadding(e, "padding-right", n), a = H.getConstraintWidth(t);
            return isNaN(a) ? i : Math.min(i, a);
        }, H.getMaximumHeight = function(t) {
            var e = H._getParentNode(t);
            if (!e) return t.clientHeight;
            var n = e.clientHeight, i = n - H._calculatePadding(e, "padding-top", n) - H._calculatePadding(e, "padding-bottom", n), a = H.getConstraintHeight(t);
            return isNaN(a) ? i : Math.min(i, a);
        }, H.getStyle = function(t, e) {
            return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, H.retinaScale = function(t, e) {
            var n = t.currentDevicePixelRatio = e || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== n) {
                var i = t.canvas, a = t.height, r = t.width;
                i.height = a * n, i.width = r * n, t.ctx.scale(n, n), i.style.height || i.style.width || (i.style.height = a + "px", i.style.width = r + "px");
            }
        }, H.fontString = function(t, e, n) {
            return e + " " + t + "px " + n;
        }, H.longestText = function(t, e, n, i) {
            var a = (i = i || {}).data = i.data || {}, r = i.garbageCollect = i.garbageCollect || [];
            i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
            var o, s, l, u, d, h = 0, c = n.length;
            for(o = 0; o < c; o++)if (null != (u = n[o]) && !0 !== H.isArray(u)) h = H.measureText(t, a, r, h, u);
            else if (H.isArray(u)) for(s = 0, l = u.length; s < l; s++)null == (d = u[s]) || H.isArray(d) || (h = H.measureText(t, a, r, h, d));
            var f = r.length / 2;
            if (f > n.length) {
                for(o = 0; o < f; o++)delete a[r[o]];
                r.splice(0, f);
            }
            return h;
        }, H.measureText = function(t, e, n, i, a) {
            var r = e[a];
            return r || (r = e[a] = t.measureText(a).width, n.push(a)), r > i && (i = r), i;
        }, H.numberOfLabelLines = function(t84) {
            var e = 1;
            return H.each(t84, function(t) {
                H.isArray(t) && t.length > e && (e = t.length);
            }), e;
        }, H.color = _1 ? function(t) {
            return t instanceof CanvasGradient && (t = N.global.defaultColor), _1(t);
        } : function(t) {
            return console.error("Color.js not found!"), t;
        }, H.getHoverColor = function(t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient ? t : H.color(t).saturate(.5).darken(.1).rgbString();
        };
    }(), en._adapters = rn, en.Animation = $, en.animationService = J, en.controllers = Jt, en.DatasetController = it, en.defaults = N, en.Element = K, en.elements = kt, en.Interaction = re, en.layouts = pe, en.platform = Oe, en.plugins = Le, en.Scale = yn, en.scaleService = Re, en.Ticks = on, en.Tooltip = Ye, en.helpers.each(fi, function(t, e) {
        en.scaleService.registerScaleType(e, t, t._defaults);
    }), Li)Li.hasOwnProperty(Bi) && en.plugins.register(Li[Bi]);
    en.platform.initialize();
    var Ei = en;
    return "undefined" != typeof window && (window.Chart = en), en.Chart = en, en.Legend = Li.legend._element, en.Title = Li.title._element, en.pluginService = en.plugins, en.PluginBase = en.Element.extend({}), en.canvasHelpers = en.helpers.canvas, en.layoutService = en.layouts, en.LinearScaleBase = Cn, en.helpers.each([
        "Bar",
        "Bubble",
        "Doughnut",
        "Line",
        "PolarArea",
        "Radar",
        "Scatter"
    ], function(t) {
        en[t] = function(e, n) {
            return new en(e, en.helpers.merge(n || {}, {
                type: t.charAt(0).toLowerCase() + t.slice(1)
            }));
        };
    }), Ei;
});

},{"moment":"jwcsj"}],"jwcsj":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    var hookCallback;
    function hooks() {
        return hookCallback.apply(null, arguments);
    }
    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }
    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(obj).length === 0;
        else {
            var k;
            for(k in obj){
                if (hasOwnProp(obj, k)) return false;
            }
            return true;
        }
    }
    function isUndefined(input) {
        return input === void 0;
    }
    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }
    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }
    function map(arr, fn) {
        var res = [], i, arrLen = arr.length;
        for(i = 0; i < arrLen; ++i)res.push(fn(arr[i], i));
        return res;
    }
    function extend(a, b) {
        for(var i in b)if (hasOwnProp(b, i)) a[i] = b[i];
        if (hasOwnProp(b, 'toString')) a.toString = b.toString;
        if (hasOwnProp(b, 'valueOf')) a.valueOf = b.valueOf;
        return a;
    }
    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }
    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
        };
    }
    function getParsingFlags(m) {
        if (m._pf == null) m._pf = defaultParsingFlags();
        return m._pf;
    }
    var some;
    if (Array.prototype.some) some = Array.prototype.some;
    else some = function(fun) {
        var t = Object(this), len = t.length >>> 0, i;
        for(i = 0; i < len; i++){
            if (i in t && fun.call(this, t[i], i, t)) return true;
        }
        return false;
    };
    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i) {
                return i != null;
            }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
            if (m._strict) isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
            if (Object.isFrozen == null || !Object.isFrozen(m)) m._isValid = isNowValid;
            else return isNowValid;
        }
        return m._isValid;
    }
    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) extend(getParsingFlags(m), flags);
        else getParsingFlags(m).userInvalidated = true;
        return m;
    }
    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [], updateInProgress = false;
    function copyConfig(to, from) {
        var i, prop, val, momentPropertiesLen = momentProperties.length;
        if (!isUndefined(from._isAMomentObject)) to._isAMomentObject = from._isAMomentObject;
        if (!isUndefined(from._i)) to._i = from._i;
        if (!isUndefined(from._f)) to._f = from._f;
        if (!isUndefined(from._l)) to._l = from._l;
        if (!isUndefined(from._strict)) to._strict = from._strict;
        if (!isUndefined(from._tzm)) to._tzm = from._tzm;
        if (!isUndefined(from._isUTC)) to._isUTC = from._isUTC;
        if (!isUndefined(from._offset)) to._offset = from._offset;
        if (!isUndefined(from._pf)) to._pf = getParsingFlags(from);
        if (!isUndefined(from._locale)) to._locale = from._locale;
        if (momentPropertiesLen > 0) for(i = 0; i < momentPropertiesLen; i++){
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) to[prop] = val;
        }
        return to;
    }
    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) this._d = new Date(NaN);
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }
    function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
    }
    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) console.warn('Deprecation warning: ' + msg);
    }
    function deprecate(msg, fn) {
        var firstTime = true;
        return extend(function() {
            if (hooks.deprecationHandler != null) hooks.deprecationHandler(null, msg);
            if (firstTime) {
                var args = [], arg, i, key, argLen = arguments.length;
                for(i = 0; i < argLen; i++){
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for(key in arguments[0])if (hasOwnProp(arguments[0], key)) arg += key + ': ' + arguments[0][key] + ', ';
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else arg = arguments[i];
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) hooks.deprecationHandler(name, msg);
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
        return typeof Function !== 'undefined' && input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }
    function set(config) {
        var prop, i;
        for(i in config)if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) this[i] = prop;
            else this['_' + i] = prop;
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
    }
    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for(prop in childConfig)if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) res[prop] = childConfig[prop];
            else delete res[prop];
        }
        for(prop in parentConfig)if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) // make sure changes to properties don't modify parent config
        res[prop] = extend({}, res[prop]);
        return res;
    }
    function Locale(config) {
        if (config != null) this.set(config);
    }
    var keys;
    if (Object.keys) keys = Object.keys;
    else keys = function(obj) {
        var i, res = [];
        for(i in obj)if (hasOwnProp(obj, i)) res.push(i);
        return res;
    };
    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    };
    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') func = function() {
            return this[callback]();
        };
        if (token) formatTokenFunctions[token] = func;
        if (padded) formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
        if (ordinal) formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) return input.replace(/^\[|\]$/g, '');
        return input.replace(/\\/g, '');
    }
    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i1, length;
        for(i1 = 0, length = array.length; i1 < length; i1++)if (formatTokenFunctions[array[i1]]) array[i1] = formatTokenFunctions[array[i1]];
        else array[i1] = removeFormattingTokens(array[i1]);
        return function(mom) {
            var output = '', i;
            for(i = 0; i < length; i++)output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            return output;
        };
    }
    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) return m.localeData().invalidDate();
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
    }
    function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while(i >= 0 && localFormattingTokens.test(format)){
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }
        return format;
    }
    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) return format;
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
            if (tok === 'MMMM' || tok === 'MM' || tok === 'DD' || tok === 'dddd') return tok.slice(1);
            return tok;
        }).join('');
        return this._longDateFormat[key];
    }
    var defaultInvalidDate = 'Invalid date';
    function invalidDate() {
        return this._invalidDate;
    }
    var defaultOrdinal = '%d', defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal1(number) {
        return this._ordinal.replace('%d', number);
    }
    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
    }
    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    var aliases = {};
    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }
    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for(prop in inputObject)if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) normalizedInput[normalizedProp] = inputObject[prop];
        }
        return normalizedInput;
    }
    var priorities = {};
    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }
    function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for(u in unitsObj)if (hasOwnProp(unitsObj, u)) units.push({
            unit: u,
            priority: priorities[u]
        });
        units.sort(function(a, b) {
            return a.priority - b.priority;
        });
        return units;
    }
    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    function absFloor(number) {
        if (number < 0) // -0 -> 0
        return Math.ceil(number) || 0;
        else return Math.floor(number);
    }
    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) value = absFloor(coercedNumber);
        return value;
    }
    function makeGetSet(unit, keepTime) {
        return function(value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else return get(this, unit);
        };
    }
    function get(mom, unit) {
        return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }
    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            } else mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
    // MOMENTS
    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) return this[units]();
        return this;
    }
    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units), i, prioritizedLen = prioritized.length;
            for(i = 0; i < prioritizedLen; i++)this[prioritized[i].unit](units[prioritized[i].unit]);
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) return this[units](value);
        }
        return this;
    }
    var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
    regexes = {};
    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) return new RegExp(unescapeFormat(token));
        return regexes[token](config._strict, config._locale);
    }
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }
    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    var tokens1 = {};
    function addParseToken(token, callback) {
        var i, func = callback, tokenLen;
        if (typeof token === 'string') token = [
            token
        ];
        if (isNumber(callback)) func = function(input, array) {
            array[callback] = toInt(input);
        };
        tokenLen = token.length;
        for(i = 0; i < tokenLen; i++)tokens1[token[i]] = func;
    }
    function addWeekParseToken(token2, callback) {
        addParseToken(token2, function(input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }
    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens1, token)) tokens1[token](input, config._a, config, token);
    }
    var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
    function mod(n, x) {
        return (n % x + x) % x;
    }
    var indexOf;
    if (Array.prototype.indexOf) indexOf = Array.prototype.indexOf;
    else indexOf = function(o) {
        // I know
        var i;
        for(i = 0; i < this.length; ++i){
            if (this[i] === o) return i;
        }
        return -1;
    };
    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) return NaN;
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    // FORMATTING
    addFormatToken('M', [
        'MM',
        2
    ], 'Mo', function() {
        return this.month() + 1;
    });
    addFormatToken('MMM', 0, 0, function(format) {
        return this.localeData().monthsShort(this, format);
    });
    addFormatToken('MMMM', 0, 0, function(format) {
        return this.localeData().months(this, format);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PRIORITY
    addUnitPriority('month', 8);
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken([
        'M',
        'MM'
    ], function(input, array) {
        array[MONTH] = toInt(input) - 1;
    });
    addParseToken([
        'MMM',
        'MMMM'
    ], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) array[MONTH] = month;
        else getParsingFlags(config).invalidMonth = input;
    });
    // LOCALES
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
    function localeMonths(m, format) {
        if (!m) return isArray(this._months) ? this._months : this._months['standalone'];
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }
    function localeMonthsShort(m, format) {
        if (!m) return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }
    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for(i = 0; i < 12; ++i){
                mom = createUTC([
                    2000,
                    i
                ]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else if (format === 'MMM') {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) return ii;
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) return handleStrictParse.call(this, monthName, format, strict);
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) return i;
            else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) return i;
            else if (!strict && this._monthsParse[i].test(monthName)) return i;
        }
    }
    // MOMENTS
    function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) // No op
        return mom;
        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) value = toInt(value);
            else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) return mom;
            }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }
    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else return get(this, 'Month');
    }
    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsShortStrictRegex;
            else return this._monthsShortRegex;
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) this._monthsShortRegex = defaultMonthsShortRegex;
            return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }
    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) computeMonthsParse.call(this);
            if (isStrict) return this._monthsStrictRegex;
            else return this._monthsRegex;
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) this._monthsRegex = defaultMonthsRegex;
            return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
    }
    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for(i = 0; i < 12; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                i
            ]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for(i = 0; i < 12; i++){
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for(i = 0; i < 24; i++)mixedPieces[i] = regexEscape(mixedPieces[i]);
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken('Y', 0, 0, function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });
    addFormatToken(0, [
        'YY',
        2
    ], 0, function() {
        return this.year() % 100;
    });
    addFormatToken(0, [
        'YYYY',
        4
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYY',
        5
    ], 0, 'year');
    addFormatToken(0, [
        'YYYYYY',
        6,
        true
    ], 0, 'year');
    // ALIASES
    addUnitAlias('year', 'y');
    // PRIORITIES
    addUnitPriority('year', 1);
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken([
        'YYYYY',
        'YYYYYY'
    ], YEAR);
    addParseToken('YYYY', function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
        array[YEAR] = parseInt(input, 10);
    });
    // HELPERS
    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }
    // HOOKS
    hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };
    // MOMENTS
    var getSetYear = makeGetSet('FullYear', true);
    function getIsLeapYear() {
        return isLeapYear(this.year());
    }
    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) date.setFullYear(y);
        } else date = new Date(y, m, d, h, M, s, ms);
        return date;
    }
    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) date.setUTCFullYear(y);
        } else date = new Date(Date.UTC.apply(null, arguments));
        return date;
    }
    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
    }
    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }
        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }
    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }
        return {
            week: resWeek,
            year: resYear
        };
    }
    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    // FORMATTING
    addFormatToken('w', [
        'ww',
        2
    ], 'wo', 'week');
    addFormatToken('W', [
        'WW',
        2
    ], 'Wo', 'isoWeek');
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PRIORITIES
    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken([
        'w',
        'ww',
        'W',
        'WW'
    ], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });
    // HELPERS
    // LOCALES
    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    function localeFirstDayOfWeek() {
        return this._week.dow;
    }
    function localeFirstDayOfYear() {
        return this._week.doy;
    }
    // MOMENTS
    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }
    // FORMATTING
    addFormatToken('d', 0, 'do', 'day');
    addFormatToken('dd', 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format);
    });
    addFormatToken('ddd', 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format);
    });
    addFormatToken('dddd', 0, 0, function(format) {
        return this.localeData().weekdays(this, format);
    });
    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken([
        'dd',
        'ddd',
        'dddd'
    ], function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) week.d = weekday;
        else getParsingFlags(config).invalidWeekday = input;
    });
    addWeekParseToken([
        'd',
        'e',
        'E'
    ], function(input, week, config, token) {
        week[token] = toInt(input);
    });
    // HELPERS
    function parseWeekday(input, locale) {
        if (typeof input !== 'string') return input;
        if (!isNaN(input)) return parseInt(input, 10);
        input = locale.weekdaysParse(input);
        if (typeof input === 'number') return input;
        return null;
    }
    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') return locale.weekdaysParse(input) % 7 || 7;
        return isNaN(input) ? null : input;
    }
    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'), defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? 'format' : 'standalone'];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
    }
    function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }
    function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            for(i = 0; i < 7; ++i){
                mom = createUTC([
                    2000,
                    1
                ]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) return ii;
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) return handleStrictParse$1.call(this, weekdayName, format, strict);
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) return i;
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) return i;
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) return i;
        }
    }
    // MOMENTS
    function getSetDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else return day;
    }
    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }
    function getSetISODayOfWeek(input) {
        if (!this.isValid()) return input != null ? this : NaN;
        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.
        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else return this.day() || 7;
    }
    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysStrictRegex;
            else return this._weekdaysRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) this._weekdaysRegex = defaultWeekdaysRegex;
            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysShortStrictRegex;
            else return this._weekdaysShortRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) computeWeekdaysParse.call(this);
            if (isStrict) return this._weekdaysMinStrictRegex;
            else return this._weekdaysMinRegex;
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for(i = 0; i < 7; i++){
            // make the regex if we don't have it already
            mom = createUTC([
                2000,
                1
            ]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    function hFormat() {
        return this.hours() % 12 || 12;
    }
    function kFormat() {
        return this.hours() || 24;
    }
    addFormatToken('H', [
        'HH',
        2
    ], 0, 'hour');
    addFormatToken('h', [
        'hh',
        2
    ], 0, hFormat);
    addFormatToken('k', [
        'kk',
        2
    ], 0, kFormat);
    addFormatToken('hmm', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken('hmmss', 0, 0, function() {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    addFormatToken('Hmm', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken('Hmmss', 0, 0, function() {
        return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
    });
    function meridiem1(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }
    meridiem1('a', true);
    meridiem1('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PRIORITY
    addUnitPriority('hour', 13);
    // PARSING
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken([
        'H',
        'HH'
    ], HOUR);
    addParseToken([
        'k',
        'kk'
    ], function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken([
        'a',
        'A'
    ], function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken([
        'h',
        'hh'
    ], function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });
    // LOCALES
    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = makeGetSet('Hours', true);
    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) return isLower ? 'pm' : 'PM';
        else return isLower ? 'am' : 'AM';
    }
    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
    };
    // internal storage for locale config files
    var locales = {}, localeFamilies = {}, globalLocale;
    function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for(i = 0; i < minl; i += 1){
            if (arr1[i] !== arr2[i]) return i;
        }
        return minl;
    }
    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }
    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while(i < names.length){
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while(j > 0){
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) return locale;
                if (next && next.length >= j && commonPrefix(split, next) >= j - 1) break;
                j--;
            }
            i++;
        }
        return globalLocale;
    }
    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match('^[^/\\\\]*$') != null;
    }
    function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (locales[name] === undefined && true && module && module.exports && isLocaleNameSane(name)) try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = undefined;
            aliasedRequire('./locale/' + name);
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
        return locales[name];
    }
    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) data = getLocale(key);
            else data = defineLocale(key, values);
            if (data) // moment.duration._locale = moment._locale = data;
            globalLocale = data;
            else if (typeof console !== 'undefined' && console.warn) //warn user if arguments are passed but the locale could not be set
            console.warn('Locale ' + key + ' not found. Did you forget to load it?');
        }
        return globalLocale._abbr;
    }
    function defineLocale(name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) parentConfig = locales[config.parentLocale]._config;
                else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) parentConfig = locale._config;
                    else {
                        if (!localeFamilies[config.parentLocale]) localeFamilies[config.parentLocale] = [];
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));
            if (localeFamilies[name]) localeFamilies[name].forEach(function(x) {
                defineLocale(x.name, x.config);
            });
            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);
            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }
    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            if (locales[name] != null && locales[name].parentLocale != null) // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(mergeConfigs(locales[name]._config, config));
            else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) parentConfig = tmpLocale._config;
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }
            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) getSetGlobalLocale(name);
            } else if (locales[name] != null) delete locales[name];
        }
        return locales[name];
    }
    // returns locale data
    function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) key = key._locale._abbr;
        if (!key) return globalLocale;
        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) return locale;
            key = [
                key
            ];
        }
        return chooseLocale(key);
    }
    function listLocales() {
        return keys(locales);
    }
    function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
            overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) overflow = DATE;
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) overflow = WEEK;
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) overflow = WEEKDAY;
            getParsingFlags(m).overflow = overflow;
        }
        return m;
    }
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
        [
            'YYYYYY-MM-DD',
            /[+-]\d{6}-\d\d-\d\d/
        ],
        [
            'YYYY-MM-DD',
            /\d{4}-\d\d-\d\d/
        ],
        [
            'GGGG-[W]WW-E',
            /\d{4}-W\d\d-\d/
        ],
        [
            'GGGG-[W]WW',
            /\d{4}-W\d\d/,
            false
        ],
        [
            'YYYY-DDD',
            /\d{4}-\d{3}/
        ],
        [
            'YYYY-MM',
            /\d{4}-\d\d/,
            false
        ],
        [
            'YYYYYYMMDD',
            /[+-]\d{10}/
        ],
        [
            'YYYYMMDD',
            /\d{8}/
        ],
        [
            'GGGG[W]WWE',
            /\d{4}W\d{3}/
        ],
        [
            'GGGG[W]WW',
            /\d{4}W\d{2}/,
            false
        ],
        [
            'YYYYDDD',
            /\d{7}/
        ],
        [
            'YYYYMM',
            /\d{6}/,
            false
        ],
        [
            'YYYY',
            /\d{4}/,
            false
        ], 
    ], // iso time formats and regexes
    isoTimes = [
        [
            'HH:mm:ss.SSSS',
            /\d\d:\d\d:\d\d\.\d+/
        ],
        [
            'HH:mm:ss,SSSS',
            /\d\d:\d\d:\d\d,\d+/
        ],
        [
            'HH:mm:ss',
            /\d\d:\d\d:\d\d/
        ],
        [
            'HH:mm',
            /\d\d:\d\d/
        ],
        [
            'HHmmss.SSSS',
            /\d\d\d\d\d\d\.\d+/
        ],
        [
            'HHmmss,SSSS',
            /\d\d\d\d\d\d,\d+/
        ],
        [
            'HHmmss',
            /\d\d\d\d\d\d/
        ],
        [
            'HHmm',
            /\d\d\d\d/
        ],
        [
            'HH',
            /\d\d/
        ], 
    ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    // date from iso format
    function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
        if (match) {
            getParsingFlags(config).iso = true;
            for(i = 0, l = isoDatesLen; i < l; i++)if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for(i = 0, l = isoTimesLen; i < l; i++)if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) tzFormat = 'Z';
                else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else config._isValid = false;
    }
    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10), 
        ];
        if (secondStr) result.push(parseInt(secondStr, 10));
        return result;
    }
    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) return 2000 + year;
        else if (year <= 999) return 1900 + year;
        return year;
    }
    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) return obsOffsets[obsOffset];
        else if (militaryOffset) // the only allowed military tz is Z
        return 0;
        else {
            var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }
    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) return;
            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);
            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            getParsingFlags(config).rfc2822 = true;
        } else config._isValid = false;
    }
    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }
        configFromISO(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        configFromRFC2822(config);
        if (config._isValid === false) delete config._isValid;
        else return;
        if (config._strict) config._isValid = false;
        else // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }
    hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    });
    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) return a;
        if (b != null) return b;
        return c;
    }
    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(), 
        ];
        return [
            nowValue.getFullYear(),
            nowValue.getMonth(),
            nowValue.getDate()
        ];
    }
    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) return;
        currentDate = currentDateArray(config);
        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) dayOfYearFromWeekInfo(config);
        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) getParsingFlags(config)._overflowDayOfYear = true;
            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }
        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for(i = 0; i < 3 && config._a[i] == null; ++i)config._a[i] = input[i] = currentDate[i];
        // Zero out whatever was not defaulted, including time
        for(; i < 7; i++)config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        if (config._nextDay) config._a[HOUR] = 24;
        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) getParsingFlags(config).weekdayMismatch = true;
    }
    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;
            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) weekdayOverflow = true;
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;
            curWeek = weekOfYear(createLocal(), dow, doy);
            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
            // Default to current week.
            week = defaults(w.w, curWeek.week);
            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) weekdayOverflow = true;
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) weekdayOverflow = true;
            } else // default to beginning of week
            weekday = dow;
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) getParsingFlags(config)._overflowWeeks = true;
        else if (weekdayOverflow != null) getParsingFlags(config)._overflowWeekday = true;
        else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }
    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {};
    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {};
    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for(i = 0; i < tokenLen; i++){
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) getParsingFlags(config).unusedInput.push(skipped);
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) getParsingFlags(config).empty = false;
                else getParsingFlags(config).unusedTokens.push(token);
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) getParsingFlags(config).unusedTokens.push(token);
        }
        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) getParsingFlags(config).unusedInput.push(string);
        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) getParsingFlags(config).bigHour = undefined;
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        configFromArray(config);
        checkOverflow(config);
    }
    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) // nothing to do
        return hour;
        if (locale.meridiemHour != null) return locale.meridiemHour(hour, meridiem);
        else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) hour += 12;
            if (!isPm && hour === 12) hour = 0;
            return hour;
        } else // this is not supposed to happen
        return hour;
    }
    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }
        for(i = 0; i < configfLen; i++){
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) tempConfig._useUTC = config._useUTC;
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);
            if (isValid(tempConfig)) validFormatFound = true;
            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;
            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
            getParsingFlags(tempConfig).score = currentScore;
            if (!bestFormatIsValid) {
                if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) bestFormatIsValid = true;
                }
            } else if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
        extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
        if (config._d) return;
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([
            i.year,
            i.month,
            dayOrDate,
            i.hour,
            i.minute,
            i.second,
            i.millisecond
        ], function(obj) {
            return obj && parseInt(obj, 10);
        });
        configFromArray(config);
    }
    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }
        return res;
    }
    function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === '') return createInvalid({
            nullInput: true
        });
        if (typeof input === 'string') config._i = input = config._locale.preparse(input);
        if (isMoment(input)) return new Moment(checkOverflow(input));
        else if (isDate(input)) config._d = input;
        else if (isArray(format)) configFromStringAndArray(config);
        else if (format) configFromStringAndFormat(config);
        else configFromInput(config);
        if (!isValid(config)) config._d = null;
        return config;
    }
    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) config._d = new Date(hooks.now());
        else if (isDate(input)) config._d = new Date(input.valueOf());
        else if (typeof input === 'string') configFromString(config);
        else if (isArray(input)) {
            config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) configFromObject(config);
        else if (isNumber(input)) // from milliseconds
        config._d = new Date(input);
        else hooks.createFromInputFallback(config);
    }
    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }
        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) input = undefined;
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
    }
    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }
    var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other < this ? this : other;
        else return createInvalid();
    }), prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) return other > this ? this : other;
        else return createInvalid();
    });
    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) moments = moments[0];
        if (!moments.length) return createLocal();
        res = moments[0];
        for(i = 1; i < moments.length; ++i)if (!moments[i].isValid() || moments[i][fn](res)) res = moments[i];
        return res;
    }
    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isBefore', args);
    }
    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy('isAfter', args);
    }
    var now1 = function() {
        return Date.now ? Date.now() : +new Date();
    };
    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond', 
    ];
    function isDurationValid(m) {
        var key, unitHasDecimal = false, i, orderLen = ordering.length;
        for(key in m){
            if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) return false;
        }
        for(i = 0; i < orderLen; ++i)if (m[ordering[i]]) {
            if (unitHasDecimal) return false; // only allow non-integers for smallest unit
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) unitHasDecimal = true;
        }
        return true;
    }
    function isValid$1() {
        return this._isValid;
    }
    function createInvalid$1() {
        return createDuration(NaN);
    }
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 3600000; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
    }
    function isDuration(obj) {
        return obj instanceof Duration;
    }
    function absRound(number) {
        if (number < 0) return Math.round(-1 * number) * -1;
        else return Math.round(number);
    }
    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for(i = 0; i < len; i++)if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) diffs++;
        return diffs + lengthDiff;
    }
    // FORMATTING
    function offset1(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset(), sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        });
    }
    offset1('Z', ':');
    offset1('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken([
        'Z',
        'ZZ'
    ], function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });
    // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher), chunk, parts, minutes;
        if (matches === null) return null;
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || [
            '-',
            0,
            0
        ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }
    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else return createLocal(input).local();
    }
    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }
    // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {};
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) return input != null ? this : NaN;
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) return this;
            } else if (Math.abs(input) < 16 && !keepMinutes) input = input * 60;
            if (!this._isUTC && keepLocalTime) localAdjust = getDateOffset(this);
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) this.add(localAdjust, 'm');
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else return this._isUTC ? offset : getDateOffset(this);
    }
    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') input = -input;
            this.utcOffset(input, keepLocalTime);
            return this;
        } else return -this.utcOffset();
    }
    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) this.subtract(getDateOffset(this), 'm');
        }
        return this;
    }
    function setOffsetToParsedOffset() {
        if (this._tzm != null) this.utcOffset(this._tzm, false, true);
        else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) this.utcOffset(tZone);
            else this.utcOffset(0, true);
        }
        return this;
    }
    function hasAlignedHourOffset(input) {
        if (!this.isValid()) return false;
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }
    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) return this._isDSTShifted;
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else this._isDSTShifted = false;
        return this._isDSTShifted;
    }
    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
        var duration = input, // matching against regexp is expensive, do it on demand
        match = null, sign, ret, diffRes;
        if (isDuration(input)) duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
        else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) duration[key] = +input;
            else duration.milliseconds = +input;
        } else if (match = aspNetRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign
            };
        } else if (match = isoRegex.exec(input)) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
            };
        } else if (duration == null) // checks for null or undefined
        duration = {};
        else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, '_locale')) ret._locale = input._locale;
        if (isDuration(input) && hasOwnProp(input, '_isValid')) ret._isValid = input._isValid;
        return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }
    function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) --res.months;
        res.milliseconds = +other - +base.clone().add(res.months, 'M');
        return res;
    }
    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) return {
            milliseconds: 0,
            months: 0
        };
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) res = positiveMomentsDifference(base, other);
        else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }
        return res;
    }
    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
            }
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) // No op
        return;
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) setMonth(mom, get(mom, 'Month') + months * isAdding);
        if (days) set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        if (milliseconds) mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        if (updateOffset) hooks.updateOffset(mom, days || months);
    }
    var add = createAdder(1, 'add'), subtract = createAdder(-1, 'subtract');
    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }
    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
    }
    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms', 
        ], i, property, propertyLen = properties.length;
        for(i = 0; i < propertyLen; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) dataTypeTest = input.filter(function(item) {
            return !isNumber(item) && isString(input);
        }).length === 0;
        return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse', 
        ], i, property;
        for(i = 0; i < properties.length; i += 1){
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    }
    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf('day'), format = hooks.calendarFormat(this, sod) || 'sameElse', output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }
    function clone() {
        return new Moment(this);
    }
    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() > localInput.valueOf();
        else return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() < localInput.valueOf();
        else return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) return false;
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }
    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) return false;
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') return this.valueOf() === localInput.valueOf();
        else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }
    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff1(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) return NaN;
        that = cloneWithOffset(input, this);
        if (!that.isValid()) return NaN;
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch(units){
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }
        return asFloat ? output : absFloor(output);
    }
    function monthDiff(a, b) {
        if (a.date() < b.date()) // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'), anchor2, adjust;
        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }
        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    function toISOString(keepOffset) {
        if (!this.isValid()) return null;
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) return this.toDate().toISOString();
            else return new Date(this.valueOf() + this.utcOffset() * 60000).toISOString().replace('Z', formatMoment(m, 'Z'));
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }
    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */ function inspect() {
        if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)';
        var func = 'moment', zone = '', prefix, year, datetime, suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
    }
    function format1(inputString) {
        if (!inputString) inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }
    function from1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }
    function to1(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) return createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix);
        else return this.localeData().invalidDate();
    }
    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }
    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale1(key) {
        var newLocaleData;
        if (key === undefined) return this._locale._abbr;
        else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) this._locale = newLocaleData;
            return this;
        }
    }
    var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
        if (key === undefined) return this.localeData();
        else return this.locale(key);
    });
    function localeData() {
        return this._locale;
    }
    var MS_PER_SECOND = 1000, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = 3506328 * MS_PER_HOUR;
    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }
    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        else return new Date(y, m, d).valueOf();
    }
    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        else return Date.UTC(y, m, d);
    }
    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) return this;
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch(units){
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }
    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }
    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }
    function toDate() {
        return new Date(this.valueOf());
    }
    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(), 
        ];
    }
    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }
    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
        return isValid(this);
    }
    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
        return getParsingFlags(this).overflow;
    }
    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }
    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');
    addFormatToken('y', [
        'y',
        1
    ], 'yo', 'eraYear');
    addFormatToken('y', [
        'yy',
        2
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyy',
        3
    ], 0, 'eraYear');
    addFormatToken('y', [
        'yyyy',
        4
    ], 0, 'eraYear');
    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);
    addParseToken([
        'N',
        'NN',
        'NNN',
        'NNNN',
        'NNNNN'
    ], function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) getParsingFlags(config).era = era;
        else getParsingFlags(config).invalidEra = input;
    });
    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);
    addParseToken([
        'y',
        'yy',
        'yyy',
        'yyyy'
    ], YEAR);
    addParseToken([
        'yo'
    ], function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) match = input.match(config._locale._eraYearOrdinalRegex);
        if (config._locale.eraYearOrdinalParse) array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        else array[YEAR] = parseInt(input, 10);
    });
    function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale('en')._eras;
        for(i = 0, l = eras.length; i < l; ++i){
            switch(typeof eras[i].since){
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }
            switch(typeof eras[i].until){
                case 'undefined':
                    eras[i].until = Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }
    function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for(i = 0, l = eras.length; i < l; ++i){
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();
            if (strict) switch(format){
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) return eras[i];
                    break;
                case 'NNNN':
                    if (name === eraName) return eras[i];
                    break;
                case 'NNNNN':
                    if (narrow === eraName) return eras[i];
                    break;
            }
            else if ([
                name,
                abbr,
                narrow
            ].indexOf(eraName) >= 0) return eras[i];
        }
    }
    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? 1 : -1;
        if (year === undefined) return hooks(era.since).year();
        else return hooks(era.since).year() + (year - era.offset) * dir;
    }
    function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].name;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].name;
        }
        return '';
    }
    function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].narrow;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].narrow;
        }
        return '';
    }
    function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until) return eras[i].abbr;
            if (eras[i].until <= val && val <= eras[i].since) return eras[i].abbr;
        }
        return '';
    }
    function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for(i = 0, l = eras.length; i < l; ++i){
            dir = eras[i].since <= eras[i].until ? 1 : -1;
            // truncate time
            val = this.clone().startOf('day').valueOf();
            if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
        }
        return this.year();
    }
    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) computeErasParse.call(this);
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) computeErasParse.call(this);
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for(i = 0, l = eras.length; i < l; ++i){
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));
            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp('^(' + narrowPieces.join('|') + ')', 'i');
    }
    // FORMATTING
    addFormatToken(0, [
        'gg',
        2
    ], 0, function() {
        return this.weekYear() % 100;
    });
    addFormatToken(0, [
        'GG',
        2
    ], 0, function() {
        return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [
            token,
            token.length
        ], 0, getter);
    }
    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PRIORITY
    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken([
        'gggg',
        'ggggg',
        'GGGG',
        'GGGGG'
    ], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });
    addWeekParseToken([
        'gg',
        'GG'
    ], function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });
    // MOMENTS
    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }
    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }
    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) return weekOfYear(this, dow, doy).year;
        else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) week = weeksTarget;
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }
    // FORMATTING
    addFormatToken('Q', 0, 'Qo', 'quarter');
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PRIORITY
    addUnitPriority('quarter', 7);
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });
    // MOMENTS
    function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }
    // FORMATTING
    addFormatToken('D', [
        'DD',
        2
    ], 'Do', 'date');
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIORITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
    });
    addParseToken([
        'D',
        'DD'
    ], DATE);
    addParseToken('Do', function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });
    // MOMENTS
    var getSetDayOfMonth = makeGetSet('Date', true);
    // FORMATTING
    addFormatToken('DDD', [
        'DDDD',
        3
    ], 'DDDo', 'dayOfYear');
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    // PRIORITY
    addUnitPriority('dayOfYear', 4);
    // PARSING
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken([
        'DDD',
        'DDDD'
    ], function(input, array, config) {
        config._dayOfYear = toInt(input);
    });
    // HELPERS
    // MOMENTS
    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }
    // FORMATTING
    addFormatToken('m', [
        'mm',
        2
    ], 0, 'minute');
    // ALIASES
    addUnitAlias('minute', 'm');
    // PRIORITY
    addUnitPriority('minute', 14);
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken([
        'm',
        'mm'
    ], MINUTE);
    // MOMENTS
    var getSetMinute = makeGetSet('Minutes', false);
    // FORMATTING
    addFormatToken('s', [
        'ss',
        2
    ], 0, 'second');
    // ALIASES
    addUnitAlias('second', 's');
    // PRIORITY
    addUnitPriority('second', 15);
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken([
        's',
        'ss'
    ], SECOND);
    // MOMENTS
    var getSetSecond = makeGetSet('Seconds', false);
    // FORMATTING
    addFormatToken('S', 0, 0, function() {
        return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, [
        'SS',
        2
    ], 0, function() {
        return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, [
        'SSS',
        3
    ], 0, 'millisecond');
    addFormatToken(0, [
        'SSSS',
        4
    ], 0, function() {
        return this.millisecond() * 10;
    });
    addFormatToken(0, [
        'SSSSS',
        5
    ], 0, function() {
        return this.millisecond() * 100;
    });
    addFormatToken(0, [
        'SSSSSS',
        6
    ], 0, function() {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, [
        'SSSSSSS',
        7
    ], 0, function() {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, [
        'SSSSSSSS',
        8
    ], 0, function() {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, [
        'SSSSSSSSS',
        9
    ], 0, function() {
        return this.millisecond() * 1000000;
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var token1, getSetMillisecond;
    for(token1 = 'SSSS'; token1.length <= 9; token1 += 'S')addRegexToken(token1, matchUnsigned);
    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }
    for(token1 = 'S'; token1.length <= 9; token1 += 'S')addParseToken(token1, parseMs);
    getSetMillisecond = makeGetSet('Milliseconds', false);
    // FORMATTING
    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');
    // MOMENTS
    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }
    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff1;
    proto.endOf = endOf;
    proto.format = format1;
    proto.from = from1;
    proto.fromNow = fromNow;
    proto.to = to1;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale1;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) proto[Symbol.for('nodejs.util.inspect.custom')] = function() {
        return 'Moment<' + this.format() + '>';
    };
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
    function createUnix(input) {
        return createLocal(input * 1000);
    }
    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
        return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal1;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }
    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }
        format = format || '';
        if (index != null) return get$1(format, index, field, 'month');
        var i, out = [];
        for(i = 0; i < 12; i++)out[i] = get$1(format, i, field, 'month');
        return out;
    }
    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }
            format = format || '';
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) return get$1(format, (index + shift) % 7, field, 'day');
        for(i = 0; i < 7; i++)out[i] = get$1(format, (i + shift) % 7, field, 'day');
        return out;
    }
    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }
    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }
    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }
    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }
    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }
    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD'
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC'
            }, 
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10, output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
        }
    });
    // Side effect imports
    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
    var mathAbs = Math.abs;
    function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
    }
    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
    }
    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }
    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
        if (number < 0) return Math.floor(number);
        else return Math.ceil(number);
    }
    function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
    }
    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }
    function monthsToDays(months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }
    function as(units) {
        if (!this.isValid()) return NaN;
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch(units){
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch(units){
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }
    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) return NaN;
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
    }
    function makeAs(alias) {
        return function() {
            return this.as(alias);
        };
    }
    var asMilliseconds = makeAs('ms'), asSeconds = makeAs('s'), asMinutes = makeAs('m'), asHours = makeAs('h'), asDays = makeAs('d'), asWeeks = makeAs('w'), asMonths = makeAs('M'), asQuarters = makeAs('Q'), asYears = makeAs('y');
    function clone$1() {
        return createDuration(this);
    }
    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }
    function makeGetter(name) {
        return function() {
            return this.isValid() ? this._data[name] : NaN;
        };
    }
    var milliseconds1 = makeGetter('milliseconds'), seconds1 = makeGetter('seconds'), minutes1 = makeGetter('minutes'), hours1 = makeGetter('hours'), days1 = makeGetter('days'), months1 = makeGetter('months'), years1 = makeGetter('years');
    function weeks1() {
        return absFloor(this.days() / 7);
    }
    var round = Math.round, thresholds1 = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }
    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as('s')), minutes = round(duration.as('m')), hours = round(duration.as('h')), days = round(duration.as('d')), months = round(duration.as('M')), weeks = round(duration.as('w')), years = round(duration.as('y')), a = seconds <= thresholds.ss && [
            's',
            seconds
        ] || seconds < thresholds.s && [
            'ss',
            seconds
        ] || minutes <= 1 && [
            'm'
        ] || minutes < thresholds.m && [
            'mm',
            minutes
        ] || hours <= 1 && [
            'h'
        ] || hours < thresholds.h && [
            'hh',
            hours
        ] || days <= 1 && [
            'd'
        ] || days < thresholds.d && [
            'dd',
            days
        ];
        if (thresholds.w != null) a = a || weeks <= 1 && [
            'w'
        ] || weeks < thresholds.w && [
            'ww',
            weeks
        ];
        a = a || months <= 1 && [
            'M'
        ] || months < thresholds.M && [
            'MM',
            months
        ] || years <= 1 && [
            'y'
        ] || [
            'yy',
            years
        ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }
    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) return round;
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }
    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds1[threshold] === undefined) return false;
        if (limit === undefined) return thresholds1[threshold];
        thresholds1[threshold] = limit;
        if (threshold === 's') thresholds1.ss = limit - 1;
        return true;
    }
    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var withSuffix = false, th = thresholds1, locale, output;
        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') withSuffix = argWithSuffix;
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds1, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) th.ss = argThresholds.s - 1;
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) output = locale.pastFuture(+this, output);
        return locale.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign1(x) {
        return (x > 0) - (x < 0) || +x;
    }
    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) return this.localeData().invalidDate();
        var seconds = abs$1(this._milliseconds) / 1000, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        totalSign = total < 0 ? '-' : '';
        ymSign = sign1(this._months) !== sign1(total) ? '-' : '';
        daysSign = sign1(this._days) !== sign1(total) ? '-' : '';
        hmsSign = sign1(this._milliseconds) !== sign1(total) ? '-' : '';
        return totalSign + 'P' + (years ? ymSign + years + 'Y' : '') + (months ? ymSign + months + 'M' : '') + (days ? daysSign + days + 'D' : '') + (hours || minutes || seconds ? 'T' : '') + (hours ? hmsSign + hours + 'H' : '') + (minutes ? hmsSign + minutes + 'M' : '') + (seconds ? hmsSign + s + 'S' : '');
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds1;
    proto$2.seconds = seconds1;
    proto$2.minutes = minutes1;
    proto$2.hours = hours1;
    proto$2.days = days1;
    proto$2.weeks = weeks1;
    proto$2.months = months1;
    proto$2.years = years1;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale1;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;
    // FORMATTING
    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function(input, array, config) {
        config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = '2.29.3';
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now1;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
        DATE: 'YYYY-MM-DD',
        TIME: 'HH:mm',
        TIME_SECONDS: 'HH:mm:ss',
        TIME_MS: 'HH:mm:ss.SSS',
        WEEK: 'GGGG-[W]WW',
        MONTH: 'YYYY-MM'
    };
    return hooks;
});

},{}]},["cqgHy","jzLXg"], "jzLXg", "parcelRequire56ab")

//# sourceMappingURL=index.7b826fc7.js.map
