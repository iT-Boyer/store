(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [13],
  {
    '+J+N': function (e, t, r) {},
    '/Pgi': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return n;
      });
      var i = r('q1tI');
      function n(e, t) {
        return 'undefined' === typeof window
          ? Object(i['useEffect'])(e, t)
          : Object(i['useLayoutEffect'])(e, t);
      }
    },
    '/xfr': function (e, t, r) {
      'use strict';
      function i(e) {
        return (
          null !== e && 'object' === typeof e && 'constructor' in e && e.constructor === Object
        );
      }
      function n(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach(function (r) {
            'undefined' === typeof e[r]
              ? (e[r] = t[r])
              : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r]);
          });
      }
      r.d(t, 'a', function () {
        return a;
      }),
        r.d(t, 'b', function () {
          return l;
        });
      var s = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: '' },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function a() {
        var e = 'undefined' !== typeof document ? document : {};
        return n(e, s), e;
      }
      var o = {
        document: s,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return '';
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return 'undefined' === typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          'undefined' !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        var e = 'undefined' !== typeof window ? window : {};
        return n(e, o), e;
      }
    },
    '1Cgs': function (e, t, r) {
      'use strict';
      r('ywh3'), r('+J+N');
    },
    AcIj: function (e, t, r) {
      'use strict';
      r('ywh3'), r('D2jH'), r('NV+Z');
    },
    'Ap4+': function (e, t, r) {
      'use strict';
      var i = r('/xfr'),
        n = r('Jq2x'),
        s = r('cKS0');
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      var o = {
        setTranslate: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              r = e.rtlTranslate,
              i = e.progress,
              n = t.dragSize,
              s = t.trackSize,
              a = t.$dragEl,
              o = t.$el,
              l = e.params.scrollbar,
              d = n,
              c = (s - n) * i;
            r
              ? ((c = -c), c > 0 ? ((d = n - c), (c = 0)) : -c + n > s && (d = s + c))
              : c < 0
              ? ((d = n + c), (c = 0))
              : c + n > s && (d = s - c),
              e.isHorizontal()
                ? (a.transform('translate3d(' + c + 'px, 0, 0)'), (a[0].style.width = d + 'px'))
                : (a.transform('translate3d(0px, ' + c + 'px, 0)'), (a[0].style.height = d + 'px')),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(function () {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (e) {
          var t = this;
          t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
        },
        updateSize: function () {
          var e = this;
          if (e.params.scrollbar.el && e.scrollbar.el) {
            var t = e.scrollbar,
              r = t.$dragEl,
              i = t.$el;
            (r[0].style.width = ''), (r[0].style.height = '');
            var n,
              a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              o = e.size / e.virtualSize,
              l = o * (a / e.size);
            (n =
              'auto' === e.params.scrollbar.dragSize
                ? a * o
                : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal() ? (r[0].style.width = n + 'px') : (r[0].style.height = n + 'px'),
              (i[0].style.display = o >= 1 ? 'none' : ''),
              e.params.scrollbar.hide && (i[0].style.opacity = 0),
              Object(s['c'])(t, { trackSize: a, divider: o, moveDivider: l, dragSize: n }),
              t.$el[e.params.watchOverflow && e.isLocked ? 'addClass' : 'removeClass'](
                e.params.scrollbar.lockClass,
              );
          }
        },
        getPointerPosition: function (e) {
          var t = this;
          return t.isHorizontal()
            ? 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition: function (e) {
          var t,
            r = this,
            i = r.scrollbar,
            n = r.rtlTranslate,
            s = i.$el,
            a = i.dragSize,
            o = i.trackSize,
            l = i.dragStartPos;
          (t =
            (i.getPointerPosition(e) -
              s.offset()[r.isHorizontal() ? 'left' : 'top'] -
              (null !== l ? l : a / 2)) /
            (o - a)),
            (t = Math.max(Math.min(t, 1), 0)),
            n && (t = 1 - t);
          var d = r.minTranslate() + (r.maxTranslate() - r.minTranslate()) * t;
          r.updateProgress(d), r.setTranslate(d), r.updateActiveIndex(), r.updateSlidesClasses();
        },
        onDragStart: function (e) {
          var t = this,
            r = t.params.scrollbar,
            i = t.scrollbar,
            n = t.$wrapperEl,
            s = i.$el,
            a = i.$dragEl;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === a[0] || e.target === a
                ? i.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top']
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            n.transition(100),
            a.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            s.transition(0),
            r.hide && s.css('opacity', 1),
            t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
            t.emit('scrollbarDragStart', e);
        },
        onDragMove: function (e) {
          var t = this,
            r = t.scrollbar,
            i = t.$wrapperEl,
            n = r.$el,
            s = r.$dragEl;
          t.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            r.setDragPosition(e),
            i.transition(0),
            n.transition(0),
            s.transition(0),
            t.emit('scrollbarDragMove', e));
        },
        onDragEnd: function (e) {
          var t = this,
            r = t.params.scrollbar,
            i = t.scrollbar,
            n = t.$wrapperEl,
            a = i.$el;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode && (t.$wrapperEl.css('scroll-snap-type', ''), n.transition('')),
            r.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = Object(s['e'])(function () {
                a.css('opacity', 0), a.transition(400);
              }, 1e3))),
            t.emit('scrollbarDragEnd', e),
            r.snapOnRelease && t.slideToClosest());
        },
        enableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = Object(i['a'])(),
              r = e.scrollbar,
              n = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = r.$el,
              d = l[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              u = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            o.touch
              ? (d.addEventListener(n.start, e.scrollbar.onDragStart, c),
                d.addEventListener(n.move, e.scrollbar.onDragMove, c),
                d.addEventListener(n.end, e.scrollbar.onDragEnd, u))
              : (d.addEventListener(s.start, e.scrollbar.onDragStart, c),
                t.addEventListener(s.move, e.scrollbar.onDragMove, c),
                t.addEventListener(s.end, e.scrollbar.onDragEnd, u));
          }
        },
        disableDraggable: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = Object(i['a'])(),
              r = e.scrollbar,
              n = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              a = e.params,
              o = e.support,
              l = r.$el,
              d = l[0],
              c = !(!o.passiveListener || !a.passiveListeners) && { passive: !1, capture: !1 },
              u = !(!o.passiveListener || !a.passiveListeners) && { passive: !0, capture: !1 };
            o.touch
              ? (d.removeEventListener(n.start, e.scrollbar.onDragStart, c),
                d.removeEventListener(n.move, e.scrollbar.onDragMove, c),
                d.removeEventListener(n.end, e.scrollbar.onDragEnd, u))
              : (d.removeEventListener(s.start, e.scrollbar.onDragStart, c),
                t.removeEventListener(s.move, e.scrollbar.onDragMove, c),
                t.removeEventListener(s.end, e.scrollbar.onDragEnd, u));
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var t = e.scrollbar,
              r = e.$el,
              i = e.params.scrollbar,
              a = Object(n['a'])(i.el);
            e.params.uniqueNavElements &&
              'string' === typeof i.el &&
              a.length > 1 &&
              1 === r.find(i.el).length &&
              (a = r.find(i.el));
            var o = a.find('.' + e.params.scrollbar.dragClass);
            0 === o.length &&
              ((o = Object(n['a'])('<div class="' + e.params.scrollbar.dragClass + '"></div>')),
              a.append(o)),
              Object(s['c'])(t, { $el: a, el: a[0], $dragEl: o, dragEl: o[0] }),
              i.draggable && t.enableDraggable();
          }
        },
        destroy: function () {
          var e = this;
          e.scrollbar.disableDraggable();
        },
      };
      t['a'] = {
        name: 'scrollbar',
        params: {
          scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
          },
        },
        create: function () {
          var e = this;
          Object(s['a'])(e, {
            scrollbar: a({ isTouched: !1, timeout: null, dragTimeout: null }, o),
          });
        },
        on: {
          init: function (e) {
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
          },
          update: function (e) {
            e.scrollbar.updateSize();
          },
          resize: function (e) {
            e.scrollbar.updateSize();
          },
          observerUpdate: function (e) {
            e.scrollbar.updateSize();
          },
          setTranslate: function (e) {
            e.scrollbar.setTranslate();
          },
          setTransition: function (e, t) {
            e.scrollbar.setTransition(t);
          },
          destroy: function (e) {
            e.scrollbar.destroy();
          },
        },
      };
    },
    'J/SH': function (e, t, r) {},
    Jq2x: function (e, t, r) {
      'use strict';
      var i = r('/xfr');
      function n(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function s(e) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          s(e)
        );
      }
      function a(e, t) {
        return (
          (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          a(e, t)
        );
      }
      function o() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function l(e, t, r) {
        return (
          (l = o()
            ? Reflect.construct
            : function (e, t, r) {
                var i = [null];
                i.push.apply(i, t);
                var n = Function.bind.apply(e, i),
                  s = new n();
                return r && a(s, r.prototype), s;
              }),
          l.apply(null, arguments)
        );
      }
      function d(e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      }
      function c(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (
          (c = function (e) {
            if (null === e || !d(e)) return e;
            if ('function' !== typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return l(e, arguments, s(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
              })),
              a(r, e)
            );
          }),
          c(e)
        );
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function p(e) {
        var t = e.__proto__;
        Object.defineProperty(e, '__proto__', {
          get: function () {
            return t;
          },
          set: function (e) {
            t.__proto__ = e;
          },
        });
      }
      var f = (function (e) {
        function t(t) {
          var r;
          return (r = e.call.apply(e, [this].concat(t)) || this), p(u(r)), r;
        }
        return n(t, e), t;
      })(c(Array));
      function v(e) {
        void 0 === e && (e = []);
        var t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
          }),
          t
        );
      }
      function h(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function m(e) {
        for (var t = [], r = 0; r < e.length; r += 1) -1 === t.indexOf(e[r]) && t.push(e[r]);
        return t;
      }
      function g(e, t) {
        if ('string' !== typeof e) return [e];
        for (var r = [], i = t.querySelectorAll(e), n = 0; n < i.length; n += 1) r.push(i[n]);
        return r;
      }
      function b(e, t) {
        var r = Object(i['b'])(),
          n = Object(i['a'])(),
          s = [];
        if (!t && e instanceof f) return e;
        if (!e) return new f(s);
        if ('string' === typeof e) {
          var a = e.trim();
          if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
            var o = 'div';
            0 === a.indexOf('<li') && (o = 'ul'),
              0 === a.indexOf('<tr') && (o = 'tbody'),
              (0 !== a.indexOf('<td') && 0 !== a.indexOf('<th')) || (o = 'tr'),
              0 === a.indexOf('<tbody') && (o = 'table'),
              0 === a.indexOf('<option') && (o = 'select');
            var l = n.createElement(o);
            l.innerHTML = a;
            for (var d = 0; d < l.childNodes.length; d += 1) s.push(l.childNodes[d]);
          } else s = g(e.trim(), t || n);
        } else if (e.nodeType || e === r || e === n) s.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof f) return e;
          s = e;
        }
        return new f(m(s));
      }
      function w() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).add.apply(t, i);
          }),
          this
        );
      }
      function y() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          this.forEach(function (e) {
            var t;
            (t = e.classList).remove.apply(t, i);
          }),
          this
        );
      }
      function T() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      }
      function S() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = v(
          t.map(function (e) {
            return e.split(' ');
          }),
        );
        return (
          h(this, function (e) {
            return (
              i.filter(function (t) {
                return e.classList.contains(t);
              }).length > 0
            );
          }).length > 0
        );
      }
      function E(e, t) {
        if (1 === arguments.length && 'string' === typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (var r = 0; r < this.length; r += 1)
          if (2 === arguments.length) this[r].setAttribute(e, t);
          else for (var i in e) (this[r][i] = e[i]), this[r].setAttribute(i, e[i]);
        return this;
      }
      function C(e) {
        for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      }
      function x(e) {
        for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      }
      function O(e) {
        for (var t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration = 'string' !== typeof e ? e + 'ms' : e;
        return this;
      }
      function P() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        function o(e) {
          var t = e.target;
          if (t) {
            var r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), b(t).is(n))) s.apply(t, r);
            else
              for (var i = b(t).parents(), a = 0; a < i.length; a += 1)
                b(i[a]).is(n) && s.apply(i[a], r);
          }
        }
        function l(e) {
          var t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        'function' === typeof t[1] && ((i = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var d, c = i.split(' '), u = 0; u < this.length; u += 1) {
          var p = this[u];
          if (n)
            for (d = 0; d < c.length; d += 1) {
              var f = c[d];
              p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []),
                p.dom7LiveListeners[f].push({ listener: s, proxyListener: o }),
                p.addEventListener(f, o, a);
            }
          else
            for (d = 0; d < c.length; d += 1) {
              var v = c[d];
              p.dom7Listeners || (p.dom7Listeners = {}),
                p.dom7Listeners[v] || (p.dom7Listeners[v] = []),
                p.dom7Listeners[v].push({ listener: s, proxyListener: l }),
                p.addEventListener(v, l, a);
            }
        }
        return this;
      }
      function M() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var i = t[0],
          n = t[1],
          s = t[2],
          a = t[3];
        'function' === typeof t[1] && ((i = t[0]), (s = t[1]), (a = t[2]), (n = void 0)),
          a || (a = !1);
        for (var o = i.split(' '), l = 0; l < o.length; l += 1)
          for (var d = o[l], c = 0; c < this.length; c += 1) {
            var u = this[c],
              p = void 0;
            if (
              (!n && u.dom7Listeners
                ? (p = u.dom7Listeners[d])
                : n && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]),
              p && p.length)
            )
              for (var f = p.length - 1; f >= 0; f -= 1) {
                var v = p[f];
                (s && v.listener === s) ||
                (s && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === s)
                  ? (u.removeEventListener(d, v.proxyListener, a), p.splice(f, 1))
                  : s || (u.removeEventListener(d, v.proxyListener, a), p.splice(f, 1));
              }
          }
        return this;
      }
      function k() {
        for (var e = Object(i['b'])(), t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        for (var s = r[0].split(' '), a = r[1], o = 0; o < s.length; o += 1)
          for (var l = s[o], d = 0; d < this.length; d += 1) {
            var c = this[d];
            if (e.CustomEvent) {
              var u = new e.CustomEvent(l, { detail: a, bubbles: !0, cancelable: !0 });
              (c.dom7EventData = r.filter(function (e, t) {
                return t > 0;
              })),
                c.dispatchEvent(u),
                (c.dom7EventData = []),
                delete c.dom7EventData;
            }
          }
        return this;
      }
      function j(e) {
        var t = this;
        function r(i) {
          i.target === this && (e.call(this, i), t.off('transitionend', r));
        }
        return e && t.on('transitionend', r), this;
      }
      function L(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(t.getPropertyValue('margin-right')) +
              parseFloat(t.getPropertyValue('margin-left'))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      }
      function z(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(t.getPropertyValue('margin-top')) +
              parseFloat(t.getPropertyValue('margin-bottom'))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      }
      function _() {
        if (this.length > 0) {
          var e = Object(i['b'])(),
            t = Object(i['a'])(),
            r = this[0],
            n = r.getBoundingClientRect(),
            s = t.body,
            a = r.clientTop || s.clientTop || 0,
            o = r.clientLeft || s.clientLeft || 0,
            l = r === e ? e.scrollY : r.scrollTop,
            d = r === e ? e.scrollX : r.scrollLeft;
          return { top: n.top + l - a, left: n.left + d - o };
        }
        return null;
      }
      function D() {
        var e = Object(i['b'])();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      }
      function A(e, t) {
        var r,
          n = Object(i['b'])();
        if (1 === arguments.length) {
          if ('string' !== typeof e) {
            for (r = 0; r < this.length; r += 1) for (var s in e) this[r].style[s] = e[s];
            return this;
          }
          if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && 'string' === typeof e) {
          for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
          return this;
        }
        return this;
      }
      function N(e) {
        return e
          ? (this.forEach(function (t, r) {
              e.apply(t, [t, r]);
            }),
            this)
          : this;
      }
      function I(e) {
        var t = h(this, e);
        return b(t);
      }
      function G(e) {
        if ('undefined' === typeof e) return this[0] ? this[0].innerHTML : null;
        for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      }
      function B(e) {
        if ('undefined' === typeof e) return this[0] ? this[0].textContent.trim() : null;
        for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      }
      function V(e) {
        var t,
          r,
          n = Object(i['b'])(),
          s = Object(i['a'])(),
          a = this[0];
        if (!a || 'undefined' === typeof e) return !1;
        if ('string' === typeof e) {
          if (a.matches) return a.matches(e);
          if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
          if (a.msMatchesSelector) return a.msMatchesSelector(e);
          for (t = b(e), r = 0; r < t.length; r += 1) if (t[r] === a) return !0;
          return !1;
        }
        if (e === s) return a === s;
        if (e === n) return a === n;
        if (e.nodeType || e instanceof f) {
          for (t = e.nodeType ? [e] : e, r = 0; r < t.length; r += 1) if (t[r] === a) return !0;
          return !1;
        }
        return !1;
      }
      function H() {
        var e,
          t = this[0];
        if (t) {
          e = 0;
          while (null !== (t = t.previousSibling)) 1 === t.nodeType && (e += 1);
          return e;
        }
      }
      function R(e) {
        if ('undefined' === typeof e) return this;
        var t = this.length;
        if (e > t - 1) return b([]);
        if (e < 0) {
          var r = t + e;
          return b(r < 0 ? [] : [this[r]]);
        }
        return b([this[e]]);
      }
      function W() {
        for (var e, t = Object(i['a'])(), r = 0; r < arguments.length; r += 1) {
          e = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          for (var n = 0; n < this.length; n += 1)
            if ('string' === typeof e) {
              var s = t.createElement('div');
              s.innerHTML = e;
              while (s.firstChild) this[n].appendChild(s.firstChild);
            } else if (e instanceof f)
              for (var a = 0; a < e.length; a += 1) this[n].appendChild(e[a]);
            else this[n].appendChild(e);
        }
        return this;
      }
      function $(e) {
        var t,
          r,
          n = Object(i['a'])();
        for (t = 0; t < this.length; t += 1)
          if ('string' === typeof e) {
            var s = n.createElement('div');
            for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1)
              this[t].insertBefore(s.childNodes[r], this[t].childNodes[0]);
          } else if (e instanceof f)
            for (r = 0; r < e.length; r += 1) this[t].insertBefore(e[r], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      }
      function F(e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && b(this[0].nextElementSibling).is(e)
              ? b([this[0].nextElementSibling])
              : b([])
            : this[0].nextElementSibling
            ? b([this[0].nextElementSibling])
            : b([])
          : b([]);
      }
      function q(e) {
        var t = [],
          r = this[0];
        if (!r) return b([]);
        while (r.nextElementSibling) {
          var i = r.nextElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
        }
        return b(t);
      }
      function Y(e) {
        if (this.length > 0) {
          var t = this[0];
          return e
            ? t.previousElementSibling && b(t.previousElementSibling).is(e)
              ? b([t.previousElementSibling])
              : b([])
            : t.previousElementSibling
            ? b([t.previousElementSibling])
            : b([]);
        }
        return b([]);
      }
      function X(e) {
        var t = [],
          r = this[0];
        if (!r) return b([]);
        while (r.previousElementSibling) {
          var i = r.previousElementSibling;
          e ? b(i).is(e) && t.push(i) : t.push(i), (r = i);
        }
        return b(t);
      }
      function U(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          null !== this[r].parentNode &&
            (e
              ? b(this[r].parentNode).is(e) && t.push(this[r].parentNode)
              : t.push(this[r].parentNode));
        return b(t);
      }
      function J(e) {
        for (var t = [], r = 0; r < this.length; r += 1) {
          var i = this[r].parentNode;
          while (i) e ? b(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return b(t);
      }
      function K(e) {
        var t = this;
        return 'undefined' === typeof e ? b([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      }
      function Z(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          for (var i = this[r].querySelectorAll(e), n = 0; n < i.length; n += 1) t.push(i[n]);
        return b(t);
      }
      function Q(e) {
        for (var t = [], r = 0; r < this.length; r += 1)
          for (var i = this[r].children, n = 0; n < i.length; n += 1)
            (e && !b(i[n]).is(e)) || t.push(i[n]);
        return b(t);
      }
      function ee() {
        for (var e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      }
      b.fn = f.prototype;
      var te = 'resize scroll'.split(' ');
      function re(e) {
        function t() {
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
          if ('undefined' === typeof r[0]) {
            for (var n = 0; n < this.length; n += 1)
              te.indexOf(e) < 0 && (e in this[n] ? this[n][e]() : b(this[n]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(r));
        }
        return t;
      }
      re('click'),
        re('blur'),
        re('focus'),
        re('focusin'),
        re('focusout'),
        re('keyup'),
        re('keydown'),
        re('keypress'),
        re('submit'),
        re('change'),
        re('mousedown'),
        re('mousemove'),
        re('mouseup'),
        re('mouseenter'),
        re('mouseleave'),
        re('mouseout'),
        re('mouseover'),
        re('touchstart'),
        re('touchend'),
        re('touchmove'),
        re('resize'),
        re('scroll');
      var ie = {
        addClass: w,
        removeClass: y,
        hasClass: S,
        toggleClass: T,
        attr: E,
        removeAttr: C,
        transform: x,
        transition: O,
        on: P,
        off: M,
        trigger: k,
        transitionEnd: j,
        outerWidth: L,
        outerHeight: z,
        styles: D,
        offset: _,
        css: A,
        each: N,
        html: G,
        text: B,
        is: V,
        index: H,
        eq: R,
        append: W,
        prepend: $,
        next: F,
        nextAll: q,
        prev: Y,
        prevAll: X,
        parent: U,
        parents: J,
        closest: K,
        find: Z,
        children: Q,
        filter: I,
        remove: ee,
      };
      Object.keys(ie).forEach(function (e) {
        b.fn[e] = ie[e];
      });
      t['a'] = b;
    },
    'NV+Z': function (e, t, r) {},
    Ndxo: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return d;
      });
      var i = r('q1tI'),
        n = r.n(i),
        s = r('tu8O'),
        a = r('/Pgi');
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) (r = s[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      var d = Object(i['forwardRef'])(function (e, t) {
        var r,
          d = void 0 === e ? {} : e,
          c = d.tag,
          u = void 0 === c ? 'div' : c,
          p = d.children,
          f = d.className,
          v = void 0 === f ? '' : f,
          h = d.swiper,
          m = d.zoom,
          g = d.virtualIndex,
          b = l(d, ['tag', 'children', 'className', 'swiper', 'zoom', 'virtualIndex']),
          w = Object(i['useRef'])(null),
          y = Object(i['useState'])('swiper-slide'),
          T = y[0],
          S = y[1];
        function E(e, t, r) {
          t === w.current && S(r);
        }
        Object(a['a'])(function () {
          if ((t && (t.current = w.current), w.current && h)) {
            if (!h.destroyed)
              return (
                h.on('_slideClass', E),
                function () {
                  h && h.off('_slideClass', E);
                }
              );
            'swiper-slide' !== T && S('swiper-slide');
          }
        }),
          Object(a['a'])(
            function () {
              h && w.current && S(h.getSlideClasses(w.current));
            },
            [h],
          ),
          'function' === typeof p &&
            (r = {
              isActive:
                T.indexOf('swiper-slide-active') >= 0 ||
                T.indexOf('swiper-slide-duplicate-active') >= 0,
              isVisible: T.indexOf('swiper-slide-visible') >= 0,
              isDuplicate: T.indexOf('swiper-slide-duplicate') >= 0,
              isPrev:
                T.indexOf('swiper-slide-prev') >= 0 ||
                T.indexOf('swiper-slide-duplicate-prev') >= 0,
              isNext:
                T.indexOf('swiper-slide-next') >= 0 ||
                T.indexOf('swiper-slide-duplicate-next') >= 0,
            });
        var C = function () {
          return 'function' === typeof p ? p(r) : p;
        };
        return n.a.createElement(
          u,
          o(
            {
              ref: w,
              className: Object(s['f'])(T + (v ? ' ' + v : '')),
              'data-swiper-slide-index': g,
            },
            b,
          ),
          m
            ? n.a.createElement(
                'div',
                {
                  className: 'swiper-zoom-container',
                  'data-swiper-zoom': 'number' === typeof m ? m : void 0,
                },
                C(),
              )
            : C(),
        );
      });
      d.displayName = 'SwiperSlide';
    },
    Vz9s: function (e, t, r) {
      'use strict';
      var i = r('QbLZ'),
        n = r.n(i),
        s = r('iCc5'),
        a = r.n(s),
        o = r('V7oC'),
        l = r.n(o),
        d = r('FYw3'),
        c = r.n(d),
        u = r('mRg0'),
        p = r.n(u),
        f = r('TSYQ'),
        v = r.n(f),
        h = r('q1tI'),
        m = r('2ROE'),
        g = r('i8i4'),
        b = (function (e) {
          function t() {
            a()(this, t);
            var e = c()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (e.state = { animatedWidth: 0, overflowWidth: 0 }), e;
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._measureText(), this._startAnimation();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._measureText(), this._marqueeTimer || this._startAnimation();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._marqueeTimer);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.prefixCls,
                    i = t.className,
                    s = t.text,
                    a = n()(
                      {
                        position: 'relative',
                        right: this.state.animatedWidth,
                        whiteSpace: 'nowrap',
                        display: 'inline-block',
                      },
                      this.props.style,
                    );
                  return h['createElement'](
                    'div',
                    {
                      className: r + '-marquee-wrap ' + i,
                      style: { overflow: 'hidden' },
                      role: 'marquee',
                    },
                    h['createElement'](
                      'div',
                      {
                        ref: function (t) {
                          return (e.textRef = t);
                        },
                        className: r + '-marquee',
                        style: a,
                      },
                      s,
                    ),
                  );
                },
              },
              {
                key: '_startAnimation',
                value: function () {
                  var e = this;
                  this._marqueeTimer && window.clearTimeout(this._marqueeTimer);
                  var t = this.props.fps,
                    r = (1 / t) * 1e3,
                    i = 0 === this.state.animatedWidth,
                    n = i ? this.props.leading : r,
                    s = function t() {
                      var i = e.state.overflowWidth,
                        n = e.state.animatedWidth + 1,
                        s = n > i;
                      if (s) {
                        if (!e.props.loop) return;
                        n = 0;
                      }
                      s && e.props.trailing
                        ? (e._marqueeTimer = window.setTimeout(function () {
                            e.setState({ animatedWidth: n }),
                              (e._marqueeTimer = window.setTimeout(t, r));
                          }, e.props.trailing))
                        : (e.setState({ animatedWidth: n }),
                          (e._marqueeTimer = window.setTimeout(t, r)));
                    };
                  0 !== this.state.overflowWidth && (this._marqueeTimer = window.setTimeout(s, n));
                },
              },
              {
                key: '_measureText',
                value: function () {
                  var e = g['findDOMNode'](this),
                    t = this.textRef;
                  if (e && t) {
                    var r = e.offsetWidth,
                      i = t.offsetWidth,
                      n = i - r;
                    n !== this.state.overflowWidth && this.setState({ overflowWidth: n });
                  }
                },
              },
            ]),
            t
          );
        })(h['Component']),
        w = b;
      b.defaultProps = { text: '', loop: !1, leading: 500, trailing: 800, fps: 40, className: '' };
      var y = function (e, t) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 && (r[i[n]] = e[i[n]]);
          }
          return r;
        },
        T = (function (e) {
          function t(e) {
            a()(this, t);
            var r = c()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (r.onClick = function () {
                var e = r.props,
                  t = e.mode,
                  i = e.onClick;
                i && i(), 'closable' === t && r.setState({ show: !1 });
              }),
              (r.state = { show: !0 }),
              r
            );
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mode,
                    r = e.icon,
                    i = e.onClick,
                    s = e.children,
                    a = e.className,
                    o = e.prefixCls,
                    l = e.action,
                    d = e.marqueeProps,
                    c = y(e, [
                      'mode',
                      'icon',
                      'onClick',
                      'children',
                      'className',
                      'prefixCls',
                      'action',
                      'marqueeProps',
                    ]),
                    u = {},
                    p = null;
                  'closable' === t
                    ? (p = h['createElement'](
                        'div',
                        {
                          className: o + '-operation',
                          onClick: this.onClick,
                          role: 'button',
                          'aria-label': 'close',
                        },
                        l || h['createElement'](m['a'], { type: 'cross', size: 'md' }),
                      ))
                    : ('link' === t &&
                        (p = h['createElement'](
                          'div',
                          {
                            className: o + '-operation',
                            role: 'button',
                            'aria-label': 'go to detail',
                          },
                          l || h['createElement'](m['a'], { type: 'right', size: 'md' }),
                        )),
                      (u.onClick = i));
                  var f = v()(o, a);
                  return this.state.show
                    ? h['createElement'](
                        'div',
                        n()({ className: f }, c, u, { role: 'alert' }),
                        r &&
                          h['createElement'](
                            'div',
                            { className: o + '-icon', 'aria-hidden': 'true' },
                            r,
                          ),
                        h['createElement'](
                          'div',
                          { className: o + '-content' },
                          h['createElement'](w, n()({ prefixCls: o, text: s }, d)),
                        ),
                        p,
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(h['Component']);
      t['a'] = T;
      T.defaultProps = {
        prefixCls: 'am-notice-bar',
        mode: '',
        icon: h['createElement'](m['a'], { type: 'voice', size: 'xxs' }),
        onClick: function () {},
      };
    },
    bTu8: function (e, t, r) {
      'use strict';
      var i,
        n,
        s,
        a = r('Jq2x'),
        o = r('cKS0'),
        l = r('/xfr');
      function d() {
        var e = Object(l['b'])(),
          t = Object(l['a'])();
        return {
          touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
          pointerEvents:
            !!e.PointerEvent && 'maxTouchPoints' in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: (function () {
            return 'MutationObserver' in e || 'WebkitMutationObserver' in e;
          })(),
          passiveListener: (function () {
            var t = !1;
            try {
              var r = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                },
              });
              e.addEventListener('testPassiveListener', null, r);
            } catch (i) {}
            return t;
          })(),
          gestures: (function () {
            return 'ongesturestart' in e;
          })(),
        };
      }
      function c() {
        return i || (i = d()), i;
      }
      function u(e) {
        var t = void 0 === e ? {} : e,
          r = t.userAgent,
          i = c(),
          n = Object(l['b'])(),
          s = n.navigator.platform,
          a = r || n.navigator.userAgent,
          o = { ios: !1, android: !1 },
          d = n.screen.width,
          u = n.screen.height,
          p = a.match(/(Android);?[\s\/]+([\d.]+)?/),
          f = a.match(/(iPad).*OS\s([\d_]+)/),
          v = a.match(/(iPod)(.*OS\s([\d_]+))?/),
          h = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          m = 'Win32' === s,
          g = 'MacIntel' === s,
          b = [
            '1024x1366',
            '1366x1024',
            '834x1194',
            '1194x834',
            '834x1112',
            '1112x834',
            '768x1024',
            '1024x768',
            '820x1180',
            '1180x820',
            '810x1080',
            '1080x810',
          ];
        return (
          !f &&
            g &&
            i.touch &&
            b.indexOf(d + 'x' + u) >= 0 &&
            ((f = a.match(/(Version)\/([\d.]+)/)), f || (f = [0, 1, '13_0_0']), (g = !1)),
          p && !m && ((o.os = 'android'), (o.android = !0)),
          (f || h || v) && ((o.os = 'ios'), (o.ios = !0)),
          o
        );
      }
      function p(e) {
        return void 0 === e && (e = {}), n || (n = u(e)), n;
      }
      function f() {
        var e = Object(l['b'])();
        function t() {
          var t = e.navigator.userAgent.toLowerCase();
          return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
        }
        return {
          isEdge: !!e.navigator.userAgent.match(/Edge/g),
          isSafari: t(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        };
      }
      function v() {
        return s || (s = f()), s;
      }
      var h = {
        name: 'resize',
        create: function () {
          var e = this;
          Object(o['c'])(e, {
            resize: {
              resizeHandler: function () {
                e && !e.destroyed && e.initialized && (e.emit('beforeResize'), e.emit('resize'));
              },
              orientationChangeHandler: function () {
                e && !e.destroyed && e.initialized && e.emit('orientationchange');
              },
            },
          });
        },
        on: {
          init: function (e) {
            var t = Object(l['b'])();
            t.addEventListener('resize', e.resize.resizeHandler),
              t.addEventListener('orientationchange', e.resize.orientationChangeHandler);
          },
          destroy: function (e) {
            var t = Object(l['b'])();
            t.removeEventListener('resize', e.resize.resizeHandler),
              t.removeEventListener('orientationchange', e.resize.orientationChangeHandler);
          },
        },
      };
      function m() {
        return (
          (m =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          m.apply(this, arguments)
        );
      }
      var g = {
          attach: function (e, t) {
            void 0 === t && (t = {});
            var r = Object(l['b'])(),
              i = this,
              n = r.MutationObserver || r.WebkitMutationObserver,
              s = new n(function (e) {
                if (1 !== e.length) {
                  var t = function () {
                    i.emit('observerUpdate', e[0]);
                  };
                  r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0);
                } else i.emit('observerUpdate', e[0]);
              });
            s.observe(e, {
              attributes: 'undefined' === typeof t.attributes || t.attributes,
              childList: 'undefined' === typeof t.childList || t.childList,
              characterData: 'undefined' === typeof t.characterData || t.characterData,
            }),
              i.observer.observers.push(s);
          },
          init: function () {
            var e = this;
            if (e.support.observer && e.params.observer) {
              if (e.params.observeParents)
                for (var t = e.$el.parents(), r = 0; r < t.length; r += 1) e.observer.attach(t[r]);
              e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy: function () {
            var e = this;
            e.observer.observers.forEach(function (e) {
              e.disconnect();
            }),
              (e.observer.observers = []);
          },
        },
        b = {
          name: 'observer',
          params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
          create: function () {
            var e = this;
            Object(o['a'])(e, { observer: m({}, g, { observers: [] }) });
          },
          on: {
            init: function (e) {
              e.observer.init();
            },
            destroy: function (e) {
              e.observer.destroy();
            },
          },
        },
        w = {
          useParams: function (e) {
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (r) {
                var i = t.modules[r];
                i.params && Object(o['c'])(e, i.params);
              });
          },
          useModules: function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
              Object.keys(t.modules).forEach(function (r) {
                var i = t.modules[r],
                  n = e[r] || {};
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach(function (e) {
                    t.on(e, i.on[e]);
                  }),
                  i.create && i.create.bind(t)(n);
              });
          },
        },
        y = {
          on: function (e, t, r) {
            var i = this;
            if ('function' !== typeof t) return i;
            var n = r ? 'unshift' : 'push';
            return (
              e.split(' ').forEach(function (e) {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t);
              }),
              i
            );
          },
          once: function (e, t, r) {
            var i = this;
            if ('function' !== typeof t) return i;
            function n() {
              i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++)
                s[a] = arguments[a];
              t.apply(i, s);
            }
            return (n.__emitterProxy = t), i.on(e, n, r);
          },
          onAny: function (e, t) {
            var r = this;
            if ('function' !== typeof e) return r;
            var i = t ? 'unshift' : 'push';
            return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r;
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var r = t.eventsAnyListeners.indexOf(e);
            return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
          },
          off: function (e, t) {
            var r = this;
            return r.eventsListeners
              ? (e.split(' ').forEach(function (e) {
                  'undefined' === typeof t
                    ? (r.eventsListeners[e] = [])
                    : r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach(function (i, n) {
                        (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                          r.eventsListeners[e].splice(n, 1);
                      });
                }),
                r)
              : r;
          },
          emit: function () {
            var e,
              t,
              r,
              i = this;
            if (!i.eventsListeners) return i;
            for (var n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
            'string' === typeof s[0] || Array.isArray(s[0])
              ? ((e = s[0]), (t = s.slice(1, s.length)), (r = i))
              : ((e = s[0].events), (t = s[0].data), (r = s[0].context || i)),
              t.unshift(r);
            var o = Array.isArray(e) ? e : e.split(' ');
            return (
              o.forEach(function (e) {
                i.eventsAnyListeners &&
                  i.eventsAnyListeners.length &&
                  i.eventsAnyListeners.forEach(function (i) {
                    i.apply(r, [e].concat(t));
                  }),
                  i.eventsListeners &&
                    i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach(function (e) {
                      e.apply(r, t);
                    });
              }),
              i
            );
          },
        };
      function T() {
        var e,
          t,
          r = this,
          i = r.$el;
        (e =
          'undefined' !== typeof r.params.width && null !== r.params.width
            ? r.params.width
            : i[0].clientWidth),
          (t =
            'undefined' !== typeof r.params.height && null !== r.params.height
              ? r.params.height
              : i[0].clientHeight),
          (0 === e && r.isHorizontal()) ||
            (0 === t && r.isVertical()) ||
            ((e =
              e -
              parseInt(i.css('padding-left') || 0, 10) -
              parseInt(i.css('padding-right') || 0, 10)),
            (t =
              t -
              parseInt(i.css('padding-top') || 0, 10) -
              parseInt(i.css('padding-bottom') || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            Object(o['c'])(r, { width: e, height: t, size: r.isHorizontal() ? e : t }));
      }
      function S() {
        var e = this,
          t = Object(l['b'])(),
          r = e.params,
          i = e.$wrapperEl,
          n = e.size,
          s = e.rtlTranslate,
          a = e.wrongRTL,
          d = e.virtual && r.virtual.enabled,
          c = d ? e.virtual.slides.length : e.slides.length,
          u = i.children('.' + e.params.slideClass),
          p = d ? e.virtual.slides.length : u.length,
          f = [],
          v = [],
          h = [];
        function m(e, t) {
          return !r.cssMode || t !== u.length - 1;
        }
        var g = r.slidesOffsetBefore;
        'function' === typeof g && (g = r.slidesOffsetBefore.call(e));
        var b = r.slidesOffsetAfter;
        'function' === typeof b && (b = r.slidesOffsetAfter.call(e));
        var w = e.snapGrid.length,
          y = e.slidesGrid.length,
          T = r.spaceBetween,
          S = -g,
          E = 0,
          C = 0;
        if ('undefined' !== typeof n) {
          var x, O;
          'string' === typeof T &&
            T.indexOf('%') >= 0 &&
            (T = (parseFloat(T.replace('%', '')) / 100) * n),
            (e.virtualSize = -T),
            s
              ? u.css({ marginLeft: '', marginTop: '' })
              : u.css({ marginRight: '', marginBottom: '' }),
            r.slidesPerColumn > 1 &&
              ((x =
                Math.floor(p / r.slidesPerColumn) === p / e.params.slidesPerColumn
                  ? p
                  : Math.ceil(p / r.slidesPerColumn) * r.slidesPerColumn),
              'auto' !== r.slidesPerView &&
                'row' === r.slidesPerColumnFill &&
                (x = Math.max(x, r.slidesPerView * r.slidesPerColumn)));
          for (
            var P, M = r.slidesPerColumn, k = x / M, j = Math.floor(p / r.slidesPerColumn), L = 0;
            L < p;
            L += 1
          ) {
            O = 0;
            var z = u.eq(L);
            if (r.slidesPerColumn > 1) {
              var _ = void 0,
                D = void 0,
                A = void 0;
              if ('row' === r.slidesPerColumnFill && r.slidesPerGroup > 1) {
                var N = Math.floor(L / (r.slidesPerGroup * r.slidesPerColumn)),
                  I = L - r.slidesPerColumn * r.slidesPerGroup * N,
                  G =
                    0 === N
                      ? r.slidesPerGroup
                      : Math.min(Math.ceil((p - N * M * r.slidesPerGroup) / M), r.slidesPerGroup);
                (A = Math.floor(I / G)),
                  (D = I - A * G + N * r.slidesPerGroup),
                  (_ = D + (A * x) / M),
                  z.css({
                    '-webkit-box-ordinal-group': _,
                    '-moz-box-ordinal-group': _,
                    '-ms-flex-order': _,
                    '-webkit-order': _,
                    order: _,
                  });
              } else
                'column' === r.slidesPerColumnFill
                  ? ((D = Math.floor(L / M)),
                    (A = L - D * M),
                    (D > j || (D === j && A === M - 1)) &&
                      ((A += 1), A >= M && ((A = 0), (D += 1))))
                  : ((A = Math.floor(L / k)), (D = L - A * k));
              z.css(
                'margin-' + (e.isHorizontal() ? 'top' : 'left'),
                0 !== A && r.spaceBetween && r.spaceBetween + 'px',
              );
            }
            if ('none' !== z.css('display')) {
              if ('auto' === r.slidesPerView) {
                var B = t.getComputedStyle(z[0], null),
                  V = z[0].style.transform,
                  H = z[0].style.webkitTransform;
                if (
                  (V && (z[0].style.transform = 'none'),
                  H && (z[0].style.webkitTransform = 'none'),
                  r.roundLengths)
                )
                  O = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0);
                else if (e.isHorizontal()) {
                  var R = parseFloat(B.getPropertyValue('width') || 0),
                    W = parseFloat(B.getPropertyValue('padding-left') || 0),
                    $ = parseFloat(B.getPropertyValue('padding-right') || 0),
                    F = parseFloat(B.getPropertyValue('margin-left') || 0),
                    q = parseFloat(B.getPropertyValue('margin-right') || 0),
                    Y = B.getPropertyValue('box-sizing');
                  if (Y && 'border-box' === Y) O = R + F + q;
                  else {
                    var X = z[0],
                      U = X.clientWidth,
                      J = X.offsetWidth;
                    O = R + W + $ + F + q + (J - U);
                  }
                } else {
                  var K = parseFloat(B.getPropertyValue('height') || 0),
                    Z = parseFloat(B.getPropertyValue('padding-top') || 0),
                    Q = parseFloat(B.getPropertyValue('padding-bottom') || 0),
                    ee = parseFloat(B.getPropertyValue('margin-top') || 0),
                    te = parseFloat(B.getPropertyValue('margin-bottom') || 0),
                    re = B.getPropertyValue('box-sizing');
                  if (re && 'border-box' === re) O = K + ee + te;
                  else {
                    var ie = z[0],
                      ne = ie.clientHeight,
                      se = ie.offsetHeight;
                    O = K + Z + Q + ee + te + (se - ne);
                  }
                }
                V && (z[0].style.transform = V),
                  H && (z[0].style.webkitTransform = H),
                  r.roundLengths && (O = Math.floor(O));
              } else
                (O = (n - (r.slidesPerView - 1) * T) / r.slidesPerView),
                  r.roundLengths && (O = Math.floor(O)),
                  u[L] &&
                    (e.isHorizontal()
                      ? (u[L].style.width = O + 'px')
                      : (u[L].style.height = O + 'px'));
              u[L] && (u[L].swiperSlideSize = O),
                h.push(O),
                r.centeredSlides
                  ? ((S = S + O / 2 + E / 2 + T),
                    0 === E && 0 !== L && (S = S - n / 2 - T),
                    0 === L && (S = S - n / 2 - T),
                    Math.abs(S) < 0.001 && (S = 0),
                    r.roundLengths && (S = Math.floor(S)),
                    C % r.slidesPerGroup === 0 && f.push(S),
                    v.push(S))
                  : (r.roundLengths && (S = Math.floor(S)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup ===
                      0 && f.push(S),
                    v.push(S),
                    (S = S + O + T)),
                (e.virtualSize += O + T),
                (E = O),
                (C += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, n) + b),
            s &&
              a &&
              ('slide' === r.effect || 'coverflow' === r.effect) &&
              i.css({ width: e.virtualSize + r.spaceBetween + 'px' }),
            r.setWrapperSize &&
              (e.isHorizontal()
                ? i.css({ width: e.virtualSize + r.spaceBetween + 'px' })
                : i.css({ height: e.virtualSize + r.spaceBetween + 'px' })),
            r.slidesPerColumn > 1 &&
              ((e.virtualSize = (O + r.spaceBetween) * x),
              (e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween),
              e.isHorizontal()
                ? i.css({ width: e.virtualSize + r.spaceBetween + 'px' })
                : i.css({ height: e.virtualSize + r.spaceBetween + 'px' }),
              r.centeredSlides))
          ) {
            P = [];
            for (var ae = 0; ae < f.length; ae += 1) {
              var oe = f[ae];
              r.roundLengths && (oe = Math.floor(oe)), f[ae] < e.virtualSize + f[0] && P.push(oe);
            }
            f = P;
          }
          if (!r.centeredSlides) {
            P = [];
            for (var le = 0; le < f.length; le += 1) {
              var de = f[le];
              r.roundLengths && (de = Math.floor(de)), f[le] <= e.virtualSize - n && P.push(de);
            }
            (f = P),
              Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - n);
          }
          if (
            (0 === f.length && (f = [0]),
            0 !== r.spaceBetween &&
              (e.isHorizontal()
                ? s
                  ? u.filter(m).css({ marginLeft: T + 'px' })
                  : u.filter(m).css({ marginRight: T + 'px' })
                : u.filter(m).css({ marginBottom: T + 'px' })),
            r.centeredSlides && r.centeredSlidesBounds)
          ) {
            var ce = 0;
            h.forEach(function (e) {
              ce += e + (r.spaceBetween ? r.spaceBetween : 0);
            }),
              (ce -= r.spaceBetween);
            var ue = ce - n;
            f = f.map(function (e) {
              return e < 0 ? -g : e > ue ? ue + b : e;
            });
          }
          if (r.centerInsufficientSlides) {
            var pe = 0;
            if (
              (h.forEach(function (e) {
                pe += e + (r.spaceBetween ? r.spaceBetween : 0);
              }),
              (pe -= r.spaceBetween),
              pe < n)
            ) {
              var fe = (n - pe) / 2;
              f.forEach(function (e, t) {
                f[t] = e - fe;
              }),
                v.forEach(function (e, t) {
                  v[t] = e + fe;
                });
            }
          }
          Object(o['c'])(e, { slides: u, snapGrid: f, slidesGrid: v, slidesSizesGrid: h }),
            p !== c && e.emit('slidesLengthChange'),
            f.length !== w &&
              (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
            v.length !== y && e.emit('slidesGridLengthChange'),
            (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
        }
      }
      function E(e) {
        var t,
          r = this,
          i = [],
          n = 0;
        if (
          ('number' === typeof e ? r.setTransition(e) : !0 === e && r.setTransition(r.params.speed),
          'auto' !== r.params.slidesPerView && r.params.slidesPerView > 1)
        )
          if (r.params.centeredSlides)
            r.visibleSlides.each(function (e) {
              i.push(e);
            });
          else
            for (t = 0; t < Math.ceil(r.params.slidesPerView); t += 1) {
              var s = r.activeIndex + t;
              if (s > r.slides.length) break;
              i.push(r.slides.eq(s)[0]);
            }
        else i.push(r.slides.eq(r.activeIndex)[0]);
        for (t = 0; t < i.length; t += 1)
          if ('undefined' !== typeof i[t]) {
            var a = i[t].offsetHeight;
            n = a > n ? a : n;
          }
        n && r.$wrapperEl.css('height', n + 'px');
      }
      function C() {
        for (var e = this, t = e.slides, r = 0; r < t.length; r += 1)
          t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop;
      }
      function x(e) {
        void 0 === e && (e = (this && this.translate) || 0);
        var t = this,
          r = t.params,
          i = t.slides,
          n = t.rtlTranslate;
        if (0 !== i.length) {
          'undefined' === typeof i[0].swiperSlideOffset && t.updateSlidesOffset();
          var s = -e;
          n && (s = e),
            i.removeClass(r.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (var o = 0; o < i.length; o += 1) {
            var l = i[o],
              d =
                (s + (r.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) /
                (l.swiperSlideSize + r.spaceBetween);
            if (r.watchSlidesVisibility || (r.centeredSlides && r.autoHeight)) {
              var c = -(s - l.swiperSlideOffset),
                u = c + t.slidesSizesGrid[o],
                p = (c >= 0 && c < t.size - 1) || (u > 1 && u <= t.size) || (c <= 0 && u >= t.size);
              p &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(o),
                i.eq(o).addClass(r.slideVisibleClass));
            }
            l.progress = n ? -d : d;
          }
          t.visibleSlides = Object(a['a'])(t.visibleSlides);
        }
      }
      function O(e) {
        var t = this;
        if ('undefined' === typeof e) {
          var r = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * r) || 0;
        }
        var i = t.params,
          n = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          a = t.isBeginning,
          l = t.isEnd,
          d = a,
          c = l;
        0 === n
          ? ((s = 0), (a = !0), (l = !0))
          : ((s = (e - t.minTranslate()) / n), (a = s <= 0), (l = s >= 1)),
          Object(o['c'])(t, { progress: s, isBeginning: a, isEnd: l }),
          (i.watchSlidesProgress ||
            i.watchSlidesVisibility ||
            (i.centeredSlides && i.autoHeight)) &&
            t.updateSlidesProgress(e),
          a && !d && t.emit('reachBeginning toEdge'),
          l && !c && t.emit('reachEnd toEdge'),
          ((d && !a) || (c && !l)) && t.emit('fromEdge'),
          t.emit('progress', s);
      }
      function P() {
        var e,
          t = this,
          r = t.slides,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex,
          a = t.realIndex,
          o = t.virtual && i.virtual.enabled;
        r.removeClass(
          i.slideActiveClass +
            ' ' +
            i.slideNextClass +
            ' ' +
            i.slidePrevClass +
            ' ' +
            i.slideDuplicateActiveClass +
            ' ' +
            i.slideDuplicateNextClass +
            ' ' +
            i.slideDuplicatePrevClass,
        ),
          (e = o
            ? t.$wrapperEl.find('.' + i.slideClass + '[data-swiper-slide-index="' + s + '"]')
            : r.eq(s)),
          e.addClass(i.slideActiveClass),
          i.loop &&
            (e.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      a +
                      '"]',
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      a +
                      '"]',
                  )
                  .addClass(i.slideDuplicateActiveClass));
        var l = e
          .nextAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop && 0 === l.length && ((l = r.eq(0)), l.addClass(i.slideNextClass));
        var d = e
          .prevAll('.' + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        i.loop && 0 === d.length && ((d = r.eq(-1)), d.addClass(i.slidePrevClass)),
          i.loop &&
            (l.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      l.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass),
            d.hasClass(i.slideDuplicateClass)
              ? n
                  .children(
                    '.' +
                      i.slideClass +
                      ':not(.' +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : n
                  .children(
                    '.' +
                      i.slideClass +
                      '.' +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      d.attr('data-swiper-slide-index') +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)),
          t.emitSlidesClasses();
      }
      function M(e) {
        var t,
          r = this,
          i = r.rtlTranslate ? r.translate : -r.translate,
          n = r.slidesGrid,
          s = r.snapGrid,
          a = r.params,
          l = r.activeIndex,
          d = r.realIndex,
          c = r.snapIndex,
          u = e;
        if ('undefined' === typeof u) {
          for (var p = 0; p < n.length; p += 1)
            'undefined' !== typeof n[p + 1]
              ? i >= n[p] && i < n[p + 1] - (n[p + 1] - n[p]) / 2
                ? (u = p)
                : i >= n[p] && i < n[p + 1] && (u = p + 1)
              : i >= n[p] && (u = p);
          a.normalizeSlideIndex && (u < 0 || 'undefined' === typeof u) && (u = 0);
        }
        if (s.indexOf(i) >= 0) t = s.indexOf(i);
        else {
          var f = Math.min(a.slidesPerGroupSkip, u);
          t = f + Math.floor((u - f) / a.slidesPerGroup);
        }
        if ((t >= s.length && (t = s.length - 1), u !== l)) {
          var v = parseInt(r.slides.eq(u).attr('data-swiper-slide-index') || u, 10);
          Object(o['c'])(r, { snapIndex: t, realIndex: v, previousIndex: l, activeIndex: u }),
            r.emit('activeIndexChange'),
            r.emit('snapIndexChange'),
            d !== v && r.emit('realIndexChange'),
            (r.initialized || r.params.runCallbacksOnInit) && r.emit('slideChange');
        } else t !== c && ((r.snapIndex = t), r.emit('snapIndexChange'));
      }
      function k(e) {
        var t = this,
          r = t.params,
          i = Object(a['a'])(e.target).closest('.' + r.slideClass)[0],
          n = !1;
        if (i) for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === i && (n = !0);
        if (!i || !n) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(Object(a['a'])(i).attr('data-swiper-slide-index'), 10))
            : (t.clickedIndex = Object(a['a'])(i).index()),
          r.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      }
      var j = {
        updateSize: T,
        updateSlides: S,
        updateAutoHeight: E,
        updateSlidesOffset: C,
        updateSlidesProgress: x,
        updateProgress: O,
        updateSlidesClasses: P,
        updateActiveIndex: M,
        updateClickedSlide: k,
      };
      function L(e) {
        void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
        var t = this,
          r = t.params,
          i = t.rtlTranslate,
          n = t.translate,
          s = t.$wrapperEl;
        if (r.virtualTranslate) return i ? -n : n;
        if (r.cssMode) return n;
        var a = Object(o['d'])(s[0], e);
        return i && (a = -a), a || 0;
      }
      function z(e, t) {
        var r,
          i = this,
          n = i.rtlTranslate,
          s = i.params,
          a = i.$wrapperEl,
          o = i.wrapperEl,
          l = i.progress,
          d = 0,
          c = 0,
          u = 0;
        i.isHorizontal() ? (d = n ? -e : e) : (c = e),
          s.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          s.cssMode
            ? (o[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -d : -c)
            : s.virtualTranslate ||
              a.transform('translate3d(' + d + 'px, ' + c + 'px, ' + u + 'px)'),
          (i.previousTranslate = i.translate),
          (i.translate = i.isHorizontal() ? d : c);
        var p = i.maxTranslate() - i.minTranslate();
        (r = 0 === p ? 0 : (e - i.minTranslate()) / p),
          r !== l && i.updateProgress(e),
          i.emit('setTranslate', i.translate, t);
      }
      function _() {
        return -this.snapGrid[0];
      }
      function D() {
        return -this.snapGrid[this.snapGrid.length - 1];
      }
      function A(e, t, r, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === r && (r = !0),
          void 0 === i && (i = !0);
        var s = this,
          a = s.params,
          o = s.wrapperEl;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        var l,
          d = s.minTranslate(),
          c = s.maxTranslate();
        if (((l = i && e > d ? d : i && e < c ? c : e), s.updateProgress(l), a.cssMode)) {
          var u,
            p = s.isHorizontal();
          if (0 === t) o[p ? 'scrollLeft' : 'scrollTop'] = -l;
          else if (o.scrollTo)
            o.scrollTo(((u = {}), (u[p ? 'left' : 'top'] = -l), (u.behavior = 'smooth'), u));
          else o[p ? 'scrollLeft' : 'scrollTop'] = -l;
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(l),
              r && (s.emit('beforeTransitionStart', t, n), s.emit('transitionEnd')))
            : (s.setTransition(t),
              s.setTranslate(l),
              r && (s.emit('beforeTransitionStart', t, n), s.emit('transitionStart')),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        s.onTranslateToWrapperTransitionEnd,
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      r && s.emit('transitionEnd'));
                  }),
                s.$wrapperEl[0].addEventListener(
                  'transitionend',
                  s.onTranslateToWrapperTransitionEnd,
                ),
                s.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  s.onTranslateToWrapperTransitionEnd,
                ))),
          !0
        );
      }
      var N = {
        getTranslate: L,
        setTranslate: z,
        minTranslate: _,
        maxTranslate: D,
        translateTo: A,
      };
      function I(e, t) {
        var r = this;
        r.params.cssMode || r.$wrapperEl.transition(e), r.emit('setTransition', e, t);
      }
      function G(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          i = r.activeIndex,
          n = r.params,
          s = r.previousIndex;
        if (!n.cssMode) {
          n.autoHeight && r.updateAutoHeight();
          var a = t;
          if (
            (a || (a = i > s ? 'next' : i < s ? 'prev' : 'reset'),
            r.emit('transitionStart'),
            e && i !== s)
          ) {
            if ('reset' === a) return void r.emit('slideResetTransitionStart');
            r.emit('slideChangeTransitionStart'),
              'next' === a
                ? r.emit('slideNextTransitionStart')
                : r.emit('slidePrevTransitionStart');
          }
        }
      }
      function B(e, t) {
        void 0 === e && (e = !0);
        var r = this,
          i = r.activeIndex,
          n = r.previousIndex,
          s = r.params;
        if (((r.animating = !1), !s.cssMode)) {
          r.setTransition(0);
          var a = t;
          if (
            (a || (a = i > n ? 'next' : i < n ? 'prev' : 'reset'),
            r.emit('transitionEnd'),
            e && i !== n)
          ) {
            if ('reset' === a) return void r.emit('slideResetTransitionEnd');
            r.emit('slideChangeTransitionEnd'),
              'next' === a ? r.emit('slideNextTransitionEnd') : r.emit('slidePrevTransitionEnd');
          }
        }
      }
      var V = { setTransition: I, transitionStart: G, transitionEnd: B };
      function H(e, t, r, i) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === r && (r = !0),
          'number' !== typeof e && 'string' !== typeof e)
        )
          throw new Error(
            "The 'index' argument cannot have type other than 'number' or 'string'. [" +
              typeof e +
              '] given.',
          );
        if ('string' === typeof e) {
          var n = parseInt(e, 10),
            s = isFinite(n);
          if (!s)
            throw new Error(
              "The passed-in 'index' (string) couldn't be converted to 'number'. [" +
                e +
                '] given.',
            );
          e = n;
        }
        var a = this,
          o = e;
        o < 0 && (o = 0);
        var l = a.params,
          d = a.snapGrid,
          c = a.slidesGrid,
          u = a.previousIndex,
          p = a.activeIndex,
          f = a.rtlTranslate,
          v = a.wrapperEl;
        if (a.animating && l.preventInteractionOnTransition) return !1;
        var h = Math.min(a.params.slidesPerGroupSkip, o),
          m = h + Math.floor((o - h) / a.params.slidesPerGroup);
        m >= d.length && (m = d.length - 1),
          (p || l.initialSlide || 0) === (u || 0) && r && a.emit('beforeSlideChangeStart');
        var g,
          b = -d[m];
        if ((a.updateProgress(b), l.normalizeSlideIndex))
          for (var w = 0; w < c.length; w += 1)
            -Math.floor(100 * b) >= Math.floor(100 * c[w]) && (o = w);
        if (a.initialized && o !== p) {
          if (!a.allowSlideNext && b < a.translate && b < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (p || 0) !== o)
            return !1;
        }
        if (
          ((g = o > p ? 'next' : o < p ? 'prev' : 'reset'),
          (f && -b === a.translate) || (!f && b === a.translate))
        )
          return (
            a.updateActiveIndex(o),
            l.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            'slide' !== l.effect && a.setTranslate(b),
            'reset' !== g && (a.transitionStart(r, g), a.transitionEnd(r, g)),
            !1
          );
        if (l.cssMode) {
          var y,
            T = a.isHorizontal(),
            S = -b;
          if ((f && (S = v.scrollWidth - v.offsetWidth - S), 0 === t))
            v[T ? 'scrollLeft' : 'scrollTop'] = S;
          else if (v.scrollTo)
            v.scrollTo(((y = {}), (y[T ? 'left' : 'top'] = S), (y.behavior = 'smooth'), y));
          else v[T ? 'scrollLeft' : 'scrollTop'] = S;
          return !0;
        }
        return (
          0 === t
            ? (a.setTransition(0),
              a.setTranslate(b),
              a.updateActiveIndex(o),
              a.updateSlidesClasses(),
              a.emit('beforeTransitionStart', t, i),
              a.transitionStart(r, g),
              a.transitionEnd(r, g))
            : (a.setTransition(t),
              a.setTranslate(b),
              a.updateActiveIndex(o),
              a.updateSlidesClasses(),
              a.emit('beforeTransitionStart', t, i),
              a.transitionStart(r, g),
              a.animating ||
                ((a.animating = !0),
                a.onSlideToWrapperTransitionEnd ||
                  (a.onSlideToWrapperTransitionEnd = function (e) {
                    a &&
                      !a.destroyed &&
                      e.target === this &&
                      (a.$wrapperEl[0].removeEventListener(
                        'transitionend',
                        a.onSlideToWrapperTransitionEnd,
                      ),
                      a.$wrapperEl[0].removeEventListener(
                        'webkitTransitionEnd',
                        a.onSlideToWrapperTransitionEnd,
                      ),
                      (a.onSlideToWrapperTransitionEnd = null),
                      delete a.onSlideToWrapperTransitionEnd,
                      a.transitionEnd(r, g));
                  }),
                a.$wrapperEl[0].addEventListener('transitionend', a.onSlideToWrapperTransitionEnd),
                a.$wrapperEl[0].addEventListener(
                  'webkitTransitionEnd',
                  a.onSlideToWrapperTransitionEnd,
                ))),
          !0
        );
      }
      function R(e, t, r, i) {
        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0);
        var n = this,
          s = e;
        return n.params.loop && (s += n.loopedSlides), n.slideTo(s, t, r, i);
      }
      function W(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          n = i.params,
          s = i.animating,
          a = i.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
        if (n.loop) {
          if (s && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return i.slideTo(i.activeIndex + a, e, t, r);
      }
      function $(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          n = i.params,
          s = i.animating,
          a = i.snapGrid,
          o = i.slidesGrid,
          l = i.rtlTranslate;
        if (n.loop) {
          if (s && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        var d = l ? i.translate : -i.translate;
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        var u,
          p = c(d),
          f = a.map(function (e) {
            return c(e);
          }),
          v = (a[f.indexOf(p)], a[f.indexOf(p) - 1]);
        return (
          'undefined' === typeof v &&
            n.cssMode &&
            a.forEach(function (e) {
              !v && p >= e && (v = e);
            }),
          'undefined' !== typeof v && ((u = o.indexOf(v)), u < 0 && (u = i.activeIndex - 1)),
          i.slideTo(u, e, t, r)
        );
      }
      function F(e, t, r) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, r);
      }
      function q(e, t, r, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        var n = this,
          s = n.activeIndex,
          a = Math.min(n.params.slidesPerGroupSkip, s),
          o = a + Math.floor((s - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          var d = n.snapGrid[o],
            c = n.snapGrid[o + 1];
          l - d > (c - d) * i && (s += n.params.slidesPerGroup);
        } else {
          var u = n.snapGrid[o - 1],
            p = n.snapGrid[o];
          l - u <= (p - u) * i && (s -= n.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)), (s = Math.min(s, n.slidesGrid.length - 1)), n.slideTo(s, e, t, r)
        );
      }
      function Y() {
        var e,
          t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = 'auto' === r.slidesPerView ? t.slidesPerViewDynamic() : r.slidesPerView,
          s = t.clickedIndex;
        if (r.loop) {
          if (t.animating) return;
          (e = parseInt(Object(a['a'])(t.clickedSlide).attr('data-swiper-slide-index'), 10)),
            r.centeredSlides
              ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2
                ? (t.loopFix(),
                  (s = i
                    .children(
                      '.' +
                        r.slideClass +
                        '[data-swiper-slide-index="' +
                        e +
                        '"]:not(.' +
                        r.slideDuplicateClass +
                        ')',
                    )
                    .eq(0)
                    .index()),
                  Object(o['e'])(function () {
                    t.slideTo(s);
                  }))
                : t.slideTo(s)
              : s > t.slides.length - n
              ? (t.loopFix(),
                (s = i
                  .children(
                    '.' +
                      r.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      r.slideDuplicateClass +
                      ')',
                  )
                  .eq(0)
                  .index()),
                Object(o['e'])(function () {
                  t.slideTo(s);
                }))
              : t.slideTo(s);
        } else t.slideTo(s);
      }
      var X = {
        slideTo: H,
        slideToLoop: R,
        slideNext: W,
        slidePrev: $,
        slideReset: F,
        slideToClosest: q,
        slideToClickedSlide: Y,
      };
      function U() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.$wrapperEl;
        i.children('.' + r.slideClass + '.' + r.slideDuplicateClass).remove();
        var n = i.children('.' + r.slideClass);
        if (r.loopFillGroupWithBlank) {
          var s = r.slidesPerGroup - (n.length % r.slidesPerGroup);
          if (s !== r.slidesPerGroup) {
            for (var o = 0; o < s; o += 1) {
              var d = Object(a['a'])(t.createElement('div')).addClass(
                r.slideClass + ' ' + r.slideBlankClass,
              );
              i.append(d);
            }
            n = i.children('.' + r.slideClass);
          }
        }
        'auto' !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = n.length),
          (e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10))),
          (e.loopedSlides += r.loopAdditionalSlides),
          e.loopedSlides > n.length && (e.loopedSlides = n.length);
        var c = [],
          u = [];
        n.each(function (t, r) {
          var i = Object(a['a'])(t);
          r < e.loopedSlides && u.push(t),
            r < n.length && r >= n.length - e.loopedSlides && c.push(t),
            i.attr('data-swiper-slide-index', r);
        });
        for (var p = 0; p < u.length; p += 1)
          i.append(Object(a['a'])(u[p].cloneNode(!0)).addClass(r.slideDuplicateClass));
        for (var f = c.length - 1; f >= 0; f -= 1)
          i.prepend(Object(a['a'])(c[f].cloneNode(!0)).addClass(r.slideDuplicateClass));
      }
      function J() {
        var e = this;
        e.emit('beforeLoopFix');
        var t,
          r = e.activeIndex,
          i = e.slides,
          n = e.loopedSlides,
          s = e.allowSlidePrev,
          a = e.allowSlideNext,
          o = e.snapGrid,
          l = e.rtlTranslate;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        var d = -o[r],
          c = d - e.getTranslate();
        if (r < n) {
          (t = i.length - 3 * n + r), (t += n);
          var u = e.slideTo(t, 0, !1, !0);
          u && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
        } else if (r >= i.length - n) {
          (t = -i.length + r + n), (t += n);
          var p = e.slideTo(t, 0, !1, !0);
          p && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = s), (e.allowSlideNext = a), e.emit('loopFix');
      }
      function K() {
        var e = this,
          t = e.$wrapperEl,
          r = e.params,
          i = e.slides;
        t
          .children(
            '.' +
              r.slideClass +
              '.' +
              r.slideDuplicateClass +
              ',.' +
              r.slideClass +
              '.' +
              r.slideBlankClass,
          )
          .remove(),
          i.removeAttr('data-swiper-slide-index');
      }
      var Z = { loopCreate: U, loopFix: J, loopDestroy: K };
      function Q(e) {
        var t = this;
        if (
          !(
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
        ) {
          var r = t.el;
          (r.style.cursor = 'move'),
            (r.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
            (r.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
            (r.style.cursor = e ? 'grabbing' : 'grab');
        }
      }
      function ee() {
        var e = this;
        e.support.touch ||
          (e.params.watchOverflow && e.isLocked) ||
          e.params.cssMode ||
          (e.el.style.cursor = '');
      }
      var te = { setGrabCursor: Q, unsetGrabCursor: ee };
      function re(e) {
        var t = this,
          r = t.$wrapperEl,
          i = t.params;
        if ((i.loop && t.loopDestroy(), 'object' === typeof e && 'length' in e))
          for (var n = 0; n < e.length; n += 1) e[n] && r.append(e[n]);
        else r.append(e);
        i.loop && t.loopCreate(), (i.observer && t.support.observer) || t.update();
      }
      function ie(e) {
        var t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = t.activeIndex;
        r.loop && t.loopDestroy();
        var s = n + 1;
        if ('object' === typeof e && 'length' in e) {
          for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
          s = n + e.length;
        } else i.prepend(e);
        r.loop && t.loopCreate(),
          (r.observer && t.support.observer) || t.update(),
          t.slideTo(s, 0, !1);
      }
      function ne(e, t) {
        var r = this,
          i = r.$wrapperEl,
          n = r.params,
          s = r.activeIndex,
          a = s;
        n.loop &&
          ((a -= r.loopedSlides), r.loopDestroy(), (r.slides = i.children('.' + n.slideClass)));
        var o = r.slides.length;
        if (e <= 0) r.prependSlide(t);
        else if (e >= o) r.appendSlide(t);
        else {
          for (var l = a > e ? a + 1 : a, d = [], c = o - 1; c >= e; c -= 1) {
            var u = r.slides.eq(c);
            u.remove(), d.unshift(u);
          }
          if ('object' === typeof t && 'length' in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            l = a > e ? a + t.length : a;
          } else i.append(t);
          for (var f = 0; f < d.length; f += 1) i.append(d[f]);
          n.loop && r.loopCreate(),
            (n.observer && r.support.observer) || r.update(),
            n.loop ? r.slideTo(l + r.loopedSlides, 0, !1) : r.slideTo(l, 0, !1);
        }
      }
      function se(e) {
        var t = this,
          r = t.params,
          i = t.$wrapperEl,
          n = t.activeIndex,
          s = n;
        r.loop &&
          ((s -= t.loopedSlides), t.loopDestroy(), (t.slides = i.children('.' + r.slideClass)));
        var a,
          o = s;
        if ('object' === typeof e && 'length' in e) {
          for (var l = 0; l < e.length; l += 1)
            (a = e[l]), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
          o = Math.max(o, 0);
        } else
          (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
        r.loop && t.loopCreate(),
          (r.observer && t.support.observer) || t.update(),
          r.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
      }
      function ae() {
        for (var e = this, t = [], r = 0; r < e.slides.length; r += 1) t.push(r);
        e.removeSlide(t);
      }
      var oe = {
        appendSlide: re,
        prependSlide: ie,
        addSlide: ne,
        removeSlide: se,
        removeAllSlides: ae,
      };
      function le(e) {
        var t = this,
          r = Object(l['a'])(),
          i = Object(l['b'])(),
          n = t.touchEventsData,
          s = t.params,
          d = t.touches;
        if (!t.animating || !s.preventInteractionOnTransition) {
          var c = e;
          c.originalEvent && (c = c.originalEvent);
          var u = Object(a['a'])(c.target);
          if (
            ('wrapper' !== s.touchEventsTarget || u.closest(t.wrapperEl).length) &&
            ((n.isTouchEvent = 'touchstart' === c.type),
            (n.isTouchEvent || !('which' in c) || 3 !== c.which) &&
              !(!n.isTouchEvent && 'button' in c && c.button > 0) &&
              (!n.isTouched || !n.isMoved))
          ) {
            var p = !!s.noSwipingClass && '' !== s.noSwipingClass;
            if (
              (p &&
                c.target &&
                c.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (u = Object(a['a'])(e.path[0])),
              s.noSwiping &&
                u.closest(s.noSwipingSelector ? s.noSwipingSelector : '.' + s.noSwipingClass)[0])
            )
              t.allowClick = !0;
            else if (!s.swipeHandler || u.closest(s.swipeHandler)[0]) {
              (d.currentX = 'touchstart' === c.type ? c.targetTouches[0].pageX : c.pageX),
                (d.currentY = 'touchstart' === c.type ? c.targetTouches[0].pageY : c.pageY);
              var f = d.currentX,
                v = d.currentY,
                h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
              if (!h || !(f <= m || f >= i.innerWidth - m)) {
                if (
                  (Object(o['c'])(n, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (d.startX = f),
                  (d.startY = v),
                  (n.touchStartTime = Object(o['f'])()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  s.threshold > 0 && (n.allowThresholdMove = !1),
                  'touchstart' !== c.type)
                ) {
                  var g = !0;
                  u.is(n.formElements) && (g = !1),
                    r.activeElement &&
                      Object(a['a'])(r.activeElement).is(n.formElements) &&
                      r.activeElement !== u[0] &&
                      r.activeElement.blur();
                  var b = g && t.allowTouchMove && s.touchStartPreventDefault;
                  (!s.touchStartForcePreventDefault && !b) ||
                    u[0].isContentEditable ||
                    c.preventDefault();
                }
                t.emit('touchStart', c);
              }
            }
          }
        }
      }
      function de(e) {
        var t = Object(l['a'])(),
          r = this,
          i = r.touchEventsData,
          n = r.params,
          s = r.touches,
          d = r.rtlTranslate,
          c = e;
        if ((c.originalEvent && (c = c.originalEvent), i.isTouched)) {
          if (!i.isTouchEvent || 'touchmove' === c.type) {
            var u =
                'touchmove' === c.type &&
                c.targetTouches &&
                (c.targetTouches[0] || c.changedTouches[0]),
              p = 'touchmove' === c.type ? u.pageX : c.pageX,
              f = 'touchmove' === c.type ? u.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return (s.startX = p), void (s.startY = f);
            if (!r.allowTouchMove)
              return (
                (r.allowClick = !1),
                void (
                  i.isTouched &&
                  (Object(o['c'])(s, { startX: p, startY: f, currentX: p, currentY: f }),
                  (i.touchStartTime = Object(o['f'])()))
                )
              );
            if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
              if (r.isVertical()) {
                if (
                  (f < s.startY && r.translate <= r.maxTranslate()) ||
                  (f > s.startY && r.translate >= r.minTranslate())
                )
                  return (i.isTouched = !1), void (i.isMoved = !1);
              } else if (
                (p < s.startX && r.translate <= r.maxTranslate()) ||
                (p > s.startX && r.translate >= r.minTranslate())
              )
                return;
            if (
              i.isTouchEvent &&
              t.activeElement &&
              c.target === t.activeElement &&
              Object(a['a'])(c.target).is(i.formElements)
            )
              return (i.isMoved = !0), void (r.allowClick = !1);
            if (
              (i.allowTouchCallbacks && r.emit('touchMove', c),
              !(c.targetTouches && c.targetTouches.length > 1))
            ) {
              (s.currentX = p), (s.currentY = f);
              var v = s.currentX - s.startX,
                h = s.currentY - s.startY;
              if (
                !(
                  r.params.threshold &&
                  Math.sqrt(Math.pow(v, 2) + Math.pow(h, 2)) < r.params.threshold
                )
              ) {
                var m;
                if ('undefined' === typeof i.isScrolling)
                  (r.isHorizontal() && s.currentY === s.startY) ||
                  (r.isVertical() && s.currentX === s.startX)
                    ? (i.isScrolling = !1)
                    : v * v + h * h >= 25 &&
                      ((m = (180 * Math.atan2(Math.abs(h), Math.abs(v))) / Math.PI),
                      (i.isScrolling = r.isHorizontal()
                        ? m > n.touchAngle
                        : 90 - m > n.touchAngle));
                if (
                  (i.isScrolling && r.emit('touchMoveOpposite', c),
                  'undefined' === typeof i.startMoving &&
                    ((s.currentX === s.startX && s.currentY === s.startY) || (i.startMoving = !0)),
                  i.isScrolling)
                )
                  i.isTouched = !1;
                else if (i.startMoving) {
                  (r.allowClick = !1),
                    !n.cssMode && c.cancelable && c.preventDefault(),
                    n.touchMoveStopPropagation && !n.nested && c.stopPropagation(),
                    i.isMoved ||
                      (n.loop && r.loopFix(),
                      (i.startTranslate = r.getTranslate()),
                      r.setTransition(0),
                      r.animating && r.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
                      (i.allowMomentumBounce = !1),
                      !n.grabCursor ||
                        (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) ||
                        r.setGrabCursor(!0),
                      r.emit('sliderFirstMove', c)),
                    r.emit('sliderMove', c),
                    (i.isMoved = !0);
                  var g = r.isHorizontal() ? v : h;
                  (s.diff = g),
                    (g *= n.touchRatio),
                    d && (g = -g),
                    (r.swipeDirection = g > 0 ? 'prev' : 'next'),
                    (i.currentTranslate = g + i.startTranslate);
                  var b = !0,
                    w = n.resistanceRatio;
                  if (
                    (n.touchReleaseOnEdges && (w = 0),
                    g > 0 && i.currentTranslate > r.minTranslate()
                      ? ((b = !1),
                        n.resistance &&
                          (i.currentTranslate =
                            r.minTranslate() -
                            1 +
                            Math.pow(-r.minTranslate() + i.startTranslate + g, w)))
                      : g < 0 &&
                        i.currentTranslate < r.maxTranslate() &&
                        ((b = !1),
                        n.resistance &&
                          (i.currentTranslate =
                            r.maxTranslate() +
                            1 -
                            Math.pow(r.maxTranslate() - i.startTranslate - g, w))),
                    b && (c.preventedByNestedSwiper = !0),
                    !r.allowSlideNext &&
                      'next' === r.swipeDirection &&
                      i.currentTranslate < i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    !r.allowSlidePrev &&
                      'prev' === r.swipeDirection &&
                      i.currentTranslate > i.startTranslate &&
                      (i.currentTranslate = i.startTranslate),
                    n.threshold > 0)
                  ) {
                    if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
                      return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove)
                      return (
                        (i.allowThresholdMove = !0),
                        (s.startX = s.currentX),
                        (s.startY = s.currentY),
                        (i.currentTranslate = i.startTranslate),
                        void (s.diff = r.isHorizontal()
                          ? s.currentX - s.startX
                          : s.currentY - s.startY)
                      );
                  }
                  n.followFinger &&
                    !n.cssMode &&
                    ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) &&
                      (r.updateActiveIndex(), r.updateSlidesClasses()),
                    n.freeMode &&
                      (0 === i.velocities.length &&
                        i.velocities.push({
                          position: s[r.isHorizontal() ? 'startX' : 'startY'],
                          time: i.touchStartTime,
                        }),
                      i.velocities.push({
                        position: s[r.isHorizontal() ? 'currentX' : 'currentY'],
                        time: Object(o['f'])(),
                      })),
                    r.updateProgress(i.currentTranslate),
                    r.setTranslate(i.currentTranslate));
                }
              }
            }
          }
        } else i.startMoving && i.isScrolling && r.emit('touchMoveOpposite', c);
      }
      function ce(e) {
        var t = this,
          r = t.touchEventsData,
          i = t.params,
          n = t.touches,
          s = t.rtlTranslate,
          a = t.$wrapperEl,
          l = t.slidesGrid,
          d = t.snapGrid,
          c = e;
        if (
          (c.originalEvent && (c = c.originalEvent),
          r.allowTouchCallbacks && t.emit('touchEnd', c),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        )
          return (
            r.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (r.isMoved = !1),
            void (r.startMoving = !1)
          );
        i.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var u,
          p = Object(o['f'])(),
          f = p - r.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(c),
            t.emit('tap click', c),
            f < 300 && p - r.lastClickTime < 300 && t.emit('doubleTap doubleClick', c)),
          (r.lastClickTime = Object(o['f'])()),
          Object(o['e'])(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            r.currentTranslate === r.startTranslate)
        )
          return (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1);
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (u = i.followFinger ? (s ? t.translate : -t.translate) : -r.currentTranslate),
          !i.cssMode)
        )
          if (i.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate())
              return void (t.slides.length < d.length
                ? t.slideTo(d.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (i.freeModeMomentum) {
              if (r.velocities.length > 1) {
                var v = r.velocities.pop(),
                  h = r.velocities.pop(),
                  m = v.position - h.position,
                  g = v.time - h.time;
                (t.velocity = m / g),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                  (g > 150 || Object(o['f'])() - v.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= i.freeModeMomentumVelocityRatio), (r.velocities.length = 0);
              var b = 1e3 * i.freeModeMomentumRatio,
                w = t.velocity * b,
                y = t.translate + w;
              s && (y = -y);
              var T,
                S,
                E = !1,
                C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
              if (y < t.maxTranslate())
                i.freeModeMomentumBounce
                  ? (y + t.maxTranslate() < -C && (y = t.maxTranslate() - C),
                    (T = t.maxTranslate()),
                    (E = !0),
                    (r.allowMomentumBounce = !0))
                  : (y = t.maxTranslate()),
                  i.loop && i.centeredSlides && (S = !0);
              else if (y > t.minTranslate())
                i.freeModeMomentumBounce
                  ? (y - t.minTranslate() > C && (y = t.minTranslate() + C),
                    (T = t.minTranslate()),
                    (E = !0),
                    (r.allowMomentumBounce = !0))
                  : (y = t.minTranslate()),
                  i.loop && i.centeredSlides && (S = !0);
              else if (i.freeModeSticky) {
                for (var x, O = 0; O < d.length; O += 1)
                  if (d[O] > -y) {
                    x = O;
                    break;
                  }
                (y =
                  Math.abs(d[x] - y) < Math.abs(d[x - 1] - y) || 'next' === t.swipeDirection
                    ? d[x]
                    : d[x - 1]),
                  (y = -y);
              }
              if (
                (S &&
                  t.once('transitionEnd', function () {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((b = s
                    ? Math.abs((-y - t.translate) / t.velocity)
                    : Math.abs((y - t.translate) / t.velocity)),
                  i.freeModeSticky)
                ) {
                  var P = Math.abs((s ? -y : y) - t.translate),
                    M = t.slidesSizesGrid[t.activeIndex];
                  b = P < M ? i.speed : P < 2 * M ? 1.5 * i.speed : 2.5 * i.speed;
                }
              } else if (i.freeModeSticky) return void t.slideToClosest();
              i.freeModeMomentumBounce && E
                ? (t.updateProgress(T),
                  t.setTransition(b),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  a.transitionEnd(function () {
                    t &&
                      !t.destroyed &&
                      r.allowMomentumBounce &&
                      (t.emit('momentumBounce'),
                      t.setTransition(i.speed),
                      setTimeout(function () {
                        t.setTranslate(T),
                          a.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(y),
                  t.setTransition(b),
                  t.setTranslate(y),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    a.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : t.updateProgress(y),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else if (i.freeModeSticky) return void t.slideToClosest();
            (!i.freeModeMomentum || f >= i.longSwipesMs) &&
              (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
          } else {
            for (
              var k = 0, j = t.slidesSizesGrid[0], L = 0;
              L < l.length;
              L += L < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
            ) {
              var z = L < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
              'undefined' !== typeof l[L + z]
                ? u >= l[L] && u < l[L + z] && ((k = L), (j = l[L + z] - l[L]))
                : u >= l[L] && ((k = L), (j = l[l.length - 1] - l[l.length - 2]));
            }
            var _ = (u - l[k]) / j,
              D = k < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            if (f > i.longSwipesMs) {
              if (!i.longSwipes) return void t.slideTo(t.activeIndex);
              'next' === t.swipeDirection &&
                (_ >= i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)),
                'prev' === t.swipeDirection &&
                  (_ > 1 - i.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
            } else {
              if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
              var A =
                t.navigation &&
                (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl);
              A
                ? c.target === t.navigation.nextEl
                  ? t.slideTo(k + D)
                  : t.slideTo(k)
                : ('next' === t.swipeDirection && t.slideTo(k + D),
                  'prev' === t.swipeDirection && t.slideTo(k));
            }
          }
      }
      function ue() {
        var e = this,
          t = e.params,
          r = e.el;
        if (!r || 0 !== r.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var i = e.allowSlideNext,
            n = e.allowSlidePrev,
            s = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            (e.allowSlidePrev = n),
            (e.allowSlideNext = i),
            e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
        }
      }
      function pe(e) {
        var t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function fe() {
        var e,
          t = this,
          r = t.wrapperEl,
          i = t.rtlTranslate;
        (t.previousTranslate = t.translate),
          t.isHorizontal()
            ? (t.translate = i ? r.scrollWidth - r.offsetWidth - r.scrollLeft : -r.scrollLeft)
            : (t.translate = -r.scrollTop),
          -0 === t.translate && (t.translate = 0),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
        var n = t.maxTranslate() - t.minTranslate();
        (e = 0 === n ? 0 : (t.translate - t.minTranslate()) / n),
          e !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
          t.emit('setTranslate', t.translate, !1);
      }
      var ve = !1;
      function he() {}
      function me() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.touchEvents,
          n = e.el,
          s = e.wrapperEl,
          a = e.device,
          o = e.support;
        (e.onTouchStart = le.bind(e)),
          (e.onTouchMove = de.bind(e)),
          (e.onTouchEnd = ce.bind(e)),
          r.cssMode && (e.onScroll = fe.bind(e)),
          (e.onClick = pe.bind(e));
        var d = !!r.nested;
        if (!o.touch && o.pointerEvents)
          n.addEventListener(i.start, e.onTouchStart, !1),
            t.addEventListener(i.move, e.onTouchMove, d),
            t.addEventListener(i.end, e.onTouchEnd, !1);
        else {
          if (o.touch) {
            var c = !('touchstart' !== i.start || !o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            n.addEventListener(i.start, e.onTouchStart, c),
              n.addEventListener(
                i.move,
                e.onTouchMove,
                o.passiveListener ? { passive: !1, capture: d } : d,
              ),
              n.addEventListener(i.end, e.onTouchEnd, c),
              i.cancel && n.addEventListener(i.cancel, e.onTouchEnd, c),
              ve || (t.addEventListener('touchstart', he), (ve = !0));
          }
          ((r.simulateTouch && !a.ios && !a.android) || (r.simulateTouch && !o.touch && a.ios)) &&
            (n.addEventListener('mousedown', e.onTouchStart, !1),
            t.addEventListener('mousemove', e.onTouchMove, d),
            t.addEventListener('mouseup', e.onTouchEnd, !1));
        }
        (r.preventClicks || r.preventClicksPropagation) &&
          n.addEventListener('click', e.onClick, !0),
          r.cssMode && s.addEventListener('scroll', e.onScroll),
          r.updateOnWindowResize
            ? e.on(
                a.ios || a.android
                  ? 'resize orientationchange observerUpdate'
                  : 'resize observerUpdate',
                ue,
                !0,
              )
            : e.on('observerUpdate', ue, !0);
      }
      function ge() {
        var e = this,
          t = Object(l['a'])(),
          r = e.params,
          i = e.touchEvents,
          n = e.el,
          s = e.wrapperEl,
          a = e.device,
          o = e.support,
          d = !!r.nested;
        if (!o.touch && o.pointerEvents)
          n.removeEventListener(i.start, e.onTouchStart, !1),
            t.removeEventListener(i.move, e.onTouchMove, d),
            t.removeEventListener(i.end, e.onTouchEnd, !1);
        else {
          if (o.touch) {
            var c = !('onTouchStart' !== i.start || !o.passiveListener || !r.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            n.removeEventListener(i.start, e.onTouchStart, c),
              n.removeEventListener(i.move, e.onTouchMove, d),
              n.removeEventListener(i.end, e.onTouchEnd, c),
              i.cancel && n.removeEventListener(i.cancel, e.onTouchEnd, c);
          }
          ((r.simulateTouch && !a.ios && !a.android) || (r.simulateTouch && !o.touch && a.ios)) &&
            (n.removeEventListener('mousedown', e.onTouchStart, !1),
            t.removeEventListener('mousemove', e.onTouchMove, d),
            t.removeEventListener('mouseup', e.onTouchEnd, !1));
        }
        (r.preventClicks || r.preventClicksPropagation) &&
          n.removeEventListener('click', e.onClick, !0),
          r.cssMode && s.removeEventListener('scroll', e.onScroll),
          e.off(
            a.ios || a.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            ue,
          );
      }
      var be = { attachEvents: me, detachEvents: ge };
      function we() {
        var e = this,
          t = e.activeIndex,
          r = e.initialized,
          i = e.loopedSlides,
          n = void 0 === i ? 0 : i,
          s = e.params,
          a = e.$el,
          l = s.breakpoints;
        if (l && (!l || 0 !== Object.keys(l).length)) {
          var d = e.getBreakpoint(l);
          if (d && e.currentBreakpoint !== d) {
            var c = d in l ? l[d] : void 0;
            c &&
              [
                'slidesPerView',
                'spaceBetween',
                'slidesPerGroup',
                'slidesPerGroupSkip',
                'slidesPerColumn',
              ].forEach(function (e) {
                var t = c[e];
                'undefined' !== typeof t &&
                  (c[e] =
                    'slidesPerView' !== e || ('AUTO' !== t && 'auto' !== t)
                      ? 'slidesPerView' === e
                        ? parseFloat(t)
                        : parseInt(t, 10)
                      : 'auto');
              });
            var u = c || e.originalParams,
              p = s.slidesPerColumn > 1,
              f = u.slidesPerColumn > 1;
            p && !f
              ? (a.removeClass(
                  s.containerModifierClass +
                    'multirow ' +
                    s.containerModifierClass +
                    'multirow-column',
                ),
                e.emitContainerClasses())
              : !p &&
                f &&
                (a.addClass(s.containerModifierClass + 'multirow'),
                'column' === u.slidesPerColumnFill &&
                  a.addClass(s.containerModifierClass + 'multirow-column'),
                e.emitContainerClasses());
            var v = u.direction && u.direction !== s.direction,
              h = s.loop && (u.slidesPerView !== s.slidesPerView || v);
            v && r && e.changeDirection(),
              Object(o['c'])(e.params, u),
              Object(o['c'])(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
              (e.currentBreakpoint = d),
              e.emit('_beforeBreakpoint', u),
              h &&
                r &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - n + e.loopedSlides, 0, !1)),
              e.emit('breakpoint', u);
          }
        }
      }
      function ye(e) {
        var t = Object(l['b'])();
        if (e) {
          var r = !1,
            i = Object.keys(e).map(function (e) {
              if ('string' === typeof e && 0 === e.indexOf('@')) {
                var r = parseFloat(e.substr(1)),
                  i = t.innerHeight * r;
                return { value: i, point: e };
              }
              return { value: e, point: e };
            });
          i.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });
          for (var n = 0; n < i.length; n += 1) {
            var s = i[n],
              a = s.point,
              o = s.value;
            o <= t.innerWidth && (r = a);
          }
          return r || 'max';
        }
      }
      var Te = { setBreakpoint: we, getBreakpoint: ye };
      function Se() {
        var e = this,
          t = e.classNames,
          r = e.params,
          i = e.rtl,
          n = e.$el,
          s = e.device,
          a = [];
        a.push('initialized'),
          a.push(r.direction),
          r.freeMode && a.push('free-mode'),
          r.autoHeight && a.push('autoheight'),
          i && a.push('rtl'),
          r.slidesPerColumn > 1 &&
            (a.push('multirow'), 'column' === r.slidesPerColumnFill && a.push('multirow-column')),
          s.android && a.push('android'),
          s.ios && a.push('ios'),
          r.cssMode && a.push('css-mode'),
          a.forEach(function (e) {
            t.push(r.containerModifierClass + e);
          }),
          n.addClass(t.join(' ')),
          e.emitContainerClasses();
      }
      function Ee() {
        var e = this,
          t = e.$el,
          r = e.classNames;
        t.removeClass(r.join(' ')), e.emitContainerClasses();
      }
      var Ce = { addClasses: Se, removeClasses: Ee };
      function xe(e, t, r, i, n, s) {
        var o,
          d = Object(l['b'])();
        function c() {
          s && s();
        }
        var u = Object(a['a'])(e).parent('picture')[0];
        u || (e.complete && n)
          ? c()
          : t
          ? ((o = new d.Image()),
            (o.onload = c),
            (o.onerror = c),
            i && (o.sizes = i),
            r && (o.srcset = r),
            t && (o.src = t))
          : c();
      }
      function Oe() {
        var e = this;
        function t() {
          'undefined' !== typeof e &&
            null !== e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
        }
        e.imagesToLoad = e.$el.find('img');
        for (var r = 0; r < e.imagesToLoad.length; r += 1) {
          var i = e.imagesToLoad[r];
          e.loadImage(
            i,
            i.currentSrc || i.getAttribute('src'),
            i.srcset || i.getAttribute('srcset'),
            i.sizes || i.getAttribute('sizes'),
            !0,
            t,
          );
        }
      }
      var Pe = { loadImage: xe, preloadImages: Oe };
      function Me() {
        var e = this,
          t = e.params,
          r = e.isLocked,
          i =
            e.slides.length > 0 &&
            t.slidesOffsetBefore +
              t.spaceBetween * (e.slides.length - 1) +
              e.slides[0].offsetWidth * e.slides.length;
        t.slidesOffsetBefore && t.slidesOffsetAfter && i
          ? (e.isLocked = i <= e.size)
          : (e.isLocked = 1 === e.snapGrid.length),
          (e.allowSlideNext = !e.isLocked),
          (e.allowSlidePrev = !e.isLocked),
          r !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock'),
          r && r !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
      }
      var ke = { checkOverflow: Me },
        je = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'container',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          nested: !1,
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: 'column',
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: 'swiper-container-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function Le(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function ze(e, t, r) {
        return t && Le(e.prototype, t), r && Le(e, r), e;
      }
      var _e = {
          modular: w,
          eventsEmitter: y,
          update: j,
          translate: N,
          transition: V,
          slide: X,
          loop: Z,
          grabCursor: te,
          manipulation: oe,
          events: be,
          breakpoints: Te,
          checkOverflow: ke,
          classes: Ce,
          images: Pe,
        },
        De = {},
        Ae = (function () {
          function e() {
            for (var t, r, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
              n[s] = arguments[s];
            1 === n.length && n[0].constructor && n[0].constructor === Object
              ? (r = n[0])
              : ((t = n[0]), (r = n[1])),
              r || (r = {}),
              (r = Object(o['c'])({}, r)),
              t && !r.el && (r.el = t);
            var l = this;
            (l.support = c()),
              (l.device = p({ userAgent: r.userAgent })),
              (l.browser = v()),
              (l.eventsListeners = {}),
              (l.eventsAnyListeners = []),
              'undefined' === typeof l.modules && (l.modules = {}),
              Object.keys(l.modules).forEach(function (e) {
                var t = l.modules[e];
                if (t.params) {
                  var i = Object.keys(t.params)[0],
                    n = t.params[i];
                  if ('object' !== typeof n || null === n) return;
                  if (!(i in r) || !('enabled' in n)) return;
                  !0 === r[i] && (r[i] = { enabled: !0 }),
                    'object' !== typeof r[i] || 'enabled' in r[i] || (r[i].enabled = !0),
                    r[i] || (r[i] = { enabled: !1 });
                }
              });
            var d = Object(o['c'])({}, je);
            l.useParams(d),
              (l.params = Object(o['c'])({}, d, De, r)),
              (l.originalParams = Object(o['c'])({}, l.params)),
              (l.passedParams = Object(o['c'])({}, r)),
              l.params &&
                l.params.on &&
                Object.keys(l.params.on).forEach(function (e) {
                  l.on(e, l.params.on[e]);
                }),
              l.params && l.params.onAny && l.onAny(l.params.onAny),
              (l.$ = a['a']);
            var u = Object(a['a'])(l.params.el);
            if (((t = u[0]), t)) {
              if (u.length > 1) {
                var f = [];
                return (
                  u.each(function (t) {
                    var i = Object(o['c'])({}, r, { el: t });
                    f.push(new e(i));
                  }),
                  f
                );
              }
              var h;
              return (
                (t.swiper = l),
                t && t.shadowRoot && t.shadowRoot.querySelector
                  ? ((h = Object(a['a'])(t.shadowRoot.querySelector('.' + l.params.wrapperClass))),
                    (h.children = function (e) {
                      return u.children(e);
                    }))
                  : (h = u.children('.' + l.params.wrapperClass)),
                Object(o['c'])(l, {
                  $el: u,
                  el: t,
                  $wrapperEl: h,
                  wrapperEl: h[0],
                  classNames: [],
                  slides: Object(a['a'])(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return 'horizontal' === l.params.direction;
                  },
                  isVertical: function () {
                    return 'vertical' === l.params.direction;
                  },
                  rtl: 'rtl' === t.dir.toLowerCase() || 'rtl' === u.css('direction'),
                  rtlTranslate:
                    'horizontal' === l.params.direction &&
                    ('rtl' === t.dir.toLowerCase() || 'rtl' === u.css('direction')),
                  wrongRTL: '-webkit-box' === h.css('display'),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: l.params.allowSlideNext,
                  allowSlidePrev: l.params.allowSlidePrev,
                  touchEvents: (function () {
                    var e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
                      t = ['mousedown', 'mousemove', 'mouseup'];
                    return (
                      l.support.pointerEvents && (t = ['pointerdown', 'pointermove', 'pointerup']),
                      (l.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                      (l.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                      l.support.touch || !l.params.simulateTouch
                        ? l.touchEventsTouch
                        : l.touchEventsDesktop
                    );
                  })(),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: 'input, select, option, textarea, button, video, label',
                    lastClickTime: Object(o['f'])(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0,
                  },
                  allowClick: !0,
                  allowTouchMove: l.params.allowTouchMove,
                  touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                  imagesToLoad: [],
                  imagesLoaded: 0,
                }),
                l.useModules(),
                l.emit('_swiper'),
                l.params.init && l.init(),
                l
              );
            }
          }
          var t = e.prototype;
          return (
            (t.emitContainerClasses = function () {
              var e = this;
              if (e.params._emitClasses && e.el) {
                var t = e.el.className.split(' ').filter(function (t) {
                  return (
                    0 === t.indexOf('swiper-container') ||
                    0 === t.indexOf(e.params.containerModifierClass)
                  );
                });
                e.emit('_containerClasses', t.join(' '));
              }
            }),
            (t.getSlideClasses = function (e) {
              var t = this;
              return e.className
                .split(' ')
                .filter(function (e) {
                  return 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass);
                })
                .join(' ');
            }),
            (t.emitSlidesClasses = function () {
              var e = this;
              e.params._emitClasses &&
                e.el &&
                e.slides.each(function (t) {
                  var r = e.getSlideClasses(t);
                  e.emit('_slideClass', t, r);
                });
            }),
            (t.slidesPerViewDynamic = function () {
              var e = this,
                t = e.params,
                r = e.slides,
                i = e.slidesGrid,
                n = e.size,
                s = e.activeIndex,
                a = 1;
              if (t.centeredSlides) {
                for (var o, l = r[s].swiperSlideSize, d = s + 1; d < r.length; d += 1)
                  r[d] && !o && ((l += r[d].swiperSlideSize), (a += 1), l > n && (o = !0));
                for (var c = s - 1; c >= 0; c -= 1)
                  r[c] && !o && ((l += r[c].swiperSlideSize), (a += 1), l > n && (o = !0));
              } else for (var u = s + 1; u < r.length; u += 1) i[u] - i[s] < n && (a += 1);
              return a;
            }),
            (t.update = function () {
              var e = this;
              if (e && !e.destroyed) {
                var t,
                  r = e.snapGrid,
                  i = e.params;
                i.breakpoints && e.setBreakpoint(),
                  e.updateSize(),
                  e.updateSlides(),
                  e.updateProgress(),
                  e.updateSlidesClasses(),
                  e.params.freeMode
                    ? (n(), e.params.autoHeight && e.updateAutoHeight())
                    : ((t =
                        ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                        e.isEnd &&
                        !e.params.centeredSlides
                          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                          : e.slideTo(e.activeIndex, 0, !1, !0)),
                      t || n()),
                  i.watchOverflow && r !== e.snapGrid && e.checkOverflow(),
                  e.emit('update');
              }
              function n() {
                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                  r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
              }
            }),
            (t.changeDirection = function (e, t) {
              void 0 === t && (t = !0);
              var r = this,
                i = r.params.direction;
              return (
                e || (e = 'horizontal' === i ? 'vertical' : 'horizontal'),
                e === i ||
                  ('horizontal' !== e && 'vertical' !== e) ||
                  (r.$el
                    .removeClass('' + r.params.containerModifierClass + i)
                    .addClass('' + r.params.containerModifierClass + e),
                  r.emitContainerClasses(),
                  (r.params.direction = e),
                  r.slides.each(function (t) {
                    'vertical' === e ? (t.style.width = '') : (t.style.height = '');
                  }),
                  r.emit('changeDirection'),
                  t && r.update()),
                r
              );
            }),
            (t.init = function () {
              var e = this;
              e.initialized ||
                (e.emit('beforeInit'),
                e.params.breakpoints && e.setBreakpoint(),
                e.addClasses(),
                e.params.loop && e.loopCreate(),
                e.updateSize(),
                e.updateSlides(),
                e.params.watchOverflow && e.checkOverflow(),
                e.params.grabCursor && e.setGrabCursor(),
                e.params.preloadImages && e.preloadImages(),
                e.params.loop
                  ? e.slideTo(
                      e.params.initialSlide + e.loopedSlides,
                      0,
                      e.params.runCallbacksOnInit,
                    )
                  : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                e.attachEvents(),
                (e.initialized = !0),
                e.emit('init'),
                e.emit('afterInit'));
            }),
            (t.destroy = function (e, t) {
              void 0 === e && (e = !0), void 0 === t && (t = !0);
              var r = this,
                i = r.params,
                n = r.$el,
                s = r.$wrapperEl,
                a = r.slides;
              return (
                'undefined' === typeof r.params ||
                  r.destroyed ||
                  (r.emit('beforeDestroy'),
                  (r.initialized = !1),
                  r.detachEvents(),
                  i.loop && r.loopDestroy(),
                  t &&
                    (r.removeClasses(),
                    n.removeAttr('style'),
                    s.removeAttr('style'),
                    a &&
                      a.length &&
                      a
                        .removeClass(
                          [
                            i.slideVisibleClass,
                            i.slideActiveClass,
                            i.slideNextClass,
                            i.slidePrevClass,
                          ].join(' '),
                        )
                        .removeAttr('style')
                        .removeAttr('data-swiper-slide-index')),
                  r.emit('destroy'),
                  Object.keys(r.eventsListeners).forEach(function (e) {
                    r.off(e);
                  }),
                  !1 !== e && ((r.$el[0].swiper = null), Object(o['b'])(r)),
                  (r.destroyed = !0)),
                null
              );
            }),
            (e.extendDefaults = function (e) {
              Object(o['c'])(De, e);
            }),
            (e.installModule = function (t) {
              e.prototype.modules || (e.prototype.modules = {});
              var r = t.name || Object.keys(e.prototype.modules).length + '_' + Object(o['f'])();
              e.prototype.modules[r] = t;
            }),
            (e.use = function (t) {
              return Array.isArray(t)
                ? (t.forEach(function (t) {
                    return e.installModule(t);
                  }),
                  e)
                : (e.installModule(t), e);
            }),
            ze(e, null, [
              {
                key: 'extendedDefaults',
                get: function () {
                  return De;
                },
              },
              {
                key: 'defaults',
                get: function () {
                  return je;
                },
              },
            ]),
            e
          );
        })();
      Object.keys(_e).forEach(function (e) {
        Object.keys(_e[e]).forEach(function (t) {
          Ae.prototype[t] = _e[e][t];
        });
      }),
        Ae.use([h, b]);
      t['a'] = Ae;
    },
    cKS0: function (e, t, r) {
      'use strict';
      r.d(t, 'b', function () {
        return n;
      }),
        r.d(t, 'e', function () {
          return s;
        }),
        r.d(t, 'f', function () {
          return a;
        }),
        r.d(t, 'd', function () {
          return o;
        }),
        r.d(t, 'c', function () {
          return d;
        }),
        r.d(t, 'a', function () {
          return c;
        });
      var i = r('/xfr');
      function n(e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (r) {}
          try {
            delete t[e];
          } catch (r) {}
        });
      }
      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function a() {
        return Date.now();
      }
      function o(e, t) {
        void 0 === t && (t = 'x');
        var r,
          n,
          s,
          a = Object(i['b'])(),
          o = a.getComputedStyle(e, null);
        return (
          a.WebKitCSSMatrix
            ? ((n = o.transform || o.webkitTransform),
              n.split(',').length > 6 &&
                (n = n
                  .split(', ')
                  .map(function (e) {
                    return e.replace(',', '.');
                  })
                  .join(', ')),
              (s = new a.WebKitCSSMatrix('none' === n ? '' : n)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
              (r = s.toString().split(','))),
          'x' === t &&
            (n = a.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          'y' === t &&
            (n = a.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          n || 0
        );
      }
      function l(e) {
        return 'object' === typeof e && null !== e && e.constructor && e.constructor === Object;
      }
      function d() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1;
          t < arguments.length;
          t += 1
        ) {
          var r = t < 0 || arguments.length <= t ? void 0 : arguments[t];
          if (void 0 !== r && null !== r)
            for (var i = Object.keys(Object(r)), n = 0, s = i.length; n < s; n += 1) {
              var a = i[n],
                o = Object.getOwnPropertyDescriptor(r, a);
              void 0 !== o &&
                o.enumerable &&
                (l(e[a]) && l(r[a])
                  ? d(e[a], r[a])
                  : !l(e[a]) && l(r[a])
                  ? ((e[a] = {}), d(e[a], r[a]))
                  : (e[a] = r[a]));
            }
        }
        return e;
      }
      function c(e, t) {
        Object.keys(t).forEach(function (r) {
          l(t[r]) &&
            Object.keys(t[r]).forEach(function (i) {
              'function' === typeof t[r][i] && (t[r][i] = t[r][i].bind(e));
            }),
            (e[r] = t[r]);
        });
      }
    },
    tu8O: function (e, t, r) {
      'use strict';
      function i(e) {
        return 'object' === typeof e && null !== e && e.constructor && e.constructor === Object;
      }
      function n(e, t) {
        Object.keys(t).forEach(function (r) {
          'undefined' === typeof e[r]
            ? (e[r] = t[r])
            : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0
            ? n(e[r], t[r])
            : (e[r] = t[r]);
        });
      }
      function s(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            'undefined' === typeof e.navigation.nextEl &&
            'undefined' === typeof e.navigation.prevEl
        );
      }
      function a(e) {
        return void 0 === e && (e = {}), e.pagination && 'undefined' === typeof e.pagination.el;
      }
      function o(e) {
        return void 0 === e && (e = {}), e.scrollbar && 'undefined' === typeof e.scrollbar.el;
      }
      function l(e) {
        void 0 === e && (e = '');
        var t = e
            .split(' ')
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          r = [];
        return (
          t.forEach(function (e) {
            r.indexOf(e) < 0 && r.push(e);
          }),
          r.join(' ')
        );
      }
      r.d(t, 'b', function () {
        return i;
      }),
        r.d(t, 'a', function () {
          return n;
        }),
        r.d(t, 'c', function () {
          return s;
        }),
        r.d(t, 'd', function () {
          return a;
        }),
        r.d(t, 'e', function () {
          return o;
        }),
        r.d(t, 'f', function () {
          return l;
        });
    },
    xqva: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return y;
      });
      var i = r('q1tI'),
        n = r.n(i),
        s = r('bTu8'),
        a = r('tu8O'),
        o = [
          'init',
          '_direction',
          'touchEventsTarget',
          'initialSlide',
          '_speed',
          'cssMode',
          'updateOnWindowResize',
          'nested',
          '_width',
          '_height',
          'preventInteractionOnTransition',
          'userAgent',
          'url',
          '_edgeSwipeDetection',
          '_edgeSwipeThreshold',
          '_freeMode',
          '_freeModeMomentum',
          '_freeModeMomentumRatio',
          '_freeModeMomentumBounce',
          '_freeModeMomentumBounceRatio',
          '_freeModeMomentumVelocityRatio',
          '_freeModeSticky',
          '_freeModeMinimumVelocity',
          '_autoHeight',
          'setWrapperSize',
          'virtualTranslate',
          '_effect',
          'breakpoints',
          '_spaceBetween',
          '_slidesPerView',
          '_slidesPerColumn',
          '_slidesPerColumnFill',
          '_slidesPerGroup',
          '_slidesPerGroupSkip',
          '_centeredSlides',
          '_centeredSlidesBounds',
          '_slidesOffsetBefore',
          '_slidesOffsetAfter',
          'normalizeSlideIndex',
          '_centerInsufficientSlides',
          '_watchOverflow',
          'roundLengths',
          'touchRatio',
          'touchAngle',
          'simulateTouch',
          '_shortSwipes',
          '_longSwipes',
          'longSwipesRatio',
          'longSwipesMs',
          '_followFinger',
          'allowTouchMove',
          '_threshold',
          'touchMoveStopPropagation',
          'touchStartPreventDefault',
          'touchStartForcePreventDefault',
          'touchReleaseOnEdges',
          'uniqueNavElements',
          '_resistance',
          '_resistanceRatio',
          '_watchSlidesProgress',
          '_watchSlidesVisibility',
          '_grabCursor',
          'preventClicks',
          'preventClicksPropagation',
          '_slideToClickedSlide',
          '_preloadImages',
          'updateOnImagesReady',
          '_loop',
          '_loopAdditionalSlides',
          '_loopedSlides',
          '_loopFillGroupWithBlank',
          'loopPreventsSlide',
          '_allowSlidePrev',
          '_allowSlideNext',
          '_swipeHandler',
          '_noSwiping',
          'noSwipingClass',
          'noSwipingSelector',
          'passiveListeners',
          'containerModifierClass',
          'slideClass',
          'slideBlankClass',
          'slideActiveClass',
          'slideDuplicateActiveClass',
          'slideVisibleClass',
          'slideDuplicateClass',
          'slideNextClass',
          'slideDuplicateNextClass',
          'slidePrevClass',
          'slideDuplicatePrevClass',
          'wrapperClass',
          'runCallbacksOnInit',
          'a11y',
          'autoplay',
          '_controller',
          'coverflowEffect',
          'cubeEffect',
          'fadeEffect',
          'flipEffect',
          'hashNavigation',
          'history',
          'keyboard',
          'lazy',
          'mousewheel',
          '_navigation',
          '_pagination',
          'parallax',
          '_scrollbar',
          '_thumbs',
          'virtual',
          'zoom',
        ];
      function l(e) {
        void 0 === e && (e = {});
        var t = { on: {} },
          r = {};
        Object(a['a'])(t, s['a'].defaults),
          Object(a['a'])(t, s['a'].extendedDefaults),
          (t._emitClasses = !0);
        var i = {},
          n = o.map(function (e) {
            return e.replace(/_/, '');
          });
        return (
          Object.keys(e).forEach(function (s) {
            n.indexOf(s) >= 0
              ? Object(a['b'])(e[s])
                ? ((t[s] = {}), (r[s] = {}), Object(a['a'])(t[s], e[s]), Object(a['a'])(r[s], e[s]))
                : ((t[s] = e[s]), (r[s] = e[s]))
              : 0 === s.search(/on[A-Z]/) && 'function' === typeof e[s]
              ? (t.on['' + s[2].toLowerCase() + s.substr(3)] = e[s])
              : (i[s] = e[s]);
          }),
          { params: t, passedParams: r, rest: i }
        );
      }
      function d(e, t) {
        var r = e.el,
          i = e.nextEl,
          n = e.prevEl,
          o = e.paginationEl,
          l = e.scrollbarEl;
        return (
          Object(a['c'])(t) &&
            i &&
            n &&
            (!0 === t.navigation && (t.navigation = {}),
            (t.navigation.nextEl = i),
            (t.navigation.prevEl = n)),
          Object(a['d'])(t) &&
            o &&
            (!0 === t.pagination && (t.pagination = {}), (t.pagination.el = o)),
          Object(a['e'])(t) &&
            l &&
            (!0 === t.scrollbar && (t.scrollbar = {}), (t.scrollbar.el = l)),
          new s['a'](r, t)
        );
      }
      function c(e, t) {
        var r = t.slidesPerView;
        if (t.breakpoints) {
          var i = s['a'].prototype.getBreakpoint(t.breakpoints),
            n = i in t.breakpoints ? t.breakpoints[i] : void 0;
          n && n.slidesPerView && (r = n.slidesPerView);
        }
        var a = Math.ceil(parseFloat(t.loopedSlides || r, 10));
        return (a += t.loopAdditionalSlides), a > e.length && (a = e.length), a;
      }
      function u(e, t, r) {
        var i = t.map(function (t, r) {
          return n.a.cloneElement(t, { swiper: e, 'data-swiper-slide-index': r });
        });
        function s(e, t, i) {
          return n.a.cloneElement(e, {
            key: e.key + '-duplicate-' + t + '-' + i,
            className: (e.props.className || '') + ' ' + r.slideDuplicateClass,
          });
        }
        if (r.loopFillGroupWithBlank) {
          var a = r.slidesPerGroup - (i.length % r.slidesPerGroup);
          if (a !== r.slidesPerGroup)
            for (var o = 0; o < a; o += 1) {
              var l = n.a.createElement('div', {
                className: r.slideClass + ' ' + r.slideBlankClass,
              });
              i.push(l);
            }
        }
        'auto' !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = i.length);
        var d = c(i, r),
          u = [],
          p = [];
        return (
          i.forEach(function (e, t) {
            t < d && p.push(s(e, t, 'prepend')),
              t < i.length && t >= i.length - d && u.push(s(e, t, 'append'));
          }),
          e && (e.loopedSlides = d),
          [].concat(u, i, p)
        );
      }
      function p(e, t, r, i) {
        var n = [];
        if (!t) return n;
        var s = function (e) {
            n.indexOf(e) < 0 && n.push(e);
          },
          l = i.map(function (e) {
            return e.key;
          }),
          d = r.map(function (e) {
            return e.key;
          });
        l.join('') !== d.join('') && s('children'), i.length !== r.length && s('children');
        var c = o
          .filter(function (e) {
            return '_' === e[0];
          })
          .map(function (e) {
            return e.replace(/_/, '');
          });
        return (
          c.forEach(function (r) {
            if (r in e && r in t)
              if (Object(a['b'])(e[r]) && Object(a['b'])(t[r])) {
                var i = Object.keys(e[r]),
                  n = Object.keys(t[r]);
                i.length !== n.length
                  ? s(r)
                  : (i.forEach(function (i) {
                      e[r][i] !== t[r][i] && s(r);
                    }),
                    n.forEach(function (i) {
                      e[r][i] !== t[r][i] && s(r);
                    }));
              } else e[r] !== t[r] && s(r);
          }),
          n
        );
      }
      function f(e) {
        var t = [],
          r = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': [],
          };
        function i(e) {
          n.a.Children.toArray(e).forEach(function (e) {
            e.type === n.a.Fragment && e.props.children
              ? i(e.props.children)
              : e.type && 'SwiperSlide' === e.type.displayName
              ? t.push(e)
              : e.props && e.props.slot && r[e.props.slot]
              ? r[e.props.slot].push(e)
              : r['container-end'].push(e);
          });
        }
        return i(e), { slides: t, slots: r };
      }
      function v(e, t, r, i) {
        var n,
          s,
          o,
          l,
          d,
          c = i.filter(function (e) {
            return 'children' !== e && 'direction' !== e;
          }),
          u = e.params,
          p = e.pagination,
          f = e.navigation,
          v = e.scrollbar,
          h = e.virtual,
          m = e.thumbs;
        if (
          (i.includes('thumbs') &&
            r.thumbs &&
            r.thumbs.swiper &&
            u.thumbs &&
            !u.thumbs.swiper &&
            (n = !0),
          i.includes('controller') &&
            r.controller &&
            r.controller.control &&
            u.controller &&
            !u.controller.control &&
            (s = !0),
          i.includes('pagination') &&
            r.pagination &&
            r.pagination.el &&
            u.pagination &&
            p &&
            !p.el &&
            (o = !0),
          i.includes('scrollbar') &&
            r.scrollbar &&
            r.scrollbar.el &&
            u.scrollbar &&
            v &&
            !v.el &&
            (l = !0),
          i.includes('navigation') &&
            r.navigation &&
            r.navigation.prevEl &&
            r.navigation.nextEl &&
            u.navigation &&
            f &&
            !f.prevEl &&
            !f.nextEl &&
            (d = !0),
          c.forEach(function (e) {
            Object(a['b'])(u[e]) && Object(a['b'])(r[e])
              ? Object(a['a'])(u[e], r[e])
              : (u[e] = r[e]);
          }),
          i.includes('children') && h && u.virtual.enabled && ((h.slides = t), h.update(!0)),
          n)
        ) {
          var g = m.init();
          g && m.update(!0);
        }
        s && (e.controller.control = u.controller.control),
          o && (p.init(), p.render(), p.update()),
          l && (v.init(), v.updateSize(), v.setTranslate()),
          d && (f.init(), f.update()),
          i.includes('allowSlideNext') && (e.allowSlideNext = r.allowSlideNext),
          i.includes('allowSlidePrev') && (e.allowSlidePrev = r.allowSlidePrev),
          i.includes('direction') && e.changeDirection(r.direction, !1),
          e.update();
      }
      function h(e) {
        e &&
          !e.destroyed &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load());
      }
      function m(e, t, r) {
        var i;
        if (!r) return null;
        var s = e.isHorizontal()
          ? ((i = {}), (i[e.rtlTranslate ? 'right' : 'left'] = r.offset + 'px'), i)
          : { top: r.offset + 'px' };
        return t
          .filter(function (e, t) {
            return t >= r.from && t <= r.to;
          })
          .map(function (t) {
            return n.a.cloneElement(t, { swiper: e, style: s });
          });
      }
      var g = r('/Pgi');
      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        if (null == e) return {};
        var r,
          i,
          n = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) (r = s[i]), t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n;
      }
      var y = Object(i['forwardRef'])(function (e, t) {
        var r = void 0 === e ? {} : e,
          s = r.className,
          o = r.tag,
          y = void 0 === o ? 'div' : o,
          T = r.wrapperTag,
          S = void 0 === T ? 'div' : T,
          E = r.children,
          C = r.onSwiper,
          x = w(r, ['className', 'tag', 'wrapperTag', 'children', 'onSwiper']),
          O = Object(i['useState'])('swiper-container'),
          P = O[0],
          M = O[1],
          k = Object(i['useState'])(null),
          j = k[0],
          L = k[1],
          z = Object(i['useState'])(!1),
          _ = z[0],
          D = z[1],
          A = Object(i['useRef'])(!1),
          N = Object(i['useRef'])(null),
          I = Object(i['useRef'])(null),
          G = Object(i['useRef'])(null),
          B = Object(i['useRef'])(null),
          V = Object(i['useRef'])(null),
          H = Object(i['useRef'])(null),
          R = Object(i['useRef'])(null),
          W = Object(i['useRef'])(null),
          $ = l(x),
          F = $.params,
          q = $.passedParams,
          Y = $.rest,
          X = f(E),
          U = X.slides,
          J = X.slots,
          K = p(q, G.current, U, B.current);
        (G.current = q), (B.current = U);
        var Z = function () {
          D(!_);
        };
        function Q() {
          return F.virtual
            ? m(I.current, U, j)
            : !F.loop || (I.current && I.current.destroyed)
            ? U.map(function (e) {
                return n.a.cloneElement(e, { swiper: I.current });
              })
            : u(I.current, U, F);
        }
        return (
          Object.assign(F.on, {
            _containerClasses: function (e, t) {
              M(t);
            },
            _swiper: function (e) {
              (e.loopCreate = function () {}),
                (e.loopDestroy = function () {}),
                F.loop && (e.loopedSlides = c(U, F)),
                (I.current = e),
                e.virtual &&
                  e.params.virtual.enabled &&
                  ((e.virtual.slides = U),
                  (e.params.virtual.cache = !1),
                  (e.params.virtual.renderExternal = L),
                  (e.params.virtual.renderExternalUpdate = !1));
            },
          }),
          I.current && I.current.on('_beforeBreakpoint', Z),
          Object(i['useEffect'])(function () {
            return function () {
              I.current && I.current.off('_beforeBreakpoint', Z);
            };
          }),
          Object(i['useEffect'])(function () {
            !A.current && I.current && (I.current.emitSlidesClasses(), (A.current = !0));
          }),
          Object(g['a'])(function () {
            K.length && I.current && !I.current.destroyed && v(I.current, U, q, K);
          }),
          Object(g['a'])(
            function () {
              h(I.current);
            },
            [j],
          ),
          Object(g['a'])(function () {
            if ((t && (t.current = N.current), N.current))
              return (
                d(
                  {
                    el: N.current,
                    nextEl: V.current,
                    prevEl: H.current,
                    paginationEl: R.current,
                    scrollbarEl: W.current,
                  },
                  F,
                ),
                C && C(I.current),
                function () {
                  I.current && !I.current.destroyed && I.current.destroy(!0, !1);
                }
              );
          }, []),
          n.a.createElement(
            y,
            b({ ref: N, className: Object(a['f'])(P + (s ? ' ' + s : '')) }, Y),
            J['container-start'],
            Object(a['c'])(F) &&
              n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement('div', { ref: H, className: 'swiper-button-prev' }),
                n.a.createElement('div', { ref: V, className: 'swiper-button-next' }),
              ),
            Object(a['e'])(F) &&
              n.a.createElement('div', { ref: W, className: 'swiper-scrollbar' }),
            Object(a['d'])(F) &&
              n.a.createElement('div', { ref: R, className: 'swiper-pagination' }),
            n.a.createElement(
              S,
              { className: 'swiper-wrapper' },
              J['wrapper-start'],
              Q(),
              J['wrapper-end'],
            ),
            J['container-end'],
          )
        );
      });
      y.displayName = 'Swiper';
    },
    zvbH: function (e, t, r) {
      'use strict';
      var i = r('QbLZ'),
        n = r.n(i),
        s = r('iCc5'),
        a = r.n(s),
        o = r('V7oC'),
        l = r.n(o),
        d = r('FYw3'),
        c = r.n(d),
        u = r('mRg0'),
        p = r.n(u),
        f = r('TSYQ'),
        v = r.n(f),
        h = r('q1tI'),
        m = function (e, t) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++)
              t.indexOf(i[n]) < 0 && (r[i[n]] = e[i[n]]);
          }
          return r;
        },
        g = (function (e) {
          function t() {
            return (
              a()(this, t),
              c()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            p()(t, e),
            l()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    r = e.className,
                    i = e.children,
                    s = e.mode,
                    a = e.icon,
                    o = e.onLeftClick,
                    l = e.leftContent,
                    d = e.rightContent,
                    c = m(e, [
                      'prefixCls',
                      'className',
                      'children',
                      'mode',
                      'icon',
                      'onLeftClick',
                      'leftContent',
                      'rightContent',
                    ]);
                  return h['createElement'](
                    'div',
                    n()({}, c, { className: v()(r, t, t + '-' + s) }),
                    h['createElement'](
                      'div',
                      { className: t + '-left', role: 'button', onClick: o },
                      a
                        ? h['createElement'](
                            'span',
                            { className: t + '-left-icon', 'aria-hidden': 'true' },
                            a,
                          )
                        : null,
                      l,
                    ),
                    h['createElement']('div', { className: t + '-title' }, i),
                    h['createElement']('div', { className: t + '-right' }, d),
                  );
                },
              },
            ]),
            t
          );
        })(h['Component']);
      (t['a'] = g),
        (g.defaultProps = { prefixCls: 'am-navbar', mode: 'dark', onLeftClick: function () {} });
    },
  },
]);
