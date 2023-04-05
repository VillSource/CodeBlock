(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._tmptool-tool_19gpr_1{margin:1em auto;min-height:200px;padding-bottom:10px;background-color:#fffffe;border-radius:8px;box-shadow:0 5px 30px -10px #00000079}._p_19gpr_12{text-align:center;color:#00f}._header_19gpr_18{height:30px;width:100%;background-color:#e0e0e0;border-radius:8px 8px 0 0}._header-title_19gpr_25{color:#0a0a0e;float:left;margin-left:20px;margin-right:20px}._header-runbtn_19gpr_32{float:right;top:50%;height:100%;background-color:#e0e0e000;margin-right:20px}._header-runbtn_19gpr_32:hover{margin-right:20px}._monaco-editor_19gpr_47{height:250px}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
var ze = Object.defineProperty;
var We = (i, r, s) => r in i ? ze(i, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[r] = s;
var O = (i, r, s) => (We(i, typeof r != "symbol" ? r + "" : r, s), s);
const Re = "_p_19gpr_12", Ge = "_header_19gpr_18", j = {
  "tmptool-tool": "_tmptool-tool_19gpr_1",
  p: Re,
  header: Ge,
  "header-title": "_header-title_19gpr_25",
  "header-runbtn": "_header-runbtn_19gpr_32",
  "monaco-editor": "_monaco-editor_19gpr_47"
}, Ve = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.8197 6.04369C11.8924 5.8925 12.1076 5.8925 12.1803 6.04369L13.9776 9.78496C14.0068 9.84564 14.0645 9.88759 14.1312 9.89657L18.2448 10.4498C18.411 10.4722 18.4776 10.6769 18.3562 10.7927L15.3535 13.6582C15.3048 13.7047 15.2827 13.7726 15.2948 13.8388L16.0398 17.922C16.0699 18.087 15.8957 18.2136 15.7481 18.1339L12 16.1124L8.25192 18.1339C8.10429 18.2136 7.93012 18.087 7.96022 17.922L8.7052 13.8388C8.71728 13.7726 8.69523 13.7047 8.64652 13.6582L5.64378 10.7927C5.52244 10.6769 5.58896 10.4722 5.7552 10.4498L9.86876 9.89657C9.93549 9.88759 9.99322 9.84564 10.0224 9.78496L11.8197 6.04369Z"/></svg>';
function Fe(i, r, s) {
  return r in i ? Object.defineProperty(i, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[r] = s, i;
}
function X(i, r) {
  var s = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(i);
    r && (d = d.filter(function(a) {
      return Object.getOwnPropertyDescriptor(i, a).enumerable;
    })), s.push.apply(s, d);
  }
  return s;
}
function ee(i) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? X(Object(s), !0).forEach(function(d) {
      Fe(i, d, s[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : X(Object(s)).forEach(function(d) {
      Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(s, d));
    });
  }
  return i;
}
function Ke(i, r) {
  if (i == null)
    return {};
  var s = {}, d = Object.keys(i), a, o;
  for (o = 0; o < d.length; o++)
    a = d[o], !(r.indexOf(a) >= 0) && (s[a] = i[a]);
  return s;
}
function Ue(i, r) {
  if (i == null)
    return {};
  var s = Ke(i, r), d, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(i);
    for (a = 0; a < o.length; a++)
      d = o[a], !(r.indexOf(d) >= 0) && (!Object.prototype.propertyIsEnumerable.call(i, d) || (s[d] = i[d]));
  }
  return s;
}
function Ye(i, r) {
  return Ze(i) || Je(i, r) || Qe(i, r) || Xe();
}
function Ze(i) {
  if (Array.isArray(i))
    return i;
}
function Je(i, r) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(i)))) {
    var s = [], d = !0, a = !1, o = void 0;
    try {
      for (var h = i[Symbol.iterator](), b; !(d = (b = h.next()).done) && (s.push(b.value), !(r && s.length === r)); d = !0)
        ;
    } catch (g) {
      a = !0, o = g;
    } finally {
      try {
        !d && h.return != null && h.return();
      } finally {
        if (a)
          throw o;
      }
    }
    return s;
  }
}
function Qe(i, r) {
  if (!!i) {
    if (typeof i == "string")
      return te(i, r);
    var s = Object.prototype.toString.call(i).slice(8, -1);
    if (s === "Object" && i.constructor && (s = i.constructor.name), s === "Map" || s === "Set")
      return Array.from(i);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return te(i, r);
  }
}
function te(i, r) {
  (r == null || r > i.length) && (r = i.length);
  for (var s = 0, d = new Array(r); s < r; s++)
    d[s] = i[s];
  return d;
}
function Xe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(i, r, s) {
  return r in i ? Object.defineProperty(i, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[r] = s, i;
}
function se(i, r) {
  var s = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(i);
    r && (d = d.filter(function(a) {
      return Object.getOwnPropertyDescriptor(i, a).enumerable;
    })), s.push.apply(s, d);
  }
  return s;
}
function ie(i) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? se(Object(s), !0).forEach(function(d) {
      et(i, d, s[d]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : se(Object(s)).forEach(function(d) {
      Object.defineProperty(i, d, Object.getOwnPropertyDescriptor(s, d));
    });
  }
  return i;
}
function tt() {
  for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
    r[s] = arguments[s];
  return function(d) {
    return r.reduceRight(function(a, o) {
      return o(a);
    }, d);
  };
}
function S(i) {
  return function r() {
    for (var s = this, d = arguments.length, a = new Array(d), o = 0; o < d; o++)
      a[o] = arguments[o];
    return a.length >= i.length ? i.apply(this, a) : function() {
      for (var h = arguments.length, b = new Array(h), g = 0; g < h; g++)
        b[g] = arguments[g];
      return r.apply(s, [].concat(a, b));
    };
  };
}
function $(i) {
  return {}.toString.call(i).includes("Object");
}
function st(i) {
  return !Object.keys(i).length;
}
function q(i) {
  return typeof i == "function";
}
function it(i, r) {
  return Object.prototype.hasOwnProperty.call(i, r);
}
function rt(i, r) {
  return $(r) || C("changeType"), Object.keys(r).some(function(s) {
    return !it(i, s);
  }) && C("changeField"), r;
}
function nt(i) {
  q(i) || C("selectorType");
}
function ot(i) {
  q(i) || $(i) || C("handlerType"), $(i) && Object.values(i).some(function(r) {
    return !q(r);
  }) && C("handlersType");
}
function dt(i) {
  i || C("initialIsRequired"), $(i) || C("initialType"), st(i) && C("initialContent");
}
function at(i, r) {
  throw new Error(i[r] || i.default);
}
var lt = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, C = S(at)(lt), D = {
  changes: rt,
  selector: nt,
  handler: ot,
  initial: dt
};
function ht(i) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  D.initial(i), D.handler(r);
  var s = {
    current: i
  }, d = S(pt)(s, r), a = S(ct)(s), o = S(D.changes)(i), h = S(ut)(s);
  function b() {
    var H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(x) {
      return x;
    };
    return D.selector(H), H(s.current);
  }
  function g(H) {
    tt(d, a, o, h)(H);
  }
  return [b, g];
}
function ut(i, r) {
  return q(r) ? r(i.current) : r;
}
function ct(i, r) {
  return i.current = ie(ie({}, i.current), r), r;
}
function pt(i, r, s) {
  return q(r) ? r(i.current) : Object.keys(s).forEach(function(d) {
    var a;
    return (a = r[d]) === null || a === void 0 ? void 0 : a.call(r, i.current[d]);
  }), s;
}
var ft = {
  create: ht
}, gt = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"
  }
};
function mt(i) {
  return function r() {
    for (var s = this, d = arguments.length, a = new Array(d), o = 0; o < d; o++)
      a[o] = arguments[o];
    return a.length >= i.length ? i.apply(this, a) : function() {
      for (var h = arguments.length, b = new Array(h), g = 0; g < h; g++)
        b[g] = arguments[g];
      return r.apply(s, [].concat(a, b));
    };
  };
}
function bt(i) {
  return {}.toString.call(i).includes("Object");
}
function yt(i) {
  return i || re("configIsRequired"), bt(i) || re("configType"), i.urls ? (Mt(), {
    paths: {
      vs: i.urls.monacoBase
    }
  }) : i;
}
function Mt() {
  console.warn(ne.deprecation);
}
function Ht(i, r) {
  throw new Error(i[r] || i.default);
}
var ne = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, re = mt(Ht)(ne), wt = {
  config: yt
}, Nt = function() {
  for (var r = arguments.length, s = new Array(r), d = 0; d < r; d++)
    s[d] = arguments[d];
  return function(a) {
    return s.reduceRight(function(o, h) {
      return h(o);
    }, a);
  };
};
function oe(i, r) {
  return Object.keys(r).forEach(function(s) {
    r[s] instanceof Object && i[s] && Object.assign(r[s], oe(i[s], r[s]));
  }), ee(ee({}, i), r);
}
var xt = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Z(i) {
  var r = !1, s = new Promise(function(d, a) {
    i.then(function(o) {
      return r ? a(xt) : d(o);
    }), i.catch(a);
  });
  return s.cancel = function() {
    return r = !0;
  }, s;
}
var Ot = ft.create({
  config: gt,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), de = Ye(Ot, 2), k = de[0], _ = de[1];
function Tt(i) {
  var r = wt.config(i), s = r.monaco, d = Ue(r, ["monaco"]);
  _(function(a) {
    return {
      config: oe(a.config, d),
      monaco: s
    };
  });
}
function Ct() {
  var i = k(function(r) {
    var s = r.monaco, d = r.isInitialized, a = r.resolve;
    return {
      monaco: s,
      isInitialized: d,
      resolve: a
    };
  });
  if (!i.isInitialized) {
    if (_({
      isInitialized: !0
    }), i.monaco)
      return i.resolve(i.monaco), Z(J);
    if (window.monaco && window.monaco.editor)
      return ae(window.monaco), i.resolve(window.monaco), Z(J);
    Nt(Lt, Bt)(Et);
  }
  return Z(J);
}
function Lt(i) {
  return document.body.appendChild(i);
}
function vt(i) {
  var r = document.createElement("script");
  return i && (r.src = i), r;
}
function Bt(i) {
  var r = k(function(d) {
    var a = d.config, o = d.reject;
    return {
      config: a,
      reject: o
    };
  }), s = vt("".concat(r.config.paths.vs, "/loader.js"));
  return s.onload = function() {
    return i();
  }, s.onerror = r.reject, s;
}
function Et() {
  var i = k(function(s) {
    var d = s.config, a = s.resolve, o = s.reject;
    return {
      config: d,
      resolve: a,
      reject: o
    };
  }), r = window.require;
  r.config(i.config), r(["vs/editor/editor.main"], function(s) {
    ae(s), i.resolve(s);
  }, function(s) {
    i.reject(s);
  });
}
function ae(i) {
  k().monaco || _({
    monaco: i
  });
}
function It() {
  return k(function(i) {
    var r = i.monaco;
    return r;
  });
}
var J = new Promise(function(i, r) {
  return _({
    resolve: i,
    reject: r
  });
}), jt = {
  config: Tt,
  init: Ct,
  __getMonacoInstance: It
}, N = { exports: {} };
(function(i) {
  const r = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ];
  class s {
    static requireNonNull(e, t) {
      if (!this.isDefined(e))
        throw new Error(`Null or undefined value not allowed for ${t}`);
      return e;
    }
    static ofNullable(e, t) {
      return this.isDefined(e) || (e = s.requireNonNull(t, "defaultValue")), e;
    }
    static isDefined(e) {
      return e != null;
    }
    static isEmptyOrWhitespace(e) {
      return this.isDefined(e) ? typeof e == "string" && e.constructor === String ? e.toString().trim().length === 0 : !1 : !0;
    }
  }
  class d extends Map {
    clone() {
      const e = new d();
      return this.forEach((t, n) => e.set(n, t)), e;
    }
  }
  class a {
    constructor(e, t, n) {
      if (this._node = null, this._hNode = null, this._isCached = !1, s.requireNonNull(e, "tagName in TagBuilder"), e = e.trim().toLowerCase(), h.mode === "headless") {
        this.hNode = this.headlessBuilder(e, t, n);
        return;
      }
      if (s.isEmptyOrWhitespace(n)) {
        const u = document.createElement(e);
        u.contentEditable = "inherit", u.draggable = !1, this.node = u;
      } else {
        const u = document.createElementNS(n, e);
        this.node = u;
      }
      if (!s.isEmptyOrWhitespace(t)) {
        if (document.querySelector(`#${t}`) !== null)
          throw new Error(`Tag with '${t}' id already exists in the document tree`);
        this.node.id = t;
      }
    }
    attr(e, t) {
      return this.isHeadlessMode ? this.hNode.attr(e, t) : this.node.setAttribute(e, `${t}`), this;
    }
    slot(e) {
      return this.isHeadlessMode ? this.hNode.attr("slot", e) : this.node.slot = e, this;
    }
    tabIndex(e) {
      return this.isHeadlessMode ? this.hNode.attr("tabindex", e) : this.node.tabIndex = e, this;
    }
    append(...e) {
      return e = e.filter((t) => s.isDefined(t)), e.length === 0 ? this : this.isHeadlessMode ? (this.hNode.append(...e.map((t) => t instanceof a ? t.buildHTML() : t)), this) : (this.node.append(...e.map((t) => t instanceof a ? t.build() : t)), this);
    }
    prepend(...e) {
      return e = e.filter((t) => s.isDefined(t)), e.length === 0 ? this : this.isHeadlessMode ? (this.hNode.prepend(...e.map((t) => t instanceof a ? t.buildHTML() : t)), this) : (this.node.prepend(...e.map((t) => t instanceof a ? t.build() : t)), this);
    }
    insertAdjacent(e, t = "after") {
      return this.isHeadlessMode ? this.hNode.insertAdjacent(e.buildHTML(), t === "before" ? "before" : "after") : this.node.insertAdjacentElement(t === "before" ? "beforebegin" : "afterend", e.build()), this;
    }
    innerHTML(e) {
      return this.isHeadlessMode ? this.hNode.innerHTML(e) : this.node.innerHTML = e, this;
    }
    classes(...e) {
      if (!Array.isArray(e))
        throw new Error(`Invalid datatype for classes. Got '${typeof e}' expecting array of strings for node: [type = '${this.node.nodeType}', tagName = '${this.node.tagName}']`);
      return this.isHeadlessMode ? (this.hNode.classes(e), this) : (e.forEach((t) => {
        if (typeof t != "string" || t.constructor !== String)
          throw new Error(`Invalid datatype for class name. Got '${typeof t}' expecting string for node: [type = '${this.node.nodeType}', tagName = '${this.node.tagName}']`);
        this.node.classList.contains(t) || this.node.classList.add(t);
      }), this);
    }
    margin(...e) {
      return e.length > 4 || e.length === 0 ? this : (this.style({ margin: e.join(" ") }), this);
    }
    origin(e, t, n, u) {
      return s.isEmptyOrWhitespace(e) || this.style({ top: e }), s.isEmptyOrWhitespace(t) || this.style({ right: t }), s.isEmptyOrWhitespace(n) || this.style({ bottom: n }), s.isEmptyOrWhitespace(u) || this.style({ left: u }), this;
    }
    padding(...e) {
      return e.length > 4 || e.length === 0 ? this : (this.style({ padding: e.join(" ") }), this);
    }
    position(e) {
      return this.style({ position: e }), this;
    }
    style(e) {
      for (const [t, n] of Object.entries(e))
        if (!(t === "undefined" || t === "null" || !s.isDefined(n))) {
          if (this.isHeadlessMode) {
            this.hNode.style(t, n);
            continue;
          }
          window.CSS.supports(t, n.toString()) ? this.node.style[t] = n.toString() : console.debug(`Entry/value is not supported => ${t} : ${n}`);
        }
      return this;
    }
    on(e, t, n) {
      return this.isHeadlessMode ? this.hNode.attr(`on${e}`.toLowerCase(), t) : this.node.addEventListener(e, t, n), this;
    }
    build() {
      return this.node;
    }
    buildHTML() {
      return this.isHeadlessMode ? this.hNode.build() : this.build().outerHTML;
    }
    get isSVGElement() {
      return this.node instanceof SVGElement;
    }
    get isCached() {
      return this._isCached;
    }
    set isCached(e) {
      this._isCached = e;
    }
    get node() {
      return this._node;
    }
    set node(e) {
      this._node = e;
    }
    get hNode() {
      return this._hNode;
    }
    set hNode(e) {
      this._hNode = e;
    }
    get tagName() {
      return this.isHeadlessMode ? this.hNode.tagName().toUpperCase() : this.node.tagName;
    }
    get tagId() {
      return this.isHeadlessMode ? this.hNode.tagId() : this.node.id;
    }
    get isHeadlessMode() {
      return h.mode === "headless" || s.isDefined(this.hNode);
    }
    headlessBuilder(e, t, n) {
      class u {
        constructor(y, M) {
          this._attrs = new d(), this._children = [], this._siblings = new d([
            ["before", []],
            ["after", []]
          ]), this._styles = new d(), this._tagName = y, s.isEmptyOrWhitespace(M) || this.attrs.set("id", M), s.isEmptyOrWhitespace(n) ? this.attrs.set("draggable", !1) : this.attrs.set("xmlns", n), this.attrs.set("class", /* @__PURE__ */ new Set());
        }
        get tagName() {
          return this._tagName;
        }
        get attrs() {
          return this._attrs;
        }
        get children() {
          return this._children;
        }
        get siblings() {
          return this._siblings;
        }
        get styles() {
          return this._styles;
        }
        get classes() {
          return this.attrs.get("class");
        }
        static from(y) {
          const M = new u(y._tagName, y.attrs.get("id"));
          return M._attrs = y.attrs.clone(), M._children = [...y._children], M._siblings = y._siblings.clone(), M._styles = y._styles.clone(), M;
        }
      }
      const p = function(w, y, M) {
        let m = new u(w, y);
        return M != null && (m = u.from(M)), {
          attr: function(c, f) {
            return m.attrs.set(c, `${f}`), this;
          },
          append: function(...c) {
            return m.children.push(...c), this;
          },
          prepend: function(...c) {
            return m.children.unshift(...c), this;
          },
          insertAdjacent: function(c, f) {
            return m.siblings.get(f).push(c), this;
          },
          innerHTML: function(c) {
            return m.children.splice(0, m.children.length, c), this;
          },
          classes: function(c) {
            return c.forEach((f) => {
              if (typeof f != "string" || f.constructor !== String)
                throw new Error(`Invalid datatype for class name. Got '${typeof f}' expecting string for node: [tagName = '${w}']`);
              m.classes.add(f.trim());
            }), this;
          },
          style: function(c, f) {
            return !s.isDefined(c) || !s.isDefined(f) ? this : (m.styles.set(c, `${f}`), this);
          },
          tagName: () => m.tagName,
          tagId: () => {
            var c;
            return c = m.attrs.get("id"), c != null ? c : null;
          },
          clone: function() {
            return p(w, y, m);
          },
          build: () => {
            let c = "";
            if (m.attrs.forEach((f, v) => {
              if (v.trim() === "class") {
                f.size > 0 && (c += ` class="${[...f].join(" ")}"`);
                return;
              }
              f = s.isEmptyOrWhitespace(f) ? "" : f, c += ` ${v}="${f}"`;
            }), m.styles.size > 0) {
              c += ' style="';
              let f = "";
              m.styles.forEach((v, Ae) => {
                v = s.isEmptyOrWhitespace(v) ? "" : v, f += ` ${Ae.trim()}: ${v.trim()};`;
              }), c += `${f.trim()}"`;
            }
            return r.includes(w) ? `<${w}${c}>` : m.siblings.get("before").join() + `<${w}${c}>` + (m.children.length === 0 ? "" : m.children.join("")) + `</${w}>` + m.siblings.get("after").join();
          }
        };
      };
      return p(e, t);
    }
  }
  class o extends a {
    constructor(e, t) {
      super(e, t);
    }
    accessKey(e) {
      return this.isHeadlessMode ? this.hNode.attr("accesskey", e) : this.node.accessKey = e.trim(), this;
    }
    inputMode(e = "text") {
      return e = s.ofNullable(e, "text"), this.isHeadlessMode ? this.hNode.attr("inputmode", e) : this.node.inputMode = e, this;
    }
    contentEditable() {
      return this.isHeadlessMode ? this.hNode.attr("contenteditable", !0) : this.node.contentEditable = "true", this;
    }
    dir(e) {
      return this.isHeadlessMode ? this.hNode.attr("dir", e) : this.node.dir = e, this;
    }
    draggable() {
      return this.isHeadlessMode ? this.hNode.attr("draggable", !0) : this.node.draggable = !0, this;
    }
    hidden() {
      return this.isHeadlessMode ? this.hNode.attr("hidden", !0) : this.node.hidden = !0, this;
    }
    spellcheck() {
      return this.isHeadlessMode ? this.hNode.attr("spellcheck", !0) : this.node.spellcheck = !0, this;
    }
    title(e) {
      return this.isHeadlessMode ? this.hNode.attr("title", e) : this.node.title = e, this;
    }
    innerText(e) {
      return this.isHeadlessMode ? this.hNode.innerHTML(e) : this.node.innerText = e, this;
    }
    autocapitalize(e) {
      return this.isHeadlessMode ? this.hNode.attr("autocapitalize", e) : this.node.autocapitalize = e, this;
    }
    bounds(e, t) {
      return this.style({ width: e, height: t }), this;
    }
    caret(e) {
      return this.style({ "caret-color": e }), this;
    }
    height(e) {
      return this.style({ height: e }), this;
    }
    textcase(e) {
      return ["uppercase", "lowercase", "none", "capitalize", "inherit"].includes(e) && this.style({ "text-transform": e }), this;
    }
    visibility(e) {
      return this.style({ visibility: e }), this;
    }
    width(e) {
      return this.style({ width: e }), this;
    }
    screenReaderOnly() {
      return this.style({
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px"
      }), this;
    }
    clone() {
      const e = new o(this.tagName, this.tagId);
      return e.isCached = this.isCached, this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
    static parse(e) {
      if (h.mode === "headless")
        throw new Error("Parse is not supported in headless mode");
      const t = document.createElement("template");
      t.innerHTML = e;
      const n = t.content.childNodes;
      if (n.length === 0)
        return null;
      const u = [...n].filter((p) => p.nodeType === 1).map((p) => {
        const w = new o(p.tagName, p.id);
        return Object.entries(p.attributes).forEach((y) => {
          w.attr(y[1].name, y[1].value);
        }), w.node.append(...p.children), w;
      });
      return u.length === 0 ? null : u;
    }
  }
  class h {
    static get mode() {
      return this._mode;
    }
    static set mode(e) {
      this._mode = e;
    }
    static get scriptAsync() {
      return this._defaultScriptAsync;
    }
    static set scriptAsync(e) {
      this._defaultScriptAsync = e;
    }
    static get useOptionContentForEmptyOptionValue() {
      return this._useOptionContentForEmptyOptionValue;
    }
    static set useOptionContentForEmptyOptionValue(e) {
      this._useOptionContentForEmptyOptionValue = e;
    }
    static get defaultInputType() {
      return this._defaultInputType;
    }
    static set defaultInputType(e) {
      this._defaultInputType = e;
    }
    static reset() {
      this._defaultInputType = "text", this._useOptionContentForEmptyOptionValue = !0, this._defaultScriptAsync = !0;
    }
  }
  h._defaultInputType = "text", h._useOptionContentForEmptyOptionValue = !0, h._defaultScriptAsync = !0;
  class b extends o {
    constructor(e, t) {
      super("blockquote", t), this.isHeadlessMode ? this.attr("cite", e) : this.node.cite = e;
    }
  }
  class g extends o {
    constructor(e, t) {
      super("fieldset", t), s.isEmptyOrWhitespace(e) || this.append(new o("legend").innerText(e));
    }
  }
  class H extends o {
    constructor(e, t = "bottom", n) {
      super("figure", n), this.caption = new o("figcaption"), this.captionPlacement = "bottom", s.isEmptyOrWhitespace(e) || this.caption.innerHTML(e), this.captionPlacement = t;
    }
    clone() {
      const e = new H();
      return e.caption = this.caption, e.captionPlacement = this.captionPlacement, e.isCached = this.isCached, this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, this.captionPlacement === "bottom" ? this.append(this.caption) : this.prepend(this.caption), this.node);
    }
    buildHTML() {
      return this.isCached ? this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML : (this.isCached = !0, this.captionPlacement === "bottom" ? this.append(this.caption) : this.prepend(this.caption), this.hNode.build());
    }
  }
  class x extends o {
    constructor(e, t = "_self", n) {
      super("a", n), e = s.requireNonNull(e, "href"), t = s.requireNonNull(t, "target"), this.isHeadlessMode ? (this.attr("href", e), this.attr("target", t)) : (this.node.href = e, this.node.target = t);
    }
    hreflang(e) {
      return this.isHeadlessMode ? this.attr("hreflang", e) : this.node.hreflang = e, this;
    }
    mimeType(e) {
      return this.isHeadlessMode ? this.attr("type", e) : this.node.type = e, this;
    }
    ping(e) {
      return this.isHeadlessMode ? this.attr("ping", e.join(" ")) : this.node.ping = e.join(" "), this;
    }
    rel(e) {
      return this.isHeadlessMode ? this.attr("rel", e) : this.node.rel = e, this;
    }
  }
  class E extends x {
    constructor(e, t, n) {
      super(e, "_self", n), t = s.requireNonNull(t, "filename in DownloadLinkBuilder"), this.isHeadlessMode ? this.attr("download", t) : this.node.download = t;
    }
  }
  class Q extends o {
    constructor(e, t = "default", n) {
      super("area", n), e = s.requireNonNull(e, "coords"), this.isHeadlessMode ? (this.attr("coords", e), s.isDefined(t) && this.attr("shape", t)) : (this.node.coords = e, s.isDefined(t) && (this.node.shape = t));
    }
    href(e, t) {
      return e = s.requireNonNull(e, "href"), t = s.requireNonNull(t, "alt"), this.isHeadlessMode ? (this.attr("href", e), this.attr("alt", t)) : (this.node.href = e, this.node.alt = t), this;
    }
    hreflang(e) {
      return this.attr("hreflang", e), this;
    }
    ping(e) {
      return this.isHeadlessMode ? this.attr("ping", e.join(" ")) : this.node.ping = e.join(" "), this;
    }
    rel(e) {
      return this.isHeadlessMode ? this.attr("rel", e) : this.node.rel = e, this;
    }
    target(e) {
      return this.isHeadlessMode ? this.attr("target", e) : this.node.target = e, this;
    }
  }
  class le extends Q {
    constructor(e, t, n = "default", u) {
      super(t, n, u), e = s.requireNonNull(e, "filename in DownloadAreaBuilder"), this.isHeadlessMode ? this.attr("download", e) : this.node.download = e;
    }
  }
  class he extends o {
    constructor(e, t) {
      super("data", t), this.isHeadlessMode ? this.attr("value", e) : this.node.value = e;
    }
  }
  class ue extends o {
    constructor(e, t) {
      super("span", t), s.isDefined(e) && (e.sort(), e.forEach((n) => {
        n === "bold" ? this.bold() : n === "bolder" ? this.bolder() : n === "lighter" ? this.lighter() : n === "italic" ? this.italic() : n === "underline" ? this.underline() : n === "strikethrough" && this.strikethrough();
      }));
    }
    bold() {
      return this.style({ "font-weight": "bold" }), this;
    }
    bolder() {
      return this.style({ "font-weight": "bolder" }), this;
    }
    italic() {
      return this.style({ "font-style": "italic" }), this;
    }
    lighter() {
      return this.style({ "font-weight": "lighter" }), this;
    }
    underline() {
      return this.style({ "text-decoration": "underline" }), this;
    }
    strikethrough() {
      return this.style({ "text-decoration": "strikethrough" }), this;
    }
    color(e) {
      return this.style({ color: e }), this;
    }
  }
  class L extends o {
    constructor(e, t) {
      super("input", t), this.isHeadlessMode ? (this.attr("spellcheck", !1), this.attr("checked", !1), this.attr("required", !1), this.attr("type", e != null ? e : h.defaultInputType)) : (this.node.spellcheck = !1, this.node.checked = !1, this.node.required = !1, this.node.type = e != null ? e : h.defaultInputType);
    }
    autocomplete(e) {
      return this.isHeadlessMode ? this.attr("autocomplete", e) : this.node.autocomplete = e, this;
    }
    autofocus() {
      return this.isHeadlessMode ? this.attr("autofocus", !0) : this.node.autofocus = !0, this;
    }
    datalist(e) {
      return this.attr("list", s.requireNonNull(e, "id")), this;
    }
    disabled() {
      return this.isHeadlessMode ? this.attr("disabled", !0) : this.node.disabled = !0, this;
    }
    name(e) {
      return this.isHeadlessMode ? this.attr("name", e) : this.node.name = e, this;
    }
    onInvalid(e) {
      return this.isHeadlessMode ? this.attr("oninvalid", `this.setCustomValidity('${e}');`) : this.node.setCustomValidity(e), this;
    }
    placeholder(e) {
      return this.isHeadlessMode ? this.attr("placeholder", e) : this.node.placeholder = e, this;
    }
    readOnly() {
      return this.isHeadlessMode ? this.attr("readonly", !0) : this.node.readOnly = !0, this;
    }
    required() {
      return this.isHeadlessMode ? this.attr("required", !0) : this.node.required = !0, this;
    }
    value(e) {
      return this.isHeadlessMode ? this.attr("value", e) : this.node.value = e, this;
    }
  }
  class P extends L {
    constructor(e, t) {
      super("number", t), s.isDefined(e) && (this.isHeadlessMode ? this.attr("value", e) : this.node.value = e);
    }
    min(e) {
      return this.isHeadlessMode ? this.attr("min", e) : this.node.min = e, this;
    }
    max(e) {
      return this.isHeadlessMode ? this.attr("max", e) : this.node.max = e, this;
    }
    step(e) {
      return this.isHeadlessMode ? this.attr("step", e) : this.node.step = e, this;
    }
  }
  class ce extends P {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "range") : this.node.type = "range";
    }
  }
  class pe extends L {
    constructor(e = !1, t) {
      super("checkbox", t), this.isHeadlessMode || (this.node.indeterminate = e);
    }
    checked() {
      return this.isHeadlessMode ? this.attr("checked", !0) : this.node.checked = !0, this;
    }
  }
  class fe extends L {
    constructor(e, t) {
      super("radio", t), e = s.ofNullable(e, !1), this.isHeadlessMode ? this.attr("checked", e) : this.node.checked = e;
    }
  }
  class I extends P {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "date") : this.node.type = "date";
    }
  }
  class ge extends I {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "datetime-local") : this.node.type = "datetime-local";
    }
  }
  class me extends I {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "month") : this.node.type = "month";
    }
  }
  class be extends I {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "time") : this.node.type = "time";
    }
  }
  class ye extends I {
    constructor(e, t) {
      super(e, t), this.isHeadlessMode ? this.attr("type", "week") : this.node.type = "week";
    }
  }
  class Me extends L {
    constructor(e, t) {
      super("file", t), this.isHeadlessMode ? (this.attr("multiple", !1), this.attr("accept", s.ofNullable(e, ""))) : (this.node.multiple = !1, s.isDefined(e) && (this.node.accept = e));
    }
    capture(e) {
      return this.attr("capture", e), this;
    }
    multiple() {
      return this.isHeadlessMode ? this.attr("multiple", !0) : this.node.multiple = !0, this;
    }
  }
  class He extends L {
    constructor(e, t, n) {
      super("image", n), e = s.requireNonNull(e, "src"), t = s.requireNonNull(t, "alt"), this.isHeadlessMode ? (this.attr("src", e), this.attr("alt", t)) : (this.node.src = e, this.node.alt = t);
    }
    formAction(e) {
      return this.isHeadlessMode ? this.attr("formaction", e) : this.node.formAction = e, this;
    }
    formEnctype(e) {
      return e = s.ofNullable(e, "application/x-www-form-urlencoded"), this.isHeadlessMode ? this.attr("formenctype", e) : this.node.formEnctype = e, this;
    }
    formMethod(e) {
      return this.isHeadlessMode ? this.attr("formmethod", e) : this.node.formMethod = e, this;
    }
  }
  class B extends L {
    constructor(e) {
      super("text", e);
    }
    maxLength(e) {
      return this.isHeadlessMode ? this.attr("maxlength", e) : this.node.maxLength = e, this;
    }
    minLength(e) {
      return this.isHeadlessMode ? this.attr("minlength", e) : this.node.minLength = e, this;
    }
    pattern(e) {
      const t = e instanceof RegExp ? e.source : new RegExp(e).source;
      return this.isHeadlessMode ? this.attr("pattern", t) : this.node.pattern = t, this;
    }
    size(e) {
      return this.isHeadlessMode ? this.attr("size", e) : this.node.size = e, this;
    }
  }
  class we extends B {
    constructor(e) {
      super(e), this.isHeadlessMode ? (this.attr("type", "email"), this.attr("multiple", !1)) : (this.node.type = "email", this.node.multiple = !1);
    }
    multiple() {
      return this.isHeadlessMode ? this.attr("multiple", !0) : this.node.multiple = !0, this;
    }
  }
  class Ne extends B {
    constructor(e) {
      super(e), this.isHeadlessMode ? this.attr("type", "password") : this.node.type = "password";
    }
  }
  class xe extends B {
    constructor(e) {
      super(e), this.isHeadlessMode ? this.attr("type", "search") : this.node.type = "search";
    }
  }
  class Oe extends B {
    constructor(e) {
      super(e), this.isHeadlessMode ? this.attr("type", "tel") : this.node.type = "tel";
    }
  }
  class Te extends B {
    constructor(e) {
      super(e), this.isHeadlessMode ? this.attr("type", "url") : this.node.type = "url";
    }
  }
  class Ce extends o {
    constructor(e, t, n) {
      super("textarea", n), this.isHeadlessMode ? (this.attr("spellcheck", !1), this.attr("required", !1), s.isDefined(e) && this.attr("rows", e), s.isDefined(t) && this.attr("cols", t)) : (this.node.spellcheck = !1, this.node.required = !1, s.isDefined(e) && (this.node.rows = e), s.isDefined(t) && (this.node.cols = t));
    }
    autocomplete(e) {
      return this.isHeadlessMode ? this.attr("autocomplete", e) : this.node.autocomplete = e, this;
    }
    autofocus() {
      return this.isHeadlessMode ? this.attr("autofocus", !0) : this.node.autofocus = !0, this;
    }
    disabled() {
      return this.isHeadlessMode ? this.attr("disabled", !0) : this.node.disabled = !0, this;
    }
    maxLength(e) {
      return this.isHeadlessMode ? this.attr("maxlength", e) : this.node.maxLength = e, this;
    }
    minLength(e) {
      return this.isHeadlessMode ? this.attr("minlength", e) : this.node.minLength = e, this;
    }
    name(e) {
      return this.isHeadlessMode ? this.attr("name", e) : this.node.name = e, this;
    }
    onInvalid(e) {
      return this.isHeadlessMode ? this.attr("oninvalid", `this.setCustomValidity('${e}');`) : this.node.setCustomValidity(e), this;
    }
    placeholder(e) {
      return this.isHeadlessMode ? this.attr("placeholder", e) : this.node.placeholder = e, this;
    }
    readOnly() {
      return this.isHeadlessMode ? this.attr("readonly", !0) : this.node.readOnly = !0, this;
    }
    required() {
      return this.isHeadlessMode ? this.attr("required", !0) : this.node.required = !0, this;
    }
    value(e) {
      return this.isHeadlessMode ? this.attr("value", e) : this.node.value = e, this;
    }
    wrap(e) {
      return this.isHeadlessMode ? this.attr("wrap", e) : this.node.wrap = e, this;
    }
  }
  class Le extends o {
    constructor(e) {
      super("datalist", e), s.requireNonNull(e, "id in DatalistBuilder");
    }
    addOption(e, t, n = []) {
      return s.requireNonNull(e, "content in DatalistBuilder"), this.addOptions(new T(e, t).classes(...n)), this;
    }
    addOptions(...e) {
      return e.forEach((t) => {
        t instanceof T ? this.append(t) : this.append(new T(t));
      }), this;
    }
  }
  class A extends o {
    constructor(e = !1, t = [], n) {
      super("dl", n), this.div = null, e === !0 && (this.div = new o("div").classes(...t));
    }
    addTerm(e, ...t) {
      s.requireNonNull(e, "term in DLBuilder");
      const n = new o("dt").innerHTML(e), u = t.map((p) => p instanceof o ? p.tagName === "DD" ? p : new o("dd").append(p) : new o("dd").innerHTML(p));
      return this.div !== null ? this.append(this.div.clone().append(n, ...u)) : this.append(n, ...u), this;
    }
    clone() {
      const e = new A(!1);
      return e.div = this.div, this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
  }
  class ve extends o {
    constructor(e, t = !1, n) {
      super("details", n), this.isHeadlessMode ? this.attr("open", t) : this.node.open = t, s.isDefined(e) && this.prepend(new o("summary").innerHTML(e));
    }
  }
  class T extends o {
    constructor(e, t, n) {
      super("option", n), this.innerHTML(e), !s.isDefined(t) && h.useOptionContentForEmptyOptionValue ? this.attr("value", e.trim().toLowerCase().replace(/\s+/g, "-")) : this.attr("value", s.ofNullable(t, ""));
    }
  }
  class Be extends o {
    constructor(e, t) {
      super("select", t), this.isHeadlessMode ? (this.attr("spellcheck", !1), this.attr("required", !1)) : (this.node.spellcheck = !1, this.node.required = !1), s.isDefined(e) && this.append(new T(e, "").attr("disabled", ""));
    }
    addOptionGroup(e, ...t) {
      return s.requireNonNull(e, "label in SelectBuilder"), this.append(new o("optgroup").attr("label", e).append(...t)), this;
    }
    addOption(e, t, n) {
      return this.addOptions([new T(e, t).classes(...n)]), this;
    }
    addOptions(e) {
      return e.forEach((t) => {
        t instanceof T ? this.append(t) : this.append(new T(t));
      }), this;
    }
    autocomplete(e) {
      return this.isHeadlessMode ? this.attr("autocomplete", e) : this.node.autocomplete = e, this;
    }
    autofocus() {
      return this.isHeadlessMode ? this.attr("autofocus", !0) : this.node.autofocus = !0, this;
    }
    disabled() {
      return this.isHeadlessMode ? this.attr("disabled", !0) : this.node.disabled = !0, this;
    }
    multiple() {
      return this.isHeadlessMode ? this.attr("multiple", !0) : this.node.multiple = !0, this;
    }
    name(e) {
      return this.isHeadlessMode ? this.attr("name", e) : this.node.name = e, this;
    }
    onInvalid(e) {
      return this.isHeadlessMode ? this.attr("oninvalid", `this.setCustomValidity('${e}');`) : this.node.setCustomValidity(e), this;
    }
    required() {
      return this.isHeadlessMode ? this.attr("required", !0) : this.node.required = !0, this;
    }
    size(e) {
      return this.isHeadlessMode ? this.attr("size", e) : this.node.size = e, this;
    }
  }
  class z extends o {
    constructor(e, t) {
      super("li", t), this.innerHTML(s.ofNullable(e, ""));
    }
  }
  class Ee extends o {
    constructor(e = !1, t = "none", n) {
      super(e ? "ol" : "ul", n), s.isDefined(t) && t.toLowerCase() !== "none" && this.style({ "list-style": t });
    }
    addItem(e) {
      return e instanceof z ? this.append(e) : this.append(new z(e)), this;
    }
    addItems(e) {
      return e.forEach((t) => this.addItem(t)), this;
    }
    addSublist(e) {
      return this.append(new o("li").append(e)), this;
    }
  }
  class W extends o {
    constructor(e, t) {
      super("audio", t), e = s.requireNonNull(e, "src"), this.isHeadlessMode ? (this.attr("src", e), this.attr("controls", !0)) : (this.node.src = e, this.node.controls = !0);
    }
    addFallbackSrc(e, t) {
      return this.append(new G(e, t)), this;
    }
    loop() {
      return this.isHeadlessMode ? this.attr("loop", !0) : this.node.loop = !0, this;
    }
    muted() {
      return this.isHeadlessMode ? this.attr("muted", !0) : this.node.muted = !0, this;
    }
    noControls() {
      return this.isHeadlessMode ? this.attr("controls", !1) : this.node.controls = !1, this;
    }
    onNotSupported(e) {
      return this.fallbackHTML = e, this;
    }
    preload(e) {
      return this.isHeadlessMode ? this.attr("preload", e) : this.node.preload = e, this;
    }
    track(e, t, n = !1, u = "en", p) {
      return this.append(new o("track").attr("kind", t).attr("srclang", u).attr("src", e).attr("label", p).attr("default", n)), this;
    }
    clone() {
      var e, t;
      const n = new W((t = (e = this.node) === null || e === void 0 ? void 0 : e.src, t != null ? t : ""), this.tagId);
      return n.fallbackHTML = this.fallbackHTML, n.isCached = this.isCached, this.isHeadlessMode ? n.hNode = this.hNode.clone() : n.node = this.node.cloneNode(!0), n;
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, s.isDefined(this.fallbackHTML) && this.append(this.fallbackHTML), this.node);
    }
    buildHTML() {
      return this.isCached ? this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML : (this.isCached = !0, s.isDefined(this.fallbackHTML) && this.append(this.fallbackHTML), this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML);
    }
  }
  class Ie extends o {
    constructor(e, t, n) {
      super("embed", n), e = s.requireNonNull(e, "src in EmbedBuilder"), t = s.requireNonNull(t, "type in EmbedBuilder"), this.isHeadlessMode ? (this.attr("src", e), this.attr("type", t)) : (this.node.src = e, this.node.type = t);
    }
  }
  class je extends o {
    constructor(e, t) {
      super("iframe", t), e = s.requireNonNull(e, "src"), this.isHeadlessMode ? this.attr("src", e) : this.node.src = e;
    }
    allow(e) {
      return this.isHeadlessMode ? this.attr("allow", e) : this.node.allow = e, this;
    }
    referrerPolicy(e = "no-referrer-when-downgrade") {
      return e = s.ofNullable(e, "no-referrer-when-downgrade"), this.isHeadlessMode ? this.attr("referrerpolicy", e) : this.node.referrerPolicy = e, this;
    }
    sandbox(e = "") {
      return this.attr("sandbox", e), this;
    }
    srcdoc(e) {
      return this.isHeadlessMode ? this.attr("srcdoc", e) : this.node.srcdoc = e, this;
    }
  }
  class Se extends o {
    constructor(e, t, n) {
      super("img", n), e = s.requireNonNull(e, "src"), t = s.requireNonNull(t, "alt"), this.isHeadlessMode ? (this.attr("src", e), this.attr("alt", t), this.attr("title", t)) : (this.node.src = e, this.node.alt = t, this.node.title = t);
    }
    decoding(e) {
      return this.isHeadlessMode ? this.attr("decoding", e) : this.node.decoding = e, this;
    }
    sizes(e) {
      return this.isHeadlessMode ? this.attr("sizes", e) : this.node.sizes = e, this;
    }
    srcset(e) {
      return this.isHeadlessMode ? this.attr("srcset", e) : this.node.srcset = e, this;
    }
  }
  class R extends o {
    constructor(e, t) {
      super("picture", t), this.img = e;
    }
    source(...e) {
      return this.append(...e), this;
    }
    clone() {
      const e = new R(this.img);
      return e.isCached = this.isCached, e.img = this.img.clone(), this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, this.append(this.img), this.node);
    }
    buildHTML() {
      return this.isCached ? this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML : (this.isCached = !0, this.append(this.img), this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML);
    }
  }
  class G extends o {
    constructor(e, t, n) {
      super("source", n), e = s.requireNonNull(e, "src"), t = s.requireNonNull(t, "type"), this.isHeadlessMode ? (this.attr("src", e), this.attr("type", t)) : (this.node.src = e, this.node.type = t);
    }
    media(e) {
      return this.isHeadlessMode ? this.attr("media", e) : this.node.media = e, this;
    }
    sizes(e) {
      return this.isHeadlessMode ? this.attr("sizes", e) : this.node.sizes = e, this;
    }
    srcset(e) {
      return this.isHeadlessMode ? this.attr("srcset", e) : this.node.srcset = e, this;
    }
  }
  class V extends o {
    constructor(e, t, n) {
      super("video", n), e = s.requireNonNull(e, "src"), this.attr("type", s.requireNonNull(t, "type")), this.isHeadlessMode ? (this.attr("src", e), this.attr("controls", !0)) : (this.node.src = e, this.node.controls = !0);
    }
    addFallbackSrc(e, t) {
      return this.append(new G(e, t)), this;
    }
    loop() {
      return this.isHeadlessMode ? this.attr("loop", !0) : this.node.loop = !0, this;
    }
    muted() {
      return this.isHeadlessMode ? this.attr("muted", !0) : this.node.muted = !0, this;
    }
    noControls() {
      return this.isHeadlessMode ? this.attr("controls", !1) : this.node.controls = !1, this;
    }
    onNotSupported(e) {
      return this.fallbackHTML = e, this;
    }
    poster(e) {
      return e = s.requireNonNull(e, "poster"), this.isHeadlessMode ? this.attr("poster", e) : this.node.poster = e, this;
    }
    preload(e) {
      return this.isHeadlessMode ? this.attr("preload", e) : this.node.preload = e, this;
    }
    track(e, t, n = !1, u = "en", p) {
      return this.append(new o("track").attr("kind", t).attr("srclang", u).attr("src", e).attr("label", p).attr("default", n)), this;
    }
    clone() {
      var e, t, n, u;
      const p = new V((t = (e = this.node) === null || e === void 0 ? void 0 : e.src, t != null ? t : ""), (u = (n = this.node) === null || n === void 0 ? void 0 : n.getAttribute("type"), u != null ? u : ""));
      return p.fallbackHTML = this.fallbackHTML, p.isCached = this.isCached, this.isHeadlessMode ? p.hNode = this.hNode.clone() : p.node = this.node.cloneNode(!0), p;
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, s.isDefined(this.fallbackHTML) && this.append(this.fallbackHTML), this.node);
    }
    buildHTML() {
      return this.isCached ? this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML : (this.isCached = !0, this.append(this.fallbackHTML), this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML);
    }
  }
  class qe extends o {
    constructor(e) {
      super("meter", e);
    }
    min(e) {
      return this.isHeadlessMode ? this.attr("min", e) : this.node.min = e, this;
    }
    max(e) {
      return this.isHeadlessMode ? this.attr("max", e) : this.node.max = e, this;
    }
    minmax(e, t) {
      return this.min(e).max(t);
    }
    low(e) {
      return this.isHeadlessMode ? this.attr("low", e) : this.node.low = e, this;
    }
    high(e) {
      return this.isHeadlessMode ? this.attr("high", e) : this.node.high = e, this;
    }
    lowhigh(e, t) {
      return this.low(e).high(t);
    }
    optimum(e) {
      return this.isHeadlessMode ? this.attr("optimum", e) : this.node.optimum = e, this;
    }
  }
  class ke extends o {
    constructor(e, t) {
      super("progress", t), e = s.requireNonNull(e, "value"), this.isHeadlessMode ? this.attr("value", e) : this.node.value = e;
    }
    max(e) {
      return this.isHeadlessMode ? this.attr("max", e) : this.node.max = e, this;
    }
  }
  class De extends o {
    constructor(e, t = "get", n) {
      super("form", n), t = s.ofNullable(t, "get"), e = s.requireNonNull(e, "actionUrl of FormBuilder"), this.isHeadlessMode ? (this.attr("method", t), this.attr("action", e)) : (this.node.method = t, this.node.action = e);
    }
    acceptCharset(...e) {
      return this.isHeadlessMode ? this.attr("acceptcharset", e.join(" ")) : this.node.acceptCharset = e.join(" "), this;
    }
    enctype(e) {
      return e = s.ofNullable(e, "application/x-www-form-urlencoded"), this.isHeadlessMode ? this.attr("enctype", e) : this.node.enctype = e, this;
    }
    rel(e) {
      return this.attr("rel", e), this;
    }
    target(e) {
      return this.isHeadlessMode ? this.attr("target", e) : this.node.target = e, this;
    }
    noValidate() {
      return this.isHeadlessMode ? this.attr("novalidate", !0) : this.node.noValidate = !0, this;
    }
  }
  class $e extends o {
    constructor(e) {
      super("script", e), this.isHeadlessMode ? this.attr("async", h.scriptAsync) : this.node.async = h.scriptAsync;
    }
    async() {
      return this.isHeadlessMode ? this.attr("async", !0) : this.node.async = !0, this;
    }
    crossOrigin(e) {
      return e = s.ofNullable(e, ""), this.isHeadlessMode ? this.attr("crossorigin", e) : this.node.crossOrigin = e, this;
    }
    defer() {
      return this.isHeadlessMode ? this.attr("defer", !0) : this.node.defer = !0, this;
    }
    integrity(e) {
      return this.isHeadlessMode ? this.attr("integrity", e) : this.node.integrity = e, this;
    }
    noModule() {
      return this.isHeadlessMode ? this.attr("nomodule", !0) : this.node.noModule = !0, this;
    }
    nonce(e) {
      return this.isHeadlessMode ? this.attr("nonce", e) : this.node.nonce = e, this;
    }
    referrerPolicy(e) {
      return e = s.ofNullable(e, ""), this.isHeadlessMode ? this.attr("referrerpolicy", e) : this.node.referrerPolicy = e, this;
    }
    src(e) {
      return this.isHeadlessMode ? this.attr("src", e) : this.node.src = e, this;
    }
    type(e) {
      return this.isHeadlessMode ? this.attr("type", e) : this.node.type = e, this;
    }
  }
  class _e extends o {
    constructor(e) {
      super("colgroup", e);
    }
    addCol(e, ...t) {
      const n = new o("col").classes(...t);
      return s.isDefined(e) && n.attr("span", e), this.append(n), this;
    }
  }
  class F extends o {
    constructor(e, t) {
      super("table", t), this.header = null, this.body = null, this.caption = null, this.colGroupBuilder = null, this.isHeadlessMode ? (this.header = new o("tr"), this.body = new o("tbody")) : (this.header = this.node.createTHead(), this.body = this.node.createTBody()), s.isEmptyOrWhitespace(e) || (this.isHeadlessMode ? this.caption = new o("caption").innerHTML(e) : (this.caption = this.node.createCaption(), this.caption.innerHTML = e));
    }
    addHeader(...e) {
      if (e.length === 0)
        return this;
      const t = e.map((n) => new o("th").innerHTML(n));
      return this.isHeadlessMode ? this.header.append(...t.map((n) => n.buildHTML())) : (this.node.tHead.firstChild === null && this.node.tHead.append(new o("tr").build()), this.node.tHead.firstChild.append(...t.map((n) => n.build()))), this;
    }
    addRow(...e) {
      if (e.length === 0)
        return this;
      const t = e.map((n) => new o("td").innerHTML(n));
      return this.isHeadlessMode ? this.body.append(new o("tr").append(...t)) : this.body.append(new o("tr").append(...t).build()), this;
    }
    colgroup(e) {
      return this.colGroupBuilder = e, this;
    }
    collapse() {
      return this.style({ "border-collapse": "collapse" }), this;
    }
    setHeaders(...e) {
      return this.isHeadlessMode ? this.header = new o("tr") : (this.node.deleteTHead(), this.header = this.node.createTHead()), e.length > 0 && this.addHeader(...e), this;
    }
    setRows(...e) {
      return this.isHeadlessMode ? this.body = new o("tbody") : this.body.innerHTML = "", e.length > 0 && e.forEach((t) => this.addRow(...t)), this;
    }
    clone() {
      var e;
      const t = new F((e = this.node) === null || e === void 0 ? void 0 : e.caption.innerHTML);
      return t.isCached = this.isCached, t.body = this.body, t.header = this.header, t.colGroupBuilder = this.colGroupBuilder, this.isHeadlessMode ? (t.caption = this.caption.clone(), t.hNode = this.hNode.clone(), t) : (t.caption = t.node.createCaption(), t.caption.innerHTML = this.caption.innerHTML, t.node = this.node.cloneNode(!0), t);
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, this.buildSections(), this.node);
    }
    buildHTML() {
      return this.isCached ? this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML : (this.isCached = !0, this.buildSections(), this.isHeadlessMode ? this.hNode.build() : this.node.outerHTML);
    }
    buildSections() {
      this.isHeadlessMode && (this.append(new o("thead").append(this.header)), this.append(this.body)), this.isHeadlessMode && this.caption !== null && (this.colGroupBuilder !== null && this.prepend(this.colGroupBuilder), this.prepend(this.caption)), this.colGroupBuilder !== null && (!this.isHeadlessMode && this.caption !== null ? this.caption.insertAdjacentElement("afterend", this.colGroupBuilder.build()) : this.isHeadlessMode ? this.prepend(this.colGroupBuilder) : this.node.prepend(this.colGroupBuilder.build()));
    }
  }
  class Pe extends o {
    constructor(e, t, n) {
      super("slot", n), s.requireNonNull(t, "content in SlotBuilder"), e = s.requireNonNull(e, "name in SlotBuilder"), this.isHeadlessMode ? this.hNode.attr("name", e) : this.node.name = e, this.append(t);
    }
  }
  class K extends o {
    constructor(e) {
      super("template", e), this.styleBuilder = null, s.requireNonNull(e, "id in Template Builder");
    }
    addStylesToRoot(e) {
      return s.isDefined(e) ? (this.styleBuilder !== null ? this.styleBuilder.append(e) : this.styleBuilder = new o("style").innerText(e), this) : this;
    }
    addSlots(...e) {
      return !s.isDefined(e) || e.length === 0 ? this : (this.append(...e), this);
    }
    clone() {
      const e = new K(this.tagId);
      return e.isCached = this.isCached, this.styleBuilder !== null && (e.styleBuilder = this.styleBuilder.clone()), this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
    buildHTML() {
      return this.isCached ? this.hNode.build() : (this.isCached = !0, this.prepend(this.styleBuilder), this.isHeadlessMode ? this.hNode.build() : this.build().outerHTML);
    }
    build() {
      return this.isCached ? this.node : (this.isCached = !0, this.prepend(this.styleBuilder), this.node);
    }
  }
  class U extends a {
    constructor(e, t, n = "http://www.w3.org/2000/svg") {
      super("svg", t, n), s.isEmptyOrWhitespace(n) && s.requireNonNull(null, "xmlns"), s.isEmptyOrWhitespace(e) || this.attr("viewBox", e);
    }
    bounds(e, t) {
      return this.width(e), this.height(t), this;
    }
    height(e) {
      return this.attr("height", e), this;
    }
    width(e) {
      return this.attr("width", e), this;
    }
    clone() {
      const e = new U();
      return e.isCached = this.isCached, this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
  }
  class Y extends a {
    constructor(e, t = "http://www.w3.org/2000/svg", n) {
      super(e, n, t), s.isEmptyOrWhitespace(t) && s.requireNonNull(null, "xmlns");
    }
    fill(e) {
      return this.attr("fill", e), this;
    }
    stroke(e, t) {
      return this.attr("stroke", e), this.attr("stroke-width", t), this;
    }
    width(e) {
      return this.attr("width", e), this;
    }
    height(e) {
      return this.attr("height", e), this;
    }
    bounds(e, t) {
      return this.width(e), this.height(t), this;
    }
    preserveAspectRatio(e) {
      return this.attr("preserveAspectRatio", e), this;
    }
    x(e) {
      return this.attr("x", e), this;
    }
    y(e) {
      return this.attr("y", e), this;
    }
    viewBox(e) {
      return this.attr("viewBox", e), this;
    }
    clone() {
      const e = new Y(this.tagName);
      return e.isCached = this.isCached, this.isHeadlessMode ? e.hNode = this.hNode.clone() : e.node = this.node.cloneNode(!0), e;
    }
  }
  i.exports && (i.exports = {
    TagBuilder: o,
    TagBuilderOptions: h,
    Objects: s,
    BlockquoteBuilder: b,
    FieldsetBuilder: g,
    FigureBuilder: H,
    AnchorBuilder: x,
    DownloadLinkBuilder: E,
    AreaBuilder: Q,
    DownloadAreaBuilder: le,
    DataBuilder: he,
    SpanBuilder: ue,
    InputBuilder: L,
    NumberInputBuilder: P,
    CheckboxInputBuilder: pe,
    RadioInputBuilder: fe,
    RangeInputBuilder: ce,
    DateInputBuilder: I,
    DateTimeLocalInputBuilder: ge,
    MonthInputBuilder: me,
    TimeInputBuilder: be,
    WeekInputBuilder: ye,
    FileInputBuilder: Me,
    ImageInputBuilder: He,
    TextInputBuilder: B,
    EmailInputBuilder: we,
    PasswordInputBuilder: Ne,
    SearchInputBuilder: xe,
    TelInputBuilder: Oe,
    UrlInputBuilder: Te,
    TextAreaBuilder: Ce,
    DataListBuilder: Le,
    DLBuilder: A,
    DetailsBuilder: ve,
    OptionBuilder: T,
    SelectBuilder: Be,
    ListItemBuilder: z,
    ListBuilder: Ee,
    SourceBuilder: G,
    AudioBuilder: W,
    EmbedBuilder: Ie,
    IframeBuilder: je,
    ImageBuilder: Se,
    PictureBuilder: R,
    VideoBuilder: V,
    MeterBuilder: qe,
    ProgressBuilder: ke,
    FormBuilder: De,
    ScriptBuilder: $e,
    ColGroupBuilder: _e,
    TableBuilder: F,
    SlotBuilder: Pe,
    TemplateBuilder: K,
    SVGBuilder: U,
    SVGElementBuilder: Y
  });
})(N);
class qt {
  constructor({ data: r, config: s, api: d, block: a, readOnly: o }) {
    O(this, "api");
    O(this, "block");
    O(this, "readOnly");
    O(this, "data");
    O(this, "config");
    O(this, "nodes");
    O(this, "monacoEditor");
    O(this, "writeConsole", (r) => {
      let s = new N.exports.TagBuilder("pre").build();
      s.textContent = r, this.nodes.cs.insertBefore(s, this.nodes.input);
    });
    this.data = r, this.config = s, this.api = d, this.block = a, this.readOnly = o, this.nodes = {
      wrapper: null,
      monaco: null,
      cs: null
    };
  }
  render() {
    return this.createBlock(), this.nodes.wrapper;
  }
  save() {
    return this.data.code = this.getCode(), this.data;
  }
  static get toolbox() {
    return {
      title: "tmptool",
      icon: Ve
    };
  }
  rendered() {
    this.renderMonaco();
  }
  createBlock() {
    let r = new N.exports.TagBuilder("div").classes(j["tmptool-tool"]).build(), s = new N.exports.TagBuilder("div").classes(j.header).build(), d = new N.exports.TagBuilder("span").innerText(this.data.title).classes(j["header-title"]).build(), a = new N.exports.TagBuilder("span").innerHTML(
      ` | ${this.data.language}`
    ).build(), o = new N.exports.TagBuilder("button").innerText("run").classes(j["header-runbtn"]).build();
    o.addEventListener("click", () => {
      var x, E;
      ((x = this.config) == null ? void 0 : x.onRun) !== void 0 && ((E = this.nodes.monaco) == null || E.remove(), this.nodes.cs.style.display = "block", this.config.onRun(this.save()), this.config.printOutput(this.writeConsole));
    });
    let h = new N.exports.TagBuilder("div").classes(j["monaco-editor"]).build();
    h.style.height = `${this.data.code.split(`
`).length}em`;
    let b = new N.exports.TagBuilder("div").style({ display: "none" }).build();
    b.style.paddingLeft = "20px";
    let g = new N.exports.InputBuilder("text").build(), H = new N.exports.TagBuilder("button").innerText("send input").build();
    return H.addEventListener("click", () => {
      var x;
      try {
        (x = this.config) == null || x.onInput(g.value), this.writeConsole(`> ${g.value}`);
      } catch {
      }
    }), b.appendChild(g), b.appendChild(H), s.appendChild(d), s.appendChild(a), s.appendChild(o), r.appendChild(s), r.appendChild(h), r.appendChild(b), this.nodes.wrapper = r, this.nodes.monaco = h, this.nodes.cs = b, this.nodes.input = g, this.nodes;
  }
  async renderMonaco() {
    let r = await jt.init();
    this.monacoEditor = r.editor.create(this.nodes.monaco, {
      value: this.data ? this.data.code : `function hello() {
	alert('Hello world!');
}`,
      language: this.data.language,
      scrollBeyondLastLine: !1,
      wordWrap: "off",
      wrappingStrategy: "advanced",
      minimap: {
        enabled: !1
      },
      overviewRulerLanes: 0
    }), this.getCode = () => this.monacoEditor.getValue();
  }
}
export {
  qt as tmptool
};
