(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{
  '2rpR': function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return n;
    });
    var n = 'SET_ROYALE_RESULTS';
  },
  '46e3': function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('bQgK'), h = o.n(p), f = o('b6Qr'), m = o('v543');
    function d(e, t, o, n) {
      return {
        type: m.a,
        answer: e,
        correct: t,
        time: o,
        qNum: n
      };
    }
    var y = o('bMSx'), b = o('pMbe'), g = o('2g2H'), v = o('iQ+n'), w = o('GIcp'), _ = o.n(w), E = o('FPhr'), k = o('CKiD'), O = o('SdQT'), x = o('TN+F');
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function T(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function C(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function j(e, t) {
      return (j = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function I(e) {
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
        var o, n = N(e);
        if (t) {
          var r = N(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return P(this, o);
      };
    }
    function P(e, t) {
      return !t || 'object' !== S(t) && 'function' != typeof t ? R(e) : t;
    }
    function R(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && j(e, t);
      }(c, e);
      var t, o, n, a, s, i = I(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = { timer: 10 }, t.ready = !1, t.answer = '', t.dbRef = {}, t.onAnswer = t.onAnswer.bind(R(t)), t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t, o, n, r = this;
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
                  return Object(x.c)(), this.startTime = h()(), this.answer = '', this.ready = !1, this.readyTimeout = setTimeout(function () {
                    r.ready = !0;
                  }, 250), t = this.props.client.question.timeLimit, this.setState({ timer: t }), this.interval = setInterval(function () {
                    (t -= 1) <= 0 ? clearInterval(r.interval) : r.setState({ timer: t });
                  }, 1000), o = this.props.client.team, n = o ? this.props.client.team.blook : this.props.client.name, e.next = 14, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 14:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    switch (e.val()) {
                    case 'bres':
                      r.props.history.push('/play/battle-royale/answer/result');
                      break;
                    case 'prv':
                      r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(n), function (e) {
                        e && e.op ? r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(e.op), function (t) {
                          t ? (r.props.prepareMatch(e.e, [
                            {
                              name: o ? k.a[n] : n,
                              energy: e.e,
                              blook: o ? n : r.props.client.blook,
                              players: e.p
                            },
                            {
                              name: o ? k.a[e.op] : e.op,
                              energy: t.e,
                              blook: o ? e.op : t.b,
                              players: t.p,
                              clone: t.op !== n
                            }
                          ]), r.props.history.push('/play/battle-royale/match/preview')) : (r.props.prepareMatch(e.e, null), r.props.history.push('/play/battle-royale/match/preview'));
                        }) : (r.props.prepareMatch(0, null), r.props.history.push('/play/battle-royale/match/preview'));
                      });
                      break;
                    case null:
                      r.props.deleteClient(), r.props.history.push('/play');
                    }
                  });
                case 16:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                T(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                T(r, o, n, s, i, 'throw', e);
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
            clearTimeout(this.readyTimeout), clearInterval(this.interval), Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(x.t)();
          }
        },
        {
          key: 'onAnswer',
          value: function (e) {
            if (this.ready && !this.answer) {
              this.answer = e;
              var t = h()() - this.startTime;
              this.props.client.answer || (this.props.answerRoyale(this.answer, this.props.client.question.correctAnswers.includes(this.answer), parseFloat(t.toFixed(0)), this.props.client.question.number), this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: 'a/'.concat(this.props.client.name),
                val: {
                  a: this.props.client.question.answers.indexOf(this.answer),
                  t: parseFloat(t.toFixed(0))
                }
              })), this.props.history.push('/play/battle-royale/answer/sent');
            }
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.question && this.props.client.question.answers ? r.a.createElement('div', {
              className: f.isMobile ? _.a.mBody : _.a.body,
              style: { overflow: 'hidden' }
            }, r.a.createElement(v.a, {
              title: 'Play Royale | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(g.a, {
              name: this.props.client.name,
              energy: this.props.client.energy,
              rightText: this.state.timer.toString()
            }), r.a.createElement(E.a, {
              onAnswer: this.onAnswer,
              text: this.props.client.question.text,
              answers: this.props.client.question.answers,
              image: this.props.client.question.image && this.props.client.question.image.url ? this.props.client.question.image.url : ''
            })) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && C(t.prototype, o), n && C(t, n), c;
    }(r.a.Component);
    A.propTypes = {
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
        energy: c.a.number,
        question: c.a.object,
        times: c.a.array,
        safe: c.a.bool,
        team: c.a.object
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      answerRoyale: c.a.func.isRequired,
      prepareMatch: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        deleteClient: b.a,
        answerRoyale: d,
        prepareMatch: y.a
      }, e);
    })(Object(O.d)(A)));
  },
  '4XA1': function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('TSYQ'), h = o.n(p), f = o('b6Qr'), m = o('R9c3');
    function d(e, t, o) {
      return {
        type: m.b,
        match: e,
        win: t,
        safe: o
      };
    }
    function y(e) {
      return {
        type: m.a,
        defeated: e
      };
    }
    var b = o('bMSx'), g = o('pMbe'), v = o('2g2H'), w = o('iQ+n'), _ = o('x2Z/'), E = o.n(_), k = o('GIcp'), O = o.n(k), x = o('CKiD'), S = o('SdQT'), T = o('TN+F');
    function C(e) {
      return (C = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
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
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return I(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return I(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function I(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function P(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function R(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function N(e, t) {
      return (N = Object.setPrototypeOf || function (e, t) {
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
        var o, n = B(e);
        if (t) {
          var r = B(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return q(this, o);
      };
    }
    function q(e, t) {
      return !t || 'object' !== C(t) && 'function' != typeof t ? function (e) {
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
        }), t && N(e, t);
      }(c, e);
      var t, o, n, a, s, i = A(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          correctAnswers: '',
          isCorrect: !1,
          ready: !1
        }, t.dbRef = {}, t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t, o, n, r = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.question && this.props.client.question.correctAnswers) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(T.c)(), this.readyTimeout = setTimeout(function () {
                    r.props.client && r.props.client.question && r.props.client.question.correctAnswers && r.setState({
                      correctAnswers: r.props.client.question.correctAnswers,
                      isCorrect: r.props.client.question.correctAnswers.includes(r.props.client.answer),
                      ready: !0
                    });
                  }, 1000), t = function () {
                    r.transitionTimeout = setTimeout(function () {
                      r.props.history.push('/play/battle-royale/match/result');
                    }, 300);
                  }, o = this.props.client.team, n = o ? this.props.client.team.blook : this.props.client.name, e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 9:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    if (e.val()) {
                      if ('prv' === e.val())
                        r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(n), function (e) {
                          e && e.op ? r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(e.op), function (t) {
                            t ? (r.props.prepareMatch(e.e, [
                              {
                                name: o ? x.a[n] : n,
                                energy: e.e,
                                blook: o ? n : r.props.client.blook,
                                players: e.p
                              },
                              {
                                name: o ? x.a[e.op] : e.op,
                                energy: t.e,
                                blook: o ? e.op : t.b,
                                players: t.p,
                                clone: t.op !== n
                              }
                            ]), r.props.history.push('/play/battle-royale/match/preview')) : (r.props.prepareMatch(e.e, null), r.props.history.push('/play/battle-royale/match/preview'));
                          }) : (r.props.prepareMatch(0, null), r.props.history.push('/play/battle-royale/match/preview'));
                        });
                      else if (2 === e.val().split('-').length && 'pmat' === e.val().split('-')[0]) {
                        var a = r.props.client.question.correctAnswers.map(function (e) {
                          return r.props.client.question.answers.indexOf(e);
                        });
                        if (r.props.client.energy)
                          if (r.props.client.team) {
                            if (!(r.props.client.match && r.props.client.match[0] && r.props.client.question && r.props.client.question.timeLimit))
                              return;
                            r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(r.props.client.match[0].blook), function (o) {
                              if (r.props.client.match && r.props.client.match[0] && r.props.client.question && r.props.client.question.timeLimit) {
                                var n = o || 1000 * r.props.client.question.timeLimit, a = n !== 1000 * r.props.client.question.timeLimit;
                                r.props.firebase.getDatabaseVal(r.props.client.hostId, 'c/'.concat(r.props.client.match[1].blook), function (o) {
                                  if (r.props.client.match && r.props.client.match[0] && r.props.client.question && r.props.client.question.timeLimit) {
                                    var s = o || 1000 * r.props.client.question.timeLimit, i = s !== 1000 * r.props.client.question.timeLimit, c = Boolean(parseInt(e.val().split('-')[1], 10)), l = a && !i || a && n < s, u = [
                                        {
                                          name: r.props.client.match[0].name,
                                          energy: r.props.client.match[0].energy,
                                          blook: r.props.client.match[0].blook,
                                          players: r.props.client.match[0].players,
                                          correct: a,
                                          time: n
                                        },
                                        {
                                          name: r.props.client.match[1].name,
                                          energy: r.props.client.match[1].energy,
                                          blook: r.props.client.match[1].blook,
                                          players: r.props.client.match[1].players,
                                          correct: i,
                                          time: s,
                                          clone: r.props.client.match[1].clone
                                        }
                                      ];
                                    r.props.setMatchResult(u, l, c), t();
                                  }
                                });
                              }
                            });
                          } else {
                            if (!r.props.client.match || !r.props.client.match[1])
                              return;
                            r.props.firebase.getDatabaseVal(r.props.client.hostId, 'a/'.concat(r.props.client.match[1].name), function (o) {
                              if (r.props.client.match && r.props.client.match[0] && r.props.client.question && r.props.client.question.timeLimit) {
                                var n = o || {}, s = n.t || 1000 * r.props.client.question.timeLimit, i = r.props.client.question.correctAnswers.includes(r.props.client.answer), c = a.includes(n.a), l = r.props.client.times[r.props.client.times.length - 1], u = Boolean(parseInt(e.val().split('-')[1], 10)), p = i && !c || i && l < s, h = [
                                    {
                                      name: r.props.client.name,
                                      energy: r.props.client.energy,
                                      blook: r.props.client.blook,
                                      correct: i,
                                      time: l
                                    },
                                    {
                                      name: r.props.client.match[1].name,
                                      energy: r.props.client.match[1].energy,
                                      blook: r.props.client.match[1].blook,
                                      correct: c,
                                      time: s,
                                      clone: r.props.client.match[1].clone
                                    }
                                  ];
                                r.props.setMatchResult(h, p, u), t();
                              }
                            });
                          }
                        else if (r.props.client.question.correctAnswers.includes(r.props.client.answer)) {
                          var s = 0;
                          r.props.firebase.getDatabaseVal(r.props.client.hostId, 'a', function (e) {
                            var o = r.props.client.times && r.props.client.times[0] ? r.props.client.times[r.props.client.times.length - 1] : r.props.client.question ? 1000 * r.props.client.question.timeLimit : 100000, n = e || {};
                            Object.entries(n).forEach(function (e) {
                              var t = j(e, 2), n = t[0], i = t[1];
                              n !== r.props.client.name && (i.t > o || !a.includes(i.a)) && (s += 1);
                            }), r.props.setDefeated(s), t();
                          });
                        } else
                          r.props.setDefeated(0), t();
                      }
                    } else
                      r.props.deleteClient(), r.props.history.push('/play');
                  });
                case 11:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                P(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                P(r, o, n, s, i, 'throw', e);
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
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(T.t)(), clearTimeout(this.timeout), clearTimeout(this.transitionTimeout);
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.question && this.props.client.question.correctAnswers ? r.a.createElement('div', {
              className: f.isMobile ? O.a.mBody : O.a.body,
              style: {
                backgroundColor: this.state.transition ? '#f7f7f7' : '#fff',
                overflow: 'hidden'
              }
            }, r.a.createElement(w.a, {
              title: 'Play Royale | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(v.a, {
              name: this.props.client.name,
              energy: this.props.client.energy
            }), this.state.ready ? r.a.createElement('div', {
              className: h()(O.a.regularBody, E.a.background),
              style: { backgroundColor: this.state.isCorrect ? '#4bc22e' : '#c43a35' }
            }, r.a.createElement('div', { className: E.a.header }, this.state.isCorrect ? 'CORRECT' : 'INCORRECT'), r.a.createElement('div', { className: E.a.container }, r.a.createElement('i', { className: this.state.isCorrect ? 'fas fa-check' : 'fas fa-times' })), this.state.isCorrect ? null : r.a.createElement('div', { className: E.a.correctAnswers }, 'Correct '.concat(1 === this.state.correctAnswers.length ? 'Answer:' : 'Answers:'), r.a.createElement('br', null), Object(T.e)(this.state.correctAnswers))) : null) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && R(t.prototype, o), n && R(t, n), c;
    }(r.a.Component);
    D.propTypes = {
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
        energy: c.a.number,
        question: c.a.object,
        times: c.a.array,
        safe: c.a.bool,
        team: c.a.object,
        match: c.a.array
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object,
      setMatchResult: c.a.func.isRequired,
      setDefeated: c.a.func.isRequired,
      prepareMatch: c.a.func.isRequired
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        deleteClient: g.a,
        setMatchResult: d,
        setDefeated: y,
        prepareMatch: b.a
      }, e);
    })(Object(S.d)(D)));
  },
  '6bnt': function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return r;
    }), o.d(t, 'b', function () {
      return a;
    });
    var n = o('vAyp');
    function r(e, t, o, r, a, s) {
      return {
        type: n.a,
        round: e,
        usedQuestions: t,
        questionsPlayed: o,
        questionString: r,
        question: a,
        matches: s
      };
    }
    function a(e) {
      return {
        type: n.b,
        standings: e
      };
    }
  },
  '7Vp8': function (e, t, o) {
    var n = o('dH+b');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  '7o9Z': function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__container___2gqDo-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__containerHeader___Lm3rr-camelCase{text-align:center;font-size:40px;line-height:40px;margin:20px;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__inputContainer___2lWGj-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:6px;width:330px;height:50px;margin:auto auto 20px;display:flex;flex-direction:row}.styles__inputContainer___2lWGj-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___2lWGj-camelCase:focus-within{border-color:#0bc2cf}.styles__inputContainer___2lWGj-camelCase[focus-within]>.styles__nameEmailIcon___37zh8-camelCase{color:#0bc2cf}.styles__inputContainer___2lWGj-camelCase:focus-within>.styles__nameEmailIcon___37zh8-camelCase{color:#0bc2cf}.styles__inputContainer___2lWGj-camelCase[focus-within]>.styles__lockIcon___ZPyXX-camelCase{color:#0bc2cf}.styles__inputContainer___2lWGj-camelCase:focus-within>.styles__lockIcon___ZPyXX-camelCase{color:#0bc2cf}.styles__inputFilled___3betR-camelCase{border-color:#3a3a3a}.styles__inputError___1FZqL-camelCase{border-color:#ce1313}.styles__lockIcon___ZPyXX-camelCase{font-size:25px;color:#5f5f5f;line-height:50px;padding-left:10px;width:28px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__iconFilled___2jsfU-camelCase{color:#3a3a3a}.styles__iconError___1MOtk-camelCase{color:#ce1313}.styles__input___kmzDv-camelCase{border:none;margin:5px 2px 5px 11px;width:260px;height:40px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__input___kmzDv-camelCase::-webkit-input-placeholder{color:#999}.styles__input___kmzDv-camelCase:-moz-placeholder,.styles__input___kmzDv-camelCase::-moz-placeholder{color:#999}.styles__input___kmzDv-camelCase:-ms-input-placeholder{color:#999}.styles__inputError___1FZqL-camelCase{color:#ce1313}.styles__inputError___1FZqL-camelCase::-webkit-input-placeholder{color:#ce1313}.styles__inputError___1FZqL-camelCase:-moz-placeholder,.styles__inputError___1FZqL-camelCase::-moz-placeholder{color:#ce1313}.styles__inputError___1FZqL-camelCase:-ms-input-placeholder{color:#ce1313}.styles__input___kmzDv-camelCase:focus{color:#0bc2cf}.styles__input___kmzDv-camelCase:focus::-webkit-input-placeholder{color:#0bc2cf}.styles__input___kmzDv-camelCase:focus:-moz-placeholder,.styles__input___kmzDv-camelCase:focus::-moz-placeholder{color:#0bc2cf}.styles__input___kmzDv-camelCase:focus:-ms-input-placeholder{color:#0bc2cf}@media only screen and (max-width:500px){.styles__container___2gqDo-camelCase{width:320px}.styles__inputContainer___2lWGj-camelCase{width:280px;margin-bottom:10px}.styles__input___kmzDv-camelCase{width:210px}}.styles__button___3X7FE-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:6px;background-color:#fff;width:125px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___3X7FE-camelCase:focus,.styles__button___3X7FE-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__buttonFilled___IY9Vg-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__buttonError___3PVY1-camelCase,.styles__buttonError___3PVY1-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__buttonError___3PVY1-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__agreeText___wHrEo-camelCase{margin:8px;font-size:9px;text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__errorContainer___3Zt4i-camelCase{border:2px solid #ce1313;border-radius:6px;width:330px;display:flex;flex-direction:row;margin:auto auto 25px}.styles__errorIcon___1taFB-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__errorText___GkEAv-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;color:#3a3a3a}.styles__errorText___GkEAv-camelCase,.styles__link___1N8ft-camelCase{font-family:Nunito,sans-serif}.styles__link___1N8ft-camelCase{font-size:35px;color:#0bc2cf;text-align:center;line-height:55px;margin:25px auto;text-decoration:underline;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}',
      ''
    ]), t.locals = {
      container: 'styles__container___2gqDo-camelCase',
      containerHeader: 'styles__containerHeader___Lm3rr-camelCase',
      inputContainer: 'styles__inputContainer___2lWGj-camelCase',
      nameEmailIcon: 'styles__nameEmailIcon___37zh8-camelCase',
      lockIcon: 'styles__lockIcon___ZPyXX-camelCase',
      inputFilled: 'styles__inputFilled___3betR-camelCase',
      inputError: 'styles__inputError___1FZqL-camelCase',
      iconFilled: 'styles__iconFilled___2jsfU-camelCase',
      iconError: 'styles__iconError___1MOtk-camelCase',
      input: 'styles__input___kmzDv-camelCase',
      button: 'styles__button___3X7FE-camelCase',
      buttonFilled: 'styles__buttonFilled___IY9Vg-camelCase',
      buttonError: 'styles__buttonError___3PVY1-camelCase',
      agreeText: 'styles__agreeText___wHrEo-camelCase',
      errorContainer: 'styles__errorContainer___3Zt4i-camelCase',
      errorIcon: 'styles__errorIcon___1taFB-camelCase',
      errorText: 'styles__errorText___GkEAv-camelCase',
      link: 'styles__link___1N8ft-camelCase'
    };
  },
  A59R: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('cpGi'), m = o('6bnt'), d = o('1b17'), y = o('5gLy'), b = o('9IXX'), g = o('iQ+n'), v = o('GIcp'), w = o.n(v), _ = o('TTiB'), E = o.n(_), k = o('MsBJ'), O = o('mZc/'), x = o('DoX5'), S = o('TN+F'), T = o('SdEZ'), C = o.n(T), j = o('IZ+j'), I = o.n(j), P = o('xpx2'), R = o.n(P), N = o('SIyj'), A = o.n(N), q = o('SdQT');
    function B(e) {
      return (B = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function D(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return U(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return U(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function U(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function L(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function M(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
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
        var o, n = Q(e);
        if (t) {
          var r = Q(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return W(this, o);
      };
    }
    function W(e, t) {
      return !t || 'object' !== B(t) && 'function' != typeof t ? F(e) : t;
    }
    function F(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function Q(e) {
      return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var G = [
        {
          text: 'Ready',
          time: 5500
        },
        {
          text: 'Set',
          time: 2500
        },
        {
          text: 'Go!',
          time: 2000
        },
        {
          text: '',
          time: 1000
        }
      ], V = function (e) {
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
        var t, o, n, a, s, i = H(c);
        function c(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, c), (t = i.call(this, e)).state = {
            racers: [],
            size: 0,
            padding: 0,
            goalAmount: e.host && e.host.settings ? e.host.settings.amount : 0,
            centerText: 'Loading',
            muted: !!e.host && e.host.muted
          }, t.ok = !1, t.here = !0, t.dbRefClients = {}, t.updateDimensions = t.updateDimensions.bind(F(t)), t.changeMuted = t.changeMuted.bind(F(t)), t.audio = new Audio(C.a), t.readySetGoAudios = [
            new Audio(I.a),
            new Audio(R.a),
            new Audio(A.a)
          ], t;
        }
        return t = c, (o = [
          {
            key: 'componentDidMount',
            value: (a = regeneratorRuntime.mark(function e() {
              var t, o, n = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.props.host && this.props.host.settings) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return');
                  case 2:
                    return t = 0, function e() {
                      n.rsgTimeout = setTimeout(function () {
                        n.setState({ centerText: G[t].text }, function () {
                          t < G.length - 1 && (n.state.muted || n.readySetGoAudios[t].play(), t += 1, e());
                        });
                      }, G[t].time);
                    }(), this.audioTimeout = setTimeout(function () {
                      n.audio.volume = 0.6, n.audio.play(), n.audio.addEventListener('ended', function () {
                        n.audio.currentTime = 0, n.audio.play();
                      }, !1);
                    }, 10500), h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
                      id: this.props.host.id,
                      stage: 'race'
                    }), o = this.props.host.settings.amount, e.next = 11, this.props.firebase.getDatabaseRef(this.props.host.id, 'c');
                  case 11:
                    this.dbRefClients = e.sent, this.dbRefClients.on('value', function (e) {
                      var t = e.val() || {};
                      if (t && 0 !== Object.keys(t).length) {
                        var r = !1, a = Object.entries(t).map(function (e) {
                            var t = D(e, 2), n = t[0], a = t[1], s = a.pr ? Math.min(a.pr, o) : 0;
                            return s >= o && (r = !0), {
                              name: n,
                              blook: a.b,
                              progress: s,
                              toAttack: a.tat
                            };
                          });
                        if (r) {
                          a.sort(function (e, t) {
                            return t.progress - e.progress;
                          });
                          var s = 0, i = [];
                          a.forEach(function (e, t) {
                            0 !== t && e.progress === a[t - 1].progress || !e.blook || (s += 1), a[t].place = s, e.blook && i.push({
                              n: e.name,
                              b: e.blook,
                              pr: e.progress,
                              pl: s
                            });
                          }), n.props.updateStandings(a), n.props.firebase.setVal({
                            id: n.props.host.id,
                            path: 'st',
                            val: i
                          }, function () {
                            h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, n.props.firebase.setStage({
                              id: n.props.host.id,
                              stage: 'fin'
                            }, function () {
                              n.ok = !0, n.props.history.push('/host/racing/final');
                            });
                          });
                        }
                        var c = a.map(function (e) {
                          return e.name;
                        });
                        a.forEach(function (e) {
                          if (e.toAttack) {
                            var t = e.toAttack.split(':');
                            if (1 === t.length)
                              return void n.props.firebase.setVal({
                                id: n.props.host.id,
                                path: 'act',
                                val: ''.concat(e.name, ':').concat(e.blook, ':').concat(t[0])
                              });
                            var o = c.indexOf(t[0]);
                            if (-1 === o)
                              return;
                            var r = a[o];
                            if (t.length < 2)
                              return;
                            n.props.firebase.setVal({
                              id: n.props.host.id,
                              path: 'c/'.concat(r.name, '/at'),
                              val: ''.concat(e.name, ':').concat(e.blook, ':').concat(t[1])
                            }), n.props.firebase.removeVal(n.props.host.id, 'c/'.concat(e.name, '/tat'));
                          }
                        });
                        var l = n.state.racers.length;
                        n.setState({ racers: a }, function () {
                          a.length !== l && n.updateDimensions();
                        });
                      }
                    });
                  case 13:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), s = function () {
              var e = this, t = arguments;
              return new Promise(function (o, n) {
                var r = a.apply(e, t);
                function s(e) {
                  L(r, o, n, s, i, 'next', e);
                }
                function i(e) {
                  L(r, o, n, s, i, 'throw', e);
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
              var e = this;
              clearTimeout(this.audioTimeout), clearTimeout(this.rsgTimeout), clearInterval(this.timerInterval), this.here = !1, Object.keys(this.dbRefClients).length && this.dbRefClients.off('value'), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', S.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1);
            }
          },
          {
            key: 'updateDimensions',
            value: function () {
              var e = 0.94 * (window.innerHeight - 75), t = 75, o = 25, n = this.state.racers.length || 1, r = e / n;
              r / 1.15 >= 75 ? (t = r / 1.15, o = r) : o = 1.15 * (t = 75) + (e - n * (1.15 * t)) / (n - 1), this.here && this.setState({
                size: t,
                padding: o
              });
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
            key: 'render',
            value: function () {
              var e = this;
              if (!this.props.host || !this.props.host.settings)
                return r.a.createElement(l.a, { to: '/dashboard' });
              var t = Math.floor(this.state.racers.length / 10) + 1;
              return r.a.createElement('div', {
                className: w.a.body,
                style: { overflow: 'hidden' }
              }, r.a.createElement(g.a, {
                title: 'Host Blooket',
                desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
              }), r.a.createElement(b.a, {
                left: 'Blooket',
                right: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
                muted: this.state.muted,
                changeMuted: this.changeMuted
              }), r.a.createElement('div', { className: w.a.hostRegularBody }, r.a.createElement('div', { className: E.a.track }, this.state.racers.map(function (o, n) {
                return r.a.createElement('div', { key: o.name }, t && (e.state.racers.length - n - 1) % t == 0 ? r.a.createElement('div', {
                  className: E.a.line,
                  style: {
                    height: ''.concat(1.15 * e.state.size / 15, 'px'),
                    top: n * e.state.padding + 1.15 * e.state.size - 1.15 * e.state.size / 15
                  }
                }) : null, r.a.createElement(f.a, {
                  place: 'bottom',
                  effect: 'solid',
                  offset: { bottom: -10 },
                  className: E.a.tooltip
                }), r.a.createElement(x.a, {
                  className: E.a.racer,
                  name: o.blook,
                  style: {
                    width: e.state.size,
                    top: n * e.state.padding,
                    zIndex: n + 1,
                    transform: 'translateX('.concat(o.progress / (e.state.goalAmount - 1) * (Object(S.C)('96vw') - e.state.size), 'px)')
                  },
                  tip: ''.concat(o.name, ' - ').concat(o.progress, '/').concat(e.state.goalAmount)
                }));
              }), new Array(25).fill(0).map(function (e, t) {
                return r.a.createElement('img', {
                  src: t % 2 == 0 ? k.a : O.a,
                  alt: 'Finish Line',
                  key: t,
                  className: E.a.finishLine,
                  style: { top: ''.concat(4 * t, '%') },
                  draggable: !1
                });
              })), this.state.centerText ? r.a.createElement('div', {
                className: E.a.centerText,
                style: { fontSize: 'Loading' === this.state.centerText ? '6vw' : '11.5vw' }
              }, this.state.centerText) : null));
            }
          }
        ]) && M(t.prototype, o), n && M(t, n), c;
      }(r.a.Component);
    V.propTypes = {
      host: c.a.object,
      firebase: c.a.object,
      history: c.a.object,
      updateStandings: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(a.b)({
        updateStandings: m.b,
        setMuted: d.a,
        deleteHost: y.c
      }, e);
    })(Object(q.d)(V)));
  },
  'Cnz/': function (e, t, o) {
    var n = o('L03M');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  E9AG: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__header___140N--camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___ox90c-camelCase,.styles__header___140N--camelCase{color:#fff;text-align:center;position:absolute;opacity:0;-webkit-animation:styles__fadeIn___3F2Hn-camelCase .3s linear .3s forwards;animation:styles__fadeIn___3F2Hn-camelCase .3s linear .3s forwards}.styles__container___ox90c-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___2HUQI-camelCase{font-size:30px;line-height:33px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:10%;left:15%;width:70%;font-family:Nunito,sans-serif;font-weight:700;opacity:0;-webkit-animation:styles__fadeIn___3F2Hn-camelCase .3s linear 1.3s forwards;animation:styles__fadeIn___3F2Hn-camelCase .3s linear 1.3s forwards}.styles__background___3WXk5-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__fadeIn___3F2Hn-camelCase .3s linear 0s forwards;animation:styles__fadeIn___3F2Hn-camelCase .3s linear 0s forwards}@-webkit-keyframes styles__fadeIn___3F2Hn-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3F2Hn-camelCase{0%{opacity:0}to{opacity:1}}',
      ''
    ]), t.locals = {
      header: 'styles__header___140N--camelCase',
      container: 'styles__container___ox90c-camelCase',
      fadeIn: 'styles__fadeIn___3F2Hn-camelCase',
      correctAnswers: 'styles__correctAnswers___2HUQI-camelCase',
      background: 'styles__background___3WXk5-camelCase'
    };
  },
  Ecd8: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('2iEm'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('mLw1'), m = o('TSYQ'), d = o.n(m), y = o('b6Qr'), b = o('GIcp'), g = o.n(b), v = o('rbtn'), w = o.n(v), _ = o('dJL0'), E = o('iQ+n'), k = o('I0uU');
    function O(e) {
      return (O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function S(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function T(e, t) {
      return (T = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function C(e) {
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
        var o, n = P(e);
        if (t) {
          var r = P(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return j(this, o);
      };
    }
    function j(e, t) {
      return !t || 'object' !== O(t) && 'function' != typeof t ? I(e) : t;
    }
    function I(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && T(e, t);
      }(s, e);
      var t, o, n, a = C(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = a.call(this, e)).state = {
          email: '',
          emailError: '',
          password: '',
          password2: '',
          passwordError: '',
          password2Error: '',
          token: '',
          success: !1,
          loading: !1
        }, t.onReset = t.onReset.bind(I(t)), t.onPasswordTextUpdate = t.onPasswordTextUpdate.bind(I(t)), t.onPassword2TextUpdate = t.onPassword2TextUpdate.bind(I(t)), t;
      }
      return t = s, (o = [
        {
          key: 'componentDidMount',
          value: function () {
            this.props.match.params && this.setState({ token: this.props.match.params.token });
          }
        },
        {
          key: 'onReset',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 });
            var o = '', n = '', r = '';
            this.state.success || (this.state.email || (o = 'Where\'s The Email?'), this.state.password.length < 6 && (n = 'Password must have at least 6 characters.'), this.state.password || (n = 'Where\'s The Password?'), this.state.password !== this.state.password2 && (r = 'The passwords don\'t match.'), this.state.password2 || (r = 'Where\'s The Confirming Password?'), this.setState({
              emailError: o,
              passwordError: n,
              password2Error: r
            }, function () {
              t.state.emailError || t.state.passwordError || t.state.password2Error ? t.setState({ loading: !1 }) : h.a.put('/api/users/resetpass', {
                email: t.state.email.toLowerCase(),
                token: t.state.token,
                password: t.state.password
              }).then(function (e) {
                !0 === e.data.success ? t.setState({
                  loading: !1,
                  success: !0
                }) : t.setState({
                  loading: !1,
                  emailError: e.data.msg
                });
              }).catch(function (e) {
                console.error(e);
              });
            }));
          }
        },
        {
          key: 'onPasswordTextUpdate',
          value: function (e) {
            this.setState({ password: e.target.value }), (e.target.value.length >= 6 || 'Where\'s The Password?' === this.state.passwordError) && this.setState({ passwordError: '' });
          }
        },
        {
          key: 'onPassword2TextUpdate',
          value: function (e) {
            this.setState({ password2: e.target.value }), 'The passwords don\'t match.' === this.state.password2Error ? this.state.password === e.target.value && this.setState({ password2Error: '' }) : this.setState({ password2Error: '' });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.match.params ? r.a.createElement('div', { className: y.isMobile ? g.a.mBody : g.a.body }, r.a.createElement(E.a, {
              title: 'Reset Password | Blooket',
              desc: 'Reset your Blooket password. You must have a valid token received from an email to access this page.'
            }), r.a.createElement(_.a, null), r.a.createElement('div', { className: g.a.slantBackground }), r.a.createElement('div', { className: g.a.regularBody }, r.a.createElement('form', {
              onSubmit: this.onReset,
              className: w.a.container
            }, r.a.createElement('div', { className: w.a.containerHeader }, this.state.success ? 'Password Successfully Reset!' : 'Reset Password'), this.state.success ? r.a.createElement(l.a, {
              className: w.a.link,
              to: '/login'
            }, 'Login') : r.a.createElement('div', null, r.a.createElement('div', { className: d()(w.a.inputContainer, x({}, w.a.inputFilled, this.state.email), x({}, w.a.inputError, this.state.emailError)) }, r.a.createElement('i', { className: d()(w.a.lockIcon, 'fas fa-envelope', x({}, w.a.iconFilled, this.state.email), x({}, w.a.iconError, this.state.emailError)) }), r.a.createElement('input', {
              className: d()(w.a.input, x({}, w.a.inputError, this.state.emailError)),
              placeholder: 'Email',
              onChange: function (t) {
                return e.setState({
                  email: t.target.value,
                  emailError: ''
                });
              },
              type: 'text',
              autoFocus: y.isMobile ? '' : 'autofocus'
            })), r.a.createElement('div', { className: d()(w.a.inputContainer, x({}, w.a.inputFilled, this.state.password), x({}, w.a.inputError, this.state.passwordError)) }, r.a.createElement('i', { className: d()(w.a.lockIcon, 'fas fa-lock', x({}, w.a.iconFilled, this.state.password), x({}, w.a.iconError, this.state.passwordError)) }), r.a.createElement('input', {
              className: d()(w.a.input, x({}, w.a.inputError, this.state.passwordError)),
              placeholder: 'Password',
              onChange: this.onPasswordTextUpdate,
              type: 'password'
            })), r.a.createElement('div', { className: d()(w.a.inputContainer, x({}, w.a.inputFilled, this.state.password2), x({}, w.a.inputError, this.state.password2Error)) }, r.a.createElement('i', { className: d()(w.a.lockIcon, 'fas fa-lock', x({}, w.a.iconFilled, this.state.password2), x({}, w.a.iconError, this.state.password2Error)) }), r.a.createElement('input', {
              className: d()(w.a.input, x({}, w.a.inputError, this.state.password2Error)),
              placeholder: 'Confirm Password',
              onChange: this.onPassword2TextUpdate,
              type: 'password'
            })), this.state.loading ? r.a.createElement(k.a, null) : r.a.createElement('input', {
              type: 'submit',
              value: 'Reset',
              className: d()(w.a.button, x({}, w.a.buttonFilled, this.state.password && this.state.password2 && this.state.email), x({}, w.a.buttonError, this.state.passwordError || this.state.password2Error || this.state.emailError)),
              tabIndex: 0
            })), this.state.passwordError || this.state.password2Error || this.state.emailError ? r.a.createElement('div', { className: w.a.errorContainer }, r.a.createElement('i', { className: d()(w.a.errorIcon, 'fas fa-times-circle') }), r.a.createElement('div', { className: w.a.errorText }, this.state.emailError || this.state.passwordError || this.state.password2Error)) : null))) : r.a.createElement(f.a, { to: '/forgot' });
          }
        }
      ]) && S(t.prototype, o), n && S(t, n), s;
    }(r.a.Component);
    R.propTypes = { match: c.a.object };
    t.a = Object(u.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(a.b)({}, e);
    })(R));
  },
  F32n: function (e, t, o) {
    var n = o('WJ5o');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  GF2a: function (e, t, o) {
    var n = o('LOrr');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  Gk0S: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('vDqi'), h = o.n(p), f = o('b6Qr'), m = o('pMbe'), d = o('dJL0'), y = o('tjAp'), b = o.n(y), g = o('GIcp'), v = o.n(g), w = o('X4TR'), _ = o('SCqF'), E = o('iQ+n'), k = o('ZENw'), O = o('SdQT');
    function x(e) {
      return (x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function S(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(o), !0).forEach(function (t) {
          C(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : S(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function C(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function j(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function I(e) {
      return function () {
        var t = this, o = arguments;
        return new Promise(function (n, r) {
          var a = e.apply(t, o);
          function s(e) {
            j(a, n, r, s, i, 'next', e);
          }
          function i(e) {
            j(a, n, r, s, i, 'throw', e);
          }
          s(void 0);
        });
      };
    }
    function P(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function R(e, t) {
      return (R = Object.setPrototypeOf || function (e, t) {
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
        var o, n = B(e);
        if (t) {
          var r = B(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return A(this, o);
      };
    }
    function A(e, t) {
      return !t || 'object' !== x(t) && 'function' != typeof t ? q(e) : t;
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var D = function (e) {
        return r.a.createElement('div', { className: b.a.progressText }, e.progress || 0);
      }, U = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && R(e, t);
        }(i, e);
        var t, o, n, a, s = N(i);
        function i(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, i), (t = s.call(this, e)).state = {
            numCorrect: '',
            numQuestions: '',
            ready: !1,
            progress: 0,
            goalAmount: 0,
            askPlayAgain: !1
          }, t.ok = !1, t.dbRefStage = {}, t.onPlayAgainAnswer = t.onPlayAgainAnswer.bind(q(t)), t.saveStats = t.saveStats.bind(q(t)), t;
        }
        return t = i, (o = [
          {
            key: 'componentDidMount',
            value: (a = I(regeneratorRuntime.mark(function e() {
              var t, o, n, r, a, s, i = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return');
                  case 2:
                    return e.next = 4, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                  case 4:
                    if (this.dbRefStage = e.sent, this.dbRefStage.on('value', function (e) {
                        'join' === e.val() && i.setState({ askPlayAgain: !0 });
                      }), t = this.props.client.standing.map(function (e) {
                        return e.name;
                      }).indexOf(this.props.client.name), this.props.firebase.setVal({
                        id: this.props.client.hostId,
                        path: 'c/'.concat(this.props.client.name),
                        val: {
                          c: T({}, this.props.client.corrects),
                          i: T({}, this.props.client.incorrects)
                        }
                      }), -1 !== t) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt('return');
                  case 10:
                    o = 0, n = 0, Object.values(this.props.client.corrects).forEach(function (e) {
                      o += e, n += e;
                    }), Object.values(this.props.client.incorrects).forEach(function (e) {
                      n += e;
                    }), r = this.props.client.standing[t], a = r.place, s = this.props.client.standing.length - a, this.stats = {
                      place: a,
                      progress: r.progress,
                      goalAmount: this.props.client.amount,
                      playersDefeated: s,
                      correctAnswers: o,
                      blookUsed: this.props.client.blook,
                      nameUsed: this.props.client.name
                    }, this.props.client.username && this.saveStats(this.props.client.username, function () {
                    }), this.readyTimeout = setTimeout(function () {
                      i.setState({
                        ready: !0,
                        numCorrect: o,
                        numQuestions: n,
                        progress: r.progress,
                        goalAmount: i.props.client.amount
                      });
                    }, 4750);
                  case 20:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function () {
              return a.apply(this, arguments);
            })
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.readyTimeout), this.ok || this.props.deleteClient(), Object.keys(this.dbRefStage).length && this.dbRefStage.off('value');
            }
          },
          {
            key: 'onPlayAgainAnswer',
            value: function (e) {
              var t = this;
              e ? (this.ok = !0, h.a.put('/api/firebase/join', {
                id: this.props.client.hostId,
                name: this.props.client.name
              }).then(function () {
                var e = I(regeneratorRuntime.mark(function e(o) {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch (e.prev = e.next) {
                      case 0:
                        if (!(n = o.data).success) {
                          e.next = 12;
                          break;
                        }
                        return e.next = 4, new Promise(function (e) {
                          return t.props.firebase.setAuth(t.props.client.hostId, n.fbToken, e);
                        });
                      case 4:
                        if (new Promise(function (e) {
                            t.props.firebase.setClient(t.props.client.hostId, t.props.client.name, n.blook, function (t) {
                              return e(t);
                            });
                          })) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt('return', t.props.history.push('/play'));
                      case 7:
                        window.addEventListener('beforeunload', function () {
                          t.props.client && t.props.client.hostId && t.props.client.name && t.props.firebase.removeVal(t.props.client.hostId, 'c/'.concat(t.props.client.name));
                        }), t.props.setBlook(n.blook, w.a[n.blook]), t.props.history.push('/play/lobby'), e.next = 13;
                        break;
                      case 12:
                        t.setState({ askPlayAgain: !1 });
                      case 13:
                      case 'end':
                        return e.stop();
                      }
                  }, e);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }()).catch(function (e) {
                console.error(e), t.setState({ askPlayAgain: !1 });
              })) : this.setState({ askPlayAgain: !1 });
            }
          },
          {
            key: 'saveStats',
            value: function (e, t) {
              h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/users/racingstats', {
                name: e,
                place: this.stats.place,
                progress: this.stats.progress,
                goalAmount: this.stats.goalAmount,
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
              var e = this;
              return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement('div', {
                className: f.isMobile ? v.a.mBody : v.a.body,
                style: { backgroundColor: '#0bc2cf' }
              }, r.a.createElement(E.a, {
                title: 'Play Blooket',
                desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
              }), r.a.createElement(d.a, {
                leftText: this.props.client.name,
                rightText: 'Play Again',
                rightLink: '/play'
              }), this.state.ready ? r.a.createElement(k.a, {
                standings: this.props.client.standing,
                name: this.props.client.name,
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.props.client.username,
                plus: this.props.client.plus,
                myStat: ''.concat(this.state.progress, ' / ').concat(this.state.goalAmount),
                saveStats: this.saveStats,
                renderStandingStat: D,
                renderStats: function () {
                },
                tokenMultiplier: 0.35
              }) : null, this.state.askPlayAgain ? r.a.createElement(_.a, {
                text: 'The host is playing again with the same settings, would you like to join?',
                buttonOne: {
                  text: 'Yes!',
                  click: function () {
                    return e.onPlayAgainAnswer(!0);
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.onPlayAgainAnswer(!1);
                  },
                  color: 'blue'
                }
              }) : null) : r.a.createElement(u.a, { to: '/play' });
            }
          }
        ]) && P(t.prototype, o), n && P(t, n), i;
      }(r.a.Component);
    U.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        answer: c.a.string,
        standing: c.a.array,
        blook: c.a.string,
        corrects: c.a.any,
        question: c.a.object,
        username: c.a.string,
        mode: c.a.string,
        type: c.a.string,
        incorrects: c.a.object,
        upgrades: c.a.number,
        plus: c.a.bool,
        amount: c.a.number
      }),
      history: c.a.object.isRequired,
      setBlook: c.a.func.isRequired,
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        setBlook: m.d,
        deleteClient: m.a
      }, e);
    })(Object(O.d)(U)));
  },
  K2ap: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__winsText___3keHx-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}',
      ''
    ]), t.locals = { winsText: 'styles__winsText___3keHx-camelCase' };
  },
  L03M: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__matchArray___2T05N-camelCase{overflow:hidden;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;display:flex;flex-direction:column;align-content:flex-start;opacity:0;-webkit-animation:styles__fadeIn___3KU1L-camelCase .3s linear .75s forwards;animation:styles__fadeIn___3KU1L-camelCase .3s linear .75s forwards}@-webkit-keyframes styles__fadeIn___3KU1L-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___3KU1L-camelCase{0%{opacity:0}to{opacity:1}}.styles__invisible___3DSz0-camelCase{opacity:0;transition:opacity .5s linear}',
      ''
    ]), t.locals = {
      matchArray: 'styles__matchArray___2T05N-camelCase',
      fadeIn: 'styles__fadeIn___3KU1L-camelCase',
      invisible: 'styles__invisible___3DSz0-camelCase'
    };
  },
  LOrr: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__eliminatedContainer___3mWOa-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;-webkit-animation:styles__fadeIn___2e7UV-camelCase .1s linear .5s forwards;animation:styles__fadeIn___2e7UV-camelCase .1s linear .5s forwards}@-webkit-keyframes styles__fadeIn___2e7UV-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___2e7UV-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___3gR2F-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___3aRWT-camelCase{font-size:26px;font-family:Nunito,sans-serif}',
      ''
    ]), t.locals = {
      eliminatedContainer: 'styles__eliminatedContainer___3mWOa-camelCase',
      fadeIn: 'styles__fadeIn___2e7UV-camelCase',
      eliminatedHeader: 'styles__eliminatedHeader___3gR2F-camelCase',
      eliminatedText: 'styles__eliminatedText___3aRWT-camelCase'
    };
  },
  MliO: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('b6Qr'), h = o('TSYQ'), f = o.n(h), m = o('bMSx'), d = o('pMbe'), y = o('2g2H'), b = o('iQ+n'), g = o('7Vp8'), v = o.n(g), w = o('GIcp'), _ = o.n(w), E = o('7HkA'), k = o('EOwo'), O = o('CKiD'), x = o('SdQT'), S = o('TN+F');
    function T(e) {
      return (T = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function j(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function I(e, t) {
      return (I = Object.setPrototypeOf || function (e, t) {
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
        var o, n = N(e);
        if (t) {
          var r = N(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return R(this, o);
      };
    }
    function R(e, t) {
      return !t || 'object' !== T(t) && 'function' != typeof t ? function (e) {
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
        }), t && I(e, t);
      }(c, e);
      var t, o, n, a, s, i = P(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = { tip: Object(k.a)() }, t.dbRef = {}, t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t, o, n = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(S.c)(), t = this.props.client.team, o = t ? this.props.client.team.blook : this.props.client.name, e.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 7:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    switch (e.val()) {
                    case 'bres':
                      n.props.history.push('/play/battle-royale/answer/result');
                      break;
                    case 'prv':
                      n.props.firebase.getDatabaseVal(n.props.client.hostId, 'c/'.concat(o), function (e) {
                        e && e.op ? n.props.firebase.getDatabaseVal(n.props.client.hostId, 'c/'.concat(e.op), function (r) {
                          r ? (n.props.prepareMatch(e.e, [
                            {
                              name: t ? O.a[o] : o,
                              energy: e.e,
                              blook: t ? o : n.props.client.blook,
                              players: e.p
                            },
                            {
                              name: t ? O.a[e.op] : e.op,
                              energy: r.e,
                              blook: t ? e.op : r.b,
                              players: r.p,
                              clone: r.op !== o
                            }
                          ]), n.props.history.push('/play/battle-royale/match/preview')) : (n.props.prepareMatch(e.e, null), n.props.history.push('/play/battle-royale/match/preview'));
                        }) : (n.props.prepareMatch(0, null), n.props.history.push('/play/battle-royale/match/preview'));
                      });
                      break;
                    case null:
                      n.props.deleteClient(), n.props.history.push('/play');
                    }
                  });
                case 9:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                C(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                C(r, o, n, s, i, 'throw', e);
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
            Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(S.t)();
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer ? r.a.createElement('div', {
              className: p.isMobile ? _.a.mBody : _.a.body,
              style: {
                backgroundColor: '#fff',
                overflow: 'hidden'
              }
            }, r.a.createElement(b.a, {
              title: 'Play Royale | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(y.a, {
              name: this.props.client.name,
              energy: this.props.client.energy
            }), r.a.createElement('div', { className: _.a.regularBody }, r.a.createElement(E.a, {
              header: 'Answer Sent!',
              blook: this.props.client.team ? this.props.client.team.blook : this.props.client.blook,
              transition: this.state.transitioning
            }), r.a.createElement('div', {
              className: f()(_.a.bottomTipText, (e = {}, t = v.a.textFade, o = this.state.transitioning, t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = o, e))
            }, this.state.tip), r.a.createElement('div', { className: this.state.transitioning ? v.a.fade : v.a.fadeWaiting }))) : r.a.createElement(u.a, { to: '/play' });
            var e, t, o;
          }
        }
      ]) && j(t.prototype, o), n && j(t, n), c;
    }(r.a.Component);
    A.propTypes = {
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
        energy: c.a.number,
        question: c.a.object,
        times: c.a.array,
        safe: c.a.bool,
        team: c.a.object
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      prepareMatch: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        deleteClient: d.a,
        prepareMatch: m.a
      }, e);
    })(Object(x.d)(A)));
  },
  OMPg: function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return n;
    });
    var n = 'RACING_RESULTS';
  },
  Oy1k: function (e, t, o) {
    var n = o('K2ap');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  'P/T4': function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('2rpR');
    function m(e, t, o, n, r, a, s) {
      return {
        type: f.a,
        clientAnswers: e,
        matches: t,
        players: o,
        numClients: n,
        dead: r,
        forDead: a,
        safe: s
      };
    }
    var d = o('1b17'), y = o('5gLy'), b = o('9IXX'), g = o('GIcp'), v = o.n(g), w = o('iQ+n'), _ = o('aCwo'), E = o('2k7N'), k = o.n(E), O = o('SdQT'), x = o('TN+F');
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function T(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function C(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? T(Object(o), !0).forEach(function (t) {
          j(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : T(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function j(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function I(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return P(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return P(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function P(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function R(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function N(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function A(e, t) {
      return (A = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function q(e) {
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
        var o, n = U(e);
        if (t) {
          var r = U(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return B(this, o);
      };
    }
    function B(e, t) {
      return !t || 'object' !== S(t) && 'function' != typeof t ? D(e) : t;
    }
    function D(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function U(e) {
      return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && A(e, t);
      }(c, e);
      var t, o, n, a, s, i = q(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          numAnswers: 0,
          numClients: 0,
          players: 0,
          transitioning: !1,
          muted: !!e.host && e.host.muted
        }, t.ok = !0, t.dbRef = {}, t.answerObj = {}, t.next = t.next.bind(D(t)), t.changeMuted = t.changeMuted.bind(D(t)), t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return this.props.firebase.getDatabaseVal(this.props.host.id, 'c', function (e) {
                    if (t.props.host && t.props.host.settings && t.props.host.settings.mode) {
                      var o = e || {};
                      t.setState({
                        numClients: 'Teams' === t.props.host.settings.mode ? Object.values(o).reduce(function (e, t) {
                          return e + Object.keys(t.p).length;
                        }, 0) : Object.keys(o).length
                      });
                    }
                  }), this.setState({ players: this.props.host.players.length }), e.next = 6, this.props.firebase.getDatabaseRef(this.props.host.id, 'a');
                case 6:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    var o = e.val() ? Object.values(e.val()) : [];
                    o.length > 0 && !t.state.muted && new Audio(k.a).play(), t.answerObj = e.val() || {}, t.setState({ numAnswers: o.length }), o.length === t.state.numClients && 0 !== t.state.numClients && t.next();
                  });
                case 8:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                R(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                R(r, o, n, s, i, 'throw', e);
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
            clearTimeout(this.transitionTimeout), Object.keys(this.dbRef).length && this.dbRef.off('value'), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', x.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            this.setState({ transitioning: !0 }, function () {
              if (e.props.host && e.props.host.matches) {
                var t = JSON.parse(JSON.stringify(e.props.host.matches)), o = [];
                Object.entries(e.answerObj).forEach(function (n) {
                  var r = I(n, 2), a = r[0], s = r[1], i = e.props.host.question.correctAnswers.includes(e.props.host.question.answers[s.a]);
                  if (i && o.push(s.t), 'Teams' === e.props.host.settings.mode) {
                    for (var c = i ? s.t : 1000 * e.props.host.question.timeLimit, l = t.length - 1; l >= 0; l--)
                      if (Object.keys(t[l][0].players).includes(a)) {
                        if (t[l][0].players[a].time = c, i && (t[l][0].correct = !0), !t[l][0].clone)
                          break;
                      } else if (Object.keys(t[l][1].players).includes(a) && (t[l][1].players[a].time = c, i && (t[l][1].correct = !0), !t[l][1].clone))
                        break;
                  } else
                    for (var u = t.length - 1; u >= 0; u--)
                      if (t[u][0].name === a) {
                        if (t[u][0] = C(C({}, t[u][0]), {}, {
                            time: s.t,
                            correct: i
                          }), !t[u][0].clone)
                          break;
                      } else if (t[u][1].name === a && (t[u][1] = C(C({}, t[u][1]), {}, {
                          time: s.t,
                          correct: i
                        }), !t[u][1].clone))
                        break;
                });
                var n = function (t) {
                  return t[1].time || 1000 * e.props.host.question.timeLimit;
                };
                if ('Teams' === e.props.host.settings.mode)
                  for (var r = 0; r < t.length; r++)
                    t[r][0].time = parseFloat((Object.entries(t[r][0].players).map(n).reduce(function (e, t) {
                      return e + t;
                    }, 0) / Object.keys(t[r][0].players).length).toFixed(3)), t[r][1].time = parseFloat((Object.entries(t[r][1].players).map(n).reduce(function (e, t) {
                      return e + t;
                    }, 0) / Object.keys(t[r][1].players).length).toFixed(3));
                for (var a = e.props.host.players.map(function (e) {
                      return C({}, e);
                    }), s = e.props.host.players.map(function (e) {
                      return e.name;
                    }), i = 0; i < t.length; i++) {
                  var c = t[i];
                  0 === c[0].time ? (t[i][0].time = 1000 * e.props.host.question.timeLimit, -1 !== s.indexOf(c[0].name) && (a[s.indexOf(c[0].name)].energy -= 1)) : (!c[0].correct || c[1].correct && !c[0].correct || c[1].correct && c[1].time < c[0].time) && -1 !== s.indexOf(c[0].name) && (a[s.indexOf(c[0].name)].energy -= 1), c[1].clone ? 0 === c[1].time && (t[i][1].time = 1000 * e.props.host.question.timeLimit) : 0 === c[1].time ? (t[i][1].time = 1000 * e.props.host.question.timeLimit, -1 !== s.indexOf(c[1].name) && (a[s.indexOf(c[1].name)].energy -= 1)) : (!c[1].correct || c[0].correct && !c[1].correct || c[0].correct && c[0].time < c[1].time) && -1 !== s.indexOf(c[1].name) && (a[s.indexOf(c[1].name)].energy -= 1);
                }
                var l = C({}, e.props.host.dead), u = !1, p = a.filter(function (e) {
                    return e.energy > 0;
                  });
                0 === p.length ? (u = !0, p = a.map(function (e) {
                  return C(C({}, e), {}, { energy: 1 });
                })) : l[e.props.host.round] = a.filter(function (e) {
                  return e.energy <= 0;
                });
                for (var f = e.state.numClients - o.length, m = 0; m < f; m++)
                  o.push(1000 * e.props.host.question.timeLimit + 1);
                e.transitionTimeout = setTimeout(function () {
                  if (e.props.setRoyaleResults(Object.values(e.answerObj).map(function (e) {
                      return e.a;
                    }), t, p, e.state.numClients, l, o, u), 'Teams' === e.props.host.settings.mode) {
                    var n = {};
                    t.forEach(function (e) {
                      n[e[0].blook] = e[0].time, n[e[1].blook] = e[1].time;
                    }), e.props.firebase.setVal({
                      id: e.props.host.id,
                      path: 'c',
                      val: n
                    }, function () {
                      h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                        id: e.props.host.id,
                        stage: 'bres'
                      }, function () {
                        e.ok = !0, e.props.history.push('/host/battle-royale/question/results');
                      });
                    });
                  } else
                    h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                      id: e.props.host.id,
                      stage: 'bres'
                    }, function () {
                      e.ok = !0, e.props.history.push('/host/battle-royale/question/results');
                    });
                }, 300);
              }
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
            return this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches ? r.a.createElement('div', { className: v.a.body }, r.a.createElement(w.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(b.a, {
              left: 'Round '.concat(this.props.host.round),
              right: ''.concat(this.state.players || this.props.host.players.length, ' ').concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain'),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement(_.a, {
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
      ]) && N(t.prototype, o), n && N(t, n), c;
    }(r.a.Component);
    L.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        round: c.a.number,
        players: c.a.array,
        matches: c.a.array,
        dead: c.a.object,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      setRoyaleResults: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(a.b)({
        setRoyaleResults: m,
        setMuted: d.a,
        deleteHost: y.c
      }, e);
    })(Object(O.d)(L)));
  },
  PQSK: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('wIs1'), c = o('GIcp'), l = o.n(c), u = o('fJTD'), p = o.n(u), h = o('dJL0'), f = o('iQ+n');
    function m(e) {
      return (m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function d(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function b(e) {
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
        var o, n = v(e);
        if (t) {
          var r = v(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return g(this, o);
      };
    }
    function g(e, t) {
      return !t || 'object' !== m(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function v(e) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var w = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && y(e, t);
      }(s, e);
      var t, o, n, a = b(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = a.call(this, e)).state = {}, t;
      }
      return t = s, (o = [
        {
          key: 'componentDidMount',
          value: function () {
            window.scrollTo(0, 0);
          }
        },
        {
          key: 'render',
          value: function () {
            return r.a.createElement('div', {
              className: l.a.body,
              style: { paddingBottom: 40 }
            }, r.a.createElement(f.a, {
              title: 'Privacy Policy | Blooket',
              desc: 'Blooket\'s privacy policy was created to protect its users and notify users of any data that is being collected.'
            }), r.a.createElement(h.a, null), r.a.createElement('div', { className: p.a.mainHeader }, 'Blooket Privacy Policy'), r.a.createElement('div', {
              className: p.a.text,
              style: { fontStyle: 'italic' }
            }, '\n          Last updated January 25, 2021\n          '), r.a.createElement('div', { className: p.a.text }, '\n          Blooket LLC operates Blooket.com. We would first like to thank the users and educators who have made this website possible.\n          The privacy of our users is very important to us.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          Blooket LLC (\u201CBLOOKET\u201D) is concerned about the protection of privacy of all of our users.  Blooket wants you to be familiar with how we collect, use and disclose information. This Privacy Policy describes our practices in connection with information that we collect through websites operated by us from which you are accessing this Privacy Policy (the \u201CWebsite\u201D) and through HTML-formatted email messages that we send that link to this Privacy Policy (collectively, the \u201CServices\u201D). By providing Personal Information to us, you agree to the terms and conditions of this Privacy Policy.\n          '), r.a.createElement('div', {
              className: p.a.text,
              style: { fontWeight: 'bold' }
            }, '\n          BLOOKET IS COMMITTED TO REMAINING AN AD FREE SERVICE TO OUR USERS.  BLOOKET WILL NOT ADVERTISE IN ANY FORM ON THE SITE.\n          '), r.a.createElement('div', { className: p.a.text }, 'This Privacy Policy explains:', r.a.createElement('ul', null, r.a.createElement('li', null, 'What information Blooket collects from you (and why we collect it).'), r.a.createElement('li', null, 'How we use and share that information.'), r.a.createElement('li', null, 'The choices you have, including how to access, update and delete your information.'), r.a.createElement('li', null, '\n              This Policy applies to all services offered by Blooket LLC (hereinafter referred to as \u201CBlooket,\u201D \u201Cwe,\u201D \u201Cus," and \u201Cour,\u201D).\n              '), r.a.createElement('li', null, 'This policy applies to Blooket Users and Visitors as well as educators and schools who utilize the service in a classroom setting.  Blooket users are our registered account holders.  Blooket Visitors are parties invited to play a game or engage in homework by a registered user or school.  The only information collected from visitors is a username of their choice.')), 'We have done our best to write this Policy in simple, clear terms. We encourage you to read it carefully, together with any other privacy notice we may provide on specific occasions when we are collecting or processing personal information about you, so that you are aware of how and why we are using such information.', r.a.createElement('ul', null, r.a.createElement('li', null, 'Purpose of processing: provide access to and use of Blooket.com.'), r.a.createElement('li', null, 'Legal grounds: processing based on user consent, contract performance and the legitimate interest of the company or third parties.'), r.a.createElement('li', null, 'Recipients: Blooket third-party service providers which help provide the Service. Please see the Security measures section of this Privacy Policy for more information.'), r.a.createElement('li', null, 'User rights: access, rectification, erasure, restriction, objection and data portability (see the Blooket Privacy Principles section of this Privacy Policy).'), r.a.createElement('li', null, 'Inquiries: for inquiries regarding this Privacy Policy please contact Blooket at contact-us@blooket.com or at the physical address listed at the end of this Policy.'), r.a.createElement('li', null, 'Additional information: to be found in Blooket\u2019s Terms of Service and this Privacy Policy.'))), r.a.createElement('div', { className: p.a.text }, '\n          Personal information is any information you provide to us that personally identifies you, like your name or email address, or any other information which we could reasonably link to your identity. We will only collect, use, and share your personal information in accordance with this Privacy Policy. This Policy applies whether you use Blooket through Blooket.com. In addition, this Privacy Policy also covers Blooket\'s treatment of any personal information about our users that our partners or other services might share with us. This Policy does not apply to websites or services or practices of companies that Blooket does not own or control. These other services have their own privacy policies, and we encourage you to review them before providing them with personal information. At the end of this Privacy Policy you will find a list with our third-party service providers and a link to their privacy policies, as well as an overview to how, why and under which conditions they might process your personal information. Whether you are new here (welcome!), or have been using Blooket for a long time (welcome back!), please do take the time to get to know our privacy practices. We believe them to be fairly clear and friendly, but if you have any questions, we are here to help. To learn more about how we protect your privacy, send us an email at contact-us@blooket.com. BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU ACCEPT AND AGREE TO THIS PRIVACY POLICY. This Privacy Policy applies to your use of the Blooket Services and personal data transferred to third countries which do not ensure an adequate level of data protection. In addition to the foregoing, and to further secure transfers of personal data to the United States, Blooket also complies with the EU-US and Swiss-US Privacy Shield Frameworks as set forth by the US Department of Commerce regarding the collection, use and retention of personal information from European Union member countries, the United Kingdom and Switzerland, respectively. Blooket remains responsible for any of your personal information that is shared under the Onward Transfer Principle with third parties for external processing on your behalf, as described in the Europe section of this Privacy Policy.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Blooket'), r.a.createElement('div', { className: p.a.text }, 'Blooket provides a game-based learning tool that can be played through most web browsers (', r.a.createElement('a', {
              href: 'https://www.blooket.com',
              style: { color: '#0bc2cf' }
            }, 'https://www.blooket.com'), '). Blooket is an exciting new take on trivia and review games! Blooket creates an engaged learning environment that motivates students. One player or teacher hosts the game, and everyone else competes on their own devices.'), r.a.createElement('div', { className: p.a.subheader }, 'Blooket Privacy Principles'), r.a.createElement('div', { className: p.a.text }, '\n          In collecting and processing your personal information, we will comply with the data protection laws and regulations in force at the time. This requires that the personal information we hold about you must be:\n          '), r.a.createElement('ul', { className: p.a.text }, r.a.createElement('li', null, 'Used lawfully, fairly and in a transparent way.'), r.a.createElement('li', null, 'Collected only for valid purposes that we have clearly explained to you and not used in a way that is incompatible with those purposes.'), r.a.createElement('li', null, 'Relevant to the purposes we have told you about and limited only to those purposes.'), r.a.createElement('li', null, 'Accurate and kept up-to-date.'), r.a.createElement('li', null, 'Kept only as long as necessary for the purposes we have told you about.'), r.a.createElement('li', null, 'Kept securely.')), r.a.createElement('div', { className: p.a.subheader }, 'Collection of Personal Information'), r.a.createElement('div', { className: p.a.text }, '\n          Blooket collects personal information from users in order to provide the Service. Concretely, the personal information of students and teachers is collected and used for the following purposes:\n          '), r.a.createElement('ul', { className: p.a.text }, r.a.createElement('li', null, 'To create the necessary accounts to use the Service.'), r.a.createElement('li', null, 'To assess the quality of the Service.'), r.a.createElement('li', null, 'To secure and safeguard personal information.'), r.a.createElement('li', null, 'To access premium features, if applicable.'), r.a.createElement('li', null, 'To comply with all applicable laws on the protection of personal information.')), r.a.createElement('div', { className: p.a.subheader }, 'Rights Regarding Personal Information'), r.a.createElement('div', { className: p.a.text }, 'Your rights relating to your personal information include:', r.a.createElement('ul', null, r.a.createElement('li', null, 'to be informed about how Blooket uses your personal information;'), r.a.createElement('li', null, 'to request access to personal information held by Blooket, and to have any incorrect, inaccurate or incomplete personal information rectified;'), r.a.createElement('li', null, 'where appropriate, to restrict processing concerning you or to object to processing;'), r.a.createElement('li', null, 'to have personal information erased where there is no compelling reason for its continued processing; and'), r.a.createElement('li', null, 'where applicable, to portability of personal data, that is to say, to receive your personal information in a structured and commonly used format.'))), r.a.createElement('div', { className: p.a.subheader }, 'Responsibilities of Users of Blooket.com'), r.a.createElement('div', { className: p.a.text }, '\n          We require that your personal information is accurate. Please let us know if the personal information you provided us for creating your account has changed. If we do not have the correct information, we cannot take responsibility for information-related errors. Additionally, if we determine that you are in violation of this Policy, you will be subject to disciplinary action that could eventually lead to the banning of your account.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Transparency and Choice'), r.a.createElement('div', { className: p.a.text }, 'We try to be transparent about what information we collect, so that you can make meaningful choices about how it is used. For example, you can:', r.a.createElement('ul', null, r.a.createElement('li', null, 'Access and manage your account information by using the account settings within Blooket.'), r.a.createElement('li', null, 'Delete your account and information. '))), r.a.createElement('div', { className: p.a.subheader }, 'Notice'), r.a.createElement('div', { className: p.a.text }, '\n          When providing you with information on the processing of your personal information, such as its collection, transfer to other countries, types or identity of third parties to which we disclose that information and the purposes for which we do so, we will make sure that such information is provided in clear and understandable language. Also, initial notice on our practices and policies will be provided when you are first asked to provide personal information to us, or as soon as practicable thereafter, and in any event before we use the information for a purpose other than that for which it was originally collected.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Change of Purpose'), r.a.createElement('div', { className: p.a.text }, '\n          We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason which is compatible with the original purpose. If we need to use your personal information for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Contract Performance'), r.a.createElement('div', { className: p.a.text }, '\n          When you create a Blooket account, you provide your first and last name and an email address. We require those data elements for you to enter into the Terms of Service agreement with us, and we process those elements on the basis of performing that contract.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Consent'), r.a.createElement('div', { className: p.a.text }, '\n          Please note that Blooket provides its Service upon explicit consent given by you when signing up. Prior to signing up, we will direct you to our Terms of Use and this Privacy Policy. When signing up, you will be declaring to have read such policies and to consent to them. Remember, nonetheless, that you will be able to withdraw your consent at any time by deleting your account by contacting Blooket to have your account deleted. EDUCATIONAL INSTITUTIONS AND EDUCATORS UTILIZING THE SERVICE ARE RESPONSIBLE FOR MONITORING THE RIGHTS AND INTERESTS OF THEIR STUDENTS AND MUST THEREFORE TAKE SPECIAL CARE WHEN REVIEWING THIS PRIVACY POLICY. EDUCATIONAL INSTITUTIONS AND EDUCATORS SHALL BE RESPONSIBLE FOR OBTAINING, WHERE APPLICABLE, PERTINENT CONSENT FROM PARENTS, LEGAL GUARDIANS OR ELIGIBLE STUDENTS (THOSE WHO ARE 18 YEARS OF AGE OR ATTEND A POSTSECONDARY INSTITUTION) PRIOR TO UTILIZING THE SERVICE. BLOOKET SHALL NOT BE RESPONSIBLE FOR ANY NEGLIGENCE OF THE EDUCATIONAL INSTITUTION IN THE REVIEWING OF THIS PRIVACY POLICY OR THE OBTAINMENT, WHERE APPLICABLE, OF THE NECESSARY PARENTAL CONSENT. U.S. Educational Institutions and Parental Consent: Consistent with the requirements of COPPA, if you or your school decide to utilize the Service with children under 13, you will be electing to either obtain parental consent or to consent on behalf of the children\'s parents directly, which is commonly referred to as "school consent." At the same time, yet subject to exceptions, FERPA prohibits schools from disclosing personally identifiable information from a student\'s education record to a third party without written consent from the parent or eligible student. Accordingly, schools must either obtain parental consent, or ensure that their use of Blooket meets one of FERPA\'s exceptions to the written consent requirement. Typically, schools are exempted from obtaining parental consent under FERPA when Blooket is identified as a "school official," meaning Blooket is performing an institutional service or function for which the school would otherwise use its own employees. Educators and schools may disclose certain information about students under the exception to FERPA\'s general prior consent rule that are set forth in the statute and the regulations for the disclosure of "directory information" if the school follows certain procedures set forth in FERPA. (34 CFR \xA7 99.31(a)(11).) FERPA defines "directory information" as information contained in the education records of a student that would not generally be considered harmful or an invasion of privacy if disclosed. Typically, "directory information" includes information such as name, address, telephone listing, date and place of birth, participation in officially recognized activities and sports, and dates of attendance. A school may disclose "directory information" to third parties without consent if it has given public notice of the types of information which it has designated as "directory information," the parent\'s or eligible student\'s right to restrict the disclosure of such information, and the period of time within which a parent or eligible student has to notify the school in writing that he or she does not want any or all of those types of information designated as "directory information." The means of notification could include publication in various sources, including a newsletter, in a local newspaper, or in the student handbook. The school could also include the "directory information" notification as part of the general notification of rights under FERPA. The school does not have to notify a parent or eligible student individually.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          European Educational Institutions and GDPR: According to article 8 of the GDPR, minors shall be entitled to give valid consent only if they are 16 years old (unless Member States have set a lower age limit which, nonetheless, cannot be under 13 years old). Under that age limit, processing of personal information related to minors shall be subject to parental consent. Schools are in control of their students\u2019 personal information and are obliged to take all necessary measures for protecting said information. This means that schools will have to be especially cautious when contracting any service that may require disclosure of student personal information. In other words, schools are data controllers in terms of GDPR and thus determine the purposes and means of the processing of student personal data. As a consequence, schools will also be responsible for informing students and their parents accordingly about what data is collected, which are the purposes of collection, how data is used and to which third parties it is disclosed, including Blooket.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Legitimate Interests'), r.a.createElement('div', { className: p.a.text }, '\n          Generally, the remainder of the processing of personal information we perform is necessary for the purposes of our legitimate interests or those of third parties. For example, for legal compliance purposes or to maintain ongoing confidentiality, integrity, availability and resilience of Blooket\'s systems, website, and overall services, we must keep logs of Technical Information. As foreseen in the "Restrictions" and "Account Bans\'\' sections of our Terms of Service, the breach of certain rules in the use of the Service may lead to the suspension or indefinite ban of your account, depending on the severity of the offense. In the event of an indefinite account ban, Blooket may keep part of your personal information, such as, but not limited to, IP address and email address, to prevent you from accessing or using the Service.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Notice of Changes of Policy'), r.a.createElement('div', { className: p.a.text }, '\n          We may occasionally update this Privacy Policy. You can see when the last update was by looking at the \u201CLast Updated\u201D date at the top of this page. We will not reduce your rights under this Privacy Policy without your explicit consent. If we make any significant changes, we will provide prominent notice by posting a notice on the Service and/or notifying you by email (using the email address you provided) prior to and after changes taking effect, so you can review and make sure you\'re aware of them. We encourage you to review this Privacy Policy from time to time, to stay informed about our collection, use, and disclosure of personal information through the Service. If you do not agree with any changes to the Privacy Policy, you may delete your account (although we will be sad to see you go!). By continuing to use the Service after the revised Privacy Policy has become effective, you acknowledge that you accept and agree to the current version of the Privacy Policy.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Protecting the Privacy Rights of Children'), r.a.createElement('div', { className: p.a.text }, '\n          Blooket permits registered users to invite visitors to the website.  Visitors are only required to provide a username to play a game or complete a homework assignment.  Blooket permits children under the age of thirteen to become users only with parental consent.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          Blooket collects the minimal amount of information from users necessary to create accounts on our Service. Beyond this information, users and visitors can submit responses. In addition to the information entered by the child, we automatically collect some information from any use of our Service as set forth in the "Information Collected Automatically" section. We use this information to provide the Service to the child, for security and safety purposes, or as required by law or to enforce our Terms. We will not require children to provide more personal information than is reasonably necessary in order to participate in the Service. If we discover that we have collected information from a child in a manner inconsistent with COPPA, FERPA or any other applicable laws or regulations, we will take appropriate steps to delete the information. We do not disclose any personal information about children to third parties, except to service providers necessary to provide the Service, as required by law, or to protect the security of the Service or other users. Information collected from students (including personal information and information collected automatically) is never used or disclosed for third-party advertising, including any kind of first- or third-party behaviorally targeted advertising, and children\u2019s personal information is never sold or rented to anyone, including marketers or advertisers.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          Blooket does not permit children under the age of 13 (a \u201CChild\u201D or \u201CChildren\u201D) to create an account without the consent and at the direction of a Parent or School official consenting in loco parentis. Children under 13 may create an account with the parent\'s consent.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          When Blooket is used by a School in an educational setting, we may rely on the School to provide the requisite consent for Blooket to collect information from a School User under the age of 13, in lieu of parental consent.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Information regarding Children'), r.a.createElement('div', { className: p.a.text }, '\n          No student\u2019s profile is made available or visible to the public, or to any other students, through Blooket. If the teacher chooses to display Blooket in their classroom by projecting via a smartboard or interactive whiteboard, students physically present in that classroom may see other students\u2019 usernames, responses, comments or total scores. EDUCATIONAL INSTITUTIONS AND TEACHERS SHALL MAKE A RESPONSIBLE USE OF THE SERVICE AND AVOID COMPROMISING CHILDREN\'S PERSONAL INFORMATION AT ALL TIMES WHEN DISPLAYING BLOOKET IN THE CLASSROOM. BLOOKET SHALL NOT BE HELD LIABLE FOR THE INAPPROPRIATE USE OF THE SERVICE BY THE EDUCATIONAL INSTITUTION OR THE TEACHER.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Storage of Data'), r.a.createElement('div', { className: p.a.text }, '\n          We store the data of visitors including usernames in order to allow users to evaluate the homework or evaluate participation in games.\n          '), r.a.createElement('ul', { className: p.a.text }, r.a.createElement('li', null, '\n            Minimal information: As mentioned before, Blooket collects the minimal amount of information from students necessary to utilize our Service: we ask student who are invited to play the games or participate in homework to only create a username.  Students who join as users with parental consent or who are above specified ages only provide names, email addresses and usernames. Consistent with the requirements of FERPA and COPPA in the United States and of GDPR in Europe, among other applicable laws, we only collect, use, share, and retain student personal information for purposes for which we were authorized by the educational institution/agency, teacher or the student. Beyond this information, students can submit responses depending on the activities they are assigned, that will remain private between teacher and student. In addition to the information entered by the child, we automatically collect some information from any use of our Service as set forth in the "Information collected automatically" section.\n            '), r.a.createElement('li', null, 'Deleting inactive accounts: Blooket will delete inactive accounts and data in compliance with the data retention policy of the company.')), r.a.createElement('div', { className: p.a.text }, '\n          After deletion of the account or data, Blooket may retain copies and/or backups of the mentioned information for a maximum term of eighteen (18) months. Nevertheless, Blooket shall not be responsible for the accidental loss or destruction of data on behalf of users. Blooket will not be obliged to recover erased data stored in backups when erasure is attributable to users. EDUCATIONAL INSTITUTIONS UTILIZING THE SERVICE ARE RESPONSIBLE FOR COMPLYING WITH THE RETENTION OF STUDENT EDUCATION RECORDS FOR AS LONG AS LEGALLY APPLICABLE. STUDENT PROGRESS MAY BE SAVED FOR EITHER SHORTER OR LONGER PERIODS THAN THE ONES STATED ABOVE IF SO DECIDED BY THE EDUCATIONAL INSTITUTION. TEACHER ACCOUNTS WILL BE PROVIDED WITH NECESSARY TOOLS TO MANAGE AND DELETE STUDENT INFORMATION.BLOOKET SHALL NOT BE RESPONSIBLE FOR ERASURE OF STUDENT PROGRESS DUE TO ACCOUNT DELETION AFTER AN EXTENDED PERIOD OF INACTIVITY OR BECAUSE OF THE VOLUNTARY ELECTION TO DELETE TEACHER ACCOUNTS. SCHOOL OFFICIALS MAY REQUEST DELETION OF STUDENT INFORMATION AND CONTENT AT ANY TIME BY CONTACTING BLOOKET AT CONTACT-US@BLOOKET.COM.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Parental Choices'), r.a.createElement('div', { className: p.a.text }, '\n          Any parents that want copies of their children\u2019s personal information that we may have stored can contact their children\u2019s school personnel to that end. If a parent has authorized an account, they also may contact Blooket to retrieve their child\u2019s personal information. At any time, the school can also refuse to permit us to collect further personal information from its students, and can request that we delete the personal information we have collected from them by contacting us at contact-us@Blooket.com.  Please keep in mind that deleting records may require us to terminate the account in question. Also remember that before we can share the information with the school, or delete it per your request, we will, by reasonable means, proceed to verify the identity of the requester.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Information Collected'), r.a.createElement('div', { className: p.a.text }, '\n          Blooket collects two types of information about you: (1) information that you voluntarily provide us by using the Blooket Service (described below under "Information you provide to us") and (2) information collected automatically as result of your use of the Service (described below under \u201CInformation collected automatically\u201D). The types and amounts of information collected will vary depending on whether the user is a visitor to the site invited to participate in a game.  Only minimal information is collected for both users and visitors\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Information You Provide to Us'), r.a.createElement('div', { className: p.a.text }, 'There are currently two categories of users on our Service: users and visitors. We collect and store the following types of information from each type of user:', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Account Sign-up and Profile Information: To create a Blooket account, you may be asked to provide some basic information. If you create an Blooket account as a user, you will be asked to enter your first name, last name, username, password and email. Visitors who participate in games will be asked only for a username.\n              '), r.a.createElement('li', null, '\n              Contact Information: When you choose to provide us with your personal information through the Service in some other manner (e.g., when you request a quote for upgrading to a "Blooket Plus", when you submit a copyright claim or report any media on our platform, when you send us an email asking a question, or submit a support request).\n              '), r.a.createElement('li', null, '\n              Billing Information: When subscribing to any of our "Blooket Plus" options, you will be asked to provide necessary information for processing the payment (e.g., credit/debit card number). As further explained in the Security Measures section of this Privacy Policy, payments are processed over Stripe through their third party website service.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'Information Collected Automatically'), r.a.createElement('div', { className: p.a.text }, '\n          Like most web-based services, we (or our service providers) may automatically receive and log information on our server logs from your browser or your device when you use the Service. For example, this could include the frequency and duration of your visits to Blooket. If you use Blooket on different devices, we may link the information we collect from those different devices to help us provide a consistent Service across your different devices. If we do combine any automatically-collected information with personal information, we will treat the combined information as personal information, and it will be protected as per this Privacy Policy. The technologies and information we automatically collect include:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Cookies and Other Similar Technologies: We (or our service providers) may use various technologies to collect and store information when you visit our Service, including clear GIFs (also known as \u201Cweb beacons\u201D), \u201Ctags\u201D, \u201Cscripts\u201D, and \u201Ccookies\u201D. We also make use of persistent secure cookies: persistent cookie remains after you close your browser (although they can be removed) and may be used by your browser to identify you on subsequent visits to the Service. We may also use, collect and store information locally on your device using mechanisms such as browser web storage (including HTML 5). Like many services, Blooket uses these technologies to tailor the Service for you, and to help the Service work better for you - for example, by remembering your language preferences.\n              '), r.a.createElement('li', null, '\n              Device Information: We collect, through our third-party analytics services, device-specific information such as your operating system, hardware version, device settings, file and software names and types, battery and signal strength, and device identifiers. This helps us measure how the Service is performing, improve Blooket for you on your particular device, and send you push notifications if you\u2019ve opted in to receive them.\n              '), r.a.createElement('li', null, '\n              Log Information: Like most online services, when you use our Service, we automatically collect and store certain information in our server logs. Examples include:\n              '), r.a.createElement('ul', null, r.a.createElement('li', null, 'Details of how you used our service, such as your activity on the Service, and the frequency and duration of your visits to the Blooket Website.'), r.a.createElement('li', null, 'IP Address.'), r.a.createElement('li', null, 'Device event information such as crashes, system activity, hardware settings, browser type, browser language, the date and time of your request and referral URL.'))), '\n          This information helps us make decisions about what we should work on next - for example, by showing which features are most (or least!) popular.\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Location Information: When you use our Service we may collect and process information about your geographic location, for example through GPS, Bluetooth, or Wi-Fi signals. We collect coarse (i.e., city-level) location data. We will not store or track your device location on an ongoing basis or without your permission. We do not share precise geolocation data with third parties, other than our service providers as necessary to provide the Service.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'Automated Decision Making and Profiling'), r.a.createElement('div', { className: p.a.text }, '\n          Automated Decision Making (ADM) refers to a decision which is taken solely on the basis of automated processing of your personal data. This means processing using, for example, software code or an algorithm, which does not require human intervention. Profiling means using automated processes without human intervention (such as computer programs) to analyze your personal information in order to evaluate your behavior or to predict things about you which are relevant in the context of using Blooket, such as what kind of games or Blooket sets you utilized. As profiling uses automated processing, it is sometimes connected with automated decision-making. Not all profiling results in automated decision-making, but it can.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Use of Information by Blooket'), r.a.createElement('div', { className: p.a.text }, '\n          First and foremost, you should know that Blooket does not sell or rent any personal information to any third party for any purpose including for advertising or marketing purposes. We use the information we collect from you to provide you with the best Blooket experience. More specifically, this information is used to:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, 'Provide and improve the Service, for example by developing new products and features.'), r.a.createElement('li', null, 'Respond to your requests for information or customer support.'), r.a.createElement('li', null, 'Customize the Service for you, and improve your experience with it.'), r.a.createElement('li', null, 'Send you information about new features and Blooket products we believe you may be interested in.'), r.a.createElement('li', null, 'Most crucially, to protect our community by making sure the Service remains safe and secure.')), '\n          We use automatically collected information (described in the "Information Collected Automatically" section above) to provide and support our Service, and for the additional uses described in this section of our Privacy Policy.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Storage of Data'), r.a.createElement('div', { className: p.a.text }, '\n          We store your personal information for as long as it is necessary to provide products and Services to you and others, including those described above pursuant to our Data Retention Policy. Deletion will affect any on-going paid subscriptions, which will be immediately cancelled. Note we may retain and use de-identified data (i.e., data which has been stripped off all information that can be used to identify a person) for purposes of research, improvement of our products and services, and/or the development of new products and services. We may also have to retain some information after your account is deleted, to comply with legal obligations, to protect the safety and security of our community or our Service, or to prevent abuse of our Terms. In case we keep copies or backups of personal information, such copies or backups will be kept for a maximum term of eighteen (18) months after the deletion of your account.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Security Measures'), r.a.createElement('div', { className: p.a.text }, '\n          First and foremost, you should know that Blooket does not sell or rent your, or your students\' personal information to any third party for any purpose - including for advertising or marketing purposes. Furthermore, we do not share personal information with any third parties except in the limited circumstances described in this Privacy Policy. No student profiles are made available to the general public through our Service. Furthermore, students cannot share their account information with anyone on Blooket. If you are a user, you may choose to share information or content through the Service with other Blooket users - for example, things like your account information or Blooket sets. Please keep in mind that information (including personal information or children\'s personal information) or content that you voluntarily disclose to others - including other Blooket users you interact with through the Service can be viewed, copied, stored, and used by the people you share it with. We cannot control the actions of people with whom you choose to share information.\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Service Providers: We do work with vendors, service providers, and other partners to help us provide the Service by performing tasks on our behalf - we can\u2019t build everything ourselves, after all! We may need to share or provide information (including personal information) to them to help them perform these business functions, for example sending emails on our behalf, database management services, database hosting, providing customer support software, and security. Generally, these service providers do not have the right to use your personal information we share with them beyond what is necessary to assist us. Additionally, these service providers must adhere to confidentiality and security obligations in a way that is consistent with this Privacy Policy.\n              '), r.a.createElement('li', null, '\n              Analytics Services: We use analytics services, including mobile analytics software, to help us understand and improve how the Service is being used. These services may collect, store and use information in order to help us understand things like how often you use the Service, the events that occur within the application, usage, performance data, and from where the application was downloaded.\n              '), r.a.createElement('li', null, '\n              Aggregated Information and Non-Identifying Information: We may share aggregated, non-personally identifiable information publicly, including with users, partners or the press in order to, for example, demonstrate how Blooket is used, spot industry trends, or to provide marketing materials for Blooket. Any aggregated information shared this way will not contain any personal information.\n              '), r.a.createElement('li', null, '\n              Legal Requirements: We may disclose personal information if we have a good faith belief that doing so is necessary to comply with the law, such as complying with a subpoena or other legal process. We may need to disclose personal information where, in good faith, we think it is necessary to protect the rights, property, or safety of Blooket, our employees, our community, or others, or to prevent violations of our Terms of Service or other agreements. This includes, without limitation, exchanging information with other companies and organizations for fraud protection or responding to government requests.\n              '), r.a.createElement('li', null, '\n              Sharing with Blooket Companies: Over time, Blooket may grow and reorganize. We may share your personal information with affiliates such as a parent company, subsidiaries, joint venture partners or other companies that we control or that are under common control by us, in which case we will require those companies to agree to use your personal information in a way that is consistent with this Privacy Policy.\n              '), r.a.createElement('li', null, '\n              Change of Control: In the event that all or a portion of Blooket or its assets are acquired by or merged with a third party, personal information that we have collected from users would be one of the assets transferred to or acquired by that third party. This Privacy Policy will continue to apply to your information, and any acquirer would only be able to handle your personal information as per this policy (unless you give consent to a new policy). We will provide you with notice of an acquisition within thirty (30) days following the completion of such a transaction, by posting on our homepage, and by email to your email address that you provided to us. If you do not consent to the use of your personal information by such a successor company, you may request its deletion from the company. In the unlikely event that Blooket goes out of business, or files for bankruptcy, we will protect your personal information, and will not sell it to any third party.\n              '), r.a.createElement('li', null, '\n              With your Consent: Other than the cases above, we won\u2019t disclose your personal information for any purpose unless you consent to it. Additionally, as discussed above, we will never sell or rent your personal information to advertisers or other third parties.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'Do Not Track'), r.a.createElement('div', { className: p.a.text }, '\n          Blooket does not track its users over time and across third-party websites to provide targeted advertising and therefore does not respond to Do Not Track (DNT) signals.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Blooket\'s Third-Party Service Providers'), r.a.createElement('div', { className: p.a.text }, '\n          It is important to us that we keep your information safe and secure. To best provide our services, and keep your information safe, we work with a few other companies (we can\u2019t do it all ourselves!). These companies ("third-party service providers", "collaborators" or "agents") will only have access to the information they need to provide the Blooket service. Below is a list of the service providers which, subject to their terms of service and privacy policies, may have access to personal data to process on our behalf in accordance with our instructions, Privacy Policy and any other requirements regarding confidentiality, security or integrity:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Google Services for analytics on our website ("Google Analytics"), for mobile analytics ("Fabric") and for spam and abuse protection ("reCAPTCHA").\n              '), r.a.createElement('li', null, '\n              Cloundinary for creating, managing and delivering digital images and media across any browser.\n              '), r.a.createElement('li', null, '\n              SendGrid to manage and automate email communications.\n              '), r.a.createElement('li', null, '\n              MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.\n              '), r.a.createElement('li', null, '\n              Heroku is a platform used to host the main website servers.\n              '), r.a.createElement('li', null, '\n              Stripe as a payment processing service.\n              ')), '\n          This list may change over time, and we will work hard to keep it up-to-date. Blooket reserves the right to change or add service providers which provide services in concert with the provisions of this agreement.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Accountability for Onward Transfer'), r.a.createElement('div', { className: p.a.text }, '\n          We will transfer your personal information to third-party service providers only for limited and specific purposes. We will obtain contractual assurances from our collaborators that they will safeguard personal information in a manner consistent with this Policy and that they will provide the same level of protection as per best industry standards. We recognize our responsibility and potential liability for onward transfers to agents. Where we have knowledge that an agent is using or disclosing personal information in a manner contrary to this Policy and/or level of protection as required by applicable laws and regulations, we will take reasonable steps to prevent, remediate or stop such use or disclosure. If we transfer personal information to non-agent third parties, that is to say, any new collaborators that are not included in the previously mentioned list, we will (1) notify you with all necessary information on any key elements affecting the processing of your personal data, and (2) obtain contractual assurance from these parties that they will provide the same level of security as per best industry standards and in accordance with any applicable laws and regulations.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Blooket Account Security'), r.a.createElement('div', { className: p.a.text }, '\n          Your Blooket account is protected by a password. You can help us protect your account from unauthorized access by keeping your password secret at all times. The security of your personal information is important to us. We work hard to protect our community, and we maintain administrative, technical and physical safeguards designed to protect against unauthorized use, disclosure of or access to personal information, such as:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, 'Security Protocols: We periodically review our information collection, storage and processing practices, including physical security measures, to protect against unauthorized access to systems.'), r.a.createElement('li', null, 'Security Technology: We continually develop and implement features to keep your personal information safe - for example, when you enter any information anywhere on the Service, we encrypt the transmission of that information using secure socket layer technology (SSL) by default.'), r.a.createElement('li', null, 'We ensure passwords are stored and transferred securely using encryption and hashing.'), r.a.createElement('li', null, 'Employee Access: We use best-effort practices to secure usernames, passwords and any other means of gaining access to users\' data.'))), r.a.createElement('div', { className: p.a.subheader }, 'Notification of Security Breaches'), r.a.createElement('div', { className: p.a.text }, '\n          Although we make concerted good faith efforts to maintain the security of personal information, and we work hard to ensure the integrity and security of our systems as per best industry standards, no practices are 100% immune, and we can\u2019t guarantee the security of information. Outages, attacks, human error, system failure, unauthorized use or other factors may compromise the security of user information at any time.\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Initial Notice: Upon the discovery of a security breach that results in the unauthorized release, disclosure or acquisition of personal information, we will notify electronically of such discovery to all affected users. This initial notice will include, to the extent known at the time of the notification, the date and time of the breach, its nature and extent, and the Service\u2019s plan to investigate and remediate the breach.\n              '), r.a.createElement('li', null, '\n              Detailed Notification: Upon discovery of a breach, we will conduct a deep investigation in order to electronically provide all affected users with a more detailed notice of the breach, including but not limited to the date and time of the breach; nature and extent of the breach; and measures taken to ensure that such breach does not occur in the future. We may also post a notice on our homepage (www.Blooket.com) and, depending on where you live, you may have a legal right to receive notice of a security breach in writing. When it is not possible to provide all of the aforementioned information at the same time, we will provide you with the remaining information without undue further delay.\n              ')), '\n          Both notifications will be written in plain language, will be titled \u201CNotice of Data Breach\u201D and will present the information described above under the following heading: \u201CWhat Happened,\u201D \u201CWhat Information Was Involved,\u201D \u201CWhat We Are Doing,\u201D \u201CWhat You Can Do\u201D and \u201CFor More Information\u201D. Additional information may be provided as a supplement to the notice.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Managing My Information'), r.a.createElement('div', { className: p.a.text }, '\n          Upon request and in accordance with the applicable laws and regulations, we will grant you reasonable access to your personal information that is held by Blooket. In addition, we will take reasonable steps to permit you to correct, amend, or delete your personal information that is demonstrated to be inaccurate, incomplete or processed in violation of this Privacy Policy.\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Accessing Your Information: To request access to the personal information we have about you on file, users can contact us at contact-us@Blooket.com. In some cases, we will not be able to guarantee complete access due to legal restrictions; for example, you will not be allowed to access files that contain information about other users or information that is confidential to us. Furthermore, we may not be able to fulfill requests that are unreasonably repetitive, require disproportionate technical effort or would be extremely impractical.\n              '), r.a.createElement('li', null, '\n              Updating Your Information: You may update, correct, or delete some of your profile information or your preferences at any time by logging into your account on Blooket and accessing your account settings page. You may also, at any time, update, correct, or delete certain personal information that you have provided to us. To that end, users can contact us at contact-us@Blooket.com. Please note that while your changes may be reflected promptly in active content, users that have previously accessed the content may still have access to old copies cached on their device or may have copied and stored your content. In addition, we may retain a backup copy of the prior version for a limited period of time (maximum 18 months) or for legal purposes.\n              '), r.a.createElement('li', null, '\n              Limitations: Without prejudice to the aforementioned, please note that we may limit or deny access to personal information (a) where the burden or expense of providing access would be disproportionate to the risks to your privacy; (b) where the legitimate rights of persons other than you would be violated or if necessary to safeguard important countervailing public interests (e.g., national security) or in other limited circumstances (e.g., disclosure would breach a legal privilege), and (c) where applicable law or regulatory requirements allow or require us to refuse to provide some or all of the personal information that we hold about you. In addition, the personal information may have been destroyed, erased or made anonymous in accordance with our record retention obligations and practices. In the event that we cannot provide you with access to your personal information, we will endeavor to inform you of the reasons why, subject to any legal or regulatory restrictions.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'Account Deletion'), r.a.createElement('div', { className: p.a.text }, '\n          We hope you will love using Blooket now and always. However, if for some reason you ever want to delete your account, you can do that by contacting us at contact-us@blooket.com and we will proceed to delete the requested data within a reasonable period of time. Parents, legal guardians, or eligible students may delete their accounts by contacting their educational institution. When we delete your account, we delete any personal information that you provided in your profile (such as your name, username, password, and email address) and also questions, responses and comments. Please note that information that you have shared with others, that others have shared about you, or content other users may have copied and stored, is not part of your account and may not be deleted when you delete your account. Part of your personal information will remain in our possession as a copy or backup that is part of our disaster recovery storage system for such period of time identified in our data retention policy.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Consumer Complaints'), r.a.createElement('div', { className: p.a.text }, '\n          You may file a complaint concerning Blooket\'s processing of your personal data to contact-us@blooket.com or by regular mail to the following address: Blooket LLC, 409 South Ridge Avenue, Middletown, DE 19709 USA.\n          '), r.a.createElement('div', { className: p.a.text }, '\n          We will take steps to remedy issues arising out of Blooket\'s alleged failure to comply with the principles set out in this Privacy Policy. We will respond to your complaints within thirty (30) days. If your complaint cannot be resolved through our internal processes, we will direct you to the state or national data protection authority in the jurisdiction where you reside.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'EEA Residents'), r.a.createElement('div', { className: p.a.text }, '\n          EEA residents and residents from the United Kingdom (UK) will have the right to lodge a complaint to the EU Data Protection Authorities or the Swiss Federal Data and Information Commissioner (FDPIC), Blooket will comply with the advice of competent European Union authorities in such cases, and will provide appropriate recourse. Blooket is also subject to the investigatory and enforcement powers of the US Federal Trade Commission.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Liability'), r.a.createElement('div', { className: p.a.text }, '\n          In the event that Blooket or the aforementioned authorities determine that Blooket failed to comply with this policy, Blooket will take appropriate steps to address any adverse effects arising directly from such failure and to promote future compliance.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Europe'), r.a.createElement('div', { className: p.a.text }, '\n          As part of a global organization, Blooket operates both within and outside the European Economic Area (the \u201CEEA\u201D) and from time to time we may transfer your data from the EEA for processing in a territory outside the EEA that does not have the same statutory levels of data protection as the EEA. Residents in the European Union are entitled to certain rights with respect to personal information that we hold about them:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, r.a.createElement('b', null, 'Right of access and portability.'), '\n              The right to obtain access to your personal information, along with certain related information, and to receive that information in a commonly used format and to have it transferred to another data controller;\n              '), r.a.createElement('li', null, r.a.createElement('b', null, 'Right to rectification.'), '\n              The right to obtain rectification of your personal information without undue delay where that personal information is inaccurate or incomplete;\n              '), r.a.createElement('li', null, r.a.createElement('b', null, 'Right to erasure.'), '\n              The right to obtain the erasure of your personal information without undue delay in certain circumstances, such as where the personal information is no longer necessary in relation to the purposes for which it was collected or processed;\n              '), r.a.createElement('li', null, r.a.createElement('b', null, 'Right to restriction.'), '\n              The right to obtain the restriction of the processing undertaken by us on your personal information in certain circumstances, such as where the accuracy of the personal information is contested by you, for a period enabling us to verify the accuracy of that personal information; and\n              '), r.a.createElement('li', null, r.a.createElement('b', null, 'Right to object.'), '\n              The right to object, on grounds relating to your particular situation, to the processing of your personal information, and to object to processing of your personal information for direct marketing purposes, to the extent it is related to such direct marketing.\n              ')), '\n          You may also have the right to make a complaint to the relevant Supervisory Authority. If you need further assistance regarding your rights, please contact us and we will consider your request in accordance with applicable law. In some cases, our ability to uphold these rights for you may depend upon our obligations to process personal information for security, safety, fraud prevention reasons, compliance with regulatory or legal requirements, or because processing is necessary to deliver the services you have requested. Where this is the case, we will inform you of specific details in response to your request.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'California'), r.a.createElement('div', { className: p.a.text }, 'California AB 1584'), r.a.createElement('div', { className: p.a.text }, '\n          Regarding California AB 1584 (Buchanan) Privacy of Pupil Records: 3rd-Party Digital Storage & Education Software (Education Code section 49073.1), Blooket will adhere to the following:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              Student records obtained by Blooket from an educational institution continue to be the property of and under the control of the educational institution. The educational institution retains full ownership rights of the personal information and education records it provides to Blooket.\n              '), r.a.createElement('li', null, '\n              Blooket users may retain possession and control of their own generated content by signing into and accessing their Blooket account and deleting, where applicable, modifying or updating their information within Blooket.\n              '), r.a.createElement('li', null, '\n              Blooket will not use any information in a student record for any purpose other than those required or specifically permitted by Blooket\u2019s Terms of Use and Privacy Policy.\n              '), r.a.createElement('li', null, '\n              Parents, legal guardians, or eligible students may review personally identifiable information in the student\u2019s records and correct erroneous information by contacting their educational institution. Additionally, Blooket users may access, correct, update, or delete personal information in their profile by signing into Blooket, accessing their Blooket account, and making the appropriate changes.\n              '), r.a.createElement('li', null, '\n              Blooket is committed to maintaining the security and confidentiality of student records. Towards this end, we take the following actions: (a) we limit employee access to student data to only those employees with a need to such access to fulfill their job responsibilities; (b) we conduct background checks on our employees that may have access to student data; (c) we conduct regular employee privacy and data security training and education; and (e) we protect personal information with technical, contractual, administrative, and physical security safeguards in order to protect against unauthorized access, release or use.\n              '), r.a.createElement('li', null, '\n              In the event of an unauthorized disclosure of a student\u2019s records, Blooket will (1) promptly notify users unless specifically directed not to provide such notification by law enforcement officials. Notification shall identify: (i) the date and nature of the unauthorized use or disclosure; (ii) the Private Data used or disclosed; (iii) a general description of what occurred including who made the unauthorized use or received the unauthorized disclosure; (iv) what Blooket has done or shall do to mitigate any effect of the unauthorized use or disclosure; (v) what corrective action Blooket has taken or shall take to prevent future similar unauthorized use or disclosure; and (vi) who at Blooket the user can contact. Blooket will keep the User fully informed until the incident is resolved.\n              '), r.a.createElement('li', null, '\n              Blooket will delete or de-identify personal information when it is no longer needed, upon expiration or termination of our agreement with an educational institution with any deletion or de-identification to be completed according to the terms of our agreement with the educational institution, or at the direction or request of the educational institution.\n              '), r.a.createElement('li', null, '\n              Blooket agrees to work with educational institutions to ensure compliance with FERPA and the Parties will ensure compliance by providing parents, legal guardians or eligible students with the ability to inspect and review student records and to correct any inaccuracies therein as described in statement (4) above.\n              '), r.a.createElement('li', null, '\n              Blooket prohibits using personally identifiable information in student records to engage in targeted advertising.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'New York'), r.a.createElement('div', { className: p.a.text }, 'New York Ed. Law \xA7 2-D'), r.a.createElement('div', { className: p.a.text }, '\n          In compliance with the requirements set forth in New York Education Law \xA7 2-D, Blooket shall incorporate a Data Privacy and Security Plan ("DPSP") to each contract or other written agreement it enters into with an educational agency from the State of New York. Such DPSP shall outline how all state, federal, and local data security and privacy contract requirements will be implemented over the life of the agreement, consistent with the educational agency\'s policy on data security and privacy. Such plan shall also include, but shall not be limited to, a signed copy of the parents\u2019 bill of rights for data privacy and security, which shall be provided by the educational agency prior to the commencement of the agreement, and a requirement that any officers or employees of Blooket and its assignees who have access to student, teacher or principal data have received or will receive training on the federal and state law governing confidentiality of such data prior to receiving access. In attention to the foregoing, Blooket hereby commits to:\n          ', r.a.createElement('ul', null, r.a.createElement('li', null, '\n              (1) limit internal access to education records to those individuals that are determined to have legitimate educational interests (e.g., Blooket employees or third-party service providers);\n              '), r.a.createElement('li', null, '\n              (2) not use the education records for any other purposes than those explicitly authorized in the Agreement (i.e., our Terms of Service and this Privacy Policy);\n              '), r.a.createElement('li', null, '\n              (3) except for authorized representatives of Blooket to the extent they are carrying out the agreement, not disclose any personally identifiable information to any other party: (i) without the prior written consent of the parent or eligible student; or (ii) unless required by statute or court order and Blooket provides a notice of the disclosure to the department, district board of education, or institution that provided the information no later than the time the information is disclosed, unless providing notice of the disclosure is expressly prohibited by the statute or court order;\n              '), r.a.createElement('li', null, '\n              (4) maintain reasonable administrative, technical and physical safeguards to protect the security, confidentiality and integrity of personally identifiable student information in its custody;\n              '), r.a.createElement('li', null, '\n              (5) use encryption technology to protect data while in motion or in its custody from unauthorized disclosure using a technology or methodology specified by the secretary of the United States department of health and human services in guidance issued under Section 13402(H)(2) of Public Law 111-5; and\n              '), r.a.createElement('li', null, '\n              (6) notify the educational agency, in the most expedient way possible and without unreasonable delay, of any breach of security resulting in an unauthorized release of student, teacher or principal data, as outlined in applicable State and Federal laws.\n              '))), r.a.createElement('div', { className: p.a.subheader }, 'Other Countries'), r.a.createElement('div', { className: p.a.text }, 'Transfers of Personal Information to the U.S.'), r.a.createElement('div', { className: p.a.text }, '\n          Blooket is hosted in the United States. If you use the Service from any other regions with laws governing data collection, protection and use that may differ from United States law, please note that you may be transferring your personal information outside of those jurisdictions to the United States. By using the Service, you consent to this, and to the use and storage of personal information in accordance with this Privacy Policy. Third parties that have content embedded on the Blooket website, such as a social feature, may set cookies on a user\u2019s browser and/or obtain information about the fact that a web browser visited the Blooket website from a certain IP address. Third parties cannot collect any other personally identifiable information from Blooket\u2019s websites unless you provide it to them directly.\n          '), r.a.createElement('div', { className: p.a.subheader }, 'Processing in Other Regions'), r.a.createElement('div', { className: p.a.text }, '\n          For users from other countries, Blooket will make sure that all appropriate physical, technical and organizational safeguards are adopted in accordance with this Privacy Policy against accidental, unauthorized or unlawful destruction, loss alteration, disclosure, access, use or processing of users\' personal information in Blooket\'s possession.\n          '));
          }
        }
      ]) && d(t.prototype, o), n && d(t, n), s;
    }(r.a.Component);
    w.propTypes = {};
    t.a = Object(i.a)(Object(s.b)(function () {
      return {};
    }, function (e) {
      return Object(a.b)({}, e);
    })(w));
  },
  PpwM: function (e, t, o) {
    var n = o('yUdf');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  R9c3: function (e, t, o) {
    'use strict';
    o.d(t, 'b', function () {
      return n;
    }), o.d(t, 'a', function () {
      return r;
    });
    var n = 'SET_MATCH_RESULT', r = 'SET_DEFEATED';
  },
  TTiB: function (e, t, o) {
    var n = o('Uzqt');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  ToJK: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('b6Qr'), h = o('xD7w'), f = o('pMbe'), m = o('2g2H'), d = o('iQ+n'), y = o('GIcp'), b = o.n(y), g = o('GF2a'), v = o.n(g), w = o('tqJC'), _ = o('SdQT'), E = o('TN+F');
    function k(e) {
      return (k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e) {
      return function (e) {
        if (Array.isArray(e))
          return x(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return x(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return x(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function x(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function S(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function T(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function C(e, t) {
      return (C = Object.setPrototypeOf || function (e, t) {
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
        var o, n = P(e);
        if (t) {
          var r = P(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return I(this, o);
      };
    }
    function I(e, t) {
      return !t || 'object' !== k(t) && 'function' != typeof t ? function (e) {
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
        }), t && C(e, t);
      }(c, e);
      var t, o, n, a, s, i = j(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = { timer: 8 }, t.here = !0, t.dbRef = {}, t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t, o = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && this.props.client.maxEnergy) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return t = 8, this.timerInterval = setInterval(function () {
                    t -= 1, o.here && (o.setState({ timer: t }), t <= 0 && clearInterval(o.timerInterval));
                  }, 1000), Object(E.c)(), e.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 7:
                  this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                    var t = e.val();
                    if (null === t)
                      o.props.deleteClient(), o.props.history.push('/play');
                    else if (3 === t.split('-').length) {
                      for (var n = t.split('-'), r = o.props.client.questions.map(function (e) {
                            return e.number;
                          }).indexOf(parseInt(n[1], 10)), a = JSON.parse(JSON.stringify(o.props.client.questions[r])), s = O(a.answers), i = n[2].split(''), c = 0; c < s.length; c++)
                        a.answers[i[c]] = s[c];
                      o.props.getQuestion(a), o.props.history.push('/play/battle-royale/question');
                    }
                  });
                case 9:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                S(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                S(r, o, n, s, i, 'throw', e);
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
            this.here = !1, clearInterval(this.timerInterval), Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(E.t)();
          }
        },
        {
          key: 'render',
          value: function () {
            return this.props.client && this.props.client.maxEnergy ? r.a.createElement('div', {
              className: p.isMobile ? b.a.mBody : b.a.body,
              style: { overflow: 'hidden' }
            }, r.a.createElement(d.a, {
              title: 'Play Royale | Blooket',
              desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
            }), r.a.createElement(m.a, {
              name: this.props.client.name,
              energy: this.props.client.energy
            }), r.a.createElement('div', {
              className: b.a.regularBody,
              style: { overflow: 'hidden' }
            }, this.props.client.match && this.props.client.match[0] ? r.a.createElement(w.a, {
              name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
              match: this.props.client.match,
              maxEnergy: this.props.client.maxEnergy,
              team: Boolean(this.props.client.team),
              timer: this.state.timer
            }) : r.a.createElement('div', { className: v.a.eliminatedContainer }, r.a.createElement('div', { className: v.a.eliminatedHeader }, 'You\'ve Been Eliminated'), r.a.createElement('div', {
              className: v.a.eliminatedText,
              style: { marginBottom: 20 }
            }, 'Keep answering questions to boost your stats, earn rewards, and enhance your learning!'), r.a.createElement('div', { className: v.a.eliminatedText }, r.a.createElement('b', null, 'Question in '.concat(this.state.timer)))))) : r.a.createElement(u.a, { to: '/play' });
          }
        }
      ]) && T(t.prototype, o), n && T(t, n), c;
    }(r.a.Component);
    R.propTypes = {
      client: c.a.shape({
        name: c.a.string,
        hostId: c.a.string,
        answer: c.a.string,
        blook: c.a.string,
        energy: c.a.number,
        match: c.a.array,
        maxEnergy: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        times: c.a.array,
        corrects: c.a.object,
        incorrects: c.a.object,
        safe: c.a.bool,
        team: c.a.object
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      getQuestion: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        deleteClient: f.a,
        getQuestion: h.a
      }, e);
    })(Object(_.d)(R)));
  },
  UNfu: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('b6Qr'), h = o('bMSx'), f = o('pMbe'), m = o('2g2H'), d = o('iQ+n'), y = o('PpwM'), b = o.n(y), g = o('GIcp'), v = o.n(g), w = o('CKiD'), _ = o('DbxT'), E = o('TN+F'), k = o('SdQT');
    function O(e) {
      return (O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? x(Object(o), !0).forEach(function (t) {
          T(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : x(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function T(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function C(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return j(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return j(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function j(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function I(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function P(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function R(e, t) {
      return (R = Object.setPrototypeOf || function (e, t) {
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
        var o, n = q(e);
        if (t) {
          var r = q(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return A(this, o);
      };
    }
    function A(e, t) {
      return !t || 'object' !== O(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function q(e) {
      return (q = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var B = [
        'Way to Go!',
        'Nice Work!',
        'Good Job!',
        'Keep It Up!',
        'Well Done!',
        'Rock On!',
        'Awesome Sauce!',
        'Let\'s Go!'
      ], D = [
        'Great Effort!',
        'You Got This!',
        'Don\'t Give Up!'
      ], U = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && R(e, t);
        }(c, e);
        var t, o, n, a, s, i = N(c);
        function c(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, c), (t = i.call(this, e)).state = {
            win: !1,
            winner: {},
            loser: {},
            bothLose: !1,
            bothWin: !1,
            deadHeader: '',
            myEnergy: -1
          }, t.dbRef = {}, t;
        }
        return t = c, (o = [
          {
            key: 'componentDidMount',
            value: (a = regeneratorRuntime.mark(function e() {
              var t, o, n, r, a, s, i, c = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.props.client && this.props.client.maxEnergy) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt('return');
                  case 2:
                    return Object(E.c)(), t = this.props.client.team, o = t ? this.props.client.team.blook : this.props.client.name, e.next = 7, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                  case 7:
                    if (this.dbRef = e.sent, this.dbRef.on('value', function (e) {
                        switch (e.val()) {
                        case 'prv':
                          c.props.firebase.getDatabaseVal(c.props.client.hostId, 'c/'.concat(o), function (e) {
                            e && e.op ? c.props.firebase.getDatabaseVal(c.props.client.hostId, 'c/'.concat(e.op), function (n) {
                              n ? (c.props.prepareMatch(e.e, [
                                {
                                  name: t ? w.a[o] : o,
                                  energy: e.e,
                                  blook: t ? o : c.props.client.blook,
                                  players: e.p
                                },
                                {
                                  name: t ? w.a[e.op] : e.op,
                                  energy: n.e,
                                  blook: t ? e.op : n.b,
                                  players: n.p,
                                  clone: n.op !== o
                                }
                              ]), c.props.history.push('/play/battle-royale/match/preview')) : (c.props.prepareMatch(e.e, null), c.props.history.push('/play/battle-royale/match/preview'));
                            }) : (c.props.prepareMatch(0, null), c.props.history.push('/play/battle-royale/match/preview'));
                          });
                          break;
                        case 'fin':
                          c.props.firebase.getDatabaseVal(c.props.client.hostId, 'st', function (e) {
                            e ? (c.props.setStanding(Object.entries(e).map(function (e) {
                              var t = C(e, 2), o = t[0], n = t[1];
                              return {
                                name: o,
                                blook: n.b,
                                place: n.p,
                                wins: n.w,
                                numPlayers: n.nu
                              };
                            }).filter(function (e) {
                              return e.wins || 0 === e.wins;
                            })), c.props.history.push('/play/battle-royale/final')) : c.props.history.push('/play');
                          });
                          break;
                        case null:
                          c.props.deleteClient(), c.props.history.push('/play');
                        }
                      }), this.win = !1, this.props.client.energy && this.props.client.match && this.props.client.match[0]) {
                      e.next = 13;
                      break;
                    }
                    return this.setState({ deadHeader: this.props.client.defeated > 0 ? Object(E.o)(B) : Object(E.o)(D) }), e.abrupt('return');
                  case 13:
                    n = this.props.client.team ? this.props.client.team.name : this.props.client.name, r = this.props.client.match[0].name === n ? this.props.client.match[0] : this.props.client.match[1], a = this.props.client.match[0].name === n ? this.props.client.match[1] : this.props.client.match[0], s = r.correct && !a.correct || r.correct && r.time <= a.time, this.win = s, i = a.correct && !r.correct || a.correct && a.time <= r.time, this.setState({
                      myEnergy: this.props.client.energy,
                      winner: s ? r : a,
                      loser: s ? a : r,
                      bothLose: !s && !i,
                      bothWin: s && i,
                      win: s
                    }, function () {
                      c.state.bothWin || c.props.client.safe || (c.decreaseTimeout = setTimeout(function () {
                        c.setState({
                          loser: S(S({}, c.state.loser), {}, { energy: p.isMobile ? c.state.loser.energy - 1 : c.state.loser.energy }),
                          myEnergy: c.state.win ? c.state.myEnergy : c.state.myEnergy - 1
                        });
                      }, 8600));
                    });
                  case 20:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), s = function () {
              var e = this, t = arguments;
              return new Promise(function (o, n) {
                var r = a.apply(e, t);
                function s(e) {
                  I(r, o, n, s, i, 'next', e);
                }
                function i(e) {
                  I(r, o, n, s, i, 'throw', e);
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
              clearTimeout(this.decreaseTimeout), Object.keys(this.dbRef).length && this.dbRef.off('value'), Object(E.t)();
            }
          },
          {
            key: 'render',
            value: function () {
              return this.props.client && this.props.client.maxEnergy ? r.a.createElement('div', {
                className: p.isMobile ? v.a.mBody : v.a.body,
                style: { overflow: 'hidden' }
              }, r.a.createElement(d.a, {
                title: 'Play Royale | Blooket',
                desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
              }), r.a.createElement(m.a, {
                name: this.props.client.name,
                energy: -1 === this.state.myEnergy ? this.props.client.energy : this.state.myEnergy
              }), r.a.createElement('div', {
                className: v.a.regularBody,
                style: { overflow: 'hidden' }
              }, this.props.client.energy <= 0 ? r.a.createElement('div', { className: b.a.eliminatedContainer }, r.a.createElement('div', { className: b.a.eliminatedHeader }, this.state.deadHeader), r.a.createElement('div', { className: b.a.eliminatedText }, this.props.client.defeated > 0 ? 'You would have beaten '.concat(this.props.client.defeated, ' ').concat(1 === this.props.client.defeated ? 'player' : 'players', '!') : 'Waiting For Matches to Finish Up...')) : r.a.createElement(_.a, {
                victoryText: this.state.win ? 'Victory' : 'Defeat',
                winner: this.state.winner,
                loser: this.state.loser,
                bothWin: this.state.bothWin,
                bothLose: this.state.bothLose,
                maxEnergy: this.props.client.maxEnergy,
                win: this.state.win,
                safe: this.props.client.safe,
                team: Boolean(this.props.client.team)
              }))) : r.a.createElement(u.a, { to: '/play' });
            }
          }
        ]) && P(t.prototype, o), n && P(t, n), c;
      }(r.a.Component);
    U.propTypes = {
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
        energy: c.a.number,
        question: c.a.object,
        match: c.a.array,
        maxEnergy: c.a.number,
        defeated: c.a.number,
        safe: c.a.bool,
        times: c.a.array,
        team: c.a.object
      }),
      history: c.a.object.isRequired,
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object,
      prepareMatch: c.a.func.isRequired,
      setStanding: c.a.func.isRequired
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({
        deleteClient: f.a,
        prepareMatch: h.a,
        setStanding: h.b
      }, e);
    })(Object(k.d)(U)));
  },
  Uzqt: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__track___99MUN-camelCase{border-radius:5px;background-color:#de633a;position:absolute;top:3%;left:2%;width:96%;height:94%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.styles__line___1wlgi-camelCase{width:100%;background-color:#fff}.styles__line___1wlgi-camelCase,.styles__racer___1Q0KE-camelCase{position:absolute;left:0}.styles__racer___1Q0KE-camelCase{transition:transform .8s linear}.styles__finishLine___1ismd-camelCase{position:absolute;top:0;right:0;height:4%;transform:translateX(25%)}.styles__centerText___3I5-Q-camelCase{font-size:11.5vw;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,.6);padding:1vw 2vw;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__tooltip___1kHjh-camelCase{font-family:Nunito,sans-serif;font-size:15px;padding:6px 13px}',
      ''
    ]), t.locals = {
      track: 'styles__track___99MUN-camelCase',
      line: 'styles__line___1wlgi-camelCase',
      racer: 'styles__racer___1Q0KE-camelCase',
      finishLine: 'styles__finishLine___1ismd-camelCase',
      centerText: 'styles__centerText___3I5-Q-camelCase',
      tooltip: 'styles__tooltip___1kHjh-camelCase'
    };
  },
  WJ5o: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__matchArray___2XSL1-camelCase{overflow:hidden;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;display:flex;flex-direction:column;align-content:flex-start;opacity:0;-webkit-animation:styles__fadeIn___1PWzk-camelCase .3s linear .75s forwards;animation:styles__fadeIn___1PWzk-camelCase .3s linear .75s forwards}@-webkit-keyframes styles__fadeIn___1PWzk-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1PWzk-camelCase{0%{opacity:0}to{opacity:1}}',
      ''
    ]), t.locals = {
      matchArray: 'styles__matchArray___2XSL1-camelCase',
      fadeIn: 'styles__fadeIn___1PWzk-camelCase'
    };
  },
  bMSx: function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return r;
    }), o.d(t, 'b', function () {
      return a;
    });
    var n = o('iXRB');
    function r(e, t) {
      return {
        type: n.a,
        energy: e,
        match: t
      };
    }
    function a(e) {
      return {
        type: n.b,
        standing: e
      };
    }
  },
  cxN3: function (e, t, o) {
    var n = o('goIr');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  'dH+b': function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__fadeWaiting___2_y-s-camelCase{opacity:1}.styles__fade___3KZwy-camelCase,.styles__fadeWaiting___2_y-s-camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___3KZwy-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___3ZUGB-camelCase{-webkit-animation:styles__fadeOut___1wwrj-camelCase .3s linear .5s forwards;animation:styles__fadeOut___1wwrj-camelCase .3s linear .5s forwards}@-webkit-keyframes styles__fadeOut___1wwrj-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___1wwrj-camelCase{0%{opacity:1}to{opacity:0}}',
      ''
    ]), t.locals = {
      fadeWaiting: 'styles__fadeWaiting___2_y-s-camelCase',
      fade: 'styles__fade___3KZwy-camelCase',
      textFade: 'styles__textFade___3ZUGB-camelCase',
      fadeOut: 'styles__fadeOut___1wwrj-camelCase'
    };
  },
  fJTD: function (e, t, o) {
    var n = o('fR4D');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  fR4D: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__mainHeader___3pEaI-camelCase{font-size:28px;margin:85px 5% 20px}.styles__mainHeader___3pEaI-camelCase,.styles__subheader___MxW5x-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a;width:90%}.styles__subheader___MxW5x-camelCase{font-size:20px;margin:20px 5% 10px}.styles__text___1emQ7-camelCase{font-family:Nunito,sans-serif;font-size:16px;text-align:left;color:#3a3a3a;width:90%;margin:10px 5%}li{padding-top:2px;padding-bottom:2px}',
      ''
    ]), t.locals = {
      mainHeader: 'styles__mainHeader___3pEaI-camelCase',
      subheader: 'styles__subheader___MxW5x-camelCase',
      text: 'styles__text___1emQ7-camelCase'
    };
  },
  goIr: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__questionContainer___1xV6d-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;background-color:#fff}.styles__powerUpBody___2XV4r-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#0bc2cf;cursor:pointer;outline:none}.styles__powerUpBody___2XV4r-camelCase,.styles__powerUpHeader___27EQ_-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__powerUpHeader___27EQ_-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:5vw}.styles__powerUpIconContainer____C4SH-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:8vh;width:15vw;height:15vw;display:flex;justify-content:center;align-items:center}.styles__powerUpIcon___356r0-camelCase{color:#fff;font-size:9.5vw;margin:auto}.styles__powerUpDesc___2WfEK-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-size:2vw;width:80%;margin:-5vh 10% 7vh;text-align:center;font-family:Nunito,sans-serif}.styles__powerUpName___1yJQY-camelCase{font-weight:700;font-size:3vw}.styles__powerUpInstruct___2LMmE-camelCase{text-shadow:2px 2px 8px grey;font-size:1.8vw;text-decoration:underline;width:80%;margin:0 10%;text-align:center}.styles__notifyContainer___iTjuY-camelCase,.styles__powerUpInstruct___2LMmE-camelCase{color:#fff;font-family:Nunito,sans-serif}.styles__notifyContainer___iTjuY-camelCase{position:absolute;top:75px;right:20px;z-index:10;padding:5px 10px 10px;display:flex;flex-direction:column;align-items:center;max-width:80px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:rgba(0,0,0,.6);border-radius:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__fadeOut___9fQP_-camelCase .3s linear 1.4s forwards;animation:styles__fadeOut___9fQP_-camelCase .3s linear 1.4s forwards}@-webkit-keyframes styles__fadeOut___9fQP_-camelCase{0%{opacity:1}to{opacity:0}}@keyframes styles__fadeOut___9fQP_-camelCase{0%{opacity:1}to{opacity:0}}.styles__notifyText___3wNwa-camelCase{font-size:36px}.styles__notifyRow___KwOMx-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__notifyBlook___2jIbI-camelCase{width:24px}.styles__notifyIcon___fKLDD-camelCase{font-size:22px}.styles__playerHeader___2tJLv-camelCase{font-size:4.5vw;width:80%;margin:40px auto 0;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__playerHolder___1gpyo-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___3966E-camelCase{width:200px;height:60px;line-height:60px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;margin:50px auto 30px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__noPlayers___3966E-camelCase:hover{transform:scale(.95)}.styles__playerContainer___dEGIa-camelCase{background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:.2s}.styles__playerContainer___dEGIa-camelCase:focus,.styles__playerContainer___dEGIa-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___ojCM6-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___a33vt-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px;color:#3a3a3a;font-family:Nunito,sans-serif}.styles__playerText___2qgGJ-camelCase{font-weight:700;font-size:28px;margin-right:10px;line-height:35px;word-break:break-word}.styles__playerProgress___1mHd3-camelCase{height:35px;line-height:35px;font-size:26px}.styles__freezeContainer___38Zsg-camelCase{z-index:11;background-image:linear-gradient(#31aae0,#bdf);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__freezeIcon___rkDLI-camelCase{font-size:14vw;padding-bottom:8vh}.styles__freezeHeader___ARnFw-camelCase,.styles__freezeIcon___rkDLI-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__freezeHeader___ARnFw-camelCase{font-family:Titan One,sans-serif;font-size:5vw}.styles__freezeRow___1UmUm-camelCase{margin:4vh auto;display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:3vw}.styles__freezeBlook___1aB1Z-camelCase{width:4.5vw;margin-right:2vw}.styles__zoomedIn___1szkn-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(.3);-webkit-animation:styles__zoom___2P6pO-camelCase 3s linear 6.5s forwards;animation:styles__zoom___2P6pO-camelCase 3s linear 6.5s forwards}@-webkit-keyframes styles__zoom___2P6pO-camelCase{0%{transform:scale(.3)}to{transform:scale(1)}}@keyframes styles__zoom___2P6pO-camelCase{0%{transform:scale(.3)}to{transform:scale(1)}}@media only screen and (max-width:800px){.styles__powerUpHeader___27EQ_-camelCase{font-size:13vw}.styles__powerUpIconContainer____C4SH-camelCase{margin:6vh;width:34vw;height:34vw}.styles__powerUpIcon___356r0-camelCase{font-size:21vw}.styles__powerUpDesc___2WfEK-camelCase{font-size:6vw;width:90%;margin:-2.5vh 5% 3.5vh}.styles__powerUpName___1yJQY-camelCase{font-size:8vw}.styles__powerUpInstruct___2LMmE-camelCase{font-size:5.5vw}.styles__playerHeader___2tJLv-camelCase{font-size:11vw}.styles__playerHolder___1gpyo-camelCase{width:90%}.styles__playerContainer___dEGIa-camelCase{width:100%}.styles__freezeIcon___rkDLI-camelCase{font-size:26vw;padding-bottom:8vh}.styles__freezeHeader___ARnFw-camelCase{font-size:12vw}.styles__freezeRow___1UmUm-camelCase{margin:3vh auto;font-size:6vw}.styles__freezeBlook___1aB1Z-camelCase{width:7.5vw;margin-right:2vw}}',
      ''
    ]), t.locals = {
      questionContainer: 'styles__questionContainer___1xV6d-camelCase',
      powerUpBody: 'styles__powerUpBody___2XV4r-camelCase',
      powerUpHeader: 'styles__powerUpHeader___27EQ_-camelCase',
      powerUpIconContainer: 'styles__powerUpIconContainer____C4SH-camelCase',
      powerUpIcon: 'styles__powerUpIcon___356r0-camelCase',
      powerUpDesc: 'styles__powerUpDesc___2WfEK-camelCase',
      powerUpName: 'styles__powerUpName___1yJQY-camelCase',
      powerUpInstruct: 'styles__powerUpInstruct___2LMmE-camelCase',
      notifyContainer: 'styles__notifyContainer___iTjuY-camelCase',
      fadeOut: 'styles__fadeOut___9fQP_-camelCase',
      notifyText: 'styles__notifyText___3wNwa-camelCase',
      notifyRow: 'styles__notifyRow___KwOMx-camelCase',
      notifyBlook: 'styles__notifyBlook___2jIbI-camelCase',
      notifyIcon: 'styles__notifyIcon___fKLDD-camelCase',
      playerHeader: 'styles__playerHeader___2tJLv-camelCase',
      playerHolder: 'styles__playerHolder___1gpyo-camelCase',
      noPlayers: 'styles__noPlayers___3966E-camelCase',
      playerContainer: 'styles__playerContainer___dEGIa-camelCase',
      playerBlook: 'styles__playerBlook___ojCM6-camelCase',
      playerColumn: 'styles__playerColumn___a33vt-camelCase',
      playerText: 'styles__playerText___2qgGJ-camelCase',
      playerProgress: 'styles__playerProgress___1mHd3-camelCase',
      freezeContainer: 'styles__freezeContainer___38Zsg-camelCase',
      freezeIcon: 'styles__freezeIcon___rkDLI-camelCase',
      freezeHeader: 'styles__freezeHeader___ARnFw-camelCase',
      freezeRow: 'styles__freezeRow___1UmUm-camelCase',
      freezeBlook: 'styles__freezeBlook___1aB1Z-camelCase',
      zoomedIn: 'styles__zoomedIn___1szkn-camelCase',
      zoom: 'styles__zoom___2P6pO-camelCase'
    };
  },
  iXRB: function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return n;
    }), o.d(t, 'b', function () {
      return r;
    });
    var n = 'PREPARE_MATCH', r = 'SET_STANDING';
  },
  kEFe: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__progressText___2Jktf-camelCase{font-size:28px;font-weight:700;margin-right:15px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}',
      ''
    ]), t.locals = { progressText: 'styles__progressText___2Jktf-camelCase' };
  },
  l8tX: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('oqc9'), h = o('vDqi'), f = o.n(h), m = o('1b17'), d = o('5gLy'), y = o('9IXX'), b = o('GIcp'), g = o.n(b), v = o('F32n'), w = o.n(v), _ = o('iQ+n'), E = o('VMvH'), k = o('tqJC'), O = o('SdQT'), x = o('TN+F');
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function T(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function C(e, t) {
      return (C = Object.setPrototypeOf || function (e, t) {
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
        var o, n = R(e);
        if (t) {
          var r = R(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return I(this, o);
      };
    }
    function I(e, t) {
      return !t || 'object' !== S(t) && 'function' != typeof t ? P(e) : t;
    }
    function P(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function R(e) {
      return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && C(e, t);
      }(s, e);
      var t, o, n, a = j(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = a.call(this, e)).state = {
          timer: 8,
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.changeMuted = t.changeMuted.bind(P(t)), t;
      }
      return t = s, (o = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.round && this.props.host.matches) {
              p.animateScroll.scrollToBottom({
                duration: 3000,
                delay: 2000,
                smooth: 'linear',
                containerId: 'matches'
              });
              var t = 8;
              this.timerInterval = setInterval(function () {
                t -= 1, e.setState({ timer: t }), t <= 0 && (clearInterval(e.timerInterval), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                  id: e.props.host.id,
                  clearAnswers: !0,
                  stage: e.props.host.questionString
                }, function () {
                  e.ok = !0, e.props.history.push('/host/battle-royale/question');
                }));
              }, 1000);
            }
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearInterval(this.timerInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', x.u));
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
            return this.props.host && this.props.host.round && this.props.host.matches ? r.a.createElement('div', {
              className: g.a.body,
              style: {
                backgroundColor: 1 === this.props.host.matches.length ? '#f7f7f7' : '#0bc2cf',
                overflow: 'hidden'
              }
            }, r.a.createElement(_.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(y.a, {
              left: 'Round '.concat(this.props.host.round),
              right: ''.concat(this.props.host.players.length, ' ').concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain'),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), 1 !== this.props.host.matches.length ? r.a.createElement('div', { className: g.a.hostRegularBody }, r.a.createElement('div', { className: g.a.royaleHeaderContainer }, r.a.createElement('div', { className: g.a.royaleHeaderText }, 'Starting In '.concat(this.state.timer))), r.a.createElement(p.Element, {
              className: w.a.matchArray,
              id: 'matches'
            }, this.props.host.matches.map(function (e) {
              return r.a.createElement(E.a, {
                match: e,
                key: e[0].name
              });
            }))) : r.a.createElement('div', { className: g.a.hostRegularBody }, r.a.createElement(k.a, {
              name: this.props.host.matches[0][0].name,
              match: this.props.host.matches[0],
              maxEnergy: this.props.host.settings.energy,
              team: 'Teams' === this.props.host.settings.mode,
              timer: this.state.timer
            }))) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && T(t.prototype, o), n && T(t, n), s;
    }(r.a.Component);
    N.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        questionString: c.a.string,
        settings: c.a.object,
        players: c.a.array,
        round: c.a.number,
        usedQuestions: c.a.array,
        matches: c.a.array,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      deleteHost: c.a.func.isRequired,
      setMuted: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(a.b)({
        deleteHost: d.c,
        setMuted: m.a
      }, e);
    })(Object(O.d)(N)));
  },
  pQrr: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('1b17'), m = o('5gLy'), d = o('9IXX'), y = o('GIcp'), b = o.n(y), g = o('iQ+n'), v = o('FC5S'), w = o('SdQT'), _ = o('TN+F');
    function E(e) {
      return (E = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function k(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function O(e, t) {
      return (O = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function x(e) {
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
        var o, n = C(e);
        if (t) {
          var r = C(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return S(this, o);
      };
    }
    function S(e, t) {
      return !t || 'object' !== E(t) && 'function' != typeof t ? T(e) : t;
    }
    function T(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function C(e) {
      return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && O(e, t);
      }(s, e);
      var t, o, n, a = x(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = a.call(this, e)).state = {
          transitioning: !1,
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.next = t.next.bind(T(t)), t.changeMuted = t.changeMuted.bind(T(t)), t;
      }
      return t = s, (o = [
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.transitionTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', _.u));
          }
        },
        {
          key: 'next',
          value: function () {
            var e = this;
            h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
              id: this.props.host.id,
              stage: 'pmat-'.concat(this.props.host.safe ? '1' : '0')
            }, function () {
              e.setState({ transitioning: !0 }, function () {
                e.transitionTimeout = setTimeout(function () {
                  e.ok = !0, e.props.history.push('/host/battle-royale/match/results');
                }, 300);
              });
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
            return this.props.host && this.props.host.question && this.props.host.question.text ? r.a.createElement('div', { className: b.a.body }, r.a.createElement(g.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), r.a.createElement(d.a, {
              left: 'Round '.concat(this.props.host.round),
              right: ''.concat(this.props.host.players.length + (this.props.host.dead[this.props.host.round] ? this.props.host.dead[this.props.host.round].length : 0), ' ').concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain'),
              muted: this.state.muted,
              changeMuted: this.changeMuted
            }), r.a.createElement(v.a, {
              next: this.next,
              time: 7,
              text: this.props.host.question.text,
              answers: this.props.host.question.answers,
              correctAnswers: this.props.host.question.correctAnswers,
              image: this.props.host.question.image ? this.props.host.question.image.url : '',
              clientAnswers: this.props.host.clientAnswers,
              numClients: this.props.host.numClients,
              transitioning: this.state.transitioning,
              muted: this.state.muted,
              canSkip: !0
            })) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && k(t.prototype, o), n && k(t, n), s;
    }(r.a.Component);
    j.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        round: c.a.number,
        players: c.a.array,
        matches: c.a.array,
        clientAnswers: c.a.array,
        forDead: c.a.array,
        numClients: c.a.number,
        dead: c.a.object,
        safe: c.a.bool,
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
      return Object(a.b)({
        setMuted: f.a,
        deleteHost: m.c
      }, e);
    })(Object(w.d)(j)));
  },
  rbtn: function (e, t, o) {
    var n = o('7o9Z');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  t3pX: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('5gLy'), m = o('GIcp'), d = o.n(m), y = o('pcIS'), b = o('iQ+n'), g = o('SdQT'), v = o('ow7w'), w = o('TN+F');
    function _(e) {
      return (_ = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function E(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return k(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return k(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function k(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function O(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function x(e, t) {
      return (x = Object.setPrototypeOf || function (e, t) {
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
        var o, n = C(e);
        if (t) {
          var r = C(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return T(this, o);
      };
    }
    function T(e, t) {
      return !t || 'object' !== _(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function C(e) {
      return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && x(e, t);
      }(s, e);
      var t, o, n, a = S(s);
      function s(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, s), (t = a.call(this, e)).state = {
          ready: !1,
          historyId: '',
          standings: [],
          isTeam: !1,
          muted: !!e.host && e.host.muted
        }, t;
      }
      return t = s, (o = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
              var t = JSON.parse(JSON.stringify(this.props.host));
              this.setState({
                standings: t.standings,
                isTeam: 'Teams' === t.settings.mode
              }, function () {
                for (var o = t.questionsPlayed, n = t.questions, r = n.map(function (e) {
                      return e.number;
                    }), a = [], s = 0; s < o.length; s++)
                  a[s] = n[r.indexOf(o[s])];
                e.startTimeout = setTimeout(function () {
                  var o = {};
                  e.props.firebase.getDatabaseVal(t.id, 'c', function (n) {
                    var r = n || {};
                    Object.entries(r).forEach(function (e) {
                      var t = E(e, 2), n = t[0], r = t[1];
                      if (!Object.keys(v.a).includes(n)) {
                        var a = {};
                        if (r.i)
                          if (Array.isArray(r.i))
                            for (var s = 0; s < r.i.length; s++) {
                              var i = r.i[s];
                              i && (a[s] = i);
                            }
                          else
                            a = r.i;
                        else
                          a = {};
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
                        o[n] = {
                          corrects: c,
                          incorrects: a
                        };
                      }
                    }), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), window.removeEventListener('beforeunload', w.u), e.waitTimeout = setTimeout(function () {
                      e.state.standings.length > 0 && (h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.state.isTeam ? h.a.post('/api/history', {
                        standings: e.state.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            wins: e.wins,
                            players: Object.entries(e.players).map(function (e) {
                              var t = E(e, 2), n = t[0];
                              return {
                                name: n,
                                blook: t[1].blook,
                                corrects: o[n] ? o[n].corrects : {},
                                incorrects: o[n] ? o[n].incorrects : {}
                              };
                            })
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
                      }) : h.a.post('/api/history', {
                        standings: e.state.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            wins: e.wins,
                            corrects: o[e.name] ? o[e.name].corrects : {},
                            incorrects: o[e.name] ? o[e.name].incorrects : {}
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
              className: d.a.hostBody,
              style: { overflowY: this.state.ready ? 'auto' : 'hidden' }
            }, r.a.createElement(b.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), this.state.standings.length > 0 ? r.a.createElement(y.a, {
              standings: this.state.standings,
              stats: this.state.standings.map(function (e) {
                return ''.concat(e.wins, ' ').concat(1 === e.wins ? 'Win' : 'Wins');
              }),
              gameId: this.props.gameId,
              historyId: this.state.historyId,
              team: this.state.isTeam,
              muted: this.state.muted
            }) : null) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && O(t.prototype, o), n && O(t, n), s;
    }(r.a.Component);
    j.propTypes = {
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
      return Object(a.b)({ deleteHost: f.c }, e);
    })(Object(g.d)(j)));
  },
  tjAp: function (e, t, o) {
    var n = o('kEFe');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  u7mc: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mf+E'), u = o('wIs1'), p = o('b6Qr'), h = o('TSYQ'), f = o.n(h), m = o('OMPg');
    function d(e, t, o) {
      return {
        type: m.a,
        standing: e,
        corrects: t,
        incorrects: o
      };
    }
    var y = o('pMbe'), b = o('GIcp'), g = o.n(b), v = o('cxN3'), w = o.n(v), _ = o('2g2H'), E = o('iQ+n'), k = o('FPhr'), O = o('6hcl'), x = o('SCqF');
    function S(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(o), !0).forEach(function (t) {
          C(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : S(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function C(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    var j = [
        [
          {
            name: 'boost',
            rate: 10
          },
          {
            name: 'wind',
            rate: 55
          },
          {
            name: 'shield',
            rate: 10
          },
          {
            name: 'rocket',
            rate: 20
          },
          {
            name: 'party',
            rate: 1
          },
          {
            name: 'zoom',
            rate: 1
          },
          {
            name: 'freeze',
            rate: 3
          }
        ],
        [
          {
            name: 'boost',
            rate: 25
          },
          {
            name: 'wind',
            rate: 20
          },
          {
            name: 'shield',
            rate: 20
          },
          {
            name: 'rocket',
            rate: 30
          },
          {
            name: 'party',
            rate: 1
          },
          {
            name: 'fire',
            rate: 2
          },
          {
            name: 'freeze',
            rate: 2
          }
        ],
        [
          {
            name: 'freeze',
            rate: 5
          },
          {
            name: 'boost',
            rate: 37
          },
          {
            name: 'shield',
            rate: 10
          },
          {
            name: 'rocket',
            rate: 40
          },
          {
            name: 'zoom',
            rate: 2
          },
          {
            name: 'rockets',
            rate: 3
          },
          {
            name: 'fire',
            rate: 3
          }
        ],
        [
          {
            name: 'freeze',
            rate: 10
          },
          {
            name: 'boost',
            rate: 30
          },
          {
            name: 'shield',
            rate: 10
          },
          {
            name: 'party',
            rate: 2
          },
          {
            name: 'fire',
            rate: 9
          },
          {
            name: 'rocket',
            rate: 30
          },
          {
            name: 'zoom',
            rate: 2
          },
          {
            name: 'rockets',
            rate: 7
          }
        ],
        [
          {
            name: 'freeze',
            rate: 10
          },
          {
            name: 'baby',
            rate: 1
          },
          {
            name: 'boost',
            rate: 36
          },
          {
            name: 'party',
            rate: 4
          },
          {
            name: 'fire',
            rate: 4
          },
          {
            name: 'rocket',
            rate: 35
          },
          {
            name: 'zoom',
            rate: 2
          },
          {
            name: 'hot',
            rate: 1
          },
          {
            name: 'rockets',
            rate: 7
          }
        ],
        [
          {
            name: 'freeze',
            rate: 5
          },
          {
            name: 'baby',
            rate: 5
          },
          {
            name: 'boost',
            rate: 40
          },
          {
            name: 'party',
            rate: 4
          },
          {
            name: 'fire',
            rate: 5
          },
          {
            name: 'rocket',
            rate: 30
          },
          {
            name: 'zoom',
            rate: 1
          },
          {
            name: 'hot',
            rate: 3
          },
          {
            name: 'rockets',
            rate: 7
          }
        ],
        [
          {
            name: 'freeze',
            rate: 5
          },
          {
            name: 'baby',
            rate: 10
          },
          {
            name: 'boost',
            rate: 40
          },
          {
            name: 'rocket',
            rate: 25
          },
          {
            name: 'hot',
            rate: 15
          },
          {
            name: 'rockets',
            rate: 5
          }
        ],
        [
          {
            name: 'baby',
            rate: 50
          },
          {
            name: 'hot',
            rate: 50
          }
        ]
      ], I = {
        freeze: {
          title: 'FREEZE',
          icon: 'far fa-snowflake',
          desc: 'Freeze a player for 10 seconds',
          color: '#64bee8'
        },
        baby: {
          title: 'Baby Booster',
          icon: 'fas fa-baby-carriage',
          desc: 'Move up 4 questions',
          color: '#ffb3ff'
        },
        wind: {
          title: 'Whoosh',
          icon: 'fas fa-wind',
          desc: 'Blow a player behind you back 1 question',
          color: '#809fff'
        },
        boost: {
          title: 'Energy Boost',
          icon: 'fas fa-bolt',
          desc: 'Move up 1 question',
          color: '#e6e600'
        },
        shield: {
          title: 'Mighty Shield',
          icon: 'fas fa-shield-alt',
          desc: 'Block the next harmful power-up',
          color: '#3366ff'
        },
        party: {
          title: 'Blook Fiesta',
          icon: 'fas fa-birthday-cake',
          desc: 'Distract other players with Blooks',
          color: '#bb99ff',
          time: 9000
        },
        fire: {
          title: 'Dumpster Fire',
          icon: 'fas fa-dumpster-fire',
          desc: 'Send the player in 1st back 3 questions',
          color: '#ff8533'
        },
        rocket: {
          title: 'Rocket Attack',
          icon: 'fas fa-rocket',
          desc: 'Send any player back 1 question',
          color: '#9a49aa'
        },
        zoom: {
          title: 'Minify',
          icon: 'fas fa-search-minus',
          desc: 'Shrink everyone else\'s screens',
          color: '#d8b470',
          time: 10000
        },
        hot: {
          title: 'Spicy Pepper',
          icon: 'fas fa-pepper-hot',
          desc: 'The next 3 questions are worth double',
          color: '#ff3333'
        },
        rockets: {
          title: 'Mega Rocket Attack',
          icon: 'fas fa-rocket',
          desc: 'Send 3 players back 1 question',
          color: '#0bc2cf'
        }
      }, P = o('4MRt'), R = o('lPag'), N = o('DoX5'), A = o('SdQT'), q = o('TN+F');
    function B(e) {
      return (B = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function D(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return U(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return U(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function U(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function L(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function M(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? L(Object(o), !0).forEach(function (t) {
          z(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : L(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function z(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function H(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function W(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function F(e, t) {
      return (F = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function Q(e) {
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
        var o, n = Y(e);
        if (t) {
          var r = Y(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return G(this, o);
      };
    }
    function G(e, t) {
      return !t || 'object' !== B(t) && 'function' != typeof t ? V(e) : t;
    }
    function V(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function Y(e) {
      return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var J = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && F(e, t);
      }(c, e);
      var t, o, n, a, s, i = Q(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          question: {},
          phase: '',
          correct: !1,
          progress: 0,
          goalAmount: e.client ? e.client.amount : 0,
          powerUp: {},
          powerUpDisplay: {},
          isChosen: !1,
          players: [],
          numTargets: 3,
          notifyText: '',
          notifyBlook: '',
          notifyIcon: '',
          isZoomed: !1,
          partyBlook: '',
          isWaiting: e.client && !t.props.client.late,
          showInstructions: !0
        }, t.dbRefStage = {}, t.dbRefMe = {}, t.dbRefAction = {}, t.questions = [], t.freeQuestions = [], t.corrects = {}, t.incorrects = {}, t.here = !0, t.waiting = !1, t.powerUpCd = 4, t.shield = !1, t.hotCounter = 0, t.onAnswer = t.onAnswer.bind(V(t)), t.getQuestion = t.getQuestion.bind(V(t)), t.getPowerUp = t.getPowerUp.bind(V(t)), t.choosePowerUp = t.choosePowerUp.bind(V(t)), t.usePowerUp = t.usePowerUp.bind(V(t)), t.answerNext = t.answerNext.bind(V(t)), t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: (a = regeneratorRuntime.mark(function e() {
            var t = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (this.props.client && 'Racing' === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0]) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  return Object(q.c)(), this.waitingTimeout = setTimeout(function () {
                    t.setState({ isWaiting: !1 });
                  }, 10000), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.getQuestion(), e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                case 9:
                  return this.dbRefStage = e.sent, this.dbRefStage.on('value', function (e) {
                    switch (e.val()) {
                    case 'fin':
                      t.props.firebase.getDatabaseVal(t.props.client.hostId, 'st', function (e) {
                        var o = e ? e.map(function (e) {
                          return {
                            name: e.n,
                            blook: e.b,
                            progress: e.pr,
                            place: e.pl
                          };
                        }).filter(function (e) {
                          return e.progress || 0 === e.progress;
                        }) : [];
                        o.sort(function (e, t) {
                          return e.place - t.place;
                        }), t.props.racingResults(o, t.corrects, t.incorrects), t.props.history.push('/play/racing/final');
                      });
                      break;
                    case null:
                      t.props.firebase.getDatabaseVal(t.props.client.hostId, 'stg', function (e) {
                        e || (t.props.deleteClient(), t.props.history.push('/play'));
                      });
                    }
                  }), e.next = 13, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'c/'.concat(this.props.client.name, '/at'));
                case 13:
                  return this.dbRefMe = e.sent, this.dbRefMe.on('value', function (e) {
                    if (e.val() && !t.state.notifyPowerUp) {
                      var o = e.val().split(':');
                      if (3 === o.length) {
                        var n = t.state.progress;
                        if (t.shield) {
                          if (t.shield = !1, !t.here)
                            return;
                          t.setState({
                            notifyIcon: I.shield.icon,
                            notifyBlook: o[1],
                            notifyText: ''
                          }, function () {
                            clearTimeout(t.notifyTimeout), t.notifyTimeout = setTimeout(function () {
                              t.setState({
                                notifyText: '',
                                notifyIcon: '',
                                notifyBlook: ''
                              });
                            }, 1700);
                          });
                        } else {
                          var r = o[2], a = '';
                          switch (r) {
                          case 'wind':
                          case 'rocket':
                            a = '+1', n -= 1;
                            break;
                          case 'fire':
                            a = '+3', n -= 3;
                            break;
                          case 'freeze':
                            a = o[0];
                          }
                          if (!t.here)
                            return;
                          t.setState({
                            notifyBlook: o[1],
                            notifyIcon: I[r].icon,
                            notifyText: a,
                            progress: n
                          }, function () {
                            clearTimeout(t.notifyTimeout), t.notifyTimeout = setTimeout(function () {
                              t.setState({
                                notifyText: '',
                                notifyIcon: '',
                                notifyBlook: ''
                              });
                            }, 'freeze' === r ? 10000 : 1700);
                          });
                        }
                        t.props.firebase.setVal({
                          id: t.props.client.hostId,
                          path: 'c/'.concat(t.props.client.name),
                          val: {
                            b: t.props.client.blook,
                            pr: n
                          }
                        });
                      }
                    }
                  }), e.next = 17, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'act');
                case 17:
                  this.dbRefAction = e.sent, this.dbRefAction.on('value', function (e) {
                    if (e.val() && !t.state.notifyPowerUp) {
                      var o = e.val().split(':');
                      if (3 === o.length && o[0] !== t.props.client.name)
                        if (t.shield) {
                          if (t.shield = !1, !t.here)
                            return;
                          t.setState({
                            notifyIcon: I.shield.icon,
                            notifyBlook: o[1],
                            notifyText: ''
                          }, function () {
                            clearTimeout(t.notifyTimeout), t.notifyTimeout = setTimeout(function () {
                              t.setState({
                                notifyText: '',
                                notifyIcon: '',
                                notifyBlook: ''
                              });
                            }, 1700);
                          });
                        } else {
                          if (!t.here)
                            return;
                          var n = o[2];
                          switch (n) {
                          case 'zoom':
                            t.setState({ isZoomed: !0 });
                            break;
                          case 'party':
                            if (o[1] === t.state.partyBlook)
                              return;
                            t.setState({ partyBlook: o[1] });
                          }
                          t.setState({
                            notifyBlook: o[1],
                            notifyIcon: I[n].icon,
                            notifyText: ''
                          }, function () {
                            clearTimeout(t.notifyTimeout), t.notifyTimeout = setTimeout(function () {
                              t.setState({
                                notifyText: '',
                                notifyIcon: '',
                                notifyBlook: ''
                              });
                            }, 1700), 'zoom' === n ? (clearTimeout(t.zoomTimeout), t.zoomTimeout = setTimeout(function () {
                              t.setState({ isZoomed: !1 });
                            }, I[n].time)) : 'party' === n && (clearTimeout(t.partyTimeout), t.partyTimeout = setTimeout(function () {
                              t.setState({ partyBlook: '' });
                            }, I[n].time));
                          });
                        }
                    }
                  });
                case 19:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                H(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                H(r, o, n, s, i, 'throw', e);
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
            this.here = !1, Object(q.t)(), clearInterval(this.powerUpInterval), clearTimeout(this.powerUpTimeout), clearTimeout(this.notifyText), clearTimeout(this.waitTimeout), clearTimeout(this.waitingTimeout), clearTimeout(this.partyTimeout), clearTimeout(this.zoomTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off('value'), Object.keys(this.dbRefMe).length && this.dbRefMe.off('value'), Object.keys(this.dbRefAction).length && this.dbRefAction.off('value');
          }
        },
        {
          key: 'onAnswer',
          value: function (e) {
            if (!this.waiting) {
              this.waiting = !0;
              var t = this.state.question.correctAnswers.includes(e), o = this.state.question.number;
              t ? this.corrects[o] ? this.corrects[o] += 1 : this.corrects[o] = 1 : this.incorrects[o] ? this.incorrects[o] += 1 : this.incorrects[o] = 1;
              var n = this.state.progress;
              t && (n += 1, this.hotCounter > 0 && (n += 1), this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: 'c/'.concat(this.props.client.name),
                val: {
                  b: this.props.client.blook,
                  pr: n
                }
              }), this.powerUpCd -= 1), this.hotCounter > 0 && (this.hotCounter -= 1), this.here && this.setState({
                correct: t,
                phase: 'feedback',
                progress: n
              });
            }
          }
        },
        {
          key: 'getQuestion',
          value: function () {
            var e = this;
            0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
            var t = Object(q.o)(this.freeQuestions);
            this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(q.w)(t.answers)), this.here && this.setState({
              question: t,
              phase: 'question',
              powerUp: '',
              numTargets: 0
            }, function () {
              e.waiting = !0, e.waitTimeout = setTimeout(function () {
                e.waiting = !1;
              }, 400);
            });
          }
        },
        {
          key: 'getPowerUp',
          value: function () {
            var e = this;
            this.here && (this.setState({
              phase: 'powerup',
              powerUpDisplay: Object(q.o)(Object.values(I)),
              isChosen: !1
            }, function () {
              e.powerUpInterval = setInterval(function () {
                e.here && e.setState({
                  powerUpDisplay: Object(q.o)(Object.values(I).filter(function (t) {
                    return t !== e.state.powerUpDisplay && 'rockets' !== t;
                  }))
                });
              }, 150);
            }), this.props.firebase.getDatabaseVal(this.props.client.hostId, 'c', function (t) {
              if (t && e.here) {
                var o = Object.values(t);
                o.sort(function (e, t) {
                  return (t.pr || 0) - (e.pr || 0);
                });
                var n = function (e) {
                  for (var t = Math.min(e, 7), o = 100 * Math.random(), n = 0, r = {}, a = 0; a < j[t].length; a++)
                    if ((n += j[t][a].rate) >= o) {
                      var s = j[t][a].name;
                      r = T({ name: s }, I[s]);
                      break;
                    }
                  return r;
                }((o[0].pr || 0) - e.state.progress);
                clearTimeout(e.powerUpTimeout), e.setState({ powerUp: n });
              }
            }), this.powerUpTimeout = setTimeout(function () {
              e.setState({ powerUp: M(M({}, I.boost), {}, { name: 'boost' }) });
            }, 3000));
          }
        },
        {
          key: 'choosePowerUp',
          value: function () {
            var e = this;
            this.state.powerUp && this.here && (clearInterval(this.powerUpInterval), clearTimeout(this.waitTimeout), this.setState({ isChosen: !0 }, function () {
              e.waiting = !0, e.waitTimeout = setTimeout(function () {
                e.waiting = !1;
              }, 300);
            }));
          }
        },
        {
          key: 'usePowerUp',
          value: function () {
            var e = this;
            if (!this.waiting) {
              var t = this.state.progress;
              switch (this.state.powerUp.name) {
              case 'boost':
              case 'baby':
                if (t += 'baby' === this.state.powerUp.name ? 4 : 1, this.props.firebase.setVal({
                    id: this.props.client.hostId,
                    path: 'c/'.concat(this.props.client.name),
                    val: {
                      b: this.props.client.blook,
                      pr: t
                    }
                  }), clearTimeout(this.notifyTimeout), !this.here)
                  return;
                this.setState({
                  progress: t,
                  notifyText: 'baby' === this.state.powerUp.name ? '-4' : '-1',
                  notifyIcon: I[this.state.powerUp.name].icon,
                  notifyBlook: ''
                }, function () {
                  e.notifyTimeout = setTimeout(function () {
                    e.setState({
                      notifyText: '',
                      notifyIcon: ''
                    });
                  }, 1700);
                }), this.getQuestion();
                break;
              case 'wind':
              case 'rocket':
              case 'rockets':
              case 'freeze':
                this.props.firebase.getDatabaseVal(this.props.client.hostId, 'c', function (t) {
                  var o = t ? Object.entries(t).map(function (e) {
                    var t = D(e, 2), o = t[0], n = t[1];
                    return {
                      name: o,
                      blook: n.b,
                      progress: n.pr || 0
                    };
                  }).filter(function (t) {
                    return t.name !== e.props.client.name;
                  }) : [];
                  'wind' === e.state.powerUp.name && (o = o.filter(function (t) {
                    return t.progress <= e.state.progress;
                  })), o.sort(function (e, t) {
                    return t.progress - e.progress;
                  }), e.here && e.setState({
                    players: o,
                    numTargets: 'rockets' === e.state.powerUp.name ? 3 : 1,
                    phase: 'target'
                  });
                });
                break;
              case 'fire':
                this.props.firebase.getDatabaseVal(this.props.client.hostId, 'c', function (t) {
                  var o = Object.entries(t).map(function (e) {
                    var t = D(e, 2), o = t[0], n = t[1];
                    return {
                      name: o,
                      blook: n.b,
                      progress: n.pr || 0
                    };
                  }).filter(function (t) {
                    return t.name !== e.props.client.name;
                  });
                  o.length > 0 && (o.sort(function (e, t) {
                    return t.progress - e.progress;
                  }), e.props.firebase.setVal({
                    id: e.props.client.hostId,
                    path: 'c/'.concat(e.props.client.name, '/tat'),
                    val: ''.concat(o[0].name, ':fire')
                  }));
                }), this.getQuestion();
                break;
              case 'zoom':
              case 'party':
                this.props.firebase.setVal({
                  id: this.props.client.hostId,
                  path: 'c/'.concat(this.props.client.name, '/tat'),
                  val: this.state.powerUp.name
                }), this.getQuestion();
                break;
              case 'hot':
                this.hotCounter = 3, this.getQuestion();
                break;
              case 'shield':
                this.shield = !0, this.getQuestion();
                break;
              default:
                this.getQuestion();
              }
            }
          }
        },
        {
          key: 'targetPlayer',
          value: function (e) {
            if (e) {
              var t = 'rockets' === this.state.powerUp.name ? 'rocket' : this.state.powerUp.name;
              this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: 'c/'.concat(this.props.client.name, '/tat'),
                val: ''.concat(e.name, ':').concat(t)
              });
            }
            var o = this.state.numTargets - 1;
            o <= 0 ? this.getQuestion() : this.setState({
              numTargets: o,
              players: this.state.players.filter(function (t) {
                return t !== e;
              })
            });
          }
        },
        {
          key: 'answerNext',
          value: function () {
            this.powerUpCd <= 0 ? (this.powerUpCd = 4, this.getPowerUp()) : this.getQuestion();
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.client && 'Racing' === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0] ? r.a.createElement('div', { className: p.isMobile ? g.a.mBody : g.a.body }, r.a.createElement(E.a, {
              title: 'Play Racing | Blooket',
              desc: 'Answer questions quickly to race against your opponents and use power-ups to help you get to the finish line first.'
            }), r.a.createElement(_.a, {
              name: this.props.client.name,
              rightText: ''.concat(this.state.goalAmount - this.state.progress, ' Left')
            }), r.a.createElement('div', { className: this.state.isZoomed ? w.a.zoomedIn : null }, 'question' === this.state.phase ? r.a.createElement('div', { className: w.a.questionContainer }, r.a.createElement(k.a, {
              onAnswer: this.onAnswer,
              text: this.state.question.text,
              answers: this.state.question.answers,
              image: this.state.question.image
            })) : 'feedback' === this.state.phase ? r.a.createElement('div', {
              className: w.a.questionContainer,
              style: { backgroundColor: '#f7f7f7' }
            }, r.a.createElement(O.a, {
              incorrectTime: 3,
              correctAnswers: this.state.question.correctAnswers,
              correct: this.state.correct,
              onNext: this.answerNext
            })) : 'powerup' === this.state.phase ? r.a.createElement('div', {
              className: f()(g.a.regularBody, w.a.powerUpBody),
              role: 'button',
              tabIndex: 0,
              onClick: this.state.isChosen ? this.usePowerUp : this.choosePowerUp
            }, r.a.createElement('div', { className: w.a.powerUpHeader }, 'Power-Up'), r.a.createElement('div', { className: w.a.powerUpIconContainer }, r.a.createElement('i', {
              className: f()(this.state.isChosen ? this.state.powerUp.icon : this.state.powerUpDisplay.icon, w.a.powerUpIcon),
              style: { color: this.state.isChosen ? this.state.powerUp.color : this.state.powerUpDisplay.color }
            })), this.state.isChosen ? r.a.createElement('div', { className: w.a.powerUpDesc }, r.a.createElement('div', { className: w.a.powerUpName }, this.state.powerUp.title), this.state.powerUp.desc) : null, r.a.createElement('div', { className: w.a.powerUpInstruct }, 'Click Anywhere To '.concat(this.state.isChosen ? 'Use This' : 'Choose A', ' Power-Up'))) : 'target' === this.state.phase ? r.a.createElement('div', {
              className: g.a.regularBody,
              style: {
                backgroundColor: '#0bc2cf',
                overflowY: 'auto'
              }
            }, r.a.createElement('div', { className: w.a.playerHeader }, this.state.players.length > 0 ? 'Choose '.concat(this.state.numTargets, ' ').concat(1 === this.state.numTargets ? 'Player' : 'Players') : 'No Players to Interact With'), this.state.players.length > 0 ? r.a.createElement('div', { className: w.a.playerHolder }, this.state.players.map(function (t) {
              return r.a.createElement('div', {
                className: w.a.playerContainer,
                key: t.name,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.targetPlayer(t);
                }
              }, r.a.createElement(N.a, {
                name: t.blook,
                className: w.a.playerBlook
              }), r.a.createElement('div', { className: w.a.playerColumn }, r.a.createElement('div', { className: w.a.playerText }, t.name), r.a.createElement('div', { className: w.a.playerProgress }, ''.concat(e.state.goalAmount - t.progress, ' Left'))));
            })) : r.a.createElement('div', {
              className: w.a.noPlayers,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.targetPlayer(null);
              }
            }, 'Next'), r.a.createElement('div', { style: { height: 30 } })) : null, this.state.notifyIcon === I.freeze.icon ? r.a.createElement('div', { className: f()(g.a.regularBody, w.a.freezeContainer) }, r.a.createElement(R.a, { count: p.isMobile ? 85 : 170 }), r.a.createElement('i', { className: f()(I.freeze.icon, w.a.freezeIcon) }), r.a.createElement('div', { className: w.a.freezeHeader }, 'FROZEN'), r.a.createElement('div', { className: w.a.freezeRow }, r.a.createElement(N.a, {
              name: this.state.notifyBlook,
              className: w.a.freezeBlook
            }), this.state.notifyText)) : null), this.state.notifyIcon && this.state.notifyIcon !== I.freeze.icon ? r.a.createElement('div', { className: w.a.notifyContainer }, r.a.createElement('div', { className: w.a.notifyText }, this.state.notifyText || r.a.createElement('i', { className: this.state.notifyIcon })), r.a.createElement('div', { className: w.a.notifyRow }, this.state.notifyBlook ? r.a.createElement(N.a, {
              name: this.state.notifyBlook,
              className: w.a.notifyBlook
            }) : null, this.state.notifyBlook && this.state.notifyIcon && this.state.notifyText ? r.a.createElement('div', { style: { width: 10 } }) : null, this.state.notifyIcon && this.state.notifyText ? r.a.createElement('i', { className: f()(this.state.notifyIcon, w.a.notifyIcon) }) : null)) : null, this.state.partyBlook ? r.a.createElement(P.a, { blook: this.state.partyBlook }) : null, this.state.isWaiting || this.state.showInstructions ? r.a.createElement(x.a, {
              text: this.state.showInstructions ? 'Your goal is to be the first to answer '.concat(this.state.goalAmount, ' questions correctly!') : 'Waiting For Race To Start',
              loading: !this.state.showInstructions,
              buttonOne: {
                text: 'OK!',
                click: function () {
                  return e.setState({ showInstructions: !1 });
                },
                color: 'blue'
              }
            }) : null) : r.a.createElement(l.a, { to: '/play' });
          }
        }
      ]) && W(t.prototype, o), n && W(t, n), c;
    }(r.a.Component);
    J.propTypes = {
      client: c.a.object,
      history: c.a.object.isRequired,
      racingResults: c.a.func.isRequired,
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client
      };
    }, function (e) {
      return Object(a.b)({
        racingResults: d,
        deleteClient: y.a
      }, e);
    })(Object(A.d)(J)));
  },
  uMVL: function (e, t, o) {
    'use strict';
    o.d(t, 'b', function () {
      return Q;
    });
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('oqc9'), h = o('TSYQ'), f = o.n(h), m = o('vDqi'), d = o.n(m), y = o('6bnt'), b = o('1b17'), g = o('5gLy'), v = o('9IXX'), w = o('GIcp'), _ = o.n(w), E = o('Cnz/'), k = o.n(E), O = o('iQ+n'), x = o('VMvH'), S = o('DbxT'), T = o('dJpi'), C = o.n(T), j = o('SdQT'), I = o('TN+F');
    function P(e) {
      return (P = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function R(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function N(e, t) {
      return (N = Object.setPrototypeOf || function (e, t) {
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
        var o, n = D(e);
        if (t) {
          var r = D(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return q(this, o);
      };
    }
    function q(e, t) {
      return !t || 'object' !== P(t) && 'function' != typeof t ? B(e) : t;
    }
    function B(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function U(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || M(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function L(e) {
      return function (e) {
        if (Array.isArray(e))
          return z(e);
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
          return z(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === o && e.constructor && (o = e.constructor.name), 'Map' === o || 'Set' === o ? Array.from(e) : 'Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? z(e, t) : void 0;
      }
    }
    function z(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function H(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function W(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? H(Object(o), !0).forEach(function (t) {
          F(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : H(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function F(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    var Q = function (e, t, o, n, r, a) {
        var s = JSON.parse(JSON.stringify(e || [])), i = Object(I.w)(s.map(function (e) {
            return W({}, e);
          }).filter(function (e) {
            return e && e.name && e.blook;
          })), c = JSON.parse(JSON.stringify(r || []));
        if (0 === c.length)
          return null;
        var l = JSON.parse(JSON.stringify(o || []));
        l.length === c.length && (l = []);
        var u = c.filter(function (e) {
            return !l.includes(e.number);
          }), p = Object(I.o)(u);
        l.push(p.number);
        var h = n ? L(n) : [];
        h.length < c.length && h.push(p.number);
        var f = L(p.answers);
        p.random && (f = Object(I.w)(f));
        for (var m = W(W({}, p), {}, { answers: f }), d = [], y = 0; y < p.answers.length; y++)
          d.push(f.indexOf(p.answers[y]));
        var b = d.join(''), g = [], v = {};
        if (i.length % 2 == 1) {
          var w = Object(I.o)(i);
          i.splice(i.indexOf(w), 1);
          var _ = Object(I.o)(i);
          g.push([
            W(W({}, w), {}, {
              time: 0,
              correct: !1
            }),
            W(W({}, _), {}, {
              clone: !0,
              time: 0,
              correct: !1
            })
          ]), v[w.name] = {
            b: w.blook,
            e: w.energy,
            op: t ? _.blook : _.name
          };
        }
        for (var E = 0; E < i.length; E += 2)
          g.unshift([
            W(W({}, i[E]), {}, {
              time: 0,
              correct: !1
            }),
            W(W({}, i[E + 1]), {}, {
              time: 0,
              correct: !1
            })
          ]), v[i[E].name] = {
            b: i[E].blook,
            e: i[E].energy,
            op: t ? i[E + 1].blook : i[E + 1].name
          }, v[i[E + 1].name] = {
            b: i[E + 1].blook,
            e: i[E + 1].energy,
            op: t ? i[E].blook : i[E].name
          };
        if (Object.values(a).forEach(function (e) {
            e.forEach(function (e) {
              v[e.name] = {
                b: e.blook,
                e: 0
              };
            });
          }), t) {
          var k = {};
          Object.values(v).forEach(function (e) {
            var t = JSON.parse(JSON.stringify(s)).filter(function (t) {
              return t.blook === e.b;
            });
            if (t[0] && t[0].players) {
              var o = t[0].players;
              Object.entries(o).forEach(function (e) {
                var t = U(e, 2), n = t[0], r = t[1];
                o[n] = r.blook;
              }), k[e.b] = {
                e: e.e,
                op: e.op,
                p: o
              };
            }
          }), v = k;
        }
        return {
          question: m,
          usedQuestions: l,
          questionsPlayed: h,
          matches: g,
          answerString: b,
          dbPlayers: v
        };
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
          }), t && N(e, t);
        }(s, e);
        var t, o, n, a = A(s);
        function s(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, s), (t = a.call(this, e)).state = {
            winner: {},
            loser: {},
            bothWin: !1,
            bothLose: !1,
            ready: !1,
            transition: !1,
            muted: !!e.host && e.host.muted
          }, t.ok = !1, t.changeMuted = t.changeMuted.bind(B(t)), t.audio = new Audio(C.a), t.audio.muted = t.state.muted, t;
        }
        return t = s, (o = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              if (this.props.host && this.props.host.round && this.props.host.matches) {
                var t = Math.max(10500, 6000 + 500 * this.props.host.matches.length);
                1 !== this.props.host.matches.length && p.animateScroll.scrollToBottom({
                  duration: 0.3 * t,
                  delay: 0.4 * t,
                  smooth: 'linear',
                  containerId: 'matches'
                }), this.readyTimeout = setTimeout(function () {
                  e.audio.play(), e.setState({ ready: !0 });
                }, 4600);
                var o = this.props.host.matches[0][0], n = this.props.host.matches[0][1], r = o.correct && !n.correct || o.correct && o.time <= n.time, a = n.correct && !o.correct || n.correct && n.time <= o.time;
                this.setState({
                  winner: r ? o : n,
                  loser: r ? n : o,
                  bothLose: !r && !a,
                  bothWin: r && a
                }), this.timeout = setTimeout(function () {
                  e.setState({ transition: !0 }, function () {
                    e.timeout = setTimeout(function () {
                      if (1 === e.props.host.players.length) {
                        var t = [], o = e.props.host.dead, n = e.props.host.settings.energy, r = e.props.host.safes, a = 2;
                        Object.values(o).forEach(function (e) {
                          a += e.length;
                        });
                        for (var s = n; s <= e.props.host.round; s++)
                          if (o[s]) {
                            a -= o[s].length;
                            var i = s - n;
                            if (r[0] && r[0] < s)
                              for (var c = 0; c < r.length; c++)
                                r[c] < s && (i -= 1);
                            for (var l = 0; l < o[s].length; l++)
                              'Teams' === e.props.host.settings.mode ? t.push({
                                name: o[s][l].name,
                                blook: o[s][l].blook,
                                players: o[s][l].players,
                                place: a,
                                wins: i
                              }) : t.push({
                                name: o[s][l].name,
                                blook: o[s][l].blook,
                                place: a,
                                wins: i
                              });
                          }
                        'Teams' === e.props.host.settings.mode ? t.push({
                          name: e.props.host.players[0].name,
                          blook: e.props.host.players[0].blook,
                          players: e.props.host.players[0].players,
                          place: 1,
                          wins: t.length > 0 ? t[t.length - 1].wins + e.props.host.players[0].energy : e.props.host.players[0].energy
                        }) : t.push({
                          name: e.props.host.players[0].name,
                          blook: e.props.host.players[0].blook,
                          place: 1,
                          wins: t.length > 0 ? t[t.length - 1].wins + e.props.host.players[0].energy : e.props.host.players[0].energy
                        }), t = t.reverse(), e.props.updateStandings(t);
                        var u = {};
                        t.forEach(function (t) {
                          t.blook && (u[t.name] = {
                            n: t.name,
                            b: t.blook,
                            p: t.place,
                            w: t.wins,
                            nu: 'Teams' === e.props.host.settings.mode ? Object.keys(t.players).length : 1
                          });
                        }), e.props.firebase.setVal({
                          id: e.props.host.id,
                          path: 'st',
                          val: u
                        }, function () {
                          d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                            id: e.props.host.id,
                            stage: 'fin'
                          }, function () {
                            e.ok = !0, e.props.history.push('/host/battle-royale/final');
                          });
                        });
                      } else {
                        var p = Q(e.props.host.players, 'Teams' === e.props.host.settings.mode, e.props.host.usedQuestions, e.props.host.questionsPlayed, e.props.host.questions, e.props.host.dead);
                        e.props.prepareRoyale(e.props.host.round + 1, p.usedQuestions, p.questionsPlayed, 'q-'.concat(p.question.stdNumber, '-').concat(p.answerString), p.question, p.matches), e.props.firebase.setVal({
                          id: e.props.host.id,
                          path: 'c',
                          val: p.dbPlayers
                        }, function () {
                          d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                            id: e.props.host.id,
                            stage: 'prv'
                          }, function () {
                            e.ok = !0, e.props.history.push('/host/battle-royale/match/preview');
                          });
                        });
                      }
                    }, 600);
                  });
                }, t);
              }
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.readyTimeout), clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', I.u));
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
            key: 'render',
            value: function () {
              var e = this;
              return this.props.host && this.props.host.round && this.props.host.matches ? r.a.createElement('div', {
                className: _.a.body,
                style: { backgroundColor: 1 === this.props.host.matches.length ? '#f7f7f7' : '#0bc2cf' }
              }, r.a.createElement(O.a, {
                title: 'Host Blooket',
                desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
              }), r.a.createElement(v.a, {
                left: 'Round '.concat(this.props.host.round),
                right: this.state.ready ? ''.concat(this.props.host.players.length, ' ').concat(1 === this.props.host.players.length ? ''.concat('Teams' === this.props.host.settings.mode ? 'Team' : 'Player', ' Remains') : ''.concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain')) : ''.concat(this.props.host.players.length + (this.props.host.dead[this.props.host.round] ? this.props.host.dead[this.props.host.round].length : 0), ' ').concat('Teams' === this.props.host.settings.mode ? 'Teams' : 'Players', ' Remain'),
                muted: this.state.muted,
                changeMuted: this.changeMuted
              }), r.a.createElement('div', { className: f()(_.a.hostRegularBody, F({}, k.a.invisible, this.state.transition)) }, 1 !== this.props.host.matches.length ? r.a.createElement('div', null, r.a.createElement('div', { className: _.a.royaleHeaderContainer }, r.a.createElement('div', { className: _.a.royaleHeaderText }, 'Match Results')), r.a.createElement(p.Element, {
                className: k.a.matchArray,
                id: 'matches'
              }, this.props.host.matches.map(function (t) {
                return r.a.createElement(x.a, {
                  match: t,
                  key: t[0].name,
                  ready: e.state.ready,
                  safe: e.props.host.safe
                });
              }))) : r.a.createElement(S.a, {
                victoryText: this.state.bothLose || this.props.host.safe ? 'Defeat' : 'Victory',
                winner: this.state.winner,
                loser: this.state.loser,
                bothWin: this.state.bothWin,
                bothLose: this.state.bothLose,
                maxEnergy: this.props.host.settings.energy,
                win: !(this.state.bothLose || this.props.host.safe),
                safe: this.props.host.safe,
                team: 'Teams' === this.props.host.settings.mode
              }))) : r.a.createElement(l.a, { to: '/dashboard' });
            }
          }
        ]) && R(t.prototype, o), n && R(t, n), s;
      }(r.a.Component);
    G.propTypes = {
      host: c.a.shape({
        hostName: c.a.string,
        id: c.a.number,
        question: c.a.object,
        questions: c.a.array,
        settings: c.a.object,
        players: c.a.array,
        round: c.a.number,
        usedQuestions: c.a.array,
        questionsPlayed: c.a.array,
        matches: c.a.array,
        dead: c.a.object,
        safe: c.a.bool,
        safes: c.a.array,
        muted: c.a.bool
      }),
      firebase: c.a.object,
      history: c.a.object,
      updateStandings: c.a.func.isRequired,
      prepareRoyale: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(a.b)({
        updateStandings: y.b,
        prepareRoyale: y.a,
        setMuted: b.a,
        deleteHost: g.c
      }, e);
    })(Object(j.d)(G)));
  },
  v543: function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return n;
    });
    var n = 'ANSWER_ROYALE';
  },
  vAyp: function (e, t, o) {
    'use strict';
    o.d(t, 'a', function () {
      return n;
    }), o.d(t, 'b', function () {
      return r;
    });
    var n = 'PREPARE_ROYALE', r = 'UPDATE_STANDINGS';
  },
  wh5Q: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('wIs1'), u = o('mLw1'), p = o('vDqi'), h = o.n(p), f = o('b6Qr'), m = o('pMbe'), d = o('dJL0'), y = o('Oy1k'), b = o.n(y), g = o('GIcp'), v = o.n(g), w = o('iQ+n'), _ = o('Bz36'), E = o('ZENw'), k = o('SdQT');
    function O(e) {
      return (O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t) {
      var o = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }
      return o;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? x(Object(o), !0).forEach(function (t) {
          T(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : x(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }
      return e;
    }
    function T(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }
    function C(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function j(e, t) {
      return (j = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function I(e) {
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
        var o, n = N(e);
        if (t) {
          var r = N(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return P(this, o);
      };
    }
    function P(e, t) {
      return !t || 'object' !== O(t) && 'function' != typeof t ? R(e) : t;
    }
    function R(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var A = function (e) {
        return r.a.createElement('div', { className: b.a.winsText }, ''.concat(e.wins, ' ').concat(1 === e.wins ? 'Win' : 'Wins'));
      }, q = function (e) {
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
        var t, o, n, a = I(s);
        function s(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, s), (t = a.call(this, e)).state = {
            numCorrect: '',
            numQuestions: '',
            ready: !1,
            standings: []
          }, t.saveStats = t.saveStats.bind(R(t)), t.renderStats = t.renderStats.bind(R(t)), t.final = !1, t;
        }
        return t = s, (o = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                var t = JSON.parse(JSON.stringify(this.props.client.standing));
                t.sort(function (e, t) {
                  return e.place - t.place;
                });
                var o = t.map(function (e) {
                    return e.name;
                  }).indexOf(this.props.client.team ? this.props.client.team.name : this.props.client.name), n = 0, r = 0;
                Object.values(this.props.client.corrects).forEach(function (e) {
                  n += e, r += e;
                }), Object.values(this.props.client.incorrects).forEach(function (e) {
                  r += e;
                }), this.props.firebase.setVal({
                  id: this.props.client.hostId,
                  path: 'c/'.concat(this.props.client.name),
                  val: {
                    c: S({}, this.props.client.corrects),
                    i: S({}, this.props.client.incorrects)
                  }
                });
                var a = t[o].place, s = 0;
                this.props.client.times.forEach(function (e) {
                  s += e;
                }), s /= Math.max(1, this.props.client.times.length), s = (Math.round(s) / 1000).toFixed(3);
                var i = 0;
                this.props.client.team ? t.forEach(function (e) {
                  a < e.place && (i += e.numPlayers);
                }) : i = t.length - a, this.stats = {
                  place: a,
                  wins: t[o].wins,
                  playersDefeated: i,
                  correctAnswers: n,
                  blookUsed: this.props.client.blook,
                  nameUsed: this.props.client.name
                }, this.props.client.username && this.saveStats(this.props.client.username, function () {
                }), this.readyTimeout = setTimeout(function () {
                  e.setState({
                    ready: !0,
                    standings: t,
                    numCorrect: n,
                    numQuestions: r,
                    avgTime: s,
                    me: t[o]
                  });
                }, 4750);
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
              h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/users/royalestats', {
                name: e,
                place: this.stats.place,
                showdownWins: this.stats.wins,
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
            key: 'renderStats',
            value: function () {
              return r.a.createElement(_.a, {
                title: 'Avg Time',
                stat: ''.concat(this.state.avgTime, 's')
              });
            }
          },
          {
            key: 'render',
            value: function () {
              return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement('div', {
                className: f.isMobile ? v.a.mBody : v.a.body,
                style: { backgroundColor: '#0bc2cf' }
              }, r.a.createElement(w.a, {
                title: 'Play Blooket',
                desc: 'Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious.'
              }), r.a.createElement(d.a, {
                leftText: this.props.client.name,
                rightText: 'Play Again',
                rightLink: '/play'
              }), this.state.ready ? r.a.createElement(E.a, {
                standings: this.state.standings,
                name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.props.client.username,
                plus: this.props.client.plus,
                myStat: ''.concat(this.state.me.wins, ' ').concat(1 === this.state.me.wins ? 'Win' : 'Wins'),
                saveStats: this.saveStats,
                renderStandingStat: A,
                renderStats: this.renderStats,
                tokenMultiplier: 1
              }) : null) : r.a.createElement(u.a, { to: '/play' });
            }
          }
        ]) && C(t.prototype, o), n && C(t, n), s;
      }(r.a.Component);
    q.propTypes = {
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
        times: c.a.array,
        team: c.a.object,
        plus: c.a.bool
      }),
      deleteClient: c.a.func.isRequired,
      firebase: c.a.object
    };
    t.a = Object(l.a)(Object(s.b)(function (e) {
      return { client: e.clients.client };
    }, function (e) {
      return Object(a.b)({ deleteClient: m.a }, e);
    })(Object(k.d)(q)));
  },
  'x2Z/': function (e, t, o) {
    var n = o('E9AG');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var r = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    o('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  yUdf: function (e, t, o) {
    (t = e.exports = o('JPst')(!1)).push([
      e.i,
      '.styles__eliminatedContainer___3_KpA-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;-webkit-animation:styles__fadeIn____DVgU-camelCase .1s linear .5s forwards;animation:styles__fadeIn____DVgU-camelCase .1s linear .5s forwards}@-webkit-keyframes styles__fadeIn____DVgU-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn____DVgU-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___24rs1-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___2oA9b-camelCase{font-size:26px;font-family:Nunito,sans-serif}',
      ''
    ]), t.locals = {
      eliminatedContainer: 'styles__eliminatedContainer___3_KpA-camelCase',
      fadeIn: 'styles__fadeIn____DVgU-camelCase',
      eliminatedHeader: 'styles__eliminatedHeader___24rs1-camelCase',
      eliminatedText: 'styles__eliminatedText___2oA9b-camelCase'
    };
  },
  yW64: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('5gLy'), m = o('GIcp'), d = o.n(m), y = o('iQ+n'), b = o('pcIS'), g = o('SCqF'), v = o('TN+F'), w = o('SdQT');
    function _(e) {
      return (_ = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function E(e, t, o, n, r, a, s) {
      try {
        var i = e[a](s), c = i.value;
      } catch (e) {
        return void o(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function k(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var o = [], n = !0, r = !1, a = void 0;
        try {
          for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
        } catch (e) {
          r = !0, a = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r)
              throw a;
          }
        }
        return o;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return O(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === o && e.constructor && (o = e.constructor.name);
        if ('Map' === o || 'Set' === o)
          return Array.from(e);
        if ('Arguments' === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
          return O(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function O(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, n = new Array(t); o < t; o++)
        n[o] = e[o];
      return n;
    }
    function x(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
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
        var o, n = I(e);
        if (t) {
          var r = I(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return C(this, o);
      };
    }
    function C(e, t) {
      return !t || 'object' !== _(t) && 'function' != typeof t ? j(e) : t;
    }
    function j(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function I(e) {
      return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && S(e, t);
      }(c, e);
      var t, o, n, a, s, i = T(c);
      function c(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = i.call(this, e)).state = {
          ready: !1,
          historyId: '',
          standings: [],
          goalAmount: e.host && e.host.settings ? e.host.settings.amount : 0,
          askPlayAgain: !1,
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.leaving = !1, t.onPlayAgainAnswer = t.onPlayAgainAnswer.bind(j(t)), t;
      }
      return t = c, (o = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
              var t = JSON.parse(JSON.stringify(this.props.host));
              this.setState({ standings: t.standings }, function () {
                e.startTimeout = setTimeout(function () {
                  var o = {};
                  e.props.firebase.getDatabaseVal(t.id, 'c', function (n) {
                    var r = n || {};
                    Object.entries(r).forEach(function (e) {
                      var t = k(e, 2), n = t[0], r = t[1], a = {};
                      if (r.i)
                        if (Array.isArray(r.i))
                          for (var s = 0; s < r.i.length; s++) {
                            var i = r.i[s];
                            i && (a[s] = i);
                          }
                        else
                          a = r.i;
                      else
                        a = {};
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
                      o[n] = {
                        corrects: c,
                        incorrects: a
                      };
                    }), window.removeEventListener('beforeunload', v.u), e.waitTimeout = setTimeout(function () {
                      e.state.standings.length > 0 && (h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.post('/api/history', {
                        standings: t.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            progress: e.progress,
                            corrects: o[e.name] ? o[e.name].corrects : {},
                            incorrects: o[e.name] ? o[e.name].incorrects : {}
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
                        }), e.askTimeout = setTimeout(function () {
                          e.setState({ askPlayAgain: !0 });
                        }, 3000);
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
            clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.askTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost());
          }
        },
        {
          key: 'onPlayAgainAnswer',
          value: (a = regeneratorRuntime.mark(function e(t) {
            var o = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (!this.leaving) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt('return');
                case 2:
                  if (!t) {
                    e.next = 10;
                    break;
                  }
                  return this.leaving = !0, this.props.firebase.removeVal(this.props.host.id, 'st'), e.next = 7, new Promise(function (e) {
                    return o.props.firebase.removeVal(o.props.host.id, 'c', e);
                  });
                case 7:
                  this.props.firebase.setStage({
                    id: this.props.host.id,
                    stage: 'join'
                  }, function () {
                    o.ok = !0, o.props.history.push('/host/join');
                  }), e.next = 13;
                  break;
                case 10:
                  this.setState({ askPlayAgain: !1 }), this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost();
                case 13:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), s = function () {
            var e = this, t = arguments;
            return new Promise(function (o, n) {
              var r = a.apply(e, t);
              function s(e) {
                E(r, o, n, s, i, 'next', e);
              }
              function i(e) {
                E(r, o, n, s, i, 'throw', e);
              }
              s(void 0);
            });
          }, function (e) {
            return s.apply(this, arguments);
          })
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? r.a.createElement('div', {
              className: d.a.hostBody,
              style: { overflowY: this.state.ready ? 'auto' : 'hidden' }
            }, r.a.createElement(y.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), this.state.standings.length > 0 ? r.a.createElement(b.a, {
              standings: this.state.standings,
              stats: this.state.standings.map(function (t) {
                return ''.concat(e.state.goalAmount - t.progress, ' Left');
              }),
              gameId: this.props.gameId,
              historyId: this.state.historyId,
              muted: this.state.muted
            }) : null, this.state.askPlayAgain ? r.a.createElement(g.a, {
              text: 'Would you like to play again right now with the same players and settings?',
              buttonOne: {
                text: 'Yes!',
                click: function () {
                  return e.onPlayAgainAnswer(!0);
                },
                color: 'blue'
              },
              buttonTwo: {
                text: 'No',
                click: function () {
                  return e.onPlayAgainAnswer(!1);
                },
                color: 'blue'
              }
            }) : null) : r.a.createElement(l.a, { to: '/dashboard' });
          }
        }
      ]) && x(t.prototype, o), n && x(t, n), c;
    }(r.a.Component);
    P.propTypes = {
      gameId: c.a.string,
      host: c.a.object,
      history: c.a.object,
      firebase: c.a.object,
      deleteHost: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return {
        host: e.hosts.host,
        gameId: e.hosts.id
      };
    }, function (e) {
      return Object(a.b)({ deleteHost: f.c }, e);
    })(Object(w.d)(P)));
  },
  zWsm: function (e, t, o) {
    'use strict';
    var n = o('q1tI'), r = o.n(n), a = o('ANjH'), s = o('/MKj'), i = o('17x9'), c = o.n(i), l = o('mLw1'), u = o('wIs1'), p = o('vDqi'), h = o.n(p), f = o('9IXX'), m = o('iQ+n'), d = o('GIcp'), y = o.n(d), b = o('5gLy'), g = o('1b17'), v = o('6bnt'), w = o('uMVL'), _ = o('61Gt'), E = o('4GQg'), k = o('s44s'), O = o('rExN'), x = o('5jSL'), S = o('SdEZ'), T = o.n(S), C = o('SdQT'), j = o('TN+F');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function P(e, t) {
      for (var o = 0; o < t.length; o++) {
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function R(e, t) {
      return (R = Object.setPrototypeOf || function (e, t) {
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
        var o, n = B(e);
        if (t) {
          var r = B(this).constructor;
          o = Reflect.construct(n, arguments, r);
        } else
          o = n.apply(this, arguments);
        return A(this, o);
      };
    }
    function A(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? q(e) : t;
    }
    function q(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function B(e) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var D = [
        4200,
        2850,
        7150,
        8150,
        8150,
        8150,
        2575
      ], U = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && R(e, t);
        }(s, e);
        var t, o, n, a = N(s);
        function s(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, s), (t = a.call(this, e)).state = {
            stage: 2,
            muted: !!e.host && e.host.muted
          }, t.ok = !0, t.changeMuted = t.changeMuted.bind(q(t)), t.audio = new Audio(T.a), t.audio.muted = t.state.muted, t;
        }
        return t = s, (o = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              this.props.host && this.props.host.settings && (this.audio.volume = 0.45, this.audio.play(), this.audio.addEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1), function t() {
                e.timeout = setTimeout(function () {
                  e.setState({ stage: e.state.stage + 1 }, function () {
                    e.state.stage >= 7 ? e.skip() : t();
                  });
                }, D[e.state.stage]);
              }());
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              var e = this;
              clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', j.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1);
            }
          },
          {
            key: 'skip',
            value: function () {
              var e = this, t = Object(w.b)(this.props.host.players, 'Teams' === this.props.host.settings.mode, this.props.host.usedQuestions, this.props.host.questionsPlayed, this.props.host.questions, this.props.host.dead);
              this.props.prepareRoyale(1, t.usedQuestions, t.questionsPlayed, 'q-'.concat(t.question.stdNumber, '-').concat(t.answerString), t.question, t.matches), this.props.firebase.setVal({
                id: this.props.host.id,
                path: 'c',
                val: t.dbPlayers
              }, function () {
                h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, e.props.firebase.setStage({
                  id: e.props.host.id,
                  stage: 'prv'
                }, function () {
                  e.ok = !0, e.props.history.push('/host/battle-royale/match/preview');
                });
              });
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
            key: 'render',
            value: function () {
              var e = this;
              return this.props.host && this.props.host.settings ? r.a.createElement('div', { className: y.a.hostBody }, r.a.createElement(m.a, {
                title: 'Host Blooket',
                desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
              }), r.a.createElement(f.a, {
                left: '',
                center: 'Instructions',
                muted: this.state.muted,
                changeMuted: this.changeMuted
              }), 2 === this.state.stage ? r.a.createElement(_.a, { team: 'Teams' === this.props.host.settings.mode }) : null, 3 === this.state.stage ? r.a.createElement(E.a, { mode: 'Teams' === this.props.host.settings.mode ? 'Royale Teams' : 'Royale' }) : null, 4 === this.state.stage ? r.a.createElement(k.a, { team: 'Teams' === this.props.host.settings.mode }) : null, 5 === this.state.stage ? r.a.createElement(O.a, { team: 'Teams' === this.props.host.settings.mode }) : null, 6 === this.state.stage ? r.a.createElement(x.a, { noExpand: !0 }) : null, r.a.createElement('div', {
                className: y.a.skipButton,
                onClick: function () {
                  return e.skip();
                },
                role: 'button',
                tabIndex: '0'
              }, 'Skip')) : r.a.createElement(l.a, { to: '/dashboard' });
            }
          }
        ]) && P(t.prototype, o), n && P(t, n), s;
      }(r.a.Component);
    U.propTypes = {
      host: c.a.object,
      id: c.a.string,
      firebase: c.a.object,
      history: c.a.object,
      deleteHost: c.a.func.isRequired,
      setMuted: c.a.func.isRequired,
      prepareRoyale: c.a.func.isRequired
    };
    t.a = Object(u.a)(Object(s.b)(function (e) {
      return {
        host: e.hosts.host,
        id: e.hosts.id
      };
    }, function (e) {
      return Object(a.b)({
        deleteHost: b.c,
        setMuted: g.a,
        prepareRoyale: v.a
      }, e);
    })(Object(C.d)(U)));
  }
}]);