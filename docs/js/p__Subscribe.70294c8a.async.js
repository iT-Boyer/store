(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
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
          return c;
        }),
        a.d(t, 'a', function () {
          return s;
        });
      var r = () => JSON.parse(localStorage.getItem('dataSource') || '{}'),
        n = (e, t) => {
          var a = r(),
            n = Object.keys(a).find((t) => a[t].author === e) || '',
            c = a[n].apps || [];
          return c.find((e) => e.name === t);
        },
        c = (e) => localStorage.setItem('dataSource', JSON.stringify(e)),
        s = 'https://gitee.com/scriptableJS/store/raw/master/public/icon.png';
    },
    R0pf: function (e, t, a) {
      e.exports = {
        container: 'container___3WbTd',
        widgetTitle: 'widgetTitle___1Ojl9',
        icon: 'icon___38pp4',
        subList: 'subList___1NVQZ',
        'row-dragging': 'row-dragging___1TbdM',
        avatar: 'avatar___2yRWX',
        user_info: 'user_info___1pF6R',
        user_title: 'user_title___3VZaa',
        user_text: 'user_text___2-KJa',
        extra: 'extra___1Pjch',
      };
    },
    diY3: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return i;
      }),
        a.d(t, 'b', function () {
          return u;
        }),
        a.d(t, 'c', function () {
          return l;
        });
      var r = a('o0o1'),
        n = a.n(r),
        c = (a('HVTF'), a('OT5E')),
        s = a('HaE+'),
        o = a('9kvl'),
        i = (function () {
          var e = Object(s['a'])(
            n.a.mark(function e(t) {
              var a, r;
              return n.a.wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), Object(o['c'])(t, { method: 'get' });
                    case 2:
                      a = e.sent;
                      try {
                        a.scriptable
                          ? ((r = JSON.parse(localStorage.getItem('dataSource') || '{}')),
                            (r[t] = a),
                            localStorage.setItem('dataSource', JSON.stringify(r)))
                          : c['a'].fail('\u8ba2\u9605\u5730\u5740\u9519\u8bef');
                      } catch (n) {
                        c['a'].fail(JSON.stringify(n));
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
        u = (function () {
          var e = Object(s['a'])(
            n.a.mark(function e() {
              var t;
              return n.a.wrap(
                function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Object(o['c'])(
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
        l = (function () {
          var e = Object(s['a'])(
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
                          Object(o['c'])(
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
                          c['a'].success('\u5907\u4efd\u6210\u529f'),
                          e.abrupt('return', a)
                        );
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e['catch'](0)),
                          console.log(e.t0),
                          c['a'].fail('\u5907\u4efd\u5931\u8d25'),
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
    i7U8: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'CustomerIcon', function () {
          return N;
        });
      a('mw1O');
      var r = a('nJCp'),
        n = a('VTBJ'),
        c = (a('tLCQ'), a('XYLF')),
        s = a('o0o1'),
        o = a.n(s),
        i = a('HaE+'),
        u = (a('RFiq'), a('ZyfH')),
        l = a('ODXe'),
        d = (a('pYJI'), a('EIQY')),
        p = (a('QE6f'), a('Xo8F')),
        m = (a('B8GA'), a('8dL9')),
        b = a('wx14'),
        f = a('Ff2n'),
        g = (a('puyI'), a('xZH1')),
        h = a('q1tI'),
        v = a.n(h),
        O = a('wYyv'),
        j = a.n(O),
        _ = a('YJCA'),
        w = a('R0pf'),
        x = a.n(w),
        E = a('0lfv'),
        y = a('diY3'),
        S = a('bIAK'),
        k = g['a'].prompt,
        N = Object(h['forwardRef'])((e, t) => {
          var a = e.icon,
            r = Object(f['a'])(e, ['icon']);
          return v.a.createElement(
            'img',
            Object(b['a'])({ ref: t, className: x.a.icon, alt: '', src: a }, r),
          );
        }),
        I = Object(_['c'])((e) => {
          var t = e.counts;
          return v.a.createElement(m['a'], {
            style: { userSelect: 'none' },
            text: t,
            size: 'small',
          });
        }),
        J = (e) => {
          var t = e.dataSource,
            a = e.update,
            r = e.setLoading;
          return v.a.createElement(
            d['a'],
            {
              className: x.a.subList,
              autoClose: !0,
              right: [
                {
                  text: '\u66f4\u65b0',
                  onPress: () => (
                    r(!0),
                    Object(y['a'])(t.url)
                      .then(() => {
                        var e = Object(E['b'])();
                        a(e);
                      })
                      .finally(() => {
                        r(!1);
                      })
                  ),
                  style: { backgroundColor: '#77cad1', color: 'white' },
                },
                {
                  text: '\u5220\u9664',
                  onPress: () => {
                    var e = Object(E['b'])();
                    delete e[t.url], Object(E['d'])(e), a(e);
                  },
                  style: { backgroundColor: 'red', color: 'white' },
                },
              ],
              style: { marginBottom: 10, padding: '10px 0' },
            },
            v.a.createElement(
              p['a'],
              null,
              v.a.createElement('img', { className: x.a.avatar, alt: '', src: t.icon }),
              v.a.createElement(
                'div',
                null,
                v.a.createElement(
                  p['a'],
                  { className: x.a.user_info, direction: 'column', justify: 'start' },
                  v.a.createElement(
                    'div',
                    { className: x.a.user_title },
                    t.author,
                    ' \u7ec4\u4ef6',
                  ),
                  v.a.createElement('div', null, t.repo),
                  v.a.createElement('div', { className: x.a.user_text }, '@', t.author),
                ),
              ),
              v.a.createElement(I, { counts: t.counts }),
              v.a.createElement(
                'div',
                { style: { marginLeft: 'auto' } },
                v.a.createElement(
                  'a',
                  { href: t.repo, target: '_blank' },
                  v.a.createElement(N, {
                    icon: 'https://img.icons8.com/clouds/344/github.png',
                    style: { width: '3rem', height: '3rem' },
                  }),
                ),
              ),
            ),
          );
        },
        C = Object(_['b'])((e) => v.a.createElement(J, e)),
        L = Object(_['a'])((e) => {
          var t = e.children;
          return v.a.createElement('div', null, t);
        });
      t['default'] = () => {
        var e = Object(E['b'])(),
          t = v.a.useState(e),
          a = Object(l['a'])(t, 2),
          s = a[0],
          d = a[1],
          p = v.a.useState(!1),
          m = Object(l['a'])(p, 2),
          b = m[0],
          f = m[1];
        return v.a.createElement(
          r['a'],
          { className: x.a.container },
          v.a.createElement(u['a'], { toast: !0, animating: b }),
          v.a.createElement(
            c['a'],
            null,
            v.a.createElement(c['a'].Header, {
              className: x.a.widgetTitle,
              title: '\u7ec4\u4ef6\u8ba2\u9605('.concat(Object.keys(s).length, ')'),
              extra: v.a.createElement(
                'div',
                { className: x.a.extra },
                v.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/cloud-refresh.png',
                  onClick: Object(i['a'])(
                    o.a.mark(function e() {
                      var t, a, r, n;
                      return o.a.wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = Object.keys(s)), f(!0), (a = 0), (r = t);
                            case 3:
                              if (!(a < r.length)) {
                                e.next = 10;
                                break;
                              }
                              return (n = r[a]), (e.next = 7), Object(y['a'])(n);
                            case 7:
                              a++, (e.next = 3);
                              break;
                            case 10:
                              d(Object(E['b'])()), f(!1);
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                }),
                v.a.createElement(N, {
                  icon: 'https://img.icons8.com/clouds/344/add.png',
                  onClick: () =>
                    k('\u8f93\u5165\u7ec4\u4ef6\u8ba2\u9605\u5730\u5740', '', [
                      { text: '\u53d6\u6d88' },
                      {
                        text: '\u786e\u5b9a',
                        onPress: (function () {
                          var e = Object(i['a'])(
                            o.a.mark(function e(t) {
                              return o.a.wrap(function (e) {
                                while (1)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return f(!0), (e.next = 3), Object(y['a'])(t);
                                    case 3:
                                      d(Object(E['b'])()), f(!1);
                                    case 5:
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
                    ]),
                }),
              ),
            }),
            v.a.createElement(
              c['a'].Body,
              { style: { minHeight: 100 } },
              v.a.createElement(
                L,
                {
                  useDragHandle: !0,
                  helperClass: x.a['row-dragging'],
                  onSortEnd: (t) => {
                    var a = t.oldIndex,
                      r = t.newIndex,
                      n = Object.keys(s),
                      c = j()(n, a, r),
                      o = {};
                    c.forEach((t) => {
                      o[t] = e[t];
                    }),
                      Object(E['d'])(o),
                      d(o);
                  },
                },
                Object.keys(s).length
                  ? Object.keys(s).map((e, t) => {
                      var a = s[e],
                        r = Object(n['a'])(
                          Object(n['a'])({}, a),
                          {},
                          { counts: a.apps.length, url: e },
                        );
                      return v.a.createElement(C, {
                        key: e,
                        index: t,
                        dataSource: r,
                        update: d,
                        setLoading: f,
                      });
                    })
                  : v.a.createElement(
                      S['a'],
                      { style: { height: '5rem' } },
                      '\u6682\u672a\u6dfb\u52a0\u76f8\u5173\u8ba2\u9605',
                    ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
