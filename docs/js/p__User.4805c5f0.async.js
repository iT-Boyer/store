(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '0lfv': function (e, t, a) {
      'use strict';
      a.d(t, 'b', function () {
        return r;
      }),
        a.d(t, 'c', function () {
          return n;
        }),
        a.d(t, 'd', function () {
          return o;
        }),
        a.d(t, 'a', function () {
          return i;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e, t) => {
          var a = r(),
            n = Object.keys(a).find((t) => a[t].author === e) || '',
            o = a[n].apps || [];
          return o.find((e) => e.name === t);
        },
        o = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        i = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    '98vM': function (e, t, a) {},
    DIa4: function (e, t, a) {
      'use strict';
      a.r(t);
      a('mw1O');
      var r = a('nJCp'),
        n = (a('tLCQ'), a('XYLF')),
        o = (a('HVTF'), a('OT5E')),
        i = a('o0o1'),
        c = a.n(i),
        l = a('HaE+'),
        s = (a('QE6f'), a('Xo8F')),
        u = (a('ywh3'), a('98vM'), a('iCc5')),
        p = a.n(u),
        m = a('V7oC'),
        d = a.n(m),
        f = a('FYw3'),
        v = a.n(f),
        h = a('mRg0'),
        b = a.n(h),
        y = a('TSYQ'),
        g = a.n(y),
        w = a('q1tI'),
        O = a.n(w),
        x = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.size,
                    r = e.className,
                    n = e.style,
                    o = e.onClick,
                    i = g()(t, t + '-' + a, r);
                  return w['createElement']('div', { className: i, style: n, onClick: o });
                },
              },
            ]),
            t
          );
        })(w['Component']),
        E = x;
      x.defaultProps = { prefixCls: 'am-whitespace', size: 'md' };
      a('puyI');
      var S = a('xZH1'),
        j = (a('a0W9'), a('QbLZ')),
        k = a.n(j),
        C = a('YEIV'),
        N = a.n(C),
        _ = a('uJlo'),
        J = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 && (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        T = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  return w['createElement'](
                    'div',
                    { className: 'am-list-brief', style: this.props.style },
                    this.props.children,
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']),
        z = (function (e) {
          function t(e) {
            p()(this, t);
            var a = v()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (a.onClick = function (e) {
                var t = a.props,
                  r = t.onClick,
                  n = t.platform,
                  o = 'android' === n;
                if (r && o) {
                  a.debounceTimeout &&
                    (clearTimeout(a.debounceTimeout), (a.debounceTimeout = null));
                  var i = e.currentTarget,
                    c = Math.max(i.offsetHeight, i.offsetWidth),
                    l = e.currentTarget.getBoundingClientRect(),
                    s = e.clientX - l.left - i.offsetWidth / 2,
                    u = e.clientY - l.top - i.offsetWidth / 2,
                    p = { width: c + 'px', height: c + 'px', left: s + 'px', top: u + 'px' };
                  a.setState({ coverRippleStyle: p, RippleClicked: !0 }, function () {
                    a.debounceTimeout = setTimeout(function () {
                      a.setState({ coverRippleStyle: { display: 'none' }, RippleClicked: !1 });
                    }, 1e3);
                  });
                }
                r && r(e);
              }),
              (a.state = { coverRippleStyle: { display: 'none' }, RippleClicked: !1 }),
              a
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.debounceTimeout &&
                    (clearTimeout(this.debounceTimeout), (this.debounceTimeout = null));
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    a,
                    r = this,
                    n = this.props,
                    o = n.prefixCls,
                    i = n.className,
                    c = n.activeStyle,
                    l = n.error,
                    s = n.align,
                    u = n.wrap,
                    p = n.disabled,
                    m = n.children,
                    d = n.multipleLine,
                    f = n.thumb,
                    v = n.extra,
                    h = n.arrow,
                    b = n.onClick,
                    y = J(n, [
                      'prefixCls',
                      'className',
                      'activeStyle',
                      'error',
                      'align',
                      'wrap',
                      'disabled',
                      'children',
                      'multipleLine',
                      'thumb',
                      'extra',
                      'arrow',
                      'onClick',
                    ]),
                    O = (y.platform, J(y, ['platform'])),
                    x = this.state,
                    E = x.coverRippleStyle,
                    S = x.RippleClicked,
                    j = g()(
                      o + '-item',
                      i,
                      ((e = {}),
                      N()(e, o + '-item-disabled', p),
                      N()(e, o + '-item-error', l),
                      N()(e, o + '-item-top', 'top' === s),
                      N()(e, o + '-item-middle', 'middle' === s),
                      N()(e, o + '-item-bottom', 'bottom' === s),
                      e),
                    ),
                    C = g()(o + '-ripple', N()({}, o + '-ripple-animate', S)),
                    T = g()(
                      o + '-line',
                      ((t = {}), N()(t, o + '-line-multiple', d), N()(t, o + '-line-wrap', u), t),
                    ),
                    z = g()(
                      o + '-arrow',
                      ((a = {}),
                      N()(a, o + '-arrow-horizontal', 'horizontal' === h),
                      N()(a, o + '-arrow-vertical', 'down' === h || 'up' === h),
                      N()(a, o + '-arrow-vertical-up', 'up' === h),
                      a),
                    ),
                    I = w['createElement'](
                      'div',
                      k()({}, O, {
                        onClick: function (e) {
                          r.onClick(e);
                        },
                        className: j,
                      }),
                      f
                        ? w['createElement'](
                            'div',
                            { className: o + '-thumb' },
                            'string' === typeof f ? w['createElement']('img', { src: f }) : f,
                          )
                        : null,
                      w['createElement'](
                        'div',
                        { className: T },
                        void 0 !== m && w['createElement']('div', { className: o + '-content' }, m),
                        void 0 !== v && w['createElement']('div', { className: o + '-extra' }, v),
                        h && w['createElement']('div', { className: z, 'aria-hidden': 'true' }),
                      ),
                      w['createElement']('div', { style: E, className: C }),
                    ),
                    P = {};
                  return (
                    Object.keys(O).forEach(function (e) {
                      /onTouch/i.test(e) && ((P[e] = O[e]), delete O[e]);
                    }),
                    w['createElement'](
                      _['a'],
                      k()({}, P, {
                        disabled: p || !b,
                        activeStyle: c,
                        activeClassName: o + '-item-active',
                      }),
                      I,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']);
      (z.defaultProps = {
        prefixCls: 'am-list',
        align: 'middle',
        error: !1,
        multipleLine: !1,
        wrap: !1,
        platform: 'ios',
      }),
        (z.Brief = T);
      var I = z,
        P = function (e, t) {
          var a = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 && (a[r[n]] = e[r[n]]);
          }
          return a;
        },
        H = (function (e) {
          function t() {
            return (
              p()(this, t),
              v()(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            );
          }
          return (
            b()(t, e),
            d()(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.prefixCls,
                    a = e.children,
                    r = e.className,
                    n = e.style,
                    o = e.renderHeader,
                    i = e.renderFooter,
                    c = P(e, [
                      'prefixCls',
                      'children',
                      'className',
                      'style',
                      'renderHeader',
                      'renderFooter',
                    ]),
                    l = g()(t, r);
                  return w['createElement'](
                    'div',
                    k()({ className: l, style: n }, c),
                    o
                      ? w['createElement'](
                          'div',
                          { className: t + '-header' },
                          'function' === typeof o ? o() : o,
                        )
                      : null,
                    a ? w['createElement']('div', { className: t + '-body' }, a) : null,
                    i
                      ? w['createElement'](
                          'div',
                          { className: t + '-footer' },
                          'function' === typeof i ? i() : i,
                        )
                      : null,
                  );
                },
              },
            ]),
            t
          );
        })(w['Component']),
        L = H;
      (H.Item = I), (H.defaultProps = { prefixCls: 'am-list' });
      var R = a('I5X1'),
        B = a('EkL2'),
        V = a.n(B),
        F = a('bIAK'),
        W = a('diY3'),
        Y = a('0lfv'),
        M = a('n+Aq'),
        X = L.Item,
        q = S['a'].prompt,
        Q = () => {
          var e = Object(R['a'])('boxjsModel', (e) => e),
            t = Object(M['b'])(W['c'], { manual: !0 }),
            a = Object(Y['b'])();
          return e.data.usercfgs
            ? O.a.createElement(
                r['a'],
                { size: 'sm' },
                O.a.createElement(E, { size: 'lg' }),
                O.a.createElement(E, { size: 'lg' }),
                O.a.createElement(E, { size: 'lg' }),
                O.a.createElement(E, { size: 'lg' }),
                O.a.createElement(
                  n['a'],
                  null,
                  O.a.createElement(
                    n['a'].Body,
                    { className: V.a.container },
                    O.a.createElement(
                      s['a'],
                      { justify: 'center', direction: 'column', className: V.a.avatarView },
                      O.a.createElement('img', {
                        alt: '\u5934\u50cf',
                        src: e.data.usercfgs.icon || Y['a'],
                        className: V.a.avatar,
                      }),
                      O.a.createElement('span', null, e.data.usercfgs.name),
                    ),
                    O.a.createElement(E, { size: 'lg' }),
                    O.a.createElement(
                      L,
                      null,
                      O.a.createElement(
                        X,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png',
                          arrow: 'horizontal',
                          onClick: Object(l['a'])(
                            c.a.mark(function r() {
                              var n, o;
                              return c.a.wrap(function (r) {
                                while (1)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        window.loadingEvent.detail.setLoading(
                                          !0,
                                          '\u5907\u4efd\u4e2d',
                                        ),
                                        (n = [
                                          { key: 'scriptable', val: JSON.stringify(a, null, '\t') },
                                          {
                                            key: 'chavy_boxjs_cur_sessions',
                                            val: JSON.stringify(e.data.curSessions),
                                          },
                                        ]),
                                        (r.next = 4),
                                        t.run(n)
                                      );
                                    case 4:
                                      (o = r.sent),
                                        window.loadingEvent.detail.setLoading(!1, ''),
                                        o && e.setBoxJS(o);
                                    case 7:
                                    case 'end':
                                      return r.stop();
                                  }
                              }, r);
                            }),
                          ),
                        },
                        '\u5907\u4efd\u8ba2\u9605',
                      ),
                      O.a.createElement(
                        X,
                        {
                          thumb: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png',
                          onClick: () => {
                            e.data.datas.scriptable
                              ? (Object(Y['d'])(JSON.parse(e.data.datas.scriptable)),
                                o['a'].success('\u6062\u590d\u6210\u529f'))
                              : o['a'].fail('\u6682\u672a\u627e\u5230\u5907\u4efd\u8ba2\u9605');
                          },
                          arrow: 'horizontal',
                        },
                        '\u6062\u590d\u8ba2\u9605',
                      ),
                    ),
                  ),
                ),
              )
            : O.a.createElement(
                F['a'],
                null,
                O.a.createElement(
                  'div',
                  {
                    onClick: () => {
                      q(
                        'BoxJS\u57df\u540d\u8bbe\u7f6e',
                        '',
                        [
                          { text: '\u53d6\u6d88' },
                          {
                            text: '\u786e\u5b9a',
                            onPress: (function () {
                              var e = Object(l['a'])(
                                c.a.mark(function e(t) {
                                  return c.a.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          localStorage.setItem('boxjs', t),
                                            o['a'].success(
                                              '\u8bbe\u7f6e\u6210\u529f\n\u5f53\u524d BoxJS \u57df\u540d\u4e3a\uff1a'.concat(
                                                t,
                                              ),
                                            );
                                        case 2:
                                        case 'end':
                                          return e.stop();
                                      }
                                  }, e);
                                }),
                              );
                              function t(t) {
                                return e.apply(this, arguments);
                              }
                              return t;
                            })(),
                          },
                        ],
                        'default',
                        localStorage.getItem('boxjs') || 'boxjs.net',
                      );
                    },
                  },
                  'BoxJS \u8fde\u63a5\u5931\u8d25',
                  O.a.createElement(E, { size: 'lg' }),
                  O.a.createElement(
                    'span',
                    { style: { color: 'red' } },
                    ' \u70b9\u51fb\u8bbe\u7f6e BoxJS \u57df\u540d',
                  ),
                ),
              );
        };
      t['default'] = Q;
    },
    EkL2: function (e, t, a) {
      e.exports = {
        container: 'container___wXmHU',
        avatarView: 'avatarView___kr50v',
        avatar: 'avatar___2p2ju',
      };
    },
    a0W9: function (e, t, a) {},
    diY3: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return l;
      }),
        a.d(t, 'b', function () {
          return s;
        }),
        a.d(t, 'c', function () {
          return u;
        });
      var r = a('o0o1'),
        n = a.n(r),
        o = (a('HVTF'), a('OT5E')),
        i = a('HaE+'),
        c = a('9kvl'),
        l = (function () {
          var e = Object(i['a'])(
            n.a.mark(function e(t) {
              var a, r;
              return n.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(c['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((r = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (r[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(r)))
                          : o['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (n) {
                        o['a'].fail(JSON.stringify(n));
                      }
                    case 4:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        s = (function () {
          var e = Object(i['a'])(
            n.a.mark(function e() {
              var t;
              return n.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(c['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/query/boxdata',
                            ),
                          )
                        );
                      case 2:
                        return (t = e.sent), (e.prev = 3), e.abrupt('return', t);
                      case 7:
                        return (
                          (e.prev = 7),
                          (e.t0 = e['catch'](3)),
                          console.log(e.t0),
                          e.abrupt('return', !1)
                        );
                      case 11:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 7]],
              );
            }),
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        u = (function () {
          var e = Object(i['a'])(
            n.a.mark(function e(t) {
              var a;
              return n.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          Object(c['c'])(
                            'http://'.concat(
                              localStorage.getItem('boxjs') || 'boxjs.net',
                              '/api/save',
                            ),
                            { method: 'POST', data: t },
                          )
                        );
                      case 3:
                        return (
                          (a = e.sent),
                          o['a'].success('\u5907\u4efd\u6210\u529f'),
                          e.abrupt('return', a)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e['catch'](0)),
                          console.log(e.t0),
                          o['a'].fail('\u5907\u4efd\u5931\u8d25'),
                          e.abrupt('return', !1)
                        );
                      case 13:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]],
              );
            }),
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
  },
]);
