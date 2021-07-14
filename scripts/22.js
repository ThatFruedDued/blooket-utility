(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{
  '/6af': function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Range = void 0;
    t.Range = function e(t, n) {
      !function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }(this, e), this.position = {
        x: t,
        y: n
      };
    };
  },
  '2W6z': function (e, t, n) {
    'use strict';
    var r = function () {
    };
    e.exports = r;
  },
  '2kAo': function (e, t, n) {
    'use strict';
    function r(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [], r = !0, i = !1, o = void 0;
        try {
          for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (i)
              throw o;
          }
        }
        return n;
      }(e, t) || o(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function i(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = o(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var r = 0, i = function () {
            };
          return {
            s: i,
            n: function () {
              return r >= e.length ? { done: !0 } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: i
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var a, s = !0, l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return s = e.done, e;
        },
        e: function (e) {
          l = !0, a = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (l)
              throw a;
          }
        }
      };
    }
    function o(e, t) {
      if (e) {
        if ('string' == typeof e)
          return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
      }
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.EventListeners = void 0;
    var l = n('ZlLd'), u = n('ZRNA');
    function c(e, t, n, r, i) {
      if (r) {
        var o = { passive: !0 };
        'boolean' == typeof i ? o.capture = i : void 0 !== i && (o = i), e.addEventListener(t, n, o);
      } else {
        var a = i;
        e.removeEventListener(t, n, a);
      }
    }
    var f = function () {
      function e(t) {
        var n = this;
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e), this.container = t, this.canPush = !0, this.mouseMoveHandler = function (e) {
          return n.mouseTouchMove(e);
        }, this.touchStartHandler = function (e) {
          return n.mouseTouchMove(e);
        }, this.touchMoveHandler = function (e) {
          return n.mouseTouchMove(e);
        }, this.touchEndHandler = function () {
          return n.mouseTouchFinish();
        }, this.mouseLeaveHandler = function () {
          return n.mouseTouchFinish();
        }, this.touchCancelHandler = function () {
          return n.mouseTouchFinish();
        }, this.touchEndClickHandler = function (e) {
          return n.mouseTouchClick(e);
        }, this.mouseUpHandler = function (e) {
          return n.mouseTouchClick(e);
        }, this.mouseDownHandler = function () {
          return n.mouseDown();
        }, this.visibilityChangeHandler = function () {
          return n.handleVisibilityChange();
        }, this.resizeHandler = function () {
          return n.handleWindowResize();
        };
      }
      var t, n, o;
      return t = e, (n = [
        {
          key: 'addListeners',
          value: function () {
            this.manageListeners(!0);
          }
        },
        {
          key: 'removeListeners',
          value: function () {
            this.manageListeners(!1);
          }
        },
        {
          key: 'manageListeners',
          value: function (e) {
            var t, n = this.container, r = n.actualOptions, i = r.interactivity.detectsOn, o = u.Constants.mouseLeaveEvent;
            if (i === l.InteractivityDetect.window)
              n.interactivity.element = window, o = u.Constants.mouseOutEvent;
            else if (i === l.InteractivityDetect.parent && n.canvas.element) {
              var a = n.canvas.element;
              n.interactivity.element = null !== (t = a.parentElement) && void 0 !== t ? t : a.parentNode;
            } else
              n.interactivity.element = n.canvas.element;
            var s = n.interactivity.element;
            if (s) {
              var f = s;
              (r.interactivity.events.onHover.enable || r.interactivity.events.onClick.enable) && (c(s, u.Constants.mouseMoveEvent, this.mouseMoveHandler, e), c(s, u.Constants.touchStartEvent, this.touchStartHandler, e), c(s, u.Constants.touchMoveEvent, this.touchMoveHandler, e), r.interactivity.events.onClick.enable ? (c(s, u.Constants.touchEndEvent, this.touchEndClickHandler, e), c(s, u.Constants.mouseUpEvent, this.mouseUpHandler, e), c(s, u.Constants.mouseDownEvent, this.mouseDownHandler, e)) : c(s, u.Constants.touchEndEvent, this.touchEndHandler, e), c(s, o, this.mouseLeaveHandler, e), c(s, u.Constants.touchCancelEvent, this.touchCancelHandler, e)), n.canvas.element && (n.canvas.element.style.pointerEvents = f === n.canvas.element ? 'initial' : 'none'), r.interactivity.events.resize && c(window, u.Constants.resizeEvent, this.resizeHandler, e), document && c(document, u.Constants.visibilityChangeEvent, this.visibilityChangeHandler, e, !1);
            }
          }
        },
        {
          key: 'handleWindowResize',
          value: function () {
            var e = this;
            this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
              var t;
              return null === (t = e.container.canvas) || void 0 === t ? void 0 : t.windowResize();
            }, 500);
          }
        },
        {
          key: 'handleVisibilityChange',
          value: function () {
            var e = this.container, t = e.actualOptions;
            this.mouseTouchFinish(), t.pauseOnBlur && ((null === document || void 0 === document ? void 0 : document.hidden) ? (e.pageHidden = !0, e.pause()) : (e.pageHidden = !1, e.getAnimationStatus() ? e.play(!0) : e.draw()));
          }
        },
        {
          key: 'mouseDown',
          value: function () {
            var e = this.container.interactivity;
            if (e) {
              var t = e.mouse;
              t.clicking = !0, t.downPosition = t.position;
            }
          }
        },
        {
          key: 'mouseTouchMove',
          value: function (e) {
            var t, n, r, i, o, a, s, c = this.container, f = c.actualOptions;
            if (void 0 !== (null === (t = c.interactivity) || void 0 === t ? void 0 : t.element)) {
              var d;
              c.interactivity.mouse.inside = !0;
              var v = c.canvas.element;
              if (e.type.startsWith('mouse')) {
                this.canPush = !0;
                var h = e;
                if (c.interactivity.element === window) {
                  if (v) {
                    var p = v.getBoundingClientRect();
                    d = {
                      x: h.clientX - p.left,
                      y: h.clientY - p.top
                    };
                  }
                } else if (f.interactivity.detectsOn === l.InteractivityDetect.parent) {
                  var y = h.target, m = h.currentTarget, b = c.canvas.element;
                  if (y && m && b) {
                    var g = y.getBoundingClientRect(), w = m.getBoundingClientRect(), x = b.getBoundingClientRect();
                    d = {
                      x: h.offsetX + 2 * g.left - (w.left + x.left),
                      y: h.offsetY + 2 * g.top - (w.top + x.top)
                    };
                  } else
                    d = {
                      x: null !== (n = h.offsetX) && void 0 !== n ? n : h.clientX,
                      y: null !== (r = h.offsetY) && void 0 !== r ? r : h.clientY
                    };
                } else
                  h.target === c.canvas.element && (d = {
                    x: null !== (i = h.offsetX) && void 0 !== i ? i : h.clientX,
                    y: null !== (o = h.offsetY) && void 0 !== o ? o : h.clientY
                  });
              } else {
                this.canPush = 'touchmove' !== e.type;
                var k = e, S = k.touches[k.touches.length - 1], P = null == v ? void 0 : v.getBoundingClientRect();
                d = {
                  x: S.clientX - (null !== (a = null == P ? void 0 : P.left) && void 0 !== a ? a : 0),
                  y: S.clientY - (null !== (s = null == P ? void 0 : P.top) && void 0 !== s ? s : 0)
                };
              }
              var C = c.retina.pixelRatio;
              d && (d.x *= C, d.y *= C), c.interactivity.mouse.position = d, c.interactivity.status = u.Constants.mouseMoveEvent;
            }
          }
        },
        {
          key: 'mouseTouchFinish',
          value: function () {
            var e = this.container.interactivity;
            if (void 0 !== e) {
              var t = e.mouse;
              delete t.position, delete t.clickPosition, delete t.downPosition, e.status = u.Constants.mouseLeaveEvent, t.inside = !1, t.clicking = !1;
            }
          }
        },
        {
          key: 'mouseTouchClick',
          value: function (e) {
            var t = this.container, n = t.actualOptions, o = t.interactivity.mouse;
            o.inside = !0;
            var a = !1, s = o.position;
            if (void 0 !== s && n.interactivity.events.onClick.enable) {
              var l, u = i(t.plugins);
              try {
                for (u.s(); !(l = u.n()).done;) {
                  var c = r(l.value, 2)[1];
                  if (void 0 !== c.clickPositionValid && (a = c.clickPositionValid(s)))
                    break;
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
              a || this.doMouseTouchClick(e), o.clicking = !1;
            }
          }
        },
        {
          key: 'doMouseTouchClick',
          value: function (e) {
            var t = this, n = this.container, r = n.actualOptions;
            if (this.canPush) {
              var o = n.interactivity.mouse.position;
              if (!o)
                return;
              n.interactivity.mouse.clickPosition = {
                x: o.x,
                y: o.y
              }, n.interactivity.mouse.clickTime = new Date().getTime();
              var a = r.interactivity.events.onClick;
              if (a.mode instanceof Array) {
                var s, l = i(a.mode);
                try {
                  for (l.s(); !(s = l.n()).done;) {
                    var u = s.value;
                    this.handleClickMode(u);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              } else
                this.handleClickMode(a.mode);
            }
            'touchend' === e.type && setTimeout(function () {
              return t.mouseTouchFinish();
            }, 500);
          }
        },
        {
          key: 'handleClickMode',
          value: function (e) {
            var t = this.container, n = t.actualOptions, o = n.interactivity.modes.push.quantity, a = n.interactivity.modes.remove.quantity;
            switch (e) {
            case l.ClickMode.push:
              o > 0 && t.particles.push(o, t.interactivity.mouse);
              break;
            case l.ClickMode.remove:
              t.particles.removeQuantity(a);
              break;
            case l.ClickMode.bubble:
              t.bubble.clicking = !0;
              break;
            case l.ClickMode.repulse:
              t.repulse.clicking = !0, t.repulse.count = 0;
              var s, u = i(t.repulse.particles);
              try {
                for (u.s(); !(s = u.n()).done;) {
                  var c = s.value;
                  c.velocity.setTo(c.initialVelocity);
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
              t.repulse.particles = [], t.repulse.finish = !1, setTimeout(function () {
                t.destroyed || (t.repulse.clicking = !1);
              }, 1000 * n.interactivity.modes.repulse.duration);
              break;
            case l.ClickMode.attract:
              t.attract.clicking = !0, t.attract.count = 0;
              var f, d = i(t.attract.particles);
              try {
                for (d.s(); !(f = d.n()).done;) {
                  var v = f.value;
                  v.velocity.setTo(v.initialVelocity);
                }
              } catch (e) {
                d.e(e);
              } finally {
                d.f();
              }
              t.attract.particles = [], t.attract.finish = !1, setTimeout(function () {
                t.destroyed || (t.attract.clicking = !1);
              }, 1000 * n.interactivity.modes.attract.duration);
              break;
            case l.ClickMode.pause:
              t.getAnimationStatus() ? t.pause() : t.play();
            }
            var h, p = i(t.plugins);
            try {
              for (p.s(); !(h = p.n()).done;) {
                var y = r(h.value, 2)[1];
                y.handleClickMode && y.handleClickMode(e);
              }
            } catch (e) {
              p.e(e);
            } finally {
              p.f();
            }
          }
        }
      ]) && s(t.prototype, n), o && s(t, o), e;
    }();
    t.EventListeners = f;
  },
  '3UD+': function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
          enumerable: !0,
          get: function () {
            return t.l;
          }
        }), Object.defineProperty(t, 'id', {
          enumerable: !0,
          get: function () {
            return t.i;
          }
        }), Object.defineProperty(t, 'exports', { enumerable: !0 }), t.webpackPolyfill = 1;
      }
      return t;
    };
  },
  BAgM: function (e, t, n) {
    'use strict';
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.NumberUtils = void 0;
    var i = n('ZlLd'), o = n('q8jH'), a = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e);
        }
        var t, n, a;
        return t = e, a = [
          {
            key: 'clamp',
            value: function (e, t, n) {
              return Math.min(Math.max(e, t), n);
            }
          },
          {
            key: 'mix',
            value: function (e, t, n, r) {
              return Math.floor((e * n + t * r) / (n + r));
            }
          },
          {
            key: 'randomInRange',
            value: function (t) {
              var n = e.getRangeMax(t), r = e.getRangeMin(t);
              return n === r && (r = 0), Math.random() * (n - r) + r;
            }
          },
          {
            key: 'getRangeValue',
            value: function (t) {
              return 'number' == typeof t ? t : e.randomInRange(t);
            }
          },
          {
            key: 'getRangeMin',
            value: function (e) {
              return 'number' == typeof e ? e : e.min;
            }
          },
          {
            key: 'getRangeMax',
            value: function (e) {
              return 'number' == typeof e ? e : e.max;
            }
          },
          {
            key: 'setRangeValue',
            value: function (t, n) {
              if (t === n || void 0 === n && 'number' == typeof t)
                return t;
              var r = e.getRangeMin(t), i = e.getRangeMax(t);
              return void 0 !== n ? {
                min: Math.min(r, n),
                max: Math.max(i, n)
              } : e.setRangeValue(r, i);
            }
          },
          {
            key: 'getValue',
            value: function (t) {
              var n = t.random, r = 'boolean' == typeof n ? {
                  enable: n,
                  minimumValue: 0
                } : n, i = r.enable, o = r.minimumValue;
              return i ? e.getRangeValue(e.setRangeValue(t.value, o)) : e.getRangeValue(t.value);
            }
          },
          {
            key: 'getDistances',
            value: function (e, t) {
              var n = e.x - t.x, r = e.y - t.y;
              return {
                dx: n,
                dy: r,
                distance: Math.sqrt(n * n + r * r)
              };
            }
          },
          {
            key: 'getDistance',
            value: function (t, n) {
              return e.getDistances(t, n).distance;
            }
          },
          {
            key: 'getParticleDirectionAngle',
            value: function (e) {
              if ('number' == typeof e)
                return e * Math.PI / 180;
              switch (e) {
              case i.MoveDirection.top:
                return -Math.PI / 2;
              case i.MoveDirection.topRight:
                return -Math.PI / 4;
              case i.MoveDirection.right:
                return 0;
              case i.MoveDirection.bottomRight:
                return Math.PI / 4;
              case i.MoveDirection.bottom:
                return Math.PI / 2;
              case i.MoveDirection.bottomLeft:
                return 3 * Math.PI / 4;
              case i.MoveDirection.left:
                return Math.PI;
              case i.MoveDirection.topLeft:
                return -3 * Math.PI / 4;
              case i.MoveDirection.none:
              default:
                return Math.random() * Math.PI * 2;
              }
            }
          },
          {
            key: 'getParticleBaseVelocity',
            value: function (e) {
              var t = o.Vector.origin;
              return t.length = 1, t.angle = e, t;
            }
          },
          {
            key: 'rotateVelocity',
            value: function (e, t) {
              return {
                horizontal: e.horizontal * Math.cos(t) - e.vertical * Math.sin(t),
                vertical: e.horizontal * Math.sin(t) + e.vertical * Math.cos(t)
              };
            }
          },
          {
            key: 'collisionVelocity',
            value: function (e, t, n, r) {
              return o.Vector.create(e.x * (n - r) / (n + r) + 2 * t.x * r / (n + r), e.y);
            }
          },
          {
            key: 'calcEasing',
            value: function (e, t) {
              switch (t) {
              case i.EasingType.easeOutQuad:
                return 1 - Math.pow(1 - e, 2);
              case i.EasingType.easeOutCubic:
                return 1 - Math.pow(1 - e, 3);
              case i.EasingType.easeOutQuart:
                return 1 - Math.pow(1 - e, 4);
              case i.EasingType.easeOutQuint:
                return 1 - Math.pow(1 - e, 5);
              case i.EasingType.easeOutExpo:
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
              case i.EasingType.easeOutSine:
                return Math.sin(e * Math.PI / 2);
              case i.EasingType.easeOutBack:
                return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
              case i.EasingType.easeOutCirc:
                return Math.sqrt(1 - Math.pow(e - 1, 2));
              default:
                return e;
              }
            }
          }
        ], (n = null) && r(t.prototype, n), a && r(t, a), e;
      }();
    t.NumberUtils = a;
  },
  C6n9: function (e, t, n) {
    'use strict';
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.ColorUtils = void 0;
    var i = n('lPaE'), o = n('ZRNA'), a = n('BAgM');
    function s(e, t, n) {
      var r = n;
      return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < 0.5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
    }
    function l(e) {
      if (e.startsWith('rgb')) {
        var t = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(e);
        return t ? {
          a: t.length > 4 ? parseFloat(t[5]) : 1,
          b: parseInt(t[3], 10),
          g: parseInt(t[2], 10),
          r: parseInt(t[1], 10)
        } : void 0;
      }
      if (e.startsWith('hsl')) {
        var n = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(e);
        return n ? u.hslaToRgba({
          a: n.length > 4 ? parseFloat(n[5]) : 1,
          h: parseInt(n[1], 10),
          l: parseInt(n[3], 10),
          s: parseInt(n[2], 10)
        }) : void 0;
      }
      if (e.startsWith('hsv')) {
        var r = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(e);
        return r ? u.hsvaToRgba({
          a: r.length > 4 ? parseFloat(r[5]) : 1,
          h: parseInt(r[1], 10),
          s: parseInt(r[2], 10),
          v: parseInt(r[3], 10)
        }) : void 0;
      }
      var i = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, function (e, t, n, r, i) {
          return t + t + n + n + r + r + (void 0 !== i ? i + i : '');
        }), o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
      return o ? {
        a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
        b: parseInt(o[3], 16),
        g: parseInt(o[2], 16),
        r: parseInt(o[1], 16)
      } : void 0;
    }
    var u = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, u;
      return t = e, u = [
        {
          key: 'colorToRgb',
          value: function (t, n) {
            var r, a, s, l = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (void 0 !== t) {
              var u, c = 'string' == typeof t ? { value: t } : t;
              if ('string' == typeof c.value)
                u = c.value === o.Constants.randomColorValue ? e.getRandomRgbColor() : e.stringToRgb(c.value);
              else if (c.value instanceof Array) {
                var f = i.Utils.itemFromArray(c.value, n, l);
                u = e.colorToRgb({ value: f });
              } else {
                var d = c.value, v = null !== (r = d.rgb) && void 0 !== r ? r : c.value;
                if (void 0 !== v.r)
                  u = v;
                else {
                  var h = null !== (a = d.hsl) && void 0 !== a ? a : c.value;
                  if (void 0 !== h.h && void 0 !== h.l)
                    u = e.hslToRgb(h);
                  else {
                    var p = null !== (s = d.hsv) && void 0 !== s ? s : c.value;
                    void 0 !== p.h && void 0 !== p.v && (u = e.hsvToRgb(p));
                  }
                }
              }
              return u;
            }
          }
        },
        {
          key: 'colorToHsl',
          value: function (t, n) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = e.colorToRgb(t, n, r);
            return void 0 !== i ? e.rgbToHsl(i) : void 0;
          }
        },
        {
          key: 'rgbToHsl',
          value: function (e) {
            var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.max(t, n, r), o = Math.min(t, n, r), a = {
                h: 0,
                l: (i + o) / 2,
                s: 0
              };
            return i != o && (a.s = a.l < 0.5 ? (i - o) / (i + o) : (i - o) / (2 - i - o), a.h = t === i ? (n - r) / (i - o) : a.h = n === i ? 2 + (r - t) / (i - o) : 4 + (t - n) / (i - o)), a.l *= 100, a.s *= 100, a.h *= 60, a.h < 0 && (a.h += 360), a;
          }
        },
        {
          key: 'stringToAlpha',
          value: function (e) {
            var t;
            return null === (t = l(e)) || void 0 === t ? void 0 : t.a;
          }
        },
        {
          key: 'stringToRgb',
          value: function (e) {
            return l(e);
          }
        },
        {
          key: 'hslToRgb',
          value: function (e) {
            var t = {
                b: 0,
                g: 0,
                r: 0
              }, n = {
                h: e.h / 360,
                l: e.l / 100,
                s: e.s / 100
              };
            if (0 === n.s)
              t.b = n.l, t.g = n.l, t.r = n.l;
            else {
              var r = n.l < 0.5 ? n.l * (1 + n.s) : n.l + n.s - n.l * n.s, i = 2 * n.l - r;
              t.r = s(i, r, n.h + 1 / 3), t.g = s(i, r, n.h), t.b = s(i, r, n.h - 1 / 3);
            }
            return t.r = Math.floor(255 * t.r), t.g = Math.floor(255 * t.g), t.b = Math.floor(255 * t.b), t;
          }
        },
        {
          key: 'hslaToRgba',
          value: function (t) {
            var n = e.hslToRgb(t);
            return {
              a: t.a,
              b: n.b,
              g: n.g,
              r: n.r
            };
          }
        },
        {
          key: 'hslToHsv',
          value: function (e) {
            var t = e.l / 100, n = t + e.s / 100 * Math.min(t, 1 - t), r = n ? 2 * (1 - t / n) : 0;
            return {
              h: e.h,
              s: 100 * r,
              v: 100 * n
            };
          }
        },
        {
          key: 'hslaToHsva',
          value: function (t) {
            var n = e.hslToHsv(t);
            return {
              a: t.a,
              h: n.h,
              s: n.s,
              v: n.v
            };
          }
        },
        {
          key: 'hsvToHsl',
          value: function (e) {
            var t = e.v / 100, n = t * (1 - e.s / 100 / 2), r = 0 === n || 1 === n ? 0 : (t - n) / Math.min(n, 1 - n);
            return {
              h: e.h,
              l: 100 * n,
              s: 100 * r
            };
          }
        },
        {
          key: 'hsvaToHsla',
          value: function (t) {
            var n = e.hsvToHsl(t);
            return {
              a: t.a,
              h: n.h,
              l: n.l,
              s: n.s
            };
          }
        },
        {
          key: 'hsvToRgb',
          value: function (e) {
            var t, n = {
                b: 0,
                g: 0,
                r: 0
              }, r = e.h / 60, i = e.s / 100, o = e.v / 100, a = o * i, s = a * (1 - Math.abs(r % 2 - 1));
            if (r >= 0 && r <= 1 ? t = {
                r: a,
                g: s,
                b: 0
              } : r > 1 && r <= 2 ? t = {
                r: s,
                g: a,
                b: 0
              } : r > 2 && r <= 3 ? t = {
                r: 0,
                g: a,
                b: s
              } : r > 3 && r <= 4 ? t = {
                r: 0,
                g: s,
                b: a
              } : r > 4 && r <= 5 ? t = {
                r: s,
                g: 0,
                b: a
              } : r > 5 && r <= 6 && (t = {
                r: a,
                g: 0,
                b: s
              }), t) {
              var l = o - a;
              n.r = Math.floor(255 * (t.r + l)), n.g = Math.floor(255 * (t.g + l)), n.b = Math.floor(255 * (t.b + l));
            }
            return n;
          }
        },
        {
          key: 'hsvaToRgba',
          value: function (t) {
            var n = e.hsvToRgb(t);
            return {
              a: t.a,
              b: n.b,
              g: n.g,
              r: n.r
            };
          }
        },
        {
          key: 'rgbToHsv',
          value: function (e) {
            var t = {
                r: e.r / 255,
                g: e.g / 255,
                b: e.b / 255
              }, n = Math.max(t.r, t.g, t.b), r = n - Math.min(t.r, t.g, t.b), i = 0;
            return n === t.r ? i = (t.g - t.b) / r * 60 : n === t.g ? i = 60 * (2 + (t.b - t.r) / r) : n === t.b && (i = 60 * (4 + (t.r - t.g) / r)), {
              h: i,
              s: 100 * (n ? r / n : 0),
              v: 100 * n
            };
          }
        },
        {
          key: 'rgbaToHsva',
          value: function (t) {
            var n = e.rgbToHsv(t);
            return {
              a: t.a,
              h: n.h,
              s: n.s,
              v: n.v
            };
          }
        },
        {
          key: 'getRandomRgbColor',
          value: function (e) {
            var t = null != e ? e : 0;
            return {
              b: Math.floor(a.NumberUtils.randomInRange(a.NumberUtils.setRangeValue(t, 256))),
              g: Math.floor(a.NumberUtils.randomInRange(a.NumberUtils.setRangeValue(t, 256))),
              r: Math.floor(a.NumberUtils.randomInRange(a.NumberUtils.setRangeValue(t, 256)))
            };
          }
        },
        {
          key: 'getStyleFromRgb',
          value: function (e, t) {
            return 'rgba('.concat(e.r, ', ').concat(e.g, ', ').concat(e.b, ', ').concat(null != t ? t : 1, ')');
          }
        },
        {
          key: 'getStyleFromHsl',
          value: function (e, t) {
            return 'hsla('.concat(e.h, ', ').concat(e.s, '%, ').concat(e.l, '%, ').concat(null != t ? t : 1, ')');
          }
        },
        {
          key: 'getStyleFromHsv',
          value: function (t, n) {
            return e.getStyleFromHsl(e.hsvToHsl(t), n);
          }
        },
        {
          key: 'mix',
          value: function (t, n, r, i) {
            var o = t, s = n;
            return void 0 === o.r && (o = e.hslToRgb(t)), void 0 === s.r && (s = e.hslToRgb(n)), {
              b: a.NumberUtils.mix(o.b, s.b, r, i),
              g: a.NumberUtils.mix(o.g, s.g, r, i),
              r: a.NumberUtils.mix(o.r, s.r, r, i)
            };
          }
        },
        {
          key: 'replaceColorSvg',
          value: function (t, n, r) {
            var i = t.svgData;
            if (!i)
              return '';
            if (i.includes('fill'))
              return i.replace(/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi, function () {
                return e.getStyleFromHsl(n, r);
              });
            var o = i.indexOf('>');
            return ''.concat(i.substring(0, o), ' fill="').concat(e.getStyleFromHsl(n, r), '"').concat(i.substring(o));
          }
        },
        {
          key: 'getLinkColor',
          value: function (t, n, r) {
            var i, a;
            if (r === o.Constants.randomColorValue)
              return e.getRandomRgbColor();
            if ('mid' !== r)
              return r;
            var s = null !== (i = t.getFillColor()) && void 0 !== i ? i : t.getStrokeColor(), l = null !== (a = null == n ? void 0 : n.getFillColor()) && void 0 !== a ? a : null == n ? void 0 : n.getStrokeColor();
            if (s && l && n)
              return e.mix(s, l, t.getRadius(), n.getRadius());
            var u = null != s ? s : l;
            return u ? e.hslToRgb(u) : void 0;
          }
        },
        {
          key: 'getLinkRandomColor',
          value: function (t, n, r) {
            var i = 'string' == typeof t ? t : t.value;
            return i === o.Constants.randomColorValue ? r ? e.colorToRgb({ value: i }) : n ? o.Constants.randomColorValue : o.Constants.midColorValue : e.colorToRgb({ value: i });
          }
        },
        {
          key: 'getHslFromAnimation',
          value: function (e) {
            return void 0 !== e ? {
              h: e.h.value,
              s: e.s.value,
              l: e.l.value
            } : void 0;
          }
        }
      ], (n = null) && r(t.prototype, n), u && r(t, u), e;
    }();
    t.ColorUtils = u;
  },
  C9b5: function (e, t, n) {
    'use strict';
    var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), i(n('iiaq'), t), i(n('Erz+'), t), i(n('EGR3'), t), i(n('C6n9'), t), i(n('ZRNA'), t), i(n('2kAo'), t), i(n('BAgM'), t), i(n('KIMX'), t), i(n('J15q'), t), i(n('ub5Q'), t), i(n('/6af'), t), i(n('Xvid'), t), i(n('lPaE'), t);
  },
  EGR3: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function o(e, t, n) {
      return (o = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
        var r = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)););
          return e;
        }(e, t);
        if (r) {
          var i = Object.getOwnPropertyDescriptor(r, t);
          return i.get ? i.get.call(n) : i.value;
        }
      })(e, t, n || e);
    }
    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
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
        var n, r = u(e);
        if (t) {
          var i = u(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else
          n = r.apply(this, arguments);
        return l(this, n);
      };
    }
    function l(e, t) {
      return !t || 'object' !== r(t) && 'function' != typeof t ? function (e) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), t.CircleWarp = void 0;
    var c = n('Xvid'), f = n('Erz+'), d = function (e) {
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
        }(d, e);
        var t, n, r, l = s(d);
        function d(e, t, n, r) {
          var i;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, d), (i = l.call(this, e, t, n)).canvasSize = r, i.canvasSize = {
            height: r.height,
            width: r.width
          }, i;
        }
        return t = d, (n = [
          {
            key: 'contains',
            value: function (e) {
              if (o(u(d.prototype), 'contains', this).call(this, e))
                return !0;
              var t = {
                x: e.x - this.canvasSize.width,
                y: e.y
              };
              if (o(u(d.prototype), 'contains', this).call(this, t))
                return !0;
              var n = {
                x: e.x - this.canvasSize.width,
                y: e.y - this.canvasSize.height
              };
              if (o(u(d.prototype), 'contains', this).call(this, n))
                return !0;
              var r = {
                x: e.x,
                y: e.y - this.canvasSize.height
              };
              return o(u(d.prototype), 'contains', this).call(this, r);
            }
          },
          {
            key: 'intersects',
            value: function (e) {
              if (o(u(d.prototype), 'intersects', this).call(this, e))
                return !0;
              var t = e, n = e, r = {
                  x: e.position.x - this.canvasSize.width,
                  y: e.position.y - this.canvasSize.height
                };
              if (void 0 !== n.radius) {
                var i = new f.Circle(r.x, r.y, 2 * n.radius);
                return o(u(d.prototype), 'intersects', this).call(this, i);
              }
              if (void 0 !== t.size) {
                var a = new c.Rectangle(r.x, r.y, 2 * t.size.width, 2 * t.size.height);
                return o(u(d.prototype), 'intersects', this).call(this, a);
              }
              return !1;
            }
          }
        ]) && i(t.prototype, n), r && i(t, r), d;
      }(f.Circle);
    t.CircleWarp = d;
  },
  'Erz+': function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function a(e) {
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
        var n, r = l(e);
        if (t) {
          var i = l(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else
          n = r.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== r(t) && 'function' != typeof t ? function (e) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Circle = void 0;
    var u = function (e) {
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
      }(l, e);
      var t, n, r, s = a(l);
      function l(e, t, n) {
        var r;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (r = s.call(this, e, t)).radius = n, r;
      }
      return t = l, (n = [
        {
          key: 'contains',
          value: function (e) {
            return Math.pow(e.x - this.position.x, 2) + Math.pow(e.y - this.position.y, 2) <= this.radius * this.radius;
          }
        },
        {
          key: 'intersects',
          value: function (e) {
            var t = e, n = e, r = this.position, i = e.position, o = Math.abs(i.x - r.x), a = Math.abs(i.y - r.y), s = this.radius;
            if (void 0 !== n.radius)
              return s + n.radius > Math.sqrt(o * o + a + a);
            if (void 0 !== t.size) {
              var l = t.size.width, u = t.size.height, c = Math.pow(o - l, 2) + Math.pow(a - u, 2);
              return !(o > s + l || a > s + u) && (o <= l || a <= u || c <= s * s);
            }
            return !1;
          }
        }
      ]) && i(t.prototype, n), r && i(t, r), l;
    }(n('/6af').Range);
    t.Circle = u;
  },
  G5je: function (e, t, n) {
    'use strict';
    var r = n('UpPT'), i = n.n(r), o = n('xOOu'), a = n.n(o), s = n('Iab2'), l = n.n(s), u = [
        'string',
        'number'
      ], c = function (e) {
        return e.filename ? 'string' != typeof e.filename ? (console.error('Zipclex filename can only be of type string'), !1) : Array.isArray(e.sheet.data) ? !!e.sheet.data.every(function (e) {
          return Array.isArray(e);
        }) || (console.error('Zipclex sheet data childs is not of type array'), !1) : (console.error('Zipcelx sheet data is not of type array'), !1) : (console.error('Zipclex config missing property filename'), !1);
      }, f = function (e, t) {
        return ''.concat(function e(t) {
          if ('number' != typeof t)
            return '';
          var n = Math.floor(t / 26), r = String.fromCharCode(97 + t % 26).toUpperCase();
          return 0 === n ? r : e(n - 1) + r;
        }(e)).concat(t);
      }, d = function (e, t, n) {
        return -1 === u.indexOf(e.type) && (console.warn('Invalid type supplied in cell config, falling back to "string"'), e.type = 'string'), 'string' === e.type ? function (e, t, n) {
          return '<c r="'.concat(f(e, n), '" t="inlineStr"><is><t>').concat(i()(t), '</t></is></c>');
        }(t, e.value, n) : function (e, t, n) {
          return '<c r="'.concat(f(e, n), '"><v>').concat(t, '</v></c>');
        }(t, e.value, n);
      }, v = function (e) {
        return e.map(function (e, t) {
          return function (e, t) {
            var n = t + 1, r = e.map(function (e, t) {
                return d(e, t, n);
              }).join('');
            return '<row r="'.concat(n, '">').concat(r, '</row>');
          }(e, t);
        }).join('');
      };
    t.a = function (e) {
      if (!c(e))
        throw new Error('Validation failed.');
      var t = new a.a(), n = t.folder('xl');
      n.file('workbook.xml', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"><workbookPr/><sheets><sheet state="visible" name="Sheet1" sheetId="1" r:id="rId3"/></sheets><definedNames/><calcPr/></workbook>'), n.file('_rels/workbook.xml.rels', '<?xml version="1.0" ?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\n<Relationship Id="rId3" Target="worksheets/sheet1.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>\n</Relationships>'), t.file('_rels/.rels', '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>'), t.file('[Content_Types].xml', '<?xml version="1.0" ?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\n<Default ContentType="application/xml" Extension="xml"/>\n<Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>\n<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/>\n<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>\n</Types>');
      var r, i, o = (r = e.sheet.data, i = v(r), '<?xml version="1.0" ?>\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main"><sheetData>{placeholder}</sheetData></worksheet>'.replace('{placeholder}', i));
      return n.file('worksheets/sheet1.xml', o), t.generateAsync({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      }).then(function (t) {
        l.a.saveAs(t, ''.concat(e.filename, '.xlsx'));
      });
    };
  },
  J15q: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Point = void 0;
    t.Point = function e(t, n) {
      !function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }(this, e), this.position = t, this.particle = n;
    };
  },
  KIMX: function (e, t, n) {
    'use strict';
    function r(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return i(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var r = 0, o = function () {
            };
          return {
            s: o,
            n: function () {
              return r >= e.length ? { done: !0 } : {
                done: !1,
                value: e[r++]
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
      var a, s = !0, l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return s = e.done, e;
        },
        e: function (e) {
          l = !0, a = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (l)
              throw a;
          }
        }
      };
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Plugins = void 0;
    var a = [], s = new Map(), l = new Map(), u = new Map(), c = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e);
        }
        var t, n, i;
        return t = e, i = [
          {
            key: 'getPlugin',
            value: function (e) {
              return a.find(function (t) {
                return t.id === e;
              });
            }
          },
          {
            key: 'addPlugin',
            value: function (t) {
              e.getPlugin(t.id) || a.push(t);
            }
          },
          {
            key: 'getAvailablePlugins',
            value: function (e) {
              var t, n = new Map(), i = r(a);
              try {
                for (i.s(); !(t = i.n()).done;) {
                  var o = t.value;
                  o.needsPlugin(e.actualOptions) && n.set(o.id, o.getPlugin(e));
                }
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
              return n;
            }
          },
          {
            key: 'loadOptions',
            value: function (e, t) {
              var n, i = r(a);
              try {
                for (i.s(); !(n = i.n()).done;)
                  n.value.loadOptions(e, t);
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
            }
          },
          {
            key: 'getPreset',
            value: function (e) {
              return s.get(e);
            }
          },
          {
            key: 'addPreset',
            value: function (t, n) {
              var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              !r && e.getPreset(t) || s.set(t, n);
            }
          },
          {
            key: 'addShapeDrawer',
            value: function (t, n) {
              e.getShapeDrawer(t) || l.set(t, n);
            }
          },
          {
            key: 'getShapeDrawer',
            value: function (e) {
              return l.get(e);
            }
          },
          {
            key: 'getSupportedShapes',
            value: function () {
              return l.keys();
            }
          },
          {
            key: 'getPathGenerator',
            value: function (e) {
              return u.get(e);
            }
          },
          {
            key: 'addPathGenerator',
            value: function (t, n) {
              e.getPathGenerator(t) || u.set(t, n);
            }
          }
        ], (n = null) && o(t.prototype, n), i && o(t, i), e;
      }();
    t.Plugins = c;
  },
  OGap: function (e, t, n) {
    'use strict';
    var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
          enumerable: !0,
          get: function () {
            return t[n];
          }
        });
      } : function (e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n];
      }), i = this && this.__exportStar || function (e, t) {
        for (var n in e)
          'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.tsParticles = t.pJSDom = t.particlesJS = t.Main = t.Utils = t.Constants = t.ColorUtils = t.CanvasUtils = void 0;
    var o = n('vH5O'), a = n('z6mI');
    Object.defineProperty(t, 'Main', {
      enumerable: !0,
      get: function () {
        return a.Main;
      }
    });
    var s = n('C9b5');
    Object.defineProperty(t, 'CanvasUtils', {
      enumerable: !0,
      get: function () {
        return s.CanvasUtils;
      }
    }), Object.defineProperty(t, 'ColorUtils', {
      enumerable: !0,
      get: function () {
        return s.ColorUtils;
      }
    }), Object.defineProperty(t, 'Constants', {
      enumerable: !0,
      get: function () {
        return s.Constants;
      }
    }), Object.defineProperty(t, 'Utils', {
      enumerable: !0,
      get: function () {
        return s.Utils;
      }
    });
    var l = new a.Main();
    t.tsParticles = l, l.init();
    var u = o.initPjs(l), c = u.particlesJS, f = u.pJSDom;
    t.particlesJS = c, t.pJSDom = f, i(n('q8jH'), t), i(n('Tx5y'), t), i(n('ZlLd'), t), i(n('FvHc'), t), i(n('D98Q'), t), i(n('qtyS'), t), i(n('+IuE'), t), i(n('FyJA'), t);
  },
  PDX0: function (e, t) {
    (function (t) {
      e.exports = t;
    }.call(this, {}));
  },
  XIwB: function (e, t, n) {
    'use strict';
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    var i, o = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
              e(t);
            })).then(a, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }, a = this && this.__classPrivateFieldSet || function (e, t, n, r, i) {
        if ('m' === r)
          throw new TypeError('Private method is not writable');
        if ('a' === r && !i)
          throw new TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !i : !t.has(e))
          throw new TypeError('Cannot write private member to an object whose class did not declare it');
        return 'a' === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
      }, s = this && this.__classPrivateFieldGet || function (e, t, n, r) {
        if ('a' === n && !r)
          throw new TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError('Cannot read private member from an object whose class did not declare it');
        return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e);
      };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.MainSlim = void 0;
    var l = n('pmYS'), u = n('Qbha'), c = n('vfib'), f = n('C9b5'), d = n('ZlLd'), v = n('yEg2'), h = n('Lut8'), p = n('YU+L'), y = n('XqMA'), m = n('01Bu'), b = n('EZQt'), g = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), i.set(this, void 0), a(this, i, !1, 'f');
          var t = new l.SquareDrawer(), n = new u.TextDrawer(), r = new c.ImageDrawer();
          f.Plugins.addShapeDrawer(d.ShapeType.line, new v.LineDrawer()), f.Plugins.addShapeDrawer(d.ShapeType.circle, new h.CircleDrawer()), f.Plugins.addShapeDrawer(d.ShapeType.edge, t), f.Plugins.addShapeDrawer(d.ShapeType.square, t), f.Plugins.addShapeDrawer(d.ShapeType.triangle, new p.TriangleDrawer()), f.Plugins.addShapeDrawer(d.ShapeType.star, new y.StarDrawer()), f.Plugins.addShapeDrawer(d.ShapeType.polygon, new m.PolygonDrawer()), f.Plugins.addShapeDrawer(d.ShapeType.char, n), f.Plugins.addShapeDrawer(d.ShapeType.character, n), f.Plugins.addShapeDrawer(d.ShapeType.image, r), f.Plugins.addShapeDrawer(d.ShapeType.images, r);
        }
        var t, n, g;
        return t = e, (n = [
          {
            key: 'init',
            value: function () {
              s(this, i, 'f') || a(this, i, !0, 'f');
            }
          },
          {
            key: 'loadFromArray',
            value: function (e, t, n) {
              return o(this, void 0, void 0, regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch (r.prev = r.next) {
                    case 0:
                      return r.abrupt('return', b.Loader.load(e, t, n));
                    case 1:
                    case 'end':
                      return r.stop();
                    }
                }, r);
              }));
            }
          },
          {
            key: 'load',
            value: function (e, t) {
              return o(this, void 0, void 0, regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch (n.prev = n.next) {
                    case 0:
                      return n.abrupt('return', b.Loader.load(e, t));
                    case 1:
                    case 'end':
                      return n.stop();
                    }
                }, n);
              }));
            }
          },
          {
            key: 'set',
            value: function (e, t, n) {
              return o(this, void 0, void 0, regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch (r.prev = r.next) {
                    case 0:
                      return r.abrupt('return', b.Loader.set(e, t, n));
                    case 1:
                    case 'end':
                      return r.stop();
                    }
                }, r);
              }));
            }
          },
          {
            key: 'loadJSON',
            value: function (e, t, n) {
              return b.Loader.loadJSON(e, t, n);
            }
          },
          {
            key: 'setJSON',
            value: function (e, t, n, r) {
              return o(this, void 0, void 0, regeneratorRuntime.mark(function i() {
                return regeneratorRuntime.wrap(function (i) {
                  for (;;)
                    switch (i.prev = i.next) {
                    case 0:
                      return i.abrupt('return', b.Loader.setJSON(e, t, n, r));
                    case 1:
                    case 'end':
                      return i.stop();
                    }
                }, i);
              }));
            }
          },
          {
            key: 'setOnClickHandler',
            value: function (e) {
              b.Loader.setOnClickHandler(e);
            }
          },
          {
            key: 'dom',
            value: function () {
              return b.Loader.dom();
            }
          },
          {
            key: 'domItem',
            value: function (e) {
              return b.Loader.domItem(e);
            }
          },
          {
            key: 'addShape',
            value: function (e, t, n, r, i) {
              var o;
              o = 'function' == typeof t ? {
                afterEffect: r,
                destroy: i,
                draw: t,
                init: n
              } : t, f.Plugins.addShapeDrawer(e, o);
            }
          },
          {
            key: 'addPreset',
            value: function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              f.Plugins.addPreset(e, t, n);
            }
          },
          {
            key: 'addPlugin',
            value: function (e) {
              f.Plugins.addPlugin(e);
            }
          },
          {
            key: 'addPathGenerator',
            value: function (e, t) {
              f.Plugins.addPathGenerator(e, t);
            }
          }
        ]) && r(t.prototype, n), g && r(t, g), e;
      }();
    t.MainSlim = g, i = new WeakMap();
  },
  Xvid: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function o(e, t) {
      return (o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function a(e) {
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
        var n, r = l(e);
        if (t) {
          var i = l(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else
          n = r.apply(this, arguments);
        return s(this, n);
      };
    }
    function s(e, t) {
      return !t || 'object' !== r(t) && 'function' != typeof t ? function (e) {
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
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Rectangle = void 0;
    var u = function (e) {
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
      }(l, e);
      var t, n, r, s = a(l);
      function l(e, t, n, r) {
        var i;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (i = s.call(this, e, t)).size = {
          height: r,
          width: n
        }, i;
      }
      return t = l, (n = [
        {
          key: 'contains',
          value: function (e) {
            var t = this.size.width, n = this.size.height, r = this.position;
            return e.x >= r.x && e.x <= r.x + t && e.y >= r.y && e.y <= r.y + n;
          }
        },
        {
          key: 'intersects',
          value: function (e) {
            var t = e, n = e, r = this.size.width, i = this.size.height, o = this.position, a = e.position;
            if (void 0 !== n.radius)
              return n.intersects(this);
            if (void 0 !== t.size) {
              var s = t.size, l = s.width, u = s.height;
              return a.x < o.x + r && a.x + l > o.x && a.y < o.y + i && a.y + u > o.y;
            }
            return !1;
          }
        }
      ]) && i(t.prototype, n), r && i(t, r), l;
    }(n('/6af').Range);
    t.Rectangle = u;
  },
  YuTi: function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {
      }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, 'loaded', {
        enumerable: !0,
        get: function () {
          return e.l;
        }
      }), Object.defineProperty(e, 'id', {
        enumerable: !0,
        get: function () {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  },
  ZRNA: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Constants = void 0;
    var r = function e() {
      !function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }(this, e);
    };
    t.Constants = r, r.canvasClass = 'tsparticles-canvas-el', r.randomColorValue = 'random', r.midColorValue = 'mid', r.touchEndEvent = 'touchend', r.mouseDownEvent = 'mousedown', r.mouseUpEvent = 'mouseup', r.mouseMoveEvent = 'mousemove', r.touchStartEvent = 'touchstart', r.touchMoveEvent = 'touchmove', r.mouseLeaveEvent = 'mouseleave', r.mouseOutEvent = 'mouseout', r.touchCancelEvent = 'touchcancel', r.resizeEvent = 'resize', r.visibilityChangeEvent = 'visibilitychange', r.noPolygonDataLoaded = 'No polygon data loaded.', r.noPolygonFound = 'No polygon found, you need to specify SVG url in config.';
  },
  iiaq: function (e, t, n) {
    'use strict';
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.CanvasUtils = void 0;
    var i = n('C6n9'), o = n('BAgM');
    function a(e, t, n) {
      e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.closePath();
    }
    var s = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, s;
      return t = e, s = [
        {
          key: 'paintBase',
          value: function (e, t, n) {
            e.save(), e.fillStyle = null != n ? n : 'rgba(0,0,0,0)', e.fillRect(0, 0, t.width, t.height), e.restore();
          }
        },
        {
          key: 'clear',
          value: function (e, t) {
            e.clearRect(0, 0, t.width, t.height);
          }
        },
        {
          key: 'drawLinkLine',
          value: function (e, t, n, r, s, l, u, c, f, d, v, h) {
            var p = !1;
            if (o.NumberUtils.getDistance(n, r) <= s)
              a(e, n, r), p = !0;
            else if (u) {
              var y, m, b = {
                  x: r.x - l.width,
                  y: r.y
                }, g = o.NumberUtils.getDistances(n, b);
              if (g.distance <= s) {
                var w = n.y - g.dy / g.dx * n.x;
                y = {
                  x: 0,
                  y: w
                }, m = {
                  x: l.width,
                  y: w
                };
              } else {
                var x = {
                    x: r.x,
                    y: r.y - l.height
                  }, k = o.NumberUtils.getDistances(n, x);
                if (k.distance <= s) {
                  var S = -(n.y - k.dy / k.dx * n.x) / (k.dy / k.dx);
                  y = {
                    x: S,
                    y: 0
                  }, m = {
                    x: S,
                    y: l.height
                  };
                } else {
                  var P = {
                      x: r.x - l.width,
                      y: r.y - l.height
                    }, C = o.NumberUtils.getDistances(n, P);
                  if (C.distance <= s) {
                    var T = n.y - C.dy / C.dx * n.x;
                    m = {
                      x: (y = {
                        x: -T / (C.dy / C.dx),
                        y: T
                      }).x + l.width,
                      y: y.y + l.height
                    };
                  }
                }
              }
              y && m && (a(e, n, y), a(e, r, m), p = !0);
            }
            if (p) {
              if (e.lineWidth = t, c && (e.globalCompositeOperation = f), e.strokeStyle = i.ColorUtils.getStyleFromRgb(d, v), h.enable) {
                var M = i.ColorUtils.colorToRgb(h.color);
                M && (e.shadowBlur = h.blur, e.shadowColor = i.ColorUtils.getStyleFromRgb(M));
              }
              e.stroke();
            }
          }
        },
        {
          key: 'drawLinkTriangle',
          value: function (e, t, n, r, o, a, s, l) {
            !function (e, t, n, r) {
              e.beginPath(), e.moveTo(t.x, t.y), e.lineTo(n.x, n.y), e.lineTo(r.x, r.y), e.closePath();
            }(e, t, n, r), o && (e.globalCompositeOperation = a), e.fillStyle = i.ColorUtils.getStyleFromRgb(s, l), e.fill();
          }
        },
        {
          key: 'drawConnectLine',
          value: function (e, t, n, r, i) {
            e.save(), a(e, r, i), e.lineWidth = t, e.strokeStyle = n, e.stroke(), e.restore();
          }
        },
        {
          key: 'gradient',
          value: function (e, t, n, r) {
            var o = Math.floor(n.getRadius() / t.getRadius()), a = t.getFillColor(), s = n.getFillColor();
            if (a && s) {
              var l = t.getPosition(), u = n.getPosition(), c = i.ColorUtils.mix(a, s, t.getRadius(), n.getRadius()), f = e.createLinearGradient(l.x, l.y, u.x, u.y);
              return f.addColorStop(0, i.ColorUtils.getStyleFromHsl(a, r)), f.addColorStop(o > 1 ? 1 : o, i.ColorUtils.getStyleFromRgb(c, r)), f.addColorStop(1, i.ColorUtils.getStyleFromHsl(s, r)), f;
            }
          }
        },
        {
          key: 'drawGrabLine',
          value: function (e, t, n, r, o, s) {
            e.save(), a(e, n, r), e.strokeStyle = i.ColorUtils.getStyleFromRgb(o, s), e.lineWidth = t, e.stroke(), e.restore();
          }
        },
        {
          key: 'drawLight',
          value: function (e, t, n) {
            var r = e.actualOptions.interactivity.modes.light.area;
            t.beginPath(), t.arc(n.x, n.y, r.radius, 0, 2 * Math.PI);
            var o = t.createRadialGradient(n.x, n.y, 0, n.x, n.y, r.radius), a = r.gradient, s = {
                start: i.ColorUtils.colorToRgb(a.start),
                stop: i.ColorUtils.colorToRgb(a.stop)
              };
            s.start && s.stop && (o.addColorStop(0, i.ColorUtils.getStyleFromRgb(s.start)), o.addColorStop(1, i.ColorUtils.getStyleFromRgb(s.stop)), t.fillStyle = o, t.fill());
          }
        },
        {
          key: 'drawParticleShadow',
          value: function (e, t, n, r) {
            var o = n.getPosition(), a = e.actualOptions.interactivity.modes.light.shadow;
            t.save();
            for (var s = n.getRadius(), l = n.sides, u = 2 * Math.PI / l, c = -n.rotate.value + Math.PI / 4, f = [], d = 0; d < l; d++)
              f.push({
                x: o.x + s * Math.sin(c + u * d) * 1,
                y: o.y + s * Math.cos(c + u * d) * 1
              });
            for (var v = [], h = a.length, p = 0, y = f; p < y.length; p++) {
              var m = y[p], b = Math.atan2(r.y - m.y, r.x - m.x), g = m.x + h * Math.sin(-b - Math.PI / 2), w = m.y + h * Math.cos(-b - Math.PI / 2);
              v.push({
                endX: g,
                endY: w,
                startX: m.x,
                startY: m.y
              });
            }
            var x = i.ColorUtils.colorToRgb(a.color);
            if (x) {
              for (var k = i.ColorUtils.getStyleFromRgb(x), S = v.length - 1; S >= 0; S--) {
                var P = S == v.length - 1 ? 0 : S + 1;
                t.beginPath(), t.moveTo(v[S].startX, v[S].startY), t.lineTo(v[P].startX, v[P].startY), t.lineTo(v[P].endX, v[P].endY), t.lineTo(v[S].endX, v[S].endY), t.fillStyle = k, t.fill();
              }
              t.restore();
            }
          }
        },
        {
          key: 'drawParticle',
          value: function (t, n, r, o, a, s, l, u, c, f, d) {
            var v = r.getPosition();
            n.save(), n.translate(v.x, v.y), n.beginPath();
            var h = r.rotate.value + (r.options.rotate.path ? r.velocity.angle : 0);
            0 !== h && n.rotate(h), l && (n.globalCompositeOperation = u);
            var p = r.shadowColor;
            d.enable && p && (n.shadowBlur = d.blur, n.shadowColor = i.ColorUtils.getStyleFromRgb(p), n.shadowOffsetX = d.offset.x, n.shadowOffsetY = d.offset.y), a && (n.fillStyle = a);
            var y = r.stroke;
            n.lineWidth = r.strokeWidth, s && (n.strokeStyle = s), e.drawShape(t, n, r, c, f, o), y.width > 0 && n.stroke(), r.close && n.closePath(), r.fill && n.fill(), n.restore(), n.save(), n.translate(v.x, v.y), 0 !== h && n.rotate(h), l && (n.globalCompositeOperation = u), e.drawShapeAfterEffect(t, n, r, c, f, o), n.restore();
          }
        },
        {
          key: 'drawShape',
          value: function (e, t, n, r, i, o) {
            if (n.shape) {
              var a = e.drawers.get(n.shape);
              a && a.draw(t, n, r, i, o, e.retina.pixelRatio);
            }
          }
        },
        {
          key: 'drawShapeAfterEffect',
          value: function (e, t, n, r, i, o) {
            if (n.shape) {
              var a = e.drawers.get(n.shape);
              (null == a ? void 0 : a.afterEffect) && a.afterEffect(t, n, r, i, o, e.retina.pixelRatio);
            }
          }
        },
        {
          key: 'drawPlugin',
          value: function (e, t, n) {
            void 0 !== t.draw && (e.save(), t.draw(e, n), e.restore());
          }
        }
      ], (n = null) && r(t.prototype, n), s && r(t, s), e;
    }();
    t.CanvasUtils = s;
  },
  lPaE: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function o(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return a(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var r = 0, i = function () {
            };
          return {
            s: i,
            n: function () {
              return r >= e.length ? { done: !0 } : {
                done: !1,
                value: e[r++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: i
          };
        }
        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }
      var o, s = !0, l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return s = e.done, e;
        },
        e: function (e) {
          l = !0, o = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (l)
              throw o;
          }
        }
      };
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    var s = this && this.__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (i, o) {
        function a(e) {
          try {
            l(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            l(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function l(e) {
          var t;
          e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, s);
        }
        l((r = r.apply(e, t || [])).next());
      });
    };
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Utils = void 0;
    var l = n('auWv'), u = n('BAgM');
    function c(e, t, n, r, i, o) {
      var a = { bounced: !1 };
      return t.min >= r.min && t.min <= r.max && t.max >= r.min && t.max <= r.max && (e.max >= n.min && e.max <= (n.max + n.min) / 2 && i > 0 || e.min <= n.max && e.min > (n.max + n.min) / 2 && i < 0) && (a.velocity = i * -o, a.bounced = !0), a;
    }
    function f(e, t) {
      if (t instanceof Array) {
        var n, r = o(t);
        try {
          for (r.s(); !(n = r.n()).done;) {
            var i = n.value;
            if (e.matches(i))
              return !0;
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
        return !1;
      }
      return e.matches(t);
    }
    var d = function () {
      function e() {
        !function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, e);
      }
      var t, n, a;
      return t = e, a = [
        {
          key: 'isSsr',
          value: function () {
            return 'undefined' == typeof window || !window;
          }
        },
        {
          key: 'isInArray',
          value: function (e, t) {
            return e === t || t instanceof Array && t.indexOf(e) > -1;
          }
        },
        {
          key: 'loadFont',
          value: function (e) {
            return s(this, void 0, void 0, regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch (t.prev = t.next) {
                  case 0:
                    return t.prev = 0, t.next = 3, document.fonts.load(''.concat(e.weight, ' 36px \'').concat(e.font, '\''));
                  case 3:
                    t.next = 7;
                    break;
                  case 5:
                    t.prev = 5, t.t0 = t.catch(0);
                  case 7:
                  case 'end':
                    return t.stop();
                  }
              }, t, null, [[
                  0,
                  5
                ]]);
            }));
          }
        },
        {
          key: 'arrayRandomIndex',
          value: function (e) {
            return Math.floor(Math.random() * e.length);
          }
        },
        {
          key: 'itemFromArray',
          value: function (t, n) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = void 0 !== n && r ? n % t.length : e.arrayRandomIndex(t);
            return t[i];
          }
        },
        {
          key: 'isPointInside',
          value: function (t, n, r, i) {
            return e.areBoundsInside(e.calculateBounds(t, null != r ? r : 0), n, i);
          }
        },
        {
          key: 'areBoundsInside',
          value: function (e, t, n) {
            var r = !0;
            return n && n !== l.OutModeDirection.bottom || (r = e.top < t.height), !r || n && n !== l.OutModeDirection.left || (r = e.right > 0), !r || n && n !== l.OutModeDirection.right || (r = e.left < t.width), !r || n && n !== l.OutModeDirection.top || (r = e.bottom > 0), r;
          }
        },
        {
          key: 'calculateBounds',
          value: function (e, t) {
            return {
              bottom: e.y + t,
              left: e.x - t,
              right: e.x + t,
              top: e.y - t
            };
          }
        },
        {
          key: 'loadImage',
          value: function (e) {
            return new Promise(function (t, n) {
              if (e) {
                var r = {
                    source: e,
                    type: e.substr(e.length - 3)
                  }, i = new Image();
                i.addEventListener('load', function () {
                  r.element = i, t(r);
                }), i.addEventListener('error', function () {
                  n('Error tsParticles - loading image: '.concat(e));
                }), i.src = e;
              } else
                n('Error tsParticles - No image.src');
            });
          }
        },
        {
          key: 'downloadSvgImage',
          value: function (t) {
            return s(this, void 0, void 0, regeneratorRuntime.mark(function n() {
              var r, i;
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch (n.prev = n.next) {
                  case 0:
                    if (t) {
                      n.next = 2;
                      break;
                    }
                    throw new Error('Error tsParticles - No image.src');
                  case 2:
                    if ('svg' === (r = {
                        source: t,
                        type: t.substr(t.length - 3)
                      }).type) {
                      n.next = 5;
                      break;
                    }
                    return n.abrupt('return', e.loadImage(t));
                  case 5:
                    return n.next = 7, fetch(r.source);
                  case 7:
                    if ((i = n.sent).ok) {
                      n.next = 10;
                      break;
                    }
                    throw new Error('Error tsParticles - Image not found');
                  case 10:
                    return n.next = 12, i.text();
                  case 12:
                    return r.svgData = n.sent, n.abrupt('return', r);
                  case 14:
                  case 'end':
                    return n.stop();
                  }
              }, n);
            }));
          }
        },
        {
          key: 'deepExtend',
          value: function (t) {
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
              i[o - 1] = arguments[o];
            for (var a = 0, s = i; a < s.length; a++) {
              var l = s[a];
              if (null != l)
                if ('object' === r(l)) {
                  var u = Array.isArray(l);
                  !u || 'object' === r(t) && t && Array.isArray(t) ? u || 'object' === r(t) && t && !Array.isArray(t) || (t = {}) : t = [];
                  var c = function (n) {
                    if ('__proto__' === n)
                      return 'continue';
                    var i = l[n], o = 'object' === r(i), a = t;
                    a[n] = o && Array.isArray(i) ? i.map(function (t) {
                      return e.deepExtend(a[n], t);
                    }) : e.deepExtend(a[n], i);
                  };
                  for (var f in l)
                    c(f);
                } else
                  t = l;
            }
            return t;
          }
        },
        {
          key: 'isDivModeEnabled',
          value: function (t, n) {
            return n instanceof Array ? !!n.find(function (n) {
              return n.enable && e.isInArray(t, n.mode);
            }) : e.isInArray(t, n.mode);
          }
        },
        {
          key: 'divModeExecute',
          value: function (t, n, r) {
            if (n instanceof Array) {
              var i, a = o(n);
              try {
                for (a.s(); !(i = a.n()).done;) {
                  var s = i.value, l = s.mode;
                  s.enable && e.isInArray(t, l) && e.singleDivModeExecute(s, r);
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            } else {
              var u = n.mode;
              n.enable && e.isInArray(t, u) && e.singleDivModeExecute(n, r);
            }
          }
        },
        {
          key: 'singleDivModeExecute',
          value: function (e, t) {
            var n = e.selectors;
            if (n instanceof Array) {
              var r, i = o(n);
              try {
                for (i.s(); !(r = i.n()).done;)
                  t(r.value, e);
              } catch (e) {
                i.e(e);
              } finally {
                i.f();
              }
            } else
              t(n, e);
          }
        },
        {
          key: 'divMode',
          value: function (e, t) {
            if (t && e)
              return e instanceof Array ? e.find(function (e) {
                return f(t, e.selectors);
              }) : f(t, e.selectors) ? e : void 0;
          }
        },
        {
          key: 'circleBounceDataFromParticle',
          value: function (e) {
            return {
              position: e.getPosition(),
              radius: e.getRadius(),
              mass: e.getMass(),
              velocity: e.velocity,
              factor: {
                horizontal: u.NumberUtils.getValue(e.options.bounce.horizontal),
                vertical: u.NumberUtils.getValue(e.options.bounce.vertical)
              }
            };
          }
        },
        {
          key: 'circleBounce',
          value: function (e, t) {
            var n = e.velocity.x, r = e.velocity.y, i = e.position, o = t.position;
            if (n * (o.x - i.x) + r * (o.y - i.y) >= 0) {
              var a = -Math.atan2(o.y - i.y, o.x - i.x), s = e.mass, l = t.mass, c = e.velocity.rotate(a), f = t.velocity.rotate(a), d = u.NumberUtils.collisionVelocity(c, f, s, l), v = u.NumberUtils.collisionVelocity(f, c, s, l), h = d.rotate(-a), p = v.rotate(-a);
              e.velocity.x = h.x * e.factor.horizontal, e.velocity.y = h.y * e.factor.vertical, t.velocity.x = p.x * t.factor.horizontal, t.velocity.y = p.y * t.factor.vertical;
            }
          }
        },
        {
          key: 'rectBounce',
          value: function (t, n) {
            var r = t.getPosition(), i = t.getRadius(), o = e.calculateBounds(r, i), a = c({
                min: o.left,
                max: o.right
              }, {
                min: o.top,
                max: o.bottom
              }, {
                min: n.left,
                max: n.right
              }, {
                min: n.top,
                max: n.bottom
              }, t.velocity.x, u.NumberUtils.getValue(t.options.bounce.horizontal));
            a.bounced && (void 0 !== a.velocity && (t.velocity.x = a.velocity), void 0 !== a.position && (t.position.x = a.position));
            var s = c({
              min: o.top,
              max: o.bottom
            }, {
              min: o.left,
              max: o.right
            }, {
              min: n.top,
              max: n.bottom
            }, {
              min: n.left,
              max: n.right
            }, t.velocity.y, u.NumberUtils.getValue(t.options.bounce.vertical));
            s.bounced && (void 0 !== s.velocity && (t.velocity.y = s.velocity), void 0 !== s.position && (t.position.y = s.position));
          }
        },
        {
          key: 'animate',
          get: function () {
            return e.isSsr() ? function (e) {
              return setTimeout(e);
            } : function (e) {
              return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.setTimeout)(e);
            };
          }
        },
        {
          key: 'cancelAnimation',
          get: function () {
            return e.isSsr() ? function (e) {
              return clearTimeout(e);
            } : function (e) {
              return (window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.clearTimeout)(e);
            };
          }
        }
      ], (n = null) && i(t.prototype, n), a && i(t, a), e;
    }();
    t.Utils = d;
  },
  peHP: function (e, t, n) {
    (function (e) {
      var r;
      function i(e) {
        return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }
      !function (o, a) {
        'use strict';
        var s = 'model', l = 'name', u = 'type', c = 'vendor', f = 'version', d = 'mobile', v = 'tablet', h = 'smarttv', p = {
            extend: function (e, t) {
              var n = {};
              for (var r in e)
                t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
              return n;
            },
            has: function (e, t) {
              return 'string' == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
            },
            lowerize: function (e) {
              return e.toLowerCase();
            },
            major: function (e) {
              return 'string' === i(e) ? e.replace(/[^\d\.]/g, '').split('.')[0] : void 0;
            },
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            }
          }, y = {
            rgx: function (e, t) {
              for (var n, r, o, a, s, l, u = 0; u < t.length && !s;) {
                var c = t[u], f = t[u + 1];
                for (n = r = 0; n < c.length && !s;)
                  if (s = c[n++].exec(e))
                    for (o = 0; o < f.length; o++)
                      l = s[++r], 'object' === i(a = f[o]) && a.length > 0 ? 2 == a.length ? 'function' == i(a[1]) ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? 'function' !== i(a[1]) || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || void 0;
                u += 2;
              }
            },
            str: function (e, t) {
              for (var n in t)
                if ('object' === i(t[n]) && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++)
                    if (p.has(t[n][r], e))
                      return '?' === n ? void 0 : n;
                } else if (p.has(t[n], e))
                  return '?' === n ? void 0 : n;
              return e;
            }
          }, m = {
            browser: {
              oldsafari: {
                version: {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/'
                }
              }
            },
            device: {
              amazon: {
                model: {
                  'Fire Phone': [
                    'SD',
                    'KF'
                  ]
                }
              },
              sprint: {
                model: { 'Evo Shift 4G': '7373KT' },
                vendor: {
                  HTC: 'APA',
                  Sprint: 'Sprint'
                }
              }
            },
            os: {
              windows: {
                version: {
                  ME: '4.90',
                  'NT 3.11': 'NT3.51',
                  'NT 4.0': 'NT4.0',
                  2000: 'NT 5.0',
                  XP: [
                    'NT 5.1',
                    'NT 5.2'
                  ],
                  Vista: 'NT 6.0',
                  7: 'NT 6.1',
                  8: 'NT 6.2',
                  8.1: 'NT 6.3',
                  10: [
                    'NT 6.4',
                    'NT 10.0'
                  ],
                  RT: 'ARM'
                }
              }
            }
          }, b = {
            browser: [
              [
                /(opera\smini)\/([\w\.-]+)/i,
                /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,
                /(opera).+version\/([\w\.]+)/i,
                /(opera)[\/\s]+([\w\.]+)/i
              ],
              [
                l,
                f
              ],
              [/(opios)[\/\s]+([\w\.]+)/i],
              [
                [
                  l,
                  'Opera Mini'
                ],
                f
              ],
              [/\s(opr)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Opera'
                ],
                f
              ],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,
                /(?:ms|\()(ie)\s([\w\.]+)/i,
                /(rekonq)\/([\w\.]*)/i,
                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i
              ],
              [
                l,
                f
              ],
              [/(konqueror)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Konqueror'
                ],
                f
              ],
              [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],
              [
                [
                  l,
                  'IE'
                ],
                f
              ],
              [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
              [
                [
                  l,
                  'Edge'
                ],
                f
              ],
              [/(yabrowser)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Yandex'
                ],
                f
              ],
              [/(Avast)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Avast Secure Browser'
                ],
                f
              ],
              [/(AVG)\/([\w\.]+)/i],
              [
                [
                  l,
                  'AVG Secure Browser'
                ],
                f
              ],
              [/(puffin)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Puffin'
                ],
                f
              ],
              [/(focus)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Firefox Focus'
                ],
                f
              ],
              [/(opt)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Opera Touch'
                ],
                f
              ],
              [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
              [
                [
                  l,
                  'UCBrowser'
                ],
                f
              ],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [
                [
                  l,
                  /_/g,
                  ' '
                ],
                f
              ],
              [/(windowswechat qbcore)\/([\w\.]+)/i],
              [
                [
                  l,
                  'WeChat(Win) Desktop'
                ],
                f
              ],
              [/(micromessenger)\/([\w\.]+)/i],
              [
                [
                  l,
                  'WeChat'
                ],
                f
              ],
              [/(brave)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Brave'
                ],
                f
              ],
              [/(whale)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Whale'
                ],
                f
              ],
              [/(qqbrowserlite)\/([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(QQ)\/([\d\.]+)/i],
              [
                l,
                f
              ],
              [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(2345Explorer)[\/\s]?([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(MetaSr)[\/\s]?([\w\.]+)/i],
              [l],
              [/(LBBROWSER)/i],
              [l],
              [/xiaomi\/miuibrowser\/([\w\.]+)/i],
              [
                f,
                [
                  l,
                  'MIUI Browser'
                ]
              ],
              [/;fbav\/([\w\.]+);/i],
              [
                f,
                [
                  l,
                  'Facebook'
                ]
              ],
              [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
              [[
                  l,
                  'Facebook'
                ]],
              [
                /safari\s(line)\/([\w\.]+)/i,
                /android.+(line)\/([\w\.]+)\/iab/i
              ],
              [
                l,
                f
              ],
              [/headlesschrome(?:\/([\w\.]+)|\s)/i],
              [
                f,
                [
                  l,
                  'Chrome Headless'
                ]
              ],
              [/\swv\).+(chrome)\/([\w\.]+)/i],
              [
                [
                  l,
                  /(.+)/,
                  '$1 WebView'
                ],
                f
              ],
              [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
              [
                [
                  l,
                  /(.+(?:g|us))(.+)/,
                  '$1 $2'
                ],
                f
              ],
              [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
              [
                f,
                [
                  l,
                  'Android Browser'
                ]
              ],
              [/(sailfishbrowser)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Sailfish Browser'
                ],
                f
              ],
              [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(dolfin)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Dolphin'
                ],
                f
              ],
              [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
              [[
                  l,
                  '360 Browser'
                ]],
              [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Chrome'
                ],
                f
              ],
              [/(coast)\/([\w\.]+)/i],
              [
                [
                  l,
                  'Opera Coast'
                ],
                f
              ],
              [/fxios\/([\w\.-]+)/i],
              [
                f,
                [
                  l,
                  'Firefox'
                ]
              ],
              [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
              [
                f,
                [
                  l,
                  'Mobile Safari'
                ]
              ],
              [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
              [
                f,
                l
              ],
              [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [
                [
                  l,
                  'GSA'
                ],
                f
              ],
              [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
              [
                l,
                [
                  f,
                  y.str,
                  m.browser.oldsafari.version
                ]
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [
                l,
                f
              ],
              [/(navigator|netscape)\/([\w\.-]+)/i],
              [
                [
                  l,
                  'Netscape'
                ],
                f
              ],
              [
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                /(links)\s\(([\w\.]+)/i,
                /(gobrowser)\/?([\w\.]*)/i,
                /(ice\s?browser)\/v?([\w\._]+)/i,
                /(mosaic)[\/\s]([\w\.]+)/i
              ],
              [
                l,
                f
              ]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
              [[
                  'architecture',
                  'amd64'
                ]],
              [/(ia32(?=;))/i],
              [[
                  'architecture',
                  p.lowerize
                ]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[
                  'architecture',
                  'ia32'
                ]],
              [/windows\s(ce|mobile);\sppc;/i],
              [[
                  'architecture',
                  'arm'
                ]],
              [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
              [[
                  'architecture',
                  /ower/,
                  '',
                  p.lowerize
                ]],
              [/(sun4\w)[;\)]/i],
              [[
                  'architecture',
                  'sparc'
                ]],
              [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
              [[
                  'architecture',
                  p.lowerize
                ]]
            ],
            device: [
              [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
              [
                s,
                c,
                [
                  u,
                  v
                ]
              ],
              [/applecoremedia\/[\w\.]+ \((ipad)/],
              [
                s,
                [
                  c,
                  'Apple'
                ],
                [
                  u,
                  v
                ]
              ],
              [/(apple\s{0,1}tv)/i],
              [
                [
                  s,
                  'Apple TV'
                ],
                [
                  c,
                  'Apple'
                ],
                [
                  u,
                  h
                ]
              ],
              [
                /(archos)\s(gamepad2?)/i,
                /(hp).+(touchpad)/i,
                /(hp).+(tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /\s(nook)[\w\s]+build\/(\w+)/i,
                /(dell)\s(strea[kpr\s\d]*[\dko])/i
              ],
              [
                c,
                s,
                [
                  u,
                  v
                ]
              ],
              [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],
              [
                s,
                [
                  c,
                  'Amazon'
                ],
                [
                  u,
                  v
                ]
              ],
              [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
              [
                [
                  s,
                  y.str,
                  m.device.amazon.model
                ],
                [
                  c,
                  'Amazon'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+aft([bms])\sbuild/i],
              [
                s,
                [
                  c,
                  'Amazon'
                ],
                [
                  u,
                  h
                ]
              ],
              [/\((ip[honed|\s\w*]+);.+(apple)/i],
              [
                s,
                c,
                [
                  u,
                  d
                ]
              ],
              [/\((ip[honed|\s\w*]+);/i],
              [
                s,
                [
                  c,
                  'Apple'
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /(blackberry)[\s-]?(\w+)/i,
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                /(hp)\s([\w\s]+\w)/i,
                /(asus)-?(\w+)/i
              ],
              [
                c,
                s,
                [
                  u,
                  d
                ]
              ],
              [/\(bb10;\s(\w+)/i],
              [
                s,
                [
                  c,
                  'BlackBerry'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
              [
                s,
                [
                  c,
                  'Asus'
                ],
                [
                  u,
                  v
                ]
              ],
              [
                /(sony)\s(tablet\s[ps])\sbuild\//i,
                /(sony)?(?:sgp.+)\sbuild\//i
              ],
              [
                [
                  c,
                  'Sony'
                ],
                [
                  s,
                  'Xperia Tablet'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [
                s,
                [
                  c,
                  'Sony'
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /\s(ouya)\s/i,
                /(nintendo)\s([wids3u]+)/i
              ],
              [
                c,
                s,
                [
                  u,
                  'console'
                ]
              ],
              [/android.+;\s(shield)\sbuild/i],
              [
                s,
                [
                  c,
                  'Nvidia'
                ],
                [
                  u,
                  'console'
                ]
              ],
              [/(playstation\s[34portablevi]+)/i],
              [
                s,
                [
                  c,
                  'Sony'
                ],
                [
                  u,
                  'console'
                ]
              ],
              [/(sprint\s(\w+))/i],
              [
                [
                  c,
                  y.str,
                  m.device.sprint.vendor
                ],
                [
                  s,
                  y.str,
                  m.device.sprint.model
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
                /(zte)-(\w*)/i,
                /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i
              ],
              [
                c,
                [
                  s,
                  /_/g,
                  ' '
                ],
                [
                  u,
                  d
                ]
              ],
              [/(nexus\s9)/i],
              [
                s,
                [
                  c,
                  'HTC'
                ],
                [
                  u,
                  v
                ]
              ],
              [
                /d\/huawei([\w\s-]+)[;\)]/i,
                /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i
              ],
              [
                s,
                [
                  c,
                  'Huawei'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+(bah2?-a?[lw]\d{2})/i],
              [
                s,
                [
                  c,
                  'Huawei'
                ],
                [
                  u,
                  v
                ]
              ],
              [/(microsoft);\s(lumia[\s\w]+)/i],
              [
                c,
                s,
                [
                  u,
                  d
                ]
              ],
              [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
              [
                s,
                [
                  c,
                  'Microsoft'
                ],
                [
                  u,
                  'console'
                ]
              ],
              [/(kin\.[onetw]{3})/i],
              [
                [
                  s,
                  /\./g,
                  ' '
                ],
                [
                  c,
                  'Microsoft'
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                /mot[\s-]?(\w*)/i,
                /(XT\d{3,4}) build\//i,
                /(nexus\s6)/i
              ],
              [
                s,
                [
                  c,
                  'Motorola'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
              [
                s,
                [
                  c,
                  'Motorola'
                ],
                [
                  u,
                  v
                ]
              ],
              [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
              [
                [
                  c,
                  p.trim
                ],
                [
                  s,
                  p.trim
                ],
                [
                  u,
                  h
                ]
              ],
              [/hbbtv.+maple;(\d+)/i],
              [
                [
                  s,
                  /^/,
                  'SmartTV'
                ],
                [
                  c,
                  'Samsung'
                ],
                [
                  u,
                  h
                ]
              ],
              [/\(dtv[\);].+(aquos)/i],
              [
                s,
                [
                  c,
                  'Sharp'
                ],
                [
                  u,
                  h
                ]
              ],
              [
                /android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                /((SM-T\w+))/i
              ],
              [
                [
                  c,
                  'Samsung'
                ],
                s,
                [
                  u,
                  v
                ]
              ],
              [/smart-tv.+(samsung)/i],
              [
                c,
                [
                  u,
                  h
                ],
                s
              ],
              [
                /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                /sec-((sgh\w+))/i
              ],
              [
                [
                  c,
                  'Samsung'
                ],
                s,
                [
                  u,
                  d
                ]
              ],
              [/sie-(\w*)/i],
              [
                s,
                [
                  c,
                  'Siemens'
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /(maemo|nokia).*(n900|lumia\s\d+)/i,
                /(nokia)[\s_-]?([\w-]*)/i
              ],
              [
                [
                  c,
                  'Nokia'
                ],
                s,
                [
                  u,
                  d
                ]
              ],
              [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
              [
                s,
                [
                  c,
                  'Acer'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+([vl]k\-?\d{3})\s+build/i],
              [
                s,
                [
                  c,
                  'LG'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
              [
                [
                  c,
                  'LG'
                ],
                s,
                [
                  u,
                  v
                ]
              ],
              [
                /linux;\snetcast.+smarttv/i,
                /lg\snetcast\.tv-201\d/i
              ],
              [
                [
                  c,
                  'LG'
                ],
                s,
                [
                  u,
                  h
                ]
              ],
              [
                /(nexus\s[45])/i,
                /lg[e;\s\/-]+(\w*)/i,
                /android.+lg(\-?[\d\w]+)\s+build/i
              ],
              [
                s,
                [
                  c,
                  'LG'
                ],
                [
                  u,
                  d
                ]
              ],
              [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
              [
                c,
                s,
                [
                  u,
                  v
                ]
              ],
              [/android.+(ideatab[a-z0-9\-\s]+)/i],
              [
                s,
                [
                  c,
                  'Lenovo'
                ],
                [
                  u,
                  v
                ]
              ],
              [/(lenovo)[_\s-]?([\w-]+)/i],
              [
                c,
                s,
                [
                  u,
                  d
                ]
              ],
              [/linux;.+((jolla));/i],
              [
                c,
                s,
                [
                  u,
                  d
                ]
              ],
              [/((pebble))app\/[\d\.]+\s/i],
              [
                c,
                s,
                [
                  u,
                  'wearable'
                ]
              ],
              [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
              [
                c,
                s,
                [
                  u,
                  d
                ]
              ],
              [/crkey/i],
              [
                [
                  s,
                  'Chromecast'
                ],
                [
                  c,
                  'Google'
                ],
                [
                  u,
                  h
                ]
              ],
              [/android.+;\s(glass)\s\d/i],
              [
                s,
                [
                  c,
                  'Google'
                ],
                [
                  u,
                  'wearable'
                ]
              ],
              [/android.+;\s(pixel c)[\s)]/i],
              [
                s,
                [
                  c,
                  'Google'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],
              [
                s,
                [
                  c,
                  'Google'
                ],
                [
                  u,
                  d
                ]
              ],
              [
                /android.+;\s(\w+)\s+build\/hm\1/i,
                /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,
                /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i
              ],
              [
                [
                  s,
                  /_/g,
                  ' '
                ],
                [
                  c,
                  'Xiaomi'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],
              [
                [
                  s,
                  /_/g,
                  ' '
                ],
                [
                  c,
                  'Xiaomi'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+;\s(m[1-5]\snote)\sbuild/i],
              [
                s,
                [
                  c,
                  'Meizu'
                ],
                [
                  u,
                  d
                ]
              ],
              [/(mz)-([\w-]{2,})/i],
              [
                [
                  c,
                  'Meizu'
                ],
                s,
                [
                  u,
                  d
                ]
              ],
              [
                /android.+a000(1)\s+build/i,
                /android.+oneplus\s(a\d{4})[\s)]/i
              ],
              [
                s,
                [
                  c,
                  'OnePlus'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
              [
                s,
                [
                  c,
                  'RCA'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],
              [
                s,
                [
                  c,
                  'Dell'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
              [
                s,
                [
                  c,
                  'Verizon'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
              [
                [
                  c,
                  'Barnes & Noble'
                ],
                s,
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
              [
                s,
                [
                  c,
                  'NuVision'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+;\s(k88)\sbuild/i],
              [
                s,
                [
                  c,
                  'ZTE'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
              [
                s,
                [
                  c,
                  'Swiss'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+[;\/]\s*(zur\d{3})\s+build/i],
              [
                s,
                [
                  c,
                  'Swiss'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
              [
                s,
                [
                  c,
                  'Zeki'
                ],
                [
                  u,
                  v
                ]
              ],
              [
                /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i
              ],
              [
                [
                  c,
                  'Dragon Touch'
                ],
                s,
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
              [
                s,
                [
                  c,
                  'Insignia'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
              [
                s,
                [
                  c,
                  'NextBook'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
              [
                [
                  c,
                  'Voice'
                ],
                s,
                [
                  u,
                  d
                ]
              ],
              [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
              [
                [
                  c,
                  'LvTel'
                ],
                s,
                [
                  u,
                  d
                ]
              ],
              [/android.+;\s(PH-1)\s/i],
              [
                s,
                [
                  c,
                  'Essential'
                ],
                [
                  u,
                  d
                ]
              ],
              [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
              [
                s,
                [
                  c,
                  'Envizen'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
              [
                c,
                s,
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],
              [
                s,
                [
                  c,
                  'MachSpeed'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
              [
                c,
                s,
                [
                  u,
                  v
                ]
              ],
              [/android.+[;\/]\s*TU_(1491)\s+build/i],
              [
                s,
                [
                  c,
                  'Rotor'
                ],
                [
                  u,
                  v
                ]
              ],
              [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
              [
                c,
                s,
                [
                  u,
                  v
                ]
              ],
              [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
              [
                s,
                [
                  u,
                  d
                ]
              ],
              [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
              [
                s,
                [
                  u,
                  v
                ]
              ],
              [
                /\s(tablet|tab)[;\/]/i,
                /\s(mobile)(?:[;\/]|\ssafari)/i
              ],
              [
                [
                  u,
                  p.lowerize
                ],
                c,
                s
              ],
              [/[\s\/\(](smart-?tv)[;\)]/i],
              [[
                  u,
                  h
                ]],
              [/(android[\w\.\s\-]{0,9});.+build/i],
              [
                s,
                [
                  c,
                  'Generic'
                ]
              ]
            ],
            engine: [
              [/windows.+\sedge\/([\w\.]+)/i],
              [
                f,
                [
                  l,
                  'EdgeHTML'
                ]
              ],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [
                f,
                [
                  l,
                  'Blink'
                ]
              ],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                /(icab)[\/\s]([23]\.[\d\.]+)/i
              ],
              [
                l,
                f
              ],
              [/rv\:([\w\.]{1,9}).+(gecko)/i],
              [
                f,
                l
              ]
            ],
            os: [
              [/microsoft\s(windows)\s(vista|xp)/i],
              [
                l,
                f
              ],
              [
                /(windows)\snt\s6\.2;\s(arm)/i,
                /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
              ],
              [
                l,
                [
                  f,
                  y.str,
                  m.os.windows.version
                ]
              ],
              [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
              [
                [
                  l,
                  'Windows'
                ],
                [
                  f,
                  y.str,
                  m.os.windows.version
                ]
              ],
              [/\((bb)(10);/i],
              [
                [
                  l,
                  'BlackBerry'
                ],
                f
              ],
              [
                /(blackberry)\w*\/?([\w\.]*)/i,
                /(tizen|kaios)[\/\s]([\w\.]+)/i,
                /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i
              ],
              [
                l,
                f
              ],
              [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
              [
                [
                  l,
                  'Symbian'
                ],
                f
              ],
              [/\((series40);/i],
              [l],
              [/mozilla.+\(mobile;.+gecko.+firefox/i],
              [
                [
                  l,
                  'Firefox OS'
                ],
                f
              ],
              [/crkey\/([\d\.]+)/i],
              [
                f,
                [
                  l,
                  'Chromecast'
                ]
              ],
              [
                /(nintendo|playstation)\s([wids34portablevu]+)/i,
                /(mint)[\/\s\(]?(\w*)/i,
                /(mageia|vectorlinux)[;\s]/i,
                /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                /(hurd|linux)\s?([\w\.]*)/i,
                /(gnu)\s?([\w\.]*)/i
              ],
              [
                l,
                f
              ],
              [/(cros)\s[\w]+\s([\w\.]+\w)/i],
              [
                [
                  l,
                  'Chromium OS'
                ],
                f
              ],
              [/(sunos)\s?([\w\.\d]*)/i],
              [
                [
                  l,
                  'Solaris'
                ],
                f
              ],
              [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
              [
                l,
                f
              ],
              [/(haiku)\s(\w+)/i],
              [
                l,
                f
              ],
              [
                /cfnetwork\/.+darwin/i,
                /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
              ],
              [
                [
                  f,
                  /_/g,
                  '.'
                ],
                [
                  l,
                  'iOS'
                ]
              ],
              [
                /(mac\sos\sx)\s?([\w\s\.]*)/i,
                /(macintosh|mac(?=_powerpc)\s)/i
              ],
              [
                [
                  l,
                  'Mac OS'
                ],
                [
                  f,
                  /_/g,
                  '.'
                ]
              ],
              [
                /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                /(unix)\s?([\w\.]*)/i
              ],
              [
                l,
                f
              ]
            ]
          }, g = function e(t, n) {
            if ('object' === i(t) && (n = t, t = void 0), !(this instanceof e))
              return new e(t, n).getResult();
            var r = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ''), a = n ? p.extend(b, n) : b;
            return this.getBrowser = function () {
              var e = {
                name: void 0,
                version: void 0
              };
              return y.rgx.call(e, r, a.browser), e.major = p.major(e.version), e;
            }, this.getCPU = function () {
              var e = { architecture: void 0 };
              return y.rgx.call(e, r, a.cpu), e;
            }, this.getDevice = function () {
              var e = {
                vendor: void 0,
                model: void 0,
                type: void 0
              };
              return y.rgx.call(e, r, a.device), e;
            }, this.getEngine = function () {
              var e = {
                name: void 0,
                version: void 0
              };
              return y.rgx.call(e, r, a.engine), e;
            }, this.getOS = function () {
              var e = {
                name: void 0,
                version: void 0
              };
              return y.rgx.call(e, r, a.os), e;
            }, this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              };
            }, this.getUA = function () {
              return r;
            }, this.setUA = function (e) {
              return r = e, this;
            }, this;
          };
        g.VERSION = '0.7.23', g.BROWSER = {
          NAME: l,
          MAJOR: 'major',
          VERSION: f
        }, g.CPU = { ARCHITECTURE: 'architecture' }, g.DEVICE = {
          MODEL: s,
          VENDOR: c,
          TYPE: u,
          CONSOLE: 'console',
          MOBILE: d,
          SMARTTV: h,
          TABLET: v,
          WEARABLE: 'wearable',
          EMBEDDED: 'embedded'
        }, g.ENGINE = {
          NAME: l,
          VERSION: f
        }, g.OS = {
          NAME: l,
          VERSION: f
        }, 'undefined' !== i(t) ? ('undefined' !== i(e) && e.exports && (t = e.exports = g), t.UAParser = g) : void 0 === (r = function () {
          return g;
        }.call(t, n, t, e)) || (e.exports = r);
        var w = o && (o.jQuery || o.Zepto);
        if (w && !w.ua) {
          var x = new g();
          w.ua = x.getResult(), w.ua.get = function () {
            return x.getUA();
          }, w.ua.set = function (e) {
            x.setUA(e);
            var t = x.getResult();
            for (var n in t)
              w.ua[n] = t[n];
          };
        }
      }('object' === ('undefined' == typeof window ? 'undefined' : i(window)) ? window : this);
    }.call(this, n('YuTi')(e)));
  },
  ub5Q: function (e, t, n) {
    'use strict';
    function r(e, t) {
      var n;
      if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = function (e, t) {
            if (!e)
              return;
            if ('string' == typeof e)
              return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n)
              return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return i(e, t);
          }(e)) || t && e && 'number' == typeof e.length) {
          n && (e = n);
          var r = 0, o = function () {
            };
          return {
            s: o,
            n: function () {
              return r >= e.length ? { done: !0 } : {
                done: !1,
                value: e[r++]
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
      var a, s = !0, l = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return s = e.done, e;
        },
        e: function (e) {
          l = !0, a = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (l)
              throw a;
          }
        }
      };
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
      return r;
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.QuadTree = void 0;
    var a = n('Xvid'), s = n('Erz+'), l = n('EGR3'), u = function () {
        function e(t, n) {
          !function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, e), this.rectangle = t, this.capacity = n, this.points = [], this.divided = !1;
        }
        var t, n, i;
        return t = e, (n = [
          {
            key: 'subdivide',
            value: function () {
              var t = this.rectangle.position.x, n = this.rectangle.position.y, r = this.rectangle.size.width, i = this.rectangle.size.height, o = this.capacity;
              this.northEast = new e(new a.Rectangle(t, n, r / 2, i / 2), o), this.northWest = new e(new a.Rectangle(t + r / 2, n, r / 2, i / 2), o), this.southEast = new e(new a.Rectangle(t, n + i / 2, r / 2, i / 2), o), this.southWest = new e(new a.Rectangle(t + r / 2, n + i / 2, r / 2, i / 2), o), this.divided = !0;
            }
          },
          {
            key: 'insert',
            value: function (e) {
              var t, n, r, i, o;
              return !!this.rectangle.contains(e.position) && (this.points.length < this.capacity ? (this.points.push(e), !0) : (this.divided || this.subdivide(), null !== (o = (null === (t = this.northEast) || void 0 === t ? void 0 : t.insert(e)) || (null === (n = this.northWest) || void 0 === n ? void 0 : n.insert(e)) || (null === (r = this.southEast) || void 0 === r ? void 0 : r.insert(e)) || (null === (i = this.southWest) || void 0 === i ? void 0 : i.insert(e))) && void 0 !== o && o));
            }
          },
          {
            key: 'queryCircle',
            value: function (e, t) {
              return this.query(new s.Circle(e.x, e.y, t));
            }
          },
          {
            key: 'queryCircleWarp',
            value: function (e, t, n) {
              var r = n, i = n;
              return this.query(new l.CircleWarp(e.x, e.y, t, void 0 !== r.canvas ? r.canvas.size : i));
            }
          },
          {
            key: 'queryRectangle',
            value: function (e, t) {
              return this.query(new a.Rectangle(e.x, e.y, t.width, t.height));
            }
          },
          {
            key: 'query',
            value: function (e, t) {
              var n, i, o, a, s = null != t ? t : [];
              if (!e.intersects(this.rectangle))
                return [];
              var l, u = r(this.points);
              try {
                for (u.s(); !(l = u.n()).done;) {
                  var c = l.value;
                  e.contains(c.position) && s.push(c.particle);
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
              return this.divided && (null === (n = this.northEast) || void 0 === n || n.query(e, s), null === (i = this.northWest) || void 0 === i || i.query(e, s), null === (o = this.southEast) || void 0 === o || o.query(e, s), null === (a = this.southWest) || void 0 === a || a.query(e, s)), s;
            }
          }
        ]) && o(t.prototype, n), i && o(t, i), e;
      }();
    t.QuadTree = u;
  },
  vH5O: function (e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }), t.initPjs = void 0;
    t.initPjs = function (e) {
      var t = function (t, n) {
        return e.load(t, n);
      };
      return t.load = function (t, n, r) {
        e.loadJSON(t, n).then(function (e) {
          e && r(e);
        });
      }, t.setOnClickHandler = function (t) {
        e.setOnClickHandler(t);
      }, {
        particlesJS: t,
        pJSDom: e.dom()
      };
    };
  },
  xhmd: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e) {
      return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
    }
    t.a = function e(t, n) {
      if (t === n)
        return !0;
      if (null == t || null == n)
        return !1;
      if (Array.isArray(t))
        return Array.isArray(n) && t.length === n.length && t.every(function (t, r) {
          return e(t, n[r]);
        });
      if ('object' === r(t) || 'object' === r(n)) {
        var o = i(t), a = i(n);
        return o !== t || a !== n ? e(o, a) : Object.keys(Object.assign({}, t, n)).every(function (r) {
          return e(t[r], n[r]);
        });
      }
      return !1;
    };
  },
  yLpj: function (e, t) {
    function n(e) {
      return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    var r;
    r = function () {
      return this;
    }();
    try {
      r = r || new Function('return this')();
    } catch (e) {
      'object' === ('undefined' == typeof window ? 'undefined' : n(window)) && (r = window);
    }
    e.exports = r;
  },
  z6mI: function (e, t, n) {
    'use strict';
    function r(e) {
      return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function i(e, t) {
      return (i = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function o(e) {
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
        var n, r = s(e);
        if (t) {
          var i = s(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else
          n = r.apply(this, arguments);
        return a(this, n);
      };
    }
    function a(e, t) {
      return !t || 'object' !== r(t) && 'function' != typeof t ? function (e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }(e) : t;
    }
    function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), t.Main = void 0;
    var l = n('XIwB'), u = n('Rxhr'), c = n('pPzP'), f = n('6a9T'), d = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && i(e, t);
        }(n, e);
        var t = o(n);
        function n() {
          var e;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, n), (e = t.call(this)).addPlugin(u.AbsorbersPlugin), e.addPlugin(c.EmittersPlugin), e.addPlugin(f.PolygonMaskPlugin), e;
        }
        return n;
      }(l.MainSlim);
    t.Main = d;
  }
}]);