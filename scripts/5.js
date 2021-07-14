(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{
  '18BW': function (e, t, s) {
    (t = e.exports = s('JPst')(!1)).push([
      e.i,
      '.styles__mainContainer___2c8t--camelCase{display:flex;flex-direction:column;margin:25px auto;width:90%;min-width:400px;max-width:800px}.styles__mainHeader___CMSsw-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;color:#3a3a3a}.styles__testContainer___1QzFP-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:10px auto;width:100%;box-sizing:border-box;padding:10px;min-width:400px;display:flex;flex-direction:row;align-items:center}.styles__text___IoCGj-camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif;margin:10px 0 20px}.styles__testIcon___1g-vd-camelCase{font-size:40px;width:50px;height:50px;display:flex;justify-content:center;align-items:center;margin:auto 15px;color:#0bc2cf}.styles__spin___1j7K0-camelCase{-webkit-animation:styles__spin___1j7K0-camelCase 2s linear infinite;animation:styles__spin___1j7K0-camelCase 2s linear infinite}@-webkit-keyframes styles__spin___1j7K0-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes styles__spin___1j7K0-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__testInfo___p4AEB-camelCase{color:#3a3a3a;text-align:left;font-size:18px;font-family:Nunito,sans-serif}.styles__testTitle___1-j-A-camelCase{font-weight:700;font-size:22px}@media only screen and (max-width:600px){.styles__mainContainer___2c8t--camelCase{min-width:320px;margin:auto}.styles__testContainer___1QzFP-camelCase{min-width:290px;padding:15px 15px 20px}}',
      ''
    ]), t.locals = {
      mainContainer: 'styles__mainContainer___2c8t--camelCase',
      mainHeader: 'styles__mainHeader___CMSsw-camelCase',
      testContainer: 'styles__testContainer___1QzFP-camelCase',
      text: 'styles__text___IoCGj-camelCase',
      testIcon: 'styles__testIcon___1g-vd-camelCase',
      spin: 'styles__spin___1j7K0-camelCase',
      testInfo: 'styles__testInfo___p4AEB-camelCase',
      testTitle: 'styles__testTitle___1-j-A-camelCase'
    };
  },
  '8FDj': function (e, t, s) {
    'use strict';
    var a = s('q1tI'), i = s.n(a), o = s('ANjH'), n = s('/MKj'), r = s('wIs1'), l = s('b6Qr'), c = s('vDqi'), h = s.n(c), u = s('TSYQ'), d = s.n(u), p = s('GIcp'), f = s.n(p), m = s('oTBF'), g = s.n(m), y = s('dJL0'), w = s('iQ+n'), _ = s('SdQT');
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function b(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), s.push.apply(s, a);
      }
      return s;
    }
    function x(e, t, s) {
      return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s, e;
    }
    function k(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var s = [], a = !0, i = !1, o = void 0;
        try {
          for (var n, r = e[Symbol.iterator](); !(a = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); a = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            a || null == r.return || r.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return s;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return C(e, t);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === s && e.constructor && (s = e.constructor.name);
        if ('Map' === s || 'Set' === s)
          return Array.from(e);
        if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return C(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function C(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var s = 0, a = new Array(t); s < t; s++)
        a[s] = e[s];
      return a;
    }
    function S(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function T(e, t) {
      return (T = Object.setPrototypeOf || function (e, t) {
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
        var s, a = E(e);
        if (t) {
          var i = E(this).constructor;
          s = Reflect.construct(a, arguments, i);
        } else
          s = a.apply(this, arguments);
        return R(this, s);
      };
    }
    function R(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? O(e) : t;
    }
    function O(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function E(e) {
      return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var B = [
        {
          id: 'blooket-firewall',
          title: 'Firewall check on *.blooket.com',
          desc: 'Used to join games and access the site',
          test: function () {
            return new Promise(function (e, t) {
              h.a.get('/api/news').then(e).catch(function (e) {
                console.log(e), t();
              });
            });
          }
        },
        {
          id: 'firebase-firewall',
          title: 'Firewall check on *.firebaseio.com',
          desc: 'Used to connect to and play live games',
          test: function (e) {
            return new Promise(function (t, s) {
              try {
                e.props.firebase.getDatabaseVal(0, '', function () {
                  t();
                });
              } catch (e) {
                console.log(e), s();
              }
            });
          }
        },
        {
          id: 'localstorage',
          title: 'LocalStorage Access',
          desc: 'Used to track login access',
          test: function () {
            return new Promise(function (e, t) {
              if (window && window.localStorage && window.localStorage.setItem && window.localStorage.getItem) {
                if (window.localStorage.setItem('TEST-KEY', 'test'), 'test' !== window.localStorage.getItem('TEST-KEY'))
                  return void t();
                e();
              } else
                t();
            });
          }
        },
        {
          id: 'websocket',
          title: 'Browser WebSocket connection',
          desc: 'Used to participate in live games',
          test: function () {
            return new Promise(function (e, t) {
              'WebSocket' in window || 'MozWebSocket' in window ? e() : t();
            });
          }
        },
        {
          id: 'cloudinary',
          title: 'Firewall check on res.cloudinary.com',
          desc: 'Used to view and manage user-uploaded images',
          test: function () {
            return new Promise(function (e, t) {
              h.a.get('https://res.cloudinary.com/blooket/image/upload/v1556829562/Blooks/chick.svg').then(e).catch(t);
            });
          }
        },
        {
          id: 'unsplash',
          title: 'Firewall check on images.unsplash.com',
          desc: 'Used to view Unsplash.com images',
          test: function () {
            return new Promise(function (e, t) {
              h.a.get('https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NjkzOH0').then(e).catch(t);
            });
          }
        },
        {
          id: 'aws',
          title: 'Firewall check on blooket.s3.us-east-2.amazonaws.com',
          desc: 'Used to view Blooks and listen to music',
          test: function () {
            return new Promise(function (e, t) {
              h.a.get('https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg').then(e).catch(function (e) {
                console.log(e), t();
              });
            });
          }
        }
      ], N = function (e) {
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
        }(n, e);
        var t, s, a, o = M(n);
        function n(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, n), (t = o.call(this, e)).state = { tests: {} }, t.checkTest = t.checkTest.bind(O(t)), t;
        }
        return t = n, (s = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this, t = [];
              B.forEach(function (e) {
                t[e.id] = {
                  title: e.title,
                  desc: e.desc,
                  test: e.test,
                  status: 'loading'
                };
              }), this.setState({ tests: t }, function () {
                Object.entries(e.state.tests).forEach(function (t) {
                  var s = k(t, 2), a = s[0];
                  s[1].test(e).then(function () {
                    e.checkTest(a, 'passed');
                  }).catch(function () {
                    e.checkTest(a, 'failed');
                  });
                });
              });
            }
          },
          {
            key: 'checkTest',
            value: function (e, t) {
              var s = function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? b(Object(s), !0).forEach(function (t) {
                    x(e, t, s[t]);
                  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : b(Object(s)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                  });
                }
                return e;
              }({}, this.state.tests);
              s[e].status = t, this.setState({
                tests: s,
                allPassed: Object.values(s).filter(function (e) {
                  return 'passed' === e.status;
                }).length === B.length
              });
            }
          },
          {
            key: 'render',
            value: function () {
              return i.a.createElement('div', { className: l.isMobile ? f.a.mBody : f.a.body }, i.a.createElement(w.a, {
                title: 'Debug | Blooket',
                desc: 'Debug common Blooket issues by making sure you can connect to all pages.'
              }), i.a.createElement(y.a, null), i.a.createElement('div', { className: f.a.regularBody }, i.a.createElement('div', { className: g.a.mainContainer }, i.a.createElement('div', { className: g.a.mainHeader }, 'Debug Page'), i.a.createElement('div', { className: g.a.text }, '\n                This page can be used to debug Blooket issues. If any of the below tests fail,\n                then contact your school\u2019s tech department with this page so that they can\n                change browser or firewall settings. Doing this will allow all the below\n                tests to pass and Blooket to work!\n              '), this.state.allPassed ? i.a.createElement('div', {
                className: g.a.testContainer,
                style: { backgroundColor: '#b9ecac' }
              }, i.a.createElement('i', {
                className: d()('fas fa-check', g.a.testIcon),
                style: { color: '#4bc22e' }
              }), i.a.createElement('div', { className: g.a.testInfo }, i.a.createElement('div', { className: g.a.testTitle }, 'All Tests Passed!'), 'You are correctly set up to use Blooket!')) : null, Object.entries(this.state.tests).map(function (e) {
                var t = k(e, 2), s = t[0], a = t[1];
                return i.a.createElement('div', {
                  className: g.a.testContainer,
                  key: s
                }, 'loading' === a.status ? i.a.createElement('i', { className: d()('fas fa-spinner', g.a.testIcon, g.a.spin) }) : 'passed' === a.status ? i.a.createElement('i', {
                  className: d()('fas fa-check', g.a.testIcon),
                  style: { color: '#4bc22e' }
                }) : i.a.createElement('i', {
                  className: d()('fas fa-times', g.a.testIcon),
                  style: { color: '#c43a35' }
                }), i.a.createElement('div', { className: g.a.testInfo }, i.a.createElement('div', { className: g.a.testTitle }, a.title), a.desc));
              }), i.a.createElement('div', { style: { height: 20 } }))));
            }
          }
        ]) && S(t.prototype, s), a && S(t, a), n;
      }(i.a.Component);
    N.propTypes = {};
    t.a = Object(r.a)(Object(n.b)(function () {
      return {};
    }, function (e) {
      return Object(o.b)({}, e);
    })(Object(_.d)(N)));
  },
  Aq3b: function (e, t, s) {
    (t = e.exports = s('JPst')(!1)).push([
      e.i,
      '.tourSteps__centered___3QpJc-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__health___mcEse-camelCase{top:125px;right:10px}.tourSteps__topRight___DfuDG-camelCase{top:65px;right:10px}.tourSteps__shop___EGuqR-camelCase{right:300px}.tourSteps__shop___EGuqR-camelCase,.tourSteps__stats___3LAik-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__stats___3LAik-camelCase{left:250px}.tourSteps__nextRound___19hrJ-camelCase{right:300px;bottom:25px}@media only screen and (max-width:800px){.tourSteps__health___mcEse-camelCase{top:auto;bottom:70px}.tourSteps__shop___EGuqR-camelCase{right:50%;top:auto;bottom:80px;transform:translateX(50%)}.tourSteps__stats___3LAik-camelCase{left:50%;top:50%;transform:translate(-50%,-50%)}.tourSteps__nextRound___19hrJ-camelCase{bottom:auto;top:130px;right:20px}}',
      ''
    ]), t.locals = {
      centered: 'tourSteps__centered___3QpJc-camelCase',
      health: 'tourSteps__health___mcEse-camelCase',
      topRight: 'tourSteps__topRight___DfuDG-camelCase',
      shop: 'tourSteps__shop___EGuqR-camelCase',
      stats: 'tourSteps__stats___3LAik-camelCase',
      nextRound: 'tourSteps__nextRound___19hrJ-camelCase'
    };
  },
  B2Xb: function (e, t, s) {
    var a = s('Aq3b');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    s('aET+')(a, i);
    a.locals && (e.exports = a.locals);
  },
  ESOo: function (e, t, s) {
    'use strict';
    var a = s('q1tI'), i = s.n(a), o = s('/MKj'), n = s('ANjH'), r = s('17x9'), l = s.n(r), c = s('mf+E'), h = s('wIs1'), u = s('b6Qr'), d = s('ixhd'), p = s.n(d), f = s('TSYQ'), m = s.n(f), g = s('vDqi'), y = s.n(g), w = s('iQ+n'), _ = s('Qv3B'), v = s.n(_), b = s('GIcp'), x = s.n(b), k = s('2g2H'), C = s('SdQT'), S = s('FPhr'), T = s('6hcl'), M = s('SCqF'), R = s('vPiy'), O = s('TN+F'), E = s('anyA'), B = s('R1k4'), N = s('K69b'), P = s('QAEw'), j = s('B2Xb'), I = s.n(j), D = s('bMSx'), z = s('pMbe'), F = function (e, t, s, a) {
        return s.createVector(Math.floor(e / a), Math.floor(t / a));
      }, A = function (e, t, s, a, i, o) {
        return e < s || t < a || e > s + i || t > a + o;
      }, q = function (e, t) {
        var s = e.split(',');
        return t.createVector(parseInt(s[0], 10), parseInt(s[1], 10));
      }, H = function (e, t) {
        return ''.concat(e, ',').concat(t);
      }, W = function (e, t, s, a) {
        var i = [];
        return 0 !== s && e[s - 1][t] === a && i.push(H(t, s - 1)), 0 !== t && e[s][t - 1] === a && i.push(H(t - 1, s)), s !== e.length - 1 && e[s + 1][t] === a && i.push(H(t, s + 1)), t !== e[s].length - 1 && e[s][t + 1] === a && i.push(H(t + 1, s)), i;
      }, L = function (e, t, s) {
        if (!e || 0 === e.length)
          return null;
        for (var a = 10000, i = e[0], o = 0; o < e.length; o++) {
          var n = e[o];
          if (!s || !s.includes(n)) {
            var r = t.dist(n.pos);
            r < a && (a = r, i = n);
          }
        }
        return i;
      }, G = function (e, t, s) {
        for (var a = [], i = 0; i < e; i++) {
          a[i] = [];
          for (var o = 0; o < t; o++)
            a[i][o] = s;
        }
        return a;
      }, U = function (e, t, s) {
        return e > Math.min(t, s) && e < Math.max(t, s);
      }, V = function (e, t, s, a) {
        return a.createVector(e * s + s / 2, t * s + s / 2);
      }, Q = function (e, t, s, a, i, o) {
        var n = V(s, a, i, o), r = Math.max(0.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
        return U(e, n.x - r, n.x + r) && U(t, n.y - r, n.y + r);
      }, K = function (e, t, s, a, i, o, n) {
        var r = V(s, a, i, o), l = Math.max(0.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
        return 'x' === n ? U(e, r.x - 2 * l, r.x + 2 * l) && U(t, r.y - l, r.y + l) : U(e, r.x - l, r.x + l) && U(t, r.y - 2 * l, r.y + 2 * l);
      }, J = function (e, t, s, a, i) {
        return Math.pow(e - s, 2) + Math.pow(t - a, 2) < Math.pow(i, 2);
      }, Y = function (e, t, s, a, i) {
        for (var o = [], n = 0; n < a.length; n++) {
          var r = a[n];
          J(r.pos.x, r.pos.y, e, t, (s + 0.5) * i) && o.push(r);
        }
        return o;
      }, X = function (e, t, s, a, i) {
        var o = 10000, n = 10000, r = e[0];
        return e.forEach(function (e) {
          var l = F(e.pos.x, e.pos.y, a, i), c = t[l.y][l.x], h = 10000, u = s[l.y][l.x];
          1 === u && (h = e.pos.x - l.x * i), 2 === u && (h = e.pos.y - l.y * i), 3 === u && (h = (l.x + 1) * i - e.pos.x), 4 === u && (h = (l.y + 1) * i - e.pos.y), (c < o || c === o && h < n) && (o = c, n = h, r = e);
        }), r;
      }, Z = function (e, t, s, a, i) {
        return U(e, 0, s * i) && U(t, 0, a * i);
      }, $ = function (e, t, s) {
        return Math.abs((e.x * (t.y - s.y) + t.x * (s.y - e.y) + s.x * (e.y - t.y)) / 2);
      }, ee = function (e, t, s, a) {
        var i = 0;
        i += $(t, e, s), i += $(s, e, a), i += $(a, e, t);
        var o = $(t, s, a);
        return Math.round(i) === Math.round(o);
      };
    function te(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    var se = function () {
      function e(t, s, a, i, o, n, r) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.p5 = a, this.images = o, this.updateDmg = r, this.width = 0.5, this.img = '', this.alive = !0, this.effects = [], this.name = 'enemy', this.sound = 'pop', this.pos = this.p5.createVector(t * i + i / 2, s * i + i / 2), this.vel = this.p5.createVector(0, 0), this.dir = this.p5.createVector(0, 0), this.danceAngle = 0, this.freezeTime = 0, this.slowLevel = 0, this.blowTime = 0, this.lastTile = [], this.health = n, this.maxHealth = n, this.speed = 1, this.onCreate();
      }
      var t, s, a;
      return t = e, (s = [
        {
          key: 'getDrawData',
          value: function () {
            return this.health > 5000 ? {
              img: this.images['Light Slime Monster'],
              width: 2.3,
              speed: 0.5
            } : this.health > 1000 ? {
              img: this.images['Dark Slime Monster'],
              width: 1.7,
              speed: 0.5
            } : this.health > 300 ? {
              img: this.images['Red Slime Monster'],
              width: 1.2,
              speed: 0.75
            } : this.health > 120 ? {
              img: this.images['Slime Monster'],
              width: 1,
              speed: 0.75
            } : this.health > 85 ? {
              img: this.images.Black,
              width: 0.3,
              speed: 1.5
            } : this.health > 40 ? {
              img: this.images.Red,
              width: 0.7,
              speed: 0.75
            } : this.health > 20 ? {
              img: this.images.Green,
              width: 0.6,
              speed: 1.5
            } : this.health > 10 ? {
              img: this.images.Orange,
              width: 0.55,
              speed: 2.25
            } : this.health > 5 ? {
              img: this.images.Lime,
              width: 0.5,
              speed: 2
            } : this.health > 2 ? {
              img: this.images.Purple,
              width: 0.45,
              speed: 1.75
            } : this.health > 1 ? {
              img: this.images.Pink,
              width: 0.4,
              speed: 1.5
            } : {
              img: this.images.Blue,
              width: 0.35,
              speed: 1.25
            };
          }
        },
        {
          key: 'draw',
          value: function (e) {
            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.danceAngle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.freezeTime > 0 ? this.p5.image(this.images.Snowflake, 0, this.width * e * -0.00226833, this.width * e * 0.7, this.width * e * 0.7) : this.slowLevel > 0 && this.p5.image(this.images.Snowflake, 0, this.width * e * -0.00226833, this.width * e * 0.45, this.width * e * 0.45), this.p5.pop();
          }
        },
        {
          key: 'dealDamage',
          value: function (e) {
            var t = Math.round(e);
            this.updateDmg(Math.max(0, Math.min(this.health, t))), this.health > 0 && (this.health -= t), this.health <= 0 && this.onKilled();
          }
        },
        {
          key: 'isDead',
          value: function () {
            return !this.alive;
          }
        },
        {
          key: 'kill',
          value: function () {
            this.alive = !1;
          }
        },
        {
          key: 'onCreate',
          value: function () {
            this.health = this.maxHealth;
          }
        },
        {
          key: 'onKilled',
          value: function () {
            this.alive && this.kill();
          }
        },
        {
          key: 'dance',
          value: function () {
            this.danceAngle = 2 * Math.PI;
          }
        },
        {
          key: 'freeze',
          value: function (e) {
            this.freezeTime = e;
          }
        },
        {
          key: 'blowBack',
          value: function () {
            this.blowTime = 15;
          }
        },
        {
          key: 'slow',
          value: function () {
            this.slowLevel = 3;
          }
        },
        {
          key: 'pxSpeed',
          value: function (e, t) {
            return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30);
          }
        },
        {
          key: 'steer',
          value: function (e, t, s, a, i) {
            var o = F(this.pos.x, this.pos.y, this.p5, e);
            if (!A(o.x, o.y, 0, 0, t, s)) {
              var n = a[o.y][o.x];
              if (0 === n && (o.x !== i.x || o.y !== i.y))
                return this.pos.x = this.lastTile[0] * e + e / 2, void (this.pos.y = this.lastTile[1] * e + e / 2);
              if (K(this.pos.x, this.pos.y, o.x, o.y, e, this.p5, 0 === this.dir.x ? 'x' : 'y')) {
                if (0 !== n && (this.lastTile = [
                    o.x,
                    o.y
                  ]), null === n)
                  return;
                1 === n ? this.dir = this.p5.createVector(-1, 0) : 2 === n ? this.dir = this.p5.createVector(0, -1) : 3 === n ? this.dir = this.p5.createVector(1, 0) : 4 === n && (this.dir = this.p5.createVector(0, 1));
              }
            }
          }
        },
        {
          key: 'update',
          value: function (e, t) {
            var s = this.getDrawData();
            this.width = s.width, this.img = s.img, this.speed = s.speed;
            var a = t ? 2 : 1;
            if (this.danceAngle > 0 && (this.danceAngle = Math.max(0, this.danceAngle - 2 * Math.PI / (20 / a))), this.freezeTime > 0 && (this.freezeTime = Math.max(0, this.freezeTime - a)), this.blowTime > 0 && (this.blowTime = Math.max(0, this.blowTime - a)), this.slowLevel > 0 && (this.slowLevel = Math.max(0, this.slowLevel - a)), 0 === this.danceAngle && 0 === this.freezeTime) {
              var i = this.pxSpeed(e, t);
              this.vel = this.p5.createVector(this.dir.x * i, this.dir.y * i), this.vel.limit(i * (this.slowLevel > 0 ? 0.5 : this.speed)), this.blowTime > 0 ? this.pos.sub(this.p5.createVector(0.35 * this.vel.x, 0.35 * this.vel.y)) : this.pos.add(this.vel);
            }
          }
        }
      ]) && te(t.prototype, s), a && te(t, a), e;
    }();
    function ae(e) {
      return (ae = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function ie(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function');
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && oe(e, t);
    }
    function oe(e, t) {
      return (oe = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function ne(e) {
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
        var s, a = le(e);
        if (t) {
          var i = le(this).constructor;
          s = Reflect.construct(a, arguments, i);
        } else
          s = a.apply(this, arguments);
        return re(this, s);
      };
    }
    function re(e, t) {
      return !t || 'object' !== ae(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function le(e) {
      return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function ce(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function he(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function ue(e, t, s) {
      return t && he(e.prototype, t), s && he(e, s), e;
    }
    var de = function () {
        function e(t, s, a, i) {
          ce(this, e), this.p5 = i, this.tileSize = a, this.pos = t.copy(), this.speed = s, this.vel = this.p5.createVector(Object(O.p)(-1, 1) * this.speed * a / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30), Object(O.p)(-1, 1) * this.speed * a / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)), this.lifespan = 255, this.decay = 2, this.color = [
            0,
            0,
            0
          ], this.radius = 4;
        }
        return ue(e, [
          {
            key: 'draw',
            value: function () {
              this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan);
              var e = this.radius * this.tileSize / 24 * 2;
              this.p5.ellipse(this.pos.x, this.pos.y, e, e);
            }
          },
          {
            key: 'isDead',
            value: function () {
              return this.lifespan < 0;
            }
          },
          {
            key: 'run',
            value: function (e) {
              this.update(e), this.draw();
            }
          },
          {
            key: 'update',
            value: function (e) {
              this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1);
            }
          }
        ]), e;
      }(), pe = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(230, 255),
            Object(O.p)(100, 160),
            Object(O.p)(200, 240)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), fe = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(20, 23), n.color = [
            Object(O.p)(190, 255),
            Object(O.p)(0, 40),
            Object(O.p)(0, 70)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), me = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(0, 80),
            Object(O.p)(150, 200),
            Object(O.p)(90, 130)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), ge = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(240, 255),
            Object(O.p)(215, 245),
            Object(O.p)(0, 70)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), ye = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(110, 140),
            Object(O.p)(0, 40),
            Object(O.p)(110, 160)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), we = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(140, 150),
            Object(O.p)(55, 90),
            Object(O.p)(170, 205)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), _e = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Math.round(Object(O.p)(0, 255)),
            100,
            50
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return ue(s, [{
            key: 'draw',
            value: function () {
              this.p5.noStroke();
              var e = this.p5.color('hsla('.concat(this.color[0], ', ').concat(this.color[1], '%, ').concat(this.color[2], '%, ').concat(Math.max(0, this.lifespan / 255), ')'));
              this.p5.fill(e);
              var t = this.radius * this.tileSize / 24 * 2;
              this.p5.ellipse(this.pos.x, this.pos.y, t, t);
            }
          }]), s;
      }(de), ve = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(14, 18), n.color = [
            Object(O.p)(200, 255),
            Object(O.p)(0, 127),
            Object(O.p)(0, 31)
          ], n.radius = Object(O.q)(2, 6), n.angle = Object(O.p)(0, 2 * Math.PI), n.angleVel = Object(O.p)(-0.5, 0.5), n;
        }
        return ue(s, [
          {
            key: 'draw',
            value: function () {
              this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
              var e = this.radius * this.tileSize / 24 * 2;
              this.p5.rectMode(this.p5.CENTER), this.p5.rect(0, 0, e, e), this.p5.pop();
            }
          },
          {
            key: 'update',
            value: function (e) {
              this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1);
            }
          }
        ]), s;
      }(de), be = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 12), r.speed = Object(O.p)(r.speed / 2.5, r.speed), r.vel = o.createVector(Math.cos(n + Math.PI / 2 + Object(O.p)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30), Math.sin(n + Math.PI / 2 + Object(O.p)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30)), r;
        }
        return s;
      }(ve), xe = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o, n)).decay = Object(O.p)(8, 11), r.color = [
            Object(O.p)(180, 220),
            Object(O.p)(0, 85),
            Object(O.p)(0, 30)
          ], r;
        }
        return s;
      }(be), ke = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o, n)).color = [
            Object(O.p)(0, 170),
            Object(O.p)(175, 215),
            Object(O.p)(220, 250)
          ], r;
        }
        return s;
      }(be), Ce = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), r.color = [
            Object(O.p)(0, 30),
            Object(O.p)(100, 200),
            Object(O.p)(210, 255)
          ], r.radius = Object(O.q)(2, 6), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(O.p)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(O.p)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r;
        }
        return s;
      }(de), Se = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o, n)).color = [
            Object(O.p)(200, 255),
            Object(O.p)(0, 40),
            Object(O.p)(0, 65)
          ], r;
        }
        return s;
      }(Ce), Te = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), n.color = [
            Object(O.p)(0, 30),
            Object(O.p)(100, 200),
            Object(O.p)(210, 255)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), Me = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o) {
          var n;
          return ce(this, s), (n = t.call(this, e, a, i, o)).decay = Object(O.p)(14, 18), n.color = [
            Object(O.p)(110, 140),
            Object(O.p)(0, 40),
            Object(O.p)(110, 160)
          ], n.radius = Object(O.q)(2, 6), n;
        }
        return s;
      }(de), Re = function (e) {
        ie(s, e);
        var t = ne(s);
        function s(e, a, i, o, n) {
          var r;
          return ce(this, s), (r = t.call(this, e, a, i, o)).decay = Object(O.p)(8, 10), r.color = [
            Object(O.p)(230, 255),
            Object(O.p)(230, 255),
            Object(O.p)(230, 255)
          ], r.radius = Object(O.q)(1, 3), r.angle = Object(O.p)(0, 2 * Math.PI), r.angleVel = Object(O.p)(-0.3, 0.3), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(O.p)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(O.p)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r;
        }
        return ue(s, [
          {
            key: 'draw',
            value: function () {
              this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
              var e = this.radius * this.tileSize / 24 * 2;
              this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.triangle(e, -e, -e, -e, 0, e), this.p5.pop();
            }
          },
          {
            key: 'update',
            value: function (e) {
              this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1);
            }
          }
        ]), s;
      }(de);
    function Oe(e) {
      return (Oe = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function Ee(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function');
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && Be(e, t);
    }
    function Be(e, t) {
      return (Be = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function Ne(e) {
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
        var s, a = je(e);
        if (t) {
          var i = je(this).constructor;
          s = Reflect.construct(a, arguments, i);
        } else
          s = a.apply(this, arguments);
        return Pe(this, s);
      };
    }
    function Pe(e, t) {
      return !t || 'object' !== Oe(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function je(e) {
      return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function Ie(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function De(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function ze(e, t, s) {
      return t && De(e.prototype, t), s && De(e, s), e;
    }
    var Fe = function () {
        function e(t, s, a, i) {
          Ie(this, e), this.p5 = i, this.tileSize = a, this.origin = this.p5.createVector(t, s), this.particles = [];
        }
        return ze(e, [
          {
            key: 'addParticle',
            value: function () {
              this.particles.push(new de(this.origin, 1, this.tileSize, this.p5));
            }
          },
          {
            key: 'isDead',
            value: function () {
              return 0 === this.particles.length;
            }
          },
          {
            key: 'run',
            value: function (e) {
              for (var t = this.particles.length - 1; t >= 0; t--) {
                var s = this.particles[t];
                s.run(e), s.isDead() && this.particles.splice(t, 1);
              }
            }
          }
        ]), e;
      }(), Ae = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new pe(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), qe = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new fe(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), He = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new me(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), We = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new ge(this.origin, 1.5, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), Le = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new ge(this.origin, 3, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), Ge = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new we(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), Ue = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new _e(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), Ve = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function () {
              this.particles.push(new ve(this.origin, 2, this.tileSize, this.p5));
            }
          }]), s;
      }(Fe), Qe = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new be(this.origin, 3, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), Ke = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new xe(this.origin, 4.5, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), Je = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new ke(this.origin, 3, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), Ye = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new Ce(this.origin, 2, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), Xe = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new Se(this.origin, 2, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), Ze = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new Te(this.origin, 2, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), $e = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new Me(this.origin, 2, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), et = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new ye(this.origin, 3, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe), tt = function (e) {
        Ee(s, e);
        var t = Ne(s);
        function s() {
          return Ie(this, s), t.apply(this, arguments);
        }
        return ze(s, [{
            key: 'addParticle',
            value: function (e) {
              this.particles.push(new Re(this.origin, 2, this.tileSize, this.p5, e));
            }
          }]), s;
      }(Fe);
    function st(e) {
      return (st = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function at(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError('Super expression must either be null or a function');
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && it(e, t);
    }
    function it(e, t) {
      return (it = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function ot(e) {
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
        var s, a = rt(e);
        if (t) {
          var i = rt(this).constructor;
          s = Reflect.construct(a, arguments, i);
        } else
          s = a.apply(this, arguments);
        return nt(this, s);
      };
    }
    function nt(e, t) {
      return !t || 'object' !== st(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function rt(e) {
      return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    function lt(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function ct(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function ht(e, t, s) {
      return t && ct(e.prototype, t), s && ct(e, s), e;
    }
    var ut = function () {
        function e(t, s, a, i, o) {
          lt(this, e), this.p5 = o, this.pos = o.createVector(t, s), this.vel = o.createVector(0, 0), this.width = 0.2, this.imgName = '', this.alive = !0, this.target = {
            pos: o.createVector(a.pos.x, a.pos.y),
            width: a.width
          }, this.blastRadius = 0.55, this.damage = i, this.speed = 15, this.onCreate();
        }
        return ht(e, [
          {
            key: 'draw',
            value: function (e, t) {
              this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.vel.heading() + Math.PI / 2), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop();
            }
          },
          {
            key: 'onHit',
            value: function (e, t) {
              var s = this;
              Y(this.pos.x, this.pos.y, this.blastRadius, e, t).forEach(function (e) {
                return e.dealDamage(s.damage);
              }), this.kill();
            }
          },
          {
            key: 'isDead',
            value: function () {
              return !this.alive;
            }
          },
          {
            key: 'kill',
            value: function () {
              this.alive = !1;
            }
          },
          {
            key: 'reachedTarget',
            value: function (e) {
              var t = this.pos, s = this.target.pos;
              return J(t.x, t.y, s.x, s.y, Math.max(this.target.width * e * 0.7, 0.7 * e) * (30 / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)));
            }
          },
          {
            key: 'pxSpeed',
            value: function (e, t) {
              return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30);
            }
          },
          {
            key: 'update',
            value: function (e, t) {
              var s = this.pxSpeed(e, t), a = this.vel.normalize();
              this.vel = this.p5.createVector(a.x * s, a.y * s), this.pos.add(this.vel);
            }
          },
          {
            key: 'onCreate',
            value: function () {
              var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
              this.vel = e.mult(this.speed);
            }
          }
        ]), e;
      }(), dt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.2, r.imgName = 'Egg', r.blastRadius = 0.55, r.speed = 15, r.onCreate(), r;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ve(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 10; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          }]), s;
      }(ut), pt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.2, r.imgName = 'Nut', r.speed = 20, r.blastRadius = 0.2, r.onCreate(), r;
        }
        return s;
      }(ut), ft = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).width = 0.4, l.imgName = r ? 'MasterArrow' : 'Arrow', l.speed = 20, l.blastRadius = 0.2, l.onCreate(), l;
        }
        return s;
      }(ut), mt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.4, r.imgName = 'Sword', r.speed = 20, r.blastRadius = 0.2, r.onCreate(), r;
        }
        return s;
      }(ut), gt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.4, r.imgName = 'PhantomSword', r.speed = 20, r.blastRadius = 0.2, r.onCreate(), r;
        }
        return s;
      }(ut), yt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.4, r.imgName = 'Heart', r.speed = 20, r.blastRadius = 0.6, r.onCreate(), r;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new qe(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 7; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          }]), s;
      }(ut), wt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.4, r.imgName = 'EnchantedArrow', r.speed = 20, r.blastRadius = 0.6, r.onCreate(), r;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new $e(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          }]), s;
      }(ut), _t = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n) {
          var r;
          return lt(this, s), (r = t.call(this, e, a, i, o, n)).width = 0.3, r.imgName = 'WitchOrb', r.blastRadius = 0.6, r.speed = 15, r.onCreate(), r;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          }]), s;
      }(ut), vt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).width = 0.4, l.imgName = 'PigBomb', l.blastRadius = r, l.speed = 13, l.onCreate(), l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ae(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          }]), s;
      }(ut), bt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).width = 0.325, l.imgName = 'PigBomb', l.blastRadius = r, l.speed = 5, l.onCreate(), l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius - 0.3, e, t), o = new Ae(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 6; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(Math.floor(a.damage / 2));
              }), this.kill();
            }
          }]), s;
      }(ut), xt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).width = 0.45, l.imgName = 'DiscoBall', l.blastRadius = r, l.speed = 13, l.angle = Object(O.p)(0, 2 * Math.PI), l.angleVel = Object(O.p)(-0.5, 0.5), l;
        }
        return ht(s, [
          {
            key: 'draw',
            value: function (e, t) {
              this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop();
            }
          },
          {
            key: 'update',
            value: function (e, t) {
              this.angle += this.angleVel * (t ? 2 : 1);
              var s = this.pxSpeed(e, t), a = this.vel.normalize();
              this.vel = this.p5.createVector(a.x * s, a.y * s), this.pos.add(this.vel);
            }
          },
          {
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ue(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                e.dance(), e.dealDamage(a.damage);
              }), this.kill();
            }
          }
        ]), s;
      }(ut), kt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).width = 0.5, l.imgName = 'PigBomb', l.blastRadius = r, l.speed = 11, l.onCreate(), l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s, a) {
              for (var i = this, o = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new Ae(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 12; r++)
                n.addParticle();
              s.push(n), o.forEach(function (e) {
                return e.dealDamage(i.damage);
              });
              for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 6; c++) {
                var h = {
                  pos: {
                    x: this.pos.x + 1.5 * t * Math.cos((5 - c) * (Math.PI / 3) + Math.PI / 2 + l),
                    y: this.pos.y + 1.5 * t * Math.sin((5 - c) * (Math.PI / 3) + Math.PI / 2 + l)
                  },
                  width: 0.5
                };
                a.push(new bt(this.pos.x, this.pos.y, h, this.damage, this.p5, this.blastRadius));
              }
              this.kill();
            }
          }]), s;
      }(ut), Ct = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, {
            pos: {
              x: 1,
              y: 1
            },
            width: 0.2
          }, o, n)).p5 = n, l.width = 0.5, l.imgName = 'Fish', l.blastRadius = 0.6, l.speed = 1.5, l.angle = 0, l.flipped = !1, l.paths = r, l.lastTile = [], l;
        }
        return ht(s, [
          {
            key: 'draw',
            value: function (e, t) {
              this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.flipped && this.p5.scale(-1, 1), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.pop();
            }
          },
          {
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ze(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 13; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          },
          {
            key: 'reachedTarget',
            value: function (e, t) {
              return Y(this.pos.x, this.pos.y, this.target.width / 2, t, e).filter(function (e) {
                return e.alive;
              }).length > 0;
            }
          },
          {
            key: 'update',
            value: function (e, t, s, a, i, o) {
              var n = F(this.pos.x, this.pos.y, this.p5, e), r = this.paths[n.y][n.x];
              if (0 === r && (n.x !== o.x || n.y !== o.y))
                return this.pos.x = this.lastTile[0] * e + e / 2, void (this.pos.y = this.lastTile[1] * e + e / 2);
              if (K(this.pos.x, this.pos.y, n.x, n.y, e, this.p5, 0 === r.x ? 'x' : 'y')) {
                if (!r)
                  return void this.kill();
                this.lastTile = [
                  n.x,
                  n.y
                ];
                var l = this.pxSpeed(e, t);
                1 === r ? (this.vel = this.p5.createVector(-l, 0), this.flipped = !0, this.angle = 0) : 2 === r ? (this.vel = this.p5.createVector(0, -l), this.flipped = !1, this.angle = -Math.PI / 2) : 3 === r ? (this.vel = this.p5.createVector(l, 0), this.flipped = !1, this.angle = 0) : 4 === r && (this.vel = this.p5.createVector(0, l), this.flipped = !0, this.angle = -Math.PI / 2);
              }
              this.pos.add(this.vel);
            }
          },
          {
            key: 'onCreate',
            value: function () {
            }
          }
        ]), s;
      }(ut), St = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n)).pos = n.createVector(e, a), l.vel = n.createVector(0, 0), l.width = 0.45, l.imgName = 'Missile', l.blastRadius = r, l.range = 5, l.speed = 5, l.target = i, l.lifetime = 300, l.onCreate(), l;
        }
        return ht(s, [
          {
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ve(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(a.damage);
              }), this.kill();
            }
          },
          {
            key: 'findTarget',
            value: function (e, t, s, a) {
              var i = Y(this.pos.x, this.pos.y, this.range, e, t);
              if (0 !== i.length) {
                var o = X(i, s, a, this.p5, t);
                o && (this.target = o);
              }
            }
          },
          {
            key: 'update',
            value: function (e, t, s, a, i) {
              this.lifetime <= 0 ? this.kill() : (this.lifetime -= 1, this.target.alive || this.findTarget(s, e, a, i), this.vel = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize().mult(this.speed * (t ? 2 : 1)), this.vel.limit(this.pxSpeed(e, t)), this.pos.add(this.vel));
            }
          },
          {
            key: 'onCreate',
            value: function () {
              var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
              this.vel = e.mult(this.speed);
            }
          }
        ]), s;
      }(ut), Tt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = 'BigMissile', l.width = 0.55, l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s) {
              for (var a = this, i = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ge(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 20; n++)
                o.addParticle();
              s.push(o), i.forEach(function (e) {
                return e.dealDamage(Math.min(Math.round(a.damage + 0.15 * e.health), 50));
              }), this.kill();
            }
          }]), s;
      }(St), Mt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = 'CornKernel', l.width = 0.2, l.hasReached = !1, l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s, a, i, o) {
              var n = this;
              if (!this.hasReached)
                return this.hasReached = !0, void this.findTarget(e, t, i, o);
              for (var r = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), l = new We(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 4; c++)
                l.addParticle();
              s.push(l), r.forEach(function (e) {
                return e.dealDamage(n.damage);
              }), this.kill();
            }
          }]), s;
      }(St), Rt = function (e) {
        at(s, e);
        var t = ot(s);
        function s(e, a, i, o, n, r) {
          var l;
          return lt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = 'Corn', l;
        }
        return ht(s, [{
            key: 'onHit',
            value: function (e, t, s, a) {
              for (var i = this, o = Y(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new We(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 13; r++)
                n.addParticle();
              s.push(n), o.forEach(function (e) {
                return e.dealDamage(i.damage);
              });
              for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 4; c++) {
                var h = {
                  pos: {
                    x: this.pos.x + 1.5 * t * Math.cos((3 - c) * (Math.PI / 2) + Math.PI / 2 + l),
                    y: this.pos.y + 1.5 * t * Math.sin((3 - c) * (Math.PI / 2) + Math.PI / 2 + l)
                  },
                  width: 0.5,
                  alive: !0
                };
                a.push(new Mt(this.pos.x, this.pos.y, h, Math.max(0.13 * this.damage, 1), this.p5, this.blastRadius / 2));
              }
              this.kill();
            }
          }]), s;
      }(St), Ot = {};
    Ot.chick = {
      lineColor: '#ffcd05',
      width: 0.5,
      blook: 'Chick',
      weight: 5,
      name: 'chick',
      title: 'Laser Chick',
      desc: 'A Chick that shoots lasers, enough said.',
      fullCd: 40,
      cost: 2,
      range: 2,
      damage: 1,
      upgrades: [
        [
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Wise Chick',
              range: 3,
              cost: 1,
              width: 0.55
            }
          },
          {
            desc: 'x2 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Quick Chick',
              cdMult: 0.5,
              cost: 2,
              width: 0.55
            }
          }
        ],
        [
          {
            desc: 'x3 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Strong Chick',
              cost: 2,
              dmgMult: 3,
              width: 0.6
            }
          },
          {
            desc: 'x2 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Speedy Chick',
              cdMult: 0.5,
              cost: 2,
              width: 0.6
            }
          }
        ],
        [
          {
            desc: 'Transform into 3 Chicks, each with a laser (x3 damage)',
            iconBlook: 'Chick',
            data: {
              finalUpgrade: 0,
              title: 'Chick Army',
              cost: 4,
              width: 0.35,
              dmgMult: 3,
              draw: function (e) {
                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                var t = this.width * e;
                this.p5.image(this.img, 0, -t / 1.8, t, 1.15 * t), this.p5.image(this.img, t / 1.8, t / 1.8, t, 1.15 * t), this.p5.image(this.img, -t / 1.8, t / 1.8, t, 1.15 * t), this.p5.pop();
              },
              onAim: function (e, t, s, a) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine)) {
                  this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight);
                  var i = this.width * t, o = Math.atan2(e.pos.y - this.pos.y, e.pos.x - this.pos.x);
                  this.p5.line(this.pos.x - i / 1.8 * Math.cos(o), this.pos.y - i / 1.8 * Math.sin(o), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o - Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o - Math.PI / 4), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o + Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o + Math.PI / 4), e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop();
                }
              }
            }
          },
          {
            desc: 'No more lasers, just x1.5 damage explosive eggs',
            iconBlook: 'Chicken',
            data: {
              finalUpgrade: 1,
              title: 'Chicken Bomber',
              blook: 'Chicken',
              cost: 4,
              dmgMult: 1.5,
              width: 0.65,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)));
              }
            }
          }
        ]
      ]
    }, Ot.owl = {
      lineColor: '#594a42',
      width: 0.55,
      blook: 'Owl',
      weight: 3,
      name: 'owl',
      title: 'Owl Sniper',
      desc: 'Shoots high damage bullets from a long range.',
      fullCd: 120,
      cost: 3,
      range: 9,
      damage: 5,
      upgrades: [
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Buff Owl',
              dmgMult: 2,
              cost: 2
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Quick Owl',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Power Owl',
              dmgMult: 2,
              cost: 2
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Speedy Owl',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'Each attack also deals 25% of an enemy\'s current health as damage (max 150)',
            iconBlook: 'Agent Owl',
            data: {
              finalUpgrade: 0,
              title: 'Agent Owl',
              blook: 'Agent Owl',
              cost: 5,
              lineColor: '#32da4e',
              weight: 6,
              attack: function (e, t, s, a) {
                var i = Math.min(this.getDamage() + 0.25 * e.health, 150);
                e.dealDamage(i), this.onHit(e, t, s, a);
              }
            }
          },
          {
            desc: 'Transforms into 3 birds that deal damage to all enemies in a line',
            iconBlook: 'Cockatoo',
            data: {
              finalUpgrade: 1,
              title: 'BIRDS',
              cost: 4,
              width: 0.32,
              weight: 1,
              blook: 'Cockatoo',
              draw: function (e, t) {
                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                var s = this.width * e;
                this.p5.image(t.Parrot, -s, 0, s, 1.15 * s), this.p5.image(t.Cockatoo, 0, 0, s, 1.15 * s), this.p5.image(t.Macaw, s, 0, s, 1.15 * s), this.p5.pop();
              },
              onAim: function (e, t, s, a) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine)) {
                  this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle);
                  var i = this.width * t, o = (this.range + 0.5) * t;
                  this.p5.noStroke(), this.p5.rectMode(this.p5.CORNER), this.p5.fill('#ed1c24'), this.p5.rect(1.5 * -i, 0, i, o), this.p5.fill('#ffffff'), this.p5.rect(-i / 2, 0, i, o), this.p5.fill('#00aeef'), this.p5.rect(i / 2, 0, i, o), this.p5.strokeWeight(1), this.p5.pop();
                }
              },
              attack: function (e, t, s, a) {
                var i = this, o = this.getDamage(), n = [], r = this.width * t, l = (this.range + 0.5) * t, c = this.pos.x - l * Math.sin(this.angle), h = this.pos.y + l * Math.cos(this.angle);
                a.forEach(function (e) {
                  (function (e, t, s, a, i) {
                    var o = 0;
                    o += $(t, e, i), o += $(i, e, a), o += $(a, e, s), o += $(e, s, t);
                    var n = Math.abs((t.x * s.y - t.y * s.x + (s.x * a.y - s.y * a.x) + (a.x * i.y - a.y * i.x) + (i.x * t.y - i.y * t.x)) / 2);
                    return Math.round(o) === Math.round(n);
                  }({
                    x: e.pos.x,
                    y: e.pos.y
                  }, {
                    x: i.pos.x - r * Math.cos(i.angle),
                    y: i.pos.y + r * Math.sin(i.angle)
                  }, {
                    x: i.pos.x - r * Math.cos(i.angle),
                    y: i.pos.y - r * Math.sin(i.angle)
                  }, {
                    x: c - r * Math.cos(i.angle),
                    y: h - r * Math.sin(i.angle)
                  }, {
                    x: c + r * Math.cos(i.angle),
                    y: h + r * Math.sin(i.angle)
                  }) && n.push(e));
                }), n.forEach(function (e) {
                  return e.dealDamage(o);
                }), this.onHit(e, t, s, a);
              }
            }
          }
        ]
      ]
    }, Ot.squirrel = {
      drawLine: !1,
      width: 0.5,
      blook: 'Squirrel',
      name: 'squirrel',
      title: 'Nutty Squirrel',
      desc: 'Throws harmful nuts at enemies.',
      fullCd: 45,
      cost: 3,
      range: 1.5,
      damage: 3,
      onAim: function (e, t, s, a, i) {
        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new pt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)));
      },
      upgrades: [
        [
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Sharp Squirrel',
              range: 3,
              cost: 1,
              width: 0.55
            }
          },
          {
            desc: 'x2 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Swift Squirrel',
              cost: 2,
              cdMult: 0.5,
              width: 0.55
            }
          }
        ],
        [
          {
            desc: 'x3 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Strong Squirrel',
              cost: 3,
              dmgMult: 3
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Speedster Squirrel',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'Transform into 9 mini squirrels, each with a 1/4 damage acorn',
            iconBlook: 'Squirrel',
            data: {
              finalUpgrade: 0,
              title: 'Lots O\' Squirrels',
              cost: 4,
              width: 0.3,
              dmgMult: 9 / 4,
              draw: function (e) {
                var t = this, s = [
                    -1,
                    0,
                    1
                  ];
                s.forEach(function (a) {
                  s.forEach(function (s) {
                    t.p5.push(), t.p5.translate(t.pos.x + 0.325 * e * s, t.pos.y + 0.325 * e * a), t.p5.angleMode(t.p5.RADIANS), t.p5.rotate(t.angle), t.p5.imageMode(t.p5.CENTER);
                    var i = t.width * e;
                    t.p5.image(t.img, 0, 0, i, 1.15 * i), t.p5.pop();
                  });
                });
              },
              onAim: function (e, t, s, a, i) {
                var o = this;
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                  this.resetCooldown();
                  var n = [
                    -1,
                    0,
                    1
                  ];
                  n.forEach(function (s) {
                    n.forEach(function (a) {
                      i.push(new pt(o.pos.x + 0.325 * t * a, o.pos.y + 0.325 * t * s, e, o.getDamage() / 9, o.p5));
                    });
                  });
                }
              }
            }
          },
          {
            desc: 'Every 5 attacks, the squirrel goes nuts and throws acorns rapidly',
            iconBlook: 'Nuts Squirrel',
            data: {
              finalUpgrade: 1,
              title: 'GO NUTS SQUIRREL',
              blook: 'Nuts Squirrel',
              img: 'Squirrel',
              cost: 4,
              width: 0.6,
              nutsAttacks: 0,
              nutsCd: 4,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.nutsCd > 0 ? (this.resetCooldown(), this.nutsCd -= 1) : 0 === this.nutsCd ? (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks = 13, this.img = this.images['Nuts Squirrel'], this.nutsCd = -1) : this.nutsAttacks <= 0 ? (this.resetCooldown(), this.nutsCd = 4, this.img = this.images.Squirrel) : (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks -= 1), i.push(new pt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)));
              }
            }
          }
        ]
      ]
    }, Ot.goldfish = {
      drawLine: !1,
      follow: !1,
      width: 0.6,
      blook: 'Goldfish',
      name: 'goldfish',
      title: 'Splashy Goldfish',
      desc: 'Deals damage by splashing enemies around himself.',
      fullCd: 60,
      cost: 4,
      range: 1,
      damage: 2,
      target: function (e, t, s, a, i, o) {
        var n = this;
        if (this.canFire()) {
          var r = this.visible(e, t);
          if (0 !== r.length) {
            this.resetCooldown();
            for (var l = new Ye(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 8; c++)
              for (var h = 0; h < 8; h++)
                l.addParticle(Math.PI / 4 * c);
            s.push(l), r.forEach(function (e) {
              return e.dealDamage(n.getDamage());
            });
          }
        }
      },
      upgrades: [
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Goldy Goldfish',
              cost: 2,
              dmgMult: 2,
              width: 0.65
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Quick Goldfish',
              cost: 2,
              cdMult: 2 / 3,
              width: 0.65
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Super Goldfish',
              dmgMult: 2,
              cost: 2
            }
          },
          {
            desc: 'x1.5 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Soaker Goldfish',
              cost: 2,
              range: 1.5
            }
          }
        ],
        [
          {
            desc: 'Every 2 attacks, spawn a fish that follows the path and explodes on contact',
            iconBlook: 'Goldfish',
            data: {
              finalUpgrade: 0,
              title: 'School of Fish',
              fishCd: 0,
              cost: 4,
              width: 0.65,
              target: function (e, t, s, a, i, o, n, r) {
                var l = this;
                if (this.canFire()) {
                  var c = this.visible(e, t);
                  if (0 !== c.length) {
                    this.resetCooldown();
                    for (var h = new Ye(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                      for (var d = 0; d < 8; d++)
                        h.addParticle(Math.PI / 4 * u);
                    s.push(h), c.forEach(function (e) {
                      return e.dealDamage(l.getDamage());
                    }), this.fishCd <= 0 ? (o.push(new Ct(r.x * t + t / 2, r.y * t + t / 2, null, 2 * this.getDamage(), this.p5, Object(O.o)(n))), this.fishCd = 1) : this.fishCd -= 1;
                  }
                }
              }
            }
          },
          {
            desc: 'Every attack, send out an extra wave of half-strength damage',
            iconBlook: 'Red Goldfish',
            data: {
              finalUpgrade: 1,
              title: 'Hungry Fish',
              cost: 4,
              blook: 'Red Goldfish',
              width: 0.65,
              secondAttack: !1,
              target: function (e, t, s, a, i, o, n, r) {
                var l = this;
                if (this.canFire()) {
                  var c = this.visible(e, t);
                  if (0 !== c.length || this.secondAttack) {
                    for (var h = this.secondAttack ? new Xe(this.pos.x, this.pos.y, t, this.p5) : new Ye(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                      for (var d = 0; d < 8; d++)
                        h.addParticle(Math.PI / 4 * u);
                    s.push(h), c.forEach(function (e) {
                      return e.dealDamage(l.secondAttack ? l.getDamage() / 2 : l.getDamage());
                    }), this.secondAttack ? (this.resetCooldown(), this.secondAttack = !1) : (this.cd = 10, this.secondAttack = !0);
                  }
                }
              }
            }
          }
        ]
      ]
    }, Ot.pig = {
      drawLine: !1,
      width: 0.6,
      blook: 'Pig',
      name: 'pig',
      title: 'Pig Bomber',
      desc: 'Shoots a ball that explodes and deals damage.',
      fullCd: 90,
      cost: 4,
      range: 1.5,
      damage: 5,
      blastRadius: 0.6,
      onAim: function (e, t, s, a, i) {
        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new vt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
      },
      upgrades: [
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Big Pig',
              cost: 2,
              dmgMult: 2,
              width: 0.65
            }
          },
          {
            desc: 'x1.5 Blast Area',
            icon: 'fas fa-bullseye',
            iconColor: '#ff3333',
            data: {
              title: 'Boomer Pig',
              cost: 2,
              blastMult: 1.5,
              width: 0.65
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Power Pig',
              dmgMult: 2,
              cost: 2
            }
          },
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Perceptive Pig',
              cost: 1,
              range: 2.5
            }
          }
        ],
        [
          {
            desc: 'Throw a Disco Ball that forces enemies to dance for 1s',
            iconBlook: 'Party Pig',
            data: {
              finalUpgrade: 0,
              title: 'Party Pig',
              cost: 4,
              blook: 'Party Pig',
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new xt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
              }
            }
          },
          {
            desc: 'After exploding, split into 5 mini exploding balls',
            iconBlook: 'Pig',
            data: {
              finalUpgrade: 1,
              title: 'Giant Pig',
              cost: 4,
              width: 1,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new kt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
              }
            }
          }
        ]
      ]
    }, Ot.elf = {
      drawLine: !1,
      width: 0.6,
      blook: 'Elf',
      name: 'elf',
      title: 'Archer Elf',
      desc: 'Fires arrows to damage enemies.',
      fullCd: 60,
      cost: 4,
      range: 2,
      damage: 2,
      onAim: function (e, t, s, a, i) {
        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ft(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)));
      },
      upgrades: [
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Buff Elf',
              cost: 2,
              dmgMult: 2
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Stealth Elf',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Sharpshot Elf',
              cost: 2,
              range: 3
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Prodigy Elf',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'Deal 75% Damage, but shoot 4 times as fast',
            iconBlook: 'Master Elf',
            data: {
              finalUpgrade: 0,
              title: 'Master Elf',
              cost: 4,
              blook: 'Master Elf',
              cdMult: 1 / 4,
              dmgMult: 0.75,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ft(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !0)));
              }
            }
          },
          {
            desc: 'Shoot enchanted arrows that explode and deal x2.5 damage',
            iconBlook: 'Enchanted Elf',
            data: {
              finalUpgrade: 1,
              title: 'Enchanted Elf',
              cost: 4,
              blook: 'Enchanted Elf',
              dmgMult: 2.5,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new wt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)));
              }
            }
          }
        ]
      ]
    }, Ot.dragon = {
      drawLine: !1,
      width: 0.6,
      blook: 'Dragon',
      name: 'dragon',
      title: 'Flame Dragon',
      desc: 'Breaths damaging fire in a short-range, cone-like shape.',
      fullCd: 70,
      cost: 4,
      range: 1.4,
      damage: 3,
      onAim: function (e, t, s, a) {
        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
          this.resetCooldown(), this.attack(e, t, s, a);
          for (var i = new Qe(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++)
            i.addParticle(this.angle);
          s.push(i);
        }
      },
      attack: function (e, t, s, a) {
        var i = this, o = this.getDamage(), n = [], r = (this.range + 0.5) * t / Math.cos(Math.PI / 5);
        a.forEach(function (e) {
          ee({
            x: e.pos.x,
            y: e.pos.y
          }, {
            x: i.pos.x,
            y: i.pos.y
          }, {
            x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
            y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
          }, {
            x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
            y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
          }) && n.push(e);
        }), n.forEach(function (e) {
          return e.dealDamage(o);
        });
      },
      upgrades: [
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Mighty Dragon',
              cost: 2,
              dmgMult: 2
            }
          },
          {
            desc: 'x1.25 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Swift Dragon',
              cost: 2,
              cdMult: 0.8
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Lethal Dragon',
              cost: 2,
              dmgMult: 2
            }
          },
          {
            desc: 'x1.25 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Speed Dragon',
              cost: 1,
              cdMult: 0.8
            }
          }
        ],
        [
          {
            desc: '+1 Range and x1.75 Damage; this will hurt',
            iconBlook: 'Fire Dragon',
            data: {
              finalUpgrade: 0,
              title: 'Fire Dragon',
              cost: 4,
              width: 0.7,
              blook: 'Fire Dragon',
              range: 2.4,
              dmgMult: 1.75,
              onAim: function (e, t, s, a) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                  this.resetCooldown(), this.attack(e, t, s, a);
                  for (var i = new Ke(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 40; o++)
                    i.addParticle(this.angle);
                  s.push(i);
                }
              }
            }
          },
          {
            desc: 'Halve the firing rate, but blow back enemies that are hit by your breath',
            iconBlook: 'Wind Dragon',
            data: {
              finalUpgrade: 1,
              title: 'Wind Dragon',
              cost: 4,
              width: 0.7,
              cdMult: 2,
              blook: 'Wind Dragon',
              onAim: function (e, t, s, a) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                  this.resetCooldown(), this.attack(e, t, s, a);
                  for (var i = new Je(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++)
                    i.addParticle(this.angle);
                  s.push(i);
                }
              },
              attack: function (e, t, s, a) {
                var i = this, o = this.getDamage(), n = [], r = (this.range + 0.5) * t / Math.cos(Math.PI / 5);
                a.forEach(function (e) {
                  ee({
                    x: e.pos.x,
                    y: e.pos.y
                  }, {
                    x: i.pos.x,
                    y: i.pos.y
                  }, {
                    x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                    y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                  }, {
                    x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                    y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                  }) && n.push(e);
                }), n.forEach(function (e) {
                  e.dealDamage(o), e.blowBack();
                });
              }
            }
          }
        ]
      ]
    }, Ot.wizard = {
      drawLine: !0,
      lineColor: '#ffcd05',
      weight: 10,
      width: 0.6,
      blook: 'Wizard',
      name: 'wizard',
      title: 'Spark Wizard',
      desc: 'Shoots a spark that jumps from enemy to enemy while dealing damage.',
      fullCd: 90,
      cost: 5,
      range: 1.7,
      damage: 2,
      maxTargets: 7,
      weightDec: 1,
      onAim: function (e, t, s, a) {
        if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
          this.resetCooldown();
          var i = e, o = [i], n = this.weight;
          for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(n), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), i.dealDamage(this.getDamage()); o.length < this.maxTargets && 0 !== a.filter(function (e) {
              return !o.includes(e);
            }).length;) {
            var r = L(a, i.pos, o);
            if (!r)
              break;
            n -= this.weightDec, this.p5.strokeWeight(n);
            var l = Object(O.p)(i.pos.x, r.pos.x), c = Object(O.p)(i.pos.y, r.pos.y);
            this.p5.line(i.pos.x, i.pos.y, l, c), this.p5.line(l, c, r.pos.x, r.pos.y), r.dealDamage(this.getDamage()), o.push(r), i = r;
          }
        }
      },
      upgrades: [
        [
          {
            desc: 'x2.5 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Advanced Wizard',
              cost: 2,
              dmgMult: 2.5
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Quickcast Wizard',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Elder Wizard',
              cost: 2,
              dmgMult: 2,
              lineColor: '#5a459c',
              width: 0.65
            }
          },
          {
            desc: 'x2 Max Zap Targets',
            icon: 'fas fa-bolt',
            iconColor: '#5a459c',
            data: {
              title: 'Crazy Wizard',
              cost: 2,
              maxTargetsMult: 2,
              lineColor: '#5a459c',
              width: 0.65,
              weightDec: 0.6
            }
          }
        ],
        [
          {
            desc: 'Every attack, also cast a cursed, exploding orb',
            iconBlook: 'Witch',
            data: {
              finalUpgrade: 0,
              title: 'Evil Witch',
              cost: 4,
              blook: 'Witch',
              lineColor: '#3a3a3a',
              onAim: function (e, t, s, a, i) {
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                  this.resetCooldown(), i.push(new _t(this.pos.x, this.pos.y, e, this.getDamage(), this.p5));
                  var o = e, n = [o], r = this.weight;
                  for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(r), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), o.dealDamage(this.getDamage()); n.length < this.maxTargets && 0 !== a.filter(function (e) {
                      return !n.includes(e);
                    }).length;) {
                    var l = L(a, o.pos, n);
                    if (!l)
                      break;
                    r -= this.weightDec, this.p5.strokeWeight(r);
                    var c = Object(O.p)(o.pos.x, l.pos.x), h = Object(O.p)(o.pos.y, l.pos.y);
                    this.p5.line(o.pos.x, o.pos.y, c, h), this.p5.line(c, h, l.pos.x, l.pos.y), l.dealDamage(this.getDamage()), n.push(l), o = l;
                  }
                }
              }
            }
          },
          {
            desc: 'Harness the power of lightning to double your max zap targets',
            iconBlook: 'Lightning Wizard',
            data: {
              finalUpgrade: 1,
              title: 'God of Lightning',
              cost: 4,
              blook: 'Lightning Wizard',
              maxTargetsMult: 2,
              weight: 12,
              weightDec: 0.4,
              lineColor: '#1affff'
            }
          }
        ]
      ]
    }, Ot.unicorn = {
      drawLine: !1,
      width: 0.6,
      blook: 'Unicorn',
      name: 'unicorn',
      title: 'Rocket Unicorn',
      desc: 'Fires an auto-tracking missile that explodes on contact.',
      fullCd: 90,
      cost: 6,
      range: 5,
      damage: 5,
      blastRadius: 0.7,
      onAim: function (e, t, s, a, i) {
        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new St(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
      },
      upgrades: [
        [
          {
            desc: '+2 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Swift Unicorn',
              cost: 1,
              rangeAdd: 2
            }
          },
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Majestic Unicorn',
              cost: 2,
              cdMult: 2 / 3
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Daring Unicorn',
              cost: 3,
              dmgMult: 2
            }
          },
          {
            desc: 'x1.5 Blast Area',
            icon: 'fas fa-bullseye',
            iconColor: '#ff3333',
            data: {
              title: 'Kaboom Unicorn',
              cost: 2,
              blastMult: 1.5
            }
          }
        ],
        [
          {
            desc: 'Fires missiles that deal 15% of an enemy\'s current health as bonus damage (max 50)',
            iconBlook: 'Crazy Unicorn',
            data: {
              finalUpgrade: 0,
              title: 'Crazy Unicorn',
              blook: 'Crazy Unicorn',
              width: 0.7,
              cost: 7,
              angle: 0,
              onAim: function (e, t, s, a, i) {
                this.canFire() && (this.resetCooldown(), i.push(new Tt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
              },
              update: function (e) {
                var t = e ? 2 : 1;
                this.cd > 0 && (this.cd -= t), this.angle <= 2 * -Math.PI ? this.angle = -Math.PI / 34 : this.angle -= Math.PI / (34 / t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}));
              }
            }
          },
          {
            desc: 'Fire tracking corn cobs that explode into tracking kernals',
            iconBlook: 'uni-CORN',
            data: {
              finalUpgrade: 1,
              title: 'uni-CORN',
              blook: 'uni-CORN',
              width: 0.7,
              cost: 4,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new Rt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)));
              }
            }
          }
        ]
      ]
    }, Ot.penguin = {
      drawLine: !1,
      follow: !1,
      width: 0.5,
      blook: 'Baby Penguin',
      name: 'penguin',
      title: 'Freeze Penguin',
      desc: 'Occasionally freezes all enemies around himself.',
      fullCd: 110,
      freezeTime: 15,
      cost: 3,
      range: 1,
      damage: 0,
      target: function (e, t, s, a, i, o, n, r) {
        var l = this;
        if (this.canFire()) {
          var c = this.visible(e, t);
          if (0 !== c.length) {
            this.resetCooldown();
            for (var h = new tt(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
              for (var d = 0; d < 8; d++)
                h.addParticle(Math.PI / 4 * u);
            s.push(h), c.forEach(function (e) {
              e.freeze(l.freezeTime), e.dealDamage(l.getDamage());
            });
          }
        }
      },
      upgrades: [
        [
          {
            desc: '+1 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Icicle Penguin',
              cost: 1,
              damage: 1,
              width: 0.55
            }
          },
          {
            desc: 'x1.25 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Blizzard Penguin',
              cost: 2,
              cdMult: 0.8,
              width: 0.55
            }
          }
        ],
        [
          {
            desc: '+2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Frosty Penguin',
              dmgAdd: 2,
              cost: 1
            }
          },
          {
            desc: 'x1.5 Freeze Time',
            icon: 'far fa-snowflake',
            iconColor: '#5c5c8a',
            data: {
              title: 'Sub-Zero Penguin',
              cost: 2,
              freezeMult: 1.5
            }
          }
        ],
        [
          {
            desc: 'No more freezing, but greatly slow all enemies within range',
            iconBlook: 'Penguin',
            data: {
              finalUpgrade: 0,
              title: 'Emperor Penguin',
              cost: 4,
              blook: 'Penguin',
              width: 0.65,
              draw: function (e) {
                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.stroke(245, 245, 245, 100), this.p5.strokeWeight(3), this.p5.fill(250, 250, 250, 50);
                var t = (this.range + 0.5) * e * 2;
                this.p5.ellipse(0, 0, t, t), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop();
              },
              target: function (e, t, s, a, i, o, n, r) {
                var l = this, c = this.visible(e, t);
                if (0 !== c.length) {
                  var h = this.canFire();
                  if (c.forEach(function (e) {
                      e.slow(), h && e.dealDamage(l.getDamage());
                    }), h) {
                    this.resetCooldown();
                    for (var u = new tt(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 8; d++)
                      for (var p = 0; p < 8; p++)
                        u.addParticle(Math.PI / 4 * d);
                    s.push(u);
                  }
                }
              }
            }
          },
          {
            desc: 'Every 5 attacks, execute an enemy (deal 150 damage)',
            iconBlook: 'Arctic Fox',
            data: {
              finalUpgrade: 1,
              title: 'Arctic Buddies',
              cost: 4,
              executeCd: 4,
              width: 0.4,
              follow: !0,
              drawLine: !0,
              draw: function (e, t) {
                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                var s = this.width * e;
                this.p5.image(t['Arctic Fox'], -0.25 * e, -0.25 * e, s, 1.15 * s), this.p5.image(t['Polar Bear'], 0.25 * e, -0.25 * e, s, 1.15 * s), this.p5.image(t['Arctic Hare'], -0.25 * e, 0.25 * e, s, 1.15 * s), this.p5.image(t.Seal, 0.25 * e, 0.25 * e, s, 1.15 * s), this.p5.pop();
              },
              target: function (e, t, s, a, i, o) {
                var n = this.visible(e, t);
                if (0 !== n.length) {
                  var r = X(n, a, i, this.p5, t);
                  r && this.onAim(r, t, s, n, o);
                }
              },
              onAim: function (e, t, s, a) {
                var i = this;
                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                  this.resetCooldown(), this.executeCd <= 0 ? (this.p5.push(), this.p5.stroke('#7ca1d5'), this.p5.strokeWeight(10), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop(), e.dealDamage(150), this.executeCd = 4) : this.executeCd -= 1;
                  for (var o = new tt(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 8; n++)
                    for (var r = 0; r < 8; r++)
                      o.addParticle(Math.PI / 4 * n);
                  s.push(o), a.forEach(function (e) {
                    e.freeze(i.freezeTime), e.dealDamage(i.getDamage());
                  });
                }
              }
            }
          }
        ]
      ]
    }, Ot.king = {
      drawLine: !1,
      width: 0.6,
      blook: 'King',
      name: 'king',
      title: 'The King',
      desc: 'Throws damaging swords at an alarmingly fast pace.',
      fullCd: 6,
      cost: 12,
      range: 2,
      damage: 1,
      onAim: function (e, t, s, a, i) {
        (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new mt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)));
      },
      upgrades: [
        [
          {
            desc: 'x1.5 Firing Rate',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Noble King',
              cost: 7,
              cdMult: 2 / 3
            }
          },
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Wise King',
              cost: 2,
              rangeAdd: 1
            }
          }
        ],
        [
          {
            desc: 'x2 Damage',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'Mighty King',
              cost: 7,
              dmgMult: 2,
              width: 0.65
            }
          },
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Great King',
              cost: 2,
              rangeAdd: 1,
              width: 0.65
            }
          }
        ],
        [
          {
            desc: 'Shoot hearts that explode and deal damage in an area',
            iconBlook: 'King of Hearts',
            data: {
              finalUpgrade: 0,
              title: 'King of Hearts',
              blook: 'King of Hearts',
              cost: 7,
              width: 0.75,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new yt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)));
              }
            }
          },
          {
            desc: 'Throws haunted swords that deal double the damage',
            iconBlook: 'Phantom King',
            data: {
              finalUpgrade: 1,
              title: 'Phantom King',
              blook: 'Phantom King',
              cost: 7,
              width: 0.75,
              dmgMult: 2,
              onAim: function (e, t, s, a, i) {
                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new gt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)));
              }
            }
          }
        ]
      ]
    }, Ot.jester = {
      drawLine: !1,
      width: 0.6,
      blook: 'Jester',
      name: 'jester',
      title: 'Helpful Jester',
      desc: 'Every 10 seconds gives nearby towers bonus buffs (+50% damage to start).',
      fullCd: 300,
      cost: 4,
      range: 2,
      damage: 0,
      damageBuff: 1.5,
      speedBuff: 1,
      target: function (e, t, s, a, i, o, n, r, l) {
        var c = this;
        if (this.canFire()) {
          var h = this.visible(l, t).filter(function (e) {
            return e !== c;
          });
          this.resetCooldown();
          for (var u = new Le(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++)
            u.addParticle();
          s.push(u), this.angle = 2 * -Math.PI, h.forEach(function (e) {
            return e.buff({
              damageBuff: c.damageBuff,
              speedBuff: c.speedBuff
            });
          });
        }
      },
      update: function (e) {
        var t = e ? 2 : 1;
        this.cd > 0 && (this.cd -= t), this.angle < 0 && (this.angle += Math.PI / (20 / t));
      },
      upgrades: [
        [
          {
            desc: 'x2 Firing Rate to Buffed Towers',
            icon: 'fas fa-running',
            iconColor: '#31b431',
            data: {
              title: 'Charming Jester',
              cost: 2,
              speedBuff: 0.5
            }
          },
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Friendly Jester',
              cost: 1,
              rangeAdd: 1
            }
          }
        ],
        [
          {
            desc: 'From x1.5 to x2 Damage to Buffed Towers',
            icon: 'fas fa-fist-raised',
            iconColor: '#ff751a',
            data: {
              title: 'General Jester',
              cost: 2,
              damageBuff: 1.75
            }
          },
          {
            desc: '+1 Range',
            icon: 'fas fa-expand-alt',
            iconColor: '#4d94ff',
            data: {
              title: 'Good Guy Jester',
              cost: 1,
              rangeAdd: 1
            }
          }
        ],
        [
          {
            desc: 'Multiply your attack speed and damage buffs by 1.5',
            iconBlook: 'Mad Hatter',
            data: {
              finalUpgrade: 0,
              title: 'Mad Hatter',
              blook: 'Mad Hatter',
              width: 0.7,
              cost: 4,
              dmgBuffMult: 1.5,
              speedBuffMult: 2 / 3,
              target: function (e, t, s, a, i, o, n, r, l) {
                var c = this;
                if (this.canFire()) {
                  var h = this.visible(l, t).filter(function (e) {
                    return e !== c;
                  });
                  this.resetCooldown();
                  for (var u = new et(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++)
                    u.addParticle();
                  s.push(u), this.angle = 2 * -Math.PI, h.forEach(function (e) {
                    return e.buff({
                      damageBuff: c.damageBuff,
                      speedBuff: c.speedBuff
                    });
                  });
                }
              }
            }
          },
          {
            desc: 'Decrease your size and halve your cooldown',
            iconBlook: 'Jester',
            data: {
              finalUpgrade: 1,
              title: 'Mini Jester',
              width: 0.3,
              cost: 4,
              cdMult: 0.5
            }
          }
        ]
      ]
    };
    var Et = Ot;
    function Bt(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    var Nt = function () {
        function e(t, s, a, i, o, n) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.p5 = a, this.images = n, this.lineColor = '#ffcd05', this.drawLine = !0, this.follow = !0, this.width = 0.65, this.img = n.Chick, this.weight = 5, this.blook = '', this.alive = !0, this.name = o, this.sound = null, this.title = '', this.desc = '', this.level = -1, this.finalUpgrade = -1, this.angle = 0, this.gridPos = this.p5.createVector(t, s), this.pos = this.p5.createVector(t * i + i / 2, s * i + i / 2), this.fullCd = 60, this.cd = 0, this.cost = 0, this.damage = 5, this.range = 3, this.blastRadius = 0.55, this.totalCost = 0, this.upgrades = [], this.upIndexes = [], this.buffTime = 0, this.buffs = {}, this.onCreate(), this.upgrade(Et[o], -1);
        }
        var t, s, a;
        return t = e, (s = [
          {
            key: 'aim',
            value: function (e, t) {
              this.angle = Math.atan2(t - this.pos.y, e - this.pos.x) - Math.PI / 2;
            }
          },
          {
            key: 'attack',
            value: function (e, t, s, a) {
              e.dealDamage(this.getDamage()), this.onHit(e, t, s, a);
            }
          },
          {
            key: 'canFire',
            value: function () {
              return this.cd <= 0;
            }
          },
          {
            key: 'draw',
            value: function (e) {
              this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop();
            }
          },
          {
            key: 'getDamage',
            value: function () {
              return Math.round(this.damage * (this.buffs.damageBuff || 1));
            }
          },
          {
            key: 'getCooldown',
            value: function () {
              return Math.round(this.fullCd * (this.buffs.speedBuff || 1));
            }
          },
          {
            key: 'getSellPrice',
            value: function () {
              return Math.round(0.8 * this.totalCost);
            }
          },
          {
            key: 'kill',
            value: function () {
              this.alive = !1;
            }
          },
          {
            key: 'isDead',
            value: function () {
              return !this.alive;
            }
          },
          {
            key: 'onAim',
            value: function (e, t, s, a) {
              (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine && (this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()));
            }
          },
          {
            key: 'onCreate',
            value: function () {
              this.cd = 0;
            }
          },
          {
            key: 'onHit',
            value: function (e, t, s, a) {
            }
          },
          {
            key: 'resetCooldown',
            value: function () {
              this.cd = this.getCooldown();
            }
          },
          {
            key: 'target',
            value: function (e, t, s, a, i, o) {
              var n = this.visible(e, t);
              if (0 !== n.length) {
                var r = X(n, a, i, this.p5, t);
                r && this.onAim(r, t, s, e, o);
              }
            }
          },
          {
            key: 'update',
            value: function (e) {
              var t = e ? 2 : 1;
              this.cd > 0 && (this.cd -= t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}));
            }
          },
          {
            key: 'upgrade',
            value: function (e, t) {
              var s = this;
              -1 !== t && this.upIndexes.push(t);
              var a = void 0 === e ? {} : e;
              Object.keys(a).forEach(function (t) {
                'blook' === t && (s.img = s.images[e.blook], s.blook = e.blook), 'img' === t ? s.img = s.images[e.img] : 'cdMult' === t ? s.fullCd = Math.floor(s.fullCd * e.cdMult) : 'dmgMult' === t ? s.damage = Math.round(s.damage * e.dmgMult) : 'dmgAdd' === t ? s.damage += e.dmgAdd : 'rangeAdd' === t ? s.range += e.rangeAdd : 'blastMult' === t ? s.blastRadius = s.blastRadius * e.blastMult : 'freezeMult' === t ? s.freezeTime = Math.round(s.freezeTime * e.freezeMult) : 'maxTargetsMult' === t ? s.maxTargets = Math.round(s.maxTargets * e.maxTargetsMult) : 'dmgBuffMult' === t ? s.damageBuff = s.damageBuff * e.dmgBuffMult : 'speedBuffMult' === t ? s.speedBuff = s.speedBuff * e.speedBuffMult : [
                  'onHit',
                  'draw',
                  'onAim',
                  'attack',
                  'target',
                  'update'
                ].includes(t) ? s[t] = e[t].bind(s) : s[t] = e[t];
              }), e.cost && (this.totalCost += e.cost), this.level += 1;
            }
          },
          {
            key: 'visible',
            value: function (e, t) {
              return Y(this.pos.x, this.pos.y, this.range, e, t);
            }
          },
          {
            key: 'buff',
            value: function (e) {
              'jester' !== this.name && (this.buffTime = 50, this.buffs = e);
            }
          },
          {
            key: 'move',
            value: function (e, t, s) {
              this.gridPos = this.p5.createVector(e, t), this.pos = this.p5.createVector(e * s + s / 2, t * s + s / 2);
            }
          }
        ]) && Bt(t.prototype, s), a && Bt(t, a), e;
      }(), Pt = s('kWb9'), jt = [
        [{
            wait: 0,
            cd: 65,
            enemies: {
              types: [1],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 30,
            enemies: {
              types: [
                1,
                2
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 15,
            enemies: {
              types: [
                1,
                2,
                3
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 12,
            enemies: {
              types: [
                1,
                2,
                2,
                4
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [1],
              count: 53
            }
          }],
        [{
            wait: 0,
            cd: 20,
            enemies: {
              types: [8],
              count: 8
            }
          }],
        [{
            wait: 0,
            cd: 18,
            enemies: {
              types: [
                2,
                2,
                4,
                8
              ],
              count: 6
            }
          }],
        [{
            wait: 0,
            cd: 18,
            enemies: {
              types: [
                1,
                2,
                4,
                2,
                5,
                2,
                9
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 16,
            enemies: {
              types: [
                1,
                2,
                2,
                8,
                3,
                3,
                4,
                10
              ],
              count: 5
            }
          }],
        [
          {
            wait: 40,
            cd: 18,
            enemies: {
              types: [
                2,
                3,
                6,
                2,
                7,
                6,
                4,
                15
              ],
              count: 5
            }
          },
          {
            wait: 0,
            cd: 18,
            enemies: {
              types: [60],
              count: 1
            }
          }
        ],
        [{
            wait: 0,
            cd: 12,
            enemies: {
              types: [
                10,
                10,
                12
              ],
              count: 7
            }
          }],
        [{
            wait: 0,
            cd: 12,
            enemies: {
              types: [
                15,
                16,
                12,
                20
              ],
              count: 6
            }
          }],
        [{
            wait: 0,
            cd: 12,
            enemies: {
              types: [
                20,
                10,
                15,
                30
              ],
              count: 7
            }
          }],
        [{
            wait: 0,
            cd: 12,
            enemies: {
              types: [
                10,
                20,
                20,
                30
              ],
              count: 6
            }
          }],
        [{
            wait: 0,
            cd: 10,
            enemies: {
              types: [
                20,
                20,
                10,
                20,
                20,
                75
              ],
              count: 4
            }
          }],
        [{
            wait: 0,
            cd: 10,
            enemies: {
              types: [
                30,
                45,
                25,
                50
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 10,
            enemies: {
              types: [
                45,
                30,
                35,
                30,
                65
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 5,
            enemies: {
              types: [25],
              count: 35
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                60,
                40,
                55,
                80
              ],
              count: 5
            }
          }],
        [
          {
            wait: 80,
            cd: 7,
            enemies: {
              types: [
                20,
                30,
                40,
                50,
                60,
                70
              ],
              count: 5
            }
          },
          {
            wait: 0,
            cd: 7,
            enemies: {
              types: [375],
              count: 1
            }
          }
        ],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                70,
                80,
                70,
                120
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                80,
                90,
                100,
                140
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                70,
                90,
                100,
                110,
                150
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                100,
                60,
                75,
                90,
                90,
                65,
                60,
                170
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 20,
            enemies: {
              types: [235],
              count: 15
            }
          }],
        [{
            wait: 0,
            cd: 8,
            enemies: {
              types: [
                120,
                130,
                150
              ],
              count: 7
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                100,
                120,
                130,
                120,
                170
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                120,
                80,
                80,
                100,
                120,
                100,
                80,
                180,
                200
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 6,
            enemies: {
              types: [
                120,
                80,
                100,
                110,
                140,
                170,
                220
              ],
              count: 5
            }
          }],
        [
          {
            wait: 60,
            cd: 6,
            enemies: {
              types: [
                200,
                100,
                120,
                130,
                150,
                100
              ],
              count: 5
            }
          },
          {
            wait: 0,
            cd: 6,
            enemies: {
              types: [1700],
              count: 1
            }
          }
        ],
        [{
            wait: 0,
            cd: 5,
            enemies: {
              types: [
                250,
                200,
                150,
                350
              ],
              count: 6
            }
          }],
        [{
            wait: 0,
            cd: 5,
            enemies: {
              types: [
                250,
                200,
                250,
                350,
                250,
                200,
                250
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 5,
            enemies: {
              types: [
                250,
                200,
                300,
                400
              ],
              count: 6
            }
          }],
        [{
            wait: 0,
            cd: 5,
            enemies: {
              types: [
                350,
                300,
                450,
                350,
                350,
                400
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 10,
            enemies: {
              types: [800],
              count: 12
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                600,
                500,
                400,
                500,
                600,
                400,
                800
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                700,
                900,
                800,
                600,
                600,
                800,
                1000
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                600,
                700,
                800,
                900,
                1000,
                1100,
                1100
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                1000,
                800,
                900,
                900,
                800,
                1100,
                1100
              ],
              count: 5
            }
          }],
        [
          {
            wait: 90,
            cd: 4,
            enemies: {
              types: [
                1200,
                1100,
                1000,
                900,
                800
              ],
              count: 5
            }
          },
          {
            wait: 0,
            cd: 6,
            enemies: {
              types: [4200],
              count: 1
            }
          }
        ],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                1400,
                1100,
                900,
                1100,
                1400
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                1000,
                1200,
                1400,
                1600,
                1000,
                800
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                1500,
                1200,
                1500,
                1200,
                1400
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [
                1500,
                1800,
                1000,
                1500,
                1800
              ],
              count: 5
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [1850],
              count: 30
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [2000],
              count: 30
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [2200],
              count: 30
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [2400],
              count: 30
            }
          }],
        [{
            wait: 0,
            cd: 4,
            enemies: {
              types: [2600],
              count: 30
            }
          }],
        [
          {
            wait: 180,
            cd: 4,
            enemies: {
              types: [2200],
              count: 30
            }
          },
          {
            wait: 0,
            cd: 4,
            enemies: {
              types: [13000],
              count: 1
            }
          }
        ]
      ];
    function It(e) {
      return (It = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function Dt(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var s = [], a = !0, i = !1, o = void 0;
        try {
          for (var n, r = e[Symbol.iterator](); !(a = (n = r.next()).done) && (s.push(n.value), !t || s.length !== t); a = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            a || null == r.return || r.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return s;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return zt(e, t);
        var s = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === s && e.constructor && (s = e.constructor.name);
        if ('Map' === s || 'Set' === s)
          return Array.from(e);
        if ('Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return zt(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function zt(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var s = 0, a = new Array(t); s < t; s++)
        a[s] = e[s];
      return a;
    }
    function Ft(e, t) {
      var s = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), s.push.apply(s, a);
      }
      return s;
    }
    function At(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ft(Object(s), !0).forEach(function (t) {
          qt(e, t, s[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : Ft(Object(s)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
        });
      }
      return e;
    }
    function qt(e, t, s) {
      return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s, e;
    }
    function Ht(e, t, s, a, i, o, n) {
      try {
        var r = e[o](n), l = r.value;
      } catch (e) {
        return void s(e);
      }
      r.done ? t(l) : Promise.resolve(l).then(a, i);
    }
    function Wt(e) {
      return function () {
        var t = this, s = arguments;
        return new Promise(function (a, i) {
          var o = e.apply(t, s);
          function n(e) {
            Ht(o, a, i, n, r, 'next', e);
          }
          function r(e) {
            Ht(o, a, i, n, r, 'throw', e);
          }
          n(void 0);
        });
      };
    }
    function Lt(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }
    function Gt(e, t) {
      return (Gt = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function Ut(e) {
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
        var s, a = Kt(e);
        if (t) {
          var i = Kt(this).constructor;
          s = Reflect.construct(a, arguments, i);
        } else
          s = a.apply(this, arguments);
        return Vt(this, s);
      };
    }
    function Vt(e, t) {
      return !t || 'object' !== It(t) && 'function' != typeof t ? Qt(e) : t;
    }
    function Qt(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function Kt(e) {
      return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var Jt = {
        Blue: 'https://res.cloudinary.com/blooket/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg',
        Black: 'https://res.cloudinary.com/blooket/image/upload/v1593095363/Blooks/colors/blackBlook.svg',
        Green: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Blooks/colors/greenBlook.svg',
        Lime: 'https://res.cloudinary.com/blooket/image/upload/v1593095356/Blooks/colors/limeBlook.svg',
        Orange: 'https://res.cloudinary.com/blooket/image/upload/v1593095357/Blooks/colors/orangeBlook.svg',
        Pink: 'https://res.cloudinary.com/blooket/image/upload/v1593095358/Blooks/colors/pinkBlook.svg',
        Purple: 'https://res.cloudinary.com/blooket/image/upload/v1593095359/Blooks/colors/purpleBlook.svg',
        Red: 'https://res.cloudinary.com/blooket/image/upload/v1593095359/Blooks/colors/redBlook.svg',
        Snowflake: 'https://res.cloudinary.com/blooket/image/upload/v1593095360/Media/defense/snowflake.svg',
        'Slime Monster': 'https://res.cloudinary.com/blooket/image/upload/v1566683613/Blooks/slimeMonster.svg',
        'Red Slime Monster': 'https://res.cloudinary.com/blooket/image/upload/v1591739668/Blooks/redSlimeMonster.svg',
        'Dark Slime Monster': 'https://res.cloudinary.com/blooket/image/upload/v1591840817/Blooks/darkSlimeMonster.svg',
        'Light Slime Monster': 'https://res.cloudinary.com/blooket/image/upload/v1591896075/Blooks/lightSlimeMonster.svg'
      }, Yt = {
        BronzeTile: 'https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/bronzeTile.svg',
        SilverTile: 'https://res.cloudinary.com/blooket/image/upload/v1593095359/Media/defense/silverTile.svg',
        GoldTile: 'https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/goldTile.svg'
      }, Xt = {
        Chick: 'https://res.cloudinary.com/blooket/image/upload/v1556829562/Blooks/chick.svg',
        Chicken: 'https://res.cloudinary.com/blooket/image/upload/v1556829562/Blooks/chicken.svg',
        Owl: 'https://res.cloudinary.com/blooket/image/upload/v1556832316/Blooks/owl.svg',
        Pig: 'https://res.cloudinary.com/blooket/image/upload/v1556829564/Blooks/pig.svg',
        'Agent Owl': 'https://res.cloudinary.com/blooket/image/upload/v1590862499/Blooks/agentOwl.svg',
        Parrot: 'https://res.cloudinary.com/blooket/image/upload/v1566681189/Blooks/parrot.svg',
        Cockatoo: 'https://res.cloudinary.com/blooket/image/upload/v1566681188/Blooks/cockatoo.svg',
        Macaw: 'https://res.cloudinary.com/blooket/image/upload/v1566681188/Blooks/macaw.svg',
        'Party Pig': 'https://res.cloudinary.com/blooket/image/upload/v1590862509/Blooks/partyPig.svg',
        Goldfish: 'https://res.cloudinary.com/blooket/image/upload/v1556831934/Blooks/goldfish.svg',
        'Red Goldfish': 'https://res.cloudinary.com/blooket/image/upload/v1591019780/Blooks/redGoldfish.svg',
        Squirrel: 'https://res.cloudinary.com/blooket/image/upload/v1582775344/Blooks/squirrel.svg',
        'Nuts Squirrel': 'https://res.cloudinary.com/blooket/image/upload/v1591027039/Blooks/nutsSquirrel.svg',
        Elf: 'https://res.cloudinary.com/blooket/image/upload/v1566683612/Blooks/elf.svg',
        'Master Elf': 'https://res.cloudinary.com/blooket/image/upload/v1591048518/Blooks/masterElf.svg',
        'Enchanted Elf': 'https://res.cloudinary.com/blooket/image/upload/v1591048522/Blooks/enchantedElf.svg',
        'Baby Penguin': 'https://res.cloudinary.com/blooket/image/upload/v1566679726/Blooks/babyPenguin.svg',
        Penguin: 'https://res.cloudinary.com/blooket/image/upload/v1582775344/Blooks/penguin.svg',
        'Polar Bear': 'https://res.cloudinary.com/blooket/image/upload/v1566679726/Blooks/polarBear.svg',
        'Arctic Fox': 'https://res.cloudinary.com/blooket/image/upload/v1566679726/Blooks/arcticFox.svg',
        'Arctic Hare': 'https://res.cloudinary.com/blooket/image/upload/v1566679726/Blooks/arcticHare.svg',
        Seal: 'https://res.cloudinary.com/blooket/image/upload/v1566679726/Blooks/seal.svg',
        Dragon: 'https://res.cloudinary.com/blooket/image/upload/v1556832453/Blooks/dragon.svg',
        'Fire Dragon': 'https://res.cloudinary.com/blooket/image/upload/v1591214955/Blooks/fireDragon.svg',
        'Wind Dragon': 'https://res.cloudinary.com/blooket/image/upload/v1591215793/Blooks/windDragon.svg',
        Wizard: 'https://res.cloudinary.com/blooket/image/upload/v1556832453/Blooks/wizard.svg',
        Witch: 'https://res.cloudinary.com/blooket/image/upload/v1566683612/Blooks/witch.svg',
        'Lightning Wizard': 'https://res.cloudinary.com/blooket/image/upload/v1591282332/Blooks/lightningWizard.svg',
        King: 'https://res.cloudinary.com/blooket/image/upload/v1566683612/Blooks/king.svg',
        'Phantom King': 'https://res.cloudinary.com/blooket/image/upload/v1591301898/Blooks/phantomKing.svg',
        'King of Hearts': 'https://res.cloudinary.com/blooket/image/upload/v1582080266/Blooks/kingOfHearts.svg',
        Unicorn: 'https://res.cloudinary.com/blooket/image/upload/v1566683614/Blooks/unicorn.svg',
        'Crazy Unicorn': 'https://res.cloudinary.com/blooket/image/upload/v1591381159/Blooks/crazyUnicorn.svg',
        'uni-CORN': 'https://res.cloudinary.com/blooket/image/upload/v1591365760/Blooks/uni-CORN.svg',
        Jester: 'https://res.cloudinary.com/blooket/image/upload/v1566683612/Blooks/jester.svg',
        'Mad Hatter': 'https://res.cloudinary.com/blooket/image/upload/v1582080266/Blooks/madHatter.svg',
        Duck: 'https://res.cloudinary.com/blooket/image/upload/v1556829562/Blooks/duck.svg'
      }, Zt = {
        Egg: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/egg.svg',
        PigBomb: 'https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/pigBomb.svg',
        DiscoBall: 'https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/discoBall.svg',
        Fish: 'https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/fish.svg',
        Nut: 'https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/nut.svg',
        Arrow: 'https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/arrow.svg',
        MasterArrow: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/masterArrow.svg',
        EnchantedArrow: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/enchantedArrow.svg',
        WitchOrb: 'https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/witchOrb.svg',
        Sword: 'https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/sword.svg',
        PhantomSword: 'https://res.cloudinary.com/blooket/image/upload/v1593095358/Media/defense/phantomSword.svg',
        Heart: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/heart.svg',
        Missile: 'https://res.cloudinary.com/blooket/image/upload/v1593095354/Media/defense/missile.svg',
        BigMissile: 'https://res.cloudinary.com/blooket/image/upload/v1593095361/Media/defense/bigMissile.svg',
        Corn: 'https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/corn.svg',
        CornKernel: 'https://res.cloudinary.com/blooket/image/upload/v1593095364/Media/defense/cornKernel.svg'
      }, $t = function (e) {
        for (var t = [], s = 0; s < e.length; s++)
          for (var a = 0; a < e[s].length; a++)
            0 === e[s][a] && t.push({
              x: a,
              y: s
            });
        return t;
      }, es = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && Gt(e, t);
        }(r, e);
        var t, s, a, o, n = Ut(r);
        function r(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, r), (t = n.call(this, e)).state = {
            ready: !1,
            towerSelected: {},
            health: 100,
            round: 1,
            tokens: 0,
            buyTowerName: '',
            buyTower: {},
            roundGoing: !0,
            paused: !1,
            phase: 'tower',
            question: {},
            correct: !1,
            roundCompleted: !1,
            showShop: !1,
            isSmall: !1,
            askTour: !1,
            showTour: !1,
            hwGoal: 0,
            goalCompleted: !1,
            doubleSpeed: !1,
            totalDmg: 0,
            isLive: !1,
            chanceDesc: '',
            chanceColor: ''
          }, t.p5 = {}, t.canvasParentRef = {}, t.bgImage = null, t.tiles = [], t.tileSize = 24, t.enemies = [], t.futureEnemies = [], t.waves = [], t.spawnCd = 0, t.waveCd = 0, t.waitingOnWave = !1, t.ticksUntilSpawn = 0, t.ticksUntilWave = 0, t.lastSpawnIndex = 0, t.walkMap = [], t.paths = [], t.backPaths = [], t.dists = [], t.towers = [], t.numRows = 0, t.numColumns = 0, t.spawnpoints = [], t.exit = {}, t.map = {}, t.enemyImages = {}, t.tileImages = {}, t.towerImages = {}, t.projectileImages = {}, t.particleSystems = [], t.projectiles = [], t.questions = [], t.freeQuestions = [], t.corrects = e.defense ? JSON.parse(JSON.stringify(e.defense.corrects)) : {}, t.incorrects = e.defense ? JSON.parse(JSON.stringify(e.defense.incorrects)) : {}, t.questionResults = [], t.here = !0, t.waiting = !1, t.canGoNext = !1, t.roundGoing = !1, t.gameOver = !1, t.paused = !1, t.dmg = e.defense && e.defense.dmg ? e.defense.dmg : 0, t.notified = !1, t.dbRefStage = {}, t.dbRefEvent = {}, t.oldPhase = '', t.questionFrenzy = !1, t.noQuestionFrenzy = !1, t.bonusQuestion = !1, t.freezeCounter = 0, t.isFreeze = !1, t.ducks = [], t.kingReq = !1, t.kingResponses = [], t.doubleDamage = !1, t.spawnFish = !1, t.finalBoss = !1, t.tourRef = i.a.createRef(), t.onAnswer = t.onAnswer.bind(Qt(t)), t.getWalkMap = t.getWalkMap.bind(Qt(t)), t.getTower = t.getTower.bind(Qt(t)), t.getQuestion = t.getQuestion.bind(Qt(t)), t.setup = t.setup.bind(Qt(t)), t.preload = t.preload.bind(Qt(t)), t.draw = t.draw.bind(Qt(t)), t.mouseClicked = t.mouseClicked.bind(Qt(t)), t.answerTour = t.answerTour.bind(Qt(t)), t.answerNext = t.answerNext.bind(Qt(t)), t.updateDmg = t.updateDmg.bind(Qt(t)), t.resizeFit = t.resizeFit.bind(Qt(t)), t.recalculate = t.recalculate.bind(Qt(t)), t.walkable = t.walkable.bind(Qt(t)), t.outsideMap = t.outsideMap.bind(Qt(t)), t.resetGame = t.resetGame.bind(Qt(t)), t.showRange = t.showRange.bind(Qt(t)), t.buyTower = t.buyTower.bind(Qt(t)), t.nextRound = t.nextRound.bind(Qt(t)), t.nextWave = t.nextWave.bind(Qt(t)), t.sellTower = t.sellTower.bind(Qt(t)), t.upgradeTower = t.upgradeTower.bind(Qt(t)), t.chooseChance = t.chooseChance.bind(Qt(t)), t.endNow = t.endNow.bind(Qt(t)), t;
        }
        return t = r, (s = [
          {
            key: 'componentDidMount',
            value: (o = Wt(regeneratorRuntime.mark(function e() {
              var t = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if (e.sent || this.setState({ notLoggedIn: !0 }), this.props.defense && 'defense' === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0]) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/play'));
                  case 6:
                    Object(O.c)(), this.startTimeout = setTimeout(function () {
                      t.questions = t.props.defense.questions, t.setState({
                        ready: !0,
                        roundCompleted: 1 !== t.props.defense.round,
                        roundGoing: 1 === t.props.defense.round,
                        askTour: 1 === t.props.defense.round,
                        hwGoal: 1 === t.props.defense.round && t.props.defense.hwGoal ? parseInt(t.props.defense.hwGoal, 10) : 0,
                        isSmall: window.innerWidth <= 800,
                        health: t.props.defense.health,
                        round: t.props.defense.round,
                        tokens: t.props.defense.tokens,
                        isLive: t.props.defense.isLive,
                        doubleSpeed: t.props.defense.isLive
                      }, Wt(regeneratorRuntime.mark(function e() {
                        var s;
                        return regeneratorRuntime.wrap(function (e) {
                          for (;;)
                            switch (e.prev = e.next) {
                            case 0:
                              if (!t.state.isLive) {
                                e.next = 11;
                                break;
                              }
                              return s = 0, t.dmgInterval = setInterval(function () {
                                t.setState({ totalDmg: t.dmg }), t.notified ? t.notified = !1 : (s += 1) >= 5 && (s = 0, t.props.firebase.setVal({
                                  id: t.props.client.hostId,
                                  path: 'c/'.concat(t.props.client.name),
                                  val: {
                                    b: t.props.client.blook,
                                    d: t.dmg
                                  }
                                }));
                              }, 1000), e.next = 5, t.props.firebase.getDatabaseRef(t.props.client.hostId, 'stg');
                            case 5:
                              return t.dbRefStage = e.sent, t.dbRefStage.on('value', function (e) {
                                switch (e.val()) {
                                case 'fin':
                                  t.props.firebase.getDatabaseVal(t.props.client.hostId, 'st', function (e) {
                                    var s = e ? e.map(function (e) {
                                      return {
                                        name: e.n,
                                        blook: e.b,
                                        dmg: e.d,
                                        place: e.p
                                      };
                                    }).filter(function (e) {
                                      return e.dmg || 0 === e.dmg;
                                    }) : [];
                                    t.props.setDefense(At(At({}, t.props.defense), {}, {
                                      corrects: t.corrects,
                                      incorrects: t.incorrects,
                                      dmg: t.dmg,
                                      round: t.state.round,
                                      stage: 'final'
                                    })), t.props.setStanding(s), t.props.history.push('/defense/final');
                                  });
                                  break;
                                case null:
                                  t.props.firebase.getDatabaseVal(t.props.client.hostId, 'stg', function (e) {
                                    e || (t.props.deleteClient(), t.props.setDefense(null), t.props.history.push('/play'));
                                  });
                                }
                              }), e.next = 9, t.props.firebase.getDatabaseRef(t.props.client.hostId, 'ev');
                            case 9:
                              t.dbRefEvent = e.sent, t.dbRefEvent.on('value', function (e) {
                                if (e.val() && !t.state.showTour && !t.state.askTour) {
                                  t.oldPhase = t.state.phase;
                                  var s = N.b[e.val()], a = N.a[s];
                                  if (t.setState({
                                      eventName: s,
                                      event: a,
                                      buyTowerName: '',
                                      buyTower: {}
                                    }, function () {
                                      'Chance' !== s && (t.eventTimeout = setTimeout(function () {
                                        t.setState({
                                          event: {},
                                          eventName: ''
                                        });
                                      }, 6000));
                                    }), 'Question Frenzy' === s)
                                    t.questionFrenzy = !0, t.getQuestion(), t.questionFrenzyTimeout = setTimeout(function () {
                                      t.noQuestionFrenzy = !0;
                                    }, 22000);
                                  else if ('Earthquake' === s) {
                                    for (var i = $t(t.map.tiles), o = 0; o < t.tiles.length; o++)
                                      for (var n = 0; n < t.tiles[o].length; n++)
                                        3 === t.tiles[o][n] && (t.tiles[o][n] = 0);
                                    t.towers.forEach(function (e) {
                                      var s = Object(O.o)(i);
                                      i.splice(i.indexOf(s), 1), e.move(s.x, s.y, t.tileSize), t.tiles[s.y][s.x] = 3;
                                    });
                                  } else if ('Tax Time' === s)
                                    t.setState({ tokens: Math.ceil(t.state.tokens / 2) });
                                  else if ('Alien Invasion' === s) {
                                    var r = Object(O.o)(t.towers), l = t.towers.indexOf(r);
                                    t.tiles[r.gridPos.y][r.gridPos.x] = 0, t.towers.splice(l, 1);
                                  } else if ('A Little Help' === s) {
                                    var c = $t(t.tiles);
                                    if (0 === c.length)
                                      return;
                                    var h = Object(O.o)(c), u = Object(O.o)(Object.keys(Et)), d = new Nt(h.x, h.y, t.p5, t.tileSize, u, t.towerImages);
                                    t.towers.push(d), d.fullCd > 100 && (t.towers[t.towers.length - 1].fullCd += t.towers.filter(function (e) {
                                      return e.fullCd > 100;
                                    }).length - 1), t.tiles[h.y][h.x] = 3;
                                  } else if ('Bonus Question' === s)
                                    t.bonusQuestion = !0, t.getQuestion();
                                  else if ('Chance' === s)
                                    t.setState({
                                      chanceDesc: a.desc,
                                      chanceColor: ''
                                    });
                                  else if ('Freeze' === s)
                                    t.freezeCounter = 3, t.isFreeze = !0, t.getQuestion();
                                  else if ('Annoying Ducks' === s)
                                    for (var p = $t(t.tiles), f = 0; f < Math.min(3, p.length); f++) {
                                      var m = Object(O.o)(p);
                                      p.splice(p.indexOf(m), 1), t.ducks.push(m), t.tiles[m.y][m.x] = 2;
                                    }
                                  else if ('King\'s Request' === s)
                                    t.kingReq = !0, t.kingResponses = [], t.getQuestion();
                                  else if ('Boom' === s) {
                                    var g = 0;
                                    t.enemies.forEach(function (e) {
                                      g += e.health;
                                    }), t.enemies = [], t.futureEnemies.forEach(function (e) {
                                      g += e;
                                    }), t.futureEnemies = [], t.dmg += g, t.setState({ totalDmg: t.dmg }), t.waves = [];
                                  } else
                                    'Double Damage' === s ? (t.doubleDamage = !0, t.doubleDamageTimeout = setTimeout(function () {
                                      t.doubleDamage = !1;
                                    }, 25000)) : 'Difficulty Increase' === s ? t.setState({ round: t.state.round + 3 }) : 'Reinforcements' === s ? t.spawnFish = !0 : 'Final Boss' === s && (t.finalBoss = !0);
                                }
                              });
                            case 11:
                            case 'end':
                              return e.stop();
                            }
                        }, e);
                      })));
                    }, 1000), window.onfocus = function () {
                      t.paused = !1;
                    }, window.onblur = function () {
                      t.paused = !0;
                    };
                  case 10:
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
              Object(O.t)(), clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.endTimeout), clearTimeout(this.gameOverTimeout), clearTimeout(this.eventTimeout), clearTimeout(this.questionFrenzyTimeout), clearTimeout(this.doubleDamageTimeout), clearInterval(this.dmgInterval), clearInterval(this.fishInterval), this.here = !1, window.onfocus = function () {
              }, window.onblur = function () {
              }, Object.keys(this.dbRefStage).length && this.dbRefStage.off('value'), Object.keys(this.dbRefEvent).length && this.dbRefEvent.off('value');
            }
          },
          {
            key: 'onAnswer',
            value: function (e) {
              var t = this;
              if (!this.waiting) {
                this.waiting = !0;
                var s = this.state.question.correctAnswers.includes(e), a = this.state.question.number;
                s ? this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1 : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.canGoNext = !1, this.setState({
                  correct: s,
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
            key: 'getWalkMap',
            value: function () {
              for (var e = [], t = 0; t < this.numRows; t++) {
                e[t] = [];
                for (var s = 0; s < this.numColumns; s++)
                  e[t][s] = this.walkable(s, t);
              }
              return e;
            }
          },
          {
            key: 'getTower',
            value: function (e, t) {
              for (var s = 0; s < this.towers.length; s++) {
                var a = this.towers[s];
                if (a.gridPos.x === e && a.gridPos.y === t)
                  return a;
              }
              return null;
            }
          },
          {
            key: 'getQuestion',
            value: function () {
              var e = this;
              if (this.here && 'question' !== this.state.phase) {
                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                var t = Object(O.o)(this.freeQuestions);
                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(O.w)(t.answers)), this.setState({
                  question: t,
                  roundCompleted: this.state.roundCompleted && (this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq),
                  phase: 'question'
                }, function () {
                  e.waiting = !0, e.waitTimeout = setTimeout(function () {
                    e.waiting = !1;
                  }, 400);
                });
              }
            }
          },
          {
            key: 'setup',
            value: function (e, t) {
              this.p5 = e, this.canvasParentRef = t, this.canvasParentRef.className = v.a.sketchHolder;
              var s = e.createCanvas(t.offsetWidth, t.offsetHeight);
              s.canvas.className = v.a.sketchCanvas, s.parent(t), this.p5.frameRate(30), this.resetGame();
            }
          },
          {
            key: 'preload',
            value: function (e) {
              var t = this;
              Object.entries(Jt).forEach(function (s) {
                var a = Dt(s, 2), i = a[0], o = a[1];
                t.enemyImages[i] = e.loadImage(Object(O.f)(o));
              }), Object.entries(Yt).forEach(function (s) {
                var a = Dt(s, 2), i = a[0], o = a[1];
                t.tileImages[i] = e.loadImage(Object(O.f)(o));
              }), Object.entries(Zt).forEach(function (s) {
                var a = Dt(s, 2), i = a[0], o = a[1];
                t.projectileImages[i] = e.loadImage(Object(O.f)(o));
              }), Object.entries(Xt).forEach(function (s) {
                var a = Dt(s, 2), i = a[0], o = a[1];
                t.towerImages[i] = e.loadImage(Object(O.f)(o));
              }), this.bgImage = e.loadImage(Pt.a[this.props.defense.map].img);
            }
          },
          {
            key: 'draw',
            value: function (e) {
              var t = this;
              if (!this.paused) {
                if (e.imageMode(this.p5.CORNER), e.background(this.bgImage), this.tiles.forEach(function (s, a) {
                    s.forEach(function (s, i) {
                      if (3 === s) {
                        var o = t.getTower(i, a);
                        o && o.level > 0 && (1 === o.level ? t.p5.image(t.tileImages.BronzeTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize) : 2 === o.level ? t.p5.image(t.tileImages.SilverTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize) : 3 === o.level && t.p5.image(t.tileImages.GoldTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize));
                      }
                      e.stroke('#3a3a3a33'), e.noFill(), e.strokeWeight(2), e.rect(i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize);
                    });
                  }), this.ducks.forEach(function (e) {
                    t.p5.push(), t.p5.imageMode(t.p5.CENTER), t.p5.image(t.towerImages.Duck, e.x * t.tileSize + t.tileSize / 2, e.y * t.tileSize + t.tileSize / 2, 0.65 * t.tileSize, 0.65 * t.tileSize * 1.15), t.p5.pop();
                  }), !this.state.paused && this.roundGoing && (this.ticksUntilSpawn > 0 && (this.ticksUntilSpawn -= this.state.doubleSpeed ? 2 : 1), this.ticksUntilWave > 0 && (this.ticksUntilWave -= this.state.doubleSpeed ? 2 : 1)), this.futureEnemies.length > 0 && this.ticksUntilSpawn <= 0) {
                  var s = this.futureEnemies.shift(), a = this.lastSpawnIndex + 1 >= this.spawnpoints.length ? 0 : this.lastSpawnIndex + 1, i = this.spawnpoints[a];
                  this.enemies.push(new se(i.x, i.y, e, this.tileSize, this.enemyImages, s, this.updateDmg)), this.ticksUntilSpawn = this.spawnCd;
                }
                for (var o = this.enemies.length - 1; o >= 0; o--) {
                  var n = this.enemies[o];
                  !this.state.paused && this.roundGoing && (n.steer(this.tileSize, this.numColumns, this.numRows, this.paths, this.exit), n.update(this.tileSize, this.state.doubleSpeed)), this.outsideMap(n) && n.kill(), !this.state.paused && Q(n.pos.x, n.pos.y, this.exit.x, this.exit.y, this.tileSize, this.p5) && (this.setState({ health: Math.max(this.state.health - n.health, 0) }, function () {
                    0 !== t.state.health || t.state.isLive || (t.gameOver = !0, t.setState({ gameOver: !0 }, function () {
                      t.gameOverTimeout = setTimeout(function () {
                        t.props.setDefense(At(At({}, t.props.defense), {}, {
                          corrects: t.corrects,
                          incorrects: t.incorrects,
                          towers: t.towers.map(function (e) {
                            return {
                              name: e.name,
                              upIndexes: e.upIndexes,
                              col: e.gridPos.x,
                              row: e.gridPos.y
                            };
                          }),
                          health: 0,
                          dmg: t.dmg,
                          round: t.state.round,
                          tokens: t.state.tokens,
                          stage: 'final'
                        })), t.props.history.push('/defense/final');
                      }, 5000);
                    }));
                  }), n.kill()), n.isDead() ? this.enemies.splice(o, 1) : n.draw(this.tileSize);
                }
                this.state.towerSelected.range && this.showRange(this.state.towerSelected);
                for (var r = this.towers.length - 1; r >= 0; r--) {
                  var l = this.towers[r];
                  this.doubleDamage && l.buff({ damageBuff: 2 }), this.state.paused || (this.roundGoing && l.target(this.enemies, this.tileSize, this.particleSystems, this.dists, this.paths, this.projectiles, this.backPaths, this.exit, this.towers), l.update(this.state.doubleSpeed)), this.outsideMap(l) && l.kill(), l.isDead() ? this.towers.splice(r, 1) : l.draw(this.tileSize, this.towerImages);
                }
                for (var c = this.particleSystems.length - 1; c >= 0; c--) {
                  var h = this.particleSystems[c];
                  this.state.paused || h.run(this.state.doubleSpeed), h.isDead() && this.particleSystems.splice(c, 1);
                }
                for (var u = this.projectiles.length - 1; u >= 0; u--) {
                  var d = this.projectiles[u];
                  this.state.paused || d.update(this.tileSize, this.state.doubleSpeed, this.enemies, this.dists, this.paths, this.spawnpoints[0]), d.reachedTarget(this.tileSize, this.enemies) && d.onHit(this.enemies, this.tileSize, this.particleSystems, this.projectiles, this.dists, this.paths), this.outsideMap(d) && d.kill(), d.draw(this.tileSize, this.projectileImages), d.isDead() && this.projectiles.splice(u, 1);
                }
                var p = Z(this.p5.mouseX, this.p5.mouseY, this.numColumns, this.numRows, this.tileSize);
                if (p) {
                  var f = F(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize);
                  3 === this.tiles[f.y][f.x] ? this.p5.cursor('pointer') : this.p5.cursor('auto');
                }
                if (p && this.state.buyTowerName) {
                  this.p5.cursor('pointer');
                  var m = F(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize), g = V(m.x, m.y, this.tileSize, this.p5), y = this.state.buyTower.gridPos && this.state.buyTower.gridPos.x === m.x && this.state.buyTower.gridPos.y === m.y ? this.state.buyTower : new Nt(m.x, m.y, this.p5, this.tileSize, this.state.buyTowerName, this.towerImages);
                  if (this.setState({ buyTower: y }), this.showRange(y), 0 !== this.tiles[m.y][m.x]) {
                    this.p5.push(), this.p5.translate(g.x, g.y), this.p5.rotate(Math.PI / 4), this.p5.noStroke(), this.p5.fill(207, 0, 15);
                    var w = 0.1 * this.tileSize, _ = 0.9 * this.tileSize / 2;
                    this.p5.rect(-w, _, 2 * w, 2 * -_), this.p5.rotate(Math.PI / 2), this.p5.rect(-w, _, 2 * w, 2 * -_), this.p5.pop();
                  } else
                    y.draw(this.tileSize);
                }
                this.waitingOnWave && this.ticksUntilWave <= 0 && (this.ticksUntilWave = 0, this.nextWave()), 0 === this.futureEnemies.length && !this.waitingOnWave && this.roundGoing && (this.ticksUntilWave = this.waveCd, this.waitingOnWave = !0);
              }
            }
          },
          {
            key: 'mouseClicked',
            value: function (e) {
              if (Z(e.mouseX, e.mouseY, this.numColumns, this.numRows, this.tileSize) && !(this.state.isSmall && this.state.towerSelected && this.state.towerSelected.title || this.state.chanceDesc || this.state.roundCompleted)) {
                var t = F(e.mouseX, e.mouseY, this.p5, this.tileSize), s = this.getTower(t.x, t.y);
                s && 'tower' === this.state.phase ? this.state.towerSelected === s ? this.setState({ towerSelected: {} }) : this.setState({ towerSelected: s }) : this.setState({ towerSelected: {} }), this.state.buyTowerName && this.buyTower();
              }
            }
          },
          {
            key: 'answerTour',
            value: function (e) {
              this.here && (e ? this.setState({
                askTour: !1,
                showTour: !0,
                roundGoing: !0
              }) : this.setState({
                askTour: !1,
                showTour: !1,
                roundCompleted: !0,
                roundGoing: !1
              }));
            }
          },
          {
            key: 'answerNext',
            value: function () {
              clearTimeout(this.nextTimeout), this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq ? this.kingReq && this.kingResponses.push(this.state.correct) : this.questionResults.push(this.state.correct);
              var e = 0;
              return this.state.correct && (e += 1, this.bonusQuestion && (e += 2), this.freezeCounter > 0 && this.isFreeze ? (this.freezeCounter -= 1, e -= 1) : this.kingReq && (e -= 1)), this.kingReq && this.kingResponses.length >= 2 ? (this.kingResponses.filter(function (e) {
                return e;
              }).length >= 2 && (this.dmg *= 2, this.setState({ totalDmg: this.dmg })), this.kingReq = !1, this.kingResponses = [], 'question' === this.oldPhase && this.getQuestion(), void this.setState({ phase: this.oldPhase })) : this.bonusQuestion || this.noQuestionFrenzy || this.freezeCounter <= 0 && this.isFreeze ? (this.bonusQuestion = !1, this.questionFrenzy = !1, this.noQuestionFrenzy = !1, this.isFreeze = !1, 'question' === this.oldPhase && this.getQuestion(), void this.setState({
                tokens: this.state.tokens + e,
                phase: this.oldPhase
              })) : (this.questionResults.length >= 3 && !this.questionFrenzy && !this.isFreeze && !this.kingReq ? (this.questionResults.filter(function (e) {
                return e;
              }).length >= 3 && (e += Math.floor(this.state.round / 10) + 1), 1 === this.state.round && this.state.tokens + e < 2 && (e = 2 - this.state.tokens), this.setState({ phase: 'tower' })) : this.getQuestion(), void this.setState({ tokens: this.state.tokens + e }));
            }
          },
          {
            key: 'updateDmg',
            value: function (e) {
              this.dmg += e;
            }
          },
          {
            key: 'resizeFit',
            value: function () {
              var e = Math.floor(this.canvasParentRef.offsetWidth / this.numColumns), t = Math.floor(this.canvasParentRef.offsetHeight / this.numRows);
              this.tileSize = Math.min(e, t), this.p5.resizeCanvas(this.numColumns * this.tileSize, this.numRows * this.tileSize, !0);
            }
          },
          {
            key: 'recalculate',
            value: function () {
              var e = this;
              this.walkMap = this.getWalkMap();
              var t = [], s = ''.concat(this.exit.x, ',').concat(this.exit.y);
              t.push(s);
              var a = {}, i = {};
              for (a[s] = null, i[s] = 0; 0 !== t.length;)
                for (var o = t.shift(), n = q(o, this.p5), r = W(this.walkMap, n.x, n.y, !0), l = 0; l < r.length; l++) {
                  var c = r[l];
                  c in a && c in i || (t.push(c), a[c] = o, i[c] = i[o] + 1);
                }
              this.dists = G(this.numRows, this.numColumns, null);
              for (var h = G(this.numRows, this.numColumns, 0), u = Object.keys(a), d = 0; d < u.length; d++) {
                var p = u[d], f = q(p, this.p5);
                this.dists[f.y][f.x] = i[p];
                var m = a[p];
                if (null !== m) {
                  var g = q(m, this.p5).sub(f);
                  g.x < 0 && (h[f.y][f.x] = 1), g.y < 0 && (h[f.y][f.x] = 2), g.x > 0 && (h[f.y][f.x] = 3), g.y > 0 && (h[f.y][f.x] = 4);
                }
              }
              var y = [];
              this.spawnpoints.forEach(function (t) {
                for (var s = G(e.numRows, e.numColumns, 0), a = {
                      x: t.x,
                      y: t.y
                    }, i = h[a.y][a.x]; i;)
                  1 === i ? (a.x -= 1, i = 3) : 2 === i ? (a.y -= 1, i = 4) : 3 === i ? (a.x += 1, i = 1) : 4 === i && (a.y += 1, i = 2), s[a.y][a.x] = i, i = h[a.y][a.x];
                y.push(s);
              }), this.backPaths = y, this.paths = h;
            }
          },
          {
            key: 'walkable',
            value: function (e, t) {
              return [
                1,
                4,
                5
              ].includes(this.tiles[t][e]);
            }
          },
          {
            key: 'outsideMap',
            value: function (e) {
              return A(e.pos.x, e.pos.y, 0, 0, this.numColumns * this.tileSize, this.numRows * this.tileSize);
            }
          },
          {
            key: 'resetGame',
            value: function () {
              var e = this;
              this.map = Pt.a[this.props.defense.map], this.numRows = this.map.tiles.length, this.numColumns = this.map.tiles[0].length, this.tiles = G(this.numRows, this.numColumns), this.map.tiles.forEach(function (t, s) {
                t.forEach(function (t, a) {
                  e.tiles[s][a] = t, 4 === t ? e.spawnpoints.push({
                    x: a,
                    y: s
                  }) : 5 === t && (e.exit = {
                    x: a,
                    y: s
                  });
                });
              }), this.resizeFit(), this.recalculate(), this.props.defense.towers.forEach(function (t) {
                var s = new Nt(t.col, t.row, e.p5, e.tileSize, t.name, e.towerImages);
                e.tiles[t.row][t.col] = 3, t.upIndexes.forEach(function (e, t) {
                  s.upgrade(s.upgrades[t][e].data, e);
                }), e.towers.push(s);
              });
            }
          },
          {
            key: 'showRange',
            value: function (e) {
              if (!this.outsideMap(e)) {
                this.p5.push(), this.p5.stroke('#3a3a3a77'), this.p5.strokeWeight(3), this.p5.fill(128, 128, 128, 63);
                var t = (e.range + 0.5) * this.tileSize * 2;
                this.p5.ellipse(e.pos.x, e.pos.y, t, t), this.p5.pop();
              }
            }
          },
          {
            key: 'buyTower',
            value: function (e) {
              if (this.state.buyTower && this.state.buyTower.gridPos && !this.outsideMap(this.state.buyTower) && (!this.state.isSmall || e)) {
                var t = this.state.buyTower.cost && this.state.tokens >= this.state.buyTower.cost, s = this.state.buyTower.gridPos && 0 === this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x];
                t && s && (this.towers.push(this.state.buyTower), this.state.buyTower.fullCd > 100 && (this.towers[this.towers.length - 1].fullCd += this.towers.filter(function (e) {
                  return e.fullCd > 100;
                }).length - 1), this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x] = 3, this.setState({
                  towerSelected: this.state.showTour && this.state.isSmall ? {} : this.state.buyTower,
                  tokens: this.state.tokens - this.state.buyTower.cost
                }), this.state.showTour && this.tourRef.current.setStep(7)), this.setState({
                  buyTowerName: '',
                  buyTower: {},
                  showShop: !1
                });
              }
            }
          },
          {
            key: 'nextRound',
            value: function () {
              this.roundGoing || (this.state.round <= jt.length ? this.waves = JSON.parse(JSON.stringify(jt[this.state.round - 1])) : this.waves = [
                {
                  wait: 180,
                  cd: 5,
                  enemies: {
                    types: [2300 + 220 * (this.state.round - 50)],
                    count: this.state.round - 50 + 40
                  }
                },
                {
                  wait: 0,
                  cd: 4,
                  enemies: {
                    types: [11000 + 350 * (this.state.round - 50)],
                    count: 1
                  }
                }
              ], this.finalBoss && (this.finalBoss = !1, this.waves.push({
                wait: 0,
                cd: 4,
                enemies: {
                  types: [500 * this.state.round],
                  count: 1
                }
              })), this.setState({
                roundGoing: !0,
                doubleSpeed: this.state.doubleSpeed || this.state.isLive
              }), this.roundGoing = !0, this.waitingOnWave = !1, this.nextWave());
            }
          },
          {
            key: 'nextWave',
            value: function () {
              var e = this;
              if (!this.gameOver)
                if (0 !== this.waves.length) {
                  if (this.spawnFish) {
                    this.spawnFish = !1;
                    var t = 5;
                    this.fishInterval = setInterval(function () {
                      e.projectiles.push(new Ct(e.exit.x * e.tileSize + e.tileSize / 2, e.exit.y * e.tileSize + e.tileSize / 2, null, 100, e.p5, Object(O.o)(e.backPaths))), (t -= 1) <= 0 && clearInterval(e.fishInterval);
                    }, 750);
                  }
                  this.futureEnemies = [];
                  var s = this.waves.shift();
                  this.waveCd = s.wait, this.spawnCd = s.cd;
                  for (var a = 0; a < s.enemies.count; a++)
                    s.enemies.types.forEach(function (t) {
                      e.futureEnemies.push(t);
                    });
                } else
                  0 === this.enemies.length && (this.waitingOnWave = !1, this.roundGoing = !1, this.endTimeout = setTimeout(function () {
                    e.questionResults = [];
                    var t = e.state.round + 1;
                    e.setState({
                      roundGoing: !1,
                      roundCompleted: !0,
                      goalCompleted: !!e.props.defense.hwGoal && parseInt(e.props.defense.hwGoal, 10) === e.state.round,
                      buyTowerName: '',
                      buyTower: {},
                      showShop: !1,
                      round: t
                    }), e.props.defense.defenseId && (y.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, y.a.put('/api/defenses/save', {
                      id: e.props.defense.defenseId,
                      corrects: e.corrects,
                      incorrects: e.incorrects,
                      dmg: e.dmg,
                      round: t,
                      health: e.state.health,
                      tokens: e.state.tokens,
                      towers: e.towers.map(function (e) {
                        return {
                          name: e.name,
                          upIndexes: e.upIndexes,
                          col: e.gridPos.x,
                          row: e.gridPos.y
                        };
                      })
                    }).catch(function (t) {
                      console.error(t), e.props.history.push('/login');
                    })), e.props.defense.resultId && y.a.put('/api/results', {
                      id: e.props.defense.resultId,
                      data: {
                        corrects: e.corrects,
                        incorrects: e.incorrects,
                        round: t,
                        alive: !0
                      }
                    }).catch(function (e) {
                      console.error(e);
                    });
                  }, 1000));
            }
          },
          {
            key: 'sellTower',
            value: function () {
              var e = this.towers.indexOf(this.state.towerSelected);
              -1 !== e ? (this.tiles[this.state.towerSelected.gridPos.y][this.state.towerSelected.gridPos.x] = 0, this.towers.splice(e, 1), this.setState({
                tokens: this.state.tokens + this.state.towerSelected.getSellPrice(),
                towerSelected: {}
              })) : this.setState({ towerSelected: {} });
            }
          },
          {
            key: 'upgradeTower',
            value: function (e, t) {
              var s = this.state.tokens - e.data.cost;
              s < 0 || (this.state.towerSelected.upgrade(e.data, t), this.setState({ tokens: s }));
            }
          },
          {
            key: 'chooseChance',
            value: function (e) {
              !1 === e ? this.setState({
                event: {},
                eventName: '',
                chanceDesc: '',
                chanceColor: ''
              }) : Math.random() > 0.5 ? (this.dmg = 2 * this.dmg, this.setState({
                chanceDesc: 'Lucky! You just doubled your total damage!',
                totalDmg: this.dmg,
                chanceColor: '#4bc22e'
              })) : (this.dmg = Math.round(this.dmg / 2), this.setState({
                chanceDesc: 'Unlucky! You just lost half your total damage!',
                totalDmg: this.dmg,
                chanceColor: '#c43a35'
              }));
            }
          },
          {
            key: 'endNow',
            value: function () {
              this.here && (this.props.setDefense(At(At({}, this.props.defense), {}, {
                corrects: this.corrects,
                incorrects: this.incorrects,
                towers: this.towers.map(function (e) {
                  return {
                    name: e.name,
                    upIndexes: e.upIndexes,
                    col: e.gridPos.x,
                    row: e.gridPos.y
                  };
                }),
                health: 0,
                dmg: this.dmg,
                round: this.state.round,
                tokens: this.state.tokens,
                stage: 'final'
              })), this.props.history.push('/defense/final'));
            }
          },
          {
            key: 'render',
            value: function () {
              var e, t, s = this;
              return this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.defense && this.props.defense.questions && this.props.defense.questions[0] ? i.a.createElement('div', {
                className: u.isMobile ? x.a.mBody : x.a.body,
                id: 'body'
              }, i.a.createElement(w.a, {
                title: 'Play Tower Defense | Blooket',
                desc: 'Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks.'
              }), i.a.createElement(k.a, { coins: this.state.tokens }), this.state.ready ? i.a.createElement('div', {
                className: m()(x.a.regularBody, v.a.bodyContainer),
                id: 'regularBody'
              }, this.state.showTour ? i.a.createElement(R.a, {
                steps: (e = this.state.isSmall, t = this.state.isLive, [
                  {
                    elementId: e ? 'mBottom' : 'health',
                    text: t ? 'In Tower Defense, your goal is to defend against waves of Evil Blooks. You win by dealing the most damage to Evil Blooks, shown here!' : 'In Tower Defense, your goal is to defend against waves of Evil Blooks. That means you have to keep this health above 0!',
                    nextButtonText: 'Next',
                    backgroundColor: '#fff',
                    className: I.a.health
                  },
                  {
                    text: 'To defend against these waves, you\'ll need to buy and upgrade Towers! It will take Upgrade Tokens to do this.',
                    nextButtonText: 'Next',
                    className: I.a.centered
                  },
                  {
                    text: 'Before each round of enemies, you\'ll answer three questions. You get 1 Upgrade Token for each correct answer, and a bonus token for getting all 3 correct!',
                    nextButtonText: 'Next',
                    className: I.a.centered,
                    functionIndex: 0
                  },
                  {
                    elementId: e ? 'header' : 'coinsText',
                    text: 'We\'ll answer those for you right now, and because we got all 3 correct, you can see 4 Upgrade Tokens in the top right!',
                    nextButtonText: 'Next',
                    backgroundColor: e ? null : '#9a49aa',
                    className: I.a.topRight
                  },
                  {
                    text: 'Evil Blooks will spawn at the arrow on the map and follow the path towards the \'X\'! Towers will attack them to prevent this.',
                    nextButtonText: 'Next',
                    className: I.a.centered
                  },
                  {
                    text: e ? 'Now try buying a Tower! Just tap the \'Open Shop\' button, choose a Blook, tap to place it on the map, and then tap \'Confirm Buy\'! The price of each Tower is shown in the blue box.' : 'Now try buying a Tower! Just click a Blook to the right and then place it on the map. The price of each Tower is shown in the blue box.',
                    nextButtonText: 'Got It!',
                    className: I.a.shop
                  },
                  { functionIndex: 1 },
                  {
                    elementId: 'stats',
                    text: 'Great work! You can now click on the tower to see its stats and buy upgrades. Each Blook has 3 stages, you can pick one upgrade per stage and the final upgrade is the most powerful!',
                    nextButtonText: 'Next',
                    className: I.a.stats
                  },
                  {
                    elementId: e ? 'mNextRound' : 'nextRound',
                    text: 'Make sure you upgrade your Towers and buy new ones. Now you\'re on your own! Click the \'Next Round\' button to begin!',
                    elementClick: !0,
                    className: I.a.nextRound
                  }
                ]),
                onExit: function () {
                  return s.setState({ showTour: !1 });
                },
                functions: [
                  function () {
                    return s.setState({ tokens: 4 });
                  },
                  function () {
                    return s.setState({
                      roundGoing: !1,
                      buyTowerName: '',
                      buyTower: {}
                    });
                  }
                ],
                ref: this.tourRef
              }) : null, i.a.createElement('div', { className: v.a.mTopContainer }, i.a.createElement('div', { className: v.a.mRoundText }, 'Round '.concat(this.state.round)), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement('div', {
                className: v.a.mMainButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.state.buyTowerName ? function () {
                  return s.setState({
                    buyTowerName: '',
                    buyTower: {}
                  });
                } : this.nextRound,
                style: { backgroundColor: this.state.buyTowerName ? '#c43a35' : '#0bc2cf' },
                id: 'mNextRound'
              }, i.a.createElement('i', {
                className: this.state.buyTowerName ? 'fas fa-times' : 'fas fa-play',
                style: {
                  marginRight: 10,
                  fontSize: 20
                }
              }), this.state.buyTowerName ? 'Cancel Buy' : 'Next Round') : this.state.roundGoing && !this.state.isLive ? i.a.createElement('div', {
                className: v.a.mMainButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ doubleSpeed: !s.state.doubleSpeed });
                }
              }, i.a.createElement('i', {
                className: this.state.doubleSpeed ? 'fas fa-fast-backward' : 'fas fa-fast-forward',
                style: {
                  marginRight: 10,
                  fontSize: 20
                }
              }), this.state.doubleSpeed ? '1X Speed' : '2X Speed') : null), i.a.createElement('div', {
                className: v.a.leftSide,
                style: { transform: 'translateX('.concat(this.state.towerSelected.title || this.state.buyTowerName ? 0 : -110, '%)') },
                id: 'stats'
              }, this.state.buyTowerName ? i.a.createElement('div', null, i.a.createElement('div', { className: v.a.infoRow }, i.a.createElement('img', {
                src: Xt[this.state.buyTower.blook],
                alt: this.state.buyTower.blook,
                className: v.a.infoBlook,
                draggable: !1
              }), i.a.createElement('div', { className: v.a.infoTitle }, this.state.buyTower.title)), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-fist-raised',
                style: { marginRight: 8 }
              }), 'Damage: '.concat(this.state.buyTower.damage)), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-running',
                style: { marginRight: 8 }
              }), 'Attack Time: \u2248'.concat(Math.round(this.state.buyTower.fullCd / 30 * 10) / 10, 's')), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-expand-alt',
                style: { marginRight: 8 }
              }), 'Range: '.concat(this.state.buyTower.range)), i.a.createElement('div', { className: v.a.descText }, i.a.createElement('div', { style: { fontWeight: 'bold' } }, 'Description:'), this.state.buyTower.desc)) : null, this.state.towerSelected.title ? i.a.createElement('div', null, i.a.createElement('div', { className: v.a.infoRow }, i.a.createElement('img', {
                src: Xt[this.state.towerSelected.blook],
                alt: this.state.towerSelected.blook,
                className: v.a.infoBlook,
                draggable: !1
              }), i.a.createElement('div', { className: v.a.infoTitle }, this.state.towerSelected.title)), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-fist-raised',
                style: { marginRight: 8 }
              }), 'Damage: '.concat(this.state.towerSelected.damage)), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-running',
                style: { marginRight: 8 }
              }), 'Attack Time: \u2248'.concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, 's')), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-expand-alt',
                style: { marginRight: 8 }
              }), 'Range: '.concat(this.state.towerSelected.range)), i.a.createElement('div', {
                className: v.a.sellButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.sellTower
              }, i.a.createElement('i', {
                className: 'fas fa-coins',
                style: { marginRight: 10 }
              }), 'Sell ('.concat(this.state.towerSelected.getSellPrice(), ')')), i.a.createElement('div', { className: v.a.upgradesText }, 3 === this.state.towerSelected.level ? 'Max Upgrades' : 'Upgrades'), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map(function (e, t) {
                return i.a.createElement('div', {
                  className: m()(v.a.upgradeContainer, qt({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                  style: { opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null },
                  key: e.data.title,
                  role: 'button',
                  tabIndex: 0,
                  onClick: 3 === s.state.towerSelected.level ? function () {
                  } : function () {
                    return s.upgradeTower(e, t);
                  }
                }, i.a.createElement('div', { className: v.a.upgradeRow }, e.icon ? i.a.createElement('i', {
                  className: m()(v.a.upgradeIcon, e.icon),
                  style: { backgroundColor: e.iconColor }
                }) : i.a.createElement('img', {
                  src: Xt[e.iconBlook],
                  alt: e.iconBlook,
                  className: v.a.upgradeBlook,
                  draggable: !1
                }), i.a.createElement('div', { className: v.a.upgradeTitle }, e.data.title)), i.a.createElement('div', { className: v.a.upgradeDesc }, e.desc), 3 !== s.state.towerSelected.level ? i.a.createElement('div', { className: v.a.shopPrice }, e.data.cost) : null);
              })) : null), i.a.createElement(p.a, {
                preload: this.preload,
                setup: this.setup,
                draw: this.draw,
                mouseClicked: this.mouseClicked
              }), i.a.createElement('div', { className: v.a.rightSide }, i.a.createElement('div', {
                className: v.a.healthRow,
                id: 'health'
              }, this.state.isLive ? null : i.a.createElement('div', { className: v.a.healthBarHolder }, i.a.createElement('div', {
                className: v.a.healthBar,
                style: { transform: 'scaleX('.concat(this.state.health / 100, ')') }
              })), this.state.isLive ? i.a.createElement('div', { className: v.a.dmgText }, Object(O.n)(this.state.totalDmg)) : i.a.createElement('div', { className: v.a.healthText }, this.state.health), i.a.createElement('i', { className: m()(v.a.healthIcon, this.state.isLive ? 'fas fa-splotch' : 'fas fa-heart') })), i.a.createElement('div', { className: v.a.roundText }, 'Round '.concat(this.state.round)), i.a.createElement('div', { className: v.a.shopContainer }, Object.entries(Et).map(function (e) {
                var t = Dt(e, 2), a = t[0], o = t[1];
                return i.a.createElement('div', {
                  className: m()(v.a.towerShopContainer, qt({}, v.a.towerShopSelected, s.state.buyTowerName === a), qt({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a)),
                  key: a,
                  role: 'button',
                  tabIndex: 0,
                  onClick: s.state.tokens < o.cost || s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a ? function () {
                  } : s.state.buyTowerName === a ? function () {
                    return s.setState({
                      buyTowerName: '',
                      buyTower: {}
                    });
                  } : function () {
                    return s.setState({
                      buyTowerName: a,
                      buyTower: new Nt(-1, -1, s.p5, s.tileSize, a, s.towerImages),
                      towerSelected: {}
                    });
                  }
                }, i.a.createElement('img', {
                  src: Xt[o.blook],
                  alt: o.blook,
                  className: v.a.shopBlook,
                  draggable: !1
                }), s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a ? i.a.createElement('div', { className: v.a.shopLockedContainer }, i.a.createElement('i', { className: m()(v.a.shopLockedIcon, 'fas fa-lock') }), 'Round '.concat('penguin' === a ? 5 : 'king' === a ? 15 : 20)) : i.a.createElement('div', { className: v.a.shopPrice }, o.cost));
              })), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement('div', {
                className: v.a.mainButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.state.buyTowerName ? function () {
                  return s.setState({
                    buyTowerName: '',
                    buyTower: {}
                  });
                } : this.nextRound,
                style: { backgroundColor: this.state.buyTowerName ? '#c43a35' : '#0bc2cf' },
                id: 'nextRound'
              }, i.a.createElement('i', {
                className: this.state.buyTowerName ? 'fas fa-times' : 'fas fa-play',
                style: { marginRight: 10 }
              }), this.state.buyTowerName ? 'Cancel Buy' : 'Next Round') : this.state.roundGoing && !this.state.isLive ? i.a.createElement('div', {
                className: v.a.mainButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ doubleSpeed: !s.state.doubleSpeed });
                },
                style: { backgroundColor: '#0bc2cf' }
              }, i.a.createElement('i', {
                className: this.state.doubleSpeed ? 'fas fa-fast-backward' : 'fas fa-fast-forward',
                style: { marginRight: 10 }
              }), this.state.doubleSpeed ? '1X Speed' : '2X Speed') : null), i.a.createElement('div', { className: v.a.mBottomSpacer }), i.a.createElement('div', {
                className: v.a.mBottomContainer,
                id: 'mBottom'
              }, this.state.buyTowerName && this.state.isSmall ? this.outsideMap(this.state.buyTower) ? i.a.createElement('div', { className: v.a.mNoBuy }, 'Select Grid to Place Tower') : i.a.createElement('div', {
                className: v.a.mBuyButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.buyTower(!0);
                }
              }, 'Confirm Buy') : i.a.createElement('div', {
                className: v.a.mOpenButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ showShop: !s.state.showShop });
                }
              }, i.a.createElement('i', {
                className: this.state.showShop ? 'fas fa-angle-down' : 'fas fa-angle-up',
                style: {
                  marginLeft: 10,
                  marginRight: 7,
                  fontSize: 32
                }
              }), this.state.showShop ? 'Close Shop' : 'Open Shop', i.a.createElement('div', { className: v.a.mHealthRow }, i.a.createElement('div', { className: v.a.mHealthText }, this.state.isLive ? Object(O.v)(this.state.totalDmg) : this.state.health), i.a.createElement('i', { className: m()(v.a.mHealthIcon, this.state.isLive ? 'fas fa-splotch' : 'fas fa-heart') }))), this.state.showShop && !this.state.buyTowerName ? i.a.createElement('div', { className: v.a.shopContainer }, Object.entries(Et).map(function (e) {
                var t = Dt(e, 2), a = t[0], o = t[1];
                return i.a.createElement('div', {
                  className: m()(v.a.towerShopContainer, qt({}, v.a.towerShopSelected, s.state.buyTowerName === a), qt({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a)),
                  key: a,
                  role: 'button',
                  tabIndex: 0,
                  onClick: s.state.tokens < o.cost || s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a ? function () {
                  } : s.state.buyTowerName === a ? function () {
                    return s.setState({
                      buyTowerName: '',
                      buyTower: {}
                    });
                  } : function () {
                    return s.setState({
                      buyTowerName: a,
                      buyTower: new Nt(-1, -1, s.p5, s.tileSize, a, s.towerImages),
                      towerSelected: {}
                    });
                  }
                }, i.a.createElement('img', {
                  src: Xt[o.blook],
                  alt: o.blook,
                  className: v.a.shopBlook,
                  draggable: !1
                }), s.state.round < 5 && 'penguin' === a || s.state.round < 15 && 'king' === a || s.state.round < 20 && 'jester' === a ? i.a.createElement('div', { className: v.a.shopLockedContainer }, i.a.createElement('i', { className: m()(v.a.shopLockedIcon, 'fas fa-lock') }), 'Round '.concat('penguin' === a ? 5 : 'king' === a ? 15 : 20)) : i.a.createElement('div', { className: v.a.shopPrice }, o.cost));
              })) : null)) : null, 'question' === this.state.phase ? i.a.createElement('div', { className: v.a.questionContainer }, i.a.createElement(S.a, {
                onAnswer: this.onAnswer,
                text: this.state.question.text,
                answers: this.state.question.answers,
                image: this.state.question.image,
                theme: this.isFreeze ? 'freeze' : this.bonusQuestion ? 'orange' : this.questionFrenzy ? 'purple' : this.kingReq ? 'red' : ''
              })) : 'feedback' === this.state.phase ? i.a.createElement('div', { className: v.a.questionContainer }, i.a.createElement(T.a, {
                incorrectTime: 3,
                correctAnswers: this.state.question.correctAnswers,
                correct: this.state.correct,
                onNext: this.answerNext
              })) : null, this.state.roundCompleted ? i.a.createElement('div', {
                className: x.a.modal,
                style: { zIndex: 7 }
              }, i.a.createElement('div', { className: v.a.modalContainer }, i.a.createElement('div', { className: v.a.modalText }, 1 === this.state.round ? 'Ready to Start?' : 'Round '.concat(this.state.round - 1, ' Complete!')), i.a.createElement('div', { className: v.a.modalButtonRow }, i.a.createElement('div', {
                className: v.a.modalButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.getQuestion
              }, 'Get Questions')))) : null, this.state.towerSelected && this.state.towerSelected.title ? i.a.createElement('div', {
                className: m()(x.a.modal, v.a.mModal),
                style: { zIndex: 6 }
              }, i.a.createElement('div', { className: v.a.mTowerSelected }, i.a.createElement('div', { className: v.a.infoRow }, i.a.createElement('img', {
                src: Xt[this.state.towerSelected.blook],
                alt: this.state.towerSelected.blook,
                className: v.a.infoBlook,
                draggable: !1
              }), i.a.createElement('div', { className: v.a.infoTitle }, this.state.towerSelected.title)), i.a.createElement('div', { className: v.a.sellContainer }, i.a.createElement('div', {
                className: v.a.sellButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.sellTower
              }, i.a.createElement('i', {
                className: 'fas fa-coins',
                style: { marginRight: 10 }
              }), 'Sell ('.concat(this.state.towerSelected.getSellPrice(), ')')), i.a.createElement('div', { className: v.a.statInfoContainer }, i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-fist-raised',
                style: { marginRight: 8 }
              }), 'Damage: '.concat(this.state.towerSelected.damage)), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-running',
                style: { marginRight: 8 }
              }), 'Attack Time: \u2248'.concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, 's')), i.a.createElement('div', { className: v.a.smallInfoRow }, i.a.createElement('i', {
                className: 'fas fa-expand-alt',
                style: { marginRight: 8 }
              }), 'Range: '.concat(this.state.towerSelected.range)))), i.a.createElement('div', { className: v.a.upgradesText }, 3 === this.state.towerSelected.level ? 'Max Upgrades' : 'Upgrades'), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map(function (e, t) {
                return i.a.createElement('div', {
                  className: m()(v.a.upgradeContainer, qt({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                  style: { opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null },
                  key: e.data.title,
                  role: 'button',
                  tabIndex: 0,
                  onClick: 3 === s.state.towerSelected.level ? function () {
                  } : function () {
                    return s.upgradeTower(e, t);
                  }
                }, i.a.createElement('div', { className: v.a.upgradeRow }, e.icon ? i.a.createElement('i', {
                  className: m()(v.a.upgradeIcon, e.icon),
                  style: { backgroundColor: e.iconColor }
                }) : i.a.createElement('img', {
                  src: Xt[e.iconBlook],
                  alt: e.iconBlook,
                  className: v.a.upgradeBlook,
                  draggable: !1
                }), i.a.createElement('div', { className: v.a.upgradeTitle }, e.data.title, i.a.createElement('div', { className: v.a.upgradeDesc }, e.desc))), 3 !== s.state.towerSelected.level ? i.a.createElement('div', { className: v.a.shopPrice }, e.data.cost) : null);
              }), i.a.createElement('div', {
                className: v.a.mCloseTower,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ towerSelected: {} });
                }
              }, i.a.createElement('i', { className: 'fas fa-times' })))) : null, this.state.askTour ? i.a.createElement(M.a, {
                text: 'Would you like a quick tutorial?',
                buttonOne: {
                  text: 'Yes',
                  click: function () {
                    return s.answerTour(!0);
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'No',
                  click: function () {
                    return s.answerTour(!1);
                  },
                  color: 'blue'
                }
              }) : this.state.hwGoal && !this.state.showTour ? i.a.createElement(M.a, {
                text: 'Your goal for this homework is to survive for '.concat(this.state.hwGoal, ' ').concat(1 === this.state.hwGoal ? 'Round' : 'Rounds', '!'),
                buttonOne: {
                  text: 'Cool',
                  click: function () {
                    return s.setState({ hwGoal: 0 });
                  },
                  color: 'blue'
                }
              }) : this.state.goalCompleted ? i.a.createElement(M.a, {
                text: 'You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!',
                buttonOne: {
                  text: 'Keep Playing',
                  click: function () {
                    return s.setState({ goalCompleted: !1 });
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'End Now',
                  click: this.endNow,
                  color: 'blue'
                }
              }) : null, this.state.gameOver ? i.a.createElement('div', { className: m()(x.a.modal, v.a.modalFadeIn) }, i.a.createElement('div', { className: v.a.gameOverContainer }, i.a.createElement('div', { className: v.a.gameOverText }, 'Game Over'), i.a.createElement('div', { className: v.a.gameOverTextSmall }, 'You ran out of health'))) : null, this.state.eventName ? i.a.createElement(P.a, {
                icon: this.state.event.icon,
                blook: this.state.event.blook,
                color: this.state.chanceColor || this.state.event.color,
                name: this.state.eventName,
                desc: this.state.chanceDesc || this.state.event.desc,
                onYes: this.state.chanceDesc ? function () {
                  return s.chooseChance(!s.state.chanceColor);
                } : null,
                yesText: this.state.chanceColor ? 'Ok' : 'Yes',
                onNo: this.state.chanceDesc && !this.state.chanceColor ? function () {
                  return s.chooseChance(!1);
                } : null,
                noLeave: !!this.state.chanceDesc
              }) : null) : i.a.createElement(c.a, { to: '/login' });
            }
          }
        ]) && Lt(t.prototype, s), a && Lt(t, a), r;
      }(i.a.Component);
    es.propTypes = {
      client: l.a.object,
      defense: l.a.object,
      history: l.a.object.isRequired,
      setDefense: l.a.func.isRequired,
      setStanding: l.a.func.isRequired,
      deleteClient: l.a.func.isRequired,
      firebase: l.a.object,
      user: l.a.object
    };
    t.a = Object(E.c)(Object(h.a)(Object(o.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client,
        defense: e.clients.client ? e.clients.client.defense : null
      };
    }, function (e) {
      return Object(n.b)({
        setDefense: B.a,
        setStanding: D.b,
        deleteClient: z.a
      }, e);
    })(Object(C.d)(es))));
  },
  Qv3B: function (e, t, s) {
    var a = s('aV2S');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    s('aET+')(a, i);
    a.locals && (e.exports = a.locals);
  },
  aV2S: function (e, t, s) {
    (t = e.exports = s('JPst')(!1)).push([
      e.i,
      '.styles__bodyContainer___EPYj--camelCase{display:flex;flex-direction:row;justify-content:space-between}.styles__sketchHolder___JeOqe-camelCase{flex:1;margin:20px;overflow:hidden;position:relative}.styles__sketchCanvas___zTNxY-camelCase{top:0;right:0;bottom:0;left:0;display:block;margin:auto;position:absolute}.styles__leftSide___3teKr-camelCase{width:220px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column;transition:.3s}.styles__infoRow___3gIsF-camelCase{display:flex;flex-direction:row;align-items:flex-end;width:90%;margin:0 auto 10px}.styles__infoBlook___3HCCn-camelCase{width:30%;margin-right:10px}.styles__infoTitle___WsPOO-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:26px;line-height:29px;color:#3a3a3a}.styles__smallInfoRow___17MlX-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px auto}.styles__descText___gKAgj-camelCase,.styles__smallInfoRow___17MlX-camelCase{width:90%;font-family:Nunito,sans-serif;font-size:20px;color:#3a3a3a}.styles__descText___gKAgj-camelCase{margin:20px auto}.styles__sellButton___1S2HJ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:30px;border-radius:6px;margin:15px auto;background-color:#c43a35;color:#fff;font-size:18px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__sellButton___1S2HJ-camelCase:hover{transform:scale(.96)}.styles__upgradesText___LOEst-camelCase{margin:7px auto 12px;font-size:26px;text-align:center;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__upgradeContainer___2pD9g-camelCase{border:3px solid #a7a7a7;border-radius:6px;width:calc(90% - 16px);padding:3px 8px;margin:14px auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;flex-direction:column;position:relative;font-size:"Nunito",sans-serif;color:#3a3a3a;transition:.2s}.styles__upgradeContainer___2pD9g-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__upgradeRow___1l7DY-camelCase{display:flex;flex-direction:row;width:100%;margin:4px 0}.styles__upgradeIcon___2k9Sp-camelCase{border-radius:6px;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;color:#fff;font-size:28px}.styles__upgradeBlook___AffjV-camelCase,.styles__upgradeIcon___2k9Sp-camelCase{width:45px;height:51.75px;margin-right:10px}.styles__upgradeTitle___WAgCk-camelCase{width:calc(100% - 55px);font-size:24px;line-height:26px;font-weight:700}.styles__upgradeDesc___1KrK3-camelCase{font-size:16px;line-height:18.5px;margin:2px 0}.styles__rightSide___2yHsN-camelCase{width:280px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:-6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column}.styles__healthRow___3tMPW-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;padding:0 5px;margin:5px auto;font-size:22px;height:25px}.styles__healthBarHolder___2hc7v-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__healthBar___3Lw2I-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left;transition:.2s}.styles__healthText___lw0ql-camelCase{font-size:24px;margin:0 4px 3px 8px;width:55px}.styles__dmgText___UsYPq-camelCase,.styles__healthText___lw0ql-camelCase{font-family:Titan One,sans-serif;color:#3a3a3a;text-align:right}.styles__dmgText___UsYPq-camelCase{font-size:26px;margin-right:7px}.styles__healthIcon___1XP0K-camelCase{font-size:18px;color:#3a3a3a;line-height:25px}.styles__roundText___1TSHl-camelCase{width:80%;margin:0 auto;font-size:26px;height:30px;text-align:right;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__shopContainer___3-hMW-camelCase{margin:10px auto;width:95%;display:flex;flex-flow:row wrap;justify-content:space-between}.styles__towerShopContainer___1UcMB-camelCase{border:3px solid #a7a7a7;border-radius:6px;margin:7px 3px;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transform:scale(1);transition:.2s}.styles__towerShopContainer___1UcMB-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__towerShopSelected___1Csm7-camelCase{border-color:#0bc2cf}.styles__towerShopFaded___1zHqo-camelCase{opacity:.5;cursor:auto}.styles__towerShopFaded___1zHqo-camelCase:hover{transform:scale(1);border-color:#a7a7a7}.styles__shopBlook___2MS1s-camelCase{height:85%;margin:auto}.styles__shopPrice___vDmRt-camelCase{right:-5px;bottom:-11px;height:22px;font-size:16px;padding:0 5px;background-color:#0bc2cf;border-radius:4px;font-family:Nunito,sans-serif}.styles__shopLockedContainer___2VmVO-camelCase,.styles__shopPrice___vDmRt-camelCase{position:absolute;color:#fff;display:flex;align-items:center;justify-content:center}.styles__shopLockedContainer___2VmVO-camelCase{width:calc(100% + 6px);height:calc(100% + 6px);border-radius:6px;cursor:auto;background-color:rgba(0,0,0,.8);flex-direction:column;font-size:14px;font-weight:700;text-shadow:2px 2px 8px grey}.styles__shopLockedIcon___2fXcd-camelCase{margin-bottom:3px;font-size:32px}.styles__mainButton___2rGTC-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:50px;border-radius:6px;margin:auto auto 15px;background-color:#c43a35;color:#fff;font-size:26px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__mainButton___2rGTC-camelCase:hover{transform:scale(.96)}.styles__questionContainer___eVBXr-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:8}.styles__modalContainer___2P1Bh-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__modalText___1tKtB-camelCase{font-family:Titan One,sans-serif;font-size:45px;line-height:48px;margin:20px auto 15px;color:#fff;text-shadow:2px 2px 8px grey}.styles__modalButtonRow___2417K-camelCase{display:flex;flex-direction:row}.styles__modalButton___389Gh-camelCase{padding:5px 12px;margin:15px auto 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:24px;color:#5f5f5f;font-family:Nunito,sans-serif;transition:all .2s}.styles__modalButton___389Gh-camelCase:hover{transform:scale(.96)}.styles__modalFadeIn___3v_nl-camelCase{opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear .5s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear .5s forwards}.styles__gameOverContainer___1WsJW-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___3ao9U-camelCase{font-family:Titan One,sans-serif;font-size:11vw;opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear 1s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___2ox6S-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;-webkit-animation:styles__fadeIn___19HjH-camelCase .4s linear 1.6s forwards;animation:styles__fadeIn___19HjH-camelCase .4s linear 1.6s forwards}@-webkit-keyframes styles__fadeIn___19HjH-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___19HjH-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__modalContainer___2P1Bh-camelCase{width:310px}}.styles__mBottomContainer___2l6OL-camelCase,.styles__mBottomSpacer___24R5y-camelCase,.styles__mBuyButton___fF_vl-camelCase,.styles__mCloseTower___148O3-camelCase,.styles__mHealthIcon___O7idi-camelCase,.styles__mHealthRow___36fHM-camelCase,.styles__mHealthText___1yCLi-camelCase,.styles__mMainButton___hmcCW-camelCase,.styles__mModal___oQ8AP-camelCase,.styles__mNoBuy___Fi4gq-camelCase,.styles__mOpenButton___1C4gG-camelCase,.styles__mRoundText___qlY8R-camelCase,.styles__mTopContainer___2m094-camelCase,.styles__mTowerSelected___Akq8_-camelCase{display:none}@media only screen and (max-width:800px){.styles__leftSide___3teKr-camelCase,.styles__rightSide___2yHsN-camelCase{display:none}.styles__bodyContainer___EPYj--camelCase,.styles__mBottomContainer___2l6OL-camelCase{flex-direction:column}.styles__mBottomContainer___2l6OL-camelCase{position:absolute;bottom:0;left:0;background-color:#fff;box-shadow:0 -6px 8px rgba(0,0,0,.2);display:flex;min-height:60px;max-height:calc(100% - 55px);overflow-y:auto;width:100%}.styles__mBottomSpacer___24R5y-camelCase{display:block;height:60px}.styles__mOpenButton___1C4gG-camelCase{width:100%;height:50px;justify-content:center;color:#3a3a3a;font-size:26px;font-weight:700;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.styles__mHealthRow___36fHM-camelCase,.styles__mOpenButton___1C4gG-camelCase{position:relative;display:flex;flex-direction:row;align-items:center}.styles__mHealthRow___36fHM-camelCase{margin:auto 8px auto auto}.styles__mHealthText___1yCLi-camelCase{font-size:26px;font-weight:700;display:block}.styles__mHealthIcon___O7idi-camelCase{font-size:24px;margin-left:7px;display:block;margin-right:2px}.styles__mTopContainer___2m094-camelCase{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.styles__mRoundText___qlY8R-camelCase{font-family:Titan One,sans-serif;font-size:32px;color:#3a3a3a;margin-left:10px;display:block}.styles__mMainButton___hmcCW-camelCase{margin-right:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding:2px 10px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mMainButton___hmcCW-camelCase:hover{transform:scale(.95)}.styles__mBuyButton___fF_vl-camelCase{background-color:#4bc22e;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mBuyButton___fF_vl-camelCase:hover{transform:scale(.95)}.styles__mNoBuy___Fi4gq-camelCase{display:flex;align-items:center;justify-content:center;height:60px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:26px;width:90%;margin:0 auto}.styles__mModal___oQ8AP-camelCase{display:block}.styles__mTowerSelected___Akq8_-camelCase{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;padding-top:7px;max-width:300px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__infoBlook___3HCCn-camelCase{width:20%}.styles__mCloseTower___148O3-camelCase{display:flex;align-items:center;justify-content:center;position:absolute;height:40px;width:40px;top:-15px;right:-15px;background-color:#f33;color:#fff;font-size:26px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__mCloseTower___148O3-camelCase:hover{transform:scale(.95)}.styles__descText___gKAgj-camelCase,.styles__upgradeTitle___WAgCk-camelCase{text-align:left}.styles__sellContainer___3DZeV-camelCase{display:flex;flex-direction:row;width:90%;margin:0 auto}.styles__sellButton___1S2HJ-camelCase{width:45%;margin:auto 5% auto 0;font-size:16px}.styles__statInfoContainer___2ZwLf-camelCase{display:flex;flex-direction:column;width:50%}.styles__smallInfoRow___17MlX-camelCase{width:100%;margin:1px auto;font-size:12px}.styles__gameOverText___3ao9U-camelCase{font-size:15vw}.styles__gameOverTextSmall___2ox6S-camelCase{font-size:5vw}}',
      ''
    ]), t.locals = {
      bodyContainer: 'styles__bodyContainer___EPYj--camelCase',
      sketchHolder: 'styles__sketchHolder___JeOqe-camelCase',
      sketchCanvas: 'styles__sketchCanvas___zTNxY-camelCase',
      leftSide: 'styles__leftSide___3teKr-camelCase',
      infoRow: 'styles__infoRow___3gIsF-camelCase',
      infoBlook: 'styles__infoBlook___3HCCn-camelCase',
      infoTitle: 'styles__infoTitle___WsPOO-camelCase',
      smallInfoRow: 'styles__smallInfoRow___17MlX-camelCase',
      descText: 'styles__descText___gKAgj-camelCase',
      sellButton: 'styles__sellButton___1S2HJ-camelCase',
      upgradesText: 'styles__upgradesText___LOEst-camelCase',
      upgradeContainer: 'styles__upgradeContainer___2pD9g-camelCase',
      upgradeRow: 'styles__upgradeRow___1l7DY-camelCase',
      upgradeIcon: 'styles__upgradeIcon___2k9Sp-camelCase',
      upgradeBlook: 'styles__upgradeBlook___AffjV-camelCase',
      upgradeTitle: 'styles__upgradeTitle___WAgCk-camelCase',
      upgradeDesc: 'styles__upgradeDesc___1KrK3-camelCase',
      rightSide: 'styles__rightSide___2yHsN-camelCase',
      healthRow: 'styles__healthRow___3tMPW-camelCase',
      healthBarHolder: 'styles__healthBarHolder___2hc7v-camelCase',
      healthBar: 'styles__healthBar___3Lw2I-camelCase',
      healthText: 'styles__healthText___lw0ql-camelCase',
      dmgText: 'styles__dmgText___UsYPq-camelCase',
      healthIcon: 'styles__healthIcon___1XP0K-camelCase',
      roundText: 'styles__roundText___1TSHl-camelCase',
      shopContainer: 'styles__shopContainer___3-hMW-camelCase',
      towerShopContainer: 'styles__towerShopContainer___1UcMB-camelCase',
      towerShopSelected: 'styles__towerShopSelected___1Csm7-camelCase',
      towerShopFaded: 'styles__towerShopFaded___1zHqo-camelCase',
      shopBlook: 'styles__shopBlook___2MS1s-camelCase',
      shopPrice: 'styles__shopPrice___vDmRt-camelCase',
      shopLockedContainer: 'styles__shopLockedContainer___2VmVO-camelCase',
      shopLockedIcon: 'styles__shopLockedIcon___2fXcd-camelCase',
      mainButton: 'styles__mainButton___2rGTC-camelCase',
      questionContainer: 'styles__questionContainer___eVBXr-camelCase',
      modalContainer: 'styles__modalContainer___2P1Bh-camelCase',
      modalText: 'styles__modalText___1tKtB-camelCase',
      modalButtonRow: 'styles__modalButtonRow___2417K-camelCase',
      modalButton: 'styles__modalButton___389Gh-camelCase',
      modalFadeIn: 'styles__modalFadeIn___3v_nl-camelCase',
      fadeIn: 'styles__fadeIn___19HjH-camelCase',
      gameOverContainer: 'styles__gameOverContainer___1WsJW-camelCase',
      gameOverText: 'styles__gameOverText___3ao9U-camelCase',
      gameOverTextSmall: 'styles__gameOverTextSmall___2ox6S-camelCase',
      mBottomContainer: 'styles__mBottomContainer___2l6OL-camelCase',
      mBottomSpacer: 'styles__mBottomSpacer___24R5y-camelCase',
      mBuyButton: 'styles__mBuyButton___fF_vl-camelCase',
      mCloseTower: 'styles__mCloseTower___148O3-camelCase',
      mHealthIcon: 'styles__mHealthIcon___O7idi-camelCase',
      mHealthRow: 'styles__mHealthRow___36fHM-camelCase',
      mHealthText: 'styles__mHealthText___1yCLi-camelCase',
      mMainButton: 'styles__mMainButton___hmcCW-camelCase',
      mModal: 'styles__mModal___oQ8AP-camelCase',
      mNoBuy: 'styles__mNoBuy___Fi4gq-camelCase',
      mOpenButton: 'styles__mOpenButton___1C4gG-camelCase',
      mRoundText: 'styles__mRoundText___qlY8R-camelCase',
      mTopContainer: 'styles__mTopContainer___2m094-camelCase',
      mTowerSelected: 'styles__mTowerSelected___Akq8_-camelCase',
      sellContainer: 'styles__sellContainer___3DZeV-camelCase',
      statInfoContainer: 'styles__statInfoContainer___2ZwLf-camelCase'
    };
  },
  kWb9: function (e, t, s) {
    'use strict';
    var a = s('VI/E'), i = s.n(a), o = s('v7rU'), n = s.n(o), r = s('iQOC'), l = s.n(r), c = s('gljj'), h = s('9O+H'), u = s('lWf8'), d = {};
    d.meadow = {
      name: 'Sunny Meadow',
      img: i.a,
      tile: c.a,
      particleColor: '#2ecc71',
      tiles: [
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0
        ],
        [
          2,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          1,
          0,
          1,
          0,
          1,
          1,
          1,
          5
        ],
        [
          0,
          0,
          1,
          0,
          1,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          0,
          1,
          0,
          1,
          0,
          1,
          0,
          0,
          2
        ],
        [
          4,
          1,
          1,
          0,
          1,
          0,
          1,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          1,
          0,
          1,
          1,
          1,
          0
        ],
        [
          2,
          1,
          1,
          1,
          1,
          0,
          0,
          0,
          1,
          2
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ],
        [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0
        ],
        [
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ]
    }, d.desert = {
      name: 'Lost Desert',
      img: n.a,
      tile: h.a,
      particleColor: '#daba72',
      tiles: [
        [
          0,
          2,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0
        ],
        [
          4,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          2
        ],
        [
          0,
          0,
          0,
          1,
          0,
          0,
          1,
          0,
          1,
          0
        ],
        [
          0,
          0,
          2,
          1,
          1,
          1,
          1,
          0,
          1,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          1,
          0
        ],
        [
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0
        ],
        [
          0,
          1,
          2,
          0,
          0,
          0,
          0,
          0,
          2,
          0
        ],
        [
          2,
          1,
          0,
          1,
          1,
          1,
          1,
          0,
          0,
          0
        ],
        [
          0,
          1,
          0,
          1,
          0,
          0,
          1,
          0,
          2,
          0
        ],
        [
          0,
          1,
          1,
          1,
          0,
          0,
          1,
          1,
          1,
          5
        ],
        [
          0,
          2,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0
        ]
      ]
    }, d.mine = {
      name: 'Coming Soon',
      img: l.a,
      tile: u.a,
      tiles: [
        [
          0,
          2,
          0,
          4,
          0,
          5,
          2,
          0,
          0,
          2
        ],
        [
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          2,
          2
        ],
        [
          0,
          0,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          2
        ],
        [
          2,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          0,
          2
        ],
        [
          0,
          1,
          0,
          0,
          0,
          0,
          2,
          1,
          0,
          2
        ],
        [
          0,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          0,
          2
        ],
        [
          0,
          2,
          0,
          1,
          0,
          1,
          0,
          0,
          0,
          2
        ],
        [
          0,
          1,
          1,
          1,
          0,
          1,
          1,
          1,
          2,
          2
        ],
        [
          0,
          1,
          0,
          2,
          0,
          0,
          0,
          1,
          0,
          2
        ],
        [
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          2
        ],
        [
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          2
        ]
      ],
      locked: getPref('td/unlockMine') ? !1 : !0
    }, t.a = d;
  },
  oTBF: function (e, t, s) {
    var a = s('18BW');
    'string' == typeof a && (a = [[
        e.i,
        a,
        ''
      ]]);
    var i = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    s('aET+')(a, i);
    a.locals && (e.exports = a.locals);
  }
}]);
