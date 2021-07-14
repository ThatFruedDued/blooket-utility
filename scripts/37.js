(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{
  LOEa: function (t, e, n) {
    (function (t) {
      function e(t) {
        return (e = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      (function () {
        var i, r = n('wj3C').default, o = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
            t != Array.prototype && t != Object.prototype && (t[e] = n.value);
          };
        var a = function (n) {
          n = [
            'object' == ('undefined' == typeof window ? 'undefined' : e(window)) && window,
            'object' == ('undefined' == typeof self ? 'undefined' : e(self)) && self,
            'object' == (void 0 === t ? 'undefined' : e(t)) && t,
            n
          ];
          for (var i = 0; i < n.length; ++i) {
            var r = n[i];
            if (r && r.Math == Math)
              return r;
          }
          return globalThis;
        }(this);
        function s(t) {
          var e = 0;
          return function () {
            return e < t.length ? {
              done: !1,
              value: t[e++]
            } : { done: !0 };
          };
        }
        function u(t) {
          var e = 'undefined' != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
          return e ? e.call(t) : { next: s(t) };
        }
        !function (t, e) {
          if (e) {
            var n = a;
            t = t.split('.');
            for (var i = 0; i < t.length - 1; i++) {
              var r = t[i];
              r in n || (n[r] = {}), n = n[r];
            }
            (e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        }('Promise', function (t) {
          function n(t) {
            this.b = 0, this.c = void 0, this.a = [];
            var e = this.f();
            try {
              t(e.resolve, e.reject);
            } catch (t) {
              e.reject(t);
            }
          }
          function i() {
            this.a = null;
          }
          function r(t) {
            return t instanceof n ? t : new n(function (e) {
              e(t);
            });
          }
          if (t)
            return t;
          i.prototype.b = function (t) {
            if (null == this.a) {
              this.a = [];
              var e = this;
              this.c(function () {
                e.g();
              });
            }
            this.a.push(t);
          };
          var o = a.setTimeout;
          i.prototype.c = function (t) {
            o(t, 0);
          }, i.prototype.g = function () {
            for (; this.a && this.a.length;) {
              var t = this.a;
              this.a = [];
              for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                t[e] = null;
                try {
                  n();
                } catch (t) {
                  this.f(t);
                }
              }
            }
            this.a = null;
          }, i.prototype.f = function (t) {
            this.c(function () {
              throw t;
            });
          }, n.prototype.f = function () {
            function t(t) {
              return function (i) {
                n || (n = !0, t.call(e, i));
              };
            }
            var e = this, n = !1;
            return {
              resolve: t(this.m),
              reject: t(this.g)
            };
          }, n.prototype.m = function (t) {
            if (t === this)
              this.g(new TypeError('A Promise cannot resolve to itself'));
            else if (t instanceof n)
              this.s(t);
            else {
              t:
                switch (e(t)) {
                case 'object':
                  var i = null != t;
                  break t;
                case 'function':
                  i = !0;
                  break t;
                default:
                  i = !1;
                }
              i ? this.u(t) : this.h(t);
            }
          }, n.prototype.u = function (t) {
            var e = void 0;
            try {
              e = t.then;
            } catch (t) {
              return void this.g(t);
            }
            'function' == typeof e ? this.w(e, t) : this.h(t);
          }, n.prototype.g = function (t) {
            this.i(2, t);
          }, n.prototype.h = function (t) {
            this.i(1, t);
          }, n.prototype.i = function (t, e) {
            if (0 != this.b)
              throw Error('Cannot settle(' + t + ', ' + e + '): Promise already settled in state' + this.b);
            this.b = t, this.c = e, this.l();
          }, n.prototype.l = function () {
            if (null != this.a) {
              for (var t = 0; t < this.a.length; ++t)
                s.b(this.a[t]);
              this.a = null;
            }
          };
          var s = new i();
          return n.prototype.s = function (t) {
            var e = this.f();
            t.Oa(e.resolve, e.reject);
          }, n.prototype.w = function (t, e) {
            var n = this.f();
            try {
              t.call(e, n.resolve, n.reject);
            } catch (t) {
              n.reject(t);
            }
          }, n.prototype.then = function (t, e) {
            function i(t, e) {
              return 'function' == typeof t ? function (e) {
                try {
                  r(t(e));
                } catch (t) {
                  o(t);
                }
              } : e;
            }
            var r, o, a = new n(function (t, e) {
                r = t, o = e;
              });
            return this.Oa(i(t, r), i(e, o)), a;
          }, n.prototype.catch = function (t) {
            return this.then(void 0, t);
          }, n.prototype.Oa = function (t, e) {
            function n() {
              switch (i.b) {
              case 1:
                t(i.c);
                break;
              case 2:
                e(i.c);
                break;
              default:
                throw Error('Unexpected state: ' + i.b);
              }
            }
            var i = this;
            null == this.a ? s.b(n) : this.a.push(n);
          }, n.resolve = r, n.reject = function (t) {
            return new n(function (e, n) {
              n(t);
            });
          }, n.race = function (t) {
            return new n(function (e, n) {
              for (var i = u(t), o = i.next(); !o.done; o = i.next())
                r(o.value).Oa(e, n);
            });
          }, n.all = function (t) {
            var e = u(t), i = e.next();
            return i.done ? r([]) : new n(function (t, n) {
              function o(e) {
                return function (n) {
                  a[e] = n, 0 == --s && t(a);
                };
              }
              var a = [], s = 0;
              do {
                a.push(void 0), s++, r(i.value).Oa(o(a.length - 1), n), i = e.next();
              } while (!i.done);
            });
          }, n;
        });
        var c = c || {}, h = this || self, f = /^[\w+/_-]+[=]{0,2}$/, l = null;
        function d() {
        }
        function p(t) {
          var n = e(t);
          if ('object' == n) {
            if (!t)
              return 'null';
            if (t instanceof Array)
              return 'array';
            if (t instanceof Object)
              return n;
            var i = Object.prototype.toString.call(t);
            if ('[object Window]' == i)
              return 'object';
            if ('[object Array]' == i || 'number' == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable('splice'))
              return 'array';
            if ('[object Function]' == i || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable('call'))
              return 'function';
          } else if ('function' == n && void 0 === t.call)
            return 'object';
          return n;
        }
        function v(t) {
          var e = p(t);
          return 'array' == e || 'object' == e && 'number' == typeof t.length;
        }
        function g(t) {
          return 'function' == p(t);
        }
        function m(t) {
          var n = e(t);
          return 'object' == n && null != t || 'function' == n;
        }
        function b(t) {
          return Object.prototype.hasOwnProperty.call(t, y) && t[y] || (t[y] = ++w);
        }
        var y = 'closure_uid_' + (1000000000 * Math.random() >>> 0), w = 0;
        function I(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }
        function E(t, e, n) {
          if (!t)
            throw Error();
          if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              var n = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(n, i), t.apply(e, n);
            };
          }
          return function () {
            return t.apply(e, arguments);
          };
        }
        function T(t, e, n) {
          return (T = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? I : E).apply(null, arguments);
        }
        function _(t, e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var e = n.slice();
            return e.push.apply(e, arguments), t.apply(this, e);
          };
        }
        var S = Date.now || function () {
          return +new Date();
        };
        function A(t, e) {
          function n() {
          }
          n.prototype = e.prototype, t.Za = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
        }
        function k(t, e, n) {
          this.code = C + t, this.message = e || D[t] || '', this.a = n || null;
        }
        function N(t) {
          var e = t && t.code;
          return e ? new k(e.substring(C.length), t.message, t.serverResponse) : null;
        }
        A(k, Error), k.prototype.v = function () {
          var t = {
            code: this.code,
            message: this.message
          };
          return this.a && (t.serverResponse = this.a), t;
        }, k.prototype.toJSON = function () {
          return this.v();
        };
        var O, C = 'auth/', D = {
            'admin-restricted-operation': 'This operation is restricted to administrators only.',
            'argument-error': '',
            'app-not-authorized': 'This app, identified by the domain where it\'s hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.',
            'app-not-installed': 'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
            'captcha-check-failed': 'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
            'code-expired': 'The SMS code has expired. Please re-send the verification code to try again.',
            'cordova-not-ready': 'Cordova framework is not ready.',
            'cors-unsupported': 'This browser is not supported.',
            'credential-already-in-use': 'This credential is already associated with a different user account.',
            'custom-token-mismatch': 'The custom token corresponds to a different audience.',
            'requires-recent-login': 'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
            'dynamic-link-not-activated': 'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
            'email-change-needs-verification': 'Multi-factor users must always have a verified email.',
            'email-already-in-use': 'The email address is already in use by another account.',
            'expired-action-code': 'The action code has expired. ',
            'cancelled-popup-request': 'This operation has been cancelled due to another conflicting popup being opened.',
            'internal-error': 'An internal error has occurred.',
            'invalid-app-credential': 'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
            'invalid-app-id': 'The mobile app identifier is not registed for the current project.',
            'invalid-user-token': 'This user\'s credential isn\'t valid for this project. This can happen if the user\'s token has been tampered with, or if the user isn\'t for the project associated with this API key.',
            'invalid-auth-event': 'An internal error has occurred.',
            'invalid-verification-code': 'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
            'invalid-continue-uri': 'The continue URL provided in the request is invalid.',
            'invalid-cordova-configuration': 'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
            'invalid-custom-token': 'The custom token format is incorrect. Please check the documentation.',
            'invalid-dynamic-link-domain': 'The provided dynamic link domain is not configured or authorized for the current project.',
            'invalid-email': 'The email address is badly formatted.',
            'invalid-api-key': 'Your API key is invalid, please check you have copied it correctly.',
            'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
            'invalid-credential': 'The supplied auth credential is malformed or has expired.',
            'invalid-message-payload': 'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-multi-factor-session': 'The request does not contain a valid proof of first factor successful sign-in.',
            'invalid-oauth-provider': 'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
            'invalid-oauth-client-id': 'The OAuth client ID provided is either invalid or does not match the specified API key.',
            'unauthorized-domain': 'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
            'invalid-action-code': 'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
            'wrong-password': 'The password is invalid or the user does not have a password.',
            'invalid-persistence-type': 'The specified persistence type is invalid. It can only be local, session or none.',
            'invalid-phone-number': 'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
            'invalid-provider-id': 'The specified provider ID is invalid.',
            'invalid-recipient-email': 'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
            'invalid-sender': 'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-verification-id': 'The verification ID used to create the phone auth credential is invalid.',
            'invalid-tenant-id': 'The Auth instance\'s tenant ID is invalid.',
            'multi-factor-info-not-found': 'The user does not have a second factor matching the identifier provided.',
            'multi-factor-auth-required': 'Proof of ownership of a second factor is required to complete sign-in.',
            'missing-android-pkg-name': 'An Android Package Name must be provided if the Android App is required to be installed.',
            'auth-domain-config-required': 'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
            'missing-app-credential': 'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
            'missing-verification-code': 'The phone auth credential was created with an empty SMS verification code.',
            'missing-continue-uri': 'A continue URL must be provided in the request.',
            'missing-iframe-start': 'An internal error has occurred.',
            'missing-ios-bundle-id': 'An iOS Bundle ID must be provided if an App Store ID is provided.',
            'missing-multi-factor-info': 'No second factor identifier is provided.',
            'missing-multi-factor-session': 'The request is missing proof of first factor successful sign-in.',
            'missing-or-invalid-nonce': 'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
            'missing-phone-number': 'To send verification codes, provide a phone number for the recipient.',
            'missing-verification-id': 'The phone auth credential was created with an empty verification ID.',
            'app-deleted': 'This instance of FirebaseApp has been deleted.',
            'account-exists-with-different-credential': 'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
            'network-request-failed': 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
            'no-auth-event': 'An internal error has occurred.',
            'no-such-provider': 'User was not linked to an account with the given provider.',
            'null-user': 'A null user object was provided as the argument for an operation which requires a non-null user object.',
            'operation-not-allowed': 'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
            'operation-not-supported-in-this-environment': 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            'popup-blocked': 'Unable to establish a connection with the popup. It may have been blocked by the browser.',
            'popup-closed-by-user': 'The popup has been closed by the user before finalizing the operation.',
            'provider-already-linked': 'User can only be linked to one identity for the given provider.',
            'quota-exceeded': 'The project\'s quota for this operation has been exceeded.',
            'redirect-cancelled-by-user': 'The redirect operation has been cancelled by the user before finalizing.',
            'redirect-operation-pending': 'A redirect sign-in operation is already pending.',
            'rejected-credential': 'The request contains malformed or mismatching credentials.',
            'second-factor-already-in-use': 'The second factor is already enrolled on this account.',
            'maximum-second-factor-count-exceeded': 'The maximum allowed number of second factors on a user has been exceeded.',
            'tenant-id-mismatch': 'The provided tenant ID does not match the Auth instance\'s tenant ID',
            timeout: 'The operation has timed out.',
            'user-token-expired': 'The user\'s credential is no longer valid. The user must sign in again.',
            'too-many-requests': 'We have blocked all requests from this device due to unusual activity. Try again later.',
            'unauthorized-continue-uri': 'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
            'unsupported-first-factor': 'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
            'unsupported-persistence-type': 'The current environment does not support the specified persistence type.',
            'unsupported-tenant-operation': 'This operation is not supported in a multi-tenant context.',
            'unverified-email': 'The operation requires a verified email.',
            'user-cancelled': 'The user did not grant your application the permissions it requested.',
            'user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
            'user-disabled': 'The user account has been disabled by an administrator.',
            'user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
            'user-signed-out': '',
            'weak-password': 'The password must be 6 characters long or more.',
            'web-storage-unsupported': 'This browser is not supported or 3rd party cookies and data may be disabled.'
          }, P = {
            hd: {
              Ra: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 'b'
            },
            pd: {
              Ra: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://securetoken.googleapis.com/v1/token',
              Ua: 'https://identitytoolkit.googleapis.com/v2/',
              id: 'p'
            },
            rd: {
              Ra: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 's'
            },
            sd: {
              Ra: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 't'
            }
          };
        function R(t) {
          for (var e in P)
            if (P[e].id === t)
              return {
                firebaseEndpoint: (t = P[e]).Ra,
                secureTokenEndpoint: t.Xa,
                identityPlatformEndpoint: t.Ua
              };
          return null;
        }
        function L(t) {
          if (!t)
            return !1;
          try {
            return !!t.$goog_Thenable;
          } catch (t) {
            return !1;
          }
        }
        function j(t) {
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, j);
          else {
            var e = Error().stack;
            e && (this.stack = e);
          }
          t && (this.message = String(t));
        }
        function M(t, e) {
          for (var n = '', i = (t = t.split('%s')).length - 1, r = 0; r < i; r++)
            n += t[r] + (r < e.length ? e[r] : '%s');
          j.call(this, n + t[i]);
        }
        function x(t, e) {
          throw new M('Failure' + (t ? ': ' + t : ''), Array.prototype.slice.call(arguments, 1));
        }
        function V(t, e) {
          this.c = t, this.f = e, this.b = 0, this.a = null;
        }
        function U(t, e) {
          t.f(e), 100 > t.b && (t.b++, e.next = t.a, t.a = e);
        }
        function F() {
          this.b = this.a = null;
        }
        O = R('__EID__') ? '__EID__' : void 0, A(j, Error), j.prototype.name = 'CustomError', A(M, j), M.prototype.name = 'AssertionError', V.prototype.get = function () {
          if (0 < this.b) {
            this.b--;
            var t = this.a;
            this.a = t.next, t.next = null;
          } else
            t = this.c();
          return t;
        };
        var H = new V(function () {
          return new q();
        }, function (t) {
          t.reset();
        });
        function B() {
          var t = we, e = null;
          return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e;
        }
        function q() {
          this.next = this.b = this.a = null;
        }
        F.prototype.add = function (t, e) {
          var n = H.get();
          n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n;
        }, q.prototype.set = function (t, e) {
          this.a = t, this.b = e, this.next = null;
        }, q.prototype.reset = function () {
          this.next = this.b = this.a = null;
        };
        var K = Array.prototype.indexOf ? function (t, e) {
            return Array.prototype.indexOf.call(t, e, void 0);
          } : function (t, e) {
            if ('string' == typeof t)
              return 'string' != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
            for (var n = 0; n < t.length; n++)
              if (n in t && t[n] === e)
                return n;
            return -1;
          }, G = Array.prototype.forEach ? function (t, e, n) {
            Array.prototype.forEach.call(t, e, n);
          } : function (t, e, n) {
            for (var i = t.length, r = 'string' == typeof t ? t.split('') : t, o = 0; o < i; o++)
              o in r && e.call(n, r[o], o, t);
          };
        var W = Array.prototype.filter ? function (t, e) {
            return Array.prototype.filter.call(t, e, void 0);
          } : function (t, e) {
            for (var n = t.length, i = [], r = 0, o = 'string' == typeof t ? t.split('') : t, a = 0; a < n; a++)
              if (a in o) {
                var s = o[a];
                e.call(void 0, s, a, t) && (i[r++] = s);
              }
            return i;
          }, J = Array.prototype.map ? function (t, e) {
            return Array.prototype.map.call(t, e, void 0);
          } : function (t, e) {
            for (var n = t.length, i = Array(n), r = 'string' == typeof t ? t.split('') : t, o = 0; o < n; o++)
              o in r && (i[o] = e.call(void 0, r[o], o, t));
            return i;
          }, X = Array.prototype.some ? function (t, e) {
            return Array.prototype.some.call(t, e, void 0);
          } : function (t, e) {
            for (var n = t.length, i = 'string' == typeof t ? t.split('') : t, r = 0; r < n; r++)
              if (r in i && e.call(void 0, i[r], r, t))
                return !0;
            return !1;
          };
        function z(t, e) {
          return 0 <= K(t, e);
        }
        function Y(t, e) {
          var n;
          return (n = 0 <= (e = K(t, e))) && Array.prototype.splice.call(t, e, 1), n;
        }
        function $(t, e) {
          !function (t, e) {
            for (var n = 'string' == typeof t ? t.split('') : t, i = t.length - 1; 0 <= i; --i)
              i in n && e.call(void 0, n[i], i, t);
          }(t, function (n, i) {
            e.call(void 0, n, i, t) && 1 == Array.prototype.splice.call(t, i, 1).length && 0;
          });
        }
        function Z(t) {
          return Array.prototype.concat.apply([], arguments);
        }
        function Q(t) {
          var e = t.length;
          if (0 < e) {
            for (var n = Array(e), i = 0; i < e; i++)
              n[i] = t[i];
            return n;
          }
          return [];
        }
        var tt, et = String.prototype.trim ? function (t) {
            return t.trim();
          } : function (t) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
          }, nt = /&/g, it = /</g, rt = />/g, ot = /"/g, at = /'/g, st = /\x00/g, ut = /[\x00&<>"']/;
        function ct(t, e) {
          return -1 != t.indexOf(e);
        }
        function ht(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }
        t: {
          var ft = h.navigator;
          if (ft) {
            var lt = ft.userAgent;
            if (lt) {
              tt = lt;
              break t;
            }
          }
          tt = '';
        }
        function dt(t) {
          return ct(tt, t);
        }
        function pt(t, e) {
          for (var n in t)
            e.call(void 0, t[n], n, t);
        }
        function vt(t) {
          for (var e in t)
            return !1;
          return !0;
        }
        function gt(t) {
          var e, n = {};
          for (e in t)
            n[e] = t[e];
          return n;
        }
        var mt = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
        function bt(t, e) {
          for (var n, i, r = 1; r < arguments.length; r++) {
            for (n in i = arguments[r])
              t[n] = i[n];
            for (var o = 0; o < mt.length; o++)
              n = mt[o], Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
          }
        }
        function yt(t, n) {
          t: {
            try {
              var i = t && t.ownerDocument, r = i && (i.defaultView || i.parentWindow);
              if ((r = r || h).Element && r.Location) {
                var o = r;
                break t;
              }
            } catch (t) {
            }
            o = null;
          }
          if (o && void 0 !== o[n] && (!t || !(t instanceof o[n]) && (t instanceof o.Location || t instanceof o.Element))) {
            if (m(t))
              try {
                var a = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t);
              } catch (t) {
                a = '<object could not be stringified>';
              }
            else
              a = void 0 === t ? 'undefined' : null === t ? 'null' : e(t);
            x('Argument is not a %s (or a non-Element, non-Location mock); got: %s', n, a);
          }
        }
        function wt(t, e) {
          this.a = t === Tt && e || '', this.b = Et;
        }
        function It(t) {
          return t instanceof wt && t.constructor === wt && t.b === Et ? t.a : (x('expected object of type Const, got \'' + t + '\''), 'type_error:Const');
        }
        wt.prototype.ra = !0, wt.prototype.qa = function () {
          return this.a;
        }, wt.prototype.toString = function () {
          return 'Const{' + this.a + '}';
        };
        var Et = {}, Tt = {}, _t = new wt(Tt, '');
        function St(t, e) {
          this.a = t === Dt && e || '', this.b = Ct;
        }
        function At(t) {
          return t instanceof St && t.constructor === St && t.b === Ct ? t.a : (x('expected object of type TrustedResourceUrl, got \'' + t + '\' of type ' + p(t)), 'type_error:TrustedResourceUrl');
        }
        function kt(t, e) {
          var n = It(t);
          if (!Ot.test(n))
            throw Error('Invalid TrustedResourceUrl format: ' + n);
          return t = n.replace(Nt, function (t, i) {
            if (!Object.prototype.hasOwnProperty.call(e, i))
              throw Error('Found marker, "' + i + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(e));
            return (t = e[i]) instanceof wt ? It(t) : encodeURIComponent(String(t));
          }), new St(Dt, t);
        }
        St.prototype.ra = !0, St.prototype.qa = function () {
          return this.a.toString();
        }, St.prototype.toString = function () {
          return 'TrustedResourceUrl{' + this.a + '}';
        };
        var Nt = /%{(\w+)}/g, Ot = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, Ct = {}, Dt = {};
        function Pt(t, e) {
          this.a = t === xt && e || '', this.b = Mt;
        }
        function Rt(t) {
          return t instanceof Pt && t.constructor === Pt && t.b === Mt ? t.a : (x('expected object of type SafeUrl, got \'' + t + '\' of type ' + p(t)), 'type_error:SafeUrl');
        }
        Pt.prototype.ra = !0, Pt.prototype.qa = function () {
          return this.a.toString();
        }, Pt.prototype.toString = function () {
          return 'SafeUrl{' + this.a + '}';
        };
        var Lt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        function jt(t) {
          return t instanceof Pt ? t : (t = 'object' == e(t) && t.ra ? t.qa() : String(t), Lt.test(t) || (t = 'about:invalid#zClosurez'), new Pt(xt, t));
        }
        var Mt = {}, xt = {};
        function Vt() {
          this.a = '', this.b = Ft;
        }
        function Ut(t) {
          return t instanceof Vt && t.constructor === Vt && t.b === Ft ? t.a : (x('expected object of type SafeHtml, got \'' + t + '\' of type ' + p(t)), 'type_error:SafeHtml');
        }
        Vt.prototype.ra = !0, Vt.prototype.qa = function () {
          return this.a.toString();
        }, Vt.prototype.toString = function () {
          return 'SafeHtml{' + this.a + '}';
        };
        var Ft = {};
        function Ht(t) {
          var e = new Vt();
          return e.a = t, e;
        }
        Ht('<!DOCTYPE html>');
        var Bt = Ht('');
        function qt(t, e) {
          for (var n = t.split('%s'), i = '', r = Array.prototype.slice.call(arguments, 1); r.length && 1 < n.length;)
            i += n.shift() + r.shift();
          return i + n.join('%s');
        }
        function Kt(t) {
          return ut.test(t) && (-1 != t.indexOf('&') && (t = t.replace(nt, '&amp;')), -1 != t.indexOf('<') && (t = t.replace(it, '&lt;')), -1 != t.indexOf('>') && (t = t.replace(rt, '&gt;')), -1 != t.indexOf('"') && (t = t.replace(ot, '&quot;')), -1 != t.indexOf('\'') && (t = t.replace(at, '&#39;')), -1 != t.indexOf('\0') && (t = t.replace(st, '&#0;'))), t;
        }
        function Gt(t) {
          return Gt[' '](t), t;
        }
        Ht('<br>'), Gt[' '] = d;
        var Wt, Jt, Xt = dt('Opera'), zt = dt('Trident') || dt('MSIE'), Yt = dt('Edge'), $t = Yt || zt, Zt = dt('Gecko') && !(ct(tt.toLowerCase(), 'webkit') && !dt('Edge')) && !(dt('Trident') || dt('MSIE')) && !dt('Edge'), Qt = ct(tt.toLowerCase(), 'webkit') && !dt('Edge');
        function te() {
          var t = h.document;
          return t ? t.documentMode : void 0;
        }
        t: {
          var ee = '', ne = (Jt = tt, Zt ? /rv:([^\);]+)(\)|;)/.exec(Jt) : Yt ? /Edge\/([\d\.]+)/.exec(Jt) : zt ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Jt) : Qt ? /WebKit\/(\S+)/.exec(Jt) : Xt ? /(?:Version)[ \/]?(\S+)/.exec(Jt) : void 0);
          if (ne && (ee = ne ? ne[1] : ''), zt) {
            var ie = te();
            if (null != ie && ie > parseFloat(ee)) {
              Wt = String(ie);
              break t;
            }
          }
          Wt = ee;
        }
        var re, oe = {};
        function ae(t) {
          return function (t, e) {
            var n = oe;
            return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
          }(t, function () {
            for (var e = 0, n = et(String(Wt)).split('.'), i = et(String(t)).split('.'), r = Math.max(n.length, i.length), o = 0; 0 == e && o < r; o++) {
              var a = n[o] || '', s = i[o] || '';
              do {
                if (a = /(\d*)(\D*)(.*)/.exec(a) || [
                    '',
                    '',
                    '',
                    ''
                  ], s = /(\d*)(\D*)(.*)/.exec(s) || [
                    '',
                    '',
                    '',
                    ''
                  ], 0 == a[0].length && 0 == s[0].length)
                  break;
                e = ht(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ht(0 == a[2].length, 0 == s[2].length) || ht(a[2], s[2]), a = a[3], s = s[3];
              } while (0 == e);
            }
            return 0 <= e;
          });
        }
        re = h.document && zt ? te() : void 0;
        try {
          new self.OffscreenCanvas(0, 0).getContext('2d');
        } catch (Jt) {
        }
        var se = !zt || 9 <= Number(re);
        function ue(t) {
          var e = document;
          return 'string' == typeof t ? e.getElementById(t) : t;
        }
        function ce(t, n) {
          pt(n, function (n, i) {
            n && 'object' == e(n) && n.ra && (n = n.qa()), 'style' == i ? t.style.cssText = n : 'class' == i ? t.className = n : 'for' == i ? t.htmlFor = n : le.hasOwnProperty(i) ? t.setAttribute(le[i], n) : 0 == i.lastIndexOf('aria-', 0) || 0 == i.lastIndexOf('data-', 0) ? t.setAttribute(i, n) : t[i] = n;
          });
        }
        var he, fe, le = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width'
          };
        function de(t, e, n) {
          function i(n) {
            n && e.appendChild('string' == typeof n ? t.createTextNode(n) : n);
          }
          for (var r = 2; r < n.length; r++) {
            var o = n[r];
            !v(o) || m(o) && 0 < o.nodeType ? i(o) : G(ve(o) ? Q(o) : o, i);
          }
        }
        function pe(t, e) {
          return e = String(e), 'application/xhtml+xml' === t.contentType && (e = e.toLowerCase()), t.createElement(e);
        }
        function ve(t) {
          if (t && 'number' == typeof t.length) {
            if (m(t))
              return 'function' == typeof t.item || 'string' == typeof t.item;
            if (g(t))
              return 'function' == typeof t.item;
          }
          return !1;
        }
        function ge(t) {
          h.setTimeout(function () {
            throw t;
          }, 0);
        }
        function me() {
          var t = h.MessageChannel;
          if (void 0 === t && 'undefined' != typeof window && window.postMessage && window.addEventListener && !dt('Presto') && (t = function () {
              var t = pe(document, 'IFRAME');
              t.style.display = 'none', function (t) {
                var e = new St(Dt, It(_t));
                yt(t, 'HTMLIFrameElement'), t.src = At(e).toString();
              }(t), document.documentElement.appendChild(t);
              var e = t.contentWindow;
              (t = e.document).open(), t.write(Ut(Bt)), t.close();
              var n = 'callImmediate' + Math.random(), i = 'file:' == e.location.protocol ? '*' : e.location.protocol + '//' + e.location.host;
              t = T(function (t) {
                '*' != i && t.origin != i || t.data != n || this.port1.onmessage();
              }, this), e.addEventListener('message', t, !1), this.port1 = {}, this.port2 = {
                postMessage: function () {
                  e.postMessage(n, i);
                }
              };
            }), void 0 !== t && !dt('Trident') && !dt('MSIE')) {
            var e = new t(), n = {}, i = n;
            return e.port1.onmessage = function () {
              if (void 0 !== n.next) {
                var t = (n = n.next).Db;
                n.Db = null, t();
              }
            }, function (t) {
              i.next = { Db: t }, i = i.next, e.port2.postMessage(0);
            };
          }
          return function (t) {
            h.setTimeout(t, 0);
          };
        }
        function be(t, e) {
          fe || function () {
            if (h.Promise && h.Promise.resolve) {
              var t = h.Promise.resolve(void 0);
              fe = function () {
                t.then(Ie);
              };
            } else
              fe = function () {
                var t = Ie;
                !g(h.setImmediate) || h.Window && h.Window.prototype && !dt('Edge') && h.Window.prototype.setImmediate == h.setImmediate ? (he || (he = me()), he(t)) : h.setImmediate(t);
              };
          }(), ye || (fe(), ye = !0), we.add(t, e);
        }
        var ye = !1, we = new F();
        function Ie() {
          for (var t; t = B();) {
            try {
              t.a.call(t.b);
            } catch (t) {
              ge(t);
            }
            U(H, t);
          }
          ye = !1;
        }
        function Ee(t, e) {
          if (this.a = Te, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != d)
            try {
              var n = this;
              t.call(e, function (t) {
                je(n, _e, t);
              }, function (t) {
                if (!(t instanceof Be))
                  try {
                    if (t instanceof Error)
                      throw t;
                    throw Error('Promise rejected.');
                  } catch (t) {
                  }
                je(n, Se, t);
              });
            } catch (t) {
              je(this, Se, t);
            }
        }
        var Te = 0, _e = 2, Se = 3;
        function Ae() {
          this.next = this.f = this.b = this.g = this.a = null, this.c = !1;
        }
        Ae.prototype.reset = function () {
          this.f = this.b = this.g = this.a = null, this.c = !1;
        };
        var ke = new V(function () {
          return new Ae();
        }, function (t) {
          t.reset();
        });
        function Ne(t, e, n) {
          var i = ke.get();
          return i.g = t, i.b = e, i.f = n, i;
        }
        function Oe(t) {
          if (t instanceof Ee)
            return t;
          var e = new Ee(d);
          return je(e, _e, t), e;
        }
        function Ce(t) {
          return new Ee(function (e, n) {
            n(t);
          });
        }
        function De(t, e, n) {
          Me(t, e, n, null) || be(_(e, t));
        }
        function Pe(t) {
          return new Ee(function (e) {
            var n = t.length, i = [];
            if (n)
              for (var r = function (t, r, o) {
                    n--, i[t] = r ? {
                      Mb: !0,
                      value: o
                    } : {
                      Mb: !1,
                      reason: o
                    }, 0 == n && e(i);
                  }, o = 0; o < t.length; o++)
                De(t[o], _(r, o, !0), _(r, o, !1));
            else
              e(i);
          });
        }
        function Re(t, e) {
          t.b || t.a != _e && t.a != Se || xe(t), t.f ? t.f.next = e : t.b = e, t.f = e;
        }
        function Le(t, e, n, i) {
          var r = Ne(null, null, null);
          return r.a = new Ee(function (t, o) {
            r.g = e ? function (n) {
              try {
                var r = e.call(i, n);
                t(r);
              } catch (t) {
                o(t);
              }
            } : t, r.b = n ? function (e) {
              try {
                var r = n.call(i, e);
                void 0 === r && e instanceof Be ? o(e) : t(r);
              } catch (t) {
                o(t);
              }
            } : o;
          }), r.a.c = t, Re(t, r), r.a;
        }
        function je(t, e, n) {
          t.a == Te && (t === n && (e = Se, n = new TypeError('Promise cannot resolve to itself')), t.a = 1, Me(n, t.Yc, t.Zc, t) || (t.i = n, t.a = e, t.c = null, xe(t), e != Se || n instanceof Be || function (t, e) {
            t.g = !0, be(function () {
              t.g && He.call(null, e);
            });
          }(t, n)));
        }
        function Me(t, e, n, i) {
          if (t instanceof Ee)
            return Re(t, Ne(e || d, n || null, i)), !0;
          if (L(t))
            return t.then(e, n, i), !0;
          if (m(t))
            try {
              var r = t.then;
              if (g(r))
                return function (t, e, n, i, r) {
                  function o(t) {
                    a || (a = !0, i.call(r, t));
                  }
                  var a = !1;
                  try {
                    e.call(t, function (t) {
                      a || (a = !0, n.call(r, t));
                    }, o);
                  } catch (t) {
                    o(t);
                  }
                }(t, r, e, n, i), !0;
            } catch (t) {
              return n.call(i, t), !0;
            }
          return !1;
        }
        function xe(t) {
          t.h || (t.h = !0, be(t.ec, t));
        }
        function Ve(t) {
          var e = null;
          return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e;
        }
        function Ue(t, e, n, i) {
          if (n == Se && e.b && !e.c)
            for (; t && t.g; t = t.c)
              t.g = !1;
          if (e.a)
            e.a.c = null, Fe(e, n, i);
          else
            try {
              e.c ? e.g.call(e.f) : Fe(e, n, i);
            } catch (t) {
              He.call(null, t);
            }
          U(ke, e);
        }
        function Fe(t, e, n) {
          e == _e ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
        }
        Ee.prototype.then = function (t, e, n) {
          return Le(this, g(t) ? t : null, g(e) ? e : null, n);
        }, Ee.prototype.$goog_Thenable = !0, (i = Ee.prototype).ma = function (t, e) {
          return (t = Ne(t, t, e)).c = !0, Re(this, t), this;
        }, i.o = function (t, e) {
          return Le(this, null, t, e);
        }, i.cancel = function (t) {
          if (this.a == Te) {
            var e = new Be(t);
            be(function () {
              !function t(e, n) {
                if (e.a == Te)
                  if (e.c) {
                    var i = e.c;
                    if (i.b) {
                      for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next)
                        o || (a = s);
                      o && (i.a == Te && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : Ve(i), Ue(i, o, Se, n)));
                    }
                    e.c = null;
                  } else
                    je(e, Se, n);
              }(this, e);
            }, this);
          }
        }, i.Yc = function (t) {
          this.a = Te, je(this, _e, t);
        }, i.Zc = function (t) {
          this.a = Te, je(this, Se, t);
        }, i.ec = function () {
          for (var t; t = Ve(this);)
            Ue(this, t, this.a, this.i);
          this.h = !1;
        };
        var He = ge;
        function Be(t) {
          j.call(this, t);
        }
        function qe() {
          0 != Ke && (Ge[b(this)] = this), this.wa = this.wa, this.na = this.na;
        }
        A(Be, j), Be.prototype.name = 'cancel';
        var Ke = 0, Ge = {};
        function We(t) {
          if (!t.wa && (t.wa = !0, t.Ba(), 0 != Ke)) {
            var e = b(t);
            if (0 != Ke && t.na && 0 < t.na.length)
              throw Error(t + ' did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass\' method.');
            delete Ge[e];
          }
        }
        qe.prototype.wa = !1, qe.prototype.Ba = function () {
          if (this.na)
            for (; this.na.length;)
              this.na.shift()();
        };
        var Je = Object.freeze || function (t) {
            return t;
          }, Xe = !zt || 9 <= Number(re), ze = zt && !ae('9'), Ye = function () {
            if (!h.addEventListener || !Object.defineProperty)
              return !1;
            var t = !1, e = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                }
              });
            try {
              h.addEventListener('test', d, e), h.removeEventListener('test', d, e);
            } catch (t) {
            }
            return t;
          }();
        function $e(t, e) {
          this.type = t, this.b = this.target = e, this.defaultPrevented = !1;
        }
        function Ze(t, e) {
          if ($e.call(this, t ? t.type : ''), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = '', this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = '', this.a = null, t) {
            var n = this.type = t.type, i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
            if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
              if (Zt) {
                t: {
                  try {
                    Gt(e.nodeName);
                    var r = !0;
                    break t;
                  } catch (t) {
                  }
                  r = !1;
                }
                r || (e = null);
              }
            } else
              'mouseover' == n ? e = t.fromElement : 'mouseout' == n && (e = t.toElement);
            this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || '', this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = 'string' == typeof t.pointerType ? t.pointerType : Qe[t.pointerType] || '', this.a = t, t.defaultPrevented && this.preventDefault();
          }
        }
        $e.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }, A(Ze, $e);
        var Qe = Je({
          2: 'touch',
          3: 'pen',
          4: 'mouse'
        });
        Ze.prototype.preventDefault = function () {
          Ze.Za.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault)
            t.preventDefault();
          else if (t.returnValue = !1, ze)
            try {
              (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1);
            } catch (t) {
            }
        }, Ze.prototype.f = function () {
          return this.a;
        };
        var tn = 'closure_listenable_' + (1000000 * Math.random() | 0), en = 0;
        function nn(t, e, n, i, r) {
          this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Ta = r, this.key = ++en, this.ua = this.Na = !1;
        }
        function rn(t) {
          t.ua = !0, t.listener = null, t.proxy = null, t.src = null, t.Ta = null;
        }
        function on(t) {
          this.src = t, this.a = {}, this.b = 0;
        }
        function an(t, e) {
          var n = e.type;
          n in t.a && Y(t.a[n], e) && (rn(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }
        function sn(t, e, n, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == i)
              return r;
          }
          return -1;
        }
        on.prototype.add = function (t, e, n, i, r) {
          var o = t.toString();
          (t = this.a[o]) || (t = this.a[o] = [], this.b++);
          var a = sn(t, e, i, r);
          return -1 < a ? (e = t[a], n || (e.Na = !1)) : ((e = new nn(e, this.src, o, !!i, r)).Na = n, t.push(e)), e;
        };
        var un = 'closure_lm_' + (1000000 * Math.random() | 0), cn = {};
        function hn(t, e, n, i, r) {
          if (i && i.once)
            ln(t, e, n, i, r);
          else if (Array.isArray(e))
            for (var o = 0; o < e.length; o++)
              hn(t, e[o], n, i, r);
          else
            n = In(n), t && t[tn] ? Tn(t, e, n, m(i) ? !!i.capture : !!i, r) : fn(t, e, n, !1, i, r);
        }
        function fn(t, e, n, i, r, o) {
          if (!e)
            throw Error('Invalid event type');
          var a = m(r) ? !!r.capture : !!r, s = yn(t);
          if (s || (t[un] = s = new on(t)), !(n = s.add(e, n, i, a, o)).proxy) {
            if (i = function () {
                var t = bn, e = Xe ? function (n) {
                    return t.call(e.src, e.listener, n);
                  } : function (n) {
                    if (!(n = t.call(e.src, e.listener, n)))
                      return n;
                  };
                return e;
              }(), n.proxy = i, i.src = t, i.listener = n, t.addEventListener)
              Ye || (r = a), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
            else if (t.attachEvent)
              t.attachEvent(vn(e.toString()), i);
            else {
              if (!t.addListener || !t.removeListener)
                throw Error('addEventListener and attachEvent are unavailable.');
              t.addListener(i);
            }
            0;
          }
        }
        function ln(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++)
              ln(t, e[o], n, i, r);
          else
            n = In(n), t && t[tn] ? _n(t, e, n, m(i) ? !!i.capture : !!i, r) : fn(t, e, n, !0, i, r);
        }
        function dn(t, e, n, i, r) {
          if (Array.isArray(e))
            for (var o = 0; o < e.length; o++)
              dn(t, e[o], n, i, r);
          else
            i = m(i) ? !!i.capture : !!i, n = In(n), t && t[tn] ? (t = t.u, (e = String(e).toString()) in t.a && (-1 < (n = sn(o = t.a[e], n, i, r)) && (rn(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = yn(t)) && (e = t.a[e.toString()], t = -1, e && (t = sn(e, n, i, r)), (n = -1 < t ? e[t] : null) && pn(n));
        }
        function pn(t) {
          if ('number' != typeof t && t && !t.ua) {
            var e = t.src;
            if (e && e[tn])
              an(e.u, t);
            else {
              var n = t.type, i = t.proxy;
              e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(vn(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = yn(e)) ? (an(n, t), 0 == n.b && (n.src = null, e[un] = null)) : rn(t);
            }
          }
        }
        function vn(t) {
          return t in cn ? cn[t] : cn[t] = 'on' + t;
        }
        function gn(t, e, n, i) {
          var r = !0;
          if ((t = yn(t)) && (e = t.a[e.toString()]))
            for (e = e.concat(), t = 0; t < e.length; t++) {
              var o = e[t];
              o && o.capture == n && !o.ua && (o = mn(o, i), r = r && !1 !== o);
            }
          return r;
        }
        function mn(t, e) {
          var n = t.listener, i = t.Ta || t.src;
          return t.Na && pn(t), n.call(i, e);
        }
        function bn(t, e) {
          if (t.ua)
            return !0;
          if (!Xe) {
            if (!e)
              t: {
                e = [
                  'window',
                  'event'
                ];
                for (var n = h, i = 0; i < e.length; i++)
                  if (null == (n = n[e[i]])) {
                    e = null;
                    break t;
                  }
                e = n;
              }
            if (e = new Ze(i = e, this), n = !0, !(0 > i.keyCode || null != i.returnValue)) {
              t: {
                var r = !1;
                if (0 == i.keyCode)
                  try {
                    i.keyCode = -1;
                    break t;
                  } catch (t) {
                    r = !0;
                  }
                (r || null == i.returnValue) && (i.returnValue = !0);
              }
              for (i = [], r = e.b; r; r = r.parentNode)
                i.push(r);
              for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                e.b = i[r];
                var o = gn(i[r], t, !0, e);
                n = n && o;
              }
              for (r = 0; r < i.length; r++)
                e.b = i[r], o = gn(i[r], t, !1, e), n = n && o;
            }
            return n;
          }
          return mn(t, new Ze(e, this));
        }
        function yn(t) {
          return (t = t[un]) instanceof on ? t : null;
        }
        var wn = '__closure_events_fn_' + (1000000000 * Math.random() >>> 0);
        function In(t) {
          return g(t) ? t : (t[wn] || (t[wn] = function (e) {
            return t.handleEvent(e);
          }), t[wn]);
        }
        function En() {
          qe.call(this), this.u = new on(this), this.Yb = this, this.eb = null;
        }
        function Tn(t, e, n, i, r) {
          t.u.add(String(e), n, !1, i, r);
        }
        function _n(t, e, n, i, r) {
          t.u.add(String(e), n, !0, i, r);
        }
        function Sn(t, e, n, i) {
          if (!(e = t.u.a[String(e)]))
            return !0;
          e = e.concat();
          for (var r = !0, o = 0; o < e.length; ++o) {
            var a = e[o];
            if (a && !a.ua && a.capture == n) {
              var s = a.listener, u = a.Ta || a.src;
              a.Na && an(t.u, a), r = !1 !== s.call(u, i) && r;
            }
          }
          return r && !i.defaultPrevented;
        }
        function An(t, e, n) {
          if (g(t))
            n && (t = T(t, n));
          else {
            if (!t || 'function' != typeof t.handleEvent)
              throw Error('Invalid listener argument');
            t = T(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : h.setTimeout(t, e || 0);
        }
        function kn(t) {
          var e = null;
          return new Ee(function (n, i) {
            -1 == (e = An(function () {
              n(void 0);
            }, t)) && i(Error('Failed to schedule timer.'));
          }).o(function (t) {
            throw h.clearTimeout(e), t;
          });
        }
        function Nn(t) {
          if (t.V && 'function' == typeof t.V)
            return t.V();
          if ('string' == typeof t)
            return t.split('');
          if (v(t)) {
            for (var e = [], n = t.length, i = 0; i < n; i++)
              e.push(t[i]);
            return e;
          }
          for (i in (e = [], n = 0, t))
            e[n++] = t[i];
          return e;
        }
        function On(t) {
          if (t.X && 'function' == typeof t.X)
            return t.X();
          if (!t.V || 'function' != typeof t.V) {
            if (v(t) || 'string' == typeof t) {
              var e = [];
              t = t.length;
              for (var n = 0; n < t; n++)
                e.push(n);
              return e;
            }
            for (var i in (e = [], n = 0, t))
              e[n++] = i;
            return e;
          }
        }
        function Cn(t, e) {
          this.b = {}, this.a = [], this.c = 0;
          var n = arguments.length;
          if (1 < n) {
            if (n % 2)
              throw Error('Uneven number of arguments');
            for (var i = 0; i < n; i += 2)
              this.set(arguments[i], arguments[i + 1]);
          } else if (t)
            if (t instanceof Cn)
              for (n = t.X(), i = 0; i < n.length; i++)
                this.set(n[i], t.get(n[i]));
            else
              for (i in t)
                this.set(i, t[i]);
        }
        function Dn(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length;) {
              var i = t.a[e];
              Pn(t.b, i) && (t.a[n++] = i), e++;
            }
            t.a.length = n;
          }
          if (t.c != t.a.length) {
            var r = {};
            for (n = e = 0; e < t.a.length;)
              Pn(r, i = t.a[e]) || (t.a[n++] = i, r[i] = 1), e++;
            t.a.length = n;
          }
        }
        function Pn(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        A(En, qe), En.prototype[tn] = !0, En.prototype.addEventListener = function (t, e, n, i) {
          hn(this, t, e, n, i);
        }, En.prototype.removeEventListener = function (t, e, n, i) {
          dn(this, t, e, n, i);
        }, En.prototype.dispatchEvent = function (t) {
          var e, n = this.eb;
          if (n)
            for (e = []; n; n = n.eb)
              e.push(n);
          n = this.Yb;
          var i = t.type || t;
          if ('string' == typeof t)
            t = new $e(t, n);
          else if (t instanceof $e)
            t.target = t.target || n;
          else {
            var r = t;
            bt(t = new $e(i, n), r);
          }
          if (r = !0, e)
            for (var o = e.length - 1; 0 <= o; o--) {
              var a = t.b = e[o];
              r = Sn(a, i, !0, t) && r;
            }
          if (r = Sn(a = t.b = n, i, !0, t) && r, r = Sn(a, i, !1, t) && r, e)
            for (o = 0; o < e.length; o++)
              r = Sn(a = t.b = e[o], i, !1, t) && r;
          return r;
        }, En.prototype.Ba = function () {
          if (En.Za.Ba.call(this), this.u) {
            var t, e = this.u;
            for (t in e.a) {
              for (var n = e.a[t], i = 0; i < n.length; i++)
                rn(n[i]);
              delete e.a[t], e.b--;
            }
          }
          this.eb = null;
        }, (i = Cn.prototype).V = function () {
          Dn(this);
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]]);
          return t;
        }, i.X = function () {
          return Dn(this), this.a.concat();
        }, i.clear = function () {
          this.b = {}, this.c = this.a.length = 0;
        }, i.get = function (t, e) {
          return Pn(this.b, t) ? this.b[t] : e;
        }, i.set = function (t, e) {
          Pn(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e;
        }, i.forEach = function (t, e) {
          for (var n = this.X(), i = 0; i < n.length; i++) {
            var r = n[i], o = this.get(r);
            t.call(e, o, r, this);
          }
        };
        var Rn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function Ln(t, e) {
          var n;
          this.b = this.i = this.f = '', this.l = null, this.g = this.c = '', this.h = !1, t instanceof Ln ? (this.h = void 0 !== e ? e : t.h, jn(this, t.f), this.i = t.i, this.b = t.b, Mn(this, t.l), this.c = t.c, xn(this, ni(t.a)), this.g = t.g) : t && (n = String(t).match(Rn)) ? (this.h = !!e, jn(this, n[1] || '', !0), this.i = Bn(n[2] || ''), this.b = Bn(n[3] || '', !0), Mn(this, n[4]), this.c = Bn(n[5] || '', !0), xn(this, n[6] || '', !0), this.g = Bn(n[7] || '')) : (this.h = !!e, this.a = new Yn(null, this.h));
        }
        function jn(t, e, n) {
          t.f = n ? Bn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ''));
        }
        function Mn(t, e) {
          if (e) {
            if (e = Number(e), isNaN(e) || 0 > e)
              throw Error('Bad port number ' + e);
            t.l = e;
          } else
            t.l = null;
        }
        function xn(t, e, n) {
          e instanceof Yn ? (t.a = e, function (t, e) {
            e && !t.f && ($n(t), t.c = null, t.a.forEach(function (t, e) {
              var n = e.toLowerCase();
              e != n && (Qn(this, e), ei(this, n, t));
            }, t)), t.f = e;
          }(t.a, t.h)) : (n || (e = qn(e, Xn)), t.a = new Yn(e, t.h));
        }
        function Vn(t, e, n) {
          t.a.set(e, n);
        }
        function Un(t, e) {
          return t.a.get(e);
        }
        function Fn(t) {
          return t instanceof Ln ? new Ln(t) : new Ln(t, void 0);
        }
        function Hn(t, e) {
          var n = new Ln(null, void 0);
          return jn(n, 'https'), t && (n.b = t), e && (n.c = e), n;
        }
        function Bn(t, e) {
          return t ? e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t) : '';
        }
        function qn(t, e, n) {
          return 'string' == typeof t ? (t = encodeURI(t).replace(e, Kn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t) : null;
        }
        function Kn(t) {
          return '%' + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16);
        }
        Ln.prototype.toString = function () {
          var t = [], e = this.f;
          e && t.push(qn(e, Gn, !0), ':');
          var n = this.b;
          return (n || 'file' == e) && (t.push('//'), (e = this.i) && t.push(qn(e, Gn, !0), '@'), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')), null != (n = this.l) && t.push(':', String(n))), (n = this.c) && (this.b && '/' != n.charAt(0) && t.push('/'), t.push(qn(n, '/' == n.charAt(0) ? Jn : Wn, !0))), (n = this.a.toString()) && t.push('?', n), (n = this.g) && t.push('#', qn(n, zn)), t.join('');
        }, Ln.prototype.resolve = function (t) {
          var e = new Ln(this), n = !!t.f;
          n ? jn(e, t.f) : n = !!t.i, n ? e.i = t.i : n = !!t.b, n ? e.b = t.b : n = null != t.l;
          var i = t.c;
          if (n)
            Mn(e, t.l);
          else if (n = !!t.c) {
            if ('/' != i.charAt(0))
              if (this.b && !this.c)
                i = '/' + i;
              else {
                var r = e.c.lastIndexOf('/');
                -1 != r && (i = e.c.substr(0, r + 1) + i);
              }
            if ('..' == (r = i) || '.' == r)
              i = '';
            else if (ct(r, './') || ct(r, '/.')) {
              i = 0 == r.lastIndexOf('/', 0), r = r.split('/');
              for (var o = [], a = 0; a < r.length;) {
                var s = r[a++];
                '.' == s ? i && a == r.length && o.push('') : '..' == s ? ((1 < o.length || 1 == o.length && '' != o[0]) && o.pop(), i && a == r.length && o.push('')) : (o.push(s), i = !0);
              }
              i = o.join('/');
            } else
              i = r;
          }
          return n ? e.c = i : n = '' !== t.a.toString(), n ? xn(e, ni(t.a)) : n = !!t.g, n && (e.g = t.g), e;
        };
        var Gn = /[#\/\?@]/g, Wn = /[#\?:]/g, Jn = /[#\?]/g, Xn = /[#\?@]/g, zn = /#/g;
        function Yn(t, e) {
          this.b = this.a = null, this.c = t || null, this.f = !!e;
        }
        function $n(t) {
          t.a || (t.a = new Cn(), t.b = 0, t.c && function (t, e) {
            if (t) {
              t = t.split('&');
              for (var n = 0; n < t.length; n++) {
                var i = t[n].indexOf('='), r = null;
                if (0 <= i) {
                  var o = t[n].substring(0, i);
                  r = t[n].substring(i + 1);
                } else
                  o = t[n];
                e(o, r ? decodeURIComponent(r.replace(/\+/g, ' ')) : '');
              }
            }
          }(t.c, function (e, n) {
            t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
          }));
        }
        function Zn(t) {
          var e = On(t);
          if (void 0 === e)
            throw Error('Keys are undefined');
          var n = new Yn(null, void 0);
          t = Nn(t);
          for (var i = 0; i < e.length; i++) {
            var r = e[i], o = t[i];
            Array.isArray(o) ? ei(n, r, o) : n.add(r, o);
          }
          return n;
        }
        function Qn(t, e) {
          $n(t), e = ii(t, e), Pn(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Pn((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Dn(t)));
        }
        function ti(t, e) {
          return $n(t), e = ii(t, e), Pn(t.a.b, e);
        }
        function ei(t, e, n) {
          Qn(t, e), 0 < n.length && (t.c = null, t.a.set(ii(t, e), Q(n)), t.b += n.length);
        }
        function ni(t) {
          var e = new Yn();
          return e.c = t.c, t.a && (e.a = new Cn(t.a), e.b = t.b), e;
        }
        function ii(t, e) {
          return e = String(e), t.f && (e = e.toLowerCase()), e;
        }
        function ri(t) {
          var n = [];
          return function t(n, i, r) {
            if (null == i)
              r.push('null');
            else {
              if ('object' == e(i)) {
                if (Array.isArray(i)) {
                  var o = i;
                  i = o.length, r.push('[');
                  for (var a = '', s = 0; s < i; s++)
                    r.push(a), t(n, o[s], r), a = ',';
                  return void r.push(']');
                }
                if (!(i instanceof String || i instanceof Number || i instanceof Boolean)) {
                  for (o in (r.push('{'), a = '', i))
                    Object.prototype.hasOwnProperty.call(i, o) && ('function' != typeof (s = i[o]) && (r.push(a), ui(o, r), r.push(':'), t(n, s, r), a = ','));
                  return void r.push('}');
                }
                i = i.valueOf();
              }
              switch (e(i)) {
              case 'string':
                ui(i, r);
                break;
              case 'number':
                r.push(isFinite(i) && !isNaN(i) ? String(i) : 'null');
                break;
              case 'boolean':
                r.push(String(i));
                break;
              case 'function':
                r.push('null');
                break;
              default:
                throw Error('Unknown type: ' + e(i));
              }
            }
          }(new oi(), t, n), n.join('');
        }
        function oi() {
        }
        (i = Yn.prototype).add = function (t, e) {
          $n(this), this.c = null, t = ii(this, t);
          var n = this.a.get(t);
          return n || this.a.set(t, n = []), n.push(e), this.b += 1, this;
        }, i.clear = function () {
          this.a = this.c = null, this.b = 0;
        }, i.forEach = function (t, e) {
          $n(this), this.a.forEach(function (n, i) {
            G(n, function (n) {
              t.call(e, n, i, this);
            }, this);
          }, this);
        }, i.X = function () {
          $n(this);
          for (var t = this.a.V(), e = this.a.X(), n = [], i = 0; i < e.length; i++)
            for (var r = t[i], o = 0; o < r.length; o++)
              n.push(e[i]);
          return n;
        }, i.V = function (t) {
          $n(this);
          var e = [];
          if ('string' == typeof t)
            ti(this, t) && (e = Z(e, this.a.get(ii(this, t))));
          else {
            t = this.a.V();
            for (var n = 0; n < t.length; n++)
              e = Z(e, t[n]);
          }
          return e;
        }, i.set = function (t, e) {
          return $n(this), this.c = null, ti(this, t = ii(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this;
        }, i.get = function (t, e) {
          return t && 0 < (t = this.V(t)).length ? String(t[0]) : e;
        }, i.toString = function () {
          if (this.c)
            return this.c;
          if (!this.a)
            return '';
          for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
            var i = e[n], r = encodeURIComponent(String(i));
            i = this.V(i);
            for (var o = 0; o < i.length; o++) {
              var a = r;
              '' !== i[o] && (a += '=' + encodeURIComponent(String(i[o]))), t.push(a);
            }
          }
          return this.c = t.join('&');
        };
        var ai = {
            '"': '\\"',
            '\\': '\\\\',
            '/': '\\/',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\x0B': '\\u000b'
          }, si = /\uffff/.test('\uFFFF') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
        function ui(t, e) {
          e.push('"', t.replace(si, function (t) {
            var e = ai[t];
            return e || (e = '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1), ai[t] = e), e;
          }), '"');
        }
        function ci() {
          var t = Ni();
          return zt && !!re && 11 == re || /Edge\/\d+/.test(t);
        }
        function hi() {
          return h.window && h.window.location.href || self && self.location && self.location.href || '';
        }
        function fi(t, e) {
          e = e || h.window;
          var n = 'about:blank';
          t && (n = Rt(jt(t))), e.location.href = n;
        }
        function li(t) {
          return !!((t = (t || Ni()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/));
        }
        function di(t) {
          t = t || h.window;
          try {
            t.close();
          } catch (t) {
          }
        }
        function pi(t, n, i) {
          var r = Math.floor(1000000000 * Math.random()).toString();
          n = n || 500, i = i || 600;
          var o = (window.screen.availHeight - i) / 2, a = (window.screen.availWidth - n) / 2;
          for (s in (n = {
              width: n,
              height: i,
              top: 0 < o ? o : 0,
              left: 0 < a ? a : 0,
              location: !0,
              resizable: !0,
              statusbar: !0,
              toolbar: !1
            }, i = Ni().toLowerCase(), r && (n.target = r, ct(i, 'crios/') && (n.target = '_blank')), Si(Ni()) == Ti && (t = t || 'http://localhost', n.scrollbars = !0), i = t || '', (t = n) || (t = {}), r = window, n = i instanceof Pt ? i : jt(void 0 !== i.href ? i.href : String(i)), i = t.target || i.target, o = [], t))
            switch (s) {
            case 'width':
            case 'height':
            case 'top':
            case 'left':
              o.push(s + '=' + t[s]);
              break;
            case 'target':
            case 'noopener':
            case 'noreferrer':
              break;
            default:
              o.push(s + '=' + (t[s] ? 1 : 0));
            }
          var s = o.join(',');
          if ((dt('iPhone') && !dt('iPod') && !dt('iPad') || dt('iPad') || dt('iPod')) && r.navigator && r.navigator.standalone && i && '_self' != i ? (yt(s = pe(document, 'A'), 'HTMLAnchorElement'), n instanceof Pt || n instanceof Pt || (n = 'object' == e(n) && n.ra ? n.qa() : String(n), Lt.test(n) || (n = 'about:invalid#zClosurez'), n = new Pt(xt, n)), s.href = Rt(n), s.setAttribute('target', i), t.noreferrer && s.setAttribute('rel', 'noreferrer'), (t = document.createEvent('MouseEvent')).initMouseEvent('click', !0, !0, r, 1), s.dispatchEvent(t), s = {}) : t.noreferrer ? (s = r.open('', i, s), t = Rt(n), s && ($t && ct(t, ';') && (t = '\'' + t.replace(/'/g, '%27') + '\''), s.opener = null, t = Ht('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Kt(t) + '">'), r = s.document) && (r.write(Ut(t)), r.close())) : (s = r.open(Rt(n), i, s)) && t.noopener && (s.opener = null), s)
            try {
              s.focus();
            } catch (t) {
            }
          return s;
        }
        var vi = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, gi = /^[^@]+@[^@]+$/;
        function mi() {
          var t = null;
          return new Ee(function (e) {
            'complete' == h.document.readyState ? e() : (t = function () {
              e();
            }, ln(window, 'load', t));
          }).o(function (e) {
            throw dn(window, 'load', t), e;
          });
        }
        function bi(t) {
          return t = t || Ni(), !('file:' !== Ri() && 'ionic:' !== Ri() || !t.toLowerCase().match(/iphone|ipad|ipod|android/));
        }
        function yi() {
          var t = h.window;
          try {
            return !(!t || t == t.top);
          } catch (t) {
            return !1;
          }
        }
        function wi() {
          return void 0 !== h.WorkerGlobalScope && 'function' == typeof h.importScripts;
        }
        function Ii() {
          return r.INTERNAL.hasOwnProperty('reactNative') ? 'ReactNative' : r.INTERNAL.hasOwnProperty('node') ? 'Node' : wi() ? 'Worker' : 'Browser';
        }
        function Ei() {
          var t = Ii();
          return 'ReactNative' === t || 'Node' === t;
        }
        var Ti = 'Firefox', _i = 'Chrome';
        function Si(t) {
          var e = t.toLowerCase();
          return ct(e, 'opera/') || ct(e, 'opr/') || ct(e, 'opios/') ? 'Opera' : ct(e, 'iemobile') ? 'IEMobile' : ct(e, 'msie') || ct(e, 'trident/') ? 'IE' : ct(e, 'edge/') ? 'Edge' : ct(e, 'firefox/') ? Ti : ct(e, 'silk/') ? 'Silk' : ct(e, 'blackberry') ? 'Blackberry' : ct(e, 'webos') ? 'Webos' : !ct(e, 'safari/') || ct(e, 'chrome/') || ct(e, 'crios/') || ct(e, 'android') ? !ct(e, 'chrome/') && !ct(e, 'crios/') || ct(e, 'edge/') ? ct(e, 'android') ? 'Android' : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : 'Other' : _i : 'Safari';
        }
        var Ai = {
          jd: 'FirebaseCore-web',
          ld: 'FirebaseUI-web'
        };
        function ki(t, e) {
          e = e || [];
          var n, i = [], r = {};
          for (n in Ai)
            r[Ai[n]] = !0;
          for (n = 0; n < e.length; n++)
            void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
          return i.sort(), (e = i).length || (e = ['FirebaseCore-web']), 'Browser' === (i = Ii()) ? i = Si(r = Ni()) : 'Worker' === i && (i = Si(r = Ni()) + '-' + i), i + '/JsCore/' + t + '/' + e.join(',');
        }
        function Ni() {
          return h.navigator && h.navigator.userAgent || '';
        }
        function Oi(t, n) {
          t = t.split('.'), n = n || h;
          for (var i = 0; i < t.length && 'object' == e(n) && null != n; i++)
            n = n[t[i]];
          return i != t.length && (n = void 0), n;
        }
        function Ci() {
          try {
            var t = h.localStorage, e = Vi();
            if (t)
              return t.setItem(e, '1'), t.removeItem(e), !ci() || !!h.indexedDB;
          } catch (t) {
            return wi() && !!h.indexedDB;
          }
          return !1;
        }
        function Di() {
          return (Pi() || 'chrome-extension:' === Ri() || bi()) && !Ei() && Ci() && !wi();
        }
        function Pi() {
          return 'http:' === Ri() || 'https:' === Ri();
        }
        function Ri() {
          return h.location && h.location.protocol || null;
        }
        function Li(t) {
          return !li(t = t || Ni()) && Si(t) != Ti;
        }
        function ji(t) {
          return void 0 === t ? null : ri(t);
        }
        function Mi(t) {
          var e, n = {};
          for (e in t)
            t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
          return n;
        }
        function xi(t) {
          if (null !== t)
            return JSON.parse(t);
        }
        function Vi(t) {
          return t || Math.floor(1000000000 * Math.random()).toString();
        }
        function Ui(t) {
          return 'Safari' != Si(t = t || Ni()) && !t.toLowerCase().match(/iphone|ipad|ipod/);
        }
        function Fi() {
          var t = h.___jsl;
          if (t && t.H)
            for (var e in t.H)
              if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                for (var n = 0; n < t.CP.length; n++)
                  t.CP[n] = null;
        }
        function Hi(t, e) {
          if (t > e)
            throw Error('Short delay should be less than long delay!');
          this.a = t, this.c = e, t = Ni(), e = Ii(), this.b = li(t) || 'ReactNative' === e;
        }
        function Bi() {
          var t = h.document;
          return !t || void 0 === t.visibilityState || 'visible' == t.visibilityState;
        }
        function qi(t) {
          try {
            var e = new Date(parseInt(t, 10));
            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
              return e.toUTCString();
          } catch (t) {
          }
          return null;
        }
        function Ki() {
          return !(!Oi('fireauth.oauthhelper', h) && !Oi('fireauth.iframe', h));
        }
        Hi.prototype.get = function () {
          var t = h.navigator;
          return !t || 'boolean' != typeof t.onLine || !Pi() && 'chrome-extension:' !== Ri() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5000, this.a);
        };
        var Gi, Wi = {};
        function Ji(t) {
          Wi[t] || (Wi[t] = !0, 'undefined' != typeof console && 'function' == typeof console.warn && console.warn(t));
        }
        try {
          var Xi = {};
          Object.defineProperty(Xi, 'abcd', {
            configurable: !0,
            enumerable: !0,
            value: 1
          }), Object.defineProperty(Xi, 'abcd', {
            configurable: !0,
            enumerable: !0,
            value: 2
          }), Gi = 2 == Xi.abcd;
        } catch (Jt) {
          Gi = !1;
        }
        function zi(t, e, n) {
          Gi ? Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n
          }) : t[e] = n;
        }
        function Yi(t, e) {
          if (e)
            for (var n in e)
              e.hasOwnProperty(n) && zi(t, n, e[n]);
        }
        function $i(t) {
          var e = {};
          return Yi(e, t), e;
        }
        function Zi(t) {
          var n = t;
          if ('object' == e(t) && null != t)
            for (var i in (n = 'length' in t ? [] : {}, t))
              zi(n, i, Zi(t[i]));
          return n;
        }
        function Qi(t) {
          var e = t && (t[rr] ? 'phone' : null);
          if (!(e && t && t[ir]))
            throw new k('internal-error', 'Internal assert: invalid MultiFactorInfo object');
          zi(this, 'uid', t[ir]), zi(this, 'displayName', t[er] || null);
          var n = null;
          t[nr] && (n = new Date(t[nr]).toUTCString()), zi(this, 'enrollmentTime', n), zi(this, 'factorId', e);
        }
        function tr(t) {
          try {
            var e = new or(t);
          } catch (t) {
            e = null;
          }
          return e;
        }
        Qi.prototype.v = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };
        var er = 'displayName', nr = 'enrolledAt', ir = 'mfaEnrollmentId', rr = 'phoneInfo';
        function or(t) {
          Qi.call(this, t), zi(this, 'phoneNumber', t[rr]);
        }
        function ar(t) {
          var e = {}, n = t[hr], i = t[lr], r = t[dr];
          if (t = tr(t[fr]), !r || r != ur && r != cr && !n || r == cr && !i || r == sr && !t)
            throw Error('Invalid checkActionCode response!');
          r == cr ? (e[vr] = n || null, e[mr] = n || null, e[pr] = i) : (e[vr] = i || null, e[mr] = i || null, e[pr] = n || null), e[gr] = t || null, zi(this, yr, r), zi(this, br, Zi(e));
        }
        A(or, Qi), or.prototype.v = function () {
          var t = or.Za.v.call(this);
          return t.phoneNumber = this.phoneNumber, t;
        };
        var sr = 'REVERT_SECOND_FACTOR_ADDITION', ur = 'EMAIL_SIGNIN', cr = 'VERIFY_AND_CHANGE_EMAIL', hr = 'email', fr = 'mfaInfo', lr = 'newEmail', dr = 'requestType', pr = 'email', vr = 'fromEmail', gr = 'multiFactorInfo', mr = 'previousEmail', br = 'data', yr = 'operation';
        function wr(t) {
          var e = Un(t = Fn(t), Ir) || null, n = Un(t, Er) || null, i = Un(t, Sr) || null;
          if (i = i && kr[i] || null, !e || !n || !i)
            throw new k('argument-error', Ir + ', ' + Er + 'and ' + Sr + ' are required in a valid action code URL.');
          Yi(this, {
            apiKey: e,
            operation: i,
            code: n,
            continueUrl: Un(t, Tr) || null,
            languageCode: Un(t, _r) || null,
            tenantId: Un(t, Ar) || null
          });
        }
        var Ir = 'apiKey', Er = 'oobCode', Tr = 'continueUrl', _r = 'languageCode', Sr = 'mode', Ar = 'tenantId', kr = {
            recoverEmail: 'RECOVER_EMAIL',
            resetPassword: 'PASSWORD_RESET',
            revertSecondFactorAddition: sr,
            signIn: ur,
            verifyAndChangeEmail: cr,
            verifyEmail: 'VERIFY_EMAIL'
          };
        function Nr(t) {
          try {
            return new wr(t);
          } catch (t) {
            return null;
          }
        }
        function Or(t) {
          var n = t[Lr];
          if (void 0 === n)
            throw new k('missing-continue-uri');
          if ('string' != typeof n || 'string' == typeof n && !n.length)
            throw new k('invalid-continue-uri');
          this.h = n, this.b = this.a = null, this.g = !1;
          var i = t[Cr];
          if (i && 'object' === e(i)) {
            n = i[xr];
            var r = i[jr];
            if (i = i[Mr], 'string' == typeof n && n.length) {
              if (this.a = n, void 0 !== r && 'boolean' != typeof r)
                throw new k('argument-error', jr + ' property must be a boolean when specified.');
              if (this.g = !!r, void 0 !== i && ('string' != typeof i || 'string' == typeof i && !i.length))
                throw new k('argument-error', Mr + ' property must be a non empty string when specified.');
              this.b = i || null;
            } else {
              if (void 0 !== n)
                throw new k('argument-error', xr + ' property must be a non empty string when specified.');
              if (void 0 !== r || void 0 !== i)
                throw new k('missing-android-pkg-name');
            }
          } else if (void 0 !== i)
            throw new k('argument-error', Cr + ' property must be a non null object when specified.');
          if (this.f = null, (n = t[Rr]) && 'object' === e(n)) {
            if ('string' == typeof (n = n[Vr]) && n.length)
              this.f = n;
            else if (void 0 !== n)
              throw new k('argument-error', Vr + ' property must be a non empty string when specified.');
          } else if (void 0 !== n)
            throw new k('argument-error', Rr + ' property must be a non null object when specified.');
          if (void 0 !== (n = t[Pr]) && 'boolean' != typeof n)
            throw new k('argument-error', Pr + ' property must be a boolean when specified.');
          if (this.c = !!n, void 0 !== (t = t[Dr]) && ('string' != typeof t || 'string' == typeof t && !t.length))
            throw new k('argument-error', Dr + ' property must be a non empty string when specified.');
          this.i = t || null;
        }
        var Cr = 'android', Dr = 'dynamicLinkDomain', Pr = 'handleCodeInApp', Rr = 'iOS', Lr = 'url', jr = 'installApp', Mr = 'minimumVersion', xr = 'packageName', Vr = 'bundleId';
        function Ur(t) {
          var e = {};
          for (var n in (e.continueUrl = t.h, e.canHandleCodeInApp = t.c, (e.androidPackageName = t.a) && (e.androidMinimumVersion = t.b, e.androidInstallApp = t.g), e.iOSBundleId = t.f, e.dynamicLinkDomain = t.i, e))
            null === e[n] && delete e[n];
          return e;
        }
        var Fr = null;
        function Hr(t) {
          var e = '';
          return function (t, e) {
            function n(e) {
              for (; i < t.length;) {
                var n = t.charAt(i++), r = Fr[n];
                if (null != r)
                  return r;
                if (!/^[\s\xa0]*$/.test(n))
                  throw Error('Unknown base64 encoding at char: ' + n);
              }
              return e;
            }
            !function () {
              if (!Fr) {
                Fr = {};
                for (var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), e = [
                      '+/=',
                      '+/',
                      '-_=',
                      '-_.',
                      '-_'
                    ], n = 0; 5 > n; n++)
                  for (var i = t.concat(e[n].split('')), r = 0; r < i.length; r++) {
                    var o = i[r];
                    void 0 === Fr[o] && (Fr[o] = r);
                  }
              }
            }();
            for (var i = 0;;) {
              var r = n(-1), o = n(0), a = n(64), s = n(64);
              if (64 === s && -1 === r)
                break;
              e(r << 2 | o >> 4), 64 != a && (e(o << 4 & 240 | a >> 2), 64 != s && e(a << 6 & 192 | s));
            }
          }(t, function (t) {
            e += String.fromCharCode(t);
          }), e;
        }
        function Br(t) {
          var e = Kr(t);
          if (!(e && e.sub && e.iss && e.aud && e.exp))
            throw Error('Invalid JWT');
          this.g = t, this.c = e.exp, this.h = e.sub, S(), this.a = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.b = !!e.is_anonymous || 'anonymous' == this.a;
        }
        function qr(t) {
          try {
            return new Br(t);
          } catch (t) {
            return null;
          }
        }
        function Kr(t) {
          if (!t)
            return null;
          if (3 != (t = t.split('.')).length)
            return null;
          for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++)
            t += '.';
          try {
            return JSON.parse(Hr(t));
          } catch (t) {
          }
          return null;
        }
        Br.prototype.S = function () {
          return this.f;
        }, Br.prototype.i = function () {
          return this.b;
        }, Br.prototype.toString = function () {
          return this.g;
        };
        var Gr = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(' '), Wr = [
            'client_id',
            'response_type',
            'scope',
            'redirect_uri',
            'state'
          ], Jr = {
            kd: {
              Ha: 'locale',
              ta: 700,
              sa: 600,
              ea: 'facebook.com',
              Va: Wr
            },
            md: {
              Ha: null,
              ta: 500,
              sa: 750,
              ea: 'github.com',
              Va: Wr
            },
            nd: {
              Ha: 'hl',
              ta: 515,
              sa: 680,
              ea: 'google.com',
              Va: Wr
            },
            td: {
              Ha: 'lang',
              ta: 485,
              sa: 705,
              ea: 'twitter.com',
              Va: Gr
            },
            gd: {
              Ha: 'locale',
              ta: 640,
              sa: 600,
              ea: 'apple.com',
              Va: []
            }
          };
        function Xr(t) {
          for (var e in Jr)
            if (Jr[e].ea == t)
              return Jr[e];
          return null;
        }
        function zr(t) {
          var e = {};
          e['facebook.com'] = to, e['google.com'] = no, e['github.com'] = eo, e['twitter.com'] = io;
          var n = t && t[$r];
          try {
            if (n)
              return e[n] ? new e[n](t) : new Qr(t);
            if (void 0 !== t[Yr])
              return new Zr(t);
          } catch (t) {
          }
          return null;
        }
        var Yr = 'idToken', $r = 'providerId';
        function Zr(t) {
          var e = t[$r];
          if (!e && t[Yr]) {
            var n = qr(t[Yr]);
            n && n.a && (e = n.a);
          }
          if (!e)
            throw Error('Invalid additional user info!');
          'anonymous' != e && 'custom' != e || (e = null), n = !1, void 0 !== t.isNewUser ? n = !!t.isNewUser : 'identitytoolkit#SignupNewUserResponse' === t.kind && (n = !0), zi(this, 'providerId', e), zi(this, 'isNewUser', n);
        }
        function Qr(t) {
          Zr.call(this, t), zi(this, 'profile', Zi((t = xi(t.rawUserInfo || '{}')) || {}));
        }
        function to(t) {
          if (Qr.call(this, t), 'facebook.com' != this.providerId)
            throw Error('Invalid provider ID!');
        }
        function eo(t) {
          if (Qr.call(this, t), 'github.com' != this.providerId)
            throw Error('Invalid provider ID!');
          zi(this, 'username', this.profile && this.profile.login || null);
        }
        function no(t) {
          if (Qr.call(this, t), 'google.com' != this.providerId)
            throw Error('Invalid provider ID!');
        }
        function io(t) {
          if (Qr.call(this, t), 'twitter.com' != this.providerId)
            throw Error('Invalid provider ID!');
          zi(this, 'username', t.screenName || null);
        }
        function ro(t) {
          var e = Fn(t), n = Un(e, 'link'), i = Un(Fn(n), 'link');
          return e = Un(e, 'deep_link_id'), Un(Fn(e), 'link') || e || i || n || t;
        }
        function oo(t, e) {
          if (!t && !e)
            throw new k('internal-error', 'Internal assert: no raw session string available');
          if (t && e)
            throw new k('internal-error', 'Internal assert: unable to determine the session type');
          this.a = t || null, this.b = e || null, this.type = this.a ? ao : so;
        }
        A(Qr, Zr), A(to, Qr), A(eo, Qr), A(no, Qr), A(io, Qr);
        var ao = 'enroll', so = 'signin';
        function uo() {
        }
        function co(t, e) {
          return t.then(function (t) {
            if (t[$a]) {
              var n = qr(t[$a]);
              if (!n || e != n.h)
                throw new k('user-mismatch');
              return t;
            }
            throw new k('user-mismatch');
          }).o(function (t) {
            throw t && t.code && t.code == C + 'user-not-found' ? new k('user-mismatch') : t;
          });
        }
        function ho(t, e) {
          if (!e)
            throw new k('internal-error', 'failed to construct a credential');
          this.a = e, zi(this, 'providerId', t), zi(this, 'signInMethod', t);
        }
        function fo(t) {
          return {
            pendingToken: t.a,
            requestUri: 'http://localhost'
          };
        }
        function lo(t) {
          if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf('saml.') && t.pendingToken)
            try {
              return new ho(t.providerId, t.pendingToken);
            } catch (t) {
            }
          return null;
        }
        function po(t, e, n) {
          if (this.a = null, e.idToken || e.accessToken)
            e.idToken && zi(this, 'idToken', e.idToken), e.accessToken && zi(this, 'accessToken', e.accessToken), e.nonce && !e.pendingToken && zi(this, 'nonce', e.nonce), e.pendingToken && (this.a = e.pendingToken);
          else {
            if (!e.oauthToken || !e.oauthTokenSecret)
              throw new k('internal-error', 'failed to construct a credential');
            zi(this, 'accessToken', e.oauthToken), zi(this, 'secret', e.oauthTokenSecret);
          }
          zi(this, 'providerId', t), zi(this, 'signInMethod', n);
        }
        function vo(t) {
          var e = {};
          return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
            postBody: Zn(e).toString(),
            requestUri: 'http://localhost'
          }, t.a && (delete e.postBody, e.pendingToken = t.a), e;
        }
        function go(t) {
          if (t && t.providerId && t.signInMethod) {
            var e = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken
            };
            try {
              return new po(t.providerId, e, t.signInMethod);
            } catch (t) {
            }
          }
          return null;
        }
        function mo(t, e) {
          this.Oc = e || [], Yi(this, {
            providerId: t,
            isOAuthProvider: !0
          }), this.Fb = {}, this.lb = (Xr(t) || {}).Ha || null, this.kb = null;
        }
        function bo(t) {
          if ('string' != typeof t || 0 != t.indexOf('saml.'))
            throw new k('argument-error', 'SAML provider IDs must be prefixed with "saml."');
          mo.call(this, t, []);
        }
        function yo(t) {
          mo.call(this, t, Wr), this.a = [];
        }
        function wo() {
          yo.call(this, 'facebook.com');
        }
        function Io(t) {
          if (!t)
            throw new k('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var e = t;
          return m(t) && (e = t.accessToken), new wo().credential({ accessToken: e });
        }
        function Eo() {
          yo.call(this, 'github.com');
        }
        function To(t) {
          if (!t)
            throw new k('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var e = t;
          return m(t) && (e = t.accessToken), new Eo().credential({ accessToken: e });
        }
        function _o() {
          yo.call(this, 'google.com'), this.Aa('profile');
        }
        function So(t, e) {
          var n = t;
          return m(t) && (n = t.idToken, e = t.accessToken), new _o().credential({
            idToken: n,
            accessToken: e
          });
        }
        function Ao() {
          mo.call(this, 'twitter.com', Gr);
        }
        function ko(t, e) {
          var n = t;
          if (m(n) || (n = {
              oauthToken: t,
              oauthTokenSecret: e
            }), !n.oauthToken || !n.oauthTokenSecret)
            throw new k('argument-error', 'credential failed: expected 2 arguments (the OAuth access token and secret).');
          return new po('twitter.com', n, 'twitter.com');
        }
        function No(t, e, n) {
          this.a = t, this.f = e, zi(this, 'providerId', 'password'), zi(this, 'signInMethod', n === Co.EMAIL_LINK_SIGN_IN_METHOD ? Co.EMAIL_LINK_SIGN_IN_METHOD : Co.EMAIL_PASSWORD_SIGN_IN_METHOD);
        }
        function Oo(t) {
          return t && t.email && t.password ? new No(t.email, t.password, t.signInMethod) : null;
        }
        function Co() {
          Yi(this, {
            providerId: 'password',
            isOAuthProvider: !1
          });
        }
        function Do(t, e) {
          if (!(e = Po(e)))
            throw new k('argument-error', 'Invalid email link!');
          return new No(t, e.code, Co.EMAIL_LINK_SIGN_IN_METHOD);
        }
        function Po(t) {
          return (t = Nr(t = ro(t))) && t.operation === ur ? t : null;
        }
        function Ro(t) {
          if (!(t.bb && t.ab || t.Ja && t.da))
            throw new k('internal-error');
          this.a = t, zi(this, 'providerId', 'phone'), this.ea = 'phone', zi(this, 'signInMethod', 'phone');
        }
        function Lo(t) {
          if (t && 'phone' === t.providerId && (t.verificationId && t.verificationCode || t.temporaryProof && t.phoneNumber)) {
            var e = {};
            return G([
              'verificationId',
              'verificationCode',
              'temporaryProof',
              'phoneNumber'
            ], function (n) {
              t[n] && (e[n] = t[n]);
            }), new Ro(e);
          }
          return null;
        }
        function jo(t) {
          return t.a.Ja && t.a.da ? {
            temporaryProof: t.a.Ja,
            phoneNumber: t.a.da
          } : {
            sessionInfo: t.a.bb,
            code: t.a.ab
          };
        }
        function Mo(t) {
          try {
            this.a = t || r.auth();
          } catch (t) {
            throw new k('argument-error', 'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().');
          }
          Yi(this, {
            providerId: 'phone',
            isOAuthProvider: !1
          });
        }
        function xo(t, e) {
          if (!t)
            throw new k('missing-verification-id');
          if (!e)
            throw new k('missing-verification-code');
          return new Ro({
            bb: t,
            ab: e
          });
        }
        function Vo(t) {
          if (t.temporaryProof && t.phoneNumber)
            return new Ro({
              Ja: t.temporaryProof,
              da: t.phoneNumber
            });
          var e = t && t.providerId;
          if (!e || 'password' === e)
            return null;
          var n = t && t.oauthAccessToken, i = t && t.oauthTokenSecret, r = t && t.nonce, o = t && t.oauthIdToken, a = t && t.pendingToken;
          try {
            switch (e) {
            case 'google.com':
              return So(o, n);
            case 'facebook.com':
              return Io(n);
            case 'github.com':
              return To(n);
            case 'twitter.com':
              return ko(n, i);
            default:
              return n || i || o || a ? a ? 0 == e.indexOf('saml.') ? new ho(e, a) : new po(e, {
                pendingToken: a,
                idToken: t.oauthIdToken,
                accessToken: t.oauthAccessToken
              }, e) : new yo(e).credential({
                idToken: o,
                accessToken: n,
                rawNonce: r
              }) : null;
            }
          } catch (t) {
            return null;
          }
        }
        function Uo(t) {
          if (!t.isOAuthProvider)
            throw new k('invalid-oauth-provider');
        }
        function Fo(t, e, n, i, r, o, a) {
          if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a)
            throw new k('invalid-auth-event');
          if (this.g && this.a)
            throw new k('invalid-auth-event');
          if (this.g && !this.f)
            throw new k('invalid-auth-event');
        }
        function Ho(t) {
          return (t = t || {}).type ? new Fo(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && N(t.error), t.postBody, t.tenantId) : null;
        }
        function Bo() {
          this.b = null, this.a = [];
        }
        oo.prototype.Fa = function () {
          return this.a ? Oe(this.a) : Oe(this.b);
        }, oo.prototype.v = function () {
          return this.type == ao ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } };
        }, uo.prototype.ia = function () {
        }, uo.prototype.b = function () {
        }, uo.prototype.c = function () {
        }, uo.prototype.v = function () {
        }, ho.prototype.ia = function (t) {
          return ms(t, fo(this));
        }, ho.prototype.b = function (t, e) {
          var n = fo(this);
          return n.idToken = e, bs(t, n);
        }, ho.prototype.c = function (t, e) {
          return co(ys(t, fo(this)), e);
        }, ho.prototype.v = function () {
          return {
            providerId: this.providerId,
            signInMethod: this.signInMethod,
            pendingToken: this.a
          };
        }, po.prototype.ia = function (t) {
          return ms(t, vo(this));
        }, po.prototype.b = function (t, e) {
          var n = vo(this);
          return n.idToken = e, bs(t, n);
        }, po.prototype.c = function (t, e) {
          return co(ys(t, vo(this)), e);
        }, po.prototype.v = function () {
          var t = {
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
          return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t;
        }, mo.prototype.Ia = function (t) {
          return this.Fb = gt(t), this;
        }, A(bo, mo), A(yo, mo), yo.prototype.Aa = function (t) {
          return z(this.a, t) || this.a.push(t), this;
        }, yo.prototype.Nb = function () {
          return Q(this.a);
        }, yo.prototype.credential = function (t, e) {
          var n;
          if (!(n = m(t) ? {
              idToken: t.idToken || null,
              accessToken: t.accessToken || null,
              nonce: t.rawNonce || null
            } : {
              idToken: t || null,
              accessToken: e || null
            }).idToken && !n.accessToken)
            throw new k('argument-error', 'credential failed: must provide the ID token and/or the access token.');
          return new po(this.providerId, n, this.providerId);
        }, A(wo, yo), zi(wo, 'PROVIDER_ID', 'facebook.com'), zi(wo, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'), A(Eo, yo), zi(Eo, 'PROVIDER_ID', 'github.com'), zi(Eo, 'GITHUB_SIGN_IN_METHOD', 'github.com'), A(_o, yo), zi(_o, 'PROVIDER_ID', 'google.com'), zi(_o, 'GOOGLE_SIGN_IN_METHOD', 'google.com'), A(Ao, mo), zi(Ao, 'PROVIDER_ID', 'twitter.com'), zi(Ao, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'), No.prototype.ia = function (t) {
          return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD ? tu(t, ks, {
            email: this.a,
            oobCode: this.f
          }) : tu(t, zs, {
            email: this.a,
            password: this.f
          });
        }, No.prototype.b = function (t, e) {
          return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD ? tu(t, Ns, {
            idToken: e,
            email: this.a,
            oobCode: this.f
          }) : tu(t, Hs, {
            idToken: e,
            email: this.a,
            password: this.f
          });
        }, No.prototype.c = function (t, e) {
          return co(this.ia(t), e);
        }, No.prototype.v = function () {
          return {
            email: this.a,
            password: this.f,
            signInMethod: this.signInMethod
          };
        }, Yi(Co, { PROVIDER_ID: 'password' }), Yi(Co, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' }), Yi(Co, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' }), Ro.prototype.ia = function (t) {
          return t.cb(jo(this));
        }, Ro.prototype.b = function (t, e) {
          var n = jo(this);
          return n.idToken = e, tu(t, $s, n);
        }, Ro.prototype.c = function (t, e) {
          var n = jo(this);
          return n.operation = 'REAUTH', co(t = tu(t, Zs, n), e);
        }, Ro.prototype.v = function () {
          var t = { providerId: 'phone' };
          return this.a.bb && (t.verificationId = this.a.bb), this.a.ab && (t.verificationCode = this.a.ab), this.a.Ja && (t.temporaryProof = this.a.Ja), this.a.da && (t.phoneNumber = this.a.da), t;
        }, Mo.prototype.cb = function (t, e) {
          var n = this.a.b;
          return Oe(e.verify()).then(function (i) {
            if ('string' != typeof i)
              throw new k('argument-error', 'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.');
            switch (e.type) {
            case 'recaptcha':
              var r = m(t) ? t.session : null, o = m(t) ? t.phoneNumber : t;
              return (r && r.type == ao ? r.Fa().then(function (t) {
                return function (t, e) {
                  return tu(t, qs, e).then(function (t) {
                    return t.phoneSessionInfo.sessionInfo;
                  });
                }(n, {
                  idToken: t,
                  phoneEnrollmentInfo: {
                    phoneNumber: o,
                    recaptchaToken: i
                  }
                });
              }) : r && r.type == so ? r.Fa().then(function (e) {
                return function (t, e) {
                  return tu(t, Ks, e).then(function (t) {
                    return t.phoneResponseInfo.sessionInfo;
                  });
                }(n, {
                  mfaPendingCredential: e,
                  mfaEnrollmentId: t.multiFactorHint && t.multiFactorHint.uid || t.multiFactorUid,
                  phoneSignInInfo: { recaptchaToken: i }
                });
              }) : function (t, e) {
                return tu(t, Us, e);
              }(n, {
                phoneNumber: o,
                recaptchaToken: i
              })).then(function (t) {
                return 'function' == typeof e.reset && e.reset(), t;
              }, function (t) {
                throw 'function' == typeof e.reset && e.reset(), t;
              });
            default:
              throw new k('argument-error', 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
          });
        }, Yi(Mo, { PROVIDER_ID: 'phone' }), Yi(Mo, { PHONE_SIGN_IN_METHOD: 'phone' }), Fo.prototype.getUid = function () {
          var t = [];
          return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join('-');
        }, Fo.prototype.S = function () {
          return this.h;
        }, Fo.prototype.v = function () {
          return {
            type: this.c,
            eventId: this.b,
            urlResponse: this.g,
            sessionId: this.f,
            postBody: this.i,
            tenantId: this.h,
            error: this.a && this.a.v()
          };
        };
        var qo, Ko = null;
        function Go(t) {
          var e = 'unauthorized-domain', n = void 0, i = Fn(t);
          t = i.b, 'chrome-extension' == (i = i.f) ? n = qt('This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.', t) : 'http' == i || 'https' == i ? n = qt('This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.', t) : e = 'operation-not-supported-in-this-environment', k.call(this, e, n);
        }
        function Wo(t, e, n) {
          k.call(this, t, n), (t = e || {}).Gb && zi(this, 'email', t.Gb), t.da && zi(this, 'phoneNumber', t.da), t.credential && zi(this, 'credential', t.credential), t.Wb && zi(this, 'tenantId', t.Wb);
        }
        function Jo(t) {
          if (t.code) {
            var e = t.code || '';
            0 == e.indexOf(C) && (e = e.substring(C.length));
            var n = {
              credential: Vo(t),
              Wb: t.tenantId
            };
            if (t.email)
              n.Gb = t.email;
            else if (t.phoneNumber)
              n.da = t.phoneNumber;
            else if (!n.credential)
              return new k(e, t.message || void 0);
            return new Wo(e, n, t.message);
          }
          return null;
        }
        function Xo() {
        }
        function zo(t) {
          return t.c || (t.c = t.b());
        }
        function Yo() {
        }
        function $o(t) {
          if (!t.f && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
            for (var e = [
                  'MSXML2.XMLHTTP.6.0',
                  'MSXML2.XMLHTTP.3.0',
                  'MSXML2.XMLHTTP',
                  'Microsoft.XMLHTTP'
                ], n = 0; n < e.length; n++) {
              var i = e[n];
              try {
                return new ActiveXObject(i), t.f = i;
              } catch (t) {
              }
            }
            throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
          }
          return t.f;
        }
        function Zo() {
        }
        function Qo() {
          this.a = new XDomainRequest(), this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = '', this.status = -1, this.statusText = '', this.a.onload = T(this.oc, this), this.a.onerror = T(this.Pb, this), this.a.onprogress = T(this.pc, this), this.a.ontimeout = T(this.tc, this);
        }
        function ta(t, e) {
          t.readyState = e, t.onreadystatechange && t.onreadystatechange();
        }
        function ea(t, e, n) {
          this.reset(t, e, n, void 0, void 0);
        }
        A(Go, k), A(Wo, k), Wo.prototype.v = function () {
          var t = {
            code: this.code,
            message: this.message
          };
          this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
          var e = this.credential && this.credential.v();
          return e && bt(t, e), t;
        }, Wo.prototype.toJSON = function () {
          return this.v();
        }, Xo.prototype.c = null, A(Yo, Xo), Yo.prototype.a = function () {
          var t = $o(this);
          return t ? new ActiveXObject(t) : new XMLHttpRequest();
        }, Yo.prototype.b = function () {
          var t = {};
          return $o(this) && (t[0] = !0, t[1] = !0), t;
        }, qo = new Yo(), A(Zo, Xo), Zo.prototype.a = function () {
          var t = new XMLHttpRequest();
          if ('withCredentials' in t)
            return t;
          if ('undefined' != typeof XDomainRequest)
            return new Qo();
          throw Error('Unsupported browser');
        }, Zo.prototype.b = function () {
          return {};
        }, (i = Qo.prototype).open = function (t, e, n) {
          if (null != n && !n)
            throw Error('Only async requests are supported.');
          this.a.open(t, e);
        }, i.send = function (t) {
          if (t) {
            if ('string' != typeof t)
              throw Error('Only string data is supported');
            this.a.send(t);
          } else
            this.a.send();
        }, i.abort = function () {
          this.a.abort();
        }, i.setRequestHeader = function () {
        }, i.getResponseHeader = function (t) {
          return 'content-type' == t.toLowerCase() ? this.a.contentType : '';
        }, i.oc = function () {
          this.status = 200, this.response = this.responseText = this.a.responseText, ta(this, 4);
        }, i.Pb = function () {
          this.status = 500, this.response = this.responseText = '', ta(this, 4);
        }, i.tc = function () {
          this.Pb();
        }, i.pc = function () {
          this.status = 200, ta(this, 1);
        }, i.getAllResponseHeaders = function () {
          return 'content-type: ' + this.a.contentType;
        }, ea.prototype.a = null;
        function na(t) {
          this.f = t, this.b = this.c = this.a = null;
        }
        function ia(t, e) {
          this.name = t, this.value = e;
        }
        ea.prototype.reset = function (t, e, n, i, r) {
          'number' == typeof r || 0, i || S(), delete this.a;
        }, ia.prototype.toString = function () {
          return this.name;
        };
        var ra = new ia('SEVERE', 1000), oa = new ia('WARNING', 900), aa = new ia('CONFIG', 700), sa = new ia('FINE', 500);
        na.prototype.log = function (t, e, n) {
          if (t.value >= function t(e) {
              return e.c ? e.c : e.a ? t(e.a) : (x('Root logger has no level set.'), null);
            }(this).value)
            for (g(e) && (e = e()), t = new ea(t, String(e), this.f), n && (t.a = n), n = this; n;)
              n = n.a;
        };
        var ua = {}, ca = null;
        function ha(t) {
          var e;
          if (ca || (ca = new na(''), ua[''] = ca, ca.c = aa), !(e = ua[t])) {
            e = new na(t);
            var n = t.lastIndexOf('.'), i = t.substr(n + 1);
            (n = ha(t.substr(0, n))).b || (n.b = {}), n.b[i] = e, e.a = n, ua[t] = e;
          }
          return e;
        }
        function fa(t, e) {
          t && t.log(sa, e, void 0);
        }
        function la(t) {
          this.f = t;
        }
        function da(t) {
          En.call(this), this.s = t, this.readyState = pa, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = '', this.onreadystatechange = null, this.i = new Headers(), this.b = null, this.m = 'GET', this.g = '', this.a = !1, this.h = ha('goog.net.FetchXmlHttp'), this.l = this.c = this.f = null;
        }
        A(la, Xo), la.prototype.a = function () {
          return new da(this.f);
        }, la.prototype.b = function (t) {
          return function () {
            return t;
          };
        }({}), A(da, En);
        var pa = 0;
        function va(t) {
          t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t));
        }
        function ga(t, e) {
          e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, ma(t);
        }
        function ma(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }
        function ba(t) {
          En.call(this), this.headers = new Cn(), this.D = t || null, this.c = !1, this.B = this.a = null, this.h = this.P = this.l = '', this.f = this.O = this.i = this.N = !1, this.g = 0, this.s = null, this.m = ya, this.w = this.R = !1;
        }
        (i = da.prototype).open = function (t, e) {
          if (this.readyState != pa)
            throw this.abort(), Error('Error reopening a connection');
          this.m = t, this.g = e, this.readyState = 1, ma(this);
        }, i.send = function (t) {
          if (1 != this.readyState)
            throw this.abort(), Error('need to call open() first. ');
          this.a = !0;
          var e = {
            headers: this.i,
            method: this.m,
            credentials: void 0,
            cache: void 0
          };
          t && (e.body = t), this.s.fetch(new Request(this.g, e)).then(this.sc.bind(this), this.Sa.bind(this));
        }, i.abort = function () {
          this.response = this.responseText = '', this.i = new Headers(), this.status = 0, this.c && this.c.cancel('Request was aborted.'), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, ga(this, !1)), this.readyState = pa;
        }, i.sc = function (t) {
          this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, ma(this)), this.a && (this.readyState = 3, ma(this), this.a && ('arraybuffer' === this.responseType ? t.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this)) : void 0 !== h.ReadableStream && 'body' in t ? (this.response = this.responseText = '', this.c = t.body.getReader(), this.l = new TextDecoder(), va(this)) : t.text().then(this.rc.bind(this), this.Sa.bind(this)))));
        }, i.nc = function (t) {
          if (this.a) {
            var e = this.l.decode(t.value ? t.value : new Uint8Array(0), { stream: !t.done });
            e && (this.response = this.responseText += e), t.done ? ga(this, !0) : ma(this), 3 == this.readyState && va(this);
          }
        }, i.rc = function (t) {
          this.a && (this.response = this.responseText = t, ga(this, !0));
        }, i.qc = function (t) {
          this.a && (this.response = t, ga(this, !0));
        }, i.Sa = function (t) {
          var e = this.h;
          e && e.log(oa, 'Failed to fetch url ' + this.g, t instanceof Error ? t : Error(t)), this.a && ga(this, !0);
        }, i.setRequestHeader = function (t, e) {
          this.i.append(t, e);
        }, i.getResponseHeader = function (t) {
          return this.b ? this.b.get(t.toLowerCase()) || '' : ((t = this.h) && t.log(oa, 'Attempting to get response header but no headers have been received for url: ' + this.g, void 0), '');
        }, i.getAllResponseHeaders = function () {
          if (!this.b) {
            var t = this.h;
            return t && t.log(oa, 'Attempting to get all response headers but no headers have been received for url: ' + this.g, void 0), '';
          }
          t = [];
          for (var e = this.b.entries(), n = e.next(); !n.done;)
            n = n.value, t.push(n[0] + ': ' + n[1]), n = e.next();
          return t.join('\r\n');
        }, A(ba, En);
        var ya = '';
        ba.prototype.b = ha('goog.net.XhrIo');
        var wa = /^https?$/i, Ia = [
            'POST',
            'PUT'
          ];
        function Ea(t, e, n, i, r) {
          if (t.a)
            throw Error('[goog.net.XhrIo] Object is active with another request=' + t.l + '; newUri=' + e);
          n = n ? n.toUpperCase() : 'GET', t.l = e, t.h = '', t.P = n, t.N = !1, t.c = !0, t.a = t.D ? t.D.a() : qo.a(), t.B = t.D ? zo(t.D) : zo(qo), t.a.onreadystatechange = T(t.Sb, t);
          try {
            fa(t.b, Da(t, 'Opening Xhr')), t.O = !0, t.a.open(n, String(e), !0), t.O = !1;
          } catch (e) {
            return fa(t.b, Da(t, 'Error opening Xhr: ' + e.message)), void _a(t, e);
          }
          e = i || '';
          var o = new Cn(t.headers);
          r && function (t, e) {
            if (t.forEach && 'function' == typeof t.forEach)
              t.forEach(e, void 0);
            else if (v(t) || 'string' == typeof t)
              G(t, e, void 0);
            else
              for (var n = On(t), i = Nn(t), r = i.length, o = 0; o < r; o++)
                e.call(void 0, i[o], n && n[o], t);
          }(r, function (t, e) {
            o.set(e, t);
          }), r = function (t) {
            t: {
              for (var e = Ta, n = t.length, i = 'string' == typeof t ? t.split('') : t, r = 0; r < n; r++)
                if (r in i && e.call(void 0, i[r], r, t)) {
                  e = r;
                  break t;
                }
              e = -1;
            }
            return 0 > e ? null : 'string' == typeof t ? t.charAt(e) : t[e];
          }(o.X()), i = h.FormData && e instanceof h.FormData, !z(Ia, n) || r || i || o.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'), o.forEach(function (t, e) {
            this.a.setRequestHeader(e, t);
          }, t), t.m && (t.a.responseType = t.m), 'withCredentials' in t.a && t.a.withCredentials !== t.R && (t.a.withCredentials = t.R);
          try {
            Na(t), 0 < t.g && (t.w = function (t) {
              return zt && ae(9) && 'number' == typeof t.timeout && void 0 !== t.ontimeout;
            }(t.a), fa(t.b, Da(t, 'Will abort after ' + t.g + 'ms if incomplete, xhr2 ' + t.w)), t.w ? (t.a.timeout = t.g, t.a.ontimeout = T(t.Ka, t)) : t.s = An(t.Ka, t.g, t)), fa(t.b, Da(t, 'Sending request')), t.i = !0, t.a.send(e), t.i = !1;
          } catch (e) {
            fa(t.b, Da(t, 'Send error: ' + e.message)), _a(t, e);
          }
        }
        function Ta(t) {
          return 'content-type' == t.toLowerCase();
        }
        function _a(t, e) {
          t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, Sa(t), ka(t);
        }
        function Sa(t) {
          t.N || (t.N = !0, t.dispatchEvent('complete'), t.dispatchEvent('error'));
        }
        function Aa(t) {
          if (t.c && void 0 !== c)
            if (t.B[1] && 4 == Oa(t) && 2 == Ca(t))
              fa(t.b, Da(t, 'Local request error detected and ignored'));
            else if (t.i && 4 == Oa(t))
              An(t.Sb, 0, t);
            else if (t.dispatchEvent('readystatechange'), 4 == Oa(t)) {
              fa(t.b, Da(t, 'Request complete')), t.c = !1;
              try {
                var e, n = Ca(t);
                t:
                  switch (n) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var i = !0;
                    break t;
                  default:
                    i = !1;
                  }
                if (!(e = i)) {
                  var r;
                  if (r = 0 === n) {
                    var o = String(t.l).match(Rn)[1] || null;
                    if (!o && h.self && h.self.location) {
                      var a = h.self.location.protocol;
                      o = a.substr(0, a.length - 1);
                    }
                    r = !wa.test(o ? o.toLowerCase() : '');
                  }
                  e = r;
                }
                if (e)
                  t.dispatchEvent('complete'), t.dispatchEvent('success');
                else {
                  try {
                    var s = 2 < Oa(t) ? t.a.statusText : '';
                  } catch (e) {
                    fa(t.b, 'Can not get status: ' + e.message), s = '';
                  }
                  t.h = s + ' [' + Ca(t) + ']', Sa(t);
                }
              } finally {
                ka(t);
              }
            }
        }
        function ka(t, e) {
          if (t.a) {
            Na(t);
            var n = t.a, i = t.B[0] ? d : null;
            t.a = null, t.B = null, e || t.dispatchEvent('ready');
            try {
              n.onreadystatechange = i;
            } catch (e) {
              (t = t.b) && t.log(ra, 'Problem encountered resetting onreadystatechange: ' + e.message, void 0);
            }
          }
        }
        function Na(t) {
          t.a && t.w && (t.a.ontimeout = null), t.s && (h.clearTimeout(t.s), t.s = null);
        }
        function Oa(t) {
          return t.a ? t.a.readyState : 0;
        }
        function Ca(t) {
          try {
            return 2 < Oa(t) ? t.a.status : -1;
          } catch (t) {
            return -1;
          }
        }
        function Da(t, e) {
          return e + ' [' + t.P + ' ' + t.l + ' ' + Ca(t) + ']';
        }
        function Pa(t) {
          var e = qa;
          this.g = [], this.w = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.u = this.B = this.i = !1, this.h = 0, this.b = null, this.l = 0;
        }
        function Ra(t, e, n) {
          t.a = !0, t.c = n, t.f = !e, xa(t);
        }
        function La(t) {
          if (t.a) {
            if (!t.u)
              throw new Va(t);
            t.u = !1;
          }
        }
        function ja(t, e, n, i) {
          t.g.push([
            e,
            n,
            i
          ]), t.a && xa(t);
        }
        function Ma(t) {
          return X(t.g, function (t) {
            return g(t[1]);
          });
        }
        function xa(t) {
          if (t.h && t.a && Ma(t)) {
            var e = t.h, n = Ha[e];
            n && (h.clearTimeout(n.a), delete Ha[e]), t.h = 0;
          }
          t.b && (t.b.l--, delete t.b), e = t.c;
          for (var i = n = !1; t.g.length && !t.i;) {
            var r = t.g.shift(), o = r[0], a = r[1];
            if (r = r[2], o = t.f ? a : o)
              try {
                var s = o.call(r || t.s, e);
                void 0 !== s && (t.f = t.f && (s == e || s instanceof Error), t.c = e = s), (L(e) || 'function' == typeof h.Promise && e instanceof h.Promise) && (i = !0, t.i = !0);
              } catch (i) {
                e = i, t.f = !0, Ma(t) || (n = !0);
              }
          }
          t.c = e, i && (s = T(t.m, t, !0), i = T(t.m, t, !1), e instanceof Pa ? (ja(e, s, i), e.B = !0) : e.then(s, i)), n && (e = new Fa(e), Ha[e.a] = e, t.h = e.a);
        }
        function Va() {
          j.call(this);
        }
        function Ua() {
          j.call(this);
        }
        function Fa(t) {
          this.a = h.setTimeout(T(this.c, this), 0), this.b = t;
        }
        (i = ba.prototype).Ka = function () {
          void 0 !== c && this.a && (this.h = 'Timed out after ' + this.g + 'ms, aborting', fa(this.b, Da(this, this.h)), this.dispatchEvent('timeout'), this.abort(8));
        }, i.abort = function () {
          this.a && this.c && (fa(this.b, Da(this, 'Aborting')), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent('complete'), this.dispatchEvent('abort'), ka(this));
        }, i.Ba = function () {
          this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ka(this, !0)), ba.Za.Ba.call(this);
        }, i.Sb = function () {
          this.wa || (this.O || this.i || this.f ? Aa(this) : this.Hc());
        }, i.Hc = function () {
          Aa(this);
        }, i.getResponse = function () {
          try {
            if (!this.a)
              return null;
            if ('response' in this.a)
              return this.a.response;
            switch (this.m) {
            case ya:
            case 'text':
              return this.a.responseText;
            case 'arraybuffer':
              if ('mozResponseArrayBuffer' in this.a)
                return this.a.mozResponseArrayBuffer;
            }
            var t = this.b;
            return t && t.log(ra, 'Response type ' + this.m + ' is not supported on this browser', void 0), null;
          } catch (t) {
            return fa(this.b, 'Can not get response: ' + t.message), null;
          }
        }, Pa.prototype.cancel = function (t) {
          if (this.a)
            this.c instanceof Pa && this.c.cancel();
          else {
            if (this.b) {
              var e = this.b;
              delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel());
            }
            this.w ? this.w.call(this.s, this) : this.u = !0, this.a || (t = new Ua(this), La(this), Ra(this, !1, t));
          }
        }, Pa.prototype.m = function (t, e) {
          this.i = !1, Ra(this, t, e);
        }, Pa.prototype.then = function (t, e, n) {
          var i, r, o = new Ee(function (t, e) {
              i = t, r = e;
            });
          return ja(this, i, function (t) {
            t instanceof Ua ? o.cancel() : r(t);
          }), o.then(t, e, n);
        }, Pa.prototype.$goog_Thenable = !0, A(Va, j), Va.prototype.message = 'Deferred has already fired', Va.prototype.name = 'AlreadyCalledError', A(Ua, j), Ua.prototype.message = 'Deferred was canceled', Ua.prototype.name = 'CanceledError', Fa.prototype.c = function () {
          throw delete Ha[this.a], this.b;
        };
        var Ha = {};
        function Ba(t) {
          var e = {}, n = e.document || document, i = At(t).toString(), r = pe(document, 'SCRIPT'), o = {
              Tb: r,
              Ka: void 0
            }, a = new Pa(o), s = null, u = null != e.timeout ? e.timeout : 5000;
          return 0 < u && (s = window.setTimeout(function () {
            Ka(r, !0);
            var t = new Ja(Wa, 'Timeout reached for loading script ' + i);
            La(a), Ra(a, !1, t);
          }, u), o.Ka = s), r.onload = r.onreadystatechange = function () {
            r.readyState && 'loaded' != r.readyState && 'complete' != r.readyState || (Ka(r, e.ud || !1, s), La(a), Ra(a, !0, null));
          }, r.onerror = function () {
            Ka(r, !0, s);
            var t = new Ja(Ga, 'Error while loading script ' + i);
            La(a), Ra(a, !1, t);
          }, bt(o = e.attributes || {}, {
            type: 'text/javascript',
            charset: 'UTF-8'
          }), ce(r, o), function (t, e) {
            yt(t, 'HTMLScriptElement'), t.src = At(e), null === l && (l = (e = (e = h.document).querySelector && e.querySelector('script[nonce]')) && (e = e.nonce || e.getAttribute('nonce')) && f.test(e) ? e : ''), (e = l) && t.setAttribute('nonce', e);
          }(r, t), function (t) {
            var e;
            return (e = (t || document).getElementsByTagName('HEAD')) && 0 != e.length ? e[0] : t.documentElement;
          }(n).appendChild(r), a;
        }
        function qa() {
          if (this && this.Tb) {
            var t = this.Tb;
            t && 'SCRIPT' == t.tagName && Ka(t, !0, this.Ka);
          }
        }
        function Ka(t, e, n) {
          null != n && h.clearTimeout(n), t.onload = d, t.onerror = d, t.onreadystatechange = d, e && window.setTimeout(function () {
            t && t.parentNode && t.parentNode.removeChild(t);
          }, 0);
        }
        var Ga = 0, Wa = 1;
        function Ja(t, e) {
          var n = 'Jsloader error (code #' + t + ')';
          e && (n += ': ' + e), j.call(this, n), this.code = t;
        }
        function Xa(t) {
          this.f = t;
        }
        function za(t, e, n) {
          if (this.c = t, t = e || {}, this.u = t.secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token', this.m = t.secureTokenTimeout || Za, this.g = gt(t.secureTokenHeaders || Qa), this.h = t.firebaseEndpoint || 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/', this.l = t.identityPlatformEndpoint || 'https://identitytoolkit.googleapis.com/v2/', this.i = t.firebaseTimeout || ts, this.a = gt(t.firebaseHeaders || es), n && (this.a['X-Client-Version'] = n, this.g['X-Client-Version'] = n), n = 'Node' == Ii(), !(n = h.XMLHttpRequest || n && r.INTERNAL.node && r.INTERNAL.node.XMLHttpRequest) && !wi())
            throw new k('internal-error', 'The XMLHttpRequest compatibility library was not found.');
          this.f = void 0, wi() ? this.f = new la(self) : Ei() ? this.f = new Xa(n) : this.f = new Zo(), this.b = null;
        }
        A(Ja, j), A(Xa, Xo), Xa.prototype.a = function () {
          return new this.f();
        }, Xa.prototype.b = function () {
          return {};
        };
        var Ya, $a = 'idToken', Za = new Hi(30000, 60000), Qa = { 'Content-Type': 'application/x-www-form-urlencoded' }, ts = new Hi(30000, 60000), es = { 'Content-Type': 'application/json' };
        function ns(t, e) {
          e ? t.a['X-Firebase-Locale'] = e : delete t.a['X-Firebase-Locale'];
        }
        function is(t, e) {
          e ? (t.a['X-Client-Version'] = e, t.g['X-Client-Version'] = e) : (delete t.a['X-Client-Version'], delete t.g['X-Client-Version']);
        }
        function rs(t, e, n, i, r, o, a) {
          (function () {
            var t = Ni();
            return !((t = Si(t) != _i ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t) && (!zt || !re || 9 < re);
          }() || wi() ? t = T(t.w, t) : (Ya || (Ya = new Ee(function (t, e) {
            !function (t, e) {
              if (((window.gapi || {}).client || {}).request)
                t();
              else {
                h[as] = function () {
                  ((window.gapi || {}).client || {}).request ? t() : e(Error('CORS_UNSUPPORTED'));
                }, function (t, e) {
                  ja(t, null, e, void 0);
                }(Ba(kt(os, { onload: as })), function () {
                  e(Error('CORS_UNSUPPORTED'));
                });
              }
            }(t, e);
          })), t = T(t.s, t)), t(e, n, i, r, o, a));
        }
        za.prototype.S = function () {
          return this.b;
        }, za.prototype.w = function (t, e, n, i, r, o) {
          if (wi() && (void 0 === h.fetch || void 0 === h.Headers || void 0 === h.Request))
            throw new k('operation-not-supported-in-this-environment', 'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.');
          var a = new ba(this.f);
          if (o) {
            a.g = Math.max(0, o);
            var s = setTimeout(function () {
              a.dispatchEvent('timeout');
            }, o);
          }
          Tn(a, 'complete', function () {
            s && clearTimeout(s);
            var t = null;
            try {
              t = JSON.parse(function (t) {
                try {
                  return t.a ? t.a.responseText : '';
                } catch (e) {
                  return fa(t.b, 'Can not get responseText: ' + e.message), '';
                }
              }(this)) || null;
            } catch (e) {
              t = null;
            }
            e && e(t);
          }), _n(a, 'ready', function () {
            s && clearTimeout(s), We(this);
          }), _n(a, 'timeout', function () {
            s && clearTimeout(s), We(this), e && e(null);
          }), Ea(a, t, n, i, r);
        };
        var os = new wt(Tt, 'https://apis.google.com/js/client.js?onload=%{onload}'), as = '__fcb' + Math.floor(1000000 * Math.random()).toString();
        function ss(t, e, n, i, r, o, a) {
          var s = Fn(e + n);
          Vn(s, 'key', t.c), a && Vn(s, 'cb', S().toString());
          var u = 'GET' == i;
          if (u)
            for (var c in r)
              r.hasOwnProperty(c) && Vn(s, c, r[c]);
          return new Ee(function (e, n) {
            rs(t, s.toString(), function (t) {
              t ? t.error ? n(nu(t, o || {})) : e(t) : n(new k('network-request-failed'));
            }, i, u ? void 0 : ri(Mi(r)), t.a, t.i.get());
          });
        }
        function us(t) {
          if ('string' != typeof (t = t.email) || !gi.test(t))
            throw new k('invalid-email');
        }
        function cs(t) {
          'email' in t && us(t);
        }
        function hs(t) {
          if (!t[$a]) {
            if (t.mfaPendingCredential)
              throw new k('multi-factor-auth-required', null, gt(t));
            throw new k('internal-error');
          }
        }
        function fs(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof)
              throw new k('internal-error');
          } else {
            if (!t.sessionInfo)
              throw new k('missing-verification-id');
            if (!t.code)
              throw new k('missing-verification-code');
          }
        }
        za.prototype.s = function (t, e, n, i, r) {
          var o = this;
          Ya.then(function () {
            window.gapi.client.setApiKey(o.c);
            var a = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null), window.gapi.client.request({
              path: t,
              method: n,
              body: i,
              headers: r,
              authType: 'none',
              callback: function (t) {
                window.gapi.auth.setToken(a), e && e(t);
              }
            });
          }).o(function (t) {
            e && e({ error: { message: t && t.message || 'CORS_UNSUPPORTED' } });
          });
        }, za.prototype.vb = function () {
          return tu(this, Bs, {});
        }, za.prototype.xb = function (t, e) {
          return tu(this, Fs, {
            idToken: t,
            email: e
          });
        }, za.prototype.yb = function (t, e) {
          return tu(this, Hs, {
            idToken: t,
            password: e
          });
        };
        var ls = {
          displayName: 'DISPLAY_NAME',
          photoUrl: 'PHOTO_URL'
        };
        function ds(t) {
          if (!t.phoneVerificationInfo)
            throw new k('internal-error');
          if (!t.phoneVerificationInfo.sessionInfo)
            throw new k('missing-verification-id');
          if (!t.phoneVerificationInfo.code)
            throw new k('missing-verification-code');
        }
        function ps(t) {
          if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken)
            throw new k('internal-error');
        }
        function vs(t, e) {
          return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf('oidc.') && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (ti(t = new Yn(t.postBody), 'nonce') && (e.nonce = t.get('nonce')))), e;
        }
        function gs(t) {
          var e = null;
          if (t.needConfirmation ? (t.code = 'account-exists-with-different-credential', e = Jo(t)) : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage ? (t.code = 'credential-already-in-use', e = Jo(t)) : 'EMAIL_EXISTS' == t.errorMessage ? (t.code = 'email-already-in-use', e = Jo(t)) : t.errorMessage && (e = eu(t.errorMessage)), e)
            throw e;
          hs(t);
        }
        function ms(t, e) {
          return e.returnIdpCredential = !0, tu(t, Gs, e);
        }
        function bs(t, e) {
          return e.returnIdpCredential = !0, tu(t, Js, e);
        }
        function ys(t, e) {
          return e.returnIdpCredential = !0, e.autoCreate = !1, tu(t, Ws, e);
        }
        function ws(t) {
          if (!t.oobCode)
            throw new k('invalid-action-code');
        }
        (i = za.prototype).zb = function (t, e) {
          var n = { idToken: t }, i = [];
          return pt(ls, function (t, r) {
            var o = e[r];
            null === o ? i.push(t) : r in e && (n[r] = o);
          }), i.length && (n.deleteAttribute = i), tu(this, Fs, n);
        }, i.rb = function (t, e) {
          return bt(t = {
            requestType: 'PASSWORD_RESET',
            email: t
          }, e), tu(this, js, t);
        }, i.sb = function (t, e) {
          return bt(t = {
            requestType: 'EMAIL_SIGNIN',
            email: t
          }, e), tu(this, Ps, t);
        }, i.qb = function (t, e) {
          return bt(t = {
            requestType: 'VERIFY_EMAIL',
            idToken: t
          }, e), tu(this, Rs, t);
        }, i.Ab = function (t, e, n) {
          return bt(t = {
            requestType: 'VERIFY_AND_CHANGE_EMAIL',
            idToken: t,
            newEmail: e
          }, n), tu(this, Ls, t);
        }, i.cb = function (t) {
          return tu(this, Ys, t);
        }, i.jb = function (t, e) {
          return tu(this, Vs, {
            oobCode: t,
            newPassword: e
          });
        }, i.Pa = function (t) {
          return tu(this, Es, { oobCode: t });
        }, i.fb = function (t) {
          return tu(this, Is, { oobCode: t });
        };
        var Is = {
            endpoint: 'setAccountInfo',
            A: ws,
            Y: 'email',
            C: !0
          }, Es = {
            endpoint: 'resetPassword',
            A: ws,
            G: function (t) {
              var e = t.requestType;
              if (!e || !t.email && 'EMAIL_SIGNIN' != e && 'VERIFY_AND_CHANGE_EMAIL' != e)
                throw new k('internal-error');
            },
            C: !0
          }, Ts = {
            endpoint: 'signupNewUser',
            A: function (t) {
              if (us(t), !t.password)
                throw new k('weak-password');
            },
            G: hs,
            U: !0,
            C: !0
          }, _s = {
            endpoint: 'createAuthUri',
            C: !0
          }, Ss = {
            endpoint: 'deleteAccount',
            M: ['idToken']
          }, As = {
            endpoint: 'setAccountInfo',
            M: [
              'idToken',
              'deleteProvider'
            ],
            A: function (t) {
              if ('array' != p(t.deleteProvider))
                throw new k('internal-error');
            }
          }, ks = {
            endpoint: 'emailLinkSignin',
            M: [
              'email',
              'oobCode'
            ],
            A: us,
            G: hs,
            U: !0,
            C: !0
          }, Ns = {
            endpoint: 'emailLinkSignin',
            M: [
              'idToken',
              'email',
              'oobCode'
            ],
            A: us,
            G: hs,
            U: !0
          }, Os = {
            endpoint: 'accounts/mfaEnrollment:finalize',
            M: [
              'idToken',
              'phoneVerificationInfo'
            ],
            A: ds,
            G: hs,
            C: !0,
            La: !0
          }, Cs = {
            endpoint: 'accounts/mfaSignIn:finalize',
            M: [
              'mfaPendingCredential',
              'phoneVerificationInfo'
            ],
            A: ds,
            G: hs,
            C: !0,
            La: !0
          }, Ds = { endpoint: 'getAccountInfo' }, Ps = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            A: function (t) {
              if ('EMAIL_SIGNIN' != t.requestType)
                throw new k('internal-error');
              us(t);
            },
            Y: 'email',
            C: !0
          }, Rs = {
            endpoint: 'getOobConfirmationCode',
            M: [
              'idToken',
              'requestType'
            ],
            A: function (t) {
              if ('VERIFY_EMAIL' != t.requestType)
                throw new k('internal-error');
            },
            Y: 'email',
            C: !0
          }, Ls = {
            endpoint: 'getOobConfirmationCode',
            M: [
              'idToken',
              'newEmail',
              'requestType'
            ],
            A: function (t) {
              if ('VERIFY_AND_CHANGE_EMAIL' != t.requestType)
                throw new k('internal-error');
            },
            Y: 'email',
            C: !0
          }, js = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            A: function (t) {
              if ('PASSWORD_RESET' != t.requestType)
                throw new k('internal-error');
              us(t);
            },
            Y: 'email',
            C: !0
          }, Ms = {
            hb: !0,
            endpoint: 'getProjectConfig',
            Rb: 'GET'
          }, xs = {
            hb: !0,
            endpoint: 'getRecaptchaParam',
            Rb: 'GET',
            G: function (t) {
              if (!t.recaptchaSiteKey)
                throw new k('internal-error');
            }
          }, Vs = {
            endpoint: 'resetPassword',
            A: ws,
            Y: 'email',
            C: !0
          }, Us = {
            endpoint: 'sendVerificationCode',
            M: [
              'phoneNumber',
              'recaptchaToken'
            ],
            Y: 'sessionInfo',
            C: !0
          }, Fs = {
            endpoint: 'setAccountInfo',
            M: ['idToken'],
            A: cs,
            U: !0
          }, Hs = {
            endpoint: 'setAccountInfo',
            M: ['idToken'],
            A: function (t) {
              if (cs(t), !t.password)
                throw new k('weak-password');
            },
            G: hs,
            U: !0
          }, Bs = {
            endpoint: 'signupNewUser',
            G: hs,
            U: !0,
            C: !0
          }, qs = {
            endpoint: 'accounts/mfaEnrollment:start',
            M: [
              'idToken',
              'phoneEnrollmentInfo'
            ],
            A: function (t) {
              if (!t.phoneEnrollmentInfo)
                throw new k('internal-error');
              if (!t.phoneEnrollmentInfo.phoneNumber)
                throw new k('missing-phone-number');
              if (!t.phoneEnrollmentInfo.recaptchaToken)
                throw new k('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo)
                throw new k('internal-error');
            },
            C: !0,
            La: !0
          }, Ks = {
            endpoint: 'accounts/mfaSignIn:start',
            M: [
              'mfaPendingCredential',
              'mfaEnrollmentId',
              'phoneSignInInfo'
            ],
            A: function (t) {
              if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken)
                throw new k('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo)
                throw new k('internal-error');
            },
            C: !0,
            La: !0
          }, Gs = {
            endpoint: 'verifyAssertion',
            A: ps,
            Wa: vs,
            G: gs,
            U: !0,
            C: !0
          }, Ws = {
            endpoint: 'verifyAssertion',
            A: ps,
            Wa: vs,
            G: function (t) {
              if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
                throw new k('user-not-found');
              if (t.errorMessage)
                throw eu(t.errorMessage);
              hs(t);
            },
            U: !0,
            C: !0
          }, Js = {
            endpoint: 'verifyAssertion',
            A: function (t) {
              if (ps(t), !t.idToken)
                throw new k('internal-error');
            },
            Wa: vs,
            G: gs,
            U: !0
          }, Xs = {
            endpoint: 'verifyCustomToken',
            A: function (t) {
              if (!t.token)
                throw new k('invalid-custom-token');
            },
            G: hs,
            U: !0,
            C: !0
          }, zs = {
            endpoint: 'verifyPassword',
            A: function (t) {
              if (us(t), !t.password)
                throw new k('wrong-password');
            },
            G: hs,
            U: !0,
            C: !0
          }, Ys = {
            endpoint: 'verifyPhoneNumber',
            A: fs,
            G: hs,
            C: !0
          }, $s = {
            endpoint: 'verifyPhoneNumber',
            A: function (t) {
              if (!t.idToken)
                throw new k('internal-error');
              fs(t);
            },
            G: function (t) {
              if (t.temporaryProof)
                throw t.code = 'credential-already-in-use', Jo(t);
              hs(t);
            }
          }, Zs = {
            Eb: { USER_NOT_FOUND: 'user-not-found' },
            endpoint: 'verifyPhoneNumber',
            A: fs,
            G: hs,
            C: !0
          }, Qs = {
            endpoint: 'accounts/mfaEnrollment:withdraw',
            M: [
              'idToken',
              'mfaEnrollmentId'
            ],
            G: function (t) {
              if (!!t[$a] ^ !!t.refreshToken)
                throw new k('internal-error');
            },
            C: !0,
            La: !0
          };
        function tu(t, e, n) {
          if (!function (t, e) {
              if (!e || !e.length)
                return !0;
              if (!t)
                return !1;
              for (var n = 0; n < e.length; n++) {
                var i = t[e[n]];
                if (null == i || '' === i)
                  return !1;
              }
              return !0;
            }(n, e.M))
            return Ce(new k('internal-error'));
          var i, r = !!e.La, o = e.Rb || 'POST';
          return Oe(n).then(e.A).then(function () {
            return e.U && (n.returnSecureToken = !0), e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b), ss(t, r ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1);
          }).then(function (t) {
            return i = t, e.Wa ? e.Wa(n, i) : i;
          }).then(e.G).then(function () {
            if (!e.Y)
              return i;
            if (!(e.Y in i))
              throw new k('internal-error');
            return i[e.Y];
          });
        }
        function eu(t) {
          return nu({
            error: {
              errors: [{ message: t }],
              code: 400,
              message: t
            }
          });
        }
        function nu(t, e) {
          var n = (t.error && t.error.errors && t.error.errors[0] || {}).reason || '', i = {
              keyInvalid: 'invalid-api-key',
              ipRefererBlocked: 'app-not-authorized'
            };
          if (n = i[n] ? new k(i[n]) : null)
            return n;
          for (var r in (n = t.error && t.error.message || '', bt(i = {
              INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
              CREDENTIAL_MISMATCH: 'custom-token-mismatch',
              MISSING_CUSTOM_TOKEN: 'internal-error',
              INVALID_IDENTIFIER: 'invalid-email',
              MISSING_CONTINUE_URI: 'internal-error',
              INVALID_EMAIL: 'invalid-email',
              INVALID_PASSWORD: 'wrong-password',
              USER_DISABLED: 'user-disabled',
              MISSING_PASSWORD: 'internal-error',
              EMAIL_EXISTS: 'email-already-in-use',
              PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
              INVALID_IDP_RESPONSE: 'invalid-credential',
              INVALID_PENDING_TOKEN: 'invalid-credential',
              FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
              MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
              INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
              INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
              INVALID_SENDER: 'invalid-sender',
              EMAIL_NOT_FOUND: 'user-not-found',
              RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
              EXPIRED_OOB_CODE: 'expired-action-code',
              INVALID_OOB_CODE: 'invalid-action-code',
              MISSING_OOB_CODE: 'internal-error',
              INVALID_PROVIDER_ID: 'invalid-provider-id',
              CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
              INVALID_ID_TOKEN: 'invalid-user-token',
              TOKEN_EXPIRED: 'user-token-expired',
              USER_NOT_FOUND: 'user-token-expired',
              CORS_UNSUPPORTED: 'cors-unsupported',
              DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
              INVALID_APP_ID: 'invalid-app-id',
              TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
              WEAK_PASSWORD: 'weak-password',
              OPERATION_NOT_ALLOWED: 'operation-not-allowed',
              USER_CANCELLED: 'user-cancelled',
              CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
              INVALID_APP_CREDENTIAL: 'invalid-app-credential',
              INVALID_CODE: 'invalid-verification-code',
              INVALID_PHONE_NUMBER: 'invalid-phone-number',
              INVALID_SESSION_INFO: 'invalid-verification-id',
              INVALID_TEMPORARY_PROOF: 'invalid-credential',
              MISSING_APP_CREDENTIAL: 'missing-app-credential',
              MISSING_CODE: 'missing-verification-code',
              MISSING_PHONE_NUMBER: 'missing-phone-number',
              MISSING_SESSION_INFO: 'missing-verification-id',
              QUOTA_EXCEEDED: 'quota-exceeded',
              SESSION_EXPIRED: 'code-expired',
              REJECTED_CREDENTIAL: 'rejected-credential',
              INVALID_CONTINUE_URI: 'invalid-continue-uri',
              MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
              MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
              UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
              INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
              INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
              INVALID_CERT_HASH: 'invalid-cert-hash',
              UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
              INVALID_TENANT_ID: 'invalid-tenant-id',
              TENANT_ID_MISMATCH: 'tenant-id-mismatch',
              ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
              INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
              MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
              MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
              MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
              EMAIL_CHANGE_NEEDS_VERIFICATION: 'email-change-needs-verification',
              SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
              SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
              UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
              UNVERIFIED_EMAIL: 'unverified-email'
            }, e || {}), e = (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, i))
            if (0 === n.indexOf(r))
              return new k(i[r], e);
          return !e && t && (e = ji(t)), new k('internal-error', e);
        }
        function iu(t) {
          this.b = t, this.a = null, this.nb = function (t) {
            return (su || (su = new Ee(function (t, e) {
              function n() {
                Fi(), Oi('gapi.load')('gapi.iframes', {
                  callback: t,
                  ontimeout: function () {
                    Fi(), e(Error('Network Error'));
                  },
                  timeout: ou.get()
                });
              }
              if (Oi('gapi.iframes.Iframe'))
                t();
              else if (Oi('gapi.load'))
                n();
              else {
                var i = '__iframefcb' + Math.floor(1000000 * Math.random()).toString();
                h[i] = function () {
                  Oi('gapi.load') ? n() : e(Error('Network Error'));
                }, Oe(Ba(i = kt(ru, { onload: i }))).o(function () {
                  e(Error('Network Error'));
                });
              }
            }).o(function (t) {
              throw su = null, t;
            }))).then(function () {
              return new Ee(function (e, n) {
                Oi('gapi.iframes.getContext')().open({
                  where: document.body,
                  url: t.b,
                  messageHandlersFilter: Oi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'),
                  attributes: {
                    style: {
                      position: 'absolute',
                      top: '-100px',
                      width: '1px',
                      height: '1px'
                    }
                  },
                  dontclear: !0
                }, function (i) {
                  function r() {
                    clearTimeout(o), e();
                  }
                  t.a = i, t.a.restyle({ setHideOnLeave: !1 });
                  var o = setTimeout(function () {
                    n(Error('Network Error'));
                  }, au.get());
                  i.ping(r).then(r, function () {
                    n(Error('Network Error'));
                  });
                });
              });
            });
          }(this);
        }
        var ru = new wt(Tt, 'https://apis.google.com/js/api.js?onload=%{onload}'), ou = new Hi(30000, 60000), au = new Hi(5000, 15000), su = null;
        function uu(t, e, n) {
          this.i = t, this.g = e, this.h = n, this.f = null, this.a = Hn(this.i, '/__/auth/iframe'), Vn(this.a, 'apiKey', this.g), Vn(this.a, 'appName', this.h), this.b = null, this.c = [];
        }
        function cu(t, e, n, i, r) {
          this.s = t, this.m = e, this.c = n, this.u = i, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null;
        }
        function hu(t) {
          try {
            return r.app(t).auth().Ea();
          } catch (t) {
            return [];
          }
        }
        function fu(t, e, n, i, r) {
          this.u = t, this.f = e, this.b = n, this.c = i || null, this.h = r || null, this.m = this.s = this.w = null, this.g = [], this.l = this.a = null;
        }
        function lu(t) {
          var e = hi();
          return function (t) {
            return tu(t, Ms, {}).then(function (t) {
              return t.authorizedDomains || [];
            });
          }(t).then(function (t) {
            t: {
              var n = Fn(e), i = n.f;
              n = n.b;
              for (var r = 0; r < t.length; r++) {
                var o = t[r], a = n, s = i;
                if (0 == o.indexOf('chrome-extension://') ? a = Fn(o).b == a && 'chrome-extension' == s : 'http' != s && 'https' != s ? a = !1 : vi.test(o) ? a = a == o : (o = o.split('.').join('\\.'), a = new RegExp('^(.+\\.' + o + '|' + o + ')$', 'i').test(a)), a) {
                  t = !0;
                  break t;
                }
              }
              t = !1;
            }
            if (!t)
              throw new Go(hi());
          });
        }
        function du(t) {
          return t.l || (t.l = mi().then(function () {
            if (!t.s) {
              var e = t.c, n = t.h, i = hu(t.b), r = new uu(t.u, t.f, t.b);
              r.f = e, r.b = n, r.c = Q(i || []), t.s = r.toString();
            }
            t.i = new iu(t.s), function (t) {
              if (!t.i)
                throw Error('IfcHandler must be initialized!');
              !function (t, e) {
                t.nb.then(function () {
                  t.a.register('authEvent', e, Oi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                });
              }(t.i, function (e) {
                var n = {};
                if (e && e.authEvent) {
                  var i = !1;
                  for (e = Ho(e.authEvent), n = 0; n < t.g.length; n++)
                    i = t.g[n](e) || i;
                  return (n = {}).status = i ? 'ACK' : 'ERROR', Oe(n);
                }
                return n.status = 'ERROR', Oe(n);
              });
            }(t);
          })), t.l;
        }
        function pu(t) {
          return t.m || (t.w = t.c ? ki(t.c, hu(t.b)) : null, t.m = new za(t.f, R(t.h), t.w)), t.m;
        }
        function vu(t, e, n, i, r, o, a, s, u, c, h) {
          return (t = new cu(t, e, n, i, r)).l = o, t.g = a, t.i = s, t.b = gt(u || null), t.f = c, t.ub(h).toString();
        }
        function gu(t) {
          if (this.a = t || r.INTERNAL.reactNative && r.INTERNAL.reactNative.AsyncStorage, !this.a)
            throw new k('internal-error', 'The React Native compatibility library was not found.');
          this.type = 'asyncStorage';
        }
        function mu(t) {
          this.b = t, this.a = {}, this.f = T(this.c, this);
        }
        uu.prototype.toString = function () {
          return this.f ? Vn(this.a, 'v', this.f) : Qn(this.a.a, 'v'), this.b ? Vn(this.a, 'eid', this.b) : Qn(this.a.a, 'eid'), this.c.length ? Vn(this.a, 'fw', this.c.join(',')) : Qn(this.a.a, 'fw'), this.a.toString();
        }, cu.prototype.ub = function (t) {
          return this.h = t, this;
        }, cu.prototype.toString = function () {
          var t = Hn(this.s, '/__/auth/handler');
          if (Vn(t, 'apiKey', this.m), Vn(t, 'appName', this.c), Vn(t, 'authType', this.u), this.a.isOAuthProvider) {
            var e = this.a;
            try {
              var n = r.app(this.c).auth().ja();
            } catch (t) {
              n = null;
            }
            for (var i in (e.kb = n, Vn(t, 'providerId', this.a.providerId), n = Mi((e = this.a).Fb)))
              n[i] = n[i].toString();
            i = e.Oc, n = gt(n);
            for (var o = 0; o < i.length; o++) {
              var a = i[o];
              a in n && delete n[a];
            }
            e.lb && e.kb && !n[e.lb] && (n[e.lb] = e.kb), vt(n) || Vn(t, 'customParameters', ji(n));
          }
          if ('function' == typeof this.a.Nb && ((e = this.a.Nb()).length && Vn(t, 'scopes', e.join(','))), this.l ? Vn(t, 'redirectUrl', this.l) : Qn(t.a, 'redirectUrl'), this.g ? Vn(t, 'eventId', this.g) : Qn(t.a, 'eventId'), this.i ? Vn(t, 'v', this.i) : Qn(t.a, 'v'), this.b)
            for (var s in this.b)
              this.b.hasOwnProperty(s) && !Un(t, s) && Vn(t, s, this.b[s]);
          return this.h ? Vn(t, 'tid', this.h) : Qn(t.a, 'tid'), this.f ? Vn(t, 'eid', this.f) : Qn(t.a, 'eid'), (s = hu(this.c)).length && Vn(t, 'fw', s.join(',')), t.toString();
        }, (i = fu.prototype).Lb = function (t, e, n) {
          var i = new k('popup-closed-by-user'), r = new k('web-storage-unsupported'), o = this, a = !1;
          return this.ka().then(function () {
            (function (t) {
              var e = { type: 'webStorageSupport' };
              return du(t).then(function () {
                return function (t, e) {
                  return t.nb.then(function () {
                    return new Ee(function (n) {
                      t.a.send(e.type, e, n, Oi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                    });
                  });
                }(t.i, e);
              }).then(function (t) {
                if (t && t.length && void 0 !== t[0].webStorageSupport)
                  return t[0].webStorageSupport;
                throw Error();
              });
            }(o).then(function (n) {
              n || (t && di(t), e(r), a = !0);
            }));
          }).o(function () {
          }).then(function () {
            if (!a)
              return function (t) {
                return new Ee(function (e) {
                  return function n() {
                    kn(2000).then(function () {
                      if (t && !t.closed)
                        return n();
                      e();
                    });
                  }();
                });
              }(t);
          }).then(function () {
            if (!a)
              return kn(n).then(function () {
                e(i);
              });
          });
        }, i.Ub = function () {
          var t = Ni();
          return !Li(t) && !Ui(t);
        }, i.Qb = function () {
          return !1;
        }, i.Jb = function (t, e, n, i, r, o, a, s) {
          if (!t)
            return Ce(new k('popup-blocked'));
          if (a && !Li())
            return this.ka().o(function (e) {
              di(t), r(e);
            }), i(), Oe();
          this.a || (this.a = lu(pu(this)));
          var u = this;
          return this.a.then(function () {
            var e = u.ka().o(function (e) {
              throw di(t), r(e), e;
            });
            return i(), e;
          }).then(function () {
            (Uo(n), a) || fi(vu(u.u, u.f, u.b, e, n, null, o, u.c, void 0, u.h, s), t);
          }).o(function (t) {
            throw 'auth/network-request-failed' == t.code && (u.a = null), t;
          });
        }, i.Kb = function (t, e, n, i) {
          this.a || (this.a = lu(pu(this)));
          var r = this;
          return this.a.then(function () {
            Uo(e), fi(vu(r.u, r.f, r.b, t, e, hi(), n, r.c, void 0, r.h, i));
          }).o(function (t) {
            throw 'auth/network-request-failed' == t.code && (r.a = null), t;
          });
        }, i.ka = function () {
          var t = this;
          return du(this).then(function () {
            return t.i.nb;
          }).o(function () {
            throw t.a = null, new k('network-request-failed');
          });
        }, i.Xb = function () {
          return !0;
        }, i.Ca = function (t) {
          this.g.push(t);
        }, i.Qa = function (t) {
          $(this.g, function (e) {
            return e == t;
          });
        }, (i = gu.prototype).get = function (t) {
          return Oe(this.a.getItem(t)).then(function (t) {
            return t && xi(t);
          });
        }, i.set = function (t, e) {
          return Oe(this.a.setItem(t, ji(e)));
        }, i.T = function (t) {
          return Oe(this.a.removeItem(t));
        }, i.ba = function () {
        }, i.ha = function () {
        };
        var bu, yu = [];
        function wu(t, e, n) {
          vt(t.a) && t.b.addEventListener('message', t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n);
        }
        function Iu(t) {
          this.a = t;
        }
        function Eu(t) {
          this.c = t, this.b = !1, this.a = [];
        }
        function Tu(t, e, n, i) {
          var r, o, a, s, u = n || {}, c = null;
          if (t.b)
            return Ce(Error('connection_unavailable'));
          var h = i ? 800 : 50, f = 'undefined' != typeof MessageChannel ? new MessageChannel() : null;
          return new Ee(function (n, i) {
            f ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), f.port1.start(), a = setTimeout(function () {
              i(Error('unsupported_event'));
            }, h), c = {
              messageChannel: f,
              onMessage: o = function (t) {
                t.data.eventId === r && ('ack' === t.data.status ? (clearTimeout(a), s = setTimeout(function () {
                  i(Error('timeout'));
                }, 3000)) : 'done' === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? n(t.data.response) : i(Error('unknown_error'))) : (clearTimeout(a), clearTimeout(s), i(Error('invalid_response'))));
              }
            }, t.a.push(c), f.port1.addEventListener('message', o), t.c.postMessage({
              eventType: e,
              eventId: r,
              data: u
            }, [f.port2])) : i(Error('connection_unavailable'));
          }).then(function (e) {
            return _u(t, c), e;
          }).o(function (e) {
            throw _u(t, c), e;
          });
        }
        function _u(t, e) {
          if (e) {
            var n = e.messageChannel, i = e.onMessage;
            n && (n.port1.removeEventListener('message', i), n.port1.close()), $(t.a, function (t) {
              return t == e;
            });
          }
        }
        function Su() {
          if (!Nu())
            throw new k('web-storage-unsupported');
          this.c = {}, this.a = [], this.b = 0, this.u = h.indexedDB, this.type = 'indexedDB', this.g = this.l = this.f = this.i = null, this.s = !1, this.h = null;
          var t = this;
          wi() && self ? (this.l = function () {
            var t = wi() ? self : null;
            if (G(yu, function (n) {
                n.b == t && (e = n);
              }), !e) {
              var e = new mu(t);
              yu.push(e);
            }
            return e;
          }(), wu(this.l, 'keyChanged', function (e, n) {
            return Ru(t).then(function (e) {
              return 0 < e.length && G(t.a, function (t) {
                t(e);
              }), { keyProcessed: z(e, n.key) };
            });
          }), wu(this.l, 'ping', function () {
            return Oe(['keyChanged']);
          })) : function () {
            var t = h.navigator;
            return t && t.serviceWorker ? Oe().then(function () {
              return t.serviceWorker.ready;
            }).then(function (t) {
              return t.active || null;
            }).o(function () {
              return null;
            }) : Oe(null);
          }().then(function (e) {
            (t.h = e) && (t.g = new Eu(new Iu(e)), Tu(t.g, 'ping', null, !0).then(function (e) {
              e[0].fulfilled && z(e[0].value, 'keyChanged') && (t.s = !0);
            }).o(function () {
            }));
          });
        }
        function Au(t) {
          return new Ee(function (e, n) {
            var i = t.u.open('firebaseLocalStorageDb', 1);
            i.onerror = function (t) {
              try {
                t.preventDefault();
              } catch (t) {
              }
              n(Error(t.target.error));
            }, i.onupgradeneeded = function (t) {
              t = t.target.result;
              try {
                t.createObjectStore('firebaseLocalStorage', { keyPath: 'fbase_key' });
              } catch (t) {
                n(t);
              }
            }, i.onsuccess = function (i) {
              (i = i.target.result).objectStoreNames.contains('firebaseLocalStorage') ? e(i) : function (t) {
                return new Ee(function (e, n) {
                  var i = t.u.deleteDatabase('firebaseLocalStorageDb');
                  i.onsuccess = function () {
                    e();
                  }, i.onerror = function (t) {
                    n(Error(t.target.error));
                  };
                });
              }(t).then(function () {
                return Au(t);
              }).then(function (t) {
                e(t);
              }).o(function (t) {
                n(t);
              });
            };
          });
        }
        function ku(t) {
          return t.m || (t.m = Au(t)), t.m;
        }
        function Nu() {
          try {
            return !!h.indexedDB;
          } catch (t) {
            return !1;
          }
        }
        function Ou(t) {
          return t.objectStore('firebaseLocalStorage');
        }
        function Cu(t, e) {
          return t.transaction(['firebaseLocalStorage'], e ? 'readwrite' : 'readonly');
        }
        function Du(t) {
          return new Ee(function (e, n) {
            t.onsuccess = function (t) {
              t && t.target ? e(t.target.result) : e();
            }, t.onerror = function (t) {
              n(t.target.error);
            };
          });
        }
        function Pu(t, e) {
          return t.g && t.h && function () {
            var t = h.navigator;
            return t && t.serviceWorker && t.serviceWorker.controller || null;
          }() === t.h ? Tu(t.g, 'keyChanged', { key: e }, t.s).then(function () {
          }).o(function () {
          }) : Oe();
        }
        function Ru(t) {
          return ku(t).then(function (t) {
            var e = Ou(Cu(t, !1));
            return e.getAll ? Du(e.getAll()) : new Ee(function (t, n) {
              var i = [], r = e.openCursor();
              r.onsuccess = function (e) {
                (e = e.target.result) ? (i.push(e.value), e.continue()) : t(i);
              }, r.onerror = function (t) {
                n(t.target.error);
              };
            });
          }).then(function (n) {
            var i = {}, r = [];
            if (0 == t.b) {
              for (r = 0; r < n.length; r++)
                i[n[r].fbase_key] = n[r].value;
              r = function t(n, i) {
                var r, o = [];
                for (r in n)
                  r in i ? e(n[r]) != e(i[r]) ? o.push(r) : 'object' == e(n[r]) && null != n[r] && null != i[r] ? 0 < t(n[r], i[r]).length && o.push(r) : n[r] !== i[r] && o.push(r) : o.push(r);
                for (r in i)
                  r in n || o.push(r);
                return o;
              }(t.c, i), t.c = i;
            }
            return r;
          });
        }
        function Lu(t) {
          t.i && t.i.cancel('STOP_EVENT'), t.f && (clearTimeout(t.f), t.f = null);
        }
        function ju(t) {
          var e = this, n = null;
          this.a = [], this.type = 'indexedDB', this.c = t, this.b = Oe().then(function () {
            if (Nu()) {
              var t = Vi(), i = '__sak' + t;
              return bu || (bu = new Su()), (n = bu).set(i, t).then(function () {
                return n.get(i);
              }).then(function (e) {
                if (e !== t)
                  throw Error('indexedDB not supported!');
                return n.T(i);
              }).then(function () {
                return n;
              }).o(function () {
                return e.c;
              });
            }
            return e.c;
          }).then(function (t) {
            return e.type = t.type, t.ba(function (t) {
              G(e.a, function (e) {
                e(t);
              });
            }), t;
          });
        }
        function Mu() {
          this.a = {}, this.type = 'inMemory';
        }
        function xu() {
          if (!function () {
              var t = 'Node' == Ii();
              if (!(t = Vu() || t && r.INTERNAL.node && r.INTERNAL.node.localStorage))
                return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (t) {
                return !1;
              }
            }()) {
            if ('Node' == Ii())
              throw new k('internal-error', 'The LocalStorage compatibility library was not found.');
            throw new k('web-storage-unsupported');
          }
          this.a = Vu() || r.INTERNAL.node.localStorage, this.type = 'localStorage';
        }
        function Vu() {
          try {
            var t = h.localStorage, e = Vi();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function Uu() {
          this.type = 'nullStorage';
        }
        function Fu() {
          if (!function () {
              var t = 'Node' == Ii();
              if (!(t = Hu() || t && r.INTERNAL.node && r.INTERNAL.node.sessionStorage))
                return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (t) {
                return !1;
              }
            }()) {
            if ('Node' == Ii())
              throw new k('internal-error', 'The SessionStorage compatibility library was not found.');
            throw new k('web-storage-unsupported');
          }
          this.a = Hu() || r.INTERNAL.node.sessionStorage, this.type = 'sessionStorage';
        }
        function Hu() {
          try {
            var t = h.sessionStorage, e = Vi();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }
        function Bu() {
          var t = {};
          t.Browser = Gu, t.Node = Wu, t.ReactNative = Ju, t.Worker = Xu, this.a = t[Ii()];
        }
        mu.prototype.c = function (t) {
          var e = t.data.eventType, n = t.data.eventId, i = this.a[e];
          if (i && 0 < i.length) {
            t.ports[0].postMessage({
              status: 'ack',
              eventId: n,
              eventType: e,
              response: null
            });
            var r = [];
            G(i, function (e) {
              r.push(Oe().then(function () {
                return e(t.origin, t.data.data);
              }));
            }), Pe(r).then(function (i) {
              var r = [];
              G(i, function (t) {
                r.push({
                  fulfilled: t.Mb,
                  value: t.value,
                  reason: t.reason ? t.reason.message : void 0
                });
              }), G(r, function (t) {
                for (var e in t)
                  void 0 === t[e] && delete t[e];
              }), t.ports[0].postMessage({
                status: 'done',
                eventId: n,
                eventType: e,
                response: r
              });
            });
          }
        }, Iu.prototype.postMessage = function (t, e) {
          this.a.postMessage(t, e);
        }, Eu.prototype.close = function () {
          for (; 0 < this.a.length;)
            _u(this, this.a[0]);
          this.b = !0;
        }, (i = Su.prototype).set = function (t, e) {
          var n, i = !1, r = this;
          return ku(this).then(function (e) {
            return Du((e = Ou(Cu(n = e, !0))).get(t));
          }).then(function (o) {
            var a = Ou(Cu(n, !0));
            return o ? (o.value = e, Du(a.put(o))) : (r.b++, i = !0, (o = {}).fbase_key = t, o.value = e, Du(a.add(o)));
          }).then(function () {
            return r.c[t] = e, Pu(r, t);
          }).ma(function () {
            i && r.b--;
          });
        }, i.get = function (t) {
          return ku(this).then(function (e) {
            return Du(Ou(Cu(e, !1)).get(t));
          }).then(function (t) {
            return t && t.value;
          });
        }, i.T = function (t) {
          var e = !1, n = this;
          return ku(this).then(function (i) {
            return e = !0, n.b++, Du(Ou(Cu(i, !0)).delete(t));
          }).then(function () {
            return delete n.c[t], Pu(n, t);
          }).ma(function () {
            e && n.b--;
          });
        }, i.ba = function (t) {
          0 == this.a.length && function (t) {
            Lu(t), function e() {
              t.f = setTimeout(function () {
                t.i = Ru(t).then(function (e) {
                  0 < e.length && G(t.a, function (t) {
                    t(e);
                  });
                }).then(function () {
                  e();
                }).o(function (t) {
                  'STOP_EVENT' != t.message && e();
                });
              }, 800);
            }();
          }(this), this.a.push(t);
        }, i.ha = function (t) {
          $(this.a, function (e) {
            return e == t;
          }), 0 == this.a.length && Lu(this);
        }, (i = ju.prototype).get = function (t) {
          return this.b.then(function (e) {
            return e.get(t);
          });
        }, i.set = function (t, e) {
          return this.b.then(function (n) {
            return n.set(t, e);
          });
        }, i.T = function (t) {
          return this.b.then(function (e) {
            return e.T(t);
          });
        }, i.ba = function (t) {
          this.a.push(t);
        }, i.ha = function (t) {
          $(this.a, function (e) {
            return e == t;
          });
        }, (i = Mu.prototype).get = function (t) {
          return Oe(this.a[t]);
        }, i.set = function (t, e) {
          return this.a[t] = e, Oe();
        }, i.T = function (t) {
          return delete this.a[t], Oe();
        }, i.ba = function () {
        }, i.ha = function () {
        }, (i = xu.prototype).get = function (t) {
          var e = this;
          return Oe().then(function () {
            return xi(e.a.getItem(t));
          });
        }, i.set = function (t, e) {
          var n = this;
          return Oe().then(function () {
            var i = ji(e);
            null === i ? n.T(t) : n.a.setItem(t, i);
          });
        }, i.T = function (t) {
          var e = this;
          return Oe().then(function () {
            e.a.removeItem(t);
          });
        }, i.ba = function (t) {
          h.window && hn(h.window, 'storage', t);
        }, i.ha = function (t) {
          h.window && dn(h.window, 'storage', t);
        }, (i = Uu.prototype).get = function () {
          return Oe(null);
        }, i.set = function () {
          return Oe();
        }, i.T = function () {
          return Oe();
        }, i.ba = function () {
        }, i.ha = function () {
        }, (i = Fu.prototype).get = function (t) {
          var e = this;
          return Oe().then(function () {
            return xi(e.a.getItem(t));
          });
        }, i.set = function (t, e) {
          var n = this;
          return Oe().then(function () {
            var i = ji(e);
            null === i ? n.T(t) : n.a.setItem(t, i);
          });
        }, i.T = function (t) {
          var e = this;
          return Oe().then(function () {
            e.a.removeItem(t);
          });
        }, i.ba = function () {
        }, i.ha = function () {
        };
        var qu, Ku, Gu = {
            F: xu,
            $a: Fu
          }, Wu = {
            F: xu,
            $a: Fu
          }, Ju = {
            F: gu,
            $a: Uu
          }, Xu = {
            F: xu,
            $a: Uu
          }, zu = {
            od: 'local',
            NONE: 'none',
            qd: 'session'
          };
        function Yu() {
          var t = !(Ui(Ni()) || !yi()), e = Li(), n = Ci();
          this.m = t, this.h = e, this.l = n, this.a = {}, qu || (qu = new Bu()), t = qu;
          try {
            this.g = !ci() && Ki() || !h.indexedDB ? new t.a.F() : new ju(wi() ? new Mu() : new t.a.F());
          } catch (t) {
            this.g = new Mu(), this.h = !0;
          }
          try {
            this.i = new t.a.$a();
          } catch (t) {
            this.i = new Mu();
          }
          this.u = new Mu(), this.f = T(this.Vb, this), this.b = {};
        }
        function $u() {
          return Ku || (Ku = new Yu()), Ku;
        }
        function Zu(t, e) {
          switch (e) {
          case 'session':
            return t.i;
          case 'none':
            return t.u;
          default:
            return t.g;
          }
        }
        function Qu(t, e) {
          return 'firebase:' + t.name + (e ? ':' + e : '');
        }
        function tc(t, e, n) {
          return n = Qu(e, n), 'local' == e.F && (t.b[n] = null), Zu(t, e.F).T(n);
        }
        function ec(t) {
          t.c && (clearInterval(t.c), t.c = null);
        }
        function nc(t) {
          this.a = t, this.b = $u();
        }
        (i = Yu.prototype).get = function (t, e) {
          return Zu(this, t.F).get(Qu(t, e));
        }, i.set = function (t, e, n) {
          var i = Qu(t, n), r = this, o = Zu(this, t.F);
          return o.set(i, e).then(function () {
            return o.get(i);
          }).then(function (e) {
            'local' == t.F && (r.b[i] = e);
          });
        }, i.addListener = function (t, e, n) {
          t = Qu(t, e), this.l && (this.b[t] = h.localStorage.getItem(t)), vt(this.a) && (Zu(this, 'local').ba(this.f), this.h || (ci() || !Ki()) && h.indexedDB || !this.l || function (t) {
            ec(t), t.c = setInterval(function () {
              for (var e in t.a) {
                var n = h.localStorage.getItem(e), i = t.b[e];
                n != i && (t.b[e] = n, n = new Ze({
                  type: 'storage',
                  key: e,
                  target: window,
                  oldValue: i,
                  newValue: n,
                  a: !0
                }), t.Vb(n));
              }
            }, 1000);
          }(this)), this.a[t] || (this.a[t] = []), this.a[t].push(n);
        }, i.removeListener = function (t, e, n) {
          t = Qu(t, e), this.a[t] && ($(this.a[t], function (t) {
            return t == n;
          }), 0 == this.a[t].length && delete this.a[t]), vt(this.a) && (Zu(this, 'local').ha(this.f), ec(this));
        }, i.Vb = function (t) {
          if (t && t.f) {
            var e = t.a.key;
            if (null == e)
              for (var n in this.a) {
                var i = this.b[n];
                void 0 === i && (i = null);
                var r = h.localStorage.getItem(n);
                r !== i && (this.b[n] = r, this.ib(n));
              }
            else if (0 == e.indexOf('firebase:') && this.a[e]) {
              if (void 0 !== t.a.a ? Zu(this, 'local').ha(this.f) : ec(this), this.m)
                if (n = h.localStorage.getItem(e), (i = t.a.newValue) !== n)
                  null !== i ? h.localStorage.setItem(e, i) : h.localStorage.removeItem(e);
                else if (this.b[e] === i && void 0 === t.a.a)
                  return;
              var o = this;
              n = function () {
                void 0 === t.a.a && o.b[e] === h.localStorage.getItem(e) || (o.b[e] = h.localStorage.getItem(e), o.ib(e));
              }, zt && re && 10 == re && h.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n();
            }
          } else
            G(t, T(this.ib, this));
        }, i.ib = function (t) {
          this.a[t] && G(this.a[t], function (t) {
            t();
          });
        };
        var ic, rc = {
            name: 'authEvent',
            F: 'local'
          };
        function oc() {
          this.a = $u();
        }
        function ac(t, e) {
          this.b = sc, this.f = h.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = h.Int32Array ? new Int32Array(64) : Array(64), void 0 === ic && (ic = h.Int32Array ? new Int32Array(pc) : pc), this.reset();
        }
        A(ac, function () {
          this.b = -1;
        });
        for (var sc = 64, uc = sc - 1, cc = [], hc = 0; hc < uc; hc++)
          cc[hc] = 0;
        var fc = Z(128, cc);
        function lc(t) {
          for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;)
            n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
          for (e = 16; 64 > e; e++) {
            r = 0 | n[e - 15], i = 0 | n[e - 2];
            var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0, a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
            n[e] = o + a | 0;
          }
          i = 0 | t.a[0], r = 0 | t.a[1];
          var s = 0 | t.a[2], u = 0 | t.a[3], c = 0 | t.a[4], h = 0 | t.a[5], f = 0 | t.a[6];
          for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
            var l = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
            a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & f) + (0 | ic[e]) | 0) + (0 | n[e]) | 0) | 0, o = f, f = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + l | 0;
          }
          t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + f | 0, t.a[7] = t.a[7] + o | 0;
        }
        function dc(t, e, n) {
          void 0 === n && (n = e.length);
          var i = 0, r = t.c;
          if ('string' == typeof e)
            for (; i < n;)
              t.f[r++] = e.charCodeAt(i++), r == t.b && (lc(t), r = 0);
          else {
            if (!v(e))
              throw Error('message must be string or array');
            for (; i < n;) {
              var o = e[i++];
              if (!('number' == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                throw Error('message must be a byte array');
              t.f[r++] = o, r == t.b && (lc(t), r = 0);
            }
          }
          t.c = r, t.g += n;
        }
        ac.prototype.reset = function () {
          this.g = this.c = 0, this.a = h.Int32Array ? new Int32Array(this.h) : Q(this.h);
        };
        var pc = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
        function vc() {
          ac.call(this, 8, gc);
        }
        A(vc, ac);
        var gc = [
          1779033703,
          3144134277,
          1013904242,
          2773480762,
          1359893119,
          2600822924,
          528734635,
          1541459225
        ];
        function mc(t, e, n, i, r) {
          this.u = t, this.i = e, this.l = n, this.m = i || null, this.s = r || null, this.h = e + ':' + n, this.w = new oc(), this.g = new nc(this.h), this.f = null, this.b = [], this.a = this.c = null;
        }
        function bc(t) {
          return new k('invalid-cordova-configuration', t);
        }
        function yc(t) {
          var e = new vc();
          dc(e, t), t = [];
          var n = 8 * e.g;
          56 > e.c ? dc(e, fc, 56 - e.c) : dc(e, fc, e.b - (e.c - 56));
          for (var i = 63; 56 <= i; i--)
            e.f[i] = 255 & n, n /= 256;
          for (lc(e), i = n = 0; i < e.i; i++)
            for (var r = 24; 0 <= r; r -= 8)
              t[n++] = e.a[i] >> r & 255;
          return function (t) {
            return J(t, function (t) {
              return 1 < (t = t.toString(16)).length ? t : '0' + t;
            }).join('');
          }(t);
        }
        function wc(t, e) {
          for (var n = 0; n < t.b.length; n++)
            try {
              t.b[n](e);
            } catch (t) {
            }
        }
        function Ic(t) {
          return t.f || (t.f = t.ka().then(function () {
            return new Ee(function (n) {
              t.Ca(function e(i) {
                return n(i), t.Qa(e), !1;
              }), function (t) {
                function n(n) {
                  r = !0, o && o.cancel(), Ec(t).then(function (r) {
                    var o = i;
                    if (r && n && n.url) {
                      var a = null;
                      -1 != (o = ro(n.url)).indexOf('/__/auth/callback') && (a = (a = 'object' === e(a = xi(Un(a = Fn(o), 'firebaseError') || null)) ? N(a) : null) ? new Fo(r.c, r.b, null, null, a, null, r.S()) : new Fo(r.c, r.b, o, r.f, null, null, r.S())), o = a || i;
                    }
                    wc(t, o);
                  });
                }
                var i = new Fo('unknown', null, null, null, new k('no-auth-event')), r = !1, o = kn(500).then(function () {
                    return Ec(t).then(function () {
                      r || wc(t, i);
                    });
                  }), a = h.handleOpenURL;
                h.handleOpenURL = function (t) {
                  if (0 == t.toLowerCase().indexOf(Oi('BuildInfo.packageName', h).toLowerCase() + '://') && n({ url: t }), 'function' == typeof a)
                    try {
                      a(t);
                    } catch (t) {
                      console.error(t);
                    }
                }, Ko || (Ko = new Bo()), function (t) {
                  var e = Ko;
                  e.a.push(t), e.b || (e.b = function (t) {
                    for (var n = 0; n < e.a.length; n++)
                      e.a[n](t);
                  }, 'function' == typeof (t = Oi('universalLinks.subscribe', h)) && t(null, e.b));
                }(n);
              }(t);
            });
          })), t.f;
        }
        function Ec(t) {
          var e = null;
          return function (t) {
            return t.b.get(rc, t.a).then(function (t) {
              return Ho(t);
            });
          }(t.g).then(function (n) {
            return e = n, tc((n = t.g).b, rc, n.a);
          }).then(function () {
            return e;
          });
        }
        function Tc(t) {
          this.a = t, this.b = $u();
        }
        (i = mc.prototype).ka = function () {
          return this.Ga ? this.Ga : this.Ga = (bi(void 0) ? mi().then(function () {
            return new Ee(function (t, e) {
              var n = h.document, i = setTimeout(function () {
                  e(Error('Cordova framework is not ready.'));
                }, 1000);
              n.addEventListener('deviceready', function () {
                clearTimeout(i), t();
              }, !1);
            });
          }) : Ce(Error('Cordova must run in an Android or iOS file scheme.'))).then(function () {
            if ('function' != typeof Oi('universalLinks.subscribe', h))
              throw bc('cordova-universal-links-plugin-fix is not installed');
            if (void 0 === Oi('BuildInfo.packageName', h))
              throw bc('cordova-plugin-buildinfo is not installed');
            if ('function' != typeof Oi('cordova.plugins.browsertab.openUrl', h))
              throw bc('cordova-plugin-browsertab is not installed');
            if ('function' != typeof Oi('cordova.InAppBrowser.open', h))
              throw bc('cordova-plugin-inappbrowser is not installed');
          }, function () {
            throw new k('cordova-not-ready');
          });
        }, i.Lb = function (t, e) {
          return e(new k('operation-not-supported-in-this-environment')), Oe();
        }, i.Jb = function () {
          return Ce(new k('operation-not-supported-in-this-environment'));
        }, i.Xb = function () {
          return !1;
        }, i.Ub = function () {
          return !0;
        }, i.Qb = function () {
          return !0;
        }, i.Kb = function (t, e, n, i) {
          if (this.c)
            return Ce(new k('redirect-operation-pending'));
          var r = this, o = h.document, a = null, s = null, u = null, c = null;
          return this.c = Oe().then(function () {
            return Uo(e), Ic(r);
          }).then(function () {
            return function (t, e, n, i, r) {
              var o = function () {
                  for (var t = 20, e = []; 0 < t;)
                    e.push('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(62 * Math.random()))), t--;
                  return e.join('');
                }(), a = new Fo(e, i, null, o, new k('no-auth-event'), null, r), s = Oi('BuildInfo.packageName', h);
              if ('string' != typeof s)
                throw new k('invalid-cordova-configuration');
              var u = Oi('BuildInfo.displayName', h), c = {};
              if (Ni().toLowerCase().match(/iphone|ipad|ipod/))
                c.ibi = s;
              else {
                if (!Ni().toLowerCase().match(/android/))
                  return Ce(new k('operation-not-supported-in-this-environment'));
                c.apn = s;
              }
              u && (c.appDisplayName = u), o = yc(o), c.sessionId = o;
              var f = vu(t.u, t.i, t.l, e, n, null, i, t.m, c, t.s, r);
              return t.ka().then(function () {
                var e = t.h;
                return t.w.a.set(rc, a.v(), e);
              }).then(function () {
                var e = Oi('cordova.plugins.browsertab.isAvailable', h);
                if ('function' != typeof e)
                  throw new k('invalid-cordova-configuration');
                var n = null;
                e(function (e) {
                  if (e) {
                    if ('function' != typeof (n = Oi('cordova.plugins.browsertab.openUrl', h)))
                      throw new k('invalid-cordova-configuration');
                    n(f);
                  } else {
                    if ('function' != typeof (n = Oi('cordova.InAppBrowser.open', h)))
                      throw new k('invalid-cordova-configuration');
                    e = Ni(), t.a = n(f, e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || e.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? '_blank' : '_system', 'location=yes');
                  }
                });
              });
            }(r, t, e, n, i);
          }).then(function () {
            return new Ee(function (t, e) {
              s = function () {
                var e = Oi('cordova.plugins.browsertab.close', h);
                return t(), 'function' == typeof e && e(), r.a && 'function' == typeof r.a.close && (r.a.close(), r.a = null), !1;
              }, r.Ca(s), u = function () {
                a || (a = kn(2000).then(function () {
                  e(new k('redirect-cancelled-by-user'));
                }));
              }, c = function () {
                Bi() && u();
              }, o.addEventListener('resume', u, !1), Ni().toLowerCase().match(/android/) || o.addEventListener('visibilitychange', c, !1);
            }).o(function (t) {
              return Ec(r).then(function () {
                throw t;
              });
            });
          }).ma(function () {
            u && o.removeEventListener('resume', u, !1), c && o.removeEventListener('visibilitychange', c, !1), a && a.cancel(), s && r.Qa(s), r.c = null;
          });
        }, i.Ca = function (t) {
          this.b.push(t), Ic(this).o(function (e) {
            'auth/invalid-cordova-configuration' === e.code && (e = new Fo('unknown', null, null, null, new k('no-auth-event')), t(e));
          });
        }, i.Qa = function (t) {
          $(this.b, function (e) {
            return e == t;
          });
        };
        var _c = {
          name: 'pendingRedirect',
          F: 'session'
        };
        function Sc(t) {
          return tc(t.b, _c, t.a);
        }
        function Ac(t, e, n) {
          this.i = {}, this.w = 0, this.D = t, this.u = e, this.m = n, this.h = [], this.f = !1, this.l = T(this.s, this), this.b = new Fc(), this.B = new Gc(), this.g = new Tc(this.u + ':' + this.m), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.B, this.c.linkViaPopup = this.B, this.c.reauthViaPopup = this.B, this.a = kc(this.D, this.u, this.m, O);
        }
        function kc(t, e, n, i) {
          var o = r.SDK_VERSION || null;
          return bi() ? new mc(t, e, n, o, i) : new fu(t, e, n, o, i);
        }
        function Nc(t) {
          t.f || (t.f = !0, t.a.Ca(t.l));
          var e = t.a;
          return t.a.ka().o(function (n) {
            throw t.a == e && t.reset(), n;
          });
        }
        function Oc(t) {
          t.a.Ub() && Nc(t).o(function (e) {
            var n = new Fo('unknown', null, null, null, new k('operation-not-supported-in-this-environment'));
            jc(e) && t.s(n);
          }), t.a.Qb() || Hc(t.b);
        }
        function Cc(t, e) {
          z(t.h, e) || t.h.push(e), t.f || function (t) {
            return t.b.get(_c, t.a).then(function (t) {
              return 'pending' == t;
            });
          }(t.g).then(function (e) {
            e ? Sc(t.g).then(function () {
              Nc(t).o(function (e) {
                var n = new Fo('unknown', null, null, null, new k('operation-not-supported-in-this-environment'));
                jc(e) && t.s(n);
              });
            }) : Oc(t);
          }).o(function () {
            Oc(t);
          });
        }
        function Dc(t, e) {
          $(t.h, function (t) {
            return t == e;
          });
        }
        Ac.prototype.reset = function () {
          this.f = !1, this.a.Qa(this.l), this.a = kc(this.D, this.u, this.m), this.i = {};
        }, Ac.prototype.s = function (t) {
          if (!t)
            throw new k('invalid-auth-event');
          if (600000 <= S() - this.w && (this.i = {}, this.w = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
            return !1;
          for (var e = !1, n = 0; n < this.h.length; n++) {
            var i = this.h[n];
            if (i.Cb(t.c, t.b)) {
              (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.w = S())), e = !0;
              break;
            }
          }
          return Hc(this.b), e;
        };
        var Pc = new Hi(2000, 10000), Rc = new Hi(30000, 60000);
        function Lc(t, e, n, i, r, o, a) {
          return t.a.Jb(e, n, i, function () {
            t.f || (t.f = !0, t.a.Ca(t.l));
          }, function () {
            t.reset();
          }, r, o, a);
        }
        function jc(t) {
          return !(!t || 'auth/cordova-not-ready' != t.code);
        }
        function Mc(t, e, n, i, r) {
          var o;
          return function (t) {
            return t.b.set(_c, 'pending', t.a);
          }(t.g).then(function () {
            return t.a.Kb(e, n, i, r).o(function (e) {
              if (jc(e))
                throw new k('operation-not-supported-in-this-environment');
              return o = e, Sc(t.g).then(function () {
                throw o;
              });
            }).then(function () {
              return t.a.Xb() ? new Ee(function () {
              }) : Sc(t.g).then(function () {
                return t.pa();
              }).then(function () {
              }).o(function () {
              });
            });
          });
        }
        function xc(t, e, n, i, r) {
          return t.a.Lb(i, function (t) {
            e.la(n, null, t, r);
          }, Pc.get());
        }
        Ac.prototype.pa = function () {
          return this.b.pa();
        };
        var Vc = {};
        function Uc(t, e, n) {
          var i = e + ':' + n;
          return Vc[i] || (Vc[i] = new Ac(t, e, n)), Vc[i];
        }
        function Fc() {
          this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1;
        }
        function Hc(t) {
          t.g || (t.g = !0, Kc(t, !1, null, null));
        }
        function Bc(t) {
          t.g && !t.i && Kc(t, !1, null, null);
        }
        function qc(t, e) {
          if (t.b = function () {
              return Oe(e);
            }, t.f.length)
            for (var n = 0; n < t.f.length; n++)
              t.f[n](e);
        }
        function Kc(t, e, n, i) {
          e ? i ? function (t, e) {
            if (t.b = function () {
                return Ce(e);
              }, t.c.length)
              for (var n = 0; n < t.c.length; n++)
                t.c[n](e);
          }(t, i) : qc(t, n) : qc(t, { user: null }), t.f = [], t.c = [];
        }
        function Gc() {
        }
        function Wc() {
          this.Bb = !1, Object.defineProperty(this, 'appVerificationDisabled', {
            get: function () {
              return this.Bb;
            },
            set: function (t) {
              this.Bb = t;
            },
            enumerable: !1
          });
        }
        function Jc(t, e) {
          this.a = e, zi(this, 'verificationId', t);
        }
        function Xc(t, e, n, i) {
          return new Mo(t).cb(e, n).then(function (t) {
            return new Jc(t, i);
          });
        }
        function zc(t) {
          var e = Kr(t);
          if (!(e && e.exp && e.auth_time && e.iat))
            throw new k('internal-error', 'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.');
          Yi(this, {
            token: t,
            expirationTime: qi(1000 * e.exp),
            authTime: qi(1000 * e.auth_time),
            issuedAtTime: qi(1000 * e.iat),
            signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
            signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
            claims: e
          });
        }
        function Yc(t, e, n) {
          var i = e && e[Zc];
          if (!i)
            throw new k('argument-error', 'Internal assert: Invalid MultiFactorResolver');
          this.a = t, this.f = gt(e), this.g = n, this.c = new oo(null, i), this.b = [];
          var r = this;
          G(e[$c] || [], function (t) {
            (t = tr(t)) && r.b.push(t);
          }), zi(this, 'auth', this.a), zi(this, 'session', this.c), zi(this, 'hints', this.b);
        }
        Fc.prototype.reset = function () {
          this.b = null, this.a && (this.a.cancel(), this.a = null);
        }, Fc.prototype.h = function (t, e) {
          if (t) {
            this.reset(), this.g = !0;
            var n = t.c, i = t.b, r = t.a && 'auth/web-storage-unsupported' == t.a.code, o = t.a && 'auth/operation-not-supported-in-this-environment' == t.a.code;
            this.i = !(!r && !o), 'unknown' != n || r || o ? t.a ? (Kc(this, !0, null, t.a), Oe()) : e.Da(n, i) ? function (t, e, n) {
              n = n.Da(e.c, e.b);
              var i = e.g, r = e.f, o = e.i, a = e.S(), s = !!e.c.match(/Redirect$/);
              n(i, r, a, o).then(function (e) {
                Kc(t, s, e, null);
              }).o(function (e) {
                Kc(t, s, null, e);
              });
            }(this, t, e) : Ce(new k('invalid-auth-event')) : (Kc(this, !1, null, null), Oe());
          } else
            Ce(new k('invalid-auth-event'));
        }, Fc.prototype.pa = function () {
          var t = this;
          return new Ee(function (e, n) {
            t.b ? t.b().then(e, n) : (t.f.push(e), t.c.push(n), function (t) {
              var e = new k('timeout');
              t.a && t.a.cancel(), t.a = kn(Rc.get()).then(function () {
                t.b || (t.g = !0, Kc(t, !0, null, e));
              });
            }(t));
          });
        }, Gc.prototype.h = function (t, e) {
          if (t) {
            var n = t.c, i = t.b;
            t.a ? (e.la(t.c, null, t.a, t.b), Oe()) : e.Da(n, i) ? function (t, e) {
              var n = t.b, i = t.c;
              e.Da(i, n)(t.g, t.f, t.S(), t.i).then(function (t) {
                e.la(i, t, null, n);
              }).o(function (t) {
                e.la(i, null, t, n);
              });
            }(t, e) : Ce(new k('invalid-auth-event'));
          } else
            Ce(new k('invalid-auth-event'));
        }, Jc.prototype.confirm = function (t) {
          return t = xo(this.verificationId, t), this.a(t);
        };
        var $c = 'mfaInfo', Zc = 'mfaPendingCredential';
        function Qc(t, e, n, i) {
          k.call(this, 'multi-factor-auth-required', i, e), this.b = new Yc(t, e, n), zi(this, 'resolver', this.b);
        }
        function th(t, e, n) {
          if (t && m(t.serverResponse) && 'auth/multi-factor-auth-required' === t.code)
            try {
              return new Qc(e, t.serverResponse, n, t.message);
            } catch (t) {
            }
          return null;
        }
        function eh() {
        }
        function nh(t) {
          zi(this, 'factorId', t.ea), this.a = t;
        }
        function ih(t) {
          if (nh.call(this, t), this.a.ea != Mo.PROVIDER_ID)
            throw new k('argument-error', 'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential');
        }
        function rh(t, e) {
          for (var n in ($e.call(this, t), e))
            this[n] = e[n];
        }
        function oh(t, e) {
          this.a = t, this.b = [], this.c = T(this.wc, this), hn(this.a, 'userReloaded', this.c);
          var n = [];
          e && e.multiFactor && e.multiFactor.enrolledFactors && G(e.multiFactor.enrolledFactors, function (t) {
            var e = null, i = {};
            if (t) {
              t.uid && (i[ir] = t.uid), t.displayName && (i[er] = t.displayName), t.enrollmentTime && (i[nr] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (i[rr] = t.phoneNumber);
              try {
                e = new or(i);
              } catch (t) {
              }
              t = e;
            } else
              t = null;
            t && n.push(t);
          }), ah(this, n);
        }
        function ah(t, e) {
          t.b = e, zi(t, 'enrolledFactors', e);
        }
        function sh(t, e, n) {
          if (this.h = t, this.i = e, this.g = n, this.c = 30000, this.f = 960000, this.b = null, this.a = this.c, this.f < this.c)
            throw Error('Proactive refresh lower bound greater than upper bound!');
        }
        function uh(t) {
          this.c = t, this.b = this.a = null;
        }
        function ch(t) {
          return t.b && 1000 * t.b.c || 0;
        }
        function hh(t, e) {
          var n = e.refreshToken;
          t.b = qr(e[$a] || ''), t.a = n;
        }
        function fh(t, e) {
          return function (t, e) {
            return new Ee(function (n, i) {
              'refresh_token' == e.grant_type && e.refresh_token || 'authorization_code' == e.grant_type && e.code ? rs(t, t.u + '?key=' + encodeURIComponent(t.c), function (t) {
                t ? t.error ? i(nu(t)) : t.access_token && t.refresh_token ? n(t) : i(new k('internal-error')) : i(new k('network-request-failed'));
              }, 'POST', Zn(e).toString(), t.g, t.m.get()) : i(new k('internal-error'));
            });
          }(t.c, e).then(function (e) {
            return t.b = qr(e.access_token), t.a = e.refresh_token, {
              accessToken: t.b.toString(),
              refreshToken: t.a
            };
          }).o(function (e) {
            throw 'auth/user-token-expired' == e.code && (t.a = null), e;
          });
        }
        function lh(t, e) {
          this.a = t || null, this.b = e || null, Yi(this, {
            lastSignInTime: qi(e || null),
            creationTime: qi(t || null)
          });
        }
        function dh(t, e, n, i, r, o) {
          Yi(this, {
            uid: t,
            displayName: i || null,
            photoURL: r || null,
            email: n || null,
            phoneNumber: o || null,
            providerId: e
          });
        }
        function ph(t, e, n) {
          this.N = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null, t = r.SDK_VERSION ? ki(r.SDK_VERSION) : null, this.a = new za(this.l, R(O), t), this.b = new uh(this.a), Ih(this, e[$a]), hh(this.b, e), zi(this, 'refreshToken', this.b.a), _h(this, n || {}), En.call(this), this.P = !1, this.s && Di() && (this.i = Uc(this.s, this.l, this.m)), this.R = [], this.h = null, this.B = function (t) {
            return new sh(function () {
              return t.I(!0);
            }, function (t) {
              return !(!t || 'auth/network-request-failed' != t.code);
            }, function () {
              var e = ch(t.b) - S() - 300000;
              return 0 < e ? e : 0;
            });
          }(this), this.Z = T(this.Ma, this);
          var i = this;
          this.oa = null, this.za = function (t) {
            i.va(t.g);
          }, this.aa = null, this.W = [], this.ya = function (t) {
            gh(i, t.c);
          }, this.$ = null, this.O = new oh(this, n), zi(this, 'multiFactor', this.O);
        }
        function vh(t, e) {
          t.aa && dn(t.aa, 'languageCodeChanged', t.za), (t.aa = e) && hn(e, 'languageCodeChanged', t.za);
        }
        function gh(t, e) {
          t.W = e, is(t.a, r.SDK_VERSION ? ki(r.SDK_VERSION, t.W) : null);
        }
        function mh(t, e) {
          t.$ && dn(t.$, 'frameworkChanged', t.ya), (t.$ = e) && hn(e, 'frameworkChanged', t.ya);
        }
        function bh(t) {
          try {
            return r.app(t.m).auth();
          } catch (e) {
            throw new k('internal-error', 'No firebase.auth.Auth instance is available for the Firebase App \'' + t.m + '\'!');
          }
        }
        function yh(t) {
          t.D || t.B.b || (t.B.start(), dn(t, 'tokenChanged', t.Z), hn(t, 'tokenChanged', t.Z));
        }
        function wh(t) {
          dn(t, 'tokenChanged', t.Z), t.B.stop();
        }
        function Ih(t, e) {
          t.xa = e, zi(t, '_lat', e);
        }
        function Eh(t) {
          for (var e = [], n = 0; n < t.R.length; n++)
            e.push(t.R[n](t));
          return Pe(e).then(function () {
            return t;
          });
        }
        function Th(t) {
          t.i && !t.P && (t.P = !0, Cc(t.i, t));
        }
        function _h(t, e) {
          Yi(t, {
            uid: e.uid,
            displayName: e.displayName || null,
            photoURL: e.photoURL || null,
            email: e.email || null,
            emailVerified: e.emailVerified || !1,
            phoneNumber: e.phoneNumber || null,
            isAnonymous: e.isAnonymous || !1,
            tenantId: e.tenantId || null,
            metadata: new lh(e.createdAt, e.lastLoginAt),
            providerData: []
          }), t.a.b = t.tenantId;
        }
        function Sh() {
        }
        function Ah(t) {
          return Oe().then(function () {
            if (t.D)
              throw new k('app-deleted');
          });
        }
        function kh(t) {
          return J(t.providerData, function (t) {
            return t.providerId;
          });
        }
        function Nh(t, e) {
          e && (Oh(t, e.providerId), t.providerData.push(e));
        }
        function Oh(t, e) {
          $(t.providerData, function (t) {
            return t.providerId == e;
          });
        }
        function Ch(t, e, n) {
          ('uid' != e || n) && t.hasOwnProperty(e) && zi(t, e, n);
        }
        function Dh(t, e) {
          t != e && (Yi(t, {
            uid: e.uid,
            displayName: e.displayName,
            photoURL: e.photoURL,
            email: e.email,
            emailVerified: e.emailVerified,
            phoneNumber: e.phoneNumber,
            isAnonymous: e.isAnonymous,
            tenantId: e.tenantId,
            providerData: []
          }), e.metadata ? zi(t, 'metadata', function (t) {
            return new lh(t.a, t.b);
          }(e.metadata)) : zi(t, 'metadata', new lh()), G(e.providerData, function (e) {
            Nh(t, e);
          }), function (t, e) {
            t.b = e.b, t.a = e.a;
          }(t.b, e.b), zi(t, 'refreshToken', t.b.a), ah(t.O, e.O.b));
        }
        function Ph(t) {
          return t.I().then(function (e) {
            var n = t.isAnonymous;
            return function (t, e) {
              return tu(t.a, Ds, { idToken: e }).then(T(t.Ic, t));
            }(t, e).then(function () {
              return n || Ch(t, 'isAnonymous', !1), e;
            });
          });
        }
        function Rh(t, e) {
          e[$a] && t.xa != e[$a] && (hh(t.b, e), t.dispatchEvent(new rh('tokenChanged')), Ih(t, e[$a]), Ch(t, 'refreshToken', t.b.a));
        }
        function Lh(t, e) {
          return Ph(t).then(function () {
            if (z(kh(t), e))
              return Eh(t).then(function () {
                throw new k('provider-already-linked');
              });
          });
        }
        function jh(t, e, n) {
          return $i({
            user: t,
            credential: Vo(e),
            additionalUserInfo: e = zr(e),
            operationType: n
          });
        }
        function Mh(t, e) {
          return Rh(t, e), t.reload().then(function () {
            return t;
          });
        }
        function xh(t, e, n, i, o) {
          if (!Di())
            return Ce(new k('operation-not-supported-in-this-environment'));
          if (t.h && !o)
            return Ce(t.h);
          var a = Xr(n.providerId), s = Vi(t.uid + ':::'), u = null;
          (!Li() || yi()) && t.s && n.isOAuthProvider && (u = vu(t.s, t.l, t.m, e, n, null, s, r.SDK_VERSION || null, null, null, t.tenantId));
          var c = pi(u, a && a.ta, a && a.sa);
          return i = i().then(function () {
            if (Uh(t), !o)
              return t.I().then(function () {
              });
          }).then(function () {
            return Lc(t.i, c, e, n, s, !!u, t.tenantId);
          }).then(function () {
            return new Ee(function (n, i) {
              t.la(e, null, new k('cancelled-popup-request'), t.g || null), t.f = n, t.w = i, t.g = s, t.c = xc(t.i, t, e, c, s);
            });
          }).then(function (t) {
            return c && di(c), t ? $i(t) : null;
          }).o(function (t) {
            throw c && di(c), t;
          }), Fh(t, i, o);
        }
        function Vh(t, e, n, i, r) {
          if (!Di())
            return Ce(new k('operation-not-supported-in-this-environment'));
          if (t.h && !r)
            return Ce(t.h);
          var o = null, a = Vi(t.uid + ':::');
          return i = i().then(function () {
            if (Uh(t), !r)
              return t.I().then(function () {
              });
          }).then(function () {
            return t.fa = a, Eh(t);
          }).then(function (e) {
            return t.ga && (e = (e = t.ga).b.set(qh, t.v(), e.a)), e;
          }).then(function () {
            return Mc(t.i, e, n, a, t.tenantId);
          }).o(function (e) {
            if (o = e, t.ga)
              return Kh(t.ga);
            throw o;
          }).then(function () {
            if (o)
              throw o;
          }), Fh(t, i, r);
        }
        function Uh(t) {
          if (!t.i || !t.P) {
            if (t.i && !t.P)
              throw new k('internal-error');
            throw new k('auth-domain-config-required');
          }
        }
        function Fh(t, e, n) {
          var i = function (t, e, n) {
            return t.h && !n ? (e.cancel(), Ce(t.h)) : e.o(function (e) {
              throw !e || 'auth/user-disabled' != e.code && 'auth/user-token-expired' != e.code || (t.h || t.dispatchEvent(new rh('userInvalidated')), t.h = e), e;
            });
          }(t, e, n);
          return t.N.push(i), i.ma(function () {
            Y(t.N, i);
          }), i.o(function (e) {
            var n = null;
            throw e && 'auth/multi-factor-auth-required' === e.code && (n = th(e.v(), bh(t), T(t.hc, t))), n || e;
          });
        }
        function Hh(t) {
          if (!t.apiKey)
            return null;
          var e = {
              apiKey: t.apiKey,
              authDomain: t.authDomain,
              appName: t.appName
            }, n = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken)
            return null;
          n[$a] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null;
          var i = new ph(e, n, t);
          return t.providerData && G(t.providerData, function (t) {
            t && Nh(i, $i(t));
          }), t.redirectEventId && (i.fa = t.redirectEventId), i;
        }
        function Bh(t) {
          this.a = t, this.b = $u();
        }
        Yc.prototype.Pc = function (t) {
          var e = this;
          return t.ob(this.a.b, this.c).then(function (t) {
            var n = gt(e.f);
            return delete n[$c], delete n[Zc], bt(n, t), e.g(n);
          });
        }, A(Qc, k), eh.prototype.ob = function (t, e, n) {
          return e.type == ao ? function (t, e, n, i) {
            return n.Fa().then(function (n) {
              return n = { idToken: n }, void 0 !== i && (n.displayName = i), bt(n, { phoneVerificationInfo: jo(t.a) }), tu(e, Os, n);
            });
          }(this, t, e, n) : function (t, e, n) {
            return n.Fa().then(function (n) {
              return bt(n = { mfaPendingCredential: n }, { phoneVerificationInfo: jo(t.a) }), tu(e, Cs, n);
            });
          }(this, t, e);
        }, A(nh, eh), A(ih, nh), A(rh, $e), (i = oh.prototype).wc = function (t) {
          ah(this, function (t) {
            var e = [];
            return G(t.mfaInfo || [], function (t) {
              (t = tr(t)) && e.push(t);
            }), e;
          }(t.ed));
        }, i.Ob = function () {
          return this.a.I().then(function (t) {
            return new oo(t, null);
          });
        }, i.dc = function (t, e) {
          var n = this, i = this.a.a;
          return this.Ob().then(function (n) {
            return t.ob(i, n, e);
          }).then(function (t) {
            return Rh(n.a, t), n.a.reload();
          });
        }, i.$c = function (t) {
          var e = this, n = 'string' == typeof t ? t : t.uid, i = this.a.a;
          return this.a.I().then(function (t) {
            return tu(i, Qs, {
              idToken: t,
              mfaEnrollmentId: n
            });
          }).then(function (t) {
            var i = W(e.b, function (t) {
              return t.uid != n;
            });
            return ah(e, i), Rh(e.a, t), e.a.reload().o(function (t) {
              if ('auth/user-token-expired' != t.code)
                throw t;
            });
          });
        }, i.v = function () {
          return {
            multiFactor: {
              enrolledFactors: J(this.b, function (t) {
                return t.v();
              })
            }
          };
        }, sh.prototype.start = function () {
          this.a = this.c, function t(e, n) {
            e.stop(), e.b = kn(function (t, e) {
              return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e);
            }(e, n)).then(function () {
              return function () {
                var t = h.document, e = null;
                return Bi() || !t ? Oe() : new Ee(function (n) {
                  e = function () {
                    Bi() && (t.removeEventListener('visibilitychange', e, !1), n());
                  }, t.addEventListener('visibilitychange', e, !1);
                }).o(function (n) {
                  throw t.removeEventListener('visibilitychange', e, !1), n;
                });
              }();
            }).then(function () {
              return e.h();
            }).then(function () {
              t(e, !0);
            }).o(function (n) {
              e.i(n) && t(e, !1);
            });
          }(this, !0);
        }, sh.prototype.stop = function () {
          this.b && (this.b.cancel(), this.b = null);
        }, uh.prototype.v = function () {
          return {
            apiKey: this.c.c,
            refreshToken: this.a,
            accessToken: this.b && this.b.toString(),
            expirationTime: ch(this)
          };
        }, uh.prototype.getToken = function (t) {
          return t = !!t, this.b && !this.a ? Ce(new k('user-token-expired')) : t || !this.b || S() > ch(this) - 30000 ? this.a ? fh(this, {
            grant_type: 'refresh_token',
            refresh_token: this.a
          }) : Oe(null) : Oe({
            accessToken: this.b.toString(),
            refreshToken: this.a
          });
        }, lh.prototype.v = function () {
          return {
            lastLoginAt: this.b,
            createdAt: this.a
          };
        }, A(ph, En), ph.prototype.va = function (t) {
          this.oa = t, ns(this.a, t);
        }, ph.prototype.ja = function () {
          return this.oa;
        }, ph.prototype.Ea = function () {
          return Q(this.W);
        }, ph.prototype.Ma = function () {
          this.B.b && (this.B.stop(), this.B.start());
        }, zi(ph.prototype, 'providerId', 'firebase'), (i = ph.prototype).reload = function () {
          var t = this;
          return Fh(this, Ah(this).then(function () {
            return Ph(t).then(function () {
              return Eh(t);
            }).then(Sh);
          }));
        }, i.mc = function (t) {
          return this.I(t).then(function (t) {
            return new zc(t);
          });
        }, i.I = function (t) {
          var e = this;
          return Fh(this, Ah(this).then(function () {
            return e.b.getToken(t);
          }).then(function (t) {
            if (!t)
              throw new k('internal-error');
            return t.accessToken != e.xa && (Ih(e, t.accessToken), e.dispatchEvent(new rh('tokenChanged'))), Ch(e, 'refreshToken', t.refreshToken), t.accessToken;
          }));
        }, i.Ic = function (t) {
          if (!(t = t.users) || !t.length)
            throw new k('internal-error');
          _h(this, {
            uid: (t = t[0]).localId,
            displayName: t.displayName,
            photoURL: t.photoUrl,
            email: t.email,
            emailVerified: !!t.emailVerified,
            phoneNumber: t.phoneNumber,
            lastLoginAt: t.lastLoginAt,
            createdAt: t.createdAt,
            tenantId: t.tenantId
          });
          for (var e = function (t) {
                return (t = t.providerUserInfo) && t.length ? J(t, function (t) {
                  return new dh(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber);
                }) : [];
              }(t), n = 0; n < e.length; n++)
            Nh(this, e[n]);
          Ch(this, 'isAnonymous', !(this.email && t.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new rh('userReloaded', { ed: t }));
        }, i.Jc = function (t) {
          return Ji('firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'), this.pb(t);
        }, i.pb = function (t) {
          var e = this, n = null;
          return Fh(this, t.c(this.a, this.uid).then(function (t) {
            return Rh(e, t), n = jh(e, t, 'reauthenticate'), e.h = null, e.reload();
          }).then(function () {
            return n;
          }), !0);
        }, i.Ac = function (t) {
          return Ji('firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'), this.mb(t);
        }, i.mb = function (t) {
          var e = this, n = null;
          return Fh(this, Lh(this, t.providerId).then(function () {
            return e.I();
          }).then(function (n) {
            return t.b(e.a, n);
          }).then(function (t) {
            return n = jh(e, t, 'link'), Mh(e, t);
          }).then(function () {
            return n;
          }));
        }, i.Bc = function (t, e) {
          var n = this;
          return Fh(this, Lh(this, 'phone').then(function () {
            return Xc(bh(n), t, e, T(n.mb, n));
          }));
        }, i.Kc = function (t, e) {
          var n = this;
          return Fh(this, Oe().then(function () {
            return Xc(bh(n), t, e, T(n.pb, n));
          }), !0);
        }, i.xb = function (t) {
          var e = this;
          return Fh(this, this.I().then(function (n) {
            return e.a.xb(n, t);
          }).then(function (t) {
            return Rh(e, t), e.reload();
          }));
        }, i.cd = function (t) {
          var e = this;
          return Fh(this, this.I().then(function (n) {
            return t.b(e.a, n);
          }).then(function (t) {
            return Rh(e, t), e.reload();
          }));
        }, i.yb = function (t) {
          var e = this;
          return Fh(this, this.I().then(function (n) {
            return e.a.yb(n, t);
          }).then(function (t) {
            return Rh(e, t), e.reload();
          }));
        }, i.zb = function (t) {
          if (void 0 === t.displayName && void 0 === t.photoURL)
            return Ah(this);
          var e = this;
          return Fh(this, this.I().then(function (n) {
            return e.a.zb(n, {
              displayName: t.displayName,
              photoUrl: t.photoURL
            });
          }).then(function (t) {
            return Rh(e, t), Ch(e, 'displayName', t.displayName || null), Ch(e, 'photoURL', t.photoUrl || null), G(e.providerData, function (t) {
              'password' === t.providerId && (zi(t, 'displayName', e.displayName), zi(t, 'photoURL', e.photoURL));
            }), Eh(e);
          }).then(Sh));
        }, i.ad = function (t) {
          var e = this;
          return Fh(this, Ph(this).then(function (n) {
            return z(kh(e), t) ? function (t, e, n) {
              return tu(t, As, {
                idToken: e,
                deleteProvider: n
              });
            }(e.a, n, [t]).then(function (t) {
              var n = {};
              return G(t.providerUserInfo || [], function (t) {
                n[t.providerId] = !0;
              }), G(kh(e), function (t) {
                n[t] || Oh(e, t);
              }), n[Mo.PROVIDER_ID] || zi(e, 'phoneNumber', null), Eh(e);
            }) : Eh(e).then(function () {
              throw new k('no-such-provider');
            });
          }));
        }, i.delete = function () {
          var t = this;
          return Fh(this, this.I().then(function (e) {
            return tu(t.a, Ss, { idToken: e });
          }).then(function () {
            t.dispatchEvent(new rh('userDeleted'));
          })).then(function () {
            for (var e = 0; e < t.N.length; e++)
              t.N[e].cancel('app-deleted');
            vh(t, null), mh(t, null), t.N = [], t.D = !0, wh(t), zi(t, 'refreshToken', null), t.i && Dc(t.i, t);
          });
        }, i.Cb = function (t, e) {
          return !!('linkViaPopup' == t && (this.g || null) == e && this.f || 'reauthViaPopup' == t && (this.g || null) == e && this.f || 'linkViaRedirect' == t && (this.fa || null) == e || 'reauthViaRedirect' == t && (this.fa || null) == e);
        }, i.la = function (t, e, n, i) {
          'linkViaPopup' != t && 'reauthViaPopup' != t || i != (this.g || null) || (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
        }, i.Da = function (t, e) {
          return 'linkViaPopup' == t && e == (this.g || null) ? T(this.Hb, this) : 'reauthViaPopup' == t && e == (this.g || null) ? T(this.Ib, this) : 'linkViaRedirect' == t && (this.fa || null) == e ? T(this.Hb, this) : 'reauthViaRedirect' == t && (this.fa || null) == e ? T(this.Ib, this) : null;
        }, i.Cc = function (t) {
          var e = this;
          return xh(this, 'linkViaPopup', t, function () {
            return Lh(e, t.providerId).then(function () {
              return Eh(e);
            });
          }, !1);
        }, i.Lc = function (t) {
          return xh(this, 'reauthViaPopup', t, function () {
            return Oe();
          }, !0);
        }, i.Dc = function (t) {
          var e = this;
          return Vh(this, 'linkViaRedirect', t, function () {
            return Lh(e, t.providerId);
          }, !1);
        }, i.Mc = function (t) {
          return Vh(this, 'reauthViaRedirect', t, function () {
            return Oe();
          }, !0);
        }, i.Hb = function (t, e, n, i) {
          var r = this;
          this.c && (this.c.cancel(), this.c = null);
          var o = null;
          return Fh(this, this.I().then(function (n) {
            return bs(r.a, {
              requestUri: t,
              postBody: i,
              sessionId: e,
              idToken: n
            });
          }).then(function (t) {
            return o = jh(r, t, 'link'), Mh(r, t);
          }).then(function () {
            return o;
          }));
        }, i.Ib = function (t, e, n, i) {
          var r = this;
          this.c && (this.c.cancel(), this.c = null);
          var o = null;
          return Fh(this, Oe().then(function () {
            return co(ys(r.a, {
              requestUri: t,
              sessionId: e,
              postBody: i,
              tenantId: n
            }), r.uid);
          }).then(function (t) {
            return o = jh(r, t, 'reauthenticate'), Rh(r, t), r.h = null, r.reload();
          }).then(function () {
            return o;
          }), !0);
        }, i.qb = function (t) {
          var e = this, n = null;
          return Fh(this, this.I().then(function (e) {
            return n = e, void 0 === t || vt(t) ? {} : Ur(new Or(t));
          }).then(function (t) {
            return e.a.qb(n, t);
          }).then(function (t) {
            if (e.email != t)
              return e.reload();
          }).then(function () {
          }));
        }, i.Ab = function (t, e) {
          var n = this, i = null;
          return Fh(this, this.I().then(function (t) {
            return i = t, void 0 === e || vt(e) ? {} : Ur(new Or(e));
          }).then(function (e) {
            return n.a.Ab(i, t, e);
          }).then(function (t) {
            if (n.email != t)
              return n.reload();
          }).then(function () {
          }));
        }, i.hc = function (t) {
          var e = null, n = this;
          return Fh(this, t = co(Oe(t), n.uid).then(function (t) {
            return e = jh(n, t, 'reauthenticate'), Rh(n, t), n.h = null, n.reload();
          }).then(function () {
            return e;
          }), !0);
        }, i.toJSON = function () {
          return this.v();
        }, i.v = function () {
          var t = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            tenantId: this.tenantId,
            providerData: [],
            apiKey: this.l,
            appName: this.m,
            authDomain: this.s,
            stsTokenManager: this.b.v(),
            redirectEventId: this.fa || null
          };
          return this.metadata && bt(t, this.metadata.v()), G(this.providerData, function (e) {
            t.providerData.push(function (t) {
              var e, n = {};
              for (e in t)
                t.hasOwnProperty(e) && (n[e] = t[e]);
              return n;
            }(e));
          }), bt(t, this.O.v()), t;
        };
        var qh = {
          name: 'redirectUser',
          F: 'session'
        };
        function Kh(t) {
          return tc(t.b, qh, t.a);
        }
        function Gh(t) {
          this.a = t, this.b = $u(), this.c = null, this.f = function (t) {
            var e = Xh('local'), n = Xh('session'), i = Xh('none');
            return function (t, e, n) {
              var i = Qu(e, n), r = Zu(t, e.F);
              return t.get(e, n).then(function (o) {
                var a = null;
                try {
                  a = xi(h.localStorage.getItem(i));
                } catch (t) {
                }
                if (a && !o)
                  return h.localStorage.removeItem(i), t.set(e, a, n);
                a && o && 'localStorage' != r.type && h.localStorage.removeItem(i);
              });
            }(t.b, e, t.a).then(function () {
              return t.b.get(n, t.a);
            }).then(function (r) {
              return r ? n : t.b.get(i, t.a).then(function (n) {
                return n ? i : t.b.get(e, t.a).then(function (n) {
                  return n ? e : t.b.get(Jh, t.a).then(function (t) {
                    return t ? Xh(t) : e;
                  });
                });
              });
            }).then(function (e) {
              return t.c = e, Wh(t, e.F);
            }).o(function () {
              t.c || (t.c = e);
            });
          }(this), this.b.addListener(Xh('local'), this.a, T(this.g, this));
        }
        function Wh(t, e) {
          var n, i = [];
          for (n in zu)
            zu[n] !== e && i.push(tc(t.b, Xh(zu[n]), t.a));
          return i.push(tc(t.b, Jh, t.a)), function (t) {
            return new Ee(function (e, n) {
              var i = t.length, r = [];
              if (i)
                for (var o = function (t, n) {
                      i--, r[t] = n, 0 == i && e(r);
                    }, a = function (t) {
                      n(t);
                    }, s = 0; s < t.length; s++)
                  De(t[s], _(o, s), a);
              else
                e(r);
            });
          }(i);
        }
        Gh.prototype.g = function () {
          var t = this, e = Xh('local');
          Zh(this, function () {
            return Oe().then(function () {
              return t.c && 'local' != t.c.F ? t.b.get(e, t.a) : null;
            }).then(function (n) {
              if (n)
                return Wh(t, 'local').then(function () {
                  t.c = e;
                });
            });
          });
        };
        var Jh = {
          name: 'persistence',
          F: 'session'
        };
        function Xh(t) {
          return {
            name: 'authUser',
            F: t
          };
        }
        function zh(t, e) {
          return Zh(t, function () {
            return t.b.set(t.c, e.v(), t.a);
          });
        }
        function Yh(t) {
          return Zh(t, function () {
            return tc(t.b, t.c, t.a);
          });
        }
        function $h(t, e) {
          return Zh(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return t && e && (t.authDomain = e), Hh(t || {});
            });
          });
        }
        function Zh(t, e) {
          return t.f = t.f.then(e, e), t.f;
        }
        function Qh(t) {
          if (this.l = !1, zi(this, 'settings', new Wc()), zi(this, 'app', t), !uf(this).options || !uf(this).options.apiKey)
            throw new k('invalid-api-key');
          t = r.SDK_VERSION ? ki(r.SDK_VERSION) : null, this.b = new za(uf(this).options && uf(this).options.apiKey, R(O), t), this.P = [], this.m = [], this.O = [], this.$b = r.INTERNAL.createSubscribe(T(this.xc, this)), this.W = void 0, this.ac = r.INTERNAL.createSubscribe(T(this.yc, this)), af(this, null), this.i = new Gh(uf(this).options.apiKey + ':' + uf(this).name), this.B = new Bh(uf(this).options.apiKey + ':' + uf(this).name), this.Z = lf(this, function (t) {
            var e = uf(t).options.authDomain, n = function (t) {
                var e = function (t, e) {
                  return t.b.get(qh, t.a).then(function (t) {
                    return t && e && (t.authDomain = e), Hh(t || {});
                  });
                }(t.B, uf(t).options.authDomain).then(function (e) {
                  return (t.D = e) && (e.ga = t.B), Kh(t.B);
                });
                return lf(t, e);
              }(t).then(function () {
                return $h(t.i, e);
              }).then(function (e) {
                return e ? (e.ga = t.B, t.D && (t.D.fa || null) == (e.fa || null) ? e : e.reload().then(function () {
                  return zh(t.i, e).then(function () {
                    return e;
                  });
                }).o(function (n) {
                  return 'auth/network-request-failed' == n.code ? e : Yh(t.i);
                })) : null;
              }).then(function (e) {
                af(t, e || null);
              });
            return lf(t, n);
          }(this)), this.h = lf(this, function (t) {
            return t.Z.then(function () {
              return rf(t);
            }).o(function () {
            }).then(function () {
              if (!t.l)
                return t.oa();
            }).o(function () {
            }).then(function () {
              if (!t.l) {
                t.aa = !0;
                var e = t.i;
                e.b.addListener(Xh('local'), e.a, t.oa);
              }
            });
          }(this)), this.aa = !1, this.oa = T(this.Xc, this), this.Ma = T(this.ca, this), this.xa = T(this.jc, this), this.ya = T(this.uc, this), this.za = T(this.vc, this), this.a = null, function (t) {
            var e = uf(t).options.authDomain, n = uf(t).options.apiKey;
            e && Di() && (t.Zb = t.Z.then(function () {
              if (!t.l) {
                if (t.a = Uc(e, n, uf(t).name), Cc(t.a, t), cf(t) && Th(cf(t)), t.D) {
                  Th(t.D);
                  var i = t.D;
                  i.va(t.ja()), vh(i, t), gh(i = t.D, t.N), mh(i, t), t.D = null;
                }
                return t.a;
              }
            }));
          }(this), this.INTERNAL = {}, this.INTERNAL.delete = T(this.delete, this), this.INTERNAL.logFramework = T(this.Ec, this), this.s = 0, En.call(this), function (t) {
            Object.defineProperty(t, 'lc', {
              get: function () {
                return this.ja();
              },
              set: function (t) {
                this.va(t);
              },
              enumerable: !1
            }), t.$ = null, Object.defineProperty(t, 'ti', {
              get: function () {
                return this.S();
              },
              set: function (t) {
                this.ub(t);
              },
              enumerable: !1
            }), t.R = null;
          }(this), this.N = [];
        }
        function tf(t) {
          $e.call(this, 'languageCodeChanged'), this.g = t;
        }
        function ef(t) {
          $e.call(this, 'frameworkChanged'), this.c = t;
        }
        function nf(t) {
          return t.Zb || Ce(new k('auth-domain-config-required'));
        }
        function rf(t) {
          if (!Di())
            return Ce(new k('operation-not-supported-in-this-environment'));
          var e = nf(t).then(function () {
            return t.a.pa();
          }).then(function (t) {
            return t ? $i(t) : null;
          });
          return lf(t, e);
        }
        function of(t, e) {
          var n = {};
          return n.apiKey = uf(t).options.apiKey, n.authDomain = uf(t).options.authDomain, n.appName = uf(t).name, t.Z.then(function () {
            return function (t, e, n, i) {
              var r = new ph(t, e);
              return n && (r.ga = n), i && gh(r, i), r.reload().then(function () {
                return r;
              });
            }(n, e, t.B, t.Ea());
          }).then(function (e) {
            return cf(t) && e.uid == cf(t).uid ? (Dh(cf(t), e), t.ca(e)) : (af(t, e), Th(e), t.ca(e));
          }).then(function () {
            ff(t);
          });
        }
        function af(t, e) {
          cf(t) && (function (t, e) {
            $(t.R, function (t) {
              return t == e;
            });
          }(cf(t), t.Ma), dn(cf(t), 'tokenChanged', t.xa), dn(cf(t), 'userDeleted', t.ya), dn(cf(t), 'userInvalidated', t.za), wh(cf(t))), e && (e.R.push(t.Ma), hn(e, 'tokenChanged', t.xa), hn(e, 'userDeleted', t.ya), hn(e, 'userInvalidated', t.za), 0 < t.s && yh(e)), zi(t, 'currentUser', e), e && (e.va(t.ja()), vh(e, t), gh(e, t.N), mh(e, t));
        }
        function sf(t, e) {
          var n = null, i = null;
          return lf(t, e.then(function (e) {
            return n = Vo(e), i = zr(e), of(t, e);
          }, function (e) {
            var n = null;
            throw e && 'auth/multi-factor-auth-required' === e.code && (n = th(e.v(), t, T(t.ic, t))), n || e;
          }).then(function () {
            return $i({
              user: cf(t),
              credential: n,
              additionalUserInfo: i,
              operationType: 'signIn'
            });
          }));
        }
        function uf(t) {
          return t.app;
        }
        function cf(t) {
          return t.currentUser;
        }
        function hf(t) {
          return cf(t) && cf(t)._lat || null;
        }
        function ff(t) {
          if (t.aa) {
            for (var e = 0; e < t.m.length; e++)
              t.m[e] && t.m[e](hf(t));
            if (t.W !== t.getUid() && t.O.length)
              for (t.W = t.getUid(), e = 0; e < t.O.length; e++)
                t.O[e] && t.O[e](hf(t));
          }
        }
        function lf(t, e) {
          return t.P.push(e), e.ma(function () {
            Y(t.P, e);
          }), e;
        }
        function df() {
        }
        function pf() {
          this.a = {}, this.b = 1000000000000;
        }
        Gh.prototype.tb = function (t) {
          var e = null, n = this;
          return function (t) {
            var e = new k('invalid-persistence-type'), n = new k('unsupported-persistence-type');
            t: {
              for (i in zu)
                if (zu[i] == t) {
                  var i = !0;
                  break t;
                }
              i = !1;
            }
            if (!i || 'string' != typeof t)
              throw e;
            switch (Ii()) {
            case 'ReactNative':
              if ('session' === t)
                throw n;
              break;
            case 'Node':
              if ('none' !== t)
                throw n;
              break;
            case 'Worker':
              if ('session' === t || !Nu() && 'none' !== t)
                throw n;
              break;
            default:
              if (!Ci() && 'none' !== t)
                throw n;
            }
          }(t), Zh(this, function () {
            return t != n.c.F ? n.b.get(n.c, n.a).then(function (i) {
              return e = i, Wh(n, t);
            }).then(function () {
              if (n.c = Xh(t), e)
                return n.b.set(n.c, e, n.a);
            }) : Oe();
          });
        }, A(Qh, En), A(tf, $e), A(ef, $e), (i = Qh.prototype).tb = function (t) {
          return lf(this, t = this.i.tb(t));
        }, i.va = function (t) {
          this.$ === t || this.l || (this.$ = t, ns(this.b, this.$), this.dispatchEvent(new tf(this.ja())));
        }, i.ja = function () {
          return this.$;
        }, i.dd = function () {
          var t = h.navigator;
          this.va(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null);
        }, i.Ec = function (t) {
          this.N.push(t), is(this.b, r.SDK_VERSION ? ki(r.SDK_VERSION, this.N) : null), this.dispatchEvent(new ef(this.N));
        }, i.Ea = function () {
          return Q(this.N);
        }, i.ub = function (t) {
          this.R === t || this.l || (this.R = t, this.b.b = this.R);
        }, i.S = function () {
          return this.R;
        }, i.toJSON = function () {
          return {
            apiKey: uf(this).options.apiKey,
            authDomain: uf(this).options.authDomain,
            appName: uf(this).name,
            currentUser: cf(this) && cf(this).v()
          };
        }, i.Cb = function (t, e) {
          switch (t) {
          case 'unknown':
          case 'signInViaRedirect':
            return !0;
          case 'signInViaPopup':
            return this.g == e && !!this.f;
          default:
            return !1;
          }
        }, i.la = function (t, e, n, i) {
          'signInViaPopup' == t && this.g == i && (n && this.w ? this.w(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.w);
        }, i.Da = function (t, e) {
          return 'signInViaRedirect' == t || 'signInViaPopup' == t && this.g == e && this.f ? T(this.gc, this) : null;
        }, i.gc = function (t, e, n, i) {
          var r = this, o = {
              requestUri: t,
              postBody: i,
              sessionId: e,
              tenantId: n
            };
          return this.c && (this.c.cancel(), this.c = null), r.Z.then(function () {
            return sf(r, ms(r.b, o));
          });
        }, i.Vc = function (t) {
          if (!Di())
            return Ce(new k('operation-not-supported-in-this-environment'));
          var e = this, n = Xr(t.providerId), i = Vi(), o = null;
          (!Li() || yi()) && uf(this).options.authDomain && t.isOAuthProvider && (o = vu(uf(this).options.authDomain, uf(this).options.apiKey, uf(this).name, 'signInViaPopup', t, null, i, r.SDK_VERSION || null, null, null, this.S()));
          var a = pi(o, n && n.ta, n && n.sa);
          return lf(this, n = nf(this).then(function (n) {
            return Lc(n, a, 'signInViaPopup', t, i, !!o, e.S());
          }).then(function () {
            return new Ee(function (t, n) {
              e.la('signInViaPopup', null, new k('cancelled-popup-request'), e.g), e.f = t, e.w = n, e.g = i, e.c = xc(e.a, e, 'signInViaPopup', a, i);
            });
          }).then(function (t) {
            return a && di(a), t ? $i(t) : null;
          }).o(function (t) {
            throw a && di(a), t;
          }));
        }, i.Wc = function (t) {
          if (!Di())
            return Ce(new k('operation-not-supported-in-this-environment'));
          var e = this;
          return lf(this, nf(this).then(function () {
            return function (t) {
              return Zh(t, function () {
                return t.b.set(Jh, t.c.F, t.a);
              });
            }(e.i);
          }).then(function () {
            return Mc(e.a, 'signInViaRedirect', t, void 0, e.S());
          }));
        }, i.pa = function () {
          var t = this;
          return rf(this).then(function (e) {
            return t.a && Bc(t.a.b), e;
          }).o(function (e) {
            throw t.a && Bc(t.a.b), e;
          });
        }, i.bd = function (t) {
          if (!t)
            return Ce(new k('null-user'));
          if (this.R != t.tenantId)
            return Ce(new k('tenant-id-mismatch'));
          var e = this, n = {};
          n.apiKey = uf(this).options.apiKey, n.authDomain = uf(this).options.authDomain, n.appName = uf(this).name;
          var i = function (t, e, n, i) {
            var r = t.b, o = {};
            return o[$a] = r.b && r.b.toString(), o.refreshToken = r.a, e = new ph(e || {
              apiKey: t.l,
              authDomain: t.s,
              appName: t.m
            }, o), n && (e.ga = n), i && gh(e, i), Dh(e, t), e;
          }(t, n, e.B, e.Ea());
          return lf(this, this.h.then(function () {
            if (uf(e).options.apiKey != t.l)
              return i.reload();
          }).then(function () {
            return cf(e) && t.uid == cf(e).uid ? (Dh(cf(e), t), e.ca(t)) : (af(e, i), Th(i), e.ca(i));
          }).then(function () {
            ff(e);
          }));
        }, i.wb = function () {
          var t = this;
          return lf(this, this.h.then(function () {
            return t.a && Bc(t.a.b), cf(t) ? (af(t, null), Yh(t.i).then(function () {
              ff(t);
            })) : Oe();
          }));
        }, i.Xc = function () {
          var t = this;
          return $h(this.i, uf(this).options.authDomain).then(function (e) {
            if (!t.l) {
              var n;
              if (n = cf(t) && e) {
                n = cf(t).uid;
                var i = e.uid;
                n = null != n && '' !== n && null != i && '' !== i && n == i;
              }
              if (n)
                return Dh(cf(t), e), cf(t).I();
              (cf(t) || e) && (af(t, e), e && (Th(e), e.ga = t.B), t.a && Cc(t.a, t), ff(t));
            }
          });
        }, i.ca = function (t) {
          return zh(this.i, t);
        }, i.jc = function () {
          ff(this), this.ca(cf(this));
        }, i.uc = function () {
          this.wb();
        }, i.vc = function () {
          this.wb();
        }, i.ic = function (t) {
          var e = this;
          return this.h.then(function () {
            return sf(e, Oe(t));
          });
        }, i.xc = function (t) {
          var e = this;
          this.addAuthTokenListener(function () {
            t.next(cf(e));
          });
        }, i.yc = function (t) {
          var e = this;
          !function (t, e) {
            t.O.push(e), lf(t, t.h.then(function () {
              !t.l && z(t.O, e) && t.W !== t.getUid() && (t.W = t.getUid(), e(hf(t)));
            }));
          }(this, function () {
            t.next(cf(e));
          });
        }, i.Gc = function (t, e, n) {
          var i = this;
          return this.aa && Promise.resolve().then(function () {
            'function' == typeof t ? t(cf(i)) : 'function' == typeof t.next && t.next(cf(i));
          }), this.$b(t, e, n);
        }, i.Fc = function (t, e, n) {
          var i = this;
          return this.aa && Promise.resolve().then(function () {
            i.W = i.getUid(), 'function' == typeof t ? t(cf(i)) : 'function' == typeof t.next && t.next(cf(i));
          }), this.ac(t, e, n);
        }, i.kc = function (t) {
          var e = this;
          return lf(this, this.h.then(function () {
            return cf(e) ? cf(e).I(t).then(function (t) {
              return { accessToken: t };
            }) : null;
          }));
        }, i.Rc = function (t) {
          var e = this;
          return this.h.then(function () {
            return sf(e, tu(e.b, Xs, { token: t }));
          }).then(function (t) {
            var n = t.user;
            return Ch(n, 'isAnonymous', !1), e.ca(n), t;
          });
        }, i.Sc = function (t, e) {
          var n = this;
          return this.h.then(function () {
            return sf(n, tu(n.b, zs, {
              email: t,
              password: e
            }));
          });
        }, i.cc = function (t, e) {
          var n = this;
          return this.h.then(function () {
            return sf(n, tu(n.b, Ts, {
              email: t,
              password: e
            }));
          });
        }, i.Ya = function (t) {
          var e = this;
          return this.h.then(function () {
            return sf(e, t.ia(e.b));
          });
        }, i.Qc = function (t) {
          return Ji('firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'), this.Ya(t);
        }, i.vb = function () {
          var t = this;
          return this.h.then(function () {
            var e = cf(t);
            if (e && e.isAnonymous) {
              var n = $i({
                providerId: null,
                isNewUser: !1
              });
              return $i({
                user: e,
                credential: null,
                additionalUserInfo: n,
                operationType: 'signIn'
              });
            }
            return sf(t, t.b.vb()).then(function (e) {
              var n = e.user;
              return Ch(n, 'isAnonymous', !0), t.ca(n), e;
            });
          });
        }, i.getUid = function () {
          return cf(this) && cf(this).uid || null;
        }, i.bc = function (t) {
          this.addAuthTokenListener(t), this.s++, 0 < this.s && cf(this) && yh(cf(this));
        }, i.Nc = function (t) {
          var e = this;
          G(this.m, function (n) {
            n == t && e.s--;
          }), 0 > this.s && (this.s = 0), 0 == this.s && cf(this) && wh(cf(this)), this.removeAuthTokenListener(t);
        }, i.addAuthTokenListener = function (t) {
          var e = this;
          this.m.push(t), lf(this, this.h.then(function () {
            e.l || z(e.m, t) && t(hf(e));
          }));
        }, i.removeAuthTokenListener = function (t) {
          $(this.m, function (e) {
            return e == t;
          });
        }, i.delete = function () {
          this.l = !0;
          for (var t = 0; t < this.P.length; t++)
            this.P[t].cancel('app-deleted');
          return this.P = [], this.i && (t = this.i).b.removeListener(Xh('local'), t.a, this.oa), this.a && (Dc(this.a, this), Bc(this.a.b)), Promise.resolve();
        }, i.fc = function (t) {
          return lf(this, function (t, e) {
            return tu(t, _s, {
              identifier: e,
              continueUri: Pi() ? hi() : 'http://localhost'
            }).then(function (t) {
              return t.signinMethods || [];
            });
          }(this.b, t));
        }, i.zc = function (t) {
          return !!Po(t);
        }, i.sb = function (t, e) {
          var n = this;
          return lf(this, Oe().then(function () {
            var t = new Or(e);
            if (!t.c)
              throw new k('argument-error', Pr + ' must be true when sending sign in link to email');
            return Ur(t);
          }).then(function (e) {
            return n.b.sb(t, e);
          }).then(function () {
          }));
        }, i.fd = function (t) {
          return this.Pa(t).then(function (t) {
            return t.data.email;
          });
        }, i.jb = function (t, e) {
          return lf(this, this.b.jb(t, e).then(function () {
          }));
        }, i.Pa = function (t) {
          return lf(this, this.b.Pa(t).then(function (t) {
            return new ar(t);
          }));
        }, i.fb = function (t) {
          return lf(this, this.b.fb(t).then(function () {
          }));
        }, i.rb = function (t, e) {
          var n = this;
          return lf(this, Oe().then(function () {
            return void 0 === e || vt(e) ? {} : Ur(new Or(e));
          }).then(function (e) {
            return n.b.rb(t, e);
          }).then(function () {
          }));
        }, i.Uc = function (t, e) {
          return lf(this, Xc(this, t, e, T(this.Ya, this)));
        }, i.Tc = function (t, e) {
          var n = this;
          return lf(this, Oe().then(function () {
            var i = e || hi(), r = Do(t, i);
            if (!(i = Po(i)))
              throw new k('argument-error', 'Invalid email link!');
            if (i.tenantId !== n.S())
              throw new k('tenant-id-mismatch');
            return n.Ya(r);
          }));
        }, df.prototype.render = function () {
        }, df.prototype.reset = function () {
        }, df.prototype.getResponse = function () {
        }, df.prototype.execute = function () {
        };
        var vf = null;
        function gf(t, e) {
          return (e = mf(e)) && t.a[e] || null;
        }
        function mf(t) {
          return (t = void 0 === t ? 1000000000000 : t) ? t.toString() : null;
        }
        function bf(t, e) {
          this.g = !1, this.c = e, this.a = this.b = null, this.h = 'invisible' !== this.c.size, this.f = ue(t);
          var n = this;
          this.i = function () {
            n.execute();
          }, this.h ? this.execute() : hn(this.f, 'click', this.i);
        }
        function yf(t) {
          if (t.g)
            throw Error('reCAPTCHA mock was already deleted!');
        }
        function wf() {
        }
        function If() {
        }
        pf.prototype.render = function (t, e) {
          return this.a[this.b.toString()] = new bf(t, e), this.b++;
        }, pf.prototype.reset = function (t) {
          var e = gf(this, t);
          t = mf(t), e && t && (e.delete(), delete this.a[t]);
        }, pf.prototype.getResponse = function (t) {
          return (t = gf(this, t)) ? t.getResponse() : null;
        }, pf.prototype.execute = function (t) {
          (t = gf(this, t)) && t.execute();
        }, bf.prototype.getResponse = function () {
          return yf(this), this.b;
        }, bf.prototype.execute = function () {
          yf(this);
          var t = this;
          this.a || (this.a = setTimeout(function () {
            t.b = function () {
              for (var t = 50, e = []; 0 < t;)
                e.push('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(62 * Math.random()))), t--;
              return e.join('');
            }();
            var e = t.c.callback, n = t.c['expired-callback'];
            if (e)
              try {
                e(t.b);
              } catch (t) {
              }
            t.a = setTimeout(function () {
              if (t.a = null, t.b = null, n)
                try {
                  n();
                } catch (t) {
                }
              t.h && t.execute();
            }, 60000);
          }, 500));
        }, bf.prototype.delete = function () {
          yf(this), this.g = !0, clearTimeout(this.a), this.a = null, dn(this.f, 'click', this.i);
        }, zi(wf, 'FACTOR_ID', 'phone'), If.prototype.g = function () {
          return vf || (vf = new pf()), Oe(vf);
        }, If.prototype.c = function () {
        };
        var Ef = null;
        function Tf() {
          this.b = h.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = '__rcb' + Math.floor(1000000 * Math.random()).toString();
        }
        var _f = new wt(Tt, 'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'), Sf = new Hi(30000, 60000);
        Tf.prototype.g = function (t) {
          var e = this;
          return new Ee(function (n, i) {
            var r = setTimeout(function () {
              i(new k('network-request-failed'));
            }, Sf.get());
            !h.grecaptcha || t !== e.f && !e.b ? (h[e.a] = function () {
              if (h.grecaptcha) {
                e.f = t;
                var o = h.grecaptcha.render;
                h.grecaptcha.render = function (t, n) {
                  return t = o(t, n), e.b++, t;
                }, clearTimeout(r), n(h.grecaptcha);
              } else
                clearTimeout(r), i(new k('internal-error'));
              delete h[e.a];
            }, Oe(Ba(kt(_f, {
              onload: e.a,
              hl: t || ''
            }))).o(function () {
              clearTimeout(r), i(new k('internal-error', 'Unable to load external reCAPTCHA dependencies!'));
            })) : (clearTimeout(r), n(h.grecaptcha));
          });
        }, Tf.prototype.c = function () {
          this.b--;
        };
        var Af = null;
        function kf(t, e, n, i, r, o, a) {
          if (zi(this, 'type', 'recaptcha'), this.c = this.f = null, this.D = !1, this.u = e, this.g = null, a ? (Ef || (Ef = new If()), a = Ef) : (Af || (Af = new Tf()), a = Af), this.m = a, this.a = n || {
              theme: 'light',
              type: 'image'
            }, this.h = [], this.a[Cf])
            throw new k('argument-error', 'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.');
          if (this.i = 'invisible' === this.a[Df], !h.document)
            throw new k('operation-not-supported-in-this-environment', 'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.');
          if (!ue(e) || !this.i && ue(e).hasChildNodes())
            throw new k('argument-error', 'reCAPTCHA container is either not found or already contains inner elements!');
          this.s = new za(t, o || null, r || null), this.w = i || function () {
            return null;
          };
          var s = this;
          this.l = [];
          var u = this.a[Nf];
          this.a[Nf] = function (t) {
            if (Pf(s, t), 'function' == typeof u)
              u(t);
            else if ('string' == typeof u) {
              var e = Oi(u, h);
              'function' == typeof e && e(t);
            }
          };
          var c = this.a[Of];
          this.a[Of] = function () {
            if (Pf(s, null), 'function' == typeof c)
              c();
            else if ('string' == typeof c) {
              var t = Oi(c, h);
              'function' == typeof t && t();
            }
          };
        }
        var Nf = 'callback', Of = 'expired-callback', Cf = 'sitekey', Df = 'size';
        function Pf(t, e) {
          for (var n = 0; n < t.l.length; n++)
            try {
              t.l[n](e);
            } catch (t) {
            }
        }
        function Rf(t, e) {
          return t.h.push(e), e.ma(function () {
            Y(t.h, e);
          }), e;
        }
        function Lf(t) {
          if (t.D)
            throw new k('internal-error', 'RecaptchaVerifier instance has been destroyed.');
        }
        function jf(t, e, n) {
          var i = !1;
          try {
            this.b = n || r.app();
          } catch (t) {
            throw new k('argument-error', 'No firebase.app.App instance is currently initialized.');
          }
          if (!this.b.options || !this.b.options.apiKey)
            throw new k('invalid-api-key');
          n = this.b.options.apiKey;
          var o = this, a = null;
          try {
            a = this.b.auth().Ea();
          } catch (t) {
          }
          try {
            i = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (t) {
          }
          a = r.SDK_VERSION ? ki(r.SDK_VERSION, a) : null, kf.call(this, n, t, e, function () {
            try {
              var t = o.b.auth().ja();
            } catch (e) {
              t = null;
            }
            return t;
          }, a, R(O), i);
        }
        function Mf(t, e, n, i) {
          t: {
            n = Array.prototype.slice.call(n);
            for (var r = 0, o = !1, a = 0; a < e.length; a++)
              if (e[a].optional)
                o = !0;
              else {
                if (o)
                  throw new k('internal-error', 'Argument validator encountered a required argument after an optional argument.');
                r++;
              }
            if (o = e.length, n.length < r || o < n.length)
              i = 'Expected ' + (r == o ? 1 == r ? '1 argument' : r + ' arguments' : r + '-' + o + ' arguments') + ' but got ' + n.length + '.';
            else {
              for (r = 0; r < n.length; r++)
                if (o = e[r].optional && void 0 === n[r], !e[r].K(n[r]) && !o) {
                  if (e = e[r], 0 > r || r >= xf.length)
                    throw new k('internal-error', 'Argument validator received an unsupported number of arguments.');
                  n = xf[r], i = (i ? '' : n + ' argument ') + (e.name ? '"' + e.name + '" ' : '') + 'must be ' + e.J + '.';
                  break t;
                }
              i = null;
            }
          }
          if (i)
            throw new k('argument-error', t + ' failed: ' + i);
        }
        (i = kf.prototype).Ga = function () {
          var t = this;
          return this.f ? this.f : this.f = Rf(this, Oe().then(function () {
            if (Pi() && !wi())
              return mi();
            throw new k('operation-not-supported-in-this-environment', 'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.');
          }).then(function () {
            return t.m.g(t.w());
          }).then(function (e) {
            return t.g = e, tu(t.s, xs, {});
          }).then(function (e) {
            t.a[Cf] = e.recaptchaSiteKey;
          }).o(function (e) {
            throw t.f = null, e;
          }));
        }, i.render = function () {
          Lf(this);
          var t = this;
          return Rf(this, this.Ga().then(function () {
            if (null === t.c) {
              var e = t.u;
              if (!t.i) {
                var n = ue(e);
                e = function (t, e, n) {
                  var i = arguments, r = document, o = String(i[0]), a = i[1];
                  if (!se && a && (a.name || a.type)) {
                    if (o = [
                        '<',
                        o
                      ], a.name && o.push(' name="', Kt(a.name), '"'), a.type) {
                      o.push(' type="', Kt(a.type), '"');
                      var s = {};
                      bt(s, a), delete s.type, a = s;
                    }
                    o.push('>'), o = o.join('');
                  }
                  return o = pe(r, o), a && ('string' == typeof a ? o.className = a : Array.isArray(a) ? o.className = a.join(' ') : ce(o, a)), 2 < i.length && de(r, o, i), o;
                }('DIV'), n.appendChild(e);
              }
              t.c = t.g.render(e, t.a);
            }
            return t.c;
          }));
        }, i.verify = function () {
          Lf(this);
          var t = this;
          return Rf(this, this.render().then(function (e) {
            return new Ee(function (n) {
              var i = t.g.getResponse(e);
              if (i)
                n(i);
              else {
                t.l.push(function e(i) {
                  i && (function (t, e) {
                    $(t.l, function (t) {
                      return t == e;
                    });
                  }(t, e), n(i));
                }), t.i && t.g.execute(t.c);
              }
            });
          }));
        }, i.reset = function () {
          Lf(this), null !== this.c && this.g.reset(this.c);
        }, i.clear = function () {
          Lf(this), this.D = !0, this.m.c();
          for (var t = 0; t < this.h.length; t++)
            this.h[t].cancel('RecaptchaVerifier instance has been destroyed.');
          if (!this.i) {
            t = ue(this.u);
            for (var e; e = t.firstChild;)
              t.removeChild(e);
          }
        }, A(jf, kf);
        var xf = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(' ');
        function Vf(t, e) {
          return {
            name: t || '',
            J: 'a valid string',
            optional: !!e,
            K: function (t) {
              return 'string' == typeof t;
            }
          };
        }
        function Uf(t, e) {
          return {
            name: t || '',
            J: 'a boolean',
            optional: !!e,
            K: function (t) {
              return 'boolean' == typeof t;
            }
          };
        }
        function Ff(t, e) {
          return {
            name: t || '',
            J: 'a valid object',
            optional: !!e,
            K: m
          };
        }
        function Hf(t, e) {
          return {
            name: t || '',
            J: 'a function',
            optional: !!e,
            K: function (t) {
              return 'function' == typeof t;
            }
          };
        }
        function Bf(t, e) {
          return {
            name: t || '',
            J: 'null',
            optional: !!e,
            K: function (t) {
              return null === t;
            }
          };
        }
        function qf(t) {
          return {
            name: t ? t + 'Credential' : 'credential',
            J: t ? 'a valid ' + t + ' credential' : 'a valid credential',
            optional: !1,
            K: function (e) {
              if (!e)
                return !1;
              var n = !t || e.providerId === t;
              return !(!e.ia || !n);
            }
          };
        }
        function Kf(t, e) {
          return m(t) && 'string' == typeof t.type && t.type === e && 'function' == typeof t.Fa;
        }
        function Gf(t) {
          return m(t) && 'string' == typeof t.uid;
        }
        function Wf(t, e, n, i) {
          return {
            name: n || '',
            J: t.J + ' or ' + e.J,
            optional: !!i,
            K: function (n) {
              return t.K(n) || e.K(n);
            }
          };
        }
        function Jf(t, e) {
          for (var n in e) {
            var i = e[n].name;
            t[i] = Yf(i, t[n], e[n].j);
          }
        }
        function Xf(t, e) {
          for (var n in e) {
            var i = e[n].name;
            i !== n && Object.defineProperty(t, i, {
              get: _(function (t) {
                return this[t];
              }, n),
              set: _(function (t, e, n, i) {
                Mf(t, [n], [i], !0), this[e] = i;
              }, i, n, e[n].gb),
              enumerable: !0
            });
          }
        }
        function zf(t, e, n, i) {
          t[e] = Yf(e, n, i);
        }
        function Yf(t, e, n) {
          function i() {
            var t = Array.prototype.slice.call(arguments);
            return Mf(o, n, t), e.apply(this, t);
          }
          if (!n)
            return e;
          var r, o = function (t) {
              return (t = t.split('.'))[t.length - 1];
            }(t);
          for (r in e)
            i[r] = e[r];
          for (r in e.prototype)
            i.prototype[r] = e.prototype[r];
          return i;
        }
        Jf(Qh.prototype, {
          fb: {
            name: 'applyActionCode',
            j: [Vf('code')]
          },
          Pa: {
            name: 'checkActionCode',
            j: [Vf('code')]
          },
          jb: {
            name: 'confirmPasswordReset',
            j: [
              Vf('code'),
              Vf('newPassword')
            ]
          },
          cc: {
            name: 'createUserWithEmailAndPassword',
            j: [
              Vf('email'),
              Vf('password')
            ]
          },
          fc: {
            name: 'fetchSignInMethodsForEmail',
            j: [Vf('email')]
          },
          pa: {
            name: 'getRedirectResult',
            j: []
          },
          zc: {
            name: 'isSignInWithEmailLink',
            j: [Vf('emailLink')]
          },
          Fc: {
            name: 'onAuthStateChanged',
            j: [
              Wf(Ff(), Hf(), 'nextOrObserver'),
              Hf('opt_error', !0),
              Hf('opt_completed', !0)
            ]
          },
          Gc: {
            name: 'onIdTokenChanged',
            j: [
              Wf(Ff(), Hf(), 'nextOrObserver'),
              Hf('opt_error', !0),
              Hf('opt_completed', !0)
            ]
          },
          rb: {
            name: 'sendPasswordResetEmail',
            j: [
              Vf('email'),
              Wf(Ff('opt_actionCodeSettings', !0), Bf(null, !0), 'opt_actionCodeSettings', !0)
            ]
          },
          sb: {
            name: 'sendSignInLinkToEmail',
            j: [
              Vf('email'),
              Ff('actionCodeSettings')
            ]
          },
          tb: {
            name: 'setPersistence',
            j: [Vf('persistence')]
          },
          Qc: {
            name: 'signInAndRetrieveDataWithCredential',
            j: [qf()]
          },
          vb: {
            name: 'signInAnonymously',
            j: []
          },
          Ya: {
            name: 'signInWithCredential',
            j: [qf()]
          },
          Rc: {
            name: 'signInWithCustomToken',
            j: [Vf('token')]
          },
          Sc: {
            name: 'signInWithEmailAndPassword',
            j: [
              Vf('email'),
              Vf('password')
            ]
          },
          Tc: {
            name: 'signInWithEmailLink',
            j: [
              Vf('email'),
              Vf('emailLink', !0)
            ]
          },
          Uc: {
            name: 'signInWithPhoneNumber',
            j: [
              Vf('phoneNumber'),
              {
                name: 'applicationVerifier',
                J: 'an implementation of firebase.auth.ApplicationVerifier',
                optional: !1,
                K: function (t) {
                  return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                }
              }
            ]
          },
          Vc: {
            name: 'signInWithPopup',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          Wc: {
            name: 'signInWithRedirect',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          bd: {
            name: 'updateCurrentUser',
            j: [Wf({
                name: 'user',
                J: 'an instance of Firebase User',
                optional: !1,
                K: function (t) {
                  return !!(t && t instanceof ph);
                }
              }, Bf(), 'user')]
          },
          wb: {
            name: 'signOut',
            j: []
          },
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          },
          dd: {
            name: 'useDeviceLanguage',
            j: []
          },
          fd: {
            name: 'verifyPasswordResetCode',
            j: [Vf('code')]
          }
        }), Xf(Qh.prototype, {
          lc: {
            name: 'languageCode',
            gb: Wf(Vf(), Bf(), 'languageCode')
          },
          ti: {
            name: 'tenantId',
            gb: Wf(Vf(), Bf(), 'tenantId')
          }
        }), Qh.Persistence = zu, Qh.Persistence.LOCAL = 'local', Qh.Persistence.SESSION = 'session', Qh.Persistence.NONE = 'none', Jf(ph.prototype, {
          delete: {
            name: 'delete',
            j: []
          },
          mc: {
            name: 'getIdTokenResult',
            j: [Uf('opt_forceRefresh', !0)]
          },
          I: {
            name: 'getIdToken',
            j: [Uf('opt_forceRefresh', !0)]
          },
          Ac: {
            name: 'linkAndRetrieveDataWithCredential',
            j: [qf()]
          },
          mb: {
            name: 'linkWithCredential',
            j: [qf()]
          },
          Bc: {
            name: 'linkWithPhoneNumber',
            j: [
              Vf('phoneNumber'),
              {
                name: 'applicationVerifier',
                J: 'an implementation of firebase.auth.ApplicationVerifier',
                optional: !1,
                K: function (t) {
                  return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                }
              }
            ]
          },
          Cc: {
            name: 'linkWithPopup',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          Dc: {
            name: 'linkWithRedirect',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          Jc: {
            name: 'reauthenticateAndRetrieveDataWithCredential',
            j: [qf()]
          },
          pb: {
            name: 'reauthenticateWithCredential',
            j: [qf()]
          },
          Kc: {
            name: 'reauthenticateWithPhoneNumber',
            j: [
              Vf('phoneNumber'),
              {
                name: 'applicationVerifier',
                J: 'an implementation of firebase.auth.ApplicationVerifier',
                optional: !1,
                K: function (t) {
                  return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                }
              }
            ]
          },
          Lc: {
            name: 'reauthenticateWithPopup',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          Mc: {
            name: 'reauthenticateWithRedirect',
            j: [{
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }]
          },
          reload: {
            name: 'reload',
            j: []
          },
          qb: {
            name: 'sendEmailVerification',
            j: [Wf(Ff('opt_actionCodeSettings', !0), Bf(null, !0), 'opt_actionCodeSettings', !0)]
          },
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          },
          ad: {
            name: 'unlink',
            j: [Vf('provider')]
          },
          xb: {
            name: 'updateEmail',
            j: [Vf('email')]
          },
          yb: {
            name: 'updatePassword',
            j: [Vf('password')]
          },
          cd: {
            name: 'updatePhoneNumber',
            j: [qf('phone')]
          },
          zb: {
            name: 'updateProfile',
            j: [Ff('profile')]
          },
          Ab: {
            name: 'verifyBeforeUpdateEmail',
            j: [
              Vf('email'),
              Wf(Ff('opt_actionCodeSettings', !0), Bf(null, !0), 'opt_actionCodeSettings', !0)
            ]
          }
        }), Jf(pf.prototype, {
          execute: { name: 'execute' },
          render: { name: 'render' },
          reset: { name: 'reset' },
          getResponse: { name: 'getResponse' }
        }), Jf(df.prototype, {
          execute: { name: 'execute' },
          render: { name: 'render' },
          reset: { name: 'reset' },
          getResponse: { name: 'getResponse' }
        }), Jf(Ee.prototype, {
          ma: { name: 'finally' },
          o: { name: 'catch' },
          then: { name: 'then' }
        }), Xf(Wc.prototype, {
          appVerificationDisabled: {
            name: 'appVerificationDisabledForTesting',
            gb: Uf('appVerificationDisabledForTesting')
          }
        }), Jf(Jc.prototype, {
          confirm: {
            name: 'confirm',
            j: [Vf('verificationCode')]
          }
        }), zf(uo, 'fromJSON', function (t) {
          t = 'string' == typeof t ? JSON.parse(t) : t;
          for (var e, n = [
                go,
                Oo,
                Lo,
                lo
              ], i = 0; i < n.length; i++)
            if (e = n[i](t))
              return e;
          return null;
        }, [Wf(Vf(), Ff(), 'json')]), zf(Co, 'credential', function (t, e) {
          return new No(t, e);
        }, [
          Vf('email'),
          Vf('password')
        ]), Jf(No.prototype, {
          v: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(wo.prototype, {
          Aa: {
            name: 'addScope',
            j: [Vf('scope')]
          },
          Ia: {
            name: 'setCustomParameters',
            j: [Ff('customOAuthParameters')]
          }
        }), zf(wo, 'credential', Io, [Wf(Vf(), Ff(), 'token')]), zf(Co, 'credentialWithLink', Do, [
          Vf('email'),
          Vf('emailLink')
        ]), Jf(Eo.prototype, {
          Aa: {
            name: 'addScope',
            j: [Vf('scope')]
          },
          Ia: {
            name: 'setCustomParameters',
            j: [Ff('customOAuthParameters')]
          }
        }), zf(Eo, 'credential', To, [Wf(Vf(), Ff(), 'token')]), Jf(_o.prototype, {
          Aa: {
            name: 'addScope',
            j: [Vf('scope')]
          },
          Ia: {
            name: 'setCustomParameters',
            j: [Ff('customOAuthParameters')]
          }
        }), zf(_o, 'credential', So, [
          Wf(Vf(), Wf(Ff(), Bf()), 'idToken'),
          Wf(Vf(), Bf(), 'accessToken', !0)
        ]), Jf(Ao.prototype, {
          Ia: {
            name: 'setCustomParameters',
            j: [Ff('customOAuthParameters')]
          }
        }), zf(Ao, 'credential', ko, [
          Wf(Vf(), Ff(), 'token'),
          Vf('secret', !0)
        ]), Jf(yo.prototype, {
          Aa: {
            name: 'addScope',
            j: [Vf('scope')]
          },
          credential: {
            name: 'credential',
            j: [
              Wf(Vf(), Wf(Ff(), Bf()), 'optionsOrIdToken'),
              Wf(Vf(), Bf(), 'accessToken', !0)
            ]
          },
          Ia: {
            name: 'setCustomParameters',
            j: [Ff('customOAuthParameters')]
          }
        }), Jf(po.prototype, {
          v: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(ho.prototype, {
          v: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), zf(Mo, 'credential', xo, [
          Vf('verificationId'),
          Vf('verificationCode')
        ]), Jf(Mo.prototype, {
          cb: {
            name: 'verifyPhoneNumber',
            j: [
              Wf(Vf(), {
                name: 'phoneInfoOptions',
                J: 'valid phone info options',
                optional: !1,
                K: function (t) {
                  return !!t && (t.session && t.phoneNumber ? Kf(t.session, ao) && 'string' == typeof t.phoneNumber : t.session && t.multiFactorHint ? Kf(t.session, so) && Gf(t.multiFactorHint) : t.session && t.multiFactorUid ? Kf(t.session, so) && 'string' == typeof t.multiFactorUid : !!t.phoneNumber && 'string' == typeof t.phoneNumber);
                }
              }, 'phoneInfoOptions'),
              {
                name: 'applicationVerifier',
                J: 'an implementation of firebase.auth.ApplicationVerifier',
                optional: !1,
                K: function (t) {
                  return !(!t || 'string' != typeof t.type || 'function' != typeof t.verify);
                }
              }
            ]
          }
        }), Jf(Ro.prototype, {
          v: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(k.prototype, {
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(Wo.prototype, {
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(Go.prototype, {
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(Qc.prototype, {
          toJSON: {
            name: 'toJSON',
            j: [Vf(null, !0)]
          }
        }), Jf(Yc.prototype, {
          Pc: {
            name: 'resolveSignIn',
            j: [{
                name: 'multiFactorAssertion',
                J: 'a valid multiFactorAssertion',
                optional: !1,
                K: function (t) {
                  return !!t && !!t.ob;
                }
              }]
          }
        }), Jf(oh.prototype, {
          Ob: {
            name: 'getSession',
            j: []
          },
          dc: {
            name: 'enroll',
            j: [
              {
                name: 'multiFactorAssertion',
                J: 'a valid multiFactorAssertion',
                optional: !1,
                K: function (t) {
                  return !!t && !!t.ob;
                }
              },
              Vf('displayName', !0)
            ]
          },
          $c: {
            name: 'unenroll',
            j: [Wf({
                name: 'multiFactorInfo',
                J: 'a valid multiFactorInfo',
                optional: !1,
                K: Gf
              }, Vf(), 'multiFactorInfoIdentifier')]
          }
        }), Jf(jf.prototype, {
          clear: {
            name: 'clear',
            j: []
          },
          render: {
            name: 'render',
            j: []
          },
          verify: {
            name: 'verify',
            j: []
          }
        }), zf(wr, 'parseLink', Nr, [Vf('link')]), zf(wf, 'assertion', function (t) {
          return new ih(t);
        }, [qf('phone')]), function () {
          if (void 0 === r || !r.INTERNAL || !r.INTERNAL.registerComponent)
            throw Error('Cannot find the firebase namespace; be sure to include firebase-app.js before this library.');
          var t = {
            ActionCodeInfo: {
              Operation: {
                EMAIL_SIGNIN: ur,
                PASSWORD_RESET: 'PASSWORD_RESET',
                RECOVER_EMAIL: 'RECOVER_EMAIL',
                REVERT_SECOND_FACTOR_ADDITION: sr,
                VERIFY_AND_CHANGE_EMAIL: cr,
                VERIFY_EMAIL: 'VERIFY_EMAIL'
              }
            },
            Auth: Qh,
            AuthCredential: uo,
            Error: k
          };
          zf(t, 'EmailAuthProvider', Co, []), zf(t, 'FacebookAuthProvider', wo, []), zf(t, 'GithubAuthProvider', Eo, []), zf(t, 'GoogleAuthProvider', _o, []), zf(t, 'TwitterAuthProvider', Ao, []), zf(t, 'OAuthProvider', yo, [Vf('providerId')]), zf(t, 'SAMLAuthProvider', bo, [Vf('providerId')]), zf(t, 'PhoneAuthProvider', Mo, [{
              name: 'auth',
              J: 'an instance of Firebase Auth',
              optional: !0,
              K: function (t) {
                return !!(t && t instanceof Qh);
              }
            }]), zf(t, 'RecaptchaVerifier', jf, [
            Wf(Vf(), {
              name: '',
              J: 'an HTML element',
              optional: !1,
              K: function (t) {
                return !!(t && t instanceof Element);
              }
            }, 'recaptchaContainer'),
            Ff('recaptchaParameters', !0),
            {
              name: 'app',
              J: 'an instance of Firebase App',
              optional: !0,
              K: function (t) {
                return !!(t && t instanceof r.app.App);
              }
            }
          ]), zf(t, 'ActionCodeURL', wr, []), zf(t, 'PhoneMultiFactorGenerator', wf, []), r.INTERNAL.registerComponent({
            name: 'auth',
            instanceFactory: function (t) {
              return new Qh(t = t.getProvider('app').getImmediate());
            },
            multipleInstances: !1,
            serviceProps: t,
            instantiationMode: 'LAZY',
            type: 'PUBLIC'
          }), r.INTERNAL.registerComponent({
            name: 'auth-internal',
            instanceFactory: function (t) {
              return {
                getUid: T((t = t.getProvider('auth').getImmediate()).getUid, t),
                getToken: T(t.kc, t),
                addAuthTokenListener: T(t.bc, t),
                removeAuthTokenListener: T(t.Nc, t)
              };
            },
            multipleInstances: !1,
            instantiationMode: 'LAZY',
            type: 'PRIVATE'
          }), r.registerVersion('@firebase/auth', '0.14.9'), r.INTERNAL.extendNamespace({ User: ph });
        }();
      }.apply(void 0 !== t ? t : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : {}));
    }.call(this, n('yLpj')));
  },
  fSjL: function (t, e, n) {
    'use strict';
    var i, r = n('wj3C'), o = n.n(r), a = n('hjJp'), s = n('mrSG'), u = n('zwdx'), c = n('nbvr'), h = ((i = {})['missing-app-config-values'] = 'Missing App configuration value: "{$valueName}"', i['not-registered'] = 'Firebase Installation is not registered.', i['installation-not-found'] = 'Firebase Installation not found.', i['request-failed'] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', i['app-offline'] = 'Could not process request. Application offline.', i['delete-pending-registration'] = 'Can\'t delete installation while there is a pending registration request.', i), f = new u.ErrorFactory('installations', 'Installations', h);
    function l(t) {
      return t instanceof u.FirebaseError && t.code.includes('request-failed');
    }
    function d(t) {
      return 'https://firebaseinstallations.googleapis.com/v1/projects/' + t.projectId + '/installations';
    }
    function p(t) {
      return {
        token: t.token,
        requestStatus: 2,
        expiresIn: (e = t.expiresIn, Number(e.replace('s', '000'))),
        creationTime: Date.now()
      };
      var e;
    }
    function v(t, e) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var n, i;
        return Object(s.__generator)(this, function (r) {
          switch (r.label) {
          case 0:
            return [
              4,
              e.json()
            ];
          case 1:
            return n = r.sent(), i = n.error, [
              2,
              f.create('request-failed', {
                requestName: t,
                serverCode: i.code,
                serverMessage: i.message,
                serverStatus: i.status
              })
            ];
          }
        });
      });
    }
    function g(t) {
      var e = t.apiKey;
      return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': e
      });
    }
    function m(t, e) {
      var n = e.refreshToken, i = g(t);
      return i.append('Authorization', function (t) {
        return 'FIS_v2 ' + t;
      }(n)), i;
    }
    function b(t) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e;
        return Object(s.__generator)(this, function (n) {
          switch (n.label) {
          case 0:
            return [
              4,
              t()
            ];
          case 1:
            return (e = n.sent()).status >= 500 && e.status < 600 ? [
              2,
              t()
            ] : [
              2,
              e
            ];
          }
        });
      });
    }
    function y(t, e) {
      var n = e.fid;
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e, i, r, o, a, u;
        return Object(s.__generator)(this, function (s) {
          switch (s.label) {
          case 0:
            return e = d(t), i = g(t), r = {
              fid: n,
              authVersion: 'FIS_v2',
              appId: t.appId,
              sdkVersion: 'w:0.4.17'
            }, o = {
              method: 'POST',
              headers: i,
              body: JSON.stringify(r)
            }, [
              4,
              b(function () {
                return fetch(e, o);
              })
            ];
          case 1:
            return (a = s.sent()).ok ? [
              4,
              a.json()
            ] : [
              3,
              3
            ];
          case 2:
            return u = s.sent(), [
              2,
              {
                fid: u.fid || n,
                registrationStatus: 2,
                refreshToken: u.refreshToken,
                authToken: p(u.authToken)
              }
            ];
          case 3:
            return [
              4,
              v('Create Installation', a)
            ];
          case 4:
            throw s.sent();
          }
        });
      });
    }
    function w(t) {
      return new Promise(function (e) {
        setTimeout(e, t);
      });
    }
    var I = /^[cdef][\w-]{21}$/;
    function E() {
      try {
        var t = new Uint8Array(17);
        (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
        var e = function (t) {
          return (e = t, btoa(String.fromCharCode.apply(String, Object(s.__spread)(e))).replace(/\+/g, '-').replace(/\//g, '_')).substr(0, 22);
          var e;
        }(t);
        return I.test(e) ? e : '';
      } catch (t) {
        return '';
      }
    }
    function T(t) {
      return t.appName + '!' + t.appId;
    }
    var _ = new Map();
    function S(t, e) {
      var n = T(t);
      A(n, e), function (t, e) {
        var n = N();
        n && n.postMessage({
          key: t,
          fid: e
        });
        O();
      }(n, e);
    }
    function A(t, e) {
      var n, i, r = _.get(t);
      if (r)
        try {
          for (var o = Object(s.__values)(r), a = o.next(); !a.done; a = o.next()) {
            (0, a.value)(e);
          }
        } catch (t) {
          n = { error: t };
        } finally {
          try {
            a && !a.done && (i = o.return) && i.call(o);
          } finally {
            if (n)
              throw n.error;
          }
        }
    }
    var k = null;
    function N() {
      return !k && 'BroadcastChannel' in self && ((k = new BroadcastChannel('[Firebase] FID Change')).onmessage = function (t) {
        A(t.data.key, t.data.fid);
      }), k;
    }
    function O() {
      0 === _.size && k && (k.close(), k = null);
    }
    var C, D = 'firebase-installations-store', P = null;
    function R() {
      return P || (P = Object(c.openDb)('firebase-installations-database', 1, function (t) {
        switch (t.oldVersion) {
        case 0:
          t.createObjectStore(D);
        }
      })), P;
    }
    function L(t, e) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var n, i, r, o, a;
        return Object(s.__generator)(this, function (s) {
          switch (s.label) {
          case 0:
            return n = T(t), [
              4,
              R()
            ];
          case 1:
            return i = s.sent(), r = i.transaction(D, 'readwrite'), [
              4,
              (o = r.objectStore(D)).get(n)
            ];
          case 2:
            return a = s.sent(), [
              4,
              o.put(e, n)
            ];
          case 3:
            return s.sent(), [
              4,
              r.complete
            ];
          case 4:
            return s.sent(), a && a.fid === e.fid || S(t, e.fid), [
              2,
              e
            ];
          }
        });
      });
    }
    function j(t) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e, n, i;
        return Object(s.__generator)(this, function (r) {
          switch (r.label) {
          case 0:
            return e = T(t), [
              4,
              R()
            ];
          case 1:
            return n = r.sent(), [
              4,
              (i = n.transaction(D, 'readwrite')).objectStore(D).delete(e)
            ];
          case 2:
            return r.sent(), [
              4,
              i.complete
            ];
          case 3:
            return r.sent(), [2];
          }
        });
      });
    }
    function M(t, e) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var n, i, r, o, a, u;
        return Object(s.__generator)(this, function (s) {
          switch (s.label) {
          case 0:
            return n = T(t), [
              4,
              R()
            ];
          case 1:
            return i = s.sent(), r = i.transaction(D, 'readwrite'), [
              4,
              (o = r.objectStore(D)).get(n)
            ];
          case 2:
            return a = s.sent(), void 0 !== (u = e(a)) ? [
              3,
              4
            ] : [
              4,
              o.delete(n)
            ];
          case 3:
            return s.sent(), [
              3,
              6
            ];
          case 4:
            return [
              4,
              o.put(u, n)
            ];
          case 5:
            s.sent(), s.label = 6;
          case 6:
            return [
              4,
              r.complete
            ];
          case 7:
            return s.sent(), !u || a && a.fid === u.fid || S(t, u.fid), [
              2,
              u
            ];
          }
        });
      });
    }
    function x(t) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e, n, i;
        return Object(s.__generator)(this, function (r) {
          switch (r.label) {
          case 0:
            return [
              4,
              M(t, function (n) {
                var i = function (t) {
                    return F(t || {
                      fid: E(),
                      registrationStatus: 0
                    });
                  }(n), r = function (t, e) {
                    if (0 === e.registrationStatus) {
                      if (!navigator.onLine) {
                        var n = Promise.reject(f.create('app-offline'));
                        return {
                          installationEntry: e,
                          registrationPromise: n
                        };
                      }
                      var i = {
                          fid: e.fid,
                          registrationStatus: 1,
                          registrationTime: Date.now()
                        }, r = function (t, e) {
                          return Object(s.__awaiter)(this, void 0, void 0, function () {
                            var n, i;
                            return Object(s.__generator)(this, function (r) {
                              switch (r.label) {
                              case 0:
                                return r.trys.push([
                                  0,
                                  2,
                                  ,
                                  7
                                ]), [
                                  4,
                                  y(t, e)
                                ];
                              case 1:
                                return n = r.sent(), [
                                  2,
                                  L(t, n)
                                ];
                              case 2:
                                return l(i = r.sent()) && 409 === i.serverCode ? [
                                  4,
                                  j(t)
                                ] : [
                                  3,
                                  4
                                ];
                              case 3:
                                return r.sent(), [
                                  3,
                                  6
                                ];
                              case 4:
                                return [
                                  4,
                                  L(t, {
                                    fid: e.fid,
                                    registrationStatus: 0
                                  })
                                ];
                              case 5:
                                r.sent(), r.label = 6;
                              case 6:
                                throw i;
                              case 7:
                                return [2];
                              }
                            });
                          });
                        }(t, i);
                      return {
                        installationEntry: i,
                        registrationPromise: r
                      };
                    }
                    return 1 === e.registrationStatus ? {
                      installationEntry: e,
                      registrationPromise: V(t)
                    } : { installationEntry: e };
                  }(t, i);
                return e = r.registrationPromise, r.installationEntry;
              })
            ];
          case 1:
            return '' !== (n = r.sent()).fid ? [
              3,
              3
            ] : (i = {}, [
              4,
              e
            ]);
          case 2:
            return [
              2,
              (i.installationEntry = r.sent(), i)
            ];
          case 3:
            return [
              2,
              {
                installationEntry: n,
                registrationPromise: e
              }
            ];
          }
        });
      });
    }
    function V(t) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e, n, i, r;
        return Object(s.__generator)(this, function (o) {
          switch (o.label) {
          case 0:
            return [
              4,
              U(t)
            ];
          case 1:
            e = o.sent(), o.label = 2;
          case 2:
            return 1 !== e.registrationStatus ? [
              3,
              5
            ] : [
              4,
              w(100)
            ];
          case 3:
            return o.sent(), [
              4,
              U(t)
            ];
          case 4:
            return e = o.sent(), [
              3,
              2
            ];
          case 5:
            return 0 !== e.registrationStatus ? [
              3,
              7
            ] : [
              4,
              x(t)
            ];
          case 6:
            return n = o.sent(), i = n.installationEntry, (r = n.registrationPromise) ? [
              2,
              r
            ] : [
              2,
              i
            ];
          case 7:
            return [
              2,
              e
            ];
          }
        });
      });
    }
    function U(t) {
      return M(t, function (t) {
        if (!t)
          throw f.create('installation-not-found');
        return F(t);
      });
    }
    function F(t) {
      return 1 === (e = t).registrationStatus && e.registrationTime + 10000 < Date.now() ? {
        fid: t.fid,
        registrationStatus: 0
      } : t;
      var e;
    }
    function H(t, e) {
      var n = t.appConfig, i = t.platformLoggerProvider;
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var t, r, o, a, u, c, h;
        return Object(s.__generator)(this, function (s) {
          switch (s.label) {
          case 0:
            return t = function (t, e) {
              var n = e.fid;
              return d(t) + '/' + n + '/authTokens:generate';
            }(n, e), r = m(n, e), (o = i.getImmediate({ optional: !0 })) && r.append('x-firebase-client', o.getPlatformInfoString()), a = { installation: { sdkVersion: 'w:0.4.17' } }, u = {
              method: 'POST',
              headers: r,
              body: JSON.stringify(a)
            }, [
              4,
              b(function () {
                return fetch(t, u);
              })
            ];
          case 1:
            return (c = s.sent()).ok ? [
              4,
              c.json()
            ] : [
              3,
              3
            ];
          case 2:
            return h = s.sent(), [
              2,
              p(h)
            ];
          case 3:
            return [
              4,
              v('Generate Auth Token', c)
            ];
          case 4:
            throw s.sent();
          }
        });
      });
    }
    function B(t, e) {
      return void 0 === e && (e = !1), Object(s.__awaiter)(this, void 0, void 0, function () {
        var n, i, r;
        return Object(s.__generator)(this, function (o) {
          switch (o.label) {
          case 0:
            return [
              4,
              M(t.appConfig, function (i) {
                if (!K(i))
                  throw f.create('not-registered');
                var r = i.authToken;
                if (!e && function (t) {
                    return 2 === t.requestStatus && !function (t) {
                      var e = Date.now();
                      return e < t.creationTime || t.creationTime + t.expiresIn < e + 3600000;
                    }(t);
                  }(r))
                  return i;
                if (1 === r.requestStatus)
                  return n = function (t, e) {
                    return Object(s.__awaiter)(this, void 0, void 0, function () {
                      var n, i;
                      return Object(s.__generator)(this, function (r) {
                        switch (r.label) {
                        case 0:
                          return [
                            4,
                            q(t.appConfig)
                          ];
                        case 1:
                          n = r.sent(), r.label = 2;
                        case 2:
                          return 1 !== n.authToken.requestStatus ? [
                            3,
                            5
                          ] : [
                            4,
                            w(100)
                          ];
                        case 3:
                          return r.sent(), [
                            4,
                            q(t.appConfig)
                          ];
                        case 4:
                          return n = r.sent(), [
                            3,
                            2
                          ];
                        case 5:
                          return 0 === (i = n.authToken).requestStatus ? [
                            2,
                            B(t, e)
                          ] : [
                            2,
                            i
                          ];
                        }
                      });
                    });
                  }(t, e), i;
                if (!navigator.onLine)
                  throw f.create('app-offline');
                var o = function (t) {
                  var e = {
                    requestStatus: 1,
                    requestTime: Date.now()
                  };
                  return Object(s.__assign)(Object(s.__assign)({}, t), { authToken: e });
                }(i);
                return n = function (t, e) {
                  return Object(s.__awaiter)(this, void 0, void 0, function () {
                    var n, i, r;
                    return Object(s.__generator)(this, function (o) {
                      switch (o.label) {
                      case 0:
                        return o.trys.push([
                          0,
                          3,
                          ,
                          8
                        ]), [
                          4,
                          H(t, e)
                        ];
                      case 1:
                        return n = o.sent(), r = Object(s.__assign)(Object(s.__assign)({}, e), { authToken: n }), [
                          4,
                          L(t.appConfig, r)
                        ];
                      case 2:
                        return o.sent(), [
                          2,
                          n
                        ];
                      case 3:
                        return !l(i = o.sent()) || 401 !== i.serverCode && 404 !== i.serverCode ? [
                          3,
                          5
                        ] : [
                          4,
                          j(t.appConfig)
                        ];
                      case 4:
                        return o.sent(), [
                          3,
                          7
                        ];
                      case 5:
                        return r = Object(s.__assign)(Object(s.__assign)({}, e), { authToken: { requestStatus: 0 } }), [
                          4,
                          L(t.appConfig, r)
                        ];
                      case 6:
                        o.sent(), o.label = 7;
                      case 7:
                        throw i;
                      case 8:
                        return [2];
                      }
                    });
                  });
                }(t, o), o;
              })
            ];
          case 1:
            return i = o.sent(), n ? [
              4,
              n
            ] : [
              3,
              3
            ];
          case 2:
            return r = o.sent(), [
              3,
              4
            ];
          case 3:
            r = i.authToken, o.label = 4;
          case 4:
            return [
              2,
              r
            ];
          }
        });
      });
    }
    function q(t) {
      return M(t, function (t) {
        if (!K(t))
          throw f.create('not-registered');
        var e, n = t.authToken;
        return 1 === (e = n).requestStatus && e.requestTime + 10000 < Date.now() ? Object(s.__assign)(Object(s.__assign)({}, t), { authToken: { requestStatus: 0 } }) : t;
      });
    }
    function K(t) {
      return void 0 !== t && 2 === t.registrationStatus;
    }
    function G(t) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var e;
        return Object(s.__generator)(this, function (n) {
          switch (n.label) {
          case 0:
            return [
              4,
              x(t)
            ];
          case 1:
            return (e = n.sent().registrationPromise) ? [
              4,
              e
            ] : [
              3,
              3
            ];
          case 2:
            n.sent(), n.label = 3;
          case 3:
            return [2];
          }
        });
      });
    }
    function W(t, e) {
      return Object(s.__awaiter)(this, void 0, void 0, function () {
        var n, i, r, o;
        return Object(s.__generator)(this, function (a) {
          switch (a.label) {
          case 0:
            return n = function (t, e) {
              var n = e.fid;
              return d(t) + '/' + n;
            }(t, e), i = m(t, e), r = {
              method: 'DELETE',
              headers: i
            }, [
              4,
              b(function () {
                return fetch(n, r);
              })
            ];
          case 1:
            return (o = a.sent()).ok ? [
              3,
              3
            ] : [
              4,
              v('Delete Installation', o)
            ];
          case 2:
            throw a.sent();
          case 3:
            return [2];
          }
        });
      });
    }
    function J(t, e) {
      var n = t.appConfig;
      return function (t, e) {
        N();
        var n = T(t), i = _.get(n);
        i || (i = new Set(), _.set(n, i)), i.add(e);
      }(n, e), function () {
        !function (t, e) {
          var n = T(t), i = _.get(n);
          i && (i.delete(e), 0 === i.size && _.delete(n), O());
        }(n, e);
      };
    }
    function X(t) {
      return f.create('missing-app-config-values', { valueName: t });
    }
    (C = o.a).INTERNAL.registerComponent(new a.Component('installations', function (t) {
      var e = t.getProvider('app').getImmediate(), n = {
          appConfig: function (t) {
            var e, n;
            if (!t || !t.options)
              throw X('App Configuration');
            if (!t.name)
              throw X('App Name');
            try {
              for (var i = Object(s.__values)([
                    'projectId',
                    'apiKey',
                    'appId'
                  ]), r = i.next(); !r.done; r = i.next()) {
                var o = r.value;
                if (!t.options[o])
                  throw X(o);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                r && !r.done && (n = i.return) && n.call(i);
              } finally {
                if (e)
                  throw e.error;
              }
            }
            return {
              appName: t.name,
              projectId: t.options.projectId,
              apiKey: t.options.apiKey,
              appId: t.options.appId
            };
          }(e),
          platformLoggerProvider: t.getProvider('platform-logger')
        };
      return {
        app: e,
        getId: function () {
          return function (t) {
            return Object(s.__awaiter)(this, void 0, void 0, function () {
              var e, n, i;
              return Object(s.__generator)(this, function (r) {
                switch (r.label) {
                case 0:
                  return [
                    4,
                    x(t.appConfig)
                  ];
                case 1:
                  return e = r.sent(), n = e.installationEntry, (i = e.registrationPromise) ? i.catch(console.error) : B(t).catch(console.error), [
                    2,
                    n.fid
                  ];
                }
              });
            });
          }(n);
        },
        getToken: function (t) {
          return function (t, e) {
            return void 0 === e && (e = !1), Object(s.__awaiter)(this, void 0, void 0, function () {
              return Object(s.__generator)(this, function (n) {
                switch (n.label) {
                case 0:
                  return [
                    4,
                    G(t.appConfig)
                  ];
                case 1:
                  return n.sent(), [
                    4,
                    B(t, e)
                  ];
                case 2:
                  return [
                    2,
                    n.sent().token
                  ];
                }
              });
            });
          }(n, t);
        },
        delete: function () {
          return function (t) {
            return Object(s.__awaiter)(this, void 0, void 0, function () {
              var e, n;
              return Object(s.__generator)(this, function (i) {
                switch (i.label) {
                case 0:
                  return [
                    4,
                    M(e = t.appConfig, function (t) {
                      if (!t || 0 !== t.registrationStatus)
                        return t;
                    })
                  ];
                case 1:
                  if (!(n = i.sent()))
                    return [
                      3,
                      6
                    ];
                  if (1 !== n.registrationStatus)
                    return [
                      3,
                      2
                    ];
                  throw f.create('delete-pending-registration');
                case 2:
                  if (2 !== n.registrationStatus)
                    return [
                      3,
                      6
                    ];
                  if (navigator.onLine)
                    return [
                      3,
                      3
                    ];
                  throw f.create('app-offline');
                case 3:
                  return [
                    4,
                    W(e, n)
                  ];
                case 4:
                  return i.sent(), [
                    4,
                    j(e)
                  ];
                case 5:
                  i.sent(), i.label = 6;
                case 6:
                  return [2];
                }
              });
            });
          }(n);
        },
        onIdChange: function (t) {
          return J(n, t);
        }
      };
    }, 'PUBLIC')), C.registerVersion('@firebase/installations', '0.4.17');
  },
  hjJp: function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = n('mrSG'), r = n('zwdx'), o = function () {
        function t(t, e, n) {
          this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = 'LAZY';
        }
        return t.prototype.setInstantiationMode = function (t) {
          return this.instantiationMode = t, this;
        }, t.prototype.setMultipleInstances = function (t) {
          return this.multipleInstances = t, this;
        }, t.prototype.setServiceProps = function (t) {
          return this.serviceProps = t, this;
        }, t;
      }(), a = function () {
        function t(t, e) {
          this.name = t, this.container = e, this.component = null, this.instances = new Map(), this.instancesDeferred = new Map();
        }
        return t.prototype.get = function (t) {
          void 0 === t && (t = '[DEFAULT]');
          var e = this.normalizeInstanceIdentifier(t);
          if (!this.instancesDeferred.has(e)) {
            var n = new r.Deferred();
            this.instancesDeferred.set(e, n);
            try {
              var i = this.getOrInitializeService(e);
              i && n.resolve(i);
            } catch (t) {
            }
          }
          return this.instancesDeferred.get(e).promise;
        }, t.prototype.getImmediate = function (t) {
          var e = i.__assign({
              identifier: '[DEFAULT]',
              optional: !1
            }, t), n = e.identifier, r = e.optional, o = this.normalizeInstanceIdentifier(n);
          try {
            var a = this.getOrInitializeService(o);
            if (!a) {
              if (r)
                return null;
              throw Error('Service ' + this.name + ' is not available');
            }
            return a;
          } catch (t) {
            if (r)
              return null;
            throw t;
          }
        }, t.prototype.getComponent = function () {
          return this.component;
        }, t.prototype.setComponent = function (t) {
          var e, n;
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
            for (var r = i.__values(this.instancesDeferred.entries()), o = r.next(); !o.done; o = r.next()) {
              var a = i.__read(o.value, 2), s = a[0], u = a[1], c = this.normalizeInstanceIdentifier(s);
              try {
                var h = this.getOrInitializeService(c);
                u.resolve(h);
              } catch (t) {
              }
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              o && !o.done && (n = r.return) && n.call(r);
            } finally {
              if (e)
                throw e.error;
            }
          }
        }, t.prototype.clearInstance = function (t) {
          void 0 === t && (t = '[DEFAULT]'), this.instancesDeferred.delete(t), this.instances.delete(t);
        }, t.prototype.delete = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            var t;
            return i.__generator(this, function (e) {
              switch (e.label) {
              case 0:
                return t = Array.from(this.instances.values()), [
                  4,
                  Promise.all(i.__spread(t.filter(function (t) {
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
    var s = function () {
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
        var e = new a(t, this);
        return this.providers.set(t, e), e;
      }, t.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }, t;
    }();
    e.Component = o, e.ComponentContainer = s, e.Provider = a;
  },
  'q/0M': function (t, e, n) {
    'use strict';
    function i() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var i = Array(t), r = 0;
      for (e = 0; e < n; e++)
        for (var o = arguments[e], a = 0, s = o.length; a < s; a++, r++)
          i[r] = o[a];
      return i;
    }
    var r;
    n.r(e), n.d(e, 'LogLevel', function () {
      return o;
    }), n.d(e, 'Logger', function () {
      return f;
    }), n.d(e, 'setLogLevel', function () {
      return l;
    }), n.d(e, 'setUserLogHandler', function () {
      return d;
    });
    var o, a = [];
    !function (t) {
      t[t.DEBUG = 0] = 'DEBUG', t[t.VERBOSE = 1] = 'VERBOSE', t[t.INFO = 2] = 'INFO', t[t.WARN = 3] = 'WARN', t[t.ERROR = 4] = 'ERROR', t[t.SILENT = 5] = 'SILENT';
    }(o || (o = {}));
    var s = {
        debug: o.DEBUG,
        verbose: o.VERBOSE,
        info: o.INFO,
        warn: o.WARN,
        error: o.ERROR,
        silent: o.SILENT
      }, u = o.INFO, c = ((r = {})[o.DEBUG] = 'log', r[o.VERBOSE] = 'log', r[o.INFO] = 'info', r[o.WARN] = 'warn', r[o.ERROR] = 'error', r), h = function (t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var o = new Date().toISOString(), a = c[e];
          if (!a)
            throw new Error('Attempted to log a message with an invalid logType (value: ' + e + ')');
          console[a].apply(console, i(['[' + o + ']  ' + t.name + ':'], n));
        }
      }, f = function () {
        function t(t) {
          this.name = t, this._logLevel = u, this._logHandler = h, this._userLogHandler = null, a.push(this);
        }
        return Object.defineProperty(t.prototype, 'logLevel', {
          get: function () {
            return this._logLevel;
          },
          set: function (t) {
            if (!(t in o))
              throw new TypeError('Invalid value "' + t + '" assigned to `logLevel`');
            this._logLevel = t;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.setLogLevel = function (t) {
          this._logLevel = 'string' == typeof t ? s[t] : t;
        }, Object.defineProperty(t.prototype, 'logHandler', {
          get: function () {
            return this._logHandler;
          },
          set: function (t) {
            if ('function' != typeof t)
              throw new TypeError('Value assigned to `logHandler` must be a function');
            this._logHandler = t;
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, 'userLogHandler', {
          get: function () {
            return this._userLogHandler;
          },
          set: function (t) {
            this._userLogHandler = t;
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.debug = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, i([
            this,
            o.DEBUG
          ], t)), this._logHandler.apply(this, i([
            this,
            o.DEBUG
          ], t));
        }, t.prototype.log = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, i([
            this,
            o.VERBOSE
          ], t)), this._logHandler.apply(this, i([
            this,
            o.VERBOSE
          ], t));
        }, t.prototype.info = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, i([
            this,
            o.INFO
          ], t)), this._logHandler.apply(this, i([
            this,
            o.INFO
          ], t));
        }, t.prototype.warn = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, i([
            this,
            o.WARN
          ], t)), this._logHandler.apply(this, i([
            this,
            o.WARN
          ], t));
        }, t.prototype.error = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          this._userLogHandler && this._userLogHandler.apply(this, i([
            this,
            o.ERROR
          ], t)), this._logHandler.apply(this, i([
            this,
            o.ERROR
          ], t));
        }, t;
      }();
    function l(t) {
      a.forEach(function (e) {
        e.setLogLevel(t);
      });
    }
    function d(t, e) {
      for (var n = function (n) {
            var i = null;
            e && e.level && (i = s[e.level]), n.userLogHandler = null === t ? null : function (e, n) {
              for (var r = [], a = 2; a < arguments.length; a++)
                r[a - 2] = arguments[a];
              var s = r.map(function (t) {
                if (null == t)
                  return null;
                if ('string' == typeof t)
                  return t;
                if ('number' == typeof t || 'boolean' == typeof t)
                  return t.toString();
                if (t instanceof Error)
                  return t.message;
                try {
                  return JSON.stringify(t);
                } catch (t) {
                  return null;
                }
              }).filter(function (t) {
                return t;
              }).join(' ');
              n >= (null != i ? i : e.logLevel) && t({
                level: o[n].toLowerCase(),
                message: s,
                args: r,
                type: e.name
              });
            };
          }, i = 0, r = a; i < r.length; i++) {
        n(r[i]);
      }
    }
  },
  zwdx: function (t, e, n) {
    'use strict';
    (function (t) {
      function i(t) {
        return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
        })(t);
      }
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n('mrSG'), o = {
          NODE_CLIENT: !1,
          NODE_ADMIN: !1,
          SDK_VERSION: '${JSCORE_VERSION}'
        }, a = function (t, e) {
          if (!t)
            throw s(e);
        }, s = function (t) {
          return new Error('Firebase Database (' + o.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + t);
        }, u = function (t) {
          for (var e = [], n = 0, i = 0; i < t.length; i++) {
            var r = t.charCodeAt(i);
            r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = 63 & r | 128) : 55296 == (64512 & r) && i + 1 < t.length && 56320 == (64512 & t.charCodeAt(i + 1)) ? (r = 65536 + ((1023 & r) << 10) + (1023 & t.charCodeAt(++i)), e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128) : (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128);
          }
          return e;
        }, c = {
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
            for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, i = [], r = 0; r < t.length; r += 3) {
              var o = t[r], a = r + 1 < t.length, s = a ? t[r + 1] : 0, u = r + 2 < t.length, c = u ? t[r + 2] : 0, h = o >> 2, f = (3 & o) << 4 | s >> 4, l = (15 & s) << 2 | c >> 6, d = 63 & c;
              u || (d = 64, a || (l = 64)), i.push(n[h], n[f], n[l], n[d]);
            }
            return i.join('');
          },
          encodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(u(t), e);
          },
          decodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function (t) {
              for (var e = [], n = 0, i = 0; n < t.length;) {
                var r = t[n++];
                if (r < 128)
                  e[i++] = String.fromCharCode(r);
                else if (r > 191 && r < 224) {
                  var o = t[n++];
                  e[i++] = String.fromCharCode((31 & r) << 6 | 63 & o);
                } else if (r > 239 && r < 365) {
                  var a = ((7 & r) << 18 | (63 & (o = t[n++])) << 12 | (63 & (s = t[n++])) << 6 | 63 & t[n++]) - 65536;
                  e[i++] = String.fromCharCode(55296 + (a >> 10)), e[i++] = String.fromCharCode(56320 + (1023 & a));
                } else {
                  o = t[n++];
                  var s = t[n++];
                  e[i++] = String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & s);
                }
              }
              return e.join('');
            }(this.decodeStringToByteArray(t, e));
          },
          decodeStringToByteArray: function (t, e) {
            this.init_();
            for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, i = [], r = 0; r < t.length;) {
              var o = n[t.charAt(r++)], a = r < t.length ? n[t.charAt(r)] : 0, s = ++r < t.length ? n[t.charAt(r)] : 64, u = ++r < t.length ? n[t.charAt(r)] : 64;
              if (++r, null == o || null == a || null == s || null == u)
                throw Error();
              var c = o << 2 | a >> 4;
              if (i.push(c), 64 !== s) {
                var h = a << 4 & 240 | s >> 2;
                if (i.push(h), 64 !== u) {
                  var f = s << 6 & 192 | u;
                  i.push(f);
                }
              }
            }
            return i;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
              for (var t = 0; t < this.ENCODED_VALS.length; t++)
                this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
            }
          }
        }, h = function (t) {
          try {
            return c.decodeString(t, !0);
          } catch (t) {
            console.error('base64Decode failed: ', t);
          }
          return null;
        };
      function f(t, e) {
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
        for (var n in e)
          e.hasOwnProperty(n) && (t[n] = f(t[n], e[n]));
        return t;
      }
      var l = function () {
        function t() {
          var t = this;
          this.reject = function () {
          }, this.resolve = function () {
          }, this.promise = new Promise(function (e, n) {
            t.resolve = e, t.reject = n;
          });
        }
        return t.prototype.wrapCallback = function (t) {
          var e = this;
          return function (n, i) {
            n ? e.reject(n) : e.resolve(i), 'function' == typeof t && (e.promise.catch(function () {
            }), 1 === t.length ? t(n) : t(n, i));
          };
        }, t;
      }();
      function d() {
        return 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent ? navigator.userAgent : '';
      }
      function p() {
        try {
          return '[object process]' === Object.prototype.toString.call(t.process);
        } catch (t) {
          return !1;
        }
      }
      var v = function (t) {
          function e(n, i) {
            var r = t.call(this, i) || this;
            return r.code = n, r.name = 'FirebaseError', Object.setPrototypeOf(r, e.prototype), Error.captureStackTrace && Error.captureStackTrace(r, g.prototype.create), r;
          }
          return r.__extends(e, t), e;
        }(Error), g = function () {
          function t(t, e, n) {
            this.service = t, this.serviceName = e, this.errors = n;
          }
          return t.prototype.create = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            for (var i = e[0] || {}, r = this.service + '/' + t, o = this.errors[t], a = o ? m(o, i) : 'Error', s = this.serviceName + ': ' + a + ' (' + r + ').', u = new v(r, s), c = 0, h = Object.keys(i); c < h.length; c++) {
              var f = h[c];
              '_' !== f.slice(-1) && (f in u && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), u[f] = i[f]);
            }
            return u;
          }, t;
        }();
      function m(t, e) {
        return t.replace(b, function (t, n) {
          var i = e[n];
          return null != i ? String(i) : '<' + n + '?>';
        });
      }
      var b = /\{\$([^}]+)}/g;
      function y(t) {
        return JSON.parse(t);
      }
      var w = function (t) {
        var e = {}, n = {}, i = {}, r = '';
        try {
          var o = t.split('.');
          e = y(h(o[0]) || ''), n = y(h(o[1]) || ''), r = o[2], i = n.d || {}, delete n.d;
        } catch (t) {
        }
        return {
          header: e,
          claims: n,
          data: i,
          signature: r
        };
      };
      var I = function () {
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
          var n = this.W_;
          if ('string' == typeof t)
            for (var i = 0; i < 16; i++)
              n[i] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
          else
            for (i = 0; i < 16; i++)
              n[i] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4;
          for (i = 16; i < 80; i++) {
            var r = n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16];
            n[i] = 4294967295 & (r << 1 | r >>> 31);
          }
          var o, a, s = this.chain_[0], u = this.chain_[1], c = this.chain_[2], h = this.chain_[3], f = this.chain_[4];
          for (i = 0; i < 80; i++) {
            i < 40 ? i < 20 ? (o = h ^ u & (c ^ h), a = 1518500249) : (o = u ^ c ^ h, a = 1859775393) : i < 60 ? (o = u & c | h & (u | c), a = 2400959708) : (o = u ^ c ^ h, a = 3395469782);
            r = (s << 5 | s >>> 27) + o + f + a + n[i] & 4294967295;
            f = h, h = c, c = 4294967295 & (u << 30 | u >>> 2), u = s, s = r;
          }
          this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + u & 4294967295, this.chain_[2] = this.chain_[2] + c & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + f & 4294967295;
        }, t.prototype.update = function (t, e) {
          if (null != t) {
            void 0 === e && (e = t.length);
            for (var n = e - this.blockSize, i = 0, r = this.buf_, o = this.inbuf_; i < e;) {
              if (0 === o)
                for (; i <= n;)
                  this.compress_(t, i), i += this.blockSize;
              if ('string' == typeof t) {
                for (; i < e;)
                  if (r[o] = t.charCodeAt(i), ++i, ++o === this.blockSize) {
                    this.compress_(r), o = 0;
                    break;
                  }
              } else
                for (; i < e;)
                  if (r[o] = t[i], ++i, ++o === this.blockSize) {
                    this.compress_(r), o = 0;
                    break;
                  }
            }
            this.inbuf_ = o, this.total_ += e;
          }
        }, t.prototype.digest = function () {
          var t = [], e = 8 * this.total_;
          this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
          for (var n = this.blockSize - 1; n >= 56; n--)
            this.buf_[n] = 255 & e, e /= 256;
          this.compress_(this.buf_);
          var i = 0;
          for (n = 0; n < 5; n++)
            for (var r = 24; r >= 0; r -= 8)
              t[i] = this.chain_[n] >> r & 255, ++i;
          return t;
        }, t;
      }();
      var E = function () {
        function t(t, e) {
          var n = this;
          this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function () {
            t(n);
          }).catch(function (t) {
            n.error(t);
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
        }, t.prototype.subscribe = function (t, e, n) {
          var r, o = this;
          if (void 0 === t && void 0 === e && void 0 === n)
            throw new Error('Missing Observer.');
          void 0 === (r = function (t, e) {
            if ('object' !== i(t) || null === t)
              return !1;
            for (var n = 0, r = e; n < r.length; n++) {
              var o = r[n];
              if (o in t && 'function' == typeof t[o])
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
            complete: n
          }).next && (r.next = T), void 0 === r.error && (r.error = T), void 0 === r.complete && (r.complete = T);
          var a = this.unsubscribeOne.bind(this, this.observers.length);
          return this.finalized && this.task.then(function () {
            try {
              o.finalError ? r.error(o.finalError) : r.complete();
            } catch (t) {
            }
          }), this.observers.push(r), a;
        }, t.prototype.unsubscribeOne = function (t) {
          void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
        }, t.prototype.forEachObserver = function (t) {
          if (!this.finalized)
            for (var e = 0; e < this.observers.length; e++)
              this.sendOne(e, t);
        }, t.prototype.sendOne = function (t, e) {
          var n = this;
          this.task.then(function () {
            if (void 0 !== n.observers && void 0 !== n.observers[t])
              try {
                e(n.observers[t]);
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
      function T() {
      }
      function _(t, e, n) {
        var i = '';
        switch (e) {
        case 1:
          i = n ? 'first' : 'First';
          break;
        case 2:
          i = n ? 'second' : 'Second';
          break;
        case 3:
          i = n ? 'third' : 'Third';
          break;
        case 4:
          i = n ? 'fourth' : 'Fourth';
          break;
        default:
          throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }
        var r = t + ' failed: ';
        return r += i + ' argument ';
      }
      e.CONSTANTS = o, e.Deferred = l, e.ErrorFactory = g, e.FirebaseError = v, e.MAX_VALUE_MILLIS = 14400000, e.RANDOM_FACTOR = 0.5, e.Sha1 = I, e.areCookiesEnabled = function () {
        return !(!navigator || !navigator.cookieEnabled);
      }, e.assert = a, e.assertionError = s, e.async = function (t, e) {
        return function () {
          for (var n = [], i = 0; i < arguments.length; i++)
            n[i] = arguments[i];
          Promise.resolve(!0).then(function () {
            t.apply(void 0, n);
          }).catch(function (t) {
            e && e(t);
          });
        };
      }, e.base64 = c, e.base64Decode = h, e.base64Encode = function (t) {
        var e = u(t);
        return c.encodeByteArray(e, !0);
      }, e.calculateBackoffMillis = function (t, e, n) {
        void 0 === e && (e = 1000), void 0 === n && (n = 2);
        var i = e * Math.pow(n, t), r = Math.round(0.5 * i * (Math.random() - 0.5) * 2);
        return Math.min(14400000, i + r);
      }, e.contains = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, e.createSubscribe = function (t, e) {
        var n = new E(t, e);
        return n.subscribe.bind(n);
      }, e.decode = w, e.deepCopy = function (t) {
        return f(void 0, t);
      }, e.deepExtend = f, e.errorPrefix = _, e.getUA = d, e.isAdmin = function (t) {
        var e = w(t).claims;
        return 'object' === i(e) && !0 === e.admin;
      }, e.isBrowser = function () {
        return 'object' === ('undefined' == typeof self ? 'undefined' : i(self)) && self.self === self;
      }, e.isBrowserExtension = function () {
        var t = 'object' === ('undefined' == typeof chrome ? 'undefined' : i(chrome)) ? chrome.runtime : 'object' === ('undefined' == typeof browser ? 'undefined' : i(browser)) ? browser.runtime : void 0;
        return 'object' === i(t) && void 0 !== t.id;
      }, e.isElectron = function () {
        return d().indexOf('Electron/') >= 0;
      }, e.isEmpty = function (t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e))
            return !1;
        return !0;
      }, e.isIE = function () {
        var t = d();
        return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
      }, e.isIndexedDBAvailable = function () {
        return 'indexedDB' in self && null != indexedDB;
      }, e.isMobileCordova = function () {
        return 'undefined' != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d());
      }, e.isNode = p, e.isNodeSdk = function () {
        return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN;
      }, e.isReactNative = function () {
        return 'object' === ('undefined' == typeof navigator ? 'undefined' : i(navigator)) && 'ReactNative' === navigator.product;
      }, e.isSafari = function () {
        return !p() && navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome');
      }, e.isUWP = function () {
        return d().indexOf('MSAppHost/') >= 0;
      }, e.isValidFormat = function (t) {
        var e = w(t).claims;
        return !!e && 'object' === i(e) && e.hasOwnProperty('iat');
      }, e.isValidTimestamp = function (t) {
        var e = w(t).claims, n = Math.floor(new Date().getTime() / 1000), r = 0, o = 0;
        return 'object' === i(e) && (e.hasOwnProperty('nbf') ? r = e.nbf : e.hasOwnProperty('iat') && (r = e.iat), o = e.hasOwnProperty('exp') ? e.exp : r + 86400), !!n && !!r && !!o && n >= r && n <= o;
      }, e.issuedAtTime = function (t) {
        var e = w(t).claims;
        return 'object' === i(e) && e.hasOwnProperty('iat') ? e.iat : null;
      }, e.jsonEval = y, e.map = function (t, e, n) {
        var i = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (i[r] = e.call(n, t[r], r, t));
        return i;
      }, e.querystring = function (t) {
        for (var e = [], n = function (t, n) {
              Array.isArray(n) ? n.forEach(function (n) {
                e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n));
              }) : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n));
            }, i = 0, r = Object.entries(t); i < r.length; i++) {
          var o = r[i];
          n(o[0], o[1]);
        }
        return e.length ? '&' + e.join('&') : '';
      }, e.querystringDecode = function (t) {
        var e = {};
        return t.replace(/^\?/, '').split('&').forEach(function (t) {
          if (t) {
            var n = t.split('=');
            e[n[0]] = n[1];
          }
        }), e;
      }, e.safeGet = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
      }, e.stringLength = function (t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          var i = t.charCodeAt(n);
          i < 128 ? e++ : i < 2048 ? e += 2 : i >= 55296 && i <= 56319 ? (e += 4, n++) : e += 3;
        }
        return e;
      }, e.stringToByteArray = function (t) {
        for (var e = [], n = 0, i = 0; i < t.length; i++) {
          var r = t.charCodeAt(i);
          if (r >= 55296 && r <= 56319) {
            var o = r - 55296;
            i++, a(i < t.length, 'Surrogate pair missing trail surrogate.'), r = 65536 + (o << 10) + (t.charCodeAt(i) - 56320);
          }
          r < 128 ? e[n++] = r : r < 2048 ? (e[n++] = r >> 6 | 192, e[n++] = 63 & r | 128) : r < 65536 ? (e[n++] = r >> 12 | 224, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128) : (e[n++] = r >> 18 | 240, e[n++] = r >> 12 & 63 | 128, e[n++] = r >> 6 & 63 | 128, e[n++] = 63 & r | 128);
        }
        return e;
      }, e.stringify = function (t) {
        return JSON.stringify(t);
      }, e.validateArgCount = function (t, e, n, i) {
        var r;
        if (i < e ? r = 'at least ' + e : i > n && (r = 0 === n ? 'none' : 'no more than ' + n), r)
          throw new Error(t + ' failed: Was called with ' + i + (1 === i ? ' argument.' : ' arguments.') + ' Expects ' + r + '.');
      }, e.validateCallback = function (t, e, n, i) {
        if ((!i || n) && 'function' != typeof n)
          throw new Error(_(t, e, i) + 'must be a valid function.');
      }, e.validateContextObject = function (t, e, n, r) {
        if ((!r || n) && ('object' !== i(n) || null === n))
          throw new Error(_(t, e, r) + 'must be a valid context object.');
      }, e.validateIndexedDBOpenable = function () {
        return new Promise(function (t, e) {
          try {
            var n = !0, i = 'validate-browser-context-for-indexeddb-analytics-module', r = window.indexedDB.open(i);
            r.onsuccess = function () {
              r.result.close(), n || window.indexedDB.deleteDatabase(i), t(!0);
            }, r.onupgradeneeded = function () {
              n = !1;
            }, r.onerror = function () {
              var t;
              e((null === (t = r.error) || void 0 === t ? void 0 : t.message) || '');
            };
          } catch (t) {
            e(t);
          }
        });
      }, e.validateNamespace = function (t, e, n, i) {
        if ((!i || n) && 'string' != typeof n)
          throw new Error(_(t, e, i) + 'must be a valid firebase namespace.');
      };
    }.call(this, n('yLpj')));
  }
}]);