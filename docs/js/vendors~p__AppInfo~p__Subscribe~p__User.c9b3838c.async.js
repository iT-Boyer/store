(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '0rqv': function (e, t, n) {},
    CS78: function (e, t, n) {},
    QE6f: function (e, t, n) {
      'use strict';
      n('ywh3'), n('aG6y');
    },
    XYLF: function (e, t, n) {
      'use strict';
      var r = n('QbLZ'),
        o = n.n(r),
        a = n('YEIV'),
        i = n.n(a),
        s = n('iCc5'),
        l = n.n(s),
        c = n('V7oC'),
        u = n.n(c),
        p = n('FYw3'),
        f = n.n(p),
        m = n('mRg0'),
        d = n.n(m),
        v = n('TSYQ'),
        h = n.n(v),
        y = n('q1tI'),
        g = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        b = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.className,
                    r = g(e, ['prefixCls', 'className']),
                    a = h()(t + '-body', n);
                  return y['createElement']('div', o()({ className: a }, r));
                },
              },
            ]),
            t
          );
        })(y['Component']),
        C = b;
      b.defaultProps = { prefixCls: 'am-card' };
      var w = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        N = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.content,
                    r = e.className,
                    a = e.extra,
                    i = w(e, ['prefixCls', 'content', 'className', 'extra']),
                    s = h()(t + '-footer', r);
                  return y['createElement'](
                    'div',
                    o()({ className: s }, i),
                    y['createElement']('div', { className: t + '-footer-content' }, n),
                    a && y['createElement']('div', { className: t + '-footer-extra' }, a),
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']),
        O = N;
      N.defaultProps = { prefixCls: 'am-card' };
      var x = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        E = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.className,
                    r = e.title,
                    a = e.thumb,
                    i = e.thumbStyle,
                    s = e.extra,
                    l = x(e, ['prefixCls', 'className', 'title', 'thumb', 'thumbStyle', 'extra']),
                    c = h()(t + '-header', n);
                  return y['createElement'](
                    'div',
                    o()({ className: c }, l),
                    y['createElement'](
                      'div',
                      { className: t + '-header-content' },
                      'string' === typeof a ? y['createElement']('img', { style: i, src: a }) : a,
                      r,
                    ),
                    s ? y['createElement']('div', { className: t + '-header-extra' }, s) : null,
                  );
                },
              },
            ]),
            t
          );
        })(y['Component']),
        k = E;
      E.defaultProps = { prefixCls: 'am-card', thumbStyle: {} };
      var P = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        _ = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.full,
                    r = e.className,
                    a = P(e, ['prefixCls', 'full', 'className']),
                    s = h()(t, r, i()({}, t + '-full', n));
                  return y['createElement']('div', o()({ className: s }, a));
                },
              },
            ]),
            t
          );
        })(y['Component']);
      t['a'] = _;
      (_.defaultProps = { prefixCls: 'am-card', full: !1 }),
        (_.Header = k),
        (_.Body = C),
        (_.Footer = O);
    },
    Xo8F: function (e, t, n) {
      'use strict';
      var r = n('QbLZ'),
        o = n.n(r),
        a = n('YEIV'),
        i = n.n(a),
        s = n('iCc5'),
        l = n.n(s),
        c = n('V7oC'),
        u = n.n(c),
        p = n('FYw3'),
        f = n.n(p),
        m = n('mRg0'),
        d = n.n(m),
        v = n('TSYQ'),
        h = n.n(v),
        y = n('q1tI'),
        g = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        b = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.direction,
                    r = t.wrap,
                    a = t.justify,
                    s = t.align,
                    l = t.alignContent,
                    c = t.className,
                    u = t.children,
                    p = t.prefixCls,
                    f = t.style,
                    m = g(t, [
                      'direction',
                      'wrap',
                      'justify',
                      'align',
                      'alignContent',
                      'className',
                      'children',
                      'prefixCls',
                      'style',
                    ]),
                    d = h()(
                      p,
                      c,
                      ((e = {}),
                      i()(e, p + '-dir-row', 'row' === n),
                      i()(e, p + '-dir-row-reverse', 'row-reverse' === n),
                      i()(e, p + '-dir-column', 'column' === n),
                      i()(e, p + '-dir-column-reverse', 'column-reverse' === n),
                      i()(e, p + '-nowrap', 'nowrap' === r),
                      i()(e, p + '-wrap', 'wrap' === r),
                      i()(e, p + '-wrap-reverse', 'wrap-reverse' === r),
                      i()(e, p + '-justify-start', 'start' === a),
                      i()(e, p + '-justify-end', 'end' === a),
                      i()(e, p + '-justify-center', 'center' === a),
                      i()(e, p + '-justify-between', 'between' === a),
                      i()(e, p + '-justify-around', 'around' === a),
                      i()(e, p + '-align-start', 'start' === s),
                      i()(e, p + '-align-center', 'center' === s),
                      i()(e, p + '-align-end', 'end' === s),
                      i()(e, p + '-align-baseline', 'baseline' === s),
                      i()(e, p + '-align-stretch', 'stretch' === s),
                      i()(e, p + '-align-content-start', 'start' === l),
                      i()(e, p + '-align-content-end', 'end' === l),
                      i()(e, p + '-align-content-center', 'center' === l),
                      i()(e, p + '-align-content-between', 'between' === l),
                      i()(e, p + '-align-content-around', 'around' === l),
                      i()(e, p + '-align-content-stretch', 'stretch' === l),
                      e),
                    );
                  return y['createElement']('div', o()({ className: d, style: f }, m), u);
                },
              },
            ]),
            t
          );
        })(y['Component']),
        C = b;
      b.defaultProps = { prefixCls: 'am-flexbox', align: 'center' };
      var w = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        N = (function (e) {
          function t() {
            return (
              l()(this, t),
              f()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            d()(t, e),
            u()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    r = e.prefixCls,
                    a = e.style,
                    i = w(e, ['children', 'className', 'prefixCls', 'style']),
                    s = h()(r + '-item', n);
                  return y['createElement']('div', o()({ className: s, style: a }, i), t);
                },
              },
            ]),
            t
          );
        })(y['Component']),
        O = N;
      (N.defaultProps = { prefixCls: 'am-flexbox' }), (C.Item = O);
      t['a'] = C;
    },
    aG6y: function (e, t, n) {},
    be8G: function (e, t, n) {},
    mw1O: function (e, t, n) {
      'use strict';
      n('ywh3'), n('0rqv');
    },
    nJCp: function (e, t, n) {
      'use strict';
      var r = n('iCc5'),
        o = n.n(r),
        a = n('V7oC'),
        i = n.n(a),
        s = n('FYw3'),
        l = n.n(s),
        c = n('mRg0'),
        u = n.n(c),
        p = n('TSYQ'),
        f = n.n(p),
        m = n('q1tI'),
        d = (function (e) {
          function t() {
            return (
              o()(this, t),
              l()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            u()(t, e),
            i()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    n = e.size,
                    r = e.className,
                    o = e.children,
                    a = e.style,
                    i = f()(t, t + '-' + n, r);
                  return m['createElement']('div', { className: i, style: a }, o);
                },
              },
            ]),
            t
          );
        })(m['Component']);
      (t['a'] = d), (d.defaultProps = { prefixCls: 'am-wingblank', size: 'lg' });
    },
    puyI: function (e, t, n) {
      'use strict';
      n('ywh3'), n('be8G');
    },
    tLCQ: function (e, t, n) {
      'use strict';
      n('ywh3'), n('CS78');
    },
    uJlo: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return g;
      });
      var r = n('QbLZ'),
        o = n.n(r),
        a = n('iCc5'),
        i = n.n(a),
        s = n('V7oC'),
        l = n.n(s),
        c = n('FYw3'),
        u = n.n(c),
        p = n('mRg0'),
        f = n.n(p),
        m = n('q1tI'),
        d = n.n(m),
        v = n('TSYQ'),
        h = n.n(v),
        y = (function (e) {
          function t() {
            i()(this, t);
            var e = u()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (
              (e.state = { active: !1 }),
              (e.onTouchStart = function (t) {
                e.triggerEvent('TouchStart', !0, t);
              }),
              (e.onTouchMove = function (t) {
                e.triggerEvent('TouchMove', !1, t);
              }),
              (e.onTouchEnd = function (t) {
                e.triggerEvent('TouchEnd', !1, t);
              }),
              (e.onTouchCancel = function (t) {
                e.triggerEvent('TouchCancel', !1, t);
              }),
              (e.onMouseDown = function (t) {
                e.triggerEvent('MouseDown', !0, t);
              }),
              (e.onMouseUp = function (t) {
                e.triggerEvent('MouseUp', !1, t);
              }),
              (e.onMouseLeave = function (t) {
                e.triggerEvent('MouseLeave', !1, t);
              }),
              e
            );
          }
          return (
            f()(t, e),
            l()(t, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.props.disabled && this.state.active && this.setState({ active: !1 });
                },
              },
              {
                key: 'triggerEvent',
                value: function (e, t, n) {
                  var r = 'on' + e,
                    o = this.props.children;
                  o.props[r] && o.props[r](n),
                    t !== this.state.active && this.setState({ active: t });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.disabled,
                    r = e.activeClassName,
                    a = e.activeStyle,
                    i = n
                      ? void 0
                      : {
                          onTouchStart: this.onTouchStart,
                          onTouchMove: this.onTouchMove,
                          onTouchEnd: this.onTouchEnd,
                          onTouchCancel: this.onTouchCancel,
                          onMouseDown: this.onMouseDown,
                          onMouseUp: this.onMouseUp,
                          onMouseLeave: this.onMouseLeave,
                        },
                    s = d.a.Children.only(t);
                  if (!n && this.state.active) {
                    var l = s.props,
                      c = l.style,
                      u = l.className;
                    return (
                      !1 !== a && (a && (c = o()({}, c, a)), (u = h()(u, r))),
                      d.a.cloneElement(s, o()({ className: u, style: c }, i))
                    );
                  }
                  return d.a.cloneElement(s, i);
                },
              },
            ]),
            t
          );
        })(d.a.Component),
        g = y;
      y.defaultProps = { disabled: !1 };
    },
    xZH1: function (e, t, n) {
      'use strict';
      var r = n('q1tI'),
        o = n.n(r),
        a = n('i8i4'),
        i = n.n(a);
      function s(e, t) {
        var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector,
          r = e;
        while (r) {
          if (n.call(r, t)) return r;
          r = r.parentElement;
        }
        return null;
      }
      var l = n('QbLZ'),
        c = n.n(l),
        u = n('YEIV'),
        p = n.n(u),
        f = n('V7oC'),
        m = n.n(f),
        d = n('iCc5'),
        v = n.n(d),
        h = n('FYw3'),
        y = n.n(h),
        g = n('mRg0'),
        b = n.n(g),
        C = n('TSYQ'),
        w = n.n(C),
        N = n('MFj2'),
        O = (function (e) {
          function t() {
            return (
              v()(this, t),
              y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            m()(t, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !!e.hiddenClassName || !!e.visible;
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.className;
                  this.props.hiddenClassName &&
                    !this.props.visible &&
                    (e += ' ' + this.props.hiddenClassName);
                  var t = c()({}, this.props);
                  return (
                    delete t.hiddenClassName,
                    delete t.visible,
                    (t.className = e),
                    o.a.createElement('div', c()({}, t))
                  );
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        x = O;
      function E() {}
      var k = (function (e) {
          function t() {
            v()(this, t);
            var e = y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (
              (e.getDialogElement = function () {
                var t = e.props,
                  n = t.closable,
                  r = t.prefixCls,
                  a = void 0;
                t.footer &&
                  (a = o.a.createElement(
                    'div',
                    {
                      className: r + '-footer',
                      ref: function (t) {
                        return (e.footerRef = t);
                      },
                    },
                    t.footer,
                  ));
                var i = void 0;
                t.title &&
                  (i = o.a.createElement(
                    'div',
                    {
                      className: r + '-header',
                      ref: function (t) {
                        return (e.headerRef = t);
                      },
                    },
                    o.a.createElement('div', { className: r + '-title' }, t.title),
                  ));
                var s = void 0;
                n &&
                  (s = o.a.createElement(
                    'button',
                    { onClick: e.close, 'aria-label': 'Close', className: r + '-close' },
                    o.a.createElement('span', { className: r + '-close-x' }),
                  ));
                var l = e.getTransitionName(),
                  c = o.a.createElement(
                    x,
                    {
                      key: 'dialog-element',
                      role: 'document',
                      ref: function (t) {
                        return (e.dialogRef = t);
                      },
                      style: t.style || {},
                      className: r + ' ' + (t.className || ''),
                      visible: t.visible,
                    },
                    o.a.createElement(
                      'div',
                      { className: r + '-content' },
                      s,
                      i,
                      o.a.createElement(
                        'div',
                        {
                          className: r + '-body',
                          style: t.bodyStyle,
                          ref: function (t) {
                            return (e.bodyRef = t);
                          },
                        },
                        t.children,
                      ),
                      a,
                    ),
                  );
                return o.a.createElement(
                  N['a'],
                  {
                    key: 'dialog',
                    showProp: 'visible',
                    onAppear: e.onAnimateAppear,
                    onLeave: e.onAnimateLeave,
                    transitionName: l,
                    component: '',
                    transitionAppear: !0,
                  },
                  c,
                );
              }),
              (e.onAnimateAppear = function () {
                document.body.style.overflow = 'hidden';
              }),
              (e.onAnimateLeave = function () {
                (document.body.style.overflow = ''),
                  e.wrapRef && (e.wrapRef.style.display = 'none'),
                  e.props.onAnimateLeave && e.props.onAnimateLeave(),
                  e.props.afterClose && e.props.afterClose();
              }),
              (e.close = function (t) {
                e.props.onClose && e.props.onClose(t);
              }),
              (e.onMaskClick = function (t) {
                t.target === t.currentTarget && e.close(t);
              }),
              e
            );
          }
          return (
            b()(t, e),
            m()(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  (document.body.style.overflow = ''),
                    this.wrapRef && (this.wrapRef.style.display = 'none');
                },
              },
              {
                key: 'getZIndexStyle',
                value: function () {
                  var e = {},
                    t = this.props;
                  return void 0 !== t.zIndex && (e.zIndex = t.zIndex), e;
                },
              },
              {
                key: 'getWrapStyle',
                value: function () {
                  var e = this.props.wrapStyle || {};
                  return c()({}, this.getZIndexStyle(), e);
                },
              },
              {
                key: 'getMaskStyle',
                value: function () {
                  var e = this.props.maskStyle || {};
                  return c()({}, this.getZIndexStyle(), e);
                },
              },
              {
                key: 'getMaskTransitionName',
                value: function () {
                  var e = this.props,
                    t = e.maskTransitionName,
                    n = e.maskAnimation;
                  return !t && n && (t = e.prefixCls + '-' + n), t;
                },
              },
              {
                key: 'getTransitionName',
                value: function () {
                  var e = this.props,
                    t = e.transitionName,
                    n = e.animation;
                  return !t && n && (t = e.prefixCls + '-' + n), t;
                },
              },
              {
                key: 'getMaskElement',
                value: function () {
                  var e = this.props,
                    t = void 0;
                  if (e.mask) {
                    var n = this.getMaskTransitionName();
                    (t = o.a.createElement(
                      x,
                      c()(
                        {
                          style: this.getMaskStyle(),
                          key: 'mask-element',
                          className: e.prefixCls + '-mask',
                          hiddenClassName: e.prefixCls + '-mask-hidden',
                          visible: e.visible,
                        },
                        e.maskProps,
                      ),
                    )),
                      n &&
                        (t = o.a.createElement(
                          N['a'],
                          {
                            key: 'mask',
                            showProp: 'visible',
                            transitionAppear: !0,
                            component: '',
                            transitionName: n,
                          },
                          t,
                        ));
                  }
                  return t;
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.prefixCls,
                    r = t.maskClosable,
                    a = this.getWrapStyle();
                  return (
                    t.visible && (a.display = null),
                    o.a.createElement(
                      'div',
                      null,
                      this.getMaskElement(),
                      o.a.createElement(
                        'div',
                        c()(
                          {
                            className: n + '-wrap ' + (t.wrapClassName || ''),
                            ref: function (t) {
                              return (e.wrapRef = t);
                            },
                            onClick: r ? this.onMaskClick : void 0,
                            role: 'dialog',
                            'aria-labelledby': t.title,
                            style: a,
                          },
                          t.wrapProps,
                        ),
                        this.getDialogElement(),
                      ),
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        P = k;
      function _() {}
      k.defaultProps = {
        afterClose: E,
        className: '',
        mask: !0,
        visible: !1,
        closable: !0,
        maskClosable: !0,
        prefixCls: 'rmc-dialog',
        onClose: E,
      };
      var S = !!i.a.createPortal,
        T = !('undefined' === typeof window || !window.document || !window.document.createElement),
        j = (function (e) {
          function t() {
            v()(this, t);
            var e = y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            return (
              (e.saveRef = function (t) {
                S && (e._component = t);
              }),
              (e.getComponent = function (t) {
                var n = c()({}, e.props);
                return (
                  ['visible', 'onAnimateLeave'].forEach(function (e) {
                    n.hasOwnProperty(e) && delete n[e];
                  }),
                  o.a.createElement(
                    P,
                    c()({}, n, { visible: t, onAnimateLeave: e.removeContainer, ref: e.saveRef }),
                  )
                );
              }),
              (e.removeContainer = function () {
                e.container &&
                  (S || i.a.unmountComponentAtNode(e.container),
                  e.container.parentNode.removeChild(e.container),
                  (e.container = null));
              }),
              (e.getContainer = function () {
                if (!e.container) {
                  var t = document.createElement('div'),
                    n = e.props.prefixCls + '-container-' + new Date().getTime();
                  t.setAttribute('id', n), document.body.appendChild(t), (e.container = t);
                }
                return e.container;
              }),
              e
            );
          }
          return (
            b()(t, e),
            m()(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.visible && this.componentDidUpdate();
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = e.visible;
                  return !(!this.props.visible && !t);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.visible
                    ? S
                      ? this.removeContainer()
                      : this.renderDialog(!1)
                    : this.removeContainer();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  S || this.renderDialog(this.props.visible);
                },
              },
              {
                key: 'renderDialog',
                value: function (e) {
                  i.a.unstable_renderSubtreeIntoContainer(
                    this,
                    this.getComponent(e),
                    this.getContainer(),
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  if (!T) return null;
                  var e = this.props.visible;
                  return S && (e || this._component)
                    ? i.a.createPortal(this.getComponent(e), this.getContainer())
                    : null;
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        M = j;
      j.defaultProps = { visible: !1, prefixCls: 'rmc-dialog', onClose: _ };
      var A = n('uJlo'),
        D = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        I = (function (e) {
          function t() {
            return (
              v()(this, t),
              y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return b()(t, e), t;
        })(r['Component']),
        L = (function (e) {
          function t() {
            return (
              v()(this, t),
              y()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            m()(t, [
              {
                key: 'renderFooterButton',
                value: function (e, t, n) {
                  var o = {};
                  if (e.style && ((o = e.style), 'string' === typeof o)) {
                    var a = { cancel: {}, default: {}, destructive: { color: 'red' } };
                    o = a[o] || {};
                  }
                  var i = function (t) {
                    t.preventDefault(), e.onPress && e.onPress();
                  };
                  return r['createElement'](
                    A['a'],
                    { activeClassName: t + '-button-active', key: n },
                    r['createElement'](
                      'a',
                      { className: t + '-button', role: 'button', style: o, onClick: i },
                      e.text || 'Button',
                    ),
                  );
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    o = n.prefixCls,
                    a = n.className,
                    i = n.wrapClassName,
                    s = n.transitionName,
                    l = n.maskTransitionName,
                    u = n.style,
                    f = n.platform,
                    m = n.footer,
                    d = void 0 === m ? [] : m,
                    v = n.operation,
                    h = n.animated,
                    y = n.transparent,
                    g = n.popup,
                    b = n.animationType,
                    C = D(n, [
                      'prefixCls',
                      'className',
                      'wrapClassName',
                      'transitionName',
                      'maskTransitionName',
                      'style',
                      'platform',
                      'footer',
                      'operation',
                      'animated',
                      'transparent',
                      'popup',
                      'animationType',
                    ]),
                    N = w()(
                      o + '-button-group-' + (2 !== d.length || v ? 'v' : 'h'),
                      o + '-button-group-' + (v ? 'operation' : 'normal'),
                    ),
                    O = d.length
                      ? r['createElement'](
                          'div',
                          { className: N, role: 'group' },
                          d.map(function (e, n) {
                            return t.renderFooterButton(e, o, n);
                          }),
                        )
                      : null,
                    x = void 0,
                    E = void 0;
                  h &&
                    ((x = E = y ? 'am-fade' : 'am-slide-up'),
                    g &&
                      ((x = 'slide-up' === b ? 'am-slide-up' : 'am-slide-down'), (E = 'am-fade')));
                  var k = w()(i, p()({}, o + '-wrap-popup', g)),
                    P = w()(
                      a,
                      ((e = {}),
                      p()(e, o + '-transparent', y),
                      p()(e, o + '-popup', g),
                      p()(e, o + '-popup-' + b, g && b),
                      p()(e, o + '-android', 'android' === f),
                      e),
                    );
                  return r['createElement'](
                    M,
                    c()({}, C, {
                      prefixCls: o,
                      className: P,
                      wrapClassName: k,
                      transitionName: s || x,
                      maskTransitionName: l || E,
                      style: u,
                      footer: O,
                    }),
                  );
                },
              },
            ]),
            t
          );
        })(I),
        R = L;
      function Y(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : [{ text: '\u786e\u5b9a' }],
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'ios',
          i = !1;
        if (!e && !t) return { close: function () {} };
        var l = document.createElement('div');
        function c() {
          a['unmountComponentAtNode'](l), l && l.parentNode && l.parentNode.removeChild(l);
        }
        document.body.appendChild(l);
        var u = n.map(function (e) {
            var t = e.onPress || function () {};
            return (
              (e.onPress = function () {
                if (!i) {
                  var e = t();
                  e && e.then
                    ? e
                        .then(function () {
                          (i = !0), c();
                        })
                        ['catch'](function () {})
                    : ((i = !0), c());
                }
              }),
              e
            );
          }),
          p = 'am-modal';
        function f(e) {
          if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            var t = s(e.target, '.' + p + '-footer');
            t || e.preventDefault();
          }
        }
        return (
          a['render'](
            r['createElement'](
              R,
              {
                visible: !0,
                transparent: !0,
                title: e,
                transitionName: 'am-zoom',
                closable: !1,
                maskClosable: !1,
                footer: u,
                maskTransitionName: 'am-fade',
                platform: o,
                wrapProps: { onTouchStart: f },
              },
              r['createElement']('div', { className: p + '-alert-content' }, t),
            ),
            l,
          ),
          { close: c }
        );
      }
      function V() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : [{ text: '\u786e\u5b9a' }],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ios',
          n = !1,
          o = 'am-modal',
          i = document.createElement('div');
        function l() {
          a['unmountComponentAtNode'](i), i && i.parentNode && i.parentNode.removeChild(i);
        }
        document.body.appendChild(i);
        var c = e.map(function (e) {
          var t = e.onPress || function () {};
          return (
            (e.onPress = function () {
              if (!n) {
                var e = t();
                e && e.then
                  ? e
                      .then(function () {
                        (n = !0), l();
                      })
                      ['catch'](function () {})
                  : ((n = !0), l());
              }
            }),
            e
          );
        });
        function u(e) {
          if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            var t = s(e.target, '.am-modal-footer');
            t || e.preventDefault();
          }
        }
        return (
          a['render'](
            r['createElement'](R, {
              visible: !0,
              operation: !0,
              transparent: !0,
              prefixCls: o,
              transitionName: 'am-zoom',
              closable: !1,
              maskClosable: !0,
              onClose: l,
              footer: c,
              maskTransitionName: 'am-fade',
              className: 'am-modal-operation',
              platform: t,
              wrapProps: { onTouchStart: u },
            }),
            i,
          ),
          { close: l }
        );
      }
      function F(e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'default',
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
          l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ['', ''],
          c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 'ios',
          u = !1;
        if (((i = 'string' === typeof i ? i : 'number' === typeof i ? '' + i : ''), !n))
          return { close: function () {} };
        var p = 'am-modal',
          f = { text: i };
        function m(e) {
          var t = e.target,
            n = t.getAttribute('type');
          null !== n && (f[n] = t.value);
        }
        function d(e) {
          var t = e.currentTarget || e.target;
          t && t.focus();
        }
        function v() {
          /MicroMessenger/.test(navigator.userAgent) &&
            (document.body.scrollTop = document.body.scrollTop);
        }
        var h = void 0,
          y = function (e) {
            setTimeout(function () {
              e && e.focus();
            }, 500);
          };
        switch (o) {
          case 'login-password':
            h = r['createElement'](
              'div',
              { className: p + '-input-container' },
              r['createElement'](
                'div',
                { className: p + '-input' },
                r['createElement'](
                  'label',
                  null,
                  r['createElement']('input', {
                    type: 'text',
                    defaultValue: f.text,
                    ref: function (e) {
                      return y(e);
                    },
                    onClick: d,
                    onChange: m,
                    placeholder: l[0],
                    onBlur: v,
                  }),
                ),
              ),
              r['createElement'](
                'div',
                { className: p + '-input' },
                r['createElement'](
                  'label',
                  null,
                  r['createElement']('input', {
                    type: 'password',
                    defaultValue: f.password,
                    onClick: d,
                    onChange: m,
                    placeholder: l[1],
                    onBlur: v,
                  }),
                ),
              ),
            );
            break;
          case 'secure-text':
            h = r['createElement'](
              'div',
              { className: p + '-input-container' },
              r['createElement'](
                'div',
                { className: p + '-input' },
                r['createElement'](
                  'label',
                  null,
                  r['createElement']('input', {
                    type: 'password',
                    defaultValue: f.password,
                    ref: function (e) {
                      return y(e);
                    },
                    onClick: d,
                    onChange: m,
                    placeholder: l[0],
                    onBlur: v,
                  }),
                ),
              ),
            );
            break;
          case 'default':
          default:
            h = r['createElement'](
              'div',
              { className: p + '-input-container' },
              r['createElement'](
                'div',
                { className: p + '-input' },
                r['createElement'](
                  'label',
                  null,
                  r['createElement']('input', {
                    type: 'text',
                    defaultValue: f.text,
                    ref: function (e) {
                      return y(e);
                    },
                    onClick: d,
                    onChange: m,
                    placeholder: l[0],
                    onBlur: v,
                  }),
                ),
              ),
            );
        }
        var g = r['createElement']('div', null, t, h),
          b = document.createElement('div');
        function C() {
          a['unmountComponentAtNode'](b), b && b.parentNode && b.parentNode.removeChild(b);
        }
        function w(e) {
          if ('function' === typeof e) {
            var t = f.text,
              n = void 0 === t ? '' : t,
              r = f.password,
              a = void 0 === r ? '' : r,
              i = 'login-password' === o ? [n, a] : 'secure-text' === o ? [a] : [n];
            return e.apply(void 0, i);
          }
        }
        document.body.appendChild(b);
        var N = void 0;
        N =
          'function' === typeof n
            ? [
                { text: '\u53d6\u6d88', onPress: function () {} },
                {
                  text: '\u786e\u5b9a',
                  onPress: function () {
                    w(n);
                  },
                },
              ]
            : n.map(function (e) {
                return {
                  text: e.text,
                  onPress: function () {
                    return w(e.onPress);
                  },
                };
              });
        var O = N.map(function (e) {
          var t = e.onPress || function () {};
          return (
            (e.onPress = function () {
              if (!u) {
                var e = t();
                e && e.then
                  ? e
                      .then(function () {
                        (u = !0), C();
                      })
                      ['catch'](function () {})
                  : ((u = !0), C());
              }
            }),
            e
          );
        });
        function x(e) {
          if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            var t = s(e.target, '.' + p + '-content');
            t || e.preventDefault();
          }
        }
        return (
          a['render'](
            r['createElement'](
              R,
              {
                visible: !0,
                transparent: !0,
                prefixCls: p,
                title: e,
                closable: !1,
                maskClosable: !1,
                transitionName: 'am-zoom',
                footer: O,
                maskTransitionName: 'am-fade',
                platform: c,
                wrapProps: { onTouchStart: x },
              },
              r['createElement']('div', { className: p + '-propmt-content' }, g),
            ),
            b,
          ),
          { close: C }
        );
      }
      (L.defaultProps = {
        prefixCls: 'am-modal',
        transparent: !1,
        popup: !1,
        animationType: 'slide-down',
        animated: !0,
        style: {},
        onShow: function () {},
        footer: [],
        closable: !1,
        operation: !1,
        platform: 'ios',
      }),
        (R.alert = Y),
        (R.prompt = F),
        (R.operation = V);
      t['a'] = R;
    },
  },
]);