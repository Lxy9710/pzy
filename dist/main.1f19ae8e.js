// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var demo = document.querySelector("#demo"); //通过css选择器找到这个元素 demo即html写的部分 懒得改了

var style = document.querySelector("#style");
var string = "\n/*hi \u6211\u662F\u5C0F\u6881\n  \u5C31 \u6211\u6628\u665A\u5176\u5B9E\u5728\u5199js\u7684\u4F5C\u4E1A\n  \u71AC\u7740\u71AC\u7740\u597D\u50CF\u5C31\u633A\u665A\u4E86\n  \u611F\u89C9\u660E\u5929\u4E5F\u8D77\u4E0D\u6765\n  \u6240\u4EE5\u60F3\u5199\u4E2A\u4E1C\u897F\u6765\u966A\u966A\u5927\u5B9D\u8D1D\n*/ \nbody{\n    color:#4682B4;\n}\n/*\u5148\u6311\u4E00\u4E2A\u6F02\u4EAE\u70B9\u513F\u7684\u5B57\u4F53\u989C\u8272*/\n*{box-sizing: border-box;}\n/*\u4F60\u731C\u6211\u8981\u753B\u4EC0\u4E48\uFF1F*/\n#guess{\n  display: inline-block;\n  margin: 100px;\n  position: relative;\n  transition: all 1s;\n  \n}\n#guess:hover{\n  transform: scale(1.2);\n  \n}\n\n/*\u4F60\u5E94\u8BE5\u77E5\u9053\u4E868*/\n\n/*\u597D\u50CF\u8BBE\u7F6E\u7684\u6709\u70B9\u6162\u5662\uFF1F*/\n\n#guess>.left{\n  background: #FA8072;\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  transform: rotate(45deg) translateX(31px);\n  bottom: 50px;\n  left: -50px;\n  border-radius: 50% 0 0 50%;\n}\n\n/*\u662F\u4E0D\u662F\u5F88\u5947\u602A*/\n\n#guess>.right{\n  background: #FA8072;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute;\n  transform: rotate(45deg) translateY(31px);\n  bottom: 50px;\n  right: -50px;\n  border-radius: 50% 50% 0 0;\n}\n\n/*\u51FA\u6765\u5566*/\n/*\u4E5F\u4E0D\u77E5\u9053\u4F60\u7684\u624B\u673A\u517C\u4E0D\u517C\u5BB9*/\n\n#guess>.bottom{\n  background: #FA8072;\n  width: 50px;\n  height: 50px;\n  transform: rotate(45deg);\n}\n\n/*\u6233\u6233\u5B83\u8BD5\u8BD5\uFF1F*/\n\n/*\u5176\u5B9E\u597D\u65E0\u804Ahhh*/\n\n/*\u4E0D\u60F3\u5199\u522B\u7684\u5566 \u6211\u8981\u7761\u4E00\u4F1A\u513F*/\n\n/*\u597D\u60F3\u4F60 \u56DE\u6765\u6211\u4EEC\u53BB\u5403\u51B0\u6DC7\u6DCB*/\n\n/*mua\uFF01*/\n";
var n = 0;
var string2 = ""; // string = string.replace(/\n/g, "<br>"); //对string中的回车进行替换,但是会出现尖括号
// setInterval(() => {
//   n = n + 1;
//   demo.innerHTML = n;
// }, 1000); 可用时延来实现 但是递归更稳定些

var step = function step() {
  setTimeout(function () {
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    demo.scrollTo(0, 99999);

    if (string[n] === "\n") {
      string2 += "<br>"; //判断是不是回车 进行br替换回车符号 格式美观
    } else if (string[n] == " ") {
      string2 += "&nbsp"; //html语法中的缩进 替换空格
    } else {
      string2 += string[n];
    }

    n += 1;

    if (n <= string.length) {
      step();
    } else {}
  }, 70);
};

step();
},{}],"C:/Users/clairelxy/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52545" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/clairelxy/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=main.1f19ae8e.js.map