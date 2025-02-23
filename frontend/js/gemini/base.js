(()=>{
    var e = {
        83: (e,t,n)=>{
            "use strict";
            e = n.nmd(e);
            const r = (e,t)=>(...n)=>`[${e(...n) + t}m`
              , o = (e,t)=>(...n)=>{
                const r = e(...n);
                return `[${38 + t};5;${r}m`
            }
              , s = (e,t)=>(...n)=>{
                const r = e(...n);
                return `[${38 + t};2;${r[0]};${r[1]};${r[2]}m`
            }
              , a = e=>e
              , i = (e,t,n)=>[e, t, n]
              , l = (e,t,n)=>{
                Object.defineProperty(e, t, {
                    get: ()=>{
                        const r = n();
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0
                        }),
                        r
                    }
                    ,
                    enumerable: !0,
                    configurable: !0
                })
            }
            ;
            let c;
            const u = (e,t,r,o)=>{
                void 0 === c && (c = n(734));
                const s = o ? 10 : 0
                  , a = {};
                for (const [n,o] of Object.entries(c)) {
                    const i = "ansi16" === n ? "ansi" : n;
                    n === t ? a[i] = e(r, s) : "object" == typeof o && (a[i] = e(o[t], s))
                }
                return a
            }
            ;
            Object.defineProperty(e, "exports", {
                enumerable: !0,
                get: function() {
                    const e = new Map
                      , t = {
                        modifier: {
                            reset: [0, 0],
                            bold: [1, 22],
                            dim: [2, 22],
                            italic: [3, 23],
                            underline: [4, 24],
                            inverse: [7, 27],
                            hidden: [8, 28],
                            strikethrough: [9, 29]
                        },
                        color: {
                            black: [30, 39],
                            red: [31, 39],
                            green: [32, 39],
                            yellow: [33, 39],
                            blue: [34, 39],
                            magenta: [35, 39],
                            cyan: [36, 39],
                            white: [37, 39],
                            blackBright: [90, 39],
                            redBright: [91, 39],
                            greenBright: [92, 39],
                            yellowBright: [93, 39],
                            blueBright: [94, 39],
                            magentaBright: [95, 39],
                            cyanBright: [96, 39],
                            whiteBright: [97, 39]
                        },
                        bgColor: {
                            bgBlack: [40, 49],
                            bgRed: [41, 49],
                            bgGreen: [42, 49],
                            bgYellow: [43, 49],
                            bgBlue: [44, 49],
                            bgMagenta: [45, 49],
                            bgCyan: [46, 49],
                            bgWhite: [47, 49],
                            bgBlackBright: [100, 49],
                            bgRedBright: [101, 49],
                            bgGreenBright: [102, 49],
                            bgYellowBright: [103, 49],
                            bgBlueBright: [104, 49],
                            bgMagentaBright: [105, 49],
                            bgCyanBright: [106, 49],
                            bgWhiteBright: [107, 49]
                        }
                    };
                    t.color.gray = t.color.blackBright,
                    t.bgColor.bgGray = t.bgColor.bgBlackBright,
                    t.color.grey = t.color.blackBright,
                    t.bgColor.bgGrey = t.bgColor.bgBlackBright;
                    for (const [n,r] of Object.entries(t)) {
                        for (const [n,o] of Object.entries(r))
                            t[n] = {
                                open: `[${o[0]}m`,
                                close: `[${o[1]}m`
                            },
                            r[n] = t[n],
                            e.set(o[0], o[1]);
                        Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !1
                        })
                    }
                    return Object.defineProperty(t, "codes", {
                        value: e,
                        enumerable: !1
                    }),
                    t.color.close = "[39m",
                    t.bgColor.close = "[49m",
                    l(t.color, "ansi", (()=>u(r, "ansi16", a, !1))),
                    l(t.color, "ansi256", (()=>u(o, "ansi256", a, !1))),
                    l(t.color, "ansi16m", (()=>u(s, "rgb", i, !1))),
                    l(t.bgColor, "ansi", (()=>u(r, "ansi16", a, !0))),
                    l(t.bgColor, "ansi256", (()=>u(o, "ansi256", a, !0))),
                    l(t.bgColor, "ansi16m", (()=>u(s, "rgb", i, !0))),
                    t
                }
            })
        }
        ,
        248: (e,t,n)=>{
            "use strict";
            const r = n(83)
              , {stdout: o, stderr: s} = n(747)
              , {stringReplaceAll: a, stringEncaseCRLFWithFirstIndex: i} = n(58)
              , {isArray: l} = Array
              , c = ["ansi", "ansi", "ansi256", "ansi16m"]
              , u = Object.create(null);
            class g {
                constructor(e) {
                    return h(e)
                }
            }
            const h = e=>{
                const t = {};
                return ((e,t={})=>{
                    if (t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3))
                        throw new Error("The `level` option should be an integer from 0 to 3");
                    const n = o ? o.level : 0;
                    e.level = void 0 === t.level ? n : t.level
                }
                )(t, e),
                t.template = (...e)=>w(t.template, ...e),
                Object.setPrototypeOf(t, d.prototype),
                Object.setPrototypeOf(t.template, t),
                t.template.constructor = ()=>{
                    throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")
                }
                ,
                t.template.Instance = g,
                t.template
            }
            ;
            function d(e) {
                return h(e)
            }
            for (const [e,t] of Object.entries(r))
                u[e] = {
                    get() {
                        const n = f(this, p(t.open, t.close, this._styler), this._isEmpty);
                        return Object.defineProperty(this, e, {
                            value: n
                        }),
                        n
                    }
                };
            u.visible = {
                get() {
                    const e = f(this, this._styler, !0);
                    return Object.defineProperty(this, "visible", {
                        value: e
                    }),
                    e
                }
            };
            const m = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
            for (const e of m)
                u[e] = {
                    get() {
                        const {level: t} = this;
                        return function(...n) {
                            const o = p(r.color[c[t]][e](...n), r.color.close, this._styler);
                            return f(this, o, this._isEmpty)
                        }
                    }
                };
            for (const e of m) {
                u["bg" + e[0].toUpperCase() + e.slice(1)] = {
                    get() {
                        const {level: t} = this;
                        return function(...n) {
                            const o = p(r.bgColor[c[t]][e](...n), r.bgColor.close, this._styler);
                            return f(this, o, this._isEmpty)
                        }
                    }
                }
            }
            const b = Object.defineProperties((()=>{}
            ), {
                ...u,
                level: {
                    enumerable: !0,
                    get() {
                        return this._generator.level
                    },
                    set(e) {
                        this._generator.level = e
                    }
                }
            })
              , p = (e,t,n)=>{
                let r, o;
                return void 0 === n ? (r = e,
                o = t) : (r = n.openAll + e,
                o = t + n.closeAll),
                {
                    open: e,
                    close: t,
                    openAll: r,
                    closeAll: o,
                    parent: n
                }
            }
              , f = (e,t,n)=>{
                const r = (...e)=>l(e[0]) && l(e[0].raw) ? v(r, w(r, ...e)) : v(r, 1 === e.length ? "" + e[0] : e.join(" "));
                return Object.setPrototypeOf(r, b),
                r._generator = e,
                r._styler = t,
                r._isEmpty = n,
                r
            }
              , v = (e,t)=>{
                if (e.level <= 0 || !t)
                    return e._isEmpty ? "" : t;
                let n = e._styler;
                if (void 0 === n)
                    return t;
                const {openAll: r, closeAll: o} = n;
                if (-1 !== t.indexOf(""))
                    for (; void 0 !== n; )
                        t = a(t, n.close, n.open),
                        n = n.parent;
                const s = t.indexOf("\n");
                return -1 !== s && (t = i(t, o, r, s)),
                r + t + o
            }
            ;
            let y;
            const w = (e,...t)=>{
                const [r] = t;
                if (!l(r) || !l(r.raw))
                    return t.join(" ");
                const o = t.slice(1)
                  , s = [r.raw[0]];
                for (let e = 1; e < r.length; e++)
                    s.push(String(o[e - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[e]));
                return void 0 === y && (y = n(991)),
                y(e, s.join(""))
            }
            ;
            Object.defineProperties(d.prototype, u);
            const k = d();
            k.supportsColor = o,
            k.stderr = d({
                level: s ? s.level : 0
            }),
            k.stderr.supportsColor = s,
            e.exports = k
        }
        ,
        991: e=>{
            "use strict";
            const t = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi
              , n = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g
              , r = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/
              , o = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi
              , s = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);
            function a(e) {
                const t = "u" === e[0]
                  , n = "{" === e[1];
                return t && !n && 5 === e.length || "x" === e[0] && 3 === e.length ? String.fromCharCode(parseInt(e.slice(1), 16)) : t && n ? String.fromCodePoint(parseInt(e.slice(2, -1), 16)) : s.get(e) || e
            }
            function i(e, t) {
                const n = []
                  , s = t.trim().split(/\s*,\s*/g);
                let i;
                for (const t of s) {
                    const s = Number(t);
                    if (Number.isNaN(s)) {
                        if (!(i = t.match(r)))
                            throw new Error(`Invalid Chalk template style argument: ${t} (in style '${e}')`);
                        n.push(i[2].replace(o, ((e,t,n)=>t ? a(t) : n)))
                    } else
                        n.push(s)
                }
                return n
            }
            function l(e) {
                n.lastIndex = 0;
                const t = [];
                let r;
                for (; null !== (r = n.exec(e)); ) {
                    const e = r[1];
                    if (r[2]) {
                        const n = i(e, r[2]);
                        t.push([e].concat(n))
                    } else
                        t.push([e])
                }
                return t
            }
            function c(e, t) {
                const n = {};
                for (const e of t)
                    for (const t of e.styles)
                        n[t[0]] = e.inverse ? null : t.slice(1);
                let r = e;
                for (const [e,t] of Object.entries(n))
                    if (Array.isArray(t)) {
                        if (!(e in r))
                            throw new Error(`Unknown Chalk style: ${e}`);
                        r = t.length > 0 ? r[e](...t) : r[e]
                    }
                return r
            }
            e.exports = (e,n)=>{
                const r = []
                  , o = [];
                let s = [];
                if (n.replace(t, ((t,n,i,u,g,h)=>{
                    if (n)
                        s.push(a(n));
                    else if (u) {
                        const t = s.join("");
                        s = [],
                        o.push(0 === r.length ? t : c(e, r)(t)),
                        r.push({
                            inverse: i,
                            styles: l(u)
                        })
                    } else if (g) {
                        if (0 === r.length)
                            throw new Error("Found extraneous } in Chalk template literal");
                        o.push(c(e, r)(s.join(""))),
                        s = [],
                        r.pop()
                    } else
                        s.push(h)
                }
                )),
                o.push(s.join("")),
                r.length > 0) {
                    const e = `Chalk template literal is missing ${r.length} closing bracket${1 === r.length ? "" : "s"} (\`}\`)`;
                    throw new Error(e)
                }
                return o.join("")
            }
        }
        ,
        58: e=>{
            "use strict";
            e.exports = {
                stringReplaceAll: (e,t,n)=>{
                    let r = e.indexOf(t);
                    if (-1 === r)
                        return e;
                    const o = t.length;
                    let s = 0
                      , a = "";
                    do {
                        a += e.substr(s, r - s) + t + n,
                        s = r + o,
                        r = e.indexOf(t, s)
                    } while (-1 !== r);
                    return a += e.substr(s),
                    a
                }
                ,
                stringEncaseCRLFWithFirstIndex: (e,t,n,r)=>{
                    let o = 0
                      , s = "";
                    do {
                        const a = "\r" === e[r - 1];
                        s += e.substr(o, (a ? r - 1 : r) - o) + t + (a ? "\r\n" : "\n") + n,
                        o = r + 1,
                        r = e.indexOf("\n", o)
                    } while (-1 !== r);
                    return s += e.substr(o),
                    s
                }
            }
        }
        ,
        659: (e,t,n)=>{
            const r = n(156)
              , o = {};
            for (const e of Object.keys(r))
                o[r[e]] = e;
            const s = {
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
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            e.exports = s;
            for (const e of Object.keys(s)) {
                if (!("channels"in s[e]))
                    throw new Error("missing channels property: " + e);
                if (!("labels"in s[e]))
                    throw new Error("missing channel labels property: " + e);
                if (s[e].labels.length !== s[e].channels)
                    throw new Error("channel and label counts mismatch: " + e);
                const {channels: t, labels: n} = s[e];
                delete s[e].channels,
                delete s[e].labels,
                Object.defineProperty(s[e], "channels", {
                    value: t
                }),
                Object.defineProperty(s[e], "labels", {
                    value: n
                })
            }
            s.rgb.hsl = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.min(t, n, r)
                  , s = Math.max(t, n, r)
                  , a = s - o;
                let i, l;
                s === o ? i = 0 : t === s ? i = (n - r) / a : n === s ? i = 2 + (r - t) / a : r === s && (i = 4 + (t - n) / a),
                i = Math.min(60 * i, 360),
                i < 0 && (i += 360);
                const c = (o + s) / 2;
                return l = s === o ? 0 : c <= .5 ? a / (s + o) : a / (2 - s - o),
                [i, 100 * l, 100 * c]
            }
            ,
            s.rgb.hsv = function(e) {
                let t, n, r, o, s;
                const a = e[0] / 255
                  , i = e[1] / 255
                  , l = e[2] / 255
                  , c = Math.max(a, i, l)
                  , u = c - Math.min(a, i, l)
                  , g = function(e) {
                    return (c - e) / 6 / u + .5
                };
                return 0 === u ? (o = 0,
                s = 0) : (s = u / c,
                t = g(a),
                n = g(i),
                r = g(l),
                a === c ? o = r - n : i === c ? o = 1 / 3 + t - r : l === c && (o = 2 / 3 + n - t),
                o < 0 ? o += 1 : o > 1 && (o -= 1)),
                [360 * o, 100 * s, 100 * c]
            }
            ,
            s.rgb.hwb = function(e) {
                const t = e[0]
                  , n = e[1];
                let r = e[2];
                const o = s.rgb.hsl(e)[0]
                  , a = 1 / 255 * Math.min(t, Math.min(n, r));
                return r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)),
                [o, 100 * a, 100 * r]
            }
            ,
            s.rgb.cmyk = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.min(1 - t, 1 - n, 1 - r);
                return [100 * ((1 - t - o) / (1 - o) || 0), 100 * ((1 - n - o) / (1 - o) || 0), 100 * ((1 - r - o) / (1 - o) || 0), 100 * o]
            }
            ,
            s.rgb.keyword = function(e) {
                const t = o[e];
                if (t)
                    return t;
                let n, s = 1 / 0;
                for (const t of Object.keys(r)) {
                    const o = r[t]
                      , l = (i = o,
                    ((a = e)[0] - i[0]) ** 2 + (a[1] - i[1]) ** 2 + (a[2] - i[2]) ** 2);
                    l < s && (s = l,
                    n = t)
                }
                var a, i;
                return n
            }
            ,
            s.keyword.rgb = function(e) {
                return r[e]
            }
            ,
            s.rgb.xyz = function(e) {
                let t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255;
                t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92,
                n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92,
                r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92;
                return [100 * (.4124 * t + .3576 * n + .1805 * r), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
            }
            ,
            s.rgb.lab = function(e) {
                const t = s.rgb.xyz(e);
                let n = t[0]
                  , r = t[1]
                  , o = t[2];
                n /= 95.047,
                r /= 100,
                o /= 108.883,
                n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
                r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
                o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
                return [116 * r - 16, 500 * (n - r), 200 * (r - o)]
            }
            ,
            s.hsl.rgb = function(e) {
                const t = e[0] / 360
                  , n = e[1] / 100
                  , r = e[2] / 100;
                let o, s, a;
                if (0 === n)
                    return a = 255 * r,
                    [a, a, a];
                o = r < .5 ? r * (1 + n) : r + n - r * n;
                const i = 2 * r - o
                  , l = [0, 0, 0];
                for (let e = 0; e < 3; e++)
                    s = t + 1 / 3 * -(e - 1),
                    s < 0 && s++,
                    s > 1 && s--,
                    a = 6 * s < 1 ? i + 6 * (o - i) * s : 2 * s < 1 ? o : 3 * s < 2 ? i + (o - i) * (2 / 3 - s) * 6 : i,
                    l[e] = 255 * a;
                return l
            }
            ,
            s.hsl.hsv = function(e) {
                const t = e[0];
                let n = e[1] / 100
                  , r = e[2] / 100
                  , o = n;
                const s = Math.max(r, .01);
                r *= 2,
                n *= r <= 1 ? r : 2 - r,
                o *= s <= 1 ? s : 2 - s;
                return [t, 100 * (0 === r ? 2 * o / (s + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
            }
            ,
            s.hsv.rgb = function(e) {
                const t = e[0] / 60
                  , n = e[1] / 100;
                let r = e[2] / 100;
                const o = Math.floor(t) % 6
                  , s = t - Math.floor(t)
                  , a = 255 * r * (1 - n)
                  , i = 255 * r * (1 - n * s)
                  , l = 255 * r * (1 - n * (1 - s));
                switch (r *= 255,
                o) {
                case 0:
                    return [r, l, a];
                case 1:
                    return [i, r, a];
                case 2:
                    return [a, r, l];
                case 3:
                    return [a, i, r];
                case 4:
                    return [l, a, r];
                case 5:
                    return [r, a, i]
                }
            }
            ,
            s.hsv.hsl = function(e) {
                const t = e[0]
                  , n = e[1] / 100
                  , r = e[2] / 100
                  , o = Math.max(r, .01);
                let s, a;
                a = (2 - n) * r;
                const i = (2 - n) * o;
                return s = n * o,
                s /= i <= 1 ? i : 2 - i,
                s = s || 0,
                a /= 2,
                [t, 100 * s, 100 * a]
            }
            ,
            s.hwb.rgb = function(e) {
                const t = e[0] / 360;
                let n = e[1] / 100
                  , r = e[2] / 100;
                const o = n + r;
                let s;
                o > 1 && (n /= o,
                r /= o);
                const a = Math.floor(6 * t)
                  , i = 1 - r;
                s = 6 * t - a,
                1 & a && (s = 1 - s);
                const l = n + s * (i - n);
                let c, u, g;
                switch (a) {
                default:
                case 6:
                case 0:
                    c = i,
                    u = l,
                    g = n;
                    break;
                case 1:
                    c = l,
                    u = i,
                    g = n;
                    break;
                case 2:
                    c = n,
                    u = i,
                    g = l;
                    break;
                case 3:
                    c = n,
                    u = l,
                    g = i;
                    break;
                case 4:
                    c = l,
                    u = n,
                    g = i;
                    break;
                case 5:
                    c = i,
                    u = n,
                    g = l
                }
                return [255 * c, 255 * u, 255 * g]
            }
            ,
            s.cmyk.rgb = function(e) {
                const t = e[0] / 100
                  , n = e[1] / 100
                  , r = e[2] / 100
                  , o = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
            }
            ,
            s.xyz.rgb = function(e) {
                const t = e[0] / 100
                  , n = e[1] / 100
                  , r = e[2] / 100;
                let o, s, a;
                return o = 3.2406 * t + -1.5372 * n + -.4986 * r,
                s = -.9689 * t + 1.8758 * n + .0415 * r,
                a = .0557 * t + -.204 * n + 1.057 * r,
                o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : 12.92 * o,
                s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : 12.92 * s,
                a = a > .0031308 ? 1.055 * a ** (1 / 2.4) - .055 : 12.92 * a,
                o = Math.min(Math.max(0, o), 1),
                s = Math.min(Math.max(0, s), 1),
                a = Math.min(Math.max(0, a), 1),
                [255 * o, 255 * s, 255 * a]
            }
            ,
            s.xyz.lab = function(e) {
                let t = e[0]
                  , n = e[1]
                  , r = e[2];
                t /= 95.047,
                n /= 100,
                r /= 108.883,
                t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116,
                n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
                r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
                return [116 * n - 16, 500 * (t - n), 200 * (n - r)]
            }
            ,
            s.lab.xyz = function(e) {
                let t, n, r;
                n = (e[0] + 16) / 116,
                t = e[1] / 500 + n,
                r = n - e[2] / 200;
                const o = n ** 3
                  , s = t ** 3
                  , a = r ** 3;
                return n = o > .008856 ? o : (n - 16 / 116) / 7.787,
                t = s > .008856 ? s : (t - 16 / 116) / 7.787,
                r = a > .008856 ? a : (r - 16 / 116) / 7.787,
                t *= 95.047,
                n *= 100,
                r *= 108.883,
                [t, n, r]
            }
            ,
            s.lab.lch = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2];
                let o;
                o = 360 * Math.atan2(r, n) / 2 / Math.PI,
                o < 0 && (o += 360);
                return [t, Math.sqrt(n * n + r * r), o]
            }
            ,
            s.lch.lab = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2] / 360 * 2 * Math.PI;
                return [t, n * Math.cos(r), n * Math.sin(r)]
            }
            ,
            s.rgb.ansi16 = function(e, t=null) {
                const [n,r,o] = e;
                let a = null === t ? s.rgb.hsv(e)[2] : t;
                if (a = Math.round(a / 50),
                0 === a)
                    return 30;
                let i = 30 + (Math.round(o / 255) << 2 | Math.round(r / 255) << 1 | Math.round(n / 255));
                return 2 === a && (i += 60),
                i
            }
            ,
            s.hsv.ansi16 = function(e) {
                return s.rgb.ansi16(s.hsv.rgb(e), e[2])
            }
            ,
            s.rgb.ansi256 = function(e) {
                const t = e[0]
                  , n = e[1]
                  , r = e[2];
                if (t === n && n === r)
                    return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
                return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
            }
            ,
            s.ansi16.rgb = function(e) {
                let t = e % 10;
                if (0 === t || 7 === t)
                    return e > 50 && (t += 3.5),
                    t = t / 10.5 * 255,
                    [t, t, t];
                const n = .5 * (1 + ~~(e > 50));
                return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
            }
            ,
            s.ansi256.rgb = function(e) {
                if (e >= 232) {
                    const t = 10 * (e - 232) + 8;
                    return [t, t, t]
                }
                let t;
                e -= 16;
                return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255]
            }
            ,
            s.rgb.hex = function(e) {
                const t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
                return "000000".substring(t.length) + t
            }
            ,
            s.hex.rgb = function(e) {
                const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t)
                    return [0, 0, 0];
                let n = t[0];
                3 === t[0].length && (n = n.split("").map((e=>e + e)).join(""));
                const r = parseInt(n, 16);
                return [r >> 16 & 255, r >> 8 & 255, 255 & r]
            }
            ,
            s.rgb.hcg = function(e) {
                const t = e[0] / 255
                  , n = e[1] / 255
                  , r = e[2] / 255
                  , o = Math.max(Math.max(t, n), r)
                  , s = Math.min(Math.min(t, n), r)
                  , a = o - s;
                let i, l;
                return i = a < 1 ? s / (1 - a) : 0,
                l = a <= 0 ? 0 : o === t ? (n - r) / a % 6 : o === n ? 2 + (r - t) / a : 4 + (t - n) / a,
                l /= 6,
                l %= 1,
                [360 * l, 100 * a, 100 * i]
            }
            ,
            s.hsl.hcg = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = n < .5 ? 2 * t * n : 2 * t * (1 - n);
                let o = 0;
                return r < 1 && (o = (n - .5 * r) / (1 - r)),
                [e[0], 100 * r, 100 * o]
            }
            ,
            s.hsv.hcg = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100
                  , r = t * n;
                let o = 0;
                return r < 1 && (o = (n - r) / (1 - r)),
                [e[0], 100 * r, 100 * o]
            }
            ,
            s.hcg.rgb = function(e) {
                const t = e[0] / 360
                  , n = e[1] / 100
                  , r = e[2] / 100;
                if (0 === n)
                    return [255 * r, 255 * r, 255 * r];
                const o = [0, 0, 0]
                  , s = t % 1 * 6
                  , a = s % 1
                  , i = 1 - a;
                let l = 0;
                switch (Math.floor(s)) {
                case 0:
                    o[0] = 1,
                    o[1] = a,
                    o[2] = 0;
                    break;
                case 1:
                    o[0] = i,
                    o[1] = 1,
                    o[2] = 0;
                    break;
                case 2:
                    o[0] = 0,
                    o[1] = 1,
                    o[2] = a;
                    break;
                case 3:
                    o[0] = 0,
                    o[1] = i,
                    o[2] = 1;
                    break;
                case 4:
                    o[0] = a,
                    o[1] = 0,
                    o[2] = 1;
                    break;
                default:
                    o[0] = 1,
                    o[1] = 0,
                    o[2] = i
                }
                return l = (1 - n) * r,
                [255 * (n * o[0] + l), 255 * (n * o[1] + l), 255 * (n * o[2] + l)]
            }
            ,
            s.hcg.hsv = function(e) {
                const t = e[1] / 100
                  , n = t + e[2] / 100 * (1 - t);
                let r = 0;
                return n > 0 && (r = t / n),
                [e[0], 100 * r, 100 * n]
            }
            ,
            s.hcg.hsl = function(e) {
                const t = e[1] / 100
                  , n = e[2] / 100 * (1 - t) + .5 * t;
                let r = 0;
                return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))),
                [e[0], 100 * r, 100 * n]
            }
            ,
            s.hcg.hwb = function(e) {
                const t = e[1] / 100
                  , n = t + e[2] / 100 * (1 - t);
                return [e[0], 100 * (n - t), 100 * (1 - n)]
            }
            ,
            s.hwb.hcg = function(e) {
                const t = e[1] / 100
                  , n = 1 - e[2] / 100
                  , r = n - t;
                let o = 0;
                return r < 1 && (o = (n - r) / (1 - r)),
                [e[0], 100 * r, 100 * o]
            }
            ,
            s.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }
            ,
            s.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }
            ,
            s.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }
            ,
            s.gray.hsl = function(e) {
                return [0, 0, e[0]]
            }
            ,
            s.gray.hsv = s.gray.hsl,
            s.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }
            ,
            s.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }
            ,
            s.gray.lab = function(e) {
                return [e[0], 0, 0]
            }
            ,
            s.gray.hex = function(e) {
                const t = 255 & Math.round(e[0] / 100 * 255)
                  , n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }
            ,
            s.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            }
        }
        ,
        734: (e,t,n)=>{
            const r = n(659)
              , o = n(507)
              , s = {};
            Object.keys(r).forEach((e=>{
                s[e] = {},
                Object.defineProperty(s[e], "channels", {
                    value: r[e].channels
                }),
                Object.defineProperty(s[e], "labels", {
                    value: r[e].labels
                });
                const t = o(e);
                Object.keys(t).forEach((n=>{
                    const r = t[n];
                    s[e][n] = function(e) {
                        const t = function(...t) {
                            const n = t[0];
                            if (null == n)
                                return n;
                            n.length > 1 && (t = n);
                            const r = e(t);
                            if ("object" == typeof r)
                                for (let e = r.length, t = 0; t < e; t++)
                                    r[t] = Math.round(r[t]);
                            return r
                        };
                        return "conversion"in e && (t.conversion = e.conversion),
                        t
                    }(r),
                    s[e][n].raw = function(e) {
                        const t = function(...t) {
                            const n = t[0];
                            return null == n ? n : (n.length > 1 && (t = n),
                            e(t))
                        };
                        return "conversion"in e && (t.conversion = e.conversion),
                        t
                    }(r)
                }
                ))
            }
            )),
            e.exports = s
        }
        ,
        507: (e,t,n)=>{
            const r = n(659);
            function o(e) {
                const t = function() {
                    const e = {}
                      , t = Object.keys(r);
                    for (let n = t.length, r = 0; r < n; r++)
                        e[t[r]] = {
                            distance: -1,
                            parent: null
                        };
                    return e
                }()
                  , n = [e];
                for (t[e].distance = 0; n.length; ) {
                    const e = n.pop()
                      , o = Object.keys(r[e]);
                    for (let r = o.length, s = 0; s < r; s++) {
                        const r = o[s]
                          , a = t[r];
                        -1 === a.distance && (a.distance = t[e].distance + 1,
                        a.parent = e,
                        n.unshift(r))
                    }
                }
                return t
            }
            function s(e, t) {
                return function(n) {
                    return t(e(n))
                }
            }
            function a(e, t) {
                const n = [t[e].parent, e];
                let o = r[t[e].parent][e]
                  , a = t[e].parent;
                for (; t[a].parent; )
                    n.unshift(t[a].parent),
                    o = s(r[t[a].parent][a], o),
                    a = t[a].parent;
                return o.conversion = n,
                o
            }
            e.exports = function(e) {
                const t = o(e)
                  , n = {}
                  , r = Object.keys(t);
                for (let e = r.length, o = 0; o < e; o++) {
                    const e = r[o];
                    null !== t[e].parent && (n[e] = a(e, t))
                }
                return n
            }
        }
        ,
        156: e=>{
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }
        ,
        834: (e,t,n)=>{
            const r = n(248);
            class o {
                static testing = !1;
                static fakedLogs = [];
                static info(e, t="default") {
                    o.testing ? o.fakedLogs.push(e) : (console.log(o.colors()[t], e),
                    o.reset())
                }
                static message(e) {
                    if (o.testing)
                        return void o.fakedLogs.push(e.text);
                    let t = "";
                    "info" === e.type ? t = " INFO " : "warn" === e.type ? t = " WARN " : "error" === e.type && (t = " ERR ");
                    const n = e.text.replace(/\n/g, "\n" + " ".repeat(t.length + 1));
                    "info" === e.type ? console.warn(`${r.bgBlue.white(t)} ${r.white(n)}`) : "warn" === e.type ? console.warn(`${r.bgYellow.black(t)} ${r.yellow(n)}`) : "error" === e.type && console.warn(`${r.bgRed.white(t)} ${r.red(n)}`)
                }
                static feedback(e, t="green") {
                    o.line("\t" + e, t)
                }
                static error(e, t="red") {
                    o.line(e, t)
                }
                static line(e, t="default") {
                    o.info(e, t)
                }
                static reset() {
                    console.log(o.colors().default, "")
                }
                static fake() {
                    o.testing = !0
                }
                static restore() {
                    o.testing = !1,
                    o.fakedLogs = []
                }
                static received(e) {
                    let t = (e = Array.isArray(e) ? e : [e]).every((e=>this.fakedLogs.some((t=>t.includes(e)))));
                    return this.restore(),
                    t
                }
                static colors() {
                    return {
                        default: "[0m",
                        green: "[32m",
                        red: "[31m"
                    }
                }
            }
            e.exports = o
        }
        ,
        747: e=>{
            "use strict";
            e.exports = {
                stdout: !1,
                stderr: !1
            }
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var s = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](s, s.exports, n),
        s.loaded = !0,
        s.exports
    }
    n.nmd = e=>(e.paths = [],
    e.children || (e.children = []),
    e),
    (()=>{
        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            e(t)
        }
        function t(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function r(e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2 ? t(Object(r), !0).forEach((function(t) {
                    o(e, t, r[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }
                ))
            }
            return e
        }
        function o(t, n, r) {
            var o;
            return o = function(t, n) {
                if ("object" != e(t) || !t)
                    return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var o = r.call(t, n || "default");
                    if ("object" != e(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === n ? String : Number)(t)
            }(n, "string"),
            (n = "symbol" == e(o) ? o : o + "")in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r,
            t
        }
        n(834).message;
        jQuery(document).ready((function() {
            var e = window.location.origin
              , t = $("html").attr("lang")
              , n = $("#btn-back-to-top")
              , o = $("#btn-back-to-bottom")
              , s = "1.0.0";
            loadIndex = function() {
                if (deleteMessageAll(),
                isMobile = checkMobile(),
                renderMenuHistoryMessage(1e3),
                $("#sidebar ul.components li.active").hasClass("ai-chat") || removeActiveMenuHistoryMess(),
                $(document).on("click", ".btn-new-chat", (function() {
                    newChatMessage($(this))
                }
                )),
                $(document).on("click", ".btn-edit-history-message", (function() {
                    editMenuHistoryMessage($(this))
                }
                )),
                $(document).on("click", "#sidebar .history-message-list-item .history-message__title", (function(e) {
                    e.preventDefault(),
                    showDetailChatMessage($(this))
                }
                )),
                wrapMessageDom.scroll((function() {
                    n.removeClass("show"),
                    o.addClass("show")
                }
                )),
                n.on("click", (function(e) {
                    e.preventDefault(),
                    wrapMessageDom.animate({
                        scrollTop: 0
                    }, "300")
                }
                )),
                o.on("click", (function(e) {
                    e.preventDefault(),
                    scrollToButton(300)
                }
                )),
                !localStorage.getItem("userTemp")) {
                    var e = [];
                    e.id = Math.floor(999999 * Math.random() + 1e5),
                    localStorage.userTemp = JSON.stringify(r({}, e))
                }
                $(".select-theme").on("change", (function(e) {
                    e.preventDefault();
                    var t = $(this).val()
                      , n = [];
                    n.theme = t,
                    setCookie("setting", JSON.stringify(r({}, n)), 30),
                    "auto" == t && (t = getSchemeSystem()),
                    document.querySelector("html").setAttribute("data-bs-theme", t)
                }
                ))
            }
            ,
            newChatMessage = function(e) {
                if (!loadPageMain())
                    return !1;
                $(".wrap_instruct").css({
                    display: "flex"
                }),
                $(".wrap-chat-message .container-message").html(""),
                $(".history-message-list-item.active").removeClass("active"),
                localStorage.removeItem("localStorageMessId"),
                $(".container-message .wrap-ai-completed:last-child .ai-completed-footer .ai-completed-footer__left .ai-completed-footer__left--item").is("#" + idNameBtnRegenerateResponse) && document.getElementById(idNameBtnRegenerateResponse).remove(),
                focusElement($("#chat-input")),
                isMobile = checkMobile(),
                isMobile && $("#sidebar").toggleClass("active"),
                opacityWhenToggleSidebarCollapse()
            }
            ,
            renderMenuHistoryMessage = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (localStorage.messages) {
                    messages = JSON.parse(localStorage.messages);
                    var t = "";
                    t = '<div class="history-message-item">\n\n                            <ul class="history-message-item__container">';
                    var n = []
                      , r = [];
                    Object.entries(messages).forEach((function(e, t) {
                        r.push(e)
                    }
                    )),
                    messages = r.sort((function(e, t) {
                        return t[1].date - e[1].date
                    }
                    )),
                    Object.entries(messages).forEach((function(e, r) {
                        e = e[1];
                        var o = (Math.random() + 1).toString(36).substring(5);
                        t += '\n            <li class="history-message-list-item '.concat(e[0] == localStorage.localStorageMessId ? "active" : "", '" id="').concat(e[0], '">\n                <a href="javascript:void(0)" class="history-message-link-item">\n                    <div class="history-message__title">\n                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">\n                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>\n                        </svg>\n                        <div class="history-message-name" id="').concat(o, '"></div>\n                    </div>\n                    <div class="history-message__action">\n                        <div class="btn-group wrap-dropdown wrap-action-menu-for-chat">\n                            <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"\n                                title="').concat(sidebarTrans.open_the_action_menu_chat, '" aria-label="').concat(sidebarTrans.open_the_action_menu_chat, '">\n                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">\n                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>\n                                </svg>\n                            </button>\n                            <ul class="dropdown-menu">\n                                <li>\n                                    <button type="button" title="').concat(aiChatMessageTrans.rename, '" class="dropdown-item text-token-text-secondary btn-edit-history-message">\n                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen mx-2" viewBox="0 0 16 16">\n                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>\n                                        </svg>\n                                        <span>').concat(aiChatMessageTrans.rename, '</span>\n                                    </button>\n                                </li>\n                                <li class="line-divider-bottom"></li>\n                                <li>\n                                    <button type="button" title="').concat(aiChatMessageTrans.delete, '" class="dropdown-item text-token-text-secondary btn-delete-history-message">\n                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-2" viewBox="0 0 16 16">\n                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>\n                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>\n                                        </svg>\n                                        <span>').concat(aiChatMessageTrans.delete, "</span>\n                                    </button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </a>\n            </li>"),
                        n[r] = {
                            id: o,
                            message: e[1].name
                        }
                    }
                    )),
                    t += "</ul>",
                    t += "</div>",
                    $(".wrap-history-messages").fadeOut(0, (function() {
                        $(".wrap-history-messages").html(t).fadeIn(e)
                    }
                    )),
                    $.each(n, (function(e, t) {
                        $(".history-message-list-item div#" + t.id).text(t.message)
                    }
                    ))
                }
            }
            ,
            editMenuHistoryMessage = function(e) {
                var t = e.parents(".history-message-list-item")
                  , n = t.attr("id");
                $("#wrap-modal").html('<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h1 class="modal-title fs-5" id="modalLabel"><strong>' + aiChatMessageTrans.rename_this_conversation + '</strong></h1>\n</div>\n<div class="modal-body">\n<div>\n<input type="email" class="form-control rename-history-message-input" value="' + t.find(".history-message-name").text().trim() + '">\n<div class="flex flex-col gap-3 sm:flex-row-reverse mt-3 sm:mt-4">\n<button class="btn-rename-history-message" as="button" onclick="updateMenuHistoryMessage(' + n + ')">\n<div class="flex items-center justify-center">' + aiChatMessageTrans.rename + '</div>\n</button>\n<button class="" data-bs-dismiss="modal" as="button">\n<div class="flex items-center justify-center">' + aiChatMessageTrans.cancel + "</div>\n</button>\n</div>\n</div>\n\n<style>\n.sm\\:flex-row-reverse {\nflex-direction: row-reverse;\n}\n\n.relative {\nborder-radius: 9999px;\n}\n</style>\n</div>\n\n</div>\n</div>\n\n").modal("show")
            }
            ,
            updateMenuHistoryMessage = function(e) {
                if (isNotSendMessage)
                    return !1;
                var t = $(".rename-history-message-input").val();
                if (!t)
                    return !1;
                t = t.trim();
                var n = JSON.parse(localStorage.messages);
                n[e].name = t,
                localStorage.messages = JSON.stringify(r({}, n)),
                $("#" + e).find(".history-message-name").html(t),
                $("#wrap-modal").modal("hide")
            }
            ,
            showDetailChatMessage = function(e) {
                var t = e.parents(".history-message-list-item")
                  , n = t.attr("id");
                if (localStorage.localStorageMessId = n,
                !loadPageMain())
                    return !1;
                isMobile = checkMobile(),
                isMobile && $("#sidebar").toggleClass("active"),
                isNotSendMessage && stopGenerating(),
                $(".container-message").html(""),
                removeActiveMenuHistoryMess(),
                t.addClass("active"),
                $(".wrap_instruct").hide(),
                renderMessagesOld(),
                opacityWhenToggleSidebarCollapse()
            }
            ,
            renderMessagesOld = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                if (localStorage.messages && localStorage.localStorageMessId) {
                    var t = JSON.parse(localStorage.messages);
                    if (t[localStorage.localStorageMessId]) {
                        var n = null
                          , r = t[localStorage.localStorageMessId].contents;
                        if (!r.length)
                            return !1;
                        var o = !1;
                        r.forEach((function(e, t) {
                            "user" == e.role ? (!o && e.attachments && (o = !0),
                            renderMessageHumam(e.content, e.attachments, 0),
                            contentMessageTemp = e.content) : "model" == e.role && (n = getResponseIdTemp(),
                            renderWrapMessageCompleted(e.content, n, 0, 0))
                        }
                        ));
                        var s = $(".wrap-gemini-model #model-gemini-3-5");
                        return o ? (s.addClass("disable"),
                        s.attr("title", "This model doesn't support file attachments.")) : s.removeClass("disable"),
                        r[r.length - 1].role,
                        $(".ai-completed-footer").css({
                            display: "flex"
                        }),
                        $(".container-message .wrap-ai-completed:last-child .ai-completed-footer .ai-completed-footer__left .ai-completed-footer__left--item").is("#" + idNameBtnRegenerateResponse) || showBtnRegenerateResponse(),
                        scrollToButton(e),
                        !1
                    }
                }
                $(".wrap_instruct").css({
                    display: "flex"
                })
            }
            ,
            removeActiveMenuHistoryMess = function() {
                $(".history-message-list-item.active").removeClass("active")
            }
            ,
            scrollToButton = function(e) {
                wrapMessageDom.animate({
                    scrollTop: eleChatBox.prop("scrollHeight")
                }, e)
            }
            ,
            checkMobile = function() {
                var e = 0;
                return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = 1),
                e
            }
            ,
            focusElement = function(e) {
                isMobile || e.focus()
            }
            ,
            loadPageMain = function() {
                return !!$("#sidebar ul.components li.active").hasClass("ai-chat") || (window.location.href = e + "/" + ("en" == t ? "" : t),
                !1)
            }
            ,
            opacityWhenToggleSidebarCollapse = function() {
                $("#sidebar").hasClass("active") ? isMobile && $("#content").css({
                    opacity: .03,
                    "background-color": "black",
                    display: "none"
                }) : isMobile && $("#content").css({
                    opacity: 1,
                    "background-color": "transparent",
                    display: "block"
                })
            }
            ,
            convertMarkdownToHTML = function(e) {
                try {
                    return marked.parse(e.trim().replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")) + ""
                } catch (t) {
                    return new showdown.Converter({
                        omitExtraWLInCodeBlocks: !0,
                        parseImgDimensions: !0,
                        simplifiedAutoLink: !0,
                        literalMidWordUnderscores: !0,
                        strikethrough: !0,
                        tables: !0,
                        tasklists: !0,
                        smoothLivePreview: !0,
                        smartIndentationFix: !0,
                        disableForced4SpacesIndentedSublists: !0,
                        simpleLineBreaks: !0,
                        requireSpaceBeforeHeadingText: !0,
                        ghMentions: !0,
                        ghMentionsLink: !0,
                        encodeEmails: !0,
                        openLinksInNewWindow: !0,
                        backslashEscapesHTMLTags: !0,
                        emoji: !0,
                        underline: !0,
                        ellipsis: !0,
                        completeHTMLDocument: !0,
                        metadata: !0,
                        splitAdjacentBlockquotes: !0,
                        moreStyling: !0
                    }).makeHtml(e)
                }
            }
            ,
            setCookie = function(e, t, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                var o = "expires=" + r.toUTCString();
                document.cookie = e + "=" + t + ";" + o + ";path=/"
            }
            ,
            getCookie = function(e) {
                for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
                    for (var o = n[r]; " " == o.charAt(0); )
                        o = o.substring(1);
                    if (0 == o.indexOf(t))
                        return o.substring(t.length, o.length)
                }
                return ""
            }
            ,
            removeElementsByClass = function(e) {
                for (var t = document.getElementsByClassName(e); t.length > 0; )
                    t[0].parentNode.removeChild(t[0])
            }
            ,
            deleteMessageAll = function() {
                localStorage.getItem("aichat_version") != s && (localStorage.removeItem("userTemp"),
                localStorage.removeItem("localStorageMessId"),
                localStorage.removeItem("messages"),
                localStorage.setItem("aichat_version", s))
            }
            ,
            showLoader = function() {
                $("body.scrollbar").prepend('<div class="loader"></div>')
            }
            ,
            hideLoader = function() {
                $("body.scrollbar").find(".loader").remove()
            }
            ,
            loadIndex()
        }
        ))
    }
    )()
}
)();
