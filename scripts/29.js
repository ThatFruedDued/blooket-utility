(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{
  BFiH: function (e, t, n) {
    'use strict';
    (function (r) {
      function i(e) {
        return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = n('wj3C'), s = n('mrSG'), a = n('88ZB'), h = n('q/0M'), u = n('kOjh');
      function l(e) {
        return e && 'object' === i(e) && 'default' in e ? e : { default: e };
      }
      var c, p = l(o), d = function () {
          function e(e) {
            this.domStorage_ = e, this.prefix_ = 'firebase:';
          }
          return e.prototype.set = function (e, t) {
            null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), a.stringify(t));
          }, e.prototype.get = function (e) {
            var t = this.domStorage_.getItem(this.prefixedName_(e));
            return null == t ? null : a.jsonEval(t);
          }, e.prototype.remove = function (e) {
            this.domStorage_.removeItem(this.prefixedName_(e));
          }, e.prototype.prefixedName_ = function (e) {
            return this.prefix_ + e;
          }, e.prototype.toString = function () {
            return this.domStorage_.toString();
          }, e;
        }(), f = function () {
          function e() {
            this.cache_ = {}, this.isInMemoryStorage = !0;
          }
          return e.prototype.set = function (e, t) {
            null == t ? delete this.cache_[e] : this.cache_[e] = t;
          }, e.prototype.get = function (e) {
            return a.contains(this.cache_, e) ? this.cache_[e] : null;
          }, e.prototype.remove = function (e) {
            delete this.cache_[e];
          }, e;
        }(), _ = function (e) {
          try {
            if ('undefined' != typeof window && void 0 !== window[e]) {
              var t = window[e];
              return t.setItem('firebase:sentinel', 'cache'), t.removeItem('firebase:sentinel'), new d(t);
            }
          } catch (e) {
          }
          return new f();
        }, y = _('localStorage'), v = _('sessionStorage'), g = new h.Logger('@firebase/database'), m = (c = 1, function () {
          return c++;
        }), C = function (e) {
          var t = a.stringToByteArray(e), n = new a.Sha1();
          n.update(t);
          var r = n.digest();
          return a.base64.encodeByteArray(r);
        }, E = function e() {
          for (var t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          for (var r = '', o = 0; o < t.length; o++) {
            var s = t[o];
            Array.isArray(s) || s && 'object' === i(s) && 'number' == typeof s.length ? r += e.apply(null, s) : 'object' === i(s) ? r += a.stringify(s) : r += s, r += ' ';
          }
          return r;
        }, w = null, T = !0, b = function (e, t) {
          a.assert(!t || !0 === e || !1 === e, 'Can\'t turn on custom loggers persistently.'), !0 === e ? (g.logLevel = h.LogLevel.VERBOSE, w = g.log.bind(g), t && v.set('logging_enabled', !0)) : 'function' == typeof e ? w = e : (w = null, v.remove('logging_enabled'));
        }, S = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          if (!0 === T && (T = !1, null === w && !0 === v.get('logging_enabled') && b(!0)), w) {
            var n = E.apply(null, e);
            w(n);
          }
        }, I = function (e) {
          return function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            S.apply(void 0, s.__spread([e], t));
          };
        }, N = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = 'FIREBASE INTERNAL ERROR: ' + E.apply(void 0, s.__spread(e));
          g.error(n);
        }, P = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = 'FIREBASE FATAL ERROR: ' + E.apply(void 0, s.__spread(e));
          throw g.error(n), new Error(n);
        }, R = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          var n = 'FIREBASE WARNING: ' + E.apply(void 0, s.__spread(e));
          g.warn(n);
        }, D = function (e) {
          return 'number' == typeof e && (e != e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY);
        }, x = '[MIN_NAME]', k = '[MAX_NAME]', O = function (e, t) {
          if (e === t)
            return 0;
          if (e === x || t === k)
            return -1;
          if (t === x || e === k)
            return 1;
          var n = U(e), r = U(t);
          return null !== n ? null !== r ? n - r == 0 ? e.length - t.length : n - r : -1 : null !== r ? 1 : e < t ? -1 : 1;
        }, F = function (e, t) {
          return e === t ? 0 : e < t ? -1 : 1;
        }, A = function (e, t) {
          if (t && e in t)
            return t[e];
          throw new Error('Missing required key (' + e + ') in object: ' + a.stringify(t));
        }, L = function e(t) {
          if ('object' !== i(t) || null === t)
            return a.stringify(t);
          var n = [];
          for (var r in t)
            n.push(r);
          n.sort();
          for (var o = '{', s = 0; s < n.length; s++)
            0 !== s && (o += ','), o += a.stringify(n[s]), o += ':', o += e(t[n[s]]);
          return o += '}';
        }, M = function (e, t) {
          var n = e.length;
          if (n <= t)
            return [e];
          for (var r = [], i = 0; i < n; i += t)
            i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
          return r;
        };
      function W(e, t) {
        for (var n in e)
          e.hasOwnProperty(n) && t(n, e[n]);
      }
      var Q = function (e) {
          a.assert(!D(e), 'Invalid JSON number');
          var t, n, r, i, o;
          0 === e ? (n = 0, r = 0, t = 1 / e == -1 / 0 ? 1 : 0) : (t = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, r = Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -1074))));
          var s = [];
          for (o = 52; o; o -= 1)
            s.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
          for (o = 11; o; o -= 1)
            s.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
          s.push(t ? 1 : 0), s.reverse();
          var h = s.join(''), u = '';
          for (o = 0; o < 64; o += 8) {
            var l = parseInt(h.substr(o, 8), 2).toString(16);
            1 === l.length && (l = '0' + l), u += l;
          }
          return u.toLowerCase();
        }, q = new RegExp('^-?(0*)\\d{1,10}$'), U = function (e) {
          if (q.test(e)) {
            var t = Number(e);
            if (t >= -2147483648 && t <= 2147483647)
              return t;
          }
          return null;
        }, V = function (e) {
          try {
            e();
          } catch (e) {
            setTimeout(function () {
              var t = e.stack || '';
              throw R('Exception was thrown by user callback.', t), e;
            }, Math.floor(0));
          }
        }, H = function (e, t) {
          var n = setTimeout(e, t);
          return 'object' === i(n) && n.unref && n.unref(), n;
        }, j = function () {
          function e(e, t) {
            if (void 0 === t) {
              this.pieces_ = e.split('/');
              for (var n = 0, r = 0; r < this.pieces_.length; r++)
                this.pieces_[r].length > 0 && (this.pieces_[n] = this.pieces_[r], n++);
              this.pieces_.length = n, this.pieceNum_ = 0;
            } else
              this.pieces_ = e, this.pieceNum_ = t;
          }
          return Object.defineProperty(e, 'Empty', {
            get: function () {
              return new e('');
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getFront = function () {
            return this.pieceNum_ >= this.pieces_.length ? null : this.pieces_[this.pieceNum_];
          }, e.prototype.getLength = function () {
            return this.pieces_.length - this.pieceNum_;
          }, e.prototype.popFront = function () {
            var t = this.pieceNum_;
            return t < this.pieces_.length && t++, new e(this.pieces_, t);
          }, e.prototype.getBack = function () {
            return this.pieceNum_ < this.pieces_.length ? this.pieces_[this.pieces_.length - 1] : null;
          }, e.prototype.toString = function () {
            for (var e = '', t = this.pieceNum_; t < this.pieces_.length; t++)
              '' !== this.pieces_[t] && (e += '/' + this.pieces_[t]);
            return e || '/';
          }, e.prototype.toUrlEncodedString = function () {
            for (var e = '', t = this.pieceNum_; t < this.pieces_.length; t++)
              '' !== this.pieces_[t] && (e += '/' + encodeURIComponent(String(this.pieces_[t])));
            return e || '/';
          }, e.prototype.slice = function (e) {
            return void 0 === e && (e = 0), this.pieces_.slice(this.pieceNum_ + e);
          }, e.prototype.parent = function () {
            if (this.pieceNum_ >= this.pieces_.length)
              return null;
            for (var t = [], n = this.pieceNum_; n < this.pieces_.length - 1; n++)
              t.push(this.pieces_[n]);
            return new e(t, 0);
          }, e.prototype.child = function (t) {
            for (var n = [], r = this.pieceNum_; r < this.pieces_.length; r++)
              n.push(this.pieces_[r]);
            if (t instanceof e)
              for (r = t.pieceNum_; r < t.pieces_.length; r++)
                n.push(t.pieces_[r]);
            else {
              var i = t.split('/');
              for (r = 0; r < i.length; r++)
                i[r].length > 0 && n.push(i[r]);
            }
            return new e(n, 0);
          }, e.prototype.isEmpty = function () {
            return this.pieceNum_ >= this.pieces_.length;
          }, e.relativePath = function (t, n) {
            var r = t.getFront(), i = n.getFront();
            if (null === r)
              return n;
            if (r === i)
              return e.relativePath(t.popFront(), n.popFront());
            throw new Error('INTERNAL ERROR: innerPath (' + n + ') is not within outerPath (' + t + ')');
          }, e.comparePaths = function (e, t) {
            for (var n = e.slice(), r = t.slice(), i = 0; i < n.length && i < r.length; i++) {
              var o = O(n[i], r[i]);
              if (0 !== o)
                return o;
            }
            return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
          }, e.prototype.equals = function (e) {
            if (this.getLength() !== e.getLength())
              return !1;
            for (var t = this.pieceNum_, n = e.pieceNum_; t <= this.pieces_.length; t++, n++)
              if (this.pieces_[t] !== e.pieces_[n])
                return !1;
            return !0;
          }, e.prototype.contains = function (e) {
            var t = this.pieceNum_, n = e.pieceNum_;
            if (this.getLength() > e.getLength())
              return !1;
            for (; t < this.pieces_.length;) {
              if (this.pieces_[t] !== e.pieces_[n])
                return !1;
              ++t, ++n;
            }
            return !0;
          }, e;
        }(), B = function () {
          function e(e, t) {
            this.errorPrefix_ = t, this.parts_ = e.slice(), this.byteLength_ = Math.max(1, this.parts_.length);
            for (var n = 0; n < this.parts_.length; n++)
              this.byteLength_ += a.stringLength(this.parts_[n]);
            this.checkValid_();
          }
          return Object.defineProperty(e, 'MAX_PATH_DEPTH', {
            get: function () {
              return 32;
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e, 'MAX_PATH_LENGTH_BYTES', {
            get: function () {
              return 768;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.push = function (e) {
            this.parts_.length > 0 && (this.byteLength_ += 1), this.parts_.push(e), this.byteLength_ += a.stringLength(e), this.checkValid_();
          }, e.prototype.pop = function () {
            var e = this.parts_.pop();
            this.byteLength_ -= a.stringLength(e), this.parts_.length > 0 && (this.byteLength_ -= 1);
          }, e.prototype.checkValid_ = function () {
            if (this.byteLength_ > e.MAX_PATH_LENGTH_BYTES)
              throw new Error(this.errorPrefix_ + 'has a key path longer than ' + e.MAX_PATH_LENGTH_BYTES + ' bytes (' + this.byteLength_ + ').');
            if (this.parts_.length > e.MAX_PATH_DEPTH)
              throw new Error(this.errorPrefix_ + 'path specified exceeds the maximum depth that can be written (' + e.MAX_PATH_DEPTH + ') or object contains a cycle ' + this.toErrorString());
          }, e.prototype.toErrorString = function () {
            return 0 === this.parts_.length ? '' : 'in property \'' + this.parts_.join('.') + '\'';
          }, e;
        }(), K = function () {
          function e(e, t, n, r, i, o, s) {
            void 0 === i && (i = !1), void 0 === o && (o = ''), void 0 === s && (s = !1), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = i, this.persistenceKey = o, this.includeNamespaceInQueryParams = s, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf('.') + 1), this.internalHost = y.get('host:' + e) || this.host;
          }
          return e.prototype.needsQueryParam = function () {
            return this.host !== this.internalHost || this.isCustomHost() || this.includeNamespaceInQueryParams;
          }, e.prototype.isCacheableHost = function () {
            return 's-' === this.internalHost.substr(0, 2);
          }, e.prototype.isDemoHost = function () {
            return 'firebaseio-demo.com' === this.domain;
          }, e.prototype.isCustomHost = function () {
            return 'firebaseio.com' !== this.domain && 'firebaseio-demo.com' !== this.domain;
          }, e.prototype.updateHost = function (e) {
            e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && y.set('host:' + this.host, this.internalHost));
          }, e.prototype.connectionURL = function (e, t) {
            var n;
            if (a.assert('string' == typeof e, 'typeof type must == string'), a.assert('object' === i(t), 'typeof params must == object'), 'websocket' === e)
              n = (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
            else {
              if ('long_polling' !== e)
                throw new Error('Unknown connection type: ' + e);
              n = (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
            }
            this.needsQueryParam() && (t.ns = this.namespace);
            var r = [];
            return W(t, function (e, t) {
              r.push(e + '=' + t);
            }), n + r.join('&');
          }, e.prototype.toString = function () {
            var e = this.toURLString();
            return this.persistenceKey && (e += '<' + this.persistenceKey + '>'), e;
          }, e.prototype.toURLString = function () {
            return (this.secure ? 'https://' : 'http://') + this.host;
          }, e;
        }();
      var Y, z, G, X, $, J = function (e, t) {
          var n = Z(e), r = n.namespace;
          'firebase.com' === n.domain && P(n.host + ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'), r && 'undefined' !== r || 'localhost' === n.domain || P('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'), n.secure || 'undefined' != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf('https:') && R('Insecure Firebase access from a secure page. Please use https in calls to new Firebase().');
          var i = 'ws' === n.scheme || 'wss' === n.scheme;
          return {
            repoInfo: new K(n.host, n.secure, r, t, i, '', r !== n.subdomain),
            path: new j(n.pathString)
          };
        }, Z = function (e) {
          var t = '', n = '', r = '', i = '', o = '', a = !0, h = 'https', u = 443;
          if ('string' == typeof e) {
            var l = e.indexOf('//');
            l >= 0 && (h = e.substring(0, l - 1), e = e.substring(l + 2));
            var c = e.indexOf('/');
            -1 === c && (c = e.length);
            var p = e.indexOf('?');
            -1 === p && (p = e.length), t = e.substring(0, Math.min(c, p)), c < p && (i = function (e) {
              for (var t = '', n = e.split('/'), r = 0; r < n.length; r++)
                if (n[r].length > 0) {
                  var i = n[r];
                  try {
                    i = decodeURIComponent(i.replace(/\+/g, ' '));
                  } catch (e) {
                  }
                  t += '/' + i;
                }
              return t;
            }(e.substring(c, p)));
            var d = function (e) {
              var t, n, r = {};
              '?' === e.charAt(0) && (e = e.substring(1));
              try {
                for (var i = s.__values(e.split('&')), o = i.next(); !o.done; o = i.next()) {
                  var a = o.value;
                  if (0 !== a.length) {
                    var h = a.split('=');
                    2 === h.length ? r[decodeURIComponent(h[0])] = decodeURIComponent(h[1]) : R('Invalid query segment \'' + a + '\' in query \'' + e + '\'');
                  }
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (t)
                    throw t.error;
                }
              }
              return r;
            }(e.substring(Math.min(e.length, p)));
            (l = t.indexOf(':')) >= 0 ? (a = 'https' === h || 'wss' === h, u = parseInt(t.substring(l + 1), 10)) : l = t.length;
            var f = t.slice(0, l);
            if ('localhost' === f.toLowerCase())
              n = 'localhost';
            else if (f.split('.').length <= 2)
              n = f;
            else {
              var _ = t.indexOf('.');
              r = t.substring(0, _).toLowerCase(), n = t.substring(_ + 1), o = r;
            }
            'ns' in d && (o = d.ns);
          }
          return {
            host: t,
            port: u,
            domain: n,
            subdomain: r,
            secure: a,
            scheme: h,
            pathString: i,
            namespace: o
          };
        }, ee = /[\[\].#$\/\u0000-\u001F\u007F]/, te = /[\[\].#$\u0000-\u001F\u007F]/, ne = function (e) {
          return 'string' == typeof e && 0 !== e.length && !ee.test(e);
        }, re = function (e) {
          return 'string' == typeof e && 0 !== e.length && !te.test(e);
        }, ie = function (e) {
          return null === e || 'string' == typeof e || 'number' == typeof e && !D(e) || e && 'object' === i(e) && a.contains(e, '.sv');
        }, oe = function (e, t, n, r, i) {
          i && void 0 === n || se(a.errorPrefix(e, t, i), n, r);
        }, se = function e(t, n, r) {
          var o = r instanceof j ? new B(r, t) : r;
          if (void 0 === n)
            throw new Error(t + 'contains undefined ' + o.toErrorString());
          if ('function' == typeof n)
            throw new Error(t + 'contains a function ' + o.toErrorString() + ' with contents = ' + n.toString());
          if (D(n))
            throw new Error(t + 'contains ' + n.toString() + ' ' + o.toErrorString());
          if ('string' == typeof n && n.length > 10485760 / 3 && a.stringLength(n) > 10485760)
            throw new Error(t + 'contains a string greater than 10485760 utf8 bytes ' + o.toErrorString() + ' (\'' + n.substring(0, 50) + '...\')');
          if (n && 'object' === i(n)) {
            var s = !1, h = !1;
            if (W(n, function (n, r) {
                if ('.value' === n)
                  s = !0;
                else if ('.priority' !== n && '.sv' !== n && (h = !0, !ne(n)))
                  throw new Error(t + ' contains an invalid key (' + n + ') ' + o.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                o.push(n), e(t, r, o), o.pop();
              }), s && h)
              throw new Error(t + ' contains ".value" child ' + o.toErrorString() + ' in addition to actual children.');
          }
        }, ae = function (e, t, n, r, o) {
          if (!o || void 0 !== n) {
            var s = a.errorPrefix(e, t, o);
            if (!n || 'object' !== i(n) || Array.isArray(n))
              throw new Error(s + ' must be an object containing the children to replace.');
            var h = [];
            W(n, function (e, t) {
              var n = new j(e);
              if (se(s, t, r.child(n)), '.priority' === n.getBack() && !ie(t))
                throw new Error(s + 'contains an invalid value for \'' + n.toString() + '\', which must be a valid Firebase priority (a string, finite number, server value, or null).');
              h.push(n);
            }), function (e, t) {
              var n, r;
              for (n = 0; n < t.length; n++)
                for (var i = (r = t[n]).slice(), o = 0; o < i.length; o++)
                  if ('.priority' === i[o] && o === i.length - 1);
                  else if (!ne(i[o]))
                    throw new Error(e + 'contains an invalid key (' + i[o] + ') in path ' + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
              t.sort(j.comparePaths);
              var s = null;
              for (n = 0; n < t.length; n++) {
                if (r = t[n], null !== s && s.contains(r))
                  throw new Error(e + 'contains a path ' + s.toString() + ' that is ancestor of another path ' + r.toString());
                s = r;
              }
            }(s, h);
          }
        }, he = function (e, t, n, r) {
          if (!r || void 0 !== n) {
            if (D(n))
              throw new Error(a.errorPrefix(e, t, r) + 'is ' + n.toString() + ', but must be a valid Firebase priority (a string, finite number, server value, or null).');
            if (!ie(n))
              throw new Error(a.errorPrefix(e, t, r) + 'must be a valid Firebase priority (a string, finite number, server value, or null).');
          }
        }, ue = function (e, t, n, r) {
          if (!r || void 0 !== n)
            switch (n) {
            case 'value':
            case 'child_added':
            case 'child_removed':
            case 'child_changed':
            case 'child_moved':
              break;
            default:
              throw new Error(a.errorPrefix(e, t, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
            }
        }, le = function (e, t, n, r) {
          if (!(r && void 0 === n || ne(n)))
            throw new Error(a.errorPrefix(e, t, r) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
        }, ce = function (e, t, n, r) {
          if (!(r && void 0 === n || re(n)))
            throw new Error(a.errorPrefix(e, t, r) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
        }, pe = function (e, t, n, r) {
          n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), ce(e, t, n, r);
        }, de = function (e, t) {
          if ('.info' === t.getFront())
            throw new Error(e + ' failed = Can\'t modify data under /.info/');
        }, fe = function (e, t, n) {
          var r = n.path.toString();
          if ('string' != typeof n.repoInfo.host || 0 === n.repoInfo.host.length || !ne(n.repoInfo.namespace) && 'localhost' !== n.repoInfo.host.split(':')[0] || 0 !== r.length && !function (e) {
              return e && (e = e.replace(/^\/*\.info(\/|$)/, '/')), re(e);
            }(r))
            throw new Error(a.errorPrefix(e, t, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
        }, _e = function (e, t, n, r) {
          if ((!r || void 0 !== n) && 'boolean' != typeof n)
            throw new Error(a.errorPrefix(e, t, r) + 'must be a boolean.');
        }, ye = function () {
          function e(e, t) {
            this.repo_ = e, this.path_ = t;
          }
          return e.prototype.cancel = function (e) {
            a.validateArgCount('OnDisconnect.cancel', 0, 1, arguments.length), a.validateCallback('OnDisconnect.cancel', 1, e, !0);
            var t = new a.Deferred();
            return this.repo_.onDisconnectCancel(this.path_, t.wrapCallback(e)), t.promise;
          }, e.prototype.remove = function (e) {
            a.validateArgCount('OnDisconnect.remove', 0, 1, arguments.length), de('OnDisconnect.remove', this.path_), a.validateCallback('OnDisconnect.remove', 1, e, !0);
            var t = new a.Deferred();
            return this.repo_.onDisconnectSet(this.path_, null, t.wrapCallback(e)), t.promise;
          }, e.prototype.set = function (e, t) {
            a.validateArgCount('OnDisconnect.set', 1, 2, arguments.length), de('OnDisconnect.set', this.path_), oe('OnDisconnect.set', 1, e, this.path_, !1), a.validateCallback('OnDisconnect.set', 2, t, !0);
            var n = new a.Deferred();
            return this.repo_.onDisconnectSet(this.path_, e, n.wrapCallback(t)), n.promise;
          }, e.prototype.setWithPriority = function (e, t, n) {
            a.validateArgCount('OnDisconnect.setWithPriority', 2, 3, arguments.length), de('OnDisconnect.setWithPriority', this.path_), oe('OnDisconnect.setWithPriority', 1, e, this.path_, !1), he('OnDisconnect.setWithPriority', 2, t, !1), a.validateCallback('OnDisconnect.setWithPriority', 3, n, !0);
            var r = new a.Deferred();
            return this.repo_.onDisconnectSetWithPriority(this.path_, e, t, r.wrapCallback(n)), r.promise;
          }, e.prototype.update = function (e, t) {
            if (a.validateArgCount('OnDisconnect.update', 1, 2, arguments.length), de('OnDisconnect.update', this.path_), Array.isArray(e)) {
              for (var n = {}, r = 0; r < e.length; ++r)
                n['' + r] = e[r];
              e = n, R('Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.');
            }
            ae('OnDisconnect.update', 1, e, this.path_, !1), a.validateCallback('OnDisconnect.update', 2, t, !0);
            var i = new a.Deferred();
            return this.repo_.onDisconnectUpdate(this.path_, e, i.wrapCallback(t)), i.promise;
          }, e;
        }(), ve = function () {
          function e(e, t) {
            this.committed = e, this.snapshot = t;
          }
          return e.prototype.toJSON = function () {
            return a.validateArgCount('TransactionResult.toJSON', 0, 1, arguments.length), {
              committed: this.committed,
              snapshot: this.snapshot.toJSON()
            };
          }, e;
        }(), ge = (Y = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz', z = 0, G = [], function (e) {
          var t, n = e === z;
          z = e;
          var r = new Array(8);
          for (t = 7; t >= 0; t--)
            r[t] = Y.charAt(e % 64), e = Math.floor(e / 64);
          a.assert(0 === e, 'Cannot push at time == 0');
          var i = r.join('');
          if (n) {
            for (t = 11; t >= 0 && 63 === G[t]; t--)
              G[t] = 0;
            G[t]++;
          } else
            for (t = 0; t < 12; t++)
              G[t] = Math.floor(64 * Math.random());
          for (t = 0; t < 12; t++)
            i += Y.charAt(G[t]);
          return a.assert(20 === i.length, 'nextPushId: Length should be 20.'), i;
        }), me = function () {
          function e(e, t) {
            this.name = e, this.node = t;
          }
          return e.Wrap = function (t, n) {
            return new e(t, n);
          }, e;
        }(), Ce = function () {
          function e() {
          }
          return e.prototype.getCompare = function () {
            return this.compare.bind(this);
          }, e.prototype.indexedValueChanged = function (e, t) {
            var n = new me(x, e), r = new me(x, t);
            return 0 !== this.compare(n, r);
          }, e.prototype.minPost = function () {
            return me.MIN;
          }, e;
        }(), Ee = function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return s.__extends(t, e), Object.defineProperty(t, '__EMPTY_NODE', {
            get: function () {
              return X;
            },
            set: function (e) {
              X = e;
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.compare = function (e, t) {
            return O(e.name, t.name);
          }, t.prototype.isDefinedOn = function (e) {
            throw a.assertionError('KeyIndex.isDefinedOn not expected to be called.');
          }, t.prototype.indexedValueChanged = function (e, t) {
            return !1;
          }, t.prototype.minPost = function () {
            return me.MIN;
          }, t.prototype.maxPost = function () {
            return new me(k, X);
          }, t.prototype.makePost = function (e, t) {
            return a.assert('string' == typeof e, 'KeyIndex indexValue must always be a string.'), new me(e, X);
          }, t.prototype.toString = function () {
            return '.key';
          }, t;
        }(Ce), we = new Ee();
      var Te, be, Se, Ie = function (e) {
          return 'number' == typeof e ? 'number:' + Q(e) : 'string:' + e;
        }, Ne = function (e) {
          if (e.isLeafNode()) {
            var t = e.val();
            a.assert('string' == typeof t || 'number' == typeof t || 'object' === i(t) && a.contains(t, '.sv'), 'Priority must be a string or number.');
          } else
            a.assert(e === $ || e.isEmpty(), 'priority of unexpected type.');
          a.assert(e === $ || e.getPriority().isEmpty(), 'Priority nodes can\'t have a priority of their own.');
        }, Pe = function () {
          function e(t, n) {
            void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.value_ = t, this.priorityNode_ = n, this.lazyHash_ = null, a.assert(void 0 !== this.value_ && null !== this.value_, 'LeafNode shouldn\'t be created with null/undefined value.'), Ne(this.priorityNode_);
          }
          return Object.defineProperty(e, '__childrenNodeConstructor', {
            get: function () {
              return Te;
            },
            set: function (e) {
              Te = e;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.isLeafNode = function () {
            return !0;
          }, e.prototype.getPriority = function () {
            return this.priorityNode_;
          }, e.prototype.updatePriority = function (t) {
            return new e(this.value_, t);
          }, e.prototype.getImmediateChild = function (t) {
            return '.priority' === t ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE;
          }, e.prototype.getChild = function (t) {
            return t.isEmpty() ? this : '.priority' === t.getFront() ? this.priorityNode_ : e.__childrenNodeConstructor.EMPTY_NODE;
          }, e.prototype.hasChild = function () {
            return !1;
          }, e.prototype.getPredecessorChildName = function (e, t) {
            return null;
          }, e.prototype.updateImmediateChild = function (t, n) {
            return '.priority' === t ? this.updatePriority(n) : n.isEmpty() && '.priority' !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.priorityNode_);
          }, e.prototype.updateChild = function (t, n) {
            var r = t.getFront();
            return null === r ? n : n.isEmpty() && '.priority' !== r ? this : (a.assert('.priority' !== r || 1 === t.getLength(), '.priority must be the last token in a path'), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n)));
          }, e.prototype.isEmpty = function () {
            return !1;
          }, e.prototype.numChildren = function () {
            return 0;
          }, e.prototype.forEachChild = function (e, t) {
            return !1;
          }, e.prototype.val = function (e) {
            return e && !this.getPriority().isEmpty() ? {
              '.value': this.getValue(),
              '.priority': this.getPriority().val()
            } : this.getValue();
          }, e.prototype.hash = function () {
            if (null === this.lazyHash_) {
              var e = '';
              this.priorityNode_.isEmpty() || (e += 'priority:' + Ie(this.priorityNode_.val()) + ':');
              var t = i(this.value_);
              e += t + ':', e += 'number' === t ? Q(this.value_) : this.value_, this.lazyHash_ = C(e);
            }
            return this.lazyHash_;
          }, e.prototype.getValue = function () {
            return this.value_;
          }, e.prototype.compareTo = function (t) {
            return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (a.assert(t.isLeafNode(), 'Unknown node type'), this.compareToLeafNode_(t));
          }, e.prototype.compareToLeafNode_ = function (t) {
            var n = i(t.value_), r = i(this.value_), o = e.VALUE_TYPE_ORDER.indexOf(n), s = e.VALUE_TYPE_ORDER.indexOf(r);
            return a.assert(o >= 0, 'Unknown leaf type: ' + n), a.assert(s >= 0, 'Unknown leaf type: ' + r), o === s ? 'object' === r ? 0 : this.value_ < t.value_ ? -1 : this.value_ === t.value_ ? 0 : 1 : s - o;
          }, e.prototype.withIndex = function () {
            return this;
          }, e.prototype.isIndexed = function () {
            return !0;
          }, e.prototype.equals = function (e) {
            if (e === this)
              return !0;
            if (e.isLeafNode()) {
              var t = e;
              return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_);
            }
            return !1;
          }, e.VALUE_TYPE_ORDER = [
            'object',
            'boolean',
            'number',
            'string'
          ], e;
        }();
      var Re, De, xe = new (function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return s.__extends(t, e), t.prototype.compare = function (e, t) {
            var n = e.node.getPriority(), r = t.node.getPriority(), i = n.compareTo(r);
            return 0 === i ? O(e.name, t.name) : i;
          }, t.prototype.isDefinedOn = function (e) {
            return !e.getPriority().isEmpty();
          }, t.prototype.indexedValueChanged = function (e, t) {
            return !e.getPriority().equals(t.getPriority());
          }, t.prototype.minPost = function () {
            return me.MIN;
          }, t.prototype.maxPost = function () {
            return new me(k, new Pe('[PRIORITY-POST]', Se));
          }, t.prototype.makePost = function (e, t) {
            var n = be(e);
            return new me(t, new Pe('[PRIORITY-POST]', n));
          }, t.prototype.toString = function () {
            return '.priority';
          }, t;
        }(Ce))(), ke = function () {
          function e(e, t, n, r, i) {
            void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
            for (var o = 1; !e.isEmpty();)
              if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0)
                e = this.isReverse_ ? e.left : e.right;
              else {
                if (0 === o) {
                  this.nodeStack_.push(e);
                  break;
                }
                this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left;
              }
          }
          return e.prototype.getNext = function () {
            if (0 === this.nodeStack_.length)
              return null;
            var e, t = this.nodeStack_.pop();
            if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                key: t.key,
                value: t.value
              }, this.isReverse_)
              for (t = t.left; !t.isEmpty();)
                this.nodeStack_.push(t), t = t.right;
            else
              for (t = t.right; !t.isEmpty();)
                this.nodeStack_.push(t), t = t.left;
            return e;
          }, e.prototype.hasNext = function () {
            return this.nodeStack_.length > 0;
          }, e.prototype.peek = function () {
            if (0 === this.nodeStack_.length)
              return null;
            var e = this.nodeStack_[this.nodeStack_.length - 1];
            return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
              key: e.key,
              value: e.value
            };
          }, e;
        }(), Oe = function () {
          function e(t, n, r, i, o) {
            this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : Ae.EMPTY_NODE, this.right = null != o ? o : Ae.EMPTY_NODE;
          }
          return e.prototype.copy = function (t, n, r, i, o) {
            return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
          }, e.prototype.count = function () {
            return this.left.count() + 1 + this.right.count();
          }, e.prototype.isEmpty = function () {
            return !1;
          }, e.prototype.inorderTraversal = function (e) {
            return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e);
          }, e.prototype.reverseTraversal = function (e) {
            return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
          }, e.prototype.min_ = function () {
            return this.left.isEmpty() ? this : this.left.min_();
          }, e.prototype.minKey = function () {
            return this.min_().key;
          }, e.prototype.maxKey = function () {
            return this.right.isEmpty() ? this.key : this.right.maxKey();
          }, e.prototype.insert = function (e, t, n) {
            var r = this, i = n(e, r.key);
            return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp_();
          }, e.prototype.removeMin_ = function () {
            if (this.left.isEmpty())
              return Ae.EMPTY_NODE;
            var e = this;
            return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), (e = e.copy(null, null, null, e.left.removeMin_(), null)).fixUp_();
          }, e.prototype.remove = function (e, t) {
            var n, r;
            if (t(e, (n = this).key) < 0)
              n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
            else {
              if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                if (n.right.isEmpty())
                  return Ae.EMPTY_NODE;
                r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_());
              }
              n = n.copy(null, null, null, null, n.right.remove(e, t));
            }
            return n.fixUp_();
          }, e.prototype.isRed_ = function () {
            return this.color;
          }, e.prototype.fixUp_ = function () {
            var e = this;
            return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e;
          }, e.prototype.moveRedLeft_ = function () {
            var e = this.colorFlip_();
            return e.right.left.isRed_() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_()), e;
          }, e.prototype.moveRedRight_ = function () {
            var e = this.colorFlip_();
            return e.left.left.isRed_() && (e = (e = e.rotateRight_()).colorFlip_()), e;
          }, e.prototype.rotateLeft_ = function () {
            var t = this.copy(null, null, e.RED, null, this.right.left);
            return this.right.copy(null, null, this.color, t, null);
          }, e.prototype.rotateRight_ = function () {
            var t = this.copy(null, null, e.RED, this.left.right, null);
            return this.left.copy(null, null, this.color, null, t);
          }, e.prototype.colorFlip_ = function () {
            var e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
            return this.copy(null, null, !this.color, e, t);
          }, e.prototype.checkMaxDepth_ = function () {
            var e = this.check_();
            return Math.pow(2, e) <= this.count() + 1;
          }, e.prototype.check_ = function () {
            if (this.isRed_() && this.left.isRed_())
              throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
            if (this.right.isRed_())
              throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
            var e = this.left.check_();
            if (e !== this.right.check_())
              throw new Error('Black depths differ');
            return e + (this.isRed_() ? 0 : 1);
          }, e.RED = !0, e.BLACK = !1, e;
        }(), Fe = function () {
          function e() {
          }
          return e.prototype.copy = function (e, t, n, r, i) {
            return this;
          }, e.prototype.insert = function (e, t, n) {
            return new Oe(e, t, null);
          }, e.prototype.remove = function (e, t) {
            return this;
          }, e.prototype.count = function () {
            return 0;
          }, e.prototype.isEmpty = function () {
            return !0;
          }, e.prototype.inorderTraversal = function (e) {
            return !1;
          }, e.prototype.reverseTraversal = function (e) {
            return !1;
          }, e.prototype.minKey = function () {
            return null;
          }, e.prototype.maxKey = function () {
            return null;
          }, e.prototype.check_ = function () {
            return 0;
          }, e.prototype.isRed_ = function () {
            return !1;
          }, e;
        }(), Ae = function () {
          function e(t, n) {
            void 0 === n && (n = e.EMPTY_NODE), this.comparator_ = t, this.root_ = n;
          }
          return e.prototype.insert = function (t, n) {
            return new e(this.comparator_, this.root_.insert(t, n, this.comparator_).copy(null, null, Oe.BLACK, null, null));
          }, e.prototype.remove = function (t) {
            return new e(this.comparator_, this.root_.remove(t, this.comparator_).copy(null, null, Oe.BLACK, null, null));
          }, e.prototype.get = function (e) {
            for (var t, n = this.root_; !n.isEmpty();) {
              if (0 === (t = this.comparator_(e, n.key)))
                return n.value;
              t < 0 ? n = n.left : t > 0 && (n = n.right);
            }
            return null;
          }, e.prototype.getPredecessorKey = function (e) {
            for (var t, n = this.root_, r = null; !n.isEmpty();) {
              if (0 === (t = this.comparator_(e, n.key))) {
                if (n.left.isEmpty())
                  return r ? r.key : null;
                for (n = n.left; !n.right.isEmpty();)
                  n = n.right;
                return n.key;
              }
              t < 0 ? n = n.left : t > 0 && (r = n, n = n.right);
            }
            throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
          }, e.prototype.isEmpty = function () {
            return this.root_.isEmpty();
          }, e.prototype.count = function () {
            return this.root_.count();
          }, e.prototype.minKey = function () {
            return this.root_.minKey();
          }, e.prototype.maxKey = function () {
            return this.root_.maxKey();
          }, e.prototype.inorderTraversal = function (e) {
            return this.root_.inorderTraversal(e);
          }, e.prototype.reverseTraversal = function (e) {
            return this.root_.reverseTraversal(e);
          }, e.prototype.getIterator = function (e) {
            return new ke(this.root_, null, this.comparator_, !1, e);
          }, e.prototype.getIteratorFrom = function (e, t) {
            return new ke(this.root_, e, this.comparator_, !1, t);
          }, e.prototype.getReverseIteratorFrom = function (e, t) {
            return new ke(this.root_, e, this.comparator_, !0, t);
          }, e.prototype.getReverseIterator = function (e) {
            return new ke(this.root_, null, this.comparator_, !0, e);
          }, e.EMPTY_NODE = new Fe(), e;
        }(), Le = Math.log(2), Me = function () {
          function e(e) {
            var t;
            this.count = (t = e + 1, parseInt(Math.log(t) / Le, 10)), this.current_ = this.count - 1;
            var n, r = (n = this.count, parseInt(Array(n + 1).join('1'), 2));
            this.bits_ = e + 1 & r;
          }
          return e.prototype.nextBitIsOne = function () {
            var e = !(this.bits_ & 1 << this.current_);
            return this.current_--, e;
          }, e;
        }(), We = function (e, t, n, r) {
          e.sort(t);
          var i = function (t) {
            for (var r = null, i = null, o = e.length, s = function (t, r) {
                  var i = o - t, s = o;
                  o -= t;
                  var h = function t(r, i) {
                      var o, s, a = i - r;
                      if (0 === a)
                        return null;
                      if (1 === a)
                        return o = e[r], s = n ? n(o) : o, new Oe(s, o.node, Oe.BLACK, null, null);
                      var h = parseInt(a / 2, 10) + r, u = t(r, h), l = t(h + 1, i);
                      return o = e[h], s = n ? n(o) : o, new Oe(s, o.node, Oe.BLACK, u, l);
                    }(i + 1, s), u = e[i], l = n ? n(u) : u;
                  a(new Oe(l, u.node, r, null, h));
                }, a = function (e) {
                  r ? (r.left = e, r = e) : (i = e, r = e);
                }, h = 0; h < t.count; ++h) {
              var u = t.nextBitIsOne(), l = Math.pow(2, t.count - (h + 1));
              u ? s(l, Oe.BLACK) : (s(l, Oe.BLACK), s(l, Oe.RED));
            }
            return i;
          }(new Me(e.length));
          return new Ae(r || t, i);
        }, Qe = {}, qe = function () {
          function e(e, t) {
            this.indexes_ = e, this.indexSet_ = t;
          }
          return Object.defineProperty(e, 'Default', {
            get: function () {
              return a.assert(Qe && xe, 'ChildrenNode.ts has not been loaded'), Re = Re || new e({ '.priority': Qe }, { '.priority': xe });
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.get = function (e) {
            var t = a.safeGet(this.indexes_, e);
            if (!t)
              throw new Error('No index defined for ' + e);
            return t instanceof Ae ? t : null;
          }, e.prototype.hasIndex = function (e) {
            return a.contains(this.indexSet_, e.toString());
          }, e.prototype.addIndex = function (t, n) {
            a.assert(t !== we, 'KeyIndex always exists and isn\'t meant to be added to the IndexMap.');
            for (var r, i = [], o = !1, h = n.getIterator(me.Wrap), u = h.getNext(); u;)
              o = o || t.isDefinedOn(u.node), i.push(u), u = h.getNext();
            r = o ? We(i, t.getCompare()) : Qe;
            var l = t.toString(), c = s.__assign({}, this.indexSet_);
            c[l] = t;
            var p = s.__assign({}, this.indexes_);
            return p[l] = r, new e(p, c);
          }, e.prototype.addToIndexes = function (t, n) {
            var r = this;
            return new e(a.map(this.indexes_, function (e, i) {
              var o = a.safeGet(r.indexSet_, i);
              if (a.assert(o, 'Missing index implementation for ' + i), e === Qe) {
                if (o.isDefinedOn(t.node)) {
                  for (var s = [], h = n.getIterator(me.Wrap), u = h.getNext(); u;)
                    u.name !== t.name && s.push(u), u = h.getNext();
                  return s.push(t), We(s, o.getCompare());
                }
                return Qe;
              }
              var l = n.get(t.name), c = e;
              return l && (c = c.remove(new me(t.name, l))), c.insert(t, t.node);
            }), this.indexSet_);
          }, e.prototype.removeFromIndexes = function (t, n) {
            return new e(a.map(this.indexes_, function (e) {
              if (e === Qe)
                return e;
              var r = n.get(t.name);
              return r ? e.remove(new me(t.name, r)) : e;
            }), this.indexSet_);
          }, e;
        }();
      function Ue(e, t) {
        return O(e.name, t.name);
      }
      function Ve(e, t) {
        return O(e, t);
      }
      var He = function () {
          function e(e, t, n) {
            this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Ne(this.priorityNode_), this.children_.isEmpty() && a.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
          }
          return Object.defineProperty(e, 'EMPTY_NODE', {
            get: function () {
              return De || (De = new e(new Ae(Ve), null, qe.Default));
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.isLeafNode = function () {
            return !1;
          }, e.prototype.getPriority = function () {
            return this.priorityNode_ || De;
          }, e.prototype.updatePriority = function (t) {
            return this.children_.isEmpty() ? this : new e(this.children_, t, this.indexMap_);
          }, e.prototype.getImmediateChild = function (e) {
            if ('.priority' === e)
              return this.getPriority();
            var t = this.children_.get(e);
            return null === t ? De : t;
          }, e.prototype.getChild = function (e) {
            var t = e.getFront();
            return null === t ? this : this.getImmediateChild(t).getChild(e.popFront());
          }, e.prototype.hasChild = function (e) {
            return null !== this.children_.get(e);
          }, e.prototype.updateImmediateChild = function (t, n) {
            if (a.assert(n, 'We should always be passing snapshot nodes'), '.priority' === t)
              return this.updatePriority(n);
            var r = new me(t, n), i = void 0, o = void 0;
            n.isEmpty() ? (i = this.children_.remove(t), o = this.indexMap_.removeFromIndexes(r, this.children_)) : (i = this.children_.insert(t, n), o = this.indexMap_.addToIndexes(r, this.children_));
            var s = i.isEmpty() ? De : this.priorityNode_;
            return new e(i, s, o);
          }, e.prototype.updateChild = function (e, t) {
            var n = e.getFront();
            if (null === n)
              return t;
            a.assert('.priority' !== e.getFront() || 1 === e.getLength(), '.priority must be the last token in a path');
            var r = this.getImmediateChild(n).updateChild(e.popFront(), t);
            return this.updateImmediateChild(n, r);
          }, e.prototype.isEmpty = function () {
            return this.children_.isEmpty();
          }, e.prototype.numChildren = function () {
            return this.children_.count();
          }, e.prototype.val = function (t) {
            if (this.isEmpty())
              return null;
            var n = {}, r = 0, i = 0, o = !0;
            if (this.forEachChild(xe, function (s, a) {
                n[s] = a.val(t), r++, o && e.INTEGER_REGEXP_.test(s) ? i = Math.max(i, Number(s)) : o = !1;
              }), !t && o && i < 2 * r) {
              var s = [];
              for (var a in n)
                s[a] = n[a];
              return s;
            }
            return t && !this.getPriority().isEmpty() && (n['.priority'] = this.getPriority().val()), n;
          }, e.prototype.hash = function () {
            if (null === this.lazyHash_) {
              var e = '';
              this.getPriority().isEmpty() || (e += 'priority:' + Ie(this.getPriority().val()) + ':'), this.forEachChild(xe, function (t, n) {
                var r = n.hash();
                '' !== r && (e += ':' + t + ':' + r);
              }), this.lazyHash_ = '' === e ? '' : C(e);
            }
            return this.lazyHash_;
          }, e.prototype.getPredecessorChildName = function (e, t, n) {
            var r = this.resolveIndex_(n);
            if (r) {
              var i = r.getPredecessorKey(new me(e, t));
              return i ? i.name : null;
            }
            return this.children_.getPredecessorKey(e);
          }, e.prototype.getFirstChildName = function (e) {
            var t = this.resolveIndex_(e);
            if (t) {
              var n = t.minKey();
              return n && n.name;
            }
            return this.children_.minKey();
          }, e.prototype.getFirstChild = function (e) {
            var t = this.getFirstChildName(e);
            return t ? new me(t, this.children_.get(t)) : null;
          }, e.prototype.getLastChildName = function (e) {
            var t = this.resolveIndex_(e);
            if (t) {
              var n = t.maxKey();
              return n && n.name;
            }
            return this.children_.maxKey();
          }, e.prototype.getLastChild = function (e) {
            var t = this.getLastChildName(e);
            return t ? new me(t, this.children_.get(t)) : null;
          }, e.prototype.forEachChild = function (e, t) {
            var n = this.resolveIndex_(e);
            return n ? n.inorderTraversal(function (e) {
              return t(e.name, e.node);
            }) : this.children_.inorderTraversal(t);
          }, e.prototype.getIterator = function (e) {
            return this.getIteratorFrom(e.minPost(), e);
          }, e.prototype.getIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getIteratorFrom(e, function (e) {
                return e;
              });
            for (var r = this.children_.getIteratorFrom(e.name, me.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;)
              r.getNext(), i = r.peek();
            return r;
          }, e.prototype.getReverseIterator = function (e) {
            return this.getReverseIteratorFrom(e.maxPost(), e);
          }, e.prototype.getReverseIteratorFrom = function (e, t) {
            var n = this.resolveIndex_(t);
            if (n)
              return n.getReverseIteratorFrom(e, function (e) {
                return e;
              });
            for (var r = this.children_.getReverseIteratorFrom(e.name, me.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;)
              r.getNext(), i = r.peek();
            return r;
          }, e.prototype.compareTo = function (e) {
            return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === je ? -1 : 0;
          }, e.prototype.withIndex = function (t) {
            if (t === we || this.indexMap_.hasIndex(t))
              return this;
            var n = this.indexMap_.addIndex(t, this.children_);
            return new e(this.children_, this.priorityNode_, n);
          }, e.prototype.isIndexed = function (e) {
            return e === we || this.indexMap_.hasIndex(e);
          }, e.prototype.equals = function (e) {
            if (e === this)
              return !0;
            if (e.isLeafNode())
              return !1;
            var t = e;
            if (this.getPriority().equals(t.getPriority())) {
              if (this.children_.count() === t.children_.count()) {
                for (var n = this.getIterator(xe), r = t.getIterator(xe), i = n.getNext(), o = r.getNext(); i && o;) {
                  if (i.name !== o.name || !i.node.equals(o.node))
                    return !1;
                  i = n.getNext(), o = r.getNext();
                }
                return null === i && null === o;
              }
              return !1;
            }
            return !1;
          }, e.prototype.resolveIndex_ = function (e) {
            return e === we ? null : this.indexMap_.get(e.toString());
          }, e.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, e;
        }(), je = new (function (e) {
          function t() {
            return e.call(this, new Ae(Ve), He.EMPTY_NODE, qe.Default) || this;
          }
          return s.__extends(t, e), t.prototype.compareTo = function (e) {
            return e === this ? 0 : 1;
          }, t.prototype.equals = function (e) {
            return e === this;
          }, t.prototype.getPriority = function () {
            return this;
          }, t.prototype.getImmediateChild = function (e) {
            return He.EMPTY_NODE;
          }, t.prototype.isEmpty = function () {
            return !1;
          }, t;
        }(He))();
      Object.defineProperties(me, {
        MIN: { value: new me(x, He.EMPTY_NODE) },
        MAX: { value: new me(k, je) }
      }), Ee.__EMPTY_NODE = He.EMPTY_NODE, Pe.__childrenNodeConstructor = He, $ = je, function (e) {
        Se = e;
      }(je);
      function Be(e, t) {
        if (void 0 === t && (t = null), null === e)
          return He.EMPTY_NODE;
        if ('object' === i(e) && '.priority' in e && (t = e['.priority']), a.assert(null === t || 'string' == typeof t || 'number' == typeof t || 'object' === i(t) && '.sv' in t, 'Invalid priority type found: ' + i(t)), 'object' === i(e) && '.value' in e && null !== e['.value'] && (e = e['.value']), 'object' !== i(e) || '.sv' in e)
          return new Pe(e, Be(t));
        if (e instanceof Array) {
          var n = He.EMPTY_NODE;
          return W(e, function (t, r) {
            if (a.contains(e, t) && '.' !== t.substring(0, 1)) {
              var i = Be(r);
              !i.isLeafNode() && i.isEmpty() || (n = n.updateImmediateChild(t, i));
            }
          }), n.updatePriority(Be(t));
        }
        var r = [], o = !1;
        if (W(e, function (e, t) {
            if ('.' !== e.substring(0, 1)) {
              var n = Be(t);
              n.isEmpty() || (o = o || !n.getPriority().isEmpty(), r.push(new me(e, n)));
            }
          }), 0 === r.length)
          return He.EMPTY_NODE;
        var s = We(r, Ue, function (e) {
          return e.name;
        }, Ve);
        if (o) {
          var h = We(r, xe.getCompare());
          return new He(s, Be(t), new qe({ '.priority': h }, { '.priority': xe }));
        }
        return new He(s, Be(t), qe.Default);
      }
      !function (e) {
        be = e;
      }(Be);
      var Ke, Ye = new (function (e) {
          function t() {
            return null !== e && e.apply(this, arguments) || this;
          }
          return s.__extends(t, e), t.prototype.compare = function (e, t) {
            var n = e.node.compareTo(t.node);
            return 0 === n ? O(e.name, t.name) : n;
          }, t.prototype.isDefinedOn = function (e) {
            return !0;
          }, t.prototype.indexedValueChanged = function (e, t) {
            return !e.equals(t);
          }, t.prototype.minPost = function () {
            return me.MIN;
          }, t.prototype.maxPost = function () {
            return me.MAX;
          }, t.prototype.makePost = function (e, t) {
            var n = Be(e);
            return new me(t, n);
          }, t.prototype.toString = function () {
            return '.value';
          }, t;
        }(Ce))(), ze = function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return n.indexPath_ = t, a.assert(!t.isEmpty() && '.priority' !== t.getFront(), 'Can\'t create PathIndex with empty path or .priority key'), n;
          }
          return s.__extends(t, e), t.prototype.extractChild = function (e) {
            return e.getChild(this.indexPath_);
          }, t.prototype.isDefinedOn = function (e) {
            return !e.getChild(this.indexPath_).isEmpty();
          }, t.prototype.compare = function (e, t) {
            var n = this.extractChild(e.node), r = this.extractChild(t.node), i = n.compareTo(r);
            return 0 === i ? O(e.name, t.name) : i;
          }, t.prototype.makePost = function (e, t) {
            var n = Be(e), r = He.EMPTY_NODE.updateChild(this.indexPath_, n);
            return new me(t, r);
          }, t.prototype.maxPost = function () {
            var e = He.EMPTY_NODE.updateChild(this.indexPath_, je);
            return new me(k, e);
          }, t.prototype.toString = function () {
            return this.indexPath_.slice().join('/');
          }, t;
        }(Ce), Ge = function () {
          function e(e, t, n) {
            this.node_ = e, this.ref_ = t, this.index_ = n;
          }
          return e.prototype.val = function () {
            return a.validateArgCount('DataSnapshot.val', 0, 0, arguments.length), this.node_.val();
          }, e.prototype.exportVal = function () {
            return a.validateArgCount('DataSnapshot.exportVal', 0, 0, arguments.length), this.node_.val(!0);
          }, e.prototype.toJSON = function () {
            return a.validateArgCount('DataSnapshot.toJSON', 0, 1, arguments.length), this.exportVal();
          }, e.prototype.exists = function () {
            return a.validateArgCount('DataSnapshot.exists', 0, 0, arguments.length), !this.node_.isEmpty();
          }, e.prototype.child = function (t) {
            a.validateArgCount('DataSnapshot.child', 0, 1, arguments.length), t = String(t), ce('DataSnapshot.child', 1, t, !1);
            var n = new j(t), r = this.ref_.child(n);
            return new e(this.node_.getChild(n), r, xe);
          }, e.prototype.hasChild = function (e) {
            a.validateArgCount('DataSnapshot.hasChild', 1, 1, arguments.length), ce('DataSnapshot.hasChild', 1, e, !1);
            var t = new j(e);
            return !this.node_.getChild(t).isEmpty();
          }, e.prototype.getPriority = function () {
            return a.validateArgCount('DataSnapshot.getPriority', 0, 0, arguments.length), this.node_.getPriority().val();
          }, e.prototype.forEach = function (t) {
            var n = this;
            if (a.validateArgCount('DataSnapshot.forEach', 1, 1, arguments.length), a.validateCallback('DataSnapshot.forEach', 1, t, !1), this.node_.isLeafNode())
              return !1;
            var r = this.node_;
            return !!r.forEachChild(this.index_, function (r, i) {
              return t(new e(i, n.ref_.child(r), xe));
            });
          }, e.prototype.hasChildren = function () {
            return a.validateArgCount('DataSnapshot.hasChildren', 0, 0, arguments.length), !this.node_.isLeafNode() && !this.node_.isEmpty();
          }, Object.defineProperty(e.prototype, 'key', {
            get: function () {
              return this.ref_.getKey();
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.numChildren = function () {
            return a.validateArgCount('DataSnapshot.numChildren', 0, 0, arguments.length), this.node_.numChildren();
          }, e.prototype.getRef = function () {
            return a.validateArgCount('DataSnapshot.ref', 0, 0, arguments.length), this.ref_;
          }, Object.defineProperty(e.prototype, 'ref', {
            get: function () {
              return this.getRef();
            },
            enumerable: !1,
            configurable: !0
          }), e;
        }(), Xe = function () {
          function e(e, t, n, r) {
            this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r;
          }
          return e.prototype.getPath = function () {
            var e = this.snapshot.getRef();
            return 'value' === this.eventType ? e.path : e.getParent().path;
          }, e.prototype.getEventType = function () {
            return this.eventType;
          }, e.prototype.getEventRunner = function () {
            return this.eventRegistration.getEventRunner(this);
          }, e.prototype.toString = function () {
            return this.getPath().toString() + ':' + this.eventType + ':' + a.stringify(this.snapshot.exportVal());
          }, e;
        }(), $e = function () {
          function e(e, t, n) {
            this.eventRegistration = e, this.error = t, this.path = n;
          }
          return e.prototype.getPath = function () {
            return this.path;
          }, e.prototype.getEventType = function () {
            return 'cancel';
          }, e.prototype.getEventRunner = function () {
            return this.eventRegistration.getEventRunner(this);
          }, e.prototype.toString = function () {
            return this.path.toString() + ':cancel';
          }, e;
        }(), Je = function () {
          function e(e, t, n) {
            this.callback_ = e, this.cancelCallback_ = t, this.context_ = n;
          }
          return e.prototype.respondsTo = function (e) {
            return 'value' === e;
          }, e.prototype.createEvent = function (e, t) {
            var n = t.getQueryParams().getIndex();
            return new Xe('value', this, new Ge(e.snapshotNode, t.getRef(), n));
          }, e.prototype.getEventRunner = function (e) {
            var t = this.context_;
            if ('cancel' === e.getEventType()) {
              a.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
              var n = this.cancelCallback_;
              return function () {
                n.call(t, e.error);
              };
            }
            var r = this.callback_;
            return function () {
              r.call(t, e.snapshot);
            };
          }, e.prototype.createCancelEvent = function (e, t) {
            return this.cancelCallback_ ? new $e(this, e, t) : null;
          }, e.prototype.matches = function (t) {
            return t instanceof e && (!t.callback_ || !this.callback_ || t.callback_ === this.callback_ && t.context_ === this.context_);
          }, e.prototype.hasAnyCallback = function () {
            return null !== this.callback_;
          }, e;
        }(), Ze = function () {
          function e(e, t, n) {
            this.callbacks_ = e, this.cancelCallback_ = t, this.context_ = n;
          }
          return e.prototype.respondsTo = function (e) {
            var t = 'children_added' === e ? 'child_added' : e;
            return t = 'children_removed' === t ? 'child_removed' : t, a.contains(this.callbacks_, t);
          }, e.prototype.createCancelEvent = function (e, t) {
            return this.cancelCallback_ ? new $e(this, e, t) : null;
          }, e.prototype.createEvent = function (e, t) {
            a.assert(null != e.childName, 'Child events should have a childName.');
            var n = t.getRef().child(e.childName), r = t.getQueryParams().getIndex();
            return new Xe(e.type, this, new Ge(e.snapshotNode, n, r), e.prevName);
          }, e.prototype.getEventRunner = function (e) {
            var t = this.context_;
            if ('cancel' === e.getEventType()) {
              a.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
              var n = this.cancelCallback_;
              return function () {
                n.call(t, e.error);
              };
            }
            var r = this.callbacks_[e.eventType];
            return function () {
              r.call(t, e.snapshot, e.prevName);
            };
          }, e.prototype.matches = function (t) {
            var n = this;
            if (t instanceof e) {
              if (!this.callbacks_ || !t.callbacks_)
                return !0;
              if (this.context_ === t.context_) {
                var r = Object.keys(t.callbacks_), i = Object.keys(this.callbacks_), o = r.length;
                if (o === i.length) {
                  if (1 === o) {
                    var s = r[0], a = i[0];
                    return !(a !== s || t.callbacks_[s] && this.callbacks_[a] && t.callbacks_[s] !== this.callbacks_[a]);
                  }
                  return i.every(function (e) {
                    return t.callbacks_[e] === n.callbacks_[e];
                  });
                }
              }
            }
            return !1;
          }, e.prototype.hasAnyCallback = function () {
            return null !== this.callbacks_;
          }, e;
        }(), et = function () {
          function e(e, t, n, r) {
            this.repo = e, this.path = t, this.queryParams_ = n, this.orderByCalled_ = r;
          }
          return Object.defineProperty(e, '__referenceConstructor', {
            get: function () {
              return a.assert(Ke, 'Reference.ts has not been loaded'), Ke;
            },
            set: function (e) {
              Ke = e;
            },
            enumerable: !1,
            configurable: !0
          }), e.validateQueryEndpoints_ = function (e) {
            var t = null, n = null;
            if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === we) {
              var r = 'Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().', o = 'Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.';
              if (e.hasStart()) {
                if (e.getIndexStartName() !== x)
                  throw new Error(r);
                if ('string' != typeof t)
                  throw new Error(o);
              }
              if (e.hasEnd()) {
                if (e.getIndexEndName() !== k)
                  throw new Error(r);
                if ('string' != typeof n)
                  throw new Error(o);
              }
            } else if (e.getIndex() === xe) {
              if (null != t && !ie(t) || null != n && !ie(n))
                throw new Error('Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).');
            } else if (a.assert(e.getIndex() instanceof ze || e.getIndex() === Ye, 'unknown index type.'), null != t && 'object' === i(t) || null != n && 'object' === i(n))
              throw new Error('Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.');
          }, e.validateLimit_ = function (e) {
            if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit())
              throw new Error('Query: Can\'t combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.');
          }, e.prototype.validateNoPreviousOrderByCall_ = function (e) {
            if (!0 === this.orderByCalled_)
              throw new Error(e + ': You can\'t combine multiple orderBy calls.');
          }, e.prototype.getQueryParams = function () {
            return this.queryParams_;
          }, e.prototype.getRef = function () {
            return a.validateArgCount('Query.ref', 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path);
          }, e.prototype.on = function (t, n, r, i) {
            a.validateArgCount('Query.on', 2, 4, arguments.length), ue('Query.on', 1, t, !1), a.validateCallback('Query.on', 2, n, !1);
            var o = e.getCancelAndContextArgs_('Query.on', r, i);
            if ('value' === t)
              this.onValueEvent(n, o.cancel, o.context);
            else {
              var s = {};
              s[t] = n, this.onChildEvent(s, o.cancel, o.context);
            }
            return n;
          }, e.prototype.onValueEvent = function (e, t, n) {
            var r = new Je(e, t || null, n || null);
            this.repo.addEventCallbackForQuery(this, r);
          }, e.prototype.onChildEvent = function (e, t, n) {
            var r = new Ze(e, t, n);
            this.repo.addEventCallbackForQuery(this, r);
          }, e.prototype.off = function (e, t, n) {
            a.validateArgCount('Query.off', 0, 3, arguments.length), ue('Query.off', 1, e, !0), a.validateCallback('Query.off', 2, t, !0), a.validateContextObject('Query.off', 3, n, !0);
            var r = null, i = null;
            if ('value' === e) {
              var o = t || null;
              r = new Je(o, null, n || null);
            } else
              e && (t && ((i = {})[e] = t), r = new Ze(i, null, n || null));
            this.repo.removeEventCallbackForQuery(this, r);
          }, e.prototype.once = function (t, n, r, i) {
            var o = this;
            a.validateArgCount('Query.once', 1, 4, arguments.length), ue('Query.once', 1, t, !1), a.validateCallback('Query.once', 2, n, !0);
            var s = e.getCancelAndContextArgs_('Query.once', r, i), h = !0, u = new a.Deferred();
            u.promise.catch(function () {
            });
            var l = function e(r) {
              h && (h = !1, o.off(t, e), n && n.bind(s.context)(r), u.resolve(r));
            };
            return this.on(t, l, function (e) {
              o.off(t, l), s.cancel && s.cancel.bind(s.context)(e), u.reject(e);
            }), u.promise;
          }, e.prototype.limitToFirst = function (t) {
            if (a.validateArgCount('Query.limitToFirst', 1, 1, arguments.length), 'number' != typeof t || Math.floor(t) !== t || t <= 0)
              throw new Error('Query.limitToFirst: First argument must be a positive integer.');
            if (this.queryParams_.hasLimit())
              throw new Error('Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).');
            return new e(this.repo, this.path, this.queryParams_.limitToFirst(t), this.orderByCalled_);
          }, e.prototype.limitToLast = function (t) {
            if (a.validateArgCount('Query.limitToLast', 1, 1, arguments.length), 'number' != typeof t || Math.floor(t) !== t || t <= 0)
              throw new Error('Query.limitToLast: First argument must be a positive integer.');
            if (this.queryParams_.hasLimit())
              throw new Error('Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).');
            return new e(this.repo, this.path, this.queryParams_.limitToLast(t), this.orderByCalled_);
          }, e.prototype.orderByChild = function (t) {
            if (a.validateArgCount('Query.orderByChild', 1, 1, arguments.length), '$key' === t)
              throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
            if ('$priority' === t)
              throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
            if ('$value' === t)
              throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
            ce('Query.orderByChild', 1, t, !1), this.validateNoPreviousOrderByCall_('Query.orderByChild');
            var n = new j(t);
            if (n.isEmpty())
              throw new Error('Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.');
            var r = new ze(n), i = this.queryParams_.orderBy(r);
            return e.validateQueryEndpoints_(i), new e(this.repo, this.path, i, !0);
          }, e.prototype.orderByKey = function () {
            a.validateArgCount('Query.orderByKey', 0, 0, arguments.length), this.validateNoPreviousOrderByCall_('Query.orderByKey');
            var t = this.queryParams_.orderBy(we);
            return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0);
          }, e.prototype.orderByPriority = function () {
            a.validateArgCount('Query.orderByPriority', 0, 0, arguments.length), this.validateNoPreviousOrderByCall_('Query.orderByPriority');
            var t = this.queryParams_.orderBy(xe);
            return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0);
          }, e.prototype.orderByValue = function () {
            a.validateArgCount('Query.orderByValue', 0, 0, arguments.length), this.validateNoPreviousOrderByCall_('Query.orderByValue');
            var t = this.queryParams_.orderBy(Ye);
            return e.validateQueryEndpoints_(t), new e(this.repo, this.path, t, !0);
          }, e.prototype.startAt = function (t, n) {
            void 0 === t && (t = null), a.validateArgCount('Query.startAt', 0, 2, arguments.length), oe('Query.startAt', 1, t, this.path, !0), le('Query.startAt', 2, n, !0);
            var r = this.queryParams_.startAt(t, n);
            if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasStart())
              throw new Error('Query.startAt: Starting point was already set (by another call to startAt or equalTo).');
            return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.orderByCalled_);
          }, e.prototype.endAt = function (t, n) {
            void 0 === t && (t = null), a.validateArgCount('Query.endAt', 0, 2, arguments.length), oe('Query.endAt', 1, t, this.path, !0), le('Query.endAt', 2, n, !0);
            var r = this.queryParams_.endAt(t, n);
            if (e.validateLimit_(r), e.validateQueryEndpoints_(r), this.queryParams_.hasEnd())
              throw new Error('Query.endAt: Ending point was already set (by another call to endAt or equalTo).');
            return new e(this.repo, this.path, r, this.orderByCalled_);
          }, e.prototype.equalTo = function (e, t) {
            if (a.validateArgCount('Query.equalTo', 1, 2, arguments.length), oe('Query.equalTo', 1, e, this.path, !1), le('Query.equalTo', 2, t, !0), this.queryParams_.hasStart())
              throw new Error('Query.equalTo: Starting point was already set (by another call to startAt or equalTo).');
            if (this.queryParams_.hasEnd())
              throw new Error('Query.equalTo: Ending point was already set (by another call to endAt or equalTo).');
            return this.startAt(e, t).endAt(e, t);
          }, e.prototype.toString = function () {
            return a.validateArgCount('Query.toString', 0, 0, arguments.length), this.repo.toString() + this.path.toUrlEncodedString();
          }, e.prototype.toJSON = function () {
            return a.validateArgCount('Query.toJSON', 0, 1, arguments.length), this.toString();
          }, e.prototype.queryObject = function () {
            return this.queryParams_.getQueryObject();
          }, e.prototype.queryIdentifier = function () {
            var e = this.queryObject(), t = L(e);
            return '{}' === t ? 'default' : t;
          }, e.prototype.isEqual = function (t) {
            if (a.validateArgCount('Query.isEqual', 1, 1, arguments.length), !(t instanceof e)) {
              var n = 'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
              throw new Error(n);
            }
            var r = this.repo === t.repo, i = this.path.equals(t.path), o = this.queryIdentifier() === t.queryIdentifier();
            return r && i && o;
          }, e.getCancelAndContextArgs_ = function (e, t, n) {
            var r = {
              cancel: null,
              context: null
            };
            if (t && n)
              r.cancel = t, a.validateCallback(e, 3, r.cancel, !0), r.context = n, a.validateContextObject(e, 4, r.context, !0);
            else if (t)
              if ('object' === i(t) && null !== t)
                r.context = t;
              else {
                if ('function' != typeof t)
                  throw new Error(a.errorPrefix(e, 3, !0) + ' must either be a cancel callback or a context object.');
                r.cancel = t;
              }
            return r;
          }, Object.defineProperty(e.prototype, 'ref', {
            get: function () {
              return this.getRef();
            },
            enumerable: !1,
            configurable: !0
          }), e;
        }(), tt = function () {
          function e(e) {
            this.node_ = e;
          }
          return e.prototype.getImmediateChild = function (t) {
            return new e(this.node_.getImmediateChild(t));
          }, e.prototype.node = function () {
            return this.node_;
          }, e;
        }(), nt = function () {
          function e(e, t) {
            this.syncTree_ = e, this.path_ = t;
          }
          return e.prototype.getImmediateChild = function (t) {
            var n = this.path_.child(t);
            return new e(this.syncTree_, n);
          }, e.prototype.node = function () {
            return this.syncTree_.calcCompleteEventCache(this.path_);
          }, e;
        }(), rt = function (e, t, n) {
          return e && 'object' === i(e) ? (a.assert('.sv' in e, 'Unexpected leaf node or priority contents'), 'string' == typeof e['.sv'] ? it(e['.sv'], t, n) : 'object' === i(e['.sv']) ? ot(e['.sv'], t) : void a.assert(!1, 'Unexpected server value: ' + JSON.stringify(e, null, 2))) : e;
        }, it = function (e, t, n) {
          switch (e) {
          case 'timestamp':
            return n.timestamp;
          default:
            a.assert(!1, 'Unexpected server value: ' + e);
          }
        }, ot = function (e, t, n) {
          e.hasOwnProperty('increment') || a.assert(!1, 'Unexpected server value: ' + JSON.stringify(e, null, 2));
          var r = e.increment;
          'number' != typeof r && a.assert(!1, 'Unexpected increment value: ' + r);
          var i = t.node();
          if (a.assert(null != i, 'Expected ChildrenNode.EMPTY_NODE for nulls'), !i.isLeafNode())
            return r;
          var o = i.getValue();
          return 'number' != typeof o ? r : o + r;
        }, st = function (e, t, n, r) {
          return ht(t, new nt(n, e), r);
        }, at = function (e, t, n) {
          return ht(e, new tt(t), n);
        };
      function ht(e, t, n) {
        var r, i = e.getPriority().val(), o = rt(i, t.getImmediateChild('.priority'), n);
        if (e.isLeafNode()) {
          var s = e, a = rt(s.getValue(), t, n);
          return a !== s.getValue() || o !== s.getPriority().val() ? new Pe(a, Be(o)) : e;
        }
        var h = e;
        return r = h, o !== h.getPriority().val() && (r = r.updatePriority(new Pe(o))), h.forEachChild(xe, function (e, i) {
          var o = ht(i, t.getImmediateChild(e), n);
          o !== i && (r = r.updateImmediateChild(e, o));
        }), r;
      }
      var ut, lt = function () {
          function e() {
            this.value = null, this.children = new Map();
          }
          return e.prototype.find = function (e) {
            if (null != this.value)
              return this.value.getChild(e);
            if (!e.isEmpty() && this.children.size > 0) {
              var t = e.getFront();
              return e = e.popFront(), this.children.has(t) ? this.children.get(t).find(e) : null;
            }
            return null;
          }, e.prototype.remember = function (t, n) {
            if (t.isEmpty())
              this.value = n, this.children.clear();
            else if (null !== this.value)
              this.value = this.value.updateChild(t, n);
            else {
              var r = t.getFront();
              this.children.has(r) || this.children.set(r, new e());
              var i = this.children.get(r);
              t = t.popFront(), i.remember(t, n);
            }
          }, e.prototype.forget = function (e) {
            if (e.isEmpty())
              return this.value = null, this.children.clear(), !0;
            if (null !== this.value) {
              if (this.value.isLeafNode())
                return !1;
              var t = this.value;
              this.value = null;
              var n = this;
              return t.forEachChild(xe, function (e, t) {
                n.remember(new j(e), t);
              }), this.forget(e);
            }
            if (this.children.size > 0) {
              var r = e.getFront();
              if (e = e.popFront(), this.children.has(r))
                this.children.get(r).forget(e) && this.children.delete(r);
              return 0 === this.children.size;
            }
            return !0;
          }, e.prototype.forEachTree = function (e, t) {
            null !== this.value ? t(e, this.value) : this.forEachChild(function (n, r) {
              var i = new j(e.toString() + '/' + n);
              r.forEachTree(i, t);
            });
          }, e.prototype.forEachChild = function (e) {
            this.children.forEach(function (t, n) {
              e(n, t);
            });
          }, e;
        }();
      !function (e) {
        e[e.OVERWRITE = 0] = 'OVERWRITE', e[e.MERGE = 1] = 'MERGE', e[e.ACK_USER_WRITE = 2] = 'ACK_USER_WRITE', e[e.LISTEN_COMPLETE = 3] = 'LISTEN_COMPLETE';
      }(ut || (ut = {}));
      var ct, pt, dt = function () {
          function e(e, t, n, r) {
            this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = r, a.assert(!r || t, 'Tagged queries must be from server.');
          }
          return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function (t) {
            return new e(!1, !0, t, !0);
          }, e;
        }(), ft = function () {
          function e(e, t, n) {
            this.path = e, this.affectedTree = t, this.revert = n, this.type = ut.ACK_USER_WRITE, this.source = dt.User;
          }
          return e.prototype.operationForChild = function (t) {
            if (this.path.isEmpty()) {
              if (null != this.affectedTree.value)
                return a.assert(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.'), this;
              var n = this.affectedTree.subtree(new j(t));
              return new e(j.Empty, n, this.revert);
            }
            return a.assert(this.path.getFront() === t, 'operationForChild called for unrelated child.'), new e(this.path.popFront(), this.affectedTree, this.revert);
          }, e;
        }(), _t = function () {
          function e(e, t) {
            void 0 === t && (ct || (ct = new Ae(F)), t = ct), this.value = e, this.children = t;
          }
          return e.fromObject = function (t) {
            var n = e.Empty;
            return W(t, function (e, t) {
              n = n.set(new j(e), t);
            }), n;
          }, e.prototype.isEmpty = function () {
            return null === this.value && this.children.isEmpty();
          }, e.prototype.findRootMostMatchingPathAndValue = function (e, t) {
            if (null != this.value && t(this.value))
              return {
                path: j.Empty,
                value: this.value
              };
            if (e.isEmpty())
              return null;
            var n = e.getFront(), r = this.children.get(n);
            if (null !== r) {
              var i = r.findRootMostMatchingPathAndValue(e.popFront(), t);
              return null != i ? {
                path: new j(n).child(i.path),
                value: i.value
              } : null;
            }
            return null;
          }, e.prototype.findRootMostValueAndPath = function (e) {
            return this.findRootMostMatchingPathAndValue(e, function () {
              return !0;
            });
          }, e.prototype.subtree = function (t) {
            if (t.isEmpty())
              return this;
            var n = t.getFront(), r = this.children.get(n);
            return null !== r ? r.subtree(t.popFront()) : e.Empty;
          }, e.prototype.set = function (t, n) {
            if (t.isEmpty())
              return new e(n, this.children);
            var r = t.getFront(), i = (this.children.get(r) || e.Empty).set(t.popFront(), n), o = this.children.insert(r, i);
            return new e(this.value, o);
          }, e.prototype.remove = function (t) {
            if (t.isEmpty())
              return this.children.isEmpty() ? e.Empty : new e(null, this.children);
            var n = t.getFront(), r = this.children.get(n);
            if (r) {
              var i = r.remove(t.popFront()), o = void 0;
              return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? e.Empty : new e(this.value, o);
            }
            return this;
          }, e.prototype.get = function (e) {
            if (e.isEmpty())
              return this.value;
            var t = e.getFront(), n = this.children.get(t);
            return n ? n.get(e.popFront()) : null;
          }, e.prototype.setTree = function (t, n) {
            if (t.isEmpty())
              return n;
            var r = t.getFront(), i = (this.children.get(r) || e.Empty).setTree(t.popFront(), n), o = void 0;
            return o = i.isEmpty() ? this.children.remove(r) : this.children.insert(r, i), new e(this.value, o);
          }, e.prototype.fold = function (e) {
            return this.fold_(j.Empty, e);
          }, e.prototype.fold_ = function (e, t) {
            var n = {};
            return this.children.inorderTraversal(function (r, i) {
              n[r] = i.fold_(e.child(r), t);
            }), t(e, this.value, n);
          }, e.prototype.findOnPath = function (e, t) {
            return this.findOnPath_(e, j.Empty, t);
          }, e.prototype.findOnPath_ = function (e, t, n) {
            var r = !!this.value && n(t, this.value);
            if (r)
              return r;
            if (e.isEmpty())
              return null;
            var i = e.getFront(), o = this.children.get(i);
            return o ? o.findOnPath_(e.popFront(), t.child(i), n) : null;
          }, e.prototype.foreachOnPath = function (e, t) {
            return this.foreachOnPath_(e, j.Empty, t);
          }, e.prototype.foreachOnPath_ = function (t, n, r) {
            if (t.isEmpty())
              return this;
            this.value && r(n, this.value);
            var i = t.getFront(), o = this.children.get(i);
            return o ? o.foreachOnPath_(t.popFront(), n.child(i), r) : e.Empty;
          }, e.prototype.foreach = function (e) {
            this.foreach_(j.Empty, e);
          }, e.prototype.foreach_ = function (e, t) {
            this.children.inorderTraversal(function (n, r) {
              r.foreach_(e.child(n), t);
            }), this.value && t(e, this.value);
          }, e.prototype.foreachChild = function (e) {
            this.children.inorderTraversal(function (t, n) {
              n.value && e(t, n.value);
            });
          }, e.Empty = new e(null), e;
        }(), yt = function () {
          function e(e, t) {
            this.source = e, this.path = t, this.type = ut.LISTEN_COMPLETE;
          }
          return e.prototype.operationForChild = function (t) {
            return this.path.isEmpty() ? new e(this.source, j.Empty) : new e(this.source, this.path.popFront());
          }, e;
        }(), vt = function () {
          function e(e, t, n) {
            this.source = e, this.path = t, this.snap = n, this.type = ut.OVERWRITE;
          }
          return e.prototype.operationForChild = function (t) {
            return this.path.isEmpty() ? new e(this.source, j.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap);
          }, e;
        }(), gt = function () {
          function e(e, t, n) {
            this.source = e, this.path = t, this.children = n, this.type = ut.MERGE;
          }
          return e.prototype.operationForChild = function (t) {
            if (this.path.isEmpty()) {
              var n = this.children.subtree(new j(t));
              return n.isEmpty() ? null : n.value ? new vt(this.source, j.Empty, n.value) : new e(this.source, j.Empty, n);
            }
            return a.assert(this.path.getFront() === t, 'Can\'t get a merge for a child not on the path of the operation'), new e(this.source, this.path.popFront(), this.children);
          }, e.prototype.toString = function () {
            return 'Operation(' + this.path + ': ' + this.source.toString() + ' merge: ' + this.children.toString() + ')';
          }, e;
        }(), mt = function () {
          function e(e, t, n) {
            this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n;
          }
          return e.prototype.isFullyInitialized = function () {
            return this.fullyInitialized_;
          }, e.prototype.isFiltered = function () {
            return this.filtered_;
          }, e.prototype.isCompleteForPath = function (e) {
            if (e.isEmpty())
              return this.isFullyInitialized() && !this.filtered_;
            var t = e.getFront();
            return this.isCompleteForChild(t);
          }, e.prototype.isCompleteForChild = function (e) {
            return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e);
          }, e.prototype.getNode = function () {
            return this.node_;
          }, e;
        }(), Ct = function () {
          function e(e, t) {
            this.eventCache_ = e, this.serverCache_ = t;
          }
          return e.prototype.updateEventSnap = function (t, n, r) {
            return new e(new mt(t, n, r), this.serverCache_);
          }, e.prototype.updateServerSnap = function (t, n, r) {
            return new e(this.eventCache_, new mt(t, n, r));
          }, e.prototype.getEventCache = function () {
            return this.eventCache_;
          }, e.prototype.getCompleteEventSnap = function () {
            return this.eventCache_.isFullyInitialized() ? this.eventCache_.getNode() : null;
          }, e.prototype.getServerCache = function () {
            return this.serverCache_;
          }, e.prototype.getCompleteServerSnap = function () {
            return this.serverCache_.isFullyInitialized() ? this.serverCache_.getNode() : null;
          }, e.Empty = new e(new mt(He.EMPTY_NODE, !1, !1), new mt(He.EMPTY_NODE, !1, !1)), e;
        }(), Et = function () {
          function e(e, t, n, r, i) {
            this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i;
          }
          return e.valueChange = function (t) {
            return new e(e.VALUE, t);
          }, e.childAddedChange = function (t, n) {
            return new e(e.CHILD_ADDED, n, t);
          }, e.childRemovedChange = function (t, n) {
            return new e(e.CHILD_REMOVED, n, t);
          }, e.childChangedChange = function (t, n, r) {
            return new e(e.CHILD_CHANGED, n, t, r);
          }, e.childMovedChange = function (t, n) {
            return new e(e.CHILD_MOVED, n, t);
          }, e.CHILD_ADDED = 'child_added', e.CHILD_REMOVED = 'child_removed', e.CHILD_CHANGED = 'child_changed', e.CHILD_MOVED = 'child_moved', e.VALUE = 'value', e;
        }(), wt = function () {
          function e(e) {
            this.index_ = e;
          }
          return e.prototype.updateChild = function (e, t, n, r, i, o) {
            a.assert(e.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
            var s = e.getImmediateChild(t);
            return s.getChild(r).equals(n.getChild(r)) && s.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(Et.childRemovedChange(t, s)) : a.assert(e.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node') : s.isEmpty() ? o.trackChildChange(Et.childAddedChange(t, n)) : o.trackChildChange(Et.childChangedChange(t, n, s))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_));
          }, e.prototype.updateFullNode = function (e, t, n) {
            return null != n && (e.isLeafNode() || e.forEachChild(xe, function (e, r) {
              t.hasChild(e) || n.trackChildChange(Et.childRemovedChange(e, r));
            }), t.isLeafNode() || t.forEachChild(xe, function (t, r) {
              if (e.hasChild(t)) {
                var i = e.getImmediateChild(t);
                i.equals(r) || n.trackChildChange(Et.childChangedChange(t, r, i));
              } else
                n.trackChildChange(Et.childAddedChange(t, r));
            })), t.withIndex(this.index_);
          }, e.prototype.updatePriority = function (e, t) {
            return e.isEmpty() ? He.EMPTY_NODE : e.updatePriority(t);
          }, e.prototype.filtersNodes = function () {
            return !1;
          }, e.prototype.getIndexedFilter = function () {
            return this;
          }, e.prototype.getIndex = function () {
            return this.index_;
          }, e;
        }(), Tt = function () {
          function e() {
            this.changeMap = new Map();
          }
          return e.prototype.trackChildChange = function (e) {
            var t = e.type, n = e.childName;
            a.assert(t === Et.CHILD_ADDED || t === Et.CHILD_CHANGED || t === Et.CHILD_REMOVED, 'Only child changes supported for tracking'), a.assert('.priority' !== n, 'Only non-priority child changes can be tracked.');
            var r = this.changeMap.get(n);
            if (r) {
              var i = r.type;
              if (t === Et.CHILD_ADDED && i === Et.CHILD_REMOVED)
                this.changeMap.set(n, Et.childChangedChange(n, e.snapshotNode, r.snapshotNode));
              else if (t === Et.CHILD_REMOVED && i === Et.CHILD_ADDED)
                this.changeMap.delete(n);
              else if (t === Et.CHILD_REMOVED && i === Et.CHILD_CHANGED)
                this.changeMap.set(n, Et.childRemovedChange(n, r.oldSnap));
              else if (t === Et.CHILD_CHANGED && i === Et.CHILD_ADDED)
                this.changeMap.set(n, Et.childAddedChange(n, e.snapshotNode));
              else {
                if (t !== Et.CHILD_CHANGED || i !== Et.CHILD_CHANGED)
                  throw a.assertionError('Illegal combination of changes: ' + e + ' occurred after ' + r);
                this.changeMap.set(n, Et.childChangedChange(n, e.snapshotNode, r.oldSnap));
              }
            } else
              this.changeMap.set(n, e);
          }, e.prototype.getChanges = function () {
            return Array.from(this.changeMap.values());
          }, e;
        }(), bt = new (function () {
          function e() {
          }
          return e.prototype.getCompleteChild = function (e) {
            return null;
          }, e.prototype.getChildAfterChild = function (e, t, n) {
            return null;
          }, e;
        }())(), St = function () {
          function e(e, t, n) {
            void 0 === n && (n = null), this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n;
          }
          return e.prototype.getCompleteChild = function (e) {
            var t = this.viewCache_.getEventCache();
            if (t.isCompleteForChild(e))
              return t.getNode().getImmediateChild(e);
            var n = null != this.optCompleteServerCache_ ? new mt(this.optCompleteServerCache_, !0, !1) : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(e, n);
          }, e.prototype.getChildAfterChild = function (e, t, n) {
            var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : this.viewCache_.getCompleteServerSnap(), i = this.writes_.calcIndexedSlice(r, t, 1, n, e);
            return 0 === i.length ? null : i[0];
          }, e;
        }(), It = function (e, t) {
          this.viewCache = e, this.changes = t;
        }, Nt = function () {
          function e(e) {
            this.filter_ = e;
          }
          return e.prototype.assertIndexed = function (e) {
            a.assert(e.getEventCache().getNode().isIndexed(this.filter_.getIndex()), 'Event snap not indexed'), a.assert(e.getServerCache().getNode().isIndexed(this.filter_.getIndex()), 'Server snap not indexed');
          }, e.prototype.applyOperation = function (t, n, r, i) {
            var o, s, h = new Tt();
            if (n.type === ut.OVERWRITE) {
              var u = n;
              u.source.fromUser ? o = this.applyUserOverwrite_(t, u.path, u.snap, r, i, h) : (a.assert(u.source.fromServer, 'Unknown source.'), s = u.source.tagged || t.getServerCache().isFiltered() && !u.path.isEmpty(), o = this.applyServerOverwrite_(t, u.path, u.snap, r, i, s, h));
            } else if (n.type === ut.MERGE) {
              var l = n;
              l.source.fromUser ? o = this.applyUserMerge_(t, l.path, l.children, r, i, h) : (a.assert(l.source.fromServer, 'Unknown source.'), s = l.source.tagged || t.getServerCache().isFiltered(), o = this.applyServerMerge_(t, l.path, l.children, r, i, s, h));
            } else if (n.type === ut.ACK_USER_WRITE) {
              var c = n;
              o = c.revert ? this.revertUserWrite_(t, c.path, r, i, h) : this.ackUserWrite_(t, c.path, c.affectedTree, r, i, h);
            } else {
              if (n.type !== ut.LISTEN_COMPLETE)
                throw a.assertionError('Unknown operation type: ' + n.type);
              o = this.listenComplete_(t, n.path, r, h);
            }
            var p = h.getChanges();
            return e.maybeAddValueEvent_(t, o, p), new It(o, p);
          }, e.maybeAddValueEvent_ = function (e, t, n) {
            var r = t.getEventCache();
            if (r.isFullyInitialized()) {
              var i = r.getNode().isLeafNode() || r.getNode().isEmpty(), o = e.getCompleteEventSnap();
              (n.length > 0 || !e.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(Et.valueChange(t.getCompleteEventSnap()));
            }
          }, e.prototype.generateEventCacheAfterServerEvent_ = function (e, t, n, r, i) {
            var o = e.getEventCache();
            if (null != n.shadowingWrite(t))
              return e;
            var s = void 0, h = void 0;
            if (t.isEmpty())
              if (a.assert(e.getServerCache().isFullyInitialized(), 'If change path is empty, we must have complete server data'), e.getServerCache().isFiltered()) {
                var u = e.getCompleteServerSnap(), l = u instanceof He ? u : He.EMPTY_NODE, c = n.calcCompleteEventChildren(l);
                s = this.filter_.updateFullNode(e.getEventCache().getNode(), c, i);
              } else {
                var p = n.calcCompleteEventCache(e.getCompleteServerSnap());
                s = this.filter_.updateFullNode(e.getEventCache().getNode(), p, i);
              }
            else {
              var d = t.getFront();
              if ('.priority' === d) {
                a.assert(1 === t.getLength(), 'Can\'t have a priority with additional path components');
                var f = o.getNode();
                h = e.getServerCache().getNode();
                var _ = n.calcEventCacheAfterServerOverwrite(t, f, h);
                s = null != _ ? this.filter_.updatePriority(f, _) : o.getNode();
              } else {
                var y = t.popFront(), v = void 0;
                if (o.isCompleteForChild(d)) {
                  h = e.getServerCache().getNode();
                  var g = n.calcEventCacheAfterServerOverwrite(t, o.getNode(), h);
                  v = null != g ? o.getNode().getImmediateChild(d).updateChild(y, g) : o.getNode().getImmediateChild(d);
                } else
                  v = n.calcCompleteChild(d, e.getServerCache());
                s = null != v ? this.filter_.updateChild(o.getNode(), d, v, y, r, i) : o.getNode();
              }
            }
            return e.updateEventSnap(s, o.isFullyInitialized() || t.isEmpty(), this.filter_.filtersNodes());
          }, e.prototype.applyServerOverwrite_ = function (e, t, n, r, i, o, s) {
            var a, h = e.getServerCache(), u = o ? this.filter_ : this.filter_.getIndexedFilter();
            if (t.isEmpty())
              a = u.updateFullNode(h.getNode(), n, null);
            else if (u.filtersNodes() && !h.isFiltered()) {
              var l = h.getNode().updateChild(t, n);
              a = u.updateFullNode(h.getNode(), l, null);
            } else {
              var c = t.getFront();
              if (!h.isCompleteForPath(t) && t.getLength() > 1)
                return e;
              var p = t.popFront(), d = h.getNode().getImmediateChild(c).updateChild(p, n);
              a = '.priority' === c ? u.updatePriority(h.getNode(), d) : u.updateChild(h.getNode(), c, d, p, bt, null);
            }
            var f = e.updateServerSnap(a, h.isFullyInitialized() || t.isEmpty(), u.filtersNodes()), _ = new St(r, f, i);
            return this.generateEventCacheAfterServerEvent_(f, t, r, _, s);
          }, e.prototype.applyUserOverwrite_ = function (e, t, n, r, i, o) {
            var s, a, h = e.getEventCache(), u = new St(r, e, i);
            if (t.isEmpty())
              a = this.filter_.updateFullNode(e.getEventCache().getNode(), n, o), s = e.updateEventSnap(a, !0, this.filter_.filtersNodes());
            else {
              var l = t.getFront();
              if ('.priority' === l)
                a = this.filter_.updatePriority(e.getEventCache().getNode(), n), s = e.updateEventSnap(a, h.isFullyInitialized(), h.isFiltered());
              else {
                var c = t.popFront(), p = h.getNode().getImmediateChild(l), d = void 0;
                if (c.isEmpty())
                  d = n;
                else {
                  var f = u.getCompleteChild(l);
                  d = null != f ? '.priority' === c.getBack() && f.getChild(c.parent()).isEmpty() ? f : f.updateChild(c, n) : He.EMPTY_NODE;
                }
                if (p.equals(d))
                  s = e;
                else {
                  var _ = this.filter_.updateChild(h.getNode(), l, d, c, u, o);
                  s = e.updateEventSnap(_, h.isFullyInitialized(), this.filter_.filtersNodes());
                }
              }
            }
            return s;
          }, e.cacheHasChild_ = function (e, t) {
            return e.getEventCache().isCompleteForChild(t);
          }, e.prototype.applyUserMerge_ = function (t, n, r, i, o, s) {
            var a = this, h = t;
            return r.foreach(function (r, u) {
              var l = n.child(r);
              e.cacheHasChild_(t, l.getFront()) && (h = a.applyUserOverwrite_(h, l, u, i, o, s));
            }), r.foreach(function (r, u) {
              var l = n.child(r);
              e.cacheHasChild_(t, l.getFront()) || (h = a.applyUserOverwrite_(h, l, u, i, o, s));
            }), h;
          }, e.prototype.applyMerge_ = function (e, t) {
            return t.foreach(function (t, n) {
              e = e.updateChild(t, n);
            }), e;
          }, e.prototype.applyServerMerge_ = function (e, t, n, r, i, o, s) {
            var a = this;
            if (e.getServerCache().getNode().isEmpty() && !e.getServerCache().isFullyInitialized())
              return e;
            var h, u = e;
            h = t.isEmpty() ? n : _t.Empty.setTree(t, n);
            var l = e.getServerCache().getNode();
            return h.children.inorderTraversal(function (t, n) {
              if (l.hasChild(t)) {
                var h = e.getServerCache().getNode().getImmediateChild(t), c = a.applyMerge_(h, n);
                u = a.applyServerOverwrite_(u, new j(t), c, r, i, o, s);
              }
            }), h.children.inorderTraversal(function (t, n) {
              var h = !e.getServerCache().isCompleteForChild(t) && null == n.value;
              if (!l.hasChild(t) && !h) {
                var c = e.getServerCache().getNode().getImmediateChild(t), p = a.applyMerge_(c, n);
                u = a.applyServerOverwrite_(u, new j(t), p, r, i, o, s);
              }
            }), u;
          }, e.prototype.ackUserWrite_ = function (e, t, n, r, i, o) {
            if (null != r.shadowingWrite(t))
              return e;
            var s = e.getServerCache().isFiltered(), a = e.getServerCache();
            if (null != n.value) {
              if (t.isEmpty() && a.isFullyInitialized() || a.isCompleteForPath(t))
                return this.applyServerOverwrite_(e, t, a.getNode().getChild(t), r, i, s, o);
              if (t.isEmpty()) {
                var h = _t.Empty;
                return a.getNode().forEachChild(we, function (e, t) {
                  h = h.set(new j(e), t);
                }), this.applyServerMerge_(e, t, h, r, i, s, o);
              }
              return e;
            }
            var u = _t.Empty;
            return n.foreach(function (e, n) {
              var r = t.child(e);
              a.isCompleteForPath(r) && (u = u.set(e, a.getNode().getChild(r)));
            }), this.applyServerMerge_(e, t, u, r, i, s, o);
          }, e.prototype.listenComplete_ = function (e, t, n, r) {
            var i = e.getServerCache(), o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() || t.isEmpty(), i.isFiltered());
            return this.generateEventCacheAfterServerEvent_(o, t, n, bt, r);
          }, e.prototype.revertUserWrite_ = function (e, t, n, r, i) {
            var o;
            if (null != n.shadowingWrite(t))
              return e;
            var s = new St(n, e, r), h = e.getEventCache().getNode(), u = void 0;
            if (t.isEmpty() || '.priority' === t.getFront()) {
              var l = void 0;
              if (e.getServerCache().isFullyInitialized())
                l = n.calcCompleteEventCache(e.getCompleteServerSnap());
              else {
                var c = e.getServerCache().getNode();
                a.assert(c instanceof He, 'serverChildren would be complete if leaf node'), l = n.calcCompleteEventChildren(c);
              }
              l = l, u = this.filter_.updateFullNode(h, l, i);
            } else {
              var p = t.getFront(), d = n.calcCompleteChild(p, e.getServerCache());
              null == d && e.getServerCache().isCompleteForChild(p) && (d = h.getImmediateChild(p)), (u = null != d ? this.filter_.updateChild(h, p, d, t.popFront(), s, i) : e.getEventCache().getNode().hasChild(p) ? this.filter_.updateChild(h, p, He.EMPTY_NODE, t.popFront(), s, i) : h).isEmpty() && e.getServerCache().isFullyInitialized() && (o = n.calcCompleteEventCache(e.getCompleteServerSnap())).isLeafNode() && (u = this.filter_.updateFullNode(u, o, i));
            }
            return o = e.getServerCache().isFullyInitialized() || null != n.shadowingWrite(j.Empty), e.updateEventSnap(u, o, this.filter_.filtersNodes());
          }, e;
        }(), Pt = function () {
          function e(e) {
            this.query_ = e, this.index_ = this.query_.getQueryParams().getIndex();
          }
          return e.prototype.generateEventsForChanges = function (e, t, n) {
            var r = this, i = [], o = [];
            return e.forEach(function (e) {
              e.type === Et.CHILD_CHANGED && r.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) && o.push(Et.childMovedChange(e.childName, e.snapshotNode));
            }), this.generateEventsForType_(i, Et.CHILD_REMOVED, e, n, t), this.generateEventsForType_(i, Et.CHILD_ADDED, e, n, t), this.generateEventsForType_(i, Et.CHILD_MOVED, o, n, t), this.generateEventsForType_(i, Et.CHILD_CHANGED, e, n, t), this.generateEventsForType_(i, Et.VALUE, e, n, t), i;
          }, e.prototype.generateEventsForType_ = function (e, t, n, r, i) {
            var o = this, s = n.filter(function (e) {
                return e.type === t;
              });
            s.sort(this.compareChanges_.bind(this)), s.forEach(function (t) {
              var n = o.materializeSingleChange_(t, i);
              r.forEach(function (r) {
                r.respondsTo(t.type) && e.push(r.createEvent(n, o.query_));
              });
            });
          }, e.prototype.materializeSingleChange_ = function (e, t) {
            return 'value' === e.type || 'child_removed' === e.type || (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.index_)), e;
          }, e.prototype.compareChanges_ = function (e, t) {
            if (null == e.childName || null == t.childName)
              throw a.assertionError('Should only compare child_ events.');
            var n = new me(e.childName, e.snapshotNode), r = new me(t.childName, t.snapshotNode);
            return this.index_.compare(n, r);
          }, e;
        }(), Rt = function () {
          function e(e, t) {
            this.query_ = e, this.eventRegistrations_ = [];
            var n = this.query_.getQueryParams(), r = new wt(n.getIndex()), i = n.getNodeFilter();
            this.processor_ = new Nt(i);
            var o = t.getServerCache(), s = t.getEventCache(), a = r.updateFullNode(He.EMPTY_NODE, o.getNode(), null), h = i.updateFullNode(He.EMPTY_NODE, s.getNode(), null), u = new mt(a, o.isFullyInitialized(), r.filtersNodes()), l = new mt(h, s.isFullyInitialized(), i.filtersNodes());
            this.viewCache_ = new Ct(l, u), this.eventGenerator_ = new Pt(this.query_);
          }
          return e.prototype.getQuery = function () {
            return this.query_;
          }, e.prototype.getServerCache = function () {
            return this.viewCache_.getServerCache().getNode();
          }, e.prototype.getCompleteServerCache = function (e) {
            var t = this.viewCache_.getCompleteServerSnap();
            return t && (this.query_.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null;
          }, e.prototype.isEmpty = function () {
            return 0 === this.eventRegistrations_.length;
          }, e.prototype.addEventRegistration = function (e) {
            this.eventRegistrations_.push(e);
          }, e.prototype.removeEventRegistration = function (e, t) {
            var n = [];
            if (t) {
              a.assert(null == e, 'A cancel should cancel all event registrations.');
              var r = this.query_.path;
              this.eventRegistrations_.forEach(function (e) {
                t = t;
                var i = e.createCancelEvent(t, r);
                i && n.push(i);
              });
            }
            if (e) {
              for (var i = [], o = 0; o < this.eventRegistrations_.length; ++o) {
                var s = this.eventRegistrations_[o];
                if (s.matches(e)) {
                  if (e.hasAnyCallback()) {
                    i = i.concat(this.eventRegistrations_.slice(o + 1));
                    break;
                  }
                } else
                  i.push(s);
              }
              this.eventRegistrations_ = i;
            } else
              this.eventRegistrations_ = [];
            return n;
          }, e.prototype.applyOperation = function (e, t, n) {
            e.type === ut.MERGE && null !== e.source.queryId && (a.assert(this.viewCache_.getCompleteServerSnap(), 'We should always have a full cache before handling merges'), a.assert(this.viewCache_.getCompleteEventSnap(), 'Missing event cache, even though we have a server cache'));
            var r = this.viewCache_, i = this.processor_.applyOperation(r, e, t, n);
            return this.processor_.assertIndexed(i.viewCache), a.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), 'Once a server snap is complete, it should never go back'), this.viewCache_ = i.viewCache, this.generateEventsForChanges_(i.changes, i.viewCache.getEventCache().getNode(), null);
          }, e.prototype.getInitialEvents = function (e) {
            var t = this.viewCache_.getEventCache(), n = [];
            t.getNode().isLeafNode() || t.getNode().forEachChild(xe, function (e, t) {
              n.push(Et.childAddedChange(e, t));
            });
            return t.isFullyInitialized() && n.push(Et.valueChange(t.getNode())), this.generateEventsForChanges_(n, t.getNode(), e);
          }, e.prototype.generateEventsForChanges_ = function (e, t, n) {
            var r = n ? [n] : this.eventRegistrations_;
            return this.eventGenerator_.generateEventsForChanges(e, t, r);
          }, e;
        }(), Dt = function () {
          function e() {
            this.views = new Map();
          }
          return Object.defineProperty(e, '__referenceConstructor', {
            get: function () {
              return a.assert(pt, 'Reference.ts has not been loaded'), pt;
            },
            set: function (e) {
              a.assert(!pt, '__referenceConstructor has already been defined'), pt = e;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.isEmpty = function () {
            return 0 === this.views.size;
          }, e.prototype.applyOperation = function (e, t, n) {
            var r, i, o = e.source.queryId;
            if (null !== o) {
              var h = this.views.get(o);
              return a.assert(null != h, 'SyncTree gave us an op for an invalid query.'), h.applyOperation(e, t, n);
            }
            var u = [];
            try {
              for (var l = s.__values(this.views.values()), c = l.next(); !c.done; c = l.next()) {
                h = c.value;
                u = u.concat(h.applyOperation(e, t, n));
              }
            } catch (e) {
              r = { error: e };
            } finally {
              try {
                c && !c.done && (i = l.return) && i.call(l);
              } finally {
                if (r)
                  throw r.error;
              }
            }
            return u;
          }, e.prototype.addEventRegistration = function (e, t, n, r, i) {
            var o = e.queryIdentifier(), s = this.views.get(o);
            if (!s) {
              var a = n.calcCompleteEventCache(i ? r : null), h = !1;
              a ? h = !0 : r instanceof He ? (a = n.calcCompleteEventChildren(r), h = !1) : (a = He.EMPTY_NODE, h = !1);
              var u = new Ct(new mt(a, h, !1), new mt(r, i, !1));
              s = new Rt(e, u), this.views.set(o, s);
            }
            return s.addEventRegistration(t), s.getInitialEvents(t);
          }, e.prototype.removeEventRegistration = function (t, n, r) {
            var i, o, a = t.queryIdentifier(), h = [], u = [], l = this.hasCompleteView();
            if ('default' === a)
              try {
                for (var c = s.__values(this.views.entries()), p = c.next(); !p.done; p = c.next()) {
                  var d = s.__read(p.value, 2), f = d[0], _ = d[1];
                  u = u.concat(_.removeEventRegistration(n, r)), _.isEmpty() && (this.views.delete(f), _.getQuery().getQueryParams().loadsAllData() || h.push(_.getQuery()));
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  p && !p.done && (o = c.return) && o.call(c);
                } finally {
                  if (i)
                    throw i.error;
                }
              }
            else
              (_ = this.views.get(a)) && (u = u.concat(_.removeEventRegistration(n, r)), _.isEmpty() && (this.views.delete(a), _.getQuery().getQueryParams().loadsAllData() || h.push(_.getQuery())));
            return l && !this.hasCompleteView() && h.push(new e.__referenceConstructor(t.repo, t.path)), {
              removed: h,
              events: u
            };
          }, e.prototype.getQueryViews = function () {
            var e, t, n = [];
            try {
              for (var r = s.__values(this.views.values()), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                o.getQuery().getQueryParams().loadsAllData() || n.push(o);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                i && !i.done && (t = r.return) && t.call(r);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            return n;
          }, e.prototype.getCompleteServerCache = function (e) {
            var t, n, r = null;
            try {
              for (var i = s.__values(this.views.values()), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                r = r || a.getCompleteServerCache(e);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
              } finally {
                if (t)
                  throw t.error;
              }
            }
            return r;
          }, e.prototype.viewForQuery = function (e) {
            if (e.getQueryParams().loadsAllData())
              return this.getCompleteView();
            var t = e.queryIdentifier();
            return this.views.get(t);
          }, e.prototype.viewExistsForQuery = function (e) {
            return null != this.viewForQuery(e);
          }, e.prototype.hasCompleteView = function () {
            return null != this.getCompleteView();
          }, e.prototype.getCompleteView = function () {
            var e, t;
            try {
              for (var n = s.__values(this.views.values()), r = n.next(); !r.done; r = n.next()) {
                var i = r.value;
                if (i.getQuery().getQueryParams().loadsAllData())
                  return i;
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                r && !r.done && (t = n.return) && t.call(n);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            return null;
          }, e;
        }(), xt = function () {
          function e(e) {
            this.writeTree_ = e;
          }
          return e.prototype.addWrite = function (t, n) {
            if (t.isEmpty())
              return new e(new _t(n));
            var r = this.writeTree_.findRootMostValueAndPath(t);
            if (null != r) {
              var i = r.path, o = r.value, s = j.relativePath(i, t);
              return o = o.updateChild(s, n), new e(this.writeTree_.set(i, o));
            }
            var a = new _t(n);
            return new e(this.writeTree_.setTree(t, a));
          }, e.prototype.addWrites = function (e, t) {
            var n = this;
            return W(t, function (t, r) {
              n = n.addWrite(e.child(t), r);
            }), n;
          }, e.prototype.removeWrite = function (t) {
            return t.isEmpty() ? e.Empty : new e(this.writeTree_.setTree(t, _t.Empty));
          }, e.prototype.hasCompleteWrite = function (e) {
            return null != this.getCompleteNode(e);
          }, e.prototype.getCompleteNode = function (e) {
            var t = this.writeTree_.findRootMostValueAndPath(e);
            return null != t ? this.writeTree_.get(t.path).getChild(j.relativePath(t.path, e)) : null;
          }, e.prototype.getCompleteChildren = function () {
            var e = [], t = this.writeTree_.value;
            return null != t ? t.isLeafNode() || t.forEachChild(xe, function (t, n) {
              e.push(new me(t, n));
            }) : this.writeTree_.children.inorderTraversal(function (t, n) {
              null != n.value && e.push(new me(t, n.value));
            }), e;
          }, e.prototype.childCompoundWrite = function (t) {
            if (t.isEmpty())
              return this;
            var n = this.getCompleteNode(t);
            return new e(null != n ? new _t(n) : this.writeTree_.subtree(t));
          }, e.prototype.isEmpty = function () {
            return this.writeTree_.isEmpty();
          }, e.prototype.apply = function (e) {
            return function e(t, n, r) {
              if (null != n.value)
                return r.updateChild(t, n.value);
              var i = null;
              return n.children.inorderTraversal(function (n, o) {
                '.priority' === n ? (a.assert(null !== o.value, 'Priority writes must always be leaf nodes'), i = o.value) : r = e(t.child(n), o, r);
              }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child('.priority'), i)), r;
            }(j.Empty, this.writeTree_, e);
          }, e.Empty = new e(new _t(null)), e;
        }();
      var kt = function () {
          function e() {
            this.visibleWrites_ = xt.Empty, this.allWrites_ = [], this.lastWriteId_ = -1;
          }
          return e.prototype.childWrites = function (e) {
            return new Ot(e, this);
          }, e.prototype.addOverwrite = function (e, t, n, r) {
            a.assert(n > this.lastWriteId_, 'Stacking an older write on top of newer ones'), void 0 === r && (r = !0), this.allWrites_.push({
              path: e,
              snap: t,
              writeId: n,
              visible: r
            }), r && (this.visibleWrites_ = this.visibleWrites_.addWrite(e, t)), this.lastWriteId_ = n;
          }, e.prototype.addMerge = function (e, t, n) {
            a.assert(n > this.lastWriteId_, 'Stacking an older merge on top of newer ones'), this.allWrites_.push({
              path: e,
              children: t,
              writeId: n,
              visible: !0
            }), this.visibleWrites_ = this.visibleWrites_.addWrites(e, t), this.lastWriteId_ = n;
          }, e.prototype.getWrite = function (e) {
            for (var t = 0; t < this.allWrites_.length; t++) {
              var n = this.allWrites_[t];
              if (n.writeId === e)
                return n;
            }
            return null;
          }, e.prototype.removeWrite = function (e) {
            var t = this, n = this.allWrites_.findIndex(function (t) {
                return t.writeId === e;
              });
            a.assert(n >= 0, 'removeWrite called with nonexistent writeId.');
            var r = this.allWrites_[n];
            this.allWrites_.splice(n, 1);
            for (var i = r.visible, o = !1, s = this.allWrites_.length - 1; i && s >= 0;) {
              var h = this.allWrites_[s];
              h.visible && (s >= n && this.recordContainsPath_(h, r.path) ? i = !1 : r.path.contains(h.path) && (o = !0)), s--;
            }
            if (i) {
              if (o)
                return this.resetTree_(), !0;
              r.snap ? this.visibleWrites_ = this.visibleWrites_.removeWrite(r.path) : W(r.children, function (e) {
                t.visibleWrites_ = t.visibleWrites_.removeWrite(r.path.child(e));
              });
              return !0;
            }
            return !1;
          }, e.prototype.getCompleteWriteData = function (e) {
            return this.visibleWrites_.getCompleteNode(e);
          }, e.prototype.calcCompleteEventCache = function (t, n, r, i) {
            if (r || i) {
              var o = this.visibleWrites_.childCompoundWrite(t);
              if (!i && o.isEmpty())
                return n;
              if (i || null != n || o.hasCompleteWrite(j.Empty)) {
                var s = e.layerTree_(this.allWrites_, function (e) {
                  return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path));
                }, t);
                u = n || He.EMPTY_NODE;
                return s.apply(u);
              }
              return null;
            }
            var a = this.visibleWrites_.getCompleteNode(t);
            if (null != a)
              return a;
            var h = this.visibleWrites_.childCompoundWrite(t);
            if (h.isEmpty())
              return n;
            if (null != n || h.hasCompleteWrite(j.Empty)) {
              var u = n || He.EMPTY_NODE;
              return h.apply(u);
            }
            return null;
          }, e.prototype.calcCompleteEventChildren = function (e, t) {
            var n = He.EMPTY_NODE, r = this.visibleWrites_.getCompleteNode(e);
            if (r)
              return r.isLeafNode() || r.forEachChild(xe, function (e, t) {
                n = n.updateImmediateChild(e, t);
              }), n;
            if (t) {
              var i = this.visibleWrites_.childCompoundWrite(e);
              return t.forEachChild(xe, function (e, t) {
                var r = i.childCompoundWrite(new j(e)).apply(t);
                n = n.updateImmediateChild(e, r);
              }), i.getCompleteChildren().forEach(function (e) {
                n = n.updateImmediateChild(e.name, e.node);
              }), n;
            }
            return this.visibleWrites_.childCompoundWrite(e).getCompleteChildren().forEach(function (e) {
              n = n.updateImmediateChild(e.name, e.node);
            }), n;
          }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n, r) {
            a.assert(n || r, 'Either existingEventSnap or existingServerSnap must exist');
            var i = e.child(t);
            if (this.visibleWrites_.hasCompleteWrite(i))
              return null;
            var o = this.visibleWrites_.childCompoundWrite(i);
            return o.isEmpty() ? r.getChild(t) : o.apply(r.getChild(t));
          }, e.prototype.calcCompleteChild = function (e, t, n) {
            var r = e.child(t), i = this.visibleWrites_.getCompleteNode(r);
            return null != i ? i : n.isCompleteForChild(t) ? this.visibleWrites_.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)) : null;
          }, e.prototype.shadowingWrite = function (e) {
            return this.visibleWrites_.getCompleteNode(e);
          }, e.prototype.calcIndexedSlice = function (e, t, n, r, i, o) {
            var s, a = this.visibleWrites_.childCompoundWrite(e), h = a.getCompleteNode(j.Empty);
            if (null != h)
              s = h;
            else {
              if (null == t)
                return [];
              s = a.apply(t);
            }
            if ((s = s.withIndex(o)).isEmpty() || s.isLeafNode())
              return [];
            for (var u = [], l = o.getCompare(), c = i ? s.getReverseIteratorFrom(n, o) : s.getIteratorFrom(n, o), p = c.getNext(); p && u.length < r;)
              0 !== l(p, n) && u.push(p), p = c.getNext();
            return u;
          }, e.prototype.recordContainsPath_ = function (e, t) {
            if (e.snap)
              return e.path.contains(t);
            for (var n in e.children)
              if (e.children.hasOwnProperty(n) && e.path.child(n).contains(t))
                return !0;
            return !1;
          }, e.prototype.resetTree_ = function () {
            this.visibleWrites_ = e.layerTree_(this.allWrites_, e.DefaultFilter_, j.Empty), this.allWrites_.length > 0 ? this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId : this.lastWriteId_ = -1;
          }, e.DefaultFilter_ = function (e) {
            return e.visible;
          }, e.layerTree_ = function (e, t, n) {
            for (var r = xt.Empty, i = 0; i < e.length; ++i) {
              var o = e[i];
              if (t(o)) {
                var s = o.path, h = void 0;
                if (o.snap)
                  n.contains(s) ? (h = j.relativePath(n, s), r = r.addWrite(h, o.snap)) : s.contains(n) && (h = j.relativePath(s, n), r = r.addWrite(j.Empty, o.snap.getChild(h)));
                else {
                  if (!o.children)
                    throw a.assertionError('WriteRecord should have .snap or .children');
                  if (n.contains(s))
                    h = j.relativePath(n, s), r = r.addWrites(h, o.children);
                  else if (s.contains(n))
                    if ((h = j.relativePath(s, n)).isEmpty())
                      r = r.addWrites(j.Empty, o.children);
                    else {
                      var u = a.safeGet(o.children, h.getFront());
                      if (u) {
                        var l = u.getChild(h.popFront());
                        r = r.addWrite(j.Empty, l);
                      }
                    }
                }
              }
            }
            return r;
          }, e;
        }(), Ot = function () {
          function e(e, t) {
            this.treePath_ = e, this.writeTree_ = t;
          }
          return e.prototype.calcCompleteEventCache = function (e, t, n) {
            return this.writeTree_.calcCompleteEventCache(this.treePath_, e, t, n);
          }, e.prototype.calcCompleteEventChildren = function (e) {
            return this.writeTree_.calcCompleteEventChildren(this.treePath_, e);
          }, e.prototype.calcEventCacheAfterServerOverwrite = function (e, t, n) {
            return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, e, t, n);
          }, e.prototype.shadowingWrite = function (e) {
            return this.writeTree_.shadowingWrite(this.treePath_.child(e));
          }, e.prototype.calcIndexedSlice = function (e, t, n, r, i) {
            return this.writeTree_.calcIndexedSlice(this.treePath_, e, t, n, r, i);
          }, e.prototype.calcCompleteChild = function (e, t) {
            return this.writeTree_.calcCompleteChild(this.treePath_, e, t);
          }, e.prototype.child = function (t) {
            return new e(this.treePath_.child(t), this.writeTree_);
          }, e;
        }(), Ft = function () {
          function e(e) {
            this.listenProvider_ = e, this.syncPointTree_ = _t.Empty, this.pendingWriteTree_ = new kt(), this.tagToQueryMap = new Map(), this.queryToTagMap = new Map();
          }
          return e.prototype.applyUserOverwrite = function (e, t, n, r) {
            return this.pendingWriteTree_.addOverwrite(e, t, n, r), r ? this.applyOperationToSyncPoints_(new vt(dt.User, e, t)) : [];
          }, e.prototype.applyUserMerge = function (e, t, n) {
            this.pendingWriteTree_.addMerge(e, t, n);
            var r = _t.fromObject(t);
            return this.applyOperationToSyncPoints_(new gt(dt.User, e, r));
          }, e.prototype.ackUserWrite = function (e, t) {
            void 0 === t && (t = !1);
            var n = this.pendingWriteTree_.getWrite(e);
            if (this.pendingWriteTree_.removeWrite(e)) {
              var r = _t.Empty;
              return null != n.snap ? r = r.set(j.Empty, !0) : W(n.children, function (e, t) {
                r = r.set(new j(e), t);
              }), this.applyOperationToSyncPoints_(new ft(n.path, r, t));
            }
            return [];
          }, e.prototype.applyServerOverwrite = function (e, t) {
            return this.applyOperationToSyncPoints_(new vt(dt.Server, e, t));
          }, e.prototype.applyServerMerge = function (e, t) {
            var n = _t.fromObject(t);
            return this.applyOperationToSyncPoints_(new gt(dt.Server, e, n));
          }, e.prototype.applyListenComplete = function (e) {
            return this.applyOperationToSyncPoints_(new yt(dt.Server, e));
          }, e.prototype.applyTaggedQueryOverwrite = function (t, n, r) {
            var i = this.queryKeyForTag_(r);
            if (null != i) {
              var o = e.parseQueryKey_(i), s = o.path, a = o.queryId, h = j.relativePath(s, t), u = new vt(dt.forServerTaggedQuery(a), h, n);
              return this.applyTaggedOperation_(s, u);
            }
            return [];
          }, e.prototype.applyTaggedQueryMerge = function (t, n, r) {
            var i = this.queryKeyForTag_(r);
            if (i) {
              var o = e.parseQueryKey_(i), s = o.path, a = o.queryId, h = j.relativePath(s, t), u = _t.fromObject(n), l = new gt(dt.forServerTaggedQuery(a), h, u);
              return this.applyTaggedOperation_(s, l);
            }
            return [];
          }, e.prototype.applyTaggedListenComplete = function (t, n) {
            var r = this.queryKeyForTag_(n);
            if (r) {
              var i = e.parseQueryKey_(r), o = i.path, s = i.queryId, a = j.relativePath(o, t), h = new yt(dt.forServerTaggedQuery(s), a);
              return this.applyTaggedOperation_(o, h);
            }
            return [];
          }, e.prototype.addEventRegistration = function (t, n) {
            var r = t.path, i = null, o = !1;
            this.syncPointTree_.foreachOnPath(r, function (e, t) {
              var n = j.relativePath(e, r);
              i = i || t.getCompleteServerCache(n), o = o || t.hasCompleteView();
            });
            var s, h = this.syncPointTree_.get(r);
            (h ? (o = o || h.hasCompleteView(), i = i || h.getCompleteServerCache(j.Empty)) : (h = new Dt(), this.syncPointTree_ = this.syncPointTree_.set(r, h)), null != i) ? s = !0 : (s = !1, i = He.EMPTY_NODE, this.syncPointTree_.subtree(r).foreachChild(function (e, t) {
              var n = t.getCompleteServerCache(j.Empty);
              n && (i = i.updateImmediateChild(e, n));
            }));
            var u = h.viewExistsForQuery(t);
            if (!u && !t.getQueryParams().loadsAllData()) {
              var l = e.makeQueryKey_(t);
              a.assert(!this.queryToTagMap.has(l), 'View does not exist, but we have a tag');
              var c = e.getNextQueryTag_();
              this.queryToTagMap.set(l, c), this.tagToQueryMap.set(c, l);
            }
            var p = this.pendingWriteTree_.childWrites(r), d = h.addEventRegistration(t, n, p, i, s);
            if (!u && !o) {
              var f = h.viewForQuery(t);
              d = d.concat(this.setupListener_(t, f));
            }
            return d;
          }, e.prototype.removeEventRegistration = function (t, n, r) {
            var i = this, o = t.path, s = this.syncPointTree_.get(o), a = [];
            if (s && ('default' === t.queryIdentifier() || s.viewExistsForQuery(t))) {
              var h = s.removeEventRegistration(t, n, r);
              s.isEmpty() && (this.syncPointTree_ = this.syncPointTree_.remove(o));
              var u = h.removed;
              a = h.events;
              var l = -1 !== u.findIndex(function (e) {
                  return e.getQueryParams().loadsAllData();
                }), c = this.syncPointTree_.findOnPath(o, function (e, t) {
                  return t.hasCompleteView();
                });
              if (l && !c) {
                var p = this.syncPointTree_.subtree(o);
                if (!p.isEmpty())
                  for (var d = this.collectDistinctViewsForSubTree_(p), f = 0; f < d.length; ++f) {
                    var _ = d[f], y = _.getQuery(), v = this.createListenerForView_(_);
                    this.listenProvider_.startListening(e.queryForListening_(y), this.tagForQuery_(y), v.hashFn, v.onComplete);
                  }
              }
              if (!c && u.length > 0 && !r)
                if (l) {
                  this.listenProvider_.stopListening(e.queryForListening_(t), null);
                } else
                  u.forEach(function (t) {
                    var n = i.queryToTagMap.get(e.makeQueryKey_(t));
                    i.listenProvider_.stopListening(e.queryForListening_(t), n);
                  });
              this.removeTags_(u);
            }
            return a;
          }, e.prototype.calcCompleteEventCache = function (e, t) {
            var n = this.pendingWriteTree_, r = this.syncPointTree_.findOnPath(e, function (t, n) {
                var r = j.relativePath(t, e), i = n.getCompleteServerCache(r);
                if (i)
                  return i;
              });
            return n.calcCompleteEventCache(e, r, t, !0);
          }, e.prototype.collectDistinctViewsForSubTree_ = function (e) {
            return e.fold(function (e, t, n) {
              if (t && t.hasCompleteView())
                return [t.getCompleteView()];
              var r = [];
              return t && (r = t.getQueryViews()), W(n, function (e, t) {
                r = r.concat(t);
              }), r;
            });
          }, e.prototype.removeTags_ = function (t) {
            for (var n = 0; n < t.length; ++n) {
              var r = t[n];
              if (!r.getQueryParams().loadsAllData()) {
                var i = e.makeQueryKey_(r), o = this.queryToTagMap.get(i);
                this.queryToTagMap.delete(i), this.tagToQueryMap.delete(o);
              }
            }
          }, e.queryForListening_ = function (e) {
            return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e;
          }, e.prototype.setupListener_ = function (t, n) {
            var r = t.path, i = this.tagForQuery_(t), o = this.createListenerForView_(n), s = this.listenProvider_.startListening(e.queryForListening_(t), i, o.hashFn, o.onComplete), h = this.syncPointTree_.subtree(r);
            if (i)
              a.assert(!h.value.hasCompleteView(), 'If we\'re adding a query, it shouldn\'t be shadowed');
            else
              for (var u = h.fold(function (e, t, n) {
                    if (!e.isEmpty() && t && t.hasCompleteView())
                      return [t.getCompleteView().getQuery()];
                    var r = [];
                    return t && (r = r.concat(t.getQueryViews().map(function (e) {
                      return e.getQuery();
                    }))), W(n, function (e, t) {
                      r = r.concat(t);
                    }), r;
                  }), l = 0; l < u.length; ++l) {
                var c = u[l];
                this.listenProvider_.stopListening(e.queryForListening_(c), this.tagForQuery_(c));
              }
            return s;
          }, e.prototype.createListenerForView_ = function (e) {
            var t = this, n = e.getQuery(), r = this.tagForQuery_(n);
            return {
              hashFn: function () {
                return (e.getServerCache() || He.EMPTY_NODE).hash();
              },
              onComplete: function (e) {
                if ('ok' === e)
                  return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path);
                var i = function (e, t) {
                  var n = 'Unknown Error';
                  'too_big' === e ? n = 'The data requested exceeds the maximum size that can be accessed with a single request.' : 'permission_denied' === e ? n = 'Client doesn\'t have permission to access the desired data.' : 'unavailable' === e && (n = 'The service is unavailable');
                  var r = new Error(e + ' at ' + t.path.toString() + ': ' + n);
                  return r.code = e.toUpperCase(), r;
                }(e, n);
                return t.removeEventRegistration(n, null, i);
              }
            };
          }, e.makeQueryKey_ = function (e) {
            return e.path.toString() + '$' + e.queryIdentifier();
          }, e.parseQueryKey_ = function (e) {
            var t = e.indexOf('$');
            return a.assert(-1 !== t && t < e.length - 1, 'Bad queryKey.'), {
              queryId: e.substr(t + 1),
              path: new j(e.substr(0, t))
            };
          }, e.prototype.queryKeyForTag_ = function (e) {
            return this.tagToQueryMap.get(e);
          }, e.prototype.tagForQuery_ = function (t) {
            var n = e.makeQueryKey_(t);
            return this.queryToTagMap.get(n);
          }, e.getNextQueryTag_ = function () {
            return e.nextQueryTag_++;
          }, e.prototype.applyTaggedOperation_ = function (e, t) {
            var n = this.syncPointTree_.get(e);
            a.assert(n, 'Missing sync point for query tag that we\'re tracking');
            var r = this.pendingWriteTree_.childWrites(e);
            return n.applyOperation(t, r, null);
          }, e.prototype.applyOperationToSyncPoints_ = function (e) {
            return this.applyOperationHelper_(e, this.syncPointTree_, null, this.pendingWriteTree_.childWrites(j.Empty));
          }, e.prototype.applyOperationHelper_ = function (e, t, n, r) {
            if (e.path.isEmpty())
              return this.applyOperationDescendantsHelper_(e, t, n, r);
            var i = t.get(j.Empty);
            null == n && null != i && (n = i.getCompleteServerCache(j.Empty));
            var o = [], s = e.path.getFront(), a = e.operationForChild(s), h = t.children.get(s);
            if (h && a) {
              var u = n ? n.getImmediateChild(s) : null, l = r.child(s);
              o = o.concat(this.applyOperationHelper_(a, h, u, l));
            }
            return i && (o = o.concat(i.applyOperation(e, r, n))), o;
          }, e.prototype.applyOperationDescendantsHelper_ = function (e, t, n, r) {
            var i = this, o = t.get(j.Empty);
            null == n && null != o && (n = o.getCompleteServerCache(j.Empty));
            var s = [];
            return t.children.inorderTraversal(function (t, o) {
              var a = n ? n.getImmediateChild(t) : null, h = r.child(t), u = e.operationForChild(t);
              u && (s = s.concat(i.applyOperationDescendantsHelper_(u, o, a, h)));
            }), o && (s = s.concat(o.applyOperation(e, r, n))), s;
          }, e.nextQueryTag_ = 1, e;
        }(), At = function () {
          function e() {
            this.rootNode_ = He.EMPTY_NODE;
          }
          return e.prototype.getNode = function (e) {
            return this.rootNode_.getChild(e);
          }, e.prototype.updateSnapshot = function (e, t) {
            this.rootNode_ = this.rootNode_.updateChild(e, t);
          }, e;
        }(), Lt = function () {
          function e() {
            this.counters_ = {};
          }
          return e.prototype.incrementCounter = function (e, t) {
            void 0 === t && (t = 1), a.contains(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t;
          }, e.prototype.get = function () {
            return a.deepCopy(this.counters_);
          }, e;
        }(), Mt = function () {
          function e() {
          }
          return e.getCollection = function (e) {
            var t = e.toString();
            return this.collections_[t] || (this.collections_[t] = new Lt()), this.collections_[t];
          }, e.getOrCreateReporter = function (e, t) {
            var n = e.toString();
            return this.reporters_[n] || (this.reporters_[n] = t()), this.reporters_[n];
          }, e.collections_ = {}, e.reporters_ = {}, e;
        }(), Wt = function () {
          function e(e) {
            this.collection_ = e, this.last_ = null;
          }
          return e.prototype.get = function () {
            var e = this.collection_.get(), t = s.__assign({}, e);
            return this.last_ && W(this.last_, function (e, n) {
              t[e] = t[e] - n;
            }), this.last_ = e, t;
          }, e;
        }(), Qt = function () {
          function e(e, t) {
            this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Wt(e);
            var n = 10000 + 20000 * Math.random();
            H(this.reportStats_.bind(this), Math.floor(n));
          }
          return e.prototype.includeStat = function (e) {
            this.statsToReport_[e] = !0;
          }, e.prototype.reportStats_ = function () {
            var e = this, t = this.statsListener_.get(), n = {}, r = !1;
            W(t, function (t, i) {
              i > 0 && a.contains(e.statsToReport_, t) && (n[t] = i, r = !0);
            }), r && this.server_.reportStats(n), H(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 300000));
          }, e;
        }(), qt = function () {
          function e() {
            this.eventLists_ = [], this.recursionDepth_ = 0;
          }
          return e.prototype.queueEvents = function (e) {
            for (var t = null, n = 0; n < e.length; n++) {
              var r = e[n], i = r.getPath();
              null === t || i.equals(t.getPath()) || (this.eventLists_.push(t), t = null), null === t && (t = new Ut(i)), t.add(r);
            }
            t && this.eventLists_.push(t);
          }, e.prototype.raiseEventsAtPath = function (e, t) {
            this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function (t) {
              return t.equals(e);
            });
          }, e.prototype.raiseEventsForChangedPath = function (e, t) {
            this.queueEvents(t), this.raiseQueuedEventsMatchingPredicate_(function (t) {
              return t.contains(e) || e.contains(t);
            });
          }, e.prototype.raiseQueuedEventsMatchingPredicate_ = function (e) {
            this.recursionDepth_++;
            for (var t = !0, n = 0; n < this.eventLists_.length; n++) {
              var r = this.eventLists_[n];
              if (r)
                e(r.getPath()) ? (this.eventLists_[n].raise(), this.eventLists_[n] = null) : t = !1;
            }
            t && (this.eventLists_ = []), this.recursionDepth_--;
          }, e;
        }(), Ut = function () {
          function e(e) {
            this.path_ = e, this.events_ = [];
          }
          return e.prototype.add = function (e) {
            this.events_.push(e);
          }, e.prototype.raise = function () {
            for (var e = 0; e < this.events_.length; e++) {
              var t = this.events_[e];
              if (null !== t) {
                this.events_[e] = null;
                var n = t.getEventRunner();
                w && S('event: ' + t.toString()), V(n);
              }
            }
          }, e.prototype.getPath = function () {
            return this.path_;
          }, e;
        }(), Vt = function () {
          function e(e) {
            this.allowedEvents_ = e, this.listeners_ = {}, a.assert(Array.isArray(e) && e.length > 0, 'Requires a non-empty array');
          }
          return e.prototype.trigger = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            if (Array.isArray(this.listeners_[e]))
              for (var r = s.__spread(this.listeners_[e]), i = 0; i < r.length; i++)
                r[i].callback.apply(r[i].context, t);
          }, e.prototype.on = function (e, t, n) {
            this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
              callback: t,
              context: n
            });
            var r = this.getInitialEvent(e);
            r && t.apply(n, r);
          }, e.prototype.off = function (e, t, n) {
            this.validateEventType_(e);
            for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
              if (r[i].callback === t && (!n || n === r[i].context))
                return void r.splice(i, 1);
          }, e.prototype.validateEventType_ = function (e) {
            a.assert(this.allowedEvents_.find(function (t) {
              return t === e;
            }), 'Unknown event: ' + e);
          }, e;
        }(), Ht = function (e) {
          function t() {
            var t, n, r = e.call(this, ['visible']) || this;
            return 'undefined' != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = 'visibilitychange', t = 'hidden') : void 0 !== document.mozHidden ? (n = 'mozvisibilitychange', t = 'mozHidden') : void 0 !== document.msHidden ? (n = 'msvisibilitychange', t = 'msHidden') : void 0 !== document.webkitHidden && (n = 'webkitvisibilitychange', t = 'webkitHidden')), r.visible_ = !0, n && document.addEventListener(n, function () {
              var e = !document[t];
              e !== r.visible_ && (r.visible_ = e, r.trigger('visible', e));
            }, !1), r;
          }
          return s.__extends(t, e), t.getInstance = function () {
            return new t();
          }, t.prototype.getInitialEvent = function (e) {
            return a.assert('visible' === e, 'Unknown event type: ' + e), [this.visible_];
          }, t;
        }(Vt), jt = function (e) {
          function t() {
            var t = e.call(this, ['online']) || this;
            return t.online_ = !0, 'undefined' == typeof window || void 0 === window.addEventListener || a.isMobileCordova() || (window.addEventListener('online', function () {
              t.online_ || (t.online_ = !0, t.trigger('online', !0));
            }, !1), window.addEventListener('offline', function () {
              t.online_ && (t.online_ = !1, t.trigger('online', !1));
            }, !1)), t;
          }
          return s.__extends(t, e), t.getInstance = function () {
            return new t();
          }, t.prototype.getInitialEvent = function (e) {
            return a.assert('online' === e, 'Unknown event type: ' + e), [this.online_];
          }, t.prototype.currentlyOnline = function () {
            return this.online_;
          }, t;
        }(Vt), Bt = function () {
          function e(e) {
            this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
          }
          return e.prototype.closeAfter = function (e, t) {
            this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
          }, e.prototype.handleResponse = function (e, t) {
            var n = this;
            this.pendingResponses[e] = t;
            for (var r = function () {
                  var e = i.pendingResponses[i.currentResponseNum];
                  delete i.pendingResponses[i.currentResponseNum];
                  for (var t = function (t) {
                        e[t] && V(function () {
                          n.onMessage_(e[t]);
                        });
                      }, r = 0; r < e.length; ++r)
                    t(r);
                  if (i.currentResponseNum === i.closeAfterResponse)
                    return i.onClose && (i.onClose(), i.onClose = null), 'break';
                  i.currentResponseNum++;
                }, i = this; this.pendingResponses[this.currentResponseNum];) {
              if ('break' === r())
                break;
            }
          }, e;
        }(), Kt = function () {
          function e(e, t, n, r, i) {
            this.connId = e, this.repoInfo = t, this.applicationId = n, this.transportSessionId = r, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = I(e), this.stats_ = Mt.getCollection(t), this.urlFn = function (e) {
              return t.connectionURL('long_polling', e);
            };
          }
          return e.prototype.open = function (e, t) {
            var n = this;
            this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new Bt(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function () {
              n.log_('Timed out trying to connect.'), n.onClosed_(), n.connectTimeoutTimer_ = null;
            }, Math.floor(30000)), function (e) {
              if (a.isNodeSdk() || 'complete' === document.readyState)
                e();
              else {
                var t = !1, n = function n() {
                    document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10));
                  };
                document.addEventListener ? (document.addEventListener('DOMContentLoaded', n, !1), window.addEventListener('load', n, !1)) : document.attachEvent && (document.attachEvent('onreadystatechange', function () {
                  'complete' === document.readyState && n();
                }), window.attachEvent('onload', n));
              }
            }(function () {
              if (!n.isClosed_) {
                n.scriptTagHolder = new Yt(function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var r = s.__read(e, 5), i = r[0], o = r[1], a = r[2];
                  r[3], r[4];
                  if (n.incrementIncomingBytes_(e), n.scriptTagHolder)
                    if (n.connectTimeoutTimer_ && (clearTimeout(n.connectTimeoutTimer_), n.connectTimeoutTimer_ = null), n.everConnected_ = !0, 'start' === i)
                      n.id = o, n.password = a;
                    else {
                      if ('close' !== i)
                        throw new Error('Unrecognized command received: ' + i);
                      o ? (n.scriptTagHolder.sendNewPolls = !1, n.myPacketOrderer.closeAfter(o, function () {
                        n.onClosed_();
                      })) : n.onClosed_();
                    }
                }, function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  var r = s.__read(e, 2), i = r[0], o = r[1];
                  n.incrementIncomingBytes_(e), n.myPacketOrderer.handleResponse(i, o);
                }, function () {
                  n.onClosed_();
                }, n.urlFn);
                var e = { start: 't' };
                e.ser = Math.floor(100000000 * Math.random()), n.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = n.scriptTagHolder.uniqueCallbackIdentifier), e.v = '5', n.transportSessionId && (e.s = n.transportSessionId), n.lastSessionId && (e.ls = n.lastSessionId), n.applicationId && (e.p = n.applicationId), 'undefined' != typeof location && location.href && -1 !== location.href.indexOf('firebaseio.com') && (e.r = 'f');
                var t = n.urlFn(e);
                n.log_('Connecting via long-poll to ' + t), n.scriptTagHolder.addTag(t, function () {
                });
              }
            });
          }, e.prototype.start = function () {
            this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password);
          }, e.forceAllow = function () {
            e.forceAllow_ = !0;
          }, e.forceDisallow = function () {
            e.forceDisallow_ = !0;
          }, e.isAvailable = function () {
            return !a.isNodeSdk() && (!!e.forceAllow_ || !(e.forceDisallow_ || 'undefined' == typeof document || null == document.createElement || 'object' === ('undefined' == typeof window ? 'undefined' : i(window)) && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || 'object' === ('undefined' == typeof Windows ? 'undefined' : i(Windows)) && 'object' === i(Windows.UI)));
          }, e.prototype.markConnectionHealthy = function () {
          }, e.prototype.shutdown_ = function () {
            this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null);
          }, e.prototype.onClosed_ = function () {
            this.isClosed_ || (this.log_('Longpoll is closing itself'), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null));
          }, e.prototype.close = function () {
            this.isClosed_ || (this.log_('Longpoll is being closed.'), this.shutdown_());
          }, e.prototype.send = function (e) {
            var t = a.stringify(e);
            this.bytesSent += t.length, this.stats_.incrementCounter('bytes_sent', t.length);
            for (var n = a.base64Encode(t), r = M(n, 1840), i = 0; i < r.length; i++)
              this.scriptTagHolder.enqueueSegment(this.curSegmentNum, r.length, r[i]), this.curSegmentNum++;
          }, e.prototype.addDisconnectPingFrame = function (e, t) {
            if (!a.isNodeSdk()) {
              this.myDisconnFrame = document.createElement('iframe');
              var n = { dframe: 't' };
              n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = 'none', document.body.appendChild(this.myDisconnFrame);
            }
          }, e.prototype.incrementIncomingBytes_ = function (e) {
            var t = a.stringify(e).length;
            this.bytesReceived += t, this.stats_.incrementCounter('bytes_received', t);
          }, e;
        }(), Yt = function () {
          function e(t, n, r, i) {
            if (this.onDisconnect = r, this.urlFn = i, this.outstandingRequests = new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(100000000 * Math.random()), this.sendNewPolls = !0, a.isNodeSdk())
              this.commandCB = t, this.onMessageCB = n;
            else {
              this.uniqueCallbackIdentifier = m(), window['pLPCommand' + this.uniqueCallbackIdentifier] = t, window['pRTLPCB' + this.uniqueCallbackIdentifier] = n, this.myIFrame = e.createIFrame_();
              var o = '';
              if (this.myIFrame.src && 'javascript:' === this.myIFrame.src.substr(0, 'javascript:'.length))
                o = '<script>document.domain="' + document.domain + '";</script>';
              var s = '<html><body>' + o + '</body></html>';
              try {
                this.myIFrame.doc.open(), this.myIFrame.doc.write(s), this.myIFrame.doc.close();
              } catch (e) {
                S('frame writing exception'), e.stack && S(e.stack), S(e);
              }
            }
          }
          return e.createIFrame_ = function () {
            var e = document.createElement('iframe');
            if (e.style.display = 'none', !document.body)
              throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
            document.body.appendChild(e);
            try {
              e.contentWindow.document || S('No IE domain setting required');
            } catch (n) {
              var t = document.domain;
              e.src = 'javascript:void((function(){document.open();document.domain=\'' + t + '\';document.close();})())';
            }
            return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e;
          }, e.prototype.close = function () {
            var e = this;
            this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = '', setTimeout(function () {
              null !== e.myIFrame && (document.body.removeChild(e.myIFrame), e.myIFrame = null);
            }, Math.floor(0)));
            var t = this.onDisconnect;
            t && (this.onDisconnect = null, t());
          }, e.prototype.startLongPoll = function (e, t) {
            for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
          }, e.prototype.newRequest_ = function () {
            if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
              this.currentSerial++;
              var e = {};
              e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
              for (var t = this.urlFn(e), n = '', r = 0; this.pendingSegs.length > 0;) {
                if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870))
                  break;
                var i = this.pendingSegs.shift();
                n = n + '&seg' + r + '=' + i.seg + '&ts' + r + '=' + i.ts + '&d' + r + '=' + i.d, r++;
              }
              return t += n, this.addLongPollTag_(t, this.currentSerial), !0;
            }
            return !1;
          }, e.prototype.enqueueSegment = function (e, t, n) {
            this.pendingSegs.push({
              seg: e,
              ts: t,
              d: n
            }), this.alive && this.newRequest_();
          }, e.prototype.addLongPollTag_ = function (e, t) {
            var n = this;
            this.outstandingRequests.add(t);
            var r = function () {
                n.outstandingRequests.delete(t), n.newRequest_();
              }, i = setTimeout(r, Math.floor(25000));
            this.addTag(e, function () {
              clearTimeout(i), r();
            });
          }, e.prototype.addTag = function (e, t) {
            var n = this;
            a.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(function () {
              try {
                if (!n.sendNewPolls)
                  return;
                var r = n.myIFrame.doc.createElement('script');
                r.type = 'text/javascript', r.async = !0, r.src = e, r.onload = r.onreadystatechange = function () {
                  var e = r.readyState;
                  e && 'loaded' !== e && 'complete' !== e || (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), t());
                }, r.onerror = function () {
                  S('Long-poll script failed to load: ' + e), n.sendNewPolls = !1, n.close();
                }, n.myIFrame.doc.body.appendChild(r);
              } catch (e) {
              }
            }, Math.floor(1));
          }, e;
        }(), zt = '';
      var Gt = null;
      'undefined' != typeof MozWebSocket ? Gt = MozWebSocket : 'undefined' != typeof WebSocket && (Gt = WebSocket);
      var Xt = function () {
          function e(t, n, r, i, o) {
            this.connId = t, this.applicationId = r, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = I(this.connId), this.stats_ = Mt.getCollection(n), this.connURL = e.connectionURL_(n, i, o), this.nodeAdmin = n.nodeAdmin;
          }
          return e.connectionURL_ = function (e, t, n) {
            var r = { v: '5' };
            return !a.isNodeSdk() && 'undefined' != typeof location && location.href && -1 !== location.href.indexOf('firebaseio.com') && (r.r = 'f'), t && (r.s = t), n && (r.ls = n), e.connectionURL('websocket', r);
          }, e.prototype.open = function (e, t) {
            var n = this;
            this.onDisconnect = t, this.onMessage = e, this.log_('Websocket connecting to ' + this.connURL), this.everConnected_ = !1, y.set('previous_websocket_failure', !0);
            try {
              if (a.isNodeSdk()) {
                var i = this.nodeAdmin ? 'AdminNode' : 'Node', o = {
                    headers: {
                      'User-Agent': 'Firebase/5/' + zt + '/' + r.platform + '/' + i,
                      'X-Firebase-GMPID': this.applicationId || ''
                    }
                  }, s = r.env, h = 0 === this.connURL.indexOf('wss://') ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;
                h && (o.proxy = { origin: h }), this.mySock = new Gt(this.connURL, [], o);
              } else {
                o = { headers: { 'X-Firebase-GMPID': this.applicationId || '' } };
                this.mySock = new Gt(this.connURL, [], o);
              }
            } catch (e) {
              this.log_('Error instantiating WebSocket.');
              var u = e.message || e.data;
              return u && this.log_(u), void this.onClosed_();
            }
            this.mySock.onopen = function () {
              n.log_('Websocket connected.'), n.everConnected_ = !0;
            }, this.mySock.onclose = function () {
              n.log_('Websocket connection was disconnected.'), n.mySock = null, n.onClosed_();
            }, this.mySock.onmessage = function (e) {
              n.handleIncomingFrame(e);
            }, this.mySock.onerror = function (e) {
              n.log_('WebSocket error.  Closing connection.');
              var t = e.message || e.data;
              t && n.log_(t), n.onClosed_();
            };
          }, e.prototype.start = function () {
          }, e.forceDisallow = function () {
            e.forceDisallow_ = !0;
          }, e.isAvailable = function () {
            var t = !1;
            if ('undefined' != typeof navigator && navigator.userAgent) {
              var n = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);
              n && n.length > 1 && parseFloat(n[1]) < 4.4 && (t = !0);
            }
            return !t && null !== Gt && !e.forceDisallow_;
          }, e.previouslyFailed = function () {
            return y.isInMemoryStorage || !0 === y.get('previous_websocket_failure');
          }, e.prototype.markConnectionHealthy = function () {
            y.remove('previous_websocket_failure');
          }, e.prototype.appendFrame_ = function (e) {
            if (this.frames.push(e), this.frames.length === this.totalFrames) {
              var t = this.frames.join('');
              this.frames = null;
              var n = a.jsonEval(t);
              this.onMessage(n);
            }
          }, e.prototype.handleNewFrameCount_ = function (e) {
            this.totalFrames = e, this.frames = [];
          }, e.prototype.extractFrameCount_ = function (e) {
            if (a.assert(null === this.frames, 'We already have a frame buffer'), e.length <= 6) {
              var t = Number(e);
              if (!isNaN(t))
                return this.handleNewFrameCount_(t), null;
            }
            return this.handleNewFrameCount_(1), e;
          }, e.prototype.handleIncomingFrame = function (e) {
            if (null !== this.mySock) {
              var t = e.data;
              if (this.bytesReceived += t.length, this.stats_.incrementCounter('bytes_received', t.length), this.resetKeepAlive(), null !== this.frames)
                this.appendFrame_(t);
              else {
                var n = this.extractFrameCount_(t);
                null !== n && this.appendFrame_(n);
              }
            }
          }, e.prototype.send = function (e) {
            this.resetKeepAlive();
            var t = a.stringify(e);
            this.bytesSent += t.length, this.stats_.incrementCounter('bytes_sent', t.length);
            var n = M(t, 16384);
            n.length > 1 && this.sendString_(String(n.length));
            for (var r = 0; r < n.length; r++)
              this.sendString_(n[r]);
          }, e.prototype.shutdown_ = function () {
            this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null);
          }, e.prototype.onClosed_ = function () {
            this.isClosed_ || (this.log_('WebSocket is closing itself'), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null));
          }, e.prototype.close = function () {
            this.isClosed_ || (this.log_('WebSocket is being closed'), this.shutdown_());
          }, e.prototype.resetKeepAlive = function () {
            var e = this;
            clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function () {
              e.mySock && e.sendString_('0'), e.resetKeepAlive();
            }, Math.floor(45000));
          }, e.prototype.sendString_ = function (e) {
            try {
              this.mySock.send(e);
            } catch (e) {
              this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.'), setTimeout(this.onClosed_.bind(this), 0);
            }
          }, e.responsesRequiredToBeHealthy = 2, e.healthyTimeout = 30000, e;
        }(), $t = function () {
          function e(e) {
            this.initTransports_(e);
          }
          return Object.defineProperty(e, 'ALL_TRANSPORTS', {
            get: function () {
              return [
                Kt,
                Xt
              ];
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.initTransports_ = function (t) {
            var n, r, i = Xt && Xt.isAvailable(), o = i && !Xt.previouslyFailed();
            if (t.webSocketOnly && (i || R('wss:// URL used, but browser isn\'t known to support websockets.  Trying anyway.'), o = !0), o)
              this.transports_ = [Xt];
            else {
              var a = this.transports_ = [];
              try {
                for (var h = s.__values(e.ALL_TRANSPORTS), u = h.next(); !u.done; u = h.next()) {
                  var l = u.value;
                  l && l.isAvailable() && a.push(l);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  u && !u.done && (r = h.return) && r.call(h);
                } finally {
                  if (n)
                    throw n.error;
                }
              }
            }
          }, e.prototype.initialTransport = function () {
            if (this.transports_.length > 0)
              return this.transports_[0];
            throw new Error('No transports available');
          }, e.prototype.upgradeTransport = function () {
            return this.transports_.length > 1 ? this.transports_[1] : null;
          }, e;
        }(), Jt = function () {
          function e(e, t, n, r, i, o, s, a) {
            this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.onMessage_ = r, this.onReady_ = i, this.onDisconnect_ = o, this.onKill_ = s, this.lastSessionId = a, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = I('c:' + this.id + ':'), this.transportManager_ = new $t(t), this.log_('Connection created'), this.start_();
          }
          return e.prototype.start_ = function () {
            var e = this, t = this.transportManager_.initialTransport();
            this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, void 0, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
            var n = this.connReceiver_(this.conn_), r = this.disconnReceiver_(this.conn_);
            this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function () {
              e.conn_ && e.conn_.open(n, r);
            }, Math.floor(0));
            var i = t.healthyTimeout || 0;
            i > 0 && (this.healthyTimeout_ = H(function () {
              e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && e.conn_.bytesReceived > 102400 ? (e.log_('Connection exceeded healthy timeout but has received ' + e.conn_.bytesReceived + ' bytes.  Marking connection healthy.'), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && e.conn_.bytesSent > 10240 ? e.log_('Connection exceeded healthy timeout but has sent ' + e.conn_.bytesSent + ' bytes.  Leaving connection alive.') : (e.log_('Closing unhealthy connection after timeout.'), e.close()));
            }, Math.floor(i)));
          }, e.prototype.nextTransportId_ = function () {
            return 'c:' + this.id + ':' + this.connectionCount++;
          }, e.prototype.disconnReceiver_ = function (e) {
            var t = this;
            return function (n) {
              e === t.conn_ ? t.onConnectionLost_(n) : e === t.secondaryConn_ ? (t.log_('Secondary connection lost.'), t.onSecondaryConnectionLost_()) : t.log_('closing an old connection');
            };
          }, e.prototype.connReceiver_ = function (e) {
            var t = this;
            return function (n) {
              2 !== t.state_ && (e === t.rx_ ? t.onPrimaryMessageReceived_(n) : e === t.secondaryConn_ ? t.onSecondaryMessageReceived_(n) : t.log_('message on old connection'));
            };
          }, e.prototype.sendRequest = function (e) {
            var t = {
              t: 'd',
              d: e
            };
            this.sendData_(t);
          }, e.prototype.tryCleanupConnection = function () {
            this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null);
          }, e.prototype.onSecondaryControl_ = function (e) {
            if ('t' in e) {
              var t = e.t;
              'a' === t ? this.upgradeIfSecondaryHealthy_() : 'r' === t ? (this.log_('Got a reset on secondary, closing it'), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : 'o' === t && (this.log_('got pong on secondary.'), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_());
            }
          }, e.prototype.onSecondaryMessageReceived_ = function (e) {
            var t = A('t', e), n = A('d', e);
            if ('c' === t)
              this.onSecondaryControl_(n);
            else {
              if ('d' !== t)
                throw new Error('Unknown protocol layer: ' + t);
              this.pendingDataMessages.push(n);
            }
          }, e.prototype.upgradeIfSecondaryHealthy_ = function () {
            this.secondaryResponsesRequired_ <= 0 ? (this.log_('Secondary connection is healthy.'), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_('sending ping on secondary.'), this.secondaryConn_.send({
              t: 'c',
              d: {
                t: 'p',
                d: {}
              }
            }));
          }, e.prototype.proceedWithUpgrade_ = function () {
            this.secondaryConn_.start(), this.log_('sending client ack on secondary'), this.secondaryConn_.send({
              t: 'c',
              d: {
                t: 'a',
                d: {}
              }
            }), this.log_('Ending transmission on primary'), this.conn_.send({
              t: 'c',
              d: {
                t: 'n',
                d: {}
              }
            }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
          }, e.prototype.onPrimaryMessageReceived_ = function (e) {
            var t = A('t', e), n = A('d', e);
            'c' === t ? this.onControl_(n) : 'd' === t && this.onDataMessage_(n);
          }, e.prototype.onDataMessage_ = function (e) {
            this.onPrimaryResponse_(), this.onMessage_(e);
          }, e.prototype.onPrimaryResponse_ = function () {
            this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_('Primary connection is healthy.'), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
          }, e.prototype.onControl_ = function (e) {
            var t = A('t', e);
            if ('d' in e) {
              var n = e.d;
              if ('h' === t)
                this.onHandshake_(n);
              else if ('n' === t) {
                this.log_('recvd end transmission on primary'), this.rx_ = this.secondaryConn_;
                for (var r = 0; r < this.pendingDataMessages.length; ++r)
                  this.onDataMessage_(this.pendingDataMessages[r]);
                this.pendingDataMessages = [], this.tryCleanupConnection();
              } else
                's' === t ? this.onConnectionShutdown_(n) : 'r' === t ? this.onReset_(n) : 'e' === t ? N('Server Error: ' + n) : 'o' === t ? (this.log_('got pong on primary.'), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : N('Unknown control packet command: ' + t);
            }
          }, e.prototype.onHandshake_ = function (e) {
            var t = e.ts, n = e.v, r = e.h;
            this.sessionId = e.s, this.repoInfo_.updateHost(r), 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), '5' !== n && R('Protocol version mismatch detected'), this.tryStartUpgrade_());
          }, e.prototype.tryStartUpgrade_ = function () {
            var e = this.transportManager_.upgradeTransport();
            e && this.startUpgrade_(e);
          }, e.prototype.startUpgrade_ = function (e) {
            var t = this;
            this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
            var n = this.connReceiver_(this.secondaryConn_), r = this.disconnReceiver_(this.secondaryConn_);
            this.secondaryConn_.open(n, r), H(function () {
              t.secondaryConn_ && (t.log_('Timed out trying to upgrade.'), t.secondaryConn_.close());
            }, Math.floor(60000));
          }, e.prototype.onReset_ = function (e) {
            this.log_('Reset packet received.  New host: ' + e), this.repoInfo_.updateHost(e), 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_());
          }, e.prototype.onConnectionEstablished_ = function (e, t) {
            var n = this;
            this.log_('Realtime connection established.'), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_('Primary connection is healthy.'), this.isHealthy_ = !0) : H(function () {
              n.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(5000));
          }, e.prototype.sendPingOnPrimaryIfNecessary_ = function () {
            this.isHealthy_ || 1 !== this.state_ || (this.log_('sending ping on primary.'), this.sendData_({
              t: 'c',
              d: {
                t: 'p',
                d: {}
              }
            }));
          }, e.prototype.onSecondaryConnectionLost_ = function () {
            var e = this.secondaryConn_;
            this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close();
          }, e.prototype.onConnectionLost_ = function (e) {
            this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_('Realtime connection lost.') : (this.log_('Realtime connection failed.'), this.repoInfo_.isCacheableHost() && (y.remove('host:' + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close();
          }, e.prototype.onConnectionShutdown_ = function (e) {
            this.log_('Connection shutdown command received. Shutting down...'), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close();
          }, e.prototype.sendData_ = function (e) {
            if (1 !== this.state_)
              throw 'Connection is not connected';
            this.tx_.send(e);
          }, e.prototype.close = function () {
            2 !== this.state_ && (this.log_('Closing realtime connection.'), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null));
          }, e.prototype.closeConnections_ = function () {
            this.log_('Shutting down all connections'), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null);
          }, e;
        }(), Zt = function () {
          function e() {
          }
          return e.prototype.put = function (e, t, n, r) {
          }, e.prototype.merge = function (e, t, n, r) {
          }, e.prototype.refreshAuthToken = function (e) {
          }, e.prototype.onDisconnectPut = function (e, t, n) {
          }, e.prototype.onDisconnectMerge = function (e, t, n) {
          }, e.prototype.onDisconnectCancel = function (e, t) {
          }, e.prototype.reportStats = function (e) {
          }, e;
        }(), en = function (e) {
          function t(n, r, i, o, s, h, u) {
            var l = e.call(this) || this;
            if (l.repoInfo_ = n, l.applicationId_ = r, l.onDataUpdate_ = i, l.onConnectStatus_ = o, l.onServerInfoUpdate_ = s, l.authTokenProvider_ = h, l.authOverride_ = u, l.id = t.nextPersistentConnectionId_++, l.log_ = I('p:' + l.id + ':'), l.interruptReasons_ = {}, l.listens = new Map(), l.outstandingPuts_ = [], l.outstandingPutCount_ = 0, l.onDisconnectRequestQueue_ = [], l.connected_ = !1, l.reconnectDelay_ = 1000, l.maxReconnectDelay_ = 300000, l.securityDebugCallback_ = null, l.lastSessionId = null, l.establishConnectionTimer_ = null, l.visible_ = !1, l.requestCBHash_ = {}, l.requestNumber_ = 0, l.realtime_ = null, l.authToken_ = null, l.forceTokenRefresh_ = !1, l.invalidAuthTokenCount_ = 0, l.firstConnection_ = !0, l.lastConnectionAttemptTime_ = null, l.lastConnectionEstablishedTime_ = null, u && !a.isNodeSdk())
              throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
            return l.scheduleConnect_(0), Ht.getInstance().on('visible', l.onVisible_, l), -1 === n.host.indexOf('fblocal') && jt.getInstance().on('online', l.onOnline_, l), l;
          }
          return s.__extends(t, e), t.prototype.sendRequest = function (e, t, n) {
            var r = ++this.requestNumber_, i = {
                r: r,
                a: e,
                b: t
              };
            this.log_(a.stringify(i)), a.assert(this.connected_, 'sendRequest call when we\'re not connected not allowed.'), this.realtime_.sendRequest(i), n && (this.requestCBHash_[r] = n);
          }, t.prototype.listen = function (e, t, n, r) {
            var i = e.queryIdentifier(), o = e.path.toString();
            this.log_('Listen called for ' + o + ' ' + i), this.listens.has(o) || this.listens.set(o, new Map()), a.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), 'listen() called for non-default but complete query'), a.assert(!this.listens.get(o).has(i), 'listen() called twice for same path/queryId.');
            var s = {
              onComplete: r,
              hashFn: t,
              query: e,
              tag: n
            };
            this.listens.get(o).set(i, s), this.connected_ && this.sendListen_(s);
          }, t.prototype.sendListen_ = function (e) {
            var n = this, r = e.query, i = r.path.toString(), o = r.queryIdentifier();
            this.log_('Listen on ' + i + ' for ' + o);
            var s = { p: i };
            e.tag && (s.q = r.queryObject(), s.t = e.tag), s.h = e.hashFn(), this.sendRequest('q', s, function (s) {
              var a = s.d, h = s.s;
              t.warnOnListenWarnings_(a, r), (n.listens.get(i) && n.listens.get(i).get(o)) === e && (n.log_('listen response', s), 'ok' !== h && n.removeListen_(i, o), e.onComplete && e.onComplete(h, a));
            });
          }, t.warnOnListenWarnings_ = function (e, t) {
            if (e && 'object' === i(e) && a.contains(e, 'w')) {
              var n = a.safeGet(e, 'w');
              if (Array.isArray(n) && ~n.indexOf('no_index')) {
                var r = '".indexOn": "' + t.getQueryParams().getIndex().toString() + '"', o = t.path.toString();
                R('Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ' + r + ' at ' + o + ' to your security rules for better performance.');
              }
            }
          }, t.prototype.refreshAuthToken = function (e) {
            this.authToken_ = e, this.log_('Auth token refreshed'), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest('unauth', {}, function () {
            }), this.reduceReconnectDelayIfAdminCredential_(e);
          }, t.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
            (e && 40 === e.length || a.isAdmin(e)) && (this.log_('Admin auth credential detected.  Reducing max reconnect time.'), this.maxReconnectDelay_ = 30000);
          }, t.prototype.tryAuth = function () {
            var e = this;
            if (this.connected_ && this.authToken_) {
              var t = this.authToken_, n = a.isValidFormat(t) ? 'auth' : 'gauth', r = { cred: t };
              null === this.authOverride_ ? r.noauth = !0 : 'object' === i(this.authOverride_) && (r.authvar = this.authOverride_), this.sendRequest(n, r, function (n) {
                var r = n.s, i = n.d || 'error';
                e.authToken_ === t && ('ok' === r ? e.invalidAuthTokenCount_ = 0 : e.onAuthRevoked_(r, i));
              });
            }
          }, t.prototype.unlisten = function (e, t) {
            var n = e.path.toString(), r = e.queryIdentifier();
            this.log_('Unlisten called for ' + n + ' ' + r), a.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), 'unlisten() called for non-default but complete query'), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e.queryObject(), t);
          }, t.prototype.sendUnlisten_ = function (e, t, n, r) {
            this.log_('Unlisten on ' + e + ' for ' + t);
            var i = { p: e };
            r && (i.q = n, i.t = r), this.sendRequest('n', i);
          }, t.prototype.onDisconnectPut = function (e, t, n) {
            this.connected_ ? this.sendOnDisconnect_('o', e, t, n) : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: 'o',
              data: t,
              onComplete: n
            });
          }, t.prototype.onDisconnectMerge = function (e, t, n) {
            this.connected_ ? this.sendOnDisconnect_('om', e, t, n) : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: 'om',
              data: t,
              onComplete: n
            });
          }, t.prototype.onDisconnectCancel = function (e, t) {
            this.connected_ ? this.sendOnDisconnect_('oc', e, null, t) : this.onDisconnectRequestQueue_.push({
              pathString: e,
              action: 'oc',
              data: null,
              onComplete: t
            });
          }, t.prototype.sendOnDisconnect_ = function (e, t, n, r) {
            var i = {
              p: t,
              d: n
            };
            this.log_('onDisconnect ' + e, i), this.sendRequest(e, i, function (e) {
              r && setTimeout(function () {
                r(e.s, e.d);
              }, Math.floor(0));
            });
          }, t.prototype.put = function (e, t, n, r) {
            this.putInternal('p', e, t, n, r);
          }, t.prototype.merge = function (e, t, n, r) {
            this.putInternal('m', e, t, n, r);
          }, t.prototype.putInternal = function (e, t, n, r, i) {
            var o = {
              p: t,
              d: n
            };
            void 0 !== i && (o.h = i), this.outstandingPuts_.push({
              action: e,
              request: o,
              onComplete: r
            }), this.outstandingPutCount_++;
            var s = this.outstandingPuts_.length - 1;
            this.connected_ ? this.sendPut_(s) : this.log_('Buffering put: ' + t);
          }, t.prototype.sendPut_ = function (e) {
            var t = this, n = this.outstandingPuts_[e].action, r = this.outstandingPuts_[e].request, i = this.outstandingPuts_[e].onComplete;
            this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(n, r, function (r) {
              t.log_(n + ' response', r), delete t.outstandingPuts_[e], t.outstandingPutCount_--, 0 === t.outstandingPutCount_ && (t.outstandingPuts_ = []), i && i(r.s, r.d);
            });
          }, t.prototype.reportStats = function (e) {
            var t = this;
            if (this.connected_) {
              var n = { c: e };
              this.log_('reportStats', n), this.sendRequest('s', n, function (e) {
                if ('ok' !== e.s) {
                  var n = e.d;
                  t.log_('reportStats', 'Error sending stats: ' + n);
                }
              });
            }
          }, t.prototype.onDataMessage_ = function (e) {
            if ('r' in e) {
              this.log_('from server: ' + a.stringify(e));
              var t = e.r, n = this.requestCBHash_[t];
              n && (delete this.requestCBHash_[t], n(e.b));
            } else {
              if ('error' in e)
                throw 'A server-side error has occurred: ' + e.error;
              'a' in e && this.onDataPush_(e.a, e.b);
            }
          }, t.prototype.onDataPush_ = function (e, t) {
            this.log_('handleServerMessage', e, t), 'd' === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : 'm' === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : 'c' === e ? this.onListenRevoked_(t.p, t.q) : 'ac' === e ? this.onAuthRevoked_(t.s, t.d) : 'sd' === e ? this.onSecurityDebugPacket_(t) : N('Unrecognized action received from server: ' + a.stringify(e) + '\nAre you using the latest client?');
          }, t.prototype.onReady_ = function (e, t) {
            this.log_('connection ready'), this.connected_ = !0, this.lastConnectionEstablishedTime_ = new Date().getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
          }, t.prototype.scheduleConnect_ = function (e) {
            var t = this;
            a.assert(!this.realtime_, 'Scheduling a connect when we\'re already connected/ing?'), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function () {
              t.establishConnectionTimer_ = null, t.establishConnection_();
            }, Math.floor(e));
          }, t.prototype.onVisible_ = function (e) {
            e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_('Window became visible.  Reducing delay.'), this.reconnectDelay_ = 1000, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
          }, t.prototype.onOnline_ = function (e) {
            e ? (this.log_('Browser went online.'), this.reconnectDelay_ = 1000, this.realtime_ || this.scheduleConnect_(0)) : (this.log_('Browser went offline.  Killing connection.'), this.realtime_ && this.realtime_.close());
          }, t.prototype.onRealtimeDisconnect_ = function () {
            if (this.log_('data client disconnected'), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
              if (this.visible_) {
                if (this.lastConnectionEstablishedTime_) {
                  new Date().getTime() - this.lastConnectionEstablishedTime_ > 30000 && (this.reconnectDelay_ = 1000), this.lastConnectionEstablishedTime_ = null;
                }
              } else
                this.log_('Window isn\'t visible.  Delaying reconnect.'), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = new Date().getTime();
              var e = new Date().getTime() - this.lastConnectionAttemptTime_, t = Math.max(0, this.reconnectDelay_ - e);
              t = Math.random() * t, this.log_('Trying to reconnect in ' + t + 'ms'), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_);
            }
            this.onConnectStatus_(!1);
          }, t.prototype.establishConnection_ = function () {
            var e = this;
            if (this.shouldReconnect_()) {
              this.log_('Making a connection attempt'), this.lastConnectionAttemptTime_ = new Date().getTime(), this.lastConnectionEstablishedTime_ = null;
              var n = this.onDataMessage_.bind(this), r = this.onReady_.bind(this), i = this.onRealtimeDisconnect_.bind(this), o = this.id + ':' + t.nextConnectionId_++, s = this, h = this.lastSessionId, u = !1, l = null, c = function () {
                  l ? l.close() : (u = !0, i());
                };
              this.realtime_ = {
                close: c,
                sendRequest: function (e) {
                  a.assert(l, 'sendRequest call when we\'re not connected not allowed.'), l.sendRequest(e);
                }
              };
              var p = this.forceTokenRefresh_;
              this.forceTokenRefresh_ = !1, this.authTokenProvider_.getToken(p).then(function (e) {
                u ? S('getToken() completed but was canceled') : (S('getToken() completed. Creating connection.'), s.authToken_ = e && e.accessToken, l = new Jt(o, s.repoInfo_, s.applicationId_, n, r, i, function (e) {
                  R(e + ' (' + s.repoInfo_.toString() + ')'), s.interrupt('server_kill');
                }, h));
              }).then(null, function (t) {
                s.log_('Failed to get token: ' + t), u || (e.repoInfo_.nodeAdmin && R(t), c());
              });
            }
          }, t.prototype.interrupt = function (e) {
            S('Interrupting connection for reason: ' + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
          }, t.prototype.resume = function (e) {
            S('Resuming connection for reason: ' + e), delete this.interruptReasons_[e], a.isEmpty(this.interruptReasons_) && (this.reconnectDelay_ = 1000, this.realtime_ || this.scheduleConnect_(0));
          }, t.prototype.handleTimestamp_ = function (e) {
            var t = e - new Date().getTime();
            this.onServerInfoUpdate_({ serverTimeOffset: t });
          }, t.prototype.cancelSentTransactions_ = function () {
            for (var e = 0; e < this.outstandingPuts_.length; e++) {
              var t = this.outstandingPuts_[e];
              t && 'h' in t.request && t.queued && (t.onComplete && t.onComplete('disconnect'), delete this.outstandingPuts_[e], this.outstandingPutCount_--);
            }
            0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
          }, t.prototype.onListenRevoked_ = function (e, t) {
            var n;
            n = t ? t.map(function (e) {
              return L(e);
            }).join('$') : 'default';
            var r = this.removeListen_(e, n);
            r && r.onComplete && r.onComplete('permission_denied');
          }, t.prototype.removeListen_ = function (e, t) {
            var n, r = new j(e).toString();
            if (this.listens.has(r)) {
              var i = this.listens.get(r);
              n = i.get(t), i.delete(t), 0 === i.size && this.listens.delete(r);
            } else
              n = void 0;
            return n;
          }, t.prototype.onAuthRevoked_ = function (e, t) {
            S('Auth token revoked: ' + e + '/' + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), 'invalid_token' !== e && 'permission_denied' !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 30000, this.authTokenProvider_.notifyForInvalidToken()));
          }, t.prototype.onSecurityDebugPacket_ = function (e) {
            this.securityDebugCallback_ ? this.securityDebugCallback_(e) : 'msg' in e && console.log('FIREBASE: ' + e.msg.replace('\n', '\nFIREBASE: '));
          }, t.prototype.restoreState_ = function () {
            var e, t, n, r;
            this.tryAuth();
            try {
              for (var i = s.__values(this.listens.values()), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                try {
                  for (var h = (n = void 0, s.__values(a.values())), u = h.next(); !u.done; u = h.next()) {
                    var l = u.value;
                    this.sendListen_(l);
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = h.return) && r.call(h);
                  } finally {
                    if (n)
                      throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            for (var c = 0; c < this.outstandingPuts_.length; c++)
              this.outstandingPuts_[c] && this.sendPut_(c);
            for (; this.onDisconnectRequestQueue_.length;) {
              var p = this.onDisconnectRequestQueue_.shift();
              this.sendOnDisconnect_(p.action, p.pathString, p.data, p.onComplete);
            }
          }, t.prototype.sendConnectStats_ = function () {
            var e = {}, t = 'js';
            a.isNodeSdk() && (t = this.repoInfo_.nodeAdmin ? 'admin_node' : 'node'), e['sdk.' + t + '.' + zt.replace(/\./g, '-')] = 1, a.isMobileCordova() ? e['framework.cordova'] = 1 : a.isReactNative() && (e['framework.reactnative'] = 1), this.reportStats(e);
          }, t.prototype.shouldReconnect_ = function () {
            var e = jt.getInstance().currentlyOnline();
            return a.isEmpty(this.interruptReasons_) && e;
          }, t.nextPersistentConnectionId_ = 0, t.nextConnectionId_ = 0, t;
        }(Zt), tn = function (e) {
          function t(t, n, r) {
            var i = e.call(this) || this;
            return i.repoInfo_ = t, i.onDataUpdate_ = n, i.authTokenProvider_ = r, i.log_ = I('p:rest:'), i.listens_ = {}, i;
          }
          return s.__extends(t, e), t.prototype.reportStats = function (e) {
            throw new Error('Method not implemented.');
          }, t.getListenId_ = function (e, t) {
            return void 0 !== t ? 'tag$' + t : (a.assert(e.getQueryParams().isDefault(), 'should have a tag if it\'s not a default query.'), e.path.toString());
          }, t.prototype.listen = function (e, n, r, i) {
            var o = this, s = e.path.toString();
            this.log_('Listen called for ' + s + ' ' + e.queryIdentifier());
            var h = t.getListenId_(e, r), u = {};
            this.listens_[h] = u;
            var l = e.getQueryParams().toRestQueryStringParameters();
            this.restRequest_(s + '.json', l, function (e, t) {
              var n = t;
              (404 === e && (n = null, e = null), null === e && o.onDataUpdate_(s, n, !1, r), a.safeGet(o.listens_, h) === u) && i(e ? 401 === e ? 'permission_denied' : 'rest_error:' + e : 'ok', null);
            });
          }, t.prototype.unlisten = function (e, n) {
            var r = t.getListenId_(e, n);
            delete this.listens_[r];
          }, t.prototype.refreshAuthToken = function (e) {
          }, t.prototype.restRequest_ = function (e, t, n) {
            var r = this;
            void 0 === t && (t = {}), t.format = 'export', this.authTokenProvider_.getToken(!1).then(function (i) {
              var o = i && i.accessToken;
              o && (t.auth = o);
              var s = (r.repoInfo_.secure ? 'https://' : 'http://') + r.repoInfo_.host + e + '?ns=' + r.repoInfo_.namespace + a.querystring(t);
              r.log_('Sending REST request for ' + s);
              var h = new XMLHttpRequest();
              h.onreadystatechange = function () {
                if (n && 4 === h.readyState) {
                  r.log_('REST Response for ' + s + ' received. status:', h.status, 'response:', h.responseText);
                  var e = null;
                  if (h.status >= 200 && h.status < 300) {
                    try {
                      e = a.jsonEval(h.responseText);
                    } catch (e) {
                      R('Failed to parse JSON response for ' + s + ': ' + h.responseText);
                    }
                    n(null, e);
                  } else
                    401 !== h.status && 404 !== h.status && R('Got unsuccessful REST response for ' + s + ' Status: ' + h.status), n(h.status);
                  n = null;
                }
              }, h.open('GET', s, !0), h.send();
            });
          }, t;
        }(Zt), nn = function () {
          function e(e, t, n, r) {
            var o = this;
            if (this.repoInfo_ = e, this.app = n, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new qt(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = new lt(), this.persistentConnection_ = null, this.stats_ = Mt.getCollection(e), t || ('object' === ('undefined' == typeof window ? 'undefined' : i(window)) && window.navigator && window.navigator.userAgent || '').search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0)
              this.server_ = new tn(this.repoInfo_, this.onDataUpdate_.bind(this), r), setTimeout(this.onConnectStatus_.bind(this, !0), 0);
            else {
              var s = n.options.databaseAuthVariableOverride;
              if (null != s) {
                if ('object' !== i(s))
                  throw new Error('Only objects are supported for option databaseAuthVariableOverride');
                try {
                  a.stringify(s);
                } catch (e) {
                  throw new Error('Invalid authOverride provided: ' + e);
                }
              }
              this.persistentConnection_ = new en(this.repoInfo_, n.options.appId, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), r, s), this.server_ = this.persistentConnection_;
            }
            r.addTokenChangeListener(function (e) {
              o.server_.refreshAuthToken(e);
            }), this.statsReporter_ = Mt.getOrCreateReporter(e, function () {
              return new Qt(o.stats_, o.server_);
            }), this.transactionsInit_(), this.infoData_ = new At(), this.infoSyncTree_ = new Ft({
              startListening: function (e, t, n, r) {
                var i = [], s = o.infoData_.getNode(e.path);
                return s.isEmpty() || (i = o.infoSyncTree_.applyServerOverwrite(e.path, s), setTimeout(function () {
                  r('ok');
                }, 0)), i;
              },
              stopListening: function () {
              }
            }), this.updateInfo_('connected', !1), this.serverSyncTree_ = new Ft({
              startListening: function (e, t, n, r) {
                return o.server_.listen(e, n, t, function (t, n) {
                  var i = r(t, n);
                  o.eventQueue_.raiseEventsForChangedPath(e.path, i);
                }), [];
              },
              stopListening: function (e, t) {
                o.server_.unlisten(e, t);
              }
            });
          }
          return e.prototype.toString = function () {
            return (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host;
          }, e.prototype.name = function () {
            return this.repoInfo_.namespace;
          }, e.prototype.serverTime = function () {
            var e = this.infoData_.getNode(new j('.info/serverTimeOffset')).val() || 0;
            return new Date().getTime() + e;
          }, e.prototype.generateServerValues = function () {
            return (e = (e = { timestamp: this.serverTime() }) || {}).timestamp = e.timestamp || new Date().getTime(), e;
            var e;
          }, e.prototype.onDataUpdate_ = function (e, t, n, r) {
            this.dataUpdateCount++;
            var i = new j(e);
            t = this.interceptServerDataCallback_ ? this.interceptServerDataCallback_(e, t) : t;
            var o = [];
            if (r)
              if (n) {
                var s = a.map(t, function (e) {
                  return Be(e);
                });
                o = this.serverSyncTree_.applyTaggedQueryMerge(i, s, r);
              } else {
                var h = Be(t);
                o = this.serverSyncTree_.applyTaggedQueryOverwrite(i, h, r);
              }
            else if (n) {
              var u = a.map(t, function (e) {
                return Be(e);
              });
              o = this.serverSyncTree_.applyServerMerge(i, u);
            } else {
              var l = Be(t);
              o = this.serverSyncTree_.applyServerOverwrite(i, l);
            }
            var c = i;
            o.length > 0 && (c = this.rerunTransactions_(i)), this.eventQueue_.raiseEventsForChangedPath(c, o);
          }, e.prototype.interceptServerData_ = function (e) {
            this.interceptServerDataCallback_ = e;
          }, e.prototype.onConnectStatus_ = function (e) {
            this.updateInfo_('connected', e), !1 === e && this.runOnDisconnectEvents_();
          }, e.prototype.onServerInfoUpdate_ = function (e) {
            var t = this;
            W(e, function (e, n) {
              t.updateInfo_(e, n);
            });
          }, e.prototype.updateInfo_ = function (e, t) {
            var n = new j('/.info/' + e), r = Be(t);
            this.infoData_.updateSnapshot(n, r);
            var i = this.infoSyncTree_.applyServerOverwrite(n, r);
            this.eventQueue_.raiseEventsForChangedPath(n, i);
          }, e.prototype.getNextWriteId_ = function () {
            return this.nextWriteId_++;
          }, e.prototype.setWithPriority = function (e, t, n, r) {
            var i = this;
            this.log_('set', {
              path: e.toString(),
              value: t,
              priority: n
            });
            var o = this.generateServerValues(), s = Be(t, n), a = this.serverSyncTree_.calcCompleteEventCache(e), h = at(s, a, o), u = this.getNextWriteId_(), l = this.serverSyncTree_.applyUserOverwrite(e, h, u, !0);
            this.eventQueue_.queueEvents(l), this.server_.put(e.toString(), s.val(!0), function (t, n) {
              var o = 'ok' === t;
              o || R('set at ' + e + ' failed: ' + t);
              var s = i.serverSyncTree_.ackUserWrite(u, !o);
              i.eventQueue_.raiseEventsForChangedPath(e, s), i.callOnCompleteCallback(r, t, n);
            });
            var c = this.abortTransactions_(e);
            this.rerunTransactions_(c), this.eventQueue_.raiseEventsForChangedPath(c, []);
          }, e.prototype.update = function (e, t, n) {
            var r = this;
            this.log_('update', {
              path: e.toString(),
              value: t
            });
            var i = !0, o = this.generateServerValues(), s = {};
            if (W(t, function (t, n) {
                i = !1, s[t] = st(e.child(t), Be(n), r.serverSyncTree_, o);
              }), i)
              S('update() called with empty data.  Don\'t do anything.'), this.callOnCompleteCallback(n, 'ok');
            else {
              var a = this.getNextWriteId_(), h = this.serverSyncTree_.applyUserMerge(e, s, a);
              this.eventQueue_.queueEvents(h), this.server_.merge(e.toString(), t, function (t, i) {
                var o = 'ok' === t;
                o || R('update at ' + e + ' failed: ' + t);
                var s = r.serverSyncTree_.ackUserWrite(a, !o), h = s.length > 0 ? r.rerunTransactions_(e) : e;
                r.eventQueue_.raiseEventsForChangedPath(h, s), r.callOnCompleteCallback(n, t, i);
              }), W(t, function (t) {
                var n = r.abortTransactions_(e.child(t));
                r.rerunTransactions_(n);
              }), this.eventQueue_.raiseEventsForChangedPath(e, []);
            }
          }, e.prototype.runOnDisconnectEvents_ = function () {
            var e = this;
            this.log_('onDisconnectEvents');
            var t = this.generateServerValues(), n = new lt();
            this.onDisconnect_.forEachTree(j.Empty, function (r, i) {
              var o = st(r, i, e.serverSyncTree_, t);
              n.remember(r, o);
            });
            var r = [];
            n.forEachTree(j.Empty, function (t, n) {
              r = r.concat(e.serverSyncTree_.applyServerOverwrite(t, n));
              var i = e.abortTransactions_(t);
              e.rerunTransactions_(i);
            }), this.onDisconnect_ = new lt(), this.eventQueue_.raiseEventsForChangedPath(j.Empty, r);
          }, e.prototype.onDisconnectCancel = function (e, t) {
            var n = this;
            this.server_.onDisconnectCancel(e.toString(), function (r, i) {
              'ok' === r && n.onDisconnect_.forget(e), n.callOnCompleteCallback(t, r, i);
            });
          }, e.prototype.onDisconnectSet = function (e, t, n) {
            var r = this, i = Be(t);
            this.server_.onDisconnectPut(e.toString(), i.val(!0), function (t, o) {
              'ok' === t && r.onDisconnect_.remember(e, i), r.callOnCompleteCallback(n, t, o);
            });
          }, e.prototype.onDisconnectSetWithPriority = function (e, t, n, r) {
            var i = this, o = Be(t, n);
            this.server_.onDisconnectPut(e.toString(), o.val(!0), function (t, n) {
              'ok' === t && i.onDisconnect_.remember(e, o), i.callOnCompleteCallback(r, t, n);
            });
          }, e.prototype.onDisconnectUpdate = function (e, t, n) {
            var r = this;
            if (a.isEmpty(t))
              return S('onDisconnect().update() called with empty data.  Don\'t do anything.'), void this.callOnCompleteCallback(n, 'ok');
            this.server_.onDisconnectMerge(e.toString(), t, function (i, o) {
              'ok' === i && W(t, function (t, n) {
                var i = Be(n);
                r.onDisconnect_.remember(e.child(t), i);
              }), r.callOnCompleteCallback(n, i, o);
            });
          }, e.prototype.addEventCallbackForQuery = function (e, t) {
            var n;
            n = '.info' === e.path.getFront() ? this.infoSyncTree_.addEventRegistration(e, t) : this.serverSyncTree_.addEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n);
          }, e.prototype.removeEventCallbackForQuery = function (e, t) {
            var n;
            n = '.info' === e.path.getFront() ? this.infoSyncTree_.removeEventRegistration(e, t) : this.serverSyncTree_.removeEventRegistration(e, t), this.eventQueue_.raiseEventsAtPath(e.path, n);
          }, e.prototype.interrupt = function () {
            this.persistentConnection_ && this.persistentConnection_.interrupt('repo_interrupt');
          }, e.prototype.resume = function () {
            this.persistentConnection_ && this.persistentConnection_.resume('repo_interrupt');
          }, e.prototype.stats = function (e) {
            if (void 0 === e && (e = !1), 'undefined' != typeof console) {
              var t;
              e ? (this.statsListener_ || (this.statsListener_ = new Wt(this.stats_)), t = this.statsListener_.get()) : t = this.stats_.get();
              var n = Object.keys(t).reduce(function (e, t) {
                return Math.max(t.length, e);
              }, 0);
              W(t, function (e, t) {
                for (var r = e, i = e.length; i < n + 2; i++)
                  r += ' ';
                console.log(r + t);
              });
            }
          }, e.prototype.statsIncrementCounter = function (e) {
            this.stats_.incrementCounter(e), this.statsReporter_.includeStat(e);
          }, e.prototype.log_ = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var n = '';
            this.persistentConnection_ && (n = this.persistentConnection_.id + ':'), S.apply(void 0, s.__spread([n], e));
          }, e.prototype.callOnCompleteCallback = function (e, t, n) {
            e && V(function () {
              if ('ok' === t)
                e(null);
              else {
                var r = (t || 'error').toUpperCase(), i = r;
                n && (i += ': ' + n);
                var o = new Error(i);
                o.code = r, e(o);
              }
            });
          }, Object.defineProperty(e.prototype, 'database', {
            get: function () {
              return this.__database || (this.__database = new _n(this));
            },
            enumerable: !1,
            configurable: !0
          }), e;
        }(), rn = function () {
          function e(t) {
            this.indexedFilter_ = new wt(t.getIndex()), this.index_ = t.getIndex(), this.startPost_ = e.getStartPost_(t), this.endPost_ = e.getEndPost_(t);
          }
          return e.prototype.getStartPost = function () {
            return this.startPost_;
          }, e.prototype.getEndPost = function () {
            return this.endPost_;
          }, e.prototype.matches = function (e) {
            return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0;
          }, e.prototype.updateChild = function (e, t, n, r, i, o) {
            return this.matches(new me(t, n)) || (n = He.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, o);
          }, e.prototype.updateFullNode = function (e, t, n) {
            t.isLeafNode() && (t = He.EMPTY_NODE);
            var r = t.withIndex(this.index_);
            r = r.updatePriority(He.EMPTY_NODE);
            var i = this;
            return t.forEachChild(xe, function (e, t) {
              i.matches(new me(e, t)) || (r = r.updateImmediateChild(e, He.EMPTY_NODE));
            }), this.indexedFilter_.updateFullNode(e, r, n);
          }, e.prototype.updatePriority = function (e, t) {
            return e;
          }, e.prototype.filtersNodes = function () {
            return !0;
          }, e.prototype.getIndexedFilter = function () {
            return this.indexedFilter_;
          }, e.prototype.getIndex = function () {
            return this.index_;
          }, e.getStartPost_ = function (e) {
            if (e.hasStart()) {
              var t = e.getIndexStartName();
              return e.getIndex().makePost(e.getIndexStartValue(), t);
            }
            return e.getIndex().minPost();
          }, e.getEndPost_ = function (e) {
            if (e.hasEnd()) {
              var t = e.getIndexEndName();
              return e.getIndex().makePost(e.getIndexEndValue(), t);
            }
            return e.getIndex().maxPost();
          }, e;
        }(), on = function () {
          function e(e) {
            this.rangedFilter_ = new rn(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft();
          }
          return e.prototype.updateChild = function (e, t, n, r, i, o) {
            return this.rangedFilter_.matches(new me(t, n)) || (n = He.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(e, t, n, i, o);
          }, e.prototype.updateFullNode = function (e, t, n) {
            var r;
            if (t.isLeafNode() || t.isEmpty())
              r = He.EMPTY_NODE.withIndex(this.index_);
            else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
              r = He.EMPTY_NODE.withIndex(this.index_);
              var i = void 0;
              i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
              for (var o = 0; i.hasNext() && o < this.limit_;) {
                var s = i.getNext();
                if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), s) <= 0 : this.index_.compare(s, this.rangedFilter_.getEndPost()) <= 0))
                  break;
                r = r.updateImmediateChild(s.name, s.node), o++;
              }
            } else {
              r = (r = t.withIndex(this.index_)).updatePriority(He.EMPTY_NODE);
              var a = void 0, h = void 0, u = void 0;
              i = void 0;
              if (this.reverse_) {
                i = r.getReverseIterator(this.index_), a = this.rangedFilter_.getEndPost(), h = this.rangedFilter_.getStartPost();
                var l = this.index_.getCompare();
                u = function (e, t) {
                  return l(t, e);
                };
              } else
                i = r.getIterator(this.index_), a = this.rangedFilter_.getStartPost(), h = this.rangedFilter_.getEndPost(), u = this.index_.getCompare();
              o = 0;
              for (var c = !1; i.hasNext();) {
                s = i.getNext();
                !c && u(a, s) <= 0 && (c = !0), c && o < this.limit_ && u(s, h) <= 0 ? o++ : r = r.updateImmediateChild(s.name, He.EMPTY_NODE);
              }
            }
            return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
          }, e.prototype.updatePriority = function (e, t) {
            return e;
          }, e.prototype.filtersNodes = function () {
            return !0;
          }, e.prototype.getIndexedFilter = function () {
            return this.rangedFilter_.getIndexedFilter();
          }, e.prototype.getIndex = function () {
            return this.index_;
          }, e.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
            var o;
            if (this.reverse_) {
              var s = this.index_.getCompare();
              o = function (e, t) {
                return s(t, e);
              };
            } else
              o = this.index_.getCompare();
            var h = e;
            a.assert(h.numChildren() === this.limit_, '');
            var u = new me(t, n), l = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_), c = this.rangedFilter_.matches(u);
            if (h.hasChild(t)) {
              for (var p = h.getImmediateChild(t), d = r.getChildAfterChild(this.index_, l, this.reverse_); null != d && (d.name === t || h.hasChild(d.name));)
                d = r.getChildAfterChild(this.index_, d, this.reverse_);
              var f = null == d ? 1 : o(d, u);
              if (c && !n.isEmpty() && f >= 0)
                return null != i && i.trackChildChange(Et.childChangedChange(t, n, p)), h.updateImmediateChild(t, n);
              null != i && i.trackChildChange(Et.childRemovedChange(t, p));
              var _ = h.updateImmediateChild(t, He.EMPTY_NODE);
              return null != d && this.rangedFilter_.matches(d) ? (null != i && i.trackChildChange(Et.childAddedChange(d.name, d.node)), _.updateImmediateChild(d.name, d.node)) : _;
            }
            return n.isEmpty() ? e : c && o(l, u) >= 0 ? (null != i && (i.trackChildChange(Et.childRemovedChange(l.name, l.node)), i.trackChildChange(Et.childAddedChange(t, n))), h.updateImmediateChild(t, n).updateImmediateChild(l.name, He.EMPTY_NODE)) : e;
          }, e;
        }(), sn = function () {
          function e() {
            this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.limit_ = 0, this.viewFrom_ = '', this.indexStartValue_ = null, this.indexStartName_ = '', this.indexEndValue_ = null, this.indexEndName_ = '', this.index_ = xe;
          }
          return e.prototype.hasStart = function () {
            return this.startSet_;
          }, e.prototype.isViewFromLeft = function () {
            return '' === this.viewFrom_ ? this.startSet_ : this.viewFrom_ === e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
          }, e.prototype.getIndexStartValue = function () {
            return a.assert(this.startSet_, 'Only valid if start has been set'), this.indexStartValue_;
          }, e.prototype.getIndexStartName = function () {
            return a.assert(this.startSet_, 'Only valid if start has been set'), this.startNameSet_ ? this.indexStartName_ : x;
          }, e.prototype.hasEnd = function () {
            return this.endSet_;
          }, e.prototype.getIndexEndValue = function () {
            return a.assert(this.endSet_, 'Only valid if end has been set'), this.indexEndValue_;
          }, e.prototype.getIndexEndName = function () {
            return a.assert(this.endSet_, 'Only valid if end has been set'), this.endNameSet_ ? this.indexEndName_ : k;
          }, e.prototype.hasLimit = function () {
            return this.limitSet_;
          }, e.prototype.hasAnchoredLimit = function () {
            return this.limitSet_ && '' !== this.viewFrom_;
          }, e.prototype.getLimit = function () {
            return a.assert(this.limitSet_, 'Only valid if limit has been set'), this.limit_;
          }, e.prototype.getIndex = function () {
            return this.index_;
          }, e.prototype.copy_ = function () {
            var t = new e();
            return t.limitSet_ = this.limitSet_, t.limit_ = this.limit_, t.startSet_ = this.startSet_, t.indexStartValue_ = this.indexStartValue_, t.startNameSet_ = this.startNameSet_, t.indexStartName_ = this.indexStartName_, t.endSet_ = this.endSet_, t.indexEndValue_ = this.indexEndValue_, t.endNameSet_ = this.endNameSet_, t.indexEndName_ = this.indexEndName_, t.index_ = this.index_, t.viewFrom_ = this.viewFrom_, t;
          }, e.prototype.limit = function (e) {
            var t = this.copy_();
            return t.limitSet_ = !0, t.limit_ = e, t.viewFrom_ = '', t;
          }, e.prototype.limitToFirst = function (t) {
            var n = this.copy_();
            return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT, n;
          }, e.prototype.limitToLast = function (t) {
            var n = this.copy_();
            return n.limitSet_ = !0, n.limit_ = t, n.viewFrom_ = e.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT, n;
          }, e.prototype.startAt = function (e, t) {
            var n = this.copy_();
            return n.startSet_ = !0, void 0 === e && (e = null), n.indexStartValue_ = e, null != t ? (n.startNameSet_ = !0, n.indexStartName_ = t) : (n.startNameSet_ = !1, n.indexStartName_ = ''), n;
          }, e.prototype.endAt = function (e, t) {
            var n = this.copy_();
            return n.endSet_ = !0, void 0 === e && (e = null), n.indexEndValue_ = e, void 0 !== t ? (n.endNameSet_ = !0, n.indexEndName_ = t) : (n.endNameSet_ = !1, n.indexEndName_ = ''), n;
          }, e.prototype.orderBy = function (e) {
            var t = this.copy_();
            return t.index_ = e, t;
          }, e.prototype.getQueryObject = function () {
            var t = e.WIRE_PROTOCOL_CONSTANTS_, n = {};
            if (this.startSet_ && (n[t.INDEX_START_VALUE] = this.indexStartValue_, this.startNameSet_ && (n[t.INDEX_START_NAME] = this.indexStartName_)), this.endSet_ && (n[t.INDEX_END_VALUE] = this.indexEndValue_, this.endNameSet_ && (n[t.INDEX_END_NAME] = this.indexEndName_)), this.limitSet_) {
              n[t.LIMIT] = this.limit_;
              var r = this.viewFrom_;
              '' === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r;
            }
            return this.index_ !== xe && (n[t.INDEX] = this.index_.toString()), n;
          }, e.prototype.loadsAllData = function () {
            return !(this.startSet_ || this.endSet_ || this.limitSet_);
          }, e.prototype.isDefault = function () {
            return this.loadsAllData() && this.index_ === xe;
          }, e.prototype.getNodeFilter = function () {
            return this.loadsAllData() ? new wt(this.getIndex()) : this.hasLimit() ? new on(this) : new rn(this);
          }, e.prototype.toRestQueryStringParameters = function () {
            var t, n = e.REST_QUERY_CONSTANTS_, r = {};
            return this.isDefault() || (this.index_ === xe ? t = n.PRIORITY_INDEX : this.index_ === Ye ? t = n.VALUE_INDEX : this.index_ === we ? t = n.KEY_INDEX : (a.assert(this.index_ instanceof ze, 'Unrecognized index type!'), t = this.index_.toString()), r[n.ORDER_BY] = a.stringify(t), this.startSet_ && (r[n.START_AT] = a.stringify(this.indexStartValue_), this.startNameSet_ && (r[n.START_AT] += ',' + a.stringify(this.indexStartName_))), this.endSet_ && (r[n.END_AT] = a.stringify(this.indexEndValue_), this.endNameSet_ && (r[n.END_AT] += ',' + a.stringify(this.indexEndName_))), this.limitSet_ && (this.isViewFromLeft() ? r[n.LIMIT_TO_FIRST] = this.limit_ : r[n.LIMIT_TO_LAST] = this.limit_)), r;
          }, e.WIRE_PROTOCOL_CONSTANTS_ = {
            INDEX_START_VALUE: 'sp',
            INDEX_START_NAME: 'sn',
            INDEX_END_VALUE: 'ep',
            INDEX_END_NAME: 'en',
            LIMIT: 'l',
            VIEW_FROM: 'vf',
            VIEW_FROM_LEFT: 'l',
            VIEW_FROM_RIGHT: 'r',
            INDEX: 'i'
          }, e.REST_QUERY_CONSTANTS_ = {
            ORDER_BY: 'orderBy',
            PRIORITY_INDEX: '$priority',
            VALUE_INDEX: '$value',
            KEY_INDEX: '$key',
            START_AT: 'startAt',
            END_AT: 'endAt',
            LIMIT_TO_FIRST: 'limitToFirst',
            LIMIT_TO_LAST: 'limitToLast'
          }, e.DEFAULT = new e(), e;
        }(), an = function (e) {
          function t(t, n) {
            if (!(t instanceof nn))
              throw new Error('new Reference() no longer supported - use app.database().');
            return e.call(this, t, n, sn.DEFAULT, !1) || this;
          }
          return s.__extends(t, e), t.prototype.getKey = function () {
            return a.validateArgCount('Reference.key', 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack();
          }, t.prototype.child = function (e) {
            return a.validateArgCount('Reference.child', 1, 1, arguments.length), 'number' == typeof e ? e = String(e) : e instanceof j || (null === this.path.getFront() ? pe('Reference.child', 1, e, !1) : ce('Reference.child', 1, e, !1)), new t(this.repo, this.path.child(e));
          }, t.prototype.getParent = function () {
            a.validateArgCount('Reference.parent', 0, 0, arguments.length);
            var e = this.path.parent();
            return null === e ? null : new t(this.repo, e);
          }, t.prototype.getRoot = function () {
            a.validateArgCount('Reference.root', 0, 0, arguments.length);
            for (var e = this; null !== e.getParent();)
              e = e.getParent();
            return e;
          }, t.prototype.databaseProp = function () {
            return this.repo.database;
          }, t.prototype.set = function (e, t) {
            a.validateArgCount('Reference.set', 1, 2, arguments.length), de('Reference.set', this.path), oe('Reference.set', 1, e, this.path, !1), a.validateCallback('Reference.set', 2, t, !0);
            var n = new a.Deferred();
            return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise;
          }, t.prototype.update = function (e, t) {
            if (a.validateArgCount('Reference.update', 1, 2, arguments.length), de('Reference.update', this.path), Array.isArray(e)) {
              for (var n = {}, r = 0; r < e.length; ++r)
                n['' + r] = e[r];
              e = n, R('Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.');
            }
            ae('Reference.update', 1, e, this.path, !1), a.validateCallback('Reference.update', 2, t, !0);
            var i = new a.Deferred();
            return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise;
          }, t.prototype.setWithPriority = function (e, t, n) {
            if (a.validateArgCount('Reference.setWithPriority', 2, 3, arguments.length), de('Reference.setWithPriority', this.path), oe('Reference.setWithPriority', 1, e, this.path, !1), he('Reference.setWithPriority', 2, t, !1), a.validateCallback('Reference.setWithPriority', 3, n, !0), '.length' === this.getKey() || '.keys' === this.getKey())
              throw 'Reference.setWithPriority failed: ' + this.getKey() + ' is a read-only object.';
            var r = new a.Deferred();
            return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise;
          }, t.prototype.remove = function (e) {
            return a.validateArgCount('Reference.remove', 0, 1, arguments.length), de('Reference.remove', this.path), a.validateCallback('Reference.remove', 1, e, !0), this.set(null, e);
          }, t.prototype.transaction = function (e, t, n) {
            if (a.validateArgCount('Reference.transaction', 1, 3, arguments.length), de('Reference.transaction', this.path), a.validateCallback('Reference.transaction', 1, e, !1), a.validateCallback('Reference.transaction', 2, t, !0), _e('Reference.transaction', 3, n, !0), '.length' === this.getKey() || '.keys' === this.getKey())
              throw 'Reference.transaction failed: ' + this.getKey() + ' is a read-only object.';
            void 0 === n && (n = !0);
            var r = new a.Deferred();
            'function' == typeof t && r.promise.catch(function () {
            });
            var i = function (e, n, i) {
              e ? r.reject(e) : r.resolve(new ve(n, i)), 'function' == typeof t && t(e, n, i);
            };
            return this.repo.startTransaction(this.path, e, i, n), r.promise;
          }, t.prototype.setPriority = function (e, t) {
            a.validateArgCount('Reference.setPriority', 1, 2, arguments.length), de('Reference.setPriority', this.path), he('Reference.setPriority', 1, e, !1), a.validateCallback('Reference.setPriority', 2, t, !0);
            var n = new a.Deferred();
            return this.repo.setWithPriority(this.path.child('.priority'), e, null, n.wrapCallback(t)), n.promise;
          }, t.prototype.push = function (e, t) {
            a.validateArgCount('Reference.push', 0, 2, arguments.length), de('Reference.push', this.path), oe('Reference.push', 1, e, this.path, !0), a.validateCallback('Reference.push', 2, t, !0);
            var n, r = this.repo.serverTime(), i = ge(r), o = this.child(i), s = this.child(i);
            return n = null != e ? o.set(e, t).then(function () {
              return s;
            }) : Promise.resolve(s), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), 'function' == typeof t && n.catch(function () {
            }), o;
          }, t.prototype.onDisconnect = function () {
            return de('Reference.onDisconnect', this.path), new ye(this.repo, this.path);
          }, Object.defineProperty(t.prototype, 'database', {
            get: function () {
              return this.databaseProp();
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, 'key', {
            get: function () {
              return this.getKey();
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, 'parent', {
            get: function () {
              return this.getParent();
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, 'root', {
            get: function () {
              return this.getRoot();
            },
            enumerable: !1,
            configurable: !0
          }), t;
        }(et);
      et.__referenceConstructor = an, Dt.__referenceConstructor = an;
      var hn, un = function () {
          this.children = {}, this.childCount = 0, this.value = null;
        }, ln = function () {
          function e(e, t, n) {
            void 0 === e && (e = ''), void 0 === t && (t = null), void 0 === n && (n = new un()), this.name_ = e, this.parent_ = t, this.node_ = n;
          }
          return e.prototype.subTree = function (t) {
            for (var n = t instanceof j ? t : new j(t), r = this, i = n.getFront(); null !== i;) {
              r = new e(i, r, a.safeGet(r.node_.children, i) || new un()), i = (n = n.popFront()).getFront();
            }
            return r;
          }, e.prototype.getValue = function () {
            return this.node_.value;
          }, e.prototype.setValue = function (e) {
            a.assert(void 0 !== e, 'Cannot set value to undefined'), this.node_.value = e, this.updateParents_();
          }, e.prototype.clear = function () {
            this.node_.value = null, this.node_.children = {}, this.node_.childCount = 0, this.updateParents_();
          }, e.prototype.hasChildren = function () {
            return this.node_.childCount > 0;
          }, e.prototype.isEmpty = function () {
            return null === this.getValue() && !this.hasChildren();
          }, e.prototype.forEachChild = function (t) {
            var n = this;
            W(this.node_.children, function (r, i) {
              t(new e(r, n, i));
            });
          }, e.prototype.forEachDescendant = function (e, t, n) {
            t && !n && e(this), this.forEachChild(function (t) {
              t.forEachDescendant(e, !0, n);
            }), t && n && e(this);
          }, e.prototype.forEachAncestor = function (e, t) {
            for (var n = t ? this : this.parent(); null !== n;) {
              if (e(n))
                return !0;
              n = n.parent();
            }
            return !1;
          }, e.prototype.forEachImmediateDescendantWithValue = function (e) {
            this.forEachChild(function (t) {
              null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e);
            });
          }, e.prototype.path = function () {
            return new j(null === this.parent_ ? this.name_ : this.parent_.path() + '/' + this.name_);
          }, e.prototype.name = function () {
            return this.name_;
          }, e.prototype.parent = function () {
            return this.parent_;
          }, e.prototype.updateParents_ = function () {
            null !== this.parent_ && this.parent_.updateChild_(this.name_, this);
          }, e.prototype.updateChild_ = function (e, t) {
            var n = t.isEmpty(), r = a.contains(this.node_.children, e);
            n && r ? (delete this.node_.children[e], this.node_.childCount--, this.updateParents_()) : n || r || (this.node_.children[e] = t.node_, this.node_.childCount++, this.updateParents_());
          }, e;
        }();
      !function (e) {
        e[e.RUN = 0] = 'RUN', e[e.SENT = 1] = 'SENT', e[e.COMPLETED = 2] = 'COMPLETED', e[e.SENT_NEEDS_ABORT = 3] = 'SENT_NEEDS_ABORT', e[e.NEEDS_ABORT = 4] = 'NEEDS_ABORT';
      }(hn || (hn = {})), nn.MAX_TRANSACTION_RETRIES_ = 25, nn.prototype.transactionsInit_ = function () {
        this.transactionQueueTree_ = new ln();
      }, nn.prototype.startTransaction = function (e, t, n, r) {
        this.log_('transaction on ' + e);
        var o = function () {
          }, s = new an(this, e);
        s.on('value', o);
        var h = {
            path: e,
            update: t,
            onComplete: n,
            status: null,
            order: m(),
            applyLocally: r,
            retryCount: 0,
            unwatcher: function () {
              s.off('value', o);
            },
            abortReason: null,
            currentWriteId: null,
            currentInputSnapshot: null,
            currentOutputSnapshotRaw: null,
            currentOutputSnapshotResolved: null
          }, u = this.getLatestState_(e);
        h.currentInputSnapshot = u;
        var l = h.update(u.val());
        if (void 0 === l) {
          if (h.unwatcher(), h.currentOutputSnapshotRaw = null, h.currentOutputSnapshotResolved = null, h.onComplete) {
            var c = new Ge(h.currentInputSnapshot, new an(this, h.path), xe);
            h.onComplete(null, !1, c);
          }
        } else {
          se('transaction failed: Data returned ', l, h.path), h.status = hn.RUN;
          var p = this.transactionQueueTree_.subTree(e), d = p.getValue() || [];
          d.push(h), p.setValue(d);
          var f = void 0;
          if ('object' === i(l) && null !== l && a.contains(l, '.priority'))
            f = a.safeGet(l, '.priority'), a.assert(ie(f), 'Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.');
          else
            f = (this.serverSyncTree_.calcCompleteEventCache(e) || He.EMPTY_NODE).getPriority().val();
          f = f;
          var _ = this.generateServerValues(), y = Be(l, f), v = at(y, u, _);
          h.currentOutputSnapshotRaw = y, h.currentOutputSnapshotResolved = v, h.currentWriteId = this.getNextWriteId_();
          var g = this.serverSyncTree_.applyUserOverwrite(e, v, h.currentWriteId, h.applyLocally);
          this.eventQueue_.raiseEventsForChangedPath(e, g), this.sendReadyTransactions_();
        }
      }, nn.prototype.getLatestState_ = function (e, t) {
        return this.serverSyncTree_.calcCompleteEventCache(e, t) || He.EMPTY_NODE;
      }, nn.prototype.sendReadyTransactions_ = function (e) {
        var t = this;
        if (void 0 === e && (e = this.transactionQueueTree_), e || this.pruneCompletedTransactionsBelowNode_(e), null !== e.getValue()) {
          var n = this.buildTransactionQueue_(e);
          a.assert(n.length > 0, 'Sending zero length transaction queue'), n.every(function (e) {
            return e.status === hn.RUN;
          }) && this.sendTransactionQueue_(e.path(), n);
        } else
          e.hasChildren() && e.forEachChild(function (e) {
            t.sendReadyTransactions_(e);
          });
      }, nn.prototype.sendTransactionQueue_ = function (e, t) {
        for (var n = this, r = t.map(function (e) {
              return e.currentWriteId;
            }), i = this.getLatestState_(e, r), o = i, s = i.hash(), h = 0; h < t.length; h++) {
          var u = t[h];
          a.assert(u.status === hn.RUN, 'tryToSendTransactionQueue_: items in queue should all be run.'), u.status = hn.SENT, u.retryCount++;
          var l = j.relativePath(e, u.path);
          o = o.updateChild(l, u.currentOutputSnapshotRaw);
        }
        var c = o.val(!0), p = e;
        this.server_.put(p.toString(), c, function (r) {
          n.log_('transaction put response', {
            path: p.toString(),
            status: r
          });
          var i = [];
          if ('ok' === r) {
            for (var o = [], s = 0; s < t.length; s++) {
              if (t[s].status = hn.COMPLETED, i = i.concat(n.serverSyncTree_.ackUserWrite(t[s].currentWriteId)), t[s].onComplete) {
                var a = t[s].currentOutputSnapshotResolved, h = new an(n, t[s].path), u = new Ge(a, h, xe);
                o.push(t[s].onComplete.bind(null, null, !0, u));
              }
              t[s].unwatcher();
            }
            n.pruneCompletedTransactionsBelowNode_(n.transactionQueueTree_.subTree(e)), n.sendReadyTransactions_(), n.eventQueue_.raiseEventsForChangedPath(e, i);
            for (s = 0; s < o.length; s++)
              V(o[s]);
          } else {
            if ('datastale' === r)
              for (s = 0; s < t.length; s++)
                t[s].status === hn.SENT_NEEDS_ABORT ? t[s].status = hn.NEEDS_ABORT : t[s].status = hn.RUN;
            else {
              R('transaction at ' + p.toString() + ' failed: ' + r);
              for (s = 0; s < t.length; s++)
                t[s].status = hn.NEEDS_ABORT, t[s].abortReason = r;
            }
            n.rerunTransactions_(e);
          }
        }, s);
      }, nn.prototype.rerunTransactions_ = function (e) {
        var t = this.getAncestorTransactionNode_(e), n = t.path(), r = this.buildTransactionQueue_(t);
        return this.rerunTransactionQueue_(r, n), n;
      }, nn.prototype.rerunTransactionQueue_ = function (e, t) {
        if (0 !== e.length) {
          for (var n, r = [], o = [], s = e.filter(function (e) {
                return e.status === hn.RUN;
              }).map(function (e) {
                return e.currentWriteId;
              }), h = 0; h < e.length; h++) {
            var u = e[h], l = j.relativePath(t, u.path), c = !1, p = void 0;
            if (a.assert(null !== l, 'rerunTransactionsUnderNode_: relativePath should not be null.'), u.status === hn.NEEDS_ABORT)
              c = !0, p = u.abortReason, o = o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0));
            else if (u.status === hn.RUN)
              if (u.retryCount >= nn.MAX_TRANSACTION_RETRIES_)
                c = !0, p = 'maxretry', o = o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0));
              else {
                var d = this.getLatestState_(u.path, s);
                u.currentInputSnapshot = d;
                var f = e[h].update(d.val());
                if (void 0 !== f) {
                  se('transaction failed: Data returned ', f, u.path);
                  var _ = Be(f);
                  'object' === i(f) && null != f && a.contains(f, '.priority') || (_ = _.updatePriority(d.getPriority()));
                  var y = u.currentWriteId, v = this.generateServerValues(), g = at(_, d, v);
                  u.currentOutputSnapshotRaw = _, u.currentOutputSnapshotResolved = g, u.currentWriteId = this.getNextWriteId_(), s.splice(s.indexOf(y), 1), o = (o = o.concat(this.serverSyncTree_.applyUserOverwrite(u.path, g, u.currentWriteId, u.applyLocally))).concat(this.serverSyncTree_.ackUserWrite(y, !0));
                } else
                  c = !0, p = 'nodata', o = o.concat(this.serverSyncTree_.ackUserWrite(u.currentWriteId, !0));
              }
            if (this.eventQueue_.raiseEventsForChangedPath(t, o), o = [], c && (e[h].status = hn.COMPLETED, n = e[h].unwatcher, setTimeout(n, Math.floor(0)), e[h].onComplete))
              if ('nodata' === p) {
                var m = new an(this, e[h].path), C = e[h].currentInputSnapshot, E = new Ge(C, m, xe);
                r.push(e[h].onComplete.bind(null, null, !1, E));
              } else
                r.push(e[h].onComplete.bind(null, new Error(p), !1, null));
          }
          this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
          for (h = 0; h < r.length; h++)
            V(r[h]);
          this.sendReadyTransactions_();
        }
      }, nn.prototype.getAncestorTransactionNode_ = function (e) {
        var t, n = this.transactionQueueTree_;
        for (t = e.getFront(); null !== t && null === n.getValue();)
          n = n.subTree(t), t = (e = e.popFront()).getFront();
        return n;
      }, nn.prototype.buildTransactionQueue_ = function (e) {
        var t = [];
        return this.aggregateTransactionQueuesForNode_(e, t), t.sort(function (e, t) {
          return e.order - t.order;
        }), t;
      }, nn.prototype.aggregateTransactionQueuesForNode_ = function (e, t) {
        var n = this, r = e.getValue();
        if (null !== r)
          for (var i = 0; i < r.length; i++)
            t.push(r[i]);
        e.forEachChild(function (e) {
          n.aggregateTransactionQueuesForNode_(e, t);
        });
      }, nn.prototype.pruneCompletedTransactionsBelowNode_ = function (e) {
        var t = this, n = e.getValue();
        if (n) {
          for (var r = 0, i = 0; i < n.length; i++)
            n[i].status !== hn.COMPLETED && (n[r] = n[i], r++);
          n.length = r, e.setValue(n.length > 0 ? n : null);
        }
        e.forEachChild(function (e) {
          t.pruneCompletedTransactionsBelowNode_(e);
        });
      }, nn.prototype.abortTransactions_ = function (e) {
        var t = this, n = this.getAncestorTransactionNode_(e).path(), r = this.transactionQueueTree_.subTree(e);
        return r.forEachAncestor(function (e) {
          t.abortTransactionsOnNode_(e);
        }), this.abortTransactionsOnNode_(r), r.forEachDescendant(function (e) {
          t.abortTransactionsOnNode_(e);
        }), n;
      }, nn.prototype.abortTransactionsOnNode_ = function (e) {
        var t = e.getValue();
        if (null !== t) {
          for (var n = [], r = [], i = -1, o = 0; o < t.length; o++)
            if (t[o].status === hn.SENT_NEEDS_ABORT);
            else if (t[o].status === hn.SENT)
              a.assert(i === o - 1, 'All SENT items should be at beginning of queue.'), i = o, t[o].status = hn.SENT_NEEDS_ABORT, t[o].abortReason = 'set';
            else if (a.assert(t[o].status === hn.RUN, 'Unexpected transaction status in abort'), t[o].unwatcher(), r = r.concat(this.serverSyncTree_.ackUserWrite(t[o].currentWriteId, !0)), t[o].onComplete) {
              n.push(t[o].onComplete.bind(null, new Error('set'), !1, null));
            }
          -1 === i ? e.setValue(null) : t.length = i + 1, this.eventQueue_.raiseEventsForChangedPath(e.path(), r);
          for (o = 0; o < n.length; o++)
            V(n[o]);
        }
      };
      var cn, pn = function () {
          function e(e, t) {
            var n = this;
            this.app_ = e, this.authProvider_ = t, this.auth_ = null, this.auth_ = t.getImmediate({ optional: !0 }), this.auth_ || t.get().then(function (e) {
              return n.auth_ = e;
            });
          }
          return e.prototype.getToken = function (e) {
            return this.auth_ ? this.auth_.getToken(e).catch(function (e) {
              return e && 'auth/token-not-initialized' === e.code ? (S('Got auth/token-not-initialized error.  Treating as null token.'), null) : Promise.reject(e);
            }) : Promise.resolve(null);
          }, e.prototype.addTokenChangeListener = function (e) {
            this.auth_ ? this.auth_.addAuthTokenListener(e) : (setTimeout(function () {
              return e(null);
            }, 0), this.authProvider_.get().then(function (t) {
              return t.addAuthTokenListener(e);
            }));
          }, e.prototype.removeTokenChangeListener = function (e) {
            this.authProvider_.get().then(function (t) {
              return t.removeAuthTokenListener(e);
            });
          }, e.prototype.notifyForInvalidToken = function () {
            var e = 'Provided authentication credentials for the app named "' + this.app_.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
            'credential' in this.app_.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : 'serviceAccount' in this.app_.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', R(e);
          }, e;
        }(), dn = function () {
          function e() {
          }
          return e.prototype.getToken = function (t) {
            return Promise.resolve({ accessToken: e.EMULATOR_AUTH_TOKEN });
          }, e.prototype.addTokenChangeListener = function (t) {
            t(e.EMULATOR_AUTH_TOKEN);
          }, e.prototype.removeTokenChangeListener = function (e) {
          }, e.prototype.notifyForInvalidToken = function () {
          }, e.EMULATOR_AUTH_TOKEN = 'owner', e;
        }(), fn = function () {
          function e() {
            this.repos_ = {}, this.useRestClient_ = !1;
          }
          return e.getInstance = function () {
            return cn || (cn = new e()), cn;
          }, e.prototype.interrupt = function () {
            var e, t, n, r;
            try {
              for (var i = s.__values(Object.keys(this.repos_)), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                try {
                  for (var h = (n = void 0, s.__values(Object.keys(this.repos_[a]))), u = h.next(); !u.done; u = h.next()) {
                    var l = u.value;
                    this.repos_[a][l].interrupt();
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = h.return) && r.call(h);
                  } finally {
                    if (n)
                      throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
          }, e.prototype.resume = function () {
            var e, t, n, r;
            try {
              for (var i = s.__values(Object.keys(this.repos_)), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                try {
                  for (var h = (n = void 0, s.__values(Object.keys(this.repos_[a]))), u = h.next(); !u.done; u = h.next()) {
                    var l = u.value;
                    this.repos_[a][l].resume();
                  }
                } catch (e) {
                  n = { error: e };
                } finally {
                  try {
                    u && !u.done && (r = h.return) && r.call(h);
                  } finally {
                    if (n)
                      throw n.error;
                  }
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                o && !o.done && (t = i.return) && t.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
          }, e.prototype.databaseFromApp = function (e, t, n, i) {
            var o = n || e.options.databaseURL;
            void 0 === o && (e.options.projectId || P('Can\'t determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().'), S('Using default host for project ', e.options.projectId), o = e.options.projectId + '-default-rtdb.firebaseio.com');
            var s, a = J(o, i), h = a.repoInfo, u = void 0;
            void 0 !== r && (u = r.env.FIREBASE_DATABASE_EMULATOR_HOST), u ? (s = !0, o = 'http://' + u + '?ns=' + h.namespace, h = (a = J(o, i)).repoInfo) : s = !a.repoInfo.secure;
            var l = i && s ? new dn() : new pn(e, t);
            return fe('Invalid Firebase Database URL', 1, a), a.path.isEmpty() || P('Database URL must point to the root of a Firebase Database (not including a child path).'), this.createRepo(h, e, l).database;
          }, e.prototype.deleteRepo = function (e) {
            var t = a.safeGet(this.repos_, e.app.name);
            t && a.safeGet(t, e.repoInfo_.toURLString()) === e || P('Database ' + e.app.name + '(' + e.repoInfo_ + ') has already been deleted.'), e.interrupt(), delete t[e.repoInfo_.toURLString()];
          }, e.prototype.createRepo = function (e, t, n) {
            var r = a.safeGet(this.repos_, t.name);
            r || (r = {}, this.repos_[t.name] = r);
            var i = a.safeGet(r, e.toURLString());
            return i && P('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'), i = new nn(e, this.useRestClient_, t, n), r[e.toURLString()] = i, i;
          }, e.prototype.forceRestClient = function (e) {
            this.useRestClient_ = e;
          }, e;
        }(), _n = function () {
          function e(e) {
            this.repo_ = e, e instanceof nn || P('Don\'t call new Database() directly - please use firebase.database().'), this.root_ = new an(e, j.Empty), this.INTERNAL = new yn(this);
          }
          return Object.defineProperty(e.prototype, 'app', {
            get: function () {
              return this.repo_.app;
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.ref = function (e) {
            return this.checkDeleted_('ref'), a.validateArgCount('database.ref', 0, 1, arguments.length), e instanceof an ? this.refFromURL(e.toString()) : void 0 !== e ? this.root_.child(e) : this.root_;
          }, e.prototype.refFromURL = function (e) {
            var t = 'database.refFromURL';
            this.checkDeleted_(t), a.validateArgCount(t, 1, 1, arguments.length);
            var n = J(e, this.repo_.repoInfo_.nodeAdmin);
            fe(t, 1, n);
            var r = n.repoInfo;
            return r.host !== this.repo_.repoInfo_.host && P(t + ': Host name does not match the current database: (found ' + r.host + ' but expected ' + this.repo_.repoInfo_.host + ')'), this.ref(n.path.toString());
          }, e.prototype.checkDeleted_ = function (e) {
            null === this.repo_ && P('Cannot call ' + e + ' on a deleted database.');
          }, e.prototype.goOffline = function () {
            a.validateArgCount('database.goOffline', 0, 0, arguments.length), this.checkDeleted_('goOffline'), this.repo_.interrupt();
          }, e.prototype.goOnline = function () {
            a.validateArgCount('database.goOnline', 0, 0, arguments.length), this.checkDeleted_('goOnline'), this.repo_.resume();
          }, e.ServerValue = {
            TIMESTAMP: { '.sv': 'timestamp' },
            increment: function (e) {
              return { '.sv': { increment: e } };
            }
          }, e;
        }(), yn = function () {
          function e(e) {
            this.database = e;
          }
          return e.prototype.delete = function () {
            return s.__awaiter(this, void 0, void 0, function () {
              return s.__generator(this, function (e) {
                return this.database.checkDeleted_('delete'), fn.getInstance().deleteRepo(this.database.repo_), this.database.repo_ = null, this.database.root_ = null, this.database.INTERNAL = null, this.database = null, [2];
              });
            });
          }, e;
        }(), vn = Object.freeze({
          __proto__: null,
          forceLongPolling: function () {
            Xt.forceDisallow(), Kt.forceAllow();
          },
          forceWebSockets: function () {
            Kt.forceDisallow();
          },
          isWebSocketsAvailable: function () {
            return Xt.isAvailable();
          },
          setSecurityDebugCallback: function (e, t) {
            e.repo.persistentConnection_.securityDebugCallback_ = t;
          },
          stats: function (e, t) {
            e.repo.stats(t);
          },
          statsIncrementCounter: function (e, t) {
            e.repo.statsIncrementCounter(t);
          },
          dataUpdateCount: function (e) {
            return e.repo.dataUpdateCount;
          },
          interceptServerData: function (e, t) {
            return e.repo.interceptServerData_(t);
          }
        }), gn = en;
      en.prototype.simpleListen = function (e, t) {
        this.sendRequest('q', { p: e }, t);
      }, en.prototype.echo = function (e, t) {
        this.sendRequest('echo', { d: e }, t);
      };
      var mn = Jt, Cn = K, En = Object.freeze({
          __proto__: null,
          DataConnection: gn,
          RealTimeConnection: mn,
          hijackHash: function (e) {
            var t = en.prototype.put;
            return en.prototype.put = function (n, r, i, o) {
              void 0 !== o && (o = e()), t.call(this, n, r, i, o);
            }, function () {
              en.prototype.put = t;
            };
          },
          ConnectionTarget: Cn,
          queryIdentifier: function (e) {
            return e.queryIdentifier();
          },
          forceRestClient: function (e) {
            fn.getInstance().forceRestClient(e);
          }
        }), wn = _n.ServerValue;
      function Tn(t) {
        !function (e) {
          zt = e;
        }(t.SDK_VERSION);
        var n = t.INTERNAL.registerComponent(new u.Component('database', function (e, t) {
          var n = e.getProvider('app').getImmediate(), r = e.getProvider('auth-internal');
          return fn.getInstance().databaseFromApp(n, r, t);
        }, 'PUBLIC').setServiceProps({
          Reference: an,
          Query: et,
          Database: _n,
          DataSnapshot: Ge,
          enableLogging: b,
          INTERNAL: vn,
          ServerValue: wn,
          TEST_ACCESS: En
        }).setMultipleInstances(!0));
        t.registerVersion('@firebase/database', '0.6.13'), a.isNodeSdk() && (e.exports = n);
      }
      Tn(p.default), t.DataSnapshot = Ge, t.Database = _n, t.OnDisconnect = ye, t.Query = et, t.Reference = an, t.ServerValue = wn, t.enableLogging = b, t.registerDatabase = Tn;
    }.call(this, n('8oxB')));
  }
}]);