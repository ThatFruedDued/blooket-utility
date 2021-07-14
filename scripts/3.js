(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{
  '+dMU': function (e, t, a) {
    var n = a('g9Pg');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, o);
    n.locals && (e.exports = n.locals);
  },
  '4tbd': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__mainHeader___C1SAw-camelCase{font-size:28px;margin:85px 5% 20px}.styles__mainHeader___C1SAw-camelCase,.styles__subheader___2dbpI-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a;width:90%}.styles__subheader___2dbpI-camelCase{font-size:20px;margin:20px 5% 10px}.styles__text___u52-w-camelCase{font-family:Nunito,sans-serif;font-size:16px;text-align:left;color:#3a3a3a;width:90%;margin:10px 5%}li{padding-top:2px;padding-bottom:2px}',
      ''
    ]), t.locals = {
      mainHeader: 'styles__mainHeader___C1SAw-camelCase',
      subheader: 'styles__subheader___2dbpI-camelCase',
      text: 'styles__text___u52-w-camelCase'
    };
  },
  AHt1: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), d = a('wd/R'), u = a.n(d), h = a('vDqi'), p = a.n(h), _ = a('TSYQ'), f = a.n(_), y = a('b6Qr'), g = a('anyA'), b = a('GIcp'), x = a.n(b), w = a('+dMU'), v = a.n(w), C = a('e47E'), E = a('iQ+n'), T = a('SCqF');
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function N(e, t, a, n, o, s, r) {
      try {
        var i = e[s](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(n, o);
    }
    function O(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function I(e, t) {
      return (I = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function k(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = B(e);
        if (t) {
          var o = B(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return R(this, a);
      };
    }
    function R(e, t) {
      return !t || 'object' !== S(t) && 'function' != typeof t ? A(e) : t;
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var P = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && I(e, t);
      }(l, e);
      var t, a, n, s, r, i = k(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          name: '',
          email: '',
          role: '',
          date: '',
          plan: '',
          planEnd: '',
          planRenew: !1,
          loading: !1,
          end: '',
          hasPassword: ''
        }, t.name = '', t.stripeId = '', t.here = !0, t.switchRole = t.switchRole.bind(A(t)), t.editStripe = t.editStripe.bind(A(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (s = regeneratorRuntime.mark(function e() {
            var t, a = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  (t = e.sent) && (this.setState({
                    name: t.name,
                    email: t.email,
                    role: t.role,
                    date: u()(t.dateCreated).format('dddd, MMMM Do, YYYY'),
                    hasPassword: t.hasPassword
                  }), this.name = t.name, this.stripeId = t.stripe, p.a.put('/api/users/plan', {
                    name: t.name,
                    stripeId: t.stripe
                  }).then(function (e) {
                    a.setState({
                      plan: e.data.plan,
                      planEnd: u()(e.data.planEnd).format('dddd, MMMM Do, YYYY'),
                      planRenew: e.data.planRenew
                    });
                  }).catch(function (e) {
                    console.error(e);
                  }));
                case 4:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var o = s.apply(e, t);
              function r(e) {
                N(o, a, n, r, i, 'next', e);
              }
              function i(e) {
                N(o, a, n, r, i, 'throw', e);
              }
              r(void 0);
            });
          }, function () {
            return r.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1;
          }
        },
        {
          key: 'switchRole',
          value: function () {
            var e = this;
            this.setState({ loading: !0 });
            var t = 'Teacher' === this.state.role ? 'Student' : 'Teacher';
            p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/setrole', {
              name: this.name,
              role: t
            }).then(function (a) {
              localStorage.setItem('token', a.data), e.here && e.setState({
                loading: !1,
                role: t
              });
            }).catch(function (t) {
              console.error(t), e.setState({ loading: !1 });
            });
          }
        },
        {
          key: 'editStripe',
          value: function () {
            var e = this;
            this.setState({ loading: !0 }), p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/users/stripe/billing', { stripeId: this.stripeId }).then(function (e) {
              window.open(e.data, '_self');
            }).catch(function (t) {
              console.error(t), e.setState({ loading: !1 });
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return o.a.createElement('div', { className: y.isMobile ? x.a.mBody : x.a.body }, o.a.createElement(E.a, {
              title: 'Settings | Blooket',
              desc: 'View your settings and basic information about your account. You can also request a password reset or contact the help team here.'
            }), o.a.createElement(C.a, {
              history: this.props.history,
              page: 'Settings'
            }), o.a.createElement('div', { className: x.a.profileRegularBody }, o.a.createElement('div', { className: v.a.topHeader }, 'Settings'), o.a.createElement('div', { className: v.a.mainContainer }, o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-user', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Profile')), o.a.createElement('div', { className: v.a.text }, o.a.createElement('b', null, 'Username:'), ' ', this.state.name), this.state.email.length < 60 ? o.a.createElement('div', { className: v.a.text }, o.a.createElement('b', null, 'Email:'), ' ', this.state.email) : null, o.a.createElement('div', { className: v.a.text }, o.a.createElement('b', null, 'Role:'), ' ', this.state.role), o.a.createElement('div', { className: v.a.text }, o.a.createElement('b', null, 'Joined:'), ' ', this.state.date)), o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-clipboard-list', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Plan')), o.a.createElement('div', { className: v.a.subscriptionText }, o.a.createElement('div', { className: v.a.blooketText }, 'Blooket'), o.a.createElement('div', {
              className: v.a.planText,
              style: { color: 'Starter' !== this.state.plan ? '#ff7b24' : '#0bc2cf' }
            }, this.state.plan)), 'Starter' === this.state.plan ? o.a.createElement(c.a, {
              className: v.a.upgradeButton,
              to: '/upgrade'
            }, 'Upgrade Now!') : [
              'Plus',
              'Plus Flex'
            ].includes(this.state.plan) ? o.a.createElement('div', null, o.a.createElement('div', { className: v.a.text }, o.a.createElement('b', null, 'End Date:'), ' ', this.state.planEnd), this.state.planRenew ? o.a.createElement('div', {
              className: v.a.link,
              role: 'button',
              tabIndex: 0,
              onClick: this.editStripe
            }, 'Edit Subscription') : null) : null), o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-pencil-alt', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Edit Info')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/change/name'
            }, 'Change Name')), o.a.createElement('div', null, o.a.createElement('div', {
              className: v.a.link,
              role: 'button',
              tabIndex: 0,
              onClick: this.switchRole
            }, 'Teacher' === this.state.role ? 'Switch to Student Account' : 'Switch to Teacher Account')), this.state.hasPassword ? o.a.createElement(o.a.Fragment, null, o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/forgot'
            }, 'Request Password Reset')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/change/email'
            }, 'Change Email'))) : o.a.createElement(o.a.Fragment, null, o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/add-password'
            }, 'Add Blooket Password')), o.a.createElement('div', { className: v.a.text }, o.a.createElement('u', null, 'Change Email'), ' (Add a Pasword First)')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/delete'
            }, 'Delete Account'))), o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-comments', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Social')), o.a.createElement('div', null, o.a.createElement('a', {
              className: v.a.link,
              href: 'https://twitter.com/playblooket',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, o.a.createElement('i', {
              className: 'fab fa-twitter-square',
              style: { marginRight: 7 }
            }), 'Twitter')), o.a.createElement('div', null, o.a.createElement('a', {
              className: v.a.link,
              href: 'https://www.instagram.com/playblooket',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, o.a.createElement('i', {
              className: 'fab fa-instagram-square',
              style: { marginRight: 7 }
            }), 'Instagram')), o.a.createElement('div', null, o.a.createElement('a', {
              className: v.a.link,
              href: 'https://www.facebook.com/PlayBlooket',
              target: '_blank',
              rel: 'noopener noreferrer'
            }, o.a.createElement('i', {
              className: 'fab fa-facebook-square',
              style: { marginRight: 7 }
            }), 'Facebook'))), o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-question-circle', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Support')), o.a.createElement('div', { className: v.a.text }, 'Contact us at: ', o.a.createElement('a', {
              className: v.a.link,
              href: 'mailto:contact-us@blooket.com'
            }, 'contact-us@blooket.com')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/faq'
            }, 'Frequently Asked Questions'))), o.a.createElement('div', { className: v.a.infoContainer }, o.a.createElement('div', { className: v.a.headerRow }, o.a.createElement('i', { className: f()('fas fa-lock', v.a.headerIcon) }), o.a.createElement('div', { className: v.a.header }, 'Privacy')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/privacy'
            }, 'Privacy Policy')), o.a.createElement('div', null, o.a.createElement(c.a, {
              className: v.a.link,
              to: '/terms'
            }, 'Terms of Service'))))), this.state.loading || this.state.end ? o.a.createElement(T.a, {
              text: this.state.end || 'Processing...',
              loading: this.state.loading,
              buttonOne: {
                text: 'Success!' === this.state.end ? 'Thanks!' : 'Refresh',
                click: function () {
                  return e.setState({
                    loading: !1,
                    end: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.referPop ? o.a.createElement(T.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Referrer\'s Username:',
              loading: this.state.loading,
              stringValue: this.state.referInput,
              stringChange: function (t) {
                return e.setState({ referInput: t.target.value });
              },
              onSubmit: this.onRefer,
              buttonOne: {
                text: 'Done',
                click: this.onRefer,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({ referPop: !1 });
                },
                color: 'blue'
              }
            }) : this.state.referRes ? o.a.createElement(T.a, {
              text: this.state.referRes,
              buttonOne: {
                text: 'Done',
                click: function () {
                  return e.setState({ referRes: '' });
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && O(t.prototype, a), n && O(t, n), l;
    }(o.a.Component);
    P.propTypes = {
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(g.c)(Object(m.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(s.b)({}, e);
    })(P)));
  },
  BzYM: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), d = a('vDqi'), u = a.n(d), h = a('TSYQ'), p = a.n(h), _ = a('GF7F'), f = a.n(_), y = a('cpGi'), g = a('b6Qr'), b = a('wd/R'), x = a.n(b), w = a('ow7w'), v = a('X4TR'), C = a('g4U8'), E = a.n(C), T = a('GIcp'), S = a.n(T), N = a('e47E'), O = a('iQ+n'), I = a('9OFe'), k = a('DoX5'), R = a('anyA'), A = a('bNl8'), B = a('Tg08'), P = a('e/rn'), L = a('6GvE'), D = a('TN+F');
    function j(e) {
      return (j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function U(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], n = !0, o = !1, s = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(n = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); n = !0);
        } catch (e) {
          o = !0, s = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (o)
              throw s;
          }
        }
        return a;
      }(e, t) || M(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function F(e) {
      return function (e) {
        if (Array.isArray(e))
          return K(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || M(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function M(e, t) {
      if (e) {
        if ('string' == typeof e)
          return K(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? K(e, t) : void 0;
      }
    }
    function K(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function Y(e, t, a, n, o, s, r) {
      try {
        var i = e[s](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(n, o);
    }
    function q(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function z(e, t) {
      return (z = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function H(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = V(e);
        if (t) {
          var o = V(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return G(this, a);
      };
    }
    function G(e, t) {
      return !t || 'object' !== j(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function V(e) {
      return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var W = function (e, t) {
        return t.uses - e.uses;
      }, Q = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && z(e, t);
        }(l, e);
        var t, a, n, s, r, i = H(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            ready: !1,
            name: '',
            mostUsedBlook: 'Light Blue',
            wins: 0,
            topFives: 0,
            totalPoints: 0,
            racingProgress: 0,
            playersDefeated: 0,
            correctAnswers: 0,
            gamesPlayed: 0,
            numUnlocks: 0,
            totalCash: 0,
            upgrades: 0,
            showdownWins: 0,
            totalTokens: 0,
            totalGold: 0,
            totalCrypto: 0,
            tokensAvailable: 0,
            timeLeft: '',
            blookUsage: [],
            blookChartConfig: {},
            gameHistory: [],
            chartConfig: {}
          }, t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (s = regeneratorRuntime.mark(function e() {
              var t, a, n = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return t = Object(D.i)('name'), this.here = !0, e.next = 4, this.props.user.getData();
                  case 4:
                    if (a = e.sent) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 7:
                    u.a.get('/api/users', { params: { name: t || a.name } }).then(function (e) {
                      if (e.data) {
                        var t = e.data.gameHistory.slice(Math.max(e.data.gameHistory.length - 10, 0), e.data.gameHistory.length), a = F(t);
                        a.reverse();
                        var o = 'Light Blue', s = F(Object.entries(e.data.blookUsage).map(function (e) {
                            var t = U(e, 2);
                            return {
                              name: t[0],
                              uses: t[1]
                            };
                          }));
                        s.sort(W), s.length > 0 && (o = s[0].name), n.here && n.setState({
                          ready: !0,
                          name: e.data.name,
                          mostUsedBlook: o,
                          wins: e.data.wins,
                          topFives: e.data.topFives,
                          totalPoints: e.data.classicPoints,
                          racingProgress: e.data.racingProgress,
                          playersDefeated: e.data.playersDefeated,
                          correctAnswers: e.data.correctAnswers,
                          gamesPlayed: e.data.gamesPlayed,
                          numUnlocks: e.data.numUnlocks,
                          totalCash: e.data.totalCash,
                          upgrades: e.data.upgrades,
                          showdownWins: e.data.showdownWins,
                          totalTokens: e.data.totalTokens,
                          totalGold: e.data.totalGold,
                          totalCrypto: e.data.totalCrypto,
                          tokensAvailable: x()(e.data.lastTokenDay).isSame(x.a.utc().startOf('day'), 'd') ? e.data.tokensAvailable : 500,
                          timeLeft: x()(x.a.utc().startOf('day').diff(x.a.utc())).format('HH:mm'),
                          gameHistory: a,
                          chartConfig: {
                            chart: {
                              borderRadius: 5,
                              height: 385
                            },
                            colors: ['#0bc2cf'],
                            title: {
                              text: 0 === t.length ? 'No Recent Games' : 1 === t.length ? 'Last Game' : 'Last '.concat(t.length, ' Games'),
                              style: {
                                fontFamily: 'Nunito, sans-serif',
                                fontSize: '34px',
                                fontWeight: 'bold'
                              }
                            },
                            plotOptions: {
                              line: {
                                lineWidth: 5,
                                marker: { radius: 7 }
                              }
                            },
                            yAxis: {
                              title: {
                                text: 'Place',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '24px',
                                  color: '#3a3a3a'
                                }
                              },
                              labels: {
                                align: 'center',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '18px',
                                  color: '#3a3a3a'
                                }
                              },
                              allowDecimals: !1,
                              tickPositioner: function () {
                                for (var e = [], a = 1, n = Math.ceil(Math.max(Math.max.apply(Math, F(t.map(function (e) {
                                      return e.place;
                                    }))) - 2, 9) / 10); a - n <= Math.max(Math.max.apply(Math, F(t.map(function (e) {
                                    return e.place;
                                  }))) - 1, 9); a += n)
                                  e.push(a);
                                return e;
                              },
                              min: 1,
                              softMax: 10,
                              reversed: !0,
                              gridLineColor: '#D9D9D9',
                              tickColor: '#D9D9D9'
                            },
                            xAxis: {
                              title: {
                                text: 'Games Ago',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '24px',
                                  color: '#3a3a3a'
                                }
                              },
                              labels: {
                                align: 'center',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '18px',
                                  color: '#3a3a3a'
                                }
                              },
                              tickColor: '#D9D9D9',
                              allowDecimals: !1,
                              tickPixelInterval: 20,
                              min: 1,
                              softMax: t.length,
                              reversed: !0
                            },
                            series: [{
                                data: a.map(function (e) {
                                  return [
                                    t.length - t.indexOf(e),
                                    e.place
                                  ];
                                }),
                                type: 'line'
                              }],
                            tooltip: { enabled: !1 },
                            credits: { enabled: !1 },
                            legend: { enabled: !1 }
                          },
                          blookUsage: s,
                          blookChartConfig: s.length > 0 ? {
                            chart: {
                              type: 'bar',
                              height: 50 * s.length + 150
                            },
                            title: {
                              text: 'Blook Usage',
                              style: {
                                fontFamily: 'Nunito, sans-serif',
                                fontSize: '34px',
                                fontWeight: 'bold'
                              }
                            },
                            xAxis: {
                              categories: F(s.map(function (e) {
                                return e.name;
                              })),
                              labels: {
                                useHTML: !0,
                                formatter: function (e) {
                                  return '<img src="'.concat(w.a[e.value], '" style="height:43.7px;width:38px;margin-top:3.15px;margin-left:4px;margin-right:4px;" />');
                                }
                              },
                              title: { text: null },
                              tickColor: '#D9D9D9'
                            },
                            yAxis: {
                              min: 0,
                              allowDecimals: !1,
                              gridLineWidth: 2,
                              gridLineColor: '#D9D9D9',
                              tickColor: '#D9D9D9',
                              max: s[0].uses,
                              title: {
                                text: 'Uses',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '24px',
                                  color: '#3a3a3a'
                                }
                              },
                              labels: {
                                overflow: 'justify',
                                align: 'center',
                                style: {
                                  fontFamily: 'Nunito, sans-serif',
                                  fontSize: '18px',
                                  color: '#3a3a3a'
                                }
                              }
                            },
                            series: [{
                                type: 'bar',
                                data: F(s.map(function (e) {
                                  return {
                                    name: e.name,
                                    y: e.uses,
                                    pointWidth: 30,
                                    color: v.a[e.name]
                                  };
                                }))
                              }],
                            tooltip: { enabled: !1 },
                            credits: { enabled: !1 },
                            legend: { enabled: !1 }
                          } : {}
                        }, function () {
                          n.timeInterval = setInterval(function () {
                            n.setState({ timeLeft: x()(x.a.utc().startOf('day').diff(x.a.utc())).format('HH:mm') });
                          }, 60000);
                        });
                      }
                    }).catch(function (e) {
                      console.error(e);
                    });
                  case 8:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, n) {
                var o = s.apply(e, t);
                function r(e) {
                  Y(o, a, n, r, i, 'next', e);
                }
                function i(e) {
                  Y(o, a, n, r, i, 'throw', e);
                }
                r(void 0);
              });
            }, function () {
              return r.apply(this, arguments);
            })
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.here = !1, clearInterval(this.timeInterval);
            }
          },
          {
            key: 'render',
            value: function () {
              return o.a.createElement('div', { className: g.isMobile ? E.a.mBody : E.a.body }, o.a.createElement(O.a, { title: 'My Stats | Blooket' }), o.a.createElement(N.a, {
                history: this.props.history,
                page: 'Stats'
              }), o.a.createElement('div', { className: S.a.regularBody }, this.state.ready ? o.a.createElement('div', { className: E.a.fullContainer }, o.a.createElement('div', { className: E.a.headerRow }, o.a.createElement('div', { className: E.a.headerContainer }, o.a.createElement('div', {
                className: E.a.blookImage,
                'data-tip': 'Most Used Blook'
              }, o.a.createElement(k.a, {
                name: this.state.mostUsedBlook,
                className: E.a.blookImage
              })), o.a.createElement('div', { className: E.a.nameText }, this.state.name))), o.a.createElement('div', { className: E.a.buttonRow }, o.a.createElement(c.a, {
                to: '/play',
                className: E.a.linkButton
              }, o.a.createElement('i', { className: p()(E.a.linkIcon, 'fas fa-play') }), o.a.createElement('div', { style: { width: '100%' } }, o.a.createElement('b', null, 'Have a Game ID?'), o.a.createElement('br', null), 'Join a Game')), o.a.createElement(c.a, {
                to: '/market',
                className: E.a.linkButton,
                style: { backgroundColor: '#ffa31e' }
              }, o.a.createElement('i', { className: p()(E.a.linkIcon, 'fas fa-store') }), o.a.createElement('div', { style: { width: '100%' } }, 'Unlock New Blooks')), o.a.createElement(c.a, {
                to: '/blooks',
                className: E.a.linkButton,
                style: { backgroundColor: '#9467bd' }
              }, o.a.createElement('i', { className: p()(E.a.linkIcon, 'fas fa-suitcase') }), o.a.createElement('div', { style: { width: '100%' } }, 'Manage Your Blooks')), o.a.createElement('a', {
                className: E.a.linkButton,
                href: 'https://discord.gg/Xrj8rfZZZc',
                target: '_blank',
                rel: 'noopener noreferrer',
                style: { backgroundColor: '#738adb' }
              }, o.a.createElement('i', { className: p()(E.a.linkIcon, 'fab fa-discord') }), o.a.createElement('div', { style: { width: '100%' } }, 'Join Our Student Discord'))), o.a.createElement('div', { className: E.a.statsContainer }, o.a.createElement(y.a, {
                place: 'top',
                effect: 'solid',
                className: E.a.tooltip
              }), o.a.createElement(I.a, {
                name: 'Wins',
                num: this.state.wins,
                color: '#3378ff',
                tip: '1st Place Finishes in Any Game Mode'
              }), o.a.createElement(I.a, {
                name: 'Top 5s',
                num: this.state.topFives,
                color: '#ffa31e',
                tip: 'Top 5 Finishes in Any Game Mode'
              }), o.a.createElement(I.a, {
                name: 'Total Points',
                num: this.state.totalPoints,
                color: '#0bc2cf',
                tip: 'Total Points Earned in Classic'
              }), o.a.createElement(I.a, {
                name: 'Racing Progress',
                num: this.state.racingProgress,
                color: 'rgb(255, 102, 102)',
                tip: 'Total Correct Answers in Racing'
              }), o.a.createElement(I.a, {
                name: 'Total Cash',
                num: this.state.totalCash,
                color: 'rgb(0, 207, 119',
                isCash: !0,
                tip: 'Total Cash at the end of Factory Games'
              }), o.a.createElement(I.a, {
                name: 'Players Defeated',
                num: this.state.playersDefeated,
                color: '#ff462b',
                tip: 'Players You\'ve Placed Ahead of in Any Game Mode'
              }), o.a.createElement(I.a, {
                name: 'Correct Answers',
                num: this.state.correctAnswers,
                color: '#4bc22e',
                tip: 'Total Correct Answers in Any Game Mode'
              }), o.a.createElement(I.a, {
                name: 'Games Played',
                num: this.state.gamesPlayed,
                color: 'rgb(163, 29, 29)',
                tip: 'Total Games Played in Any Game Mode'
              }), o.a.createElement(I.a, {
                name: 'Factory Upgrades',
                num: this.state.upgrades,
                color: 'rgb(154, 73, 170)',
                tip: 'Total Times You\'ve Upgraded Blooks in Factory'
              }), o.a.createElement(I.a, {
                name: 'Showdown Wins',
                num: this.state.showdownWins,
                color: 'rgb(128, 128, 128)',
                tip: 'Wins in Showdowns during Battle Royale'
              }), o.a.createElement(I.a, {
                name: 'Total Crypto',
                num: this.state.totalCrypto,
                color: 'rgba(128, 255, 128, 0.8)',
                tip: 'Total Crypto at the end of Crypto Hack Games'
              }), o.a.createElement(I.a, {
                name: 'Total Gold',
                num: this.state.totalGold,
                color: '#f5b328',
                tip: 'Total Gold at the end of Gold Quest Games'
              }), o.a.createElement(I.a, {
                name: 'Daily Tokens Available',
                num: this.state.tokensAvailable,
                color: '#996633',
                tip: 'Remaining Tokens before reaching Daily Limit'
              }), o.a.createElement(I.a, {
                name: 'Time Before Reset',
                text: this.state.timeLeft,
                color: '#4d79ff',
                tip: 'Time before Daily Token Limit resets'
              }), o.a.createElement(I.a, {
                name: 'Total Tokens',
                num: this.state.totalTokens,
                color: 'rgb(255, 204, 0)',
                tip: 'Total Tokens Earned at Any Time'
              }), o.a.createElement(I.a, {
                name: 'Blooks Unlocked',
                num: this.state.numUnlocks,
                color: 'rgb(153, 255, 51)',
                tip: 'Total Unique Blooks Unlocked in the Market'
              })), o.a.createElement('div', { className: E.a.historyRow }, o.a.createElement('div', { className: E.a.historyContainer }, o.a.createElement('div', { className: p()(E.a.historyScrollBox, E.a.historyScrollbar) }, this.state.gameHistory.map(function (e, t) {
                return o.a.createElement('div', { key: t }, o.a.createElement('div', { className: E.a.playerContainer }, o.a.createElement('div', { className: E.a.playerPlaceText }, e.place), o.a.createElement('div', { className: E.a.playerSuperPlaceText }, Object(D.g)(e.place)), o.a.createElement(k.a, {
                  name: e.blookUsed,
                  className: E.a.blookBox
                }), o.a.createElement('div', { className: E.a.playerNameText }, e.name), void 0 !== e.candy ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.v)(e.candy)), o.a.createElement('img', {
                  src: A.a,
                  alt: 'Candy',
                  className: E.a.candyImg,
                  draggable: !1
                })) : void 0 !== e.gold ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.v)(e.gold)), o.a.createElement('img', {
                  src: B.a,
                  alt: 'Gold',
                  className: E.a.candyImg,
                  style: { height: '40%' },
                  draggable: !1
                })) : void 0 !== e.toys ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.v)(e.toys)), o.a.createElement('img', {
                  src: P.a,
                  alt: 'Toy',
                  className: E.a.candyImg,
                  style: { height: '55%' },
                  draggable: !1
                })) : void 0 !== e.shamrocks ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.v)(e.shamrocks)), o.a.createElement('img', {
                  src: L.a,
                  alt: 'Shamrock',
                  className: E.a.candyImg,
                  draggable: !1
                })) : void 0 !== e.snow ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.v)(e.snow)), o.a.createElement('i', { className: p()(E.a.snowIcon, 'fas fa-snowflake') })) : void 0 !== e.cash ? o.a.createElement('div', {
                  className: E.a.pointsText,
                  style: { marginRight: 10 }
                }, '$'.concat(Object(D.v)(e.cash))) : void 0 !== e.crypto ? o.a.createElement('div', {
                  className: E.a.pointsText,
                  style: { marginRight: 10 }
                }, '\u20BF '.concat(Object(D.v)(e.crypto))) : void 0 !== e.classicPoints ? o.a.createElement('div', {
                  className: E.a.pointsText,
                  style: { marginRight: 10 }
                }, Object(D.v)(e.classicPoints)) : void 0 !== e.wins ? o.a.createElement('div', {
                  className: E.a.pointsText,
                  style: { marginRight: 10 }
                }, ''.concat(e.wins, ' ').concat(1 === e.wins ? 'Win' : 'Wins')) : void 0 !== e.result ? o.a.createElement('div', {
                  className: E.a.pointsText,
                  style: { marginRight: 10 }
                }, e.result) : void 0 !== e.guests ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.n)(e.guests)), o.a.createElement('i', { className: p()(E.a.snowIcon, 'fas fa-users') })) : void 0 !== e.dmg ? o.a.createElement('div', { className: E.a.statContainer }, o.a.createElement('div', { className: E.a.candyText }, Object(D.n)(e.dmg)), o.a.createElement('i', { className: p()(E.a.snowIcon, 'fas fa-splotch') })) : o.a.createElement('div', { className: E.a.scoreRow }, o.a.createElement('div', { className: E.a.pointsText }, ''.concat(Object(D.n)(e.points), ' - ')), o.a.createElement('div', { className: E.a.scoreText }, e.blooks))));
              }))), o.a.createElement('div', { className: E.a.chartContainer }, o.a.createElement(f.a, { config: this.state.chartConfig }))), o.a.createElement('div', { className: E.a.blookUsageChartContainer }, this.state.blookUsage.length > 0 ? o.a.createElement(f.a, { config: this.state.blookChartConfig }) : o.a.createElement('div', { className: E.a.noBlookText }, 'No Blook Usage Yet'))) : null));
            }
          }
        ]) && q(t.prototype, a), n && q(t, n), l;
      }(o.a.Component);
    Q.propTypes = {
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(R.c)(Object(m.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(s.b)({}, e);
    })(Q)));
  },
  KZLo: function (e, t, a) {
    var n = a('qFTt');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, o);
    n.locals && (e.exports = n.locals);
  },
  RD5O: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__fullContainer___3ZbaR-camelCase{display:flex;flex-direction:column;align-items:center;width:100%;max-width:1366px;margin:0 auto 10px}.styles__headerRow___1DbJG-camelCase{margin:0 auto;width:90%}.styles__headerContainer___31W0V-camelCase,.styles__headerRow___1DbJG-camelCase{display:flex;flex-direction:row}.styles__headerContainer___31W0V-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:calc(100% - 50px);padding:5px 25px;height:100px;margin:25px auto 0;align-items:center}.styles__blookImage___3YpFr-camelCase{height:95px;width:82.7px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___20cZh-camelCase{color:#3a3a3a;text-align:left;font-size:62px;padding:0 25px;font-family:Nunito,sans-serif;font-weight:700;word-break:break-word;display:inline-block}.styles__buttonRow___RNQ3m-camelCase{flex-flow:row wrap;justify-content:space-between;margin:20px auto 0;width:90%}.styles__buttonRow___RNQ3m-camelCase,.styles__linkButton___2j5h3-camelCase{display:flex;align-items:center}.styles__linkButton___2j5h3-camelCase{flex-direction:row;flex:1;align-self:stretch;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;color:#fff;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;padding:7px 10px;min-width:180px;margin:7px;font-size:24px;line-height:27px;text-align:center;transition:.2s}.styles__linkButton___2j5h3-camelCase:focus,.styles__linkButton___2j5h3-camelCase:hover{transform:scale(.97)}.styles__linkIcon___1TyH4-camelCase{margin-right:10px;margin-left:5px;font-size:40px;width:68px}.styles__totalCandy___1DbN7-camelCase{margin:10px auto;width:65%;max-width:90%;font-size:54px;background-color:#1a1a1a;box-shadow:0 0 8px 3px #e57e25;border-radius:5px;color:#fff;text-decoration:none;text-shadow:2px 2px 8px grey;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;text-align:center;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:5px 0;outline:none;cursor:pointer;user-select:none;transition:.2s}.styles__totalCandy___1DbN7-camelCase:hover{transform:scale(.97)}.styles__candyBlook___yxrnF-camelCase{height:64px;margin:0 10px 2px}.styles__candyRow___1Qd09-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__totalCandyImg___2Lq7C-camelCase{width:32px;margin-left:7px}@media only screen and (max-width:800px){.styles__totalCandy___1DbN7-camelCase{font-size:26px;width:90%}.styles__totalCandyImg___2Lq7C-camelCase{width:26px}.styles__headerContainer___31W0V-camelCase{height:auto;margin:25px auto 0;padding:5px 25px;display:flex;flex-direction:column;align-items:center}.styles__blookImage___3YpFr-camelCase{margin:15px auto 10px;height:120px}.styles__nameText___20cZh-camelCase{text-align:center;font-size:36px;line-height:38px;margin:5px auto}.styles__linkButton___2j5h3-camelCase{width:calc(48% - 30px);font-size:22px;line-height:25px}.styles__linkIcon___1TyH4-camelCase{font-size:28px;width:40px}}@media only screen and (max-width:600px){.styles__linkButton___2j5h3-camelCase{width:calc(100% - 20px);font-size:22px;line-height:25px}.styles__linkIcon___1TyH4-camelCase{font-size:28px;width:40px}.styles__candyBlook___yxrnF-camelCase{opacity:0}}.styles__statsContainer___3p3AF-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:90%;margin:15px 5% 20px}.styles__pointsColumn___295Pn-camelCase{display:flex;flex-direction:column;margin:0;width:100%;height:250px}.styles__historyRow___1IM9w-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:90%;margin:0 5%}.styles__chartContainer___13AFl-camelCase{width:545px;height:385px;padding-top:5px;padding-right:15px}.styles__chartContainer___13AFl-camelCase,.styles__historyContainer___1CoOh-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:0 10px 30px}.styles__historyContainer___1CoOh-camelCase{width:560px;height:390px}.styles__historyScrollBox___3ckis-camelCase{display:flex;flex-direction:column;align-items:center;overflow-x:hidden;width:520px;height:350px;margin:20px}.styles__historyScrollbar___1gEyo-camelCase::-webkit-scrollbar{width:8px}.styles__historyScrollbar___1gEyo-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__historyScrollbar___1gEyo-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__playerContainer___1jpT0-camelCase{height:50px;width:480px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;margin:10px 40px}.styles__playerPlaceText___3G1id-camelCase{padding-left:5px;min-width:40px;line-height:50px;font-size:36px;text-align:right}.styles__playerPlaceText___3G1id-camelCase,.styles__playerSuperPlaceText___1I7ga-camelCase{color:#3a3a3a;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__playerSuperPlaceText___1I7ga-camelCase{text-align:left;width:22px;font-size:18px;margin-top:4px;margin-left:1px}.styles__blookBox___2Qv15-camelCase{margin-left:10px;height:43.7px;width:38px;margin-top:3.15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__scoreRow___1AuB2-camelCase{display:flex;flex-direction:row;align-items:center}.styles__playerNameText___3MaOz-camelCase{font-weight:700;color:#3a3a3a;margin-left:12px;line-height:50px;font-size:28px;width:205px;text-overflow:ellipsis;overflow:hidden;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__statContainer___quy40-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__candyText___1sq60-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__snowIcon___15ZS2-camelCase{font-size:24px;color:#3a3a3a}.styles__candyImg___3ftkl-camelCase{height:65%;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__pointsText___2S77D-camelCase{font-size:28px;color:#3a3a3a;line-height:50px;text-align:right;margin-right:5px;overflow:hidden}.styles__pointsText___2S77D-camelCase,.styles__scoreText___1K7RZ-camelCase{font-weight:700;font-family:Nunito,sans-serif}.styles__scoreText___1K7RZ-camelCase{background-color:#646464;border-radius:4px;color:#fff;text-align:center;width:38px;height:38px;line-height:40px;font-size:24px;margin:6px 10px 6px 5px}@media only screen and (max-width:600px){.styles__chartContainer___13AFl-camelCase,.styles__historyContainer___1CoOh-camelCase{width:330px}.styles__historyScrollBox___3ckis-camelCase{width:310px;margin:20px 10px}.styles__playerContainer___1jpT0-camelCase{width:280px;margin:10px 20px}.styles__playerNameText___3MaOz-camelCase{opacity:0;width:10px}}.styles__blookUsageChartContainer___8t-EJ-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:65%;min-width:535px;padding:5px 15px 0 10px;margin:10px auto 50px}@media only screen and (max-width:600px){.styles__blookUsageChartContainer___8t-EJ-camelCase{min-width:305px}.styles__discordLink___2kY4M-camelCase{flex-direction:column;text-align:center;font-size:34px}.styles__discordIcon___3c-GT-camelCase{font-size:68px;margin:20px auto}}.styles__noBlookText___2F03D-camelCase{color:#3a3a3a;text-align:center;font-size:40px;font-weight:700;line-height:100px}.styles__noBlookText___2F03D-camelCase,.styles__tooltip___2OBwb-camelCase{font-family:Nunito,sans-serif}.styles__tooltip___2OBwb-camelCase{font-size:15px;padding:6px 13px}',
      ''
    ]), t.locals = {
      fullContainer: 'styles__fullContainer___3ZbaR-camelCase',
      headerRow: 'styles__headerRow___1DbJG-camelCase',
      headerContainer: 'styles__headerContainer___31W0V-camelCase',
      blookImage: 'styles__blookImage___3YpFr-camelCase',
      nameText: 'styles__nameText___20cZh-camelCase',
      buttonRow: 'styles__buttonRow___RNQ3m-camelCase',
      linkButton: 'styles__linkButton___2j5h3-camelCase',
      linkIcon: 'styles__linkIcon___1TyH4-camelCase',
      totalCandy: 'styles__totalCandy___1DbN7-camelCase',
      candyBlook: 'styles__candyBlook___yxrnF-camelCase',
      candyRow: 'styles__candyRow___1Qd09-camelCase',
      totalCandyImg: 'styles__totalCandyImg___2Lq7C-camelCase',
      statsContainer: 'styles__statsContainer___3p3AF-camelCase',
      pointsColumn: 'styles__pointsColumn___295Pn-camelCase',
      historyRow: 'styles__historyRow___1IM9w-camelCase',
      chartContainer: 'styles__chartContainer___13AFl-camelCase',
      historyContainer: 'styles__historyContainer___1CoOh-camelCase',
      historyScrollBox: 'styles__historyScrollBox___3ckis-camelCase',
      historyScrollbar: 'styles__historyScrollbar___1gEyo-camelCase',
      playerContainer: 'styles__playerContainer___1jpT0-camelCase',
      playerPlaceText: 'styles__playerPlaceText___3G1id-camelCase',
      playerSuperPlaceText: 'styles__playerSuperPlaceText___1I7ga-camelCase',
      blookBox: 'styles__blookBox___2Qv15-camelCase',
      scoreRow: 'styles__scoreRow___1AuB2-camelCase',
      playerNameText: 'styles__playerNameText___3MaOz-camelCase',
      statContainer: 'styles__statContainer___quy40-camelCase',
      candyText: 'styles__candyText___1sq60-camelCase',
      snowIcon: 'styles__snowIcon___15ZS2-camelCase',
      candyImg: 'styles__candyImg___3ftkl-camelCase',
      pointsText: 'styles__pointsText___2S77D-camelCase',
      scoreText: 'styles__scoreText___1K7RZ-camelCase',
      blookUsageChartContainer: 'styles__blookUsageChartContainer___8t-EJ-camelCase',
      discordLink: 'styles__discordLink___2kY4M-camelCase',
      discordIcon: 'styles__discordIcon___3c-GT-camelCase',
      noBlookText: 'styles__noBlookText___2F03D-camelCase',
      tooltip: 'styles__tooltip___2OBwb-camelCase'
    };
  },
  WeON: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mf+E'), m = a('2iEm'), d = a('wIs1'), u = a('vDqi'), h = a.n(u), p = a('TSYQ'), _ = a.n(p), f = a('cpGi'), y = a('JeI0'), g = a.n(y), b = a('wd/R'), x = a.n(b), w = a('b6Qr'), v = a('EEzQ'), C = a('GIcp'), E = a.n(C), T = a('KZLo'), S = a.n(T), N = a('e47E'), O = a('iQ+n'), I = a('SCqF'), k = a('I0uU'), R = a('anyA'), A = a('TN+F');
    function B(e) {
      return (B = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function P(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function L(e) {
      return function (e) {
        if (Array.isArray(e))
          return D(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return D(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return D(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function D(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function j(e, t, a, n, o, s, r) {
      try {
        var i = e[s](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(n, o);
    }
    function U(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (n, o) {
          var s = e.apply(t, a);
          function r(e) {
            j(s, n, o, r, i, 'next', e);
          }
          function i(e) {
            j(s, n, o, r, i, 'throw', e);
          }
          r(void 0);
        });
      };
    }
    function F(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function M(e, t) {
      return (M = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function K(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = z(e);
        if (t) {
          var o = z(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return Y(this, a);
      };
    }
    function Y(e, t) {
      return !t || 'object' !== B(t) && 'function' != typeof t ? q(e) : t;
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function z(e) {
      return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var H = function (e, t) {
        return e.number - t.number;
      }, G = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && M(e, t);
        }(i, e);
        var t, a, n, s, r = K(i);
        function i(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, i), (t = r.call(this, e)).state = {
            game: {
              title: '',
              author: '',
              desc: '',
              id: t.props.match.params.id || '',
              private: !1,
              questions: [],
              coverImage: {}
            },
            date: '',
            playCount: 0,
            favoriteCount: 0,
            isVerified: !1,
            favorited: !1,
            name: '',
            showingAnswers: [],
            hidingAnswers: [],
            reporting: !1,
            loadingReport: !1,
            report: '',
            copying: !1,
            canCopy: !1,
            loadingCopy: !1,
            ready: !1,
            deletePop: !1,
            loadingDelete: !1
          }, t.onShowAnswers = t.onShowAnswers.bind(q(t)), t.onHost = t.onHost.bind(q(t)), t.onSolo = t.onSolo.bind(q(t)), t.onFavorite = t.onFavorite.bind(q(t)), t.onReport = t.onReport.bind(q(t)), t.onCopy = t.onCopy.bind(q(t)), t.onCopyConfirm = t.onCopyConfirm.bind(q(t)), t.onDelete = t.onDelete.bind(q(t)), t.stripeId = '', t.loading = !1, t.here = !0, t;
        }
        return t = i, (a = [
          {
            key: 'componentDidMount',
            value: (s = U(regeneratorRuntime.mark(function e() {
              var t, a, n, o, s;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return o = function () {
                      return (o = U(regeneratorRuntime.mark(function e(n, o) {
                        var s;
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch (e.prev = e.next) {
                            case 0:
                              return s = [
                                h.a.get('/api/games', { params: { gameId: t } }).then(function (e) {
                                  var s = L(e.data.questions);
                                  s.sort(H), a.here && a.setState({
                                    game: {
                                      title: e.data.title,
                                      author: e.data.author,
                                      desc: e.data.desc,
                                      id: t,
                                      questions: s,
                                      private: e.data.private,
                                      coverImage: e.data.coverImage
                                    },
                                    date: x()(e.data.date).fromNow(),
                                    playCount: e.data.playCount,
                                    favoriteCount: e.data.favoriteCount,
                                    isVerified: e.data.verified,
                                    name: n,
                                    email: o,
                                    ready: !0
                                  });
                                }).catch(function (e) {
                                  console.error(e);
                                }),
                                h.a.get('/api/users/favorited', {
                                  params: {
                                    name: n,
                                    id: t
                                  }
                                }).then(function (e) {
                                  a.here && a.setState({ favorited: e.data });
                                }).catch(function (e) {
                                  console.error(e);
                                })
                              ], e.next = 3, Promise.all(s);
                            case 3:
                              if (a.here) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt('return');
                            case 5:
                              a.setState({ ready: !0 });
                            case 6:
                            case 'end':
                              return e.stop();
                            }
                        }, e);
                      }))).apply(this, arguments);
                    }, n = function (e, t) {
                      return o.apply(this, arguments);
                    }, this.intervals = [], t = this.props.match.params.id, a = this, e.next = 7, this.props.user.getData();
                  case 7:
                    (s = e.sent) ? (this.setState({ name: s.name }), this.stripeId = s.stripe, n(s.name, s.email)) : this.props.history.push('/login');
                  case 9:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function () {
              return s.apply(this, arguments);
            })
          },
          {
            key: 'onComponentWillUnmount',
            value: function () {
              this.here = !1, this.intervals && this.intervals.forEach(function (e) {
                return clearInterval(e);
              });
            }
          },
          {
            key: 'onShowAnswers',
            value: function (e) {
              var t = this, a = L(this.state.showingAnswers), n = L(this.state.hidingAnswers), o = a.indexOf(e);
              -1 === o ? a.push(e) : (n.push(e), a.splice(o, 1), this.intervals.push(setTimeout(function () {
                var a = (n = L(t.state.hidingAnswers)).indexOf(e);
                n.splice(a, 1), t.setState({ hidingAnswers: n });
              }, 400))), this.setState({
                showingAnswers: a,
                hidingAnswers: n
              });
            }
          },
          {
            key: 'onFavorite',
            value: function () {
              var e = this;
              this.loading || (this.loading = !0, h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/users/updatefavorites', {
                id: this.props.match.params.id,
                isUnfavoriting: this.state.favorited,
                name: this.state.name
              }).then(function () {
                e.here && e.setState({
                  favorited: !e.state.favorited,
                  favoriteCount: e.state.favorited ? e.state.favoriteCount - 1 : e.state.favoriteCount + 1
                }, function () {
                  e.loading = !1;
                });
              }).catch(function (t) {
                console.error(t), e.loading = !1;
              }));
            }
          },
          {
            key: 'onHost',
            value: function () {
              this.loading || JSON.parse(localStorage.getItem('prefs')).essentialPatches ? (this.loading = !0, window.navTo('/host?id='.concat(this.state.game.id))) : (this.loading = !0, window.open('/host?id='.concat(this.state.game.id), '_blank').focus(), window.location.reload());
            }
          },
          {
            key: 'onSolo',
            value: function () {
              this.loading || JSON.parse(localStorage.getItem('prefs')).essentialPatches ? (this.loading = !0, window.navTo('/solo?id='.concat(this.state.game.id))) : (this.loading = !0, this.state.game.id && window ? (window.open('/solo?id='.concat(this.state.game.id), '_blank').focus(), window.location.reload()) : this.loading = !1);
            }
          },
          {
            key: 'onReport',
            value: function (e) {
              var t = this;
              this.loading || (this.loading = !0, this.state.game.id ? e && !this.state.isVerified ? (this.setState({ loadingReport: !0 }), h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.post('/api/reports', { id: this.state.game.id }).then(function () {
                t.here && (t.setState({
                  reporting: !1,
                  loadingReport: !1,
                  report: ''
                }), t.loading = !1);
              }).catch(function (e) {
                console.error(e);
              })) : (this.loading = !1, this.setState({
                reporting: !1,
                loadingReport: !1
              })) : this.loading = !1);
            }
          },
          {
            key: 'onCopy',
            value: function () {
              var e = this;
              this.loading || (this.loading = !0, h.a.put('/api/users/plan', {
                name: this.state.name,
                stripeId: this.stripeId
              }).then(function (t) {
                e.here && ('Starter' === t.data.plan ? e.setState({ copying: !0 }) : e.setState({
                  canCopy: !0,
                  copying: !0
                }), e.loading = !1);
              }).catch(function (t) {
                e.here && (console.error(t), e.loading = !1, e.setState({ copying: !1 }));
              }));
            }
          },
          {
            key: 'onCopyConfirm',
            value: function () {
              var e = this;
              this.loading || (this.loading = !0, this.setState({ loadingCopy: !0 }), h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.post('/api/games/copy', {
                newAuthor: this.state.name,
                id: this.state.game.id,
                isDuplicate: !0
              }).then(function (t) {
                e.here && (e.props.setEditId(t.data._id), e.props.history.push('/edit?id='.concat(t.data._id)));
              }).catch(function (t) {
                e.here && (console.error(t), e.loading = !1, e.setState({
                  copying: !1,
                  loadingCopy: !1
                }));
              }));
            }
          },
          {
            key: 'onDelete',
            value: function () {
              var e = this;
              this.loading || (this.loading = !0, this.setState({ loadingDelete: !0 }), h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.delete('/api/games', { params: { gameId: this.state.game.id } }).then(function () {
                window.close();
              }).catch(function (t) {
                console.error(t), e.setState({ loadingDelete: !1 });
              }));
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return this.state.ready && !this.state.game.title ? o.a.createElement(c.a, { to: '/404' }) : o.a.createElement('div', { className: w.isMobile ? E.a.mBody : E.a.body }, o.a.createElement(O.a, {
                title: 'View Set | Blooket',
                desc: 'View a Blooket question set to see the questions and their answers. Also, you can host, favorite, report, or duplicate a set here.'
              }), o.a.createElement(N.a, {
                history: this.props.history,
                page: 'Discover'
              }), o.a.createElement('div', { className: E.a.profileRegularBody }, this.state.ready ? o.a.createElement('div', { className: S.a.mainColumn }, o.a.createElement('div', { className: S.a.headerContainer }, this.state.game.coverImage ? o.a.createElement('div', { className: S.a.headerImageContainer }, o.a.createElement(g.a, { height: 195 }, o.a.createElement('img', {
                src: Object(A.f)(this.state.game.coverImage.url),
                alt: 'Cover',
                className: S.a.headerImage
              }))) : o.a.createElement('div', { className: S.a.headerFillerContainer }, o.a.createElement('div', { className: S.a.headerFillerText }, 'Blooket')), o.a.createElement('div', { className: S.a.headerTextContainer }, o.a.createElement('div', { className: S.a.headerTitle }, this.state.game.title), o.a.createElement('div', { className: S.a.headerDesc }, this.state.game.desc), o.a.createElement('div', { className: S.a.headerBottomContainer }, o.a.createElement('i', { className: _()(S.a.headerAuthorIcon, 'fas fa-user') }), o.a.createElement(m.a, {
                className: S.a.headerAuthorText,
                to: '/discover?n='.concat(encodeURIComponent(this.state.game.author))
              }, this.state.game.author), (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : [
                'Bot',
                'Tom@Blooket'
              ].includes(this.state.name)) ? o.a.createElement('div', {
                className: S.a.deleteButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ deletePop: !0 });
                }
              }, 'Delete') : null)), o.a.createElement('div', { className: S.a.headerButtonContainer }, o.a.createElement('div', { className: _()(S.a.hostButtonContainer, S.a.bigScreen) }, o.a.createElement('div', {
                className: S.a.hostButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.onHost
              }, o.a.createElement('i', { className: _()(S.a.hostIcon, 'fas fa-play') }), o.a.createElement('div', { className: S.a.hostText }, 'Host'))), o.a.createElement('div', { className: _()(S.a.hostButtonContainer, S.a.smallScreen) }, o.a.createElement('div', { className: S.a.noHostText }, 'No Hosting on Mobile')), o.a.createElement('div', { className: S.a.hostButtonContainer }, o.a.createElement('div', {
                className: S.a.hostButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.onSolo
              }, o.a.createElement('i', { className: _()(S.a.hostIcon, 'fas fa-user-astronaut') }), o.a.createElement('div', { className: S.a.hostText }, 'Solo'))), o.a.createElement(f.a, {
                place: 'bottom',
                effect: 'solid',
                className: S.a.tooltip
              }), o.a.createElement('div', { className: S.a.smallButtonsContainer }, o.a.createElement('i', {
                'data-tip': this.state.favorited ? 'Unfavorite' : 'Favorite',
                className: _()(this.state.favorited ? S.a.headerStarIconYes : S.a.headerStarIconNo, this.state.favorited ? 'fas fa-star' : 'far fa-star'),
                role: 'button',
                tabIndex: 0,
                onClick: this.onFavorite
              }), o.a.createElement('i', {
                'data-tip': 'Report',
                className: _()(S.a.reportIcon, 'far fa-flag'),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ reporting: !0 });
                }
              }), o.a.createElement('i', {
                'data-tip': 'Duplicate',
                className: _()(S.a.copyIcon, 'far fa-clone'),
                role: 'button',
                tabIndex: 0,
                onClick: this.onCopy
              })))), o.a.createElement('div', { className: S.a.headerBelowContainer }, o.a.createElement('div', { className: S.a.headerBelowSection }, o.a.createElement('i', { className: _()(S.a.headerClockIcon, 'far fa-clock') }), o.a.createElement('div', { className: S.a.headerTimeText }, 'Edited '.concat(this.state.date))), o.a.createElement('div', { className: S.a.headerBelowCenterSection }, o.a.createElement('i', { className: _()(S.a.headerClockIcon, 'far fa-play-circle') }), o.a.createElement('div', { className: S.a.headerTimeText }, ''.concat(Object(A.n)(this.state.playCount), ' ').concat(1 === this.state.playCount ? 'Play' : 'Plays'))), o.a.createElement('div', { className: S.a.headerBelowSection }, o.a.createElement('i', { className: _()(S.a.headerClockIcon, 'far fa-star') }), o.a.createElement('div', { className: S.a.headerTimeText }, ''.concat(Object(A.n)(this.state.favoriteCount), ' ').concat(1 === this.state.favoriteCount ? 'Favorite' : 'Favorites')))), this.state.game.questions.map(function (t) {
                return o.a.createElement('div', {
                  key: t.number,
                  className: S.a.questionSection
                }, o.a.createElement('div', { className: S.a.questionContainer }, o.a.createElement('div', { className: S.a.questionImageContainer }, t.image && t.image.url ? w.isMobile ? o.a.createElement('img', {
                  src: Object(A.f)(t.image.url),
                  alt: 'Question Background',
                  className: S.a.questionImage
                }) : o.a.createElement(g.a, {
                  height: 130,
                  width: 170
                }, o.a.createElement('img', {
                  src: Object(A.f)(t.image.url),
                  alt: 'Question Background',
                  className: S.a.questionImage
                })) : null, o.a.createElement('div', { className: S.a.imageNumber }, t.number)), o.a.createElement('div', { className: S.a.questionCenterContainer }, o.a.createElement('div', { className: S.a.questionText }, t.question), o.a.createElement('div', {
                  className: S.a.showAnswersContainer,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.onShowAnswers(t.number);
                  }
                }, o.a.createElement('div', { className: S.a.showAnswersText }, e.state.showingAnswers.includes(t.number) ? 'Hide Answers' : 'Show Answers'), o.a.createElement('i', { className: _()(S.a.showAnswersIcon, e.state.showingAnswers.includes(t.number) ? 'fas fa-angle-up' : 'fas fa-angle-down') }))), o.a.createElement('div', { className: S.a.tallVerticalDivider }), o.a.createElement('div', { className: S.a.questionRightContainer }, o.a.createElement('div', { className: S.a.questionRightColumn }, o.a.createElement('div', { className: S.a.timeLimitText }, ''.concat(t.timeLimit, ' sec')), o.a.createElement('div', { className: S.a.randomText }, 'Time Limit')), o.a.createElement('div', { className: S.a.horizontalDivider }), o.a.createElement('div', { className: S.a.questionRightColumn }, o.a.createElement('div', { className: S.a.questionRandomRow }, o.a.createElement('i', { className: _()(S.a.randomIcon, 'fas fa-random') }), o.a.createElement('i', { className: _()(S.a.randomIcon, t.random ? 'fas fa-check' : 'fas fa-times') })), o.a.createElement('div', { className: S.a.randomText }, ''.concat(t.random ? '' : 'No ', ' Random Answer Order'))))), e.state.showingAnswers.includes(t.number) || e.state.hidingAnswers.includes(t.number) ? o.a.createElement('div', { className: _()(S.a.answerContainer, P({}, S.a.answerContainerOut, e.state.showingAnswers.includes(t.number))) }, t.answers.map(function (e, a) {
                  return o.a.createElement('div', {
                    className: _()(S.a.answer, P({}, S.a.faded, !t.correctAnswers.includes(e))),
                    style: {
                      backgroundColor: [
                        '#ffa31e',
                        '#3378ff',
                        '#00cf77',
                        '#ff462b'
                      ][a]
                    },
                    key: e
                  }, o.a.createElement('div', { className: S.a.answerText }, e));
                })) : null);
              }), o.a.createElement('div', { className: S.a.bottomSpacer })) : null), this.state.reporting ? o.a.createElement('div', { className: S.a.reportModal }, o.a.createElement('div', { className: S.a.reportContainer }, o.a.createElement('div', { className: S.a.reportHeader }, 'Report Set'), o.a.createElement('div', { className: S.a.reportText }, 'If this set is offensive, abusive, inappropriate, misleading, and/or contains false information, please let us know below.', ' We appreciate your time and hope that together we can make Blooket a safe place to learn.'), o.a.createElement('textarea', {
                className: _()(S.a.reportInput, P({}, S.a.reportInputFilled, this.state.report)),
                onChange: function (t) {
                  e.setState({ report: t.target.value });
                },
                value: this.state.report,
                'data-gramm_editor': 'false'
              }), this.state.loadingReport ? o.a.createElement(k.a, null) : o.a.createElement('div', { className: S.a.reportButtonContainer }, o.a.createElement('div', {
                className: S.a.reportYesButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.onReport(!0);
                }
              }, 'Report'), o.a.createElement('div', {
                className: S.a.reportNoButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.onReport(!1);
                }
              }, 'Cancel')))) : null, this.state.copying ? this.state.canCopy ? o.a.createElement(I.a, {
                text: this.state.loadingCopy ? 'Copying...' : 'Do you want to create a copy of this question set?',
                loading: this.state.loadingCopy,
                buttonOne: {
                  text: 'Yes',
                  click: this.onCopyConfirm,
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    e.setState({
                      copying: !1,
                      loadingCopy: !1,
                      canCopy: !1
                    }), e.loading = !1;
                  },
                  color: 'blue'
                }
              }) : o.a.createElement(I.a, {
                text: 'Get Blooket Plus to Duplicate Sets',
                buttonOne: {
                  text: 'Upgrade',
                  click: function () {
                    return e.props.history.push('/upgrade');
                  },
                  color: 'orange'
                },
                buttonTwo: {
                  text: 'Not Now',
                  click: function () {
                    e.setState({
                      copying: !1,
                      loadingCopy: !1
                    }), e.loading = !1;
                  },
                  color: 'blue'
                }
              }) : null, this.state.deletePop ? o.a.createElement(I.a, {
                text: 'Do you really want to delete this set?',
                loading: this.state.loadingDelete,
                buttonOne: {
                  text: 'Yes',
                  click: this.onDelete,
                  color: 'red'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.setState({ deletePop: !1 });
                  },
                  color: 'blue'
                }
              }) : null);
            }
          }
        ]) && F(t.prototype, a), n && F(t, n), i;
      }(o.a.Component);
    G.propTypes = {
      match: l.a.object,
      history: l.a.object.isRequired,
      setEditId: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(R.c)(Object(d.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(s.b)({ setEditId: v.b }, e);
    })(G)));
  },
  YlR0: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__selectText___1_bjV-camelCase{font-family:Titan One,sans-serif;font-size:62px;line-height:65px;margin:5vh 5% 3vh;width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___I023b-camelCase .3s linear forwards;animation:styles__fadeIn___I023b-camelCase .3s linear forwards}.styles__modesArray___2RVAo-camelCase{overflow:hidden;width:90%;max-width:800px;margin:3vh auto;justify-content:center;align-content:flex-start;display:flex;flex-flow:row wrap;opacity:0;-webkit-animation:styles__fadeIn___I023b-camelCase .3s linear 1.5s forwards;animation:styles__fadeIn___I023b-camelCase .3s linear 1.5s forwards}@-webkit-keyframes styles__fadeIn___I023b-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___I023b-camelCase{0%{opacity:0}to{opacity:1}}.styles__modeContainer___1HVG5-camelCase{width:350px;height:250px;margin:3vh 25px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__modeContainer___1HVG5-camelCase:hover{transform:scale(1.03)}.styles__modeImage___14-SG-camelCase{margin:auto;width:350px;height:250px;-o-object-fit:cover;object-fit:cover;border-radius:10px}.styles__modeText___2a217-camelCase{top:95px;height:60px;line-height:60px}.styles__modeText___2a217-camelCase,.styles__modeTextTwo___ujuCu-camelCase{position:absolute;left:calc(50% - 105px);color:#fff;text-align:center;font-size:40px;width:210px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;background-color:rgba(11,194,207,.9);border-radius:10px}.styles__modeTextTwo___ujuCu-camelCase{top:75px;height:90px;padding-top:8px;line-height:40px}.styles__limitedTime___3YDaB-camelCase{position:absolute;top:-12.5px;left:75px;color:#fff;text-align:center;font-size:26px;line-height:35px;width:200px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;background-color:#31aae0;border-radius:6px;box-shadow:0 0 8px 3px #fff}@media only screen and (max-width:800px){.styles__selectText___1_bjV-camelCase{font-size:50px;line-height:53px;margin:4vh 5% 3vh}.styles__modesArray___2RVAo-camelCase{width:100%;margin:3vh auto}.styles__modeContainer___1HVG5-camelCase,.styles__modeImage___14-SG-camelCase{max-width:90vw}}',
      ''
    ]), t.locals = {
      selectText: 'styles__selectText___1_bjV-camelCase',
      fadeIn: 'styles__fadeIn___I023b-camelCase',
      modesArray: 'styles__modesArray___2RVAo-camelCase',
      modeContainer: 'styles__modeContainer___1HVG5-camelCase',
      modeImage: 'styles__modeImage___14-SG-camelCase',
      modeText: 'styles__modeText___2a217-camelCase',
      modeTextTwo: 'styles__modeTextTwo___ujuCu-camelCase',
      limitedTime: 'styles__limitedTime___3YDaB-camelCase'
    };
  },
  g4U8: function (e, t, a) {
    var n = a('RD5O');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, o);
    n.locals && (e.exports = n.locals);
  },
  g9Pg: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__topHeader___2oNvt-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;margin:25px 5% 0;color:#3a3a3a}.styles__mainContainer___25BkP-camelCase{display:flex;flex-flow:row wrap;justify-content:flex-start;margin:5px 5%;width:90%;max-width:1200px}.styles__infoContainer___2bT-_-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:12px;padding:15px 25px;min-width:460px;display:flex;flex-direction:column;color:#3a3a3a}.styles__headerRow___QEGoI-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:3px}.styles__headerIcon___2f88v-camelCase{padding-right:10px;font-size:28px;color:#669}.styles__header___vaLs_-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700}.styles__text___sfVVx-camelCase{padding:2px 0}.styles__link___39RuA-camelCase,.styles__text___sfVVx-camelCase{text-align:left;font-size:20px;font-family:Nunito,sans-serif}.styles__link___39RuA-camelCase{color:#0bc2cf;display:inline-block;text-decoration:underline;padding-top:4px;padding-bottom:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__subscriptionText___Kr5A0-camelCase{display:flex;flex-direction:row;align-items:center;margin:2px 0;font-size:26px}.styles__blooketText___alUoc-camelCase{font-family:Titan One,sans-serif;margin-right:5px;padding-bottom:3px}.styles__planText___3_8yv-camelCase,.styles__upgradeButton___tS2dQ-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__upgradeButton___tS2dQ-camelCase{width:160px;height:40px;line-height:40px;background-color:#ff7b24;border-radius:7px;margin:20px 0 0;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;text-decoration:none;outline:none;font-size:20px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__upgradeButton___tS2dQ-camelCase:hover{transform:scale(.95)}@media only screen and (max-width:1200px){.styles__infoContainer___2bT-_-camelCase{flex-grow:1}}@media only screen and (max-width:600px){.styles__mainContainer___25BkP-camelCase{min-width:320px;margin:auto;width:95%}.styles__infoContainer___2bT-_-camelCase{min-width:290px;padding:15px;flex-grow:1}}',
      ''
    ]), t.locals = {
      topHeader: 'styles__topHeader___2oNvt-camelCase',
      mainContainer: 'styles__mainContainer___25BkP-camelCase',
      infoContainer: 'styles__infoContainer___2bT-_-camelCase',
      headerRow: 'styles__headerRow___QEGoI-camelCase',
      headerIcon: 'styles__headerIcon___2f88v-camelCase',
      header: 'styles__header___vaLs_-camelCase',
      text: 'styles__text___sfVVx-camelCase',
      link: 'styles__link___39RuA-camelCase',
      subscriptionText: 'styles__subscriptionText___Kr5A0-camelCase',
      blooketText: 'styles__blooketText___alUoc-camelCase',
      planText: 'styles__planText___3_8yv-camelCase',
      upgradeButton: 'styles__upgradeButton___tS2dQ-camelCase'
    };
  },
  iu01: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), m = a('b6Qr'), d = a('GIcp'), u = a.n(d), h = a('dJL0'), p = a('iQ+n'), _ = a('u1AR'), f = a('anyA'), y = a('TN+F');
    function g(e) {
      return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function b(e, t, a, n, o, s, r) {
      try {
        var i = e[s](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(n, o);
    }
    function x(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function w(e, t) {
      return (w = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function v(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = T(e);
        if (t) {
          var o = T(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return C(this, a);
      };
    }
    function C(e, t) {
      return !t || 'object' !== g(t) && 'function' != typeof t ? E(e) : t;
    }
    function E(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function T(e) {
      return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && w(e, t);
      }(l, e);
      var t, a, n, s, r, i = v(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {}, t.done = t.done.bind(E(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (s = regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  e.sent && this.props.history.push('/dashboard');
                case 4:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var o = s.apply(e, t);
              function r(e) {
                b(o, a, n, r, i, 'next', e);
              }
              function i(e) {
                b(o, a, n, r, i, 'throw', e);
              }
              r(void 0);
            });
          }, function () {
            return r.apply(this, arguments);
          })
        },
        {
          key: 'done',
          value: function () {
            this.props.client || this.props.host || this.props.game ? this.props.history.goBack() : Object(y.i)('plan') ? this.props.history.push('/upgrade/checkout/'.concat(Object(y.i)('plan'))) : this.props.history.push('/dashboard');
          }
        },
        {
          key: 'render',
          value: function () {
            return o.a.createElement('div', {
              className: m.isMobile ? u.a.mBody : u.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, o.a.createElement(p.a, {
              title: 'Sign Up | Blooket',
              desc: 'Sign Up for a Blooket account to create sets, host games, discover new sets, unlock Blooks, view stats, update your account, and manage your Blooks.'
            }), o.a.createElement(h.a, {
              rightLink: '/login',
              rightText: 'Login'
            }), o.a.createElement('div', { className: u.a.regularBody }, o.a.createElement(_.a, { done: this.done })));
          }
        }
      ]) && x(t.prototype, a), n && x(t, n), l;
    }(o.a.Component);
    S.propTypes = {
      client: l.a.object,
      host: l.a.object,
      game: l.a.object,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(f.c)(Object(c.a)(Object(r.b)(function (e) {
      return {
        client: e.clients.client,
        host: e.hosts.host,
        game: e.games.game
      };
    }, function (e) {
      return Object(s.b)({}, e);
    })(S)));
  },
  m6rd: function (e, t, a) {
    var n = a('YlR0');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, o);
    n.locals && (e.exports = n.locals);
  },
  'n6/L': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('wIs1'), l = a('GIcp'), c = a.n(l), m = a('yawX'), d = a.n(m), u = a('dJL0'), h = a('iQ+n');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function _(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function f(e, t) {
      return (f = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function y(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = b(e);
        if (t) {
          var o = b(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return g(this, a);
      };
    }
    function g(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function b(e) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var x = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && f(e, t);
      }(r, e);
      var t, a, n, s = y(r);
      function r(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, r), (t = s.call(this, e)).state = {}, t;
      }
      return t = r, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            window.scrollTo(0, 0);
          }
        },
        {
          key: 'render',
          value: function () {
            return o.a.createElement('div', {
              className: c.a.body,
              style: { paddingBottom: 40 }
            }, o.a.createElement(h.a, {
              title: 'Terms of Service | Blooket',
              desc: 'Blooket\'s terms of service were created to protect its users and provide users with the terms that Blooket requires its users to abide by.'
            }), o.a.createElement(u.a, null), o.a.createElement('div', { className: d.a.mainHeader }, 'Blooket Terms of Service'), o.a.createElement('div', { className: d.a.subheader }, 'ACCEPTANCE OF THE TERMS OF SERVICE'), o.a.createElement('div', { className: d.a.text }, '\n          THE FOLLOWING TERMS AND CONDITIONS (\u201CTERMS\u201D) APPLY TO YOUR USE OF THE WEBSITE OF BLOOKET LLC, (\u201CBLOOKET\u201D, \u201CWE\u201D, \u201CUS\u201D OR \u201COUR\u201D), INCLUDING ANY CONTENT, FUNCTIONALITY, PRODUCTS, AND SERVICES OFFERED ON OR THROUGH SUCH WEBSITE (COLLECTIVELY, THE \u201CWEBSITE\u201D), WHETHER AS A GUEST OR ACCOUNT HOLDER. THESE TERMS ALSO APPLY TO YOUR USE OF OTHER BLOOKET SERVICES THAT DISPLAY OR INCLUDE THESE TERMS (\u201CADDITIONAL SERVICES\u201D). IN THESE TERMS, THE WEBSITE AND ADDITIONAL SERVICES ARE COLLECTIVELY REFERRED TO AS THE \u201CSERVICES.\u201D\n          '), o.a.createElement('div', { className: d.a.text }, '\n          PLEASE READ THESE TERMS CAREFULLY BEFORE YOU START TO USE THE SERVICES. BY USING THE SERVICES, YOU ACCEPT AND AGREE TO BE BOUND AND ABIDE BY THESE TERMS OF SERVICE. IF YOU DO NOT WANT TO AGREE TO THESE TERMS OF SERVICE, YOU MUST NOT USE THE SERVICES. BY ACCEPTING THESE TERMS:\n          '), o.a.createElement('ol', { className: d.a.text }, o.a.createElement('li', null, '\n            You are also agreeing to BLOOKET\u2019s Privacy Policy which explains what information we collect from you and how we protect it.\n            '), o.a.createElement('li', null, 'You and BLOOKET agree to resolve disputes pursuant to the process outlined below.')), o.a.createElement('div', {
              className: d.a.text,
              style: { fontWeight: 'bold' }
            }, '\n          THESE TERMS CONTAINS A BINDING CLASS-ACTION WAIVER PROVISION. IF YOU ACCEPT THESE TERMS, YOU AND BLOOKET AGREE TO RESOLVE DISPUTES PURSUANT TO THE DISPUTE RESOLUTON PROVISIONS BELOW AND GIVE UP THE RIGHT TO GO TO COURT INDIVIDUALLY AS PART OF A CLASS ACTION.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          TO ENTER INTO THE CONTRACT CREATED BY THESE TERMS, YOU MUST BE AN ADULT OF THE LEGAL AGE OF MAJORITY IN YOUR COUNTRY OF RESIDENCE.  YOU ARE LEGALLY AND FINANCIALLY RESPONSIBLE FOR ALL ACTIONS USING OR ACCESSING OUR SOFTWARE, INCLUDING THE ACTIONS OF ANYONE YOU ALLOW TO ACCESS TO YOUR ACCOUNT. YOU AFFIRM THAT YOU HAVE REACHED THE LEGAL AGE OF MAJORITY, UNDERSTAND AND ACCEPT THESE TERMS (INCLUDING ITS DISPUTE RESOLUTION TERMS).  IF YOU ARE UNDER THE LEGAL AGE OF MAJORITY, YOUR PARENT OR LEGAL GUARDIAN MUST CONSENT TO THESE TERMS.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Privacy Notice'), o.a.createElement('div', { className: d.a.text }, 'Please review our Privacy Notice found at ', o.a.createElement('a', { href: 'https://www.blooket.com' }, 'https://www.blooket.com'), ' which also governs your use of the Services, to understand our practices.'), o.a.createElement('div', { className: d.a.subheader }, 'Changes to the Terms of Service'), o.a.createElement('div', { className: d.a.text }, '\n          We may update these Terms from time to time; you should check this page regularly to take notice of any changes. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Accessing the Services and Account Security'), o.a.createElement('div', { className: d.a.text }, '\n          We may withdraw or amend the Services, and any related service or content, or restrict access (including by means of cancellation, termination, or modification, or suspension of a user account) to all or certain users (including you) without notice and without liability to you in our reasonable discretion. Additionally, due to your geographic location, the Services or some of their features, services, or content may be unavailable to you.  Notwithstanding anything to the contrary herein, we may terminate or suspend access to the Services based on your breach of these Terms.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          To access certain Services, you will be asked to provide registration details or other information, and in order to use such resources, all the information you provide must be correct, current, and complete. From time to time, in order to access the Services or certain games, services, or functionality, BLOOKET may require some or all users to download updated or additional software. The terms of use of such software may be subject to separate agreement between you and BLOOKET.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential (other than username), and you must not disclose it to others. You must immediately notify BLOOKET (via contact-us@blooket.com) of any unauthorized use of your username or password or any other breach of security. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information. You may only access the Services through your own account. Users do not own their accounts, and gifting or otherwise transferring of accounts or access keys is prohibited.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          We reserve the right to change your display name if we deem it offensive, misleading, potentially infringing the rights of third parties or if you have been inactive for more than a year.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Intellectual Property Rights'), o.a.createElement('div', { className: d.a.text }, '\n          The Services, including all content, features, and functionality thereof, are owned by BLOOKET, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, and other intellectual property or proprietary rights laws.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You are permitted to use the Services for your personal, non-commercial use only or legitimate business purposes related to your role as a current or prospective customer of BLOOKET. Except as provided below, you must not copy, modify, create derivative works of, publicly display, publicly perform, republish, or transmit any of the material obtained through the Services, or delete, or alter any copyright, trademark, or other proprietary rights notices from copies of materials from the Services. However, if you are otherwise in compliance with these Terms, you are permitted to use, elsewhere and on other websites, an unaltered copy of portions of the content that is publicly available on the Website for the limited, non-commercial purpose of discussing such content.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You must not reproduce, sell, or exploit for any commercial purposes any part of the Services, access to the Services or use of the Services or any services or materials available through the Services.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          For clarity, the foregoing permissions are limited to the Services, and no rights are granted with respect to any servers, computers, or databases associated with the Services.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Billing, Payment and BLOOKET Subscription Plans'), o.a.createElement('div', { className: d.a.text }, '\n          ALL CHARGES INCURRED IN CONNECTION WITH THE SERVICES AND ALL FUNDS FOR BLOOKET SUBSCRIPTIONS ARE PAYABLE IN ADVANCE AND ARE NOT REFUNDABLE IN WHOLE OR IN PART, REGARDLESS OF THE PAYMENT METHOD, EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS OR AS REQUIRED BY APPLICABLE LAW.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'BLOOKET Subscription Plans'), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET offers both free and paid subscription plans for services.  Those plans are available in accordance with the following:\n          '), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET Services that may be accessed subject to payment are currently referred to as \u201CPaid Subscriptions\u201D. You agree to abide by the terms and restrictions applicable to the Service Plan that you have signed up for.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          We reserve the right to change or withdraw features, specifications, services and content of a Service Plan at any time, without notice to you. Please note that the content and features of a Service Plan may vary based on when you signed up and whether you have signed up through our website. We reserve the right to terminate your account for any reason acceptable to BLOOKET.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          We will not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          The payment processors we work with are:\n          '), o.a.createElement('ul', { className: d.a.text }, o.a.createElement('li', { style: { fontWeight: 'bold' } }, 'Stripe')), o.a.createElement('div', { className: d.a.text }, 'Their Privacy Policy can be viewed at ', o.a.createElement('a', { href: 'https://stripe.com/us/privacy' }, 'https://stripe.com/us/privacy')), o.a.createElement('div', { className: d.a.subheader }, 'BLOOKET STARTER'), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET STARTER Services is provided to you free-of-charge, for as long as you use the Services for non-commercial purposes only, in accordance with the limitations of use set out in these Terms. The Service Plan that does not require payment is currently referred to as the \u201CBLOOKET STARTER\u201D. YOU MAY NOT USE BLOOKET STARTER FOR COMMERCIAL PURPOSES. HENCE, IF YOU INTEND TO USE BLOOKET SERVICES FOR PROFESSIONAL PURPOSES, INCLUDING BUT NOT LIMITED TO IN CONJUNCTION WITH OR AS PART OF A PAID SERVICE OR PRODUCT, FOR THE PURPOSE OF MARKETING YOUR OWN OR SOMEONE ELSE\u2019S PRODUCTS OR SERVICES OR OTHERWISE IN CONJUNCTION WITH A COMMERCIAL EVENT SUCH AS A CONCERT, GAME SHOW OR BROADCASTED EVENT, YOU MUST SIGN UP FOR A PAID SUBSCRIPTION OR ENTER INTO A SEPARATE AGREEMENT WITH BLOOKET.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Paid Subscriptions'), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET PLUS and BLOOKET PLUS FLEX are paid version of our services. BLOOKET may offer additional subscription offers which are subject to these same terms and conditions.   BLOOKET offers various Service Plans for use of the BLOOKET Services at home, in schools, businesses and non-profit organizations. Some Service Plans require payment before you can access them and certain areas of use are only permitted if you have signed up for a Paid Subscription or entered into a separate agreement with BLOOKET. If you have signed up for Paid Subscriptions, you may get access to features that are not available through BLOOKET STARTER and you may use the Services for commercial purposes, only if and to the extent such commercial use is permitted under the selected Service Plan.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Pre-paid offers'), o.a.createElement('div', { className: d.a.text }, '\n          If you have received a code or other offer provided or sold by or on behalf of BLOOKET for access to a Paid Subscription (\u201CCode\u201D), separate terms and conditions presented to you along with the Code may also apply to your access to the Service and you agree to comply with any such terms and conditions.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Trials'), o.a.createElement('div', { className: d.a.text }, '\n          We may, at our own sole discretion, offer trials of Paid Subscriptions for a specified period without payment or at a discounted rate (a \u201CTrial\u201D). We reserve the right to revoke the Trial and put your account on hold in the event that we determine that you are not eligible.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          For some Trials, we\u2019ll require you to provide your payment details to start the Trial. We will charge you on a recurring basis for the selected subscription fee at the end of the Trial using the payment details you have provided us, unless you cancel your subscription prior to the end of the Trial.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You have provided your payment details in conjunction with the Trial and you accept that we charge you using such payment details. If you do not want this charge, you must cancel your Paid Subscriptions through your BLOOKET account\u2019s settings or terminate your BLOOKET account before the end of the Trial. If you do not want to continue to be charged on a recurring monthly or annual basis (as the case may be, depending on your Service Plan), you must cancel the applicable paid subscription through your BLOOKET account\u2019s subscription page or terminate your BLOOKET account before the end of the recurring monthly period. Paid Subscriptions cannot be terminated before the end of the period for which you have already paid, and except as expressly provided in these terms, BLOOKET will not refund any fees that you have already paid.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Payments and cancellations'), o.a.createElement('div', { className: d.a.text }, '\n          If you have signed up for BLOOKET STARTER or if you cancel your Paid Subscription during a Trial Subscription period, BLOOKET will never charge you any fees for your use of the BLOOKET Service.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If you have signed up for BLOOKET STARTER, a limited version of our Services, we will not store or collect your payment card details. All payment information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          The payment processors we work with are:\n          '), o.a.createElement('ul', { className: d.a.text }, o.a.createElement('li', { style: { fontWeight: 'bold' } }, 'Stripe')), o.a.createElement('div', { className: d.a.text }, 'Their Privacy Policy can be viewed at ', o.a.createElement('a', { href: 'https://stripe.com/us/privacy' }, 'https://stripe.com/us/privacy')), o.a.createElement('div', { className: d.a.text }, '\n          If you have signed up for a Paid Subscription for a monthly subscription fee, you will be charged for one month\u2019s subscription fee in advance upon expiration of any Trial. The Paid Subscription and the payment to BLOOKET will automatically renew at the end of the monthly subscription period, unless you cancel your Paid Subscription through your subscription page before the end of the current monthly subscription period. The monthly subscription period commences on the day of the month that you purchase the subscription and renews on the same day of the month the following month.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If you have signed up for a Paid Subscription which gives you access to the BLOOKET Service for a specific time period (\u201CPre-Paid Period\u201D), you will be charged for the Pre-Paid Period in advance upon expiration of any Trial. The Paid Subscription and the payment to BLOOKET will automatically renew at the end of the Pre-paid Period unless you cancel your Paid Subscription through your subscription page before the end of the Pre-paid Period.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If you cancel your Paid Subscription, the cancellation will take effect on the day after the last day of the current subscription period, after which you will be downgraded to BLOOKET Basic. We will not refund any subscription fees already paid to us.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET may change the price for the Paid Subscriptions from time to time, and will communicate any price changes to you in advance and, if applicable, how to accept those changes. Price changes for Paid Subscriptions will take effect at the start of the next subscription period following the date of the price change. As permitted by local law, you accept the new price by continuing to use the BLOOKET Service after the price change takes effect. If you do not agree with the price changes, you have the right to reject the change by unsubscribing from the Paid Subscription prior to the price change going into effect, in which case you will be downgraded to BLOOKET Basic.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          We do not provide any refunds if the price for a Paid Subscription drops, or if we offer subsequent promotional pricing or change the content or features of a Service Plan. Paid Subscriptions purchased through other platforms are subject to the refund policies of those platforms. BLOOKET cannot be held responsible for these platforms\u2019 policies.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Upgrades and downgrades'), o.a.createElement('div', { className: d.a.text }, '\n          You may at any time upgrade or downgrade your Paid Subscription to a different Service Plan:\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Paid Subscriptions \u2013 monthly:'), o.a.createElement('ul', { className: d.a.text }, o.a.createElement('li', null, '\n            If you have downgraded your monthly Paid Subscription to a lower Service Plan, such downgrade will take effect on the day after the last day of the current subscription period.\n            '), o.a.createElement('li', null, '\n            If you have upgraded your monthly Paid Subscription to a higher Service Plan, such upgrade will take effect immediately subject to payment of the upgrade fee.\n            ')), o.a.createElement('div', { className: d.a.subheader }, 'Paid Subscriptions \u2013 Pre-paid Period:'), o.a.createElement('ul', { className: d.a.text }, o.a.createElement('li', null, '\n            If you have downgraded your Paid Subscription to a lower Service Plan during the Pre-paid Period, such downgrade will take effect on the date of renewal (i.e. the day after the last day of the Pre-paid Period).\n            '), o.a.createElement('li', null, '\n            If you have upgraded your Paid Subscription to a higher Service Plan during the Pre-paid Period, such upgrade will take effect immediately subject to payment of the upgrade fee and you will automatically enter into a new Pre-paid Period with the same duration as the preceding Pre-paid Period.\n            ')), o.a.createElement('div', { className: d.a.subheader }, 'Taxes'), o.a.createElement('div', { className: d.a.text }, '\n          Prices listed may not include sales or value added tax and applicable tax may be calculated and added at the time you complete a transaction and, depending on where you have purchased your Paid Subscription, such tax may not be visible to you until you receive a receipt for your purchase. In certain jurisdictions, local laws require that prices include all applicable taxes, in which case this will be indicated at the time of the transaction.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Prohibited Uses'), o.a.createElement('div', { className: d.a.text }, '\n          You may use the Services only for lawful purposes and in accordance with these Terms of Service. You agree not to access or use the Services for any purpose that is illegal or beyond the scope of the Services\u2019 intended use (in BLOOKET\u2019s sole judgment).\n          '), o.a.createElement('div', { className: d.a.subheader }, 'User Contributions'), o.a.createElement('div', { className: d.a.text }, '\n          The Services contain various forums, networks, and other interactive features that allow you to post, submit, publish, display, or transmit to BLOOKET and other users (\u201CPost\u201D) content or materials (\u201CUser Contributions\u201D) on or through the Services.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          All User Contributions must comply with the following content standards: User Contributions must not be illegal, fraudulent, deceptive, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties or objectionable, and must not consist of or contain software viruses, commercial solicitation, chain letters, mass mailings, or any form of \u201Cspam.\u201D\n          '), o.a.createElement('div', { className: d.a.text }, '\n          Any User Contribution that you Post will be considered non-confidential and non-proprietary, and you grant BLOOKET a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, copy, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Contribution throughout the world in any media; however, BLOOKET will only share personal information that you provide in accordance with BLOOKET\u2019s Privacy Policy.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You represent and warrant that you own or otherwise control all of the rights to the User Contributions that you Post at the time of Posting; that the User Contributions are accurate and not fraudulent or deceptive; and that the User Contributions do not violate these Terms or the rights (intellectual property rights or otherwise) of any third party, and will not cause injury to any person or entity. You understand that your User Contributions may be copied by other Services users and discussed on and outside of the Services, and if you do not have the right to submit User Contributions for such use, it may subject you to liability. BLOOKET takes no responsibility and assumes no liability for any content Posted by you or any third party.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          BLOOKET has the right but not the obligation to monitor and edit or remove any User Contributions. BLOOKET also has the right to terminate your access to all or part of the Services for any or no reason, including without limitation, any violation of these Terms. BLOOKET may exercise these rights at any time, without notice or liability to you or any third party.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Linking'), o.a.createElement('div', { className: d.a.text }, '\n          You may link to publicly available portions of the Services if you do so in a way that is fair and does not damage or take advantage of our reputation, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on our part. The Services must not be framed on any other website or service. We reserve the right to withdraw linking permission without notice.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If the Services contain links to other sites and resources provided by third parties, these links are provided for your convenience only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Disclaimers and Limitation of Liability'), o.a.createElement('div', { className: d.a.text }, '\n          Nothing in these Terms will prejudice the statutory rights that you may have as a consumer of the Services.  Some countries, states, provinces or other jurisdictions do not allow the exclusion of certain warranties or the limitation of liability as stated in this section, so the below terms may not fully apply to you. Instead, in such jurisdictions, the exclusions and limitations below shall apply only to the extent permitted by the laws of such jurisdictions.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          The Services and all information, content, materials, products (including software), and other services included on or otherwise made available to you through the Services are provided by BLOOKET on an \u201Cas is\u201D and \u201Cas available\u201D basis. BLOOKET makes no representations or warranties of any kind, express or implied, as to the operation of the Services, or the information, content, materials, products (including software), or other services included on or otherwise made available to you through the Services. You expressly agree that your use of the Services is at your sole risk. To the full extent permissible by law, BLOOKET disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. BLOOKET does not warrant that the Services, information, content, materials, products (including software) or other services included on or otherwise made available to you through the Services, BLOOKET\u2019s servers, or electronic communications sent from BLOOKET are free of viruses or other harmful components.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          To the full extent permissible by law, BLOOKET will not be liable for any loss of profits or any indirect, incidental, punitive, special or consequential damages arising out of or in connection with this these Terms. Further, to the full extent permissible by law, BLOOKET\u2019s aggregate liability arising out of or in connection with these Terms will not exceed the total amounts you have paid (if any) to BLOOKET under this Agreement during the twelve (12) months immediately preceding the events giving rise to such liability. These limitations and exclusions regarding damages apply even if any remedy fails to provide adequate compensation.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Indemnification'), o.a.createElement('div', { className: d.a.text }, '\n          This section only applies to the extent permitted by applicable law.  If you are prohibited by law from entering into the indemnification obligation below, then you assume, to the extent permitted by law, all liability for all claims, demands, actions, losses, liabilities, and expenses (including attorneys\u2019 fees, costs and expert witnesses\u2019 fees) that are the stated subject matter of the indemnification obligation below.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You agree to defend, indemnify, and hold harmless BLOOKET, its affiliates, and licensors, and their respective officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\u2019 fees) resulting from your User Contributions or violation of these Terms.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Governing Law and Jurisdiction'), o.a.createElement('div', { className: d.a.text }, '\n          Any dispute or claim by you arising out of or related to these Terms shall be governed by Delaware law, exclusive of its choice of law rules.  You and BLOOKET agree to submit to the exclusive jurisdiction of the Superior Court of Delaware, in and for New Castle County, Delaware, or, if federal court jurisdiction exists, the United States District Court for the District of Delaware.  You and BLOOKET agree to waive any jurisdictional, venue, or inconvenient forum objections to such courts (without affecting either party\u2019s rights to remove a case to federal court if permissible), as well as any right to a jury trial.  The Convention on Contracts for the International Sale of Goods will not apply.  Any law or regulation which provides that the language of a contract shall be construed against the drafter will not apply to these Terms.  This paragraph will be interpreted as broadly as applicable law permits.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'No Class Actions'), o.a.createElement('div', { className: d.a.text }, '\n          PLEASE READ THIS SECTION CAREFULLY.  IT AFFECTS YOUR RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          Most issues can be resolved quickly and amicably by contacting BLOOKET customer support at contact-us@blooket.com. But we understand that sometimes disputes can\u2019t be easily resolved by customer support. This Section explains how you and BLOOKET agree to resolve those disputes.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Disputes related to these Terms:'), o.a.createElement('div', { className: d.a.text }, '\n          If you have an issue related to these Terms and have not agreed to BLOOKET\u2019s EULA, the dispute-resolution terms below apply.\n          '), o.a.createElement('div', { className: d.a.subheader }, '1. Informal Resolution.'), o.a.createElement('div', { className: d.a.text }, '\n          If you have an issue that our customer support can\u2019t resolve, prior to starting arbitration you and BLOOKET agree to attempt to resolve the dispute informally to help get us to a resolution and control costs for both parties. You and BLOOKET agree to make a good-faith effort to negotiate any dispute between us for at least 30 days (\u201CInformal Resolution\u201D). Those informal negotiations will start on the day you or BLOOKET receive a written Notice of a Dispute in accordance with these Terms.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          You will send your Notice of Dispute to The Law Office of Gregory D. Stewart, P.A., Attn: Gregory D. Stewart, Esq., 409 South Ridge Avenue, Middletown, DE 19709.  Include your name, any relevant account name you use, address, how to contact you, what the problem is, and what you want BLOOKET to do. If BLOOKET has a dispute with you, BLOOKET will send our Notice of Dispute to your registered email address and any billing address you have provided us.\n          ', 'If you reside in the European Union (\u201CEU\u201D), you may also be entitled to submit your complaint to the European Commission\u2019s ', o.a.createElement('a', { href: 'https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=EN' }, 'Online Dispute Resolution (ODR) Platform'), '. ODR allows EU consumers to resolve disputes related to the online purchases of goods and services without going to court.'), o.a.createElement('div', { className: d.a.text }, '\n          If the dispute isn\u2019t resolved within by Informal Resolution or small-claims court (below), you or BLOOKET may start an arbitration in accordance with these Terms.\n          '), o.a.createElement('div', { className: d.a.subheader }, '2. Class Action Waiver.'), o.a.createElement('div', { className: d.a.text }, '\n          To the maximum extent permitted by applicable law, you and BLOOKET agree to only bring Disputes in an individual capacity and shall not: seek to bring, join, or participate in any class or representative action, collective or class-wide arbitration, or any other action where another individual or entity acts in a representative capacity (e.g., private attorney general actions); or consolidate or combine individual proceedings or permit an arbitrator to do so without the express consent of all parties to these Terms and all other actions or arbitrations.\n          '), o.a.createElement('div', { className: d.a.subheader }, '3. Severability.'), o.a.createElement('div', { className: d.a.text }, '\n          If all or any provision of these Terms of Service is found invalid, unenforceable, or illegal, then you and BLOOKET agree that the provision will be severed and the rest of these Terms shall remain in effect and be construed as if any severed provision had not been included.  The sole exception is that if the Class Action Waiver is found invalid, unenforceable, or illegal, you and BLOOKET agree that it will not be severable; any dispute will be resolved in court subject to the venue and choice of clauses specified in these Terms.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Language'), o.a.createElement('div', { className: d.a.text }, '\n          To the fullest extent permitted by law, the controlling language for these Terms is English. It is the express wish of the parties that these Terms and all related documents have been drawn up in English. Les parties déclarent qu\'elles ont demandé et par les présentes confirment leur desir exprés que cette convention soit rédigee en anglais. Any translation has been provided for your convenience.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Waiver and Severability'), o.a.createElement('div', { className: d.a.text }, '\n          No waiver of these Terms by BLOOKET shall be deemed a further or continuing waiver of such term or condition or any other term or condition, and any failure of BLOOKET to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of these Terms will continue in full force and effect.\n          '), o.a.createElement('div', { className: d.a.subheader }, 'Notice and Procedure for Making Claims of Copyright Infringement'), o.a.createElement('div', { className: d.a.text }, '\n          In accordance with the Digital Millennium Copyright Act (\u201CDMCA\u201D) and other applicable law, BLOOKET has adopted a policy of terminating, in appropriate circumstances as determined by BLOOKET, users or account holders who are deemed to be repeat infringers of the copyrights of others. BLOOKET may also at its sole discretion limit access to the Services and/or update, transfer, suspend, or terminate the accounts of any users who infringe the intellectual property rights of others, whether or not there is any repeat infringement.\n          '), o.a.createElement('div', { className: d.a.text }, '\n          If you believe that your work has been used on the Website or in any other Services in a way that constitutes copyright infringement, please submit a Notice of Alleged Infringement (\u201CDMCA Notice\u201D) to our Designated Copyright Agent as follows:\n          '), o.a.createElement('div', { className: d.a.text }, 'Law Office of Gregory D. Stewart, P.A.', o.a.createElement('br', null), 'Attn: Gregory D. Stewart, Esq.', o.a.createElement('br', null), '409 South Ridge Avenue', o.a.createElement('br', null), 'Middletown, DE 19709', o.a.createElement('br', null), 'Email: gstewart@gregstewartlaw.com'), o.a.createElement('div', { className: d.a.text }, 'Please include all of the following in your DMCA Notice:'), o.a.createElement('ul', { className: d.a.text }, o.a.createElement('li', null, '\n            Identify the copyrighted work that you claim has been infringed. If your DMCA Notice covers multiple works, you may provide a representative list of such works.\n            '), o.a.createElement('li', null, '\n            Identify the material that you claim is infringing, including a description of where the material is located. Your description must be reasonably sufficient to enable us to locate the material. Where possible, please include the URL of the webpage where the material is located.\n            '), o.a.createElement('li', null, '\n            Provide your full legal name, mailing address, telephone number, and (if available) e-mail address.\n            '), o.a.createElement('li', null, '\n            Include the following statement in the body of the DMCA Notice:\n            '), o.a.createElement('li', null, '\n            I have a good-faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law. I represent that the information in this DMCA Notice is accurate and, under penalty of perjury, that I am the owner of the copyright or authorized to act on the copyright owner\u2019s behalf.\n            '), o.a.createElement('li', null, '\n            Provide your electronic or physical signature.\n            '), o.a.createElement('li', null, '\n            Please note that under 17 U.S.C. 512(f), if you knowingly misrepresent that material or activity is infringing, you may be liable for damages, including costs and attorneys\u2019 fees, incurred by us or our users. If you are unsure whether the material or activity you are reporting is infringing, you may wish to contact an attorney before filing a notification with us.\n            ')), o.a.createElement('div', { className: d.a.subheader }, 'General Questions'), o.a.createElement('div', { className: d.a.text }, 'For general questions, contact us at contact-us@blooket.com.'));
          }
        }
      ]) && _(t.prototype, a), n && _(t, n), r;
    }(o.a.Component);
    x.propTypes = {};
    t.a = Object(i.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(s.b)({}, e);
    })(x));
  },
  qFTt: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__headerContainer___2624n-camelCase{width:calc(90% - 30px);padding:15px;margin:25px 5% 20px;min-width:500px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__headerImageContainer___2BXV2-camelCase{width:22.5%;margin:0;background-color:#333;border-radius:7px}.styles__headerImage___2-k5L-camelCase{margin:auto;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:7px}.styles__headerFillerContainer___1YysX-camelCase{width:22.5%;height:195px;margin:auto 0;background-color:#0bc2cf;border-radius:7px;display:flex;justify-content:center;align-items:center}.styles__headerFillerText___1_lKe-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerTextContainer___3VV9J-camelCase{width:calc(77.5% - 150px);margin-left:20px;min-width:150px}.styles__headerTextContainer___3VV9J-camelCase,.styles__headerTitle___2gLpg-camelCase{display:flex;flex-direction:column}.styles__headerTitle___2gLpg-camelCase{font-size:36px;line-height:38px;font-weight:700;justify-content:center}.styles__headerDesc___3G14m-camelCase,.styles__headerTitle___2gLpg-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__headerDesc___3G14m-camelCase{font-size:20px;margin-top:12px;margin-bottom:5px}.styles__headerBottomContainer___2_6PR-camelCase{display:flex;flex-direction:row;align-items:center;height:35px;margin-top:auto}.styles__headerAuthorIcon___2H-mM-camelCase{font-size:24px;color:#3a3a3a;line-height:35px;width:36px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerAuthorText___X4iUm-camelCase{padding-left:3px;color:#0bc2cf}.styles__deleteButton___3KpUF-camelCase,.styles__headerAuthorText___X4iUm-camelCase{font-family:Nunito,sans-serif;font-size:20px;line-height:33px}.styles__deleteButton___3KpUF-camelCase{margin-left:15px;color:#ce1313;text-decoration:underline;cursor:pointer}.styles__headerBelowContainer___i98jW-camelCase{width:calc(75% - 10px);min-height:50px;padding:0 5px;margin:-20px 12.5% 20px;min-width:500px;background-color:#fff;border-bottom-left-radius:7px;border-bottom-right-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-flow:row wrap;justify-content:center;z-index:-1}.styles__headerBelowSection___3Y6hc-camelCase{width:33%;min-width:250px}.styles__headerBelowCenterSection___2rk8Y-camelCase,.styles__headerBelowSection___3Y6hc-camelCase{display:flex;flex-direction:row;align-items:center}.styles__headerBelowCenterSection___2rk8Y-camelCase{width:34%;min-width:150px}.styles__headerClockIcon___2mXZ7-camelCase{font-size:25px;color:#3a3a3a;line-height:35px;width:36px;margin-left:10px;margin-top:7px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerTimeText___3vD6V-camelCase{font-family:Nunito,sans-serif;font-size:20px;margin-top:10px;line-height:33px;padding-left:3px;color:#3a3a3a}.styles__headerButtonContainer___2oFkO-camelCase{width:180px;min-width:125px;margin-left:2.5%;flex-direction:column}.styles__headerButtonContainer___2oFkO-camelCase,.styles__hostButtonContainer___3LzUf-camelCase{display:flex;align-items:center;justify-content:center}.styles__hostButtonContainer___3LzUf-camelCase{width:100%;height:50px;margin:7px auto;flex-direction:row}.styles__noHostText___1nYG9-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a;text-align:center}.styles__hostButton___1xO6_-camelCase{width:80%;height:50px;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;display:flex;flex-direction:row;align-items:center;justify-content:center;outline:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__hostButton___1xO6_-camelCase:focus,.styles__hostButton___1xO6_-camelCase:hover{transform:scale(1.04)}.styles__hostIcon___2Fdj2-camelCase{font-size:23px;width:36px;text-align:center}.styles__hostIcon___2Fdj2-camelCase,.styles__hostText___2w8Q_-camelCase{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__hostText___2w8Q_-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__smallButtonsContainer___noaJn-camelCase{width:100%;height:40%;margin-top:10px;display:flex;flex-direction:row;justify-content:space-around;align-items:center}.styles__headerStarIconNo___3obT1-camelCase{font-size:30px;line-height:40px;width:40px;height:40px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;color:#3a3a3a}.styles__headerStarIconNo___3obT1-camelCase:hover{color:#ffa203}.styles__headerStarIconYes___h1IRQ-camelCase{color:#ffa203}.styles__headerStarIconYes___h1IRQ-camelCase,.styles__reportIcon___VVO8q-camelCase{font-size:30px;line-height:40px;width:40px;height:40px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none}.styles__reportIcon___VVO8q-camelCase{color:#3a3a3a}.styles__reportIcon___VVO8q-camelCase:hover{color:#ce1313}.styles__copyIcon___3W2UK-camelCase{font-size:30px;line-height:40px;width:40px;height:40px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;color:#3a3a3a}.styles__copyIcon___3W2UK-camelCase:hover{color:#0bc2cf}.styles__questionSection___1usTX-camelCase{display:flex;flex-direction:column}.styles__questionContainer___1PjTY-camelCase{width:80%;min-height:130px;padding:0;margin:25px 10% 20px;min-width:500px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___2Uar_-camelCase{background-color:#333;display:flex;flex-direction:row;justify-content:center;align-items:center;overflow:hidden;margin:auto 0;position:relative}.styles__questionImage___13sdU-camelCase,.styles__questionImageContainer___2Uar_-camelCase{width:170px;height:130px;border-top-left-radius:7px;border-bottom-left-radius:7px}.styles__questionImage___13sdU-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__imageNumber___tu3KJ-camelCase{width:170px;height:130px;font-family:Titan One,sans-serif;font-size:50px;text-align:center;line-height:130px;color:#fff;text-shadow:2px 2px 8px grey;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionCenterContainer___13sLW-camelCase{display:flex;flex-direction:column;margin:10px 10px 5px 15px;width:calc(100% - 298px);min-height:115px}.styles__questionText___15YbJ-camelCase{font-family:Nunito,sans-serif;font-size:22px;color:#3a3a3a;word-wrap:break-word;flex-grow:1}.styles__showAnswersContainer___3KuDa-camelCase{display:flex;flex-direction:row;line-height:20px;color:#3a3a3a;cursor:pointer;width:165px;outline:none}.styles__showAnswersContainer___3KuDa-camelCase:hover{color:#0bc2cf}.styles__showAnswersText___axM3M-camelCase{font-family:Nunito,sans-serif;font-size:18px}.styles__showAnswersIcon___-lh6h-camelCase,.styles__showAnswersText___axM3M-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__showAnswersIcon___-lh6h-camelCase{font-size:28px;padding-left:7px;margin-top:-3px}.styles__questionRightContainer___2Loif-camelCase{height:100%;margin:auto 0}.styles__questionRightColumn___3-D0z-camelCase,.styles__questionRightContainer___2Loif-camelCase{width:100px;display:flex;flex-direction:column}.styles__questionRightColumn___3-D0z-camelCase{height:63.5px;text-align:center;color:#3a3a3a}.styles__questionRandomRow___1TKlb-camelCase,.styles__questionRightColumn___3-D0z-camelCase{justify-content:center;align-items:center}.styles__questionRandomRow___1TKlb-camelCase{display:flex;flex-direction:row}.styles__tallVerticalDivider___3WG2l-camelCase{width:3px;height:130px;background-color:#e0e0e0;margin:auto 0}.styles__horizontalDivider___VfOl3-camelCase{width:100%;height:3px;background-color:#e0e0e0}.styles__tooltip___2W_AE-camelCase{font-family:Nunito,sans-serif;font-size:15px;padding:6px 13px}.styles__timeLimitText___3oQwK-camelCase{font-family:Nunito,sans-serif;font-size:20px;font-weight:700}.styles__randomIcon___35Jeb-camelCase,.styles__timeLimitText___3oQwK-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__randomIcon___35Jeb-camelCase{font-size:25px;margin:auto 7px}.styles__randomText___2dXca-camelCase{font-size:10px;line-height:11px;width:75%;margin:3px auto 0}.styles__answerContainer___1K-bf-camelCase{width:calc(75% - 10px);padding:0 5px;height:0;overflow:hidden;margin:-30px 12.5% 30px;min-width:400px;background-color:#fff;border-bottom-left-radius:7px;border-bottom-right-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:-1}.styles__answerContainerOut___dJp8X-camelCase{height:auto;margin:-20px 12.5% 20px}.styles__answerText___NghRH-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#fff;text-align:center}.styles__answer___1e6sy-camelCase{min-height:60px;padding:5px;margin:10px;border-radius:7px;flex-grow:1;flex-basis:25%;display:flex;justify-content:center;align-items:center;word-wrap:break-word;overflow-x:hidden}.styles__faded___2KZR2-camelCase{opacity:.5}.styles__bottomSpacer___1_xdM-camelCase{height:30px}.styles__reportModal___1-qeq-camelCase{display:block;position:fixed;z-index:15;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.6)}.styles__reportContainer___3wKUr-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__reportHeader___1-QNf-camelCase{margin:25px auto 15px}.styles__duplicateHeader___pFcrk-camelCase,.styles__reportHeader___1-QNf-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;color:#3a3a3a}.styles__duplicateHeader___pFcrk-camelCase{margin:25px auto}.styles__reportText___1QfqM-camelCase{margin:10px 25px 15px}.styles__reportInput___3x7pf-camelCase,.styles__reportText___1QfqM-camelCase{font-family:Nunito,sans-serif;font-size:18px;color:#3a3a3a}.styles__reportInput___3x7pf-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:10px auto;padding:15px;width:400px;height:100px;text-align:left;outline:none;resize:none}.styles__reportInput___3x7pf-camelCase:focus{border-color:#0bc2cf}.styles__reportInputFilled___YWscI-camelCase{border-color:#3a3a3a}.styles__reportButtonContainer___3iTyw-camelCase{width:100%;margin-top:15px;margin-bottom:25px;display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__reportYesButton___2Vra_-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportYesButton___2Vra_-camelCase:focus,.styles__reportYesButton___2Vra_-camelCase:hover{border-color:#ce1313;color:#ce1313;font-weight:700}.styles__reportNoButton___3kXZw-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto;color:#3a3a3a;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__reportNoButton___3kXZw-camelCase:focus,.styles__reportNoButton___3kXZw-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__mainColumn___2pLOF-camelCase{display:flex;flex-direction:column}@media only screen and (max-width:600px){.styles__headerContainer___2624n-camelCase{flex-direction:column;min-width:200px;height:auto}.styles__headerFillerContainer___1YysX-camelCase,.styles__headerImageContainer___2BXV2-camelCase{width:100%}.styles__headerTextContainer___3VV9J-camelCase{width:100%;margin:10px 0 0}.styles__headerTitle___2gLpg-camelCase{min-height:83px;height:auto}.styles__headerDesc___3G14m-camelCase{min-height:50px;height:auto;font-size:20px;margin-top:0}.styles__headerBottomContainer___2_6PR-camelCase{margin:5px 0}.styles__headerButtonContainer___2oFkO-camelCase{width:90%;margin:0 auto}.styles__hostButtonContainer___3LzUf-camelCase{margin:10px auto 0}.styles__smallButtonsContainer___noaJn-camelCase{width:90%;height:40px;margin:20px auto 0}.styles__headerBelowContainer___i98jW-camelCase{width:calc(80% - 10px);margin:-20px auto 20px;min-width:100px}.styles__headerBelowCenterSection___2rk8Y-camelCase,.styles__headerBelowSection___3Y6hc-camelCase{width:100%;min-width:100px}.styles__reportContainer___3wKUr-camelCase{width:80%}.styles__reportText___1QfqM-camelCase{font-size:14px;margin:5px 25px}.styles__reportInput___3x7pf-camelCase{width:calc(90% - 30px)}.styles__questionContainer___1PjTY-camelCase{width:90%;height:auto;margin:25px auto 20px;min-width:200px;flex-direction:column}.styles__questionImage___13sdU-camelCase,.styles__questionImageContainer___2Uar_-camelCase{width:100%;height:150px;border-bottom-left-radius:0;border-top-right-radius:7px}.styles__questionImage___13sdU-camelCase{-o-object-fit:contain;object-fit:contain}.styles__imageNumber___tu3KJ-camelCase{width:100%;height:150px;line-height:150px}.styles__questionCenterContainer___13sLW-camelCase{margin:5px auto;width:90%;height:auto}.styles__questionText___15YbJ-camelCase{min-height:90px;height:auto;margin-bottom:10px}.styles__questionRightContainer___2Loif-camelCase{width:100%;height:50px;flex-direction:row}.styles__questionRightColumn___3-D0z-camelCase{width:50%;height:50px}.styles__tallVerticalDivider___3WG2l-camelCase{height:3px;width:100%}.styles__horizontalDivider___VfOl3-camelCase{width:3px;height:100%}.styles__answerContainer___1K-bf-camelCase{width:calc(85% - 10px);margin:-30px 7.5% 30px;min-width:200px;flex-direction:column}.styles__answerContainerOut___dJp8X-camelCase{height:auto;padding-top:5px;margin:-20px 7.5% 20px}.styles__answer___1e6sy-camelCase{margin:4px}}.styles__bigScreen___2IBXB-camelCase{display:flex}.styles__smallScreen___3hgjD-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___2IBXB-camelCase{display:none}.styles__smallScreen___3hgjD-camelCase{display:flex}}',
      ''
    ]), t.locals = {
      headerContainer: 'styles__headerContainer___2624n-camelCase',
      headerImageContainer: 'styles__headerImageContainer___2BXV2-camelCase',
      headerImage: 'styles__headerImage___2-k5L-camelCase',
      headerFillerContainer: 'styles__headerFillerContainer___1YysX-camelCase',
      headerFillerText: 'styles__headerFillerText___1_lKe-camelCase',
      headerTextContainer: 'styles__headerTextContainer___3VV9J-camelCase',
      headerTitle: 'styles__headerTitle___2gLpg-camelCase',
      headerDesc: 'styles__headerDesc___3G14m-camelCase',
      headerBottomContainer: 'styles__headerBottomContainer___2_6PR-camelCase',
      headerAuthorIcon: 'styles__headerAuthorIcon___2H-mM-camelCase',
      headerAuthorText: 'styles__headerAuthorText___X4iUm-camelCase',
      deleteButton: 'styles__deleteButton___3KpUF-camelCase',
      headerBelowContainer: 'styles__headerBelowContainer___i98jW-camelCase',
      headerBelowSection: 'styles__headerBelowSection___3Y6hc-camelCase',
      headerBelowCenterSection: 'styles__headerBelowCenterSection___2rk8Y-camelCase',
      headerClockIcon: 'styles__headerClockIcon___2mXZ7-camelCase',
      headerTimeText: 'styles__headerTimeText___3vD6V-camelCase',
      headerButtonContainer: 'styles__headerButtonContainer___2oFkO-camelCase',
      hostButtonContainer: 'styles__hostButtonContainer___3LzUf-camelCase',
      noHostText: 'styles__noHostText___1nYG9-camelCase',
      hostButton: 'styles__hostButton___1xO6_-camelCase',
      hostIcon: 'styles__hostIcon___2Fdj2-camelCase',
      hostText: 'styles__hostText___2w8Q_-camelCase',
      smallButtonsContainer: 'styles__smallButtonsContainer___noaJn-camelCase',
      headerStarIconNo: 'styles__headerStarIconNo___3obT1-camelCase',
      headerStarIconYes: 'styles__headerStarIconYes___h1IRQ-camelCase',
      reportIcon: 'styles__reportIcon___VVO8q-camelCase',
      copyIcon: 'styles__copyIcon___3W2UK-camelCase',
      questionSection: 'styles__questionSection___1usTX-camelCase',
      questionContainer: 'styles__questionContainer___1PjTY-camelCase',
      questionImageContainer: 'styles__questionImageContainer___2Uar_-camelCase',
      questionImage: 'styles__questionImage___13sdU-camelCase',
      imageNumber: 'styles__imageNumber___tu3KJ-camelCase',
      questionCenterContainer: 'styles__questionCenterContainer___13sLW-camelCase',
      questionText: 'styles__questionText___15YbJ-camelCase',
      showAnswersContainer: 'styles__showAnswersContainer___3KuDa-camelCase',
      showAnswersText: 'styles__showAnswersText___axM3M-camelCase',
      showAnswersIcon: 'styles__showAnswersIcon___-lh6h-camelCase',
      questionRightContainer: 'styles__questionRightContainer___2Loif-camelCase',
      questionRightColumn: 'styles__questionRightColumn___3-D0z-camelCase',
      questionRandomRow: 'styles__questionRandomRow___1TKlb-camelCase',
      tallVerticalDivider: 'styles__tallVerticalDivider___3WG2l-camelCase',
      horizontalDivider: 'styles__horizontalDivider___VfOl3-camelCase',
      tooltip: 'styles__tooltip___2W_AE-camelCase',
      timeLimitText: 'styles__timeLimitText___3oQwK-camelCase',
      randomIcon: 'styles__randomIcon___35Jeb-camelCase',
      randomText: 'styles__randomText___2dXca-camelCase',
      answerContainer: 'styles__answerContainer___1K-bf-camelCase',
      answerContainerOut: 'styles__answerContainerOut___dJp8X-camelCase',
      answerText: 'styles__answerText___NghRH-camelCase',
      answer: 'styles__answer___1e6sy-camelCase',
      faded: 'styles__faded___2KZR2-camelCase',
      bottomSpacer: 'styles__bottomSpacer___1_xdM-camelCase',
      reportModal: 'styles__reportModal___1-qeq-camelCase',
      reportContainer: 'styles__reportContainer___3wKUr-camelCase',
      reportHeader: 'styles__reportHeader___1-QNf-camelCase',
      duplicateHeader: 'styles__duplicateHeader___pFcrk-camelCase',
      reportText: 'styles__reportText___1QfqM-camelCase',
      reportInput: 'styles__reportInput___3x7pf-camelCase',
      reportInputFilled: 'styles__reportInputFilled___YWscI-camelCase',
      reportButtonContainer: 'styles__reportButtonContainer___3iTyw-camelCase',
      reportYesButton: 'styles__reportYesButton___2Vra_-camelCase',
      reportNoButton: 'styles__reportNoButton___3kXZw-camelCase',
      mainColumn: 'styles__mainColumn___2pLOF-camelCase',
      bigScreen: 'styles__bigScreen___2IBXB-camelCase',
      smallScreen: 'styles__smallScreen___3hgjD-camelCase'
    };
  },
  xlja: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), o = a.n(n), s = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), m = a('b6Qr'), d = (a('vDqi'), a('EEzQ')), u = a('pMbe'), h = a('5gLy'), p = a('GIcp'), _ = a.n(p), f = a('m6rd'), y = a.n(f), g = a('iQ+n'), b = a('anyA'), x = {
        Defense: {
          name: 'Tower Defense',
          img: 'https://res.cloudinary.com/blooket/image/upload/v1594599807/Media/towerDefense.png',
          active: !0,
          mobile: !0,
          canLoad: !0
        },
        Cafe: {
          name: 'Café',
          img: 'https://res.cloudinary.com/blooket/image/upload/v1594599609/Media/Cafe.png',
          active: !0,
          mobile: !0,
          canLoad: !0
        },
        Tower: {
          name: 'Tower of Doom',
          img: 'https://res.cloudinary.com/blooket/image/upload/v1594599953/Media/Tower.png',
          active: !0,
          mobile: !0,
          canLoad: !0
        },
        Kingdom: {
          name: 'Crazy Kingdom',
          img: 'https://res.cloudinary.com/blooket/image/upload/v1596390340/Media/CrazyKingdom.png',
          active: !0,
          mobile: !0,
          canLoad: !1
        },
        Factory: {
          name: 'Factory',
          img: 'https://res.cloudinary.com/blooket/image/upload/v1561128265/Media/Factory.png',
          active: !0,
          mobile: !0,
          canLoad: !1
        }
      }, w = a('SCqF'), v = a('TN+F'), C = a('SdQT');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function T(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], n = !0, o = !1, s = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(n = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); n = !0);
        } catch (e) {
          o = !0, s = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (o)
              throw s;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return S(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return S(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function N(e, t, a, n, o, s, r) {
      try {
        var i = e[s](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(n, o);
    }
    function O(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function I(e, t) {
      return (I = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function k(e) {
      var t = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct)
          return !1;
        if (Reflect.construct.sham)
          return !1;
        if ('function' == typeof Proxy)
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0;
        } catch (e) {
          return !1;
        }
      }();
      return function () {
        var a, n = B(e);
        if (t) {
          var o = B(this).constructor;
          a = Reflect.construct(n, arguments, o);
        } else
          a = n.apply(this, arguments);
        return R(this, a);
      };
    }
    function R(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? A(e) : t;
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var P = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && I(e, t);
      }(l, e);
      var t, a, n, s, r, i = k(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          settings: {
            type: '',
            method: ''
          },
          factoryPopUp: !1,
          factoryTime: 7,
          ready: !1,
          isBen: !1
        }, t.loading = !1, t.id = '', t.name = '', t.onPlay = t.onPlay.bind(A(t)), t.selectMode = t.selectMode.bind(A(t)), t.startFactory = t.startFactory.bind(A(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (s = regeneratorRuntime.mark(function e() {
            var t, a;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  if (t = e.sent) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 5:
                  this.name = t.name, (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : [
                    'Bot',
                    'Ben',
                    'test'
                  ].includes(t.name)) && this.setState({ isBen: !0 }), this.here = !0, this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), (a = Object(v.i)('id')) ? (this.id = a, this.props.addGameId(a), this.setState({ ready: !0 })) : this.setState({
                    loading: !0,
                    ready: !0
                  });
                case 12:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var o = s.apply(e, t);
              function r(e) {
                N(o, a, n, r, i, 'next', e);
              }
              function i(e) {
                N(o, a, n, r, i, 'throw', e);
              }
              r(void 0);
            });
          }, function () {
            return r.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1;
          }
        },
        {
          key: 'onPlay',
          value: function () {
            'Tower' === this.state.settings.type ? this.props.history.push('/tower/load') : 'Cafe' === this.state.settings.type ? this.props.history.push('/cafe/load') : 'Defense' === this.state.settings.type ? this.props.history.push('/defense/load') : 'Kingdom' === this.state.settings.type ? this.props.history.push('/kingdom/start') : this.setState({
              factoryPopUp: !0,
              factoryTime: 7
            });
          }
        },
        {
          key: 'selectMode',
          value: function (e) {
            var t = this;
            this.setState({ settings: { type: e } }, function () {
              t.onPlay();
            });
          }
        },
        {
          key: 'startFactory',
          value: function () {
            this.loading || (this.loading = !0, this.setState({ loading: !0 }), this.props.login(this.name), this.props.setFactory('Time-Solo', this.state.factoryTime, [], !1, !1), this.props.history.push('/play/factory/start'));
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return o.a.createElement('div', {
              className: m.isMobile ? _.a.mBody : _.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, o.a.createElement(g.a, {
              title: 'Play Solo | Blooket',
              desc: 'Play a game of Blooket solo. No need for a host or other players, just you, the game, and a whole bunch of learning.'
            }), this.state.ready ? o.a.createElement('div', { className: y.a.selectText }, this.state.loading ? 'Select a Game Mode to Load' : 'Select a Game Mode') : null, o.a.createElement('div', { className: y.a.modesArray }, Object.entries(x).map(function (t) {
              var a = T(t, 2), n = a[0], s = a[1];
              return !s.active && !e.state.isBen || !s.canLoad && e.state.loading || m.isMobile && !s.mobile ? null : o.a.createElement('div', {
                className: y.a.modeContainer,
                role: 'button',
                tabIndex: 0,
                key: n,
                onClick: function () {
                  return e.selectMode(n);
                }
              }, o.a.createElement('img', {
                src: Object(v.d)(x[n].img),
                alt: n,
                className: y.a.modeImage,
                draggable: 'false'
              }), x[n].name.split(' ').length > 1 ? o.a.createElement('div', { className: y.a.modeTextTwo }, x[n].name.split(' ')[0], o.a.createElement('br', null), x[n].name.split(' ').length > 2 ? ''.concat(x[n].name.split(' ')[1], ' ').concat(x[n].name.split(' ')[2]) : x[n].name.split(' ')[1]) : o.a.createElement('div', { className: y.a.modeText }, x[n].name), x[n].limited ? o.a.createElement('div', { className: y.a.limitedTime }, 'Limited Time') : null);
            })), this.state.factoryPopUp ? o.a.createElement(w.a, {
              text: 'How long would you like to play for (minutes)?',
              loading: this.state.loading,
              timeValue: this.state.factoryTime,
              timeChange: function (t) {
                return e.setState({ factoryTime: Math.max(0, Math.min(60, t.target.value)) });
              },
              onSubmit: function (t) {
                t.preventDefault(), e.startFactory();
              },
              buttonOne: {
                text: 'Start',
                click: function () {
                  return e.startFactory();
                },
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({ factoryPopUp: !1 });
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && O(t.prototype, a), n && O(t, n), l;
    }(o.a.Component);
    P.propTypes = {
      host: l.a.object,
      id: l.a.string,
      deleteHost: l.a.func.isRequired,
      addGameId: l.a.func.isRequired,
      setFactory: l.a.func.isRequired,
      login: l.a.func.isRequired,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(b.c)(Object(c.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(s.b)({
        deleteHost: h.c,
        addGameId: d.a,
        setFactory: u.e,
        login: u.b
      }, e);
    })(Object(C.d)(P))));
  },
  yawX: function (e, t, a) {
    var n = a('4tbd');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var o = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, o);
    n.locals && (e.exports = n.locals);
  }
}]);
