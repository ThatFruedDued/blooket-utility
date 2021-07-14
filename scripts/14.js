(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{
  '3RWh': function (e, t, a) {
    'use strict';
    a.d(t, 'b', function () {
      return o;
    }), a.d(t, 'a', function () {
      return s;
    });
    var o = {
        Toast: {
          type: 'food',
          profits: [
            0,
            1,
            30,
            300,
            1000,
            2000
          ],
          prices: [
            0,
            300,
            5250,
            42500,
            130000
          ]
        },
        Cereal: {
          type: 'food',
          profits: [
            0,
            10,
            150,
            1500,
            5000,
            10000
          ],
          prices: [
            5,
            1500,
            26250,
            212500,
            650000
          ]
        },
        Yogurt: {
          type: 'food',
          profits: [
            0,
            30,
            450,
            4500,
            15000,
            30000
          ],
          prices: [
            10,
            4500,
            78750,
            637500,
            1950000
          ]
        },
        'Breakfast Combo': {
          type: 'food',
          profits: [
            0,
            60,
            900,
            9000,
            30000,
            60000
          ],
          prices: [
            50,
            9000,
            157500,
            1275000,
            3900000
          ]
        },
        'Orange Juice': {
          type: 'food',
          profits: [
            0,
            100,
            1500,
            15000,
            50000,
            100000
          ],
          prices: [
            200,
            15000,
            262500,
            2125000,
            6500000
          ]
        },
        Milk: {
          type: 'food',
          profits: [
            0,
            150,
            2250,
            22500,
            75000,
            150000
          ],
          prices: [
            500,
            22500,
            393750,
            3187500,
            9750000
          ]
        },
        Waffle: {
          type: 'food',
          profits: [
            0,
            210,
            3150,
            31500,
            105000,
            210000
          ],
          prices: [
            2000,
            31500,
            551250,
            4462500,
            13650000
          ]
        },
        Pancakes: {
          type: 'food',
          profits: [
            0,
            280,
            4200,
            42000,
            140000,
            280000
          ],
          prices: [
            5000,
            42000,
            735000,
            5950000,
            18200000
          ]
        },
        'French Toast': {
          type: 'food',
          profits: [
            0,
            360,
            5400,
            54000,
            180000,
            360000
          ],
          prices: [
            7500,
            54000,
            945000,
            7650000,
            23400000
          ]
        },
        level: {
          name: 'Café Level',
          type: 'item',
          multipliers: [
            1,
            1.5,
            2,
            2.5,
            3
          ],
          prices: [
            0,
            2500,
            250000,
            2500000,
            25000000
          ]
        },
        time: {
          name: 'Wait Time',
          type: 'item',
          times: [
            0,
            2,
            3.5,
            5,
            6
          ],
          prices: [
            0,
            1000,
            150000,
            1000000,
            10000000
          ]
        }
      }, s = {
        pay: {
          name: 'Paycheck Bonus',
          price: 500,
          percent: 0.05,
          color: '#2ca02c',
          icon: 'fas fa-hand-holding-usd',
          desc: 'Give a player +25% of their balance'
        },
        crate: {
          name: 'Supply Crate',
          price: 1000,
          percent: 0.1,
          color: '#ff7f0f',
          icon: 'fas fa-parachute-box',
          desc: '+7 stock of all your foods'
        },
        happy: {
          name: 'Happy Customers',
          price: 2500,
          percent: 0.125,
          color: '#b3dc23',
          icon: 'fas fa-grin-alt',
          desc: 'Your next 5 customers pay double'
        },
        trash: {
          name: 'Trash the Food',
          price: 5000,
          percent: 0.15,
          color: '#7f7f7f',
          icon: 'fas fa-trash-alt',
          desc: 'Lower a player\'s food stocks by 3 each'
        },
        tax: {
          name: 'TAXES!!!',
          price: 7500,
          percent: 0.25,
          color: '#1f77b4',
          icon: 'fas fa-funnel-dollar',
          desc: 'Reduce a player\'s balance by 25%'
        },
        inspect: {
          name: 'Health Inspection',
          price: 10000,
          percent: 0.275,
          color: '#d62728',
          icon: 'fas fa-file-medical',
          desc: 'Force a player to get a 12s health inspection'
        },
        back: {
          name: 'Run It Back',
          price: 150000,
          percent: 0,
          color: '#0bc2cf',
          icon: 'fas fa-sync-alt',
          desc: 'Be able to buy all your abilities again'
        }
      };
  },
  '3Yb6': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__left___1m5xF-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;overflow-x:visible}.styles__left___1m5xF-camelCase,.styles__standingRow___387aL-camelCase{position:absolute;width:35vw}.styles__standingRow___387aL-camelCase{height:8vh;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);padding:.5vw;border-radius:7px;border-radius:8;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___A3Foh-camelCase{text-align:center;padding:1vh 0 1vh .5vw;min-width:2vw;line-height:6vh;text-align:right}.styles__placeText___A3Foh-camelCase,.styles__superPlaceText___1VmuG-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__superPlaceText___1VmuG-camelCase{text-align:left;width:1vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___1qP8d-camelCase{margin-left:1.5vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__nameText___3e1sb-camelCase{padding:1vh 1vw;text-align:left;flex-grow:1}.styles__cashText___15Zk5-camelCase,.styles__nameText___3e1sb-camelCase{font-weight:700;color:#fff;line-height:6vh;font-family:Nunito,sans-serif}.styles__cashText___15Zk5-camelCase{padding:1vh 1.5vw;width:7vw;text-align:right;overflow:hidden}.styles__chatroom___3EN4R-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;padding:15px 0;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.styles__chatroomInside___2KwYO-camelCase{width:100%;height:100%;overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___3pffC-camelCase::-webkit-scrollbar{width:0}.styles__noAlerts___vjopn-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___3aYwc-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___3AAOh-camelCase{font-size:3vw}.styles__noAlertsText___3AAOh-camelCase,.styles__totalCashText___1wzEb-camelCase{font-weight:700;font-family:Nunito,sans-serif}.styles__totalCashText___1wzEb-camelCase{color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;text-align:center;position:absolute;left:45vw;top:80%;width:46vw;height:calc(15% - 2vh);padding:1vh 2vw}',
      ''
    ]), t.locals = {
      left: 'styles__left___1m5xF-camelCase',
      standingRow: 'styles__standingRow___387aL-camelCase',
      placeText: 'styles__placeText___A3Foh-camelCase',
      superPlaceText: 'styles__superPlaceText___1VmuG-camelCase',
      blookBox: 'styles__blookBox___1qP8d-camelCase',
      nameText: 'styles__nameText___3e1sb-camelCase',
      cashText: 'styles__cashText___15Zk5-camelCase',
      chatroom: 'styles__chatroom___3EN4R-camelCase',
      chatroomInside: 'styles__chatroomInside___2KwYO-camelCase',
      invisibleScrollbar: 'styles__invisibleScrollbar___3pffC-camelCase',
      noAlerts: 'styles__noAlerts___vjopn-camelCase',
      noAlertsIcon: 'styles__noAlertsIcon___3aYwc-camelCase',
      noAlertsText: 'styles__noAlertsText___3AAOh-camelCase',
      totalCashText: 'styles__totalCashText___1wzEb-camelCase'
    };
  },
  '3pgL': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__background___FjZBh-camelCase{background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}.styles__contentHolder___26TQB-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___4K0ON-camelCase{font-size:10vw;margin:20px 0;padding:1vw 3.1vw 1vw 3vw;background-color:#ac7339;box-shadow:inset 0 0 0 .6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__buttonContainer___1MvXc-camelCase{margin:20px 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___18zAv-camelCase{font-size:3vw;font-family:Satisfy,sans-serif;border-radius:7px;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;padding:.4vw 2vw;background-color:#ac7339;box-shadow:inset 0 0 0 .5vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___18zAv-camelCase:hover{transform:scale(.95)}.styles__loginText___3e8CR-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:7px 10px}.styles__saveHeaderHolder___1b2G0-camelCase{width:90%;margin:70px auto 50px;display:flex;justify-content:center;align-items:center}.styles__savesHeader___38Hfi-camelCase{font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 25px;text-align:center;display:inline-block;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__savesHolder___2tljV-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___2dWa--camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 7px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;flex-direction:column;max-width:286px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___3YJPX-camelCase{font-size:42px;line-height:45px;margin:10px 5% 0}.styles__saveSubTitle___2By99-camelCase,.styles__saveTitle___3YJPX-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___2By99-camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___3_KBt-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___2ryOu-camelCase{width:38px;text-align:center;margin-left:5px}.styles__loadButton___rt3Qc-camelCase{background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___rt3Qc-camelCase:hover{transform:scale(.95)}.styles__emptySave___PG4QH-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___3Qovm-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;background-color:#ac7339;box-shadow:inset 0 0 0 5px rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;padding:5px 15px;text-shadow:2px 2px 8px grey}.styles__backButton___3Qovm-camelCase,.styles__stageText___3Q7Ts-camelCase{font-family:Nunito,sans-serif}.styles__stageText___3Q7Ts-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___4K0ON-camelCase{font-size:26vw;padding:3vw 6.6vw 3vw 6vw;box-shadow:inset 0 0 0 1.6vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__button___18zAv-camelCase{font-size:10vw;padding:1.3vw 5vw;box-shadow:inset 0 0 0 1.4vw rgba(96,64,32,.4),0 0 8px 3px rgba(0,0,0,.2)}.styles__loginText___3e8CR-camelCase{width:80%;font-size:14px}.styles__savesHeader___38Hfi-camelCase{font-size:64px;line-height:70px;padding:10px 25px}.styles__saveHeaderHolder___1b2G0-camelCase{margin:70px auto 25px}.styles__savesHolder___2tljV-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___2dWa--camelCase{width:300px;margin:15px 20px}}',
      ''
    ]), t.locals = {
      background: 'styles__background___FjZBh-camelCase',
      contentHolder: 'styles__contentHolder___26TQB-camelCase',
      header: 'styles__header___4K0ON-camelCase',
      buttonContainer: 'styles__buttonContainer___1MvXc-camelCase',
      button: 'styles__button___18zAv-camelCase',
      loginText: 'styles__loginText___3e8CR-camelCase',
      saveHeaderHolder: 'styles__saveHeaderHolder___1b2G0-camelCase',
      savesHeader: 'styles__savesHeader___38Hfi-camelCase',
      savesHolder: 'styles__savesHolder___2tljV-camelCase',
      saveContainer: 'styles__saveContainer___2dWa--camelCase',
      saveTitle: 'styles__saveTitle___3YJPX-camelCase',
      saveSubTitle: 'styles__saveSubTitle___2By99-camelCase',
      saveRow: 'styles__saveRow___3_KBt-camelCase',
      saveIcon: 'styles__saveIcon___2ryOu-camelCase',
      loadButton: 'styles__loadButton___rt3Qc-camelCase',
      emptySave: 'styles__emptySave___PG4QH-camelCase',
      backButton: 'styles__backButton___3Qovm-camelCase',
      stageText: 'styles__stageText___3Q7Ts-camelCase'
    };
  },
  '4j4v': function (e, t, a) {
    var o = a('MV/S');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  '5JIh': function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), f = a('b6Qr'), p = a('vDqi'), d = a.n(p), m = a('anyA'), h = a('dgWh'), _ = a('pMbe'), y = a('9RJb'), b = a.n(y), g = a('GIcp'), v = a.n(g), w = a('dJL0'), C = a('iQ+n'), x = a('ZENw'), k = a('Bz36'), S = a('bpVs'), E = a('G/Pl'), O = a('TN+F'), T = a('SdQT');
    function I(e) {
      return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function N(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, o);
      }
      return a;
    }
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? N(Object(a), !0).forEach(function (t) {
          P(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function P(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function B(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function A(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function R(e, t) {
      return (R = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function D(e) {
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
        var a, o = L(e);
        if (t) {
          var s = L(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return z(this, a);
      };
    }
    function z(e, t) {
      return !t || 'object' !== I(t) && 'function' != typeof t ? M(e) : t;
    }
    function M(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function L(e) {
      return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var G = function (e, t) {
        return t ? s.a.createElement('div', { className: b.a.stageText }, '$'.concat(Object(O.v)(e.cash))) : s.a.createElement('div', { className: b.a.stageText }, 'Day '.concat(e.day));
      }, H = function (e) {
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
        }(l, e);
        var t, a, o, n, r, i = D(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            ready: !1,
            numCorrect: 0,
            numQuestions: 0,
            standings: [],
            plus: !1,
            foodServed: 0,
            cafeCash: 0,
            message: '',
            name: '',
            me: {}
          }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(M(t)), t.renderStats = t.renderStats.bind(M(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (n = regeneratorRuntime.mark(function e() {
              var t, a, o, s, n, r, i, l, c = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if ((t = e.sent) || this.setState({ notLoggedIn: !0 }), this.props.cafe && 'final' === this.props.cafe.stage) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt('return');
                  case 6:
                    if (this.isSolo = !this.props.cafe.mode, this.isHw = Boolean(this.props.cafe.resultId), this.isSolo || this.isHw || this.props.firebase.setVal({
                        id: this.props.client.hostId,
                        path: 'c/'.concat(this.props.client.name),
                        val: {
                          c: j({}, this.props.cafe.corrects),
                          i: j({}, this.props.cafe.incorrects)
                        }
                      }), this.isHw && d.a.put('/api/results', {
                        id: this.props.cafe.resultId,
                        data: {
                          corrects: this.props.cafe.corrects,
                          incorrects: this.props.cafe.incorrects,
                          day: this.props.cafe.day,
                          alive: !1
                        }
                      }).catch(function (e) {
                        return console.error(e);
                      }), a = 0, o = 0, Object.values(this.props.cafe.corrects).forEach(function (e) {
                        a += e, o += e;
                      }), Object.values(this.props.cafe.incorrects).forEach(function (e) {
                        o += e;
                      }), s = this.props.client && this.props.client.blook ? this.props.client.blook : Object(O.o)(Object.keys(E.a)), n = this.props.client && this.props.client.name ? this.props.client.name : 'You', (r = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                          name: n,
                          blook: s,
                          place: 6 - this.props.cafe.items.level,
                          day: this.props.cafe.day,
                          cash: this.props.cafe.cafeCash
                        }]).sort(function (e, t) {
                        return e.place - t.place;
                      }), -1 !== (i = r.map(function (e) {
                        return e.name;
                      }).indexOf(n))) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt('return');
                  case 21:
                    l = r[i].place, this.stats = {
                      place: l,
                      day: this.props.cafe.day,
                      cafeCash: r[i].cash,
                      playersDefeated: this.props.cafe.mode ? this.props.client.standing.length - l : 0,
                      foodServed: this.props.cafe.foodServed,
                      correctAnswers: a,
                      blookUsed: s,
                      nameUsed: n
                    }, this.props.cafe.mode ? this.readyTimeout = setTimeout(function () {
                      c.setState({
                        ready: !0,
                        numCorrect: a,
                        numQuestions: o,
                        foodServed: c.props.cafe.foodServed,
                        cafeCash: c.props.cafe.cafeCash,
                        me: r[i]
                      });
                    }, 4750) : this.setState({
                      numCorrect: a,
                      numQuestions: o,
                      day: this.props.cafe.day,
                      foodServed: this.props.cafe.foodServed,
                      cafeCash: this.props.cafe.cafeCash,
                      message: Object(S.a)((l - 1) / 5),
                      ready: !this.props.cafe.cafeId || this.state.ready,
                      standings: r
                    }), t && (this.saveStats(t.name, function () {
                    }), d.a.put('/api/users/plan', {
                      name: t.name,
                      stripeId: t.stripe
                    }).then(function (e) {
                      c.here && c.setState({
                        ready: !c.props.cafe.mode || c.state.ready,
                        name: t.name,
                        plus: 'Starter' !== e.data.plan || c.props.client && c.props.client.plus
                      });
                    }).catch(function (e) {
                      console.error(e);
                    }), this.props.cafe.cafeId && (d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.delete('/api/cafes', {
                      params: {
                        name: t.name,
                        id: this.props.cafe.cafeId,
                        setId: this.props.cafe.setId
                      }
                    }).catch(function (e) {
                      console.error(e);
                    })));
                  case 25:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, o) {
                var s = n.apply(e, t);
                function r(e) {
                  B(s, a, o, r, i, 'next', e);
                }
                function i(e) {
                  B(s, a, o, r, i, 'throw', e);
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
              clearTimeout(this.readyTimeout), this.props.deleteCafe(), this.props.deleteClient(), this.here = !1;
            }
          },
          {
            key: 'saveStats',
            value: function (e, t) {
              this.isSolo ? (d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.put('/api/users/cafestats/solo', {
                name: e,
                place: this.stats.place,
                day: this.stats.day,
                cafeCash: this.stats.cafeCash,
                foodServed: this.stats.foodServed,
                blookUsed: this.stats.blookUsed,
                nameUsed: this.stats.nameUsed,
                correctAnswers: this.stats.correctAnswers
              }).then(t).catch(function (e) {
                return console.error(e);
              })) : (d.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, d.a.put('/api/users/cafestats/live', {
                name: e,
                place: this.stats.place,
                cafeCash: this.stats.cafeCash,
                foodServed: this.stats.foodServed,
                blookUsed: this.stats.blookUsed,
                nameUsed: this.stats.nameUsed,
                correctAnswers: this.stats.correctAnswers,
                playersDefeated: this.stats.playersDefeated
              }).then(t).catch(function (e) {
                return console.error(e);
              }));
            }
          },
          {
            key: 'renderStats',
            value: function () {
              return s.a.createElement('div', { style: { width: '100%' } }, s.a.createElement(k.a, {
                title: 'Food Served',
                stat: Object(O.n)(this.state.foodServed)
              }), s.a.createElement(k.a, {
                title: 'Final Cash',
                stat: '$'.concat(Object(O.n)(this.state.cafeCash))
              }));
            }
          },
          {
            key: 'render',
            value: function () {
              if (this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.cafe || 'final' !== this.props.cafe.stage)
                return s.a.createElement(u.a, { to: '/play' });
              var e = this.props.cafe && this.props.cafe.resultId;
              return s.a.createElement('div', {
                className: f.isMobile ? v.a.mBody : v.a.body,
                style: { backgroundColor: '#0bc2cf' }
              }, s.a.createElement(C.a, {
                title: 'Play Café | Blooket',
                desc: 'Serve delicious food to Blooks by answering questions, and make money to upgrade your Café.'
              }), s.a.createElement(w.a, {
                noRight: !e,
                rightText: 'Play Again',
                rightLink: '/play'
              }), this.state.ready ? this.props.cafe.mode ? s.a.createElement(x.a, {
                standings: this.props.client.standing,
                name: this.props.client.name || 'You',
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.state.name,
                plus: this.props.client.plus,
                myStat: '$'.concat(Object(O.n)(this.state.me.cash)),
                saveStats: this.saveStats,
                renderStandingStat: function (e) {
                  return G(e, !0);
                },
                renderStats: this.renderStats,
                tokenMultiplier: 0.25
              }) : s.a.createElement(x.a, {
                standings: this.state.standings,
                name: this.props.client && this.props.client.name ? this.props.client.name : 'You',
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.state.name,
                plus: this.state.plus,
                myStat: 'Stayed Open for '.concat(this.state.day, ' ').concat(1 === this.state.day ? 'Day' : 'Days'),
                saveStats: this.saveStats,
                renderStandingStat: function (e) {
                  return G(e, !1);
                },
                renderStats: this.renderStats,
                customMessage: this.state.message,
                tokenMultiplier: 0.3
              }) : null);
            }
          }
        ]) && A(t.prototype, a), o && A(t, o), l;
      }(s.a.Component);
    H.propTypes = {
      cafe: l.a.object,
      client: l.a.object,
      firebase: l.a.object,
      deleteCafe: l.a.func.isRequired,
      deleteClient: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(m.c)(Object(c.a)(Object(r.b)(function (e) {
      return {
        cafe: e.cafes.cafe,
        client: e.clients.client
      };
    }, function (e) {
      return Object(n.b)({
        deleteCafe: h.a,
        deleteClient: _.a
      }, e);
    })(Object(T.d)(H))));
  },
  '7Qq4': function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('/MKj'), r = a('17x9'), i = a.n(r), l = a('wIs1'), c = a('b6Qr'), u = a('vDqi'), f = a.n(u), p = a('anyA'), d = a('iQ+n'), m = a('nkNP'), h = a.n(m), _ = a('GIcp'), y = a.n(_), b = a('e47E'), g = a('SCqF'), v = a('SdQT'), w = a('TN+F');
    function C(e) {
      return (C = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function k(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (o, s) {
          var n = e.apply(t, a);
          function r(e) {
            x(n, o, s, r, i, 'next', e);
          }
          function i(e) {
            x(n, o, s, r, i, 'throw', e);
          }
          r(void 0);
        });
      };
    }
    function S(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
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
        var a, o = N(e);
        if (t) {
          var s = N(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return T(this, a);
      };
    }
    function T(e, t) {
      return !t || 'object' !== C(t) && 'function' != typeof t ? I(e) : t;
    }
    function I(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function N(e) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
      }(i, e);
      var t, a, o, n, r = O(i);
      function i(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, i), (t = r.call(this, e)).state = {
          loading: !1,
          popUpMessage: '',
          numUsers: 0,
          numSets: 0,
          numPlayed: 0,
          verifyingGame: !1,
          verifyId: '',
          deleteId: '',
          deletePop: !1,
          deleteEmail: '',
          deleteUserPop: !1,
          deleteGroup: '',
          deleteGroupPop: !1,
          freeTrialEmail: '',
          freeTrialPop: !1,
          changeEmailOld: '',
          changeEmailNew: '',
          changeEmailPop: !1,
          passwordEmail: '',
          passwordPop: !1
        }, t.onVerify = t.onVerify.bind(I(t)), t.getPlusAccounts = t.getPlusAccounts.bind(I(t)), t.deleteOldGames = t.deleteOldGames.bind(I(t)), t.changeFeatured = t.changeFeatured.bind(I(t)), t.addNews = t.addNews.bind(I(t)), t.freeTrial = t.freeTrial.bind(I(t)), t.deleteSet = t.deleteSet.bind(I(t)), t.deleteUser = t.deleteUser.bind(I(t)), t.deleteGroup = t.deleteGroup.bind(I(t)), t.changeEmail = t.changeEmail.bind(I(t)), t.passwordReset = t.passwordReset.bind(I(t)), t;
      }
      return t = i, (a = [
        {
          key: 'componentDidMount',
          value: (n = k(regeneratorRuntime.mark(function e() {
            var t, a = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  if ((t = e.sent) && (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : ['Bot'].includes(t.name))) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 5:
                  f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.get('/api/users/count').then(function (e) {
                    a.setState({ numUsers: e.data.count });
                  }).catch(function (e) {
                    return console.error(e);
                  }), f.a.get('/api/games/count').then(function (e) {
                    a.setState({ numSets: e.data.count });
                  }).catch(function (e) {
                    return console.error(e);
                  }), f.a.get('/api/history/count').then(function (e) {
                    a.setState({ numPlayed: e.data.count });
                  }).catch(function (e) {
                    return console.error(e);
                  });
                case 9:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          })), function () {
            return n.apply(this, arguments);
          })
        },
        {
          key: 'onVerify',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/games/verify', { gameId: this.state.verifyId }).then(function () {
              t.setState({
                verifyingGame: !1,
                verifyId: '',
                loading: !1
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'getPlusAccounts',
          value: function () {
            this.setState({ loading: !0 });
            var e = this;
            function t() {
              return (t = k(regeneratorRuntime.mark(function t() {
                var a, o, s;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, new Promise(function (e) {
                        f.a.get('/api/users/notstarter').then(function (t) {
                          return e(t.data);
                        }).catch(function (t) {
                          console.error(t), e([]);
                        });
                      });
                    case 2:
                      return a = t.sent, o = a.map(function (e) {
                        return new Promise(function (t) {
                          f.a.put('/api/users/plan', {
                            name: e.name,
                            stripeId: e.stripe
                          }).then(t).catch(function (e) {
                            console.error(e), t();
                          });
                        });
                      }), t.next = 6, Promise.all(o);
                    case 6:
                      return t.next = 8, new Promise(function (e) {
                        f.a.get('/api/users/notstarter').then(function (t) {
                          return e(t.data);
                        }).catch(function (t) {
                          console.error(t), e([]);
                        });
                      });
                    case 8:
                      s = t.sent, console.log(s), console.log(s.map(function (e) {
                        return e.email;
                      })), e.setState({
                        loading: !1,
                        popUpMessage: 'Plus accounts logged to console!'
                      });
                    case 12:
                    case 'end':
                      return t.stop();
                    }
                }, t);
              }))).apply(this, arguments);
            }
            !function () {
              t.apply(this, arguments);
            }();
          }
        },
        {
          key: 'deleteOldGames',
          value: function () {
            var e = this;
            this.setState({ loading: !0 }), f.a.delete('/api/firebase/oldgames').then(function (t) {
              e.setState({
                loading: !1,
                popUpMessage: ''.concat(t.data.numDeleted, ' old games deleted.')
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'changeFeatured',
          value: function () {
            var e = this;
            this.setState({ loading: !0 }), this.state.addingFeatured ? (f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/games/featured/add', { id: this.state.featuredInput }).then(function () {
              e.setState({
                loading: !1,
                featuredInput: '',
                featuredPop: '',
                popUpMessage: 'Game added to featured games.'
              });
            }).catch(function (e) {
              return console.error(e);
            })) : (f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/games/featured/remove', { id: this.state.featuredInput }).then(function () {
              e.setState({
                loading: !1,
                featuredInput: '',
                featuredPop: '',
                popUpMessage: 'Game removed from featured games.'
              });
            }).catch(function (e) {
              return console.error(e);
            }));
          }
        },
        {
          key: 'addNews',
          value: function () {
            var e = this;
            this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/addnews').then(function () {
              e.setState({
                loading: !1,
                popUpMessage: 'Successfully set news to true for all users!'
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'freeTrial',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/free-trial', { email: this.state.freeTrialEmail.toLowerCase() }).then(function () {
              t.setState({
                loading: !1,
                freeTrialEmail: '',
                freeTrialPop: !1
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'deleteSet',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/games', { params: { gameId: this.state.deleteId } }).then(function () {
              t.setState({
                loading: !1,
                deleteId: '',
                deletePop: !1
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'deleteUser',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/users', { params: { email: this.state.deleteEmail.trim().toLowerCase() } }).then(function () {
              t.setState({
                loading: !1,
                deleteEmail: '',
                deleteUserPop: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'deleteGroup',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/groups', { params: { groupId: this.state.deleteGroup } }).then(function () {
              t.setState({
                loading: !1,
                deleteGroup: '',
                deleteGroupPop: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'changeEmail',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/change/email-bot', {
              email: this.state.changeEmailOld.toLowerCase(),
              newEmail: this.state.changeEmailNew.toLowerCase()
            }).then(function () {
              t.setState({
                loading: !1,
                changeEmailPop: !1,
                changeEmailOld: '',
                changeEmailNew: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'passwordReset',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/forgot-bot', { email: this.state.passwordEmail.toLowerCase() }).then(function (e) {
              e.data && e.data.success && console.log('https://www.blooket.com/reset/'.concat(e.data.token)), t.setState({
                loading: !1,
                passwordPop: !1,
                passwordEmail: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: c.isMobile ? y.a.mBody : y.a.body,
              style: { backgroundColor: '#3a3a3a' }
            }, s.a.createElement(d.a, {
              title: 'Admin | Blooket',
              desc: 'Pls don\'t come here.'
            }), s.a.createElement(b.a, {
              history: this.props.history,
              page: 'Settings'
            }), s.a.createElement('div', { className: y.a.profileRegularBody }, s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: this.deleteOldGames,
              className: h.a.button
            }, 'Delete Old Games'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ verifyingGame: !0 });
              },
              className: h.a.button
            }, 'Verify Set'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: this.getPlusAccounts,
              className: h.a.button
            }, 'Get Plus Accounts'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  featuredPop: !0,
                  featuredInput: '',
                  addingFeatured: !0
                });
              },
              className: h.a.button
            }, 'Add Featured Game'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  featuredPop: !0,
                  featuredInput: '',
                  addingFeatured: !1
                });
              },
              className: h.a.button
            }, 'Removed Featured Game'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return console.log(new Date().toISOString());
              },
              className: h.a.button
            }, 'Get Date'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: this.addNews,
              className: h.a.button
            }, 'Add News'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ freeTrialPop: !0 });
              },
              className: h.a.button
            }, 'Free Trial'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ passwordPop: !0 });
              },
              className: h.a.button
            }, 'Reset Password'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ changeEmailPop: !0 });
              },
              className: h.a.button
            }, 'Change Email'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deleteGroupPop: !0 });
              },
              className: h.a.button
            }, 'Delete Group'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deletePop: !0 });
              },
              className: h.a.button
            }, 'Delete Set'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deleteUserPop: !0 });
              },
              className: h.a.button
            }, 'Delete User'), s.a.createElement('div', { className: h.a.text }, 'Users: '.concat(Object(w.n)(this.state.numUsers)), s.a.createElement('br', null), 'Question Sets: '.concat(Object(w.n)(this.state.numSets)), s.a.createElement('br', null), 'Games Played: '.concat(Object(w.n)(this.state.numPlayed)))), this.state.loading || this.state.popUpMessage ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : this.state.popUpMessage,
              loading: this.state.loading,
              buttonOne: {
                text: 'Dope',
                click: function () {
                  return e.setState({ popUpMessage: '' });
                },
                color: 'blue'
              }
            }) : null, this.state.verifyingGame ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Set ID:',
              loading: this.state.loading,
              stringValue: this.state.verifyId,
              stringChange: function (t) {
                return e.setState({ verifyId: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.onVerify,
              buttonOne: {
                text: 'Verify',
                click: this.onVerify,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({ verifyingGame: !1 });
                },
                color: 'blue'
              }
            }) : this.state.featuredPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Game ID:',
              loading: this.state.loading,
              stringValue: this.state.featuredInput,
              stringChange: function (t) {
                return e.setState({ featuredInput: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.changeFeatured,
              buttonOne: {
                text: this.state.addingFeatured ? 'Add' : 'Remove',
                click: this.changeFeatured,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({ featuredPop: !1 });
                },
                color: 'blue'
              }
            }) : this.state.deletePop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Set ID:',
              loading: this.state.loading,
              stringValue: this.state.deleteId,
              stringChange: function (t) {
                return e.setState({ deleteId: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.deleteSet,
              buttonOne: {
                text: 'Delete',
                click: this.deleteSet,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deletePop: !1,
                    deleteId: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.deleteUserPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Email:',
              loading: this.state.loading,
              stringValue: this.state.deleteEmail,
              stringChange: function (t) {
                return e.setState({ deleteEmail: t.target.value });
              },
              stringPlaceholder: 'Email',
              onSubmit: this.deleteUser,
              buttonOne: {
                text: 'Delete',
                click: this.deleteUser,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deleteUserPop: !1,
                    deleteEmail: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.deleteGroupPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Group ID:',
              loading: this.state.loading,
              stringValue: this.state.deleteGroup,
              stringChange: function (t) {
                return e.setState({ deleteGroup: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.deleteGroup,
              buttonOne: {
                text: 'Delete',
                click: this.deleteGroup,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deleteGroupPop: !1,
                    deleteGroup: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.freeTrialPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Email to Give Free Trial:',
              loading: this.state.loading,
              stringValue: this.state.freeTrialEmail,
              stringChange: function (t) {
                return e.setState({ freeTrialEmail: t.target.value });
              },
              stringPlaceholder: 'Email',
              onSubmit: this.freeTrial,
              buttonOne: {
                text: 'Free',
                click: this.freeTrial,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    freeTrialPop: !1,
                    freeTrialEmail: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.changeEmailPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Emails:',
              loading: this.state.loading,
              stringValue: this.state.changeEmailOld,
              stringChange: function (t) {
                return e.setState({ changeEmailOld: t.target.value });
              },
              stringPlaceholder: 'Old Email',
              stringValue2: this.state.changeEmailNew,
              stringChange2: function (t) {
                return e.setState({ changeEmailNew: t.target.value });
              },
              stringPlaceholder2: 'New Email',
              onSubmit: this.changeEmail,
              buttonOne: {
                text: 'Change',
                click: this.changeEmail,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    changeEmailPop: !1,
                    changeEmailOld: '',
                    changeEmailNew: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.passwordPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Email to Get Password Link:',
              loading: this.state.loading,
              stringValue: this.state.passwordEmail,
              stringChange: function (t) {
                return e.setState({ passwordEmail: t.target.value });
              },
              stringPlaceholder: 'Email',
              onSubmit: this.passwordReset,
              buttonOne: {
                text: 'Get Link',
                click: this.passwordReset,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    passwordPop: !1,
                    passwordEmail: ''
                  });
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && S(t.prototype, a), o && S(t, o), i;
    }(s.a.Component);
    j.propTypes = {
      history: i.a.object,
      user: i.a.object
    }, t.a = Object(p.c)(Object(l.a)(Object(n.b)()(Object(v.d)(j))));
  },
  '7R+V': function (e, t, a) {
    'use strict';
    a.d(t, 'c', function () {
      return r;
    }), a.d(t, 'b', function () {
      return i;
    }), a.d(t, 'a', function () {
      return l;
    });
    var o = a('b6Qr'), s = a('w16W'), n = a.n(s), r = [
        {
          elementId: 'customer',
          text: 'Your Café has a customer! He wants 2 pieces of Toast.',
          nextButtonText: 'Next',
          className: n.a.customer
        },
        {
          elementId: 'customer',
          text: 'You have until that colored bar is empty to serve the customer. Fail to serve 3 customers in a day and your game is over.',
          nextButtonText: 'Next',
          className: n.a.customer
        },
        {
          elementId: 'plate1',
          text: 'Toast usually goes here, but right now we don\'t have any.',
          nextButtonText: 'Next',
          className: n.a.plate
        },
        {
          elementId: 'restock',
          text: 'Luckily, we can restock our food by clicking this button'.concat(o.isMobile ? '' : ' (or by pressing the space key once the tutorial is over)', '. Go ahead and click it now!'),
          elementClick: !0,
          functionIndex: 0,
          className: n.a.restock
        },
        {
          elementId: 'restock',
          text: 'Usually you\'ll have to answer a question correctly to restock your food, but we\'ll skip that for now. Go ahead and click again to get the 2nd piece of toast.',
          elementClick: !0,
          functionIndex: 0,
          className: n.a.restock
        },
        {
          elementId: 'plate1',
          text: 'Now that we have 2 pieces of Toast, we can click once to select them. Click it now!',
          elementClick: !0,
          className: n.a.plate
        },
        {
          elementId: 'customer',
          text: 'Now that you have the food selected, just click anywhere on the customer to deliver it!',
          elementClick: !0,
          className: n.a.customer
        },
        {
          text: 'Perfect! You just made $2! After the day is over, you can use this cash to upgrade your Café.',
          nextButtonText: 'Next',
          className: n.a.centered
        },
        {
          elementId: 'customersText',
          backgroundColor: '#9a49aa',
          text: 'You can tell how many customers are remaining in a day by that number in the top right of the header. Now, it\'s time to open your Café! Good Luck!',
          nextButtonText: 'Open Café',
          className: n.a.topRight
        }
      ], i = [
        {
          elementId: 'customer',
          text: 'Your Café has a customer! He wants 2 pieces of Toast.',
          nextButtonText: 'Next',
          className: n.a.customer
        },
        {
          elementId: 'plate1',
          text: 'Toast usually goes here, but right now we don\'t have any.',
          nextButtonText: 'Next',
          className: n.a.plate
        },
        {
          elementId: 'restock',
          text: 'Luckily, we can restock our food by clicking this button'.concat(o.isMobile ? '' : ' (or by pressing the space key once the tutorial is over)', '. Go ahead and click it now!'),
          elementClick: !0,
          functionIndex: 0,
          className: n.a.restock
        },
        {
          elementId: 'restock',
          text: 'Usually you\'ll have to answer a question correctly to restock your food, but we\'ll skip that for now. Go ahead and click again to get the 2nd piece of toast.',
          elementClick: !0,
          functionIndex: 0,
          className: n.a.restock
        },
        {
          elementId: 'plate1',
          text: 'Now that we have 2 pieces of Toast, we can click once to select them. Click it now!',
          elementClick: !0,
          className: n.a.plate
        },
        {
          elementId: 'customer',
          text: 'Now that you have the food selected, just click anywhere on the customer to deliver it!',
          elementClick: !0,
          className: n.a.customer
        },
        {
          text: 'Perfect! You just made $7!',
          nextButtonText: 'Next',
          className: n.a.centered
        },
        {
          elementId: 'upgrade',
          text: 'You can now use this money to upgrade your Café! Go ahead and click that button to go to the Upgrade Shop!',
          elementClick: !0,
          functionIndex: 1,
          className: n.a.restock
        }
      ], l = [
        {
          elementId: 'upgrade2',
          text: 'Look! The green price indicates that you can afford cereal! Go ahead and click on it to buy it!',
          elementClick: !0,
          functionIndex: 0,
          className: n.a.cereal
        },
        {
          text: 'Great work! Buying upgrades helps you make more money! Below the upgrades you\'ll also find abilities to help you win.',
          nextButtonText: 'Next',
          className: n.a.centered
        },
        {
          elementId: 'shopButton',
          text: 'Now go back to your Café to keep serving customers. Make sure you visit the Upgrade Shop frequently!',
          elementClick: !0,
          functionIndex: 1,
          className: n.a.back
        }
      ];
  },
  '8N3m': function (e, t, a) {
    var o = a('W8y1');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  '9RJb': function (e, t, a) {
    var o = a('X29w');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  'A+0k': function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('/MKj'), r = a('17x9'), i = a.n(r), l = a('wIs1'), c = a('b6Qr'), u = a('vDqi'), f = a.n(u), p = a('anyA'), d = a('iQ+n'), m = a('GIcp'), h = a.n(m), _ = a('e47E'), y = a('nkNP'), b = a.n(y), g = a('SdQT');
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function w(e) {
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
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return C(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function C(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    function x(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function k(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function S(e, t) {
      return (S = Object.setPrototypeOf || function (e, t) {
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
        var a, o = I(e);
        if (t) {
          var s = I(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return O(this, a);
      };
    }
    function O(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? T(e) : t;
    }
    function T(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function I(e) {
      return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
      }(l, e);
      var t, a, o, n, r, i = E(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          reports: [],
          noReports: !1,
          numReports: 0
        }, t.refresh = t.refresh.bind(T(t)), t.clickReport = t.clickReport.bind(T(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (n = regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  if ((t = e.sent) && (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : [
                      'Tom@Blooket',
                      'Bot'
                    ].includes(t.name))) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 5:
                  this.refresh();
                case 6:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, o) {
              var s = n.apply(e, t);
              function r(e) {
                x(s, a, o, r, i, 'next', e);
              }
              function i(e) {
                x(s, a, o, r, i, 'throw', e);
              }
              r(void 0);
            });
          }, function () {
            return r.apply(this, arguments);
          })
        },
        {
          key: 'refresh',
          value: function () {
            var e = this;
            f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.get('/api/reports').then(function (t) {
              e.setState({
                reports: t.data.reports,
                noReports: 0 === t.data.length,
                numReports: t.data.count
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'clickReport',
          value: function (e) {
            var t = this;
            window.open('https://www.blooket.com/set/'.concat(e));
            var a = w(this.state.reports), o = a.map(function (e) {
                return e.setId;
              }).indexOf(e);
            -1 !== o && a.splice(o, 1), this.setState({ reports: a }, function () {
              0 === t.state.reports.length && t.refresh();
            }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/reports', { params: { setId: e } }).then().catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: c.isMobile ? h.a.mBody : h.a.body,
              style: { backgroundColor: '#3a3a3a' }
            }, s.a.createElement(d.a, {
              title: 'Admin Reports | Blooket',
              desc: 'Pls don\'t come here.'
            }), s.a.createElement(_.a, {
              history: this.props.history,
              page: 'Settings'
            }), s.a.createElement('div', { className: h.a.profileRegularBody }, s.a.createElement('div', {
              style: {
                display: 'flex',
                alignItems: 'center'
              }
            }, s.a.createElement('div', {
              className: b.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: this.refresh
            }, 'Refresh'), s.a.createElement('div', { className: b.a.text }, ''.concat(this.state.reports.length, '/').concat(this.state.numReports, ' ').concat(1 === this.state.numReports ? 'Report' : 'Reports'))), this.state.reports.map(function (t) {
              return s.a.createElement('div', {
                key: t._id,
                className: b.a.button,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.clickReport(t.setId);
                }
              }, ''.concat(t.setId, ' - ').concat(t.numReports));
            }), this.state.noReports ? s.a.createElement('div', { className: b.a.text }, 'No more reports') : null));
          }
        }
      ]) && k(t.prototype, a), o && k(t, o), l;
    }(s.a.Component);
    N.propTypes = {
      history: i.a.object,
      user: i.a.object
    }, t.a = Object(p.c)(Object(l.a)(Object(n.b)()(Object(g.d)(N))));
  },
  ATvy: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mf+E'), u = a('wIs1'), f = a('b6Qr'), p = a('TSYQ'), d = a.n(p), m = a('vDqi'), h = a.n(m), _ = a('GIcp'), y = a.n(_), b = a('4j4v'), g = a.n(b), v = a('2g2H'), w = a('iQ+n'), C = a('FPhr'), x = a('6hcl'), k = a('SCqF'), S = a('vPiy'), E = a('7R+V'), O = a('Tqoc');
    function T(e, t, a, o, s, n, r, i) {
      return {
        type: O.a,
        corrects: e,
        incorrects: t,
        cafeCash: a,
        day: o,
        foodServed: s,
        freeQuestions: n,
        stage: r,
        foodStocks: i
      };
    }
    function I(e, t, a, o, s, n, r, i, l) {
      return {
        type: O.b,
        corrects: e,
        incorrects: t,
        cafeCash: a,
        day: o,
        foodServed: s,
        freeQuestions: n,
        stage: r,
        foodStocks: i,
        customers: l
      };
    }
    var N = a('bMSx'), j = a('pMbe'), P = a('4hRK'), B = a('IAGC'), A = a('avlG'), R = a('DoX5'), D = a('3RWh'), z = a('TN+F'), M = a('SdQT'), L = a('anyA'), G = a('AkzR'), H = a('6T3a'), U = a('Rpkt'), q = a('RiBT'), Q = a('ASIK'), F = a('mNb3'), J = a('qnVj'), V = a('5v1S');
    function Y(e) {
      return (Y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function W(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, o);
      }
      return a;
    }
    function K(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? W(Object(a), !0).forEach(function (t) {
          X(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : W(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function X(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function Z(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], o = !0, s = !1, n = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(o = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
        } catch (e) {
          s = !0, n = e;
        } finally {
          try {
            o || null == i.return || i.return();
          } finally {
            if (s)
              throw n;
          }
        }
        return a;
      }(e, t) || ie(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function $(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function ee(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function te(e, t) {
      return (te = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function ae(e) {
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
        var a, o = ne(e);
        if (t) {
          var s = ne(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return oe(this, a);
      };
    }
    function oe(e, t) {
      return !t || 'object' !== Y(t) && 'function' != typeof t ? se(e) : t;
    }
    function se(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function ne(e) {
      return (ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function re(e) {
      return function (e) {
        if (Array.isArray(e))
          return le(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || ie(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function ie(e, t) {
      if (e) {
        if ('string' == typeof e)
          return le(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? le(e, t) : void 0;
      }
    }
    function le(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    var ce = [].concat(re(Object.keys(G.a)), re(Object.keys(H.a)), re(Object.keys(U.a)), re(Object.keys(q.a)), re(Object.keys(Q.a))), ue = [].concat(re(Object.keys(F.a)), re(Object.keys(J.a)), re(Object.keys(V.a))), fe = {
        Toast: 0,
        Cereal: 0,
        Yogurt: 0,
        'Breakfast Combo': 0,
        'Orange Juice': 0,
        Milk: 0,
        Waffle: 0,
        Pancakes: 0,
        'French Toast': 0
      }, pe = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && te(e, t);
        }(l, e);
        var t, a, o, n, r, i = ae(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            name: '',
            foods: [],
            customers: [
              {},
              {},
              {}
            ],
            futureCustomers: [],
            foodSelected: -1,
            question: {},
            phase: 'cafe',
            correct: !0,
            reportArray: [],
            totalProfit: -1,
            day: 1,
            customersMissed: 0,
            askTour: !1,
            showTour: !1,
            goal: 0,
            gameOver: !1,
            cafeCash: 0,
            canUpgrade: !1,
            cashChange: 0,
            attackerName: '',
            attackerBlook: '',
            ability: '',
            redirect: !1
          }, t.timeouts = [], t.questions = [], t.freeQuestions = [], t.corrects = e.cafe && e.cafe.corrects ? JSON.parse(JSON.stringify(e.cafe.corrects)) : {}, t.incorrects = e.cafe && e.cafe.incorrects ? JSON.parse(JSON.stringify(e.cafe.incorrects)) : {}, t.waiting = !1, t.canGoNext = !0, t.foodServed = 0, t.foodSales = JSON.parse(JSON.stringify(fe)), t.happyCustomers = 0, t.gettingQuestion = !1, t.gameOver = !1, t.dbRefStage = {}, t.dbRefMe = {}, t.here = !0, t.onAnswer = t.onAnswer.bind(se(t)), t.getQuestion = t.getQuestion.bind(se(t)), t.newDay = t.newDay.bind(se(t)), t.newLiveCustomer = t.newLiveCustomer.bind(se(t)), t.addCustomer = t.addCustomer.bind(se(t)), t.removeCustomer = t.removeCustomer.bind(se(t)), t.answerNext = t.answerNext.bind(se(t)), t.selectFood = t.selectFood.bind(se(t)), t.selectCustomer = t.selectCustomer.bind(se(t)), t.answerTour = t.answerTour.bind(se(t)), t.canUpgrade = t.canUpgrade.bind(se(t)), t.goToShop = t.goToShop.bind(se(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (n = regeneratorRuntime.mark(function e() {
              var t = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if (e.sent || this.setState({ notLoggedIn: !0 }), this.props.cafe && 'cafe' === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                      e.next = 7;
                      break;
                    }
                    return this.setState({ redirect: !0 }), e.abrupt('return');
                  case 7:
                    if (Object(z.c)(), this.questions = this.props.cafe.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.cafe.freeQuestions)), this.props.cafe.isHappy && (this.happyCustomers = 5), this.setState({
                        foods: Object.entries(this.props.cafe.foods).map(function (e) {
                          var a = Z(e, 2), o = a[0];
                          return {
                            name: o,
                            level: a[1],
                            stock: t.props.cafe.foodStocks && t.props.cafe.foodStocks[o] ? t.props.cafe.foodStocks[o] : 0
                          };
                        }),
                        name: this.props.client ? this.props.client.name : '',
                        cafeCash: this.props.cafe.cafeCash,
                        day: this.props.cafe.day,
                        askTour: 1 === this.props.cafe.day && 0 === this.props.cafe.foods.Cereal,
                        goal: 1 === this.props.cafe.day && (this.props.cafe.hwGoal || this.props.cafe.goal) || 0,
                        mode: this.props.cafe.mode,
                        customers: this.props.cafe.customers && 3 === this.props.cafe.customers.length ? this.props.cafe.customers : [
                          {},
                          {},
                          {}
                        ]
                      }, function () {
                        if (!t.state.askTour && !t.state.goal)
                          if (t.state.mode) {
                            t.canUpgrade();
                            for (var e = 0; e < 3 - t.state.customers.filter(function (e) {
                                return e.profit;
                              }).length; e++)
                              t.newLiveCustomer();
                          } else
                            t.newDay();
                      }), document.onkeypress = function (e) {
                        var a = e || window.event;
                        if (32 === a.keyCode || 'Space' === a.code) {
                          if (t.state.totalProfit >= 0)
                            return;
                          'cafe' === t.state.phase ? (t.getQuestion(), t.setState({ foodSelected: -1 })) : 'feedback' === t.state.phase && t.canGoNext && t.answerNext();
                        }
                      }, !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                      e.next = 22;
                      break;
                    }
                    return e.next = 16, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                  case 16:
                    return this.dbRefStage = e.sent, this.dbRefStage.on('value', function (e) {
                      switch (e.val()) {
                      case 'fin':
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, 'st', function (e) {
                          var a = e ? e.map(function (e) {
                            return {
                              name: e.n,
                              blook: e.b,
                              cash: e.c,
                              place: e.p
                            };
                          }).filter(function (e) {
                            return e.cash || 0 === e.cash;
                          }) : [];
                          t.props.endCafeDay(t.corrects, t.incorrects, t.state.cafeCash, t.state.day, t.props.cafe.foodServed + t.foodServed, t.freeQuestions, 'final', {}), t.props.setStanding(a), t.props.history.push('/cafe/final');
                        });
                        break;
                      case null:
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, 'stg', function (e) {
                          e || (t.props.deleteClient(), t.props.history.push('/play'));
                        });
                      }
                    }), e.next = 20, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'c/'.concat(this.props.client.name, '/at'));
                  case 20:
                    this.dbRefMe = e.sent, this.dbRefMe.on('value', function (e) {
                      if (e.val() && !t.state.ability) {
                        var a = e.val().split(':'), o = a[2], s = t.state.cafeCash, n = 0;
                        'pay' === o ? n = Math.round(0.25 * s) : 'tax' === o && (n = Math.round(-0.25 * s)), s += n, t.here && (t.setState({
                          cashChange: Math.abs(n),
                          attackerName: a[0],
                          attackerBlook: a[1],
                          ability: o,
                          cafeCash: s
                        }, function () {
                          'inspect' === o ? t.abilityTimeout = setTimeout(function () {
                            t.setState({ ability: '' });
                          }, 12000) : 'trash' === o && (t.abilityTimeout = setTimeout(function () {
                            var e = t.state.foods.map(function (e) {
                              return K(K({}, e), {}, { stock: Math.max(0, e.stock - 3) });
                            });
                            t.setState({ foods: e }, function () {
                              t.abilityTimeout = setTimeout(function () {
                                t.setState({ ability: '' });
                              }, 1050);
                            });
                          }, 1050));
                        }), t.props.firebase.setVal({
                          id: t.props.client.hostId,
                          path: 'c/'.concat(t.props.client.name),
                          val: {
                            b: t.props.client.blook,
                            ca: s
                          }
                        }));
                      }
                    });
                  case 22:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, o) {
                var s = n.apply(e, t);
                function r(e) {
                  $(s, a, o, r, i, 'next', e);
                }
                function i(e) {
                  $(s, a, o, r, i, 'throw', e);
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
              this.here = !1, Object(z.t)(), this.timeouts.forEach(function (e) {
                clearTimeout(e);
              }), clearTimeout(this.abilityTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.doneTimeout), clearTimeout(this.customerTimeout), document.onkeypress = function () {
              }, Object.keys(this.dbRefStage).length && this.dbRefStage.off('value'), Object.keys(this.dbRefMe).length && this.dbRefMe.off('value');
            }
          },
          {
            key: 'onAnswer',
            value: function (e) {
              var t = this;
              if (!this.waiting) {
                this.waiting = !0;
                var a = this.state.question.correctAnswers.includes(e), o = this.state.question.number;
                a ? this.corrects[o] ? this.corrects[o] += 1 : this.corrects[o] = 1 : this.incorrects[o] ? this.incorrects[o] += 1 : this.incorrects[o] = 1, this.canGoNext = !1, this.here && this.setState({
                  correct: a,
                  phase: 'feedback'
                }, function () {
                  t.state.correct ? t.canGoNext = !0 : t.nextTimeout = setTimeout(function () {
                    t.canGoNext = !0;
                  }, 3000);
                });
              }
            }
          },
          {
            key: 'getQuestion',
            value: function () {
              var e = this;
              if (!this.state.showTour && this.here && !this.gettingQuestion) {
                this.gettingQuestion = !0, 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                var t = Object(z.o)(this.freeQuestions);
                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(z.w)(t.answers)), this.here && this.setState({
                  question: t,
                  phase: 'question'
                }, function () {
                  e.waiting = !0, e.waitTimeout = setTimeout(function () {
                    e.waiting = !1, e.gettingQuestion = !1;
                  }, 400);
                });
              }
            }
          },
          {
            key: 'newDay',
            value: function () {
              var e = this, t = this.state.foods.filter(function (e) {
                  return e.level > 0;
                }).map(function (e) {
                  return e.name;
                }), a = Math.round(10 * (1 - Math.exp(-0.06 * (this.state.day - 1)))) + 5, o = 0;
              this.questions.forEach(function (e) {
                o += e.timeLimit;
              });
              for (var s = Math.min(o / this.questions.length / 1.5, 12), n = [], r = 0; r < a; r++) {
                for (var i = Math.random() > 0.9, l = Object(z.o)([
                      1,
                      2,
                      2,
                      3,
                      3,
                      3
                    ]), c = 0, u = {}, f = 0; f < l; f++) {
                  var p = Object(z.q)(1, Math.min(0.35 * this.state.day, i ? 11 : 5) + 2);
                  u[Object(z.o)(t)] = p, c += p;
                }
                var d = 0;
                Object.entries(u).forEach(function (t) {
                  var a = Z(t, 2), o = a[0], s = a[1];
                  d += D.b[o].profits[e.props.cafe.foods[o]] * s;
                }), d *= D.b.level.multipliers[this.props.cafe.items.level - 1], d = Math.round(1.75 * d), n.push({
                  blook: i ? Object(z.o)(ue) : Object(z.o)(ce),
                  time: 1000 * (37 * Math.exp(-0.05 * this.state.day) + 1.3 * c + (this.state.day < 15 ? s + 6 : 5)) + 1000 * D.b.time.times[this.props.cafe.items.level - 1],
                  enterDelay: 1000 * (7 * Math.random() * Math.exp(-0.035 * this.state.day) + 1.5),
                  constantOrder: u,
                  order: u,
                  profit: d
                });
              }
              this.here && this.setState({
                futureCustomers: n,
                showTour: !1
              }, function () {
                e.customerTimeout = setTimeout(function () {
                  var t = [
                    {},
                    {},
                    {}
                  ];
                  t[Object(z.q)(0, 3)] = n[0], n.splice(0, 1), e.setState({
                    customers: t,
                    futureCustomers: n
                  }, function () {
                    for (var t = 0; t < 2; t++)
                      e.addCustomer(n[0].enterDelay * (1 + t));
                  });
                }, 3000);
              });
            }
          },
          {
            key: 'newLiveCustomer',
            value: function () {
              for (var e = this, t = this.state.foods.filter(function (e) {
                    return e.level > 0;
                  }).map(function (e) {
                    return e.name;
                  }), a = Math.random() > 0.9, o = Object(z.o)([
                    1,
                    2,
                    2,
                    3,
                    3,
                    3
                  ]), s = {}, n = 0; n < o; n++) {
                var r = Object(z.q)(1, Math.min(0.03 * (this.foodServed + this.props.cafe.foodServed), a ? 9 : 5) + 2);
                s[Object(z.o)(t)] = r;
              }
              var i = 0;
              Object.entries(s).forEach(function (t) {
                var a = Z(t, 2), o = a[0], s = a[1];
                i += D.b[o].profits[e.props.cafe.foods[o]] * s;
              }), i *= D.b.level.multipliers[this.props.cafe.items.level - 1], i = Math.round(3.25 * i), this.happyCustomers > 0 && (i = Math.round(2 * i), this.happyCustomers -= 1);
              var l = {
                blook: a ? Object(z.o)(ue) : Object(z.o)(ce),
                time: -1,
                enterDelay: 5 * Math.random() * 1000,
                constantOrder: s,
                order: s,
                profit: i
              };
              this.addCustomer(l.enterDelay, l);
            }
          },
          {
            key: 'addCustomer',
            value: function (e, t) {
              var a = this;
              -1 !== e && this.timeouts.push(setTimeout(function () {
                var e = JSON.parse(JSON.stringify(a.state.customers)), o = JSON.parse(JSON.stringify(a.state.futureCustomers)), s = function (e) {
                    for (var t = 0; t < e.length; t++)
                      if (!e[t].blook)
                        return t;
                    return -1;
                  }(e);
                -1 !== s && o.length > 0 ? e[s] = o.splice(0, 1)[0] : t && (e[s] = t), a.here && a.setState({
                  customers: e,
                  futureCustomers: o
                });
              }, e));
            }
          },
          {
            key: 'removeCustomer',
            value: function (e, t) {
              var a = this;
              if (t && this.props.client && this.props.client.hostId && this.props.cafe.mode) {
                var o = this.state.cafeCash + this.state.customers[e].profit;
                if (this.props.firebase.setVal({
                    id: this.props.client.hostId,
                    path: 'c/'.concat(this.props.client.name),
                    val: {
                      b: this.props.client.blook,
                      ca: o
                    }
                  }), !this.here)
                  return;
                this.setState({ cafeCash: o }, this.canUpgrade);
              }
              this.doneTimeout = setTimeout(function () {
                var o = JSON.parse(JSON.stringify(a.state.customers));
                if (0 !== o[e].time) {
                  var s = a.state.customersMissed;
                  t ? Object.entries(o[e].constantOrder).forEach(function (e) {
                    var t = Z(e, 2), o = t[0], s = t[1];
                    a.foodSales[o] += s;
                  }) : s += 1, o[e] = {}, a.here && a.setState({
                    customers: o,
                    customersMissed: s
                  }, function () {
                    if (s >= 3) {
                      if (a.gameOver = !0, !a.here)
                        return;
                      a.setState({ gameOver: !0 }, function () {
                        a.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/cafes/save', {
                          id: a.props.cafe.cafeId,
                          corrects: a.corrects,
                          incorrects: a.incorrects,
                          cafeCash: a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0),
                          foodServed: a.props.cafe.foodServed + a.foodServed,
                          day: a.state.day,
                          stage: 'final'
                        }).then(function () {
                          a.exitTimeout = setTimeout(function () {
                            a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, 'final', {}), a.props.history.push('/cafe/final');
                          }, 5000);
                        }).catch(function (e) {
                          console.error(e), a.props.history.push('/login');
                        })) : a.exitTimeout = setTimeout(function () {
                          a.props.endCafeDay(a.corrects, a.incorrects, a.props.cafe.cafeCash + Math.max(a.state.totalProfit, 0), a.state.day, a.props.cafe.foodServed + a.foodServed, a.freeQuestions, 'final', {}), a.props.history.push('/cafe/final');
                        }, 5000);
                      });
                    } else if (a.props.cafe.mode)
                      a.newLiveCustomer();
                    else if (0 === a.state.customers.filter(function (e) {
                        return e.blook;
                      }).length && 0 === a.state.futureCustomers.length) {
                      var e = [], t = 0, o = D.b.level.multipliers[a.props.cafe.items.level - 1];
                      if (Object.entries(a.foodSales).forEach(function (s) {
                          var n = Z(s, 2), r = n[0], i = n[1];
                          if (!(i <= 0)) {
                            var l = Math.round(i * D.b[r].profits[a.props.cafe.foods[r]] * o * 1.75);
                            t += l, e.push({
                              name: r,
                              amount: i,
                              profit: l
                            });
                          }
                        }), a.gameOver || !a.here)
                        return;
                      a.setState({
                        reportArray: e,
                        totalProfit: t
                      });
                    } else
                      a.addCustomer(a.state.futureCustomers[0] ? a.state.futureCustomers[0].enterDelay : -1);
                  });
                } else {
                  if (Object.entries(o[e].constantOrder).forEach(function (e) {
                      var t = Z(e, 2), o = t[0], s = t[1];
                      a.foodSales[o] += s;
                    }), o[e] = {}, !a.here)
                    return;
                  a.setState({ customers: o });
                }
              }, 2200);
            }
          },
          {
            key: 'answerNext',
            value: function () {
              if (this.canGoNext) {
                var e = JSON.parse(JSON.stringify(this.state.foods));
                this.state.correct && e.forEach(function (t, a) {
                  t.level > 0 && (e[a].stock = Math.min(e[a].stock + 1, 99));
                }), this.setState({
                  phase: 'cafe',
                  foods: e
                });
              }
            }
          },
          {
            key: 'selectFood',
            value: function (e) {
              this.state.foods[e].stock <= 0 || this.setState({ foodSelected: e === this.state.foodSelected ? -1 : e });
            }
          },
          {
            key: 'selectCustomer',
            value: function (e) {
              var t = this.state.customers[e] ? this.state.customers[e].order : null;
              if (t) {
                var a = this.state.foods[this.state.foodSelected];
                if (a.stock > 0 && t[a.name] > 0) {
                  var o = JSON.parse(JSON.stringify(this.state.customers)), s = Math.min(o[e].order[a.name], a.stock);
                  o[e].order[a.name] -= s;
                  var n = JSON.parse(JSON.stringify(this.state.foods));
                  n[this.state.foodSelected].stock -= s, this.foodServed += s, this.setState({
                    customers: o,
                    foods: n,
                    foodSelected: -1
                  });
                } else
                  this.setState({ foodSelected: -1 });
              } else
                this.setState({ foodSelected: -1 });
            }
          },
          {
            key: 'answerTour',
            value: function (e) {
              var t = this;
              if (this.here)
                if (e) {
                  var a = { Toast: 2 }, o = [
                      {
                        blook: Object(z.o)(ce),
                        time: 0,
                        enterDelay: 0,
                        constantOrder: a,
                        order: a,
                        profit: this.props.cafe.mode ? 7 : 2
                      },
                      {},
                      {}
                    ];
                  this.setState({
                    customers: o,
                    askTour: !1,
                    showTour: !0
                  });
                } else
                  this.setState({
                    askTour: !1,
                    showTour: !1
                  }, function () {
                    if (!t.state.goal)
                      if (t.props.cafe.mode) {
                        t.canUpgrade();
                        for (var e = 0; e < 3 - t.state.customers.filter(function (e) {
                            return e.profit;
                          }).length; e++)
                          t.newLiveCustomer();
                      } else
                        t.newDay();
                  });
            }
          },
          {
            key: 'canUpgrade',
            value: function () {
              for (var e = !1, t = Object.entries(this.props.cafe.foods), a = 0; a < Object.keys(this.props.cafe.foods).length; a++)
                if (D.b[t[a][0]].prices[t[a][1]] <= this.state.cafeCash) {
                  e = !0;
                  break;
                }
              if (!e)
                for (var o = Object.entries(this.props.cafe.items), s = 0; s < Object.keys(this.props.cafe.items).length; s++)
                  if (D.b[o[s][0]].prices[o[s][1]] <= this.state.cafeCash) {
                    e = !0;
                    break;
                  }
              this.here && this.setState({ canUpgrade: e });
            }
          },
          {
            key: 'goToShop',
            value: function () {
              var e = this;
              if (!this.gameOver) {
                var t = {};
                this.state.foods.forEach(function (e) {
                  t[e.name] = e.stock;
                }), this.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/cafes/save', {
                  id: this.props.cafe.cafeId,
                  corrects: this.corrects,
                  incorrects: this.incorrects,
                  cafeCash: this.props.cafe.cafeCash + this.state.totalProfit,
                  foodServed: this.props.cafe.foodServed + this.foodServed,
                  day: this.state.day + 1,
                  stage: 'shop',
                  foodStocks: t
                }).then(function () {
                  e.props.endCafeDay(e.corrects, e.incorrects, e.props.cafe.cafeCash + e.state.totalProfit, e.state.day + 1, e.props.cafe.foodServed + e.foodServed, e.freeQuestions, 'shop', t), e.props.history.push('/cafe/shop');
                }).catch(function (t) {
                  console.error(t), e.props.history.push('/login');
                })) : this.props.cafe.mode ? (this.props.endCafeLive(this.corrects, this.incorrects, this.state.cafeCash, this.state.showTour ? 1 : this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, 'shop', t, this.state.customers.map(function (e) {
                  return e.order && 0 === Object.values(e.order).filter(function (e) {
                    return e;
                  }).length ? {} : e;
                })), this.props.history.push('/cafe/shop')) : (this.props.endCafeDay(this.corrects, this.incorrects, this.props.cafe.cafeCash + this.state.totalProfit, this.state.day + 1, this.props.cafe.foodServed + this.foodServed, this.freeQuestions, 'shop', t), this.props.history.push('/cafe/shop'));
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.cafe && this.props.cafe.questions && this.props.cafe.questions[0] && !this.state.redirect ? s.a.createElement('div', {
                className: f.isMobile ? y.a.mBody : y.a.body,
                id: 'body'
              }, s.a.createElement(w.a, {
                title: 'Play Café | Blooket',
                desc: 'Serve delicious food to Blooks by answering questions, and make money to upgrade your Café.'
              }), s.a.createElement(v.a, {
                cash: this.state.mode ? this.state.cafeCash : null,
                customers: this.state.mode ? null : this.state.futureCustomers.length,
                name: this.state.name,
                color: Object(B.d)(this.props.cafe.items.level)
              }), s.a.createElement('div', {
                className: y.a.regularBody,
                id: 'regularBody'
              }, this.state.showTour ? s.a.createElement(S.a, {
                steps: this.props.cafe.mode ? E.b : E.c,
                onExit: this.props.cafe.goal ? function () {
                } : this.state.goal ? function () {
                  return e.answerTour(!1);
                } : this.newDay,
                functions: [
                  this.answerNext,
                  this.goToShop
                ]
              }) : null, s.a.createElement(B.a, { level: this.props.cafe.items.level }), s.a.createElement('div', { className: g.a.counterBelow }), s.a.createElement('div', {
                className: g.a.counterBottom,
                style: { backgroundColor: Object(B.b)(this.props.cafe.items.level) }
              }), s.a.createElement('div', {
                className: g.a.counterTop,
                style: { backgroundColor: Object(B.c)(this.props.cafe.items.level) }
              }), this.state.foods.map(function (t, a) {
                return s.a.createElement('div', {
                  className: d()(g.a.plate, g.a['plate'.concat(a + 1)], X({}, g.a.plateHover, t.stock > 0), X({}, g.a.plateSelected, e.state.foodSelected === a && t.stock > 0), X({}, g.a.plateColor4, 4 === t.level), X({}, g.a.plateColor5, 5 === t.level)),
                  key: t.name,
                  style: { cursor: t.stock > 0 ? 'pointer' : 'auto' },
                  id: 'plate'.concat(a + 1),
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.selectFood(a);
                  }
                }, t.level > 1 ? s.a.createElement('div', { className: g.a['plateLevel'.concat(t.level)] }) : null, t.stock > 0 ? s.a.createElement(R.a, {
                  name: t.name,
                  className: g.a.food
                }) : null, 0 === t.level ? s.a.createElement('div', { className: g.a.lockedPlate }, s.a.createElement('i', { className: 'fas fa-lock' })) : s.a.createElement('div', { className: g.a.foodStock }, t.stock));
              }), this.state.customers.map(function (t, a) {
                return t && t.blook ? s.a.createElement(P.a, {
                  blook: t.blook,
                  place: a,
                  key: a,
                  order: t.order,
                  profit: t.profit,
                  canClick: -1 !== e.state.foodSelected && Object.entries(t.order).filter(function (e) {
                    return Z(e, 2)[1] > 0;
                  }).map(function (e) {
                    return e[0];
                  }).includes(e.state.foods[e.state.foodSelected].name),
                  onClick: function () {
                    return e.selectCustomer(a);
                  },
                  time: t.time,
                  onDone: function (t) {
                    return e.removeCustomer(a, t);
                  }
                }) : null;
              }), s.a.createElement('div', {
                className: this.state.mode ? g.a.restockButtonLive : g.a.restockButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.getQuestion,
                id: 'restock'
              }, 'Restock Food', f.isMobile ? null : s.a.createElement('div', { className: g.a.restockKey }, 'Space')), 'trash' === this.state.ability ? s.a.createElement(R.a, {
                name: this.state.attackerBlook,
                className: g.a.trashBlook
              }) : null, this.state.mode ? s.a.createElement('div', {
                className: g.a.restockButtonLive,
                role: 'button',
                tabIndex: 0,
                onClick: this.goToShop,
                id: 'upgrade',
                style: {
                  backgroundColor: '#ff7b24',
                  left: '52.5%',
                  opacity: this.state.canUpgrade ? 1 : 0.5
                }
              }, 'Upgrade Shop', this.state.canUpgrade ? s.a.createElement('div', { className: g.a.upgradeIcon }, '!') : null) : null, s.a.createElement('div', { className: g.a.missesContainer }, s.a.createElement('i', {
                className: d()('fas fa-times', g.a.miss),
                style: { opacity: this.state.customersMissed > 0 ? 1 : 0 }
              }), s.a.createElement('i', {
                className: d()('fas fa-times', g.a.miss),
                style: { opacity: this.state.customersMissed > 1 ? 1 : 0 }
              }), s.a.createElement('i', {
                className: d()('fas fa-times', g.a.miss),
                style: { opacity: this.state.customersMissed > 2 ? 1 : 0 }
              }))), 'question' === this.state.phase ? s.a.createElement('div', { className: g.a.questionContainer }, s.a.createElement(C.a, {
                onAnswer: this.onAnswer,
                text: this.state.question.text,
                answers: this.state.question.answers,
                image: this.state.question.image
              })) : 'feedback' === this.state.phase ? s.a.createElement('div', { className: g.a.feedbackContainer }, s.a.createElement(x.a, {
                incorrectTime: 3,
                correctAnswers: this.state.question.correctAnswers,
                correct: this.state.correct,
                onNext: this.answerNext
              })) : null, this.state.totalProfit >= 0 ? s.a.createElement('div', { className: d()(y.a.modal, g.a.modalFadeIn) }, s.a.createElement('div', { className: g.a.reportContainer }, s.a.createElement('div', { className: g.a.reportHeader }, 'Day '.concat(this.state.day)), this.state.reportArray.map(function (e, t) {
                return s.a.createElement('div', {
                  className: g.a.reportRow,
                  key: e.name,
                  style: {
                    backgroundColor: t % 2 == 0 ? '#e6e6e6' : '#f2f2f2',
                    borderTopLeftRadius: 0 === t ? 5 : 0,
                    borderTopRightRadius: 0 === t ? 5 : 0
                  }
                }, s.a.createElement(R.a, {
                  name: e.name,
                  className: g.a.reportFood
                }), s.a.createElement('i', { className: d()('fas fa-times', g.a.reportTimes) }), s.a.createElement('div', { className: g.a.reportAmount }, ''.concat(e.amount, ' sold')), s.a.createElement('div', { className: g.a.reportProfit }, '$'.concat(Object(z.v)(e.profit))));
              }), s.a.createElement('div', {
                style: {
                  backgroundColor: '#c43a35',
                  width: '90%',
                  height: 3
                }
              }), s.a.createElement('div', {
                className: g.a.reportRow,
                style: {
                  backgroundColor: this.state.reportArray.length % 2 == 0 ? '#e6e6e6' : '#f2f2f2',
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5
                }
              }, s.a.createElement('div', { className: g.a.reportAmount }, 'Total Profit:'), s.a.createElement('div', { className: g.a.reportProfit }, '+ $'.concat(Object(z.n)(this.state.totalProfit)))), s.a.createElement('div', {
                className: g.a.reportShopButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.goToShop
              }, 'To Upgrade Shop'), s.a.createElement('div', { style: { height: 30 } })), s.a.createElement('div', { style: { height: 50 } })) : null, this.state.askTour ? s.a.createElement(k.a, {
                text: 'Would you like a quick tutorial?',
                buttonOne: {
                  text: 'Yes',
                  click: function () {
                    return e.answerTour(!0);
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return e.answerTour(!1);
                  },
                  color: 'blue'
                }
              }) : this.state.goal && !this.state.showTour ? s.a.createElement(k.a, {
                text: this.state.mode ? 'Time' === this.state.mode ? 'Make as much money as you can in '.concat(this.state.goal, ' ').concat(1 === parseInt(this.state.goal, 10) ? 'minute' : 'minutes', '!') : 'Be the first to make $'.concat(Object(z.n)(this.state.goal), '!') : 'Your goal for this homework is to keep your Café open for '.concat(this.state.goal, ' ').concat(1 === this.state.goal ? 'Day' : 'Days', '!'),
                buttonOne: {
                  text: 'Cool',
                  click: function () {
                    return e.setState({ goal: 0 }, function () {
                      return e.answerTour(!1);
                    });
                  },
                  color: 'blue'
                }
              }) : 'pay' === this.state.ability || 'tax' === this.state.ability ? s.a.createElement(k.a, {
                text: 'pay' === this.state.ability ? ''.concat(this.state.attackerName, ' just gave you a $').concat(Object(z.n)(this.state.cashChange), ' paycheck bonus!') : ''.concat(this.state.attackerName, ' just forced you to pay $').concat(Object(z.n)(this.state.cashChange), ' in taxes.'),
                blook: this.state.attackerBlook,
                buttonOne: {
                  text: 'OK',
                  click: function () {
                    return e.setState({ ability: '' });
                  },
                  color: 'blue'
                }
              }) : null, 'inspect' === this.state.ability ? s.a.createElement(A.a, {
                name: this.state.attackerName,
                blook: this.state.attackerBlook
              }) : null, this.state.gameOver ? s.a.createElement('div', { className: d()(y.a.modal, g.a.modalFadeIn) }, s.a.createElement('div', { className: g.a.gameOverContainer }, s.a.createElement('div', { className: g.a.gameOverText }, 'Game Over'), s.a.createElement('div', { className: g.a.gameOverTextSmall }, 'You failed to serve 3 customers today'))) : null) : s.a.createElement(c.a, { to: '/login' });
            }
          }
        ]) && ee(t.prototype, a), o && ee(t, o), l;
      }(s.a.Component);
    pe.propTypes = {
      client: l.a.object,
      cafe: l.a.object,
      history: l.a.object.isRequired,
      endCafeDay: l.a.func.isRequired,
      endCafeLive: l.a.func.isRequired,
      setStanding: l.a.func.isRequired,
      deleteClient: l.a.func.isRequired,
      firebase: l.a.object,
      user: l.a.object
    };
    t.a = Object(L.c)(Object(u.a)(Object(r.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client,
        cafe: e.cafes.cafe
      };
    }, function (e) {
      return Object(n.b)({
        endCafeDay: T,
        endCafeLive: I,
        setStanding: N.b,
        deleteClient: j.a
      }, e);
    })(Object(M.d)(pe))));
  },
  FHWu: function (e, t, a) {
    'use strict';
    a.d(t, 'c', function () {
      return H;
    }), a.d(t, 'b', function () {
      return q;
    });
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), f = a('vDqi'), p = a.n(f), d = a('b6Qr'), m = a('TSYQ'), h = a.n(m), _ = a('dgWh'), y = a('epYD'), b = a('XuX+'), g = a('GIcp'), v = a.n(g), w = a('k7NU'), C = a.n(w), x = a('2g2H'), k = a('iQ+n'), S = a('anyA'), E = a('SCqF'), O = a('ZENw'), T = a('bpVs'), I = a('Bz36'), N = a('G/Pl'), j = a('TN+F');
    function P(e) {
      return (P = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function B(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function A(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (o, s) {
          var n = e.apply(t, a);
          function r(e) {
            B(n, o, s, r, i, 'next', e);
          }
          function i(e) {
            B(n, o, s, r, i, 'throw', e);
          }
          r(void 0);
        });
      };
    }
    function R(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function D(e, t) {
      return (D = Object.setPrototypeOf || function (e, t) {
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
        var a, o = G(e);
        if (t) {
          var s = G(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return M(this, a);
      };
    }
    function M(e, t) {
      return !t || 'object' !== P(t) && 'function' != typeof t ? L(e) : t;
    }
    function L(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function G(e) {
      return (G = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var H = {
        Toast: 1,
        Cereal: 0,
        Yogurt: 0,
        'Breakfast Combo': 0,
        'Orange Juice': 0,
        Milk: 0,
        Waffle: 0,
        Pancakes: 0,
        'French Toast': 0
      }, U = {
        level: 1,
        time: 1
      }, q = {
        inspect: 1,
        crate: 1,
        pay: 1,
        tax: 1,
        trash: 1,
        happy: 1,
        back: 1
      }, Q = function (e) {
        return s.a.createElement('div', { className: C.a.stageText }, 'Day '.concat(e.day));
      }, F = function (e) {
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
        }(i, e);
        var t, a, o, n, r = z(i);
        function i(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, i), (t = r.call(this, e)).state = {
            questions: [],
            ready: !1,
            isSave: !1,
            warn: !1,
            loggedIn: !1,
            savesPhase: !1,
            savesArray: [],
            loading: !1,
            replaceIndex: 0,
            name: '',
            nameUsed: '',
            numCorrect: 0,
            numQuestions: 0,
            day: 0,
            foodServed: 0,
            cafeCash: 0,
            message: '',
            showFinal: !1,
            standings: [],
            noId: !1,
            noIdPopUp: !1,
            noQuestions: !1
          }, t.redirect = !1, t.name = '', t.stripe = '', t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(L(t)), t.newGame = t.newGame.bind(L(t)), t.endGame = t.endGame.bind(L(t)), t.renderStats = t.renderStats.bind(L(t)), t;
        }
        return t = i, (a = [
          {
            key: 'componentDidMount',
            value: (n = A(regeneratorRuntime.mark(function e() {
              var t, a = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return this.props.deleteCafe(), e.next = 3, this.props.user.getData();
                  case 3:
                    (t = e.sent) ? (this.name = t.name, this.stripe = t.stripe, this.setState({ loggedIn: !0 }), p.a.get('/api/cafes/byuser', { params: { name: this.name } }).then(function (e) {
                      a.here && a.setState({
                        isSave: e.data.success && !(a.props.client && a.props.client.hwId && a.props.client.questions),
                        savesArray: e.data.success ? e.data.savesArray : [
                          null,
                          null,
                          null
                        ]
                      }, function () {
                        a.working = !1;
                      });
                    }).catch(function (e) {
                      console.error(e);
                    })) : this.setState({ notLoggedIn: !0 }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                      questions: this.props.client.questions || [],
                      ready: !0
                    })) : this.props.id ? p.a.get('/api/games', { params: { gameId: this.props.id } }).then(function (e) {
                      a.here && a.setState({
                        questions: e.data.questions.map(function (e) {
                          return {
                            text: e.question,
                            answers: e.answers,
                            correctAnswers: e.correctAnswers,
                            number: e.number,
                            random: e.random,
                            timeLimit: e.timeLimit,
                            image: e.image ? e.image.url : null
                          };
                        }),
                        ready: !0
                      });
                    }).catch(function (e) {
                      console.error(e);
                    }) : this.setState({
                      noId: !0,
                      ready: !0
                    });
                  case 6:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function () {
              return n.apply(this, arguments);
            })
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.here = !1;
            }
          },
          {
            key: 'loadGame',
            value: function (e) {
              if (this.state.ready && !this.working) {
                this.working = !0;
                var t = this.state.savesArray[e], a = [], o = !1, s = this;
                !function () {
                  n.apply(this, arguments);
                }();
              }
              function n() {
                return (n = A(regeneratorRuntime.mark(function e() {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch (e.prev = e.next) {
                      case 0:
                        if (!t.setId) {
                          e.next = 9;
                          break;
                        }
                        if (!s.state.noId) {
                          e.next = 6;
                          break;
                        }
                        return e.next = 4, new Promise(function (e) {
                          p.a.get('/api/games', { params: { gameId: t.setId } }).then(function (t) {
                            t.data ? a = t.data.questions.map(function (e) {
                              return {
                                text: e.question,
                                answers: e.answers,
                                correctAnswers: e.correctAnswers,
                                number: e.number,
                                random: e.random,
                                timeLimit: e.timeLimit,
                                image: e.image ? e.image.url : null
                              };
                            }) : o = !0, e();
                          }).catch(function (e) {
                            console.error(e);
                          });
                        });
                      case 4:
                        e.next = 7;
                        break;
                      case 6:
                        a = s.state.questions;
                      case 7:
                        e.next = 11;
                        break;
                      case 9:
                        return e.next = 11, new Promise(function (e) {
                          p.a.get('/api/homeworks/byid', { params: { id: t.hwId } }).then(function (t) {
                            t.data ? a = t.data.questions : s.state.noId ? o = !0 : a = s.state.questions, e();
                          }).catch(function (e) {
                            console.error(e);
                          });
                        });
                      case 11:
                        if (!o) {
                          e.next = 15;
                          break;
                        }
                        return s.setState({
                          noIdPopUp: !0,
                          noQuestions: !0
                        }), s.working = !1, e.abrupt('return');
                      case 15:
                        t.hwName && (s.props.addClientName(t.hwName), s.props.addHwClient(t.hwId, 'Cafe', 0, t.hwPlus)), s.props.setupCafe(t._id, t.setId, t.resultId, t.hwId, t.hwGoal, a, t.cafeCash, t.day, t.foods, t.items, t.corrects, t.incorrects, t.foodServed, t.stage, t.foodStocks), 'cafe' === t.stage ? s.props.history.push('/cafe') : 'shop' === t.stage ? s.props.history.push('/cafe/shop') : s.props.history.push('/cafe/final');
                      case 18:
                      case 'end':
                        return e.stop();
                      }
                  }, e);
                }))).apply(this, arguments);
              }
            }
          },
          {
            key: 'newGame',
            value: function (e) {
              if (this.state.ready && !this.working) {
                this.working = !0;
                var t = this;
                !function () {
                  a.apply(this, arguments);
                }();
              }
              function a() {
                return (a = A(regeneratorRuntime.mark(function a() {
                  var o, s;
                  return regeneratorRuntime.wrap(function (a) {
                    for (;;)
                      switch (a.prev = a.next) {
                      case 0:
                        if (o = '', !t.props.client || !t.props.client.hwId) {
                          a.next = 4;
                          break;
                        }
                        return a.next = 4, new Promise(function (e, a) {
                          p.a.post('/api/results', {
                            hwId: t.props.client.hwId,
                            name: t.props.client.name,
                            data: {
                              corrects: {},
                              incorrects: {},
                              day: 1,
                              alive: !0
                            }
                          }).then(function (t) {
                            o = t.data._id, e();
                          }).catch(function (e) {
                            console.error(e), a();
                          });
                        });
                      case 4:
                        if (s = {}, !t.name) {
                          a.next = 9;
                          break;
                        }
                        return a.next = 8, new Promise(function (a, s) {
                          p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/cafes', {
                            setId: t.props.id,
                            name: t.name,
                            hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                            hwName: t.props.client && t.props.client.name ? t.props.client.name : null,
                            hwPlus: !(!t.props.client || !t.props.client.plus) && t.props.client.plus,
                            hwGoal: !(!t.props.client || !t.props.client.amount) && t.props.client.amount,
                            saveIndex: e,
                            foods: JSON.parse(JSON.stringify(H)),
                            items: JSON.parse(JSON.stringify(U)),
                            resultId: o
                          }).then(function (e) {
                            localStorage.setItem('token', e.data.token), a(e.data);
                          }).catch(function (e) {
                            console.error(e), s();
                          });
                        });
                      case 8:
                        s = a.sent;
                      case 9:
                        t.props.setupCafe(s.newSaveId, t.props.id, o, t.props.client && t.props.client.hwId ? t.props.client.hwId : null, t.props.client && t.props.client.amount ? t.props.client.amount : null, t.state.questions, 0, 1, JSON.parse(JSON.stringify(H)), JSON.parse(JSON.stringify(U)), {}, {}, 0, 'cafe', {}), s.oldSave && s.oldSave.stage ? t.endGame(s.oldSave) : t.props.history.push('/cafe');
                      case 11:
                      case 'end':
                        return a.stop();
                      }
                  }, a);
                }))).apply(this, arguments);
              }
            }
          },
          {
            key: 'endGame',
            value: function (e) {
              var t = this;
              p.a.put('/api/users/plan', {
                name: this.name,
                stripeId: this.stripe
              }).then(function (e) {
                t.here && t.setState({
                  showFinal: !0,
                  plus: 'Starter' !== e.data.plan
                });
              }).catch(function (e) {
                console.error(e);
              });
              var a = e.hwName || 'You', o = 0, s = 0;
              Object.values(e.corrects).forEach(function (e) {
                o += e, s += e;
              }), Object.values(e.incorrects).forEach(function (e) {
                s += e;
              });
              var n = 6 - e.items.level, r = Object(j.o)(Object.keys(N.a));
              p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/cafestats/solo', {
                name: this.name,
                place: n,
                day: e.day,
                cafeCash: e.cafeCash,
                foodServed: e.foodServed,
                blookUsed: r,
                nameUsed: a,
                correctAnswers: o
              }).catch(function (e) {
                console.error(e);
              }), this.setState({
                warn: !1,
                name: this.name,
                nameUsed: a,
                numCorrect: o,
                numQuestions: s,
                day: e.day,
                cafeCash: e.cafeCash,
                foodServed: e.foodServed,
                message: Object(T.a)((n - 1) / 5),
                ready: !0,
                standings: [{
                    name: a,
                    blook: r,
                    place: n,
                    day: e.day
                  }]
              });
            }
          },
          {
            key: 'renderStats',
            value: function () {
              return s.a.createElement('div', { style: { width: '100%' } }, s.a.createElement(I.a, {
                title: 'Food Served',
                stat: Object(j.n)(this.state.foodServed)
              }), s.a.createElement(I.a, {
                title: 'Final Cash',
                stat: Object(j.n)(this.state.cafeCash)
              }));
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? s.a.createElement(u.a, { to: '/login' }) : s.a.createElement('div', { className: h()(d.isMobile ? v.a.mBody : v.a.body, C.a.background) }, s.a.createElement(k.a, {
                title: 'Load Café | Blooket',
                desc: 'Start a new game or load a saved game of Blooket\'s Café.'
              }), s.a.createElement(x.a, { noRight: !0 }), this.state.savesPhase ? s.a.createElement('div', { className: v.a.regularBody }, s.a.createElement('div', {
                className: C.a.backButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({
                    savesPhase: !1,
                    loading: !1
                  });
                }
              }, 'Back'), s.a.createElement('div', { className: C.a.saveHeaderHolder }, s.a.createElement('div', { className: C.a.savesHeader }, this.state.loading ? 'Choose a Save' : 'Choose a Save Slot')), s.a.createElement('div', { className: C.a.savesHolder }, this.state.savesArray.map(function (t, a) {
                return t ? s.a.createElement('div', {
                  className: C.a.saveContainer,
                  key: t._id
                }, s.a.createElement('div', { className: C.a.saveTitle }, 'Day '.concat(t.day)), s.a.createElement('div', { className: C.a.saveSubTitle }, 'Café Level '.concat(t.items.level)), s.a.createElement('div', { className: C.a.saveRow }, '$'.concat(Object(j.n)(t.cafeCash)), s.a.createElement('i', { className: h()(C.a.saveIcon, 'fas fa-coins') })), s.a.createElement('div', { className: C.a.saveRow }, 'shop' === t.stage ? 'Shop' : 'Café Day', s.a.createElement('i', { className: h()(C.a.saveIcon, 'fas fa-store') })), s.a.createElement('div', { className: C.a.saveRow }, t.hwName || 'Not Homework', s.a.createElement('i', { className: h()(C.a.saveIcon, 'fas fa-file-alt') })), s.a.createElement('div', {
                  className: C.a.loadButton,
                  role: 'button',
                  tabIndex: 0,
                  onClick: e.state.loading ? function () {
                    return e.loadGame(a);
                  } : e.state.noId ? function () {
                    return e.setState({ noIdPopUp: !0 });
                  } : function () {
                    return e.setState({
                      warn: !0,
                      replaceIndex: a
                    });
                  }
                }, e.state.loading ? 'Load Game' : 'Replace Game')) : s.a.createElement('div', {
                  className: C.a.saveContainer,
                  key: a
                }, s.a.createElement('div', { className: C.a.emptySave }, 'Empty'), e.state.loading ? null : s.a.createElement('div', {
                  className: C.a.loadButton,
                  role: 'button',
                  tabIndex: 0,
                  onClick: e.state.noId ? function () {
                    return e.setState({ noIdPopUp: !0 });
                  } : function () {
                    return e.newGame(a);
                  }
                }, 'New Game'));
              }))) : s.a.createElement('div', { className: v.a.regularBody }, s.a.createElement('div', { className: C.a.contentHolder }, s.a.createElement('div', { className: C.a.header }, 'Café'), s.a.createElement('div', { className: C.a.buttonContainer }, this.state.isSave ? s.a.createElement('div', {
                className: C.a.button,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.setState({
                    savesPhase: !0,
                    loading: !0
                  });
                }
              }, 'Load Game') : null, s.a.createElement('div', {
                className: C.a.button,
                role: 'button',
                tabIndex: 0,
                onClick: this.state.loggedIn ? function () {
                  return e.setState({
                    savesPhase: !0,
                    loading: !1
                  });
                } : this.newGame
              }, 'New Game'))), this.state.loggedIn ? s.a.createElement('div', { className: C.a.loginText }, 'Your progress will automatically be saved') : s.a.createElement('div', { className: C.a.loginText }, s.a.createElement('a', {
                href: 'https://www.blooket.com/login',
                target: '_blank',
                rel: 'noopener noreferrer',
                style: { color: '#fff' }
              }, 'Login'), '\xA0to save your progress')), this.state.warn ? s.a.createElement(E.a, {
                text: 'Starting a new game will delete this save! Don\'t worry though, we\'ll give you the tokens for your old save right now!',
                buttonOne: {
                  text: 'Continue',
                  click: function () {
                    return e.newGame(e.state.replaceIndex);
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'Go Back',
                  click: function () {
                    return e.setState({ warn: !1 });
                  },
                  color: 'blue'
                }
              }) : this.state.noIdPopUp ? s.a.createElement(E.a, {
                text: this.state.noQuestions ? 'This save doesn\'t have an associated question set. Go find a set, click \'Solo\', and try again!' : 'You need a question set to create a new game!',
                buttonOne: {
                  text: 'Find A Set',
                  click: function () {
                    return e.props.history.push('/discover');
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'Go Back',
                  click: function () {
                    return e.setState({
                      noIdPopUp: !1,
                      noQuestions: !1
                    });
                  },
                  color: 'blue'
                }
              }) : null, this.state.showFinal ? s.a.createElement('div', { className: v.a.modal }, s.a.createElement(O.a, {
                standings: this.state.standings,
                name: this.state.nameUsed,
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.state.name,
                plus: this.state.plus,
                myStat: 'Stayed Open for '.concat(this.state.day, ' ').concat(1 === this.state.day ? 'Day' : 'Days'),
                saveStats: this.saveStats,
                renderStandingStat: Q,
                renderStats: this.renderStats,
                customMessage: this.state.message,
                tokenMultiplier: 0.3,
                buttonFunc: function () {
                  return e.props.history.push('/cafe');
                },
                noWait: !0
              })) : null);
            }
          }
        ]) && R(t.prototype, a), o && R(t, o), i;
      }(s.a.Component);
    F.propTypes = {
      client: l.a.object,
      history: l.a.object.isRequired,
      id: l.a.string,
      deleteCafe: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(S.c)(Object(c.a)(Object(r.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client
      };
    }, function (e) {
      return Object(n.b)({
        setupCafe: _.b,
        deleteCafe: _.a,
        addClientName: b.a,
        addHwClient: y.b
      }, e);
    })(F)));
  },
  FfIY: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return o;
    }), a.d(t, 'b', function () {
      return s;
    });
    var o = 'DELETE_CAFE', s = 'SETUP_CAFE';
  },
  Fs1x: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), f = a('b6Qr'), p = a('TSYQ'), d = a.n(p), m = a('vDqi'), h = a.n(m), _ = a('GIcp'), y = a.n(_), b = a('8N3m'), g = a.n(b), v = a('2g2H'), w = a('iQ+n'), C = a('anyA'), x = a('ceum');
    function k(e, t, a, o, s, n, r) {
      return {
        type: x.a,
        foods: e,
        items: t,
        abilities: a,
        cafeCash: o,
        stage: s,
        foodStocks: n,
        isHappy: r
      };
    }
    var S = a('bMSx'), E = a('pMbe'), O = a('3RWh'), T = a('FHWu'), I = a('IAGC'), N = a('avlG'), j = a('SCqF'), P = a('DoX5'), B = a('vPiy'), A = a('7R+V'), R = a('TN+F'), D = a('SdQT');
    function z(e) {
      return (z = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
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
        var a = [], o = !0, s = !1, n = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(o = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
        } catch (e) {
          s = !0, n = e;
        } finally {
          try {
            o || null == i.return || i.return();
          } finally {
            if (s)
              throw n;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return L(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return L(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function L(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    function G(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, o);
      }
      return a;
    }
    function H(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? G(Object(a), !0).forEach(function (t) {
          U(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function U(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function q(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function Q(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function F(e, t) {
      return (F = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function J(e) {
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
        var a, o = W(e);
        if (t) {
          var s = W(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return V(this, a);
      };
    }
    function V(e, t) {
      return !t || 'object' !== z(t) && 'function' != typeof t ? Y(e) : t;
    }
    function Y(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function W(e) {
      return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var K = [
        'far fa-hourglass',
        'fas fa-hourglass-start',
        'fas fa-hourglass-half',
        'fas fa-hourglass-end',
        'fas fa-hourglass'
      ], X = function (e) {
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
        }(l, e);
        var t, a, o, n, r, i = J(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = i.call(this, e)).state = {
            cafeCash: e.cafe ? e.cafe.cafeCash : 0,
            items: {},
            abilities: {},
            ability: '',
            showPlayers: !1,
            players: [],
            ready: !1,
            goalCompleted: !1,
            showTour: !1,
            cashChange: 0,
            attackerName: '',
            attackerBlook: '',
            attackerAbility: ''
          }, t.dbRefStage = {}, t.dbRefMe = {}, t.foodStocks = {}, t.isHappy = !1, t.buyItem = t.buyItem.bind(Y(t)), t.buyAbility = t.buyAbility.bind(Y(t)), t.useAbility = t.useAbility.bind(Y(t)), t.nextDay = t.nextDay.bind(Y(t)), t.endNow = t.endNow.bind(Y(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (n = regeneratorRuntime.mark(function e() {
              var t = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if (e.sent || this.setState({ notLoggedIn: !0 }), this.props.cafe && 'shop' === this.props.cafe.stage && this.props.cafe.questions && this.props.cafe.questions[0]) {
                      e.next = 7;
                      break;
                    }
                    return this.setState({ redirect: !0 }), e.abrupt('return');
                  case 7:
                    if (Object(R.c)(), this.foodStocks = H({}, this.props.cafe.foodStocks), this.setState({
                        items: H(H({}, this.props.cafe.foods), this.props.cafe.items),
                        abilities: this.props.cafe.abilities ? H({}, this.props.cafe.abilities) : {},
                        ready: !0,
                        goalCompleted: this.props.cafe.hwGoal && this.props.cafe.day - 1 === parseInt(this.props.cafe.hwGoal, 10),
                        showTour: 1 === this.props.cafe.day
                      }), this.props.cafe && this.props.cafe.resultId && h.a.put('/api/results', {
                        id: this.props.cafe.resultId,
                        data: {
                          corrects: this.props.cafe.corrects,
                          incorrects: this.props.cafe.incorrects,
                          day: this.props.cafe.day,
                          alive: !0
                        }
                      }).catch(function (e) {
                        return console.error(e);
                      }), !(this.props.client && this.props.client.hostId && this.props.cafe.mode)) {
                      e.next = 20;
                      break;
                    }
                    return e.next = 14, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'stg');
                  case 14:
                    return this.dbRefStage = e.sent, this.dbRefStage.on('value', function (e) {
                      switch (e.val()) {
                      case 'fin':
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, 'st', function (e) {
                          var a = e ? e.map(function (e) {
                              return {
                                name: e.n,
                                blook: e.b,
                                cash: e.c,
                                place: e.p
                              };
                            }) : [], o = H({}, t.state.items), s = {
                              level: o.level,
                              time: o.time
                            };
                          delete o.level, delete o.time, t.props.leaveCafeShop(o, s, t.state.abilities, t.state.cafeCash, 'final', t.foodStocks, t.isHappy), t.props.setStanding(a), t.props.history.push('/cafe/final');
                        });
                        break;
                      case null:
                        t.props.firebase.getDatabaseVal(t.props.client.hostId, 'stg', function (e) {
                          e || (t.props.deleteClient(), t.props.history.push('/play'));
                        });
                      }
                    }), e.next = 18, this.props.firebase.getDatabaseRef(this.props.client.hostId, 'c/'.concat(this.props.client.name, '/at'));
                  case 18:
                    this.dbRefMe = e.sent, this.dbRefMe.on('value', function (e) {
                      if (e.val() && !t.state.attackerAbility) {
                        var a = e.val().split(':'), o = a[2], s = t.state.cafeCash, n = 0;
                        'pay' === o ? n = Math.round(0.25 * s) : 'tax' === o && (n = Math.round(-0.25 * s)), s += n, Object.entries(t.foodStocks).forEach(function (e) {
                          var a = M(e, 2), o = a[0], s = a[1];
                          t.foodStocks[o] = Math.max(0, s - 3);
                        }), t.setState({
                          cashChange: Math.abs(n),
                          attackerName: a[0],
                          attackerBlook: a[1],
                          attackerAbility: o,
                          cafeCash: s
                        }, function () {
                          'inspect' === o && (t.abilityTimeout = setTimeout(function () {
                            t.setState({ attackerAbility: '' });
                          }, 12000));
                        }), t.props.firebase.setVal({
                          id: t.props.client.hostId,
                          path: 'c/'.concat(t.props.client.name),
                          val: {
                            b: t.props.client.blook,
                            ca: s
                          }
                        });
                      }
                    });
                  case 20:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), r = function () {
              var e = this, t = arguments;
              return new Promise(function (a, o) {
                var s = n.apply(e, t);
                function r(e) {
                  q(s, a, o, r, i, 'next', e);
                }
                function i(e) {
                  q(s, a, o, r, i, 'throw', e);
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
              Object(R.t)(), clearTimeout(this.abilityTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off('value'), Object.keys(this.dbRefMe).length && this.dbRefMe.off('value');
            }
          },
          {
            key: 'buyItem',
            value: function (e) {
              var t = this;
              if (!this.buying) {
                this.buying = !0;
                var a = O.b[e], o = this.state.items[e], s = a.prices[o];
                if (s > this.state.cafeCash || 5 === o)
                  this.buying = !1;
                else {
                  var n = JSON.parse(JSON.stringify(this.state.items));
                  n[e] += 1;
                  var r = this.state.cafeCash - s;
                  this.props.client && this.props.client.hostId && this.props.cafe.mode && this.props.firebase.setVal({
                    id: this.props.client.hostId,
                    path: 'c/'.concat(this.props.client.name),
                    val: {
                      b: this.props.client.blook,
                      ca: r,
                      up: 'food' === O.b[e].type ? ''.concat(e, ':').concat(n[e]) : null
                    }
                  }), this.setState({
                    items: n,
                    cafeCash: this.state.cafeCash - s
                  }, function () {
                    t.buying = !1;
                  });
                }
              }
            }
          },
          {
            key: 'buyAbility',
            value: function (e) {
              var t = this;
              if (!this.buying) {
                this.buying = !0;
                var a = O.a[e], o = this.state.cafeCash, s = Math.round(a.price + o * a.percent);
                if (s > o || 0 === this.state.abilities[e])
                  this.buying = !1;
                else {
                  var n = JSON.parse(JSON.stringify(this.state.abilities));
                  n[e] = 0, o -= s, this.setState({
                    abilities: n,
                    ability: e,
                    cafeCash: o
                  }, function () {
                    t.buying = !1, [
                      'pay',
                      'trash',
                      'tax',
                      'inspect'
                    ].includes(t.state.ability) ? t.props.firebase.getDatabaseVal(t.props.client.hostId, 'c', function (e) {
                      var a = Object.entries(e).map(function (e) {
                        var t = M(e, 2), a = t[0], o = t[1];
                        return {
                          name: a,
                          blook: o.b,
                          cash: o.ca || 0
                        };
                      }).filter(function (e) {
                        return e.name !== t.props.client.name;
                      });
                      a.sort(function (e, t) {
                        return t.cash - e.cash;
                      }), t.setState({
                        players: a,
                        showPlayers: !0
                      });
                    }) : t.useAbility();
                  });
                }
              }
            }
          },
          {
            key: 'useAbility',
            value: function (e) {
              var t = this, a = H({}, this.state.abilities);
              e ? this.props.firebase.setVal({
                id: this.props.client.hostId,
                path: 'c/'.concat(this.props.client.name, '/tat'),
                val: ''.concat(e.name, ':').concat(this.state.ability)
              }) : 'back' === this.state.ability ? (a = H({}, T.b)).back = 0 : 'crate' === this.state.ability ? Object.entries(this.state.items).forEach(function (e) {
                var a = M(e, 2), o = a[0];
                a[1] > 0 && ![
                  'time',
                  'level'
                ].includes(o) && (t.foodStocks[o] ? t.foodStocks[o] = Math.min(t.foodStocks[o] + 7, 99) : t.foodStocks[o] = 7);
              }) : 'happy' === this.state.ability && (this.isHappy = !0), this.setState({
                abilities: a,
                showPlayers: !1
              });
            }
          },
          {
            key: 'nextDay',
            value: function () {
              var e = this, t = H({}, this.state.items), a = {
                  level: t.level,
                  time: t.time
                };
              delete t.level, delete t.time, this.props.cafe.cafeId ? (h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, h.a.put('/api/cafes/save', {
                id: this.props.cafe.cafeId,
                foods: t,
                items: a,
                cafeCash: this.state.cafeCash,
                stage: 'cafe'
              }).then(function () {
                e.props.leaveCafeShop(t, a, e.state.abilities, e.state.cafeCash, 'cafe', e.foodStocks, e.isHappy), e.props.history.push('/cafe');
              }).catch(function (t) {
                console.error(t), e.props.history.push('/login');
              })) : (this.props.leaveCafeShop(t, a, this.state.abilities, this.state.cafeCash, 'cafe', this.foodStocks, this.isHappy), this.props.history.push('/cafe'));
            }
          },
          {
            key: 'endNow',
            value: function () {
              this.props.leaveCafeShop(this.props.cafe.foods, this.props.cafe.items, this.props.cafe.abilities, this.props.cafe.cafeCash, 'final', this.foodStocks, this.isHappy), this.props.history.push('/cafe/final');
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return this.props.cafe && (this.props.cafe.resultId || this.props.cafe.mode) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.cafe || this.state.redirect ? s.a.createElement(u.a, { to: '/login' }) : s.a.createElement('div', {
                className: f.isMobile ? y.a.mBody : y.a.body,
                id: 'body'
              }, s.a.createElement(w.a, {
                title: 'Play Café | Blooket',
                desc: 'Serve delicious food to Blooks by answering questions, and make money to upgrade your Café.'
              }), s.a.createElement(v.a, { cash: this.state.cafeCash }), this.state.ready ? s.a.createElement('div', {
                className: y.a.regularBody,
                id: 'regularBody'
              }, this.state.showTour ? s.a.createElement(B.a, {
                steps: A.a,
                onExit: function () {
                },
                functions: [
                  function () {
                    return e.buyItem('Cereal');
                  },
                  this.nextDay
                ]
              }) : null, s.a.createElement('div', { className: g.a.header }, 'Upgrade Shop'), s.a.createElement('div', {
                className: g.a.nextDayButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.nextDay,
                id: 'shopButton'
              }, this.props.cafe.mode ? 'Back' : 'Next Day'), s.a.createElement('div', { className: g.a.shopContainer }, Object.entries(O.b).map(function (t, a) {
                var o = M(t, 2), n = o[0], r = o[1];
                return 'time' === n && e.state.items[n] || 'time' !== n ? s.a.createElement('div', {
                  className: d()(g.a.itemContainer, U({}, g.a.itemContainerHover, e.state.items[n] < 5 && e.state.cafeCash >= r.prices[e.state.items[n]])),
                  key: n,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.buyItem(n);
                  },
                  style: { cursor: e.state.items[n] < 5 && e.state.cafeCash >= r.prices[e.state.items[n]] ? 'pointer' : 'not-allowed' },
                  id: 'upgrade'.concat(a + 1)
                }, 'food' === r.type ? s.a.createElement('div', { className: d()(g.a.plate, U({}, g.a.plate4, 4 === e.state.items[n]), U({}, g.a.plate5, 5 === e.state.items[n])) }, e.state.items[n] > 1 ? s.a.createElement('div', { className: g.a['plateLevel'.concat(e.state.items[n])] }) : null, 0 === e.state.items[n] ? s.a.createElement('div', { className: g.a.lockedPlate }, s.a.createElement('i', { className: 'fas fa-lock' })) : s.a.createElement(P.a, {
                  name: n,
                  className: g.a.food
                })) : 'level' === n ? s.a.createElement('div', { className: g.a.backgroundContainer }, s.a.createElement(I.a, { level: e.state.items[n] })) : 'time' === n ? s.a.createElement('div', { className: g.a.iconContainer }, s.a.createElement('i', { className: d()(K[e.state.items[n] - 1], g.a.upgradeIcon) })) : null, s.a.createElement('div', { className: g.a.rightContainer }, s.a.createElement('div', { className: g.a.itemName }, r.name || n), s.a.createElement('div', { className: g.a.itemLevel }, 0 === e.state.items[n] ? 'Locked' : 'Level '.concat(e.state.items[n])), s.a.createElement('div', { className: g.a.itemDesc }, 'time' === n ? ''.concat(O.b[n].times[e.state.items[n] - 1], 's').concat(5 !== e.state.items[n] ? ' -> '.concat(O.b[n].times[e.state.items[n]], 's') : '', ' Bonus Time') : 'level' === n ? 'x'.concat(O.b[n].multipliers[e.state.items[n] - 1]).concat(5 !== e.state.items[n] ? ' -> x'.concat(O.b[n].multipliers[e.state.items[n]]) : '', ' Profits') : e.state.items[n] > 0 ? '$'.concat(Object(R.n)(Math.round(O.b[n].profits[e.state.items[n]] * O.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))).concat(5 !== e.state.items[n] ? ' -> $'.concat(Object(R.n)(Math.round(O.b[n].profits[e.state.items[n] + 1] * O.b.level.multipliers[e.state.items.level - 1] * (e.props.cafe.mode ? 3.25 : 1.75)))) : '', ' Per Sale') : null, s.a.createElement('br', null), 5 === e.state.items[n] ? 'Max Level' : ''), 5 !== e.state.items[n] ? s.a.createElement('div', {
                  className: g.a.itemUpgrade,
                  style: { color: e.state.cafeCash >= r.prices[e.state.items[n]] ? '#4bc22e' : '#c43a35' }
                }, '$'.concat(Object(R.n)(r.prices[e.state.items[n]]))) : null)) : null;
              })), this.props.cafe.mode && !this.state.showTour ? s.a.createElement('div', { className: g.a.abilityHeader }, 'Abilities') : null, this.props.cafe.mode && !this.state.showTour ? s.a.createElement('div', { className: g.a.shopContainer }, Object.entries(O.a).map(function (t, a) {
                var o = M(t, 2), n = o[0], r = o[1];
                return s.a.createElement('div', {
                  className: d()(g.a.itemContainer, U({}, g.a.itemContainerHover, 1 === e.state.abilities[n] && e.state.cafeCash >= Math.round(r.price + e.state.cafeCash * r.percent))),
                  key: n,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.buyAbility(n);
                  },
                  style: { cursor: 1 === e.state.abilities[n] && e.state.cafeCash >= Math.round(r.price + e.state.cafeCash * r.percent) ? 'pointer' : 'not-allowed' },
                  id: 'upgrade'.concat(a + 1)
                }, s.a.createElement('div', {
                  className: g.a.iconContainer,
                  style: { backgroundColor: r.color }
                }, s.a.createElement('i', { className: d()(r.icon, g.a.upgradeIcon) })), s.a.createElement('div', { className: g.a.rightContainer }, s.a.createElement('div', { className: g.a.itemName }, r.name), s.a.createElement('div', { className: g.a.itemLevel }, r.desc), s.a.createElement('div', {
                  className: g.a.itemUpgrade,
                  style: { color: 0 === e.state.abilities[n] ? '#3a3a3a' : e.state.cafeCash >= Math.round(r.price + e.state.cafeCash * r.percent) ? '#4bc22e' : '#c43a35' }
                }, 0 === e.state.abilities[n] ? 'Used' : '$'.concat(Object(R.n)(Math.round(r.price + e.state.cafeCash * r.percent))))));
              })) : null, this.state.showPlayers ? this.state.players.length > 0 ? s.a.createElement('div', { className: g.a.playerWrapper }, s.a.createElement('div', { className: g.a.playerHeader }, 'Choose a Player'), s.a.createElement('div', { className: g.a.playerHolder }, this.state.players.map(function (t) {
                return s.a.createElement('div', {
                  className: g.a.playerContainer,
                  key: t.name,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.useAbility(t);
                  }
                }, s.a.createElement(P.a, {
                  name: t.blook,
                  className: g.a.playerBlook
                }), s.a.createElement('div', { className: g.a.playerColumn }, s.a.createElement('div', { className: g.a.playerText }, t.name), s.a.createElement('div', { className: g.a.playerCash }, '$'.concat(Object(R.n)(t.cash)))));
              })), s.a.createElement('div', { style: { height: 30 } })) : s.a.createElement('div', { className: g.a.playerWrapper }, s.a.createElement('div', { className: g.a.playerHeader }, 'No Players to Interact With'), s.a.createElement('div', {
                className: g.a.noPlayers,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.useAbility(null);
                }
              }, 'Next')) : null, this.state.goalCompleted ? s.a.createElement(j.a, {
                text: 'You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!',
                buttonOne: {
                  text: 'Keep Playing',
                  click: function () {
                    return e.setState({ goalCompleted: !1 });
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'End Now',
                  click: this.endNow,
                  color: 'blue'
                }
              }) : [
                'pay',
                'tax',
                'trash'
              ].includes(this.state.attackerAbility) ? s.a.createElement(j.a, {
                text: 'pay' === this.state.attackerAbility ? ''.concat(this.state.attackerName, ' just gave you a $').concat(Object(R.n)(this.state.cashChange), ' paycheck bonus!') : 'tax' === this.state.attackerAbility ? ''.concat(this.state.attackerName, ' just forced you to pay $').concat(Object(R.n)(this.state.cashChange), ' in taxes.') : ''.concat(this.state.attackerName, ' just trashed 3 of each of your foods.'),
                blook: this.state.attackerBlook,
                buttonOne: {
                  text: 'OK',
                  click: function () {
                    return e.setState({ attackerAbility: '' });
                  },
                  color: 'blue'
                }
              }) : null) : null, 'inspect' === this.state.attackerAbility ? s.a.createElement(N.a, {
                name: this.state.attackerName,
                blook: this.state.attackerBlook
              }) : null);
            }
          }
        ]) && Q(t.prototype, a), o && Q(t, o), l;
      }(s.a.Component);
    X.propTypes = {
      client: l.a.object,
      cafe: l.a.object,
      history: l.a.object.isRequired,
      firebase: l.a.object,
      leaveCafeShop: l.a.func.isRequired,
      setStanding: l.a.func.isRequired,
      deleteClient: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(C.c)(Object(c.a)(Object(r.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client,
        cafe: e.cafes.cafe
      };
    }, function (e) {
      return Object(n.b)({
        leaveCafeShop: k,
        setStanding: S.b,
        deleteClient: E.a
      }, e);
    })(Object(D.d)(X))));
  },
  HYi1: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__headerContainer___3QjTL-camelCase{width:calc(90% - 30px);height:150px;padding:15px;margin:25px 5% 20px;min-width:500px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__headerBlookImage___1S2yr-camelCase{height:150.65px;width:131px;margin-left:15px}.styles__headerTextContainer___MZDr2-camelCase{width:calc(100% - 345px);height:100%;margin-left:20px;display:flex;flex-direction:column;min-width:150px}.styles__nameText___1ztLV-camelCase{font-size:46px;line-height:46px}.styles__nameText___1ztLV-camelCase,.styles__tNameText___3cryy-camelCase{color:#3a3a3a;text-align:left;font-family:Nunito,sans-serif;font-weight:700;height:100px}.styles__tNameText___3cryy-camelCase{font-size:34px;line-height:33px}.styles__quantityText___3b8PC-camelCase{color:#3a3a3a;line-height:25px}.styles__quantityText___3b8PC-camelCase,.styles__rarityText___3CkC_-camelCase{text-align:left;font-size:24px;font-family:Nunito,sans-serif}.styles__rarityText___3CkC_-camelCase{line-height:27px;font-weight:700;letter-spacing:.5px;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__mHeaderContainer___UEd4l-camelCase{width:300px;height:150px;padding:15px;margin:25px auto 20px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row}.styles__mHeaderLeft___1F51M-camelCase{display:flex;flex-direction:column;align-items:center;width:110px;height:150px}.styles__mHeaderBlookImage___1febq-camelCase{height:115px;width:100px}.styles__mButtonContainer___sMaYA-camelCase{margin-top:5px;width:100%;height:30px;flex-direction:row;justify-content:space-around}.styles__mButton___Xnus5-camelCase,.styles__mButtonContainer___sMaYA-camelCase{display:flex;align-items:center}.styles__mButton___Xnus5-camelCase{border:2px solid #3a3a3a;border-radius:6px;background-color:#fff;width:80px;height:25px;margin:auto;color:#3a3a3a;font-size:18px;text-align:center;justify-content:center;font-family:Nunito,sans-serif;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mButton___Xnus5-camelCase:focus,.styles__mButton___Xnus5-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__mHeaderTextContainer___2OP7U-camelCase{width:182px;height:100%;margin-left:8px;display:flex;flex-direction:column}.styles__mNameContainer___3t1Q6-camelCase{height:120px;width:182px}.styles__mNameText___33sBU-camelCase{font-size:28px;font-weight:700;line-height:30px}.styles__mNameText___33sBU-camelCase,.styles__mQuantityText___2Xlfg-camelCase{color:#3a3a3a;text-align:left;font-family:Nunito,sans-serif}.styles__mQuantityText___2Xlfg-camelCase{font-size:18px;line-height:20px}.styles__mRarityText___2Jb_O-camelCase{width:100%;text-align:center;margin:10px auto 0;font-size:20px;font-family:Nunito,sans-serif;line-height:25px;font-weight:700;letter-spacing:.5px;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__mPriceContainer___3IJwF-camelCase{margin-top:3px;height:20px;display:flex;flex-direction:row}.styles__mToken___3rus6-camelCase{height:18px;width:18px;margin:.5px 0 1.5px 5px;border-radius:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__priceContainer___1lEcN-camelCase{margin-top:5px;height:25px;display:flex;flex-direction:row}.styles__token___3Hd53-camelCase{height:21px;width:21px;margin:1.5px 0 2.5px 5px;border-radius:6px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerButtonContainer___2YaO_-camelCase{width:135px;margin-left:25px;flex-direction:column;align-items:flex-end}.styles__headerButtonContainer___2YaO_-camelCase,.styles__sellButton___4KBhp-camelCase{display:flex;justify-content:center}.styles__sellButton___4KBhp-camelCase{border-color:#3a3a3a;border-style:solid;border-radius:6px;background-color:#fff;width:115px;height:45px;margin:auto 10px auto auto;color:#3a3a3a;font-size:26px;font-weight:400;text-align:center;align-items:center;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__sellButton___4KBhp-camelCase:focus,.styles__sellButton___4KBhp-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf;font-weight:700}.styles__lowerContainer___7-F0D-camelCase{height:calc(100% - 250px);width:80%;min-width:400px;margin:0 10% 15px}.styles__lowerContainer___7-F0D-camelCase,.styles__mLowerContainer___3wOcu-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:15px;display:flex;justify-content:center;align-items:center}.styles__mLowerContainer___3wOcu-camelCase{height:calc(100% - 240px);width:320px;margin:0 auto;position:absolute;bottom:15px;left:calc((100% - 320px)/2)}.styles__blookArrayContainer___ktE_7-camelCase{height:90%;width:90%;margin:auto;overflow:hidden;overflow-y:scroll;justify-content:center;display:flex;flex-flow:row wrap;-webkit-overflow-scrolling:touch}.styles__blookArrayContainer___ktE_7-camelCase::-webkit-scrollbar{width:12px}.styles__blookArrayContainer___ktE_7-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__blookArrayContainer___ktE_7-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__mBlookArrayContainer___2218Z-camelCase{height:90%;width:90%;position:absolute;top:5%;left:5%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;justify-content:center;display:flex;flex-flow:row wrap}.styles__mBlookArrayContainer___2218Z-camelCase::-webkit-scrollbar{width:12px!important;appearance:none;-webkit-appearance:none}.styles__mBlookArrayContainer___2218Z-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__mBlookArrayContainer___2218Z-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__shaded___3Aqj3-camelCase{z-index:2;background-color:rgba(85,85,85,.7);border-radius:5px;top:0;transform:translate(-50%)}.styles__lockIcon___32tZV-camelCase,.styles__shaded___3Aqj3-camelCase{left:50%;position:absolute}.styles__lockIcon___32tZV-camelCase{z-index:3;color:#fff;top:50%;transform:translate(-50%,-50%)}',
      ''
    ]), t.locals = {
      headerContainer: 'styles__headerContainer___3QjTL-camelCase',
      headerBlookImage: 'styles__headerBlookImage___1S2yr-camelCase',
      headerTextContainer: 'styles__headerTextContainer___MZDr2-camelCase',
      nameText: 'styles__nameText___1ztLV-camelCase',
      tNameText: 'styles__tNameText___3cryy-camelCase',
      quantityText: 'styles__quantityText___3b8PC-camelCase',
      rarityText: 'styles__rarityText___3CkC_-camelCase',
      mHeaderContainer: 'styles__mHeaderContainer___UEd4l-camelCase',
      mHeaderLeft: 'styles__mHeaderLeft___1F51M-camelCase',
      mHeaderBlookImage: 'styles__mHeaderBlookImage___1febq-camelCase',
      mButtonContainer: 'styles__mButtonContainer___sMaYA-camelCase',
      mButton: 'styles__mButton___Xnus5-camelCase',
      mHeaderTextContainer: 'styles__mHeaderTextContainer___2OP7U-camelCase',
      mNameContainer: 'styles__mNameContainer___3t1Q6-camelCase',
      mNameText: 'styles__mNameText___33sBU-camelCase',
      mQuantityText: 'styles__mQuantityText___2Xlfg-camelCase',
      mRarityText: 'styles__mRarityText___2Jb_O-camelCase',
      mPriceContainer: 'styles__mPriceContainer___3IJwF-camelCase',
      mToken: 'styles__mToken___3rus6-camelCase',
      priceContainer: 'styles__priceContainer___1lEcN-camelCase',
      token: 'styles__token___3Hd53-camelCase',
      headerButtonContainer: 'styles__headerButtonContainer___2YaO_-camelCase',
      sellButton: 'styles__sellButton___4KBhp-camelCase',
      lowerContainer: 'styles__lowerContainer___7-F0D-camelCase',
      mLowerContainer: 'styles__mLowerContainer___3wOcu-camelCase',
      blookArrayContainer: 'styles__blookArrayContainer___ktE_7-camelCase',
      mBlookArrayContainer: 'styles__mBlookArrayContainer___2218Z-camelCase',
      shaded: 'styles__shaded___3Aqj3-camelCase',
      lockIcon: 'styles__lockIcon___32tZV-camelCase'
    };
  },
  'MV/S': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__counterBelow___1itKm-camelCase{bottom:0;height:7.5%;background-color:#737373;background-image:linear-gradient(180deg,#424242,rgba(66,66,66,0) 70%)}.styles__counterBelow___1itKm-camelCase,.styles__counterBottom___1c0vk-camelCase{position:absolute;left:0;width:100%}.styles__counterBottom___1c0vk-camelCase{bottom:7.5%;height:5%;background-color:#1f7a1f}.styles__counterTop___38fS8-camelCase{bottom:12.5%;left:0;width:100%;background-color:#2eb82e}.styles__counterTop___38fS8-camelCase,.styles__trashBlook___3i0jI-camelCase{position:absolute;height:45vh}.styles__trashBlook___3i0jI-camelCase{bottom:12.75%;left:100vw;width:39.15vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-animation:styles__trashSlide___2OawA-camelCase 2s linear forwards;animation:styles__trashSlide___2OawA-camelCase 2s linear forwards}@-webkit-keyframes styles__trashSlide___2OawA-camelCase{0%{transform:translateX(0)}to{transform:translateX(calc(-100vw - 40vh))}}@keyframes styles__trashSlide___2OawA-camelCase{0%{transform:translateX(0)}to{transform:translateX(calc(-100vw - 40vh))}}.styles__plate___3jJp7-camelCase{border-bottom:1vh solid #ddd;box-shadow:0 1.6vh 0 rgba(0,0,0,.1);border-radius:50%;height:20vh;width:20vh;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__plate___3jJp7-camelCase,.styles__plate___3jJp7-camelCase:before{background-color:#fff;position:absolute}.styles__plate___3jJp7-camelCase:before{content:"";display:block;left:calc(50% - 6.5vh);top:calc(50% - 6.5vh);height:13vh;width:13vh;border-radius:12vh;border-top:1.2vh solid #ccc;opacity:.4}.styles__plateHover___kwcYJ-camelCase:hover,.styles__plateSelected___2qVA0-camelCase{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__lockedPlate___8fCL6-camelCase{position:absolute;border-bottom:1vh solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:5vh;color:#fff;text-shadow:.5vh .5vh 0 grey}.styles__plateLevel2___16Htu-camelCase{border-radius:50%;border:2vh solid #009ff2;opacity:.4}.styles__plateLevel2___16Htu-camelCase,.styles__plateLevel3___3dh0O-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh}.styles__plateLevel3___3dh0O-camelCase{border-radius:50%;border:2vh double #093;opacity:.5}.styles__plateColor4___2JwV5-camelCase{border-bottom:1vh solid #004;background-color:#008;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor4___2JwV5-camelCase:before{border-top:1.2vh solid #004;background-color:#008}.styles__plateLevel4___gWh27-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh double #fff;opacity:.9}.styles__plateColor5___5Gy1--camelCase{border-bottom:1vh solid #111;background-color:#333;box-shadow:0 1.6vh 0 rgba(0,0,0,.1)}.styles__plateColor5___5Gy1--camelCase:before{border-top:1.2vh solid #111;background-color:#333}.styles__plateLevel5___1d-RF-camelCase{position:absolute;left:calc(50% - 9.25vh);top:calc(50% - 9.25vh);height:14.5vh;width:14.5vh;border-radius:50%;border:2vh groove #fff;opacity:.7}.styles__foodStock___3jbrn-camelCase{right:0;bottom:0;width:4vh;height:4vh;border-radius:.6vh;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.7vh;color:#fff}.styles__food___3Cmn6-camelCase,.styles__foodStock___3jbrn-camelCase{position:absolute}.styles__food___3Cmn6-camelCase{width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__plate1___307ik-camelCase{bottom:calc(12.5% + 22vh);left:calc(10% - 10vh)}.styles__plate2___2qiAC-camelCase{bottom:calc(12.5% + 3vh);left:calc(20% - 10vh)}.styles__plate3___34Vpr-camelCase{bottom:calc(12.5% + 22vh);left:calc(30% - 10vh)}.styles__plate4___UgoGD-camelCase{bottom:calc(12.5% + 3vh);left:calc(40% - 10vh)}.styles__plate5___3jknA-camelCase{bottom:calc(12.5% + 22vh);left:calc(50% - 10vh)}.styles__plate6___1Y5Yh-camelCase{bottom:calc(12.5% + 3vh);left:calc(60% - 10vh)}.styles__plate7___1hs8t-camelCase{bottom:calc(12.5% + 22vh);left:calc(70% - 10vh)}.styles__plate8___3TWiv-camelCase{bottom:calc(12.5% + 3vh);left:calc(80% - 10vh)}.styles__plate9___8gVIf-camelCase{bottom:calc(12.5% + 22vh);left:calc(90% - 10vh)}.styles__restockButton___3RKCq-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;left:37.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.75vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__restockButton___3RKCq-camelCase:hover{transform:scale(.95)}.styles__restockButtonLive___3y9D2-camelCase{position:absolute;height:10%;width:25%;bottom:1.5%;right:52.5%;background-color:#0bc2cf;box-shadow:.5vh .5vh 0 rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.5vw;color:#fff;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__restockButtonLive___3y9D2-camelCase:hover{transform:scale(.95)}.styles__upgradeIcon___39dSc-camelCase{top:-10px;right:-10px;border-radius:50%;height:25px;line-height:23px;width:25px;background-color:#ff462b;box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#fff;font-family:Titan One,sans-serif;font-size:20px;text-align:center}.styles__restockKey___mc2o--camelCase,.styles__upgradeIcon___39dSc-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__restockKey___mc2o--camelCase{right:calc(100% - 5vh);bottom:1.5%;width:8vh;height:3vh;border-radius:.45vh;background-color:#fff;border:1px solid grey;box-shadow:1px 0 1px 0 #eee,0 2px 0 2px #ccc,0 2px 0 3px #444;display:flex;justify-content:center;align-items:center;font-family:Nunito,sans-serif;font-weight:700;font-size:2.025vh;color:grey;pointer-events:none}.styles__missesContainer___3ozsB-camelCase{position:absolute;right:1%;width:30vh;bottom:1%;height:10vh;display:flex;flex-direction:row}.styles__miss___3Ap9F-camelCase{font-size:10vh;width:10vh;text-align:center;color:#c43a35;text-shadow:.2vh .8vh 0 rgba(0,0,0,.2);transition:.4s}.styles__questionContainer___3PKoK-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:2;-webkit-animation:styles__growIn___rUav5-camelCase .4s linear forwards;animation:styles__growIn___rUav5-camelCase .4s linear forwards}@-webkit-keyframes styles__growIn___rUav5-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___rUav5-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___1Jigf-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#f7f7f7}.styles__modalFadeIn___2TnG5-camelCase{opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear .5s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear .5s forwards}.styles__reportContainer___co8ku-camelCase{opacity:0;top:65px;margin:65px auto 15px;width:520px;display:flex;flex-direction:column;align-items:center;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards}.styles__reportHeader___1VuYd-camelCase{font-size:74px;font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;margin:20px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__reportRow___9vcUv-camelCase{height:50px;display:flex;flex-direction:row;align-items:center;width:calc(90% - 20px);margin:0 auto;padding:0 10px}.styles__reportFood___z3Jwz-camelCase{height:40px;width:35px;margin:auto 10px auto 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__reportAmount___kfvbS-camelCase{font-size:26px;font-weight:700}.styles__reportTimes___QLDoM-camelCase{font-size:16px;margin-right:6px}.styles__reportProfit___1B9ml-camelCase{font-size:30px;font-weight:700;margin-left:auto}.styles__reportShopButton___33ag4-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;font-size:26px;padding:5px 10px;margin:25px auto 0;color:#fff;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__reportShopButton___33ag4-camelCase:hover{transform:scale(.95)}.styles__gameOverContainer___2qiWr-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___1TPp4-camelCase{font-family:Satisfy,sans-serif;font-size:12vw;opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___3RCRD-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;-webkit-animation:styles__fadeIn___1kyTF-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___1kyTF-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___1kyTF-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___1kyTF-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__counterTop___38fS8-camelCase{height:42.5vh}.styles__restockButton___3RKCq-camelCase{height:10%;width:60%;bottom:1.5%;left:50%;transform:translateX(-50%);border-radius:6px;max-width:400px;font-size:7vw}.styles__restockButton___3RKCq-camelCase:hover{transform:scale(1) translateX(-50%)}.styles__restockButtonLive___3y9D2-camelCase{height:10%;width:45%;bottom:1.5%;right:52.5%;font-size:5.5vw}.styles__restockButtonLive___3y9D2-camelCase:hover{transform:scale(1) translateX(0)}.styles__upgradeIcon___39dSc-camelCase{top:-10px;right:-5px}.styles__plate___3jJp7-camelCase{transform:scale(.6)}.styles__plate1___307ik-camelCase{left:calc(20% - 10vh)}.styles__plate1___307ik-camelCase,.styles__plate2___2qiAC-camelCase{bottom:calc(12.5% + 24.75vh)}.styles__plate2___2qiAC-camelCase{left:calc(50% - 10vh)}.styles__plate3___34Vpr-camelCase{bottom:calc(12.5% + 24.75vh);left:calc(80% - 10vh)}.styles__plate4___UgoGD-camelCase{left:calc(20% - 10vh)}.styles__plate4___UgoGD-camelCase,.styles__plate5___3jknA-camelCase{bottom:calc(12.5% + 11vh)}.styles__plate5___3jknA-camelCase{left:calc(50% - 10vh)}.styles__plate6___1Y5Yh-camelCase{bottom:calc(12.5% + 11vh);left:calc(80% - 10vh)}.styles__plate7___1hs8t-camelCase{left:calc(20% - 10vh)}.styles__plate7___1hs8t-camelCase,.styles__plate8___3TWiv-camelCase{bottom:calc(12.5% - 2.75vh)}.styles__plate8___3TWiv-camelCase{left:calc(50% - 10vh)}.styles__plate9___8gVIf-camelCase{bottom:calc(12.5% - 2.75vh);left:calc(80% - 10vh)}.styles__plateHover___kwcYJ-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,0)}.styles__plateSelected___2qVA0-camelCase:hover{box-shadow:0 0 0 1.2vh hsla(0,0%,100%,.4)}.styles__restockKey___mc2o--camelCase{display:none;opacity:0}.styles__missesContainer___3ozsB-camelCase{right:0;width:18%;bottom:1.5%;height:10%;flex-flow:row wrap;justify-content:center;align-items:center}.styles__miss___3Ap9F-camelCase{font-size:5vh;width:auto;margin:auto;text-shadow:.15vh .6vh 0 rgba(0,0,0,.2)}.styles__reportContainer___co8ku-camelCase{top:45px;left:calc(50vw - 160px);width:320px}.styles__reportHeader___1VuYd-camelCase{font-size:54px}.styles__reportRow___9vcUv-camelCase{height:40px}.styles__reportFood___z3Jwz-camelCase{height:30px}.styles__reportAmount___kfvbS-camelCase{font-size:18px}.styles__reportTimes___QLDoM-camelCase{font-size:12px}.styles__reportProfit___1B9ml-camelCase{font-size:24px}.styles__gameOverText___1TPp4-camelCase{font-size:15vw}.styles__gameOverTextSmall___3RCRD-camelCase{font-size:5vw}}',
      ''
    ]), t.locals = {
      counterBelow: 'styles__counterBelow___1itKm-camelCase',
      counterBottom: 'styles__counterBottom___1c0vk-camelCase',
      counterTop: 'styles__counterTop___38fS8-camelCase',
      trashBlook: 'styles__trashBlook___3i0jI-camelCase',
      trashSlide: 'styles__trashSlide___2OawA-camelCase',
      plate: 'styles__plate___3jJp7-camelCase',
      plateHover: 'styles__plateHover___kwcYJ-camelCase',
      plateSelected: 'styles__plateSelected___2qVA0-camelCase',
      lockedPlate: 'styles__lockedPlate___8fCL6-camelCase',
      plateLevel2: 'styles__plateLevel2___16Htu-camelCase',
      plateLevel3: 'styles__plateLevel3___3dh0O-camelCase',
      plateColor4: 'styles__plateColor4___2JwV5-camelCase',
      plateLevel4: 'styles__plateLevel4___gWh27-camelCase',
      plateColor5: 'styles__plateColor5___5Gy1--camelCase',
      plateLevel5: 'styles__plateLevel5___1d-RF-camelCase',
      foodStock: 'styles__foodStock___3jbrn-camelCase',
      food: 'styles__food___3Cmn6-camelCase',
      plate1: 'styles__plate1___307ik-camelCase',
      plate2: 'styles__plate2___2qiAC-camelCase',
      plate3: 'styles__plate3___34Vpr-camelCase',
      plate4: 'styles__plate4___UgoGD-camelCase',
      plate5: 'styles__plate5___3jknA-camelCase',
      plate6: 'styles__plate6___1Y5Yh-camelCase',
      plate7: 'styles__plate7___1hs8t-camelCase',
      plate8: 'styles__plate8___3TWiv-camelCase',
      plate9: 'styles__plate9___8gVIf-camelCase',
      restockButton: 'styles__restockButton___3RKCq-camelCase',
      restockButtonLive: 'styles__restockButtonLive___3y9D2-camelCase',
      upgradeIcon: 'styles__upgradeIcon___39dSc-camelCase',
      restockKey: 'styles__restockKey___mc2o--camelCase',
      missesContainer: 'styles__missesContainer___3ozsB-camelCase',
      miss: 'styles__miss___3Ap9F-camelCase',
      questionContainer: 'styles__questionContainer___3PKoK-camelCase',
      growIn: 'styles__growIn___rUav5-camelCase',
      feedbackContainer: 'styles__feedbackContainer___1Jigf-camelCase',
      modalFadeIn: 'styles__modalFadeIn___2TnG5-camelCase',
      fadeIn: 'styles__fadeIn___1kyTF-camelCase',
      reportContainer: 'styles__reportContainer___co8ku-camelCase',
      reportHeader: 'styles__reportHeader___1VuYd-camelCase',
      reportRow: 'styles__reportRow___9vcUv-camelCase',
      reportFood: 'styles__reportFood___z3Jwz-camelCase',
      reportAmount: 'styles__reportAmount___kfvbS-camelCase',
      reportTimes: 'styles__reportTimes___QLDoM-camelCase',
      reportProfit: 'styles__reportProfit___1B9ml-camelCase',
      reportShopButton: 'styles__reportShopButton___33ag4-camelCase',
      gameOverContainer: 'styles__gameOverContainer___2qiWr-camelCase',
      gameOverText: 'styles__gameOverText___1TPp4-camelCase',
      gameOverTextSmall: 'styles__gameOverTextSmall___3RCRD-camelCase'
    };
  },
  Oc9b: function (e, t, a) {
    var o = a('mAlt');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  Tqoc: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return o;
    }), a.d(t, 'b', function () {
      return s;
    });
    var o = 'END_CAFE_DAY', s = 'END_CAFE_LIVE';
  },
  VqXC: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('vDqi'), f = a.n(u), p = a('b6Qr'), d = a('TSYQ'), m = a.n(d), h = a('wd/R'), _ = a.n(h), y = a('anyA'), b = a('mfKP'), g = a.n(b), v = a('GIcp'), w = a.n(v), C = a('e47E'), x = a('iQ+n'), k = a('SCqF'), S = a('DoX5'), E = a('ow7w'), O = a('qTtK'), T = a('3uCs'), I = a('HkxE'), N = a('Rpcy'), j = a('3B9I'), P = a('TN+F');
    function B(e) {
      return (B = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function A(e) {
      return function (e) {
        if (Array.isArray(e))
          return R(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return R(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return R(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function R(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    function D(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function z(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function M(e, t) {
      return (M = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function L(e) {
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
        var a, o = U(e);
        if (t) {
          var s = U(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return G(this, a);
      };
    }
    function G(e, t) {
      return !t || 'object' !== B(t) && 'function' != typeof t ? H(e) : t;
    }
    function H(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function U(e) {
      return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var q = function (e) {
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
      }(l, e);
      var t, a, o, n, r, i = L(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          name: '',
          allBlooks: [],
          lockedBlooks: [],
          blooks: [],
          blookData: [],
          ready: !1,
          blook: '',
          blookQuantity: '',
          blookPrice: 0,
          selling: !1,
          loadingSell: !1,
          numToSell: 0,
          auction: !1,
          loadingAuction: !1,
          auctionPrice: 1,
          auctionTime: 24
        }, t.here = !0, t.setBlook = t.setBlook.bind(H(t)), t.setNewBlooks = t.setNewBlooks.bind(H(t)), t.sellBlook = t.sellBlook.bind(H(t)), t.auctionBlook = t.auctionBlook.bind(H(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (n = regeneratorRuntime.mark(function e() {
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
                  f.a.get('/api/users/blooks', { params: { name: t.name } }).then(function (e) {
                    var o = A(O.a);
                    Object.keys(e.data).forEach(function (e) {
                      o.splice(o.indexOf(e), 1);
                    });
                    var s = A(Object.keys(E.a));
                    o.forEach(function (e) {
                      s.splice(s.indexOf(e), 1);
                    });
                    var n = s[Math.floor(Math.random() * s.length)], r = 1;
                    e.data[n] && (r = e.data[n]), a.here && a.setState({
                      allBlooks: A(s.concat(o)),
                      lockedBlooks: o,
                      blooks: s,
                      blookData: e.data,
                      ready: !0,
                      blook: n,
                      blookQuantity: r,
                      blookPrice: Object(I.a)(n),
                      name: t.name
                    });
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 6:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, o) {
              var s = n.apply(e, t);
              function r(e) {
                D(s, a, o, r, i, 'next', e);
              }
              function i(e) {
                D(s, a, o, r, i, 'throw', e);
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
          key: 'setBlook',
          value: function (e) {
            if (-1 !== this.state.blooks.indexOf(e)) {
              var t = 1;
              this.state.blookData[e] && (t = this.state.blookData[e]), this.setState({
                blook: e,
                blookQuantity: t,
                blookPrice: Object(I.a)(e)
              });
            }
          }
        },
        {
          key: 'setNewBlooks',
          value: function (e) {
            var t = A(this.state.blooks);
            t.splice(t.indexOf(this.state.blook), 1);
            var a = A(this.state.lockedBlooks);
            a.push(this.state.blook), a.sort(function (e, t) {
              var a = Object.keys(E.a).indexOf(e), o = Object.keys(E.a).indexOf(t);
              return a < o ? -1 : a > o ? 1 : 0;
            }), this.setBlook(Object(P.o)(t)), this.setState({
              selling: !1,
              loadingSell: !1,
              auction: !1,
              loadingAuction: !1,
              blookData: e,
              blooks: t,
              allBlooks: t.concat(a),
              lockedBlooks: a
            });
          }
        },
        {
          key: 'sellBlook',
          value: function (e, t) {
            var a = this;
            e.preventDefault(), t && this.state.numToSell ? this.setState({ loadingSell: !0 }, function () {
              f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/sellblook', {
                name: a.state.name,
                blook: a.state.blook,
                numSold: a.state.numToSell
              }).then(function (e) {
                a.here && (e.data.unlocks[a.state.blook] ? a.setState({
                  selling: !1,
                  loadingSell: !1,
                  blookData: e.data.unlocks,
                  blookQuantity: a.state.blookQuantity - a.state.numToSell
                }) : a.setNewBlooks(e.data.unlocks));
              }).catch(function (e) {
                console.error(e);
              });
            }) : this.setState({ selling: !1 });
          }
        },
        {
          key: 'auctionBlook',
          value: function (e) {
            var t = this;
            e ? this.setState({ loadingAuction: !0 }, function () {
              f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.post('/api/markets', {
                item: t.state.blook,
                price: t.state.auctionPrice,
                name: t.state.name,
                endTime: _()().add(t.state.auctionTime, 'hours')
              }).then(function (e) {
                t.here && (e.data.unlocks[t.state.blook] ? t.setState({
                  auction: !1,
                  loadingAuction: !1,
                  blookData: e.data.unlocks,
                  blookQuantity: t.state.blookQuantity - 1
                }) : t.setNewBlooks(e.data.unlocks));
              }).catch(function (e) {
                console.error(e);
              });
            }) : this.setState({ auction: !1 });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: p.isMobile ? w.a.mBody : w.a.body,
              id: 'body'
            }, s.a.createElement(x.a, {
              title: 'My Blooks | Blooket',
              desc: 'Blooks represent players and compete in races during games. Use this page to view, sell, and manage your Blooks.'
            }), s.a.createElement(C.a, {
              history: this.props.history,
              page: 'Blooks'
            }), this.state.ready ? p.isMobile && !p.isTablet ? s.a.createElement('div', {
              className: w.a.regularBody,
              id: 'regularBody'
            }, s.a.createElement('div', { className: g.a.mHeaderContainer }, s.a.createElement('div', { className: g.a.mHeaderLeft }, s.a.createElement(S.a, {
              name: this.state.blook,
              className: g.a.mHeaderBlookImage
            }), s.a.createElement('div', {
              className: g.a.mRarityText,
              style: { color: P.s[Object(N.a)(this.state.blook)] }
            }, Object(N.a)(this.state.blook))), s.a.createElement('div', { className: g.a.mHeaderTextContainer }, s.a.createElement('div', { className: g.a.mNameContainer }, s.a.createElement('div', { className: g.a.mNameText }, this.state.blook)), this.state.blookPrice ? s.a.createElement(s.a.Fragment, null, s.a.createElement('div', { className: g.a.mQuantityText }, 'Quantity: '.concat(Object(P.n)(this.state.blookQuantity))), s.a.createElement('div', { className: g.a.mPriceContainer }, s.a.createElement('div', { className: g.a.mQuantityText }, 'Sell Price: '.concat(Object(P.n)(this.state.blookPrice))), s.a.createElement('img', {
              src: j.a,
              alt: 'Token',
              className: g.a.mToken,
              draggable: !1
            }))) : s.a.createElement('div', { className: g.a.mPriceContainer }, s.a.createElement('div', { className: g.a.mQuantityText }, 'Cannot Be Sold')), this.state.blookPrice > 0 ? s.a.createElement('div', { className: g.a.mButtonContainer }, s.a.createElement('div', {
              className: g.a.mButton,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  selling: !0,
                  numToSell: 1
                });
              }
            }, 'Sell')) : null)), s.a.createElement('div', { className: g.a.mLowerContainer }, s.a.createElement('div', { className: g.a.mBlookArrayContainer }, this.state.ready ? this.state.allBlooks.map(function (t) {
              var a = !e.state.blooks.includes(t);
              return e.state.blooks.includes(t) || !T.a.includes(t) ? s.a.createElement('div', {
                key: t,
                onClick: function () {
                  return e.setBlook(t);
                },
                role: 'button',
                tabIndex: '0',
                style: {
                  fontSize: 0,
                  outline: 'none',
                  userSelect: 'none',
                  marginRight: a ? '2.5vw' : '1.5vw',
                  marginLeft: a ? '2.5vw' : '1.5vw',
                  marginTop: 7,
                  marginBottom: 7,
                  position: 'relative'
                }
              }, s.a.createElement(S.a, {
                name: t,
                style: {
                  zIndex: 1,
                  margin: 'auto',
                  width: a ? '8vw' : '10vw',
                  height: a ? '9.2vw' : '11.5vw',
                  marginTop: a ? '1.15vw' : 0,
                  marginBottom: a ? '1.15vw' : 0,
                  cursor: a ? 'auto' : 'pointer',
                  position: 'relative',
                  outline: 'none'
                }
              }), a ? s.a.createElement('div', null, s.a.createElement('div', {
                className: g.a.shaded,
                style: {
                  width: '10vw',
                  height: '11.5vw'
                }
              }, s.a.createElement('i', {
                className: m()('fas fa-lock', g.a.lockIcon),
                style: { fontSize: '4.5vw' }
              }))) : null) : null;
            }) : null))) : s.a.createElement('div', { className: w.a.regularBody }, s.a.createElement('div', { className: g.a.headerContainer }, s.a.createElement(S.a, {
              name: this.state.blook,
              className: g.a.headerBlookImage
            }), s.a.createElement('div', { className: g.a.headerTextContainer }, s.a.createElement('div', { className: p.isTablet ? g.a.tNameText : g.a.nameText }, this.state.blook), this.state.blookPrice ? s.a.createElement(s.a.Fragment, null, s.a.createElement('div', { className: g.a.quantityText }, 'Quantity: '.concat(Object(P.n)(this.state.blookQuantity))), s.a.createElement('div', { className: g.a.priceContainer }, s.a.createElement('div', { className: g.a.quantityText }, 'Sell Price: '.concat(Object(P.n)(this.state.blookPrice))), s.a.createElement('img', {
              src: j.a,
              alt: 'Token',
              className: g.a.token,
              draggable: !1
            }))) : s.a.createElement('div', { className: g.a.priceContainer }, s.a.createElement('div', { className: g.a.quantityText }, 'Cannot Be Sold')), s.a.createElement('div', {
              className: g.a.rarityText,
              style: { color: P.s[Object(N.a)(this.state.blook)] }
            }, Object(N.a)(this.state.blook))), this.state.blookPrice > 0 ? s.a.createElement('div', { className: g.a.headerButtonContainer }, s.a.createElement('div', {
              className: g.a.sellButton,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  selling: !0,
                  numToSell: 1
                });
              }
            }, 'Sell')) : null), s.a.createElement('div', { className: g.a.lowerContainer }, s.a.createElement('div', { className: g.a.blookArrayContainer }, this.state.ready ? p.isTablet ? this.state.allBlooks.map(function (t) {
              var a = !e.state.blooks.includes(t);
              return e.state.blooks.includes(t) || !T.a.includes(t) ? s.a.createElement('div', {
                key: t,
                onClick: function () {
                  return e.setBlook(t);
                },
                role: 'button',
                tabIndex: '0',
                style: {
                  fontSize: 0,
                  outline: 'none',
                  userSelect: 'none',
                  marginRight: a ? '2.5vw' : '1.5vw',
                  marginLeft: a ? '2.5vw' : '1.5vw',
                  marginTop: 7,
                  marginBottom: 7,
                  position: 'relative'
                }
              }, s.a.createElement(S.a, {
                name: t,
                style: {
                  zIndex: 1,
                  margin: 'auto',
                  width: a ? '8vw' : '10vw',
                  height: a ? '9.2vw' : '11.5vw',
                  marginTop: a ? '1.15vw' : 0,
                  marginBottom: a ? '1.15vw' : 0,
                  cursor: a ? 'auto' : 'pointer',
                  position: 'relative',
                  outline: 'none'
                }
              }), a ? s.a.createElement('div', null, s.a.createElement('div', {
                className: g.a.shaded,
                style: {
                  width: '10vw',
                  height: '11.5vw'
                }
              }, s.a.createElement('i', {
                className: m()('fas fa-lock', g.a.lockIcon),
                style: { fontSize: '4.5vw' }
              }))) : null) : null;
            }) : this.state.allBlooks.map(function (t) {
              var a = !e.state.blooks.includes(t);
              return e.state.blooks.includes(t) || !T.a.includes(t) ? s.a.createElement('div', {
                key: t,
                onClick: function () {
                  return e.setBlook(t);
                },
                role: 'button',
                tabIndex: '0',
                style: {
                  fontSize: 0,
                  outline: 'none',
                  userSelect: 'none',
                  marginRight: a ? '1.3vw' : '1vw',
                  marginLeft: a ? '1.3vw' : '1vw',
                  marginTop: 10,
                  marginBottom: 10,
                  position: 'relative'
                }
              }, s.a.createElement(S.a, {
                name: t,
                style: {
                  zIndex: 1,
                  margin: 'auto',
                  width: a ? '4.4vw' : '5vw',
                  height: a ? '5.06vw' : '5.75vw',
                  marginTop: a ? '.3vw' : 0,
                  marginBottom: a ? '.345vw' : 0,
                  cursor: a ? 'auto' : 'pointer',
                  position: 'relative',
                  outline: 'none'
                }
              }), a ? s.a.createElement('div', null, s.a.createElement('div', {
                className: g.a.shaded,
                style: {
                  width: '5vw',
                  height: '5.75vw'
                }
              }, s.a.createElement('i', {
                className: m()('fas fa-lock', g.a.lockIcon),
                style: { fontSize: '2.3vw' }
              }))) : null) : null;
            }) : null))) : null, this.state.selling ? s.a.createElement(k.a, {
              text: 'Sell '.concat(this.state.blook, ' Blooks for ').concat(this.state.blookPrice, ' tokens each:'),
              loading: this.state.loadingSell,
              numValue: this.state.numToSell,
              numChange: function (t) {
                return e.setState({ numToSell: Math.max(Math.min(t.target.value, e.state.blookQuantity), 0) });
              },
              numTotal: this.state.blookQuantity,
              buttonOne: {
                text: 'Yes',
                click: function (t) {
                  return e.sellBlook(t, !0);
                },
                color: 'red'
              },
              buttonTwo: {
                text: 'No',
                click: function (t) {
                  return e.sellBlook(t, !1);
                },
                color: 'blue'
              }
            }) : this.state.auction ? s.a.createElement(k.a, {
              text: this.state.loadingAuction ? 'Setting Up Auction...' : 'Enter a starting price and time limit (in hours) for the '.concat(this.state.blook, ' Blook'),
              loading: this.state.loadingAuction,
              priceValue: this.state.auctionPrice,
              priceChange: function (t) {
                return e.setState({ auctionPrice: Math.min(Math.max(1, t.target.value), 10000) });
              },
              timeValue: this.state.auctionTime,
              timeChange: function (t) {
                return e.setState({ auctionTime: Math.max(0, Math.min(168, t.target.value)) });
              },
              buttonOne: {
                text: 'Start',
                click: function () {
                  return e.auctionBlook(!0);
                },
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.auctionBlook(!1);
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && z(t.prototype, a), o && z(t, o), l;
    }(s.a.Component);
    q.propTypes = {
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(y.c)(Object(c.a)(Object(r.b)(function () {
      return {};
    }, function (e) {
      return Object(n.b)({}, e);
    })(q)));
  },
  W8y1: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__header___f28tc-camelCase{font-size:5.5vw;margin:1vw auto .25vw}.styles__abilityHeader___xC__x-camelCase,.styles__header___f28tc-camelCase{font-family:Satisfy,sans-serif;color:#3a3a3a;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__abilityHeader___xC__x-camelCase{font-size:4vw;margin:-1vw auto}.styles__nextDayButton___19g86-camelCase{display:flex;justify-content:center;align-items:center;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;width:15vw;height:4vw;font-size:2.2vw;color:#fff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:1vw;right:1vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__nextDayButton___19g86-camelCase:hover{transform:scale(.95)}.styles__shopContainer___3CrvE-camelCase{display:flex;flex-flow:row wrap;width:95%;margin:20px 2.5%}.styles__itemContainer___SyHdJ-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;width:calc(21% - 1vw);padding:.5vw;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:10px auto;transition:.2s}.styles__itemContainerHover___YVmof-camelCase:hover{transform:scale(.95)}.styles__plate___31ltg-camelCase{border-bottom:.35vw solid #eee;box-shadow:0 .56vw 0 rgba(0,0,0,.1);border-radius:50%;height:7vw;width:7vw;position:relative;margin-bottom:.56vw}.styles__plate___31ltg-camelCase,.styles__plate___31ltg-camelCase:before{background-color:#fff}.styles__plate___31ltg-camelCase:before{content:"";display:block;position:absolute;left:calc(50% - 2.275vw);top:calc(50% - 2.275vw);height:4.55vw;width:4.55vw;border-radius:4.2vw;border-top:.42vw solid #ccc;opacity:.4}.styles__lockedPlate___EBfom-camelCase{position:absolute;border-bottom:.35vw solid transparent;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;font-size:1.75vw;color:#fff;text-shadow:.175vw .175vw 0 grey}.styles__plateLevel2___1bwGX-camelCase{border-radius:50%;border:.7vw solid #009ff2;opacity:.4}.styles__plateLevel2___1bwGX-camelCase,.styles__plateLevel3___1HsUR-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw}.styles__plateLevel3___1HsUR-camelCase{border-radius:50%;border:.7vw double #093;opacity:.5}.styles__plate4___39MZ2-camelCase{border-bottom:.35vw solid #004;background-color:#008;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate4___39MZ2-camelCase:before{border-top:.42vw solid #004;background-color:#008}.styles__plateLevel4___1Lb1g-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw double #fff;opacity:.9}.styles__plate5___2rTg6-camelCase{border-bottom:.35vw solid #111;background-color:#333;box-shadow:0 .56vw 0 rgba(0,0,0,.1)}.styles__plate5___2rTg6-camelCase:before{border-top:.42vw solid #111;background-color:#333}.styles__plateLevel5___10aRQ-camelCase{position:absolute;left:calc(50% - 3.2375vw);top:calc(50% - 3.2375vw);height:5.075vw;width:5.075vw;border-radius:50%;border:.7vw groove #fff;opacity:.7}.styles__food___1EGzC-camelCase{position:absolute;width:62.5%;height:71.875%;left:18.75%;top:14.0625%}.styles__backgroundContainer___33E4J-camelCase{border:3px solid #a7a7a7;border-radius:5px;height:7vw;width:7vw;margin:auto}.styles__iconContainer___1MksP-camelCase{border-radius:5px;height:7vw;width:7vw;margin:auto;display:flex;align-items:center;justify-content:center;background-color:#9a49aa}.styles__upgradeIcon___LVSJu-camelCase{margin:auto;color:#fff;text-shadow:2px 2px 8px grey;font-size:4vw}.styles__rightContainer___gU_Wk-camelCase{display:flex;flex-direction:column;font-family:Nunito,sans-serif;color:#3a3a3a;margin-left:1vw;width:calc(100% - 8vw)}.styles__itemName___2CiTT-camelCase{font-weight:700;font-size:1.75vw;line-height:1.75vw}.styles__itemLevel___31dyT-camelCase{margin-top:.2vw;margin-bottom:.15vw;line-height:1.2vw}.styles__itemDesc___2STSA-camelCase,.styles__itemLevel___31dyT-camelCase{font-size:1.05vw;margin-left:.1vw}.styles__itemDesc___2STSA-camelCase{opacity:.7}.styles__itemUpgrade___23uWG-camelCase{margin-top:auto;font-size:1.4vw;margin-left:auto;margin-bottom:-.3vw;font-weight:700}.styles__playerWrapper___JVydk-camelCase{display:flex;flex-flow:column;width:100%;height:100%;position:fixed;top:0;left:0;overflow-x:hidden;background-color:#f7f7f7;-webkit-animation:styles__growIn___UZTuV-camelCase .4s;animation:styles__growIn___UZTuV-camelCase .4s}@-webkit-keyframes styles__growIn___UZTuV-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes styles__growIn___UZTuV-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__playerHeader___3RkEi-camelCase{font-size:6vw;width:80%;margin:95px auto 0;color:#3a3a3a;text-align:center;font-family:Satisfy,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__playerHolder___EyH_Z-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___1TSWe-camelCase{width:200px;height:60px;line-height:60px;background-color:#0bc2cf;box-shadow:4px 4px 0 rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 100px);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__noPlayers___1TSWe-camelCase:hover{transform:scale(.95)}.styles__playerContainer___vKvzn-camelCase{background-color:#f5f5f5;border:3px solid #a7a7a7;border-radius:6px;box-shadow:4px 4px 0 rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__playerContainer___vKvzn-camelCase:focus,.styles__playerContainer___vKvzn-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___3avJQ-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___2o4Vn-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px}.styles__playerText___2U7pM-camelCase{font-weight:700;font-size:28px;margin-right:10px;word-break:break-word}.styles__playerCash___3gsgL-camelCase,.styles__playerText___2U7pM-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;line-height:35px}.styles__playerCash___3gsgL-camelCase{height:35px;font-size:26px}@media only screen and (max-width:800px){.styles__header___f28tc-camelCase{font-size:12vw;margin:3.4vw 5% 9vw;width:80%;text-align:left}.styles__abilityHeader___xC__x-camelCase{font-size:9vw;margin-bottom:-3vw}.styles__nextDayButton___19g86-camelCase{box-shadow:4px 4px 0 rgba(0,0,0,.2);width:30vw;height:8vw;font-size:4.4vw;top:20vw;right:5%}.styles__nextDayButton___19g86-camelCase:hover{transform:scale(1)}.styles__itemContainer___SyHdJ-camelCase{width:calc(43% - 2vw);padding:1vw;margin:7px auto}.styles__itemContainerHover___YVmof-camelCase:hover{transform:scale(1)}.styles__plate___31ltg-camelCase{border-bottom:.7vw solid #eee;box-shadow:0 1.12vw 0 rgba(0,0,0,.1);height:14vw;width:14vw;margin-bottom:1.12vw}.styles__plate___31ltg-camelCase:before{left:calc(50% - 4.55vw);top:calc(50% - 4.55vw);height:9.1vw;width:9.1vw;border-radius:8.4vw;border-top:.84vw solid #ccc}.styles__lockedPlate___EBfom-camelCase{border-bottom:.7vw solid transparent;font-size:3.5vw;text-shadow:.35vw .35vw 0 grey}.styles__plateLevel2___1bwGX-camelCase{border:1.4vw solid #009ff2}.styles__plateLevel2___1bwGX-camelCase,.styles__plateLevel3___1HsUR-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw}.styles__plateLevel3___1HsUR-camelCase{border:1.4vw double #093}.styles__plate4___39MZ2-camelCase{border-bottom:.7vw solid #004;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate4___39MZ2-camelCase:before{border-top:.84vw solid #004}.styles__plateLevel4___1Lb1g-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw double #fff}.styles__plate5___2rTg6-camelCase{border-bottom:.7vw solid #111;box-shadow:0 1.12vw 0 rgba(0,0,0,.1)}.styles__plate5___2rTg6-camelCase:before{border-top:.84vw solid #111}.styles__plateLevel5___10aRQ-camelCase{left:calc(50% - 6.475vw);top:calc(50% - 6.475vw);height:10.15vw;width:10.15vw;border:1.4vw groove #fff}.styles__backgroundContainer___33E4J-camelCase,.styles__iconContainer___1MksP-camelCase{height:14vw;width:14vw}.styles__upgradeIcon___LVSJu-camelCase{font-size:8vw}.styles__rightContainer___gU_Wk-camelCase{margin-left:1vw;width:calc(100% - 15vw)}.styles__itemName___2CiTT-camelCase{font-size:3.5vw;line-height:3.5vw}.styles__itemLevel___31dyT-camelCase{margin-top:.6vw;margin-bottom:.4vw;line-height:2.5vw}.styles__itemDesc___2STSA-camelCase,.styles__itemLevel___31dyT-camelCase{font-size:2.1vw;margin-left:.2vw}.styles__itemUpgrade___23uWG-camelCase{font-size:2.8vw;margin-bottom:-.3vw}.styles__playerHeader___3RkEi-camelCase{font-size:11vw}.styles__playerHolder___EyH_Z-camelCase{width:90%}.styles__playerContainer___vKvzn-camelCase{width:100%}}',
      ''
    ]), t.locals = {
      header: 'styles__header___f28tc-camelCase',
      abilityHeader: 'styles__abilityHeader___xC__x-camelCase',
      nextDayButton: 'styles__nextDayButton___19g86-camelCase',
      shopContainer: 'styles__shopContainer___3CrvE-camelCase',
      itemContainer: 'styles__itemContainer___SyHdJ-camelCase',
      itemContainerHover: 'styles__itemContainerHover___YVmof-camelCase',
      plate: 'styles__plate___31ltg-camelCase',
      lockedPlate: 'styles__lockedPlate___EBfom-camelCase',
      plateLevel2: 'styles__plateLevel2___1bwGX-camelCase',
      plateLevel3: 'styles__plateLevel3___1HsUR-camelCase',
      plate4: 'styles__plate4___39MZ2-camelCase',
      plateLevel4: 'styles__plateLevel4___1Lb1g-camelCase',
      plate5: 'styles__plate5___2rTg6-camelCase',
      plateLevel5: 'styles__plateLevel5___10aRQ-camelCase',
      food: 'styles__food___1EGzC-camelCase',
      backgroundContainer: 'styles__backgroundContainer___33E4J-camelCase',
      iconContainer: 'styles__iconContainer___1MksP-camelCase',
      upgradeIcon: 'styles__upgradeIcon___LVSJu-camelCase',
      rightContainer: 'styles__rightContainer___gU_Wk-camelCase',
      itemName: 'styles__itemName___2CiTT-camelCase',
      itemLevel: 'styles__itemLevel___31dyT-camelCase',
      itemDesc: 'styles__itemDesc___2STSA-camelCase',
      itemUpgrade: 'styles__itemUpgrade___23uWG-camelCase',
      playerWrapper: 'styles__playerWrapper___JVydk-camelCase',
      growIn: 'styles__growIn___UZTuV-camelCase',
      playerHeader: 'styles__playerHeader___3RkEi-camelCase',
      playerHolder: 'styles__playerHolder___EyH_Z-camelCase',
      noPlayers: 'styles__noPlayers___1TSWe-camelCase',
      playerContainer: 'styles__playerContainer___vKvzn-camelCase',
      playerBlook: 'styles__playerBlook___3avJQ-camelCase',
      playerColumn: 'styles__playerColumn___2o4Vn-camelCase',
      playerText: 'styles__playerText___2U7pM-camelCase',
      playerCash: 'styles__playerCash___3gsgL-camelCase'
    };
  },
  Whnd: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('/MKj'), r = a('17x9'), i = a.n(r), l = a('wIs1'), c = a('b6Qr'), u = a('vDqi'), f = a.n(u), p = a('anyA'), d = a('iQ+n'), m = a('nkNP'), h = a.n(m), _ = a('GIcp'), y = a.n(_), b = a('e47E'), g = a('SCqF'), v = a('SdQT');
    function w(e) {
      return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t, a, o, s, n, r) {
      try {
        var i = e[n](r), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(o, s);
    }
    function x(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
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
        var a, o = T(e);
        if (t) {
          var s = T(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return E(this, a);
      };
    }
    function E(e, t) {
      return !t || 'object' !== w(t) && 'function' != typeof t ? O(e) : t;
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function T(e) {
      return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var I = function (e) {
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
      }(l, e);
      var t, a, o, n, r, i = S(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          loading: !1,
          popUpMessage: '',
          deleteId: '',
          deletePop: !1,
          deleteEmail: '',
          deleteUserPop: !1,
          freeTrialEmail: '',
          freeTrialPop: !1,
          deleteGroup: '',
          deleteGroupPop: !1
        }, t.deleteSet = t.deleteSet.bind(O(t)), t.deleteUser = t.deleteUser.bind(O(t)), t.freeTrial = t.freeTrial.bind(O(t)), t.deleteGroup = t.deleteGroup.bind(O(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (n = regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  if ((t = e.sent) && (JSON.parse(localStorage.getItem('prefs')).spoofAdmin ? true : [
                      'Tom@Blooket',
                      'Bot'
                    ].includes(t.name))) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 5:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), r = function () {
            var e = this, t = arguments;
            return new Promise(function (a, o) {
              var s = n.apply(e, t);
              function r(e) {
                C(s, a, o, r, i, 'next', e);
              }
              function i(e) {
                C(s, a, o, r, i, 'throw', e);
              }
              r(void 0);
            });
          }, function () {
            return r.apply(this, arguments);
          })
        },
        {
          key: 'deleteSet',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/games', { params: { gameId: this.state.deleteId } }).then(function () {
              t.setState({
                loading: !1,
                deleteId: '',
                deletePop: !1
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'deleteUser',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/users', { params: { email: this.state.deleteEmail.trim().toLowerCase() } }).then(function () {
              t.setState({
                loading: !1,
                deleteEmail: '',
                deleteUserPop: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'freeTrial',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.put('/api/users/free-trial', { email: this.state.freeTrialEmail.toLowerCase() }).then(function () {
              t.setState({
                loading: !1,
                freeTrialEmail: '',
                freeTrialPop: !1
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'deleteGroup',
          value: function (e) {
            var t = this;
            e.preventDefault(), this.setState({ loading: !0 }), f.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, f.a.delete('/api/groups', { params: { groupId: this.state.deleteGroup } }).then(function () {
              t.setState({
                loading: !1,
                deleteGroup: '',
                deleteGroupPop: ''
              });
            }).catch(function (e) {
              return console.error(e);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: c.isMobile ? y.a.mBody : y.a.body,
              style: { backgroundColor: '#3a3a3a' }
            }, s.a.createElement(d.a, {
              title: 'Admin Tom | Blooket',
              desc: 'Pls don\'t come here.'
            }), s.a.createElement(b.a, {
              history: this.props.history,
              page: 'Settings'
            }), s.a.createElement('div', { className: y.a.profileRegularBody }, s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ freeTrialPop: !0 });
              },
              className: h.a.button
            }, 'Free Trial'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deleteGroupPop: !0 });
              },
              className: h.a.button
            }, 'Delete Group'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deletePop: !0 });
              },
              className: h.a.button
            }, 'Delete Set'), s.a.createElement('div', {
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ deleteUserPop: !0 });
              },
              className: h.a.button
            }, 'Delete User')), this.state.loading || this.state.popUpMessage ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : this.state.popUpMessage,
              loading: this.state.loading,
              buttonOne: {
                text: 'Dope',
                click: function () {
                  return e.setState({ popUpMessage: '' });
                },
                color: 'blue'
              }
            }) : null, this.state.deletePop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Set ID:',
              loading: this.state.loading,
              stringValue: this.state.deleteId,
              stringChange: function (t) {
                return e.setState({ deleteId: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.deleteSet,
              buttonOne: {
                text: 'Delete',
                click: this.deleteSet,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deletePop: !1,
                    deleteId: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.deleteUserPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Email:',
              loading: this.state.loading,
              stringValue: this.state.deleteEmail,
              stringChange: function (t) {
                return e.setState({ deleteEmail: t.target.value });
              },
              stringPlaceholder: 'Email',
              onSubmit: this.deleteUser,
              buttonOne: {
                text: 'Delete',
                click: this.deleteUser,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deleteUserPop: !1,
                    deleteEmail: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.freeTrialPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter User Email to Give Free Trial:',
              loading: this.state.loading,
              stringValue: this.state.freeTrialEmail,
              stringChange: function (t) {
                return e.setState({ freeTrialEmail: t.target.value });
              },
              stringPlaceholder: 'Email',
              onSubmit: this.freeTrial,
              buttonOne: {
                text: 'Free',
                click: this.freeTrial,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    freeTrialPop: !1,
                    freeTrialEmail: ''
                  });
                },
                color: 'blue'
              }
            }) : this.state.deleteGroupPop ? s.a.createElement(g.a, {
              text: this.state.loading ? 'Loading...' : 'Enter Group ID:',
              loading: this.state.loading,
              stringValue: this.state.deleteGroup,
              stringChange: function (t) {
                return e.setState({ deleteGroup: t.target.value });
              },
              stringPlaceholder: 'ID',
              onSubmit: this.deleteGroup,
              buttonOne: {
                text: 'Delete',
                click: this.deleteGroup,
                color: 'blue'
              },
              buttonTwo: {
                text: 'Back',
                click: function () {
                  return e.setState({
                    deleteGroupPop: !1,
                    deleteGroup: ''
                  });
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && x(t.prototype, a), o && x(t, o), l;
    }(s.a.Component);
    I.propTypes = {
      history: i.a.object,
      user: i.a.object
    }, t.a = Object(p.c)(Object(l.a)(Object(n.b)()(Object(v.d)(I))));
  },
  Wm7U: function (e, t, a) {
    var o = a('3Yb6');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  X29w: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__stageText___1Fsd5-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}',
      ''
    ]), t.locals = { stageText: 'styles__stageText___1Fsd5-camelCase' };
  },
  YygJ: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.tourSteps__customer___2ktCG-camelCase{left:35%;top:calc(10% + 55px);width:50%}.tourSteps__plate___2lM0V-camelCase{bottom:calc(12.5% + 22vh);left:calc(12.5% + 10vh)}.tourSteps__restock___3Im-H-camelCase{left:50%;bottom:15%;transform:translateX(-50%)}.tourSteps__centered___2lVcu-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___3DxJw-camelCase{top:65px;right:10px}.tourSteps__cereal___2zyWw-camelCase{top:calc(95px + 20.4vw);left:50%;transform:translateX(-50%)}.tourSteps__back___1jOd5-camelCase{top:calc(7vw + 55px);right:1vw}@media only screen and (max-width:800px){.tourSteps__plate___2lM0V-camelCase{bottom:calc(12.5% + 9.25vh);left:calc(20% - 10vh)}.tourSteps__cereal___2zyWw-camelCase{top:calc(109px + 42.8vw)}.tourSteps__back___1jOd5-camelCase{top:calc(32vw + 55px);right:5%}}',
      ''
    ]), t.locals = {
      customer: 'tourSteps__customer___2ktCG-camelCase',
      plate: 'tourSteps__plate___2lM0V-camelCase',
      restock: 'tourSteps__restock___3Im-H-camelCase',
      centered: 'tourSteps__centered___2lVcu-camelCase',
      topRight: 'tourSteps__topRight___3DxJw-camelCase',
      cereal: 'tourSteps__cereal___2zyWw-camelCase',
      back: 'tourSteps__back___1jOd5-camelCase'
    };
  },
  ceum: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return o;
    });
    var o = 'LEAVE_CAFE_SHOP';
  },
  dgWh: function (e, t, a) {
    'use strict';
    a.d(t, 'b', function () {
      return s;
    }), a.d(t, 'a', function () {
      return n;
    });
    var o = a('FfIY');
    function s(e, t, a, s, n, r, i, l, c, u, f, p, d, m, h) {
      return {
        type: o.b,
        cafeId: e,
        setId: t,
        resultId: a,
        hwId: s,
        hwGoal: n,
        questions: r,
        cafeCash: i,
        day: l,
        foods: c,
        items: u,
        corrects: f,
        incorrects: p,
        foodServed: d,
        stage: m,
        foodStocks: h
      };
    }
    function n() {
      return { type: o.a };
    }
  },
  k7NU: function (e, t, a) {
    var o = a('3pgL');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  mAlt: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__cafeBackground___38bvd-camelCase{background-color:#fff;background-image:linear-gradient(90deg,rgba(200,0,0,.5) 50%,transparent 0),linear-gradient(rgba(200,0,0,.5) 50%,transparent 0);background-size:50px 50px}',
      ''
    ]), t.locals = { cafeBackground: 'styles__cafeBackground___38bvd-camelCase' };
  },
  mfKP: function (e, t, a) {
    var o = a('HYi1');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  nkNP: function (e, t, a) {
    var o = a('xZy6');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  ofFp: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mLw1'), u = a('wIs1'), f = a('4HzQ'), p = a('1F66'), d = a.n(p), m = a('ZRP+'), h = a('TSYQ'), _ = a.n(h), y = a('vDqi'), b = a.n(y), g = a('wd/R'), v = a.n(g), w = (a('RiPy'), a('6bnt')), C = a('1b17'), x = a('5gLy'), k = a('9IXX'), S = a('lDJk'), E = a('iQ+n'), O = a('GIcp'), T = a.n(O), I = a('Wm7U'), N = a.n(I), j = a('IAGC'), P = a('DoX5'), B = a('TN+F'), A = a('xZdf'), R = a.n(A), D = a('SdQT');
    function z(e) {
      return (z = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function M(e) {
      return function (e) {
        if (Array.isArray(e))
          return H(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || G(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function L(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], o = !0, s = !1, n = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(o = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
        } catch (e) {
          s = !0, n = e;
        } finally {
          try {
            o || null == i.return || i.return();
          } finally {
            if (s)
              throw n;
          }
        }
        return a;
      }(e, t) || G(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function G(e, t) {
      if (e) {
        if ('string' == typeof e)
          return H(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === a && e.constructor && (a = e.constructor.name), 'Map' === a || 'Set' === a ? Array.from(e) : 'Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? H(e, t) : void 0;
      }
    }
    function H(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    function U(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function q(e, t) {
      return (q = Object.setPrototypeOf || function (e, t) {
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
        var a, o = V(e);
        if (t) {
          var s = V(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return F(this, a);
      };
    }
    function F(e, t) {
      return !t || 'object' !== z(t) && 'function' != typeof t ? J(e) : t;
    }
    function J(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function V(e) {
      return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var Y = function (e) {
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
      var t, a, o, n = Q(r);
      function r(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, r), (t = n.call(this, e)).state = {
          timer: '00:00',
          players: [],
          alerts: [],
          totalCash: 0,
          muted: !!e.host && e.host.muted
        }, t.ok = !1, t.alertContainer = s.a.createRef(), t.getClients = t.getClients.bind(J(t)), t.changeMuted = t.changeMuted.bind(J(t)), t.goNext = t.goNext.bind(J(t)), t.addAlert = t.addAlert.bind(J(t)), t.scrollToBottom = t.scrollToBottom.bind(J(t)), t.audio = new Audio(R.a), t.audio.muted = t.state.muted, t;
      }
      return t = r, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.settings) {
              if (this.audio.volume = 0.6, this.audio.play(), this.audio.addEventListener('ended', function () {
                  e.audio.currentTime = 0, e.audio.play();
                }, !1), b.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
                  id: this.props.host.id,
                  stage: 'cafe'
                }), 'Time' === this.props.host.settings.mode) {
                var t = 60 * this.props.host.settings.amount, a = 4;
                this.setState({ timer: v.a.duration(t, 'seconds').format('mm:ss') }), this.timerInterval = setInterval(function () {
                  t -= 1, e.setState({ timer: v.a.duration(t, 'seconds').format('mm:ss') }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1), a = 4) : a -= 1;
                }, 1000);
              } else
                this.clientsInterval = setInterval(function () {
                  e.getClients(!1);
                }, 4000);
              this.alertContainer = document.querySelector('#alerts');
            }
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            var e = this;
            clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', B.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
              e.audio.currentTime = 0, e.audio.play();
            }, !1);
          }
        },
        {
          key: 'getClients',
          value: function (e) {
            var t = this;
            this.props.firebase.getDatabaseVal(this.props.host.id, 'c', function (a) {
              var o = a || {};
              if (o && 0 !== Object.keys(o).length) {
                var s = !1, n = [];
                Object.entries(o).forEach(function (e) {
                  var a = L(e, 2), o = a[0], s = a[1];
                  if (n.push({
                      name: o,
                      blook: s.b,
                      cash: s.ca || 0,
                      toAttack: s.tat
                    }), s.up) {
                    var r = s.up.split(':');
                    2 === r.length && t.addAlert(o, s.b, 'upgraded '.concat(r[0], ' to Level ').concat(r[1]), r[0]);
                  }
                });
                var r = n.map(function (e) {
                  return e.name;
                });
                n.forEach(function (e) {
                  if (e.toAttack) {
                    var a = e.toAttack.split(':'), o = r.indexOf(a[0]);
                    if (-1 === o)
                      return;
                    var s = n[o];
                    if (a.length < 2)
                      return;
                    t.props.firebase.setVal({
                      id: t.props.host.id,
                      path: 'c/'.concat(s.name, '/at'),
                      val: ''.concat(e.name, ':').concat(e.blook, ':').concat(a[1])
                    }), t.props.firebase.removeVal(t.props.host.id, 'c/'.concat(e.name, '/tat'));
                  }
                }), n.sort(function (e, t) {
                  return t.cash - e.cash;
                });
                for (var i = 0, l = 0; l < n.length; l++)
                  n[l].place = l + 1, i += n[l].cash, 'Cash' === t.props.host.settings.mode && n[l].cash >= t.props.host.settings.amount && (s = !0);
                s || e ? t.goNext([].concat(n)) : t.setState({
                  players: n,
                  totalCash: i
                });
              }
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
          key: 'goNext',
          value: function (e) {
            var t = this;
            this.props.updateStandings(e);
            var a = e.map(function (e) {
              return {
                n: e.name,
                b: e.blook,
                c: e.cash,
                p: e.place
              };
            });
            this.props.firebase.setVal({
              id: this.props.host.id,
              path: 'st',
              val: a
            }, function () {
              b.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                id: t.props.host.id,
                stage: 'fin'
              }, function () {
                t.ok = !0, t.props.history.push('/host/cafe/final');
              });
            });
          }
        },
        {
          key: 'addAlert',
          value: function (e, t, a, o) {
            var s = [].concat(M(this.state.alerts), [{
                  name: e,
                  blook: t,
                  msg: a,
                  endBlook: o
                }]), n = Array.from(new Set(s.map(function (e) {
                return ''.concat(e.name, ' ').concat(e.msg);
              }))).map(function (e) {
                return s.find(function (t) {
                  return ''.concat(t.name, ' ').concat(t.msg) === e;
                });
              });
            n.length > 15 && n.splice(0, 1), this.setState({ alerts: n }, this.scrollToBottom);
          }
        },
        {
          key: 'scrollToBottom',
          value: function () {
            this.alertContainer.scrollTop = this.alertContainer.scrollHeight;
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.host && this.props.host.settings ? s.a.createElement('div', {
              className: T.a.body,
              style: { overflow: 'hidden' }
            }, s.a.createElement(E.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), s.a.createElement(k.a, {
              left: 'Blooket',
              center: 'Time' === this.props.host.settings.mode ? this.state.timer : 'Goal: $'.concat(Object(B.n)(this.props.host.settings.amount)),
              right: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
              muted: this.state.muted,
              changeMuted: this.changeMuted,
              onRightClick: function () {
                return e.getClients(!0);
              }
            }), s.a.createElement('div', { className: T.a.hostRegularBody }, s.a.createElement(j.a, { level: 2 }), s.a.createElement(d.a, {
              data: this.state.players,
              keyAccessor: function (e) {
                return e.name;
              },
              start: function (e) {
                return {
                  opacity: 1,
                  x: -60,
                  y: 11 * (e.place - 1)
                };
              },
              enter: function (e) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [11 * (e.place - 1)],
                  timing: {
                    duration: 1000,
                    ease: m.a
                  }
                };
              },
              update: function (e) {
                return {
                  opacity: [1],
                  x: [0],
                  y: [11 * (e.place - 1)],
                  timing: {
                    duration: 500,
                    ease: m.a
                  }
                };
              },
              leave: function () {
                return {
                  opacity: [0.000001],
                  x: [-60],
                  timing: 1000
                };
              }
            }, function (e) {
              return s.a.createElement('div', { className: _()(N.a.left, N.a.invisibleScrollbar) }, e.map(function (e) {
                var t = e.key, a = e.data, o = e.state, n = o.x, r = o.y, i = o.opacity;
                return s.a.createElement('div', {
                  key: t,
                  style: {
                    opacity: i,
                    transform: 'translate('.concat(n, 'vw, ').concat(r, 'vh)')
                  },
                  className: N.a.standingRow
                }, s.a.createElement(f.Textfit, {
                  className: N.a.placeText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: Object(B.C)('5vw')
                }, a.place), s.a.createElement('div', { className: N.a.superPlaceText }, Object(B.g)(a.place)), s.a.createElement(P.a, {
                  name: a.blook,
                  className: N.a.blookBox
                }), s.a.createElement(f.Textfit, {
                  className: N.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: Object(B.C)('4vw')
                }, a.name), s.a.createElement(f.Textfit, {
                  className: N.a.cashText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  min: 1,
                  max: Object(B.C)('5vw')
                }, '$'.concat(Object(B.v)(a.cash))));
              }));
            }), s.a.createElement('div', { className: N.a.chatroom }, s.a.createElement('div', {
              className: _()(N.a.chatroomInside, N.a.invisibleScrollbar),
              id: 'alerts'
            }, this.state.alerts[0] ? this.state.alerts.map(function (e, t) {
              return s.a.createElement(S.a, {
                key: t,
                name: e.name,
                blook: e.blook,
                message: e.msg,
                endBlook: e.endBlook,
                glitchInfo: e.glitchInfo,
                isWhite: !0
              });
            }) : s.a.createElement('div', { className: N.a.noAlerts }, s.a.createElement('i', { className: _()(N.a.noAlertsIcon, 'far fa-clock') }), s.a.createElement('div', { className: N.a.noAlertsText }, 'Waiting For Action...')))), s.a.createElement(f.Textfit, {
              className: N.a.totalCashText,
              mode: 'single',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(B.C)('7vw')
            }, '$'.concat(Object(B.n)(this.state.totalCash))))) : s.a.createElement(c.a, { to: '/dashboard' });
          }
        }
      ]) && U(t.prototype, a), o && U(t, o), r;
    }(s.a.Component);
    Y.propTypes = {
      host: l.a.object,
      firebase: l.a.object,
      history: l.a.object,
      updateStandings: l.a.func.isRequired,
      setMuted: l.a.func.isRequired,
      deleteHost: l.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(n.b)({
        updateStandings: w.b,
        setMuted: C.a,
        deleteHost: x.c
      }, e);
    })(Object(D.d)(Y)));
  },
  w16W: function (e, t, a) {
    var o = a('YygJ');
    'string' == typeof o && (o = [[
        e.i,
        o,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(o, s);
    o.locals && (e.exports = o.locals);
  },
  xZy6: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__button___3XEe2-camelCase{background-color:#0bc2cf;padding:5px 10px;font-size:18px;cursor:pointer;outline:none;display:inline-block}.styles__button___3XEe2-camelCase,.styles__text___2FnWI-camelCase{color:#fff;margin:20px}.styles__text___2FnWI-camelCase{font-size:20px}',
      ''
    ]), t.locals = {
      button: 'styles__button___3XEe2-camelCase',
      text: 'styles__text___2FnWI-camelCase'
    };
  },
  z3gw: function (e, t, a) {
    'use strict';
    var o = a('q1tI'), s = a.n(o), n = a('ANjH'), r = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mLw1'), u = a('wIs1'), f = a('vDqi'), p = a.n(f), d = a('TSYQ'), m = a.n(d), h = a('5gLy'), _ = a('GIcp'), y = a.n(_), b = a('Oc9b'), g = a.n(b), v = a('pcIS'), w = a('TN+F'), C = a('iQ+n'), x = a('SdQT');
    function k(e) {
      return (k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function S(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], o = !0, s = !1, n = void 0;
        try {
          for (var r, i = e[Symbol.iterator](); !(o = (r = i.next()).done) && (a.push(r.value), !t || a.length !== t); o = !0);
        } catch (e) {
          s = !0, n = e;
        } finally {
          try {
            o || null == i.return || i.return();
          } finally {
            if (s)
              throw n;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return E(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return E(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, o = new Array(t); a < t; a++)
        o[a] = e[a];
      return o;
    }
    function O(e, t) {
      for (var a = 0; a < t.length; a++) {
        var o = t[a];
        o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }
    function T(e, t) {
      return (T = Object.setPrototypeOf || function (e, t) {
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
        var a, o = j(e);
        if (t) {
          var s = j(this).constructor;
          a = Reflect.construct(o, arguments, s);
        } else
          a = o.apply(this, arguments);
        return N(this, a);
      };
    }
    function N(e, t) {
      return !t || 'object' !== k(t) && 'function' != typeof t ? function (e) {
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
        }), t && T(e, t);
      }(r, e);
      var t, a, o, n = I(r);
      function r(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, r), (t = n.call(this, e)).state = {
          ready: !1,
          historyId: '',
          standings: [],
          muted: !!e.host && e.host.muted
        }, t;
      }
      return t = r, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
              var t = JSON.parse(JSON.stringify(this.props.host));
              this.setState({ standings: t.standings }, function () {
                e.startTimeout = setTimeout(function () {
                  var a = {};
                  e.props.firebase.getDatabaseVal(t.id, 'c', function (o) {
                    var s = o || {};
                    Object.entries(s).forEach(function (e) {
                      var t = S(e, 2), o = t[0], s = t[1], n = {};
                      if (s.i)
                        if (Array.isArray(s.i))
                          for (var r = 0; r < s.i.length; r++) {
                            var i = s.i[r];
                            i && (n[r] = i);
                          }
                        else
                          n = s.i;
                      else
                        n = {};
                      var l = {};
                      if (s.c)
                        if (Array.isArray(s.c))
                          for (var c = 0; c < s.c.length; c++) {
                            var u = s.c[c];
                            u && (l[c] = u);
                          }
                        else
                          l = s.c;
                      else
                        l = {};
                      a[o] = {
                        corrects: l,
                        incorrects: n
                      };
                    }), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), window.removeEventListener('beforeunload', w.u), e.waitTimeout = setTimeout(function () {
                      e.state.standings.length > 0 && (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/history', {
                        standings: t.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            cash: e.cash,
                            corrects: a[e.name] ? a[e.name].corrects : {},
                            incorrects: a[e.name] ? a[e.name].incorrects : {}
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
            return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? s.a.createElement('div', {
              className: m()(y.a.hostBody, g.a.cafeBackground),
              style: { overflowY: this.state.ready ? 'auto' : 'hidden' }
            }, s.a.createElement(C.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), this.state.standings.length > 0 ? s.a.createElement(v.a, {
              standings: this.state.standings,
              stats: this.state.standings.map(function (e) {
                return '$'.concat(Object(w.n)(e.cash));
              }),
              gameId: this.props.gameId,
              historyId: this.state.historyId,
              muted: this.state.muted,
              theme: 'cafe'
            }) : null) : s.a.createElement(c.a, { to: '/dashboard' });
          }
        }
      ]) && O(t.prototype, a), o && O(t, o), r;
    }(s.a.Component);
    P.propTypes = {
      gameId: l.a.string,
      host: l.a.object,
      firebase: l.a.object,
      deleteHost: l.a.func.isRequired
    };
    t.a = Object(u.a)(Object(r.b)(function (e) {
      return {
        host: e.hosts.host,
        gameId: e.hosts.id
      };
    }, function (e) {
      return Object(n.b)({ deleteHost: h.c }, e);
    })(Object(x.d)(P)));
  }
}]);
