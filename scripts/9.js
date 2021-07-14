(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{
  '+jJ5': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('78zJ'), l = a.n(i), c = a('GIcp'), _ = a.n(c), u = a('TN+F');
    function m(e) {
      return (m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function f(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function p(e, t) {
      return (p = Object.setPrototypeOf || function (e, t) {
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
          var s = b(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return d(this, a);
      };
    }
    function d(e, t) {
      return !t || 'object' !== m(t) && 'function' != typeof t ? h(e) : t;
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function b(e) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var g = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && p(e, t);
      }(o, e);
      var t, a, n, r = y(o);
      function o(e) {
        var t;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), t = r.call(this, e);
        var a = Object(u.q)(50, 150);
        return t.state = {
          goalTemp: a,
          temp: a + Object(u.q)(10, 25) * (0 === Object(u.q)(0, 2) ? 1 : -1)
        }, t.done = !1, t.changeTemp = t.changeTemp.bind(h(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.endTimeout);
          }
        },
        {
          key: 'changeTemp',
          value: function (e) {
            var t = this;
            if (!this.done) {
              var a = this.state.temp + e;
              this.setState({ temp: a }, function () {
                a === t.state.goalTemp && (t.done = !0, t.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', { className: _.a.modal }, s.a.createElement('div', {
              className: l.a.container,
              style: { maxWidth: 380 }
            }, s.a.createElement('div', { className: l.a.overlay }), s.a.createElement('div', { className: l.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(u.v)(this.props.amount), ')')), s.a.createElement('div', { className: l.a.desc }, 'Set the temperature to '.concat(this.state.goalTemp, '\xB0')), s.a.createElement('div', { className: l.a.buttonContainer }, s.a.createElement('div', {
              className: l.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.changeTemp(-1);
              }
            }, s.a.createElement('div', { className: l.a.buttonInside }, '<')), s.a.createElement('div', { className: l.a.temperature }, ''.concat(this.state.temp, '\xB0')), s.a.createElement('div', {
              className: l.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.changeTemp(1);
              }
            }, s.a.createElement('div', { className: l.a.buttonInside }, '>')))));
          }
        }
      ]) && f(t.prototype, a), n && f(t, n), o;
    }(s.a.Component);
    g.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = g;
  },
  '/uU1': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('TN+F');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function y(e) {
      return function (e) {
        if (Array.isArray(e))
          return d(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return d(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return d(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function h(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function g(e) {
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
        var a, n = w(e);
        if (t) {
          var s = w(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return v(this, a);
      };
    }
    function v(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? C(e) : t;
    }
    function C(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function w(e) {
      return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && b(e, t);
      }(o, e);
      var t, a, n, r = g(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          buttonsLeft: 12,
          buttons: new Array(10).fill(!1)
        }, t.clickButton = t.clickButton.bind(C(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            this.startTimeout = setTimeout(function () {
              e.revealInterval = setInterval(function () {
                var t = Object(f.q)(0, e.state.buttons.length), a = y(e.state.buttons);
                a[t] = !0, e.setState({ buttons: a });
              }, 300);
            }, 500);
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.startTimeout), clearTimeout(this.endTimeout), clearInterval(this.revealInterval);
          }
        },
        {
          key: 'clickButton',
          value: function (e) {
            var t = this;
            if (this.state.buttons[e] && !(this.state.buttonsLeft <= 0)) {
              var a = this.state.buttonsLeft - 1, n = y(this.state.buttons);
              n[e] = !1, this.setState({
                buttonsLeft: a,
                buttons: n
              }, function () {
                a <= 0 && (clearInterval(t.revealInterval), t.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', { className: _.a.container }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(f.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Click '.concat(this.state.buttonsLeft, ' ').concat(1 === this.state.buttonsLeft ? 'Button' : 'Buttons')), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.buttons.map(function (t, a) {
              return s.a.createElement('div', {
                className: l()(_.a.button, (n = {}, r = _.a.noClick, o = !t, r in n ? Object.defineProperty(n, r, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : n[r] = o, n)),
                style: { opacity: t ? 1 : 0 },
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.clickButton(a);
                },
                key: a
              }, s.a.createElement('div', { className: _.a.buttonInside }, '\xD7'));
              var n, r, o;
            }))));
          }
        }
      ]) && h(t.prototype, a), n && h(t, n), o;
    }(s.a.Component);
    x.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = x;
  },
  '1OG6': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('u4jG'), l = a.n(i), c = a('GIcp'), _ = a.n(c), u = a('DoX5'), m = function (e) {
        var t = e.blook, a = e.text, n = e.onClick, r = e.isMerry;
        return s.a.createElement('div', { className: _.a.modal }, s.a.createElement('div', {
          className: l.a.container,
          style: { backgroundColor: r ? '#eb2d37' : null }
        }, s.a.createElement('div', {
          className: l.a.containerInside,
          style: {
            backgroundColor: r ? '#eb2d37' : null,
            borderColor: r ? '#fff' : null
          }
        }, s.a.createElement('div', { className: l.a.text }, s.a.createElement(u.a, {
          name: t,
          className: l.a.blook
        }), a), s.a.createElement('div', {
          className: l.a.button,
          role: 'button',
          tabIndex: 0,
          onClick: n
        }, 'OK'))));
      };
    m.propTypes = {
      blook: o.a.string,
      text: o.a.string,
      onClick: o.a.func,
      isMerry: o.a.bool
    }, t.a = m;
  },
  '1pah': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('TN+F');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function y(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function d(e) {
      return function (e) {
        if (Array.isArray(e))
          return h(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return h(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return h(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function h(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function b(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function g(e, t) {
      return (g = Object.setPrototypeOf || function (e, t) {
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
        var a, n = x(e);
        if (t) {
          var s = x(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return C(this, a);
      };
    }
    function C(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? w(e) : t;
    }
    function w(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function x(e) {
      return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var k = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ], T = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && g(e, t);
        }(o, e);
        var t, a, n, r = v(o);
        function o(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), (t = r.call(this, e)).state = {
            numbers: [].concat(k),
            numbersChosen: [],
            simonNumbers: Object(f.j)(k, 5),
            simonNumber: -1,
            phase: 'simon'
          }, t.clickButton = t.clickButton.bind(w(t)), t;
        }
        return t = o, (a = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this, t = -1;
              this.simonTimeout = setTimeout(function () {
                e.simonInterval = setInterval(function () {
                  (t += 1) >= e.state.simonNumbers.length && (clearInterval(e.simonInterval), e.setState({
                    simonNumber: -1,
                    phase: 'pick'
                  }));
                  var a = e.state.simonNumbers[t];
                  e.setState({ simonNumber: a });
                }, 700);
              }, 800);
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.endTimeout);
            }
          },
          {
            key: 'clickButton',
            value: function (e) {
              var t = this;
              if (!this.state.numbersChosen.includes(e) && e === this.state.simonNumbers[this.state.numbersChosen.length]) {
                var a = d(this.state.numbersChosen);
                a.push(e), this.setState({ numbersChosen: a }), a.length >= this.state.simonNumbers.length && (this.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', {
                className: _.a.container,
                style: { maxWidth: 330 }
              }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(f.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Repeat the pattern'), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.numbers.map(function (t) {
                var a;
                return s.a.createElement('div', {
                  className: l()(_.a.button, (a = {}, y(a, _.a.chosen, e.state.simonNumber === t || e.state.numbersChosen.includes(t)), y(a, _.a.noClick, 'simon' === e.state.phase), a)),
                  role: 'button',
                  tabIndex: 0,
                  onClick: 'simon' === e.state.phase ? function () {
                  } : function () {
                    return e.clickButton(t);
                  },
                  key: t
                }, s.a.createElement('div', { className: _.a.buttonInside }, '\xD7'));
              }))));
            }
          }
        ]) && b(t.prototype, a), n && b(t, n), o;
      }(s.a.Component);
    T.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = T;
  },
  '22IJ': function (e, t, a) {
    var n = a('N6zg');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  '2NlJ': function (e, t, a) {
    var n = a('VT/i');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  '2g2H': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('2iEm'), l = a('TSYQ'), c = a.n(l), _ = a('Tg08'), u = a('MQPm'), m = a('cQm6'), f = a('e/rn'), p = a('22IJ'), y = a.n(p), d = a('TN+F');
    function h(e) {
      return (h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function b(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function g(e, t) {
      return (g = Object.setPrototypeOf || function (e, t) {
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
        var a, n = x(e);
        if (t) {
          var s = x(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return C(this, a);
      };
    }
    function C(e, t) {
      return !t || 'object' !== h(t) && 'function' != typeof t ? w(e) : t;
    }
    function w(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function x(e) {
      return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var k = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && g(e, t);
      }(o, e);
      var t, a, n, r = v(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          link: e.link,
          full: Object(d.l)()
        }, t.checkResize = t.checkResize.bind(w(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            window.addEventListener('resize', this.checkResize);
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            window.removeEventListener('resize', this.checkResize);
          }
        },
        {
          key: 'checkResize',
          value: function () {
            this.setState({ full: Object(d.l)() });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: y.a.header,
              id: 'header',
              style: { backgroundColor: this.props.color ? this.props.color : null }
            }, this.state.link ? s.a.createElement(i.a, {
              className: y.a.linkText,
              to: '/'
            }, 'Blooket') : s.a.createElement('div', { className: y.a.headerTextLeft }, s.a.createElement('i', {
              className: c()(y.a.expandIcon, this.state.full ? 'fas fa-compress' : 'fas fa-expand'),
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ full: Object(d.B)() });
              }
            }), this.props.name), s.a.createElement('div', { className: y.a.headerTextCenter }, this.props.center), s.a.createElement('div', { className: y.a.headerRight }, this.props.noRight ? null : this.props.candy || 0 === this.props.candy ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.candy)), s.a.createElement('img', {
              src: u.a,
              alt: 'Candy',
              className: y.a.candy,
              draggable: !1
            })) : this.props.shamrocks || 0 === this.props.shamrocks ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.shamrocks)), s.a.createElement('img', {
              src: m.a,
              alt: 'Shamrock',
              className: y.a.candy,
              draggable: !1
            })) : this.props.gold || 0 === this.props.gold ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.gold)), s.a.createElement('img', {
              src: _.a,
              alt: 'Gold',
              className: y.a.candy,
              draggable: !1
            })) : this.props.toys || 0 === this.props.toys ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.toys)), s.a.createElement('img', {
              src: f.a,
              alt: 'Toy',
              className: y.a.candy,
              draggable: !1
            })) : this.props.energy || 0 === this.props.energy ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', { className: y.a.playerEnergy }, this.props.energy), s.a.createElement('i', { className: c()(y.a.energyIcon, 'fas fa-bolt') })) : this.props.coins || 0 === this.props.coins ? s.a.createElement('div', {
              className: y.a.energyContainer,
              style: { paddingLeft: 20 },
              id: 'coinsText'
            }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.coins)), s.a.createElement('i', { className: c()(y.a.energyIcon, 'fas fa-coins') })) : this.props.cash || 0 === this.props.cash ? s.a.createElement('div', { className: y.a.energyContainer }, s.a.createElement('div', {
              className: y.a.playerEnergy,
              style: { marginRight: 10 }
            }, '$'.concat(Object(d.n)(this.props.cash)))) : this.props.customers || 0 === this.props.customers ? s.a.createElement('div', {
              className: y.a.energyContainer,
              style: { paddingLeft: 20 },
              id: 'customersText'
            }, s.a.createElement('div', { className: y.a.playerEnergy }, Object(d.n)(this.props.customers)), s.a.createElement('i', { className: c()(y.a.energyIcon, 'fas fa-users') })) : this.props.rightText || 0 === this.props.rightText ? s.a.createElement('div', { className: y.a.rightText }, this.props.rightText) : this.props.linkRightText ? s.a.createElement(i.a, {
              className: y.a.linkRight,
              to: this.props.linkRightTo
            }, this.props.linkRightText) : null));
          }
        }
      ]) && b(t.prototype, a), n && b(t, n), o;
    }(s.a.Component);
    k.propTypes = {
      link: o.a.bool,
      name: o.a.string,
      center: o.a.string,
      rightText: o.a.any,
      energy: o.a.number,
      noRight: o.a.bool,
      candy: o.a.number,
      shamrocks: o.a.number,
      gold: o.a.number,
      toys: o.a.number,
      coins: o.a.number,
      cash: o.a.number,
      customers: o.a.number,
      color: o.a.string,
      linkRightText: o.a.string,
      linkRightTo: o.a.string
    }, t.a = k;
  },
  '3rHL': function (e, t, a) {
    var n = a('XTdC');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  '4Pi9': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('8Z5q'), _ = a.n(c), u = a('BE5e'), m = a('TN+F'), f = function (e) {
        var t = e.mode, a = e.amount;
        return s.a.createElement('div', {
          className: _.a.container,
          style: {
            backgroundImage: 'url('.concat(u.a, ')'),
            backgroundSize: 74.5
          }
        }, s.a.createElement('div', { className: l()(_.a.text, _.a.n1) }, 'Answer Questions'), s.a.createElement('div', { className: l()(_.a.text, _.a.n2) }, 'Select Chests'), s.a.createElement('div', { className: l()(_.a.text, _.a.n3) }, 'Collect Gold'), s.a.createElement('div', { className: l()(_.a.text, _.a.n4) }, 'Take Gold From Others'), s.a.createElement('div', { className: l()(_.a.text, _.a.n5) }, 'Time' === t ? 'Most gold after '.concat(Object(m.n)(a), ' ').concat('1' === a ? 'minute' : 'minutes', ' wins!') : 'First player to have '.concat(Object(m.n)(a), ' Gold wins!')), s.a.createElement('div', { className: l()(_.a.text, _.a.n6) }, 'Good Luck!'));
      };
    f.propTypes = {
      mode: o.a.string,
      amount: o.a.any
    }, t.a = f;
  },
  '4sSW': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('xHZb'), o = a.n(r), i = a('TN+F'), l = [
        [
          'What do you call a fake noodle?',
          'An Im-pasta!'
        ],
        [
          'Why can\'t your nose be 12 inches long?',
          'Because then it would be a foot!'
        ],
        [
          'What kind of cheese isn\'t yours?',
          'Nacho cheese!'
        ],
        [
          'What do you call a mountain full of cats?',
          'A meowtain!'
        ],
        [
          'How many tickles does it take to make an octopus laugh?',
          'Ten-tickles!'
        ],
        [
          'What kind of room can\'t you enter?',
          'A mushroom!'
        ],
        [
          'What do you call an alligator in a vest?',
          'An investigator!'
        ],
        [
          'Why did the fish get bad grades?',
          'Because it was below sea level!'
        ],
        [
          'How do you put an alien baby to sleep?',
          'You rocket!'
        ],
        [
          'How do you organize a space party?',
          'You planet!'
        ],
        [
          'Where did the cow take his date?',
          'The MOOvies!'
        ],
        [
          'Why don\'t seagulls live by the bay?',
          'Because then they\'d be bagels!'
        ],
        [
          'What do you call a group of unorganized cats?',
          'A cat-astrophe!'
        ],
        [
          'Have you heard the joke about pizza?',
          'Never mind, it\'s too cheesy!'
        ],
        [
          'What did the evil chicken lay?',
          'Deviled eggs!'
        ],
        [
          'Why wouldn\'t the shrimp share his treasure?',
          'He was a little shellfish!'
        ],
        [
          'How do you make a tissue dance?',
          'You put a little boogie in it!'
        ],
        [
          'When does a duck wake up?',
          'At the quack of dawn!'
        ],
        [
          'Why did the chicken cross the road?',
          'To get to the other side!'
        ],
        [
          'Why did the cow cross the road?',
          'To get to the udder side!'
        ],
        [
          'What do you call a cow with no legs?',
          'Ground Beef!'
        ]
      ];
    function c(e) {
      return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
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
    function u(e, t) {
      return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function m(e) {
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
        var a, n = p(e);
        if (t) {
          var s = p(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return f(this, a);
      };
    }
    function f(e, t) {
      return !t || 'object' !== c(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function p(e) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var y = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && u(e, t);
      }(c, e);
      var t, a, n, r = m(c);
      function c(e) {
        var t;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (t = r.call(this, e)).state = {
          topProgress: '',
          bottomProgress: ''
        };
        var a = Object(i.o)(l);
        return t.topText = a[0], t.bottomText = a[1], t;
      }
      return t = c, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this, t = 0;
            this.interval = setInterval(function () {
              t += 1, e.setState({ topProgress: e.topText.substring(0, t) }), t === e.topText.length && (clearInterval(e.interval), e.timeout = setTimeout(function () {
                t = 0, e.interval = setInterval(function () {
                  t += 1, e.setState({ bottomProgress: e.bottomText.substring(0, t) }), t === e.bottomText.length && clearInterval(e.interval);
                }, 1000 / e.bottomText.length);
              }, 2000));
            }, 2000 / this.topText.length);
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearInterval(this.interval), clearTimeout(this.timeout);
          }
        },
        {
          key: 'render',
          value: function () {
            return s.a.createElement('div', { className: o.a.container }, this.state.topProgress ? s.a.createElement('div', { className: o.a.text }, this.state.topProgress) : null, this.state.bottomProgress ? s.a.createElement('div', {
              className: o.a.text,
              style: { marginTop: 70 }
            }, this.state.bottomProgress) : null);
          }
        }
      ]) && _(t.prototype, a), n && _(t, n), c;
    }(s.a.Component);
    y.propTypes = {};
    t.a = y;
  },
  '5wuu': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__timerHolder___3Sw6W-camelCase{width:20vw;height:20vw;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:calc(50% - 10vw);left:70vw;overflow:hidden}.styles__timerContainer___2hI-J-camelCase{background:#75cedd}.styles__timerContainer___2hI-J-camelCase,.styles__timerContainerDone___1qKkO-camelCase{width:13vw;height:13vw;position:relative;left:3.5vw;top:3.5vw;border-radius:10px;overflow:hidden}.styles__timerContainerDone___1qKkO-camelCase{background:#009bb6}.styles__timer___8aasT-camelCase,.styles__timerAnimate___VVDnc-camelCase{font-size:7.5vw;color:#fff;text-align:center;position:absolute;height:100%;width:100%;line-height:13vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;z-index:4}.styles__timerAnimate___VVDnc-camelCase{-webkit-animation:styles__timer___8aasT-camelCase 1s linear;animation:styles__timer___8aasT-camelCase 1s linear}@-webkit-keyframes styles__timer___8aasT-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}@keyframes styles__timer___8aasT-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}.styles__spinnerContainer___3xfs8-camelCase,.styles__spinnerContainerDone___3mc6M-camelCase{width:175%;height:175%;position:absolute;left:-37.5%;top:-37.5%;background:inherit}.styles__spinnerContainerDone___3mc6M-camelCase{opacity:0}.styles__spinner___12-LM-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:175px 0 0 175px;z-index:2;-webkit-animation:styles__rota___zUWIQ-camelCase 1s linear;animation:styles__rota___zUWIQ-camelCase 1s linear}@-webkit-keyframes styles__rota___zUWIQ-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes styles__rota___zUWIQ-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__filler___2TNzf-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:0 175px 175px 0;z-index:1;-webkit-animation:styles__fill___1wqfS-camelCase 1s steps(1);animation:styles__fill___1wqfS-camelCase 1s steps(1);left:50%;opacity:0}@-webkit-keyframes styles__fill___1wqfS-camelCase{0%{opacity:0}50%,to{opacity:1}}@keyframes styles__fill___1wqfS-camelCase{0%{opacity:0}50%,to{opacity:1}}.styles__mask___2BquE-camelCase{width:50%;height:100%;position:absolute;z-index:3;opacity:1;background:inherit;-webkit-animation:styles__mask___2BquE-camelCase 1s steps(1);animation:styles__mask___2BquE-camelCase 1s steps(1)}@-webkit-keyframes styles__mask___2BquE-camelCase{0%{opacity:1}50%,to{opacity:0}}@keyframes styles__mask___2BquE-camelCase{0%{opacity:1}50%,to{opacity:0}}.styles__heading___2Vk10-camelCase{font-size:7.5vw;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif;position:absolute;top:50%;left:10vw;width:47.5vw;height:22.5vw;transform:translateY(-50%);display:flex;justify-content:center;align-content:center;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}',
      ''
    ]), t.locals = {
      timerHolder: 'styles__timerHolder___3Sw6W-camelCase',
      timerContainer: 'styles__timerContainer___2hI-J-camelCase',
      timerContainerDone: 'styles__timerContainerDone___1qKkO-camelCase',
      timer: 'styles__timer___8aasT-camelCase',
      timerAnimate: 'styles__timerAnimate___VVDnc-camelCase',
      spinnerContainer: 'styles__spinnerContainer___3xfs8-camelCase',
      spinnerContainerDone: 'styles__spinnerContainerDone___3mc6M-camelCase',
      spinner: 'styles__spinner___12-LM-camelCase',
      rota: 'styles__rota___zUWIQ-camelCase',
      filler: 'styles__filler___2TNzf-camelCase',
      fill: 'styles__fill___1wqfS-camelCase',
      mask: 'styles__mask___2BquE-camelCase',
      heading: 'styles__heading___2Vk10-camelCase'
    };
  },
  '78zJ': function (e, t, a) {
    var n = a('eeJY');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  '8Z5q': function (e, t, a) {
    var n = a('97Ii');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  '97Ii': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___YrfaQ-camelCase{top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden}.styles__container___YrfaQ-camelCase,.styles__text___rp5HG-camelCase{position:absolute}.styles__text___rp5HG-camelCase{width:80%;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;font-size:6vw;opacity:0}.styles__n1___25FOd-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 0ms forwards,styles__fadeOut___92wdr-camelCase .15s linear 2.5s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 0ms forwards,styles__fadeOut___92wdr-camelCase .15s linear 2.5s forwards}.styles__n2___1RqhX-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 2.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 4.5s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 2.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 4.5s forwards}.styles__n3___2NRO3-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 4.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 6.5s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 4.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 6.5s forwards}.styles__n4___vKkHZ-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 6.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 9s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 6.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 9s forwards}.styles__n5___1I0uN-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 9s forwards,styles__fadeOut___92wdr-camelCase .15s linear 11.5s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 9s forwards,styles__fadeOut___92wdr-camelCase .15s linear 11.5s forwards}.styles__n6___ITUzE-camelCase{-webkit-animation:styles__fadeIn___143vZ-camelCase .15s linear 11.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 14s forwards;animation:styles__fadeIn___143vZ-camelCase .15s linear 11.5s forwards,styles__fadeOut___92wdr-camelCase .15s linear 14s forwards}@-webkit-keyframes styles__fadeIn___143vZ-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@keyframes styles__fadeIn___143vZ-camelCase{0%{opacity:0;transform:scale(.5) translateY(-50%)}to{opacity:1;transform:scale(1) translateY(-50%)}}@-webkit-keyframes styles__fadeOut___92wdr-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}@keyframes styles__fadeOut___92wdr-camelCase{0%{opacity:1;transform:scale(1) translateY(-50%)}to{opacity:0;transform:scale(.5) translateY(-50%)}}',
      ''
    ]), t.locals = {
      container: 'styles__container___YrfaQ-camelCase',
      text: 'styles__text___rp5HG-camelCase',
      n1: 'styles__n1___25FOd-camelCase',
      fadeIn: 'styles__fadeIn___143vZ-camelCase',
      fadeOut: 'styles__fadeOut___92wdr-camelCase',
      n2: 'styles__n2___1RqhX-camelCase',
      n3: 'styles__n3___2NRO3-camelCase',
      n4: 'styles__n4___vKkHZ-camelCase',
      n5: 'styles__n5___1I0uN-camelCase',
      n6: 'styles__n6___ITUzE-camelCase'
    };
  },
  '9IXX': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('cpGi'), _ = a('DZIX'), u = a.n(_), m = a('TN+F');
    function f(e) {
      return (f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function p(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function y(e, t) {
      return (y = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function d(e) {
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
        var a, n = g(e);
        if (t) {
          var s = g(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return h(this, a);
      };
    }
    function h(e, t) {
      return !t || 'object' !== f(t) && 'function' != typeof t ? b(e) : t;
    }
    function b(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function g(e) {
      return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var v = function (e) {
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
      }(o, e);
      var t, a, n, r = d(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = { full: Object(m.l)() }, t.checkResize = t.checkResize.bind(b(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            window.addEventListener('resize', this.checkResize);
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            window.removeEventListener('resize', this.checkResize);
          }
        },
        {
          key: 'checkResize',
          value: function () {
            this.setState({ full: Object(m.l)() });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', {
              className: u.a.header,
              style: { backgroundColor: this.props.color || null }
            }, s.a.createElement('div', {
              className: u.a.headerTextLeft,
              style: { fontSize: 'Blooket' === this.state.left ? 34 : 30 }
            }, s.a.createElement('i', {
              className: l()(u.a.iconButton, this.state.full ? 'fas fa-compress' : 'fas fa-expand'),
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ full: Object(m.B)() });
              }
            }), void 0 !== this.props.muted ? s.a.createElement('i', {
              className: l()(u.a.iconButton, this.props.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up'),
              style: { fontSize: 26 },
              role: 'button',
              tabIndex: 0,
              onClick: this.props.changeMuted
            }) : null, this.props.left), s.a.createElement('div', { className: u.a.headerTextCenter }, this.props.center), s.a.createElement('div', { className: u.a.headerTextRight }, this.props.right, void 0 !== this.props.onRightClick ? s.a.createElement(s.a.Fragment, null, s.a.createElement(c.a, {
              place: 'left',
              effect: 'solid',
              className: u.a.tooltip
            }), s.a.createElement('i', {
              className: l()(u.a.iconButton, 'fas fa-fast-forward'),
              style: {
                marginRight: 0,
                marginLeft: 15
              },
              role: 'button',
              tabIndex: 0,
              onClick: this.props.onRightClick,
              'data-tip': 'End Now'
            })) : null));
          }
        }
      ]) && p(t.prototype, a), n && p(t, n), o;
    }(s.a.Component);
    v.propTypes = {
      left: o.a.any,
      center: o.a.any,
      right: o.a.any,
      color: o.a.string,
      muted: o.a.bool,
      changeMuted: o.a.func,
      onRightClick: o.a.func
    }, t.a = v;
  },
  AFtC: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('xxD1'), p = a('DoX5'), y = a('TN+F');
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function h(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function b(e) {
      return function (e) {
        if (Array.isArray(e))
          return g(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return g(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return g(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function g(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function v(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function C(e, t) {
      return (C = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function w(e) {
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
          var s = T(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return x(this, a);
      };
    }
    function x(e, t) {
      return !t || 'object' !== d(t) && 'function' != typeof t ? k(e) : t;
    }
    function k(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function T(e) {
      return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var E = function (e) {
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
      }(o, e);
      var t, a, n, r = w(o);
      function o(e) {
        var t, a, n;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          cards: (a = Object(y.j)(Object.keys(f.a), 4), n = [], a.forEach(function (e) {
            n.push(e), n.push(e);
          }), Object(y.w)(n)),
          flippedCards: [],
          cardChosen: -1,
          cardChosen2: -1
        }, t.paused = !1, t.chooseCard = t.chooseCard.bind(k(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.pauseTimeout);
          }
        },
        {
          key: 'chooseCard',
          value: function (e) {
            var t = this;
            if (!this.paused) {
              if (-1 === this.state.cardChosen)
                return this.setState({ cardChosen: e });
              if (this.state.cardChosen === e)
                return this.setState({ cardChosen: -1 });
              if (this.state.cards[e] === this.state.cards[this.state.cardChosen]) {
                var a = b(this.state.flippedCards);
                a.push(this.state.cardChosen), a.push(e), this.setState({
                  flippedCards: a,
                  cardChosen: -1
                }, function () {
                  t.state.flippedCards.length === t.state.cards.length && (t.paused = !0, t.pauseTimeout = setTimeout(function () {
                    t.props.onFinish();
                  }, 500));
                });
              } else
                this.setState({ cardChosen2: e }, function () {
                  t.paused = !0, t.pauseTimeout = setTimeout(function () {
                    t.paused = !1, t.setState({
                      cardChosen: -1,
                      cardChosen2: -1
                    });
                  }, 500);
                });
            }
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', {
              className: _.a.container,
              style: { maxWidth: 500 }
            }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(y.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Find the matching cards'), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.cards.map(function (t, a) {
              return s.a.createElement('div', {
                className: l()(_.a.button, h({}, _.a.noClick, e.state.flippedCards.includes(a) || e.state.cardChosen === a || e.state.cardChosen2 === a)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return e.chooseCard(a);
                },
                key: a
              }, s.a.createElement('div', { className: _.a.buttonInside }, s.a.createElement(p.a, {
                name: t,
                className: l()(_.a.cardBlook, h({}, _.a.flipped, e.state.flippedCards.includes(a) || e.state.cardChosen === a || e.state.cardChosen2 === a))
              })));
            }))));
          }
        }
      ]) && v(t.prototype, a), n && v(t, n), o;
    }(s.a.Component);
    E.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = E;
  },
  Bxyz: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('2NlJ'), o = a.n(r), i = function () {
        return s.a.createElement('div', null, s.a.createElement('div', { className: o.a.glitch1 }, '#LOL'), s.a.createElement('div', { className: o.a.glitch2 }, '#TacoTuesday'), s.a.createElement('div', { className: o.a.glitch3 }, '#SELFIE'), s.a.createElement('div', { className: o.a.glitch4 }, '#StudiousSeason'), s.a.createElement('div', { className: o.a.glitch5 }, '#NobodyCares'), s.a.createElement('div', { className: o.a.glitch6 }, '#HashtagsAreFakeWaffles'), s.a.createElement('div', { className: o.a.glitch7 }, '#NotTheNumberSymbol'), s.a.createElement('div', { className: o.a.glitch8 }, '#TGIF...Maybe'), s.a.createElement('div', { className: o.a.glitch9 }, '#STOPPPPPPPP'), s.a.createElement('div', { className: o.a.glitch10 }, '#KahootWho?'));
      };
    i.propTypes = {}, t.a = i;
  },
  DZIX: function (e, t, a) {
    var n = a('L4fl');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  E2Cb: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('78zJ'), l = a.n(i), c = a('GIcp'), _ = a.n(c), u = a('TN+F');
    function m(e) {
      return (m = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function f(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function p(e, t) {
      return (p = Object.setPrototypeOf || function (e, t) {
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
          var s = b(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return d(this, a);
      };
    }
    function d(e, t) {
      return !t || 'object' !== m(t) && 'function' != typeof t ? h(e) : t;
    }
    function h(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function b(e) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var g = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && p(e, t);
      }(o, e);
      var t, a, n, r = y(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          progress: 0,
          isDownloading: !1,
          isDone: !1
        }, t.startUpload = t.startUpload.bind(h(t)), t;
      }
      return t = o, (a = [
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.endTimeout), clearTimeout(this.progressTimeout);
          }
        },
        {
          key: 'startUpload',
          value: function () {
            var e = this;
            if (!this.state.isDownloading) {
              this.setState({ isDownloading: !0 });
              var t = 0;
              !function a() {
                t += 1, e.setState({ progress: t }), t >= 35 ? e.setState({ isDone: !0 }, function () {
                  e.endTimeout = setTimeout(function () {
                    e.props.onFinish();
                  }, 1000);
                }) : e.progressTimeout = setTimeout(function () {
                  a();
                }, Object(u.q)(50, 350));
              }();
            }
          }
        },
        {
          key: 'render',
          value: function () {
            return s.a.createElement('div', { className: _.a.modal }, s.a.createElement('div', { className: l.a.container }, s.a.createElement('div', { className: l.a.overlay }), s.a.createElement('div', { className: l.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(u.v)(this.props.amount), ')')), s.a.createElement('div', { className: l.a.desc }, 'Complete the upload'), s.a.createElement('div', { className: l.a.progressHolder }, s.a.createElement('div', {
              className: l.a.progress,
              style: { transform: 'translateX(-'.concat((35 - this.state.progress) / 35 * 100, '%)') }
            })), this.state.isDownloading ? s.a.createElement('div', {
              className: l.a.desc,
              style: { margin: '10px' }
            }, this.state.isDone ? 'Complete!' : 'Loading...') : s.a.createElement('div', { className: l.a.buttonContainer }, s.a.createElement('div', {
              className: l.a.longButton,
              role: 'button',
              tabIndex: 0,
              onClick: this.startUpload
            }, 'Start Upload'))));
          }
        }
      ]) && f(t.prototype, a), n && f(t, n), o;
    }(s.a.Component);
    g.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = g;
  },
  EA5F: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___2KwUT-camelCase{position:absolute;background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);width:35vw;min-width:250px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;color:#3a3a3a;display:flex;flex-direction:row;align-items:center;transform:translate(-50%,-50%)}.styles__close___1GKI9-camelCase{font-size:14px;position:absolute;top:10px;right:10px}.styles__blook___37iGq-camelCase{width:40%;margin:3vh 5%}.styles__msg___VDYDx-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;text-align:center;width:40%;margin:4vh 5% 4vh 0}@media only screen and (max-width:600px){.styles__msg___VDYDx-camelCase{font-size:3vh}.styles__container___2KwUT-camelCase{width:25vw}}',
      ''
    ]), t.locals = {
      container: 'styles__container___2KwUT-camelCase',
      close: 'styles__close___1GKI9-camelCase',
      blook: 'styles__blook___37iGq-camelCase',
      msg: 'styles__msg___VDYDx-camelCase'
    };
  },
  FC5S: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('4HzQ'), l = a('TSYQ'), c = a.n(l), _ = a('UDbo'), u = a('urPT'), m = a.n(u), f = a('FPhr'), p = a('TN+F'), y = a('Y7vQ'), d = a.n(y);
    function h(e) {
      return (h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function b(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function g(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function v(e, t) {
      return (v = Object.setPrototypeOf || function (e, t) {
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
        var a, n = k(e);
        if (t) {
          var s = k(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return w(this, a);
      };
    }
    function w(e, t) {
      return !t || 'object' !== h(t) && 'function' != typeof t ? x(e) : t;
    }
    function x(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && v(e, t);
      }(o, e);
      var t, a, n, r = C(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          timer: e.time,
          timerChange: !0,
          ready: !1,
          paused: !1,
          unpause: !1,
          showImage: !1,
          answerAmounts: []
        }, t.getChartData = t.getChartData.bind(x(t)), t.pausePlay = t.pausePlay.bind(x(t)), t.getPausedStyle = t.getPausedStyle.bind(x(t)), t.intervalSetup = t.intervalSetup.bind(x(t)), t.audio = new Audio(d.a), t.audio.muted = e.muted, t.played = !1, t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            for (var e = this, t = [
                  this.props.clientAnswers.filter(function (e) {
                    return 1 === e;
                  }).length,
                  this.props.clientAnswers.filter(function (e) {
                    return 3 === e;
                  }).length,
                  this.props.clientAnswers.filter(function (e) {
                    return 2 === e;
                  }).length,
                  this.props.clientAnswers.filter(function (e) {
                    return 0 === e;
                  }).length,
                  0 === this.props.clientAnswers.length ? 1 : this.props.numClients - this.props.clientAnswers.length
                ], a = 0, n = function (t) {
                  a += e.props.clientAnswers.filter(function (a) {
                    return e.props.answers[a] === e.props.correctAnswers[t];
                  }).length;
                }, s = 0; s < this.props.correctAnswers.length; s++)
              n(s);
            this.setState({
              answerAmounts: t,
              numAnswers: Math.max(1, this.props.numClients),
              numCorrectAnswers: a
            }), this.intervalSetup();
          }
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            this.audio.muted = this.props.muted;
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.audio.currentTime = 0, this.audio.pause(), clearInterval(this.interval), clearTimeout(this.timeout), clearTimeout(this.unpauseTimeout);
          }
        },
        {
          key: 'getChartData',
          value: function () {
            var e = this.state.ready ? 0.5 : 1;
            return {
              datasets: [{
                  data: this.state.answerAmounts,
                  backgroundColor: [
                    'rgba(51, 120, 255, '.concat(this.props.correctAnswers.includes(this.props.answers[1]) ? 1 : e, ')'),
                    'rgba(255, 70, 43, '.concat(this.props.correctAnswers.includes(this.props.answers[3]) ? 1 : e, ')'),
                    'rgba(0, 207, 119, '.concat(this.props.correctAnswers.includes(this.props.answers[2]) ? 1 : e, ')'),
                    'rgba(255, 163, 30, '.concat(this.props.correctAnswers.includes(this.props.answers[0]) ? 1 : e, ')'),
                    '#D9D9D9'
                  ]
                }]
            };
          }
        },
        {
          key: 'getPausedStyle',
          value: function () {
            return this.state.paused ? { animationPlayState: 'paused' } : {};
          }
        },
        {
          key: 'intervalSetup',
          value: function () {
            var e = this;
            this.played || (this.audio.play(), this.played = !0);
            var t = this.state.timer;
            this.interval = setInterval(function () {
              if (!e.state.paused) {
                if ((t -= 1) == e.props.time - 2 && e.setState({ ready: !0 }), t <= 0)
                  return clearInterval(e.interval), void e.props.next();
                t <= 5 ? e.setState({ timerChange: !0 }, function () {
                  e.timeout = setTimeout(function () {
                    e.setState({
                      timer: t,
                      timerChange: !1
                    });
                  }, 15);
                }) : e.setState({ timer: t }), e.setState({ timer: t });
              }
            }, 1000);
          }
        },
        {
          key: 'pausePlay',
          value: function () {
            var e = this;
            this.state.paused ? this.setState({ unpause: !0 }, function () {
              e.unpauseTimeout = setTimeout(function () {
                e.intervalSetup(), e.setState({
                  unpause: !1,
                  paused: !1
                });
              }, 25);
            }) : (clearInterval(this.interval), this.setState({ paused: !0 }));
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return s.a.createElement('div', { className: this.props.transitioning ? m.a.invisible : null }, s.a.createElement('div', { className: m.a.transition }, s.a.createElement('div', { className: m.a.upperContainer }, this.props.image ? s.a.createElement('div', null, s.a.createElement('div', { className: m.a.questionContainerImage }, this.state.showImage ? s.a.createElement('img', {
              src: Object(p.f)(this.props.image),
              alt: 'Question',
              className: m.a.image,
              draggable: !1
            }) : s.a.createElement(i.Textfit, {
              className: m.a.questionText,
              mode: 'multi',
              min: 1,
              max: Object(p.C)('3vw')
            }, this.props.text)), s.a.createElement('div', {
              className: m.a.mediaButton,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({ showImage: !e.state.showImage });
              }
            }, s.a.createElement('i', { className: c()(m.a.mediaIcon, 'far fa-image') }), s.a.createElement('div', { className: m.a.mediaText }, this.state.showImage ? 'Hide Image' : 'Show Image'))) : s.a.createElement('div', { className: m.a.questionContainer }, s.a.createElement(i.Textfit, {
              className: m.a.questionText,
              mode: 'multi',
              min: 1,
              max: Object(p.C)('3vw')
            }, this.props.text)), s.a.createElement('div', { className: m.a.centerContainer }, s.a.createElement('div', { className: m.a.upperCenter }, s.a.createElement('div', { className: m.a.upperCenterText }, 'Responses:')), s.a.createElement('div', { className: m.a.lowerCenter }, s.a.createElement(_.Doughnut, {
              data: this.getChartData(),
              options: {
                maintainAspectRatio: !1,
                responsive: !0,
                legend: { display: !1 },
                tooltips: { enabled: !1 },
                animation: {
                  duration: this.state.ready ? 250 : 1500,
                  easing: this.state.ready ? 'linear' : 'easeInQuint'
                },
                layout: { padding: 15 }
              }
            }), s.a.createElement('div', { className: this.state.ready ? m.a.percentageText : m.a.percentageTextFaded }, ''.concat(Math.round(this.state.numCorrectAnswers / this.state.numAnswers * 100), '%')), this.props.answers[0] ? s.a.createElement('div', { className: c()(2 === this.props.answers.length ? m.a.boxOneTwo : m.a.boxOneThreeFour, this.state.ready && !this.props.correctAnswers.includes(this.props.answers[0]) ? m.a.faded : null) }, s.a.createElement('div', { className: m.a.amountText }, this.state.answerAmounts[3])) : null, this.props.answers[1] ? s.a.createElement('div', { className: c()(4 === this.props.answers.length ? m.a.boxTwoFour : m.a.boxTwoTwoThree, this.state.ready && !this.props.correctAnswers.includes(this.props.answers[1]) ? m.a.faded : null) }, s.a.createElement('div', { className: m.a.amountText }, this.state.answerAmounts[0])) : null, this.props.answers[2] ? s.a.createElement('div', { className: c()(m.a.boxThree, this.state.ready && !this.props.correctAnswers.includes(this.props.answers[2]) ? m.a.faded : null) }, s.a.createElement('div', { className: m.a.amountText }, this.state.answerAmounts[2])) : null, this.props.answers[3] ? s.a.createElement('div', { className: c()(m.a.boxFour, this.state.ready && !this.props.correctAnswers.includes(this.props.answers[3]) ? m.a.faded : null) }, s.a.createElement('div', { className: m.a.amountText }, this.state.answerAmounts[1])) : null)), s.a.createElement('div', { className: m.a.rightTopContainer }, s.a.createElement('div', { className: 0 === this.state.timer ? m.a.timerContainerDone : m.a.timerContainer }, s.a.createElement('div', {
              className: this.state.timerChange || this.state.unpause ? m.a.timer : m.a.timerAnimate,
              style: this.getPausedStyle()
            }, this.state.timer), s.a.createElement('div', { className: 0 === this.state.timer ? m.a.spinnerContainerDone : m.a.spinnerContainer }, s.a.createElement('div', {
              className: this.state.unpause ? m.a.spinner : m.a.spinnerAnimate,
              style: this.getPausedStyle()
            }), s.a.createElement('div', {
              className: this.state.unpause ? m.a.filler : m.a.fillerAnimate,
              style: this.getPausedStyle()
            }), s.a.createElement('div', {
              className: this.state.unpause ? m.a.mask : m.a.maskAnimate,
              style: this.getPausedStyle()
            })))), s.a.createElement('div', {
              className: m.a.pauseButton,
              onClick: this.pausePlay,
              role: 'button',
              tabIndex: '0',
              style: { left: this.props.canSkip ? '84vw' : '87.5vw' }
            }, s.a.createElement('i', { className: c()(m.a.pauseIcon, this.state.paused ? 'fas fa-play' : 'fas fa-pause') })), this.props.canSkip ? s.a.createElement('div', {
              className: m.a.pauseButton,
              onClick: this.props.next,
              role: 'button',
              tabIndex: '0',
              style: { left: '91vw' }
            }, s.a.createElement('i', { className: c()(m.a.pauseIcon, 'fas fa-forward') })) : null)), s.a.createElement('div', { className: m.a.answersHolder }, this.props.answers.map(function (t, a) {
              return s.a.createElement('div', {
                className: c()(m.a.answerContainer, b({}, m.a.answerTwo, 2 === e.props.answers.length), b({}, m.a.answerThree, 3 === e.props.answers.length && 2 === a), b({}, m.a.faded, e.state.ready && !e.props.correctAnswers.includes(t))),
                style: { backgroundColor: f.b.default.answers[a].background },
                key: t
              }, e.state.ready && e.props.correctAnswers.includes(t) ? s.a.createElement('i', { className: c()(m.a.selectedIcon, 'fas fa-check') }) : null, s.a.createElement(i.Textfit, {
                className: c()(m.a.answerText, b({}, m.a.selectedText, e.state.ready && e.props.correctAnswers.includes(t))),
                mode: 'multi',
                min: 1,
                max: Object(p.C)('2.5vw'),
                style: { color: f.b.default.answers[a].text }
              }, t));
            })));
          }
        }
      ]) && g(t.prototype, a), n && g(t, n), o;
    }(s.a.Component);
    T.propTypes = {
      next: o.a.func,
      time: o.a.number,
      text: o.a.string,
      image: o.a.string,
      answers: o.a.array,
      correctAnswers: o.a.array,
      clientAnswers: o.a.array,
      numClients: o.a.number,
      transitioning: o.a.bool,
      muted: o.a.bool,
      canSkip: o.a.bool
    }, t.a = T;
  },
  FUq1: function (e, t, a) {
    var n = a('UEBH');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  ICv3: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('TN+F');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function y(e) {
      return function (e) {
        if (Array.isArray(e))
          return d(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return d(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return d(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function h(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function g(e) {
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
        var a, n = w(e);
        if (t) {
          var s = w(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return v(this, a);
      };
    }
    function v(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? C(e) : t;
    }
    function C(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function w(e) {
      return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var x = [
        '#47d147',
        '#3385ff',
        '#ffff66',
        '#ff3333'
      ], k = {
        '#47d147': 'fas fa-square',
        '#3385ff': 'fas fa-circle',
        '#ffff66': 'fas fa-star',
        '#ff3333': 'fas fa-heart'
      }, T = function (e) {
        var t = e[0];
        return e.filter(function (e) {
          return e === t;
        }).length === e.length;
      }, E = function (e) {
        for (var t = []; 0 === t.length || T(t);) {
          t = [];
          for (var a = 0; a < 8; a++)
            t.push(Object(f.o)(e));
        }
        return t;
      }, N = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && b(e, t);
        }(o, e);
        var t, a, n, r = g(o);
        function o(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), (t = r.call(this, e)).stdColors = Object(f.w)(x), t.state = { colors: E(t.stdColors) }, t.done = !1, t.clickButton = t.clickButton.bind(C(t)), t;
        }
        return t = o, (a = [
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.endTimeout);
            }
          },
          {
            key: 'clickButton',
            value: function (e) {
              var t = this;
              if (!this.done) {
                var a = y(this.state.colors), n = a[e], s = this.stdColors.indexOf(n) + 1, r = s >= this.stdColors.length ? this.stdColors[0] : this.stdColors[s];
                a[e] = r, this.setState({ colors: a }), T(a) && (this.done = !0, this.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', {
                className: _.a.container,
                style: { maxWidth: 500 }
              }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(f.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Make all buttons the same color'), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.colors.map(function (t, a) {
                return s.a.createElement('div', {
                  className: _.a.button,
                  style: { backgroundColor: t },
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.clickButton(a);
                  },
                  key: a
                }, s.a.createElement('div', { className: _.a.buttonInside }, s.a.createElement('i', { className: l()(_.a.icon, k[t]) })));
              }))));
            }
          }
        ]) && h(t.prototype, a), n && h(t, n), o;
      }(s.a.Component);
    N.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = N;
  },
  JsXP: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___1LuJN-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;top:0;left:0;height:100%;width:100%;z-index:10;pointer-events:none}.styles__text___2e2JR-camelCase{font-size:4vw;padding:1vw 3vw;text-align:center;color:#fff;font-family:Nunito,sans-serif;font-weight:700;max-width:70%;background-color:rgba(0,0,0,.6);border-radius:6px}@media only screen and (max-width:600px){.styles__text___2e2JR-camelCase{font-size:3.5vh;padding:1vh 5vw}}',
      ''
    ]), t.locals = {
      container: 'styles__container___1LuJN-camelCase',
      text: 'styles__text___2e2JR-camelCase'
    };
  },
  L4fl: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__header___1cdBZ-camelCase{background-color:#9a49aa;width:100vw;height:65px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;z-index:10;overflow:hidden;position:absolute;top:0;left:0}.styles__iconButton___3w5w9-camelCase{font-size:28px;line-height:65px;text-align:center;margin-right:15px;width:30px;cursor:pointer;outline:none;transition:.2s}.styles__iconButton___3w5w9-camelCase:hover{transform:scale(.95)}.styles__headerTextLeft___1Rzz4-camelCase{font-size:30px;text-align:left;line-height:65px;padding-left:20px}.styles__headerTextCenter___GkQO3-camelCase,.styles__headerTextLeft___1Rzz4-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerTextCenter___GkQO3-camelCase{font-size:38px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__headerTextRight___2k51S-camelCase{font-size:30px;color:#fff;text-align:right;line-height:65px;padding-right:20px;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__tooltip___3vYeX-camelCase{font-family:Nunito,sans-serif;font-size:15px;line-height:15px;padding:6px 13px}',
      ''
    ]), t.locals = {
      header: 'styles__header___1cdBZ-camelCase',
      iconButton: 'styles__iconButton___3w5w9-camelCase',
      headerTextLeft: 'styles__headerTextLeft___1Rzz4-camelCase',
      headerTextCenter: 'styles__headerTextCenter___GkQO3-camelCase',
      headerTextRight: 'styles__headerTextRight___2k51S-camelCase',
      tooltip: 'styles__tooltip___3vYeX-camelCase'
    };
  },
  N6zg: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__header___3ZnR--camelCase{background-color:#9a49aa;width:100%;height:55px;margin:0;padding:auto;box-shadow:0 6px 8px rgba(0,0,0,.2);display:flex;flex-direction:row;justify-content:space-between;z-index:10;position:absolute;top:0;left:0}.styles__linkText___ZHSxQ-camelCase{font-size:40px;color:#fff;text-align:left;margin-left:40px;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none}.styles__expandIcon___2eC4H-camelCase,.styles__linkText___ZHSxQ-camelCase{line-height:55px;outline:none;cursor:pointer}.styles__expandIcon___2eC4H-camelCase{font-size:22px;margin-right:15px}.styles__headerTextLeft___2FI8e-camelCase{font-size:28px;text-align:left;line-height:55px;padding-left:20px;display:flex;flex-direction:row;align-items:center}.styles__headerTextCenter___2IRjz-camelCase,.styles__headerTextLeft___2FI8e-camelCase{color:#fff;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__headerTextCenter___2IRjz-camelCase{display:block;font-size:30px;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:700}.styles__headerRight___1bkCl-camelCase{display:flex;flex-direction:row}.styles__rightText___VoeSu-camelCase{font-size:28px;color:#fff;text-align:right;line-height:55px;padding-right:20px;font-family:Nunito,sans-serif}.styles__energyContainer___-Fv26-camelCase,.styles__rightText___VoeSu-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__energyContainer___-Fv26-camelCase{display:flex;align-items:center;flex-direction:row}.styles__playerEnergy___2o4c_-camelCase{font-size:32px;padding-right:10px;font-family:Nunito,sans-serif}.styles__energyIcon___1ubiH-camelCase,.styles__playerEnergy___2o4c_-camelCase{color:#fff;text-align:right;line-height:55px}.styles__energyIcon___1ubiH-camelCase{font-size:25px;padding-right:20px}.styles__candy___1m4tf-camelCase{width:35px;height:35px;padding-right:20px}.styles__linkRight___2EI9S-camelCase{font-size:24px;font-weight:700;font-family:Nunito,sans-serif;text-align:right;text-decoration:underline;line-height:55px;margin-right:40px;color:#fff;cursor:pointer;outline:none}@media only screen and (max-width:700px){.styles__headerTextLeft___2FI8e-camelCase{font-size:20px;padding-left:10px}.styles__expandIcon___2eC4H-camelCase{display:none}.styles__linkText___ZHSxQ-camelCase{margin-left:20px}.styles__headerTextCenter___2IRjz-camelCase{display:none}.styles__linkRight___2EI9S-camelCase{margin-right:20px}}',
      ''
    ]), t.locals = {
      header: 'styles__header___3ZnR--camelCase',
      linkText: 'styles__linkText___ZHSxQ-camelCase',
      expandIcon: 'styles__expandIcon___2eC4H-camelCase',
      headerTextLeft: 'styles__headerTextLeft___2FI8e-camelCase',
      headerTextCenter: 'styles__headerTextCenter___2IRjz-camelCase',
      headerRight: 'styles__headerRight___1bkCl-camelCase',
      rightText: 'styles__rightText___VoeSu-camelCase',
      energyContainer: 'styles__energyContainer___-Fv26-camelCase',
      playerEnergy: 'styles__playerEnergy___2o4c_-camelCase',
      energyIcon: 'styles__energyIcon___1ubiH-camelCase',
      candy: 'styles__candy___1m4tf-camelCase',
      linkRight: 'styles__linkRight___2EI9S-camelCase'
    };
  },
  UEBH: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__upperContainer___3_z0A-camelCase{width:100vw;height:calc(70vh - 65px);position:absolute;top:65px;left:0;z-index:1}.styles__imageContainer___2IrCM-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:50%;left:5vw;height:75%;width:30vw;transform:translateY(-50%);display:flex;align-items:center;justify-content:center}.styles__image___1Bt8J-camelCase{margin:auto;width:90%;height:90%;-o-object-fit:contain;object-fit:contain;border-radius:10px}.styles__questionContainerImage___2JicS-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);top:50%;left:38.75vw;height:75%;width:40vw;transform:translateY(-50%);align-items:center}.styles__questionContainerImage___2JicS-camelCase,.styles__questionTextImage___1xnQA-camelCase{position:absolute;display:flex;justify-content:center}.styles__questionTextImage___1xnQA-camelCase{color:#3a3a3a;top:5%;left:5vw;width:30vw;height:90%;font-family:Nunito,sans-serif;text-align:center;overflow:hidden;align-content:center;flex-direction:column;float:left;word-wrap:break-word;z-index:2}.styles__questionContainerNoImage___3tDOg-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:50%;left:40%;height:75%;width:70vw;display:inline-block;transform:translate(-50%,-50%)}.styles__questionTextNoImage___3Nd1L-camelCase{color:#3a3a3a;top:7.5%;left:5vw;width:60vw;height:85%;font-family:Nunito,sans-serif;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left;word-wrap:break-word;z-index:2}.styles__nextButton___2pFSI-camelCase,.styles__questionTextNoImage___3Nd1L-camelCase{position:absolute;text-align:center;overflow:hidden}.styles__nextButton___2pFSI-camelCase{width:15vw;height:15%;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);top:75%;left:82.5vw;cursor:pointer;font-size:2.5vw;outline:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__nextButton___2pFSI-camelCase:hover{transform:scale(1.05)}.styles__nextText___2FYRj-camelCase{font-family:Titan One,sans-serif;color:#3a3a3a;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__upperRightContainer___Y4d1_-camelCase{width:15vw;height:60%;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:10%;left:82.5vw;overflow:hidden}.styles__numAnswersText___3D-cD-camelCase{font-size:4vw;color:#3a3a3a;text-align:center;width:100%;position:absolute;left:50%;top:calc((37vh - 39px - 7.5vw)/2 + 5vh + 7.5vw);transform:translate(-50%,-50%);font-family:Titan One,sans-serif;z-index:4}.styles__timerContainer___kRdvV-camelCase{background:#75cedd}.styles__timerContainer___kRdvV-camelCase,.styles__timerContainerDone___J_MTw-camelCase{width:7.5vw;height:7.5vw;position:relative;left:3.75vw;top:5vh;border-radius:10px;overflow:hidden}.styles__timerContainerDone___J_MTw-camelCase{background:#009bb6}.styles__timer___13LWI-camelCase,.styles__timerAnimate___2IeIv-camelCase{font-size:3.5vw;color:#fff;text-align:center;position:absolute;height:100%;width:100%;line-height:7.5vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;z-index:4}.styles__timerAnimate___2IeIv-camelCase{-webkit-animation:styles__timer___13LWI-camelCase 1s linear;animation:styles__timer___13LWI-camelCase 1s linear}@-webkit-keyframes styles__timer___13LWI-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}@keyframes styles__timer___13LWI-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}.styles__spinnerContainer___1MiA2-camelCase,.styles__spinnerContainerDone___1m2vy-camelCase{width:175%;height:175%;position:absolute;left:-37.5%;top:-37.5%;background:inherit}.styles__spinnerContainerDone___1m2vy-camelCase{opacity:0}.styles__spinner___3CPBT-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:175px 0 0 175px;z-index:2;-webkit-animation:styles__rota___tRBnL-camelCase 1s linear;animation:styles__rota___tRBnL-camelCase 1s linear}@-webkit-keyframes styles__rota___tRBnL-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes styles__rota___tRBnL-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__filler___1tbfU-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:0 175px 175px 0;z-index:1;left:50%;opacity:0;-webkit-animation:styles__fill___Ak0i1-camelCase 1s steps(1);animation:styles__fill___Ak0i1-camelCase 1s steps(1)}@-webkit-keyframes styles__fill___Ak0i1-camelCase{0%{opacity:0}50%,to{opacity:1}}@keyframes styles__fill___Ak0i1-camelCase{0%{opacity:0}50%,to{opacity:1}}.styles__mask___2CFst-camelCase{width:50%;height:100%;position:absolute;z-index:3;opacity:1;background:inherit;-webkit-animation:styles__mask___2CFst-camelCase 1s steps(1);animation:styles__mask___2CFst-camelCase 1s steps(1)}@-webkit-keyframes styles__mask___2CFst-camelCase{0%{opacity:1}50%,to{opacity:0}}@keyframes styles__mask___2CFst-camelCase{0%{opacity:1}50%,to{opacity:0}}.styles__answersHolder___2OFpI-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:space-evenly;position:absolute;top:70vh;left:0;height:calc(30vh - 5px);width:calc(100% - 10px);padding:0 5px 5px}.styles__answerContainer___2BTNh-camelCase{margin:auto;width:calc(50% - 6px);height:calc(50% - 6px - .9vh);border-radius:5px;overflow:hidden;outline:none;display:flex;justify-content:center;align-items:center;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__answerTwo___16Mwx-camelCase{height:calc(100% - 6px - .9vh)}.styles__answerTwo___16Mwx-camelCase:focus,.styles__answerTwo___16Mwx-camelCase:hover{height:calc(100% - 6px)}.styles__answerThree___2BXoa-camelCase{width:calc(100% - 6px)}.styles__answerText___2ryRg-camelCase{color:#fff;height:80%;width:80%;font-family:Nunito,sans-serif;text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;float:left;word-wrap:break-word;transform:scale(1);transition:transform .2s cubic-bezier(.39,.5,.15,1.36)}.styles__invisible___1xR3r-camelCase{opacity:0;transition:opacity .3s linear}',
      ''
    ]), t.locals = {
      upperContainer: 'styles__upperContainer___3_z0A-camelCase',
      imageContainer: 'styles__imageContainer___2IrCM-camelCase',
      image: 'styles__image___1Bt8J-camelCase',
      questionContainerImage: 'styles__questionContainerImage___2JicS-camelCase',
      questionTextImage: 'styles__questionTextImage___1xnQA-camelCase',
      questionContainerNoImage: 'styles__questionContainerNoImage___3tDOg-camelCase',
      questionTextNoImage: 'styles__questionTextNoImage___3Nd1L-camelCase',
      nextButton: 'styles__nextButton___2pFSI-camelCase',
      nextText: 'styles__nextText___2FYRj-camelCase',
      upperRightContainer: 'styles__upperRightContainer___Y4d1_-camelCase',
      numAnswersText: 'styles__numAnswersText___3D-cD-camelCase',
      timerContainer: 'styles__timerContainer___kRdvV-camelCase',
      timerContainerDone: 'styles__timerContainerDone___J_MTw-camelCase',
      timer: 'styles__timer___13LWI-camelCase',
      timerAnimate: 'styles__timerAnimate___2IeIv-camelCase',
      spinnerContainer: 'styles__spinnerContainer___1MiA2-camelCase',
      spinnerContainerDone: 'styles__spinnerContainerDone___1m2vy-camelCase',
      spinner: 'styles__spinner___3CPBT-camelCase',
      rota: 'styles__rota___tRBnL-camelCase',
      filler: 'styles__filler___1tbfU-camelCase',
      fill: 'styles__fill___Ak0i1-camelCase',
      mask: 'styles__mask___2CFst-camelCase',
      answersHolder: 'styles__answersHolder___2OFpI-camelCase',
      answerContainer: 'styles__answerContainer___2BTNh-camelCase',
      answerTwo: 'styles__answerTwo___16Mwx-camelCase',
      answerThree: 'styles__answerThree___2BXoa-camelCase',
      answerText: 'styles__answerText___2ryRg-camelCase',
      invisible: 'styles__invisible___1xR3r-camelCase'
    };
  },
  Uw72: function (e, t, a) {
    var n = a('ZMC/');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  'VT/i': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__glitch1___3JtTC-camelCase{font-size:18vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:30vh;left:25vw;transform:translate(-50%,-50%) rotate(-20deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear;animation:styles__glitchFade___1VjHA-camelCase 3s linear}.styles__glitch2___3wU4W-camelCase{color:#f60;text-shadow:2px 2px 8px #f60;top:60vh;left:60vw;transform:translate(-50%,-50%) rotate(20deg);-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear .5s;animation:styles__glitchFade___1VjHA-camelCase 3s linear .5s}.styles__glitch2___3wU4W-camelCase,.styles__glitch3___1d6WA-camelCase{font-size:10vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__glitch3___1d6WA-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:25vh;left:75vw;transform:translate(-50%,-50%) rotate(5deg);-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 1s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 1s}.styles__glitch4___5vCUR-camelCase{font-size:8vw;color:#0ff;text-shadow:2px 2px 8px #0ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:70vh;left:35vw;transform:translate(-50%,-50%) rotate(10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 1.5s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 1.5s}.styles__glitch5___8-w6P-camelCase{font-size:12vw;color:red;text-shadow:2px 2px 8px red;top:50vh;transform:translate(-50%,-50%) rotate(-5deg);-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 2s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 2s}.styles__glitch5___8-w6P-camelCase,.styles__glitch6___2Qoel-camelCase{font-family:Nunito,sans-serif;font-weight:700;position:absolute;left:50vw;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__glitch6___2Qoel-camelCase{font-size:7.5vw;color:#0f0;text-shadow:2px 2px 8px #0f0;top:90vh;transform:translate(-50%,-50%);-webkit-animation:styles__glitchFade___1VjHA-camelCase 4s linear 2.5s;animation:styles__glitchFade___1VjHA-camelCase 4s linear 2.5s}.styles__glitch7___3pgy4-camelCase{font-size:8vw;color:#f0f;text-shadow:2px 2px 8px #f0f;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:25vh;left:50vw;transform:translate(-50%,-50%) rotate(5deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 4s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 4s}.styles__glitch8___27_X1-camelCase{color:#ff0;text-shadow:2px 2px 8px #ff0;top:70vh;left:45vw;transform:translate(-50%,-50%) rotate(-10deg);-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 5s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 5s}.styles__glitch8___27_X1-camelCase,.styles__glitch9___1OVNl-camelCase{font-size:12vw;font-family:Nunito,sans-serif;font-weight:700;position:absolute;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.styles__glitch9___1OVNl-camelCase{color:red;text-shadow:2px 2px 8px red;top:50vh;left:50vw;transform:translate(-50%,-50%);-webkit-animation:styles__glitchFade___1VjHA-camelCase 3s linear 5.5s;animation:styles__glitchFade___1VjHA-camelCase 3s linear 5.5s}.styles__glitch10___3-tgF-camelCase{font-size:7vw;color:#9d00ff;text-shadow:2px 2px 8px #9d00ff;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:80vh;left:75vw;transform:translate(-50%,-50%) rotate(-10deg);opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-animation:styles__glitchFade___1VjHA-camelCase 1s linear 6s;animation:styles__glitchFade___1VjHA-camelCase 1s linear 6s}@-webkit-keyframes styles__glitchFade___1VjHA-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}@keyframes styles__glitchFade___1VjHA-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}',
      ''
    ]), t.locals = {
      glitch1: 'styles__glitch1___3JtTC-camelCase',
      glitchFade: 'styles__glitchFade___1VjHA-camelCase',
      glitch2: 'styles__glitch2___3wU4W-camelCase',
      glitch3: 'styles__glitch3___1d6WA-camelCase',
      glitch4: 'styles__glitch4___5vCUR-camelCase',
      glitch5: 'styles__glitch5___8-w6P-camelCase',
      glitch6: 'styles__glitch6___2Qoel-camelCase',
      glitch7: 'styles__glitch7___3pgy4-camelCase',
      glitch8: 'styles__glitch8___27_X1-camelCase',
      glitch9: 'styles__glitch9___1OVNl-camelCase',
      glitch10: 'styles__glitch10___3-tgF-camelCase'
    };
  },
  XTdC: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__slow___55e5Y-camelCase{font-size:7vw;text-align:center;color:#3a3a3a;text-shadow:2px 2px 8px #3a3a3a;font-family:Nunito,sans-serif;font-weight:700;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;z-index:11;-webkit-animation:styles__slowMo___6N091-camelCase 3s linear;animation:styles__slowMo___6N091-camelCase 3s linear}@-webkit-keyframes styles__slowMo___6N091-camelCase{0%{opacity:0;transform:translate(-50%,-50%)}25%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}45%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}55%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}75%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}to{opacity:0;transform:translate(-50%,-50%)}}@keyframes styles__slowMo___6N091-camelCase{0%{opacity:0;transform:translate(-50%,-50%)}25%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}45%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}55%{opacity:1;transform:translate(-50%,-50%) rotate(1turn)}75%{opacity:1;transform:translate(-50%,-50%) rotate(180deg)}to{opacity:0;transform:translate(-50%,-50%)}}@media only screen and (max-width:600px){.styles__slow___55e5Y-camelCase{font-size:6vh}}',
      ''
    ]), t.locals = {
      slow: 'styles__slow___55e5Y-camelCase',
      slowMo: 'styles__slowMo___6N091-camelCase'
    };
  },
  'ZMC/': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__background___2QFkY-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#333;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:10;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__text___2g_Pk-camelCase{color:#fff;font-size:6vw;font-family:Titan One,sans-serif;text-align:center;margin-top:75px}.styles__blook___15N1v-camelCase{height:129.375px;width:112.5px;transform:rotate(-45deg);transition:all .3s ease-in-out;-webkit-animation-name:styles__blook___15N1v-camelCase;animation-name:styles__blook___15N1v-camelCase;bottom:0}.styles__blook___15N1v-camelCase,.styles__shadow___1E-RW-camelCase{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-delay:0s;animation-delay:0s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:normal;animation-direction:normal;-webkit-animation-play-state:running;animation-play-state:running;position:absolute;left:0;top:133.875px;z-index:1}.styles__dancing___3Bm6R-camelCase{width:112.5px;height:133.875px;margin:150px auto;position:relative}.styles__shadow___1E-RW-camelCase{-webkit-animation-name:styles__shadow___1E-RW-camelCase;animation-name:styles__shadow___1E-RW-camelCase;width:97.5px;height:10px;left:7.5px;position:absolute;bottom:0;display:inline-block;background:rgba(0,0,0,.2);border-radius:100px;z-index:0}@-webkit-keyframes styles__blook___15N1v-camelCase{0%{top:0;transform:rotate(-15deg)}10%{top:-37.5px;transform:rotate(0deg)}50%{top:0;transform:rotate(15deg)}60%{top:-37.5px;transform:rotate(0deg)}to{top:0;transform:rotate(-15deg)}}@keyframes styles__blook___15N1v-camelCase{0%{top:0;transform:rotate(-15deg)}10%{top:-37.5px;transform:rotate(0deg)}50%{top:0;transform:rotate(15deg)}60%{top:-37.5px;transform:rotate(0deg)}to{top:0;transform:rotate(-15deg)}}@-webkit-keyframes styles__shadow___1E-RW-camelCase{0%{transform:scale(1)}10%{transform:scaleX(1.3)}50%{transform:scale(1)}60%{transform:scaleX(1.3)}to{transform:scale(1)}}@keyframes styles__shadow___1E-RW-camelCase{0%{transform:scale(1)}10%{transform:scaleX(1.3)}50%{transform:scale(1)}60%{transform:scaleX(1.3)}to{transform:scale(1)}}@media only screen and (max-width:600px){.styles__text___2g_Pk-camelCase{font-size:5vh}}',
      ''
    ]), t.locals = {
      background: 'styles__background___2QFkY-camelCase',
      text: 'styles__text___2g_Pk-camelCase',
      blook: 'styles__blook___15N1v-camelCase',
      shadow: 'styles__shadow___1E-RW-camelCase',
      dancing: 'styles__dancing___3Bm6R-camelCase'
    };
  },
  aCwo: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('4HzQ'), l = a('TSYQ'), c = a.n(l), _ = a('FUq1'), u = a.n(_), m = a('FPhr'), f = a('TN+F'), p = a('N7JS'), y = a.n(p), d = a('vJXv'), h = a.n(d), b = a('moc3'), g = a.n(b);
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function w(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function x(e, t) {
      return (x = Object.setPrototypeOf || function (e, t) {
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
        var a, n = E(e);
        if (t) {
          var s = E(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return T(this, a);
      };
    }
    function T(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function E(e) {
      return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var N = [
        y.a,
        h.a,
        g.a
      ], O = function (e) {
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
        }(o, e);
        var t, a, n, r = k(o);
        function o(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), (t = r.call(this, e)).state = {
            timer: e.timeLimit,
            timerChange: !0
          }, t.audio = new Audio(Object(f.o)(N)), t.audio.muted = e.muted, t;
        }
        return t = o, (a = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              this.audio.volume = 0.6, this.audio.play(), this.audio.addEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1);
              var t = this.props.timeLimit;
              this.timerInterval = setInterval(function () {
                if ((t -= 1) <= 0)
                  return clearInterval(e.timerInterval), void e.props.next();
                t <= 5 ? e.setState({ timerChange: !0 }, function () {
                  e.timerTimeout = setTimeout(function () {
                    e.setState({
                      timer: t,
                      timerChange: !1
                    });
                  }, 15);
                }) : e.setState({ timer: t });
              }, 1000);
            }
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.audio.muted = this.props.muted;
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              var e = this;
              clearTimeout(this.timerTimeout), clearInterval(this.timerInterval), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1);
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return s.a.createElement('div', null, s.a.createElement('div', { className: this.props.transitioning ? u.a.invisible : null }, s.a.createElement('div', { className: u.a.upperContainer }, this.props.image ? s.a.createElement('div', { className: u.a.imageContainer }, s.a.createElement('img', {
                src: Object(f.f)(this.props.image),
                alt: 'Missing',
                className: u.a.image,
                draggable: !1
              })) : null, s.a.createElement('div', { className: this.props.image ? u.a.questionContainerImage : u.a.questionContainerNoImage }, s.a.createElement(i.Textfit, {
                className: this.props.image ? u.a.questionTextImage : u.a.questionTextNoImage,
                mode: 'multi',
                min: 1,
                max: Object(f.C)('4vw')
              }, this.props.text)), s.a.createElement('div', { className: u.a.upperRightContainer }, s.a.createElement('div', { className: 0 === this.state.timer ? u.a.timerContainerDone : u.a.timerContainer }, s.a.createElement('div', { className: this.state.timerChange ? u.a.timer : u.a.timerAnimate }, this.state.timer), s.a.createElement('div', { className: 0 === this.state.timer ? u.a.spinnerContainerDone : u.a.spinnerContainer }, s.a.createElement('div', {
                className: u.a.spinner,
                style: { animationIterationCount: this.props.timeLimit }
              }), s.a.createElement('div', {
                className: u.a.filler,
                style: { animationIterationCount: this.props.timeLimit }
              }), s.a.createElement('div', {
                className: u.a.mask,
                style: { animationIterationCount: this.props.timeLimit }
              }))), s.a.createElement('div', { className: u.a.numAnswersText }, ''.concat(this.props.numAnswers, ' / ').concat(this.props.numClients))), s.a.createElement('div', {
                className: u.a.nextButton,
                onClick: function () {
                  return e.props.next();
                },
                role: 'button',
                tabIndex: '0'
              }, s.a.createElement('div', { className: u.a.nextText }, 'Next')))), s.a.createElement('div', { className: u.a.answersHolder }, this.props.answers.map(function (t, a) {
                return s.a.createElement('div', {
                  className: c()(u.a.answerContainer, C({}, u.a.answerTwo, 2 === e.props.answers.length), C({}, u.a.answerThree, 3 === e.props.answers.length && 2 === a)),
                  style: { backgroundColor: m.b.default.answers[a].background },
                  key: t
                }, s.a.createElement(i.Textfit, {
                  className: u.a.answerText,
                  mode: 'multi',
                  min: 1,
                  max: Object(f.C)('2.5vw'),
                  style: { color: m.b.default.answers[a].text }
                }, t));
              })));
            }
          }
        ]) && w(t.prototype, a), n && w(t, n), o;
      }(s.a.Component);
    O.propTypes = {
      next: o.a.func,
      text: o.a.string,
      image: o.a.string,
      answers: o.a.array,
      timeLimit: o.a.number,
      numAnswers: o.a.number,
      numClients: o.a.number,
      transitioning: o.a.bool,
      muted: o.a.bool
    }, t.a = O;
  },
  aunn: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('TN+F');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function y(e) {
      return function (e) {
        if (Array.isArray(e))
          return d(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return d(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return d(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function h(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function g(e) {
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
        var a, n = w(e);
        if (t) {
          var s = w(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return v(this, a);
      };
    }
    function v(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? C(e) : t;
    }
    function C(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function w(e) {
      return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var x = [
        'fas fa-square',
        'fas fa-circle',
        'fas fa-star',
        'fas fa-heart'
      ], k = {
        'fas fa-square': '#47d147',
        'fas fa-circle': '#3385ff',
        'fas fa-star': '#ffff66',
        'fas fa-heart': '#ff3333'
      }, T = function (e) {
        for (var t = Object(f.w)(x); t[0] === e[0] || t[1] === e[1] || t[2] === e[2] || t[3] === e[3];)
          t = Object(f.w)(x);
        return t;
      }, E = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && b(e, t);
        }(o, e);
        var t, a, n, r = g(o);
        function o(e) {
          var t;
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), t = r.call(this, e);
          var a = Object(f.w)(x);
          return t.state = {
            leftWires: a,
            rightWires: T(a),
            wireChosen: ''
          }, t.clickButton = t.clickButton.bind(C(t)), t;
        }
        return t = o, (a = [
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.endTimeout);
            }
          },
          {
            key: 'clickButton',
            value: function (e) {
              var t = this;
              if (!this.state.wireChosen)
                return this.setState({ wireChosen: e });
              if (this.state.wireChosen === e)
                return this.setState({ wireChosen: '' });
              var a = y(this.state.rightWires), n = a.indexOf(this.state.wireChosen), s = a.indexOf(e);
              a[n] = e, a[s] = this.state.wireChosen, this.setState({
                rightWires: a,
                wireChosen: ''
              }, function () {
                t.state.leftWires[0] === t.state.rightWires[0] && t.state.leftWires[1] === t.state.rightWires[1] && t.state.leftWires[2] === t.state.rightWires[2] && t.state.leftWires[3] === t.state.rightWires[3] && (t.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              });
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', {
                className: _.a.container,
                style: { maxWidth: 510 }
              }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(f.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Reorder the right colors to match left (click to swap right colors)'), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.rightWires.map(function (t, a) {
                return s.a.createElement('div', {
                  className: _.a.wireRow,
                  key: a
                }, s.a.createElement('div', {
                  className: l()(_.a.button, _.a.noClick),
                  style: { backgroundColor: k[e.state.leftWires[a]] }
                }, s.a.createElement('div', { className: _.a.buttonInside }, s.a.createElement('i', { className: l()(_.a.icon, e.state.leftWires[a]) }))), s.a.createElement('div', {
                  className: _.a.wire,
                  style: {
                    opacity: e.state.leftWires[a] === t ? 1 : 0,
                    backgroundColor: k[t],
                    outlineColor: k[t]
                  }
                }), s.a.createElement('div', {
                  className: l()(_.a.button, (n = {}, r = _.a.chosen, o = e.state.wireChosen === t, r in n ? Object.defineProperty(n, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : n[r] = o, n)),
                  style: { backgroundColor: k[t] },
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.clickButton(t);
                  },
                  key: t
                }, s.a.createElement('div', { className: _.a.buttonInside }, s.a.createElement('i', { className: l()(_.a.icon, t) }))));
                var n, r, o;
              }))));
            }
          }
        ]) && h(t.prototype, a), n && h(t, n), o;
      }(s.a.Component);
    E.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = E;
  },
  eeJY: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___3NUUc-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:95%;max-width:600px;min-height:190px;border:2px solid rgba(128,255,128,.8);font-family:Inconsolata,Helvetica,monospace,sans-serif;color:#000;background-color:#000}.styles__overlay___3xox6-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__header___3xMeT-camelCase{padding:5px;background-color:rgba(128,255,128,.8);font-size:18px}.styles__desc____w1Vq-camelCase,.styles__header___3xMeT-camelCase{width:100%;box-sizing:border-box;font-weight:700}.styles__desc____w1Vq-camelCase{color:rgba(128,255,128,.8);font-size:26px;text-align:center;padding:10px 5px 5px}.styles__buttonContainer___35tvk-camelCase{flex-flow:row wrap;align-content:center;padding:5px}.styles__button___10CvQ-camelCase,.styles__buttonContainer___35tvk-camelCase{display:flex;justify-content:center;align-items:center}.styles__button___10CvQ-camelCase{background-color:rgba(128,255,128,.8);height:90px;width:90px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;margin:5px;transition:.2s}.styles__button___10CvQ-camelCase:hover{transform:scale(.95)}.styles__buttonInside___28ICg-camelCase{margin:auto;width:80px;height:80px;border:3.5px solid #000;color:#000;font-size:56px;font-weight:700;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.styles__chosen___3dWqX-camelCase{opacity:.6}.styles__chosen___3dWqX-camelCase,.styles__noClick___2e1t3-camelCase{cursor:default}.styles__chosen___3dWqX-camelCase:hover,.styles__noClick___2e1t3-camelCase:hover{transform:scale(1)}.styles__wireRow___Q6_e7-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;position:relative}.styles__wire___3smI5-camelCase{outline:3px solid rgba(128,255,128,.8);border:2px solid #000;background-color:rgba(128,255,128,.8);margin:auto 0;height:20px;width:90%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:-1;transition:.2s}.styles__icon___3GVwX-camelCase{color:#000;font-size:32px;margin:auto}.styles__cardBlook___1holV-camelCase{width:50px;opacity:0;transition:.2s}.styles__flipped___15DpE-camelCase{opacity:1}.styles__temperature___1vRcz-camelCase{border:3.5px solid rgba(128,255,128,.8);color:rgba(128,255,128,.8);font-size:32px;height:90px;width:90px;box-sizing:border-box;margin:0 5px}.styles__longButton___r4EuC-camelCase,.styles__temperature___1vRcz-camelCase{font-weight:700;display:flex;justify-content:center;align-items:center}.styles__longButton___r4EuC-camelCase{outline:3px solid rgba(128,255,128,.8);border:2px solid #000;background-color:rgba(128,255,128,.8);color:#000;padding:5px;margin:10px;font-size:24px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__longButton___r4EuC-camelCase:hover{transform:scale(.95)}.styles__progressHolder___3CeEO-camelCase{display:flex;justify-content:flex-start;align-items:flex-end;width:90%;height:40px;margin:10px auto 5px;box-sizing:border-box;outline:5px solid rgba(128,255,128,.8);border:3.5px solid #000;overflow:hidden}.styles__progress___1xZzb-camelCase{width:100%;height:100%;background-color:rgba(128,255,128,.8);transition:.2s}',
      ''
    ]), t.locals = {
      container: 'styles__container___3NUUc-camelCase',
      overlay: 'styles__overlay___3xox6-camelCase',
      header: 'styles__header___3xMeT-camelCase',
      desc: 'styles__desc____w1Vq-camelCase',
      buttonContainer: 'styles__buttonContainer___35tvk-camelCase',
      button: 'styles__button___10CvQ-camelCase',
      buttonInside: 'styles__buttonInside___28ICg-camelCase',
      chosen: 'styles__chosen___3dWqX-camelCase',
      noClick: 'styles__noClick___2e1t3-camelCase',
      wireRow: 'styles__wireRow___Q6_e7-camelCase',
      wire: 'styles__wire___3smI5-camelCase',
      icon: 'styles__icon___3GVwX-camelCase',
      cardBlook: 'styles__cardBlook___1holV-camelCase',
      flipped: 'styles__flipped___15DpE-camelCase',
      temperature: 'styles__temperature___1vRcz-camelCase',
      longButton: 'styles__longButton___r4EuC-camelCase',
      progressHolder: 'styles__progressHolder___3CeEO-camelCase',
      progress: 'styles__progress___1xZzb-camelCase'
    };
  },
  'iQ+n': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('qhky'), l = a('UpiE'), c = a.n(l), _ = a('I8DF'), u = a.n(_), m = a('5ys2'), f = a.n(m), p = function (e) {
        var t = e.title, a = e.desc;
        return s.a.createElement(i.a, null, s.a.createElement('meta', { charSet: 'utf-8' }), s.a.createElement('title', null, t), s.a.createElement('meta', {
          name: 'description',
          content: a
        }), s.a.createElement('meta', {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        }), s.a.createElement('link', {
          rel: 'apple-touch-icon',
          href: f.a,
          sizes: '180x180'
        }), s.a.createElement('link', {
          rel: 'icon',
          type: 'image/png',
          href: u.a,
          sizes: '32x32'
        }), s.a.createElement('link', {
          rel: 'icon',
          type: 'image/png',
          href: c.a,
          sizes: '16x16'
        }));
      };
    p.propTypes = {
      title: o.a.string,
      desc: o.a.string
    }, t.a = p;
  },
  iq6b: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('78zJ'), _ = a.n(c), u = a('GIcp'), m = a.n(u), f = a('TN+F');
    function p(e) {
      return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function y(e) {
      return function (e) {
        if (Array.isArray(e))
          return d(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return d(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return d(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, n = new Array(t); a < t; a++)
        n[a] = e[a];
      return n;
    }
    function h(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function b(e, t) {
      return (b = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function g(e) {
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
        var a, n = w(e);
        if (t) {
          var s = w(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return v(this, a);
      };
    }
    function v(e, t) {
      return !t || 'object' !== p(t) && 'function' != typeof t ? C(e) : t;
    }
    function C(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function w(e) {
      return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var x = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ], k = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && b(e, t);
        }(o, e);
        var t, a, n, r = g(o);
        function o(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), (t = r.call(this, e)).state = {
            numbers: Object(f.w)(x),
            numbersChosen: []
          }, t.chooseNumber = t.chooseNumber.bind(C(t)), t;
        }
        return t = o, (a = [
          {
            key: 'componentWillUnmount',
            value: function () {
              clearTimeout(this.endTimeout);
            }
          },
          {
            key: 'chooseNumber',
            value: function (e) {
              var t = this;
              if (!this.state.numbersChosen.includes(e) && e === (0 === this.state.numbersChosen.length ? 0 : Math.max.apply(Math, y(this.state.numbersChosen))) + 1) {
                var a = y(this.state.numbersChosen);
                a.push(e), this.setState({ numbersChosen: a }), a.length >= this.state.numbers.length && (this.endTimeout = setTimeout(function () {
                  t.props.onFinish();
                }, 500));
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return s.a.createElement('div', { className: m.a.modal }, s.a.createElement('div', { className: _.a.container }, s.a.createElement('div', { className: _.a.overlay }), s.a.createElement('div', { className: _.a.header }, 'HACKED: '.concat(this.props.name, ' (-').concat(Object(f.v)(this.props.amount), ')')), s.a.createElement('div', { className: _.a.desc }, 'Click the numbers from 1 to 10'), s.a.createElement('div', { className: _.a.buttonContainer }, this.state.numbers.map(function (t) {
                return s.a.createElement('div', {
                  className: l()(_.a.button, (a = {}, n = _.a.chosen, r = e.state.numbersChosen.includes(t), n in a ? Object.defineProperty(a, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  }) : a[n] = r, a)),
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.chooseNumber(t);
                  },
                  key: t
                }, s.a.createElement('div', { className: _.a.buttonInside }, t));
                var a, n, r;
              }))));
            }
          }
        ]) && h(t.prototype, a), n && h(t, n), o;
      }(s.a.Component);
    k.propTypes = {
      onFinish: o.a.func,
      name: o.a.string,
      amount: o.a.number
    }, t.a = k;
  },
  izJc: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('TSYQ'), l = a.n(i), c = a('rcXY'), _ = a.n(c), u = a('DoX5'), m = function (e) {
        var t = e.top, a = e.left, n = e.blook, r = e.msg, o = e.onClick, i = e.night, c = e.hazard;
        return s.a.createElement('div', {
          className: _.a.container,
          style: {
            top: t,
            left: a,
            backgroundColor: i ? '#000' : c[0] ? c[1] : null,
            color: i ? '#fff' : null
          },
          role: 'button',
          tabIndex: 0,
          onClick: o
        }, s.a.createElement('i', { className: l()(_.a.close, 'fas fa-times') }), s.a.createElement(u.a, {
          name: n,
          className: _.a.blook
        }), s.a.createElement('div', { className: _.a.msg }, r));
      };
    m.propTypes = {
      top: o.a.string,
      left: o.a.string,
      blook: o.a.string,
      msg: o.a.string,
      onClick: o.a.func,
      night: o.a.bool,
      hazard: o.a.array
    };
    var f = m, p = function (e) {
        var t = e.ads, a = e.onClick, n = e.night, r = e.hazards;
        return s.a.createElement('div', null, t[0] ? s.a.createElement(f, {
          top: '30%',
          left: '20%',
          onClick: function () {
            return a(0);
          },
          blook: 'Chicken',
          msg: '$0.99 Scrambled Eggs',
          night: n,
          hazard: [
            r[0],
            r[1]
          ]
        }) : null, t[1] ? s.a.createElement(f, {
          top: '60%',
          left: '80%',
          onClick: function () {
            return a(1);
          },
          blook: 'Cow',
          msg: '50% Off Soy Milk',
          night: n,
          hazard: [
            r[0],
            r[2]
          ]
        }) : null, t[2] ? s.a.createElement(f, {
          top: '30%',
          left: '80%',
          onClick: function () {
            return a(2);
          },
          blook: 'Goat',
          msg: 'Red Goat Gives You Wings',
          night: n,
          hazard: [
            r[0],
            r[3]
          ]
        }) : null, t[3] ? s.a.createElement(f, {
          top: '80%',
          left: '50%',
          onClick: function () {
            return a(3);
          },
          blook: 'Duck',
          msg: 'QUACK AH DOODLE DO',
          night: n,
          hazard: [
            r[0],
            r[4]
          ]
        }) : null, t[4] ? s.a.createElement(f, {
          top: '25%',
          left: '40%',
          onClick: function () {
            return a(4);
          },
          blook: 'Baby Penguin',
          msg: '$89 Hanglider Rides',
          night: n,
          hazard: [
            r[0],
            r[5]
          ]
        }) : null, t[5] ? s.a.createElement(f, {
          top: '50%',
          left: '50%',
          onClick: function () {
            return a(5);
          },
          blook: 'Toucan',
          msg: 'Toucan Play At This Game',
          night: n,
          hazard: [
            r[0],
            r[1]
          ]
        }) : null, t[6] ? s.a.createElement(f, {
          top: '60%',
          left: '20%',
          onClick: function () {
            return a(6);
          },
          blook: 'Owl',
          msg: 'Mixtape Dropping Next Week',
          night: n,
          hazard: [
            r[0],
            r[2]
          ]
        }) : null, t[7] ? s.a.createElement(f, {
          top: '80%',
          left: '80%',
          onClick: function () {
            return a(7);
          },
          blook: 'Dragon',
          msg: 'Marty\'s Fireplace SALE',
          night: n,
          hazard: [
            r[0],
            r[3]
          ]
        }) : null, t[8] ? s.a.createElement(f, {
          top: '40%',
          left: '40%',
          onClick: function () {
            return a(8);
          },
          blook: 'Rabbit',
          msg: '$799 - Max Hops Series 9',
          night: n,
          hazard: [
            r[0],
            r[4]
          ]
        }) : null, t[9] ? s.a.createElement(f, {
          top: '80%',
          left: '20%',
          onClick: function () {
            return a(9);
          },
          blook: 'Witch',
          msg: 'Spells & Potions Galore',
          night: n,
          hazard: [
            r[0],
            r[5]
          ]
        }) : null);
      };
    p.propTypes = {
      ads: o.a.array,
      onClick: o.a.func,
      night: o.a.bool,
      hazards: o.a.array
    };
    t.a = p;
  },
  jZbd: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__upperContainer___3fsIf-camelCase{width:100vw;height:calc(70vh - 65px);position:absolute;top:65px;left:0;z-index:1;overflow:hidden}.styles__mediaButton___NuWXn-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:80%;left:8.75vw;width:17.5vw;height:12.5%;display:flex;flex-direction:row;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__mediaButton___NuWXn-camelCase:hover{transform:scale(1.05)}.styles__mediaIcon___1_KgD-camelCase{color:#3a3a3a;font-size:5vh}.styles__mediaText___gFHmS-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif;padding-left:1vw;font-size:3.7vh}.styles__questionContainerImage___Z_7dr-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:7.5%;left:2.5vw;width:30vw;height:67.5%;overflow:hidden;display:flex;align-content:center;justify-content:center}.styles__image___27HlW-camelCase{margin:auto;width:90%;height:90%;-o-object-fit:contain;object-fit:contain;border-radius:10px}.styles__questionContainer___2UQGA-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:16.25%;left:2.5vw;width:30vw;height:67.5%;overflow:hidden}.styles__questionText___1Dpxl-camelCase{color:#3a3a3a;position:relative;padding:2vh 2vw;width:26vw;height:calc(46.5vh - 65px);font-family:Nunito,sans-serif;text-align:center;overflow:hidden;display:flex;justify-content:center;align-content:center;flex-direction:column;float:left;word-wrap:break-word;z-index:2}.styles__centerContainer___21JKl-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:12.5%;left:35vw;height:75%;width:45vw}.styles__upperCenter___1BN5J-camelCase{width:100%;height:calc(10.5vh - 9.75px);position:absolute;top:0;left:0}.styles__upperCenterText___135ej-camelCase{width:100%;text-align:center;font-family:Titan One,sans-serif;font-size:6.5vh;color:#3a3a3a;line-height:calc(9.1875vh - 8.53125px);padding-top:calc(1.3125vh - 1.21875px)}.styles__lowerCenter___24JJ0-camelCase{width:100%;height:calc(42vh - 39px);position:absolute;top:calc(10.5vh - 9.75px);left:0}.styles__percentageTextFaded___1zUxx-camelCase{opacity:0}.styles__percentageText___16mB5-camelCase,.styles__percentageTextFaded___1zUxx-camelCase{color:#3a3a3a;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Titan One,sans-serif;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:2.2vw}.styles__percentageText___16mB5-camelCase{opacity:1;transition:opacity .3s cubic-bezier(.39,.5,.15,1.36)}.styles__amountText___1vfDp-camelCase{color:#fff;position:relative;text-align:center;top:50%;left:50%;font-family:Titan One,sans-serif;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__boxOneThreeFour___11fot-camelCase{top:calc(3.9375vh - 3.65625px)}.styles__boxOneThreeFour___11fot-camelCase,.styles__boxOneTwo___bKXng-camelCase{opacity:1;font-size:6vh;width:calc(14.4375vh - 13.40625px);height:calc(14.4375vh - 13.40625px);background-color:#ffa31e;border-radius:5%;position:absolute;left:7.5%;overflow:hidden;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__boxOneTwo___bKXng-camelCase{top:calc(13.78125vh - 12.79688px)}.styles__boxTwoFour___EoFsF-camelCase{top:calc(3.9375vh - 3.65625px)}.styles__boxTwoFour___EoFsF-camelCase,.styles__boxTwoTwoThree___3vBZK-camelCase{opacity:1;font-size:6vh;width:calc(14.4375vh - 13.40625px);height:calc(14.4375vh - 13.40625px);background-color:#3378ff;border-radius:5%;position:absolute;left:calc(92.5% - 14.4375vh - 13.40625px);overflow:hidden;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__boxTwoTwoThree___3vBZK-camelCase{top:calc(13.78125vh - 12.79688px)}.styles__boxThree___3fUt7-camelCase{background-color:#00cf77;left:7.5%}.styles__boxFour___2RrB6-camelCase,.styles__boxThree___3fUt7-camelCase{opacity:1;font-size:6vh;width:calc(14.4375vh - 13.40625px);height:calc(14.4375vh - 13.40625px);border-radius:5%;position:absolute;top:calc(23.625vh - 21.9375px);overflow:hidden;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__boxFour___2RrB6-camelCase{background-color:#ff462b;left:calc(92.5% - 14.4375vh - 13.40625px)}.styles__pauseButton___1_7hl-camelCase{width:5vw;height:5vw;background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:calc(12.5% + 7.5vw + 10vh + (52.5vh - 48.75px - 12.5vw - 10vh)/2);left:87.5vw;cursor:pointer;font-size:2.75vw;text-align:center;overflow:hidden;outline:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__pauseButton___1_7hl-camelCase:hover{transform:scale(1.05)}.styles__pauseIcon___3ooOY-camelCase{color:#3a3a3a;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__rightTopContainer___GB1ut-camelCase{background-color:#fff;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:12.5%;left:82.5vw;height:calc(7.5vw + 10vh);width:15vw}.styles__timerContainer___3juCm-camelCase{background:#75cedd}.styles__timerContainer___3juCm-camelCase,.styles__timerContainerDone___1Uu-6-camelCase{width:7.5vw;height:7.5vw;position:relative;left:3.75vw;top:5vh;border-radius:10px;overflow:hidden}.styles__timerContainerDone___1Uu-6-camelCase{background:#009bb6}.styles__timer___3neuC-camelCase,.styles__timerAnimate___2j0nO-camelCase{font-size:3.5vw;color:#fff;text-align:center;position:absolute;height:100%;width:100%;line-height:7.5vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;z-index:4}.styles__timerAnimate___2j0nO-camelCase{-webkit-animation:styles__timer___3neuC-camelCase 1s linear;animation:styles__timer___3neuC-camelCase 1s linear}@-webkit-keyframes styles__timer___3neuC-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}@keyframes styles__timer___3neuC-camelCase{0%{transform:scale(1.4)}to{transform:scale(1)}}.styles__spinnerContainer___1U4vB-camelCase,.styles__spinnerContainerDone___2N7pL-camelCase{width:175%;height:175%;position:absolute;left:-37.5%;top:-37.5%;background:inherit}.styles__spinnerContainerDone___2N7pL-camelCase{opacity:0}.styles__spinner___13qTZ-camelCase,.styles__spinnerAnimate___36of9-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:175px 0 0 175px;z-index:2}.styles__spinnerAnimate___36of9-camelCase{-webkit-animation:styles__rota___3M55U-camelCase 1s linear 10;animation:styles__rota___3M55U-camelCase 1s linear 10}@-webkit-keyframes styles__rota___3M55U-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes styles__rota___3M55U-camelCase{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.styles__filler___2dq4Y-camelCase,.styles__fillerAnimate___2JCS0-camelCase{width:50%;height:100%;transform-origin:100% 50%;position:absolute;background:#009bb6;border-radius:0 175px 175px 0;z-index:1;left:50%;opacity:0}.styles__fillerAnimate___2JCS0-camelCase{-webkit-animation:styles__fill___IA97R-camelCase 1s steps(1) 10;animation:styles__fill___IA97R-camelCase 1s steps(1) 10}@-webkit-keyframes styles__fill___IA97R-camelCase{0%{opacity:0}50%,to{opacity:1}}@keyframes styles__fill___IA97R-camelCase{0%{opacity:0}50%,to{opacity:1}}.styles__mask___3iRlP-camelCase,.styles__maskAnimate___1Fnu0-camelCase{width:50%;height:100%;position:absolute;z-index:3;opacity:1;background:inherit}.styles__maskAnimate___1Fnu0-camelCase{-webkit-animation:styles__mask___3iRlP-camelCase 1s steps(1) 10;animation:styles__mask___3iRlP-camelCase 1s steps(1) 10}@-webkit-keyframes styles__mask___3iRlP-camelCase{0%{opacity:1}50%,to{opacity:0}}@keyframes styles__mask___3iRlP-camelCase{0%{opacity:1}50%,to{opacity:0}}.styles__answersHolder___1r987-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:space-evenly;position:absolute;top:70vh;left:0;height:calc(30vh - 5px);width:calc(100% - 10px);padding:0 5px 5px}.styles__answerContainer___3q_IT-camelCase{margin:auto;width:calc(50% - 6px);height:calc(50% - 6px - .9vh);border-radius:5px;overflow:hidden;outline:none;display:flex;justify-content:center;align-items:center;padding-bottom:.9vh;box-shadow:inset 0 -.9vh 0 0 rgba(0,0,0,.2);transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__answerTwo___PC3f3-camelCase{height:calc(100% - 6px - .9vh)}.styles__answerTwo___PC3f3-camelCase:focus,.styles__answerTwo___PC3f3-camelCase:hover{height:calc(100% - 6px)}.styles__answerThree___3Qycy-camelCase{width:calc(100% - 6px)}.styles__answerText___1rkTg-camelCase{color:#fff;height:80%;width:80%;font-family:Nunito,sans-serif;text-align:center;overflow:hidden;display:flex;justify-content:center;align-items:center;float:left;word-wrap:break-word}.styles__selectedText___oiyGt-camelCase{width:60%;margin-left:5%}.styles__selectedIcon___1xXXg-camelCase{color:#fff;font-size:2.5vw;width:20%;display:flex;justify-content:center;align-items:center}.styles__faded___2dBNi-camelCase{opacity:.6}.styles__transition___3c-u1-camelCase{opacity:1;-webkit-animation:styles__transition___3c-u1-camelCase .25s linear;animation:styles__transition___3c-u1-camelCase .25s linear}@-webkit-keyframes styles__transition___3c-u1-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__transition___3c-u1-camelCase{0%{opacity:0}to{opacity:1}}.styles__invisible___3zC2s-camelCase{opacity:0;transition:opacity .3s linear}',
      ''
    ]), t.locals = {
      upperContainer: 'styles__upperContainer___3fsIf-camelCase',
      mediaButton: 'styles__mediaButton___NuWXn-camelCase',
      mediaIcon: 'styles__mediaIcon___1_KgD-camelCase',
      mediaText: 'styles__mediaText___gFHmS-camelCase',
      questionContainerImage: 'styles__questionContainerImage___Z_7dr-camelCase',
      image: 'styles__image___27HlW-camelCase',
      questionContainer: 'styles__questionContainer___2UQGA-camelCase',
      questionText: 'styles__questionText___1Dpxl-camelCase',
      centerContainer: 'styles__centerContainer___21JKl-camelCase',
      upperCenter: 'styles__upperCenter___1BN5J-camelCase',
      upperCenterText: 'styles__upperCenterText___135ej-camelCase',
      lowerCenter: 'styles__lowerCenter___24JJ0-camelCase',
      percentageTextFaded: 'styles__percentageTextFaded___1zUxx-camelCase',
      percentageText: 'styles__percentageText___16mB5-camelCase',
      amountText: 'styles__amountText___1vfDp-camelCase',
      boxOneThreeFour: 'styles__boxOneThreeFour___11fot-camelCase',
      boxOneTwo: 'styles__boxOneTwo___bKXng-camelCase',
      boxTwoFour: 'styles__boxTwoFour___EoFsF-camelCase',
      boxTwoTwoThree: 'styles__boxTwoTwoThree___3vBZK-camelCase',
      boxThree: 'styles__boxThree___3fUt7-camelCase',
      boxFour: 'styles__boxFour___2RrB6-camelCase',
      pauseButton: 'styles__pauseButton___1_7hl-camelCase',
      pauseIcon: 'styles__pauseIcon___3ooOY-camelCase',
      rightTopContainer: 'styles__rightTopContainer___GB1ut-camelCase',
      timerContainer: 'styles__timerContainer___3juCm-camelCase',
      timerContainerDone: 'styles__timerContainerDone___1Uu-6-camelCase',
      timer: 'styles__timer___3neuC-camelCase',
      timerAnimate: 'styles__timerAnimate___2j0nO-camelCase',
      spinnerContainer: 'styles__spinnerContainer___1U4vB-camelCase',
      spinnerContainerDone: 'styles__spinnerContainerDone___2N7pL-camelCase',
      spinner: 'styles__spinner___13qTZ-camelCase',
      spinnerAnimate: 'styles__spinnerAnimate___36of9-camelCase',
      rota: 'styles__rota___3M55U-camelCase',
      filler: 'styles__filler___2dq4Y-camelCase',
      fillerAnimate: 'styles__fillerAnimate___2JCS0-camelCase',
      fill: 'styles__fill___IA97R-camelCase',
      mask: 'styles__mask___3iRlP-camelCase',
      maskAnimate: 'styles__maskAnimate___1Fnu0-camelCase',
      answersHolder: 'styles__answersHolder___1r987-camelCase',
      answerContainer: 'styles__answerContainer___3q_IT-camelCase',
      answerTwo: 'styles__answerTwo___PC3f3-camelCase',
      answerThree: 'styles__answerThree___3Qycy-camelCase',
      answerText: 'styles__answerText___1rkTg-camelCase',
      selectedText: 'styles__selectedText___oiyGt-camelCase',
      selectedIcon: 'styles__selectedIcon___1xXXg-camelCase',
      faded: 'styles__faded___2dBNi-camelCase',
      transition: 'styles__transition___3c-u1-camelCase',
      invisible: 'styles__invisible___3zC2s-camelCase'
    };
  },
  nDzf: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('4HzQ'), l = a('ys5T'), c = a.n(l), _ = a('TN+F');
    function u(e) {
      return (u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function m(e, t) {
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
    function p(e) {
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
        var a, n = d(e);
        if (t) {
          var s = d(this).constructor;
          a = Reflect.construct(n, arguments, s);
        } else
          a = n.apply(this, arguments);
        return y(this, a);
      };
    }
    function y(e, t) {
      return !t || 'object' !== u(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function d(e) {
      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var h = function (e) {
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
      }(o, e);
      var t, a, n, r = p(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          timer: 3,
          loops: 3,
          timerChange: !1,
          phrase: t.props.normal ? 'Get Ready' : Object(_.o)([
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Get Ready',
            'Getting Ready...',
            'Getting Ready...',
            'Getting Ready...',
            'Getting Ready...',
            'Getting Ready...',
            'Getting Ready...',
            'Getting Ready...',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'Ready Up',
            'On Your Mark',
            'On Your Mark',
            'On Your Mark',
            'On Your Mark',
            'On Your Mark',
            'On Your Mark',
            'Get Set',
            'Get Set',
            'Get Set',
            'Get Set',
            'Get Set',
            'Get Set',
            'Focus',
            'Focus',
            'Focus',
            'Ready Your Cannons',
            'Ready Your Cannons',
            'Initializing...',
            'Initializing...',
            'Generating Question...',
            'Generating Question...',
            'Baking a Cake...',
            'Searching for Question...',
            'Looking for Lost Question...',
            'Losing the Clicker...',
            'Writing the Question...',
            'Loading...',
            'Loading...',
            'Loading...',
            'Loading...',
            'Loading...',
            'Waiting for You...',
            'Counting Down From 3...',
            'Entering Warp Drive...',
            'Dusting Off Question...',
            'Dusting Off Question...',
            'Dusting Off Question...',
            'Prepare for Battle',
            'Start Your Engines',
            'Start Your Engines',
            'Anyone Reading This?',
            'Waiting for Question...',
            'Ready Your Pointer',
            'Ready Your Mouse',
            'Activate Focus Mode',
            'Ordering Pizza...',
            'Taking a Nap...',
            'Brushing Off Cobwebs...',
            'Typing Question...',
            'Prepare for Victory',
            'Get Your Game Face On',
            'Time to Pop Off',
            'Get Ready to Win',
            'Learning Spanish...',
            'Learning French...',
            'Learning Japanese...',
            'Learning German...',
            'Learning Sign Language...',
            'Learning Chinese...',
            'Studying Blooks...',
            'Hacking Into The System...',
            'Looking For My Keys...',
            'Writing an Essay...',
            'Taking the Derivative...',
            'Finding the Integral...',
            'Reading a Book...',
            'Waiting in Line...',
            'Encrypting the Question...',
            'Reacting Chemicals...',
            'Waiting for the Weekend...',
            'Coding...',
            'Playing Fortnite...',
            'Collecting Prizes...',
            'Checking Stats...',
            'Eating Pi...',
            'Reading the Textbook...',
            'Waiting for Brian...',
            'Ready Player One',
            'Loading Questions in 2021 LUL',
            'Is this thing on...?',
            'Spinning to Win...',
            'Activating Cheat Codes...',
            'Pressing Random Buttons...',
            'Googling Answers...',
            'Doing a Barrel Roll...',
            'Making Toast...',
            'Maybe Loading...',
            'Probably Not Loading...',
            'Mining Tokens...',
            'Not Crashing...'
          ])
        }, t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this, t = 3;
            this.setState({
              loops: t,
              timer: t
            }), this.timerInterval = setInterval(function () {
              if ((t -= 1) <= 0)
                return clearInterval(e.timerInterval), void e.props.done();
              e.setState({ timerChange: !0 }, function () {
                e.timerTimeout = setTimeout(function () {
                  e.setState({
                    timer: t,
                    timerChange: !1
                  });
                }, 15);
              });
            }, 1000);
          }
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            clearTimeout(this.timerTimeout), clearInterval(this.timerInterval);
          }
        },
        {
          key: 'render',
          value: function () {
            return s.a.createElement('div', null, s.a.createElement(i.Textfit, {
              className: c.a.heading,
              mode: 'multi',
              forceSingleModeWidth: !1,
              min: 1,
              max: Object(_.C)('10vw')
            }, this.state.phrase), s.a.createElement('div', { className: c.a.timerHolder }, s.a.createElement('div', { className: 0 === this.state.timer ? c.a.timerContainerDone : c.a.timerContainer }, s.a.createElement('div', { className: this.state.timerChange ? c.a.timer : c.a.timerAnimate }, this.state.timer > 0 ? this.state.timer : ''), s.a.createElement('div', { className: 0 === this.state.timer ? c.a.spinnerContainerDone : c.a.spinnerContainer }, s.a.createElement('div', {
              className: c.a.spinner,
              style: { animationIterationCount: this.state.loops }
            }), s.a.createElement('div', {
              className: c.a.filler,
              style: { animationIterationCount: this.state.loops }
            }), s.a.createElement('div', {
              className: c.a.mask,
              style: { animationIterationCount: this.state.loops }
            })))));
          }
        }
      ]) && m(t.prototype, a), n && m(t, n), o;
    }(s.a.Component);
    h.propTypes = {
      normal: o.a.bool,
      done: o.a.func.isRequired
    };
    t.a = h;
  },
  o9Ab: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('DoX5'), l = a('Uw72'), c = a.n(l), _ = function (e) {
        var t = e.name, a = e.blook;
        return s.a.createElement('div', { className: c.a.background }, s.a.createElement('div', { className: c.a.text }, ''.concat(t, '\'s'), s.a.createElement('br', null), 'Dance Party!!!'), s.a.createElement('div', { className: c.a.dancing }, s.a.createElement(i.a, {
          name: a,
          className: c.a.blook
        }), s.a.createElement('div', { className: c.a.shadow })));
      };
    _.propTypes = {
      name: o.a.string,
      blook: o.a.string
    }, t.a = _;
  },
  rcXY: function (e, t, a) {
    var n = a('EA5F');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  tOxy: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), s = a.n(n), r = a('17x9'), o = a.n(r), i = a('3rHL'), l = a.n(i), c = function (e) {
        var t = e.night;
        return s.a.createElement('div', {
          className: l.a.slow,
          style: {
            color: t ? '#fff' : null,
            textShadow: t ? '2px 2px 8px #fff' : null
          }
        }, 'Slow Mo');
      };
    c.propTypes = { night: o.a.bool }, t.a = c;
  },
  u4jG: function (e, t, a) {
    var n = a('vaJn');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  urPT: function (e, t, a) {
    var n = a('jZbd');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  vaJn: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___1i_NC-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:7px;border-radius:7px;text-align:center}.styles__container___1i_NC-camelCase,.styles__containerInside___1GJ5R-camelCase{background-color:#d52423;box-sizing:border-box}.styles__containerInside___1GJ5R-camelCase{border:5px solid #ffd329;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media only screen and (max-width:600px){.styles__container___1i_NC-camelCase{width:310px}}.styles__text___6aKbc-camelCase{font-family:Nunito,sans-serif;font-size:32px;line-height:35px;font-weight:700;margin:25px 30px 15px;color:#fff}.styles__blook___1HgWU-camelCase{height:34.5px;width:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 9px -5px 0;display:inline-block}.styles__button___1yx_c-camelCase{border-radius:6px;border:3px solid #fff;background-color:transparent;width:100px;height:45px;padding:0 15px;color:#fff;font-size:23px;text-align:center;line-height:45px;font-family:Nunito,sans-serif;outline:none;cursor:pointer;margin:20px auto;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1yx_c-camelCase:focus,.styles__button___1yx_c-camelCase:hover{font-weight:700}',
      ''
    ]), t.locals = {
      container: 'styles__container___1i_NC-camelCase',
      containerInside: 'styles__containerInside___1GJ5R-camelCase',
      text: 'styles__text___6aKbc-camelCase',
      blook: 'styles__blook___1HgWU-camelCase',
      button: 'styles__button___1yx_c-camelCase'
    };
  },
  xHZb: function (e, t, a) {
    var n = a('JsXP');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  },
  ys5T: function (e, t, a) {
    var n = a('5wuu');
    'string' == typeof n && (n = [[
        e.i,
        n,
        ''
      ]]);
    var s = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(n, s);
    n.locals && (e.exports = n.locals);
  }
}]);