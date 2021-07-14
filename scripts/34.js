(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{
  '+IuE': function (e, t, n) {
    'use strict';
    var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), o = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), o(n('jNRe'), t), o(n('7RQj'), t), o(n('4jJ9'), t), o(n('OtcP'), t), o(n('dLKv'), t);
  },
  '/KHN': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Light = void 0;
    var o = n('vuZh'), r = n('FsTW'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.area = new o.LightArea(), this.shadow = new r.LightShadow();
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.area.load(e.area), this.shadow.load(e.shadow));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Light = a;
  },
  '/o70': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.OutModes = void 0;
    var o = n('ubkD'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.default = o.OutMode.out;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              var t, n, i, o;
              e && (void 0 !== e.default && (this.default = e.default), this.bottom = null !== (t = e.bottom) && void 0 !== t ? t : e.default, this.left = null !== (n = e.left) && void 0 !== n ? n : e.default, this.right = null !== (i = e.right) && void 0 !== i ? i : e.default, this.top = null !== (o = e.top) && void 0 !== o ? o : e.default);
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.OutModes = r;
  },
  '01Bu': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PolygonDrawer = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(l, e);
      var t, n, i, s = u(l);
      function l() {
        return o(this, l), s.apply(this, arguments);
      }
      return t = l, (n = [
        {
          key: 'getSidesData',
          value: function (e, t) {
            var n, i, o = e.shapeData, r = null !== (i = null !== (n = null == o ? void 0 : o.sides) && void 0 !== n ? n : null == o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5;
            return {
              count: {
                denominator: 1,
                numerator: r
              },
              length: 2.66 * t / (r / 3)
            };
          }
        },
        {
          key: 'getCenter',
          value: function (e, t) {
            return {
              x: -t / (this.getSidesCount(e) / 3.5),
              y: -t / 0.76
            };
          }
        }
      ]) && r(t.prototype, n), i && r(t, i), l;
    }(n('gYxR').PolygonDrawerBase);
    t.PolygonDrawer = c;
  },
  '1X1F': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Shadow = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.blur = 0, this.color = new o.OptionsColor(), this.enable = !1, this.offset = {
            x: 0,
            y: 0
          }, this.color.value = '#000000';
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.blur && (this.blur = e.blur), this.color = o.OptionsColor.create(this.color, e.color), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.offset && (void 0 !== e.offset.x && (this.offset.x = e.offset.x), void 0 !== e.offset.y && (this.offset.y = e.offset.y)));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Shadow = r;
  },
  '1mUk': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ManualParticle = void 0;
    var o = n('C9b5'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e);
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              var t, n;
              e && (void 0 !== e.position && (this.position = {
                x: null !== (t = e.position.x) && void 0 !== t ? t : 50,
                y: null !== (n = e.position.y) && void 0 !== n ? n : 50
              }), void 0 !== e.options && (this.options = o.Utils.deepExtend({}, e.options)));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.ManualParticle = r;
  },
  '1n+5': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AnimationOptions = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.count = 0, this.enable = !1, this.speed = 1, this.sync = !1;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.count && (this.count = e.count), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.sync && (this.sync = e.sync));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.AnimationOptions = o;
  },
  '3R7e': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Opacity = void 0;
    var c = n('NiW4'), f = n('9P/A'), v = n('C9b5'), d = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(f, e);
        var t, n, i, s = u(f);
        function f() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, f), (e = s.call(this)).animation = new c.OpacityAnimation(), e.random.minimumValue = 0.1, e.value = 1, e;
        }
        return t = f, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (e) {
                r(l(f.prototype), 'load', this).call(this, e);
                var n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
                void 0 !== n && (this.animation.load(n), this.value = v.NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0));
              }
            }
          },
          {
            key: 'anim',
            get: function () {
              return this.animation;
            },
            set: function (e) {
              this.animation = e;
            }
          }
        ]) && o(t.prototype, n), i && o(t, i), f;
      }(f.ValueWithRandom);
    t.Opacity = d;
  },
  '4jJ9': function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
  },
  '4tm2': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Push = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.quantity = 4;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'load',
          value: function (e) {
            var t;
            if (void 0 !== e) {
              var n = null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
              void 0 !== n && (this.quantity = n);
            }
          }
        },
        {
          key: 'particles_nb',
          get: function () {
            return this.quantity;
          },
          set: function (e) {
            this.quantity = e;
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Push = o;
  },
  '56Cg': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.InfectionStage = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new o.OptionsColor(), this.color.value = '#ff0000', this.radius = 0, this.rate = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), this.duration = e.duration, this.infectedStage = e.infectedStage, void 0 !== e.radius && (this.radius = e.radius), void 0 !== e.rate && (this.rate = e.rate));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.InfectionStage = r;
  },
  '5Lfx': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Path = void 0;
    var o = n('7eEq'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.clamp = !0, this.delay = new o.PathDelay(), this.enable = !1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.clamp && (this.clamp = e.clamp), this.delay.load(e.delay), void 0 !== e.enable && (this.enable = e.enable), this.generator = e.generator);
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Path = r;
  },
  '6a9T': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var o = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), r = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PolygonMaskPlugin = void 0;
    var a = n('ehru'), u = n('vGWO'), s = n('qtyS'), l = new (function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.id = 'polygonMask';
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'getPlugin',
            value: function (e) {
              return new a.PolygonMaskInstance(e);
            }
          },
          {
            key: 'needsPlugin',
            value: function (e) {
              var t, n, i;
              return null !== (n = null === (t = null == e ? void 0 : e.polygon) || void 0 === t ? void 0 : t.enable) && void 0 !== n ? n : void 0 !== (null === (i = null == e ? void 0 : e.polygon) || void 0 === i ? void 0 : i.type) && e.polygon.type !== s.Type.none;
            }
          },
          {
            key: 'loadOptions',
            value: function (e, t) {
              if (this.needsPlugin(t)) {
                var n = e, i = n.polygon;
                void 0 === (null == i ? void 0 : i.load) && (n.polygon = i = new u.PolygonMask()), i.load(null == t ? void 0 : t.polygon);
              }
            }
          }
        ]) && i(t.prototype, n), o && i(t, o), e;
      }())();
    t.PolygonMaskPlugin = l, r(n('qtyS'), t);
  },
  '6hcf': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Move = void 0;
    var o = n('w1c1'), r = n('ZlLd'), a = n('gp12'), u = n('5Lfx'), s = n('CElG'), l = n('TZGI'), c = n('/o70'), f = n('C9b5'), v = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.angle = new s.MoveAngle(), this.attract = new o.Attract(), this.decay = 0, this.distance = 0, this.direction = r.MoveDirection.none, this.drift = 0, this.enable = !1, this.gravity = new l.MoveGravity(), this.path = new u.Path(), this.outModes = new c.OutModes(), this.random = !1, this.size = !1, this.speed = 2, this.straight = !1, this.trail = new a.Trail(), this.vibrate = !1, this.warp = !1;
        }
        var t, n, v;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, i;
              if (void 0 !== e) {
                void 0 !== e.angle && ('number' == typeof e.angle ? this.angle.value = e.angle : this.angle.load(e.angle)), this.attract.load(e.attract), void 0 !== e.decay && (this.decay = e.decay), void 0 !== e.direction && (this.direction = e.direction), void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.drift && (this.drift = f.NumberUtils.setRangeValue(e.drift)), void 0 !== e.enable && (this.enable = e.enable), this.gravity.load(e.gravity);
                var o = null !== (t = e.outMode) && void 0 !== t ? t : e.out_mode;
                void 0 === e.outModes && void 0 === o || ('string' == typeof e.outModes || void 0 === e.outModes && void 0 !== o ? this.outModes.load({ default: null !== (n = e.outModes) && void 0 !== n ? n : o }) : this.outModes.load(e.outModes)), this.path.load(null !== (i = e.path) && void 0 !== i ? i : e.noise), void 0 !== e.random && (this.random = e.random), void 0 !== e.size && (this.size = e.size), void 0 !== e.speed && (this.speed = f.NumberUtils.setRangeValue(e.speed)), void 0 !== e.straight && (this.straight = e.straight), this.trail.load(e.trail), void 0 !== e.vibrate && (this.vibrate = e.vibrate), void 0 !== e.warp && (this.warp = e.warp);
              }
            }
          },
          {
            key: 'collisions',
            get: function () {
              return !1;
            },
            set: function (e) {
            }
          },
          {
            key: 'bounce',
            get: function () {
              return this.collisions;
            },
            set: function (e) {
              this.collisions = e;
            }
          },
          {
            key: 'out_mode',
            get: function () {
              return this.outMode;
            },
            set: function (e) {
              this.outMode = e;
            }
          },
          {
            key: 'outMode',
            get: function () {
              return this.outModes.default;
            },
            set: function (e) {
              this.outModes.default = e;
            }
          },
          {
            key: 'noise',
            get: function () {
              return this.path;
            },
            set: function (e) {
              this.path = e;
            }
          }
        ]) && i(t.prototype, n), v && i(t, v), e;
      }();
    t.Move = v;
  },
  '7Ohm': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmitterLife = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.count && (this.count = e.count), void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.duration && (this.duration = e.duration));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.EmitterLife = o;
  },
  '7RQj': function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
  },
  '7TyK': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function r(e) {
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
        var n, i = u(e);
        if (t) {
          var o = u(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return a(this, n);
      };
    }
    function a(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.SplitFactor = void 0;
    var s = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && o(e, t);
      }(n, e);
      var t = r(n);
      function n() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, n), (e = t.call(this)).value = 3, e;
      }
      return n;
    }(n('9P/A').ValueWithRandom);
    t.SplitFactor = s;
  },
  '7eEq': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function r(e) {
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
        var n, i = u(e);
        if (t) {
          var o = u(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return a(this, n);
      };
    }
    function a(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PathDelay = void 0;
    var s = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && o(e, t);
      }(n, e);
      var t = r(n);
      function n() {
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, n), t.call(this);
      }
      return n;
    }(n('9P/A').ValueWithRandom);
    t.PathDelay = s;
  },
  '7puq': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Events = void 0;
    var o = n('Ckc7'), r = n('G7pQ'), a = n('W13A'), u = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.onClick = new o.ClickEvent(), this.onDiv = new r.DivEvent(), this.onHover = new a.HoverEvent(), this.resize = !0;
        }
        var t, n, u;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, i;
              if (void 0 !== e) {
                this.onClick.load(null !== (t = e.onClick) && void 0 !== t ? t : e.onclick);
                var o = null !== (n = e.onDiv) && void 0 !== n ? n : e.ondiv;
                void 0 !== o && (o instanceof Array ? this.onDiv = o.map(function (e) {
                  var t = new r.DivEvent();
                  return t.load(e), t;
                }) : (this.onDiv = new r.DivEvent(), this.onDiv.load(o))), this.onHover.load(null !== (i = e.onHover) && void 0 !== i ? i : e.onhover), void 0 !== e.resize && (this.resize = e.resize);
              }
            }
          },
          {
            key: 'onclick',
            get: function () {
              return this.onClick;
            },
            set: function (e) {
              this.onClick = e;
            }
          },
          {
            key: 'ondiv',
            get: function () {
              return this.onDiv;
            },
            set: function (e) {
              this.onDiv = e;
            }
          },
          {
            key: 'onhover',
            get: function () {
              return this.onHover;
            },
            set: function (e) {
              this.onHover = e;
            }
          }
        ]) && i(t.prototype, n), u && i(t, u), e;
      }();
    t.Events = u;
  },
  '887v': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Inline = void 0;
    var o = n('qtyS'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.arrangement = o.InlineArrangement.onePerPoint;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && void 0 !== e.arrangement && (this.arrangement = e.arrangement);
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Inline = r;
  },
  '9P/A': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ValueWithRandom = void 0;
    var o = n('Lgoq'), r = n('C9b5'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.random = new o.Random(), this.value = 0;
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && ('boolean' == typeof e.random ? this.random.enable = e.random : this.random.load(e.random), void 0 !== e.value && (this.value = r.NumberUtils.setRangeValue(e.value, this.random.enable ? this.random.minimumValue : void 0)));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.ValueWithRandom = a;
  },
  '9XT8': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.RepulseDiv = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(c, e);
      var t, n, i, s = u(c);
      function c() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (e = s.call(this)).selectors = [], e;
      }
      return t = c, (n = [
        {
          key: 'load',
          value: function (e) {
            r(l(c.prototype), 'load', this).call(this, e), void 0 !== e && (void 0 !== e.ids && (this.ids = e.ids), void 0 !== e.selectors && (this.selectors = e.selectors));
          }
        },
        {
          key: 'ids',
          get: function () {
            return this.selectors instanceof Array ? this.selectors.map(function (e) {
              return e.replace('#', '');
            }) : this.selectors.replace('#', '');
          },
          set: function (e) {
            this.selectors = e instanceof Array ? e.map(function () {
              return '#'.concat(e);
            }) : '#'.concat(e);
          }
        }
      ]) && o(t.prototype, n), i && o(t, i), c;
    }(n('Tdtd').RepulseBase);
    t.RepulseDiv = c;
  },
  AJiq: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Collider = void 0;
    var a = n('ZlLd'), u = n('C9b5');
    var s = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.container = t;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'isEnabled',
          value: function (e) {
            return e.options.collisions.enable;
          }
        },
        {
          key: 'reset',
          value: function () {
          }
        },
        {
          key: 'interact',
          value: function (e) {
            var t, n = this.container, o = e.getPosition(), r = i(n.particles.quadTree.queryCircle(o, 2 * e.getRadius()));
            try {
              for (r.s(); !(t = r.n()).done;) {
                var a = t.value;
                if (e !== a && a.options.collisions.enable && e.options.collisions.mode === a.options.collisions.mode && !a.destroyed && !a.spawning) {
                  var s = a.getPosition();
                  u.NumberUtils.getDistance(o, s) <= e.getRadius() + a.getRadius() && this.resolveCollision(e, a);
                }
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          }
        },
        {
          key: 'resolveCollision',
          value: function (e, t) {
            switch (e.options.collisions.mode) {
            case a.CollisionMode.absorb:
              this.absorb(e, t);
              break;
            case a.CollisionMode.bounce:
              !function (e, t) {
                u.Utils.circleBounce(u.Utils.circleBounceDataFromParticle(e), u.Utils.circleBounceDataFromParticle(t));
              }(e, t);
              break;
            case a.CollisionMode.destroy:
              !function (e, t) {
                void 0 === e.getRadius() && void 0 !== t.getRadius() ? e.destroy() : void 0 !== e.getRadius() && void 0 === t.getRadius() ? t.destroy() : void 0 !== e.getRadius() && void 0 !== t.getRadius() && (e.getRadius() >= t.getRadius() ? t.destroy() : e.destroy());
              }(e, t);
            }
          }
        },
        {
          key: 'absorb',
          value: function (e, t) {
            var n = this.container, i = n.actualOptions.fpsLimit / 1000;
            if (void 0 === e.getRadius() && void 0 !== t.getRadius())
              e.destroy();
            else if (void 0 !== e.getRadius() && void 0 === t.getRadius())
              t.destroy();
            else if (void 0 !== e.getRadius() && void 0 !== t.getRadius())
              if (e.getRadius() >= t.getRadius()) {
                var o = u.NumberUtils.clamp(e.getRadius() / t.getRadius(), 0, t.getRadius()) * i;
                e.size.value += o, t.size.value -= o, t.getRadius() <= n.retina.pixelRatio && (t.size.value = 0, t.destroy());
              } else {
                var r = u.NumberUtils.clamp(t.getRadius() / e.getRadius(), 0, e.getRadius()) * i;
                e.size.value -= r, t.size.value += r, e.getRadius() <= n.retina.pixelRatio && (e.size.value = 0, e.destroy());
              }
          }
        }
      ]) && r(t.prototype, n), o && r(t, o), e;
    }();
    t.Collider = s;
  },
  AP3k: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.CollisionsOverlap = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !0, this.retries = 0;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.retries && (this.retries = e.retries));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.CollisionsOverlap = o;
  },
  Ab0e: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Destroy = void 0;
    var o = n('ZlLd'), r = n('IO6t'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.mode = o.DestroyMode.none, this.split = new r.Split();
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.mode && (this.mode = e.mode), this.split.load(e.split));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Destroy = a;
  },
  Aife: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Bouncer = void 0;
    var a = n('C9b5'), u = n('ZlLd'), s = n('q8jH'), l = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.actualOptions, n = e.interactivity.mouse, i = t.interactivity.events, o = i.onDiv;
              return n.position && i.onHover.enable && a.Utils.isInArray(u.HoverMode.bounce, i.onHover.mode) || a.Utils.isDivModeEnabled(u.DivMode.bounce, o);
            }
          },
          {
            key: 'interact',
            value: function () {
              var e = this, t = this.container, n = t.actualOptions.interactivity.events, i = t.interactivity.status === a.Constants.mouseMoveEvent, o = n.onHover.enable, r = n.onHover.mode, s = n.onDiv;
              i && o && a.Utils.isInArray(u.HoverMode.bounce, r) ? this.processMouseBounce() : a.Utils.divModeExecute(u.DivMode.bounce, s, function (t, n) {
                return e.singleSelectorBounce(t, n);
              });
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'processMouseBounce',
            value: function () {
              var e = this.container, t = 10 * e.retina.pixelRatio, n = e.interactivity.mouse.position, i = e.retina.bounceModeDistance;
              n && this.processBounce(n, i, new a.Circle(n.x, n.y, i + t));
            }
          },
          {
            key: 'singleSelectorBounce',
            value: function (e, t) {
              var n = this, i = this.container, o = document.querySelectorAll(e);
              o.length && o.forEach(function (e) {
                var o = e, r = i.retina.pixelRatio, s = {
                    x: (o.offsetLeft + o.offsetWidth / 2) * r,
                    y: (o.offsetTop + o.offsetHeight / 2) * r
                  }, l = o.offsetWidth / 2 * r, c = 10 * r, f = t.type === u.DivType.circle ? new a.Circle(s.x, s.y, l + c) : new a.Rectangle(o.offsetLeft * r - c, o.offsetTop * r - c, o.offsetWidth * r + 2 * c, o.offsetHeight * r + 2 * c);
                n.processBounce(s, l, f);
              });
            }
          },
          {
            key: 'processBounce',
            value: function (e, t, n) {
              var o, r = i(this.container.particles.quadTree.query(n));
              try {
                for (r.s(); !(o = r.n()).done;) {
                  var u = o.value;
                  n instanceof a.Circle ? a.Utils.circleBounce(a.Utils.circleBounceDataFromParticle(u), {
                    position: e,
                    radius: t,
                    mass: Math.pow(t, 2) * Math.PI / 2,
                    velocity: s.Vector.create(0, 0),
                    factor: {
                      horizontal: 0,
                      vertical: 0
                    }
                  }) : n instanceof a.Rectangle && a.Utils.rectBounce(u, a.Utils.calculateBounds(e, t));
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Bouncer = l;
  },
  BikP: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Motion = void 0;
    var o = n('Ucb3'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.disable = !1, this.reduce = new o.MotionReduce();
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.disable && (this.disable = e.disable), this.reduce.load(e.reduce));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Motion = r;
  },
  'C+1W': function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Infecter = void 0;
    var a = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.container = t;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'isEnabled',
          value: function () {
            return this.container.actualOptions.infection.enable;
          }
        },
        {
          key: 'reset',
          value: function () {
          }
        },
        {
          key: 'interact',
          value: function (e, t) {
            var n, o, r = e.infecter;
            if (r.updateInfection(t.value), void 0 !== r.infectionStage) {
              var a = this.container, u = a.actualOptions.infection;
              if (u.enable && !(u.stages.length < 1)) {
                var s, l = u.stages[r.infectionStage], c = a.retina.pixelRatio, f = 2 * e.getRadius() + l.radius * c, v = e.getPosition(), d = null !== (n = l.infectedStage) && void 0 !== n ? n : r.infectionStage, y = a.particles.quadTree.queryCircle(v, f), h = l.rate, p = y.length, b = i(y);
                try {
                  for (b.s(); !(s = b.n()).done;) {
                    var m = s.value;
                    if (!(m === e || m.destroyed || m.spawning || void 0 !== m.infecter.infectionStage && m.infecter.infectionStage === r.infectionStage)) {
                      var g = m.infecter;
                      if (Math.random() < h / p)
                        if (void 0 === g.infectionStage)
                          g.startInfection(d);
                        else if (g.infectionStage < r.infectionStage)
                          g.updateInfectionStage(d);
                        else if (g.infectionStage > r.infectionStage) {
                          var w = u.stages[g.infectionStage], O = null !== (o = null == w ? void 0 : w.infectedStage) && void 0 !== o ? o : g.infectionStage;
                          r.updateInfectionStage(O);
                        }
                    }
                  }
                } catch (e) {
                  b.e(e);
                } finally {
                  b.f();
                }
              }
            }
          }
        }
      ]) && r(t.prototype, n), o && r(t, o), e;
    }();
    t.Infecter = a;
  },
  CElG: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.MoveAngle = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.offset = 0, this.value = 90;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.offset && (this.offset = e.offset), void 0 !== e.value && (this.value = e.value));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.MoveAngle = o;
  },
  CPUN: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.BackgroundMaskCover = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new o.OptionsColor(), this.opacity = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.BackgroundMaskCover = r;
  },
  Ckc7: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ClickEvent = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.mode = [];
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.ClickEvent = o;
  },
  Cx7u: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Attract = void 0;
    var o = n('ZlLd'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.distance = 200, this.duration = 0.4, this.easing = o.EasingType.easeOutQuad, this.factor = 1, this.maxSpeed = 50, this.speed = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.duration && (this.duration = e.duration), void 0 !== e.easing && (this.easing = e.easing), void 0 !== e.factor && (this.factor = e.factor), void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed), void 0 !== e.speed && (this.speed = e.speed));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Attract = r;
  },
  D98Q: function (e, t, n) {
    'use strict';
    var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), o = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), o(n('ZJaX'), t);
  },
  DLAq: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Rotate = void 0;
    var c = n('k9Lu'), f = n('ZlLd'), v = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(v, e);
        var t, n, i, s = u(v);
        function v() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, v), (e = s.call(this)).animation = new c.RotateAnimation(), e.direction = f.RotateDirection.clockwise, e.path = !1, e.value = 0, e;
        }
        return t = v, (n = [{
            key: 'load',
            value: function (e) {
              e && (r(l(v.prototype), 'load', this).call(this, e), void 0 !== e.direction && (this.direction = e.direction), this.animation.load(e.animation), void 0 !== e.path && (this.path = e.path));
            }
          }]) && o(t.prototype, n), i && o(t, i), v;
      }(n('9P/A').ValueWithRandom);
    t.Rotate = v;
  },
  Dp6u: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Links = void 0;
    var o = n('ERyf'), r = n('cWpP'), a = n('vRcM'), u = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.blink = !1, this.color = new a.OptionsColor(), this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new o.LinksShadow(), this.triangles = new r.LinksTriangle(), this.width = 1, this.warp = !1;
        }
        var t, n, u;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.id && (this.id = e.id), void 0 !== e.blink && (this.blink = e.blink), this.color = a.OptionsColor.create(this.color, e.color), void 0 !== e.consent && (this.consent = e.consent), void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.frequency && (this.frequency = e.frequency), void 0 !== e.opacity && (this.opacity = e.opacity), this.shadow.load(e.shadow), this.triangles.load(e.triangles), void 0 !== e.width && (this.width = e.width), void 0 !== e.warp && (this.warp = e.warp));
            }
          }]) && i(t.prototype, n), u && i(t, u), e;
      }();
    t.Links = u;
  },
  E6pE: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ParticlesOptions = void 0;
    var o = n('Dp6u'), r = n('6hcf'), a = n('Zb7y'), u = n('3R7e'), s = n('tNle'), l = n('LpZt'), c = n('DLAq'), f = n('1X1F'), v = n('Iy9P'), d = n('wbcO'), y = n('GbOK'), h = n('W31w'), p = n('yCRH'), b = n('za7v'), m = n('Ab0e'), g = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.bounce = new b.Bounce(), this.collisions = new d.Collisions(), this.color = new h.AnimatableColor(), this.destroy = new m.Destroy(), this.life = new p.Life(), this.links = new o.Links(), this.move = new r.Move(), this.number = new a.ParticlesNumber(), this.opacity = new u.Opacity(), this.reduceDuplicates = !1, this.rotate = new c.Rotate(), this.shadow = new f.Shadow(), this.shape = new s.Shape(), this.size = new l.Size(), this.stroke = new v.Stroke(), this.twinkle = new y.Twinkle();
        }
        var t, n, g;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, i, o, r, a, u;
              if (void 0 !== e) {
                this.bounce.load(e.bounce), this.color = h.AnimatableColor.create(this.color, e.color), this.destroy.load(e.destroy), this.life.load(e.life);
                var s = null !== (n = null !== (t = e.links) && void 0 !== t ? t : e.lineLinked) && void 0 !== n ? n : e.line_linked;
                void 0 !== s && this.links.load(s), this.move.load(e.move), this.number.load(e.number), this.opacity.load(e.opacity), void 0 !== e.reduceDuplicates && (this.reduceDuplicates = e.reduceDuplicates), this.rotate.load(e.rotate), this.shape.load(e.shape), this.size.load(e.size), this.shadow.load(e.shadow), this.twinkle.load(e.twinkle);
                var l = null !== (o = null === (i = e.move) || void 0 === i ? void 0 : i.collisions) && void 0 !== o ? o : null === (r = e.move) || void 0 === r ? void 0 : r.bounce;
                void 0 !== l && (this.collisions.enable = l), this.collisions.load(e.collisions);
                var c = null !== (a = e.stroke) && void 0 !== a ? a : null === (u = e.shape) || void 0 === u ? void 0 : u.stroke;
                void 0 !== c && (c instanceof Array ? this.stroke = c.map(function (e) {
                  var t = new v.Stroke();
                  return t.load(e), t;
                }) : (this.stroke instanceof Array && (this.stroke = new v.Stroke()), this.stroke.load(c)));
              }
            }
          },
          {
            key: 'line_linked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          },
          {
            key: 'lineLinked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          }
        ]) && i(t.prototype, n), g && i(t, g), e;
      }();
    t.ParticlesOptions = g;
  },
  ERyf: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LinksShadow = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.blur = 5, this.color = new o.OptionsColor(), this.enable = !1, this.color.value = '#00ff00';
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.blur && (this.blur = e.blur), this.color = o.OptionsColor.create(this.color, e.color), void 0 !== e.enable && (this.enable = e.enable));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.LinksShadow = r;
  },
  Ej6A: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AbsorberSize = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(c, e);
      var t, n, i, s = u(c);
      function c() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (e = s.call(this)).density = 5, e.random.minimumValue = 1, e.value = 50, e;
      }
      return t = c, (n = [{
          key: 'load',
          value: function (e) {
            e && (r(l(c.prototype), 'load', this).call(this, e), void 0 !== e.density && (this.density = e.density), void 0 !== e.limit && (this.limit = e.limit), void 0 !== e.limit && (this.limit = e.limit));
          }
        }]) && o(t.prototype, n), i && o(t, i), c;
    }(n('9P/A').ValueWithRandom);
    t.AbsorberSize = c;
  },
  Eshq: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function r(e) {
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
        var n, i = u(e);
        if (t) {
          var o = u(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return a(this, n);
      };
    }
    function a(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.SplitRate = void 0;
    var s = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && o(e, t);
      }(n, e);
      var t = r(n);
      function n() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, n), (e = t.call(this)).value = {
          min: 4,
          max: 9
        }, e;
      }
      return n;
    }(n('9P/A').ValueWithRandom);
    t.SplitRate = s;
  },
  FQ7a: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.TrailMaker = void 0;
    var o = n('C9b5'), r = n('ZlLd'), a = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t, this.delay = 0;
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'interact',
            value: function (e) {
              var t, n, i, o;
              if (this.container.retina.reduceFactor) {
                var r = this.container, a = r.actualOptions.interactivity.modes.trail, u = 1000 * a.delay / this.container.retina.reduceFactor;
                if (this.delay < u && (this.delay += e.value), !(this.delay < u)) {
                  var s = !0;
                  a.pauseOnStop && (r.interactivity.mouse.position === this.lastPosition || (null === (t = r.interactivity.mouse.position) || void 0 === t ? void 0 : t.x) === (null === (n = this.lastPosition) || void 0 === n ? void 0 : n.x) && (null === (i = r.interactivity.mouse.position) || void 0 === i ? void 0 : i.y) === (null === (o = this.lastPosition) || void 0 === o ? void 0 : o.y)) && (s = !1), r.interactivity.mouse.position ? this.lastPosition = {
                    x: r.interactivity.mouse.position.x,
                    y: r.interactivity.mouse.position.y
                  } : delete this.lastPosition, s && r.particles.push(a.quantity, r.interactivity.mouse, a.particles), this.delay -= u;
                }
              }
            }
          },
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.actualOptions, n = e.interactivity.mouse, i = t.interactivity.events;
              return n.clicking && n.inside && !!n.position && o.Utils.isInArray(r.ClickMode.trail, i.onClick.mode) || n.inside && !!n.position && o.Utils.isInArray(r.HoverMode.trail, i.onHover.mode);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.TrailMaker = a;
  },
  FUZa: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Lighter = void 0;
    var o = n('C9b5'), r = n('ubkD'), a = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'interact',
            value: function (e) {
              var t = this.container;
              if (t.actualOptions.interactivity.events.onHover.enable && 'mousemove' === t.interactivity.status) {
                var n = this.container.interactivity.mouse.position;
                n && t.canvas.drawParticleShadow(e, n);
              }
            }
          },
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.interactivity.mouse, n = e.actualOptions.interactivity.events;
              if (!n.onHover.enable || !t.position)
                return !1;
              var i = n.onHover.mode;
              return o.Utils.isInArray(r.HoverMode.light, i);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Lighter = a;
  },
  FsTW: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LightShadow = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new o.OptionsColor(), this.color.value = '#000000', this.length = 2000;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.color = o.OptionsColor.create(this.color, e.color), void 0 !== e.length && (this.length = e.length));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.LightShadow = r;
  },
  FvHc: function (e, t, n) {
    'use strict';
    var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), o = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), o(n('q39K'), t);
  },
  G7pQ: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.DivEvent = void 0;
    var o = n('ZlLd'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.selectors = [], this.enable = !1, this.mode = [], this.type = o.DivType.circle;
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n;
              if (void 0 !== e) {
                var i = null !== (n = null !== (t = e.ids) && void 0 !== t ? t : e.elementId) && void 0 !== n ? n : e.el;
                void 0 !== i && (this.ids = i), void 0 !== e.selectors && (this.selectors = e.selectors), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.type && (this.type = e.type);
              }
            }
          },
          {
            key: 'elementId',
            get: function () {
              return this.ids;
            },
            set: function (e) {
              this.ids = e;
            }
          },
          {
            key: 'el',
            get: function () {
              return this.elementId;
            },
            set: function (e) {
              this.elementId = e;
            }
          },
          {
            key: 'ids',
            get: function () {
              return this.selectors instanceof Array ? this.selectors.map(function (e) {
                return e.replace('#', '');
              }) : this.selectors.replace('#', '');
            },
            set: function (e) {
              this.selectors = e instanceof Array ? e.map(function (e) {
                return '#'.concat(e);
              }) : '#'.concat(e);
            }
          }
        ]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.DivEvent = r;
  },
  GMfk: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Interactivity = void 0;
    var o = n('ZlLd'), r = n('7puq'), a = n('mwEM'), u = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.detectsOn = o.InteractivityDetect.canvas, this.events = new r.Events(), this.modes = new a.Modes();
        }
        var t, n, u;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, i;
              if (void 0 !== e) {
                var r = null !== (t = e.detectsOn) && void 0 !== t ? t : e.detect_on;
                void 0 !== r && (this.detectsOn = r), this.events.load(e.events), this.modes.load(e.modes), !0 === (null === (i = null === (n = e.modes) || void 0 === n ? void 0 : n.slow) || void 0 === i ? void 0 : i.active) && (this.events.onHover.mode instanceof Array ? this.events.onHover.mode.indexOf(o.HoverMode.slow) < 0 && this.events.onHover.mode.push(o.HoverMode.slow) : this.events.onHover.mode !== o.HoverMode.slow && (this.events.onHover.mode = [
                  this.events.onHover.mode,
                  o.HoverMode.slow
                ]));
              }
            }
          },
          {
            key: 'detect_on',
            get: function () {
              return this.detectsOn;
            },
            set: function (e) {
              this.detectsOn = e;
            }
          }
        ]) && i(t.prototype, n), u && i(t, u), e;
      }();
    t.Interactivity = u;
  },
  GbOK: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Twinkle = void 0;
    var o = n('J8hw'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.lines = new o.TwinkleValues(), this.particles = new o.TwinkleValues();
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.lines.load(e.lines), this.particles.load(e.particles));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Twinkle = r;
  },
  IJxr: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Connector = void 0;
    var a = n('C9b5'), u = n('ubkD'), s = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.interactivity.mouse, n = e.actualOptions.interactivity.events;
              if (!n.onHover.enable || !t.position)
                return !1;
              var i = n.onHover.mode;
              return a.Utils.isInArray(u.HoverMode.connect, i);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'interact',
            value: function () {
              var e = this.container;
              if (e.actualOptions.interactivity.events.onHover.enable && 'mousemove' === e.interactivity.status) {
                var t = e.interactivity.mouse.position;
                if (!t)
                  return;
                var n, o = Math.abs(e.retina.connectModeRadius), r = e.particles.quadTree.queryCircle(t, o), a = 0, u = i(r);
                try {
                  for (u.s(); !(n = u.n()).done;) {
                    var s, l = n.value, c = l.getPosition(), f = i(r.slice(a + 1));
                    try {
                      for (f.s(); !(s = f.n()).done;) {
                        var v = s.value, d = v.getPosition(), y = Math.abs(e.retina.connectModeDistance), h = Math.abs(c.x - d.x), p = Math.abs(c.y - d.y);
                        h < y && p < y && e.canvas.drawConnectLine(l, v);
                      }
                    } catch (e) {
                      f.e(e);
                    } finally {
                      f.f();
                    }
                    ++a;
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Connector = s;
  },
  IO6t: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Split = void 0;
    var o = n('7TyK'), r = n('Eshq'), a = n('C9b5'), u = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.count = 1, this.factor = new o.SplitFactor(), this.rate = new r.SplitRate(), this.sizeOffset = !0;
        }
        var t, n, u;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.count && (this.count = e.count), this.factor.load(e.factor), this.rate.load(e.rate), void 0 !== e.particles && (this.particles = a.Utils.deepExtend({}, e.particles)), void 0 !== e.sizeOffset && (this.sizeOffset = e.sizeOffset));
            }
          }]) && i(t.prototype, n), u && i(t, u), e;
      }();
    t.Split = u;
  },
  Iy9P: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Stroke = void 0;
    var o = n('W31w'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.width = 0;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.AnimatableColor.create(this.color, e.color)), void 0 !== e.width && (this.width = e.width), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Stroke = r;
  },
  J8hw: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.TwinkleValues = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.enable = !1, this.frequency = 0.05, this.opacity = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.frequency && (this.frequency = e.frequency), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.TwinkleValues = r;
  },
  KbmP: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LocalSvg = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.path = [], this.size = {
          height: 0,
          width: 0
        };
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.path && (this.path = e.path), void 0 !== e.size && (void 0 !== e.size.width && (this.size.width = e.size.width), void 0 !== e.size.height && (this.size.height = e.size.height)));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.LocalSvg = o;
  },
  KdG0: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmitterRate = void 0;
    var o = n('C9b5'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.quantity = 1, this.delay = 0.1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.quantity && (this.quantity = o.NumberUtils.setRangeValue(e.quantity)), void 0 !== e.delay && (this.delay = o.NumberUtils.setRangeValue(e.delay)));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.EmitterRate = r;
  },
  KttE: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ConnectLinks = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.opacity = 0.5;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && void 0 !== e.opacity && (this.opacity = e.opacity);
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.ConnectLinks = o;
  },
  LPIU: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Remove = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.quantity = 2;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'load',
          value: function (e) {
            var t;
            if (void 0 !== e) {
              var n = null !== (t = e.quantity) && void 0 !== t ? t : e.particles_nb;
              void 0 !== n && (this.quantity = n);
            }
          }
        },
        {
          key: 'particles_nb',
          get: function () {
            return this.quantity;
          },
          set: function (e) {
            this.quantity = e;
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Remove = o;
  },
  LfGR: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Draw = void 0;
    var o = n('sJdS'), r = n('vRcM'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.enable = !1, this.stroke = new o.DrawStroke();
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (void 0 !== e) {
                void 0 !== e.enable && (this.enable = e.enable);
                var n = null !== (t = e.stroke) && void 0 !== t ? t : {
                  color: e.lineColor,
                  width: e.lineWidth
                };
                this.stroke.load(n);
              }
            }
          },
          {
            key: 'lineWidth',
            get: function () {
              return this.stroke.width;
            },
            set: function (e) {
              this.stroke.width = e;
            }
          },
          {
            key: 'lineColor',
            get: function () {
              return this.stroke.color;
            },
            set: function (e) {
              this.stroke.color = r.OptionsColor.create(this.stroke.color, e);
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Draw = a;
  },
  Lgoq: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Random = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.minimumValue = 0;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.minimumValue && (this.minimumValue = e.minimumValue));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Random = o;
  },
  LpZt: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Size = void 0;
    var c = n('brjH'), f = n('9P/A'), v = n('C9b5'), d = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(f, e);
        var t, n, i, s = u(f);
        function f() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, f), (e = s.call(this)).animation = new c.SizeAnimation(), e.random.minimumValue = 1, e.value = 3, e;
        }
        return t = f, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (e) {
                r(l(f.prototype), 'load', this).call(this, e);
                var n = null !== (t = e.animation) && void 0 !== t ? t : e.anim;
                void 0 !== n && (this.animation.load(n), this.value = v.NumberUtils.setRangeValue(this.value, this.animation.enable ? this.animation.minimumValue : void 0));
              }
            }
          },
          {
            key: 'anim',
            get: function () {
              return this.animation;
            },
            set: function (e) {
              this.animation = e;
            }
          }
        ]) && o(t.prototype, n), i && o(t, i), f;
      }(f.ValueWithRandom);
    t.Size = d;
  },
  Lut8: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.CircleDrawer = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'getSidesCount',
          value: function () {
            return 12;
          }
        },
        {
          key: 'draw',
          value: function (e, t, n) {
            e.arc(0, 0, n, 0, 2 * Math.PI, !1);
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.CircleDrawer = o;
  },
  NiW4: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.OpacityAnimation = void 0;
    var c = n('muAV'), f = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(f, e);
        var t, n, i, s = u(f);
        function f() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, f), (e = s.call(this)).destroy = c.DestroyType.none, e.enable = !1, e.minimumValue = 0, e.speed = 2, e.startValue = c.StartValueType.random, e.sync = !1, e;
        }
        return t = f, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (void 0 !== e) {
                r(l(f.prototype), 'load', this).call(this, e), void 0 !== e.destroy && (this.destroy = e.destroy), void 0 !== e.enable && (this.enable = e.enable);
                var n = null !== (t = e.minimumValue) && void 0 !== t ? t : e.opacity_min;
                void 0 !== n && (this.minimumValue = n), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.startValue && (this.startValue = e.startValue), void 0 !== e.sync && (this.sync = e.sync);
              }
            }
          },
          {
            key: 'opacity_min',
            get: function () {
              return this.minimumValue;
            },
            set: function (e) {
              this.minimumValue = e;
            }
          }
        ]) && o(t.prototype, n), i && o(t, i), f;
      }(n('1n+5').AnimationOptions);
    t.OpacityAnimation = f;
  },
  OtcP: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
  },
  'P+GZ': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Density = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.area = 800, this.factor = 1000;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'load',
          value: function (e) {
            var t;
            if (void 0 !== e) {
              void 0 !== e.enable && (this.enable = e.enable);
              var n = null !== (t = e.area) && void 0 !== t ? t : e.value_area;
              void 0 !== n && (this.area = n), void 0 !== e.factor && (this.factor = e.factor);
            }
          }
        },
        {
          key: 'value_area',
          get: function () {
            return this.area;
          },
          set: function (e) {
            this.area = e;
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Density = o;
  },
  PFhk: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmitterSize = void 0;
    var o = n('ZlLd'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.mode = o.SizeMode.percent, this.height = 0, this.width = 0;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.height && (this.height = e.height), void 0 !== e.width && (this.width = e.width));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.EmitterSize = r;
  },
  PeBj: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Slow = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.factor = 3, this.radius = 200;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.factor && (this.factor = e.factor), void 0 !== e.radius && (this.radius = e.radius));
          }
        },
        {
          key: 'active',
          get: function () {
            return !1;
          },
          set: function (e) {
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Slow = o;
  },
  Qbha: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var a = this && this.__awaiter || function (e, t, n, i) {
      return new (n || (n = Promise))(function (o, r) {
        function a(e) {
          try {
            s(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function u(e) {
          try {
            s(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, u);
        }
        s((i = i.apply(e, t || [])).next());
      });
    };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.TextDrawer = void 0;
    var u = n('C9b5'), s = n('ZlLd'), l = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e);
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'getSidesCount',
            value: function () {
              return 12;
            }
          },
          {
            key: 'init',
            value: function (e) {
              var t;
              return a(this, void 0, void 0, regeneratorRuntime.mark(function n() {
                var o, r, a, l, c;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch (n.prev = n.next) {
                    case 0:
                      if (o = e.actualOptions, !u.Utils.isInArray(s.ShapeType.char, o.particles.shape.type) && !u.Utils.isInArray(s.ShapeType.character, o.particles.shape.type)) {
                        n.next = 26;
                        break;
                      }
                      if (!((r = null !== (t = o.particles.shape.options[s.ShapeType.character]) && void 0 !== t ? t : o.particles.shape.options[s.ShapeType.char]) instanceof Array)) {
                        n.next = 23;
                        break;
                      }
                      a = i(r), n.prev = 5, a.s();
                    case 7:
                      if ((l = a.n()).done) {
                        n.next = 13;
                        break;
                      }
                      return c = l.value, n.next = 11, u.Utils.loadFont(c);
                    case 11:
                      n.next = 7;
                      break;
                    case 13:
                      n.next = 18;
                      break;
                    case 15:
                      n.prev = 15, n.t0 = n.catch(5), a.e(n.t0);
                    case 18:
                      return n.prev = 18, a.f(), n.finish(18);
                    case 21:
                      n.next = 26;
                      break;
                    case 23:
                      if (void 0 === r) {
                        n.next = 26;
                        break;
                      }
                      return n.next = 26, u.Utils.loadFont(r);
                    case 26:
                    case 'end':
                      return n.stop();
                    }
                }, n, null, [[
                    5,
                    15,
                    18,
                    21
                  ]]);
              }));
            }
          },
          {
            key: 'draw',
            value: function (e, t, n) {
              var i = t.shapeData;
              if (void 0 !== i) {
                var o = i.value;
                if (void 0 !== o) {
                  var r = t;
                  void 0 === r.text && (r.text = o instanceof Array ? u.Utils.itemFromArray(o, t.randomIndexData) : o);
                  var a = r.text, s = i.style, l = i.weight, c = 2 * Math.round(n), f = i.font, v = t.fill, d = a.length * n / 2;
                  e.font = ''.concat(s, ' ').concat(l, ' ').concat(c, 'px "').concat(f, '"');
                  var y = {
                    x: -d,
                    y: n / 2
                  };
                  v ? e.fillText(a, y.x, y.y) : e.strokeText(a, y.x, y.y);
                }
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.TextDrawer = l;
  },
  QkZH: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Background = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new o.OptionsColor(), this.color.value = '', this.image = '', this.position = '', this.repeat = '', this.size = '', this.opacity = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), void 0 !== e.image && (this.image = e.image), void 0 !== e.position && (this.position = e.position), void 0 !== e.repeat && (this.repeat = e.repeat), void 0 !== e.size && (this.size = e.size), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Background = r;
  },
  Qwhl: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ColorAnimation = void 0;
    var o = n('C9b5'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.sync = !0;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.count && (this.count = e.count), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.offset && (this.offset = o.NumberUtils.setRangeValue(e.offset)), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.sync && (this.sync = e.sync));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.ColorAnimation = r;
  },
  QyzU: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Emitters = void 0;
    var a = n('URwT'), u = n('C9b5'), s = n('nxdw'), l = n('D98Q'), c = function () {
        function e(t) {
          var n = this;
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t, this.array = [], this.emitters = [], this.interactivityEmitters = [];
          var i = t;
          i.getEmitter = function (e) {
            return void 0 === e || 'number' == typeof e ? n.array[e || 0] : n.array.find(function (t) {
              return t.name === e;
            });
          }, i.addEmitter = function (e, t) {
            return n.addEmitter(e, t);
          }, i.playEmitter = function (e) {
            var t = i.getEmitter(e);
            t && t.externalPlay();
          }, i.pauseEmitter = function (e) {
            var t = i.getEmitter(e);
            t && t.externalPause();
          };
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'init',
            value: function (e) {
              var t, n;
              if (e) {
                e.emitters && (e.emitters instanceof Array ? this.emitters = e.emitters.map(function (e) {
                  var t = new s.Emitter();
                  return t.load(e), t;
                }) : (this.emitters instanceof Array && (this.emitters = new s.Emitter()), this.emitters.load(e.emitters)));
                var o = null === (n = null === (t = e.interactivity) || void 0 === t ? void 0 : t.modes) || void 0 === n ? void 0 : n.emitters;
                if (o && (o instanceof Array ? this.interactivityEmitters = o.map(function (e) {
                    var t = new s.Emitter();
                    return t.load(e), t;
                  }) : (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new s.Emitter()), this.interactivityEmitters.load(o))), this.emitters instanceof Array) {
                  var r, a = i(this.emitters);
                  try {
                    for (a.s(); !(r = a.n()).done;) {
                      var u = r.value;
                      this.addEmitter(u);
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                } else
                  this.addEmitter(this.emitters);
              }
            }
          },
          {
            key: 'play',
            value: function () {
              var e, t = i(this.array);
              try {
                for (t.s(); !(e = t.n()).done;)
                  e.value.play();
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
          {
            key: 'pause',
            value: function () {
              var e, t = i(this.array);
              try {
                for (t.s(); !(e = t.n()).done;)
                  e.value.pause();
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
          {
            key: 'stop',
            value: function () {
              this.array = [];
            }
          },
          {
            key: 'update',
            value: function (e) {
              var t, n = i(this.array);
              try {
                for (n.s(); !(t = n.n()).done;)
                  t.value.update(e);
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            }
          },
          {
            key: 'handleClickMode',
            value: function (e) {
              var t = this.container, n = this.emitters, i = this.interactivityEmitters;
              if (e === l.EmitterClickMode.emitter) {
                var o;
                i instanceof Array ? i.length > 0 && (o = u.Utils.itemFromArray(i)) : o = i;
                var r = null != o ? o : n instanceof Array ? u.Utils.itemFromArray(n) : n, a = t.interactivity.mouse.clickPosition;
                this.addEmitter(u.Utils.deepExtend({}, r), a);
              }
            }
          },
          {
            key: 'resize',
            value: function () {
              var e, t = i(this.array);
              try {
                for (t.s(); !(e = t.n()).done;)
                  e.value.resize();
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
          {
            key: 'addEmitter',
            value: function (e, t) {
              var n = new a.EmitterInstance(this, this.container, e, t);
              return this.array.push(n), n;
            }
          },
          {
            key: 'removeEmitter',
            value: function (e) {
              var t = this.array.indexOf(e);
              t >= 0 && this.array.splice(t, 1);
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Emitters = c;
  },
  Rgnc: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Attractor = void 0;
    var a = n('ZlLd'), u = n('C9b5'), s = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.actualOptions, n = e.interactivity.mouse, i = t.interactivity.events;
              if (!(i.onHover.enable && n.position || i.onClick.enable && n.clickPosition))
                return !1;
              var o = i.onHover.mode, r = i.onClick.mode;
              return u.Utils.isInArray(a.HoverMode.attract, o) || u.Utils.isInArray(a.ClickMode.attract, r);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'interact',
            value: function () {
              var e = this.container, t = e.actualOptions, n = e.interactivity.status === u.Constants.mouseMoveEvent, i = t.interactivity.events, o = i.onHover.enable, r = i.onHover.mode, s = i.onClick.enable, l = i.onClick.mode;
              n && o && u.Utils.isInArray(a.HoverMode.attract, r) ? this.hoverAttract() : s && u.Utils.isInArray(a.ClickMode.attract, l) && this.clickAttract();
            }
          },
          {
            key: 'hoverAttract',
            value: function () {
              var e = this.container, t = e.interactivity.mouse.position;
              if (t) {
                var n = e.retina.attractModeDistance;
                this.processAttract(t, n, new u.Circle(t.x, t.y, n));
              }
            }
          },
          {
            key: 'processAttract',
            value: function (e, t, n) {
              var o, r = this.container, a = r.actualOptions.interactivity.modes.attract, s = i(r.particles.quadTree.query(n));
              try {
                for (s.s(); !(o = s.n()).done;) {
                  var l = o.value, c = u.NumberUtils.getDistances(l.position, e), f = c.dx, v = c.dy, d = c.distance, y = {
                      x: f / d,
                      y: v / d
                    }, h = a.speed * a.factor, p = u.NumberUtils.clamp(u.NumberUtils.calcEasing(1 - d / t, a.easing) * h, 0, a.maxSpeed);
                  l.position.x -= y.x * p, l.position.y -= y.y * p;
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            }
          },
          {
            key: 'clickAttract',
            value: function () {
              var e = this.container;
              if (e.attract.finish || (e.attract.count || (e.attract.count = 0), e.attract.count++, e.attract.count === e.particles.count && (e.attract.finish = !0)), e.attract.clicking) {
                var t = e.interactivity.mouse.clickPosition;
                if (!t)
                  return;
                var n = e.retina.attractModeDistance;
                this.processAttract(t, n, new u.Circle(t.x, t.y, n));
              } else
                !1 === e.attract.clicking && (e.attract.particles = []);
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Attractor = s;
  },
  Rmgd: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LifeDuration = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(c, e);
      var t, n, i, s = u(c);
      function c() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (e = s.call(this)).random.minimumValue = 0.0001, e.sync = !1, e;
      }
      return t = c, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (r(l(c.prototype), 'load', this).call(this, e), void 0 !== e.sync && (this.sync = e.sync));
          }
        }]) && o(t.prototype, n), i && o(t, i), c;
    }(n('9P/A').ValueWithRandom);
    t.LifeDuration = c;
  },
  RroA: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Infection = void 0;
    var o = n('56Cg'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.cure = !1, this.delay = 0, this.enable = !1, this.infections = 0, this.stages = [];
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.cure && (this.cure = e.cure), void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.infections && (this.infections = e.infections), void 0 !== e.stages && (this.stages = e.stages.map(function (e) {
                var t = new o.InfectionStage();
                return t.load(e), t;
              })));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Infection = r;
  },
  Rxhr: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var o = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), r = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AbsorbersPlugin = void 0;
    var a = n('hQOV'), u = n('C9b5'), s = n('FvHc'), l = n('iot7'), c = new (function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.id = 'absorbers';
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'getPlugin',
            value: function (e) {
              return new a.Absorbers(e);
            }
          },
          {
            key: 'needsPlugin',
            value: function (e) {
              var t, n, i;
              if (void 0 === e)
                return !1;
              var o = e.absorbers, r = !1;
              return o instanceof Array ? o.length && (r = !0) : (void 0 !== o || (null === (i = null === (n = null === (t = e.interactivity) || void 0 === t ? void 0 : t.events) || void 0 === n ? void 0 : n.onClick) || void 0 === i ? void 0 : i.mode) && u.Utils.isInArray(s.AbsorberClickMode.absorber, e.interactivity.events.onClick.mode)) && (r = !0), r;
            }
          },
          {
            key: 'loadOptions',
            value: function (e, t) {
              var n, i;
              if (this.needsPlugin(e) || this.needsPlugin(t)) {
                var o = e;
                if (null == t ? void 0 : t.absorbers)
                  if ((null == t ? void 0 : t.absorbers) instanceof Array)
                    o.absorbers = null == t ? void 0 : t.absorbers.map(function (e) {
                      var t = new l.Absorber();
                      return t.load(e), t;
                    });
                  else {
                    var r = o.absorbers;
                    void 0 === (null == r ? void 0 : r.load) && (o.absorbers = r = new l.Absorber()), r.load(null == t ? void 0 : t.absorbers);
                  }
                var a = null === (i = null === (n = null == t ? void 0 : t.interactivity) || void 0 === n ? void 0 : n.modes) || void 0 === i ? void 0 : i.absorbers;
                if (a)
                  if (a instanceof Array)
                    o.interactivity.modes.absorbers = a.map(function (e) {
                      var t = new l.Absorber();
                      return t.load(e), t;
                    });
                  else {
                    var u = o.interactivity.modes.absorbers;
                    void 0 === (null == u ? void 0 : u.load) && (o.interactivity.modes.absorbers = u = new l.Absorber()), u.load(a);
                  }
              }
            }
          }
        ]) && i(t.prototype, n), o && i(t, o), e;
      }())();
    t.AbsorbersPlugin = c, r(n('FvHc'), t);
  },
  SXBB: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.FullScreen = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.zIndex = -1;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.zIndex && (this.zIndex = e.zIndex));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.FullScreen = o;
  },
  T8G5: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Theme = void 0;
    var o = n('C9b5'), r = n('q7n0'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.name = '', this.default = new r.ThemeDefault();
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.name && (this.name = e.name), this.default.load(e.default), void 0 !== e.options && (this.options = o.Utils.deepExtend({}, e.options)));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Theme = a;
  },
  TZGI: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.MoveGravity = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.acceleration && (this.acceleration = e.acceleration), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.inverse && (this.inverse = e.inverse), void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.MoveGravity = o;
  },
  Tdtd: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.RepulseBase = void 0;
    var o = n('ZlLd'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.distance = 200, this.duration = 0.4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = o.EasingType.easeOutQuad;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.duration && (this.duration = e.duration), void 0 !== e.easing && (this.easing = e.easing), void 0 !== e.factor && (this.factor = e.factor), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.maxSpeed && (this.maxSpeed = e.maxSpeed));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.RepulseBase = r;
  },
  'U/fs': function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.BackgroundMask = void 0;
    var o = n('CPUN'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.composite = 'destination-out', this.cover = new o.BackgroundMaskCover(), this.enable = !1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              if (void 0 !== e) {
                if (void 0 !== e.composite && (this.composite = e.composite), void 0 !== e.cover) {
                  var t = e.cover, n = 'string' == typeof e.cover ? { color: e.cover } : e.cover;
                  this.cover.load(void 0 !== t.color ? t : { color: n });
                }
                void 0 !== e.enable && (this.enable = e.enable);
              }
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.BackgroundMask = r;
  },
  URwT: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmitterInstance = void 0;
    var o = n('C9b5'), r = n('ZlLd'), a = n('PFhk');
    function u(e, t) {
      return e + t * (Math.random() - 0.5);
    }
    function s(e, t) {
      return {
        x: u(e.x, t.x),
        y: u(e.y, t.y)
      };
    }
    var l = function () {
      function e(t, n, i, u) {
        var s, l, c, f, v, d, y;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.emitters = t, this.container = n, this.firstSpawn = !0, this.currentDuration = 0, this.currentEmitDelay = 0, this.currentSpawnDelay = 0, this.initialPosition = u, this.emitterOptions = o.Utils.deepExtend({}, i), this.spawnDelay = 1000 * (null !== (s = this.emitterOptions.life.delay) && void 0 !== s ? s : 0) / this.container.retina.reduceFactor, this.position = null !== (l = this.initialPosition) && void 0 !== l ? l : this.calcPosition(), this.name = i.name;
        var h, p = o.Utils.deepExtend({}, this.emitterOptions.particles);
        null != p || (p = {}), null !== (c = p.move) && void 0 !== c || (p.move = {}), null !== (f = (y = p.move).direction) && void 0 !== f || (y.direction = this.emitterOptions.direction), void 0 !== this.emitterOptions.spawnColor && (this.spawnColor = o.ColorUtils.colorToHsl(this.emitterOptions.spawnColor)), this.paused = !this.emitterOptions.autoPlay, this.particlesOptions = p, this.size = null !== (v = this.emitterOptions.size) && void 0 !== v ? v : ((h = new a.EmitterSize()).load({
          height: 0,
          mode: r.SizeMode.percent,
          width: 0
        }), h), this.lifeCount = null !== (d = this.emitterOptions.life.count) && void 0 !== d ? d : -1, this.immortal = this.lifeCount <= 0, this.play();
      }
      var t, n, u;
      return t = e, (n = [
        {
          key: 'externalPlay',
          value: function () {
            this.paused = !1, this.play();
          }
        },
        {
          key: 'externalPause',
          value: function () {
            this.paused = !0, this.pause();
          }
        },
        {
          key: 'play',
          value: function () {
            if (!this.paused && this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count)) {
              if (void 0 === this.emitDelay) {
                var e = o.NumberUtils.getRangeValue(this.emitterOptions.rate.delay);
                this.emitDelay = 1000 * e / this.container.retina.reduceFactor;
              }
              (this.lifeCount > 0 || this.immortal) && this.prepareToDie();
            }
          }
        },
        {
          key: 'pause',
          value: function () {
            this.paused || delete this.emitDelay;
          }
        },
        {
          key: 'resize',
          value: function () {
            var e = this.initialPosition;
            this.position = e && o.Utils.isPointInside(e, this.container.canvas.size) ? e : this.calcPosition();
          }
        },
        {
          key: 'update',
          value: function (e) {
            var t, n, i;
            this.paused || (this.firstSpawn && (this.firstSpawn = !1, this.currentSpawnDelay = null !== (t = this.spawnDelay) && void 0 !== t ? t : 0, this.currentEmitDelay = null !== (n = this.emitDelay) && void 0 !== n ? n : 0, e.value = 0), void 0 !== this.duration && (this.currentDuration += e.value, this.currentDuration >= this.duration && (this.pause(), void 0 !== this.spawnDelay && delete this.spawnDelay, this.immortal || this.lifeCount--, this.lifeCount > 0 || this.immortal ? (this.position = this.calcPosition(), this.spawnDelay = 1000 * (null !== (i = this.emitterOptions.life.delay) && void 0 !== i ? i : 0) / this.container.retina.reduceFactor) : this.destroy(), this.currentDuration -= this.duration, delete this.duration)), void 0 !== this.spawnDelay && (this.currentSpawnDelay += e.value, this.currentSpawnDelay >= this.spawnDelay && (this.play(), this.currentSpawnDelay -= this.currentSpawnDelay, delete this.spawnDelay)), void 0 !== this.emitDelay && (this.currentEmitDelay += e.value, this.currentEmitDelay >= this.emitDelay && (this.emit(), this.currentEmitDelay -= this.emitDelay)));
          }
        },
        {
          key: 'prepareToDie',
          value: function () {
            var e;
            if (!this.paused) {
              var t = null === (e = this.emitterOptions.life) || void 0 === e ? void 0 : e.duration;
              this.container.retina.reduceFactor && (this.lifeCount > 0 || this.immortal) && void 0 !== t && t > 0 && (this.duration = 1000 * t);
            }
          }
        },
        {
          key: 'destroy',
          value: function () {
            this.emitters.removeEmitter(this);
          }
        },
        {
          key: 'calcPosition',
          value: function () {
            var e, t, n = this.container, i = this.emitterOptions.position;
            return {
              x: (null !== (e = null == i ? void 0 : i.x) && void 0 !== e ? e : 100 * Math.random()) / 100 * n.canvas.size.width,
              y: (null !== (t = null == i ? void 0 : i.y) && void 0 !== t ? t : 100 * Math.random()) / 100 * n.canvas.size.height
            };
          }
        },
        {
          key: 'emit',
          value: function () {
            var e;
            if (!this.paused)
              for (var t = this.container, n = this.position, i = {
                    x: this.size.mode === r.SizeMode.percent ? t.canvas.size.width * this.size.width / 100 : this.size.width,
                    y: this.size.mode === r.SizeMode.percent ? t.canvas.size.height * this.size.height / 100 : this.size.height
                  }, a = o.NumberUtils.getRangeValue(this.emitterOptions.rate.quantity), u = 0; u < a; u++) {
                var l = o.Utils.deepExtend({}, this.particlesOptions);
                if (void 0 !== this.spawnColor) {
                  var c = null === (e = this.emitterOptions.spawnColor) || void 0 === e ? void 0 : e.animation;
                  if (c) {
                    var f = c;
                    if (f.enable)
                      this.spawnColor.h = this.setColorAnimation(f, this.spawnColor.h, 360);
                    else {
                      var v = c;
                      this.spawnColor.h = this.setColorAnimation(v.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(v.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(v.l, this.spawnColor.l, 100);
                    }
                  }
                  l.color ? l.color.value = this.spawnColor : l.color = { value: this.spawnColor };
                }
                t.particles.addParticle(s(n, i), l);
              }
          }
        },
        {
          key: 'setColorAnimation',
          value: function (e, t, n) {
            var i, r = this.container;
            if (!e.enable)
              return t;
            var a = o.NumberUtils.randomInRange(e.offset), u = 1000 * o.NumberUtils.getRangeValue(this.emitterOptions.rate.delay) / r.retina.reduceFactor;
            return (t + (null !== (i = e.speed) && void 0 !== i ? i : 0) * r.fpsLimit / u + 3.6 * a) % n;
          }
        }
      ]) && i(t.prototype, n), u && i(t, u), e;
    }();
    t.EmitterInstance = l;
  },
  Ucb3: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.MotionReduce = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.factor = 4, this.value = !0;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && (void 0 !== e.factor && (this.factor = e.factor), void 0 !== e.value && (this.value = e.value));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.MotionReduce = o;
  },
  VOV1: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Bounce = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.distance = 200;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            e && void 0 !== e.distance && (this.distance = e.distance);
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Bounce = o;
  },
  Vmap: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Options = void 0;
    var a = n('GMfk'), u = n('E6pE'), s = n('U/fs'), l = n('QkZH'), c = n('RroA'), f = n('C9b5'), v = n('T8G5'), d = n('ZlLd'), y = n('SXBB'), h = n('BikP'), p = n('1mUk'), b = n('lu4H'), m = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.autoPlay = !0, this.background = new l.Background(), this.backgroundMask = new s.BackgroundMask(), this.fullScreen = new y.FullScreen(), this.detectRetina = !0, this.fpsLimit = 60, this.infection = new c.Infection(), this.interactivity = new a.Interactivity(), this.manualParticles = [], this.motion = new h.Motion(), this.particles = new u.ParticlesOptions(), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.themes = [];
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, o;
              if (void 0 !== e) {
                if (void 0 !== e.preset)
                  if (e.preset instanceof Array) {
                    var r, a = i(e.preset);
                    try {
                      for (a.s(); !(r = a.n()).done;) {
                        var u = r.value;
                        this.importPreset(u);
                      }
                    } catch (e) {
                      a.e(e);
                    } finally {
                      a.f();
                    }
                  } else
                    this.importPreset(e.preset);
                void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay);
                var s = null !== (t = e.detectRetina) && void 0 !== t ? t : e.retina_detect;
                void 0 !== s && (this.detectRetina = s);
                var l = null !== (n = e.fpsLimit) && void 0 !== n ? n : e.fps_limit;
                if (void 0 !== l && (this.fpsLimit = l), void 0 !== e.pauseOnBlur && (this.pauseOnBlur = e.pauseOnBlur), void 0 !== e.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport), this.background.load(e.background), this.fullScreen.load(null !== (o = e.fullScreen) && void 0 !== o ? o : e.backgroundMode), this.backgroundMask.load(e.backgroundMask), this.infection.load(e.infection), this.interactivity.load(e.interactivity), void 0 !== e.manualParticles && (this.manualParticles = e.manualParticles.map(function (e) {
                    var t = new p.ManualParticle();
                    return t.load(e), t;
                  })), this.motion.load(e.motion), this.particles.load(e.particles), f.Plugins.loadOptions(this, e), void 0 !== e.responsive) {
                  var c, d = i(e.responsive);
                  try {
                    for (d.s(); !(c = d.n()).done;) {
                      var y = c.value, h = new b.Responsive();
                      h.load(y), this.responsive.push(h);
                    }
                  } catch (e) {
                    d.e(e);
                  } finally {
                    d.f();
                  }
                }
                if (this.responsive.sort(function (e, t) {
                    return e.maxWidth - t.maxWidth;
                  }), void 0 !== e.themes) {
                  var m, g = i(e.themes);
                  try {
                    for (g.s(); !(m = g.n()).done;) {
                      var w = m.value, O = new v.Theme();
                      O.load(w), this.themes.push(O);
                    }
                  } catch (e) {
                    g.e(e);
                  } finally {
                    g.f();
                  }
                }
              }
            }
          },
          {
            key: 'setTheme',
            value: function (e) {
              if (e) {
                var t = this.themes.find(function (t) {
                  return t.name === e;
                });
                t && this.load(t.options);
              } else {
                var n = 'undefined' != typeof matchMedia && matchMedia('(prefers-color-scheme: dark)').matches, i = this.themes.find(function (e) {
                    return e.default.value && (e.default.mode === d.ThemeMode.dark && n || e.default.mode === d.ThemeMode.light && !n);
                  });
                i || (i = this.themes.find(function (e) {
                  return e.default.value && e.default.mode === d.ThemeMode.any;
                })), i && this.load(i.options);
              }
            }
          },
          {
            key: 'importPreset',
            value: function (e) {
              this.load(f.Plugins.getPreset(e));
            }
          },
          {
            key: 'setResponsive',
            value: function (e, t, n) {
              var i;
              this.load(n), this.load(null === (i = this.responsive.find(function (n) {
                return n.maxWidth * t > e;
              })) || void 0 === i ? void 0 : i.options);
            }
          },
          {
            key: 'fps_limit',
            get: function () {
              return this.fpsLimit;
            },
            set: function (e) {
              this.fpsLimit = e;
            }
          },
          {
            key: 'retina_detect',
            get: function () {
              return this.detectRetina;
            },
            set: function (e) {
              this.detectRetina = e;
            }
          },
          {
            key: 'backgroundMode',
            get: function () {
              return this.fullScreen;
            },
            set: function (e) {
              this.fullScreen.load(e);
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Options = m;
  },
  W13A: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.HoverEvent = void 0;
    var o = n('aP84'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.enable = !1, this.mode = [], this.parallax = new o.Parallax();
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), this.parallax.load(e.parallax));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.HoverEvent = r;
  },
  W21g: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Bubbler = void 0;
    var a = n('C9b5'), u = n('ZlLd');
    function s(e, t, n, i) {
      if (t > n) {
        var o = e + (t - n) * i;
        return a.NumberUtils.clamp(o, e, t);
      }
      if (t < n) {
        var r = e - (n - t) * i;
        return a.NumberUtils.clamp(r, t, e);
      }
    }
    var l = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.container = t;
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'isEnabled',
          value: function () {
            var e = this.container, t = e.actualOptions, n = e.interactivity.mouse, i = t.interactivity.events, o = i.onDiv, r = a.Utils.isDivModeEnabled(u.DivMode.bubble, o);
            if (!(r || i.onHover.enable && n.position || i.onClick.enable && n.clickPosition))
              return !1;
            var s = i.onHover.mode, l = i.onClick.mode;
            return a.Utils.isInArray(u.HoverMode.bubble, s) || a.Utils.isInArray(u.ClickMode.bubble, l) || r;
          }
        },
        {
          key: 'reset',
          value: function (e, t) {
            e.bubble.inRange && !t || (delete e.bubble.div, delete e.bubble.opacity, delete e.bubble.radius, delete e.bubble.color);
          }
        },
        {
          key: 'interact',
          value: function () {
            var e = this, t = this.container.actualOptions.interactivity.events, n = t.onHover, i = t.onClick, o = n.enable, r = n.mode, s = i.enable, l = i.mode, c = t.onDiv;
            o && a.Utils.isInArray(u.HoverMode.bubble, r) ? this.hoverBubble() : s && a.Utils.isInArray(u.ClickMode.bubble, l) ? this.clickBubble() : a.Utils.divModeExecute(u.DivMode.bubble, c, function (t, n) {
              return e.singleSelectorHover(t, n);
            });
          }
        },
        {
          key: 'singleSelectorHover',
          value: function (e, t) {
            var n = this, o = this.container, r = document.querySelectorAll(e);
            r.length && r.forEach(function (e) {
              var r, s = e, l = o.retina.pixelRatio, c = {
                  x: (s.offsetLeft + s.offsetWidth / 2) * l,
                  y: (s.offsetTop + s.offsetHeight / 2) * l
                }, f = s.offsetWidth / 2 * l, v = t.type === u.DivType.circle ? new a.Circle(c.x, c.y, f) : new a.Rectangle(s.offsetLeft * l, s.offsetTop * l, s.offsetWidth * l, s.offsetHeight * l), d = i(o.particles.quadTree.query(v));
              try {
                for (d.s(); !(r = d.n()).done;) {
                  var y = r.value;
                  if (v.contains(y.getPosition())) {
                    y.bubble.inRange = !0;
                    var h = o.actualOptions.interactivity.modes.bubble.divs, p = a.Utils.divMode(h, s);
                    y.bubble.div && y.bubble.div === s || (n.reset(y, !0), y.bubble.div = s), n.hoverBubbleSize(y, 1, p), n.hoverBubbleOpacity(y, 1, p), n.hoverBubbleColor(y, p);
                  }
                }
              } catch (e) {
                d.e(e);
              } finally {
                d.f();
              }
            });
          }
        },
        {
          key: 'process',
          value: function (e, t, n, i) {
            var o = this.container, r = i.bubbleObj.optValue;
            if (void 0 !== r) {
              var a = o.actualOptions.interactivity.modes.bubble.duration, s = o.retina.bubbleModeDistance, l = i.particlesObj.optValue, c = i.bubbleObj.value, f = i.particlesObj.value || 0, v = i.type;
              if (r !== l)
                if (o.bubble.durationEnd)
                  c && (v === u.ProcessBubbleType.size && delete e.bubble.radius, v === u.ProcessBubbleType.opacity && delete e.bubble.opacity);
                else if (t <= s) {
                  if ((null != c ? c : f) !== r) {
                    var d = f - n * (f - r) / a;
                    v === u.ProcessBubbleType.size && (e.bubble.radius = d), v === u.ProcessBubbleType.opacity && (e.bubble.opacity = d);
                  }
                } else
                  v === u.ProcessBubbleType.size && delete e.bubble.radius, v === u.ProcessBubbleType.opacity && delete e.bubble.opacity;
            }
          }
        },
        {
          key: 'clickBubble',
          value: function () {
            var e = this.container, t = e.actualOptions, n = e.interactivity.mouse.clickPosition;
            if (void 0 !== n) {
              var o, r = e.retina.bubbleModeDistance, s = i(e.particles.quadTree.queryCircle(n, r));
              try {
                for (s.s(); !(o = s.n()).done;) {
                  var l = o.value;
                  if (e.bubble.clicking) {
                    l.bubble.inRange = !e.bubble.durationEnd;
                    var c = l.getPosition(), f = a.NumberUtils.getDistance(c, n), v = (new Date().getTime() - (e.interactivity.mouse.clickTime || 0)) / 1000;
                    v > t.interactivity.modes.bubble.duration && (e.bubble.durationEnd = !0), v > 2 * t.interactivity.modes.bubble.duration && (e.bubble.clicking = !1, e.bubble.durationEnd = !1);
                    var d = {
                      bubbleObj: {
                        optValue: e.retina.bubbleModeSize,
                        value: l.bubble.radius
                      },
                      particlesObj: {
                        optValue: a.NumberUtils.getRangeMax(l.options.size.value) * e.retina.pixelRatio,
                        value: l.size.value
                      },
                      type: u.ProcessBubbleType.size
                    };
                    this.process(l, f, v, d);
                    var y = {
                      bubbleObj: {
                        optValue: t.interactivity.modes.bubble.opacity,
                        value: l.bubble.opacity
                      },
                      particlesObj: {
                        optValue: a.NumberUtils.getRangeMax(l.options.opacity.value),
                        value: l.opacity.value
                      },
                      type: u.ProcessBubbleType.opacity
                    };
                    this.process(l, f, v, y), e.bubble.durationEnd ? delete l.bubble.color : f <= e.retina.bubbleModeDistance ? this.hoverBubbleColor(l) : delete l.bubble.color;
                  }
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            }
          }
        },
        {
          key: 'hoverBubble',
          value: function () {
            var e = this.container, t = e.interactivity.mouse.position;
            if (void 0 !== t) {
              var n, o = e.retina.bubbleModeDistance, r = i(e.particles.quadTree.queryCircle(t, o));
              try {
                for (r.s(); !(n = r.n()).done;) {
                  var u = n.value;
                  u.bubble.inRange = !0;
                  var s = u.getPosition(), l = a.NumberUtils.getDistance(s, t), c = 1 - l / o;
                  l <= o ? c >= 0 && e.interactivity.status === a.Constants.mouseMoveEvent && (this.hoverBubbleSize(u, c), this.hoverBubbleOpacity(u, c), this.hoverBubbleColor(u)) : this.reset(u), e.interactivity.status === a.Constants.mouseLeaveEvent && this.reset(u);
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
            }
          }
        },
        {
          key: 'hoverBubbleSize',
          value: function (e, t, n) {
            var i = this.container, o = (null == n ? void 0 : n.size) ? n.size * i.retina.pixelRatio : i.retina.bubbleModeSize;
            if (void 0 !== o) {
              var r = a.NumberUtils.getRangeMax(e.options.size.value) * i.retina.pixelRatio, u = s(e.size.value, o, r, t);
              void 0 !== u && (e.bubble.radius = u);
            }
          }
        },
        {
          key: 'hoverBubbleOpacity',
          value: function (e, t, n) {
            var i, o = this.container.actualOptions, r = null !== (i = null == n ? void 0 : n.opacity) && void 0 !== i ? i : o.interactivity.modes.bubble.opacity;
            if (void 0 !== r) {
              var u = e.options.opacity.value, l = s(e.opacity.value, r, a.NumberUtils.getRangeMax(u), t);
              void 0 !== l && (e.bubble.opacity = l);
            }
          }
        },
        {
          key: 'hoverBubbleColor',
          value: function (e, t) {
            var n, i = this.container.actualOptions;
            if (void 0 === e.bubble.color) {
              var o = null !== (n = null == t ? void 0 : t.color) && void 0 !== n ? n : i.interactivity.modes.bubble.color;
              if (void 0 === o)
                return;
              var r = o instanceof Array ? a.Utils.itemFromArray(o) : o;
              e.bubble.color = a.ColorUtils.colorToHsl(r);
            }
          }
        }
      ]) && r(t.prototype, n), o && r(t, o), e;
    }();
    t.Bubbler = l;
  },
  W31w: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AnimatableColor = void 0;
    var c = n('vRcM'), f = n('eXGw'), v = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(c, e);
        var t, n, i, s = u(c);
        function c() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, c), (e = s.call(this)).animation = new f.HslAnimation(), e;
        }
        return t = c, i = [{
            key: 'create',
            value: function (e, t) {
              var n = null != e ? e : new c();
              return void 0 !== t && n.load('string' == typeof t ? { value: t } : t), n;
            }
          }], (n = [{
            key: 'load',
            value: function (e) {
              if (r(l(c.prototype), 'load', this).call(this, e), e) {
                var t = e.animation;
                void 0 !== t && (void 0 !== t.enable ? this.animation.h.load(t) : this.animation.load(e.animation));
              }
            }
          }]) && o(t.prototype, n), i && o(t, i), c;
      }(c.OptionsColor);
    t.AnimatableColor = v;
  },
  Wu3R: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Type = void 0, function (e) {
      e.inline = 'inline', e.inside = 'inside', e.outside = 'outside', e.none = 'none';
    }(t.Type || (t.Type = {}));
  },
  XGcx: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.BubbleBase = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.distance = 200, this.duration = 0.4;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.duration && (this.duration = e.duration), void 0 !== e.opacity && (this.opacity = e.opacity), void 0 !== e.color && (e.color instanceof Array ? this.color = e.color.map(function (e) {
                return o.OptionsColor.create(void 0, e);
              }) : (this.color instanceof Array && (this.color = new o.OptionsColor()), this.color = o.OptionsColor.create(this.color, e.color))), void 0 !== e.size && (this.size = e.size));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.BubbleBase = r;
  },
  XUYF: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Trail = void 0;
    var o = n('C9b5'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.delay = 1, this.pauseOnStop = !1, this.quantity = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.delay && (this.delay = e.delay), void 0 !== e.quantity && (this.quantity = e.quantity), void 0 !== e.particles && (this.particles = o.Utils.deepExtend({}, e.particles)), void 0 !== e.pauseOnStop && (this.pauseOnStop = e.pauseOnStop));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Trail = r;
  },
  XqMA: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.StarDrawer = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'getSidesCount',
          value: function (e) {
            var t, n, i = e.shapeData;
            return null !== (n = null !== (t = null == i ? void 0 : i.sides) && void 0 !== t ? t : null == i ? void 0 : i.nb_sides) && void 0 !== n ? n : 5;
          }
        },
        {
          key: 'draw',
          value: function (e, t, n) {
            var i, o = t.shapeData, r = this.getSidesCount(t), a = null !== (i = null == o ? void 0 : o.inset) && void 0 !== i ? i : 2;
            e.moveTo(0, 0 - n);
            for (var u = 0; u < r; u++)
              e.rotate(Math.PI / r), e.lineTo(0, 0 - n * a), e.rotate(Math.PI / r), e.lineTo(0, 0 - n);
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.StarDrawer = o;
  },
  'YU+L': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.TriangleDrawer = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(l, e);
      var t, n, i, s = u(l);
      function l() {
        return o(this, l), s.apply(this, arguments);
      }
      return t = l, (n = [
        {
          key: 'getSidesCount',
          value: function () {
            return 3;
          }
        },
        {
          key: 'getSidesData',
          value: function (e, t) {
            return {
              count: {
                denominator: 2,
                numerator: 3
              },
              length: 2 * t
            };
          }
        },
        {
          key: 'getCenter',
          value: function (e, t) {
            return {
              x: -t,
              y: t / 1.66
            };
          }
        }
      ]) && r(t.prototype, n), i && r(t, i), l;
    }(n('gYxR').PolygonDrawerBase);
    t.TriangleDrawer = c;
  },
  Yjw3: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Linker = void 0;
    var a = n('C9b5'), u = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function (e) {
              return e.options.links.enable;
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'interact',
            value: function (e) {
              var t, n, o = this.container, r = e.options.links, u = r.opacity, s = null !== (t = e.linksDistance) && void 0 !== t ? t : o.retina.linksDistance, l = o.canvas.size, c = r.warp, f = e.getPosition(), v = c ? new a.CircleWarp(f.x, f.y, s, l) : new a.Circle(f.x, f.y, s), d = i(o.particles.quadTree.query(v));
              try {
                for (d.s(); !(n = d.n()).done;) {
                  var y = n.value, h = y.options.links;
                  if (e !== y && h.enable && r.id === h.id && !y.spawning && !y.destroyed) {
                    var p = y.getPosition(), b = a.NumberUtils.getDistance(f, p);
                    if (c && b > s) {
                      var m = {
                        x: p.x - l.width,
                        y: p.y
                      };
                      if ((b = a.NumberUtils.getDistance(f, m)) > s) {
                        var g = {
                          x: p.x - l.width,
                          y: p.y - l.height
                        };
                        if ((b = a.NumberUtils.getDistance(f, g)) > s) {
                          var w = {
                            x: p.x,
                            y: p.y - l.height
                          };
                          b = a.NumberUtils.getDistance(f, w);
                        }
                      }
                    }
                    if (b > s)
                      return;
                    var O = (1 - b / s) * u, k = e.options.links, P = void 0 !== k.id ? o.particles.linksColors.get(k.id) : o.particles.linksColor;
                    if (!P) {
                      var _ = k.color;
                      P = a.ColorUtils.getLinkRandomColor(_, k.blink, k.consent), void 0 !== k.id ? o.particles.linksColors.set(k.id, P) : o.particles.linksColor = P;
                    }
                    -1 === y.links.map(function (e) {
                      return e.destination;
                    }).indexOf(e) && -1 === e.links.map(function (e) {
                      return e.destination;
                    }).indexOf(y) && e.links.push({
                      destination: y,
                      opacity: O
                    });
                  }
                }
              } catch (e) {
                d.e(e);
              } finally {
                d.f();
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Linker = u;
  },
  ZJaX: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmitterClickMode = void 0, function (e) {
      e.emitter = 'emitter';
    }(t.EmitterClickMode || (t.EmitterClickMode = {}));
  },
  ZJwF: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Lighter = void 0;
    var o = n('C9b5'), r = n('ubkD'), a = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'interact',
            value: function () {
              var e = this.container;
              if (e.actualOptions.interactivity.events.onHover.enable && 'mousemove' === e.interactivity.status) {
                var t = e.interactivity.mouse.position;
                if (!t)
                  return;
                e.canvas.drawLight(t);
              }
            }
          },
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.interactivity.mouse, n = e.actualOptions.interactivity.events;
              if (!n.onHover.enable || !t.position)
                return !1;
              var i = n.onHover.mode;
              return o.Utils.isInArray(r.HoverMode.light, i);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Lighter = a;
  },
  Zb7y: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ParticlesNumber = void 0;
    var o = n('P+GZ'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.density = new o.Density(), this.limit = 0, this.value = 100;
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (void 0 !== e) {
                this.density.load(e.density);
                var n = null !== (t = e.limit) && void 0 !== t ? t : e.max;
                void 0 !== n && (this.limit = n), void 0 !== e.value && (this.value = e.value);
              }
            }
          },
          {
            key: 'max',
            get: function () {
              return this.limit;
            },
            set: function (e) {
              this.limit = e;
            }
          }
        ]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.ParticlesNumber = r;
  },
  aP84: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Parallax = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.force = 2, this.smooth = 10;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.force && (this.force = e.force), void 0 !== e.smooth && (this.smooth = e.smooth));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Parallax = o;
  },
  brjH: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.SizeAnimation = void 0;
    var c = n('ZlLd'), f = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t);
        }(f, e);
        var t, n, i, s = u(f);
        function f() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, f), (e = s.call(this)).destroy = c.DestroyType.none, e.enable = !1, e.minimumValue = 0, e.speed = 5, e.startValue = c.StartValueType.random, e.sync = !1, e;
        }
        return t = f, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (void 0 !== e) {
                r(l(f.prototype), 'load', this).call(this, e), void 0 !== e.destroy && (this.destroy = e.destroy), void 0 !== e.enable && (this.enable = e.enable);
                var n = null !== (t = e.minimumValue) && void 0 !== t ? t : e.size_min;
                void 0 !== n && (this.minimumValue = n), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.startValue && (this.startValue = e.startValue), void 0 !== e.sync && (this.sync = e.sync);
              }
            }
          },
          {
            key: 'size_min',
            get: function () {
              return this.minimumValue;
            },
            set: function (e) {
              this.minimumValue = e;
            }
          }
        ]) && o(t.prototype, n), i && o(t, i), f;
      }(n('1n+5').AnimationOptions);
    t.SizeAnimation = f;
  },
  cWpP: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LinksTriangle = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.enable = !1, this.frequency = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.frequency && (this.frequency = e.frequency), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.LinksTriangle = r;
  },
  d0ux: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AbsorberInstance = void 0;
    var o = n('C9b5'), r = n('q8jH'), a = function () {
        function e(t, n, i, a) {
          var u, s, l;
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.absorbers = t, this.container = n, this.initialPosition = a ? r.Vector.create(a.x, a.y) : void 0, this.options = i, this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = o.NumberUtils.getValue(i.size) * n.retina.pixelRatio, this.mass = this.size * i.size.density * n.retina.reduceFactor;
          var c = i.size.limit;
          this.limit = void 0 !== c ? c * n.retina.pixelRatio * n.retina.reduceFactor : c;
          var f = 'string' == typeof i.color ? { value: i.color } : i.color;
          this.color = null !== (u = o.ColorUtils.colorToRgb(f)) && void 0 !== u ? u : {
            b: 0,
            g: 0,
            r: 0
          }, this.position = null !== (l = null === (s = this.initialPosition) || void 0 === s ? void 0 : s.copy()) && void 0 !== l ? l : this.calcPosition();
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'attract',
            value: function (e) {
              var t = this.options;
              if (t.draggable) {
                var n = this.container.interactivity.mouse;
                n.clicking && n.downPosition ? o.NumberUtils.getDistance(this.position, n.downPosition) <= this.size && (this.dragging = !0) : this.dragging = !1, this.dragging && n.position && (this.position.x = n.position.x, this.position.y = n.position.y);
              }
              var i = e.getPosition(), a = o.NumberUtils.getDistances(this.position, i), u = a.dx, s = a.dy, l = a.distance, c = r.Vector.create(u, s);
              if (c.length = this.mass / Math.pow(l, 2) * this.container.retina.reduceFactor, l < this.size + e.getRadius()) {
                var f = 0.033 * e.getRadius() * this.container.retina.pixelRatio;
                this.size > e.getRadius() && l < this.size - e.getRadius() ? t.destroy ? e.destroy() : (e.needsNewPosition = !0, this.updateParticlePosition(e, c)) : (t.destroy && (e.size.value -= f), this.updateParticlePosition(e, c)), (void 0 === this.limit || this.size < this.limit) && (this.size += f), this.mass += f * this.options.size.density * this.container.retina.reduceFactor;
              } else
                this.updateParticlePosition(e, c);
            }
          },
          {
            key: 'resize',
            value: function () {
              var e = this.initialPosition;
              this.position = e && o.Utils.isPointInside(e, this.container.canvas.size) ? e : this.calcPosition();
            }
          },
          {
            key: 'draw',
            value: function (e) {
              e.translate(this.position.x, this.position.y), e.beginPath(), e.arc(0, 0, this.size, 0, 2 * Math.PI, !1), e.closePath(), e.fillStyle = o.ColorUtils.getStyleFromRgb(this.color, this.opacity), e.fill();
            }
          },
          {
            key: 'calcPosition',
            value: function () {
              var e, t, n = this.container, i = this.options.position;
              return r.Vector.create((null !== (e = null == i ? void 0 : i.x) && void 0 !== e ? e : 100 * Math.random()) / 100 * n.canvas.size.width, (null !== (t = null == i ? void 0 : i.y) && void 0 !== t ? t : 100 * Math.random()) / 100 * n.canvas.size.height);
            }
          },
          {
            key: 'updateParticlePosition',
            value: function (e, t) {
              var n;
              if (!e.destroyed) {
                var i = this.container.canvas.size;
                if (e.needsNewPosition) {
                  var a = e.getRadius();
                  e.position.x = Math.random() * (i.width - 2 * a) + a, e.position.y = Math.random() * (i.height - 2 * a) + a, e.needsNewPosition = !1;
                }
                this.options.orbits ? (void 0 === e.orbit && (e.orbit = r.Vector.create(0, 0), e.orbit.length = o.NumberUtils.getDistance(e.getPosition(), this.position), e.orbit.angle = Math.random() * Math.PI * 2), e.orbit.length <= this.size && !this.options.destroy && (e.orbit.length = Math.random() * Math.max(i.width, i.height)), e.velocity.x = 0, e.velocity.y = 0, e.position.setTo(e.orbit.add(this.position)), e.orbit.length -= t.length, e.orbit.angle += (null !== (n = e.moveSpeed) && void 0 !== n ? n : o.NumberUtils.getRangeValue(e.options.move.speed) * this.container.retina.pixelRatio) / 100 * this.container.retina.reduceFactor) : e.velocity.addTo(t);
              }
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.AbsorberInstance = a;
  },
  dLKv: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
  },
  eXGw: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.HslAnimation = void 0;
    var o = n('Qwhl'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.h = new o.ColorAnimation(), this.s = new o.ColorAnimation(), this.l = new o.ColorAnimation();
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.HslAnimation = r;
  },
  ehru: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function o(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return r(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, o = function () {
            };
          return {
            s: o,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: o
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    var a = this && this.__awaiter || function (e, t, n, i) {
      return new (n || (n = Promise))(function (o, r) {
        function a(e) {
          try {
            s(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function u(e) {
          try {
            s(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, u);
        }
        s((i = i.apply(e, t || [])).next());
      });
    };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PolygonMaskInstance = void 0;
    var u = n('qtyS'), s = n('C9b5'), l = n('vGWO'), c = n('auWv');
    function f(e, t, n) {
      var i = s.ColorUtils.colorToRgb(n.color);
      if (i) {
        e.beginPath(), e.moveTo(t[0].x, t[0].y);
        var r, a = o(t);
        try {
          for (a.s(); !(r = a.n()).done;) {
            var u = r.value;
            e.lineTo(u.x, u.y);
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
        e.closePath(), e.strokeStyle = s.ColorUtils.getStyleFromRgb(i), e.lineWidth = n.width, e.stroke();
      }
    }
    function v(e, t, n, i) {
      e.translate(i.x, i.y);
      var o = s.ColorUtils.colorToRgb(n.color);
      o && (e.strokeStyle = s.ColorUtils.getStyleFromRgb(o, n.opacity), e.lineWidth = n.width, e.stroke(t));
    }
    function d(e, t, n) {
      var i = s.NumberUtils.getDistances(n, e), o = i.dx, r = i.dy, a = s.NumberUtils.getDistances(t, e), u = a.dx, l = a.dy, c = (o * u + r * l) / (Math.pow(u, 2) + Math.pow(l, 2)), f = e.x + u * c, v = e.y + l * c;
      return c < 0 ? (f = e.x, v = e.y) : c > 1 && (f = t.x, v = t.y), {
        x: f,
        y: v,
        isOnSegment: c >= 0 && c <= 1
      };
    }
    function y(e, t, n) {
      var i = s.NumberUtils.getDistances(e, t), o = i.dx, r = i.dy, a = Math.atan2(r, o), u = Math.sin(a), l = -Math.cos(a), c = 2 * (n.x * u + n.y * l);
      n.x -= c * u, n.y -= c * l;
    }
    var h = function () {
      function e(t) {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.container = t, this.dimension = {
          height: 0,
          width: 0
        }, this.path2DSupported = !!window.Path2D, this.options = new l.PolygonMask(), this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio;
      }
      var t, n, r;
      return t = e, (n = [
        {
          key: 'initAsync',
          value: function (e) {
            return a(this, void 0, void 0, regeneratorRuntime.mark(function t() {
              var n;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch (t.prev = t.next) {
                  case 0:
                    if (this.options.load(null == e ? void 0 : e.polygon), n = this.options, this.polygonMaskMoveRadius = n.move.radius * this.container.retina.pixelRatio, !n.enable) {
                      t.next = 6;
                      break;
                    }
                    return t.next = 6, this.initRawData();
                  case 6:
                  case 'end':
                    return t.stop();
                  }
              }, t, this);
            }));
          }
        },
        {
          key: 'resize',
          value: function () {
            var e = this, t = this.container, n = this.options;
            n.enable && n.type !== u.Type.none && (this.redrawTimeout && clearTimeout(this.redrawTimeout), this.redrawTimeout = window.setTimeout(function () {
              return a(e, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, this.initRawData(!0);
                    case 2:
                      t.particles.redraw();
                    case 3:
                    case 'end':
                      return e.stop();
                    }
                }, e, this);
              }));
            }, 250));
          }
        },
        {
          key: 'stop',
          value: function () {
            delete this.raw, delete this.paths;
          }
        },
        {
          key: 'particlesInitialization',
          value: function () {
            var e = this.options;
            return !(!e.enable || e.type !== u.Type.inline || e.inline.arrangement !== u.InlineArrangement.onePerPoint && e.inline.arrangement !== u.InlineArrangement.perPoint || (this.drawPoints(), 0));
          }
        },
        {
          key: 'particlePosition',
          value: function (e) {
            var t, n;
            if (this.options.enable && (null !== (n = null === (t = this.raw) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) > 0)
              return s.Utils.deepExtend({}, e || this.randomPoint());
          }
        },
        {
          key: 'particleBounce',
          value: function (e, t, n) {
            return this.polygonBounce(e, t, n);
          }
        },
        {
          key: 'clickPositionValid',
          value: function (e) {
            var t = this.options;
            return t.enable && t.type !== u.Type.none && t.type !== u.Type.inline && this.checkInsidePolygon(e);
          }
        },
        {
          key: 'draw',
          value: function (e) {
            var t;
            if (null === (t = this.paths) || void 0 === t ? void 0 : t.length) {
              var n = this.options, i = n.draw;
              if (n.enable && i.enable) {
                var r, a = this.raw, u = o(this.paths);
                try {
                  for (u.s(); !(r = u.n()).done;) {
                    var s = r.value.path2d, l = this.path2DSupported;
                    e && (l && s && this.offset ? v(e, s, i.stroke, this.offset) : a && f(e, a, i.stroke));
                  }
                } catch (e) {
                  u.e(e);
                } finally {
                  u.f();
                }
              }
            }
          }
        },
        {
          key: 'polygonBounce',
          value: function (e, t, n) {
            var i = this.options;
            if (!this.raw || !i.enable || n !== c.OutModeDirection.top)
              return !1;
            if (i.type === u.Type.inside || i.type === u.Type.outside) {
              for (var o, r, a, l = e.getPosition(), f = e.getRadius(), v = 0, h = this.raw.length - 1; v < this.raw.length; h = v++) {
                var p = this.raw[v], b = this.raw[h];
                o = d(p, b, l);
                var m = s.NumberUtils.getDistances(l, o), g = [
                    m.dx,
                    m.dy
                  ];
                if (r = g[0], a = g[1], m.distance < f)
                  return y(p, b, e.velocity), !0;
              }
              if (o && void 0 !== r && void 0 !== a && !this.checkInsidePolygon(l)) {
                var w = {
                  x: 1,
                  y: 1
                };
                return e.position.x >= o.x && (w.x = -1), e.position.y >= o.y && (w.y = -1), e.position.x = o.x + 2 * f * w.x, e.position.y = o.y + 2 * f * w.y, e.velocity.mult(-1), !0;
              }
            } else if (i.type === u.Type.inline && e.initialPosition && s.NumberUtils.getDistance(e.initialPosition, e.getPosition()) > this.polygonMaskMoveRadius)
              return e.velocity.x = e.velocity.y / 2 - e.velocity.x, e.velocity.y = e.velocity.x / 2 - e.velocity.y, !0;
            return !1;
          }
        },
        {
          key: 'checkInsidePolygon',
          value: function (e) {
            var t, n, i = this.container, o = this.options;
            if (!o.enable || o.type === u.Type.none || o.type === u.Type.inline)
              return !0;
            if (!this.raw)
              throw new Error(s.Constants.noPolygonFound);
            for (var r = i.canvas.size, a = null !== (t = null == e ? void 0 : e.x) && void 0 !== t ? t : Math.random() * r.width, l = null !== (n = null == e ? void 0 : e.y) && void 0 !== n ? n : Math.random() * r.height, c = !1, f = 0, v = this.raw.length - 1; f < this.raw.length; v = f++) {
              var d = this.raw[f], y = this.raw[v];
              d.y > l != y.y > l && a < (y.x - d.x) * (l - d.y) / (y.y - d.y) + d.x && (c = !c);
            }
            return o.type === u.Type.inside ? c : o.type === u.Type.outside && !c;
          }
        },
        {
          key: 'parseSvgPath',
          value: function (e, t) {
            var n, i, r, a = null != t && t;
            if (void 0 !== this.paths && !a)
              return this.raw;
            var u = this.container, s = this.options, l = new DOMParser().parseFromString(e, 'image/svg+xml'), c = l.getElementsByTagName('svg')[0], f = c.getElementsByTagName('path');
            f.length || (f = l.getElementsByTagName('path')), this.paths = [];
            for (var v = 0; v < f.length; v++) {
              var d = f.item(v);
              d && this.paths.push({
                element: d,
                length: d.getTotalLength()
              });
            }
            var y = u.retina.pixelRatio, h = s.scale / y;
            this.dimension.width = parseFloat(null !== (n = c.getAttribute('width')) && void 0 !== n ? n : '0') * h, this.dimension.height = parseFloat(null !== (i = c.getAttribute('height')) && void 0 !== i ? i : '0') * h;
            var p = null !== (r = s.position) && void 0 !== r ? r : {
              x: 50,
              y: 50
            };
            return this.offset = {
              x: u.canvas.size.width * p.x / (100 * y) - this.dimension.width / 2,
              y: u.canvas.size.height * p.y / (100 * y) - this.dimension.height / 2
            }, function (e, t, n) {
              var i, r = [], a = o(e);
              try {
                for (a.s(); !(i = a.n()).done;)
                  for (var u = i.value.element.pathSegList, s = u.numberOfItems, l = {
                        x: 0,
                        y: 0
                      }, c = 0; c < s; c++) {
                    var f = u.getItem(c), v = window.SVGPathSeg;
                    switch (f.pathSegType) {
                    case v.PATHSEG_MOVETO_ABS:
                    case v.PATHSEG_LINETO_ABS:
                    case v.PATHSEG_CURVETO_CUBIC_ABS:
                    case v.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case v.PATHSEG_ARC_ABS:
                    case v.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case v.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                      var d = f;
                      l.x = d.x, l.y = d.y;
                      break;
                    case v.PATHSEG_LINETO_HORIZONTAL_ABS:
                      l.x = f.x;
                      break;
                    case v.PATHSEG_LINETO_VERTICAL_ABS:
                      l.y = f.y;
                      break;
                    case v.PATHSEG_LINETO_REL:
                    case v.PATHSEG_MOVETO_REL:
                    case v.PATHSEG_CURVETO_CUBIC_REL:
                    case v.PATHSEG_CURVETO_QUADRATIC_REL:
                    case v.PATHSEG_ARC_REL:
                    case v.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case v.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                      var y = f;
                      l.x += y.x, l.y += y.y;
                      break;
                    case v.PATHSEG_LINETO_HORIZONTAL_REL:
                      l.x += f.x;
                      break;
                    case v.PATHSEG_LINETO_VERTICAL_REL:
                      l.y += f.y;
                      break;
                    case v.PATHSEG_UNKNOWN:
                    case v.PATHSEG_CLOSEPATH:
                      continue;
                    }
                    r.push({
                      x: l.x * t + n.x,
                      y: l.y * t + n.y
                    });
                  }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              return r;
            }(this.paths, h, this.offset);
          }
        },
        {
          key: 'downloadSvgPath',
          value: function (e, t) {
            return a(this, void 0, void 0, regeneratorRuntime.mark(function n() {
              var i, o, r, a;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch (n.prev = n.next) {
                  case 0:
                    if (i = this.options, o = e || i.url, r = null != t && t, o && (void 0 === this.paths || r)) {
                      n.next = 5;
                      break;
                    }
                    return n.abrupt('return', this.raw);
                  case 5:
                    return n.next = 7, fetch(o);
                  case 7:
                    if ((a = n.sent).ok) {
                      n.next = 10;
                      break;
                    }
                    throw new Error('tsParticles Error - Error occurred during polygon mask download');
                  case 10:
                    return n.t0 = this, n.next = 13, a.text();
                  case 13:
                    return n.t1 = n.sent, n.t2 = t, n.abrupt('return', n.t0.parseSvgPath.call(n.t0, n.t1, n.t2));
                  case 16:
                  case 'end':
                    return n.stop();
                  }
              }, n, this);
            }));
          }
        },
        {
          key: 'drawPoints',
          value: function () {
            if (this.raw) {
              var e, t = o(this.raw);
              try {
                for (t.s(); !(e = t.n()).done;) {
                  var n = e.value;
                  this.container.particles.addParticle({
                    x: n.x,
                    y: n.y
                  });
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          }
        },
        {
          key: 'randomPoint',
          value: function () {
            var e, t = this.container, n = this.options;
            if (n.type === u.Type.inline)
              switch (n.inline.arrangement) {
              case u.InlineArrangement.randomPoint:
                e = this.getRandomPoint();
                break;
              case u.InlineArrangement.randomLength:
                e = this.getRandomPointByLength();
                break;
              case u.InlineArrangement.equidistant:
                e = this.getEquidistantPointByIndex(t.particles.count);
                break;
              case u.InlineArrangement.onePerPoint:
              case u.InlineArrangement.perPoint:
              default:
                e = this.getPointByIndex(t.particles.count);
              }
            else
              e = {
                x: Math.random() * t.canvas.size.width,
                y: Math.random() * t.canvas.size.height
              };
            return this.checkInsidePolygon(e) ? e : this.randomPoint();
          }
        },
        {
          key: 'getRandomPoint',
          value: function () {
            if (!this.raw || !this.raw.length)
              throw new Error(s.Constants.noPolygonDataLoaded);
            var e = s.Utils.itemFromArray(this.raw);
            return {
              x: e.x,
              y: e.y
            };
          }
        },
        {
          key: 'getRandomPointByLength',
          value: function () {
            var e, t, n, i = this.options;
            if (!this.raw || !this.raw.length || !(null === (e = this.paths) || void 0 === e ? void 0 : e.length))
              throw new Error(s.Constants.noPolygonDataLoaded);
            var o = s.Utils.itemFromArray(this.paths), r = Math.floor(Math.random() * o.length) + 1, a = o.element.getPointAtLength(r);
            return {
              x: a.x * i.scale + ((null === (t = this.offset) || void 0 === t ? void 0 : t.x) || 0),
              y: a.y * i.scale + ((null === (n = this.offset) || void 0 === n ? void 0 : n.y) || 0)
            };
          }
        },
        {
          key: 'getEquidistantPointByIndex',
          value: function (e) {
            var t, n, i, r, a, u, l, c = this.container.actualOptions, f = this.options;
            if (!this.raw || !this.raw.length || !(null === (t = this.paths) || void 0 === t ? void 0 : t.length))
              throw new Error(s.Constants.noPolygonDataLoaded);
            var v, d, y = 0, h = this.paths.reduce(function (e, t) {
                return e + t.length;
              }, 0) / c.particles.number.value, p = o(this.paths);
            try {
              for (p.s(); !(d = p.n()).done;) {
                var b = d.value, m = h * e - y;
                if (m <= b.length) {
                  v = b.element.getPointAtLength(m);
                  break;
                }
                y += b.length;
              }
            } catch (e) {
              p.e(e);
            } finally {
              p.f();
            }
            return {
              x: (null !== (n = null == v ? void 0 : v.x) && void 0 !== n ? n : 0) * f.scale + (null !== (r = null === (i = this.offset) || void 0 === i ? void 0 : i.x) && void 0 !== r ? r : 0),
              y: (null !== (a = null == v ? void 0 : v.y) && void 0 !== a ? a : 0) * f.scale + (null !== (l = null === (u = this.offset) || void 0 === u ? void 0 : u.y) && void 0 !== l ? l : 0)
            };
          }
        },
        {
          key: 'getPointByIndex',
          value: function (e) {
            if (!this.raw || !this.raw.length)
              throw new Error(s.Constants.noPolygonDataLoaded);
            var t = this.raw[e % this.raw.length];
            return {
              x: t.x,
              y: t.y
            };
          }
        },
        {
          key: 'createPath2D',
          value: function () {
            var e, t, n = this, i = this.options;
            if (this.path2DSupported && (null === (e = this.paths) || void 0 === e ? void 0 : e.length)) {
              var r, a = o(this.paths);
              try {
                var u = function () {
                  var e = r.value, o = null === (t = e.element) || void 0 === t ? void 0 : t.getAttribute('d');
                  if (o) {
                    var a = new Path2D(o), u = document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGMatrix(), s = new Path2D(), l = u.scale(i.scale);
                    s.addPath ? (s.addPath(a, l), e.path2d = s) : delete e.path2d;
                  } else
                    delete e.path2d;
                  if (e.path2d || !n.raw)
                    return 'continue';
                  e.path2d = new Path2D(), e.path2d.moveTo(n.raw[0].x, n.raw[0].y), n.raw.forEach(function (t, n) {
                    var i;
                    n > 0 && (null === (i = e.path2d) || void 0 === i || i.lineTo(t.x, t.y));
                  }), e.path2d.closePath();
                };
                for (a.s(); !(r = a.n()).done;)
                  u();
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            }
          }
        },
        {
          key: 'initRawData',
          value: function (e) {
            return a(this, void 0, void 0, regeneratorRuntime.mark(function t() {
              var n, i, o, r;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch (t.prev = t.next) {
                  case 0:
                    if (!(n = this.options).url) {
                      t.next = 7;
                      break;
                    }
                    return t.next = 4, this.downloadSvgPath(n.url, e);
                  case 4:
                    this.raw = t.sent, t.next = 8;
                    break;
                  case 7:
                    n.data && ('string' != typeof (i = n.data) ? (r = i.path instanceof Array ? i.path.map(function (e) {
                      return '<path d="'.concat(e, '" />');
                    }).join('') : '<path d="'.concat(i.path, '" />'), o = '<svg '.concat('xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"', ' width="').concat(i.size.width, '" height="').concat(i.size.height, '">').concat(r, '</svg>')) : o = i, this.raw = this.parseSvgPath(o, e));
                  case 8:
                    this.createPath2D();
                  case 9:
                  case 'end':
                    return t.stop();
                  }
              }, t, this);
            }));
          }
        }
      ]) && i(t.prototype, n), r && i(t, r), e;
    }();
    t.PolygonMaskInstance = h;
  },
  fReP: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.InlineArrangement = void 0, function (e) {
      e.equidistant = 'equidistant', e.onePerPoint = 'one-per-point', e.perPoint = 'per-point', e.randomLength = 'random-length', e.randomPoint = 'random-point';
    }(t.InlineArrangement || (t.InlineArrangement = {}));
  },
  foZh: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Connect = void 0;
    var o = n('KttE'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.distance = 80, this.links = new o.ConnectLinks(), this.radius = 60;
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n;
              void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), this.links.load(null !== (n = null !== (t = e.links) && void 0 !== t ? t : e.lineLinked) && void 0 !== n ? n : e.line_linked), void 0 !== e.radius && (this.radius = e.radius));
            }
          },
          {
            key: 'line_linked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          },
          {
            key: 'lineLinked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          }
        ]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Connect = r;
  },
  fxbo: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.GrabLinks = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.blink = !1, this.consent = !1, this.opacity = 1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.blink && (this.blink = e.blink), void 0 !== e.color && (this.color = o.OptionsColor.create(this.color, e.color)), void 0 !== e.consent && (this.consent = e.consent), void 0 !== e.opacity && (this.opacity = e.opacity));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.GrabLinks = r;
  },
  gYxR: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PolygonDrawerBase = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'getSidesCount',
          value: function (e) {
            var t, n, i = e.shapeData;
            return null !== (n = null !== (t = null == i ? void 0 : i.sides) && void 0 !== t ? t : null == i ? void 0 : i.nb_sides) && void 0 !== n ? n : 5;
          }
        },
        {
          key: 'draw',
          value: function (e, t, n) {
            var i = this.getCenter(t, n), o = this.getSidesData(t, n), r = o.count.numerator * o.count.denominator, a = o.count.numerator / o.count.denominator, u = 180 * (a - 2) / a, s = Math.PI - Math.PI * u / 180;
            if (e) {
              e.beginPath(), e.translate(i.x, i.y), e.moveTo(0, 0);
              for (var l = 0; l < r; l++)
                e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(s);
            }
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.PolygonDrawerBase = o;
  },
  gp12: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Trail = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.enable = !1, this.length = 10, this.fillColor = new o.OptionsColor(), this.fillColor.value = '#000000';
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), this.fillColor = o.OptionsColor.create(this.fillColor, e.fillColor), void 0 !== e.length && (this.length = e.length));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Trail = r;
  },
  gpyY: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Attractor = void 0;
    var a = n('C9b5'), u = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'interact',
            value: function (e) {
              var t, n, o = this.container, r = null !== (t = e.attractDistance) && void 0 !== t ? t : o.retina.attractDistance, u = e.getPosition(), s = i(o.particles.quadTree.queryCircle(u, r));
              try {
                for (s.s(); !(n = s.n()).done;) {
                  var l = n.value;
                  if (e !== l && l.options.move.attract.enable && !l.destroyed && !l.spawning) {
                    var c = l.getPosition(), f = a.NumberUtils.getDistances(u, c), v = f.dx, d = f.dy, y = e.options.move.attract.rotate, h = v / (1000 * y.x), p = d / (1000 * y.y);
                    e.velocity.x -= h, e.velocity.y -= p, l.velocity.x += h, l.velocity.y += p;
                  }
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
            }
          },
          {
            key: 'isEnabled',
            value: function (e) {
              return e.options.move.attract.enable;
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Attractor = u;
  },
  hNh6: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Repulser = void 0;
    var a = n('ZlLd'), u = n('C9b5'), s = n('q8jH'), l = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.actualOptions, n = e.interactivity.mouse, i = t.interactivity.events, o = i.onDiv, r = u.Utils.isDivModeEnabled(a.DivMode.repulse, o);
              if (!(r || i.onHover.enable && n.position || i.onClick.enable && n.clickPosition))
                return !1;
              var s = i.onHover.mode, l = i.onClick.mode;
              return u.Utils.isInArray(a.HoverMode.repulse, s) || u.Utils.isInArray(a.ClickMode.repulse, l) || r;
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'interact',
            value: function () {
              var e = this, t = this.container, n = t.actualOptions, i = t.interactivity.status === u.Constants.mouseMoveEvent, o = n.interactivity.events, r = o.onHover.enable, s = o.onHover.mode, l = o.onClick.enable, c = o.onClick.mode, f = o.onDiv;
              i && r && u.Utils.isInArray(a.HoverMode.repulse, s) ? this.hoverRepulse() : l && u.Utils.isInArray(a.ClickMode.repulse, c) ? this.clickRepulse() : u.Utils.divModeExecute(a.DivMode.repulse, f, function (t, n) {
                return e.singleSelectorRepulse(t, n);
              });
            }
          },
          {
            key: 'singleSelectorRepulse',
            value: function (e, t) {
              var n = this, i = this.container, o = document.querySelectorAll(e);
              o.length && o.forEach(function (e) {
                var o = e, r = i.retina.pixelRatio, s = {
                    x: (o.offsetLeft + o.offsetWidth / 2) * r,
                    y: (o.offsetTop + o.offsetHeight / 2) * r
                  }, l = o.offsetWidth / 2 * r, c = t.type === a.DivType.circle ? new u.Circle(s.x, s.y, l) : new u.Rectangle(o.offsetLeft * r, o.offsetTop * r, o.offsetWidth * r, o.offsetHeight * r), f = i.actualOptions.interactivity.modes.repulse.divs, v = u.Utils.divMode(f, o);
                n.processRepulse(s, l, c, v);
              });
            }
          },
          {
            key: 'hoverRepulse',
            value: function () {
              var e = this.container, t = e.interactivity.mouse.position;
              if (t) {
                var n = e.retina.repulseModeDistance;
                this.processRepulse(t, n, new u.Circle(t.x, t.y, n));
              }
            }
          },
          {
            key: 'processRepulse',
            value: function (e, t, n, o) {
              var r, a, s = this.container, l = s.actualOptions.interactivity.modes.repulse, c = i(s.particles.quadTree.query(n));
              try {
                for (c.s(); !(a = c.n()).done;) {
                  var f = a.value, v = u.NumberUtils.getDistances(f.position, e), d = v.dx, y = v.dy, h = v.distance, p = {
                      x: d / h,
                      y: y / h
                    }, b = (null !== (r = null == o ? void 0 : o.speed) && void 0 !== r ? r : l.speed) * l.factor, m = u.NumberUtils.clamp(u.NumberUtils.calcEasing(1 - h / t, l.easing) * b, 0, l.maxSpeed);
                  f.position.x += p.x * m, f.position.y += p.y * m;
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
          },
          {
            key: 'clickRepulse',
            value: function () {
              var e = this.container;
              if (e.repulse.finish || (e.repulse.count || (e.repulse.count = 0), e.repulse.count++, e.repulse.count === e.particles.count && (e.repulse.finish = !0)), e.repulse.clicking) {
                var t = e.retina.repulseModeDistance, n = Math.pow(t / 6, 3), o = e.interactivity.mouse.clickPosition;
                if (void 0 === o)
                  return;
                var r, a = new u.Circle(o.x, o.y, n), l = i(e.particles.quadTree.query(a));
                try {
                  for (l.s(); !(r = l.n()).done;) {
                    var c = r.value, f = u.NumberUtils.getDistances(o, c.position), v = f.dx, d = f.dy, y = f.distance, h = y * y;
                    if (h <= n) {
                      e.repulse.particles.push(c);
                      var p = e.actualOptions.interactivity.modes.repulse.speed, b = s.Vector.create(v, d);
                      b.length = -n * p / h, c.velocity.setTo(b);
                    }
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              } else if (!1 === e.repulse.clicking) {
                var m, g = i(e.repulse.particles);
                try {
                  for (g.s(); !(m = g.n()).done;) {
                    var w = m.value;
                    w.velocity.setTo(w.initialVelocity);
                  }
                } catch (e) {
                  g.e(e);
                } finally {
                  g.f();
                }
                e.repulse.particles = [];
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Repulser = l;
  },
  hQOV: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Absorbers = void 0;
    var a = n('d0ux'), u = n('C9b5'), s = n('iot7'), l = n('FvHc'), c = function () {
        function e(t) {
          var n = this;
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [];
          var i = t;
          i.getAbsorber = function (e) {
            return void 0 === e || 'number' == typeof e ? n.array[e || 0] : n.array.find(function (t) {
              return t.name === e;
            });
          }, i.addAbsorber = function (e, t) {
            return n.addAbsorber(e, t);
          };
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'init',
            value: function (e) {
              var t, n;
              if (e) {
                e.absorbers && (e.absorbers instanceof Array ? this.absorbers = e.absorbers.map(function (e) {
                  var t = new s.Absorber();
                  return t.load(e), t;
                }) : (this.absorbers instanceof Array && (this.absorbers = new s.Absorber()), this.absorbers.load(e.absorbers)));
                var o = null === (n = null === (t = e.interactivity) || void 0 === t ? void 0 : t.modes) || void 0 === n ? void 0 : n.absorbers;
                if (o && (o instanceof Array ? this.interactivityAbsorbers = o.map(function (e) {
                    var t = new s.Absorber();
                    return t.load(e), t;
                  }) : (this.interactivityAbsorbers instanceof Array && (this.interactivityAbsorbers = new s.Absorber()), this.interactivityAbsorbers.load(o))), this.absorbers instanceof Array) {
                  var r, a = i(this.absorbers);
                  try {
                    for (a.s(); !(r = a.n()).done;) {
                      var u = r.value;
                      this.addAbsorber(u);
                    }
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                } else
                  this.addAbsorber(this.absorbers);
              }
            }
          },
          {
            key: 'particleUpdate',
            value: function (e) {
              var t, n = i(this.array);
              try {
                for (n.s(); !(t = n.n()).done && (t.value.attract(e), !e.destroyed););
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            }
          },
          {
            key: 'draw',
            value: function (e) {
              var t, n = i(this.array);
              try {
                for (n.s(); !(t = n.n()).done;) {
                  var o = t.value;
                  e.save(), o.draw(e), e.restore();
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            }
          },
          {
            key: 'stop',
            value: function () {
              this.array = [];
            }
          },
          {
            key: 'resize',
            value: function () {
              var e, t = i(this.array);
              try {
                for (t.s(); !(e = t.n()).done;)
                  e.value.resize();
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
          {
            key: 'handleClickMode',
            value: function (e) {
              var t = this.container, n = this.absorbers, i = this.interactivityAbsorbers;
              if (e === l.AbsorberClickMode.absorber) {
                var o;
                i instanceof Array ? i.length > 0 && (o = u.Utils.itemFromArray(i)) : o = i;
                var r = null != o ? o : n instanceof Array ? u.Utils.itemFromArray(n) : n, a = t.interactivity.mouse.clickPosition;
                this.addAbsorber(r, a);
              }
            }
          },
          {
            key: 'addAbsorber',
            value: function (e, t) {
              var n = new a.AbsorberInstance(this, this.container, e, t);
              return this.array.push(n), n;
            }
          },
          {
            key: 'removeAbsorber',
            value: function (e) {
              var t = this.array.indexOf(e);
              t >= 0 && this.array.splice(t, 1);
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Absorbers = c;
  },
  i4u4: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LifeDelay = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(c, e);
      var t, n, i, s = u(c);
      function c() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (e = s.call(this)).sync = !1, e;
      }
      return t = c, (n = [{
          key: 'load',
          value: function (e) {
            e && (r(l(c.prototype), 'load', this).call(this, e), void 0 !== e.sync && (this.sync = e.sync));
          }
        }]) && o(t.prototype, n), i && o(t, i), c;
    }(n('9P/A').ValueWithRandom);
    t.LifeDelay = c;
  },
  iot7: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Absorber = void 0;
    var o = n('Ej6A'), r = n('vRcM'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new r.OptionsColor(), this.color.value = '#000000', this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new o.AbsorberSize();
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.color && (this.color = r.OptionsColor.create(this.color, e.color)), void 0 !== e.draggable && (this.draggable = e.draggable), this.name = e.name, void 0 !== e.opacity && (this.opacity = e.opacity), void 0 !== e.position && (this.position = {
                x: e.position.x,
                y: e.position.y
              }), void 0 !== e.size && this.size.load(e.size), void 0 !== e.destroy && (this.destroy = e.destroy), void 0 !== e.orbits && (this.orbits = e.orbits));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Absorber = a;
  },
  iuDB: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function r(e) {
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
        var n, i = u(e);
        if (t) {
          var o = u(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return a(this, n);
      };
    }
    function a(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.BounceFactor = void 0;
    var s = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && o(e, t);
      }(n, e);
      var t = r(n);
      function n() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, n), (e = t.call(this)).random.minimumValue = 0.1, e.value = 1, e;
      }
      return n;
    }(n('9P/A').ValueWithRandom);
    t.BounceFactor = s;
  },
  j6XU: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.MoveType = void 0, function (e) {
      e.path = 'path', e.radius = 'radius';
    }(t.MoveType || (t.MoveType = {}));
  },
  jNRe: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
  },
  k9Lu: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.RotateAnimation = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.enable = !1, this.speed = 0, this.sync = !1;
      }
      var t, n, o;
      return t = e, (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== e && (void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.speed && (this.speed = e.speed), void 0 !== e.sync && (this.sync = e.sync));
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.RotateAnimation = o;
  },
  kb48: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function a(e, t, n) {
      return (a = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function u(e, t) {
      return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function s(e) {
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
        var n, i = c(e);
        if (t) {
          var o = c(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Bubble = void 0;
    var f = n('s/5y'), v = function (e) {
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
        }(v, e);
        var t, n, i, l = s(v);
        function v() {
          return o(this, v), l.apply(this, arguments);
        }
        return t = v, (n = [{
            key: 'load',
            value: function (e) {
              a(c(v.prototype), 'load', this).call(this, e), void 0 !== e && void 0 !== e.divs && (e.divs instanceof Array ? this.divs = e.divs.map(function (e) {
                var t = new f.BubbleDiv();
                return t.load(e), t;
              }) : ((this.divs instanceof Array || !this.divs) && (this.divs = new f.BubbleDiv()), this.divs.load(e.divs)));
            }
          }]) && r(t.prototype, n), i && r(t, i), v;
      }(n('XGcx').BubbleBase);
    t.Bubble = v;
  },
  kxr2: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Grab = void 0;
    var o = n('fxbo'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.distance = 100, this.links = new o.GrabLinks();
        }
        var t, n, r;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n;
              void 0 !== e && (void 0 !== e.distance && (this.distance = e.distance), this.links.load(null !== (n = null !== (t = e.links) && void 0 !== t ? t : e.lineLinked) && void 0 !== n ? n : e.line_linked));
            }
          },
          {
            key: 'line_linked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          },
          {
            key: 'lineLinked',
            get: function () {
              return this.links;
            },
            set: function (e) {
              this.links = e;
            }
          }
        ]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Grab = r;
  },
  lp8f: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Grabber = void 0;
    var a = n('C9b5'), u = n('ubkD'), s = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.container = t;
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'isEnabled',
            value: function () {
              var e = this.container, t = e.interactivity.mouse, n = e.actualOptions.interactivity.events;
              if (!n.onHover.enable || !t.position)
                return !1;
              var i = n.onHover.mode;
              return a.Utils.isInArray(u.HoverMode.grab, i);
            }
          },
          {
            key: 'reset',
            value: function () {
            }
          },
          {
            key: 'interact',
            value: function () {
              var e, t = this.container, n = t.actualOptions.interactivity;
              if (n.events.onHover.enable && t.interactivity.status === a.Constants.mouseMoveEvent) {
                var o = t.interactivity.mouse.position;
                if (void 0 === o)
                  return;
                var r, u = t.retina.grabModeDistance, s = i(t.particles.quadTree.queryCircle(o, u));
                try {
                  for (s.s(); !(r = s.n()).done;) {
                    var l = r.value, c = l.getPosition(), f = a.NumberUtils.getDistance(c, o);
                    if (f <= u) {
                      var v = n.modes.grab.links, d = v.opacity, y = d - f * d / u;
                      if (y > 0) {
                        var h = null !== (e = v.color) && void 0 !== e ? e : l.options.links.color;
                        if (!t.particles.grabLineColor) {
                          var p = t.actualOptions.interactivity.modes.grab.links;
                          t.particles.grabLineColor = a.ColorUtils.getLinkRandomColor(h, p.blink, p.consent);
                        }
                        var b = a.ColorUtils.getLinkColor(l, void 0, t.particles.grabLineColor);
                        if (void 0 === b)
                          return;
                        t.canvas.drawGrabLine(l, b, y, o);
                      }
                    }
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.Grabber = s;
  },
  lu4H: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Responsive = void 0;
    var o = n('C9b5'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.maxWidth = 1 / 0, this.options = {};
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (void 0 !== e.maxWidth && (this.maxWidth = e.maxWidth), void 0 !== e.options && (this.options = o.Utils.deepExtend({}, e.options)));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Responsive = r;
  },
  mwEM: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Modes = void 0;
    var o = n('kb48'), r = n('foZh'), a = n('kxr2'), u = n('LPIU'), s = n('4tm2'), l = n('pmlM'), c = n('PeBj'), f = n('XUYF'), v = n('Cx7u'), d = n('/KHN'), y = n('VOV1'), h = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.attract = new v.Attract(), this.bounce = new y.Bounce(), this.bubble = new o.Bubble(), this.connect = new r.Connect(), this.grab = new a.Grab(), this.light = new d.Light(), this.push = new s.Push(), this.remove = new u.Remove(), this.repulse = new l.Repulse(), this.slow = new c.Slow(), this.trail = new f.Trail();
        }
        var t, n, h;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.attract.load(e.attract), this.bubble.load(e.bubble), this.connect.load(e.connect), this.grab.load(e.grab), this.light.load(e.light), this.push.load(e.push), this.remove.load(e.remove), this.repulse.load(e.repulse), this.slow.load(e.slow), this.trail.load(e.trail));
            }
          }]) && i(t.prototype, n), h && i(t, h), e;
      }();
    t.Modes = h;
  },
  nAcs: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LightGradient = void 0;
    var o = n('vRcM'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.start = new o.OptionsColor(), this.stop = new o.OptionsColor(), this.start.value = '#ffffff', this.stop.value = '#000000';
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.start = o.OptionsColor.create(this.start, e.start), this.stop = o.OptionsColor.create(this.stop, e.stop));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.LightGradient = r;
  },
  nxdw: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Emitter = void 0;
    var o = n('KdG0'), r = n('7Ohm'), a = n('C9b5'), u = n('PFhk'), s = n('W31w'), l = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.autoPlay = !0, this.life = new r.EmitterLife(), this.rate = new o.EmitterRate();
        }
        var t, n, l;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.autoPlay && (this.autoPlay = e.autoPlay), void 0 !== e.size && (void 0 === this.size && (this.size = new u.EmitterSize()), this.size.load(e.size)), void 0 !== e.direction && (this.direction = e.direction), this.life.load(e.life), this.name = e.name, void 0 !== e.particles && (this.particles = a.Utils.deepExtend({}, e.particles)), this.rate.load(e.rate), void 0 !== e.position && (this.position = {
                x: e.position.x,
                y: e.position.y
              }), void 0 !== e.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new s.AnimatableColor()), this.spawnColor.load(e.spawnColor)));
            }
          }]) && i(t.prototype, n), l && i(t, l), e;
      }();
    t.Emitter = l;
  },
  pPzP: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var o = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), r = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || o(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EmittersPlugin = void 0;
    var a = n('C9b5'), u = n('QyzU'), s = n('D98Q'), l = n('nxdw'), c = new (function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.id = 'emitters';
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'getPlugin',
            value: function (e) {
              return new u.Emitters(e);
            }
          },
          {
            key: 'needsPlugin',
            value: function (e) {
              var t, n, i;
              if (void 0 === e)
                return !1;
              var o = e.emitters, r = !1;
              return o instanceof Array ? o.length && (r = !0) : (void 0 !== o || (null === (i = null === (n = null === (t = e.interactivity) || void 0 === t ? void 0 : t.events) || void 0 === n ? void 0 : n.onClick) || void 0 === i ? void 0 : i.mode) && a.Utils.isInArray(s.EmitterClickMode.emitter, e.interactivity.events.onClick.mode)) && (r = !0), r;
            }
          },
          {
            key: 'loadOptions',
            value: function (e, t) {
              var n, i;
              if (this.needsPlugin(e) || this.needsPlugin(t)) {
                var o = e;
                if (null == t ? void 0 : t.emitters)
                  if ((null == t ? void 0 : t.emitters) instanceof Array)
                    o.emitters = null == t ? void 0 : t.emitters.map(function (e) {
                      var t = new l.Emitter();
                      return t.load(e), t;
                    });
                  else {
                    var r = o.emitters;
                    void 0 === (null == r ? void 0 : r.load) && (o.emitters = r = new l.Emitter()), r.load(null == t ? void 0 : t.emitters);
                  }
                var a = null === (i = null === (n = null == t ? void 0 : t.interactivity) || void 0 === n ? void 0 : n.modes) || void 0 === i ? void 0 : i.emitters;
                if (a)
                  if (a instanceof Array)
                    o.interactivity.modes.emitters = a.map(function (e) {
                      var t = new l.Emitter();
                      return t.load(e), t;
                    });
                  else {
                    var u = o.interactivity.modes.emitters;
                    void 0 === (null == u ? void 0 : u.load) && (o.interactivity.modes.emitters = u = new l.Emitter()), u.load(a);
                  }
              }
            }
          }
        ]) && i(t.prototype, n), o && i(t, o), e;
      }())();
    t.EmittersPlugin = c, r(n('D98Q'), t);
  },
  pmYS: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.SquareDrawer = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'getSidesCount',
          value: function () {
            return 4;
          }
        },
        {
          key: 'draw',
          value: function (e, t, n) {
            e.rect(-n, -n, 2 * n, 2 * n);
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.SquareDrawer = o;
  },
  pmlM: function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function a(e, t, n) {
      return (a = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function u(e, t) {
      return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function s(e) {
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
        var n, i = c(e);
        if (t) {
          var o = c(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function c(e) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Repulse = void 0;
    var f = n('9XT8'), v = function (e) {
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
        }(v, e);
        var t, n, i, l = s(v);
        function v() {
          return o(this, v), l.apply(this, arguments);
        }
        return t = v, (n = [{
            key: 'load',
            value: function (e) {
              a(c(v.prototype), 'load', this).call(this, e), void 0 !== (null == e ? void 0 : e.divs) && (e.divs instanceof Array ? this.divs = e.divs.map(function (e) {
                var t = new f.RepulseDiv();
                return t.load(e), t;
              }) : ((this.divs instanceof Array || !this.divs) && (this.divs = new f.RepulseDiv()), this.divs.load(e.divs)));
            }
          }]) && r(t.prototype, n), i && r(t, i), v;
      }(n('Tdtd').RepulseBase);
    t.Repulse = v;
  },
  q39K: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.AbsorberClickMode = void 0, function (e) {
      e.absorber = 'absorber';
    }(t.AbsorberClickMode || (t.AbsorberClickMode = {}));
  },
  q7n0: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ThemeDefault = void 0;
    var o = n('ubkD'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.mode = o.ThemeMode.any, this.value = !1;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.mode && (this.mode = e.mode), void 0 !== e.value && (this.value = e.value));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.ThemeDefault = r;
  },
  qtyS: function (e, t, n) {
    'use strict';
    var i = this && this.__createBinding || (Object.create ? function (e, t, n, i) {
        void 0 === i && (i = n), Object.defineProperty(e, i, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, i) {
        void 0 === i && (i = n), e[i] = t[n];
      }), o = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || i(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), o(n('fReP'), t), o(n('j6XU'), t), o(n('Wu3R'), t);
  },
  's/5y': function (e, t, n) {
    'use strict';
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return (r = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var i = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
          return e;
        }(e, t);
        if (i) {
          var o = Object.getOwnPropertyDescriptor(i, t);
          return o.get ? o.get.call(n) : o.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function u(e) {
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
        var n, i = l(e);
        if (t) {
          var o = l(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else
          n = i.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== i(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.BubbleDiv = void 0;
    var c = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && a(e, t);
      }(c, e);
      var t, n, i, s = u(c);
      function c() {
        var e;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, c), (e = s.call(this)).selectors = [], e;
      }
      return t = c, (n = [
        {
          key: 'load',
          value: function (e) {
            r(l(c.prototype), 'load', this).call(this, e), void 0 !== e && (void 0 !== e.ids && (this.ids = e.ids), void 0 !== e.selectors && (this.selectors = e.selectors));
          }
        },
        {
          key: 'ids',
          get: function () {
            return this.selectors instanceof Array ? this.selectors.map(function (e) {
              return e.replace('#', '');
            }) : this.selectors.replace('#', '');
          },
          set: function (e) {
            this.selectors = e instanceof Array ? e.map(function (e) {
              return '#'.concat(e);
            }) : '#'.concat(e);
          }
        }
      ]) && o(t.prototype, n), i && o(t, i), c;
    }(n('XGcx').BubbleBase);
    t.BubbleDiv = c;
  },
  sJdS: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.DrawStroke = void 0;
    var o = n('vRcM'), r = n('C9b5'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.color = new o.OptionsColor(), this.width = 0.5, this.opacity = 1;
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              var t;
              void 0 !== e && (this.color = o.OptionsColor.create(this.color, e.color), 'string' == typeof this.color.value && (this.opacity = null !== (t = r.ColorUtils.stringToAlpha(this.color.value)) && void 0 !== t ? t : this.opacity), void 0 !== e.opacity && (this.opacity = e.opacity), void 0 !== e.width && (this.width = e.width));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.DrawStroke = a;
  },
  tNle: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Shape = void 0;
    var o = n('ZlLd'), r = n('C9b5'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.options = {}, this.type = o.ShapeType.circle;
        }
        var t, n, a;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t, n, i;
              if (void 0 !== e) {
                var a = null !== (t = e.options) && void 0 !== t ? t : e.custom;
                if (void 0 !== a)
                  for (var u in a) {
                    var s = a[u];
                    void 0 !== s && (this.options[u] = r.Utils.deepExtend(null !== (n = this.options[u]) && void 0 !== n ? n : {}, s));
                  }
                this.loadShape(e.character, o.ShapeType.character, o.ShapeType.char, !0), this.loadShape(e.polygon, o.ShapeType.polygon, o.ShapeType.star, !1), this.loadShape(null !== (i = e.image) && void 0 !== i ? i : e.images, o.ShapeType.image, o.ShapeType.images, !0), void 0 !== e.type && (this.type = e.type);
              }
            }
          },
          {
            key: 'loadShape',
            value: function (e, t, n, i) {
              var o, a, u, s;
              void 0 !== e && (e instanceof Array ? (this.options[t] instanceof Array || (this.options[t] = [], this.options[n] && !i || (this.options[n] = [])), this.options[t] = r.Utils.deepExtend(null !== (o = this.options[t]) && void 0 !== o ? o : [], e), this.options[n] && !i || (this.options[n] = r.Utils.deepExtend(null !== (a = this.options[n]) && void 0 !== a ? a : [], e))) : (this.options[t] instanceof Array && (this.options[t] = {}, this.options[n] && !i || (this.options[n] = {})), this.options[t] = r.Utils.deepExtend(null !== (u = this.options[t]) && void 0 !== u ? u : {}, e), this.options[n] && !i || (this.options[n] = r.Utils.deepExtend(null !== (s = this.options[n]) && void 0 !== s ? s : {}, e))));
            }
          },
          {
            key: 'image',
            get: function () {
              var e;
              return null !== (e = this.options[o.ShapeType.image]) && void 0 !== e ? e : this.options[o.ShapeType.images];
            },
            set: function (e) {
              this.options[o.ShapeType.image] = e, this.options[o.ShapeType.images] = e;
            }
          },
          {
            key: 'custom',
            get: function () {
              return this.options;
            },
            set: function (e) {
              this.options = e;
            }
          },
          {
            key: 'images',
            get: function () {
              return this.image instanceof Array ? this.image : [this.image];
            },
            set: function (e) {
              this.image = e;
            }
          },
          {
            key: 'stroke',
            get: function () {
              return [];
            },
            set: function (e) {
            }
          },
          {
            key: 'character',
            get: function () {
              var e;
              return null !== (e = this.options[o.ShapeType.character]) && void 0 !== e ? e : this.options[o.ShapeType.char];
            },
            set: function (e) {
              this.options[o.ShapeType.character] = e, this.options[o.ShapeType.char] = e;
            }
          },
          {
            key: 'polygon',
            get: function () {
              var e;
              return null !== (e = this.options[o.ShapeType.polygon]) && void 0 !== e ? e : this.options[o.ShapeType.star];
            },
            set: function (e) {
              this.options[o.ShapeType.polygon] = e, this.options[o.ShapeType.star] = e;
            }
          }
        ]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Shape = a;
  },
  uP41: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Move = void 0;
    var o = n('qtyS'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.radius = 10, this.type = o.MoveType.path;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.radius && (this.radius = e.radius), void 0 !== e.type && (this.type = e.type));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Move = r;
  },
  vGWO: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.PolygonMask = void 0;
    var o = n('qtyS'), r = n('LfGR'), a = n('uP41'), u = n('887v'), s = n('KbmP'), l = n('C9b5'), c = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.draw = new r.Draw(), this.enable = !1, this.inline = new u.Inline(), this.move = new a.Move(), this.scale = 1, this.type = o.Type.none;
        }
        var t, n, c;
        return t = e, (n = [
          {
            key: 'load',
            value: function (e) {
              var t;
              if (void 0 !== e) {
                this.draw.load(e.draw);
                var n = null !== (t = e.inline) && void 0 !== t ? t : { arrangement: e.inlineArrangement };
                void 0 !== n && this.inline.load(n), this.move.load(e.move), void 0 !== e.scale && (this.scale = e.scale), void 0 !== e.type && (this.type = e.type), void 0 !== e.enable ? this.enable = e.enable : this.enable = this.type !== o.Type.none, void 0 !== e.url && (this.url = e.url), void 0 !== e.data && ('string' == typeof e.data ? this.data = e.data : (this.data = new s.LocalSvg(), this.data.load(e.data))), void 0 !== e.position && (this.position = l.Utils.deepExtend({}, e.position));
              }
            }
          },
          {
            key: 'inlineArrangement',
            get: function () {
              return this.inline.arrangement;
            },
            set: function (e) {
              this.inline.arrangement = e;
            }
          }
        ]) && i(t.prototype, n), c && i(t, c), e;
      }();
    t.PolygonMask = c;
  },
  vRcM: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.OptionsColor = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.value = '#fff';
      }
      var t, n, o;
      return t = e, o = [{
          key: 'create',
          value: function (t, n) {
            var i = null != t ? t : new e();
            return void 0 !== n && i.load('string' == typeof n ? { value: n } : n), i;
          }
        }], (n = [{
          key: 'load',
          value: function (e) {
            void 0 !== (null == e ? void 0 : e.value) && (this.value = e.value);
          }
        }]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.OptionsColor = o;
  },
  vfib: function (e, t, n) {
    'use strict';
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return o(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var i = 0, r = function () {
            };
          return {
            s: r,
            n: function () {
              return i >= e.length ? { done: !0 } : {
                done: !1,
                value: e[i++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: r
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, u = !0, s = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return u = e.done, e;
        },
        e: function (e) {
          s = !0, a = e;
        },
        f: function () {
          try {
            u || null == n.return || n.return();
          } finally {
            if (s)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++)
        i[n] = e[n];
      return i;
    }
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    var a = this && this.__awaiter || function (e, t, n, i) {
      return new (n || (n = Promise))(function (o, r) {
        function a(e) {
          try {
            s(i.next(e));
          } catch (e) {
            r(e);
          }
        }
        function u(e) {
          try {
            s(i.throw(e));
          } catch (e) {
            r(e);
          }
        }
        function s(e) {
          var t;
          e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, u);
        }
        s((i = i.apply(e, t || [])).next());
      });
    };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ImageDrawer = void 0;
    var u = n('C9b5'), s = n('ZlLd'), l = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.images = [];
        }
        var t, n, o;
        return t = e, (n = [
          {
            key: 'getSidesCount',
            value: function () {
              return 12;
            }
          },
          {
            key: 'getImages',
            value: function (e) {
              var t = this.images.filter(function (t) {
                return t.id === e.id;
              });
              return t.length ? t[0] : (this.images.push({
                id: e.id,
                images: []
              }), this.getImages(e));
            }
          },
          {
            key: 'addImage',
            value: function (e, t) {
              var n = this.getImages(e);
              null == n || n.images.push(t);
            }
          },
          {
            key: 'init',
            value: function (e) {
              var t;
              return a(this, void 0, void 0, regeneratorRuntime.mark(function n() {
                var o, r, a, l, c, f;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch (n.prev = n.next) {
                    case 0:
                      if (o = e.actualOptions, r = o.particles.shape, u.Utils.isInArray(s.ShapeType.image, r.type) || u.Utils.isInArray(s.ShapeType.images, r.type)) {
                        n.next = 4;
                        break;
                      }
                      return n.abrupt('return');
                    case 4:
                      if (!((a = null !== (t = r.options[s.ShapeType.images]) && void 0 !== t ? t : r.options[s.ShapeType.image]) instanceof Array)) {
                        n.next = 25;
                        break;
                      }
                      l = i(a), n.prev = 7, l.s();
                    case 9:
                      if ((c = l.n()).done) {
                        n.next = 15;
                        break;
                      }
                      return f = c.value, n.next = 13, this.loadImageShape(e, f);
                    case 13:
                      n.next = 9;
                      break;
                    case 15:
                      n.next = 20;
                      break;
                    case 17:
                      n.prev = 17, n.t0 = n.catch(7), l.e(n.t0);
                    case 20:
                      return n.prev = 20, l.f(), n.finish(20);
                    case 23:
                      n.next = 27;
                      break;
                    case 25:
                      return n.next = 27, this.loadImageShape(e, a);
                    case 27:
                    case 'end':
                      return n.stop();
                    }
                }, n, this, [[
                    7,
                    17,
                    20,
                    23
                  ]]);
              }));
            }
          },
          {
            key: 'destroy',
            value: function () {
              this.images = [];
            }
          },
          {
            key: 'loadImageShape',
            value: function (e, t) {
              return a(this, void 0, void 0, regeneratorRuntime.mark(function n() {
                var i;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch (n.prev = n.next) {
                    case 0:
                      if (n.prev = 0, !t.replaceColor) {
                        n.next = 7;
                        break;
                      }
                      return n.next = 4, u.Utils.downloadSvgImage(t.src);
                    case 4:
                      n.t0 = n.sent, n.next = 10;
                      break;
                    case 7:
                      return n.next = 9, u.Utils.loadImage(t.src);
                    case 9:
                      n.t0 = n.sent;
                    case 10:
                      (i = n.t0) && this.addImage(e, i), n.next = 17;
                      break;
                    case 14:
                      n.prev = 14, n.t1 = n.catch(0), console.warn('tsParticles error - '.concat(t.src, ' not found'));
                    case 17:
                    case 'end':
                      return n.stop();
                    }
                }, n, this, [[
                    0,
                    14
                  ]]);
              }));
            }
          },
          {
            key: 'draw',
            value: function (e, t, n, i) {
              var o, r;
              if (e) {
                var a = t.image, u = null === (o = null == a ? void 0 : a.data) || void 0 === o ? void 0 : o.element;
                if (u) {
                  var s = null !== (r = null == a ? void 0 : a.ratio) && void 0 !== r ? r : 1, l = {
                      x: -n,
                      y: -n
                    };
                  (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (e.globalAlpha = i), e.drawImage(u, l.x, l.y, 2 * n, 2 * n / s), (null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor) || (e.globalAlpha = 1);
                }
              }
            }
          }
        ]) && r(t.prototype, n), o && r(t, o), e;
      }();
    t.ImageDrawer = l;
  },
  vuZh: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LightArea = void 0;
    var o = n('nAcs'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.gradient = new o.LightGradient(), this.radius = 1000;
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.gradient.load(e.gradient), void 0 !== e.radius && (this.radius = e.radius));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.LightArea = r;
  },
  w1c1: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Attract = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.distance = 200, this.enable = !1, this.rotate = {
          x: 3000,
          y: 3000
        };
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'load',
          value: function (e) {
            var t, n, i, o;
            if (e) {
              void 0 !== e.distance && (this.distance = e.distance), void 0 !== e.enable && (this.enable = e.enable);
              var r = null !== (n = null === (t = e.rotate) || void 0 === t ? void 0 : t.x) && void 0 !== n ? n : e.rotateX;
              void 0 !== r && (this.rotate.x = r);
              var a = null !== (o = null === (i = e.rotate) || void 0 === i ? void 0 : i.y) && void 0 !== o ? o : e.rotateY;
              void 0 !== a && (this.rotate.y = a);
            }
          }
        },
        {
          key: 'rotateX',
          get: function () {
            return this.rotate.x;
          },
          set: function (e) {
            this.rotate.x = e;
          }
        },
        {
          key: 'rotateY',
          get: function () {
            return this.rotate.y;
          },
          set: function (e) {
            this.rotate.y = e;
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.Attract = o;
  },
  wbcO: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Collisions = void 0;
    var o = n('ZlLd'), r = n('za7v'), a = n('AP3k'), u = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.bounce = new r.Bounce(), this.enable = !1, this.mode = o.CollisionMode.bounce, this.overlap = new a.CollisionsOverlap();
        }
        var t, n, u;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (this.bounce.load(e.bounce), void 0 !== e.enable && (this.enable = e.enable), void 0 !== e.mode && (this.mode = e.mode), this.overlap.load(e.overlap));
            }
          }]) && i(t.prototype, n), u && i(t, u), e;
      }();
    t.Collisions = u;
  },
  yCRH: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Life = void 0;
    var o = n('i4u4'), r = n('Rmgd'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.count = 0, this.delay = new o.LifeDelay(), this.duration = new r.LifeDuration();
        }
        var t, n, a;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              void 0 !== e && (void 0 !== e.count && (this.count = e.count), this.delay.load(e.delay), this.duration.load(e.duration));
            }
          }]) && i(t.prototype, n), a && i(t, a), e;
      }();
    t.Life = a;
  },
  yEg2: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.LineDrawer = void 0;
    var o = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'getSidesCount',
          value: function () {
            return 1;
          }
        },
        {
          key: 'draw',
          value: function (e, t, n) {
            e.moveTo(-n / 2, 0), e.lineTo(n / 2, 0);
          }
        }
      ]) && i(t.prototype, n), o && i(t, o), e;
    }();
    t.LineDrawer = o;
  },
  za7v: function (e, t, n) {
    'use strict';
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Bounce = void 0;
    var o = n('iuDB'), r = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.horizontal = new o.BounceFactor(), this.vertical = new o.BounceFactor();
        }
        var t, n, r;
        return t = e, (n = [{
            key: 'load',
            value: function (e) {
              e && (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
            }
          }]) && i(t.prototype, n), r && i(t, r), e;
      }();
    t.Bounce = r;
  }
}]);