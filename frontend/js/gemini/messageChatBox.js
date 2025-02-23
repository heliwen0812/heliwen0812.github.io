/*! For license information please see messageChatBox.js.LICENSE.txt */
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
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, o)
        }
        return n
    }
    function n(e) {
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
    function o(t, n, o) {
        var r;
        return r = function(t, n) {
            if ("object" != e(t) || !t)
                return t;
            var o = t[Symbol.toPrimitive];
            if (void 0 !== o) {
                var r = o.call(t, n || "default");
                if ("object" != e(r))
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === n ? String : Number)(t)
        }(n, "string"),
        (n = "symbol" == e(r) ? r : r + "")in t ? Object.defineProperty(t, n, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = o,
        t
    }
    function r(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var o, r, a, i, s = [], l = !0, c = !1;
                try {
                    if (a = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        l = !1
                    } else
                        for (; !(l = (o = a.call(n)).done) && (s.push(o.value),
                        s.length !== t); l = !0)
                            ;
                } catch (e) {
                    c = !0,
                    r = e
                } finally {
                    try {
                        if (!l && null != n.return && (i = n.return(),
                        Object(i) !== i))
                            return
                    } finally {
                        if (c)
                            throw r
                    }
                }
                return s
            }
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return a(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++)
            o[n] = e[n];
        return o
    }
    function i() {
        "use strict";
        i = function() {
            return n
        }
        ;
        var t, n = {}, o = Object.prototype, r = o.hasOwnProperty, a = Object.defineProperty || function(e, t, n) {
            e[t] = n.value
        }
        , s = "function" == typeof Symbol ? Symbol : {}, l = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", d = s.toStringTag || "@@toStringTag";
        function u(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(e, t, n) {
                return e[t] = n
            }
        }
        function h(e, t, n, o) {
            var r = t && t.prototype instanceof y ? t : y
              , i = Object.create(r.prototype)
              , s = new E(o || []);
            return a(i, "_invoke", {
                value: L(e, n, s)
            }),
            i
        }
        function p(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        n.wrap = h;
        var m = "suspendedStart"
          , f = "suspendedYield"
          , g = "executing"
          , v = "completed"
          , w = {};
        function y() {}
        function b() {}
        function x() {}
        var M = {};
        u(M, l, (function() {
            return this
        }
        ));
        var S = Object.getPrototypeOf
          , k = S && S(S(j([])));
        k && k !== o && r.call(k, l) && (M = k);
        var C = x.prototype = y.prototype = Object.create(M);
        function $(e) {
            ["next", "throw", "return"].forEach((function(t) {
                u(e, t, (function(e) {
                    return this._invoke(t, e)
                }
                ))
            }
            ))
        }
        function O(t, n) {
            function o(a, i, s, l) {
                var c = p(t[a], t, i);
                if ("throw" !== c.type) {
                    var d = c.arg
                      , u = d.value;
                    return u && "object" == e(u) && r.call(u, "__await") ? n.resolve(u.__await).then((function(e) {
                        o("next", e, s, l)
                    }
                    ), (function(e) {
                        o("throw", e, s, l)
                    }
                    )) : n.resolve(u).then((function(e) {
                        d.value = e,
                        s(d)
                    }
                    ), (function(e) {
                        return o("throw", e, s, l)
                    }
                    ))
                }
                l(c.arg)
            }
            var i;
            a(this, "_invoke", {
                value: function(e, t) {
                    function r() {
                        return new n((function(n, r) {
                            o(e, t, n, r)
                        }
                        ))
                    }
                    return i = i ? i.then(r, r) : r()
                }
            })
        }
        function L(e, n, o) {
            var r = m;
            return function(a, i) {
                if (r === g)
                    throw Error("Generator is already running");
                if (r === v) {
                    if ("throw" === a)
                        throw i;
                    return {
                        value: t,
                        done: !0
                    }
                }
                for (o.method = a,
                o.arg = i; ; ) {
                    var s = o.delegate;
                    if (s) {
                        var l = B(s, o);
                        if (l) {
                            if (l === w)
                                continue;
                            return l
                        }
                    }
                    if ("next" === o.method)
                        o.sent = o._sent = o.arg;
                    else if ("throw" === o.method) {
                        if (r === m)
                            throw r = v,
                            o.arg;
                        o.dispatchException(o.arg)
                    } else
                        "return" === o.method && o.abrupt("return", o.arg);
                    r = g;
                    var c = p(e, n, o);
                    if ("normal" === c.type) {
                        if (r = o.done ? v : f,
                        c.arg === w)
                            continue;
                        return {
                            value: c.arg,
                            done: o.done
                        }
                    }
                    "throw" === c.type && (r = v,
                    o.method = "throw",
                    o.arg = c.arg)
                }
            }
        }
        function B(e, n) {
            var o = n.method
              , r = e.iterator[o];
            if (r === t)
                return n.delegate = null,
                "throw" === o && e.iterator.return && (n.method = "return",
                n.arg = t,
                B(e, n),
                "throw" === n.method) || "return" !== o && (n.method = "throw",
                n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                w;
            var a = p(r, e.iterator, n.arg);
            if ("throw" === a.type)
                return n.method = "throw",
                n.arg = a.arg,
                n.delegate = null,
                w;
            var i = a.arg;
            return i ? i.done ? (n[e.resultName] = i.value,
            n.next = e.nextLoc,
            "return" !== n.method && (n.method = "next",
            n.arg = t),
            n.delegate = null,
            w) : i : (n.method = "throw",
            n.arg = new TypeError("iterator result is not an object"),
            n.delegate = null,
            w)
        }
        function T(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function A(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function E(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(T, this),
            this.reset(!0)
        }
        function j(n) {
            if (n || "" === n) {
                var o = n[l];
                if (o)
                    return o.call(n);
                if ("function" == typeof n.next)
                    return n;
                if (!isNaN(n.length)) {
                    var a = -1
                      , i = function e() {
                        for (; ++a < n.length; )
                            if (r.call(n, a))
                                return e.value = n[a],
                                e.done = !1,
                                e;
                        return e.value = t,
                        e.done = !0,
                        e
                    };
                    return i.next = i
                }
            }
            throw new TypeError(e(n) + " is not iterable")
        }
        return b.prototype = x,
        a(C, "constructor", {
            value: x,
            configurable: !0
        }),
        a(x, "constructor", {
            value: b,
            configurable: !0
        }),
        b.displayName = u(x, d, "GeneratorFunction"),
        n.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
        }
        ,
        n.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x,
            u(e, d, "GeneratorFunction")),
            e.prototype = Object.create(C),
            e
        }
        ,
        n.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        $(O.prototype),
        u(O.prototype, c, (function() {
            return this
        }
        )),
        n.AsyncIterator = O,
        n.async = function(e, t, o, r, a) {
            void 0 === a && (a = Promise);
            var i = new O(h(e, t, o, r),a);
            return n.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }
            ))
        }
        ,
        $(C),
        u(C, d, "Generator"),
        u(C, l, (function() {
            return this
        }
        )),
        u(C, "toString", (function() {
            return "[object Generator]"
        }
        )),
        n.keys = function(e) {
            var t = Object(e)
              , n = [];
            for (var o in t)
                n.push(o);
            return n.reverse(),
            function e() {
                for (; n.length; ) {
                    var o = n.pop();
                    if (o in t)
                        return e.value = o,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        n.values = j,
        E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = t,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = t,
                this.tryEntries.forEach(A),
                !e)
                    for (var n in this)
                        "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done)
                    throw e;
                var n = this;
                function o(o, r) {
                    return s.type = "throw",
                    s.arg = e,
                    n.next = o,
                    r && (n.method = "next",
                    n.arg = t),
                    !!r
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a]
                      , s = i.completion;
                    if ("root" === i.tryLoc)
                        return o("end");
                    if (i.tryLoc <= this.prev) {
                        var l = r.call(i, "catchLoc")
                          , c = r.call(i, "finallyLoc");
                        if (l && c) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        } else if (l) {
                            if (this.prev < i.catchLoc)
                                return o(i.catchLoc, !0)
                        } else {
                            if (!c)
                                throw Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc)
                                return o(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var a = o;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var i = a ? a.completion : {};
                return i.type = e,
                i.arg = t,
                a ? (this.method = "next",
                this.next = a.finallyLoc,
                w) : this.complete(i)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                w
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                        return this.complete(n.completion, n.afterLoc),
                        A(n),
                        w
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var o = n.completion;
                        if ("throw" === o.type) {
                            var r = o.arg;
                            A(n)
                        }
                        return r
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield: function(e, n, o) {
                return this.delegate = {
                    iterator: j(e),
                    resultName: n,
                    nextLoc: o
                },
                "next" === this.method && (this.arg = t),
                w
            }
        },
        n
    }
    function s(e, t, n, o, r, a, i) {
        try {
            var s = e[a](i)
              , l = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(l) : Promise.resolve(l).then(o, r)
    }
    function l(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(o, r) {
                var a = e.apply(t, n);
                function i(e) {
                    s(a, o, r, i, l, "next", e)
                }
                function l(e) {
                    s(a, o, r, i, l, "throw", e)
                }
                i(void 0)
            }
            ))
        }
    }
    $(document).ready((function() {
        var e = window.location.origin
          , t = null
          , o = null
          , a = 0
          , s = $("#chat-form")
          , c = $("#chat-input")
          , d = $(".wrap-chat-form .form-data--files")
          , u = "btn-send-message-svg"
          , h = "btn-open-microphone"
          , p = "icon-stop-circle"
          , m = $(".wrap-count-word")
          , f = $("#content .chat-form-container .wrap-file-attach")
          , g = $(".wrap-chat-form .file-attach-button input[type='file']")
          , v = null
          , w = 1
          , y = null
          , b = null
          , x = null
          , M = "terms-of-use-accepted"
          , S = $(".wrap-terms-of-use-accepted");
        loadIndex = function() {
            var e = this;
            c.focus(),
            renderMessagesOld(),
            goOur(hefe);
            var t = 0;
            c.on("keydown", (function(n) {
                if ("Enter" !== n.key && 13 !== n.keyCode || n.shiftKey || isMobile) {
                    "" == c.val() && (t = 0,
                    a || hideBtnSendMessAndShowBtnOpenMicro()),
                    t || (showBtnSendMessAndHideBtnOpenMicro(),
                    t = 1);
                    var o = countWords(c.val());
                    if ("Backspace" !== n.key && 8 !== n.keyCode && o.cancel)
                        return n.preventDefault(),
                        notyf.error(messError1009.replace("UUU", '<a href="'.concat(urlPricing, '">').concat(upgradeText, "</a>"))),
                        !1
                } else {
                    n.preventDefault();
                    var r = d.attr("attachments");
                    r = r ? JSON.parse(r) : r,
                    e.sendMessageToGemini(c.val(), r)
                }
            }
            )),
            $("#btn-send-message .btn-send-message-svg").click((function(t) {
                t.preventDefault();
                var n = d.attr("attachments");
                n = n ? JSON.parse(n) : n,
                e.sendMessageToGemini(c.val(), n),
                isMobile && c.css({
                    height: "50px"
                })
            }
            )),
            $(".wrap_instruct .instruct-item").click((function() {
                e.sendMessageToGemini($(this).find("strong").html().trim())
            }
            )),
            c.mouseleave((function() {
                handleShowAndHideBtnSendMessAndShowBtnOpenMicro($(this))
            }
            )),
            $(document).on("click", "#" + idNameBtnRegenerateResponse, (function() {
                var e = $(this).parents(".wrap-ai-completed").prev(".chat-box.human").find(".message-content").find(".message").text();
                resendMessageToGemini(e, e)
            }
            )),
            isMobile ? $("body").on({
                touchmove: function(e) {
                    setScrollToBottomOfChatBox()
                }
            }) : $(wrapMessageDom).scroll((function() {
                setScrollToBottomOfChatBox()
            }
            )),
            $("#btn-send-message .btn-open-microphone").on("click", (function(e) {
                e.preventDefault(),
                speakToText()
            }
            )),
            $(document).on("click", ".ai-completed-footer__left--clipboard", (function(e) {
                copyCompleted($(this))
            }
            )),
            $(document).on("click", "." + p, (function(e) {
                e.preventDefault(),
                stopGenerating()
            }
            )),
            deleteMessageLast(),
            g.on("change", (function() {
                f.find(".file-attach-button").css("display", "none"),
                f.append(htmlDottedLoading()),
                f.find(".dotte-item").css({
                    width: "9px",
                    "margin-bottom": "12px"
                }),
                readURL(this)
            }
            )),
            $(document).on("click", ".wrap-chat-message .btn-close-file", (function(e) {
                var t = d.attr("attachments");
                if (0 == (t = t ? JSON.parse(t) : []).length)
                    return !1;
                var n = []
                  , o = $(this).parents(".form-data--file-item")
                  , r = o.find(".name-file").text();
                if (r = r || o.attr("title"),
                $.each(t, (function(e, o) {
                    if (o.name == r)
                        return n[0] = o.path,
                        t.splice(e, 1),
                        !1
                }
                )),
                0 == n.length)
                    return !1;
                $(this).css("pointer-events", "none");
                var a = deleteFiles(n);
                200 == a.status ? JSON.parse(a.responseText).status ? (d.attr("attachments", 0 == t.length ? "" : JSON.stringify(t)),
                o.remove(),
                0 == t.length && (d.css({
                    display: "none"
                }),
                handleShowAndHideBtnSendMessAndShowBtnOpenMicro(c)),
                g.val(null)) : $(this).css("pointer-events", "unset") : $(this).css("pointer-events", "unset")
            }
            )),
            checkedModal(),
            $(".wrap-gemini-model .dropdown-item-model").on("click", (function(e) {
                setModal($(this))
            }
            )),
            $(document).on("click", ".btn-delete-history-message", (function() {
                var e = $(this).parents(".history-message-list-item")
                  , t = e.attr("id");
                confirmDeleteChatModal(e, t)
            }
            )),
            $(document).on("click", ".btn-edit-question", (function() {
                $(".message-content").removeClass("active");
                var e = $(this).parents(".message-content")
                  , t = e.find(".message");
                e.addClass("active"),
                t.attr("contenteditable", !0).focus();
                var n = t.text().trim();
                e.find(".btn-update-question").attr("questionOld", n)
            }
            )),
            $(document).on("click", ".btn-update-question", (function() {
                var e = $(this).parents(".message-content").find(".message")
                  , t = $(this).attr("questionOld")
                  , n = e.text();
                if (!n.trim() || t == n)
                    return !1;
                resendMessageToGemini(t, n)
            }
            )),
            $(document).on("click", ".btn-cancel", (function() {
                $(this).parents(".message-content").removeClass("active")
            }
            )),
            "yes" != localStorage.getItem(M) && S.show(),
            $("#btn-terms-of-use-accepted").click((function() {
                S.fadeOut(500, (function() {
                    S.hide()
                }
                )),
                localStorage.setItem(M, "yes")
            }
            ))
        }
        ,
        renderMessageHumam = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
              , o = $(".container-message > div:last")
              , r = o.find(".message-completed.message-error")
              , a = (Math.random() + 1).toString(36).substring(5)
              , i = "";
            i = avatarImg ? '<div class="avatar-img"><img src="'.concat(avatarImg, '" class="image-avatar" alt="avatar" width="35" height="35"></div>') : '<div class="avatar">\n                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle image-avatar" viewBox="0 0 16 16">\n                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>\n                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>\n                </svg>\n            </div>';
            var s = "";
            t && (s += '<div class="form-data--files scrollbar" attachments="" style="display: -webkit-inline-box;">',
            $.each(t, (function(e, t) {
                s += renderFileHumam(t)
            }
            )),
            s += "</div>"),
            0 == o.length || 0 == r.length ? ($(".container-message").append('\n                <div class="chat-box human">\n                    '.concat(i, '\n                    <div class="message-content">\n                        ').concat(s, '\n                        <div class="message scrollbar" id="').concat(a, '"></div>\n                        <div class="chat-box-human-footer">\n                            <div class="wrap-btn-action">\n                                <button class="btn-edit-question" title="').concat(aiChatMessageTrans.edit_message, '" aria-label="').concat(aiChatMessageTrans.edit_message, '">\n                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 4.29291C15.0641 2.52167 17.9359 2.52167 19.7071 4.2929C21.4784 6.06414 21.4784 8.93588 19.7071 10.7071L18.7073 11.7069L11.6135 18.8007C10.8766 19.5376 9.92793 20.0258 8.89999 20.1971L4.16441 20.9864C3.84585 21.0395 3.52127 20.9355 3.29291 20.7071C3.06454 20.4788 2.96053 20.1542 3.01362 19.8356L3.80288 15.1C3.9742 14.0721 4.46243 13.1234 5.19932 12.3865L13.2929 4.29291ZM13 7.41422L6.61353 13.8007C6.1714 14.2428 5.87846 14.8121 5.77567 15.4288L5.21656 18.7835L8.57119 18.2244C9.18795 18.1216 9.75719 17.8286 10.1993 17.3865L16.5858 11L13 7.41422ZM18 9.5858L14.4142 6.00001L14.7071 5.70712C15.6973 4.71693 17.3027 4.71693 18.2929 5.70712C19.2831 6.69731 19.2831 8.30272 18.2929 9.29291L18 9.5858Z" fill="currentColor"></path></svg>\n                                </button>\n                            </div>\n                            <div class="wrap-btn-cancel-send">\n                                <button class="btn-cancel">').concat(aiChatMessageTrans.cancel, '</button>\n                                <button class="btn-update-question">').concat(aiChatMessageTrans.update, "</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            ")),
            $(".chat-box.human #" + a).text(e)) : (r.length > 0 && o.remove(),
            $(".container-message > div:last").html("\n                ".concat(i, '\n                <div class="message-content">\n                    ').concat(s, '\n                    <p class="message" style="word-wrap: break-word; white-space: pre-wrap;">').concat(e, "</p>\n                </div>\n            "))),
            n && scrollToButton(500)
        }
        ,
        sendMessageToGemini = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (isNotSendMessage)
                return !1;
            if (!e && !n)
                return !1;
            if (e && (e = e.trim()),
            e || n) {
                var o = this;
                $(".wrap_instruct").hide();
                var r = pushMessLocalStorage("user", e, n, 1);
                t = getResponseIdTemp(),
                y = e,
                b = n,
                o.renderMessageHumam(e, n),
                o.renderWrapMessageCompleted(htmlBarLoading(), t),
                c.val(""),
                n && (d.css("display", "none").html("").attr("attachments", ""),
                g.val(null)),
                hideKeyboard(c),
                o.streamApiChatMessage(r.contents, e, n),
                isMobile && (s.css({
                    "padding-top": "0"
                }),
                $("#btn-back-to-top, #btn-back-to-bottom").css({
                    bottom: "165px"
                })),
                document.getElementById(idNameBtnRegenerateResponse) && document.getElementById(idNameBtnRegenerateResponse).remove(),
                focusElement(c)
            }
        }
        ,
        streamApiChatMessage = function() {
            var t = l(i().mark((function t(n, r, a) {
                var s, l, c, d, u, h = arguments;
                return i().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return s = h.length > 3 && void 0 !== h[3] ? h[3] : 0,
                            isNotSendMessage = 1,
                            showDottedLoading(),
                            m.hide(),
                            t.next = 6,
                            genKey({
                                messages: n
                            });
                        case 6:
                            if ((l = t.sent).timestamp) {
                                t.next = 10;
                                break
                            }
                            return showMessError(),
                            t.abrupt("return", !1);
                        case 10:
                            return c = {
                                id: l.id,
                                timestamp: l.timestamp,
                                nonce: l.nonce,
                                messages: n,
                                url: window.location.href,
                                isAuthCheck,
                                modal: localStorage.getItem("modal"),
                                vip,
                                lang
                            },
                            d = new SSE("".concat(e, "/api"),{
                                payload: JSON.stringify(c),
                                method: "POST"
                            }),
                            u = "",
                            d.addEventListener("message", (function(e) {
                                if (e.data)
                                    try {
                                        var t = JSON.parse(e.data);
                                        $.each(t.candidates, (function(e, t) {
                                            t.content && ($.each(t.content.parts, (function(e, t) {
                                                u += t.text,
                                                o = u,
                                                updateMessCompleted(u, 0, 1)
                                            }
                                            )),
                                            "MAX_TOKENS" == t.finishReason && notyf.open({
                                                type: "warning",
                                                message: messErrorTrans.maxTokens
                                            }))
                                        }
                                        ))
                                    } catch (e) {
                                        var n = e.toString();
                                        console.log(n)
                                    }
                                else {
                                    if (e.id) {
                                        var i = JSON.parse(e.id);
                                        if (-1 !== $.inArray(i.code, [1003, 1004, 1009, 1014])) {
                                            var l = [];
                                            l[1003] = messErrorTrans[1003],
                                            l[1004] = messErrorTrans[1004] + ' <a class="btn btn-primary" href="' + lang + '/login" role="button">Sign in</a>',
                                            l[1009] = messError1009,
                                            l[1014] = messErrorTrans[1014],
                                            goOur(i.data.href);
                                            var c = l[i.code].replace("UUU", '<a href="' + urlPricing + '">'.concat(upgradeText, "</a>"));
                                            updateMessCompleted(c, 1)
                                        } else
                                            -1 !== $.inArray(i.code, [1002, 1006]) ? (updateMessCompleted(messErrorTrans.chatMessage, 1),
                                            setTimeout((function() {
                                                window.location.href = i.data.href
                                            }
                                            ), 2e3)) : updateMessCompleted(i.message, 1);
                                        deleteMessageLast()
                                    } else
                                        u ? (s || pushMessLocalStorage("user", r, a),
                                        pushMessLocalStorage("model", u, null, 0, s)) : updateMessCompleted(messErrorTrans.chatMessage, 1);
                                    $(".ai-completed-footer").css({
                                        display: "flex"
                                    }),
                                    showBtnReRespon(),
                                    isNotSendMessage = 0,
                                    showIconSendMessChat(),
                                    showActionCompletedFooter(),
                                    removeCaretRound(),
                                    o = null,
                                    x = null,
                                    y = null,
                                    b = null
                                }
                                w && scrollToButton(300)
                            }
                            )),
                            d.stream(),
                            v = d,
                            d.addEventListener("error", (function(e) {
                                isNotSendMessage = 0,
                                o = null,
                                x = null,
                                y = null,
                                b = null,
                                showIconSendMessChat(),
                                removeCaretRound(),
                                updateMessCompleted(messErrorTrans.chatMessage, 1),
                                e.readyState == EventSource.CLOSED && console.log("abc"),
                                console.log("111")
                            }
                            )),
                            t.abrupt("return", d);
                        case 18:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )));
            return function(e, n, o) {
                return t.apply(this, arguments)
            }
        }(),
        renderWrapMessageCompleted = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
              , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            $(".container-message").append('\n        <div class="wrap-ai-completed">\n            <div class="chat-box ai-completed">\n                <div class="avatar">\n                    <img class="icon-sm icon-gemini" src="/frontend/svg/gemini/gemini_1-5_flash.svg"\n                                alt="gemini-1.5-flash-logo" width="32px" height="32px" role="img">\n                </div>\n                <div class="message-completed '.concat(n ? "message-error" : "", '" id="').concat(t, '"></div>\n            </div>\n            <div class="ai-completed-footer">\n                <div class="ai-completed-footer__left">\n                    <span class="ai-completed-footer__left--item">\n                        <svg class="ai-completed-footer__left--clipboard" fill="currentColor" width="19" height="19" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>').concat(aiChatMessageTrans.btn_copy, '</title> <path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z" class="clr-i-outline clr-i-outline-path-1"></path><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z" class="clr-i-outline clr-i-outline-path-2"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>\n                    </span>\n                </div>\n                <div></div>\n                <div></div>\n            </div>\n        </div>\n    ')),
            document.getElementById(t).innerHTML = convertMarkdownToHTML(e),
            o && scrollToButton(500)
        }
        ,
        showBtnRegenerateResponse = function() {
            $(".container-message .wrap-ai-completed:last-child .ai-completed-footer .ai-completed-footer__left").append('<span class="ai-completed-footer__left--item" id="'.concat(idNameBtnRegenerateResponse, '" title="').concat(aiChatMessageTrans.btn_regenerate_response, '">\n            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">\n                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>\n                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>\n            </svg>\n        </span>'))
        }
        ,
        genKey = function() {
            var e = l(i().mark((function e(t) {
                var n, o, a, s, l, c, d, u, h, p, m;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return keyToken = "XXXXXXYYY",
                            e.next = 3,
                            getTimestamp();
                        case 3:
                            for (o = e.sent,
                            a = o.timestamp,
                            s = genNonce(),
                            (l = []).timestamp = a,
                            l.nonce = s,
                            l.messages = null !== (n = t.messages[a % t.messages.length].content) && void 0 !== n ? n : "",
                            c = "",
                            d = 0,
                            u = Object.entries(l); d < u.length; d++)
                                h = r(u[d], 2),
                                p = h[0],
                                m = h[1],
                                c += p + m;
                            return c += "keyToken" + keyToken,
                            c += "vv1",
                            l.id = md5(c),
                            e.abrupt("return", l);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        genNonce = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        ,
        getTimestamp = function() {
            var t = "".concat(e, "/api/timestamp")
              , n = window.location.href;
            return $.ajax({
                url: t,
                type: "GET",
                data: {
                    href: n,
                    ypp
                }
            }).done((function(e) {
                e.status ? (e.isLoad || e.isLoad1) && -1 == n.indexOf(e.href) && (window.location.href = e.href) : goOur(hefe)
            }
            )).fail((function(e, t) {
                goOur(hefe)
            }
            ))
        }
        ,
        speakToText = function() {
            if ("SpeechRecognition"in window || "webkitSpeechRecognition"in window) {
                var e = document.querySelector("#chat-input")
                  , t = t || webkitSpeechRecognition
                  , n = n || webkitSpeechGrammarList
                  , o = new t
                  , r = new n;
                r.addFromString("#JSGF V1.0;", 1),
                o.grammars = r,
                o.interimResults = !1,
                o.maxAlternatives = 1,
                o.start(),
                o.onresult = function(t) {
                    var n = t.results.length - 1
                      , o = t.results[n][0].transcript;
                    e.textContent = o
                }
                ,
                o.onspeechend = function() {
                    o.stop(),
                    showBtnSendMessAndHideBtnOpenMicro()
                }
                ,
                o.onend = function() {
                    o.stop()
                }
                ,
                o.onerror = function(e) {
                    o.stop(),
                    notyf.error(e.error),
                    showBtnSendMessAndHideBtnOpenMicro(),
                    "not-allowed" == e.error && (a = 1)
                }
            } else
                showBtnSendMessAndHideBtnOpenMicro(),
                a = 1,
                notyf.error("Speech recognition not supported")
        }
        ,
        showBtnSendMessAndHideBtnOpenMicro = function() {
            if (isNotSendMessage)
                return !1;
            $("." + u).show(),
            $("." + h).hide(),
            $("." + p).hide(),
            focusElement(c)
        }
        ,
        hideBtnSendMessAndShowBtnOpenMicro = function() {
            if (isNotSendMessage)
                return !1;
            $("." + u).hide(),
            $("." + h).show(),
            $("." + p).hide(),
            focusElement(c)
        }
        ,
        showDottedLoading = function() {
            $("." + u).hide(),
            $("." + h).hide(),
            $("." + p).show(),
            $(".chat-box #" + t).parents(".chat-box").addClass("loading")
        }
        ,
        countWords = function(e) {
            var t = [];
            t.cancel = 0;
            var n = $(".wrap-count-word #length-text-chat-input");
            e = e.length;
            var o = parseInt($(".wrap-count-word #max-length").text());
            n.text(e);
            var r = e / o * 100;
            return m.show(),
            r >= 100 ? (t.cancel = 1,
            n.css({
                color: "red"
            })) : r >= 80 && r < 100 ? n.css({
                color: "#e5ac00"
            }) : r >= 70 ? n.css({
                color: "black"
            }) : m.hide(),
            t
        }
        ,
        hideKeyboard = function(e) {
            document.getElementById("chat-input").blur()
        }
        ,
        addBorderBlink = function(e) {
            e.append('<span class="cursor blink">&nbsp;</span>')
        }
        ,
        removeBorderBlink = function(e) {
            e.find(".cursor.blink").remove()
        }
        ,
        showIconSendMessChat = function(e) {
            a ? showBtnSendMessAndHideBtnOpenMicro() : hideBtnSendMessAndShowBtnOpenMicro()
        }
        ,
        setScrollToBottomOfChatBox = function() {
            w = wrapMessageDom.prop("scrollTop") > wrapMessageDom.prop("scrollHeight") - (isMobile ? 600 : 1e3) ? 1 : 0
        }
        ,
        htmlBarLoading = function() {
            return '<div>\n                    <div class="loading-indicator">\n                        <div class="loading-bar"></div>\n                        <div class="loading-bar"></div>\n                        <div class="loading-bar"></div>\n                    </div>\n                </div>'
        }
        ,
        htmlDottedLoading = function() {
            return '<div class="dotted-loading-wait-completion">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="36" height="56" style="shape-rendering: auto; display: block;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><rect fill="#e15b64" height="40" width="15" y="30" x="17.5">\n                <animate begin="-0.2s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="18;30;30" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="y"></animate>\n                <animate begin="-0.2s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="64;40;40" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="height"></animate>\n                </rect>\n                <rect fill="#f8b26a" height="40" width="15" y="30" x="42.5">\n                <animate begin="-0.1s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="20.999999999999996;30;30" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="y"></animate>\n                <animate begin="-0.1s" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="58.00000000000001;40;40" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="height"></animate>\n                </rect>\n                <rect fill="#abbd81" height="40" width="15" y="30" x="67.5">\n                <animate keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="20.999999999999996;30;30" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="y"></animate>\n                <animate keySplines="0 0.5 0.5 1;0 0.5 0.5 1" values="58.00000000000001;40;40" keyTimes="0;0.5;1" calcMode="spline" dur="1s" repeatCount="indefinite" attributeName="height"></animate>\n                </rect><g></g></g></svg>\n            </div>'
        }
        ,
        hideDottedLoading = function() {
            $(".dotted-loading-wait-completion").remove()
        }
        ,
        updateMessCompleted = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (document.getElementById(t).innerHTML = convertMarkdownToHTML(e, o),
            o) {
                var r = $(".chat-box #" + t).children().last()
                  , a = r.prevObject
                  , i = $(a[a.length - 1]).children().last();
                i.length && (r = $(i[i.length - 1])),
                r.addClass("fade-in-animation")
            }
            if (n) {
                $("#" + t).addClass("message-error");
                var s = $(".wrap-message div.chat-box.human").last();
                s.find(".form-data--files").length > 0 && (s.find("button.btn-edit-question").hide(),
                $(".wrap-ai-completed:last-child #" + idNameBtnRegenerateResponse).hide())
            } else
                $("#" + t).removeClass("message-error")
        }
        ,
        updateMessCompleted1 = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            textAnimationsEffects(t, convertMarkdownToHTML(e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)),
            n ? $("#" + t).addClass("message-error") : $("#" + t).removeClass("message-error")
        }
        ,
        showBtnReRespon = function() {
            document.getElementById(idNameBtnRegenerateResponse) || showBtnRegenerateResponse()
        }
        ,
        pushMessLocalStorage = function(e, t) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
              , a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
              , i = getResponseIdTemp()
              , s = Date.now()
              , l = []
              , c = []
              , d = []
              , u = []
              , h = [];
            return u.role = e,
            u.content = t,
            u.attachments = o,
            contentOject = n({}, u),
            c.push(contentOject),
            d.name = t ? t.split(" ").slice(0, 10).join(" ") : "Chat ".concat(Math.floor(1e3 * Math.random())),
            d.date = s,
            d.contents = c,
            localStorage.messages && (h = (l = JSON.parse(localStorage.messages))[localStorage.localStorageMessId]) ? (messageItemContents = h.contents,
            a && "model" == messageItemContents[messageItemContents.length - 1].role && messageItemContents.splice(messageItemContents.length - 1, 1),
            messageItemContents.push(contentOject),
            r || (localStorage.messages = JSON.stringify(n({}, l))),
            h) : (l[i] = h = n({}, d),
            r || (localStorage.localStorageMessId = localStorage.localStorageMessId = i,
            localStorage.messages = JSON.stringify(n({}, l)),
            renderMenuHistoryMessage()),
            h)
        }
        ,
        getResponseIdTemp = function() {
            return Math.floor(1e6 * Math.random())
        }
        ,
        handleRegenerateResponse = function(e, n) {
            hideActionCompletedFooter(),
            x = 1;
            var o = pushMessLocalStorage("user", e, n, 1, 1);
            t ? document.getElementById(t).innerHTML = htmlBarLoading() : (t = getResponseIdTemp(),
            renderWrapMessageCompleted(htmlBarLoading(), t)),
            streamApiChatMessage(o.contents, e, n, 1),
            document.getElementById(idNameBtnRegenerateResponse).remove()
        }
        ,
        stopGenerating = function() {
            isNotSendMessage = 0,
            v.close(),
            showBtnReRespon(),
            showIconSendMessChat(),
            showActionCompletedFooter(),
            removeBorderBlink($("#" + t)),
            removeCaretRound(),
            hideDottedLoading(),
            x || pushMessLocalStorage("user", y, b),
            pushMessLocalStorage("model", o, null, 0, 1),
            $(".ai-completed-footer").css({
                display: "flex"
            }),
            deleteMessageLast()
        }
        ,
        copyCompleted = function(e) {
            var t = e.parent().parent().parent().parent().find(".message-completed")
              , n = document.getElementById(t.attr("id"))
              , o = document.createRange();
            o.selectNode(n);
            var r = window.getSelection();
            r.removeAllRanges(),
            r.addRange(o);
            try {
                document.execCommand("copy") && (e.css({
                    color: "#007bff"
                }),
                setTimeout((function() {
                    e.css({
                        color: ""
                    })
                }
                ), 3e3))
            } catch (e) {
                notyf.error("Unable to copy HTML. Please try again or manually copy the content.")
            }
            r.removeAllRanges()
        }
        ,
        showMessError = function() {
            isNotSendMessage = 0,
            showIconSendMessChat(),
            updateMessCompleted(messErrorTrans.chatMessage, 1),
            showBtnReRespon()
        }
        ,
        hideActionCompletedFooter = function() {
            $("#" + idNameBtnRegenerateResponse).parent().hide()
        }
        ,
        showActionCompletedFooter = function() {
            $("#" + idNameBtnRegenerateResponse).parent().show()
        }
        ,
        deleteMessageLast = function() {
            var e = []
              , t = [];
            if (localStorage.messages && (t = (e = JSON.parse(localStorage.messages))[localStorage.localStorageMessId])) {
                if (messageItemContents = t.contents,
                messageItemContents.length > 0 && "user" == messageItemContents[messageItemContents.length - 1].role) {
                    var o = messageItemContents[messageItemContents.length - 1].attachments;
                    if (o) {
                        var r = [];
                        $.each(o, (function(e, t) {
                            r.push(t.path)
                        }
                        )),
                        r.length && deleteFiles(r)
                    }
                    messageItemContents.splice(messageItemContents.length - 1, 1)
                }
                localStorage.messages = JSON.stringify(n({}, e))
            }
        }
        ,
        textAnimationsEffects = function(e, t) {
            var n = ""
              , o = {
                text: t,
                index: 0,
                chars: 0,
                speed: 5,
                container: "#" + e,
                init: function() {
                    return this.chars = this.text.length,
                    this.write()
                },
                write: function() {
                    var e;
                    n += null !== (e = this.text[this.index]) && void 0 !== e ? e : "",
                    $(this.container).html(n);
                    var t = isMobile ? 50 : 90
                      , r = isMobile ? 0 : 200;
                    if (w && this.index % t == 0 && scrollToButton(r),
                    this.index < this.chars)
                        return this.index++,
                        window.setTimeout((function() {
                            return o.write()
                        }
                        ), this.speed)
                }
            };
            o.init()
        }
        ,
        goOur = function(e) {
            var t = window.location.href;
            e = e.replace(ypp, ""),
            -1 == t.indexOf(e) && (window.location.href = e)
        }
        ,
        readURL = function() {
            var e = l(i().mark((function e(t) {
                var n, o, r, a, s, l;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            n = 0,
                            limitSizeAttachments && (o = (o = d.attr("attachments")) ? JSON.parse(o) : []).length > 0 && $.each(o, (function(e, t) {
                                n += t.size
                            }
                            )),
                            r = [],
                            a = "",
                            s = i().mark((function e() {
                                var o, s;
                                return i().wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (s = function(e) {
                                                var t = URL.createObjectURL(e);
                                                return new Promise((function(n, o) {
                                                    var r = new FileReader;
                                                    r.readAsDataURL(e),
                                                    r.onload = function() {
                                                        return n([r.result, e, t])
                                                    }
                                                    ,
                                                    r.onerror = function(e) {
                                                        return o(e)
                                                    }
                                                }
                                                ))
                                            }
                                            ,
                                            !limitSizeAttachments) {
                                                e.next = 13;
                                                break
                                            }
                                            if (o = t.files[l].size / 1024,
                                            !(n > limitSizeAttachments)) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!(l > 0 && n + o > limitSizeAttachments)) {
                                                e.next = 7;
                                                break
                                            }
                                            return a = messErrorTrans[1012],
                                            e.abrupt("return", 0);
                                        case 7:
                                            e.next = 10;
                                            break;
                                        case 9:
                                            n += o;
                                        case 10:
                                            if (!(o > limitSizeAttachments)) {
                                                e.next = 13;
                                                break
                                            }
                                            return a = messErrorTrans[1013],
                                            e.abrupt("return", 0);
                                        case 13:
                                            return e.next = 15,
                                            s(t.files[l]).then((function(e) {
                                                r.push({
                                                    name: e[1].name,
                                                    type: e[1].type,
                                                    size: Math.round(e[1].size / 1024),
                                                    base64: e[0]
                                                })
                                            }
                                            ));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            l = 0;
                        case 6:
                            if (!(l < t.files.length)) {
                                e.next = 14;
                                break
                            }
                            return e.delegateYield(s(), "t0", 8);
                        case 8:
                            if (0 !== e.t0) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("continue", 11);
                        case 11:
                            l++,
                            e.next = 6;
                            break;
                        case 14:
                            a ? (f.find(".file-attach-button").css("display", "block"),
                            f.find(".dotted-loading-wait-completion").remove(),
                            notyf.error(a.replace(/AAA/gi, "".concat(limitSizeAttachments / 1024, "MB")).replace(/sign in/gi, '<a href="'.concat(urlLogin, '">Log in</a>')).replace("UUU", '<a href="'.concat(urlPricing, '">').concat(upgradeText, "</a>"))),
                            g.val(null)) : uploadFileMultiple(r);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }(),
        uploadFileMultiple = function(t) {
            var n = "".concat(e, "/").concat(lang, "/upload-file-multiple");
            data = "&fileList=" + JSON.stringify(t),
            data += "&isAuthCheck=" + isAuthCheck,
            $.ajax({
                url: n,
                type: "POST",
                dataType: "json",
                data,
                success: function(e) {
                    if (e.status) {
                        var t = ""
                          , n = d.attr("attachments");
                        n = (n = n ? JSON.parse(n) : []).concat(e.data.files),
                        $.each(e.data.files, (function(e, n) {
                            t += renderHtmlFile(n)
                        }
                        )),
                        d.append(t),
                        d.css({
                            display: "-webkit-inline-box"
                        }),
                        d.attr("attachments", JSON.stringify(n)),
                        showBtnSendMessAndHideBtnOpenMicro()
                    } else {
                        var o = e.message.replace(/sign in/gi, '<a href="'.concat(urlLogin, '">Log in</a>')).replace("UUU", '<a href="'.concat(urlPricing, '">').concat(upgradeText, "</a>"));
                        notyf.error(o),
                        g.val(null)
                    }
                    f.find(".file-attach-button").css("display", "block"),
                    f.find(".dotted-loading-wait-completion").remove()
                },
                error: function(e) {
                    f.find(".file-attach-button").css("display", "block"),
                    f.find(".dotted-loading-wait-completion").remove(),
                    notyf.error(String(e.responseJSON[Object.keys(e.responseJSON)[0]])),
                    g.val(null)
                }
            })
        }
        ,
        renderHtmlFile = function(e) {
            if (-1 != e.type.search(/image/i))
                return '\n                <div class="form-data--file-item" title="'.concat(e.name, '"\n                    style="width: 56px; background-size: cover; background-position: 50%;\n                        background-image: url(').concat(e.path, ')">\n                    <button class="btn-close-file" type="button" data-toggle="tooltip"\n                        data-bs-placement="top" title="').concat(aiChatMessageTrans.delete_file, '">\n                        <span>\n                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n                                xmlns="http://www.w3.org/2000/svg">\n                                <path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571"\n                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"\n                                    stroke-linejoin="round"></path>\n                            </svg>\n                        </span>\n                    </button>\n                </div>\n            ');
            var t = getHtmlFile(e);
            return '<div class="form-data--file-item">\n            <div class="form-data--file-item--file-info">\n                <div>'.concat(t[0], '</div>\n                <div class="form-data--file-item--text-file-info">\n                    <strong class="name-file">').concat(e.name, '</strong>\n                    <span class="description-file">').concat(t[1], '</span>\n                </div>\n            </div>\n            <button class="btn-close-file" type="button" data-toggle="tooltip"\n                data-bs-placement="top" title="').concat(aiChatMessageTrans.delete_file, '">\n                <span>\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"\n                        xmlns="http://www.w3.org/2000/svg">\n                        <path d="M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571"\n                            stroke="currentColor" stroke-width="2" stroke-linecap="round"\n                            stroke-linejoin="round"></path>\n                    </svg>\n                </span>\n            </button>\n        </div>')
        }
        ,
        renderFileHumam = function(e) {
            if (!e)
                return "";
            if (-1 != e.type.search(/image/i))
                return '<div class="form-data--file-item form-data--file-image" title="'.concat(e.name, '"\n                style="background-image: url(').concat(e.path, ')">\n            </div>');
            var t = getHtmlFile(e);
            return '<div class="form-data--file-item">\n            <div class="form-data--file-item--file-info">\n                <div>'.concat(t[0], '</div>\n                <div class="form-data--file-item--text-file-info">\n                    <strong class="name-file">').concat(e.name, '</strong>\n                    <span class="description-file">').concat(t[1], "</span>\n                </div>\n            </div>\n        </div>")
        }
        ,
        getHtmlFile = function(e) {
            var t = []
              , n = e.name.split(".")
              , o = n[n.length - 1].toLowerCase()
              , r = ["c", "cpp", "h", "java", "class", "jar", "py", "pyc", "js", "html", "css", "php", "rb", "pl", "sh", "swift", "kt", "m", "mm", "ts", "sql", "go", "rs", "dart", "R", "m", "hs"];
            return -1 != $.inArray(o, r) ? (t[0] = svgFileByExtension(o),
            t[0] = t[0] ? t[0] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" width="36" height="36"><rect width="36" height="36" rx="6" fill="#FF6E3C"></rect><path d="M21.333 23L26.333 18L21.333 13" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.667 13L9.66699 18L14.667 23" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            t[1] = "Code",
            t) : (r = ["docx", "odt", "rtf", "pdf", "txt", "zip", "epub", "xlsx", "ods", "csv", "tsv", "pptx", "odp"],
            -1 != $.inArray(o, r) ? (t[0] = svgFileByExtension(o),
            t[0] = t[0] ? t[0] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" width="36" height="36"><rect width="36" height="36" rx="6" fill="#FF5588"></rect><path d="M19.6663 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V14.6666L19.6663 9.66663Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.667 9.66663V14.6666H24.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.3337 18.8334H14.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.3337 22.1666H14.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.3337 15.5H15.5003H14.667" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            t[1] = "Document",
            t) : (t[0] = svgFileByExtension(o),
            t[0] = t[0] ? t[0] : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" width="36" height="36"><rect width="36" height="36" rx="6" fill="#0000FF"></rect><path d="M18.833 9.66663H12.9997C12.5576 9.66663 12.1337 9.84222 11.8212 10.1548C11.5086 10.4673 11.333 10.8913 11.333 11.3333V24.6666C11.333 25.1087 11.5086 25.5326 11.8212 25.8451C12.1337 26.1577 12.5576 26.3333 12.9997 26.3333H22.9997C23.4417 26.3333 23.8656 26.1577 24.1782 25.8451C24.4907 25.5326 24.6663 25.1087 24.6663 24.6666V15.5L18.833 9.66663Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.833 9.66663V15.5H24.6663" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
            t[1] = "File",
            t))
        }
        ,
        deleteFiles = function(t) {
            var n = "".concat(e, "/").concat(lang, "/delete-files");
            return $.ajax({
                url: n,
                type: "post",
                data: {
                    paths: t
                },
                async: !1,
                cache: !1
            }).done((function(e) {}
            )).fail((function(e, t) {}
            ))
        }
        ,
        handleShowAndHideBtnSendMessAndShowBtnOpenMicro = function(e) {
            if (isNotSendMessage)
                return !1;
            var t = d.attr("attachments");
            "" == e.val() && "" == t ? hideBtnSendMessAndShowBtnOpenMicro() : showBtnSendMessAndHideBtnOpenMicro()
        }
        ,
        setModal = function(e) {
            if (e.hasClass("disable") || e.find(".dropdown-item").hasClass("disabledbutton"))
                return !1;
            var t = e.attr("id");
            localStorage.setItem("modal", t),
            styleFileAttachBtn(t),
            $(".wrap-gemini-model .dropdown-item-model .dropdown-item .svg-checked").remove(),
            e.find(".dropdown-item").append(svgCheckedModalHtml()),
            $(".wrap-gemini-model #model-name").text($(".wrap-gemini-model #".concat(t, " .info-model--title")).text())
        }
        ,
        checkedModal = function() {
            var e = localStorage.getItem("modal");
            isGeminiAdvanced || "model-1-5-pro" != e || (e = "",
            localStorage.removeItem("modal")),
            e ? ($(".wrap-gemini-model #model-name").text($(".wrap-gemini-model #".concat(e, " .info-model--title")).text()),
            $(".wrap-gemini-model #".concat(e, " .dropdown-item")).append(svgCheckedModalHtml()),
            styleFileAttachBtn(e)) : $(".wrap-gemini-model #model-exp-1206 .dropdown-item").append(svgCheckedModalHtml())
        }
        ,
        svgCheckedModalHtml = function() {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle svg-checked" viewBox="0 0 16 16">\n                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>\n                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>\n                </svg>'
        }
        ,
        styleFileAttachBtn = function() {
            "model-gemini-3-5" == (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? ($(".file-attach-button").attr("disabled", "disabled").tooltip("dispose").attr("title", "This model doesn't support file attachments.").tooltip(),
            $('.file-attach-button input[type="file"]').attr("disabled", "disabled")) : ($(".file-attach-button").removeAttr("disabled").tooltip("dispose").attr("title", aiChatMessageTrans.file_attach).tooltip(),
            $('.file-attach-button input[type="file"]').removeAttr("disabled"))
        }
        ,
        removeCaretRound = function() {
            $(".chat-box #" + t).parents(".chat-box").removeClass("loading")
        }
        ,
        confirmDeleteChatModal = function(e, t) {
            $("#wrap-modal").html('<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\n<div class="modal-content">\n<div class="modal-header">\n<h1 class="modal-title fs-5" id="modalLabel"><strong>' + aiChatMessageTrans.delete_chat_title + '</strong></h1>\n</div>\n<div class="modal-body">\n<div>\n<p>' + aiChatMessageTrans.this_will_delete + " <strong>" + e.find(".history-message-name").text().trim() + '</strong></p>\n<div class="flex flex-col gap-3 sm:flex-row-reverse mt-3 sm:mt-4">\n<button class="" as="button" onclick="deleteMenuHistoryMessage(\'\',' + t + ')">\n<div class="flex items-center justify-center">' + aiChatMessageTrans.delete + '</div>\n</button>\n<button class="" data-bs-dismiss="modal" as="button">\n<div class="flex items-center justify-center">' + aiChatMessageTrans.cancel + "</div>\n</button>\n</div>\n</div>\n\n<style>\n.sm\\:flex-row-reverse {\nflex-direction: row-reverse;\n}\n\n.relative {\nborder-radius: 9999px;\n}\n</style>\n</div>\n\n</div>\n</div>\n\n").modal("show")
        }
        ,
        deleteMenuHistoryMessage = function(e, t) {
            if (isNotSendMessage)
                return !1;
            e || (e = $("li#".concat(t, ".history-message-list-item")));
            var o = JSON.parse(localStorage.messages)
              , r = [];
            $.each(o[t].contents, (function(e, t) {
                t.attachments && $.each(t.attachments, (function(e, t) {
                    r.push(t.path)
                }
                ))
            }
            )),
            r.length > 0 && deleteFiles(r),
            delete o[t],
            0 === Object.keys(o).length ? localStorage.removeItem("messages") : localStorage.messages = JSON.stringify(n({}, o)),
            t == localStorage.localStorageMessId && ($(".wrap_instruct").css({
                display: "flex"
            }),
            $(".container-message").html("")),
            e.fadeOut(500, (function() {
                e.remove()
            }
            )),
            $("#wrap-modal").modal("hide")
        }
        ,
        svgFileByExtension = function(e) {
            return -1 != $.inArray(e, ["txt", "zip", "svg", "psd", "py", "php", "pdf", "mp4", "mp3", "js", "exe", "css", "cpp", "doc", "docx"]) ? '<img src="frontend/svg/files/'.concat(e, '.svg" alt="').concat(e, '" width="30px" height="30px">') : ""
        }
        ,
        resendMessageToGemini = function(e, t) {
            var o = null
              , r = JSON.parse(localStorage.messages);
            if (r[localStorage.localStorageMessId]) {
                var a = r[localStorage.localStorageMessId].contents;
                a.length && a.forEach((function(t, i) {
                    if (t.content == e)
                        return o = t.attachments,
                        messageItemContents = a,
                        messageItemContents.splice(i),
                        localStorage.messages = JSON.stringify(n({}, r)),
                        $(".wrap-chat-message .container-message").html(""),
                        renderMessagesOld(100),
                        !1
                }
                ))
            }
            sendMessageToGemini(t, o, 0)
        }
        ,
        loadIndex()
    }
    ))
}
)();
