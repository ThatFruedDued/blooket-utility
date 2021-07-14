(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{
  '0M6Z': function (e, t, a) {
    'use strict';
    var n = a('q1tI'), r = a.n(n), o = a('mf+E'), s = a('2iEm'), i = a('b6Qr'), c = a('17x9'), l = a.n(c), u = a('vDqi'), p = a.n(u), m = a('v4r+'), d = a('TSYQ'), f = a.n(d), _ = a('of2q'), h = a('DMVt'), y = a('GIcp'), b = a.n(y), g = a('Fs+q'), x = a.n(g), v = a('iQ+n'), w = a('dJL0'), C = a('SCqF'), E = a('TN+F'), N = a('anyA'), k = a('5ys2'), P = a.n(k);
    function S(e) {
      return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function j(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (n, r) {
          var o = e.apply(t, a);
          function s(e) {
            O(o, n, r, s, i, 'next', e);
          }
          function i(e) {
            O(o, n, r, s, i, 'throw', e);
          }
          s(void 0);
        });
      };
    }
    function R(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
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
        var a, n = z(e);
        if (t) {
          var r = z(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return B(this, a);
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
    function z(e) {
      return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && T(e, t);
      }(u, e);
      var t, a, n, c, l = I(u);
      function u(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, u), (t = l.call(this, e)).state = {
          plan: {},
          groupName: '',
          pdf: null,
          loading: !1,
          hasGroup: !1
        }, t.stripeId = '', t.onCheckout = t.onCheckout.bind(D(t)), t;
      }
      return t = u, (a = [
        {
          key: 'componentDidMount',
          value: (c = j(regeneratorRuntime.mark(function e() {
            var t, a, n, r, o, s = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  if (t = Object(E.i)('id'), -1 !== (a = _.b.map(function (e) {
                      return e.id;
                    }).indexOf(t))) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt('return');
                case 4:
                  return n = _.b[a], e.next = 7, this.props.user.getData();
                case 7:
                  if (r = e.sent) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 10:
                  this.stripeId = r.stripe, o = decodeURIComponent(Object(E.i)('n')), this.setState({
                    plan: n,
                    groupName: o
                  }), p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/groups/quote', {
                    quote: {
                      logo: P.a,
                      from: 'Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709',
                      to: o,
                      header: 'QUOTE',
                      items: [{
                          name: 'Blooket Plus: '.concat(n.name, ' Plan'),
                          quantity: 1,
                          unit_cost: n.price,
                          description: ''.concat(n.numPlans, ' One-Year Plus Plans')
                        }],
                      notes: 'Thanks so much for supporting us!\nIf you have any questions, please email contact-us@blooket.com'
                    },
                    stripeId: this.stripeId
                  }).then(function (e) {
                    s.setState({
                      pdf: e.data.pdf,
                      hasGroup: e.data.hasGroup
                    });
                  }).catch(function (e) {
                    return console.error(e);
                  });
                case 15:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          })), function () {
            return c.apply(this, arguments);
          })
        },
        {
          key: 'onCheckout',
          value: function () {
            var e = this;
            this.state.plan && this.state.plan.id && (this.setState({ loading: !0 }), p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/groups/stripe/checkout', {
              planId: this.state.plan.id,
              stripeId: this.stripeId,
              groupName: this.state.groupName
            }).then(function () {
              var e = j(regeneratorRuntime.mark(function e(t) {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, Object(m.a)(h.a);
                    case 2:
                      e.sent.redirectToCheckout({ sessionId: t.data }).then(function (e) {
                        e.error && console.error(e.error);
                      });
                    case 4:
                    case 'end':
                      return e.stop();
                    }
                }, e);
              }));
              return function (t) {
                return e.apply(this, arguments);
              };
            }()).catch(function (t) {
              e.setState({ loading: !1 }), console.error(t);
            }));
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return -1 === _.b.map(function (e) {
              return e.id;
            }).indexOf(Object(E.i)('id')) && (this.redirect = !0), this.redirect ? r.a.createElement(o.a, { to: '/upgrade/group/price' }) : r.a.createElement('div', { className: i.isMobile ? b.a.mBody : b.a.body }, r.a.createElement(v.a, {
              title: 'Group Upgrade | Blooket',
              desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
            }), r.a.createElement(w.a, null), r.a.createElement('div', { className: b.a.slantBackground }), r.a.createElement('div', { className: f()(b.a.regularBody, x.a.bodyContainer) }, this.state.pdf ? r.a.createElement('object', {
              data: 'data:application/pdf;base64,'.concat(this.state.pdf),
              title: 'Blooket Quote',
              className: x.a.quote
            }, r.a.createElement('a', {
              className: x.a.downloadButton,
              download: 'BlooketQuote.pdf',
              href: 'data:application/pdf;base64,'.concat(this.state.pdf)
            }, 'Download PDF')) : null, r.a.createElement('div', { className: x.a.leftColumn }, r.a.createElement('div', { className: x.a.textContainer }, r.a.createElement('div', { className: x.a.textBigHeader }, this.state.groupName), r.a.createElement('div', { className: x.a.bigText }, 'Blooket Plus: '.concat(this.state.plan.name, ' Plan')), ''.concat(this.state.plan.numPlans, ' One-Year Plus Plans')), r.a.createElement('div', { className: x.a.textContainer }, r.a.createElement('div', { className: x.a.textHeader }, 'Pay With Purchase Order'), 'Upload your PO and we\'ll get your plans started immediately!', r.a.createElement(s.a, {
              className: x.a.button,
              role: 'button',
              tabIndex: 0,
              to: '/upgrade/group/po?id='.concat(this.state.plan.id, '&n=').concat(encodeURIComponent(this.state.groupName))
            }, 'Pay With Purchase Order')), r.a.createElement('div', { className: x.a.textContainer }, r.a.createElement('div', { className: x.a.textHeader }, 'Pay With Credit Card'), 'Use a credit card to pay and get things done quickly!', r.a.createElement('div', {
              className: x.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: this.onCheckout
            }, 'Pay With Credit Card')), r.a.createElement('div', { className: x.a.textContainer }, r.a.createElement('div', { className: x.a.textHeader }, 'Have Questions or Need to Request our W-9?'), r.a.createElement('div', { className: x.a.bigText }, 'Send us an email at:\xA0', r.a.createElement('a', {
              className: x.a.linkText,
              href: 'mailto:contact-us@blooket.com'
            }, 'contact-us@blooket.com'))))), this.state.loading ? r.a.createElement(C.a, {
              text: 'Loading...',
              loading: !0
            }) : this.state.hasGroup ? r.a.createElement(C.a, {
              text: 'You already have a group plan.',
              buttonOne: {
                text: 'Go to Group',
                click: function () {
                  return e.props.history.push('/dashboard?p=Group');
                },
                color: 'blue'
              }
            }) : null);
          }
        }
      ]) && R(t.prototype, a), n && R(t, n), u;
    }(r.a.Component);
    F.propTypes = {
      history: l.a.object,
      user: l.a.object
    }, t.a = Object(N.c)(F);
  },
  '59d5': function (e, t, a) {
    var n = a('SenU');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  '5wO3': function (e, t, a) {
    var n = a('lQV5');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  '6u6T': function (e, t, a) {
    var n = a('wsOr');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  B8VN: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___vucoJ-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;box-sizing:border-box;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;padding:20px 10px;color:#3a3a3a}.styles__header___2KIkE-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:5px}.styles__subheader___tq2Hv-camelCase{font-size:28px;line-height:30px;margin-bottom:30px}.styles__button___1bFeK-camelCase,.styles__subheader___tq2Hv-camelCase{font-family:Nunito,sans-serif}.styles__button___1bFeK-camelCase{border-radius:6px;border:3px solid #3a3a3a;width:146px;height:44px;margin:0 auto;color:#3a3a3a;font-size:23px;text-align:center;display:flex;justify-content:center;align-items:center;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-decoration:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__button___1bFeK-camelCase:hover{font-weight:700;border-color:#0bc2cf;color:#0bc2cf}@media only screen and (max-width:600px){.styles__container___vucoJ-camelCase{max-width:320px}}',
      ''
    ]), t.locals = {
      container: 'styles__container___vucoJ-camelCase',
      header: 'styles__header___2KIkE-camelCase',
      subheader: 'styles__subheader___tq2Hv-camelCase',
      button: 'styles__button___1bFeK-camelCase'
    };
  },
  DMVt: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return j;
    });
    var n = a('q1tI'), r = a.n(n), o = a('b6Qr'), s = a('mLw1'), i = a('17x9'), c = a.n(i), l = a('vDqi'), u = a.n(l), p = a('v4r+'), m = a('iQ+n'), d = a('dJL0'), f = a('SCqF'), _ = a('anyA'), h = a('GIcp'), y = a.n(h), b = a('XDR8'), g = a.n(b);
    function x(e) {
      return (x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function v(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function w(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (n, r) {
          var o = e.apply(t, a);
          function s(e) {
            v(o, n, r, s, i, 'next', e);
          }
          function i(e) {
            v(o, n, r, s, i, 'throw', e);
          }
          s(void 0);
        });
      };
    }
    function C(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function E(e, t) {
      return (E = Object.setPrototypeOf || function (e, t) {
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
        var a, n = S(e);
        if (t) {
          var r = S(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return k(this, a);
      };
    }
    function k(e, t) {
      return !t || 'object' !== x(t) && 'function' != typeof t ? P(e) : t;
    }
    function P(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function S(e) {
      return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var O = {
        plus: {
          item: 'Plus',
          desc: 'Billed Yearly',
          price: 35.88,
          id: 'plan_FbbkTL7b40AUXS'
        },
        'plus-flex': {
          item: 'Plus Flex',
          desc: 'Billed Monthy',
          price: 4.99,
          id: 'plan_FbblVAXHOLJone'
        }
      }, j = 'pk_live_sTAha4EGyVFNR6iM0eGQ2HJN00g683d3lP', R = function (e) {
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
        }(l, e);
        var t, a, n, i, c = N(l);
        function l(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, l), (t = c.call(this, e)).state = {
            item: '',
            desc: '',
            price: 0,
            id: '',
            stripeId: '',
            loading: !1,
            end: ''
          }, t.onCheckout = t.onCheckout.bind(P(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (i = w(regeneratorRuntime.mark(function e() {
              var t, a;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return (t = O[this.props.match.params.plan]).item && this.setState({
                      item: t.item,
                      desc: t.desc,
                      price: t.price,
                      id: t.id
                    }), e.next = 4, this.props.user.getData();
                  case 4:
                    (a = e.sent) ? this.setState({ stripeId: a.stripe }) : this.props.history.push('/login');
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
            key: 'onCheckout',
            value: function () {
              var e = this;
              this.state.stripeId && (this.setState({ loading: !0 }), u.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, u.a.post('/api/users/stripe/checkout', {
                planId: this.state.id,
                stripeId: this.state.stripeId
              }).then(function () {
                var e = w(regeneratorRuntime.mark(function e(t) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, Object(p.a)(j);
                      case 2:
                        e.sent.redirectToCheckout({ sessionId: t.data }).then(function (e) {
                          e.error && console.error(e.error);
                        });
                      case 4:
                      case 'end':
                        return e.stop();
                      }
                  }, e);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }()).catch(function (t) {
                e.setState({ loading: !1 }), console.error(t);
              }));
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return [
                'plus',
                'plus-flex'
              ].includes(this.props.match.params.plan) ? r.a.createElement('div', { className: o.isMobile ? y.a.mBody : y.a.body }, r.a.createElement(m.a, {
                title: 'Upgrade | Blooket',
                desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
              }), r.a.createElement(d.a, null), r.a.createElement('div', { className: y.a.slantBackground }), r.a.createElement('div', { className: y.a.regularBody }, r.a.createElement('div', { className: g.a.centerWrapper }, r.a.createElement('div', { style: { height: 50 } }), r.a.createElement('div', { className: g.a.payContainer }, r.a.createElement('div', { className: g.a.payHeader }, 'Checkout'), r.a.createElement('div', { className: g.a.paySpacer }), r.a.createElement('div', { className: g.a.payMessage }, 'Before you checkout, we need to take a moment and sincerely say thank you. Blooket was built from\n                  scratch as a tool to make education better for students and teachers. Your support helps us keep\n                  the site running and allows us to provide amazing content to educators around the world. We know you\'ll\n                  love Blooket Plus, and if there is anything you ever need please contact us. Thank you\n                  for teaching and shaping the future to be better than ourselves, thank you for making our community the best\n                  in education, and thank you for helping us change the world.', r.a.createElement('br', null), r.a.createElement('br', null), r.a.createElement('div', { style: { textAlign: 'right' } }, '- Ben & The Blooket Team')), r.a.createElement('div', { className: g.a.paySpacer }), r.a.createElement('div', { className: g.a.payRow }, r.a.createElement('div', { className: g.a.payColumn }, r.a.createElement('div', { className: g.a.payItem }, 'Blooket '.concat(this.state.item)), r.a.createElement('div', { className: g.a.payDesc }, this.state.desc)), r.a.createElement('div', { className: g.a.payPrice }, '$'.concat(this.state.price))), r.a.createElement('div', { className: g.a.paySpacer }), r.a.createElement('div', {
                className: g.a.payButton,
                role: 'button',
                tabIndex: 0,
                onClick: this.onCheckout
              }, 'Checkout Now')), r.a.createElement('div', { style: { height: 50 } }))), this.state.loading || this.state.end ? r.a.createElement(f.a, {
                text: this.state.end || 'Processing...',
                loading: this.state.loading,
                buttonOne: {
                  text: 'Success!' === this.state.end ? 'Thanks!' : 'Refresh',
                  click: function () {
                    return 'Success!' === e.state.end ? e.props.history.push('/dashboard') : window.location.reload();
                  },
                  color: 'blue'
                }
              }) : null) : r.a.createElement(s.a, { to: '/upgrade' });
            }
          }
        ]) && C(t.prototype, a), n && C(t, n), l;
      }(r.a.Component);
    R.propTypes = {
      match: c.a.object,
      history: c.a.object,
      user: c.a.object
    }, t.b = Object(_.c)(R);
  },
  FnVZ: function (e, t, a) {
    'use strict';
    (function (e) {
      var n = a('q1tI'), r = a.n(n), o = a('mf+E'), s = a('b6Qr'), i = a('17x9'), c = a.n(i), l = a('vDqi'), u = a.n(l), p = a('TSYQ'), m = a.n(p), d = a('wd/R'), f = a.n(d), _ = a('yzbm'), h = a('WjD0'), y = a.n(h), b = a('of2q'), g = a('GIcp'), x = a.n(g), v = a('5wO3'), w = a.n(v), C = a('iQ+n'), E = a('dJL0'), N = a('SCqF'), k = a('TN+F'), P = a('anyA');
      function S(e) {
        return (S = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }
      function O(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = a, e;
      }
      function j(e, t, a, n, r, o, s) {
        try {
          var i = e[o](s), c = i.value;
        } catch (e) {
          return void a(e);
        }
        i.done ? t(c) : Promise.resolve(c).then(n, r);
      }
      function R(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
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
          var a, n = z(e);
          if (t) {
            var r = z(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else
            a = n.apply(this, arguments);
          return B(this, a);
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
      function z(e) {
        return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      var F = function (t) {
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
        }(d, t);
        var a, n, i, c, l, p = I(d);
        function d(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, d), (t = p.call(this, e)).state = {
            plan: {},
            groupName: '',
            groupNameError: '',
            poNumber: '',
            poNumberError: '',
            pdf: null,
            pdfError: ''
          }, t.email = '', t.onPdfDrop = t.onPdfDrop.bind(D(t)), t.onSubscribe = t.onSubscribe.bind(D(t)), t;
        }
        return a = d, (n = [
          {
            key: 'componentDidMount',
            value: (c = regeneratorRuntime.mark(function e() {
              var t, a, n, r, o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (t = Object(k.i)('id'), -1 !== (a = b.b.map(function (e) {
                        return e.id;
                      }).indexOf(t))) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt('return');
                  case 4:
                    return n = b.b[a], r = decodeURIComponent(Object(k.i)('n')), this.setState({
                      plan: n,
                      groupName: r
                    }), e.next = 9, this.props.user.getData();
                  case 9:
                    if (o = e.sent) {
                      e.next = 12;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 12:
                    this.email = o.email;
                  case 13:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), l = function () {
              var e = this, t = arguments;
              return new Promise(function (a, n) {
                var r = c.apply(e, t);
                function o(e) {
                  j(r, a, n, o, s, 'next', e);
                }
                function s(e) {
                  j(r, a, n, o, s, 'throw', e);
                }
                o(void 0);
              });
            }, function () {
              return l.apply(this, arguments);
            })
          },
          {
            key: 'onPdfDrop',
            value: function (e) {
              var t = e[0];
              t ? this.setState({
                pdfError: '',
                pdf: t
              }) : this.setState({
                pdfError: 'Error uploading the PDF',
                pdf: null
              });
            }
          },
          {
            key: 'onSubscribe',
            value: function (t) {
              var a = this;
              t.preventDefault(), this.setState({ loading: !0 });
              var n = '', r = '', o = '';
              if (this.state.groupName || (n = 'Group Name is required.'), this.state.poNumber || (r = 'Purchase Order Number is required.'), this.state.pdf || (o = 'Purchase Order PDF is required.'), this.setState({
                  groupNameError: n,
                  poNumberError: r,
                  pdfError: o
                }), n || r || o)
                this.setState({ loading: !1 });
              else {
                u.a.defaults.headers.common = {};
                var s = new y.a();
                s.append('file', this.state.pdf), s.append('folder', 'POs'), s.append('upload_preset', 'normal'), s.append('api_key', e.env.CLOUDINARY_API_KEY), s.append('timestamp', parseInt(Date.now() / 1000, 10)), u.a.post('https://api.cloudinary.com/v1_1/blooket/image/upload', s, { headers: { 'X-Requested-With': 'XMLHttpRequest' } }).then(function (e) {
                  u.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, u.a.post('/api/groups/po', {
                    email: a.email,
                    plan: a.state.plan,
                    groupName: a.state.groupName,
                    poNumber: a.state.poNumber,
                    pdfURL: e.data.secure_url,
                    pdfID: e.data.public_id
                  }).then(function () {
                    a.props.history.push('/dashboard?p=Group');
                  }).catch(function (e) {
                    console.error(e), a.setState({
                      loading: !1,
                      groupNameError: 'Something went very wrong. Please contact support.'
                    });
                  });
                }).catch(function (e) {
                  console.error(e), a.setState({
                    loading: !1,
                    groupNameError: 'Something went very wrong. Please contact support.'
                  });
                });
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var e, t, a = this;
              return -1 === b.b.map(function (e) {
                return e.id;
              }).indexOf(Object(k.i)('id')) && (this.redirect = !0), this.redirect ? r.a.createElement(o.a, { to: '/upgrade/group/price' }) : r.a.createElement('div', { className: s.isMobile ? x.a.mBody : x.a.body }, r.a.createElement(C.a, {
                title: 'Group Upgrade | Blooket',
                desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
              }), r.a.createElement(E.a, null), r.a.createElement('div', { className: x.a.slantBackground }), r.a.createElement('div', { className: x.a.regularBody }, this.state.plan && this.state.plan.id ? r.a.createElement('form', {
                onSubmit: this.onSubscribe,
                className: w.a.centerWrapper
              }, r.a.createElement('div', { className: w.a.container }, r.a.createElement('div', { className: w.a.header }, 'Pay With Purchase Order'), r.a.createElement('div', { className: w.a.subtext }, 'Blooket Plus: '.concat(this.state.plan.name, ' Plan'))), r.a.createElement('div', { className: w.a.container }, r.a.createElement('div', { className: w.a.inputHeader }, 'Subscription Group Name'), r.a.createElement('div', { className: m()(w.a.inputContainer, (e = {}, O(e, w.a.inputFilled, this.state.groupName), O(e, w.a.inputError, this.state.groupNameError), e)) }, r.a.createElement('input', {
                className: w.a.input,
                placeholder: 'Group Name...',
                onChange: function (e) {
                  return a.setState({
                    groupName: e.target.value.slice(0, 50),
                    groupNameError: ''
                  });
                },
                value: this.state.groupName,
                type: 'text'
              })), r.a.createElement('div', { className: w.a.inputHeader }, 'Purchase Order Number'), r.a.createElement('div', {
                className: m()(w.a.inputContainer, (t = {}, O(t, w.a.inputFilled, this.state.poNumber), O(t, w.a.inputErorr, this.state.poNumberError), t)),
                style: { marginBottom: 10 }
              }, r.a.createElement('input', {
                className: w.a.input,
                placeholder: 'Purchase Order Number...',
                onChange: function (e) {
                  return a.setState({
                    poNumber: e.target.value.slice(0, 50),
                    poNumberError: ''
                  });
                },
                value: this.state.poNumber,
                type: 'text'
              }))), r.a.createElement('div', { className: w.a.container }, '\n                  Upload your purchase order below. We\'ll send you an email with the final invoice immediately after.\n                  The subscription will last for 1 year until '.concat(f()().format('MM/DD/YYYY'), '.\n                '), r.a.createElement('br', null), r.a.createElement('br', null), '\n                  You\'ll be able to distribute the plans as soon as you upload the PO, but all plans will\n                  be canceled if payment is not received within 30 days.\n                ', r.a.createElement('br', null), r.a.createElement('br', null), '\n                  WARNING: Uploading a fake purchase order can be punished through the deletion of your account.\n                '), r.a.createElement('div', { className: w.a.container }, r.a.createElement('div', { className: w.a.inputHeader }, 'Upload Purchase Order PDF'), this.state.pdf ? r.a.createElement('div', { className: w.a.pdfRow }, r.a.createElement('i', {
                className: m()('fas fa-times', w.a.removeIcon),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return a.setState({
                    pdf: null,
                    pdfError: ''
                  });
                }
              }), this.state.pdf.name) : r.a.createElement(_.a, {
                multiple: !1,
                accept: 'application/pdf',
                onDropAccepted: this.onPdfDrop,
                onDropRejected: function () {
                  return a.setState({ pdfError: 'PDF Denied (Check PDF Format & Size < 2.5 MB)' });
                },
                className: w.a.dropContainer,
                activeClassName: w.a.activeDropContainer,
                maxSize: 2500000
              }, r.a.createElement('i', { className: m()('fas fa-file-upload', w.a.dropIcon) }), r.a.createElement('div', { className: w.a.dropHeader }, 'Drag a PDF or Click to Upload'), 'File must be less than 5MB')), this.state.groupNameError || this.state.poNumberError || this.state.pdfError ? r.a.createElement('div', { className: w.a.errorContainer }, r.a.createElement('i', { className: m()('fas fa-times-circle', w.a.errorIcon) }), this.state.groupNameError || this.state.poNumberError || this.state.pdfError) : null, r.a.createElement('input', {
                type: 'submit',
                value: 'Subscribe Now',
                className: w.a.submitButton,
                tabIndex: 0
              })) : null), this.state.loading ? r.a.createElement(N.a, {
                text: 'Processing...',
                loading: !0
              }) : null);
            }
          }
        ]) && R(a.prototype, n), i && R(a, i), d;
      }(r.a.Component);
      F.propTypes = {
        history: c.a.object,
        user: c.a.object
      }, t.a = Object(P.c)(F);
    }.call(this, a('8oxB')));
  },
  'Fs+q': function (e, t, a) {
    var n = a('izWf');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  SdQT: function (e, t, a) {
    'use strict';
    a.d(t, 'b', function () {
      return h;
    }), a.d(t, 'd', function () {
      return x;
    }), a.d(t, 'a', function () {
      return g;
    });
    var n = a('Wcq6'), r = a.n(n), o = (a('AAub'), a('Zs65'), a('6nsN'), a('q1tI')), s = a.n(o);
    function i() {
      return (i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        }
        return e;
      }).apply(this, arguments);
    }
    function c(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, n);
      }
      return a;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(a), !0).forEach(function (t) {
          u(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function u(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function p(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function m(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (n, r) {
          var o = e.apply(t, a);
          function s(e) {
            p(o, n, r, s, i, 'next', e);
          }
          function i(e) {
            p(o, n, r, s, i, 'throw', e);
          }
          s(void 0);
        });
      };
    }
    function d(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    var f = {
        apiKey: 'AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU',
        authDomain: 'blooket-2020.firebaseapp.com',
        projectId: 'blooket-2020',
        storageBucket: 'blooket-2020.appspot.com',
        messagingSenderId: '741533559105',
        appId: '1:741533559105:web:b8cbb10e6123f2913519c0',
        measurementId: 'G-S3H5NGN10Z'
      }, _ = [
        'https://blooket-2020.firebaseio.com',
        'https://blooket-2021.firebaseio.com',
        'https://blooket-2022.firebaseio.com',
        'https://blooket-2023.firebaseio.com',
        'https://blooket-2024.firebaseio.com',
        'https://blooket-2025.firebaseio.com',
        'https://blooket-2026.firebaseio.com',
        'https://blooket-2027.firebaseio.com'
      ], h = 6, y = function (e) {
        return e < 212500 ? 0 : e < 325000 ? 1 : e < 437500 ? 2 : e < 550000 ? 3 : e < 662500 ? 4 : e < 775000 ? 5 : e < 887500 ? 6 : 7;
      }, b = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.liveApp = null, this.liveAppNum = -1;
        }
        var t, a, n, o, s, i, c, u, p, h, b, g, x, v;
        return t = e, (a = [
          {
            key: 'checkConnection',
            value: (v = m(regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (this.liveAppNum === t) {
                      e.next = 5;
                      break;
                    }
                    if (-1 === this.liveAppNum) {
                      e.next = 4;
                      break;
                    }
                    return e.next = 4, this.disconnectFromDb();
                  case 4:
                    this.connectToDb(t);
                  case 5:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e) {
              return v.apply(this, arguments);
            })
          },
          {
            key: 'connectToDb',
            value: function (e) {
              this.liveApp = r.a.initializeApp(l(l({}, f), {}, { databaseURL: _[e] })), this.liveAppNum = e, r.a.analytics();
            }
          },
          {
            key: 'disconnectFromDb',
            value: (x = m(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, r.a.app().delete().then();
                  case 2:
                  case 'end':
                    return e.stop();
                  }
              }, e);
            })), function () {
              return x.apply(this, arguments);
            })
          },
          {
            key: 'getDatabaseVal',
            value: (g = m(regeneratorRuntime.mark(function e(t, a, n) {
              var r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return r = y(t), e.next = 3, this.checkConnection(r);
                  case 3:
                    this.liveApp.database().ref(''.concat(t, '/').concat(a)).once('value').then(function (e) {
                      n(e.val());
                    }).catch(function () {
                      n(null);
                    });
                  case 4:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e, t, a) {
              return g.apply(this, arguments);
            })
          },
          {
            key: 'getDatabaseRef',
            value: (b = m(regeneratorRuntime.mark(function e(t, a) {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return n = y(t), e.next = 3, this.checkConnection(n);
                  case 3:
                    return e.abrupt('return', this.liveApp.database().ref(''.concat(t, '/').concat(a)));
                  case 4:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e, t) {
              return b.apply(this, arguments);
            })
          },
          {
            key: 'setAuth',
            value: (h = m(regeneratorRuntime.mark(function e(t, a, n) {
              var o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return o = y(t), e.next = 3, this.checkConnection(o);
                  case 3:
                    return e.next = 5, new Promise(function (e) {
                      return r.a.auth().setPersistence(r.a.auth.Auth.Persistence.SESSION).then(e).catch(e);
                    });
                  case 5:
                    r.a.auth().signInWithCustomToken(a).then(n).catch(function (e) {
                      console.error(e);
                    });
                  case 6:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e, t, a) {
              return h.apply(this, arguments);
            })
          },
          {
            key: 'setHost',
            value: (p = m(regeneratorRuntime.mark(function e(t, a, n, r, o, s) {
              var i;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, i = y(t), e.next = 4, this.checkConnection(i);
                  case 4:
                    this.liveApp.database().ref(t).set({
                      p: a,
                      set: n,
                      s: r,
                      c: {},
                      a: [],
                      stg: 'join',
                      ho: o
                    }).then(function () {
                      return s(!0);
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), s(!1);
                  case 10:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  7
                ]]);
            })), function (e, t, a, n, r, o) {
              return p.apply(this, arguments);
            })
          },
          {
            key: 'setClient',
            value: (u = m(regeneratorRuntime.mark(function e(t, a, n, r) {
              var o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, o = y(t), e.next = 4, this.checkConnection(o);
                  case 4:
                    this.liveApp.database().ref(''.concat(t, '/c/').concat(a)).set({ b: n }).then(function () {
                      return r(!0);
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), r(!1);
                  case 10:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  7
                ]]);
            })), function (e, t, a, n) {
              return u.apply(this, arguments);
            })
          },
          {
            key: 'setVal',
            value: (c = m(regeneratorRuntime.mark(function e(t, a) {
              var n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, n = y(t.id), e.next = 4, this.checkConnection(n);
                  case 4:
                    this.liveApp.database().ref(''.concat(t.id, '/').concat(t.path)).set(t.val).then(function () {
                      a && a();
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), a && a();
                  case 10:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  7
                ]]);
            })), function (e, t) {
              return c.apply(this, arguments);
            })
          },
          {
            key: 'setStage',
            value: (i = m(regeneratorRuntime.mark(function e(t, a) {
              var n, r = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, n = y(t.id), e.next = 4, this.checkConnection(n);
                  case 4:
                    if (!t.clearAnswers) {
                      e.next = 7;
                      break;
                    }
                    return e.next = 7, new Promise(function (e) {
                      return r.liveApp.database().ref(''.concat(t.id, '/a')).set([]).then(e);
                    });
                  case 7:
                    this.liveApp.database().ref(''.concat(t.id, '/stg')).set(t.stage).then(function () {
                      a && a();
                    }), e.next = 13;
                    break;
                  case 10:
                    e.prev = 10, e.t0 = e.catch(0), a && a();
                  case 13:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  10
                ]]);
            })), function (e, t) {
              return i.apply(this, arguments);
            })
          },
          {
            key: 'removeVal',
            value: (s = m(regeneratorRuntime.mark(function e(t, a, n) {
              var r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, r = y(t), e.next = 4, this.checkConnection(r);
                  case 4:
                    this.liveApp.database().ref(''.concat(t, '/').concat(a)).remove().then(function () {
                      n && n();
                    }), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), n && n();
                  case 10:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  7
                ]]);
            })), function (e, t, a) {
              return s.apply(this, arguments);
            })
          },
          {
            key: 'removeHost',
            value: (o = m(regeneratorRuntime.mark(function e(t) {
              var a;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.prev = 0, a = y(t), e.next = 4, this.checkConnection(a);
                  case 4:
                    this.liveApp.database().ref(t).remove(), e.next = 10;
                    break;
                  case 7:
                    e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);
                  case 10:
                  case 'end':
                    return e.stop();
                  }
              }, e, this, [[
                  0,
                  7
                ]]);
            })), function (e) {
              return o.apply(this, arguments);
            })
          }
        ]) && d(t.prototype, a), n && d(t, n), e;
      }(), g = s.a.createContext(null), x = function (e) {
        return function (t) {
          return s.a.createElement(g.Consumer, null, function (a) {
            return s.a.createElement(e, i({}, t, { firebase: a }));
          });
        };
      };
    t.c = b;
  },
  SenU: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__centerWrapper___33Nye-camelCase{width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center}.styles__header___13fT_-camelCase{font-size:85px;margin:50px auto 5px;font-family:Titan One,sans-serif}.styles__header___13fT_-camelCase,.styles__subheader___apGRq-camelCase{width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__subheader___apGRq-camelCase{font-size:32px;margin:20px auto;font-family:Nunito,sans-serif}.styles__groupsHolder___HS2vF-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:75%;max-width:1000px;margin:0 auto}.styles__groupContainer____ijcF-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:22.5%;min-width:200px;min-height:200px;color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:10px 5px;font-family:Nunito,sans-serif;transition:.2s}.styles__groupContainer____ijcF-camelCase:hover{transform:scale(.95)}.styles__groupName___eA4Un-camelCase{font-size:22px;font-weight:700}.styles__groupPlans___2O_Z3-camelCase{font-size:16px}.styles__groupPrice___1oick-camelCase{font-family:Titan One,sans-serif;font-size:52px}.styles__descContainer___2KthM-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1000px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;font-family:Nunito,sans-serif;box-sizing:border-box;padding:10px 20px;color:#3a3a3a;text-align:center;font-size:18px;margin:30px auto}.styles__detailsHolder___3_GX0-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:75%;max-width:1000px;margin:10px auto}.styles__detailContainer___2iP79-camelCase{flex-direction:row;justify-content:flex-start;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;margin:10px;width:calc(48% - 20px);box-sizing:border-box;padding:10px 20px}.styles__detailCheck___2FFGa-camelCase,.styles__detailContainer___2iP79-camelCase{display:flex;align-items:center}.styles__detailCheck___2FFGa-camelCase{width:40px;height:40px;border-radius:5px;justify-content:center;background-color:#4bc22e;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:28px}.styles__detailText___1oX_J-camelCase{font-family:Nunito,sans-serif;font-size:24px;font-size:26px;width:calc(100% - 50px);font-weight:700;margin-left:10px}@media screen and (max-width:1050px){.styles__header___13fT_-camelCase{font-size:55px;line-height:57px;margin:20px auto 5px}.styles__descContainer___2KthM-camelCase{max-width:90%}.styles__detailsHolder___3_GX0-camelCase{width:90%}.styles__detailContainer___2iP79-camelCase{width:calc(100% - 20px)}}',
      ''
    ]), t.locals = {
      centerWrapper: 'styles__centerWrapper___33Nye-camelCase',
      header: 'styles__header___13fT_-camelCase',
      subheader: 'styles__subheader___apGRq-camelCase',
      groupsHolder: 'styles__groupsHolder___HS2vF-camelCase',
      groupContainer: 'styles__groupContainer____ijcF-camelCase',
      groupName: 'styles__groupName___eA4Un-camelCase',
      groupPlans: 'styles__groupPlans___2O_Z3-camelCase',
      groupPrice: 'styles__groupPrice___1oick-camelCase',
      descContainer: 'styles__descContainer___2KthM-camelCase',
      detailsHolder: 'styles__detailsHolder___3_GX0-camelCase',
      detailContainer: 'styles__detailContainer___2iP79-camelCase',
      detailCheck: 'styles__detailCheck___2FFGa-camelCase',
      detailText: 'styles__detailText___1oX_J-camelCase'
    };
  },
  UOwq: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), r = a.n(n), o = a('2iEm'), s = a('b6Qr'), i = a('vDqi'), c = a.n(i), l = a('17x9'), u = a.n(l), p = a('iQ+n'), m = a('dJL0'), d = a('anyA'), f = a('GIcp'), _ = a.n(f), h = a('6u6T'), y = a.n(h);
    function b(e) {
      return (b = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function g(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function x(e, t) {
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
        var a, n = E(e);
        if (t) {
          var r = E(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return C(this, a);
      };
    }
    function C(e, t) {
      return !t || 'object' !== b(t) && 'function' != typeof t ? function (e) {
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
        }), t && v(e, t);
      }(d, e);
      var t, a, n, i, l, u = w(d);
      function d(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, d), (t = u.call(this, e)).state = {
          loggedIn: !1,
          plan: 'Starter'
        }, t;
      }
      return t = d, (a = [
        {
          key: 'componentDidMount',
          value: (i = regeneratorRuntime.mark(function e() {
            var t, a = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  (t = e.sent) && c.a.put('/api/users/plan', {
                    name: t.name,
                    stripeId: t.stripe
                  }).then(function (e) {
                    if(window.getPref('spoofPlus')){
                      a.setState({
                        loggedIn: !0,
                        plan: 'Plus'
                      });
                    } else {
                      a.setState({
                        loggedIn: !0,
                        plan: e.data.plan
                      });
                    }
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 4:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), l = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var r = i.apply(e, t);
              function o(e) {
                g(r, a, n, o, s, 'next', e);
              }
              function s(e) {
                g(r, a, n, o, s, 'throw', e);
              }
              o(void 0);
            });
          }, function () {
            return l.apply(this, arguments);
          })
        },
        {
          key: 'render',
          value: function () {
            return r.a.createElement('div', { className: s.isMobile ? _.a.mBody : _.a.body }, r.a.createElement(p.a, {
              title: 'Upgrade | Blooket',
              desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
            }), r.a.createElement(m.a, null), r.a.createElement('div', { className: y.a.background }), r.a.createElement('div', { className: _.a.regularBody }, r.a.createElement('div', { className: y.a.header }, 'Level Up Your Classroom'), r.a.createElement('div', { className: y.a.planContainer }, r.a.createElement('div', { className: y.a.plan }, r.a.createElement('div', {
              className: y.a.planBackground,
              style: { backgroundColor: '#7fba43' }
            }), r.a.createElement('div', { className: y.a.planTop }, 'Starter'), r.a.createElement('div', { className: y.a.planPrice }, 'Free'), r.a.createElement('div', { className: y.a.planSubText }, 'forever'), r.a.createElement('div', { className: y.a.planDetail }, 'Create & Host Sets'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Unique Game Modes'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Question Set Search'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Unlimited Sets & Edits'), r.a.createElement(o.a, {
              className: y.a.planButton,
              style: { backgroundColor: '#7fba43' },
              to: this.state.loggedIn ? '/dashboard' : '/signup'
            }, this.state.loggedIn ? 'Already Owned' : 'Get Started')), r.a.createElement('div', { className: y.a.plan }, r.a.createElement('div', {
              className: y.a.planBackground,
              style: { backgroundColor: '#ff7b24' }
            }), r.a.createElement('div', { className: y.a.planTop }, 'Plus'), r.a.createElement('div', { className: y.a.planPrice }, '$2.99'), r.a.createElement('div', { className: y.a.planSubText }, 'per month, charged yearly ($35.88)'), r.a.createElement('div', { className: y.a.planDetail }, 'All Starter Features'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Enhanced Game Reports'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Early Event Access'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Exclusive Features'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Student Bonus Tokens'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Copy & Duplicate Sets'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Priority Support'), r.a.createElement(o.a, {
              className: y.a.planButton,
              style: { backgroundColor: '#ff7b24' },
              to: this.state.loggedIn ? [
                'Plus',
                'Plus Flex'
              ].includes(this.state.plan) ? '/dashboard' : '/upgrade/checkout/plus' : '/signup?plan=plus'
            }, this.state.loggedIn ? 'Plus' === this.state.plan ? 'Already Owned' : 'Plus Flex' === this.state.plan ? 'Already On Plus Flex' : 'Buy Now' : 'Get Started')), r.a.createElement('div', { className: y.a.plan }, r.a.createElement('div', {
              className: y.a.planBackground,
              style: { backgroundColor: '#eb5726' }
            }), r.a.createElement('div', { className: y.a.planTop }, 'Plus Flex'), r.a.createElement('div', { className: y.a.planPrice }, '$4.99'), r.a.createElement('div', { className: y.a.planSubText }, 'per month'), r.a.createElement('div', { className: y.a.planDetail }, 'All Plus Features'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Pay Monthly'), r.a.createElement('div', { className: y.a.planSpacer }), r.a.createElement('div', { className: y.a.planDetail }, 'Cancel Whenever'), r.a.createElement(o.a, {
              className: y.a.planButton,
              style: { backgroundColor: '#eb5726' },
              to: this.state.loggedIn ? [
                'Plus',
                'Plus Flex'
              ].includes(this.state.plan) ? '/dashboard' : '/upgrade/checkout/plus-flex' : '/signup?plan=plus-flex'
            }, this.state.loggedIn ? 'Plus Flex' === this.state.plan ? 'Already Owned' : 'Plus' === this.state.plan ? 'Already On Plus' : 'Buy Now' : 'Get Started'))), r.a.createElement('div', { className: y.a.groupContainer }, 'Looking for a discount? Try group subscriptions!', r.a.createElement(o.a, {
              className: y.a.groupButton,
              to: '/upgrade/group/price'
            }, 'Group Pricing')), r.a.createElement('div', { className: y.a.powerBigContainer }, r.a.createElement('div', { className: y.a.powerLeft }, r.a.createElement('div', { className: y.a.powerLeftText }, 'Power', r.a.createElement('br', null), 'of Plus')), r.a.createElement('div', { className: y.a.powerRight }, r.a.createElement('div', {
              className: y.a.power,
              style: { backgroundColor: '#fff' }
            }, r.a.createElement('div', { className: y.a.powerTextContainer }, r.a.createElement('div', { className: y.a.powerHeader }, 'Early Access'), r.a.createElement('div', { className: y.a.powerText }, 'You get access to new or limited time events, Blooks, and game modes before anyone else'))), r.a.createElement('div', {
              className: y.a.power,
              style: { backgroundColor: '#f2f2f2' }
            }, r.a.createElement('div', { className: y.a.powerTextContainer }, r.a.createElement('div', { className: y.a.powerHeader }, 'Exclusive Freebies'), r.a.createElement('div', { className: y.a.powerText }, 'Throughout the year, your students will get bonus tokens after games and perhaps other goodies later on'))), r.a.createElement('div', {
              className: y.a.power,
              style: { backgroundColor: '#fff' }
            }, r.a.createElement('div', { className: y.a.powerTextContainer }, r.a.createElement('div', { className: y.a.powerHeader }, 'Better Features'), r.a.createElement('div', { className: y.a.powerText }, 'Blooket Plus allows you to copy your question sets, duplicate community sets, create folders, and view enhanced game reports'))))), r.a.createElement('div', { className: y.a.questionsHeader }, 'Questions'), r.a.createElement('div', { className: y.a.questionContainer }, r.a.createElement('div', { className: y.a.questionHeader }, 'How do I pay?'), r.a.createElement('div', { className: y.a.questionText }, '\n                We accept all major credits cards. Also, in order\n                to keep your information secure, we use a trusted third party service\n                to handle all payments. We will automatically renew Blooket Plus every\n                year and Blooket Plus Flex every month unless you cancel the subscription\n                in the Settings page of your profile.\n              ')), r.a.createElement('div', { className: y.a.questionContainer }, r.a.createElement('div', { className: y.a.questionHeader }, 'Can I use a purchase order?'), r.a.createElement('div', { className: y.a.questionText }, '\n                Unfortunately, we do not accept purchase orders for individual subscriptions.\n                However, you can use a purchase order for group plans. We\u2019ll generate a quote\n                for you and send you a final invoice using your purchase order for these subscriptions.\n              ')), r.a.createElement('div', { style: { height: 10 } })));
          }
        }
      ]) && x(t.prototype, a), n && x(t, n), d;
    }(r.a.Component);
    N.propTypes = { user: u.a.object }, t.a = Object(d.c)(N);
  },
  XDR8: function (e, t, a) {
    var n = a('Yny1');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  Yny1: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__centerWrapper___83_RU-camelCase{width:100%;min-height:100%;justify-content:center}.styles__centerWrapper___83_RU-camelCase,.styles__payContainer___30nhR-camelCase{display:flex;flex-direction:column}.styles__payContainer___30nhR-camelCase{width:85%;max-width:600px;min-width:320px;margin:auto;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;align-items:center;color:#3a3a3a}.styles__payHeader___3BbSN-camelCase{font-family:Nunito,sans-serif;text-align:center;font-size:45px;font-weight:700;margin:10px auto 0}.styles__paySpacer___3buO6-camelCase{width:90%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__payMessage___2cvk2-camelCase{text-align:left;font-size:18px;padding:10px;margin:0 auto}.styles__payMessage___2cvk2-camelCase,.styles__payRow___Y_AMZ-camelCase{font-family:Nunito,sans-serif;width:90%}.styles__payRow___Y_AMZ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:#3a3a3a}.styles__payColumn___1ZYPW-camelCase{display:flex;flex-direction:column;height:90px;justify-content:center}.styles__payItem___2Ntxv-camelCase{font-size:32px;font-weight:700}.styles__payDesc___dqevA-camelCase{font-size:18px;opacity:.8;font-weight:700}.styles__payPrice___2qMfp-camelCase{margin:auto 0;font-size:28px;font-weight:700}.styles__payButton___3P_27-camelCase{padding:0 25px;height:50px;line-height:50px;border-radius:7px;margin:20px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-size:30px;color:#fff;background-color:#0bc2cf;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__payButton___3P_27-camelCase:hover{transform:scale(1.05)}',
      ''
    ]), t.locals = {
      centerWrapper: 'styles__centerWrapper___83_RU-camelCase',
      payContainer: 'styles__payContainer___30nhR-camelCase',
      payHeader: 'styles__payHeader___3BbSN-camelCase',
      paySpacer: 'styles__paySpacer___3buO6-camelCase',
      payMessage: 'styles__payMessage___2cvk2-camelCase',
      payRow: 'styles__payRow___Y_AMZ-camelCase',
      payColumn: 'styles__payColumn___1ZYPW-camelCase',
      payItem: 'styles__payItem___2Ntxv-camelCase',
      payDesc: 'styles__payDesc___dqevA-camelCase',
      payPrice: 'styles__payPrice___2qMfp-camelCase',
      payButton: 'styles__payButton___3P_27-camelCase'
    };
  },
  dH7t: function (e, t, a) {
    var n = a('B8VN');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  },
  i61F: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), r = a.n(n), o = a('b6Qr'), s = a('2iEm'), i = a('17x9'), c = a.n(i), l = a('vDqi'), u = a.n(l), p = a('iQ+n'), m = a('dJL0'), d = a('anyA'), f = a('GIcp'), _ = a.n(f), h = a('dH7t'), y = a.n(h), b = a('TN+F');
    function g(e) {
      return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function v(e, t) {
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
        var a, n = N(e);
        if (t) {
          var r = N(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return E(this, a);
      };
    }
    function E(e, t) {
      return !t || 'object' !== g(t) && 'function' != typeof t ? function (e) {
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
        }), t && w(e, t);
      }(d, e);
      var t, a, n, i, c, l = C(d);
      function d(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, d), (t = l.call(this, e)).state = {
          result: '',
          isGroup: 'group' === Object(b.i)('t')
        }, t;
      }
      return t = d, (a = [
        {
          key: 'componentDidMount',
          value: (i = regeneratorRuntime.mark(function e() {
            var t, a, n = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return t = Object(b.i)('session_id'), e.next = 3, this.props.user.getData();
                case 3:
                  (a = e.sent) && t ? this.state.isGroup ? (u.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, u.a.post('/api/groups/stripe', {
                    sessionId: t,
                    email: a.email,
                    groupName: decodeURIComponent(Object(b.i)('n'))
                  }).then(function (e) {
                    n.setState({ result: e.data });
                  }).catch(function (e) {
                    console.error(e);
                  })) : (u.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, u.a.put('/api/users/stripe/checkout', {
                    sessionId: t,
                    email: a.email
                  }).then(function (e) {
                    e.data.success && localStorage.setItem('token', e.data.token), n.setState({ result: e.data.success ? 'success' : 'failed' });
                  }).catch(function (e) {
                    console.error(e);
                  })) : this.props.history.push('/upgrade');
                case 5:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), c = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var r = i.apply(e, t);
              function o(e) {
                x(r, a, n, o, s, 'next', e);
              }
              function s(e) {
                x(r, a, n, o, s, 'throw', e);
              }
              o(void 0);
            });
          }, function () {
            return c.apply(this, arguments);
          })
        },
        {
          key: 'render',
          value: function () {
            return r.a.createElement('div', { className: o.isMobile ? _.a.mBody : _.a.body }, r.a.createElement(p.a, {
              title: 'Upgrade | Blooket',
              desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
            }), r.a.createElement(m.a, null), r.a.createElement('div', { className: _.a.slantBackground }), r.a.createElement('div', { className: _.a.regularBody }, this.state.result ? r.a.createElement('div', { className: y.a.container }, r.a.createElement('div', { className: y.a.header }, 'failed' !== this.state.result ? 'Success!' : 'Failed'), r.a.createElement('div', { className: y.a.subheader }, 'failed' !== this.state.result ? 'Thank you!' : 'Error processing payment. Please contact support.'), r.a.createElement(s.a, {
              className: y.a.button,
              to: '/dashboard'
            }, 'Dashboard')) : null));
          }
        }
      ]) && v(t.prototype, a), n && v(t, n), d;
    }(r.a.Component);
    k.propTypes = {
      history: c.a.object,
      user: c.a.object
    }, t.a = Object(d.c)(k);
  },
  izWf: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__quote___3XGeg-camelCase{position:fixed;left:52.5%;top:calc(50% + 27.5px);height:80vh;transform:translateY(-50%)}.styles__leftColumn___aLE_V-camelCase,.styles__quote___3XGeg-camelCase{max-width:500px;width:40%}.styles__leftColumn___aLE_V-camelCase{position:absolute;top:35px;right:52.5%;display:flex;flex-direction:column}.styles__textContainer___3cqPV-camelCase{border-radius:5px;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-size:16px;font-family:Nunito,sans-serif;padding:15px;box-sizing:border-box;width:100%;margin:10px 0}.styles__textBigHeader___wUCmi-camelCase{font-weight:700;font-size:28px}.styles__bigText___33rHv-camelCase{font-size:18px}.styles__textHeader___ity0G-camelCase{font-weight:700;font-size:22px}.styles__linkText___1GoLt-camelCase{color:#0bc2cf}.styles__button___3Spxh-camelCase{display:flex;justify-content:center;align-items:center;width:50%;min-width:240px;color:#fff;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:16px;padding:5px 10px;margin-top:10px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-decoration:none;cursor:pointer;transition:.2s}.styles__button___3Spxh-camelCase:hover{transform:scale(.97)}.styles__downloadButton___1SRJd-camelCase{display:flex;justify-content:center;align-items:center;width:100%;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:22px;font-weight:700;padding:10px;margin:15px 0 10px;box-sizing:border-box;border:2px solid #ff7b24;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-decoration:none;cursor:pointer;transition:.2s}.styles__downloadButton___1SRJd-camelCase:hover{transform:scale(.97)}@media only screen and (max-width:800px){.styles__bodyContainer___2X8cv-camelCase{position:absolute;top:65px;left:5%;width:90%}.styles__quote___3XGeg-camelCase{margin:20px auto;height:400px;transform:none}.styles__leftColumn___aLE_V-camelCase,.styles__quote___3XGeg-camelCase{position:static;width:100%}.styles__leftColumn___aLE_V-camelCase{margin-bottom:20px}}',
      ''
    ]), t.locals = {
      quote: 'styles__quote___3XGeg-camelCase',
      leftColumn: 'styles__leftColumn___aLE_V-camelCase',
      textContainer: 'styles__textContainer___3cqPV-camelCase',
      textBigHeader: 'styles__textBigHeader___wUCmi-camelCase',
      bigText: 'styles__bigText___33rHv-camelCase',
      textHeader: 'styles__textHeader___ity0G-camelCase',
      linkText: 'styles__linkText___1GoLt-camelCase',
      button: 'styles__button___3Spxh-camelCase',
      downloadButton: 'styles__downloadButton___1SRJd-camelCase',
      bodyContainer: 'styles__bodyContainer___2X8cv-camelCase'
    };
  },
  lQV5: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__centerWrapper___13E4l-camelCase{width:550px;margin:20px auto;display:flex;flex-direction:column}.styles__container___jh5C8-camelCase{box-sizing:border-box;padding:10px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#3a3a3a}.styles__header___24MbH-camelCase{font-size:36px;font-weight:700}.styles__subtext___3h6Yi-camelCase{font-size:20px}.styles__inputHeader___2MsQL-camelCase{font-size:24px;font-weight:700}.styles__inputContainer___2hdGt-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:80%;height:30px;margin-bottom:10px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__inputContainer___2hdGt-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___2hdGt-camelCase:focus-within{border-color:#0bc2cf}.styles__input___2j8mJ-camelCase{padding:5px 10px;border-radius:5px;box-sizing:border-box;width:100%;height:100%;font-size:16px;text-align:left;outline:none;border:none}.styles__input___2j8mJ-camelCase:-moz-placeholder,.styles__input___2j8mJ-camelCase:-ms-input-placeholder,.styles__input___2j8mJ-camelCase::-moz-placeholder,.styles__input___2j8mJ-camelCase::-webkit-input-placeholder{color:#999}.styles__inputFilled___2sj9c-camelCase{border-color:#3a3a3a}.styles__inputError___3gKiZ-camelCase{border-color:#ce1313}.styles__dropContainer___3Gt3w-camelCase{height:200px;width:100%;box-sizing:border-box;border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#3a3a3a;font-size:14px;margin-top:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__activeDropContainer___1r9R5-camelCase,.styles__dropContainer___3Gt3w-camelCase:hover{background-color:rgba(11,194,207,.3)}.styles__dropIcon___qu3LG-camelCase{font-size:48px;margin-bottom:10px}.styles__dropHeader___2tHIj-camelCase{font-size:16px;font-weight:700}.styles__pdfRow___2zhgO-camelCase{display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;margin-top:10px;font-size:20px;color:#3a3a3a;border-bottom:2px solid #0bc2cf}.styles__removeIcon___1uyvU-camelCase{margin-right:10px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__removeIcon___1uyvU-camelCase:hover{color:#0bc2cf}.styles__errorContainer___bXYLq-camelCase{box-sizing:border-box;padding:10px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#3a3a3a;border:2px solid #ce1313;display:flex;flex-direction:row}.styles__errorIcon___lraXW-camelCase{color:#ce1313;margin-right:10px}.styles__errorIcon___lraXW-camelCase,.styles__submitButton___1pGUO-camelCase{font-size:20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__submitButton___1pGUO-camelCase{box-sizing:border-box;padding:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border:none;border-radius:5px;font-family:Nunito,sans-serif;font-weight:700;margin:10px 0 30px;color:#fff;outline:none;cursor:pointer;transition:.2s}.styles__submitButton___1pGUO-camelCase:hover{transform:scale(.97)}@media only screen and (max-width:600px){.styles__centerWrapper___13E4l-camelCase{width:90%}.styles__inputContainer___2hdGt-camelCase{width:95%}}',
      ''
    ]), t.locals = {
      centerWrapper: 'styles__centerWrapper___13E4l-camelCase',
      container: 'styles__container___jh5C8-camelCase',
      header: 'styles__header___24MbH-camelCase',
      subtext: 'styles__subtext___3h6Yi-camelCase',
      inputHeader: 'styles__inputHeader___2MsQL-camelCase',
      inputContainer: 'styles__inputContainer___2hdGt-camelCase',
      input: 'styles__input___2j8mJ-camelCase',
      inputFilled: 'styles__inputFilled___2sj9c-camelCase',
      inputError: 'styles__inputError___3gKiZ-camelCase',
      dropContainer: 'styles__dropContainer___3Gt3w-camelCase',
      activeDropContainer: 'styles__activeDropContainer___1r9R5-camelCase',
      dropIcon: 'styles__dropIcon___qu3LG-camelCase',
      dropHeader: 'styles__dropHeader___2tHIj-camelCase',
      pdfRow: 'styles__pdfRow___2zhgO-camelCase',
      removeIcon: 'styles__removeIcon___1uyvU-camelCase',
      errorContainer: 'styles__errorContainer___bXYLq-camelCase',
      errorIcon: 'styles__errorIcon___lraXW-camelCase',
      submitButton: 'styles__submitButton___1pGUO-camelCase'
    };
  },
  nOuw: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), r = a.n(n), o = a('b6Qr'), s = a('17x9'), i = a.n(s), c = a('vDqi'), l = a.n(c), u = a('wd/R'), p = a.n(u), m = a('anyA'), d = a('GIcp'), f = a.n(d), _ = a('zPSp'), h = a.n(_), y = a('iQ+n'), b = a('dJL0'), g = a('I0uU'), x = a('w8h2'), v = a('of2q');
    function w(e) {
      return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function E(e, t) {
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }
    function N(e, t) {
      return (N = Object.setPrototypeOf || function (e, t) {
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
        var a, n = O(e);
        if (t) {
          var r = O(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return P(this, a);
      };
    }
    function P(e, t) {
      return !t || 'object' !== w(t) && 'function' != typeof t ? S(e) : t;
    }
    function S(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function O(e) {
      return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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
        }), t && N(e, t);
      }(u, e);
      var t, a, n, s, i, c = k(u);
      function u(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, u), (t = c.call(this, e)).state = {
          groupName: '',
          isFull: !1,
          isActive: !1,
          isLoggedIn: !1,
          ready: !1,
          loading: !1,
          done: '',
          isAlreadyIn: !1,
          isAlreadyGrouped: !1
        }, t.here = !0, t.email = '', t.planId = e.match.params.id, t.joinGroup = t.joinGroup.bind(S(t)), t;
      }
      return t = u, (a = [
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
                  (t = e.sent) ? (this.email = t.email, l.a.get('/api/groups', { params: { id: this.planId } }).then(function (e) {
                    var n = v.b.map(function (e) {
                      return e.name;
                    }).indexOf(e.data.planName);
                    if ((-1 !== n || 'Custom' === e.data.planName) && a.here) {
                      var r = -1 !== n ? v.b[n] : {
                        name: 'Custom',
                        numPlans: e.data.numPlans
                      };
                      l.a.put('/api/users/plan', { name: t.name }).then(function (t) {
                        var n = t.data.planSource;
                        a.setState({
                          ready: !0,
                          isLoggedIn: !0,
                          groupName: e.data.groupName,
                          isActive: p()(e.data.lastDate).add(1, 'year').isAfter(p.a.utc()),
                          isFull: r.numPlans - e.data.members.length <= 0,
                          isAlreadyIn: e.data.members.includes(a.email),
                          isAlreadyGrouped: Boolean(n)
                        });
                      }).catch(function (e) {
                        console.error(e);
                      });
                    }
                  }).catch(function () {
                    a.props.history.push('/404');
                  })) : this.setState({ ready: !0 });
                case 4:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), i = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var r = s.apply(e, t);
              function o(e) {
                C(r, a, n, o, i, 'next', e);
              }
              function i(e) {
                C(r, a, n, o, i, 'throw', e);
              }
              o(void 0);
            });
          }, function () {
            return i.apply(this, arguments);
          })
        },
        {
          key: 'joinGroup',
          value: function () {
            var e = this;
            this.setState({ loading: !0 }), l.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, l.a.put('/api/groups/join', {
              email: this.email,
              groupId: this.planId
            }).then(function (t) {
              t.data.success ? (localStorage.setItem('token', t.data.token), e.setState({
                done: 'Success',
                loading: !1
              })) : e.setState({
                done: 'Failed',
                loading: !1
              });
            }).catch(function (t) {
              e.setState({ loading: !1 }), console.error(t);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return r.a.createElement('div', { className: o.isMobile ? f.a.mBody : f.a.body }, r.a.createElement(y.a, {
              title: 'Join Group | Blooket',
              desc: 'Join a Upgrade Group to unlock the benefits of Blooket Plus.'
            }), r.a.createElement(b.a, null), r.a.createElement('div', { className: f.a.slantBackground }), this.state.ready ? r.a.createElement('div', { className: f.a.regularBody }, r.a.createElement('div', { className: h.a.container }, this.state.done ? r.a.createElement(r.a.Fragment, null, r.a.createElement('div', { className: h.a.header }, this.state.done), 'Failed' === this.state.done ? r.a.createElement('div', { className: h.a.subheader }, 'Please refresh and try again or contact support.') : null, r.a.createElement('div', { className: h.a.buttonContainer }, r.a.createElement(x.a, {
              text: 'Ok',
              click: 'Failed' === this.state.done ? function () {
                return window.location.reload();
              } : function () {
                return e.props.history.push('/dashboard');
              },
              color: 'blue'
            }))) : this.state.isLoggedIn ? !this.state.isActive || this.state.isFull || this.state.isAlreadyIn || this.state.isAlreadyGrouped ? r.a.createElement(r.a.Fragment, null, r.a.createElement('div', { className: h.a.header }, 'Failed'), r.a.createElement('div', { className: h.a.subheader }, this.state.isAlreadyIn ? 'You\'re already in this group.' : this.state.isAlreadyGrouped ? 'You already are in a group!' : this.state.isFull ? 'There are no more subscription plans in this group.' : 'This group is no longer active.'), r.a.createElement('div', { className: h.a.buttonContainer }, r.a.createElement(x.a, {
              text: 'Ok',
              click: function () {
                return e.props.history.push('/dashboard');
              },
              color: 'blue'
            }))) : r.a.createElement(r.a.Fragment, null, r.a.createElement('div', { className: h.a.header }, 'Join Group:'), r.a.createElement('div', { className: h.a.subheader }, this.state.groupName), r.a.createElement('div', { className: h.a.buttonContainer }, this.state.loading ? r.a.createElement(g.a, null) : r.a.createElement(x.a, {
              text: 'Join Now',
              click: this.joinGroup,
              color: 'blue'
            }))) : r.a.createElement(r.a.Fragment, null, r.a.createElement('div', { className: h.a.header }, 'Failed'), r.a.createElement('div', { className: h.a.subheader }, 'You must be logged in to join a group.'), r.a.createElement('div', { className: h.a.buttonContainer }, r.a.createElement(x.a, {
              text: 'Login',
              click: function () {
                return e.props.history.push('/login');
              },
              color: 'blue'
            }))))) : null);
          }
        }
      ]) && E(t.prototype, a), n && E(t, n), u;
    }(r.a.Component);
    j.propTypes = {
      match: i.a.object,
      history: i.a.object,
      user: i.a.object
    }, t.a = Object(m.c)(j);
  },
  oEZf: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__container___3XSa9-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;color:#3a3a3a}.styles__header___3yDN5-camelCase{font-size:50px;line-height:50px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___2qDEp-camelCase{font-size:24px;margin:10px;font-family:Nunito,sans-serif}.styles__buttonContainer___-sh2s-camelCase{width:150px;margin:15px auto 25px}@media only screen and (max-width:500px){.styles__container___3XSa9-camelCase{width:320px}}',
      ''
    ]), t.locals = {
      container: 'styles__container___3XSa9-camelCase',
      header: 'styles__header___3yDN5-camelCase',
      subheader: 'styles__subheader___2qDEp-camelCase',
      buttonContainer: 'styles__buttonContainer___-sh2s-camelCase'
    };
  },
  oX9F: function (e, t, a) {
    'use strict';
    var n = a('q1tI'), r = a.n(n), o = a('b6Qr'), s = a('2iEm'), i = a('17x9'), c = a.n(i), l = a('iQ+n'), u = a('dJL0'), p = a('anyA'), m = a('GIcp'), d = a.n(m), f = a('dH7t'), _ = a.n(f), h = a('TN+F');
    function y(e) {
      return (y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function b(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function g(e, t) {
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
        var a, n = C(e);
        if (t) {
          var r = C(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return w(this, a);
      };
    }
    function w(e, t) {
      return !t || 'object' !== y(t) && 'function' != typeof t ? function (e) {
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
        }), t && x(e, t);
      }(m, e);
      var t, a, n, i, c, p = v(m);
      function m(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, m), (t = p.call(this, e)).state = { isGroup: 'group' === Object(h.i)('t') }, t;
      }
      return t = m, (a = [
        {
          key: 'componentDidMount',
          value: (i = regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, this.props.user.getData();
                case 2:
                  e.sent || this.props.history.push('/login');
                case 4:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), c = function () {
            var e = this, t = arguments;
            return new Promise(function (a, n) {
              var r = i.apply(e, t);
              function o(e) {
                b(r, a, n, o, s, 'next', e);
              }
              function s(e) {
                b(r, a, n, o, s, 'throw', e);
              }
              o(void 0);
            });
          }, function () {
            return c.apply(this, arguments);
          })
        },
        {
          key: 'render',
          value: function () {
            return r.a.createElement('div', { className: o.isMobile ? d.a.mBody : d.a.body }, r.a.createElement(l.a, {
              title: 'Upgrade | Blooket',
              desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
            }), r.a.createElement(u.a, null), r.a.createElement('div', { className: d.a.slantBackground }), r.a.createElement('div', { className: d.a.regularBody }, r.a.createElement('div', { className: _.a.container }, r.a.createElement('div', { className: _.a.header }, 'Cancelled'), r.a.createElement('div', { className: _.a.subheader }, 'We were unable to process your payment'), r.a.createElement(s.a, {
              className: _.a.button,
              to: this.state.isGroup ? '/upgrade/group/price' : '/upgrade'
            }, 'Go Back'))));
          }
        }
      ]) && g(t.prototype, a), n && g(t, n), m;
    }(r.a.Component);
    E.propTypes = {
      history: c.a.object,
      user: c.a.object
    }, t.a = Object(p.c)(E);
  },
  of2q: function (e, t, a) {
    'use strict';
    a.d(t, 'b', function () {
      return P;
    });
    var n = a('q1tI'), r = a.n(n), o = a('b6Qr'), s = a('TSYQ'), i = a.n(s), c = a('17x9'), l = a.n(c), u = a('GIcp'), p = a.n(u), m = a('59d5'), d = a.n(m), f = a('iQ+n'), _ = a('dJL0'), h = a('SCqF'), y = a('anyA'), b = a('TN+F');
    function g(e) {
      return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function x(e, t, a, n, r, o, s) {
      try {
        var i = e[o](s), c = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(n, r);
    }
    function v(e, t) {
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
          var r = k(this).constructor;
          a = Reflect.construct(n, arguments, r);
        } else
          a = n.apply(this, arguments);
        return E(this, a);
      };
    }
    function E(e, t) {
      return !t || 'object' !== g(t) && 'function' != typeof t ? N(e) : t;
    }
    function N(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function k(e) {
      return (k = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var P = [
        {
          name: 'Friends',
          price: 250,
          numPlans: 10,
          color: '#1f77b4',
          id: 'price_1I4uBqJF22PLdvj8qNAayD1W'
        },
        {
          name: 'Department',
          price: 450,
          numPlans: 20,
          color: '#ffa31e',
          id: 'price_1I4uCdJF22PLdvj88Prpinyc'
        },
        {
          name: 'Small School',
          price: 750,
          numPlans: 40,
          color: '#9467bd',
          id: 'price_1I4uDMJF22PLdvj8GtAEVYUh'
        },
        {
          name: 'School',
          price: 1000,
          numPlans: 80,
          color: '#2ca02c',
          id: 'price_1I4uEKJF22PLdvj8o6asaDiT'
        }
      ], S = [
        'Get Quote Immediately',
        'Huge Discount',
        'Admin Page to Manage Plans',
        'Pay With PO or Credit Card'
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
          }), t && w(e, t);
        }(u, e);
        var t, a, n, s, c, l = C(u);
        function u(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, u), (t = l.call(this, e)).state = {
            loggedIn: !1,
            popShown: '',
            groupName: ''
          }, t.planId = '', t.choosePlan = t.choosePlan.bind(N(t)), t.goToQuote = t.goToQuote.bind(N(t)), t;
        }
        return t = u, (a = [
          {
            key: 'componentDidMount',
            value: (s = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    e.sent && this.setState({ loggedIn: !0 });
                  case 4:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), c = function () {
              var e = this, t = arguments;
              return new Promise(function (a, n) {
                var r = s.apply(e, t);
                function o(e) {
                  x(r, a, n, o, i, 'next', e);
                }
                function i(e) {
                  x(r, a, n, o, i, 'throw', e);
                }
                o(void 0);
              });
            }, function () {
              return c.apply(this, arguments);
            })
          },
          {
            key: 'choosePlan',
            value: function (e) {
              this.planId = e, this.setState({ popShown: this.state.loggedIn ? 'name' : 'login' });
            }
          },
          {
            key: 'goToQuote',
            value: function (e) {
              e.preventDefault(), this.props.history.push('/upgrade/group?id='.concat(this.planId, '&n=').concat(encodeURIComponent(this.state.groupName)));
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              return r.a.createElement('div', { className: o.isMobile ? p.a.mBody : p.a.body }, r.a.createElement(f.a, {
                title: 'Group Upgrade | Blooket',
                desc: 'Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features.'
              }), r.a.createElement(_.a, null), r.a.createElement('div', { className: p.a.slantBackground }), r.a.createElement('div', { className: p.a.regularBody }, r.a.createElement('div', { className: d.a.centerWrapper }, r.a.createElement('div', { className: d.a.header }, 'Group Plans'), r.a.createElement('div', { className: d.a.subheader }, 'Choose a Plan'), r.a.createElement('div', { className: d.a.groupsHolder }, P.map(function (t) {
                return r.a.createElement('div', {
                  className: d.a.groupContainer,
                  key: t.name,
                  role: 'button',
                  tabIndex: 0,
                  onClick: function () {
                    return e.choosePlan(t.id);
                  },
                  style: { backgroundColor: t.color }
                }, r.a.createElement('div', { className: d.a.groupName }, t.name), r.a.createElement('div', { className: d.a.groupPlans }, ''.concat(t.numPlans, ' Plus Plans')), r.a.createElement('div', { className: d.a.groupPrice }, '$'.concat(Object(b.n)(t.price))), r.a.createElement('div', { className: d.a.groupPlans }, 'Per Year'));
              })), r.a.createElement('div', { className: d.a.descContainer }, 'Choose a Plan. Pay with Credit Card or Purchase Order. Distribute Plus Plans Immediately.', r.a.createElement('b', null, 'It\'s that simple.')), r.a.createElement('div', { className: d.a.detailsHolder }, S.map(function (e, t) {
                return r.a.createElement('div', {
                  className: d.a.detailContainer,
                  key: t
                }, r.a.createElement('i', { className: i()('fas fa-check', d.a.detailCheck) }), r.a.createElement('div', { className: d.a.detailText }, e));
              })), r.a.createElement('div', { style: { height: 20 } }))), 'login' === this.state.popShown ? r.a.createElement(h.a, {
                text: 'You\'ll need an account to purchase a group plan.',
                buttonOne: {
                  text: 'Ok',
                  click: function () {
                    return e.props.history.push('/login');
                  },
                  color: 'blue'
                },
                buttonTwo: {
                  text: 'Back',
                  click: function () {
                    return e.setState({ popShown: '' });
                  },
                  color: 'blue'
                }
              }) : 'name' === this.state.popShown ? r.a.createElement(h.a, {
                text: 'Enter the name of your group/school:',
                stringValue: this.state.groupName,
                stringChange: function (t) {
                  return e.setState({ groupName: t.target.value.slice(0, 50) });
                },
                onSubmit: this.goToQuote,
                buttonOne: {
                  text: 'Get Quote',
                  click: this.goToQuote,
                  color: 'blue'
                }
              }) : null);
            }
          }
        ]) && v(t.prototype, a), n && v(t, n), u;
      }(r.a.Component);
    O.propTypes = {
      history: l.a.object,
      user: l.a.object
    }, t.a = Object(y.c)(O);
  },
  wsOr: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__background___3HAgA-camelCase{height:100vh;width:150vw;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.styles__header___hP2iW-camelCase{font-size:85px;margin:50px auto 25px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__planContainer___2MbQD-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin:45px auto;max-width:1200px}.styles__plan___3x8_N-camelCase{width:350px;background-color:#fff;border-radius:10px;margin:15px;overflow:hidden;display:flex;flex-direction:column;position:relative}.styles__plan___3x8_N-camelCase,.styles__planBackground___2vq08-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__planBackground___2vq08-camelCase{height:120px;width:400px;position:absolute;top:-30px;left:-25px;transform:rotate(5deg)}.styles__planTop___2OVTr-camelCase{font-size:65px;color:#fff;position:absolute;top:0;left:0;width:100%}.styles__planPrice___3-hmB-camelCase,.styles__planTop___2OVTr-camelCase{text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__planPrice___3-hmB-camelCase{font-size:90px;color:#3a3a3a;margin-top:110px}.styles__planSubText___3xcNi-camelCase{font-size:16px;opacity:.8;margin-bottom:25px}.styles__planDetail___2np0Y-camelCase,.styles__planSubText___3xcNi-camelCase{text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__planDetail___2np0Y-camelCase{font-size:22px}.styles__planSpacer___1kY34-camelCase{width:80%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__planButton___LZNcI-camelCase{width:80%;height:50px;line-height:50px;border-radius:7px;margin:25px auto 20px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__planButton___LZNcI-camelCase:hover{transform:scale(.97)}.styles__groupContainer___SCckQ-camelCase{margin:10px auto 50px;padding:20px;box-sizing:border-box;width:90%;max-width:840px;color:#3a3a3a;font-size:34px;font-weight:700;flex-direction:column;background-color:#fff}.styles__groupButton___3OU7f-camelCase,.styles__groupContainer___SCckQ-camelCase{font-family:Nunito,sans-serif;text-align:center;display:flex;justify-content:center;align-items:center;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px}.styles__groupButton___3OU7f-camelCase{margin:20px auto 0;background-color:#0bc2cf;cursor:pointer;text-decoration:none;outline:none;font-size:28px;height:50px;padding:0 25px;color:#fff;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__groupButton___3OU7f-camelCase:hover{transform:scale(.97)}.styles__powerBigContainer___2afTf-camelCase{width:100%;margin:20px auto;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__powerBigContainer___2afTf-camelCase,.styles__powerLeft___3E5FP-camelCase{display:flex;flex-direction:row}.styles__powerLeft___3E5FP-camelCase{width:50%;background-color:#0bc2cf;align-items:center}.styles__powerLeftText___1Nub1-camelCase{font-size:85px;line-height:83px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:right;font-family:Nunito,sans-serif;font-weight:700;color:#fff;margin:15px 25px 15px auto}.styles__powerRight___17VXu-camelCase{width:50%;display:flex;flex-direction:column}.styles__power___Hf4dp-camelCase{display:flex;flex-direction:row;align-items:center;width:100%}.styles__powerTextContainer___1j_AW-camelCase{max-width:600px;margin:10px 25px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__powerHeader___34uEW-camelCase{font-size:38px;font-weight:700;margin-bottom:7px}.styles__powerText___3FM-V-camelCase{font-size:18px}.styles__questionsHeader___3vxQA-camelCase{height:80px;line-height:80px;font-size:50px;width:80%;margin:60px auto 5px;text-align:center;font-weight:700}.styles__questionContainer___BAQ-z-camelCase,.styles__questionsHeader___3vxQA-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__questionContainer___BAQ-z-camelCase{width:calc(80% - 50px);padding:25px;margin:40px auto;display:flex;flex-direction:column;text-align:left}.styles__questionHeader___tXfRf-camelCase{font-size:32px;font-weight:700;margin-bottom:7px}.styles__questionText___3DKoJ-camelCase{font-size:22px}@media screen and (max-width:1050px){.styles__header___hP2iW-camelCase{font-size:55px}.styles__planContainer___2MbQD-camelCase{flex-direction:column}.styles__powerLeft___3E5FP-camelCase{width:100%}.styles__powerBigContainer___2afTf-camelCase{flex-direction:column}.styles__powerRight___17VXu-camelCase{width:100%}}',
      ''
    ]), t.locals = {
      background: 'styles__background___3HAgA-camelCase',
      header: 'styles__header___hP2iW-camelCase',
      planContainer: 'styles__planContainer___2MbQD-camelCase',
      plan: 'styles__plan___3x8_N-camelCase',
      planBackground: 'styles__planBackground___2vq08-camelCase',
      planTop: 'styles__planTop___2OVTr-camelCase',
      planPrice: 'styles__planPrice___3-hmB-camelCase',
      planSubText: 'styles__planSubText___3xcNi-camelCase',
      planDetail: 'styles__planDetail___2np0Y-camelCase',
      planSpacer: 'styles__planSpacer___1kY34-camelCase',
      planButton: 'styles__planButton___LZNcI-camelCase',
      groupContainer: 'styles__groupContainer___SCckQ-camelCase',
      groupButton: 'styles__groupButton___3OU7f-camelCase',
      powerBigContainer: 'styles__powerBigContainer___2afTf-camelCase',
      powerLeft: 'styles__powerLeft___3E5FP-camelCase',
      powerLeftText: 'styles__powerLeftText___1Nub1-camelCase',
      powerRight: 'styles__powerRight___17VXu-camelCase',
      power: 'styles__power___Hf4dp-camelCase',
      powerTextContainer: 'styles__powerTextContainer___1j_AW-camelCase',
      powerHeader: 'styles__powerHeader___34uEW-camelCase',
      powerText: 'styles__powerText___3FM-V-camelCase',
      questionsHeader: 'styles__questionsHeader___3vxQA-camelCase',
      questionContainer: 'styles__questionContainer___BAQ-z-camelCase',
      questionHeader: 'styles__questionHeader___tXfRf-camelCase',
      questionText: 'styles__questionText___3DKoJ-camelCase'
    };
  },
  zPSp: function (e, t, a) {
    var n = a('oEZf');
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
    a('aET+')(n, r);
    n.locals && (e.exports = n.locals);
  }
}]);
