import {d as qe, g as ot, r as Q, c as Ve, e as f, f as T, k as h, h as de, i as fe, w as ee, l as G, x as st, j as te, y as Ra, F as xe, z as ga, A as ya, q as We, v as Xe, _ as $e, B as Oa, C as rt, t as he, D as Ke, E as Pa, G as ma, H as La, I as Ca, T as Ba, J as Na, m as wa, K as lt, n as xa, b as za, L as Fa, u as qa, s as Qe, o as ka, M as Va, N as $a, O as Ua, P as ja, Q as Ga, R as Za, U as Ha, V as Ja, __tla as Wa} from "./index-ZDK39Qi6.js";
import {c as Xa, t as it, __tla as Ka} from "./index-pplKfeTF.js";
import {S as Qa, F as Ya, D as en, __tla as tn} from "./DialogFooter-BfD5gqe8.js";
let Sa, an = Promise.all([(()=>{
    try {
        return Wa
    } catch (Ue) {}
}
)(), (()=>{
    try {
        return Ka
    } catch (Ue) {}
}
)(), (()=>{
    try {
        return tn
    } catch (Ue) {}
}
)()]).then(async()=>{
    const Ue = "" + new URL("chatting-DU_rHi3Y.webp",import.meta.url).href
      , ct = S=>(We("data-v-b91d427c"),
    S = S(),
    Xe(),
    S)
      , ba = {
        class: "resultActions"
    }
      , Ta = ct(()=>h("i", {
        class: "iconfont icon-shuaxin-moren",
        style: {
            "font-size": "14px"
        }
    }, null, -1))
      , _a = ct(()=>h("i", {
        class: "iconfont icon-fuzhi-moren",
        style: {
            "font-size": "14px"
        }
    }, null, -1))
      , Da = qe({
        __name: "Actions",
        props: {
            itemData: {
                type: Object,
                default: ()=>{}
            },
            canRefresh: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["submitRetry"],
        setup(S, {emit: Y}) {
            const {proxy: d} = ot()
              , g = S
              , M = Y;
            function y() {
                var F, R;
                M("submitRetry", (F = g.itemData) == null ? void 0 : F.key, (R = g.itemData) == null ? void 0 : R.askID)
            }
            async function N() {
                var R, I;
                const F = {
                    messageId: ((R = g.itemData) == null ? void 0 : R.replyID) || ""
                };
                ((I = await ga(F)) == null ? void 0 : I.code) === "success" && (g.itemData.GoodStatus = g.itemData.GoodStatus ? 0 : 1,
                g.itemData.GoodStatus && (g.itemData.BadStatus = 0))
            }
            async function i() {
                !g.itemData.BadStatus && !d.$size.isPhone ? E(!0) : z(g.itemData.BadMessage)
            }
            const O = Q(!1);
            function E(F) {
                O.value = F
            }
            async function z(F) {
                var Z, $, ge, Ae;
                const R = {
                    messageId: ((Z = g.itemData) == null ? void 0 : Z.replyID) || "",
                    feedback: F || ""
                }
                  , I = await ya(R);
                (I == null ? void 0 : I.code) === "success" && (g.itemData.BadStatus = ($ = I.data) == null ? void 0 : $.BadStatus,
                g.itemData.BadStatus && (g.itemData.GoodStatus = 0),
                (ge = I.data) != null && ge.BadStatus && (g.itemData.BadMessage = (Ae = I.data) == null ? void 0 : Ae.FeedbackOnReply))
            }
            function V() {
                var R;
                const F = (R = document.getElementsByClassName("resultTxt-".concat(g.itemData.key))[0]) == null ? void 0 : R.innerText;
                Xa(F)
            }
            return (F,R)=>{
                const I = Ve("el-button")
                  , Z = Ve("el-tooltip");
                return f(),
                T(xe, null, [h("div", ba, [de(d).$size.isPhone ? te("", !0) : (f(),
                fe(Z, {
                    key: 0,
                    content: "\u70B9\u8D5E",
                    placement: "top"
                }, {
                    default: ee(()=>[G(I, {
                        link: "",
                        class: "iconBtn",
                        onClick: N
                    }, {
                        default: ee(()=>{
                            var $;
                            return [h("i", {
                                class: "iconfont icon-dianzan-moren",
                                style: st({
                                    fontSize: "14px",
                                    color: ($ = S.itemData) != null && $.GoodStatus ? "#DD2328" : "#71757F"
                                })
                            }, null, 4)]
                        }
                        ),
                        _: 1
                    })]),
                    _: 1
                })), G(Z, {
                    content: "\u70B9\u8E29",
                    placement: "top"
                }, {
                    default: ee(()=>[G(I, {
                        link: "",
                        class: "iconBtn",
                        onClick: i
                    }, {
                        default: ee(()=>{
                            var $;
                            return [h("i", {
                                class: "iconfont icon-diancai-moren",
                                style: st({
                                    fontSize: "14px",
                                    color: ($ = S.itemData) != null && $.BadStatus ? "#DD2328" : "#71757F"
                                })
                            }, null, 4)]
                        }
                        ),
                        _: 1
                    })]),
                    _: 1
                }), de(d).$size.isPhone ? te("", !0) : (f(),
                fe(Z, {
                    key: 1,
                    content: "\u5237\u65B0",
                    placement: "top"
                }, {
                    default: ee(()=>[S.canRefresh ? (f(),
                    fe(I, {
                        key: 0,
                        link: "",
                        class: "iconBtn",
                        onClick: y
                    }, {
                        default: ee(()=>[Ta]),
                        _: 1
                    })) : te("", !0)]),
                    _: 1
                })), G(Z, {
                    content: "\u590D\u5236",
                    placement: "top"
                }, {
                    default: ee(()=>[G(I, {
                        link: "",
                        class: "iconBtn",
                        onClick: V
                    }, {
                        default: ee(()=>[_a]),
                        _: 1
                    })]),
                    _: 1
                })]), O.value ? (f(),
                fe(Ra, {
                    key: 0,
                    modelValue: O.value,
                    "onUpdate:modelValue": R[0] || (R[0] = $=>O.value = $),
                    onOnChangeDialog: E,
                    defaultText: g.itemData.BadMessage,
                    "call-back": z,
                    closeCallBack: z
                }, null, 8, ["modelValue", "defaultText"])) : te("", !0)], 64)
            }
        }
    })
      , Ea = $e(Da, [["__scopeId", "data-v-b91d427c"]]);
    var Ye = {
        exports: {}
    };
    (function(S, Y) {
        (function(d) {
            var g = d.setTimeout
              , M = d.clearTimeout
              , y = d.XMLHttpRequest
              , N = d.XDomainRequest
              , i = d.ActiveXObject
              , O = d.EventSource
              , E = d.document
              , z = d.Promise
              , V = d.fetch
              , F = d.Response
              , R = d.TextDecoder
              , I = d.TextEncoder
              , Z = d.AbortController;
            if (typeof window < "u" && typeof E < "u" && !("readyState"in E) && E.body == null && (E.readyState = "loading",
            window.addEventListener("load", function(e) {
                E.readyState = "complete"
            }, !1)),
            y == null && i != null && (y = function() {
                return new i("Microsoft.XMLHTTP")
            }
            ),
            Object.create == null && (Object.create = function(e) {
                function a() {}
                return a.prototype = e,
                new a
            }
            ),
            Date.now || (Date.now = function() {
                return new Date().getTime()
            }
            ),
            Z == null) {
                var $ = V;
                V = function(e, a) {
                    var o = a.signal;
                    return $(e, {
                        headers: a.headers,
                        credentials: a.credentials,
                        cache: a.cache
                    }).then(function(t) {
                        var u = t.body.getReader();
                        return o._reader = u,
                        o._aborted && o._reader.cancel(),
                        {
                            status: t.status,
                            statusText: t.statusText,
                            headers: t.headers,
                            body: {
                                getReader: function() {
                                    return u
                                }
                            }
                        }
                    })
                }
                ,
                Z = function() {
                    this.signal = {
                        _reader: null,
                        _aborted: !1
                    },
                    this.abort = function() {
                        this.signal._reader != null && this.signal._reader.cancel(),
                        this.signal._aborted = !0
                    }
                }
            }
            function ge() {
                this.bitsNeeded = 0,
                this.codePoint = 0
            }
            ge.prototype.decode = function(e) {
                function a(w, n, r) {
                    if (r === 1)
                        return w >= 128 >> n && w << n <= 2047;
                    if (r === 2)
                        return w >= 2048 >> n && w << n <= 55295 || w >= 57344 >> n && w << n <= 65535;
                    if (r === 3)
                        return w >= 65536 >> n && w << n <= 1114111;
                    throw new Error
                }
                function o(w, n) {
                    if (w === 6 * 1)
                        return n >> 6 > 15 ? 3 : n > 31 ? 2 : 1;
                    if (w === 6 * 2)
                        return n > 15 ? 3 : 2;
                    if (w === 6 * 3)
                        return 3;
                    throw new Error
                }
                for (var t = 65533, u = "", l = this.bitsNeeded, p = this.codePoint, b = 0; b < e.length; b += 1) {
                    var v = e[b];
                    l !== 0 && (v < 128 || v > 191 || !a(p << 6 | v & 63, l - 6, o(l, p))) && (l = 0,
                    p = t,
                    u += String.fromCharCode(p)),
                    l === 0 ? (v >= 0 && v <= 127 ? (l = 0,
                    p = v) : v >= 192 && v <= 223 ? (l = 6 * 1,
                    p = v & 31) : v >= 224 && v <= 239 ? (l = 6 * 2,
                    p = v & 15) : v >= 240 && v <= 247 ? (l = 6 * 3,
                    p = v & 7) : (l = 0,
                    p = t),
                    l !== 0 && !a(p, l, o(l, p)) && (l = 0,
                    p = t)) : (l -= 6,
                    p = p << 6 | v & 63),
                    l === 0 && (p <= 65535 ? u += String.fromCharCode(p) : (u += String.fromCharCode(55296 + (p - 65535 - 1 >> 10)),
                    u += String.fromCharCode(56320 + (p - 65535 - 1 & 1023))))
                }
                return this.bitsNeeded = l,
                this.codePoint = p,
                u
            }
            ;
            var Ae = function() {
                try {
                    return new R().decode(new I().encode("test"), {
                        stream: !0
                    }) === "test"
                } catch (e) {
                    console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + e)
                }
                return !1
            };
            (R == null || I == null || !Ae()) && (R = ge);
            var ae = function() {};
            function re(e) {
                this.withCredentials = !1,
                this.readyState = 0,
                this.status = 0,
                this.statusText = "",
                this.responseText = "",
                this.onprogress = ae,
                this.onload = ae,
                this.onerror = ae,
                this.onreadystatechange = ae,
                this._contentType = "",
                this._xhr = e,
                this._sendTimeout = 0,
                this._abort = ae
            }
            re.prototype.open = function(e, a) {
                this._abort(!0);
                var o = this
                  , t = this._xhr
                  , u = 1
                  , l = 0;
                this._abort = function(r) {
                    o._sendTimeout !== 0 && (M(o._sendTimeout),
                    o._sendTimeout = 0),
                    (u === 1 || u === 2 || u === 3) && (u = 4,
                    t.onload = ae,
                    t.onerror = ae,
                    t.onabort = ae,
                    t.onprogress = ae,
                    t.onreadystatechange = ae,
                    t.abort(),
                    l !== 0 && (M(l),
                    l = 0),
                    r || (o.readyState = 4,
                    o.onabort(null),
                    o.onreadystatechange())),
                    u = 0
                }
                ;
                var p = function() {
                    if (u === 1) {
                        var r = 0
                          , k = ""
                          , ye = void 0;
                        if ("contentType"in t)
                            r = 200,
                            k = "OK",
                            ye = t.contentType;
                        else
                            try {
                                r = t.status,
                                k = t.statusText,
                                ye = t.getResponseHeader("Content-Type")
                            } catch (ze) {
                                r = 0,
                                k = "",
                                ye = void 0
                            }
                        r !== 0 && (u = 2,
                        o.readyState = 2,
                        o.status = r,
                        o.statusText = k,
                        o._contentType = ye,
                        o.onreadystatechange())
                    }
                }
                  , b = function() {
                    if (p(),
                    u === 2 || u === 3) {
                        u = 3;
                        var r = "";
                        try {
                            r = t.responseText
                        } catch (k) {}
                        o.readyState = 3,
                        o.responseText = r,
                        o.onprogress()
                    }
                }
                  , v = function(r, k) {
                    if ((k == null || k.preventDefault == null) && (k = {
                        preventDefault: ae
                    }),
                    b(),
                    u === 1 || u === 2 || u === 3) {
                        if (u = 4,
                        l !== 0 && (M(l),
                        l = 0),
                        o.readyState = 4,
                        r === "load")
                            o.onload(k);
                        else if (r === "error")
                            o.onerror(k);
                        else if (r === "abort")
                            o.onabort(k);
                        else
                            throw new TypeError;
                        o.onreadystatechange()
                    }
                }
                  , w = function(r) {
                    t != null && (t.readyState === 4 ? (!("onload"in t) || !("onerror"in t) || !("onabort"in t)) && v(t.responseText === "" ? "error" : "load", r) : t.readyState === 3 ? "onprogress"in t || b() : t.readyState === 2 && p())
                }
                  , n = function() {
                    l = g(function() {
                        n()
                    }, 500),
                    t.readyState === 3 && b()
                };
                "onload"in t && (t.onload = function(r) {
                    v("load", r)
                }
                ),
                "onerror"in t && (t.onerror = function(r) {
                    v("error", r)
                }
                ),
                "onabort"in t && (t.onabort = function(r) {
                    v("abort", r)
                }
                ),
                "onprogress"in t && (t.onprogress = b),
                "onreadystatechange"in t && (t.onreadystatechange = function(r) {
                    w(r)
                }
                ),
                ("contentType"in t || !("ontimeout"in y.prototype)) && (a += (a.indexOf("?") === -1 ? "?" : "&") + "padding=true"),
                t.open(e, a, !0),
                "readyState"in t && (l = g(function() {
                    n()
                }, 0))
            }
            ,
            re.prototype.abort = function() {
                this._abort(!1)
            }
            ,
            re.prototype.getResponseHeader = function(e) {
                return this._contentType
            }
            ,
            re.prototype.setRequestHeader = function(e, a) {
                var o = this._xhr;
                "setRequestHeader"in o && o.setRequestHeader(e, a)
            }
            ,
            re.prototype.getAllResponseHeaders = function() {
                return this._xhr.getAllResponseHeaders != null && this._xhr.getAllResponseHeaders() || ""
            }
            ,
            re.prototype.send = function() {
                if ((!("ontimeout"in y.prototype) || !("sendAsBinary"in y.prototype) && !("mozAnon"in y.prototype)) && E != null && E.readyState != null && E.readyState !== "complete") {
                    var e = this;
                    e._sendTimeout = g(function() {
                        e._sendTimeout = 0,
                        e.send()
                    }, 4);
                    return
                }
                var a = this._xhr;
                "withCredentials"in a && (a.withCredentials = this.withCredentials);
                try {
                    a.send(void 0)
                } catch (o) {
                    throw o
                }
            }
            ;
            function je(e) {
                return e.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(a.charCodeAt(0) + 32)
                })
            }
            function Me(e) {
                for (var a = Object.create(null), o = e.split("\r\n"), t = 0; t < o.length; t += 1) {
                    var u = o[t]
                      , l = u.split(": ")
                      , p = l.shift()
                      , b = l.join(": ");
                    a[je(p)] = b
                }
                this._map = a
            }
            Me.prototype.get = function(e) {
                return this._map[je(e)]
            }
            ,
            y != null && y.HEADERS_RECEIVED == null && (y.HEADERS_RECEIVED = 2);
            function Be() {}
            Be.prototype.open = function(e, a, o, t, u, l, p) {
                e.open("GET", u);
                var b = 0;
                e.onprogress = function() {
                    var w = e.responseText
                      , n = w.slice(b);
                    b += n.length,
                    o(n)
                }
                ,
                e.onerror = function(w) {
                    w.preventDefault(),
                    t(new Error("NetworkError"))
                }
                ,
                e.onload = function() {
                    t(null)
                }
                ,
                e.onabort = function() {
                    t(null)
                }
                ,
                e.onreadystatechange = function() {
                    if (e.readyState === y.HEADERS_RECEIVED) {
                        var w = e.status
                          , n = e.statusText
                          , r = e.getResponseHeader("Content-Type")
                          , k = e.getAllResponseHeaders();
                        a(w, n, r, new Me(k))
                    }
                }
                ,
                e.withCredentials = l;
                for (var v in p)
                    Object.prototype.hasOwnProperty.call(p, v) && e.setRequestHeader(v, p[v]);
                return e.send(),
                e
            }
            ;
            function Ge(e) {
                this._headers = e
            }
            Ge.prototype.get = function(e) {
                return this._headers.get(e)
            }
            ;
            function ie() {}
            ie.prototype.open = function(e, a, o, t, u, l, p) {
                var b = null
                  , v = new Z
                  , w = v.signal
                  , n = new R;
                return V(u, {
                    headers: p,
                    credentials: l ? "include" : "same-origin",
                    signal: w,
                    cache: "no-store"
                }).then(function(r) {
                    return b = r.body.getReader(),
                    a(r.status, r.statusText, r.headers.get("Content-Type"), new Ge(r.headers)),
                    new z(function(k, ye) {
                        var ze = function() {
                            b.read().then(function(ne) {
                                if (ne.done)
                                    k(void 0);
                                else {
                                    var W = n.decode(ne.value, {
                                        stream: !0
                                    });
                                    o(W),
                                    ze()
                                }
                            }).catch(function(ne) {
                                ye(ne)
                            })
                        };
                        ze()
                    }
                    )
                }).catch(function(r) {
                    if (r.name !== "AbortError")
                        return r
                }).then(function(r) {
                    t(r)
                }),
                {
                    abort: function() {
                        b == null || b.cancel(),
                        v.abort()
                    }
                }
            }
            ;
            function Te() {
                this._listeners = Object.create(null)
            }
            function Se(e) {
                g(function() {
                    throw e
                }, 0)
            }
            Te.prototype.dispatchEvent = function(e) {
                e.target = this;
                var a = this._listeners[e.type];
                if (a != null)
                    for (var o = a.length, t = 0; t < o; t += 1) {
                        var u = a[t];
                        try {
                            typeof u.handleEvent == "function" ? u.handleEvent(e) : u.call(this, e)
                        } catch (l) {
                            Se(l)
                        }
                    }
            }
            ,
            Te.prototype.addEventListener = function(e, a) {
                e = String(e);
                var o = this._listeners
                  , t = o[e];
                t == null && (t = [],
                o[e] = t);
                for (var u = !1, l = 0; l < t.length; l += 1)
                    t[l] === a && (u = !0);
                u || t.push(a)
            }
            ,
            Te.prototype.removeEventListener = function(e, a) {
                e = String(e);
                var o = this._listeners
                  , t = o[e];
                if (t != null) {
                    for (var u = [], l = 0; l < t.length; l += 1)
                        t[l] !== a && u.push(t[l]);
                    u.length === 0 ? delete o[e] : o[e] = u
                }
            }
            ;
            function P(e) {
                this.type = e,
                this.target = void 0
            }
            function ce(e, a) {
                P.call(this, e),
                this.data = a.data,
                this.lastEventId = a.lastEventId
            }
            ce.prototype = Object.create(P.prototype);
            function H(e, a) {
                P.call(this, e),
                this.status = a.status,
                this.statusText = a.statusText,
                this.headers = a.headers
            }
            H.prototype = Object.create(P.prototype);
            function Ze(e, a) {
                P.call(this, e),
                this.error = a.error
            }
            Ze.prototype = Object.create(P.prototype);
            var pe = -1
              , le = 0
              , be = 1
              , _e = 2
              , Ne = -1
              , ve = 0
              , De = 1
              , Ee = 2
              , c = 3
              , x = /^text\/event\-stream(;.*)?$/i
              , s = 1e3
              , _ = 18e6
              , C = function(e, a) {
                var o = e == null ? a : parseInt(e, 10);
                return o !== o && (o = a),
                U(o)
            }
              , U = function(e) {
                return Math.min(Math.max(e, s), _)
            }
              , J = function(e, a, o) {
                try {
                    typeof a == "function" && a.call(e, o)
                } catch (t) {
                    Se(t)
                }
            };
            function D(e, a) {
                Te.call(this),
                a = a || {},
                this.onopen = void 0,
                this.onmessage = void 0,
                this.onerror = void 0,
                this.url = void 0,
                this.readyState = void 0,
                this.withCredentials = void 0,
                this.headers = void 0,
                this._close = void 0,
                A(this, e, a)
            }
            function j() {
                return y != null && "withCredentials"in y.prototype || N == null ? new y : new N
            }
            var Re = V != null && F != null && "body"in F.prototype;
            function A(e, a, o) {
                a = String(a);
                var t = !!o.withCredentials
                  , u = o.lastEventIdQueryParameterName || "lastEventId"
                  , l = U(1e3)
                  , p = C(o.heartbeatTimeout, 45e3)
                  , b = ""
                  , v = l
                  , w = !1
                  , n = 0
                  , r = o.headers || {}
                  , k = o.Transport
                  , ye = Re && k == null ? void 0 : new re(k != null ? new k : j())
                  , ze = k != null && typeof k != "string" ? new k : ye == null ? new ie : new Be
                  , ne = void 0
                  , W = 0
                  , ue = pe
                  , Oe = ""
                  , He = ""
                  , me = ""
                  , Je = ""
                  , X = ve
                  , at = 0
                  , Ie = 0
                  , Aa = function(B, L, oe, se) {
                    if (ue === le)
                        if (B === 200 && oe != null && x.test(oe)) {
                            ue = be,
                            w = Date.now(),
                            v = l,
                            e.readyState = be;
                            var K = new H("open",{
                                status: B,
                                statusText: L,
                                headers: se
                            });
                            e.dispatchEvent(K),
                            J(e, e.onopen, K)
                        } else {
                            var q = "";
                            B !== 200 ? (L && (L = L.replace(/\s+/g, " ")),
                            q = "EventSource's response has a status " + B + " " + L + " that is not 200. Aborting the connection.") : q = "EventSource's response has a Content-Type specifying an unsupported type: " + (oe == null ? "-" : oe.replace(/\s+/g, " ")) + ". Aborting the connection.",
                            nt();
                            var K = new H("error",{
                                status: B,
                                statusText: L,
                                headers: se
                            });
                            e.dispatchEvent(K),
                            J(e, e.onerror, K),
                            console.error(q)
                        }
                }
                  , Ma = function(B) {
                    if (ue === be) {
                        for (var L = -1, oe = 0; oe < B.length; oe += 1) {
                            var se = B.charCodeAt(oe);
                            (se === 10 || se === 13) && (L = oe)
                        }
                        var K = (L !== -1 ? Je : "") + B.slice(0, L + 1);
                        Je = (L === -1 ? Je : "") + B.slice(L + 1),
                        B !== "" && (w = Date.now(),
                        n += B.length);
                        for (var q = 0; q < K.length; q += 1) {
                            var se = K.charCodeAt(q);
                            if (X === Ne && se === 10)
                                X = ve;
                            else if (X === Ne && (X = ve),
                            se === 13 || se === 10) {
                                if (X !== ve) {
                                    X === De && (Ie = q + 1);
                                    var Ce = K.slice(at, Ie - 1)
                                      , we = K.slice(Ie + (Ie < q && K.charCodeAt(Ie) === 32 ? 1 : 0), q);
                                    Ce === "data" ? (Oe += "\n",
                                    Oe += we) : Ce === "id" ? He = we : Ce === "event" ? me = we : Ce === "retry" ? (l = C(we, l),
                                    v = l) : Ce === "heartbeatTimeout" && (p = C(we, p),
                                    W !== 0 && (M(W),
                                    W = g(function() {
                                        Fe()
                                    }, p)))
                                }
                                if (X === ve) {
                                    if (Oe !== "") {
                                        b = He,
                                        me === "" && (me = "message");
                                        var Pe = new ce(me,{
                                            data: Oe.slice(1),
                                            lastEventId: He
                                        });
                                        if (e.dispatchEvent(Pe),
                                        me === "open" ? J(e, e.onopen, Pe) : me === "message" ? J(e, e.onmessage, Pe) : me === "error" && J(e, e.onerror, Pe),
                                        ue === _e)
                                            return
                                    }
                                    Oe = "",
                                    me = ""
                                }
                                X = se === 13 ? Ne : ve
                            } else
                                X === ve && (at = q,
                                X = De),
                                X === De ? se === 58 && (Ie = q + 1,
                                X = Ee) : X === Ee && (X = c)
                        }
                    }
                }
                  , ha = function(B) {
                    if (ue === be || ue === le) {
                        ue = pe,
                        W !== 0 && (M(W),
                        W = 0),
                        W = g(function() {
                            Fe()
                        }, v),
                        v = U(Math.min(l * 16, v * 2)),
                        e.readyState = le;
                        var L = new Ze("error",{
                            error: B
                        });
                        e.dispatchEvent(L),
                        J(e, e.onerror, L),
                        B != null && console.error(B)
                    }
                }
                  , nt = function() {
                    ue = _e,
                    ne != null && (ne.abort(),
                    ne = void 0),
                    W !== 0 && (M(W),
                    W = 0),
                    e.readyState = _e
                }
                  , Fe = function() {
                    if (W = 0,
                    ue !== pe) {
                        if (!w && ne != null)
                            ha(new Error("No activity within " + p + " milliseconds. " + (ue === le ? "No response received." : n + " chars received.") + " Reconnecting.")),
                            ne != null && (ne.abort(),
                            ne = void 0);
                        else {
                            var B = Math.max((w || Date.now()) + p - Date.now(), 1);
                            w = !1,
                            W = g(function() {
                                Fe()
                            }, B)
                        }
                        return
                    }
                    w = !1,
                    n = 0,
                    W = g(function() {
                        Fe()
                    }, p),
                    ue = le,
                    Oe = "",
                    me = "",
                    He = b,
                    Je = "",
                    at = 0,
                    Ie = 0,
                    X = ve;
                    var L = a;
                    if (a.slice(0, 5) !== "data:" && a.slice(0, 5) !== "blob:" && b !== "") {
                        var oe = a.indexOf("?");
                        L = oe === -1 ? a : a.slice(0, oe + 1) + a.slice(oe + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(we, Pe) {
                            return Pe === u ? "" : we
                        }),
                        L += (a.indexOf("?") === -1 ? "?" : "&") + u + "=" + encodeURIComponent(b)
                    }
                    var se = e.withCredentials
                      , K = {};
                    K.Accept = "text/event-stream";
                    var q = e.headers;
                    if (q != null)
                        for (var Ce in q)
                            Object.prototype.hasOwnProperty.call(q, Ce) && (K[Ce] = q[Ce]);
                    try {
                        ne = ze.open(ye, Aa, Ma, ha, L, se, K)
                    } catch (we) {
                        throw nt(),
                        we
                    }
                };
                e.url = a,
                e.readyState = le,
                e.withCredentials = t,
                e.headers = r,
                e._close = nt,
                Fe()
            }
            D.prototype = Object.create(Te.prototype),
            D.prototype.CONNECTING = le,
            D.prototype.OPEN = be,
            D.prototype.CLOSED = _e,
            D.prototype.close = function() {
                this._close()
            }
            ,
            D.CONNECTING = le,
            D.OPEN = be,
            D.CLOSED = _e,
            D.prototype.withCredentials = void 0;
            var m = O;
            y != null && (O == null || !("withCredentials"in O.prototype)) && (m = D),
            function(e) {
                {
                    var a = e(Y);
                    a !== void 0 && (S.exports = a)
                }
            }(function(e) {
                e.EventSourcePolyfill = D,
                e.NativeEventSource = O,
                e.EventSource = m
            })
        }
        )(typeof globalThis > "u" ? typeof window < "u" ? window : typeof self < "u" ? self : Oa : globalThis)
    }
    )(Ye, Ye.exports);
    var Ia = Ye.exports;
    let ut, dt, pt, vt, ft, ht, gt, yt, mt, Ct, wt, xt, et, kt, tt, St, bt, Tt, _t, Dt, Et, It, At, Mt, Rt, Ot, Pt, Le, Lt, Bt, Nt, zt, Ft, qt, ke, Vt, $t, Ut, jt, Gt, Zt, Ht, Jt, Wt, Xt, Kt, Qt, Yt, ea, ta, aa, na, oa, sa, ra, la, ia, ca, ua, da, pa, va, fa;
    ut = {
        class: "list-wrap"
    },
    dt = ["onClick"],
    pt = {
        class: "item-header"
    },
    vt = {
        class: "site-info"
    },
    ft = {
        class: "site-icon"
    },
    ht = ["src", "onError"],
    gt = {
        class: "site-name"
    },
    yt = {
        class: "date"
    },
    mt = {
        class: "item-index"
    },
    Ct = {
        class: "item-title"
    },
    wt = {
        class: "item-snippet"
    },
    xt = qe({
        __name: "List",
        props: {
            list: {}
        },
        setup(S) {
            function Y(d) {
                window.open(d.url)
            }
            return (d,g)=>{
                const M = Ve("el-text");
                return f(),
                T("div", ut, [(f(!0),
                T(xe, null, rt(d.list, (y,N)=>(f(),
                T("div", {
                    key: y.id,
                    class: "search-item",
                    onClick: i=>Y(y)
                }, [h("div", pt, [h("div", vt, [h("div", ft, [h("img", {
                    src: y.siteIcon,
                    class: "icon-image",
                    alt: "icon",
                    onError: i=>y.siteIcon = "/favicon.png"
                }, null, 40, ht)]), h("div", gt, he(y.siteName), 1), h("div", yt, he(new Date(y.dateLastCrawled).toLocaleDateString()), 1)]), h("div", mt, he(N + 1), 1)]), h("div", Ct, [G(M, {
                    "line-clamp": "2"
                }, {
                    default: ee(()=>[Ke(he(y.title), 1)]),
                    _: 2
                }, 1024)]), h("div", wt, [G(M, {
                    class: "text-3",
                    "line-clamp": "2",
                    size: "small"
                }, {
                    default: ee(()=>[Ke(he(y.snippet), 1)]),
                    _: 2
                }, 1024)])], 8, dt))), 128))])
            }
        }
    }),
    et = $e(xt, [["__scopeId", "data-v-e9925dc3"]]),
    kt = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.87398%209.93997L11.9%2011.9M6.64998%204.19998C7.80977%204.19998%208.74997%205.14018%208.74997%206.29998M11.2466%206.67331C11.2466%209.19909%209.19909%2011.2466%206.67331%2011.2466C4.14753%2011.2466%202.09998%209.19909%202.09998%206.67331C2.09998%204.14753%204.14753%202.09998%206.67331%202.09998C9.19909%202.09998%2011.2466%204.14753%2011.2466%206.67331Z'%20stroke='%23C00019'%20stroke-width='1.2'%20stroke-linecap='round'/%3e%3c/svg%3e",
    tt = S=>(We("data-v-044f4f53"),
    S = S(),
    Xe(),
    S),
    St = ["src"],
    bt = {
        class: "search-count"
    },
    Tt = {
        class: "drawer-header"
    },
    _t = tt(()=>h("div", {
        class: "search-count"
    }, " \u641C\u7D22\u7ED3\u679C ", -1)),
    Dt = {
        key: 0,
        class: "search-results",
        style: {
            height: "calc(100vh - 95px)"
        }
    },
    Et = {
        class: "results-header"
    },
    It = tt(()=>h("div", {
        class: "search-count"
    }, " \u641C\u7D22\u7ED3\u679C ", -1)),
    At = qe({
        __name: "index",
        props: {
            list: {}
        },
        setup(S) {
            const Y = Pa("closeSearchFlag", Q(1))
              , d = Q(!1);
            ma(Y, ()=>{
                console.log("closeSearchFlag", Y.value),
                d.value = !1
            }
            );
            const {proxy: g} = ot()
              , M = ()=>{
                wa() || (d.value ? d.value = !1 : (Y.value += 1,
                setTimeout(()=>{
                    d.value = !0
                }
                , 100)))
            }
            ;
            return (y,N)=>{
                const i = Ve("el-drawer");
                return f(),
                T(xe, null, [h("div", {
                    class: "search-trigger",
                    onClick: M
                }, [h("img", {
                    src: de(kt),
                    class: "search-icon"
                }, null, 8, St), h("div", bt, " \u5DF2\u641C\u7D22\u5230 " + he(y.list.length) + " \u4E2A\u7F51\u9875 ", 1), G(de(La), {
                    class: "arrow-icon"
                })]), de(g).$size.isPhone ? (f(),
                fe(i, {
                    key: 0,
                    modelValue: d.value,
                    "onUpdate:modelValue": N[1] || (N[1] = O=>d.value = O),
                    "show-close": !1,
                    "append-to-body": "",
                    size: "85%",
                    style: {
                        "--el-drawer-padding-primary": "0"
                    },
                    title: "\u641C\u7D22\u7ED3\u679C"
                }, {
                    header: ee(()=>[h("div", Tt, [_t, G(de(Ca), {
                        class: "close-icon",
                        onClick: N[0] || (N[0] = O=>d.value = !1)
                    })])]),
                    default: ee(()=>[G(et, {
                        list: y.list
                    }, null, 8, ["list"])]),
                    _: 1
                }, 8, ["modelValue"])) : (f(),
                fe(Na, {
                    key: 1,
                    to: "body"
                }, [G(Ba, {
                    name: "slide-in"
                }, {
                    default: ee(()=>[d.value ? (f(),
                    T("div", Dt, [h("div", Et, [It, G(de(Ca), {
                        class: "close-icon",
                        onClick: N[2] || (N[2] = O=>d.value = !1)
                    })]), G(et, {
                        list: y.list
                    }, null, 8, ["list"])])) : te("", !0)]),
                    _: 1
                })]))], 64)
            }
        }
    }),
    Mt = $e(At, [["__scopeId", "data-v-044f4f53"]]),
    Rt = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='atom'%3e%3cpath%20id='Icon'%20d='M6.99977%207.0526V6.99997M12.2281%2012.2282C11.1222%2013.334%207.88505%2011.8897%204.99761%209.00229C2.11017%206.11485%200.665886%202.87766%201.77171%201.77184C2.87754%200.666008%206.11472%202.11029%209.00216%204.99773C11.8896%207.88517%2013.3339%2011.1224%2012.2281%2012.2282ZM1.77183%2012.2282C0.665999%2011.1224%202.11028%207.8852%204.99772%204.99776C7.88516%202.11032%2011.1223%200.666041%2012.2282%201.77187C13.334%202.8777%2011.8897%206.11488%209.00228%209.00232C6.11484%2011.8898%202.87765%2013.334%201.77183%2012.2282Z'%20stroke='%23C00019'%20stroke-width='1.2'%20stroke-linecap='round'/%3e%3c/g%3e%3c/svg%3e",
    Ot = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='atom'%3e%3cpath%20id='Icon%20(Stroke)'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.93228%202.00255C2.52818%201.9825%202.31113%202.08098%202.19604%202.19607C2.08095%202.31116%201.98247%202.52822%202.00252%202.93231C2.02257%203.33645%202.16082%203.85951%202.43518%204.47446C2.64731%204.94991%202.93275%205.46241%203.28472%205.99368C3.67635%205.51596%204.10761%205.03937%204.57352%204.57347C5.03939%204.1076%205.51594%203.67636%205.99364%203.28474C5.46237%202.93278%204.94988%202.64734%204.47443%202.43522C3.85948%202.16085%203.33641%202.0226%202.93228%202.00255ZM7.00003%202.51891C6.2987%202.02619%205.60954%201.62764%204.96336%201.33934C4.26985%201.02993%203.59582%200.833991%202.99174%200.804021C2.38761%200.774048%201.78533%200.909717%201.34751%201.34754C0.909686%201.78537%200.774017%202.38764%200.80399%202.99177C0.833961%203.59585%201.0299%204.26988%201.33931%204.96339C1.62761%205.60958%202.02616%206.29874%202.51889%207.00007C2.02621%207.70135%201.6277%208.39046%201.33942%209.0366C1.03001%209.7301%200.834073%2010.4041%200.804102%2011.0082C0.77413%2011.6123%200.909799%2012.2146%201.34762%2012.6524C1.78545%2013.0903%202.38772%2013.2259%202.99185%2013.196C3.59593%2013.166%204.26996%2012.9701%204.96347%2012.6606C5.60962%2012.3724%206.29874%2011.9738%207.00002%2011.4812C7.70129%2011.9738%208.3904%2012.3723%209.03653%2012.6606C9.73004%2012.97%2010.4041%2013.166%2011.0082%2013.1959C11.6123%2013.2259%2012.2146%2013.0902%2012.6524%2012.6524C13.0902%2012.2146%2013.2259%2011.6123%2013.1959%2011.0082C13.1659%2010.4041%2012.97%209.73007%2012.6606%209.03656C12.3723%208.39043%2011.9738%207.70134%2011.4811%207.00007C11.9739%206.29875%2012.3724%205.6096%2012.6607%204.96342C12.9701%204.26992%2013.166%203.59588%2013.196%202.9918C13.226%202.38768%2013.0903%201.7854%2012.6525%201.34757C12.2147%200.90975%2011.6124%200.774081%2011.0083%200.804054C10.4042%200.834024%209.73015%201.02996%209.03664%201.33937C8.39047%201.62766%207.70134%202.0262%207.00003%202.51891ZM7.00002%204.01521C6.47552%204.42895%205.94417%204.89986%205.42204%205.422C4.89988%205.94416%204.42894%206.47553%204.01519%207.00007C4.42892%207.52455%204.89982%208.05588%205.42193%208.57799C5.9441%209.10016%206.47548%209.57111%207.00002%209.98486C7.52455%209.57111%208.05592%209.10018%208.57807%208.57802C9.1002%208.0559%209.57111%207.52456%209.98484%207.00007C9.57108%206.47552%209.10013%205.94413%208.57796%205.42196C8.05584%204.89985%207.52451%204.42894%207.00002%204.01521ZM10.7153%205.99368C10.3237%205.51595%209.8924%205.03934%209.42649%204.57343C8.96063%204.10758%208.48409%203.67635%208.00641%203.28475C8.53766%202.93279%209.05014%202.64737%209.52557%202.43525C10.1405%202.16089%2010.6636%202.02263%2011.0677%202.00258C11.4718%201.98253%2011.6889%202.08101%2011.804%202.1961C11.9191%202.31119%2012.0175%202.52825%2011.9975%202.93234C11.9774%203.33648%2011.8392%203.85955%2011.5648%204.47449C11.3527%204.94993%2011.0673%205.46242%2010.7153%205.99368ZM10.7153%208.00646C10.3237%208.48415%209.89246%208.96069%209.4266%209.42655C8.96071%209.89244%208.48413%2010.3237%208.00641%2010.7153C8.53763%2011.0672%209.05006%2011.3526%209.52546%2011.5647C10.1404%2011.8391%2010.6635%2011.9774%2011.0676%2011.9974C11.4717%2012.0175%2011.6888%2011.919%2011.8039%2011.8039C11.9189%2011.6888%2012.0174%2011.4717%2011.9974%2011.0676C11.9773%2010.6635%2011.8391%2010.1404%2011.5647%209.52549C11.3526%209.0501%2011.0672%208.53767%2010.7153%208.00646ZM5.99363%2010.7153C5.5159%2010.3237%205.03931%209.89242%204.5734%209.42652C4.10755%208.96067%203.67633%208.48413%203.28473%208.00646C2.93281%208.53768%202.6474%209.05012%202.4353%209.52553C2.16094%2010.1405%202.02268%2010.6635%202.00263%2011.0677C1.98258%2011.4718%202.08106%2011.6888%202.19615%2011.8039C2.31124%2011.919%202.5283%2012.0175%202.93239%2011.9974C3.33653%2011.9774%203.8596%2011.8391%204.47454%2011.5648C4.94995%2011.3527%205.4624%2011.0673%205.99363%2010.7153ZM6.99983%206.39994C7.3312%206.39994%207.59983%206.66857%207.59983%206.99994V7.05257C7.59983%207.38394%207.3312%207.65257%206.99983%207.65257C6.66846%207.65257%206.39983%207.38394%206.39983%207.05257V6.99994C6.39983%206.66857%206.66846%206.39994%206.99983%206.39994Z'%20fill='%23595959'/%3e%3c/g%3e%3c/svg%3e",
    Pt = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='&%23228;&%23184;&%23139;&%23231;&%23174;&%23173;&%23229;&%23164;&%23180;'%3e%3cpath%20id='Icon%20(Stroke)'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.64642%207.85355C5.84168%208.04882%206.15827%208.04882%206.35353%207.85355L9.35357%204.85352C9.54883%204.65825%209.54883%204.34167%209.35357%204.14641C9.1583%203.95115%208.84172%203.95115%208.64646%204.14641L5.99998%206.79289L3.35349%204.14641C3.15823%203.95115%202.84165%203.95115%202.64639%204.14641C2.45112%204.34167%202.45112%204.65825%202.64639%204.85352L5.64642%207.85355Z'%20fill='%238C8C8C'/%3e%3c/g%3e%3c/svg%3e",
    Le = S=>(We("data-v-b0d596d0"),
    S = S(),
    Xe(),
    S),
    Lt = Le(()=>h("span", {
        class: "loading-ring"
    }, null, -1)),
    Bt = Le(()=>h("img", {
        src: Rt,
        alt: "atom",
        class: "atom-icon active"
    }, null, -1)),
    Nt = Le(()=>h("img", {
        src: Ot,
        alt: "atom",
        class: "atom-icon inactive"
    }, null, -1)),
    zt = Le(()=>h("img", {
        src: Pt,
        alt: "arrow",
        class: "arrow"
    }, null, -1)),
    Ft = qe({
        __name: "ThinkingBtn",
        props: {
            content: {
                type: String,
                required: !0,
                default: ""
            },
            loading: {
                type: Boolean,
                default: !1
            },
            unfold: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:unfold", "toggleFold"],
        setup(S, {emit: Y}) {
            const d = S
              , g = Y
              , M = lt({
                get() {
                    return d.unfold
                },
                set(O) {
                    g("update:unfold", O)
                }
            })
              , y = lt(()=>d.content.includes("<think>"))
              , N = lt(()=>y.value && !d.content.includes("</think>") && d.loading);
            function i() {
                M.value = !M.value,
                g("toggleFold", M.value)
            }
            return (O,E)=>y.value ? (f(),
            T("div", {
                key: 0,
                class: xa(["fold-btn", {
                    "is-fold": !M.value
                }]),
                onClick: i
            }, [N.value ? (f(),
            T(xe, {
                key: 0
            }, [Lt, Ke(" \u6B63\u5728\u601D\u8003... ")], 64)) : (f(),
            T(xe, {
                key: 1
            }, [Bt, Nt, Ke(" \u6DF1\u5EA6\u601D\u8003 ")], 64)), zt], 2)) : te("", !0)
        }
    }),
    qt = $e(Ft, [["__scopeId", "data-v-b0d596d0"]]),
    ke = S=>(We("data-v-df75a812"),
    S = S(),
    Xe(),
    S),
    Vt = {
        id: "resultArea",
        class: "resultArea"
    },
    $t = {
        class: "askArea"
    },
    Ut = {
        class: "askPop",
        style: {
            "background-color": "red"
        }
    },
    jt = {
        class: "icon",
        "aria-hidden": "true",
        style: {
            width: "48px",
            height: "48px"
        }
    },
    Gt = ke(()=>h("use", {
        "xlink:href": "#icon-touxiang3"
    }, null, -1)),
    Zt = [Gt],
    Ht = {
        class: "askArea"
    },
    Jt = {
        class: "icon",
        "aria-hidden": "true",
        style: {
            width: "48px",
            height: "48px"
        }
    },
    Wt = ke(()=>h("use", {
        "xlink:href": "#icon-touxiang3"
    }, null, -1)),
    Xt = [Wt],
    Kt = {
        key: 1,
        class: "replyArea"
    },
    Qt = ke(()=>h("img", {
        style: {
            width: "48px",
            height: "48px",
            "border-radius": "50%"
        },
        src: Ue
    }, null, -1)),
    Yt = {
        key: 0,
        class: "resultPop"
    },
    ea = ["innerHTML"],
    ta = {
        key: 1,
        class: "resultLoading",
        style: {
            padding: "0"
        }
    },
    aa = ke(()=>h("div", {
        class: "loading"
    }, null, -1)),
    na = [aa],
    oa = {
        key: 1,
        class: "resultLoading"
    },
    sa = {
        key: 0,
        style: {
            color: "darkgray"
        }
    },
    ra = {
        key: 1,
        style: {
            color: "darkgray"
        }
    },
    la = {
        key: 2,
        style: {
            color: "darkgray"
        }
    },
    ia = ke(()=>h("div", {
        class: "loading"
    }, null, -1)),
    ca = {
        key: 0,
        class: "busy-text"
    },
    ua = {
        key: 4
    },
    da = ke(()=>h("div", {
        id: "observeDiv",
        class: "observeDiv"
    }, null, -1)),
    pa = {
        class: "footer"
    },
    va = ke(()=>h("i", {
        class: "iconfont icon-zhidazuixin"
    }, null, -1)),
    fa = qe({
        __name: "index",
        setup(S) {
            const {proxy: Y} = ot()
              , d = za()
              , g = Fa()
              , M = qa()
              , {currentRoute: y} = M
              , {logInStatus: N} = Qe(d)
              , i = Q([])
              , O = Q({
                key: 0,
                askTxt: "",
                askID: "",
                replyTxt: "",
                replyID: "",
                GoodStatus: 0,
                BadStatus: 0,
                BadMessage: "",
                cancleFlag: !1,
                errorFlag: !1,
                askFiles: [],
                unfold: !0,
                rawTxt: ""
            })
              , E = Q("")
              , z = Q(!1)
              , V = Q("")
              , {chooseModel: F} = Qe(d)
              , {modelListMap: R} = Qe(d)
              , I = Q({
                logout: "\u7528\u6237\u672A\u767B\u5F55",
                error: "\u5F53\u524D\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                cancle: "\u7528\u6237\u53D6\u6D88\u63D0\u95EE",
                empty: "\u62B1\u6B49\uFF0C\u6682\u65F6\u65E0\u6CD5\u56DE\u7B54\u60A8\u7684\u95EE\u9898"
            })
              , Z = Q("")
              , $ = Q(!1)
              , ge = Q(!1)
              , {modelList: Ae, networking: ae} = Qe(d)
              , re = Q(null)
              , je = Q(1);
            Za("closeSearchFlag", je),
            ka(()=>{
                var c;
                V.value = (c = g.query.activeChatId) != null ? c : "",
                V.value && (d.setActiveChatId(V.value),
                Be()),
                E.value = g.query.data || "",
                E.value && le()
            }
            ),
            ka(()=>{
                const c = new IntersectionObserver(s=>{
                    s.forEach(_=>{
                        _.isIntersecting ? De.value = !1 : De.value = !0
                    }
                    )
                }
                ,{
                    root: document.querySelector("#chatArea"),
                    rootMargin: "0px",
                    threshold: .1
                })
                  , x = document.querySelector("#observeDiv");
                x && c.observe(x)
            }
            ),
            ma(()=>g.query.activeChatId, (c,x)=>{
                V.value = c + "",
                x && P && (P.close(),
                Se && Se(),
                z.value = !1,
                pe()),
                x && Be()
            }
            , {
                deep: !0
            });
            let Me = null;
            async function Be() {
                var c, x;
                if (V.value !== "")
                    try {
                        $.value = !0,
                        Me && Me(),
                        i.value = [];
                        const s = await Va(V.value, _=>{
                            Me = _
                        }
                        );
                        if (s.code === "success" && (s != null && s.data)) {
                            const _ = ((c = R.value[s == null ? void 0 : s.data[0].MessageFrom]) == null ? void 0 : c.modelType) || ""
                              , C = (s == null ? void 0 : s.data[0].MessageFrom) == "default" ? Ae.value[0].id : _;
                            d.setActiveModelId(C);
                            const U = (x = s == null ? void 0 : s.data) == null ? void 0 : x.reverse()
                              , J = []
                              , D = [];
                            U.map(j=>{
                                j.MessageFromType === "USER" ? J.push(j) : j.MessageFromType === "AI" && D.push(j)
                            }
                            ),
                            J.map((j,Re)=>{
                                const A = JSON.parse(JSON.stringify(O.value));
                                A.key = Re,
                                A.askTxt = j.MessageContent,
                                A.askID = j.ID;
                                const m = D.filter(e=>e.ReplyMessageId === j.ID)[0];
                                (m == null ? void 0 : m.TerminationInfo) === "\u3010\u7528\u6237\u53D6\u6D88\u3011" || (m == null ? void 0 : m.TerminationInfo) === "" ? (A.replyTxt = it(m == null ? void 0 : m.MessageContent),
                                A.rawTxt = m == null ? void 0 : m.MessageContent,
                                A.replyTxt || (A.replyEmptyTxt = !0)) : (A.replyTxt = "",
                                A.rawTxt = "",
                                A.replyEmptyTxt = !0,
                                A.cancleFlag = !1,
                                I.value.cancle = (m == null ? void 0 : m.TerminationInfo) || I.value.cancle),
                                A.replyID = m == null ? void 0 : m.ID,
                                A.GoodStatus = m == null ? void 0 : m.GoodStatus,
                                A.BadStatus = m == null ? void 0 : m.BadStatus,
                                A.unfold = !0,
                                A.OnlineSearchWebPages = j != null && j.OnlineSearchWebPages ? JSON.parse(j.OnlineSearchWebPages) : "",
                                A.BadMessage = m == null ? void 0 : m.FeedbackOnReply,
                                i.value.push(A)
                            }
                            ),
                            Ee()
                        }
                    } finally {
                        $.value = !1
                    }
            }
            async function Ge(c, x) {
                const s = i.value[c];
                s.replyTxt = "",
                s.cancleFlag = !1,
                s.errorFlag = !1;
                try {
                    s.BadStatus && await ya({
                        messageId: s.replyID,
                        feedback: ""
                    }),
                    s.GoodStatus && await ga({
                        messageId: s.replyID
                    })
                } catch (_) {}
                le(i.value[c].askTxt, "retry", c, x)
            }
            let ie = [];
            async function Te(c, x) {
                ie = x,
                le(c)
            }
            let Se = null
              , P = null
              , ce = ""
              , H = "";
            async function Ze(c, x, s, _) {
                var Re, A, m, e, a, o, t, u, l, p, b, v, w;
                const C = {
                    modelType: F.value,
                    query: x == "retry" ? c : E.value,
                    conversationId: V.value || "",
                    messageType: ae.value ? "online" : "local"
                };
                let U = "";
                if (x != "retry")
                    try {
                        const n = await Ha(C, r=>{
                            Se = r
                        }
                        );
                        if (n.code == "success") {
                            if (!((A = (Re = n == null ? void 0 : n.data) == null ? void 0 : Re.conversation) != null && A.ID))
                                return;
                            U = n.data.messageId,
                            H = (m = n == null ? void 0 : n.data) != null && m.OnlineSearchWebPages ? JSON.parse(n == null ? void 0 : n.data.OnlineSearchWebPages) : "",
                            V.value = (a = (e = n == null ? void 0 : n.data) == null ? void 0 : e.conversation) == null ? void 0 : a.ID,
                            Ja(),
                            d.setActiveChatId(V.value),
                            M.replace({
                                path: y.value.path,
                                query: {
                                    activeChatId: (t = (o = n == null ? void 0 : n.data) == null ? void 0 : o.conversation) == null ? void 0 : t.ID
                                }
                            }),
                            ie = []
                        } else {
                            z.value = !1;
                            return
                        }
                    } catch (n) {
                        ((u = n == null ? void 0 : n.response) == null ? void 0 : u.status) === 428 && ((p = (l = n.response) == null ? void 0 : l.data) != null && p.error) ? Z.value = (v = (b = n.response) == null ? void 0 : b.data) == null ? void 0 : v.error : Z.value = "",
                        z.value = !1
                    }
                else
                    U = _ || "";
                if (s !== void 0)
                    i.value[s].replyTxt = "",
                    i.value[s].askID = U,
                    i.value[s].unfold = !0,
                    ce = "";
                else {
                    const n = i.value.length - 1;
                    i.value[n].replyTxt = "",
                    i.value[n].askID = U,
                    i.value[n].unfold = !0,
                    ce = ""
                }
                const J = E.value
                  , D = F.value || void 0
                  , j = "https://chat.scnet.cn";
                P = new Ia.EventSourcePolyfill("".concat(j, "/api/chat/GetReplay?messageId=").concat(U, "&query=").concat(J, "&modelType=").concat(D),{
                    headers: {
                        "X-Token-DASClient": localStorage.getItem("user_chat_token")
                    }
                }),
                P.onopen = function(n) {
                    console.log(n, "onopen")
                }
                ,
                P.onmessage = function(n) {
                    pe();
                    const r = JSON.parse(n == null ? void 0 : n.data);
                    if (ce += r,
                    s !== void 0)
                        H != null && H.length && !i.value[s].OnlineSearchWebPages && (i.value[s].OnlineSearchWebPages = H,
                        H = ""),
                        i.value[s].replyTxt = it(ce.trim()),
                        i.value[s].rawTxt = ce.trim();
                    else {
                        const k = i.value.length - 1;
                        H != null && H.length && !i.value[k].OnlineSearchWebPages && (i.value[k].OnlineSearchWebPages = H,
                        H = ""),
                        i.value[k].replyTxt = it(ce.trim()),
                        i.value[k].rawTxt = ce.trim()
                    }
                    Ee({
                        checkBottom: !0
                    })
                }
                ,
                P.addEventListener("replyMessageId", function(n) {
                    const r = JSON.parse(n == null ? void 0 : n.data);
                    if (s !== void 0)
                        i.value[s].replyID = r || "";
                    else {
                        const k = i.value.length - 1;
                        i.value[k].replyID = r || ""
                    }
                }, !1),
                P.onerror = function(n) {
                    pe();
                    let r = s !== void 0 ? s : i.value.length - 1;
                    i.value[r].errorFlag = !0,
                    z.value = !1,
                    i.value[r].askLoading = !1,
                    console.log(n, P, "<p>Connection close.</p>")
                }
                ,
                P.addEventListener("end", function(n) {
                    ce = "",
                    P.close(),
                    z.value = !1,
                    pe();
                    let r = s !== void 0 ? s : i.value.length - 1;
                    i.value[r].askLoading = !1
                }, !1)
            }
            function pe() {
                ge.value = !1,
                re.value && clearTimeout(re.value),
                re.value = null
            }
            async function le(c, x, s, _) {
                if (z.value)
                    return;
                if (E.value = c || E.value,
                x !== "retry") {
                    if (E.value === "")
                        return;
                    _e()
                }
                s === void 0 && Ee();
                let C = s !== void 0 ? s : i.value.length - 1;
                z.value = !0,
                i.value[C].askLoading = !0,
                pe(),
                re.value = setTimeout(()=>{
                    z.value && (ge.value = !0)
                }
                , 2 * 10 * 1e3);
                let U;
                try {
                    (ie == null ? void 0 : ie.length) > 0 ? U = await be() : (Ze(c, x, s, _),
                    E.value = "")
                } catch (J) {
                    let D = s !== void 0 ? s : i.value.length - 1;
                    i.value[D].errorFlag = !0
                }
            }
            async function be() {
                let c = [];
                for (let x = 0; x < ie.length; x++) {
                    let s = ie[x].raw;
                    const _ = await $a({
                        File: s
                    });
                    (_ == null ? void 0 : _.code) === "success" && c.push(_ == null ? void 0 : _.data)
                }
                return c
            }
            function _e() {
                const c = JSON.parse(JSON.stringify(O.value));
                c.key = i.value.length,
                c.askTxt = E.value,
                c.askFiles = ie,
                i.value.push(c)
            }
            function Ne() {
                P && P.close(),
                Se && Se();
                const c = i.value.length - 1;
                i.value[c].cancleFlag = !0,
                z.value = !1,
                pe(),
                i.value[c].askLoading = !1
            }
            function ve() {
                const c = document.getElementById("chatArea")
                  , x = (c == null ? void 0 : c.scrollHeight) || 0
                  , s = (c == null ? void 0 : c.scrollTop) || 0
                  , _ = (c == null ? void 0 : c.clientHeight) || 0;
                return x - s - _ < 1
            }
            const De = Q(!1);
            async function Ee(c={}) {
                var _;
                const {type: x="", checkBottom: s=!1} = c;
                s && !ve() || (await Ua(),
                !document.getElementById("chatArea")) || (x === "click" ? document.getElementById("chatArea").style.scrollBehavior = "smooth" : document.getElementById("chatArea").style.scrollBehavior = "auto",
                (_ = document.getElementById("resultArea")) == null || _.scrollIntoView(!1))
            }
            return (c,x)=>{
                const s = Ve("el-button")
                  , _ = ja("loading");
                return f(),
                T(xe, null, [Ga((f(),
                T("div", {
                    "element-loading-background": "rgba(0, 0, 0, 0)",
                    id: "chatArea",
                    class: "chatArea",
                    style: st({
                        height: de(wa)() || de(Y).$size.isPhone ? "calc(100vh - 160px)" : "calc(100vh - 220px)"
                    })
                }, [h("div", Vt, [(f(!0),
                T(xe, null, rt(i.value, C=>{
                    var U, J;
                    return f(),
                    T("div", {
                        class: "oneAskArea",
                        key: C.key
                    }, [h("div", $t, [h("div", Ut, he(C.askTxt), 1), (f(),
                    T("svg", jt, Zt))]), ((U = C.askFiles) == null ? void 0 : U.length) > 0 ? (f(!0),
                    T(xe, {
                        key: 0
                    }, rt(C.askFiles, D=>(f(),
                    T("div", Ht, [G(Ya, {
                        fileType: D.name.split(".")[1],
                        fileTitle: D.name,
                        fileSize: D.size + "",
                        uid: D.uid,
                        style: {
                            background: "white"
                        }
                    }, null, 8, ["fileType", "fileTitle", "fileSize", "uid"]), (f(),
                    T("svg", Jt, Xt))]))), 256)) : te("", !0), C.replyEmptyTxt ? te("", !0) : (f(),
                    T("div", Kt, [Qt, C.replyTxt !== "" ? (f(),
                    T("div", Yt, [(J = C.OnlineSearchWebPages) != null && J.length ? (f(),
                    fe(Mt, {
                        key: 0,
                        list: C.OnlineSearchWebPages
                    }, null, 8, ["list"])) : te("", !0), G(qt, {
                        loading: C.askLoading,
                        content: C.rawTxt,
                        unfold: C.unfold,
                        "onUpdate:unfold": D=>C.unfold = D
                    }, null, 8, ["loading", "content", "unfold", "onUpdate:unfold"]), h("div", {
                        class: xa("markdown-body resultTxt-".concat(C.key, " ").concat(C.unfold ? "" : "is-fold")),
                        innerHTML: C.replyTxt
                    }, null, 10, ea), C.askLoading ? (f(),
                    T("div", ta, na)) : te("", !0), C.askLoading ? te("", !0) : (f(),
                    fe(Ea, {
                        key: 2,
                        itemData: C,
                        canRefresh: C.key === i.value.length - 1,
                        onSubmitRetry: Ge
                    }, null, 8, ["itemData", "canRefresh"]))])) : (f(),
                    T("div", oa, [de(N) ? C.cancleFlag ? (f(),
                    T("div", ra, he("(".concat(I.value.cancle, ")")), 1)) : C.errorFlag ? (f(),
                    T("div", la, he("(".concat(Z.value || I.value.error, ")")), 1)) : z.value ? (f(),
                    T(xe, {
                        key: 3
                    }, [ia, ge.value ? (f(),
                    T("span", ca, "\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85")) : te("", !0)], 64)) : (f(),
                    T("div", ua)) : (f(),
                    T("div", sa, he("(".concat(I.value.logout, ")")), 1))]))]))])
                }
                ), 128)), da])], 4)), [[_, $.value]]), h("div", pa, [De.value ? (f(),
                fe(s, {
                    key: 0,
                    class: "downToNew",
                    onClick: x[0] || (x[0] = C=>Ee({
                        type: "click"
                    }))
                }, {
                    default: ee(()=>[va]),
                    _: 1
                })) : te("", !0), G(Qa, {
                    ref: "submitBox",
                    class: "submitBox",
                    input: E.value,
                    isStop: z.value,
                    onSubmitInput: Te,
                    onSubmitStop: Ne
                }, null, 8, ["input", "isStop"]), de(Y).$size.isPhone ? te("", !0) : (f(),
                fe(en, {
                    key: 1
                }))])], 64)
            }
        }
    }),
    Sa = $e(fa, [["__scopeId", "data-v-df75a812"]])
}
);
export {an as __tla, Sa as default};
