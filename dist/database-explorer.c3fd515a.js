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
})({"8fd6L":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "aabb4389c3fd515a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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

},{}],"2Mye5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lit = require("lit");
var _badge = require("@vaadin/vaadin-lumo-styles/badge");
var _styles = require("../styles/styles");
var _stylesDefault = parcelHelpers.interopDefault(_styles);
var _grid = require("@vaadin/grid");
var _vaadinGridSortColumnJs = require("@vaadin/grid/vaadin-grid-sort-column.js");
var _vaadinGridColumnJs = require("@vaadin/grid/vaadin-grid-column.js");
var _horizontalLayout = require("@vaadin/horizontal-layout");
var _verticalLayout = require("@vaadin/vertical-layout");
var _button = require("@vaadin/button");
var _textField = require("@vaadin/text-field");
var _myDialog = require("./my-dialog");
class DatabaseWatcher extends (0, _lit.LitElement) {
    static properties = {
        _dialog: {
            type: Object,
            state: true
        },
        items: {
            type: Array,
            state: true
        }
    };
    constructor(){
        super();
        this.items = [
            {
                name: "School",
                ipaddress: "178.23.02.12",
                type: "POSTGRES",
                status: "Online"
            },
            {
                name: "Active Directory",
                ipaddress: "124.22.11.01",
                type: "MSSQL",
                status: "Online"
            },
            {
                name: "Test",
                ipaddress: "111.33.22.11",
                type: "MySQL",
                status: "Offline"
            }, 
        ];
    }
    firstUpdated() {
        this._dialog = this.shadowRoot?.querySelector("my-dialog");
    }
    static styles = [
        (0, _stylesDefault.default),
        (0, _badge.badge),
        (0, _lit.css)`
      vaadin-horizontal-layout[action-bar] {
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }

      main {
        margin: 24px 0;
      }
    `, 
    ];
    render() {
        return (0, _lit.html)`
      <h1>Database Watcher</h1>

      <vaadin-horizontal-layout action-bar theme="between">
        <vaadin-button
          connect
          theme="secondary"
          @click="${()=>this._dialog.open()}"
          >Connect Database</vaadin-button
        >
        <div>Updated every 2 minutes</div>
      </vaadin-horizontal-layout>

      <vaadin-grid .items="${this.items}">
        <vaadin-grid-sort-column
          header="Name"
          path="name"
          flex-grow="0"
          auto-width
        ></vaadin-grid-sort-column>
        <vaadin-grid-sort-column
          header="IP Address"
          path="ipaddress"
          auto-width
        ></vaadin-grid-sort-column>
        <vaadin-grid-column
          header="Status"
          .renderer="${this.statusRenderer}"
          auto-width
        ></vaadin-grid-column>
        <vaadin-grid-column
          header="Actions"
          .renderer="${this.actionsRenderer}"
          auto-width
        ></vaadin-grid-column>
      </vaadin-grid>

      <my-dialog
        header="Database"
        .body=${(0, _lit.html)`
          <vaadin-vertical-layout
            style=" align-items: stretch;width: 300px;max-width: 100%;"
          >
            <style>
              h1 {
                margin: 0;
              }
              main {
                margin: 0 0 24px 0;
                display: flex;
                flex-direction: column;
              }
            </style>
            <h1>Database</h1>
            <main>
              <vaadin-text-field label="Name"></vaadin-text-field>
              <vaadin-text-field label="IP Address"></vaadin-text-field>
            </main>

            <vaadin-horizontal-layout
              style="justify-content: end;"
              theme="spacing"
            >
              <vaadin-button @click="${()=>this._dialog.close()}">
                Cancel
              </vaadin-button>
              <vaadin-button
                theme="primary"
                @click="${()=>{
            this._dialog.close();
        }}"
              >
                Add
              </vaadin-button>
            </vaadin-horizontal-layout>
          </vaadin-vertical-layout>
        `}
        @opened-changed=${(e)=>{
            console.log("open changed", e);
        }}
      >
      </my-dialog>
    `;
    }
    actionsRenderer = (root, _)=>{
        (0, _lit.render)((0, _lit.html)`
        <vaadin-horizontal-layout theme="spacing">
          <vaadin-button theme="tertiary">Edit</vaadin-button>
          <vaadin-button theme="tertiary error">Delete</vaadin-button>
        </vaadin-horizontal-layout>
      `, root);
    };
    statusRenderer = (root, _, model)=>{
        const database = model.item;
        (0, _lit.render)((0, _lit.html)`
        <span
          theme="badge ${database.status === "Online" ? "success" : "error"}"
          >${database.status}</span
        >
      `, root);
    };
}
customElements.define("database-watcher", DatabaseWatcher);

},{"lit":"4antt","../styles/styles":"gpWsE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@vaadin/grid":"475Hg","@vaadin/horizontal-layout":"fVgWn","@vaadin/vertical-layout":"hp1ng","@vaadin/button":"lt1JT","@vaadin/text-field":"bzlCn","./my-dialog":"fB8B2","@vaadin/vaadin-lumo-styles/badge":"3d7AN","@vaadin/grid/vaadin-grid-sort-column.js":"9qiAW","@vaadin/grid/vaadin-grid-column.js":"cKrr9"}],"gpWsE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
const styles = (0, _lit.css)`
  :host {
    display: flex;
    flex-direction: column;
    margin: 24px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Archivo", sans-serif;
  }
`;
exports.default = styles;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"475Hg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinGridJs = require("./theme/lumo/vaadin-grid.js");
var _vaadinGridColumnJs = require("./src/vaadin-grid-column.js");
parcelHelpers.exportAll(_vaadinGridColumnJs, exports);
var _vaadinGridJs1 = require("./src/vaadin-grid.js");
parcelHelpers.exportAll(_vaadinGridJs1, exports);

},{"./theme/lumo/vaadin-grid.js":"7ljmy","./src/vaadin-grid-column.js":"dFate","./src/vaadin-grid.js":"3huPn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ljmy":[function(require,module,exports) {
var _colorJs = require("@vaadin/vaadin-lumo-styles/color.js");
var _fontIconsJs = require("@vaadin/vaadin-lumo-styles/font-icons.js");
var _sizingJs = require("@vaadin/vaadin-lumo-styles/sizing.js");
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _styleJs = require("@vaadin/vaadin-lumo-styles/style.js");
var _typographyJs = require("@vaadin/vaadin-lumo-styles/typography.js");
var _vaadinCheckboxJs = require("@vaadin/checkbox/theme/lumo/vaadin-checkbox.js");
var _vaadinGridStylesJs = require("./vaadin-grid-styles.js");
var _vaadinGridJs = require("../../src/vaadin-grid.js");

},{"@vaadin/vaadin-lumo-styles/color.js":"2or7a","@vaadin/vaadin-lumo-styles/font-icons.js":"ecMY2","@vaadin/vaadin-lumo-styles/sizing.js":"b781B","@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-lumo-styles/style.js":"hYu1M","@vaadin/vaadin-lumo-styles/typography.js":"5zfSv","@vaadin/checkbox/theme/lumo/vaadin-checkbox.js":"coN1z","./vaadin-grid-styles.js":"k66Xg","../../src/vaadin-grid.js":"3huPn"}],"coN1z":[function(require,module,exports) {
var _vaadinCheckboxStylesJs = require("./vaadin-checkbox-styles.js");
var _vaadinCheckboxJs = require("../../src/vaadin-checkbox.js");

},{"./vaadin-checkbox-styles.js":"dxPbj","../../src/vaadin-checkbox.js":"av2uw"}],"dxPbj":[function(require,module,exports) {
var _colorJs = require("@vaadin/vaadin-lumo-styles/color.js");
var _fontIconsJs = require("@vaadin/vaadin-lumo-styles/font-icons.js");
var _sizingJs = require("@vaadin/vaadin-lumo-styles/sizing.js");
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _styleJs = require("@vaadin/vaadin-lumo-styles/style.js");
var _typographyJs = require("@vaadin/vaadin-lumo-styles/typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-checkbox", (0, _vaadinThemableMixinJs.css)`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='checkbox'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
      flex: none;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--lumo-primary-color);
    }

    /* Needed to align the checkbox nicely on the baseline */
    [part='checkbox']::before {
      content: '\\2003';
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-checkmark);
      color: var(--lumo-primary-contrast-color);
      font-size: calc(var(--lumo-size-m) / 2 + 2px);
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: '';
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background-color: var(--lumo-contrast-30pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background-color: var(--lumo-contrast-20pct);
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `, {
    moduleId: "lumo-checkbox"
});

},{"@vaadin/vaadin-lumo-styles/color.js":"2or7a","@vaadin/vaadin-lumo-styles/font-icons.js":"ecMY2","@vaadin/vaadin-lumo-styles/sizing.js":"b781B","@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-lumo-styles/style.js":"hYu1M","@vaadin/vaadin-lumo-styles/typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"av2uw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Checkbox", ()=>Checkbox);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _activeMixinJs = require("@vaadin/component-base/src/active-mixin.js");
var _controllerMixinJs = require("@vaadin/component-base/src/controller-mixin.js");
var _elementMixinJs = require("@vaadin/component-base/src/element-mixin.js");
var _checkedMixinJs = require("@vaadin/field-base/src/checked-mixin.js");
var _delegateFocusMixinJs = require("@vaadin/field-base/src/delegate-focus-mixin.js");
var _inputControllerJs = require("@vaadin/field-base/src/input-controller.js");
var _labelMixinJs = require("@vaadin/field-base/src/label-mixin.js");
var _labelledInputControllerJs = require("@vaadin/field-base/src/labelled-input-controller.js");
var _slotTargetControllerJs = require("@vaadin/field-base/src/slot-target-controller.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/**
 * `<vaadin-checkbox>` is an input field representing a binary choice.
 *
 * ```html
 * <vaadin-checkbox label="I accept the terms and conditions"></vaadin-checkbox>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|----------------
 * `checkbox`  | The wrapper element that contains slotted <input type="checkbox">.
 *
 * The following state attributes are available for styling:
 *
 * Attribute       | Description | Part name
 * ----------------|-------------|--------------
 * `active`        | Set when the checkbox is pressed down, either with mouse, touch or the keyboard. | `:host`
 * `disabled`      | Set when the checkbox is disabled. | `:host`
 * `focus-ring`    | Set when the checkbox is focused using the keyboard. | `:host`
 * `focused`       | Set when the checkbox is focused. | `:host`
 * `indeterminate` | Set when the checkbox is in the indeterminate state. | `:host`
 * `checked`       | Set when the checkbox is checked. | `:host`
 * `has-label`     | Set when the checkbox has a label. | `:host`
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} checked-changed - Fired when the `checked` property changes.
 * @fires {CustomEvent} indeterminate-changed - Fired when the `indeterminate` property changes.
 *
 * @extends HTMLElement
 * @mixes ControllerMixin
 * @mixes ThemableMixin
 * @mixes ElementMixin
 * @mixes ActiveMixin
 * @mixes DelegateFocusMixin
 * @mixes CheckedMixin
 * @mixes LabelMixin
 */ class Checkbox extends (0, _labelMixinJs.LabelMixin)((0, _checkedMixinJs.CheckedMixin)((0, _delegateFocusMixinJs.DelegateFocusMixin)((0, _activeMixinJs.ActiveMixin)((0, _elementMixinJs.ElementMixin)((0, _vaadinThemableMixinJs.ThemableMixin)((0, _controllerMixinJs.ControllerMixin)((0, _polymerElementJs.PolymerElement)))))))) {
    static get is() {
        return "vaadin-checkbox";
    }
    static get template() {
        return (0, _polymerElementJs.html)`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-checkbox-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-checkbox-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-checkbox-container">
        <div class="vaadin-checkbox-wrapper">
          <div part="checkbox"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `;
    }
    static get properties() {
        return {
            /**
       * True if the checkbox is in the indeterminate state which means
       * it is not possible to say whether it is checked or unchecked.
       * The state is reset once the user switches the checkbox by hand.
       *
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       *
       * @type {boolean}
       */ indeterminate: {
                type: Boolean,
                notify: true,
                value: false,
                reflectToAttribute: true
            },
            /**
       * The name of the checkbox.
       *
       * @type {string}
       */ name: {
                type: String,
                value: ""
            }
        };
    }
    /** @override */ static get delegateProps() {
        return [
            ...super.delegateProps,
            "indeterminate"
        ];
    }
    /** @override */ static get delegateAttrs() {
        return [
            ...super.delegateAttrs,
            "name"
        ];
    }
    constructor(){
        super();
        this._setType("checkbox");
        // Set the string "on" as the default value for the checkbox following the HTML specification:
        // https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
        this.value = "on";
    }
    /** @protected */ connectedCallback() {
        super.connectedCallback();
        if (!this._inputController) {
            this._inputController = new (0, _inputControllerJs.InputController)(this, (input)=>{
                this._setInputElement(input);
                this._setFocusElement(input);
                this.stateTarget = input;
                this.ariaTarget = input;
            });
            this.addController(this._inputController);
            this.addController(new (0, _labelledInputControllerJs.LabelledInputController)(this.inputElement, this._labelController));
            this.addController(new (0, _slotTargetControllerJs.SlotTargetController)(this.$.noop, ()=>this._labelController.node, ()=>this.__warnDeprecated()));
        }
    }
    /** @private */ __warnDeprecated() {
        console.warn(`WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-checkbox> is deprecated.
Please use <label slot="label"> wrapper or the label property instead.`);
    }
    /**
   * Extends the method from `ActiveMixin` in order to
   * prevent setting the `active` attribute when interacting with a link inside the label.
   *
   * @param {Event} event
   * @return {boolean}
   * @protected
   * @override
   */ _shouldSetActive(event) {
        if (event.target.localName === "a") return false;
        return super._shouldSetActive(event);
    }
    /**
   * Extends the method from `CheckedMixin` in order to
   * reset the indeterminate state once the user switches the checkbox.
   *
   * @param {boolean} checked
   * @protected
   * @override
   */ _toggleChecked(checked) {
        if (this.indeterminate) this.indeterminate = false;
        super._toggleChecked(checked);
    }
}
customElements.define(Checkbox.is, Checkbox);

},{"@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/active-mixin.js":"d8igj","@vaadin/component-base/src/controller-mixin.js":"57izu","@vaadin/component-base/src/element-mixin.js":"4Nib4","@vaadin/field-base/src/checked-mixin.js":"8KQrn","@vaadin/field-base/src/delegate-focus-mixin.js":"3lYzM","@vaadin/field-base/src/input-controller.js":"8tcOX","@vaadin/field-base/src/label-mixin.js":"6W2eY","@vaadin/field-base/src/labelled-input-controller.js":"4s3oE","@vaadin/field-base/src/slot-target-controller.js":"idMIr","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KQrn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CheckedMixin", ()=>CheckedMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
var _disabledMixinJs = require("@vaadin/component-base/src/disabled-mixin.js");
var _delegateStateMixinJs = require("./delegate-state-mixin.js");
var _inputMixinJs = require("./input-mixin.js");
const CheckedMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class CheckedMixinClass extends (0, _delegateStateMixinJs.DelegateStateMixin)((0, _disabledMixinJs.DisabledMixin)((0, _inputMixinJs.InputMixin)(superclass))) {
        static get properties() {
            return {
                /**
           * True if the element is checked.
           * @type {boolean}
           */ checked: {
                    type: Boolean,
                    value: false,
                    notify: true,
                    reflectToAttribute: true
                }
            };
        }
        static get delegateProps() {
            return [
                ...super.delegateProps,
                "checked"
            ];
        }
        /**
       * @protected
       * @override
       */ _onChange(event) {
            this._toggleChecked(event.target.checked);
        }
        /** @protected */ _toggleChecked(checked) {
            this.checked = checked;
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@vaadin/component-base/src/disabled-mixin.js":"17bUT","./delegate-state-mixin.js":"2p0hB","./input-mixin.js":"rP8PM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2p0hB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DelegateStateMixin", ()=>DelegateStateMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
const DelegateStateMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class DelegateStateMixinClass extends superclass {
        static get properties() {
            return {
                /**
           * A target element to which attributes and properties are delegated.
           * @protected
           */ stateTarget: {
                    type: Object,
                    observer: "_stateTargetChanged"
                }
            };
        }
        /**
       * An array of the host attributes to delegate to the target element.
       */ static get delegateAttrs() {
            return [];
        }
        /**
       * An array of the host properties to delegate to the target element.
       */ static get delegateProps() {
            return [];
        }
        /** @protected */ ready() {
            super.ready();
            this._createDelegateAttrsObserver();
            this._createDelegatePropsObserver();
        }
        /** @protected */ _stateTargetChanged(target) {
            if (target) {
                this._ensureAttrsDelegated();
                this._ensurePropsDelegated();
            }
        }
        /** @protected */ _createDelegateAttrsObserver() {
            this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`);
        }
        /** @protected */ _createDelegatePropsObserver() {
            this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`);
        }
        /** @protected */ _ensureAttrsDelegated() {
            this.constructor.delegateAttrs.forEach((name)=>{
                this._delegateAttribute(name, this[name]);
            });
        }
        /** @protected */ _ensurePropsDelegated() {
            this.constructor.delegateProps.forEach((name)=>{
                this._delegateProperty(name, this[name]);
            });
        }
        /** @protected */ _delegateAttrsChanged(...values) {
            this.constructor.delegateAttrs.forEach((name, index)=>{
                this._delegateAttribute(name, values[index]);
            });
        }
        /** @protected */ _delegatePropsChanged(...values) {
            this.constructor.delegateProps.forEach((name, index)=>{
                this._delegateProperty(name, values[index]);
            });
        }
        /** @protected */ _delegateAttribute(name, value) {
            if (!this.stateTarget) return;
            if (name === "invalid") this._delegateAttribute("aria-invalid", value ? "true" : false);
            if (typeof value === "boolean") this.stateTarget.toggleAttribute(name, value);
            else if (value) this.stateTarget.setAttribute(name, value);
            else this.stateTarget.removeAttribute(name);
        }
        /** @protected */ _delegateProperty(name, value) {
            if (!this.stateTarget) return;
            this.stateTarget[name] = value;
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rP8PM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMixin", ()=>InputMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
const InputMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class InputMixinClass extends superclass {
        static get properties() {
            return {
                /**
           * A reference to the input element controlled by the mixin.
           * Any component implementing this mixin is expected to provide it
           * by using `this._setInputElement(input)` Polymer API.
           *
           * A typical case is using `InputController` that does this automatically.
           * However, the input element does not have to always be native <input>:
           * as an example, <vaadin-combo-box-light> accepts other components.
           *
           * @protected
           * @type {!HTMLElement}
           */ inputElement: {
                    type: Object,
                    readOnly: true,
                    observer: "_inputElementChanged"
                },
                /**
           * String used to define input type.
           * @protected
           */ type: {
                    type: String,
                    readOnly: true
                },
                /**
           * The value of the field.
           */ value: {
                    type: String,
                    value: "",
                    observer: "_valueChanged",
                    notify: true
                }
            };
        }
        constructor(){
            super();
            this._boundOnInput = this._onInput.bind(this);
            this._boundOnChange = this._onChange.bind(this);
        }
        /**
       * Clear the value of the field.
       */ clear() {
            this.value = "";
        }
        /**
       * Add event listeners to the input element instance.
       * Override this method to add custom listeners.
       * @param {!HTMLElement} input
       */ _addInputListeners(input) {
            input.addEventListener("input", this._boundOnInput);
            input.addEventListener("change", this._boundOnChange);
        }
        /**
       * Remove event listeners from the input element instance.
       * @param {!HTMLElement} input
       */ _removeInputListeners(input) {
            input.removeEventListener("input", this._boundOnInput);
            input.removeEventListener("change", this._boundOnChange);
        }
        /**
       * A method to forward the value property set on the field
       * programmatically back to the input element value.
       * Override this method to perform additional checks,
       * for example to skip this in certain conditions.
       * @param {string} value
       * @protected
       * @override
       */ _forwardInputValue(value) {
            // Value might be set before an input element is initialized.
            // This case should be handled separately by a component that
            // implements this mixin, for example in `connectedCallback`.
            if (!this.inputElement) return;
            if (value != undefined) this.inputElement.value = value;
            else this.inputElement.value = "";
        }
        /** @protected */ _inputElementChanged(input, oldInput) {
            if (input) this._addInputListeners(input);
            else if (oldInput) this._removeInputListeners(oldInput);
        }
        /**
       * An input event listener used to update the field value.
       * Override this method with an actual implementation.
       * @param {Event} _event
       * @protected
       * @override
       */ _onInput(event) {
            // Ignore fake input events e.g. used by clear button.
            this.__userInput = event.isTrusted;
            this.value = event.target.value;
            this.__userInput = false;
        }
        /**
       * A change event listener.
       * Override this method with an actual implementation.
       * @param {Event} _event
       * @protected
       * @override
       */ _onChange(_event) {}
        /**
       * Toggle the has-value attribute based on the value property.
       * @param {boolean} hasValue
       * @protected
       */ _toggleHasValue(hasValue) {
            this.toggleAttribute("has-value", hasValue);
        }
        /**
       * Observer called when a value property changes.
       * @param {string | undefined} newVal
       * @param {string | undefined} oldVal
       * @protected
       * @override
       */ _valueChanged(newVal, oldVal) {
            this._toggleHasValue(newVal !== "" && newVal != null);
            // Setting initial value to empty string, do nothing.
            if (newVal === "" && oldVal === undefined) return;
            // Value is set by the user, no need to sync it back to input.
            if (this.__userInput) return;
            // Setting a value programmatically, sync it to input element.
            this._forwardInputValue(newVal);
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lYzM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DelegateFocusMixin", ()=>DelegateFocusMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
var _focusMixinJs = require("@vaadin/component-base/src/focus-mixin.js");
var _tabindexMixinJs = require("@vaadin/component-base/src/tabindex-mixin.js");
const DelegateFocusMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class DelegateFocusMixinClass extends (0, _focusMixinJs.FocusMixin)((0, _tabindexMixinJs.TabindexMixin)(superclass)) {
        static get properties() {
            return {
                /**
           * Specify that this control should have input focus when the page loads.
           */ autofocus: {
                    type: Boolean
                },
                /**
           * A reference to the focusable element controlled by the mixin.
           * It can be an input, textarea, button or any element with tabindex > -1.
           *
           * Any component implementing this mixin is expected to provide it
           * by using `this._setFocusElement(input)` Polymer API.
           *
           * Toggling `tabindex` attribute on the host element propagates its value to `focusElement`.
           *
           * @protected
           * @type {!HTMLElement}
           */ focusElement: {
                    type: Object,
                    readOnly: true,
                    observer: "_focusElementChanged"
                },
                /**
           * Override the property from `TabIndexMixin`
           * to ensure the `tabindex` attribute of the focus element
           * will be restored to `0` after re-enabling the element.
           *
           * @protected
           * @override
           */ _lastTabIndex: {
                    value: 0
                }
            };
        }
        constructor(){
            super();
            this._boundOnBlur = this._onBlur.bind(this);
            this._boundOnFocus = this._onFocus.bind(this);
        }
        /** @protected */ ready() {
            super.ready();
            if (this.autofocus && !this.disabled) requestAnimationFrame(()=>{
                this.focus();
                this.setAttribute("focus-ring", "");
            });
        }
        /**
       * @protected
       * @override
       */ focus() {
            if (!this.focusElement || this.disabled) return;
            this.focusElement.focus();
            this._setFocused(true);
        }
        /**
       * @protected
       * @override
       */ blur() {
            if (!this.focusElement) return;
            this.focusElement.blur();
            this._setFocused(false);
        }
        /**
       * @protected
       * @override
       */ click() {
            if (this.focusElement && !this.disabled) this.focusElement.click();
        }
        /** @protected */ _focusElementChanged(element, oldElement) {
            if (element) {
                element.disabled = this.disabled;
                this._addFocusListeners(element);
                this.__forwardTabIndex(this.tabindex);
            } else if (oldElement) this._removeFocusListeners(oldElement);
        }
        /**
       * @param {HTMLElement} element
       * @protected
       */ _addFocusListeners(element) {
            element.addEventListener("blur", this._boundOnBlur);
            element.addEventListener("focus", this._boundOnFocus);
        }
        /**
       * @param {HTMLElement} element
       * @protected
       */ _removeFocusListeners(element) {
            element.removeEventListener("blur", this._boundOnBlur);
            element.removeEventListener("focus", this._boundOnFocus);
        }
        /**
       * Focus event does not bubble, so we dispatch it manually
       * on the host element to support adding focus listeners
       * when the focusable element is placed in light DOM.
       * @param {FocusEvent} event
       * @protected
       */ _onFocus(event) {
            event.stopPropagation();
            this.dispatchEvent(new Event("focus"));
        }
        /**
       * Blur event does not bubble, so we dispatch it manually
       * on the host element to support adding blur listeners
       * when the focusable element is placed in light DOM.
       * @param {FocusEvent} event
       * @protected
       */ _onBlur(event) {
            event.stopPropagation();
            this.dispatchEvent(new Event("blur"));
        }
        /**
       * @param {Event} event
       * @return {boolean}
       * @protected
       * @override
       */ _shouldSetFocus(event) {
            return event.target === this.focusElement;
        }
        /**
       * @param {boolean} disabled
       * @param {boolean} oldDisabled
       * @protected
       * @override
       */ _disabledChanged(disabled, oldDisabled) {
            super._disabledChanged(disabled, oldDisabled);
            if (this.focusElement) this.focusElement.disabled = disabled;
            if (disabled) this.blur();
        }
        /**
       * Override an observer from `TabindexMixin`.
       * Do not call super to remove tabindex attribute
       * from the host after it has been forwarded.
       * @param {string} tabindex
       * @protected
       * @override
       */ _tabindexChanged(tabindex) {
            this.__forwardTabIndex(tabindex);
        }
        /** @private */ __forwardTabIndex(tabindex) {
            if (tabindex !== undefined && this.focusElement) {
                this.focusElement.tabIndex = tabindex;
                // Preserve tabindex="-1" on the host element
                if (tabindex !== -1) this.tabindex = undefined;
            }
            if (this.disabled && tabindex) {
                // If tabindex attribute was changed while component was disabled
                if (tabindex !== -1) this._lastTabIndex = tabindex;
                this.tabindex = undefined;
            }
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@vaadin/component-base/src/focus-mixin.js":"kd2Af","@vaadin/component-base/src/tabindex-mixin.js":"eMVTc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tcOX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller to create and initialize slotted `<input>` element.
 */ parcelHelpers.export(exports, "InputController", ()=>InputController);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _slotControllerJs = require("@vaadin/component-base/src/slot-controller.js");
class InputController extends (0, _slotControllerJs.SlotController) {
    constructor(host1, callback){
        super(host1, "input", ()=>document.createElement("input"), (host, node)=>{
            if (host.value) node.setAttribute("value", host.value);
            if (host.type) node.setAttribute("type", host.type);
            // Ensure every instance has unique ID
            const uniqueId = InputController._uniqueInputId = 1 + InputController._uniqueInputId || 0;
            host._inputId = `${host.localName}-${uniqueId}`;
            node.id = host._inputId;
            if (typeof callback == "function") callback(node);
        });
    }
}

},{"@vaadin/component-base/src/slot-controller.js":"bAuIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAuIz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller for providing content to slot element and observing changes.
 */ parcelHelpers.export(exports, "SlotController", ()=>SlotController);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _caseMapJs = require("@polymer/polymer/lib/utils/case-map.js");
var _flattenedNodesObserverJs = require("@polymer/polymer/lib/utils/flattened-nodes-observer.js");
class SlotController extends EventTarget {
    constructor(host, slotName, slotFactory, slotInitializer){
        super();
        this.host = host;
        this.slotName = slotName;
        this.slotFactory = slotFactory;
        this.slotInitializer = slotInitializer;
        this.defaultId = SlotController.generateId(slotName, host);
    }
    /**
   * Ensure that every instance has unique ID.
   *
   * @param {string} slotName
   * @param {HTMLElement} host
   * @return {string}
   * @protected
   */ static generateId(slotName, host) {
        const prefix = slotName || "default";
        // Support dash-case slot names e.g. "error-message"
        const field = `${(0, _caseMapJs.dashToCamelCase)(prefix)}Id`;
        // Maintain the unique ID counter for a given prefix.
        this[field] = 1 + this[field] || 0;
        return `${prefix}-${host.localName}-${this[field]}`;
    }
    hostConnected() {
        if (!this.initialized) {
            let node = this.getSlotChild();
            if (!node) node = this.attachDefaultNode();
            else {
                this.node = node;
                this.initCustomNode(node);
            }
            this.initNode(node);
            // TODO: Consider making this behavior opt-in to improve performance.
            this.observe();
            this.initialized = true;
        }
    }
    /**
   * Create and attach default node using the slot factory.
   * @return {Node | undefined}
   * @protected
   */ attachDefaultNode() {
        const { host , slotName , slotFactory  } = this;
        // Check if the node was created previously and if so, reuse it.
        let node = this.defaultNode;
        // Slot factory is optional, some slots don't have default content.
        if (!node && slotFactory) {
            node = slotFactory(host);
            if (node instanceof Element) {
                if (slotName !== "") node.setAttribute("slot", slotName);
                this.node = node;
                this.defaultNode = node;
            }
        }
        if (node) host.appendChild(node);
        return node;
    }
    /**
   * Return a reference to the node managed by the controller.
   * @return {Node}
   */ getSlotChild() {
        const { slotName  } = this;
        return Array.from(this.host.childNodes).find((node)=>{
            // Either an element (any slot) or a text node (only un-named slot).
            return node.nodeType === Node.ELEMENT_NODE && node.slot === slotName || node.nodeType === Node.TEXT_NODE && node.textContent.trim() && slotName === "";
        });
    }
    /**
   * @param {Node} node
   * @protected
   */ initNode(node) {
        const { slotInitializer  } = this;
        // Don't try to bind `this` to initializer (normally it's arrow function).
        // Instead, pass the host as a first argument to access component's state.
        if (slotInitializer) slotInitializer(this.host, node);
    }
    /**
   * Override to initialize the newly added custom node.
   *
   * @param {Node} _node
   * @protected
   */ initCustomNode(_node) {}
    /**
   * Override to teardown slotted node when it's removed.
   *
   * @param {Node} _node
   * @protected
   */ teardownNode(_node) {}
    /**
   * Setup the observer to manage slot content changes.
   * @protected
   */ observe() {
        const { slotName  } = this;
        const selector = slotName === "" ? "slot:not([name])" : `slot[name=${slotName}]`;
        const slot = this.host.shadowRoot.querySelector(selector);
        this.__slotObserver = new (0, _flattenedNodesObserverJs.FlattenedNodesObserver)(slot, (info)=>{
            // TODO: support default slot with multiple nodes (e.g. confirm-dialog)
            const current = this.node;
            const newNode = info.addedNodes.find((node)=>node !== current);
            if (info.removedNodes.length) info.removedNodes.forEach((node)=>{
                this.teardownNode(node);
            });
            if (newNode) {
                // Custom node is added, remove the current one.
                if (current && current.isConnected) this.host.removeChild(current);
                this.node = newNode;
                if (newNode !== this.defaultNode) {
                    this.initCustomNode(newNode);
                    this.initNode(newNode);
                }
            }
        });
    }
}

},{"@polymer/polymer/lib/utils/case-map.js":"TAE8x","@polymer/polymer/lib/utils/flattened-nodes-observer.js":"6QMDE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6W2eY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LabelMixin", ()=>LabelMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
var _controllerMixinJs = require("@vaadin/component-base/src/controller-mixin.js");
var _labelControllerJs = require("./label-controller.js");
const LabelMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class LabelMixinClass extends (0, _controllerMixinJs.ControllerMixin)(superclass) {
        static get properties() {
            return {
                /**
           * The label text for the input node.
           * When no light dom defined via [slot=label], this value will be used.
           */ label: {
                    type: String,
                    observer: "_labelChanged"
                }
            };
        }
        /** @protected */ get _labelId() {
            return this._labelController.labelId;
        }
        /** @protected */ get _labelNode() {
            return this._labelController.node;
        }
        constructor(){
            super();
            this._labelController = new (0, _labelControllerJs.LabelController)(this);
            this.addController(this._labelController);
        }
        /** @protected */ _labelChanged(label) {
            this._labelController.setLabel(label);
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@vaadin/component-base/src/controller-mixin.js":"57izu","./label-controller.js":"7N2VX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7N2VX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller to manage the label element.
 */ parcelHelpers.export(exports, "LabelController", ()=>LabelController);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _slotControllerJs = require("@vaadin/component-base/src/slot-controller.js");
class LabelController extends (0, _slotControllerJs.SlotController) {
    constructor(host){
        super(host, "label", ()=>document.createElement("label"), (_host, node)=>{
            // Set ID attribute or use the existing one.
            this.__updateLabelId(node);
            // Set text content for the default label.
            this.__updateDefaultLabel(this.label);
            this.__observeLabel(node);
        });
    }
    /**
   * @return {string}
   */ get labelId() {
        return this.node.id;
    }
    /**
   * Override to initialize the newly added custom label.
   *
   * @param {Node} labelNode
   * @protected
   * @override
   */ initCustomNode(labelNode) {
        this.__updateLabelId(labelNode);
        const hasLabel = this.__hasLabel(labelNode);
        this.__toggleHasLabel(hasLabel);
    }
    /**
   * Override to cleanup label node when it's removed.
   *
   * @param {Node} node
   * @protected
   * @override
   */ teardownNode(node) {
        if (this.__labelObserver) this.__labelObserver.disconnect();
        let labelNode = this.getSlotChild();
        // If custom label was removed, restore the default one.
        if (!labelNode && node !== this.defaultNode) {
            labelNode = this.attachDefaultNode();
            // Run initializer to update default label and ID.
            this.initNode(labelNode);
        }
        const hasLabel = this.__hasLabel(labelNode);
        this.__toggleHasLabel(hasLabel);
    }
    /**
   * Set label based on corresponding host property.
   *
   * @param {string} label
   */ setLabel(label) {
        this.label = label;
        this.__updateDefaultLabel(label);
    }
    /**
   * @param {HTMLElement} labelNode
   * @return {boolean}
   * @private
   */ __hasLabel(labelNode) {
        if (!labelNode) return false;
        return labelNode.children.length > 0 || this.__isNotEmpty(labelNode.textContent);
    }
    /**
   * @param {string} label
   * @private
   */ __isNotEmpty(label) {
        return Boolean(label && label.trim() !== "");
    }
    /**
   * @param {HTMLElement} labelNode
   * @private
   */ __observeLabel(labelNode) {
        this.__labelObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                const target = mutation.target;
                // Ensure the mutation target is the currently connected label
                // to ignore async mutations dispatched for removed element.
                const isLabelMutation = target === this.node;
                if (mutation.type === "attributes") // We use attributeFilter to only observe ID mutation,
                // no need to check for attribute name separately.
                {
                    if (isLabelMutation && target.id !== this.defaultId) this.__updateLabelId(target);
                } else if (isLabelMutation || target.parentElement === this.node) {
                    // Update has-label when textContent changes
                    const hasLabel = this.__hasLabel(this.node);
                    this.__toggleHasLabel(hasLabel);
                }
            });
        });
        // Observe changes to label ID attribute, text content and children.
        this.__labelObserver.observe(labelNode, {
            attributes: true,
            attributeFilter: [
                "id"
            ],
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    /**
   * @param {boolean} hasLabel
   * @private
   */ __toggleHasLabel(hasLabel) {
        this.host.toggleAttribute("has-label", hasLabel);
        // Make it possible for other mixins to observe change
        this.dispatchEvent(new CustomEvent("label-changed", {
            detail: {
                hasLabel,
                node: this.node
            }
        }));
    }
    /**
   * @param {string} label
   * @private
   */ __updateDefaultLabel(label) {
        if (this.defaultNode) {
            this.defaultNode.textContent = label;
            // Update has-label if default label is used
            if (this.defaultNode === this.node) {
                const hasLabel = this.__isNotEmpty(label);
                this.__toggleHasLabel(hasLabel);
            }
        }
    }
    /**
   * @param {HTMLElement} labelNode
   * @private
   */ __updateLabelId(labelNode) {
        if (!labelNode.id) labelNode.id = this.defaultId;
    }
}

},{"@vaadin/component-base/src/slot-controller.js":"bAuIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4s3oE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * A controller for linking a `<label>` element with an `<input>` element.
 */ parcelHelpers.export(exports, "LabelledInputController", ()=>LabelledInputController);
class LabelledInputController {
    constructor(input, labelController){
        this.input = input;
        this.__preventDuplicateLabelClick = this.__preventDuplicateLabelClick.bind(this);
        labelController.addEventListener("label-changed", (event)=>{
            this.__initLabel(event.detail.node);
        });
        // Initialize the default label element
        this.__initLabel(labelController.node);
    }
    /**
   * @param {HTMLElement} label
   * @private
   */ __initLabel(label) {
        if (label) {
            label.addEventListener("click", this.__preventDuplicateLabelClick);
            if (this.input) label.setAttribute("for", this.input.id);
        }
    }
    /**
   * The native platform fires an event for both the click on the label, and also
   * the subsequent click on the native input element caused by label click.
   * This results in two click events arriving at the host, but we only want one.
   * This method prevents the duplicate click and ensures the correct isTrusted event
   * with the correct event.target arrives at the host.
   * @private
   */ __preventDuplicateLabelClick() {
        const inputClickHandler = (e)=>{
            e.stopImmediatePropagation();
            this.input.removeEventListener("click", inputClickHandler);
        };
        this.input.addEventListener("click", inputClickHandler);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"idMIr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * A controller to copy the content from a source slot to a target element.
 */ parcelHelpers.export(exports, "SlotTargetController", ()=>SlotTargetController);
class SlotTargetController {
    constructor(sourceSlot, targetFactory, callback){
        /**
     * The source `<slot>` element to copy nodes from.
     */ this.sourceSlot = sourceSlot;
        /**
     * Function used to get a reference to slot target.
     */ this.targetFactory = targetFactory;
        /**
     * Function called after copying nodes to target.
     */ this.copyCallback = callback;
        if (sourceSlot) sourceSlot.addEventListener("slotchange", ()=>{
            // Copy in progress, ignore this event.
            if (this.__copying) this.__copying = false;
            else this.__checkAndCopyNodesToSlotTarget();
        });
    }
    hostConnected() {
        this.__sourceSlotObserver = new MutationObserver(()=>this.__checkAndCopyNodesToSlotTarget());
        // Ensure the content is up to date when host is connected
        // to handle e.g. mutating text content while disconnected.
        this.__checkAndCopyNodesToSlotTarget();
    }
    /**
   * Copies every node from the source slot to the target element
   * once the source slot' content is changed.
   *
   * @private
   */ __checkAndCopyNodesToSlotTarget() {
        this.__sourceSlotObserver.disconnect();
        // Ensure slot target element is up to date.
        const slotTarget = this.targetFactory();
        if (!slotTarget) return;
        // Remove any existing clones from the slot target
        if (this.__slotTargetClones) {
            this.__slotTargetClones.forEach((node)=>{
                if (node.parentElement === slotTarget) slotTarget.removeChild(node);
            });
            delete this.__slotTargetClones;
        }
        // Exclude whitespace text nodes
        const nodes = this.sourceSlot.assignedNodes({
            flatten: true
        }).filter((node)=>!(node.nodeType == Node.TEXT_NODE && node.textContent.trim() === ""));
        if (nodes.length > 0) {
            slotTarget.innerHTML = "";
            // Ignore next slotchange
            this.__copying = true;
            this.__copyNodesToSlotTarget(nodes, slotTarget);
        }
    }
    /**
   * Copies the nodes to the target element.
   *
   * @param {!Array<!Node>} nodes
   * @param {HTMLElement} slotTarget
   * @private
   */ __copyNodesToSlotTarget(nodes, slotTarget) {
        this.__slotTargetClones = this.__slotTargetClones || [];
        nodes.forEach((node)=>{
            // Clone the nodes and append the clones to the target
            const clone = node.cloneNode(true);
            this.__slotTargetClones.push(clone);
            slotTarget.appendChild(clone);
            // Observe all changes to the source node to have the clones updated
            this.__sourceSlotObserver.observe(node, {
                attributes: true,
                childList: true,
                subtree: true,
                characterData: true
            });
        });
        // Run callback e.g. to show a deprecation warning
        if (typeof this.copyCallback === "function") this.copyCallback(nodes);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k66Xg":[function(require,module,exports) {
var _colorJs = require("@vaadin/vaadin-lumo-styles/color.js");
var _fontIconsJs = require("@vaadin/vaadin-lumo-styles/font-icons.js");
var _sizingJs = require("@vaadin/vaadin-lumo-styles/sizing.js");
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _styleJs = require("@vaadin/vaadin-lumo-styles/style.js");
var _typographyJs = require("@vaadin/vaadin-lumo-styles/typography.js");
var _vaadinCheckboxJs = require("@vaadin/checkbox/theme/lumo/vaadin-checkbox.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-grid", (0, _vaadinThemableMixinJs.css)`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--lumo-base-color);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: default;
      padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='cell']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    [ios] [part~='row'][dragstart] [part~='cell'] {
      background: var(--lumo-primary-color-50pct);
    }

    #scroller:not([ios]) [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content),
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] ::slotted(vaadin-grid-cell-content) {
      font-weight: 400;
    }

    [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    [part='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='left']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='row']:not([odd]) [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
    }

    :host([theme~='compact']) [part='row'][first] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='right']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }
  `, {
    moduleId: "lumo-grid"
});
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-checkbox", (0, _vaadinThemableMixinJs.css)`
    :host(.vaadin-grid-select-all-checkbox) {
      font-size: var(--lumo-font-size-m);
    }
  `, {
    moduleId: "vaadin-grid-select-all-checkbox-lumo"
});

},{"@vaadin/vaadin-lumo-styles/color.js":"2or7a","@vaadin/vaadin-lumo-styles/font-icons.js":"ecMY2","@vaadin/vaadin-lumo-styles/sizing.js":"b781B","@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-lumo-styles/style.js":"hYu1M","@vaadin/vaadin-lumo-styles/typography.js":"5zfSv","@vaadin/checkbox/theme/lumo/vaadin-checkbox.js":"coN1z","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"3huPn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Grid", ()=>Grid);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinGridColumnJs = require("./vaadin-grid-column.js");
var _vaadinGridStylesJs = require("./vaadin-grid-styles.js");
var _renderStatusJs = require("@polymer/polymer/lib/utils/render-status.js");
var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _browserUtilsJs = require("@vaadin/component-base/src/browser-utils.js");
var _elementMixinJs = require("@vaadin/component-base/src/element-mixin.js");
var _tabindexMixinJs = require("@vaadin/component-base/src/tabindex-mixin.js");
var _templatesJs = require("@vaadin/component-base/src/templates.js");
var _virtualizerJs = require("@vaadin/component-base/src/virtualizer.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
var _vaadinGridA11YMixinJs = require("./vaadin-grid-a11y-mixin.js");
var _vaadinGridActiveItemMixinJs = require("./vaadin-grid-active-item-mixin.js");
var _vaadinGridArrayDataProviderMixinJs = require("./vaadin-grid-array-data-provider-mixin.js");
var _vaadinGridColumnReorderingMixinJs = require("./vaadin-grid-column-reordering-mixin.js");
var _vaadinGridColumnResizingMixinJs = require("./vaadin-grid-column-resizing-mixin.js");
var _vaadinGridDataProviderMixinJs = require("./vaadin-grid-data-provider-mixin.js");
var _vaadinGridDragAndDropMixinJs = require("./vaadin-grid-drag-and-drop-mixin.js");
var _vaadinGridDynamicColumnsMixinJs = require("./vaadin-grid-dynamic-columns-mixin.js");
var _vaadinGridEventContextMixinJs = require("./vaadin-grid-event-context-mixin.js");
var _vaadinGridFilterMixinJs = require("./vaadin-grid-filter-mixin.js");
var _vaadinGridKeyboardNavigationMixinJs = require("./vaadin-grid-keyboard-navigation-mixin.js");
var _vaadinGridRowDetailsMixinJs = require("./vaadin-grid-row-details-mixin.js");
var _vaadinGridScrollMixinJs = require("./vaadin-grid-scroll-mixin.js");
var _vaadinGridSelectionMixinJs = require("./vaadin-grid-selection-mixin.js");
var _vaadinGridSortMixinJs = require("./vaadin-grid-sort-mixin.js");
var _vaadinGridStylingMixinJs = require("./vaadin-grid-styling-mixin.js");
/**
 * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
 * the grid can be populated by using renderer callback function.
 *
 * ### Quick Start
 *
 * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
 *
 * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
 * shorthand properties for the columns to define what gets rendered in the cells of the column.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
 *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
 *   <vaadin-grid-column path="email"></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 *
 * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
 * `renderer` and `footerRenderer`.
 *
 * Each of those renderer functions provides `root`, `column`, `model` arguments when applicable.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `column`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * Renderers are called on initialization of new column cells and each time the
 * related row model is updated. DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * #### Example:
 * ```html
 * <vaadin-grid>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 *   <vaadin-grid-column></vaadin-grid-column>
 * </vaadin-grid>
 * ```
 * ```js
 * const grid = document.querySelector('vaadin-grid');
 * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
 *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
 *
 * const columns = grid.querySelectorAll('vaadin-grid-column');
 *
 * columns[0].headerRenderer = function(root) {
 *   root.textContent = 'Name';
 * };
 * columns[0].renderer = function(root, column, model) {
 *   root.textContent = model.item.name;
 * };
 *
 * columns[1].headerRenderer = function(root) {
 *   root.textContent = 'Surname';
 * };
 * columns[1].renderer = function(root, column, model) {
 *   root.textContent = model.item.surname;
 * };
 *
 * columns[2].headerRenderer = function(root) {
 *   root.textContent = 'Role';
 * };
 * columns[2].renderer = function(root, column, model) {
 *   root.textContent = model.item.role;
 * };
 * ```
 *
 * The following properties are available in the `model` argument:
 *
 * Property name | Type | Description
 * --------------|------|------------
 * `index`| Number | The index of the item.
 * `item` | String or Object | The item.
 * `level` | Number | Number of the item's tree sublevel, starts from 0.
 * `expanded` | Boolean | True if the item's tree sublevel is expanded.
 * `selected` | Boolean | True if the item is selected.
 * `detailsOpened` | Boolean | True if the item's row details are open.
 *
 * The following helper elements can be used for further customization:
 * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
 * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
 * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
 * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
 * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
 *
 * __Note that the helper elements must be explicitly imported.__
 * If you want to import everything at once you can use the `all-imports.html` bundle.
 *
 * ### Lazy Loading with Function Data Provider
 *
 * In addition to assigning an array to the items property, you can alternatively
 * provide the `<vaadin-grid>` data through the
 * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
 * The `<vaadin-grid>` calls this function lazily, only when it needs more data
 * to be displayed.
 *
 * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
 * the API reference below for the detailed data provider arguments description,
 * and the “Assigning Data” page in the demos.
 *
 * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
 *
 * __Also, note that when using function data providers, the total number of items
 * needs to be set manually. The total number of items can be returned
 * in the second argument of the data provider callback:__
 *
 * ```javascript
 * grid.dataProvider = ({page, pageSize}, callback) => {
 *   // page: the requested page index
 *   // pageSize: number of items on one page
 *   const url = `https://api.example/data?page=${page}&per_page=${pageSize}`;
 *
 *   fetch(url)
 *     .then((res) => res.json())
 *     .then(({ employees, totalSize }) => {
 *       callback(employees, totalSize);
 *     });
 * };
 * ```
 *
 * __Alternatively, you can use the `size` property to set the total number of items:__
 *
 * ```javascript
 * grid.size = 200; // The total number of items
 * grid.dataProvider = ({page, pageSize}, callback) => {
 *   const url = `https://api.example/data?page=${page}&per_page=${pageSize}`;
 *
 *   fetch(url)
 *     .then((res) => res.json())
 *     .then((resJson) => callback(resJson.employees));
 * };
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `row` | Row in the internal table
 * `cell` | Cell in the internal table
 * `header-cell` | Header cell in the internal table
 * `body-cell` | Body cell in the internal table
 * `footer-cell` | Footer cell in the internal table
 * `details-cell` | Row details cell in the internal table
 * `resize-handle` | Handle for resizing the columns
 * `reorder-ghost` | Ghost element of the header cell being dragged
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `loading` | Set when the grid is loading data from data provider | :host
 * `interacting` | Keyboard navigation in interaction mode | :host
 * `navigating` | Keyboard navigation in navigation mode | :host
 * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
 * `reordering` | Set when the grid's columns are being reordered | :host
 * `dragover` | Set when the grid (not a specific row) is dragged over | :host
 * `dragging-rows` : Set when grid rows are dragged  | :host
 * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
 * `frozen` | Frozen cell | cell
 * `last-frozen` | Last frozen cell | cell
 * `first-column` | First visible cell on a row | cell
 * `last-column` | Last visible cell on a row | cell
 * `selected` | Selected row | row
 * `expanded` | Expanded row | row
 * `details-opened` | Row with details open | row
 * `loading` | Row that is waiting for data from data provider | row
 * `odd` | Odd row | row
 * `first` | The first body row | row
 * `last` | The last body row | row
 * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
 * `dragover` | Set when the row is dragged over | row
 * `drag-disabled` | Set to a row that isn't available for dragging | row
 * `drop-disabled` | Set to a row that can't be dropped on top of | row
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} active-item-changed - Fired when the `activeItem` property changes.
 * @fires {CustomEvent} cell-activate - Fired when the cell is activated with click or keyboard.
 * @fires {CustomEvent} cell-focus - Fired when a cell is focused with click or keyboard navigation.
 * @fires {CustomEvent} column-reorder - Fired when the columns in the grid are reordered.
 * @fires {CustomEvent} column-resize - Fired when the grid column resize is finished.
 * @fires {CustomEvent} expanded-items-changed - Fired when the `expandedItems` property changes.
 * @fires {CustomEvent} grid-dragstart - Fired when starting to drag grid rows.
 * @fires {CustomEvent} grid-dragend - Fired when the dragging of the rows ends.
 * @fires {CustomEvent} grid-drop - Fired when a drop occurs on top of the grid.
 * @fires {CustomEvent} loading-changed - Fired when the `loading` property changes.
 * @fires {CustomEvent} selected-items-changed - Fired when the `selectedItems` property changes.
 *
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes A11yMixin
 * @mixes ActiveItemMixin
 * @mixes ArrayDataProviderMixin
 * @mixes ColumnResizingMixin
 * @mixes DataProviderMixin
 * @mixes DynamicColumnsMixin
 * @mixes FilterMixin
 * @mixes RowDetailsMixin
 * @mixes ScrollMixin
 * @mixes SelectionMixin
 * @mixes SortMixin
 * @mixes KeyboardNavigationMixin
 * @mixes ColumnReorderingMixin
 * @mixes EventContextMixin
 * @mixes StylingMixin
 * @mixes DragAndDropMixin
 */ class Grid extends (0, _elementMixinJs.ElementMixin)((0, _vaadinThemableMixinJs.ThemableMixin)((0, _vaadinGridDataProviderMixinJs.DataProviderMixin)((0, _vaadinGridArrayDataProviderMixinJs.ArrayDataProviderMixin)((0, _vaadinGridDynamicColumnsMixinJs.DynamicColumnsMixin)((0, _vaadinGridActiveItemMixinJs.ActiveItemMixin)((0, _vaadinGridScrollMixinJs.ScrollMixin)((0, _vaadinGridSelectionMixinJs.SelectionMixin)((0, _vaadinGridSortMixinJs.SortMixin)((0, _vaadinGridRowDetailsMixinJs.RowDetailsMixin)((0, _vaadinGridKeyboardNavigationMixinJs.KeyboardNavigationMixin)((0, _vaadinGridA11YMixinJs.A11yMixin)((0, _vaadinGridFilterMixinJs.FilterMixin)((0, _vaadinGridColumnReorderingMixinJs.ColumnReorderingMixin)((0, _vaadinGridColumnResizingMixinJs.ColumnResizingMixin)((0, _vaadinGridEventContextMixinJs.EventContextMixin)((0, _vaadinGridDragAndDropMixinJs.DragAndDropMixin)((0, _vaadinGridStylingMixinJs.StylingMixin)((0, _tabindexMixinJs.TabindexMixin)((0, _polymerElementJs.PolymerElement)))))))))))))))))))) {
    static get template() {
        return (0, _polymerElementJs.html)`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <div id="focusexit" tabindex="0"></div>
    `;
    }
    static get is() {
        return "vaadin-grid";
    }
    static get observers() {
        return [
            "_columnTreeChanged(_columnTree, _columnTree.*)",
            "_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)", 
        ];
    }
    static get properties() {
        return {
            /** @private */ _safari: {
                type: Boolean,
                value: (0, _browserUtilsJs.isSafari)
            },
            /** @private */ _ios: {
                type: Boolean,
                value: (0, _browserUtilsJs.isIOS)
            },
            /** @private */ _firefox: {
                type: Boolean,
                value: (0, _browserUtilsJs.isFirefox)
            },
            /** @private */ _android: {
                type: Boolean,
                value: (0, _browserUtilsJs.isAndroid)
            },
            /** @private */ _touchDevice: {
                type: Boolean,
                value: (0, _browserUtilsJs.isTouch)
            },
            /**
       * If true, the grid's height is defined by its rows.
       *
       * Effectively, this disables the grid's virtual scrolling so that all the rows are rendered in the DOM at once.
       * If the grid has a large number of items, using the feature is discouraged to avoid performance issues.
       * @attr {boolean} all-rows-visible
       * @type {boolean}
       */ allRowsVisible: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            /** @private */ _recalculateColumnWidthOnceLoadingFinished: {
                type: Boolean,
                value: true
            },
            /** @private */ isAttached: {
                value: false
            },
            /**
       * An internal property that is mainly used by `vaadin-template-renderer`
       * to identify grid elements.
       *
       * @private
       */ __gridElement: {
                type: Boolean,
                value: true
            }
        };
    }
    constructor(){
        super();
        this.addEventListener("animationend", this._onAnimationEnd);
    }
    /** @protected */ connectedCallback() {
        super.connectedCallback();
        this.isAttached = true;
        this.recalculateColumnWidths();
    }
    /** @protected */ disconnectedCallback() {
        super.disconnectedCallback();
        this.isAttached = false;
    }
    /** @private */ __getFirstVisibleItem() {
        return this._getVisibleRows().find((row)=>this._isInViewport(row));
    }
    /** @private */ get _firstVisibleIndex() {
        const firstVisibleItem = this.__getFirstVisibleItem();
        return firstVisibleItem ? firstVisibleItem.index : undefined;
    }
    /** @private */ __getLastVisibleItem() {
        return this._getVisibleRows().reverse().find((row)=>this._isInViewport(row));
    }
    /** @private */ get _lastVisibleIndex() {
        const lastVisibleItem = this.__getLastVisibleItem();
        return lastVisibleItem ? lastVisibleItem.index : undefined;
    }
    /** @private */ _isInViewport(item) {
        const scrollTargetRect = this.$.table.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const headerHeight = this.$.header.getBoundingClientRect().height;
        const footerHeight = this.$.footer.getBoundingClientRect().height;
        return itemRect.bottom > scrollTargetRect.top + headerHeight && itemRect.top < scrollTargetRect.bottom - footerHeight;
    }
    /** @private */ _getVisibleRows() {
        return Array.from(this.$.items.children).filter((item)=>!item.hidden).sort((a, b)=>a.index - b.index);
    }
    /** @protected */ ready() {
        super.ready();
        this.__virtualizer = new (0, _virtualizerJs.Virtualizer)({
            createElements: this._createScrollerRows.bind(this),
            updateElement: this._updateScrollerItem.bind(this),
            scrollContainer: this.$.items,
            scrollTarget: this.$.table,
            reorderElements: true
        });
        new ResizeObserver(()=>setTimeout(()=>this.__updateFooterPositioning())).observe(this.$.footer);
        (0, _templatesJs.processTemplates)(this);
    }
    /**
   * @param {string} name
   * @param {?string} oldValue
   * @param {?string} newValue
   * @protected
   */ attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        if (name === "dir") this.__isRTL = newValue === "rtl";
    }
    /** @private */ __getBodyCellCoordinates(cell) {
        if (this.$.items.contains(cell) && cell.localName === "td") return {
            item: cell.parentElement._item,
            column: cell._column
        };
    }
    /** @private */ __focusBodyCell({ item , column  }) {
        const row1 = this._getVisibleRows().find((row)=>row._item === item);
        const cell1 = row1 && [
            ...row1.children
        ].find((cell)=>cell._column === column);
        cell1 && cell1.focus();
    }
    /** @private */ _effectiveSizeChanged(effectiveSize, virtualizer, hasData, columnTree) {
        if (virtualizer && hasData && columnTree) {
            // Changing the virtualizer size may result in the row with focus getting hidden
            const cell = this.shadowRoot.activeElement;
            const cellCoordinates = this.__getBodyCellCoordinates(cell);
            virtualizer.size = effectiveSize;
            virtualizer.update();
            virtualizer.flush();
            // If the focused cell's parent row got hidden by the size change, focus the corresponding new cell
            cellCoordinates && cell.parentElement.hidden && this.__focusBodyCell(cellCoordinates);
            // Make sure the body has a tabbable element
            this._resetKeyboardNavigation();
        }
    }
    /** @private */ __hasRowsWithClientHeight() {
        return !!Array.from(this.$.items.children).filter((row)=>row.clientHeight).length;
    }
    /** @protected */ __itemsReceived() {
        if (this._recalculateColumnWidthOnceLoadingFinished && !this._cache.isLoading() && this.__hasRowsWithClientHeight()) {
            this._recalculateColumnWidthOnceLoadingFinished = false;
            this.recalculateColumnWidths();
        }
    }
    /** @private */ __getIntrinsicWidth(col) {
        const initialWidth = col.width;
        const initialFlexGrow = col.flexGrow;
        col.width = "auto";
        col.flexGrow = 0;
        // Note: _allCells only contains cells which are currently rendered in DOM
        const width1 = col._allCells.filter((cell)=>{
            // Exclude body cells that are out of the visible viewport
            return !this.$.items.contains(cell) || this._isInViewport(cell.parentElement);
        }).reduce((width, cell)=>{
            // Add 1px buffer to the offset width to avoid too narrow columns (sub-pixel rendering)
            return Math.max(width, cell.offsetWidth + 1);
        }, 0);
        col.flexGrow = initialFlexGrow;
        col.width = initialWidth;
        return width1;
    }
    /** @private */ __getDistributedWidth(col1, innerColumn) {
        if (col1 == null || col1 === this) return 0;
        const columnWidth = Math.max(this.__getIntrinsicWidth(col1), this.__getDistributedWidth(col1.parentElement, col1));
        // we're processing a regular grid-column and not a grid-column-group
        if (!innerColumn) return columnWidth;
        // At the end, the width of each vaadin-grid-column-group is determined by the sum of the width of its children.
        // Here we determine how much space the vaadin-grid-column-group actually needs to render properly and then we distribute that space
        // to its children, so when we actually do the summation it will be rendered properly.
        // Check out vaadin-grid-column-group:_updateFlexAndWidth
        const columnGroup = col1;
        const columnGroupWidth = columnWidth;
        const sumOfWidthOfAllChildColumns = columnGroup._visibleChildColumns.map((col)=>this.__getIntrinsicWidth(col)).reduce((sum, curr)=>sum + curr, 0);
        const extraNecessarySpaceForGridColumnGroup = Math.max(0, columnGroupWidth - sumOfWidthOfAllChildColumns);
        // The distribution of the extra necessary space is done according to the intrinsic width of each child column.
        // Lets say we need 100 pixels of extra space for the grid-column-group to render properly
        // it has two grid-column children, |100px|300px| in total 400px
        // the first column gets 25px of the additional space (100/400)*100 = 25
        // the second column gets the 75px of the additional space (300/400)*100 = 75
        const proportionOfExtraSpace = this.__getIntrinsicWidth(innerColumn) / sumOfWidthOfAllChildColumns;
        const shareOfInnerColumnFromNecessaryExtraSpace = proportionOfExtraSpace * extraNecessarySpaceForGridColumnGroup;
        return this.__getIntrinsicWidth(innerColumn) + shareOfInnerColumnFromNecessaryExtraSpace;
    }
    /**
   * @param {!Array<!GridColumn>} cols the columns to auto size based on their content width
   * @private
   */ _recalculateColumnWidths(cols) {
        // Flush to make sure DOM is up-to-date when measuring the column widths
        this.__virtualizer.flush();
        cols.forEach((col)=>{
            col.width = `${this.__getDistributedWidth(col)}px`;
        });
    }
    /**
   * Updates the `width` of all columns which have `autoWidth` set to `true`.
   */ recalculateColumnWidths() {
        if (!this._columnTree) return; // No columns
        if (this._cache.isLoading()) this._recalculateColumnWidthOnceLoadingFinished = true;
        else {
            const cols = this._getColumns().filter((col)=>!col.hidden && col.autoWidth);
            this._recalculateColumnWidths(cols);
        }
    }
    /** @private */ _createScrollerRows(count) {
        const rows = [];
        for(let i = 0; i < count; i++){
            const row = document.createElement("tr");
            row.setAttribute("part", "row");
            row.setAttribute("role", "row");
            row.setAttribute("tabindex", "-1");
            if (this._columnTree) this._updateRow(row, this._columnTree[this._columnTree.length - 1], "body", false, true);
            rows.push(row);
        }
        if (this._columnTree) this._columnTree[this._columnTree.length - 1].forEach((c)=>c.isConnected && c.notifyPath && c.notifyPath("_cells.*", c._cells));
        (0, _renderStatusJs.beforeNextRender)(this, ()=>{
            this._updateFirstAndLastColumn();
            this._resetKeyboardNavigation();
            this._afterScroll();
            this.__itemsReceived();
        });
        return rows;
    }
    /** @private */ _createCell(tagName) {
        const contentId = this._contentIndex = this._contentIndex + 1 || 0;
        const slotName = "vaadin-grid-cell-content-" + contentId;
        const cellContent = document.createElement("vaadin-grid-cell-content");
        cellContent.setAttribute("slot", slotName);
        const cell = document.createElement(tagName);
        cell.id = slotName.replace("-content-", "-");
        cell.setAttribute("tabindex", "-1");
        cell.setAttribute("role", tagName === "td" ? "gridcell" : "columnheader");
        const slot = document.createElement("slot");
        slot.setAttribute("name", slotName);
        cell.appendChild(slot);
        cell._content = cellContent;
        // With native Shadow DOM, mousedown on slotted element does not focus
        // focusable slot wrapper, that is why cells are not focused with
        // mousedown. Workaround: listen for mousedown and focus manually.
        cellContent.addEventListener("mousedown", ()=>{
            if (0, _browserUtilsJs.isChrome) {
                // Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
                const mouseUpListener = (event)=>{
                    // If focus is on element within the cell content — respect it, do not change
                    const contentContainsFocusedElement = cellContent.contains(this.getRootNode().activeElement);
                    // Only focus if mouse is released on cell content itself
                    const mouseUpWithinCell = event.composedPath().includes(cellContent);
                    if (!contentContainsFocusedElement && mouseUpWithinCell) cell.focus();
                    document.removeEventListener("mouseup", mouseUpListener, true);
                };
                document.addEventListener("mouseup", mouseUpListener, true);
            } else // Focus on mouseup, on the other hand, removes selection on Safari.
            // Watch out sync focus removal issue, only async focus works here.
            setTimeout(()=>{
                if (!cellContent.contains(this.getRootNode().activeElement)) cell.focus();
            });
        });
        return cell;
    }
    /**
   * @param {!HTMLTableRowElement} row
   * @param {!Array<!GridColumn>} columns
   * @param {?string} section
   * @param {boolean} isColumnRow
   * @param {boolean} noNotify
   * @protected
   */ // eslint-disable-next-line max-params
    _updateRow(row, columns, section, isColumnRow, noNotify) {
        section = section || "body";
        const contentsFragment = document.createDocumentFragment();
        Array.from(row.children).forEach((cell)=>cell._vacant = true);
        row.innerHTML = "";
        columns.filter((column)=>!column.hidden).forEach((column, index, cols)=>{
            let cell2;
            if (section === "body") {
                // Body
                column._cells = column._cells || [];
                cell2 = column._cells.filter((cell)=>cell._vacant)[0];
                if (!cell2) {
                    cell2 = this._createCell("td");
                    column._cells.push(cell2);
                }
                cell2.setAttribute("part", "cell body-cell");
                row.appendChild(cell2);
                if (index === cols.length - 1 && this.rowDetailsRenderer) {
                    // Add details cell as last cell to body rows
                    this._detailsCells = this._detailsCells || [];
                    const detailsCell = this._detailsCells.filter((cell)=>cell._vacant)[0] || this._createCell("td");
                    if (this._detailsCells.indexOf(detailsCell) === -1) this._detailsCells.push(detailsCell);
                    if (!detailsCell._content.parentElement) contentsFragment.appendChild(detailsCell._content);
                    this._configureDetailsCell(detailsCell);
                    row.appendChild(detailsCell);
                    this._a11ySetRowDetailsCell(row, detailsCell);
                    detailsCell._vacant = false;
                }
                if (column.notifyPath && !noNotify) column.notifyPath("_cells.*", column._cells);
            } else {
                // Header & footer
                const tagName = section === "header" ? "th" : "td";
                if (isColumnRow || column.localName === "vaadin-grid-column-group") {
                    cell2 = column[`_${section}Cell`] || this._createCell(tagName);
                    cell2._column = column;
                    row.appendChild(cell2);
                    column[`_${section}Cell`] = cell2;
                } else {
                    column._emptyCells = column._emptyCells || [];
                    cell2 = column._emptyCells.filter((cell)=>cell._vacant)[0] || this._createCell(tagName);
                    cell2._column = column;
                    row.appendChild(cell2);
                    if (column._emptyCells.indexOf(cell2) === -1) column._emptyCells.push(cell2);
                }
                cell2.setAttribute("part", `cell ${section}-cell`);
                this.__updateHeaderFooterRowVisibility(row);
            }
            if (!cell2._content.parentElement) contentsFragment.appendChild(cell2._content);
            cell2._vacant = false;
            cell2._column = column;
        });
        // Might be empty if only cache was used
        this.appendChild(contentsFragment);
        this._frozenCellsChanged();
        this._updateFirstAndLastColumnForRow(row);
    }
    /**
   * @param {HTMLTableRowElement} row
   * @protected
   */ __updateHeaderFooterRowVisibility(row) {
        if (!row) return;
        const visibleRowCells = Array.from(row.children).filter((cell)=>{
            const column = cell._column;
            if (column._emptyCells && column._emptyCells.indexOf(cell) > -1) // The cell is an "empty cell"  -> doesn't block hiding the row
            return false;
            if (row.parentElement === this.$.header) {
                if (column.headerRenderer) // The cell is the header cell of a column that has a header renderer
                // -> row should be visible
                return true;
                if (column.header === null) // The column header is explicilty set to null -> doesn't block hiding the row
                return false;
                if (column.path || column.header !== undefined) // The column has an explicit non-null header or a path that generates a header
                // -> row should be visible
                return true;
            } else if (column.footerRenderer) // The cell is the footer cell of a column that has a footer renderer
            // -> row should be visible
            return true;
            return false;
        });
        if (row.hidden !== !visibleRowCells.length) row.hidden = !visibleRowCells.length;
        // Make sure the section has a tabbable element
        this._resetKeyboardNavigation();
    }
    /** @private */ _updateScrollerItem(row, index) {
        this._preventScrollerRotatingCellFocus(row, index);
        if (!this._columnTree) return;
        row.toggleAttribute("first", index === 0);
        row.toggleAttribute("last", index === this._effectiveSize - 1);
        row.toggleAttribute("odd", index % 2);
        this._a11yUpdateRowRowindex(row, index);
        this._getItem(index, row);
    }
    /** @private */ _columnTreeChanged(columnTree) {
        this._renderColumnTree(columnTree);
        this.recalculateColumnWidths();
    }
    /**
   * @param {!Array<!GridColumn>} columnTree
   * @protected
   */ _renderColumnTree(columnTree) {
        Array.from(this.$.items.children).forEach((row)=>this._updateRow(row, columnTree[columnTree.length - 1], null, false, true));
        while(this.$.header.children.length < columnTree.length){
            const headerRow = document.createElement("tr");
            headerRow.setAttribute("part", "row");
            headerRow.setAttribute("role", "row");
            headerRow.setAttribute("tabindex", "-1");
            this.$.header.appendChild(headerRow);
            const footerRow = document.createElement("tr");
            footerRow.setAttribute("part", "row");
            footerRow.setAttribute("role", "row");
            footerRow.setAttribute("tabindex", "-1");
            this.$.footer.appendChild(footerRow);
        }
        while(this.$.header.children.length > columnTree.length){
            this.$.header.removeChild(this.$.header.firstElementChild);
            this.$.footer.removeChild(this.$.footer.firstElementChild);
        }
        Array.from(this.$.header.children).forEach((headerRow, index)=>this._updateRow(headerRow, columnTree[index], "header", index === columnTree.length - 1));
        Array.from(this.$.footer.children).forEach((footerRow, index)=>this._updateRow(footerRow, columnTree[columnTree.length - 1 - index], "footer", index === 0));
        // Sizer rows
        this._updateRow(this.$.sizer, columnTree[columnTree.length - 1]);
        this._resizeHandler();
        this._frozenCellsChanged();
        this._updateFirstAndLastColumn();
        this._resetKeyboardNavigation();
        this._a11yUpdateHeaderRows();
        this._a11yUpdateFooterRows();
        this.__updateFooterPositioning();
        this.generateCellClassNames();
    }
    __updateFooterPositioning() {
        // TODO: fixed in Firefox 99, remove when we can drop Firefox ESR 91 support
        if (this._firefox && parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1]) < 99) {
            // Sticky (or translated) footer in a flexbox host doesn't get included in
            // the scroll height calculation on FF. This is a workaround for the issue.
            this.$.items.style.paddingBottom = 0;
            if (!this.allRowsVisible) this.$.items.style.paddingBottom = `${this.$.footer.offsetHeight}px`;
        }
    }
    /**
   * @param {!HTMLElement} row
   * @param {GridItem} item
   * @protected
   */ _updateItem(row, item) {
        row._item = item;
        const model = this.__getRowModel(row);
        this._toggleDetailsCell(row, model.detailsOpened);
        this._a11yUpdateRowLevel(row, model.level);
        this._a11yUpdateRowSelected(row, model.selected);
        row.toggleAttribute("expanded", model.expanded);
        row.toggleAttribute("selected", model.selected);
        row.toggleAttribute("details-opened", model.detailsOpened);
        this._generateCellClassNames(row, model);
        this._filterDragAndDrop(row, model);
        Array.from(row.children).forEach((cell)=>{
            if (cell._renderer) {
                const owner = cell._column || this;
                cell._renderer.call(owner, cell._content, owner, model);
            }
        });
        this._updateDetailsCellHeight(row);
        this._a11yUpdateRowExpanded(row, model.expanded);
    }
    /** @private */ _resizeHandler() {
        this._updateDetailsCellHeights();
        this.__updateFooterPositioning();
    }
    /** @private */ _onAnimationEnd(e) {
        // ShadyCSS applies scoping suffixes to animation names
        if (e.animationName.indexOf("vaadin-grid-appear") === 0) {
            e.stopPropagation();
            this.__itemsReceived();
            requestAnimationFrame(()=>{
                this.__scrollToPendingIndex();
            });
        }
    }
    /**
   * @param {!HTMLTableRowElement} row
   * @return {!GridItemModel}
   * @protected
   */ __getRowModel(row) {
        return {
            index: row.index,
            item: row._item,
            level: this._getIndexLevel(row.index),
            expanded: this._isExpanded(row._item),
            selected: this._isSelected(row._item),
            detailsOpened: !!this.rowDetailsRenderer && this._isDetailsOpened(row._item)
        };
    }
    /**
   * Requests an update for the content of cells.
   *
   * While performing the update, the following renderers are invoked:
   * - `Grid.rowDetailsRenderer`
   * - `GridColumn.renderer`
   * - `GridColumn.headerRenderer`
   * - `GridColumn.footerRenderer`
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */ requestContentUpdate() {
        if (this._columnTree) {
            // header and footer renderers
            this._columnTree.forEach((level)=>{
                level.forEach((column)=>{
                    column._renderHeaderAndFooter();
                });
            });
            // body and row details renderers
            this.__updateVisibleRows();
        }
    }
    /** @protected */ __updateVisibleRows(start, end) {
        this.__virtualizer && this.__virtualizer.update(start, end);
    }
    /**
   * Updates the computed metrics and positioning of internal grid parts
   * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
   * content changes asynchronously to ensure consistent appearance (e.g. when a
   * contained image whose bounds aren't known beforehand finishes loading).
   *
   * @deprecated Since Vaadin 22, `notifyResize()` is deprecated. The component uses a
   * ResizeObserver internally and doesn't need to be explicitly notified of resizes.
   */ notifyResize() {
        console.warn(`WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.`);
    }
}
customElements.define(Grid.is, Grid);

},{"./vaadin-grid-column.js":"dFate","./vaadin-grid-styles.js":"l38a0","@polymer/polymer/lib/utils/render-status.js":"eDHaR","@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/browser-utils.js":"fxX4j","@vaadin/component-base/src/element-mixin.js":"4Nib4","@vaadin/component-base/src/tabindex-mixin.js":"eMVTc","@vaadin/component-base/src/templates.js":"4DhBC","@vaadin/component-base/src/virtualizer.js":"b9HbL","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","./vaadin-grid-a11y-mixin.js":"eYANF","./vaadin-grid-active-item-mixin.js":"5elrM","./vaadin-grid-array-data-provider-mixin.js":"2dmPT","./vaadin-grid-column-reordering-mixin.js":"lA5hx","./vaadin-grid-column-resizing-mixin.js":"cbeiA","./vaadin-grid-data-provider-mixin.js":"6Qlf4","./vaadin-grid-drag-and-drop-mixin.js":"4wBVF","./vaadin-grid-dynamic-columns-mixin.js":"lRzDn","./vaadin-grid-event-context-mixin.js":"eHr19","./vaadin-grid-filter-mixin.js":"jqoPO","./vaadin-grid-keyboard-navigation-mixin.js":"j48jA","./vaadin-grid-row-details-mixin.js":"17Edl","./vaadin-grid-scroll-mixin.js":"1Wg5t","./vaadin-grid-selection-mixin.js":"4fONp","./vaadin-grid-sort-mixin.js":"9zBsb","./vaadin-grid-styling-mixin.js":"bcLGu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFate":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColumnBaseMixin", ()=>ColumnBaseMixin);
parcelHelpers.export(exports, "GridColumn", ()=>GridColumn);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _asyncJs = require("@vaadin/component-base/src/async.js");
var _debounceJs = require("@vaadin/component-base/src/debounce.js");
var _dirMixinJs = require("@vaadin/component-base/src/dir-mixin.js");
var _templatesJs = require("@vaadin/component-base/src/templates.js");
const ColumnBaseMixin = (superClass)=>class ColumnBaseMixin extends superClass {
        static get properties() {
            return {
                /**
         * When set to true, the column is user-resizable.
         * @default false
         */ resizable: {
                    type: Boolean,
                    value: function() {
                        if (this.localName === "vaadin-grid-column-group") return;
                        const parent = this.parentNode;
                        if (parent && parent.localName === "vaadin-grid-column-group") return parent.resizable || false;
                        return false;
                    }
                },
                /**
         * When true, the column is frozen. When a column inside of a column group is frozen,
         * all of the sibling columns inside the group will get frozen also.
         * @type {boolean}
         */ frozen: {
                    type: Boolean,
                    value: false
                },
                /**
         * When set to true, the cells for this column are hidden.
         */ hidden: {
                    type: Boolean,
                    value: false
                },
                /**
         * Text content to display in the header cell of the column.
         */ header: {
                    type: String
                },
                /**
         * Aligns the columns cell content horizontally.
         * Supported values: "start", "center" and "end".
         * @attr {start|center|end} text-align
         * @type {GridColumnTextAlign | null | undefined}
         */ textAlign: {
                    type: String
                },
                /**
         * @type {boolean}
         * @protected
         */ _lastFrozen: {
                    type: Boolean,
                    value: false
                },
                /** @protected */ _order: Number,
                /** @private */ _reorderStatus: Boolean,
                /**
         * @type {Array<!HTMLElement>}
         * @protected
         */ _emptyCells: Array,
                /** @private */ _headerCell: Object,
                /** @private */ _footerCell: Object,
                /** @protected */ _grid: Object,
                /**
         * By default, the Polymer doesn't invoke the observer
         * during initialization if all of its dependencies are `undefined`.
         * This internal property can be used to force initial invocation of an observer
         * even the other dependencies of the observer are `undefined`.
         *
         * @private
         */ __initialized: {
                    type: Boolean,
                    value: true
                },
                /**
         * Custom function for rendering the header content.
         * Receives two arguments:
         *
         * - `root` The header cell content DOM element. Append your content to it.
         * - `column` The `<vaadin-grid-column>` element.
         *
         * @type {GridHeaderFooterRenderer | null | undefined}
         */ headerRenderer: Function,
                /**
         * Represents the final header renderer computed on the set of observable arguments.
         * It is supposed to be used internally when rendering the header cell content.
         *
         * @protected
         * @type {GridHeaderFooterRenderer | undefined}
         */ _headerRenderer: {
                    type: Function,
                    computed: "_computeHeaderRenderer(headerRenderer, header, __initialized)"
                },
                /**
         * Custom function for rendering the footer content.
         * Receives two arguments:
         *
         * - `root` The footer cell content DOM element. Append your content to it.
         * - `column` The `<vaadin-grid-column>` element.
         *
         * @type {GridHeaderFooterRenderer | null | undefined}
         */ footerRenderer: Function,
                /**
         * Represents the final footer renderer computed on the set of observable arguments.
         * It is supposed to be used internally when rendering the footer cell content.
         *
         * @protected
         * @type {GridHeaderFooterRenderer | undefined}
         */ _footerRenderer: {
                    type: Function,
                    computed: "_computeFooterRenderer(footerRenderer, __initialized)"
                },
                /**
         * An internal property that is mainly used by `vaadin-template-renderer`
         * to identify grid column elements.
         *
         * @private
         */ __gridColumnElement: {
                    type: Boolean,
                    value: true
                }
            };
        }
        static get observers() {
            return [
                "_widthChanged(width, _headerCell, _footerCell, _cells.*)",
                "_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)",
                "_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)",
                "_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)",
                "_orderChanged(_order, _headerCell, _footerCell, _cells.*)",
                "_lastFrozenChanged(_lastFrozen)",
                "_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)",
                "_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)",
                "_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)",
                "_resizableChanged(resizable, _headerCell)",
                "_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)",
                "_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)", 
            ];
        }
        /** @protected */ connectedCallback() {
            super.connectedCallback();
            // Adds the column cells to the grid after the column is attached
            requestAnimationFrame(()=>{
                // Skip if the column has been detached
                if (!this._grid) return;
                this._allCells.forEach((cell)=>{
                    if (!cell._content.parentNode) this._grid.appendChild(cell._content);
                });
            });
        }
        /** @protected */ disconnectedCallback() {
            super.disconnectedCallback();
            // Removes the column cells from the grid after the column is detached
            requestAnimationFrame(()=>{
                // Skip if the column has been attached again
                if (this._grid) return;
                this._allCells.forEach((cell)=>{
                    if (cell._content.parentNode) cell._content.parentNode.removeChild(cell._content);
                });
            });
            this._gridValue = undefined;
        }
        /** @protected */ ready() {
            super.ready();
            (0, _templatesJs.processTemplates)(this);
        }
        /**
     * @return {!Grid | undefined}
     * @protected
     */ _findHostGrid() {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            let el = this;
            // Custom elements extending grid must have a specific localName
            while(el && !/^vaadin.*grid(-pro)?$/.test(el.localName))el = el.assignedSlot ? el.assignedSlot.parentNode : el.parentNode;
            return el || undefined;
        }
        /**
     * @return {!Grid | undefined}
     * @protected
     */ get _grid() {
            if (!this._gridValue) this._gridValue = this._findHostGrid();
            return this._gridValue;
        }
        /**
     * @return {!Array<!HTMLElement>}
     * @protected
     */ get _allCells() {
            return [].concat(this._cells || []).concat(this._emptyCells || []).concat(this._headerCell).concat(this._footerCell).filter((cell)=>cell);
        }
        /** @protected */ _renderHeaderAndFooter() {
            this._renderHeaderCellContent(this._headerRenderer, this._headerCell);
            this._renderFooterCellContent(this._footerRenderer, this._footerCell);
        }
        /** @private */ _flexGrowChanged(flexGrow) {
            if (this.parentElement && this.parentElement._columnPropChanged) this.parentElement._columnPropChanged("flexGrow");
            this._allCells.forEach((cell)=>cell.style.flexGrow = flexGrow);
        }
        /** @private */ _orderChanged(order) {
            this._allCells.forEach((cell)=>cell.style.order = order);
        }
        /** @private */ _widthChanged(width) {
            if (this.parentElement && this.parentElement._columnPropChanged) this.parentElement._columnPropChanged("width");
            this._allCells.forEach((cell)=>cell.style.width = width);
        }
        /** @private */ _frozenChanged(frozen) {
            if (this.parentElement && this.parentElement._columnPropChanged) this.parentElement._columnPropChanged("frozen", frozen);
            this._allCells.forEach((cell)=>cell.toggleAttribute("frozen", frozen));
            this._grid && this._grid._frozenCellsChanged && this._grid._frozenCellsChanged();
        }
        /** @private */ _lastFrozenChanged(lastFrozen) {
            this._allCells.forEach((cell)=>cell.toggleAttribute("last-frozen", lastFrozen));
            if (this.parentElement && this.parentElement._columnPropChanged) this.parentElement._lastFrozen = lastFrozen;
        }
        /**
     * @param {string} path
     * @return {string}
     * @protected
     */ _generateHeader(path) {
            return path.substr(path.lastIndexOf(".") + 1).replace(/([A-Z])/g, "-$1").toLowerCase().replace(/-/g, " ").replace(/^./, (match)=>match.toUpperCase());
        }
        /** @private */ _reorderStatusChanged(reorderStatus) {
            this._allCells.forEach((cell)=>cell.setAttribute("reorder-status", reorderStatus));
        }
        /** @private */ _resizableChanged(resizable, headerCell) {
            if (resizable === undefined || headerCell === undefined) return;
            if (headerCell) [
                headerCell
            ].concat(this._emptyCells).forEach((cell)=>{
                if (cell) {
                    const existingHandle = cell.querySelector('[part~="resize-handle"]');
                    if (existingHandle) cell.removeChild(existingHandle);
                    if (resizable) {
                        const handle = document.createElement("div");
                        handle.setAttribute("part", "resize-handle");
                        cell.appendChild(handle);
                    }
                }
            });
        }
        /** @private */ _textAlignChanged(textAlign) {
            if (textAlign === undefined) return;
            if ([
                "start",
                "end",
                "center"
            ].indexOf(textAlign) === -1) {
                console.warn('textAlign can only be set as "start", "end" or "center"');
                return;
            }
            let textAlignFallback;
            if (getComputedStyle(this._grid).direction === "ltr") {
                if (textAlign === "start") textAlignFallback = "left";
                else if (textAlign === "end") textAlignFallback = "right";
            } else if (textAlign === "start") textAlignFallback = "right";
            else if (textAlign === "end") textAlignFallback = "left";
            this._allCells.forEach((cell)=>{
                cell._content.style.textAlign = textAlign;
                if (getComputedStyle(cell._content).textAlign !== textAlign) cell._content.style.textAlign = textAlignFallback;
            });
        }
        /** @private */ _hiddenChanged(hidden) {
            if (this.parentElement && this.parentElement._columnPropChanged) this.parentElement._columnPropChanged("hidden", hidden);
            if (!!hidden !== !!this._previousHidden && this._grid) {
                if (hidden === true) this._allCells.forEach((cell)=>{
                    if (cell._content.parentNode) cell._content.parentNode.removeChild(cell._content);
                });
                this._grid._debouncerHiddenChanged = (0, _debounceJs.Debouncer).debounce(this._grid._debouncerHiddenChanged, (0, _asyncJs.animationFrame), ()=>{
                    if (this._grid && this._grid._renderColumnTree) this._grid._renderColumnTree(this._grid._columnTree);
                });
                this._grid._updateLastFrozen && this._grid._updateLastFrozen();
                this._grid._resetKeyboardNavigation && this._grid._resetKeyboardNavigation();
            }
            this._previousHidden = hidden;
        }
        /** @protected */ _runRenderer(renderer, cell, model) {
            const args = [
                cell._content,
                this
            ];
            if (model && model.item) args.push(model);
            renderer.apply(this, args);
        }
        /**
     * Renders the content to the given cells using a renderer.
     *
     * @private
     */ __renderCellsContent(renderer, cells) {
            // Skip if the column is hidden or not attached to a grid.
            if (this.hidden || !this._grid) return;
            cells.forEach((cell)=>{
                if (!cell.parentElement) return;
                const model = this._grid.__getRowModel(cell.parentElement);
                if (!renderer) return;
                if (cell._renderer !== renderer) this._clearCellContent(cell);
                cell._renderer = renderer;
                if (model.item || renderer === this._headerRenderer || renderer === this._footerRenderer) this._runRenderer(renderer, cell, model);
            });
        }
        /**
     * Clears the content of a cell.
     *
     * @protected
     */ _clearCellContent(cell) {
            cell._content.innerHTML = "";
            // Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
            // When clearing the rendered content, this part needs to be manually disposed of.
            // Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
            delete cell._content._$litPart$;
        }
        /**
     * Renders the header cell content using a renderer,
     * and then updates the visibility of the parent row depending on
     * whether all its children cells are empty or not.
     *
     * @protected
     */ _renderHeaderCellContent(headerRenderer, headerCell) {
            if (!headerCell || !headerRenderer) return;
            this.__renderCellsContent(headerRenderer, [
                headerCell
            ]);
            if (this._grid) this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement);
        }
        /** @protected */ _onHeaderRendererOrBindingChanged(headerRenderer, headerCell, ..._bindings) {
            this._renderHeaderCellContent(headerRenderer, headerCell);
        }
        /**
     * Renders the content of body cells using a renderer.
     *
     * @protected
     */ _renderBodyCellsContent(renderer, cells) {
            if (!cells || !renderer) return;
            this.__renderCellsContent(renderer, cells);
        }
        /** @protected */ _onRendererOrBindingChanged(renderer, cells, ..._bindings) {
            this._renderBodyCellsContent(renderer, cells);
        }
        /**
     * Renders the footer cell content using a renderer
     * and then updates the visibility of the parent row depending on
     * whether all its children cells are empty or not.
     *
     * @protected
     */ _renderFooterCellContent(footerRenderer, footerCell) {
            if (!footerCell || !footerRenderer) return;
            this.__renderCellsContent(footerRenderer, [
                footerCell
            ]);
            if (this._grid) this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement);
        }
        /** @protected */ _onFooterRendererOrBindingChanged(footerRenderer, footerCell) {
            this._renderFooterCellContent(footerRenderer, footerCell);
        }
        /** @private */ __setTextContent(node, textContent) {
            node.textContent !== textContent && (node.textContent = textContent);
        }
        /**
     * Renders the text header to the header cell.
     *
     * @private
     */ __textHeaderRenderer() {
            this.__setTextContent(this._headerCell._content, this.header);
        }
        /**
     * Computes the property name based on the path and renders it to the header cell.
     * If the path is not defined, then nothing is rendered.
     *
     * @protected
     */ _defaultHeaderRenderer() {
            if (!this.path) return;
            this.__setTextContent(this._headerCell._content, this._generateHeader(this.path));
        }
        /**
     * Computes the item property value based on the path and renders it to the body cell.
     * If the path is not defined, then nothing is rendered.
     *
     * @protected
     */ _defaultRenderer(root, _owner, { item  }) {
            if (!this.path) return;
            this.__setTextContent(root, this.get(this.path, item));
        }
        /**
     * By default, nothing is rendered to the footer cell.
     *
     * @protected
     */ _defaultFooterRenderer() {}
        /**
     * Computes the final header renderer for the `_headerRenderer` computed property.
     * All the arguments are observable by the Polymer, it re-calls the method
     * once an argument is changed to update the property value.
     *
     * @protected
     * @return {GridHeaderFooterRenderer | undefined}
     */ _computeHeaderRenderer(headerRenderer, header) {
            if (headerRenderer) return headerRenderer;
            if (header !== undefined && header !== null) return this.__textHeaderRenderer;
            return this._defaultHeaderRenderer;
        }
        /**
     * Computes the final renderer for the `_renderer` property.
     * All the arguments are observable by the Polymer, it re-calls the method
     * once an argument is changed to update the property value.
     *
     * @protected
     * @return {GridBodyRenderer | undefined}
     */ _computeRenderer(renderer) {
            if (renderer) return renderer;
            return this._defaultRenderer;
        }
        /**
     * Computes the final footer renderer for the `_footerRenderer` property.
     * All the arguments are observable by the Polymer, it re-calls the method
     * once an argument is changed to update the property value.
     *
     * @protected
     * @return {GridHeaderFooterRenderer | undefined}
     */ _computeFooterRenderer(footerRenderer) {
            if (footerRenderer) return footerRenderer;
            return this._defaultFooterRenderer;
        }
    };
/**
 * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
 * should look like.
 *
 * See [`<vaadin-grid>`](#/elements/vaadin-grid) documentation for instructions on how
 * to configure the `<vaadin-grid-column>`.
 *
 * @extends HTMLElement
 * @mixes ColumnBaseMixin
 */ class GridColumn extends ColumnBaseMixin((0, _dirMixinJs.DirMixin)((0, _polymerElementJs.PolymerElement))) {
    static get is() {
        return "vaadin-grid-column";
    }
    static get properties() {
        return {
            /**
       * Width of the cells for this column.
       */ width: {
                type: String,
                value: "100px"
            },
            /**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       * @attr {number} flex-grow
       * @type {number}
       */ flexGrow: {
                type: Number,
                value: 1
            },
            /**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `model` The object with the properties related with
       *   the rendered item, contains:
       *   - `model.index` The index of the item.
       *   - `model.item` The item.
       *   - `model.expanded` Sublevel toggle state.
       *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `model.selected` Selected state.
       *   - `model.detailsOpened` Details opened state.
       *
       * @type {GridBodyRenderer | null | undefined}
       */ renderer: Function,
            /**
       * Represents the final renderer computed on the set of observable arguments.
       * It is supposed to be used internally when rendering the content of a body cell.
       *
       * @protected
       * @type {GridBodyRenderer | undefined}
       */ _renderer: {
                type: Function,
                computed: "_computeRenderer(renderer, __initialized)"
            },
            /**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */ path: {
                type: String
            },
            /**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       * @attr {boolean} auto-width
       * @type {boolean}
       */ autoWidth: {
                type: Boolean,
                value: false
            },
            /**
       * @type {Array<!HTMLElement>}
       * @protected
       */ _cells: Array
        };
    }
}
customElements.define(GridColumn.is, GridColumn);

},{"@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/async.js":"ePy4z","@vaadin/component-base/src/debounce.js":"8Wgp5","@vaadin/component-base/src/dir-mixin.js":"e4xcC","@vaadin/component-base/src/templates.js":"4DhBC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DhBC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Passes the component to the template renderer callback if the template renderer is imported.
 * Otherwise, if there is a template, it warns that the template renderer needs to be imported.
 *
 * @param {HTMLElement} component
 */ parcelHelpers.export(exports, "processTemplates", ()=>processTemplates);
function processTemplates(component) {
    if (window.Vaadin && window.Vaadin.templateRendererCallback) {
        window.Vaadin.templateRendererCallback(component);
        return;
    }
    if (component.querySelector("template")) console.warn(`WARNING: <template> inside <${component.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l38a0":[function(require,module,exports) {
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-grid", (0, _vaadinThemableMixinJs.css)`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      transform: translateX(var(--_grid-horizontal-scroll-position));
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) *:is(#items, #header, #footer, [frozen]) {
      transform: none;
    }

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }
  `, {
    moduleId: "vaadin-grid-styles"
});

},{"@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"b9HbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Virtualizer", ()=>Virtualizer);
var _virtualizerIronListAdapterJs = require("./virtualizer-iron-list-adapter.js");
class Virtualizer {
    /**
   * @typedef {Object} VirtualizerConfig
   * @property {Function} createElements Function that returns the given number of new elements
   * @property {Function} updateElement Function that updates the element at a specific index
   * @property {HTMLElement} scrollTarget Reference to the scrolling element
   * @property {HTMLElement} scrollContainer Reference to a wrapper for the item elements (or a slot) inside the scrollTarget
   * @property {HTMLElement | undefined} elementsContainer Reference to the container in which the item elements are placed, defaults to scrollContainer
   * @property {boolean | undefined} reorderElements Determines whether the physical item elements should be kept in order in the DOM
   * @param {VirtualizerConfig} config Configuration for the virtualizer
   */ constructor(config){
        this.__adapter = new (0, _virtualizerIronListAdapterJs.IronListAdapter)(config);
    }
    /**
   * The size of the virtualizer
   * @return {number | undefined} The size of the virtualizer
   */ get size() {
        return this.__adapter.size;
    }
    /**
   * The size of the virtualizer
   * @param {number} size The size of the virtualizer
   */ set size(size) {
        this.__adapter.size = size;
    }
    /**
   * Scroll to a specific index in the virtual list
   *
   * @method scrollToIndex
   * @param {number} index The index of the item
   */ scrollToIndex(index) {
        this.__adapter.scrollToIndex(index);
    }
    /**
   * Requests the virtualizer to re-render the item elements on an index range, if currently in the DOM
   *
   * @method update
   * @param {number | undefined} startIndex The start index of the range
   * @param {number | undefined} endIndex The end index of the range
   */ update(startIndex = 0, endIndex = this.size - 1) {
        this.__adapter.update(startIndex, endIndex);
    }
    /**
   * Flushes active asynchronous tasks so that the component and the DOM end up in a stable state
   *
   * @method update
   * @param {number | undefined} startIndex The start index of the range
   * @param {number | undefined} endIndex The end index of the range
   */ flush() {
        this.__adapter.flush();
    }
    /**
   * Gets the index of the first visible item in the viewport.
   *
   * @return {number}
   */ get firstVisibleIndex() {
        return this.__adapter.adjustedFirstVisibleIndex;
    }
    /**
   * Gets the index of the last visible item in the viewport.
   *
   * @return {number}
   */ get lastVisibleIndex() {
        return this.__adapter.adjustedLastVisibleIndex;
    }
}

},{"./virtualizer-iron-list-adapter.js":"jaNPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jaNPY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IronListAdapter", ()=>IronListAdapter);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _asyncJs = require("./async.js");
var _browserUtilsJs = require("./browser-utils.js");
var _debounceJs = require("./debounce.js");
var _ironListCoreJs = require("./iron-list-core.js");
// iron-list can by default handle sizes up to around 100000.
// When the size is larger than MAX_VIRTUAL_COUNT _vidxOffset is used
const MAX_VIRTUAL_COUNT = 100000;
const OFFSET_ADJUST_MIN_THRESHOLD = 1000;
class IronListAdapter {
    constructor({ createElements , updateElement , scrollTarget , scrollContainer , elementsContainer , reorderElements  }){
        this.isAttached = true;
        this._vidxOffset = 0;
        this.createElements = createElements;
        this.updateElement = updateElement;
        this.scrollTarget = scrollTarget;
        this.scrollContainer = scrollContainer;
        this.elementsContainer = elementsContainer || scrollContainer;
        this.reorderElements = reorderElements;
        // Iron-list uses this value to determine how many pages of elements to render
        this._maxPages = 1.3;
        this.timeouts = {
            SCROLL_REORDER: 500,
            IGNORE_WHEEL: 500
        };
        this.__resizeObserver = new ResizeObserver(()=>this._resizeHandler());
        if (getComputedStyle(this.scrollTarget).overflow === "visible") this.scrollTarget.style.overflow = "auto";
        if (getComputedStyle(this.scrollContainer).position === "static") this.scrollContainer.style.position = "relative";
        this.__resizeObserver.observe(this.scrollTarget);
        this.scrollTarget.addEventListener("scroll", ()=>this._scrollHandler());
        this._scrollLineHeight = this._getScrollLineHeight();
        this.scrollTarget.addEventListener("wheel", (e)=>this.__onWheel(e));
        if (this.reorderElements) {
            // Reordering the physical elements cancels the user's grab of the scroll bar handle on Safari.
            // Need to defer reordering until the user lets go of the scroll bar handle.
            this.scrollTarget.addEventListener("mousedown", ()=>this.__mouseDown = true);
            this.scrollTarget.addEventListener("mouseup", ()=>{
                this.__mouseDown = false;
                if (this.__pendingReorder) this.__reorderElements();
            });
        }
    }
    _manageFocus() {}
    _removeFocusedItem() {}
    get scrollOffset() {
        return 0;
    }
    get adjustedFirstVisibleIndex() {
        return this.firstVisibleIndex + this._vidxOffset;
    }
    get adjustedLastVisibleIndex() {
        return this.lastVisibleIndex + this._vidxOffset;
    }
    scrollToIndex(index) {
        if (typeof index !== "number" || isNaN(index) || this.size === 0 || !this.scrollTarget.offsetHeight) return;
        index = this._clamp(index, 0, this.size - 1);
        const visibleElementCount = this.__getVisibleElements().length;
        let targetVirtualIndex = Math.floor(index / this.size * this._virtualCount);
        if (this._virtualCount - targetVirtualIndex < visibleElementCount) {
            targetVirtualIndex = this._virtualCount - (this.size - index);
            this._vidxOffset = this.size - this._virtualCount;
        } else if (targetVirtualIndex < visibleElementCount) {
            if (index < OFFSET_ADJUST_MIN_THRESHOLD) {
                targetVirtualIndex = index;
                this._vidxOffset = 0;
            } else {
                targetVirtualIndex = OFFSET_ADJUST_MIN_THRESHOLD;
                this._vidxOffset = index - targetVirtualIndex;
            }
        } else this._vidxOffset = index - targetVirtualIndex;
        this.__skipNextVirtualIndexAdjust = true;
        super.scrollToIndex(targetVirtualIndex);
        if (this.adjustedFirstVisibleIndex !== index && this._scrollTop < this._maxScrollTop && !this.grid) // Workaround an iron-list issue by manually adjusting the scroll position
        this._scrollTop -= this.__getIndexScrollOffset(index) || 0;
        this._scrollHandler();
    }
    flush() {
        // The scroll target is hidden.
        if (this.scrollTarget.offsetHeight === 0) return;
        this._resizeHandler();
        (0, _debounceJs.flush)();
        this._scrollHandler();
        this.__scrollReorderDebouncer && this.__scrollReorderDebouncer.flush();
        this.__debouncerWheelAnimationFrame && this.__debouncerWheelAnimationFrame.flush();
    }
    update(startIndex = 0, endIndex = this.size - 1) {
        this.__getVisibleElements().forEach((el)=>{
            if (el.__virtualIndex >= startIndex && el.__virtualIndex <= endIndex) this.__updateElement(el, el.__virtualIndex, true);
        });
    }
    __updateElement(el, index, forceSameIndexUpdates) {
        // Clean up temporary min height
        if (el.style.minHeight) el.style.minHeight = "";
        if (!this.__preventElementUpdates && (el.__lastUpdatedIndex !== index || forceSameIndexUpdates)) {
            this.updateElement(el, index);
            el.__lastUpdatedIndex = index;
        }
        if (el.offsetHeight === 0) // If the elements have 0 height after update (for example due to lazy rendering),
        // it results in iron-list requesting to create an unlimited count of elements.
        // Assign a temporary min height to elements that would otherwise end up having
        // no height.
        el.style.minHeight = "200px";
    }
    __getIndexScrollOffset(index) {
        const element = this.__getVisibleElements().find((el)=>el.__virtualIndex === index);
        return element ? this.scrollTarget.getBoundingClientRect().top - element.getBoundingClientRect().top : undefined;
    }
    get size() {
        return this.__size;
    }
    set size(size) {
        if (size === this.size) return;
        // Prevent element update while the scroll position is being restored
        this.__preventElementUpdates = true;
        // Record the scroll position before changing the size
        let fvi; // first visible index
        let fviOffsetBefore; // scroll offset of the first visible index
        if (size > 0) {
            fvi = this.adjustedFirstVisibleIndex;
            fviOffsetBefore = this.__getIndexScrollOffset(fvi);
        }
        // Change the size
        this.__size = size;
        // Flush before invoking items change to avoid
        // creating excess elements on the following flush()
        (0, _debounceJs.flush)();
        this._itemsChanged({
            path: "items"
        });
        (0, _debounceJs.flush)();
        // Try to restore the scroll position if the new size is larger than 0
        if (size > 0) {
            fvi = Math.min(fvi, size - 1);
            this.scrollToIndex(fvi);
            const fviOffsetAfter = this.__getIndexScrollOffset(fvi);
            if (fviOffsetBefore !== undefined && fviOffsetAfter !== undefined) this._scrollTop += fviOffsetBefore - fviOffsetAfter;
        }
        if (!this.elementsContainer.children.length) requestAnimationFrame(()=>this._resizeHandler());
        this.__preventElementUpdates = false;
        // Schedule and flush a resize handler
        this._resizeHandler();
        (0, _debounceJs.flush)();
    }
    /** @private */ get _scrollTop() {
        return this.scrollTarget.scrollTop;
    }
    /** @private */ set _scrollTop(top) {
        this.scrollTarget.scrollTop = top;
    }
    /** @private */ get items() {
        return {
            length: Math.min(this.size, MAX_VIRTUAL_COUNT)
        };
    }
    /** @private */ get offsetHeight() {
        return this.scrollTarget.offsetHeight;
    }
    /** @private */ get $() {
        return {
            items: this.scrollContainer
        };
    }
    /** @private */ updateViewportBoundaries() {
        const styles = window.getComputedStyle(this.scrollTarget);
        this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles["padding-top"], 10);
        this._isRTL = Boolean(styles.direction === "rtl");
        this._viewportWidth = this.elementsContainer.offsetWidth;
        this._viewportHeight = this.scrollTarget.offsetHeight;
        this._scrollPageHeight = this._viewportHeight - this._scrollLineHeight;
        this.grid && this._updateGridMetrics();
    }
    /** @private */ setAttribute() {}
    /** @private */ _createPool(size) {
        const physicalItems = this.createElements(size);
        const fragment = document.createDocumentFragment();
        physicalItems.forEach((el)=>{
            el.style.position = "absolute";
            fragment.appendChild(el);
            this.__resizeObserver.observe(el);
        });
        this.elementsContainer.appendChild(fragment);
        return physicalItems;
    }
    /** @private */ _assignModels(itemSet) {
        this._iterateItems((pidx, vidx)=>{
            const el = this._physicalItems[pidx];
            el.hidden = vidx >= this.size;
            if (!el.hidden) {
                el.__virtualIndex = vidx + (this._vidxOffset || 0);
                this.__updateElement(el, el.__virtualIndex);
            } else delete el.__lastUpdatedIndex;
        }, itemSet);
    }
    /** @private */ _isClientFull() {
        // Workaround an issue in iron-list that can cause it to freeze on fast scroll
        setTimeout(()=>this.__clientFull = true);
        return this.__clientFull || super._isClientFull();
    }
    /** @private */ translate3d(_x, y, _z, el) {
        el.style.transform = `translateY(${y})`;
    }
    /** @private */ toggleScrollListener() {}
    _scrollHandler() {
        this._adjustVirtualIndexOffset(this._scrollTop - (this.__previousScrollTop || 0));
        super._scrollHandler();
        if (this._physicalCount !== 0) {
            // After running super._scrollHandler, fix _virtualStart to workaround an iron-list issue.
            // See https://github.com/vaadin/web-components/issues/1691
            const reusables = this._getReusables(true);
            this._physicalTop = reusables.physicalTop;
            this._virtualStart += reusables.indexes.length;
            this._physicalStart += reusables.indexes.length;
        }
        if (this.reorderElements) this.__scrollReorderDebouncer = (0, _debounceJs.Debouncer).debounce(this.__scrollReorderDebouncer, (0, _asyncJs.timeOut).after(this.timeouts.SCROLL_REORDER), ()=>this.__reorderElements());
        this.__previousScrollTop = this._scrollTop;
    }
    /** @private */ __onWheel(e) {
        if (e.ctrlKey || this._hasScrolledAncestor(e.target, e.deltaX, e.deltaY)) return;
        let deltaY = e.deltaY;
        if (e.deltaMode === WheelEvent.DOM_DELTA_LINE) // Scrolling by "lines of text" instead of pixels
        deltaY *= this._scrollLineHeight;
        else if (e.deltaMode === WheelEvent.DOM_DELTA_PAGE) // Scrolling by "pages" instead of pixels
        deltaY *= this._scrollPageHeight;
        this._deltaYAcc = this._deltaYAcc || 0;
        if (this._wheelAnimationFrame) {
            // Accumulate wheel delta while a frame is being processed
            this._deltaYAcc += deltaY;
            e.preventDefault();
            return;
        }
        deltaY += this._deltaYAcc;
        this._deltaYAcc = 0;
        this._wheelAnimationFrame = true;
        this.__debouncerWheelAnimationFrame = (0, _debounceJs.Debouncer).debounce(this.__debouncerWheelAnimationFrame, (0, _asyncJs.animationFrame), ()=>this._wheelAnimationFrame = false);
        const momentum = Math.abs(e.deltaX) + Math.abs(deltaY);
        if (this._canScroll(this.scrollTarget, e.deltaX, deltaY)) {
            e.preventDefault();
            this.scrollTarget.scrollTop += deltaY;
            this.scrollTarget.scrollLeft += e.deltaX;
            this._hasResidualMomentum = true;
            this._ignoreNewWheel = true;
            this._debouncerIgnoreNewWheel = (0, _debounceJs.Debouncer).debounce(this._debouncerIgnoreNewWheel, (0, _asyncJs.timeOut).after(this.timeouts.IGNORE_WHEEL), ()=>this._ignoreNewWheel = false);
        } else if (this._hasResidualMomentum && momentum <= this._previousMomentum || this._ignoreNewWheel) e.preventDefault();
        else if (momentum > this._previousMomentum) this._hasResidualMomentum = false;
        this._previousMomentum = momentum;
    }
    /**
   * Determines if the element has an ancestor that handles the scroll delta prior to this
   *
   * @private
   */ _hasScrolledAncestor(el, deltaX, deltaY) {
        if (el === this.scrollTarget || el === this.scrollTarget.getRootNode().host) return false;
        else if (this._canScroll(el, deltaX, deltaY) && [
            "auto",
            "scroll"
        ].indexOf(getComputedStyle(el).overflow) !== -1) return true;
        else if (el !== this && el.parentElement) return this._hasScrolledAncestor(el.parentElement, deltaX, deltaY);
    }
    _canScroll(el, deltaX, deltaY) {
        return deltaY > 0 && el.scrollTop < el.scrollHeight - el.offsetHeight || deltaY < 0 && el.scrollTop > 0 || deltaX > 0 && el.scrollLeft < el.scrollWidth - el.offsetWidth || deltaX < 0 && el.scrollLeft > 0;
    }
    /**
   * @returns {Number|undefined} - The browser's default font-size in pixels
   * @private
   */ _getScrollLineHeight() {
        const el = document.createElement("div");
        el.style.fontSize = "initial";
        el.style.display = "none";
        document.body.appendChild(el);
        const fontSize = window.getComputedStyle(el).fontSize;
        document.body.removeChild(el);
        return fontSize ? window.parseInt(fontSize) : undefined;
    }
    __getVisibleElements() {
        return Array.from(this.elementsContainer.children).filter((element)=>!element.hidden);
    }
    /** @private */ __reorderElements() {
        if (this.__mouseDown) {
            this.__pendingReorder = true;
            return;
        }
        this.__pendingReorder = false;
        const adjustedVirtualStart = this._virtualStart + (this._vidxOffset || 0);
        // Which row to use as a target?
        const visibleElements = this.__getVisibleElements();
        const elementWithFocus = visibleElements.find((element)=>element.contains(this.elementsContainer.getRootNode().activeElement) || element.contains(this.scrollTarget.getRootNode().activeElement));
        const targetElement = elementWithFocus || visibleElements[0];
        if (!targetElement) // All elements are hidden, don't reorder
        return;
        // Where the target row should be?
        const targetPhysicalIndex = targetElement.__virtualIndex - adjustedVirtualStart;
        // Reodrer the DOM elements to keep the target row at the target physical index
        const delta = visibleElements.indexOf(targetElement) - targetPhysicalIndex;
        if (delta > 0) for(let i = 0; i < delta; i++)this.elementsContainer.appendChild(visibleElements[i]);
        else if (delta < 0) for(let i1 = visibleElements.length + delta; i1 < visibleElements.length; i1++)this.elementsContainer.insertBefore(visibleElements[i1], visibleElements[0]);
        // Due to a rendering bug, reordering the rows can make parts of the scroll target disappear
        // on Safari when using sticky positioning in case the scroll target is inside a flexbox.
        // This issue manifests with grid (the header can disappear if grid is used inside a flexbox)
        if (0, _browserUtilsJs.isSafari) {
            const { transform  } = this.scrollTarget.style;
            this.scrollTarget.style.transform = "translateZ(0)";
            setTimeout(()=>this.scrollTarget.style.transform = transform);
        }
    }
    /** @private */ _adjustVirtualIndexOffset(delta) {
        if (this._virtualCount >= this.size) this._vidxOffset = 0;
        else if (this.__skipNextVirtualIndexAdjust) this.__skipNextVirtualIndexAdjust = false;
        else if (Math.abs(delta) > 10000) {
            // Process a large scroll position change
            const scale = this._scrollTop / (this.scrollTarget.scrollHeight - this.scrollTarget.offsetHeight);
            const offset = scale * this.size;
            this._vidxOffset = Math.round(offset - scale * this._virtualCount);
        } else {
            // Make sure user can always swipe/wheel scroll to the start and end
            const oldOffset = this._vidxOffset;
            const threshold = OFFSET_ADJUST_MIN_THRESHOLD;
            const maxShift = 100;
            // Near start
            if (this._scrollTop === 0) {
                this._vidxOffset = 0;
                if (oldOffset !== this._vidxOffset) super.scrollToIndex(0);
            } else if (this.firstVisibleIndex < threshold && this._vidxOffset > 0) {
                this._vidxOffset -= Math.min(this._vidxOffset, maxShift);
                super.scrollToIndex(this.firstVisibleIndex + (oldOffset - this._vidxOffset));
            }
            // Near end
            const maxOffset = this.size - this._virtualCount;
            if (this._scrollTop >= this._maxScrollTop && this._maxScrollTop > 0) {
                this._vidxOffset = maxOffset;
                if (oldOffset !== this._vidxOffset) super.scrollToIndex(this._virtualCount - 1);
            } else if (this.firstVisibleIndex > this._virtualCount - threshold && this._vidxOffset < maxOffset) {
                this._vidxOffset += Math.min(maxOffset - this._vidxOffset, maxShift);
                super.scrollToIndex(this.firstVisibleIndex - (this._vidxOffset - oldOffset));
            }
        }
    }
}
Object.setPrototypeOf(IronListAdapter.prototype, (0, _ironListCoreJs.ironList));

},{"./async.js":"ePy4z","./browser-utils.js":"fxX4j","./debounce.js":"8Wgp5","./iron-list-core.js":"fC1rs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fC1rs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ironList", ()=>ironList);
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */ var _asyncJs = require("./async.js");
var _debounceJs = require("./debounce.js");
const IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
const IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
const DEFAULT_PHYSICAL_COUNT = 3;
const ironList = {
    /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */ _ratio: 0.5,
    /**
   * The padding-top value for the list.
   */ _scrollerPaddingTop: 0,
    /**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */ _scrollPosition: 0,
    /**
   * The sum of the heights of all the tiles in the DOM.
   */ _physicalSize: 0,
    /**
   * The average `offsetHeight` of the tiles observed till now.
   */ _physicalAverage: 0,
    /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */ _physicalAverageCount: 0,
    /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */ _physicalTop: 0,
    /**
   * The number of items in the list.
   */ _virtualCount: 0,
    /**
   * The estimated scroll height based on `_physicalAverage`
   */ _estScrollHeight: 0,
    /**
   * The scroll height of the dom node
   */ _scrollHeight: 0,
    /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */ _viewportHeight: 0,
    /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */ _viewportWidth: 0,
    /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */ _physicalItems: null,
    /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */ _physicalSizes: null,
    /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */ _firstVisibleIndexVal: null,
    /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */ _lastVisibleIndexVal: null,
    /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */ _maxPages: 2,
    /**
   * The maximum items per row
   */ _itemsPerRow: 1,
    /**
   * The width of each grid item
   */ _itemWidth: 0,
    /**
   * The height of the row in grid layout.
   */ _rowHeight: 0,
    /**
   * The cost of stamping a template in ms.
   */ _templateCost: 0,
    /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */ _parentModel: true,
    /**
   * The bottom of the physical content.
   */ get _physicalBottom () {
        return this._physicalTop + this._physicalSize;
    },
    /**
   * The bottom of the scroll.
   */ get _scrollBottom () {
        return this._scrollPosition + this._viewportHeight;
    },
    /**
   * The n-th item rendered in the last physical item.
   */ get _virtualEnd () {
        return this._virtualStart + this._physicalCount - 1;
    },
    /**
   * The height of the physical content that isn't on the screen.
   */ get _hiddenContentSize () {
        var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
        return size - this._viewportHeight;
    },
    /**
   * The maximum scroll top value.
   */ get _maxScrollTop () {
        return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
    },
    /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */ get _maxVirtualStart () {
        var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
        return Math.max(0, virtualCount - this._physicalCount);
    },
    get _virtualStart () {
        return this._virtualStartVal || 0;
    },
    set _virtualStart (val){
        val = this._clamp(val, 0, this._maxVirtualStart);
        if (this.grid) val -= val % this._itemsPerRow;
        this._virtualStartVal = val;
    },
    get _physicalStart () {
        return this._physicalStartVal || 0;
    },
    /**
   * The k-th tile that is at the top of the scrolling list.
   */ set _physicalStart (val){
        val %= this._physicalCount;
        if (val < 0) val = this._physicalCount + val;
        if (this.grid) val -= val % this._itemsPerRow;
        this._physicalStartVal = val;
    },
    /**
   * The k-th tile that is at the bottom of the scrolling list.
   */ get _physicalEnd () {
        return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
    },
    get _physicalCount () {
        return this._physicalCountVal || 0;
    },
    set _physicalCount (val){
        this._physicalCountVal = val;
    },
    /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */ get _optPhysicalSize () {
        return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
    },
    /**
   * True if the current list is visible.
   */ get _isVisible () {
        return Boolean(this.offsetWidth || this.offsetHeight);
    },
    /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */ get firstVisibleIndex () {
        var idx = this._firstVisibleIndexVal;
        if (idx == null) {
            var physicalOffset = this._physicalTop + this._scrollOffset;
            idx = this._iterateItems((pidx, vidx)=>{
                physicalOffset += this._getPhysicalSizeIncrement(pidx);
                if (physicalOffset > this._scrollPosition) return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
                // Handle a partially rendered final row in grid mode
                if (this.grid && this._virtualCount - 1 === vidx) return vidx - vidx % this._itemsPerRow;
            }) || 0;
            this._firstVisibleIndexVal = idx;
        }
        return idx;
    },
    /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */ get lastVisibleIndex () {
        var idx1 = this._lastVisibleIndexVal;
        if (idx1 == null) {
            if (this.grid) idx1 = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
            else {
                var physicalOffset1 = this._physicalTop + this._scrollOffset;
                this._iterateItems((pidx, vidx)=>{
                    if (physicalOffset1 < this._scrollBottom) idx1 = vidx;
                    physicalOffset1 += this._getPhysicalSizeIncrement(pidx);
                });
            }
            this._lastVisibleIndexVal = idx1;
        }
        return idx1;
    },
    get _defaultScrollTarget () {
        return this;
    },
    get _virtualRowCount () {
        return Math.ceil(this._virtualCount / this._itemsPerRow);
    },
    get _estRowsInView () {
        return Math.ceil(this._viewportHeight / this._rowHeight);
    },
    get _physicalRows () {
        return Math.ceil(this._physicalCount / this._itemsPerRow);
    },
    get _scrollOffset () {
        return this._scrollerPaddingTop + this.scrollOffset;
    },
    /**
   * Recycles the physical items when needed.
   */ _scrollHandler: function() {
        var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
        var delta = scrollTop - this._scrollPosition;
        var isScrollingDown = delta >= 0;
        // Track the current scroll position.
        this._scrollPosition = scrollTop;
        // Clear indexes for first and last visible indexes.
        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
        // Random access.
        if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
            delta -= this._scrollOffset;
            var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;
            this._virtualStart += idxAdjustment;
            this._physicalStart += idxAdjustment;
            // Estimate new physical offset based on the virtual start index.
            // adjusts the physical start position to stay in sync with the clamped
            // virtual start index. It's critical not to let this value be
            // more than the scroll position however, since that would result in
            // the physical items not covering the viewport, and leading to
            // _increasePoolIfNeeded to run away creating items to try to fill it.
            this._physicalTop = Math.min(Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage, this._scrollPosition);
            this._update();
        } else if (this._physicalCount > 0) {
            var reusables = this._getReusables(isScrollingDown);
            if (isScrollingDown) {
                this._physicalTop = reusables.physicalTop;
                this._virtualStart += reusables.indexes.length;
                this._physicalStart += reusables.indexes.length;
            } else {
                this._virtualStart -= reusables.indexes.length;
                this._physicalStart -= reusables.indexes.length;
            }
            this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);
            this._debounce("_increasePoolIfNeeded", this._increasePoolIfNeeded.bind(this, 0), (0, _asyncJs.microTask));
        }
    },
    /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */ _getReusables: function(fromTop) {
        var ith, lastIth, offsetContent, physicalItemHeight;
        var idxs = [];
        var protectedOffsetContent = this._hiddenContentSize * this._ratio;
        var virtualStart = this._virtualStart;
        var virtualEnd = this._virtualEnd;
        var physicalCount = this._physicalCount;
        var top = this._physicalTop + this._scrollOffset;
        var bottom = this._physicalBottom + this._scrollOffset;
        // This may be called outside of a scrollHandler, so use last cached position
        var scrollTop = this._scrollPosition;
        var scrollBottom = this._scrollBottom;
        if (fromTop) {
            ith = this._physicalStart;
            lastIth = this._physicalEnd;
            offsetContent = scrollTop - top;
        } else {
            ith = this._physicalEnd;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            lastIth = this._physicalStart;
            offsetContent = bottom - scrollBottom;
        }
        // eslint-disable-next-line no-constant-condition
        while(true){
            physicalItemHeight = this._getPhysicalSizeIncrement(ith);
            offsetContent -= physicalItemHeight;
            if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) break;
            if (fromTop) {
                // Check that index is within the valid range.
                if (virtualEnd + idxs.length + 1 >= this._virtualCount) break;
                // Check that the index is not visible.
                if (top + physicalItemHeight >= scrollTop - this._scrollOffset) break;
                idxs.push(ith);
                top += physicalItemHeight;
                ith = (ith + 1) % physicalCount;
            } else {
                // Check that index is within the valid range.
                if (virtualStart - idxs.length <= 0) break;
                // Check that the index is not visible.
                if (top + this._physicalSize - physicalItemHeight <= scrollBottom) break;
                idxs.push(ith);
                top -= physicalItemHeight;
                ith = ith === 0 ? physicalCount - 1 : ith - 1;
            }
        }
        return {
            indexes: idxs,
            physicalTop: top - this._scrollOffset
        };
    },
    /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */ _update: function(itemSet, movingUp) {
        if (itemSet && itemSet.length === 0 || this._physicalCount === 0) return;
        this._manageFocus();
        this._assignModels(itemSet);
        this._updateMetrics(itemSet);
        // Adjust offset after measuring.
        if (movingUp) while(movingUp.length){
            var idx = movingUp.pop();
            this._physicalTop -= this._getPhysicalSizeIncrement(idx);
        }
        this._positionItems();
        this._updateScrollerSize();
    },
    _isClientFull: function() {
        return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
    },
    /**
   * Increases the pool size.
   */ _increasePoolIfNeeded: function(count) {
        var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);
        nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
        if (this.grid) {
            var correction = nextPhysicalCount % this._itemsPerRow;
            if (correction && nextPhysicalCount - correction <= this._physicalCount) nextPhysicalCount += this._itemsPerRow;
            nextPhysicalCount -= correction;
        }
        var delta = nextPhysicalCount - this._physicalCount;
        var nextIncrease = Math.round(this._physicalCount * 0.5);
        if (delta < 0) return;
        if (delta > 0) {
            var ts = window.performance.now();
            // Concat arrays in place.
            [].push.apply(this._physicalItems, this._createPool(delta));
            // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
            // support it.
            for(var i = 0; i < delta; i++)this._physicalSizes.push(0);
            this._physicalCount += delta;
            // Update the physical start if it needs to preserve the model of the
            // focused item. In this situation, the focused item is currently rendered
            // and its model would have changed after increasing the pool if the
            // physical start remained unchanged.
            if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) this._physicalStart += delta;
            this._update();
            this._templateCost = (window.performance.now() - ts) / delta;
            nextIncrease = Math.round(this._physicalCount * 0.5);
        }
        // The upper bounds is not fixed when dealing with a grid that doesn't
        // fill it's last row with the exact number of items per row.
        if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) ;
        else if (!this._isClientFull()) this._debounce("_increasePoolIfNeeded", this._increasePoolIfNeeded.bind(this, nextIncrease), (0, _asyncJs.microTask));
        else if (this._physicalSize < this._optPhysicalSize) // Yield and increase the pool during idle time until the physical size is
        // optimal.
        this._debounce("_increasePoolIfNeeded", this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), (0, _asyncJs.idlePeriod));
    },
    /**
   * Renders the a new list.
   */ _render: function() {
        if (!this.isAttached || !this._isVisible) return;
        if (this._physicalCount !== 0) {
            var reusables = this._getReusables(true);
            this._physicalTop = reusables.physicalTop;
            this._virtualStart += reusables.indexes.length;
            this._physicalStart += reusables.indexes.length;
            this._update(reusables.indexes);
            this._update();
            this._increasePoolIfNeeded(0);
        } else if (this._virtualCount > 0) {
            // Initial render
            this.updateViewportBoundaries();
            this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
        }
    },
    _gridChanged: function(newGrid, oldGrid) {
        if (typeof oldGrid === "undefined") return;
        this.notifyResize();
        (0, _debounceJs.flush)();
        newGrid && this._updateGridMetrics();
    },
    /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */ _itemsChanged: function(change) {
        if (change.path === "items") {
            this._virtualStart = 0;
            this._physicalTop = 0;
            this._virtualCount = this.items ? this.items.length : 0;
            this._physicalIndexForKey = {};
            this._firstVisibleIndexVal = null;
            this._lastVisibleIndexVal = null;
            this._physicalCount = this._physicalCount || 0;
            this._physicalItems = this._physicalItems || [];
            this._physicalSizes = this._physicalSizes || [];
            this._physicalStart = 0;
            if (this._scrollTop > this._scrollOffset) this._resetScrollPosition(0);
            this._removeFocusedItem();
            this._debounce("_render", this._render, (0, _asyncJs.animationFrame));
        } else if (change.path === "items.splices") {
            this._adjustVirtualIndex(change.value.indexSplices);
            this._virtualCount = this.items ? this.items.length : 0;
            // Only blur if at least one item is added or removed.
            var itemAddedOrRemoved = change.value.indexSplices.some(function(splice) {
                return splice.addedCount > 0 || splice.removed.length > 0;
            });
            if (itemAddedOrRemoved) {
                // Only blur activeElement if it is a descendant of the list (#505,
                // #507).
                var activeElement = this._getActiveElement();
                if (this.contains(activeElement)) activeElement.blur();
            }
            // Render only if the affected index is rendered.
            var affectedIndexRendered = change.value.indexSplices.some(function(splice) {
                return splice.index + splice.addedCount >= this._virtualStart && splice.index <= this._virtualEnd;
            }, this);
            if (!this._isClientFull() || affectedIndexRendered) this._debounce("_render", this._render, (0, _asyncJs.animationFrame));
        } else if (change.path !== "items.length") this._forwardItemPath(change.path, change.value);
    },
    /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */ _iterateItems: function(fn, itemSet) {
        var pidx, vidx, rtn, i;
        if (arguments.length === 2 && itemSet) for(i = 0; i < itemSet.length; i++){
            pidx = itemSet[i];
            vidx = this._computeVidx(pidx);
            if ((rtn = fn.call(this, pidx, vidx)) != null) return rtn;
        }
        else {
            pidx = this._physicalStart;
            vidx = this._virtualStart;
            for(; pidx < this._physicalCount; pidx++, vidx++){
                if ((rtn = fn.call(this, pidx, vidx)) != null) return rtn;
            }
            for(pidx = 0; pidx < this._physicalStart; pidx++, vidx++){
                if ((rtn = fn.call(this, pidx, vidx)) != null) return rtn;
            }
        }
    },
    /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */ _computeVidx: function(pidx) {
        if (pidx >= this._physicalStart) return this._virtualStart + (pidx - this._physicalStart);
        return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
    },
    /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */ _updateMetrics: function(itemSet) {
        // Make sure we distributed all the physical items
        // so we can measure them.
        (0, _debounceJs.flush)();
        var newPhysicalSize = 0;
        var oldPhysicalSize = 0;
        var prevAvgCount = this._physicalAverageCount;
        var prevPhysicalAvg = this._physicalAverage;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._iterateItems((pidx, vidx)=>{
            oldPhysicalSize += this._physicalSizes[pidx];
            this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
            newPhysicalSize += this._physicalSizes[pidx];
            this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
        }, itemSet);
        if (this.grid) {
            this._updateGridMetrics();
            this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
        } else {
            oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
            this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
            this._itemsPerRow = 1;
        }
        // Update the average if it measured something.
        if (this._physicalAverageCount !== prevAvgCount) this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    },
    _updateGridMetrics: function() {
        this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
        this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
        this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
    },
    /**
   * Updates the position of the physical items.
   */ _positionItems: function() {
        this._adjustScrollPosition();
        var y = this._physicalTop;
        if (this.grid) {
            var totalItemWidth = this._itemsPerRow * this._itemWidth;
            var rowOffset = (this._viewportWidth - totalItemWidth) / 2;
            this._iterateItems((pidx, vidx)=>{
                var modulus = vidx % this._itemsPerRow;
                var x = Math.floor(modulus * this._itemWidth + rowOffset);
                if (this._isRTL) x *= -1;
                this.translate3d(x + "px", y + "px", 0, this._physicalItems[pidx]);
                if (this._shouldRenderNextRow(vidx)) y += this._rowHeight;
            });
        } else {
            const order = [];
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this._iterateItems((pidx, vidx)=>{
                const item = this._physicalItems[pidx];
                this.translate3d(0, y + "px", 0, item);
                y += this._physicalSizes[pidx];
                const itemId = item.id;
                if (itemId) order.push(itemId);
            });
            if (order.length) this.setAttribute("aria-owns", order.join(" "));
        }
    },
    _getPhysicalSizeIncrement: function(pidx) {
        if (!this.grid) return this._physicalSizes[pidx];
        if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) return 0;
        return this._rowHeight;
    },
    /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */ _shouldRenderNextRow: function(vidx) {
        return vidx % this._itemsPerRow === this._itemsPerRow - 1;
    },
    /**
   * Adjusts the scroll position when it was overestimated.
   */ _adjustScrollPosition: function() {
        var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0);
        // Note: the delta can be positive or negative.
        if (deltaHeight !== 0) {
            this._physicalTop -= deltaHeight;
            // This may be called outside of a scrollHandler, so use last cached position
            var scrollTop = this._scrollPosition;
            // juking scroll position during interial scrolling on iOS is no bueno
            if (!IOS_TOUCH_SCROLLING && scrollTop > 0) this._resetScrollPosition(scrollTop - deltaHeight);
        }
    },
    /**
   * Sets the position of the scroll.
   */ _resetScrollPosition: function(pos) {
        if (this.scrollTarget && pos >= 0) {
            this._scrollTop = pos;
            this._scrollPosition = this._scrollTop;
        }
    },
    /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */ _updateScrollerSize: function(forceUpdate) {
        if (this.grid) this._estScrollHeight = this._virtualRowCount * this._rowHeight;
        else this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
        forceUpdate = forceUpdate || this._scrollHeight === 0;
        forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
        forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight;
        // Amortize height adjustment, so it won't trigger large repaints too often.
        if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
            this.$.items.style.height = this._estScrollHeight + "px";
            this._scrollHeight = this._estScrollHeight;
        }
    },
    /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */ scrollToIndex: function(idx) {
        if (typeof idx !== "number" || idx < 0 || idx > this.items.length - 1) return;
        (0, _debounceJs.flush)();
        // Items should have been rendered prior scrolling to an index.
        if (this._physicalCount === 0) return;
        idx = this._clamp(idx, 0, this._virtualCount - 1);
        // Update the virtual start only when needed.
        if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
        this._manageFocus();
        this._assignModels();
        this._updateMetrics();
        // Estimate new physical offset.
        this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
        var currentTopItem = this._physicalStart;
        var currentVirtualItem = this._virtualStart;
        var targetOffsetTop = 0;
        var hiddenContentSize = this._hiddenContentSize;
        // scroll to the item as much as we can.
        while(currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize){
            targetOffsetTop += this._getPhysicalSizeIncrement(currentTopItem);
            currentTopItem = (currentTopItem + 1) % this._physicalCount;
            currentVirtualItem += 1;
        }
        this._updateScrollerSize(true);
        this._positionItems();
        this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);
        this._increasePoolIfNeeded(0);
        // clear cached visible index.
        this._firstVisibleIndexVal = null;
        this._lastVisibleIndexVal = null;
    },
    /**
   * Reset the physical average and the average count.
   */ _resetAverage: function() {
        this._physicalAverage = 0;
        this._physicalAverageCount = 0;
    },
    /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */ _resizeHandler: function() {
        this._debounce("_render", ()=>{
            // clear cached visible index.
            this._firstVisibleIndexVal = null;
            this._lastVisibleIndexVal = null;
            if (this._isVisible) {
                this.updateViewportBoundaries();
                // Reinstall the scroll event listener.
                this.toggleScrollListener(true);
                this._resetAverage();
                this._render();
            } else // Uninstall the scroll event listener.
            this.toggleScrollListener(false);
        }, (0, _asyncJs.animationFrame));
    },
    /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */ updateSizeForItem: function(item) {
        return this.updateSizeForIndex(this.items.indexOf(item));
    },
    /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */ updateSizeForIndex: function(index) {
        if (!this._isIndexRendered(index)) return null;
        this._updateMetrics([
            this._getPhysicalIndex(index)
        ]);
        this._positionItems();
        return null;
    },
    /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */ _convertIndexToCompleteRow: function(idx) {
        // when grid == false _itemPerRow can be unset.
        this._itemsPerRow = this._itemsPerRow || 1;
        return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
    },
    _isIndexRendered: function(idx) {
        return idx >= this._virtualStart && idx <= this._virtualEnd;
    },
    _isIndexVisible: function(idx) {
        return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
    },
    _getPhysicalIndex: function(vidx) {
        return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
    },
    _clamp: function(v, min, max) {
        return Math.min(max, Math.max(min, v));
    },
    _debounce: function(name, cb, asyncModule) {
        this._debouncers = this._debouncers || {};
        this._debouncers[name] = (0, _debounceJs.Debouncer).debounce(this._debouncers[name], asyncModule, cb.bind(this));
        (0, _debounceJs.enqueueDebouncer)(this._debouncers[name]);
    }
};

},{"./async.js":"ePy4z","./debounce.js":"8Wgp5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYANF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A11yMixin", ()=>A11yMixin);
const A11yMixin = (superClass)=>class A11yMixin extends superClass {
        static get observers() {
            return [
                "_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"
            ];
        }
        /** @private */ _a11yGetHeaderRowCount(_columnTree) {
            return _columnTree.filter((level)=>level.some((col)=>col.headerRenderer || col.path || col.header)).length;
        }
        /** @private */ _a11yGetFooterRowCount(_columnTree) {
            return _columnTree.filter((level)=>level.some((col)=>col.headerRenderer)).length;
        }
        /** @private */ _a11yUpdateGridSize(size, _columnTree) {
            if (size === undefined || _columnTree === undefined) return;
            const bodyColumns = _columnTree[_columnTree.length - 1];
            this.$.table.setAttribute("aria-rowcount", size + this._a11yGetHeaderRowCount(_columnTree) + this._a11yGetFooterRowCount(_columnTree));
            this.$.table.setAttribute("aria-colcount", bodyColumns && bodyColumns.length || 0);
            this._a11yUpdateHeaderRows();
            this._a11yUpdateFooterRows();
        }
        /** @protected */ _a11yUpdateHeaderRows() {
            Array.from(this.$.header.children).forEach((headerRow, index)=>headerRow.setAttribute("aria-rowindex", index + 1));
        }
        /** @protected */ _a11yUpdateFooterRows() {
            Array.from(this.$.footer.children).forEach((footerRow, index)=>footerRow.setAttribute("aria-rowindex", this._a11yGetHeaderRowCount(this._columnTree) + this.size + index + 1));
        }
        /**
     * @param {!HTMLElement} row
     * @param {number} index
     * @protected
     */ _a11yUpdateRowRowindex(row, index) {
            row.setAttribute("aria-rowindex", index + this._a11yGetHeaderRowCount(this._columnTree) + 1);
        }
        /**
     * @param {!HTMLElement} row
     * @param {boolean} selected
     * @protected
     */ _a11yUpdateRowSelected(row, selected) {
            // Jaws reads selection only for rows, NVDA only for cells
            row.setAttribute("aria-selected", Boolean(selected));
            Array.from(row.children).forEach((cell)=>cell.setAttribute("aria-selected", Boolean(selected)));
        }
        /**
     * @param {!HTMLElement} row
     * @protected
     */ _a11yUpdateRowExpanded(row) {
            if (this.__isRowExpandable(row)) row.setAttribute("aria-expanded", "false");
            else if (this.__isRowCollapsible(row)) row.setAttribute("aria-expanded", "true");
            else row.removeAttribute("aria-expanded");
        }
        /**
     * @param {!HTMLElement} row
     * @param {number} level
     * @protected
     */ _a11yUpdateRowLevel(row, level) {
            // Set level for the expandable rows itself, and all the nested rows.
            if (level > 0 || this.__isRowCollapsible(row) || this.__isRowExpandable(row)) row.setAttribute("aria-level", level + 1);
            else row.removeAttribute("aria-level");
        }
        /**
     * @param {!HTMLElement} row
     * @param {!HTMLElement} detailsCell
     * @protected
     */ _a11ySetRowDetailsCell(row, detailsCell) {
            Array.from(row.children).forEach((cell)=>{
                if (cell !== detailsCell) cell.setAttribute("aria-controls", detailsCell.id);
            });
        }
        /**
     * @param {!HTMLElement} row
     * @param {number} colspan
     * @protected
     */ _a11yUpdateCellColspan(cell, colspan) {
            cell.setAttribute("aria-colspan", Number(colspan));
        }
        /** @protected */ _a11yUpdateSorters() {
            Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((sorter)=>{
                let cellContent = sorter.parentNode;
                while(cellContent && cellContent.localName !== "vaadin-grid-cell-content")cellContent = cellContent.parentNode;
                if (cellContent && cellContent.assignedSlot) {
                    const cell = cellContent.assignedSlot.parentNode;
                    cell.setAttribute("aria-sort", {
                        asc: "ascending",
                        desc: "descending"
                    }[String(sorter.direction)] || "none");
                }
            });
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5elrM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActiveItemMixin", ()=>ActiveItemMixin);
parcelHelpers.export(exports, "isFocusable", ()=>isFocusable);
const ActiveItemMixin = (superClass)=>class ActiveItemMixin extends superClass {
        static get properties() {
            return {
                /**
         * The item user has last interacted with. Turns to `null` after user deactivates
         * the item by re-interacting with the currently active item.
         * @type {GridItem}
         */ activeItem: {
                    type: Object,
                    notify: true,
                    value: null
                }
            };
        }
        ready() {
            super.ready();
            this.$.scroller.addEventListener("click", this._onClick.bind(this));
            this.addEventListener("cell-activate", this._activateItem.bind(this));
            this.addEventListener("row-activate", this._activateItem.bind(this));
        }
        /** @private */ _activateItem(e) {
            const model = e.detail.model;
            const clickedItem = model ? model.item : null;
            if (clickedItem) this.activeItem = !this._itemsEqual(this.activeItem, clickedItem) ? clickedItem : null;
        }
        /**
     * We need to listen to click instead of tap because on mobile safari, the
     * document.activeElement has not been updated (focus has not been shifted)
     * yet at the point when tap event is being executed.
     * @param {!MouseEvent} e
     * @protected
     */ _onClick(e) {
            if (e.defaultPrevented) // Something has handled this click already, e. g., <vaadin-grid-sorter>
            return;
            const path = e.composedPath();
            const cell = path[path.indexOf(this.$.table) - 3];
            if (!cell || cell.getAttribute("part").indexOf("details-cell") > -1) return;
            const cellContent = cell._content;
            const activeElement = this.getRootNode().activeElement;
            const cellContentHasFocus = cellContent.contains(activeElement);
            if (!cellContentHasFocus && !this._isFocusable(e.target)) this.dispatchEvent(new CustomEvent("cell-activate", {
                detail: {
                    model: this.__getRowModel(cell.parentElement)
                }
            }));
        }
        /**
     * @param {!Element} target
     * @return {boolean}
     * @protected
     */ _isFocusable(target) {
            return isFocusable(target);
        }
    };
const isFocusable = (target)=>{
    if (!target.parentNode) return false;
    const focusables = Array.from(target.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((element)=>element.getAttribute("part") !== "cell body-cell");
    const isFocusableElement = focusables.indexOf(target) !== -1;
    return !target.disabled && isFocusableElement;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2dmPT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArrayDataProviderMixin", ()=>ArrayDataProviderMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _arrayDataProviderJs = require("./array-data-provider.js");
const ArrayDataProviderMixin = (superClass)=>class ArrayDataProviderMixin extends superClass {
        static get properties() {
            return {
                /**
         * An array containing the items which will be passed to renderer functions.
         *
         * @type {Array<!GridItem> | undefined}
         */ items: Array
            };
        }
        static get observers() {
            return [
                "__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"
            ];
        }
        /** @private */ __setArrayDataProvider(items) {
            const arrayDataProvider = (0, _arrayDataProviderJs.createArrayDataProvider)(this.items, {});
            arrayDataProvider.__items = items;
            this.setProperties({
                _arrayDataProvider: arrayDataProvider,
                size: items.length,
                dataProvider: arrayDataProvider
            });
        }
        /** @private */ __dataProviderOrItemsChanged(dataProvider, items, isAttached) {
            if (!isAttached) return;
            if (this._arrayDataProvider) {
                // Has an items array data provider beforehand
                if (dataProvider !== this._arrayDataProvider) // A custom data provider was set externally
                this.setProperties({
                    _arrayDataProvider: undefined,
                    items: undefined
                });
                else if (!items) {
                    // The items array was unset
                    this.setProperties({
                        _arrayDataProvider: undefined,
                        dataProvider: undefined,
                        size: 0
                    });
                    this.clearCache();
                } else if (this._arrayDataProvider.__items === items) {
                    // The items array was modified
                    this.clearCache();
                    this.size = this._effectiveSize;
                } else // The items array was replaced
                this.__setArrayDataProvider(items);
            } else if (items) // There was no array data provider before items was set
            this.__setArrayDataProvider(items);
        }
    };

},{"./array-data-provider.js":"hRJza","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRJza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createArrayDataProvider", ()=>createArrayDataProvider);
/**
 * Returns a sub-property of an object
 *
 * @param {string} path dot-separated path to the sub property
 * @param {*} object
 * @returns {*}
 */ function get(path, object) {
    return path.split(".").reduce((obj, property)=>obj[property], object);
}
/**
 * Check array of filters/sorters for paths validity, console.warn invalid items
 * @param {!Array<!GridFilterDefinition | !GridSorterDefinition>} arrayToCheck The array of filters/sorters to check
 * @param {string} action The name of action to include in warning (filtering, sorting)
 * @param {!Array<!GridItem>} items
 */ function checkPaths(arrayToCheck, action, items) {
    if (items.length === 0) return false;
    let result = true;
    for(const i in arrayToCheck){
        const path = arrayToCheck[i].path;
        // skip simple paths
        if (!path || path.indexOf(".") === -1) continue;
        const parentProperty = path.replace(/\.[^.]*$/, ""); // a.b.c -> a.b
        if (get(parentProperty, items[0]) === undefined) {
            console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);
            result = false;
        }
    }
    return result;
}
/**
 * Sorts the given array of items based on the sorting rules and returns the result.
 *
 * @param {Array<any>} items
 * @param {Array<GridSorterDefinition>} items
 * @return {Array<any>}
 */ function multiSort(items, sortOrders) {
    return items.sort((a, b)=>{
        return sortOrders.map((sortOrder)=>{
            if (sortOrder.direction === "asc") return compare(get(sortOrder.path, a), get(sortOrder.path, b));
            else if (sortOrder.direction === "desc") return compare(get(sortOrder.path, b), get(sortOrder.path, a));
            return 0;
        }).reduce((p, n)=>{
            return p !== 0 ? p : n;
        }, 0);
    });
}
/**
 * @param {unknown} value
 * @return {string}
 */ function normalizeEmptyValue(value) {
    if ([
        undefined,
        null
    ].indexOf(value) >= 0) return "";
    else if (isNaN(value)) return value.toString();
    return value;
}
/**
 * @param {unknown} a
 * @param {unknown} b
 * @return {number}
 */ function compare(a, b) {
    a = normalizeEmptyValue(a);
    b = normalizeEmptyValue(b);
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
/**
 * @param {!Array<!GridItem>} items
 * @return {!Array<!GridItem>}
 */ function filter(items, filters) {
    return items.filter((item)=>{
        return filters.every((filter1)=>{
            const value = normalizeEmptyValue(get(filter1.path, item));
            const filterValueLowercase = normalizeEmptyValue(filter1.value).toString().toLowerCase();
            return value.toString().toLowerCase().includes(filterValueLowercase);
        });
    });
}
const createArrayDataProvider = (allItems)=>{
    return (params, callback)=>{
        let items = allItems ? [
            ...allItems
        ] : [];
        if (params.filters && checkPaths(params.filters, "filtering", items)) items = filter(items, params.filters);
        if (Array.isArray(params.sortOrders) && params.sortOrders.length && checkPaths(params.sortOrders, "sorting", items)) items = multiSort(items, params.sortOrders);
        const count = Math.min(items.length, params.pageSize);
        const start = params.page * count;
        const end = start + count;
        const slice = items.slice(start, end);
        callback(slice, items.length);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lA5hx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColumnReorderingMixin", ()=>ColumnReorderingMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _gesturesJs = require("@vaadin/component-base/src/gestures.js");
var _vaadinGridHelpersJs = require("./vaadin-grid-helpers.js");
const ColumnReorderingMixin = (superClass)=>class ColumnReorderingMixin extends superClass {
        static get properties() {
            return {
                /**
         * Set to true to allow column reordering.
         * @attr {boolean} column-reordering-allowed
         * @type {boolean}
         */ columnReorderingAllowed: {
                    type: Boolean,
                    value: false
                },
                /** @private */ _orderBaseScope: {
                    type: Number,
                    value: 10000000
                }
            };
        }
        static get observers() {
            return [
                "_updateOrders(_columnTree, _columnTree.*)"
            ];
        }
        ready() {
            super.ready();
            (0, _gesturesJs.addListener)(this, "track", this._onTrackEvent);
            this._reorderGhost = this.shadowRoot.querySelector('[part="reorder-ghost"]');
            this.addEventListener("touchstart", this._onTouchStart.bind(this));
            this.addEventListener("touchmove", this._onTouchMove.bind(this));
            this.addEventListener("touchend", this._onTouchEnd.bind(this));
            this.addEventListener("contextmenu", this._onContextMenu.bind(this));
        }
        /** @private */ _onContextMenu(e) {
            if (this.hasAttribute("reordering")) e.preventDefault();
        }
        /** @private */ _onTouchStart(e) {
            // Touch event, delay activation by 100ms
            this._startTouchReorderTimeout = setTimeout(()=>{
                this._onTrackStart({
                    detail: {
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }
                });
            }, 100);
        }
        /** @private */ _onTouchMove(e) {
            if (this._draggedColumn) e.preventDefault();
            clearTimeout(this._startTouchReorderTimeout);
        }
        /** @private */ _onTouchEnd() {
            clearTimeout(this._startTouchReorderTimeout);
            this._onTrackEnd();
        }
        /** @private */ _onTrackEvent(e) {
            if (e.detail.state === "start") {
                const path = e.composedPath();
                const headerCell = path[path.indexOf(this.$.header) - 2];
                if (!headerCell || !headerCell._content) // Not a header column
                return;
                if (headerCell._content.contains(this.getRootNode().activeElement)) // Something was focused inside the cell
                return;
                if (this.$.scroller.hasAttribute("column-resizing")) // Resizing is in progress
                return;
                if (!this._touchDevice) // Not a touch device
                this._onTrackStart(e);
            } else if (e.detail.state === "track") this._onTrack(e);
            else if (e.detail.state === "end") this._onTrackEnd(e);
        }
        /** @private */ _onTrackStart(e) {
            if (!this.columnReorderingAllowed) return;
            // Cancel reordering if there are draggable nodes on the event path
            const path = e.composedPath && e.composedPath();
            if (path && path.filter((node)=>node.hasAttribute && node.hasAttribute("draggable"))[0]) return;
            const headerCell = this._cellFromPoint(e.detail.x, e.detail.y);
            if (!headerCell || headerCell.getAttribute("part").indexOf("header-cell") === -1) return;
            this.toggleAttribute("reordering", true);
            this._draggedColumn = headerCell._column;
            while(this._draggedColumn.parentElement.childElementCount === 1)// This is the only column in the group, drag the whole group instead
            this._draggedColumn = this._draggedColumn.parentElement;
            this._setSiblingsReorderStatus(this._draggedColumn, "allowed");
            this._draggedColumn._reorderStatus = "dragging";
            this._updateGhost(headerCell);
            this._reorderGhost.style.visibility = "visible";
            this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
            this._autoScroller();
        }
        /** @private */ _onTrack(e) {
            if (!this._draggedColumn) // Reordering didn’t start. Skip this event.
            return;
            const targetCell = this._cellFromPoint(e.detail.x, e.detail.y);
            if (!targetCell) return;
            const targetColumn = this._getTargetColumn(targetCell, this._draggedColumn);
            if (this._isSwapAllowed(this._draggedColumn, targetColumn) && this._isSwappableByPosition(targetColumn, e.detail.x)) this._swapColumnOrders(this._draggedColumn, targetColumn);
            this._updateGhostPosition(e.detail.x, this._touchDevice ? e.detail.y - 50 : e.detail.y);
            this._lastDragClientX = e.detail.x;
        }
        /** @private */ _onTrackEnd() {
            if (!this._draggedColumn) // Reordering didn’t start. Skip this event.
            return;
            this.toggleAttribute("reordering", false);
            this._draggedColumn._reorderStatus = "";
            this._setSiblingsReorderStatus(this._draggedColumn, "");
            this._draggedColumn = null;
            this._lastDragClientX = null;
            this._reorderGhost.style.visibility = "hidden";
            this.dispatchEvent(new CustomEvent("column-reorder", {
                detail: {
                    columns: this._getColumnsInOrder()
                }
            }));
        }
        /**
     * @return {!Array<!GridColumn>}
     * @protected
     */ _getColumnsInOrder() {
            return this._columnTree.slice(0).pop().filter((c)=>!c.hidden).sort((b, a)=>b._order - a._order);
        }
        /**
     * @param {number} x
     * @param {number} y
     * @return {HTMLElement | undefined}
     * @protected
     */ _cellFromPoint(x, y) {
            x = x || 0;
            y = y || 0;
            if (!this._draggedColumn) this.$.scroller.toggleAttribute("no-content-pointer-events", true);
            const cell = this.shadowRoot.elementFromPoint(x, y);
            this.$.scroller.toggleAttribute("no-content-pointer-events", false);
            // Make sure the element is actually a cell
            if (cell && cell._column) return cell;
        }
        /**
     * @param {number} eventClientX
     * @param {number} eventClientY
     * @protected
     */ _updateGhostPosition(eventClientX, eventClientY) {
            const ghostRect = this._reorderGhost.getBoundingClientRect();
            // // This is where we want to position the ghost
            const targetLeft = eventClientX - ghostRect.width / 2;
            const targetTop = eventClientY - ghostRect.height / 2;
            // Current position
            const _left = parseInt(this._reorderGhost._left || 0);
            const _top = parseInt(this._reorderGhost._top || 0);
            // Reposition the ghost
            this._reorderGhost._left = _left - (ghostRect.left - targetLeft);
            this._reorderGhost._top = _top - (ghostRect.top - targetTop);
            this._reorderGhost.style.transform = `translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`;
        }
        /**
     * @param {!HTMLElement} cell
     * @return {!HTMLElement}
     * @protected
     */ _updateGhost(cell) {
            const ghost = this._reorderGhost;
            ghost.textContent = cell._content.innerText;
            const style = window.getComputedStyle(cell);
            [
                "boxSizing",
                "display",
                "width",
                "height",
                "background",
                "alignItems",
                "padding",
                "border",
                "flex-direction",
                "overflow", 
            ].forEach((propertyName)=>ghost.style[propertyName] = style[propertyName]);
            return ghost;
        }
        /** @private */ _updateOrders(columnTree, splices) {
            if (columnTree === undefined || splices === undefined) return;
            // Reset all column orders
            columnTree[0].forEach((column)=>column._order = 0);
            // Set order numbers to top-level columns
            (0, _vaadinGridHelpersJs.updateColumnOrders)(columnTree[0], this._orderBaseScope, 0);
        }
        /**
     * @param {!GridColumn} column
     * @param {string} status
     * @protected
     */ _setSiblingsReorderStatus(column, status) {
            Array.from(column.parentNode.children).filter((child)=>/column/.test(child.localName) && this._isSwapAllowed(child, column)).forEach((sibling)=>sibling._reorderStatus = status);
        }
        /** @protected */ _autoScroller() {
            if (this._lastDragClientX) {
                const rightDiff = this._lastDragClientX - this.getBoundingClientRect().right + 50;
                const leftDiff = this.getBoundingClientRect().left - this._lastDragClientX + 50;
                if (rightDiff > 0) this.$.table.scrollLeft += rightDiff / 10;
                else if (leftDiff > 0) this.$.table.scrollLeft -= leftDiff / 10;
            }
            if (this._draggedColumn) setTimeout(()=>this._autoScroller(), 10);
        }
        /**
     * @param {GridColumn | undefined} column1
     * @param {GridColumn | undefined} column2
     * @return {boolean | undefined}
     * @protected
     */ _isSwapAllowed(column1, column2) {
            if (column1 && column2) {
                const differentColumns = column1 !== column2;
                const sameParent = column1.parentElement === column2.parentElement;
                const sameFrozen = column1.frozen === column2.frozen;
                return differentColumns && sameParent && sameFrozen;
            }
        }
        /**
     * @param {!GridColumn} targetColumn
     * @param {number} clientX
     * @return {boolean}
     * @protected
     */ _isSwappableByPosition(targetColumn, clientX) {
            const targetCell = Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter((cell)=>targetColumn.contains(cell._column))[0];
            const sourceCellRect = this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect();
            const targetRect = targetCell.getBoundingClientRect();
            if (targetRect.left > sourceCellRect.left) return clientX > targetRect.right - sourceCellRect.width;
            return clientX < targetRect.left + sourceCellRect.width;
        }
        /**
     * @param {!GridColumn} column1
     * @param {!GridColumn} column2
     * @protected
     */ _swapColumnOrders(column1, column2) {
            const _order = column1._order;
            column1._order = column2._order;
            column2._order = _order;
            this._updateLastFrozen();
            this._updateFirstAndLastColumn();
        }
        /**
     * @param {HTMLElement | undefined} targetCell
     * @param {GridColumn} draggedColumn
     * @return {GridColumn | undefined}
     * @protected
     */ _getTargetColumn(targetCell, draggedColumn) {
            if (targetCell && draggedColumn) {
                let candidate = targetCell._column;
                while(candidate.parentElement !== draggedColumn.parentElement && candidate !== this)candidate = candidate.parentElement;
                if (candidate.parentElement === draggedColumn.parentElement) return candidate;
                return targetCell._column;
            }
        }
    };

},{"@vaadin/component-base/src/gestures.js":"7mUb8","./vaadin-grid-helpers.js":"861fZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"861fZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * @param {Array<Object>} columns array of columns to be modified
 * @param {number} scope multiplier added to base order for each column
 * @param {number} baseOrder base number used for order
 */ parcelHelpers.export(exports, "updateColumnOrders", ()=>updateColumnOrders);
function updateColumnOrders(columns, scope, baseOrder) {
    let c = 1;
    columns.forEach((column)=>{
        // avoid multiples of 10 because they introduce and extra zero and
        // causes the underlying calculations for child order goes wrong
        if (c % 10 === 0) c += 1;
        column._order = baseOrder + c * scope;
        c += 1;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbeiA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColumnResizingMixin", ()=>ColumnResizingMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _gesturesJs = require("@vaadin/component-base/src/gestures.js");
const ColumnResizingMixin = (superClass)=>class ColumnResizingMixin extends superClass {
        ready() {
            super.ready();
            const scroller = this.$.scroller;
            (0, _gesturesJs.addListener)(scroller, "track", this._onHeaderTrack.bind(this));
            // Disallow scrolling while resizing
            scroller.addEventListener("touchmove", (e)=>scroller.hasAttribute("column-resizing") && e.preventDefault());
            // Disable contextmenu on any resize separator.
            scroller.addEventListener("contextmenu", (e)=>e.target.getAttribute("part") == "resize-handle" && e.preventDefault());
            // Disable native cell focus when resizing
            scroller.addEventListener("mousedown", (e)=>e.target.getAttribute("part") === "resize-handle" && e.preventDefault());
        }
        /** @private */ _onHeaderTrack(e) {
            const handle = e.target;
            if (handle.getAttribute("part") === "resize-handle") {
                const cell1 = handle.parentElement;
                let column1 = cell1._column;
                this.$.scroller.toggleAttribute("column-resizing", true);
                // Get the target column to resize
                while(column1.localName === "vaadin-grid-column-group")column1 = Array.prototype.slice.call(column1._childColumns, 0).sort(function(a, b) {
                    return a._order - b._order;
                }).filter(function(column) {
                    return !column.hidden;
                }).pop();
                const columnRowCells = Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));
                const targetCell = columnRowCells.filter((cell)=>cell._column === column1)[0];
                // Resize the target column
                if (targetCell.offsetWidth) {
                    const style = getComputedStyle(targetCell._content);
                    const minWidth = 10 + parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth) + parseInt(style.borderRightWidth) + parseInt(style.marginLeft) + parseInt(style.marginRight);
                    const maxWidth = targetCell.offsetWidth + (this.__isRTL ? targetCell.getBoundingClientRect().left - e.detail.x : e.detail.x - targetCell.getBoundingClientRect().right);
                    column1.width = Math.max(minWidth, maxWidth) + "px";
                    column1.flexGrow = 0;
                }
                // Fix width and flex-grow for all preceding columns
                columnRowCells.sort(function(a, b) {
                    return a._column._order - b._column._order;
                }).forEach(function(cell, index, array) {
                    if (index < array.indexOf(targetCell)) {
                        cell._column.width = cell.offsetWidth + "px";
                        cell._column.flexGrow = 0;
                    }
                });
                if (e.detail.state === "end") {
                    this.$.scroller.toggleAttribute("column-resizing", false);
                    this.dispatchEvent(new CustomEvent("column-resize", {
                        detail: {
                            resizedColumn: column1
                        }
                    }));
                }
                // Notify resize
                this._resizeHandler();
            }
        }
    };

},{"@vaadin/component-base/src/gestures.js":"7mUb8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Qlf4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ItemCache", ()=>ItemCache);
parcelHelpers.export(exports, "DataProviderMixin", ()=>DataProviderMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _asyncJs = require("@vaadin/component-base/src/async.js");
var _debounceJs = require("@vaadin/component-base/src/debounce.js");
const ItemCache = class ItemCache1 {
    /**
   * @param {!HTMLElement} grid
   * @param {!ItemCache | undefined} parentCache
   * @param {!GridItem | undefined} parentItem
   */ constructor(grid, parentCache, parentItem){
        /** @type {!HTMLElement} */ this.grid = grid;
        /** @type {!ItemCache | undefined} */ this.parentCache = parentCache;
        /** @type {!GridItem | undefined} */ this.parentItem = parentItem;
        /** @type {object} */ this.itemCaches = {};
        /** @type {object} */ this.items = {};
        /** @type {number} */ this.effectiveSize = 0;
        /** @type {number} */ this.size = 0;
        /** @type {object} */ this.pendingRequests = {};
    }
    /**
   * @return {boolean}
   */ isLoading() {
        return Boolean(Object.keys(this.pendingRequests).length || Object.keys(this.itemCaches).filter((index)=>{
            return this.itemCaches[index].isLoading();
        })[0]);
    }
    /**
   * @param {number} index
   * @return {!GridItem | undefined}
   */ getItemForIndex(index) {
        const { cache , scaledIndex  } = this.getCacheAndIndex(index);
        return cache.items[scaledIndex];
    }
    updateSize() {
        this.effectiveSize = !this.parentItem || this.grid._isExpanded(this.parentItem) ? this.size + Object.keys(this.itemCaches).reduce((prev, curr)=>{
            const subCache = this.itemCaches[curr];
            subCache.updateSize();
            return prev + subCache.effectiveSize;
        }, 0) : 0;
    }
    /**
   * @param {number} scaledIndex
   */ ensureSubCacheForScaledIndex(scaledIndex) {
        if (!this.itemCaches[scaledIndex]) {
            const subCache = new ItemCache1(this.grid, this, this.items[scaledIndex]);
            this.itemCaches[scaledIndex] = subCache;
            this.grid._loadPage(0, subCache);
        }
    }
    /**
   * @param {number} index
   * @return {{cache: !ItemCache, scaledIndex: number}}
   */ getCacheAndIndex(index) {
        let thisLevelIndex = index;
        const keys = Object.keys(this.itemCaches);
        for(let i = 0; i < keys.length; i++){
            const expandedIndex = Number(keys[i]);
            const subCache = this.itemCaches[expandedIndex];
            if (thisLevelIndex <= expandedIndex) return {
                cache: this,
                scaledIndex: thisLevelIndex
            };
            else if (thisLevelIndex <= expandedIndex + subCache.effectiveSize) return subCache.getCacheAndIndex(thisLevelIndex - expandedIndex - 1);
            thisLevelIndex -= subCache.effectiveSize;
        }
        return {
            cache: this,
            scaledIndex: thisLevelIndex
        };
    }
};
const DataProviderMixin = (superClass)=>class DataProviderMixin extends superClass {
        static get properties() {
            return {
                /**
         * The number of root-level items in the grid.
         * @attr {number} size
         * @type {number}
         */ size: {
                    type: Number,
                    notify: true
                },
                /**
         * Number of items fetched at a time from the dataprovider.
         * @attr {number} page-size
         * @type {number}
         */ pageSize: {
                    type: Number,
                    value: 50,
                    observer: "_pageSizeChanged"
                },
                /**
         * Function that provides items lazily. Receives arguments `params`, `callback`
         *
         * `params.page` Requested page index
         *
         * `params.pageSize` Current page size
         *
         * `params.filters` Currently applied filters
         *
         * `params.sortOrders` Currently applied sorting orders
         *
         * `params.parentItem` When tree is used, and sublevel items
         * are requested, reference to parent item of the requested sublevel.
         * Otherwise `undefined`.
         *
         * `callback(items, size)` Callback function with arguments:
         *   - `items` Current page of items
         *   - `size` Total number of items. When tree sublevel items
         *     are requested, total number of items in the requested sublevel.
         *     Optional when tree is not used, required for tree.
         *
         * @type {GridDataProvider | null | undefined}
         */ dataProvider: {
                    type: Object,
                    notify: true,
                    observer: "_dataProviderChanged"
                },
                /**
         * `true` while data is being requested from the data provider.
         */ loading: {
                    type: Boolean,
                    notify: true,
                    readOnly: true,
                    reflectToAttribute: true
                },
                /**
         * @type {!ItemCache}
         * @protected
         */ _cache: {
                    type: Object,
                    value: function() {
                        const cache = new ItemCache(this);
                        return cache;
                    }
                },
                /**
         * @protected
         */ _hasData: {
                    type: Boolean,
                    value: false
                },
                /**
         * Path to an item sub-property that indicates whether the item has child items.
         * @attr {string} item-has-children-path
         */ itemHasChildrenPath: {
                    type: String,
                    value: "children"
                },
                /**
         * Path to an item sub-property that identifies the item.
         * @attr {string} item-id-path
         */ itemIdPath: {
                    type: String,
                    value: null
                },
                /**
         * An array that contains the expanded items.
         * @type {!Array<!GridItem>}
         */ expandedItems: {
                    type: Object,
                    notify: true,
                    value: ()=>[]
                },
                /**
         * @private
         */ __expandedKeys: {
                    type: Object,
                    computed: "__computeExpandedKeys(itemIdPath, expandedItems.*)"
                }
            };
        }
        static get observers() {
            return [
                "_sizeChanged(size)",
                "_expandedItemsChanged(expandedItems.*)"
            ];
        }
        /** @private */ _sizeChanged(size) {
            const delta = size - this._cache.size;
            this._cache.size += delta;
            this._cache.effectiveSize += delta;
            this._effectiveSize = this._cache.effectiveSize;
        }
        /**
     * @param {number} index
     * @param {HTMLElement} el
     * @protected
     */ _getItem(index, el) {
            if (index >= this._effectiveSize) return;
            el.index = index;
            const { cache , scaledIndex  } = this._cache.getCacheAndIndex(index);
            const item = cache.items[scaledIndex];
            if (item) {
                el.toggleAttribute("loading", false);
                this._updateItem(el, item);
                if (this._isExpanded(item)) cache.ensureSubCacheForScaledIndex(scaledIndex);
            } else {
                el.toggleAttribute("loading", true);
                this._loadPage(this._getPageForIndex(scaledIndex), cache);
            }
        }
        /**
     * Returns a value that identifies the item. Uses `itemIdPath` if available.
     * Can be customized by overriding.
     * @param {!GridItem} item
     * @return {!GridItem | !unknown}
     */ getItemId(item) {
            return this.itemIdPath ? this.get(this.itemIdPath, item) : item;
        }
        /**
     * @param {!GridItem} item
     * @return {boolean}
     * @protected
     */ _isExpanded(item) {
            return this.__expandedKeys.has(this.getItemId(item));
        }
        /** @private */ _expandedItemsChanged() {
            this._cache.updateSize();
            this._effectiveSize = this._cache.effectiveSize;
            this.__updateVisibleRows();
        }
        /** @private */ __computeExpandedKeys(itemIdPath, expandedItems) {
            const expanded = expandedItems.base || [];
            const expandedKeys = new Set();
            expanded.forEach((item)=>{
                expandedKeys.add(this.getItemId(item));
            });
            return expandedKeys;
        }
        /**
     * Expands the given item tree.
     * @param {!GridItem} item
     */ expandItem(item) {
            if (!this._isExpanded(item)) this.expandedItems = [
                ...this.expandedItems,
                item
            ];
        }
        /**
     * Collapses the given item tree.
     * @param {!GridItem} item
     */ collapseItem(item) {
            if (this._isExpanded(item)) this.expandedItems = this.expandedItems.filter((i)=>!this._itemsEqual(i, item));
        }
        /**
     * @param {number} index
     * @return {number}
     * @protected
     */ _getIndexLevel(index) {
            let { cache  } = this._cache.getCacheAndIndex(index);
            let level = 0;
            while(cache.parentCache){
                cache = cache.parentCache;
                level += 1;
            }
            return level;
        }
        /**
     * @param {number} page
     * @param {ItemCache} cache
     * @protected
     */ _loadPage(page, cache) {
            // make sure same page isn't requested multiple times.
            if (!cache.pendingRequests[page] && this.dataProvider) {
                this._setLoading(true);
                cache.pendingRequests[page] = true;
                const params = {
                    page,
                    pageSize: this.pageSize,
                    sortOrders: this._mapSorters(),
                    filters: this._mapFilters(),
                    parentItem: cache.parentItem
                };
                this.dataProvider(params, (items, size)=>{
                    if (size !== undefined) cache.size = size;
                    else if (params.parentItem) cache.size = items.length;
                    const currentItems = Array.from(this.$.items.children).map((row)=>row._item);
                    // Populate the cache with new items
                    items.forEach((item, itemsIndex)=>{
                        const itemIndex = page * this.pageSize + itemsIndex;
                        cache.items[itemIndex] = item;
                        if (this._isExpanded(item) && currentItems.indexOf(item) > -1) // Force synchronous data request for expanded item sub-cache
                        cache.ensureSubCacheForScaledIndex(itemIndex);
                    });
                    this._hasData = true;
                    delete cache.pendingRequests[page];
                    this._debouncerApplyCachedData = (0, _debounceJs.Debouncer).debounce(this._debouncerApplyCachedData, (0, _asyncJs.timeOut).after(0), ()=>{
                        this._setLoading(false);
                        this._cache.updateSize();
                        this._effectiveSize = this._cache.effectiveSize;
                        Array.from(this.$.items.children).filter((row)=>!row.hidden).forEach((row)=>{
                            const cachedItem = this._cache.getItemForIndex(row.index);
                            if (cachedItem) this._getItem(row.index, row);
                        });
                        this.__scrollToPendingIndex();
                    });
                    if (!this._cache.isLoading()) this._debouncerApplyCachedData.flush();
                    this.__itemsReceived();
                });
            }
        }
        /**
     * @param {number} index
     * @return {number}
     * @private
     */ _getPageForIndex(index) {
            return Math.floor(index / this.pageSize);
        }
        /**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */ clearCache() {
            this._cache = new ItemCache(this);
            this._cache.size = this.size || 0;
            this._cache.updateSize();
            this._hasData = false;
            this.__updateVisibleRows();
            if (!this._effectiveSize) this._loadPage(0, this._cache);
        }
        /** @private */ _pageSizeChanged(pageSize, oldPageSize) {
            if (oldPageSize !== undefined && pageSize !== oldPageSize) this.clearCache();
        }
        /** @protected */ _checkSize() {
            if (this.size === undefined && this._effectiveSize === 0) console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`\u2019s `callback` call.");
        }
        /** @private */ _dataProviderChanged(dataProvider, oldDataProvider) {
            if (oldDataProvider !== undefined) this.clearCache();
            this._ensureFirstPageLoaded();
            this._debouncerCheckSize = (0, _debounceJs.Debouncer).debounce(this._debouncerCheckSize, (0, _asyncJs.timeOut).after(2000), this._checkSize.bind(this));
        }
        /** @protected */ _ensureFirstPageLoaded() {
            if (!this._hasData) // load data before adding rows to make sure they have content when
            // rendered for the first time.
            this._loadPage(0, this._cache);
        }
        /**
     * @param {!GridItem} item1
     * @param {!GridItem} item2
     * @return {boolean}
     * @protected
     */ _itemsEqual(item1, item2) {
            return this.getItemId(item1) === this.getItemId(item2);
        }
        /**
     * @param {!GridItem} item
     * @param {!Array<!GridItem>} array
     * @return {number}
     * @protected
     */ _getItemIndexInArray(item, array) {
            let result = -1;
            array.forEach((i, idx)=>{
                if (this._itemsEqual(i, item)) result = idx;
            });
            return result;
        }
        scrollToIndex(index) {
            super.scrollToIndex(index);
            if (!isNaN(index) && (this._cache.isLoading() || !this.clientHeight)) this.__pendingScrollToIndex = index;
        }
        __scrollToPendingIndex() {
            if (this.__pendingScrollToIndex && this.$.items.children.length) {
                const index = this.__pendingScrollToIndex;
                delete this.__pendingScrollToIndex;
                this.scrollToIndex(index);
            }
        }
    };

},{"@vaadin/component-base/src/async.js":"ePy4z","@vaadin/component-base/src/debounce.js":"8Wgp5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wBVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DragAndDropMixin", ()=>DragAndDropMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ const DropMode = {
    BETWEEN: "between",
    ON_TOP: "on-top",
    ON_TOP_OR_BETWEEN: "on-top-or-between",
    ON_GRID: "on-grid"
};
const DropLocation = {
    ON_TOP: "on-top",
    ABOVE: "above",
    BELOW: "below",
    EMPTY: "empty"
};
const DragAndDropMixin = (superClass)=>class DragAndDropMixin extends superClass {
        static get properties() {
            return {
                /**
         * Defines the locations within the Grid row where an element can be dropped.
         *
         * Possible values are:
         * - `between`: The drop event can happen between Grid rows.
         * - `on-top`: The drop event can happen on top of Grid rows.
         * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
         * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
         * @attr {between|on-top|on-top-or-between|on-grid} drop-mode
         * @type {GridDropMode | null | undefined}
         */ dropMode: String,
                /**
         * Marks the grid's rows to be available for dragging.
         * @attr {boolean} rows-draggable
         */ rowsDraggable: Boolean,
                /**
         * A function that filters dragging of specific grid rows. The return value should be false
         * if dragging of the row should be disabled.
         *
         * Receives one argument:
         * - `model` The object with the properties related with
         *   the rendered item, contains:
         *   - `model.index` The index of the item.
         *   - `model.item` The item.
         *   - `model.expanded` Sublevel toggle state.
         *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
         *   - `model.selected` Selected state.
         *
         * @type {GridDragAndDropFilter | null | undefined}
         */ dragFilter: Function,
                /**
         * A function that filters dropping on specific grid rows. The return value should be false
         * if dropping on the row should be disabled.
         *
         * Receives one argument:
         * - `model` The object with the properties related with
         *   the rendered item, contains:
         *   - `model.index` The index of the item.
         *   - `model.item` The item.
         *   - `model.expanded` Sublevel toggle state.
         *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
         *   - `model.selected` Selected state.
         *
         * @type {GridDragAndDropFilter | null | undefined}
         */ dropFilter: Function,
                /** @private */ __dndAutoScrollThreshold: {
                    value: 50
                }
            };
        }
        static get observers() {
            return [
                "_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"
            ];
        }
        /** @protected */ ready() {
            super.ready();
            this.$.table.addEventListener("dragstart", this._onDragStart.bind(this));
            this.$.table.addEventListener("dragend", this._onDragEnd.bind(this));
            this.$.table.addEventListener("dragover", this._onDragOver.bind(this));
            this.$.table.addEventListener("dragleave", this._onDragLeave.bind(this));
            this.$.table.addEventListener("drop", this._onDrop.bind(this));
            this.$.table.addEventListener("dragenter", (e)=>{
                if (this.dropMode) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        }
        /** @private */ _onDragStart(e) {
            if (this.rowsDraggable) {
                let row1 = e.target;
                if (row1.localName === "vaadin-grid-cell-content") // The draggable node is the cell content element on browsers that support native shadow
                row1 = row1.assignedSlot.parentNode.parentNode;
                if (row1.parentNode !== this.$.items) return;
                e.stopPropagation();
                this.toggleAttribute("dragging-rows", true);
                if (this._safari) {
                    // Safari doesn't position drag images from transformed
                    // elements properly so we need to switch to use top temporarily
                    const transform = row1.style.transform;
                    row1.style.top = /translateY\((.*)\)/.exec(transform)[1];
                    row1.style.transform = "none";
                    requestAnimationFrame(()=>{
                        row1.style.top = "";
                        row1.style.transform = transform;
                    });
                }
                const rowRect = row1.getBoundingClientRect();
                if (this._ios) e.dataTransfer.setDragImage(row1);
                else e.dataTransfer.setDragImage(row1, e.clientX - rowRect.left, e.clientY - rowRect.top);
                let rows = [
                    row1
                ];
                if (this._isSelected(row1._item)) rows = this.__getViewportRows().filter((row)=>this._isSelected(row._item)).filter((row)=>!this.dragFilter || this.dragFilter(this.__getRowModel(row)));
                // Set the default transfer data
                e.dataTransfer.setData("text", this.__formatDefaultTransferData(rows));
                row1.setAttribute("dragstart", rows.length > 1 ? rows.length : "");
                this.style.setProperty("--_grid-drag-start-x", `${e.clientX - rowRect.left + 20}px`);
                this.style.setProperty("--_grid-drag-start-y", `${e.clientY - rowRect.top + 10}px`);
                requestAnimationFrame(()=>{
                    row1.removeAttribute("dragstart");
                    this.updateStyles({
                        "--_grid-drag-start-x": "",
                        "--_grid-drag-start-y": ""
                    });
                });
                const event = new CustomEvent("grid-dragstart", {
                    detail: {
                        draggedItems: rows.map((row)=>row._item),
                        setDragData: (type, data)=>e.dataTransfer.setData(type, data),
                        setDraggedItemsCount: (count)=>row1.setAttribute("dragstart", count)
                    }
                });
                event.originalEvent = e;
                this.dispatchEvent(event);
            }
        }
        /** @private */ _onDragEnd(e) {
            this.toggleAttribute("dragging-rows", false);
            e.stopPropagation();
            const event = new CustomEvent("grid-dragend");
            event.originalEvent = e;
            this.dispatchEvent(event);
        }
        /** @private */ _onDragLeave(e) {
            e.stopPropagation();
            this._clearDragStyles();
        }
        /** @private */ _onDragOver(e) {
            if (this.dropMode) {
                this._dropLocation = undefined;
                this._dragOverItem = undefined;
                if (this.__dndAutoScroll(e.clientY)) {
                    this._clearDragStyles();
                    return;
                }
                let row3 = e.composedPath().filter((node)=>node.localName === "tr")[0];
                if (!this._effectiveSize || this.dropMode === DropMode.ON_GRID) // The grid is empty or "on-grid" drop mode was used, always default to "empty"
                this._dropLocation = DropLocation.EMPTY;
                else if (!row3 || row3.parentNode !== this.$.items) {
                    // The dragover didn't occur on a body row but the grid has items
                    if (row3) // The dragover occurred over a header/footer row
                    return;
                    else if (this.dropMode === DropMode.BETWEEN || this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
                        // The drop mode allows setting the last row as the drag over item
                        row3 = Array.from(this.$.items.children).filter((row)=>!row.hidden).pop();
                        this._dropLocation = DropLocation.BELOW;
                    } else // Drop mode on-top used but the dragover didn't occur over one of the existing rows
                    return;
                } else {
                    // The dragover occurred on a body row, determine the drop location from coordinates
                    const rowRect = row3.getBoundingClientRect();
                    this._dropLocation = DropLocation.ON_TOP;
                    if (this.dropMode === DropMode.BETWEEN) {
                        const dropAbove = e.clientY - rowRect.top < rowRect.bottom - e.clientY;
                        this._dropLocation = dropAbove ? DropLocation.ABOVE : DropLocation.BELOW;
                    } else if (this.dropMode === DropMode.ON_TOP_OR_BETWEEN) {
                        if (e.clientY - rowRect.top < rowRect.height / 3) this._dropLocation = DropLocation.ABOVE;
                        else if (e.clientY - rowRect.top > rowRect.height / 3 * 2) this._dropLocation = DropLocation.BELOW;
                    }
                }
                if (row3 && row3.hasAttribute("drop-disabled")) {
                    this._dropLocation = undefined;
                    return;
                }
                e.stopPropagation();
                e.preventDefault();
                if (this._dropLocation === DropLocation.EMPTY) this.toggleAttribute("dragover", true);
                else if (row3) {
                    this._dragOverItem = row3._item;
                    if (row3.getAttribute("dragover") !== this._dropLocation) row3.setAttribute("dragover", this._dropLocation);
                } else this._clearDragStyles();
            }
        }
        /** @private */ __dndAutoScroll(clientY) {
            if (this.__dndAutoScrolling) return true;
            const headerBottom = this.$.header.getBoundingClientRect().bottom;
            const footerTop = this.$.footer.getBoundingClientRect().top;
            const topDiff = headerBottom - clientY + this.__dndAutoScrollThreshold;
            const bottomDiff = clientY - footerTop + this.__dndAutoScrollThreshold;
            let scrollTopDelta = 0;
            if (bottomDiff > 0) scrollTopDelta = bottomDiff * 2;
            else if (topDiff > 0) scrollTopDelta = -topDiff * 2;
            if (scrollTopDelta) {
                const scrollTop = this.$.table.scrollTop;
                this.$.table.scrollTop += scrollTopDelta;
                const scrollTopChanged = scrollTop !== this.$.table.scrollTop;
                if (scrollTopChanged) {
                    this.__dndAutoScrolling = true;
                    // Disallow more auto-scrolls within 20ms
                    setTimeout(()=>this.__dndAutoScrolling = false, 20);
                    return true;
                }
            }
        }
        /** @private */ __getViewportRows() {
            const headerBottom = this.$.header.getBoundingClientRect().bottom;
            const footerTop = this.$.footer.getBoundingClientRect().top;
            return Array.from(this.$.items.children).filter((row)=>{
                const rowRect = row.getBoundingClientRect();
                return rowRect.bottom > headerBottom && rowRect.top < footerTop;
            });
        }
        /** @protected */ _clearDragStyles() {
            this.removeAttribute("dragover");
            Array.from(this.$.items.children).forEach((row)=>row.removeAttribute("dragover"));
        }
        /** @private */ _onDrop(e) {
            if (this.dropMode) {
                e.stopPropagation();
                e.preventDefault();
                const dragData = e.dataTransfer.types && Array.from(e.dataTransfer.types).map((type)=>{
                    return {
                        type,
                        data: e.dataTransfer.getData(type)
                    };
                });
                this._clearDragStyles();
                const event = new CustomEvent("grid-drop", {
                    bubbles: e.bubbles,
                    cancelable: e.cancelable,
                    detail: {
                        dropTargetItem: this._dragOverItem,
                        dropLocation: this._dropLocation,
                        dragData
                    }
                });
                event.originalEvent = e;
                this.dispatchEvent(event);
            }
        }
        /** @private */ __formatDefaultTransferData(rows) {
            return rows.map((row)=>{
                return Array.from(row.children).filter((cell)=>!cell.hidden && cell.getAttribute("part").indexOf("details-cell") === -1).sort((a, b)=>{
                    return a._column._order > b._column._order ? 1 : -1;
                }).map((cell)=>cell._content.textContent.trim()).filter((content)=>content).join("	");
            }).join("\n");
        }
        /** @private */ _dragDropAccessChanged() {
            this.filterDragAndDrop();
        }
        /**
     * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
     * If the filter depends on varying conditions, you may need to
     * call this function manually in order to update the draggability when
     * the conditions change.
     */ filterDragAndDrop() {
            Array.from(this.$.items.children).filter((row)=>!row.hidden).forEach((row)=>{
                this._filterDragAndDrop(row, this.__getRowModel(row));
            });
        }
        /**
     * @param {!HTMLElement} row
     * @param {!GridItemModel} model
     * @protected
     */ _filterDragAndDrop(row, model) {
            const loading = this.loading || row.hasAttribute("loading");
            const dragDisabled = !this.rowsDraggable || loading || this.dragFilter && !this.dragFilter(model);
            const dropDisabled = !this.dropMode || loading || this.dropFilter && !this.dropFilter(model);
            const draggableElements = Array.from(row.children).map((cell)=>cell._content);
            draggableElements.forEach((e)=>{
                if (dragDisabled) e.removeAttribute("draggable");
                else e.setAttribute("draggable", true);
            });
            row.toggleAttribute("drag-disabled", !!dragDisabled);
            row.toggleAttribute("drop-disabled", !!dropDisabled);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRzDn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DynamicColumnsMixin", ()=>DynamicColumnsMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _flattenedNodesObserverJs = require("@polymer/polymer/lib/utils/flattened-nodes-observer.js");
var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _asyncJs = require("@vaadin/component-base/src/async.js");
var _debounceJs = require("@vaadin/component-base/src/debounce.js");
const DynamicColumnsMixin = (superClass)=>class DynamicColumnsMixin extends superClass {
        static get properties() {
            return {
                /**
         * @protected
         */ _columnTree: Object
            };
        }
        /** @protected */ ready() {
            super.ready();
            this._addNodeObserver();
        }
        /** @private */ _hasColumnGroups(columns) {
            for(let i = 0; i < columns.length; i++){
                if (columns[i].localName === "vaadin-grid-column-group") return true;
            }
            return false;
        }
        /**
     * @param {!GridColumnGroup} el
     * @return {!Array<!GridColumn>}
     * @protected
     */ _getChildColumns(el) {
            return (0, _flattenedNodesObserverJs.FlattenedNodesObserver).getFlattenedNodes(el).filter(this._isColumnElement);
        }
        /** @private */ _flattenColumnGroups(columns) {
            return columns.map((col)=>{
                if (col.localName === "vaadin-grid-column-group") return this._getChildColumns(col);
                return [
                    col
                ];
            }).reduce((prev, curr)=>{
                return prev.concat(curr);
            }, []);
        }
        /** @private */ _getColumnTree() {
            const rootColumns = (0, _flattenedNodesObserverJs.FlattenedNodesObserver).getFlattenedNodes(this).filter(this._isColumnElement);
            const columnTree = [
                rootColumns
            ];
            let c = rootColumns;
            while(this._hasColumnGroups(c)){
                c = this._flattenColumnGroups(c);
                columnTree.push(c);
            }
            return columnTree;
        }
        /** @protected */ _updateColumnTree() {
            const columnTree = this._getColumnTree();
            if (!this._arrayEquals(columnTree, this._columnTree)) this._columnTree = columnTree;
        }
        /** @private */ _addNodeObserver() {
            this._observer = new (0, _flattenedNodesObserverJs.FlattenedNodesObserver)(this, (info)=>{
                const hasColumnElements = (nodeCollection)=>nodeCollection.filter(this._isColumnElement).length > 0;
                if (hasColumnElements(info.addedNodes) || hasColumnElements(info.removedNodes)) {
                    const allRemovedCells = info.removedNodes.flatMap((c)=>c._allCells);
                    const filterNotConnected = (element)=>allRemovedCells.filter((cell)=>cell._content.contains(element)).length;
                    this.__removeSorters(this._sorters.filter(filterNotConnected));
                    this.__removeFilters(this._filters.filter(filterNotConnected));
                    this._updateColumnTree();
                }
                this._debouncerCheckImports = (0, _debounceJs.Debouncer).debounce(this._debouncerCheckImports, (0, _asyncJs.timeOut).after(2000), this._checkImports.bind(this));
                this._ensureFirstPageLoaded();
            });
        }
        /** @private */ _arrayEquals(arr1, arr2) {
            if (!arr1 || !arr2 || arr1.length != arr2.length) return false;
            for(let i = 0, l = arr1.length; i < l; i++){
                // Check if we have nested arrays
                if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
                    // recurse into the nested arrays
                    if (!this._arrayEquals(arr1[i], arr2[i])) return false;
                } else if (arr1[i] != arr2[i]) return false;
            }
            return true;
        }
        /** @protected */ _checkImports() {
            [
                "vaadin-grid-column-group",
                "vaadin-grid-filter",
                "vaadin-grid-filter-column",
                "vaadin-grid-tree-toggle",
                "vaadin-grid-selection-column",
                "vaadin-grid-sort-column",
                "vaadin-grid-sorter", 
            ].forEach((elementName)=>{
                const element = this.querySelector(elementName);
                if (element && !(element instanceof (0, _polymerElementJs.PolymerElement))) console.warn(`Make sure you have imported the required module for <${elementName}> element.`);
            });
        }
        /** @protected */ _updateFirstAndLastColumn() {
            Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((row)=>this._updateFirstAndLastColumnForRow(row));
        }
        /**
     * @param {!HTMLElement} row
     * @protected
     */ _updateFirstAndLastColumnForRow(row) {
            Array.from(row.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((a, b)=>{
                return a._column._order - b._column._order;
            }).forEach((cell, cellIndex, children)=>{
                cell.toggleAttribute("first-column", cellIndex === 0);
                cell.toggleAttribute("last-column", cellIndex === children.length - 1);
            });
        }
        /**
     * @param {!Node} node
     * @return {boolean}
     * @protected
     */ _isColumnElement(node) {
            return node.nodeType === Node.ELEMENT_NODE && /\bcolumn\b/.test(node.localName);
        }
    };

},{"@polymer/polymer/lib/utils/flattened-nodes-observer.js":"6QMDE","@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/async.js":"ePy4z","@vaadin/component-base/src/debounce.js":"8Wgp5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHr19":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventContextMixin", ()=>EventContextMixin);
const EventContextMixin = (superClass)=>class EventContextMixin extends superClass {
        /**
     * Returns an object with context information about the event target:
     * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
     * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
     * - `section`: whether the event targeted the body, header, footer or details of the grid
     *
     * These additional properties are included when `item` is specified:
     * - `index`: the index of the item
     * - `selected`: the selected state of the item
     * - `detailsOpened`: whether the row details are open for the item
     * - `expanded`: the expanded state of the tree toggle
     * - `level`: the tree hierarchy level
     *
     * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
     * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
     * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
     * the event targets the empty part of the grid body.
     *
     * @param {!Event} event
     * @return {GridEventContext}
     */ getEventContext(event) {
            const context = {};
            const path = event.composedPath();
            const cell = path[path.indexOf(this.$.table) - 3];
            if (!cell) return context;
            context.section = [
                "body",
                "header",
                "footer",
                "details"
            ].filter((section)=>cell.getAttribute("part").indexOf(section) > -1)[0];
            if (cell._column) context.column = cell._column;
            if (context.section === "body" || context.section === "details") Object.assign(context, this.__getRowModel(cell.parentElement));
            return context;
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqoPO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FilterMixin", ()=>FilterMixin);
const FilterMixin = (superClass)=>class FilterMixin extends superClass {
        static get properties() {
            return {
                /** @private */ _filters: {
                    type: Array,
                    value: function() {
                        return [];
                    }
                }
            };
        }
        /** @protected */ ready() {
            super.ready();
            this.addEventListener("filter-changed", this._filterChanged.bind(this));
        }
        /** @private */ _filterChanged(e) {
            e.stopPropagation();
            this.__addFilter(e.target);
            this.__applyFilters();
        }
        /** @private */ __removeFilters(filtersToRemove) {
            if (filtersToRemove.length == 0) return;
            this._filters = this._filters.filter((filter)=>filtersToRemove.indexOf(filter) < 0);
            this.__applyFilters();
        }
        /** @private */ __addFilter(filter) {
            const filterIndex = this._filters.indexOf(filter);
            if (filterIndex === -1) this._filters.push(filter);
        }
        /** @private */ __applyFilters() {
            if (this.dataProvider && this.isAttached) this.clearCache();
        }
        /**
     * @return {!Array<!GridFilterDefinition>}
     * @protected
     */ _mapFilters() {
            return this._filters.map((filter)=>{
                return {
                    path: filter.path,
                    value: filter.value
                };
            });
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j48jA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyboardNavigationMixin", ()=>KeyboardNavigationMixin);
const KeyboardNavigationMixin = (superClass)=>class KeyboardNavigationMixin extends superClass {
        static get properties() {
            return {
                /** @private */ _headerFocusable: {
                    type: Object,
                    observer: "_focusableChanged"
                },
                /**
         * @type {!HTMLElement | undefined}
         * @protected
         */ _itemsFocusable: {
                    type: Object,
                    observer: "_focusableChanged"
                },
                /** @private */ _footerFocusable: {
                    type: Object,
                    observer: "_focusableChanged"
                },
                /** @private */ _navigatingIsHidden: Boolean,
                /**
         * @type {number}
         * @protected
         */ _focusedItemIndex: {
                    type: Number,
                    value: 0
                },
                /** @private */ _focusedColumnOrder: Number,
                /**
         * Indicates whether the grid is currently in interaction mode.
         * In interaction mode the user is currently interacting with a control,
         * such as an input or a select, within a cell.
         * In interaction mode keyboard navigation between cells is disabled.
         * Interaction mode also prevents the focus target cell of that section of
         * the grid from receiving focus, allowing the user to switch focus to
         * controls in adjacent cells, rather than focussing the outer cell
         * itself.
         * @type {boolean}
         * @private
         */ interacting: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true,
                    readOnly: true,
                    observer: "_interactingChanged"
                }
            };
        }
        /** @protected */ ready() {
            super.ready();
            if (this._ios || this._android) // Disable keyboard navigation on mobile devices
            return;
            this.addEventListener("keydown", this._onKeyDown);
            this.addEventListener("keyup", this._onKeyUp);
            this.addEventListener("focusin", this._onFocusIn);
            this.addEventListener("focusout", this._onFocusOut);
            // When focus goes from cell to another cell, focusin/focusout events do
            // not escape the grid’s shadowRoot, thus listening inside the shadowRoot.
            this.$.table.addEventListener("focusin", this._onContentFocusIn.bind(this));
            this.addEventListener("mousedown", ()=>{
                this.toggleAttribute("navigating", false);
                this._isMousedown = true;
                // Reset stored order when moving focus with mouse.
                this._focusedColumnOrder = undefined;
            });
            this.addEventListener("mouseup", ()=>this._isMousedown = false);
        }
        /** @private */ get __rowFocusMode() {
            return this.__isRow(this._itemsFocusable) || this.__isRow(this._headerFocusable) || this.__isRow(this._footerFocusable);
        }
        set __rowFocusMode(value) {
            [
                "_itemsFocusable",
                "_footerFocusable",
                "_headerFocusable"
            ].forEach((focusable)=>{
                if (value && this.__isCell(this[focusable])) this[focusable] = this[focusable].parentElement;
                else if (!value && this.__isRow(this[focusable])) this[focusable] = this[focusable].firstElementChild;
            });
        }
        /** @private */ _focusableChanged(focusable, oldFocusable) {
            if (oldFocusable) oldFocusable.setAttribute("tabindex", "-1");
            if (focusable) this._updateGridSectionFocusTarget(focusable);
        }
        /** @private */ _interactingChanged() {
            // Update focus targets when entering / exiting interaction mode
            this._updateGridSectionFocusTarget(this._headerFocusable);
            this._updateGridSectionFocusTarget(this._itemsFocusable);
            this._updateGridSectionFocusTarget(this._footerFocusable);
        }
        /**
     * Since the focused cell/row state is stored as an element reference, the reference may get
     * out of sync when the virtual indexes for elements update due to effective size change.
     * This function updates the reference to the correct element after a possible index change.
     * @private
     */ __updateItemsFocusable() {
            if (!this._itemsFocusable) return;
            const wasFocused = this.shadowRoot.activeElement === this._itemsFocusable;
            this._getVisibleRows().forEach((row)=>{
                if (row.index === this._focusedItemIndex) {
                    if (this.__rowFocusMode) // Row focus mode
                    this._itemsFocusable = row;
                    else if (this._itemsFocusable.parentElement) {
                        // Cell focus mode
                        const cellIndex = [
                            ...this._itemsFocusable.parentElement.children
                        ].indexOf(this._itemsFocusable);
                        this._itemsFocusable = row.children[cellIndex];
                    }
                }
            });
            if (wasFocused) this._itemsFocusable.focus();
        }
        /**
     * @param {!KeyboardEvent} e
     * @protected
     */ _onKeyDown(e) {
            const key = e.key;
            let keyGroup;
            switch(key){
                case "ArrowUp":
                case "ArrowDown":
                case "ArrowLeft":
                case "ArrowRight":
                case "PageUp":
                case "PageDown":
                case "Home":
                case "End":
                    keyGroup = "Navigation";
                    break;
                case "Enter":
                case "Escape":
                case "F2":
                    keyGroup = "Interaction";
                    break;
                case "Tab":
                    keyGroup = "Tab";
                    break;
                case " ":
                    keyGroup = "Space";
                    break;
                default:
                    break;
            }
            this._detectInteracting(e);
            if (this.interacting && keyGroup !== "Interaction") // When in the interacting mode, only the “Interaction” keys are handled.
            keyGroup = undefined;
            if (keyGroup) this[`_on${keyGroup}KeyDown`](e, key);
        }
        /** @private */ _ensureScrolledToIndex(index) {
            const targetRowInDom = [
                ...this.$.items.children
            ].find((child)=>child.index === index);
            if (!targetRowInDom) this.scrollToIndex(index);
            else this.__scrollIntoViewport(index);
        }
        /** @private */ __isRowExpandable(row) {
            if (this.itemHasChildrenPath) {
                const item = row._item;
                return item && this.get(this.itemHasChildrenPath, item) && !this._isExpanded(item);
            }
        }
        /** @private */ __isRowCollapsible(row) {
            return this._isExpanded(row._item);
        }
        /** @private */ __isDetailsCell(element) {
            return element.matches('[part~="details-cell"]');
        }
        /** @private */ __isCell(element) {
            return element instanceof HTMLTableCellElement;
        }
        /** @private */ __isRow(element) {
            return element instanceof HTMLTableRowElement;
        }
        /** @private */ __getIndexOfChildElement(el) {
            return Array.prototype.indexOf.call(el.parentNode.children, el);
        }
        /** @private */ _onNavigationKeyDown(e, key) {
            e.preventDefault();
            const visibleItemsCount = this._lastVisibleIndex - this._firstVisibleIndex - 1;
            // Handle keyboard interaction as defined in:
            // https://w3c.github.io/aria-practices/#keyboard-interaction-24
            let dx = 0, dy = 0;
            switch(key){
                case "ArrowRight":
                    dx = this.__isRTL ? -1 : 1;
                    break;
                case "ArrowLeft":
                    dx = this.__isRTL ? 1 : -1;
                    break;
                case "Home":
                    if (this.__rowFocusMode) // "If focus is on a row, moves focus to the first row. If focus is in the first row, focus does not move."
                    dy = -Infinity;
                    else if (e.ctrlKey) // "If focus is on a cell, moves focus to the first cell in the column. If focus is in the first row, focus does not move."
                    dy = -Infinity;
                    else // "If focus is on a cell, moves focus to the first cell in the row. If focus is in the first cell of the row, focus does not move."
                    dx = -Infinity;
                    break;
                case "End":
                    if (this.__rowFocusMode) // "If focus is on a row, moves focus to the last row. If focus is in the last row, focus does not move."
                    dy = Infinity;
                    else if (e.ctrlKey) // "If focus is on a cell, moves focus to the last cell in the column. If focus is in the last row, focus does not move."
                    dy = Infinity;
                    else // "If focus is on a cell, moves focus to the last cell in the row. If focus is in the last cell of the row, focus does not move."
                    dx = Infinity;
                    break;
                case "ArrowDown":
                    dy = 1;
                    break;
                case "ArrowUp":
                    dy = -1;
                    break;
                case "PageDown":
                    dy = visibleItemsCount;
                    break;
                case "PageUp":
                    dy = -visibleItemsCount;
                    break;
                default:
                    break;
            }
            const activeRow = e.composedPath().find((el)=>this.__isRow(el));
            const activeCell = e.composedPath().find((el)=>this.__isCell(el));
            if (this.__rowFocusMode && !activeRow || !this.__rowFocusMode && !activeCell) // When using a screen reader, it's possible that neither a cell nor a row is focused.
            return;
            const forwardsKey = this.__isRTL ? "ArrowLeft" : "ArrowRight";
            const backwardsKey = this.__isRTL ? "ArrowRight" : "ArrowLeft";
            if (key === forwardsKey) // "Right Arrow:"
            {
                if (this.__rowFocusMode) {
                    // In row focus mode
                    if (this.__isRowExpandable(activeRow)) {
                        // "If focus is on a collapsed row, expands the row."
                        this.expandItem(activeRow._item);
                        return;
                    }
                    // "If focus is on an expanded row or is on a row that does not have child rows,
                    // moves focus to the first cell in the row."
                    this.__rowFocusMode = false;
                    this._onCellNavigation(activeRow.firstElementChild, 0, 0);
                    return;
                }
            } else if (key === backwardsKey) {
                // "Left Arrow:"
                if (this.__rowFocusMode) // In row focus mode
                {
                    if (this.__isRowCollapsible(activeRow)) {
                        // "If focus is on an expanded row, collapses the row."
                        this.collapseItem(activeRow._item);
                        return;
                    }
                } else {
                    // In cell focus mode
                    const activeRowCells = [
                        ...activeRow.children
                    ].sort((a, b)=>a._order - b._order);
                    if (activeCell === activeRowCells[0] || this.__isDetailsCell(activeCell)) {
                        // "If focus is on the first cell in a row and row focus is supported, moves focus to the row."
                        this.__rowFocusMode = true;
                        this._onRowNavigation(activeRow, 0);
                        return;
                    }
                }
            }
            // Navigate
            if (this.__rowFocusMode) // Navigate the rows
            this._onRowNavigation(activeRow, dy);
            else // Navigate the cells
            this._onCellNavigation(activeCell, dx, dy);
        }
        /**
     * Focuses the target row after navigating by the given dy offset.
     * If the row is not in the viewport, it is first scrolled to.
     * @private
     **/ _onRowNavigation(activeRow, dy) {
            const { dstRow  } = this.__navigateRows(dy, activeRow);
            if (dstRow) dstRow.focus();
        }
        /** @private */ __getIndexInGroup(row, bodyFallbackIndex) {
            const rowGroup = row.parentNode;
            // Body rows have index property, otherwise DOM child index of the row is used.
            if (rowGroup === this.$.items) return bodyFallbackIndex !== undefined ? bodyFallbackIndex : row.index;
            return this.__getIndexOfChildElement(row);
        }
        /**
     * Returns the target row after navigating by the given dy offset.
     * Also returns information whether the details cell should be the target on the target row.
     * If the row is not in the viewport, it is first scrolled to.
     * @private
     **/ __navigateRows(dy, activeRow, activeCell) {
            const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
            const activeRowGroup = activeRow.parentNode;
            const maxRowIndex = (activeRowGroup === this.$.items ? this._effectiveSize : activeRowGroup.children.length) - 1;
            // Index of the destination row
            let dstRowIndex = Math.max(0, Math.min(currentRowIndex + dy, maxRowIndex));
            if (activeRowGroup !== this.$.items) {
                // Navigating header/footer rows
                // Header and footer could have hidden rows, e. g., if none of the columns
                // or groups on the given column tree level define template. Skip them
                // in vertical keyboard navigation.
                if (dstRowIndex > currentRowIndex) while(dstRowIndex < maxRowIndex && activeRowGroup.children[dstRowIndex].hidden)dstRowIndex += 1;
                else if (dstRowIndex < currentRowIndex) while(dstRowIndex > 0 && activeRowGroup.children[dstRowIndex].hidden)dstRowIndex -= 1;
                this.toggleAttribute("navigating", true);
                return {
                    dstRow: activeRowGroup.children[dstRowIndex]
                };
            }
            // Navigating body rows
            let dstIsRowDetails = false;
            if (activeCell) {
                const isRowDetails = this.__isDetailsCell(activeCell);
                // Row details navigation logic
                if (activeRowGroup === this.$.items) {
                    const item = activeRow._item;
                    const dstItem = this._cache.getItemForIndex(dstRowIndex);
                    // Should we navigate to row details?
                    if (isRowDetails) dstIsRowDetails = dy === 0;
                    else dstIsRowDetails = dy === 1 && this._isDetailsOpened(item) || dy === -1 && dstRowIndex !== currentRowIndex && this._isDetailsOpened(dstItem);
                    // Should we navigate between details and regular cells of the same row?
                    if (dstIsRowDetails !== isRowDetails && (dy === 1 && dstIsRowDetails || dy === -1 && !dstIsRowDetails)) dstRowIndex = currentRowIndex;
                }
            }
            // Ensure correct vertical scroll position, destination row is visible
            this._ensureScrolledToIndex(dstRowIndex);
            // When scrolling with repeated keydown, sometimes FocusEvent listeners
            // are too late to update _focusedItemIndex. Ensure next keydown
            // listener invocation gets updated _focusedItemIndex value.
            this._focusedItemIndex = dstRowIndex;
            // This has to be set after scrolling, otherwise it can be removed by
            // `_preventScrollerRotatingCellFocus(row, index)` during scrolling.
            this.toggleAttribute("navigating", true);
            return {
                dstRow: [
                    ...activeRowGroup.children
                ].find((el)=>!el.hidden && el.index === dstRowIndex),
                dstIsRowDetails
            };
        }
        /**
     * Focuses the target cell after navigating by the given dx and dy offset.
     * If the cell is not in the viewport, it is first scrolled to.
     * @private
     **/ _onCellNavigation(activeCell, dx, dy) {
            const activeRow = activeCell.parentNode;
            const { dstRow , dstIsRowDetails  } = this.__navigateRows(dy, activeRow, activeCell);
            if (!dstRow) return;
            const columnIndex = this.__getIndexOfChildElement(activeCell);
            const isCurrentCellRowDetails = this.__isDetailsCell(activeCell);
            const activeRowGroup = activeRow.parentNode;
            const currentRowIndex = this.__getIndexInGroup(activeRow, this._focusedItemIndex);
            // _focusedColumnOrder is memoized — this is to ensure predictable
            // navigation when entering and leaving detail and column group cells.
            if (this._focusedColumnOrder === undefined) {
                if (isCurrentCellRowDetails) this._focusedColumnOrder = 0;
                else this._focusedColumnOrder = this._getColumns(activeRowGroup, currentRowIndex).filter((c)=>!c.hidden)[columnIndex]._order;
            }
            if (dstIsRowDetails) {
                // Focusing a row details cell on the destination row
                const dstCell = [
                    ...dstRow.children
                ].find((el)=>this.__isDetailsCell(el));
                dstCell.focus();
            } else {
                // Focusing a regular cell on the destination row
                // Find orderedColumnIndex — the index of order closest matching the
                // original _focusedColumnOrder in the sorted array of orders
                // of the visible columns on the destination row.
                const dstRowIndex = this.__getIndexInGroup(dstRow, this._focusedItemIndex);
                const dstColumns = this._getColumns(activeRowGroup, dstRowIndex).filter((c)=>!c.hidden);
                const dstSortedColumnOrders = dstColumns.map((c)=>c._order).sort((b, a)=>b - a);
                const maxOrderedColumnIndex = dstSortedColumnOrders.length - 1;
                const orderedColumnIndex = dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b, a)=>Math.abs(b - this._focusedColumnOrder) - Math.abs(a - this._focusedColumnOrder))[0]);
                // Index of the destination column order
                const dstOrderedColumnIndex = dy === 0 && isCurrentCellRowDetails ? orderedColumnIndex : Math.max(0, Math.min(orderedColumnIndex + dx, maxOrderedColumnIndex));
                if (dstOrderedColumnIndex !== orderedColumnIndex) // Horizontal movement invalidates stored _focusedColumnOrder
                this._focusedColumnOrder = undefined;
                const columnIndexByOrder = dstColumns.reduce((acc, col, i)=>{
                    acc[col._order] = i;
                    return acc;
                }, {});
                const dstColumnIndex = columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]];
                const dstCell = dstRow.children[dstColumnIndex];
                this._scrollHorizontallyToCell(dstCell);
                dstCell.focus();
            }
        }
        /** @private */ _onInteractionKeyDown(e, key) {
            const localTarget = e.composedPath()[0];
            const localTargetIsTextInput = localTarget.localName === "input" && !/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);
            let wantInteracting;
            switch(key){
                case "Enter":
                    wantInteracting = this.interacting ? !localTargetIsTextInput : true;
                    break;
                case "Escape":
                    wantInteracting = false;
                    break;
                case "F2":
                    wantInteracting = !this.interacting;
                    break;
                default:
                    break;
            }
            const { cell  } = this._getGridEventLocation(e);
            if (this.interacting !== wantInteracting && cell !== null) {
                if (wantInteracting) {
                    const focusTarget = cell._content.querySelector("[focus-target]") || // If a child element hasn't been explicitly marked as a focus target,
                    // fall back to any focusable element inside the cell.
                    [
                        ...cell._content.querySelectorAll("*")
                    ].find((node)=>this._isFocusable(node));
                    if (focusTarget) {
                        e.preventDefault();
                        focusTarget.focus();
                        this._setInteracting(true);
                        this.toggleAttribute("navigating", false);
                    }
                } else {
                    e.preventDefault();
                    this._focusedColumnOrder = undefined;
                    cell.focus();
                    this._setInteracting(false);
                    this.toggleAttribute("navigating", true);
                }
            }
        }
        /** @private */ _predictFocusStepTarget(srcElement, step) {
            const tabOrder = [
                this.$.table,
                this._headerFocusable,
                this._itemsFocusable,
                this._footerFocusable,
                this.$.focusexit, 
            ];
            let index = tabOrder.indexOf(srcElement);
            index += step;
            while(index >= 0 && index <= tabOrder.length - 1){
                let rowElement = tabOrder[index];
                if (rowElement && !this.__rowFocusMode) rowElement = tabOrder[index].parentNode;
                if (!rowElement || rowElement.hidden) index += step;
                else break;
            }
            return tabOrder[index];
        }
        /** @private */ _onTabKeyDown(e) {
            const focusTarget = this._predictFocusStepTarget(e.composedPath()[0], e.shiftKey ? -1 : 1);
            // Can be undefined if grid has tabindex
            if (!focusTarget) return;
            // Prevent focus-trap logic from intercepting the event.
            e.stopPropagation();
            if (focusTarget === this.$.table) // The focus is about to exit the grid to the top.
            this.$.table.focus();
            else if (focusTarget === this.$.focusexit) // The focus is about to exit the grid to the bottom.
            this.$.focusexit.focus();
            else if (focusTarget === this._itemsFocusable) {
                let itemsFocusTarget = focusTarget;
                const targetRow = this.__isRow(focusTarget) ? focusTarget : focusTarget.parentNode;
                this._ensureScrolledToIndex(this._focusedItemIndex);
                if (targetRow.index !== this._focusedItemIndex && this.__isCell(focusTarget)) {
                    // The target row, which is about to be focused next, has been
                    // assigned with a new index since last focus, probably because of
                    // scrolling. Focus the row for the stored focused item index instead.
                    const columnIndex = Array.from(targetRow.children).indexOf(this._itemsFocusable);
                    const focusedItemRow = Array.from(this.$.items.children).find((row)=>!row.hidden && row.index === this._focusedItemIndex);
                    if (focusedItemRow) itemsFocusTarget = focusedItemRow.children[columnIndex];
                }
                e.preventDefault();
                itemsFocusTarget.focus();
            } else {
                e.preventDefault();
                focusTarget.focus();
            }
            this.toggleAttribute("navigating", true);
        }
        /** @private */ _onSpaceKeyDown(e) {
            e.preventDefault();
            const element = e.composedPath()[0];
            const isRow = this.__isRow(element);
            if (isRow || !element._content || !element._content.firstElementChild) this.dispatchEvent(new CustomEvent(isRow ? "row-activate" : "cell-activate", {
                detail: {
                    model: this.__getRowModel(isRow ? element : element.parentElement)
                }
            }));
        }
        /** @private */ _onKeyUp(e) {
            if (!/^( |SpaceBar)$/.test(e.key) || this.interacting) return;
            e.preventDefault();
            const cell = e.composedPath()[0];
            if (cell._content && cell._content.firstElementChild) {
                const wasNavigating = this.hasAttribute("navigating");
                cell._content.firstElementChild.click();
                this.toggleAttribute("navigating", wasNavigating);
            }
        }
        /**
     * @param {!FocusEvent} e
     * @protected
     */ _onFocusIn(e) {
            if (!this._isMousedown) this.toggleAttribute("navigating", true);
            const rootTarget = e.composedPath()[0];
            if (rootTarget === this.$.table || rootTarget === this.$.focusexit) {
                // The focus enters the top (bottom) of the grid, meaning that user has
                // tabbed (shift-tabbed) into the grid. Move the focus to
                // the first (the last) focusable.
                this._predictFocusStepTarget(rootTarget, rootTarget === this.$.table ? 1 : -1).focus();
                this._setInteracting(false);
            } else this._detectInteracting(e);
        }
        /**
     * @param {!FocusEvent} e
     * @protected
     */ _onFocusOut(e) {
            this.toggleAttribute("navigating", false);
            this._detectInteracting(e);
        }
        /** @private */ _onContentFocusIn(e) {
            const { section , cell , row  } = this._getGridEventLocation(e);
            this._detectInteracting(e);
            if (section && (cell || row)) {
                this._activeRowGroup = section;
                if (this.$.header === section) this._headerFocusable = this.__rowFocusMode ? row : cell;
                else if (this.$.items === section) this._itemsFocusable = this.__rowFocusMode ? row : cell;
                else if (this.$.footer === section) this._footerFocusable = this.__rowFocusMode ? row : cell;
                if (cell) {
                    // Fire a public event for cell.
                    const context = this.getEventContext(e);
                    cell.dispatchEvent(new CustomEvent("cell-focus", {
                        bubbles: true,
                        composed: true,
                        detail: {
                            context: context
                        }
                    }));
                }
            }
            this._detectFocusedItemIndex(e);
        }
        /** @private
     * Enables interaction mode if a cells descendant receives focus or keyboard
     * input. Disables it if the event is not related to cell content.
     * @param {!KeyboardEvent|!FocusEvent} e
     */ _detectInteracting(e) {
            const isInteracting = e.composedPath().some((el)=>el.localName === "vaadin-grid-cell-content");
            this._setInteracting(isInteracting);
        }
        /** @private */ _detectFocusedItemIndex(e) {
            const { section , row  } = this._getGridEventLocation(e);
            if (section === this.$.items) this._focusedItemIndex = row.index;
        }
        /** @private
     * Enables or disables the focus target of the containing section of the
     * grid from receiving focus, based on whether the user is interacting with
     * that section of the grid.
     * @param {HTMLElement} focusTarget
     */ _updateGridSectionFocusTarget(focusTarget) {
            if (!focusTarget) return;
            const section = this._getGridSectionFromFocusTarget(focusTarget);
            const isInteractingWithinActiveSection = this.interacting && section === this._activeRowGroup;
            focusTarget.tabIndex = isInteractingWithinActiveSection ? -1 : 0;
        }
        /**
     * @param {!HTMLTableRowElement} row
     * @param {number} index
     * @protected
     */ _preventScrollerRotatingCellFocus(row, index) {
            if (row.index === this._focusedItemIndex && this.hasAttribute("navigating") && this._activeRowGroup === this.$.items) {
                // Focused item has went, hide navigation mode
                this._navigatingIsHidden = true;
                this.toggleAttribute("navigating", false);
            }
            if (index === this._focusedItemIndex && this._navigatingIsHidden) {
                // Focused item is back, restore navigation mode
                this._navigatingIsHidden = false;
                this.toggleAttribute("navigating", true);
            }
        }
        /**
     * @param {HTMLTableSectionElement=} rowGroup
     * @param {number=} rowIndex
     * @return {!Array<!GridColumn>}
     * @protected
     */ _getColumns(rowGroup, rowIndex) {
            let columnTreeLevel = this._columnTree.length - 1;
            if (rowGroup === this.$.header) columnTreeLevel = rowIndex;
            else if (rowGroup === this.$.footer) columnTreeLevel = this._columnTree.length - 1 - rowIndex;
            return this._columnTree[columnTreeLevel];
        }
        /** @private */ __isValidFocusable(element) {
            return this.$.table.contains(element) && element.offsetHeight;
        }
        /** @protected */ _resetKeyboardNavigation() {
            // Header / footer
            [
                "header",
                "footer"
            ].forEach((section)=>{
                if (!this.__isValidFocusable(this[`_${section}Focusable`])) {
                    const firstVisibleRow = [
                        ...this.$[section].children
                    ].find((row)=>row.offsetHeight);
                    const firstVisibleCell = firstVisibleRow ? [
                        ...firstVisibleRow.children
                    ].find((cell)=>!cell.hidden) : null;
                    if (firstVisibleRow && firstVisibleCell) this[`_${section}Focusable`] = this.__rowFocusMode ? firstVisibleRow : firstVisibleCell;
                }
            });
            // Body
            if (!this.__isValidFocusable(this._itemsFocusable) && this.$.items.firstElementChild) {
                const firstVisibleRow = this.__getFirstVisibleItem();
                const firstVisibleCell = firstVisibleRow ? [
                    ...firstVisibleRow.children
                ].find((cell)=>!cell.hidden) : null;
                if (firstVisibleCell && firstVisibleRow) {
                    // Reset memoized column
                    delete this._focusedColumnOrder;
                    this._itemsFocusable = this.__rowFocusMode ? firstVisibleRow : firstVisibleCell;
                }
            } else this.__updateItemsFocusable();
        }
        /**
     * @param {!HTMLElement} dstCell
     * @protected
     */ _scrollHorizontallyToCell(dstCell) {
            if (dstCell.hasAttribute("frozen") || this.__isDetailsCell(dstCell)) // These cells are, by design, always visible, no need to scroll.
            return;
            const dstCellRect = dstCell.getBoundingClientRect();
            const dstRow = dstCell.parentNode;
            const dstCellIndex = Array.from(dstRow.children).indexOf(dstCell);
            const tableRect = this.$.table.getBoundingClientRect();
            let leftBoundary = tableRect.left, rightBoundary = tableRect.right;
            for(let i = dstCellIndex - 1; i >= 0; i--){
                const cell = dstRow.children[i];
                if (cell.hasAttribute("hidden") || this.__isDetailsCell(cell)) continue;
                if (cell.hasAttribute("frozen")) {
                    leftBoundary = cell.getBoundingClientRect().right;
                    break;
                }
            }
            for(let i1 = dstCellIndex + 1; i1 < dstRow.children.length; i1++){
                const cell = dstRow.children[i1];
                if (cell.hasAttribute("hidden") || this.__isDetailsCell(cell)) continue;
                if (cell.hasAttribute("frozen")) {
                    rightBoundary = cell.getBoundingClientRect().left;
                    break;
                }
            }
            if (dstCellRect.left < leftBoundary) this.$.table.scrollLeft += Math.round(dstCellRect.left - leftBoundary);
            if (dstCellRect.right > rightBoundary) this.$.table.scrollLeft += Math.round(dstCellRect.right - rightBoundary);
        }
        /**
     * @typedef {Object} GridEventLocation
     * @property {HTMLTableSectionElement | null} section - The table section element that the event occurred in (header, body, or footer), or null if the event did not occur in a section
     * @property {HTMLTableRowElement | null} row - The row element that the event occurred in, or null if the event did not occur in a row
     * @property {HTMLTableCellElement | null} cell - The cell element that the event occurred in, or null if the event did not occur in a cell
     * @private
     */ /**
     * Takes an event and returns a location object describing in which part of the grid the event occurred.
     * The event may either target table section, a row, a cell or contents of a cell.
     * @param {Event} e
     * @returns {GridEventLocation}
     * @private
     */ _getGridEventLocation(e) {
            const path = e.composedPath();
            const tableIndex = path.indexOf(this.$.table);
            // Assuming ascending path to table is: [...,] th|td, tr, thead|tbody, table [,...]
            const section = tableIndex >= 1 ? path[tableIndex - 1] : null;
            const row = tableIndex >= 2 ? path[tableIndex - 2] : null;
            const cell = tableIndex >= 3 ? path[tableIndex - 3] : null;
            return {
                section,
                row,
                cell
            };
        }
        /**
     * Helper method that maps a focus target cell to the containing grid section
     * @param {HTMLElement} focusTarget
     * @returns {HTMLTableSectionElement | null}
     * @private
     */ _getGridSectionFromFocusTarget(focusTarget) {
            if (focusTarget === this._headerFocusable) return this.$.header;
            if (focusTarget === this._itemsFocusable) return this.$.items;
            if (focusTarget === this._footerFocusable) return this.$.footer;
            return null;
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17Edl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RowDetailsMixin", ()=>RowDetailsMixin);
const RowDetailsMixin = (superClass)=>class RowDetailsMixin extends superClass {
        static get properties() {
            return {
                /**
         * An array containing references to items with open row details.
         * @type {!Array<!GridItem>}
         */ detailsOpenedItems: {
                    type: Array,
                    value: function() {
                        return [];
                    }
                },
                /**
         * Custom function for rendering the content of the row details.
         * Receives three arguments:
         *
         * - `root` The row details content DOM element. Append your content to it.
         * - `grid` The `<vaadin-grid>` element.
         * - `model` The object with the properties related with
         *   the rendered item, contains:
         *   - `model.index` The index of the item.
         *   - `model.item` The item.
         *   - `model.level` The number of the item's tree sublevel, starts from 0.
         *   - `model.expanded` True if the item's tree sublevel is expanded.
         *   - `model.selected` True if the item is selected.
         *
         * @type {GridRowDetailsRenderer | null | undefined}
         */ rowDetailsRenderer: Function,
                /**
         * @type {!Array<!HTMLElement> | undefined}
         * @protected
         */ _detailsCells: {
                    type: Array
                }
            };
        }
        static get observers() {
            return [
                "_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)",
                "_rowDetailsRendererChanged(rowDetailsRenderer)", 
            ];
        }
        /** @protected */ ready() {
            super.ready();
            this._detailsCellResizeObserver = new ResizeObserver((entries)=>{
                entries.forEach(({ target: cell  })=>{
                    this._updateDetailsCellHeight(cell.parentElement);
                });
                // This workaround is needed until Safari also supports
                // ResizeObserver.observe with {box: 'border-box'}
                this.__virtualizer.__adapter._resizeHandler();
            });
        }
        /** @private */ _rowDetailsRendererChanged(rowDetailsRenderer) {
            if (!rowDetailsRenderer) return;
            if (this._columnTree) // Only update the rows if the column tree has already been initialized
            Array.from(this.$.items.children).forEach((row)=>{
                if (!row.querySelector("[part~=details-cell]")) {
                    this._updateRow(row, this._columnTree[this._columnTree.length - 1]);
                    const isDetailsOpened = this._isDetailsOpened(row._item);
                    this._toggleDetailsCell(row, isDetailsOpened);
                }
            });
        }
        /** @private */ _detailsOpenedItemsChanged(changeRecord, rowDetailsRenderer) {
            // Skip to avoid duplicate work of both “.splices” and “.length” updates.
            if (changeRecord.path === "detailsOpenedItems.length" || !changeRecord.value) return;
            [
                ...this.$.items.children
            ].forEach((row)=>{
                // Re-renders the row to possibly close the previously opened details.
                if (row.hasAttribute("details-opened")) {
                    this._updateItem(row, row._item);
                    return;
                }
                // Re-renders the row to open the details when a row details renderer is provided.
                if (rowDetailsRenderer && this._isDetailsOpened(row._item)) this._updateItem(row, row._item);
            });
        }
        /**
     * @param {!HTMLElement} cell
     * @protected
     */ _configureDetailsCell(cell) {
            cell.setAttribute("part", "cell details-cell");
            // Freeze the details cell, so that it does not scroll horizontally
            // with the normal cells. This way it looks less weird.
            cell.toggleAttribute("frozen", true);
            this._detailsCellResizeObserver.observe(cell);
        }
        /**
     * @param {!HTMLElement} row
     * @param {!GridItem} item
     * @protected
     */ _toggleDetailsCell(row, detailsOpened) {
            const cell = row.querySelector('[part~="details-cell"]');
            if (!cell) return;
            cell.hidden = !detailsOpened;
            if (cell.hidden) return;
            // Assigns a renderer when the details cell is opened.
            // The details cell content is rendered later in the `_updateItem` method.
            if (this.rowDetailsRenderer) cell._renderer = this.rowDetailsRenderer;
        }
        /** @protected */ _updateDetailsCellHeight(row) {
            const cell = row.querySelector('[part~="details-cell"]');
            if (!cell) return;
            if (cell.hidden) row.style.removeProperty("padding-bottom");
            else row.style.setProperty("padding-bottom", `${cell.offsetHeight}px`);
        }
        /** @protected */ _updateDetailsCellHeights() {
            [
                ...this.$.items.children
            ].forEach((row)=>{
                this._updateDetailsCellHeight(row);
            });
        }
        /**
     * @param {!GridItem} item
     * @return {boolean}
     * @protected
     */ _isDetailsOpened(item) {
            return this.detailsOpenedItems && this._getItemIndexInArray(item, this.detailsOpenedItems) !== -1;
        }
        /**
     * Open the details row of a given item.
     * @param {!GridItem} item
     */ openItemDetails(item) {
            if (!this._isDetailsOpened(item)) this.detailsOpenedItems = [
                ...this.detailsOpenedItems,
                item
            ];
        }
        /**
     * Close the details row of a given item.
     * @param {!GridItem} item
     */ closeItemDetails(item) {
            if (this._isDetailsOpened(item)) this.detailsOpenedItems = this.detailsOpenedItems.filter((i)=>!this._itemsEqual(i, item));
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Wg5t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollMixin", ()=>ScrollMixin);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _asyncJs = require("@vaadin/component-base/src/async.js");
var _debounceJs = require("@vaadin/component-base/src/debounce.js");
const timeouts = {
    SCROLLING: 500
};
const ScrollMixin = (superClass)=>class ScrollMixin extends superClass {
        static get properties() {
            return {
                /**
         * Cached array of frozen cells
         * @private
         */ _frozenCells: {
                    type: Array,
                    value: ()=>[]
                },
                /** @private */ _rowWithFocusedElement: Element
            };
        }
        /** @private */ get _scrollTop() {
            return this.$.table.scrollTop;
        }
        /**
     * Override (from iron-scroll-target-behavior) to avoid document scroll
     * @private
     */ set _scrollTop(top) {
            this.$.table.scrollTop = top;
        }
        /** @private */ get _scrollLeft() {
            return this.$.table.scrollLeft;
        }
        /** @protected */ ready() {
            super.ready();
            // Preserve accessor to the legacy scrolling functionality
            this.$.outerscroller = document.createElement("div");
            this.scrollTarget = this.$.table;
            this.$.items.addEventListener("focusin", (e)=>{
                const itemsIndex = e.composedPath().indexOf(this.$.items);
                this._rowWithFocusedElement = e.composedPath()[itemsIndex - 1];
            });
            this.$.items.addEventListener("focusout", ()=>this._rowWithFocusedElement = undefined);
            this.$.table.addEventListener("scroll", ()=>this._afterScroll());
        }
        /**
     * Scroll to a specific row index in the virtual list. Note that the row index is
     * not always the same for any particular item. For example, sorting/filtering/expanding
     * or collapsing hierarchical items can affect the row index related to an item.
     *
     * @param {number} index Row index to scroll to
     */ scrollToIndex(index) {
            index = Math.min(this._effectiveSize - 1, Math.max(0, index));
            this.__virtualizer.scrollToIndex(index);
            this.__scrollIntoViewport(index);
        }
        /**
     * Makes sure the row with the given index (if found in the DOM) is fully
     * inside the visible viewport, taking header/footer into account.
     * @private
     */ __scrollIntoViewport(index) {
            const rowElement = [
                ...this.$.items.children
            ].find((child)=>child.index === index);
            if (rowElement) {
                const dstRect = rowElement.getBoundingClientRect();
                const footerTop = this.$.footer.getBoundingClientRect().top;
                const headerBottom = this.$.header.getBoundingClientRect().bottom;
                if (dstRect.bottom > footerTop) this.$.table.scrollTop += dstRect.bottom - footerTop;
                else if (dstRect.top < headerBottom) this.$.table.scrollTop -= headerBottom - dstRect.top;
            }
        }
        /** @private */ _scheduleScrolling() {
            if (!this._scrollingFrame) // Defer setting state attributes to avoid Edge hiccups
            this._scrollingFrame = requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling", true));
            this._debounceScrolling = (0, _debounceJs.Debouncer).debounce(this._debounceScrolling, (0, _asyncJs.timeOut).after(timeouts.SCROLLING), ()=>{
                cancelAnimationFrame(this._scrollingFrame);
                delete this._scrollingFrame;
                this.$.scroller.toggleAttribute("scrolling", false);
            });
        }
        /** @private */ _afterScroll() {
            this.__updateHorizontalScrollPosition();
            if (!this.hasAttribute("reordering")) this._scheduleScrolling();
            this._updateOverflow();
        }
        /** @private */ _updateOverflow() {
            // Set overflow styling attributes
            let overflow = "";
            const table = this.$.table;
            if (table.scrollTop < table.scrollHeight - table.clientHeight) overflow += " bottom";
            if (table.scrollTop > 0) overflow += " top";
            if (table.scrollLeft < table.scrollWidth - table.clientWidth) overflow += " right";
            if (table.scrollLeft > 0) overflow += " left";
            this._debounceOverflow = (0, _debounceJs.Debouncer).debounce(this._debounceOverflow, (0, _asyncJs.animationFrame), ()=>{
                const value = overflow.trim();
                if (value.length > 0 && this.getAttribute("overflow") !== value) this.setAttribute("overflow", value);
                else if (value.length == 0 && this.hasAttribute("overflow")) this.removeAttribute("overflow");
            });
        }
        /** @protected */ _frozenCellsChanged() {
            this._debouncerCacheElements = (0, _debounceJs.Debouncer).debounce(this._debouncerCacheElements, (0, _asyncJs.microTask), ()=>{
                Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(function(cell) {
                    cell.style.transform = "";
                });
                this._frozenCells = Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));
                this.__updateHorizontalScrollPosition();
            });
            this._updateLastFrozen();
        }
        /** @protected */ _updateLastFrozen() {
            if (!this._columnTree) return;
            const columnsRow = this._columnTree[this._columnTree.length - 1].slice(0);
            columnsRow.sort((a, b)=>{
                return a._order - b._order;
            });
            const lastFrozen = columnsRow.reduce((prev, col, index)=>{
                col._lastFrozen = false;
                return col.frozen && !col.hidden ? index : prev;
            }, undefined);
            if (lastFrozen !== undefined) columnsRow[lastFrozen]._lastFrozen = true;
        }
        /** @private */ __updateHorizontalScrollPosition() {
            this.$.table.style.setProperty("--_grid-horizontal-scroll-position", -this._scrollLeft + "px");
            if (this.__isRTL) {
                // Translating the sticky sections using a CSS variable works nicely on LTR.
                // On RTL, it causes jumpy behavior (on Desktop Safari) so we need to translate manually.
                const x = this.__getNormalizedScrollLeft(this.$.table) + this.$.table.clientWidth - this.$.table.scrollWidth;
                const transform = `translate(${x}px, 0)`;
                for(let i = 0; i < this._frozenCells.length; i++)this._frozenCells[i].style.transform = transform;
            }
        }
    };

},{"@vaadin/component-base/src/async.js":"ePy4z","@vaadin/component-base/src/debounce.js":"8Wgp5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fONp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SelectionMixin", ()=>SelectionMixin);
const SelectionMixin = (superClass)=>class SelectionMixin extends superClass {
        static get properties() {
            return {
                /**
         * An array that contains the selected items.
         * @type {!Array<!GridItem>}
         */ selectedItems: {
                    type: Object,
                    notify: true,
                    value: ()=>[]
                },
                /**
         * Set of selected item ids
         * @private
         */ __selectedKeys: {
                    type: Object,
                    computed: "__computeSelectedKeys(itemIdPath, selectedItems.*)"
                }
            };
        }
        static get observers() {
            return [
                "__selectedItemsChanged(itemIdPath, selectedItems.*)"
            ];
        }
        /**
     * @param {!GridItem} item
     * @return {boolean}
     * @protected
     */ _isSelected(item) {
            return this.__selectedKeys.has(this.getItemId(item));
        }
        /**
     * Selects the given item.
     *
     * @method selectItem
     * @param {!GridItem} item The item object
     */ selectItem(item) {
            if (!this._isSelected(item)) this.selectedItems = [
                ...this.selectedItems,
                item
            ];
        }
        /**
     * Deselects the given item if it is already selected.
     *
     * @method deselect
     * @param {!GridItem} item The item object
     */ deselectItem(item) {
            if (this._isSelected(item)) this.selectedItems = this.selectedItems.filter((i)=>!this._itemsEqual(i, item));
        }
        /**
     * Toggles the selected state of the given item.
     *
     * @method toggle
     * @param {!GridItem} item The item object
     * @protected
     */ _toggleItem(item) {
            if (!this._isSelected(item)) this.selectItem(item);
            else this.deselectItem(item);
        }
        /** @private */ __selectedItemsChanged() {
            this.requestContentUpdate();
        }
        /** @private */ __computeSelectedKeys(itemIdPath, selectedItems) {
            const selected = selectedItems.base || [];
            const selectedKeys = new Set();
            selected.forEach((item)=>{
                selectedKeys.add(this.getItemId(item));
            });
            return selectedKeys;
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9zBsb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SortMixin", ()=>SortMixin);
const SortMixin = (superClass)=>class SortMixin extends superClass {
        static get properties() {
            return {
                /**
         * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
         * @attr {boolean} multi-sort
         * @type {boolean}
         */ multiSort: {
                    type: Boolean,
                    value: false
                },
                /**
         * @type {!Array<!GridSorterDefinition>}
         * @protected
         */ _sorters: {
                    type: Array,
                    value: function() {
                        return [];
                    }
                },
                /** @private */ _previousSorters: {
                    type: Array,
                    value: function() {
                        return [];
                    }
                }
            };
        }
        /** @protected */ ready() {
            super.ready();
            this.addEventListener("sorter-changed", this._onSorterChanged);
        }
        /** @private */ _onSorterChanged(e) {
            const sorter = e.target;
            e.stopPropagation();
            this.__updateSorter(sorter);
            this.__applySorters();
        }
        /** @private */ __removeSorters(sortersToRemove) {
            if (sortersToRemove.length == 0) return;
            this._sorters = this._sorters.filter((sorter)=>sortersToRemove.indexOf(sorter) < 0);
            if (this.multiSort) this.__updateSortOrders();
            this.__applySorters();
        }
        /** @private */ __updateSortOrders() {
            this._sorters.forEach((sorter, index)=>sorter._order = this._sorters.length > 1 ? index : null, this);
        }
        /** @private */ __updateSorter(sorter1) {
            if (!sorter1.direction && this._sorters.indexOf(sorter1) === -1) return;
            sorter1._order = null;
            if (this.multiSort) {
                this._removeArrayItem(this._sorters, sorter1);
                if (sorter1.direction) this._sorters.unshift(sorter1);
                this.__updateSortOrders();
            } else if (sorter1.direction) {
                const otherSorters = this._sorters.filter((s)=>s != sorter1);
                this._sorters = [
                    sorter1
                ];
                otherSorters.forEach((sorter)=>{
                    sorter._order = null;
                    sorter.direction = null;
                });
            }
        }
        /** @private */ __applySorters() {
            if (this.dataProvider && // No need to clear cache if sorters didn't change and grid is attached
            this.isAttached && JSON.stringify(this._previousSorters) !== JSON.stringify(this._mapSorters())) this.clearCache();
            this._a11yUpdateSorters();
            this._previousSorters = this._mapSorters();
        }
        /**
     * @return {!Array<!GridSorterDefinition>}
     * @protected
     */ _mapSorters() {
            return this._sorters.map((sorter)=>{
                return {
                    path: sorter.path,
                    direction: sorter.direction
                };
            });
        }
        /** @private */ _removeArrayItem(array, item) {
            const index = array.indexOf(item);
            if (index > -1) array.splice(index, 1);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcLGu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StylingMixin", ()=>StylingMixin);
const StylingMixin = (superClass)=>class StylingMixin extends superClass {
        static get properties() {
            return {
                /**
         * A function that allows generating CSS class names for grid cells
         * based on their row and column. The return value should be the generated
         * class name as a string, or multiple class names separated by whitespace
         * characters.
         *
         * Receives two arguments:
         * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
         * - `model` The object with the properties related with
         *   the rendered item, contains:
         *   - `model.index` The index of the item.
         *   - `model.item` The item.
         *   - `model.expanded` Sublevel toggle state.
         *   - `model.level` Level of the tree represented with a horizontal offset of the toggle button.
         *   - `model.selected` Selected state.
         *
         * @type {GridCellClassNameGenerator | null | undefined}
         */ cellClassNameGenerator: Function
            };
        }
        static get observers() {
            return [
                "__cellClassNameGeneratorChanged(cellClassNameGenerator)"
            ];
        }
        __cellClassNameGeneratorChanged() {
            this.generateCellClassNames();
        }
        /**
     * Runs the `cellClassNameGenerator` for the visible cells.
     * If the generator depends on varying conditions, you need to
     * call this function manually in order to update the styles when
     * the conditions change.
     */ generateCellClassNames() {
            Array.from(this.$.items.children).filter((row)=>!row.hidden && !row.hasAttribute("loading")).forEach((row)=>this._generateCellClassNames(row, this.__getRowModel(row)));
        }
        /** @private */ _generateCellClassNames(row, model) {
            Array.from(row.children).forEach((cell)=>{
                if (cell.__generatedClasses) cell.__generatedClasses.forEach((className)=>cell.classList.remove(className));
                if (this.cellClassNameGenerator) {
                    const result = this.cellClassNameGenerator(cell._column, model);
                    cell.__generatedClasses = result && result.split(" ").filter((className)=>className.length > 0);
                    if (cell.__generatedClasses) cell.__generatedClasses.forEach((className)=>cell.classList.add(className));
                }
            });
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hp1ng":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinVerticalLayoutJs = require("./theme/lumo/vaadin-vertical-layout.js");
var _vaadinVerticalLayoutJs1 = require("./src/vaadin-vertical-layout.js");
parcelHelpers.exportAll(_vaadinVerticalLayoutJs1, exports);

},{"./theme/lumo/vaadin-vertical-layout.js":"9qCMy","./src/vaadin-vertical-layout.js":"1cnbL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qCMy":[function(require,module,exports) {
var _vaadinVerticalLayoutStylesJs = require("./vaadin-vertical-layout-styles.js");
var _vaadinVerticalLayoutJs = require("../../src/vaadin-vertical-layout.js");

},{"./vaadin-vertical-layout-styles.js":"eR8E0","../../src/vaadin-vertical-layout.js":"1cnbL"}],"eR8E0":[function(require,module,exports) {
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const verticalLayout = (0, _vaadinThemableMixinJs.css)`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-vertical-layout", verticalLayout, {
    moduleId: "lumo-vertical-layout"
});

},{"@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"1cnbL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VerticalLayout", ()=>VerticalLayout);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _elementMixinJs = require("@vaadin/component-base/src/element-mixin.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/**
 * `<vaadin-vertical-layout>` provides a simple way to vertically align your HTML elements.
 *
 * ```
 * <vaadin-vertical-layout>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </vaadin-vertical-layout>
 * ```
 *
 * ### Built-in Theme Variations
 *
 * `<vaadin-vertical-layout>` supports the following theme variations:
 *
 * Theme variation | Description
 * ---|---
 * `theme="margin"` | Applies the default amount of CSS margin for the host element (specified by the theme)
 * `theme="padding"` | Applies the default amount of CSS padding for the host element (specified by the theme)
 * `theme="spacing"` | Applies the default amount of CSS margin between items (specified by the theme)
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 */ class VerticalLayout extends (0, _elementMixinJs.ElementMixin)((0, _vaadinThemableMixinJs.ThemableMixin)((0, _polymerElementJs.PolymerElement))) {
    static get template() {
        return (0, _polymerElementJs.html)`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `;
    }
    static get is() {
        return "vaadin-vertical-layout";
    }
}
customElements.define(VerticalLayout.is, VerticalLayout);

},{"@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/element-mixin.js":"4Nib4","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzlCn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinTextFieldJs = require("./theme/lumo/vaadin-text-field.js");
var _vaadinTextFieldJs1 = require("./src/vaadin-text-field.js");
parcelHelpers.exportAll(_vaadinTextFieldJs1, exports);

},{"./theme/lumo/vaadin-text-field.js":"cmZFe","./src/vaadin-text-field.js":"kZ4QX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmZFe":[function(require,module,exports) {
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinInputContainerJs = require("@vaadin/input-container/theme/lumo/vaadin-input-container.js");
var _vaadinTextFieldStylesJs = require("./vaadin-text-field-styles.js");
var _vaadinTextFieldJs = require("../../src/vaadin-text-field.js");

},{"@vaadin/input-container/theme/lumo/vaadin-input-container.js":"jw5YL","./vaadin-text-field-styles.js":"i7FNc","../../src/vaadin-text-field.js":"kZ4QX"}],"jw5YL":[function(require,module,exports) {
var _vaadinInputContainerStylesJs = require("./vaadin-input-container-styles.js");
var _vaadinInputContainerJs = require("../../src/vaadin-input-container.js");

},{"./vaadin-input-container-styles.js":"icNW3","../../src/vaadin-input-container.js":"e5i2o"}],"icNW3":[function(require,module,exports) {
var _colorJs = require("@vaadin/vaadin-lumo-styles/color.js");
var _sizingJs = require("@vaadin/vaadin-lumo-styles/sizing.js");
var _styleJs = require("@vaadin/vaadin-lumo-styles/style.js");
var _typographyJs = require("@vaadin/vaadin-lumo-styles/typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-input-container", (0, _vaadinThemableMixinJs.css)`
    :host {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: inherit;
      pointer-events: none;
      background-color: var(--lumo-contrast-50pct);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--lumo-text-field-size, var(--lumo-size-m));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: 1px dashed var(--lumo-contrast-30pct);
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background-color: var(--lumo-error-color-10pct);
    }

    :host([invalid])::after {
      background-color: var(--lumo-error-color-50pct);
    }

    /* Slotted icons */
    ::slotted(iron-icon),
    ::slotted(vaadin-icon) {
      color: var(--lumo-contrast-60pct);
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(iron-icon[icon^='vaadin:']),
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `, {
    moduleId: "lumo-input-container"
});

},{"@vaadin/vaadin-lumo-styles/color.js":"2or7a","@vaadin/vaadin-lumo-styles/sizing.js":"b781B","@vaadin/vaadin-lumo-styles/style.js":"hYu1M","@vaadin/vaadin-lumo-styles/typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"e5i2o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputContainer", ()=>InputContainer);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymer = require("@polymer/polymer");
var _dirMixinJs = require("@vaadin/component-base/src/dir-mixin.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
class InputContainer extends (0, _vaadinThemableMixinJs.ThemableMixin)((0, _dirMixinJs.DirMixin)((0, _polymer.PolymerElement))) {
    static get is() {
        return "vaadin-input-container";
    }
    static get template() {
        return (0, _polymer.html)`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          /* See the workaround at the end of this file. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `;
    }
    static get properties() {
        return {
            /**
       * If true, the user cannot interact with this element.
       */ disabled: {
                type: Boolean,
                reflectToAttribute: true
            },
            /**
       * Set to true to make this element read-only.
       */ readonly: {
                type: Boolean,
                reflectToAttribute: true
            },
            /**
       * Set to true when the element is invalid.
       */ invalid: {
                type: Boolean,
                reflectToAttribute: true
            }
        };
    }
    /** @protected */ ready() {
        super.ready();
        this.addEventListener("pointerdown", (event)=>{
            if (event.target === this) // Prevent direct clicks to the input container from blurring the input
            event.preventDefault();
        });
        this.addEventListener("click", (event)=>{
            if (event.target === this) // The vaadin-input-container element was directly clicked,
            // focus any focusable child element from the default slot
            this.shadowRoot.querySelector("slot:not([name])").assignedNodes({
                flatten: true
            }).forEach((node)=>node.focus && node.focus());
        });
    }
}
customElements.define(InputContainer.is, InputContainer);
const placeholderStyleWorkaround = (0, _vaadinThemableMixinJs.css)`
  /* Needed for Safari, where ::slotted(...)::placeholder does not work */
  :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
    font: inherit;
    color: inherit;
  }
`;
const $tpl = document.createElement("template");
$tpl.innerHTML = `<style>${placeholderStyleWorkaround.toString()}</style>`;
document.head.appendChild($tpl.content);

},{"@polymer/polymer":"896Hh","@vaadin/component-base/src/dir-mixin.js":"e4xcC","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7FNc":[function(require,module,exports) {
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _inputFieldSharedJs = require("@vaadin/vaadin-lumo-styles/mixins/input-field-shared.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-text-field", (0, _inputFieldSharedJs.inputFieldShared), {
    moduleId: "lumo-text-field-styles"
});

},{"@vaadin/vaadin-lumo-styles/mixins/input-field-shared.js":"5oyPW","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"5oyPW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputField", ()=>inputField);
parcelHelpers.export(exports, "inputFieldShared", ()=>inputFieldShared);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _colorJs = require("../color.js");
var _fontIconsJs = require("../font-icons.js");
var _sizingJs = require("../sizing.js");
var _spacingJs = require("../spacing.js");
var _styleJs = require("../style.js");
var _typographyJs = require("../typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
var _fieldButtonJs = require("./field-button.js");
var _helperJs = require("./helper.js");
var _requiredFieldJs = require("./required-field.js");
const inputField = (0, _vaadinThemableMixinJs.css)`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--lumo-secondary-text-color);
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: 0.1;
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`;
const inputFieldShared = [
    (0, _requiredFieldJs.requiredField),
    (0, _fieldButtonJs.fieldButton),
    (0, _helperJs.helper),
    inputField
];
(0, _vaadinThemableMixinJs.registerStyles)("", inputFieldShared, {
    moduleId: "lumo-input-field-shared-styles"
});

},{"../color.js":"2or7a","../font-icons.js":"ecMY2","../sizing.js":"b781B","../spacing.js":"7WoUL","../style.js":"hYu1M","../typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","./field-button.js":"9DnGF","./helper.js":"3cGaG","./required-field.js":"5hKhb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9DnGF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fieldButton", ()=>fieldButton);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _colorJs = require("../color.js");
var _fontIconsJs = require("../font-icons.js");
var _sizingJs = require("../sizing.js");
var _styleJs = require("../style.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const fieldButton = (0, _vaadinThemableMixinJs.css)`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("", fieldButton, {
    moduleId: "lumo-field-button"
});

},{"../color.js":"2or7a","../font-icons.js":"ecMY2","../sizing.js":"b781B","../style.js":"hYu1M","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cGaG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "helper", ()=>helper);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _colorJs = require("../color.js");
var _sizingJs = require("../sizing.js");
var _styleJs = require("../style.js");
var _typographyJs = require("../typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const helper = (0, _vaadinThemableMixinJs.css)`
  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 0.4em;
  }

  [part='helper-text'] {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;

},{"../color.js":"2or7a","../sizing.js":"b781B","../style.js":"hYu1M","../typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5hKhb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requiredField", ()=>requiredField);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _colorJs = require("../color.js");
var _spacingJs = require("../spacing.js");
var _styleJs = require("../style.js");
var _typographyJs = require("../typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const requiredField = (0, _vaadinThemableMixinJs.css)`
  [part='label'] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '•');
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part='required-indicator']::after {
    opacity: 1;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("", requiredField, {
    moduleId: "lumo-required-field"
});

},{"../color.js":"2or7a","../spacing.js":"7WoUL","../style.js":"hYu1M","../typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZ4QX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * `<vaadin-text-field>` is a web component that allows the user to input and edit text.
 *
 * ```html
 * <vaadin-text-field label="First Name"></vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-field>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property                | Description                | Default
 * -------------------------------|----------------------------|---------
 * `--vaadin-field-default-width` | Default width of the field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name            | Description
 * ---------------------|----------------
 * `label`              | The label element
 * `input-field`        | The element that wraps prefix, value and suffix
 * `clear-button`       | The clear button
 * `error-message`      | The error message element
 * `helper-text`        | The helper text element wrapper
 * `required-indicator` | The `required` state indicator element
 *
 * The following state attributes are available for styling:
 *
 * Attribute           | Description | Part name
 * --------------------|-------------|------------
 * `disabled`          | Set to a disabled text field | :host
 * `has-value`         | Set when the element has a value | :host
 * `has-label`         | Set when the element has a label | :host
 * `has-helper`        | Set when the element has helper text or slot | :host
 * `has-error-message` | Set when the element has an error message | :host
 * `invalid`           | Set when the element is invalid | :host
 * `input-prevented`   | Temporarily set when invalid input is prevented | :host
 * `focused`           | Set when the element is focused | :host
 * `focus-ring`        | Set when the element is keyboard focused | :host
 * `readonly`          | Set to a readonly text field | :host
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {Event} input - Fired when the value is changed by the user: on every typing keystroke, and the value is cleared using the clear button.
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 *
 * @extends HTMLElement
 * @mixes ElementMixin
 * @mixes ThemableMixin
 * @mixes PatternMixin
 * @mixes InputFieldMixin
 */ parcelHelpers.export(exports, "TextField", ()=>TextField);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinInputContainerJs = require("@vaadin/input-container/src/vaadin-input-container.js");
var _polymer = require("@polymer/polymer");
var _elementMixinJs = require("@vaadin/component-base/src/element-mixin.js");
var _inputControllerJs = require("@vaadin/field-base/src/input-controller.js");
var _inputFieldMixinJs = require("@vaadin/field-base/src/input-field-mixin.js");
var _labelledInputControllerJs = require("@vaadin/field-base/src/labelled-input-controller.js");
var _patternMixinJs = require("@vaadin/field-base/src/pattern-mixin.js");
var _inputFieldSharedStylesJs = require("@vaadin/field-base/src/styles/input-field-shared-styles.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-text-field", (0, _inputFieldSharedStylesJs.inputFieldShared), {
    moduleId: "vaadin-text-field-styles"
});
class TextField extends (0, _patternMixinJs.PatternMixin)((0, _inputFieldMixinJs.InputFieldMixin)((0, _vaadinThemableMixinJs.ThemableMixin)((0, _elementMixinJs.ElementMixin)((0, _polymer.PolymerElement))))) {
    static get is() {
        return "vaadin-text-field";
    }
    static get template() {
        return (0, _polymer.html)`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `;
    }
    static get properties() {
        return {
            /**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */ maxlength: {
                type: Number
            },
            /**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */ minlength: {
                type: Number
            }
        };
    }
    static get delegateAttrs() {
        return [
            ...super.delegateAttrs,
            "maxlength",
            "minlength"
        ];
    }
    static get constraints() {
        return [
            ...super.constraints,
            "maxlength",
            "minlength"
        ];
    }
    constructor(){
        super();
        this._setType("text");
    }
    /** @protected */ get clearElement() {
        return this.$.clearButton;
    }
    /** @protected */ ready() {
        super.ready();
        this.addController(new (0, _inputControllerJs.InputController)(this, (input)=>{
            this._setInputElement(input);
            this._setFocusElement(input);
            this.stateTarget = input;
            this.ariaTarget = input;
        }));
        this.addController(new (0, _labelledInputControllerJs.LabelledInputController)(this.inputElement, this._labelController));
    }
}
customElements.define(TextField.is, TextField);

},{"@vaadin/input-container/src/vaadin-input-container.js":"e5i2o","@polymer/polymer":"896Hh","@vaadin/component-base/src/element-mixin.js":"4Nib4","@vaadin/field-base/src/input-controller.js":"8tcOX","@vaadin/field-base/src/input-field-mixin.js":"7rq6Z","@vaadin/field-base/src/labelled-input-controller.js":"4s3oE","@vaadin/field-base/src/pattern-mixin.js":"fdmUY","@vaadin/field-base/src/styles/input-field-shared-styles.js":"67GTt","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7rq6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputFieldMixin", ()=>InputFieldMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _inputControlMixinJs = require("./input-control-mixin.js");
const InputFieldMixin = (superclass)=>class InputFieldMixinClass extends (0, _inputControlMixinJs.InputControlMixin)(superclass) {
        static get properties() {
            return {
                /**
         * Whether the value of the control can be automatically completed by the browser.
         * List of available options at:
         * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
         */ autocomplete: {
                    type: String
                },
                /**
         * This is a property supported by Safari that is used to control whether
         * autocorrection should be enabled when the user is entering/editing the text.
         * Possible values are:
         * on: Enable autocorrection.
         * off: Disable autocorrection.
         */ autocorrect: {
                    type: String
                },
                /**
         * This is a property supported by Safari and Chrome that is used to control whether
         * autocapitalization should be enabled when the user is entering/editing the text.
         * Possible values are:
         * characters: Characters capitalization.
         * words: Words capitalization.
         * sentences: Sentences capitalization.
         * none: No capitalization.
         */ autocapitalize: {
                    type: String
                },
                /**
         * A pattern matched against individual characters the user inputs.
         * When set, the field will prevent:
         * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
         * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
         * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
         *
         * For example, to enable entering only numbers and minus signs,
         * `_enabledCharPattern = "[\\d-]"`
         * @protected
         */ _enabledCharPattern: {
                    type: String,
                    observer: "_enabledCharPatternChanged"
                }
            };
        }
        static get delegateAttrs() {
            return [
                ...super.delegateAttrs,
                "autocapitalize",
                "autocomplete",
                "autocorrect"
            ];
        }
        constructor(){
            super();
            this._boundOnPaste = this._onPaste.bind(this);
            this._boundOnDrop = this._onDrop.bind(this);
            this._boundOnBeforeInput = this._onBeforeInput.bind(this);
        }
        /**
     * @param {HTMLElement} input
     * @protected
     * @override
     */ _inputElementChanged(input) {
            super._inputElementChanged(input);
            if (input) {
                // Discard value set on the custom slotted input.
                if (input.value && input.value !== this.value) {
                    console.warn(`Please define value on the <${this.localName}> component!`);
                    input.value = "";
                }
                if (this.value) input.value = this.value;
            }
        }
        // Workaround for https://github.com/Polymer/polymer/issues/5259
        get __data() {
            return this.__dataValue || {};
        }
        set __data(value) {
            this.__dataValue = value;
        }
        /**
     * Override an event listener from `DelegateFocusMixin`.
     * @param {FocusEvent} event
     * @protected
     * @override
     */ _onBlur(event) {
            super._onBlur(event);
            this.validate();
        }
        /**
     * Override an event listener from `InputMixin`
     * to mark as valid after user started typing.
     * @param {Event} event
     * @protected
     * @override
     */ _onInput(event) {
            super._onInput(event);
            if (this.invalid) this.validate();
        }
        /**
     * Override a method from `InputMixin` to validate the field
     * when a new value is set programmatically.
     * @param {string} value
     * @protected
     * @override
     */ _forwardInputValue(value) {
            super._forwardInputValue(value);
            if (this.invalid) this.validate();
        }
        /**
     * Override a method from `InputMixin`.
     * @param {!HTMLElement} input
     * @protected
     * @override
     */ _addInputListeners(input) {
            super._addInputListeners(input);
            input.addEventListener("paste", this._boundOnPaste);
            input.addEventListener("drop", this._boundOnDrop);
            input.addEventListener("beforeinput", this._boundOnBeforeInput);
        }
        /**
     * Override a method from `InputMixin`.
     * @param {!HTMLElement} input
     * @protected
     * @override
     */ _removeInputListeners(input) {
            super._removeInputListeners(input);
            input.removeEventListener("paste", this._boundOnPaste);
            input.removeEventListener("drop", this._boundOnDrop);
            input.removeEventListener("beforeinput", this._boundOnBeforeInput);
        }
        /**
     * Override an event listener from `ClearButtonMixin`
     * to avoid adding a separate listener.
     * @param {!KeyboardEvent} event
     * @protected
     * @override
     */ _onKeyDown(event) {
            if (this._enabledCharPattern && !this.__shouldAcceptKey(event)) event.preventDefault();
            super._onKeyDown(event);
        }
        /** @private */ __shouldAcceptKey(event) {
            return event.metaKey || event.ctrlKey || !event.key || event.key.length !== 1 || this.__enabledCharRegExp.test(event.key);
        }
        /** @private */ _onPaste(e) {
            if (this._enabledCharPattern) {
                const pastedText = (e.clipboardData || window.clipboardData).getData("text");
                if (!this.__enabledTextRegExp.test(pastedText)) e.preventDefault();
            }
        }
        /** @private */ _onDrop(e) {
            if (this._enabledCharPattern) {
                const draggedText = e.dataTransfer.getData("text");
                if (!this.__enabledTextRegExp.test(draggedText)) e.preventDefault();
            }
        }
        /** @private */ _onBeforeInput(e) {
            // The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
            // but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
            // because it seems to be the only way to detect and prevent specific keys on mobile devices.
            // See https://github.com/vaadin/vaadin-text-field/issues/429
            if (this._enabledCharPattern && e.data && !this.__enabledTextRegExp.test(e.data)) e.preventDefault();
        }
        /** @private */ _enabledCharPatternChanged(charPattern) {
            if (charPattern) {
                this.__enabledCharRegExp = new RegExp("^" + charPattern + "$");
                this.__enabledTextRegExp = new RegExp("^" + charPattern + "*$");
            }
        }
    };

},{"./input-control-mixin.js":"eymqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eymqq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputControlMixin", ()=>InputControlMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _keyboardMixinJs = require("@vaadin/component-base/src/keyboard-mixin.js");
var _delegateFocusMixinJs = require("./delegate-focus-mixin.js");
var _fieldMixinJs = require("./field-mixin.js");
var _inputConstraintsMixinJs = require("./input-constraints-mixin.js");
const InputControlMixin = (superclass)=>class InputControlMixinClass extends (0, _delegateFocusMixinJs.DelegateFocusMixin)((0, _inputConstraintsMixinJs.InputConstraintsMixin)((0, _fieldMixinJs.FieldMixin)((0, _keyboardMixinJs.KeyboardMixin)(superclass)))) {
        static get properties() {
            return {
                /**
         * If true, the input text gets fully selected when the field is focused using click or touch / tap.
         */ autoselect: {
                    type: Boolean,
                    value: false
                },
                /**
         * Set to true to display the clear icon which clears the input.
         * @attr {boolean} clear-button-visible
         */ clearButtonVisible: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false
                },
                /**
         * The name of this field.
         */ name: {
                    type: String,
                    reflectToAttribute: true
                },
                /**
         * A hint to the user of what can be entered in the field.
         */ placeholder: {
                    type: String,
                    reflectToAttribute: true
                },
                /**
         * When present, it specifies that the field is read-only.
         */ readonly: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true
                },
                /**
         * The text usually displayed in a tooltip popup when the mouse is over the field.
         */ title: {
                    type: String,
                    reflectToAttribute: true
                }
            };
        }
        static get delegateAttrs() {
            return [
                ...super.delegateAttrs,
                "name",
                "type",
                "placeholder",
                "readonly",
                "invalid",
                "title"
            ];
        }
        /**
     * Any element extending this mixin is required to implement this getter.
     * It returns the reference to the clear button element.
     * @protected
     * @return {Element | null | undefined}
     */ get clearElement() {
            console.warn(`Please implement the 'clearElement' property in <${this.localName}>`);
            return null;
        }
        /** @protected */ ready() {
            super.ready();
            if (this.clearElement) this.clearElement.addEventListener("click", (e)=>this._onClearButtonClick(e));
        }
        /**
     * @param {Event} event
     * @protected
     */ _onClearButtonClick(event) {
            event.preventDefault();
            this.inputElement.focus();
            this.__clear();
        }
        /**
     * Override an event listener from `DelegateFocusMixin`.
     * @param {FocusEvent} event
     * @protected
     * @override
     */ _onFocus(event) {
            super._onFocus(event);
            if (this.autoselect && this.inputElement) this.inputElement.select();
        }
        /**
     * Override an event listener inherited from `KeydownMixin` to clear on Esc.
     * Components that extend this mixin can prevent this behavior by overriding
     * this method without calling `super._onKeyDown` to provide custom logic.
     * @param {KeyboardEvent} event
     * @protected
     * @override
     */ _onKeyDown(event) {
            super._onKeyDown(event);
            if (event.key === "Escape" && this.clearButtonVisible && !!this.value) {
                event.stopPropagation();
                this.__clear();
            }
        }
        /**
     * Override an event listener inherited from `InputMixin`
     * to capture native `change` event and make sure that
     * a new one is dispatched after validation runs.
     * @param {Event} event
     * @protected
     * @override
     */ _onChange(event) {
            event.stopPropagation();
            this.validate();
            this.dispatchEvent(new CustomEvent("change", {
                detail: {
                    sourceEvent: event
                },
                bubbles: event.bubbles,
                cancelable: event.cancelable
            }));
        }
        /** @private */ __clear() {
            this.clear();
            this.inputElement.dispatchEvent(new Event("input", {
                bubbles: true,
                composed: true
            }));
            this.inputElement.dispatchEvent(new Event("change", {
                bubbles: true
            }));
        }
    };

},{"@vaadin/component-base/src/keyboard-mixin.js":"lSr1C","./delegate-focus-mixin.js":"3lYzM","./field-mixin.js":"dcPGz","./input-constraints-mixin.js":"2uNfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcPGz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FieldMixin", ()=>FieldMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _controllerMixinJs = require("@vaadin/component-base/src/controller-mixin.js");
var _errorControllerJs = require("./error-controller.js");
var _fieldAriaControllerJs = require("./field-aria-controller.js");
var _helperControllerJs = require("./helper-controller.js");
var _labelMixinJs = require("./label-mixin.js");
var _validateMixinJs = require("./validate-mixin.js");
const FieldMixin = (superclass)=>class FieldMixinClass extends (0, _validateMixinJs.ValidateMixin)((0, _labelMixinJs.LabelMixin)((0, _controllerMixinJs.ControllerMixin)(superclass))) {
        static get properties() {
            return {
                /**
         * A target element to which ARIA attributes are set.
         * @protected
         */ ariaTarget: {
                    type: Object,
                    observer: "_ariaTargetChanged"
                },
                /**
         * Error to show when the field is invalid.
         *
         * @attr {string} error-message
         */ errorMessage: {
                    type: String,
                    observer: "_errorMessageChanged"
                },
                /**
         * String used for the helper text.
         * @attr {string} helper-text
         */ helperText: {
                    type: String,
                    observer: "_helperTextChanged"
                },
                /** @protected */ _helperId: String
            };
        }
        static get observers() {
            return [
                "_invalidChanged(invalid)",
                "_requiredChanged(required)"
            ];
        }
        /** @protected */ get _errorId() {
            return this._errorController.errorId;
        }
        /**
     * @protected
     * @return {HTMLElement}
     */ get _errorNode() {
            return this._errorController.node;
        }
        /** @protected */ get _helperId() {
            return this._helperController.helperId;
        }
        /**
     * @protected
     * @return {HTMLElement}
     */ get _helperNode() {
            return this._helperController.node;
        }
        constructor(){
            super();
            this._fieldAriaController = new (0, _fieldAriaControllerJs.FieldAriaController)(this);
            this._helperController = new (0, _helperControllerJs.HelperController)(this);
            this._errorController = new (0, _errorControllerJs.ErrorController)(this);
            this.addController(this._fieldAriaController);
            this.addController(this._helperController);
            this.addController(this._errorController);
            this._labelController.addEventListener("label-changed", (event)=>{
                const { hasLabel , node  } = event.detail;
                this.__labelChanged(hasLabel, node);
            });
            this._helperController.addEventListener("helper-changed", (event)=>{
                const { hasHelper , node  } = event.detail;
                this.__helperChanged(hasHelper, node);
            });
        }
        /** @private */ __helperChanged(hasHelper, helperNode) {
            if (hasHelper) this._fieldAriaController.setHelperId(helperNode.id);
            else this._fieldAriaController.setHelperId(null);
        }
        /** @private */ __labelChanged(hasLabel, labelNode) {
            // Label ID should be only added when the label content is present.
            // Otherwise, it may conflict with an `aria-label` attribute possibly added by the user.
            if (hasLabel) this._fieldAriaController.setLabelId(labelNode.id);
            else this._fieldAriaController.setLabelId(null);
        }
        /**
     * @param {string | null | undefined} errorMessage
     * @protected
     */ _errorMessageChanged(errorMessage) {
            this._errorController.setErrorMessage(errorMessage);
        }
        /**
     * @param {string} helperText
     * @protected
     */ _helperTextChanged(helperText) {
            this._helperController.setHelperText(helperText);
        }
        /**
     * @param {HTMLElement | null | undefined} target
     * @protected
     */ _ariaTargetChanged(target) {
            if (target) this._fieldAriaController.setTarget(target);
        }
        /**
     * @param {boolean} required
     * @protected
     */ _requiredChanged(required) {
            this._fieldAriaController.setRequired(required);
        }
        /**
     * @param {boolean} required
     * @protected
     */ _invalidChanged(invalid) {
            this._errorController.setInvalid(invalid);
            // This timeout is needed to prevent NVDA from announcing the error message twice:
            // 1. Once adding the `[role=alert]` attribute by the `_updateErrorMessage` method (OK).
            // 2. Once linking the error ID with the ARIA target here (unwanted).
            // Related issue: https://github.com/vaadin/web-components/issues/3061.
            setTimeout(()=>{
                // Error message ID needs to be dynamically added / removed based on the validity
                // Otherwise assistive technologies would announce the error, even if we hide it.
                if (invalid) this._fieldAriaController.setErrorId(this._errorController.errorId);
                else this._fieldAriaController.setErrorId(null);
            });
        }
    };

},{"@vaadin/component-base/src/controller-mixin.js":"57izu","./error-controller.js":"9BMEw","./field-aria-controller.js":"iFjTx","./helper-controller.js":"b5eUB","./label-mixin.js":"6W2eY","./validate-mixin.js":"3msxQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9BMEw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller that manages the error message node content.
 */ parcelHelpers.export(exports, "ErrorController", ()=>ErrorController);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _slotControllerJs = require("@vaadin/component-base/src/slot-controller.js");
class ErrorController extends (0, _slotControllerJs.SlotController) {
    constructor(host){
        super(host, "error-message", ()=>document.createElement("div"), (_host, node)=>{
            this.__updateErrorId(node);
            this.__updateHasError();
        });
    }
    /**
   * ID attribute value set on the error message element.
   *
   * @return {string}
   */ get errorId() {
        return this.node && this.node.id;
    }
    /**
   * Set the error message element text content.
   *
   * @param {string} errorMessage
   */ setErrorMessage(errorMessage) {
        this.errorMessage = errorMessage;
        this.__updateHasError();
    }
    /**
   * Set invalid state for detecting whether to show error message.
   *
   * @param {boolean} invalid
   */ setInvalid(invalid) {
        this.invalid = invalid;
        this.__updateHasError();
    }
    /**
   * Override to initialize the newly added custom label.
   *
   * @param {Node} errorNode
   * @protected
   * @override
   */ initCustomNode(errorNode) {
        this.__updateErrorId(errorNode);
        // Save the custom error message content on the host.
        if (errorNode.textContent && !this.errorMessage) this.errorMessage = errorNode.textContent.trim();
        this.__updateHasError();
    }
    /**
   * Override to cleanup label node when it's removed.
   *
   * @param {Node} node
   * @protected
   * @override
   */ teardownNode(node) {
        let errorNode = this.getSlotChild();
        // If custom error was removed, restore the default one.
        if (!errorNode && node !== this.defaultNode) {
            errorNode = this.attachDefaultNode();
            // Run initializer to update default label and ID.
            this.initNode(errorNode);
        }
        this.__updateHasError();
    }
    /**
   * @param {string} error
   * @private
   */ __isNotEmpty(error) {
        return Boolean(error && error.trim() !== "");
    }
    /** @private */ __updateHasError() {
        const errorNode = this.node;
        const hasError = Boolean(this.invalid && this.__isNotEmpty(this.errorMessage));
        // Update both default and custom error message node.
        if (errorNode) {
            errorNode.textContent = hasError ? this.errorMessage : "";
            errorNode.hidden = !hasError;
            // Role alert will make the error message announce immediately
            // as the field becomes invalid
            if (hasError) errorNode.setAttribute("role", "alert");
            else errorNode.removeAttribute("role");
        }
        this.host.toggleAttribute("has-error-message", hasError);
    }
    /**
   * @param {HTMLElement} errorNode
   * @private
   */ __updateErrorId(errorNode) {
        if (!errorNode.id) errorNode.id = this.defaultId;
    }
}

},{"@vaadin/component-base/src/slot-controller.js":"bAuIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFjTx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller for managing ARIA attributes for a field element:
 * either the component itself or slotted `<input>` element.
 */ parcelHelpers.export(exports, "FieldAriaController", ()=>FieldAriaController);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _utilsJs = require("./utils.js");
class FieldAriaController {
    constructor(host){
        this.host = host;
        this.__required = false;
    }
    /**
   * Sets a target element to which ARIA attributes are added.
   *
   * @param {HTMLElement} target
   */ setTarget(target) {
        this.__target = target;
        this.__setAriaRequiredAttribute(this.__required);
        this.__setLabelIdToAriaAttribute(this.__labelId);
        this.__setErrorIdToAriaAttribute(this.__errorId);
        this.__setHelperIdToAriaAttribute(this.__helperId);
    }
    /**
   * Toggles the `aria-required` attribute on the target element
   * if the target is the host component (e.g. a field group).
   * Otherwise, it does nothing.
   *
   * @param {boolean} required
   */ setRequired(required) {
        this.__setAriaRequiredAttribute(required);
        this.__required = required;
    }
    /**
   * Links the target element with a slotted label element
   * via the target's attribute `aria-labelledby`.
   *
   * To unlink the previous slotted label element, pass `null` as `labelId`.
   *
   * @param {string | null} labelId
   */ setLabelId(labelId) {
        this.__setLabelIdToAriaAttribute(labelId, this.__labelId);
        this.__labelId = labelId;
    }
    /**
   * Links the target element with a slotted error element via the target's attribute:
   * - `aria-labelledby` if the target is the host component (e.g a field group).
   * - `aria-describedby` otherwise.
   *
   * To unlink the previous slotted error element, pass `null` as `errorId`.
   *
   * @param {string | null} errorId
   */ setErrorId(errorId) {
        this.__setErrorIdToAriaAttribute(errorId, this.__errorId);
        this.__errorId = errorId;
    }
    /**
   * Links the target element with a slotted helper element via the target's attribute:
   * - `aria-labelledby` if the target is the host component (e.g a field group).
   * - `aria-describedby` otherwise.
   *
   * To unlink the previous slotted helper element, pass `null` as `helperId`.
   *
   * @param {string | null} helperId
   */ setHelperId(helperId) {
        this.__setHelperIdToAriaAttribute(helperId, this.__helperId);
        this.__helperId = helperId;
    }
    /**
   * `true` if the target element is the host component itself, `false` otherwise.
   *
   * @return {boolean}
   * @private
   */ get __isGroupField() {
        return this.__target === this.host;
    }
    /**
   * @param {string | null | undefined} labelId
   * @param {string | null | undefined} oldLabelId
   * @private
   */ __setLabelIdToAriaAttribute(labelId, oldLabelId) {
        this.__setAriaAttributeId("aria-labelledby", labelId, oldLabelId);
    }
    /**
   * @param {string | null | undefined} errorId
   * @param {string | null | undefined} oldErrorId
   * @private
   */ __setErrorIdToAriaAttribute(errorId, oldErrorId) {
        // For groups, add all IDs to aria-labelledby rather than aria-describedby -
        // that should guarantee that it's announced when the group is entered.
        if (this.__isGroupField) this.__setAriaAttributeId("aria-labelledby", errorId, oldErrorId);
        else this.__setAriaAttributeId("aria-describedby", errorId, oldErrorId);
    }
    /**
   * @param {string | null | undefined} helperId
   * @param {string | null | undefined} oldHelperId
   * @private
   */ __setHelperIdToAriaAttribute(helperId, oldHelperId) {
        // For groups, add all IDs to aria-labelledby rather than aria-describedby -
        // that should guarantee that it's announced when the group is entered.
        if (this.__isGroupField) this.__setAriaAttributeId("aria-labelledby", helperId, oldHelperId);
        else this.__setAriaAttributeId("aria-describedby", helperId, oldHelperId);
    }
    /**
   * @param {boolean} required
   * @private
   */ __setAriaRequiredAttribute(required) {
        if (!this.__target) return;
        if (!this.__isGroupField) // native <input> or <textarea>, required is enough
        return;
        if (required) this.__target.setAttribute("aria-required", "true");
        else this.__target.removeAttribute("aria-required");
    }
    /**
   * @param {string | null | undefined} newId
   * @param {string | null | undefined} oldId
   * @private
   */ __setAriaAttributeId(attr, newId, oldId) {
        if (!this.__target) return;
        if (oldId) (0, _utilsJs.removeValueFromAttribute)(this.__target, attr, oldId);
        if (newId) (0, _utilsJs.addValueToAttribute)(this.__target, attr, newId);
    }
}

},{"./utils.js":"01oRK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01oRK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Adds a value to an attribute containing space-delimited values.
 *
 * @param {HTMLElement} element
 * @param {string} attr
 * @param {string} value
 */ parcelHelpers.export(exports, "addValueToAttribute", ()=>addValueToAttribute);
/**
 * Removes a value from an attribute containing space-delimited values.
 * If the value is the last one, the whole attribute is removed.
 *
 * @param {HTMLElement} element
 * @param {string} attr
 * @param {string} value
 */ parcelHelpers.export(exports, "removeValueFromAttribute", ()=>removeValueFromAttribute);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * @param {string} value
 * @return {Set<string>}
 */ function deserializeAttributeValue(value) {
    if (!value) return new Set();
    return new Set(value.split(" "));
}
/**
 * @param {Set<string>} values
 * @return {string}
 */ function serializeAttributeValue(values) {
    return [
        ...values
    ].join(" ");
}
function addValueToAttribute(element, attr, value) {
    const values = deserializeAttributeValue(element.getAttribute(attr));
    values.add(value);
    element.setAttribute(attr, serializeAttributeValue(values));
}
function removeValueFromAttribute(element, attr, value) {
    const values = deserializeAttributeValue(element.getAttribute(attr));
    values.delete(value);
    if (values.size === 0) {
        element.removeAttribute(attr);
        return;
    }
    element.setAttribute(attr, serializeAttributeValue(values));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5eUB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A controller that manages the helper node content.
 */ parcelHelpers.export(exports, "HelperController", ()=>HelperController);
/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _slotControllerJs = require("@vaadin/component-base/src/slot-controller.js");
class HelperController extends (0, _slotControllerJs.SlotController) {
    constructor(host){
        // Do not provide slot factory, as only create helper lazily.
        super(host, "helper");
    }
    get helperId() {
        return this.node && this.node.id;
    }
    /**
   * Override to initialize the newly added custom helper.
   *
   * @param {Node} helperNode
   * @protected
   * @override
   */ initCustomNode(helperNode) {
        this.__updateHelperId(helperNode);
        this.__observeHelper(helperNode);
        const hasHelper = this.__hasHelper(helperNode);
        this.__toggleHasHelper(hasHelper);
    }
    /**
   * Override to cleanup helper node when it's removed.
   *
   * @param {Node} _node
   * @protected
   * @override
   */ teardownNode(_node) {
        // The observer does not exist when the default helper is removed.
        if (this.__helperIdObserver) this.__helperIdObserver.disconnect();
        const helperNode = this.getSlotChild();
        // Custom node is added to helper slot
        if (helperNode && helperNode !== this.defaultNode) {
            const hasHelper = this.__hasHelper(helperNode);
            this.__toggleHasHelper(hasHelper);
        } else // Restore default helper if needed
        this.__applyDefaultHelper(this.helperText, helperNode);
    }
    /**
   * Set helper text based on corresponding host property.
   * @param {string} helperText
   */ setHelperText(helperText) {
        this.helperText = helperText;
        const helperNode = this.getSlotChild();
        if (!helperNode || helperNode === this.defaultNode) this.__applyDefaultHelper(helperText, helperNode);
    }
    /**
   * @param {HTMLElement} helperNode
   * @return {boolean}
   * @private
   */ __hasHelper(helperNode) {
        if (!helperNode) return false;
        return helperNode.children.length > 0 || this.__isNotEmpty(helperNode.textContent);
    }
    /**
   * @param {string} helperText
   * @private
   */ __isNotEmpty(helperText) {
        return helperText && helperText.trim() !== "";
    }
    /**
   * @param {string} helperText
   * @param {Node} helperNode
   * @private
   */ __applyDefaultHelper(helperText, helperNode) {
        const hasHelperText = this.__isNotEmpty(helperText);
        if (hasHelperText && !helperNode) {
            // Set slot factory lazily to only create helper node when needed.
            this.slotFactory = ()=>document.createElement("div");
            helperNode = this.attachDefaultNode();
            this.__updateHelperId(helperNode);
            this.__observeHelper(helperNode);
        }
        if (helperNode) helperNode.textContent = helperText;
        this.__toggleHasHelper(hasHelperText);
    }
    /**
   * @param {HTMLElement} helperNode
   * @private
   */ __observeHelper(helperNode) {
        this.__helperObserver = new MutationObserver((mutations)=>{
            mutations.forEach((mutation)=>{
                const target = mutation.target;
                // Ensure the mutation target is the currently connected helper
                // to ignore async mutations dispatched for removed element.
                const isHelperMutation = target === this.node;
                if (mutation.type === "attributes") // We use attributeFilter to only observe ID mutation,
                // no need to check for attribute name separately.
                {
                    if (isHelperMutation && target.id !== this.defaultId) this.__updateHelperId(target);
                } else if (isHelperMutation || target.parentElement === this.node) {
                    // Update has-helper when textContent changes
                    const hasHelper = this.__hasHelper(this.node);
                    this.__toggleHasHelper(hasHelper);
                }
            });
        });
        // Observe changes to helper ID attribute, text content and children.
        this.__helperObserver.observe(helperNode, {
            attributes: true,
            attributeFilter: [
                "id"
            ],
            childList: true,
            subtree: true,
            characterData: true
        });
    }
    /**
   * @param {boolean} hasHelper
   * @private
   */ __toggleHasHelper(hasHelper) {
        this.host.toggleAttribute("has-helper", hasHelper);
        // Make it possible for other mixins to observe change
        this.dispatchEvent(new CustomEvent("helper-changed", {
            detail: {
                hasHelper,
                node: this.node
            }
        }));
    }
    /**
   * @param {HTMLElement} helperNode
   * @private
   */ __updateHelperId(helperNode) {
        if (!helperNode.id) helperNode.id = this.defaultId;
    }
}

},{"@vaadin/component-base/src/slot-controller.js":"bAuIz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3msxQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValidateMixin", ()=>ValidateMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
const ValidateMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class ValidateMixinClass extends superclass {
        static get properties() {
            return {
                /**
           * Set to true when the field is invalid.
           */ invalid: {
                    type: Boolean,
                    reflectToAttribute: true,
                    notify: true,
                    value: false
                },
                /**
           * Specifies that the user must fill in a value.
           */ required: {
                    type: Boolean,
                    reflectToAttribute: true
                }
            };
        }
        /**
       * Returns true if field is valid, and sets `invalid` based on the field validity.
       *
       * @return {boolean} True if the value is valid.
       */ validate() {
            return !(this.invalid = !this.checkValidity());
        }
        /**
       * Returns true if the field value satisfies all constraints (if any).
       *
       * @return {boolean}
       */ checkValidity() {
            return !this.required || !!this.value;
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uNfB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputConstraintsMixin", ()=>InputConstraintsMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _mixinJs = require("@polymer/polymer/lib/utils/mixin.js");
var _delegateStateMixinJs = require("./delegate-state-mixin.js");
var _inputMixinJs = require("./input-mixin.js");
var _validateMixinJs = require("./validate-mixin.js");
const InputConstraintsMixin = (0, _mixinJs.dedupingMixin)((superclass)=>class InputConstraintsMixinClass extends (0, _delegateStateMixinJs.DelegateStateMixin)((0, _validateMixinJs.ValidateMixin)((0, _inputMixinJs.InputMixin)(superclass))) {
        /**
       * An array of attributes which participate in the input validation.
       * Changing these attributes will cause the input to re-validate.
       *
       * IMPORTANT: The attributes should be properly delegated to the input element
       * from the host using `delegateAttrs` getter (see `DelegateStateMixin`).
       * The `required` attribute is already delegated.
       */ static get constraints() {
            return [
                "required"
            ];
        }
        static get delegateAttrs() {
            return [
                ...super.delegateAttrs,
                "required"
            ];
        }
        /** @protected */ ready() {
            super.ready();
            this._createConstraintsObserver();
        }
        /**
       * Returns true if the current input value satisfies all constraints (if any).
       * @return {boolean}
       */ checkValidity() {
            if (this.inputElement && this._hasValidConstraints(this.constructor.constraints.map((c)=>this[c]))) return this.inputElement.checkValidity();
            return !this.invalid;
        }
        /**
       * Returns true if some of the provided set of constraints are valid.
       * @param {Array} constraints
       * @return {boolean}
       * @protected
       */ _hasValidConstraints(constraints) {
            return constraints.some((c)=>this.__isValidConstraint(c));
        }
        /**
       * Override this method to customize setting up constraints observer.
       * @protected
       */ _createConstraintsObserver() {
            // This complex observer needs to be added dynamically instead of using `static get observers()`
            // to make it possible to tweak this behavior in classes that apply this mixin.
            this._createMethodObserver(`_constraintsChanged(${this.constructor.constraints.join(", ")})`);
        }
        /**
       * Override this method to implement custom validation constraints.
       * @param {unknown[]} constraints
       * @protected
       */ _constraintsChanged(...constraints) {
            // Prevent marking field as invalid when setting required state
            // or any other constraint before a user has entered the value.
            if (!this.invalid) return;
            if (this._hasValidConstraints(constraints)) this.validate();
            else this.invalid = false;
        }
        /**
       * Override an event listener inherited from `InputMixin`
       * to capture native `change` event and make sure that
       * a new one is dispatched after validation runs.
       * @param {Event} event
       * @protected
       * @override
       */ _onChange(event) {
            event.stopPropagation();
            this.validate();
            this.dispatchEvent(new CustomEvent("change", {
                detail: {
                    sourceEvent: event
                },
                bubbles: event.bubbles,
                cancelable: event.cancelable
            }));
        }
        /** @private */ __isValidConstraint(constraint) {
            // 0 is valid for `minlength` and `maxlength`
            return Boolean(constraint) || constraint === 0;
        }
    });

},{"@polymer/polymer/lib/utils/mixin.js":"488pD","./delegate-state-mixin.js":"2p0hB","./input-mixin.js":"rP8PM","./validate-mixin.js":"3msxQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdmUY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PatternMixin", ()=>PatternMixin);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _asyncJs = require("@vaadin/component-base/src/async.js");
var _debounceJs = require("@vaadin/component-base/src/debounce.js");
var _inputConstraintsMixinJs = require("./input-constraints-mixin.js");
const PatternMixin = (superclass)=>class PatternMixinClass extends (0, _inputConstraintsMixinJs.InputConstraintsMixin)(superclass) {
        static get properties() {
            return {
                /**
         * A regular expression that the value is checked against.
         * The pattern must match the entire value, not just some subset.
         */ pattern: {
                    type: String
                },
                /**
         * When set to true, user is prevented from typing a value that
         * conflicts with the given `pattern`.
         * @attr {boolean} prevent-invalid-input
         */ preventInvalidInput: {
                    type: Boolean
                }
            };
        }
        static get delegateAttrs() {
            return [
                ...super.delegateAttrs,
                "pattern"
            ];
        }
        static get constraints() {
            return [
                ...super.constraints,
                "pattern"
            ];
        }
        /** @private */ _checkInputValue() {
            if (this.preventInvalidInput) {
                const input = this.inputElement;
                if (input && input.value.length > 0 && !this.checkValidity()) {
                    input.value = this.value || "";
                    // add input-prevented attribute for 200ms
                    this.setAttribute("input-prevented", "");
                    this._inputDebouncer = (0, _debounceJs.Debouncer).debounce(this._inputDebouncer, (0, _asyncJs.timeOut).after(200), ()=>{
                        this.removeAttribute("input-prevented");
                    });
                }
            }
        }
        /**
     * @param {Event} event
     * @protected
     */ _onInput(event) {
            this._checkInputValue();
            super._onInput(event);
        }
    };

},{"@vaadin/component-base/src/async.js":"ePy4z","@vaadin/component-base/src/debounce.js":"8Wgp5","./input-constraints-mixin.js":"2uNfB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67GTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputFieldShared", ()=>inputFieldShared);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _clearButtonStylesJs = require("./clear-button-styles.js");
var _fieldSharedStylesJs = require("./field-shared-styles.js");
var _inputFieldContainerStylesJs = require("./input-field-container-styles.js");
const inputFieldShared = [
    (0, _fieldSharedStylesJs.fieldShared),
    (0, _inputFieldContainerStylesJs.inputFieldContainer),
    (0, _clearButtonStylesJs.clearButton)
];

},{"./clear-button-styles.js":"mjtit","./field-shared-styles.js":"krnOC","./input-field-container-styles.js":"dAh1y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mjtit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearButton", ()=>clearButton);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _lit = require("lit");
const clearButton = (0, _lit.css)`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"krnOC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fieldShared", ()=>fieldShared);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _lit = require("lit");
const fieldShared = (0, _lit.css)`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dAh1y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inputFieldContainer", ()=>inputFieldContainer);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _lit = require("lit");
const inputFieldContainer = (0, _lit.css)`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;

},{"lit":"4antt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fB8B2":[function(require,module,exports) {
var _lit = require("lit");
var _guardJs = require("lit/directives/guard.js");
var _dialog = require("@vaadin/dialog");
class MyDialog extends (0, _lit.LitElement) {
    static properties = {
        dialogOpened: {
            type: Boolean,
            state: true
        },
        body: {
            type: Object
        }
    };
    constructor(){
        super();
        this.dialogOpened = false;
        this.body = (0, _lit.html)``;
    }
    open() {
        this.dialogOpened = true;
    }
    close() {
        this.dialogOpened = false;
    }
    render() {
        return (0, _lit.html)`
      <vaadin-dialog
        .opened="${this.dialogOpened}"
        @opened-changed="${(e)=>this.dialogOpened = e.detail.value}"
        .renderer="${(0, _guardJs.guard)([], ()=>(root)=>{
                (0, _lit.render)(this.body, root);
            })}"
      ></vaadin-dialog>
    `;
    }
}
customElements.define("my-dialog", MyDialog);

},{"lit":"4antt","lit/directives/guard.js":"kI5BX","@vaadin/dialog":"emjST"}],"kI5BX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _guardJs = require("lit-html/directives/guard.js");
parcelHelpers.exportAll(_guardJs, exports);

},{"lit-html/directives/guard.js":"9R7vu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9R7vu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "guard", ()=>i);
var _litHtmlJs = require("../lit-html.js");
var _directiveJs = require("../directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const e = {}, i = (0, _directiveJs.directive)(class extends (0, _directiveJs.Directive) {
    constructor(){
        super(...arguments), this.nt = e;
    }
    render(r, t) {
        return t();
    }
    update(t1, [s, e1]) {
        if (Array.isArray(s)) {
            if (Array.isArray(this.nt) && this.nt.length === s.length && s.every((r, t)=>r === this.nt[t])) return 0, _litHtmlJs.noChange;
        } else if (this.nt === s) return 0, _litHtmlJs.noChange;
        return this.nt = Array.isArray(s) ? Array.from(s) : s, this.render(s, e1);
    }
});

},{"../lit-html.js":"1cmQt","../directive.js":"9lbyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"emjST":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinDialogJs = require("./theme/lumo/vaadin-dialog.js");
var _vaadinDialogJs1 = require("./src/vaadin-dialog.js");
parcelHelpers.exportAll(_vaadinDialogJs1, exports);

},{"./theme/lumo/vaadin-dialog.js":"6l53H","./src/vaadin-dialog.js":"7I9ZW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6l53H":[function(require,module,exports) {
var _vaadinOverlayJs = require("@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js");
var _vaadinDialogStylesJs = require("./vaadin-dialog-styles.js");
var _vaadinDialogJs = require("../../src/vaadin-dialog.js");

},{"@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js":"3mqPn","./vaadin-dialog-styles.js":"9O3VI","../../src/vaadin-dialog.js":"7I9ZW"}],"3mqPn":[function(require,module,exports) {
var _vaadinOverlayStylesJs = require("./vaadin-overlay-styles.js");
var _vaadinOverlayJs = require("../../src/vaadin-overlay.js");

},{"./vaadin-overlay-styles.js":"hbwRA","../../src/vaadin-overlay.js":"g1xaT"}],"hbwRA":[function(require,module,exports) {
var _overlayJs = require("@vaadin/vaadin-lumo-styles/mixins/overlay.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-overlay", (0, _overlayJs.overlay), {
    moduleId: "lumo-vaadin-overlay"
});

},{"@vaadin/vaadin-lumo-styles/mixins/overlay.js":"43WAR","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"43WAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "overlay", ()=>overlay);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _colorJs = require("../color.js");
var _spacingJs = require("../spacing.js");
var _styleJs = require("../style.js");
var _typographyJs = require("../typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const overlay = (0, _vaadinThemableMixinJs.css)`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("", overlay, {
    moduleId: "lumo-overlay"
});

},{"../color.js":"2or7a","../spacing.js":"7WoUL","../style.js":"hYu1M","../typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g1xaT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OverlayElement", ()=>OverlayElement);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _flattenedNodesObserverJs = require("@polymer/polymer/lib/utils/flattened-nodes-observer.js");
var _renderStatusJs = require("@polymer/polymer/lib/utils/render-status.js");
var _templatizeJs = require("@polymer/polymer/lib/utils/templatize.js");
var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _browserUtilsJs = require("@vaadin/component-base/src/browser-utils.js");
var _controllerMixinJs = require("@vaadin/component-base/src/controller-mixin.js");
var _dirMixinJs = require("@vaadin/component-base/src/dir-mixin.js");
var _focusTrapControllerJs = require("@vaadin/component-base/src/focus-trap-controller.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 * @fires {CustomEvent} vaadin-overlay-open - Fired after the overlay is opened.
 * @fires {CustomEvent} vaadin-overlay-close - Fired before the overlay will be closed. If canceled the closing of the overlay is canceled as well.
 * @fires {CustomEvent} vaadin-overlay-closing - Fired when the overlay will be closed.
 * @fires {CustomEvent} vaadin-overlay-outside-click - Fired before the overlay will be closed on outside click. If canceled the closing of the overlay is canceled as well.
 * @fires {CustomEvent} vaadin-overlay-escape-press - Fired before the overlay will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes DirMixin
 * @mixes ControllerMixin
 */ class OverlayElement extends (0, _vaadinThemableMixinJs.ThemableMixin)((0, _dirMixinJs.DirMixin)((0, _controllerMixinJs.ControllerMixin)((0, _polymerElementJs.PolymerElement)))) {
    static get template() {
        return (0, _polymerElementJs.html)`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;
    }
    static get is() {
        return "vaadin-overlay";
    }
    static get properties() {
        return {
            /**
       * When true, the overlay is visible and attached to body.
       */ opened: {
                type: Boolean,
                notify: true,
                observer: "_openedChanged",
                reflectToAttribute: true
            },
            /**
       * Owner element passed with renderer function
       * @type {HTMLElement}
       */ owner: Element,
            /**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       * @type {OverlayRenderer | null | undefined}
       */ renderer: Function,
            /**
       * The template of the overlay content.
       * @type {HTMLTemplateElement | null | undefined}
       */ template: {
                type: Object,
                notify: true
            },
            /**
       * References the content container after the template is stamped.
       * @type {!HTMLElement | undefined}
       */ content: {
                type: Object,
                notify: true
            },
            /**
       * When true the overlay has backdrop on top of content when opened.
       * @type {boolean}
       */ withBackdrop: {
                type: Boolean,
                value: false,
                reflectToAttribute: true
            },
            /**
       * Object with properties that is passed to `renderer` function
       */ model: Object,
            /**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       * @type {boolean}
       */ modeless: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: "_modelessChanged"
            },
            /**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       * @type {boolean}
       */ hidden: {
                type: Boolean,
                reflectToAttribute: true,
                observer: "_hiddenChanged"
            },
            /**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       * @type {boolean}
       */ focusTrap: {
                type: Boolean,
                value: false
            },
            /**
       * Set to true to enable restoring of focus when overlay is closed.
       * @type {boolean}
       */ restoreFocusOnClose: {
                type: Boolean,
                value: false
            },
            /**
       * Set to specify the element which should be focused on overlay close,
       * if `restoreFocusOnClose` is set to true.
       * @type {HTMLElement}
       */ restoreFocusNode: {
                type: HTMLElement
            },
            /** @private */ _mouseDownInside: {
                type: Boolean
            },
            /** @private */ _mouseUpInside: {
                type: Boolean
            },
            /** @private */ _instance: {
                type: Object
            },
            /** @private */ _originalContentPart: Object,
            /** @private */ _contentNodes: Array,
            /** @private */ _oldOwner: Element,
            /** @private */ _oldModel: Object,
            /** @private */ _oldTemplate: Object,
            /** @private */ _oldRenderer: Object,
            /** @private */ _oldOpened: Boolean
        };
    }
    static get observers() {
        return [
            "_templateOrRendererChanged(template, renderer, owner, model, opened)"
        ];
    }
    constructor(){
        super();
        this._boundMouseDownListener = this._mouseDownListener.bind(this);
        this._boundMouseUpListener = this._mouseUpListener.bind(this);
        this._boundOutsideClickListener = this._outsideClickListener.bind(this);
        this._boundKeydownListener = this._keydownListener.bind(this);
        this._observer = new (0, _flattenedNodesObserverJs.FlattenedNodesObserver)(this, (info)=>{
            this._setTemplateFromNodes(info.addedNodes);
        });
        // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.
        this._boundIronOverlayCanceledListener = this._ironOverlayCanceled.bind(this);
        /* c8 ignore next 3 */ if (0, _browserUtilsJs.isIOS) this._boundIosResizeListener = ()=>this._detectIosNavbar();
        this.__focusTrapController = new (0, _focusTrapControllerJs.FocusTrapController)(this);
    }
    /** @protected */ ready() {
        super.ready();
        this._observer.flush();
        // Need to add dummy click listeners to this and the backdrop or else
        // the document click event listener (_outsideClickListener) may never
        // get invoked on iOS Safari (reproducible in <vaadin-dialog>
        // and <vaadin-context-menu>).
        this.addEventListener("click", ()=>{});
        this.$.backdrop.addEventListener("click", ()=>{});
        this.addController(this.__focusTrapController);
    }
    /** @private */ _detectIosNavbar() {
        /* c8 ignore next 15 */ if (!this.opened) return;
        const innerHeight = window.innerHeight;
        const innerWidth = window.innerWidth;
        const landscape = innerWidth > innerHeight;
        const clientHeight = document.documentElement.clientHeight;
        if (landscape && clientHeight > innerHeight) this.style.setProperty("--vaadin-overlay-viewport-bottom", clientHeight - innerHeight + "px");
        else this.style.setProperty("--vaadin-overlay-viewport-bottom", "0");
    }
    /**
   * @param {!Array<!Element>} nodes
   * @protected
   */ _setTemplateFromNodes(nodes) {
        this.template = nodes.filter((node)=>node.localName && node.localName === "template")[0] || this.template;
    }
    /**
   * @param {Event=} sourceEvent
   * @event vaadin-overlay-close
   * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
   */ close(sourceEvent) {
        var evt = new CustomEvent("vaadin-overlay-close", {
            bubbles: true,
            cancelable: true,
            detail: {
                sourceEvent: sourceEvent
            }
        });
        this.dispatchEvent(evt);
        if (!evt.defaultPrevented) this.opened = false;
    }
    /** @protected */ connectedCallback() {
        super.connectedCallback();
        /* c8 ignore next 3 */ if (this._boundIosResizeListener) {
            this._detectIosNavbar();
            window.addEventListener("resize", this._boundIosResizeListener);
        }
    }
    /** @protected */ disconnectedCallback() {
        super.disconnectedCallback();
        /* c8 ignore next 3 */ if (this._boundIosResizeListener) window.removeEventListener("resize", this._boundIosResizeListener);
    }
    /**
   * Requests an update for the content of the overlay.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */ requestContentUpdate() {
        if (this.renderer) this.renderer.call(this.owner, this.content, this.owner, this.model);
    }
    /** @private */ _ironOverlayCanceled(event) {
        event.preventDefault();
    }
    /** @private */ _mouseDownListener(event) {
        this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
    /** @private */ _mouseUpListener(event) {
        this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
    /**
   * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
   * propagating the event to the listener in the button. Otherwise, if the clicked button would call
   * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
   *
   * @event vaadin-overlay-outside-click
   * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
   *
   * @private
   */ _outsideClickListener(event) {
        if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
            this._mouseDownInside = false;
            this._mouseUpInside = false;
            return;
        }
        if (!this._last) return;
        const evt = new CustomEvent("vaadin-overlay-outside-click", {
            bubbles: true,
            cancelable: true,
            detail: {
                sourceEvent: event
            }
        });
        this.dispatchEvent(evt);
        if (this.opened && !evt.defaultPrevented) this.close(event);
    }
    /**
   * @event vaadin-overlay-escape-press
   * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
   *
   * @private
   */ _keydownListener(event) {
        if (!this._last) return;
        // Only close modeless overlay on Esc press when it contains focus
        if (this.modeless && !event.composedPath().includes(this.$.overlay)) return;
        if (event.key === "Escape") {
            const evt = new CustomEvent("vaadin-overlay-escape-press", {
                bubbles: true,
                cancelable: true,
                detail: {
                    sourceEvent: event
                }
            });
            this.dispatchEvent(evt);
            if (this.opened && !evt.defaultPrevented) this.close(event);
        }
    }
    /** @protected */ _ensureTemplatized() {
        this._setTemplateFromNodes(Array.from(this.children));
    }
    /**
   * @event vaadin-overlay-open
   * fired after the `vaadin-overlay` is opened.
   *
   * @private
   */ _openedChanged(opened, wasOpened) {
        if (!this._instance) this._ensureTemplatized();
        if (opened) {
            // Store focused node.
            this.__restoreFocusNode = this._getActiveElement();
            this._animatedOpening();
            (0, _renderStatusJs.afterNextRender)(this, ()=>{
                if (this.focusTrap) this.__focusTrapController.trapFocus(this.$.overlay);
                const evt = new CustomEvent("vaadin-overlay-open", {
                    bubbles: true
                });
                this.dispatchEvent(evt);
            });
            document.addEventListener("keydown", this._boundKeydownListener);
            if (!this.modeless) this._addGlobalListeners();
        } else if (wasOpened) {
            if (this.focusTrap) this.__focusTrapController.releaseFocus();
            this._animatedClosing();
            document.removeEventListener("keydown", this._boundKeydownListener);
            if (!this.modeless) this._removeGlobalListeners();
        }
    }
    /** @private */ _hiddenChanged(hidden) {
        if (hidden && this.hasAttribute("closing")) this._flushAnimation("closing");
    }
    /**
   * @return {boolean}
   * @protected
   */ _shouldAnimate() {
        const name = getComputedStyle(this).getPropertyValue("animation-name");
        const hidden = getComputedStyle(this).getPropertyValue("display") === "none";
        return !hidden && name && name != "none";
    }
    /**
   * @param {string} type
   * @param {Function} callback
   * @protected
   */ _enqueueAnimation(type, callback) {
        const handler = `__${type}Handler`;
        const listener = (event)=>{
            if (event && event.target !== this) return;
            callback();
            this.removeEventListener("animationend", listener);
            delete this[handler];
        };
        this[handler] = listener;
        this.addEventListener("animationend", listener);
    }
    /**
   * @param {string} type
   * @protected
   */ _flushAnimation(type) {
        const handler = `__${type}Handler`;
        if (typeof this[handler] === "function") this[handler]();
    }
    /** @protected */ _animatedOpening() {
        if (this.parentNode === document.body && this.hasAttribute("closing")) this._flushAnimation("closing");
        this._attachOverlay();
        if (!this.modeless) this._enterModalState();
        this.setAttribute("opening", "");
        if (this._shouldAnimate()) this._enqueueAnimation("opening", ()=>{
            this._finishOpening();
        });
        else this._finishOpening();
    }
    /** @protected */ _attachOverlay() {
        this._placeholder = document.createComment("vaadin-overlay-placeholder");
        this.parentNode.insertBefore(this._placeholder, this);
        document.body.appendChild(this);
        this.bringToFront();
    }
    /** @protected */ _finishOpening() {
        document.addEventListener("iron-overlay-canceled", this._boundIronOverlayCanceledListener);
        this.removeAttribute("opening");
    }
    /** @protected */ _finishClosing() {
        document.removeEventListener("iron-overlay-canceled", this._boundIronOverlayCanceledListener);
        this._detachOverlay();
        this.$.overlay.style.removeProperty("pointer-events");
        this.removeAttribute("closing");
    }
    /**
   * @event vaadin-overlay-closing
   * Fired when the overlay will be closed.
   *
   * @protected
   */ _animatedClosing() {
        if (this.hasAttribute("opening")) this._flushAnimation("opening");
        if (this._placeholder) {
            this._exitModalState();
            // Use this.restoreFocusNode if specified, otherwise fallback to the node
            // which was focused before opening the overlay.
            const restoreFocusNode = this.restoreFocusNode || this.__restoreFocusNode;
            if (this.restoreFocusOnClose && restoreFocusNode) {
                // If the activeElement is `<body>` or inside the overlay,
                // we are allowed to restore the focus. In all the other
                // cases focus might have been moved elsewhere by another
                // component or by the user interaction (e.g. click on a
                // button outside the overlay).
                const activeElement = this._getActiveElement();
                if (activeElement === document.body || this._deepContains(activeElement)) // Focusing the restoreFocusNode doesn't always work synchronously on Firefox and Safari
                // (e.g. combo-box overlay close on outside click).
                setTimeout(()=>restoreFocusNode.focus());
                this.__restoreFocusNode = null;
            }
            this.setAttribute("closing", "");
            this.dispatchEvent(new CustomEvent("vaadin-overlay-closing"));
            if (this._shouldAnimate()) this._enqueueAnimation("closing", ()=>{
                this._finishClosing();
            });
            else this._finishClosing();
        }
    }
    /** @protected */ _detachOverlay() {
        this._placeholder.parentNode.insertBefore(this, this._placeholder);
        this._placeholder.parentNode.removeChild(this._placeholder);
    }
    /**
   * Returns all attached overlays in visual stacking order.
   * @private
   */ static get __attachedInstances() {
        return Array.from(document.body.children).filter((el)=>el instanceof OverlayElement && !el.hasAttribute("closing")).sort((a, b)=>a.__zIndex - b.__zIndex || 0);
    }
    /**
   * returns true if this is the last one in the opened overlays stack
   * @return {boolean}
   * @protected
   */ get _last() {
        return this === OverlayElement.__attachedInstances.pop();
    }
    /** @private */ _modelessChanged(modeless) {
        if (!modeless) {
            if (this.opened) {
                this._addGlobalListeners();
                this._enterModalState();
            }
        } else {
            this._removeGlobalListeners();
            this._exitModalState();
        }
    }
    /** @protected */ _addGlobalListeners() {
        document.addEventListener("mousedown", this._boundMouseDownListener);
        document.addEventListener("mouseup", this._boundMouseUpListener);
        // Firefox leaks click to document on contextmenu even if prevented
        // https://bugzilla.mozilla.org/show_bug.cgi?id=990614
        document.documentElement.addEventListener("click", this._boundOutsideClickListener, true);
    }
    /** @protected */ _enterModalState() {
        if (document.body.style.pointerEvents !== "none") {
            // Set body pointer-events to 'none' to disable mouse interactions with
            // other document nodes.
            this._previousDocumentPointerEvents = document.body.style.pointerEvents;
            document.body.style.pointerEvents = "none";
        }
        // Disable pointer events in other attached overlays
        OverlayElement.__attachedInstances.forEach((el)=>{
            if (el !== this) el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = "none";
        });
    }
    /** @protected */ _removeGlobalListeners() {
        document.removeEventListener("mousedown", this._boundMouseDownListener);
        document.removeEventListener("mouseup", this._boundMouseUpListener);
        document.documentElement.removeEventListener("click", this._boundOutsideClickListener, true);
    }
    /** @protected */ _exitModalState() {
        if (this._previousDocumentPointerEvents !== undefined) {
            // Restore body pointer-events
            document.body.style.pointerEvents = this._previousDocumentPointerEvents;
            delete this._previousDocumentPointerEvents;
        }
        // Restore pointer events in the previous overlay(s)
        const instances = OverlayElement.__attachedInstances;
        let el;
        // Use instances.pop() to ensure the reverse order
        while(el = instances.pop()){
            if (el === this) continue;
            el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events");
            if (!el.modeless) break;
        }
    }
    /** @protected */ _removeOldContent() {
        if (!this.content || !this._contentNodes) return;
        this._observer.disconnect();
        this._contentNodes.forEach((node)=>{
            if (node.parentNode === this.content) this.content.removeChild(node);
        });
        if (this._originalContentPart) {
            // Restore the original <div part="content">
            this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
            this.$.content = this._originalContentPart;
            this._originalContentPart = undefined;
        }
        this._observer.connect();
        this._contentNodes = undefined;
        this.content = undefined;
    }
    /**
   * @param {!HTMLTemplateElement} template
   * @protected
   */ _stampOverlayTemplate(template) {
        this._removeOldContent();
        if (!template._Templatizer) template._Templatizer = (0, _templatizeJs.templatize)(template, this, {
            forwardHostProp: function(prop, value) {
                if (this._instance) this._instance.forwardHostProp(prop, value);
            }
        });
        this._instance = new template._Templatizer({});
        this._contentNodes = Array.from(this._instance.root.childNodes);
        const templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());
        if (templateRoot !== document) {
            if (!this.$.content.shadowRoot) this.$.content.attachShadow({
                mode: "open"
            });
            let scopeCssText = Array.from(templateRoot.querySelectorAll("style")).reduce((result, style)=>result + style.textContent, "");
            // The overlay root’s :host styles should not apply inside the overlay
            scopeCssText = scopeCssText.replace(/:host/g, ":host-nomatch");
            if (scopeCssText) {
                // Append a style to the content shadowRoot
                const style = document.createElement("style");
                style.textContent = scopeCssText;
                this.$.content.shadowRoot.appendChild(style);
                this._contentNodes.unshift(style);
            }
            this.$.content.shadowRoot.appendChild(this._instance.root);
            this.content = this.$.content.shadowRoot;
        } else {
            this.appendChild(this._instance.root);
            this.content = this;
        }
    }
    /** @private */ _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
        if (template !== oldTemplate) this.template = undefined;
        else if (renderer !== oldRenderer) this.renderer = undefined;
    }
    /** @private */ // eslint-disable-next-line max-params
    _templateOrRendererChanged(template, renderer, owner, model, opened) {
        if (template && renderer) {
            this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);
            throw new Error("You should only use either a renderer or a template for overlay content");
        }
        const ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
        this._oldModel = model;
        this._oldOwner = owner;
        const templateChanged = this._oldTemplate !== template;
        this._oldTemplate = template;
        const rendererChanged = this._oldRenderer !== renderer;
        this._oldRenderer = renderer;
        const openedChanged = this._oldOpened !== opened;
        this._oldOpened = opened;
        if (rendererChanged) {
            this.content = this;
            this.content.innerHTML = "";
            // Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
            // When clearing the rendered content, this part needs to be manually disposed of.
            // Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
            delete this.content._$litPart$;
        }
        if (template && templateChanged) this._stampOverlayTemplate(template);
        else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
            if (opened) this.requestContentUpdate();
        }
    }
    /**
   * @return {!Element}
   * @protected
   */ _getActiveElement() {
        // document.activeElement can be null
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
        let active = document.activeElement || document.body;
        while(active.shadowRoot && active.shadowRoot.activeElement)active = active.shadowRoot.activeElement;
        return active;
    }
    /**
   * @param {!Node} node
   * @return {boolean}
   * @protected
   */ _deepContains(node) {
        if (this.contains(node)) return true;
        let n = node;
        const doc = node.ownerDocument;
        // walk from node to `this` or `document`
        while(n && n !== doc && n !== this)n = n.parentNode || n.host;
        return n === this;
    }
    /**
   * Brings the overlay as visually the frontmost one
   */ bringToFront() {
        let zIndex = "";
        const frontmost = OverlayElement.__attachedInstances.filter((o)=>o !== this).pop();
        if (frontmost) {
            const frontmostZIndex = frontmost.__zIndex;
            zIndex = frontmostZIndex + 1;
        }
        this.style.zIndex = zIndex;
        this.__zIndex = zIndex || parseFloat(getComputedStyle(this).zIndex);
    }
}
customElements.define(OverlayElement.is, OverlayElement);

},{"@polymer/polymer/lib/utils/flattened-nodes-observer.js":"6QMDE","@polymer/polymer/lib/utils/render-status.js":"eDHaR","@polymer/polymer/lib/utils/templatize.js":"6QnfM","@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/browser-utils.js":"fxX4j","@vaadin/component-base/src/controller-mixin.js":"57izu","@vaadin/component-base/src/dir-mixin.js":"e4xcC","@vaadin/component-base/src/focus-trap-controller.js":"38D4l","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QnfM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showHideChildren", ()=>showHideChildren);
/**
 * Returns an anonymous `PropertyEffects` class bound to the
 * `<template>` provided.  Instancing the class will result in the
 * template being stamped into a document fragment stored as the instance's
 * `root` property, after which it can be appended to the DOM.
 *
 * Templates may utilize all Polymer data-binding features as well as
 * declarative event listeners.  Event listeners and inline computing
 * functions in the template will be called on the host of the template.
 *
 * The constructor returned takes a single argument dictionary of initial
 * property values to propagate into template bindings.  Additionally
 * host properties can be forwarded in, and instance properties can be
 * notified out by providing optional callbacks in the `options` dictionary.
 *
 * Valid configuration in `options` are as follows:
 *
 * - `forwardHostProp(property, value)`: Called when a property referenced
 *   in the template changed on the template's host. As this library does
 *   not retain references to templates instanced by the user, it is the
 *   templatize owner's responsibility to forward host property changes into
 *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
 *    method on the generated class should be called to forward host
 *   properties into the template to prevent unnecessary property-changed
 *   notifications. Any properties referenced in the template that are not
 *   defined in `instanceProps` will be notified up to the template's host
 *   automatically.
 * - `instanceProps`: Dictionary of property names that will be added
 *   to the instance by the templatize owner.  These properties shadow any
 *   host properties, and changes within the template to these properties
 *   will result in `notifyInstanceProp` being called.
 * - `mutableData`: When `true`, the generated class will skip strict
 *   dirty-checking for objects and arrays (always consider them to be
 *   "dirty").
 * - `notifyInstanceProp(instance, property, value)`: Called when
 *   an instance property changes.  Users may choose to call `notifyPath`
 *   on e.g. the owner to notify the change.
 * - `parentModel`: When `true`, events handled by declarative event listeners
 *   (`on-event="handler"`) will be decorated with a `model` property pointing
 *   to the template instance that stamped it.  It will also be returned
 *   from `instance.parentModel` in cases where template instance nesting
 *   causes an inner model to shadow an outer model.
 *
 * All callbacks are called bound to the `owner`. Any context
 * needed for the callbacks (such as references to `instances` stamped)
 * should be stored on the `owner` such that they can be retrieved via
 * `this`.
 *
 * When `options.forwardHostProp` is declared as an option, any properties
 * referenced in the template will be automatically forwarded from the host of
 * the `<template>` to instances, with the exception of any properties listed in
 * the `options.instanceProps` object.  `instanceProps` are assumed to be
 * managed by the owner of the instances, either passed into the constructor
 * or set after the fact.  Note, any properties passed into the constructor will
 * always be set to the instance (regardless of whether they would normally
 * be forwarded from the host).
 *
 * Note that `templatize()` can be run only once for a given `<template>`.
 * Further calls will result in an error. Also, there is a special
 * behavior if the template was duplicated through a mechanism such as
 * `<dom-repeat>` or `<test-fixture>`. In this case, all calls to
 * `templatize()` return the same class for all duplicates of a template.
 * The class returned from `templatize()` is generated only once using
 * the `options` from the first call. This means that any `options`
 * provided to subsequent calls will be ignored. Therefore, it is very
 * important not to close over any variables inside the callbacks. Also,
 * arrow functions must be avoided because they bind the outer `this`.
 * Inside the callbacks, any contextual information can be accessed
 * through `this`, which points to the `owner`.
 *
 * @param {!HTMLTemplateElement} template Template to templatize
 * @param {Polymer_PropertyEffects=} owner Owner of the template instances;
 *   any optional callbacks will be bound to this owner.
 * @param {Object=} options Options dictionary (see summary for details)
 * @return {function(new:TemplateInstanceBase, Object=)} Generated class bound
 *   to the template provided
 * @suppress {invalidCasts}
 */ parcelHelpers.export(exports, "templatize", ()=>templatize);
/**
 * Returns the template "model" associated with a given element, which
 * serves as the binding scope for the template instance the element is
 * contained in. A template model is an instance of
 * `TemplateInstanceBase`, and should be used to manipulate data
 * associated with this template instance.
 *
 * Example:
 *
 *   let model = modelForElement(el);
 *   if (model.index < 10) {
 *     model.set('item.checked', true);
 *   }
 *
 * @param {HTMLElement} template The model will be returned for
 *   elements stamped from this template (accepts either an HTMLTemplateElement)
 *   or a `<dom-if>`/`<dom-repeat>` element when using `removeNestedTemplates`
 *   optimization.
 * @param {Node=} node Node for which to return a template model.
 * @return {TemplateInstanceBase} Template instance representing the
 *   binding scope for the element
 */ parcelHelpers.export(exports, "modelForElement", ()=>modelForElement);
parcelHelpers.export(exports, "TemplateInstanceBase", ()=>TemplateInstanceBase);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ /**
 * Module for preparing and stamping instances of templates that utilize
 * Polymer's data-binding and declarative event listener features.
 *
 * Example:
 *
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     let TemplateClass = Templatize.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = new TemplateClass({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
 *     this.shadowRoot.appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * The `options` dictionary passed to `templatize` allows for customizing
 * features of the generated template class, including how outer-scope host
 * properties should be forwarded into template instances, how any instance
 * properties added into the template's scope should be notified out to
 * the host, and whether the instance should be decorated as a "parent model"
 * of any event handlers.
 *
 *     // Customize property forwarding and event model decoration
 *     let TemplateClass = Templatize.templatize(template, this, {
 *       parentModel: true,
 *       forwardHostProp(property, value) {...},
 *       instanceProps: {...},
 *       notifyInstanceProp(instance, property, value) {...},
 *     });
 *
 * @summary Module for preparing and stamping instances of templates
 *   utilizing Polymer templating features.
 */ var _bootJs = require("./boot.js");
var _propertyEffectsJs = require("../mixins/property-effects.js");
var _mutableDataJs = require("../mixins/mutable-data.js");
var _settingsJs = require("./settings.js");
var _wrapJs = require("./wrap.js");
// Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
let newInstance = null;
/**
 * @constructor
 * @extends {HTMLTemplateElement}
 * @private
 */ function HTMLTemplateElementExtension() {
    return newInstance;
}
HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
    constructor: {
        value: HTMLTemplateElementExtension,
        writable: true
    }
});
/**
 * @constructor
 * @implements {Polymer_PropertyEffects}
 * @extends {HTMLTemplateElementExtension}
 * @private
 */ const DataTemplate = (0, _propertyEffectsJs.PropertyEffects)(HTMLTemplateElementExtension);
/**
 * @constructor
 * @implements {Polymer_MutableData}
 * @extends {DataTemplate}
 * @private
 */ const MutableDataTemplate = (0, _mutableDataJs.MutableData)(DataTemplate);
// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template, constructor) {
    newInstance = template;
    Object.setPrototypeOf(template, constructor.prototype);
    new constructor();
    newInstance = null;
}
/**
 * Base class for TemplateInstance.
 * @constructor
 * @extends {HTMLElement}
 * @implements {Polymer_PropertyEffects}
 * @private
 */ const templateInstanceBase = (0, _propertyEffectsJs.PropertyEffects)(class {
});
function showHideChildren(hide, children) {
    for(let i = 0; i < children.length; i++){
        let n = children[i];
        // Ignore non-changes
        if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
            // clear and restore text
            if (n.nodeType === Node.TEXT_NODE) {
                if (hide) {
                    n.__polymerTextContent__ = n.textContent;
                    n.textContent = "";
                } else n.textContent = n.__polymerTextContent__;
            } else if (n.localName === "slot") {
                if (hide) {
                    n.__polymerReplaced__ = document.createComment("hidden-slot");
                    (0, _wrapJs.wrap)((0, _wrapJs.wrap)(n).parentNode).replaceChild(n.__polymerReplaced__, n);
                } else {
                    const replace = n.__polymerReplaced__;
                    if (replace) (0, _wrapJs.wrap)((0, _wrapJs.wrap)(replace).parentNode).replaceChild(n, replace);
                }
            } else if (n.style) {
                if (hide) {
                    n.__polymerDisplay__ = n.style.display;
                    n.style.display = "none";
                } else n.style.display = n.__polymerDisplay__;
            }
        }
        n.__hideTemplateChildren__ = hide;
        if (n._showHideChildren) n._showHideChildren(hide);
    }
}
/**
 * @polymer
 * @customElement
 * @appliesMixin PropertyEffects
 * @unrestricted
 */ class TemplateInstanceBase extends templateInstanceBase {
    constructor(props){
        super();
        this._configureProperties(props);
        /** @type {!StampedTemplate} */ this.root = this._stampTemplate(this.__dataHost);
        // Save list of stamped children
        let children = [];
        /** @suppress {invalidCasts} */ this.children = children;
        // Polymer 1.x did not use `Polymer.dom` here so not bothering.
        for(let n = this.root.firstChild; n; n = n.nextSibling){
            children.push(n);
            n.__templatizeInstance = this;
        }
        if (this.__templatizeOwner && this.__templatizeOwner.__hideTemplateChildren__) this._showHideChildren(true);
        // Flush props only when props are passed if instance props exist
        // or when there isn't instance props.
        let options = this.__templatizeOptions;
        if (props && options.instanceProps || !options.instanceProps) this._enableProperties();
    }
    /**
   * Configure the given `props` by calling `_setPendingProperty`. Also
   * sets any properties stored in `__hostProps`.
   * @private
   * @param {Object} props Object of property name-value pairs to set.
   * @return {void}
   */ _configureProperties(props) {
        let options = this.__templatizeOptions;
        if (options.forwardHostProp) for(let hprop in this.__hostProps)this._setPendingProperty(hprop, this.__dataHost["_host_" + hprop]);
        // Any instance props passed in the constructor will overwrite host props;
        // normally this would be a user error but we don't specifically filter them
        for(let iprop in props)this._setPendingProperty(iprop, props[iprop]);
    }
    /**
   * Forwards a host property to this instance.  This method should be
   * called on instances from the `options.forwardHostProp` callback
   * to propagate changes of host properties to each instance.
   *
   * Note this method enqueues the change, which are flushed as a batch.
   *
   * @param {string} prop Property or path name
   * @param {*} value Value of the property to forward
   * @return {void}
   */ forwardHostProp(prop, value) {
        if (this._setPendingPropertyOrPath(prop, value, false, true)) this.__dataHost._enqueueClient(this);
    }
    /**
   * Override point for adding custom or simulated event handling.
   *
   * @override
   * @param {!Node} node Node to add event listener to
   * @param {string} eventName Name of event
   * @param {function(!Event):void} handler Listener function to add
   * @return {void}
   */ _addEventListenerToNode(node, eventName, handler) {
        if (this._methodHost && this.__templatizeOptions.parentModel) // If this instance should be considered a parent model, decorate
        // events this template instance as `model`
        this._methodHost._addEventListenerToNode(node, eventName, (e)=>{
            e.model = this;
            handler(e);
        });
        else {
            // Otherwise delegate to the template's host (which could be)
            // another template instance
            let templateHost = this.__dataHost.__dataHost;
            if (templateHost) templateHost._addEventListenerToNode(node, eventName, handler);
        }
    }
    /**
   * Shows or hides the template instance top level child elements. For
   * text nodes, `textContent` is removed while "hidden" and replaced when
   * "shown."
   * @param {boolean} hide Set to true to hide the children;
   * set to false to show them.
   * @return {void}
   * @protected
   */ _showHideChildren(hide) {
        showHideChildren(hide, this.children);
    }
    /**
   * Overrides default property-effects implementation to intercept
   * textContent bindings while children are "hidden" and cache in
   * private storage for later retrieval.
   *
   * @override
   * @param {!Node} node The node to set a property on
   * @param {string} prop The property to set
   * @param {*} value The value to set
   * @return {void}
   * @protected
   */ _setUnmanagedPropertyToNode(node, prop, value) {
        if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == "textContent") node.__polymerTextContent__ = value;
        else super._setUnmanagedPropertyToNode(node, prop, value);
    }
    /**
   * Find the parent model of this template instance.  The parent model
   * is either another templatize instance that had option `parentModel: true`,
   * or else the host element.
   *
   * @return {!Polymer_PropertyEffects} The parent model of this instance
   */ get parentModel() {
        let model = this.__parentModel;
        if (!model) {
            let options;
            model = this;
            do // A template instance's `__dataHost` is a <template>
            // `model.__dataHost.__dataHost` is the template's host
            model = model.__dataHost.__dataHost;
            while ((options = model.__templatizeOptions) && !options.parentModel);
            this.__parentModel = model;
        }
        return model;
    }
    /**
   * Stub of HTMLElement's `dispatchEvent`, so that effects that may
   * dispatch events safely no-op.
   *
   * @param {Event} event Event to dispatch
   * @return {boolean} Always true.
   * @override
   */ dispatchEvent(event) {
        return true;
    }
}
/** @type {!DataTemplate} */ TemplateInstanceBase.prototype.__dataHost;
/** @type {!TemplatizeOptions} */ TemplateInstanceBase.prototype.__templatizeOptions;
/** @type {!Polymer_PropertyEffects} */ TemplateInstanceBase.prototype._methodHost;
/** @type {!Object} */ TemplateInstanceBase.prototype.__templatizeOwner;
/** @type {!Object} */ TemplateInstanceBase.prototype.__hostProps;
/**
 * @constructor
 * @extends {TemplateInstanceBase}
 * @implements {Polymer_MutableData}
 * @private
 */ const MutableTemplateInstanceBase = (0, _mutableDataJs.MutableData)(TemplateInstanceBase);
function findMethodHost(template) {
    // Technically this should be the owner of the outermost template.
    // In shadow dom, this is always getRootNode().host, but we can
    // approximate this via cooperation with our dataHost always setting
    // `_methodHost` as long as there were bindings (or id's) on this
    // instance causing it to get a dataHost.
    let templateHost = template.__dataHost;
    return templateHost && templateHost._methodHost || templateHost;
}
/* eslint-disable valid-jsdoc */ /**
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */ function createTemplatizerClass(template, templateInfo, options) {
    /**
   * @constructor
   * @extends {TemplateInstanceBase}
   */ let templatizerBase = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
    // Affordance for global mixins onto TemplatizeInstance
    if (templatize.mixin) templatizerBase = templatize.mixin(templatizerBase);
    /**
   * Anonymous class created by the templatize
   * @constructor
   * @private
   */ let klass = class extends templatizerBase {
    };
    /** @override */ klass.prototype.__templatizeOptions = options;
    klass.prototype._bindTemplate(template);
    addNotifyEffects(klass, template, templateInfo, options);
    return klass;
}
/**
 * Adds propagate effects from the template to the template instance for
 * properties that the host binds to the template using the `_host_` prefix.
 *
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */ function addPropagateEffects(target, templateInfo, options, methodHost) {
    let userForwardHostProp = options.forwardHostProp;
    if (userForwardHostProp && templateInfo.hasHostProps) {
        // Under the `removeNestedTemplates` optimization, a custom element like
        // `dom-if` or `dom-repeat` can itself be treated as the "template"; this
        // flag is used to switch between upgrading a `<template>` to be a property
        // effects client vs. adding the effects directly to the custom element
        const isTemplate = target.localName == "template";
        // Provide data API and property effects on memoized template class
        let klass = templateInfo.templatizeTemplateClass;
        if (!klass) {
            if (isTemplate) {
                /**
         * @constructor
         * @extends {DataTemplate}
         */ let templatizedBase = options.mutableData ? MutableDataTemplate : DataTemplate;
                // NOTE: due to https://github.com/google/closure-compiler/issues/2928,
                // combining the next two lines into one assignment causes a spurious
                // type error.
                /** @private */ class TemplatizedTemplate extends templatizedBase {
                }
                klass = templateInfo.templatizeTemplateClass = TemplatizedTemplate;
            } else {
                /**
         * @constructor
         * @extends {PolymerElement}
         */ const templatizedBase = target.constructor;
                // Create a cached subclass of the base custom element class onto which
                // to put the template-specific propagate effects
                // NOTE: due to https://github.com/google/closure-compiler/issues/2928,
                // combining the next two lines into one assignment causes a spurious
                // type error.
                /** @private */ class TemplatizedTemplateExtension extends templatizedBase {
                }
                klass = templateInfo.templatizeTemplateClass = TemplatizedTemplateExtension;
            }
            // Add template - >instances effects
            // and host <- template effects
            let hostProps = templateInfo.hostProps;
            for(let prop in hostProps){
                klass.prototype._addPropertyEffect("_host_" + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, {
                    fn: createForwardHostPropEffect(prop, userForwardHostProp)
                });
                klass.prototype._createNotifyingProperty("_host_" + prop);
            }
            if ((0, _settingsJs.legacyWarnings) && methodHost) warnOnUndeclaredProperties(templateInfo, options, methodHost);
        }
        // Mix any pre-bound data into __data; no need to flush this to
        // instances since they pull from the template at instance-time
        if (target.__dataProto) // Note, generally `__dataProto` could be chained, but it's guaranteed
        // to not be since this is a vanilla template we just added effects to
        Object.assign(target.__data, target.__dataProto);
        if (isTemplate) {
            upgradeTemplate(target, klass);
            // Clear any pending data for performance
            target.__dataTemp = {};
            target.__dataPending = null;
            target.__dataOld = null;
            target._enableProperties();
        } else {
            // Swizzle the cached subclass prototype onto the custom element
            Object.setPrototypeOf(target, klass.prototype);
            // Check for any pre-bound instance host properties, and do the
            // instance property delete/assign dance for those (directly into data;
            // not need to go through accessor since they are pulled at instance time)
            const hostProps = templateInfo.hostProps;
            for(let prop in hostProps){
                prop = "_host_" + prop;
                if (prop in target) {
                    const val = target[prop];
                    delete target[prop];
                    target.__data[prop] = val;
                }
            }
        }
    }
}
/* eslint-enable valid-jsdoc */ function createForwardHostPropEffect(hostProp, userForwardHostProp) {
    return function forwardHostProp(template, prop, props) {
        userForwardHostProp.call(template.__templatizeOwner, prop.substring(6), props[prop]);
    };
}
function addNotifyEffects(klass, template, templateInfo, options) {
    let hostProps = templateInfo.hostProps || {};
    for(let iprop in options.instanceProps){
        delete hostProps[iprop];
        let userNotifyInstanceProp = options.notifyInstanceProp;
        if (userNotifyInstanceProp) klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
            fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp)
        });
    }
    if (options.forwardHostProp && template.__dataHost) for(let hprop in hostProps){
        // As we're iterating hostProps in this function, note whether
        // there were any, for an optimization in addPropagateEffects
        if (!templateInfo.hasHostProps) templateInfo.hasHostProps = true;
        klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, {
            fn: createNotifyHostPropEffect()
        });
    }
}
function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
    return function notifyInstanceProp(inst, prop, props) {
        userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
    };
}
function createNotifyHostPropEffect() {
    return function notifyHostProp(inst, prop, props) {
        inst.__dataHost._setPendingPropertyOrPath("_host_" + prop, props[prop], true, true);
    };
}
function templatize(template, owner, options) {
    // Under strictTemplatePolicy, the templatized element must be owned
    // by a (trusted) Polymer element, indicated by existence of _methodHost;
    // e.g. for dom-if & dom-repeat in main document, _methodHost is null
    if ((0, _settingsJs.strictTemplatePolicy) && !findMethodHost(template)) throw new Error("strictTemplatePolicy: template owner not trusted");
    options = options || {};
    if (template.__templatizeOwner) throw new Error("A <template> can only be templatized once");
    template.__templatizeOwner = owner;
    const ctor = owner ? owner.constructor : TemplateInstanceBase;
    let templateInfo = ctor._parseTemplate(template);
    // Get memoized base class for the prototypical template, which
    // includes property effects for binding template & forwarding
    /**
   * @constructor
   * @extends {TemplateInstanceBase}
   */ let baseClass = templateInfo.templatizeInstanceClass;
    if (!baseClass) {
        baseClass = createTemplatizerClass(template, templateInfo, options);
        templateInfo.templatizeInstanceClass = baseClass;
    }
    const methodHost = findMethodHost(template);
    // Host property forwarding must be installed onto template instance
    addPropagateEffects(template, templateInfo, options, methodHost);
    // Subclass base class and add reference for this specific template
    /** @private */ let klass = class TemplateInstance extends baseClass {
    };
    /** @override */ klass.prototype._methodHost = methodHost;
    /** @override */ klass.prototype.__dataHost = template;
    /** @override */ klass.prototype.__templatizeOwner = owner;
    /** @override */ klass.prototype.__hostProps = templateInfo.hostProps;
    klass; //eslint-disable-line no-self-assign
    return klass;
}
function warnOnUndeclaredProperties(templateInfo, options, methodHost) {
    const declaredProps = methodHost.constructor._properties;
    const { propertyEffects  } = templateInfo;
    const { instanceProps  } = options;
    for(let prop in propertyEffects)// Ensure properties with template effects are declared on the outermost
    // host (`methodHost`), unless they are instance props or static functions
    if (!declaredProps[prop] && !(instanceProps && instanceProps[prop])) {
        const effects = propertyEffects[prop];
        for(let i = 0; i < effects.length; i++){
            const { part  } = effects[i].info;
            if (!(part.signature && part.signature.static)) {
                console.warn(`Property '${prop}' used in template but not ` + `declared in 'properties'; attribute will not be observed.`);
                break;
            }
        }
    }
}
function modelForElement(template, node) {
    let model;
    while(node)// An element with a __templatizeInstance marks the top boundary
    // of a scope; walk up until we find one, and then ensure that
    // its __dataHost matches `this`, meaning this dom-repeat stamped it
    if (model = node.__dataHost ? node : node.__templatizeInstance) {
        // Found an element stamped by another template; keep walking up
        // from its __dataHost
        if (model.__dataHost != template) node = model.__dataHost;
        else return model;
    } else // Still in a template scope, keep going up until
    // a __templatizeInstance is found
    node = (0, _wrapJs.wrap)(node).parentNode;
    return null;
}

},{"./boot.js":"gVNgb","../mixins/property-effects.js":"fKH56","../mixins/mutable-data.js":"2HzJg","./settings.js":"44bo5","./wrap.js":"cQBlD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2HzJg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MutableData", ()=>MutableData);
parcelHelpers.export(exports, "OptionalMutableData", ()=>OptionalMutableData);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ var _mixinJs = require("../utils/mixin.js");
// Common implementation for mixin & behavior
function mutablePropertyChange(inst, property, value, old, mutableData) {
    let isObject;
    if (mutableData) {
        isObject = typeof value === "object" && value !== null;
        // Pull `old` for Objects from temp cache, but treat `null` as a primitive
        if (isObject) old = inst.__dataTemp[property];
    }
    // Strict equality check, but return false for NaN===NaN
    let shouldChange = old !== value && (old === old || value === value);
    // Objects are stored in temporary cache (cleared at end of
    // turn), which is used for dirty-checking
    if (isObject && shouldChange) inst.__dataTemp[property] = value;
    return shouldChange;
}
const MutableData = (0, _mixinJs.dedupingMixin)((superClass)=>{
    /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */ class MutableData1 extends superClass {
        /**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * This method pulls the value to dirty check against from the `__dataTemp`
     * cache (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */ _shouldPropertyChange(property, value, old) {
            return mutablePropertyChange(this, property, value, old, true);
        }
    }
    return MutableData1;
});
const OptionalMutableData = (0, _mixinJs.dedupingMixin)((superClass)=>{
    /**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */ class OptionalMutableData1 extends superClass {
        /** @nocollapse */ static get properties() {
            return {
                /**
         * Instance-level flag for configuring the dirty-checking strategy
         * for this element.  When true, Objects and Arrays will skip dirty
         * checking, otherwise strict equality checking will be used.
         */ mutableData: Boolean
            };
        }
        /**
     * Overrides `PropertyEffects` to provide option for skipping
     * strict equality checking for Objects and Arrays.
     *
     * When `this.mutableData` is true on this instance, this method
     * pulls the value to dirty check against from the `__dataTemp` cache
     * (rather than the normal `__data` cache) for Objects.  Since the temp
     * cache is cleared at the end of a turn, this implementation allows
     * side-effects of deep object changes to be processed by re-setting the
     * same object (using the temp cache as an in-turn backstop to prevent
     * cycles due to 2-way notification).
     *
     * @param {string} property Property name
     * @param {*} value New property value
     * @param {*} old Previous property value
     * @return {boolean} Whether the property should be considered a change
     * @protected
     */ _shouldPropertyChange(property, value, old) {
            return mutablePropertyChange(this, property, value, old, this.mutableData);
        }
    }
    return OptionalMutableData1;
});
// Export for use by legacy behavior
MutableData._mutablePropertyChange = mutablePropertyChange;

},{"../utils/mixin.js":"488pD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9O3VI":[function(require,module,exports) {
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _overlayJs = require("@vaadin/vaadin-lumo-styles/mixins/overlay.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const dialogOverlay = (0, _vaadinThemableMixinJs.css)`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0;
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-dialog-overlay", [
    (0, _overlayJs.overlay),
    dialogOverlay
], {
    moduleId: "lumo-dialog"
});

},{"@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-lumo-styles/mixins/overlay.js":"43WAR","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"7I9ZW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An element used internally by `<vaadin-dialog>`. Not intended to be used separately.
 *
 * @extends OverlayElement
 * @private
 */ parcelHelpers.export(exports, "DialogOverlay", ()=>DialogOverlay);
parcelHelpers.export(exports, "Dialog", ()=>Dialog);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _elementMixinJs = require("@vaadin/component-base/src/element-mixin.js");
var _templatesJs = require("@vaadin/component-base/src/templates.js");
var _vaadinOverlayJs = require("@vaadin/vaadin-overlay/src/vaadin-overlay.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
var _vaadinThemePropertyMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
var _vaadinDialogDraggableMixinJs = require("./vaadin-dialog-draggable-mixin.js");
var _vaadinDialogResizableMixinJs = require("./vaadin-dialog-resizable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-dialog-overlay", (0, _vaadinThemableMixinJs.css)`
    /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
    [part='content'] {
      min-width: 12em; /* matches the default <vaadin-text-field> width */
    }

    :host([has-bounds-set]) [part='overlay'] {
      max-width: none;
    }
  `, {
    moduleId: "vaadin-dialog-overlay-styles"
});
let memoizedTemplate;
class DialogOverlay extends (0, _vaadinOverlayJs.OverlayElement) {
    static get is() {
        return "vaadin-dialog-overlay";
    }
    static get template() {
        if (!memoizedTemplate) {
            memoizedTemplate = super.template.cloneNode(true);
            const contentPart = memoizedTemplate.content.querySelector('[part="content"]');
            const overlayPart = memoizedTemplate.content.querySelector('[part="overlay"]');
            const resizerContainer = document.createElement("div");
            resizerContainer.id = "resizerContainer";
            resizerContainer.classList.add("resizer-container");
            resizerContainer.appendChild(contentPart);
            overlayPart.appendChild(resizerContainer);
        }
        return memoizedTemplate;
    }
    static get properties() {
        return {
            modeless: Boolean,
            withBackdrop: Boolean
        };
    }
    /**
   * Updates the coordinates of the overlay.
   * @param {!DialogOverlayBoundsParam} bounds
   */ setBounds(bounds) {
        const overlay = this.$.overlay;
        const parsedBounds = {
            ...bounds
        };
        if (overlay.style.position !== "absolute") {
            overlay.style.position = "absolute";
            this.setAttribute("has-bounds-set", "");
            this.__forceSafariReflow();
        }
        for(const arg in parsedBounds)if (typeof parsedBounds[arg] === "number") parsedBounds[arg] = `${parsedBounds[arg]}px`;
        Object.assign(overlay.style, parsedBounds);
    }
    /**
   * Retrieves the coordinates of the overlay.
   * @return {!DialogOverlayBounds}
   */ getBounds() {
        const overlayBounds = this.$.overlay.getBoundingClientRect();
        const containerBounds = this.getBoundingClientRect();
        const top = overlayBounds.top - containerBounds.top;
        const left = overlayBounds.left - containerBounds.left;
        const width = overlayBounds.width;
        const height = overlayBounds.height;
        return {
            top,
            left,
            width,
            height
        };
    }
    /**
   * Safari 13 renders overflowing elements incorrectly.
   * This forces it to recalculate height.
   * @private
   */ __forceSafariReflow() {
        const scrollPosition = this.$.resizerContainer.scrollTop;
        const overlay = this.$.overlay;
        overlay.style.display = "block";
        requestAnimationFrame(()=>{
            overlay.style.display = "";
            this.$.resizerContainer.scrollTop = scrollPosition;
        });
    }
}
customElements.define(DialogOverlay.is, DialogOverlay);
/**
 * `<vaadin-dialog>` is a Web Component for creating customized modal dialogs.
 *
 * ### Rendering
 *
 * The content of the dialog can be populated by using the renderer callback function.
 *
 * The renderer function provides `root`, `dialog` arguments.
 * Generate DOM content, append it to the `root` element and control the state
 * of the host element by accessing `dialog`. Before generating new content,
 * users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-dialog id="dialog"></vaadin-dialog>
 * ```
 * ```js
 * const dialog = document.querySelector('#dialog');
 * dialog.renderer = function(root, dialog) {
 *   root.textContent = "Sample dialog";
 * };
 * ```
 *
 * Renderer is called on the opening of the dialog.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * ### Styling
 *
 * `<vaadin-dialog>` uses `<vaadin-dialog-overlay>` internal
 * themable component as the actual visible dialog overlay.
 *
 * See [`<vaadin-overlay>`](#/elements/vaadin-overlay) documentation.
 * for `<vaadin-dialog-overlay>` parts.
 *
 * Note: the `theme` attribute value set on `<vaadin-dialog>` is
 * propagated to the internal `<vaadin-dialog-overlay>` component.
 *
 * See [Styling Components](https://vaadin.com/docs/latest/ds/customization/styling-components) documentation.
 *
 * @fires {CustomEvent} resize - Fired when the dialog resize is finished.
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 *
 * @extends HTMLElement
 * @mixes ThemePropertyMixin
 * @mixes ElementMixin
 * @mixes DialogDraggableMixin
 * @mixes DialogResizableMixin
 */ class Dialog extends (0, _vaadinThemePropertyMixinJs.ThemePropertyMixin)((0, _elementMixinJs.ElementMixin)((0, _vaadinDialogDraggableMixinJs.DialogDraggableMixin)((0, _vaadinDialogResizableMixinJs.DialogResizableMixin)((0, _polymerElementJs.PolymerElement))))) {
    static get template() {
        return (0, _polymerElementJs.html)`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        focus-trap
      ></vaadin-dialog-overlay>
    `;
    }
    static get is() {
        return "vaadin-dialog";
    }
    static get properties() {
        return {
            /**
       * True if the overlay is currently displayed.
       * @type {boolean}
       */ opened: {
                type: Boolean,
                value: false,
                notify: true
            },
            /**
       * Set to true to disable closing dialog on outside click
       * @attr {boolean} no-close-on-outside-click
       * @type {boolean}
       */ noCloseOnOutsideClick: {
                type: Boolean,
                value: false
            },
            /**
       * Set to true to disable closing dialog on Escape press
       * @attr {boolean} no-close-on-esc
       * @type {boolean}
       */ noCloseOnEsc: {
                type: Boolean,
                value: false
            },
            /**
       * Set the `aria-label` attribute for assistive technologies like
       * screen readers. An empty string value for this property (the
       * default) means that the `aria-label` attribute is not present.
       */ ariaLabel: {
                type: String,
                value: ""
            },
            /**
       * Custom function for rendering the content of the dialog.
       * Receives two arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `dialog` The reference to the `<vaadin-dialog>` element.
       * @type {DialogRenderer | undefined}
       */ renderer: Function,
            /**
       * Set to true to remove backdrop and allow click events on background elements.
       * @type {boolean}
       */ modeless: {
                type: Boolean,
                value: false
            }
        };
    }
    static get observers() {
        return [
            "_openedChanged(opened)",
            "_ariaLabelChanged(ariaLabel)",
            "_rendererChanged(renderer)"
        ];
    }
    /** @protected */ ready() {
        super.ready();
        this.$.overlay.setAttribute("role", "dialog");
        this.$.overlay.addEventListener("vaadin-overlay-outside-click", this._handleOutsideClick.bind(this));
        this.$.overlay.addEventListener("vaadin-overlay-escape-press", this._handleEscPress.bind(this));
        (0, _templatesJs.processTemplates)(this);
    }
    /**
   * Requests an update for the content of the dialog.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */ requestContentUpdate() {
        this.$.overlay.requestContentUpdate();
    }
    /** @private */ _rendererChanged(renderer) {
        this.$.overlay.setProperties({
            owner: this,
            renderer
        });
    }
    /** @protected */ connectedCallback() {
        super.connectedCallback();
        // Restore opened state if overlay was opened when disconnecting
        if (this.__restoreOpened) this.opened = true;
    }
    /** @protected */ disconnectedCallback() {
        super.disconnectedCallback();
        // Close overlay and memorize opened state
        this.__restoreOpened = this.opened;
        this.opened = false;
    }
    /** @private */ _openedChanged(opened) {
        this.$.overlay.opened = opened;
    }
    /** @private */ _ariaLabelChanged(ariaLabel) {
        if (ariaLabel) this.$.overlay.setAttribute("aria-label", ariaLabel);
        else this.$.overlay.removeAttribute("aria-label");
    }
    /** @private */ _onOverlayOpened(e) {
        if (e.detail.value === false) this.opened = false;
    }
    /**
   * Close the dialog if `noCloseOnOutsideClick` isn't set to true
   * @private
   */ _handleOutsideClick(e) {
        if (this.noCloseOnOutsideClick) e.preventDefault();
    }
    /**
   * Close the dialog if `noCloseOnEsc` isn't set to true
   * @private
   */ _handleEscPress(e) {
        if (this.noCloseOnEsc) e.preventDefault();
    }
    /** @private */ _bringOverlayToFront() {
        if (this.modeless) this.$.overlay.bringToFront();
    }
}
customElements.define(Dialog.is, Dialog);

},{"@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/element-mixin.js":"4Nib4","@vaadin/component-base/src/templates.js":"4DhBC","@vaadin/vaadin-overlay/src/vaadin-overlay.js":"g1xaT","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":"juscI","./vaadin-dialog-draggable-mixin.js":"jpd6D","./vaadin-dialog-resizable-mixin.js":"jojb2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpd6D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DialogDraggableMixin", ()=>DialogDraggableMixin);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _browserUtilsJs = require("@vaadin/component-base/src/browser-utils.js");
var _vaadinDialogUtilsJs = require("./vaadin-dialog-utils.js");
const DialogDraggableMixin = (superClass)=>class VaadinDialogDraggableMixin extends superClass {
        static get properties() {
            return {
                /**
         * Set to true to enable repositioning the dialog by clicking and dragging.
         *
         * By default, only the overlay area can be used to drag the element. But,
         * a child element can be marked as a draggable area by adding a
         * "`draggable`" class to it, this will by default make all of its children draggable also.
         * If you want a child element to be draggable
         * but still have its children non-draggable (by default), mark it with
         * "`draggable-leaf-only`" class name.
         *
         * @type {boolean}
         */ draggable: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true
                },
                /** @private */ _touchDevice: {
                    type: Boolean,
                    value: (0, _browserUtilsJs.isTouch)
                },
                /* TODO: Expose as a public property (check naming) */ __dragHandleClassName: {
                    type: String
                }
            };
        }
        /** @protected */ ready() {
            super.ready();
            this._originalBounds = {};
            this._originalMouseCoords = {};
            this._startDrag = this._startDrag.bind(this);
            this._drag = this._drag.bind(this);
            this._stopDrag = this._stopDrag.bind(this);
            this.$.overlay.$.overlay.addEventListener("mousedown", this._startDrag);
            this.$.overlay.$.overlay.addEventListener("touchstart", this._startDrag);
        }
        /** @private */ _startDrag(e) {
            // Don't initiate when there's more than 1 touch (pinch zoom)
            if (e.type === "touchstart" && e.touches.length > 1) return;
            if (this.draggable && (e.button === 0 || e.touches)) {
                const resizerContainer = this.$.overlay.$.resizerContainer;
                const isResizerContainer = e.target === resizerContainer;
                const isResizerContainerScrollbar = e.offsetX > resizerContainer.clientWidth || e.offsetY > resizerContainer.clientHeight;
                const isContentPart = e.target === this.$.overlay.$.content;
                const isDraggable = e.composedPath().some((node, index)=>{
                    if (!node.classList) return false;
                    const isDraggableNode = node.classList.contains(this.__dragHandleClassName || "draggable");
                    const isDraggableLeafOnly = node.classList.contains("draggable-leaf-only");
                    const isLeafNode = index === 0;
                    return isDraggableLeafOnly && isLeafNode || isDraggableNode && (!isDraggableLeafOnly || isLeafNode);
                });
                if (isResizerContainer && !isResizerContainerScrollbar || isContentPart || isDraggable) {
                    !isDraggable && e.preventDefault();
                    this._originalBounds = this.$.overlay.getBounds();
                    const event = (0, _vaadinDialogUtilsJs.getMouseOrFirstTouchEvent)(e);
                    this._originalMouseCoords = {
                        top: event.pageY,
                        left: event.pageX
                    };
                    window.addEventListener("mouseup", this._stopDrag);
                    window.addEventListener("touchend", this._stopDrag);
                    window.addEventListener("mousemove", this._drag);
                    window.addEventListener("touchmove", this._drag);
                    if (this.$.overlay.$.overlay.style.position !== "absolute") this.$.overlay.setBounds(this._originalBounds);
                }
            }
        }
        /** @private */ _drag(e) {
            const event = (0, _vaadinDialogUtilsJs.getMouseOrFirstTouchEvent)(e);
            if ((0, _vaadinDialogUtilsJs.eventInWindow)(event)) {
                const top = this._originalBounds.top + (event.pageY - this._originalMouseCoords.top);
                const left = this._originalBounds.left + (event.pageX - this._originalMouseCoords.left);
                this.$.overlay.setBounds({
                    top,
                    left
                });
            }
        }
        /** @private */ _stopDrag() {
            window.removeEventListener("mouseup", this._stopDrag);
            window.removeEventListener("touchend", this._stopDrag);
            window.removeEventListener("mousemove", this._drag);
            window.removeEventListener("touchmove", this._drag);
        }
    };

},{"@vaadin/component-base/src/browser-utils.js":"fxX4j","./vaadin-dialog-utils.js":"H6tGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"H6tGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Checks if the argument is a touch event and if so, returns a first touch.
 * Otherwise, if the mouse event was passed, returns it as is.
 * @param {!MouseEvent | !TouchEvent} e
 * @return {!MouseEvent | !Touch}
 * @protected
 */ parcelHelpers.export(exports, "getMouseOrFirstTouchEvent", ()=>getMouseOrFirstTouchEvent);
/**
 * Checks whether a mouse or touch event is in window.
 * @param {!MouseEvent | !TouchEvent} e
 * @return {boolean}
 * @protected
 */ parcelHelpers.export(exports, "eventInWindow", ()=>eventInWindow);
function getMouseOrFirstTouchEvent(e) {
    return e.touches ? e.touches[0] : e;
}
function eventInWindow(e) {
    return e.clientX >= 0 && e.clientX <= window.innerWidth && e.clientY >= 0 && e.clientY <= window.innerHeight;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jojb2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DialogResizableMixin", ()=>DialogResizableMixin);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
var _vaadinDialogUtilsJs = require("./vaadin-dialog-utils.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-dialog-overlay", (0, _vaadinThemableMixinJs.css)`
    [part='overlay'] {
      position: relative;
      overflow: visible;
      max-height: 100%;
      display: flex;
    }

    [part='content'] {
      box-sizing: border-box;
      height: 100%;
    }

    .resizer-container {
      overflow: auto;
      flex-grow: 1;
      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
    }

    [part='overlay'][style] .resizer-container {
      min-height: 100%;
      width: 100%;
    }

    :host(:not([resizable])) .resizer {
      display: none;
    }

    .resizer {
      position: absolute;
      height: 16px;
      width: 16px;
    }

    .resizer.edge {
      height: 8px;
      width: 8px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    .resizer.edge.n {
      width: auto;
      bottom: auto;
      cursor: ns-resize;
    }

    .resizer.ne {
      top: -4px;
      right: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.e {
      height: auto;
      left: auto;
      cursor: ew-resize;
    }

    .resizer.se {
      bottom: -4px;
      right: -4px;
      cursor: nwse-resize;
    }

    .resizer.edge.s {
      width: auto;
      top: auto;
      cursor: ns-resize;
    }

    .resizer.sw {
      bottom: -4px;
      left: -4px;
      cursor: nesw-resize;
    }

    .resizer.edge.w {
      height: auto;
      right: auto;
      cursor: ew-resize;
    }

    .resizer.nw {
      top: -4px;
      left: -4px;
      cursor: nwse-resize;
    }
  `, {
    moduleId: "vaadin-dialog-resizable-overlay-styles"
});
const DialogResizableMixin = (superClass)=>class VaadinDialogResizableMixin extends superClass {
        static get properties() {
            return {
                /**
         * Set to true to enable resizing the dialog by dragging the corners and edges.
         * @type {boolean}
         */ resizable: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true
                }
            };
        }
        /** @protected */ ready() {
            super.ready();
            this._originalBounds = {};
            this._originalMouseCoords = {};
            this._resizeListeners = {
                start: {},
                resize: {},
                stop: {}
            };
            this._addResizeListeners();
        }
        /** @private */ _addResizeListeners() {
            // Note: edge controls added before corners
            [
                "n",
                "e",
                "s",
                "w",
                "nw",
                "ne",
                "se",
                "sw"
            ].forEach((direction)=>{
                const resizer = document.createElement("div");
                this._resizeListeners.start[direction] = (e)=>this._startResize(e, direction);
                this._resizeListeners.resize[direction] = (e)=>this._resize(e, direction);
                this._resizeListeners.stop[direction] = ()=>this._stopResize(direction);
                if (direction.length === 1) resizer.classList.add("edge");
                resizer.classList.add("resizer");
                resizer.classList.add(direction);
                resizer.addEventListener("mousedown", this._resizeListeners.start[direction]);
                resizer.addEventListener("touchstart", this._resizeListeners.start[direction]);
                this.$.overlay.$.resizerContainer.appendChild(resizer);
            });
        }
        /**
     * @param {!MouseEvent | !TouchEvent} e
     * @param {!DialogResizableDirection} direction
     * @protected
     */ _startResize(e, direction) {
            // Don't initiate when there's more than 1 touch (pinch zoom)
            if (e.type === "touchstart" && e.touches.length > 1) return;
            if (e.button === 0 || e.touches) {
                e.preventDefault();
                this._originalBounds = this.$.overlay.getBounds();
                const event = (0, _vaadinDialogUtilsJs.getMouseOrFirstTouchEvent)(e);
                this._originalMouseCoords = {
                    top: event.pageY,
                    left: event.pageX
                };
                window.addEventListener("mousemove", this._resizeListeners.resize[direction]);
                window.addEventListener("touchmove", this._resizeListeners.resize[direction]);
                window.addEventListener("mouseup", this._resizeListeners.stop[direction]);
                window.addEventListener("touchend", this._resizeListeners.stop[direction]);
                if (this.$.overlay.$.overlay.style.position !== "absolute") this.$.overlay.setBounds(this._originalBounds);
            }
        }
        /**
     * @param {!MouseEvent | !TouchEvent} e
     * @param {!DialogResizableDirection} resizer
     * @protected
     */ _resize(e, resizer) {
            const event = (0, _vaadinDialogUtilsJs.getMouseOrFirstTouchEvent)(e);
            if ((0, _vaadinDialogUtilsJs.eventInWindow)(event)) {
                const minimumSize = 40;
                resizer.split("").forEach((direction)=>{
                    switch(direction){
                        case "n":
                            {
                                const height = this._originalBounds.height - (event.pageY - this._originalMouseCoords.top);
                                const top = this._originalBounds.top + (event.pageY - this._originalMouseCoords.top);
                                if (height > minimumSize) this.$.overlay.setBounds({
                                    top,
                                    height
                                });
                                break;
                            }
                        case "e":
                            {
                                const width = this._originalBounds.width + (event.pageX - this._originalMouseCoords.left);
                                if (width > minimumSize) this.$.overlay.setBounds({
                                    width
                                });
                                break;
                            }
                        case "s":
                            {
                                const height = this._originalBounds.height + (event.pageY - this._originalMouseCoords.top);
                                if (height > minimumSize) this.$.overlay.setBounds({
                                    height
                                });
                                break;
                            }
                        case "w":
                            {
                                const width = this._originalBounds.width - (event.pageX - this._originalMouseCoords.left);
                                const left = this._originalBounds.left + (event.pageX - this._originalMouseCoords.left);
                                if (width > minimumSize) this.$.overlay.setBounds({
                                    left,
                                    width
                                });
                                break;
                            }
                        default:
                            break;
                    }
                });
            }
        }
        /**
     * @param {!DialogResizableDirection} direction
     * @protected
     */ _stopResize(direction) {
            window.removeEventListener("mousemove", this._resizeListeners.resize[direction]);
            window.removeEventListener("touchmove", this._resizeListeners.resize[direction]);
            window.removeEventListener("mouseup", this._resizeListeners.stop[direction]);
            window.removeEventListener("touchend", this._resizeListeners.stop[direction]);
            this.dispatchEvent(new CustomEvent("resize", {
                detail: this._getResizeDimensions()
            }));
        }
        /**
     * @return {!DialogResizeDimensions}
     * @protected
     */ _getResizeDimensions() {
            const scrollPosition = this.$.overlay.$.resizerContainer.scrollTop;
            const { width , height  } = getComputedStyle(this.$.overlay.$.overlay);
            const content = this.$.overlay.$.content;
            content.setAttribute("style", "position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");
            const { width: contentWidth , height: contentHeight  } = getComputedStyle(content);
            content.removeAttribute("style");
            this.$.overlay.$.resizerContainer.scrollTop = scrollPosition;
            return {
                width,
                height,
                contentWidth,
                contentHeight
            };
        }
    };

},{"@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","./vaadin-dialog-utils.js":"H6tGo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3d7AN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "badge", ()=>badge);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _styleJs = require("./style.js");
var _colorJs = require("./color.js");
var _typographyJs = require("./typography.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const badge = (0, _vaadinThemableMixinJs.css)`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon,
  [theme~='badge'] iron-icon {
    margin: -0.25em 0;
    --iron-icon-width: 1.5em;
    --iron-icon-height: 1.5em;
  }

  [theme~='badge'] vaadin-icon:first-child,
  [theme~='badge'] iron-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child,
  [theme~='badge'] iron-icon:last-child {
    margin-right: -0.375em;
  }

  iron-icon[theme~='badge'][icon],
  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  iron-icon[theme~='badge'][icon][theme~='small'],
  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child,
  [dir='rtl'][theme~='badge'] iron-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child,
  [dir='rtl'][theme~='badge'] iron-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;
(0, _vaadinThemableMixinJs.registerStyles)("", badge, {
    moduleId: "lumo-badge"
});

},{"./style.js":"hYu1M","./color.js":"2or7a","./typography.js":"5zfSv","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qiAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinGridSortColumnJs = require("./theme/lumo/vaadin-grid-sort-column.js");
var _vaadinGridSortColumnJs1 = require("./src/vaadin-grid-sort-column.js");
parcelHelpers.exportAll(_vaadinGridSortColumnJs1, exports);

},{"./theme/lumo/vaadin-grid-sort-column.js":"c4KUR","./src/vaadin-grid-sort-column.js":"e3B6s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4KUR":[function(require,module,exports) {
var _vaadinGridSorterJs = require("./vaadin-grid-sorter.js");
var _vaadinGridSortColumnJs = require("../../src/vaadin-grid-sort-column.js");

},{"./vaadin-grid-sorter.js":"hAfNC","../../src/vaadin-grid-sort-column.js":"e3B6s"}],"hAfNC":[function(require,module,exports) {
var _vaadinGridSorterStylesJs = require("./vaadin-grid-sorter-styles.js");
var _vaadinGridSorterJs = require("../../src/vaadin-grid-sorter.js");

},{"./vaadin-grid-sorter-styles.js":"bNsv0","../../src/vaadin-grid-sorter.js":"9zGff"}],"bNsv0":[function(require,module,exports) {
var _colorJs = require("@vaadin/vaadin-lumo-styles/color.js");
var _styleJs = require("@vaadin/vaadin-lumo-styles/style.js");
var _spacingJs = require("@vaadin/vaadin-lumo-styles/spacing.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
(0, _vaadinThemableMixinJs.registerStyles)("vaadin-grid-sorter", (0, _vaadinThemableMixinJs.css)`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--lumo-primary-text-color);
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `, {
    moduleId: "lumo-grid-sorter"
});

},{"@vaadin/vaadin-lumo-styles/color.js":"2or7a","@vaadin/vaadin-lumo-styles/style.js":"hYu1M","@vaadin/vaadin-lumo-styles/spacing.js":"7WoUL","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy"}],"9zGff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridSorter", ()=>GridSorter);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _polymerElementJs = require("@polymer/polymer/polymer-element.js");
var _dirMixinJs = require("@vaadin/component-base/src/dir-mixin.js");
var _vaadinThemableMixinJs = require("@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
const $_documentContainer = document.createElement("template");
$_documentContainer.innerHTML = `
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;
document.head.appendChild($_documentContainer.content);
/**
 * `<vaadin-grid-sorter>` is a helper element for the `<vaadin-grid>` that provides out-of-the-box UI controls,
 * visual feedback, and handlers for sorting the grid data.
 *
 * #### Example:
 * ```html
 * <vaadin-grid-column id="column"></vaadin-grid-column>
 * ```
 * ```js
 * const column = document.querySelector('#column');
 * column.renderer = (root, column, model) => {
 *   let sorter = root.firstElementChild;
 *   if (!sorter) {
 *     sorter = document.createElement('vaadin-grid-sorter');
 *     root.appendChild(sorter);
 *   }
 *   sorter.path = 'name.first';
 * };
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `content` | The slotted content wrapper
 * `indicators` | The internal sorter indicators.
 * `order` | The internal sorter order
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `direction` | Sort direction of a sorter | :host
 *
 * @fires {CustomEvent} direction-changed - Fired when the `direction` property changes.
 * @fires {CustomEvent} sorter-changed - Fired when the `path` or `direction` property changes.
 *
 * @extends HTMLElement
 */ class GridSorter extends (0, _vaadinThemableMixinJs.ThemableMixin)((0, _dirMixinJs.DirMixin)((0, _polymerElementJs.PolymerElement))) {
    static get template() {
        return (0, _polymerElementJs.html)`
      <style>
        :host {
          display: inline-flex;
          cursor: pointer;
          max-width: 100%;
        }

        [part='content'] {
          flex: 1 1 auto;
        }

        [part='indicators'] {
          position: relative;
          align-self: center;
          flex: none;
        }

        [part='order'] {
          display: inline;
          vertical-align: super;
        }

        [part='indicators']::before {
          font-family: 'vaadin-grid-sorter-icons';
          display: inline-block;
        }

        :host(:not([direction])) [part='indicators']::before {
          content: '\\e901';
        }

        :host([direction='asc']) [part='indicators']::before {
          content: '\\e900';
        }

        :host([direction='desc']) [part='indicators']::before {
          content: '\\e902';
        }
      </style>

      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `;
    }
    static get is() {
        return "vaadin-grid-sorter";
    }
    static get properties() {
        return {
            /**
       * JS Path of the property in the item used for sorting the data.
       */ path: String,
            /**
       * How to sort the data.
       * Possible values are `asc` to use an ascending algorithm, `desc` to sort the data in
       * descending direction, or `null` for not sorting the data.
       * @type {GridSorterDirection | undefined}
       */ direction: {
                type: String,
                reflectToAttribute: true,
                notify: true,
                value: null
            },
            /**
       * @type {number | null}
       * @protected
       */ _order: {
                type: Number,
                value: null
            },
            /** @private */ _isConnected: {
                type: Boolean,
                observer: "__isConnectedChanged"
            }
        };
    }
    static get observers() {
        return [
            "_pathOrDirectionChanged(path, direction)"
        ];
    }
    /** @protected */ ready() {
        super.ready();
        this.addEventListener("click", this._onClick.bind(this));
    }
    /** @protected */ connectedCallback() {
        super.connectedCallback();
        this._isConnected = true;
    }
    /** @protected */ disconnectedCallback() {
        super.disconnectedCallback();
        this._isConnected = false;
    }
    /** @private */ _pathOrDirectionChanged() {
        this.__dispatchSorterChangedEvenIfPossible();
    }
    /** @private */ __isConnectedChanged(newValue, oldValue) {
        if (oldValue === false) return;
        this.__dispatchSorterChangedEvenIfPossible();
    }
    /** @private */ __dispatchSorterChangedEvenIfPossible() {
        if (this.path === undefined || this.direction === undefined || !this._isConnected) return;
        this.dispatchEvent(new CustomEvent("sorter-changed", {
            bubbles: true,
            composed: true
        }));
    }
    /** @private */ _getDisplayOrder(order) {
        return order === null ? "" : order + 1;
    }
    /** @private */ _onClick(e) {
        const activeElement = this.getRootNode().activeElement;
        if (this !== activeElement && this.contains(activeElement)) // Some focusable content inside the sorter was clicked, do nothing.
        return;
        e.preventDefault();
        if (this.direction === "asc") this.direction = "desc";
        else if (this.direction === "desc") this.direction = null;
        else this.direction = "asc";
    }
}
customElements.define(GridSorter.is, GridSorter);

},{"@polymer/polymer/polymer-element.js":"896Hh","@vaadin/component-base/src/dir-mixin.js":"e4xcC","@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":"kGlvy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e3B6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GridSortColumn", ()=>GridSortColumn);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ var _vaadinGridSorterJs = require("./vaadin-grid-sorter.js");
var _vaadinGridColumnJs = require("./vaadin-grid-column.js");
/**
 * `<vaadin-grid-sort-column>` is a helper element for the `<vaadin-grid>`
 * that provides default header renderer and functionality for sorting.
 *
 * #### Example:
 * ```html
 * <vaadin-grid items="[[items]]">
 *  <vaadin-grid-sort-column path="name.first" direction="asc"></vaadin-grid-sort-column>
 *
 *  <vaadin-grid-column>
 *    ...
 * ```
 *
 * @fires {CustomEvent} direction-changed - Fired when the `direction` property changes.
 */ class GridSortColumn extends (0, _vaadinGridColumnJs.GridColumn) {
    static get is() {
        return "vaadin-grid-sort-column";
    }
    static get properties() {
        return {
            /**
       * JS Path of the property in the item used for sorting the data.
       */ path: String,
            /**
       * How to sort the data.
       * Possible values are `asc` to use an ascending algorithm, `desc` to sort the data in
       * descending direction, or `null` for not sorting the data.
       * @type {GridSorterDirection | undefined}
       */ direction: {
                type: String,
                notify: true
            }
        };
    }
    static get observers() {
        return [
            "_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, direction)"
        ];
    }
    constructor(){
        super();
        this.__boundOnDirectionChanged = this.__onDirectionChanged.bind(this);
    }
    /**
   * Renders the grid sorter to the header cell.
   *
   * @override
   */ _defaultHeaderRenderer(root, _column) {
        let sorter = root.firstElementChild;
        if (!sorter) {
            sorter = document.createElement("vaadin-grid-sorter");
            sorter.addEventListener("direction-changed", this.__boundOnDirectionChanged);
            root.appendChild(sorter);
        }
        sorter.path = this.path;
        sorter.__rendererDirection = this.direction;
        sorter.direction = this.direction;
        sorter.textContent = this.__getHeader(this.header, this.path);
    }
    /**
   * The sort column doesn't allow to use a custom header renderer
   * to override the header cell content.
   * It always renders the grid sorter to the header cell.
   *
   * @override
   */ _computeHeaderRenderer() {
        return this._defaultHeaderRenderer;
    }
    /**
   * Updates the sorting direction once the grid sorter's direction is changed.
   * The listener handles only user-fired events.
   *
   * @private
   */ __onDirectionChanged(e) {
        // Skip if the direction is changed by the renderer.
        if (e.detail.value === e.target.__rendererDirection) return;
        this.direction = e.detail.value;
    }
    /** @private */ __getHeader(header, path) {
        if (header) return header;
        if (path) return this._generateHeader(path);
    }
}
customElements.define(GridSortColumn.is, GridSortColumn);

},{"./vaadin-grid-sorter.js":"9zGff","./vaadin-grid-column.js":"dFate","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKrr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vaadinGridColumnJs = require("./theme/lumo/vaadin-grid-column.js");
var _vaadinGridColumnJs1 = require("./src/vaadin-grid-column.js");
parcelHelpers.exportAll(_vaadinGridColumnJs1, exports);

},{"./theme/lumo/vaadin-grid-column.js":"6Gyxh","./src/vaadin-grid-column.js":"dFate","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Gyxh":[function(require,module,exports) {
var _vaadinGridColumnJs = require("../../src/vaadin-grid-column.js");

},{"../../src/vaadin-grid-column.js":"dFate"}]},["8fd6L"], null, "parcelRequire1fad")

//# sourceMappingURL=database-explorer.c3fd515a.js.map
