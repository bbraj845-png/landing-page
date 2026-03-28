const Em = () => Promise.resolve().then(() => Cm), { Fragment: tn, jsx: h, jsxs: m } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function Ta(t) {
  const e = t?.props?._fgT, i = typeof e == "function" || typeof e == "string" || typeof e == "object" && e !== null && "$$typeof" in e;
  return globalThis.__GLOBALS__.React.isValidElement(t) && i;
}
function me(t) {
  return globalThis.__GLOBALS__.React.isValidElement(t) && t.type === "fg-txt";
}
function Ma(t) {
  const { _fgT: e, _fgS: i, _fgB: n, _fgD: s, ...r } = t.props;
  return globalThis.__GLOBALS__.React.createElement(e, {
    ...r,
    key: t.key
  }, r.children);
}
function Ie(t) {
  return Ta(t) ? Ma(t) : me(t) ? t.props.children : t;
}
const he = globalThis.__GLOBALS__.React.Children, Aa = {
  map(t, e, i) {
    return he.map(t, (n, s) => {
      const r = Ie(n);
      return me(n) ? null : e.call(i, r, s);
    });
  },
  forEach(t, e, i) {
    he.forEach(t, (n, s) => {
      if (me(n))
        return;
      const r = Ie(n);
      e.call(i, r, s);
    });
  },
  count(t) {
    let e = 0;
    return he.forEach(t, (i) => {
      me(i) || e++;
    }), e;
  },
  toArray(t) {
    const e = [];
    return he.forEach(t, (i) => {
      me(i) || e.push(Ie(i));
    }), e;
  },
  only(t) {
    const e = he.only(t);
    return Ie(e);
  }
}, ci = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function Lo(t) {
  if (t == null || typeof t != "object") return t;
  const e = Object.keys(t);
  let i = !1;
  for (let s = 0; s < ci.length; s++)
    if (ci[s] in t) {
      i = !0;
      break;
    }
  if (!i) return t;
  const n = {};
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    ci.indexOf(r) === -1 && (n[r] = t[r]);
  }
  return n;
}
const Kn = globalThis.__GLOBALS__.React.cloneElement, Da = (t, ...e) => {
  if (Ta(t)) {
    const i = Ma(t), n = e[0];
    return n != null && typeof n == "object" && (e = [
      Lo(n),
      ...e.slice(1)
    ]), Kn(i, ...e);
  }
  return Kn(t, ...e);
}, x = {
  ...globalThis.__GLOBALS__.React,
  Children: Aa,
  cloneElement: Da
}, { Component: Ca, createContext: Ot, createElement: Ze, createFactory: km, createRef: Pm, forwardRef: en, Fragment: Sa, isValidElement: Io, lazy: Hm, memo: Rm, Profiler: Vm, PureComponent: jm, startTransition: Lm, StrictMode: Im, Suspense: Fm, use: Bm, useCallback: nn, useContext: K, useDebugValue: Om, useDeferredValue: _m, useEffect: _t, useId: sn, useImperativeHandle: zm, useInsertionEffect: Ea, useLayoutEffect: Fo, useMemo: Bt, useReducer: Ym, useRef: Dt, useState: I, useSyncExternalStore: Um, useTransition: Wm, version: Gm, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Xm } = globalThis.__GLOBALS__.React, Bo = globalThis.__GLOBALS__.ReactDOM, { createPortal: Zm, findDOMNode: $m, flushSync: qm, hydrate: Jm, render: Km, unmountComponentAtNode: Qm, unstable_batchedUpdates: tp, unstable_renderSubtreeIntoContainer: ep, version: ip } = globalThis.__GLOBALS__.ReactDOM;
function Oo(t) {
  if (typeof document > "u") return;
  let e = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
  i.type = "text/css", e.appendChild(i), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t));
}
const _o = (t) => {
  switch (t) {
    case "success":
      return Uo;
    case "info":
      return Go;
    case "warning":
      return Wo;
    case "error":
      return Xo;
    default:
      return null;
  }
}, zo = Array(12).fill(0), Yo = ({ visible: t, className: e }) => /* @__PURE__ */ x.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    e
  ].filter(Boolean).join(" "),
  "data-visible": t
}, /* @__PURE__ */ x.createElement("div", {
  className: "sonner-spinner"
}, zo.map((i, n) => /* @__PURE__ */ x.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${n}`
})))), Uo = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), Wo = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), Go = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), Xo = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ x.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), Zo = /* @__PURE__ */ x.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ x.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ x.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), $o = () => {
  const [t, e] = x.useState(document.hidden);
  return x.useEffect(() => {
    const i = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", i), () => window.removeEventListener("visibilitychange", i);
  }, []), t;
};
let Di = 1;
class qo {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      const i = this.subscribers.indexOf(e);
      this.subscribers.splice(i, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((i) => i(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [
        ...this.toasts,
        e
      ];
    }, this.create = (e) => {
      var i;
      const { message: n, ...s } = e, r = typeof e?.id == "number" || ((i = e.id) == null ? void 0 : i.length) > 0 ? e.id : Di++, a = this.toasts.find((l) => l.id === r), o = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), a ? this.toasts = this.toasts.map((l) => l.id === r ? (this.publish({
        ...l,
        ...e,
        id: r,
        title: n
      }), {
        ...l,
        ...e,
        id: r,
        dismissible: o,
        title: n
      }) : l) : this.addToast({
        title: n,
        ...s,
        dismissible: o,
        id: r
      }), r;
    }, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((i) => i({
      id: e,
      dismiss: !0
    })))) : this.toasts.forEach((i) => {
      this.subscribers.forEach((n) => n({
        id: i.id,
        dismiss: !0
      }));
    }), e), this.message = (e, i) => this.create({
      ...i,
      message: e
    }), this.error = (e, i) => this.create({
      ...i,
      message: e,
      type: "error"
    }), this.success = (e, i) => this.create({
      ...i,
      type: "success",
      message: e
    }), this.info = (e, i) => this.create({
      ...i,
      type: "info",
      message: e
    }), this.warning = (e, i) => this.create({
      ...i,
      type: "warning",
      message: e
    }), this.loading = (e, i) => this.create({
      ...i,
      type: "loading",
      message: e
    }), this.promise = (e, i) => {
      if (!i)
        return;
      let n;
      i.loading !== void 0 && (n = this.create({
        ...i,
        promise: e,
        type: "loading",
        message: i.loading,
        description: typeof i.description != "function" ? i.description : void 0
      }));
      const s = Promise.resolve(e instanceof Function ? e() : e);
      let r = n !== void 0, a;
      const o = s.then(async (c) => {
        if (a = [
          "resolve",
          c
        ], x.isValidElement(c))
          r = !1, this.create({
            id: n,
            type: "default",
            message: c
          });
        else if (Ko(c) && !c.ok) {
          r = !1;
          const d = typeof i.error == "function" ? await i.error(`HTTP error! status: ${c.status}`) : i.error, f = typeof i.description == "function" ? await i.description(`HTTP error! status: ${c.status}`) : i.description, g = typeof d == "object" && !x.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "error",
            description: f,
            ...g
          });
        } else if (c instanceof Error) {
          r = !1;
          const d = typeof i.error == "function" ? await i.error(c) : i.error, f = typeof i.description == "function" ? await i.description(c) : i.description, g = typeof d == "object" && !x.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "error",
            description: f,
            ...g
          });
        } else if (i.success !== void 0) {
          r = !1;
          const d = typeof i.success == "function" ? await i.success(c) : i.success, f = typeof i.description == "function" ? await i.description(c) : i.description, g = typeof d == "object" && !x.isValidElement(d) ? d : {
            message: d
          };
          this.create({
            id: n,
            type: "success",
            description: f,
            ...g
          });
        }
      }).catch(async (c) => {
        if (a = [
          "reject",
          c
        ], i.error !== void 0) {
          r = !1;
          const u = typeof i.error == "function" ? await i.error(c) : i.error, d = typeof i.description == "function" ? await i.description(c) : i.description, p = typeof u == "object" && !x.isValidElement(u) ? u : {
            message: u
          };
          this.create({
            id: n,
            type: "error",
            description: d,
            ...p
          });
        }
      }).finally(() => {
        r && (this.dismiss(n), n = void 0), i.finally == null || i.finally.call(i);
      }), l = () => new Promise((c, u) => o.then(() => a[0] === "reject" ? u(a[1]) : c(a[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? {
        unwrap: l
      } : Object.assign(n, {
        unwrap: l
      });
    }, this.custom = (e, i) => {
      const n = i?.id || Di++;
      return this.create({
        jsx: e(n),
        id: n,
        ...i
      }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const it = new qo(), Jo = (t, e) => {
  const i = e?.id || Di++;
  return it.addToast({
    title: t,
    ...e,
    id: i
  }), i;
}, Ko = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", Qo = Jo, tl = () => it.toasts, el = () => it.getActiveToasts(), il = Object.assign(Qo, {
  success: it.success,
  info: it.info,
  warning: it.warning,
  error: it.error,
  custom: it.custom,
  message: it.message,
  promise: it.promise,
  dismiss: it.dismiss,
  loading: it.loading
}, {
  getHistory: tl,
  getToasts: el
});
Oo("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Fe(t) {
  return t.label !== void 0;
}
const nl = 3, sl = "24px", al = "16px", Qn = 4e3, rl = 356, ol = 14, ll = 45, cl = 200;
function yt(...t) {
  return t.filter(Boolean).join(" ");
}
function dl(t) {
  const [e, i] = t.split("-"), n = [];
  return e && n.push(e), i && n.push(i), n;
}
const ul = (t) => {
  var e, i, n, s, r, a, o, l, c;
  const { invert: u, toast: d, unstyled: f, interacting: p, setHeights: g, visibleToasts: v, heights: y, index: b, toasts: N, expanded: w, removeToast: C, defaultRichColors: T, closeButton: D, style: k, cancelButtonStyle: M, actionButtonStyle: B, className: W = "", descriptionClassName: Z = "", duration: vt, position: kt, gap: zt, expandByDefault: st, classNames: H, icons: R, closeButtonAriaLabel: O = "Close toast" } = t, [X, ot] = x.useState(null), [V, _] = x.useState(null), [j, lt] = x.useState(!1), [Pt, z] = x.useState(!1), [le, Yt] = x.useState(!1), [ce, de] = x.useState(!1), [To, zn] = x.useState(!1), [Mo, ri] = x.useState(0), [Ao, Yn] = x.useState(0), ue = x.useRef(d.duration || vt || Qn), Un = x.useRef(null), wt = x.useRef(null), Do = b === 0, Co = b + 1 <= v, at = d.type, Ut = d.dismissible !== !1, So = d.className || "", Eo = d.descriptionClassName || "", Ve = x.useMemo(() => y.findIndex((E) => E.toastId === d.id) || 0, [
    y,
    d.id
  ]), ko = x.useMemo(() => {
    var E;
    return (E = d.closeButton) != null ? E : D;
  }, [
    d.closeButton,
    D
  ]), Wn = x.useMemo(() => d.duration || vt || Qn, [
    d.duration,
    vt
  ]), oi = x.useRef(0), Wt = x.useRef(0), Gn = x.useRef(0), Gt = x.useRef(null), [Po, Ho] = kt.split("-"), Xn = x.useMemo(() => y.reduce((E, $, Q) => Q >= Ve ? E : E + $.height, 0), [
    y,
    Ve
  ]), Zn = $o(), Ro = d.invert || u, li = at === "loading";
  Wt.current = x.useMemo(() => Ve * zt + Xn, [
    Ve,
    Xn
  ]), x.useEffect(() => {
    ue.current = Wn;
  }, [
    Wn
  ]), x.useEffect(() => {
    lt(!0);
  }, []), x.useEffect(() => {
    const E = wt.current;
    if (E) {
      const $ = E.getBoundingClientRect().height;
      return Yn($), g((Q) => [
        {
          toastId: d.id,
          height: $,
          position: d.position
        },
        ...Q
      ]), () => g((Q) => Q.filter((rt) => rt.toastId !== d.id));
    }
  }, [
    g,
    d.id
  ]), x.useLayoutEffect(() => {
    if (!j) return;
    const E = wt.current, $ = E.style.height;
    E.style.height = "auto";
    const Q = E.getBoundingClientRect().height;
    E.style.height = $, Yn(Q), g((rt) => rt.find((q) => q.toastId === d.id) ? rt.map((q) => q.toastId === d.id ? {
      ...q,
      height: Q
    } : q) : [
      {
        toastId: d.id,
        height: Q,
        position: d.position
      },
      ...rt
    ]);
  }, [
    j,
    d.title,
    d.description,
    g,
    d.id
  ]);
  const Mt = x.useCallback(() => {
    z(!0), ri(Wt.current), g((E) => E.filter(($) => $.toastId !== d.id)), setTimeout(() => {
      C(d);
    }, cl);
  }, [
    d,
    C,
    g,
    Wt
  ]);
  x.useEffect(() => {
    if (d.promise && at === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let E;
    return w || p || Zn ? (() => {
      if (Gn.current < oi.current) {
        const rt = (/* @__PURE__ */ new Date()).getTime() - oi.current;
        ue.current = ue.current - rt;
      }
      Gn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      ue.current !== 1 / 0 && (oi.current = (/* @__PURE__ */ new Date()).getTime(), E = setTimeout(() => {
        d.onAutoClose == null || d.onAutoClose.call(d, d), Mt();
      }, ue.current));
    })(), () => clearTimeout(E);
  }, [
    w,
    p,
    d,
    at,
    Zn,
    Mt
  ]), x.useEffect(() => {
    d.delete && Mt();
  }, [
    Mt,
    d.delete
  ]);
  function Vo() {
    var E;
    if (R?.loading) {
      var $;
      return /* @__PURE__ */ x.createElement("div", {
        className: yt(H?.loader, d == null || ($ = d.classNames) == null ? void 0 : $.loader, "sonner-loader"),
        "data-visible": at === "loading"
      }, R.loading);
    }
    return /* @__PURE__ */ x.createElement(Yo, {
      className: yt(H?.loader, d == null || (E = d.classNames) == null ? void 0 : E.loader),
      visible: at === "loading"
    });
  }
  const jo = d.icon || R?.[at] || _o(at);
  var $n, qn;
  return /* @__PURE__ */ x.createElement("li", {
    tabIndex: 0,
    ref: wt,
    className: yt(W, So, H?.toast, d == null || (e = d.classNames) == null ? void 0 : e.toast, H?.default, H?.[at], d == null || (i = d.classNames) == null ? void 0 : i[at]),
    "data-sonner-toast": "",
    "data-rich-colors": ($n = d.richColors) != null ? $n : T,
    "data-styled": !(d.jsx || d.unstyled || f),
    "data-mounted": j,
    "data-promise": !!d.promise,
    "data-swiped": To,
    "data-removed": Pt,
    "data-visible": Co,
    "data-y-position": Po,
    "data-x-position": Ho,
    "data-index": b,
    "data-front": Do,
    "data-swiping": le,
    "data-dismissible": Ut,
    "data-type": at,
    "data-invert": Ro,
    "data-swipe-out": ce,
    "data-swipe-direction": V,
    "data-expanded": !!(w || st && j),
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": N.length - b,
      "--offset": `${Pt ? Mo : Wt.current}px`,
      "--initial-height": st ? "auto" : `${Ao}px`,
      ...k,
      ...d.style
    },
    onDragEnd: () => {
      Yt(!1), ot(null), Gt.current = null;
    },
    onPointerDown: (E) => {
      li || !Ut || (Un.current = /* @__PURE__ */ new Date(), ri(Wt.current), E.target.setPointerCapture(E.pointerId), E.target.tagName !== "BUTTON" && (Yt(!0), Gt.current = {
        x: E.clientX,
        y: E.clientY
      }));
    },
    onPointerUp: () => {
      var E, $, Q;
      if (ce || !Ut) return;
      Gt.current = null;
      const rt = Number(((E = wt.current) == null ? void 0 : E.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), je = Number((($ = wt.current) == null ? void 0 : $.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), q = (/* @__PURE__ */ new Date()).getTime() - ((Q = Un.current) == null ? void 0 : Q.getTime()), ct = X === "x" ? rt : je, Le = Math.abs(ct) / q;
      if (Math.abs(ct) >= ll || Le > 0.11) {
        ri(Wt.current), d.onDismiss == null || d.onDismiss.call(d, d), _(X === "x" ? rt > 0 ? "right" : "left" : je > 0 ? "down" : "up"), Mt(), de(!0);
        return;
      } else {
        var mt, pt;
        (mt = wt.current) == null || mt.style.setProperty("--swipe-amount-x", "0px"), (pt = wt.current) == null || pt.style.setProperty("--swipe-amount-y", "0px");
      }
      zn(!1), Yt(!1), ot(null);
    },
    onPointerMove: (E) => {
      var $, Q, rt;
      if (!Gt.current || !Ut || (($ = window.getSelection()) == null ? void 0 : $.toString().length) > 0) return;
      const q = E.clientY - Gt.current.y, ct = E.clientX - Gt.current.x;
      var Le;
      const mt = (Le = t.swipeDirections) != null ? Le : dl(kt);
      !X && (Math.abs(ct) > 1 || Math.abs(q) > 1) && ot(Math.abs(ct) > Math.abs(q) ? "x" : "y");
      let pt = {
        x: 0,
        y: 0
      };
      const Jn = (Ht) => 1 / (1.5 + Math.abs(Ht) / 20);
      if (X === "y") {
        if (mt.includes("top") || mt.includes("bottom"))
          if (mt.includes("top") && q < 0 || mt.includes("bottom") && q > 0)
            pt.y = q;
          else {
            const Ht = q * Jn(q);
            pt.y = Math.abs(Ht) < Math.abs(q) ? Ht : q;
          }
      } else if (X === "x" && (mt.includes("left") || mt.includes("right")))
        if (mt.includes("left") && ct < 0 || mt.includes("right") && ct > 0)
          pt.x = ct;
        else {
          const Ht = ct * Jn(ct);
          pt.x = Math.abs(Ht) < Math.abs(ct) ? Ht : ct;
        }
      (Math.abs(pt.x) > 0 || Math.abs(pt.y) > 0) && zn(!0), (Q = wt.current) == null || Q.style.setProperty("--swipe-amount-x", `${pt.x}px`), (rt = wt.current) == null || rt.style.setProperty("--swipe-amount-y", `${pt.y}px`);
    }
  }, ko && !d.jsx && at !== "loading" ? /* @__PURE__ */ x.createElement("button", {
    "aria-label": O,
    "data-disabled": li,
    "data-close-button": !0,
    onClick: li || !Ut ? () => {
    } : () => {
      Mt(), d.onDismiss == null || d.onDismiss.call(d, d);
    },
    className: yt(H?.closeButton, d == null || (n = d.classNames) == null ? void 0 : n.closeButton)
  }, (qn = R?.close) != null ? qn : Zo) : null, (at || d.icon || d.promise) && d.icon !== null && (R?.[at] !== null || d.icon) ? /* @__PURE__ */ x.createElement("div", {
    "data-icon": "",
    className: yt(H?.icon, d == null || (s = d.classNames) == null ? void 0 : s.icon)
  }, d.promise || d.type === "loading" && !d.icon ? d.icon || Vo() : null, d.type !== "loading" ? jo : null) : null, /* @__PURE__ */ x.createElement("div", {
    "data-content": "",
    className: yt(H?.content, d == null || (r = d.classNames) == null ? void 0 : r.content)
  }, /* @__PURE__ */ x.createElement("div", {
    "data-title": "",
    className: yt(H?.title, d == null || (a = d.classNames) == null ? void 0 : a.title)
  }, d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title), d.description ? /* @__PURE__ */ x.createElement("div", {
    "data-description": "",
    className: yt(Z, Eo, H?.description, d == null || (o = d.classNames) == null ? void 0 : o.description)
  }, typeof d.description == "function" ? d.description() : d.description) : null), /* @__PURE__ */ x.isValidElement(d.cancel) ? d.cancel : d.cancel && Fe(d.cancel) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: d.cancelButtonStyle || M,
    onClick: (E) => {
      Fe(d.cancel) && Ut && (d.cancel.onClick == null || d.cancel.onClick.call(d.cancel, E), Mt());
    },
    className: yt(H?.cancelButton, d == null || (l = d.classNames) == null ? void 0 : l.cancelButton)
  }, d.cancel.label) : null, /* @__PURE__ */ x.isValidElement(d.action) ? d.action : d.action && Fe(d.action) ? /* @__PURE__ */ x.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: d.actionButtonStyle || B,
    onClick: (E) => {
      Fe(d.action) && (d.action.onClick == null || d.action.onClick.call(d.action, E), !E.defaultPrevented && Mt());
    },
    className: yt(H?.actionButton, d == null || (c = d.classNames) == null ? void 0 : c.actionButton)
  }, d.action.label) : null);
};
function ts() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
function hl(t, e) {
  const i = {};
  return [
    t,
    e
  ].forEach((n, s) => {
    const r = s === 1, a = r ? "--mobile-offset" : "--offset", o = r ? al : sl;
    function l(c) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((u) => {
        i[`${a}-${u}`] = typeof c == "number" ? `${c}px` : c;
      });
    }
    typeof n == "number" || typeof n == "string" ? l(n) : typeof n == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((c) => {
      n[c] === void 0 ? i[`${a}-${c}`] = o : i[`${a}-${c}`] = typeof n[c] == "number" ? `${n[c]}px` : n[c];
    }) : l(o);
  }), i;
}
const fl = /* @__PURE__ */ x.forwardRef(function(e, i) {
  const { invert: n, position: s = "bottom-right", hotkey: r = [
    "altKey",
    "KeyT"
  ], expand: a, closeButton: o, className: l, offset: c, mobileOffset: u, theme: d = "light", richColors: f, duration: p, style: g, visibleToasts: v = nl, toastOptions: y, dir: b = ts(), gap: N = ol, icons: w, containerAriaLabel: C = "Notifications" } = e, [T, D] = x.useState([]), k = x.useMemo(() => Array.from(new Set([
    s
  ].concat(T.filter((V) => V.position).map((V) => V.position)))), [
    T,
    s
  ]), [M, B] = x.useState([]), [W, Z] = x.useState(!1), [vt, kt] = x.useState(!1), [zt, st] = x.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), H = x.useRef(null), R = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), O = x.useRef(null), X = x.useRef(!1), ot = x.useCallback((V) => {
    D((_) => {
      var j;
      return (j = _.find((lt) => lt.id === V.id)) != null && j.delete || it.dismiss(V.id), _.filter(({ id: lt }) => lt !== V.id);
    });
  }, []);
  return x.useEffect(() => it.subscribe((V) => {
    if (V.dismiss) {
      requestAnimationFrame(() => {
        D((_) => _.map((j) => j.id === V.id ? {
          ...j,
          delete: !0
        } : j));
      });
      return;
    }
    setTimeout(() => {
      Bo.flushSync(() => {
        D((_) => {
          const j = _.findIndex((lt) => lt.id === V.id);
          return j !== -1 ? [
            ..._.slice(0, j),
            {
              ..._[j],
              ...V
            },
            ..._.slice(j + 1)
          ] : [
            V,
            ..._
          ];
        });
      });
    });
  }), [
    T
  ]), x.useEffect(() => {
    if (d !== "system") {
      st(d);
      return;
    }
    if (d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? st("dark") : st("light")), typeof window > "u") return;
    const V = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      V.addEventListener("change", ({ matches: _ }) => {
        st(_ ? "dark" : "light");
      });
    } catch {
      V.addListener(({ matches: j }) => {
        try {
          st(j ? "dark" : "light");
        } catch (lt) {
          console.error(lt);
        }
      });
    }
  }, [
    d
  ]), x.useEffect(() => {
    T.length <= 1 && Z(!1);
  }, [
    T
  ]), x.useEffect(() => {
    const V = (_) => {
      var j;
      if (r.every((z) => _[z] || _.code === z)) {
        var Pt;
        Z(!0), (Pt = H.current) == null || Pt.focus();
      }
      _.code === "Escape" && (document.activeElement === H.current || (j = H.current) != null && j.contains(document.activeElement)) && Z(!1);
    };
    return document.addEventListener("keydown", V), () => document.removeEventListener("keydown", V);
  }, [
    r
  ]), x.useEffect(() => {
    if (H.current)
      return () => {
        O.current && (O.current.focus({
          preventScroll: !0
        }), O.current = null, X.current = !1);
      };
  }, [
    H.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ x.createElement("section", {
    ref: i,
    "aria-label": `${C} ${R}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, k.map((V, _) => {
    var j;
    const [lt, Pt] = V.split("-");
    return T.length ? /* @__PURE__ */ x.createElement("ol", {
      key: V,
      dir: b === "auto" ? ts() : b,
      tabIndex: -1,
      ref: H,
      className: l,
      "data-sonner-toaster": !0,
      "data-sonner-theme": zt,
      "data-y-position": lt,
      "data-lifted": W && T.length > 1 && !a,
      "data-x-position": Pt,
      style: {
        "--front-toast-height": `${((j = M[0]) == null ? void 0 : j.height) || 0}px`,
        "--width": `${rl}px`,
        "--gap": `${N}px`,
        ...g,
        ...hl(c, u)
      },
      onBlur: (z) => {
        X.current && !z.currentTarget.contains(z.relatedTarget) && (X.current = !1, O.current && (O.current.focus({
          preventScroll: !0
        }), O.current = null));
      },
      onFocus: (z) => {
        z.target instanceof HTMLElement && z.target.dataset.dismissible === "false" || X.current || (X.current = !0, O.current = z.relatedTarget);
      },
      onMouseEnter: () => Z(!0),
      onMouseMove: () => Z(!0),
      onMouseLeave: () => {
        vt || Z(!1);
      },
      onDragEnd: () => Z(!1),
      onPointerDown: (z) => {
        z.target instanceof HTMLElement && z.target.dataset.dismissible === "false" || kt(!0);
      },
      onPointerUp: () => kt(!1)
    }, T.filter((z) => !z.position && _ === 0 || z.position === V).map((z, le) => {
      var Yt, ce;
      return /* @__PURE__ */ x.createElement(ul, {
        key: z.id,
        icons: w,
        index: le,
        toast: z,
        defaultRichColors: f,
        duration: (Yt = y?.duration) != null ? Yt : p,
        className: y?.className,
        descriptionClassName: y?.descriptionClassName,
        invert: n,
        visibleToasts: v,
        closeButton: (ce = y?.closeButton) != null ? ce : o,
        interacting: vt,
        position: V,
        style: y?.style,
        unstyled: y?.unstyled,
        classNames: y?.classNames,
        cancelButtonStyle: y?.cancelButtonStyle,
        actionButtonStyle: y?.actionButtonStyle,
        closeButtonAriaLabel: y?.closeButtonAriaLabel,
        removeToast: ot,
        toasts: T.filter((de) => de.position == z.position),
        heights: M.filter((de) => de.position == z.position),
        setHeights: B,
        expandByDefault: a,
        gap: N,
        expanded: W,
        swipeDirections: e.swipeDirections
      });
    })) : null;
  }));
}), Se = "naina_restaurant_cart", ka = "naina_restaurant_orders", se = () => {
  if (typeof window > "u") return [];
  const t = localStorage.getItem(Se);
  return t ? JSON.parse(t) : [];
}, ml = (t) => {
  const e = se(), i = e.findIndex((n) => n.menuItemId === t.menuItemId);
  return i >= 0 ? e[i].quantity += t.quantity : e.push(t), localStorage.setItem(Se, JSON.stringify(e)), e;
}, pl = (t, e) => {
  const i = se(), n = i.findIndex((s) => s.menuItemId === t);
  return n >= 0 && (e <= 0 ? i.splice(n, 1) : i[n].quantity = e), localStorage.setItem(Se, JSON.stringify(i)), i;
}, gl = (t) => {
  let e = se();
  return e = e.filter((i) => i.menuItemId !== t), localStorage.setItem(Se, JSON.stringify(e)), e;
}, Pa = () => {
  localStorage.removeItem(Se);
}, pe = () => {
  const t = se(), e = t.reduce((n, s) => n + s.price * s.quantity, 0), i = t.reduce((n, s) => n + s.quantity, 0);
  return { subtotal: e, itemCount: i };
}, yl = (t, e) => {
  const i = e === "Delivery" ? 50 : 0, n = t + i;
  return { deliveryCharge: i, totalAmount: n };
}, xl = (t, e) => {
  const i = se(), { subtotal: n } = pe(), { deliveryCharge: s, totalAmount: r } = yl(n, t), a = {
    orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    items: i,
    subtotal: n,
    deliveryCharge: s,
    totalAmount: r,
    orderType: t,
    customerDetails: e,
    orderStatus: "Pending",
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    estimatedDeliveryTime: t === "Delivery" ? new Date(Date.now() + 45 * 6e4).toISOString() : new Date(Date.now() + 30 * 6e4).toISOString()
    // 30 minutes
  }, o = bl();
  return o.unshift(a), localStorage.setItem(ka, JSON.stringify(o)), Pa(), a;
}, bl = () => {
  if (typeof window > "u") return [];
  const t = localStorage.getItem(ka);
  return t ? JSON.parse(t) : [];
}, Ha = Ot(void 0);
function vl({ children: t }) {
  const [e, i] = I([]), [n, s] = I({ subtotal: 0, itemCount: 0 }), r = () => {
    const u = se(), d = pe();
    i(u), s(d);
  };
  _t(() => {
    r();
  }, []);
  const a = (u) => {
    const d = ml(u);
    i(d), s(pe());
  }, o = (u, d) => {
    const f = pl(u, d);
    i(f), s(pe());
  }, l = (u) => {
    const d = gl(u);
    i(d), s(pe());
  }, c = () => {
    Pa(), i([]), s({ subtotal: 0, itemCount: 0 });
  };
  return /* @__PURE__ */ h(
    Ha.Provider,
    {
      value: {
        cart: e,
        cartTotal: n,
        addToCart: a,
        updateQuantity: o,
        removeItem: l,
        clearCart: c,
        refreshCart: r
      },
      children: t
    }
  );
}
function ti() {
  const t = K(Ha);
  if (!t)
    throw new Error("useCart must be used within CartProvider");
  return t;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nl = (t) => t.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, i, n) => n ? n.toUpperCase() : i.toLowerCase()
), es = (t) => {
  const e = Nl(t);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, Ra = (...t) => t.filter((e, i, n) => !!e && e.trim() !== "" && n.indexOf(e) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = en(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: r,
    iconNode: a,
    ...o
  }, l) => Ze(
    "svg",
    {
      ref: l,
      ...Tl,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: n ? Number(i) * 24 / Number(e) : i,
      className: Ra("lucide", s),
      ...o
    },
    [
      ...a.map(([c, u]) => Ze(c, u)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P = (t, e) => {
  const i = en(
    ({ className: n, ...s }, r) => Ze(Ml, {
      ref: r,
      iconNode: e,
      className: Ra(
        `lucide-${wl(es(t))}`,
        `lucide-${t}`,
        n
      ),
      ...s
    })
  );
  return i.displayName = es(t), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Dl = P("arrow-right", Al);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], is = P("award", Cl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h.01", key: "1bh4kh" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M17 4h.01", key: "1upcoc" }]
], ns = P("cake", Sl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Va = P("calendar", El);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = [
  [
    "path",
    {
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      key: "1qvrer"
    }
  ],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
], ja = P("chef-hat", kl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Hl = P("chevron-left", Pl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Vl = P("chevron-right", Rl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], Ll = P("circle-check-big", jl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], te = P("clock", Il);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = [
  [
    "path",
    {
      d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
      key: "1ozxlb"
    }
  ],
  [
    "path",
    {
      d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
      key: "ffuyb5"
    }
  ],
  ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" }],
  [
    "path",
    {
      d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
      key: "1vubaw"
    }
  ],
  ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" }]
], ss = P("croissant", Fl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = [
  [
    "path",
    { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23", key: "1dtqwm" }
  ],
  [
    "path",
    {
      d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",
      key: "1oq1fw"
    }
  ]
], as = P("drumstick", Bl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
], _l = P("facebook", Ol);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
], di = P("flame", zl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
], rs = P("heart", Yl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
], Wl = P("house", Ul);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
], Xl = P("instagram", Gl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
], os = P("leaf", Zl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], an = P("mail", $l);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], rn = P("map-pin", ql);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
], Kl = P("menu", Jl);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = [["path", { d: "M5 12h14", key: "1ays0h" }]], tc = P("minus", Ql);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], La = P("package", ec);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], ei = P("phone", ic);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Ia = P("plus", nc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
], ac = P("quote", sc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
], Fa = P("shopping-bag", rc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], lc = P("shopping-cart", oc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], dc = P("star", cc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], hc = P("trash-2", uc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], Ba = P("user", fc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Ci = P("users", mc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]
], gc = P("utensils", pc);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ee = P("x", yc);
function xc({ language: t, onLanguageToggle: e }) {
  const [i, n] = I(!1), [s, r] = I(!1);
  _t(() => {
    const l = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", l), () => window.removeEventListener("scroll", l);
  }, []);
  const a = {
    en: ["Home", "Menu", "About Us", "Gallery", "Reservations", "Contact"],
    hi: ["होम", "मेनू", "हमारे बारे में", "गैलरी", "आरक्षण", "संपर्क"]
  }, o = (l) => {
    const c = ["hero", "menu", "about", "gallery", "reservations", "contact"], u = document.getElementById(c[l]);
    u && (u.scrollIntoView({ behavior: "smooth", block: "start" }), r(!1));
  };
  return /* @__PURE__ */ m(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${i ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ h("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ m("div", { className: "flex items-center justify-between h-20", children: [
          /* @__PURE__ */ m("div", { className: "flex items-center gap-3 cursor-pointer", onClick: () => o(0), children: [
            /* @__PURE__ */ h("div", { className: "bg-[#2D4A3E] p-2 rounded-lg", children: /* @__PURE__ */ h(ja, { className: "w-6 h-6 text-[#F8F4E8]" }) }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ h("h1", { className: "text-2xl font-bold text-[#2D4A3E] tracking-tight", style: { fontFamily: "'Playfair Display', serif" }, children: "Naina Restaurant" }),
              /* @__PURE__ */ h("p", { className: "text-xs text-[#6B5D52] -mt-1", children: t === "en" ? "Taste of Home" : "घर का स्वाद" })
            ] })
          ] }),
          /* @__PURE__ */ m("div", { className: "hidden md:flex items-center gap-8", children: [
            a[t].map((l, c) => /* @__PURE__ */ m(
              "button",
              {
                onClick: () => o(c),
                className: "text-[#2D2824] hover:text-[#D4705C] transition-colors duration-200 relative group",
                children: [
                  l,
                  /* @__PURE__ */ h("span", { className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4705C] group-hover:w-full transition-all duration-300" })
                ]
              },
              l
            )),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: e,
                className: "px-4 py-2 bg-[#F4A261] text-white rounded-lg hover:bg-[#D4705C] transition-colors duration-200",
                children: t === "en" ? "हिं" : "EN"
              }
            )
          ] }),
          /* @__PURE__ */ h(
            "button",
            {
              className: "md:hidden p-2 text-[#2D4A3E]",
              onClick: () => r(!s),
              children: s ? /* @__PURE__ */ h(ee, { className: "w-6 h-6" }) : /* @__PURE__ */ h(Kl, { className: "w-6 h-6" })
            }
          )
        ] }) }),
        s && /* @__PURE__ */ h("div", { className: "md:hidden bg-white border-t border-[#E8DCC8]", children: /* @__PURE__ */ m("div", { className: "px-4 py-4 space-y-3", children: [
          a[t].map((l, c) => /* @__PURE__ */ h(
            "button",
            {
              onClick: () => o(c),
              className: "block w-full text-left px-4 py-2 text-[#2D2824] hover:bg-[#F8F4E8] rounded-lg transition-colors",
              children: l
            },
            l
          )),
          /* @__PURE__ */ h(
            "button",
            {
              onClick: e,
              className: "w-full px-4 py-2 bg-[#F4A261] text-white rounded-lg hover:bg-[#D4705C] transition-colors",
              children: t === "en" ? "Switch to Hindi" : "Switch to English"
            }
          )
        ] }) })
      ]
    }
  );
}
const on = Ot({});
function ln(t) {
  const e = Dt(null);
  return e.current === null && (e.current = t()), e.current;
}
const cn = typeof window < "u", Oa = cn ? Fo : _t, ii = /* @__PURE__ */ Ot(null);
function dn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function un(t, e) {
  const i = t.indexOf(e);
  i > -1 && t.splice(i, 1);
}
const Nt = (t, e, i) => i > e ? e : i < t ? t : i;
let hn = () => {
};
const Tt = {}, _a = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function za(t) {
  return typeof t == "object" && t !== null;
}
const Ya = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function fn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const ft = /* @__NO_SIDE_EFFECTS__ */ (t) => t, bc = (t, e) => (i) => e(t(i)), Ee = (...t) => t.reduce(bc), Ne = /* @__NO_SIDE_EFFECTS__ */ (t, e, i) => {
  const n = e - t;
  return n === 0 ? 1 : (i - t) / n;
};
class mn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return dn(this.subscriptions, e), () => un(this.subscriptions, e);
  }
  notify(e, i, n) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](e, i, n);
      else
        for (let r = 0; r < s; r++) {
          const a = this.subscriptions[r];
          a && a(e, i, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const xt = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, ht = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Ua(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Wa = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t, vc = 1e-7, wc = 12;
function Nc(t, e, i, n, s) {
  let r, a, o = 0;
  do
    a = e + (i - e) / 2, r = Wa(a, n, s) - t, r > 0 ? i = a : e = a;
  while (Math.abs(r) > vc && ++o < wc);
  return a;
}
function ke(t, e, i, n) {
  if (t === e && i === n)
    return ft;
  const s = (r) => Nc(r, 0, 1, t, i);
  return (r) => r === 0 || r === 1 ? r : Wa(s(r), e, n);
}
const Ga = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Xa = (t) => (e) => 1 - t(1 - e), Za = /* @__PURE__ */ ke(0.33, 1.53, 0.69, 0.99), pn = /* @__PURE__ */ Xa(Za), $a = /* @__PURE__ */ Ga(pn), qa = (t) => (t *= 2) < 1 ? 0.5 * pn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), gn = (t) => 1 - Math.sin(Math.acos(t)), Ja = Xa(gn), Ka = Ga(gn), Tc = /* @__PURE__ */ ke(0.42, 0, 1, 1), Mc = /* @__PURE__ */ ke(0, 0, 0.58, 1), Qa = /* @__PURE__ */ ke(0.42, 0, 0.58, 1), Ac = (t) => Array.isArray(t) && typeof t[0] != "number", tr = (t) => Array.isArray(t) && typeof t[0] == "number", Dc = {
  linear: ft,
  easeIn: Tc,
  easeInOut: Qa,
  easeOut: Mc,
  circIn: gn,
  circInOut: Ka,
  circOut: Ja,
  backIn: pn,
  backInOut: $a,
  backOut: Za,
  anticipate: qa
}, Cc = (t) => typeof t == "string", ls = (t) => {
  if (tr(t)) {
    hn(t.length === 4);
    const [e, i, n, s] = t;
    return ke(e, i, n, s);
  } else if (Cc(t))
    return Dc[t];
  return t;
}, Be = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Sc(t, e) {
  let i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const a = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    a.has(u) && (c.schedule(u), t()), u(o);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, d = !1, f = !1) => {
      const g = f && s ? i : n;
      return d && a.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), a.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, s) {
        r = !0;
        return;
      }
      s = !0, [i, n] = [n, i], i.forEach(l), i.clear(), s = !1, r && (r = !1, c.process(u));
    }
  };
  return c;
}
const Ec = 40;
function er(t, e) {
  let i = !1, n = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, r = () => i = !0, a = Be.reduce((w, C) => (w[C] = Sc(r), w), {}), { setup: o, read: l, resolveKeyframes: c, preUpdate: u, update: d, preRender: f, render: p, postRender: g } = a, v = () => {
    const w = Tt.useManualTiming ? s.timestamp : performance.now();
    i = !1, Tt.useManualTiming || (s.delta = n ? 1e3 / 60 : Math.max(Math.min(w - s.timestamp, Ec), 1)), s.timestamp = w, s.isProcessing = !0, o.process(s), l.process(s), c.process(s), u.process(s), d.process(s), f.process(s), p.process(s), g.process(s), s.isProcessing = !1, i && e && (n = !1, t(v));
  }, y = () => {
    i = !0, n = !0, s.isProcessing || t(v);
  };
  return { schedule: Be.reduce((w, C) => {
    const T = a[C];
    return w[C] = (D, k = !1, M = !1) => (i || y(), T.schedule(D, k, M)), w;
  }, {}), cancel: (w) => {
    for (let C = 0; C < Be.length; C++)
      a[Be[C]].cancel(w);
  }, state: s, steps: a };
}
const { schedule: L, cancel: Ct, state: J, steps: ui } = /* @__PURE__ */ er(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ft, !0);
let Ye;
function kc() {
  Ye = void 0;
}
const nt = {
  now: () => (Ye === void 0 && nt.set(J.isProcessing || Tt.useManualTiming ? J.timestamp : performance.now()), Ye),
  set: (t) => {
    Ye = t, queueMicrotask(kc);
  }
}, ir = (t) => (e) => typeof e == "string" && e.startsWith(t), yn = /* @__PURE__ */ ir("--"), Pc = /* @__PURE__ */ ir("var(--"), xn = (t) => Pc(t) ? Hc.test(t.split("/*")[0].trim()) : !1, Hc = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ae = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Te = {
  ...ae,
  transform: (t) => Nt(0, 1, t)
}, Oe = {
  ...ae,
  default: 1
}, ye = (t) => Math.round(t * 1e5) / 1e5, bn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Rc(t) {
  return t == null;
}
const Vc = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vn = (t, e) => (i) => !!(typeof i == "string" && Vc.test(i) && i.startsWith(t) || e && !Rc(i) && Object.prototype.hasOwnProperty.call(i, e)), nr = (t, e, i) => (n) => {
  if (typeof n != "string")
    return n;
  const [s, r, a, o] = n.match(bn);
  return {
    [t]: parseFloat(s),
    [e]: parseFloat(r),
    [i]: parseFloat(a),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, jc = (t) => Nt(0, 255, t), hi = {
  ...ae,
  transform: (t) => Math.round(jc(t))
}, jt = {
  test: /* @__PURE__ */ vn("rgb", "red"),
  parse: /* @__PURE__ */ nr("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) => "rgba(" + hi.transform(t) + ", " + hi.transform(e) + ", " + hi.transform(i) + ", " + ye(Te.transform(n)) + ")"
};
function Lc(t) {
  let e = "", i = "", n = "", s = "";
  return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, n += n, s += s), {
    red: parseInt(e, 16),
    green: parseInt(i, 16),
    blue: parseInt(n, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Si = {
  test: /* @__PURE__ */ vn("#"),
  parse: Lc,
  transform: jt.transform
}, Pe = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), At = /* @__PURE__ */ Pe("deg"), bt = /* @__PURE__ */ Pe("%"), A = /* @__PURE__ */ Pe("px"), Ic = /* @__PURE__ */ Pe("vh"), Fc = /* @__PURE__ */ Pe("vw"), cs = {
  ...bt,
  parse: (t) => bt.parse(t) / 100,
  transform: (t) => bt.transform(t * 100)
}, Xt = {
  test: /* @__PURE__ */ vn("hsl", "hue"),
  parse: /* @__PURE__ */ nr("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) => "hsla(" + Math.round(t) + ", " + bt.transform(ye(e)) + ", " + bt.transform(ye(i)) + ", " + ye(Te.transform(n)) + ")"
}, G = {
  test: (t) => jt.test(t) || Si.test(t) || Xt.test(t),
  parse: (t) => jt.test(t) ? jt.parse(t) : Xt.test(t) ? Xt.parse(t) : Si.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? jt.transform(t) : Xt.transform(t),
  getAnimatableNone: (t) => {
    const e = G.parse(t);
    return e.alpha = 0, G.transform(e);
  }
}, Bc = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Oc(t) {
  return isNaN(t) && typeof t == "string" && (t.match(bn)?.length || 0) + (t.match(Bc)?.length || 0) > 0;
}
const sr = "number", ar = "color", _c = "var", zc = "var(", ds = "${}", Yc = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Me(t) {
  const e = t.toString(), i = [], n = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let r = 0;
  const o = e.replace(Yc, (l) => (G.test(l) ? (n.color.push(r), s.push(ar), i.push(G.parse(l))) : l.startsWith(zc) ? (n.var.push(r), s.push(_c), i.push(l)) : (n.number.push(r), s.push(sr), i.push(parseFloat(l))), ++r, ds)).split(ds);
  return { values: i, split: o, indexes: n, types: s };
}
function rr(t) {
  return Me(t).values;
}
function or(t) {
  const { split: e, types: i } = Me(t), n = e.length;
  return (s) => {
    let r = "";
    for (let a = 0; a < n; a++)
      if (r += e[a], s[a] !== void 0) {
        const o = i[a];
        o === sr ? r += ye(s[a]) : o === ar ? r += G.transform(s[a]) : r += s[a];
      }
    return r;
  };
}
const Uc = (t) => typeof t == "number" ? 0 : G.test(t) ? G.getAnimatableNone(t) : t;
function Wc(t) {
  const e = rr(t);
  return or(t)(e.map(Uc));
}
const St = {
  test: Oc,
  parse: rr,
  createTransformer: or,
  getAnimatableNone: Wc
};
function fi(t, e, i) {
  return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (e - t) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
}
function Gc({ hue: t, saturation: e, lightness: i, alpha: n }) {
  t /= 360, e /= 100, i /= 100;
  let s = 0, r = 0, a = 0;
  if (!e)
    s = r = a = i;
  else {
    const o = i < 0.5 ? i * (1 + e) : i + e - i * e, l = 2 * i - o;
    s = fi(l, o, t + 1 / 3), r = fi(l, o, t), a = fi(l, o, t - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(r * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
function $e(t, e) {
  return (i) => i > 0 ? e : t;
}
const F = (t, e, i) => t + (e - t) * i, mi = (t, e, i) => {
  const n = t * t, s = i * (e * e - n) + n;
  return s < 0 ? 0 : Math.sqrt(s);
}, Xc = [Si, jt, Xt], Zc = (t) => Xc.find((e) => e.test(t));
function us(t) {
  const e = Zc(t);
  if (!e)
    return !1;
  let i = e.parse(t);
  return e === Xt && (i = Gc(i)), i;
}
const hs = (t, e) => {
  const i = us(t), n = us(e);
  if (!i || !n)
    return $e(t, e);
  const s = { ...i };
  return (r) => (s.red = mi(i.red, n.red, r), s.green = mi(i.green, n.green, r), s.blue = mi(i.blue, n.blue, r), s.alpha = F(i.alpha, n.alpha, r), jt.transform(s));
}, Ei = /* @__PURE__ */ new Set(["none", "hidden"]);
function $c(t, e) {
  return Ei.has(t) ? (i) => i <= 0 ? t : e : (i) => i >= 1 ? e : t;
}
function qc(t, e) {
  return (i) => F(t, e, i);
}
function wn(t) {
  return typeof t == "number" ? qc : typeof t == "string" ? xn(t) ? $e : G.test(t) ? hs : Qc : Array.isArray(t) ? lr : typeof t == "object" ? G.test(t) ? hs : Jc : $e;
}
function lr(t, e) {
  const i = [...t], n = i.length, s = t.map((r, a) => wn(r)(r, e[a]));
  return (r) => {
    for (let a = 0; a < n; a++)
      i[a] = s[a](r);
    return i;
  };
}
function Jc(t, e) {
  const i = { ...t, ...e }, n = {};
  for (const s in i)
    t[s] !== void 0 && e[s] !== void 0 && (n[s] = wn(t[s])(t[s], e[s]));
  return (s) => {
    for (const r in n)
      i[r] = n[r](s);
    return i;
  };
}
function Kc(t, e) {
  const i = [], n = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < e.values.length; s++) {
    const r = e.types[s], a = t.indexes[r][n[r]], o = t.values[a] ?? 0;
    i[s] = o, n[r]++;
  }
  return i;
}
const Qc = (t, e) => {
  const i = St.createTransformer(e), n = Me(t), s = Me(e);
  return n.indexes.var.length === s.indexes.var.length && n.indexes.color.length === s.indexes.color.length && n.indexes.number.length >= s.indexes.number.length ? Ei.has(t) && !s.values.length || Ei.has(e) && !n.values.length ? $c(t, e) : Ee(lr(Kc(n, s), s.values), i) : $e(t, e);
};
function cr(t, e, i) {
  return typeof t == "number" && typeof e == "number" && typeof i == "number" ? F(t, e, i) : wn(t)(t, e);
}
const td = (t) => {
  const e = ({ timestamp: i }) => t(i);
  return {
    start: (i = !0) => L.update(e, i),
    stop: () => Ct(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => J.isProcessing ? J.timestamp : nt.now()
  };
}, dr = (t, e, i = 10) => {
  let n = "";
  const s = Math.max(Math.round(e / i), 2);
  for (let r = 0; r < s; r++)
    n += Math.round(t(r / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${n.substring(0, n.length - 2)})`;
}, qe = 2e4;
function Nn(t) {
  let e = 0;
  const i = 50;
  let n = t.next(e);
  for (; !n.done && e < qe; )
    e += i, n = t.next(e);
  return e >= qe ? 1 / 0 : e;
}
function ed(t, e = 100, i) {
  const n = i({ ...t, keyframes: [0, e] }), s = Math.min(Nn(n), qe);
  return {
    type: "keyframes",
    ease: (r) => n.next(s * r).value / e,
    duration: /* @__PURE__ */ ht(s)
  };
}
const id = 5;
function ur(t, e, i) {
  const n = Math.max(e - id, 0);
  return Ua(i - t(n), e - n);
}
const Y = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, pi = 1e-3;
function nd({ duration: t = Y.duration, bounce: e = Y.bounce, velocity: i = Y.velocity, mass: n = Y.mass }) {
  let s, r, a = 1 - e;
  a = Nt(Y.minDamping, Y.maxDamping, a), t = Nt(Y.minDuration, Y.maxDuration, /* @__PURE__ */ ht(t)), a < 1 ? (s = (c) => {
    const u = c * a, d = u * t, f = u - i, p = ki(c, a), g = Math.exp(-d);
    return pi - f / p * g;
  }, r = (c) => {
    const d = c * a * t, f = d * i + i, p = Math.pow(a, 2) * Math.pow(c, 2) * t, g = Math.exp(-d), v = ki(Math.pow(c, 2), a);
    return (-s(c) + pi > 0 ? -1 : 1) * ((f - p) * g) / v;
  }) : (s = (c) => {
    const u = Math.exp(-c * t), d = (c - i) * t + 1;
    return -pi + u * d;
  }, r = (c) => {
    const u = Math.exp(-c * t), d = (i - c) * (t * t);
    return u * d;
  });
  const o = 5 / t, l = ad(s, r, o);
  if (t = /* @__PURE__ */ xt(t), isNaN(l))
    return {
      stiffness: Y.stiffness,
      damping: Y.damping,
      duration: t
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: a * 2 * Math.sqrt(n * c),
      duration: t
    };
  }
}
const sd = 12;
function ad(t, e, i) {
  let n = i;
  for (let s = 1; s < sd; s++)
    n = n - t(n) / e(n);
  return n;
}
function ki(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const rd = ["duration", "bounce"], od = ["stiffness", "damping", "mass"];
function fs(t, e) {
  return e.some((i) => t[i] !== void 0);
}
function ld(t) {
  let e = {
    velocity: Y.velocity,
    stiffness: Y.stiffness,
    damping: Y.damping,
    mass: Y.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!fs(t, od) && fs(t, rd))
    if (t.visualDuration) {
      const i = t.visualDuration, n = 2 * Math.PI / (i * 1.2), s = n * n, r = 2 * Nt(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
      e = {
        ...e,
        mass: Y.mass,
        stiffness: s,
        damping: r
      };
    } else {
      const i = nd(t);
      e = {
        ...e,
        ...i,
        mass: Y.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Je(t = Y.visualDuration, e = Y.bounce) {
  const i = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: n, restDelta: s } = i;
  const r = i.keyframes[0], a = i.keyframes[i.keyframes.length - 1], o = { done: !1, value: r }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = ld({
    ...i,
    velocity: -/* @__PURE__ */ ht(i.velocity || 0)
  }), g = f || 0, v = c / (2 * Math.sqrt(l * u)), y = a - r, b = /* @__PURE__ */ ht(Math.sqrt(l / u)), N = Math.abs(y) < 5;
  n || (n = N ? Y.restSpeed.granular : Y.restSpeed.default), s || (s = N ? Y.restDelta.granular : Y.restDelta.default);
  let w;
  if (v < 1) {
    const T = ki(b, v);
    w = (D) => {
      const k = Math.exp(-v * b * D);
      return a - k * ((g + v * b * y) / T * Math.sin(T * D) + y * Math.cos(T * D));
    };
  } else if (v === 1)
    w = (T) => a - Math.exp(-b * T) * (y + (g + b * y) * T);
  else {
    const T = b * Math.sqrt(v * v - 1);
    w = (D) => {
      const k = Math.exp(-v * b * D), M = Math.min(T * D, 300);
      return a - k * ((g + v * b * y) * Math.sinh(M) + T * y * Math.cosh(M)) / T;
    };
  }
  const C = {
    calculatedDuration: p && d || null,
    next: (T) => {
      const D = w(T);
      if (p)
        o.done = T >= d;
      else {
        let k = T === 0 ? g : 0;
        v < 1 && (k = T === 0 ? /* @__PURE__ */ xt(g) : ur(w, T, D));
        const M = Math.abs(k) <= n, B = Math.abs(a - D) <= s;
        o.done = M && B;
      }
      return o.value = o.done ? a : D, o;
    },
    toString: () => {
      const T = Math.min(Nn(C), qe), D = dr((k) => C.next(T * k).value, T, 30);
      return T + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return C;
}
Je.applyToOptions = (t) => {
  const e = ed(t, 100, Je);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ xt(e.duration), t.type = "keyframes", t;
};
function Pi({ keyframes: t, velocity: e = 0, power: i = 0.8, timeConstant: n = 325, bounceDamping: s = 10, bounceStiffness: r = 500, modifyTarget: a, min: o, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = t[0], f = {
    done: !1,
    value: d
  }, p = (M) => o !== void 0 && M < o || l !== void 0 && M > l, g = (M) => o === void 0 ? l : l === void 0 || Math.abs(o - M) < Math.abs(l - M) ? o : l;
  let v = i * e;
  const y = d + v, b = a === void 0 ? y : a(y);
  b !== y && (v = b - d);
  const N = (M) => -v * Math.exp(-M / n), w = (M) => b + N(M), C = (M) => {
    const B = N(M), W = w(M);
    f.done = Math.abs(B) <= c, f.value = f.done ? b : W;
  };
  let T, D;
  const k = (M) => {
    p(f.value) && (T = M, D = Je({
      keyframes: [f.value, g(f.value)],
      velocity: ur(w, M, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: r,
      restDelta: c,
      restSpeed: u
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (M) => {
      let B = !1;
      return !D && T === void 0 && (B = !0, C(M), k(M)), T !== void 0 && M >= T ? D.next(M - T) : (!B && C(M), f);
    }
  };
}
function cd(t, e, i) {
  const n = [], s = i || Tt.mix || cr, r = t.length - 1;
  for (let a = 0; a < r; a++) {
    let o = s(t[a], t[a + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[a] || ft : e;
      o = Ee(l, o);
    }
    n.push(o);
  }
  return n;
}
function dd(t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
  const r = t.length;
  if (hn(r === e.length), r === 1)
    return () => e[0];
  if (r === 2 && e[0] === e[1])
    return () => e[1];
  const a = t[0] === t[1];
  t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const o = cd(e, n, s), l = o.length, c = (u) => {
    if (a && u < t[0])
      return e[0];
    let d = 0;
    if (l > 1)
      for (; d < t.length - 2 && !(u < t[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ Ne(t[d], t[d + 1], u);
    return o[d](f);
  };
  return i ? (u) => c(Nt(t[0], t[r - 1], u)) : c;
}
function ud(t, e) {
  const i = t[t.length - 1];
  for (let n = 1; n <= e; n++) {
    const s = /* @__PURE__ */ Ne(0, e, n);
    t.push(F(i, 1, s));
  }
}
function hd(t) {
  const e = [0];
  return ud(e, t.length - 1), e;
}
function fd(t, e) {
  return t.map((i) => i * e);
}
function md(t, e) {
  return t.map(() => e || Qa).splice(0, t.length - 1);
}
function xe({ duration: t = 300, keyframes: e, times: i, ease: n = "easeInOut" }) {
  const s = Ac(n) ? n.map(ls) : ls(n), r = {
    done: !1,
    value: e[0]
  }, a = fd(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    i && i.length === e.length ? i : hd(e),
    t
  ), o = dd(a, e, {
    ease: Array.isArray(s) ? s : md(e, s)
  });
  return {
    calculatedDuration: t,
    next: (l) => (r.value = o(l), r.done = l >= t, r)
  };
}
const pd = (t) => t !== null;
function Tn(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
  const r = t.filter(pd), o = s < 0 || e && i !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !o || n === void 0 ? r[o] : n;
}
const gd = {
  decay: Pi,
  inertia: Pi,
  tween: xe,
  keyframes: xe,
  spring: Je
};
function hr(t) {
  typeof t.type == "string" && (t.type = gd[t.type]);
}
class Mn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, i) {
    return this.finished.then(e, i);
  }
}
const yd = (t) => t / 100;
class An extends Mn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: i } = this.options;
      i && i.updatedAt !== nt.now() && this.tick(nt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    hr(e);
    const { type: i = xe, repeat: n = 0, repeatDelay: s = 0, repeatType: r, velocity: a = 0 } = e;
    let { keyframes: o } = e;
    const l = i || xe;
    l !== xe && typeof o[0] != "number" && (this.mixKeyframes = Ee(yd, cr(o[0], o[1])), o = [0, 100]);
    const c = l({ ...e, keyframes: o });
    r === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...o].reverse(),
      velocity: -a
    })), c.calculatedDuration === null && (c.calculatedDuration = Nn(c));
    const { calculatedDuration: u } = c;
    this.calculatedDuration = u, this.resolvedDuration = u + s, this.totalDuration = this.resolvedDuration * (n + 1) - s, this.generator = c;
  }
  updateTime(e) {
    const i = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i;
  }
  tick(e, i = !1) {
    const { generator: n, totalDuration: s, mixKeyframes: r, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: l } = this;
    if (this.startTime === null)
      return n.next(0);
    const { delay: c = 0, keyframes: u, repeat: d, repeatType: f, repeatDelay: p, type: g, onUpdate: v, finalKeyframe: y } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), i ? this.currentTime = e : this.updateTime(e);
    const b = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), N = this.playbackSpeed >= 0 ? b < 0 : b > s;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let w = this.currentTime, C = n;
    if (d) {
      const M = Math.min(this.currentTime, s) / o;
      let B = Math.floor(M), W = M % 1;
      !W && M >= 1 && (W = 1), W === 1 && B--, B = Math.min(B, d + 1), !!(B % 2) && (f === "reverse" ? (W = 1 - W, p && (W -= p / o)) : f === "mirror" && (C = a)), w = Nt(0, 1, W) * o;
    }
    const T = N ? { done: !1, value: u[0] } : C.next(w);
    r && (T.value = r(T.value));
    let { done: D } = T;
    !N && l !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return k && g !== Pi && (T.value = Tn(u, this.options, y, this.speed)), v && v(T.value), k && this.finish(), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, i) {
    return this.finished.then(e, i);
  }
  get duration() {
    return /* @__PURE__ */ ht(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ht(e);
  }
  get time() {
    return /* @__PURE__ */ ht(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ xt(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(nt.now());
    const i = this.playbackSpeed !== e;
    this.playbackSpeed = e, i && (this.time = /* @__PURE__ */ ht(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = td, startTime: i } = this.options;
    this.driver || (this.driver = e((s) => this.tick(s))), this.options.onPlay?.();
    const n = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime !== null ? this.startTime = n - this.holdTime : this.startTime || (this.startTime = i ?? n), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(nt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function xd(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const Lt = (t) => t * 180 / Math.PI, Hi = (t) => {
  const e = Lt(Math.atan2(t[1], t[0]));
  return Ri(e);
}, bd = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: Hi,
  rotateZ: Hi,
  skewX: (t) => Lt(Math.atan(t[1])),
  skewY: (t) => Lt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Ri = (t) => (t = t % 360, t < 0 && (t += 360), t), ms = Hi, ps = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), gs = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), vd = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ps,
  scaleY: gs,
  scale: (t) => (ps(t) + gs(t)) / 2,
  rotateX: (t) => Ri(Lt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Ri(Lt(Math.atan2(-t[2], t[0]))),
  rotateZ: ms,
  rotate: ms,
  skewX: (t) => Lt(Math.atan(t[4])),
  skewY: (t) => Lt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Vi(t) {
  return t.includes("scale") ? 1 : 0;
}
function ji(t, e) {
  if (!t || t === "none")
    return Vi(e);
  const i = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let n, s;
  if (i)
    n = vd, s = i;
  else {
    const o = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    n = bd, s = o;
  }
  if (!s)
    return Vi(e);
  const r = n[e], a = s[1].split(",").map(Nd);
  return typeof r == "function" ? r(a) : a[r];
}
const wd = (t, e) => {
  const { transform: i = "none" } = getComputedStyle(t);
  return ji(i, e);
};
function Nd(t) {
  return parseFloat(t.trim());
}
const re = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], oe = new Set(re), ys = (t) => t === ae || t === A, Td = /* @__PURE__ */ new Set(["x", "y", "z"]), Md = re.filter((t) => !Td.has(t));
function Ad(t) {
  const e = [];
  return Md.forEach((i) => {
    const n = t.getValue(i);
    n !== void 0 && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
  }), e;
}
const It = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(i),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(i),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => ji(e, "x"),
  y: (t, { transform: e }) => ji(e, "y")
};
It.translateX = It.x;
It.translateY = It.y;
const Ft = /* @__PURE__ */ new Set();
let Li = !1, Ii = !1, Fi = !1;
function fr() {
  if (Ii) {
    const t = Array.from(Ft).filter((n) => n.needsMeasurement), e = new Set(t.map((n) => n.element)), i = /* @__PURE__ */ new Map();
    e.forEach((n) => {
      const s = Ad(n);
      s.length && (i.set(n, s), n.render());
    }), t.forEach((n) => n.measureInitialState()), e.forEach((n) => {
      n.render();
      const s = i.get(n);
      s && s.forEach(([r, a]) => {
        n.getValue(r)?.set(a);
      });
    }), t.forEach((n) => n.measureEndState()), t.forEach((n) => {
      n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
    });
  }
  Ii = !1, Li = !1, Ft.forEach((t) => t.complete(Fi)), Ft.clear();
}
function mr() {
  Ft.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Ii = !0);
  });
}
function Dd() {
  Fi = !0, mr(), fr(), Fi = !1;
}
class Dn {
  constructor(e, i, n, s, r, a = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = i, this.name = n, this.motionValue = s, this.element = r, this.isAsync = a;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Ft.add(this), Li || (Li = !0, L.read(mr), L.resolveKeyframes(fr))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: i, element: n, motionValue: s } = this;
    if (e[0] === null) {
      const r = s?.get(), a = e[e.length - 1];
      if (r !== void 0)
        e[0] = r;
      else if (n && i) {
        const o = n.readValue(i, a);
        o != null && (e[0] = o);
      }
      e[0] === void 0 && (e[0] = a), s && r === void 0 && s.set(e[0]);
    }
    xd(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Ft.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ft.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Cd = (t) => t.startsWith("--");
function Sd(t, e, i) {
  Cd(e) ? t.style.setProperty(e, i) : t.style[e] = i;
}
const Ed = /* @__PURE__ */ fn(() => window.ScrollTimeline !== void 0), kd = {};
function Pd(t, e) {
  const i = /* @__PURE__ */ fn(t);
  return () => kd[e] ?? i();
}
const pr = /* @__PURE__ */ Pd(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ge = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`, xs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ge([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ge([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ge([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ge([0.33, 1.53, 0.69, 0.99])
};
function gr(t, e) {
  if (t)
    return typeof t == "function" ? pr() ? dr(t, e) : "ease-out" : tr(t) ? ge(t) : Array.isArray(t) ? t.map((i) => gr(i, e) || xs.easeOut) : xs[t];
}
function Hd(t, e, i, { delay: n = 0, duration: s = 300, repeat: r = 0, repeatType: a = "loop", ease: o = "easeOut", times: l } = {}, c = void 0) {
  const u = {
    [e]: i
  };
  l && (u.offset = l);
  const d = gr(o, s);
  Array.isArray(d) && (u.easing = d);
  const f = {
    delay: n,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: r + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  };
  return c && (f.pseudoElement = c), t.animate(u, f);
}
function yr(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function Rd({ type: t, ...e }) {
  return yr(t) && pr() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Vd extends Mn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: i, name: n, keyframes: s, pseudoElement: r, allowFlatten: a = !1, finalKeyframe: o, onComplete: l } = e;
    this.isPseudoElement = !!r, this.allowFlatten = a, this.options = e, hn(typeof e.type != "string");
    const c = Rd(e);
    this.animation = Hd(i, n, s, c, r), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !r) {
        const u = Tn(s, this.options, o, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : Sd(i, n, u), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ ht(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ht(e);
  }
  get time() {
    return /* @__PURE__ */ ht(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ xt(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: i }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Ed() ? (this.animation.timeline = e, ft) : i(this);
  }
}
const xr = {
  anticipate: qa,
  backInOut: $a,
  circInOut: Ka
};
function jd(t) {
  return t in xr;
}
function Ld(t) {
  typeof t.ease == "string" && jd(t.ease) && (t.ease = xr[t.ease]);
}
const bs = 10;
class Id extends Vd {
  constructor(e) {
    Ld(e), hr(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: i, onUpdate: n, onComplete: s, element: r, ...a } = this.options;
    if (!i)
      return;
    if (e !== void 0) {
      i.set(e);
      return;
    }
    const o = new An({
      ...a,
      autoplay: !1
    }), l = /* @__PURE__ */ xt(this.finishedTime ?? this.time);
    i.setWithVelocity(o.sample(l - bs).value, o.sample(l).value, bs), o.stop();
  }
}
const vs = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(St.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Fd(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let i = 0; i < t.length; i++)
    if (t[i] !== e)
      return !0;
}
function Bd(t, e, i, n) {
  const s = t[0];
  if (s === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const r = t[t.length - 1], a = vs(s, e), o = vs(r, e);
  return !a || !o ? !1 : Fd(t) || (i === "spring" || yr(i)) && n;
}
function Bi(t) {
  t.duration = 0, t.type = "keyframes";
}
const Od = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), _d = /* @__PURE__ */ fn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function zd(t) {
  const { motionValue: e, name: i, repeatDelay: n, repeatType: s, damping: r, type: a } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: c } = e.owner.getProps();
  return _d() && i && Od.has(i) && (i !== "transform" || !c) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !n && s !== "mirror" && r !== 0 && a !== "inertia";
}
const Yd = 40;
class Ud extends Mn {
  constructor({ autoplay: e = !0, delay: i = 0, type: n = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: a = "loop", keyframes: o, name: l, motionValue: c, element: u, ...d }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = nt.now();
    const f = {
      autoplay: e,
      delay: i,
      type: n,
      repeat: s,
      repeatDelay: r,
      repeatType: a,
      name: l,
      motionValue: c,
      element: u,
      ...d
    }, p = u?.KeyframeResolver || Dn;
    this.keyframeResolver = new p(o, (g, v, y) => this.onKeyframesResolved(g, v, f, !y), l, c, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, i, n, s) {
    this.keyframeResolver = void 0;
    const { name: r, type: a, velocity: o, delay: l, isHandoff: c, onUpdate: u } = n;
    this.resolvedAt = nt.now(), Bd(e, r, a, o) || ((Tt.instantAnimations || !l) && u?.(Tn(e, n, i)), e[0] = e[e.length - 1], Bi(n), n.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > Yd ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: i,
      ...n,
      keyframes: e
    }, p = !c && zd(f) ? new Id({
      ...f,
      element: f.motionValue.owner.current
    }) : new An(f);
    p.finished.then(() => this.notifyFinished()).catch(ft), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, i) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), Dd()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Wd = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Gd(t) {
  const e = Wd.exec(t);
  if (!e)
    return [,];
  const [, i, n, s] = e;
  return [`--${i ?? n}`, s];
}
function br(t, e, i = 1) {
  const [n, s] = Gd(t);
  if (!n)
    return;
  const r = window.getComputedStyle(e).getPropertyValue(n);
  if (r) {
    const a = r.trim();
    return _a(a) ? parseFloat(a) : a;
  }
  return xn(s) ? br(s, e, i + 1) : s;
}
function Cn(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const vr = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...re
]), Xd = {
  test: (t) => t === "auto",
  parse: (t) => t
}, wr = (t) => (e) => e.test(t), Nr = [ae, A, bt, At, Fc, Ic, Xd], ws = (t) => Nr.find(wr(t));
function Zd(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Ya(t) : !0;
}
const $d = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function qd(t) {
  const [e, i] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [n] = i.match(bn) || [];
  if (!n)
    return t;
  const s = i.replace(n, "");
  let r = $d.has(e) ? 1 : 0;
  return n !== i && (r *= 100), e + "(" + r + s + ")";
}
const Jd = /\b([a-z-]*)\(.*?\)/gu, Oi = {
  ...St,
  getAnimatableNone: (t) => {
    const e = t.match(Jd);
    return e ? e.map(qd).join(" ") : t;
  }
}, Ns = {
  ...ae,
  transform: Math.round
}, Kd = {
  rotate: At,
  rotateX: At,
  rotateY: At,
  rotateZ: At,
  scale: Oe,
  scaleX: Oe,
  scaleY: Oe,
  scaleZ: Oe,
  skew: At,
  skewX: At,
  skewY: At,
  distance: A,
  translateX: A,
  translateY: A,
  translateZ: A,
  x: A,
  y: A,
  z: A,
  perspective: A,
  transformPerspective: A,
  opacity: Te,
  originX: cs,
  originY: cs,
  originZ: A
}, Sn = {
  // Border props
  borderWidth: A,
  borderTopWidth: A,
  borderRightWidth: A,
  borderBottomWidth: A,
  borderLeftWidth: A,
  borderRadius: A,
  radius: A,
  borderTopLeftRadius: A,
  borderTopRightRadius: A,
  borderBottomRightRadius: A,
  borderBottomLeftRadius: A,
  // Positioning props
  width: A,
  maxWidth: A,
  height: A,
  maxHeight: A,
  top: A,
  right: A,
  bottom: A,
  left: A,
  // Spacing props
  padding: A,
  paddingTop: A,
  paddingRight: A,
  paddingBottom: A,
  paddingLeft: A,
  margin: A,
  marginTop: A,
  marginRight: A,
  marginBottom: A,
  marginLeft: A,
  // Misc
  backgroundPositionX: A,
  backgroundPositionY: A,
  ...Kd,
  zIndex: Ns,
  // SVG
  fillOpacity: Te,
  strokeOpacity: Te,
  numOctaves: Ns
}, Qd = {
  ...Sn,
  // Color props
  color: G,
  backgroundColor: G,
  outlineColor: G,
  fill: G,
  stroke: G,
  // Border props
  borderColor: G,
  borderTopColor: G,
  borderRightColor: G,
  borderBottomColor: G,
  borderLeftColor: G,
  filter: Oi,
  WebkitFilter: Oi
}, Tr = (t) => Qd[t];
function Mr(t, e) {
  let i = Tr(t);
  return i !== Oi && (i = St), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0;
}
const tu = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function eu(t, e, i) {
  let n = 0, s;
  for (; n < t.length && !s; ) {
    const r = t[n];
    typeof r == "string" && !tu.has(r) && Me(r).values.length && (s = t[n]), n++;
  }
  if (s && i)
    for (const r of e)
      t[r] = Mr(i, s);
}
class iu extends Dn {
  constructor(e, i, n, s, r) {
    super(e, i, n, s, r, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: i, name: n } = this;
    if (!i || !i.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let c = e[l];
      if (typeof c == "string" && (c = c.trim(), xn(c))) {
        const u = br(c, i.current);
        u !== void 0 && (e[l] = u), l === e.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !vr.has(n) || e.length !== 2)
      return;
    const [s, r] = e, a = ws(s), o = ws(r);
    if (a !== o)
      if (ys(a) && ys(o))
        for (let l = 0; l < e.length; l++) {
          const c = e[l];
          typeof c == "string" && (e[l] = parseFloat(c));
        }
      else It[n] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: i } = this, n = [];
    for (let s = 0; s < e.length; s++)
      (e[s] === null || Zd(e[s])) && n.push(s);
    n.length && eu(e, n, i);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: i, name: n } = this;
    if (!e || !e.current)
      return;
    n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = It[n](e.measureViewportBox(), window.getComputedStyle(e.current)), i[0] = this.measuredOrigin;
    const s = i[i.length - 1];
    s !== void 0 && e.getValue(n, s).jump(s, !1);
  }
  measureEndState() {
    const { element: e, name: i, unresolvedKeyframes: n } = this;
    if (!e || !e.current)
      return;
    const s = e.getValue(i);
    s && s.jump(this.measuredOrigin, !1);
    const r = n.length - 1, a = n[r];
    n[r] = It[i](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([o, l]) => {
      e.getValue(o).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function nu(t, e, i) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let n = document;
    const s = i?.[t] ?? n.querySelectorAll(t);
    return s ? Array.from(s) : [];
  }
  return Array.from(t);
}
const Ar = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function Dr(t) {
  return za(t) && "offsetHeight" in t;
}
const Ts = 30, su = (t) => !isNaN(parseFloat(t));
class au {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, i = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
      const s = nt.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const r of this.dependents)
          r.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = i.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = nt.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = su(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return this.on("change", e);
  }
  on(e, i) {
    this.events[e] || (this.events[e] = new mn());
    const n = this.events[e].add(i);
    return e === "change" ? () => {
      n(), L.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, i) {
    this.passiveEffect = e, this.stopPassiveEffect = i;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, i, n) {
    this.set(i), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, i = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, i && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ts)
      return 0;
    const i = Math.min(this.updatedAt - this.prevUpdatedAt, Ts);
    return Ua(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((i) => {
      this.hasAnimated = !0, this.animation = e(i), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ie(t, e) {
  return new au(t, e);
}
const { schedule: En } = /* @__PURE__ */ er(queueMicrotask, !1), gt = {
  x: !1,
  y: !1
};
function Cr() {
  return gt.x || gt.y;
}
function ru(t) {
  return t === "x" || t === "y" ? gt[t] ? null : (gt[t] = !0, () => {
    gt[t] = !1;
  }) : gt.x || gt.y ? null : (gt.x = gt.y = !0, () => {
    gt.x = gt.y = !1;
  });
}
function Sr(t, e) {
  const i = nu(t), n = new AbortController(), s = {
    passive: !0,
    ...e,
    signal: n.signal
  };
  return [i, s, () => n.abort()];
}
function Ms(t) {
  return !(t.pointerType === "touch" || Cr());
}
function ou(t, e, i = {}) {
  const [n, s, r] = Sr(t, i), a = (o) => {
    if (!Ms(o))
      return;
    const { target: l } = o, c = e(l, o);
    if (typeof c != "function" || !l)
      return;
    const u = (d) => {
      Ms(d) && (c(d), l.removeEventListener("pointerleave", u));
    };
    l.addEventListener("pointerleave", u, s);
  };
  return n.forEach((o) => {
    o.addEventListener("pointerenter", a, s);
  }), r;
}
const Er = (t, e) => e ? t === e ? !0 : Er(t, e.parentElement) : !1, kn = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, lu = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function cu(t) {
  return lu.has(t.tagName) || t.tabIndex !== -1;
}
const Ue = /* @__PURE__ */ new WeakSet();
function As(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function gi(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const du = (t, e) => {
  const i = t.currentTarget;
  if (!i)
    return;
  const n = As(() => {
    if (Ue.has(i))
      return;
    gi(i, "down");
    const s = As(() => {
      gi(i, "up");
    }), r = () => gi(i, "cancel");
    i.addEventListener("keyup", s, e), i.addEventListener("blur", r, e);
  });
  i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e);
};
function Ds(t) {
  return kn(t) && !Cr();
}
function uu(t, e, i = {}) {
  const [n, s, r] = Sr(t, i), a = (o) => {
    const l = o.currentTarget;
    if (!Ds(o))
      return;
    Ue.add(l);
    const c = e(l, o), u = (p, g) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), Ue.has(l) && Ue.delete(l), Ds(p) && typeof c == "function" && c(p, { success: g });
    }, d = (p) => {
      u(p, l === window || l === document || i.useGlobalTarget || Er(l, p.target));
    }, f = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", f, s);
  };
  return n.forEach((o) => {
    (i.useGlobalTarget ? window : o).addEventListener("pointerdown", a, s), Dr(o) && (o.addEventListener("focus", (c) => du(c, s)), !cu(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), r;
}
function kr(t) {
  return za(t) && "ownerSVGElement" in t;
}
function hu(t) {
  return kr(t) && t.tagName === "svg";
}
const tt = (t) => !!(t && t.getVelocity), fu = [...Nr, G, St], mu = (t) => fu.find(wr(t)), Pn = Ot({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
function Cs(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function pu(...t) {
  return (e) => {
    let i = !1;
    const n = t.map((s) => {
      const r = Cs(s, e);
      return !i && typeof r == "function" && (i = !0), r;
    });
    if (i)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const r = n[s];
          typeof r == "function" ? r() : Cs(t[s], null);
        }
      };
  };
}
function gu(...t) {
  return nn(pu(...t), t);
}
class yu extends Ca {
  getSnapshotBeforeUpdate(e) {
    const i = this.props.childRef.current;
    if (i && e.isPresent && !this.props.isPresent) {
      const n = i.offsetParent, s = Dr(n) && n.offsetWidth || 0, r = this.props.sizeRef.current;
      r.height = i.offsetHeight || 0, r.width = i.offsetWidth || 0, r.top = i.offsetTop, r.left = i.offsetLeft, r.right = s - r.width - r.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function xu({ children: t, isPresent: e, anchorX: i, root: n }) {
  const s = sn(), r = Dt(null), a = Dt({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: o } = K(Pn), l = gu(r, t?.ref);
  return Ea(() => {
    const { width: c, height: u, top: d, left: f, right: p } = a.current;
    if (e || !r.current || !c || !u)
      return;
    const g = i === "left" ? `left: ${f}` : `right: ${p}`;
    r.current.dataset.motionPopId = s;
    const v = document.createElement("style");
    o && (v.nonce = o);
    const y = n ?? document.head;
    return y.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${g}px !important;
            top: ${d}px !important;
          }
        `), () => {
      y.contains(v) && y.removeChild(v);
    };
  }, [e]), h(yu, { isPresent: e, childRef: r, sizeRef: a, children: Da(t, { ref: l }) });
}
const bu = ({ children: t, initial: e, isPresent: i, onExitComplete: n, custom: s, presenceAffectsLayout: r, mode: a, anchorX: o, root: l }) => {
  const c = ln(vu), u = sn();
  let d = !0, f = Bt(() => (d = !1, {
    id: u,
    initial: e,
    isPresent: i,
    custom: s,
    onExitComplete: (p) => {
      c.set(p, !0);
      for (const g of c.values())
        if (!g)
          return;
      n && n();
    },
    register: (p) => (c.set(p, !1), () => c.delete(p))
  }), [i, c, n]);
  return r && d && (f = { ...f }), Bt(() => {
    c.forEach((p, g) => c.set(g, !1));
  }, [i]), _t(() => {
    !i && !c.size && n && n();
  }, [i]), a === "popLayout" && (t = h(xu, { isPresent: i, anchorX: o, root: l, children: t })), h(ii.Provider, { value: f, children: t });
};
function vu() {
  return /* @__PURE__ */ new Map();
}
function Pr(t = !0) {
  const e = K(ii);
  if (e === null)
    return [!0, null];
  const { isPresent: i, onExitComplete: n, register: s } = e, r = sn();
  _t(() => {
    if (t)
      return s(r);
  }, [t]);
  const a = nn(() => t && n && n(r), [r, n, t]);
  return !i && n ? [!1, a] : [!0];
}
const _e = (t) => t.key || "";
function Ss(t) {
  const e = [];
  return Aa.forEach(t, (i) => {
    Io(i) && e.push(i);
  }), e;
}
const He = ({ children: t, custom: e, initial: i = !0, onExitComplete: n, presenceAffectsLayout: s = !0, mode: r = "sync", propagate: a = !1, anchorX: o = "left", root: l }) => {
  const [c, u] = Pr(a), d = Bt(() => Ss(t), [t]), f = a && !c ? [] : d.map(_e), p = Dt(!0), g = Dt(d), v = ln(() => /* @__PURE__ */ new Map()), [y, b] = I(d), [N, w] = I(d);
  Oa(() => {
    p.current = !1, g.current = d;
    for (let D = 0; D < N.length; D++) {
      const k = _e(N[D]);
      f.includes(k) ? v.delete(k) : v.get(k) !== !0 && v.set(k, !1);
    }
  }, [N, f.length, f.join("-")]);
  const C = [];
  if (d !== y) {
    let D = [...d];
    for (let k = 0; k < N.length; k++) {
      const M = N[k], B = _e(M);
      f.includes(B) || (D.splice(k, 0, M), C.push(M));
    }
    return r === "wait" && C.length && (D = C), w(Ss(D)), b(d), null;
  }
  const { forceRender: T } = K(on);
  return h(tn, { children: N.map((D) => {
    const k = _e(D), M = a && !c ? !1 : d === N || f.includes(k), B = () => {
      if (v.has(k))
        v.set(k, !0);
      else
        return;
      let W = !0;
      v.forEach((Z) => {
        Z || (W = !1);
      }), W && (T?.(), w(g.current), a && u?.(), n && n());
    };
    return h(bu, { isPresent: M, initial: !p.current || i ? void 0 : !1, custom: e, presenceAffectsLayout: s, mode: r, root: l, onExitComplete: M ? void 0 : B, anchorX: o, children: D }, k);
  }) });
}, Hr = Ot({ strict: !1 }), Es = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, ne = {};
for (const t in Es)
  ne[t] = {
    isEnabled: (e) => Es[t].some((i) => !!e[i])
  };
function wu(t) {
  for (const e in t)
    ne[e] = {
      ...ne[e],
      ...t[e]
    };
}
const Nu = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ke(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Nu.has(t);
}
let Rr = (t) => !Ke(t);
function Tu(t) {
  typeof t == "function" && (Rr = (e) => e.startsWith("on") ? !Ke(e) : t(e));
}
try {
  Tu(require("@emotion/is-prop-valid").default);
} catch {
}
function Mu(t, e, i) {
  const n = {};
  for (const s in t)
    s === "values" && typeof t.values == "object" || (Rr(s) || i === !0 && Ke(s) || !e && !Ke(s) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && s.startsWith("onDrag")) && (n[s] = t[s]);
  return n;
}
const ni = /* @__PURE__ */ Ot({});
function si(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Ae(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Hn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Rn = ["initial", ...Hn];
function ai(t) {
  return si(t.animate) || Rn.some((e) => Ae(t[e]));
}
function Vr(t) {
  return !!(ai(t) || t.variants);
}
function Au(t, e) {
  if (ai(t)) {
    const { initial: i, animate: n } = t;
    return {
      initial: i === !1 || Ae(i) ? i : void 0,
      animate: Ae(n) ? n : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function Du(t) {
  const { initial: e, animate: i } = Au(t, K(ni));
  return Bt(() => ({ initial: e, animate: i }), [ks(e), ks(i)]);
}
function ks(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const De = {};
function Cu(t) {
  for (const e in t)
    De[e] = t[e], yn(e) && (De[e].isCSSVariable = !0);
}
function jr(t, { layout: e, layoutId: i }) {
  return oe.has(t) || t.startsWith("origin") || (e || i !== void 0) && (!!De[t] || t === "opacity");
}
const Su = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Eu = re.length;
function ku(t, e, i) {
  let n = "", s = !0;
  for (let r = 0; r < Eu; r++) {
    const a = re[r], o = t[a];
    if (o === void 0)
      continue;
    let l = !0;
    if (typeof o == "number" ? l = o === (a.startsWith("scale") ? 1 : 0) : l = parseFloat(o) === 0, !l || i) {
      const c = Ar(o, Sn[a]);
      if (!l) {
        s = !1;
        const u = Su[a] || a;
        n += `${u}(${c}) `;
      }
      i && (e[a] = c);
    }
  }
  return n = n.trim(), i ? n = i(e, s ? "" : n) : s && (n = "none"), n;
}
function Vn(t, e, i) {
  const { style: n, vars: s, transformOrigin: r } = t;
  let a = !1, o = !1;
  for (const l in e) {
    const c = e[l];
    if (oe.has(l)) {
      a = !0;
      continue;
    } else if (yn(l)) {
      s[l] = c;
      continue;
    } else {
      const u = Ar(c, Sn[l]);
      l.startsWith("origin") ? (o = !0, r[l] = u) : n[l] = u;
    }
  }
  if (e.transform || (a || i ? n.transform = ku(e, t.transform, i) : n.transform && (n.transform = "none")), o) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = r;
    n.transformOrigin = `${l} ${c} ${u}`;
  }
}
const jn = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Lr(t, e, i) {
  for (const n in e)
    !tt(e[n]) && !jr(n, i) && (t[n] = e[n]);
}
function Pu({ transformTemplate: t }, e) {
  return Bt(() => {
    const i = jn();
    return Vn(i, e, t), Object.assign({}, i.vars, i.style);
  }, [e]);
}
function Hu(t, e) {
  const i = t.style || {}, n = {};
  return Lr(n, i, t), Object.assign(n, Pu(t, e)), n;
}
function Ru(t, e) {
  const i = {}, n = Hu(t, e);
  return t.drag && t.dragListener !== !1 && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i;
}
const Vu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, ju = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Lu(t, e, i = 1, n = 0, s = !0) {
  t.pathLength = 1;
  const r = s ? Vu : ju;
  t[r.offset] = A.transform(-n);
  const a = A.transform(e), o = A.transform(i);
  t[r.array] = `${a} ${o}`;
}
function Ir(t, {
  attrX: e,
  attrY: i,
  attrScale: n,
  pathLength: s,
  pathSpacing: r = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...o
}, l, c, u) {
  if (Vn(t, o, c), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: d, style: f } = t;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), e !== void 0 && (d.x = e), i !== void 0 && (d.y = i), n !== void 0 && (d.scale = n), s !== void 0 && Lu(d, s, r, a, !1);
}
const Fr = () => ({
  ...jn(),
  attrs: {}
}), Br = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Iu(t, e, i, n) {
  const s = Bt(() => {
    const r = Fr();
    return Ir(r, e, Br(n), t.transformTemplate, t.style), {
      ...r.attrs,
      style: { ...r.style }
    };
  }, [e]);
  if (t.style) {
    const r = {};
    Lr(r, t.style, t), s.style = { ...r, ...s.style };
  }
  return s;
}
const Fu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ln(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Fu.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Bu(t, e, i, { latestValues: n }, s, r = !1) {
  const o = (Ln(t) ? Iu : Ru)(e, n, s, t), l = Mu(e, typeof t == "string", r), c = t !== Sa ? { ...l, ...o, ref: i } : {}, { children: u } = e, d = Bt(() => tt(u) ? u.get() : u, [u]);
  return Ze(t, {
    ...c,
    children: d
  });
}
function Ps(t) {
  const e = [{}, {}];
  return t?.values.forEach((i, n) => {
    e[0][n] = i.get(), e[1][n] = i.getVelocity();
  }), e;
}
function In(t, e, i, n) {
  if (typeof e == "function") {
    const [s, r] = Ps(n);
    e = e(i !== void 0 ? i : t.custom, s, r);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [s, r] = Ps(n);
    e = e(i !== void 0 ? i : t.custom, s, r);
  }
  return e;
}
function We(t) {
  return tt(t) ? t.get() : t;
}
function Ou({ scrapeMotionValuesFromProps: t, createRenderState: e }, i, n, s) {
  return {
    latestValues: _u(i, n, s, t),
    renderState: e()
  };
}
function _u(t, e, i, n) {
  const s = {}, r = n(t, {});
  for (const f in r)
    s[f] = We(r[f]);
  let { initial: a, animate: o } = t;
  const l = ai(t), c = Vr(t);
  e && c && !l && t.inherit !== !1 && (a === void 0 && (a = e.initial), o === void 0 && (o = e.animate));
  let u = i ? i.initial === !1 : !1;
  u = u || a === !1;
  const d = u ? o : a;
  if (d && typeof d != "boolean" && !si(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const g = In(t, f[p]);
      if (g) {
        const { transitionEnd: v, transition: y, ...b } = g;
        for (const N in b) {
          let w = b[N];
          if (Array.isArray(w)) {
            const C = u ? w.length - 1 : 0;
            w = w[C];
          }
          w !== null && (s[N] = w);
        }
        for (const N in v)
          s[N] = v[N];
      }
    }
  }
  return s;
}
const Or = (t) => (e, i) => {
  const n = K(ni), s = K(ii), r = () => Ou(t, e, n, s);
  return i ? r() : ln(r);
};
function Fn(t, e, i) {
  const { style: n } = t, s = {};
  for (const r in n)
    (tt(n[r]) || e.style && tt(e.style[r]) || jr(r, t) || i?.getValue(r)?.liveStyle !== void 0) && (s[r] = n[r]);
  return s;
}
const zu = /* @__PURE__ */ Or({
  scrapeMotionValuesFromProps: Fn,
  createRenderState: jn
});
function _r(t, e, i) {
  const n = Fn(t, e, i);
  for (const s in t)
    if (tt(t[s]) || tt(e[s])) {
      const r = re.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      n[r] = t[s];
    }
  return n;
}
const Yu = /* @__PURE__ */ Or({
  scrapeMotionValuesFromProps: _r,
  createRenderState: Fr
}), Uu = Symbol.for("motionComponentSymbol");
function Zt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Wu(t, e, i) {
  return nn(
    (n) => {
      n && t.onMount && t.onMount(n), e && (n ? e.mount(n) : e.unmount()), i && (typeof i == "function" ? i(n) : Zt(i) && (i.current = n));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [e]
  );
}
const Bn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Gu = "framerAppearId", zr = "data-" + Bn(Gu), Yr = Ot({});
function Xu(t, e, i, n, s) {
  const { visualElement: r } = K(ni), a = K(Hr), o = K(ii), l = K(Pn).reducedMotion, c = Dt(null);
  n = n || a.renderer, !c.current && n && (c.current = n(t, {
    visualState: e,
    parent: r,
    props: i,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const u = c.current, d = K(Yr);
  u && !u.projection && s && (u.type === "html" || u.type === "svg") && Zu(c.current, i, s, d);
  const f = Dt(!1);
  Ea(() => {
    u && f.current && u.update(i, o);
  });
  const p = i[zr], g = Dt(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return Oa(() => {
    u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), g.current && u.animationState && u.animationState.animateChanges());
  }), _t(() => {
    u && (!g.current && u.animationState && u.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), g.current = !1), u.enteringChildren = void 0);
  }), u;
}
function Zu(t, e, i, n) {
  const { layoutId: s, layout: r, drag: a, dragConstraints: o, layoutScroll: l, layoutRoot: c, layoutCrossfade: u } = e;
  t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : Ur(t.parent)), t.projection.setOptions({
    layoutId: s,
    layout: r,
    alwaysMeasureLayout: !!a || o && Zt(o),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof r == "string" ? r : "both",
    initialPromotionConfig: n,
    crossfade: u,
    layoutScroll: l,
    layoutRoot: c
  });
}
function Ur(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Ur(t.parent);
}
function yi(t, { forwardMotionProps: e = !1 } = {}, i, n) {
  i && wu(i);
  const s = Ln(t) ? Yu : zu;
  function r(o, l) {
    let c;
    const u = {
      ...K(Pn),
      ...o,
      layoutId: $u(o)
    }, { isStatic: d } = u, f = Du(o), p = s(o, d);
    if (!d && cn) {
      qu();
      const g = Ju(u);
      c = g.MeasureLayout, f.visualElement = Xu(t, p, u, n, g.ProjectionNode);
    }
    return m(ni.Provider, { value: f, children: [c && f.visualElement ? h(c, { visualElement: f.visualElement, ...u }) : null, Bu(t, o, Wu(p, f.visualElement, l), p, d, e)] });
  }
  r.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const a = en(r);
  return a[Uu] = t, a;
}
function $u({ layoutId: t }) {
  const e = K(on).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function qu(t, e) {
  K(Hr).strict;
}
function Ju(t) {
  const { drag: e, layout: i } = ne;
  if (!e && !i)
    return {};
  const n = { ...e, ...i };
  return {
    MeasureLayout: e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
    ProjectionNode: n.ProjectionNode
  };
}
function Ku(t, e) {
  if (typeof Proxy > "u")
    return yi;
  const i = /* @__PURE__ */ new Map(), n = (r, a) => yi(r, a, t, e), s = (r, a) => n(r, a);
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, a) => a === "create" ? n : (i.has(a) || i.set(a, yi(a, void 0, t, e)), i.get(a))
  });
}
function Wr({ top: t, left: e, right: i, bottom: n }) {
  return {
    x: { min: e, max: i },
    y: { min: t, max: n }
  };
}
function Qu({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function th(t, e) {
  if (!e)
    return t;
  const i = e({ x: t.left, y: t.top }), n = e({ x: t.right, y: t.bottom });
  return {
    top: i.y,
    left: i.x,
    bottom: n.y,
    right: n.x
  };
}
function xi(t) {
  return t === void 0 || t === 1;
}
function _i({ scale: t, scaleX: e, scaleY: i }) {
  return !xi(t) || !xi(e) || !xi(i);
}
function Vt(t) {
  return _i(t) || Gr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Gr(t) {
  return Hs(t.x) || Hs(t.y);
}
function Hs(t) {
  return t && t !== "0%";
}
function Qe(t, e, i) {
  const n = t - i, s = e * n;
  return i + s;
}
function Rs(t, e, i, n, s) {
  return s !== void 0 && (t = Qe(t, s, n)), Qe(t, i, n) + e;
}
function zi(t, e = 0, i = 1, n, s) {
  t.min = Rs(t.min, e, i, n, s), t.max = Rs(t.max, e, i, n, s);
}
function Xr(t, { x: e, y: i }) {
  zi(t.x, e.translate, e.scale, e.originPoint), zi(t.y, i.translate, i.scale, i.originPoint);
}
const Vs = 0.999999999999, js = 1.0000000000001;
function eh(t, e, i, n = !1) {
  const s = i.length;
  if (!s)
    return;
  e.x = e.y = 1;
  let r, a;
  for (let o = 0; o < s; o++) {
    r = i[o], a = r.projectionDelta;
    const { visualElement: l } = r.options;
    l && l.props.style && l.props.style.display === "contents" || (n && r.options.layoutScroll && r.scroll && r !== r.root && qt(t, {
      x: -r.scroll.offset.x,
      y: -r.scroll.offset.y
    }), a && (e.x *= a.x.scale, e.y *= a.y.scale, Xr(t, a)), n && Vt(r.latestValues) && qt(t, r.latestValues));
  }
  e.x < js && e.x > Vs && (e.x = 1), e.y < js && e.y > Vs && (e.y = 1);
}
function $t(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Ls(t, e, i, n, s = 0.5) {
  const r = F(t.min, t.max, s);
  zi(t, e, i, r, n);
}
function qt(t, e) {
  Ls(t.x, e.x, e.scaleX, e.scale, e.originX), Ls(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Zr(t, e) {
  return Wr(th(t.getBoundingClientRect(), e));
}
function ih(t, e, i) {
  const n = Zr(t, i), { scroll: s } = e;
  return s && ($t(n.x, s.offset.x), $t(n.y, s.offset.y)), n;
}
const Is = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Jt = () => ({
  x: Is(),
  y: Is()
}), Fs = () => ({ min: 0, max: 0 }), U = () => ({
  x: Fs(),
  y: Fs()
}), Yi = { current: null }, $r = { current: !1 };
function nh() {
  if ($r.current = !0, !!cn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Yi.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      Yi.current = !1;
}
const sh = /* @__PURE__ */ new WeakMap();
function ah(t, e, i) {
  for (const n in e) {
    const s = e[n], r = i[n];
    if (tt(s))
      t.addValue(n, s);
    else if (tt(r))
      t.addValue(n, ie(s, { owner: t }));
    else if (r !== s)
      if (t.hasValue(n)) {
        const a = t.getValue(n);
        a.liveStyle === !0 ? a.jump(s) : a.hasAnimated || a.set(s);
      } else {
        const a = t.getStaticValue(n);
        t.addValue(n, ie(a !== void 0 ? a : s, { owner: t }));
      }
  }
  for (const n in i)
    e[n] === void 0 && t.removeValue(n);
  return e;
}
const Bs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class rh {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, i, n) {
    return {};
  }
  constructor({ parent: e, props: i, presenceContext: n, reducedMotionConfig: s, blockInitialAnimation: r, visualState: a }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = nt.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, L.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: c } = a;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = i.initial ? { ...l } : {}, this.renderState = c, this.parent = e, this.props = i, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = ai(i), this.isVariantNode = Vr(i), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: u, ...d } = this.scrapeMotionValuesFromProps(i, {}, this);
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && tt(p) && p.set(l[f]);
    }
  }
  mount(e) {
    this.current = e, sh.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((i, n) => this.bindToMotionValue(n, i)), $r.current || nh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yi.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Ct(this.notifyUpdate), Ct(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const i = this.features[e];
      i && (i.unmount(), i.isMounted = !1);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, i) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const n = oe.has(e);
    n && this.onBindTransform && this.onBindTransform();
    const s = i.on("change", (a) => {
      this.latestValues[e] = a, this.props.onUpdate && L.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let r;
    window.MotionCheckAppearSync && (r = window.MotionCheckAppearSync(this, e, i)), this.valueSubscriptions.set(e, () => {
      s(), r && r(), i.owner && i.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in ne) {
      const i = ne[e];
      if (!i)
        continue;
      const { isEnabled: n, Feature: s } = i;
      if (!this.features[e] && s && n(this.props) && (this.features[e] = new s(this)), this.features[e]) {
        const r = this.features[e];
        r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : U();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, i) {
    this.latestValues[e] = i;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, i) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = i;
    for (let n = 0; n < Bs.length; n++) {
      const s = Bs[n];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const r = "on" + s, a = e[r];
      a && (this.propEventSubscriptions[s] = this.on(s, a));
    }
    this.prevMotionValues = ah(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const i = this.getClosestVariantNode();
    if (i)
      return i.variantChildren && i.variantChildren.add(e), () => i.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, i) {
    const n = this.values.get(e);
    i !== n && (n && this.removeValue(e), this.bindToMotionValue(e, i), this.values.set(e, i), this.latestValues[e] = i.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const i = this.valueSubscriptions.get(e);
    i && (i(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, i) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let n = this.values.get(e);
    return n === void 0 && i !== void 0 && (n = ie(i === null ? void 0 : i, { owner: this }), this.addValue(e, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, i) {
    let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return n != null && (typeof n == "string" && (_a(n) || Ya(n)) ? n = parseFloat(n) : !mu(n) && St.test(i) && (n = Mr(e, i)), this.setBaseTarget(e, tt(n) ? n.get() : n)), tt(n) ? n.get() : n;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, i) {
    this.baseTarget[e] = i;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: i } = this.props;
    let n;
    if (typeof i == "string" || typeof i == "object") {
      const r = In(this.props, i, this.presenceContext?.custom);
      r && (n = r[e]);
    }
    if (i && n !== void 0)
      return n;
    const s = this.getBaseTargetFromProps(this.props, e);
    return s !== void 0 && !tt(s) ? s : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, i) {
    return this.events[e] || (this.events[e] = new mn()), this.events[e].add(i);
  }
  notify(e, ...i) {
    this.events[e] && this.events[e].notify(...i);
  }
  scheduleRenderMicrotask() {
    En.render(this.render);
  }
}
class qr extends rh {
  constructor() {
    super(...arguments), this.KeyframeResolver = iu;
  }
  sortInstanceNodePosition(e, i) {
    return e.compareDocumentPosition(i) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, i) {
    return e.style ? e.style[i] : void 0;
  }
  removeValueFromRenderState(e, { vars: i, style: n }) {
    delete i[e], delete n[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    tt(e) && (this.childSubscription = e.on("change", (i) => {
      this.current && (this.current.textContent = `${i}`);
    }));
  }
}
function Jr(t, { style: e, vars: i }, n, s) {
  const r = t.style;
  let a;
  for (a in e)
    r[a] = e[a];
  s?.applyProjectionStyles(r, n);
  for (a in i)
    r.setProperty(a, i[a]);
}
function oh(t) {
  return window.getComputedStyle(t);
}
class lh extends qr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Jr;
  }
  readValueFromInstance(e, i) {
    if (oe.has(i))
      return this.projection?.isProjecting ? Vi(i) : wd(e, i);
    {
      const n = oh(e), s = (yn(i) ? n.getPropertyValue(i) : n[i]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: i }) {
    return Zr(e, i);
  }
  build(e, i, n) {
    Vn(e, i, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, i, n) {
    return Fn(e, i, n);
  }
}
const Kr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function ch(t, e, i, n) {
  Jr(t, e, void 0, n);
  for (const s in e.attrs)
    t.setAttribute(Kr.has(s) ? s : Bn(s), e.attrs[s]);
}
class dh extends qr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = U;
  }
  getBaseTargetFromProps(e, i) {
    return e[i];
  }
  readValueFromInstance(e, i) {
    if (oe.has(i)) {
      const n = Tr(i);
      return n && n.default || 0;
    }
    return i = Kr.has(i) ? i : Bn(i), e.getAttribute(i);
  }
  scrapeMotionValuesFromProps(e, i, n) {
    return _r(e, i, n);
  }
  build(e, i, n) {
    Ir(e, i, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, i, n, s) {
    ch(e, i, n, s);
  }
  mount(e) {
    this.isSVGTag = Br(e.tagName), super.mount(e);
  }
}
const uh = (t, e) => Ln(t) ? new dh(e) : new lh(e, {
  allowProjection: t !== Sa
});
function Qt(t, e, i) {
  const n = t.getProps();
  return In(n, e, i !== void 0 ? i : n.custom, t);
}
const Ui = (t) => Array.isArray(t);
function hh(t, e, i) {
  t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, ie(i));
}
function fh(t) {
  return Ui(t) ? t[t.length - 1] || 0 : t;
}
function mh(t, e) {
  const i = Qt(t, e);
  let { transitionEnd: n = {}, transition: s = {}, ...r } = i || {};
  r = { ...r, ...n };
  for (const a in r) {
    const o = fh(r[a]);
    hh(t, a, o);
  }
}
function ph(t) {
  return !!(tt(t) && t.add);
}
function Wi(t, e) {
  const i = t.getValue("willChange");
  if (ph(i))
    return i.add(e);
  if (!i && Tt.WillChange) {
    const n = new Tt.WillChange("auto");
    t.addValue("willChange", n), n.add(e);
  }
}
function Qr(t) {
  return t.props[zr];
}
const gh = (t) => t !== null;
function yh(t, { repeat: e, repeatType: i = "loop" }, n) {
  const s = t.filter(gh), r = e && i !== "loop" && e % 2 === 1 ? 0 : s.length - 1;
  return s[r];
}
const xh = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, bh = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), vh = {
  type: "keyframes",
  duration: 0.8
}, wh = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Nh = (t, { keyframes: e }) => e.length > 2 ? vh : oe.has(t) ? t.startsWith("scale") ? bh(e[1]) : xh : wh;
function Th({ when: t, delay: e, delayChildren: i, staggerChildren: n, staggerDirection: s, repeat: r, repeatType: a, repeatDelay: o, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
const On = (t, e, i, n = {}, s, r) => (a) => {
  const o = Cn(n, t) || {}, l = o.delay || n.delay || 0;
  let { elapsed: c = 0 } = n;
  c = c - /* @__PURE__ */ xt(l);
  const u = {
    keyframes: Array.isArray(i) ? i : [null, i],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...o,
    delay: -c,
    onUpdate: (f) => {
      e.set(f), o.onUpdate && o.onUpdate(f);
    },
    onComplete: () => {
      a(), o.onComplete && o.onComplete();
    },
    name: t,
    motionValue: e,
    element: r ? void 0 : s
  };
  Th(o) || Object.assign(u, Nh(t, u)), u.duration && (u.duration = /* @__PURE__ */ xt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ xt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Bi(u), u.delay === 0 && (d = !0)), (Tt.instantAnimations || Tt.skipAnimations) && (d = !0, Bi(u), u.delay = 0), u.allowFlatten = !o.type && !o.ease, d && !r && e.get() !== void 0) {
    const f = yh(u.keyframes, o);
    if (f !== void 0) {
      L.update(() => {
        u.onUpdate(f), u.onComplete();
      });
      return;
    }
  }
  return o.isSync ? new An(u) : new Ud(u);
};
function Mh({ protectedKeys: t, needsAnimating: e }, i) {
  const n = t.hasOwnProperty(i) && e[i] !== !0;
  return e[i] = !1, n;
}
function to(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
  let { transition: r = t.getDefaultTransition(), transitionEnd: a, ...o } = e;
  n && (r = n);
  const l = [], c = s && t.animationState && t.animationState.getState()[s];
  for (const u in o) {
    const d = t.getValue(u, t.latestValues[u] ?? null), f = o[u];
    if (f === void 0 || c && Mh(c, u))
      continue;
    const p = {
      delay: i,
      ...Cn(r || {}, u)
    }, g = d.get();
    if (g !== void 0 && !d.isAnimating && !Array.isArray(f) && f === g && !p.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const b = Qr(t);
      if (b) {
        const N = window.MotionHandoffAnimation(b, u, L);
        N !== null && (p.startTime = N, v = !0);
      }
    }
    Wi(t, u), d.start(On(u, d, f, t.shouldReduceMotion && vr.has(u) ? { type: !1 } : p, t, v));
    const y = d.animation;
    y && l.push(y);
  }
  return a && Promise.all(l).then(() => {
    L.update(() => {
      a && mh(t, a);
    });
  }), l;
}
function eo(t, e, i, n = 0, s = 1) {
  const r = Array.from(t).sort((c, u) => c.sortNodePosition(u)).indexOf(e), a = t.size, o = (a - 1) * n;
  return typeof i == "function" ? i(r, a) : s === 1 ? r * n : o - r * n;
}
function Gi(t, e, i = {}) {
  const n = Qt(t, e, i.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: s = t.getDefaultTransition() || {} } = n || {};
  i.transitionOverride && (s = i.transitionOverride);
  const r = n ? () => Promise.all(to(t, n, i)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = s;
    return Ah(t, e, l, c, u, d, i);
  } : () => Promise.resolve(), { when: o } = s;
  if (o) {
    const [l, c] = o === "beforeChildren" ? [r, a] : [a, r];
    return l().then(() => c());
  } else
    return Promise.all([r(), a(i.delay)]);
}
function Ah(t, e, i = 0, n = 0, s = 0, r = 1, a) {
  const o = [];
  for (const l of t.variantChildren)
    l.notify("AnimationStart", e), o.push(Gi(l, e, {
      ...a,
      delay: i + (typeof n == "function" ? 0 : n) + eo(t.variantChildren, l, n, s, r)
    }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(o);
}
function Dh(t, e, i = {}) {
  t.notify("AnimationStart", e);
  let n;
  if (Array.isArray(e)) {
    const s = e.map((r) => Gi(t, r, i));
    n = Promise.all(s);
  } else if (typeof e == "string")
    n = Gi(t, e, i);
  else {
    const s = typeof e == "function" ? Qt(t, e, i.custom) : e;
    n = Promise.all(to(t, s, i));
  }
  return n.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function io(t, e) {
  if (!Array.isArray(e))
    return !1;
  const i = e.length;
  if (i !== t.length)
    return !1;
  for (let n = 0; n < i; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
const Ch = Rn.length;
function no(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const i = t.parent ? no(t.parent) || {} : {};
    return t.props.initial !== void 0 && (i.initial = t.props.initial), i;
  }
  const e = {};
  for (let i = 0; i < Ch; i++) {
    const n = Rn[i], s = t.props[n];
    (Ae(s) || s === !1) && (e[n] = s);
  }
  return e;
}
const Sh = [...Hn].reverse(), Eh = Hn.length;
function kh(t) {
  return (e) => Promise.all(e.map(({ animation: i, options: n }) => Dh(t, i, n)));
}
function Ph(t) {
  let e = kh(t), i = Os(), n = !0;
  const s = (l) => (c, u) => {
    const d = Qt(t, u, l === "exit" ? t.presenceContext?.custom : void 0);
    if (d) {
      const { transition: f, transitionEnd: p, ...g } = d;
      c = { ...c, ...g, ...p };
    }
    return c;
  };
  function r(l) {
    e = l(t);
  }
  function a(l) {
    const { props: c } = t, u = no(t.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let y = 0; y < Eh; y++) {
      const b = Sh[y], N = i[b], w = c[b] !== void 0 ? c[b] : u[b], C = Ae(w), T = b === l ? N.isActive : null;
      T === !1 && (g = y);
      let D = w === u[b] && w !== c[b] && C;
      if (D && n && t.manuallyAnimateOnMount && (D = !1), N.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !N.isActive && T === null || // If we didn't and don't have any defined prop for this animation type
      !w && !N.prevProp || // Or if the prop doesn't define an animation
      si(w) || typeof w == "boolean")
        continue;
      const k = Hh(N.prevProp, w);
      let M = k || // If we're making this variant active, we want to always make it active
      b === l && N.isActive && !D && C || // If we removed a higher-priority variant (i is in reverse order)
      y > g && C, B = !1;
      const W = Array.isArray(w) ? w : [w];
      let Z = W.reduce(s(b), {});
      T === !1 && (Z = {});
      const { prevResolvedValues: vt = {} } = N, kt = {
        ...vt,
        ...Z
      }, zt = (R) => {
        M = !0, f.has(R) && (B = !0, f.delete(R)), N.needsAnimating[R] = !0;
        const O = t.getValue(R);
        O && (O.liveStyle = !1);
      };
      for (const R in kt) {
        const O = Z[R], X = vt[R];
        if (p.hasOwnProperty(R))
          continue;
        let ot = !1;
        Ui(O) && Ui(X) ? ot = !io(O, X) : ot = O !== X, ot ? O != null ? zt(R) : f.add(R) : O !== void 0 && f.has(R) ? zt(R) : N.protectedKeys[R] = !0;
      }
      N.prevProp = w, N.prevResolvedValues = Z, N.isActive && (p = { ...p, ...Z }), n && t.blockInitialAnimation && (M = !1);
      const st = D && k;
      M && (!st || B) && d.push(...W.map((R) => {
        const O = { type: b };
        if (typeof R == "string" && n && !st && t.manuallyAnimateOnMount && t.parent) {
          const { parent: X } = t, ot = Qt(X, R);
          if (X.enteringChildren && ot) {
            const { delayChildren: V } = ot.transition || {};
            O.delay = eo(X.enteringChildren, t, V);
          }
        }
        return {
          animation: R,
          options: O
        };
      }));
    }
    if (f.size) {
      const y = {};
      if (typeof c.initial != "boolean") {
        const b = Qt(t, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        b && b.transition && (y.transition = b.transition);
      }
      f.forEach((b) => {
        const N = t.getBaseTarget(b), w = t.getValue(b);
        w && (w.liveStyle = !0), y[b] = N ?? null;
      }), d.push({ animation: y });
    }
    let v = !!d.length;
    return n && (c.initial === !1 || c.initial === c.animate) && !t.manuallyAnimateOnMount && (v = !1), n = !1, v ? e(d) : Promise.resolve();
  }
  function o(l, c) {
    if (i[l].isActive === c)
      return Promise.resolve();
    t.variantChildren?.forEach((d) => d.animationState?.setActive(l, c)), i[l].isActive = c;
    const u = a(l);
    for (const d in i)
      i[d].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: r,
    getState: () => i,
    reset: () => {
      i = Os();
    }
  };
}
function Hh(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !io(e, t) : !1;
}
function Rt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Os() {
  return {
    animate: Rt(!0),
    whileInView: Rt(),
    whileHover: Rt(),
    whileTap: Rt(),
    whileDrag: Rt(),
    whileFocus: Rt(),
    exit: Rt()
  };
}
class Et {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Rh extends Et {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Ph(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    si(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: i } = this.node.prevProps || {};
    e !== i && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Vh = 0;
class jh extends Et {
  constructor() {
    super(...arguments), this.id = Vh++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: i } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === n)
      return;
    const s = this.node.animationState.setActive("exit", !e);
    i && !e && s.then(() => {
      i(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: i } = this.node.presenceContext || {};
    i && i(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Lh = {
  animation: {
    Feature: Rh
  },
  exit: {
    Feature: jh
  }
};
function Ce(t, e, i, n = { passive: !0 }) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
}
function Re(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Ih = (t) => (e) => kn(e) && t(e, Re(e));
function be(t, e, i, n) {
  return Ce(t, e, Ih(i), n);
}
const so = 1e-4, Fh = 1 - so, Bh = 1 + so, ao = 0.01, Oh = 0 - ao, _h = 0 + ao;
function et(t) {
  return t.max - t.min;
}
function zh(t, e, i) {
  return Math.abs(t - e) <= i;
}
function _s(t, e, i, n = 0.5) {
  t.origin = n, t.originPoint = F(e.min, e.max, t.origin), t.scale = et(i) / et(e), t.translate = F(i.min, i.max, t.origin) - t.originPoint, (t.scale >= Fh && t.scale <= Bh || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Oh && t.translate <= _h || isNaN(t.translate)) && (t.translate = 0);
}
function ve(t, e, i, n) {
  _s(t.x, e.x, i.x, n ? n.originX : void 0), _s(t.y, e.y, i.y, n ? n.originY : void 0);
}
function zs(t, e, i) {
  t.min = i.min + e.min, t.max = t.min + et(e);
}
function Yh(t, e, i) {
  zs(t.x, e.x, i.x), zs(t.y, e.y, i.y);
}
function Ys(t, e, i) {
  t.min = e.min - i.min, t.max = t.min + et(e);
}
function we(t, e, i) {
  Ys(t.x, e.x, i.x), Ys(t.y, e.y, i.y);
}
function ut(t) {
  return [t("x"), t("y")];
}
const ro = ({ current: t }) => t ? t.ownerDocument.defaultView : null, Us = (t, e) => Math.abs(t - e);
function Uh(t, e) {
  const i = Us(t.x, e.x), n = Us(t.y, e.y);
  return Math.sqrt(i ** 2 + n ** 2);
}
class oo {
  constructor(e, i, { transformPagePoint: n, contextWindow: s = window, dragSnapToOrigin: r = !1, distanceThreshold: a = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = vi(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, g = Uh(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !g)
        return;
      const { point: v } = f, { timestamp: y } = J;
      this.history.push({ ...v, timestamp: y });
      const { onStart: b, onMove: N } = this.handlers;
      p || (b && b(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), N && N(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = bi(p, this.transformPagePoint), L.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: g, onSessionEnd: v, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const b = vi(f.type === "pointercancel" ? this.lastMoveEventInfo : bi(p, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, b), v && v(f, b);
    }, !kn(e))
      return;
    this.dragSnapToOrigin = r, this.handlers = i, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = s || window;
    const o = Re(e), l = bi(o, this.transformPagePoint), { point: c } = l, { timestamp: u } = J;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = i;
    d && d(e, vi(l, this.history)), this.removeListeners = Ee(be(this.contextWindow, "pointermove", this.handlePointerMove), be(this.contextWindow, "pointerup", this.handlePointerUp), be(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ct(this.updatePoint);
  }
}
function bi(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Ws(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function vi({ point: t }, e) {
  return {
    point: t,
    delta: Ws(t, lo(e)),
    offset: Ws(t, Wh(e)),
    velocity: Gh(e, 0.1)
  };
}
function Wh(t) {
  return t[0];
}
function lo(t) {
  return t[t.length - 1];
}
function Gh(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let i = t.length - 1, n = null;
  const s = lo(t);
  for (; i >= 0 && (n = t[i], !(s.timestamp - n.timestamp > /* @__PURE__ */ xt(e))); )
    i--;
  if (!n)
    return { x: 0, y: 0 };
  const r = /* @__PURE__ */ ht(s.timestamp - n.timestamp);
  if (r === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (s.x - n.x) / r,
    y: (s.y - n.y) / r
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Xh(t, { min: e, max: i }, n) {
  return e !== void 0 && t < e ? t = n ? F(e, t, n.min) : Math.max(t, e) : i !== void 0 && t > i && (t = n ? F(i, t, n.max) : Math.min(t, i)), t;
}
function Gs(t, e, i) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0
  };
}
function Zh(t, { top: e, left: i, bottom: n, right: s }) {
  return {
    x: Gs(t.x, i, s),
    y: Gs(t.y, e, n)
  };
}
function Xs(t, e) {
  let i = e.min - t.min, n = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n };
}
function $h(t, e) {
  return {
    x: Xs(t.x, e.x),
    y: Xs(t.y, e.y)
  };
}
function qh(t, e) {
  let i = 0.5;
  const n = et(t), s = et(e);
  return s > n ? i = /* @__PURE__ */ Ne(e.min, e.max - n, t.min) : n > s && (i = /* @__PURE__ */ Ne(t.min, t.max - s, e.min)), Nt(0, 1, i);
}
function Jh(t, e) {
  const i = {};
  return e.min !== void 0 && (i.min = e.min - t.min), e.max !== void 0 && (i.max = e.max - t.min), i;
}
const Xi = 0.35;
function Kh(t = Xi) {
  return t === !1 ? t = 0 : t === !0 && (t = Xi), {
    x: Zs(t, "left", "right"),
    y: Zs(t, "top", "bottom")
  };
}
function Zs(t, e, i) {
  return {
    min: $s(t, e),
    max: $s(t, i)
  };
}
function $s(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Qh = /* @__PURE__ */ new WeakMap();
class tf {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = U(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: i = !1, distanceThreshold: n } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const r = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), i && this.snapToCursor(Re(d).point);
    }, a = (d, f) => {
      const { drag: p, dragPropagation: g, onDragStart: v } = this.getProps();
      if (p && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = ru(p), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ut((b) => {
        let N = this.getAxisMotionValue(b).get() || 0;
        if (bt.test(N)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const C = w.layout.layoutBox[b];
            C && (N = et(C) * (parseFloat(N) / 100));
          }
        }
        this.originPoint[b] = N;
      }), v && L.postRender(() => v(d, f)), Wi(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, o = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f;
      const { dragPropagation: p, dragDirectionLock: g, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: b } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = ef(b), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, b), this.updateAxis("y", f.point, b), this.visualElement.render(), y && y(d, f);
    }, l = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, c = () => ut((d) => this.getAnimationState(d) === "paused" && this.getAxisMotionValue(d).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new oo(e, {
      onSessionStart: r,
      onStart: a,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: n,
      contextWindow: ro(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, i) {
    const n = e || this.latestPointerEvent, s = i || this.latestPanInfo, r = this.isDragging;
    if (this.cancel(), !r || !s || !n)
      return;
    const { velocity: a } = s;
    this.startAnimation(a);
    const { onDragEnd: o } = this.getProps();
    o && L.postRender(() => o(n, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: i } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), i && i.setActive("whileDrag", !1);
  }
  updateAxis(e, i, n) {
    const { drag: s } = this.getProps();
    if (!n || !ze(e, s, this.currentDirection))
      return;
    const r = this.getAxisMotionValue(e);
    let a = this.originPoint[e] + n[e];
    this.constraints && this.constraints[e] && (a = Xh(a, this.constraints[e], this.elastic[e])), r.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: i } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
    e && Zt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = Zh(n.layoutBox, e) : this.constraints = !1, this.elastic = Kh(i), s !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ut((r) => {
      this.constraints !== !1 && this.getAxisMotionValue(r) && (this.constraints[r] = Jh(n.layoutBox[r], this.constraints[r]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: i } = this.getProps();
    if (!e || !Zt(e))
      return !1;
    const n = e.current, { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const r = ih(n, s.root, this.visualElement.getTransformPagePoint());
    let a = $h(s.layout.layoutBox, r);
    if (i) {
      const o = i(Qu(a));
      this.hasMutatedConstraints = !!o, o && (a = Wr(o));
    }
    return a;
  }
  startAnimation(e) {
    const { drag: i, dragMomentum: n, dragElastic: s, dragTransition: r, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), l = this.constraints || {}, c = ut((u) => {
      if (!ze(u, i, this.currentDirection))
        return;
      let d = l && l[u] || {};
      a && (d = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, p = s ? 40 : 1e7, g = {
        type: "inertia",
        velocity: n ? e[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...r,
        ...d
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(c).then(o);
  }
  startAxisValueAnimation(e, i) {
    const n = this.getAxisMotionValue(e);
    return Wi(this.visualElement, e), n.start(On(e, n, 0, i, this.visualElement, !1));
  }
  stopAnimation() {
    ut((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    ut((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const i = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps(), s = n[i];
    return s || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    ut((i) => {
      const { drag: n } = this.getProps();
      if (!ze(i, n, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, r = this.getAxisMotionValue(i);
      if (s && s.layout) {
        const { min: a, max: o } = s.layout.layoutBox[i];
        r.set(e[i] - F(a, o, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: i } = this.getProps(), { projection: n } = this.visualElement;
    if (!Zt(i) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    ut((a) => {
      const o = this.getAxisMotionValue(a);
      if (o && this.constraints !== !1) {
        const l = o.get();
        s[a] = qh({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: r } = this.visualElement.getProps();
    this.visualElement.current.style.transform = r ? r({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), ut((a) => {
      if (!ze(a, e, null))
        return;
      const o = this.getAxisMotionValue(a), { min: l, max: c } = this.constraints[a];
      o.set(F(l, c, s[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Qh.set(this.visualElement, this);
    const e = this.visualElement.current, i = be(e, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      Zt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, r = s.addEventListener("measure", n);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), L.read(n);
    const a = Ce(window, "resize", () => this.scalePositionWithinConstraints()), o = s.addEventListener("didUpdate", (({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ut((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      a(), i(), r(), o && o();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: i = !1, dragDirectionLock: n = !1, dragPropagation: s = !1, dragConstraints: r = !1, dragElastic: a = Xi, dragMomentum: o = !0 } = e;
    return {
      ...e,
      drag: i,
      dragDirectionLock: n,
      dragPropagation: s,
      dragConstraints: r,
      dragElastic: a,
      dragMomentum: o
    };
  }
}
function ze(t, e, i) {
  return (e === !0 || e === t) && (i === null || i === t);
}
function ef(t, e = 10) {
  let i = null;
  return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i;
}
class nf extends Et {
  constructor(e) {
    super(e), this.removeGroupControls = ft, this.removeListeners = ft, this.controls = new tf(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ft;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const qs = (t) => (e, i) => {
  t && L.postRender(() => t(e, i));
};
class sf extends Et {
  constructor() {
    super(...arguments), this.removePointerDownListener = ft;
  }
  onPointerDown(e) {
    this.session = new oo(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ro(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: i, onPan: n, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: qs(e),
      onStart: qs(i),
      onMove: n,
      onEnd: (r, a) => {
        delete this.session, s && L.postRender(() => s(r, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = be(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ge = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Js(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const fe = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (A.test(t))
        t = parseFloat(t);
      else
        return t;
    const i = Js(t, e.target.x), n = Js(t, e.target.y);
    return `${i}% ${n}%`;
  }
}, af = {
  correct: (t, { treeScale: e, projectionDelta: i }) => {
    const n = t, s = St.parse(t);
    if (s.length > 5)
      return n;
    const r = St.createTransformer(t), a = typeof s[0] != "number" ? 1 : 0, o = i.x.scale * e.x, l = i.y.scale * e.y;
    s[0 + a] /= o, s[1 + a] /= l;
    const c = F(o, l, 0.5);
    return typeof s[2 + a] == "number" && (s[2 + a] /= c), typeof s[3 + a] == "number" && (s[3 + a] /= c), r(s);
  }
};
let wi = !1;
class rf extends Ca {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: i, switchLayoutGroup: n, layoutId: s } = this.props, { projection: r } = e;
    Cu(of), r && (i.group && i.group.add(r), n && n.register && s && n.register(r), wi && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), r.setOptions({
      ...r.options,
      onExitComplete: () => this.safeToRemove()
    })), Ge.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: i, visualElement: n, drag: s, isPresent: r } = this.props, { projection: a } = n;
    return a && (a.isPresent = r, wi = !0, s || e.layoutDependency !== i || i === void 0 || e.isPresent !== r ? a.willUpdate() : this.safeToRemove(), e.isPresent !== r && (r ? a.promote() : a.relegate() || L.postRender(() => {
      const o = a.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), En.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: i, switchLayoutGroup: n } = this.props, { projection: s } = e;
    wi = !0, s && (s.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(s), n && n.deregister && n.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function co(t) {
  const [e, i] = Pr(), n = K(on);
  return h(rf, { ...t, layoutGroup: n, switchLayoutGroup: K(Yr), isPresent: e, safeToRemove: i });
}
const of = {
  borderRadius: {
    ...fe,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: fe,
  borderTopRightRadius: fe,
  borderBottomLeftRadius: fe,
  borderBottomRightRadius: fe,
  boxShadow: af
};
function lf(t, e, i) {
  const n = tt(t) ? t : ie(t);
  return n.start(On("", n, e, i)), n.animation;
}
const cf = (t, e) => t.depth - e.depth;
class df {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    dn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    un(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(cf), this.isDirty = !1, this.children.forEach(e);
  }
}
function uf(t, e) {
  const i = nt.now(), n = ({ timestamp: s }) => {
    const r = s - i;
    r >= e && (Ct(n), t(r - e));
  };
  return L.setup(n, !0), () => Ct(n);
}
const uo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], hf = uo.length, Ks = (t) => typeof t == "string" ? parseFloat(t) : t, Qs = (t) => typeof t == "number" || A.test(t);
function ff(t, e, i, n, s, r) {
  s ? (t.opacity = F(0, i.opacity ?? 1, mf(n)), t.opacityExit = F(e.opacity ?? 1, 0, pf(n))) : r && (t.opacity = F(e.opacity ?? 1, i.opacity ?? 1, n));
  for (let a = 0; a < hf; a++) {
    const o = `border${uo[a]}Radius`;
    let l = ta(e, o), c = ta(i, o);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Qs(l) === Qs(c) ? (t[o] = Math.max(F(Ks(l), Ks(c), n), 0), (bt.test(c) || bt.test(l)) && (t[o] += "%")) : t[o] = c;
  }
  (e.rotate || i.rotate) && (t.rotate = F(e.rotate || 0, i.rotate || 0, n));
}
function ta(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const mf = /* @__PURE__ */ ho(0, 0.5, Ja), pf = /* @__PURE__ */ ho(0.5, 0.95, ft);
function ho(t, e, i) {
  return (n) => n < t ? 0 : n > e ? 1 : i(/* @__PURE__ */ Ne(t, e, n));
}
function ea(t, e) {
  t.min = e.min, t.max = e.max;
}
function dt(t, e) {
  ea(t.x, e.x), ea(t.y, e.y);
}
function ia(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function na(t, e, i, n, s) {
  return t -= e, t = Qe(t, 1 / i, n), s !== void 0 && (t = Qe(t, 1 / s, n)), t;
}
function gf(t, e = 0, i = 1, n = 0.5, s, r = t, a = t) {
  if (bt.test(e) && (e = parseFloat(e), e = F(a.min, a.max, e / 100) - a.min), typeof e != "number")
    return;
  let o = F(r.min, r.max, n);
  t === r && (o -= e), t.min = na(t.min, e, i, o, s), t.max = na(t.max, e, i, o, s);
}
function sa(t, e, [i, n, s], r, a) {
  gf(t, e[i], e[n], e[s], e.scale, r, a);
}
const yf = ["x", "scaleX", "originX"], xf = ["y", "scaleY", "originY"];
function aa(t, e, i, n) {
  sa(t.x, e, yf, i ? i.x : void 0, n ? n.x : void 0), sa(t.y, e, xf, i ? i.y : void 0, n ? n.y : void 0);
}
function ra(t) {
  return t.translate === 0 && t.scale === 1;
}
function fo(t) {
  return ra(t.x) && ra(t.y);
}
function oa(t, e) {
  return t.min === e.min && t.max === e.max;
}
function bf(t, e) {
  return oa(t.x, e.x) && oa(t.y, e.y);
}
function la(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function mo(t, e) {
  return la(t.x, e.x) && la(t.y, e.y);
}
function ca(t) {
  return et(t.x) / et(t.y);
}
function da(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class vf {
  constructor() {
    this.members = [];
  }
  add(e) {
    dn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (un(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const i = this.members[this.members.length - 1];
      i && this.promote(i);
    }
  }
  relegate(e) {
    const i = this.members.findIndex((s) => e === s);
    if (i === 0)
      return !1;
    let n;
    for (let s = i; s >= 0; s--) {
      const r = this.members[s];
      if (r.isPresent !== !1) {
        n = r;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, i) {
    const n = this.lead;
    if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
      n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, i && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: s } = e.options;
      s === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: i, resumingFrom: n } = e;
      i.onExitComplete && i.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function wf(t, e, i) {
  let n = "";
  const s = t.x.translate / e.x, r = t.y.translate / e.y, a = i?.z || 0;
  if ((s || r || a) && (n = `translate3d(${s}px, ${r}px, ${a}px) `), (e.x !== 1 || e.y !== 1) && (n += `scale(${1 / e.x}, ${1 / e.y}) `), i) {
    const { transformPerspective: c, rotate: u, rotateX: d, rotateY: f, skewX: p, skewY: g } = i;
    c && (n = `perspective(${c}px) ${n}`), u && (n += `rotate(${u}deg) `), d && (n += `rotateX(${d}deg) `), f && (n += `rotateY(${f}deg) `), p && (n += `skewX(${p}deg) `), g && (n += `skewY(${g}deg) `);
  }
  const o = t.x.scale * e.x, l = t.y.scale * e.y;
  return (o !== 1 || l !== 1) && (n += `scale(${o}, ${l})`), n || "none";
}
const Ni = ["", "X", "Y", "Z"], Nf = 1e3;
let Tf = 0;
function Ti(t, e, i, n) {
  const { latestValues: s } = e;
  s[t] && (i[t] = s[t], e.setStaticValue(t, 0), n && (n[t] = 0));
}
function po(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const i = Qr(e);
  if (window.MotionHasOptimisedAnimation(i, "transform")) {
    const { layout: s, layoutId: r } = t.options;
    window.MotionCancelOptimisedAnimation(i, "transform", L, !(s || r));
  }
  const { parent: n } = t;
  n && !n.hasCheckedOptimisedAppear && po(n);
}
function go({ attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: n, resetTransform: s }) {
  return class {
    constructor(a = {}, o = e?.()) {
      this.id = Tf++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Df), this.nodes.forEach(kf), this.nodes.forEach(Pf), this.nodes.forEach(Cf);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new df());
    }
    addEventListener(a, o) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new mn()), this.eventHandlers.get(a).add(o);
    }
    notifyListeners(a, ...o) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...o);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a) {
      if (this.instance)
        return;
      this.isSVG = kr(a) && !hu(a), this.instance = a;
      const { layoutId: o, layout: l, visualElement: c } = this.options;
      if (c && !c.current && c.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || o) && (this.isLayoutDirty = !0), t) {
        let u, d = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        L.read(() => {
          d = window.innerWidth;
        }), t(a, () => {
          const p = window.innerWidth;
          p !== d && (d = p, this.root.updateBlockedByResize = !0, u && u(), u = uf(f, 250), Ge.hasAnimatedSinceResize && (Ge.hasAnimatedSinceResize = !1, this.nodes.forEach(fa)));
        });
      }
      o && this.root.registerSharedNode(o, this), this.options.animate !== !1 && c && (o || l) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || c.getDefaultTransition() || Lf, { onLayoutAnimationStart: v, onLayoutAnimationComplete: y } = c.getProps(), b = !this.targetLayout || !mo(this.targetLayout, p), N = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || N || d && (b || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const w = {
            ...Cn(g, "layout"),
            onPlay: v,
            onComplete: y
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w), this.setAnimationOrigin(u, N);
        } else
          d || fa(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ct(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Hf), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && po(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ua);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ha);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Ef), this.nodes.forEach(Mf), this.nodes.forEach(Af)) : this.nodes.forEach(ha), this.clearAllSnapshots();
      const o = nt.now();
      J.delta = Nt(0, 1e3 / 60, o - J.timestamp), J.timestamp = o, J.isProcessing = !0, ui.update.process(J), ui.preRender.process(J), ui.render.process(J), J.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, En.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Sf), this.sharedNodes.forEach(Rf);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, L.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      L.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !et(this.snapshot.measuredBox.x) && !et(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = U(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (o = !1), o && this.instance) {
        const l = n(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: a,
          isRoot: l,
          offset: i(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !fo(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      a && this.instance && (o || Vt(this.latestValues) || u) && (s(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return a && (l = this.removeTransform(l)), If(l), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return U();
      const o = a.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Ff))) {
        const { scroll: c } = this.root;
        c && ($t(o.x, c.offset.x), $t(o.y, c.offset.y));
      }
      return o;
    }
    removeElementScroll(a) {
      const o = U();
      if (dt(o, a), this.scroll?.wasRoot)
        return o;
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        c !== this.root && u && d.layoutScroll && (u.wasRoot && dt(o, a), $t(o.x, u.offset.x), $t(o.y, u.offset.y));
      }
      return o;
    }
    applyTransform(a, o = !1) {
      const l = U();
      dt(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !o && u.options.layoutScroll && u.scroll && u !== u.root && qt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Vt(u.latestValues) && qt(l, u.latestValues);
      }
      return Vt(this.latestValues) && qt(l, this.latestValues), l;
    }
    removeTransform(a) {
      const o = U();
      dt(o, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Vt(c.latestValues))
          continue;
        _i(c.latestValues) && c.updateSnapshot();
        const u = U(), d = c.measurePageBox();
        dt(u, d), aa(o, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Vt(this.latestValues) && aa(o, this.latestValues), o;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== J.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== o;
      if (!(a || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (this.resolvedRelativeTargetAt = J.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = U(), this.relativeTargetOrigin = U(), we(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = U(), this.targetWithTransforms = U()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Yh(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : dt(this.target, this.layout.layoutBox), Xr(this.target, this.targetDelta)) : dt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = U(), this.relativeTargetOrigin = U(), we(this.relativeTargetOrigin, this.target, f.target), dt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _i(this.parent.latestValues) || Gr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const a = this.getLead(), o = !!this.resumingFrom || this !== a;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === J.timestamp && (l = !1), l)
        return;
      const { layout: c, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
        return;
      dt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      eh(this.layoutCorrected, this.treeScale, this.path, o), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = U());
      const { target: p } = a;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ia(this.prevProjectionDelta.x, this.projectionDelta.x), ia(this.prevProjectionDelta.y, this.projectionDelta.y)), ve(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !da(this.projectionDelta.x, this.prevProjectionDelta.x) || !da(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.visualElement?.scheduleRender(), a) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Jt(), this.projectionDelta = Jt(), this.projectionDeltaWithTransform = Jt();
    }
    setAnimationOrigin(a, o = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Jt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const f = U(), p = l ? l.source : void 0, g = this.layout ? this.layout.source : void 0, v = p !== g, y = this.getStack(), b = !y || y.members.length <= 1, N = !!(v && !b && this.options.crossfade === !0 && !this.path.some(jf));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (C) => {
        const T = C / 1e3;
        ma(d.x, a.x, T), ma(d.y, a.y, T), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (we(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Vf(this.relativeTarget, this.relativeTargetOrigin, f, T), w && bf(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = U()), dt(w, this.relativeTarget)), v && (this.animationValues = u, ff(u, c, this.latestValues, T, N, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ct(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = L.update(() => {
        Ge.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = ie(0)), this.currentAnimation = lf(this.motionValue, [0, 1e3], {
          ...a,
          velocity: 0,
          isSync: !0,
          onUpdate: (o) => {
            this.mixTargetDelta(o), a.onUpdate && a.onUpdate(o);
          },
          onStop: () => {
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Nf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: o, target: l, layout: c, latestValues: u } = a;
      if (!(!o || !l || !c)) {
        if (this !== a && this.layout && c && yo(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || U();
          const d = et(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const f = et(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + f;
        }
        dt(o, l), qt(o, u), ve(this.projectionDeltaWithTransform, this.layoutCorrected, o, u);
      }
    }
    registerSharedNode(a, o) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new vf()), this.sharedNodes.get(a).add(o);
      const c = o.options.initialPromotionConfig;
      o.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: a } = this.options;
      return a ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: o, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let o = !1;
      const { latestValues: l } = a;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (o = !0), !o)
        return;
      const c = {};
      l.z && Ti("z", a, c, this.animationValues);
      for (let u = 0; u < Ni.length; u++)
        Ti(`rotate${Ni[u]}`, a, c, this.animationValues), Ti(`skew${Ni[u]}`, a, c, this.animationValues);
      a.render();
      for (const u in c)
        a.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
      a.scheduleRender();
    }
    applyProjectionStyles(a, o) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        a.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, a.visibility = "", a.opacity = "", a.pointerEvents = We(o?.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId && (a.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, a.pointerEvents = We(o?.pointerEvents) || ""), this.hasProjected && !Vt(this.latestValues) && (a.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      a.visibility = "";
      const u = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let d = wf(this.projectionDeltaWithTransform, this.treeScale, u);
      l && (d = l(u, d)), a.transform = d;
      const { x: f, y: p } = this.projectionDelta;
      a.transformOrigin = `${f.origin * 100}% ${p.origin * 100}% 0`, c.animationValues ? a.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : a.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const g in De) {
        if (u[g] === void 0)
          continue;
        const { correct: v, applyTo: y, isCSSVariable: b } = De[g], N = d === "none" ? u[g] : v(u[g], c);
        if (y) {
          const w = y.length;
          for (let C = 0; C < w; C++)
            a[y[C]] = N;
        } else
          b ? this.options.visualElement.renderState.vars[g] = N : a[g] = N;
      }
      this.options.layoutId && (a.pointerEvents = c === this ? We(o?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => a.currentAnimation?.stop()), this.root.nodes.forEach(ua), this.root.sharedNodes.clear();
    }
  };
}
function Mf(t) {
  t.updateLayout();
}
function Af(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: i, measuredBox: n } = t.layout, { animationType: s } = t.options, r = e.source !== t.layout.source;
    s === "size" ? ut((u) => {
      const d = r ? e.measuredBox[u] : e.layoutBox[u], f = et(d);
      d.min = i[u].min, d.max = d.min + f;
    }) : yo(s, e.layoutBox, i) && ut((u) => {
      const d = r ? e.measuredBox[u] : e.layoutBox[u], f = et(i[u]);
      d.max = d.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[u].max = t.relativeTarget[u].min + f);
    });
    const a = Jt();
    ve(a, i, e.layoutBox);
    const o = Jt();
    r ? ve(o, t.applyTransform(n, !0), e.measuredBox) : ve(o, i, e.layoutBox);
    const l = !fo(a);
    let c = !1;
    if (!t.resumeFrom) {
      const u = t.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: d, layout: f } = u;
        if (d && f) {
          const p = U();
          we(p, e.layoutBox, d.layoutBox);
          const g = U();
          we(g, i, f.layoutBox), mo(p, g) || (c = !0), u.options.layoutRoot && (t.relativeTarget = g, t.relativeTargetOrigin = p, t.relativeParent = u);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: i,
      snapshot: e,
      delta: o,
      layoutDelta: a,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: c
    });
  } else if (t.isLead()) {
    const { onExitComplete: i } = t.options;
    i && i();
  }
  t.options.transition = void 0;
}
function Df(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Cf(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Sf(t) {
  t.clearSnapshot();
}
function ua(t) {
  t.clearMeasurements();
}
function ha(t) {
  t.isLayoutDirty = !1;
}
function Ef(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function fa(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function kf(t) {
  t.resolveTargetDelta();
}
function Pf(t) {
  t.calcProjection();
}
function Hf(t) {
  t.resetSkewAndRotation();
}
function Rf(t) {
  t.removeLeadSnapshot();
}
function ma(t, e, i) {
  t.translate = F(e.translate, 0, i), t.scale = F(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint;
}
function pa(t, e, i, n) {
  t.min = F(e.min, i.min, n), t.max = F(e.max, i.max, n);
}
function Vf(t, e, i, n) {
  pa(t.x, e.x, i.x, n), pa(t.y, e.y, i.y, n);
}
function jf(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Lf = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ga = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ya = ga("applewebkit/") && !ga("chrome/") ? Math.round : ft;
function xa(t) {
  t.min = ya(t.min), t.max = ya(t.max);
}
function If(t) {
  xa(t.x), xa(t.y);
}
function yo(t, e, i) {
  return t === "position" || t === "preserve-aspect" && !zh(ca(e), ca(i), 0.2);
}
function Ff(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Bf = go({
  attachResizeListener: (t, e) => Ce(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Mi = {
  current: void 0
}, xo = go({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Mi.current) {
      const t = new Bf({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Mi.current = t;
    }
    return Mi.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Of = {
  pan: {
    Feature: sf
  },
  drag: {
    Feature: nf,
    ProjectionNode: xo,
    MeasureLayout: co
  }
};
function ba(t, e, i) {
  const { props: n } = t;
  t.animationState && n.whileHover && t.animationState.setActive("whileHover", i === "Start");
  const s = "onHover" + i, r = n[s];
  r && L.postRender(() => r(e, Re(e)));
}
class _f extends Et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ou(e, (i, n) => (ba(this.node, n, "Start"), (s) => ba(this.node, s, "End"))));
  }
  unmount() {
  }
}
class zf extends Et {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ee(Ce(this.node.current, "focus", () => this.onFocus()), Ce(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function va(t, e, i) {
  const { props: n } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && n.whileTap && t.animationState.setActive("whileTap", i === "Start");
  const s = "onTap" + (i === "End" ? "" : i), r = n[s];
  r && L.postRender(() => r(e, Re(e)));
}
class Yf extends Et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = uu(e, (i, n) => (va(this.node, n, "Start"), (s, { success: r }) => va(this.node, s, r ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Zi = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Uf = (t) => {
  const e = Zi.get(t.target);
  e && e(t);
}, Wf = (t) => {
  t.forEach(Uf);
};
function Gf({ root: t, ...e }) {
  const i = t || document;
  Ai.has(i) || Ai.set(i, {});
  const n = Ai.get(i), s = JSON.stringify(e);
  return n[s] || (n[s] = new IntersectionObserver(Wf, { root: t, ...e })), n[s];
}
function Xf(t, e, i) {
  const n = Gf(e);
  return Zi.set(t, i), n.observe(t), () => {
    Zi.delete(t), n.unobserve(t);
  };
}
const Zf = {
  some: 0,
  all: 1
};
class $f extends Et {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: i, margin: n, amount: s = "some", once: r } = e, a = {
      root: i ? i.current : void 0,
      rootMargin: n,
      threshold: typeof s == "number" ? s : Zf[s]
    }, o = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, r && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return Xf(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: i } = this.node;
    ["amount", "margin", "root"].some(qf(e, i)) && this.startObserver();
  }
  unmount() {
  }
}
function qf({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (i) => t[i] !== e[i];
}
const Jf = {
  inView: {
    Feature: $f
  },
  tap: {
    Feature: Yf
  },
  focus: {
    Feature: zf
  },
  hover: {
    Feature: _f
  }
}, Kf = {
  layout: {
    ProjectionNode: xo,
    MeasureLayout: co
  }
}, Qf = {
  ...Lh,
  ...Jf,
  ...Of,
  ...Kf
}, S = /* @__PURE__ */ Ku(Qf, uh);
function tm({ language: t }) {
  const e = {
    en: {
      tagline: "Authentic Indian Food, Just Like Home",
      subtitle: "Experience the warmth of traditional Indian cuisine prepared with love and family recipes",
      reserveBtn: "Reserve a Table",
      orderBtn: "Order Online"
    },
    hi: {
      tagline: "घर जैसा असली भारतीय खाना",
      subtitle: "प्यार और परिवार के व्यंजनों से तैयार पारंपरिक भारतीय व्यंजनों की गर्मजोशी का अनुभव करें",
      reserveBtn: "टेबल बुक करें",
      orderBtn: "ऑनलाइन ऑर्डर"
    }
  }, i = () => {
    const n = document.getElementById("reservations");
    n && n.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ m("section", { id: "hero", className: "relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ m("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ h(
        "img",
        {
          src: "https://images.unsplash.com/photo-1764699486769-fc9a8b03130a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwxfHx8fDE3NjgxNDM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Traditional Indian Thali",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ h("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" })
    ] }),
    /* @__PURE__ */ h("div", { className: "absolute inset-0 z-0 opacity-10", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4A261' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }),
    /* @__PURE__ */ m("div", { className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ h("h1", { className: "text-5xl sm:text-6xl lg:text-7xl text-white mb-6", style: { fontFamily: "'Playfair Display', serif" }, children: e[t].tagline }),
            /* @__PURE__ */ h("p", { className: "text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto", children: e[t].subtitle })
          ]
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3 },
          className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
          children: [
            /* @__PURE__ */ m(
              "button",
              {
                onClick: i,
                className: "group px-8 py-4 bg-[#D4705C] text-white rounded-lg hover:bg-[#B33F2A] transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105",
                children: [
                  /* @__PURE__ */ h(Va, { className: "w-5 h-5" }),
                  /* @__PURE__ */ h("span", { className: "font-medium", children: e[t].reserveBtn })
                ]
              }
            ),
            /* @__PURE__ */ m("button", { className: "group px-8 py-4 bg-white text-[#2D4A3E] rounded-lg hover:bg-[#F4A261] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105", children: [
              /* @__PURE__ */ h(Fa, { className: "w-5 h-5" }),
              /* @__PURE__ */ h("span", { className: "font-medium", children: e[t].orderBtn })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ h(
        S.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 1 },
          className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
          children: /* @__PURE__ */ h("div", { className: "w-6 h-10 border-2 border-white/50 rounded-full flex justify-center", children: /* @__PURE__ */ h(
            S.div,
            {
              animate: { y: [0, 12, 0] },
              transition: { duration: 1.5, repeat: 1 / 0 },
              className: "w-1.5 h-1.5 bg-white rounded-full mt-2"
            }
          ) })
        }
      )
    ] })
  ] });
}
const bo = [
  // VEGETARIAN (8 items)
  {
    id: 1,
    name: "Paneer Tikka",
    nameHi: "पनीर टिक्का",
    description: "Cottage cheese marinated in spices and grilled to perfection",
    descriptionHi: "मसालों में मैरीनेट करके ग्रिल किया हुआ पनीर",
    price: 350,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbnxlbnwxfHx8fDE3NjgxMTk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 2,
    name: "Dal Makhani",
    nameHi: "दाल मखनी",
    description: "Creamy black lentils slow-cooked with butter and cream",
    descriptionHi: "मक्खन और क्रीम के साथ धीमी आंच पर पकाई गई काली दाल",
    price: 280,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1640542509430-f529fdfce835?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBtYWtoYW5pJTIwY3Vycnl8ZW58MXx8fHwxNzY4MDI2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 3,
    name: "Samosa (2 pcs)",
    nameHi: "समोसा (2 पीस)",
    description: "Crispy pastry filled with spiced potatoes and peas",
    descriptionHi: "मसालेदार आलू और मटर से भरी कुरकुरी समोसा",
    price: 80,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1697155836252-d7f969108b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW4lMjBzbmFja3xlbnwxfHx8fDE3NjgxMzIxOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 4,
    name: "Palak Paneer",
    nameHi: "पालक पनीर",
    description: "Cottage cheese cubes in creamy spinach gravy",
    descriptionHi: "क्रीमी पालक की ग्रेवी में पनीर के टुकड़े",
    price: 320,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzY4MTQzNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 5,
    name: "Chole Bhature",
    nameHi: "छोले भटूरे",
    description: "Spicy chickpeas served with fluffy fried bread",
    descriptionHi: "मसालेदार छोले के साथ तली हुई फूली रोटी",
    price: 220,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1626132647523-66f71c8e1d88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGJoYXR1cmUlMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 6,
    name: "Veg Biryani",
    nameHi: "वेज बिरयानी",
    description: "Fragrant basmati rice cooked with seasonal vegetables",
    descriptionHi: "मौसमी सब्जियों के साथ पकाए गए सुगंधित बासमती चावल",
    price: 320,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1642821373181-696a54913e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFyaWFuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NjgxNDM1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 7,
    name: "Malai Kofta",
    nameHi: "मलाई कोफ्ता",
    description: "Fried potato and paneer dumplings in creamy tomato sauce",
    descriptionHi: "क्रीमी टमाटर की चटनी में तले हुए आलू और पनीर के कोफ्ते",
    price: 340,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxhaSUyMGtvZnRhJTIwaW5kaWFuJTIwZm9vZHxlbnwxfHx8fDE3NjgxNDM1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 8,
    name: "Rajma Chawal",
    nameHi: "राजमा चावल",
    description: "Red kidney beans curry served with steamed rice",
    descriptionHi: "उबले चावल के साथ राजमा की करी",
    price: 240,
    category: "vegetarian",
    imageURL: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWptYSUyMGNoYXdhbCUyMGluZGlhbiUyMGZvb2R8ZW58MXx8fHwxNzY4MTQzNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  // NON-VEGETARIAN (9 items)
  {
    id: 9,
    name: "Butter Chicken",
    nameHi: "बटर चिकन",
    description: "Tender chicken in rich tomato and butter gravy",
    descriptionHi: "समृद्ध टमाटर और मक्खन की ग्रेवी में नरम चिकन",
    price: 420,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1714799263303-29e7d638578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwaW5kaWFuJTIwZm9vZHxlbnwxfHx8fDE3NjgxNDM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 10,
    name: "Chicken Biryani",
    nameHi: "चिकन बिरयानी",
    description: "Aromatic basmati rice layered with spiced chicken",
    descriptionHi: "मसालेदार चिकन के साथ सुगंधित बासमती चावल",
    price: 450,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjgwMzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 11,
    name: "Chicken Curry",
    nameHi: "चिकन करी",
    description: "Home-style chicken curry with authentic spices",
    descriptionHi: "प्रामाणिक मसालों के साथ घर की शैली में चिकन करी",
    price: 380,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY3VycnklMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 12,
    name: "Mutton Rogan Josh",
    nameHi: "मटन रोगन जोश",
    description: "Kashmiri-style mutton curry with aromatic spices",
    descriptionHi: "सुगंधित मसालों के साथ कश्मीरी शैली का मटन करी",
    price: 520,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NjgxNDM1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 13,
    name: "Fish Curry",
    nameHi: "मछली करी",
    description: "Bengali-style fish cooked in mustard gravy",
    descriptionHi: "सरसों की ग्रेवी में बंगाली शैली में पकी मछली",
    price: 440,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwY3VycnklMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 14,
    name: "Chicken Korma",
    nameHi: "चिकन कोरमा",
    description: "Chicken in rich cashew and cream gravy",
    descriptionHi: "काजू और क्रीम की समृद्ध ग्रेवी में चिकन",
    price: 400,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1585937421612-70a008356ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwa29ybWElMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 15,
    name: "Chicken Tikka Masala",
    nameHi: "चिकन टिक्का मसाला",
    description: "Grilled chicken in spiced tomato and cream sauce",
    descriptionHi: "मसालेदार टमाटर और क्रीम सॉस में ग्रिल्ड चिकन",
    price: 430,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGlra2ElMjBtYXNhbGF8ZW58MXx8fHwxNzY4MTQzNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 16,
    name: "Egg Curry",
    nameHi: "अंडा करी",
    description: "Boiled eggs in spiced onion-tomato gravy",
    descriptionHi: "मसालेदार प्याज-टमाटर की ग्रेवी में उबले अंडे",
    price: 220,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1576336497337-22cb2f9cc8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2clMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NjgxNDM1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 17,
    name: "Prawn Masala",
    nameHi: "झींगा मसाला",
    description: "Succulent prawns in coastal spice blend",
    descriptionHi: "तटीय मसाला मिश्रण में रसीले झींगे",
    price: 580,
    category: "nonveg",
    imageURL: "https://images.unsplash.com/photo-1633945274309-2c8a9ab00f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF3biUyMGN1cnJ5JTIwaW5kaWFufGVufDF8fHx8MTc2ODE0MzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 3,
    createdAt: "2025-01-01T00:00:00Z"
  },
  // TANDOOR SPECIALS (6 items)
  {
    id: 18,
    name: "Tandoori Chicken",
    nameHi: "तंदूरी चिकन",
    description: "Chicken marinated in yogurt and spices, cooked in clay oven",
    descriptionHi: "दही और मसालों में मैरीनेट करके तंदूर में पकाया गया चिकन",
    price: 480,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW58ZW58MXx8fHwxNzY4MTMwMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 19,
    name: "Tandoori Paneer Tikka",
    nameHi: "तंदूरी पनीर टिक्का",
    description: "Clay oven roasted cottage cheese with bell peppers",
    descriptionHi: "शिमला मिर्च के साथ तंदूर में भुना हुआ पनीर",
    price: 380,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMHBhbmVlciUyMGluZGlhbnxlbnwxfHx8fDE3NjgxNDM1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 20,
    name: "Chicken Seekh Kebab",
    nameHi: "चिकन सीख कबाब",
    description: "Minced chicken skewers with aromatic spices",
    descriptionHi: "सुगंधित मसालों के साथ कीमा चिकन कबाब",
    price: 420,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1607623488992-ee94e428e532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVraCUyMGtlYmFiJTIwaW5kaWFufGVufDF8fHx8MTc2ODE0MzU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 21,
    name: "Tandoori Fish",
    nameHi: "तंदूरी मछली",
    description: "Marinated fish fillet grilled in tandoor",
    descriptionHi: "तंदूर में ग्रिल किया हुआ मैरीनेट फिश फिलेट",
    price: 520,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGZpc2glMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 22,
    name: "Malai Chicken Tikka",
    nameHi: "मलाई चिकन टिक्का",
    description: "Creamy chicken tikka with cashew and cheese",
    descriptionHi: "काजू और पनीर के साथ क्रीमी चिकन टिक्का",
    price: 460,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxhaSUyMGNoaWNrZW4lMjB0aWtrYXxlbnwxfHx8fDE3NjgxNDM1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 23,
    name: "Tandoori Prawns",
    nameHi: "तंदूरी झींगा",
    description: "Jumbo prawns marinated and grilled",
    descriptionHi: "मैरीनेट करके ग्रिल किए गए बड़े झींगे",
    price: 620,
    category: "tandoor",
    imageURL: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMHByYXducyUyMGluZGlhbnxlbnwxfHx8fDE3NjgxNDM1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 2,
    createdAt: "2025-01-01T00:00:00Z"
  },
  // BREADS (6 items)
  {
    id: 24,
    name: "Butter Naan",
    nameHi: "बटर नान",
    description: "Soft leavened bread brushed with butter",
    descriptionHi: "मक्खन लगी नरम नान रोटी",
    price: 60,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzY4MTMyMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 25,
    name: "Garlic Naan",
    nameHi: "लहसुन नान",
    description: "Naan bread topped with garlic and coriander",
    descriptionHi: "लहसुन और धनिया से टॉप किया गया नान",
    price: 70,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1601050690597-df0568f70950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJsaWMlMjBuYWFuJTIwaW5kaWFufGVufDF8fHx8MTc2ODE0MzU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 26,
    name: "Tandoori Roti",
    nameHi: "तंदूरी रोटी",
    description: "Whole wheat bread cooked in tandoor",
    descriptionHi: "तंदूर में पकी साबुत गेहूं की रोटी",
    price: 40,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1591868210652-0b5b9e499fbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMHJvdGklMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 27,
    name: "Laccha Paratha",
    nameHi: "लच्छा पराठा",
    description: "Layered whole wheat flatbread",
    descriptionHi: "परतदार साबुत गेहूं का पराठा",
    price: 55,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1585937421612-70a008356ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWNoYSUyMHBhcmF0aGElMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 28,
    name: "Kashmiri Naan",
    nameHi: "कश्मीरी नान",
    description: "Sweet naan stuffed with dry fruits and nuts",
    descriptionHi: "सूखे मेवे और नट्स से भरी मीठी नान",
    price: 90,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXNobWlyaSUyMG5hYW4lMjBpbmRpYW58ZW58MXx8fHwxNzY4MTQzNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 29,
    name: "Stuffed Kulcha",
    nameHi: "स्टफ्ड कुलचा",
    description: "Leavened bread stuffed with spiced potato filling",
    descriptionHi: "मसालेदार आलू से भरी हुई रोटी",
    price: 75,
    category: "breads",
    imageURL: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWxjaGElMjBpbmRpYW4lMjBicmVhZHxlbnwxfHx8fDE3NjgxNDM1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 1,
    createdAt: "2025-01-01T00:00:00Z"
  },
  // DESSERTS (6 items)
  {
    id: 30,
    name: "Gulab Jamun",
    nameHi: "गुलाब जामुन",
    description: "Soft milk dumplings in rose-flavored sugar syrup",
    descriptionHi: "गुलाब की सुगंध वाली चाशनी में नरम मिल्क बॉल्स",
    price: 120,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwZ3VsYWIlMjBqYW11bnxlbnwxfHx8fDE3NjgxMjA1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 31,
    name: "Kulfi",
    nameHi: "कुल्फी",
    description: "Traditional Indian ice cream with cardamom and pistachios",
    descriptionHi: "इलायची और पिस्ता के साथ पारंपरिक भारतीय आइसक्रीम",
    price: 100,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1696454599025-42b5089f58dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBrdWxmaSUyMGRlc3NlcnR8ZW58MXx8fHwxNzY4MTQzNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 32,
    name: "Rasmalai",
    nameHi: "रसमलाई",
    description: "Soft cheese patties soaked in sweetened milk",
    descriptionHi: "मीठे दूध में भिगोए गए नरम पनीर के पैटीज़",
    price: 140,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1640799407354-2f7aa15b51bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNtYWxhaSUyMGluZGlhbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzY4MTQzNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 33,
    name: "Gajar Halwa",
    nameHi: "गाजर का हलवा",
    description: "Carrot pudding with milk, ghee, and nuts",
    descriptionHi: "दूध, घी और नट्स के साथ गाजर की मिठाई",
    price: 130,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1631788069079-4a49d60d53de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWphciUyMGhhbHdhJTIwaW5kaWFufGVufDF8fHx8MTc2ODE0MzU4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 34,
    name: "Kheer",
    nameHi: "खीर",
    description: "Creamy rice pudding with saffron and nuts",
    descriptionHi: "केसर और नट्स के साथ क्रीमी चावल की खीर",
    price: 110,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1617196034796-50f054398748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraGVlciUyMGluZGlhbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzY4MTQzNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    isPopular: !0,
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    id: 35,
    name: "Jalebi",
    nameHi: "जलेबी",
    description: "Crispy sweet spirals soaked in sugar syrup",
    descriptionHi: "चीनी की चाशनी में भिगोए गए कुरकुरे मीठे सर्पिल",
    price: 90,
    category: "desserts",
    imageURL: "https://images.unsplash.com/photo-1639744091680-9050cb0fa187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYWxlYmklMjBpbmRpYW4lMjBzd2VldHxlbnwxfHx8fDE3NjgxNDM1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    availability: !0,
    spiceLevel: 0,
    createdAt: "2025-01-01T00:00:00Z"
  }
], em = () => bo.filter((t) => t.availability), im = (t) => bo.filter((e) => e.category === t && e.availability);
function nm({ language: t }) {
  const [e, i] = I("vegetarian"), { addToCart: n } = ti();
  em();
  const s = im(e), r = (l) => {
    n({
      menuItemId: l.id,
      name: l.name,
      nameHi: l.nameHi,
      price: l.price,
      quantity: 1,
      image: l.imageURL
    }), il.success(
      t === "en" ? `${l.name} added to cart!` : `${l.nameHi} कार्ट में जोड़ा गया!`,
      {
        duration: 2e3,
        position: "bottom-center"
      }
    );
  }, a = {
    en: [
      { id: "vegetarian", name: "Vegetarian", icon: os },
      { id: "nonveg", name: "Non-Vegetarian", icon: as },
      { id: "tandoor", name: "Tandoor Specials", icon: di },
      { id: "breads", name: "Breads", icon: ss },
      { id: "desserts", name: "Desserts", icon: ns }
    ],
    hi: [
      { id: "vegetarian", name: "शाकाहारी", icon: os },
      { id: "nonveg", name: "मांसाहारी", icon: as },
      { id: "tandoor", name: "तंदूर विशेष", icon: di },
      { id: "breads", name: "रोटी", icon: ss },
      { id: "desserts", name: "मिठाई", icon: ns }
    ]
  }, o = {
    en: {
      title: "Our Menu",
      subtitle: "Explore authentic flavors crafted with traditional recipes"
    },
    hi: {
      title: "हमारा मेनू",
      subtitle: "पारंपरिक व्यंजनों के साथ बनाए गए प्रामाणिक स्वाद का अन्वेषण करें"
    }
  };
  return /* @__PURE__ */ h("section", { id: "menu", className: "py-20 bg-white", children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: !0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ h("h2", { className: "text-4xl md:text-5xl text-[#2D4A3E] mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: o[t].title }),
          /* @__PURE__ */ h("p", { className: "text-lg text-[#6B5D52] max-w-2xl mx-auto", children: o[t].subtitle })
        ]
      }
    ),
    /* @__PURE__ */ h("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: a[t].map((l, c) => {
      const u = l.icon;
      return /* @__PURE__ */ m(
        S.button,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: c * 0.1 },
          viewport: { once: !0 },
          onClick: () => i(l.id),
          className: `flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${e === l.id ? "bg-[#D4705C] text-white shadow-lg scale-105" : "bg-[#F8F4E8] text-[#2D4A3E] hover:bg-[#E8DCC8]"}`,
          children: [
            /* @__PURE__ */ h(u, { className: "w-5 h-5" }),
            /* @__PURE__ */ h("span", { className: "font-medium", children: l.name })
          ]
        },
        l.id
      );
    }) }),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: s.map((l, c) => /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: c * 0.1 },
        viewport: { once: !0 },
        className: "group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer",
        children: [
          /* @__PURE__ */ m("div", { className: "relative h-56 overflow-hidden", children: [
            /* @__PURE__ */ h(
              "img",
              {
                src: l.imageURL,
                alt: t === "en" ? l.name : l.nameHi,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              }
            ),
            l.spiceLevel && l.spiceLevel > 0 && /* @__PURE__ */ m("div", { className: "absolute top-4 right-4 bg-[#B33F2A] text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm", children: [
              /* @__PURE__ */ h(di, { className: "w-4 h-4" }),
              /* @__PURE__ */ h("span", { children: t === "en" ? "Spicy" : "तीखा" })
            ] }),
            l.isPopular && /* @__PURE__ */ h("div", { className: "absolute top-4 left-4 bg-[#F4A261] text-white px-3 py-1 rounded-full text-sm font-medium", children: t === "en" ? "Popular" : "लोकप्रिय" }),
            /* @__PURE__ */ h("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
          ] }),
          /* @__PURE__ */ m("div", { className: "p-6", children: [
            /* @__PURE__ */ m("div", { className: "flex justify-between items-start mb-3", children: [
              /* @__PURE__ */ h("h3", { className: "text-xl text-[#2D4A3E]", style: { fontFamily: "'Playfair Display', serif" }, children: t === "en" ? l.name : l.nameHi }),
              /* @__PURE__ */ m("span", { className: "text-lg text-[#D4705C] font-semibold", children: [
                "₹",
                l.price
              ] })
            ] }),
            /* @__PURE__ */ h("p", { className: "text-[#6B5D52] text-sm leading-relaxed mb-4", children: t === "en" ? l.description : l.descriptionHi }),
            /* @__PURE__ */ m(
              S.button,
              {
                onClick: () => r(l),
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                className: "w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#D4705C] text-white rounded-lg font-semibold hover:bg-[#B33F2A] transition-all duration-300 shadow-md hover:shadow-lg",
                children: [
                  /* @__PURE__ */ h(Ia, { className: "w-5 h-5" }),
                  /* @__PURE__ */ h("span", { children: t === "en" ? "Add to Cart" : "कार्ट में जोड़ें" })
                ]
              }
            )
          ] })
        ]
      },
      l.id
    )) })
  ] }) });
}
const Xe = {
  name: {
    en: "Naina Restaurant",
    hi: "नैना रेस्टोरेंट"
  },
  tagline: {
    en: "Taste of Home",
    hi: "घर का स्वाद"
  },
  mission: {
    en: "Bringing authentic Indian home-style cooking to your table with warmth, tradition, and love.",
    hi: "गर्मजोशी, परंपरा और प्यार के साथ प्रामाणिक भारतीय घर का खाना आपकी मेज पर लाना।"
  },
  story: {
    en: "Founded in 2020, Naina Restaurant was born from a simple dream: to recreate the warmth and flavors of an Indian home kitchen. Our founder, Mrs. Naina Sharma, grew up in a bustling joint family in Gurugram where the kitchen was the heart of the home. Every recipe we serve carries the essence of family gatherings, festive celebrations, and everyday meals shared with love. We believe that food is more than sustenance—it's a celebration of culture, memories, and togetherness.",
    hi: "2020 में स्थापित, नैना रेस्टोरेंट एक सरल सपने से जन्मा: भारतीय घर की रसोई की गर्मजोशी और स्वाद को फिर से बनाना। हमारी संस्थापक, श्रीमती नैना शर्मा, गुरुग्राम में एक संयुक्त परिवार में पली-बढ़ीं जहां रसोई घर का दिल थी। हम जो भी व्यंजन परोसते हैं उसमें पारिवारिक समारोहों, उत्सवों और प्यार के साथ साझा किए गए रोजमर्रा के भोजन का सार है।"
  },
  address: {
    street: "Killa No. 12, Main Dhanwapur Road, Near Lord Krishna Convent School",
    city: "Sector 104, Gurugram",
    state: "Haryana",
    pincode: "122001",
    country: "India"
  },
  contact: {
    phone: "+91 98765 43210",
    email: "hello@nainarestaurant.com",
    whatsapp: "+91 98765 43210"
  },
  location: {
    lat: 28.4019,
    lng: 77.0758,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8719389!2d77.0736!3d28.4019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sSector%20104%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
  },
  socialMedia: {
    facebook: "https://facebook.com/nainarestaurant",
    instagram: "https://instagram.com/nainarestaurant",
    twitter: "https://twitter.com/nainarestaurant",
    youtube: "https://youtube.com/@nainarestaurant"
  },
  hours: {
    weekdays: {
      en: "11:00 AM - 11:00 PM",
      hi: "सुबह 11:00 - रात 11:00"
    },
    weekends: {
      en: "11:00 AM - 12:00 AM",
      hi: "सुबह 11:00 - रात 12:00"
    }
  }
}, sm = () => Xe, am = () => ({
  name: Xe.name,
  mission: Xe.mission,
  story: Xe.story
});
function rm({ language: t }) {
  const e = am(), i = {
    en: {
      title: "Our Story",
      subtitle: "Where Every Meal Feels Like Home",
      values: [
        {
          icon: rs,
          title: "Made with Love",
          text: "Every dish prepared with care and authenticity"
        },
        {
          icon: Ci,
          title: "Family Recipes",
          text: "Traditional recipes passed down generations"
        },
        {
          icon: is,
          title: "Quality Ingredients",
          text: "Fresh, authentic ingredients sourced daily"
        },
        {
          icon: te,
          title: "Time-Honored Methods",
          text: "Traditional cooking techniques preserved"
        }
      ]
    },
    hi: {
      title: "हमारी कहानी",
      subtitle: "जहां हर भोजन घर जैसा लगता है",
      values: [
        {
          icon: rs,
          title: "प्यार से बना",
          text: "हर व्यंजन देखभाल और प्रामाणिकता के साथ"
        },
        {
          icon: Ci,
          title: "पारिवारिक व्यंजन",
          text: "पीढ़ियों से चली आ रही पारंपरिक व्यंजन"
        },
        {
          icon: is,
          title: "गुणवत्ता सामग्री",
          text: "रोजाना ताजी प्रामाणिक सामग्री"
        },
        {
          icon: te,
          title: "पारंपरिक तरीके",
          text: "पारंपरिक खाना पकाने की तकनीक संरक्षित"
        }
      ]
    }
  };
  return /* @__PURE__ */ h("section", { id: "about", className: "py-20 bg-[#F8F4E8]", children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: !0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ h(
            "h2",
            {
              className: "text-4xl md:text-5xl text-[#2D4A3E] mb-4",
              style: { fontFamily: "'Playfair Display', serif" },
              children: i[t].title
            }
          ),
          /* @__PURE__ */ h(
            "p",
            {
              className: "text-2xl text-[#D4705C] mb-8",
              style: { fontFamily: "'Playfair Display', serif" },
              children: i[t].subtitle
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ m("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16", children: [
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ h("div", { className: "relative rounded-2xl overflow-hidden shadow-xl h-80", children: /* @__PURE__ */ h(
              "img",
              {
                src: "https://images.unsplash.com/photo-1761051970492-0d54d728e3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBjb29raW5nfGVufDF8fHx8MTc2ODE0MzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
                alt: "Family cooking",
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ m("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ h("div", { className: "relative rounded-xl overflow-hidden shadow-lg h-48", children: /* @__PURE__ */ h(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzcGljZXMlMjBjb29raW5nfGVufDF8fHx8MTc2ODAzMjE2MXww&ixlib=rb-4.1.0&q=80&w=1080",
                  alt: "Indian spices",
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ h("div", { className: "relative rounded-xl overflow-hidden shadow-lg h-48", children: /* @__PURE__ */ h(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MTEzNjU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
                  alt: "Restaurant interior",
                  className: "w-full h-full object-cover"
                }
              ) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          className: "flex flex-col justify-center",
          children: [
            /* @__PURE__ */ h("p", { className: "text-lg text-[#2D2824] mb-6 leading-relaxed", children: e.story[t] }),
            /* @__PURE__ */ m(
              "p",
              {
                className: "text-lg text-[#D4705C] font-medium leading-relaxed",
                style: {
                  fontFamily: "'Playfair Display', serif"
                },
                children: [
                  '"',
                  e.mission[t],
                  '"'
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ h("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: i[t].values.map((n, s) => {
      const r = n.icon;
      return /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: {
            duration: 0.5,
            delay: s * 0.1
          },
          viewport: { once: !0 },
          className: "text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300",
          children: [
            /* @__PURE__ */ h("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-[#D4705C] text-white rounded-full mb-4", children: /* @__PURE__ */ h(r, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ h(
              "h3",
              {
                className: "text-xl text-[#2D4A3E] mb-2",
                style: {
                  fontFamily: "'Playfair Display', serif"
                },
                children: n.title
              }
            ),
            /* @__PURE__ */ h("p", { className: "text-[#6B5D52] text-sm", children: n.text })
          ]
        },
        s
      );
    }) })
  ] }) });
}
function Kt() {
  return Kt = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, Kt.apply(this, arguments);
}
function om(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, $i(t, e);
}
function $i(t, e) {
  return $i = Object.setPrototypeOf || function(n, s) {
    return n.__proto__ = s, n;
  }, $i(t, e);
}
var _n = /* @__PURE__ */ (function(t) {
  om(e, t);
  function e() {
    var n;
    return n = t.call(this) || this, n.state = {
      columns: [],
      childRefs: [],
      hasDistributed: !1
    }, n;
  }
  var i = e.prototype;
  return i.componentDidUpdate = function() {
    !this.state.hasDistributed && !this.props.sequential && this.distributeChildren();
  }, e.getDerivedStateFromProps = function(s, r) {
    var a = s.children, o = s.columnsCount, l = o !== r.columns.length;
    return r && a === r.children && !l ? null : Kt({}, e.getEqualCountColumns(a, o), {
      children: a,
      hasDistributed: !1
    });
  }, i.shouldComponentUpdate = function(s) {
    return s.children !== this.state.children || s.columnsCount !== this.props.columnsCount;
  }, i.distributeChildren = function() {
    var s = this, r = this.props, a = r.children, o = r.columnsCount, l = Array(o).fill(0), c = this.state.childRefs.every(function(f) {
      return f.current.getBoundingClientRect().height;
    });
    if (c) {
      var u = Array.from({
        length: o
      }, function() {
        return [];
      }), d = 0;
      x.Children.forEach(a, function(f) {
        if (f && x.isValidElement(f)) {
          var p = s.state.childRefs[d].current.getBoundingClientRect().height, g = l.indexOf(Math.min.apply(Math, l));
          l[g] += p, u[g].push(f), d++;
        }
      }), this.setState(function(f) {
        return Kt({}, f, {
          columns: u,
          hasDistributed: !0
        });
      });
    }
  }, e.getEqualCountColumns = function(s, r) {
    var a = Array.from({
      length: r
    }, function() {
      return [];
    }), o = 0, l = [];
    return x.Children.forEach(s, function(c) {
      if (c && x.isValidElement(c)) {
        var u = x.createRef();
        l.push(u), a[o % r].push(
          /* @__PURE__ */ x.createElement("div", {
            style: {
              display: "flex",
              justifyContent: "stretch"
            },
            key: o,
            ref: u
          }, c)
          // React.cloneElement(child, {ref}) // cannot attach refs to functional components without forwardRef
        ), o++;
      }
    }), {
      columns: a,
      childRefs: l
    };
  }, i.renderColumns = function() {
    var s = this.props, r = s.gutter, a = s.itemTag, o = s.itemStyle;
    return this.state.columns.map(function(l, c) {
      return x.createElement(a, {
        key: c,
        style: Kt({
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignContent: "stretch",
          flex: 1,
          width: 0,
          gap: r
        }, o)
      }, l.map(function(u) {
        return u;
      }));
    });
  }, i.render = function() {
    var s = this.props, r = s.gutter, a = s.className, o = s.style, l = s.containerTag;
    return x.createElement(l, {
      style: Kt({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "stretch",
        boxSizing: "border-box",
        width: "100%",
        gap: r
      }, o),
      className: a
    }, this.renderColumns());
  }, e;
})(x.Component);
_n.propTypes = {};
_n.defaultProps = {
  columnsCount: 3,
  gutter: "0",
  className: null,
  style: {},
  containerTag: "div",
  itemTag: "div",
  itemStyle: {},
  sequential: !1
};
const qi = "naina_restaurant_gallery", Ji = [
  // Food Images
  {
    imageId: "GAL-001",
    imageURL: "https://images.unsplash.com/photo-1585937421612-70a008356ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjgxNDM1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Traditional Indian Thali",
    captionHi: "पारंपरिक भारतीय थाली",
    category: "Food",
    createdAt: "2025-01-01T00:00:00Z"
  },
  {
    imageId: "GAL-002",
    imageURL: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZXNzZXJ0JTIwZ3VsYWIlMjBqYW11bnxlbnwxfHx8fDE3NjgxMjA1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Fresh Gulab Jamun",
    captionHi: "ताज़ा गुलाब जामुन",
    category: "Food",
    createdAt: "2025-01-02T00:00:00Z"
  },
  {
    imageId: "GAL-003",
    imageURL: "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW58ZW58MXx8fHwxNzY4MTMwMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Tandoori Specialties",
    captionHi: "तंदूरी विशेषताएं",
    category: "Food",
    createdAt: "2025-01-03T00:00:00Z"
  },
  {
    imageId: "GAL-004",
    imageURL: "https://images.unsplash.com/photo-1666190092689-e3968aa0c32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjgwMzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Aromatic Biryani",
    captionHi: "सुगंधित बिरयानी",
    category: "Food",
    createdAt: "2025-01-04T00:00:00Z"
  },
  {
    imageId: "GAL-005",
    imageURL: "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMGluZGlhbnxlbnwxfHx8fDE3NjgxMTk4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Paneer Tikka Platter",
    captionHi: "पनीर टिक्का प्लेटर",
    category: "Food",
    createdAt: "2025-01-05T00:00:00Z"
  },
  {
    imageId: "GAL-006",
    imageURL: "https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWQlMjBpbmRpYW58ZW58MXx8fHwxNzY4MTMyMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Freshly Baked Naans",
    captionHi: "ताज़ा पकी नान",
    category: "Food",
    createdAt: "2025-01-06T00:00:00Z"
  },
  // Interior Images
  {
    imageId: "GAL-007",
    imageURL: "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjB3YXJtfGVufDF8fHx8MTc2ODE0MzU4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Cozy Dining Area",
    captionHi: "आरामदायक भोजन क्षेत्र",
    category: "Interior",
    createdAt: "2025-01-07T00:00:00Z"
  },
  {
    imageId: "GAL-008",
    imageURL: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MTQzNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Elegant Seating",
    captionHi: "सुरुचिपूर्ण बैठने की जगह",
    category: "Interior",
    createdAt: "2025-01-08T00:00:00Z"
  },
  {
    imageId: "GAL-009",
    imageURL: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdGFibGUlMjBzZXR0aW5nfGVufDF8fHx8MTc2ODE0MzU5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Table Settings",
    captionHi: "मेज की व्यवस्था",
    category: "Interior",
    createdAt: "2025-01-09T00:00:00Z"
  },
  // Customer/Events Images
  {
    imageId: "GAL-010",
    imageURL: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGluaW5nJTIwZmFtaWx5fGVufDF8fHx8MTc2ODE0MzU5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Happy Diners",
    captionHi: "खुश भोजनकर्ता",
    category: "Customers",
    createdAt: "2025-01-10T00:00:00Z"
  },
  {
    imageId: "GAL-011",
    imageURL: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBkaW5uZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2ODE0MzU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Family Celebrations",
    captionHi: "पारिवारिक समारोह",
    category: "Events",
    createdAt: "2025-01-11T00:00:00Z"
  },
  {
    imageId: "GAL-012",
    imageURL: "https://images.unsplash.com/photo-1714799263303-29e7d638578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwaW5kaWFuJTIwZm9vZHxlbnwxfHx8fDE3NjgxNDM1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    caption: "Signature Butter Chicken",
    captionHi: "सिग्नेचर बटर चिकन",
    category: "Food",
    createdAt: "2025-01-12T00:00:00Z"
  }
], lm = () => {
  if (typeof window > "u") return;
  localStorage.getItem(qi) || localStorage.setItem(qi, JSON.stringify(Ji));
}, cm = () => {
  if (typeof window > "u") return Ji;
  lm();
  const t = localStorage.getItem(qi);
  return t ? JSON.parse(t) : Ji;
};
function dm({ language: t }) {
  const [e, i] = I(null), n = cm(), s = {
    en: {
      title: "Gallery",
      subtitle: "A glimpse into our culinary journey"
    },
    hi: {
      title: "गैलरी",
      subtitle: "हमारी पाक यात्रा की एक झलक"
    }
  };
  return /* @__PURE__ */ h("section", { id: "gallery", className: "py-20 bg-white", children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: !0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ h("h2", { className: "text-4xl md:text-5xl text-[#2D4A3E] mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: s[t].title }),
          /* @__PURE__ */ h("p", { className: "text-lg text-[#6B5D52]", children: s[t].subtitle })
        ]
      }
    ),
    /* @__PURE__ */ h(_n, { columnsCount: 3, gutter: "16px", className: "masonry-grid", children: n.map((r, a) => /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: a * 0.05 },
        viewport: { once: !0 },
        onClick: () => i(a),
        className: "relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300",
        children: [
          /* @__PURE__ */ h(
            "img",
            {
              src: r.imageURL,
              alt: t === "en" ? r.caption : r.captionHi,
              className: "w-full h-auto group-hover:scale-110 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ h("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4", children: /* @__PURE__ */ h("span", { className: "text-white font-medium", children: t === "en" ? r.caption : r.captionHi }) })
        ]
      },
      r.imageId
    )) }),
    /* @__PURE__ */ h(He, { children: e !== null && /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => i(null),
        className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
        children: [
          /* @__PURE__ */ h(
            "button",
            {
              onClick: () => i(null),
              className: "absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors",
              children: /* @__PURE__ */ h(ee, { className: "w-6 h-6 text-white" })
            }
          ),
          /* @__PURE__ */ m(
            S.div,
            {
              initial: { scale: 0.8 },
              animate: { scale: 1 },
              exit: { scale: 0.8 },
              onClick: (r) => r.stopPropagation(),
              className: "flex flex-col items-center gap-4",
              children: [
                /* @__PURE__ */ h(
                  "img",
                  {
                    src: n[e].imageURL,
                    alt: t === "en" ? n[e].caption : n[e].captionHi,
                    className: "max-w-full max-h-[80vh] object-contain rounded-lg"
                  }
                ),
                /* @__PURE__ */ h("p", { className: "text-white text-lg", children: t === "en" ? n[e].caption : n[e].captionHi })
              ]
            }
          ),
          /* @__PURE__ */ m("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4", children: [
            /* @__PURE__ */ h(
              "button",
              {
                onClick: (r) => {
                  r.stopPropagation(), i((a) => a > 0 ? a - 1 : n.length - 1);
                },
                className: "px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors",
                children: t === "en" ? "Previous" : "पिछला"
              }
            ),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: (r) => {
                  r.stopPropagation(), i((a) => a < n.length - 1 ? a + 1 : 0);
                },
                className: "px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors",
                children: t === "en" ? "Next" : "अगला"
              }
            )
          ] })
        ]
      }
    ) })
  ] }) });
}
const vo = "naina_restaurant_reservations", um = 12, wa = 6, Na = (t, e) => `${t}-${e}`, wo = () => {
  if (typeof window > "u") return [];
  const t = localStorage.getItem(vo);
  return t ? JSON.parse(t) : [];
}, hm = (t) => {
  const { date: e, time: i, guestCount: n } = t, s = new Date(e), r = /* @__PURE__ */ new Date();
  if (r.setHours(0, 0, 0, 0), s < r)
    return { success: !1, error: "Cannot reserve for past dates" };
  if (n < 1 || n > 20)
    return { success: !1, error: "Guest count must be between 1 and 20" };
  if (!fm(e, i, n))
    return {
      success: !1,
      error: "No tables available for this time slot. Please choose another time."
    };
  const o = {
    reservationId: `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    ...t,
    status: "Pending",
    createdAt: (/* @__PURE__ */ new Date()).toISOString()
  }, l = wo();
  return l.unshift(o), localStorage.setItem(vo, JSON.stringify(l)), { success: !0, reservation: o };
}, fm = (t, e, i) => {
  const n = wo(), s = Na(t, e), a = n.filter(
    (c) => Na(c.date, c.time) === s && (c.status === "Pending" || c.status === "Confirmed")
  ).reduce((c, u) => c + u.guestCount, 0), o = Math.ceil(i / wa);
  return Math.ceil(a / wa) + o <= um;
};
function mm({ language: t }) {
  const [e, i] = I({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: ""
  }), [n, s] = I(!1), [r, a] = I(""), o = {
    en: {
      title: "Reserve a Table",
      subtitle: "Book your table for an unforgettable dining experience",
      specialThali: "Special Thali of the Day",
      thaliDesc: "Chef's special selection featuring seasonal vegetables, dal, rice, roti, and dessert",
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      date: "Select Date",
      time: "Select Time",
      guests: "Number of Guests",
      notes: "Special Requests (Optional)",
      submitBtn: "Reserve Now",
      successMsg: "Reservation submitted! We'll contact you shortly to confirm.",
      orderOnline: "Order Online",
      orderText: "Can't visit? Order your favorite dishes online"
    },
    hi: {
      title: "टेबल बुक करें",
      subtitle: "एक अविस्मरणीय भोजन अनुभव के लिए अपनी मेज बुक करें",
      specialThali: "आज की विशेष थाली",
      thaliDesc: "शेफ का विशेष चयन जिसमें मौसमी सब्जियां, दाल, चावल, रोटी और मिठाई शामिल है",
      name: "आपका नाम",
      email: "ईमेल पता",
      phone: "फ़ोन नंबर",
      date: "तारीख चुनें",
      time: "समय चुनें",
      guests: "मेहमानों की संख्या",
      notes: "विशेष अनुरोध (वैकल्पिक)",
      submitBtn: "अभी बुक करें",
      successMsg: "आरक्षण जमा किया गया! हम जल्द ही पुष्टि के लिए संपर्क करेंगे।",
      orderOnline: "ऑनलाइन ऑर्डर करें",
      orderText: "आने में असमर्थ? अपने पसंदीदा व्यंजन ऑनलाइन ऑर्डर करें"
    }
  }, l = (u) => {
    u.preventDefault(), a("");
    const d = hm({
      name: e.name,
      phone: e.phone,
      email: e.email,
      date: e.date,
      time: e.time,
      guestCount: parseInt(e.guests),
      notes: e.notes
    });
    d.success ? (s(!0), i({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      notes: ""
    }), setTimeout(() => s(!1), 5e3)) : (a(d.error || "Failed to create reservation"), setTimeout(() => a(""), 5e3));
  }, c = (u) => {
    i({
      ...e,
      [u.target.name]: u.target.value
    });
  };
  return /* @__PURE__ */ h("section", { id: "reservations", className: "py-20 bg-[#F8F4E8]", children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: !0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ h("h2", { className: "text-4xl md:text-5xl text-[#2D4A3E] mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: o[t].title }),
          /* @__PURE__ */ h("p", { className: "text-lg text-[#6B5D52]", children: o[t].subtitle })
        ]
      }
    ),
    /* @__PURE__ */ m("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ h(
        S.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          children: /* @__PURE__ */ m("form", { onSubmit: l, className: "bg-white rounded-2xl shadow-xl p-8 space-y-6", children: [
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                /* @__PURE__ */ h(Ba, { className: "w-5 h-5" }),
                o[t].name
              ] }),
              /* @__PURE__ */ h(
                "input",
                {
                  type: "text",
                  name: "name",
                  value: e.name,
                  onChange: c,
                  required: !0,
                  className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                /* @__PURE__ */ h(an, { className: "w-5 h-5" }),
                o[t].email
              ] }),
              /* @__PURE__ */ h(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: e.email,
                  onChange: c,
                  required: !0,
                  className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                /* @__PURE__ */ h(ei, { className: "w-5 h-5" }),
                o[t].phone
              ] }),
              /* @__PURE__ */ h(
                "input",
                {
                  type: "tel",
                  name: "phone",
                  value: e.phone,
                  onChange: c,
                  required: !0,
                  className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all"
                }
              )
            ] }),
            /* @__PURE__ */ m("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ m("div", { children: [
                /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                  /* @__PURE__ */ h(Va, { className: "w-5 h-5" }),
                  o[t].date
                ] }),
                /* @__PURE__ */ h(
                  "input",
                  {
                    type: "date",
                    name: "date",
                    value: e.date,
                    onChange: c,
                    required: !0,
                    min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all"
                  }
                )
              ] }),
              /* @__PURE__ */ m("div", { children: [
                /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                  /* @__PURE__ */ h(te, { className: "w-5 h-5" }),
                  o[t].time
                ] }),
                /* @__PURE__ */ m(
                  "select",
                  {
                    name: "time",
                    value: e.time,
                    onChange: c,
                    required: !0,
                    className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all",
                    children: [
                      /* @__PURE__ */ h("option", { value: "", children: "--" }),
                      /* @__PURE__ */ h("option", { value: "12:00", children: "12:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "12:30", children: "12:30 PM" }),
                      /* @__PURE__ */ h("option", { value: "13:00", children: "1:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "13:30", children: "1:30 PM" }),
                      /* @__PURE__ */ h("option", { value: "14:00", children: "2:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "14:30", children: "2:30 PM" }),
                      /* @__PURE__ */ h("option", { value: "19:00", children: "7:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "19:30", children: "7:30 PM" }),
                      /* @__PURE__ */ h("option", { value: "20:00", children: "8:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "20:30", children: "8:30 PM" }),
                      /* @__PURE__ */ h("option", { value: "21:00", children: "9:00 PM" }),
                      /* @__PURE__ */ h("option", { value: "21:30", children: "9:30 PM" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ m("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: [
                /* @__PURE__ */ h(Ci, { className: "w-5 h-5" }),
                o[t].guests
              ] }),
              /* @__PURE__ */ h(
                "select",
                {
                  name: "guests",
                  value: e.guests,
                  onChange: c,
                  required: !0,
                  className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all",
                  children: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((u) => /* @__PURE__ */ m("option", { value: u, children: [
                    u,
                    " ",
                    u === 1 ? "Guest" : "Guests"
                  ] }, u))
                }
              )
            ] }),
            /* @__PURE__ */ m("div", { children: [
              /* @__PURE__ */ h("label", { className: "flex items-center gap-2 text-[#2D4A3E] mb-2", children: o[t].notes }),
              /* @__PURE__ */ h(
                "textarea",
                {
                  name: "notes",
                  value: e.notes,
                  onChange: c,
                  rows: 3,
                  className: "w-full px-4 py-3 bg-[#F8F4E8] border border-[#E8DCC8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] transition-all resize-none",
                  placeholder: t === "en" ? "Any special requests?" : "कोई विशेष अनुरोध?"
                }
              )
            ] }),
            /* @__PURE__ */ h(
              "button",
              {
                type: "submit",
                className: "w-full py-4 bg-[#D4705C] text-white rounded-lg hover:bg-[#B33F2A] transition-colors duration-300 shadow-lg hover:shadow-xl",
                children: o[t].submitBtn
              }
            ),
            n && /* @__PURE__ */ h(
              S.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                className: "p-4 bg-green-100 text-green-800 rounded-lg text-center",
                children: o[t].successMsg
              }
            ),
            r && /* @__PURE__ */ h(
              S.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                className: "p-4 bg-red-100 text-red-800 rounded-lg text-center",
                children: r
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          className: "space-y-8",
          children: [
            /* @__PURE__ */ m("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: [
              /* @__PURE__ */ m("div", { className: "relative h-64", children: [
                /* @__PURE__ */ h(
                  "img",
                  {
                    src: "https://images.unsplash.com/photo-1764699486769-fc9a8b03130a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaSUyMHRyYWRpdGlvbmFsJTIwZm9vZHxlbnwxfHx8fDE3NjgxNDM1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
                    alt: "Special Thali",
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ h("div", { className: "absolute top-4 right-4 bg-[#F4A261] text-white px-4 py-2 rounded-full font-medium", children: "₹450" })
              ] }),
              /* @__PURE__ */ m("div", { className: "p-6", children: [
                /* @__PURE__ */ h("h3", { className: "text-2xl text-[#2D4A3E] mb-3", style: { fontFamily: "'Playfair Display', serif" }, children: o[t].specialThali }),
                /* @__PURE__ */ h("p", { className: "text-[#6B5D52] leading-relaxed", children: o[t].thaliDesc })
              ] })
            ] }),
            /* @__PURE__ */ m("div", { className: "bg-gradient-to-br from-[#D4705C] to-[#B33F2A] rounded-2xl shadow-xl p-8 text-white", children: [
              /* @__PURE__ */ h("h3", { className: "text-2xl mb-3", style: { fontFamily: "'Playfair Display', serif" }, children: o[t].orderOnline }),
              /* @__PURE__ */ h("p", { className: "mb-6 text-white/90", children: o[t].orderText }),
              /* @__PURE__ */ m("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ h("button", { className: "flex-1 py-3 bg-white text-[#D4705C] rounded-lg hover:bg-gray-100 transition-colors font-medium", children: "Zomato" }),
                /* @__PURE__ */ h("button", { className: "flex-1 py-3 bg-white text-[#D4705C] rounded-lg hover:bg-gray-100 transition-colors font-medium", children: "Swiggy" })
              ] })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}
const Ki = "naina_restaurant_reviews", Qi = [
  {
    reviewId: "REV-DEFAULT-001",
    customerName: "Rajesh Kumar",
    customerNameHi: "राजेश कुमार",
    rating: 5,
    comment: "The butter chicken here reminds me of my mother's cooking. Absolutely authentic and delicious!",
    commentHi: "यहां का बटर चिकन मुझे मेरी माँ के खाने की याद दिलाता है। बिल्कुल प्रामाणिक और स्वादिष्ट!",
    approved: !0,
    createdAt: "2025-01-05T10:30:00Z",
    dishName: "Butter Chicken",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    reviewId: "REV-DEFAULT-002",
    customerName: "Priya Sharma",
    customerNameHi: "प्रिया शर्मा",
    rating: 5,
    comment: "Best Dal Makhani I've ever had! The ambiance feels just like home. Highly recommended!",
    commentHi: "सबसे अच्छी दाल मखनी जो मैंने कभी खाई है! माहौल बिल्कुल घर जैसा है। अत्यधिक अनुशंसित!",
    approved: !0,
    createdAt: "2025-01-06T14:20:00Z",
    dishName: "Dal Makhani",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    reviewId: "REV-DEFAULT-003",
    customerName: "Amit Patel",
    customerNameHi: "अमित पटेल",
    rating: 5,
    comment: "Outstanding tandoori chicken and excellent service. The flavors are incredible!",
    commentHi: "शानदार तंदूरी चिकन और उत्कृष्ट सेवा। स्वाद अविश्वसनीय है!",
    approved: !0,
    createdAt: "2025-01-07T19:45:00Z",
    dishName: "Tandoori Chicken",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    reviewId: "REV-DEFAULT-004",
    customerName: "Neha Gupta",
    customerNameHi: "नेहा गुप्ता",
    rating: 5,
    comment: "The paneer tikka is to die for! Such authentic flavors and warm hospitality.",
    commentHi: "पनीर टिक्का लाजवाब है! इतने प्रामाणिक स्वाद और गर्मजोशी भरी मेहमाननवाज़ी।",
    approved: !0,
    createdAt: "2025-01-08T12:15:00Z",
    dishName: "Paneer Tikka",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    reviewId: "REV-DEFAULT-005",
    customerName: "Vikram Singh",
    customerNameHi: "विक्रम सिंह",
    rating: 4,
    comment: "Great food quality and reasonable prices. The biryani is a must-try!",
    commentHi: "बढ़िया खाना और उचित दाम। बिरयानी जरूर ट्राई करें!",
    approved: !0,
    createdAt: "2025-01-09T20:30:00Z",
    dishName: "Chicken Biryani",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    reviewId: "REV-DEFAULT-006",
    customerName: "Ananya Verma",
    customerNameHi: "अनन्या वर्मा",
    rating: 5,
    comment: "Perfect place for family dinners. The staff is courteous and the food is exceptional!",
    commentHi: "पारिवारिक भोजन के लिए एकदम सही जगह। स्टाफ विनम्र है और खाना असाधारण है!",
    approved: !0,
    createdAt: "2025-01-10T18:00:00Z",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
], pm = () => {
  if (typeof window > "u") return;
  localStorage.getItem(Ki) || localStorage.setItem(Ki, JSON.stringify(Qi));
}, gm = () => {
  if (typeof window > "u") return Qi;
  pm();
  const t = localStorage.getItem(Ki);
  return t ? JSON.parse(t) : Qi;
}, ym = () => gm().filter((e) => e.approved);
function xm({ language: t }) {
  const [e, i] = I(0), n = ym(), s = {
    en: {
      title: "What Our Guests Say",
      subtitle: "Real experiences from real people"
    },
    hi: {
      title: "हमारे मेहमान क्या कहते हैं",
      subtitle: "वास्तविक लोगों से वास्तविक अनुभव"
    }
  }, r = () => {
    i((l) => (l + 1) % n.length);
  }, a = () => {
    i((l) => (l - 1 + n.length) % n.length);
  };
  if (_t(() => {
    const l = setInterval(r, 6e3);
    return () => clearInterval(l);
  }, [n.length]), n.length === 0)
    return null;
  const o = n[e];
  return /* @__PURE__ */ m("section", { className: "py-20 bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ h("div", { className: "absolute inset-0 opacity-5", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61.8 38.2 L100 38.2 L69.1 61.8 L80.9 100 L50 76.4 L19.1 100 L30.9 61.8 L0 38.2 L38.2 38.2 Z' fill='%23F4A261'/%3E%3C/svg%3E")`,
      backgroundSize: "100px 100px"
    } }),
    /* @__PURE__ */ m("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          viewport: { once: !0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ h("h2", { className: "text-4xl md:text-5xl text-[#2D4A3E] mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: s[t].title }),
            /* @__PURE__ */ h("p", { className: "text-lg text-[#6B5D52]", children: s[t].subtitle })
          ]
        }
      ),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        /* @__PURE__ */ h(He, { mode: "wait", children: /* @__PURE__ */ m(
          S.div,
          {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -100 },
            transition: { duration: 0.5 },
            className: "bg-gradient-to-br from-white to-[#F8F4E8] rounded-2xl shadow-2xl p-8 md:p-12 relative",
            children: [
              /* @__PURE__ */ h("div", { className: "absolute top-8 left-8 text-[#F4A261] opacity-20", children: /* @__PURE__ */ h(ac, { className: "w-16 h-16" }) }),
              o.avatar && /* @__PURE__ */ h("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ h(
                "img",
                {
                  src: o.avatar,
                  alt: o.customerName,
                  className: "w-20 h-20 rounded-full object-cover border-4 border-[#F4A261]"
                }
              ) }),
              /* @__PURE__ */ h("div", { className: "flex justify-center gap-1 mb-6", children: [...Array(o.rating)].map((l, c) => /* @__PURE__ */ h(dc, { className: "w-6 h-6 fill-[#F4A261] text-[#F4A261]" }, c)) }),
              /* @__PURE__ */ m("p", { className: "text-xl text-[#2D2824] text-center mb-8 leading-relaxed relative z-10 max-w-3xl mx-auto", children: [
                '"',
                t === "en" ? o.comment : o.commentHi || o.comment,
                '"'
              ] }),
              o.dishName && /* @__PURE__ */ h("p", { className: "text-center text-[#D4705C] font-medium mb-4", children: o.dishName }),
              /* @__PURE__ */ h("div", { className: "text-center", children: /* @__PURE__ */ h("h4", { className: "text-2xl text-[#2D4A3E] mb-1", style: { fontFamily: "'Playfair Display', serif" }, children: t === "en" ? o.customerName : o.customerNameHi || o.customerName }) })
            ]
          },
          e
        ) }),
        /* @__PURE__ */ h(
          "button",
          {
            onClick: a,
            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-[#F8F4E8] transition-colors flex items-center justify-center group",
            children: /* @__PURE__ */ h(Hl, { className: "w-6 h-6 text-[#2D4A3E] group-hover:text-[#D4705C]" })
          }
        ),
        /* @__PURE__ */ h(
          "button",
          {
            onClick: r,
            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-[#F8F4E8] transition-colors flex items-center justify-center group",
            children: /* @__PURE__ */ h(Vl, { className: "w-6 h-6 text-[#2D4A3E] group-hover:text-[#D4705C]" })
          }
        ),
        /* @__PURE__ */ h("div", { className: "flex justify-center gap-2 mt-8", children: n.map((l, c) => /* @__PURE__ */ h(
          "button",
          {
            onClick: () => i(c),
            className: `w-3 h-3 rounded-full transition-all duration-300 ${c === e ? "bg-[#D4705C] w-8" : "bg-[#E8DCC8]"}`
          },
          c
        )) })
      ] })
    ] })
  ] });
}
const No = "naina_restaurant_newsletter", bm = (t) => {
  if (!t || !t.includes("@"))
    return { success: !1, message: "Please enter a valid email address" };
  const e = vm();
  if (e.find((s) => s.email === t && s.isActive))
    return { success: !1, message: "This email is already subscribed" };
  const n = {
    subscriptionId: `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    email: t,
    subscribedAt: (/* @__PURE__ */ new Date()).toISOString(),
    isActive: !0
  };
  return e.unshift(n), localStorage.setItem(No, JSON.stringify(e)), { success: !0, message: "Successfully subscribed to our newsletter!" };
}, vm = () => {
  if (typeof window > "u") return [];
  const t = localStorage.getItem(No);
  return t ? JSON.parse(t) : [];
};
function wm({ language: t }) {
  const [e, i] = I(""), [n, s] = I(""), [r, a] = I(!1), o = sm(), l = {
    en: {
      about: "About Naina",
      aboutText: "Bringing the authentic taste of Indian home cooking to your table since 2020.",
      contactTitle: "Contact Us",
      hours: "Hours",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterText: "Subscribe to get special offers and updates",
      subscribe: "Subscribe",
      rights: "All rights reserved.",
      madeWith: "Made with love in Gurugram",
      emailPlaceholder: "Enter your email"
    },
    hi: {
      about: "नैना के बारे में",
      aboutText: "2020 से आपकी मेज पर भारतीय घरेलू खाना पकाने का प्रामाणिक स्वाद लाना।",
      contactTitle: "संपर्क करें",
      hours: "समय",
      followUs: "फॉलो करें",
      newsletter: "न्यूज़लेटर",
      newsletterText: "विशेष ऑफर और अपडेट प्राप्त करने के लिए सब्सक्राइब करें",
      subscribe: "सब्सक्राइब",
      rights: "सर्वाधिकार सुरक्षित।",
      madeWith: "गुरुग्राम में प्यार से बनाया गया",
      emailPlaceholder: "अपना ईमेल दर्ज करें"
    }
  }, c = (d) => {
    d.preventDefault();
    const f = bm(e);
    s(f.message), a(f.success), f.success && i(""), setTimeout(() => s(""), 5e3);
  }, u = `${o.address.street}, ${o.address.city}, ${o.address.state} ${o.address.pincode}`;
  return /* @__PURE__ */ h("footer", { id: "contact", className: "bg-[#2D4A3E] text-white", children: /* @__PURE__ */ m("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
    /* @__PURE__ */ m("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12", children: [
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: !0 },
          children: [
            /* @__PURE__ */ m("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ h("div", { className: "bg-[#F4A261] p-2 rounded-lg", children: /* @__PURE__ */ h(ja, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ h("h3", { className: "text-2xl", style: { fontFamily: "'Playfair Display', serif" }, children: o.name[t] })
            ] }),
            /* @__PURE__ */ h("p", { className: "text-white/80 leading-relaxed", children: l[t].aboutText })
          ]
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
          viewport: { once: !0 },
          children: [
            /* @__PURE__ */ h("h3", { className: "text-xl mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: l[t].contactTitle }),
            /* @__PURE__ */ m("div", { className: "space-y-3", children: [
              /* @__PURE__ */ m("a", { href: "#", className: "flex items-start gap-3 text-white/80 hover:text-[#F4A261] transition-colors", children: [
                /* @__PURE__ */ h(rn, { className: "w-5 h-5 flex-shrink-0 mt-1" }),
                /* @__PURE__ */ h("span", { className: "text-sm", children: u })
              ] }),
              /* @__PURE__ */ m("a", { href: `tel:${o.contact.phone}`, className: "flex items-center gap-3 text-white/80 hover:text-[#F4A261] transition-colors", children: [
                /* @__PURE__ */ h(ei, { className: "w-5 h-5 flex-shrink-0" }),
                /* @__PURE__ */ h("span", { className: "text-sm", children: o.contact.phone })
              ] }),
              /* @__PURE__ */ m("a", { href: `mailto:${o.contact.email}`, className: "flex items-center gap-3 text-white/80 hover:text-[#F4A261] transition-colors", children: [
                /* @__PURE__ */ h(an, { className: "w-5 h-5 flex-shrink-0" }),
                /* @__PURE__ */ h("span", { className: "text-sm", children: o.contact.email })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          viewport: { once: !0 },
          children: [
            /* @__PURE__ */ h("h3", { className: "text-xl mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: l[t].hours }),
            /* @__PURE__ */ m("div", { className: "space-y-2 text-white/80 text-sm", children: [
              /* @__PURE__ */ m("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ h(te, { className: "w-5 h-5 flex-shrink-0 mt-1" }),
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ h("p", { className: "font-medium", children: "Weekdays" }),
                  /* @__PURE__ */ h("p", { children: o.hours.weekdays[t] })
                ] })
              ] }),
              /* @__PURE__ */ m("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ h(te, { className: "w-5 h-5 flex-shrink-0 mt-1 opacity-0" }),
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ h("p", { className: "font-medium", children: "Weekends" }),
                  /* @__PURE__ */ h("p", { children: o.hours.weekends[t] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ m("div", { className: "mt-6", children: [
              /* @__PURE__ */ h("h3", { className: "text-xl mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: l[t].followUs }),
              /* @__PURE__ */ m("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ h("a", { href: o.socialMedia.instagram, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-white/10 hover:bg-[#F4A261] rounded-full flex items-center justify-center transition-colors", children: /* @__PURE__ */ h(Xl, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ h("a", { href: o.socialMedia.facebook, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 bg-white/10 hover:bg-[#F4A261] rounded-full flex items-center justify-center transition-colors", children: /* @__PURE__ */ h(_l, { className: "w-5 h-5" }) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ m(
        S.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
          viewport: { once: !0 },
          children: [
            /* @__PURE__ */ h("h3", { className: "text-xl mb-4", style: { fontFamily: "'Playfair Display', serif" }, children: l[t].newsletter }),
            /* @__PURE__ */ h("p", { className: "text-white/80 text-sm mb-4", children: l[t].newsletterText }),
            /* @__PURE__ */ m("form", { onSubmit: c, className: "space-y-3", children: [
              /* @__PURE__ */ h(
                "input",
                {
                  type: "email",
                  value: e,
                  onChange: (d) => i(d.target.value),
                  placeholder: l[t].emailPlaceholder,
                  required: !0,
                  className: "w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-white placeholder-white/50"
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  type: "submit",
                  className: "w-full py-2 bg-[#F4A261] hover:bg-[#D4705C] rounded-lg transition-colors",
                  children: l[t].subscribe
                }
              ),
              n && /* @__PURE__ */ h("p", { className: `text-sm ${r ? "text-green-300" : "text-red-300"}`, children: n })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ h(
      S.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.4 },
        viewport: { once: !0 },
        className: "mb-12",
        children: /* @__PURE__ */ h("div", { className: "rounded-xl overflow-hidden shadow-xl h-64", children: /* @__PURE__ */ h(
          "iframe",
          {
            src: o.location.mapUrl,
            width: "100%",
            height: "100%",
            style: { border: 0 },
            allowFullScreen: !0,
            loading: "lazy"
          }
        ) })
      }
    ),
    /* @__PURE__ */ m("div", { className: "border-t border-white/20 pt-8 text-center text-white/60 text-sm", children: [
      /* @__PURE__ */ m("p", { className: "mb-2", children: [
        "© 2026 ",
        o.name.en,
        ". ",
        l[t].rights
      ] }),
      /* @__PURE__ */ m("p", { className: "text-[#F4A261]", children: [
        l[t].madeWith,
        " ❤️"
      ] })
    ] })
  ] }) });
}
function Nm({ onClick: t, language: e }) {
  const { cartTotal: i } = ti(), n = {
    en: {
      viewCart: "View Cart"
    },
    hi: {
      viewCart: "कार्ट देखें"
    }
  };
  return /* @__PURE__ */ m(
    S.button,
    {
      onClick: t,
      className: "fixed bottom-8 right-8 z-50 bg-[#D4705C] text-white rounded-full p-4 shadow-2xl hover:bg-[#B33F2A] transition-colors",
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      children: [
        /* @__PURE__ */ m("div", { className: "relative", children: [
          /* @__PURE__ */ h(lc, { className: "w-6 h-6" }),
          /* @__PURE__ */ h(He, { children: i.itemCount > 0 && /* @__PURE__ */ h(
            S.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              exit: { scale: 0 },
              className: "absolute -top-2 -right-2 bg-[#B33F2A] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold",
              children: i.itemCount
            }
          ) })
        ] }),
        /* @__PURE__ */ h("span", { className: "sr-only", children: n[e].viewCart })
      ]
    }
  );
}
function Tm({ isOpen: t, onClose: e, onCheckout: i, language: n }) {
  const { cart: s, cartTotal: r, updateQuantity: a, removeItem: o } = ti(), l = {
    en: {
      yourCart: "Your Cart",
      emptyCart: "Your cart is empty",
      emptyDescription: "Add items from our delicious menu",
      subtotal: "Subtotal",
      deliveryFee: "Delivery Fee",
      proceedCheckout: "Proceed to Checkout",
      item: "item",
      items: "items"
    },
    hi: {
      yourCart: "आपकी कार्ट",
      emptyCart: "आपकी कार्ट खाली है",
      emptyDescription: "हमारे स्वादिष्ट मेनू से आइटम जोड़ें",
      subtotal: "उपयोग",
      deliveryFee: "डिलीवरी शुल्क",
      proceedCheckout: "चेकआउट पर जाएं",
      item: "आइटम",
      items: "आइटम"
    }
  };
  return /* @__PURE__ */ h(He, { children: t && /* @__PURE__ */ m(tn, { children: [
    /* @__PURE__ */ h(
      S.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: e,
        className: "fixed inset-0 bg-black/60 z-50"
      }
    ),
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        className: "fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col",
        children: [
          /* @__PURE__ */ m("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
            /* @__PURE__ */ h("h2", { className: "text-2xl text-[#2D4A3E]", style: { fontFamily: "'Playfair Display', serif" }, children: l[n].yourCart }),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: e,
                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: /* @__PURE__ */ h(ee, { className: "w-6 h-6 text-[#2D4A3E]" })
              }
            )
          ] }),
          /* @__PURE__ */ h("div", { className: "flex-1 overflow-y-auto p-6", children: s.length === 0 ? /* @__PURE__ */ m("div", { className: "flex flex-col items-center justify-center h-full text-center", children: [
            /* @__PURE__ */ h(Fa, { className: "w-24 h-24 text-gray-300 mb-4" }),
            /* @__PURE__ */ h("h3", { className: "text-xl text-[#2D4A3E] mb-2", children: l[n].emptyCart }),
            /* @__PURE__ */ h("p", { className: "text-[#6B5D52]", children: l[n].emptyDescription })
          ] }) : /* @__PURE__ */ h("div", { className: "space-y-4", children: s.map((c) => /* @__PURE__ */ m(
            S.div,
            {
              layout: !0,
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              className: "bg-[#F8F4E8] rounded-lg p-4 flex gap-4",
              children: [
                /* @__PURE__ */ h("div", { className: "w-20 h-20 rounded-lg overflow-hidden flex-shrink-0", children: /* @__PURE__ */ h(
                  "img",
                  {
                    src: c.image,
                    alt: n === "en" ? c.name : c.nameHi,
                    className: "w-full h-full object-cover"
                  }
                ) }),
                /* @__PURE__ */ m("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ h("h4", { className: "text-[#2D4A3E] font-medium mb-1 truncate", children: n === "en" ? c.name : c.nameHi }),
                  /* @__PURE__ */ m("p", { className: "text-[#D4705C] font-semibold mb-2", children: [
                    "₹",
                    c.price
                  ] }),
                  /* @__PURE__ */ m("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ h(
                      "button",
                      {
                        onClick: () => a(c.menuItemId, c.quantity - 1),
                        className: "w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors",
                        disabled: c.quantity <= 1,
                        children: c.quantity <= 1 ? /* @__PURE__ */ h(hc, { className: "w-4 h-4 text-[#B33F2A]" }) : /* @__PURE__ */ h(tc, { className: "w-4 h-4 text-[#2D4A3E]" })
                      }
                    ),
                    /* @__PURE__ */ h("span", { className: "text-[#2D4A3E] font-semibold w-8 text-center", children: c.quantity }),
                    /* @__PURE__ */ h(
                      "button",
                      {
                        onClick: () => a(c.menuItemId, c.quantity + 1),
                        className: "w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors",
                        children: /* @__PURE__ */ h(Ia, { className: "w-4 h-4 text-[#2D4A3E]" })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ h(
                  "button",
                  {
                    onClick: () => o(c.menuItemId),
                    className: "p-2 hover:bg-[#E8DCC8] rounded-lg transition-colors h-fit",
                    children: /* @__PURE__ */ h(ee, { className: "w-5 h-5 text-[#B33F2A]" })
                  }
                )
              ]
            },
            c.menuItemId
          )) }) }),
          s.length > 0 && /* @__PURE__ */ m("div", { className: "border-t border-gray-200 p-6 bg-[#F8F4E8]", children: [
            /* @__PURE__ */ m("div", { className: "space-y-3 mb-6", children: [
              /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52]", children: [
                /* @__PURE__ */ m("span", { children: [
                  l[n].subtotal,
                  " (",
                  r.itemCount,
                  " ",
                  r.itemCount === 1 ? l[n].item : l[n].items,
                  ")"
                ] }),
                /* @__PURE__ */ m("span", { className: "font-semibold", children: [
                  "₹",
                  r.subtotal
                ] })
              ] }),
              /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52] text-sm", children: [
                /* @__PURE__ */ h("span", { children: l[n].deliveryFee }),
                /* @__PURE__ */ h("span", { children: n === "en" ? "Calculated at checkout" : "चेकआउट पर गणना" })
              ] })
            ] }),
            /* @__PURE__ */ m(
              S.button,
              {
                onClick: i,
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: "w-full bg-[#D4705C] text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#B33F2A] transition-colors",
                children: [
                  /* @__PURE__ */ h("span", { children: l[n].proceedCheckout }),
                  /* @__PURE__ */ h(Dl, { className: "w-5 h-5" })
                ]
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}
function Mm({ isOpen: t, onClose: e, onSuccess: i, language: n }) {
  const { cartTotal: s } = ti(), [r, a] = I("Delivery"), [o, l] = I({
    name: "",
    phone: "",
    email: "",
    address: ""
  }), [c, u] = I(!1), d = {
    en: {
      checkout: "Checkout",
      orderType: "Order Type",
      delivery: "Delivery",
      pickup: "Pickup",
      dineIn: "Dine-In",
      customerDetails: "Customer Details",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailOptional: "Email (Optional)",
      deliveryAddress: "Delivery Address",
      orderSummary: "Order Summary",
      subtotal: "Subtotal",
      deliveryFee: "Delivery Fee",
      total: "Total",
      placeOrder: "Place Order",
      required: "Required",
      items: "items"
    },
    hi: {
      checkout: "चेकआउट",
      orderType: "ऑर्डर प्रकार",
      delivery: "डिलीवरी",
      pickup: "पिकअप",
      dineIn: "डाइन-इन",
      customerDetails: "ग्राहक विवरण",
      fullName: "पूरा नाम",
      phoneNumber: "फोन नंबर",
      emailOptional: "ईमेल (वैकल्पिक)",
      deliveryAddress: "डिलीवरी पता",
      orderSummary: "ऑर्डर सारांश",
      subtotal: "उपयोग",
      deliveryFee: "डिलीवरी शुल्क",
      total: "कुल",
      placeOrder: "ऑर्डर करें",
      required: "आवश्यक",
      items: "आइटम"
    }
  }, f = r === "Delivery" ? 50 : 0, p = s.subtotal + f, g = async (y) => {
    y.preventDefault(), u(!0);
    try {
      const b = xl(r, {
        name: o.name,
        phone: o.phone,
        email: o.email,
        address: r === "Delivery" ? o.address : void 0
      });
      setTimeout(() => {
        u(!1), i(b);
      }, 1e3);
    } catch (b) {
      u(!1), console.error("Order creation failed:", b);
    }
  }, v = (y) => {
    l((b) => ({
      ...b,
      [y.target.name]: y.target.value
    }));
  };
  return /* @__PURE__ */ h(He, { children: t && /* @__PURE__ */ m(tn, { children: [
    /* @__PURE__ */ h(
      S.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: e,
        className: "fixed inset-0 bg-black/60 z-50"
      }
    ),
    /* @__PURE__ */ m(
      S.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 50 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 50 },
        transition: { type: "spring", damping: 30, stiffness: 300 },
        className: "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-50 max-h-[90vh] overflow-hidden flex flex-col mx-4",
        children: [
          /* @__PURE__ */ m("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [
            /* @__PURE__ */ h("h2", { className: "text-2xl text-[#2D4A3E]", style: { fontFamily: "'Playfair Display', serif" }, children: d[n].checkout }),
            /* @__PURE__ */ h(
              "button",
              {
                onClick: e,
                className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: /* @__PURE__ */ h(ee, { className: "w-6 h-6 text-[#2D4A3E]" })
              }
            )
          ] }),
          /* @__PURE__ */ m("form", { onSubmit: g, className: "flex-1 overflow-y-auto p-6", children: [
            /* @__PURE__ */ m("div", { className: "mb-6", children: [
              /* @__PURE__ */ h("label", { className: "block text-[#2D4A3E] font-semibold mb-3", children: d[n].orderType }),
              /* @__PURE__ */ h("div", { className: "grid grid-cols-3 gap-3", children: ["Delivery", "Pickup", "Dine-In"].map((y) => {
                const N = { Delivery: Wl, Pickup: La, "Dine-In": gc }[y];
                return /* @__PURE__ */ m(
                  "button",
                  {
                    type: "button",
                    onClick: () => a(y),
                    className: `p-4 rounded-lg border-2 transition-all ${r === y ? "border-[#D4705C] bg-[#F8F4E8]" : "border-gray-200 hover:border-gray-300"}`,
                    children: [
                      /* @__PURE__ */ h(N, { className: `w-6 h-6 mx-auto mb-2 ${r === y ? "text-[#D4705C]" : "text-gray-400"}` }),
                      /* @__PURE__ */ h("span", { className: `text-sm font-medium ${r === y ? "text-[#D4705C]" : "text-gray-600"}`, children: d[n][y.toLowerCase().replace("-", "")] })
                    ]
                  },
                  y
                );
              }) })
            ] }),
            /* @__PURE__ */ m("div", { className: "mb-6", children: [
              /* @__PURE__ */ h("h3", { className: "text-[#2D4A3E] font-semibold mb-4", children: d[n].customerDetails }),
              /* @__PURE__ */ m("div", { className: "space-y-4", children: [
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ m("label", { className: "block text-sm text-[#6B5D52] mb-2", children: [
                    d[n].fullName,
                    " ",
                    /* @__PURE__ */ h("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ m("div", { className: "relative", children: [
                    /* @__PURE__ */ h(Ba, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                    /* @__PURE__ */ h(
                      "input",
                      {
                        type: "text",
                        name: "name",
                        value: o.name,
                        onChange: v,
                        required: !0,
                        className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] focus:border-transparent",
                        placeholder: n === "en" ? "Enter your full name" : "अपना पूरा नाम दर्ज करें"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ m("label", { className: "block text-sm text-[#6B5D52] mb-2", children: [
                    d[n].phoneNumber,
                    " ",
                    /* @__PURE__ */ h("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ m("div", { className: "relative", children: [
                    /* @__PURE__ */ h(ei, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                    /* @__PURE__ */ h(
                      "input",
                      {
                        type: "tel",
                        name: "phone",
                        value: o.phone,
                        onChange: v,
                        required: !0,
                        pattern: "[0-9]{10}",
                        className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] focus:border-transparent",
                        placeholder: n === "en" ? "10-digit mobile number" : "10-अंकीय मोबाइल नंबर"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ h("label", { className: "block text-sm text-[#6B5D52] mb-2", children: d[n].emailOptional }),
                  /* @__PURE__ */ m("div", { className: "relative", children: [
                    /* @__PURE__ */ h(an, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                    /* @__PURE__ */ h(
                      "input",
                      {
                        type: "email",
                        name: "email",
                        value: o.email,
                        onChange: v,
                        className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] focus:border-transparent",
                        placeholder: n === "en" ? "your.email@example.com" : "आपका.ईमेल@example.com"
                      }
                    )
                  ] })
                ] }),
                r === "Delivery" && /* @__PURE__ */ m("div", { children: [
                  /* @__PURE__ */ m("label", { className: "block text-sm text-[#6B5D52] mb-2", children: [
                    d[n].deliveryAddress,
                    " ",
                    /* @__PURE__ */ h("span", { className: "text-red-500", children: "*" })
                  ] }),
                  /* @__PURE__ */ m("div", { className: "relative", children: [
                    /* @__PURE__ */ h(rn, { className: "absolute left-3 top-3 w-5 h-5 text-gray-400" }),
                    /* @__PURE__ */ h(
                      "textarea",
                      {
                        name: "address",
                        value: o.address,
                        onChange: v,
                        required: r === "Delivery",
                        rows: 3,
                        className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4705C] focus:border-transparent resize-none",
                        placeholder: n === "en" ? "Enter complete delivery address" : "पूरा डिलीवरी पता दर्ज करें"
                      }
                    )
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ m("div", { className: "bg-[#F8F4E8] rounded-lg p-6", children: [
              /* @__PURE__ */ h("h3", { className: "text-[#2D4A3E] font-semibold mb-4", children: d[n].orderSummary }),
              /* @__PURE__ */ m("div", { className: "space-y-2 mb-4", children: [
                /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52]", children: [
                  /* @__PURE__ */ m("span", { children: [
                    d[n].subtotal,
                    " (",
                    s.itemCount,
                    " ",
                    d[n].items,
                    ")"
                  ] }),
                  /* @__PURE__ */ m("span", { children: [
                    "₹",
                    s.subtotal
                  ] })
                ] }),
                /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52]", children: [
                  /* @__PURE__ */ h("span", { children: d[n].deliveryFee }),
                  /* @__PURE__ */ m("span", { children: [
                    "₹",
                    f
                  ] })
                ] }),
                /* @__PURE__ */ h("div", { className: "h-px bg-gray-300 my-3" }),
                /* @__PURE__ */ m("div", { className: "flex justify-between text-[#2D4A3E] text-lg font-semibold", children: [
                  /* @__PURE__ */ h("span", { children: d[n].total }),
                  /* @__PURE__ */ m("span", { className: "text-[#D4705C]", children: [
                    "₹",
                    p
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ h("div", { className: "p-6 border-t border-gray-200 bg-white", children: /* @__PURE__ */ h(
            S.button,
            {
              type: "submit",
              onClick: g,
              disabled: c,
              whileHover: { scale: c ? 1 : 1.02 },
              whileTap: { scale: c ? 1 : 0.98 },
              className: "w-full bg-[#D4705C] text-white py-4 rounded-lg font-semibold hover:bg-[#B33F2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
              children: c ? n === "en" ? "Processing..." : "प्रक्रिया में..." : d[n].placeOrder
            }
          ) })
        ]
      }
    )
  ] }) });
}
function Am({ isOpen: t, onClose: e, order: i, language: n }) {
  if (!t) return null;
  const s = {
    en: {
      orderConfirmed: "Order Confirmed!",
      thankYou: "Thank you for your order",
      orderId: "Order ID",
      orderType: "Order Type",
      estimatedTime: "Estimated Time",
      totalAmount: "Total Amount",
      deliveryAddress: "Delivery Address",
      contactNumber: "Contact Number",
      orderDetails: "Order Details",
      minutes: "minutes",
      goToHome: "Back to Home"
    },
    hi: {
      orderConfirmed: "ऑर्डर कन्फर्म हो गया!",
      thankYou: "आपके ऑर्डर के लिए धन्यवाद",
      orderId: "ऑर्डर आईडी",
      orderType: "ऑर्डर प्रकार",
      estimatedTime: "अनुमानित समय",
      totalAmount: "कुल राशि",
      deliveryAddress: "डिलीवरी पता",
      contactNumber: "संपर्क नंबर",
      orderDetails: "ऑर्डर विवरण",
      minutes: "मिनट",
      goToHome: "होम पर वापस जाएं"
    }
  }, r = i.orderType === "Delivery" ? 45 : 30;
  return /* @__PURE__ */ h(
    S.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4",
      onClick: e,
      children: /* @__PURE__ */ m(
        S.div,
        {
          initial: { scale: 0.9, y: 50 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.9, y: 50 },
          transition: { type: "spring", damping: 30, stiffness: 300 },
          onClick: (a) => a.stopPropagation(),
          className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
          children: [
            /* @__PURE__ */ m("div", { className: "relative p-8 text-center bg-gradient-to-br from-[#D4705C] to-[#B33F2A] text-white", children: [
              /* @__PURE__ */ h(
                "button",
                {
                  onClick: e,
                  className: "absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors",
                  children: /* @__PURE__ */ h(ee, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ h(
                S.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", damping: 15 },
                  children: /* @__PURE__ */ h(Ll, { className: "w-20 h-20 mx-auto mb-4" })
                }
              ),
              /* @__PURE__ */ h("h2", { className: "text-3xl mb-2", style: { fontFamily: "'Playfair Display', serif" }, children: s[n].orderConfirmed }),
              /* @__PURE__ */ h("p", { className: "text-white/90", children: s[n].thankYou })
            ] }),
            /* @__PURE__ */ m("div", { className: "p-8 space-y-6", children: [
              /* @__PURE__ */ m("div", { className: "bg-[#F8F4E8] rounded-lg p-4 text-center", children: [
                /* @__PURE__ */ h("p", { className: "text-sm text-[#6B5D52] mb-1", children: s[n].orderId }),
                /* @__PURE__ */ h("p", { className: "text-xl font-mono font-bold text-[#2D4A3E]", children: i.orderId })
              ] }),
              /* @__PURE__ */ m("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ m("div", { className: "bg-white border-2 border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ m("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ h(La, { className: "w-5 h-5 text-[#D4705C]" }),
                    /* @__PURE__ */ h("span", { className: "text-sm text-[#6B5D52]", children: s[n].orderType })
                  ] }),
                  /* @__PURE__ */ h("p", { className: "text-[#2D4A3E] font-semibold", children: i.orderType })
                ] }),
                /* @__PURE__ */ m("div", { className: "bg-white border-2 border-gray-200 rounded-lg p-4", children: [
                  /* @__PURE__ */ m("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ h(te, { className: "w-5 h-5 text-[#D4705C]" }),
                    /* @__PURE__ */ h("span", { className: "text-sm text-[#6B5D52]", children: s[n].estimatedTime })
                  ] }),
                  /* @__PURE__ */ m("p", { className: "text-[#2D4A3E] font-semibold", children: [
                    r,
                    " ",
                    s[n].minutes
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ m("div", { className: "space-y-3", children: [
                i.customerDetails.address && /* @__PURE__ */ m("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ h(rn, { className: "w-5 h-5 text-[#D4705C] flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ m("div", { children: [
                    /* @__PURE__ */ h("p", { className: "text-sm text-[#6B5D52] mb-1", children: s[n].deliveryAddress }),
                    /* @__PURE__ */ h("p", { className: "text-[#2D4A3E]", children: i.customerDetails.address })
                  ] })
                ] }),
                /* @__PURE__ */ m("div", { className: "flex gap-3", children: [
                  /* @__PURE__ */ h(ei, { className: "w-5 h-5 text-[#D4705C] flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ m("div", { children: [
                    /* @__PURE__ */ h("p", { className: "text-sm text-[#6B5D52] mb-1", children: s[n].contactNumber }),
                    /* @__PURE__ */ h("p", { className: "text-[#2D4A3E]", children: i.customerDetails.phone })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ m("div", { children: [
                /* @__PURE__ */ h("h3", { className: "text-[#2D4A3E] font-semibold mb-3", children: s[n].orderDetails }),
                /* @__PURE__ */ m("div", { className: "bg-[#F8F4E8] rounded-lg p-4 space-y-3", children: [
                  i.items.map((a) => /* @__PURE__ */ m("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ m("div", { className: "flex-1", children: [
                      /* @__PURE__ */ h("p", { className: "text-[#2D4A3E] font-medium", children: n === "en" ? a.name : a.nameHi }),
                      /* @__PURE__ */ m("p", { className: "text-sm text-[#6B5D52]", children: [
                        n === "en" ? "Qty" : "मात्रा",
                        ": ",
                        a.quantity,
                        " × ₹",
                        a.price
                      ] })
                    ] }),
                    /* @__PURE__ */ m("p", { className: "text-[#D4705C] font-semibold", children: [
                      "₹",
                      a.quantity * a.price
                    ] })
                  ] }, a.menuItemId)),
                  /* @__PURE__ */ h("div", { className: "h-px bg-gray-300 my-3" }),
                  /* @__PURE__ */ m("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52]", children: [
                      /* @__PURE__ */ h("span", { children: n === "en" ? "Subtotal" : "उपयोग" }),
                      /* @__PURE__ */ m("span", { children: [
                        "₹",
                        i.subtotal
                      ] })
                    ] }),
                    /* @__PURE__ */ m("div", { className: "flex justify-between text-[#6B5D52]", children: [
                      /* @__PURE__ */ h("span", { children: n === "en" ? "Delivery Fee" : "डिलीवरी शुल्क" }),
                      /* @__PURE__ */ m("span", { children: [
                        "₹",
                        i.deliveryCharge
                      ] })
                    ] }),
                    /* @__PURE__ */ m("div", { className: "flex justify-between text-[#2D4A3E] text-lg font-semibold pt-2", children: [
                      /* @__PURE__ */ h("span", { children: s[n].totalAmount }),
                      /* @__PURE__ */ m("span", { className: "text-[#D4705C]", children: [
                        "₹",
                        i.totalAmount
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h(
                S.button,
                {
                  onClick: e,
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "w-full bg-[#D4705C] text-white py-4 rounded-lg font-semibold hover:bg-[#B33F2A] transition-colors",
                  children: s[n].goToHome
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function Dm() {
  const [t, e] = I("en"), [i, n] = I(!1), [s, r] = I(!1), [a, o] = I(!1), [l, c] = I(null);
  return /* @__PURE__ */ h(vl, { children: /* @__PURE__ */ m("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ h(
      xc,
      {
        language: t,
        onLanguageToggle: () => {
          e((g) => g === "en" ? "hi" : "en");
        }
      }
    ),
    /* @__PURE__ */ h(tm, { language: t }),
    /* @__PURE__ */ h(nm, { language: t }),
    /* @__PURE__ */ h(rm, { language: t }),
    /* @__PURE__ */ h(dm, { language: t }),
    /* @__PURE__ */ h(mm, { language: t }),
    /* @__PURE__ */ h(xm, { language: t }),
    /* @__PURE__ */ h(wm, { language: t }),
    /* @__PURE__ */ h(
      Nm,
      {
        onClick: () => n(!0),
        language: t
      }
    ),
    /* @__PURE__ */ h(
      Tm,
      {
        isOpen: i,
        onClose: () => n(!1),
        onCheckout: () => {
          n(!1), r(!0);
        },
        language: t
      }
    ),
    /* @__PURE__ */ h(
      Mm,
      {
        isOpen: s,
        onClose: () => r(!1),
        onSuccess: (g) => {
          r(!1), c(g), o(!0);
        },
        language: t
      }
    ),
    l && /* @__PURE__ */ h(
      Am,
      {
        isOpen: a,
        onClose: () => {
          o(!1), c(null);
        },
        order: l,
        language: t
      }
    ),
    /* @__PURE__ */ h(fl, { richColors: !0 })
  ] }) });
}
const Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dm
}, Symbol.toStringTag, { value: "Module" }));
export {
  Em as Code0_8
};
