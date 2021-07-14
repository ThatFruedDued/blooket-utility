(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{
  '2mql': function (t, e, i) {
    'use strict';
    var n = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      }, o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      }, s = Object.defineProperty, r = Object.getOwnPropertyNames, a = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, l = Object.getPrototypeOf, c = l && l(Object);
    t.exports = function t(e, i, d) {
      if ('string' != typeof i) {
        if (c) {
          var u = l(i);
          u && u !== c && t(e, u, d);
        }
        var p = r(i);
        a && (p = p.concat(a(i)));
        for (var f = 0; f < p.length; ++f) {
          var g = p[f];
          if (!(n[g] || o[g] || d && d[g])) {
            var m = h(i, g);
            try {
              s(e, g, m);
            } catch (t) {
            }
          }
        }
        return e;
      }
      return e;
    };
  },
  '6n/F': function (t, e, i) {
    (function (t) {
      var n;
      function o(t) {
        return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      !function (s, r) {
        'object' === o(t) && t.exports ? t.exports = s.document ? r(s) : r : void 0 === (n = function () {
          return r(s);
        }.call(e, i, e, t)) || (t.exports = n);
      }('undefined' != typeof window ? window : this, function (t) {
        var e, i, n, s, r, a, h, l, c = (e = void 0 === t ? window : t, i = e.document, n = e.navigator && e.navigator.userAgent || '', s = i && i.createElementNS && !!i.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect, r = /(edge|msie|trident)/i.test(n) && !e.opera, a = -1 !== n.indexOf('Firefox'), h = -1 !== n.indexOf('Chrome'), l = a && 4 > parseInt(n.split('Firefox/')[1], 10), e.Highcharts ? e.Highcharts.error(16, !0) : {
            product: 'Highcharts',
            version: '6.2.0',
            deg2rad: 2 * Math.PI / 360,
            doc: i,
            hasBidiBug: l,
            hasTouch: i && void 0 !== i.documentElement.ontouchstart,
            isMS: r,
            isWebKit: -1 !== n.indexOf('AppleWebKit'),
            isFirefox: a,
            isChrome: h,
            isSafari: !h && -1 !== n.indexOf('Safari'),
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(n),
            SVG_NS: 'http://www.w3.org/2000/svg',
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: s,
            win: e,
            marginNames: [
              'plotTop',
              'marginRight',
              'marginBottom',
              'plotLeft'
            ],
            noop: function () {
            },
            charts: []
          });
        !function (t) {
          t.timers = [];
          var e = t.charts, i = t.doc, n = t.win;
          t.error = function (e, i) {
            if (e = t.isNumber(e) ? 'Highcharts error #' + e + ': www.highcharts.com/errors/' + e : e, i)
              throw Error(e);
            n.console && console.log(e);
          }, t.Fx = function (t, e, i) {
            this.options = e, this.elem = t, this.prop = i;
          }, t.Fx.prototype = {
            dSetter: function () {
              var t, e = this.paths[0], i = this.paths[1], n = [], o = this.now, s = e.length;
              if (1 === o)
                n = this.toD;
              else if (s === i.length && 1 > o)
                for (; s--;)
                  t = parseFloat(e[s]), n[s] = isNaN(t) ? i[s] : o * parseFloat(i[s] - t) + t;
              else
                n = i;
              this.elem.attr('d', n, null, !0);
            },
            update: function () {
              var t = this.elem, e = this.prop, i = this.now, n = this.options.step;
              this[e + 'Setter'] ? this[e + 'Setter']() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, n && n.call(t, i, this);
            },
            run: function (e, i, o) {
              var s = this, r = s.options, a = function t(e) {
                  return !t.stopped && s.step(e);
                }, h = n.requestAnimationFrame || function (t) {
                  setTimeout(t, 13);
                };
              e !== i || this.elem['forceAnimate:' + this.prop] ? (this.startTime = +new Date(), this.start = e, this.end = i, this.unit = o, this.now = this.start, this.pos = 0, a.elem = this.elem, a.prop = this.prop, a() && 1 === t.timers.push(a) && h(function e() {
                for (var i = 0; i < t.timers.length; i++)
                  t.timers[i]() || t.timers.splice(i--, 1);
                t.timers.length && h(e);
              })) : (delete r.curAnim[this.prop], r.complete && 0 === t.keys(r.curAnim).length && r.complete.call(this.elem));
            },
            step: function (e) {
              var i, n = +new Date(), o = this.options, s = this.elem, r = o.complete, a = o.duration, h = o.curAnim;
              return s.attr && !s.element ? e = !1 : e || n >= a + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), i = h[this.prop] = !0, t.objectEach(h, function (t) {
                !0 !== t && (i = !1);
              }), i && r && r.call(s), e = !1) : (this.pos = o.easing((n - this.startTime) / a), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0), e;
            },
            initPath: function (e, i, n) {
              function o(t) {
                var e, i;
                for (c = t.length; c--;)
                  e = 'M' === t[c] || 'L' === t[c], i = /[a-zA-Z]/.test(t[c + 3]), e && i && t.splice(c + 1, 0, t[c + 1], t[c + 2], t[c + 1], t[c + 2]);
              }
              function s(t, e) {
                for (; t.length < h;) {
                  t[0] = e[h - t.length];
                  var i = t.slice(0, f);
                  [].splice.apply(t, [
                    0,
                    0
                  ].concat(i)), m && (i = t.slice(t.length - f), [].splice.apply(t, [
                    t.length,
                    0
                  ].concat(i)), c--);
                }
                t[0] = 'M';
              }
              function r(t, e) {
                for (var i = (h - t.length) / f; 0 < i && i--;)
                  (l = t.slice().splice(t.length / v - f, f * v))[0] = e[h - f - i * f], p && (l[f - 6] = l[f - 2], l[f - 5] = l[f - 1]), [].splice.apply(t, [
                    t.length / v,
                    0
                  ].concat(l)), m && i--;
              }
              i = i || '';
              var a, h, l, c, d = e.startX, u = e.endX, p = -1 < i.indexOf('C'), f = p ? 7 : 3;
              i = i.split(' '), n = n.slice();
              var g, m = e.isArea, v = m ? 2 : 1;
              if (p && (o(i), o(n)), d && u) {
                for (c = 0; c < d.length; c++) {
                  if (d[c] === u[0]) {
                    a = c;
                    break;
                  }
                  if (d[0] === u[u.length - d.length + c]) {
                    a = c, g = !0;
                    break;
                  }
                }
                void 0 === a && (i = []);
              }
              return i.length && t.isNumber(a) && (h = n.length + a * v * f, g ? (s(i, n), r(n, i)) : (s(n, i), r(i, n))), [
                i,
                n
              ];
            },
            fillSetter: function () {
              t.Fx.prototype.strokeSetter.apply(this, arguments);
            },
            strokeSetter: function () {
              this.elem.attr(this.prop, t.color(this.start).tweenTo(t.color(this.end), this.pos), null, !0);
            }
          }, t.merge = function () {
            var e, i, n = arguments, s = {}, r = function e(i, n) {
                return 'object' !== o(i) && (i = {}), t.objectEach(n, function (o, s) {
                  !t.isObject(o, !0) || t.isClass(o) || t.isDOMElement(o) ? i[s] = n[s] : i[s] = e(i[s] || {}, o);
                }), i;
              };
            for (!0 === n[0] && (s = n[1], n = Array.prototype.slice.call(n, 2)), i = n.length, e = 0; e < i; e++)
              s = r(s, n[e]);
            return s;
          }, t.pInt = function (t, e) {
            return parseInt(t, e || 10);
          }, t.isString = function (t) {
            return 'string' == typeof t;
          }, t.isArray = function (t) {
            return '[object Array]' === (t = Object.prototype.toString.call(t)) || '[object Array Iterator]' === t;
          }, t.isObject = function (e, i) {
            return !(!e || 'object' !== o(e) || i && t.isArray(e));
          }, t.isDOMElement = function (e) {
            return t.isObject(e) && 'number' == typeof e.nodeType;
          }, t.isClass = function (e) {
            var i = e && e.constructor;
            return !(!t.isObject(e, !0) || t.isDOMElement(e) || !i || !i.name || 'Object' === i.name);
          }, t.isNumber = function (t) {
            return 'number' == typeof t && !isNaN(t) && 1 / 0 > t && -1 / 0 < t;
          }, t.erase = function (t, e) {
            for (var i = t.length; i--;)
              if (t[i] === e) {
                t.splice(i, 1);
                break;
              }
          }, t.defined = function (t) {
            return null != t;
          }, t.attr = function (e, i, n) {
            var o;
            return t.isString(i) ? t.defined(n) ? e.setAttribute(i, n) : e && e.getAttribute && ((o = e.getAttribute(i)) || 'class' !== i || (o = e.getAttribute(i + 'Name'))) : t.defined(i) && t.isObject(i) && t.objectEach(i, function (t, i) {
              e.setAttribute(i, t);
            }), o;
          }, t.splat = function (e) {
            return t.isArray(e) ? e : [e];
          }, t.syncTimeout = function (t, e, i) {
            if (e)
              return setTimeout(t, e, i);
            t.call(0, i);
          }, t.clearTimeout = function (e) {
            t.defined(e) && clearTimeout(e);
          }, t.extend = function (t, e) {
            var i;
            for (i in (t || (t = {}), e))
              t[i] = e[i];
            return t;
          }, t.pick = function () {
            var t, e, i = arguments, n = i.length;
            for (t = 0; t < n; t++)
              if (null != (e = i[t]))
                return e;
          }, t.css = function (e, i) {
            t.isMS && !t.svg && i && void 0 !== i.opacity && (i.filter = 'alpha(opacity=' + 100 * i.opacity + ')'), t.extend(e.style, i);
          }, t.createElement = function (e, n, o, s, r) {
            e = i.createElement(e);
            var a = t.css;
            return n && t.extend(e, n), r && a(e, {
              padding: 0,
              border: 'none',
              margin: 0
            }), o && a(e, o), s && s.appendChild(e), e;
          }, t.extendClass = function (e, i) {
            var n = function () {
            };
            return n.prototype = new e(), t.extend(n.prototype, i), n;
          }, t.pad = function (t, e, i) {
            return Array((e || 2) + 1 - String(t).replace('-', '').length).join(i || 0) + t;
          }, t.relativeLength = function (t, e, i) {
            return /%$/.test(t) ? e * parseFloat(t) / 100 + (i || 0) : parseFloat(t);
          }, t.wrap = function (t, e, i) {
            var n = t[e];
            t[e] = function () {
              var t = Array.prototype.slice.call(arguments), e = arguments, o = this;
              return o.proceed = function () {
                n.apply(o, arguments.length ? arguments : e);
              }, t.unshift(n), t = i.apply(this, t), o.proceed = null, t;
            };
          }, t.datePropsToTimestamps = function (e) {
            t.objectEach(e, function (i, n) {
              t.isObject(i) && 'function' == typeof i.getTime ? e[n] = i.getTime() : (t.isObject(i) || t.isArray(i)) && t.datePropsToTimestamps(i);
            });
          }, t.formatSingle = function (e, i, n) {
            var o = t.defaultOptions.lang;
            return /f$/.test(e) ? (n = (n = e.match(/\.([0-9])/)) ? n[1] : -1, null !== i && (i = t.numberFormat(i, n, o.decimalPoint, -1 < e.indexOf(',') ? o.thousandsSep : ''))) : i = (n || t.time).dateFormat(e, i), i;
          }, t.format = function (e, i, n) {
            for (var o, s, r, a, h, l = '{', c = !1, d = []; e && -1 !== (l = e.indexOf(l));) {
              if (o = e.slice(0, l), c) {
                for (a = (s = (o = o.split(':')).shift().split('.')).length, h = i, r = 0; r < a; r++)
                  h && (h = h[s[r]]);
                o.length && (h = t.formatSingle(o.join(':'), h, n)), d.push(h);
              } else
                d.push(o);
              e = e.slice(l + 1), l = (c = !c) ? '}' : '{';
            }
            return d.push(e), d.join('');
          }, t.getMagnitude = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10));
          }, t.normalizeTickInterval = function (e, i, n, o, s) {
            var r, a = e;
            for (r = e / (n = t.pick(n, 1)), i || (i = s ? [
                1,
                1.2,
                1.5,
                2,
                2.5,
                3,
                4,
                5,
                6,
                8,
                10
              ] : [
                1,
                2,
                2.5,
                5,
                10
              ], !1 === o && (1 === n ? i = t.grep(i, function (t) {
                return 0 == t % 1;
              }) : 0.1 >= n && (i = [1 / n]))), o = 0; o < i.length && (a = i[o], !(s && a * n >= e || !s && r <= (i[o] + (i[o + 1] || i[o])) / 2)); o++);
            return t.correctFloat(a * n, -Math.round(Math.log(0.001) / Math.LN10));
          }, t.stableSort = function (t, e) {
            var i, n, o = t.length;
            for (n = 0; n < o; n++)
              t[n].safeI = n;
            for (t.sort(function (t, n) {
                return 0 === (i = e(t, n)) ? t.safeI - n.safeI : i;
              }), n = 0; n < o; n++)
              delete t[n].safeI;
          }, t.arrayMin = function (t) {
            for (var e = t.length, i = t[0]; e--;)
              t[e] < i && (i = t[e]);
            return i;
          }, t.arrayMax = function (t) {
            for (var e = t.length, i = t[0]; e--;)
              t[e] > i && (i = t[e]);
            return i;
          }, t.destroyObjectProperties = function (e, i) {
            t.objectEach(e, function (t, n) {
              t && t !== i && t.destroy && t.destroy(), delete e[n];
            });
          }, t.discardElement = function (e) {
            var i = t.garbageBin;
            i || (i = t.createElement('div')), e && i.appendChild(e), i.innerHTML = '';
          }, t.correctFloat = function (t, e) {
            return parseFloat(t.toPrecision(e || 14));
          }, t.setAnimation = function (e, i) {
            i.renderer.globalAnimation = t.pick(e, i.options.chart.animation, !0);
          }, t.animObject = function (e) {
            return t.isObject(e) ? t.merge(e) : { duration: e ? 500 : 0 };
          }, t.timeUnits = {
            millisecond: 1,
            second: 1000,
            minute: 60000,
            hour: 3600000,
            day: 86400000,
            week: 604800000,
            month: 2419200000,
            year: 31449600000
          }, t.numberFormat = function (e, i, n, o) {
            e = +e || 0, i = +i;
            var s, r, a = t.defaultOptions.lang, h = (e.toString().split('.')[1] || '').split('e')[0].length, l = e.toString().split('e');
            return -1 === i ? i = Math.min(h, 20) : t.isNumber(i) ? i && l[1] && 0 > l[1] && (0 <= (s = i + +l[1]) ? (l[0] = (+l[0]).toExponential(s).split('e')[0], i = s) : (l[0] = l[0].split('.')[0] || 0, e = 20 > i ? (l[0] * Math.pow(10, l[1])).toFixed(i) : 0, l[1] = 0)) : i = 2, r = (Math.abs(l[1] ? l[0] : e) + Math.pow(10, -Math.max(i, h) - 1)).toFixed(i), s = 3 < (h = String(t.pInt(r))).length ? h.length % 3 : 0, n = t.pick(n, a.decimalPoint), o = t.pick(o, a.thousandsSep), e = (0 > e ? '-' : '') + (s ? h.substr(0, s) + o : ''), e += h.substr(s).replace(/(\d{3})(?=\d)/g, '$1' + o), i && (e += n + r.slice(-i)), l[1] && 0 != +e && (e += 'e' + l[1]), e;
          }, Math.easeInOutSine = function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          }, t.getStyle = function (e, i, o) {
            return 'width' === i ? Math.max(0, Math.min(e.offsetWidth, e.scrollWidth) - t.getStyle(e, 'padding-left') - t.getStyle(e, 'padding-right')) : 'height' === i ? Math.max(0, Math.min(e.offsetHeight, e.scrollHeight) - t.getStyle(e, 'padding-top') - t.getStyle(e, 'padding-bottom')) : (n.getComputedStyle || t.error(27, !0), (e = n.getComputedStyle(e, void 0)) && (e = e.getPropertyValue(i), t.pick(o, 'opacity' !== i) && (e = t.pInt(e))), e);
          }, t.inArray = function (e, i, n) {
            return (t.indexOfPolyfill || Array.prototype.indexOf).call(i, e, n);
          }, t.grep = function (e, i) {
            return (t.filterPolyfill || Array.prototype.filter).call(e, i);
          }, t.find = Array.prototype.find ? function (t, e) {
            return t.find(e);
          } : function (t, e) {
            var i, n = t.length;
            for (i = 0; i < n; i++)
              if (e(t[i], i))
                return t[i];
          }, t.some = function (e, i, n) {
            return (t.somePolyfill || Array.prototype.some).call(e, i, n);
          }, t.map = function (t, e) {
            for (var i = [], n = 0, o = t.length; n < o; n++)
              i[n] = e.call(t[n], t[n], n, t);
            return i;
          }, t.keys = function (e) {
            return (t.keysPolyfill || Object.keys).call(void 0, e);
          }, t.reduce = function (e, i, n) {
            return (t.reducePolyfill || Array.prototype.reduce).apply(e, 2 < arguments.length ? [
              i,
              n
            ] : [i]);
          }, t.offset = function (t) {
            var e = i.documentElement;
            return {
              top: (t = t.parentElement || t.parentNode ? t.getBoundingClientRect() : {
                top: 0,
                left: 0
              }).top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
              left: t.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            };
          }, t.stop = function (e, i) {
            for (var n = t.timers.length; n--;)
              t.timers[n].elem !== e || i && i !== t.timers[n].prop || (t.timers[n].stopped = !0);
          }, t.each = function (e, i, n) {
            return (t.forEachPolyfill || Array.prototype.forEach).call(e, i, n);
          }, t.objectEach = function (t, e, i) {
            for (var n in t)
              t.hasOwnProperty(n) && e.call(i || t[n], t[n], n, t);
          }, t.addEvent = function (e, i, n, o) {
            var s, r = e.addEventListener || t.addEventListenerPolyfill;
            return s = 'function' == typeof e && e.prototype ? e.prototype.protoEvents = e.prototype.protoEvents || {} : e.hcEvents = e.hcEvents || {}, t.Point && e instanceof t.Point && e.series && e.series.chart && (e.series.chart.runTrackerClick = !0), r && r.call(e, i, n, !1), s[i] || (s[i] = []), s[i].push(n), o && t.isNumber(o.order) && (n.order = o.order, s[i].sort(function (t, e) {
              return t.order - e.order;
            })), function () {
              t.removeEvent(e, i, n);
            };
          }, t.removeEvent = function (e, i, n) {
            function o(i, n) {
              var o = e.removeEventListener || t.removeEventListenerPolyfill;
              o && o.call(e, i, n, !1);
            }
            function s(n) {
              var s, r;
              e.nodeName && (i ? (s = {})[i] = !0 : s = n, t.objectEach(s, function (t, e) {
                if (n[e])
                  for (r = n[e].length; r--;)
                    o(e, n[e][r]);
              }));
            }
            var r, a;
            t.each([
              'protoEvents',
              'hcEvents'
            ], function (h) {
              var l = e[h];
              l && (i ? (r = l[i] || [], n ? (-1 < (a = t.inArray(n, r)) && (r.splice(a, 1), l[i] = r), o(i, n)) : (s(l), l[i] = [])) : (s(l), e[h] = {}));
            });
          }, t.fireEvent = function (e, n, o, s) {
            var r, a, h, l, c;
            o = o || {}, i.createEvent && (e.dispatchEvent || e.fireEvent) ? ((r = i.createEvent('Events')).initEvent(n, !0, !0), t.extend(r, o), e.dispatchEvent ? e.dispatchEvent(r) : e.fireEvent(n, r)) : t.each([
              'protoEvents',
              'hcEvents'
            ], function (i) {
              if (e[i])
                for (a = e[i][n] || [], h = a.length, o.target || t.extend(o, {
                    preventDefault: function () {
                      o.defaultPrevented = !0;
                    },
                    target: e,
                    type: n
                  }), l = 0; l < h; l++)
                  (c = a[l]) && !1 === c.call(e, o) && o.preventDefault();
            }), s && !o.defaultPrevented && s.call(e, o);
          }, t.animate = function (e, i, n) {
            var o, s, r, a, h = '';
            t.isObject(n) || (n = {
              duration: (a = arguments)[2],
              easing: a[3],
              complete: a[4]
            }), t.isNumber(n.duration) || (n.duration = 400), n.easing = 'function' == typeof n.easing ? n.easing : Math[n.easing] || Math.easeInOutSine, n.curAnim = t.merge(i), t.objectEach(i, function (a, l) {
              t.stop(e, l), r = new t.Fx(e, n, l), s = null, 'd' === l ? (r.paths = r.initPath(e, e.d, i.d), r.toD = i.d, o = 0, s = 1) : e.attr ? o = e.attr(l) : (o = parseFloat(t.getStyle(e, l)) || 0, 'opacity' !== l && (h = 'px')), s || (s = a), s && s.match && s.match('px') && (s = s.replace(/px/g, '')), r.run(o, s, h);
            });
          }, t.seriesType = function (e, i, n, o, s) {
            var r = t.getOptions(), a = t.seriesTypes;
            return r.plotOptions[e] = t.merge(r.plotOptions[i], n), a[e] = t.extendClass(a[i] || function () {
            }, o), a[e].prototype.type = e, s && (a[e].prototype.pointClass = t.extendClass(t.Point, s)), a[e];
          }, t.uniqueKey = function () {
            var t = Math.random().toString(36).substring(2, 9), e = 0;
            return function () {
              return 'highcharts-' + t + '-' + e++;
            };
          }(), n.jQuery && (n.jQuery.fn.highcharts = function () {
            var i = [].slice.call(arguments);
            if (this[0])
              return i[0] ? (new t[(t.isString(i[0])) ? (i.shift()) : 'Chart'](this[0], i[0], i[1]), this) : e[t.attr(this[0], 'data-highcharts-chart')];
          });
        }(c), function (t) {
          var e = t.each, i = t.isNumber, n = t.map, o = t.merge, s = t.pInt;
          t.Color = function (e) {
            if (!(this instanceof t.Color))
              return new t.Color(e);
            this.init(e);
          }, t.Color.prototype = {
            parsers: [
              {
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function (t) {
                  return [
                    s(t[1]),
                    s(t[2]),
                    s(t[3]),
                    parseFloat(t[4], 10)
                  ];
                }
              },
              {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function (t) {
                  return [
                    s(t[1]),
                    s(t[2]),
                    s(t[3]),
                    1
                  ];
                }
              }
            ],
            names: {
              white: '#ffffff',
              black: '#000000'
            },
            init: function (e) {
              var i, o, s, r;
              if ((this.input = e = this.names[e && e.toLowerCase ? e.toLowerCase() : ''] || e) && e.stops)
                this.stops = n(e.stops, function (e) {
                  return new t.Color(e[1]);
                });
              else if (e && e.charAt && '#' === e.charAt() && (i = e.length, e = parseInt(e.substr(1), 16), 7 === i ? o = [
                  (16711680 & e) >> 16,
                  (65280 & e) >> 8,
                  255 & e,
                  1
                ] : 4 === i && (o = [
                  (3840 & e) >> 4 | (3840 & e) >> 8,
                  (240 & e) >> 4 | 240 & e,
                  (15 & e) << 4 | 15 & e,
                  1
                ])), !o)
                for (s = this.parsers.length; s-- && !o;)
                  (i = (r = this.parsers[s]).regex.exec(e)) && (o = r.parse(i));
              this.rgba = o || [];
            },
            get: function (t) {
              var n, s = this.input, r = this.rgba;
              return this.stops ? ((n = o(s)).stops = [].concat(n.stops), e(this.stops, function (e, i) {
                n.stops[i] = [
                  n.stops[i][0],
                  e.get(t)
                ];
              })) : n = r && i(r[0]) ? 'rgb' === t || !t && 1 === r[3] ? 'rgb(' + r[0] + ',' + r[1] + ',' + r[2] + ')' : 'a' === t ? r[3] : 'rgba(' + r.join(',') + ')' : s, n;
            },
            brighten: function (t) {
              var n, o = this.rgba;
              if (this.stops)
                e(this.stops, function (e) {
                  e.brighten(t);
                });
              else if (i(t) && 0 !== t)
                for (n = 0; 3 > n; n++)
                  o[n] += s(255 * t), 0 > o[n] && (o[n] = 0), 255 < o[n] && (o[n] = 255);
              return this;
            },
            setOpacity: function (t) {
              return this.rgba[3] = t, this;
            },
            tweenTo: function (t, e) {
              var i = this.rgba, n = t.rgba;
              return n.length && i && i.length ? e = ((t = 1 !== n[3] || 1 !== i[3]) ? 'rgba(' : 'rgb(') + Math.round(n[0] + (i[0] - n[0]) * (1 - e)) + ',' + Math.round(n[1] + (i[1] - n[1]) * (1 - e)) + ',' + Math.round(n[2] + (i[2] - n[2]) * (1 - e)) + (t ? ',' + (n[3] + (i[3] - n[3]) * (1 - e)) : '') + ')' : e = t.input || 'none', e;
            }
          }, t.color = function (e) {
            return new t.Color(e);
          };
        }(c), function (t) {
          var e, i, n = t.addEvent, o = t.animate, s = t.attr, r = t.charts, a = t.color, h = t.css, l = t.createElement, c = t.defined, d = t.deg2rad, u = t.destroyObjectProperties, p = t.doc, f = t.each, g = t.extend, m = t.erase, v = t.grep, y = t.hasTouch, x = t.inArray, b = t.isArray, w = t.isFirefox, k = t.isMS, S = t.isObject, M = t.isString, A = t.isWebKit, T = t.merge, C = t.noop, L = t.objectEach, P = t.pick, O = t.pInt, D = t.removeEvent, E = t.stop, I = t.svg, z = t.SVG_NS, B = t.symbolSizes, N = t.win;
          e = t.SVGElement = function () {
            return this;
          }, g(e.prototype, {
            opacity: 1,
            SVG_NS: z,
            textProps: 'direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor'.split(' '),
            init: function (t, e) {
              this.element = 'span' === e ? l(e) : p.createElementNS(this.SVG_NS, e), this.renderer = t;
            },
            animate: function (e, i, n) {
              return 0 !== (i = t.animObject(P(i, this.renderer.globalAnimation, !0))).duration ? (n && (i.complete = n), o(this, e, i)) : (this.attr(e, null, n), i.step && i.step.call(this)), this;
            },
            complexColor: function (e, i, n) {
              var o, s, r, a, h, l, d, u, p, g, m, v, y = this.renderer, x = [];
              t.fireEvent(this.renderer, 'complexColor', { args: arguments }, function () {
                e.radialGradient ? s = 'radialGradient' : e.linearGradient && (s = 'linearGradient'), s && (r = e[s], h = y.gradients, d = e.stops, g = n.radialReference, b(r) && (e[s] = r = {
                  x1: r[0],
                  y1: r[1],
                  x2: r[2],
                  y2: r[3],
                  gradientUnits: 'userSpaceOnUse'
                }), 'radialGradient' === s && g && !c(r.gradientUnits) && (a = r, r = T(r, y.getRadialAttr(g, a), { gradientUnits: 'userSpaceOnUse' })), L(r, function (t, e) {
                  'id' !== e && x.push(e, t);
                }), L(d, function (t) {
                  x.push(t);
                }), x = x.join(','), h[x] ? m = h[x].attr('id') : (r.id = m = t.uniqueKey(), h[x] = l = y.createElement(s).attr(r).add(y.defs), l.radAttr = a, l.stops = [], f(d, function (e) {
                  0 === e[1].indexOf('rgba') ? (o = t.color(e[1]), u = o.get('rgb'), p = o.get('a')) : (u = e[1], p = 1), e = y.createElement('stop').attr({
                    offset: e[0],
                    'stop-color': u,
                    'stop-opacity': p
                  }).add(l), l.stops.push(e);
                })), v = 'url(' + y.url + '#' + m + ')', n.setAttribute(i, v), n.gradient = x, e.toString = function () {
                  return v;
                });
              });
            },
            applyTextOutline: function (e) {
              var i, n, o, r, a, h = this.element;
              if (-1 !== e.indexOf('contrast') && (e = e.replace(/contrast/g, this.renderer.getContrast(h.style.fill))), e = e.split(' '), n = e[e.length - 1], (o = e[0]) && 'none' !== o && t.svg) {
                for (this.fakeTS = !0, e = [].slice.call(h.getElementsByTagName('tspan')), this.ySetter = this.xSetter, o = o.replace(/(^[\d\.]+)(.*?)$/g, function (t, e, i) {
                    return 2 * e + i;
                  }), a = e.length; a--;)
                  'highcharts-text-outline' === (i = e[a]).getAttribute('class') && m(e, h.removeChild(i));
                r = h.firstChild, f(e, function (t, e) {
                  0 === e && (t.setAttribute('x', h.getAttribute('x')), e = h.getAttribute('y'), t.setAttribute('y', e || 0), null === e && h.setAttribute('y', 0)), t = t.cloneNode(1), s(t, {
                    class: 'highcharts-text-outline',
                    fill: n,
                    stroke: n,
                    'stroke-width': o,
                    'stroke-linejoin': 'round'
                  }), h.insertBefore(t, r);
                });
              }
            },
            attr: function (t, e, i, n) {
              var o, s, r, a, h = this.element, l = this;
              return 'string' == typeof t && void 0 !== e && (o = t, (t = {})[o] = e), 'string' == typeof t ? l = (this[t + 'Getter'] || this._defaultGetter).call(this, t, h) : (L(t, function (e, i) {
                r = !1, n || E(this, i), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(i) && (s || (this.symbolAttr(t), s = !0), r = !0), !this.rotation || 'x' !== i && 'y' !== i || (this.doTransform = !0), r || ((a = this[i + 'Setter'] || this._defaultSetter).call(this, e, i, h), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, a));
              }, this), this.afterSetters()), i && i.call(this), l;
            },
            afterSetters: function () {
              this.doTransform && (this.updateTransform(), this.doTransform = !1);
            },
            updateShadows: function (t, e, i) {
              for (var n = this.shadows, o = n.length; o--;)
                i.call(n[o], 'height' === t ? Math.max(e - (n[o].cutHeight || 0), 0) : 'd' === t ? this.d : e, t, n[o]);
            },
            addClass: function (t, e) {
              var i = this.attr('class') || '';
              return -1 === i.indexOf(t) && (e || (t = (i + (i ? ' ' : '') + t).replace('  ', ' ')), this.attr('class', t)), this;
            },
            hasClass: function (t) {
              return -1 !== x(t, (this.attr('class') || '').split(' '));
            },
            removeClass: function (t) {
              return this.attr('class', (this.attr('class') || '').replace(t, ''));
            },
            symbolAttr: function (t) {
              var e = this;
              f('x y r start end width height innerR anchorX anchorY'.split(' '), function (i) {
                e[i] = P(t[i], e[i]);
              }), e.attr({ d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e) });
            },
            clip: function (t) {
              return this.attr('clip-path', t ? 'url(' + this.renderer.url + '#' + t.id + ')' : 'none');
            },
            crisp: function (t, e) {
              var i;
              return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || this.x || 0) + i, t.y = Math.floor(t.y || this.y || 0) + i, t.width = Math.floor((t.width || this.width || 0) - 2 * i), t.height = Math.floor((t.height || this.height || 0) - 2 * i), c(t.strokeWidth) && (t.strokeWidth = e), t;
            },
            css: function (t) {
              var e, i, n = this.styles, o = {}, r = this.element, a = '', l = !n, c = [
                  'textOutline',
                  'textOverflow',
                  'width'
                ];
              return t && t.color && (t.fill = t.color), n && L(t, function (t, e) {
                t !== n[e] && (o[e] = t, l = !0);
              }), l && (n && (t = g(n, o)), t && (null === t.width || 'auto' === t.width ? delete this.textWidth : 'text' === r.nodeName.toLowerCase() && t.width && (e = this.textWidth = O(t.width))), this.styles = t, e && !I && this.renderer.forExport && delete t.width, r.namespaceURI === this.SVG_NS ? (i = function (t, e) {
                return '-' + e.toLowerCase();
              }, L(t, function (t, e) {
                -1 === x(e, c) && (a += e.replace(/([A-Z])/g, i) + ':' + t + ';');
              }), a && s(r, 'style', a)) : h(r, t), this.added && ('text' === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this;
            },
            strokeWidth: function () {
              return this['stroke-width'] || 0;
            },
            on: function (t, e) {
              var i = this, n = i.element;
              return y && 'click' === t ? (n.ontouchstart = function (t) {
                i.touchEventFired = Date.now(), t.preventDefault(), e.call(n, t);
              }, n.onclick = function (t) {
                (-1 === N.navigator.userAgent.indexOf('Android') || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(n, t);
              }) : n['on' + t] = e, this;
            },
            setRadialReference: function (t) {
              var e = this.renderer.gradients[this.element.gradient];
              return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this;
            },
            translate: function (t, e) {
              return this.attr({
                translateX: t,
                translateY: e
              });
            },
            invert: function (t) {
              return this.inverted = t, this.updateTransform(), this;
            },
            updateTransform: function () {
              var t = this.translateX || 0, e = this.translateY || 0, i = this.scaleX, n = this.scaleY, o = this.inverted, s = this.rotation, r = this.matrix, a = this.element;
              o && (t += this.width, e += this.height), t = ['translate(' + t + ',' + e + ')'], c(r) && t.push('matrix(' + r.join(',') + ')'), o ? t.push('rotate(90) scale(-1,1)') : s && t.push('rotate(' + s + ' ' + P(this.rotationOriginX, a.getAttribute('x'), 0) + ' ' + P(this.rotationOriginY, a.getAttribute('y') || 0) + ')'), (c(i) || c(n)) && t.push('scale(' + P(i, 1) + ' ' + P(n, 1) + ')'), t.length && a.setAttribute('transform', t.join(' '));
            },
            toFront: function () {
              var t = this.element;
              return t.parentNode.appendChild(t), this;
            },
            align: function (t, e, i) {
              var n, o, s, r, a, h, l = {};
              return s = (o = this.renderer).alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || M(i)) && (this.alignTo = n = i || 'renderer', m(s, this), s.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = P(i, o[n], o), n = t.align, o = t.verticalAlign, s = (i.x || 0) + (t.x || 0), r = (i.y || 0) + (t.y || 0), 'right' === n ? a = 1 : 'center' === n && (a = 2), a && (s += (i.width - (t.width || 0)) / a), l[e ? 'translateX' : 'x'] = Math.round(s), 'bottom' === o ? h = 1 : 'middle' === o && (h = 2), h && (r += (i.height - (t.height || 0)) / h), l[e ? 'translateY' : 'y'] = Math.round(r), this[this.placed ? 'animate' : 'attr'](l), this.placed = !0, this.alignAttr = l, this;
            },
            getBBox: function (t, e) {
              var i, n, o, s, r, a = this.renderer, h = this.element, l = this.styles, u = this.textStr, p = a.cache, m = a.cacheKeys, v = h.namespaceURI === this.SVG_NS;
              if (n = (e = P(e, this.rotation)) * d, o = l && l.fontSize, c(u) && (-1 === (r = u.toString()).indexOf('<') && (r = r.replace(/[0-9]/g, '0')), r += [
                  '',
                  e || 0,
                  o,
                  this.textWidth,
                  l && l.textOverflow
                ].join()), r && !t && (i = p[r]), !i) {
                if (v || a.forExport) {
                  try {
                    (s = this.fakeTS && function (t) {
                      f(h.querySelectorAll('.highcharts-text-outline'), function (e) {
                        e.style.display = t;
                      });
                    }) && s('none'), i = h.getBBox ? g({}, h.getBBox()) : {
                      width: h.offsetWidth,
                      height: h.offsetHeight
                    }, s && s('');
                  } catch (t) {
                  }
                  (!i || 0 > i.width) && (i = {
                    width: 0,
                    height: 0
                  });
                } else
                  i = this.htmlGetBBox();
                if (a.isSVG && (t = i.width, a = i.height, v && (i.height = a = {
                    '11px,17': 14,
                    '13px,20': 16
                  }[l && l.fontSize + ',' + Math.round(a)] || a), e && (i.width = Math.abs(a * Math.sin(n)) + Math.abs(t * Math.cos(n)), i.height = Math.abs(a * Math.cos(n)) + Math.abs(t * Math.sin(n)))), r && 0 < i.height) {
                  for (; 250 < m.length;)
                    delete p[m.shift()];
                  p[r] || m.push(r), p[r] = i;
                }
              }
              return i;
            },
            show: function (t) {
              return this.attr({ visibility: t ? 'inherit' : 'visible' });
            },
            hide: function () {
              return this.attr({ visibility: 'hidden' });
            },
            fadeOut: function (t) {
              var e = this;
              e.animate({ opacity: 0 }, {
                duration: t || 150,
                complete: function () {
                  e.attr({ y: -9999 });
                }
              });
            },
            add: function (t) {
              var e, i = this.renderer, n = this.element;
              return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this;
            },
            safeRemoveChild: function (t) {
              var e = t.parentNode;
              e && e.removeChild(t);
            },
            destroy: function () {
              var t = this, e = t.element || {}, i = t.renderer.isSVG && 'SPAN' === e.nodeName && t.parentGroup, n = e.ownerSVGElement, o = t.clipPath;
              if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, E(t), o && n && (f(n.querySelectorAll('[clip-path],[CLIP-PATH]'), function (t) {
                  var e = t.getAttribute('clip-path'), i = o.element.id;
                  (-1 < e.indexOf('(#' + i + ')') || -1 < e.indexOf('("#' + i + '")')) && t.removeAttribute('clip-path');
                }), t.clipPath = o.destroy()), t.stops) {
                for (n = 0; n < t.stops.length; n++)
                  t.stops[n] = t.stops[n].destroy();
                t.stops = null;
              }
              for (t.safeRemoveChild(e), t.destroyShadows(); i && i.div && 0 === i.div.childNodes.length;)
                e = i.parentGroup, t.safeRemoveChild(i.div), delete i.div, i = e;
              return t.alignTo && m(t.renderer.alignedObjects, t), L(t, function (e, i) {
                delete t[i];
              }), null;
            },
            shadow: function (t, e, i) {
              var n, o, r, a, h, l, c = [], d = this.element;
              if (t) {
                if (!this.shadows) {
                  for (a = P(t.width, 3), h = (t.opacity || 0.15) / a, l = this.parentInverted ? '(-1,-1)' : '(' + P(t.offsetX, 1) + ', ' + P(t.offsetY, 1) + ')', n = 1; n <= a; n++)
                    o = d.cloneNode(0), r = 2 * a + 1 - 2 * n, s(o, {
                      stroke: t.color || '#000000',
                      'stroke-opacity': h * n,
                      'stroke-width': r,
                      transform: 'translate' + l,
                      fill: 'none'
                    }), o.setAttribute('class', (o.getAttribute('class') || '') + ' highcharts-shadow'), i && (s(o, 'height', Math.max(s(o, 'height') - r, 0)), o.cutHeight = r), e ? e.element.appendChild(o) : d.parentNode && d.parentNode.insertBefore(o, d), c.push(o);
                  this.shadows = c;
                }
              } else
                this.destroyShadows();
              return this;
            },
            destroyShadows: function () {
              f(this.shadows || [], function (t) {
                this.safeRemoveChild(t);
              }, this), this.shadows = void 0;
            },
            xGetter: function (t) {
              return 'circle' === this.element.nodeName && ('x' === t ? t = 'cx' : 'y' === t && (t = 'cy')), this._defaultGetter(t);
            },
            _defaultGetter: function (t) {
              return t = P(this[t + 'Value'], this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t;
            },
            dSetter: function (t, e, i) {
              t && t.join && (t = t.join(' ')), /(NaN| {2}|^$)/.test(t) && (t = 'M 0 0'), this[e] !== t && (i.setAttribute(e, t), this[e] = t);
            },
            dashstyleSetter: function (t) {
              var e, i = this['stroke-width'];
              if ('inherit' === i && (i = 1), t = t && t.toLowerCase()) {
                for (e = (t = t.replace('shortdashdotdot', '3,1,1,1,1,1,').replace('shortdashdot', '3,1,1,1').replace('shortdot', '1,1,').replace('shortdash', '3,1,').replace('longdash', '8,3,').replace(/dot/g, '1,3,').replace('dash', '4,3,').replace(/,$/, '').split(',')).length; e--;)
                  t[e] = O(t[e]) * i;
                t = t.join(',').replace(/NaN/g, 'none'), this.element.setAttribute('stroke-dasharray', t);
              }
            },
            alignSetter: function (t) {
              this.alignValue = t, this.element.setAttribute('text-anchor', {
                left: 'start',
                center: 'middle',
                right: 'end'
              }[t]);
            },
            opacitySetter: function (t, e, i) {
              this[e] = t, i.setAttribute(e, t);
            },
            titleSetter: function (t) {
              var e = this.element.getElementsByTagName('title')[0];
              e || (e = p.createElementNS(this.SVG_NS, 'title'), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(p.createTextNode(String(P(t), '').replace(/<[^>]*>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>')));
            },
            textSetter: function (t) {
              t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this));
            },
            fillSetter: function (t, e, i) {
              'string' == typeof t ? i.setAttribute(e, t) : t && this.complexColor(t, e, i);
            },
            visibilitySetter: function (t, e, i) {
              'inherit' === t ? i.removeAttribute(e) : this[e] !== t && i.setAttribute(e, t), this[e] = t;
            },
            zIndexSetter: function (t, e) {
              var i, n, o, s, r = this.renderer, a = this.parentGroup, h = (a || r).element || r.box, l = this.element;
              r = h === r.box;
              if (i = this.added, c(t) ? (l.setAttribute('data-z-index', t), t = +t, this[e] === t && (i = !1)) : c(this[e]) && l.removeAttribute('data-z-index'), this[e] = t, i) {
                for ((t = this.zIndex) && a && (a.handleZ = !0), s = (e = h.childNodes).length - 1; 0 <= s && !n; s--)
                  i = (a = e[s]).getAttribute('data-z-index'), o = !c(i), a !== l && (0 > t && o && !r && !s ? (h.insertBefore(l, e[s]), n = !0) : (O(i) <= t || o && (!c(t) || 0 <= t)) && (h.insertBefore(l, e[s + 1] || null), n = !0));
                n || (h.insertBefore(l, e[r ? 3 : 0] || null), n = !0);
              }
              return n;
            },
            _defaultSetter: function (t, e, i) {
              i.setAttribute(e, t);
            }
          }), e.prototype.yGetter = e.prototype.xGetter, e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.rotationSetter = e.prototype.verticalAlignSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.matrixSetter = function (t, e) {
            this[e] = t, this.doTransform = !0;
          }, e.prototype['stroke-widthSetter'] = e.prototype.strokeSetter = function (t, i, n) {
            this[i] = t, this.stroke && this['stroke-width'] ? (e.prototype.fillSetter.call(this, this.stroke, 'stroke', n), n.setAttribute('stroke-width', this['stroke-width']), this.hasStroke = !0) : 'stroke-width' === i && 0 === t && this.hasStroke && (n.removeAttribute('stroke'), this.hasStroke = !1);
          }, i = t.SVGRenderer = function () {
            this.init.apply(this, arguments);
          }, g(i.prototype, {
            Element: e,
            SVG_NS: z,
            init: function (t, e, i, o, r, a) {
              var l, c;
              l = (o = this.createElement('svg').attr({
                version: '1.1',
                class: 'highcharts-root'
              }).css(this.getStyle(o))).element, t.appendChild(l), s(t, 'dir', 'ltr'), -1 === t.innerHTML.indexOf('xmlns') && s(l, 'xmlns', this.SVG_NS), this.isSVG = !0, this.box = l, this.boxWrapper = o, this.alignedObjects = [], this.url = (w || A) && p.getElementsByTagName('base').length ? N.location.href.split('#')[0].replace(/<[^>]*>/g, '').replace(/([\('\)])/g, '\\$1').replace(/ /g, '%20') : '', this.createElement('desc').add().element.appendChild(p.createTextNode('Created with Highcharts 6.2.0')), this.defs = this.createElement('defs').add(), this.allowHTML = a, this.forExport = r, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), w && t.getBoundingClientRect && ((e = function () {
                h(t, {
                  left: 0,
                  top: 0
                }), c = t.getBoundingClientRect(), h(t, {
                  left: Math.ceil(c.left) - c.left + 'px',
                  top: Math.ceil(c.top) - c.top + 'px'
                });
              })(), this.unSubPixelFix = n(N, 'resize', e));
            },
            getStyle: function (t) {
              return this.style = g({
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                fontSize: '12px'
              }, t);
            },
            setStyle: function (t) {
              this.boxWrapper.css(this.getStyle(t));
            },
            isHidden: function () {
              return !this.boxWrapper.getBBox().width;
            },
            destroy: function () {
              var t = this.defs;
              return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), u(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null;
            },
            createElement: function (t) {
              var e = new this.Element();
              return e.init(this, t), e;
            },
            draw: C,
            getRadialAttr: function (t, e) {
              return {
                cx: t[0] - t[2] / 2 + e.cx * t[2],
                cy: t[1] - t[2] / 2 + e.cy * t[2],
                r: e.r * t[2]
              };
            },
            truncate: function (t, e, i, n, o, s, r) {
              var a, h, l, c = this, d = t.rotation, u = n ? 1 : 0, f = (i || n).length, g = f, m = [], v = function (t) {
                  e.firstChild && e.removeChild(e.firstChild), t && e.appendChild(p.createTextNode(t));
                }, y = function (s, a) {
                  if (void 0 === m[a = a || s])
                    if (e.getSubStringLength)
                      try {
                        m[a] = o + e.getSubStringLength(0, n ? a + 1 : a);
                      } catch (t) {
                      }
                    else
                      c.getSpanWidth && (v(r(i || n, s)), m[a] = o + c.getSpanWidth(t, e));
                  return m[a];
                };
              if (t.rotation = 0, h = y(e.textContent.length), l = o + h > s) {
                for (; u <= f;)
                  g = Math.ceil((u + f) / 2), n && (a = r(n, g)), h = y(g, a && a.length - 1), u === f ? u = f + 1 : h > s ? f = g - 1 : u = g;
                0 === f ? v('') : i && f === i.length - 1 || v(a || r(i || n, g));
              }
              return n && n.splice(0, g), t.actualWidth = h, t.rotation = d, l;
            },
            escapes: {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '\'': '&#39;',
              '"': '&quot;'
            },
            buildText: function (t) {
              var e, i, n, o = t.element, r = this, a = r.forExport, l = P(t.textStr, '').toString(), c = -1 !== l.indexOf('<'), d = o.childNodes, u = s(o, 'x'), g = t.styles, m = t.textWidth, y = g && g.lineHeight, b = g && g.textOutline, w = g && 'ellipsis' === g.textOverflow, k = g && 'nowrap' === g.whiteSpace, S = g && g.fontSize, M = d.length, A = (g = m && !t.added && this.box, function (t) {
                  var e;
                  return e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : S || r.style.fontSize || 12, y ? O(y) : r.fontMetrics(e, t.getAttribute('style') ? t : o).h;
                }), T = function (t, e) {
                  return L(r.escapes, function (i, n) {
                    e && -1 !== x(i, e) || (t = t.toString().replace(new RegExp(i, 'g'), n));
                  }), t;
                }, C = function (t, e) {
                  var i;
                  if (i = t.indexOf('<'), -1 !== (i = (t = t.substring(i, t.indexOf('>') - i)).indexOf(e + '=')) && (i = i + e.length + 1, '"' === (e = t.charAt(i)) || '\'' === e))
                    return (t = t.substring(i + 1)).substring(0, t.indexOf(e));
                };
              if ((i = [
                  l,
                  w,
                  k,
                  y,
                  b,
                  S,
                  m
                ].join()) !== t.textCache) {
                for (t.textCache = i; M--;)
                  o.removeChild(d[M]);
                c || b || w || m || -1 !== l.indexOf(' ') ? (g && g.appendChild(o), l = c ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, '<span').replace(/<\/(b|strong|i|em|a)>/g, '</span>').split(/<br.*?>/g) : [l], l = v(l, function (t) {
                  return '' !== t;
                }), f(l, function (i, l) {
                  var c, d = 0, g = 0;
                  i = i.replace(/^\s+|\s+$/g, '').replace(/<span/g, '|||<span').replace(/<\/span>/g, '</span>|||'), c = i.split('|||'), f(c, function (i) {
                    if ('' !== i || 1 === c.length) {
                      var f, v, y = {}, x = p.createElementNS(r.SVG_NS, 'tspan');
                      if ((f = C(i, 'class')) && s(x, 'class', f), (f = C(i, 'style')) && (f = f.replace(/(;| |^)color([ :])/, '$1fill$2'), s(x, 'style', f)), (v = C(i, 'href')) && !a && (s(x, 'onclick', 'location.href="' + v + '"'), s(x, 'class', 'highcharts-anchor'), h(x, { cursor: 'pointer' })), ' ' !== (i = T(i.replace(/<[a-zA-Z\/](.|\n)*?>/g, '') || ' '))) {
                        if (x.appendChild(p.createTextNode(i)), d ? y.dx = 0 : l && null !== u && (y.x = u), s(x, y), o.appendChild(x), !d && n && (!I && a && h(x, { display: 'block' }), s(x, 'dy', A(x))), m) {
                          var b = i.replace(/([^\^])-/g, '$1- ').split(' ');
                          y = !k && (1 < c.length || l || 1 < b.length);
                          v = 0;
                          var M = A(x);
                          if (w)
                            e = r.truncate(t, x, i, void 0, 0, Math.max(0, m - parseInt(S || 12, 10)), function (t, e) {
                              return t.substring(0, e) + '\u2026';
                            });
                          else if (y)
                            for (; b.length;)
                              b.length && !k && 0 < v && (x = p.createElementNS(z, 'tspan'), s(x, {
                                dy: M,
                                x: u
                              }), f && s(x, 'style', f), x.appendChild(p.createTextNode(b.join(' ').replace(/- /g, '-'))), o.appendChild(x)), r.truncate(t, x, null, b, 0 === v ? g : 0, m, function (t, e) {
                                return b.slice(0, e).join(' ').replace(/- /g, '-');
                              }), g = t.actualWidth, v++;
                        }
                        d++;
                      }
                    }
                  }), n = n || o.childNodes.length;
                }), w && e && t.attr('title', T(t.textStr, [
                  '&lt;',
                  '&gt;'
                ])), g && g.removeChild(o), b && t.applyTextOutline && t.applyTextOutline(b)) : o.appendChild(p.createTextNode(T(l)));
              }
            },
            getContrast: function (t) {
              return (t = a(t).rgba)[0] *= 1, t[1] *= 1.2, t[2] *= 0.5, 459 < t[0] + t[1] + t[2] ? '#000000' : '#FFFFFF';
            },
            button: function (t, e, i, o, s, r, a, h, l) {
              var c, d, u, p, f = this.label(t, e, i, l, null, null, null, null, 'button'), m = 0;
              return f.attr(T({
                padding: 8,
                r: 2
              }, s)), s = T({
                fill: '#f7f7f7',
                stroke: '#cccccc',
                'stroke-width': 1,
                style: {
                  color: '#333333',
                  cursor: 'pointer',
                  fontWeight: 'normal'
                }
              }, s), c = s.style, delete s.style, r = T(s, { fill: '#e6e6e6' }, r), d = r.style, delete r.style, a = T(s, {
                fill: '#e6ebf5',
                style: {
                  color: '#000000',
                  fontWeight: 'bold'
                }
              }, a), u = a.style, delete a.style, h = T(s, { style: { color: '#cccccc' } }, h), p = h.style, delete h.style, n(f.element, k ? 'mouseover' : 'mouseenter', function () {
                3 !== m && f.setState(1);
              }), n(f.element, k ? 'mouseout' : 'mouseleave', function () {
                3 !== m && f.setState(m);
              }), f.setState = function (t) {
                1 !== t && (f.state = m = t), f.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass('highcharts-button-' + [
                  'normal',
                  'hover',
                  'pressed',
                  'disabled'
                ][t || 0]), f.attr([
                  s,
                  r,
                  a,
                  h
                ][t || 0]).css([
                  c,
                  d,
                  u,
                  p
                ][t || 0]);
              }, f.attr(s).css(g({ cursor: 'default' }, c)), f.on('click', function (t) {
                3 !== m && o.call(f, t);
              });
            },
            crispLine: function (t, e) {
              return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t;
            },
            path: function (t) {
              var e = { fill: 'none' };
              return b(t) ? e.d = t : S(t) && g(e, t), this.createElement('path').attr(e);
            },
            circle: function (t, e, i) {
              return t = S(t) ? t : {
                x: t,
                y: e,
                r: i
              }, (e = this.createElement('circle')).xSetter = e.ySetter = function (t, e, i) {
                i.setAttribute('c' + e, t);
              }, e.attr(t);
            },
            arc: function (t, e, i, n, o, s) {
              return S(t) ? (e = (n = t).y, i = n.r, t = n.x) : n = {
                innerR: n,
                start: o,
                end: s
              }, (t = this.symbol('arc', t, e, i, i, n)).r = i, t;
            },
            rect: function (t, e, i, n, o, r) {
              o = S(t) ? t.r : o;
              var a = this.createElement('rect');
              return t = S(t) ? t : void 0 === t ? {} : {
                x: t,
                y: e,
                width: Math.max(i, 0),
                height: Math.max(n, 0)
              }, void 0 !== r && (t.strokeWidth = r, t = a.crisp(t)), t.fill = 'none', o && (t.r = o), a.rSetter = function (t, e, i) {
                s(i, {
                  rx: t,
                  ry: t
                });
              }, a.attr(t);
            },
            setSize: function (t, e, i) {
              var n = this.alignedObjects, o = n.length;
              for (this.width = t, this.height = e, this.boxWrapper.animate({
                  width: t,
                  height: e
                }, {
                  step: function () {
                    this.attr({ viewBox: '0 0 ' + this.attr('width') + ' ' + this.attr('height') });
                  },
                  duration: P(i, !0) ? void 0 : 0
                }); o--;)
                n[o].align();
            },
            g: function (t) {
              var e = this.createElement('g');
              return t ? e.attr({ class: 'highcharts-' + t }) : e;
            },
            image: function (t, e, i, o, s, r) {
              var a, h = { preserveAspectRatio: 'none' }, l = function (t, e) {
                  t.setAttributeNS ? t.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e) : t.setAttribute('hc-svg-href', e);
                }, c = function (e) {
                  l(a.element, t), r.call(a, e);
                };
              return 1 < arguments.length && g(h, {
                x: e,
                y: i,
                width: o,
                height: s
              }), a = this.createElement('image').attr(h), r ? (l(a.element, 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='), h = new N.Image(), n(h, 'load', c), h.src = t, h.complete && c({})) : l(a.element, t), a;
            },
            symbol: function (t, e, i, n, o, s) {
              var a, d, u, m = this, v = /^url\((.*?)\)$/, y = v.test(t), x = !y && (this.symbols[t] ? t : 'circle'), b = x && this.symbols[x], w = c(e) && b && b.call(this.symbols, Math.round(e), Math.round(i), n, o, s);
              return b ? ((a = this.path(w)).attr('fill', 'none'), g(a, {
                symbolName: x,
                x: e,
                y: i,
                width: n,
                height: o
              }), s && g(a, s)) : y && (d = t.match(v)[1], (a = this.image(d)).imgwidth = P(B[d] && B[d].width, s && s.width), a.imgheight = P(B[d] && B[d].height, s && s.height), u = function () {
                a.attr({
                  width: a.width,
                  height: a.height
                });
              }, f([
                'width',
                'height'
              ], function (t) {
                a[t + 'Setter'] = function (t, e) {
                  var i = {}, n = this['img' + e], o = 'width' === e ? 'translateX' : 'translateY';
                  this[e] = t, c(n) && (this.element && this.element.setAttribute(e, n), this.alignByTranslate || (i[o] = ((this[e] || 0) - n) / 2, this.attr(i)));
                };
              }), c(e) && a.attr({
                x: e,
                y: i
              }), a.isImg = !0, c(a.imgwidth) && c(a.imgheight) ? u() : (a.attr({
                width: 0,
                height: 0
              }), l('img', {
                onload: function () {
                  var t = r[m.chartIndex];
                  0 === this.width && (h(this, {
                    position: 'absolute',
                    top: '-999em'
                  }), p.body.appendChild(this)), B[d] = {
                    width: this.width,
                    height: this.height
                  }, a.imgwidth = this.width, a.imgheight = this.height, a.element && u(), this.parentNode && this.parentNode.removeChild(this), m.imgCount--, !m.imgCount && t && t.onload && t.onload();
                },
                src: d
              }), this.imgCount++)), a;
            },
            symbols: {
              circle: function (t, e, i, n) {
                return this.arc(t + i / 2, e + n / 2, i / 2, n / 2, {
                  start: 0,
                  end: 2 * Math.PI,
                  open: !1
                });
              },
              square: function (t, e, i, n) {
                return [
                  'M',
                  t,
                  e,
                  'L',
                  t + i,
                  e,
                  t + i,
                  e + n,
                  t,
                  e + n,
                  'Z'
                ];
              },
              triangle: function (t, e, i, n) {
                return [
                  'M',
                  t + i / 2,
                  e,
                  'L',
                  t + i,
                  e + n,
                  t,
                  e + n,
                  'Z'
                ];
              },
              'triangle-down': function (t, e, i, n) {
                return [
                  'M',
                  t,
                  e,
                  'L',
                  t + i,
                  e,
                  t + i / 2,
                  e + n,
                  'Z'
                ];
              },
              diamond: function (t, e, i, n) {
                return [
                  'M',
                  t + i / 2,
                  e,
                  'L',
                  t + i,
                  e + n / 2,
                  t + i / 2,
                  e + n,
                  t,
                  e + n / 2,
                  'Z'
                ];
              },
              arc: function (t, e, i, n, o) {
                var s = o.start, r = o.r || i, a = o.r || n || i, h = o.end - 0.001;
                i = o.innerR, n = P(o.open, 0.001 > Math.abs(o.end - o.start - 2 * Math.PI));
                var l = Math.cos(s), d = Math.sin(s), u = Math.cos(h);
                h = Math.sin(h);
                return r = [
                  'M',
                  t + r * l,
                  e + a * d,
                  'A',
                  r,
                  a,
                  0,
                  o = 0.001 > o.end - s - Math.PI ? 0 : 1,
                  1,
                  t + r * u,
                  e + a * h
                ], c(i) && r.push(n ? 'M' : 'L', t + i * u, e + i * h, 'A', i, i, 0, o, 0, t + i * l, e + i * d), r.push(n ? '' : 'Z'), r;
              },
              callout: function (t, e, i, n, o) {
                var s, r = Math.min(o && o.r || 0, i, n), a = r + 6, h = o && o.anchorX;
                return o = o && o.anchorY, s = [
                  'M',
                  t + r,
                  e,
                  'L',
                  t + i - r,
                  e,
                  'C',
                  t + i,
                  e,
                  t + i,
                  e,
                  t + i,
                  e + r,
                  'L',
                  t + i,
                  e + n - r,
                  'C',
                  t + i,
                  e + n,
                  t + i,
                  e + n,
                  t + i - r,
                  e + n,
                  'L',
                  t + r,
                  e + n,
                  'C',
                  t,
                  e + n,
                  t,
                  e + n,
                  t,
                  e + n - r,
                  'L',
                  t,
                  e + r,
                  'C',
                  t,
                  e,
                  t,
                  e,
                  t + r,
                  e
                ], h && h > i ? o > e + a && o < e + n - a ? s.splice(13, 3, 'L', t + i, o - 6, t + i + 6, o, t + i, o + 6, t + i, e + n - r) : s.splice(13, 3, 'L', t + i, n / 2, h, o, t + i, n / 2, t + i, e + n - r) : h && 0 > h ? o > e + a && o < e + n - a ? s.splice(33, 3, 'L', t, o + 6, t - 6, o, t, o - 6, t, e + r) : s.splice(33, 3, 'L', t, n / 2, h, o, t, n / 2, t, e + r) : o && o > n && h > t + a && h < t + i - a ? s.splice(23, 3, 'L', h + 6, e + n, h, e + n + 6, h - 6, e + n, t + r, e + n) : o && 0 > o && h > t + a && h < t + i - a && s.splice(3, 3, 'L', h - 6, e, h, e - 6, h + 6, e, i - r, e), s;
              }
            },
            clipRect: function (e, i, n, o) {
              var s = t.uniqueKey(), r = this.createElement('clipPath').attr({ id: s }).add(this.defs);
              return (e = this.rect(e, i, n, o, 0).add(r)).id = s, e.clipPath = r, e.count = 0, e;
            },
            text: function (t, e, i, n) {
              var o = {};
              return !n || !this.allowHTML && this.forExport ? (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), c(t) && (o.text = t), t = this.createElement('text').attr(o), n || (t.xSetter = function (t, e, i) {
                var n, o, s = i.getElementsByTagName('tspan'), r = i.getAttribute(e);
                for (o = 0; o < s.length; o++)
                  (n = s[o]).getAttribute(e) === r && n.setAttribute(e, t);
                i.setAttribute(e, t);
              }), t) : this.html(t, e, i);
            },
            fontMetrics: function (t, e) {
              return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize, {
                h: e = 24 > (t = /px/.test(t) ? O(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12) ? t + 3 : Math.round(1.2 * t),
                b: Math.round(0.8 * e),
                f: t
              };
            },
            rotCorr: function (t, e, i) {
              var n = t;
              return e && i && (n = Math.max(n * Math.cos(e * d), 4)), {
                x: -t / 3 * Math.sin(e * d),
                y: n
              };
            },
            label: function (i, n, o, s, r, a, h, l, d) {
              var u, p, m, v, y, x, b, w, k, S, M, A, C, L = this, P = L.g('button' !== d && 'label'), O = P.text = L.text('', 0, 0, h).attr({ zIndex: 1 }), E = 0, I = 3, z = 0, B = {}, N = /^url\((.*?)\)$/.test(s), R = N;
              d && P.addClass('highcharts-' + d), R = N, S = function () {
                return (w || 0) % 2 / 2;
              }, M = function () {
                var t = O.element.style, e = {};
                p = (void 0 === m || void 0 === v || b) && c(O.textStr) && O.getBBox(), P.width = (m || p.width || 0) + 2 * I + z, P.height = (v || p.height || 0) + 2 * I, k = I + L.fontMetrics(t && t.fontSize, O).b, R && (u || (P.box = u = L.symbols[s] || N ? L.symbol(s) : L.rect(), u.addClass(('button' === d ? '' : 'highcharts-label-box') + (d ? ' highcharts-' + d + '-box' : '')), u.add(P), t = S(), e.x = t, e.y = (l ? -k : 0) + t), e.width = Math.round(P.width), e.height = Math.round(P.height), u.attr(g(e, B)), B = {});
              }, A = function () {
                var t, e = z + I;
                t = l ? 0 : k, c(m) && p && ('center' === b || 'right' === b) && (e += {
                  center: 0.5,
                  right: 1
                }[b] * (m - p.width)), e === O.x && t === O.y || (O.attr('x', e), O.hasBoxWidthChanged && (p = O.getBBox(!0), M()), void 0 !== t && O.attr('y', t)), O.x = e, O.y = t;
              }, C = function (t, e) {
                u ? u.attr(t, e) : B[t] = e;
              }, P.onAdd = function () {
                O.add(P), P.attr({
                  text: i || 0 === i ? i : '',
                  x: n,
                  y: o
                }), u && c(r) && P.attr({
                  anchorX: r,
                  anchorY: a
                });
              }, P.widthSetter = function (e) {
                m = t.isNumber(e) ? e : null;
              }, P.heightSetter = function (t) {
                v = t;
              }, P['text-alignSetter'] = function (t) {
                b = t;
              }, P.paddingSetter = function (t) {
                c(t) && t !== I && (I = P.padding = t, A());
              }, P.paddingLeftSetter = function (t) {
                c(t) && t !== z && (z = t, A());
              }, P.alignSetter = function (t) {
                (t = {
                  left: 0,
                  center: 0.5,
                  right: 1
                }[t]) !== E && (E = t, p && P.attr({ x: y }));
              }, P.textSetter = function (t) {
                void 0 !== t && O.textSetter(t), M(), A();
              }, P['stroke-widthSetter'] = function (t, e) {
                t && (R = !0), w = this['stroke-width'] = t, C(e, t);
              }, P.strokeSetter = P.fillSetter = P.rSetter = function (t, e) {
                'r' !== e && ('fill' === e && t && (R = !0), P[e] = t), C(e, t);
              }, P.anchorXSetter = function (t, e) {
                r = P.anchorX = t, C(e, Math.round(t) - S() - y);
              }, P.anchorYSetter = function (t, e) {
                a = P.anchorY = t, C(e, t - x);
              }, P.xSetter = function (t) {
                P.x = t, E && (t -= E * ((m || p.width) + 2 * I), P['forceAnimate:x'] = !0), y = Math.round(t), P.attr('translateX', y);
              }, P.ySetter = function (t) {
                x = P.y = Math.round(t), P.attr('translateY', x);
              };
              var W = P.css;
              return g(P, {
                css: function (t) {
                  if (t) {
                    var e = {};
                    t = T(t), f(P.textProps, function (i) {
                      void 0 !== t[i] && (e[i] = t[i], delete t[i]);
                    }), O.css(e), 'width' in e && M();
                  }
                  return W.call(P, t);
                },
                getBBox: function () {
                  return {
                    width: p.width + 2 * I,
                    height: p.height + 2 * I,
                    x: p.x - I,
                    y: p.y - I
                  };
                },
                shadow: function (t) {
                  return t && (M(), u && u.shadow(t)), P;
                },
                destroy: function () {
                  D(P.element, 'mouseenter'), D(P.element, 'mouseleave'), O && (O = O.destroy()), u && (u = u.destroy()), e.prototype.destroy.call(P), P = L = M = A = C = null;
                }
              });
            }
          }), t.Renderer = i;
        }(c), function (t) {
          var e = t.attr, i = t.createElement, n = t.css, o = t.defined, s = t.each, r = t.extend, a = t.isFirefox, h = t.isMS, l = t.isWebKit, c = t.pick, d = t.pInt, u = t.SVGRenderer, p = t.win, f = t.wrap;
          r(t.SVGElement.prototype, {
            htmlCss: function (t) {
              var e = 'SPAN' === this.element.tagName && t && 'width' in t, i = c(e && t.width, void 0);
              return e && (delete t.width, this.textWidth = i, this.htmlUpdateTransform()), t && 'ellipsis' === t.textOverflow && (t.whiteSpace = 'nowrap', t.overflow = 'hidden'), this.styles = r(this.styles, t), n(this.element, t), this;
            },
            htmlGetBBox: function () {
              var t = this.element;
              return {
                x: t.offsetLeft,
                y: t.offsetTop,
                width: t.offsetWidth,
                height: t.offsetHeight
              };
            },
            htmlUpdateTransform: function () {
              if (this.added) {
                var t = this.renderer, e = this.element, i = this.translateX || 0, r = this.translateY || 0, a = this.x || 0, h = this.y || 0, l = this.textAlign || 'left', c = {
                    left: 0,
                    center: 0.5,
                    right: 1
                  }[l], u = (f = this.styles) && f.whiteSpace;
                if (n(e, {
                    marginLeft: i,
                    marginTop: r
                  }), this.shadows && s(this.shadows, function (t) {
                    n(t, {
                      marginLeft: i + 1,
                      marginTop: r + 1
                    });
                  }), this.inverted && s(e.childNodes, function (i) {
                    t.invertChild(i, e);
                  }), 'SPAN' === e.tagName) {
                  var p, f = this.rotation, g = this.textWidth && d(this.textWidth), m = [
                      f,
                      l,
                      e.innerHTML,
                      this.textWidth,
                      this.textAlign
                    ].join();
                  (p = g !== this.oldTextWidth) && !(p = g > this.oldTextWidth) && ((p = this.textPxLength) || (n(e, {
                    width: '',
                    whiteSpace: u || 'nowrap'
                  }), p = e.offsetWidth), p = p > g), p && /[ \-]/.test(e.textContent || e.innerText) ? (n(e, {
                    width: g + 'px',
                    display: 'block',
                    whiteSpace: u || 'normal'
                  }), this.oldTextWidth = g, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1, m !== this.cTT && (u = t.fontMetrics(e.style.fontSize).b, !o(f) || f === (this.oldRotation || 0) && l === this.oldAlign || this.setSpanRotation(f, c, u), this.getSpanCorrection(!o(f) && this.textPxLength || e.offsetWidth, u, c, f, l)), n(e, {
                    left: a + (this.xCorr || 0) + 'px',
                    top: h + (this.yCorr || 0) + 'px'
                  }), this.cTT = m, this.oldRotation = f, this.oldAlign = l;
                }
              } else
                this.alignOnAdd = !0;
            },
            setSpanRotation: function (t, e, i) {
              var o = {}, s = this.renderer.getTransformKey();
              o[s] = o.transform = 'rotate(' + t + 'deg)', o[s + (a ? 'Origin' : '-origin')] = o.transformOrigin = 100 * e + '% ' + i + 'px', n(this.element, o);
            },
            getSpanCorrection: function (t, e, i) {
              this.xCorr = -t * i, this.yCorr = -e;
            }
          }), r(u.prototype, {
            getTransformKey: function () {
              return h && !/Edge/.test(p.navigator.userAgent) ? '-ms-transform' : l ? '-webkit-transform' : a ? 'MozTransform' : p.opera ? '-o-transform' : '';
            },
            html: function (t, n, o) {
              var a = this.createElement('span'), h = a.element, l = a.renderer, d = l.isSVG, u = function (t, e) {
                  s([
                    'opacity',
                    'visibility'
                  ], function (i) {
                    f(t, i + 'Setter', function (t, i, n, o) {
                      t.call(this, i, n, o), e[n] = i;
                    });
                  }), t.addedSetters = !0;
                };
              return a.textSetter = function (t) {
                t !== h.innerHTML && delete this.bBox, this.textStr = t, h.innerHTML = c(t, ''), a.doTransform = !0;
              }, d && u(a, a.element.style), a.xSetter = a.ySetter = a.alignSetter = a.rotationSetter = function (t, e) {
                'align' === e && (e = 'textAlign'), a[e] = t, a.doTransform = !0;
              }, a.afterSetters = function () {
                this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
              }, a.attr({
                text: t,
                x: Math.round(n),
                y: Math.round(o)
              }).css({
                fontFamily: this.style.fontFamily,
                fontSize: this.style.fontSize,
                position: 'absolute'
              }), h.style.whiteSpace = 'nowrap', a.css = a.htmlCss, d && (a.add = function (t) {
                var n, o = l.box.parentNode, c = [];
                if (this.parentGroup = t) {
                  if (!(n = t.div)) {
                    for (; t;)
                      c.push(t), t = t.parentGroup;
                    s(c.reverse(), function (t) {
                      function s(e, i) {
                        t[i] = e, 'translateX' === i ? h.left = e + 'px' : h.top = e + 'px', t.doTransform = !0;
                      }
                      var h, l = e(t.element, 'class');
                      l && (l = { className: l }), n = t.div = t.div || i('div', l, {
                        position: 'absolute',
                        left: (t.translateX || 0) + 'px',
                        top: (t.translateY || 0) + 'px',
                        display: t.display,
                        opacity: t.opacity,
                        pointerEvents: t.styles && t.styles.pointerEvents
                      }, n || o), h = n.style, r(t, {
                        classSetter: function (t) {
                          return function (e) {
                            this.element.setAttribute('class', e), t.className = e;
                          };
                        }(n),
                        on: function () {
                          return c[0].div && a.on.apply({ element: c[0].div }, arguments), t;
                        },
                        translateXSetter: s,
                        translateYSetter: s
                      }), t.addedSetters || u(t, h);
                    });
                  }
                } else
                  n = o;
                return n.appendChild(h), a.added = !0, a.alignOnAdd && a.htmlUpdateTransform(), a;
              }), a;
            }
          });
        }(c), function (t) {
          var e = t.defined, i = t.each, n = t.extend, o = t.merge, s = t.pick, r = t.timeUnits, a = t.win;
          t.Time = function (t) {
            this.update(t, !1);
          }, t.Time.prototype = {
            defaultOptions: {},
            update: function (t) {
              var e = s(t && t.useUTC, !0), i = this;
              this.options = t = o(!0, this.options || {}, t), this.Date = t.Date || a.Date, this.timezoneOffset = (this.useUTC = e) && t.timezoneOffset, this.getTimezoneOffset = this.timezoneOffsetFunction(), (this.variableTimezone = !(e && !t.getTimezoneOffset && !t.timezone)) || this.timezoneOffset ? (this.get = function (t, e) {
                var n = e.getTime(), o = n - i.getTimezoneOffset(e);
                return e.setTime(o), t = e['getUTC' + t](), e.setTime(n), t;
              }, this.set = function (t, e, n) {
                var o;
                'Milliseconds' === t || 'Seconds' === t || 'Minutes' === t && 0 == e.getTimezoneOffset() % 60 ? e['set' + t](n) : (o = i.getTimezoneOffset(e), o = e.getTime() - o, e.setTime(o), e['setUTC' + t](n), t = i.getTimezoneOffset(e), o = e.getTime() + t, e.setTime(o));
              }) : e ? (this.get = function (t, e) {
                return e['getUTC' + t]();
              }, this.set = function (t, e, i) {
                return e['setUTC' + t](i);
              }) : (this.get = function (t, e) {
                return e['get' + t]();
              }, this.set = function (t, e, i) {
                return e['set' + t](i);
              });
            },
            makeTime: function (e, i, n, o, r, a) {
              var h, l, c;
              return this.useUTC ? (h = this.Date.UTC.apply(0, arguments), h += l = this.getTimezoneOffset(h), l !== (c = this.getTimezoneOffset(h)) ? h += c - l : l - 3600000 !== this.getTimezoneOffset(h - 3600000) || t.isSafari || (h -= 3600000)) : h = new this.Date(e, i, s(n, 1), s(o, 0), s(r, 0), s(a, 0)).getTime(), h;
            },
            timezoneOffsetFunction: function () {
              var e = this, i = this.options, n = a.moment;
              if (!this.useUTC)
                return function (t) {
                  return 60000 * new Date(t).getTimezoneOffset();
                };
              if (i.timezone) {
                if (n)
                  return function (t) {
                    return 60000 * -n.tz(t, i.timezone).utcOffset();
                  };
                t.error(25);
              }
              return this.useUTC && i.getTimezoneOffset ? function (t) {
                return 60000 * i.getTimezoneOffset(t);
              } : function () {
                return 60000 * (e.timezoneOffset || 0);
              };
            },
            dateFormat: function (e, i, n) {
              if (!t.defined(i) || isNaN(i))
                return t.defaultOptions.lang.invalidDate || '';
              e = t.pick(e, '%Y-%m-%d %H:%M:%S');
              var o = this, s = new this.Date(i), r = this.get('Hours', s), a = this.get('Day', s), h = this.get('Date', s), l = this.get('Month', s), c = this.get('FullYear', s), d = t.defaultOptions.lang, u = d.weekdays, p = d.shortWeekdays, f = t.pad;
              s = t.extend({
                a: p ? p[a] : u[a].substr(0, 3),
                A: u[a],
                d: f(h),
                e: f(h, 2, ' '),
                w: a,
                b: d.shortMonths[l],
                B: d.months[l],
                m: f(l + 1),
                o: l + 1,
                y: c.toString().substr(2, 2),
                Y: c,
                H: f(r),
                k: r,
                I: f(r % 12 || 12),
                l: r % 12 || 12,
                M: f(o.get('Minutes', s)),
                p: 12 > r ? 'AM' : 'PM',
                P: 12 > r ? 'am' : 'pm',
                S: f(s.getSeconds()),
                L: f(Math.floor(i % 1000), 3)
              }, t.dateFormats);
              return t.objectEach(s, function (t, n) {
                for (; -1 !== e.indexOf('%' + n);)
                  e = e.replace('%' + n, 'function' == typeof t ? t.call(o, i) : t);
              }), n ? e.substr(0, 1).toUpperCase() + e.substr(1) : e;
            },
            resolveDTLFormat: function (e) {
              return t.isObject(e, !0) ? e : {
                main: (e = t.splat(e))[0],
                from: e[1],
                to: e[2]
              };
            },
            getTimeTicks: function (t, o, a, h) {
              var l, c, d = this, u = [], p = {};
              l = new d.Date(o);
              var f, g = t.unitRange, m = t.count || 1;
              if (h = s(h, 1), e(o)) {
                d.set('Milliseconds', l, g >= r.second ? 0 : m * Math.floor(d.get('Milliseconds', l) / m)), g >= r.second && d.set('Seconds', l, g >= r.minute ? 0 : m * Math.floor(d.get('Seconds', l) / m)), g >= r.minute && d.set('Minutes', l, g >= r.hour ? 0 : m * Math.floor(d.get('Minutes', l) / m)), g >= r.hour && d.set('Hours', l, g >= r.day ? 0 : m * Math.floor(d.get('Hours', l) / m)), g >= r.day && d.set('Date', l, g >= r.month ? 1 : m * Math.floor(d.get('Date', l) / m)), g >= r.month && (d.set('Month', l, g >= r.year ? 0 : m * Math.floor(d.get('Month', l) / m)), c = d.get('FullYear', l)), g >= r.year && d.set('FullYear', l, c - c % m), g === r.week && (c = d.get('Day', l), d.set('Date', l, d.get('Date', l) - c + h + (c < h ? -7 : 0))), c = d.get('FullYear', l), h = d.get('Month', l);
                var v = d.get('Date', l), y = d.get('Hours', l);
                for (o = l.getTime(), d.variableTimezone && (f = a - o > 4 * r.month || d.getTimezoneOffset(o) !== d.getTimezoneOffset(a)), o = l.getTime(), l = 1; o < a;)
                  u.push(o), o = g === r.year ? d.makeTime(c + l * m, 0) : g === r.month ? d.makeTime(c, h + l * m) : !f || g !== r.day && g !== r.week ? f && g === r.hour && 1 < m ? d.makeTime(c, h, v, y + l * m) : o + g * m : d.makeTime(c, h, v + l * m * (g === r.day ? 1 : 7)), l++;
                u.push(o), g <= r.hour && 10000 > u.length && i(u, function (t) {
                  0 == t % 1800000 && '000000000' === d.dateFormat('%H%M%S%L', t) && (p[t] = 'day');
                });
              }
              return u.info = n(t, {
                higherRanks: p,
                totalRange: g * m
              }), u;
            }
          };
        }(c), function (t) {
          var e = t.color, i = t.merge;
          t.defaultOptions = {
            colors: '#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1'.split(' '),
            symbols: [
              'circle',
              'diamond',
              'square',
              'triangle',
              'triangle-down'
            ],
            lang: {
              loading: 'Loading...',
              months: 'January February March April May June July August September October November December'.split(' '),
              shortMonths: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
              weekdays: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
              decimalPoint: '.',
              numericSymbols: 'kMGTPE'.split(''),
              resetZoom: 'Reset zoom',
              resetZoomTitle: 'Reset zoom level 1:1',
              thousandsSep: ' '
            },
            global: {},
            time: t.Time.prototype.defaultOptions,
            chart: {
              borderRadius: 0,
              defaultSeriesType: 'line',
              ignoreHiddenSeries: !0,
              spacing: [
                10,
                10,
                15,
                10
              ],
              resetZoomButton: {
                theme: { zIndex: 6 },
                position: {
                  align: 'right',
                  x: -10,
                  y: 10
                }
              },
              width: null,
              height: null,
              borderColor: '#335cad',
              backgroundColor: '#ffffff',
              plotBorderColor: '#cccccc'
            },
            title: {
              text: 'Chart title',
              align: 'center',
              margin: 15,
              widthAdjust: -44
            },
            subtitle: {
              text: '',
              align: 'center',
              widthAdjust: -44
            },
            plotOptions: {},
            labels: {
              style: {
                position: 'absolute',
                color: '#333333'
              }
            },
            legend: {
              enabled: !0,
              align: 'center',
              alignColumns: !0,
              layout: 'horizontal',
              labelFormatter: function () {
                return this.name;
              },
              borderColor: '#999999',
              borderRadius: 0,
              navigation: {
                activeColor: '#003399',
                inactiveColor: '#cccccc'
              },
              itemStyle: {
                color: '#333333',
                fontSize: '12px',
                fontWeight: 'bold',
                textOverflow: 'ellipsis'
              },
              itemHoverStyle: { color: '#000000' },
              itemHiddenStyle: { color: '#cccccc' },
              shadow: !1,
              itemCheckboxStyle: {
                position: 'absolute',
                width: '13px',
                height: '13px'
              },
              squareSymbol: !0,
              symbolPadding: 5,
              verticalAlign: 'bottom',
              x: 0,
              y: 0,
              title: { style: { fontWeight: 'bold' } }
            },
            loading: {
              labelStyle: {
                fontWeight: 'bold',
                position: 'relative',
                top: '45%'
              },
              style: {
                position: 'absolute',
                backgroundColor: '#ffffff',
                opacity: 0.5,
                textAlign: 'center'
              }
            },
            tooltip: {
              enabled: !0,
              animation: t.svg,
              borderRadius: 3,
              dateTimeLabelFormats: {
                millisecond: '%A, %b %e, %H:%M:%S.%L',
                second: '%A, %b %e, %H:%M:%S',
                minute: '%A, %b %e, %H:%M',
                hour: '%A, %b %e, %H:%M',
                day: '%A, %b %e, %Y',
                week: 'Week from %A, %b %e, %Y',
                month: '%B %Y',
                year: '%Y'
              },
              footerFormat: '',
              padding: 8,
              snap: t.isTouchDevice ? 25 : 10,
              backgroundColor: e('#f7f7f7').setOpacity(0.85).get(),
              borderWidth: 1,
              headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
              pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>',
              shadow: !0,
              style: {
                color: '#333333',
                cursor: 'default',
                fontSize: '12px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap'
              }
            },
            credits: {
              enabled: !0,
              href: 'https://www.highcharts.com',
              position: {
                align: 'right',
                x: -10,
                verticalAlign: 'bottom',
                y: -5
              },
              style: {
                cursor: 'pointer',
                color: '#999999',
                fontSize: '9px'
              },
              text: 'Highcharts.com'
            }
          }, t.setOptions = function (e) {
            return t.defaultOptions = i(!0, t.defaultOptions, e), t.time.update(i(t.defaultOptions.global, t.defaultOptions.time), !1), t.defaultOptions;
          }, t.getOptions = function () {
            return t.defaultOptions;
          }, t.defaultPlotOptions = t.defaultOptions.plotOptions, t.time = new t.Time(i(t.defaultOptions.global, t.defaultOptions.time)), t.dateFormat = function (e, i, n) {
            return t.time.dateFormat(e, i, n);
          };
        }(c), function (t) {
          var e = t.correctFloat, i = t.defined, n = t.destroyObjectProperties, o = t.fireEvent, s = t.isNumber, r = t.merge, a = t.pick, h = t.deg2rad;
          t.Tick = function (t, e, i, n, o) {
            this.axis = t, this.pos = e, this.type = i || '', this.isNewLabel = this.isNew = !0, this.parameters = o || {}, this.tickmarkOffset = this.parameters.tickmarkOffset, this.options = this.parameters.options, i || n || this.addLabel();
          }, t.Tick.prototype = {
            addLabel: function () {
              var n, o, s, h, l = this, c = l.axis, d = c.options, u = c.chart, p = c.categories, f = c.names, g = l.pos, m = a(l.options && l.options.labels, d.labels), v = g === (b = c.tickPositions)[0], y = g === b[b.length - 1], x = (p = this.parameters.category || (p ? a(p[g], f[g], g) : g), l.label), b = b.info;
              c.isDatetimeAxis && b && (n = (o = u.time.resolveDTLFormat(d.dateTimeLabelFormats[!d.grid && b.higherRanks[g] || b.unitName])).main), l.isFirst = v, l.isLast = y, l.formatCtx = {
                axis: c,
                chart: u,
                isFirst: v,
                isLast: y,
                dateTimeLabelFormat: n,
                tickPositionInfo: b,
                value: c.isLog ? e(c.lin2log(p)) : p,
                pos: g
              }, d = c.labelFormatter.call(l.formatCtx, this.formatCtx), (h = o && o.list) && (l.shortenLabel = function () {
                for (s = 0; s < h.length; s++)
                  if (x.attr({ text: c.labelFormatter.call(t.extend(l.formatCtx, { dateTimeLabelFormat: h[s] })) }), x.getBBox().width < c.getSlotWidth(l) - 2 * a(m.padding, 5))
                    return;
                x.attr({ text: '' });
              }), i(x) ? x && x.textStr !== d && (!x.textWidth || m.style && m.style.width || x.styles.width || x.css({ width: null }), x.attr({ text: d })) : ((l.label = x = i(d) && m.enabled ? u.renderer.text(d, 0, 0, m.useHTML).css(r(m.style)).add(c.labelGroup) : null) && (x.textPxLength = x.getBBox().width), l.rotation = 0);
            },
            getLabelSize: function () {
              return this.label ? this.label.getBBox()[this.axis.horiz ? 'height' : 'width'] : 0;
            },
            handleOverflow: function (t) {
              var e, i = this.axis, n = i.options.labels, o = t.x, s = i.chart.chartWidth, r = i.chart.spacing, l = a(i.labelLeft, Math.min(i.pos, r[3])), c = (r = a(i.labelRight, Math.max(i.isRadial ? 0 : i.pos + i.len, s - r[1])), this.label), d = this.rotation, u = {
                  left: 0,
                  center: 0.5,
                  right: 1
                }[i.labelAlign || c.attr('align')], p = c.getBBox().width, f = i.getSlotWidth(this), g = f, m = 1, v = {};
              d || 'justify' !== a(n.overflow, 'justify') ? 0 > d && o - u * p < l ? e = Math.round(o / Math.cos(d * h) - l) : 0 < d && o + u * p > r && (e = Math.round((s - o) / Math.cos(d * h))) : (s = o + (1 - u) * p, o - u * p < l ? g = t.x + g * (1 - u) - l : s > r && (g = r - t.x + g * u, m = -1), (g = Math.min(f, g)) < f && 'center' === i.labelAlign && (t.x += m * (f - g - u * (f - Math.min(p, g)))), (p > g || i.autoRotation && (c.styles || {}).width) && (e = g)), e && (this.shortenLabel ? this.shortenLabel() : (v.width = e, (n.style || {}).textOverflow || (v.textOverflow = 'ellipsis'), c.css(v)));
            },
            getPosition: function (e, i, n, s) {
              var r = this.axis, a = r.chart, h = s && a.oldChartHeight || a.chartHeight;
              return e = {
                x: e ? t.correctFloat(r.translate(i + n, null, null, s) + r.transB) : r.left + r.offset + (r.opposite ? (s && a.oldChartWidth || a.chartWidth) - r.right - r.left : 0),
                y: e ? h - r.bottom + r.offset - (r.opposite ? r.height : 0) : t.correctFloat(h - r.translate(i + n, null, null, s) - r.transB)
              }, o(this, 'afterGetPosition', { pos: e }), e;
            },
            getLabelPosition: function (t, e, n, s, r, a, l, c) {
              var d = this.axis, u = d.transA, p = d.reversed, f = d.staggerLines, g = d.tickRotCorr || {
                  x: 0,
                  y: 0
                }, m = r.y, v = s || d.reserveSpaceDefault ? 0 : -d.labelOffset * ('center' === d.labelAlign ? 0.5 : 1), y = {};
              return i(m) || (m = 0 === d.side ? n.rotation ? -8 : -n.getBBox().height : 2 === d.side ? g.y + 8 : Math.cos(n.rotation * h) * (g.y - n.getBBox(!1, 0).height / 2)), t = t + r.x + v + g.x - (a && s ? a * u * (p ? -1 : 1) : 0), e = e + m - (a && !s ? a * u * (p ? 1 : -1) : 0), f && (n = l / (c || 1) % f, d.opposite && (n = f - n - 1), e += d.labelOffset / f * n), y.x = t, y.y = Math.round(e), o(this, 'afterGetLabelPosition', { pos: y }), y;
            },
            getMarkPath: function (t, e, i, n, o, s) {
              return s.crispLine([
                'M',
                t,
                e,
                'L',
                t + (o ? 0 : -i),
                e + (o ? i : 0)
              ], n);
            },
            renderGridLine: function (t, e, i) {
              var n = this.axis, o = n.options, s = this.gridLine, r = {}, h = this.pos, l = this.type, c = a(this.tickmarkOffset, n.tickmarkOffset), d = n.chart.renderer, u = l ? l + 'Grid' : 'grid', p = o[u + 'LineWidth'], f = o[u + 'LineColor'];
              o = o[u + 'LineDashStyle'];
              s || (r.stroke = f, r['stroke-width'] = p, o && (r.dashstyle = o), l || (r.zIndex = 1), t && (e = 0), this.gridLine = s = d.path().attr(r).addClass('highcharts-' + (l ? l + '-' : '') + 'grid-line').add(n.gridGroup)), s && (i = n.getPlotLinePath(h + c, s.strokeWidth() * i, t, 'pass')) && s[t || this.isNew ? 'attr' : 'animate']({
                d: i,
                opacity: e
              });
            },
            renderMark: function (t, e, i) {
              var n = this.axis, o = n.options, s = n.chart.renderer, r = this.type, h = r ? r + 'Tick' : 'tick', l = n.tickSize(h), c = this.mark, d = !c, u = t.x;
              t = t.y;
              var p = a(o[h + 'Width'], !r && n.isXAxis ? 1 : 0);
              o = o[h + 'Color'];
              l && (n.opposite && (l[0] = -l[0]), d && (this.mark = c = s.path().addClass('highcharts-' + (r ? r + '-' : '') + 'tick').add(n.axisGroup), c.attr({
                stroke: o,
                'stroke-width': p
              })), c[d ? 'attr' : 'animate']({
                d: this.getMarkPath(u, t, l[0], c.strokeWidth() * i, n.horiz, s),
                opacity: e
              }));
            },
            renderLabel: function (t, e, i, n) {
              var o = (d = this.axis).horiz, r = d.options, h = this.label, l = r.labels, c = l.step, d = a(this.tickmarkOffset, d.tickmarkOffset), u = !0, p = t.x;
              t = t.y, h && s(p) && (h.xy = t = this.getLabelPosition(p, t, h, o, l, d, n, c), this.isFirst && !this.isLast && !a(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !a(r.showLastLabel, 1) ? u = !1 : !o || l.step || l.rotation || e || 0 === i || this.handleOverflow(t), c && n % c && (u = !1), u && s(t.y) ? (t.opacity = i, h[this.isNewLabel ? 'attr' : 'animate'](t), this.isNewLabel = !1) : (h.attr('y', -9999), this.isNewLabel = !0));
            },
            render: function (e, i, n) {
              var o = (l = this.axis).horiz, s = this.pos, r = a(this.tickmarkOffset, l.tickmarkOffset), h = (r = (s = this.getPosition(o, s, r, i)).x, s.y), l = o && r === l.pos + l.len || !o && h === l.pos ? -1 : 1;
              n = a(n, 1), this.isActive = !0, this.renderGridLine(i, n, l), this.renderMark(s, n, l), this.renderLabel(s, i, n, e), this.isNew = !1, t.fireEvent(this, 'afterRender');
            },
            destroy: function () {
              n(this, this.axis);
            }
          };
        }(c);
        var d = function (t) {
          var e = t.addEvent, i = t.animObject, n = t.arrayMax, o = t.arrayMin, s = t.color, r = t.correctFloat, a = t.defaultOptions, h = t.defined, l = t.deg2rad, c = t.destroyObjectProperties, d = t.each, u = t.extend, p = t.fireEvent, f = t.format, g = t.getMagnitude, m = t.grep, v = t.inArray, y = t.isArray, x = t.isNumber, b = t.isString, w = t.merge, k = t.normalizeTickInterval, S = t.objectEach, M = t.pick, A = t.removeEvent, T = t.splat, C = t.syncTimeout, L = t.Tick, P = function () {
              this.init.apply(this, arguments);
            };
          return t.extend(P.prototype, {
            defaultOptions: {
              dateTimeLabelFormats: {
                millisecond: {
                  main: '%H:%M:%S.%L',
                  range: !1
                },
                second: {
                  main: '%H:%M:%S',
                  range: !1
                },
                minute: {
                  main: '%H:%M',
                  range: !1
                },
                hour: {
                  main: '%H:%M',
                  range: !1
                },
                day: { main: '%e. %b' },
                week: { main: '%e. %b' },
                month: { main: '%b \'%y' },
                year: { main: '%Y' }
              },
              endOnTick: !1,
              labels: {
                enabled: !0,
                indentation: 10,
                x: 0,
                style: {
                  color: '#666666',
                  cursor: 'default',
                  fontSize: '11px'
                }
              },
              maxPadding: 0.01,
              minorTickLength: 2,
              minorTickPosition: 'outside',
              minPadding: 0.01,
              startOfWeek: 1,
              startOnTick: !1,
              tickLength: 10,
              tickPixelInterval: 100,
              tickmarkPlacement: 'between',
              tickPosition: 'outside',
              title: {
                align: 'middle',
                style: { color: '#666666' }
              },
              type: 'linear',
              minorGridLineColor: '#f2f2f2',
              minorGridLineWidth: 1,
              minorTickColor: '#999999',
              lineColor: '#ccd6eb',
              lineWidth: 1,
              gridLineColor: '#e6e6e6',
              tickColor: '#ccd6eb'
            },
            defaultYAxisOptions: {
              endOnTick: !0,
              maxPadding: 0.05,
              minPadding: 0.05,
              tickPixelInterval: 72,
              showLastLabel: !0,
              labels: { x: -8 },
              startOnTick: !0,
              title: {
                rotation: 270,
                text: 'Values'
              },
              stackLabels: {
                allowOverlap: !1,
                enabled: !1,
                formatter: function () {
                  return t.numberFormat(this.total, -1);
                },
                style: {
                  color: '#000000',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textOutline: '1px contrast'
                }
              },
              gridLineWidth: 1,
              lineWidth: 0
            },
            defaultLeftAxisOptions: {
              labels: { x: -15 },
              title: { rotation: 270 }
            },
            defaultRightAxisOptions: {
              labels: { x: 15 },
              title: { rotation: 90 }
            },
            defaultBottomAxisOptions: {
              labels: {
                autoRotation: [-45],
                x: 0
              },
              title: { rotation: 0 }
            },
            defaultTopAxisOptions: {
              labels: {
                autoRotation: [-45],
                x: 0
              },
              title: { rotation: 0 }
            },
            init: function (t, i) {
              var n = i.isX, o = this;
              o.chart = t, o.horiz = t.inverted && !o.isZAxis ? !n : n, o.isXAxis = n, o.coll = o.coll || (n ? 'xAxis' : 'yAxis'), p(this, 'init', { userOptions: i }), o.opposite = i.opposite, o.side = i.side || (o.horiz ? o.opposite ? 0 : 2 : o.opposite ? 1 : 3), o.setOptions(i);
              var s = this.options, r = s.type;
              o.labelFormatter = s.labels.formatter || o.defaultLabelFormatter, o.userOptions = i, o.minPixelPadding = 0, o.reversed = s.reversed, o.visible = !1 !== s.visible, o.zoomEnabled = !1 !== s.zoomEnabled, o.hasNames = 'category' === r || !0 === s.categories, o.categories = s.categories || o.hasNames, o.names || (o.names = [], o.names.keys = {}), o.plotLinesAndBandsGroups = {}, o.isLog = 'logarithmic' === r, o.isDatetimeAxis = 'datetime' === r, o.positiveValuesOnly = o.isLog && !o.allowNegativeLog, o.isLinked = h(s.linkedTo), o.ticks = {}, o.labelEdge = [], o.minorTicks = {}, o.plotLinesAndBands = [], o.alternateBands = {}, o.len = 0, o.minRange = o.userMinRange = s.minRange || s.maxZoom, o.range = s.range, o.offset = s.offset || 0, o.stacks = {}, o.oldStacks = {}, o.stacksTouched = 0, o.max = null, o.min = null, o.crosshair = M(s.crosshair, T(t.options.tooltip.crosshairs)[n ? 0 : 1], !1), i = o.options.events, -1 === v(o, t.axes) && (n ? t.axes.splice(t.xAxis.length, 0, o) : t.axes.push(o), t[o.coll].push(o)), o.series = o.series || [], t.inverted && !o.isZAxis && n && void 0 === o.reversed && (o.reversed = !0), S(i, function (t, i) {
                e(o, i, t);
              }), o.lin2log = s.linearToLogConverter || o.lin2log, o.isLog && (o.val2lin = o.log2lin, o.lin2val = o.lin2log), p(this, 'afterInit');
            },
            setOptions: function (t) {
              this.options = w(this.defaultOptions, 'yAxis' === this.coll && this.defaultYAxisOptions, [
                this.defaultTopAxisOptions,
                this.defaultRightAxisOptions,
                this.defaultBottomAxisOptions,
                this.defaultLeftAxisOptions
              ][this.side], w(a[this.coll], t)), p(this, 'afterSetOptions', { userOptions: t });
            },
            defaultLabelFormatter: function () {
              var e, i = this.axis, n = this.value, o = i.chart.time, s = i.categories, r = this.dateTimeLabelFormat, h = (l = a.lang).numericSymbols, l = l.numericSymbolMagnitude || 1000, c = h && h.length, d = i.options.labels.format;
              i = i.isLog ? Math.abs(n) : i.tickInterval;
              if (d)
                e = f(d, this, o);
              else if (s)
                e = n;
              else if (r)
                e = o.dateFormat(r, n);
              else if (c && 1000 <= i)
                for (; c-- && void 0 === e;)
                  i >= (o = Math.pow(l, c + 1)) && 0 == 10 * n % o && null !== h[c] && 0 !== n && (e = t.numberFormat(n / o, -1) + h[c]);
              return void 0 === e && (e = 10000 <= Math.abs(n) ? t.numberFormat(n, -1) : t.numberFormat(n, -1, void 0, '')), e;
            },
            getSeriesExtremes: function () {
              var t = this, e = t.chart;
              p(this, 'getSeriesExtremes', null, function () {
                t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), d(t.series, function (i) {
                  if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var s, r = i.options, a = r.threshold;
                    t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= a && (a = null), t.isXAxis ? (r = i.xData).length && (i = o(r), s = n(r), x(i) || i instanceof Date || (r = m(r, x), i = o(r), s = n(r)), r.length && (t.dataMin = Math.min(M(t.dataMin, r[0], i), i), t.dataMax = Math.max(M(t.dataMax, r[0], s), s))) : (i.getExtremes(), s = i.dataMax, i = i.dataMin, h(i) && h(s) && (t.dataMin = Math.min(M(t.dataMin, i), i), t.dataMax = Math.max(M(t.dataMax, s), s)), h(a) && (t.threshold = a), (!r.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1));
                  }
                });
              }), p(this, 'afterGetSeriesExtremes');
            },
            translate: function (t, e, i, n, o, s) {
              var r = this.linkedParent || this, a = 1, h = 0, l = n ? r.oldTransA : r.transA;
              n = n ? r.oldMin : r.min;
              var c = r.minPixelPadding;
              return o = (r.isOrdinal || r.isBroken || r.isLog && o) && r.lin2val, l || (l = r.transA), i && (a *= -1, h = r.len), r.reversed && (h -= (a *= -1) * (r.sector || r.len)), e ? (t = (t * a + h - c) / l + n, o && (t = r.lin2val(t))) : (o && (t = r.val2lin(t)), t = x(n) ? a * (t - n) * l + h + a * c + (x(s) ? l * s : 0) : void 0), t;
            },
            toPixels: function (t, e) {
              return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos);
            },
            toValue: function (t, e) {
              return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0);
            },
            getPlotLinePath: function (t, e, i, n, o) {
              var s, r, a, h = this.chart, l = this.left, c = this.top, d = i && h.oldChartHeight || h.chartHeight, u = i && h.oldChartWidth || h.chartWidth;
              s = this.transB;
              var p = function (t, e, i) {
                return ('pass' !== n && t < e || t > i) && (n ? t = Math.min(Math.max(e, t), i) : a = !0), t;
              };
              return o = M(o, this.translate(t, null, null, i)), o = Math.min(Math.max(-100000, o), 100000), t = i = Math.round(o + s), s = r = Math.round(d - o - s), x(o) ? this.horiz ? (s = c, r = d - this.bottom, t = i = p(t, l, l + this.width)) : (t = l, i = u - this.right, s = r = p(s, c, c + this.height)) : (a = !0, n = !1), a && !n ? null : h.renderer.crispLine([
                'M',
                t,
                s,
                'L',
                i,
                r
              ], e || 1);
            },
            getLinearTickPositions: function (t, e, i) {
              var n, o = r(Math.floor(e / t) * t);
              i = r(Math.ceil(i / t) * t);
              var s, a = [];
              if (r(o + t) === o && (s = 20), this.single)
                return [e];
              for (e = o; e <= i && (a.push(e), (e = r(e + t, s)) !== n);)
                n = e;
              return a;
            },
            getMinorTickInterval: function () {
              var t = this.options;
              return !0 === t.minorTicks ? M(t.minorTickInterval, 'auto') : !1 === t.minorTicks ? null : t.minorTickInterval;
            },
            getMinorTickPositions: function () {
              var t = this, e = t.options, i = t.tickPositions, n = t.minorTickInterval, o = [], s = t.pointRangePadding || 0, r = t.min - s, a = (s = t.max + s) - r;
              if (a && a / n < t.len / 3)
                if (t.isLog)
                  d(this.paddedTicks, function (e, i, s) {
                    i && o.push.apply(o, t.getLogTickPositions(n, s[i - 1], s[i], !0));
                  });
                else if (t.isDatetimeAxis && 'auto' === this.getMinorTickInterval())
                  o = o.concat(t.getTimeTicks(t.normalizeTimeTickInterval(n), r, s, e.startOfWeek));
                else
                  for (e = r + (i[0] - r) % n; e <= s && e !== o[0]; e += n)
                    o.push(e);
              return 0 !== o.length && t.trimTicks(o), o;
            },
            adjustForMinRange: function () {
              var t, e, i, s, r, a, l, c = this.options, u = this.min, p = this.max;
              this.isXAxis && void 0 === this.minRange && !this.isLog && (h(c.min) || h(c.max) ? this.minRange = null : (d(this.series, function (t) {
                for (a = t.xData, s = t.xIncrement ? 1 : a.length - 1; 0 < s; s--)
                  r = a[s] - a[s - 1], (void 0 === i || r < i) && (i = r);
              }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), p - u < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, t = [
                u - (t = ((l = this.minRange) - p + u) / 2),
                M(c.min, u - t)
              ], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), p = [
                (u = n(t)) + l,
                M(c.max, u + l)
              ], e && (p[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), (p = o(p)) - u < l && (t[0] = p - l, t[1] = M(c.min, p - l), u = n(t))), this.min = u, this.max = p;
            },
            getClosest: function () {
              var t;
              return this.categories ? t = 1 : d(this.series, function (e) {
                var i = e.closestPointRange, n = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                !e.noSharedTooltip && h(i) && n && (t = h(t) ? Math.min(t, i) : i);
              }), t;
            },
            nameToX: function (t) {
              var e, i = y(this.categories), n = i ? this.categories : this.names, o = t.options.x;
              return t.series.requireSorting = !1, h(o) || (o = !1 === this.options.uniqueNames ? t.series.autoIncrement() : i ? v(t.name, n) : M(n.keys[t.name], -1)), -1 === o ? i || (e = n.length) : e = o, void 0 !== e && (this.names[e] = t.name, this.names.keys[t.name] = e), e;
            },
            updateNames: function () {
              var e = this, i = this.names;
              0 < i.length && (d(t.keys(i.keys), function (t) {
                delete i.keys[t];
              }), i.length = 0, this.minRange = this.userMinRange, d(this.series || [], function (t) {
                t.xIncrement = null, t.points && !t.isDirtyData || (t.processData(), t.generatePoints()), d(t.points, function (i, n) {
                  var o;
                  i.options && (void 0 !== (o = e.nameToX(i)) && o !== i.x && (i.x = o, t.xData[n] = o));
                });
              }));
            },
            setAxisTranslation: function (t) {
              var e, i = this, n = i.max - i.min, o = i.axisPointRange || 0, s = 0, r = 0, a = i.linkedParent, h = !!i.categories, l = i.transA, c = i.isXAxis;
              (c || h || o) && (e = i.getClosest(), a ? (s = a.minPointOffset, r = a.pointRangePadding) : d(i.series, function (t) {
                var n = h ? 1 : c ? M(t.options.pointRange, e, 0) : i.axisPointRange || 0;
                t = t.options.pointPlacement, o = Math.max(o, n), i.single || (s = Math.max(s, b(t) ? 0 : n / 2), r = Math.max(r, 'on' === t ? 0 : n));
              }), a = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = s *= a, i.pointRangePadding = r *= a, i.pointRange = Math.min(o, n), c && (i.closestPointRange = e)), t && (i.oldTransA = l), i.translationSlope = i.transA = l = i.staticScale || i.len / (n + r || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = l * s, p(this, 'afterSetAxisTranslation');
            },
            minFromRange: function () {
              return this.max - this.range;
            },
            setTickInterval: function (e) {
              var i, n, o, s, a = this, l = a.chart, c = a.options, u = a.isLog, f = a.isDatetimeAxis, m = a.isXAxis, v = a.isLinked, y = c.maxPadding, b = c.minPadding, w = c.tickInterval, S = c.tickPixelInterval, A = a.categories, T = x(a.threshold) ? a.threshold : null, C = a.softThreshold;
              f || A || v || this.getTickAmount(), o = M(a.userMin, c.min), s = M(a.userMax, c.max), v ? (a.linkedParent = l[a.coll][c.linkedTo], l = a.linkedParent.getExtremes(), a.min = M(l.min, l.dataMin), a.max = M(l.max, l.dataMax), c.type !== a.linkedParent.options.type && t.error(11, 1)) : (!C && h(T) && (a.dataMin >= T ? (i = T, b = 0) : a.dataMax <= T && (n = T, y = 0)), a.min = M(o, i, a.dataMin), a.max = M(s, n, a.dataMax)), u && (a.positiveValuesOnly && !e && 0 >= Math.min(a.min, M(a.dataMin, a.min)) && t.error(10, 1), a.min = r(a.log2lin(a.min), 15), a.max = r(a.log2lin(a.max), 15)), a.range && h(a.max) && (a.userMin = a.min = o = Math.max(a.dataMin, a.minFromRange()), a.userMax = s = a.max, a.range = null), p(a, 'foundExtremes'), a.beforePadding && a.beforePadding(), a.adjustForMinRange(), !(A || a.axisPointRange || a.usePercentage || v) && h(a.min) && h(a.max) && (l = a.max - a.min) && (!h(o) && b && (a.min -= l * b), !h(s) && y && (a.max += l * y)), x(c.softMin) && !x(a.userMin) && (a.min = Math.min(a.min, c.softMin)), x(c.softMax) && !x(a.userMax) && (a.max = Math.max(a.max, c.softMax)), x(c.floor) && (a.min = Math.max(a.min, c.floor)), x(c.ceiling) && (a.max = Math.min(a.max, c.ceiling)), C && h(a.dataMin) && (T = T || 0, !h(o) && a.min < T && a.dataMin >= T ? a.min = T : !h(s) && a.max > T && a.dataMax <= T && (a.max = T)), a.tickInterval = a.min === a.max || void 0 === a.min || void 0 === a.max ? 1 : v && !w && S === a.linkedParent.options.tickPixelInterval ? w = a.linkedParent.tickInterval : M(w, this.tickAmount ? (a.max - a.min) / Math.max(this.tickAmount - 1, 1) : void 0, A ? 1 : (a.max - a.min) * S / Math.max(a.len, S)), m && !e && d(a.series, function (t) {
                t.processData(a.min !== a.oldMin || a.max !== a.oldMax);
              }), a.setAxisTranslation(!0), a.beforeSetTickPositions && a.beforeSetTickPositions(), a.postProcessTickInterval && (a.tickInterval = a.postProcessTickInterval(a.tickInterval)), a.pointRange && !w && (a.tickInterval = Math.max(a.pointRange, a.tickInterval)), e = M(c.minTickInterval, a.isDatetimeAxis && a.closestPointRange), !w && a.tickInterval < e && (a.tickInterval = e), f || u || w || (a.tickInterval = k(a.tickInterval, null, g(a.tickInterval), M(c.allowDecimals, !(0.5 < a.tickInterval && 5 > a.tickInterval && 1000 < a.max && 9999 > a.max)), !!this.tickAmount)), this.tickAmount || (a.tickInterval = a.unsquish()), this.setTickPositions();
            },
            setTickPositions: function () {
              var e, i = this.options, n = i.tickPositions;
              e = this.getMinorTickInterval();
              var o = i.tickPositioner, s = i.startOnTick, r = i.endOnTick;
              this.tickmarkOffset = this.categories && 'between' === i.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0, this.minorTickInterval = 'auto' === e && this.tickInterval ? this.tickInterval / 5 : e, this.single = this.min === this.max && h(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals), this.tickPositions = e = n && n.slice(), !e && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (e = [
                this.min,
                this.max
              ], t.error(19)) : e = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), e.length > this.len && ((e = [
                e[0],
                e.pop()
              ])[0] === e[1] && (e.length = 1)), this.tickPositions = e, o && (o = o.apply(this, [
                this.min,
                this.max
              ]))) && (this.tickPositions = e = o), this.paddedTicks = e.slice(0), this.trimTicks(e, s, r), this.isLinked || (this.single && 2 > e.length && (this.min -= 0.5, this.max += 0.5), n || o || this.adjustTickAmount()), p(this, 'afterSetTickPositions');
            },
            trimTicks: function (t, e, i) {
              var n = t[0], o = t[t.length - 1], s = this.minPointOffset || 0;
              if (!this.isLinked) {
                if (e && -1 / 0 !== n)
                  this.min = n;
                else
                  for (; this.min - s > t[0];)
                    t.shift();
                if (i)
                  this.max = o;
                else
                  for (; this.max + s < t[t.length - 1];)
                    t.pop();
                0 === t.length && h(n) && !this.options.tickPositions && t.push((o + n) / 2);
              }
            },
            alignToOthers: function () {
              var t, e = {}, i = this.options;
              return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || !1 === i.startOnTick || !1 === i.endOnTick || this.isLog || d(this.chart[this.coll], function (i) {
                var n = i.options;
                n = [
                  i.horiz ? n.left : n.top,
                  n.width,
                  n.height,
                  n.pane
                ].join();
                i.series.length && (e[n] ? t = !0 : e[n] = 1);
              }), t;
            },
            getTickAmount: function () {
              var t = this.options, e = t.tickAmount, i = t.tickPixelInterval;
              !h(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e;
            },
            adjustTickAmount: function () {
              var t = this.tickInterval, e = this.tickPositions, i = this.tickAmount, n = this.finalTickAmt, o = e && e.length, s = M(this.threshold, this.softThreshold ? 0 : null);
              if (this.hasData()) {
                if (o < i) {
                  for (; e.length < i;)
                    e.length % 2 || this.min === s ? e.push(r(e[e.length - 1] + t)) : e.unshift(r(e[0] - t));
                  this.transA *= (o - 1) / (i - 1), this.min = e[0], this.max = e[e.length - 1];
                } else
                  o > i && (this.tickInterval *= 2, this.setTickPositions());
                if (h(n)) {
                  for (t = i = e.length; t--;)
                    (3 === n && 1 == t % 2 || 2 >= n && 0 < t && t < i - 1) && e.splice(t, 1);
                  this.finalTickAmt = void 0;
                }
              }
            },
            setScale: function () {
              var t, e;
              this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, d(this.series, function (e) {
                (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0);
              }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks(), p(this, 'afterSetScale');
            },
            setExtremes: function (t, e, i, n, o) {
              var s = this, r = s.chart;
              i = M(i, !0), d(s.series, function (t) {
                delete t.kdTree;
              }), o = u(o, {
                min: t,
                max: e
              }), p(s, 'setExtremes', o, function () {
                s.userMin = t, s.userMax = e, s.eventArgs = o, i && r.redraw(n);
              });
            },
            zoom: function (t, e) {
              var i = this.dataMin, n = this.dataMax, o = this.options, s = Math.min(i, M(o.min, i));
              o = Math.max(n, M(o.max, n));
              return t === this.min && e === this.max || (this.allowZoomOutside || (h(i) && (t < s && (t = s), t > o && (t = o)), h(n) && (e < s && (e = s), e > o && (e = o))), this.displayBtn = void 0 !== t || void 0 !== e, this.setExtremes(t, e, !1, void 0, { trigger: 'zoom' })), !0;
            },
            setAxisSize: function () {
              var e = this.chart, i = (a = this.options).offsets || [
                  0,
                  0,
                  0,
                  0
                ], n = this.horiz, o = this.width = Math.round(t.relativeLength(M(a.width, e.plotWidth - i[3] + i[1]), e.plotWidth)), s = this.height = Math.round(t.relativeLength(M(a.height, e.plotHeight - i[0] + i[2]), e.plotHeight)), r = this.top = Math.round(t.relativeLength(M(a.top, e.plotTop + i[0]), e.plotHeight, e.plotTop)), a = this.left = Math.round(t.relativeLength(M(a.left, e.plotLeft + i[3]), e.plotWidth, e.plotLeft));
              this.bottom = e.chartHeight - s - r, this.right = e.chartWidth - o - a, this.len = Math.max(n ? o : s, 0), this.pos = n ? a : r;
            },
            getExtremes: function () {
              var t = this.isLog;
              return {
                min: t ? r(this.lin2log(this.min)) : this.min,
                max: t ? r(this.lin2log(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
              };
            },
            getThreshold: function (t) {
              var e = (i = this.isLog) ? this.lin2log(this.min) : this.min, i = i ? this.lin2log(this.max) : this.max;
              return null === t || -1 / 0 === t ? t = e : 1 / 0 === t ? t = i : e > t ? t = e : i < t && (t = i), this.translate(t, 0, 1, 0, 1);
            },
            autoLabelAlign: function (t) {
              return 15 < (t = (M(t, 0) - 90 * this.side + 720) % 360) && 165 > t ? 'right' : 195 < t && 345 > t ? 'left' : 'center';
            },
            tickSize: function (t) {
              var e = this.options, i = e[t + 'Length'], n = M(e[t + 'Width'], 'tick' === t && this.isXAxis ? 1 : 0);
              if (n && i)
                return 'inside' === e[t + 'Position'] && (i = -i), [
                  i,
                  n
                ];
            },
            labelMetrics: function () {
              var t = this.tickPositions && this.tickPositions[0] || 0;
              return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label);
            },
            unsquish: function () {
              var t, e, i, n = this.options.labels, o = this.horiz, s = this.tickInterval, a = s, c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / s), u = n.rotation, p = this.labelMetrics(), f = Number.MAX_VALUE, g = function (t) {
                  return t = 1 < (t /= c || 1) ? Math.ceil(t) : 1, r(t * s);
                };
              return o ? (i = !n.staggerLines && !n.step && (h(u) ? [u] : c < M(n.autoRotationLimit, 80) && n.autoRotation)) && d(i, function (i) {
                var n;
                (i === u || i && -90 <= i && 90 >= i) && ((n = (e = g(Math.abs(p.h / Math.sin(l * i)))) + Math.abs(i / 360)) < f && (f = n, t = i, a = e));
              }) : n.step || (a = g(p.h)), this.autoRotation = i, this.labelRotation = M(t, u), a;
            },
            getSlotWidth: function (t) {
              var e = this.chart, i = this.horiz, n = this.options.labels, o = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), s = e.margin[3];
              return t && t.slotWidth || i && 2 > (n.step || 0) && !n.rotation && (this.staggerLines || 1) * this.len / o || !i && (n.style && parseInt(n.style.width, 10) || s && s - e.spacing[3] || 0.33 * e.chartWidth);
            },
            renderUnsquish: function () {
              var t, e, i, n = this.chart, o = n.renderer, s = this.tickPositions, r = this.ticks, a = this.options.labels, h = a && a.style || {}, l = this.horiz, c = this.getSlotWidth(), u = Math.max(1, Math.round(c - 2 * (a.padding || 5))), p = {}, f = this.labelMetrics(), g = a.style && a.style.textOverflow, m = 0;
              if (b(a.rotation) || (p.rotation = a.rotation || 0), d(s, function (t) {
                  (t = r[t]) && t.label && t.label.textPxLength > m && (m = t.label.textPxLength);
                }), this.maxLabelLength = m, this.autoRotation)
                m > u && m > f.h ? p.rotation = this.labelRotation : this.labelRotation = 0;
              else if (c && (t = u, !g))
                for (e = 'clip', u = s.length; !l && u--;)
                  i = s[u], (i = r[i].label) && (i.styles && 'ellipsis' === i.styles.textOverflow ? i.css({ textOverflow: 'clip' }) : i.textPxLength > c && i.css({ width: c + 'px' }), i.getBBox().height > this.len / s.length - (f.h - f.f) && (i.specificTextOverflow = 'ellipsis'));
              p.rotation && (t = m > 0.5 * n.chartHeight ? 0.33 * n.chartHeight : m, g || (e = 'ellipsis')), (this.labelAlign = a.align || this.autoLabelAlign(this.labelRotation)) && (p.align = this.labelAlign), d(s, function (i) {
                var n = (i = r[i]) && i.label, o = h.width, s = {};
                n && (n.attr(p), i.shortenLabel ? i.shortenLabel() : t && !o && 'nowrap' !== h.whiteSpace && (t < n.textPxLength || 'SPAN' === n.element.tagName) ? (s.width = t, g || (s.textOverflow = n.specificTextOverflow || e), n.css(s)) : n.styles && n.styles.width && !s.width && !o && n.css({ width: null }), delete n.specificTextOverflow, i.rotation = p.rotation);
              }, this), this.tickRotCorr = o.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side);
            },
            hasData: function () {
              return this.hasVisibleSeries || h(this.min) && h(this.max) && this.tickPositions && 0 < this.tickPositions.length;
            },
            addTitle: function (t) {
              var e, i = this.chart.renderer, n = this.horiz, o = this.opposite, s = this.options.title;
              this.axisTitle || ((e = s.textAlign) || (e = (n ? {
                low: 'left',
                middle: 'center',
                high: 'right'
              } : {
                low: o ? 'right' : 'left',
                middle: 'center',
                high: o ? 'left' : 'right'
              })[s.align]), this.axisTitle = i.text(s.text, 0, 0, s.useHTML).attr({
                zIndex: 7,
                rotation: s.rotation || 0,
                align: e
              }).addClass('highcharts-axis-title').css(w(s.style)).add(this.axisGroup), this.axisTitle.isNew = !0), s.style.width || this.isRadial || this.axisTitle.css({ width: this.len }), this.axisTitle[t ? 'show' : 'hide'](!0);
            },
            generateTick: function (t) {
              var e = this.ticks;
              e[t] ? e[t].addLabel() : e[t] = new L(this, t);
            },
            getOffset: function () {
              var t, e, i, n = this, o = (b = n.chart).renderer, s = n.options, r = n.tickPositions, a = n.ticks, l = n.horiz, c = n.side, u = b.inverted && !n.isZAxis ? [
                  1,
                  0,
                  3,
                  2
                ][c] : c, f = 0, g = 0, m = s.title, v = s.labels, y = 0, x = b.axisOffset, b = b.clipOffset, w = [
                  -1,
                  1,
                  1,
                  -1
                ][c], k = s.className, A = n.axisParent;
              t = n.hasData(), n.showAxis = e = t || M(s.showEmpty, !0), n.staggerLines = n.horiz && v.staggerLines, n.axisGroup || (n.gridGroup = o.g('grid').attr({ zIndex: s.gridZIndex || 1 }).addClass('highcharts-' + this.coll.toLowerCase() + '-grid ' + (k || '')).add(A), n.axisGroup = o.g('axis').attr({ zIndex: s.zIndex || 2 }).addClass('highcharts-' + this.coll.toLowerCase() + ' ' + (k || '')).add(A), n.labelGroup = o.g('axis-labels').attr({ zIndex: v.zIndex || 7 }).addClass('highcharts-' + n.coll.toLowerCase() + '-labels ' + (k || '')).add(A)), t || n.isLinked ? (d(r, function (t, e) {
                n.generateTick(t, e);
              }), n.renderUnsquish(), n.reserveSpaceDefault = 0 === c || 2 === c || {
                1: 'left',
                3: 'right'
              }[c] === n.labelAlign, M(v.reserveSpace, 'center' === n.labelAlign || null, n.reserveSpaceDefault) && d(r, function (t) {
                y = Math.max(a[t].getLabelSize(), y);
              }), n.staggerLines && (y *= n.staggerLines), n.labelOffset = y * (n.opposite ? -1 : 1)) : S(a, function (t, e) {
                t.destroy(), delete a[e];
              }), m && m.text && !1 !== m.enabled && (n.addTitle(e), e && !1 !== m.reserveSpace && (n.titleOffset = f = n.axisTitle.getBBox()[l ? 'height' : 'width'], i = m.offset, g = h(i) ? 0 : M(m.margin, l ? 5 : 10))), n.renderLine(), n.offset = w * M(s.offset, x[c]), n.tickRotCorr = n.tickRotCorr || {
                x: 0,
                y: 0
              }, o = 0 === c ? -n.labelMetrics().h : 2 === c ? n.tickRotCorr.y : 0, g = Math.abs(y) + g, y && (g = g - o + w * (l ? M(v.y, n.tickRotCorr.y + 8 * w) : v.x)), n.axisTitleMargin = M(i, g), n.getMaxLabelDimensions && (n.maxLabelDimensions = n.getMaxLabelDimensions(a, r)), l = this.tickSize('tick'), x[c] = Math.max(x[c], n.axisTitleMargin + f + w * n.offset, g, t && r.length && l ? l[0] + w * n.offset : 0), s = s.offset ? 0 : 2 * Math.floor(n.axisLine.strokeWidth() / 2), b[u] = Math.max(b[u], s), p(this, 'afterGetOffset');
            },
            getLinePath: function (t) {
              var e = this.chart, i = this.opposite, n = this.offset, o = this.horiz, s = this.left + (i ? this.width : 0) + n;
              n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
              return i && (t *= -1), e.renderer.crispLine([
                'M',
                o ? this.left : s,
                o ? n : this.top,
                'L',
                o ? e.chartWidth - this.right : s,
                o ? n : e.chartHeight - this.bottom
              ], t);
            },
            renderLine: function () {
              this.axisLine || (this.axisLine = this.chart.renderer.path().addClass('highcharts-axis-line').add(this.axisGroup), this.axisLine.attr({
                stroke: this.options.lineColor,
                'stroke-width': this.options.lineWidth,
                zIndex: 7
              }));
            },
            getTitlePosition: function () {
              var t = this.horiz, e = this.left, i = this.top, n = this.len, o = this.options.title, s = t ? e : i, r = this.opposite, a = this.offset, h = o.x || 0, l = o.y || 0, c = this.axisTitle, d = this.chart.renderer.fontMetrics(o.style && o.style.fontSize, c);
              c = Math.max(c.getBBox(null, 0).height - d.h - 1, 0), n = {
                low: s + (t ? 0 : n),
                middle: s + n / 2,
                high: s + (t ? n : 0)
              }[o.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + [
                -c,
                c,
                d.f,
                -c
              ][this.side];
              return {
                x: t ? n + h : e + (r ? this.width : 0) + a + h,
                y: t ? e + l - (r ? this.height : 0) + a : n + l
              };
            },
            renderMinorTick: function (t) {
              var e = this.chart.hasRendered && x(this.oldMin), i = this.minorTicks;
              i[t] || (i[t] = new L(this, t, 'minor')), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1);
            },
            renderTick: function (t, e) {
              var i = this.isLinked, n = this.ticks, o = this.chart.hasRendered && x(this.oldMin);
              (!i || t >= this.min && t <= this.max) && (n[t] || (n[t] = new L(this, t)), o && n[t].isNew && n[t].render(e, !0, -1), n[t].render(e));
            },
            render: function () {
              var e, n, o = this, s = o.chart, r = o.options, a = o.isLog, h = o.isLinked, l = o.tickPositions, c = o.axisTitle, u = o.ticks, f = o.minorTicks, g = o.alternateBands, m = r.stackLabels, v = r.alternateGridColor, y = o.tickmarkOffset, b = o.axisLine, w = o.showAxis, k = i(s.renderer.globalAnimation);
              o.labelEdge.length = 0, o.overlap = !1, d([
                u,
                f,
                g
              ], function (t) {
                S(t, function (t) {
                  t.isActive = !1;
                });
              }), (o.hasData() || h) && (o.minorTickInterval && !o.categories && d(o.getMinorTickPositions(), function (t) {
                o.renderMinorTick(t);
              }), l.length && (d(l, function (t, e) {
                o.renderTick(t, e);
              }), y && (0 === o.min || o.single) && (u[-1] || (u[-1] = new L(o, -1, null, !0)), u[-1].render(-1))), v && d(l, function (i, r) {
                n = void 0 !== l[r + 1] ? l[r + 1] + y : o.max - y, 0 == r % 2 && i < o.max && n <= o.max + (s.polar ? -y : y) && (g[i] || (g[i] = new t.PlotLineOrBand(o)), e = i + y, g[i].options = {
                  from: a ? o.lin2log(e) : e,
                  to: a ? o.lin2log(n) : n,
                  color: v
                }, g[i].render(), g[i].isActive = !0);
              }), o._addedPlotLB || (d((r.plotLines || []).concat(r.plotBands || []), function (t) {
                o.addPlotBandOrLine(t);
              }), o._addedPlotLB = !0)), d([
                u,
                f,
                g
              ], function (t) {
                var e, i = [], n = k.duration;
                S(t, function (t, e) {
                  t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e));
                }), C(function () {
                  for (e = i.length; e--;)
                    t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]]);
                }, t !== g && s.hasRendered && n ? n : 0);
              }), b && (b[b.isPlaced ? 'animate' : 'attr']({ d: this.getLinePath(b.strokeWidth()) }), b.isPlaced = !0, b[w ? 'show' : 'hide'](!0)), c && w && (r = o.getTitlePosition(), x(r.y) ? (c[c.isNew ? 'attr' : 'animate'](r), c.isNew = !1) : (c.attr('y', -9999), c.isNew = !0)), m && m.enabled && o.renderStackTotals(), o.isDirty = !1, p(this, 'afterRender');
            },
            redraw: function () {
              this.visible && (this.render(), d(this.plotLinesAndBands, function (t) {
                t.render();
              })), d(this.series, function (t) {
                t.isDirty = !0;
              });
            },
            keepProps: 'extKey hcEvents names series userMax userMin'.split(' '),
            destroy: function (t) {
              var e, i = this, n = i.stacks, o = i.plotLinesAndBands;
              if (p(this, 'destroy', { keepEvents: t }), t || A(i), S(n, function (t, e) {
                  c(t), n[e] = null;
                }), d([
                  i.ticks,
                  i.minorTicks,
                  i.alternateBands
                ], function (t) {
                  c(t);
                }), o)
                for (t = o.length; t--;)
                  o[t].destroy();
              for (e in (d('stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar'.split(' '), function (t) {
                  i[t] && (i[t] = i[t].destroy());
                }), i.plotLinesAndBandsGroups))
                i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
              S(i, function (t, e) {
                -1 === v(e, i.keepProps) && delete i[e];
              });
            },
            drawCrosshair: function (t, e) {
              var i, n, o = this.crosshair, r = M(o.snap, !0), a = this.cross;
              if (p(this, 'drawCrosshair', {
                  e: t,
                  point: e
                }), t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (h(e) || !r)) {
                if (r ? h(e) && (n = M(e.crosshairPos, this.isXAxis ? e.plotX : this.len - e.plotY)) : n = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), h(n) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : M(e.stackY, e.y)), null, null, null, n) || null), !h(i))
                  return void this.hideCrosshair();
                r = this.categories && !this.isRadial, a || (this.cross = a = this.chart.renderer.path().addClass('highcharts-crosshair highcharts-crosshair-' + (r ? 'category ' : 'thin ') + o.className).attr({ zIndex: M(o.zIndex, 2) }).add(), a.attr({
                  stroke: o.color || (r ? s('#ccd6eb').setOpacity(0.25).get() : '#cccccc'),
                  'stroke-width': M(o.width, 1)
                }).css({ 'pointer-events': 'none' }), o.dashStyle && a.attr({ dashstyle: o.dashStyle })), a.show().attr({ d: i }), r && !o.width && a.attr({ 'stroke-width': this.transA }), this.cross.e = t;
              } else
                this.hideCrosshair();
              p(this, 'afterDrawCrosshair', {
                e: t,
                point: e
              });
            },
            hideCrosshair: function () {
              this.cross && this.cross.hide();
            }
          }), t.Axis = P;
        }(c);
        return function (t) {
          var e = t.Axis, i = t.getMagnitude, n = t.normalizeTickInterval, o = t.timeUnits;
          e.prototype.getTimeTicks = function () {
            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
          }, e.prototype.normalizeTimeTickInterval = function (t, e) {
            var s = e || [
              [
                'millisecond',
                [
                  1,
                  2,
                  5,
                  10,
                  20,
                  25,
                  50,
                  100,
                  200,
                  500
                ]
              ],
              [
                'second',
                [
                  1,
                  2,
                  5,
                  10,
                  15,
                  30
                ]
              ],
              [
                'minute',
                [
                  1,
                  2,
                  5,
                  10,
                  15,
                  30
                ]
              ],
              [
                'hour',
                [
                  1,
                  2,
                  3,
                  4,
                  6,
                  8,
                  12
                ]
              ],
              [
                'day',
                [
                  1,
                  2
                ]
              ],
              [
                'week',
                [
                  1,
                  2
                ]
              ],
              [
                'month',
                [
                  1,
                  2,
                  3,
                  4,
                  6
                ]
              ],
              [
                'year',
                null
              ]
            ];
            e = s[s.length - 1];
            var r, a = o[e[0]], h = e[1];
            for (r = 0; r < s.length && (e = s[r], a = o[e[0]], h = e[1], !(s[r + 1] && t <= (a * h[h.length - 1] + o[s[r + 1][0]]) / 2)); r++);
            return a === o.year && t < 5 * a && (h = [
              1,
              2,
              5
            ]), {
              unitRange: a,
              count: t = n(t / a, h, 'year' === e[0] ? Math.max(i(t / a), 1) : 1),
              unitName: e[0]
            };
          };
        }(c), function (t) {
          var e = t.Axis, i = t.getMagnitude, n = t.map, o = t.normalizeTickInterval, s = t.pick;
          e.prototype.getLogTickPositions = function (t, e, r, a) {
            var h = this.options, l = this.len, c = [];
            if (a || (this._minorAutoInterval = null), 0.5 <= t)
              t = Math.round(t), c = this.getLinearTickPositions(t, e, r);
            else if (0.08 <= t) {
              var d, u, p, f, g;
              for (l = Math.floor(e), h = 0.3 < t ? [
                  1,
                  2,
                  4
                ] : 0.15 < t ? [
                  1,
                  2,
                  4,
                  6,
                  8
                ] : [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9
                ]; l < r + 1 && !g; l++)
                for (u = h.length, d = 0; d < u && !g; d++)
                  (p = this.log2lin(this.lin2log(l) * h[d])) > e && (!a || f <= r) && void 0 !== f && c.push(f), f > r && (g = !0), f = p;
            } else
              e = this.lin2log(e), r = this.lin2log(r), t = a ? this.getMinorTickInterval() : h.tickInterval, t = s('auto' === t ? null : t, this._minorAutoInterval, h.tickPixelInterval / (a ? 5 : 1) * (r - e) / ((a ? l / this.tickPositions.length : l) || 1)), t = o(t, null, i(t)), c = n(this.getLinearTickPositions(t, e, r), this.log2lin), a || (this._minorAutoInterval = t / 5);
            return a || (this.tickInterval = t), c;
          }, e.prototype.log2lin = function (t) {
            return Math.log(t) / Math.LN10;
          }, e.prototype.lin2log = function (t) {
            return Math.pow(10, t);
          };
        }(c), function (t, e) {
          var i = t.arrayMax, n = t.arrayMin, o = t.defined, s = t.destroyObjectProperties, r = t.each, a = t.erase, h = t.merge, l = t.pick;
          t.PlotLineOrBand = function (t, e) {
            this.axis = t, e && (this.options = e, this.id = e.id);
          }, t.PlotLineOrBand.prototype = {
            render: function () {
              t.fireEvent(this, 'render');
              var e = this, i = e.axis, n = i.horiz, s = e.options, r = s.label, a = e.label, c = s.to, d = s.from, u = s.value, p = o(d) && o(c), f = o(u), g = e.svgElem, m = !g, v = [], y = s.color, x = l(s.zIndex, 0), b = s.events, w = (v = { class: 'highcharts-plot-' + (p ? 'band ' : 'line ') + (s.className || '') }, {}), k = i.chart.renderer, S = p ? 'bands' : 'lines';
              if (i.isLog && (d = i.log2lin(d), c = i.log2lin(c), u = i.log2lin(u)), f ? (v.stroke = y, v['stroke-width'] = s.width, s.dashStyle && (v.dashstyle = s.dashStyle)) : p && (y && (v.fill = y), s.borderWidth && (v.stroke = s.borderColor, v['stroke-width'] = s.borderWidth)), w.zIndex = x, S += '-' + x, (y = i.plotLinesAndBandsGroups[S]) || (i.plotLinesAndBandsGroups[S] = y = k.g('plot-' + S).attr(w).add()), m && (e.svgElem = g = k.path().attr(v).add(y)), f)
                v = i.getPlotLinePath(u, g.strokeWidth());
              else {
                if (!p)
                  return;
                v = i.getPlotBandPath(d, c, s);
              }
              return m && v && v.length ? (g.attr({ d: v }), b && t.objectEach(b, function (t, i) {
                g.on(i, function (t) {
                  b[i].apply(e, [t]);
                });
              })) : g && (v ? (g.show(), g.animate({ d: v })) : (g.hide(), a && (e.label = a = a.destroy()))), r && o(r.text) && v && v.length && 0 < i.width && 0 < i.height && !v.isFlat ? (r = h({
                align: n && p && 'center',
                x: n ? !p && 4 : 10,
                verticalAlign: !n && p && 'middle',
                y: n ? p ? 16 : 10 : p ? 6 : -4,
                rotation: n && !p && 90
              }, r), this.renderLabel(r, v, p, x)) : a && a.hide(), e;
            },
            renderLabel: function (t, e, o, s) {
              var r = this.label, a = this.axis.chart.renderer;
              r || ((r = {
                align: t.textAlign || t.align,
                rotation: t.rotation,
                class: 'highcharts-plot-' + (o ? 'band' : 'line') + '-label ' + (t.className || '')
              }).zIndex = s, this.label = r = a.text(t.text, 0, 0, t.useHTML).attr(r).add(), r.css(t.style)), s = e.xBounds || [
                e[1],
                e[4],
                o ? e[6] : e[1]
              ], e = e.yBounds || [
                e[2],
                e[5],
                o ? e[7] : e[2]
              ], o = n(s), a = n(e), r.align(t, !1, {
                x: o,
                y: a,
                width: i(s) - o,
                height: i(e) - a
              }), r.show();
            },
            destroy: function () {
              a(this.axis.plotLinesAndBands, this), delete this.axis, s(this);
            }
          }, t.extend(e.prototype, {
            getPlotBandPath: function (t, e) {
              var i, n = this.getPlotLinePath(e, null, null, !0), o = this.getPlotLinePath(t, null, null, !0), s = [], r = this.horiz, a = 1;
              if (t = t < this.min && e < this.min || t > this.max && e > this.max, o && n)
                for (t && (i = o.toString() === n.toString(), a = 0), t = 0; t < o.length; t += 6)
                  r && n[t + 1] === o[t + 1] ? (n[t + 1] += a, n[t + 4] += a) : r || n[t + 2] !== o[t + 2] || (n[t + 2] += a, n[t + 5] += a), s.push('M', o[t + 1], o[t + 2], 'L', o[t + 4], o[t + 5], n[t + 4], n[t + 5], n[t + 1], n[t + 2], 'z'), s.isFlat = i;
              return s;
            },
            addPlotBand: function (t) {
              return this.addPlotBandOrLine(t, 'plotBands');
            },
            addPlotLine: function (t) {
              return this.addPlotBandOrLine(t, 'plotLines');
            },
            addPlotBandOrLine: function (e, i) {
              var n = new t.PlotLineOrBand(this, e).render(), o = this.userOptions;
              return n && (i && (o[i] = o[i] || [], o[i].push(e)), this.plotLinesAndBands.push(n)), n;
            },
            removePlotBandOrLine: function (t) {
              for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, o = e.length; o--;)
                e[o].id === t && e[o].destroy();
              r([
                i.plotLines || [],
                n.plotLines || [],
                i.plotBands || [],
                n.plotBands || []
              ], function (e) {
                for (o = e.length; o--;)
                  e[o].id === t && a(e, e[o]);
              });
            },
            removePlotBand: function (t) {
              this.removePlotBandOrLine(t);
            },
            removePlotLine: function (t) {
              this.removePlotBandOrLine(t);
            }
          });
        }(c, d), function (t) {
          var e = t.doc, i = t.each, n = t.extend, o = t.format, s = t.isNumber, r = t.map, a = t.merge, h = t.pick, l = t.splat, c = t.syncTimeout, d = t.timeUnits;
          t.Tooltip = function () {
            this.init.apply(this, arguments);
          }, t.Tooltip.prototype = {
            init: function (t, e) {
              this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                x: 0,
                y: 0
              }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split, this.outside = e.outside && !this.split;
            },
            cleanSplit: function (t) {
              i(this.chart.series, function (e) {
                var i = e && e.tt;
                i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1);
              });
            },
            getLabel: function () {
              var e, i = this.chart.renderer, n = this.options;
              return this.label || (this.outside && (this.container = e = t.doc.createElement('div'), e.className = 'highcharts-tooltip-container', t.css(e, {
                position: 'absolute',
                top: '1px',
                pointerEvents: n.style && n.style.pointerEvents
              }), t.doc.body.appendChild(e), this.renderer = i = new t.Renderer(e, 0, 0)), this.split ? this.label = i.g('tooltip') : (this.label = i.label('', 0, 0, n.shape || 'callout', null, null, n.useHTML, null, 'tooltip').attr({
                padding: n.padding,
                r: n.borderRadius
              }), this.label.attr({
                fill: n.backgroundColor,
                'stroke-width': n.borderWidth
              }).css(n.style).shadow(n.shadow)), this.outside && (this.label.attr({
                x: this.distance,
                y: this.distance
              }), this.label.xSetter = function (t) {
                e.style.left = t + 'px';
              }, this.label.ySetter = function (t) {
                e.style.top = t + 'px';
              }), this.label.attr({ zIndex: 8 }).add()), this.label;
            },
            update: function (t) {
              this.destroy(), a(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, a(!0, this.options, t));
            },
            destroy: function () {
              this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), this.renderer && (this.renderer = this.renderer.destroy(), t.discardElement(this.container)), t.clearTimeout(this.hideTimer), t.clearTimeout(this.tooltipTimeout);
            },
            move: function (e, i, o, s) {
              var r = this, a = r.now, h = !1 !== r.options.animation && !r.isHidden && (1 < Math.abs(e - a.x) || 1 < Math.abs(i - a.y)), l = r.followPointer || 1 < r.len;
              n(a, {
                x: h ? (2 * a.x + e) / 3 : e,
                y: h ? (a.y + i) / 2 : i,
                anchorX: l ? void 0 : h ? (2 * a.anchorX + o) / 3 : o,
                anchorY: l ? void 0 : h ? (a.anchorY + s) / 2 : s
              }), r.getLabel().attr(a), h && (t.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                r && r.move(e, i, o, s);
              }, 32));
            },
            hide: function (e) {
              var i = this;
              t.clearTimeout(this.hideTimer), e = h(e, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = c(function () {
                i.getLabel()[e ? 'fadeOut' : 'hide'](), i.isHidden = !0;
              }, e));
            },
            getAnchor: function (t, e) {
              var n, o, s = this.chart, a = s.pointer, h = s.inverted, c = s.plotTop, d = s.plotLeft, u = 0, p = 0;
              return t = l(t), this.followPointer && e ? (void 0 === e.chartX && (e = a.normalize(e)), t = [
                e.chartX - s.plotLeft,
                e.chartY - c
              ]) : t[0].tooltipPos ? t = t[0].tooltipPos : (i(t, function (t) {
                n = t.series.yAxis, o = t.series.xAxis, u += t.plotX + (!h && o ? o.left - d : 0), p += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!h && n ? n.top - c : 0);
              }), u /= t.length, p /= t.length, t = [
                h ? s.plotWidth - p : u,
                this.shared && !h && 1 < t.length && e ? e.chartY - c : h ? s.plotHeight - u : p
              ]), r(t, Math.round);
            },
            getPosition: function (t, i, n) {
              var o, s = this.chart, r = this.distance, a = {}, l = s.inverted && n.h || 0, c = this.outside, d = c ? e.documentElement.clientWidth - 2 * r : s.chartWidth, u = c ? Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.documentElement.clientHeight) : s.chartHeight, p = s.pointer.chartPosition, f = [
                  'y',
                  u,
                  i,
                  (c ? p.top - r : 0) + n.plotY + s.plotTop,
                  c ? 0 : s.plotTop,
                  c ? u : s.plotTop + s.plotHeight
                ], g = [
                  'x',
                  d,
                  t,
                  (c ? p.left - r : 0) + n.plotX + s.plotLeft,
                  c ? 0 : s.plotLeft,
                  c ? d : s.plotLeft + s.plotWidth
                ], m = !this.followPointer && h(n.ttBelow, !s.inverted == !!n.negative), v = function (t, e, i, n, o, s) {
                  var h = i < n - r, c = n + r + i < e, d = n - r - i;
                  if (n += r, m && c)
                    a[t] = n;
                  else if (!m && h)
                    a[t] = d;
                  else if (h)
                    a[t] = Math.min(s - i, 0 > d - l ? d : d - l);
                  else {
                    if (!c)
                      return !1;
                    a[t] = Math.max(o, n + l + i > e ? n : n + l);
                  }
                }, y = function (t, e, i, n) {
                  var o;
                  return n < r || n > e - r ? o = !1 : a[t] = n < i / 2 ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, o;
                }, x = function (t) {
                  var e = f;
                  f = g, g = e, o = t;
                };
              return (s.inverted || 1 < this.len) && x(), function t() {
                !1 !== v.apply(0, f) ? !1 !== y.apply(0, g) || o || (x(!0), t()) : o ? a.x = a.y = 0 : (x(!0), t());
              }(), a;
            },
            defaultFormatter: function (t) {
              var e, i = this.points || l(this);
              return (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.tooltipFooterHeaderFormatter(i[0], !0)), e;
            },
            refresh: function (e, n) {
              var o, s, r, a = this.options, c = e, d = {}, u = [];
              o = a.formatter || this.defaultFormatter;
              var p;
              d = this.shared;
              a.enabled && (t.clearTimeout(this.hideTimer), this.followPointer = l(c)[0].series.tooltipOptions.followPointer, n = (r = this.getAnchor(c, n))[0], s = r[1], !d || c.series && c.series.noSharedTooltip ? d = c.getLabelConfig() : (i(c, function (t) {
                t.setState('hover'), u.push(t.getLabelConfig());
              }), (d = {
                x: c[0].category,
                y: c[0].y
              }).points = u, c = c[0]), this.len = u.length, d = o.call(d, this), p = c.series, this.distance = h(p.tooltipOptions.distance, 16), !1 === d ? this.hide() : (o = this.getLabel(), this.isHidden && o.attr({ opacity: 1 }).show(), this.split ? this.renderSplit(d, l(e)) : (a.style.width || o.css({ width: this.chart.spacingBox.width }), o.attr({ text: d && d.join ? d.join('') : d }), o.removeClass(/highcharts-color-[\d]+/g).addClass('highcharts-color-' + h(c.colorIndex, p.colorIndex)), o.attr({ stroke: a.borderColor || c.color || p.color || '#666666' }), this.updatePosition({
                plotX: n,
                plotY: s,
                negative: c.negative,
                ttBelow: c.ttBelow,
                h: r[2] || 0
              })), this.isHidden = !1));
            },
            renderSplit: function (e, n) {
              var o, s = this, r = [], a = this.chart, l = a.renderer, c = !0, d = this.options, u = 0, p = this.getLabel(), f = a.plotTop;
              t.isString(e) && (e = [
                !1,
                e
              ]), i(e.slice(0, n.length + 1), function (t, e) {
                if (!1 !== t) {
                  var i = (e = n[e - 1] || {
                      isHeader: !0,
                      plotX: n[0].plotX
                    }).series || s, g = i.tt, m = e.series || {}, v = 'highcharts-color-' + h(e.colorIndex, m.colorIndex, 'none');
                  g || (i.tt = g = l.label(null, null, null, 'callout', null, null, d.useHTML).addClass('highcharts-tooltip-box ' + v + (e.isHeader ? ' highcharts-tooltip-header' : '')).attr({
                    padding: d.padding,
                    r: d.borderRadius,
                    fill: d.backgroundColor,
                    stroke: d.borderColor || e.color || m.color || '#333333',
                    'stroke-width': d.borderWidth
                  }).add(p)), g.isActive = !0, g.attr({ text: t }), g.css(d.style).shadow(d.shadow), m = (t = g.getBBox()).width + g.strokeWidth(), e.isHeader ? (u = t.height, a.xAxis[0].opposite && (o = !0, f -= u), m = Math.max(0, Math.min(e.plotX + a.plotLeft - m / 2, a.chartWidth + (a.scrollablePixels ? a.scrollablePixels - a.marginRight : 0) - m))) : m = e.plotX + a.plotLeft - h(d.distance, 16) - m, 0 > m && (c = !1), t = (e.series && e.series.yAxis && e.series.yAxis.pos) + (e.plotY || 0), t -= f, e.isHeader && (t = o ? -u : a.plotHeight + u), r.push({
                    target: t,
                    rank: e.isHeader ? 1 : 0,
                    size: i.tt.getBBox().height + 1,
                    point: e,
                    x: m,
                    tt: g
                  });
                }
              }), this.cleanSplit(), t.distribute(r, a.plotHeight + u), i(r, function (t) {
                var e = t.point, i = e.series;
                t.tt.attr({
                  visibility: void 0 === t.pos ? 'hidden' : 'inherit',
                  x: c || e.isHeader ? t.x : e.plotX + a.plotLeft + h(d.distance, 16),
                  y: t.pos + f,
                  anchorX: e.isHeader ? e.plotX + a.plotLeft : e.plotX + i.xAxis.pos,
                  anchorY: e.isHeader ? a.plotTop + a.plotHeight / 2 : e.plotY + i.yAxis.pos
                });
              });
            },
            updatePosition: function (t) {
              var e, i = this.chart, n = this.getLabel(), o = (this.options.positioner || this.getPosition).call(this, n.width, n.height, t), s = t.plotX + i.plotLeft;
              t = t.plotY + i.plotTop, this.outside && (e = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(n.width + e, n.height + e, !1), s += i.pointer.chartPosition.left - o.x, t += i.pointer.chartPosition.top - o.y), this.move(Math.round(o.x), Math.round(o.y || 0), s, t);
            },
            getDateFormat: function (t, e, i, n) {
              var o, s, r = this.chart.time, a = r.dateFormat('%m-%d %H:%M:%S.%L', e), h = {
                  millisecond: 15,
                  second: 12,
                  minute: 9,
                  hour: 6,
                  day: 3
                }, l = 'millisecond';
              for (s in d) {
                if (t === d.week && +r.dateFormat('%w', e) === i && '00:00:00.000' === a.substr(6)) {
                  s = 'week';
                  break;
                }
                if (d[s] > t) {
                  s = l;
                  break;
                }
                if (h[s] && a.substr(h[s]) !== '01-01 00:00:00.000'.substr(h[s]))
                  break;
                'week' !== s && (l = s);
              }
              return s && (o = r.resolveDTLFormat(n[s]).main), o;
            },
            getXDateFormat: function (t, e, i) {
              e = e.dateTimeLabelFormats;
              var n = i && i.closestPointRange;
              return (n ? this.getDateFormat(n, t.x, i.options.startOfWeek, e) : e.day) || e.year;
            },
            tooltipFooterHeaderFormatter: function (t, e) {
              e = e ? 'footer' : 'header';
              var n = t.series, r = n.tooltipOptions, a = r.xDateFormat, h = n.xAxis, l = h && 'datetime' === h.options.type && s(t.key), c = r[e + 'Format'];
              return l && !a && (a = this.getXDateFormat(t, r, h)), l && a && i(t.point && t.point.tooltipDateKeys || ['key'], function (t) {
                c = c.replace('{point.' + t + '}', '{point.' + t + ':' + a + '}');
              }), o(c, {
                point: t,
                series: n
              }, this.chart.time);
            },
            bodyFormatter: function (t) {
              return r(t, function (t) {
                var e = t.series.tooltipOptions;
                return (e[(t.point.formatPrefix || 'point') + 'Formatter'] || t.point.tooltipFormatter).call(t.point, e[(t.point.formatPrefix || 'point') + 'Format']);
              });
            }
          };
        }(c), function (t) {
          var e = t.addEvent, i = t.attr, n = t.charts, o = t.color, s = t.css, r = t.defined, a = t.each, h = t.extend, l = t.find, c = t.fireEvent, d = t.isNumber, u = t.isObject, p = t.offset, f = t.pick, g = t.splat, m = t.Tooltip;
          t.Pointer = function (t, e) {
            this.init(t, e);
          }, t.Pointer.prototype = {
            init: function (t, e) {
              this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, m && (t.tooltip = new m(t, e.tooltip), this.followTouchMove = f(e.tooltip.followTouchMove, !0)), this.setDOMEvents();
            },
            zoomOption: function (t) {
              var e = (n = this.chart).options.chart, i = e.zoomType || '', n = n.inverted;
              /touch/.test(t.type) && (i = f(e.pinchType, i)), this.zoomX = t = /x/.test(i), this.zoomY = i = /y/.test(i), this.zoomHor = t && !n || i && n, this.zoomVert = i && !n || t && n, this.hasZoom = t || i;
            },
            normalize: function (t, e) {
              var i;
              return i = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = p(this.chart.container)), h(t, {
                chartX: Math.round(i.pageX - e.left),
                chartY: Math.round(i.pageY - e.top)
              });
            },
            getCoordinates: function (t) {
              var e = {
                xAxis: [],
                yAxis: []
              };
              return a(this.chart.axes, function (i) {
                e[i.isXAxis ? 'xAxis' : 'yAxis'].push({
                  axis: i,
                  value: i.toValue(t[i.horiz ? 'chartX' : 'chartY'])
                });
              }), e;
            },
            findNearestKDPoint: function (t, e, i) {
              var n;
              return a(t, function (t) {
                var o = !(t.noSharedTooltip && e) && 0 > t.options.findNearestPointBy.indexOf('y');
                if (t = t.searchPoint(i, o), (o = u(t, !0)) && !(o = !u(n, !0))) {
                  o = n.distX - t.distX;
                  var s = n.dist - t.dist, r = (t.series.group && t.series.group.zIndex) - (n.series.group && n.series.group.zIndex);
                  o = 0 < (0 !== o && e ? o : 0 !== s ? s : 0 !== r ? r : n.series.index > t.series.index ? -1 : 1);
                }
                o && (n = t);
              }), n;
            },
            getPointFromEvent: function (t) {
              t = t.target;
              for (var e; t && !e;)
                e = t.point, t = t.parentNode;
              return e;
            },
            getChartCoordinatesFromPoint: function (t, e) {
              var i = (n = t.series).xAxis, n = n.yAxis, o = f(t.clientX, t.plotX), s = t.shapeArgs;
              return i && n ? e ? {
                chartX: i.len + i.pos - o,
                chartY: n.len + n.pos - t.plotY
              } : {
                chartX: o + i.pos,
                chartY: t.plotY + n.pos
              } : s && s.x && s.y ? {
                chartX: s.x,
                chartY: s.y
              } : void 0;
            },
            getHoverData: function (e, i, n, o, s, r, h) {
              var c, d = [], p = h && h.isBoosting;
              return o = !(!o || !e), h = i && !i.stickyTracking ? [i] : t.grep(n, function (t) {
                return t.visible && !(!s && t.directTouch) && f(t.options.enableMouseTracking, !0) && t.stickyTracking;
              }), i = (c = o ? e : this.findNearestKDPoint(h, s, r)) && c.series, c && (s && !i.noSharedTooltip ? (h = t.grep(n, function (t) {
                return t.visible && !(!s && t.directTouch) && f(t.options.enableMouseTracking, !0) && !t.noSharedTooltip;
              }), a(h, function (t) {
                var e = l(t.points, function (t) {
                  return t.x === c.x && !t.isNull;
                });
                u(e) && (p && (e = t.getPoint(e)), d.push(e));
              })) : d.push(c)), {
                hoverPoint: c,
                hoverSeries: i,
                hoverPoints: d
              };
            },
            runPointActions: function (i, o) {
              var s, r = this.chart, h = r.tooltip && r.tooltip.options.enabled ? r.tooltip : void 0, l = !!h && h.shared, c = (d = o || r.hoverPoint) && d.series || r.hoverSeries, d = (c = this.getHoverData(d, c, r.series, 'touchmove' !== i.type && (!!o || c && c.directTouch && this.isDirectTouch), l, i, { isBoosting: r.isBoosting })).hoverPoint;
              if (s = c.hoverPoints, o = (c = c.hoverSeries) && c.tooltipOptions.followPointer, l = l && c && !c.noSharedTooltip, d && (d !== r.hoverPoint || h && h.isHidden)) {
                if (a(r.hoverPoints || [], function (e) {
                    -1 === t.inArray(e, s) && e.setState();
                  }), a(s || [], function (t) {
                    t.setState('hover');
                  }), r.hoverSeries !== c && c.onMouseOver(), r.hoverPoint && r.hoverPoint.firePointEvent('mouseOut'), !d.series)
                  return;
                d.firePointEvent('mouseOver'), r.hoverPoints = s, r.hoverPoint = d, h && h.refresh(l ? s : d, i);
              } else
                o && h && !h.isHidden && (d = h.getAnchor([{}], i), h.updatePosition({
                  plotX: d[0],
                  plotY: d[1]
                }));
              this.unDocMouseMove || (this.unDocMouseMove = e(r.container.ownerDocument, 'mousemove', function (e) {
                var i = n[t.hoverChartIndex];
                i && i.pointer.onDocumentMouseMove(e);
              })), a(r.axes, function (e) {
                var n = f(e.crosshair.snap, !0), o = n ? t.find(s, function (t) {
                    return t.series[e.coll] === e;
                  }) : void 0;
                o || !n ? e.drawCrosshair(i, o) : e.hideCrosshair();
              });
            },
            reset: function (t, e) {
              var i = this.chart, n = i.hoverSeries, o = i.hoverPoint, s = i.hoverPoints, r = i.tooltip, h = r && r.shared ? s : o;
              t && h && a(g(h), function (e) {
                e.series.isCartesian && void 0 === e.plotX && (t = !1);
              }), t ? r && h && (r.refresh(h), r.shared && s ? a(s, function (t) {
                t.setState(t.state, !0), t.series.isCartesian && (t.series.xAxis.crosshair && t.series.xAxis.drawCrosshair(null, t), t.series.yAxis.crosshair && t.series.yAxis.drawCrosshair(null, t));
              }) : o && (o.setState(o.state, !0), a(i.axes, function (t) {
                t.crosshair && t.drawCrosshair(null, o);
              }))) : (o && o.onMouseOut(), s && a(s, function (t) {
                t.setState();
              }), n && n.onMouseOut(), r && r.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), a(i.axes, function (t) {
                t.hideCrosshair();
              }), this.hoverX = i.hoverPoints = i.hoverPoint = null);
            },
            scaleGroups: function (t, e) {
              var i, n = this.chart;
              a(n.series, function (o) {
                i = t || o.getPlotBox(), o.xAxis && o.xAxis.zoomEnabled && o.group && (o.group.attr(i), o.markerGroup && (o.markerGroup.attr(i), o.markerGroup.clip(e ? n.clipRect : null)), o.dataLabelsGroup && o.dataLabelsGroup.attr(i));
              }), n.clipRect.attr(e || n.clipBox);
            },
            dragStart: function (t) {
              var e = this.chart;
              e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY;
            },
            drag: function (t) {
              var e, i = this.chart, n = i.options.chart, s = t.chartX, r = t.chartY, a = this.zoomHor, h = this.zoomVert, l = i.plotLeft, c = i.plotTop, d = i.plotWidth, u = i.plotHeight, p = this.selectionMarker, f = this.mouseDownX, g = this.mouseDownY, m = n.panKey && t[n.panKey + 'Key'];
              p && p.touch || (s < l ? s = l : s > l + d && (s = l + d), r < c ? r = c : r > c + u && (r = c + u), this.hasDragged = Math.sqrt(Math.pow(f - s, 2) + Math.pow(g - r, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(f - l, g - c), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !m && !p && (this.selectionMarker = p = i.renderer.rect(l, c, a ? 1 : d, h ? 1 : u, 0).attr({
                fill: n.selectionMarkerFill || o('#335cad').setOpacity(0.25).get(),
                class: 'highcharts-selection-marker',
                zIndex: 7
              }).add()), p && a && (s -= f, p.attr({
                width: Math.abs(s),
                x: (0 < s ? 0 : s) + f
              })), p && h && (s = r - g, p.attr({
                height: Math.abs(s),
                y: (0 < s ? 0 : s) + g
              })), e && !p && n.panning && i.pan(t, n.panning)));
            },
            drop: function (t) {
              var e = this, i = this.chart, n = this.hasPinched;
              if (this.selectionMarker) {
                var o, l = {
                    originalEvent: t,
                    xAxis: [],
                    yAxis: []
                  }, u = this.selectionMarker, p = u.attr ? u.attr('x') : u.x, f = u.attr ? u.attr('y') : u.y, g = u.attr ? u.attr('width') : u.width, m = u.attr ? u.attr('height') : u.height;
                (this.hasDragged || n) && (a(i.axes, function (i) {
                  if (i.zoomEnabled && r(i.min) && (n || e[{
                      xAxis: 'zoomX',
                      yAxis: 'zoomY'
                    }[i.coll]])) {
                    var s = i.horiz, a = 'touchend' === t.type ? i.minPixelPadding : 0, h = i.toValue((s ? p : f) + a);
                    s = i.toValue((s ? p + g : f + m) - a);
                    l[i.coll].push({
                      axis: i,
                      min: Math.min(h, s),
                      max: Math.max(h, s)
                    }), o = !0;
                  }
                }), o && c(i, 'selection', l, function (t) {
                  i.zoom(h(t, n ? { animation: !1 } : null));
                })), d(i.index) && (this.selectionMarker = this.selectionMarker.destroy()), n && this.scaleGroups();
              }
              i && d(i.index) && (s(i.container, { cursor: i._cursor }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
            },
            onContainerMouseDown: function (t) {
              2 !== (t = this.normalize(t)).button && (this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t));
            },
            onDocumentMouseUp: function (e) {
              n[t.hoverChartIndex] && n[t.hoverChartIndex].pointer.drop(e);
            },
            onDocumentMouseMove: function (t) {
              var e = this.chart, i = this.chartPosition;
              t = this.normalize(t, i), !i || this.inClass(t.target, 'highcharts-tracker') || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset();
            },
            onContainerMouseLeave: function (e) {
              var i = n[t.hoverChartIndex];
              i && (e.relatedTarget || e.toElement) && (i.pointer.reset(), i.pointer.chartPosition = null);
            },
            onContainerMouseMove: function (e) {
              var i = this.chart;
              r(t.hoverChartIndex) && n[t.hoverChartIndex] && n[t.hoverChartIndex].mouseIsDown || (t.hoverChartIndex = i.index), (e = this.normalize(e)).returnValue = !1, 'mousedown' === i.mouseIsDown && this.drag(e), !this.inClass(e.target, 'highcharts-tracker') && !i.isInsidePlot(e.chartX - i.plotLeft, e.chartY - i.plotTop) || i.openMenu || this.runPointActions(e);
            },
            inClass: function (t, e) {
              for (var n; t;) {
                if (n = i(t, 'class')) {
                  if (-1 !== n.indexOf(e))
                    return !0;
                  if (-1 !== n.indexOf('highcharts-container'))
                    return !1;
                }
                t = t.parentNode;
              }
            },
            onTrackerMouseOut: function (t) {
              var e = this.chart.hoverSeries;
              t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, 'highcharts-tooltip') || this.inClass(t, 'highcharts-series-' + e.index) && this.inClass(t, 'highcharts-tracker') || e.onMouseOut();
            },
            onContainerClick: function (t) {
              var e = this.chart, i = e.hoverPoint, n = e.plotLeft, o = e.plotTop;
              t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, 'highcharts-tracker') ? (c(i.series, 'click', h(t, { point: i })), e.hoverPoint && i.firePointEvent('click', t)) : (h(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - o) && c(e, 'click', t)));
            },
            setDOMEvents: function () {
              var i = this, n = i.chart.container, o = n.ownerDocument;
              n.onmousedown = function (t) {
                i.onContainerMouseDown(t);
              }, n.onmousemove = function (t) {
                i.onContainerMouseMove(t);
              }, n.onclick = function (t) {
                i.onContainerClick(t);
              }, this.unbindContainerMouseLeave = e(n, 'mouseleave', i.onContainerMouseLeave), t.unbindDocumentMouseUp || (t.unbindDocumentMouseUp = e(o, 'mouseup', i.onDocumentMouseUp)), t.hasTouch && (n.ontouchstart = function (t) {
                i.onContainerTouchStart(t);
              }, n.ontouchmove = function (t) {
                i.onContainerTouchMove(t);
              }, t.unbindDocumentTouchEnd || (t.unbindDocumentTouchEnd = e(o, 'touchend', i.onDocumentTouchEnd)));
            },
            destroy: function () {
              var e = this;
              e.unDocMouseMove && e.unDocMouseMove(), this.unbindContainerMouseLeave(), t.chartCount || (t.unbindDocumentMouseUp && (t.unbindDocumentMouseUp = t.unbindDocumentMouseUp()), t.unbindDocumentTouchEnd && (t.unbindDocumentTouchEnd = t.unbindDocumentTouchEnd())), clearInterval(e.tooltipTimeout), t.objectEach(e, function (t, i) {
                e[i] = null;
              });
            }
          };
        }(c), function (t) {
          var e = t.charts, i = t.each, n = t.extend, o = t.map, s = t.noop, r = t.pick;
          n(t.Pointer.prototype, {
            pinchTranslate: function (t, e, i, n, o, s) {
              this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, n, o, s), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, n, o, s);
            },
            pinchTranslateDirection: function (t, e, i, n, o, s, r, a) {
              var h, l, c, d = this.chart, u = t ? 'x' : 'y', p = t ? 'X' : 'Y', f = 'chart' + p, g = t ? 'width' : 'height', m = d['plot' + (t ? 'Left' : 'Top')], v = a || 1, y = d.inverted, x = d.bounds[t ? 'h' : 'v'], b = 1 === e.length, w = e[0][f], k = i[0][f], S = !b && e[1][f], M = !b && i[1][f];
              (i = function () {
                !b && 20 < Math.abs(w - S) && (v = a || Math.abs(k - M) / Math.abs(w - S)), l = (m - k) / v + w, h = d['plot' + (t ? 'Width' : 'Height')] / v;
              })(), (e = l) < x.min ? (e = x.min, c = !0) : e + h > x.max && (e = x.max - h, c = !0), c ? (k -= 0.8 * (k - r[u][0]), b || (M -= 0.8 * (M - r[u][1])), i()) : r[u] = [
                k,
                M
              ], y || (s[u] = l - m, s[g] = h), s = y ? 1 / v : v, o[g] = h, o[u] = e, n[y ? t ? 'scaleY' : 'scaleX' : 'scale' + p] = v, n['translate' + p] = s * m + (k - s * w);
            },
            pinch: function (t) {
              var e = this, a = e.chart, h = e.pinchDown, l = t.touches, c = l.length, d = e.lastValidTouch, u = e.hasZoom, p = e.selectionMarker, f = {}, g = 1 === c && (e.inClass(t.target, 'highcharts-tracker') && a.runTrackerClick || e.runChartClick), m = {};
              1 < c && (e.initiated = !0), u && e.initiated && !g && t.preventDefault(), o(l, function (t) {
                return e.normalize(t);
              }), 'touchstart' === t.type ? (i(l, function (t, e) {
                h[e] = {
                  chartX: t.chartX,
                  chartY: t.chartY
                };
              }), d.x = [
                h[0].chartX,
                h[1] && h[1].chartX
              ], d.y = [
                h[0].chartY,
                h[1] && h[1].chartY
              ], i(a.axes, function (t) {
                if (t.zoomEnabled) {
                  var e = a.bounds[t.horiz ? 'h' : 'v'], i = t.minPixelPadding, n = t.toPixels(r(t.options.min, t.dataMin)), o = t.toPixels(r(t.options.max, t.dataMax)), s = Math.max(n, o);
                  e.min = Math.min(t.pos, Math.min(n, o) - i), e.max = Math.max(t.pos + t.len, s + i);
                }
              }), e.res = !0) : e.followTouchMove && 1 === c ? this.runPointActions(e.normalize(t)) : h.length && (p || (e.selectionMarker = p = n({
                destroy: s,
                touch: !0
              }, a.plotBox)), e.pinchTranslate(h, l, f, p, m, d), e.hasPinched = u, e.scaleGroups(f, m), e.res && (e.res = !1, this.reset(!1, 0)));
            },
            touch: function (e, i) {
              var n, o = this.chart;
              o.index !== t.hoverChartIndex && this.onContainerMouseLeave({ relatedTarget: !0 }), t.hoverChartIndex = o.index, 1 === e.touches.length ? (e = this.normalize(e), o.isInsidePlot(e.chartX - o.plotLeft, e.chartY - o.plotTop) && !o.openMenu ? (i && this.runPointActions(e), 'touchmove' === e.type && (n = !!(i = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(i[0].chartX - e.chartX, 2) + Math.pow(i[0].chartY - e.chartY, 2))), r(n, !0) && this.pinch(e)) : i && this.reset()) : 2 === e.touches.length && this.pinch(e);
            },
            onContainerTouchStart: function (t) {
              this.zoomOption(t), this.touch(t, !0);
            },
            onContainerTouchMove: function (t) {
              this.touch(t);
            },
            onDocumentTouchEnd: function (i) {
              e[t.hoverChartIndex] && e[t.hoverChartIndex].pointer.drop(i);
            }
          });
        }(c), function (t) {
          var e = t.addEvent, i = t.charts, n = t.css, o = t.doc, s = t.extend, r = t.noop, a = t.Pointer, h = t.removeEvent, l = t.win, c = t.wrap;
          if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
            var d = {}, u = !!l.PointerEvent, p = function () {
                var e = [];
                return e.item = function (t) {
                  return this[t];
                }, t.objectEach(d, function (t) {
                  e.push({
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.target
                  });
                }), e;
              }, f = function (e, n, o, s) {
                'touch' !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (s(e), (s = i[t.hoverChartIndex].pointer)[n]({
                  type: o,
                  target: e.currentTarget,
                  preventDefault: r,
                  touches: p()
                }));
              };
            s(a.prototype, {
              onContainerPointerDown: function (t) {
                f(t, 'onContainerTouchStart', 'touchstart', function (t) {
                  d[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY,
                    target: t.currentTarget
                  };
                });
              },
              onContainerPointerMove: function (t) {
                f(t, 'onContainerTouchMove', 'touchmove', function (t) {
                  d[t.pointerId] = {
                    pageX: t.pageX,
                    pageY: t.pageY
                  }, d[t.pointerId].target || (d[t.pointerId].target = t.currentTarget);
                });
              },
              onDocumentPointerUp: function (t) {
                f(t, 'onDocumentTouchEnd', 'touchend', function (t) {
                  delete d[t.pointerId];
                });
              },
              batchMSEvents: function (t) {
                t(this.chart.container, u ? 'pointerdown' : 'MSPointerDown', this.onContainerPointerDown), t(this.chart.container, u ? 'pointermove' : 'MSPointerMove', this.onContainerPointerMove), t(o, u ? 'pointerup' : 'MSPointerUp', this.onDocumentPointerUp);
              }
            }), c(a.prototype, 'init', function (t, e, i) {
              t.call(this, e, i), this.hasZoom && n(e.container, {
                '-ms-touch-action': 'none',
                'touch-action': 'none'
              });
            }), c(a.prototype, 'setDOMEvents', function (t) {
              t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e);
            }), c(a.prototype, 'destroy', function (t) {
              this.batchMSEvents(h), t.call(this);
            });
          }
        }(c), function (t) {
          var e = t.addEvent, i = t.css, n = t.discardElement, o = t.defined, s = t.each, r = t.fireEvent, a = t.isFirefox, h = t.marginNames, l = t.merge, c = t.pick, d = t.setAnimation, u = t.stableSort, p = t.win, f = t.wrap;
          t.Legend = function (t, e) {
            this.init(t, e);
          }, t.Legend.prototype = {
            init: function (t, i) {
              this.chart = t, this.setOptions(i), i.enabled && (this.render(), e(this.chart, 'endResize', function () {
                this.legend.positionCheckboxes();
              }), this.proximate ? this.unchartrender = e(this.chart, 'render', function () {
                this.legend.proximatePositions(), this.legend.positionItems();
              }) : this.unchartrender && this.unchartrender());
            },
            setOptions: function (t) {
              var e = c(t.padding, 8);
              this.options = t, this.itemStyle = t.itemStyle, this.itemHiddenStyle = l(this.itemStyle, t.itemHiddenStyle), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.symbolWidth = c(t.symbolWidth, 16), this.pages = [], this.proximate = 'proximate' === t.layout && !this.chart.inverted;
            },
            update: function (t, e) {
              var i = this.chart;
              this.setOptions(l(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, c(e, !0) && i.redraw(), r(this, 'afterUpdate');
            },
            colorizeItem: function (t, e) {
              t.legendGroup[e ? 'removeClass' : 'addClass']('highcharts-legend-item-hidden');
              var i = this.options, n = t.legendItem, o = t.legendLine, s = t.legendSymbol, a = this.itemHiddenStyle.color, h = (i = e ? i.itemStyle.color : a, e && t.color || a), l = t.options && t.options.marker, c = { fill: h };
              n && n.css({
                fill: i,
                color: i
              }), o && o.attr({ stroke: h }), s && (l && s.isMarker && (c = t.pointAttribs(), e || (c.stroke = c.fill = a)), s.attr(c)), r(this, 'afterColorizeItem', {
                item: t,
                visible: e
              });
            },
            positionItems: function () {
              s(this.allItems, this.positionItem, this), this.chart.isResizing || this.positionCheckboxes();
            },
            positionItem: function (t) {
              var e = (i = this.options).symbolPadding, i = !i.rtl, n = (s = t._legendItemPos)[0], s = s[1], r = t.checkbox;
              (t = t.legendGroup) && t.element && t[o(t.translateY) ? 'animate' : 'attr']({
                translateX: i ? n : this.legendWidth - n - 2 * e - 4,
                translateY: s
              }), r && (r.x = n, r.y = s);
            },
            destroyItem: function (t) {
              var e = t.checkbox;
              s([
                'legendItem',
                'legendLine',
                'legendSymbol',
                'legendGroup'
              ], function (e) {
                t[e] && (t[e] = t[e].destroy());
              }), e && n(t.checkbox);
            },
            destroy: function () {
              function t(t) {
                this[t] && (this[t] = this[t].destroy());
              }
              s(this.getAllItems(), function (e) {
                s([
                  'legendItem',
                  'legendGroup'
                ], t, e);
              }), s('clipRect up down pager nav box title group'.split(' '), t, this), this.display = null;
            },
            positionCheckboxes: function () {
              var t, e = this.group && this.group.alignAttr, n = this.clipHeight || this.legendHeight, o = this.titleHeight;
              e && (t = e.translateY, s(this.allItems, function (s) {
                var r, a = s.checkbox;
                a && (r = t + o + a.y + (this.scrollOffset || 0) + 3, i(a, {
                  left: e.translateX + s.checkboxOffset + a.x - 20 + 'px',
                  top: r + 'px',
                  display: this.proximate || r > t - 6 && r < t + n - 6 ? '' : 'none'
                }));
              }, this));
            },
            renderTitle: function () {
              var t = this.options, e = this.padding, i = t.title, n = 0;
              i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, 'legend-title').attr({ zIndex: 1 }).css(i.style).add(this.group)), n = (t = this.title.getBBox()).height, this.offsetWidth = t.width, this.contentGroup.attr({ translateY: n })), this.titleHeight = n;
            },
            setText: function (e) {
              var i = this.options;
              e.legendItem.attr({ text: i.labelFormat ? t.format(i.labelFormat, e, this.chart.time) : i.labelFormatter.call(e) });
            },
            renderItem: function (t) {
              var e = this.chart, i = e.renderer, n = this.options, o = this.symbolWidth, s = n.symbolPadding, r = this.itemStyle, a = this.itemHiddenStyle, h = 'horizontal' === n.layout ? c(n.itemDistance, 20) : 0, d = !n.rtl, u = t.legendItem, p = !t.series, f = !p && t.series.drawLegendSymbol ? t.series : t, g = f.options, m = (h = o + s + h + ((g = this.createCheckboxForItem && g && g.showCheckbox) ? 20 : 0), n.useHTML), v = t.options.className;
              u || (t.legendGroup = i.g('legend-item').addClass('highcharts-' + f.type + '-series highcharts-color-' + t.colorIndex + (v ? ' ' + v : '') + (p ? ' highcharts-series-' + t.index : '')).attr({ zIndex: 1 }).add(this.scrollGroup), t.legendItem = u = i.text('', d ? o + s : -s, this.baseline || 0, m).css(l(t.visible ? r : a)).attr({
                align: d ? 'left' : 'right',
                zIndex: 2
              }).add(t.legendGroup), this.baseline || (o = r.fontSize, this.fontMetrics = i.fontMetrics(o, u), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, u.attr('y', this.baseline)), this.symbolHeight = n.symbolHeight || this.fontMetrics.f, f.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, u, m), g && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), r.width || u.css({ width: (n.itemWidth || n.width || e.spacingBox.width) - h }), this.setText(t), e = u.getBBox(), t.itemWidth = t.checkboxOffset = n.itemWidth || t.legendItemWidth || e.width + h, this.maxItemWidth = Math.max(this.maxItemWidth, t.itemWidth), this.totalItemWidth += t.itemWidth, this.itemHeight = t.itemHeight = Math.round(t.legendItemHeight || e.height || this.symbolHeight);
            },
            layoutItem: function (t) {
              var e = this.options, i = this.padding, n = 'horizontal' === e.layout, o = t.itemHeight, s = e.itemMarginBottom || 0, r = this.itemMarginTop, a = n ? c(e.itemDistance, 20) : 0, h = e.width, l = h || this.chart.spacingBox.width - 2 * i - e.x;
              e = e.alignColumns && this.totalItemWidth > l ? this.maxItemWidth : t.itemWidth;
              n && this.itemX - i + e > l && (this.itemX = i, this.itemY += r + this.lastLineHeight + s, this.lastLineHeight = 0), this.lastItemY = r + this.itemY + s, this.lastLineHeight = Math.max(o, this.lastLineHeight), t._legendItemPos = [
                this.itemX,
                this.itemY
              ], n ? this.itemX += e : (this.itemY += r + o + s, this.lastLineHeight = o), this.offsetWidth = h || Math.max((n ? this.itemX - i - (t.checkbox ? 0 : a) : e) + i, this.offsetWidth);
            },
            getAllItems: function () {
              var t = [];
              return s(this.chart.series, function (e) {
                var i = e && e.options;
                e && c(i.showInLegend, !o(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ('point' === i.legendType ? e.data : e)));
              }), r(this, 'afterGetAllItems', { allItems: t }), t;
            },
            getAlignment: function () {
              var t = this.options;
              return this.proximate ? t.align.charAt(0) + 'tv' : t.floating ? '' : t.align.charAt(0) + t.verticalAlign.charAt(0) + t.layout.charAt(0);
            },
            adjustMargins: function (t, e) {
              var i = this.chart, n = this.options, r = this.getAlignment();
              r && s([
                /(lth|ct|rth)/,
                /(rtv|rm|rbv)/,
                /(rbh|cb|lbh)/,
                /(lbv|lm|ltv)/
              ], function (s, a) {
                s.test(r) && !o(t[a]) && (i[h[a]] = Math.max(i[h[a]], i.legend[(a + 1) % 2 ? 'legendHeight' : 'legendWidth'] + [
                  1,
                  -1,
                  -1,
                  1
                ][a] * n[a % 2 ? 'x' : 'y'] + c(n.margin, 12) + e[a] + (0 === a && void 0 !== i.options.title.margin ? i.titleOffset + i.options.title.margin : 0)));
              });
            },
            proximatePositions: function () {
              var e = this.chart, i = [], n = 'left' === this.options.align;
              s(this.allItems, function (o) {
                var s, r;
                s = n, o.xAxis && o.points && (o.xAxis.options.reversed && (s = !s), s = t.find(s ? o.points : o.points.slice(0).reverse(), function (e) {
                  return t.isNumber(e.plotY);
                }), r = o.legendGroup.getBBox().height, i.push({
                  target: o.visible ? (s ? s.plotY : o.xAxis.height) - 0.3 * r : e.plotHeight,
                  size: r,
                  item: o
                }));
              }, this), t.distribute(i, e.plotHeight), s(i, function (t) {
                t.item._legendItemPos[1] = e.plotTop - e.spacing[0] + t.pos;
              });
            },
            render: function () {
              var t, e, i, n = this.chart, o = n.renderer, r = this.group, a = this.box, h = this.options, c = this.padding;
              this.itemX = c, this.itemY = this.initialItemY, this.lastItemY = this.offsetWidth = 0, r || (this.group = r = o.g('legend').attr({ zIndex: 7 }).add(), this.contentGroup = o.g().attr({ zIndex: 1 }).add(r), this.scrollGroup = o.g().add(this.contentGroup)), this.renderTitle(), t = this.getAllItems(), u(t, function (t, e) {
                return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0);
              }), h.reversed && t.reverse(), this.allItems = t, this.display = e = !!t.length, this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0, s(t, this.renderItem, this), s(t, this.layoutItem, this), t = (h.width || this.offsetWidth) + c, i = this.lastItemY + this.lastLineHeight + this.titleHeight, i = this.handleOverflow(i), i += c, a || (this.box = a = o.rect().addClass('highcharts-legend-box').attr({ r: h.borderRadius }).add(r), a.isNew = !0), a.attr({
                stroke: h.borderColor,
                'stroke-width': h.borderWidth || 0,
                fill: h.backgroundColor || 'none'
              }).shadow(h.shadow), 0 < t && 0 < i && (a[a.isNew ? 'attr' : 'animate'](a.crisp.call({}, {
                x: 0,
                y: 0,
                width: t,
                height: i
              }, a.strokeWidth())), a.isNew = !1), a[e ? 'show' : 'hide'](), this.legendWidth = t, this.legendHeight = i, e && (o = n.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (o = l(o, { y: o.y + n.titleOffset + n.options.title.margin })), r.align(l(h, {
                width: t,
                height: i,
                verticalAlign: this.proximate ? 'top' : h.verticalAlign
              }), !0, o)), this.proximate || this.positionItems();
            },
            handleOverflow: function (t) {
              var e, i, n = this, o = (l = this.chart).renderer, r = this.options, a = r.y, h = this.padding, l = l.spacingBox.height + ('top' === r.verticalAlign ? -a : a) - h, d = (a = r.maxHeight, this.clipRect), u = r.navigation, p = c(u.animation, !0), f = u.arrowSize || 12, g = this.nav, m = this.pages, v = this.allItems, y = function (t) {
                  'number' == typeof t ? d.attr({ height: t }) : d && (n.clipRect = d.destroy(), n.contentGroup.clip()), n.contentGroup.div && (n.contentGroup.div.style.clip = t ? 'rect(' + h + 'px,9999px,' + (h + t) + 'px,0)' : 'auto');
                };
              return 'horizontal' !== r.layout || 'middle' === r.verticalAlign || r.floating || (l /= 2), a && (l = Math.min(l, a)), m.length = 0, t > l && !1 !== u.enabled ? (this.clipHeight = e = Math.max(l - 20 - this.titleHeight - h, 0), this.currentPage = c(this.currentPage, 1), this.fullHeight = t, s(v, function (t, n) {
                var o = t._legendItemPos[1], s = Math.round(t.legendItem.getBBox().height), r = m.length;
                (!r || o - m[r - 1] > e && (i || o) !== m[r - 1]) && (m.push(i || o), r++), t.pageIx = r - 1, i && (v[n - 1].pageIx = r - 1), n === v.length - 1 && o + s - m[r - 1] > e && (m.push(o), t.pageIx = r), o !== i && (i = o);
              }), d || (d = n.clipRect = o.clipRect(0, h, 9999, 0), n.contentGroup.clip(d)), y(e), g || (this.nav = g = o.g().attr({ zIndex: 1 }).add(this.group), this.up = o.symbol('triangle', 0, 0, f, f).on('click', function () {
                n.scroll(-1, p);
              }).add(g), this.pager = o.text('', 15, 10).addClass('highcharts-legend-navigation').css(u.style).add(g), this.down = o.symbol('triangle-down', 0, 0, f, f).on('click', function () {
                n.scroll(1, p);
              }).add(g)), n.scroll(0), t = l) : g && (y(), this.nav = g.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0), t;
            },
            scroll: function (t, e) {
              var i = this.pages, n = i.length;
              t = this.currentPage + t;
              var o = this.clipHeight, s = this.options.navigation, r = this.pager, a = this.padding;
              t > n && (t = n), 0 < t && (void 0 !== e && d(e, this.chart), this.nav.attr({
                translateX: a,
                translateY: o + this.padding + 7 + this.titleHeight,
                visibility: 'visible'
              }), this.up.attr({ class: 1 === t ? 'highcharts-legend-nav-inactive' : 'highcharts-legend-nav-active' }), r.attr({ text: t + '/' + n }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                class: t === n ? 'highcharts-legend-nav-inactive' : 'highcharts-legend-nav-active'
              }), this.up.attr({ fill: 1 === t ? s.inactiveColor : s.activeColor }).css({ cursor: 1 === t ? 'default' : 'pointer' }), this.down.attr({ fill: t === n ? s.inactiveColor : s.activeColor }).css({ cursor: t === n ? 'default' : 'pointer' }), this.scrollOffset = -i[t - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = t, this.positionCheckboxes());
            }
          }, t.LegendSymbolMixin = {
            drawRectangle: function (t, e) {
              var i = t.symbolHeight, n = t.options.squareSymbol;
              e.legendSymbol = this.chart.renderer.rect(n ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, n ? i : t.symbolWidth, i, c(t.options.symbolRadius, i / 2)).addClass('highcharts-point').attr({ zIndex: 3 }).add(e.legendGroup);
            },
            drawLineMarker: function (t) {
              var e, i = this.options, n = i.marker, o = t.symbolWidth, s = t.symbolHeight, r = s / 2, a = this.chart.renderer, h = this.legendGroup;
              t = t.baseline - Math.round(0.3 * t.fontMetrics.b), e = { 'stroke-width': i.lineWidth || 0 }, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = a.path([
                'M',
                0,
                t,
                'L',
                o,
                t
              ]).addClass('highcharts-graph').attr(e).add(h), n && !1 !== n.enabled && o && (i = Math.min(c(n.radius, r), r), 0 === this.symbol.indexOf('url') && (n = l(n, {
                width: s,
                height: s
              }), i = 0), this.legendSymbol = n = a.symbol(this.symbol, o / 2 - i, t - i, 2 * i, 2 * i, n).addClass('highcharts-point').add(h), n.isMarker = !0);
            }
          }, (/Trident\/7\.0/.test(p.navigator.userAgent) || a) && f(t.Legend.prototype, 'positionItem', function (t, e) {
            var i = this, n = function () {
                e._legendItemPos && t.call(i, e);
              };
            n(), setTimeout(n);
          });
        }(c), function (t) {
          var e = t.addEvent, i = t.animate, n = t.animObject, o = t.attr, s = t.doc, r = t.Axis, a = t.createElement, h = t.defaultOptions, l = t.discardElement, c = t.charts, d = t.css, u = t.defined, p = t.each, f = t.extend, g = t.find, m = t.fireEvent, v = t.grep, y = t.isNumber, x = t.isObject, b = t.isString, w = t.Legend, k = t.marginNames, S = t.merge, M = t.objectEach, A = t.Pointer, T = t.pick, C = t.pInt, L = t.removeEvent, P = t.seriesTypes, O = t.splat, D = t.syncTimeout, E = t.win, I = t.Chart = function () {
              this.getArgs.apply(this, arguments);
            };
          t.chart = function (t, e, i) {
            return new I(t, e, i);
          }, f(I.prototype, {
            callbacks: [],
            getArgs: function () {
              var t = [].slice.call(arguments);
              (b(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1]);
            },
            init: function (i, n) {
              var o, s, r = i.series, a = i.plotOptions || {};
              m(this, 'init', { args: arguments }, function () {
                for (s in (i.series = null, (o = S(h, i)).plotOptions))
                  o.plotOptions[s].tooltip = a[s] && S(a[s].tooltip) || void 0;
                o.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip, o.series = i.series = r, this.userOptions = i;
                var l = o.chart, d = l.events;
                this.margin = [], this.spacing = [], this.bounds = {
                  h: {},
                  v: {}
                }, this.labelCollectors = [], this.callback = n, this.isResizing = 0, this.options = o, this.axes = [], this.series = [], this.time = i.time && t.keys(i.time).length ? new t.Time(i.time) : t.time, this.hasCartesianSeries = l.showAxes;
                var u = this;
                u.index = c.length, c.push(u), t.chartCount++, d && M(d, function (t, i) {
                  e(u, i, t);
                }), u.xAxis = [], u.yAxis = [], u.pointCount = u.colorCounter = u.symbolCounter = 0, m(u, 'afterInit'), u.firstRender();
              });
            },
            initSeries: function (e) {
              var i = this.options.chart;
              return (i = P[e.type || i.type || i.defaultSeriesType]) || t.error(17, !0), (i = new i()).init(this, e), i;
            },
            orderSeries: function (t) {
              var e = this.series;
              for (t = t || 0; t < e.length; t++)
                e[t] && (e[t].index = t, e[t].name = e[t].getName());
            },
            isInsidePlot: function (t, e, i) {
              var n = i ? e : t;
              return t = i ? t : e, 0 <= n && n <= this.plotWidth && 0 <= t && t <= this.plotHeight;
            },
            redraw: function (e) {
              m(this, 'beforeRedraw');
              var i, n, o, s = this.axes, r = this.series, a = this.pointer, h = this.legend, l = this.userOptions.legend, c = this.isDirtyLegend, d = this.hasCartesianSeries, u = this.isDirtyBox, g = this.renderer, v = g.isHidden(), y = [];
              for (this.setResponsive && this.setResponsive(!1), t.setAnimation(e, this), v && this.temporaryDisplay(), this.layOutTitles(), e = r.length; e--;)
                if ((o = r[e]).options.stacking && (i = !0, o.isDirty)) {
                  n = !0;
                  break;
                }
              if (n)
                for (e = r.length; e--;)
                  (o = r[e]).options.stacking && (o.isDirty = !0);
              p(r, function (t) {
                t.isDirty && ('point' === t.options.legendType ? (t.updateTotals && t.updateTotals(), c = !0) : l && (l.labelFormatter || l.labelFormat) && (c = !0)), t.isDirtyData && m(t, 'updatedData');
              }), c && h && h.options.enabled && (h.render(), this.isDirtyLegend = !1), i && this.getStacks(), d && p(s, function (t) {
                t.updateNames(), t.updateYNames && t.updateYNames(), t.setScale();
              }), this.getMargins(), d && (p(s, function (t) {
                t.isDirty && (u = !0);
              }), p(s, function (t) {
                var e = t.min + ',' + t.max;
                t.extKey !== e && (t.extKey = e, y.push(function () {
                  m(t, 'afterSetExtremes', f(t.eventArgs, t.getExtremes())), delete t.eventArgs;
                })), (u || i) && t.redraw();
              })), u && this.drawChartBox(), m(this, 'predraw'), p(r, function (t) {
                (u || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1;
              }), a && a.reset(!0), g.draw(), m(this, 'redraw'), m(this, 'render'), v && this.temporaryDisplay(!0), p(y, function (t) {
                t.call();
              });
            },
            get: function (t) {
              function e(e) {
                return e.id === t || e.options && e.options.id === t;
              }
              var i, n, o = this.series;
              for (i = g(this.axes, e) || g(this.series, e), n = 0; !i && n < o.length; n++)
                i = g(o[n].points || [], e);
              return i;
            },
            getAxes: function () {
              var t = this, e = (i = this.options).xAxis = O(i.xAxis || {}), i = i.yAxis = O(i.yAxis || {});
              m(this, 'getAxes'), p(e, function (t, e) {
                t.index = e, t.isX = !0;
              }), p(i, function (t, e) {
                t.index = e;
              }), e = e.concat(i), p(e, function (e) {
                new r(t, e);
              }), m(this, 'afterGetAxes');
            },
            getSelectedPoints: function () {
              var t = [];
              return p(this.series, function (e) {
                t = t.concat(v(e.data || [], function (t) {
                  return t.selected;
                }));
              }), t;
            },
            getSelectedSeries: function () {
              return v(this.series, function (t) {
                return t.selected;
              });
            },
            setTitle: function (t, e, i) {
              var n, o = this, s = o.options;
              n = s.title = S({
                style: {
                  color: '#333333',
                  fontSize: s.isStock ? '16px' : '18px'
                }
              }, s.title, t), s = s.subtitle = S({ style: { color: '#666666' } }, s.subtitle, e), p([
                [
                  'title',
                  t,
                  n
                ],
                [
                  'subtitle',
                  e,
                  s
                ]
              ], function (t, e) {
                var i = t[0], n = o[i], s = t[1];
                t = t[2], n && s && (o[i] = n = n.destroy()), t && !n && (o[i] = o.renderer.text(t.text, 0, 0, t.useHTML).attr({
                  align: t.align,
                  class: 'highcharts-' + i,
                  zIndex: t.zIndex || 4
                }).add(), o[i].update = function (t) {
                  o.setTitle(!e && t, e && t);
                }, o[i].css(t.style));
              }), o.layOutTitles(i);
            },
            layOutTitles: function (t) {
              var e, i = 0, n = this.renderer, o = this.spacingBox;
              p([
                'title',
                'subtitle'
              ], function (t) {
                var e, s = this[t], r = this.options[t];
                t = 'title' === t ? -3 : r.verticalAlign ? 0 : i + 2, s && (e = r.style.fontSize, e = n.fontMetrics(e, s).b, s.css({ width: (r.width || o.width + r.widthAdjust) + 'px' }).align(f({ y: t + e }, r), !1, 'spacingBox'), r.floating || r.verticalAlign || (i = Math.ceil(i + s.getBBox(r.useHTML).height)));
              }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && T(t, !0) && this.isDirtyBox && this.redraw());
            },
            getChartSize: function () {
              var e = (i = this.options.chart).width, i = i.height, n = this.renderTo;
              u(e) || (this.containerWidth = t.getStyle(n, 'width')), u(i) || (this.containerHeight = t.getStyle(n, 'height')), this.chartWidth = Math.max(0, e || this.containerWidth || 600), this.chartHeight = Math.max(0, t.relativeLength(i, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
            },
            temporaryDisplay: function (e) {
              var i = this.renderTo;
              if (e)
                for (; i && i.style;)
                  i.hcOrigStyle && (t.css(i, i.hcOrigStyle), delete i.hcOrigStyle), i.hcOrigDetached && (s.body.removeChild(i), i.hcOrigDetached = !1), i = i.parentNode;
              else
                for (; i && i.style && (s.body.contains(i) || i.parentNode || (i.hcOrigDetached = !0, s.body.appendChild(i)), ('none' === t.getStyle(i, 'display', !1) || i.hcOricDetached) && (i.hcOrigStyle = {
                    display: i.style.display,
                    height: i.style.height,
                    overflow: i.style.overflow
                  }, e = {
                    display: 'block',
                    overflow: 'hidden'
                  }, i !== this.renderTo && (e.height = 0), t.css(i, e), i.offsetWidth || i.style.setProperty('display', 'block', 'important')), (i = i.parentNode) !== s.body););
            },
            setClassName: function (t) {
              this.container.className = 'highcharts-container ' + (t || '');
            },
            getContainer: function () {
              var e, i, n, r = this.options, h = r.chart;
              e = this.renderTo;
              var l, d = t.uniqueKey();
              e || (this.renderTo = e = h.renderTo), b(e) && (this.renderTo = e = s.getElementById(e)), e || t.error(13, !0), i = C(o(e, 'data-highcharts-chart')), y(i) && c[i] && c[i].hasRendered && c[i].destroy(), o(e, 'data-highcharts-chart', this.index), e.innerHTML = '', h.skipClone || e.offsetWidth || this.temporaryDisplay(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, l = f({
                position: 'relative',
                overflow: 'hidden',
                width: i + 'px',
                height: n + 'px',
                textAlign: 'left',
                lineHeight: 'normal',
                zIndex: 0,
                '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
              }, h.style), this.container = e = a('div', { id: d }, l, e), this._cursor = e.style.cursor, this.renderer = new (t[h.renderer] || t.Renderer)(e, i, n, null, h.forExport, r.exporting && r.exporting.allowHTML), this.setClassName(h.className), this.renderer.setStyle(h.style), this.renderer.chartIndex = this.index, m(this, 'afterGetContainer');
            },
            getMargins: function (t) {
              var e = this.spacing, i = this.margin, n = this.titleOffset;
              this.resetMargins(), n && !u(i[0]) && (this.plotTop = Math.max(this.plotTop, n + this.options.title.margin + e[0])), this.legend && this.legend.display && this.legend.adjustMargins(i, e), m(this, 'getMargins'), t || this.getAxisMargins();
            },
            getAxisMargins: function () {
              var t = this, e = t.axisOffset = [
                  0,
                  0,
                  0,
                  0
                ], i = t.margin;
              t.hasCartesianSeries && p(t.axes, function (t) {
                t.visible && t.getOffset();
              }), p(k, function (n, o) {
                u(i[o]) || (t[n] += e[o]);
              }), t.setChartSize();
            },
            reflow: function (e) {
              var i = this, n = i.options.chart, o = i.renderTo, r = u(n.width) && u(n.height), a = n.width || t.getStyle(o, 'width');
              n = n.height || t.getStyle(o, 'height'), o = e ? e.target : E;
              r || i.isPrinting || !a || !n || o !== E && o !== s || (a === i.containerWidth && n === i.containerHeight || (t.clearTimeout(i.reflowTimeout), i.reflowTimeout = D(function () {
                i.container && i.setSize(void 0, void 0, !1);
              }, e ? 100 : 0)), i.containerWidth = a, i.containerHeight = n);
            },
            setReflow: function (t) {
              var i = this;
              !1 === t || this.unbindReflow ? !1 === t && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = e(E, 'resize', function (t) {
                i.reflow(t);
              }), e(this, 'destroy', this.unbindReflow));
            },
            setSize: function (e, o, s) {
              var r = this, a = r.renderer;
              r.isResizing += 1, t.setAnimation(s, r), r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, void 0 !== e && (r.options.chart.width = e), void 0 !== o && (r.options.chart.height = o), r.getChartSize(), ((e = a.globalAnimation) ? i : d)(r.container, {
                width: r.chartWidth + 'px',
                height: r.chartHeight + 'px'
              }, e), r.setChartSize(!0), a.setSize(r.chartWidth, r.chartHeight, s), p(r.axes, function (t) {
                t.isDirty = !0, t.setScale();
              }), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.layOutTitles(), r.getMargins(), r.redraw(s), r.oldChartHeight = null, m(r, 'resize'), D(function () {
                r && m(r, 'endResize', null, function () {
                  --r.isResizing;
                });
              }, n(e).duration);
            },
            setChartSize: function (t) {
              var e, i, n, o, s = this.inverted, r = this.renderer, a = this.chartWidth, h = this.chartHeight, l = this.options.chart, c = this.spacing, d = this.clipOffset;
              this.plotLeft = e = Math.round(this.plotLeft), this.plotTop = i = Math.round(this.plotTop), this.plotWidth = n = Math.max(0, Math.round(a - e - this.marginRight)), this.plotHeight = o = Math.max(0, Math.round(h - i - this.marginBottom)), this.plotSizeX = s ? o : n, this.plotSizeY = s ? n : o, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
                x: c[3],
                y: c[0],
                width: a - c[3] - c[1],
                height: h - c[0] - c[2]
              }, this.plotBox = r.plotBox = {
                x: e,
                y: i,
                width: n,
                height: o
              }, a = 2 * Math.floor(this.plotBorderWidth / 2), s = Math.ceil(Math.max(a, d[3]) / 2), r = Math.ceil(Math.max(a, d[0]) / 2), this.clipBox = {
                x: s,
                y: r,
                width: Math.floor(this.plotSizeX - Math.max(a, d[1]) / 2 - s),
                height: Math.max(0, Math.floor(this.plotSizeY - Math.max(a, d[2]) / 2 - r))
              }, t || p(this.axes, function (t) {
                t.setAxisSize(), t.setAxisTranslation();
              }), m(this, 'afterSetChartSize', { skipAxes: t });
            },
            resetMargins: function () {
              var t = this, e = t.options.chart;
              p([
                'margin',
                'spacing'
              ], function (i) {
                var n = e[i], o = x(n) ? n : [
                    n,
                    n,
                    n,
                    n
                  ];
                p([
                  'Top',
                  'Right',
                  'Bottom',
                  'Left'
                ], function (n, s) {
                  t[i][s] = T(e[i + n], o[s]);
                });
              }), p(k, function (e, i) {
                t[e] = T(t.margin[i], t.spacing[i]);
              }), t.axisOffset = [
                0,
                0,
                0,
                0
              ], t.clipOffset = [
                0,
                0,
                0,
                0
              ];
            },
            drawChartBox: function () {
              var t, e, i = this.options.chart, n = this.renderer, o = this.chartWidth, s = this.chartHeight, r = this.chartBackground, a = this.plotBackground, h = this.plotBorder, l = this.plotBGImage, c = i.backgroundColor, d = i.plotBackgroundColor, u = i.plotBackgroundImage, p = this.plotLeft, f = this.plotTop, g = this.plotWidth, v = this.plotHeight, y = this.plotBox, x = this.clipRect, b = this.clipBox, w = 'animate';
              r || (this.chartBackground = r = n.rect().addClass('highcharts-background').add(), w = 'attr'), e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0), c = { fill: c || 'none' }, (t || r['stroke-width']) && (c.stroke = i.borderColor, c['stroke-width'] = t), r.attr(c).shadow(i.shadow), r[w]({
                x: e / 2,
                y: e / 2,
                width: o - e - t % 2,
                height: s - e - t % 2,
                r: i.borderRadius
              }), w = 'animate', a || (w = 'attr', this.plotBackground = a = n.rect().addClass('highcharts-plot-background').add()), a[w](y), a.attr({ fill: d || 'none' }).shadow(i.plotShadow), u && (l ? l.animate(y) : this.plotBGImage = n.image(u, p, f, g, v).add()), x ? x.animate({
                width: b.width,
                height: b.height
              }) : this.clipRect = n.clipRect(b), w = 'animate', h || (w = 'attr', this.plotBorder = h = n.rect().addClass('highcharts-plot-border').attr({ zIndex: 1 }).add()), h.attr({
                stroke: i.plotBorderColor,
                'stroke-width': i.plotBorderWidth || 0,
                fill: 'none'
              }), h[w](h.crisp({
                x: p,
                y: f,
                width: g,
                height: v
              }, -h.strokeWidth())), this.isDirtyBox = !1, m(this, 'afterDrawChartBox');
            },
            propFromSeries: function () {
              var t, e, i, n = this, o = n.options.chart, s = n.options.series;
              p([
                'inverted',
                'angular',
                'polar'
              ], function (r) {
                for (t = P[o.type || o.defaultSeriesType], i = o[r] || t && t.prototype[r], e = s && s.length; !i && e--;)
                  (t = P[s[e].type]) && t.prototype[r] && (i = !0);
                n[r] = i;
              });
            },
            linkSeries: function () {
              var t = this, e = t.series;
              p(e, function (t) {
                t.linkedSeries.length = 0;
              }), p(e, function (e) {
                var i = e.options.linkedTo;
                b(i) && (i = ':previous' === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = T(e.options.visible, i.options.visible, e.visible));
              }), m(this, 'afterLinkSeries');
            },
            renderSeries: function () {
              p(this.series, function (t) {
                t.translate(), t.render();
              });
            },
            renderLabels: function () {
              var t = this, e = t.options.labels;
              e.items && p(e.items, function (i) {
                var n = f(e.style, i.style), o = C(n.left) + t.plotLeft, s = C(n.top) + t.plotTop + 12;
                delete n.left, delete n.top, t.renderer.text(i.html, o, s).attr({ zIndex: 2 }).css(n).add();
              });
            },
            render: function () {
              var t, e, i, n = this.axes, o = this.renderer, s = this.options;
              this.setTitle(), this.legend = new w(this, s.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), s = this.plotWidth, t = this.plotHeight = Math.max(this.plotHeight - 21, 0), p(n, function (t) {
                t.setScale();
              }), this.getAxisMargins(), e = 1.1 < s / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (p(n, function (t) {
                (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0);
              }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && p(n, function (t) {
                t.visible && t.render();
              }), this.seriesGroup || (this.seriesGroup = o.g('series-group').attr({ zIndex: 3 }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0;
            },
            addCredits: function (t) {
              var e = this;
              (t = S(!0, this.options.credits, t)).enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ''), 0, 0).addClass('highcharts-credits').on('click', function () {
                t.href && (E.location.href = t.href);
              }).attr({
                align: t.position.align,
                zIndex: 8
              }).css(t.style).add().align(t.position), this.credits.update = function (t) {
                e.credits = e.credits.destroy(), e.addCredits(t);
              });
            },
            destroy: function () {
              var e, i = this, n = i.axes, o = i.series, s = i.container, r = s && s.parentNode;
              for (m(i, 'destroy'), i.renderer.forExport ? t.erase(c, i) : c[i.index] = void 0, t.chartCount--, i.renderTo.removeAttribute('data-highcharts-chart'), L(i), e = n.length; e--;)
                n[e] = n[e].destroy();
              for (this.scroller && this.scroller.destroy && this.scroller.destroy(), e = o.length; e--;)
                o[e] = o[e].destroy();
              p('title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer'.split(' '), function (t) {
                var e = i[t];
                e && e.destroy && (i[t] = e.destroy());
              }), s && (s.innerHTML = '', L(s), r && l(s)), M(i, function (t, e) {
                delete i[e];
              });
            },
            firstRender: function () {
              var t = this, e = t.options;
              t.isReadyToRender && !t.isReadyToRender() || (t.getContainer(), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), p(e.series || [], function (e) {
                t.initSeries(e);
              }), t.linkSeries(), m(t, 'beforeRender'), A && (t.pointer = new A(t, e)), t.render(), !t.renderer.imgCount && t.onload && t.onload(), t.temporaryDisplay(!0));
            },
            onload: function () {
              p([this.callback].concat(this.callbacks), function (t) {
                t && void 0 !== this.index && t.apply(this, [this]);
              }, this), m(this, 'load'), m(this, 'render'), u(this.index) && this.setReflow(this.options.chart.reflow), this.onload = null;
            }
          });
        }(c), function (t) {
          var e = t.addEvent, i = t.Chart, n = t.each;
          e(i, 'afterSetChartSize', function (e) {
            var i = this.options.chart.scrollablePlotArea;
            (i = i && i.minWidth) && !this.renderer.forExport && (this.scrollablePixels = i = Math.max(0, i - this.chartWidth)) && (this.plotWidth += i, this.clipBox.width += i, e.skipAxes || n(this.axes, function (e) {
              1 === e.side ? e.getPlotLinePath = function () {
                var i, n = this.right;
                return this.right = n - e.chart.scrollablePixels, i = t.Axis.prototype.getPlotLinePath.apply(this, arguments), this.right = n, i;
              } : (e.setAxisSize(), e.setAxisTranslation());
            }));
          }), e(i, 'render', function () {
            this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
          }), i.prototype.setUpScrolling = function () {
            this.scrollingContainer = t.createElement('div', { className: 'highcharts-scrolling' }, {
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch'
            }, this.renderTo), this.innerContainer = t.createElement('div', { className: 'highcharts-inner-container' }, null, this.scrollingContainer), this.innerContainer.appendChild(this.container), this.setUpScrolling = null;
          }, i.prototype.applyFixed = function () {
            var e, i, n = this.container;
            (o = !this.fixedDiv) && (this.fixedDiv = t.createElement('div', { className: 'highcharts-fixed' }, {
              position: 'absolute',
              overflow: 'hidden',
              pointerEvents: 'none',
              zIndex: 2
            }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.fixedRenderer = e = new t.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = e.path().attr({
              fill: t.color(this.options.chart.backgroundColor || '#fff').setOpacity(0.85).get(),
              zIndex: -1
            }).addClass('highcharts-scrollable-mask').add(), t.each([
              this.inverted ? '.highcharts-xaxis' : '.highcharts-yaxis',
              this.inverted ? '.highcharts-xaxis-labels' : '.highcharts-yaxis-labels',
              '.highcharts-contextbutton',
              '.highcharts-credits',
              '.highcharts-legend',
              '.highcharts-subtitle',
              '.highcharts-title',
              '.highcharts-legend-checkbox'
            ], function (i) {
              t.each(n.querySelectorAll(i), function (t) {
                (t.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(t), t.style.pointerEvents = 'auto';
              });
            })), this.fixedRenderer.setSize(this.chartWidth, this.chartHeight), i = this.chartWidth + this.scrollablePixels, t.stop(this.container), this.container.style.width = i + 'px', this.renderer.boxWrapper.attr({
              width: i,
              height: this.chartHeight,
              viewBox: [
                0,
                0,
                i,
                this.chartHeight
              ].join(' ')
            }), this.chartBackground.attr({ width: i }), o && ((i = this.options.chart.scrollablePlotArea).scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * i.scrollPositionX)), o = this.axisOffset, i = this.plotTop - o[0] - 1;
            var o = this.plotTop + this.plotHeight + o[2], s = this.plotLeft + this.plotWidth - this.scrollablePixels;
            this.scrollableMask.attr({
              d: this.scrollablePixels ? [
                'M',
                0,
                i,
                'L',
                this.plotLeft - 1,
                i,
                'L',
                this.plotLeft - 1,
                o,
                'L',
                0,
                o,
                'Z',
                'M',
                s,
                i,
                'L',
                this.chartWidth,
                i,
                'L',
                this.chartWidth,
                o,
                'L',
                s,
                o,
                'Z'
              ] : [
                'M',
                0,
                0
              ]
            });
          };
        }(c), function (t) {
          var e, i = t.each, n = t.extend, s = t.erase, r = t.fireEvent, a = t.format, h = t.isArray, l = t.isNumber, c = t.pick, d = t.uniqueKey, u = t.defined, p = t.removeEvent;
          t.Point = e = function () {
          }, t.Point.prototype = {
            init: function (t, e, i) {
              return this.series = t, this.color = t.color, this.applyOptions(e, i), this.id = u(this.id) ? this.id : d(), t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length, i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = c(this.colorIndex, i), t.chart.pointCount++, r(this, 'afterInit'), this;
            },
            applyOptions: function (t, i) {
              var o = this.series, s = o.options.pointValKey || o.pointValKey;
              return t = e.prototype.optionsToObject.call(this, t), n(this, t), this.options = this.options ? n(this.options, t) : t, t.group && delete this.group, t.dataLabels && delete this.dataLabels, s && (this.y = this[s]), this.isNull = c(this.isValid && !this.isValid(), null === this.x || !l(this.y, !0)), this.selected && (this.state = 'select'), 'name' in this && void 0 === i && o.xAxis && o.xAxis.hasNames && (this.x = o.xAxis.nameToX(this)), void 0 === this.x && o && (this.x = void 0 === i ? o.autoIncrement(this) : i), this;
            },
            setNestedProperty: function (e, i, n) {
              return n = n.split('.'), t.reduce(n, function (e, n, o, s) {
                return e[n] = s.length - 1 === o ? i : t.isObject(e[n], !0) ? e[n] : {}, e[n];
              }, e), e;
            },
            optionsToObject: function (e) {
              var i = {}, n = this.series, s = n.options.keys, r = s || n.pointArrayMap || ['y'], a = r.length, c = 0, d = 0;
              if (l(e) || null === e)
                i[r[0]] = e;
              else if (h(e))
                for (!s && e.length > a && ('string' === (n = o(e[0])) ? i.name = e[0] : 'number' === n && (i.x = e[0]), c++); d < a;)
                  s && void 0 === e[c] || (0 < r[d].indexOf('.') ? t.Point.prototype.setNestedProperty(i, e[c], r[d]) : i[r[d]] = e[c]), c++, d++;
              else
                'object' === o(e) && (i = e, e.dataLabels && (n._hasPointLabels = !0), e.marker && (n._hasPointMarkers = !0));
              return i;
            },
            getClassName: function () {
              return 'highcharts-point' + (this.selected ? ' highcharts-point-select' : '') + (this.negative ? ' highcharts-negative' : '') + (this.isNull ? ' highcharts-null-point' : '') + (void 0 !== this.colorIndex ? ' highcharts-color-' + this.colorIndex : '') + (this.options.className ? ' ' + this.options.className : '') + (this.zone && this.zone.className ? ' ' + this.zone.className.replace('highcharts-negative', '') : '');
            },
            getZone: function () {
              var t, e = (i = this.series).zones, i = i.zoneAxis || 'y', n = 0;
              for (t = e[n]; this[i] >= t.value;)
                t = e[++n];
              return this.nonZonedColor || (this.nonZonedColor = this.color), this.color = t && t.color && !this.options.color ? t.color : this.nonZonedColor, t;
            },
            destroy: function () {
              var t, e = this.series.chart, i = e.hoverPoints;
              for (t in (e.pointCount--, i && (this.setState(), s(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel || this.dataLabels) && (p(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this), this))
                this[t] = null;
            },
            destroyElements: function () {
              for (var t, e = [
                    'graphic',
                    'dataLabel',
                    'dataLabelUpper',
                    'connector',
                    'shadowGroup'
                  ], n = 6; n--;)
                this[t = e[n]] && (this[t] = this[t].destroy());
              this.dataLabels && (i(this.dataLabels, function (t) {
                t.element && t.destroy();
              }), delete this.dataLabels), this.connectors && (i(this.connectors, function (t) {
                t.element && t.destroy();
              }), delete this.connectors);
            },
            getLabelConfig: function () {
              return {
                x: this.category,
                y: this.y,
                color: this.color,
                colorIndex: this.colorIndex,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
              };
            },
            tooltipFormatter: function (t) {
              var e = this.series, n = e.tooltipOptions, o = c(n.valueDecimals, ''), s = n.valuePrefix || '', r = n.valueSuffix || '';
              return i(e.pointArrayMap || ['y'], function (e) {
                e = '{point.' + e, (s || r) && (t = t.replace(RegExp(e + '}', 'g'), s + e + '}' + r)), t = t.replace(RegExp(e + '}', 'g'), e + ':,.' + o + 'f}');
              }), a(t, {
                point: this,
                series: this.series
              }, e.chart.time);
            },
            firePointEvent: function (t, e, i) {
              var n = this, o = this.series.options;
              (o.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), 'click' === t && o.allowPointSelect && (i = function (t) {
                n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey);
              }), r(this, t, e, i);
            },
            visible: !0
          };
        }(c), function (t) {
          var e = t.addEvent, i = t.animObject, n = t.arrayMax, o = t.arrayMin, s = t.correctFloat, r = t.defaultOptions, a = t.defaultPlotOptions, h = t.defined, l = t.each, c = t.erase, d = t.extend, u = t.fireEvent, p = t.grep, f = t.isArray, g = t.isNumber, m = t.isString, v = t.merge, y = t.objectEach, x = t.pick, b = t.removeEvent, w = t.splat, k = t.SVGElement, S = t.syncTimeout, M = t.win;
          t.Series = t.seriesType('line', null, {
            lineWidth: 2,
            allowPointSelect: !1,
            showCheckbox: !1,
            animation: { duration: 1000 },
            events: {},
            marker: {
              lineWidth: 0,
              lineColor: '#ffffff',
              enabledThreshold: 2,
              radius: 4,
              states: {
                normal: { animation: !0 },
                hover: {
                  animation: { duration: 50 },
                  enabled: !0,
                  radiusPlus: 2,
                  lineWidthPlus: 1
                },
                select: {
                  fillColor: '#cccccc',
                  lineColor: '#000000',
                  lineWidth: 2
                }
              }
            },
            point: { events: {} },
            dataLabels: {
              align: 'center',
              formatter: function () {
                return null === this.y ? '' : t.numberFormat(this.y, -1);
              },
              style: {
                fontSize: '11px',
                fontWeight: 'bold',
                color: 'contrast',
                textOutline: '1px contrast'
              },
              verticalAlign: 'bottom',
              x: 0,
              y: 0,
              padding: 5
            },
            cropThreshold: 300,
            pointRange: 0,
            softThreshold: !0,
            states: {
              normal: { animation: !0 },
              hover: {
                animation: { duration: 50 },
                lineWidthPlus: 1,
                marker: {},
                halo: {
                  size: 10,
                  opacity: 0.25
                }
              },
              select: {}
            },
            stickyTracking: !0,
            turboThreshold: 1000,
            findNearestPointBy: 'x'
          }, {
            isCartesian: !0,
            pointClass: t.Point,
            sorted: !0,
            requireSorting: !0,
            directTouch: !1,
            axisTypes: [
              'xAxis',
              'yAxis'
            ],
            colorCounter: 0,
            parallelArrays: [
              'x',
              'y'
            ],
            coll: 'series',
            init: function (t, i) {
              var n, o, s = this, r = t.series;
              s.chart = t, s.options = i = s.setOptions(i), s.linkedSeries = [], s.bindAxes(), d(s, {
                name: i.name,
                state: '',
                visible: !1 !== i.visible,
                selected: !0 === i.selected
              }), n = i.events, y(n, function (t, i) {
                e(s, i, t);
              }), (n && n.click || i.point && i.point.events && i.point.events.click || i.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), l(s.parallelArrays, function (t) {
                s[t + 'Data'] = [];
              }), s.setData(i.data, !1), s.isCartesian && (t.hasCartesianSeries = !0), r.length && (o = r[r.length - 1]), s._i = x(o && o._i, -1) + 1, t.orderSeries(this.insert(r)), u(this, 'afterInit');
            },
            insert: function (t) {
              var e, i = this.options.index;
              if (g(i)) {
                for (e = t.length; e--;)
                  if (i >= x(t[e].options.index, t[e]._i)) {
                    t.splice(e + 1, 0, this);
                    break;
                  }
                -1 === e && t.unshift(this), e += 1;
              } else
                t.push(this);
              return x(e, t.length - 1);
            },
            bindAxes: function () {
              var e, i = this, n = i.options, o = i.chart;
              l(i.axisTypes || [], function (s) {
                l(o[s], function (t) {
                  e = t.options, (n[s] === e.index || void 0 !== n[s] && n[s] === e.id || void 0 === n[s] && 0 === e.index) && (i.insert(t.series), i[s] = t, t.isDirty = !0);
                }), i[s] || i.optionalAxis === s || t.error(18, !0);
              });
            },
            updateParallelArrays: function (t, e) {
              var i = t.series, n = arguments, o = g(e) ? function (n) {
                  var o = 'y' === n && i.toYData ? i.toYData(t) : t[n];
                  i[n + 'Data'][e] = o;
                } : function (t) {
                  Array.prototype[e].apply(i[t + 'Data'], Array.prototype.slice.call(n, 2));
                };
              l(i.parallelArrays, o);
            },
            autoIncrement: function () {
              var t, e = this.options, i = this.xIncrement, n = e.pointIntervalUnit, o = this.chart.time;
              i = x(i, e.pointStart, 0);
              return this.pointInterval = t = x(this.pointInterval, e.pointInterval, 1), n && (e = new o.Date(i), 'day' === n ? o.set('Date', e, o.get('Date', e) + t) : 'month' === n ? o.set('Month', e, o.get('Month', e) + t) : 'year' === n && o.set('FullYear', e, o.get('FullYear', e) + t), t = e.getTime() - i), this.xIncrement = i + t, i;
            },
            setOptions: function (t) {
              var e = this.chart, i = e.options, n = i.plotOptions, o = (e.userOptions || {}).plotOptions || {}, s = n[this.type];
              return this.userOptions = t, e = v(s, n.series, t), this.tooltipOptions = v(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, i.tooltip.userOptions, n.series && n.series.tooltip, n[this.type].tooltip, t.tooltip), this.stickyTracking = x(t.stickyTracking, o[this.type] && o[this.type].stickyTracking, o.series && o.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === s.marker && delete e.marker, this.zoneAxis = e.zoneAxis, t = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                value: e[this.zoneAxis + 'Threshold'] || e.threshold || 0,
                className: 'highcharts-negative',
                color: e.negativeColor,
                fillColor: e.negativeFillColor
              }), t.length && h(t[t.length - 1].value) && t.push({
                color: this.color,
                fillColor: this.fillColor
              }), u(this, 'afterSetOptions', { options: e }), e;
            },
            getName: function () {
              return this.name || 'Series ' + (this.index + 1);
            },
            getCyclic: function (t, e, i) {
              var n, o = this.chart, s = this.userOptions, r = t + 'Index', a = t + 'Counter', l = i ? i.length : x(o.options.chart[t + 'Count'], o[t + 'Count']);
              e || (n = x(s[r], s['_' + r]), h(n) || (o.series.length || (o[a] = 0), s['_' + r] = n = o[a] % l, o[a] += 1), i && (e = i[n])), void 0 !== n && (this[r] = n), this[t] = e;
            },
            getColor: function () {
              this.options.colorByPoint ? this.options.color = null : this.getCyclic('color', this.options.color || a[this.type].color, this.chart.options.colors);
            },
            getSymbol: function () {
              this.getCyclic('symbol', this.options.marker.symbol, this.chart.options.symbols);
            },
            drawLegendSymbol: t.LegendSymbolMixin.drawLineMarker,
            updateData: function (e) {
              var i, n, o, s = this.options, r = this.points, a = [], h = this.requireSorting;
              if (l(e, function (e) {
                  var n;
                  n = t.defined(e) && this.pointClass.prototype.optionsToObject.call({ series: this }, e).x, g(n) && (-1 === (n = t.inArray(n, this.xData, o)) || r[n].touched ? a.push(e) : e !== s.data[n] ? (r[n].update(e, !1, null, !1), r[n].touched = !0, h && (o = n + 1)) : r[n] && (r[n].touched = !0), i = !0);
                }, this), i)
                for (e = r.length; e--;)
                  (n = r[e]).touched || n.remove(!1), n.touched = !1;
              else {
                if (e.length !== r.length)
                  return !1;
                l(e, function (t, e) {
                  r[e].update && t !== s.data[e] && r[e].update(t, !1, null, !1);
                });
              }
              return l(a, function (t) {
                this.addPoint(t, !1);
              }, this), !0;
            },
            setData: function (e, i, n, o) {
              var s, r, a = this, h = a.points, c = h && h.length || 0, d = a.options, u = a.chart, p = null, v = a.xAxis, y = d.turboThreshold, b = this.xData, w = this.yData, k = (s = a.pointArrayMap) && s.length;
              if (s = (e = e || []).length, i = x(i, !0), !1 !== o && s && c && !a.cropped && !a.hasGroupedData && a.visible && !a.isSeriesBoosting && (r = this.updateData(e)), !r) {
                if (a.xIncrement = null, a.colorCounter = 0, l(this.parallelArrays, function (t) {
                    a[t + 'Data'].length = 0;
                  }), y && s > y) {
                  for (n = 0; null === p && n < s;)
                    p = e[n], n++;
                  if (g(p))
                    for (n = 0; n < s; n++)
                      b[n] = this.autoIncrement(), w[n] = e[n];
                  else if (f(p))
                    if (k)
                      for (n = 0; n < s; n++)
                        p = e[n], b[n] = p[0], w[n] = p.slice(1, k + 1);
                    else
                      for (n = 0; n < s; n++)
                        p = e[n], b[n] = p[0], w[n] = p[1];
                  else
                    t.error(12);
                } else
                  for (n = 0; n < s; n++)
                    void 0 !== e[n] && (p = { series: a }, a.pointClass.prototype.applyOptions.apply(p, [e[n]]), a.updateParallelArrays(p, n));
                for (w && m(w[0]) && t.error(14, !0), a.data = [], a.options.data = a.userOptions.data = e, n = c; n--;)
                  h[n] && h[n].destroy && h[n].destroy();
                v && (v.minRange = v.userMinRange), a.isDirty = u.isDirtyBox = !0, a.isDirtyData = !!h, n = !1;
              }
              'point' === d.legendType && (this.processData(), this.generatePoints()), i && u.redraw(n);
            },
            processData: function (e) {
              var i, n = this.xData, o = this.yData, s = n.length;
              i = 0;
              var r, a, h, l = this.xAxis;
              h = (f = this.options).cropThreshold;
              var c, d, u = this.getExtremesFromAll || f.getExtremesFromAll, p = this.isCartesian, f = l && l.val2lin, g = l && l.isLog, m = this.requireSorting;
              if (p && !this.isDirty && !l.isDirty && !this.yAxis.isDirty && !e)
                return !1;
              for (l && (c = (e = l.getExtremes()).min, d = e.max), p && this.sorted && !u && (!h || s > h || this.forceCrop) && (n[s - 1] < c || n[0] > d ? (n = [], o = []) : this.yData && (n[0] < c || n[s - 1] > d) && (n = (i = this.cropData(this.xData, this.yData, c, d)).xData, o = i.yData, i = i.start, r = !0)), h = n.length || 1; --h;)
                0 < (s = g ? f(n[h]) - f(n[h - 1]) : n[h] - n[h - 1]) && (void 0 === a || s < a) ? a = s : 0 > s && m && (t.error(15), m = !1);
              this.cropped = r, this.cropStart = i, this.processedXData = n, this.processedYData = o, this.closestPointRange = a;
            },
            cropData: function (t, e, i, n, o) {
              var s, r = t.length, a = 0, h = r;
              for (o = x(o, this.cropShoulder, 1), s = 0; s < r; s++)
                if (t[s] >= i) {
                  a = Math.max(0, s - o);
                  break;
                }
              for (i = s; i < r; i++)
                if (t[i] > n) {
                  h = i + o;
                  break;
                }
              return {
                xData: t.slice(a, h),
                yData: e.slice(a, h),
                start: a,
                end: h
              };
            },
            generatePoints: function () {
              var t, e, i, n, o = (p = this.options).data, s = this.data, r = this.processedXData, a = this.processedYData, h = this.pointClass, l = r.length, c = this.cropStart || 0, u = this.hasGroupedData, p = p.keys, f = [];
              for (s || u || ((s = []).length = o.length, s = this.data = s), p && u && (this.options.keys = !1), n = 0; n < l; n++)
                e = c + n, u ? ((i = new h().init(this, [r[n]].concat(w(a[n])))).dataGroup = this.groupMap[n], i.dataGroup.options && (i.options = i.dataGroup.options, d(i, i.dataGroup.options))) : (i = s[e]) || void 0 === o[e] || (s[e] = i = new h().init(this, o[e], r[n])), i && (i.index = e, f[n] = i);
              if (this.options.keys = p, s && (l !== (t = s.length) || u))
                for (n = 0; n < t; n++)
                  n !== c || u || (n += l), s[n] && (s[n].destroyElements(), s[n].plotX = void 0);
              this.data = s, this.points = f;
            },
            getExtremes: function (t) {
              var e, i, s, r, a, h = this.yAxis, l = this.processedXData, c = [], d = 0, u = (e = this.xAxis.getExtremes()).min, p = e.max, m = this.requireSorting ? 1 : 0;
              for (e = (t = t || this.stackedYData || this.processedYData || []).length, a = 0; a < e; a++)
                if (s = l[a], r = t[a], i = (g(r, !0) || f(r)) && (!h.positiveValuesOnly || r.length || 0 < r), s = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (l[a + m] || s) >= u && (l[a - m] || s) <= p, i && s)
                  if (i = r.length)
                    for (; i--;)
                      'number' == typeof r[i] && (c[d++] = r[i]);
                  else
                    c[d++] = r;
              this.dataMin = o(c), this.dataMax = n(c);
            },
            translate: function () {
              this.processedXData || this.processData(), this.generatePoints();
              var t, e, i, n, o = this.options, r = o.stacking, a = this.xAxis, l = a.categories, c = this.yAxis, d = this.points, p = d.length, f = !!this.modifyValue, m = o.pointPlacement, v = 'between' === m || g(m), y = o.threshold, b = o.startFromThreshold ? y : 0, w = Number.MAX_VALUE;
              for ('between' === m && (m = 0.5), g(m) && (m *= x(o.pointRange || a.pointRange)), o = 0; o < p; o++) {
                var k = d[o], S = k.x, M = k.y;
                e = k.low;
                var A, T = r && c.stacks[(this.negStacks && M < (b ? 0 : y) ? '-' : '') + this.stackKey];
                c.positiveValuesOnly && null !== M && 0 >= M && (k.isNull = !0), k.plotX = t = s(Math.min(Math.max(-100000, a.translate(S, 0, 0, 0, 1, m, 'flags' === this.type)), 100000)), r && this.visible && !k.isNull && T && T[S] && (n = this.getStackIndicator(n, S, this.index), e = (M = (A = T[S]).points[n.key])[0], M = M[1], e === b && n.key === T[S].base && (e = x(g(y) && y, c.min)), c.positiveValuesOnly && 0 >= e && (e = null), k.total = k.stackTotal = A.total, k.percentage = A.total && k.y / A.total * 100, k.stackY = M, A.setOffset(this.pointXOffset || 0, this.barW || 0)), k.yBottom = h(e) ? Math.min(Math.max(-100000, c.translate(e, 0, 1, 0, 1)), 100000) : null, f && (M = this.modifyValue(M, k)), k.plotY = e = 'number' == typeof M && 1 / 0 !== M ? Math.min(Math.max(-100000, c.translate(M, 0, 1, 0, 1)), 100000) : void 0, k.isInside = void 0 !== e && 0 <= e && e <= c.len && 0 <= t && t <= a.len, k.clientX = v ? s(a.translate(S, 0, 0, 0, 1, m)) : t, k.negative = k.y < (y || 0), k.category = l && void 0 !== l[k.x] ? l[k.x] : k.x, k.isNull || (void 0 !== i && (w = Math.min(w, Math.abs(t - i))), i = t), k.zone = this.zones.length && k.getZone();
              }
              this.closestPointRangePx = w, u(this, 'afterTranslate');
            },
            getValidPoints: function (t, e) {
              var i = this.chart;
              return p(t || this.points || [], function (t) {
                return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted)) && !t.isNull;
              });
            },
            setClip: function (t) {
              var e = this.chart, i = this.options, n = e.renderer, o = e.inverted, s = this.clipBox, r = s || e.clipBox, a = this.sharedClipKey || [
                  '_sharedClip',
                  t && t.duration,
                  t && t.easing,
                  r.height,
                  i.xAxis,
                  i.yAxis
                ].join(), h = e[a], l = e[a + 'm'];
              h || (t && (r.width = 0, o && (r.x = e.plotSizeX), e[a + 'm'] = l = n.clipRect(o ? e.plotSizeX + 99 : -99, o ? -e.plotLeft : -e.plotTop, 99, o ? e.chartWidth : e.chartHeight)), e[a] = h = n.clipRect(r), h.count = { length: 0 }), t && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1), !1 !== i.clip && (this.group.clip(t || s ? h : e.clipRect), this.markerGroup.clip(l), this.sharedClipKey = a), t || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && a && e[a] && (s || (e[a] = e[a].destroy()), e[a + 'm'] && (e[a + 'm'] = e[a + 'm'].destroy())));
            },
            animate: function (t) {
              var e, n = this.chart, o = i(this.options.animation);
              t ? this.setClip(o) : ((t = n[e = this.sharedClipKey]) && t.animate({
                width: n.plotSizeX,
                x: 0
              }, o), n[e + 'm'] && n[e + 'm'].animate({
                width: n.plotSizeX + 99,
                x: 0
              }, o), this.animate = null);
            },
            afterAnimate: function () {
              this.setClip(), u(this, 'afterAnimate'), this.finishedAnimating = !0;
            },
            drawPoints: function () {
              var t, e, i, n, o, s, r, a, h = this.points, l = this.chart, c = this.options.marker, d = this[this.specialGroup] || this.markerGroup, u = x(c.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= c.enabledThreshold * c.radius);
              if (!1 !== c.enabled || this._hasPointMarkers)
                for (t = 0; t < h.length; t++)
                  n = (e = h[t]).graphic, o = e.marker || {}, s = !!e.marker, i = u && void 0 === o.enabled || o.enabled, r = e.isInside, i && !e.isNull ? (i = x(o.symbol, this.symbol), a = this.markerAttribs(e, e.selected && 'select'), n ? n[r ? 'show' : 'hide'](!0).animate(a) : r && (0 < a.width || e.hasImage) && (e.graphic = n = l.renderer.symbol(i, a.x, a.y, a.width, a.height, s ? o : c).add(d)), n && n.attr(this.pointAttribs(e, e.selected && 'select')), n && n.addClass(e.getClassName(), !0)) : n && (e.graphic = n.destroy());
            },
            markerAttribs: function (t, e) {
              var i = this.options.marker, n = t.marker || {}, o = n.symbol || i.symbol, s = x(n.radius, i.radius);
              return e && (i = i.states[e], e = n.states && n.states[e], s = x(e && e.radius, i && i.radius, s + (i && i.radiusPlus || 0))), t.hasImage = o && 0 === o.indexOf('url'), t.hasImage && (s = 0), t = {
                x: Math.floor(t.plotX) - s,
                y: t.plotY - s
              }, s && (t.width = t.height = 2 * s), t;
            },
            pointAttribs: function (t, e) {
              var i = this.options.marker, n = (a = t && t.options) && a.marker || {}, o = this.color, s = a && a.color, r = t && t.color, a = x(n.lineWidth, i.lineWidth);
              return t = t && t.zone && t.zone.color, o = s || t || r || o, t = n.fillColor || i.fillColor || o, o = n.lineColor || i.lineColor || o, e && (i = i.states[e], e = n.states && n.states[e] || {}, a = x(e.lineWidth, i.lineWidth, a + x(e.lineWidthPlus, i.lineWidthPlus, 0)), t = e.fillColor || i.fillColor || t, o = e.lineColor || i.lineColor || o), {
                stroke: o,
                'stroke-width': a,
                fill: t
              };
            },
            destroy: function () {
              var e, i, n, o = this, s = o.chart, r = /AppleWebKit\/533/.test(M.navigator.userAgent), a = o.data || [];
              for (u(o, 'destroy'), b(o), l(o.axisTypes || [], function (t) {
                  (n = o[t]) && n.series && (c(n.series, o), n.isDirty = n.forceRedraw = !0);
                }), o.legendItem && o.chart.legend.destroyItem(o), e = a.length; e--;)
                (i = a[e]) && i.destroy && i.destroy();
              o.points = null, t.clearTimeout(o.animationTimeout), y(o, function (t, e) {
                t instanceof k && !t.survive && t[r && 'group' === e ? 'hide' : 'destroy']();
              }), s.hoverSeries === o && (s.hoverSeries = null), c(s.series, o), s.orderSeries(), y(o, function (t, e) {
                delete o[e];
              });
            },
            getGraphPath: function (t, e, i) {
              var n, o, s = this, r = s.options, a = r.step, c = [], d = [];
              return (n = (t = t || s.points).reversed) && t.reverse(), (a = {
                right: 1,
                center: 2
              }[a] || a && 3) && n && (a = 4 - a), !r.connectNulls || e || i || (t = this.getValidPoints(t)), l(t, function (n, l) {
                var u = n.plotX, p = n.plotY, f = t[l - 1];
                (n.leftCliff || f && f.rightCliff) && !i && (o = !0), n.isNull && !h(e) && 0 < l ? o = !r.connectNulls : n.isNull && !e ? o = !0 : (0 === l || o ? l = [
                  'M',
                  n.plotX,
                  n.plotY
                ] : s.getPointSpline ? l = s.getPointSpline(t, n, l) : a ? (l = 1 === a ? [
                  'L',
                  f.plotX,
                  p
                ] : 2 === a ? [
                  'L',
                  (f.plotX + u) / 2,
                  f.plotY,
                  'L',
                  (f.plotX + u) / 2,
                  p
                ] : [
                  'L',
                  u,
                  f.plotY
                ]).push('L', u, p) : l = [
                  'L',
                  u,
                  p
                ], d.push(n.x), a && (d.push(n.x), 2 === a && d.push(n.x)), c.push.apply(c, l), o = !1);
              }), c.xMap = d, s.graphPath = c;
            },
            drawGraph: function () {
              var t = this, e = this.options, i = (this.gappedPath || this.getGraphPath).call(this), n = [[
                    'graph',
                    'highcharts-graph',
                    e.lineColor || this.color,
                    e.dashStyle
                  ]];
              n = t.getZonesGraphs(n);
              l(n, function (n, o) {
                var s = n[0], r = t[s];
                r ? (r.endX = t.preventGraphAnimation ? null : i.xMap, r.animate({ d: i })) : i.length && (t[s] = t.chart.renderer.path(i).addClass(n[1]).attr({ zIndex: 1 }).add(t.group), r = {
                  stroke: n[2],
                  'stroke-width': e.lineWidth,
                  fill: t.fillGraph && t.color || 'none'
                }, n[3] ? r.dashstyle = n[3] : 'square' !== e.linecap && (r['stroke-linecap'] = r['stroke-linejoin'] = 'round'), r = t[s].attr(r).shadow(2 > o && e.shadow)), r && (r.startX = i.xMap, r.isArea = i.isArea);
              });
            },
            getZonesGraphs: function (t) {
              return l(this.zones, function (e, i) {
                t.push([
                  'zone-graph-' + i,
                  'highcharts-graph highcharts-zone-graph-' + i + ' ' + (e.className || ''),
                  e.color || this.color,
                  e.dashStyle || this.options.dashStyle
                ]);
              }, this), t;
            },
            applyZones: function () {
              var t, e, i, n, o, s, r, a, h, c = this, d = this.chart, u = d.renderer, p = this.zones, f = this.clips || [], g = this.graph, m = this.area, v = Math.max(d.chartWidth, d.chartHeight), y = this[(this.zoneAxis || 'y') + 'Axis'], b = d.inverted, w = !1;
              p.length && (g || m) && y && void 0 !== y.min && (o = y.reversed, s = y.horiz, g && !this.showLine && g.hide(), m && m.hide(), n = y.getExtremes(), l(p, function (l, p) {
                t = o ? s ? d.plotWidth : 0 : s ? 0 : y.toPixels(n.min), t = Math.min(Math.max(x(e, t), 0), v), e = Math.min(Math.max(Math.round(y.toPixels(x(l.value, n.max), !0)), 0), v), w && (t = e = y.toPixels(n.max)), r = Math.abs(t - e), a = Math.min(t, e), h = Math.max(t, e), y.isXAxis ? (i = {
                  x: b ? h : a,
                  y: 0,
                  width: r,
                  height: v
                }, s || (i.x = d.plotHeight - i.x)) : (i = {
                  x: 0,
                  y: b ? h : a,
                  width: v,
                  height: r
                }, s && (i.y = d.plotWidth - i.y)), b && u.isVML && (i = y.isXAxis ? {
                  x: 0,
                  y: o ? a : h,
                  height: i.width,
                  width: d.chartWidth
                } : {
                  x: i.y - d.plotLeft - d.spacingBox.x,
                  y: 0,
                  width: i.height,
                  height: d.chartHeight
                }), f[p] ? f[p].animate(i) : (f[p] = u.clipRect(i), g && c['zone-graph-' + p].clip(f[p]), m && c['zone-area-' + p].clip(f[p])), w = l.value > n.max, c.resetZones && 0 === e && (e = void 0);
              }), this.clips = f);
            },
            invertGroups: function (t) {
              function i() {
                l([
                  'group',
                  'markerGroup'
                ], function (e) {
                  o[e] && (s.renderer.isVML && o[e].attr({
                    width: o.yAxis.len,
                    height: o.xAxis.len
                  }), o[e].width = o.yAxis.len, o[e].height = o.xAxis.len, o[e].invert(t));
                });
              }
              var n, o = this, s = o.chart;
              o.xAxis && (n = e(s, 'resize', i), e(o, 'destroy', n), i(), o.invertGroups = i);
            },
            plotGroup: function (t, e, i, n, o) {
              var s = this[t], r = !s;
              return r && (this[t] = s = this.chart.renderer.g().attr({ zIndex: n || 0.1 }).add(o)), s.addClass('highcharts-' + e + ' highcharts-series-' + this.index + ' highcharts-' + this.type + '-series ' + (h(this.colorIndex) ? 'highcharts-color-' + this.colorIndex + ' ' : '') + (this.options.className || '') + (s.hasClass('highcharts-tracker') ? ' highcharts-tracker' : ''), !0), s.attr({ visibility: i })[r ? 'attr' : 'animate'](this.getPlotBox()), s;
            },
            getPlotBox: function () {
              var t = this.chart, e = this.xAxis, i = this.yAxis;
              return t.inverted && (e = i, i = this.xAxis), {
                translateX: e ? e.left : t.plotLeft,
                translateY: i ? i.top : t.plotTop,
                scaleX: 1,
                scaleY: 1
              };
            },
            render: function () {
              var t, e = this, n = e.chart, o = e.options, s = !!e.animate && n.renderer.isSVG && i(o.animation).duration, r = e.visible ? 'inherit' : 'hidden', a = o.zIndex, h = e.hasRendered, l = n.seriesGroup, c = n.inverted;
              t = e.plotGroup('group', 'series', r, a, l), e.markerGroup = e.plotGroup('markerGroup', 'markers', r, a, l), s && e.animate(!0), t.inverted = !!e.isCartesian && c, e.drawGraph && (e.drawGraph(), e.applyZones()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(c), !1 === o.clip || e.sharedClipKey || h || t.clip(n.clipRect), s && e.animate(), h || (e.animationTimeout = S(function () {
                e.afterAnimate();
              }, s)), e.isDirty = !1, e.hasRendered = !0, u(e, 'afterRender');
            },
            redraw: function () {
              var t = this.chart, e = this.isDirty || this.isDirtyData, i = this.group, n = this.xAxis, o = this.yAxis;
              i && (t.inverted && i.attr({
                width: t.plotWidth,
                height: t.plotHeight
              }), i.animate({
                translateX: x(n && n.left, t.plotLeft),
                translateY: x(o && o.top, t.plotTop)
              })), this.translate(), this.render(), e && delete this.kdTree;
            },
            kdAxisArray: [
              'clientX',
              'plotY'
            ],
            searchPoint: function (t, e) {
              var i = this.xAxis, n = this.yAxis, o = this.chart.inverted;
              return this.searchKDTree({
                clientX: o ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                plotY: o ? n.len - t.chartX + n.pos : t.chartY - n.pos
              }, e);
            },
            buildKDTree: function () {
              this.buildingKdTree = !0;
              var t = this, e = -1 < t.options.findNearestPointBy.indexOf('y') ? 2 : 1;
              delete t.kdTree, S(function () {
                t.kdTree = function e(i, n, o) {
                  var s, r;
                  if (r = i && i.length)
                    return s = t.kdAxisArray[n % o], i.sort(function (t, e) {
                      return t[s] - e[s];
                    }), {
                      point: i[r = Math.floor(r / 2)],
                      left: e(i.slice(0, r), n + 1, o),
                      right: e(i.slice(r + 1), n + 1, o)
                    };
                }(t.getValidPoints(null, !t.directTouch), e, e), t.buildingKdTree = !1;
              }, t.options.kdNow ? 0 : 1);
            },
            searchKDTree: function (t, e) {
              var i = this, n = this.kdAxisArray[0], o = this.kdAxisArray[1], s = e ? 'distX' : 'dist';
              if (e = -1 < i.options.findNearestPointBy.indexOf('y') ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(), this.kdTree)
                return function t(e, r, a, l) {
                  var c, d, u = r.point, p = i.kdAxisArray[a % l], f = u;
                  return c = ((d = h(e[n]) && h(u[n]) ? Math.pow(e[n] - u[n], 2) : null) || 0) + ((c = h(e[o]) && h(u[o]) ? Math.pow(e[o] - u[o], 2) : null) || 0), u.dist = h(c) ? Math.sqrt(c) : Number.MAX_VALUE, u.distX = h(d) ? Math.sqrt(d) : Number.MAX_VALUE, d = 0 > (p = e[p] - u[p]) ? 'right' : 'left', r[c = 0 > p ? 'left' : 'right'] && (f = (c = t(e, r[c], a + 1, l))[s] < f[s] ? c : u), r[d] && Math.sqrt(p * p) < f[s] && (f = (e = t(e, r[d], a + 1, l))[s] < f[s] ? e : f), f;
                }(t, this.kdTree, e, e);
            }
          });
        }(c), function (t) {
          var e = t.Axis, i = t.Chart, n = t.correctFloat, o = t.defined, s = t.destroyObjectProperties, r = t.each, a = t.format, h = t.objectEach, l = t.pick, c = t.Series;
          t.StackItem = function (t, e, i, n, o) {
            var s = t.chart.inverted;
            this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = o, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
              align: e.align || (s ? i ? 'left' : 'right' : 'center'),
              verticalAlign: e.verticalAlign || (s ? 'middle' : i ? 'bottom' : 'top'),
              y: l(e.y, s ? 4 : i ? 14 : -6),
              x: l(e.x, s ? i ? -6 : 6 : 0)
            }, this.textAlign = e.textAlign || (s ? i ? 'right' : 'left' : 'center');
          }, t.StackItem.prototype = {
            destroy: function () {
              s(this, this.axis);
            },
            render: function (t) {
              var e = this.axis.chart, i = this.options, n = (n = i.format) ? a(n, this, e.time) : i.formatter.call(this);
              this.label ? this.label.attr({
                text: n,
                visibility: 'hidden'
              }) : this.label = e.renderer.text(n, null, null, i.useHTML).css(i.style).attr({
                align: this.textAlign,
                rotation: i.rotation,
                visibility: 'hidden'
              }).add(t), this.label.labelrank = e.plotHeight;
            },
            setOffset: function (t, e) {
              var i = this.axis, n = i.chart, s = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1), r = i.translate(0);
              r = o(s) && Math.abs(s - r);
              t = n.xAxis[0].translate(this.x) + t, i = o(s) && this.getStackBox(n, this, t, s, e, r, i), (e = this.label) && i && (e.align(this.alignOptions, null, i), i = e.alignAttr, e[!1 === this.options.crop || n.isInsidePlot(i.x, i.y) ? 'show' : 'hide'](!0));
            },
            getStackBox: function (t, e, i, n, o, s, r) {
              var a = e.axis.reversed, h = t.inverted;
              return t = r.height + r.pos - (h ? t.plotLeft : t.plotTop), e = e.isNegative && !a || !e.isNegative && a, {
                x: h ? e ? n : n - s : i,
                y: h ? t - i - o : e ? t - n - s : t - n,
                width: h ? s : o,
                height: h ? o : s
              };
            }
          }, i.prototype.getStacks = function () {
            var t = this;
            r(t.yAxis, function (t) {
              t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks);
            }), r(t.series, function (e) {
              !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + l(e.options.stack, ''));
            });
          }, e.prototype.buildStacks = function () {
            var t, e = this.series, i = l(this.options.reversedStacks, !0), n = e.length;
            if (!this.isXAxis) {
              for (this.usePercentage = !1, t = n; t--;)
                e[i ? t : n - t - 1].setStackedPoints();
              for (t = 0; t < n; t++)
                e[t].modifyStacks();
            }
          }, e.prototype.renderStackTotals = function () {
            var t = this.chart, e = t.renderer, i = this.stacks, n = this.stackTotalGroup;
            n || (this.stackTotalGroup = n = e.g('stack-labels').attr({
              visibility: 'visible',
              zIndex: 6
            }).add()), n.translate(t.plotLeft, t.plotTop), h(i, function (t) {
              h(t, function (t) {
                t.render(n);
              });
            });
          }, e.prototype.resetStacks = function () {
            var t = this, e = t.stacks;
            t.isXAxis || h(e, function (e) {
              h(e, function (i, n) {
                i.touched < t.stacksTouched ? (i.destroy(), delete e[n]) : (i.total = null, i.cumulative = null);
              });
            });
          }, e.prototype.cleanStacks = function () {
            var t;
            this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), h(t, function (t) {
              h(t, function (t) {
                t.cumulative = t.total;
              });
            }));
          }, c.prototype.setStackedPoints = function () {
            if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
              var e, i, s, r, a, h, c, d = this.processedXData, u = this.processedYData, p = [], f = u.length, g = (y = this.options).threshold, m = l(y.startFromThreshold && g, 0), v = y.stack, y = y.stacking, x = this.stackKey, b = '-' + x, w = this.negStacks, k = this.yAxis, S = k.stacks, M = k.oldStacks;
              for (k.stacksTouched += 1, a = 0; a < f; a++)
                h = d[a], c = u[a], r = (e = this.getStackIndicator(e, h, this.index)).key, S[s = (i = w && c < (m ? 0 : g)) ? b : x] || (S[s] = {}), S[s][h] || (M[s] && M[s][h] ? (S[s][h] = M[s][h], S[s][h].total = null) : S[s][h] = new t.StackItem(k, k.options.stackLabels, i, h, v)), s = S[s][h], null !== c ? (s.points[r] = s.points[this.index] = [l(s.cumulative, m)], o(s.cumulative) || (s.base = r), s.touched = k.stacksTouched, 0 < e.index && !1 === this.singleStacks && (s.points[r][0] = s.points[this.index + ',' + h + ',0'][0])) : s.points[r] = s.points[this.index] = null, 'percent' === y ? (i = i ? x : b, w && S[i] && S[i][h] ? (i = S[i][h], s.total = i.total = Math.max(i.total, s.total) + Math.abs(c) || 0) : s.total = n(s.total + (Math.abs(c) || 0))) : s.total = n(s.total + (c || 0)), s.cumulative = l(s.cumulative, m) + (c || 0), null !== c && (s.points[r].push(s.cumulative), p[a] = s.cumulative);
              'percent' === y && (k.usePercentage = !0), this.stackedYData = p, k.oldStacks = {};
            }
          }, c.prototype.modifyStacks = function () {
            var t, e = this, i = e.stackKey, n = e.yAxis.stacks, o = e.processedXData, s = e.options.stacking;
            e[s + 'Stacker'] && r([
              i,
              '-' + i
            ], function (i) {
              for (var r, a, h = o.length; h--;)
                r = o[h], t = e.getStackIndicator(t, r, e.index, i), (a = (r = n[i] && n[i][r]) && r.points[t.key]) && e[s + 'Stacker'](a, r, h);
            });
          }, c.prototype.percentStacker = function (t, e, i) {
            e = e.total ? 100 / e.total : 0, t[0] = n(t[0] * e), t[1] = n(t[1] * e), this.stackedYData[i] = t[1];
          }, c.prototype.getStackIndicator = function (t, e, i, n) {
            return !o(t) || t.x !== e || n && t.key !== n ? t = {
              x: e,
              index: 0,
              key: n
            } : t.index++, t.key = [
              i,
              e,
              t.index
            ].join(), t;
          };
        }(c), function (t) {
          var e = t.addEvent, i = t.animate, n = t.Axis, o = t.createElement, s = t.css, r = t.defined, a = t.each, h = t.erase, l = t.extend, c = t.fireEvent, d = t.inArray, u = t.isNumber, p = t.isObject, f = t.isArray, g = t.merge, m = t.objectEach, v = t.pick, y = t.Point, x = t.Series, b = t.seriesTypes, w = t.setAnimation, k = t.splat;
          l(t.Chart.prototype, {
            addSeries: function (t, e, i) {
              var n, o = this;
              return t && (e = v(e, !0), c(o, 'addSeries', { options: t }, function () {
                n = o.initSeries(t), o.isDirtyLegend = !0, o.linkSeries(), c(o, 'afterAddSeries'), e && o.redraw(i);
              })), n;
            },
            addAxis: function (t, e, i, o) {
              var s = e ? 'xAxis' : 'yAxis', r = this.options;
              return t = g(t, {
                index: this[s].length,
                isX: e
              }), e = new n(this, t), r[s] = k(r[s] || {}), r[s].push(t), v(i, !0) && this.redraw(o), e;
            },
            showLoading: function (t) {
              var n = this, r = n.options, a = n.loadingDiv, h = r.loading, c = function () {
                  a && s(a, {
                    left: n.plotLeft + 'px',
                    top: n.plotTop + 'px',
                    width: n.plotWidth + 'px',
                    height: n.plotHeight + 'px'
                  });
                };
              a || (n.loadingDiv = a = o('div', { className: 'highcharts-loading highcharts-loading-hidden' }, null, n.container), n.loadingSpan = o('span', { className: 'highcharts-loading-inner' }, null, a), e(n, 'redraw', c)), a.className = 'highcharts-loading', n.loadingSpan.innerHTML = t || r.lang.loading, s(a, l(h.style, { zIndex: 10 })), s(n.loadingSpan, h.labelStyle), n.loadingShown || (s(a, {
                opacity: 0,
                display: ''
              }), i(a, { opacity: h.style.opacity || 0.5 }, { duration: h.showDuration || 0 })), n.loadingShown = !0, c();
            },
            hideLoading: function () {
              var t = this.options, e = this.loadingDiv;
              e && (e.className = 'highcharts-loading highcharts-loading-hidden', i(e, { opacity: 0 }, {
                duration: t.loading.hideDuration || 100,
                complete: function () {
                  s(e, { display: 'none' });
                }
              })), this.loadingShown = !1;
            },
            propsRequireDirtyBox: 'backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow'.split(' '),
            propsRequireUpdateSeries: 'chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip'.split(' '),
            update: function (t, e, i, n) {
              var o, s, h = this, l = {
                  credits: 'addCredits',
                  title: 'setTitle',
                  subtitle: 'setSubtitle'
                }, p = t.chart, f = [];
              c(h, 'update', { options: t }), p && (g(!0, h.options.chart, p), 'className' in p && h.setClassName(p.className), 'reflow' in p && h.setReflow(p.reflow), ('inverted' in p || 'polar' in p || 'type' in p) && (h.propFromSeries(), o = !0), 'alignTicks' in p && (o = !0), m(p, function (t, e) {
                -1 !== d('chart.' + e, h.propsRequireUpdateSeries) && (s = !0), -1 !== d(e, h.propsRequireDirtyBox) && (h.isDirtyBox = !0);
              }), 'style' in p && h.renderer.setStyle(p.style)), t.colors && (this.options.colors = t.colors), t.plotOptions && g(!0, this.options.plotOptions, t.plotOptions), m(t, function (t, e) {
                h[e] && 'function' == typeof h[e].update ? h[e].update(t, !1) : 'function' == typeof h[l[e]] && h[l[e]](t), 'chart' !== e && -1 !== d(e, h.propsRequireUpdateSeries) && (s = !0);
              }), a('xAxis yAxis zAxis series colorAxis pane'.split(' '), function (e) {
                var n;
                t[e] && ('series' === e && (n = [], a(h[e], function (t, e) {
                  t.options.isInternal || n.push(e);
                })), a(k(t[e]), function (t, o) {
                  (o = r(t.id) && h.get(t.id) || h[e][n ? n[o] : o]) && o.coll === e && (o.update(t, !1), i && (o.touched = !0)), !o && i && ('series' === e ? h.addSeries(t, !1).touched = !0 : 'xAxis' !== e && 'yAxis' !== e || (h.addAxis(t, 'xAxis' === e, !1).touched = !0));
                }), i && a(h[e], function (t) {
                  t.touched || t.options.isInternal ? delete t.touched : f.push(t);
                }));
              }), a(f, function (t) {
                t.remove && t.remove(!1);
              }), o && a(h.axes, function (t) {
                t.update({}, !1);
              }), s && a(h.series, function (t) {
                t.update({}, !1);
              }), t.loading && g(!0, h.options.loading, t.loading), o = p && p.width, p = p && p.height, u(o) && o !== h.chartWidth || u(p) && p !== h.chartHeight ? h.setSize(o, p, n) : v(e, !0) && h.redraw(n), c(h, 'afterUpdate', { options: t });
            },
            setSubtitle: function (t) {
              this.setTitle(void 0, t);
            }
          }), l(y.prototype, {
            update: function (t, e, i, n) {
              function o() {
                r.applyOptions(t), null === r.y && h && (r.graphic = h.destroy()), p(t, !0) && (h && h.element && t && t.marker && void 0 !== t.marker.symbol && (r.graphic = h.destroy()), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy()), r.connector && (r.connector = r.connector.destroy())), s = r.index, a.updateParallelArrays(r, s), c.data[s] = p(c.data[s], !0) || p(t, !0) ? r.options : v(t, c.data[s]), a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), 'point' === c.legendType && (l.isDirtyLegend = !0), e && l.redraw(i);
              }
              var s, r = this, a = r.series, h = r.graphic, l = a.chart, c = a.options;
              e = v(e, !0), !1 === n ? o() : r.firePointEvent('update', { options: t }, o);
            },
            remove: function (t, e) {
              this.series.removePoint(d(this, this.series.data), t, e);
            }
          }), l(x.prototype, {
            addPoint: function (t, e, i, n) {
              var o, s, r, a, h = this.options, l = this.data, c = this.chart, d = (d = this.xAxis) && d.hasNames && d.names, u = h.data, p = this.xData;
              if (e = v(e, !0), o = { series: this }, this.pointClass.prototype.applyOptions.apply(o, [t]), a = o.x, r = p.length, this.requireSorting && a < p[r - 1])
                for (s = !0; r && p[r - 1] > a;)
                  r--;
              this.updateParallelArrays(o, 'splice', r, 0, 0), this.updateParallelArrays(o, r), d && o.name && (d[a] = o.name), u.splice(r, 0, t), s && (this.data.splice(r, 0, null), this.processData()), 'point' === h.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(o, 'shift'), u.shift())), this.isDirtyData = this.isDirty = !0, e && c.redraw(n);
            },
            removePoint: function (t, e, i) {
              var n = this, o = n.data, s = o[t], r = n.points, a = n.chart, h = function () {
                  r && r.length === o.length && r.splice(t, 1), o.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(s || { series: n }, 'splice', t, 1), s && s.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && a.redraw();
                };
              w(i, a), e = v(e, !0), s ? s.firePointEvent('remove', null, h) : h();
            },
            remove: function (t, e, i) {
              function n() {
                o.destroy(), o.remove = null, s.isDirtyLegend = s.isDirtyBox = !0, s.linkSeries(), v(t, !0) && s.redraw(e);
              }
              var o = this, s = o.chart;
              !1 !== i ? c(o, 'remove', null, n) : n();
            },
            update: function (e, i) {
              var n, o = this, s = o.chart, r = o.userOptions, h = o.oldType || o.type, u = e.type || r.type || s.options.chart.type, p = b[h].prototype, f = [
                  'group',
                  'markerGroup',
                  'dataLabelsGroup'
                ], m = [
                  'navigatorSeries',
                  'baseSeries'
                ], y = o.finishedAnimating && { animation: !1 }, x = [
                  'data',
                  'name',
                  'turboThreshold'
                ], w = t.keys(e), k = 0 < w.length;
              if (a(w, function (t) {
                  -1 === d(t, x) && (k = !1);
                }), k)
                e.data && this.setData(e.data, !1), e.name && this.setName(e.name, !1);
              else {
                for (n in (m = f.concat(m), a(m, function (t) {
                    m[t] = o[t], delete o[t];
                  }), e = g(r, y, {
                    index: o.index,
                    pointStart: v(r.pointStart, o.xData[0])
                  }, { data: o.options.data }, e), o.remove(!1, null, !1), p))
                  o[n] = void 0;
                b[u || h] ? l(o, b[u || h].prototype) : t.error(17, !0), a(m, function (t) {
                  o[t] = m[t];
                }), o.init(s, e), e.zIndex !== r.zIndex && a(f, function (t) {
                  o[t] && o[t].attr({ zIndex: e.zIndex });
                }), o.oldType = h, s.linkSeries();
              }
              c(this, 'afterUpdate'), v(i, !0) && s.redraw(!!k && void 0);
            },
            setName: function (t) {
              this.name = this.options.name = this.userOptions.name = t, this.chart.isDirtyLegend = !0;
            }
          }), l(n.prototype, {
            update: function (t, e) {
              var i = this.chart, n = t && t.events || {};
              t = g(this.userOptions, t), i.options[this.coll].indexOf && (i.options[this.coll][i.options[this.coll].indexOf(this.userOptions)] = t), m(i.options[this.coll].events, function (t, e) {
                void 0 === n[e] && (n[e] = void 0);
              }), this.destroy(!0), this.init(i, l(t, { events: n })), i.isDirtyBox = !0, v(e, !0) && i.redraw();
            },
            remove: function (t) {
              for (var e = this.chart, i = this.coll, n = this.series, o = n.length; o--;)
                n[o] && n[o].remove(!1);
              h(e.axes, this), h(e[i], this), f(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], a(e[i], function (t, e) {
                t.options.index = t.userOptions.index = e;
              }), this.destroy(), e.isDirtyBox = !0, v(t, !0) && e.redraw();
            },
            setTitle: function (t, e) {
              this.update({ title: t }, e);
            },
            setCategories: function (t, e) {
              this.update({ categories: t }, e);
            }
          });
        }(c), function (t) {
          var e = t.color, i = t.each, n = t.map, o = t.pick, s = t.Series;
          (0, t.seriesType)('area', 'line', {
            softThreshold: !1,
            threshold: 0
          }, {
            singleStacks: !1,
            getStackPoints: function (e) {
              var s, r, a = [], h = [], l = this.xAxis, c = this.yAxis, d = c.stacks[this.stackKey], u = {}, p = this.index, f = c.series, g = f.length, m = o(c.options.reversedStacks, !0) ? 1 : -1;
              if (e = e || this.points, this.options.stacking) {
                for (r = 0; r < e.length; r++)
                  e[r].leftNull = e[r].rightNull = null, u[e[r].x] = e[r];
                t.objectEach(d, function (t, e) {
                  null !== t.total && h.push(e);
                }), h.sort(function (t, e) {
                  return t - e;
                }), s = n(f, function () {
                  return this.visible;
                }), i(h, function (t, e) {
                  var n, o, f = 0;
                  if (u[t] && !u[t].isNull)
                    a.push(u[t]), i([
                      -1,
                      1
                    ], function (i) {
                      var a = 1 === i ? 'rightNull' : 'leftNull', l = 0, c = d[h[e + i]];
                      if (c)
                        for (r = p; 0 <= r && r < g;)
                          (n = c.points[r]) || (r === p ? u[t][a] = !0 : s[r] && (o = d[t].points[r]) && (l -= o[1] - o[0])), r += m;
                      u[t][1 === i ? 'rightCliff' : 'leftCliff'] = l;
                    });
                  else {
                    for (r = p; 0 <= r && r < g;) {
                      if (n = d[t].points[r]) {
                        f = n[1];
                        break;
                      }
                      r += m;
                    }
                    f = c.translate(f, 0, 1, 0, 1), a.push({
                      isNull: !0,
                      plotX: l.translate(t, 0, 0, 0, 1),
                      x: t,
                      plotY: f,
                      yBottom: f
                    });
                  }
                });
              }
              return a;
            },
            getGraphPath: function (t) {
              var e, i, n, r, a = s.prototype.getGraphPath, h = (m = this.options).stacking, l = this.yAxis, c = [], d = [], u = this.index, p = l.stacks[this.stackKey], f = m.threshold, g = l.getThreshold(m.threshold), m = m.connectNulls || 'percent' === h, v = function (e, i, o) {
                  var s = t[e];
                  e = h && p[s.x].points[u];
                  var r = s[o + 'Null'] || 0;
                  o = s[o + 'Cliff'] || 0;
                  var a, m;
                  s = !0;
                  o || r ? (a = (r ? e[0] : e[1]) + o, m = e[0] + o, s = !!r) : !h && t[i] && t[i].isNull && (a = m = f), void 0 !== a && (d.push({
                    plotX: n,
                    plotY: null === a ? g : l.getThreshold(a),
                    isNull: s,
                    isCliff: !0
                  }), c.push({
                    plotX: n,
                    plotY: null === m ? g : l.getThreshold(m),
                    doCurve: !1
                  }));
                };
              for (t = t || this.points, h && (t = this.getStackPoints(t)), e = 0; e < t.length; e++)
                i = t[e].isNull, n = o(t[e].rectPlotX, t[e].plotX), r = o(t[e].yBottom, g), (!i || m) && (m || v(e, e - 1, 'left'), i && !h && m || (d.push(t[e]), c.push({
                  x: e,
                  plotX: n,
                  plotY: r
                })), m || v(e, e + 1, 'right'));
              return e = a.call(this, d, !0, !0), c.reversed = !0, (i = a.call(this, c, !0, !0)).length && (i[0] = 'L'), i = e.concat(i), a = a.call(this, d, !1, m), i.xMap = e.xMap, this.areaPath = i, a;
            },
            drawGraph: function () {
              this.areaPath = [], s.prototype.drawGraph.apply(this);
              var t = this, n = this.areaPath, r = this.options, a = [[
                    'area',
                    'highcharts-area',
                    this.color,
                    r.fillColor
                  ]];
              i(this.zones, function (e, i) {
                a.push([
                  'zone-area-' + i,
                  'highcharts-area highcharts-zone-area-' + i + ' ' + e.className,
                  e.color || t.color,
                  e.fillColor || r.fillColor
                ]);
              }), i(a, function (i) {
                var s = i[0], a = t[s];
                a ? (a.endX = t.preventGraphAnimation ? null : n.xMap, a.animate({ d: n })) : (a = t[s] = t.chart.renderer.path(n).addClass(i[1]).attr({
                  fill: o(i[3], e(i[2]).setOpacity(o(r.fillOpacity, 0.75)).get()),
                  zIndex: 0
                }).add(t.group)).isArea = !0, a.startX = n.xMap, a.shiftUnit = r.step ? 2 : 1;
              });
            },
            drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
          });
        }(c), function (t) {
          var e = t.pick;
          (t = t.seriesType)('spline', 'line', {}, {
            getPointSpline: function (t, i, n) {
              var o, s, r, a, h = i.plotX, l = i.plotY, c = t[n - 1];
              if (n = t[n + 1], c && !c.isNull && !1 !== c.doCurve && !i.isCliff && n && !n.isNull && !1 !== n.doCurve && !i.isCliff) {
                t = c.plotY, r = n.plotX;
                var d = 0;
                s = (1.5 * l + t) / 2.5, a = (1.5 * l + (n = n.plotY)) / 2.5, (r = (1.5 * h + r) / 2.5) !== (o = (1.5 * h + c.plotX) / 2.5) && (d = (a - s) * (r - h) / (r - o) + l - a), a += d, (s += d) > t && s > l ? a = 2 * l - (s = Math.max(t, l)) : s < t && s < l && (a = 2 * l - (s = Math.min(t, l))), a > n && a > l ? s = 2 * l - (a = Math.max(n, l)) : a < n && a < l && (s = 2 * l - (a = Math.min(n, l))), i.rightContX = r, i.rightContY = a;
              }
              return i = [
                'C',
                e(c.rightContX, c.plotX),
                e(c.rightContY, c.plotY),
                e(o, h),
                e(s, l),
                h,
                l
              ], c.rightContX = c.rightContY = null, i;
            }
          });
        }(c), function (t) {
          var e = t.seriesTypes.area.prototype;
          (0, t.seriesType)('areaspline', 'spline', t.defaultPlotOptions.area, {
            getStackPoints: e.getStackPoints,
            getGraphPath: e.getGraphPath,
            drawGraph: e.drawGraph,
            drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
          });
        }(c), function (t) {
          var e = t.animObject, i = t.color, n = t.each, o = t.extend, s = t.defined, r = t.isNumber, a = t.merge, h = t.pick, l = t.Series, c = t.seriesType, d = t.svg;
          c('column', 'line', {
            borderRadius: 0,
            crisp: !0,
            groupPadding: 0.2,
            marker: null,
            pointPadding: 0.1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
              hover: {
                halo: !1,
                brightness: 0.1
              },
              select: {
                color: '#cccccc',
                borderColor: '#000000'
              }
            },
            dataLabels: {
              align: null,
              verticalAlign: null,
              y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: { distance: 6 },
            threshold: 0,
            borderColor: '#ffffff'
          }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: [
              'group',
              'dataLabelsGroup'
            ],
            negStacks: !0,
            init: function () {
              l.prototype.init.apply(this, arguments);
              var t = this, e = t.chart;
              e.hasRendered && n(e.series, function (e) {
                e.type === t.type && (e.isDirty = !0);
              });
            },
            getColumnMetrics: function () {
              var t, e = this, i = e.options, o = e.xAxis, s = e.yAxis, r = o.options.reversedStacks, a = (r = o.reversed && !r || !o.reversed && r, {}), l = 0;
              !1 === i.grouping ? l = 1 : n(e.chart.series, function (i) {
                var n, o = i.options, r = i.yAxis;
                i.type !== e.type || !i.visible && e.chart.options.chart.ignoreHiddenSeries || s.len !== r.len || s.pos !== r.pos || (o.stacking ? (t = i.stackKey, void 0 === a[t] && (a[t] = l++), n = a[t]) : !1 !== o.grouping && (n = l++), i.columnIndex = n);
              });
              var c = Math.min(Math.abs(o.transA) * (o.ordinalSlope || i.pointRange || o.closestPointRange || o.tickInterval || 1), o.len), d = c * i.groupPadding, u = (c - 2 * d) / (l || 1);
              i = Math.min(i.maxPointWidth || o.len, h(i.pointWidth, u * (1 - 2 * i.pointPadding)));
              return e.columnMetrics = {
                width: i,
                offset: (u - i) / 2 + (d + ((e.columnIndex || 0) + (r ? 1 : 0)) * u - c / 2) * (r ? -1 : 1)
              }, e.columnMetrics;
            },
            crispCol: function (t, e, i, n) {
              var o = this.chart, s = -((r = this.borderWidth) % 2 ? 0.5 : 0), r = r % 2 ? 0.5 : 1;
              return o.inverted && o.renderer.isVML && (r += 1), this.options.crisp && (i = Math.round(t + i) + s, i -= t = Math.round(t) + s), n = Math.round(e + n) + r, s = 0.5 >= Math.abs(e) && 0.5 < n, n -= e = Math.round(e) + r, s && n && (--e, n += 1), {
                x: t,
                y: e,
                width: i,
                height: n
              };
            },
            translate: function () {
              var t = this, e = t.chart, i = t.options, o = t.dense = 2 > t.closestPointRange * t.xAxis.transA, r = (o = t.borderWidth = h(i.borderWidth, o ? 0 : 1), t.yAxis), a = i.threshold, c = t.translatedThreshold = r.getThreshold(a), d = h(i.minPointLength, 5), u = t.getColumnMetrics(), p = u.width, f = t.barW = Math.max(p, 1 + 2 * o), g = t.pointXOffset = u.offset;
              e.inverted && (c -= 0.5), i.pointPadding && (f = Math.ceil(f)), l.prototype.translate.apply(t), n(t.points, function (i) {
                var n, o = h(i.yBottom, c), l = 999 + Math.abs(o), u = p, m = (l = Math.min(Math.max(-l, i.plotY), r.len + l), i.plotX + g), v = f, y = Math.min(l, o), x = Math.max(l, o) - y;
                d && Math.abs(x) < d && (x = d, n = !r.reversed && !i.negative || r.reversed && i.negative, i.y === a && t.dataMax <= a && r.min < a && (n = !n), y = Math.abs(y - c) > d ? o - d : c - (n ? d : 0)), s(i.options.pointWidth) && (u = v = Math.ceil(i.options.pointWidth), m -= Math.round((u - p) / 2)), i.barX = m, i.pointWidth = u, i.tooltipPos = e.inverted ? [
                  r.len + r.pos - e.plotLeft - l,
                  t.xAxis.len - m - v / 2,
                  x
                ] : [
                  m + v / 2,
                  l + r.pos - e.plotTop,
                  x
                ], i.shapeType = 'rect', i.shapeArgs = t.crispCol.apply(t, i.isNull ? [
                  m,
                  c,
                  v,
                  0
                ] : [
                  m,
                  y,
                  v,
                  x
                ]);
              });
            },
            getSymbol: t.noop,
            drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
            drawGraph: function () {
              this.group[this.dense ? 'addClass' : 'removeClass']('highcharts-dense-data');
            },
            pointAttribs: function (t, e) {
              var n, o = this.options;
              n = (c = this.pointAttrToOptions || {}).stroke || 'borderColor';
              var s = c['stroke-width'] || 'borderWidth', r = t && t.color || this.color, h = t && t[n] || o[n] || this.color || r, l = t && t[s] || o[s] || this[s] || 0, c = o.dashStyle;
              return t && this.zones.length && (r = t.getZone(), r = t.options.color || r && r.color || this.color), e && (e = (t = a(o.states[e], t.options.states && t.options.states[e] || {})).brightness, r = t.color || void 0 !== e && i(r).brighten(t.brightness).get() || r, h = t[n] || h, l = t[s] || l, c = t.dashStyle || c), n = {
                fill: r,
                stroke: h,
                'stroke-width': l
              }, c && (n.dashstyle = c), n;
            },
            drawPoints: function () {
              var t, e = this, i = this.chart, o = e.options, s = i.renderer, h = o.animationLimit || 250;
              n(e.points, function (n) {
                var l = n.graphic, c = l && i.pointCount < h ? 'animate' : 'attr';
                r(n.plotY) && null !== n.y ? (t = n.shapeArgs, l ? l[c](a(t)) : n.graphic = l = s[n.shapeType](t).add(n.group || e.group), o.borderRadius && l.attr({ r: o.borderRadius }), l[c](e.pointAttribs(n, n.selected && 'select')).shadow(o.shadow, null, o.stacking && !o.borderRadius), l.addClass(n.getClassName(), !0)) : l && (n.graphic = l.destroy());
              });
            },
            animate: function (t) {
              var i, n = this, s = this.yAxis, r = n.options, a = this.chart.inverted, h = {}, l = a ? 'translateX' : 'translateY';
              d && (t ? (h.scaleY = 0.001, t = Math.min(s.pos + s.len, Math.max(s.pos, s.toPixels(r.threshold))), a ? h.translateX = t - s.len : h.translateY = t, n.group.attr(h)) : (i = n.group.attr(l), n.group.animate({ scaleY: 1 }, o(e(n.options.animation), {
                step: function (t, e) {
                  h[l] = i + e.pos * (s.pos - i), n.group.attr(h);
                }
              })), n.animate = null));
            },
            remove: function () {
              var t = this, e = t.chart;
              e.hasRendered && n(e.series, function (e) {
                e.type === t.type && (e.isDirty = !0);
              }), l.prototype.remove.apply(t, arguments);
            }
          });
        }(c), function (t) {
          (t = t.seriesType)('bar', 'column', null, { inverted: !0 });
        }(c), function (t) {
          var e = t.Series;
          (t = t.seriesType)('scatter', 'line', {
            lineWidth: 0,
            findNearestPointBy: 'xy',
            marker: { enabled: !0 },
            tooltip: {
              headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
              pointFormat: 'x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>'
            }
          }, {
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: [
              'group',
              'markerGroup',
              'dataLabelsGroup'
            ],
            takeOrdinalPosition: !1,
            drawGraph: function () {
              this.options.lineWidth && e.prototype.drawGraph.call(this);
            }
          });
        }(c), function (t) {
          var e = t.deg2rad, i = t.isNumber, n = t.pick, o = t.relativeLength;
          t.CenteredSeriesMixin = {
            getCenter: function () {
              var t, e, i = this.options, s = this.chart, r = 2 * (i.slicedOffset || 0), a = s.plotWidth - 2 * r, h = (s = s.plotHeight - 2 * r, i.center), l = (h = [
                  n(h[0], '50%'),
                  n(h[1], '50%'),
                  i.size || '100%',
                  i.innerSize || 0
                ], Math.min(a, s));
              for (t = 0; 4 > t; ++t)
                e = h[t], i = 2 > t || 2 === t && /%$/.test(e), h[t] = o(e, [
                  a,
                  s,
                  l,
                  h[2]
                ][t]) + (i ? r : 0);
              return h[3] > h[2] && (h[3] = h[2]), h;
            },
            getStartAndEndRadians: function (t, n) {
              return t = i(t) ? t : 0, n = i(n) && n > t && 360 > n - t ? n : t + 360, {
                start: e * (t + -90),
                end: e * (n + -90)
              };
            }
          };
        }(c), function (t) {
          var e = t.addEvent, i = t.CenteredSeriesMixin, n = t.defined, o = t.each, s = t.extend, r = i.getStartAndEndRadians, a = t.inArray, h = t.noop, l = t.pick, c = t.Point, d = t.Series, u = t.seriesType, p = t.setAnimation;
          u('pie', 'line', {
            center: [
              null,
              null
            ],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
              allowOverlap: !0,
              distance: 30,
              enabled: !0,
              formatter: function () {
                return this.point.isNull ? void 0 : this.point.name;
              },
              x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: 'point',
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: { followPointer: !0 },
            borderColor: '#ffffff',
            borderWidth: 1,
            states: { hover: { brightness: 0.1 } }
          }, {
            isCartesian: !1,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: [
              'group',
              'dataLabelsGroup'
            ],
            axisTypes: [],
            pointAttribs: t.seriesTypes.column.prototype.pointAttribs,
            animate: function (t) {
              var e = this, i = e.points, n = e.startAngleRad;
              t || (o(i, function (t) {
                var i = t.graphic, o = t.shapeArgs;
                i && (i.attr({
                  r: t.startR || e.center[3] / 2,
                  start: n,
                  end: n
                }), i.animate({
                  r: o.r,
                  start: o.start,
                  end: o.end
                }, e.options.animation));
              }), e.animate = null);
            },
            updateTotals: function () {
              var t, e, i = 0, n = this.points, o = n.length, s = this.options.ignoreHiddenPoint;
              for (t = 0; t < o; t++)
                e = n[t], i += s && !e.visible || e.isNull ? 0 : e.y;
              for (this.total = i, t = 0; t < o; t++)
                (e = n[t]).percentage = 0 < i && (e.visible || !s) ? e.y / i * 100 : 0, e.total = i;
            },
            generatePoints: function () {
              d.prototype.generatePoints.call(this), this.updateTotals();
            },
            translate: function (t) {
              this.generatePoints();
              var e, i, n, o, s, a, h = 0, c = (m = this.options).slicedOffset, d = c + (m.borderWidth || 0), u = r(m.startAngle, m.endAngle), p = this.startAngleRad = u.start, f = (u = (this.endAngleRad = u.end) - p, this.points), g = m.dataLabels.distance, m = m.ignoreHiddenPoint, v = f.length;
              for (t || (this.center = t = this.getCenter()), this.getX = function (e, i, o) {
                  return n = Math.asin(Math.min((e - t[1]) / (t[2] / 2 + o.labelDistance), 1)), t[0] + (i ? -1 : 1) * Math.cos(n) * (t[2] / 2 + o.labelDistance);
                }, s = 0; s < v; s++)
                (a = f[s]).labelDistance = l(a.options.dataLabels && a.options.dataLabels.distance, g), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, a.labelDistance), e = p + h * u, m && !a.visible || (h += a.percentage / 100), i = p + h * u, a.shapeType = 'arc', a.shapeArgs = {
                  x: t[0],
                  y: t[1],
                  r: t[2] / 2,
                  innerR: t[3] / 2,
                  start: Math.round(1000 * e) / 1000,
                  end: Math.round(1000 * i) / 1000
                }, (n = (i + e) / 2) > 1.5 * Math.PI ? n -= 2 * Math.PI : n < -Math.PI / 2 && (n += 2 * Math.PI), a.slicedTranslation = {
                  translateX: Math.round(Math.cos(n) * c),
                  translateY: Math.round(Math.sin(n) * c)
                }, i = Math.cos(n) * t[2] / 2, o = Math.sin(n) * t[2] / 2, a.tooltipPos = [
                  t[0] + 0.7 * i,
                  t[1] + 0.7 * o
                ], a.half = n < -Math.PI / 2 || n > Math.PI / 2 ? 1 : 0, a.angle = n, e = Math.min(d, a.labelDistance / 5), a.labelPos = [
                  t[0] + i + Math.cos(n) * a.labelDistance,
                  t[1] + o + Math.sin(n) * a.labelDistance,
                  t[0] + i + Math.cos(n) * e,
                  t[1] + o + Math.sin(n) * e,
                  t[0] + i,
                  t[1] + o,
                  0 > a.labelDistance ? 'center' : a.half ? 'right' : 'left',
                  n
                ];
            },
            drawGraph: null,
            drawPoints: function () {
              var t, e, i, n, r = this, a = r.chart.renderer, h = r.options.shadow;
              h && !r.shadowGroup && (r.shadowGroup = a.g('shadow').add(r.group)), o(r.points, function (o) {
                if (e = o.graphic, o.isNull)
                  e && (o.graphic = e.destroy());
                else {
                  n = o.shapeArgs, t = o.getTranslate();
                  var l = o.shadowGroup;
                  h && !l && (l = o.shadowGroup = a.g('shadow').add(r.shadowGroup)), l && l.attr(t), i = r.pointAttribs(o, o.selected && 'select'), e ? e.setRadialReference(r.center).attr(i).animate(s(n, t)) : (o.graphic = e = a[o.shapeType](n).setRadialReference(r.center).attr(t).add(r.group), e.attr(i).attr({ 'stroke-linejoin': 'round' }).shadow(h, l)), e.attr({ visibility: o.visible ? 'inherit' : 'hidden' }), e.addClass(o.getClassName());
                }
              });
            },
            searchPoint: h,
            sortByAngle: function (t, e) {
              t.sort(function (t, i) {
                return void 0 !== t.angle && (i.angle - t.angle) * e;
              });
            },
            drawLegendSymbol: t.LegendSymbolMixin.drawRectangle,
            getCenter: i.getCenter,
            getSymbol: h
          }, {
            init: function () {
              c.prototype.init.apply(this, arguments);
              var t, i = this;
              return i.name = l(i.name, 'Slice'), t = function (t) {
                i.slice('select' === t.type);
              }, e(i, 'select', t), e(i, 'unselect', t), i;
            },
            isValid: function () {
              return t.isNumber(this.y, !0) && 0 <= this.y;
            },
            setVisible: function (t, e) {
              var i = this, n = i.series, s = n.chart, r = n.options.ignoreHiddenPoint;
              e = l(e, r), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, n.options.data[a(i, n.data)] = i.options, o([
                'graphic',
                'dataLabel',
                'connector',
                'shadowGroup'
              ], function (e) {
                i[e] && i[e][t ? 'show' : 'hide'](!0);
              }), i.legendItem && s.legend.colorizeItem(i, t), t || 'hover' !== i.state || i.setState(''), r && (n.isDirty = !0), e && s.redraw());
            },
            slice: function (t, e, i) {
              var o = this.series;
              p(i, o.chart), l(e, !0), this.sliced = this.options.sliced = n(t) ? t : !this.sliced, o.options.data[a(this, o.data)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
            },
            getTranslate: function () {
              return this.sliced ? this.slicedTranslation : {
                translateX: 0,
                translateY: 0
              };
            },
            haloPath: function (t) {
              var e = this.shapeArgs;
              return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                innerR: this.shapeArgs.r - 1,
                start: e.start,
                end: e.end
              });
            }
          });
        }(c), function (t) {
          var e = t.addEvent, i = t.arrayMax, n = t.defined, o = t.each, s = t.extend, r = t.format, a = t.map, h = t.merge, l = t.noop, c = t.pick, d = t.relativeLength, u = t.Series, p = t.seriesTypes, f = t.some, g = t.stableSort, m = t.isArray, v = t.splat;
          t.distribute = function (e, i, n) {
            function s(t, e) {
              return t.target - e.target;
            }
            var r, h, l = !0, d = e, u = [];
            h = 0;
            var p = d.reducedLen || i;
            for (r = e.length; r--;)
              h += e[r].size;
            if (h > p) {
              for (g(e, function (t, e) {
                  return (e.rank || 0) - (t.rank || 0);
                }), h = r = 0; h <= p;)
                h += e[r].size, r++;
              u = e.splice(r - 1, e.length);
            }
            for (g(e, s), e = a(e, function (t) {
                return {
                  size: t.size,
                  targets: [t.target],
                  align: c(t.align, 0.5)
                };
              }); l;) {
              for (r = e.length; r--;)
                l = e[r], h = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = Math.min(Math.max(0, h - l.size * l.align), i - l.size);
              for (r = e.length, l = !1; r--;)
                0 < r && e[r - 1].pos + e[r - 1].size > e[r].pos && (e[r - 1].size += e[r].size, e[r - 1].targets = e[r - 1].targets.concat(e[r].targets), e[r - 1].align = 0.5, e[r - 1].pos + e[r - 1].size > i && (e[r - 1].pos = i - e[r - 1].size), e.splice(r, 1), l = !0);
            }
            d.push.apply(d, u), r = 0, f(e, function (e) {
              var s = 0;
              if (f(e.targets, function () {
                  if (d[r].pos = e.pos + s, Math.abs(d[r].pos - d[r].target) > n)
                    return o(d.slice(0, r + 1), function (t) {
                      delete t.pos;
                    }), d.reducedLen = (d.reducedLen || i) - 0.1 * i, d.reducedLen > 0.1 * i && t.distribute(d, i, n), !0;
                  s += d[r].size, r++;
                }))
                return !0;
            }), g(d, s);
          }, u.prototype.drawDataLabels = function () {
            function i(t, e) {
              var i, n = [];
              if (m(t) && !m(e))
                n = a(t, function (t) {
                  return h(t, e);
                });
              else if (m(e) && !m(t))
                n = a(e, function (e) {
                  return h(t, e);
                });
              else if (m(t) || m(e))
                for (i = Math.max(t.length, e.length); i--;)
                  n[i] = h(t[i], e[i]);
              else
                n = h(t, e);
              return n;
            }
            var s, l, d = this, u = d.chart, p = d.options, f = p.dataLabels, g = d.points, y = d.hasRendered || 0, x = c(f.defer, !!p.animation), b = u.renderer;
            f = i(i(u.options.plotOptions && u.options.plotOptions.series && u.options.plotOptions.series.dataLabels, u.options.plotOptions && u.options.plotOptions[d.type] && u.options.plotOptions[d.type].dataLabels), f);
            (m(f) || f.enabled || d._hasPointLabels) && (l = d.plotGroup('dataLabelsGroup', 'data-labels', x && !y ? 'hidden' : 'visible', f.zIndex || 6), x && (l.attr({ opacity: +y }), y || e(d, 'afterAnimate', function () {
              d.visible && l.show(!0), l[p.animation ? 'animate' : 'attr']({ opacity: 1 }, { duration: 200 });
            })), o(g, function (e) {
              s = v(i(f, e.dlOptions || e.options && e.options.dataLabels)), o(s, function (i, o) {
                var s, a, h, f, g = i.enabled && !e.isNull && function (t, e) {
                    var i = e.filter;
                    return !i || (e = i.operator, t = t[i.property], i = i.value, '>' === e && t > i || '<' === e && t < i || '>=' === e && t >= i || '<=' === e && t <= i || '==' === e && t == i || '===' === e && t === i);
                  }(e, i), m = e.dataLabels ? e.dataLabels[o] : e.dataLabel, v = e.connectors ? e.connectors[o] : e.connector, y = !m;
                g && (s = e.getLabelConfig(), a = i[e.formatPrefix + 'Format'] || i.format, s = n(a) ? r(a, s, u.time) : (i[e.formatPrefix + 'Formatter'] || i.formatter).call(s, i), a = i.style, h = i.rotation, a.color = c(i.color, a.color, d.color, '#000000'), 'contrast' === a.color && (e.contrastColor = b.getContrast(e.color || d.color), a.color = i.inside || 0 > c(i.distance, e.labelDistance) || p.stacking ? e.contrastColor : '#000000'), p.cursor && (a.cursor = p.cursor), f = {
                  fill: i.backgroundColor,
                  stroke: i.borderColor,
                  'stroke-width': i.borderWidth,
                  r: i.borderRadius || 0,
                  rotation: h,
                  padding: i.padding,
                  zIndex: 1
                }, t.objectEach(f, function (t, e) {
                  void 0 === t && delete f[e];
                })), !m || g && n(s) ? g && n(s) && (m ? f.text = s : (e.dataLabels = e.dataLabels || [], m = e.dataLabels[o] = h ? b.text(s, 0, -9999).addClass('highcharts-data-label') : b.label(s, 0, -9999, i.shape, null, null, i.useHTML, null, 'data-label'), o || (e.dataLabel = m), m.addClass(' highcharts-data-label-color-' + e.colorIndex + ' ' + (i.className || '') + (i.useHTML ? ' highcharts-tracker' : ''))), m.options = i, m.attr(f), m.css(a).shadow(i.shadow), m.added || m.add(l), d.alignDataLabel(e, m, i, null, y)) : (e.dataLabel = e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[o]), o || delete e.dataLabel, v && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[o])));
              });
            })), t.fireEvent(this, 'afterDrawDataLabels');
          }, u.prototype.alignDataLabel = function (t, e, i, n, o) {
            var r, a = this.chart, h = a.inverted, l = c(t.dlBox && t.dlBox.centerX, t.plotX, -9999), d = c(t.plotY, -9999), u = e.getBBox(), p = i.rotation, f = i.align, g = this.visible && (t.series.forceDL || a.isInsidePlot(l, Math.round(d), h) || n && a.isInsidePlot(l, h ? n.x + 1 : n.y + n.height - 1, h)), m = 'justify' === c(i.overflow, 'justify');
            g && (r = i.style.fontSize, r = a.renderer.fontMetrics(r, e).b, n = s({
              x: h ? this.yAxis.len - d : l,
              y: Math.round(h ? this.xAxis.len - l : d),
              width: 0,
              height: 0
            }, n), s(i, {
              width: u.width,
              height: u.height
            }), p ? (m = !1, l = a.renderer.rotCorr(r, p), l = {
              x: n.x + i.x + n.width / 2 + l.x,
              y: n.y + i.y + {
                top: 0,
                middle: 0.5,
                bottom: 1
              }[i.verticalAlign] * n.height
            }, e[o ? 'attr' : 'animate'](l).attr({ align: f }), d = 180 < (d = (p + 720) % 360) && 360 > d, 'left' === f ? l.y -= d ? u.height : 0 : 'center' === f ? (l.x -= u.width / 2, l.y -= u.height / 2) : 'right' === f && (l.x -= u.width, l.y -= d ? 0 : u.height), e.placed = !0, e.alignAttr = l) : (e.align(i, null, n), l = e.alignAttr), m && 0 <= n.height ? t.isLabelJustified = this.justifyDataLabel(e, i, l, u, n, o) : c(i.crop, !0) && (g = a.isInsidePlot(l.x, l.y) && a.isInsidePlot(l.x + u.width, l.y + u.height)), i.shape && !p) && e[o ? 'attr' : 'animate']({
              anchorX: h ? a.plotWidth - t.plotY : t.plotX,
              anchorY: h ? a.plotHeight - t.plotX : t.plotY
            }), g || (e.attr({ y: -9999 }), e.placed = !1);
          }, u.prototype.justifyDataLabel = function (t, e, i, n, o, s) {
            var r, a, h = this.chart, l = e.align, c = e.verticalAlign, d = t.box ? 0 : t.padding || 0;
            return 0 > (r = i.x + d) && ('right' === l ? e.align = 'left' : e.x = -r, a = !0), (r = i.x + n.width - d) > h.plotWidth && ('left' === l ? e.align = 'right' : e.x = h.plotWidth - r, a = !0), 0 > (r = i.y + d) && ('bottom' === c ? e.verticalAlign = 'top' : e.y = -r, a = !0), (r = i.y + n.height - d) > h.plotHeight && ('top' === c ? e.verticalAlign = 'bottom' : e.y = h.plotHeight - r, a = !0), a && (t.placed = !s, t.align(e, null, o)), a;
          }, p.pie && (p.pie.prototype.drawDataLabels = function () {
            var e, s, r, a, h, l, d, p, f, g, m = this, v = m.data, y = m.chart, x = m.options.dataLabels, b = c(x.connectorPadding, 10), w = c(x.connectorWidth, 1), k = y.plotWidth, S = y.plotHeight, M = Math.round(y.chartWidth / 3), A = m.center, T = A[2] / 2, C = A[1], L = [
                [],
                []
              ], P = [
                0,
                0,
                0,
                0
              ];
            m.visible && (x.enabled || m._hasPointLabels) && (o(v, function (t) {
              t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({ width: 'auto' }).css({
                width: 'auto',
                textOverflow: 'clip'
              }), t.dataLabel.shortened = !1);
            }), u.prototype.drawDataLabels.apply(m), o(v, function (t) {
              t.dataLabel && (t.visible ? (L[t.half].push(t), t.dataLabel._pos = null, !n(x.style.width) && !n(t.options.dataLabels && t.options.dataLabels.style && t.options.dataLabels.style.width) && t.dataLabel.getBBox().width > M && (t.dataLabel.css({ width: 0.7 * M }), t.dataLabel.shortened = !0)) : (t.dataLabel = t.dataLabel.destroy(), t.dataLabels && 1 === t.dataLabels.length && delete t.dataLabels));
            }), o(L, function (i, s) {
              var u, v, w, M = i.length, L = [];
              if (M)
                for (m.sortByAngle(i, s - 0.5), 0 < m.maxLabelDistance && (u = Math.max(0, C - T - m.maxLabelDistance), v = Math.min(C + T + m.maxLabelDistance, y.plotHeight), o(i, function (t) {
                    0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, C - T - t.labelDistance), t.bottom = Math.min(C + T + t.labelDistance, y.plotHeight), w = t.dataLabel.getBBox().height || 21, t.distributeBox = {
                      target: t.labelPos[1] - t.top + w / 2,
                      size: w,
                      rank: t.y
                    }, L.push(t.distributeBox));
                  }), u = v + w - u, t.distribute(L, u, u / 5)), g = 0; g < M; g++)
                  e = i[g], h = e.labelPos, r = e.dataLabel, f = !1 === e.visible ? 'hidden' : 'inherit', p = u = h[1], L && n(e.distributeBox) && (void 0 === e.distributeBox.pos ? f = 'hidden' : (l = e.distributeBox.size, p = e.top + e.distributeBox.pos)), delete e.positionIndex, d = x.justify ? A[0] + (s ? -1 : 1) * (T + e.labelDistance) : m.getX(p < e.top + 2 || p > e.bottom - 2 ? u : p, s, e), r._attr = {
                    visibility: f,
                    align: h[6]
                  }, r._pos = {
                    x: d + x.x + ({
                      left: b,
                      right: -b
                    }[h[6]] || 0),
                    y: p + x.y - 10
                  }, h.x = d, h.y = p, c(x.crop, !0) && (a = r.getBBox().width, u = null, d - a < b && 1 === s ? (u = Math.round(a - d + b), P[3] = Math.max(u, P[3])) : d + a > k - b && 0 === s && (u = Math.round(d + a - k + b), P[1] = Math.max(u, P[1])), 0 > p - l / 2 ? P[0] = Math.max(Math.round(l / 2 - p), P[0]) : p + l / 2 > S && (P[2] = Math.max(Math.round(p + l / 2 - S), P[2])), r.sideOverflow = u);
            }), 0 === i(P) || this.verifyDataLabelOverflow(P)) && (this.placeDataLabels(), w && o(this.points, function (t) {
              var e;
              s = t.connector, (r = t.dataLabel) && r._pos && t.visible && 0 < t.labelDistance ? (f = r._attr.visibility, (e = !s) && (t.connector = s = y.renderer.path().addClass('highcharts-data-label-connector  highcharts-color-' + t.colorIndex + (t.className ? ' ' + t.className : '')).add(m.dataLabelsGroup), s.attr({
                'stroke-width': w,
                stroke: x.connectorColor || t.color || '#666666'
              })), s[e ? 'attr' : 'animate']({ d: m.connectorPath(t.labelPos) }), s.attr('visibility', f)) : s && (t.connector = s.destroy());
            }));
          }, p.pie.prototype.connectorPath = function (t) {
            var e = t.x, i = t.y;
            return c(this.options.dataLabels.softConnector, !0) ? [
              'M',
              e + ('left' === t[6] ? 5 : -5),
              i,
              'C',
              e,
              i,
              2 * t[2] - t[4],
              2 * t[3] - t[5],
              t[2],
              t[3],
              'L',
              t[4],
              t[5]
            ] : [
              'M',
              e + ('left' === t[6] ? 5 : -5),
              i,
              'L',
              t[2],
              t[3],
              'L',
              t[4],
              t[5]
            ];
          }, p.pie.prototype.placeDataLabels = function () {
            o(this.points, function (t) {
              var e = t.dataLabel;
              e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow, e.css({
                width: e._attr.width + 'px',
                textOverflow: (this.options.dataLabels.style || {}).textOverflow || 'ellipsis'
              }), e.shortened = !0), e.attr(e._attr), e[e.moved ? 'animate' : 'attr'](t), e.moved = !0) : e && e.attr({ y: -9999 }));
            }, this);
          }, p.pie.prototype.alignDataLabel = l, p.pie.prototype.verifyDataLabelOverflow = function (t) {
            var e, i = this.center, n = this.options, o = n.center, s = n.minSize || 80, r = null !== n.size;
            return r || (null !== o[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), s) : (e = Math.max(i[2] - t[1] - t[3], s), i[0] += (t[3] - t[1]) / 2), null !== o[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), s) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), s), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(d(n.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : r = !0), r;
          }), p.column && (p.column.prototype.alignDataLabel = function (t, e, i, n, o) {
            var s = this.chart.inverted, r = t.series, a = t.dlBox || t.shapeArgs, l = c(t.below, t.plotY > c(this.translatedThreshold, r.yAxis.len)), d = c(i.inside, !!this.options.stacking);
            a && (0 > (n = h(a)).y && (n.height += n.y, n.y = 0), 0 < (a = n.y + n.height - r.yAxis.len) && (n.height -= a), s && (n = {
              x: r.yAxis.len - n.y - n.height,
              y: r.xAxis.len - n.x - n.width,
              width: n.height,
              height: n.width
            }), d || (s ? (n.x += l ? 0 : n.width, n.width = 0) : (n.y += l ? n.height : 0, n.height = 0))), i.align = c(i.align, !s || d ? 'center' : l ? 'right' : 'left'), i.verticalAlign = c(i.verticalAlign, s || d ? 'middle' : l ? 'top' : 'bottom'), u.prototype.alignDataLabel.call(this, t, e, i, n, o), t.isLabelJustified && t.contrastColor && e.css({ color: t.contrastColor });
          });
        }(c), function (t) {
          var e = t.Chart, i = t.each, n = t.isArray, o = t.objectEach, s = t.pick;
          (t = t.addEvent)(e, 'render', function () {
            var t = [];
            i(this.labelCollectors || [], function (e) {
              t = t.concat(e());
            }), i(this.yAxis || [], function (e) {
              e.options.stackLabels && !e.options.stackLabels.allowOverlap && o(e.stacks, function (e) {
                o(e, function (e) {
                  t.push(e.label);
                });
              });
            }), i(this.series || [], function (e) {
              var o = e.options.dataLabels;
              e.visible && (!1 !== o.enabled || e._hasPointLabels) && i(e.points, function (e) {
                if (e.visible) {
                  var o = n(e.dataLabels) ? e.dataLabels : e.dataLabel ? [e.dataLabel] : [];
                  i(o, function (i) {
                    var n = i.options;
                    i.labelrank = s(n.labelrank, e.labelrank, e.shapeArgs && e.shapeArgs.height), n.allowOverlap || t.push(i);
                  });
                }
              });
            }), this.hideOverlappingLabels(t);
          }), e.prototype.hideOverlappingLabels = function (t) {
            var e, n, o, s, r, a, h = t.length, l = this.renderer, c = function (t, e, i, n, o, s, r, a) {
                return !(o > t + i || o + r < t || s > e + n || s + a < e);
              };
            for (o = function (t) {
                var e, i, n, o = t.box ? 0 : t.padding || 0;
                if (n = 0, t && (!t.alignAttr || t.placed))
                  return e = t.alignAttr || {
                    x: t.attr('x'),
                    y: t.attr('y')
                  }, i = t.parentGroup, t.width || (n = t.getBBox(), t.width = n.width, t.height = n.height, n = l.fontMetrics(null, t.element).h), {
                    x: e.x + (i.translateX || 0) + o,
                    y: e.y + (i.translateY || 0) + o - n,
                    width: t.width - 2 * o,
                    height: t.height - 2 * o
                  };
              }, n = 0; n < h; n++)
              (e = t[n]) && (e.oldOpacity = e.opacity, e.newOpacity = 1, e.absoluteBox = o(e));
            for (t.sort(function (t, e) {
                return (e.labelrank || 0) - (t.labelrank || 0);
              }), n = 0; n < h; n++)
              for (a = (o = t[n]) && o.absoluteBox, e = n + 1; e < h; ++e)
                r = (s = t[e]) && s.absoluteBox, a && r && o !== s && 0 !== o.newOpacity && 0 !== s.newOpacity && (r = c(a.x, a.y, a.width, a.height, r.x, r.y, r.width, r.height)) && ((o.labelrank < s.labelrank ? o : s).newOpacity = 0);
            i(t, function (t) {
              var e, i;
              t && (i = t.newOpacity, t.oldOpacity !== i && (t.alignAttr && t.placed ? (i ? t.show(!0) : e = function () {
                t.hide();
              }, t.alignAttr.opacity = i, t[t.isOld ? 'animate' : 'attr'](t.alignAttr, null, e)) : t.attr({ opacity: i })), t.isOld = !0);
            });
          };
        }(c), function (t) {
          var e, i = t.addEvent, n = t.Chart, o = t.createElement, s = t.css, r = t.defaultOptions, a = t.defaultPlotOptions, h = t.each, l = t.extend, c = t.fireEvent, d = t.hasTouch, u = t.inArray, p = t.isObject, f = t.Legend, g = t.merge, m = t.pick, v = t.Point, y = t.Series, x = t.seriesTypes, b = t.svg;
          e = t.TrackerMixin = {
            drawTrackerPoint: function () {
              var t = this, e = t.chart.pointer, i = function (t) {
                  var i = e.getPointFromEvent(t);
                  void 0 !== i && (e.isDirectTouch = !0, i.onMouseOver(t));
                };
              h(t.points, function (t) {
                t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t);
              }), t._hasTracking || (h(t.trackerGroups, function (n) {
                t[n] && (t[n].addClass('highcharts-tracker').on('mouseover', i).on('mouseout', function (t) {
                  e.onTrackerMouseOut(t);
                }), d && t[n].on('touchstart', i), t.options.cursor && t[n].css(s).css({ cursor: t.options.cursor }));
              }), t._hasTracking = !0), c(this, 'afterDrawTracker');
            },
            drawTrackerGraph: function () {
              var t, e = this, i = e.options, n = i.trackByArea, o = [].concat(n ? e.areaPath : e.graphPath), s = o.length, r = e.chart, a = r.pointer, l = r.renderer, u = r.options.tooltip.snap, p = e.tracker, f = function () {
                  r.hoverSeries !== e && e.onMouseOver();
                }, g = 'rgba(192,192,192,' + (b ? 0.0001 : 0.002) + ')';
              if (s && !n)
                for (t = s + 1; t--;)
                  'M' === o[t] && o.splice(t + 1, 0, o[t + 1] - u, o[t + 2], 'L'), (t && 'M' === o[t] || t === s) && o.splice(t, 0, 'L', o[t - 2] + u, o[t - 1]);
              p ? p.attr({ d: o }) : e.graph && (e.tracker = l.path(o).attr({
                'stroke-linejoin': 'round',
                stroke: g,
                fill: n ? g : 'none',
                'stroke-width': e.graph.strokeWidth() + (n ? 0 : 2 * u),
                visibility: e.visible ? 'visible' : 'hidden',
                zIndex: 2
              }).addClass(n ? 'highcharts-tracker-area' : 'highcharts-tracker-line').add(e.group), h([
                e.tracker,
                e.markerGroup
              ], function (t) {
                t.addClass('highcharts-tracker').on('mouseover', f).on('mouseout', function (t) {
                  a.onTrackerMouseOut(t);
                }), i.cursor && t.css({ cursor: i.cursor }), d && t.on('touchstart', f);
              })), c(this, 'afterDrawTracker');
            }
          }, x.column && (x.column.prototype.drawTracker = e.drawTrackerPoint), x.pie && (x.pie.prototype.drawTracker = e.drawTrackerPoint), x.scatter && (x.scatter.prototype.drawTracker = e.drawTrackerPoint), r.legend.itemStyle.cursor = 'pointer', l(f.prototype, {
            setItemEvents: function (t, e, i) {
              var n = this, o = n.chart.renderer.boxWrapper, s = 'highcharts-legend-' + (t instanceof v ? 'point' : 'series') + '-active';
              (i ? e : t.legendGroup).on('mouseover', function () {
                t.setState('hover'), o.addClass(s), e.css(n.options.itemHoverStyle);
              }).on('mouseout', function () {
                e.css(g(t.visible ? n.itemStyle : n.itemHiddenStyle)), o.removeClass(s), t.setState();
              }).on('click', function (e) {
                var i = function () {
                  t.setVisible && t.setVisible();
                };
                o.removeClass(s), e = { browserEvent: e }, t.firePointEvent ? t.firePointEvent('legendItemClick', e, i) : c(t, 'legendItemClick', e, i);
              });
            },
            createCheckboxForItem: function (t) {
              t.checkbox = o('input', {
                type: 'checkbox',
                className: 'highcharts-legend-checkbox',
                checked: t.selected,
                defaultChecked: t.selected
              }, this.options.itemCheckboxStyle, this.chart.container), i(t.checkbox, 'click', function (e) {
                c(t.series || t, 'checkboxClick', {
                  checked: e.target.checked,
                  item: t
                }, function () {
                  t.select();
                });
              });
            }
          }), l(n.prototype, {
            showResetZoom: function () {
              function t() {
                e.zoomOut();
              }
              var e = this, i = r.lang, n = e.options.chart.resetZoomButton, o = n.theme, s = o.states, a = 'chart' === n.relativeTo ? null : 'plotBox';
              c(this, 'beforeShowResetZoom', null, function () {
                e.resetZoomButton = e.renderer.button(i.resetZoom, null, null, t, o, s && s.hover).attr({
                  align: n.position.align,
                  title: i.resetZoomTitle
                }).addClass('highcharts-reset-zoom').add().align(n.position, !1, a);
              });
            },
            zoomOut: function () {
              c(this, 'selection', { resetSelection: !0 }, this.zoom);
            },
            zoom: function (t) {
              var e, i, n = this.pointer, o = !1;
              !t || t.resetSelection ? (h(this.axes, function (t) {
                e = t.zoom();
              }), n.initiated = !1) : h(t.xAxis.concat(t.yAxis), function (t) {
                var i = t.axis;
                n[i.isXAxis ? 'zoomX' : 'zoomY'] && (e = i.zoom(t.min, t.max), i.displayBtn && (o = !0));
              }), i = this.resetZoomButton, o && !i ? this.showResetZoom() : !o && p(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(m(this.options.chart.animation, t && t.animation, 100 > this.pointCount));
            },
            pan: function (t, e) {
              var i, n = this, o = n.hoverPoints;
              o && h(o, function (t) {
                t.setState();
              }), h('xy' === e ? [
                1,
                0
              ] : [1], function (e) {
                var o, s = (e = n[e ? 'xAxis' : 'yAxis'][0]).horiz, r = t[s ? 'chartX' : 'chartY'], a = n[s = s ? 'mouseDownX' : 'mouseDownY'], h = (e.pointRange || 0) / 2, l = e.reversed && !n.inverted || !e.reversed && n.inverted ? -1 : 1, c = e.getExtremes(), d = e.toValue(a - r, !0) + h * l;
                a = (o = (l = e.toValue(a + e.len - r, !0) - h * l) < d) ? l : d, d = o ? d : l;
                0 < (o = (l = Math.min(c.dataMin, h ? c.min : e.toValue(e.toPixels(c.min) - e.minPixelPadding))) - a) && (d += o, a = l), 0 < (o = d - (h = Math.max(c.dataMax, h ? c.max : e.toValue(e.toPixels(c.max) + e.minPixelPadding)))) && (d = h, a -= o), e.series.length && a !== c.min && d !== c.max && (e.setExtremes(a, d, !1, !1, { trigger: 'pan' }), i = !0), n[s] = r;
              }), i && n.redraw(!1), s(n.container, { cursor: 'move' });
            }
          }), l(v.prototype, {
            select: function (t, e) {
              var i = this, n = i.series, o = n.chart;
              t = m(t, !i.selected), i.firePointEvent(t ? 'select' : 'unselect', { accumulate: e }, function () {
                i.selected = i.options.selected = t, n.options.data[u(i, n.data)] = i.options, i.setState(t && 'select'), e || h(o.getSelectedPoints(), function (t) {
                  t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[u(t, n.data)] = t.options, t.setState(''), t.firePointEvent('unselect'));
                });
              });
            },
            onMouseOver: function (t) {
              var e = this.series.chart, i = e.pointer;
              t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this);
            },
            onMouseOut: function () {
              var t = this.series.chart;
              this.firePointEvent('mouseOut'), h(t.hoverPoints || [], function (t) {
                t.setState();
              }), t.hoverPoints = t.hoverPoint = null;
            },
            importEvents: function () {
              if (!this.hasImportedEvents) {
                var e = this, n = g(e.series.options.point, e.options).events;
                e.events = n, t.objectEach(n, function (t, n) {
                  i(e, n, t);
                }), this.hasImportedEvents = !0;
              }
            },
            setState: function (t, e) {
              var i, n = Math.floor(this.plotX), o = this.plotY, s = this.series, r = s.options.states[t || 'normal'] || {}, h = a[s.type].marker && s.options.marker, d = h && !1 === h.enabled, u = h && h.states && h.states[t || 'normal'] || {}, p = !1 === u.enabled, f = s.stateMarkerGraphic, g = this.marker || {}, v = s.chart, y = s.halo, x = h && s.markerAttribs;
              (t = t || '') === this.state && !e || this.selected && 'select' !== t || !1 === r.enabled || t && (p || d && !1 === u.enabled) || t && g.states && g.states[t] && !1 === g.states[t].enabled || (x && (i = s.markerAttribs(this, t)), this.graphic ? (this.state && this.graphic.removeClass('highcharts-point-' + this.state), t && this.graphic.addClass('highcharts-point-' + t), this.graphic.animate(s.pointAttribs(this, t), m(v.options.chart.animation, r.animation)), i && this.graphic.animate(i, m(v.options.chart.animation, u.animation, h.animation)), f && f.hide()) : (t && u && (h = g.symbol || s.symbol, f && f.currentSymbol !== h && (f = f.destroy()), f ? f[e ? 'animate' : 'attr']({
                x: i.x,
                y: i.y
              }) : h && (s.stateMarkerGraphic = f = v.renderer.symbol(h, i.x, i.y, i.width, i.height).add(s.markerGroup), f.currentSymbol = h), f && f.attr(s.pointAttribs(this, t))), f && (f[t && v.isInsidePlot(n, o, v.inverted) ? 'show' : 'hide'](), f.element.point = this)), (n = r.halo) && n.size ? (y || (s.halo = y = v.renderer.path().add((this.graphic || f).parentGroup)), y.show()[e ? 'animate' : 'attr']({ d: this.haloPath(n.size) }), y.attr({
                class: 'highcharts-halo highcharts-color-' + m(this.colorIndex, s.colorIndex) + (this.className ? ' ' + this.className : ''),
                zIndex: -1
              }), y.point = this, y.attr(l({
                fill: this.color || s.color,
                'fill-opacity': n.opacity
              }, n.attributes))) : y && y.point && y.point.haloPath && y.animate({ d: y.point.haloPath(0) }, null, y.hide), this.state = t, c(this, 'afterSetState'));
            },
            haloPath: function (t) {
              return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t);
            }
          }), l(y.prototype, {
            onMouseOver: function () {
              var t = this.chart, e = t.hoverSeries;
              e && e !== this && e.onMouseOut(), this.options.events.mouseOver && c(this, 'mouseOver'), this.setState('hover'), t.hoverSeries = this;
            },
            onMouseOut: function () {
              var t = this.options, e = this.chart, i = e.tooltip, n = e.hoverPoint;
              e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && c(this, 'mouseOut'), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState();
            },
            setState: function (t) {
              var e = this, i = e.options, n = e.graph, o = i.states, s = i.lineWidth;
              i = 0;
              if (t = t || '', e.state !== t && (h([
                  e.group,
                  e.markerGroup,
                  e.dataLabelsGroup
                ], function (i) {
                  i && (e.state && i.removeClass('highcharts-series-' + e.state), t && i.addClass('highcharts-series-' + t));
                }), e.state = t, !o[t] || !1 !== o[t].enabled) && (t && (s = o[t].lineWidth || s + (o[t].lineWidthPlus || 0)), n && !n.dashstyle))
                for (s = { 'stroke-width': s }, n.animate(s, m(o[t || 'normal'] && o[t || 'normal'].animation, e.chart.options.chart.animation)); e['zone-graph-' + i];)
                  e['zone-graph-' + i].attr(s), i += 1;
            },
            setVisible: function (t, e) {
              var i, n = this, o = n.chart, s = n.legendItem, r = o.options.chart.ignoreHiddenSeries, a = n.visible;
              i = (n.visible = t = n.options.visible = n.userOptions.visible = void 0 === t ? !a : t) ? 'show' : 'hide', h([
                'group',
                'dataLabelsGroup',
                'markerGroup',
                'tracker',
                'tt'
              ], function (t) {
                n[t] && n[t][i]();
              }), o.hoverSeries !== n && (o.hoverPoint && o.hoverPoint.series) !== n || n.onMouseOut(), s && o.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && h(o.series, function (t) {
                t.options.stacking && t.visible && (t.isDirty = !0);
              }), h(n.linkedSeries, function (e) {
                e.setVisible(t, !1);
              }), r && (o.isDirtyBox = !0), c(n, i), !1 !== e && o.redraw();
            },
            show: function () {
              this.setVisible(!0);
            },
            hide: function () {
              this.setVisible(!1);
            },
            select: function (t) {
              this.selected = t = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), c(this, t ? 'select' : 'unselect');
            },
            drawTracker: e.drawTrackerGraph
          });
        }(c), function (t) {
          var e = t.Chart, i = t.each, n = t.inArray, o = t.isArray, s = t.isObject, r = t.pick, a = t.splat;
          e.prototype.setResponsive = function (e) {
            var n = this.options.responsive, o = [], s = this.currentResponsive;
            n && n.rules && i(n.rules, function (i) {
              void 0 === i._id && (i._id = t.uniqueKey()), this.matchResponsiveRule(i, o, e);
            }, this);
            var r = t.merge.apply(0, t.map(o, function (e) {
              return t.find(n.rules, function (t) {
                return t._id === e;
              }).chartOptions;
            }));
            (o = o.toString() || void 0) !== (s && s.ruleIds) && (s && this.update(s.undoOptions, e), o ? (this.currentResponsive = {
              ruleIds: o,
              mergedOptions: r,
              undoOptions: this.currentOptions(r)
            }, this.update(r, e)) : this.currentResponsive = void 0);
          }, e.prototype.matchResponsiveRule = function (t, e) {
            var i = t.condition;
            (i.callback || function () {
              return this.chartWidth <= r(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= r(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= r(i.minWidth, 0) && this.chartHeight >= r(i.minHeight, 0);
            }).call(this) && e.push(t._id);
          }, e.prototype.currentOptions = function (e) {
            var i = {};
            return function e(i, r, h, l) {
              var c;
              t.objectEach(i, function (t, i) {
                if (!l && -1 < n(i, [
                    'series',
                    'xAxis',
                    'yAxis'
                  ]))
                  for (t = a(t), h[i] = [], c = 0; c < t.length; c++)
                    r[i][c] && (h[i][c] = {}, e(t[c], r[i][c], h[i][c], l + 1));
                else
                  s(t) ? (h[i] = o(t) ? [] : {}, e(t, r[i] || {}, h[i], l + 1)) : h[i] = r[i] || null;
              });
            }(e, this.options, i, 0), i;
          };
        }(c), c;
      });
    }.call(this, i('YuTi')(t)));
  },
  '6nsN': function (t, e, i) {
    'use strict';
    i('LOEa');
  },
  '88ZB': function (t, e, i) {
    'use strict';
    (function (t) {
      function n(t) {
        return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var o = i('mrSG'), s = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: '${JSCORE_VERSION}'
        }, r = function (t, e) {
          if (!t)
            throw a(e);
        }, a = function (t) {
          return new Error('Firebase Database (' + s.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + t);
        }, h = function (t) {
          for (var e = [], i = 0, n = 0; n < t.length; n++) {
            var o = t.charCodeAt(n);
            o < 128 ? e[i++] = o : o < 2048 ? (e[i++] = o >> 6 | 192, e[i++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < t.length && 56320 == (64512 & t.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++n)), e[i++] = o >> 18 | 240, e[i++] = o >> 12 & 63 | 128, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128) : (e[i++] = o >> 12 | 224, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128);
          }
          return e;
        }, l = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/=';
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.';
          },
          HAS_NATIVE_SUPPORT: 'function' == typeof atob,
          encodeByteArray: function (t, e) {
            if (!Array.isArray(t))
              throw Error('encodeByteArray takes an array as a parameter');
            this.init_();
            for (var i = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [], o = 0; o < t.length; o += 3) {
              var s = t[o], r = o + 1 < t.length, a = r ? t[o + 1] : 0, h = o + 2 < t.length, l = h ? t[o + 2] : 0, c = s >> 2, d = (3 & s) << 4 | a >> 4, u = (15 & a) << 2 | l >> 6, p = 63 & l;
              h || (p = 64, r || (u = 64)), n.push(i[c], i[d], i[u], i[p]);
            }
            return n.join('');
          },
          encodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(h(t), e);
          },
          decodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function (t) {
              for (var e = [], i = 0, n = 0; i < t.length;) {
                var o = t[i++];
                if (o < 128)
                  e[n++] = String.fromCharCode(o);
                else if (o > 191 && o < 224) {
                  var s = t[i++];
                  e[n++] = String.fromCharCode((31 & o) << 6 | 63 & s);
                } else if (o > 239 && o < 365) {
                  var r = ((7 & o) << 18 | (63 & (s = t[i++])) << 12 | (63 & (a = t[i++])) << 6 | 63 & t[i++]) - 65536;
                  e[n++] = String.fromCharCode(55296 + (r >> 10)), e[n++] = String.fromCharCode(56320 + (1023 & r));
                } else {
                  s = t[i++];
                  var a = t[i++];
                  e[n++] = String.fromCharCode((15 & o) << 12 | (63 & s) << 6 | 63 & a);
                }
              }
              return e.join('');
            }(this.decodeStringToByteArray(t, e));
          },
          decodeStringToByteArray: function (t, e) {
            this.init_();
            for (var i = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [], o = 0; o < t.length;) {
              var s = i[t.charAt(o++)], r = o < t.length ? i[t.charAt(o)] : 0, a = ++o < t.length ? i[t.charAt(o)] : 64, h = ++o < t.length ? i[t.charAt(o)] : 64;
              if (++o, null == s || null == r || null == a || null == h)
                throw Error();
              var l = s << 2 | r >> 4;
              if (n.push(l), 64 !== a) {
                var c = r << 4 & 240 | a >> 2;
                if (n.push(c), 64 !== h) {
                  var d = a << 6 & 192 | h;
                  n.push(d);
                }
              }
            }
            return n;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
              for (var t = 0; t < this.ENCODED_VALS.length; t++)
                this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
            }
          }
        }, c = function (t) {
          try {
            return l.decodeString(t, !0);
          } catch (t) {
            console.error('base64Decode failed: ', t);
          }
          return null;
        };
      function d(t, e) {
        if (!(e instanceof Object))
          return e;
        switch (e.constructor) {
        case Date:
          return new Date(e.getTime());
        case Object:
          void 0 === t && (t = {});
          break;
        case Array:
          t = [];
          break;
        default:
          return e;
        }
        for (var i in e)
          e.hasOwnProperty(i) && (t[i] = d(t[i], e[i]));
        return t;
      }
      var u = function () {
        function t() {
          var t = this;
          this.reject = function () {
          }, this.resolve = function () {
          }, this.promise = new Promise(function (e, i) {
            t.resolve = e, t.reject = i;
          });
        }
        return t.prototype.wrapCallback = function (t) {
          var e = this;
          return function (i, n) {
            i ? e.reject(i) : e.resolve(n), 'function' == typeof t && (e.promise.catch(function () {
            }), 1 === t.length ? t(i) : t(i, n));
          };
        }, t;
      }();
      function p() {
        return 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent ? navigator.userAgent : '';
      }
      function f() {
        try {
          return '[object process]' === Object.prototype.toString.call(t.process);
        } catch (t) {
          return !1;
        }
      }
      var g = function (t) {
          function e(i, n) {
            var o = t.call(this, n) || this;
            return o.code = i, o.name = 'FirebaseError', Object.setPrototypeOf(o, e.prototype), Error.captureStackTrace && Error.captureStackTrace(o, m.prototype.create), o;
          }
          return o.__extends(e, t), e;
        }(Error), m = function () {
          function t(t, e, i) {
            this.service = t, this.serviceName = e, this.errors = i;
          }
          return t.prototype.create = function (t) {
            for (var e = [], i = 1; i < arguments.length; i++)
              e[i - 1] = arguments[i];
            for (var n = e[0] || {}, o = this.service + '/' + t, s = this.errors[t], r = s ? v(s, n) : 'Error', a = this.serviceName + ': ' + r + ' (' + o + ').', h = new g(o, a), l = 0, c = Object.keys(n); l < c.length; l++) {
              var d = c[l];
              '_' !== d.slice(-1) && (d in h && console.warn('Overwriting FirebaseError base field "' + d + '" can cause unexpected behavior.'), h[d] = n[d]);
            }
            return h;
          }, t;
        }();
      function v(t, e) {
        return t.replace(y, function (t, i) {
          var n = e[i];
          return null != n ? String(n) : '<' + i + '?>';
        });
      }
      var y = /\{\$([^}]+)}/g;
      function x(t) {
        return JSON.parse(t);
      }
      var b = function (t) {
        var e = {}, i = {}, n = {}, o = '';
        try {
          var s = t.split('.');
          e = x(c(s[0]) || ''), i = x(c(s[1]) || ''), o = s[2], n = i.d || {}, delete i.d;
        } catch (t) {
        }
        return {
          header: e,
          claims: i,
          data: n,
          signature: o
        };
      };
      var w = function () {
        function t() {
          this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
          for (var t = 1; t < this.blockSize; ++t)
            this.pad_[t] = 0;
          this.reset();
        }
        return t.prototype.reset = function () {
          this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0;
        }, t.prototype.compress_ = function (t, e) {
          e || (e = 0);
          var i = this.W_;
          if ('string' == typeof t)
            for (var n = 0; n < 16; n++)
              i[n] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
          else
            for (n = 0; n < 16; n++)
              i[n] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
          for (n = 16; n < 80; n++) {
            var o = i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16];
            i[n] = 4294967295 & (o << 1 | o >>> 31);
          }
          var s, r, a = this.chain_[0], h = this.chain_[1], l = this.chain_[2], c = this.chain_[3], d = this.chain_[4];
          for (n = 0; n < 80; n++) {
            n < 40 ? n < 20 ? (s = c ^ h & (l ^ c), r = 1518500249) : (s = h ^ l ^ c, r = 1859775393) : n < 60 ? (s = h & l | c & (h | l), r = 2400959708) : (s = h ^ l ^ c, r = 3395469782);
            o = (a << 5 | a >>> 27) + s + d + r + i[n] & 4294967295;
            d = c, c = l, l = 4294967295 & (h << 30 | h >>> 2), h = a, a = o;
          }
          this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + h & 4294967295, this.chain_[2] = this.chain_[2] + l & 4294967295, this.chain_[3] = this.chain_[3] + c & 4294967295, this.chain_[4] = this.chain_[4] + d & 4294967295;
        }, t.prototype.update = function (t, e) {
          if (null != t) {
            void 0 === e && (e = t.length);
            for (var i = e - this.blockSize, n = 0, o = this.buf_, s = this.inbuf_; n < e;) {
              if (0 === s)
                for (; n <= i;)
                  this.compress_(t, n), n += this.blockSize;
              if ('string' == typeof t) {
                for (; n < e;)
                  if (o[s] = t.charCodeAt(n), ++n, ++s === this.blockSize) {
                    this.compress_(o), s = 0;
                    break;
                  }
              } else
                for (; n < e;)
                  if (o[s] = t[n], ++n, ++s === this.blockSize) {
                    this.compress_(o), s = 0;
                    break;
                  }
            }
            this.inbuf_ = s, this.total_ += e;
          }
        }, t.prototype.digest = function () {
          var t = [], e = 8 * this.total_;
          this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var i = this.blockSize - 1; i >= 56; i--)
            this.buf_[i] = 255 & e, e /= 256;
          this.compress_(this.buf_);
          var n = 0;
          for (i = 0; i < 5; i++)
            for (var o = 24; o >= 0; o -= 8)
              t[n] = this.chain_[i] >> o & 255, ++n;
          return t;
        }, t;
      }();
      var k = function () {
        function t(t, e) {
          var i = this;
          this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function () {
            t(i);
          }).catch(function (t) {
            i.error(t);
          });
        }
        return t.prototype.next = function (t) {
          this.forEachObserver(function (e) {
            e.next(t);
          });
        }, t.prototype.error = function (t) {
          this.forEachObserver(function (e) {
            e.error(t);
          }), this.close(t);
        }, t.prototype.complete = function () {
          this.forEachObserver(function (t) {
            t.complete();
          }), this.close();
        }, t.prototype.subscribe = function (t, e, i) {
          var o, s = this;
          if (void 0 === t && void 0 === e && void 0 === i)
            throw new Error('Missing Observer.');
          void 0 === (o = function (t, e) {
            if ('object' !== n(t) || null === t)
              return !1;
            for (var i = 0, o = e; i < o.length; i++) {
              var s = o[i];
              if (s in t && 'function' == typeof t[s])
                return !0;
            }
            return !1;
          }(t, [
            'next',
            'error',
            'complete'
          ]) ? t : {
            next: t,
            error: e,
            complete: i
          }).next && (o.next = S), void 0 === o.error && (o.error = S), void 0 === o.complete && (o.complete = S);
          var r = this.unsubscribeOne.bind(this, this.observers.length);
          return this.finalized && this.task.then(function () {
            try {
              s.finalError ? o.error(s.finalError) : o.complete();
            } catch (t) {
            }
          }), this.observers.push(o), r;
        }, t.prototype.unsubscribeOne = function (t) {
          void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
        }, t.prototype.forEachObserver = function (t) {
          if (!this.finalized)
            for (var e = 0; e < this.observers.length; e++)
              this.sendOne(e, t);
        }, t.prototype.sendOne = function (t, e) {
          var i = this;
          this.task.then(function () {
            if (void 0 !== i.observers && void 0 !== i.observers[t])
              try {
                e(i.observers[t]);
              } catch (t) {
                'undefined' != typeof console && console.error && console.error(t);
              }
          });
        }, t.prototype.close = function (t) {
          var e = this;
          this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then(function () {
            e.observers = void 0, e.onNoObservers = void 0;
          }));
        }, t;
      }();
      function S() {
      }
      function M(t, e, i) {
        var n = '';
        switch (e) {
        case 1:
          n = i ? 'first' : 'First';
          break;
        case 2:
          n = i ? 'second' : 'Second';
          break;
        case 3:
          n = i ? 'third' : 'Third';
          break;
        case 4:
          n = i ? 'fourth' : 'Fourth';
          break;
        default:
          throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }
        var o = t + ' failed: ';
        return o += n + ' argument ';
      }
      e.CONSTANTS = s, e.Deferred = u, e.ErrorFactory = m, e.FirebaseError = g, e.MAX_VALUE_MILLIS = 14400000, e.RANDOM_FACTOR = 0.5, e.Sha1 = w, e.areCookiesEnabled = function () {
        return !(!navigator || !navigator.cookieEnabled);
      }, e.assert = r, e.assertionError = a, e.async = function (t, e) {
        return function () {
          for (var i = [], n = 0; n < arguments.length; n++)
            i[n] = arguments[n];
          Promise.resolve(!0).then(function () {
            t.apply(void 0, i);
          }).catch(function (t) {
            e && e(t);
          });
        };
      }, e.base64 = l, e.base64Decode = c, e.base64Encode = function (t) {
        var e = h(t);
        return l.encodeByteArray(e, !0);
      }, e.calculateBackoffMillis = function (t, e, i) {
        void 0 === e && (e = 1000), void 0 === i && (i = 2);
        var n = e * Math.pow(i, t), o = Math.round(0.5 * n * (Math.random() - 0.5) * 2);
        return Math.min(14400000, n + o);
      }, e.contains = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, e.createSubscribe = function (t, e) {
        var i = new k(t, e);
        return i.subscribe.bind(i);
      }, e.decode = b, e.deepCopy = function (t) {
        return d(void 0, t);
      }, e.deepExtend = d, e.errorPrefix = M, e.getUA = p, e.isAdmin = function (t) {
        var e = b(t).claims;
        return 'object' === n(e) && !0 === e.admin;
      }, e.isBrowser = function () {
        return 'object' === ('undefined' == typeof self ? 'undefined' : n(self)) && self.self === self;
      }, e.isBrowserExtension = function () {
        var t = 'object' === ('undefined' == typeof chrome ? 'undefined' : n(chrome)) ? chrome.runtime : 'object' === ('undefined' == typeof browser ? 'undefined' : n(browser)) ? browser.runtime : void 0;
        return 'object' === n(t) && void 0 !== t.id;
      }, e.isElectron = function () {
        return p().indexOf('Electron/') >= 0;
      }, e.isEmpty = function (t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e))
            return !1;
        return !0;
      }, e.isIE = function () {
        var t = p();
        return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
      }, e.isIndexedDBAvailable = function () {
        return 'indexedDB' in self && null != indexedDB;
      }, e.isMobileCordova = function () {
        return 'undefined' != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p());
      }, e.isNode = f, e.isNodeSdk = function () {
        return !0 === s.NODE_CLIENT || !0 === s.NODE_ADMIN;
      }, e.isReactNative = function () {
        return 'object' === ('undefined' == typeof navigator ? 'undefined' : n(navigator)) && 'ReactNative' === navigator.product;
      }, e.isSafari = function () {
        return !f() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }, e.isUWP = function () {
        return p().indexOf('MSAppHost/') >= 0;
      }, e.isValidFormat = function (t) {
        var e = b(t).claims;
        return !!e && 'object' === n(e) && e.hasOwnProperty('iat');
      }, e.isValidTimestamp = function (t) {
        var e = b(t).claims, i = Math.floor(new Date().getTime() / 1000), o = 0, s = 0;
        return 'object' === n(e) && (e.hasOwnProperty('nbf') ? o = e.nbf : e.hasOwnProperty('iat') && (o = e.iat), s = e.hasOwnProperty('exp') ? e.exp : o + 86400), !!i && !!o && !!s && i >= o && i <= s;
      }, e.issuedAtTime = function (t) {
        var e = b(t).claims;
        return 'object' === n(e) && e.hasOwnProperty('iat') ? e.iat : null;
      }, e.jsonEval = x, e.map = function (t, e, i) {
        var n = {};
        for (var o in t)
          Object.prototype.hasOwnProperty.call(t, o) && (n[o] = e.call(i, t[o], o, t));
        return n;
      }, e.querystring = function (t) {
        for (var e = [], i = function (t, i) {
              Array.isArray(i) ? i.forEach(function (i) {
                e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
              }) : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
            }, n = 0, o = Object.entries(t); n < o.length; n++) {
          var s = o[n];
          i(s[0], s[1]);
        }
        return e.length ? '&' + e.join('&') : '';
      }, e.querystringDecode = function (t) {
        var e = {};
        return t.replace(/^\?/, '').split('&').forEach(function (t) {
          if (t) {
            var i = t.split('=');
            e[i[0]] = i[1];
          }
        }), e;
      }, e.safeGet = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
      }, e.stringLength = function (t) {
        for (var e = 0, i = 0; i < t.length; i++) {
          var n = t.charCodeAt(i);
          n < 128 ? e++ : n < 2048 ? e += 2 : n >= 55296 && n <= 56319 ? (e += 4, i++) : e += 3;
        }
        return e;
      }, e.stringToByteArray = function (t) {
        for (var e = [], i = 0, n = 0; n < t.length; n++) {
          var o = t.charCodeAt(n);
          if (o >= 55296 && o <= 56319) {
            var s = o - 55296;
            n++, r(n < t.length, 'Surrogate pair missing trail surrogate.'), o = 65536 + (s << 10) + (t.charCodeAt(n) - 56320);
          }
          o < 128 ? e[i++] = o : o < 2048 ? (e[i++] = o >> 6 | 192, e[i++] = 63 & o | 128) : o < 65536 ? (e[i++] = o >> 12 | 224, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128) : (e[i++] = o >> 18 | 240, e[i++] = o >> 12 & 63 | 128, e[i++] = o >> 6 & 63 | 128, e[i++] = 63 & o | 128);
        }
        return e;
      }, e.stringify = function (t) {
        return JSON.stringify(t);
      }, e.validateArgCount = function (t, e, i, n) {
        var o;
        if (n < e ? o = 'at least ' + e : n > i && (o = 0 === i ? 'none' : 'no more than ' + i), o)
          throw new Error(t + ' failed: Was called with ' + n + (1 === n ? ' argument.' : ' arguments.') + ' Expects ' + o + '.');
      }, e.validateCallback = function (t, e, i, n) {
        if ((!n || i) && 'function' != typeof i)
          throw new Error(M(t, e, n) + 'must be a valid function.');
      }, e.validateContextObject = function (t, e, i, o) {
        if ((!o || i) && ('object' !== n(i) || null === i))
          throw new Error(M(t, e, o) + 'must be a valid context object.');
      }, e.validateIndexedDBOpenable = function () {
        return new Promise(function (t, e) {
          try {
            var i = !0, n = 'validate-browser-context-for-indexeddb-analytics-module', o = window.indexedDB.open(n);
            o.onsuccess = function () {
              o.result.close(), i || window.indexedDB.deleteDatabase(n), t(!0);
            }, o.onupgradeneeded = function () {
              i = !1;
            }, o.onerror = function () {
              var t;
              e((null === (t = o.error) || void 0 === t ? void 0 : t.message) || '');
            };
          } catch (t) {
            e(t);
          }
        });
      }, e.validateNamespace = function (t, e, i, n) {
        if ((!n || i) && 'string' != typeof i)
          throw new Error(M(t, e, n) + 'must be a valid firebase namespace.');
      };
    }.call(this, i('yLpj')));
  },
  A0Lk: function (t, e, i) {
    (function (t) {
      function e(t) {
        return (e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      !function () {
        function i(t, e) {
          document.addEventListener ? t.addEventListener('scroll', e, !1) : t.attachEvent('scroll', e);
        }
        function n(t) {
          this.a = document.createElement('div'), this.a.setAttribute('aria-hidden', 'true'), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement('span'), this.c = document.createElement('span'), this.h = document.createElement('span'), this.f = document.createElement('span'), this.g = -1, this.b.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.c.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.f.style.cssText = 'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;', this.h.style.cssText = 'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;', this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
        }
        function o(t, e) {
          t.a.style.cssText = 'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' + e + ';';
        }
        function s(t) {
          var e = t.a.offsetWidth, i = e + 100;
          return t.f.style.width = i + 'px', t.c.scrollLeft = i, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e && (t.g = e, !0);
        }
        function r(t, e) {
          function n() {
            var t = o;
            s(t) && t.a.parentNode && e(t.g);
          }
          var o = t;
          i(t.b, n), i(t.c, n), s(t);
        }
        function a(t, e) {
          var i = e || {};
          this.family = t, this.style = i.style || 'normal', this.weight = i.weight || 'normal', this.stretch = i.stretch || 'normal';
        }
        var h = null, l = null, c = null, d = null;
        function u() {
          return null === d && (d = !!document.fonts), d;
        }
        function p() {
          if (null === c) {
            var t = document.createElement('div');
            try {
              t.style.font = 'condensed 100px sans-serif';
            } catch (t) {
            }
            c = '' !== t.style.font;
          }
          return c;
        }
        function f(t, e) {
          return [
            t.style,
            t.weight,
            p() ? t.stretch : '',
            '100px',
            e
          ].join(' ');
        }
        a.prototype.load = function (t, e) {
          var i = this, s = t || 'BESbswy', a = 0, c = e || 3000, d = new Date().getTime();
          return new Promise(function (t, e) {
            if (u() && !function () {
                if (null === l)
                  if (u() && /Apple/.test(window.navigator.vendor)) {
                    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    l = !!t && 603 > parseInt(t[1], 10);
                  } else
                    l = !1;
                return l;
              }()) {
              var p = new Promise(function (t, e) {
                  !function n() {
                    new Date().getTime() - d >= c ? e(Error(c + 'ms timeout exceeded')) : document.fonts.load(f(i, '"' + i.family + '"'), s).then(function (e) {
                      1 <= e.length ? t() : setTimeout(n, 25);
                    }, e);
                  }();
                }), g = new Promise(function (t, e) {
                  a = setTimeout(function () {
                    e(Error(c + 'ms timeout exceeded'));
                  }, c);
                });
              Promise.race([
                g,
                p
              ]).then(function () {
                clearTimeout(a), t(i);
              }, e);
            } else
              !function (t) {
                document.body ? t() : document.addEventListener ? document.addEventListener('DOMContentLoaded', function e() {
                  document.removeEventListener('DOMContentLoaded', e), t();
                }) : document.attachEvent('onreadystatechange', function e() {
                  'interactive' != document.readyState && 'complete' != document.readyState || (document.detachEvent('onreadystatechange', e), t());
                });
              }(function () {
                function l() {
                  var e;
                  (e = -1 != m && -1 != v || -1 != m && -1 != y || -1 != v && -1 != y) && ((e = m != v && m != y && v != y) || (null === h && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), h = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = h && (m == x && v == x && y == x || m == b && v == b && y == b || m == w && v == w && y == w)), e = !e), e && (k.parentNode && k.parentNode.removeChild(k), clearTimeout(a), t(i));
                }
                var u = new n(s), p = new n(s), g = new n(s), m = -1, v = -1, y = -1, x = -1, b = -1, w = -1, k = document.createElement('div');
                k.dir = 'ltr', o(u, f(i, 'sans-serif')), o(p, f(i, 'serif')), o(g, f(i, 'monospace')), k.appendChild(u.a), k.appendChild(p.a), k.appendChild(g.a), document.body.appendChild(k), x = u.a.offsetWidth, b = p.a.offsetWidth, w = g.a.offsetWidth, function t() {
                  if (new Date().getTime() - d >= c)
                    k.parentNode && k.parentNode.removeChild(k), e(Error(c + 'ms timeout exceeded'));
                  else {
                    var i = document.hidden;
                    !0 !== i && void 0 !== i || (m = u.a.offsetWidth, v = p.a.offsetWidth, y = g.a.offsetWidth, l()), a = setTimeout(t, 50);
                  }
                }(), r(u, function (t) {
                  m = t, l();
                }), o(u, f(i, '"' + i.family + '",sans-serif')), r(p, function (t) {
                  v = t, l();
                }), o(p, f(i, '"' + i.family + '",serif')), r(g, function (t) {
                  y = t, l();
                }), o(g, f(i, '"' + i.family + '",monospace'));
              });
          });
        }, 'object' === e(t) ? t.exports = a : (window.FontFaceObserver = a, window.FontFaceObserver.prototype.load = a.prototype.load);
      }();
    }.call(this, i('YuTi')(t)));
  },
  AAub: function (t, e, i) {
    'use strict';
    i('3Kre');
  },
  Iab2: function (t, e, i) {
    (function (i) {
      var n, o, s;
      function r(t) {
        return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      o = [], void 0 === (s = 'function' == typeof (n = function () {
        'use strict';
        function e(t, e, i) {
          var n = new XMLHttpRequest();
          n.open('GET', t), n.responseType = 'blob', n.onload = function () {
            a(n.response, e, i);
          }, n.onerror = function () {
            console.error('could not download file');
          }, n.send();
        }
        function n(t) {
          var e = new XMLHttpRequest();
          e.open('HEAD', t, !1);
          try {
            e.send();
          } catch (t) {
          }
          return 200 <= e.status && 299 >= e.status;
        }
        function o(t) {
          try {
            t.dispatchEvent(new MouseEvent('click'));
          } catch (i) {
            var e = document.createEvent('MouseEvents');
            e.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
          }
        }
        var s = 'object' == ('undefined' == typeof window ? 'undefined' : r(window)) && window.window === window ? window : 'object' == ('undefined' == typeof self ? 'undefined' : r(self)) && self.self === self ? self : 'object' == (void 0 === i ? 'undefined' : r(i)) && i.global === i ? i : void 0, a = s.saveAs || ('object' != ('undefined' == typeof window ? 'undefined' : r(window)) || window !== s ? function () {
          } : 'download' in HTMLAnchorElement.prototype ? function (t, i, r) {
            var a = s.URL || s.webkitURL, h = document.createElement('a');
            i = i || t.name || 'download', h.download = i, h.rel = 'noopener', 'string' == typeof t ? (h.href = t, h.origin === location.origin ? o(h) : n(h.href) ? e(t, i, r) : o(h, h.target = '_blank')) : (h.href = a.createObjectURL(t), setTimeout(function () {
              a.revokeObjectURL(h.href);
            }, 40000), setTimeout(function () {
              o(h);
            }, 0));
          } : 'msSaveOrOpenBlob' in navigator ? function (t, i, s) {
            if (i = i || t.name || 'download', 'string' != typeof t)
              navigator.msSaveOrOpenBlob(function (t, e) {
                return void 0 === e ? e = { autoBom: !1 } : 'object' != r(e) && (console.warn('Deprecated: Expected third argument to be a object'), e = { autoBom: !e }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([
                  '\uFEFF',
                  t
                ], { type: t.type }) : t;
              }(t, s), i);
            else if (n(t))
              e(t, i, s);
            else {
              var a = document.createElement('a');
              a.href = t, a.target = '_blank', setTimeout(function () {
                o(a);
              });
            }
          } : function (t, i, n, o) {
            if ((o = o || open('', '_blank')) && (o.document.title = o.document.body.innerText = 'downloading...'), 'string' == typeof t)
              return e(t, i, n);
            var a = 'application/octet-stream' === t.type, h = /constructor/i.test(s.HTMLElement) || s.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((l || a && h) && 'object' == ('undefined' == typeof FileReader ? 'undefined' : r(FileReader))) {
              var c = new FileReader();
              c.onloadend = function () {
                var t = c.result;
                t = l ? t : t.replace(/^data:[^;]*;/, 'data:attachment/file;'), o ? o.location.href = t : location = t, o = null;
              }, c.readAsDataURL(t);
            } else {
              var d = s.URL || s.webkitURL, u = d.createObjectURL(t);
              o ? o.location = u : location.href = u, o = null, setTimeout(function () {
                d.revokeObjectURL(u);
              }, 40000);
            }
          });
        s.saveAs = a.saveAs = a, t.exports = a;
      }) ? n.apply(e, o) : n) || (t.exports = s);
    }.call(this, i('yLpj')));
  },
  LhCv: function (t, e, i) {
    'use strict';
    i.d(e, 'a', function () {
      return v;
    }), i.d(e, 'b', function () {
      return d;
    }), i.d(e, 'c', function () {
      return u;
    });
    var n = i('wx14'), o = i('lCFh'), s = i('xhmd'), r = i('9R94');
    function a(t) {
      return '/' === t.charAt(0) ? t : '/' + t;
    }
    function h(t, e) {
      return function (t, e) {
        return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && -1 !== '/?#'.indexOf(t.charAt(e.length));
      }(t, e) ? t.substr(e.length) : t;
    }
    function l(t) {
      return '/' === t.charAt(t.length - 1) ? t.slice(0, -1) : t;
    }
    function c(t) {
      var e = t.pathname, i = t.search, n = t.hash, o = e || '/';
      return i && '?' !== i && (o += '?' === i.charAt(0) ? i : '?' + i), n && '#' !== n && (o += '#' === n.charAt(0) ? n : '#' + n), o;
    }
    function d(t, e, i, s) {
      var r;
      'string' == typeof t ? (r = function (t) {
        var e = t || '/', i = '', n = '', o = e.indexOf('#');
        -1 !== o && (n = e.substr(o), e = e.substr(0, o));
        var s = e.indexOf('?');
        return -1 !== s && (i = e.substr(s), e = e.substr(0, s)), {
          pathname: e,
          search: '?' === i ? '' : i,
          hash: '#' === n ? '' : n
        };
      }(t)).state = e : (void 0 === (r = Object(n.a)({}, t)).pathname && (r.pathname = ''), r.search ? '?' !== r.search.charAt(0) && (r.search = '?' + r.search) : r.search = '', r.hash ? '#' !== r.hash.charAt(0) && (r.hash = '#' + r.hash) : r.hash = '', void 0 !== e && void 0 === r.state && (r.state = e));
      try {
        r.pathname = decodeURI(r.pathname);
      } catch (t) {
        throw t instanceof URIError ? new URIError('Pathname "' + r.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : t;
      }
      return i && (r.key = i), s ? r.pathname ? '/' !== r.pathname.charAt(0) && (r.pathname = Object(o.a)(r.pathname, s.pathname)) : r.pathname = s.pathname : r.pathname || (r.pathname = '/'), r;
    }
    function u(t, e) {
      return t.pathname === e.pathname && t.search === e.search && t.hash === e.hash && t.key === e.key && Object(s.a)(t.state, e.state);
    }
    function p() {
      var t = null;
      var e = [];
      return {
        setPrompt: function (e) {
          return t = e, function () {
            t === e && (t = null);
          };
        },
        confirmTransitionTo: function (e, i, n, o) {
          if (null != t) {
            var s = 'function' == typeof t ? t(e, i) : t;
            'string' == typeof s ? 'function' == typeof n ? n(s, o) : o(!0) : o(!1 !== s);
          } else
            o(!0);
        },
        appendListener: function (t) {
          var i = !0;
          function n() {
            i && t.apply(void 0, arguments);
          }
          return e.push(n), function () {
            i = !1, e = e.filter(function (t) {
              return t !== n;
            });
          };
        },
        notifyListeners: function () {
          for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
            i[n] = arguments[n];
          e.forEach(function (t) {
            return t.apply(void 0, i);
          });
        }
      };
    }
    var f = !('undefined' == typeof window || !window.document || !window.document.createElement);
    function g(t, e) {
      e(window.confirm(t));
    }
    function m() {
      try {
        return window.history.state || {};
      } catch (t) {
        return {};
      }
    }
    function v(t) {
      void 0 === t && (t = {}), f || Object(r.a)(!1);
      var e, i = window.history, o = (-1 === (e = window.navigator.userAgent).indexOf('Android 2.') && -1 === e.indexOf('Android 4.0') || -1 === e.indexOf('Mobile Safari') || -1 !== e.indexOf('Chrome') || -1 !== e.indexOf('Windows Phone')) && window.history && 'pushState' in window.history, s = !(-1 === window.navigator.userAgent.indexOf('Trident')), u = t, v = u.forceRefresh, y = void 0 !== v && v, x = u.getUserConfirmation, b = void 0 === x ? g : x, w = u.keyLength, k = void 0 === w ? 6 : w, S = t.basename ? l(a(t.basename)) : '';
      function M(t) {
        var e = t || {}, i = e.key, n = e.state, o = window.location, s = o.pathname + o.search + o.hash;
        return S && (s = h(s, S)), d(s, n, i);
      }
      function A() {
        return Math.random().toString(36).substr(2, k);
      }
      var T = p();
      function C(t) {
        Object(n.a)(_, t), _.length = i.length, T.notifyListeners(_.location, _.action);
      }
      function L(t) {
        (function (t) {
          return void 0 === t.state && -1 === navigator.userAgent.indexOf('CriOS');
        }(t) || D(M(t.state)));
      }
      function P() {
        D(M(m()));
      }
      var O = !1;
      function D(t) {
        if (O)
          O = !1, C();
        else {
          T.confirmTransitionTo(t, 'POP', b, function (e) {
            e ? C({
              action: 'POP',
              location: t
            }) : function (t) {
              var e = _.location, i = I.indexOf(e.key);
              -1 === i && (i = 0);
              var n = I.indexOf(t.key);
              -1 === n && (n = 0);
              var o = i - n;
              o && (O = !0, B(o));
            }(t);
          });
        }
      }
      var E = M(m()), I = [E.key];
      function z(t) {
        return S + c(t);
      }
      function B(t) {
        i.go(t);
      }
      var N = 0;
      function R(t) {
        1 === (N += t) && 1 === t ? (window.addEventListener('popstate', L), s && window.addEventListener('hashchange', P)) : 0 === N && (window.removeEventListener('popstate', L), s && window.removeEventListener('hashchange', P));
      }
      var W = !1;
      var _ = {
        length: i.length,
        action: 'POP',
        location: E,
        createHref: z,
        push: function (t, e) {
          var n = d(t, e, A(), _.location);
          T.confirmTransitionTo(n, 'PUSH', b, function (t) {
            if (t) {
              var e = z(n), s = n.key, r = n.state;
              if (o)
                if (i.pushState({
                    key: s,
                    state: r
                  }, null, e), y)
                  window.location.href = e;
                else {
                  var a = I.indexOf(_.location.key), h = I.slice(0, a + 1);
                  h.push(n.key), I = h, C({
                    action: 'PUSH',
                    location: n
                  });
                }
              else
                window.location.href = e;
            }
          });
        },
        replace: function (t, e) {
          var n = d(t, e, A(), _.location);
          T.confirmTransitionTo(n, 'REPLACE', b, function (t) {
            if (t) {
              var e = z(n), s = n.key, r = n.state;
              if (o)
                if (i.replaceState({
                    key: s,
                    state: r
                  }, null, e), y)
                  window.location.replace(e);
                else {
                  var a = I.indexOf(_.location.key);
                  -1 !== a && (I[a] = n.key), C({
                    action: 'REPLACE',
                    location: n
                  });
                }
              else
                window.location.replace(e);
            }
          });
        },
        go: B,
        goBack: function () {
          B(-1);
        },
        goForward: function () {
          B(1);
        },
        block: function (t) {
          void 0 === t && (t = !1);
          var e = T.setPrompt(t);
          return W || (R(1), W = !0), function () {
            return W && (W = !1, R(-1)), e();
          };
        },
        listen: function (t) {
          var e = T.appendListener(t);
          return R(1), function () {
            R(-1), e();
          };
        }
      };
      return _;
    }
  },
  UxbX: function (t, e, i) {
    var n, o;
    void 0 === (o = 'function' == typeof (n = function () {
      function t(t, e) {
        return function (i, n, o, s) {
          i[t] ? i[t](n, o, s) : i[e] && i[e]('on' + n, o);
        };
      }
      return {
        add: t('addEventListener', 'attachEvent'),
        remove: t('removeEventListener', 'detachEvent')
      };
    }) ? n.call(e, i, e, t) : n) || (t.exports = o);
  },
  Wcq6: function (t, e, i) {
    'use strict';
    function n(t) {
      return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      })(t);
    }
    function o(t) {
      return t && 'object' === n(t) && 'default' in t ? t : { default: t };
    }
    var s = o(i('wj3C'));
    s.default.registerVersion('firebase', '7.23.0', 'app'), t.exports = s.default;
  },
  WjD0: function (t, e) {
    function i(t) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      })(t);
    }
    t.exports = 'object' == ('undefined' == typeof self ? 'undefined' : i(self)) ? self.FormData : window.FormData;
  },
  Zs65: function (t, e, i) {
    'use strict';
    i('BFiH');
  },
  kOjh: function (t, e, i) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = i('mrSG'), o = i('88ZB'), s = function () {
        function t(t, e, i) {
          this.name = t, this.instanceFactory = e, this.type = i, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = 'LAZY';
        }
        return t.prototype.setInstantiationMode = function (t) {
          return this.instantiationMode = t, this;
        }, t.prototype.setMultipleInstances = function (t) {
          return this.multipleInstances = t, this;
        }, t.prototype.setServiceProps = function (t) {
          return this.serviceProps = t, this;
        }, t;
      }(), r = function () {
        function t(t, e) {
          this.name = t, this.container = e, this.component = null, this.instances = new Map(), this.instancesDeferred = new Map();
        }
        return t.prototype.get = function (t) {
          void 0 === t && (t = '[DEFAULT]');
          var e = this.normalizeInstanceIdentifier(t);
          if (!this.instancesDeferred.has(e)) {
            var i = new o.Deferred();
            this.instancesDeferred.set(e, i);
            try {
              var n = this.getOrInitializeService(e);
              n && i.resolve(n);
            } catch (t) {
            }
          }
          return this.instancesDeferred.get(e).promise;
        }, t.prototype.getImmediate = function (t) {
          var e = n.__assign({
              identifier: '[DEFAULT]',
              optional: !1
            }, t), i = e.identifier, o = e.optional, s = this.normalizeInstanceIdentifier(i);
          try {
            var r = this.getOrInitializeService(s);
            if (!r) {
              if (o)
                return null;
              throw Error('Service ' + this.name + ' is not available');
            }
            return r;
          } catch (t) {
            if (o)
              return null;
            throw t;
          }
        }, t.prototype.getComponent = function () {
          return this.component;
        }, t.prototype.setComponent = function (t) {
          var e, i;
          if (t.name !== this.name)
            throw Error('Mismatching Component ' + t.name + ' for Provider ' + this.name + '.');
          if (this.component)
            throw Error('Component for ' + this.name + ' has already been provided');
          if (this.component = t, function (t) {
              return 'EAGER' === t.instantiationMode;
            }(t))
            try {
              this.getOrInitializeService('[DEFAULT]');
            } catch (t) {
            }
          try {
            for (var o = n.__values(this.instancesDeferred.entries()), s = o.next(); !s.done; s = o.next()) {
              var r = n.__read(s.value, 2), a = r[0], h = r[1], l = this.normalizeInstanceIdentifier(a);
              try {
                var c = this.getOrInitializeService(l);
                h.resolve(c);
              } catch (t) {
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              s && !s.done && (i = o.return) && i.call(o);
            } finally {
              if (e)
                throw e.error;
            }
          }
        }, t.prototype.clearInstance = function (t) {
          void 0 === t && (t = '[DEFAULT]'), this.instancesDeferred.delete(t), this.instances.delete(t);
        }, t.prototype.delete = function () {
          return n.__awaiter(this, void 0, void 0, function () {
            var t;
            return n.__generator(this, function (e) {
              switch (e.label) {
              case 0:
                return t = Array.from(this.instances.values()), [
                  4,
                  Promise.all(n.__spread(t.filter(function (t) {
                    return 'INTERNAL' in t;
                  }).map(function (t) {
                    return t.INTERNAL.delete();
                  }), t.filter(function (t) {
                    return '_delete' in t;
                  }).map(function (t) {
                    return t._delete();
                  })))
                ];
              case 1:
                return e.sent(), [2];
              }
            });
          });
        }, t.prototype.isComponentSet = function () {
          return null != this.component;
        }, t.prototype.getOrInitializeService = function (t) {
          var e = this.instances.get(t);
          return !e && this.component && (e = this.component.instanceFactory(this.container, function (t) {
            return '[DEFAULT]' === t ? void 0 : t;
          }(t)), this.instances.set(t, e)), e || null;
        }, t.prototype.normalizeInstanceIdentifier = function (t) {
          return this.component ? this.component.multipleInstances ? t : '[DEFAULT]' : t;
        }, t;
      }();
    var a = function () {
      function t(t) {
        this.name = t, this.providers = new Map();
      }
      return t.prototype.addComponent = function (t) {
        var e = this.getProvider(t.name);
        if (e.isComponentSet())
          throw new Error('Component ' + t.name + ' has already been registered with ' + this.name);
        e.setComponent(t);
      }, t.prototype.addOrOverwriteComponent = function (t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
      }, t.prototype.getProvider = function (t) {
        if (this.providers.has(t))
          return this.providers.get(t);
        var e = new r(t, this);
        return this.providers.set(t, e), e;
      }, t.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }, t;
    }();
    e.Component = s, e.ComponentContainer = a, e.Provider = r;
  },
  'kVK+': function (t, e) {
    e.read = function (t, e, i, n, o) {
      var s, r, a = 8 * o - n - 1, h = (1 << a) - 1, l = h >> 1, c = -7, d = i ? o - 1 : 0, u = i ? -1 : 1, p = t[e + d];
      for (d += u, s = p & (1 << -c) - 1, p >>= -c, c += a; c > 0; s = 256 * s + t[e + d], d += u, c -= 8);
      for (r = s & (1 << -c) - 1, s >>= -c, c += n; c > 0; r = 256 * r + t[e + d], d += u, c -= 8);
      if (0 === s)
        s = 1 - l;
      else {
        if (s === h)
          return r ? NaN : 1 / 0 * (p ? -1 : 1);
        r += Math.pow(2, n), s -= l;
      }
      return (p ? -1 : 1) * r * Math.pow(2, s - n);
    }, e.write = function (t, e, i, n, o, s) {
      var r, a, h, l = 8 * s - o - 1, c = (1 << l) - 1, d = c >> 1, u = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : s - 1, f = n ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, r = c) : (r = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -r)) < 1 && (r--, h *= 2), (e += r + d >= 1 ? u / h : u * Math.pow(2, 1 - d)) * h >= 2 && (r++, h /= 2), r + d >= c ? (a = 0, r = c) : r + d >= 1 ? (a = (e * h - 1) * Math.pow(2, o), r += d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, o), r = 0)); o >= 8; t[i + p] = 255 & a, p += f, a /= 256, o -= 8);
      for (r = r << o | a, l += o; l > 0; t[i + p] = 255 & r, p += f, r /= 256, l -= 8);
      t[i + p - f] |= 128 * g;
    };
  },
  nbvr: function (t, e, i) {
    var n, o, s, r;
    function a(t) {
      return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      })(t);
    }
    r = function (t) {
      'use strict';
      function e(t) {
        return Array.prototype.slice.call(t);
      }
      function i(t) {
        return new Promise(function (e, i) {
          t.onsuccess = function () {
            e(t.result);
          }, t.onerror = function () {
            i(t.error);
          };
        });
      }
      function n(t, e, n) {
        var o, s = new Promise(function (s, r) {
            i(o = t[e].apply(t, n)).then(s, r);
          });
        return s.request = o, s;
      }
      function o(t, e, i) {
        var o = n(t, e, i);
        return o.then(function (t) {
          if (t)
            return new c(t, o.request);
        });
      }
      function s(t, e, i) {
        i.forEach(function (i) {
          Object.defineProperty(t.prototype, i, {
            get: function () {
              return this[e][i];
            },
            set: function (t) {
              this[e][i] = t;
            }
          });
        });
      }
      function r(t, e, i, o) {
        o.forEach(function (o) {
          o in i.prototype && (t.prototype[o] = function () {
            return n(this[e], o, arguments);
          });
        });
      }
      function a(t, e, i, n) {
        n.forEach(function (n) {
          n in i.prototype && (t.prototype[n] = function () {
            return this[e][n].apply(this[e], arguments);
          });
        });
      }
      function h(t, e, i, n) {
        n.forEach(function (n) {
          n in i.prototype && (t.prototype[n] = function () {
            return o(this[e], n, arguments);
          });
        });
      }
      function l(t) {
        this._index = t;
      }
      function c(t, e) {
        this._cursor = t, this._request = e;
      }
      function d(t) {
        this._store = t;
      }
      function u(t) {
        this._tx = t, this.complete = new Promise(function (e, i) {
          t.oncomplete = function () {
            e();
          }, t.onerror = function () {
            i(t.error);
          }, t.onabort = function () {
            i(t.error);
          };
        });
      }
      function p(t, e, i) {
        this._db = t, this.oldVersion = e, this.transaction = new u(i);
      }
      function f(t) {
        this._db = t;
      }
      s(l, '_index', [
        'name',
        'keyPath',
        'multiEntry',
        'unique'
      ]), r(l, '_index', IDBIndex, [
        'get',
        'getKey',
        'getAll',
        'getAllKeys',
        'count'
      ]), h(l, '_index', IDBIndex, [
        'openCursor',
        'openKeyCursor'
      ]), s(c, '_cursor', [
        'direction',
        'key',
        'primaryKey',
        'value'
      ]), r(c, '_cursor', IDBCursor, [
        'update',
        'delete'
      ]), [
        'advance',
        'continue',
        'continuePrimaryKey'
      ].forEach(function (t) {
        t in IDBCursor.prototype && (c.prototype[t] = function () {
          var e = this, n = arguments;
          return Promise.resolve().then(function () {
            return e._cursor[t].apply(e._cursor, n), i(e._request).then(function (t) {
              if (t)
                return new c(t, e._request);
            });
          });
        });
      }), d.prototype.createIndex = function () {
        return new l(this._store.createIndex.apply(this._store, arguments));
      }, d.prototype.index = function () {
        return new l(this._store.index.apply(this._store, arguments));
      }, s(d, '_store', [
        'name',
        'keyPath',
        'indexNames',
        'autoIncrement'
      ]), r(d, '_store', IDBObjectStore, [
        'put',
        'add',
        'delete',
        'clear',
        'get',
        'getAll',
        'getKey',
        'getAllKeys',
        'count'
      ]), h(d, '_store', IDBObjectStore, [
        'openCursor',
        'openKeyCursor'
      ]), a(d, '_store', IDBObjectStore, ['deleteIndex']), u.prototype.objectStore = function () {
        return new d(this._tx.objectStore.apply(this._tx, arguments));
      }, s(u, '_tx', [
        'objectStoreNames',
        'mode'
      ]), a(u, '_tx', IDBTransaction, ['abort']), p.prototype.createObjectStore = function () {
        return new d(this._db.createObjectStore.apply(this._db, arguments));
      }, s(p, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]), a(p, '_db', IDBDatabase, [
        'deleteObjectStore',
        'close'
      ]), f.prototype.transaction = function () {
        return new u(this._db.transaction.apply(this._db, arguments));
      }, s(f, '_db', [
        'name',
        'version',
        'objectStoreNames'
      ]), a(f, '_db', IDBDatabase, ['close']), [
        'openCursor',
        'openKeyCursor'
      ].forEach(function (t) {
        [
          d,
          l
        ].forEach(function (i) {
          t in i.prototype && (i.prototype[t.replace('open', 'iterate')] = function () {
            var i = e(arguments), n = i[i.length - 1], o = this._store || this._index, s = o[t].apply(o, i.slice(0, -1));
            s.onsuccess = function () {
              n(s.result);
            };
          });
        });
      }), [
        l,
        d
      ].forEach(function (t) {
        t.prototype.getAll || (t.prototype.getAll = function (t, e) {
          var i = this, n = [];
          return new Promise(function (o) {
            i.iterateCursor(t, function (t) {
              t ? (n.push(t.value), void 0 === e || n.length != e ? t.continue() : o(n)) : o(n);
            });
          });
        });
      }), t.openDb = function (t, e, i) {
        var o = n(indexedDB, 'open', [
            t,
            e
          ]), s = o.request;
        return s && (s.onupgradeneeded = function (t) {
          i && i(new p(s.result, t.oldVersion, s.transaction));
        }), o.then(function (t) {
          return new f(t);
        });
      }, t.deleteDb = function (t) {
        return n(indexedDB, 'deleteDatabase', [t]);
      }, Object.defineProperty(t, '__esModule', { value: !0 });
    }, 'object' === a(e) && void 0 !== t ? r(e) : (o = [e], void 0 === (s = 'function' == typeof (n = r) ? n.apply(e, o) : n) || (t.exports = s));
  }
}]);