(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{
  '179F': function (e, t, a) {
    var s = a('OZt/');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  '1b17': function (e, t, a) {
    'use strict';
    a.d(t, 'c', function () {
      return n;
    }), a.d(t, 'b', function () {
      return o;
    }), a.d(t, 'a', function () {
      return r;
    });
    var s = a('TRTi');
    function n(e, t) {
      return {
        type: s.c,
        host: e,
        setId: t
      };
    }
    function o(e) {
      return {
        type: s.b,
        players: e
      };
    }
    function r(e) {
      return {
        type: s.a,
        muted: e
      };
    }
  },
  '20R2': function (e, t, a) {
    var s = a('VLsZ');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  '5gLy': function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return n;
    }), a.d(t, 'c', function () {
      return o;
    }), a.d(t, 'd', function () {
      return r;
    }), a.d(t, 'b', function () {
      return i;
    });
    var s = a('ENR4');
    function n(e) {
      return {
        type: s.a,
        hostName: e
      };
    }
    function o() {
      return { type: s.c };
    }
    function r(e) {
      return {
        type: s.d,
        settings: e
      };
    }
    function i(e, t) {
      return {
        type: s.b,
        questions: e,
        name: t
      };
    }
  },
  ENR4: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return s;
    }), a.d(t, 'c', function () {
      return n;
    }), a.d(t, 'd', function () {
      return o;
    }), a.d(t, 'b', function () {
      return r;
    });
    var s = 'ADD_HOST', n = 'DELETE_HOST', o = 'SET_SETTINGS', r = 'ADD_HOST_QUESTIONS';
  },
  'FBf/': function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mLw1'), m = a('wIs1'), u = a('TSYQ'), _ = a.n(u), d = a('vDqi'), p = a.n(d), f = a('1b17'), h = a('5gLy'), y = a('6bnt'), g = a('uMVL'), x = a('9IXX'), b = a('GIcp'), C = a.n(b), v = a('gZAK'), w = a.n(v), T = a('iQ+n'), E = a('CKiD'), k = a('TN+F'), N = a('gHt9'), S = a('SdQT');
    function j(e) {
      return (j = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function I(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? I(Object(a), !0).forEach(function (t) {
          B(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : I(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function B(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function z(e) {
      return function (e) {
        if (Array.isArray(e))
          return P(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || R(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function D(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || R(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function R(e, t) {
      if (e) {
        if ('string' == typeof e)
          return P(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? P(e, t) : void 0;
      }
    }
    function P(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function H(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function q(e, t) {
      return (q = Object.setPrototypeOf || function (e, t) {
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
        var a, s = W(e);
        if (t) {
          var n = W(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return M(this, a);
      };
    }
    function M(e, t) {
      return !t || 'object' !== j(t) && 'function' != typeof t ? Q(e) : t;
    }
    function Q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function W(e) {
      return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var G = function (e) {
        var t = {};
        return e.forEach(function (e) {
          e.players.forEach(function (a) {
            t[a.name] = {
              b: a.blook,
              t: e.blook
            };
          });
        }), t;
      }, J = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && q(e, t);
        }(r, e);
        var t, a, s, o = A(r);
        function r(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, r), (t = o.call(this, e)).state = {
            teams: [],
            transition: !1,
            selected: '',
            redirect: !1
          }, t.ok = !1, t.players = [], t.shuffleTeams = t.shuffleTeams.bind(Q(t)), t.startGame = t.startGame.bind(Q(t)), t.swap = t.swap.bind(Q(t)), t;
        }
        return t = r, (a = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              this.props.host && this.props.host.questions && this.props.host.players && (this.players = JSON.parse(JSON.stringify(this.props.host.players)), this.energy = this.props.host.settings.energy, this.props.host.players[0] && this.props.host.players[0].players ? function () {
                for (var t = JSON.parse(JSON.stringify(e.props.host.players)), a = function (a) {
                      if (t[a].players = [], Object.entries(e.props.host.players[a].players).forEach(function (e) {
                          var s = D(e, 2), n = s[0], o = s[1];
                          t[a].players.push({
                            name: n,
                            blook: o.blook
                          });
                        }), E.a[t[a].players[0].blook] !== t[a].name) {
                        var s = t[a].players.map(function (e) {
                            return E.a[e.blook];
                          }).indexOf(t[a].name), n = t[a].players[0];
                        t[a].players[0] = t[a].players[s], t[a].players[s] = n;
                      }
                    }, s = 0; s < e.props.host.players.length; s++)
                  a(s);
                e.setState({ teams: t });
              }() : this.shuffleTeams());
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost());
            }
          },
          {
            key: 'shuffleTeams',
            value: function () {
              var e = Object(k.w)(this.players), t = this.players.length, a = [], s = 0, n = 0, o = 0;
              if ('Snow' === this.props.host.settings.type ? (s = 2, o = Math.floor(t / 2), n = t % 2) : t <= 5 ? (o = 2, s = 2, n = t - 4) : t % 3 <= t % 4 || t % 4 != 0 ? (o = 3, s = Math.floor(t / 3), n = t % 3) : (o = 4, s = Math.floor(t / 4), n = t % 4), 0 !== e.length) {
                for (var r = 0; r < s; r++) {
                  var i = o;
                  n > 0 && (i += 1, n -= 1);
                  var l = e[0].blook, c = E.a[l];
                  a.push({
                    name: c,
                    blook: l,
                    time: 0,
                    correct: !1,
                    players: []
                  }), this.energy && (a[a.length - 1].energy = this.energy), 'Snow' === this.props.host.settings.type && (delete a[a.length - 1].time, delete a[a.length - 1].correct, a[a.length - 1].snow = !0), e.splice(0, i).forEach(function (e) {
                    a[a.length - 1].players.push(e);
                  });
                }
                var m = G(a);
                this.props.firebase.setVal({
                  id: this.props.host.id,
                  path: 'c',
                  val: m
                }), this.setState({ teams: a });
              }
            }
          },
          {
            key: 'startGame',
            value: function () {
              var e = this;
              this.setState({ transition: !0 }, function () {
                e.goTimeout = setTimeout(function () {
                  for (var t = JSON.parse(JSON.stringify(e.state.teams)), a = 0; a < e.state.teams.length; a++) {
                    t[a].players = {};
                    for (var s = 0; s < e.state.teams[a].players.length; s++) {
                      var n = e.state.teams[a].players[s];
                      t[a].players[n.name] = {
                        blook: n.blook,
                        time: 0
                      };
                    }
                  }
                  if (e.props.setPlayers(t), e.ok = !0, e.props.host.settings.instruct)
                    p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                      id: e.props.host.id,
                      stage: 'inst'
                    }, function () {
                      'Snow' === e.props.host.settings.type ? e.props.history.push('/host/snow/instructions') : e.props.history.push('/host/battle-royale/instructions');
                    });
                  else if ('Snow' === e.props.host.settings.type)
                    e.props.history.push('/host/snow');
                  else {
                    var o = Object(g.b)(t, 'Teams' === e.props.host.settings.mode, e.props.host.usedQuestions, e.props.host.questionsPlayed, e.props.host.questions, e.props.host.dead);
                    e.props.prepareRoyale(1, o.usedQuestions, o.questionsPlayed, 'q-'.concat(o.question.stdNumber, '-').concat(o.answerString), o.question, o.matches), e.props.firebase.setVal({
                      id: e.props.host.id,
                      path: 'c',
                      val: o.dbPlayers
                    }, function () {
                      p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                        id: e.props.host.id,
                        stage: 'prv'
                      }, function () {
                        e.ok = !0, e.props.history.push('/host/battle-royale/match/preview');
                      });
                    });
                  }
                }, 500);
              });
            }
          },
          {
            key: 'swap',
            value: function (e) {
              var t = this;
              if (this.state.selected) {
                var a = z(this.state.teams), s = a.map(function (e) {
                    return e.name;
                  }), n = this.state.teams.filter(function (e) {
                    return e.players.map(function (e) {
                      return e.name;
                    }).includes(t.state.selected);
                  })[0], o = n.players.map(function (e) {
                    return e.name;
                  }).indexOf(this.state.selected), r = n.players[o], i = this.state.teams.filter(function (t) {
                    return t.players.map(function (e) {
                      return e.name;
                    }).includes(e);
                  })[0], l = i.players.map(function (e) {
                    return e.name;
                  }).indexOf(e), c = i.players[l];
                if (n === i) {
                  n.players[o] = c, n.players[l] = r;
                  var m = O(O({}, n), {}, {
                    name: E.a[n.players[0].blook],
                    blook: n.players[0].blook
                  });
                  a[s.indexOf(n.name)] = m;
                } else {
                  n.players[o] = c;
                  var u = O(O({}, n), {}, {
                    name: E.a[n.players[0].blook],
                    blook: n.players[0].blook
                  });
                  i.players[l] = r;
                  var _ = O(O({}, i), {}, {
                    name: E.a[i.players[0].blook],
                    blook: i.players[0].blook
                  });
                  a[s.indexOf(n.name)] = u, a[s.indexOf(i.name)] = _;
                }
                var d = G(a);
                this.props.firebase.setVal({
                  id: this.props.host.id,
                  path: 'c',
                  val: d
                }), this.setState({
                  selected: '',
                  teams: a
                });
              } else
                this.setState({ selected: e });
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return this.props.host && this.props.host.questions && this.props.host.players && !this.state.redirect ? n.a.createElement('div', {
                className: C.a.body,
                style: {
                  backgroundColor: '#0bc2cf',
                  backgroundImage: 'Snow' === this.props.host.settings.type ? 'linear-gradient(#31aae0, #bdf)' : null
                }
              }, n.a.createElement(T.a, {
                title: 'Host Blooket',
                desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
              }), n.a.createElement(x.a, {
                left: 'Royale' === this.props.host.settings.type ? 'Round 1' : '',
                center: 'Click Players to Swap',
                right: 'Royale' === this.props.host.settings.type ? ''.concat(this.state.teams.length, ' ').concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain') : ''
              }), n.a.createElement('div', { className: _()(C.a.hostRegularBody, B({}, w.a.invisible, this.state.transition)) }, n.a.createElement('div', { className: w.a.buttonContainer }, n.a.createElement('div', {
                className: w.a.button,
                role: 'button',
                tabIndex: 0,
                onClick: this.shuffleTeams
              }, n.a.createElement('i', {
                className: 'fas fa-redo-alt',
                style: { fontSize: 36 }
              }), '\xA0 Shuffle'), n.a.createElement('div', {
                className: w.a.button,
                role: 'button',
                tabIndex: 0,
                onClick: this.startGame
              }, n.a.createElement('i', {
                className: 'fas fa-play',
                style: { fontSize: 33 }
              }), '\xA0 Start')), n.a.createElement('div', { className: w.a.teamsArray }, this.state.teams.map(function (t) {
                return n.a.createElement(N.a, {
                  key: t.name,
                  team: t,
                  noEnergy: !0,
                  selected: e.state.selected,
                  onSelect: function (t) {
                    return e.swap(t);
                  },
                  canClick: !0
                });
              })))) : n.a.createElement(c.a, { to: '/dashboard' });
            }
          }
        ]) && H(t.prototype, a), s && H(t, s), r;
      }(n.a.Component);
    J.propTypes = {
      host: l.a.shape({
        hostName: l.a.string,
        id: l.a.number,
        question: l.a.object,
        questions: l.a.array,
        settings: l.a.object,
        players: l.a.array,
        round: l.a.number,
        usedQuestions: l.a.array,
        questionsPlayed: l.a.array,
        dead: l.a.object
      }),
      firebase: l.a.object,
      history: l.a.object,
      setPlayers: l.a.func.isRequired,
      deleteHost: l.a.func.isRequired,
      prepareRoyale: l.a.func.isRequired
    };
    t.a = Object(m.a)(Object(r.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(o.b)({
        setPlayers: f.b,
        deleteHost: h.c,
        prepareRoyale: y.a
      }, e);
    })(Object(S.d)(J)));
  },
  GZG1: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__teamsArray___3V9qy-camelCase{width:100vw;margin:3vh auto 0;justify-content:center;align-content:flex-start;display:flex;flex-flow:row wrap;opacity:0;-webkit-animation:styles__fadeIn___3116I-camelCase .4s linear .75s forwards;animation:styles__fadeIn___3116I-camelCase .4s linear .75s forwards}@-webkit-keyframes styles__fadeIn___3116I-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3116I-camelCase{0%{opacity:0}to{opacity:1}}.styles__invisible___1HYDV-camelCase{opacity:0;transition:all .5s linear}.styles__buttonContainer___1fcCC-camelCase{width:80vw;margin:0 auto;height:150px;display:flex;flex-direction:row;justify-content:space-around;align-items:center;opacity:0;-webkit-animation:styles__fadeIn___3116I-camelCase .4s linear .75s forwards;animation:styles__fadeIn___3116I-camelCase .4s linear .75s forwards}.styles__button___2JSX8-camelCase{line-height:75px;height:75px;width:360px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;font-size:42px;color:#3a3a3a;font-family:Nunito,sans-serif;font-weight:700;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___2JSX8-camelCase:hover{transform:scale(1.05)}',
      ''
    ]), t.locals = {
      teamsArray: 'styles__teamsArray___3V9qy-camelCase',
      fadeIn: 'styles__fadeIn___3116I-camelCase',
      invisible: 'styles__invisible___1HYDV-camelCase',
      buttonContainer: 'styles__buttonContainer___1fcCC-camelCase',
      button: 'styles__button___2JSX8-camelCase'
    };
  },
  JCtM: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mf+E'), m = a('2iEm'), u = a('wIs1'), _ = a('vDqi'), d = a.n(_), p = a('TSYQ'), f = a.n(p), h = a('wd/R'), y = a.n(h), g = a('b6Qr'), x = a('5gLy'), b = a('GIcp'), C = a.n(b), v = a('p6ut'), w = a.n(v), T = a('iQ+n'), E = a('I0uU'), k = a('Vs+T'), N = a('iVxs'), S = a('anyA'), j = a('SdQT');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? O(Object(a), !0).forEach(function (t) {
          z(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function z(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function D(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function R(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function P(e, t) {
      return (P = Object.setPrototypeOf || function (e, t) {
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
        var a, s = M(e);
        if (t) {
          var n = M(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return q(this, a);
      };
    }
    function q(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? A(e) : t;
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function M(e) {
      return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var Q = function (e) {
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
      }(l, e);
      var t, a, s, o, r, i = H(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          setTitle: '',
          hwTitle: '',
          settings: {
            mode: '',
            type: '',
            method: '',
            amount: 7
          },
          questions: [],
          days: 1,
          hours: 0,
          minutes: 0,
          date: y()().add(24, 'hours').format('MMMM Do, YYYY - h:mm a'),
          loading: !0,
          ready: !1,
          redirect: !1,
          plus: !1
        }, t.here = !0, t.loading = !1, t.decoded = {}, t.duration = 1440, t.onAssign = t.onAssign.bind(A(t)), t.onAmountUpdate = t.onAmountUpdate.bind(A(t)), t.onDurationUpdate = t.onDurationUpdate.bind(A(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, a, s = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.host && this.props.host.settings && this.props.id) {
                    e.next = 4;
                    break;
                  }
                  return this.props.deleteHost(), e.abrupt('return');
                case 4:
                  return this.props.host.settings && this.props.host.questions && (t = B({}, this.props.host.settings), this.props.deleteHost(), this.props.setSettings(t)), this.setState({
                    settings: B(B({}, this.state.settings), {}, {
                      type: this.props.host.settings.type,
                      method: this.props.host.settings.method,
                      mode: 'Cash',
                      amount: 'Kingdom' === this.props.host.settings.type ? 30 : 'Defense' === this.props.host.settings.type ? 20 : 'Cafe' === this.props.host.settings.type ? 7 : 1000000
                    })
                  }), e.next = 8, this.props.user.getData();
                case 8:
                  if (a = e.sent) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 11:
                  d.a.get('/api/games', { params: { gameId: this.props.id } }).then(function (e) {
                    s.here && (e.data.questions ? (s.decoded = a, s.setState({
                      loading: !1,
                      ready: !0,
                      setTitle: e.data.title,
                      hwTitle: ''.concat(e.data.title, ' HW'),
                      questions: e.data.questions
                    })) : s.setState({
                      redirect: !0,
                      ready: !0
                    }));
                  }).catch(function (e) {
                    console.error(e);
                  }), d.a.put('/api/users/plan', { name: a.name }).then(function (e) {
                    s.here && s.setState({ plus: 'Starter' !== e.data.plan });
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 13:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, s) {
              var n = o.apply(e, t);
              function r(e) {
                D(n, a, s, r, i, 'next', e);
              }
              function i(e) {
                D(n, a, s, r, i, 'throw', e);
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
          key: 'onAssign',
          value: function () {
            var e = this;
            if (!this.loading) {
              this.loading = !0, this.setState({ loading: !0 });
              var t = { type: this.props.host.settings.type };
              'Factory' === t.type ? (t.mode = this.state.settings.mode, t.amount = this.state.settings.amount) : [
                'Cafe',
                'Defense',
                'Kingdom'
              ].includes(t.type) && (t.amount = this.state.settings.amount), d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.post('/api/homeworks', {
                host: this.decoded.name,
                title: this.state.hwTitle,
                setId: this.props.id,
                duration: this.duration,
                settings: t
              }).then(function (t) {
                if (!t || !t.data)
                  return e.loading = !1, void e.setState({ loading: !1 });
                e.props.history.push('/homework/'.concat(t.data._id));
              }).catch(function (t) {
                console.error(t), e.loading = !1, e.setState({ loading: !1 });
              });
            }
          }
        },
        {
          key: 'onAmountUpdate',
          value: function (e) {
            this.setState({ settings: B(B({}, this.state.settings), {}, { amount: e.target.value < 1 ? 1 : e.target.value }) });
          }
        },
        {
          key: 'onDurationUpdate',
          value: function (e, t) {
            var a = Math.max(0, e), s = 'days' === t ? a : this.state.days, n = 'hours' === t ? a : this.state.hours, o = 'minutes' === t ? a : this.state.minutes;
            this.duration = 24 * s * 60 + 60 * n + o, this.setState({
              days: s,
              hours: n,
              minutes: o,
              date: y()().add(this.duration, 'minutes').format('MMMM Do, YYYY - h:mm a')
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.redirect || !this.props.host || !this.props.host.settings || !this.props.id || this.state.ready && this.state.redirect ? n.a.createElement(c.a, { to: '/dashboard' }) : n.a.createElement('div', {
              className: g.isMobile ? C.a.mBody : C.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, n.a.createElement(T.a, {
              title: 'Assign Blooket',
              desc: 'Assign a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), g.isMobile || 0 === this.state.questions.length && this.state.ready ? n.a.createElement('div', {
              style: {
                width: '100%',
                textAlign: 'center'
              }
            }, n.a.createElement('div', { className: w.a.nothingText }, 0 === this.state.questions.length ? 'Can\'t assign a set with 0 questions' : 'Hosting Not Available on Mobile'), n.a.createElement(m.a, {
              className: w.a.linkText,
              to: '/dashboard'
            }, 'Go Back')) : n.a.createElement('div', { className: w.a.center }, n.a.createElement('div', { className: w.a.header }, 'Blooket'), n.a.createElement('div', { className: w.a.mainContainer }, n.a.createElement('div', { className: w.a.setTitleText }, this.state.setTitle), this.state.loading ? n.a.createElement(E.a, null) : n.a.createElement('div', {
              className: w.a.assignButton,
              role: 'button',
              tabIndex: 0,
              onClick: this.onAssign
            }, n.a.createElement('div', { className: w.a.assignText }, 'Assign Now')), n.a.createElement('div', { className: w.a.descText }, '\n                  Assigning Homework allows students to complete a game on their own time.\n                  You\'ll be given a Game ID that is valid for the time specified below.\n                  When students use this Game ID, they\'ll be able to play the game and answer questions.\n                  Then, you\'ll get live updates on their progress and performance.\n                '), n.a.createElement('div', { className: w.a.dateText }, 'Due: '.concat(this.state.date)), n.a.createElement('div', { className: w.a.settingsText }, 'Change Time:'), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'far fa-clock') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Days')), n.a.createElement('input', {
              className: w.a.amountInput,
              name: 'days',
              onChange: function (t) {
                return e.onDurationUpdate(Math.min(t.target.value, e.state.plus ? N.b : N.a), t.target.name);
              },
              value: this.state.days,
              type: 'number',
              min: '0'
            })), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'far fa-clock') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Hours')), n.a.createElement('input', {
              className: w.a.amountInput,
              name: 'hours',
              onChange: function (t) {
                return e.onDurationUpdate(Math.min(t.target.value, 23), t.target.name);
              },
              value: this.state.hours,
              type: 'number',
              min: '0'
            })), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'far fa-clock') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Minutes')), n.a.createElement('input', {
              className: w.a.amountInput,
              name: 'minutes',
              onChange: function (t) {
                return e.onDurationUpdate(Math.min(t.target.value, 59), t.target.name);
              },
              value: this.state.minutes,
              type: 'number',
              min: '0'
            })), n.a.createElement('div', { className: w.a.settingsText }, 'Change HW Title:'), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('input', {
              className: w.a.textInput,
              onChange: function (t) {
                return e.setState({ hwTitle: t.target.value });
              },
              placeholder: 'HW Title',
              value: this.state.hwTitle,
              min: '0'
            })), 'Factory' === this.state.settings.type ? n.a.createElement('div', { className: w.a.keepCentered }, n.a.createElement('div', { className: w.a.settingsText }, 'Settings:'), n.a.createElement('div', { className: w.a.modeContainer }, n.a.createElement(k.a, {
              title: 'Time',
              desc: 'The game ends after the set time has passed',
              icon: 'fas fa-stopwatch',
              selected: 'Time' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: B(B({}, e.state.settings), {}, {
                    mode: 'Time',
                    amount: 7
                  })
                });
              }
            }), n.a.createElement('div', { style: { width: '2vw' } }), n.a.createElement(k.a, {
              title: 'Cash',
              desc: 'The game ends after a player reaches the set cash amount',
              icon: 'fas fa-dollar-sign',
              selected: 'Cash' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: B(B({}, e.state.settings), {}, {
                    mode: 'Cash',
                    amount: 1000000
                  })
                });
              }
            })), n.a.createElement('div', {
              className: w.a.amountContainer,
              style: { height: 'auto' }
            }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'Cash' === this.state.settings.mode ? 'far fa-money-bill-alt' : 'far fa-clock') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Cash' === this.state.settings.mode ? 'Cash Goal ($)' : 'Time (minutes)')), n.a.createElement('input', {
              className: w.a.amountInput,
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount,
              type: 'number',
              min: '1'
            })), n.a.createElement('div', { style: { height: 30 } })) : 'Cafe' === this.state.settings.type ? n.a.createElement('div', { className: w.a.keepCentered }, n.a.createElement('div', { className: w.a.settingsText }, 'Settings:'), n.a.createElement('div', {
              className: w.a.descText,
              style: { marginTop: 10 }
            }, '\n                      In Café homework mode, students run a Café and serve customers by answering questions.\n                      The game is broken into days, and each day the student will have to serve so\n                      many customers before they are able to upgrade their Café. If they fail to serve\n                      3 customers in a day, their game is over. The setting below changes how many\n                      days they should try to keep their Café open, but it doesn\'t have a real effect on the game.\n                    '), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'far fa-calendar-alt') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Day Goal'), n.a.createElement('div', { className: w.a.amountDesc }, '(7 days is about 50 questions)')), n.a.createElement('input', {
              className: w.a.amountInput,
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount,
              type: 'number',
              min: '1'
            })), n.a.createElement('div', { style: { height: 30 } })) : 'Defense' === this.state.settings.type ? n.a.createElement('div', { className: w.a.keepCentered }, n.a.createElement('div', { className: w.a.settingsText }, 'Settings:'), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'fas fa-hashtag') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Round Goal')), n.a.createElement('input', {
              className: w.a.amountInput,
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount,
              type: 'number',
              min: '1'
            })), n.a.createElement('div', { style: { height: 30 } })) : 'Kingdom' === this.state.settings.type ? n.a.createElement('div', { className: w.a.keepCentered }, n.a.createElement('div', { className: w.a.settingsText }, 'Settings:'), n.a.createElement('div', {
              className: w.a.descText,
              style: { marginTop: 10 }
            }, '\n                    In Crazy Kingdom, students are put in charge of ruling over a kingdom. Guests will\n                    show up to their castle and make requests. By answering questions correctly, they\u2019ll\n                    be able to answer these guests. However, they have to make smart decisions to manage\n                    their kingdom\u2019s resources, and answer guests accordingly. When they run out of\n                    resources, their game is over.\n                    '), n.a.createElement('div', { className: w.a.amountContainer }, n.a.createElement('i', { className: f()(w.a.amountIcon, 'fas fa-users') }), n.a.createElement('div', { className: w.a.amountColumn }, n.a.createElement('div', { className: w.a.amountHeader }, 'Guests Goal'), n.a.createElement('div', { className: w.a.amountDesc }, '(About 1 question per guest)')), n.a.createElement('input', {
              className: w.a.amountInput,
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount,
              type: 'number',
              min: '1'
            })), n.a.createElement('div', { style: { height: 30 } })) : n.a.createElement('div', { className: w.a.keepCentered }, n.a.createElement('div', { className: w.a.descText }, '\n                      For Tower of Doom, there are no extra settings.\n                      You\'ll just be able to see students progress on the Tower and their question accuracy.\n                    '), n.a.createElement('div', { style: { height: 30 } })))));
          }
        }
      ]) && R(t.prototype, a), s && R(t, s), l;
    }(n.a.Component);
    Q.propTypes = {
      host: l.a.shape({
        settings: l.a.object,
        questions: l.a.array,
        id: l.a.number
      }),
      id: l.a.string,
      deleteHost: l.a.func.isRequired,
      setSettings: l.a.func.isRequired,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(S.c)(Object(u.a)(Object(r.b)(function (e) {
      return {
        host: e.hosts.host,
        id: e.hosts.id
      };
    }, function (e) {
      return Object(o.b)({
        deleteHost: x.c,
        setSettings: x.d
      }, e);
    })(Object(j.d)(Q))));
  },
  LMWO: function (e, t, a) {
    var s = a('Mm8r');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  'M+e5': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__fullContainer___1jtRa-camelCase{display:flex;flex-direction:column;align-items:center;width:85%;margin:0 7.5% 10px}.styles__setContainer___1rFD2-camelCase{width:100%;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;margin:30px auto 0}.styles__setText___3_C-t-camelCase{color:#3a3a3a;line-height:48px;font-size:48px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;margin:20px 30px}.styles__row___2pYbv-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:100%;margin:5px 0}.styles__miniTopContainer___2YB-Y-camelCase{min-width:240px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;margin:25px auto}.styles__miniTopText___3OH1U-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:13px 25px}.styles__chartContainer___37bit-camelCase{min-width:300px;min-height:300px;width:25vw;height:25vw;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:0;display:flex;flex-direction:column;position:relative}.styles__chartPercentage___-0eL5-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__column___2xCIy-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 20px}.styles__correctContainer___DYrmG-camelCase{min-width:300px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;margin:10px auto}.styles__correctText___1zgYe-camelCase{color:#3a3a3a;font-size:40px;padding:15px 25px}.styles__correctText___1zgYe-camelCase,.styles__deleteButton___3-OR8-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:center}.styles__deleteButton___3-OR8-camelCase{min-width:250px;background-color:#ce1313;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:30px;padding:7px 0;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteButton___3-OR8-camelCase:hover{transform:scale(.96)}.styles__downloadButton___1lRTW-camelCase{min-width:200px;background-color:#02723b;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:20px;padding:5px 0;font-family:Nunito,sans-serif;font-weight:700;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__downloadButton___1lRTW-camelCase:hover{transform:scale(.96)}.styles__headerContainer___25u6X-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;width:100%;margin:30px auto 25px}.styles__headerText___1iz-S-camelCase{color:#3a3a3a;font-size:40px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 25px}.styles__sortedContainer___2XwSi-camelCase{margin:0 auto 10px;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__sortedText___W1ucC-camelCase{font-size:36px;margin:5px 10px}.styles__sortedButton___3zwww-camelCase,.styles__sortedText___W1ucC-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;font-weight:700}.styles__sortedButton___3zwww-camelCase{font-size:32px;margin:5px 20px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:5px 15px;transition:.2s}.styles__sortedButton___3zwww-camelCase:hover{transform:scale(.95)}.styles__qHolder___3-xy8-camelCase{width:100%;display:flex;flex-direction:column}.styles__questionContainer___2whS--camelCase{width:90%;min-height:130px;padding:0;margin:20px 5% 15px;min-width:500px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___1kEuX-camelCase{background-color:#333;display:flex;flex-direction:row;margin:auto 0}.styles__questionImage___2Tvet-camelCase,.styles__questionImageContainer___1kEuX-camelCase{width:170px;height:130px;border-top-left-radius:7px;border-bottom-left-radius:7px}.styles__questionImage___2Tvet-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__imageNumber___1CPmB-camelCase{width:170px;height:130px;font-family:Titan One,sans-serif;font-size:50px;text-align:center;line-height:130px;color:#fff;text-shadow:2px 2px 8px grey}.styles__questionCenterContainer___3p8nA-camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 325px);min-height:120px}.styles__questionStatsContainer___17wzg-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;width:130px;height:130px;text-align:center;margin:auto 15px auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.styles__questionStats___nN_fs-camelCase{line-height:22px;width:70%;word-wrap:break-word;font-weight:700;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionStats___nN_fs-camelCase,.styles__questionText___3tVgW-camelCase{color:#3a3a3a;font-size:22px;font-family:Nunito,sans-serif}.styles__questionText___3tVgW-camelCase{min-height:90px;line-height:30px}.styles__answerText___2drcy-camelCase{font-size:18px;line-height:21px;margin-top:7.5px}.styles__answerText___2drcy-camelCase,.styles__questionStatText___1ODKe-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__questionStatText___1ODKe-camelCase{font-size:34px;font-weight:700;text-align:center}.styles__standingContainer___iTUHr-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:10px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__standingContainer___iTUHr-camelCase:hover{transform:scale(.97)}.styles__playerContainer___3GACr-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:5px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transform:scale(.8);transition:.2s}.styles__playerContainer___3GACr-camelCase:hover{transform:scale(.77)}.styles__accuracyText___2Mv-e-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 0 15px 10px;box-sizing:border-box;width:95px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__accuracySmallText___3sf2l-camelCase{font-size:14px;line-height:16px;font-weight:400}.styles__leftEarlyText___6lxGm-camelCase{color:#3a3a3a;font-size:18px;font-family:Nunito,sans-serif;text-align:center;padding:15px 10px;box-sizing:border-box;width:95px}.styles__blookImage___a3nFf-camelCase{height:57.5px;width:50px;margin:1.25px 10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___24X2R-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;text-align:left;padding:15px 5px 15px 10px;width:210px;height:40px;display:flex;align-items:center}.styles__barContainer___2OXyp-camelCase{width:300px;height:30px;border-radius:5px;overflow:hidden;margin:auto;background-color:#c43a35;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__barContainer___2OXyp-camelCase,.styles__correctBar___23YOm-camelCase{display:flex;flex-direction:row;align-items:center}.styles__correctBar___23YOm-camelCase{background-color:#4bc22e;height:100px}.styles__barText___3nEXk-camelCase{display:flex;justify-content:center;align-content:center;background-color:rgba(0,0,0,.2);border-radius:3px;color:#fff;font-family:Nunito,sans-serif;font-size:16px;margin:auto 10px;box-sizing:border-box;padding:0 5px;min-width:30px}.styles__scoreRow___3WvzY-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:50px;flex-grow:1}.styles__pointsText___3V7Hz-camelCase{font-weight:700;font-family:Nunito,sans-serif;text-align:right;margin-right:7.5px}.styles__pointsText___3V7Hz-camelCase,.styles__scoreIcon___21Kys-camelCase{font-size:26px;color:#3a3a3a;line-height:50px}.styles__candyImage___qUfch-camelCase,.styles__scoreIcon___21Kys-camelCase{margin-right:10px}.styles__candyImage___qUfch-camelCase{height:55%;width:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__cashText___1Eium-camelCase{font-size:26px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;margin-right:25px;text-align:right;justify-content:flex-end;flex-grow:1}.styles__cashText___1Eium-camelCase,.styles__standingQuestion___1rmlA-camelCase{display:flex;align-items:center}.styles__standingQuestion___1rmlA-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);flex-direction:row;width:80%;margin:10px auto 7px;z-index:1}.styles__standingQuestionText___sO5li-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;text-align:left;flex-grow:1;padding:15px 20px 15px 25px}.styles__standingAnswer___3shcB-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;width:70%;margin:-20px auto 15px;z-index:-1}.styles__plusContainer___30-rd-camelCase{width:90%;margin:50px auto 20px}.styles__plusContainer___30-rd-camelCase,.styles__plusModalContainer___2J717-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center}.styles__plusModalContainer___2J717-camelCase{width:420px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__plusTimes___1Le-d-camelCase{position:absolute;top:15px;right:17px;font-size:26px;outline:none;cursor:pointer;color:#3a3a3a;transition:.2s}.styles__plusTimes___1Le-d-camelCase:hover{color:#0bc2cf}.styles__plusText___22n2r-camelCase{color:#3a3a3a;font-size:40px;font-weight:700;padding:25px 30px 0}.styles__plusText___22n2r-camelCase,.styles__upgradeButton___3aJbL-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___3aJbL-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:30px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___3aJbL-camelCase:hover{transform:scale(1.05)}.styles__standingModalContainer___13I0X-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;min-height:400px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__standingModalContainer___13I0X-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__standingModalContainer___13I0X-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__standingModalContainer___13I0X-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__modalRow___2yf2x-camelCase{display:flex;flex-direction:row;width:85%;margin:10px 10% 10px 5%;height:80px}.styles__modalBlook___24zAf-camelCase{height:80px;width:70px}.styles__modalColumn___3x7mN-camelCase{margin:0 5px 0 15px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;text-align:left;flex-grow:1;color:#3a3a3a;font-size:"Nunito",sans-serif;font-size:26px;font-weight:700;word-wrap:break-word}.styles__modalDesc___3a0vA-camelCase{font-weight:400;font-size:16px}.styles__modalStats___3J3yb-camelCase{position:relative;height:80px;width:80px}.styles__modalQuestionStats___1Ykrv-camelCase{position:relative;height:70px;width:70px;margin-left:10px}.styles__modalStatsText___U5a8o-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__modalQuestionColumn___xBadH-camelCase{display:flex;flex-direction:column;width:90%;margin:0 5%}.styles__modalQuestionRow___3Fzxr-camelCase{display:flex;flex-direction:row;width:100%;font-family:Nunito,sans-serif;font-size:16px;font-weight:700}.styles__modalQuestionText___3PcKU-camelCase{font-weight:400;flex-grow:1;margin-left:5px;text-align:left}.styles__modalQuestionImage___287ui-camelCase{height:70px;width:80px;-o-object-fit:contain;object-fit:contain}.styles__mainDivider___1KMcI-camelCase{width:90%;margin:5px 5% 10px;background-color:rgba(0,0,0,.8)}.styles__divider___2c-D--camelCase,.styles__mainDivider___1KMcI-camelCase{height:1px;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__divider___2c-D--camelCase{width:100%;margin:7px 0;background-color:rgba(0,0,0,.2)}.styles__modalButton___jTPN2-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:normal;outline:none}',
      ''
    ]), t.locals = {
      fullContainer: 'styles__fullContainer___1jtRa-camelCase',
      setContainer: 'styles__setContainer___1rFD2-camelCase',
      setText: 'styles__setText___3_C-t-camelCase',
      row: 'styles__row___2pYbv-camelCase',
      miniTopContainer: 'styles__miniTopContainer___2YB-Y-camelCase',
      miniTopText: 'styles__miniTopText___3OH1U-camelCase',
      chartContainer: 'styles__chartContainer___37bit-camelCase',
      chartPercentage: 'styles__chartPercentage___-0eL5-camelCase',
      column: 'styles__column___2xCIy-camelCase',
      correctContainer: 'styles__correctContainer___DYrmG-camelCase',
      correctText: 'styles__correctText___1zgYe-camelCase',
      deleteButton: 'styles__deleteButton___3-OR8-camelCase',
      downloadButton: 'styles__downloadButton___1lRTW-camelCase',
      headerContainer: 'styles__headerContainer___25u6X-camelCase',
      headerText: 'styles__headerText___1iz-S-camelCase',
      sortedContainer: 'styles__sortedContainer___2XwSi-camelCase',
      sortedText: 'styles__sortedText___W1ucC-camelCase',
      sortedButton: 'styles__sortedButton___3zwww-camelCase',
      qHolder: 'styles__qHolder___3-xy8-camelCase',
      questionContainer: 'styles__questionContainer___2whS--camelCase',
      questionImageContainer: 'styles__questionImageContainer___1kEuX-camelCase',
      questionImage: 'styles__questionImage___2Tvet-camelCase',
      imageNumber: 'styles__imageNumber___1CPmB-camelCase',
      questionCenterContainer: 'styles__questionCenterContainer___3p8nA-camelCase',
      questionStatsContainer: 'styles__questionStatsContainer___17wzg-camelCase',
      questionStats: 'styles__questionStats___nN_fs-camelCase',
      questionText: 'styles__questionText___3tVgW-camelCase',
      answerText: 'styles__answerText___2drcy-camelCase',
      questionStatText: 'styles__questionStatText___1ODKe-camelCase',
      standingContainer: 'styles__standingContainer___iTUHr-camelCase',
      playerContainer: 'styles__playerContainer___3GACr-camelCase',
      accuracyText: 'styles__accuracyText___2Mv-e-camelCase',
      accuracySmallText: 'styles__accuracySmallText___3sf2l-camelCase',
      leftEarlyText: 'styles__leftEarlyText___6lxGm-camelCase',
      blookImage: 'styles__blookImage___a3nFf-camelCase',
      nameText: 'styles__nameText___24X2R-camelCase',
      barContainer: 'styles__barContainer___2OXyp-camelCase',
      correctBar: 'styles__correctBar___23YOm-camelCase',
      barText: 'styles__barText___3nEXk-camelCase',
      scoreRow: 'styles__scoreRow___3WvzY-camelCase',
      pointsText: 'styles__pointsText___3V7Hz-camelCase',
      scoreIcon: 'styles__scoreIcon___21Kys-camelCase',
      candyImage: 'styles__candyImage___qUfch-camelCase',
      cashText: 'styles__cashText___1Eium-camelCase',
      standingQuestion: 'styles__standingQuestion___1rmlA-camelCase',
      standingQuestionText: 'styles__standingQuestionText___sO5li-camelCase',
      standingAnswer: 'styles__standingAnswer___3shcB-camelCase',
      plusContainer: 'styles__plusContainer___30-rd-camelCase',
      plusModalContainer: 'styles__plusModalContainer___2J717-camelCase',
      plusTimes: 'styles__plusTimes___1Le-d-camelCase',
      plusText: 'styles__plusText___22n2r-camelCase',
      upgradeButton: 'styles__upgradeButton___3aJbL-camelCase',
      standingModalContainer: 'styles__standingModalContainer___13I0X-camelCase',
      modalRow: 'styles__modalRow___2yf2x-camelCase',
      modalBlook: 'styles__modalBlook___24zAf-camelCase',
      modalColumn: 'styles__modalColumn___3x7mN-camelCase',
      modalDesc: 'styles__modalDesc___3a0vA-camelCase',
      modalStats: 'styles__modalStats___3J3yb-camelCase',
      modalQuestionStats: 'styles__modalQuestionStats___1Ykrv-camelCase',
      modalStatsText: 'styles__modalStatsText___U5a8o-camelCase',
      modalQuestionColumn: 'styles__modalQuestionColumn___xBadH-camelCase',
      modalQuestionRow: 'styles__modalQuestionRow___3Fzxr-camelCase',
      modalQuestionText: 'styles__modalQuestionText___3PcKU-camelCase',
      modalQuestionImage: 'styles__modalQuestionImage___287ui-camelCase',
      mainDivider: 'styles__mainDivider___1KMcI-camelCase',
      divider: 'styles__divider___2c-D--camelCase',
      modalButton: 'styles__modalButton___jTPN2-camelCase'
    };
  },
  Mm8r: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__nothingText___2i5r7-camelCase{margin:155px 5% 20px}.styles__linkText___1pvmD-camelCase,.styles__nothingText___2i5r7-camelCase{font-family:Nunito,sans-serif;font-size:40px;font-weight:700;width:90%;text-align:center;color:#fff}.styles__linkText___1pvmD-camelCase{margin:20px 5% 50px}.styles__modesArray___30LSC-camelCase{width:calc(100% - 510px);margin:5vh 0 5vh 40px;justify-content:space-evenly;align-content:flex-start;display:flex;flex-flow:row wrap;opacity:0;-webkit-animation:styles__fadeIn___RhpfX-camelCase .3s linear 1.5s forwards;animation:styles__fadeIn___RhpfX-camelCase .3s linear 1.5s forwards}@-webkit-keyframes styles__fadeIn___RhpfX-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___RhpfX-camelCase{0%{opacity:0}to{opacity:1}}.styles__modeContainer___371Zz-camelCase{width:350px;height:250px;margin:20px 15px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:all .4s cubic-bezier(.39,.5,.15,1.36)}.styles__modeContainer___371Zz-camelCase:hover{transform:scale(1.03)}.styles__modeImage___1b5oO-camelCase{margin:auto;width:350px;height:250px;-o-object-fit:cover;object-fit:cover;border-radius:10px}.styles__modeText___1727--camelCase{top:95px;height:60px;line-height:60px}.styles__modeText___1727--camelCase,.styles__modeTextTwo___18FnS-camelCase{position:absolute;left:55px;color:#fff;text-align:center;font-size:40px;width:240px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;background-color:rgba(11,194,207,.9);border-radius:10px}.styles__modeTextTwo___18FnS-camelCase{top:75px;height:90px;padding-top:8px;line-height:40px}.styles__plusHolder___3_Iac-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.7);border-radius:10px;flex-direction:column;font-family:Nunito,sans-serif;font-size:34px;color:#fff;text-shadow:2px 2px 8px grey}.styles__plusHolder___3_Iac-camelCase,.styles__plusIcon___1y64q-camelCase{display:flex;justify-content:center;align-items:center}.styles__plusIcon___1y64q-camelCase{width:90px;height:90px;font-size:52px;margin-bottom:20px;border-radius:50%;background-color:#ff7b24;box-shadow:0 0 8px 3px rgba(0,0,0,.2);text-shadow:none}.styles__plusOnly___1jVzX-camelCase{background-color:#ff7b24}.styles__limitedTime___1gsmK-camelCase,.styles__plusOnly___1jVzX-camelCase{position:absolute;top:-20px;left:75px;color:#fff;text-align:center;font-size:24px;line-height:35px;width:200px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__limitedTime___1gsmK-camelCase{background-color:#ff7e0f}.styles__updatedTime___3f-gg-camelCase{position:absolute;top:-12.5px;left:75px;color:#fff;font-size:26px;line-height:35px;width:200px;text-shadow:2px 2px 8px grey;background-color:#ff7b24;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__noInfo___1pPAv-camelCase,.styles__updatedTime___3f-gg-camelCase{text-align:center;font-family:Nunito,sans-serif}.styles__noInfo___1pPAv-camelCase{font-size:44px;font-weight:700;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto}.styles__infoContainer___1IMeS-camelCase{width:400px;height:600px;position:fixed;top:calc((100vh - 600px)/2);right:40px;display:flex;flex-direction:column;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);opacity:0;-webkit-animation:styles__fadeInPop___1Lpyq-camelCase .3s linear 1s forwards;animation:styles__fadeInPop___1Lpyq-camelCase .3s linear 1s forwards}@-webkit-keyframes styles__fadeInPop___1Lpyq-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}@keyframes styles__fadeInPop___1Lpyq-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.styles__infoImageContainer___3VA1H-camelCase{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__infoImage___2Tvua-camelCase,.styles__infoImageContainer___3VA1H-camelCase{height:200px;width:400px;border-top-left-radius:10px;border-top-right-radius:10px}.styles__infoImage___2Tvua-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__infoTitleText___3cb0t-camelCase{height:60px;line-height:60px}.styles__infoTitleText___3cb0t-camelCase,.styles__infoTitleTextTwo___WTsJn-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;text-align:center;font-size:40px;width:240px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;background-color:rgba(11,194,207,.9);border-radius:10px}.styles__infoTitleTextTwo___WTsJn-camelCase{height:90px;padding-top:8px;line-height:40px}.styles__infoDesc___2Cd5--camelCase{font-size:28px;font-weight:700;margin:15px 20px 5px}.styles__infoDesc___2Cd5--camelCase,.styles__infoDetail___vEpDL-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;text-align:center}.styles__infoDetail___vEpDL-camelCase{font-size:18px;margin:10px 20px;display:flex;flex:1}.styles__infoRow___1vHP_-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px 20px;color:#3a3a3a}.styles__infoIcon___3ymn7-camelCase{font-size:18px;width:25px;text-align:center}.styles__infoIconText___1P2uk-camelCase{font-size:18px;font-family:Nunito,sans-serif;padding-left:15px}.styles__playButtonContainer___3TjgE-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:80%;margin:15px 10% 25px}.styles__playButton___1RYES-camelCase{width:100%;height:60px;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;font-size:34px;color:#fff;font-family:Nunito,sans-serif;font-weight:700;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .3s cubic-bezier(.39,.5,.15,1.36)}.styles__playButton___1RYES-camelCase:hover{transform:scale(1.02)}.styles__invisible___SwEUa-camelCase{opacity:0}.styles__invisible___SwEUa-camelCase,.styles__notInvisible___30uo_-camelCase{transition:all .5s linear}.styles__notInvisible___30uo_-camelCase{opacity:1}.styles__header___2AUlS-camelCase{color:#fff;text-align:center;font-size:80px;line-height:30vh;margin-top:5vh;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__methodContainer___102y4-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:85vw;position:absolute;left:7.5vw;height:50vh}.styles__backButton___2FwGb-camelCase{font-size:4.5vh;color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;position:absolute;top:1.5vh;left:1.5vw;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__backButton___2FwGb-camelCase:hover{transform:scale(1.05)}.styles__bigScreen___18pWD-camelCase{display:block}.styles__smallScreen___3Ch-p-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___18pWD-camelCase{display:none}.styles__smallScreen___3Ch-p-camelCase{display:block}}',
      ''
    ]), t.locals = {
      nothingText: 'styles__nothingText___2i5r7-camelCase',
      linkText: 'styles__linkText___1pvmD-camelCase',
      modesArray: 'styles__modesArray___30LSC-camelCase',
      fadeIn: 'styles__fadeIn___RhpfX-camelCase',
      modeContainer: 'styles__modeContainer___371Zz-camelCase',
      modeImage: 'styles__modeImage___1b5oO-camelCase',
      modeText: 'styles__modeText___1727--camelCase',
      modeTextTwo: 'styles__modeTextTwo___18FnS-camelCase',
      plusHolder: 'styles__plusHolder___3_Iac-camelCase',
      plusIcon: 'styles__plusIcon___1y64q-camelCase',
      plusOnly: 'styles__plusOnly___1jVzX-camelCase',
      limitedTime: 'styles__limitedTime___1gsmK-camelCase',
      updatedTime: 'styles__updatedTime___3f-gg-camelCase',
      noInfo: 'styles__noInfo___1pPAv-camelCase',
      infoContainer: 'styles__infoContainer___1IMeS-camelCase',
      fadeInPop: 'styles__fadeInPop___1Lpyq-camelCase',
      infoImageContainer: 'styles__infoImageContainer___3VA1H-camelCase',
      infoImage: 'styles__infoImage___2Tvua-camelCase',
      infoTitleText: 'styles__infoTitleText___3cb0t-camelCase',
      infoTitleTextTwo: 'styles__infoTitleTextTwo___WTsJn-camelCase',
      infoDesc: 'styles__infoDesc___2Cd5--camelCase',
      infoDetail: 'styles__infoDetail___vEpDL-camelCase',
      infoRow: 'styles__infoRow___1vHP_-camelCase',
      infoIcon: 'styles__infoIcon___3ymn7-camelCase',
      infoIconText: 'styles__infoIconText___1P2uk-camelCase',
      playButtonContainer: 'styles__playButtonContainer___3TjgE-camelCase',
      playButton: 'styles__playButton___1RYES-camelCase',
      invisible: 'styles__invisible___SwEUa-camelCase',
      notInvisible: 'styles__notInvisible___30uo_-camelCase',
      header: 'styles__header___2AUlS-camelCase',
      methodContainer: 'styles__methodContainer___102y4-camelCase',
      backButton: 'styles__backButton___2FwGb-camelCase',
      bigScreen: 'styles__bigScreen___18pWD-camelCase',
      smallScreen: 'styles__smallScreen___3Ch-p-camelCase'
    };
  },
  'OZt/': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__fullContainer___1nFv9-camelCase{width:85%;margin:0 7.5% 10px}.styles__fullContainer___1nFv9-camelCase,.styles__hwContainer___olh15-camelCase{display:flex;flex-direction:column;align-items:center}.styles__hwContainer___olh15-camelCase{min-height:calc(100vh - 55px);width:100%;position:relative}.styles__hwContainer___olh15-camelCase,.styles__hwText___2LvRt-camelCase{justify-content:center}.styles__hwText___2LvRt-camelCase{background-color:#ff6969;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;margin:30px auto 0;color:#fff;line-height:64px;font-size:64px;font-family:Titan One,sans-serif;text-align:center;padding:20px 30px}.styles__joinText___puvSE-camelCase{margin:30px auto;color:#3a3a3a;font-size:36px;padding:4px 15px;font-weight:700}.styles__joinText___puvSE-camelCase,.styles__linkContainer___hjW2a-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__linkContainer___hjW2a-camelCase{background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:0 auto;font-size:32px;padding:10px 20px;outline:none;cursor:pointer;transition:.2s}.styles__linkContainer___hjW2a-camelCase:hover{transform:scale(.97)}.styles__linkText___20Fvf-camelCase{text-decoration:underline;color:#fff;position:relative;outline:none;font-weight:700}.styles__copiedNotification___5ennx-camelCase{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background-color:rgba(0,0,0,.7);border-radius:5px;font-family:Nunito,sans-serif;color:#fff;font-size:18px;padding:5px 10px}.styles__endDateText___1yIie-camelCase{margin:30px auto;padding:4px 15px;font-family:Nunito,sans-serif;font-weight:700}.styles__downIcon___8QKaK-camelCase,.styles__endDateText___1yIie-camelCase{color:#3a3a3a;font-size:34px;text-align:center}.styles__downIcon___8QKaK-camelCase{position:absolute;bottom:10px;left:calc(50% - 25px);width:50px}.styles__refreshButton___FWcF_-camelCase{width:250px;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:30px auto 0;color:#fff;font-size:30px;padding:7px 0;font-family:Nunito,sans-serif;font-weight:700;text-align:center;outline:none;cursor:pointer;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__refreshButton___FWcF_-camelCase:hover{transform:scale(.95)}.styles__refreshIcon___2OE1Y-camelCase{font-size:30px;margin-right:15px}.styles__setText___bERmZ-camelCase{width:calc(100% - 60px);background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px auto 0;color:#3a3a3a;line-height:48px;font-size:48px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:20px 30px}.styles__row___3WmXF-camelCase{display:flex;flex-flow:row wrap;justify-content:space-around;width:100%;margin:5px 0}.styles__miniTopContainer___2qzSy-camelCase{min-width:240px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;margin:25px auto}.styles__miniTopText___1ZYai-camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:13px 25px}.styles__chartContainer___2GAQx-camelCase{min-width:300px;min-height:300px;width:25vw;height:25vw;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:0;display:flex;flex-direction:column;position:relative}.styles__chartPercentage___2HoY--camelCase{color:#3a3a3a;line-height:38px;font-size:38px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__column___3DE6u-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;margin:0 20px}.styles__correctContainer___3AKsU-camelCase{min-width:300px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;margin:10px auto}.styles__correctText___5QVI4-camelCase{color:#3a3a3a;font-size:40px;padding:15px 25px}.styles__correctText___5QVI4-camelCase,.styles__downloadButton___1nNuS-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:center}.styles__downloadButton___1nNuS-camelCase{min-width:200px;background-color:#02723b;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;align-items:center;margin:5px auto;color:#fff;font-size:20px;padding:5px 0;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__downloadButton___1nNuS-camelCase:hover{transform:scale(.96)}.styles__headerContainer___2Xrhl-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:center;width:100%;margin:30px auto 25px}.styles__headerText___1Xxu3-camelCase{color:#3a3a3a;font-size:40px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 25px}.styles__sortedContainer___1T-v4-camelCase{margin:0 auto 10px;display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center}.styles__sortedText___1CCwM-camelCase{font-size:36px;margin:5px 10px}.styles__sortedButton___3JKQK-camelCase,.styles__sortedText___1CCwM-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a;font-weight:700}.styles__sortedButton___3JKQK-camelCase{font-size:32px;margin:5px 20px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;padding:5px 15px;transition:.2s}.styles__sortedButton___3JKQK-camelCase:hover{transform:scale(.95)}.styles__qHolder___392oF-camelCase{width:100%;display:flex;flex-direction:column}.styles__questionContainer___2te6o-camelCase{width:90%;min-height:130px;padding:0;margin:20px 5% 15px;min-width:500px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;z-index:1}.styles__questionImageContainer___2aGI7-camelCase{background-color:#333;display:flex;flex-direction:row;margin:auto 0}.styles__questionImage___jpCuu-camelCase,.styles__questionImageContainer___2aGI7-camelCase{width:170px;height:130px;border-top-left-radius:7px;border-bottom-left-radius:7px}.styles__questionImage___jpCuu-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__imageNumber___1pX_g-camelCase{width:170px;height:130px;font-family:Titan One,sans-serif;font-size:50px;text-align:center;line-height:130px;color:#fff;text-shadow:2px 2px 8px grey}.styles__questionCenterContainer___2w-x5-camelCase{display:flex;flex-direction:column;margin:5px 10px 5px 15px;width:calc(100% - 325px);min-height:120px}.styles__questionStatsContainer___3xNwy-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;width:130px;height:130px;text-align:center;margin:auto 15px auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.styles__questionStats___3-LSd-camelCase{line-height:22px;width:70%;word-wrap:break-word;font-weight:700;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__questionStats___3-LSd-camelCase,.styles__questionText___bWgYk-camelCase{color:#3a3a3a;font-size:22px;font-family:Nunito,sans-serif}.styles__questionText___bWgYk-camelCase{min-height:90px;line-height:30px}.styles__answerText___E_Te_-camelCase{font-size:18px;line-height:22.5px;margin-top:7.5px}.styles__answerText___E_Te_-camelCase,.styles__questionStatText___1s609-camelCase{font-family:Nunito,sans-serif;color:#3a3a3a}.styles__questionStatText___1s609-camelCase{font-size:34px;font-weight:700;text-align:center}.styles__keyContainer___1Anl--camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);justify-content:space-evenly;height:70px;width:60%;min-width:320px;margin:0 auto 12.5px}.styles__keyContainer___1Anl--camelCase,.styles__keyGroup___3h9lh-camelCase{display:flex;flex-direction:row;align-items:center}.styles__keyGroup___3h9lh-camelCase{font-family:Nunito,sans-serif;font-size:32px;color:#3a3a3a;font-weight:700}.styles__keyIcon___3jbk9-camelCase{font-size:34px;margin-right:10px}.styles__standingHolder___SCqoN-camelCase{width:100%;display:flex;flex-direction:row}.styles__deleteStanding___8Typ6-camelCase,.styles__standingHolder___SCqoN-camelCase{align-items:center;justify-content:center}.styles__deleteStanding___8Typ6-camelCase{height:70px;width:60px;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:auto 0 auto 10px;font-size:15px;display:none;flex-direction:column;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__deleteStanding___8Typ6-camelCase:hover{transform:scale(.9);color:#ce1313}.styles__standingContainer___YG35m-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;height:70px;width:90%;margin:10px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__standingContainer___YG35m-camelCase:hover{transform:scale(.97)}.styles__standingHolder___SCqoN-camelCase:hover>.styles__deleteStanding___8Typ6-camelCase{display:flex}.styles__accuracyText___Zy8uD-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;font-weight:700;text-align:center;padding:15px 0 15px 10px;box-sizing:border-box;width:95px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__accuracySmallText___2X2d6-camelCase{font-size:14px;line-height:16px;font-weight:400}.styles__leftEarlyText___3NaHm-camelCase{color:#3a3a3a;font-size:18px;font-family:Nunito,sans-serif;text-align:center;padding:15px 10px;box-sizing:border-box;width:95px}.styles__blookImage___16OWz-camelCase{height:57.5px;width:50px;margin:1.25px 10px}.styles__blookImage___16OWz-camelCase,.styles__standingIcon___2XEd5-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__standingIcon___2XEd5-camelCase{width:44px;margin:auto 7px;text-align:center;font-size:38px}.styles__nameText___3Ky7T-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;text-align:left;padding:15px 5px 15px 10px;width:210px;height:40px;display:flex;align-items:center}.styles__barContainer___2H1qm-camelCase{width:300px;height:30px;border-radius:5px;overflow:hidden;margin:auto;background-color:#c43a35;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__barContainer___2H1qm-camelCase,.styles__correctBar___7SlDJ-camelCase{display:flex;flex-direction:row;align-items:center}.styles__correctBar___7SlDJ-camelCase{background-color:#4bc22e;height:100px}.styles__barText___3-1NQ-camelCase{display:flex;justify-content:center;align-content:center;background-color:rgba(0,0,0,.2);border-radius:3px;color:#fff;font-family:Nunito,sans-serif;font-size:16px;margin:auto 10px;box-sizing:border-box;padding:0 5px;min-width:30px}.styles__scoreRow___2EVf1-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;height:50px;flex-grow:1}.styles__pointsText___3nhNK-camelCase{font-weight:700;font-family:Nunito,sans-serif;text-align:right;margin-right:7.5px}.styles__pointsText___3nhNK-camelCase,.styles__scoreIcon___16RVu-camelCase{font-size:26px;color:#3a3a3a;line-height:50px}.styles__scoreIcon___16RVu-camelCase{margin-right:10px}.styles__statText___BxwHF-camelCase{font-size:26px;font-weight:700;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;margin-right:25px;text-align:right;display:flex;align-items:center;justify-content:flex-end;flex-grow:1}.styles__statIcon___X1-lR-camelCase{font-size:30px;margin-left:6px}.styles__standingQuestion___L8JYx-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;width:80%;margin:10px auto 7px;z-index:1}.styles__standingQuestionText___3Z3Bp-camelCase{color:#3a3a3a;font-size:24px;font-family:Nunito,sans-serif;text-align:left;flex-grow:1;padding:15px 20px 15px 25px}.styles__standingAnswer___2FPjb-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;width:70%;margin:-20px auto 15px;z-index:-1}.styles__plusContainer___1ABqA-camelCase{width:90%;margin:50px auto 20px}.styles__plusContainer___1ABqA-camelCase,.styles__plusModalContainer___1l471-camelCase{background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;align-items:center}.styles__plusModalContainer___1l471-camelCase{width:420px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__plusTimes___3D518-camelCase{position:absolute;top:15px;right:17px;font-size:26px;outline:none;cursor:pointer;color:#3a3a3a;transition:.2s}.styles__plusTimes___3D518-camelCase:hover{color:#0bc2cf}.styles__plusText___3nXWJ-camelCase{color:#3a3a3a;font-size:38px;font-weight:700;padding:25px 30px 0}.styles__plusText___3nXWJ-camelCase,.styles__upgradeButton___y0pNI-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___y0pNI-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:30px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___y0pNI-camelCase:hover{transform:scale(1.05)}.styles__standingModalContainer___1jGQw-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;min-height:400px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__standingModalContainer___1jGQw-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__standingModalContainer___1jGQw-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__standingModalContainer___1jGQw-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__modalRow___EVTZn-camelCase{display:flex;flex-direction:row;width:85%;margin:10px 10% 10px 5%;height:80px}.styles__modalBlook___2fXR_-camelCase{height:80px;width:70px}.styles__modalIcon___1pWSO-camelCase{height:100%;width:70px;font-size:50px;displaY:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__modalColumn___amGH6-camelCase{margin:0 5px 0 15px;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;text-align:left;flex-grow:1;color:#3a3a3a;font-size:"Nunito",sans-serif;font-size:26px;font-weight:700;word-wrap:break-word}.styles__modalDesc___7ERK--camelCase{font-weight:400;font-size:16px}.styles__modalStats___Q6ysY-camelCase{position:relative;height:80px;width:80px}.styles__modalQuestionStats___39-HL-camelCase{position:relative;height:70px;width:70px;margin-left:10px}.styles__modalStatsText___2aBhD-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__modalQuestionColumn___3XquR-camelCase{display:flex;flex-direction:column;width:90%;margin:0 5%}.styles__modalQuestionRow___3A5Lv-camelCase{display:flex;flex-direction:row;width:100%;font-family:Nunito,sans-serif;font-size:16px;font-weight:700}.styles__modalQuestionText___1R6Ix-camelCase{font-weight:400;flex-grow:1;margin-left:5px;text-align:left}.styles__modalQuestionImage___2o2IJ-camelCase{height:70px;width:80px;-o-object-fit:contain;object-fit:contain}.styles__mainDivider___1IWtl-camelCase{width:90%;margin:5px 5% 10px;background-color:rgba(0,0,0,.8)}.styles__divider___3lL_a-camelCase,.styles__mainDivider___1IWtl-camelCase{height:1px;border-radius:3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__divider___3lL_a-camelCase{width:100%;margin:7px 0;background-color:rgba(0,0,0,.2)}.styles__modalButton___2ak1k-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:normal;outline:none}',
      ''
    ]), t.locals = {
      fullContainer: 'styles__fullContainer___1nFv9-camelCase',
      hwContainer: 'styles__hwContainer___olh15-camelCase',
      hwText: 'styles__hwText___2LvRt-camelCase',
      joinText: 'styles__joinText___puvSE-camelCase',
      linkContainer: 'styles__linkContainer___hjW2a-camelCase',
      linkText: 'styles__linkText___20Fvf-camelCase',
      copiedNotification: 'styles__copiedNotification___5ennx-camelCase',
      endDateText: 'styles__endDateText___1yIie-camelCase',
      downIcon: 'styles__downIcon___8QKaK-camelCase',
      refreshButton: 'styles__refreshButton___FWcF_-camelCase',
      refreshIcon: 'styles__refreshIcon___2OE1Y-camelCase',
      setText: 'styles__setText___bERmZ-camelCase',
      row: 'styles__row___3WmXF-camelCase',
      miniTopContainer: 'styles__miniTopContainer___2qzSy-camelCase',
      miniTopText: 'styles__miniTopText___1ZYai-camelCase',
      chartContainer: 'styles__chartContainer___2GAQx-camelCase',
      chartPercentage: 'styles__chartPercentage___2HoY--camelCase',
      column: 'styles__column___3DE6u-camelCase',
      correctContainer: 'styles__correctContainer___3AKsU-camelCase',
      correctText: 'styles__correctText___5QVI4-camelCase',
      downloadButton: 'styles__downloadButton___1nNuS-camelCase',
      headerContainer: 'styles__headerContainer___2Xrhl-camelCase',
      headerText: 'styles__headerText___1Xxu3-camelCase',
      sortedContainer: 'styles__sortedContainer___1T-v4-camelCase',
      sortedText: 'styles__sortedText___1CCwM-camelCase',
      sortedButton: 'styles__sortedButton___3JKQK-camelCase',
      qHolder: 'styles__qHolder___392oF-camelCase',
      questionContainer: 'styles__questionContainer___2te6o-camelCase',
      questionImageContainer: 'styles__questionImageContainer___2aGI7-camelCase',
      questionImage: 'styles__questionImage___jpCuu-camelCase',
      imageNumber: 'styles__imageNumber___1pX_g-camelCase',
      questionCenterContainer: 'styles__questionCenterContainer___2w-x5-camelCase',
      questionStatsContainer: 'styles__questionStatsContainer___3xNwy-camelCase',
      questionStats: 'styles__questionStats___3-LSd-camelCase',
      questionText: 'styles__questionText___bWgYk-camelCase',
      answerText: 'styles__answerText___E_Te_-camelCase',
      questionStatText: 'styles__questionStatText___1s609-camelCase',
      keyContainer: 'styles__keyContainer___1Anl--camelCase',
      keyGroup: 'styles__keyGroup___3h9lh-camelCase',
      keyIcon: 'styles__keyIcon___3jbk9-camelCase',
      standingHolder: 'styles__standingHolder___SCqoN-camelCase',
      deleteStanding: 'styles__deleteStanding___8Typ6-camelCase',
      standingContainer: 'styles__standingContainer___YG35m-camelCase',
      accuracyText: 'styles__accuracyText___Zy8uD-camelCase',
      accuracySmallText: 'styles__accuracySmallText___2X2d6-camelCase',
      leftEarlyText: 'styles__leftEarlyText___3NaHm-camelCase',
      blookImage: 'styles__blookImage___16OWz-camelCase',
      standingIcon: 'styles__standingIcon___2XEd5-camelCase',
      nameText: 'styles__nameText___3Ky7T-camelCase',
      barContainer: 'styles__barContainer___2H1qm-camelCase',
      correctBar: 'styles__correctBar___7SlDJ-camelCase',
      barText: 'styles__barText___3-1NQ-camelCase',
      scoreRow: 'styles__scoreRow___2EVf1-camelCase',
      pointsText: 'styles__pointsText___3nhNK-camelCase',
      scoreIcon: 'styles__scoreIcon___16RVu-camelCase',
      statText: 'styles__statText___BxwHF-camelCase',
      statIcon: 'styles__statIcon___X1-lR-camelCase',
      standingQuestion: 'styles__standingQuestion___L8JYx-camelCase',
      standingQuestionText: 'styles__standingQuestionText___3Z3Bp-camelCase',
      standingAnswer: 'styles__standingAnswer___2FPjb-camelCase',
      plusContainer: 'styles__plusContainer___1ABqA-camelCase',
      plusModalContainer: 'styles__plusModalContainer___1l471-camelCase',
      plusTimes: 'styles__plusTimes___3D518-camelCase',
      plusText: 'styles__plusText___3nXWJ-camelCase',
      upgradeButton: 'styles__upgradeButton___y0pNI-camelCase',
      standingModalContainer: 'styles__standingModalContainer___1jGQw-camelCase',
      modalRow: 'styles__modalRow___EVTZn-camelCase',
      modalBlook: 'styles__modalBlook___2fXR_-camelCase',
      modalIcon: 'styles__modalIcon___1pWSO-camelCase',
      modalColumn: 'styles__modalColumn___amGH6-camelCase',
      modalDesc: 'styles__modalDesc___7ERK--camelCase',
      modalStats: 'styles__modalStats___Q6ysY-camelCase',
      modalQuestionStats: 'styles__modalQuestionStats___39-HL-camelCase',
      modalStatsText: 'styles__modalStatsText___2aBhD-camelCase',
      modalQuestionColumn: 'styles__modalQuestionColumn___3XquR-camelCase',
      modalQuestionRow: 'styles__modalQuestionRow___3A5Lv-camelCase',
      modalQuestionText: 'styles__modalQuestionText___1R6Ix-camelCase',
      modalQuestionImage: 'styles__modalQuestionImage___2o2IJ-camelCase',
      mainDivider: 'styles__mainDivider___1IWtl-camelCase',
      divider: 'styles__divider___3lL_a-camelCase',
      modalButton: 'styles__modalButton___2ak1k-camelCase'
    };
  },
  Ofat: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('vDqi'), m = a.n(c), u = a('mLw1'), _ = a('wIs1'), d = a('4HzQ'), p = a('TSYQ'), f = a.n(p), h = a('wd/R'), y = a.n(h), g = a('1b17'), x = a('6bnt'), b = a('uMVL'), C = a('5gLy'), v = a('vimH'), w = a('GIcp'), T = a.n(w), E = a('RCjI'), k = a.n(E), N = a('anyA'), S = a('DoX5'), j = a('TN+F'), I = a('iQ+n'), O = a('I0uU'), B = a('vx/C'), z = a.n(B), D = a('4uRJ'), R = a.n(D), P = a('fUVF'), H = a.n(P), q = a('2k7N'), A = a.n(q), M = a('SdQT');
    function Q(e) {
      return (Q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function W(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return G(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return G(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function G(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function J(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? J(Object(a), !0).forEach(function (t) {
          F(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : J(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function F(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function U(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function Y(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (s, n) {
          var o = e.apply(t, a);
          function r(e) {
            U(o, s, n, r, i, 'next', e);
          }
          function i(e) {
            U(o, s, n, r, i, 'throw', e);
          }
          r(void 0);
        });
      };
    }
    function X(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function K(e, t) {
      return (K = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function V(e) {
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
        var a, s = ee(e);
        if (t) {
          var n = ee(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return Z(this, a);
      };
    }
    function Z(e, t) {
      return !t || 'object' !== Q(t) && 'function' != typeof t ? $(e) : t;
    }
    function $(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function ee(e) {
      return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var te = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && K(e, t);
      }(i, e);
      var t, a, s, o, r = V(i);
      function i(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, i), (t = r.call(this, e)).state = {
          host: {
            hostName: '',
            id: '',
            clients: {}
          },
          transition: !1,
          full: Object(j.l)(),
          muted: !1,
          justCopied: !1
        }, t.dbRef = {}, t.hostId = '', t.ok = !1, t.here = !0, t.startGame = t.startGame.bind($(t)), t.checkResize = t.checkResize.bind($(t)), t.changeMuted = t.changeMuted.bind($(t)), t.copyToClipboard = t.copyToClipboard.bind($(t)), t.audio = new Audio(z.a), t;
      }
      return t = i, (a = [
        {
          key: 'componentDidMount',
          value: (o = Y(regeneratorRuntime.mark(function e() {
            var t, a = this;
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
                  if (this.props.id && this.props.host && this.props.host.settings && !this.props.host.teams) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt('return');
                case 7:
                  window.addEventListener('resize', this.checkResize), window.addEventListener('beforeunload', function () {
                    a.hostId && (a.props.firebase.removeHost(a.hostId), a.props.deleteHost());
                  }), this.audio.volume = 0.6, 'Toy' === this.props.host.settings.type ? (this.audio = new Audio(R.a), this.audio.volume = 0.35) : 'Candy' === this.props.host.settings.type && (this.audio = new Audio(H.a), this.audio.volume = 0.35), this.audio.play(), this.audio.addEventListener('ended', function () {
                    a.audio.currentTime = 0, a.audio.play();
                  }, !1), this.here = !0, m.a.get('/api/games', { params: { gameId: this.props.id } }).then(function (e) {
                    a.here && (e.data && e.data.title ? (a.props.addHost(e.data.title), a.setState({ host: L(L({}, a.state.host), {}, { hostName: e.data.title }) }, Y(regeneratorRuntime.mark(function e() {
                      var s;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch (e.prev = e.next) {
                          case 0:
                            if (a.here) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt('return');
                          case 2:
                            if (s = {
                                t: a.props.host.settings.type,
                                m: a.props.host.settings.mode,
                                d: y.a.utc().toISOString()
                              }, 'Factory' === a.props.host.settings.type ? (s.g = a.props.host.settings.glitchesOn, s.a = a.props.host.settings.amount) : 'Defense' === a.props.host.settings.type ? (s.mp = a.props.host.settings.map, s.a = a.props.host.settings.amount) : [
                                'Cafe',
                                'Racing'
                              ].includes(a.props.host.settings.type) ? s.a = a.props.host.settings.amount : 'Royale' === a.props.host.settings.type && (s.e = a.props.host.settings.energy), a.props.host.settings.lateJoin && (s.la = a.props.host.settings.lateJoin), a.props.host.settings.randomNames && (s.r = a.props.host.settings.randomNames), !a.props.host.id) {
                              e.next = 14;
                              break;
                            }
                            return a.setState({ host: L(L({}, a.state.host), {}, { id: a.props.host.id }) }), e.next = 10, a.props.firebase.getDatabaseRef(a.props.host.id, 'c');
                          case 10:
                            a.dbRef = e.sent, a.dbRef.on('value', function (e) {
                              var t = e.val() || {};
                              Object.keys(t).length > Object.keys(a.state.host.clients).length && !a.state.muted && new Audio(A.a).play(), a.setState(L(L({}, a.state.host), {}, { host: L(L({}, a.state.host), {}, { clients: t }) }));
                            }), e.next = 15;
                            break;
                          case 14:
                            m.a.put('/api/users/plan', {
                              name: t.name,
                              stripeId: t.stripe
                            }).then(function (e) {
                              a.here && (m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, m.a.post('/api/firebase/live', {
                                plus: 'Starter' !== e.data.plan,
                                qSetId: a.props.id,
                                settings: s,
                                hoster: a.props.host.hoster
                              }).then(function () {
                                var t = Y(regeneratorRuntime.mark(function t(n) {
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch (t.prev = t.next) {
                                      case 0:
                                        if (a.hostId = n.data.id, a.here) {
                                          t.next = 5;
                                          break;
                                        }
                                        return a.props.firebase.removeHost(a.hostId), a.props.deleteHost(), t.abrupt('return');
                                      case 5:
                                        return localStorage.setItem('token', n.data.token), t.next = 8, new Promise(function (e) {
                                          return a.props.firebase.setAuth(a.hostId, n.data.fbToken, e);
                                        });
                                      case 8:
                                        a.props.firebase.setHost(a.hostId, 'Starter' !== e.data.plan, a.props.id, s, a.props.host.hoster, function () {
                                          var e = Y(regeneratorRuntime.mark(function e(t) {
                                            return regeneratorRuntime.wrap(function (e) {
                                              for (;;)
                                                switch (e.prev = e.next) {
                                                case 0:
                                                  if (t) {
                                                    e.next = 2;
                                                    break;
                                                  }
                                                  return e.abrupt('return', a.props.history.push('/login'));
                                                case 2:
                                                  return a.setState({ host: L(L({}, a.state.host), {}, { id: a.hostId }) }, function () {
                                                    a.props.updateHost(a.state.host, a.props.id);
                                                  }), e.next = 5, a.props.firebase.getDatabaseRef(a.hostId, 'c');
                                                case 5:
                                                  a.dbRef = e.sent, a.dbRef.on('value', function (e) {
                                                    var t = e.val() || {};
                                                    Object.keys(t).length > Object.keys(a.state.host.clients).length && !a.state.muted && new Audio(A.a).play(), a.setState(L(L({}, a.state.host), {}, { host: L(L({}, a.state.host), {}, { clients: t }) }));
                                                  });
                                                case 7:
                                                case 'end':
                                                  return e.stop();
                                                }
                                            }, e);
                                          }));
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        }());
                                      case 9:
                                      case 'end':
                                        return t.stop();
                                      }
                                  }, t);
                                }));
                                return function (e) {
                                  return t.apply(this, arguments);
                                };
                              }()).catch(function (e) {
                                a.props.history.push('/login'), console.error(e);
                              }));
                            }).catch(function (e) {
                              a.props.history.push('/login'), console.error(e);
                            });
                          case 15:
                          case 'end':
                            return e.stop();
                          }
                      }, e);
                    })))) : a.props.history.push('/login'));
                  }).catch(function (e) {
                    a.props.history.push('/login'), console.error(e);
                  });
                case 15:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          })), function () {
            return o.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var e = this;
            window.removeEventListener('resize', this.checkResize), this.here = !1, clearTimeout(this.timeout), clearTimeout(this.copyTimeout), Object.keys(this.dbRef).length && this.dbRef.off('value'), window.removeEventListener('beforeunload', function () {
              e.hostId && (e.props.firebase.removeHost(e.hostId), e.props.deleteHost());
            }), window.addEventListener('beforeunload', function () {
              e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost());
            }), !this.ok && this.state.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', function () {
              e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost());
            })), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
              e.audio.currentTime = 0, e.audio.play();
            }, !1);
          }
        },
        {
          key: 'checkResize',
          value: function () {
            this.setState({ full: Object(j.l)() });
          }
        },
        {
          key: 'startGame',
          value: function (e) {
            var t = this;
            e.preventDefault(), window.addEventListener('beforeunload', j.u);
            var a = this.props.host.settings, s = this.state.host.id;
            this.setState({ transition: !0 }, function () {
              t.timeout = setTimeout(function () {
                if (t.ok = !0, 'Racing' === a.type)
                  t.props.history.push('/host/racing');
                else if ('Classic' === a.type)
                  m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'crdy'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/classic/get-ready');
                  });
                else if ('Factory' === a.type)
                  t.props.history.push('/host/factory');
                else if ('Cafe' === a.type)
                  t.props.history.push('/host/cafe');
                else if ('Defense' === a.type)
                  t.props.history.push('/host/defense');
                else if ('Shamrock' === a.type)
                  a.instruct ? (m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'inst'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/shamrock/instructions');
                  })) : t.props.history.push('/host/shamrock');
                else if ('Gold' === a.type)
                  a.instruct ? (m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'inst'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/gold/instructions');
                  })) : t.props.history.push('/host/gold');
                else if ('Hack' === a.type)
                  a.instruct ? (m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'inst'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/hack/instructions');
                  })) : t.props.history.push('/host/hack');
                else if ('Toy' === a.type)
                  a.instruct ? (m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'inst'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/toy/instructions');
                  })) : t.props.history.push('/host/toy');
                else if (t.props.setPlayers(Object.entries(t.state.host.clients).map(function (e) {
                    var t = W(e, 2);
                    return {
                      name: t[0],
                      blook: t[1].b,
                      energy: a.energy
                    };
                  })), 'Teams' === a.mode)
                  m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'team'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/teams');
                  });
                else if (a.instruct)
                  m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                    id: s,
                    stage: 'inst'
                  }, function () {
                    t.ok = !0, t.props.history.push('/host/battle-royale/instructions');
                  });
                else {
                  var e = Object(b.b)(t.props.host.players, 'Teams' === t.props.host.settings.mode, t.props.host.usedQuestions, t.props.host.questionsPlayed, t.props.host.questions, t.props.host.dead);
                  t.props.prepareRoyale(1, e.usedQuestions, e.questionsPlayed, 'q-'.concat(e.question.stdNumber, '-').concat(e.answerString), e.question, e.matches), t.props.firebase.setVal({
                    id: t.props.host.id,
                    path: 'c',
                    val: e.dbPlayers
                  }, function () {
                    m.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                      id: t.props.host.id,
                      stage: 'prv'
                    }, function () {
                      t.ok = !0, t.props.history.push('/host/battle-royale/match/preview');
                    });
                  });
                }
              }, 500);
            });
          }
        },
        {
          key: 'removeClient',
          value: function (e) {
            this.props.firebase.removeVal(this.state.host.id, 'c/'.concat(e));
          }
        },
        {
          key: 'changeMuted',
          value: function () {
            var e = this;
            this.setState({ muted: !this.state.muted }, function () {
              e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted);
            });
          }
        },
        {
          key: 'copyToClipboard',
          value: function () {
            var e = this, t = document.createElement('textarea');
            t.value = 'https://www.blooket.com/play?id='.concat(this.state.host.id), t.setAttribute('readonly', ''), t.style.position = 'absolute', t.style.left = '-9999px', document.body.appendChild(t);
            var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
            t.select(), document.execCommand('copy'), document.body.removeChild(t), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a)), clearTimeout(this.copyTimeout), this.setState({ justCopied: !0 }, function () {
              e.copyTimeout = setTimeout(function () {
                e.setState({ justCopied: !1 });
              }, 1500);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            if (!this.props.id || !this.props.host || !this.props.host.settings || this.props.host.teams)
              return n.a.createElement(u.a, { to: '/dashboard' });
            var t = 'Candy' === this.props.host.settings.type;
            return n.a.createElement('div', {
              className: T.a.hostBody,
              style: {
                backgroundColor: t ? '#292929' : '#0bc2cf',
                backgroundImage: 'Toy' === this.props.host.settings.type ? 'linear-gradient(#31aae0, #bdf)' : null
              }
            }, n.a.createElement(I.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), n.a.createElement('div', { className: this.state.transition ? k.a.headerBoxTransition : k.a.headerBox }, n.a.createElement('div', { className: this.state.transition ? k.a.invisible : null }, n.a.createElement('div', { className: k.a.mainTextBox }, n.a.createElement(d.Textfit, {
              className: k.a.goToText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('10vw')
            }, 'Go to'), n.a.createElement('div', { className: k.a.urlText }, 'blooket.com/play'), n.a.createElement(d.Textfit, {
              className: k.a.enterText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('10vw')
            }, 'and enter Game ID:')), n.a.createElement('i', {
              className: f()(k.a.iconButton, this.state.full ? 'fas fa-compress' : 'fas fa-expand'),
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ full: Object(j.B)() });
              }
            }), n.a.createElement('i', {
              className: f()(k.a.iconButton, this.state.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'),
              role: 'button',
              tabIndex: 0,
              style: { left: '8%' },
              onClick: this.changeMuted
            }), this.state.host.id ? n.a.createElement(d.Textfit, {
              className: k.a.idNumberText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('25vw')
            }, this.state.host.id) : n.a.createElement('div', { className: k.a.idNumberText }, n.a.createElement(O.a, null)), n.a.createElement('div', {
              className: k.a.copyButton,
              role: 'button',
              tabIndex: 0,
              onClick: this.copyToClipboard
            }, 'Copy Join Link'), this.state.justCopied ? n.a.createElement('div', { className: k.a.copiedNotification }, 'Copied!') : null)), n.a.createElement('div', { className: this.state.transition ? k.a.invisible : null }, n.a.createElement('div', { className: k.a.lowerContainer }, n.a.createElement('div', {
              className: k.a.playerNumberBox,
              style: {
                backgroundColor: t ? '#1a1a1a' : null,
                boxShadow: t ? '#e57e25 0px 0px 8px 3px' : null
              }
            }, n.a.createElement(d.Textfit, {
              className: k.a.playerNumberText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('20vw'),
              style: { color: t ? '#fff' : null }
            }, Object.keys(this.state.host.clients).length), n.a.createElement(d.Textfit, {
              className: k.a.playerText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('10vw'),
              style: { color: t ? '#fff' : null }
            }, 1 === Object.keys(this.state.host.clients).length ? 'Player' : 'Players')), n.a.createElement(d.Textfit, {
              className: k.a.titleText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('20vw')
            }, 'Blooket'), 'Royale' === this.props.host.settings.type && Object.keys(this.state.host.clients).length >= ('Teams' === this.props.host.settings.mode ? 4 : 2) || 'Snow' === this.props.host.settings.type && Object.keys(this.state.host.clients).length >= 2 || 'Royale' !== this.props.host.settings.type && 'Snow' !== this.props.host.settings.type && !this.props.host.settings.team && Object.keys(this.state.host.clients).length >= 1 || this.props.host.settings.team && Object.keys(this.state.host.clients).length >= 4 ? n.a.createElement('div', {
              className: k.a.startButton,
              onClick: function (t) {
                return e.startGame(t);
              },
              role: 'button',
              type: 'submit',
              tabIndex: '0',
              style: {
                backgroundColor: t ? '#1a1a1a' : null,
                boxShadow: t ? '#e57e25 0px 0px 8px 3px' : null
              }
            }, n.a.createElement(d.Textfit, {
              className: k.a.startButtonText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(j.C)('10vw'),
              style: { color: t ? '#fff' : null }
            }, 'Start')) : null, n.a.createElement('div', { className: f()(k.a.clientArrayContainer, k.a.arrayScrollbar) }, Object.entries(this.state.host.clients).map(function (a) {
              var s = W(a, 2), o = s[0], r = s[1];
              return r ? n.a.createElement('div', {
                key: o,
                className: k.a.clientBox,
                onClick: function () {
                  return e.removeClient(o);
                },
                role: 'button',
                tabIndex: '0',
                style: {
                  backgroundColor: t ? '#1a1a1a' : null,
                  boxShadow: t ? '#e57e25 0px 0px 8px 3px' : null
                }
              }, n.a.createElement(S.a, {
                name: r.b,
                className: k.a.blookBox
              }), n.a.createElement(d.Textfit, {
                className: k.a.clientNameText,
                mode: 'single',
                forceSingleModeWidth: !1,
                min: 1,
                max: Object(j.C)('10vw'),
                style: { color: t ? '#fff' : null }
              }, o)) : null;
            }))), 'Toy' === this.props.host.settings.type ? n.a.createElement(v.a, {
              zIndex: -1,
              count: 130
            }) : null));
          }
        }
      ]) && X(t.prototype, a), s && X(t, s), i;
    }(n.a.Component);
    te.propTypes = {
      host: l.a.shape({
        hostName: l.a.string,
        id: l.a.number,
        settings: l.a.object,
        hoster: l.a.string,
        questions: l.a.array,
        teams: l.a.array,
        players: l.a.array,
        usedQuestions: l.a.array,
        questionsPlayed: l.a.array,
        dead: l.a.object
      }),
      id: l.a.string,
      updateHost: l.a.func.isRequired,
      setPlayers: l.a.func.isRequired,
      addHost: l.a.func.isRequired,
      deleteHost: l.a.func.isRequired,
      prepareRoyale: l.a.func.isRequired,
      setMuted: l.a.func.isRequired,
      firebase: l.a.object,
      history: l.a.object,
      user: l.a.object
    };
    t.a = Object(N.c)(Object(_.a)(Object(r.b)(function (e) {
      return {
        host: e.hosts.host,
        id: e.hosts.id
      };
    }, function (e) {
      return Object(o.b)({
        updateHost: g.c,
        setPlayers: g.b,
        addHost: C.a,
        deleteHost: C.c,
        prepareRoyale: x.a,
        setMuted: g.a
      }, e);
    })(Object(M.d)(te))));
  },
  PJwE: function (e, t, a) {
    var s = a('M+e5');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  RCjI: function (e, t, a) {
    var s = a('pHvG');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  TRTi: function (e, t, a) {
    'use strict';
    a.d(t, 'c', function () {
      return s;
    }), a.d(t, 'b', function () {
      return n;
    }), a.d(t, 'a', function () {
      return o;
    });
    var s = 'UPDATE_HOST', n = 'SET_PLAYERS', o = 'SET_MUTED';
  },
  V9E3: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__center___3tcZf-camelCase{display:flex;flex-direction:column;align-items:center;width:100%}.styles__header___HQxlA-camelCase{color:#fff;text-align:center;font-size:80px;margin:40px auto;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey}.styles__mainContainer___1x1EP-camelCase{width:850px;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin-bottom:50px}.styles__keepCentered___pQ1Vn-camelCase,.styles__mainContainer___1x1EP-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__keepCentered___pQ1Vn-camelCase{width:100%}.styles__amountContainer___2a8E3-camelCase{width:80%;height:70px;display:flex;flex-direction:row;align-items:center;background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:25px auto 0}.styles__amountIcon___jJxUb-camelCase{font-size:32px;line-height:70px;color:#3a3a3a;margin:0 5px 0 20px}.styles__amountColumn___3ygdc-camelCase{display:flex;flex-direction:column;font-family:Nunito,sans-serif;flex-grow:1;color:#3a3a3a;margin:0 5px 0 10px;text-align:left}.styles__amountHeader___3mvQZ-camelCase{font-weight:700;font-size:28px}.styles__amountDesc___2Kkqw-camelCase{font-size:15px}.styles__amountInput___RIPX7-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:auto 20px;padding:5px 15px;width:200px;height:35px;line-height:35px;font-size:26px;font-weight:700;text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__amountInput___RIPX7-camelCase:focus{border-color:#0bc2cf}.styles__textInput___3B2wA-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;margin:auto;padding:5px 15px;width:calc(90% - 30px);height:35px;line-height:35px;font-size:26px;font-weight:700;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__textInput___3B2wA-camelCase:focus{border-color:#0bc2cf}.styles__setTitleText___2Swfx-camelCase{color:#3a3a3a;text-align:center;font-size:54px;font-weight:700;margin-top:30px;padding:0 50px;font-family:Nunito,sans-serif}.styles__assignButton___2_Clu-camelCase{width:80%;height:60px;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin-top:35px;cursor:pointer;font-size:40px;display:flex;justify-content:center;align-items:center;outline:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__assignButton___2_Clu-camelCase:focus,.styles__assignButton___2_Clu-camelCase:hover{transform:scale(1.02)}.styles__assignText___3okx6-camelCase{font-family:Nunito,sans-serif;font-size:45px;margin:25px 50px;color:#fff;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__modeContainer___25TJi-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:80%;margin:25px auto 0}.styles__descText___1q2W_-camelCase{font-size:20px}.styles__dateText___22QTf-camelCase,.styles__descText___1q2W_-camelCase{color:#3a3a3a;text-align:center;margin-top:35px;padding:0 40px;min-width:600px;font-family:Nunito,sans-serif}.styles__dateText___22QTf-camelCase,.styles__settingsText___C_aSI-camelCase{font-size:40px;font-weight:700}.styles__settingsText___C_aSI-camelCase{color:#3a3a3a;text-align:center;margin-top:20px;padding:0 50px;font-family:Nunito,sans-serif;text-decoration:underline}.styles__settingDivider___2VcKm-camelCase{height:3px;width:calc(100% - 100px);margin:10px auto;background-color:#e0e0e0;border-radius:3px}.styles__nothingText___3zDL_-camelCase{margin:155px 5% 20px}.styles__linkText___3l7sY-camelCase,.styles__nothingText___3zDL_-camelCase{font-family:Nunito,sans-serif;font-size:40px;font-weight:700;width:90%;text-align:center;color:#fff}.styles__linkText___3l7sY-camelCase{margin:20px 5% 50px}.styles__plusContainer___I2ptt-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:20px auto 10px}.styles__plusText___ONYYQ-camelCase{color:#3a3a3a;font-size:35px;font-weight:700}.styles__plusText___ONYYQ-camelCase,.styles__upgradeButton___25P0M-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___25P0M-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:20px auto 0;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___25P0M-camelCase:hover{transform:scale(1.05)}',
      ''
    ]), t.locals = {
      center: 'styles__center___3tcZf-camelCase',
      header: 'styles__header___HQxlA-camelCase',
      mainContainer: 'styles__mainContainer___1x1EP-camelCase',
      keepCentered: 'styles__keepCentered___pQ1Vn-camelCase',
      amountContainer: 'styles__amountContainer___2a8E3-camelCase',
      amountIcon: 'styles__amountIcon___jJxUb-camelCase',
      amountColumn: 'styles__amountColumn___3ygdc-camelCase',
      amountHeader: 'styles__amountHeader___3mvQZ-camelCase',
      amountDesc: 'styles__amountDesc___2Kkqw-camelCase',
      amountInput: 'styles__amountInput___RIPX7-camelCase',
      textInput: 'styles__textInput___3B2wA-camelCase',
      setTitleText: 'styles__setTitleText___2Swfx-camelCase',
      assignButton: 'styles__assignButton___2_Clu-camelCase',
      assignText: 'styles__assignText___3okx6-camelCase',
      modeContainer: 'styles__modeContainer___25TJi-camelCase',
      descText: 'styles__descText___1q2W_-camelCase',
      dateText: 'styles__dateText___22QTf-camelCase',
      settingsText: 'styles__settingsText___C_aSI-camelCase',
      settingDivider: 'styles__settingDivider___2VcKm-camelCase',
      nothingText: 'styles__nothingText___3zDL_-camelCase',
      linkText: 'styles__linkText___3l7sY-camelCase',
      plusContainer: 'styles__plusContainer___I2ptt-camelCase',
      plusText: 'styles__plusText___ONYYQ-camelCase',
      upgradeButton: 'styles__upgradeButton___25P0M-camelCase'
    };
  },
  VLsZ: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__headerContainer___2ZV5F-camelCase{height:90vh;width:100%;overflow:hidden;position:relative}.styles__headerImage___cn6op-camelCase{height:90vh;width:55%;position:absolute;top:0;right:0;-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-1}.styles__topButtonContainer___2kyfv-camelCase{position:absolute;top:3vh;right:1.5vw;display:flex;flex-direction:row;align-items:center}.styles__signUpButton___34so5-camelCase{width:25vh;height:8vh;line-height:8vh;font-size:4.4vh;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__signUpButton___34so5-camelCase:hover{transform:scale(1.05)}.styles__loginButton___1jvQu-camelCase{margin-right:2.5vw;width:18vh;height:6vh;line-height:6vh;font-size:3.6vh;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__loginButton___1jvQu-camelCase:hover{transform:scale(1.05)}.styles__headerSide___pCoIK-camelCase{background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:70vw;height:125vh;position:absolute;top:-10vh;left:-20vw;transform:rotate(-15deg);z-index:-1}.styles__topHeaderContainer___1ASdv-camelCase{position:absolute;top:3vh;left:2.5vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:row;align-items:center}.styles__logoText___2io1T-camelCase{font-size:7.3vh;font-family:Titan One,sans-serif}.styles__joinButton___DgX1e-camelCase,.styles__logoText___2io1T-camelCase{text-shadow:2px 2px 8px grey;color:#fff}.styles__joinButton___DgX1e-camelCase{margin-left:7.5vw;font-size:4vh;font-family:Nunito,sans-serif;text-decoration:none;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__joinButton___DgX1e-camelCase:hover{transform:scale(1.05)}.styles__welcomeContainer___13EhQ-camelCase{position:absolute;top:22vh;left:5vw;font-family:Nunito,sans-serif;color:#fff;display:flex;flex-direction:column}.styles__welcomeText___21OkA-camelCase{font-size:8.83vh;line-height:9.13vh;text-shadow:2px 2px 8px grey;font-weight:700}.styles__welcomeDesc___1eYgl-camelCase{font-size:3.35vh;margin:3vh 0}.styles__welcomeButton____dqpb-camelCase{border-radius:6px;border:3px solid #fff;font-size:4.26vh;width:32vh;line-height:7vh;text-align:center;color:#fff;outline:none;text-decoration:none;cursor:pointer;transition:background-color .2s,color .2s}.styles__welcomeButton____dqpb-camelCase:focus,.styles__welcomeButton____dqpb-camelCase:hover{background-color:#fff;color:#0bc2cf}.styles__pronounceButton___3LHuY-camelCase{font-family:Nunito,sans-serif;color:#fff;font-size:3vh;line-height:4vh;margin-top:5vh;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.styles__lowerBackground___3c6z1-camelCase{background-color:#fff;width:120vw;height:60vh;position:absolute;top:90vh;left:-10vw;transform-origin:top left;transform:rotate(-2deg);z-index:-1}@media only screen and (max-width:950px){.styles__headerContainer___2ZV5F-camelCase{height:100vh}.styles__headerImage___cn6op-camelCase{top:6vh;height:42vh;width:100%}.styles__topButtonContainer___2kyfv-camelCase{width:100%;top:2vh;left:0;justify-content:center}.styles__loginButton___1jvQu-camelCase{margin-right:5vw}.styles__headerSide___pCoIK-camelCase{width:130vw;height:65vh;top:40vh;left:-20vw;transform:rotate(4deg)}.styles__topHeaderContainer___1ASdv-camelCase{left:5vw;top:41vh;flex-direction:column;align-items:flex-start}.styles__joinButton___DgX1e-camelCase{margin:0;text-decoration:underline}.styles__welcomeText___21OkA-camelCase{font-size:6vh;line-height:6.5vh}.styles__welcomeDesc___1eYgl-camelCase{font-size:2.2vh;margin:1.5vh 0 3vh}.styles__welcomeButton____dqpb-camelCase{font-size:3vh;width:20vh;line-height:4.5vh}.styles__welcomeContainer___13EhQ-camelCase{top:57.5vh}.styles__lowerBackground___3c6z1-camelCase{top:100vh}.styles__pronounceButton___3LHuY-camelCase{font-size:2vh;line-height:3vh;margin-top:1.5vh}}.styles__mHeaderContainer___3PlQd-camelCase{height:100vh;width:100%;overflow:hidden;position:relative}.styles__mHeaderImage___2pZIk-camelCase{height:42vh;width:100%;position:absolute;top:6vh;right:0;-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:-1}.styles__mTopButtonContainer___2Ugj4-camelCase{position:absolute;width:100%;top:2vh;left:0;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__mLoginButton___U-f-a-camelCase{margin-right:5vw;width:18vh;height:6vh;line-height:6vh;font-size:3.6vh;background-color:#fff;border-radius:7px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mHeaderSide___128PZ-camelCase,.styles__mLoginButton___U-f-a-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__mHeaderSide___128PZ-camelCase{width:130vw;height:65vh;position:absolute;top:40vh;left:-20vw;transform:rotate(4deg);background-color:#0bc2cf;z-index:-1}.styles__mTopHeaderContainer___30-gd-camelCase{position:absolute;left:5vw;top:41vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:flex-start}.styles__mJoinButton___1OOr--camelCase{margin:0;text-decoration:underline;font-size:4vh;font-family:Nunito,sans-serif;color:#fff}.styles__mJoinButton___1OOr--camelCase,.styles__mWelcomeText___18MoW-camelCase{text-shadow:2px 2px 8px grey}.styles__mWelcomeText___18MoW-camelCase{font-size:6vh;line-height:6.5vh;font-weight:700}.styles__mWelcomeDesc___FjaCY-camelCase{font-size:2.2vh;margin:1.5vh 0 3vh}.styles__mWelcomeButton___26CVt-camelCase{font-size:3vh;width:20vh;line-height:4.5vh;border-radius:6px;border:3px solid #fff;text-align:center;color:#fff;outline:none;text-decoration:none;cursor:pointer}.styles__mWelcomeContainer___1PEPM-camelCase{position:absolute;top:57.5vh;left:5vw;font-family:Nunito,sans-serif;color:#fff;display:flex;flex-direction:column}.styles__mLowerBackground___15ejq-camelCase{background-color:#fff;width:120vw;height:60vh;position:absolute;top:100vh;left:-10vw;transform-origin:top left;transform:rotate(-2deg);z-index:-1}.styles__mPronounceButton___1qGdc-camelCase{font-family:Nunito,sans-serif;color:#fff;font-size:2vh;line-height:3vh;margin-top:1.5vh;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.styles__sloganHolder___EFtke-camelCase{height:auto;width:100%;background-color:#fff;display:flex;flex-direction:column}.styles__sloganText___PINEl-camelCase{font-size:52px;padding:3.5vh 12.5%;font-weight:700}.styles__sloganDescText___1M97z-camelCase,.styles__sloganText___PINEl-camelCase{position:relative;color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__sloganDescText___1M97z-camelCase{font-size:24px;max-width:1000px;width:80%;margin:.5vh auto 10vh}.styles__gameplayContainer___1b6Ui-camelCase{display:flex;justify-content:center;align-items:center;flex-direction:row}.styles__gameplayColumnContainer___XKJv1-camelCase{display:flex;flex-direction:row;position:relative;background-color:#f7f7f7}.styles__gameplayColumnContainerOne___3KTrn-camelCase{width:33%;background-color:#ffa31e}.styles__gameplayColumnContainerOne___3KTrn-camelCase,.styles__gameplayColumnContainerTwo___4d7dD-camelCase{display:flex;justify-content:center;flex-direction:column;flex:1}.styles__gameplayColumnContainerTwo___4d7dD-camelCase{width:34%;background-color:#3378ff}.styles__gameplayColumnContainerThree___-Sgz4-camelCase{display:flex;justify-content:center;flex-direction:column;width:33%;flex:1;background-color:#ff462b}.styles__gameplayBottomContainer___2NKan-camelCase{display:flex;justify-content:center;flex-direction:column;margin:0;width:100%;background-color:#00cf77;box-shadow:0 6px 8px rgba(0,0,0,.2)}@media screen and (max-width:700px){.styles__gameplayColumnContainer___XKJv1-camelCase,.styles__gameplayContainer___1b6Ui-camelCase{flex-direction:column}.styles__gameplayColumnContainerOne___3KTrn-camelCase,.styles__gameplayColumnContainerThree___-Sgz4-camelCase,.styles__gameplayColumnContainerTwo___4d7dD-camelCase{width:100%}}.styles__gameplayImageWrapper___gLJm8-camelCase{height:230px;width:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:5vh auto .5vh}.styles__gameplayImage___gAB1d-camelCase{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.styles__gameplayHeaderText___2SWxn-camelCase{font-size:42px;padding:4vh 12px 1vh}.styles__annaText___luqgO-camelCase,.styles__gameplayHeaderText___2SWxn-camelCase{color:#fff;text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__annaText___luqgO-camelCase{font-size:28px;padding:7px 12px 14px}.styles__gameplayText___18Hcx-camelCase{font-size:22px;color:#fff;text-align:center;margin:.5vh auto 5vh;width:80%;max-width:1000px;font-family:Nunito,sans-serif}.styles__blookContainer___IaHGQ-camelCase{display:flex;align-items:center;flex-direction:column;width:100%;height:500px}.styles__particleContainer___2GCXu-camelCase{width:100%;height:540px;margin-top:-40px;overflow:hidden;z-index:-1}.styles__blookTextContainer___1ZYtY-camelCase{height:250px;margin:-375px;width:70%;min-width:320px;max-width:700px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:1}.styles__blookTextContainer___1ZYtY-camelCase,.styles__mBlookContainer___3IMf3-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__mBlookContainer___3IMf3-camelCase{width:100%}.styles__mBlookTextContainer___2039x-camelCase{width:300px;margin:100px auto;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:1}.styles__blookHeaderText___1qmmu-camelCase{font-size:42px;padding:4vh 0 2.5vh;font-weight:700}.styles__blookHeaderText___1qmmu-camelCase,.styles__blookText___3zXaP-camelCase{color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__blookText___3zXaP-camelCase{font-size:24px;padding:.5vh 10% 4vh}@media only screen and (max-width:900px){.styles__particleContainer___2GCXu-camelCase{opacity:0}}.styles__whyContainer___3P45P-camelCase{display:flex;justify-content:center;flex-direction:column;margin:0;width:100%;background-color:#0bc2cf;box-shadow:0 -6px 8px rgba(0,0,0,.2),0 6px 8px rgba(0,0,0,.2);z-index:5}.styles__waitButton___86g7y-camelCase{border-radius:6px;border:3px solid #fff;width:170px;height:50px;padding:0 15px;color:#fff;font-size:28px;text-align:center;line-height:50px;margin:5px auto 5vh;font-family:Nunito,sans-serif;outline:none;text-decoration:none;cursor:pointer;transition:background-color .2s,color .2s}.styles__waitButton___86g7y-camelCase:focus,.styles__waitButton___86g7y-camelCase:hover{background-color:#fff;color:#0bc2cf}.styles__howHolder___3o1ao-camelCase{width:90%;max-width:1050px;margin:0 auto 2.5vh}.styles__howBigHeaderText___3oGE1-camelCase{font-size:44px;color:#3a3a3a;text-align:center;padding:5vh 0;font-family:Nunito,sans-serif;font-weight:700}.styles__howContainer___2Dcva-camelCase{display:flex;flex-direction:row;align-items:center;width:95%;margin:0 auto 7.5vh}.styles__howIcon___2JbQw-camelCase{font-size:200px;width:40%;min-width:300px;text-align:center}.styles__howSide___1KXoq-camelCase{width:60%;display:flex;flex-direction:column;justify-content:center}.styles__howHeaderRow___168eu-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-bottom:15px}.styles__howBox___7JytD-camelCase{border-radius:6px;width:50px;height:50px;color:#fff;font-size:32px;text-align:center;line-height:50px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:20px}.styles__howBox___7JytD-camelCase,.styles__howHeaderText___2DYAs-camelCase{font-family:Nunito,sans-serif;font-weight:700}.styles__howHeaderText___2DYAs-camelCase{font-size:40px;color:#3a3a3a}.styles__howText___2oF5r-camelCase{font-size:22px;color:#3a3a3a;font-family:Nunito,sans-serif}@media screen and (max-width:900px){.styles__howContainer___2Dcva-camelCase,.styles__howHeaderRow___168eu-camelCase{flex-direction:column}.styles__howHeaderRow___168eu-camelCase{margin-top:2vh;align-items:flex-start;height:auto}.styles__howBox___7JytD-camelCase{margin:1vh 0 2vh}.styles__howSide___1KXoq-camelCase{width:85%;margin:0 auto}}.styles__upcomingFeaturesContainer___2TXQW-camelCase{display:flex;justify-content:center;flex-direction:row;width:90%;margin:0 5% 5vh}.styles__featureContainer___2emBB-camelCase{width:30%;min-width:170px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:1.5vh 2.5% 5vh;display:flex;flex-direction:column;justify-content:center;flex:1}@media only screen and (max-width:1050px){.styles__upcomingFeaturesContainer___2TXQW-camelCase{flex-direction:column}.styles__featureContainer___2emBB-camelCase{width:95%}}.styles__featureImageWrapper___3MQTV-camelCase{height:170px;width:170px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:5vh auto .5vh}.styles__featureImage___2buK7-camelCase{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.styles__featureHeaderText___1mEnY-camelCase{font-size:38px;padding:3vh 0 1.5vh;font-weight:700}.styles__featureHeaderText___1mEnY-camelCase,.styles__featureText___1KhN1-camelCase{color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__featureText___1KhN1-camelCase{font-size:22px;padding:.5vh 7.5% 5vh}.styles__createdContainer___2jE1t-camelCase{display:flex;justify-content:center;flex-direction:column;margin:0;width:100%;background-color:#003185;box-shadow:0 -6px 8px rgba(0,0,0,.2);z-index:5}.styles__finalText___2dP5e-camelCase{font-size:22px;margin:-1vh 10% 8px}.styles__boringText___3ogT0-camelCase,.styles__finalText___2dP5e-camelCase{color:#fff;text-align:center;font-family:Nunito,sans-serif}.styles__boringText___3ogT0-camelCase{margin:8px 10% 5vh;font-size:16px}.styles__holder___3z1i--camelCase{width:100%;height:100%;margin:0;padding:0;position:absolute;top:0;left:0}@media screen and (max-width:950px) and (orientation:landscape){.styles__pageContainer___UFBDd-camelCase{transform:rotate(-90deg);transform-origin:left top;width:100vh;position:absolute;top:100%;left:0}.styles__mBody___3Cdis-camelCase{min-height:100vw}.styles__holder___3z1i--camelCase{height:100vw}.styles__headerImage___cn6op-camelCase{width:100vw;height:42vw}}',
      ''
    ]), t.locals = {
      headerContainer: 'styles__headerContainer___2ZV5F-camelCase',
      headerImage: 'styles__headerImage___cn6op-camelCase',
      topButtonContainer: 'styles__topButtonContainer___2kyfv-camelCase',
      signUpButton: 'styles__signUpButton___34so5-camelCase',
      loginButton: 'styles__loginButton___1jvQu-camelCase',
      headerSide: 'styles__headerSide___pCoIK-camelCase',
      topHeaderContainer: 'styles__topHeaderContainer___1ASdv-camelCase',
      logoText: 'styles__logoText___2io1T-camelCase',
      joinButton: 'styles__joinButton___DgX1e-camelCase',
      welcomeContainer: 'styles__welcomeContainer___13EhQ-camelCase',
      welcomeText: 'styles__welcomeText___21OkA-camelCase',
      welcomeDesc: 'styles__welcomeDesc___1eYgl-camelCase',
      welcomeButton: 'styles__welcomeButton____dqpb-camelCase',
      pronounceButton: 'styles__pronounceButton___3LHuY-camelCase',
      lowerBackground: 'styles__lowerBackground___3c6z1-camelCase',
      mHeaderContainer: 'styles__mHeaderContainer___3PlQd-camelCase',
      mHeaderImage: 'styles__mHeaderImage___2pZIk-camelCase',
      mTopButtonContainer: 'styles__mTopButtonContainer___2Ugj4-camelCase',
      mLoginButton: 'styles__mLoginButton___U-f-a-camelCase',
      mHeaderSide: 'styles__mHeaderSide___128PZ-camelCase',
      mTopHeaderContainer: 'styles__mTopHeaderContainer___30-gd-camelCase',
      mJoinButton: 'styles__mJoinButton___1OOr--camelCase',
      mWelcomeText: 'styles__mWelcomeText___18MoW-camelCase',
      mWelcomeDesc: 'styles__mWelcomeDesc___FjaCY-camelCase',
      mWelcomeButton: 'styles__mWelcomeButton___26CVt-camelCase',
      mWelcomeContainer: 'styles__mWelcomeContainer___1PEPM-camelCase',
      mLowerBackground: 'styles__mLowerBackground___15ejq-camelCase',
      mPronounceButton: 'styles__mPronounceButton___1qGdc-camelCase',
      sloganHolder: 'styles__sloganHolder___EFtke-camelCase',
      sloganText: 'styles__sloganText___PINEl-camelCase',
      sloganDescText: 'styles__sloganDescText___1M97z-camelCase',
      gameplayContainer: 'styles__gameplayContainer___1b6Ui-camelCase',
      gameplayColumnContainer: 'styles__gameplayColumnContainer___XKJv1-camelCase',
      gameplayColumnContainerOne: 'styles__gameplayColumnContainerOne___3KTrn-camelCase',
      gameplayColumnContainerTwo: 'styles__gameplayColumnContainerTwo___4d7dD-camelCase',
      gameplayColumnContainerThree: 'styles__gameplayColumnContainerThree___-Sgz4-camelCase',
      gameplayBottomContainer: 'styles__gameplayBottomContainer___2NKan-camelCase',
      gameplayImageWrapper: 'styles__gameplayImageWrapper___gLJm8-camelCase',
      gameplayImage: 'styles__gameplayImage___gAB1d-camelCase',
      gameplayHeaderText: 'styles__gameplayHeaderText___2SWxn-camelCase',
      annaText: 'styles__annaText___luqgO-camelCase',
      gameplayText: 'styles__gameplayText___18Hcx-camelCase',
      blookContainer: 'styles__blookContainer___IaHGQ-camelCase',
      particleContainer: 'styles__particleContainer___2GCXu-camelCase',
      blookTextContainer: 'styles__blookTextContainer___1ZYtY-camelCase',
      mBlookContainer: 'styles__mBlookContainer___3IMf3-camelCase',
      mBlookTextContainer: 'styles__mBlookTextContainer___2039x-camelCase',
      blookHeaderText: 'styles__blookHeaderText___1qmmu-camelCase',
      blookText: 'styles__blookText___3zXaP-camelCase',
      whyContainer: 'styles__whyContainer___3P45P-camelCase',
      waitButton: 'styles__waitButton___86g7y-camelCase',
      howHolder: 'styles__howHolder___3o1ao-camelCase',
      howBigHeaderText: 'styles__howBigHeaderText___3oGE1-camelCase',
      howContainer: 'styles__howContainer___2Dcva-camelCase',
      howIcon: 'styles__howIcon___2JbQw-camelCase',
      howSide: 'styles__howSide___1KXoq-camelCase',
      howHeaderRow: 'styles__howHeaderRow___168eu-camelCase',
      howBox: 'styles__howBox___7JytD-camelCase',
      howHeaderText: 'styles__howHeaderText___2DYAs-camelCase',
      howText: 'styles__howText___2oF5r-camelCase',
      upcomingFeaturesContainer: 'styles__upcomingFeaturesContainer___2TXQW-camelCase',
      featureContainer: 'styles__featureContainer___2emBB-camelCase',
      featureImageWrapper: 'styles__featureImageWrapper___3MQTV-camelCase',
      featureImage: 'styles__featureImage___2buK7-camelCase',
      featureHeaderText: 'styles__featureHeaderText___1mEnY-camelCase',
      featureText: 'styles__featureText___1KhN1-camelCase',
      createdContainer: 'styles__createdContainer___2jE1t-camelCase',
      finalText: 'styles__finalText___2dP5e-camelCase',
      boringText: 'styles__boringText___3ogT0-camelCase',
      holder: 'styles__holder___3z1i--camelCase',
      pageContainer: 'styles__pageContainer___UFBDd-camelCase',
      mBody: 'styles__mBody___3Cdis-camelCase'
    };
  },
  avoX: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), u = a('mLw1'), _ = a('vDqi'), d = a.n(_), p = a('wd/R'), f = a.n(p), h = a('JeI0'), y = a.n(h), g = a('TSYQ'), x = a.n(g), b = a('b6Qr'), C = a('UDbo'), v = a('G5je'), w = a('4HzQ'), T = a.n(w), E = a('GIcp'), k = a.n(E), N = a('PJwE'), S = a.n(N), j = a('e47E'), I = a('iQ+n'), O = a('SCqF'), B = a('DoX5'), z = a('TN+F'), D = a('anyA'), R = a('bNl8'), P = a('Tg08'), H = a('e/rn'), q = a('6GvE');
    function A(e) {
      return (A = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function M(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return Q(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return Q(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function Q(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function W(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function G(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? W(Object(a), !0).forEach(function (t) {
          J(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function J(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function L(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function F(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function U(e, t) {
      return (U = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function Y(e) {
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
        var a, s = V(e);
        if (t) {
          var n = V(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return X(this, a);
      };
    }
    function X(e, t) {
      return !t || 'object' !== A(t) && 'function' != typeof t ? K(e) : t;
    }
    function K(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function V(e) {
      return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var Z = function (e, t) {
        return {
          datasets: [{
              data: [
                e,
                t,
                e || t ? 0 : 1
              ],
              backgroundColor: [
                '#4bc22e',
                '#c43a35',
                '#737373'
              ],
              hoverBackgroundColor: [
                '#4bc22e',
                '#c43a35',
                '#737373'
              ]
            }]
        };
      }, $ = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && U(e, t);
        }(l, e);
        var t, a, s, o, r, i = Y(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            ready: !1,
            set: '',
            date: '',
            type: '',
            numPlayers: 0,
            corrects: 0,
            incorrects: 0,
            questions: [],
            stdQuestions: [],
            standings: [],
            plus: !1,
            deleteCheck: !1,
            loading: !1,
            sortedBy: 'number',
            plusModal: !1,
            standingShown: {}
          }, t.here = !0, t.loading = !1, t.id = '', t.name = '', t.onDeleteConfirm = t.onDeleteConfirm.bind(K(t)), t.changeSort = t.changeSort.bind(K(t)), t.downloadResult = t.downloadResult.bind(K(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (o = regeneratorRuntime.mark(function e() {
              var t, a = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.props.match.params.id) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return');
                  case 2:
                    return this.id = this.props.match.params.id, e.next = 5, this.props.user.getData();
                  case 5:
                    if (t = e.sent) {
                      e.next = 8;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 8:
                    this.name = t.name, d.a.get('/api/history/byid', { params: { id: this.props.match.params.id } }).then(function (e) {
                      var t = e.data;
                      if (!t || !t.date)
                        return a.redirect = !0, void a.setState({ ready: !0 });
                      var s = t.settings.type, n = 0;
                      'Teams' === t.settings.mode || t.settings.team ? t.standings.forEach(function (e) {
                        n += Object.keys(e.players).length;
                      }) : n = t.standings.length;
                      for (var o = 0, r = 0, i = {}, l = 0; l < t.questions.length; l++)
                        i[t.questions[l].num] = [
                          0,
                          0
                        ];
                      var c = [];
                      t.standings.forEach(function (e) {
                        if ([
                            'Royale',
                            'Classic'
                          ].includes(s) && f()(t.date).isBefore('03-13-2021'))
                          if ('Teams' === t.settings.mode || t.settings.team) {
                            var a = 0, n = 0, l = {}, m = [];
                            e.players.forEach(function (t) {
                              o += t.corrects || 0, a += t.corrects || 0, r += t.incorrects ? Object.keys(t.incorrects).length : 0;
                              var s = {}, c = {};
                              t.incorrects && Object.keys(t.incorrects).forEach(function (e) {
                                i[e][1] += 1, n += 1, c[e] = 1, l[e] ? l[e] += 1 : l[e] = 1;
                              }), Object.keys(i).forEach(function (e) {
                                t.incorrects && Object.keys(c).includes(e) || (s[e] = 1);
                              }), m.push(G(G({}, t), {}, {
                                place: e.place,
                                corrects: s,
                                incorrects: c,
                                numCorrects: Object.keys(s).length,
                                numIncorrects: Object.keys(c).length
                              }));
                            });
                            var u = {};
                            Object.keys(i).forEach(function (t) {
                              Object.keys(l).includes(t) && l[t] === e.players.length || (u[t] = e.players.length - (l[t] || 0));
                            }), c.push(G(G({}, e), {}, {
                              corrects: u,
                              incorrects: l,
                              numCorrects: a,
                              numIncorrects: n,
                              players: m
                            }));
                          } else {
                            o += e.corrects || 0, r += e.incorrects ? Object.keys(e.incorrects).length : 0;
                            var _ = 0;
                            e.incorrects && Object.keys(e.incorrects).forEach(function (e) {
                              i[e][1] += 1, _ += 1;
                            });
                            var d = {};
                            Object.keys(i).forEach(function (t) {
                              e.incorrects && Object.keys(e.incorrects).includes(t) || (d[t] = 1);
                            }), c.push(G(G({}, e), {}, {
                              corrects: d,
                              numCorrects: e.corrects,
                              numIncorrects: _
                            }));
                          }
                        else if ('Teams' === t.settings.mode) {
                          var p = 0, h = 0, y = {}, g = {}, x = [];
                          e.players.forEach(function (t) {
                            var a = 0;
                            t.corrects && Object.entries(t.corrects).forEach(function (e) {
                              var t = M(e, 2), s = t[0], n = t[1];
                              o += n, i[s][0] += n, y[s] += n, a += n, p += n;
                            });
                            var s = 0;
                            t.incorrects && Object.entries(t.incorrects).forEach(function (e) {
                              var t = M(e, 2), a = t[0], n = t[1];
                              r += n, i[a][1] += n, g[a] += n, s += n, h += n;
                            }), x.push(G(G({}, t), {}, {
                              place: e.place,
                              numCorrects: a,
                              numIncorrects: s
                            }));
                          }), c.push(G(G({}, e), {}, {
                            corrects: y,
                            incorrects: g,
                            numCorrects: p,
                            numIncorrects: h,
                            players: x
                          }));
                        } else {
                          var b = 0;
                          e.corrects && Object.entries(e.corrects).forEach(function (e) {
                            var t = M(e, 2), a = t[0], s = t[1];
                            o += s, i[a][0] += s, b += s;
                          });
                          var C = 0;
                          e.incorrects && Object.entries(e.incorrects).forEach(function (e) {
                            var t = M(e, 2), a = t[0], s = t[1];
                            r += s, i[a][1] += s, C += s;
                          }), c.push(G(G({}, e), {}, {
                            numCorrects: b,
                            numIncorrects: C
                          }));
                        }
                      }), [
                        'Royale',
                        'Classic'
                      ].includes(s) && f()(t.date).isBefore('03-13-2021') && Object.keys(i).forEach(function (e) {
                        i[e][0] = n - i[e][1];
                      });
                      var m = t.questions.map(function (e) {
                        return G(G({}, e), {}, {
                          corrects: i[e.num][0],
                          incorrects: i[e.num][1]
                        });
                      });
                      m.sort(function (e, t) {
                        return e.num - t.num;
                      }), a.here && a.setState({
                        ready: !0,
                        set: t.set,
                        date: f()(t.date).format('MM/DD/YY'),
                        numPlayers: n,
                        corrects: o,
                        incorrects: r,
                        standings: c,
                        questions: m,
                        stdQuestions: m,
                        type: s
                      });
                    }).catch(function (e) {
                      a.redirect = !0, a.setState({ ready: !0 }), console.error(e);
                    }), d.a.put('/api/users/plan', {
                      name: t.name,
                      stripeId: t.stripe
                    }).then(function (e) {
                      'Starter' !== e.data.plan && a.here && a.setState({ plus: !0 });
                    }).catch(function (e) {
                      console.error(e);
                    });
                  case 11:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, s) {
                var n = o.apply(e, t);
                function r(e) {
                  L(n, a, s, r, i, 'next', e);
                }
                function i(e) {
                  L(n, a, s, r, i, 'throw', e);
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
            key: 'onDeleteConfirm',
            value: function (e) {
              var t = this;
              this.loading || (this.loading = !0, e ? (this.setState({ loading: !0 }), d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.delete('/api/history', {
                params: {
                  id: this.id,
                  name: this.name
                }
              }).then(function () {
                t.here && t.props.history.push('/dashboard?p=History');
              }).catch(function (e) {
                console.error(e);
              })) : (this.loading = !1, this.setState({ deleteCheck: !1 })));
            }
          },
          {
            key: 'changeSort',
            value: function (e) {
              var t = JSON.parse(JSON.stringify(this.state.questions));
              'number' === e ? t.sort(function (e, t) {
                return e.num - t.num;
              }) : 'incorrects' === e && t.sort(function (e, t) {
                var a = e.corrects / Math.max(e.corrects + e.incorrects, 1), s = t.corrects / Math.max(t.corrects + t.incorrects, 1);
                return 1 === a && 1 === s ? e.corrects - t.corrects : a === s ? t.incorrects - e.incorrects : a - s;
              }), this.setState({
                questions: t,
                sortedBy: e
              });
            }
          },
          {
            key: 'downloadResult',
            value: function () {
              var e = this, t = [[
                    { value: 'Name' },
                    { value: 'Blook' },
                    { value: 'Corrects' },
                    { value: 'Incorrects' },
                    { value: 'Percentage' },
                    { value: 'Racing' === this.state.type ? 'Progress' : 'Royale' === this.state.type ? 'Wins' : 'Classic' === this.state.type ? 'Points' : 'Candy' === this.state.type ? 'Candy' : 'Gold' === this.state.type ? 'Gold' : 'Shamrock' === this.state.type ? 'Shamrocks' : 'Snow' === this.state.type ? 'Snow' : 'Toy' === this.state.type ? 'Toys' : 'Defense' === this.state.type ? 'Damage' : 'Hack' === this.state.type ? 'Crypto' : 'Cash' }
                  ]];
              this.state.standings.forEach(function (a) {
                t.push([
                  { value: a.name },
                  { value: a.blook },
                  { value: a.numCorrects },
                  { value: a.numIncorrects },
                  { value: Math.round(a.numCorrects / (a.numCorrects + a.numIncorrects || 1) * 100) },
                  { value: 'Racing' === e.state.type ? a.progress : 'Royale' === e.state.type ? a.wins : 'Classic' === e.state.type ? a.points : 'Candy' === e.state.type ? a.candy : 'Gold' === e.state.type ? 'Gold' : 'Shamrock' === e.state.type ? a.shamrocks : 'Snow' === e.state.type ? a.health : 'Toy' === e.state.type ? a.toys : 'Defense' === e.state.type ? 'Damage' : 'Hack' === e.state.type ? 'Crypto' : a.cash }
                ]);
              });
              var a = {
                filename: this.state.date && this.state.date.includes('/') ? 'Blooket Results - '.concat(this.state.date.replaceAll('/', '-')) : 'Blooket Results',
                sheet: { data: t }
              };
              Object(v.a)(a);
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              if (!this.props.match.params.id)
                return n.a.createElement(u.a, { to: '/login' });
              if (this.state.ready && !this.state.set)
                return n.a.createElement(u.a, { to: '/404' });
              var t = {}, a = {};
              return this.state.standingShown.name && (t = this.state.standingShown.corrects || {}, a = this.state.standingShown.incorrects || {}), n.a.createElement('div', { className: b.isMobile ? k.a.mBody : k.a.body }, n.a.createElement(I.a, {
                title: 'History | Blooket',
                desc: 'View your recent games and review how the players performed and what questions were most missed.'
              }), n.a.createElement(j.a, {
                history: this.props.history,
                page: 'Dashboard'
              }), n.a.createElement('div', { className: k.a.regularBodyMax }, this.state.ready ? n.a.createElement('div', { className: S.a.fullContainer }, n.a.createElement('div', { className: S.a.setContainer }, n.a.createElement('div', { className: S.a.setText }, this.state.set)), n.a.createElement('div', { className: S.a.row }, n.a.createElement('div', { className: S.a.column }, n.a.createElement('div', { className: S.a.miniTopContainer }, n.a.createElement('div', { className: S.a.miniTopText }, this.state.date)), n.a.createElement('div', { className: S.a.chartContainer }, n.a.createElement(C.Doughnut, {
                data: Z(this.state.corrects, this.state.incorrects),
                options: {
                  maintainAspectRatio: !1,
                  responsive: !0,
                  legend: { display: !1 },
                  tooltips: { enabled: !1 },
                  animation: {
                    duration: 1500,
                    easing: 'easeInQuint'
                  },
                  layout: { padding: 15 }
                }
              }), n.a.createElement('div', { className: S.a.chartPercentage }, ''.concat(Math.round(this.state.corrects / Math.max(this.state.corrects + this.state.incorrects, 1) * 100), '%'), n.a.createElement('div', {
                style: {
                  fontSize: 15,
                  lineHeight: '16px'
                }
              }, 'Correct')))), n.a.createElement('div', { className: S.a.column }, n.a.createElement('div', { className: S.a.correctContainer }, n.a.createElement('div', { className: S.a.correctText }, ''.concat(this.state.numPlayers, ' ').concat(1 === this.state.numPlayers ? 'Player' : 'Players'))), n.a.createElement('div', { className: S.a.correctContainer }, n.a.createElement('div', {
                className: S.a.correctText,
                style: { color: '#4bc22e' }
              }, ''.concat(Object(z.n)(this.state.corrects), ' Correct'))), n.a.createElement('div', { className: S.a.correctContainer }, n.a.createElement('div', {
                className: S.a.correctText,
                style: { color: '#c43a35' }
              }, ''.concat(Object(z.n)(this.state.incorrects), ' Incorrect'))), n.a.createElement('div', {
                className: S.a.deleteButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ deleteCheck: !0 });
                }
              }, n.a.createElement('i', {
                className: 'fas fa-trash-alt',
                style: { marginRight: 15 }
              }), 'Delete'), this.state.plus ? n.a.createElement('div', {
                className: S.a.downloadButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.downloadResult
              }, n.a.createElement('i', {
                className: 'fas fa-table',
                style: { marginRight: 15 }
              }), 'Download') : null)), this.state.standings.length > 0 ? n.a.createElement('div', { className: S.a.qHolder }, n.a.createElement('div', { className: S.a.headerContainer }, n.a.createElement('div', { className: S.a.headerText }, 'Leaderboard')), this.state.standings.map(function (t) {
                return n.a.createElement('div', {
                  className: S.a.qHolder,
                  key: t.name
                }, n.a.createElement('div', {
                  className: S.a.standingContainer,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.setState({
                      plusModal: !e.state.plus,
                      standingShown: e.state.plus ? t : {}
                    });
                  }
                }, t.numCorrects || t.numIncorrects ? n.a.createElement('div', { className: S.a.accuracyText }, ''.concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), '%'), n.a.createElement('div', { className: S.a.accuracySmallText }, 'Correct')) : n.a.createElement('div', { className: S.a.leftEarlyText }, 'Left', n.a.createElement('br', null), 'Early'), n.a.createElement(B.a, {
                  name: t.blook,
                  className: S.a.blookImage
                }), n.a.createElement(T.a, {
                  className: S.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: 26
                }, t.name), n.a.createElement('div', { className: S.a.barContainer }, n.a.createElement('div', {
                  className: S.a.correctBar,
                  style: {
                    width: t.numCorrects || t.numIncorrects ? ''.concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, '%') : '100%',
                    minWidth: t.numCorrects ? 50 : null
                  }
                }, t.numCorrects ? n.a.createElement('div', { className: S.a.barText }, t.numCorrects) : null), t.numIncorrects ? n.a.createElement('div', { className: S.a.barText }, t.numIncorrects) : null), 'Racing' === e.state.type ? n.a.createElement('div', { className: S.a.cashText }, t.progress) : 'Royale' === e.state.type ? n.a.createElement('div', { className: S.a.cashText }, ''.concat(t.wins, ' ').concat(1 === t.wins ? 'Win' : 'Wins')) : 'Classic' === e.state.type ? n.a.createElement('div', { className: S.a.cashText }, ''.concat(Object(z.n)(t.points), ' ').concat(1 === t.points ? 'Point' : 'Points')) : 'Factory' === e.state.type || 'Cafe' === e.state.type ? n.a.createElement('div', { className: S.a.cashText }, '$'.concat(Object(z.n)(t.cash))) : 'Hack' === e.state.type ? n.a.createElement('div', { className: S.a.cashText }, '\u20BF '.concat(Object(z.n)(t.crypto))) : 'Defense' === e.state.type ? n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.dmg)), n.a.createElement('i', { className: x()(S.a.scoreIcon, 'fas fa-splotch') })) : 'Snow' === e.state.type ? n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.health)), n.a.createElement('i', { className: x()(S.a.scoreIcon, 'far fa-snowflake') })) : 'Shamrock' === e.state.type ? n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.shamrocks)), n.a.createElement('img', {
                  src: q.a,
                  alt: 'Shamrock',
                  className: S.a.candyImage,
                  draggable: !1
                })) : 'Gold' === e.state.type ? n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.gold)), n.a.createElement('img', {
                  src: P.a,
                  alt: 'Gold',
                  className: S.a.candyImage,
                  style: { height: '40%' },
                  draggable: !1
                })) : 'Toy' === e.state.type ? n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.toys)), n.a.createElement('img', {
                  src: H.a,
                  alt: 'Toy',
                  className: S.a.candyImage,
                  style: { height: '55%' },
                  draggable: !1
                })) : n.a.createElement('div', { className: S.a.scoreRow }, n.a.createElement('div', { className: S.a.pointsText }, Object(z.n)(t.candy)), n.a.createElement('img', {
                  src: R.a,
                  alt: 'Candy',
                  className: S.a.candyImage,
                  draggable: !1
                }))), t.players ? t.players.map(function (t) {
                  return n.a.createElement('div', {
                    className: S.a.playerContainer,
                    role: 'button',
                    tabIndex: 0,
                    key: t.name,
                    onClick: function () {
                      return e.setState({
                        plusModal: !e.state.plus,
                        standingShown: e.state.plus ? t : {}
                      });
                    }
                  }, t.numCorrects || t.numIncorrects ? n.a.createElement('div', { className: S.a.accuracyText }, ''.concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), '%'), n.a.createElement('div', { className: S.a.accuracySmallText }, 'Correct')) : n.a.createElement('div', { className: S.a.leftEarlyText }, 'Left', n.a.createElement('br', null), 'Early'), n.a.createElement(B.a, {
                    name: t.blook,
                    className: S.a.blookImage
                  }), n.a.createElement(T.a, {
                    className: S.a.nameText,
                    mode: 'single',
                    forceSingleModeWidth: !1,
                    min: 1,
                    max: 26
                  }, t.name), n.a.createElement('div', { className: S.a.barContainer }, n.a.createElement('div', {
                    className: S.a.correctBar,
                    style: {
                      width: t.numCorrects || t.numIncorrects ? ''.concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, '%') : '100%',
                      minWidth: t.numCorrects ? 50 : null
                    }
                  }, t.numCorrects ? n.a.createElement('div', { className: S.a.barText }, t.numCorrects) : null), t.numIncorrects ? n.a.createElement('div', { className: S.a.barText }, t.numIncorrects) : null));
                }) : null);
              })) : null, this.state.plus ? n.a.createElement('div', { className: S.a.qHolder }, n.a.createElement('div', { className: S.a.headerContainer }, n.a.createElement('div', { className: S.a.headerText }, 'Questions')), n.a.createElement('div', { className: S.a.sortedContainer }, n.a.createElement('div', { className: S.a.sortedText }, 'Sorted By:'), n.a.createElement('div', {
                className: S.a.sortedButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.changeSort('number');
                },
                style: {
                  color: 'number' === this.state.sortedBy ? '#fff' : '#3a3a3a',
                  backgroundColor: 'number' === this.state.sortedBy ? '#0bc2cf' : '#fff'
                }
              }, 'Question #'), n.a.createElement('div', {
                className: S.a.sortedButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.changeSort('incorrects');
                },
                style: {
                  color: 'incorrects' === this.state.sortedBy ? '#fff' : '#3a3a3a',
                  backgroundColor: 'incorrects' === this.state.sortedBy ? '#0bc2cf' : '#fff'
                }
              }, 'Incorrect %')), this.state.questions.map(function (e) {
                return n.a.createElement('div', {
                  key: e.num,
                  className: S.a.questionContainer
                }, n.a.createElement('div', { className: S.a.questionImageContainer }, e.image ? n.a.createElement(y.a, {
                  height: 130,
                  width: 170
                }, n.a.createElement('img', {
                  src: Object(z.f)(e.image),
                  alt: 'Question Background',
                  className: S.a.questionImage
                })) : null, n.a.createElement('div', {
                  className: S.a.imageNumber,
                  style: { marginLeft: e.image ? -170 : 0 }
                }, e.num)), n.a.createElement('div', { className: S.a.questionCenterContainer }, n.a.createElement('div', { className: S.a.questionText }, e.text), n.a.createElement('div', { className: S.a.answerText }, 'Answer: '.concat(Object(z.e)(e.answers)))), n.a.createElement('div', { className: S.a.questionStatsContainer }, n.a.createElement(C.Doughnut, {
                  data: Z(e.corrects, e.incorrects),
                  options: {
                    cutoutPercentage: 75,
                    maintainAspectRatio: !1,
                    responsive: !0,
                    legend: { display: !1 },
                    tooltips: { enabled: !1 },
                    animation: { duration: 0 },
                    layout: { padding: 2 }
                  }
                }), n.a.createElement('div', { className: S.a.questionStats }, ''.concat(e.corrects, '/').concat(e.incorrects + e.corrects), n.a.createElement('div', {
                  style: {
                    fontSize: 13,
                    lineHeight: '14px'
                  }
                }, 'Correct'))));
              })) : n.a.createElement('div', { className: S.a.plusContainer }, n.a.createElement('div', { className: S.a.plusText }, 'Get Blooket Plus For Detailed Game Reports!'), n.a.createElement(c.a, {
                className: S.a.upgradeButton,
                to: '/upgrade'
              }, 'Upgrade')), n.a.createElement('div', { style: { height: 20 } })) : null), this.state.deleteCheck ? n.a.createElement(O.a, {
                text: 'Do you really want to delete this history?',
                loading: this.state.loading,
                buttonOne: {
                  text: 'Yes',
                  click: function () {
                    return e.onDeleteConfirm(!0);
                  },
                  color: 'red'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.onDeleteConfirm(!1);
                  },
                  color: 'blue'
                }
              }) : this.state.plusModal ? n.a.createElement('div', { className: k.a.modal }, n.a.createElement('div', { className: S.a.plusModalContainer }, n.a.createElement('i', {
                className: x()('fas fa-times', S.a.plusTimes),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ plusModal: !1 });
                }
              }), n.a.createElement('div', {
                className: S.a.plusText,
                style: { fontSize: 38 }
              }, 'Get Blooket Plus For Detailed Game Reports!'), n.a.createElement(c.a, {
                className: S.a.upgradeButton,
                to: '/upgrade'
              }, 'Upgrade'))) : this.state.standingShown.name ? n.a.createElement('div', { className: k.a.modal }, n.a.createElement('div', {
                className: S.a.modalButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ standingShown: {} });
                }
              }), n.a.createElement('div', { className: S.a.standingModalContainer }, n.a.createElement('i', {
                className: x()('fas fa-times', S.a.plusTimes),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ standingShown: {} });
                }
              }), n.a.createElement('div', { className: S.a.modalRow }, n.a.createElement(B.a, {
                name: this.state.standingShown.blook,
                className: S.a.modalBlook
              }), n.a.createElement('div', { className: S.a.modalColumn }, this.state.standingShown.name, n.a.createElement('div', { className: S.a.modalDesc }, ''.concat(this.state.standingShown.place).concat(Object(z.g)(this.state.standingShown.place), ' Place'))), n.a.createElement('div', { className: S.a.modalStats }, n.a.createElement(C.Doughnut, {
                data: Z(this.state.standingShown.numCorrects, this.state.standingShown.numIncorrects),
                options: {
                  cutoutPercentage: 75,
                  maintainAspectRatio: !1,
                  responsive: !0,
                  legend: { display: !1 },
                  tooltips: { enabled: !1 },
                  animation: { duration: 0 },
                  layout: { padding: 0 }
                }
              }), n.a.createElement('div', { className: S.a.modalStatsText }, this.state.standingShown.numCorrects || this.state.standingShown.numIncorrects ? ''.concat(Math.round(this.state.standingShown.numCorrects / (this.state.standingShown.numCorrects + this.state.standingShown.numIncorrects) * 100), '%') : '0%', n.a.createElement('div', {
                style: {
                  fontSize: 9,
                  lineHeight: '10px'
                }
              }, 'Correct')))), n.a.createElement('div', { className: S.a.mainDivider }, '\xA0'), this.state.stdQuestions.map(function (s, o) {
                return n.a.createElement('div', {
                  key: s.num,
                  className: S.a.modalQuestionColumn,
                  style: { paddingBottom: o + 1 === e.state.stdQuestions.length ? 10 : 0 }
                }, n.a.createElement('div', { className: S.a.modalQuestionRow }, s.image ? n.a.createElement(y.a, {
                  height: 70,
                  width: 80
                }, n.a.createElement('img', {
                  src: Object(z.f)(s.image),
                  alt: 'Question Background',
                  className: S.a.modalQuestionImage
                })) : null, n.a.createElement('div', {
                  style: {
                    paddingLeft: 10,
                    fontWeight: 'bold'
                  }
                }, ''.concat(s.num, '.')), n.a.createElement('div', { className: S.a.modalQuestionText }, s.text), n.a.createElement('div', { className: S.a.modalQuestionStats }, n.a.createElement(C.Doughnut, {
                  data: Z(Object.keys(t).includes(s.num.toString()) ? t[s.num] : 0, Object.keys(a).includes(s.num.toString()) ? [
                    'Royale',
                    'Classic'
                  ].includes(e.state.type) ? 1 : a[s.num] : 0),
                  options: {
                    cutoutPercentage: 75,
                    maintainAspectRatio: !1,
                    responsive: !0,
                    legend: { display: !1 },
                    tooltips: { enabled: !1 },
                    animation: { duration: 0 },
                    layout: { padding: 0 }
                  }
                }), n.a.createElement('div', { className: S.a.modalStatsText }, ''.concat(Object.keys(t).includes(s.num.toString()) ? t[s.num] : 0, '/').concat((Object.keys(t).includes(s.num.toString()) ? t[s.num] : 0) + (Object.keys(a).includes(s.num.toString()) ? [
                  'Royale',
                  'Classic'
                ].includes(e.state.type) ? 1 : a[s.num] : 0))))), o + 1 !== e.state.stdQuestions.length ? n.a.createElement('div', { className: S.a.divider }, '\xA0') : null);
              }))) : null);
            }
          }
        ]) && F(t.prototype, a), s && F(t, s), l;
      }(n.a.Component);
    $.propTypes = {
      match: l.a.object,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(D.c)(Object(m.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })($)));
  },
  gZAK: function (e, t, a) {
    var s = a('GZG1');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  iVxs: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return oe;
    }), a.d(t, 'b', function () {
      return re;
    });
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), u = a('mLw1'), _ = a('vDqi'), d = a.n(_), p = a('wd/R'), f = a.n(p), h = a('JeI0'), y = a.n(h), g = a('TSYQ'), x = a.n(g), b = a('b6Qr'), C = a('UDbo'), v = a('G5je'), w = a('4HzQ'), T = a.n(w), E = a('anyA'), k = a('GIcp'), N = a.n(k), S = a('179F'), j = a.n(S), I = a('e47E'), O = a('SCqF'), B = a('iQ+n'), z = a('DoX5'), D = a('TN+F'), R = a('AkzR'), P = a('6T3a'), H = a('Rpkt'), q = a('mNb3'), A = a('RiBT'), M = a('ASIK');
    function Q(e) {
      return (Q = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function W(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function G(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? W(Object(a), !0).forEach(function (t) {
          J(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function J(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function L(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || ee(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function F(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function U(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function Y(e, t) {
      return (Y = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function X(e) {
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
        var a, s = Z(e);
        if (t) {
          var n = Z(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return K(this, a);
      };
    }
    function K(e, t) {
      return !t || 'object' !== Q(t) && 'function' != typeof t ? V(e) : t;
    }
    function V(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function Z(e) {
      return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function $(e) {
      return function (e) {
        if (Array.isArray(e))
          return te(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || ee(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function ee(e, t) {
      if (e) {
        if ('string' == typeof e)
          return te(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? te(e, t) : void 0;
      }
    }
    function te(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    var ae = [].concat($(Object.keys(R.a)), $(Object.keys(P.a)), $(Object.keys(H.a)), $(Object.keys(q.a)), $(Object.keys(A.a)), $(Object.keys(M.a))), se = function (e) {
        e.sort(function (e, t) {
          var a = e.corrects / Math.max(e.corrects + e.incorrects, 1), s = t.corrects / Math.max(t.corrects + t.incorrects, 1);
          return 1 === a && 1 === s ? e.corrects - t.corrects : a === s ? t.incorrects - e.incorrects : a - s;
        });
      }, ne = function (e, t) {
        return {
          datasets: [{
              data: [
                e,
                t,
                e || t ? 0 : 1
              ],
              backgroundColor: [
                '#4bc22e',
                '#c43a35',
                '#737373'
              ],
              hoverBackgroundColor: [
                '#4bc22e',
                '#c43a35',
                '#737373'
              ]
            }]
        };
      }, oe = 14, re = 365, ie = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && Y(e, t);
        }(l, e);
        var t, a, s, o, r, i = X(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            ready: !1,
            set: '',
            type: '',
            date: '',
            endDate: '',
            id: '',
            hwTitle: '',
            isEnded: !1,
            daysLeft: 0,
            numPlayers: 0,
            corrects: 0,
            incorrects: 0,
            stdQuestions: [],
            questions: [],
            standings: [],
            deleteCheck: !1,
            loading: !1,
            plus: !1,
            justCopied: !1,
            sortedBy: 'number',
            plusModal: !1,
            standingShown: {},
            deleteStanding: {},
            extendPop: !1,
            extendAmount: 0
          }, t.id = t.props.match.params.id, t.loading = !1, t.here = !0, t.onDeleteConfirm = t.onDeleteConfirm.bind(V(t)), t.onDeleteStanding = t.onDeleteStanding.bind(V(t)), t.extendHW = t.extendHW.bind(V(t)), t.refresh = t.refresh.bind(V(t)), t.copyToClipboard = t.copyToClipboard.bind(V(t)), t.changeSort = t.changeSort.bind(V(t)), t.downloadResult = t.downloadResult.bind(V(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (o = regeneratorRuntime.mark(function e() {
              var t, a = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.id) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return');
                  case 2:
                    return e.next = 4, this.props.user.getData();
                  case 4:
                    if (t = e.sent) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 7:
                    this.refresh(), d.a.put('/api/users/plan', {
                      name: t.name,
                      stripeId: t.stripe
                    }).then(function (e) {
                      'Starter' !== e.data.plan && a.here && a.setState({ plus: !0 });
                    }).catch(function (e) {
                      console.error(e);
                    });
                  case 9:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, s) {
                var n = o.apply(e, t);
                function r(e) {
                  F(n, a, s, r, i, 'next', e);
                }
                function i(e) {
                  F(n, a, s, r, i, 'throw', e);
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
              this.here = !1, clearTimeout(this.copyTimeout);
            }
          },
          {
            key: 'onDeleteConfirm',
            value: function (e) {
              var t = this;
              this.loading || (this.loading = !0, e ? (this.setState({ loading: !0 }), d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.delete('/api/homeworks', { params: { id: this.id } }).then(function () {
                t.here && t.props.history.push('/dashboard?p=Homework');
              }).catch(function (e) {
                console.error(e);
              })) : (this.loading = !1, this.setState({ deleteCheck: !1 })));
            }
          },
          {
            key: 'onDeleteStanding',
            value: function () {
              var e = this;
              this.loading || (this.loading = !0, this.setState({ loading: !0 }), d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.put('/api/homeworks/delete-result', {
                resultId: this.state.deleteStanding._id,
                hwId: this.state.deleteStanding.hwId,
                name: this.state.deleteStanding.name
              }).then(function () {
                e.here && (e.loading = !1, e.setState({ deleteStanding: {} }, e.refresh));
              }).catch(function (e) {
                console.error(e);
              }));
            }
          },
          {
            key: 'extendHW',
            value: function (e) {
              var t = this;
              e.preventDefault(), this.loading || (this.state.extendAmount <= 0 ? this.setState({ extendPop: !1 }) : (this.loading = !0, this.setState({ loading: !0 }), d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.put('/api/homeworks/extend', {
                hwId: this.id,
                minutes: 24 * this.state.extendAmount * 60,
                plus: this.state.plus
              }).then(function () {
                t.here && (t.loading = !1, t.setState({ extendPop: !1 }, t.refresh));
              }).catch(function (e) {
                t.loading = !1, t.setState({ extendPop: !1 }), console.error(e);
              })));
            }
          },
          {
            key: 'refresh',
            value: function () {
              var e = this;
              this.setState({ standings: [] }), d.a.get('/api/homeworks/byid/results', { params: { id: this.id } }).then(function (t) {
                if (e.here) {
                  if (!t.data || !t.data.metaData)
                    return e.redirect = !0, void e.setState({ ready: !0 });
                  for (var a = t.data.metaData, s = t.data.results, n = s.length, o = 0, r = 0, i = {}, l = 0; l < a.questions.length; l++)
                    i[a.questions[l].number] = [
                      0,
                      0
                    ];
                  var c = [];
                  s.forEach(function (e) {
                    var t = 0;
                    e.data && e.data.corrects && Object.entries(e.data.corrects).forEach(function (e) {
                      var a = L(e, 2), s = a[0], n = a[1];
                      o += n, i[s] && (i[s][0] += n), t += n;
                    });
                    var a = 0;
                    e.data && e.data.incorrects && Object.entries(e.data.incorrects).forEach(function (e) {
                      var t = L(e, 2), s = t[0], n = t[1];
                      r += n, i[s] && (i[s][1] += n), a += n;
                    });
                    var s = Object(D.o)(ae);
                    c.push(G(G({}, e), {}, {
                      blook: s,
                      numCorrects: t,
                      numIncorrects: a
                    }));
                  });
                  var m = a.questions.map(function (e) {
                    return G(G({}, e), {}, {
                      corrects: i[e.number][0],
                      incorrects: i[e.number][1]
                    });
                  });
                  'Tower' === a.settings.type ? c.sort(function (e, t) {
                    return t.data.stage - e.data.stage;
                  }) : 'Factory' === a.settings.type ? c.sort(function (e, t) {
                    return t.data.cash - e.data.cash;
                  }) : 'Cafe' === a.settings.type ? c.sort(function (e, t) {
                    return t.data.day - e.data.day;
                  }) : 'Defense' === a.settings.type ? c.sort(function (e, t) {
                    return t.data.round - e.data.round;
                  }) : 'Kingdom' === a.settings.type && c.sort(function (e, t) {
                    return t.data.guests - e.data.guests;
                  }), 'number' === e.state.sortedBy ? m.sort(function (e, t) {
                    return e.number - t.number;
                  }) : 'incorrects' === e.state.sortedBy && se(m), e.setState({
                    ready: !0,
                    set: a.title,
                    type: a.settings.type,
                    date: f()(a.startTime).format('MM/DD/YY'),
                    endDate: f()(a.startTime).add(a.duration, 'minutes').format('MM/DD/YY - h:mm a'),
                    id: a._id,
                    hwTitle: a.title,
                    isEnded: f()(a.startTime).add(a.duration, 'minutes').isBefore(f.a.utc()) || a.noEnd,
                    daysLeft: f()(a.startTime).add(a.duration, 'minutes').diff(f.a.utc(), 'days'),
                    numPlayers: n,
                    corrects: o,
                    incorrects: r,
                    standings: c,
                    questions: m,
                    stdQuestions: m,
                    loading: !1
                  });
                }
              }).catch(function (t) {
                e.redirect = !0, e.setState({ ready: !0 }), console.error(t);
              });
            }
          },
          {
            key: 'copyToClipboard',
            value: function () {
              var e = this, t = document.createElement('textarea');
              t.value = 'https://www.blooket.com/play?hwId='.concat(this.state.id), t.setAttribute('readonly', ''), t.style.position = 'absolute', t.style.left = '-9999px', document.body.appendChild(t);
              var a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
              t.select(), document.execCommand('copy'), document.body.removeChild(t), a && (document.getSelection().removeAllRanges(), document.getSelection().addRange(a)), clearTimeout(this.copyTimeout), this.setState({ justCopied: !0 }, function () {
                e.copyTimeout = setTimeout(function () {
                  e.setState({ justCopied: !1 });
                }, 1500);
              });
            }
          },
          {
            key: 'changeSort',
            value: function (e) {
              var t = JSON.parse(JSON.stringify(this.state.questions));
              'number' === e ? t.sort(function (e, t) {
                return e.number - t.number;
              }) : 'incorrects' === e && se(t), this.setState({
                questions: t,
                sortedBy: e
              });
            }
          },
          {
            key: 'downloadResult',
            value: function () {
              var e = this, t = [[
                    { value: 'Name' },
                    { value: 'Corrects' },
                    { value: 'Incorrects' },
                    { value: 'Percentage' },
                    { value: 'Tower' === this.state.type ? 'Stages' : 'Defense' === this.state.type ? 'Rounds' : 'Kingdom' === this.state.type ? 'Guests' : 'Cafe' === this.state.type ? 'Days' : 'Cash' }
                  ]];
              this.state.standings.forEach(function (a) {
                t.push([
                  { value: a.name },
                  { value: a.numCorrects },
                  { value: a.numIncorrects },
                  { value: Math.round(a.numCorrects / (a.numCorrects + a.numIncorrects || 1) * 100) },
                  { value: 'Tower' === e.state.type ? a.data.stage : 'Defense' === e.state.type ? a.data.round : 'Kingdom' === e.state.type ? a.data.guests : 'Cafe' === e.state.type ? a.data.day : a.data.cash }
                ]);
              });
              var a = {
                filename: this.state.date && this.state.date.includes('/') ? 'Blooket Results - '.concat(this.state.date.replaceAll('/', '-')) : 'Blooket Results',
                sheet: { data: t }
              };
              Object(v.a)(a);
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              if (!this.props.match.params.id)
                return n.a.createElement(u.a, { to: '/login' });
              if (this.state.ready && !this.state.set)
                return n.a.createElement(u.a, { to: '/404' });
              var t = {}, a = {};
              return this.state.standingShown.name && (t = this.state.standingShown.data.corrects || {}, a = this.state.standingShown.data.incorrects || {}), n.a.createElement('div', { className: b.isMobile ? N.a.mBody : N.a.body }, n.a.createElement(B.a, {
                title: 'Homework | Blooket',
                desc: 'View your recent homework and review how the players performed and what questions were most missed.'
              }), n.a.createElement(I.a, {
                history: this.props.history,
                page: 'Dashboard'
              }), n.a.createElement('div', { className: N.a.regularBodyMax }, this.state.ready ? n.a.createElement('div', { className: j.a.fullContainer }, this.state.isEnded ? n.a.createElement('div', null, n.a.createElement('div', { className: j.a.hwText }, this.state.hwTitle), n.a.createElement('div', { className: j.a.joinText }, 'This HW closed on '.concat(this.state.endDate))) : n.a.createElement('div', { className: j.a.hwContainer }, n.a.createElement('div', { className: j.a.hwText }, this.state.hwTitle), n.a.createElement('div', { className: j.a.joinText }, 'Players can join at (click to copy):'), n.a.createElement('div', {
                className: j.a.linkContainer,
                role: 'button',
                tabIndex: 0,
                onClick: this.copyToClipboard
              }, n.a.createElement('div', { className: j.a.linkText }, 'https://www.blooket.com/play?hwId='.concat(this.state.id), this.state.justCopied ? n.a.createElement('div', { className: j.a.copiedNotification }, 'Copied!') : null)), n.a.createElement('div', { className: j.a.endDateText }, 'HW Closes At: '.concat(this.state.endDate)), n.a.createElement('i', { className: x()('fas fa-angle-down', j.a.downIcon) })), n.a.createElement('div', { className: j.a.setText }, this.state.set), n.a.createElement('div', { className: j.a.row }, n.a.createElement('div', { className: j.a.column }, n.a.createElement('div', { className: j.a.miniTopContainer }, n.a.createElement('div', { className: j.a.miniTopText }, this.state.date)), n.a.createElement('div', { className: j.a.chartContainer }, n.a.createElement(C.Doughnut, {
                data: ne(this.state.corrects, this.state.incorrects),
                options: {
                  maintainAspectRatio: !1,
                  responsive: !0,
                  legend: { display: !1 },
                  tooltips: { enabled: !1 },
                  animation: {
                    duration: 1500,
                    easing: 'easeInQuint'
                  },
                  layout: { padding: 15 }
                }
              }), n.a.createElement('div', { className: j.a.chartPercentage }, ''.concat(Math.round(this.state.corrects / Math.max(this.state.corrects + this.state.incorrects, 1) * 100), '%'), n.a.createElement('div', {
                style: {
                  fontSize: 15,
                  lineHeight: '16px'
                }
              }, 'Correct')))), n.a.createElement('div', { className: j.a.column }, n.a.createElement('div', { className: j.a.correctContainer }, n.a.createElement('div', { className: j.a.correctText }, ''.concat(this.state.numPlayers, ' ').concat(1 === this.state.numPlayers ? 'Player' : 'Players'))), n.a.createElement('div', { className: j.a.correctContainer }, n.a.createElement('div', {
                className: j.a.correctText,
                style: { color: '#4bc22e' }
              }, ''.concat(Object(D.n)(this.state.corrects), ' Correct'))), n.a.createElement('div', { className: j.a.correctContainer }, n.a.createElement('div', {
                className: j.a.correctText,
                style: { color: '#c43a35' }
              }, ''.concat(Object(D.n)(this.state.incorrects), ' Incorrect'))), this.state.plus ? n.a.createElement('div', {
                className: j.a.downloadButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.downloadResult
              }, n.a.createElement('i', {
                className: 'fas fa-table',
                style: { marginRight: 15 }
              }), 'Download') : null)), n.a.createElement('div', { className: j.a.row }, n.a.createElement('div', {
                className: j.a.refreshButton,
                style: { backgroundColor: '#ce1313' },
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ deleteCheck: !0 });
                }
              }, n.a.createElement('i', { className: x()(j.a.refreshIcon, 'fas fa-trash-alt') }), 'Delete'), n.a.createElement('div', {
                className: j.a.refreshButton,
                style: { backgroundColor: '#ff6969' },
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({
                    extendPop: !0,
                    extendAmount: 1
                  });
                }
              }, n.a.createElement('i', { className: x()(j.a.refreshIcon, 'fas fa-history') }), this.state.isEnded ? 'Reopen' : 'Extend'), n.a.createElement('div', {
                className: j.a.refreshButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.refresh
              }, n.a.createElement('i', { className: x()('fas fa-sync-alt', j.a.refreshIcon) }), 'Refresh')), this.state.standings.length > 0 ? n.a.createElement('div', { className: j.a.qHolder }, n.a.createElement('div', { className: j.a.headerContainer }, n.a.createElement('div', { className: j.a.headerText }, 'Leaderboard')), [
                'Tower',
                'Cafe',
                'Defense'
              ].includes(this.state.type) ? n.a.createElement('div', { className: j.a.keyContainer }, n.a.createElement('div', { className: j.a.keyGroup }, n.a.createElement('i', {
                className: x()('fas fa-user', j.a.keyIcon),
                style: { color: '#4bc22e' }
              }), 'Cafe' === this.state.type ? 'Café Open' : 'Alive'), n.a.createElement('div', { className: j.a.keyGroup }, n.a.createElement('i', {
                className: x()('fas fa-user-slash', j.a.keyIcon),
                style: { color: '#c43a35' }
              }), 'Cafe' === this.state.type ? 'Closed Down' : 'Dead')) : null, this.state.standings.map(function (t) {
                return n.a.createElement('div', {
                  className: j.a.standingHolder,
                  key: t._id
                }, n.a.createElement('div', {
                  className: j.a.standingContainer,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.setState({
                      plusModal: !e.state.plus,
                      standingShown: e.state.plus && (t.numCorrects || t.numIncorrects) ? t : {}
                    });
                  }
                }, t.numCorrects || t.numIncorrects ? n.a.createElement('div', { className: j.a.accuracyText }, ''.concat(Math.round(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100), '%'), n.a.createElement('div', { className: j.a.accuracySmallText }, 'Correct')) : n.a.createElement('div', { className: j.a.leftEarlyText }, 'No', n.a.createElement('br', null), 'Progress'), [
                  'Tower',
                  'Cafe',
                  'Defense'
                ].includes(e.state.type) ? n.a.createElement('i', {
                  className: x()(t.data.alive ? 'fas fa-user' : 'fas fa-user-slash', j.a.standingIcon),
                  style: { color: t.data.alive ? '#4bc22e' : '#c43a35' }
                }) : n.a.createElement(z.a, {
                  name: t.blook,
                  className: j.a.blookImage
                }), n.a.createElement(T.a, {
                  className: j.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: 26
                }, t.name), n.a.createElement('div', { className: j.a.barContainer }, n.a.createElement('div', {
                  className: j.a.correctBar,
                  style: {
                    width: t.numCorrects || t.numIncorrects ? ''.concat(t.numCorrects / (t.numCorrects + t.numIncorrects) * 100, '%') : '100%',
                    minWidth: t.numCorrects ? 50 : null
                  }
                }, t.numCorrects ? n.a.createElement('div', { className: j.a.barText }, t.numCorrects) : null), t.numIncorrects ? n.a.createElement('div', { className: j.a.barText }, t.numIncorrects) : null), 'Tower' === e.state.type ? n.a.createElement('div', { className: j.a.statText }, 34 === t.data.stage ? 'Ascended the Tower!' : 'Cleared '.concat(t.data.stage, ' ').concat(1 === t.data.stage ? 'Stage' : 'Stages')) : 'Factory' === e.state.type ? n.a.createElement('div', { className: j.a.statText }, '$'.concat(Object(D.n)(t.data.cash))) : 'Cafe' === e.state.type ? n.a.createElement('div', { className: j.a.statText }, 'Day '.concat(t.data.day)) : 'Defense' === e.state.type ? n.a.createElement('div', { className: j.a.statText }, 'Round '.concat(t.data.round - 1)) : 'Kingdom' === e.state.type ? n.a.createElement('div', { className: j.a.statText }, Object(D.n)(t.data.guests), n.a.createElement('i', { className: x()('fas fa-users', j.a.statIcon) })) : null), n.a.createElement('div', {
                  className: j.a.deleteStanding,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.setState({ deleteStanding: t });
                  }
                }, n.a.createElement('i', {
                  className: 'fas fa-trash-alt',
                  style: {
                    fontSize: 28,
                    paddingBottom: 8,
                    paddingTop: 10
                  }
                }), 'Delete'));
              })) : null, n.a.createElement('div', { className: j.a.qHolder }, n.a.createElement('div', { className: j.a.headerContainer }, n.a.createElement('div', { className: j.a.headerText }, 'Questions')), n.a.createElement('div', { className: j.a.sortedContainer }, n.a.createElement('div', { className: j.a.sortedText }, 'Sorted By:'), n.a.createElement('div', {
                className: j.a.sortedButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.changeSort('number');
                },
                style: {
                  color: 'number' === this.state.sortedBy ? '#fff' : '#3a3a3a',
                  backgroundColor: 'number' === this.state.sortedBy ? '#0bc2cf' : '#fff'
                }
              }, 'Question #'), n.a.createElement('div', {
                className: j.a.sortedButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.changeSort('incorrects');
                },
                style: {
                  color: 'incorrects' === this.state.sortedBy ? '#fff' : '#3a3a3a',
                  backgroundColor: 'incorrects' === this.state.sortedBy ? '#0bc2cf' : '#fff'
                }
              }, 'Incorrect %')), this.state.questions.map(function (e) {
                return n.a.createElement('div', {
                  key: e.number,
                  className: j.a.questionContainer
                }, n.a.createElement('div', { className: j.a.questionImageContainer }, e.image ? n.a.createElement(y.a, {
                  height: 130,
                  width: 170
                }, n.a.createElement('img', {
                  src: Object(D.f)(e.image),
                  alt: 'Question Background',
                  className: j.a.questionImage
                })) : null, n.a.createElement('div', {
                  className: j.a.imageNumber,
                  style: { marginLeft: e.image ? -170 : 0 }
                }, e.number)), n.a.createElement('div', { className: j.a.questionCenterContainer }, n.a.createElement('div', { className: j.a.questionText }, e.text), n.a.createElement('div', { className: j.a.answerText }, 'Answer: '.concat(Object(D.e)(e.correctAnswers)))), n.a.createElement('div', { className: j.a.questionStatsContainer }, n.a.createElement(C.Doughnut, {
                  data: ne(e.corrects, e.incorrects),
                  options: {
                    cutoutPercentage: 75,
                    maintainAspectRatio: !1,
                    responsive: !0,
                    legend: { display: !1 },
                    tooltips: { enabled: !1 },
                    animation: { duration: 0 },
                    layout: { padding: 2 }
                  }
                }), n.a.createElement('div', { className: j.a.questionStats }, ''.concat(e.corrects, '/').concat(e.incorrects + e.corrects), n.a.createElement('div', {
                  style: {
                    fontSize: 13,
                    lineHeight: '14px'
                  }
                }, 'Correct'))));
              }))) : null), this.state.deleteCheck ? n.a.createElement(O.a, {
                text: 'Do you really want to delete this HW?',
                loading: this.state.loading,
                buttonOne: {
                  text: 'Yes',
                  click: function () {
                    return e.onDeleteConfirm(!0);
                  },
                  color: 'red'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.onDeleteConfirm(!1);
                  },
                  color: 'blue'
                }
              }) : this.state.plusModal ? n.a.createElement('div', { className: N.a.modal }, n.a.createElement('div', { className: j.a.plusModalContainer }, n.a.createElement('i', {
                className: x()('fas fa-times', j.a.plusTimes),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ plusModal: !1 });
                }
              }), n.a.createElement('div', { className: j.a.plusText }, 'Get Blooket Plus For Detailed Game Reports!'), n.a.createElement(c.a, {
                className: j.a.upgradeButton,
                to: '/upgrade'
              }, 'Upgrade'))) : this.state.deleteStanding.name ? n.a.createElement(O.a, {
                text: 'Do you want to delete "'.concat(this.state.deleteStanding.name, '"?'),
                loading: this.state.loading,
                buttonOne: {
                  text: 'Yes',
                  click: this.onDeleteStanding,
                  color: 'red'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.setState({ deleteStanding: {} });
                  },
                  color: 'blue'
                }
              }) : this.state.extendPop ? n.a.createElement(O.a, {
                text: this.state.loading ? 'Processing...' : !this.state.isEnded && (this.state.plus ? re : oe) - this.state.daysLeft <= 0 ? 'Homework is already open for the max time ('.concat(this.state.plus ? re : oe, ' days).') : 'How long would you like to '.concat(this.state.isEnded ? 'reopen' : 'extend', ' this homework for (in days)?'),
                loading: this.state.loading,
                timeValue: !this.state.isEnded && (this.state.plus ? re : oe) - this.state.daysLeft <= 0 ? void 0 : this.state.extendAmount,
                timeChange: function (t) {
                  return e.setState({ extendAmount: Math.min(e.state.plus ? re - (e.state.isEnded ? 0 : e.state.daysLeft) : oe - (e.state.isEnded ? 0 : e.state.daysLeft), Math.max(0, Math.round(t.target.value))) });
                },
                onSubmit: this.extendHW,
                buttonOne: !this.state.isEnded && (this.state.plus ? re : oe) - this.state.daysLeft <= 0 ? null : {
                  text: 'Confirm',
                  click: this.extendHW,
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'Back',
                  click: function () {
                    return e.setState({ extendPop: !1 });
                  },
                  color: 'blue'
                }
              }) : this.state.standingShown.name ? n.a.createElement('div', { className: N.a.modal }, n.a.createElement('div', {
                className: j.a.modalButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ standingShown: {} });
                }
              }), n.a.createElement('div', { className: j.a.standingModalContainer }, n.a.createElement('i', {
                className: x()('fas fa-times', j.a.plusTimes),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({ standingShown: {} });
                }
              }), n.a.createElement('div', { className: j.a.modalRow }, [
                'Tower',
                'Cafe',
                'Defense'
              ].includes(this.state.type) ? n.a.createElement('i', {
                className: x()(this.state.standingShown.data.alive ? 'fas fa-user' : 'fas fa-user-slash', j.a.modalIcon),
                style: { color: this.state.standingShown.data.alive ? '#4bc22e' : '#c43a35' }
              }) : n.a.createElement(z.a, {
                name: this.state.standingShown.blook,
                className: j.a.modalBlook
              }), n.a.createElement('div', { className: j.a.modalColumn }, this.state.standingShown.name, n.a.createElement('div', { className: j.a.modalDesc }, 'Tower' === this.state.type ? 34 === this.state.standingShown.data.stage ? 'Ascended the Tower!' : 'Cleared '.concat(this.state.standingShown.data.stage, ' ').concat(1 === this.state.standingShown.data.stage ? 'Stage' : 'Stages') : 'Factory' === this.state.type ? '$'.concat(Object(D.n)(this.state.standingShown.data.cash)) : 'Cafe' === this.state.type ? 'Day '.concat(this.state.standingShown.data.day) : 'Defense' === this.state.type ? 'Round '.concat(this.state.standingShown.data.round - 1) : 'Kingdom' === this.state.type ? ''.concat(Object(D.n)(this.state.standingShown.data.guests), ' ').concat(1 === this.state.standingShown.data.guests ? 'Guest' : 'Guests') : null)), n.a.createElement('div', { className: j.a.modalStats }, n.a.createElement(C.Doughnut, {
                data: ne(this.state.standingShown.numCorrects, this.state.standingShown.numIncorrects),
                options: {
                  cutoutPercentage: 75,
                  maintainAspectRatio: !1,
                  responsive: !0,
                  legend: { display: !1 },
                  tooltips: { enabled: !1 },
                  animation: { duration: 0 },
                  layout: { padding: 0 }
                }
              }), n.a.createElement('div', { className: j.a.modalStatsText }, this.state.standingShown.numCorrects || this.state.standingShown.numIncorrects ? ''.concat(Math.round(this.state.standingShown.numCorrects / (this.state.standingShown.numCorrects + this.state.standingShown.numIncorrects) * 100), '%') : '0%', n.a.createElement('div', {
                style: {
                  fontSize: 9,
                  lineHeight: '10px'
                }
              }, 'Correct')))), n.a.createElement('div', { className: j.a.mainDivider }, '\xA0'), this.state.stdQuestions.map(function (s, o) {
                return n.a.createElement('div', {
                  key: s.number,
                  className: j.a.modalQuestionColumn,
                  style: { paddingBottom: o + 1 === e.state.stdQuestions.length ? 10 : 0 }
                }, n.a.createElement('div', { className: j.a.modalQuestionRow }, s.image ? n.a.createElement(y.a, {
                  height: 70,
                  width: 80
                }, n.a.createElement('img', {
                  src: Object(D.f)(s.image),
                  alt: 'Question Background',
                  className: j.a.modalQuestionImage
                })) : null, n.a.createElement('div', {
                  style: {
                    paddingLeft: 10,
                    fontWeight: 'bold'
                  }
                }, ''.concat(s.number, '.')), n.a.createElement('div', { className: j.a.modalQuestionText }, s.text), n.a.createElement('div', { className: j.a.modalQuestionStats }, n.a.createElement(C.Doughnut, {
                  data: ne(Object.keys(t).includes(s.number.toString()) ? t[s.number] : 0, Object.keys(a).includes(s.number.toString()) ? a[s.number] : 0),
                  options: {
                    cutoutPercentage: 75,
                    maintainAspectRatio: !1,
                    responsive: !0,
                    legend: { display: !1 },
                    tooltips: { enabled: !1 },
                    animation: { duration: 0 },
                    layout: { padding: 0 }
                  }
                }), n.a.createElement('div', { className: j.a.modalStatsText }, ''.concat(Object.keys(t).includes(s.number.toString()) ? t[s.number] : 0, '/').concat((Object.keys(t).includes(s.number.toString()) ? t[s.number] : 0) + (Object.keys(a).includes(s.number.toString()) ? a[s.number] : 0))))), o + 1 !== e.state.stdQuestions.length ? n.a.createElement('div', { className: j.a.divider }, '\xA0') : null);
              }))) : null);
            }
          }
        ]) && U(t.prototype, a), s && U(t, s), l;
      }(n.a.Component);
    ie.propTypes = {
      match: l.a.object,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.c = Object(E.c)(Object(m.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(ie)));
  },
  jV5i: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), u = a('mLw1'), _ = a('vDqi'), d = a.n(_), p = a('b6Qr'), f = a('TSYQ'), h = a.n(f), y = a('5gLy'), g = a('GIcp'), x = a.n(g), b = a('mFii'), C = a.n(b), v = a('iQ+n'), w = a('I0uU'), T = a('OFRX'), E = a('ibXt'), k = a('OHFo'), N = a('Vs+T'), S = a('1oWj'), j = a('Tg08'), I = a('e/rn'), O = a('kWb9'), B = a('TN+F'), z = a('SdQT'), D = a('anyA');
    function R(e) {
      return (R = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function P(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || q(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function H(e) {
      return function (e) {
        if (Array.isArray(e))
          return A(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || q(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function q(e, t) {
      if (e) {
        if ('string' == typeof e)
          return A(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? A(e, t) : void 0;
      }
    }
    function A(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function M(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function Q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? M(Object(a), !0).forEach(function (t) {
          W(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : M(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function W(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function G(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function J(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function L(e, t) {
      return (L = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function F(e) {
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
        var a, s = X(e);
        if (t) {
          var n = X(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return U(this, a);
      };
    }
    function U(e, t) {
      return !t || 'object' !== R(t) && 'function' != typeof t ? Y(e) : t;
    }
    function Y(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function X(e) {
      return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var K = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && L(e, t);
      }(l, e);
      var t, a, s, o, r, i = F(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          title: '',
          maxQ: 0,
          questions: [],
          settings: {
            raceEvery: 5,
            energy: 5,
            instruct: !0,
            mode: '',
            type: '',
            method: '',
            amount: 7,
            team: !0,
            glitchesOn: !0,
            lateJoin: !0,
            randomNames: !1,
            map: 'meadow'
          },
          numQ: 25,
          randomOrder: !1,
          loading: !0,
          ready: !1,
          redirect: !1
        }, t.onHost = t.onHost.bind(Y(t)), t.onAmountUpdate = t.onAmountUpdate.bind(Y(t)), t.setNumQ = t.setNumQ.bind(Y(t)), t.name = '', t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, a, s = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.host && this.props.host.settings && this.props.id) {
                    e.next = 4;
                    break;
                  }
                  return this.props.deleteHost(), e.abrupt('return');
                case 4:
                  return this.here = !0, this.props.host.settings && this.props.host.questions && (t = Q({}, this.props.host.settings), this.props.deleteHost(), this.props.setSettings(t)), this.setState({
                    settings: Q(Q({}, this.state.settings), {}, {
                      amount: 'Racing' === this.props.host.settings.type ? 30 : 'Snow' === this.props.host.settings.type ? 10 : 7,
                      type: this.props.host.settings.type,
                      method: this.props.host.settings.method,
                      mode: [
                        'Factory',
                        'Cafe',
                        'Gold',
                        'Hack',
                        'Toy',
                        'Defense'
                      ].includes(this.props.host.settings.type) ? 'Time' : 'Solo'
                    })
                  }), e.next = 9, this.props.user.getData();
                case 9:
                  if (a = e.sent) {
                    e.next = 12;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 12:
                  d.a.get('/api/games', { params: { gameId: this.props.id } }).then(function (e) {
                    if (s.here)
                      if (e.data.questions) {
                        var t = e.data.questions.map(function (e) {
                          return {
                            text: e.question,
                            timeLimit: parseInt(e.timeLimit, 10),
                            answers: e.answers,
                            correctAnswers: e.correctAnswers,
                            number: e.number,
                            stdNumber: e.number,
                            random: e.random,
                            image: e.image
                          };
                        });
                        s.name = a.name, s.props.addHostQuestions(t, a.name), s.setState({
                          loading: !1,
                          ready: !0,
                          title: e.data.title,
                          questions: H(t),
                          maxQ: e.data.questions.length,
                          numQ: Math.min(25, e.data.questions.length)
                        });
                      } else
                        s.setState({
                          redirect: !0,
                          ready: !0
                        });
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 13:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, s) {
              var n = o.apply(e, t);
              function r(e) {
                G(n, a, s, r, i, 'next', e);
              }
              function i(e) {
                G(n, a, s, r, i, 'throw', e);
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
          key: 'onHost',
          value: function () {
            var e = this.state.settings;
            if ('Classic' === e.type) {
              var t = JSON.parse(JSON.stringify(this.state.questions));
              if (this.state.randomOrder) {
                t = Object(B.w)(t);
                for (var a = 0; a < t.length; a++)
                  t[a].number = a + 1;
              }
              t.sort(function (e, t) {
                return e.number - t.number;
              }), t = t.slice(0, this.state.numQ), this.props.addHostQuestions(t, this.name), this.props.setSettings({
                type: e.type,
                mode: 'Solo',
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              });
            } else
              'Racing' === e.type ? this.props.setSettings({
                type: e.type,
                mode: 'Solo',
                amount: e.amount,
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : 'Factory' === e.type ? this.props.setSettings({
                mode: e.mode,
                type: e.type,
                amount: e.amount,
                glitchesOn: e.glitchesOn,
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : 'Cafe' === e.type ? this.props.setSettings({
                mode: e.mode,
                type: e.type,
                amount: e.amount,
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : [
                'Gold',
                'Hack',
                'Toy'
              ].includes(e.type) ? this.props.setSettings({
                instruct: e.instruct,
                type: e.type,
                amount: e.amount,
                mode: e.mode,
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : 'Defense' === e.type ? this.props.setSettings({
                mode: e.mode,
                type: e.type,
                map: e.map,
                amount: e.amount,
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : 'Snow' === e.type ? this.props.setSettings({
                instruct: e.instruct,
                type: e.type,
                time: e.amount,
                mode: 'Teams',
                lateJoin: e.lateJoin,
                randomNames: e.randomNames
              }) : this.props.setSettings({
                instruct: e.instruct,
                mode: e.mode,
                type: e.type,
                energy: e.energy,
                randomNames: e.randomNames
              });
            this.props.history.push('/host/join');
          }
        },
        {
          key: 'onAmountUpdate',
          value: function (e) {
            this.setState({ settings: Q(Q({}, this.state.settings), {}, { amount: 'Time' === this.state.settings.mode ? Math.min(Math.max(1, e.target.value), 30) : Math.min(Math.max(1, e.target.value), 1000000000000) }) });
          }
        },
        {
          key: 'setNumQ',
          value: function (e) {
            this.setState({ numQ: Math.max(Math.min(e, this.state.maxQ), 1) });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return !this.props.host || !this.props.host.settings || !this.props.id || this.state.ready && this.state.redirect ? n.a.createElement(u.a, { to: '/dashboard' }) : n.a.createElement('div', {
              className: p.isMobile ? x.a.mBody : x.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, n.a.createElement(v.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), n.a.createElement('div', {
              className: C.a.smallScreen,
              style: {
                width: '100%',
                textAlign: 'center',
                flexDirection: 'column',
                display: 0 === this.state.questions.length && this.state.ready ? 'block' : null
              }
            }, n.a.createElement('div', { className: C.a.nothingText }, 0 === this.state.questions.length ? 'Can\'t host a set with 0 questions' : 'Hosting Not Available on Small Screens'), n.a.createElement(c.a, {
              className: C.a.linkText,
              to: '/dashboard'
            }, 'Go Back')), n.a.createElement('div', {
              className: h()(C.a.center, C.a.bigScreen),
              style: { display: 0 === this.state.questions.length && this.state.ready ? 'none' : null }
            }, n.a.createElement('div', { className: C.a.header }, 'Blooket'), n.a.createElement('div', { className: C.a.mainContainer }, n.a.createElement('div', { className: C.a.titleText }, this.state.title), this.state.loading ? n.a.createElement(w.a, null) : n.a.createElement('div', {
              className: C.a.hostButton,
              role: 'button',
              tabIndex: 0,
              onClick: this.onHost
            }, n.a.createElement('div', { className: C.a.hostText }, 'Host Now')), 'Racing' === this.state.settings.type ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.settingsText }, 'Racing Settings'), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(k.a, {
              title: 'Number of Questions',
              val: this.state.settings.amount,
              max: 70,
              onSet: function (t) {
                return e.onAmountUpdate({ target: { value: Math.min(t, 70) } });
              }
            })) : 'Classic' === this.state.settings.type ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.settingsText }, 'Classic Settings'), n.a.createElement(T.a, {
              title: 'Random Question Order',
              checked: this.state.randomOrder,
              onCheck: function () {
                return e.setState({ randomOrder: !e.state.randomOrder });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(k.a, {
              title: 'Number of Questions',
              val: this.state.numQ,
              max: this.state.maxQ,
              onSet: function (t) {
                return e.setNumQ(t);
              }
            })) : 'Factory' === this.state.settings.type || 'Cafe' === this.state.settings.type ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.modeContainer }, n.a.createElement(N.a, {
              title: 'Time',
              desc: 'The game ends after the set time has passed',
              icon: 'fas fa-stopwatch',
              selected: 'Time' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Time',
                    amount: 7
                  })
                });
              }
            }), n.a.createElement('div', { style: { width: '2vw' } }), n.a.createElement(N.a, {
              title: 'Cash',
              desc: 'The game ends after a player reaches the set cash amount',
              icon: 'fas fa-dollar-sign',
              selected: 'Cash' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Cash',
                    amount: 'Cafe' === e.state.settings.type ? 100000 : 1000000
                  })
                });
              }
            })), n.a.createElement(S.a, {
              icon: 'Cash' === this.state.settings.mode ? 'far fa-money-bill-alt' : 'far fa-clock',
              title: 'Cash' === this.state.settings.mode ? 'Cash Goal ($)' : 'Time (minutes)',
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount
            }), 'Factory' === this.state.settings.type ? n.a.createElement('div', { className: C.a.settingsText }, ''.concat('Factory' === this.state.settings.type ? 'Factory' : 'Café', ' Settings')) : null, 'Factory' === this.state.settings.type ? n.a.createElement(T.a, {
              title: 'Allow Glitches (Power-Ups)',
              checked: this.state.settings.glitchesOn,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { glitchesOn: !e.state.settings.glitchesOn }) });
              }
            }) : null, n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { style: { height: 30 } })) : [
              'Gold',
              'Toy',
              'Hack'
            ].includes(this.state.settings.type) ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.modeContainer }, n.a.createElement(N.a, {
              title: 'Time',
              desc: 'The game ends after the set time has passed',
              icon: 'fas fa-stopwatch',
              selected: 'Time' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Time',
                    amount: 7
                  })
                });
              }
            }), n.a.createElement('div', { style: { width: '2vw' } }), 'Gold' === this.state.settings.type ? n.a.createElement(N.a, {
              title: 'Gold',
              desc: 'The game ends after a player reaches the set gold amount',
              image: j.a,
              selected: 'Amount' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Amount',
                    amount: 1000000
                  })
                });
              }
            }) : 'Toy' === this.state.settings.type ? n.a.createElement(N.a, {
              title: 'Toy',
              desc: 'The game ends after a player reaches the set amount of toys',
              image: I.a,
              selected: 'Amount' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Amount',
                    amount: 1000000
                  })
                });
              }
            }) : n.a.createElement(N.a, {
              title: 'Crypto',
              desc: 'The game ends after a player reaches the set amount of crypto',
              icon: 'fab fa-bitcoin',
              selected: 'Amount' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Amount',
                    amount: 10000000
                  })
                });
              }
            })), n.a.createElement(S.a, {
              icon: 'Time' === this.state.settings.mode ? 'far fa-clock' : 'fas fa-hashtag',
              title: 'Time' === this.state.settings.mode ? 'Time (minutes)' : 'Gold' === this.state.settings.type ? 'Gold Goal' : 'Toy' === this.state.settings.type ? 'Toys Goal' : 'Crypto Goal',
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount
            }), n.a.createElement('div', { className: C.a.settingsText }, 'Gold' === this.state.settings.type ? 'Gold Quest Settings' : 'Toy' === this.state.settings.type ? 'Toy Workshop Settings' : 'Crypto Hack'), n.a.createElement(T.a, {
              title: 'Show Instructions',
              checked: this.state.settings.instruct,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { instruct: !e.state.settings.instruct }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { style: { height: 30 } })) : 'Defense' === this.state.settings.type ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.modeContainer }, n.a.createElement(N.a, {
              title: 'Time',
              desc: 'The game ends after the set time has passed (Recommended)',
              icon: 'fas fa-stopwatch',
              selected: 'Time' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Time',
                    amount: 7
                  })
                });
              }
            }), n.a.createElement('div', { style: { width: '2vw' } }), n.a.createElement(N.a, {
              title: 'Damage',
              desc: 'The game ends after a player reaches the set damage amount',
              icon: 'fas fa-splotch',
              selected: 'Amount' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({
                  settings: Q(Q({}, e.state.settings), {}, {
                    mode: 'Amount',
                    amount: 7500
                  })
                });
              }
            })), n.a.createElement(S.a, {
              icon: 'Time' === this.state.settings.mode ? 'far fa-clock' : 'fas fa-hashtag',
              title: 'Time' === this.state.settings.mode ? 'Time (minutes)' : 'Damage Goal',
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount
            }), n.a.createElement('div', { className: C.a.settingsText }, 'Map Selection'), n.a.createElement('div', { className: C.a.mapRow }, Object.entries(O.a).map(function (t) {
              var a = P(t, 2), s = a[0], o = a[1];
              return n.a.createElement('div', {
                className: h()(C.a.mapButton, W({}, C.a.mapButtonSelected, s === e.state.settings.map)),
                key: s,
                role: 'button',
                tabIndex: 0,
                onClick: o.locked ? function () {
                } : function () {
                  return e.setState({ settings: Q(Q({}, e.state.settings), {}, { map: s }) });
                }
              }, n.a.createElement('div', { style: { position: 'relative' } }, n.a.createElement('img', {
                src: o.img,
                alt: o.name,
                className: C.a.mapImg,
                draggable: !1
              }), o.locked ? n.a.createElement('div', { className: C.a.lockedMap }, n.a.createElement('i', { className: 'fas fa-lock' })) : null), o.name);
            })), n.a.createElement('div', { className: C.a.settingsText }, 'Tower Defense Settings'), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { style: { height: 30 } })) : 'Snow' === this.state.settings.type ? n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.modeContainer }, n.a.createElement(N.a, {
              title: 'Snowball Fight',
              desc: 'The game ends after one team has destroyed a snow fort or the time limit has expired',
              icon: 'far fa-snowflake',
              selected: !0,
              onSelect: function () {
              }
            })), n.a.createElement(S.a, {
              icon: 'far fa-clock',
              title: 'Max Time (minutes)',
              onChange: this.onAmountUpdate,
              value: this.state.settings.amount
            }), n.a.createElement('div', { className: C.a.settingsText }, 'Snowball Fight Settings'), n.a.createElement(T.a, {
              title: 'Show Instructions',
              checked: this.state.settings.instruct,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { instruct: !e.state.settings.instruct }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Allow Late Joining',
              checked: this.state.settings.lateJoin,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { lateJoin: !e.state.settings.lateJoin }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { style: { height: 30 } })) : n.a.createElement('div', { className: C.a.keepCentered }, n.a.createElement('div', { className: C.a.modeContainer }, n.a.createElement(N.a, {
              title: 'Solo',
              desc: 'Everyone competes for themselves',
              icon: 'fas fa-user',
              selected: 'Solo' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { mode: 'Solo' }) });
              }
            }), n.a.createElement('div', { style: { width: '2vw' } }), n.a.createElement(N.a, {
              title: 'Teams',
              desc: 'Random teams compete together (4+ players)',
              icon: 'fas fa-users',
              selected: 'Teams' === this.state.settings.mode,
              onSelect: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { mode: 'Teams' }) });
              }
            })), n.a.createElement('div', { className: C.a.settingsText }, 'Battle Royale Settings'), n.a.createElement(T.a, {
              title: 'Show Instructions',
              checked: this.state.settings.instruct,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { instruct: !e.state.settings.instruct }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(E.a, {
              title: 'Starting Energy For Each '.concat('Solo' === this.state.settings.mode ? 'Player' : 'Team'),
              choices: [
                1,
                3,
                5,
                7,
                10
              ],
              selected: this.state.settings.energy,
              onSelect: function (t) {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { energy: t }) });
              }
            }), n.a.createElement('div', { className: C.a.settingDivider }), n.a.createElement(T.a, {
              title: 'Use Random Names',
              checked: this.state.settings.randomNames,
              onCheck: function () {
                return e.setState({ settings: Q(Q({}, e.state.settings), {}, { randomNames: !e.state.settings.randomNames }) });
              }
            }), n.a.createElement('div', { style: { height: 30 } })))));
          }
        }
      ]) && J(t.prototype, a), s && J(t, s), l;
    }(n.a.Component);
    K.propTypes = {
      host: l.a.shape({
        settings: l.a.object,
        questions: l.a.array,
        id: l.a.number
      }),
      id: l.a.string,
      deleteHost: l.a.func.isRequired,
      setSettings: l.a.func.isRequired,
      addHostQuestions: l.a.func.isRequired,
      history: l.a.object.isRequired,
      firebase: l.a.object,
      user: l.a.object
    };
    t.a = Object(D.c)(Object(m.a)(Object(r.b)(function (e) {
      return {
        host: e.hosts.host,
        id: e.hosts.id
      };
    }, function (e) {
      return Object(o.b)({
        deleteHost: y.c,
        addHostQuestions: y.b,
        setSettings: y.d
      }, e);
    })(Object(z.d)(K))));
  },
  lywl: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return j;
    });
    var s = a('q1tI'), n = a.n(s), o = a('/eHF'), r = a.n(o), i = a('mFsd'), l = a.n(i), c = a('2iEm'), m = a('TSYQ'), u = a.n(m), _ = a('b6Qr'), d = a('GIcp'), p = a.n(d), f = a('20R2'), h = a.n(f), y = a('06tj'), g = a('YG1D'), x = a('ZdAu'), b = a('iQ+n'), C = a('ow7w');
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function w(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function T(e, t) {
      return (T = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function E(e) {
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
        var a, s = N(e);
        if (t) {
          var n = N(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return k(this, a);
      };
    }
    function k(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var S = [
        C.a.Raccoon,
        C.a.Turtle,
        C.a.Goldfish,
        C.a.Cow,
        C.a.Chick,
        C.a.Pig,
        C.a.Chicken,
        C.a.Horse,
        C.a.Sheep,
        C.a.Cat,
        C.a.Dog,
        C.a.Hedgehog,
        C.a.Owl
      ], j = function (e) {
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
        }(i, e);
        var t, a, s, o = E(i);
        function i(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, i), (t = o.call(this, e)).state = {}, t;
        }
        return t = i, (a = [{
            key: 'render',
            value: function () {
              return n.a.createElement('div', {
                className: u()(_.isMobile ? p.a.mBody : p.a.body, (e = {}, t = h.a.pageContainer, a = _.isMobile, t in e ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = a, e))
              }, n.a.createElement(b.a, {
                title: 'Blooket',
                desc: 'Blooket is an exciting new take on the modern classroom review game. It aims to match action with education to create the ultimate learning experience!'
              }), n.a.createElement('div', { className: h.a.holder }, n.a.createElement('div', { className: _.isMobile ? h.a.mHeaderContainer : h.a.headerContainer }, n.a.createElement('img', {
                src: 'https://blooket.s3.us-east-2.amazonaws.com/images/HomeBlooks.png',
                alt: 'Blooks',
                className: _.isMobile ? h.a.mHeaderImage : h.a.headerImage,
                draggable: !1
              }), n.a.createElement('div', { className: _.isMobile ? h.a.mHeaderSide : h.a.headerSide }), n.a.createElement('div', { className: _.isMobile ? h.a.mTopHeaderContainer : h.a.topHeaderContainer }, n.a.createElement('div', { className: h.a.logoText }, 'Blooket'), n.a.createElement(c.a, {
                className: _.isMobile ? h.a.mJoinButton : h.a.joinButton,
                to: '/play'
              }, 'Join a Game')), n.a.createElement('div', { className: _.isMobile ? h.a.mWelcomeContainer : h.a.welcomeContainer }, n.a.createElement('div', { className: _.isMobile ? h.a.mWelcomeText : h.a.welcomeText }, 'Level Up', n.a.createElement('br', null), 'Classroom', n.a.createElement('br', null), 'Engagement'), n.a.createElement('div', { className: _.isMobile ? h.a.mWelcomeDesc : h.a.welcomeDesc }, 'We\'re matching action with education', n.a.createElement('br', null), 'to create the ultimate learning experience!'), n.a.createElement(c.a, {
                className: _.isMobile ? h.a.mWelcomeButton : h.a.welcomeButton,
                to: '/signup'
              }, 'Get Started'), n.a.createElement('div', {
                className: _.isMobile ? h.a.mPronounceButton : h.a.pronounceButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return new Audio('https://res.cloudinary.com/blooket/video/upload/v1566667334/Audio/Blooket.mp3').play();
                }
              }, n.a.createElement('i', { className: 'fas fa-volume-up' }), '\xA0 Pronunciation'))), n.a.createElement('div', { className: _.isMobile ? h.a.mTopButtonContainer : h.a.topButtonContainer }, n.a.createElement(c.a, {
                className: _.isMobile ? h.a.mLoginButton : h.a.loginButton,
                to: '/login'
              }, 'Login'), n.a.createElement(c.a, {
                className: h.a.signUpButton,
                to: '/signup'
              }, 'Sign Up')), n.a.createElement('div', { className: h.a.sloganHolder }, n.a.createElement('div', { className: h.a.lowerBackground }), n.a.createElement('div', { className: h.a.sloganText }, 'Learning Reimagined'), n.a.createElement('div', { className: h.a.sloganDescText }, 'Welcome to the World of Blooket: a new take on trivia and review games!', n.a.createElement('br', null), '\n                The way it works is that a teacher/host picks a question set and a unique game mode.\n                Then, we generate a code that players can use to join the game on their own devices.\n                After the game starts, players will answer questions to help them win.\n                That\u2019s where the fun starts, because we offer a variety of games to keep students engaged and excited!\n              ')), n.a.createElement('div', { className: h.a.gameplayContainer }, n.a.createElement('div', { className: h.a.gameplayColumnContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('div', { className: h.a.gameplayColumnContainerOne }, n.a.createElement('div', { className: h.a.gameplayImageWrapper }, n.a.createElement('img', {
                src: C.a.Goldfish,
                alt: 'Goldfish',
                className: h.a.gameplayImage
              })), n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Motivate Students'), n.a.createElement('div', { className: h.a.gameplayText }, '\n                      Students are encouraged to participate in games with rewards for answering questions and\n                      exploring new methods of learning. Overcoming our challenges drives students to perform well while reviewing.\n                    '))), n.a.createElement(r.a, {
                bottom: !_.isMobile,
                right: _.isMobile,
                delay: _.isMobile ? 100 : 300
              }, n.a.createElement('div', { className: h.a.gameplayColumnContainerTwo }, n.a.createElement('div', { className: h.a.gameplayImageWrapper }, n.a.createElement('img', {
                src: C.a.Chick,
                alt: 'Chick',
                className: h.a.gameplayImage
              })), n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Teach Effortlessly'), n.a.createElement('div', { className: h.a.gameplayText }, '\n                      Question sets can be painlessly imported or created easily with our powerful Set Builder.\n                      You can also explore our incredible collection of sets built by other amazing users on the Discover page.\n                    '))), n.a.createElement(r.a, {
                right: !_.isMobile,
                left: _.isMobile,
                delay: _.isMobile ? 100 : 600
              }, n.a.createElement('div', { className: h.a.gameplayColumnContainerThree }, n.a.createElement('div', { className: h.a.gameplayImageWrapper }, n.a.createElement('img', {
                src: C.a.Cow,
                alt: 'Cow',
                className: h.a.gameplayImage
              })), n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Customize Freely'), n.a.createElement('div', { className: h.a.gameplayText }, '\n                      Ditch the old, redundant classroom review game and try out our variety of unique, engaging game modes.\n                      Also, edit game settings with a variety of options to truly make Blooket the perfect tool for you.\n                    '))))), n.a.createElement(r.a, {
                bottom: !0,
                delay: 100
              }, n.a.createElement('div', { className: h.a.gameplayBottomContainer }, _.isMobile ? n.a.createElement('div', { className: h.a.gameplayImageWrapper }, n.a.createElement('img', {
                src: C.a.Raccoon,
                alt: 'Raccoon',
                className: h.a.gameplayImage
              })) : null, n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Join The Community'), n.a.createElement('div', { className: h.a.gameplayText }, 'Our personal favorite part of Blooket is the community. Our users are modern educators and students that are working hard to innovate and change education. They fill the site with fresh content and make our free community events awesome in schools around the world!'))), _.isMobile ? n.a.createElement('div', { className: h.a.mBlookContainer }, n.a.createElement(r.a, { big: !0 }, n.a.createElement('div', { className: h.a.mBlookTextContainer }, n.a.createElement('div', { className: h.a.blookHeaderText }, 'What\'s a Blook?'), n.a.createElement('div', { className: h.a.blookText }, 'It\'s a friendly little block that loves to play!', n.a.createElement('br', null), 'Blooks represent players and there are so many waiting to be unlocked.')))) : n.a.createElement('div', { className: h.a.blookContainer }, n.a.createElement('div', {
                className: h.a.particleContainer,
                style: { opacity: _.isMobile ? 0 : 'auto' }
              }, n.a.createElement(r.a, {
                big: !0,
                delay: 250
              }, n.a.createElement(l.a, {
                height: 540,
                width: '100%',
                style: { zIndex: -1 },
                params: {
                  particles: {
                    number: {
                      value: 12,
                      density: {
                        enable: !0,
                        value_area: 700
                      }
                    },
                    shape: {
                      type: 'images',
                      images: S.map(function (e) {
                        return {
                          src: e,
                          height: 115,
                          width: 100
                        };
                      })
                    },
                    opacity: {
                      value: 1,
                      random: !1,
                      anim: {
                        enable: !1,
                        speed: 1,
                        opacity_min: 0.6,
                        sync: !1
                      }
                    },
                    size: {
                      value: 60,
                      anim: {
                        enable: !1,
                        speed: 40,
                        size_min: 0.1,
                        sync: !1
                      }
                    },
                    move: {
                      enable: !0,
                      speed: 2,
                      direction: 'none',
                      random: !1,
                      straight: !1,
                      out_mode: 'out',
                      bounce: !1,
                      attract: {
                        enable: !1,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  retina_detect: !1
                }
              }))), n.a.createElement(r.a, { big: !0 }, n.a.createElement('div', { className: h.a.blookTextContainer }, n.a.createElement('div', { className: h.a.blookHeaderText }, 'What\'s a Blook?'), n.a.createElement('div', { className: h.a.blookText }, 'It\'s a friendly little block that loves to play!', n.a.createElement('br', null), 'Blooks represent players and there are so many waiting to be unlocked.')))), n.a.createElement(r.a, {
                big: !0,
                delay: 100
              }, n.a.createElement('div', { className: h.a.whyContainer }, n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Our Mission'), n.a.createElement('div', { className: h.a.gameplayText }, '\n                  At Blooket, we are striving to change the way students learn.\n                  While reading and studying an oversized textbook is certainly one option,\n                  we like to opt for a far more fun alternative. However, Blooket isn\'t just fun,\n                  it\'s also incredibly effective. By creating memorable experiences with classroom content,\n                  students learn the information without even noticing (and without paper cuts).\n                '))), n.a.createElement('div', { className: h.a.howHolder }, n.a.createElement(r.a, { big: !0 }, n.a.createElement('div', { className: h.a.howBigHeaderText }, 'How It Works')), n.a.createElement('div', { className: h.a.howContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('i', {
                className: u()('fas fa-list-ul', h.a.howIcon),
                style: { color: '#ffa31e' }
              })), n.a.createElement(r.a, { right: !0 }, n.a.createElement('div', { className: h.a.howSide }, n.a.createElement('div', { className: h.a.howHeaderRow }, n.a.createElement('div', {
                className: h.a.howBox,
                style: { backgroundColor: '#ffa31e' }
              }, '1'), n.a.createElement('div', { className: h.a.howHeaderText }, 'Choose a Question Set')), n.a.createElement('div', { className: h.a.howText }, '\n                    Whether you create your own question set, import one with our convertor tools, or find one in our Discover database,\n                    we\'re certain that you\'ll have the perfect set for your class.\n                    ')))), n.a.createElement('div', { className: h.a.howContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('i', {
                className: u()('fas fa-gamepad', h.a.howIcon),
                style: { color: '#3378ff' }
              })), n.a.createElement(r.a, { right: !0 }, n.a.createElement('div', { className: h.a.howSide }, n.a.createElement('div', { className: h.a.howHeaderRow }, n.a.createElement('div', {
                className: h.a.howBox,
                style: { backgroundColor: '#3378ff' }
              }, '2'), n.a.createElement('div', { className: h.a.howHeaderText }, 'Select a Game Mode')), n.a.createElement('div', { className: h.a.howText }, '\n                      There\'s always a variety of unique game modes to choose from that are sure to engage students.\n                      Also, make sure to keep an eye open for limited time seasonal and event modes.\n                    ')))), n.a.createElement('div', { className: h.a.howContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('i', {
                className: u()('fas fa-link', h.a.howIcon),
                style: { color: '#ff462b' }
              })), n.a.createElement(r.a, { right: !0 }, n.a.createElement('div', { className: h.a.howSide }, n.a.createElement('div', { className: h.a.howHeaderRow }, n.a.createElement('div', {
                className: h.a.howBox,
                style: { backgroundColor: '#ff462b' }
              }, '3'), n.a.createElement('div', { className: h.a.howHeaderText }, 'Host & Join')), n.a.createElement('div', { className: h.a.howText }, '\n                      A teacher simply hosts a game on a large screen in front of the class and\n                      students join in and compete on their own devices with the Game ID.\n                    ')))), n.a.createElement('div', { className: h.a.howContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('i', {
                className: u()('fas fa-play-circle', h.a.howIcon),
                style: { color: '#00cf77' }
              })), n.a.createElement(r.a, { right: !0 }, n.a.createElement('div', { className: h.a.howSide }, n.a.createElement('div', { className: h.a.howHeaderRow }, n.a.createElement('div', {
                className: h.a.howBox,
                style: { backgroundColor: '#00cf77' }
              }, '4'), n.a.createElement('div', { className: h.a.howHeaderText }, 'Play to Review')), n.a.createElement('div', { className: h.a.howText }, '\n                      Throughout a game session, students will not only be having a great time,\n                      but they\'ll also be answering questions to review the content being taught in class.\n                    ')))), n.a.createElement('div', { className: h.a.howContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('i', {
                className: u()('fas fa-chalkboard-teacher', h.a.howIcon),
                style: { color: '#ff6969' }
              })), n.a.createElement(r.a, { right: !0 }, n.a.createElement('div', { className: h.a.howSide }, n.a.createElement('div', { className: h.a.howHeaderRow }, n.a.createElement('div', {
                className: h.a.howBox,
                style: { backgroundColor: '#ff6969' }
              }, '5'), n.a.createElement('div', { className: h.a.howHeaderText }, 'Analyze the Results')), n.a.createElement('div', { className: h.a.howText }, '\n                      With detailed score reports and question analysis, teachers can easily understand how their\n                      students are performing and identify areas that they may need to review again.\n                    '))))), n.a.createElement(r.a, {
                big: !0,
                delay: 100
              }, n.a.createElement('div', { className: h.a.whyContainer }, n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'What Are You Waiting For?'), n.a.createElement('div', { className: h.a.gameplayText }, 'If you have any questions, send us an email at ', n.a.createElement('u', null, 'contact-us@blooket.com'), '. Otherwise, begin your Blooket journey today and see how it transforms your classroom!'), n.a.createElement(c.a, {
                className: h.a.waitButton,
                to: '/signup'
              }, 'Get Started'))), n.a.createElement('div', { className: h.a.howHolder }, n.a.createElement(r.a, { big: !0 }, n.a.createElement('div', { className: h.a.howBigHeaderText }, 'What\'s Coming Up?')), n.a.createElement('div', { className: h.a.upcomingFeaturesContainer }, n.a.createElement(r.a, { left: !0 }, n.a.createElement('div', { className: h.a.featureContainer }, n.a.createElement('div', { className: h.a.featureImageWrapper }, n.a.createElement('img', {
                src: y.a,
                alt: 'Trophy',
                className: h.a.featureImage,
                draggable: !1
              })), n.a.createElement('div', { className: h.a.featureHeaderText }, 'Events'), n.a.createElement('div', { className: h.a.featureText }, '\n                      The Blooket season is filled with limited time events that may include new game modes,\n                      Blooks, giveaways, and tournaments. Keep an eye open for hints about the next event.\n                    '))), n.a.createElement(r.a, {
                big: !0,
                delay: _.isMobile ? 100 : 300
              }, n.a.createElement('div', { className: h.a.featureContainer }, n.a.createElement('div', { className: h.a.featureImageWrapper }, n.a.createElement('img', {
                src: g.a,
                alt: 'Box of Stuff',
                className: h.a.featureImage,
                draggable: !1
              })), n.a.createElement('div', { className: h.a.featureHeaderText }, 'More Stuff'), n.a.createElement('div', { className: h.a.featureText }, '\n                      Come on, we can\'t just give away everything that\'s going on here at Blooket.\n                      Just know that we\'re working on a lot and we can\'t wait to show you all the new, incredible stuff that lies ahead.\n                    '))), n.a.createElement(r.a, {
                right: !0,
                delay: _.isMobile ? 100 : 600
              }, n.a.createElement('div', { className: h.a.featureContainer }, n.a.createElement('div', { className: h.a.featureImageWrapper }, n.a.createElement('img', {
                src: x.a,
                alt: 'Gears',
                className: h.a.featureImage,
                draggable: !1
              })), n.a.createElement('div', { className: h.a.featureHeaderText }, 'Improvement'), n.a.createElement('div', { className: h.a.featureText }, '\n                      We love when our community provides feedback on how to improve Blooket as a powerful learning tool.\n                      Let us know your suggestion and you might see it on the site soon.\n                    '))))), n.a.createElement(r.a, { big: !0 }, n.a.createElement('div', { className: h.a.createdContainer }, n.a.createElement('div', { className: h.a.gameplayHeaderText }, 'Tommy & Ben Stewart'), n.a.createElement('div', { className: h.a.annaText }, 'Blooks by Anna Lapinsh'), n.a.createElement('div', { className: h.a.finalText }, 'Copyright \xA9 2021 Blooket LLC. All Rights Reserved.'), n.a.createElement('div', { className: h.a.boringText }, n.a.createElement(c.a, {
                to: '/privacy',
                style: {
                  margin: '0 15px',
                  color: '#fff'
                }
              }, 'Privacy Policy'), n.a.createElement(c.a, {
                to: '/terms',
                style: {
                  margin: '0 15px',
                  color: '#fff'
                }
              }, 'Terms of Service'))))));
              var e, t, a;
            }
          }]) && w(t.prototype, a), s && w(t, s), i;
      }(n.a.Component);
  },
  'm+IK': function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), o = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), m = a('wIs1'), u = a('mLw1'), _ = a('TSYQ'), d = a.n(_), p = a('vDqi'), f = a.n(p), h = a('b6Qr'), y = a('EEzQ'), g = a('5gLy'), x = a('GIcp'), b = a.n(x), C = a('LMWO'), v = a.n(C), w = a('iQ+n'), T = a('rDSi'), E = a('TN+F'), k = a('SdQT'), N = a('anyA');
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function j(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, o = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, o = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw o;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return I(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return I(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function I(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function O(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function B(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? O(Object(a), !0).forEach(function (t) {
          z(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function z(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function D(e, t, a, s, n, o, r) {
      try {
        var i = e[o](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function R(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function P(e, t) {
      return (P = Object.setPrototypeOf || function (e, t) {
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
        var a, s = M(e);
        if (t) {
          var n = M(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return q(this, a);
      };
    }
    function q(e, t) {
      return !t || 'object' !== S(t) && 'function' != typeof t ? A(e) : t;
    }
    function A(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function M(e) {
      return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var Q = function (e) {
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
      }(l, e);
      var t, a, s, o, r, i = H(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          settings: {
            type: '',
            method: '',
            transition: !1
          },
          isBen: !1,
          plus: !1
        }, t.onPlay = t.onPlay.bind(A(t)), t.toSettings = t.toSettings.bind(A(t)), t.selectMode = t.selectMode.bind(A(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (o = regeneratorRuntime.mark(function e() {
            var t, a = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return this.here = !0, this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), Object(E.i)('id') && this.props.addGameId(Object(E.i)('id')), e.next = 6, this.props.user.getData();
                case 6:
                  if (t = e.sent) {
                    e.next = 9;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 9:
                  this.setState({
                    isBen: (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : [
                      'Bot',
                      'test'
                    ].includes(t.name))
                  }), f.a.put('/api/users/plan', { name: t.name }).then(function (e) {
                    a.here && a.setState({ plus: 'Starter' !== e.data.plan });
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 11:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, s) {
              var n = o.apply(e, t);
              function r(e) {
                D(n, a, s, r, i, 'next', e);
              }
              function i(e) {
                D(n, a, s, r, i, 'throw', e);
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
            this.here = !1, clearTimeout(this.timeout);
          }
        },
        {
          key: 'onPlay',
          value: function (e) {
            var t = this;
            this.setState({
              transition: !0,
              settings: B(B({}, this.state.settings), {}, { method: e })
            }, function () {
              return t.toSettings();
            });
          }
        },
        {
          key: 'toSettings',
          value: function () {
            var e = this;
            this.timeout = setTimeout(function () {
              e.props.setSettings(e.state.settings), 'Assign' === e.state.settings.method ? e.props.history.push('/host/assign') : e.props.history.push('/host/settings');
            }, 500);
          }
        },
        {
          key: 'selectMode',
          value: function (e) {
            this.setState({ settings: { type: e } });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return Object(E.i)('id') ? n.a.createElement('div', {
              className: h.isMobile ? b.a.mBody : b.a.body,
              style: { backgroundColor: '#0bc2cf' }
            }, n.a.createElement(w.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), n.a.createElement('div', {
              style: {
                width: '100%',
                textAlign: 'center'
              },
              className: v.a.smallScreen
            }, n.a.createElement('div', { className: v.a.nothingText }, 'Hosting Not Available on Small Screens'), n.a.createElement(c.a, {
              className: v.a.linkText,
              to: '/dashboard'
            }, 'Go Back')), n.a.createElement('div', { className: d()(v.a.bigScreen, z({}, v.a.invisible, this.state.transition)) }, n.a.createElement('div', { className: v.a.modesArray }, Object.entries(T.a).map(function (t) {
              var a = j(t, 2), s = a[0];
              return a[1].active || e.state.isBen && ['Hack'].includes(s) ? n.a.createElement('div', {
                className: v.a.modeContainer,
                role: 'button',
                tabIndex: 0,
                key: s,
                onClick: T.a[s].plusOnly && !e.state.plus ? function () {
                  return e.props.history.push('/upgrade');
                } : function () {
                  return e.selectMode(s);
                }
              }, n.a.createElement('img', {
                src: Object(E.d)(T.a[s].img),
                alt: s,
                className: v.a.modeImage,
                draggable: 'false'
              }), T.a[s].name.split(' ').length > 1 ? n.a.createElement('div', { className: v.a.modeTextTwo }, T.a[s].name.split(' ')[0], n.a.createElement('br', null), T.a[s].name.split(' ').length > 2 ? ''.concat(T.a[s].name.split(' ')[1], ' ').concat(T.a[s].name.split(' ')[2]) : T.a[s].name.split(' ')[1]) : n.a.createElement('div', { className: v.a.modeText }, T.a[s].name), T.a[s].plusOnly && !e.state.plus ? n.a.createElement('div', { className: v.a.plusHolder }, n.a.createElement('i', { className: d()(v.a.plusIcon, 'fas fa-plus') }), n.a.createElement('b', null, 'Plus Only'), n.a.createElement('span', { style: { fontSize: 20 } }, 'Free Release: 6/1/21')) : T.a[s].plusOnly ? n.a.createElement('div', { className: v.a.plusOnly }, 'Plus Only') : T.a[s].limited ? n.a.createElement('div', { className: v.a.limitedTime }, 'Ends 3/20/21') : T.a[s].updated ? n.a.createElement('div', { className: v.a.updatedTime }, 'Updated') : T.a[s].new ? n.a.createElement('div', { className: v.a.limitedTime }, 'New Mode!') : null) : null;
            })), n.a.createElement('div', { className: v.a.infoContainer }, this.state.settings.type ? n.a.createElement('div', {
              style: {
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }
            }, n.a.createElement('div', { className: v.a.infoImageContainer }, n.a.createElement('img', {
              src: Object(E.d)(T.a[this.state.settings.type].img),
              alt: this.state.settings.type,
              className: v.a.infoImage
            }), T.a[this.state.settings.type].name.split(' ').length > 1 ? n.a.createElement('div', { className: v.a.infoTitleTextTwo }, T.a[this.state.settings.type].name.split(' ')[0], n.a.createElement('br', null), T.a[this.state.settings.type].name.split(' ').length > 2 ? ''.concat(T.a[this.state.settings.type].name.split(' ')[1], ' ').concat(T.a[this.state.settings.type].name.split(' ')[2]) : T.a[this.state.settings.type].name.split(' ')[1]) : n.a.createElement('div', { className: v.a.infoTitleText }, T.a[this.state.settings.type].name)), n.a.createElement('div', { className: v.a.infoDesc }, T.a[this.state.settings.type].desc), n.a.createElement('div', { className: v.a.infoDetail }, T.a[this.state.settings.type].detail), n.a.createElement('div', { className: v.a.infoRow }, n.a.createElement('i', { className: d()(v.a.infoIcon, 'far fa-lightbulb') }), n.a.createElement('div', { className: v.a.infoIconText }, T.a[this.state.settings.type].focus)), n.a.createElement('div', { className: v.a.infoRow }, n.a.createElement('i', { className: d()(v.a.infoIcon, 'fas fa-users') }), n.a.createElement('div', { className: v.a.infoIconText }, T.a[this.state.settings.type].limit)), n.a.createElement('div', { className: v.a.infoRow }, n.a.createElement('i', { className: d()(v.a.infoIcon, 'fas fa-tasks') }), n.a.createElement('div', { className: v.a.infoIconText }, T.a[this.state.settings.type].suggest)), n.a.createElement('div', { className: v.a.playButtonContainer }, T.a[this.state.settings.type].methods.includes('Assign') ? n.a.createElement('div', {
              className: v.a.playButton,
              style: { width: T.a[this.state.settings.type].methods.includes('Host') ? '45%' : '100%' },
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.onPlay('Assign');
              }
            }, T.a[this.state.settings.type].methods.includes('Host') ? 'HW' : 'Assign HW') : null, T.a[this.state.settings.type].methods.includes('Host') ? n.a.createElement('div', {
              className: v.a.playButton,
              style: { width: T.a[this.state.settings.type].methods.includes('Assign') ? '45%' : '100%' },
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.onPlay('Host');
              }
            }, T.a[this.state.settings.type].methods.includes('Assign') ? 'Host' : 'Host Game') : null)) : n.a.createElement('div', { className: v.a.noInfo }, 'Select a', n.a.createElement('br', null), 'Game Mode')))) : n.a.createElement(u.a, { to: '/dashboard' });
          }
        }
      ]) && R(t.prototype, a), s && R(t, s), l;
    }(n.a.Component);
    Q.propTypes = {
      host: l.a.object,
      deleteHost: l.a.func.isRequired,
      setSettings: l.a.func.isRequired,
      addGameId: l.a.func.isRequired,
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(N.c)(Object(m.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({
        deleteHost: g.c,
        setSettings: g.d,
        addGameId: y.a
      }, e);
    })(Object(k.d)(Q))));
  },
  m6x5: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__center___3K8dU-camelCase{display:flex;flex-direction:column;align-items:center;width:100%}.styles__header___2S3Md-camelCase{color:#fff;text-align:center;font-size:80px;margin:40px auto;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey}.styles__mainContainer___10uSi-camelCase{width:850px;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin-bottom:50px}.styles__keepCentered___RSn05-camelCase,.styles__mainContainer___10uSi-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__keepCentered___RSn05-camelCase{width:100%}.styles__titleText___2deqh-camelCase{color:#3a3a3a;text-align:center;font-size:54px;font-weight:700;margin-top:30px;padding:0 50px;font-family:Nunito,sans-serif}.styles__hostButton___2lXxE-camelCase{width:80%;height:60px;background-color:#0bc2cf;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin-top:35px;cursor:pointer;font-size:40px;display:flex;justify-content:center;align-items:center;outline:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__hostButton___2lXxE-camelCase:focus,.styles__hostButton___2lXxE-camelCase:hover{transform:scale(1.02)}.styles__hostText___qWeFl-camelCase{font-family:Nunito,sans-serif;font-size:45px;margin:25px 50px;color:#fff;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__modeContainer___kFfFa-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:80%;margin:25px auto 0}.styles__middleText___30Mvj-camelCase{font-size:30px;margin-top:35px;padding:0 40px;line-height:40px;min-width:600px}.styles__middleText___30Mvj-camelCase,.styles__settingsText___3EQcV-camelCase{color:#3a3a3a;text-align:center;font-family:Nunito,sans-serif}.styles__settingsText___3EQcV-camelCase{font-size:40px;font-weight:700;margin-top:20px;padding:0 50px;text-decoration:underline}.styles__settingDivider___pyMT9-camelCase{height:3px;width:calc(100% - 100px);margin:10px auto;background-color:#e0e0e0;border-radius:3px}.styles__nothingText___33fs2-camelCase{font-size:40px;font-weight:700;margin:155px 5% 20px;color:#fff}.styles__contestText___6xGwx-camelCase,.styles__nothingText___33fs2-camelCase{font-family:Nunito,sans-serif;width:90%;text-align:center}.styles__contestText___6xGwx-camelCase{font-size:28px;margin:5px 5% 10px;color:#3a3a3a}.styles__linkText___fTp-c-camelCase{font-family:Nunito,sans-serif;font-size:40px;font-weight:700;margin:20px 5% 50px;width:90%;text-align:center;color:#fff}.styles__plusContainer___arn2Z-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:20px auto 10px}.styles__plusText___2OC0t-camelCase{color:#3a3a3a;font-size:35px;font-weight:700}.styles__plusText___2OC0t-camelCase,.styles__upgradeButton___fp8te-camelCase{font-family:Nunito,sans-serif;text-align:center}.styles__upgradeButton___fp8te-camelCase{width:200px;height:60px;line-height:60px;background-color:#ff7b24;border-radius:7px;margin:20px auto 0;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-decoration:none;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__upgradeButton___fp8te-camelCase:hover{transform:scale(1.05)}.styles__mapRow___1C_B4-camelCase{width:80%;margin:10px auto 0;flex-flow:row wrap;justify-content:space-between}.styles__mapButton___SP2TU-camelCase,.styles__mapRow___1C_B4-camelCase{display:flex;align-items:center}.styles__mapButton___SP2TU-camelCase{flex-direction:column;justify-content:center;width:30%;margin:5px auto;border:4px solid #a7a7a7;border-radius:6px;padding:5px;box-sizing:border-box;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:20px;font-weight:700;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__mapButton___SP2TU-camelCase:hover{transform:scale(.95)}.styles__mapButton___SP2TU-camelCase:hover,.styles__mapButtonSelected___3ONQV-camelCase{border-color:#0bc2cf}.styles__mapImg___ADcBd-camelCase{margin-bottom:5px}.styles__lockedMap___2ZmX0-camelCase,.styles__mapImg___ADcBd-camelCase{width:100%;border-radius:6px}.styles__lockedMap___2ZmX0-camelCase{justify-content:center;align-items:center;height:calc(100% - 8px);background-color:#3a3a3a;color:#fff;font-size:42px;position:absolute;top:0;left:0}.styles__bigScreen___JsIcn-camelCase,.styles__lockedMap___2ZmX0-camelCase{display:flex}.styles__smallScreen___3u6JQ-camelCase{display:none}@media only screen and (max-width:600px){.styles__bigScreen___JsIcn-camelCase{display:none}.styles__smallScreen___3u6JQ-camelCase{display:flex}}',
      ''
    ]), t.locals = {
      center: 'styles__center___3K8dU-camelCase',
      header: 'styles__header___2S3Md-camelCase',
      mainContainer: 'styles__mainContainer___10uSi-camelCase',
      keepCentered: 'styles__keepCentered___RSn05-camelCase',
      titleText: 'styles__titleText___2deqh-camelCase',
      hostButton: 'styles__hostButton___2lXxE-camelCase',
      hostText: 'styles__hostText___qWeFl-camelCase',
      modeContainer: 'styles__modeContainer___kFfFa-camelCase',
      middleText: 'styles__middleText___30Mvj-camelCase',
      settingsText: 'styles__settingsText___3EQcV-camelCase',
      settingDivider: 'styles__settingDivider___pyMT9-camelCase',
      nothingText: 'styles__nothingText___33fs2-camelCase',
      contestText: 'styles__contestText___6xGwx-camelCase',
      linkText: 'styles__linkText___fTp-c-camelCase',
      plusContainer: 'styles__plusContainer___arn2Z-camelCase',
      plusText: 'styles__plusText___2OC0t-camelCase',
      upgradeButton: 'styles__upgradeButton___fp8te-camelCase',
      mapRow: 'styles__mapRow___1C_B4-camelCase',
      mapButton: 'styles__mapButton___SP2TU-camelCase',
      mapButtonSelected: 'styles__mapButtonSelected___3ONQV-camelCase',
      mapImg: 'styles__mapImg___ADcBd-camelCase',
      lockedMap: 'styles__lockedMap___2ZmX0-camelCase',
      bigScreen: 'styles__bigScreen___JsIcn-camelCase',
      smallScreen: 'styles__smallScreen___3u6JQ-camelCase'
    };
  },
  mFii: function (e, t, a) {
    var s = a('m6x5');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  p6ut: function (e, t, a) {
    var s = a('V9E3');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  pHvG: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__headerBox___2v4Gk-camelCase{position:absolute;height:20vh;width:100vw;top:0;left:0;background-color:#ff6969;box-shadow:0 6px 8px rgba(0,0,0,.2);z-index:10;overflow:hidden;-webkit-animation:styles__one___Bv5qz-camelCase 2s linear;animation:styles__one___Bv5qz-camelCase 2s linear}@-webkit-keyframes styles__one___Bv5qz-camelCase{0%{top:-20vh}5%{top:-20vh}15%{top:0}to{top:0}}@keyframes styles__one___Bv5qz-camelCase{0%{top:-20vh}5%{top:-20vh}15%{top:0}to{top:0}}.styles__headerBoxTransition___RjiBU-camelCase{position:absolute;height:65px;width:100vw;top:0;left:0;background-color:#ff6969;box-shadow:0 6px 8px rgba(0,0,0,.2);z-index:10;overflow:hidden;transition:all .25s linear .25s}.styles__iconButton___2935P-camelCase{font-size:3.25vw;color:#fff;line-height:20vh;position:absolute;left:2.5%;cursor:pointer;outline:none;transition:.2s}.styles__iconButton___2935P-camelCase:hover{transform:scale(.95)}.styles__mainTextBox___mihqW-camelCase{position:absolute;height:80%;width:45%;top:10%;left:10%}.styles__goToText___hHsG0-camelCase{text-align:right;width:20%;left:13.5%;overflow:hidden}.styles__goToText___hHsG0-camelCase,.styles__urlText___n2NcA-camelCase{color:#fff;position:absolute;height:42.5%;top:5%;font-family:Nunito,sans-serif;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__urlText___n2NcA-camelCase{text-align:left;width:59.5%;left:36%;font-size:2.5vw;text-decoration:underline;font-weight:700}.styles__enterText___17SEb-camelCase{height:42.5%;width:80%;top:52.5%;left:10%;font-family:Nunito,sans-serif;align-content:center;flex-direction:column}.styles__enterText___17SEb-camelCase,.styles__idNumberText___1YgmO-camelCase{color:#fff;position:absolute;text-align:center;overflow:hidden;display:flex;justify-content:center}.styles__idNumberText___1YgmO-camelCase{height:90%;width:30%;top:2%;left:55%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;align-items:center}.styles__copyButton___2IplD-camelCase{display:flex;justify-content:center;align-items:center;position:absolute;right:2.5%;top:10%;height:80%;width:5%;color:#fff;font-family:Nunito,sans-serif;font-size:1vw;line-height:1.2vw;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__copyButton___2IplD-camelCase:hover{transform:scale(.95)}.styles__copiedNotification___3oAK--camelCase{display:flex;justify-content:center;align-items:center;position:absolute;right:2.5%;top:37.5%;height:25%;width:5%;background-color:rgba(0,0,0,.8);color:#fff;font-family:Nunito,sans-serif;font-size:1vw;border-radius:7px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__lowerContainer___3eKit-camelCase{position:absolute;height:80vh;width:100vw;top:20vh;left:0}.styles__playerNumberBox___33xqu-camelCase{position:absolute;height:20%;width:12.5%;top:5%;left:10%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:10px;-webkit-animation:styles__two___Mmf8I-camelCase 2s linear;animation:styles__two___Mmf8I-camelCase 2s linear}@-webkit-keyframes styles__two___Mmf8I-camelCase{0%{opacity:0;transform:scale(.5)}20%{opacity:0;transform:scale(.5)}30%{opacity:1;transform:scale(1)}35%{transform:scale(1.2)}42.5%{transform:scale(1)}to{opacity:1}}@keyframes styles__two___Mmf8I-camelCase{0%{opacity:0;transform:scale(.5)}20%{opacity:0;transform:scale(.5)}30%{opacity:1;transform:scale(1)}35%{transform:scale(1.2)}42.5%{transform:scale(1)}to{opacity:1}}.styles__playerNumberText___2tELi-camelCase{height:67.5%;width:70%;top:0;left:15%}.styles__playerNumberText___2tELi-camelCase,.styles__playerText___JjAkd-camelCase{color:#3a3a3a;position:absolute;text-align:center;font-family:Titan One,sans-serif;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__playerText___JjAkd-camelCase{height:32.5%;width:90%;top:60%;left:5%}.styles__titleText___2I1k7-camelCase{color:#fff;position:absolute;text-align:center;height:24%;width:40%;top:2.5%;left:30%;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-animation:styles__three___MSrCo-camelCase 2s linear;animation:styles__three___MSrCo-camelCase 2s linear}@-webkit-keyframes styles__three___MSrCo-camelCase{0%{opacity:0;transform:scale(.5)}47.5%{opacity:0;transform:scale(.5)}57.5%{opacity:1;transform:scale(1)}62.5%{transform:scale(1.2)}70%{transform:scale(1)}to{opacity:1}}@keyframes styles__three___MSrCo-camelCase{0%{opacity:0;transform:scale(.5)}47.5%{opacity:0;transform:scale(.5)}57.5%{opacity:1;transform:scale(1)}62.5%{transform:scale(1.2)}70%{transform:scale(1)}to{opacity:1}}.styles__startButton___3jzim-camelCase{position:absolute;height:12%;width:15%;top:9%;left:75%;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;overflow:hidden;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36);-webkit-animation:styles__four___3NE5r-camelCase 2s linear;animation:styles__four___3NE5r-camelCase 2s linear}@-webkit-keyframes styles__four___3NE5r-camelCase{0%{opacity:0;transform:scale(.5)}75%{opacity:0;transform:scale(.5)}85%{opacity:1;transform:scale(1)}90%{transform:scale(1.2)}97.5%{transform:scale(1)}to{opacity:1}}@keyframes styles__four___3NE5r-camelCase{0%{opacity:0;transform:scale(.5)}75%{opacity:0;transform:scale(.5)}85%{opacity:1;transform:scale(1)}90%{transform:scale(1.2)}97.5%{transform:scale(1)}to{opacity:1}}.styles__startButton___3jzim-camelCase:hover{transform:scale(1.05)}.styles__startButtonText___13Eid-camelCase{color:#3a3a3a;text-align:center;height:80%;width:80%;top:10%;left:10%;font-family:Titan One,sans-serif;align-content:center;flex-direction:column}.styles__clientArrayContainer___1Wj4m-camelCase,.styles__startButtonText___13Eid-camelCase{position:absolute;overflow:hidden;display:flex;justify-content:center}.styles__clientArrayContainer___1Wj4m-camelCase{height:67.5%;width:90%;top:30%;left:5%;overflow-y:scroll;align-content:flex-start;flex-flow:row wrap}.styles__arrayScrollbar___EuelQ-camelCase::-webkit-scrollbar{width:10px}.styles__arrayScrollbar___EuelQ-camelCase::-webkit-scrollbar-thumb{background:#fff;border-radius:10px}.styles__arrayScrollbar___EuelQ-camelCase::-webkit-scrollbar-thumb:hover{background:#f0f0f0;border-radius:10px}.styles__clientBox___2MU_1-camelCase{position:relative;height:10vh;width:20vw;margin:2vh 3vw;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;outline:none}.styles__clientBox___2MU_1-camelCase:hover>.styles__clientNameText___2yudl-camelCase{text-decoration:line-through}.styles__blookBox___2XgjB-camelCase{position:absolute;left:5%;top:.975vh;height:8.05vh;width:7vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__clientNameText___2yudl-camelCase{color:#3a3a3a;position:absolute;text-align:center;height:80%;width:calc(85% - 7vh);top:10%;left:calc(7vh + 10%);font-family:Nunito,sans-serif;font-weight:700;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column}.styles__invisible___1WgGh-camelCase{opacity:0;transition:opacity .25s linear}',
      ''
    ]), t.locals = {
      headerBox: 'styles__headerBox___2v4Gk-camelCase',
      one: 'styles__one___Bv5qz-camelCase',
      headerBoxTransition: 'styles__headerBoxTransition___RjiBU-camelCase',
      iconButton: 'styles__iconButton___2935P-camelCase',
      mainTextBox: 'styles__mainTextBox___mihqW-camelCase',
      goToText: 'styles__goToText___hHsG0-camelCase',
      urlText: 'styles__urlText___n2NcA-camelCase',
      enterText: 'styles__enterText___17SEb-camelCase',
      idNumberText: 'styles__idNumberText___1YgmO-camelCase',
      copyButton: 'styles__copyButton___2IplD-camelCase',
      copiedNotification: 'styles__copiedNotification___3oAK--camelCase',
      lowerContainer: 'styles__lowerContainer___3eKit-camelCase',
      playerNumberBox: 'styles__playerNumberBox___33xqu-camelCase',
      two: 'styles__two___Mmf8I-camelCase',
      playerNumberText: 'styles__playerNumberText___2tELi-camelCase',
      playerText: 'styles__playerText___JjAkd-camelCase',
      titleText: 'styles__titleText___2I1k7-camelCase',
      three: 'styles__three___MSrCo-camelCase',
      startButton: 'styles__startButton___3jzim-camelCase',
      four: 'styles__four___3NE5r-camelCase',
      startButtonText: 'styles__startButtonText___13Eid-camelCase',
      clientArrayContainer: 'styles__clientArrayContainer___1Wj4m-camelCase',
      arrayScrollbar: 'styles__arrayScrollbar___EuelQ-camelCase',
      clientBox: 'styles__clientBox___2MU_1-camelCase',
      clientNameText: 'styles__clientNameText___2yudl-camelCase',
      blookBox: 'styles__blookBox___2XgjB-camelCase',
      invisible: 'styles__invisible___1WgGh-camelCase'
    };
  },
  rDSi: function (e, t, a) {
    'use strict';
    t.a = {
      Candy: {
        name: 'Candy Rush',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1572209054/Media/CandyRush.png',
        desc: 'Spooky, Sneaky, Scary Learning!',
        detail: 'Get in the Halloween spirit by answering questions to collect candy and take it from other players',
        focus: 'Speed & Spookiness',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '3+ players suggested',
        methods: ['Host'],
        limited: !0,
        active: !1
      },
      Toy: {
        name: 'Santa\'s Workshop',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1607057672/Media/santasWorkshop.jpg',
        desc: 'Super Snowy, Chilly, and Rapid-fire Fun!',
        detail: 'Get in the Holiday spirit by answering questions to build toys and take them from other players',
        focus: 'Speed & Holiday Cheer',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '3+ players suggested',
        methods: ['Host'],
        limited: !0,
        active: !1
      },
      Snow: {
        name: 'Snowball Fight',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1575606510/Media/SnowballFight.png',
        desc: 'Super Snowy, Chilly, and Rapid-fire Fun!',
        detail: 'Get in the Holiday spirit by answering questions to protect your team\'s snow fort and take down the other team',
        focus: 'Speed & Holiday Cheer',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '4+ players suggested',
        methods: ['Host'],
        limited: !0,
        active: !1
      },
      Shamrock: {
        name: 'Shamrock Rush',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1583907440/Media/ShamrockRush2.png',
        desc: 'Lucky Leprechauns and Crazy Shamrock-ing Fun!',
        detail: 'Get in the St. Patrick\'s Day spirit by answering questions to collect shamrocks and take them from other players',
        focus: 'Speed & Luck of the Irish',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '3+ players suggested',
        methods: ['Host'],
        active: !1
      },
      Hack: {
        name: 'Crypto Hack',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1621196805/Media/CryptoHack.png',
        desc: 'Some Super Secure and Chaotic Hacking Fun!',
        detail: 'Answer questions to mine Crypto and hack others by infiltrating their defenses to steal their riches',
        focus: 'Speed & Insight',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '3+ players suggested',
        methods: ['Host'],
        active: !0
      },
      Gold: {
        name: 'Gold Quest',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1605139304/Media/GoldQuest.png',
        desc: 'Exciting Twists and Chests Full of Gold!',
        detail: 'Build your riches in this chaotic mode by answering questions to earn gold and take it from other players',
        focus: 'Speed & Luck',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '3+ players suggested',
        methods: ['Host'],
        active: !0
      },
      Defense: {
        name: 'Tower Defense',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1594599807/Media/towerDefense.png',
        desc: 'Action-Packed, Defensive Chaos!',
        detail: 'Answer questions, build towers, and design your defense to protect yourself from waves of Evil Blooks',
        focus: 'Strategy & Accuracy',
        limit: 'Player Limit: 60 (1,000 for Plus & HW)',
        suggest: '2+ players suggested',
        methods: [
          'Host',
          'Assign'
        ],
        active: !0
      },
      Cafe: {
        name: 'Café',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1606674729/Media/CafeSmall.png',
        desc: 'Order Up! It\'s Time For Some Delicious Food!',
        detail: 'Serve food to customers, restock your supplies by answering questions, and buy upgrades to create an awesome Café',
        focus: 'Speed & Focus',
        limit: 'Player Limit: 60 (1,000 for Plus & HW)',
        suggest: '2+ players suggested',
        methods: [
          'Host',
          'Assign'
        ],
        active: !0
      },
      Factory: {
        name: 'Factory',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1561128265/Media/Factory.png',
        desc: 'Fast-Paced, Money-Making Madness!',
        detail: 'Quickly answer self-paced questions to unlock and upgrade Blooks that make you some cold, hard, virtual cash',
        focus: 'Speed & Strategy',
        limit: 'Player Limit: 60 (1,000 for Plus & HW)',
        suggest: '2+ players suggested',
        methods: [
          'Host',
          'Assign'
        ],
        limited: !1,
        active: !0
      },
      Royale: {
        name: 'Battle Royale',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1563488034/Media/BattleRoyale.png',
        desc: 'Intense, Competitive Showdowns!',
        detail: 'Players face each other in 1 vs 1 (or team vs team) showdowns and try to keep their energy up until only one remains',
        focus: 'Speed & Accuracy',
        limit: 'Player Limit: 60 (1,000 Solo for Plus)',
        suggest: '4+ players suggested (12+ for Teams)',
        methods: ['Host'],
        limited: !1,
        active: !0
      },
      Racing: {
        name: 'Racing',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1561132198/Media/Racing.png',
        desc: 'Exhilarating, Suspense-Filled Action!',
        detail: 'Answer questions to race opponents and use power ups to get to the finish line first',
        focus: 'Speed & Accuracy',
        limit: 'Player Limit: 60',
        suggest: '4+ players suggested',
        methods: ['Host'],
        limited: !1,
        active: !0
      },
      Kingdom: {
        name: 'Crazy Kingdom',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1596390340/Media/CrazyKingdom.png',
        desc: 'Hilarious Guests, Serious Strategy!',
        detail: 'Keep a kingdom running by answering a variety of guests\' requests and managing your limited resources',
        focus: 'Strategy & Accuracy',
        limit: 'Unlimited Players',
        suggest: 'Homework Only',
        methods: ['Assign'],
        active: !0
      },
      Tower: {
        name: 'Tower of Doom',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1594599953/Media/Tower.png',
        desc: 'Survive to Ascend the Magical Tower of Doom!',
        detail: 'Answer questions to collect cards that help you defeat evil Blooks and climb the Tower of Doom to victory',
        focus: 'Strategy & Accuracy',
        limit: 'Unlimited Players',
        suggest: 'Homework Only',
        methods: ['Assign'],
        active: !0
      },
      Classic: {
        name: 'Classic',
        img: 'https://res.cloudinary.com/blooket/image/upload/v1594599727/Media/Classic.png',
        desc: 'Good Ol\' Fashioned Blooket!',
        detail: 'Compete by answering questions quickly to earn points and climb the leaderboard',
        focus: 'Speed & Accuracy',
        limit: 'Player Limit: 60 (1,000 for Plus)',
        suggest: '4+ players suggested',
        methods: ['Host'],
        active: !0
      }
    };
  }
}]);
