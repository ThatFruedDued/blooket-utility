(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{
  Mpt7: function (t, r, e) {
    'use strict';
    function n(t) {
      return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      })(t);
    }
    e.d(r, 'a', function () {
      return Xe;
    });
    var i = {};
    function o(t) {
      t && (t.value = !0);
    }
    function u() {
    }
    function s(t) {
      return void 0 === t.size && (t.size = t.__iterate(c)), t.size;
    }
    function a(t, r) {
      if ('number' != typeof r) {
        var e = r >>> 0;
        if ('' + e !== r || 4294967295 === e)
          return NaN;
        r = e;
      }
      return r < 0 ? s(t) + r : r;
    }
    function c() {
      return !0;
    }
    function f(t, r, e) {
      return (0 === t && !l(t) || void 0 !== e && t <= -e) && (void 0 === r || void 0 !== e && r >= e);
    }
    function h(t, r) {
      return p(t, r, 0);
    }
    function _(t, r) {
      return p(t, r, r);
    }
    function p(t, r, e) {
      return void 0 === t ? e : l(t) ? r === 1 / 0 ? r : 0 | Math.max(0, r + t) : void 0 === r || r === t ? t : 0 | Math.min(r, t);
    }
    function l(t) {
      return t < 0 || 0 === t && 1 / t == -1 / 0;
    }
    function v(t) {
      return Boolean(t && t['@@__IMMUTABLE_ITERABLE__@@']);
    }
    function y(t) {
      return Boolean(t && t['@@__IMMUTABLE_KEYED__@@']);
    }
    function d(t) {
      return Boolean(t && t['@@__IMMUTABLE_INDEXED__@@']);
    }
    function w(t) {
      return y(t) || d(t);
    }
    var g = function (t) {
        return v(t) ? t : K(t);
      }, m = function (t) {
        function r(t) {
          return y(t) ? t : C(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r;
      }(g), S = function (t) {
        function r(t) {
          return d(t) ? t : N(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r;
      }(g), z = function (t) {
        function r(t) {
          return v(t) && !w(t) ? t : W(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r;
      }(g);
    g.Keyed = m, g.Indexed = S, g.Set = z;
    function I(t) {
      return Boolean(t && t['@@__IMMUTABLE_SEQ__@@']);
    }
    function b(t) {
      return Boolean(t && t['@@__IMMUTABLE_RECORD__@@']);
    }
    function E(t) {
      return v(t) || b(t);
    }
    var M = '@@__IMMUTABLE_ORDERED__@@';
    function O(t) {
      return Boolean(t && t[M]);
    }
    var A = 'function' == typeof Symbol && Symbol.iterator, q = A || '@@iterator', D = function (t) {
        this.next = t;
      };
    function j(t, r, e, n) {
      var i = 0 === t ? r : 1 === t ? e : [
        r,
        e
      ];
      return n ? n.value = i : n = {
        value: i,
        done: !1
      }, n;
    }
    function k() {
      return {
        value: void 0,
        done: !0
      };
    }
    function x(t) {
      return !!B(t);
    }
    function T(t) {
      return t && 'function' == typeof t.next;
    }
    function U(t) {
      var r = B(t);
      return r && r.call(t);
    }
    function B(t) {
      var r = t && (A && t[A] || t['@@iterator']);
      if ('function' == typeof r)
        return r;
    }
    D.prototype.toString = function () {
      return '[Iterator]';
    }, D.KEYS = 0, D.VALUES = 1, D.ENTRIES = 2, D.prototype.inspect = D.prototype.toSource = function () {
      return this.toString();
    }, D.prototype[q] = function () {
      return this;
    };
    var R = Object.prototype.hasOwnProperty;
    function L(t) {
      return !(!Array.isArray(t) && 'string' != typeof t) || t && 'object' === n(t) && Number.isInteger(t.length) && t.length >= 0 && (0 === t.length ? 1 === Object.keys(t).length : t.hasOwnProperty(t.length - 1));
    }
    var K = function (t) {
        function r(t) {
          return null == t ? Q() : E(t) ? t.toSeq() : function (t) {
            var r = F(t);
            if (r)
              return r;
            if ('object' === n(t))
              return new H(t);
            throw new TypeError('Expected Array or collection object of values, or keyed object: ' + t);
          }(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.toSeq = function () {
          return this;
        }, r.prototype.toString = function () {
          return this.__toString('Seq {', '}');
        }, r.prototype.cacheResult = function () {
          return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
        }, r.prototype.__iterate = function (t, r) {
          var e = this._cache;
          if (e) {
            for (var n = e.length, i = 0; i !== n;) {
              var o = e[r ? n - ++i : i++];
              if (!1 === t(o[1], o[0], this))
                break;
            }
            return i;
          }
          return this.__iterateUncached(t, r);
        }, r.prototype.__iterator = function (t, r) {
          var e = this._cache;
          if (e) {
            var n = e.length, i = 0;
            return new D(function () {
              if (i === n)
                return {
                  value: void 0,
                  done: !0
                };
              var o = e[r ? n - ++i : i++];
              return j(t, o[0], o[1]);
            });
          }
          return this.__iteratorUncached(t, r);
        }, r;
      }(g), C = function (t) {
        function r(t) {
          return null == t ? Q().toKeyedSeq() : v(t) ? y(t) ? t.toSeq() : t.fromEntrySeq() : b(t) ? t.toSeq() : Y(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.toKeyedSeq = function () {
          return this;
        }, r;
      }(K), N = function (t) {
        function r(t) {
          return null == t ? Q() : v(t) ? y(t) ? t.entrySeq() : t.toIndexedSeq() : b(t) ? t.toSeq().entrySeq() : X(t);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
          return r(arguments);
        }, r.prototype.toIndexedSeq = function () {
          return this;
        }, r.prototype.toString = function () {
          return this.__toString('Seq [', ']');
        }, r;
      }(K), W = function (t) {
        function r(t) {
          return (v(t) && !w(t) ? t : N(t)).toSetSeq();
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
          return r(arguments);
        }, r.prototype.toSetSeq = function () {
          return this;
        }, r;
      }(K);
    K.isSeq = I, K.Keyed = C, K.Set = W, K.Indexed = N, K.prototype['@@__IMMUTABLE_SEQ__@@'] = !0;
    var P = function (t) {
        function r(t) {
          this._array = t, this.size = t.length;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.get = function (t, r) {
          return this.has(t) ? this._array[a(this, t)] : r;
        }, r.prototype.__iterate = function (t, r) {
          for (var e = this._array, n = e.length, i = 0; i !== n;) {
            var o = r ? n - ++i : i++;
            if (!1 === t(e[o], o, this))
              break;
          }
          return i;
        }, r.prototype.__iterator = function (t, r) {
          var e = this._array, n = e.length, i = 0;
          return new D(function () {
            if (i === n)
              return {
                value: void 0,
                done: !0
              };
            var o = r ? n - ++i : i++;
            return j(t, o, e[o]);
          });
        }, r;
      }(N), H = function (t) {
        function r(t) {
          var r = Object.keys(t);
          this._object = t, this._keys = r, this.size = r.length;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.get = function (t, r) {
          return void 0 === r || this.has(t) ? this._object[t] : r;
        }, r.prototype.has = function (t) {
          return R.call(this._object, t);
        }, r.prototype.__iterate = function (t, r) {
          for (var e = this._object, n = this._keys, i = n.length, o = 0; o !== i;) {
            var u = n[r ? i - ++o : o++];
            if (!1 === t(e[u], u, this))
              break;
          }
          return o;
        }, r.prototype.__iterator = function (t, r) {
          var e = this._object, n = this._keys, i = n.length, o = 0;
          return new D(function () {
            if (o === i)
              return {
                value: void 0,
                done: !0
              };
            var u = n[r ? i - ++o : o++];
            return j(t, u, e[u]);
          });
        }, r;
      }(C);
    H.prototype[M] = !0;
    var J, V = function (t) {
        function r(t) {
          this._collection = t, this.size = t.length || t.size;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.__iterateUncached = function (t, r) {
          if (r)
            return this.cacheResult().__iterate(t, r);
          var e = U(this._collection), n = 0;
          if (T(e))
            for (var i; !(i = e.next()).done && !1 !== t(i.value, n++, this););
          return n;
        }, r.prototype.__iteratorUncached = function (t, r) {
          if (r)
            return this.cacheResult().__iterator(t, r);
          var e = U(this._collection);
          if (!T(e))
            return new D(k);
          var n = 0;
          return new D(function () {
            var r = e.next();
            return r.done ? r : j(t, n++, r.value);
          });
        }, r;
      }(N);
    function Q() {
      return J || (J = new P([]));
    }
    function Y(t) {
      var r = Array.isArray(t) ? new P(t) : x(t) ? new V(t) : void 0;
      if (r)
        return r.fromEntrySeq();
      if ('object' === n(t))
        return new H(t);
      throw new TypeError('Expected Array or collection object of [k, v] entries, or keyed object: ' + t);
    }
    function X(t) {
      var r = F(t);
      if (r)
        return r;
      throw new TypeError('Expected Array or collection object of values: ' + t);
    }
    function F(t) {
      return L(t) ? new P(t) : x(t) ? new V(t) : void 0;
    }
    function G(t) {
      return Boolean(t && t['@@__IMMUTABLE_MAP__@@']);
    }
    function Z(t) {
      return G(t) && O(t);
    }
    function $(t) {
      return Boolean(t && 'function' == typeof t.equals && 'function' == typeof t.hashCode);
    }
    function tt(t, r) {
      if (t === r || t != t && r != r)
        return !0;
      if (!t || !r)
        return !1;
      if ('function' == typeof t.valueOf && 'function' == typeof r.valueOf) {
        if ((t = t.valueOf()) === (r = r.valueOf()) || t != t && r != r)
          return !0;
        if (!t || !r)
          return !1;
      }
      return !!($(t) && $(r) && t.equals(r));
    }
    var rt = 'function' == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, r) {
      var e = 65535 & (t |= 0), n = 65535 & (r |= 0);
      return e * n + ((t >>> 16) * n + e * (r >>> 16) << 16 >>> 0) | 0;
    };
    function et(t) {
      return t >>> 1 & 1073741824 | 3221225471 & t;
    }
    var nt = Object.prototype.valueOf;
    function it(t) {
      switch (n(t)) {
      case 'boolean':
        return t ? 1108378657 : 1108378656;
      case 'number':
        return function (t) {
          if (t != t || t === 1 / 0)
            return 0;
          var r = 0 | t;
          r !== t && (r ^= 4294967295 * t);
          for (; t > 4294967295;)
            r ^= t /= 4294967295;
          return et(r);
        }(t);
      case 'string':
        return t.length > _t ? function (t) {
          var r = vt[t];
          void 0 === r && (r = ot(t), lt === pt && (lt = 0, vt = {}), lt++, vt[t] = r);
          return r;
        }(t) : ot(t);
      case 'object':
      case 'function':
        return null === t ? 1108378658 : 'function' == typeof t.hashCode ? et(t.hashCode(t)) : (t.valueOf !== nt && 'function' == typeof t.valueOf && (t = t.valueOf(t)), function (t) {
          var r;
          if (ct && void 0 !== (r = at.get(t)))
            return r;
          if (void 0 !== (r = t[ht]))
            return r;
          if (!st) {
            if (void 0 !== (r = t.propertyIsEnumerable && t.propertyIsEnumerable[ht]))
              return r;
            if (void 0 !== (r = function (t) {
                if (t && t.nodeType > 0)
                  switch (t.nodeType) {
                  case 1:
                    return t.uniqueID;
                  case 9:
                    return t.documentElement && t.documentElement.uniqueID;
                  }
              }(t)))
              return r;
          }
          r = ++ft, 1073741824 & ft && (ft = 0);
          if (ct)
            at.set(t, r);
          else {
            if (void 0 !== ut && !1 === ut(t))
              throw new Error('Non-extensible objects are not allowed as keys.');
            if (st)
              Object.defineProperty(t, ht, {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: r
              });
            else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable)
              t.propertyIsEnumerable = function () {
                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
              }, t.propertyIsEnumerable[ht] = r;
            else {
              if (void 0 === t.nodeType)
                throw new Error('Unable to set a non-enumerable property on object.');
              t[ht] = r;
            }
          }
          return r;
        }(t));
      case 'undefined':
        return 1108378659;
      default:
        if ('function' == typeof t.toString)
          return ot(t.toString());
        throw new Error('Value type ' + n(t) + ' cannot be hashed.');
      }
    }
    function ot(t) {
      for (var r = 0, e = 0; e < t.length; e++)
        r = 31 * r + t.charCodeAt(e) | 0;
      return et(r);
    }
    var ut = Object.isExtensible, st = function () {
        try {
          return Object.defineProperty({}, '@', {}), !0;
        } catch (t) {
          return !1;
        }
      }();
    var at, ct = 'function' == typeof WeakMap;
    ct && (at = new WeakMap());
    var ft = 0, ht = '__immutablehash__';
    'function' == typeof Symbol && (ht = Symbol(ht));
    var _t = 16, pt = 255, lt = 0, vt = {}, yt = function (t) {
        function r(t, r) {
          this._iter = t, this._useKeys = r, this.size = t.size;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.get = function (t, r) {
          return this._iter.get(t, r);
        }, r.prototype.has = function (t) {
          return this._iter.has(t);
        }, r.prototype.valueSeq = function () {
          return this._iter.valueSeq();
        }, r.prototype.reverse = function () {
          var t = this, r = zt(this, !0);
          return this._useKeys || (r.valueSeq = function () {
            return t._iter.toSeq().reverse();
          }), r;
        }, r.prototype.map = function (t, r) {
          var e = this, n = St(this, t, r);
          return this._useKeys || (n.valueSeq = function () {
            return e._iter.toSeq().map(t, r);
          }), n;
        }, r.prototype.__iterate = function (t, r) {
          var e = this;
          return this._iter.__iterate(function (r, n) {
            return t(r, n, e);
          }, r);
        }, r.prototype.__iterator = function (t, r) {
          return this._iter.__iterator(t, r);
        }, r;
      }(C);
    yt.prototype[M] = !0;
    var dt = function (t) {
        function r(t) {
          this._iter = t, this.size = t.size;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.includes = function (t) {
          return this._iter.includes(t);
        }, r.prototype.__iterate = function (t, r) {
          var e = this, n = 0;
          return r && s(this), this._iter.__iterate(function (i) {
            return t(i, r ? e.size - ++n : n++, e);
          }, r);
        }, r.prototype.__iterator = function (t, r) {
          var e = this, n = this._iter.__iterator(1, r), i = 0;
          return r && s(this), new D(function () {
            var o = n.next();
            return o.done ? o : j(t, r ? e.size - ++i : i++, o.value, o);
          });
        }, r;
      }(N), wt = function (t) {
        function r(t) {
          this._iter = t, this.size = t.size;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.has = function (t) {
          return this._iter.includes(t);
        }, r.prototype.__iterate = function (t, r) {
          var e = this;
          return this._iter.__iterate(function (r) {
            return t(r, r, e);
          }, r);
        }, r.prototype.__iterator = function (t, r) {
          var e = this._iter.__iterator(1, r);
          return new D(function () {
            var r = e.next();
            return r.done ? r : j(t, r.value, r.value, r);
          });
        }, r;
      }(W), gt = function (t) {
        function r(t) {
          this._iter = t, this.size = t.size;
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.entrySeq = function () {
          return this._iter.toSeq();
        }, r.prototype.__iterate = function (t, r) {
          var e = this;
          return this._iter.__iterate(function (r) {
            if (r) {
              xt(r);
              var n = v(r);
              return t(n ? r.get(1) : r[1], n ? r.get(0) : r[0], e);
            }
          }, r);
        }, r.prototype.__iterator = function (t, r) {
          var e = this._iter.__iterator(1, r);
          return new D(function () {
            for (;;) {
              var r = e.next();
              if (r.done)
                return r;
              var n = r.value;
              if (n) {
                xt(n);
                var i = v(n);
                return j(t, i ? n.get(0) : n[0], i ? n.get(1) : n[1], r);
              }
            }
          });
        }, r;
      }(C);
    function mt(t) {
      var r = Ut(t);
      return r._iter = t, r.size = t.size, r.flip = function () {
        return t;
      }, r.reverse = function () {
        var r = t.reverse.apply(this);
        return r.flip = function () {
          return t.reverse();
        }, r;
      }, r.has = function (r) {
        return t.includes(r);
      }, r.includes = function (r) {
        return t.has(r);
      }, r.cacheResult = Bt, r.__iterateUncached = function (r, e) {
        var n = this;
        return t.__iterate(function (t, e) {
          return !1 !== r(e, t, n);
        }, e);
      }, r.__iteratorUncached = function (r, e) {
        if (2 === r) {
          var n = t.__iterator(r, e);
          return new D(function () {
            var t = n.next();
            if (!t.done) {
              var r = t.value[0];
              t.value[0] = t.value[1], t.value[1] = r;
            }
            return t;
          });
        }
        return t.__iterator(1 === r ? 0 : 1, e);
      }, r;
    }
    function St(t, r, e) {
      var n = Ut(t);
      return n.size = t.size, n.has = function (r) {
        return t.has(r);
      }, n.get = function (n, o) {
        var u = t.get(n, i);
        return u === i ? o : r.call(e, u, n, t);
      }, n.__iterateUncached = function (n, i) {
        var o = this;
        return t.__iterate(function (t, i, u) {
          return !1 !== n(r.call(e, t, i, u), i, o);
        }, i);
      }, n.__iteratorUncached = function (n, i) {
        var o = t.__iterator(2, i);
        return new D(function () {
          var i = o.next();
          if (i.done)
            return i;
          var u = i.value, s = u[0];
          return j(n, s, r.call(e, u[1], s, t), i);
        });
      }, n;
    }
    function zt(t, r) {
      var e = this, n = Ut(t);
      return n._iter = t, n.size = t.size, n.reverse = function () {
        return t;
      }, t.flip && (n.flip = function () {
        var r = mt(t);
        return r.reverse = function () {
          return t.flip();
        }, r;
      }), n.get = function (e, n) {
        return t.get(r ? e : -1 - e, n);
      }, n.has = function (e) {
        return t.has(r ? e : -1 - e);
      }, n.includes = function (r) {
        return t.includes(r);
      }, n.cacheResult = Bt, n.__iterate = function (e, n) {
        var i = this, o = 0;
        return n && s(t), t.__iterate(function (t, u) {
          return e(t, r ? u : n ? i.size - ++o : o++, i);
        }, !n);
      }, n.__iterator = function (n, i) {
        var o = 0;
        i && s(t);
        var u = t.__iterator(2, !i);
        return new D(function () {
          var t = u.next();
          if (t.done)
            return t;
          var s = t.value;
          return j(n, r ? s[0] : i ? e.size - ++o : o++, s[1], t);
        });
      }, n;
    }
    function It(t, r, e, n) {
      var o = Ut(t);
      return n && (o.has = function (n) {
        var o = t.get(n, i);
        return o !== i && !!r.call(e, o, n, t);
      }, o.get = function (n, o) {
        var u = t.get(n, i);
        return u !== i && r.call(e, u, n, t) ? u : o;
      }), o.__iterateUncached = function (i, o) {
        var u = this, s = 0;
        return t.__iterate(function (t, o, a) {
          if (r.call(e, t, o, a))
            return s++, i(t, n ? o : s - 1, u);
        }, o), s;
      }, o.__iteratorUncached = function (i, o) {
        var u = t.__iterator(2, o), s = 0;
        return new D(function () {
          for (;;) {
            var o = u.next();
            if (o.done)
              return o;
            var a = o.value, c = a[0], f = a[1];
            if (r.call(e, f, c, t))
              return j(i, n ? c : s++, f, o);
          }
        });
      }, o;
    }
    function bt(t, r, e, n) {
      var i = t.size;
      if (f(r, e, i))
        return t;
      var o = h(r, i), u = _(e, i);
      if (o != o || u != u)
        return bt(t.toSeq().cacheResult(), r, e, n);
      var s, c = u - o;
      c == c && (s = c < 0 ? 0 : c);
      var p = Ut(t);
      return p.size = 0 === s ? s : t.size && s || void 0, !n && I(t) && s >= 0 && (p.get = function (r, e) {
        return (r = a(this, r)) >= 0 && r < s ? t.get(r + o, e) : e;
      }), p.__iterateUncached = function (r, e) {
        var i = this;
        if (0 === s)
          return 0;
        if (e)
          return this.cacheResult().__iterate(r, e);
        var u = 0, a = !0, c = 0;
        return t.__iterate(function (t, e) {
          if (!a || !(a = u++ < o))
            return c++, !1 !== r(t, n ? e : c - 1, i) && c !== s;
        }), c;
      }, p.__iteratorUncached = function (r, e) {
        if (0 !== s && e)
          return this.cacheResult().__iterator(r, e);
        if (0 === s)
          return new D(k);
        var i = t.__iterator(r, e), u = 0, a = 0;
        return new D(function () {
          for (; u++ < o;)
            i.next();
          if (++a > s)
            return {
              value: void 0,
              done: !0
            };
          var t = i.next();
          return n || 1 === r || t.done ? t : j(r, a - 1, 0 === r ? void 0 : t.value[1], t);
        });
      }, p;
    }
    function Et(t, r, e, n) {
      var i = Ut(t);
      return i.__iterateUncached = function (i, o) {
        var u = this;
        if (o)
          return this.cacheResult().__iterate(i, o);
        var s = !0, a = 0;
        return t.__iterate(function (t, o, c) {
          if (!s || !(s = r.call(e, t, o, c)))
            return a++, i(t, n ? o : a - 1, u);
        }), a;
      }, i.__iteratorUncached = function (i, o) {
        var u = this;
        if (o)
          return this.cacheResult().__iterator(i, o);
        var s = t.__iterator(2, o), a = !0, c = 0;
        return new D(function () {
          var t, o, f;
          do {
            if ((t = s.next()).done)
              return n || 1 === i ? t : j(i, c++, 0 === i ? void 0 : t.value[1], t);
            var h = t.value;
            o = h[0], f = h[1], a && (a = r.call(e, f, o, u));
          } while (a);
          return 2 === i ? t : j(i, o, f, t);
        });
      }, i;
    }
    function Mt(t, r) {
      var e = y(t), n = [t].concat(r).map(function (t) {
          return v(t) ? e && (t = m(t)) : t = e ? Y(t) : X(Array.isArray(t) ? t : [t]), t;
        }).filter(function (t) {
          return 0 !== t.size;
        });
      if (0 === n.length)
        return t;
      if (1 === n.length) {
        var i = n[0];
        if (i === t || e && y(i) || d(t) && d(i))
          return i;
      }
      var o = new P(n);
      return e ? o = o.toKeyedSeq() : d(t) || (o = o.toSetSeq()), (o = o.flatten(!0)).size = n.reduce(function (t, r) {
        if (void 0 !== t) {
          var e = r.size;
          if (void 0 !== e)
            return t + e;
        }
      }, 0), o;
    }
    function Ot(t, r, e) {
      var n = Ut(t);
      return n.__iterateUncached = function (i, o) {
        if (o)
          return this.cacheResult().__iterate(i, o);
        var u = 0, s = !1;
        return function t(a, c) {
          a.__iterate(function (o, a) {
            return (!r || c < r) && v(o) ? t(o, c + 1) : (u++, !1 === i(o, e ? a : u - 1, n) && (s = !0)), !s;
          }, o);
        }(t, 0), u;
      }, n.__iteratorUncached = function (n, i) {
        if (i)
          return this.cacheResult().__iterator(n, i);
        var o = t.__iterator(n, i), u = [], s = 0;
        return new D(function () {
          for (; o;) {
            var t = o.next();
            if (!1 === t.done) {
              var a = t.value;
              if (2 === n && (a = a[1]), r && !(u.length < r) || !v(a))
                return e ? t : j(n, s++, a, t);
              u.push(o), o = a.__iterator(n, i);
            } else
              o = u.pop();
          }
          return {
            value: void 0,
            done: !0
          };
        });
      }, n;
    }
    function At(t, r, e) {
      r || (r = Rt);
      var n = y(t), i = 0, o = t.toSeq().map(function (r, n) {
          return [
            n,
            r,
            i++,
            e ? e(r, n, t) : r
          ];
        }).valueSeq().toArray();
      return o.sort(function (t, e) {
        return r(t[3], e[3]) || t[2] - e[2];
      }).forEach(n ? function (t, r) {
        o[r].length = 2;
      } : function (t, r) {
        o[r] = t[1];
      }), n ? C(o) : d(t) ? N(o) : W(o);
    }
    function qt(t, r, e) {
      if (r || (r = Rt), e) {
        var n = t.toSeq().map(function (r, n) {
          return [
            r,
            e(r, n, t)
          ];
        }).reduce(function (t, e) {
          return Dt(r, t[1], e[1]) ? e : t;
        });
        return n && n[0];
      }
      return t.reduce(function (t, e) {
        return Dt(r, t, e) ? e : t;
      });
    }
    function Dt(t, r, e) {
      var n = t(e, r);
      return 0 === n && e !== r && (null == e || e != e) || n > 0;
    }
    function jt(t, r, e, n) {
      var i = Ut(t), o = new P(e).map(function (t) {
          return t.size;
        });
      return i.size = n ? o.max() : o.min(), i.__iterate = function (t, r) {
        for (var e, n = this.__iterator(1, r), i = 0; !(e = n.next()).done && !1 !== t(e.value, i++, this););
        return i;
      }, i.__iteratorUncached = function (t, i) {
        var o = e.map(function (t) {
            return t = g(t), U(i ? t.reverse() : t);
          }), u = 0, s = !1;
        return new D(function () {
          var e;
          return s || (e = o.map(function (t) {
            return t.next();
          }), s = n ? e.every(function (t) {
            return t.done;
          }) : e.some(function (t) {
            return t.done;
          })), s ? {
            value: void 0,
            done: !0
          } : j(t, u++, r.apply(null, e.map(function (t) {
            return t.value;
          })));
        });
      }, i;
    }
    function kt(t, r) {
      return t === r ? t : I(t) ? r : t.constructor(r);
    }
    function xt(t) {
      if (t !== Object(t))
        throw new TypeError('Expected [K, V] tuple: ' + t);
    }
    function Tt(t) {
      return y(t) ? m : d(t) ? S : z;
    }
    function Ut(t) {
      return Object.create((y(t) ? C : d(t) ? N : W).prototype);
    }
    function Bt() {
      return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : K.prototype.cacheResult.call(this);
    }
    function Rt(t, r) {
      return void 0 === t && void 0 === r ? 0 : void 0 === t ? 1 : void 0 === r ? -1 : t > r ? 1 : t < r ? -1 : 0;
    }
    function Lt(t, r) {
      r = r || 0;
      for (var e = Math.max(0, t.length - r), n = new Array(e), i = 0; i < e; i++)
        n[i] = t[i + r];
      return n;
    }
    function Kt(t, r) {
      if (!t)
        throw new Error(r);
    }
    function Ct(t) {
      Kt(t !== 1 / 0, 'Cannot perform this action with an infinite size.');
    }
    function Nt(t) {
      if (L(t) && 'string' != typeof t)
        return t;
      if (O(t))
        return t.toArray();
      throw new TypeError('Invalid keyPath: expected Ordered Collection or Array: ' + t);
    }
    function Wt(t) {
      return t && ('function' != typeof t.constructor || 'Object' === t.constructor.name);
    }
    function Pt(t) {
      return 'object' === n(t) && (E(t) || Array.isArray(t) || Wt(t));
    }
    function Ht(t) {
      try {
        return 'string' == typeof t ? JSON.stringify(t) : String(t);
      } catch (r) {
        return JSON.stringify(t);
      }
    }
    function Jt(t, r) {
      return E(t) ? t.has(r) : Pt(t) && R.call(t, r);
    }
    function Vt(t, r, e) {
      return E(t) ? t.get(r, e) : Jt(t, r) ? 'function' == typeof t.get ? t.get(r) : t[r] : e;
    }
    function Qt(t) {
      if (Array.isArray(t))
        return Lt(t);
      var r = {};
      for (var e in t)
        R.call(t, e) && (r[e] = t[e]);
      return r;
    }
    function Yt(t, r) {
      if (!Pt(t))
        throw new TypeError('Cannot update non-data-structure value: ' + t);
      if (E(t)) {
        if (!t.remove)
          throw new TypeError('Cannot update immutable value without .remove() method: ' + t);
        return t.remove(r);
      }
      if (!R.call(t, r))
        return t;
      var e = Qt(t);
      return Array.isArray(e) ? e.splice(r, 1) : delete e[r], e;
    }
    function Xt(t, r, e) {
      if (!Pt(t))
        throw new TypeError('Cannot update non-data-structure value: ' + t);
      if (E(t)) {
        if (!t.set)
          throw new TypeError('Cannot update immutable value without .set() method: ' + t);
        return t.set(r, e);
      }
      if (R.call(t, r) && e === t[r])
        return t;
      var n = Qt(t);
      return n[r] = e, n;
    }
    function Ft(t, r, e, n) {
      n || (n = e, e = void 0);
      var o = function t(r, e, n, o, u, s) {
        var a = e === i;
        if (o === n.length) {
          var c = a ? u : e, f = s(c);
          return f === c ? e : f;
        }
        if (!a && !Pt(e))
          throw new TypeError('Cannot update within non-data-structure value in path [' + n.slice(0, o).map(Ht) + ']: ' + e);
        var h = n[o], _ = a ? i : Vt(e, h, i), p = t(_ === i ? r : E(_), _, n, o + 1, u, s);
        return p === _ ? e : p === i ? Yt(e, h) : Xt(a ? r ? qr() : {} : e, h, p);
      }(E(t), t, Nt(r), 0, e, n);
      return o === i ? e : o;
    }
    function Gt(t, r, e) {
      return Ft(t, r, i, function () {
        return e;
      });
    }
    function Zt(t, r) {
      return Gt(this, t, r);
    }
    function $t(t, r) {
      return Ft(t, r, function () {
        return i;
      });
    }
    function tr(t) {
      return $t(this, t);
    }
    function rr(t, r, e, n) {
      return Ft(t, [r], e, n);
    }
    function er(t, r, e) {
      return 1 === arguments.length ? t(this) : rr(this, t, r, e);
    }
    function nr(t, r, e) {
      return Ft(this, t, r, e);
    }
    function ir() {
      for (var t = [], r = arguments.length; r--;)
        t[r] = arguments[r];
      return ur(this, t);
    }
    function or(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;)
        r[e] = arguments[e + 1];
      if ('function' != typeof t)
        throw new TypeError('Invalid merger function: ' + t);
      return ur(this, r, t);
    }
    function ur(t, r, e) {
      for (var n = [], o = 0; o < r.length; o++) {
        var u = m(r[o]);
        0 !== u.size && n.push(u);
      }
      return 0 === n.length ? t : 0 !== t.toSeq().size || t.__ownerID || 1 !== n.length ? t.withMutations(function (t) {
        for (var r = e ? function (r, n) {
              rr(t, n, i, function (t) {
                return t === i ? r : e(t, r, n);
              });
            } : function (r, e) {
              t.set(e, r);
            }, o = 0; o < n.length; o++)
          n[o].forEach(r);
      }) : t.constructor(n[0]);
    }
    function sr(t, r, e) {
      return ar(t, r, function (t) {
        return function r(e, n, i) {
          return Pt(e) && Pt(n) ? ar(e, [n], r) : t ? t(e, n, i) : n;
        };
      }(e));
    }
    function ar(t, r, e) {
      if (!Pt(t))
        throw new TypeError('Cannot merge into non-data-structure value: ' + t);
      if (E(t))
        return 'function' == typeof e && t.mergeWith ? t.mergeWith.apply(t, [e].concat(r)) : t.merge ? t.merge.apply(t, r) : t.concat.apply(t, r);
      for (var n = Array.isArray(t), i = t, o = n ? S : m, u = n ? function (r) {
            i === t && (i = Qt(i)), i.push(r);
          } : function (r, n) {
            var o = R.call(i, n), u = o && e ? e(i[n], r, n) : r;
            o && u === i[n] || (i === t && (i = Qt(i)), i[n] = u);
          }, s = 0; s < r.length; s++)
        o(r[s]).forEach(u);
      return i;
    }
    function cr() {
      for (var t = [], r = arguments.length; r--;)
        t[r] = arguments[r];
      return sr(this, t);
    }
    function fr(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;)
        r[e] = arguments[e + 1];
      return sr(this, r, t);
    }
    function hr(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;)
        r[e] = arguments[e + 1];
      return Ft(this, t, qr(), function (t) {
        return ar(t, r);
      });
    }
    function _r(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;)
        r[e] = arguments[e + 1];
      return Ft(this, t, qr(), function (t) {
        return sr(t, r);
      });
    }
    function pr(t) {
      var r = this.asMutable();
      return t(r), r.wasAltered() ? r.__ensureOwner(this.__ownerID) : this;
    }
    function lr() {
      return this.__ownerID ? this : this.__ensureOwner(new u());
    }
    function vr() {
      return this.__ensureOwner();
    }
    function yr() {
      return this.__altered;
    }
    dt.prototype.cacheResult = yt.prototype.cacheResult = wt.prototype.cacheResult = gt.prototype.cacheResult = Bt;
    var dr = function (t) {
      function r(r) {
        return null == r ? qr() : G(r) && !O(r) ? r : qr().withMutations(function (e) {
          var n = t(r);
          Ct(n.size), n.forEach(function (t, r) {
            return e.set(r, t);
          });
        });
      }
      return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
        for (var t = [], r = arguments.length; r--;)
          t[r] = arguments[r];
        return qr().withMutations(function (r) {
          for (var e = 0; e < t.length; e += 2) {
            if (e + 1 >= t.length)
              throw new Error('Missing value for key: ' + t[e]);
            r.set(t[e], t[e + 1]);
          }
        });
      }, r.prototype.toString = function () {
        return this.__toString('Map {', '}');
      }, r.prototype.get = function (t, r) {
        return this._root ? this._root.get(0, void 0, t, r) : r;
      }, r.prototype.set = function (t, r) {
        return Dr(this, t, r);
      }, r.prototype.remove = function (t) {
        return Dr(this, t, i);
      }, r.prototype.deleteAll = function (t) {
        var r = g(t);
        return 0 === r.size ? this : this.withMutations(function (t) {
          r.forEach(function (r) {
            return t.remove(r);
          });
        });
      }, r.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : qr();
      }, r.prototype.sort = function (t) {
        return te(At(this, t));
      }, r.prototype.sortBy = function (t, r) {
        return te(At(this, r, t));
      }, r.prototype.map = function (t, r) {
        return this.withMutations(function (e) {
          e.forEach(function (n, i) {
            e.set(i, t.call(r, n, i, e));
          });
        });
      }, r.prototype.__iterator = function (t, r) {
        return new Er(this, t, r);
      }, r.prototype.__iterate = function (t, r) {
        var e = this, n = 0;
        return this._root && this._root.iterate(function (r) {
          return n++, t(r[1], r[0], e);
        }, r), n;
      }, r.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Ar(this.size, this._root, t, this.__hash) : 0 === this.size ? qr() : (this.__ownerID = t, this.__altered = !1, this);
      }, r;
    }(m);
    dr.isMap = G;
    var wr = dr.prototype;
    wr['@@__IMMUTABLE_MAP__@@'] = !0, wr.delete = wr.remove, wr.removeAll = wr.deleteAll, wr.setIn = Zt, wr.removeIn = wr.deleteIn = tr, wr.update = er, wr.updateIn = nr, wr.merge = wr.concat = ir, wr.mergeWith = or, wr.mergeDeep = cr, wr.mergeDeepWith = fr, wr.mergeIn = hr, wr.mergeDeepIn = _r, wr.withMutations = pr, wr.wasAltered = yr, wr.asImmutable = vr, wr['@@transducer/init'] = wr.asMutable = lr, wr['@@transducer/step'] = function (t, r) {
      return t.set(r[0], r[1]);
    }, wr['@@transducer/result'] = function (t) {
      return t.asImmutable();
    };
    var gr = function (t, r) {
      this.ownerID = t, this.entries = r;
    };
    gr.prototype.get = function (t, r, e, n) {
      for (var i = this.entries, o = 0, u = i.length; o < u; o++)
        if (tt(e, i[o][0]))
          return i[o][1];
      return n;
    }, gr.prototype.update = function (t, r, e, n, s, a, c) {
      for (var f = s === i, h = this.entries, _ = 0, p = h.length; _ < p && !tt(n, h[_][0]); _++);
      var l = _ < p;
      if (l ? h[_][1] === s : f)
        return this;
      if (o(c), (f || !l) && o(a), !f || 1 !== h.length) {
        if (!l && !f && h.length >= Br)
          return function (t, r, e, n) {
            t || (t = new u());
            for (var i = new Ir(t, it(e), [
                  e,
                  n
                ]), o = 0; o < r.length; o++) {
              var s = r[o];
              i = i.update(t, 0, void 0, s[0], s[1]);
            }
            return i;
          }(t, h, n, s);
        var v = t && t === this.ownerID, y = v ? h : Lt(h);
        return l ? f ? _ === p - 1 ? y.pop() : y[_] = y.pop() : y[_] = [
          n,
          s
        ] : y.push([
          n,
          s
        ]), v ? (this.entries = y, this) : new gr(t, y);
      }
    };
    var mr = function (t, r, e) {
      this.ownerID = t, this.bitmap = r, this.nodes = e;
    };
    mr.prototype.get = function (t, r, e, n) {
      void 0 === r && (r = it(e));
      var i = 1 << (31 & (0 === t ? r : r >>> t)), o = this.bitmap;
      return 0 == (o & i) ? n : this.nodes[Tr(o & i - 1)].get(t + 5, r, e, n);
    }, mr.prototype.update = function (t, r, e, n, o, u, s) {
      void 0 === e && (e = it(n));
      var a = 31 & (0 === r ? e : e >>> r), c = 1 << a, f = this.bitmap, h = 0 != (f & c);
      if (!h && o === i)
        return this;
      var _ = Tr(f & c - 1), p = this.nodes, l = h ? p[_] : void 0, v = jr(l, t, r + 5, e, n, o, u, s);
      if (v === l)
        return this;
      if (!h && v && p.length >= Rr)
        return function (t, r, e, n, i) {
          for (var o = 0, u = new Array(32), s = 0; 0 !== e; s++, e >>>= 1)
            u[s] = 1 & e ? r[o++] : void 0;
          return u[n] = i, new Sr(t, o + 1, u);
        }(t, p, f, a, v);
      if (h && !v && 2 === p.length && kr(p[1 ^ _]))
        return p[1 ^ _];
      if (h && v && 1 === p.length && kr(v))
        return v;
      var y = t && t === this.ownerID, d = h ? v ? f : f ^ c : f | c, w = h ? v ? Ur(p, _, v, y) : function (t, r, e) {
          var n = t.length - 1;
          if (e && r === n)
            return t.pop(), t;
          for (var i = new Array(n), o = 0, u = 0; u < n; u++)
            u === r && (o = 1), i[u] = t[u + o];
          return i;
        }(p, _, y) : function (t, r, e, n) {
          var i = t.length + 1;
          if (n && r + 1 === i)
            return t[r] = e, t;
          for (var o = new Array(i), u = 0, s = 0; s < i; s++)
            s === r ? (o[s] = e, u = -1) : o[s] = t[s + u];
          return o;
        }(p, _, v, y);
      return y ? (this.bitmap = d, this.nodes = w, this) : new mr(t, d, w);
    };
    var Sr = function (t, r, e) {
      this.ownerID = t, this.count = r, this.nodes = e;
    };
    Sr.prototype.get = function (t, r, e, n) {
      void 0 === r && (r = it(e));
      var i = 31 & (0 === t ? r : r >>> t), o = this.nodes[i];
      return o ? o.get(t + 5, r, e, n) : n;
    }, Sr.prototype.update = function (t, r, e, n, o, u, s) {
      void 0 === e && (e = it(n));
      var a = 31 & (0 === r ? e : e >>> r), c = o === i, f = this.nodes, h = f[a];
      if (c && !h)
        return this;
      var _ = jr(h, t, r + 5, e, n, o, u, s);
      if (_ === h)
        return this;
      var p = this.count;
      if (h) {
        if (!_ && --p < Lr)
          return function (t, r, e, n) {
            for (var i = 0, o = 0, u = new Array(e), s = 0, a = 1, c = r.length; s < c; s++, a <<= 1) {
              var f = r[s];
              void 0 !== f && s !== n && (i |= a, u[o++] = f);
            }
            return new mr(t, i, u);
          }(t, f, p, a);
      } else
        p++;
      var l = t && t === this.ownerID, v = Ur(f, a, _, l);
      return l ? (this.count = p, this.nodes = v, this) : new Sr(t, p, v);
    };
    var zr = function (t, r, e) {
      this.ownerID = t, this.keyHash = r, this.entries = e;
    };
    zr.prototype.get = function (t, r, e, n) {
      for (var i = this.entries, o = 0, u = i.length; o < u; o++)
        if (tt(e, i[o][0]))
          return i[o][1];
      return n;
    }, zr.prototype.update = function (t, r, e, n, u, s, a) {
      void 0 === e && (e = it(n));
      var c = u === i;
      if (e !== this.keyHash)
        return c ? this : (o(a), o(s), xr(this, t, r, e, [
          n,
          u
        ]));
      for (var f = this.entries, h = 0, _ = f.length; h < _ && !tt(n, f[h][0]); h++);
      var p = h < _;
      if (p ? f[h][1] === u : c)
        return this;
      if (o(a), (c || !p) && o(s), c && 2 === _)
        return new Ir(t, this.keyHash, f[1 ^ h]);
      var l = t && t === this.ownerID, v = l ? f : Lt(f);
      return p ? c ? h === _ - 1 ? v.pop() : v[h] = v.pop() : v[h] = [
        n,
        u
      ] : v.push([
        n,
        u
      ]), l ? (this.entries = v, this) : new zr(t, this.keyHash, v);
    };
    var Ir = function (t, r, e) {
      this.ownerID = t, this.keyHash = r, this.entry = e;
    };
    Ir.prototype.get = function (t, r, e, n) {
      return tt(e, this.entry[0]) ? this.entry[1] : n;
    }, Ir.prototype.update = function (t, r, e, n, u, s, a) {
      var c = u === i, f = tt(n, this.entry[0]);
      return (f ? u === this.entry[1] : c) ? this : (o(a), c ? void o(s) : f ? t && t === this.ownerID ? (this.entry[1] = u, this) : new Ir(t, this.keyHash, [
        n,
        u
      ]) : (o(s), xr(this, t, r, it(n), [
        n,
        u
      ])));
    }, gr.prototype.iterate = zr.prototype.iterate = function (t, r) {
      for (var e = this.entries, n = 0, i = e.length - 1; n <= i; n++)
        if (!1 === t(e[r ? i - n : n]))
          return !1;
    }, mr.prototype.iterate = Sr.prototype.iterate = function (t, r) {
      for (var e = this.nodes, n = 0, i = e.length - 1; n <= i; n++) {
        var o = e[r ? i - n : n];
        if (o && !1 === o.iterate(t, r))
          return !1;
      }
    }, Ir.prototype.iterate = function (t, r) {
      return t(this.entry);
    };
    var br, Er = function (t) {
        function r(t, r, e) {
          this._type = r, this._reverse = e, this._stack = t._root && Or(t._root);
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.next = function () {
          for (var t = this._type, r = this._stack; r;) {
            var e = r.node, n = r.index++, i = void 0;
            if (e.entry) {
              if (0 === n)
                return Mr(t, e.entry);
            } else if (e.entries) {
              if (n <= (i = e.entries.length - 1))
                return Mr(t, e.entries[this._reverse ? i - n : n]);
            } else if (n <= (i = e.nodes.length - 1)) {
              var o = e.nodes[this._reverse ? i - n : n];
              if (o) {
                if (o.entry)
                  return Mr(t, o.entry);
                r = this._stack = Or(o, r);
              }
              continue;
            }
            r = this._stack = this._stack.__prev;
          }
          return {
            value: void 0,
            done: !0
          };
        }, r;
      }(D);
    function Mr(t, r) {
      return j(t, r[0], r[1]);
    }
    function Or(t, r) {
      return {
        node: t,
        index: 0,
        __prev: r
      };
    }
    function Ar(t, r, e, n) {
      var i = Object.create(wr);
      return i.size = t, i._root = r, i.__ownerID = e, i.__hash = n, i.__altered = !1, i;
    }
    function qr() {
      return br || (br = Ar(0));
    }
    function Dr(t, r, e) {
      var n, o;
      if (t._root) {
        var u = { value: !1 }, s = { value: !1 };
        if (n = jr(t._root, t.__ownerID, 0, void 0, r, e, u, s), !s.value)
          return t;
        o = t.size + (u.value ? e === i ? -1 : 1 : 0);
      } else {
        if (e === i)
          return t;
        o = 1, n = new gr(t.__ownerID, [[
            r,
            e
          ]]);
      }
      return t.__ownerID ? (t.size = o, t._root = n, t.__hash = void 0, t.__altered = !0, t) : n ? Ar(o, n) : qr();
    }
    function jr(t, r, e, n, u, s, a, c) {
      return t ? t.update(r, e, n, u, s, a, c) : s === i ? t : (o(c), o(a), new Ir(r, n, [
        u,
        s
      ]));
    }
    function kr(t) {
      return t.constructor === Ir || t.constructor === zr;
    }
    function xr(t, r, e, n, i) {
      if (t.keyHash === n)
        return new zr(r, n, [
          t.entry,
          i
        ]);
      var o, u = 31 & (0 === e ? t.keyHash : t.keyHash >>> e), s = 31 & (0 === e ? n : n >>> e), a = u === s ? [xr(t, r, e + 5, n, i)] : (o = new Ir(r, n, i), u < s ? [
          t,
          o
        ] : [
          o,
          t
        ]);
      return new mr(r, 1 << u | 1 << s, a);
    }
    function Tr(t) {
      return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, t += t >> 8, 127 & (t += t >> 16);
    }
    function Ur(t, r, e, n) {
      var i = n ? t : Lt(t);
      return i[r] = e, i;
    }
    var Br = 8, Rr = 16, Lr = 8;
    function Kr(t) {
      return Boolean(t && t['@@__IMMUTABLE_LIST__@@']);
    }
    var Cr = function (t) {
      function r(r) {
        var e = Qr();
        if (null == r)
          return e;
        if (Kr(r))
          return r;
        var n = t(r), i = n.size;
        return 0 === i ? e : (Ct(i), i > 0 && i < 32 ? Vr(0, i, 5, null, new Wr(n.toArray())) : e.withMutations(function (t) {
          t.setSize(i), n.forEach(function (r, e) {
            return t.set(e, r);
          });
        }));
      }
      return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
        return this(arguments);
      }, r.prototype.toString = function () {
        return this.__toString('List [', ']');
      }, r.prototype.get = function (t, r) {
        if ((t = a(this, t)) >= 0 && t < this.size) {
          var e = Fr(this, t += this._origin);
          return e && e.array[31 & t];
        }
        return r;
      }, r.prototype.set = function (t, r) {
        return function (t, r, e) {
          if ((r = a(t, r)) != r)
            return t;
          if (r >= t.size || r < 0)
            return t.withMutations(function (t) {
              r < 0 ? Gr(t, r).set(0, e) : Gr(t, 0, r + 1).set(r, e);
            });
          r += t._origin;
          var n = t._tail, i = t._root, o = { value: !1 };
          r >= Zr(t._capacity) ? n = Yr(n, t.__ownerID, 0, r, e, o) : i = Yr(i, t.__ownerID, t._level, r, e, o);
          if (!o.value)
            return t;
          if (t.__ownerID)
            return t._root = i, t._tail = n, t.__hash = void 0, t.__altered = !0, t;
          return Vr(t._origin, t._capacity, t._level, i, n);
        }(this, t, r);
      }, r.prototype.remove = function (t) {
        return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
      }, r.prototype.insert = function (t, r) {
        return this.splice(t, 0, r);
      }, r.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Qr();
      }, r.prototype.push = function () {
        var t = arguments, r = this.size;
        return this.withMutations(function (e) {
          Gr(e, 0, r + t.length);
          for (var n = 0; n < t.length; n++)
            e.set(r + n, t[n]);
        });
      }, r.prototype.pop = function () {
        return Gr(this, 0, -1);
      }, r.prototype.unshift = function () {
        var t = arguments;
        return this.withMutations(function (r) {
          Gr(r, -t.length);
          for (var e = 0; e < t.length; e++)
            r.set(e, t[e]);
        });
      }, r.prototype.shift = function () {
        return Gr(this, 1);
      }, r.prototype.concat = function () {
        for (var r = arguments, e = [], n = 0; n < arguments.length; n++) {
          var i = r[n], o = t('string' != typeof i && x(i) ? i : [i]);
          0 !== o.size && e.push(o);
        }
        return 0 === e.length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (t) {
          e.forEach(function (r) {
            return r.forEach(function (r) {
              return t.push(r);
            });
          });
        }) : this.constructor(e[0]);
      }, r.prototype.setSize = function (t) {
        return Gr(this, 0, t);
      }, r.prototype.map = function (t, r) {
        var e = this;
        return this.withMutations(function (n) {
          for (var i = 0; i < e.size; i++)
            n.set(i, t.call(r, n.get(i), i, n));
        });
      }, r.prototype.slice = function (t, r) {
        var e = this.size;
        return f(t, r, e) ? this : Gr(this, h(t, e), _(r, e));
      }, r.prototype.__iterator = function (t, r) {
        var e = r ? this.size : 0, n = Jr(this, r);
        return new D(function () {
          var i = n();
          return i === Hr ? {
            value: void 0,
            done: !0
          } : j(t, r ? --e : e++, i);
        });
      }, r.prototype.__iterate = function (t, r) {
        for (var e, n = r ? this.size : 0, i = Jr(this, r); (e = i()) !== Hr && !1 !== t(e, r ? --n : n++, this););
        return n;
      }, r.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Vr(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : 0 === this.size ? Qr() : (this.__ownerID = t, this.__altered = !1, this);
      }, r;
    }(S);
    Cr.isList = Kr;
    var Nr = Cr.prototype;
    Nr['@@__IMMUTABLE_LIST__@@'] = !0, Nr.delete = Nr.remove, Nr.merge = Nr.concat, Nr.setIn = Zt, Nr.deleteIn = Nr.removeIn = tr, Nr.update = er, Nr.updateIn = nr, Nr.mergeIn = hr, Nr.mergeDeepIn = _r, Nr.withMutations = pr, Nr.wasAltered = yr, Nr.asImmutable = vr, Nr['@@transducer/init'] = Nr.asMutable = lr, Nr['@@transducer/step'] = function (t, r) {
      return t.push(r);
    }, Nr['@@transducer/result'] = function (t) {
      return t.asImmutable();
    };
    var Wr = function (t, r) {
      this.array = t, this.ownerID = r;
    };
    Wr.prototype.removeBefore = function (t, r, e) {
      if (e === r ? 1 << r : 0 === this.array.length)
        return this;
      var n = e >>> r & 31;
      if (n >= this.array.length)
        return new Wr([], t);
      var i, o = 0 === n;
      if (r > 0) {
        var u = this.array[n];
        if ((i = u && u.removeBefore(t, r - 5, e)) === u && o)
          return this;
      }
      if (o && !i)
        return this;
      var s = Xr(this, t);
      if (!o)
        for (var a = 0; a < n; a++)
          s.array[a] = void 0;
      return i && (s.array[n] = i), s;
    }, Wr.prototype.removeAfter = function (t, r, e) {
      if (e === (r ? 1 << r : 0) || 0 === this.array.length)
        return this;
      var n, i = e - 1 >>> r & 31;
      if (i >= this.array.length)
        return this;
      if (r > 0) {
        var o = this.array[i];
        if ((n = o && o.removeAfter(t, r - 5, e)) === o && i === this.array.length - 1)
          return this;
      }
      var u = Xr(this, t);
      return u.array.splice(i + 1), n && (u.array[i] = n), u;
    };
    var Pr, Hr = {};
    function Jr(t, r) {
      var e = t._origin, n = t._capacity, i = Zr(n), o = t._tail;
      return u(t._root, t._level, 0);
      function u(t, s, a) {
        return 0 === s ? function (t, u) {
          var s = u === i ? o && o.array : t && t.array, a = u > e ? 0 : e - u, c = n - u;
          c > 32 && (c = 32);
          return function () {
            if (a === c)
              return Hr;
            var t = r ? --c : a++;
            return s && s[t];
          };
        }(t, a) : function (t, i, o) {
          var s, a = t && t.array, c = o > e ? 0 : e - o >> i, f = 1 + (n - o >> i);
          f > 32 && (f = 32);
          return function () {
            for (;;) {
              if (s) {
                var t = s();
                if (t !== Hr)
                  return t;
                s = null;
              }
              if (c === f)
                return Hr;
              var e = r ? --f : c++;
              s = u(a && a[e], i - 5, o + (e << i));
            }
          };
        }(t, s, a);
      }
    }
    function Vr(t, r, e, n, i, o, u) {
      var s = Object.create(Nr);
      return s.size = r - t, s._origin = t, s._capacity = r, s._level = e, s._root = n, s._tail = i, s.__ownerID = o, s.__hash = u, s.__altered = !1, s;
    }
    function Qr() {
      return Pr || (Pr = Vr(0, 0, 5));
    }
    function Yr(t, r, e, n, i, u) {
      var s, a = n >>> e & 31, c = t && a < t.array.length;
      if (!c && void 0 === i)
        return t;
      if (e > 0) {
        var f = t && t.array[a], h = Yr(f, r, e - 5, n, i, u);
        return h === f ? t : ((s = Xr(t, r)).array[a] = h, s);
      }
      return c && t.array[a] === i ? t : (u && o(u), s = Xr(t, r), void 0 === i && a === s.array.length - 1 ? s.array.pop() : s.array[a] = i, s);
    }
    function Xr(t, r) {
      return r && t && r === t.ownerID ? t : new Wr(t ? t.array.slice() : [], r);
    }
    function Fr(t, r) {
      if (r >= Zr(t._capacity))
        return t._tail;
      if (r < 1 << t._level + 5) {
        for (var e = t._root, n = t._level; e && n > 0;)
          e = e.array[r >>> n & 31], n -= 5;
        return e;
      }
    }
    function Gr(t, r, e) {
      void 0 !== r && (r |= 0), void 0 !== e && (e |= 0);
      var n = t.__ownerID || new u(), i = t._origin, o = t._capacity, s = i + r, a = void 0 === e ? o : e < 0 ? o + e : i + e;
      if (s === i && a === o)
        return t;
      if (s >= a)
        return t.clear();
      for (var c = t._level, f = t._root, h = 0; s + h < 0;)
        f = new Wr(f && f.array.length ? [
          void 0,
          f
        ] : [], n), h += 1 << (c += 5);
      h && (s += h, i += h, a += h, o += h);
      for (var _ = Zr(o), p = Zr(a); p >= 1 << c + 5;)
        f = new Wr(f && f.array.length ? [f] : [], n), c += 5;
      var l = t._tail, v = p < _ ? Fr(t, a - 1) : p > _ ? new Wr([], n) : l;
      if (l && p > _ && s < o && l.array.length) {
        for (var y = f = Xr(f, n), d = c; d > 5; d -= 5) {
          var w = _ >>> d & 31;
          y = y.array[w] = Xr(y.array[w], n);
        }
        y.array[_ >>> 5 & 31] = l;
      }
      if (a < o && (v = v && v.removeAfter(n, 0, a)), s >= p)
        s -= p, a -= p, c = 5, f = null, v = v && v.removeBefore(n, 0, s);
      else if (s > i || p < _) {
        for (h = 0; f;) {
          var g = s >>> c & 31;
          if (g !== p >>> c & 31)
            break;
          g && (h += (1 << c) * g), c -= 5, f = f.array[g];
        }
        f && s > i && (f = f.removeBefore(n, c, s - h)), f && p < _ && (f = f.removeAfter(n, c, p - h)), h && (s -= h, a -= h);
      }
      return t.__ownerID ? (t.size = a - s, t._origin = s, t._capacity = a, t._level = c, t._root = f, t._tail = v, t.__hash = void 0, t.__altered = !0, t) : Vr(s, a, c, f, v);
    }
    function Zr(t) {
      return t < 32 ? 0 : t - 1 >>> 5 << 5;
    }
    var $r, te = function (t) {
        function r(t) {
          return null == t ? ee() : Z(t) ? t : ee().withMutations(function (r) {
            var e = m(t);
            Ct(e.size), e.forEach(function (t, e) {
              return r.set(e, t);
            });
          });
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
          return this(arguments);
        }, r.prototype.toString = function () {
          return this.__toString('OrderedMap {', '}');
        }, r.prototype.get = function (t, r) {
          var e = this._map.get(t);
          return void 0 !== e ? this._list.get(e)[1] : r;
        }, r.prototype.clear = function () {
          return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : ee();
        }, r.prototype.set = function (t, r) {
          return ne(this, t, r);
        }, r.prototype.remove = function (t) {
          return ne(this, t, i);
        }, r.prototype.wasAltered = function () {
          return this._map.wasAltered() || this._list.wasAltered();
        }, r.prototype.__iterate = function (t, r) {
          var e = this;
          return this._list.__iterate(function (r) {
            return r && t(r[1], r[0], e);
          }, r);
        }, r.prototype.__iterator = function (t, r) {
          return this._list.fromEntrySeq().__iterator(t, r);
        }, r.prototype.__ensureOwner = function (t) {
          if (t === this.__ownerID)
            return this;
          var r = this._map.__ensureOwner(t), e = this._list.__ensureOwner(t);
          return t ? re(r, e, t, this.__hash) : 0 === this.size ? ee() : (this.__ownerID = t, this._map = r, this._list = e, this);
        }, r;
      }(dr);
    function re(t, r, e, n) {
      var i = Object.create(te.prototype);
      return i.size = t ? t.size : 0, i._map = t, i._list = r, i.__ownerID = e, i.__hash = n, i;
    }
    function ee() {
      return $r || ($r = re(qr(), Qr()));
    }
    function ne(t, r, e) {
      var n, o, u = t._map, s = t._list, a = u.get(r), c = void 0 !== a;
      if (e === i) {
        if (!c)
          return t;
        s.size >= 32 && s.size >= 2 * u.size ? (n = (o = s.filter(function (t, r) {
          return void 0 !== t && a !== r;
        })).toKeyedSeq().map(function (t) {
          return t[0];
        }).flip().toMap(), t.__ownerID && (n.__ownerID = o.__ownerID = t.__ownerID)) : (n = u.remove(r), o = a === s.size - 1 ? s.pop() : s.set(a, void 0));
      } else if (c) {
        if (e === s.get(a)[1])
          return t;
        n = u, o = s.set(a, [
          r,
          e
        ]);
      } else
        n = u.set(r, s.size), o = s.set(s.size, [
          r,
          e
        ]);
      return t.__ownerID ? (t.size = n.size, t._map = n, t._list = o, t.__hash = void 0, t) : re(n, o);
    }
    te.isOrderedMap = Z, te.prototype[M] = !0, te.prototype.delete = te.prototype.remove;
    function ie(t) {
      return Boolean(t && t['@@__IMMUTABLE_STACK__@@']);
    }
    var oe = function (t) {
      function r(t) {
        return null == t ? ce() : ie(t) ? t : ce().pushAll(t);
      }
      return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
        return this(arguments);
      }, r.prototype.toString = function () {
        return this.__toString('Stack [', ']');
      }, r.prototype.get = function (t, r) {
        var e = this._head;
        for (t = a(this, t); e && t--;)
          e = e.next;
        return e ? e.value : r;
      }, r.prototype.peek = function () {
        return this._head && this._head.value;
      }, r.prototype.push = function () {
        var t = arguments;
        if (0 === arguments.length)
          return this;
        for (var r = this.size + arguments.length, e = this._head, n = arguments.length - 1; n >= 0; n--)
          e = {
            value: t[n],
            next: e
          };
        return this.__ownerID ? (this.size = r, this._head = e, this.__hash = void 0, this.__altered = !0, this) : ae(r, e);
      }, r.prototype.pushAll = function (r) {
        if (0 === (r = t(r)).size)
          return this;
        if (0 === this.size && ie(r))
          return r;
        Ct(r.size);
        var e = this.size, n = this._head;
        return r.__iterate(function (t) {
          e++, n = {
            value: t,
            next: n
          };
        }, !0), this.__ownerID ? (this.size = e, this._head = n, this.__hash = void 0, this.__altered = !0, this) : ae(e, n);
      }, r.prototype.pop = function () {
        return this.slice(1);
      }, r.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : ce();
      }, r.prototype.slice = function (r, e) {
        if (f(r, e, this.size))
          return this;
        var n = h(r, this.size);
        if (_(e, this.size) !== this.size)
          return t.prototype.slice.call(this, r, e);
        for (var i = this.size - n, o = this._head; n--;)
          o = o.next;
        return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : ae(i, o);
      }, r.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? ae(this.size, this._head, t, this.__hash) : 0 === this.size ? ce() : (this.__ownerID = t, this.__altered = !1, this);
      }, r.prototype.__iterate = function (t, r) {
        var e = this;
        if (r)
          return new P(this.toArray()).__iterate(function (r, n) {
            return t(r, n, e);
          }, r);
        for (var n = 0, i = this._head; i && !1 !== t(i.value, n++, this);)
          i = i.next;
        return n;
      }, r.prototype.__iterator = function (t, r) {
        if (r)
          return new P(this.toArray()).__iterator(t, r);
        var e = 0, n = this._head;
        return new D(function () {
          if (n) {
            var r = n.value;
            return n = n.next, j(t, e++, r);
          }
          return {
            value: void 0,
            done: !0
          };
        });
      }, r;
    }(S);
    oe.isStack = ie;
    var ue, se = oe.prototype;
    function ae(t, r, e, n) {
      var i = Object.create(se);
      return i.size = t, i._head = r, i.__ownerID = e, i.__hash = n, i.__altered = !1, i;
    }
    function ce() {
      return ue || (ue = ae(0));
    }
    se['@@__IMMUTABLE_STACK__@@'] = !0, se.shift = se.pop, se.unshift = se.push, se.unshiftAll = se.pushAll, se.withMutations = pr, se.wasAltered = yr, se.asImmutable = vr, se['@@transducer/init'] = se.asMutable = lr, se['@@transducer/step'] = function (t, r) {
      return t.unshift(r);
    }, se['@@transducer/result'] = function (t) {
      return t.asImmutable();
    };
    function fe(t) {
      return Boolean(t && t['@@__IMMUTABLE_SET__@@']);
    }
    function he(t) {
      return fe(t) && O(t);
    }
    function _e(t, r) {
      if (t === r)
        return !0;
      if (!v(r) || void 0 !== t.size && void 0 !== r.size && t.size !== r.size || void 0 !== t.__hash && void 0 !== r.__hash && t.__hash !== r.__hash || y(t) !== y(r) || d(t) !== d(r) || O(t) !== O(r))
        return !1;
      if (0 === t.size && 0 === r.size)
        return !0;
      var e = !w(t);
      if (O(t)) {
        var n = t.entries();
        return r.every(function (t, r) {
          var i = n.next().value;
          return i && tt(i[1], t) && (e || tt(i[0], r));
        }) && n.next().done;
      }
      var o = !1;
      if (void 0 === t.size)
        if (void 0 === r.size)
          'function' == typeof t.cacheResult && t.cacheResult();
        else {
          o = !0;
          var u = t;
          t = r, r = u;
        }
      var s = !0, a = r.__iterate(function (r, n) {
          if (e ? !t.has(r) : o ? !tt(r, t.get(n, i)) : !tt(t.get(n, i), r))
            return s = !1, !1;
        });
      return s && t.size === a;
    }
    function pe(t, r) {
      var e = function (e) {
        t.prototype[e] = r[e];
      };
      return Object.keys(r).forEach(e), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(r).forEach(e), t;
    }
    function le(t) {
      if (!t || 'object' !== n(t))
        return t;
      if (!v(t)) {
        if (!Pt(t))
          return t;
        t = K(t);
      }
      if (y(t)) {
        var r = {};
        return t.__iterate(function (t, e) {
          r[e] = le(t);
        }), r;
      }
      var e = [];
      return t.__iterate(function (t) {
        e.push(le(t));
      }), e;
    }
    var ve = function (t) {
      function r(r) {
        return null == r ? me() : fe(r) && !O(r) ? r : me().withMutations(function (e) {
          var n = t(r);
          Ct(n.size), n.forEach(function (t) {
            return e.add(t);
          });
        });
      }
      return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
        return this(arguments);
      }, r.fromKeys = function (t) {
        return this(m(t).keySeq());
      }, r.intersect = function (t) {
        return (t = g(t).toArray()).length ? de.intersect.apply(r(t.pop()), t) : me();
      }, r.union = function (t) {
        return (t = g(t).toArray()).length ? de.union.apply(r(t.pop()), t) : me();
      }, r.prototype.toString = function () {
        return this.__toString('Set {', '}');
      }, r.prototype.has = function (t) {
        return this._map.has(t);
      }, r.prototype.add = function (t) {
        return we(this, this._map.set(t, t));
      }, r.prototype.remove = function (t) {
        return we(this, this._map.remove(t));
      }, r.prototype.clear = function () {
        return we(this, this._map.clear());
      }, r.prototype.map = function (t, r) {
        var e = this, n = [], i = [];
        return this.forEach(function (o) {
          var u = t.call(r, o, o, e);
          u !== o && (n.push(o), i.push(u));
        }), this.withMutations(function (t) {
          n.forEach(function (r) {
            return t.remove(r);
          }), i.forEach(function (r) {
            return t.add(r);
          });
        });
      }, r.prototype.union = function () {
        for (var r = [], e = arguments.length; e--;)
          r[e] = arguments[e];
        return 0 === (r = r.filter(function (t) {
          return 0 !== t.size;
        })).length ? this : 0 !== this.size || this.__ownerID || 1 !== r.length ? this.withMutations(function (e) {
          for (var n = 0; n < r.length; n++)
            t(r[n]).forEach(function (t) {
              return e.add(t);
            });
        }) : this.constructor(r[0]);
      }, r.prototype.intersect = function () {
        for (var r = [], e = arguments.length; e--;)
          r[e] = arguments[e];
        if (0 === r.length)
          return this;
        r = r.map(function (r) {
          return t(r);
        });
        var n = [];
        return this.forEach(function (t) {
          r.every(function (r) {
            return r.includes(t);
          }) || n.push(t);
        }), this.withMutations(function (t) {
          n.forEach(function (r) {
            t.remove(r);
          });
        });
      }, r.prototype.subtract = function () {
        for (var r = [], e = arguments.length; e--;)
          r[e] = arguments[e];
        if (0 === r.length)
          return this;
        r = r.map(function (r) {
          return t(r);
        });
        var n = [];
        return this.forEach(function (t) {
          r.some(function (r) {
            return r.includes(t);
          }) && n.push(t);
        }), this.withMutations(function (t) {
          n.forEach(function (r) {
            t.remove(r);
          });
        });
      }, r.prototype.sort = function (t) {
        return Le(At(this, t));
      }, r.prototype.sortBy = function (t, r) {
        return Le(At(this, r, t));
      }, r.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }, r.prototype.__iterate = function (t, r) {
        var e = this;
        return this._map.__iterate(function (r) {
          return t(r, r, e);
        }, r);
      }, r.prototype.__iterator = function (t, r) {
        return this._map.__iterator(t, r);
      }, r.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID)
          return this;
        var r = this._map.__ensureOwner(t);
        return t ? this.__make(r, t) : 0 === this.size ? this.__empty() : (this.__ownerID = t, this._map = r, this);
      }, r;
    }(z);
    ve.isSet = fe;
    var ye, de = ve.prototype;
    function we(t, r) {
      return t.__ownerID ? (t.size = r.size, t._map = r, t) : r === t._map ? t : 0 === r.size ? t.__empty() : t.__make(r);
    }
    function ge(t, r) {
      var e = Object.create(de);
      return e.size = t ? t.size : 0, e._map = t, e.__ownerID = r, e;
    }
    function me() {
      return ye || (ye = ge(qr()));
    }
    de['@@__IMMUTABLE_SET__@@'] = !0, de.delete = de.remove, de.merge = de.concat = de.union, de.withMutations = pr, de.asImmutable = vr, de['@@transducer/init'] = de.asMutable = lr, de['@@transducer/step'] = function (t, r) {
      return t.add(r);
    }, de['@@transducer/result'] = function (t) {
      return t.asImmutable();
    }, de.__empty = me, de.__make = ge;
    var Se, ze = function (t) {
        function r(t, e, n) {
          if (!(this instanceof r))
            return new r(t, e, n);
          if (Kt(0 !== n, 'Cannot step a Range by 0'), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
            if (Se)
              return Se;
            Se = this;
          }
        }
        return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.prototype.toString = function () {
          return 0 === this.size ? 'Range []' : 'Range [ ' + this._start + '...' + this._end + (1 !== this._step ? ' by ' + this._step : '') + ' ]';
        }, r.prototype.get = function (t, r) {
          return this.has(t) ? this._start + a(this, t) * this._step : r;
        }, r.prototype.includes = function (t) {
          var r = (t - this._start) / this._step;
          return r >= 0 && r < this.size && r === Math.floor(r);
        }, r.prototype.slice = function (t, e) {
          return f(t, e, this.size) ? this : (t = h(t, this.size), (e = _(e, this.size)) <= t ? new r(0, 0) : new r(this.get(t, this._end), this.get(e, this._end), this._step));
        }, r.prototype.indexOf = function (t) {
          var r = t - this._start;
          if (r % this._step == 0) {
            var e = r / this._step;
            if (e >= 0 && e < this.size)
              return e;
          }
          return -1;
        }, r.prototype.lastIndexOf = function (t) {
          return this.indexOf(t);
        }, r.prototype.__iterate = function (t, r) {
          for (var e = this.size, n = this._step, i = r ? this._start + (e - 1) * n : this._start, o = 0; o !== e && !1 !== t(i, r ? e - ++o : o++, this);)
            i += r ? -n : n;
          return o;
        }, r.prototype.__iterator = function (t, r) {
          var e = this.size, n = this._step, i = r ? this._start + (e - 1) * n : this._start, o = 0;
          return new D(function () {
            if (o === e)
              return {
                value: void 0,
                done: !0
              };
            var u = i;
            return i += r ? -n : n, j(t, r ? e - ++o : o++, u);
          });
        }, r.prototype.equals = function (t) {
          return t instanceof r ? this._start === t._start && this._end === t._end && this._step === t._step : _e(this, t);
        }, r;
      }(N);
    function Ie(t, r, e) {
      for (var n = Nt(r), o = 0; o !== n.length;)
        if ((t = Vt(t, n[o++], i)) === i)
          return e;
      return t;
    }
    function be(t, r) {
      return Ie(this, t, r);
    }
    function Ee(t, r) {
      return Ie(t, r, i) !== i;
    }
    function Me() {
      Ct(this.size);
      var t = {};
      return this.__iterate(function (r, e) {
        t[e] = r;
      }), t;
    }
    g.isIterable = v, g.isKeyed = y, g.isIndexed = d, g.isAssociative = w, g.isOrdered = O, g.Iterator = D, pe(g, {
      toArray: function () {
        Ct(this.size);
        var t = new Array(this.size || 0), r = y(this), e = 0;
        return this.__iterate(function (n, i) {
          t[e++] = r ? [
            i,
            n
          ] : n;
        }), t;
      },
      toIndexedSeq: function () {
        return new dt(this);
      },
      toJS: function () {
        return le(this);
      },
      toKeyedSeq: function () {
        return new yt(this, !0);
      },
      toMap: function () {
        return dr(this.toKeyedSeq());
      },
      toObject: Me,
      toOrderedMap: function () {
        return te(this.toKeyedSeq());
      },
      toOrderedSet: function () {
        return Le(y(this) ? this.valueSeq() : this);
      },
      toSet: function () {
        return ve(y(this) ? this.valueSeq() : this);
      },
      toSetSeq: function () {
        return new wt(this);
      },
      toSeq: function () {
        return d(this) ? this.toIndexedSeq() : y(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function () {
        return oe(y(this) ? this.valueSeq() : this);
      },
      toList: function () {
        return Cr(y(this) ? this.valueSeq() : this);
      },
      toString: function () {
        return '[Collection]';
      },
      __toString: function (t, r) {
        return 0 === this.size ? t + r : t + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + r;
      },
      concat: function () {
        for (var t = [], r = arguments.length; r--;)
          t[r] = arguments[r];
        return kt(this, Mt(this, t));
      },
      includes: function (t) {
        return this.some(function (r) {
          return tt(r, t);
        });
      },
      entries: function () {
        return this.__iterator(2);
      },
      every: function (t, r) {
        Ct(this.size);
        var e = !0;
        return this.__iterate(function (n, i, o) {
          if (!t.call(r, n, i, o))
            return e = !1, !1;
        }), e;
      },
      filter: function (t, r) {
        return kt(this, It(this, t, r, !0));
      },
      find: function (t, r, e) {
        var n = this.findEntry(t, r);
        return n ? n[1] : e;
      },
      forEach: function (t, r) {
        return Ct(this.size), this.__iterate(r ? t.bind(r) : t);
      },
      join: function (t) {
        Ct(this.size), t = void 0 !== t ? '' + t : ',';
        var r = '', e = !0;
        return this.__iterate(function (n) {
          e ? e = !1 : r += t, r += null != n ? n.toString() : '';
        }), r;
      },
      keys: function () {
        return this.__iterator(0);
      },
      map: function (t, r) {
        return kt(this, St(this, t, r));
      },
      reduce: function (t, r, e) {
        return De(this, t, r, e, arguments.length < 2, !1);
      },
      reduceRight: function (t, r, e) {
        return De(this, t, r, e, arguments.length < 2, !0);
      },
      reverse: function () {
        return kt(this, zt(this, !0));
      },
      slice: function (t, r) {
        return kt(this, bt(this, t, r, !0));
      },
      some: function (t, r) {
        return !this.every(xe(t), r);
      },
      sort: function (t) {
        return kt(this, At(this, t));
      },
      values: function () {
        return this.__iterator(1);
      },
      butLast: function () {
        return this.slice(0, -1);
      },
      isEmpty: function () {
        return void 0 !== this.size ? 0 === this.size : !this.some(function () {
          return !0;
        });
      },
      count: function (t, r) {
        return s(t ? this.toSeq().filter(t, r) : this);
      },
      countBy: function (t, r) {
        return function (t, r, e) {
          var n = dr().asMutable();
          return t.__iterate(function (i, o) {
            n.update(r.call(e, i, o, t), 0, function (t) {
              return t + 1;
            });
          }), n.asImmutable();
        }(this, t, r);
      },
      equals: function (t) {
        return _e(this, t);
      },
      entrySeq: function () {
        var t = this;
        if (t._cache)
          return new P(t._cache);
        var r = t.toSeq().map(ke).toIndexedSeq();
        return r.fromEntrySeq = function () {
          return t.toSeq();
        }, r;
      },
      filterNot: function (t, r) {
        return this.filter(xe(t), r);
      },
      findEntry: function (t, r, e) {
        var n = e;
        return this.__iterate(function (e, i, o) {
          if (t.call(r, e, i, o))
            return n = [
              i,
              e
            ], !1;
        }), n;
      },
      findKey: function (t, r) {
        var e = this.findEntry(t, r);
        return e && e[0];
      },
      findLast: function (t, r, e) {
        return this.toKeyedSeq().reverse().find(t, r, e);
      },
      findLastEntry: function (t, r, e) {
        return this.toKeyedSeq().reverse().findEntry(t, r, e);
      },
      findLastKey: function (t, r) {
        return this.toKeyedSeq().reverse().findKey(t, r);
      },
      first: function (t) {
        return this.find(c, null, t);
      },
      flatMap: function (t, r) {
        return kt(this, function (t, r, e) {
          var n = Tt(t);
          return t.toSeq().map(function (i, o) {
            return n(r.call(e, i, o, t));
          }).flatten(!0);
        }(this, t, r));
      },
      flatten: function (t) {
        return kt(this, Ot(this, t, !0));
      },
      fromEntrySeq: function () {
        return new gt(this);
      },
      get: function (t, r) {
        return this.find(function (r, e) {
          return tt(e, t);
        }, void 0, r);
      },
      getIn: be,
      groupBy: function (t, r) {
        return function (t, r, e) {
          var n = y(t), i = (O(t) ? te() : dr()).asMutable();
          t.__iterate(function (o, u) {
            i.update(r.call(e, o, u, t), function (t) {
              return (t = t || []).push(n ? [
                u,
                o
              ] : o), t;
            });
          });
          var o = Tt(t);
          return i.map(function (r) {
            return kt(t, o(r));
          }).asImmutable();
        }(this, t, r);
      },
      has: function (t) {
        return this.get(t, i) !== i;
      },
      hasIn: function (t) {
        return Ee(this, t);
      },
      isSubset: function (t) {
        return t = 'function' == typeof t.includes ? t : g(t), this.every(function (r) {
          return t.includes(r);
        });
      },
      isSuperset: function (t) {
        return (t = 'function' == typeof t.isSubset ? t : g(t)).isSubset(this);
      },
      keyOf: function (t) {
        return this.findKey(function (r) {
          return tt(r, t);
        });
      },
      keySeq: function () {
        return this.toSeq().map(je).toIndexedSeq();
      },
      last: function (t) {
        return this.toSeq().reverse().first(t);
      },
      lastKeyOf: function (t) {
        return this.toKeyedSeq().reverse().keyOf(t);
      },
      max: function (t) {
        return qt(this, t);
      },
      maxBy: function (t, r) {
        return qt(this, r, t);
      },
      min: function (t) {
        return qt(this, t ? Te(t) : Be);
      },
      minBy: function (t, r) {
        return qt(this, r ? Te(r) : Be, t);
      },
      rest: function () {
        return this.slice(1);
      },
      skip: function (t) {
        return 0 === t ? this : this.slice(Math.max(0, t));
      },
      skipLast: function (t) {
        return 0 === t ? this : this.slice(0, -Math.max(0, t));
      },
      skipWhile: function (t, r) {
        return kt(this, Et(this, t, r, !0));
      },
      skipUntil: function (t, r) {
        return this.skipWhile(xe(t), r);
      },
      sortBy: function (t, r) {
        return kt(this, At(this, r, t));
      },
      take: function (t) {
        return this.slice(0, Math.max(0, t));
      },
      takeLast: function (t) {
        return this.slice(-Math.max(0, t));
      },
      takeWhile: function (t, r) {
        return kt(this, function (t, r, e) {
          var n = Ut(t);
          return n.__iterateUncached = function (n, i) {
            var o = this;
            if (i)
              return this.cacheResult().__iterate(n, i);
            var u = 0;
            return t.__iterate(function (t, i, s) {
              return r.call(e, t, i, s) && ++u && n(t, i, o);
            }), u;
          }, n.__iteratorUncached = function (n, i) {
            var o = this;
            if (i)
              return this.cacheResult().__iterator(n, i);
            var u = t.__iterator(2, i), s = !0;
            return new D(function () {
              if (!s)
                return {
                  value: void 0,
                  done: !0
                };
              var t = u.next();
              if (t.done)
                return t;
              var i = t.value, a = i[0], c = i[1];
              return r.call(e, c, a, o) ? 2 === n ? t : j(n, a, c, t) : (s = !1, {
                value: void 0,
                done: !0
              });
            });
          }, n;
        }(this, t, r));
      },
      takeUntil: function (t, r) {
        return this.takeWhile(xe(t), r);
      },
      update: function (t) {
        return t(this);
      },
      valueSeq: function () {
        return this.toIndexedSeq();
      },
      hashCode: function () {
        return this.__hash || (this.__hash = function (t) {
          if (t.size === 1 / 0)
            return 0;
          var r = O(t), e = y(t), n = r ? 1 : 0;
          return function (t, r) {
            return r = rt(r, 3432918353), r = rt(r << 15 | r >>> -15, 461845907), r = rt(r << 13 | r >>> -13, 5), r = rt((r = (r + 3864292196 | 0) ^ t) ^ r >>> 16, 2246822507), r = et((r = rt(r ^ r >>> 13, 3266489909)) ^ r >>> 16);
          }(t.__iterate(e ? r ? function (t, r) {
            n = 31 * n + Re(it(t), it(r)) | 0;
          } : function (t, r) {
            n = n + Re(it(t), it(r)) | 0;
          } : r ? function (t) {
            n = 31 * n + it(t) | 0;
          } : function (t) {
            n = n + it(t) | 0;
          }), n);
        }(this));
      }
    });
    var Oe = g.prototype;
    Oe['@@__IMMUTABLE_ITERABLE__@@'] = !0, Oe[q] = Oe.values, Oe.toJSON = Oe.toArray, Oe.__toStringMapper = Ht, Oe.inspect = Oe.toSource = function () {
      return this.toString();
    }, Oe.chain = Oe.flatMap, Oe.contains = Oe.includes, pe(m, {
      flip: function () {
        return kt(this, mt(this));
      },
      mapEntries: function (t, r) {
        var e = this, n = 0;
        return kt(this, this.toSeq().map(function (i, o) {
          return t.call(r, [
            o,
            i
          ], n++, e);
        }).fromEntrySeq());
      },
      mapKeys: function (t, r) {
        var e = this;
        return kt(this, this.toSeq().flip().map(function (n, i) {
          return t.call(r, n, i, e);
        }).flip());
      }
    });
    var Ae = m.prototype;
    Ae['@@__IMMUTABLE_KEYED__@@'] = !0, Ae[q] = Oe.entries, Ae.toJSON = Me, Ae.__toStringMapper = function (t, r) {
      return Ht(r) + ': ' + Ht(t);
    }, pe(S, {
      toKeyedSeq: function () {
        return new yt(this, !1);
      },
      filter: function (t, r) {
        return kt(this, It(this, t, r, !1));
      },
      findIndex: function (t, r) {
        var e = this.findEntry(t, r);
        return e ? e[0] : -1;
      },
      indexOf: function (t) {
        var r = this.keyOf(t);
        return void 0 === r ? -1 : r;
      },
      lastIndexOf: function (t) {
        var r = this.lastKeyOf(t);
        return void 0 === r ? -1 : r;
      },
      reverse: function () {
        return kt(this, zt(this, !1));
      },
      slice: function (t, r) {
        return kt(this, bt(this, t, r, !1));
      },
      splice: function (t, r) {
        var e = arguments.length;
        if (r = Math.max(r || 0, 0), 0 === e || 2 === e && !r)
          return this;
        t = h(t, t < 0 ? this.count() : this.size);
        var n = this.slice(0, t);
        return kt(this, 1 === e ? n : n.concat(Lt(arguments, 2), this.slice(t + r)));
      },
      findLastIndex: function (t, r) {
        var e = this.findLastEntry(t, r);
        return e ? e[0] : -1;
      },
      first: function (t) {
        return this.get(0, t);
      },
      flatten: function (t) {
        return kt(this, Ot(this, t, !1));
      },
      get: function (t, r) {
        return (t = a(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? r : this.find(function (r, e) {
          return e === t;
        }, void 0, r);
      },
      has: function (t) {
        return (t = a(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
      },
      interpose: function (t) {
        return kt(this, function (t, r) {
          var e = Ut(t);
          return e.size = t.size && 2 * t.size - 1, e.__iterateUncached = function (e, n) {
            var i = this, o = 0;
            return t.__iterate(function (t) {
              return (!o || !1 !== e(r, o++, i)) && !1 !== e(t, o++, i);
            }, n), o;
          }, e.__iteratorUncached = function (e, n) {
            var i, o = t.__iterator(1, n), u = 0;
            return new D(function () {
              return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? j(e, u++, r) : j(e, u++, i.value, i);
            });
          }, e;
        }(this, t));
      },
      interleave: function () {
        var t = [this].concat(Lt(arguments)), r = jt(this.toSeq(), N.of, t), e = r.flatten(!0);
        return r.size && (e.size = r.size * t.length), kt(this, e);
      },
      keySeq: function () {
        return ze(0, this.size);
      },
      last: function (t) {
        return this.get(-1, t);
      },
      skipWhile: function (t, r) {
        return kt(this, Et(this, t, r, !1));
      },
      zip: function () {
        var t = [this].concat(Lt(arguments));
        return kt(this, jt(this, Ue, t));
      },
      zipAll: function () {
        var t = [this].concat(Lt(arguments));
        return kt(this, jt(this, Ue, t, !0));
      },
      zipWith: function (t) {
        var r = Lt(arguments);
        return r[0] = this, kt(this, jt(this, t, r));
      }
    });
    var qe = S.prototype;
    function De(t, r, e, n, i, o) {
      return Ct(t.size), t.__iterate(function (t, o, u) {
        i ? (i = !1, e = t) : e = r.call(n, e, t, o, u);
      }, o), e;
    }
    function je(t, r) {
      return r;
    }
    function ke(t, r) {
      return [
        r,
        t
      ];
    }
    function xe(t) {
      return function () {
        return !t.apply(this, arguments);
      };
    }
    function Te(t) {
      return function () {
        return -t.apply(this, arguments);
      };
    }
    function Ue() {
      return Lt(arguments);
    }
    function Be(t, r) {
      return t < r ? 1 : t > r ? -1 : 0;
    }
    function Re(t, r) {
      return t ^ r + 2654435769 + (t << 6) + (t >> 2) | 0;
    }
    qe['@@__IMMUTABLE_INDEXED__@@'] = !0, qe[M] = !0, pe(z, {
      get: function (t, r) {
        return this.has(t) ? t : r;
      },
      includes: function (t) {
        return this.has(t);
      },
      keySeq: function () {
        return this.valueSeq();
      }
    }), z.prototype.has = Oe.includes, z.prototype.contains = z.prototype.includes, pe(C, m.prototype), pe(N, S.prototype), pe(W, z.prototype);
    var Le = function (t) {
      function r(t) {
        return null == t ? We() : he(t) ? t : We().withMutations(function (r) {
          var e = z(t);
          Ct(e.size), e.forEach(function (t) {
            return r.add(t);
          });
        });
      }
      return t && (r.__proto__ = t), r.prototype = Object.create(t && t.prototype), r.prototype.constructor = r, r.of = function () {
        return this(arguments);
      }, r.fromKeys = function (t) {
        return this(m(t).keySeq());
      }, r.prototype.toString = function () {
        return this.__toString('OrderedSet {', '}');
      }, r;
    }(ve);
    Le.isOrderedSet = he;
    var Ke, Ce = Le.prototype;
    function Ne(t, r) {
      var e = Object.create(Ce);
      return e.size = t ? t.size : 0, e._map = t, e.__ownerID = r, e;
    }
    function We() {
      return Ke || (Ke = Ne(ee()));
    }
    Ce[M] = !0, Ce.zip = qe.zip, Ce.zipWith = qe.zipWith, Ce.__empty = We, Ce.__make = Ne;
    var Pe = function (t, r) {
      var e, i = function (u) {
          var s = this;
          if (u instanceof i)
            return u;
          if (!(this instanceof i))
            return new i(u);
          if (!e) {
            e = !0;
            var a = Object.keys(t), c = o._indices = {};
            o._name = r, o._keys = a, o._defaultValues = t;
            for (var f = 0; f < a.length; f++) {
              var h = a[f];
              c[h] = f, o[h] ? 'object' === ('undefined' == typeof console ? 'undefined' : n(console)) && console.warn && console.warn('Cannot define ' + Ve(this) + ' with property "' + h + '" since that property name is part of the Record API.') : Ye(o, h);
            }
          }
          this.__ownerID = void 0, this._values = Cr().withMutations(function (t) {
            t.setSize(s._keys.length), m(u).forEach(function (r, e) {
              t.set(s._indices[e], r === s._defaultValues[e] ? void 0 : r);
            });
          });
        }, o = i.prototype = Object.create(He);
      return o.constructor = i, r && (i.displayName = r), i;
    };
    Pe.prototype.toString = function () {
      for (var t, r = Ve(this) + ' { ', e = this._keys, n = 0, i = e.length; n !== i; n++)
        r += (n ? ', ' : '') + (t = e[n]) + ': ' + Ht(this.get(t));
      return r + ' }';
    }, Pe.prototype.equals = function (t) {
      return this === t || t && this._keys === t._keys && Qe(this).equals(Qe(t));
    }, Pe.prototype.hashCode = function () {
      return Qe(this).hashCode();
    }, Pe.prototype.has = function (t) {
      return this._indices.hasOwnProperty(t);
    }, Pe.prototype.get = function (t, r) {
      if (!this.has(t))
        return r;
      var e = this._indices[t], n = this._values.get(e);
      return void 0 === n ? this._defaultValues[t] : n;
    }, Pe.prototype.set = function (t, r) {
      if (this.has(t)) {
        var e = this._values.set(this._indices[t], r === this._defaultValues[t] ? void 0 : r);
        if (e !== this._values && !this.__ownerID)
          return Je(this, e);
      }
      return this;
    }, Pe.prototype.remove = function (t) {
      return this.set(t);
    }, Pe.prototype.clear = function () {
      var t = this._values.clear().setSize(this._keys.length);
      return this.__ownerID ? this : Je(this, t);
    }, Pe.prototype.wasAltered = function () {
      return this._values.wasAltered();
    }, Pe.prototype.toSeq = function () {
      return Qe(this);
    }, Pe.prototype.toJS = function () {
      return le(this);
    }, Pe.prototype.entries = function () {
      return this.__iterator(2);
    }, Pe.prototype.__iterator = function (t, r) {
      return Qe(this).__iterator(t, r);
    }, Pe.prototype.__iterate = function (t, r) {
      return Qe(this).__iterate(t, r);
    }, Pe.prototype.__ensureOwner = function (t) {
      if (t === this.__ownerID)
        return this;
      var r = this._values.__ensureOwner(t);
      return t ? Je(this, r, t) : (this.__ownerID = t, this._values = r, this);
    }, Pe.isRecord = b, Pe.getDescriptiveName = Ve;
    var He = Pe.prototype;
    function Je(t, r, e) {
      var n = Object.create(Object.getPrototypeOf(t));
      return n._values = r, n.__ownerID = e, n;
    }
    function Ve(t) {
      return t.constructor.displayName || t.constructor.name || 'Record';
    }
    function Qe(t) {
      return Y(t._keys.map(function (r) {
        return [
          r,
          t.get(r)
        ];
      }));
    }
    function Ye(t, r) {
      try {
        Object.defineProperty(t, r, {
          get: function () {
            return this.get(r);
          },
          set: function (t) {
            Kt(this.__ownerID, 'Cannot set on an immutable record.'), this.set(r, t);
          }
        });
      } catch (t) {
      }
    }
    function Xe(t, r) {
      return function t(r, e, n, i, o, u) {
        var s = Array.isArray(n) ? N : Wt(n) ? C : null;
        if (s) {
          if (~r.indexOf(n))
            throw new TypeError('Cannot convert circular structure to Immutable');
          r.push(n), o && '' !== i && o.push(i);
          var a = e.call(u, i, s(n).map(function (i, u) {
            return t(r, e, i, u, o, n);
          }), o && o.slice());
          return r.pop(), o && o.pop(), a;
        }
        return n;
      }([], r || Fe, t, '', r && r.length > 2 ? [] : void 0, { '': t });
    }
    function Fe(t, r) {
      return y(r) ? r.toMap() : r.toList();
    }
    He['@@__IMMUTABLE_RECORD__@@'] = !0, He.delete = He.remove, He.deleteIn = He.removeIn = tr, He.getIn = be, He.hasIn = Oe.hasIn, He.merge = ir, He.mergeWith = or, He.mergeIn = hr, He.mergeDeep = cr, He.mergeDeepWith = fr, He.mergeDeepIn = _r, He.setIn = Zt, He.update = er, He.updateIn = nr, He.withMutations = pr, He.asMutable = lr, He.asImmutable = vr, He[q] = He.entries, He.toJSON = He.toObject = Oe.toObject, He.inspect = He.toSource = function () {
      return this.toString();
    };
  },
  QLaP: function (t, r, e) {
    'use strict';
    t.exports = function (t, r, e, n, i, o, u, s) {
      if (!t) {
        var a;
        if (void 0 === r)
          a = new Error('Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.');
        else {
          var c = [
              e,
              n,
              i,
              o,
              u,
              s
            ], f = 0;
          (a = new Error(r.replace(/%s/g, function () {
            return c[f++];
          }))).name = 'Invariant Violation';
        }
        throw a.framesToPop = 1, a;
      }
    };
  }
}]);