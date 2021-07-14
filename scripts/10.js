(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{
  '+Ypt': function (e, t, n) {
    var a = n('beCI');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  '/kI9': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('wIs1'), c = n('17x9'), l = n.n(c), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('b6Qr'), _ = n('anyA'), h = n('GIcp'), y = n.n(h), b = n('yvNf'), g = n.n(b), v = n('dJL0'), w = n('iQ+n'), x = n('I0uU'), C = n('TN+F');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function I(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function j(e) {
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
        var n, a = N(e);
        if (t) {
          var r = N(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return T(this, n);
      };
    }
    function T(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? P(e) : t;
    }
    function P(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var R = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && S(e, t);
      }(c, e);
      var t, n, a, o, s, i = j(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          name: '',
          nameError: '',
          loading: !1
        }, t.loading = !1, t.name = '', t.onSubmit = t.onSubmit.bind(P(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t;
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
                  this.name = t.name;
                case 6:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                I(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                I(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'onSubmit',
          value: function (e) {
            var t = this;
            if (e.preventDefault(), !this.loading) {
              this.loading = !0, this.setState({ loading: !0 });
              var n = Object(C.A)(this.state.name);
              this.setState({ nameError: n }, function () {
                t.state.nameError ? (t.loading = !1, t.setState({ loading: !1 })) : (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/change/name', {
                  name: t.name,
                  newName: t.state.name
                }).then(function (e) {
                  !0 === e.data.success ? (localStorage.removeItem('token'), window.location.reload()) : (t.loading = !1, t.setState(O({ loading: !1 }, ''.concat(e.data.errType, 'Error'), e.data.msg)));
                }).catch(function (e) {
                  console.error(e);
                }));
              });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return r.a.createElement('div', { className: d.isMobile ? y.a.mBody : y.a.body }, r.a.createElement(w.a, {
              title: 'Change Name | Blooket',
              desc: 'Change the name for your Blooket account.'
            }), r.a.createElement(v.a, {
              rightText: 'Settings',
              rightLink: '/settings'
            }), r.a.createElement('div', { className: y.a.slantBackground }), r.a.createElement('div', { className: y.a.regularBody }, r.a.createElement('form', {
              onSubmit: this.onSubmit,
              className: g.a.container
            }, r.a.createElement('div', { className: g.a.containerHeader }, 'Change Name'), r.a.createElement('div', null, r.a.createElement('div', { className: m()(d.isMobile ? g.a.mInputContainer : g.a.inputContainer, O({}, g.a.inputFilled, this.state.name), O({}, g.a.inputError, this.state.nameError)) }, r.a.createElement('i', { className: m()(g.a.icon, 'fas fa-user', O({}, g.a.iconFilled, this.state.name), O({}, g.a.iconError, this.state.nameError)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? g.a.mInput : g.a.input, O({}, g.a.inputError, this.state.nameError)),
              placeholder: 'New Name',
              onChange: function (t) {
                return e.setState({
                  name: t.target.value.trim().slice(0, 15),
                  nameError: ''
                });
              },
              value: this.state.name,
              type: 'text',
              autoFocus: d.isMobile ? '' : 'autofocus'
            })), this.state.loading ? r.a.createElement(x.a, null) : r.a.createElement('input', {
              type: 'submit',
              value: 'Change Name',
              className: m()(g.a.button, O({}, g.a.buttonFilled, this.state.name), O({}, g.a.buttonError, this.state.nameError)),
              tabIndex: 0
            })), this.state.nameError ? r.a.createElement('div', { className: g.a.errorContainer }, r.a.createElement('i', { className: m()(g.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: g.a.errorText }, this.state.nameError)) : null)));
          }
        }
      ]) && k(t.prototype, n), a && k(t, a), c;
    }(r.a.Component);
    R.propTypes = {
      history: l.a.object,
      user: l.a.object
    };
    t.a = Object(_.c)(Object(i.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(R)));
  },
  '/uSj': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('vDqi'), f = n.n(p), m = n('b6Qr'), d = n('pMbe'), _ = n('dJL0'), h = n('3WHE'), y = n.n(h), b = n('GIcp'), g = n.n(b), v = n('iQ+n'), w = n('ZENw'), x = n('TN+F'), C = n('SdQT');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function I(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? O(Object(n), !0).forEach(function (t) {
          k(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function k(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function S(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function j(e, t) {
      return (j = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function T(e) {
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
        var n, a = R(e);
        if (t) {
          var r = R(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return P(this, n);
      };
    }
    function P(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? N(e) : t;
    }
    function N(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function R(e) {
      return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var q = function (e) {
        return r.a.createElement('div', { className: y.a.pointsText }, Object(x.n)(e.points || 0));
      }, D = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && j(e, t);
        }(s, e);
        var t, n, a, o = T(s);
        function s(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, s), (t = o.call(this, e)).state = {
            numCorrect: '',
            numQuestions: '',
            ready: !1,
            points: 0
          }, t.saveStats = t.saveStats.bind(N(t)), t;
        }
        return t = s, (n = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                var t = this.props.client.standing.map(function (e) {
                    return e.name;
                  }).indexOf(this.props.client.name), n = 0, a = 0;
                if (Object.values(this.props.client.corrects).forEach(function (e) {
                    n += e, a += e;
                  }), Object.values(this.props.client.incorrects).forEach(function (e) {
                    a += e;
                  }), this.props.firebase.setVal({
                    id: this.props.client.hostId,
                    path: 'c/'.concat(this.props.client.name),
                    val: {
                      c: I({}, this.props.client.corrects),
                      i: I({}, this.props.client.incorrects)
                    }
                  }), -1 !== t) {
                  var r = this.props.client.standing[t], o = r.place, s = this.props.client.standing.length - o;
                  this.stats = {
                    place: o,
                    points: r.points,
                    playersDefeated: s,
                    correctAnswers: n,
                    blookUsed: this.props.client.blook,
                    nameUsed: this.props.client.name
                  }, this.props.client.username && this.saveStats(this.props.client.username, function () {
                  }), this.readyTimeout = setTimeout(function () {
                    e.setState({
                      ready: !0,
                      numCorrect: n,
                      numQuestions: a,
                      points: r.points
                    });
                  }, 4750);
                }
              }
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.readyTimeout), this.props.deleteClient();
            }
          },
          {
            key: 'saveStats',
            value: function (e, t) {
              f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/classicstats', {
                name: e,
                place: this.stats.place,
                classicPoints: this.stats.points,
                playersDefeated: this.stats.playersDefeated,
                correctAnswers: this.stats.correctAnswers,
                blookUsed: this.stats.blookUsed,
                nameUsed: this.stats.nameUsed
              }).then(function () {
                t();
              }).catch(function (e) {
                console.error(e);
              });
            }
          },
          {
            key: 'render',
            value: function () {
              return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement('div', {
                className: m.isMobile ? g.a.mBody : g.a.body,
                style: { backgroundColor: '#0bc2cf' }
              }, r.a.createElement(v.a, {
                title: 'Play Blooket',
                desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
              }), r.a.createElement(_.a, {
                leftText: this.props.client.name,
                rightText: 'Play Again',
                rightLink: '/play'
              }), this.state.ready ? r.a.createElement(w.a, {
                standings: this.props.client.standing,
                name: this.props.client.name,
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.props.client.username,
                plus: this.props.client.plus,
                myStat: ''.concat(Object(x.n)(this.state.points), ' ').concat(1 === this.state.points ? 'Point' : 'Points'),
                saveStats: this.saveStats,
                renderStandingStat: q,
                renderStats: function () {
                },
                tokenMultiplier: 0.5
              }) : null) : r.a.createElement(u.a, { to: '/play' });
            }
          }
        ]) && S(t.prototype, n), a && S(t, a), s;
      }(r.a.Component);
    D.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        answer: c.a.string,
        raceResult: c.a.array,
        standing: c.a.array,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.object,
        question: c.a.object,
        raceFinishes: c.a.array,
        tens: c.a.number,
        fifties: c.a.number,
        username: c.a.string,
        mode: c.a.string,
        type: c.a.string,
        incorrects: c.a.object,
        upgrades: c.a.number,
        team: c.a.object,
        plus: c.a.bool
      }),
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({ deleteClient: d.a }, e);
    })(Object(C.d)(D)));
  },
  '0f1Z': function (e, t, n) {
    var a = n('S+tU');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  '0fhY': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('b6Qr'), _ = n('anyA'), h = n('GIcp'), y = n.n(h), b = n('yvNf'), g = n.n(b), v = n('dJL0'), w = n('iQ+n'), x = n('I0uU');
    function C(e) {
      return (C = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function E(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function O(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function I(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function k(e, t) {
      return (k = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function S(e) {
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
        var n, a = P(e);
        if (t) {
          var r = P(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return j(this, n);
      };
    }
    function j(e, t) {
      return !t || 'object' !== C(t) && 'function' != typeof t ? T(e) : t;
    }
    function T(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var N = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && k(e, t);
      }(c, e);
      var t, n, a, o, s, i = S(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          password: '',
          password2: '',
          passwordError: '',
          password2Error: '',
          loading: !1
        }, t.loading = !1, t.name = '', t.onSubmit = t.onSubmit.bind(T(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t;
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
                  this.name = t.name;
                case 6:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                O(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                O(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'onSubmit',
          value: function (e) {
            var t = this;
            if (e.preventDefault(), !this.loading) {
              this.loading = !0, this.setState({ loading: !0 });
              var n = '', a = '';
              this.state.password ? this.state.password.length < 8 ? n = 'Password must have at least 8 characters.' : this.state.password.length > 72 ? n = 'Password is too long (trouble encrypting).' : /(?=.*[A-Z])/.test(this.state.password) ? /(?=.*[a-z])/.test(this.state.password) ? /(?=.*[0-9])/.test(this.state.password) || (n = 'Password must have at least 1 number digit.') : n = 'Password must have at least 1 lowercase letter.' : n = 'Password must have at least 1 uppercase letter.' : n = 'Where\'s The Password?', this.state.password !== this.state.password2 && (a = 'The passwords don\'t match.'), this.state.password2 || (a = 'Where\'s The Confirming Password?'), this.setState({
                passwordError: n,
                password2Error: a
              }, function () {
                t.state.passwordError || t.state.password2Error ? (t.loading = !1, t.setState({ loading: !1 })) : (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/addpassword', {
                  name: t.name,
                  password: t.state.password
                }).then(function (e) {
                  !0 === e.data.success ? (localStorage.removeItem('token'), window.location.reload()) : (t.loading = !1, t.setState({
                    loading: !1,
                    passwordError: e.data.msg
                  }));
                }).catch(function (e) {
                  console.error(e);
                }));
              });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return r.a.createElement('div', { className: d.isMobile ? y.a.mBody : y.a.body }, r.a.createElement(w.a, {
              title: 'Add Password | Blooket',
              desc: 'Add a password for your Blooket account.'
            }), r.a.createElement(v.a, {
              rightText: 'Settings',
              rightLink: '/settings'
            }), r.a.createElement('div', { className: y.a.slantBackground }), r.a.createElement('div', { className: y.a.regularBody }, r.a.createElement('form', {
              onSubmit: this.onSubmit,
              className: g.a.container
            }, r.a.createElement('div', { className: g.a.containerHeader }, 'Add Password'), r.a.createElement('div', null, r.a.createElement('div', { className: m()(d.isMobile ? g.a.mInputContainer : g.a.inputContainer, E({}, g.a.inputFilled, this.state.password), E({}, g.a.inputError, this.state.passwordError)) }, r.a.createElement('i', { className: m()(g.a.icon, 'fas fa-lock', E({}, g.a.iconFilled, this.state.password), E({}, g.a.iconError, this.state.passwordError)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? g.a.mInput : g.a.input, E({}, g.a.inputError, this.state.passwordError)),
              placeholder: 'Password',
              onChange: function (t) {
                return e.setState({
                  password: t.target.value.trim(),
                  passwordError: ''
                });
              },
              type: 'password',
              autoFocus: d.isMobile ? '' : 'autofocus'
            })), r.a.createElement('div', { className: m()(d.isMobile ? g.a.mInputContainer : g.a.inputContainer, E({}, g.a.inputFilled, this.state.password2), E({}, g.a.inputError, this.state.password2Error)) }, r.a.createElement('i', { className: m()(g.a.icon, 'fas fa-lock', E({}, g.a.iconFilled, this.state.password2), E({}, g.a.iconError, this.state.password2Error)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? g.a.mInput : g.a.input, E({}, g.a.inputError, this.state.password2Error)),
              placeholder: 'Confirm Password',
              onChange: function (t) {
                return e.setState({
                  password2: t.target.value,
                  password2Error: ''
                });
              },
              type: 'password'
            })), this.state.loading ? r.a.createElement(x.a, null) : r.a.createElement('input', {
              type: 'submit',
              value: 'Add Password',
              className: m()(g.a.button, E({}, g.a.buttonFilled, this.state.password && this.state.password2), E({}, g.a.buttonError, this.state.passwordError || this.state.password2Error)),
              tabIndex: 0
            })), this.state.passwordError || this.state.password2Error ? r.a.createElement('div', { className: g.a.errorContainer }, r.a.createElement('i', { className: m()(g.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: g.a.errorText }, this.state.passwordError || this.state.password2Error)) : null)));
          }
        }
      ]) && I(t.prototype, n), a && I(t, a), c;
    }(r.a.Component);
    N.propTypes = {
      history: c.a.object,
      user: c.a.object
    };
    t.a = Object(_.c)(Object(l.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(N)));
  },
  '3WHE': function (e, t, n) {
    var a = n('OFrE');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  '4ALq': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('mLw1'), u = n('wIs1'), p = n('vDqi'), f = n.n(p), m = n('1b17'), d = n('5gLy'), _ = n('9IXX'), h = n('GIcp'), y = n.n(h), b = n('iQ+n'), g = n('FC5S'), v = n('TN+F'), w = n('SdQT');
    function x(e) {
      return (x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function E(e, t) {
      return (E = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function O(e) {
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
        var n, a = S(e);
        if (t) {
          var r = S(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return I(this, n);
      };
    }
    function I(e, t) {
      return !t || 'object' !== x(t) && 'function' != typeof t ? k(e) : t;
    }
    function k(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function S(e) {
      return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var j = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && E(e, t);
      }(s, e);
      var t, n, a, o = O(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = o.call(this, e)).state = { muted: !!e.host && e.host.muted }, t.ok = !1, t.next = t.next.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t;
      }
      return t = s, (n = [
        {
          key: 'componentWillUnmount',
          value: function () {
            !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', v.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            this.props.host.question.number === this.props.host.questions.length ? (f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
              id: this.props.host.id,
              stage: 'cfin'
            }, function () {
              e.ok = !0, e.props.history.push('/host/classic/final');
            })) : (f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
              id: this.props.host.id,
              stage: 'cstd'
            }, function () {
              e.ok = !0, e.props.history.push('/host/classic/standings');
            }));
          }
        },
        {
          key: 'changeMuted',
          value: function () {
            var e = this;
            this.setState({ muted: !this.state.muted }, function () {
              e.props.setMuted(e.state.muted);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions ? r.a.createElement('div', { className: y.a.body }, r.a.createElement(b.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(_.a, {
              left: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
              right: 'QUESTION '.concat(this.props.host.question.number, '/').concat(this.props.host.questions.length),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement(g.a, {
              next: this.next,
              time: 7,
              text: this.props.host.question.text,
              answers: this.props.host.question.answers,
              correctAnswers: this.props.host.question.correctAnswers,
              image: this.props.host.question.image ? this.props.host.question.image.url : '',
              clientAnswers: this.props.host.standings.filter(function (e) {
                return e.answer || 0 === e.answer;
              }).map(function (e) {
                return e.answer;
              }),
              numClients: this.props.host.numClients,
              muted: this.state.muted,
              canSkip: !0
            })) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && C(t.prototype, n), a && C(t, a), s;
    }(r.a.Component);
    j.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        numClients: c.a.number,
        settings: c.a.object,
        standings: c.a.array,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(o.b)({
        setMuted: m.a,
        deleteHost: d.c
      }, e);
    })(Object(w.d)(j)));
  },
  '6GlF': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('1F66'), f = n.n(p), m = n('ZRP+'), d = n('4HzQ'), _ = n('b6Qr'), h = n('TSYQ'), y = n.n(h), b = n('xD7w'), g = n('pMbe'), v = n('2g2H'), w = n('iQ+n'), x = n('GIcp'), C = n.n(x), E = n('+Ypt'), O = n.n(E), I = n('DoX5'), k = n('TN+F'), S = n('SdQT');
    function j(e) {
      return (j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function T(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function P(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? T(Object(n), !0).forEach(function (t) {
          N(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function N(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function R(e) {
      return function (e) {
        if (Array.isArray(e))
          return q(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return q(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return q(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function q(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function D(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function A(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function z(e, t) {
      return (z = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function M(e) {
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
        var n, a = U(e);
        if (t) {
          var r = U(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return B(this, n);
      };
    }
    function B(e, t) {
      return !t || 'object' !== j(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function U(e) {
      return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var F = function (e) {
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
      }(c, e);
      var t, n, a, o, s, i = M(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          display: [],
          preShowPoints: !1,
          showPoints: !1,
          move: !1
        }, t.dbRef = {}, t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, n, a, r, o, s = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.name && this.props.client.standing) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(k.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 5:
                  if (this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                      var t = e.val();
                      if (t)
                        if (3 === t.split('-').length) {
                          var n = t.split('-'), a = s.props.client.questions.map(function (e) {
                              return e.number;
                            }).indexOf(parseInt(n[1], 10));
                          if (a < 0)
                            return;
                          for (var r = JSON.parse(JSON.stringify(s.props.client.questions[a])), o = R(r.answers), i = n[2].split(''), c = 0; c < o.length; c++)
                            r.answers[i[c]] = o[c];
                          s.props.getQuestion(r), s.props.history.push('/play/classic/question');
                        } else
                          'cfin' === t ? s.props.history.push('/play/classic/final') : 'crdy' === t ? s.props.history.push('/play/classic/get-ready') : 'cres' === t && s.props.history.push('/play/classic/answer/result');
                      else
                        s.props.deleteClient(), s.props.history.push('/play');
                    }), t = JSON.parse(JSON.stringify(this.props.client.standing)), (n = JSON.parse(JSON.stringify(t))).sort(function (e, t) {
                      var n = e.questionPlace - t.questionPlace;
                      return 0 === n ? e.time - t.time : n;
                    }), -1 !== (a = n.map(function (e) {
                      return e.name;
                    }).indexOf(this.props.client.name))) {
                    e.next = 13;
                    break;
                  }
                  return e.abrupt('return');
                case 13:
                  r = n.length, o = 0 === a ? [
                    0,
                    3
                  ] : a === r - 1 ? [
                    Math.max(0, a - 2),
                    r
                  ] : [
                    a - 1,
                    a + 2
                  ], this.setState({
                    display: n.slice(o[0], o[1]).map(function (e) {
                      return P(P({}, e), {}, {
                        points: e.points - e.questionPoints,
                        totalPoints: e.points
                      });
                    })
                  }, function () {
                    s.pointsTimeout = setTimeout(function () {
                      s.setState({ preShowPoints: !0 }, function () {
                        s.pointsTimeout = setTimeout(function () {
                          s.setState({ showPoints: !0 }), s.pointsTimeout = setTimeout(function () {
                            s.interval = setInterval(function () {
                              var e = JSON.parse(JSON.stringify(s.state.display));
                              e.forEach(function (t, n) {
                                t.points < t.totalPoints ? e[n].points += 1 : 0 === n && clearInterval(s.interval);
                              }), s.setState({ display: e });
                            }, Math.max(5, s.state.display.length > 0 && s.state.display[0] && s.state.display[0].questionPoints ? 1200 / s.state.display[0].questionPoints : 5));
                          }, 1000), s.moveTimeout = setTimeout(function () {
                            a = t.map(function (e) {
                              return e.name;
                            }).indexOf(s.props.client.name), r = t.length, o = 0 === a ? [
                              0,
                              3
                            ] : a === r - 1 ? [
                              Math.max(0, a - 2),
                              r
                            ] : [
                              a - 1,
                              a + 2
                            ], s.setState({
                              display: t.slice(o[0], o[1]),
                              move: !0
                            });
                          }, 3000);
                        }, 500);
                      });
                    }, 3000);
                  }), this.exitTimeout = setTimeout(function () {
                    s.setState({ display: [] });
                  }, 10000);
                case 17:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                D(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                D(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(k.t)(), clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval);
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.client && this.props.client.name ? r.a.createElement('div', {
              className: _.isMobile ? C.a.mBody : C.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, r.a.createElement(w.a, {
              title: 'Play Race | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(v.a, {
              name: this.props.client.name,
              rightText: this.props.client.points
            }), r.a.createElement(f.a, {
              data: this.state.display,
              keyAccessor: function (e) {
                return e.name;
              },
              start: function (e, t) {
                return {
                  opacity: 0.000001,
                  x: 100,
                  y: 13 * (t + 2) - 44
                };
              },
              enter: function (e, t) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [13 * (t + 2) - 44],
                  timing: {
                    duration: 500,
                    delay: 250 * (t + 1),
                    ease: m.a
                  }
                };
              },
              update: function (e, t) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [13 * (t + 2) - 44],
                  timing: {
                    duration: 500,
                    delay: 250 * (t + 1),
                    ease: m.a
                  }
                };
              },
              leave: function (e, t) {
                return {
                  opacity: [0.000001],
                  x: [-160],
                  timing: {
                    duration: 500,
                    delay: 250 * t,
                    ease: m.a
                  }
                };
              }
            }, function (t) {
              return r.a.createElement('div', { className: O.a.nodesContainer }, t.map(function (t) {
                var n = t.key, a = t.data, o = t.state, s = o.x, i = o.y, c = o.opacity;
                return r.a.createElement('div', {
                  className: O.a.standingHolder,
                  style: {
                    opacity: c,
                    transform: 'translate('.concat(s, 'vw, ').concat(i, 'vh)')
                  },
                  key: n
                }, r.a.createElement('div', { className: O.a.standingContainer }, r.a.createElement('div', { className: O.a.placeText }, e.state.move ? a.place : a.questionPlace), r.a.createElement('div', { className: O.a.superPlaceText }, Object(k.g)(e.state.move ? a.place : a.questionPlace)), r.a.createElement(I.a, {
                  name: a.blook,
                  className: O.a.blookBox
                }), r.a.createElement(d.Textfit, {
                  className: O.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: Object(k.C)('5vh')
                }, a.name), r.a.createElement('div', { className: y()(O.a.pointsText, N({}, O.a.fadeIn, e.state.showPoints), N({}, O.a.fadeOut, e.state.preShowPoints && !e.state.showPoints)) }, e.state.showPoints ? Object(k.n)(a.points) : a.correct ? ''.concat((a.time / 1000).toFixed(3), 's') : r.a.createElement('i', { className: 'fas fa-times' })), r.a.createElement('div', { className: y()(O.a.addText, e.state.move ? O.a.fadeOut : O.a.fadeIn) }, '+'.concat(a.questionPoints))));
              }));
            })) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && A(t.prototype, n), a && A(t, a), c;
    }(r.a.Component);
    F.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        answer: c.a.string,
        raceResult: c.a.array,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.object,
        incorrects: c.a.object,
        team: c.a.object,
        standing: c.a.array
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      getQuestion: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({
        deleteClient: g.a,
        getQuestion: b.a
      }, e);
    })(Object(S.d)(F)));
  },
  '6h2n': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('TSYQ'), f = n.n(p), m = n('b6Qr'), d = n('pMbe'), _ = n('2g2H'), h = n('iQ+n'), y = n('7HkA'), b = n('GIcp'), g = n.n(b), v = n('XdgN'), w = n.n(v), x = n('EOwo'), C = n('SdQT'), E = n('TN+F');
    function O(e) {
      return (O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function I(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function j(e) {
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
        var n, a = P(e);
        if (t) {
          var r = P(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return T(this, n);
      };
    }
    function T(e, t) {
      return !t || 'object' !== O(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var N = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && S(e, t);
      }(c, e);
      var t, n, a, o, s, i = j(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          transitioning: !1,
          tip: Object(x.a)()
        }, t.dbRef = {}, t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(E.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 5:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    switch (e.val()) {
                    case 'cres':
                      t.props.history.push('/play/classic/answer/result');
                      break;
                    case 'cstd':
                      t.props.history.push('/play/classic/standings');
                      break;
                    case 'cfin':
                      t.props.history.push('/play/classic/final');
                      break;
                    case 'crdy':
                      t.props.history.push('/play/classic/get-ready');
                      break;
                    case null:
                      t.props.deleteClient(), t.props.history.push('/play');
                    }
                  });
                case 7:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                I(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                I(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(E.t)(), clearTimeout(this.timeout);
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client ? r.a.createElement('div', {
              className: m.isMobile ? g.a.mBody : g.a.body,
              style: {
                backgroundColor: '#fff',
                overflow: 'hidden'
              }
            }, r.a.createElement(h.a, {
              title: 'Play Classic | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(_.a, {
              name: this.props.client.name,
              rightText: this.props.client.points
            }), r.a.createElement('div', { className: g.a.regularBody }, r.a.createElement(y.a, {
              header: 'Answer Sent!',
              blook: this.props.client.blook,
              transition: this.state.transitioning
            }), r.a.createElement('div', {
              className: f()(g.a.bottomTipText, (e = {}, t = w.a.textFade, n = this.state.transitioning, t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = n, e))
            }, this.state.tip), r.a.createElement('div', { className: this.state.transitioning ? w.a.fade : w.a.fadeWaiting }))) : r.a.createElement(u.a, { to: '/play' });
            var e, t, n;
          }
        }
      ]) && k(t.prototype, n), a && k(t, a), c;
    }(r.a.Component);
    N.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        blook: c.a.string,
        question: c.a.object,
        questions: c.a.array,
        totalPoints: c.a.number,
        corrects: c.a.object,
        incorrects: c.a.object,
        team: c.a.object
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({ deleteClient: d.a }, e);
    })(Object(C.d)(N)));
  },
  '7W4d': function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var a = 'SET_CLASSIC_RESULTS';
  },
  '8+ym': function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__container___3W1g2-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__containerHeader___3z4tl-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___-ZPXF-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row;align-items:center}.styles__inputContainer___-ZPXF-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___-ZPXF-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___-ZPXF-camelCase[focus-within]>.styles__icon___3Kmk2-camelCase{color:#0bc2cf}.styles__inputContainer___-ZPXF-camelCase:focus-within>.styles__icon___3Kmk2-camelCase{color:#0bc2cf}.styles__mInputContainer___C7IKa-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:280px;height:50px;margin:auto auto 10px;display:flex;flex-direction:row;align-items:center}.styles__mInputContainer___C7IKa-camelCase[focus-within]{border-color:#0bc2cf}.styles__mInputContainer___C7IKa-camelCase:focus-within{border-color:#0bc2cf}.styles__mInputContainer___C7IKa-camelCase[focus-within]>.styles__icon___3Kmk2-camelCase{color:#0bc2cf}.styles__mInputContainer___C7IKa-camelCase:focus-within>.styles__icon___3Kmk2-camelCase{color:#0bc2cf}.styles__inputFilled___3fsPU-camelCase{border-color:#3a3a3a}.styles__inputError___1kQhe-camelCase{border-color:#ce1313}.styles__icon___3Kmk2-camelCase{font-size:27px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__iconFilled___2bOYX-camelCase{color:#3a3a3a}.styles__iconError___Ov1N4-camelCase{color:#ce1313}.styles__input___30ALt-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___30ALt-camelCase:-moz-placeholder,.styles__input___30ALt-camelCase:-ms-input-placeholder,.styles__input___30ALt-camelCase::-moz-placeholder,.styles__input___30ALt-camelCase::-webkit-input-placeholder{color:#999}.styles__mInput___2Pko0-camelCase{border:none;margin:5px 2px 5px 11px;padding:0;width:220px;height:40px;line-height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__mInput___2Pko0-camelCase:-moz-placeholder,.styles__mInput___2Pko0-camelCase:-ms-input-placeholder,.styles__mInput___2Pko0-camelCase::-moz-placeholder,.styles__mInput___2Pko0-camelCase::-webkit-input-placeholder{color:#999}.styles__inputError___1kQhe-camelCase,.styles__inputError___1kQhe-camelCase:-moz-placeholder,.styles__inputError___1kQhe-camelCase:-ms-input-placeholder,.styles__inputError___1kQhe-camelCase::-moz-placeholder,.styles__inputError___1kQhe-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__input___30ALt-camelCase:focus,.styles__input___30ALt-camelCase:focus:-moz-placeholder,.styles__input___30ALt-camelCase:focus:-ms-input-placeholder,.styles__input___30ALt-camelCase:focus::-moz-placeholder,.styles__input___30ALt-camelCase:focus::-webkit-input-placeholder,.styles__mInput___2Pko0-camelCase:focus,.styles__mInput___2Pko0-camelCase:focus:-moz-placeholder,.styles__mInput___2Pko0-camelCase:focus:-ms-input-placeholder,.styles__mInput___2Pko0-camelCase:focus::-moz-placeholder,.styles__mInput___2Pko0-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___3W1g2-camelCase{width:320px}.styles__inputContainer___-ZPXF-camelCase{width:280px}.styles__input___30ALt-camelCase{width:210px}}.styles__button___WcrDX-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:165px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___WcrDX-camelCase:focus,.styles__button___WcrDX-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___i5nFa-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___1eq1M-camelCase,.styles__buttonError___1eq1M-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___1eq1M-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__errorContainer___2rGrW-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___1J83b-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__errorText___6Mgpb-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__google___23AoL-camelCase{width:160px;margin:10px auto 30px}',
      ''
    ]), t.locals = {
      container: 'styles__container___3W1g2-camelCase',
      containerHeader: 'styles__containerHeader___3z4tl-camelCase',
      inputContainer: 'styles__inputContainer___-ZPXF-camelCase',
      icon: 'styles__icon___3Kmk2-camelCase',
      mInputContainer: 'styles__mInputContainer___C7IKa-camelCase',
      inputFilled: 'styles__inputFilled___3fsPU-camelCase',
      inputError: 'styles__inputError___1kQhe-camelCase',
      iconFilled: 'styles__iconFilled___2bOYX-camelCase',
      iconError: 'styles__iconError___Ov1N4-camelCase',
      input: 'styles__input___30ALt-camelCase',
      mInput: 'styles__mInput___2Pko0-camelCase',
      button: 'styles__button___WcrDX-camelCase',
      buttonFilled: 'styles__buttonFilled___i5nFa-camelCase',
      buttonError: 'styles__buttonError___1eq1M-camelCase',
      errorContainer: 'styles__errorContainer___2rGrW-camelCase',
      errorIcon: 'styles__errorIcon___1J83b-camelCase',
      errorText: 'styles__errorText___6Mgpb-camelCase',
      google: 'styles__google___23AoL-camelCase'
    };
  },
  CEwK: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    }), n.d(t, 'b', function () {
      return r;
    });
    var a = 'CREATE_GAME', r = 'DELETE_GAME';
  },
  EEzQ: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }), n.d(t, 'b', function () {
      return o;
    });
    var a = n('kxF6');
    function r(e) {
      return {
        type: a.a,
        id: e
      };
    }
    function o(e) {
      return {
        type: a.b,
        id: e
      };
    }
  },
  JPrR: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('wIs1'), c = n('17x9'), l = n.n(c), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('b6Qr'), _ = n('3HZZ'), h = n('anyA'), y = n('GIcp'), b = n.n(y), g = n('yvNf'), v = n.n(g), w = n('dJL0'), x = n('iQ+n'), C = n('I0uU'), E = n('UIHd'), O = n('cuqe');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function k(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function S(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function j(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function T(e, t) {
      return (T = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function P(e) {
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
        var n, a = q(e);
        if (t) {
          var r = q(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return N(this, n);
      };
    }
    function N(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? R(e) : t;
    }
    function R(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function q(e) {
      return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var D = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && T(e, t);
      }(c, e);
      var t, n, a, o, s, i = P(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          password: '',
          passwordError: '',
          loading: !1,
          hasPassword: !1,
          ready: !1
        }, t.loading = !1, t.email = '', t.onSubmit = t.onSubmit.bind(R(t)), t.googleSuccess = t.googleSuccess.bind(R(t)), t.googleFailure = t.googleFailure.bind(R(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t;
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
                  this.email = t.email, this.setState({
                    hasPassword: t.hasPassword,
                    ready: !0
                  });
                case 7:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                S(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                S(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'onSubmit',
          value: function (e) {
            var t = this;
            if (e.preventDefault(), !this.loading) {
              this.loading = !0, this.setState({ loading: !0 });
              var n = '';
              this.state.password || (n = 'Where\'s The Password?'), this.setState({ passwordError: n }, function () {
                t.state.passwordError ? (t.loading = !1, t.setState({ loading: !1 })) : (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.delete('/api/users', {
                  params: {
                    email: t.email,
                    password: t.state.password
                  }
                }).then(function (e) {
                  e.data.success ? (localStorage.removeItem('token'), window.location.reload()) : (t.loading = !1, t.setState({
                    loading: !1,
                    passwordError: e.data.msg
                  }));
                }).catch(function (e) {
                  console.error(e);
                }));
              });
            }
          }
        },
        {
          key: 'googleSuccess',
          value: function (e) {
            var t = this;
            this.setState({
              loading: !0,
              passwordError: ''
            }), p.a.delete('/api/users/google', {
              params: {
                access_token: e.accessToken,
                email: this.email
              }
            }).then(function (e) {
              e.data.success ? (localStorage.removeItem('token'), window.location.reload()) : t.setState({
                passwordError: e.data.msg,
                loading: !1
              });
            }).catch(function () {
              t.setState({
                passwordError: 'Failed to delete account. Please try again.',
                loading: !1
              });
            });
          }
        },
        {
          key: 'googleFailure',
          value: function () {
            this.setState({
              passwordError: 'Failed to verify account with Google.',
              loading: !1
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return r.a.createElement('div', { className: d.isMobile ? b.a.mBody : b.a.body }, r.a.createElement(x.a, {
              title: 'Delete Account | Blooket',
              desc: 'Delete your Blooket account.'
            }), r.a.createElement(w.a, {
              rightText: 'Settings',
              rightLink: '/settings'
            }), r.a.createElement('div', { className: b.a.slantBackground }), r.a.createElement('div', { className: b.a.regularBody }, this.state.ready ? r.a.createElement('form', {
              onSubmit: this.onSubmit,
              className: v.a.container
            }, r.a.createElement('div', { className: v.a.containerHeader }, 'Delete Account'), r.a.createElement('div', null, this.state.hasPassword ? r.a.createElement(r.a.Fragment, null, r.a.createElement('div', { className: m()(d.isMobile ? v.a.mInputContainer : v.a.inputContainer, k({}, v.a.inputFilled, this.state.password), k({}, v.a.inputError, this.state.passwordError)) }, r.a.createElement('i', { className: m()(v.a.icon, 'fas fa-lock', k({}, v.a.iconFilled, this.state.password), k({}, v.a.iconError, this.state.passwordError)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? v.a.mInput : v.a.input, k({}, v.a.inputError, this.state.passwordError)),
              placeholder: 'Password',
              onChange: function (t) {
                return e.setState({
                  password: t.target.value.trim(),
                  passwordError: ''
                });
              },
              type: 'password',
              autoFocus: d.isMobile ? '' : 'autofocus'
            })), this.state.loading ? r.a.createElement(C.a, null) : r.a.createElement('input', {
              type: 'submit',
              value: 'Delete',
              className: m()(v.a.button, k({}, v.a.buttonFilled, this.state.password), k({}, v.a.buttonError, this.state.passwordError)),
              tabIndex: 0
            })) : r.a.createElement(r.a.Fragment, null, r.a.createElement('div', null, r.a.createElement(_.GoogleLogin, {
              clientId: E.a,
              onSuccess: this.googleSuccess,
              onFailure: this.googleFailure,
              render: function (e) {
                return r.a.createElement('div', {
                  className: m()(b.a.googleButton, v.a.google),
                  disabled: e.disabled,
                  role: 'button',
                  tabIndex: 0,
                  onClick: e.onClick
                }, r.a.createElement('img', {
                  src: O.a,
                  alt: 'Google Logo',
                  className: b.a.googleLogo,
                  draggable: !1
                }), 'Delete Now');
              }
            })), this.state.loading ? r.a.createElement(C.a, null) : null)), this.state.passwordError ? r.a.createElement('div', { className: v.a.errorContainer }, r.a.createElement('i', { className: m()(v.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: v.a.errorText }, this.state.passwordError)) : null) : null));
          }
        }
      ]) && j(t.prototype, n), a && j(t, a), c;
    }(r.a.Component);
    D.propTypes = {
      history: l.a.object,
      user: l.a.object
    };
    t.a = Object(h.c)(Object(i.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(D)));
  },
  OFrE: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__pointsText___14H7D-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}',
      ''
    ]), t.locals = { pointsText: 'styles__pointsText___14H7D-camelCase' };
  },
  OkxS: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('wIs1'), c = n('17x9'), l = n.n(c), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('b6Qr'), _ = n('anyA'), h = n('GIcp'), y = n.n(h), b = n('yvNf'), g = n.n(b), v = n('dJL0'), w = n('iQ+n'), x = n('I0uU'), C = n('TN+F');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function I(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function k(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function j(e) {
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
        var n, a = N(e);
        if (t) {
          var r = N(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return T(this, n);
      };
    }
    function T(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? P(e) : t;
    }
    function P(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var R = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && S(e, t);
      }(c, e);
      var t, n, a, o, s, i = j(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          email: '',
          emailError: '',
          loading: !1
        }, t.loading = !1, t.email = '', t.onSubmit = t.onSubmit.bind(P(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  if ((t = e.sent) && t.hasPassword) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 5:
                  this.email = t.email;
                case 6:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                I(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                I(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'onSubmit',
          value: function (e) {
            var t = this;
            if (e.preventDefault(), !this.loading) {
              this.loading = !0, this.setState({ loading: !0 });
              var n = Object(C.x)(this.state.email), a = '';
              this.state.password || (a = 'Where\'s the password?'), this.setState({
                emailError: n,
                passwordError: a
              }, function () {
                t.state.emailError || t.state.passwordError ? (t.loading = !1, t.setState({ loading: !1 })) : (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/change/email', {
                  email: t.email,
                  newEmail: t.state.email.toLowerCase(),
                  password: t.state.password
                }).then(function (e) {
                  !0 === e.data.success ? (localStorage.removeItem('token'), window.location.reload()) : (t.loading = !1, t.setState(O({ loading: !1 }, ''.concat(e.data.errType, 'Error'), e.data.msg)));
                }).catch(function (e) {
                  console.error(e);
                }));
              });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return r.a.createElement('div', { className: d.isMobile ? y.a.mBody : y.a.body }, r.a.createElement(w.a, {
              title: 'Change Email | Blooket',
              desc: 'Change the email for your Blooket account.'
            }), r.a.createElement(v.a, {
              rightText: 'Settings',
              rightLink: '/settings'
            }), r.a.createElement('div', { className: y.a.slantBackground }), r.a.createElement('div', { className: y.a.regularBody }, r.a.createElement('form', {
              onSubmit: this.onSubmit,
              className: g.a.container
            }, r.a.createElement('div', { className: g.a.containerHeader }, 'Change Email'), r.a.createElement('div', null, r.a.createElement('div', { className: m()(d.isMobile ? g.a.mInputContainer : g.a.inputContainer, O({}, g.a.inputFilled, this.state.email), O({}, g.a.inputError, this.state.emailError)) }, r.a.createElement('i', { className: m()(g.a.icon, 'fas fa-envelope', O({}, g.a.iconFilled, this.state.email), O({}, g.a.iconError, this.state.emailError)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? g.a.mInput : g.a.input, O({}, g.a.inputError, this.state.emailError)),
              placeholder: 'New Email',
              onChange: function (t) {
                return e.setState({
                  email: t.target.value.trim().slice(0, 50),
                  emailError: ''
                });
              },
              value: this.state.email,
              type: 'text',
              autoFocus: d.isMobile ? '' : 'autofocus'
            })), r.a.createElement('div', { className: m()(d.isMobile ? g.a.mInputContainer : g.a.inputContainer, O({}, g.a.inputFilled, this.state.password), O({}, g.a.inputError, this.state.passwordError)) }, r.a.createElement('i', { className: m()(g.a.icon, 'fas fa-lock', O({}, g.a.iconFilled, this.state.password), O({}, g.a.iconError, this.state.passwordError)) }), r.a.createElement('input', {
              className: m()(d.isMobile ? g.a.mInput : g.a.input, O({}, g.a.inputError, this.state.passwordError)),
              placeholder: 'Password',
              onChange: function (t) {
                return e.setState({
                  password: t.target.value,
                  passwordError: ''
                });
              },
              type: 'password'
            })), this.state.loading ? r.a.createElement(x.a, null) : r.a.createElement('input', {
              type: 'submit',
              value: 'Change Email',
              className: m()(g.a.button, O({}, g.a.buttonFilled, this.state.email && this.state.password), O({}, g.a.buttonError, this.state.emailError || this.state.passwordError)),
              tabIndex: 0
            })), this.state.emailError || this.state.passwordError ? r.a.createElement('div', { className: g.a.errorContainer }, r.a.createElement('i', { className: m()(g.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: g.a.errorText }, this.state.emailError || this.state.passwordError)) : null)));
          }
        }
      ]) && k(t.prototype, n), a && k(t, a), c;
    }(r.a.Component);
    R.propTypes = {
      history: l.a.object,
      user: l.a.object
    };
    t.a = Object(_.c)(Object(i.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(R)));
  },
  Q5GW: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var a = 'GET_QUESTION';
  },
  'S+tU': function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__header___2RNty-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;margin:25px 5% 10px;color:#3a3a3a}.styles__urlContainer___2SGGz-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;text-align:center;display:flex;flex-direction:column}.styles__urlText___3k-NA-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;margin:25px auto 15px;color:#3a3a3a}.styles__urlCloseIcon___3fkoZ-camelCase{position:absolute;top:15px;right:20px;font-size:28px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.3s}.styles__urlCloseIcon___3fkoZ-camelCase:focus,.styles__urlCloseIcon___3fkoZ-camelCase:hover{color:#0bc2cf}.styles__urlInput___3EmUB-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 10% 20px;padding:5px 15px;width:calc(80% - 30px);height:30px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__urlInput___3EmUB-camelCase:focus{border-color:#0bc2cf}.styles__urlErrorContainer___3tdtt-camelCase{border:2px solid #ce1313;border-radius:5px;width:80%;display:flex;flex-direction:row;margin:auto auto 25px}.styles__urlErrorIcon___1QapQ-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__urlErrorText___3jtrZ-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;color:#3a3a3a}.styles__urlButton___1tNbJ-camelCase,.styles__urlErrorText___3jtrZ-camelCase{font-family:Nunito,sans-serif}.styles__urlButton___1tNbJ-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:5px;background-color:#fff;width:125px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;outline:none;cursor:pointer}.styles__urlButton___1tNbJ-camelCase:focus,.styles__urlButton___1tNbJ-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__urlButtonFilled___JVxMn-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__urlButtonError___2N4vV-camelCase,.styles__urlButtonError___2N4vV-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__urlButtonError___2N4vV-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__inputContainer___2RI_s-camelCase{width:100%}.styles__wideContainer___1ebmt-camelCase{display:flex;flex-direction:row;width:90%;margin:5px auto}.styles__dropHolder___3CZc8-camelCase{width:34%;min-height:280px;flex:1;padding:15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;flex-direction:column;align-items:center}.styles__dropContainer___2XqCo-camelCase,.styles__dropHolder___3CZc8-camelCase{display:flex;justify-content:center}.styles__dropContainer___2XqCo-camelCase{height:calc(100% - 4px);width:calc(100% - 4px);border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;flex-direction:column;align-content:center}.styles__activeDropContainer___2SCOu-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropHeader___DkaFx-camelCase{font-size:32px;font-weight:700;margin:5px auto}.styles__dropHeader___DkaFx-camelCase,.styles__dropText___vc9z2-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__dropText___vc9z2-camelCase{font-size:20px;margin:10px auto 15px;padding:0 20px}.styles__uploadButtonContainer___1TPTt-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__uploadButton___y9UUi-camelCase{border-radius:5px;width:110px;height:50px;margin:5px 15px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);transition:.1s}.styles__uploadButton___y9UUi-camelCase:focus,.styles__uploadButton___y9UUi-camelCase:hover{color:#0bc2cf;transform:scale(.94)}.styles__uploadIcon___3CXYX-camelCase{font-size:24px;padding-left:10px;width:28px;text-align:center}.styles__uploadText___3R9W9-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:15px;line-height:20px}.styles__imgContainer___3dagK-camelCase{width:100%;height:280px;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#333;border-radius:5px;overflow:hidden}.styles__coverImage___2E46l-camelCase{max-width:100%;max-height:100%;margin:auto;-o-object-fit:contain;object-fit:contain}.styles__removeImageContainer___2fbKD-camelCase{width:100%;height:40px;margin-top:-40px;background-color:rgba(0,0,0,.6);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.styles__removeImageButton___8RxhH-camelCase{display:flex;flex-direction:row;align-self:flex-start;height:40px;width:135px;margin-left:30px;margin-top:-40px;cursor:pointer;outline:none;z-index:3}.styles__removeImageIcon___1h0rB-camelCase{font-size:26px;color:#fff;line-height:40px;width:30px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__removeImageText___3ckRQ-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:24px;color:#fff;line-height:40px}.styles__upperRightContainer___3p_sm-camelCase{display:flex;flex-direction:column;padding:10px 15px;flex-grow:1;margin-left:3%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px}.styles__titleHeader___h_2lI-camelCase{font-size:34px}.styles__descHeader___10ri--camelCase,.styles__titleHeader___h_2lI-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a}.styles__descHeader___10ri--camelCase{font-size:24px}.styles__input___m4Yro-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 0 20px;padding:4px 15px;width:calc(100% - 34px);height:40px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___m4Yro-camelCase:focus{border-color:#0bc2cf}.styles__descInput___2JWkp-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin-top:10px;padding:10px 15px;width:calc(100% - 34px);height:100px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;resize:none}.styles__descInput___2JWkp-camelCase:focus{border-color:#0bc2cf}.styles__inputFilled___1XnRb-camelCase{border-color:#3a3a3a}.styles__inputError___RbU1G-camelCase{border-color:#ce1313}.styles__bottomLeftContainer___3G-Ot-camelCase{display:flex;flex-direction:column;width:75%}.styles__categoryContainer___2YUcG-camelCase{width:100%;box-sizing:border-box;padding:10px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;margin:20px 0 5px}.styles__categoryHeader___3fgFT-camelCase{font-size:24px;font-weight:700}.styles__categoryDesc___1N9IU-camelCase,.styles__categoryHeader___3fgFT-camelCase{font-family:Nunito,sans-serif;text-align:left;color:#3a3a3a}.styles__categoryDesc___1N9IU-camelCase{font-size:18px;opacity:.8}.styles__privacyContainer___3rD6r-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:90%;margin:5px 0 7px;background-color:rgba(0,0,0,.1);border-radius:5px}.styles__privateButton___3-Tql-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#666;border-radius:5px;width:290px;height:70px;margin:10px 5px;display:flex;flex-direction:row;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;transition:.2s}.styles__privateButton___3-Tql-camelCase:hover{transform:scale(.95)}.styles__privateButton___3-Tql-camelCase:hover,.styles__selected___ujLI0-camelCase{color:#fff;background-color:#0bc2cf}.styles__privateIcon___9MPgu-camelCase{font-size:35px;line-height:70px;padding-left:20px;width:45px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateTextContainer___1-1vh-camelCase{display:flex;flex-direction:column;padding-left:20px}.styles__privateHeader___3A1ia-camelCase{padding-top:12px;font-weight:700;font-size:22px;line-height:25px}.styles__privateHeader___3A1ia-camelCase,.styles__privateText___1eSPQ-camelCase{font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateText___1eSPQ-camelCase{font-size:18px;line-height:20px}.styles__quizletButton___1lzCI-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#666;border-radius:5px;width:290px;height:70px;margin:10px 5px;display:flex;flex-direction:row;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;transition:.2s}.styles__quizletButton___1lzCI-camelCase:hover{color:#fff;background-color:#4053b3;transform:scale(.95)}.styles__quizletButton___1lzCI-camelCase:hover>.styles__quizletImage___1GAd9-camelCase{filter:none}.styles__quizletImage___1GAd9-camelCase{width:50px;height:50px;margin:10px 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;filter:grayscale(90%)}.styles__quizletTextContainer___OocIZ-camelCase{display:flex;flex-direction:column}.styles__quizletSelected___15xwu-camelCase{color:#fff;background-color:#4053b3}.styles__quizletImageSelected___1rB8C-camelCase{filter:none}.styles__bottomRightContainer___3CfQo-camelCase{width:15%;margin-left:auto}.styles__bottomRightContainer___3CfQo-camelCase,.styles__submitButton___3zvfP-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__submitButton___3zvfP-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:155px;width:100%;box-sizing:border-box;padding:15px;margin:20px auto;font-weight:700;color:#666;font-size:34px;line-height:38px;font-family:Nunito,sans-serif;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__buttonFilled___15xPF-camelCase{color:#fff;background-color:#0bc2cf}.styles__buttonFilled___15xPF-camelCase:hover{transform:scale(.95)}.styles__buttonError___1Ihu0-camelCase{color:#fff;background-color:#ce1313}.styles__buttonError___1Ihu0-camelCase:hover{transform:scale(.95)}.styles__createIcon___3a243-camelCase{font-size:54px;margin-bottom:20px}.styles__errorContainer___3ikpB-camelCase{border:2px solid #ce1313;border-radius:5px;width:100%;box-sizing:border-box;margin:5px auto;display:flex;flex-direction:column;background-color:#fff}.styles__errorIcon___3ipZo-camelCase{font-size:27px;color:#ce1313;margin:9px auto 2px 9px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__errorText___1S-yK-camelCase{margin:4px 9px 6px;font-size:20px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}@media only screen and (max-width:950px){.styles__uploadButton___y9UUi-camelCase{margin:5px 10px}}@media only screen and (max-width:860px){.styles__urlContainer___2SGGz-camelCase{width:90%}.styles__urlText___3k-NA-camelCase{font-size:28px}.styles__urlCloseIcon___3fkoZ-camelCase{top:5px;right:10px;font-size:24px}.styles__wideContainer___1ebmt-camelCase{flex-direction:column}.styles__dropHolder___3CZc8-camelCase{width:calc(100% - 30px);min-height:240px;flex:0}.styles__uploadButtonContainer___1TPTt-camelCase{margin:0 auto 15px}.styles__upperRightContainer___3p_sm-camelCase{margin:20px 0 0}.styles__descInput___2JWkp-camelCase,.styles__input___m4Yro-camelCase{width:calc(100% - 34px)}.styles__descInput___2JWkp-camelCase{height:102px}.styles__bottomLeftContainer___3G-Ot-camelCase{width:100%}.styles__privacyContainer___3rD6r-camelCase{width:100%;margin:10px auto}.styles__bottomRightContainer___3CfQo-camelCase{width:80%;margin:10px auto 25px}}',
      ''
    ]), t.locals = {
      header: 'styles__header___2RNty-camelCase',
      urlContainer: 'styles__urlContainer___2SGGz-camelCase',
      urlText: 'styles__urlText___3k-NA-camelCase',
      urlCloseIcon: 'styles__urlCloseIcon___3fkoZ-camelCase',
      urlInput: 'styles__urlInput___3EmUB-camelCase',
      urlErrorContainer: 'styles__urlErrorContainer___3tdtt-camelCase',
      urlErrorIcon: 'styles__urlErrorIcon___1QapQ-camelCase',
      urlErrorText: 'styles__urlErrorText___3jtrZ-camelCase',
      urlButton: 'styles__urlButton___1tNbJ-camelCase',
      urlButtonFilled: 'styles__urlButtonFilled___JVxMn-camelCase',
      urlButtonError: 'styles__urlButtonError___2N4vV-camelCase',
      inputContainer: 'styles__inputContainer___2RI_s-camelCase',
      wideContainer: 'styles__wideContainer___1ebmt-camelCase',
      dropHolder: 'styles__dropHolder___3CZc8-camelCase',
      dropContainer: 'styles__dropContainer___2XqCo-camelCase',
      activeDropContainer: 'styles__activeDropContainer___2SCOu-camelCase',
      dropHeader: 'styles__dropHeader___DkaFx-camelCase',
      dropText: 'styles__dropText___vc9z2-camelCase',
      uploadButtonContainer: 'styles__uploadButtonContainer___1TPTt-camelCase',
      uploadButton: 'styles__uploadButton___y9UUi-camelCase',
      uploadIcon: 'styles__uploadIcon___3CXYX-camelCase',
      uploadText: 'styles__uploadText___3R9W9-camelCase',
      imgContainer: 'styles__imgContainer___3dagK-camelCase',
      coverImage: 'styles__coverImage___2E46l-camelCase',
      removeImageContainer: 'styles__removeImageContainer___2fbKD-camelCase',
      removeImageButton: 'styles__removeImageButton___8RxhH-camelCase',
      removeImageIcon: 'styles__removeImageIcon___1h0rB-camelCase',
      removeImageText: 'styles__removeImageText___3ckRQ-camelCase',
      upperRightContainer: 'styles__upperRightContainer___3p_sm-camelCase',
      titleHeader: 'styles__titleHeader___h_2lI-camelCase',
      descHeader: 'styles__descHeader___10ri--camelCase',
      input: 'styles__input___m4Yro-camelCase',
      descInput: 'styles__descInput___2JWkp-camelCase',
      inputFilled: 'styles__inputFilled___1XnRb-camelCase',
      inputError: 'styles__inputError___RbU1G-camelCase',
      bottomLeftContainer: 'styles__bottomLeftContainer___3G-Ot-camelCase',
      categoryContainer: 'styles__categoryContainer___2YUcG-camelCase',
      categoryHeader: 'styles__categoryHeader___3fgFT-camelCase',
      categoryDesc: 'styles__categoryDesc___1N9IU-camelCase',
      privacyContainer: 'styles__privacyContainer___3rD6r-camelCase',
      privateButton: 'styles__privateButton___3-Tql-camelCase',
      selected: 'styles__selected___ujLI0-camelCase',
      privateIcon: 'styles__privateIcon___9MPgu-camelCase',
      privateTextContainer: 'styles__privateTextContainer___1-1vh-camelCase',
      privateHeader: 'styles__privateHeader___3A1ia-camelCase',
      privateText: 'styles__privateText___1eSPQ-camelCase',
      quizletButton: 'styles__quizletButton___1lzCI-camelCase',
      quizletImage: 'styles__quizletImage___1GAd9-camelCase',
      quizletTextContainer: 'styles__quizletTextContainer___OocIZ-camelCase',
      quizletSelected: 'styles__quizletSelected___15xwu-camelCase',
      quizletImageSelected: 'styles__quizletImageSelected___1rB8C-camelCase',
      bottomRightContainer: 'styles__bottomRightContainer___3CfQo-camelCase',
      submitButton: 'styles__submitButton___3zvfP-camelCase',
      buttonFilled: 'styles__buttonFilled___15xPF-camelCase',
      buttonError: 'styles__buttonError___1Ihu0-camelCase',
      createIcon: 'styles__createIcon___3a243-camelCase',
      errorContainer: 'styles__errorContainer___3ikpB-camelCase',
      errorIcon: 'styles__errorIcon___3ipZo-camelCase',
      errorText: 'styles__errorText___1S-yK-camelCase'
    };
  },
  SNFq: function (e, t, n) {
    'use strict';
    (function (e) {
      var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('yzbm'), _ = n('WjD0'), h = n.n(_), y = n('b6Qr'), b = n('rvr9'), g = n('GIcp'), v = n.n(g), w = n('0f1Z'), x = n.n(w), C = n('e47E'), E = n('r+ZA'), O = n('iQ+n'), I = n('I0uU'), k = n('sN2k'), S = n('TN+F'), j = n('anyA');
      function T(e) {
        return (T = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }
      function P(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t && (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, a);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? P(Object(n), !0).forEach(function (t) {
            R(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }
        return e;
      }
      function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }
      function q(e, t, n, a, r, o, s) {
        try {
          var i = e[o](s), c = i.value;
        } catch (e) {
          return void n(e);
        }
        i.done ? t(c) : Promise.resolve(c).then(a, r);
      }
      function D(e) {
        return function () {
          var t = this, n = arguments;
          return new Promise(function (a, r) {
            var o = e.apply(t, n);
            function s(e) {
              q(o, a, r, s, i, 'next', e);
            }
            function i(e) {
              q(o, a, r, s, i, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      function A(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }
      function z(e, t) {
        return (z = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function M(e) {
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
          var n, a = F(e);
          if (t) {
            var r = F(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else
            n = a.apply(this, arguments);
          return B(this, n);
        };
      }
      function B(e, t) {
        return !t || 'object' !== T(t) && 'function' != typeof t ? U(e) : t;
      }
      function U(e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }
      function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      var H = function (t) {
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
        }(l, t);
        var n, a, o, s, i, c = M(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = c.call(this, e)).state = {
            game: {
              title: '',
              author: '',
              desc: '',
              id: '',
              coverImage: {},
              private: !1
            },
            importing: !1,
            coverImageFile: {},
            coverImageURL: '',
            titleError: '',
            descError: '',
            imageError: '',
            uploadingURL: !1,
            tempURL: '',
            urlError: '',
            method: 3,
            loading: !1,
            showUnsplash: !1,
            unsplashURL: ''
          }, t.user = null, t.onCreate = t.onCreate.bind(U(t)), t.onTitleUpdate = t.onTitleUpdate.bind(U(t)), t.onDescUpdate = t.onDescUpdate.bind(U(t)), t.onURLUpdate = t.onURLUpdate.bind(U(t)), t.onImageDrop = t.onImageDrop.bind(U(t)), t.onURLSubmit = t.onURLSubmit.bind(U(t)), t;
        }
        return n = l, (a = [
          {
            key: 'componentDidMount',
            value: (i = D(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if (this.user = e.sent, this.user) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 5:
                    this.props.deleteGame();
                  case 6:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function () {
              return i.apply(this, arguments);
            })
          },
          {
            key: 'onCreate',
            value: function (t, n, a) {
              var r = this;
              if (t.preventDefault(), !this.state.loading) {
                this.setState({ loading: !0 });
                var o = Object(S.z)(this.state.game.title), s = Object(S.y)(this.state.game.desc);
                if (this.setState({
                    titleError: o,
                    descError: s
                  }), o || s)
                  this.setState({ loading: !1 });
                else {
                  if (1 === this.state.method && !n)
                    return void this.setState({
                      importing: !0,
                      loading: !1
                    });
                  this.setState({ game: N(N({}, this.state.game), {}, { author: this.user.name }) }, function () {
                    if (r.state.coverImageFile && r.state.coverImageFile.size) {
                      p.a.defaults.headers.common = {};
                      var t = new h.a();
                      t.append('file', r.state.coverImageFile), t.append('tags', ''), t.append('upload_preset', 'normal'), t.append('api_key', e.env.CLOUDINARY_API_KEY), t.append('timestamp', parseInt(Date.now() / 1000, 10)), p.a.post('https://api.cloudinary.com/v1_1/blooket/image/upload', t, { headers: { 'X-Requested-With': 'XMLHttpRequest' } }).then(function (e) {
                        var t = {};
                        t.url = e.data.secure_url, t.id = e.data.public_id, p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/games', {
                          title: r.state.game.title.trim(),
                          author: r.state.game.author,
                          desc: r.state.game.desc.trim(),
                          coverImage: t,
                          private: r.state.game.private
                        }).then(function (e) {
                          r.setState({
                            game: N(N({}, r.state.game), {}, {
                              id: e.data._id,
                              coverImage: t
                            })
                          }, function () {
                            r.props.createGame(r.state.game), n ? (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/games/quizlet-import', {
                              text: n,
                              isFlipped: a,
                              gameId: r.state.game.id,
                              startNum: 0
                            }).then(function () {
                              r.props.history.push('/edit?id='.concat(r.state.game.id));
                            }).catch(function () {
                              r.props.history.push('/edit?id='.concat(r.state.game.id));
                            })) : r.props.history.push('/edit?id='.concat(r.state.game.id));
                          });
                        }).catch(function (e) {
                          console.error(e);
                        });
                      }).catch(function (e) {
                        console.error(e);
                      });
                    } else {
                      var o = {};
                      r.state.coverImageURL ? o.url = r.state.coverImageURL : r.state.unsplashURL && (o.url = r.state.unsplashURL, o.id = 'u'), p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/games', {
                        title: r.state.game.title.trim(),
                        author: r.state.game.author,
                        desc: r.state.game.desc.trim(),
                        coverImage: o,
                        private: r.state.game.private
                      }).then(function (e) {
                        r.setState({
                          game: N(N({}, r.state.game), {}, {
                            id: e.data._id,
                            coverImage: o
                          })
                        }, function () {
                          r.props.createGame(r.state.game), n ? (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/games/quizlet-import', {
                            text: n,
                            isFlipped: a,
                            gameId: r.state.game.id,
                            startNum: 0
                          }).then(function () {
                            r.props.history.push('/edit?id='.concat(r.state.game.id));
                          }).catch(function () {
                            r.props.history.push('/edit?id='.concat(r.state.game.id));
                          })) : r.props.history.push('/edit?id='.concat(r.state.game.id));
                        });
                      }).catch(function (e) {
                        console.error(e);
                      });
                    }
                  });
                }
              }
            }
          },
          {
            key: 'onTitleUpdate',
            value: function (e) {
              this.setState({
                game: N(N({}, this.state.game), {}, { title: e.target.value.slice(0, S.b) }),
                titleError: ''
              });
            }
          },
          {
            key: 'onDescUpdate',
            value: function (e) {
              this.setState({
                game: N(N({}, this.state.game), {}, { desc: e.target.value.slice(0, S.a) }),
                descError: ''
              });
            }
          },
          {
            key: 'onURLUpdate',
            value: function (e) {
              this.setState({
                tempURL: e.target.value,
                urlError: ''
              });
            }
          },
          {
            key: 'onURLSubmit',
            value: (s = D(regeneratorRuntime.mark(function e(t) {
              var n, a = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (t.preventDefault(), !this.loading) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return');
                  case 3:
                    return this.loading = !0, n = '', this.state.tempURL || (n = 'Where\'s the URL?'), e.next = 8, new Promise(function (e) {
                      p.a.get('/api/games/is-image', { params: { url: a.state.tempURL } }).then(function (t) {
                        e(t.data);
                      }).catch(e);
                    });
                  case 8:
                    e.sent || (n = 'We can\'t find a supported image for that URL.'), n ? this.setState({
                      imageError: '',
                      urlError: n
                    }) : this.setState({
                      imageError: '',
                      coverImageURL: this.state.tempURL,
                      coverImageFile: {},
                      urlError: '',
                      tempURL: '',
                      uploadingURL: !1
                    }), this.loading = !1;
                  case 12:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e) {
              return s.apply(this, arguments);
            })
          },
          {
            key: 'onImageDrop',
            value: function (e) {
              var t = e[0];
              t ? this.setState({
                imageError: '',
                coverImageFile: t,
                coverImageURL: URL.createObjectURL(t)
              }) : this.setState({
                imageError: 'Error Uploading the File.',
                coverImageFile: {},
                coverImageURL: ''
              });
            }
          },
          {
            key: 'render',
            value: function () {
              var e, t, n, a = this, o = r.a.createRef();
              return r.a.createElement('div', { className: y.isMobile ? v.a.mBody : v.a.body }, r.a.createElement(O.a, {
                title: 'Create a Set | Blooket',
                desc: 'Sets are groups of questions that are used in games. Use this page to create a set with a title, description, cover image, and privacy setting.'
              }), r.a.createElement(C.a, {
                history: this.props.history,
                page: 'Create'
              }), r.a.createElement('div', { className: v.a.profileRegularBody }, r.a.createElement('div', { className: x.a.header }, 'Create a Question Set'), r.a.createElement('form', {
                onSubmit: this.onCreate,
                className: x.a.inputContainer
              }, r.a.createElement('div', { className: x.a.wideContainer }, r.a.createElement('div', { className: x.a.dropHolder }, this.state.coverImageURL || this.state.unsplashURL ? r.a.createElement('div', { className: x.a.imgContainer }, r.a.createElement('img', {
                src: this.state.coverImageURL || this.state.unsplashURL,
                alt: 'Upload',
                className: x.a.coverImage
              }), r.a.createElement('div', { className: x.a.removeImageContainer }), r.a.createElement('div', {
                className: x.a.removeImageButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({
                    coverImageURL: '',
                    coverImageFile: {},
                    unsplashURL: ''
                  });
                }
              }, r.a.createElement('i', { className: m()(x.a.removeImageIcon, 'fas fa-times') }), r.a.createElement('div', { className: x.a.removeImageText }, 'Remove'))) : r.a.createElement(d.a, {
                multiple: !1,
                accept: 'image/jpeg, image/png, image/gif',
                onDropAccepted: this.onImageDrop,
                onDropRejected: function () {
                  return a.setState({ imageError: 'Image Denied (Check Size < 2.5 MB)' });
                },
                className: x.a.dropContainer,
                activeClassName: x.a.activeDropContainer,
                ref: o,
                maxSize: 2500000,
                disableClick: !0
              }, r.a.createElement('div', { className: x.a.dropHeader }, 'Cover Image'), r.a.createElement('div', { className: x.a.dropText }, 'Drag and Drop an Image (Under 2.5 MB) or'), r.a.createElement('div', { className: x.a.uploadButtonContainer }, r.a.createElement('div', {
                className: x.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({ showUnsplash: !0 });
                }
              }, r.a.createElement('i', { className: m()(x.a.uploadIcon, 'fas fa-image') }), r.a.createElement('div', { className: x.a.uploadText }, 'Image', r.a.createElement('br', null), 'Gallery')), r.a.createElement('div', {
                className: x.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return o.current.open();
                }
              }, r.a.createElement('i', { className: m()(x.a.uploadIcon, 'fas fa-file-upload') }), r.a.createElement('div', { className: x.a.uploadText }, 'Upload', r.a.createElement('br', null), 'a File')), r.a.createElement('div', {
                className: x.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({
                    uploadingURL: !0,
                    urlError: ''
                  });
                }
              }, r.a.createElement('i', { className: m()(x.a.uploadIcon, 'fas fa-link') }), r.a.createElement('div', { className: x.a.uploadText }, 'Upload', r.a.createElement('br', null), 'by URL'))))), r.a.createElement('div', { className: x.a.upperRightContainer }, r.a.createElement('div', { className: x.a.titleHeader }, 'Title ', r.a.createElement('span', {
                style: {
                  fontSize: 24,
                  opacity: 0.8
                }
              }, '(required)')), r.a.createElement('input', {
                className: m()(x.a.input, (e = {}, R(e, x.a.inputFilled, this.state.game.title), R(e, x.a.inputError, this.state.titleError), e)),
                onChange: this.onTitleUpdate,
                value: this.state.game.title,
                type: 'text',
                placeholder: 'Add a descriptive title',
                autoFocus: y.isMobile ? '' : 'autofocus'
              }), r.a.createElement('div', { className: x.a.descHeader }, 'Description'), r.a.createElement('textarea', {
                className: m()(x.a.descInput, (t = {}, R(t, x.a.inputFilled, this.state.game.desc), R(t, x.a.inputError, this.state.descError), t)),
                onChange: this.onDescUpdate,
                value: this.state.game.desc,
                placeholder: 'Tell users about your question set',
                'data-gramm_editor': 'false'
              }))), r.a.createElement('div', { className: x.a.wideContainer }, r.a.createElement('div', { className: x.a.bottomLeftContainer }, r.a.createElement('div', { className: x.a.categoryContainer }, r.a.createElement('div', { className: x.a.categoryHeader }, 'Privacy Setting'), r.a.createElement('div', { className: x.a.categoryDesc }, 'This decides who can find and play your question set'), r.a.createElement('div', { className: x.a.privacyContainer }, r.a.createElement('div', {
                className: m()(x.a.privateButton, R({}, x.a.selected, !this.state.game.private)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  a.setState({ game: N(N({}, a.state.game), {}, { private: !1 }) });
                }
              }, r.a.createElement('i', { className: m()(x.a.privateIcon, 'fas fa-unlock') }), r.a.createElement('div', { className: x.a.privateTextContainer }, r.a.createElement('div', { className: x.a.privateHeader }, 'Public'), r.a.createElement('div', { className: x.a.privateText }, 'Playable by Everyone'))), r.a.createElement('div', {
                className: m()(x.a.privateButton, R({}, x.a.selected, this.state.game.private)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  a.setState({ game: N(N({}, a.state.game), {}, { private: !0 }) });
                }
              }, r.a.createElement('i', { className: m()(x.a.privateIcon, 'fas fa-lock') }), r.a.createElement('div', { className: x.a.privateTextContainer }, r.a.createElement('div', { className: x.a.privateHeader }, 'Private'), r.a.createElement('div', { className: x.a.privateText }, 'Only Playable by You'))))), r.a.createElement('div', { className: x.a.categoryContainer }, r.a.createElement('div', { className: x.a.categoryHeader }, 'Creation Method'), r.a.createElement('div', { className: x.a.categoryDesc }, 'This decides how you will start adding questions to your set'), r.a.createElement('div', { className: x.a.privacyContainer }, r.a.createElement('div', {
                className: m()(x.a.privateButton, R({}, x.a.selected, 3 === this.state.method)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({ method: 3 });
                }
              }, r.a.createElement('i', { className: m()(x.a.privateIcon, 'fas fa-edit') }), r.a.createElement('div', { className: x.a.privateTextContainer }, r.a.createElement('div', { className: x.a.privateHeader }, 'Manual'), r.a.createElement('div', { className: x.a.privateText }, 'Start From Scratch'))), r.a.createElement('div', {
                className: m()(x.a.quizletButton, R({}, x.a.quizletSelected, 1 === this.state.method)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({ method: 1 });
                }
              }, r.a.createElement('img', {
                src: 'https://res.cloudinary.com/blooket/image/upload/v1560736878/Media/QuizletLogo.png',
                alt: 'Quizlet',
                className: m()(x.a.quizletImage, R({}, x.a.quizletImageSelected, 1 === this.state.method)),
                draggable: !1
              }), r.a.createElement('div', { className: x.a.quizletTextContainer }, r.a.createElement('div', { className: x.a.privateHeader }, 'Quizlet Import'), r.a.createElement('div', { className: x.a.privateText }, 'Quick and Easy')))))), r.a.createElement('div', { className: x.a.bottomRightContainer }, this.state.loading ? r.a.createElement(I.a, null) : r.a.createElement('div', {
                type: 'submit',
                role: 'button',
                className: m()(x.a.submitButton, (n = {}, R(n, x.a.buttonFilled, this.state.game.title), R(n, x.a.buttonError, this.state.titleError || this.state.descError), n)),
                tabIndex: 0,
                onClick: this.onCreate
              }, r.a.createElement('i', { className: m()('fas fa-edit', x.a.createIcon) }), 'Create Your Set'), this.state.titleError || this.state.descError || this.state.imageError ? r.a.createElement('div', { className: x.a.errorContainer }, r.a.createElement('i', { className: m()(x.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: x.a.errorText }, this.state.titleError || this.state.descError || this.state.imageError)) : null)), r.a.createElement('div', { style: { height: 30 } }), r.a.createElement('input', {
                type: 'submit',
                style: {
                  opacity: 0,
                  display: 'none'
                }
              })), this.state.uploadingURL ? r.a.createElement('div', { className: v.a.modal }, r.a.createElement('form', {
                onSubmit: this.onURLSubmit,
                className: x.a.urlContainer
              }, r.a.createElement('div', { className: x.a.urlText }, 'Image URL Address'), r.a.createElement('i', {
                className: m()(x.a.urlCloseIcon, 'fas fa-times'),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  a.setState({
                    uploadingURL: !1,
                    tempURL: ''
                  });
                }
              }), r.a.createElement('input', {
                className: m()(x.a.urlInput, R({}, x.a.inputFilled, this.state.tempURL), R({}, x.a.inputError, this.state.urlError)),
                onChange: this.onURLUpdate,
                type: 'text',
                autoFocus: y.isMobile ? '' : 'autofocus'
              }), r.a.createElement('input', {
                type: 'submit',
                value: 'Upload',
                className: m()(x.a.urlButton, R({}, x.a.urlButtonFilled, this.state.tempURL), R({}, x.a.urlButtonError, this.state.urlError)),
                tabIndex: 0
              }), this.state.urlError ? r.a.createElement('div', { className: x.a.urlErrorContainer }, r.a.createElement('i', { className: m()(x.a.urlErrorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: x.a.urlErrorText }, this.state.urlError)) : null)) : null), this.state.importing ? r.a.createElement('div', { className: v.a.modal }, r.a.createElement(E.a, {
                done: this.onCreate,
                close: function () {
                  return a.setState({ importing: !1 });
                }
              })) : null, this.state.showUnsplash ? r.a.createElement(k.a, {
                select: function (e) {
                  return a.setState({
                    showUnsplash: !1,
                    unsplashURL: e
                  });
                },
                close: function () {
                  return a.setState({ showUnsplash: !1 });
                }
              }) : null);
            }
          }
        ]) && A(n.prototype, a), o && A(n, o), l;
      }(r.a.Component);
      H.propTypes = {
        createGame: c.a.func.isRequired,
        deleteGame: c.a.func.isRequired,
        history: c.a.object.isRequired,
        user: c.a.object
      };
      t.a = Object(j.c)(Object(l.a)(Object(s.b)(function () {
        return {};
      }, function (e) {
        return Object(o.b)({
          createGame: b.a,
          deleteGame: b.b
        }, e);
      })(H)));
    }.call(this, n('8oxB')));
  },
  UmrV: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('mLw1'), u = n('wIs1'), p = n('vDqi'), f = n.n(p), m = n('7W4d');
    function d(e, t) {
      return {
        type: m.a,
        numClients: e,
        standings: t
      };
    }
    var _ = n('1b17'), h = n('5gLy'), y = n('9IXX'), b = n('GIcp'), g = n.n(b), v = n('iQ+n'), w = n('aCwo'), x = n('2k7N'), C = n.n(x), E = n('TN+F'), O = n('SdQT');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function k(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [], a = !0, r = !1, o = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(a = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); a = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            a || null == i.return || i.return();
          } finally {
            if (r)
              throw o;
          }
        }
        return n;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return S(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return S(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function j(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function T(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function P(e, t) {
      return (P = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function N(e) {
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
        var n, a = D(e);
        if (t) {
          var r = D(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return R(this, n);
      };
    }
    function R(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? q(e) : t;
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var A = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && P(e, t);
      }(c, e);
      var t, n, a, o, s, i = N(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          numAnswers: 0,
          numClients: 0,
          transitioning: !1,
          muted: !!e.host && e.host.muted
        }, t.here = !0, t.ok = !1, t.dbRef = {}, t.responseData = {}, t.next = t.next.bind(q(t)), t.changeMuted = t.changeMuted.bind(q(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return this.props.firebase.getDatabaseVal(this.props.host.id, 'c', function (e) {
                    t.here && t.setState({ numClients: Object.keys(e || {}).length });
                  }), e.next = 5, this.props.firebase.getDatabaseRef(this.props.host.id, 'c');
                case 5:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    var n = e.val() || {};
                    t.responseData = n;
                    var a = Object.values(n), r = a.length, o = a.filter(function (e) {
                        return e.a || 0 === e.a;
                      }).length;
                    o > 0 && !t.state.muted && new Audio(C.a).play(), t.setState({
                      numAnswers: o,
                      numClients: r
                    }), o === r && 0 !== r && t.next();
                  });
                case 7:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                j(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                j(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.transitionTimeout), this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off('value'), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', E.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            this.setState({ transitioning: !0 }, function () {
              e.transitionTimeout = setTimeout(function () {
                var t = {}, n = e.props.host.question.correctAnswers.map(function (t) {
                    return e.props.host.question.answers.indexOf(t);
                  }), a = Object.entries(e.responseData).map(function (t) {
                    var a = k(t, 2), r = a[0], o = a[1];
                    return {
                      name: r,
                      blook: o.b,
                      answer: o.a,
                      correct: n.includes(o.a),
                      time: o.t || e.props.host.question.timeLimit
                    };
                  });
                a.sort(function (e, t) {
                  return t.correct ? e.time - t.time : -1;
                });
                var r = e.props.host.standings ? JSON.parse(JSON.stringify(e.props.host.standings)) : [], o = r.map(function (e) {
                    return e.name;
                  }), s = 0;
                a.forEach(function (t, i) {
                  (0 === i || t.time !== a[i - 1].time && t.correct || !t.correct && a[i - 1].correct) && (s += 1), a[i].questionPlace = s;
                  var c = e.state.numClients + 1 - s;
                  1 === s ? c += 3 : 2 === s && (c += 1), n.includes(t.answer) || (c = 0), a[i].questionPoints = c;
                  var l = o.indexOf(t.name);
                  -1 !== l ? (a[i].points = c + r[l].points, o.splice(l, 1), r.splice(l, 1)) : a[i].points = c;
                }), r.forEach(function (e) {
                  a.push({
                    name: e.name,
                    blook: e.blook,
                    correct: !1,
                    time: -1,
                    questionPlace: s,
                    questionPoints: 0,
                    points: e.points || 0
                  });
                }), a.sort(function (e, t) {
                  var n = t.points - e.points;
                  return 0 === n ? e.time - t.time : n;
                }), s = 0, a.forEach(function (e, n) {
                  0 !== n && e.points === a[n - 1].points || (s += 1), a[n].place = s, e.blook && (t[e.name] = {
                    b: e.blook,
                    co: e.correct || !1,
                    t: e.time || 0,
                    qPl: e.questionPlace,
                    qP: e.questionPoints || 0,
                    pl: s,
                    p: e.points || 0
                  });
                }), e.props.setClassicResults(e.state.numClients, a), e.props.firebase.setVal({
                  id: e.props.host.id,
                  path: 'c',
                  val: t
                }, function () {
                  f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                    id: e.props.host.id,
                    stage: 'cres'
                  }, function () {
                    e.ok = !0, e.props.history.push('/host/classic/results');
                  });
                });
              }, 200);
            });
          }
        },
        {
          key: 'changeMuted',
          value: function () {
            var e = this;
            this.setState({ muted: !this.state.muted }, function () {
              e.props.setMuted(e.state.muted);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions ? r.a.createElement('div', { className: g.a.body }, r.a.createElement(v.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(y.a, {
              left: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
              right: 'QUESTION '.concat(this.props.host.question.number, '/').concat(this.props.host.questions.length),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement(w.a, {
              next: this.next,
              text: this.props.host.question.text,
              answers: this.props.host.question.answers,
              image: this.props.host.question.image ? this.props.host.question.image.url : '',
              timeLimit: this.props.host.question.timeLimit,
              numAnswers: this.state.numAnswers,
              numClients: this.state.numClients,
              transitioning: this.state.transitioning,
              muted: this.state.muted
            })) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && T(t.prototype, n), a && T(t, a), c;
    }(r.a.Component);
    A.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        standings: c.a.array,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      setClassicResults: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(o.b)({
        setClassicResults: d,
        setMuted: _.a,
        deleteHost: h.c
      }, e);
    })(Object(O.d)(A)));
  },
  Vgms: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('b6Qr'), f = n('bQgK'), m = n.n(f), d = n('naaF');
    function _(e) {
      return {
        type: d.a,
        answer: e
      };
    }
    var h = n('pMbe'), y = n('2g2H'), b = n('iQ+n'), g = n('GIcp'), v = n.n(g), w = n('FPhr'), x = n('SdQT'), C = n('TN+F');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function I(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function k(e, t) {
      return (k = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function S(e) {
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
        var n, a = P(e);
        if (t) {
          var r = P(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return j(this, n);
      };
    }
    function j(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? T(e) : t;
    }
    function T(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var N = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && k(e, t);
      }(c, e);
      var t, n, a, o, s, i = S(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = { timer: 10 }, t.dbRef = {}, t.startTime = 0, t.onAnswer = t.onAnswer.bind(T(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, n = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.question && this.props.client.question.answers) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(C.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 5:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    switch (e.val()) {
                    case 'cres':
                      n.props.history.push('/play/classic/answer/result');
                      break;
                    case 'cstd':
                      n.props.history.push('/play/classic/standings');
                      break;
                    case 'cfin':
                      n.props.history.push('/play/classic/final');
                      break;
                    case 'crdy':
                      n.props.history.push('/play/classic/get-ready');
                      break;
                    case null:
                      n.props.deleteClient(), n.props.history.push('/play');
                    }
                  }), this.ready = !1, this.readyTimeout = setTimeout(function () {
                    n.startTime = m()(), n.ready = !0;
                  }, 250), t = this.props.client.question.timeLimit, this.setState({ timer: t }), this.interval = setInterval(function () {
                    (t -= 1) <= 0 || n.setState({ timer: t });
                  }, 1000);
                case 12:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                O(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                O(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(C.t)(), clearInterval(this.interval), clearTimeout(this.readyTimeout);
          }
        },
        {
          key: 'onAnswer',
          value: function (e) {
            if (this.ready) {
              if (!this.props.client.answer) {
                this.props.addAnswer(e);
                var t = Math.round(m()() - this.startTime);
                this.props.firebase.setVal({
                  id: this.props.client.hostId,
                  path: 'c/'.concat(this.props.client.name),
                  val: {
                    a: this.props.client.question.answers.indexOf(e),
                    t: t,
                    b: this.props.client.blook
                  }
                });
              }
              this.props.history.push('/play/classic/answer/sent');
            }
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.question && this.props.client.question.answers ? r.a.createElement('div', { className: p.isMobile ? v.a.mBody : v.a.body }, r.a.createElement(b.a, {
              title: 'Play Classic | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(y.a, {
              name: this.props.client.name,
              rightText: this.state.timer
            }), r.a.createElement(w.a, {
              onAnswer: this.onAnswer,
              text: this.props.client.question.text,
              answers: this.props.client.question.answers,
              image: this.props.client.question.image
            })) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && I(t.prototype, n), a && I(t, a), c;
    }(r.a.Component);
    N.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        answer: c.a.string,
        question: c.a.object,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.object,
        incorrects: c.a.object,
        team: c.a.object,
        mode: c.a.string
      }),
      history: c.a.object.isRequired,
      firebase: c.a.object,
      deleteClient: c.a.func.isRequired,
      addAnswer: c.a.func.isRequired
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({
        deleteClient: h.a,
        addAnswer: _
      }, e);
    })(Object(x.d)(N)));
  },
  'W1/m': function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('vDqi'), p = n.n(u), f = n('TSYQ'), m = n.n(f), d = n('b6Qr'), _ = n('EEzQ'), h = n('rvr9'), y = n('GIcp'), b = n.n(y), g = n('q+zm'), v = n.n(g), w = n('e47E'), x = n('iQ+n'), C = n('SCqF'), E = n('anyA'), O = n('VTFj'), I = n('SqMe'), k = n('apVz'), S = n('FO7V'), j = n('NGRe'), T = n('hn0J'), P = n('D4nx'), N = n('Auwe'), R = n('TN+F');
    function q(e) {
      return (q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function D(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function A(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function z(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function M(e, t) {
      return (M = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function B(e) {
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
        var n, a = H(e);
        if (t) {
          var r = H(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return U(this, n);
      };
    }
    function U(e, t) {
      return !t || 'object' !== q(t) && 'function' != typeof t ? F(e) : t;
    }
    function F(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function H(e) {
      return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var L = function (e) {
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
      }(c, e);
      var t, n, a, o, s, i = B(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          page: 'My Sets',
          expand: !1,
          tour: !1,
          ready: !1,
          questCount: 0,
          isQuest: !1,
          groupId: '',
          noRole: !1,
          loadingRole: !1,
          showNews: !1
        }, t.loading = !1, t.name = '', t.role = '', t.here = !0, t.setPage = t.setPage.bind(F(t)), t.setRole = t.setRole.bind(F(t)), t.endTour = t.endTour.bind(F(t)), t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, n = this;
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
                  this.name = t.name, p.a.get('/api/users/dashboard', { params: { name: t.name } }).then(function (e) {
                    if (n.here && e && e.data.success) {
                      var a = 'My Sets', r = !1, o = Object(R.i)('p') ? Object(R.i)('p').replace('-', ' ') : null;
                      o && [
                        'My Sets',
                        'Favorites',
                        'Homework',
                        'Group',
                        'History'
                      ].includes(o) && (a = o), e.data.news && 'welcome' !== e.data.modalMessage && (r = !0, p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/setnews', {
                        name: t.name,
                        news: !1
                      }).catch(function (e) {
                        console.error(e);
                      })), n.role = e.data.role, n.setState({
                        page: a,
                        showNews: r,
                        ready: !0,
                        questCount: e.data.questCount,
                        isQuest: e.data.questCount > 0,
                        groupId: e.data.groupId,
                        noRole: !e.data.role,
                        tour: 'welcome' === e.data.modalMessage && n.here
                      });
                    }
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 7:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                A(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                A(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1;
          }
        },
        {
          key: 'setPage',
          value: function (e) {
            this.setState({
              expand: !1,
              page: e,
              questCount: 'Quests' === e ? 0 : this.state.questCount
            }), window.history.pushState({}, null, ''.concat(window.location.origin, '/dashboard?p=').concat(e.replace(' ', '-')));
          }
        },
        {
          key: 'setRole',
          value: function (e) {
            var t = this;
            this.setState({ loadingRole: !0 }), this.role = e, p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/setrole', {
              name: this.name,
              role: e
            }).then(function (e) {
              localStorage.setItem('token', e.data), t.props.user.getLoggedIn(), t.here && t.setState({
                loadingRole: !1,
                noRole: !1
              });
            }).catch(function (e) {
              console.error(e), t.setState({ loadingRole: !1 });
            });
          }
        },
        {
          key: 'endTour',
          value: function (e) {
            this.setState({ tour: !1 }), e && (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/setmessage', {
              name: this.name,
              message: ''
            }).catch(function (e) {
              console.error(e);
            }), 'Student' === this.role && this.props.history.push('/stats'));
          }
        },
        {
          key: 'render',
          value: function () {
            var e, t = this;
            return r.a.createElement('div', {
              className: d.isMobile ? b.a.mBody : b.a.body,
              style: {
                height: this.state.showNews ? '100%' : null,
                overflowY: this.state.showNews ? 'hidden' : null
              }
            }, r.a.createElement(x.a, {
              title: 'Dashboard | Blooket',
              desc: 'The Dashboard allows you to access your question sets, favorites, game history, and news about Blooket events!'
            }), r.a.createElement(w.a, {
              history: this.props.history,
              page: 'Dashboard'
            }), r.a.createElement('div', {
              className: b.a.profileRegularBody,
              style: { overflowX: this.state.showNews ? 'hidden' : null }
            }, r.a.createElement('div', { className: m()(v.a.mobileMenu, (e = {}, D(e, v.a.mobileMenuBig, this.state.expand), D(e, v.a.mobileMenuBigger, this.state.expand && this.state.groupId), e)) }, this.state.expand ? r.a.createElement('div', { style: { outline: 'none' } }, r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setState({ showNews: !t.state.showNews });
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'far fa-newspaper') }), r.a.createElement('div', { className: v.a.rowText }, 'News')), r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('My Sets');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-list-ul') }), r.a.createElement('div', { className: v.a.rowText }, 'My Sets')), r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('Favorites');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-star') }), r.a.createElement('div', { className: v.a.rowText }, 'Favorites')), this.state.groupId ? r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('Group');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-users') }), r.a.createElement('div', { className: v.a.rowText }, 'Group Plan')) : null, r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setState({ expand: !1 });
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-angle-up') }), r.a.createElement('div', { className: v.a.rowText }, 'Hide'))) : r.a.createElement('div', {
              className: v.a.mobileRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setState({ expand: !0 });
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-angle-down') }), r.a.createElement('div', { className: v.a.rowText }, this.state.page))), r.a.createElement('div', { className: v.a.leftContainer }, r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setState({ showNews: !t.state.showNews });
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'far fa-newspaper') }), r.a.createElement('div', { className: v.a.rowText }, 'News')), r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('My Sets');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-list-ul') }), r.a.createElement('div', { className: v.a.rowText }, 'My Sets')), r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('Favorites');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-star') }), r.a.createElement('div', { className: v.a.rowText }, 'Favorites')), r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('Homework');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'far fa-file-alt') }), r.a.createElement('div', { className: v.a.rowText }, 'Homework')), r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('History');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-history') }), r.a.createElement('div', { className: v.a.rowText }, 'History')), this.state.groupId ? r.a.createElement('div', {
              className: v.a.pageRow,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return t.setPage('Group');
              }
            }, r.a.createElement('i', { className: m()(v.a.rowIcon, 'fas fa-users') }), r.a.createElement('div', { className: v.a.rowText }, 'Group Plan')) : null), this.state.ready ? 'My Sets' === this.state.page ? r.a.createElement(O.a, {
              history: this.props.history,
              setEditId: this.props.setEditId,
              deleteGame: this.props.deleteGame,
              setPage: function (e) {
                return t.setState({ page: e });
              }
            }) : 'Favorites' === this.state.page ? r.a.createElement(I.a, { history: this.props.history }) : 'Homework' === this.state.page ? r.a.createElement(T.a, null) : 'Quests' === this.state.page ? r.a.createElement(P.a, { isQuest: this.state.isQuest }) : 'History' === this.state.page ? r.a.createElement(S.a, null) : 'Group' === this.state.page ? r.a.createElement(k.a, {
              id: this.state.groupId,
              setPage: function (e) {
                return t.setState({ page: e });
              }
            }) : null : null), this.state.noRole ? r.a.createElement(C.a, {
              text: this.state.loadingRole ? 'Saving...' : 'Who are you?',
              loading: this.state.loadingRole,
              buttonOne: {
                text: 'Teacher',
                click: function () {
                  return t.setRole('Teacher');
                },
                color: 'blue'
              },
              buttonTwo: {
                text: 'Student',
                click: function () {
                  return t.setRole('Student');
                },
                color: 'blue'
              }
            }) : !d.isMobile && this.state.tour ? r.a.createElement(j.a, { done: this.endTour }) : null, r.a.createElement(N.a, {
              isShown: this.state.showNews,
              onClose: function () {
                return t.setState({ showNews: !1 });
              }
            }));
          }
        }
      ]) && z(t.prototype, n), a && z(t, a), c;
    }(r.a.Component);
    L.propTypes = {
      setEditId: c.a.func.isRequired,
      deleteGame: c.a.func.isRequired,
      history: c.a.object.isRequired,
      user: c.a.object.isRequired
    };
    t.a = Object(E.c)(Object(l.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({
        setEditId: _.b,
        deleteGame: h.b
      }, e);
    })(L)));
  },
  XFCD: function (e, t, n) {
    var a = n('iNsH');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  XdgN: function (e, t, n) {
    var a = n('Y0ma');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  Y0ma: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__fadeWaiting___2tyPs-camelCase{opacity:1}.styles__fade___xZ3nI-camelCase,.styles__fadeWaiting___2tyPs-camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___xZ3nI-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___1k4iw-camelCase{-webkit-animation:styles__fadeOut___3Dm6v-camelCase .3s linear .5s forwards;animation:styles__fadeOut___3Dm6v-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeOut___3Dm6v-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___3Dm6v-camelCase{0%{opacity:1}to{opacity:0}}',
      ''
    ]), t.locals = {
      fadeWaiting: 'styles__fadeWaiting___2tyPs-camelCase',
      fade: 'styles__fade___xZ3nI-camelCase',
      textFade: 'styles__textFade___1k4iw-camelCase',
      fadeOut: 'styles__fadeOut___3Dm6v-camelCase'
    };
  },
  aZYn: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('TSYQ'), f = n.n(p), m = n('b6Qr'), d = n('wMMV');
    function _(e, t, n, a) {
      return {
        type: d.a,
        corrects: e,
        incorrects: t,
        standing: n,
        points: a
      };
    }
    var h = n('xD7w'), y = n('pMbe'), b = n('2g2H'), g = n('iQ+n'), v = n('GIcp'), w = n.n(v), x = n('tU0a'), C = n.n(x), E = n('SdQT'), O = n('TN+F');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function k(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? k(Object(n), !0).forEach(function (t) {
          j(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function j(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function T(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [], a = !0, r = !1, o = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(a = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); a = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            a || null == i.return || i.return();
          } finally {
            if (r)
              throw o;
          }
        }
        return n;
      }(e, t) || N(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function P(e) {
      return function (e) {
        if (Array.isArray(e))
          return R(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || N(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function N(e, t) {
      if (e) {
        if ('string' == typeof e)
          return R(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0;
      }
    }
    function R(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function q(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function D(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function A(e, t) {
      return (A = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function z(e) {
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
        var n, a = B(e);
        if (t) {
          var r = B(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return M(this, n);
      };
    }
    function M(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var U = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && A(e, t);
      }(c, e);
      var t, n, a, o, s, i = z(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          points: 0,
          totalPoints: e.client ? e.client.points : 0,
          place: 0,
          isCorrect: !1,
          correctAnswers: [],
          ready: !1,
          isDataSet: !1
        }, t.here = !0, t.dbRef = {}, t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(O.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 5:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    var n = e.val();
                    if (n)
                      if (3 === n.split('-').length) {
                        var a = n.split('-'), r = t.props.client.questions.map(function (e) {
                            return e.number;
                          }).indexOf(parseInt(a[1], 10));
                        if (r < 0)
                          return;
                        for (var o = JSON.parse(JSON.stringify(t.props.client.questions[r])), s = P(o.answers), i = a[2].split(''), c = 0; c < s.length; c++)
                          o.answers[i[c]] = s[c];
                        t.props.getQuestion(o), t.props.history.push('/play/classic/question');
                      } else
                        'cstd' === n ? t.props.history.push('/play/classic/standings') : 'cfin' === n ? t.props.history.push('/play/classic/final') : 'crdy' === n && t.props.history.push('/play/classic/get-ready');
                    else
                      t.props.deleteClient(), t.props.history.push('/play');
                  }), this.props.firebase.getDatabaseVal(this.props.client.hostId, 'c', function (e) {
                    if (e) {
                      var n = !!t.props.client.question && t.props.client.question.correctAnswers.includes(t.props.client.answer);
                      if (t.here) {
                        t.setState({
                          isCorrect: n,
                          correctAnswers: t.props.client.question ? t.props.client.question.correctAnswers : null
                        });
                        var a = Object.entries(e).map(function (e) {
                          var t = T(e, 2), n = t[0], a = t[1];
                          return {
                            name: n,
                            blook: a.b,
                            questionPoints: a.qP,
                            questionPlace: a.qPl,
                            points: a.p,
                            place: a.pl,
                            time: a.t,
                            correct: a.co
                          };
                        }).filter(function (e) {
                          return e.points || 0 === e.points;
                        });
                        a.sort(function (e, t) {
                          var n = e.place - t.place;
                          return 0 === n ? e.time - t.time : n;
                        });
                        var r = a.map(function (e) {
                          return e.name;
                        }).indexOf(t.props.client.name);
                        -1 !== r && (t.props.client.gotPoints || (n ? t.props.updateClassic(t.props.client.question ? S(S({}, t.props.client.corrects), {}, j({}, t.props.client.question.number, 1)) : t.props.client.corrects, t.props.client.incorrects, a, a[r].points) : t.props.updateClassic(t.props.client.corrects, t.props.client.question ? S(S({}, t.props.client.incorrects), {}, j({}, t.props.client.question.number, 1)) : t.props.client.incorrects, a, t.props.client.points), t.here && t.setState({
                          points: a[r].questionPoints,
                          place: a[r].questionPlace,
                          isDataSet: !0
                        }, function () {
                          t.waitTimeout = setTimeout(function () {
                            var e = t.state.totalPoints;
                            t.pointsInterval = setInterval(function () {
                              e < a[r].points && t.here ? (e += 1, t.setState({ totalPoints: e })) : clearInterval(t.pointsInterval);
                            }, 30);
                          }, 3000);
                        })));
                      }
                    }
                  }), this.readyTimeout = setTimeout(function () {
                    t.here && t.setState({ ready: !0 });
                  }, 1000);
                case 9:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                q(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                q(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(O.t)(), clearTimeout(this.readyTimeout), clearTimeout(this.setTimeout), clearTimeout(this.waitTimeout), clearInterval(this.pointsInterval);
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client ? r.a.createElement('div', {
              className: m.isMobile ? w.a.mBody : w.a.body,
              style: {
                backgroundColor: '#fff',
                overflow: 'hidden'
              }
            }, r.a.createElement(g.a, {
              title: 'Play Classic | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(b.a, {
              name: this.props.client.name,
              rightText: -1 !== this.state.totalPoints ? this.state.totalPoints : this.props.client.points
            }), this.state.ready && this.state.isDataSet ? r.a.createElement('div', {
              className: f()(w.a.regularBody, C.a.background),
              style: { backgroundColor: this.state.isCorrect ? '#4bc22e' : '#c43a35' }
            }, r.a.createElement('div', { className: C.a.header }, this.state.isCorrect ? 'CORRECT' : 'INCORRECT'), r.a.createElement('div', { className: C.a.container }, r.a.createElement('i', { className: this.state.isCorrect ? 'fas fa-check' : 'fas fa-times' })), this.state.isCorrect ? r.a.createElement('div', { className: C.a.correctAnswers }, ''.concat(this.state.place).concat(Object(O.g)(this.state.place), ' Place'), r.a.createElement('div', { className: C.a.pointsText }, '+'.concat(this.state.points, ' Points'))) : r.a.createElement('div', { className: C.a.correctAnswers }, 'Correct '.concat(1 === this.state.correctAnswers.length ? 'Answer' : 'Answers', ': ').concat(Object(O.e)(this.state.correctAnswers)), r.a.createElement('div', { className: C.a.pointsText }, '+0 Points'))) : null) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && D(t.prototype, n), a && D(t, a), c;
    }(r.a.Component);
    U.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        answer: c.a.string,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.object,
        incorrects: c.a.object,
        mode: c.a.string,
        time: c.a.number,
        team: c.a.object,
        gotPoints: c.a.bool
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      updateClassic: c.a.func.isRequired,
      getQuestion: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({
        deleteClient: y.a,
        updateClassic: _,
        getQuestion: h.a
      }, e);
    })(Object(E.d)(U)));
  },
  beCI: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__nodesContainer___2rX47-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingHolder___zcLTI-camelCase{position:absolute;height:10vh;width:60vw}.styles__standingContainer___24h3a-camelCase,.styles__standingHolder___zcLTI-camelCase{display:flex;flex-direction:row;align-items:center}.styles__standingContainer___24h3a-camelCase{margin:auto;height:100%;width:100%;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__placeText___3f_yw-camelCase{text-align:right;width:4.5vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___3f_yw-camelCase,.styles__superPlaceText___2BQJS-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___2BQJS-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.7vw;text-align:left}.styles__blookBox___3vBi1-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___1imj1-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:36vw}.styles__nameText___1imj1-camelCase,.styles__pointsText___3-HbX-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___3-HbX-camelCase{margin:auto 1.5vw auto auto;font-size:5.2vh;font-weight:700;text-align:right;min-width:9.5vw}.styles__addText___2DOxx-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__fadeIn___3sIWa-camelCase{opacity:0;-webkit-animation:styles__fadeIn___3sIWa-camelCase .3s linear forwards;animation:styles__fadeIn___3sIWa-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeIn___3sIWa-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3sIWa-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___oKU2I-camelCase{opacity:1;-webkit-animation:styles__fadeOut___oKU2I-camelCase .3s linear forwards;animation:styles__fadeOut___oKU2I-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeOut___oKU2I-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___oKU2I-camelCase{0%{opacity:1}to{opacity:0}}@media only screen and (max-width:800px){.styles__nodesContainer___2rX47-camelCase{left:7.5vw}.styles__standingHolder___zcLTI-camelCase{width:85vw}.styles__standingContainer___24h3a-camelCase{height:80%}.styles__placeText___3f_yw-camelCase{width:8vw;font-size:6vw;margin:auto 0 auto 1vw}.styles__superPlaceText___2BQJS-camelCase{margin:1vh 0 auto;font-size:3.5vw;width:5.5vw}.styles__blookBox___3vBi1-camelCase{height:5vh;margin:auto 1vw auto .5vw}.styles__nameText___1imj1-camelCase{height:5.5vh;margin:auto 1.5vw auto 0;width:37vw}.styles__pointsText___3-HbX-camelCase{margin:auto 2vw auto auto;font-size:5.6vw;min-width:20vw}.styles__addText___2DOxx-camelCase{display:none}}@media only screen and (max-width:600px){.styles__placeText___3f_yw-camelCase{font-size:8.5vw;width:11vw}.styles__superPlaceText___2BQJS-camelCase{width:7vw;font-size:3.9vw}.styles__nameText___1imj1-camelCase{height:4vh}.styles__pointsText___3-HbX-camelCase{font-size:6.5vw}}',
      ''
    ]), t.locals = {
      nodesContainer: 'styles__nodesContainer___2rX47-camelCase',
      standingHolder: 'styles__standingHolder___zcLTI-camelCase',
      standingContainer: 'styles__standingContainer___24h3a-camelCase',
      placeText: 'styles__placeText___3f_yw-camelCase',
      superPlaceText: 'styles__superPlaceText___2BQJS-camelCase',
      blookBox: 'styles__blookBox___3vBi1-camelCase',
      nameText: 'styles__nameText___1imj1-camelCase',
      pointsText: 'styles__pointsText___3-HbX-camelCase',
      addText: 'styles__addText___2DOxx-camelCase',
      fadeIn: 'styles__fadeIn___3sIWa-camelCase',
      fadeOut: 'styles__fadeOut___oKU2I-camelCase'
    };
  },
  gPVm: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('mLw1'), u = n('wIs1'), p = n('vDqi'), f = n.n(p), m = n('5gLy'), d = n('GIcp'), _ = n.n(d), h = n('pcIS'), y = n('iQ+n'), b = n('TN+F'), g = n('SdQT');
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function w(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [], a = !0, r = !1, o = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(a = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); a = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            a || null == i.return || i.return();
          } finally {
            if (r)
              throw o;
          }
        }
        return n;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return x(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return x(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function x(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function C(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function E(e, t) {
      return (E = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function O(e) {
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
        var n, a = k(e);
        if (t) {
          var r = k(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return I(this, n);
      };
    }
    function I(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && E(e, t);
      }(s, e);
      var t, n, a, o = O(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = o.call(this, e)).state = {
          ready: !1,
          historyId: '',
          standings: [],
          muted: !!e.host && e.host.muted
        }, t;
      }
      return t = s, (n = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) {
              var t = JSON.parse(JSON.stringify(this.props.host));
              this.setState({ standings: t.standings }, function () {
                e.startTimeout = setTimeout(function () {
                  var n = {};
                  e.props.firebase.getDatabaseVal(t.id, 'c', function (a) {
                    var r = a || {};
                    Object.entries(r).forEach(function (e) {
                      var t = w(e, 2), a = t[0], r = t[1], o = {};
                      if (r.i)
                        if (Array.isArray(r.i))
                          for (var s = 0; s < r.i.length; s++) {
                            var i = r.i[s];
                            i && (o[s] = i);
                          }
                        else
                          o = r.i;
                      else
                        o = {};
                      var c = {};
                      if (r.c)
                        if (Array.isArray(r.c))
                          for (var l = 0; l < r.c.length; l++) {
                            var u = r.c[l];
                            u && (c[l] = u);
                          }
                        else
                          c = r.c;
                      else
                        c = {};
                      n[a] = {
                        corrects: c,
                        incorrects: o
                      };
                    }), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), window.removeEventListener('beforeunload', b.u), e.waitTimeout = setTimeout(function () {
                      e.state.standings.length > 0 && (f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.post('/api/history', {
                        standings: e.state.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            points: e.points,
                            corrects: n[e.name] ? n[e.name].corrects : {},
                            incorrects: n[e.name] ? n[e.name].incorrects : {}
                          };
                        }),
                        settings: t.settings,
                        set: t.hostName,
                        setId: t.setId,
                        name: t.hoster
                      }).then(function (t) {
                        e.setState({
                          historyId: t.data._id,
                          ready: !0
                        });
                      }).catch(function (e) {
                        console.error(e);
                      }));
                    }, 2000);
                  });
                }, 3500);
              });
            }
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost());
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? r.a.createElement('div', {
              className: _.a.hostBody,
              style: { overflowY: this.state.ready ? 'auto' : 'hidden' }
            }, r.a.createElement(y.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), this.state.standings.length > 0 ? r.a.createElement(h.a, {
              standings: this.state.standings,
              stats: this.state.standings.map(function (e) {
                return ''.concat(Object(b.n)(e.points), ' ').concat(1 === e.points ? 'Point' : 'Points');
              }),
              gameId: this.props.gameId,
              historyId: this.state.historyId,
              muted: this.state.muted
            }) : null) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && C(t.prototype, n), a && C(t, a), s;
    }(r.a.Component);
    S.propTypes = {
      gameId: c.a.string,
      host: c.a.object,
      firebase: c.a.object,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return {
        host: e.hosts.host,
        gameId: e.hosts.id
      };
    }, function (e) {
      return Object(o.b)({ deleteHost: m.c }, e);
    })(Object(g.d)(S)));
  },
  hdh5: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__leftContainer___2MALg-camelCase{position:fixed;top:55px;left:0;width:220px;height:calc(100% - 95px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);flex-direction:column}.styles__leftContainer___2MALg-camelCase,.styles__pageRow___1iw1T-camelCase{outline:none;display:flex}.styles__pageRow___1iw1T-camelCase{position:relative;flex-direction:row;align-items:center;height:45px;width:180px;margin:7px 20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;transition:all .15s linear}.styles__pageRow___1iw1T-camelCase:hover{color:#0bc2cf}.styles__rowIcon___393GI-camelCase{font-size:26px;width:30px;text-align:center;outline:none}.styles__rowText___9uUBy-camelCase{margin-left:15px;font-size:24px;outline:none}.styles__notificationIcon___1EYLQ-camelCase,.styles__rowText___9uUBy-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__notificationIcon___1EYLQ-camelCase{position:absolute;top:0;left:125px;border-radius:50%;height:20px;line-height:21px;width:20px;background-color:#0bc2cf;color:#fff;font-size:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center}.styles__mobileMenu___2IFWM-camelCase{width:100%;padding-top:5px;height:55px;margin-bottom:40px;background-color:#fff;box-shadow:0 6px 8px rgba(0,0,0,.2);display:none;flex-direction:column;outline:none;transition:height .2s linear}.styles__mobileMenuBig___3tXFg-camelCase{height:200px}.styles__mobileMenuBigger___2KKO5-camelCase{height:255px}.styles__mobileRow___3EzFG-camelCase{position:relative;display:flex;flex-direction:row;align-items:center;height:45px;width:90%;margin:5px 5%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;opacity:0;outline:none;-webkit-animation:styles__fadeIn___3KvkJ-camelCase .1s linear .15s forwards;animation:styles__fadeIn___3KvkJ-camelCase .1s linear .15s forwards}@-webkit-keyframes styles__fadeIn___3KvkJ-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3KvkJ-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:865px){.styles__leftContainer___2MALg-camelCase{display:none}.styles__mobileMenu___2IFWM-camelCase{display:flex}}',
      ''
    ]), t.locals = {
      leftContainer: 'styles__leftContainer___2MALg-camelCase',
      pageRow: 'styles__pageRow___1iw1T-camelCase',
      rowIcon: 'styles__rowIcon___393GI-camelCase',
      rowText: 'styles__rowText___9uUBy-camelCase',
      notificationIcon: 'styles__notificationIcon___1EYLQ-camelCase',
      mobileMenu: 'styles__mobileMenu___2IFWM-camelCase',
      mobileMenuBig: 'styles__mobileMenuBig___3tXFg-camelCase',
      mobileMenuBigger: 'styles__mobileMenuBigger___2KKO5-camelCase',
      mobileRow: 'styles__mobileRow___3EzFG-camelCase',
      fadeIn: 'styles__fadeIn___3KvkJ-camelCase'
    };
  },
  iNsH: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__nodesContainer___uCt_9-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingContainer___VDPnw-camelCase{position:absolute;height:10vh;width:60vw;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center}.styles__placeText___1DGaK-camelCase{text-align:right;width:2.35vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___1DGaK-camelCase,.styles__superPlaceText___37cnT-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___37cnT-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.25vw;text-align:left}.styles__blookBox___qLSqM-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___3cnCj-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:39vw}.styles__nameText___3cnCj-camelCase,.styles__pointsText___3DT49-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___3DT49-camelCase{margin:auto 2vw auto auto;font-size:4.5vh;font-weight:700;text-align:right;min-width:7vw}.styles__addText___EUIXx-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__nextButton___339h2-camelCase{background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Titan One,sans-serif;font-size:2.5vw;height:4vw;width:10vw;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;position:absolute;top:85px;right:20px;transition:.2s}.styles__nextButton___339h2-camelCase:focus,.styles__nextButton___339h2-camelCase:hover{transform:scale(.97)}.styles__fadeIn___nXrpY-camelCase{opacity:0;-webkit-animation:styles__fadeIn___nXrpY-camelCase .3s linear forwards;animation:styles__fadeIn___nXrpY-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeIn___nXrpY-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___nXrpY-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___2-ce_-camelCase{opacity:1;-webkit-animation:styles__fadeOut___2-ce_-camelCase .3s linear forwards;animation:styles__fadeOut___2-ce_-camelCase .3s linear forwards}@-webkit-keyframes styles__fadeOut___2-ce_-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___2-ce_-camelCase{0%{opacity:1}to{opacity:0}}',
      ''
    ]), t.locals = {
      nodesContainer: 'styles__nodesContainer___uCt_9-camelCase',
      standingContainer: 'styles__standingContainer___VDPnw-camelCase',
      placeText: 'styles__placeText___1DGaK-camelCase',
      superPlaceText: 'styles__superPlaceText___37cnT-camelCase',
      blookBox: 'styles__blookBox___qLSqM-camelCase',
      nameText: 'styles__nameText___3cnCj-camelCase',
      pointsText: 'styles__pointsText___3DT49-camelCase',
      addText: 'styles__addText___EUIXx-camelCase',
      nextButton: 'styles__nextButton___339h2-camelCase',
      fadeIn: 'styles__fadeIn___nXrpY-camelCase',
      fadeOut: 'styles__fadeOut___2-ce_-camelCase'
    };
  },
  kxF6: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    }), n.d(t, 'b', function () {
      return r;
    });
    var a = 'ADD_GAME_ID', r = 'SET_ID';
  },
  naaF: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var a = 'ADD_ANSWER';
  },
  pyZ1: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var a = 'SET_QUESTION';
  },
  'q+zm': function (e, t, n) {
    var a = n('hdh5');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  rvr9: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    }), n.d(t, 'b', function () {
      return o;
    });
    var a = n('CEwK');
    function r(e) {
      return {
        type: a.a,
        game: e
      };
    }
    function o() {
      return { type: a.b };
    }
  },
  s3kl: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('mLw1'), u = n('wIs1'), p = n('vDqi'), f = n.n(p), m = n('pyZ1');
    function d(e) {
      return {
        type: m.a,
        question: e
      };
    }
    var _ = n('1b17'), h = n('5gLy'), y = n('9IXX'), b = n('GIcp'), g = n.n(b), v = n('iQ+n'), w = n('nDzf'), x = n('TN+F'), C = n('SdQT');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function I(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? O(Object(n), !0).forEach(function (t) {
          k(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function k(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function S(e) {
      return function (e) {
        if (Array.isArray(e))
          return j(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return j(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return j(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function j(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function T(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function P(e, t) {
      return (P = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function N(e) {
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
        var n, a = D(e);
        if (t) {
          var r = D(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return R(this, n);
      };
    }
    function R(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? q(e) : t;
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var A = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && P(e, t);
      }(s, e);
      var t, n, a, o = N(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = o.call(this, e)).state = { muted: !!e.host && e.host.muted }, t.ok = !1, t.question = {}, t.answerString = '', t.next = t.next.bind(q(t)), t.changeMuted = t.changeMuted.bind(q(t)), t;
      }
      return t = s, (n = [
        {
          key: 'componentDidMount',
          value: function () {
            if (this.props.host && this.props.host.questions && !(this.props.host.question && this.props.host.question.number > this.props.host.questions.length)) {
              var e = this.props.host.questions.map(function (e) {
                  return e.number;
                }).indexOf(this.props.host.question ? this.props.host.question.number + 1 : 1), t = this.props.host.questions[e], n = S(t.answers);
              t.random && (n = Object(x.w)(n));
              var a = I(I({}, t), {}, { answers: n });
              this.props.setQuestion(a);
              for (var r = [], o = 0; o < t.answers.length; o++)
                r.push(n.indexOf(t.answers[o]));
              this.answerString = r.join(''), this.question = a;
            }
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', x.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
              id: this.props.host.id,
              clearAnswers: !0,
              stage: 'q-'.concat(this.question.stdNumber, '-').concat(this.answerString)
            }, function () {
              e.ok = !0, e.props.history.push('/host/classic/question');
            });
          }
        },
        {
          key: 'changeMuted',
          value: function () {
            var e = this;
            this.setState({ muted: !this.state.muted }, function () {
              e.props.setMuted(e.state.muted);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            return !this.props.host || !this.props.host.questions || this.props.host.question && this.props.host.question.number > this.props.host.questions.length ? r.a.createElement(l.a, { to: '/dashboard' }) : r.a.createElement('div', {
              className: g.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, r.a.createElement(v.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(y.a, {
              left: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
              right: 'QUESTION '.concat(this.props.host.question ? this.props.host.question.number : 1, '/').concat(this.props.host.questions.length),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement('div', { className: g.a.regularBody }, r.a.createElement(w.a, {
              normal: 1 === (this.props.host.question ? this.props.host.question.number : 1),
              done: this.next
            })));
          }
        }
      ]) && T(t.prototype, n), a && T(t, a), s;
    }(r.a.Component);
    A.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      setQuestion: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(o.b)({
        setQuestion: d,
        setMuted: _.a,
        deleteHost: h.c
      }, e);
    })(Object(C.d)(A)));
  },
  sdaw: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('wIs1'), u = n('mLw1'), p = n('b6Qr'), f = n('xD7w'), m = n('pMbe'), d = n('2g2H'), _ = n('iQ+n'), h = n('GIcp'), y = n.n(h), b = n('Lmlk'), g = n('SdQT'), v = n('TN+F');
    function w(e) {
      return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e) {
      return function (e) {
        if (Array.isArray(e))
          return C(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return C(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n)
          return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return C(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function C(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, a = new Array(t); n < t; n++)
        a[n] = e[n];
      return a;
    }
    function E(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
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
        var n, a = j(e);
        if (t) {
          var r = j(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return S(this, n);
      };
    }
    function S(e, t) {
      return !t || 'object' !== w(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function j(e) {
      return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var T = function (e) {
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
      }(c, e);
      var t, n, a, o, s, i = k(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {}, t.dbRef = {}, t;
      }
      return t = c, (n = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(v.c)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 5:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    var n = e.val();
                    if (n)
                      if (3 === n.split('-').length) {
                        var a = n.split('-'), r = t.props.client.questions.map(function (e) {
                            return e.number;
                          }).indexOf(parseInt(a[1], 10));
                        if (r < 0)
                          return;
                        for (var o = JSON.parse(JSON.stringify(t.props.client.questions[r])), s = x(o.answers), i = a[2].split(''), c = 0; c < s.length; c++)
                          o.answers[i[c]] = s[c];
                        t.props.getQuestion(o), t.props.history.push('/play/classic/question');
                      } else
                        'cstd' === n ? t.props.history.push('/play/classic/standings') : 'cfin' === n ? t.props.history.push('/play/classic/final') : 'cres' === n && t.props.history.push('/play/classic/answer/result');
                    else
                      t.props.deleteClient(), t.props.history.push('/play');
                  });
                case 7:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (n, a) {
              var r = o.apply(e, t);
              function s(e) {
                E(r, n, a, s, i, 'next', e);
              }
              function i(e) {
                E(r, n, a, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function () {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(v.t)();
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? r.a.createElement('div', {
              className: p.isMobile ? y.a.mBody : y.a.body,
              style: {
                backgroundColor: '#0bc2cf',
                overflow: 'hidden'
              }
            }, r.a.createElement(_.a, {
              title: 'Play Classic | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(d.a, {
              name: this.props.client.name,
              rightText: this.props.client.points
            }), r.a.createElement('div', { className: y.a.regularBody }, r.a.createElement(b.a, null))) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && O(t.prototype, n), a && O(t, a), c;
    }(r.a.Component);
    T.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        points: c.a.number,
        score: c.a.number,
        answer: c.a.string,
        blook: c.a.string,
        totalPoints: c.a.number,
        corrects: c.a.object,
        incorrects: c.a.object,
        team: c.a.object,
        questions: c.a.array
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      getQuestion: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(o.b)({
        deleteClient: m.a,
        getQuestion: f.a
      }, e);
    })(Object(g.d)(T)));
  },
  tU0a: function (e, t, n) {
    var a = n('wRI3');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  },
  vLl7: function (e, t, n) {
    'use strict';
    var a = n('q1tI'), r = n.n(a), o = n('ANjH'), s = n('/MKj'), i = n('17x9'), c = n.n(i), l = n('mLw1'), u = n('wIs1'), p = n('1F66'), f = n.n(p), m = n('ZRP+'), d = n('4HzQ'), _ = n('TSYQ'), h = n.n(_), y = n('vDqi'), b = n.n(y), g = n('1b17'), v = n('5gLy'), w = n('9IXX'), x = n('GIcp'), C = n.n(x), E = n('XFCD'), O = n.n(E), I = n('iQ+n'), k = n('DoX5'), S = n('TN+F'), j = n('SdQT');
    function T(e) {
      return (T = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function P(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? P(Object(n), !0).forEach(function (t) {
          R(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    function R(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }
    function q(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function D(e, t) {
      return (D = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function A(e) {
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
        var n, a = B(e);
        if (t) {
          var r = B(this).constructor;
          n = Reflect.construct(a, arguments, r);
        } else
          n = a.apply(this, arguments);
        return z(this, n);
      };
    }
    function z(e, t) {
      return !t || 'object' !== T(t) && 'function' != typeof t ? M(e) : t;
    }
    function M(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var U = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && D(e, t);
      }(s, e);
      var t, n, a, o = A(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = o.call(this, e)).state = {
          display: [],
          preShowPoints: !1,
          showPoints: !1,
          move: !1,
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.here = !0, t.next = t.next.bind(M(t)), t.changeMuted = t.changeMuted.bind(M(t)), t;
      }
      return t = s, (n = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.question) {
              var t = JSON.parse(JSON.stringify(this.props.host.standings)), n = JSON.parse(JSON.stringify(this.props.host.standings));
              n.sort(function (e, t) {
                var n = e.questionPlace - t.questionPlace;
                return 0 === n ? e.time - t.time : n;
              }), this.setState({
                display: n.slice(0, 5).map(function (e) {
                  return N(N({}, e), {}, {
                    points: e.points - e.questionPoints,
                    totalPoints: e.points
                  });
                })
              }, function () {
                e.pointsTimeout = setTimeout(function () {
                  e.here && e.setState({ preShowPoints: !0 }, function () {
                    e.pointsTimeout = setTimeout(function () {
                      e.here && (e.setState({ showPoints: !0 }), e.pointsTimeout = setTimeout(function () {
                        e.interval = setInterval(function () {
                          var t = JSON.parse(JSON.stringify(e.state.display));
                          t.forEach(function (n, a) {
                            n.points < n.totalPoints ? t[a].points += 1 : 0 === a && clearInterval(e.interval);
                          }), e.here && e.setState({ display: t });
                        }, Math.max(5, e.state.display.length > 0 && e.state.display[0] && e.state.display[0].questionPoints ? 1200 / e.state.display[0].questionPoints : 5));
                      }, 1000), e.moveTimeout = setTimeout(function () {
                        e.here && e.setState({
                          display: t.slice(0, 5),
                          move: !0
                        });
                      }, 3000));
                    }, 500);
                  });
                }, 3000);
              }), this.exitTimeout = setTimeout(function () {
                e.here && e.setState({ display: [] }, function () {
                  e.transitionTimeout = setTimeout(function () {
                    e.next();
                  }, 1500);
                });
              }, 9000);
            }
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1, clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', S.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            b.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
              id: this.props.host.id,
              stage: 'crdy'
            }, function () {
              e.ok = !0, e.props.history.push('/host/classic/get-ready');
            });
          }
        },
        {
          key: 'changeMuted',
          value: function () {
            var e = this;
            this.setState({ muted: !this.state.muted }, function () {
              e.props.setMuted(e.state.muted);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.host && this.props.host.standings && this.props.host.question ? r.a.createElement('div', { className: C.a.hostBody }, r.a.createElement(I.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(w.a, {
              left: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
              center: 'Standings',
              right: 'QUESTION '.concat(this.props.host.question.number, '/').concat(this.props.host.questions.length),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement('div', {
              className: O.a.nextButton,
              role: 'button',
              tabIndex: 0,
              onClick: this.next
            }, 'Next'), r.a.createElement(f.a, {
              data: this.state.display,
              keyAccessor: function (e) {
                return e.name;
              },
              start: function (e, t) {
                return {
                  opacity: 0.000001,
                  x: 100,
                  y: 13 * (t + 1) - 44
                };
              },
              enter: function (e, t) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [13 * (t + 1) - 44],
                  timing: {
                    duration: 500,
                    delay: 250 * (t + 1),
                    ease: m.a
                  }
                };
              },
              update: function (e, t) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [13 * (t + 1) - 44],
                  timing: {
                    duration: 500,
                    delay: 250 * (t + 1),
                    ease: m.a
                  }
                };
              },
              leave: function (e, t) {
                return {
                  opacity: [0.000001],
                  x: [-160],
                  timing: {
                    duration: 500,
                    delay: 250 * t,
                    ease: m.a
                  }
                };
              }
            }, function (t) {
              return r.a.createElement('div', { className: O.a.nodesContainer }, t.map(function (t) {
                var n = t.key, a = t.data, o = t.state, s = o.x, i = o.y, c = o.opacity;
                return r.a.createElement('div', {
                  className: O.a.standingContainer,
                  style: {
                    opacity: c,
                    transform: 'translate('.concat(s, 'vw, ').concat(i, 'vh)')
                  },
                  key: n
                }, r.a.createElement('div', { className: O.a.placeText }, e.state.move ? a.place : a.questionPlace), r.a.createElement('div', { className: O.a.superPlaceText }, Object(S.g)(e.state.move ? a.place : a.questionPlace)), r.a.createElement(k.a, {
                  name: a.blook,
                  className: O.a.blookBox
                }), r.a.createElement(d.Textfit, {
                  className: O.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: Object(S.C)('5vh')
                }, a.name), r.a.createElement('div', {
                  className: h()(O.a.pointsText, R({}, O.a.fadeIn, e.state.showPoints), R({}, O.a.fadeOut, e.state.preShowPoints && !e.state.showPoints)),
                  style: { fontSize: e.state.showPoints || !a.correct ? '5.35vh' : '4.5vh' }
                }, e.state.showPoints ? Object(S.n)(a.points) : a.correct ? ''.concat((a.time / 1000).toFixed(3), 's') : r.a.createElement('i', { className: 'fas fa-times' })), r.a.createElement('div', { className: h()(O.a.addText, e.state.move ? O.a.fadeOut : O.a.fadeIn) }, '+'.concat(a.questionPoints)));
              }));
            })) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && q(t.prototype, n), a && q(t, a), s;
    }(r.a.Component);
    U.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        standings: c.a.array,
        numberOfQuestions: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(o.b)({
        setMuted: g.a,
        deleteHost: v.c
      }, e);
    })(Object(j.d)(U)));
  },
  wMMV: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return a;
    });
    var a = 'UPDATE_CLASSIC';
  },
  wRI3: function (e, t, n) {
    (t = e.exports = n('JPst')(!1)).push([
      e.i,
      '.styles__header___2PcXB-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___gReKn-camelCase,.styles__header___2PcXB-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;-webkit-animation:styles__fadeIn___Xb0nl-camelCase .3s linear .3s forwards;animation:styles__fadeIn___Xb0nl-camelCase .3s linear .3s forwards}.styles__container___gReKn-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___3XVxO-camelCase{font-size:30px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:10%;left:15%;width:70%;font-family:Nunito,sans-serif;font-weight:700;opacity:0;-webkit-animation:styles__fadeIn___Xb0nl-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___Xb0nl-camelCase .3s linear 1.3s forwards}.styles__pointsText___2-RM_-camelCase{font-size:24px;font-weight:400;opacity:0;-webkit-animation:styles__fadeIn___Xb0nl-camelCase .3s linear 1.8s forwards;animation:styles__fadeIn___Xb0nl-camelCase .3s linear 1.8s forwards}.styles__background___eQadR-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___Xb0nl-camelCase .3s linear 0s forwards;animation:styles__fadeIn___Xb0nl-camelCase .3s linear 0s forwards}@-webkit-keyframes styles__fadeIn___Xb0nl-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___Xb0nl-camelCase{0%{opacity:0}to{opacity:1}}',
      ''
    ]), t.locals = {
      header: 'styles__header___2PcXB-camelCase',
      container: 'styles__container___gReKn-camelCase',
      fadeIn: 'styles__fadeIn___Xb0nl-camelCase',
      correctAnswers: 'styles__correctAnswers___3XVxO-camelCase',
      pointsText: 'styles__pointsText___2-RM_-camelCase',
      background: 'styles__background___eQadR-camelCase'
    };
  },
  xD7w: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var a = n('Q5GW');
    function r(e) {
      return {
        type: a.a,
        question: e
      };
    }
  },
  yvNf: function (e, t, n) {
    var a = n('8+ym');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    n('aET+')(a, r);
    a.locals && (e.exports = a.locals);
  }
}]);