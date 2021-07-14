(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{
  '1OJt': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__playersContainer___hWzda-camelCase{flex-flow:row wrap;align-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__playerBox___3jcqL-camelCase,.styles__playersContainer___hWzda-camelCase{display:flex;justify-content:center}.styles__playerBox___3jcqL-camelCase{position:relative;flex-direction:column;align-items:center;box-sizing:border-box;box-shadow:0 0 6px 2px rgba(0,0,0,.15);margin:4px;border-radius:7px}.styles__placeText___3tFdv-camelCase{text-align:right;top:3%;right:17%;width:50%;height:22.5%}.styles__placeText___3tFdv-camelCase,.styles__superPlaceText___3Ayzm-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute}.styles__superPlaceText___3Ayzm-camelCase{text-align:left;top:3.5%;right:4%;width:12.5%;height:15%}.styles__blookBox___29ux1-camelCase{height:55%;width:50%;margin-bottom:2.5%}.styles__nameText___3iN_k-camelCase{font-weight:700;width:95%;height:15%;font-family:Nunito,sans-serif;text-align:left;text-align:center}.styles__dmgContainer___12Nv6-camelCase,.styles__nameText___3iN_k-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__dmgContainer___12Nv6-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;height:12.5%}.styles__dmgText___2F3Sr-camelCase{height:100%;font-family:Nunito,sans-serif;text-align:right}.styles__dmgIcon___S5K0p-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:7px}.styles__particles___BOuEu-camelCase{opacity:0;-webkit-animation:styles__fadeIn___HwYyw-camelCase .5s linear 1s forwards;animation:styles__fadeIn___HwYyw-camelCase .5s linear 1s forwards}@-webkit-keyframes styles__fadeIn___HwYyw-camelCase{0%{opacity:0}to{opacity:1}}@keyframes styles__fadeIn___HwYyw-camelCase{0%{opacity:0}to{opacity:1}}',
      ''
    ]), t.locals = {
      playersContainer: 'styles__playersContainer___hWzda-camelCase',
      playerBox: 'styles__playerBox___3jcqL-camelCase',
      placeText: 'styles__placeText___3tFdv-camelCase',
      superPlaceText: 'styles__superPlaceText___3Ayzm-camelCase',
      blookBox: 'styles__blookBox___29ux1-camelCase',
      nameText: 'styles__nameText___3iN_k-camelCase',
      dmgContainer: 'styles__dmgContainer___12Nv6-camelCase',
      dmgText: 'styles__dmgText___2F3Sr-camelCase',
      dmgIcon: 'styles__dmgIcon___S5K0p-camelCase',
      particles: 'styles__particles___BOuEu-camelCase',
      fadeIn: 'styles__fadeIn___HwYyw-camelCase'
    };
  },
  '1Yba': function (e, t, a) {
    var s = a('Zqh3');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  '1vdX': function (e, t, a) {
    'use strict';
    (function (e) {
      var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), m = a('vDqi'), p = a.n(m), _ = a('TSYQ'), d = a.n(_), f = a('b6Qr'), h = a('yzbm'), y = a('WjD0'), g = a.n(y), b = a('anyA'), x = a('rvr9'), v = a('GIcp'), C = a.n(v), w = a('wQpl'), I = a.n(w), k = a('e47E'), E = a('iQ+n'), S = a('I0uU'), N = a('sN2k'), j = a('TN+F');
      function T(e) {
        return (T = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        })(e);
      }
      function O(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t && (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), a.push.apply(a, s);
        }
        return a;
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2 ? O(Object(a), !0).forEach(function (t) {
            H(e, t, a[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
          });
        }
        return e;
      }
      function H(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = a, e;
      }
      function z(e, t, a, s, n, r, o) {
        try {
          var i = e[r](o), l = i.value;
        } catch (e) {
          return void a(e);
        }
        i.done ? t(l) : Promise.resolve(l).then(s, n);
      }
      function P(e) {
        return function () {
          var t = this, a = arguments;
          return new Promise(function (s, n) {
            var r = e.apply(t, a);
            function o(e) {
              z(r, s, n, o, i, 'next', e);
            }
            function i(e) {
              z(r, s, n, o, i, 'throw', e);
            }
            o(void 0);
          });
        };
      }
      function B(e, t) {
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
        }
      }
      function D(e, t) {
        return (D = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        })(e, t);
      }
      function A(e) {
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
          var a, s = F(e);
          if (t) {
            var n = F(this).constructor;
            a = Reflect.construct(s, arguments, n);
          } else
            a = s.apply(this, arguments);
          return U(this, a);
        };
      }
      function U(e, t) {
        return !t || 'object' !== T(t) && 'function' != typeof t ? L(e) : t;
      }
      function L(e) {
        if (void 0 === e)
          throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
        return e;
      }
      function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
      }
      var q = function (t) {
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
        }(c, t);
        var a, s, r, o, i, l = A(c);
        function c(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, c), (t = l.call(this, e)).state = {
            game: {
              title: '',
              author: '',
              desc: '',
              id: '',
              coverImage: {},
              private: !1
            },
            coverImageFile: {},
            coverImageURL: '',
            titleError: '',
            descError: '',
            imageError: '',
            uploadingURL: !1,
            tempURL: '',
            urlError: '',
            loading: !1,
            oldImageExists: !1,
            oldImageRemoved: !1,
            showUnsplash: !1,
            unsplashURL: ''
          }, t.user = null, t.onEdit = t.onEdit.bind(L(t)), t.onTitleUpdate = t.onTitleUpdate.bind(L(t)), t.onDescUpdate = t.onDescUpdate.bind(L(t)), t.onURLUpdate = t.onURLUpdate.bind(L(t)), t.onImageDrop = t.onImageDrop.bind(L(t)), t.onURLSubmit = t.onURLSubmit.bind(L(t)), t;
        }
        return a = c, (s = [
          {
            key: 'componentDidMount',
            value: (i = P(regeneratorRuntime.mark(function e() {
              var t;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if (this.user = e.sent, this.user) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt('return', this.props.history.push('/login'));
                  case 5:
                    if (this.props.game && this.props.game.title) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt('return');
                  case 7:
                    t = this.props.game, this.setState({
                      game: {
                        title: t.title,
                        author: t.author,
                        desc: t.desc,
                        id: t.id,
                        coverImage: t.coverImage,
                        private: t.private
                      },
                      coverImageFile: t.coverImage,
                      coverImageURL: t.coverImage ? t.coverImage.url : '',
                      oldImageExists: t.coverImage
                    });
                  case 9:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function () {
              return i.apply(this, arguments);
            })
          },
          {
            key: 'onEdit',
            value: function (t) {
              var a = this;
              if (t.preventDefault(), !this.state.loading) {
                this.setState({ loading: !0 });
                var s = Object(j.z)(this.state.game.title), n = Object(j.y)(this.state.game.desc);
                this.setState({
                  titleError: s,
                  descError: n
                }), s || n ? this.setState({ loading: !1 }) : this.setState({ game: R(R({}, this.state.game), {}, { author: this.user.name }) }, function () {
                  if (a.state.coverImageFile && a.state.coverImageFile.size) {
                    p.a.defaults.headers.common = {};
                    var t = new g.a();
                    t.append('file', a.state.coverImageFile), t.append('tags', ''), t.append('upload_preset', 'normal'), t.append('api_key', e.env.CLOUDINARY_API_KEY), t.append('timestamp', parseInt(Date.now() / 1000, 10)), p.a.post('https://api.cloudinary.com/v1_1/blooket/image/upload', t, { headers: { 'X-Requested-With': 'XMLHttpRequest' } }).then(function (e) {
                      var t = {};
                      t.url = e.data.secure_url, t.id = e.data.public_id, p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/games/edit', {
                        id: a.state.game.id,
                        title: a.state.game.title.trim(),
                        author: a.state.game.author,
                        desc: a.state.game.desc.trim(),
                        coverImage: t,
                        prevImage: a.state.game.coverImage,
                        private: a.state.game.private,
                        upload: !1
                      }).then(function (e) {
                        a.setState({
                          game: R(R({}, a.state.game), {}, {
                            id: e.data._id,
                            coverImage: t
                          })
                        }, function () {
                          a.props.history.push('/edit?id='.concat(a.state.game.id));
                        });
                      }).catch(function (e) {
                        console.error(e);
                      });
                    }).catch(function (e) {
                      console.error(e);
                    });
                  } else {
                    var s = {}, n = {}, r = !1, o = a.state.coverImageURL || a.state.unsplashURL;
                    a.state.game.coverImage && a.state.game.coverImage.url && o ? o !== a.state.game.coverImage.url ? (n = a.state.game.coverImage, s.url = o, r = !0) : s = a.state.game.coverImage : o ? (s.url = o, r = !0) : a.state.oldImageRemoved ? n = a.state.game.coverImage : s = a.state.game.coverImage, a.state.unsplashURL && (s.id = 'u', r = !1), p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/games/edit', {
                      id: a.state.game.id,
                      title: a.state.game.title.trim(),
                      author: a.state.game.author,
                      desc: a.state.game.desc.trim(),
                      coverImage: s,
                      prevImage: n,
                      private: a.state.game.private,
                      upload: r
                    }).then(function (e) {
                      a.setState({
                        game: R(R({}, a.state.game), {}, {
                          id: e.data._id,
                          coverImage: s
                        })
                      }, function () {
                        a.props.createGame(a.state.game), a.props.history.push('/edit?id='.concat(a.state.game.id));
                      });
                    }).catch(function (e) {
                      console.error(e);
                    });
                  }
                });
              }
            }
          },
          {
            key: 'onTitleUpdate',
            value: function (e) {
              this.setState({
                game: R(R({}, this.state.game), {}, { title: e.target.value.slice(0, j.b) }),
                titleError: ''
              });
            }
          },
          {
            key: 'onDescUpdate',
            value: function (e) {
              this.setState({
                game: R(R({}, this.state.game), {}, { desc: e.target.value.slice(0, j.a) }),
                descError: ''
              });
            }
          },
          {
            key: 'onURLUpdate',
            value: function (e) {
              this.setState({
                tempURL: e.target.value,
                urlError: ''
              });
            }
          },
          {
            key: 'onURLSubmit',
            value: (o = P(regeneratorRuntime.mark(function e(t) {
              var a, s = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    if (t.preventDefault(), !this.loading) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt('return');
                  case 3:
                    return this.loading = !0, a = '', this.state.tempURL || (a = 'Where\'s the URL?'), e.next = 8, new Promise(function (e) {
                      p.a.get('/api/games/is-image', { params: { url: s.state.tempURL } }).then(function (t) {
                        e(t.data);
                      }).catch(e);
                    });
                  case 8:
                    e.sent || (a = 'We can\'t find a supported image for that URL.'), a ? this.setState({
                      imageError: '',
                      urlError: a
                    }) : this.setState({
                      imageError: '',
                      coverImageURL: this.state.tempURL,
                      coverImageFile: {},
                      tempURL: '',
                      uploadingURL: !1
                    }), this.loading = !1;
                  case 12:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            })), function (e) {
              return o.apply(this, arguments);
            })
          },
          {
            key: 'onImageDrop',
            value: function (e) {
              var t = e[0];
              t ? this.setState({
                imageError: '',
                coverImageFile: t,
                coverImageURL: URL.createObjectURL(t)
              }) : this.setState({
                imageError: 'Error Uploading the File.',
                coverImageFile: {},
                coverImageURL: ''
              });
            }
          },
          {
            key: 'render',
            value: function () {
              var e, t, a, s = this;
              if (!this.props.game || !this.props.game.title)
                return n.a.createElement(u.a, { to: '/login' });
              var r = n.a.createRef();
              return n.a.createElement('div', { className: f.isMobile ? C.a.mBody : C.a.body }, n.a.createElement(E.a, {
                title: 'Edit Set Info | Blooket',
                desc: 'Quickly and easily change a set\'s basic information including the title, description, cover image, and privacy setting.'
              }), n.a.createElement(k.a, {
                history: this.props.history,
                page: 'Create'
              }), n.a.createElement('div', { className: C.a.profileRegularBody }, n.a.createElement('div', { className: I.a.header }, 'Edit Info'), n.a.createElement('form', {
                onSubmit: this.onEdit,
                className: I.a.inputContainer
              }, n.a.createElement('div', { className: I.a.wideContainer }, n.a.createElement('div', { className: I.a.dropHolder }, this.state.coverImageURL || this.state.unsplashURL ? n.a.createElement('div', { className: I.a.imgContainer }, n.a.createElement('img', {
                src: this.state.coverImageURL || this.state.unsplashURL,
                alt: 'Upload',
                className: I.a.coverImage
              }), n.a.createElement('div', { className: I.a.removeImageContainer }), n.a.createElement('div', {
                className: I.a.removeImageButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  s.setState({
                    oldImageRemoved: s.state.oldImageExists,
                    coverImageURL: '',
                    coverImageFile: {},
                    unsplashURL: ''
                  });
                }
              }, n.a.createElement('i', { className: d()(I.a.removeImageIcon, 'fas fa-times') }), n.a.createElement('div', { className: I.a.removeImageText }, 'Remove'))) : n.a.createElement(h.a, {
                multiple: !1,
                accept: 'image/jpeg, image/png, image/gif',
                onDropAccepted: this.onImageDrop,
                onDropRejected: function () {
                  return s.setState({ imageError: 'Image Denied (Check Size < 2.5 MB)' });
                },
                className: I.a.dropContainer,
                activeClassName: I.a.activeDropContainer,
                ref: r,
                maxSize: 2500000,
                disableClick: !0
              }, n.a.createElement('div', { className: I.a.dropHeader }, 'Cover Image'), n.a.createElement('div', { className: I.a.dropText }, 'Drag and Drop an Image (Under 2.5 MB) or'), n.a.createElement('div', { className: I.a.uploadButtonContainer }, n.a.createElement('div', {
                className: I.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ showUnsplash: !0 });
                }
              }, n.a.createElement('i', { className: d()(I.a.uploadIcon, 'fas fa-image') }), n.a.createElement('div', { className: I.a.uploadText }, 'Image', n.a.createElement('br', null), 'Gallery')), n.a.createElement('div', {
                className: I.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return r.current.open();
                }
              }, n.a.createElement('i', { className: d()(I.a.uploadIcon, 'fas fa-file-upload') }), n.a.createElement('div', { className: I.a.uploadText }, 'Upload', n.a.createElement('br', null), 'a File')), n.a.createElement('div', {
                className: I.a.uploadButton,
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({ uploadingURL: !0 });
                }
              }, n.a.createElement('i', { className: d()(I.a.uploadIcon, 'fas fa-link') }), n.a.createElement('div', { className: I.a.uploadText }, 'Upload', n.a.createElement('br', null), 'by URL'))))), n.a.createElement('div', { className: I.a.upperRightContainer }, n.a.createElement('div', { className: I.a.titleHeader }, 'Title ', n.a.createElement('span', {
                style: {
                  fontSize: 24,
                  opacity: 0.8
                }
              }, '(required)')), n.a.createElement('input', {
                className: d()(I.a.input, (e = {}, H(e, I.a.inputFilled, this.state.game.title), H(e, I.a.inputError, this.state.titleError), e)),
                onChange: this.onTitleUpdate,
                type: 'text',
                placeholder: 'Add a descriptive title',
                value: this.state.game.title,
                autoFocus: f.isMobile ? '' : 'autofocus'
              }), n.a.createElement('div', { className: I.a.descHeader }, 'Description'), n.a.createElement('textarea', {
                className: d()(I.a.descInput, (t = {}, H(t, I.a.inputFilled, this.state.game.desc), H(t, I.a.inputError, this.state.descError), t)),
                onChange: this.onDescUpdate,
                value: this.state.game.desc,
                placeholder: 'Tell users about your question set',
                'data-gramm_editor': 'false'
              }))), n.a.createElement('div', { className: I.a.wideContainer }, n.a.createElement('div', { className: I.a.bottomLeftContainer }, n.a.createElement('div', { className: I.a.categoryContainer }, n.a.createElement('div', { className: I.a.categoryHeader }, 'Privacy Setting'), n.a.createElement('div', { className: I.a.categoryDesc }, 'This decides who can find and play your question set'), n.a.createElement('div', { className: I.a.privacyContainer }, n.a.createElement('div', {
                className: d()(I.a.privateButton, H({}, I.a.selected, !this.state.game.private)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  s.setState({ game: R(R({}, s.state.game), {}, { private: !1 }) });
                }
              }, n.a.createElement('i', { className: d()(I.a.privateIcon, 'fas fa-unlock') }), n.a.createElement('div', { className: I.a.privateTextContainer }, n.a.createElement('div', { className: I.a.privateHeader }, 'Public'), n.a.createElement('div', { className: I.a.privateText }, 'Playable by Everyone'))), n.a.createElement('div', {
                className: d()(I.a.privateButton, H({}, I.a.selected, this.state.game.private)),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  s.setState({ game: R(R({}, s.state.game), {}, { private: !0 }) });
                }
              }, n.a.createElement('i', { className: d()(I.a.privateIcon, 'fas fa-lock') }), n.a.createElement('div', { className: I.a.privateTextContainer }, n.a.createElement('div', { className: I.a.privateHeader }, 'Private'), n.a.createElement('div', { className: I.a.privateText }, 'Only Playable by You')))))), n.a.createElement('div', { className: I.a.bottomRightContainer }, this.state.loading ? n.a.createElement(S.a, null) : n.a.createElement('div', {
                type: 'submit',
                role: 'button',
                onClick: this.onEdit,
                className: d()(I.a.submitButton, (a = {}, H(a, I.a.buttonFilled, this.state.game.title), H(a, I.a.buttonError, this.state.titleError || this.state.descError), a)),
                tabIndex: 0
              }, n.a.createElement('i', { className: d()('fas fa-save', I.a.createIcon) }), 'Save'), this.state.titleError || this.state.descError || this.state.imageError ? n.a.createElement('div', { className: I.a.errorContainer }, n.a.createElement('i', { className: d()(I.a.errorIcon, 'fas fa-times-circle') }), n.a.createElement('div', { className: I.a.errorText }, this.state.titleError || this.state.descError || this.state.imageError)) : null)), n.a.createElement('div', { style: { height: 30 } }), n.a.createElement('input', {
                type: 'submit',
                style: {
                  opacity: 0,
                  display: 'none'
                }
              })), this.state.uploadingURL ? n.a.createElement('div', { className: C.a.modal }, n.a.createElement('form', {
                onSubmit: this.onURLSubmit,
                className: I.a.urlContainer
              }, n.a.createElement('div', { className: I.a.urlText }, 'Image URL Address'), n.a.createElement('i', {
                className: d()(I.a.urlCloseIcon, 'fas fa-times'),
                role: 'button',
                tabIndex: 0,
                onClick: function () {
                  return s.setState({
                    uploadingURL: !1,
                    tempURL: ''
                  });
                }
              }), n.a.createElement('input', {
                className: d()(I.a.urlInput, H({}, I.a.inputFilled, this.state.tempURL), H({}, I.a.inputError, this.state.urlError)),
                onChange: this.onURLUpdate,
                type: 'text',
                autoFocus: f.isMobile ? '' : 'autofocus'
              }), n.a.createElement('input', {
                type: 'submit',
                value: 'Upload',
                className: d()(I.a.urlButton, H({}, I.a.urlButtonFilled, this.state.tempURL), H({}, I.a.urlButtonError, this.state.urlError)),
                tabIndex: 0
              }), this.state.urlError ? n.a.createElement('div', { className: I.a.urlErrorContainer }, n.a.createElement('i', { className: d()(I.a.urlErrorIcon, 'fas fa-times-circle') }), n.a.createElement('div', { className: I.a.urlErrorText }, this.state.urlError)) : null)) : null), this.state.showUnsplash ? n.a.createElement(N.a, {
                select: function (e) {
                  return s.setState({
                    showUnsplash: !1,
                    unsplashURL: e
                  });
                },
                close: function () {
                  return s.setState({ showUnsplash: !1 });
                }
              }) : null);
            }
          }
        ]) && B(a.prototype, s), r && B(a, r), c;
      }(n.a.Component);
      q.propTypes = {
        game: l.a.object,
        createGame: l.a.func.isRequired,
        history: l.a.object.isRequired,
        user: l.a.object
      };
      t.a = Object(b.c)(Object(c.a)(Object(o.b)(function (e) {
        return { game: e.games.game };
      }, function (e) {
        return Object(r.b)({ createGame: x.a }, e);
      })(q)));
    }.call(this, a('8oxB')));
  },
  '3FX1': function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mLw1'), u = a('wIs1'), m = a('4HzQ'), p = a('2O3R'), _ = a('TSYQ'), d = a.n(_), f = a('vDqi'), h = a.n(f), y = a('mFsd'), g = a.n(y), b = a('wd/R'), x = a.n(b), v = (a('RiPy'), a('6bnt')), C = a('1b17'), w = a('5gLy'), I = a('K69b'), k = a('9IXX'), E = a('iQ+n'), S = a('GIcp'), N = a.n(S), j = a('P/0T'), T = a.n(j), O = a('kWb9'), R = a('DoX5'), H = a('TN+F'), z = a('C+um'), P = a.n(z), B = a('dJpi'), D = a.n(B), A = a('SdQT'), U = a('QAEw');
    function L(e) {
      return (L = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function F(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, r = void 0;
        try {
          for (var o, i = e[Symbol.iterator](); !(s = (o = i.next()).done) && (a.push(o.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, r = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw r;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return q(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return q(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function q(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function M(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function Q(e, t) {
      return (Q = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }
    function G(e) {
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
        var a, s = X(e);
        if (t) {
          var n = X(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return Y(this, a);
      };
    }
    function Y(e, t) {
      return !t || 'object' !== L(t) && 'function' != typeof t ? W(e) : t;
    }
    function W(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function X(e) {
      return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var K = [
        'https://res.cloudinary.com/blooket/image/upload/v1593095356/Media/defense/goldTile.svg',
        'https://res.cloudinary.com/blooket/image/upload/v1593095359/Media/defense/silverTile.svg',
        'https://res.cloudinary.com/blooket/image/upload/v1593095363/Media/defense/bronzeTile.svg'
      ], Z = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && Q(e, t);
        }(o, e);
        var t, a, s, r = G(o);
        function o(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          }(this, o), (t = r.call(this, e)).state = {
            timer: '00:00',
            players: [],
            muted: !!e.host && e.host.muted,
            event: {},
            eventName: ''
          }, t.ok = !1, t.getClients = t.getClients.bind(W(t)), t.changeMuted = t.changeMuted.bind(W(t)), t.goNext = t.goNext.bind(W(t)), t.audio = new Audio(P.a), t.audio.muted = t.state.muted, t;
        }
        return t = o, (a = [
          {
            key: 'componentDidMount',
            value: function () {
              var e = this;
              if (this.props.host && this.props.host.settings) {
                if (this.audio.volume = 0.2, this.audio.play(), this.audio.addEventListener('ended', function () {
                    e.audio.currentTime = 0, e.audio.play();
                  }, !1), h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, this.props.firebase.setStage({
                    id: this.props.host.id,
                    stage: 'def'
                  }), 'Time' === this.props.host.settings.mode) {
                  var t = 60 * this.props.host.settings.amount, a = 4;
                  this.setState({ timer: x.a.duration(t, 'seconds').format('mm:ss') }), this.timerInterval = setInterval(function () {
                    if (t -= 1, e.setState({ timer: x.a.duration(t, 'seconds').format('mm:ss') }), 40 === t && e.props.host.settings.amount > 1) {
                      clearInterval(e.eventInterval);
                      var s = I.a['Final Boss'];
                      e.props.firebase.setVal({
                        id: e.props.host.id,
                        path: 'ev',
                        val: s.short
                      }, function () {
                        e.setState({
                          event: s,
                          eventName: 'Final Boss'
                        }, function () {
                          e.eventTimeout = setTimeout(function () {
                            e.setState({
                              event: {},
                              eventName: ''
                            }), e.props.firebase.setVal({
                              id: e.props.host.id,
                              path: 'ev',
                              val: ''
                            });
                          }, 6000);
                        });
                      });
                    }
                    t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1), a = 4) : a -= 1;
                  }, 1000);
                } else
                  this.getClients(), this.clientsInterval = setInterval(function () {
                    e.getClients(!1);
                  }, 4000);
                this.eventInterval = setInterval(function () {
                  if (!(e.state.timer && e.state.timer.length < 3)) {
                    e.state.muted || new Audio(D.a).play();
                    var t = Object(H.r)(Object.values(I.a), 1)[0], a = I.b[t.short];
                    e.props.firebase.setVal({
                      id: e.props.host.id,
                      path: 'ev',
                      val: t.short
                    }, function () {
                      e.setState({
                        event: t,
                        eventName: a
                      }, function () {
                        e.eventTimeout = setTimeout(function () {
                          e.setState({
                            event: {},
                            eventName: ''
                          }), e.props.firebase.setVal({
                            id: e.props.host.id,
                            path: 'ev',
                            val: ''
                          });
                        }, 6000);
                      });
                    });
                  }
                }, 90000);
              }
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              var e = this;
              clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearInterval(this.eventInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), window.removeEventListener('beforeunload', H.u)), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener('ended', function () {
                e.audio.currentTime = 0, e.audio.play();
              }, !1);
            }
          },
          {
            key: 'getClients',
            value: function (e) {
              var t = this;
              this.props.firebase.getDatabaseVal(this.props.host.id, 'c', function (a) {
                var s = a || {};
                if (s && 0 !== Object.keys(s).length) {
                  var n = !1, r = [];
                  Object.entries(s).forEach(function (e) {
                    var t = F(e, 2), a = t[0], s = t[1];
                    r.push({
                      name: a,
                      blook: s.b,
                      dmg: s.d || 0
                    });
                  }), r.sort(function (e, t) {
                    return t.dmg - e.dmg;
                  });
                  for (var o = 0; o < r.length; o++)
                    r[o].place = o + 1, 'Amount' === t.props.host.settings.mode && r[o].dmg >= t.props.host.settings.amount && (n = !0);
                  n || e ? t.goNext([].concat(r)) : t.setState({ players: r });
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
                  d: e.dmg,
                  p: e.place
                };
              });
              this.props.firebase.setVal({
                id: this.props.host.id,
                path: 'st',
                val: a
              }, function () {
                h.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, t.props.firebase.setStage({
                  id: t.props.host.id,
                  stage: 'fin'
                }, function () {
                  t.ok = !0, t.props.history.push('/host/defense/final');
                });
              });
            }
          },
          {
            key: 'render',
            value: function () {
              var e = this;
              if (!this.props.host || !this.props.host.settings)
                return n.a.createElement(c.a, { to: '/dashboard' });
              var t = function (e) {
                for (var t = Object(H.C)('100vw') - 80, a = Object(H.C)('100vh') - 65 - 80, s = t / a, n = Math.sqrt(e * s), r = e / n, o = Math.ceil(r), i = Math.ceil(e / o); o * s < i;)
                  o += 1, i = Math.ceil(e / o);
                for (var l = a / o, c = Math.ceil(n), u = Math.ceil(e / c); c < u * s;)
                  c += 1, u = Math.ceil(e / c);
                var m = t / c;
                return Math.max(l, m, 80);
              }(this.state.players.length);
              return n.a.createElement('div', {
                className: N.a.body,
                style: { overflow: 'hidden' }
              }, n.a.createElement(E.a, {
                title: 'Host Blooket',
                desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
              }), n.a.createElement(k.a, {
                left: 'Blooket',
                center: 'Time' === this.props.host.settings.mode ? this.state.timer : 'Goal: '.concat(Object(H.n)(this.props.host.settings.amount)),
                right: this.props.host.settings.lateJoin ? 'ID: '.concat(this.props.host.id) : '',
                muted: this.state.muted,
                changeMuted: this.changeMuted,
                onRightClick: function () {
                  return e.getClients(!0);
                }
              }), n.a.createElement('div', { className: N.a.hostRegularBody }, n.a.createElement(g.a, {
                height: 'calc(100vh - 59px)',
                width: '100vw',
                style: {
                  padding: 0,
                  margin: 0
                },
                className: T.a.particles,
                params: {
                  particles: {
                    number: { value: 40 },
                    color: { value: O.a[this.props.host.settings.map].particleColor },
                    shape: {
                      type: 'triangle',
                      stroke: { width: 0 }
                    },
                    opacity: {
                      value: 0.7,
                      random: !1
                    },
                    size: {
                      value: 25,
                      random: !1
                    },
                    move: {
                      enable: !0,
                      speed: 2,
                      direction: 'none',
                      random: !1,
                      straight: !1,
                      out_mode: 'out',
                      bounce: !1
                    }
                  }
                }
              }), n.a.createElement(p.a, {
                className: T.a.playersContainer,
                duration: 1000,
                style: {
                  height: 'calc(100vh - 65px - '.concat(80, 'px)'),
                  width: 'calc(100vw - '.concat(80, 'px)'),
                  position: 'absolute'
                }
              }, this.state.players.map(function (a) {
                return n.a.createElement('div', {
                  key: a.name,
                  style: {
                    height: t - 8,
                    width: t - 8,
                    backgroundImage: a.place <= 3 ? 'url('.concat(K[a.place - 1], ')') : 'url('.concat(O.a[e.props.host.settings.map].tile, ')'),
                    backgroundSize: t - 8
                  },
                  className: T.a.playerBox
                }, n.a.createElement(R.a, {
                  name: a.blook,
                  className: T.a.blookBox
                }), n.a.createElement(m.Textfit, {
                  className: T.a.placeText,
                  mode: 'single',
                  forceSingleModeWidth: !1
                }, a.place), n.a.createElement(m.Textfit, {
                  className: T.a.superPlaceText,
                  mode: 'single',
                  forceSingleModeWidth: !1
                }, Object(H.g)(a.place)), n.a.createElement(m.Textfit, {
                  className: T.a.nameText,
                  mode: 'single',
                  forceSingleModeWidth: !1
                }, a.name), n.a.createElement('div', { className: T.a.dmgContainer }, n.a.createElement(m.Textfit, {
                  className: T.a.dmgText,
                  mode: 'single',
                  forceSingleModeWidth: !1,
                  style: { width: ''.concat(Math.min(90, 7 * a.dmg.toString().length), '%') }
                }, ''.concat(Object(H.n)(a.dmg))), n.a.createElement('i', {
                  className: d()(T.a.dmgIcon, 'fas fa-splotch'),
                  style: { fontSize: t / 12 }
                })));
              })), this.state.eventName ? n.a.createElement(U.a, {
                icon: this.state.event.icon,
                blook: this.state.event.blook,
                color: this.state.event.color,
                name: this.state.eventName,
                desc: this.state.event.desc
              }) : null));
            }
          }
        ]) && M(t.prototype, a), s && M(t, s), o;
      }(n.a.Component);
    Z.propTypes = {
      host: l.a.object,
      firebase: l.a.object,
      history: l.a.object,
      updateStandings: l.a.func.isRequired,
      setMuted: l.a.func.isRequired,
      deleteHost: l.a.func.isRequired
    };
    t.a = Object(u.a)(Object(o.b)(function (e) {
      return { host: e.hosts.host };
    }, function (e) {
      return Object(r.b)({
        updateStandings: v.b,
        setMuted: C.a,
        deleteHost: w.c
      }, e);
    })(Object(A.d)(Z)));
  },
  '59PT': function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__background___3kGX4-camelCase{background-size:100px}.styles__contentHolder___1guPd-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___1HNLd-camelCase{font-size:9vw;line-height:8.4vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__buttonContainer___37IT2-camelCase{margin-top:65px;display:flex;flex-flow:column;align-items:flex-start}.styles__button___q-1fL-camelCase{font-size:3vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___q-1fL-camelCase:hover{transform:scale(1.05)}.styles__loginText___2dCYH-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;padding:7px 10px}.styles__blook1___15aTQ-camelCase{top:30%;right:37%;transform:translate(50%,-50%) rotate(5deg)}.styles__blook1___15aTQ-camelCase,.styles__blook2___2PZn9-camelCase{position:absolute;width:12vw;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block}.styles__blook2___2PZn9-camelCase{top:50%;right:13%;transform:translate(50%,-50%) rotate(20deg)}.styles__blook3___272y0-camelCase{position:absolute;top:70%;right:32%;width:12vw;display:block;transform:translate(50%,-50%) rotate(-15deg)}.styles__blook3___272y0-camelCase,.styles__savesHeader___lUpM4-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__savesHeader___lUpM4-camelCase{width:90%;margin:80px auto 50px;display:flex;justify-content:center;align-items:center;font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif}.styles__savesHolder___2LooD-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3CdGG-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;color:#3a3a3a;padding:15px;margin:15px 20px;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column;flex-grow:1;max-width:286px}.styles__saveTitle___3Q6W2-camelCase{font-weight:700;font-size:42px;line-height:45px;width:90%;margin:10px 5% 0}.styles__saveRow___INHg_-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___2B6Kx-camelCase{width:38px;text-align:center;margin-left:5px;color:#3a3a3a;opacity:.9}.styles__saveHealthHolder___2U73W-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___FOerx-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___39xSe-camelCase{background-color:#0bc2cf;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;border-radius:7px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___39xSe-camelCase:hover{transform:scale(.95)}.styles__emptySave___VH9aB-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___3z6y4-camelCase{position:absolute;top:10px;left:10px;font-size:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;font-family:Titan One,sans-serif;color:#fff;padding:5px 15px;text-shadow:2px 2px 8px grey;transition:transform .2s}.styles__backButton___3z6y4-camelCase:hover{transform:scale(1.05)}.styles__stageText___1um76-camelCase{font-size:28px;font-weight:700;margin-right:10px;line-height:50px;text-align:right;overflow:hidden}.styles__mapContainer___2kyjx-camelCase,.styles__stageText___1um76-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__mapContainer___2kyjx-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-sizing:border-box;padding:20px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__mapHeader___10xz2-camelCase{font-size:32px;line-height:35px;font-weight:700;margin-bottom:10px}.styles__mapRow___3m82q-camelCase{width:100%;flex-flow:row wrap;justify-content:space-between}.styles__mapButton___3R-FF-camelCase,.styles__mapRow___3m82q-camelCase{display:flex;align-items:center}.styles__mapButton___3R-FF-camelCase{flex-direction:column;justify-content:center;width:30%;margin:5px auto;border:3px solid #a7a7a7;border-radius:6px;padding:5px;box-sizing:border-box;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;line-height:19px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.2s}.styles__mapButton___3R-FF-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__mapImg___2AwoX-camelCase{margin-bottom:8px}.styles__lockedMap___3WRGk-camelCase,.styles__mapImg___2AwoX-camelCase{width:100%;border-radius:6px}.styles__lockedMap___3WRGk-camelCase{display:flex;justify-content:center;align-items:center;height:calc(100% - 8px);background-color:#3a3a3a;color:#fff;font-size:42px;position:absolute;top:0;left:0}@media only screen and (max-width:950px){.styles__savesHeader___lUpM4-camelCase{font-size:64px;line-height:70px;margin:70px auto 10px}.styles__saveHeaderHolder___2YN5M-camelCase{margin:70px auto 0}.styles__savesHolder___2LooD-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3CdGG-camelCase{width:300px;margin:15px 20px}}@media only screen and (max-width:800px){.styles__header___1HNLd-camelCase{font-size:19vw;line-height:18vw}.styles__blook1___15aTQ-camelCase,.styles__blook2___2PZn9-camelCase,.styles__blook3___272y0-camelCase{display:none}.styles__button___q-1fL-camelCase{font-size:10vw}.styles__loginText___2dCYH-camelCase{width:80%;font-size:14px}}@media only screen and (max-width:600px){.styles__mapContainer___2kyjx-camelCase{width:310px}.styles__mapButton___3R-FF-camelCase{width:45%}}',
      ''
    ]), t.locals = {
      background: 'styles__background___3kGX4-camelCase',
      contentHolder: 'styles__contentHolder___1guPd-camelCase',
      header: 'styles__header___1HNLd-camelCase',
      buttonContainer: 'styles__buttonContainer___37IT2-camelCase',
      button: 'styles__button___q-1fL-camelCase',
      loginText: 'styles__loginText___2dCYH-camelCase',
      blook1: 'styles__blook1___15aTQ-camelCase',
      blook2: 'styles__blook2___2PZn9-camelCase',
      blook3: 'styles__blook3___272y0-camelCase',
      savesHeader: 'styles__savesHeader___lUpM4-camelCase',
      savesHolder: 'styles__savesHolder___2LooD-camelCase',
      saveContainer: 'styles__saveContainer___3CdGG-camelCase',
      saveTitle: 'styles__saveTitle___3Q6W2-camelCase',
      saveRow: 'styles__saveRow___INHg_-camelCase',
      saveIcon: 'styles__saveIcon___2B6Kx-camelCase',
      saveHealthHolder: 'styles__saveHealthHolder___2U73W-camelCase',
      saveHealthBar: 'styles__saveHealthBar___FOerx-camelCase',
      loadButton: 'styles__loadButton___39xSe-camelCase',
      emptySave: 'styles__emptySave___VH9aB-camelCase',
      backButton: 'styles__backButton___3z6y4-camelCase',
      stageText: 'styles__stageText___1um76-camelCase',
      mapContainer: 'styles__mapContainer___2kyjx-camelCase',
      mapHeader: 'styles__mapHeader___10xz2-camelCase',
      mapRow: 'styles__mapRow___3m82q-camelCase',
      mapButton: 'styles__mapButton___3R-FF-camelCase',
      mapImg: 'styles__mapImg___2AwoX-camelCase',
      lockedMap: 'styles__lockedMap___3WRGk-camelCase',
      saveHeaderHolder: 'styles__saveHeaderHolder___2YN5M-camelCase'
    };
  },
  '8K9W': function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('2iEm'), u = a('wIs1'), m = a('wd/R'), p = a.n(m), _ = a('TSYQ'), d = a.n(_), f = a('JeI0'), h = a.n(f), y = a('vDqi'), g = a.n(y), b = a('b6Qr'), x = a('anyA'), v = a('GIcp'), C = a.n(v), w = a('S4iY'), I = a.n(w), k = a('e47E'), E = a('iQ+n'), S = a('TN+F');
    function N(e) {
      return (N = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function j(e) {
      return function (e) {
        if (Array.isArray(e))
          return T(e);
      }(e) || function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }(e) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return T(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return T(e, t);
      }(e) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function T(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function O(e, t, a, s, n, r, o) {
      try {
        var i = e[r](o), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function R(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function H(e, t) {
      return (H = Object.setPrototypeOf || function (e, t) {
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
        var a, s = D(e);
        if (t) {
          var n = D(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return P(this, a);
      };
    }
    function P(e, t) {
      return !t || 'object' !== N(t) && 'function' != typeof t ? B(e) : t;
    }
    function B(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function D(e) {
      return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var A = function (e) {
      var t = e.hits, a = e.hasMore, s = e.searchMore, r = e.searched;
      return n.a.createElement('div', { className: I.a.hitsHolder }, t.length > 0 ? n.a.createElement('div', { className: I.a.hitsContainer }, t.map(function (e) {
        return n.a.createElement(c.a, {
          to: '/set/'.concat(e._id),
          key: e._id,
          className: I.a.setContainer
        }, e.coverImage ? n.a.createElement('div', { className: I.a.setImageFiller }, n.a.createElement(h.a, { height: 180 }, n.a.createElement('img', {
          src: Object(S.f)(e.coverImage.url),
          alt: 'Cover',
          className: I.a.coverImage
        }))) : n.a.createElement('div', { className: I.a.setFillerContainer }, n.a.createElement('div', { className: I.a.setFillerText }, 'Blooket')), n.a.createElement('div', { className: I.a.setQuestionsContainer }, n.a.createElement('div', { className: I.a.setQuestionsText }, ''.concat(Object(S.n)(e.questions.length), ' ').concat(1 === e.questions.length ? 'Question' : 'Questions'))), n.a.createElement('div', { className: I.a.setHeader }, e.title), n.a.createElement('div', { className: I.a.setSpacer }), n.a.createElement('div', { className: I.a.setPlays }, ''.concat(Object(S.n)(e.playCount), ' ').concat(1 === e.playCount ? 'Play' : 'Plays'), e.verified ? n.a.createElement('i', { className: d()('fas fa-check-square', I.a.verifiedIcon) }) : null), n.a.createElement('div', { className: I.a.setLastEdit }, 'Edited '.concat(p()(e.date).fromNow())), n.a.createElement('div', { className: I.a.setAuthorContainer }, n.a.createElement('i', { className: d()(I.a.authorIcon, 'fas fa-user') }), n.a.createElement('div', { className: I.a.setAuthorText }, e.author, 'Erin@Voces' === e.author ? n.a.createElement('img', {
          src: 'https://www.vocesdigital.com/assets/images/VOCESLOGO_DC-logo.png',
          alt: 'Voces Digital',
          className: I.a.setAuthorIcon,
          draggable: !1
        }) : null)));
      })) : r ? n.a.createElement('div', { className: I.a.noResultsText }, n.a.createElement('i', { className: d()('far fa-frown', I.a.noResultsIcon) }), 'No Search Results', n.a.createElement('div', {
        style: {
          fontSize: 18,
          fontWeight: 'normal'
        }
      }, 'Try to refine your search')) : null, a ? n.a.createElement('div', {
        className: C.a.moreButton,
        role: 'button',
        tabIndex: 0,
        onClick: s
      }, 'Show More') : null);
    };
    A.propTypes = {
      hits: l.a.array,
      hasMore: l.a.bool,
      searchMore: l.a.func,
      searched: l.a.bool
    };
    var U = function (e) {
      !function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), t && H(e, t);
      }(l, e);
      var t, a, s, r, o, i = z(l);
      function l(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, l), (t = i.call(this, e)).state = {
          searchQuery: '',
          searched: !1,
          featuredGames: [],
          hits: [],
          hasMore: !1,
          numHits: 24,
          minQuestions: 1,
          hasCoverImage: !1,
          minPlays: 0
        }, t.here = !0, t.onSearch = t.onSearch.bind(B(t)), t.searchUser = t.searchUser.bind(B(t)), t;
      }
      return t = l, (a = [
        {
          key: 'componentDidMount',
          value: (r = regeneratorRuntime.mark(function e() {
            var t, a, s = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return t = Object(S.i)('n'), a = Object(S.i)('s'), e.next = 4, this.props.user.getData();
                case 4:
                  if (e.sent) {
                    e.next = 7;
                    break;
                  }
                  return e.abrupt('return', this.props.history.push('/login'));
                case 7:
                  t ? this.searchUser(decodeURIComponent(t)) : a ? this.setState({ searchQuery: decodeURIComponent(a) }, this.onSearch) : g.a.get('/api/games/featured').then(function (e) {
                    if (s.here) {
                      var t = j(e.data);
                      t.sort(function (e, t) {
                        return t.playCount - e.playCount;
                      }), s.setState({ featuredGames: t });
                    }
                  }).catch(function (e) {
                    console.error(e);
                  });
                case 8:
                case 'end':
                  return e.stop();
                }
            }, e, this);
          }), o = function () {
            var e = this, t = arguments;
            return new Promise(function (a, s) {
              var n = r.apply(e, t);
              function o(e) {
                O(n, a, s, o, i, 'next', e);
              }
              function i(e) {
                O(n, a, s, o, i, 'throw', e);
              }
              o(void 0);
            });
          }, function () {
            return o.apply(this, arguments);
          })
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.here = !1;
          }
        },
        {
          key: 'onSearch',
          value: function (e, t) {
            var a = this;
            e && e.preventDefault();
            var s = t || 24;
            s && window.history.pushState({}, null, ''.concat(window.location.origin, '/discover?s=').concat(encodeURIComponent(this.state.searchQuery))), g.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, g.a.get('/api/games/search', {
              params: {
                text: this.state.searchQuery,
                num: s,
                minQuestions: this.state.minQuestions,
                hasCoverImage: this.state.hasCoverImage,
                minPlays: this.state.minPlays
              }
            }).then(function (e) {
              var t = e.data;
              t.sort(function (e, t) {
                return e.score === t.score ? t.playCount - e.playCount : t.score - e.score;
              }), a.setState({
                searched: !0,
                hasMore: e.data.length >= s,
                numHits: s,
                hits: t
              });
            }).catch(function (e) {
              console.error(e);
            });
          }
        },
        {
          key: 'searchUser',
          value: function (e) {
            var t = this;
            g.a.get('/api/users/games', { params: { name: e } }).then(function (a) {
              if (t.here) {
                var s = j(a.data.filter(function (e) {
                  return !e.private && e.questions.length > 0;
                }));
                s.sort(function (e, t) {
                  return t.playCount - e.playCount;
                }), t.setState({
                  hits: s,
                  numHits: s.length,
                  searched: !0,
                  hasMore: !1,
                  searchQuery: t.state.searchQuery || e
                });
              }
            }).catch(function (e) {
              console.error(e);
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return n.a.createElement('div', { className: b.isMobile ? C.a.mBody : C.a.body }, n.a.createElement(E.a, {
              title: 'Discover Sets | Blooket',
              desc: 'Search and discover new sets from a large collection created by users. These sets can then be viewed, edited, or used to host games.'
            }), n.a.createElement(k.a, {
              history: this.props.history,
              page: 'Discover'
            }), n.a.createElement('div', { className: C.a.profileRegularBody }, n.a.createElement('div', { className: I.a.searchBoxHolder }, n.a.createElement('form', {
              onSubmit: this.onSearch,
              className: I.a.searchContainer
            }, n.a.createElement('input', {
              className: I.a.searchInput,
              type: 'search',
              value: this.state.searchQuery,
              onChange: function (t) {
                return e.setState({ searchQuery: t.target.value });
              },
              placeholder: 'Search for a Set...'
            }), n.a.createElement('i', {
              className: d()(I.a.searchIcon, 'fas fa-search'),
              role: 'button',
              tabIndex: 0,
              onClick: this.onSearch
            })), this.state.searched ? n.a.createElement('div', { className: I.a.filtersHolder }, n.a.createElement('i', { className: d()(I.a.filterIcon, 'fas fa-sliders-h') }), n.a.createElement('div', { className: I.a.filtersColumn }, n.a.createElement('div', {
              className: I.a.filterRow,
              style: { alignItems: 'center' }
            }, 'Has Cover Image:', n.a.createElement('div', {
              className: d()(I.a.checkBox, this.state.hasCoverImage ? I.a.checkYes : I.a.checkNo),
              role: 'button',
              tabIndex: 0,
              style: { marginLeft: 'auto' },
              onClick: function () {
                return e.setState({ hasCoverImage: !e.state.hasCoverImage }, function (t) {
                  return e.onSearch(t, e.state.numHits);
                });
              }
            }, n.a.createElement('i', { className: d()(I.a.checkIcon, 'fas fa-check') }))), n.a.createElement('div', {
              className: I.a.filterRow,
              style: { flexDirection: 'column' }
            }, 'Minimum Questions:', n.a.createElement('div', { className: I.a.filters }, [
              1,
              5,
              10,
              25,
              50
            ].map(function (t) {
              return n.a.createElement('div', {
                className: d()(I.a.checkBox, e.state.minQuestions === t ? I.a.checkYes : I.a.checkNo),
                role: 'button',
                tabIndex: 0,
                key: t,
                onClick: function () {
                  return e.setState({ minQuestions: t }, function (t) {
                    return e.onSearch(t, e.state.numHits);
                  });
                }
              }, n.a.createElement('div', { className: I.a.checkIcon }, t));
            }))), n.a.createElement('div', {
              className: I.a.filterRow,
              style: { flexDirection: 'column' }
            }, 'Minimum Plays:', n.a.createElement('div', { className: I.a.filters }, [
              0,
              10,
              100,
              500,
              1000
            ].map(function (t) {
              return n.a.createElement('div', {
                className: d()(I.a.checkBox, e.state.minPlays === t ? I.a.checkYes : I.a.checkNo),
                role: 'button',
                tabIndex: 0,
                key: t,
                style: { width: 30 },
                onClick: function () {
                  return e.setState({ minPlays: t }, function (t) {
                    return e.onSearch(t, e.state.numHits);
                  });
                }
              }, n.a.createElement('div', { className: I.a.checkIcon }, Object(S.v)(t)));
            }))))) : null), n.a.createElement(A, {
              hits: this.state.searched ? this.state.hits : this.state.featuredGames,
              hasMore: this.state.searched && this.state.hasMore,
              searchMore: function (t) {
                return e.onSearch(t, e.state.numHits + 24);
              },
              searched: this.state.searched
            }), n.a.createElement('div', { style: { height: 20 } })));
          }
        }
      ]) && R(t.prototype, a), s && R(t, s), l;
    }(n.a.Component);
    U.propTypes = {
      history: l.a.object.isRequired,
      user: l.a.object
    };
    t.a = Object(x.c)(Object(u.a)(Object(o.b)(function () {
      return {};
    }, function (e) {
      return Object(r.b)({}, e);
    })(U)));
  },
  K69b: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return s;
    }), a.d(t, 'b', function () {
      return n;
    });
    var s = {
        'Question Frenzy': {
          short: 'f',
          color: '#813d8f',
          icon: 'fas fa-check-double',
          desc: 'Answer questions quickly in 20 seconds for extra tokens',
          rate: 0.04
        },
        Earthquake: {
          short: 'e',
          color: '#805500',
          icon: 'fas fa-mountain',
          desc: 'All of your towers get mixed up',
          rate: 0.02
        },
        'Tax Time': {
          short: 't',
          color: '#e6e600',
          blook: 'Toucan',
          desc: 'Lose half of your Upgrade Tokens',
          rate: 0.05
        },
        'Alien Invasion': {
          short: 'a',
          color: '#a64dff',
          icon: 'fas fa-space-shuttle',
          desc: 'Lose one random tower',
          rate: 0.06
        },
        'A Little Help': {
          short: 'h',
          color: '#0088cc',
          icon: 'fas fa-user-astronaut',
          desc: 'Get one random tower',
          rate: 0.11
        },
        'Bonus Question': {
          short: 'q',
          color: '#e57e25',
          icon: 'fas fa-check',
          desc: 'Answer the question correctly for 3 Upgrade Tokens',
          rate: 0.1
        },
        Chance: {
          short: 'c',
          color: '#404040',
          icon: 'fas fa-dice',
          desc: 'Do you want to take a risk?',
          rate: 0.06
        },
        Freeze: {
          short: 'z',
          color: '#64bee8',
          icon: 'far fa-snowflake',
          desc: 'You\'re Frozen! Answer 3 questions correctly to continue',
          rate: 0.03
        },
        'Annoying Ducks': {
          short: 'u',
          color: '#ffcd05',
          blook: 'Duck',
          desc: '3 Ducks fill up spots on your board',
          rate: 0.11
        },
        'King\'s Request': {
          short: 'k',
          color: '#bd0f26',
          blook: 'King',
          desc: 'Answer 2 questions correctly to double your damage',
          rate: 0.04
        },
        Boom: {
          short: 'o',
          color: '#ff3300',
          icon: 'fas fa-bomb',
          desc: 'Clear all enemies on the screen',
          rate: 0.1
        },
        'Double Damage': {
          short: 'm',
          color: '#4d79ff',
          icon: 'fas fa-splotch',
          desc: 'Towers deal double damage for the next 30 seconds',
          rate: 0.18
        },
        'Difficulty Increase': {
          short: 'd',
          color: '#a0302c',
          icon: 'fas fa-angle-double-up',
          desc: 'Skip the next 3 rounds',
          rate: 0.06
        },
        Reinforcements: {
          short: 'r',
          color: '#61cbee',
          blook: 'Goldfish',
          desc: 'Spawn 5 fish friends at the start of next round',
          rate: 0.04
        },
        'Final Boss': {
          short: 'b',
          color: '#3a3a3a',
          icon: 'fas fa-skull',
          desc: 'A terrible enemy approaches next round',
          rate: 0
        }
      }, n = {
        f: 'Question Frenzy',
        e: 'Earthquake',
        t: 'Tax Time',
        a: 'Alien Invasion',
        h: 'A Little Help',
        q: 'Bonus Question',
        c: 'Chance',
        z: 'Freeze',
        u: 'Annoying Ducks',
        k: 'King\'s Request',
        o: 'Boom',
        m: 'Double Damage',
        d: 'Difficulty Increase',
        r: 'Reinforcements',
        b: 'Final Boss'
      };
  },
  'P/0T': function (e, t, a) {
    var s = a('1OJt');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  R1k4: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return n;
    });
    var s = a('gU57');
    function n(e) {
      return {
        type: s.a,
        defense: e
      };
    }
  },
  S4iY: function (e, t, a) {
    var s = a('jloe');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  YqwT: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__header___20gQX-camelCase{font-family:Nunito,sans-serif;font-size:45px;font-weight:700;margin:25px 5% 10px;color:#3a3a3a}.styles__urlContainer___2WHb3-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;text-align:center;display:flex;flex-direction:column}.styles__urlText___rOX3E-camelCase{font-family:Nunito,sans-serif;font-size:32px;font-weight:700;margin:25px auto 15px;color:#3a3a3a}.styles__urlCloseIcon___11dym-camelCase{position:absolute;top:15px;right:20px;font-size:28px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.3s}.styles__urlCloseIcon___11dym-camelCase:focus,.styles__urlCloseIcon___11dym-camelCase:hover{color:#0bc2cf}.styles__urlInput___3m6In-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 10% 20px;padding:5px 15px;width:calc(80% - 30px);height:30px;font-size:19px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__urlInput___3m6In-camelCase:focus{border-color:#0bc2cf}.styles__urlErrorContainer___1Ixlb-camelCase{border:2px solid #ce1313;border-radius:5px;width:80%;display:flex;flex-direction:row;margin:auto auto 25px}.styles__urlErrorIcon___1HF_Z-camelCase{font-size:20px;color:#ce1313;padding-left:14px;padding-right:4px;margin:9px 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__urlErrorText___2C8dh-camelCase{margin:8px 5px 5px 11px;font-size:19px;text-align:left;color:#3a3a3a}.styles__urlButton___2ZpeA-camelCase,.styles__urlErrorText___2C8dh-camelCase{font-family:Nunito,sans-serif}.styles__urlButton___2ZpeA-camelCase{border-color:rgba(0,0,0,.17);border-style:solid;border-radius:5px;background-color:#fff;width:125px;height:45px;margin:auto auto 25px;color:#999;font-size:22px;text-align:center;outline:none;cursor:pointer}.styles__urlButton___2ZpeA-camelCase:focus,.styles__urlButton___2ZpeA-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__urlButtonFilled___3TIDw-camelCase{border-color:#3a3a3a;color:#3a3a3a;font-weight:700}.styles__urlButtonError___2dT-O-camelCase,.styles__urlButtonError___2dT-O-camelCase:focus{border-color:#ce1313;color:#ce1313}.styles__urlButtonError___2dT-O-camelCase:hover{border-color:#0bc2cf;color:#0bc2cf}.styles__inputContainer___2bJk0-camelCase{width:100%}.styles__wideContainer___2G2Z5-camelCase{display:flex;flex-direction:row;width:90%;margin:5px auto}.styles__dropHolder___2fnsW-camelCase{width:34%;min-height:280px;flex:1;padding:15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;flex-direction:column;align-items:center}.styles__dropContainer___cEcoq-camelCase,.styles__dropHolder___2fnsW-camelCase{display:flex;justify-content:center}.styles__dropContainer___cEcoq-camelCase{height:calc(100% - 4px);width:calc(100% - 4px);border:2px dashed #666;border-radius:5px;margin-top:5px;background-color:#f0f0f0;flex-direction:column;align-content:center}.styles__activeDropContainer___20ylw-camelCase{background-color:rgba(11,194,207,.3)}.styles__dropHeader___1v2F4-camelCase{font-size:32px;font-weight:700;margin:5px auto}.styles__dropHeader___1v2F4-camelCase,.styles__dropText___xT7F4-camelCase{font-family:Nunito,sans-serif;text-align:center;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__dropText___xT7F4-camelCase{font-size:20px;margin:10px auto 15px;padding:0 20px}.styles__uploadButtonContainer___35Hi_-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:95%;margin:0 auto}.styles__uploadButton___3dGxU-camelCase{border-radius:5px;width:110px;height:50px;margin:5px 15px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);transition:.1s}.styles__uploadButton___3dGxU-camelCase:focus,.styles__uploadButton___3dGxU-camelCase:hover{color:#0bc2cf;transform:scale(.94)}.styles__uploadIcon___2cOSN-camelCase{font-size:24px;padding-left:10px;width:28px;text-align:center}.styles__uploadText___211J0-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:15px;line-height:20px}.styles__imgContainer___3QDmd-camelCase{width:100%;height:280px;margin:auto;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#333;border-radius:5px;overflow:hidden}.styles__coverImage___3cEqF-camelCase{max-width:100%;max-height:100%;margin:auto;-o-object-fit:contain;object-fit:contain}.styles__removeImageContainer___eXMrB-camelCase{width:100%;height:40px;margin-top:-40px;background-color:rgba(0,0,0,.6);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.styles__removeImageButton___1gLza-camelCase{display:flex;flex-direction:row;align-self:flex-start;height:40px;width:135px;margin-left:30px;margin-top:-40px;cursor:pointer;outline:none;z-index:3}.styles__removeImageIcon___36nDI-camelCase{font-size:26px;color:#fff;line-height:40px;width:30px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__removeImageText___1wp-Q-camelCase{padding-left:10px;font-family:Nunito,sans-serif;font-size:24px;color:#fff;line-height:40px}.styles__upperRightContainer___36Oqd-camelCase{display:flex;flex-direction:column;padding:10px 15px;flex-grow:1;margin-left:3%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px}.styles__titleHeader___1psXE-camelCase{font-size:34px}.styles__descHeader___hqb1a-camelCase,.styles__titleHeader___1psXE-camelCase{font-family:Nunito,sans-serif;font-weight:700;text-align:left;color:#3a3a3a}.styles__descHeader___hqb1a-camelCase{font-size:24px}.styles__input___K_SaV-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin:5px 0 20px;padding:4px 15px;width:calc(100% - 34px);height:40px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;display:flex;flex-direction:row;align-items:center}.styles__input___K_SaV-camelCase:focus{border-color:#0bc2cf}.styles__descInput___2Ljau-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;margin-top:10px;padding:10px 15px;width:calc(100% - 34px);height:100px;font-size:22px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none;resize:none}.styles__descInput___2Ljau-camelCase:focus{border-color:#0bc2cf}.styles__inputFilled___Ke3uk-camelCase{border-color:#3a3a3a}.styles__inputError___12D9P-camelCase{border-color:#ce1313}.styles__bottomLeftContainer___KpvX1-camelCase{display:flex;flex-direction:column;width:75%}.styles__categoryContainer___rlGuf-camelCase{width:100%;box-sizing:border-box;padding:10px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;margin:20px 0 5px}.styles__categoryHeader___n5XIq-camelCase{font-size:24px;font-weight:700}.styles__categoryDesc___5emCm-camelCase,.styles__categoryHeader___n5XIq-camelCase{font-family:Nunito,sans-serif;text-align:left;color:#3a3a3a}.styles__categoryDesc___5emCm-camelCase{font-size:18px;opacity:.8}.styles__privacyContainer___1NR5K-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:90%;margin:5px 0 7px;background-color:rgba(0,0,0,.1);border-radius:5px}.styles__privateButton___31MFY-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);color:#666;border-radius:5px;width:290px;height:70px;margin:10px 5px;display:flex;flex-direction:row;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;transition:.2s}.styles__privateButton___31MFY-camelCase:hover{transform:scale(.95)}.styles__privateButton___31MFY-camelCase:hover,.styles__selected___1Csq9-camelCase{color:#fff;background-color:#0bc2cf}.styles__privateIcon___CHxy3-camelCase{font-size:35px;line-height:70px;padding-left:20px;width:45px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateTextContainer___mb-oi-camelCase{display:flex;flex-direction:column;padding-left:20px}.styles__privateHeader___bY8PO-camelCase{padding-top:12px;font-weight:700;font-size:22px;line-height:25px}.styles__privateHeader___bY8PO-camelCase,.styles__privateText___2spHM-camelCase{font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__privateText___2spHM-camelCase{font-size:18px;line-height:20px}.styles__bottomRightContainer___3-OYD-camelCase{width:15%;margin-left:auto}.styles__bottomRightContainer___3-OYD-camelCase,.styles__submitButton___13BP0-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__submitButton___13BP0-camelCase{border-radius:5px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-width:155px;width:100%;box-sizing:border-box;padding:15px;margin:20px auto;font-weight:700;color:#666;font-size:34px;line-height:38px;font-family:Nunito,sans-serif;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__buttonFilled___16H1r-camelCase{color:#fff;background-color:#0bc2cf}.styles__buttonFilled___16H1r-camelCase:hover{transform:scale(.95)}.styles__buttonError___1CI0u-camelCase{color:#fff;background-color:#ce1313}.styles__buttonError___1CI0u-camelCase:hover{transform:scale(.95)}.styles__createIcon___2lAk3-camelCase{font-size:54px;margin-bottom:20px}.styles__errorContainer___2idSK-camelCase{border:2px solid #ce1313;border-radius:5px;width:100%;box-sizing:border-box;margin:5px auto;display:flex;flex-direction:column;background-color:#fff}.styles__errorIcon___7XwPr-camelCase{font-size:27px;color:#ce1313;margin:9px auto 2px 9px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__errorText___1ayb3-camelCase{margin:4px 9px 6px;font-size:20px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a}@media only screen and (max-width:950px){.styles__uploadButton___3dGxU-camelCase{margin:5px 10px}}@media only screen and (max-width:860px){.styles__urlContainer___2WHb3-camelCase{width:90%}.styles__urlText___rOX3E-camelCase{font-size:28px}.styles__urlCloseIcon___11dym-camelCase{top:5px;right:10px;font-size:24px}.styles__wideContainer___2G2Z5-camelCase{flex-direction:column}.styles__dropHolder___2fnsW-camelCase{width:calc(100% - 30px);min-height:240px;flex:0}.styles__uploadButtonContainer___35Hi_-camelCase{margin:0 auto 15px}.styles__upperRightContainer___36Oqd-camelCase{margin:20px 0 0}.styles__header___20gQX-camelCase{font-size:40px}.styles__descInput___2Ljau-camelCase,.styles__input___K_SaV-camelCase{width:calc(100% - 34px)}.styles__descInput___2Ljau-camelCase{height:102px}.styles__bottomLeftContainer___KpvX1-camelCase{width:100%}.styles__privacyContainer___1NR5K-camelCase{width:100%;margin:10px auto}.styles__bottomRightContainer___3-OYD-camelCase{width:80%;margin:10px auto 25px}}',
      ''
    ]), t.locals = {
      header: 'styles__header___20gQX-camelCase',
      urlContainer: 'styles__urlContainer___2WHb3-camelCase',
      urlText: 'styles__urlText___rOX3E-camelCase',
      urlCloseIcon: 'styles__urlCloseIcon___11dym-camelCase',
      urlInput: 'styles__urlInput___3m6In-camelCase',
      urlErrorContainer: 'styles__urlErrorContainer___1Ixlb-camelCase',
      urlErrorIcon: 'styles__urlErrorIcon___1HF_Z-camelCase',
      urlErrorText: 'styles__urlErrorText___2C8dh-camelCase',
      urlButton: 'styles__urlButton___2ZpeA-camelCase',
      urlButtonFilled: 'styles__urlButtonFilled___3TIDw-camelCase',
      urlButtonError: 'styles__urlButtonError___2dT-O-camelCase',
      inputContainer: 'styles__inputContainer___2bJk0-camelCase',
      wideContainer: 'styles__wideContainer___2G2Z5-camelCase',
      dropHolder: 'styles__dropHolder___2fnsW-camelCase',
      dropContainer: 'styles__dropContainer___cEcoq-camelCase',
      activeDropContainer: 'styles__activeDropContainer___20ylw-camelCase',
      dropHeader: 'styles__dropHeader___1v2F4-camelCase',
      dropText: 'styles__dropText___xT7F4-camelCase',
      uploadButtonContainer: 'styles__uploadButtonContainer___35Hi_-camelCase',
      uploadButton: 'styles__uploadButton___3dGxU-camelCase',
      uploadIcon: 'styles__uploadIcon___2cOSN-camelCase',
      uploadText: 'styles__uploadText___211J0-camelCase',
      imgContainer: 'styles__imgContainer___3QDmd-camelCase',
      coverImage: 'styles__coverImage___3cEqF-camelCase',
      removeImageContainer: 'styles__removeImageContainer___eXMrB-camelCase',
      removeImageButton: 'styles__removeImageButton___1gLza-camelCase',
      removeImageIcon: 'styles__removeImageIcon___36nDI-camelCase',
      removeImageText: 'styles__removeImageText___1wp-Q-camelCase',
      upperRightContainer: 'styles__upperRightContainer___36Oqd-camelCase',
      titleHeader: 'styles__titleHeader___1psXE-camelCase',
      descHeader: 'styles__descHeader___hqb1a-camelCase',
      input: 'styles__input___K_SaV-camelCase',
      descInput: 'styles__descInput___2Ljau-camelCase',
      inputFilled: 'styles__inputFilled___Ke3uk-camelCase',
      inputError: 'styles__inputError___12D9P-camelCase',
      bottomLeftContainer: 'styles__bottomLeftContainer___KpvX1-camelCase',
      categoryContainer: 'styles__categoryContainer___rlGuf-camelCase',
      categoryHeader: 'styles__categoryHeader___n5XIq-camelCase',
      categoryDesc: 'styles__categoryDesc___5emCm-camelCase',
      privacyContainer: 'styles__privacyContainer___1NR5K-camelCase',
      privateButton: 'styles__privateButton___31MFY-camelCase',
      selected: 'styles__selected___1Csq9-camelCase',
      privateIcon: 'styles__privateIcon___CHxy3-camelCase',
      privateTextContainer: 'styles__privateTextContainer___mb-oi-camelCase',
      privateHeader: 'styles__privateHeader___bY8PO-camelCase',
      privateText: 'styles__privateText___2spHM-camelCase',
      bottomRightContainer: 'styles__bottomRightContainer___3-OYD-camelCase',
      submitButton: 'styles__submitButton___13BP0-camelCase',
      buttonFilled: 'styles__buttonFilled___16H1r-camelCase',
      buttonError: 'styles__buttonError___1CI0u-camelCase',
      createIcon: 'styles__createIcon___2lAk3-camelCase',
      errorContainer: 'styles__errorContainer___2idSK-camelCase',
      errorIcon: 'styles__errorIcon___7XwPr-camelCase',
      errorText: 'styles__errorText___1ayb3-camelCase'
    };
  },
  Zqh3: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__stageText___3a6GQ-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden;display:flex;flex-direction:row;align-items:center}.styles__stageIcon___35oai-camelCase{font-size:24px;margin-left:7px}',
      ''
    ]), t.locals = {
      stageText: 'styles__stageText___3a6GQ-camelCase',
      stageIcon: 'styles__stageIcon___35oai-camelCase'
    };
  },
  blLm: function (e, t, a) {
    var s = a('59PT');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  },
  gU57: function (e, t, a) {
    'use strict';
    a.d(t, 'a', function () {
      return s;
    });
    var s = 'SET_DEFENSE';
  },
  iNqY: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), m = a('vDqi'), p = a.n(m), _ = a('b6Qr'), d = a('TSYQ'), f = a.n(d), h = a('R1k4'), y = a('epYD'), g = a('XuX+'), b = a('GIcp'), x = a.n(b), v = a('blLm'), C = a.n(v), w = a('2g2H'), I = a('iQ+n'), k = a('anyA'), E = a('SCqF'), S = a('ZENw'), N = a('bpVs'), j = a('EmPG'), T = a('TN+F'), O = a('gljj'), R = a('kWb9');
    function H(e) {
      return (H = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function z(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, r = void 0;
        try {
          for (var o, i = e[Symbol.iterator](); !(s = (o = i.next()).done) && (a.push(o.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, r = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw r;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return P(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return P(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function P(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function B(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function D(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? B(Object(a), !0).forEach(function (t) {
          A(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : B(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function A(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function U(e, t, a, s, n, r, o) {
      try {
        var i = e[r](o), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function L(e) {
      return function () {
        var t = this, a = arguments;
        return new Promise(function (s, n) {
          var r = e.apply(t, a);
          function o(e) {
            U(r, s, n, o, i, 'next', e);
          }
          function i(e) {
            U(r, s, n, o, i, 'throw', e);
          }
          o(void 0);
        });
      };
    }
    function F(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function q(e, t) {
      return (q = Object.setPrototypeOf || function (e, t) {
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
        var a, s = Y(e);
        if (t) {
          var n = Y(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return Q(this, a);
      };
    }
    function Q(e, t) {
      return !t || 'object' !== H(t) && 'function' != typeof t ? G(e) : t;
    }
    function G(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function Y(e) {
      return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var W = function (e) {
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
      }(i, e);
      var t, a, s, r, o = M(i);
      function i(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, i), (t = o.call(this, e)).state = {
          questions: [],
          ready: !1,
          warn: !1,
          loggedIn: !1,
          savesPhase: !1,
          savesArray: [
            null,
            null,
            null
          ],
          loading: !1,
          replaceIndex: 0,
          name: '',
          nameUsed: '',
          numCorrect: 0,
          numQuestions: 0,
          round: 0,
          message: '',
          showFinal: !1,
          standings: [],
          noId: !1,
          noIdPopUp: !1,
          noQuestions: !1,
          newIndex: -1,
          chooseMap: !1
        }, t.redirect = !1, t.name = '', t.stripe = '', t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(G(t)), t.newGame = t.newGame.bind(G(t)), t.endGame = t.endGame.bind(G(t)), t;
      }
      return t = i, (a = [
        {
          key: 'componentDidMount',
          value: (r = L(regeneratorRuntime.mark(function e() {
            var t, a = this;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch (e.prev = e.next) {
                case 0:
                  return this.props.setDefense(null), e.next = 3, this.props.user.getData();
                case 3:
                  (t = e.sent) ? (this.name = t.name, this.stripe = t.stripe, this.setState({ loggedIn: !0 }), this.working = !1, p.a.get('/api/defenses/byuser', { params: { name: this.name } }).then(function (e) {
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
            return r.apply(this, arguments);
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
              var t = this.state.savesArray[e], a = [], s = !1, n = this;
              !function () {
                r.apply(this, arguments);
              }();
            }
            function r() {
              return (r = L(regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch (e.prev = e.next) {
                    case 0:
                      if (!t.setId) {
                        e.next = 9;
                        break;
                      }
                      if (!n.state.noId) {
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
                          }) : s = !0, e();
                        }).catch(function (e) {
                          console.error(e);
                        });
                      });
                    case 4:
                      e.next = 7;
                      break;
                    case 6:
                      a = n.state.questions;
                    case 7:
                      e.next = 11;
                      break;
                    case 9:
                      return e.next = 11, new Promise(function (e) {
                        p.a.get('/api/homeworks/byid', { params: { id: t.hwId } }).then(function (t) {
                          t.data ? a = t.data.questions : n.state.noId ? s = !0 : a = n.state.questions, e();
                        }).catch(function (e) {
                          console.error(e);
                        });
                      });
                    case 11:
                      if (!s) {
                        e.next = 15;
                        break;
                      }
                      return n.setState({
                        noIdPopUp: !0,
                        noQuestions: !0
                      }), n.working = !1, e.abrupt('return');
                    case 15:
                      t.hwName && n.props.addClientName(t.hwName), n.props.setDefense(D(D({}, n.props.defense), {}, {
                        defenseId: t._id,
                        setId: t.setId,
                        resultId: t.resultId,
                        hwId: t.hwId,
                        hwGoal: t.hwGoal,
                        plus: t.hwPlus,
                        questions: a,
                        map: t.map,
                        towers: t.towers,
                        health: t.health,
                        round: t.round,
                        dmg: t.dmg,
                        tokens: t.tokens,
                        stage: 'defense',
                        corrects: t.corrects,
                        incorrects: t.incorrects
                      })), n.props.history.push('/defense');
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
              return (a = L(regeneratorRuntime.mark(function a() {
                var s, n;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch (a.prev = a.next) {
                    case 0:
                      if (s = '', !t.props.client || !t.props.client.hwId) {
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
                            round: 1,
                            alive: !0
                          }
                        }).then(function (t) {
                          s = t.data._id, e();
                        }).catch(function (e) {
                          console.error(e), a();
                        });
                      });
                    case 4:
                      if (n = {}, !t.name) {
                        a.next = 9;
                        break;
                      }
                      return a.next = 8, new Promise(function (a, n) {
                        p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/defenses', {
                          setId: t.props.id,
                          name: t.name,
                          hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                          hwName: t.props.client && t.props.client.name ? t.props.client.name : null,
                          hwPlus: !(!t.props.client || !t.props.client.plus) && t.props.client.plus,
                          hwGoal: t.props.client && t.props.client.amount ? t.props.client.amount : 0,
                          saveIndex: t.state.newIndex,
                          resultId: s,
                          map: e
                        }).then(function (e) {
                          localStorage.setItem('token', e.data.token), a(e.data);
                        }).catch(function (e) {
                          console.error(e), n();
                        });
                      });
                    case 8:
                      n = a.sent;
                    case 9:
                      t.props.setDefense(D(D({}, t.props.defense), {}, {
                        defenseId: n.newSaveId,
                        setId: t.props.id,
                        resultId: s,
                        hwId: t.props.client && t.props.client.hwId ? t.props.client.hwId : null,
                        hwGoal: t.props.client && t.props.client.amount ? t.props.client.amount : null,
                        questions: t.state.questions,
                        map: e,
                        towers: [],
                        health: 100,
                        dmg: 0,
                        round: 1,
                        tokens: 0,
                        stage: 'defense',
                        corrects: {},
                        incorrects: {}
                      })), n.oldSave && n.oldSave.map ? t.endGame(n.oldSave) : t.props.history.push('/defense');
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
                chooseMap: !1,
                plus: 'Starter' !== e.data.plan
              });
            }).catch(function (e) {
              console.error(e);
            });
            var a = e.hwName || 'You', s = 0, n = 0;
            Object.values(e.corrects).forEach(function (e) {
              s += e, n += e;
            }), Object.values(e.incorrects).forEach(function (e) {
              n += e;
            });
            var r = Math.max(1, 30 - (e.round - 1)), o = Object(T.o)(j.a);
            p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.put('/api/users/defensestats/solo', {
              name: this.name,
              place: r,
              round: e.round,
              blookUsed: o,
              nameUsed: a,
              correctAnswers: s,
              dmg: e.dmg
            }).catch(function (e) {
              console.error(e);
            }), this.setState({
              warn: !1,
              name: this.name,
              nameUsed: a,
              numCorrect: s,
              numQuestions: n,
              message: Object(N.a)((r - 1) / 30),
              ready: !0,
              round: e.round - 1,
              standings: [{
                  name: a,
                  blook: o,
                  place: r,
                  round: e.round - 1
                }]
            });
          }
        },
        {
          key: 'render',
          value: function () {
            var e = this;
            return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? n.a.createElement(u.a, { to: '/login' }) : n.a.createElement('div', {
              className: f()(_.isMobile ? x.a.mBody : x.a.body, C.a.background),
              style: { backgroundImage: 'url('.concat(O.a, ')') }
            }, n.a.createElement(I.a, {
              title: 'Load Tower Defense | Blooket',
              desc: 'Start a new game or load a saved game of Blooket\'s Tower Defense.'
            }), n.a.createElement(w.a, { noRight: !0 }), this.state.savesPhase ? n.a.createElement('div', { className: x.a.regularBody }, n.a.createElement('div', {
              className: C.a.backButton,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  savesPhase: !1,
                  loading: !1
                });
              }
            }, 'Back'), n.a.createElement('div', { className: C.a.savesHeader }, this.state.loading ? 'Choose a Save' : 'Choose a Save Slot'), n.a.createElement('div', { className: C.a.savesHolder }, this.state.savesArray.map(function (t, a) {
              return t ? n.a.createElement('div', {
                className: C.a.saveContainer,
                key: t._id
              }, n.a.createElement('div', { className: C.a.saveTitle }, 'Round '.concat(t.round)), n.a.createElement('div', { className: C.a.saveRow }, ''.concat(Object(T.n)(t.tokens)), n.a.createElement('i', { className: f()(C.a.saveIcon, 'fas fa-coins') })), n.a.createElement('div', { className: C.a.saveRow }, R.a[t.map].name, n.a.createElement('i', { className: f()(C.a.saveIcon, 'fas fa-map') })), n.a.createElement('div', { className: C.a.saveRow }, t.hwName || 'Not Homework', n.a.createElement('i', { className: f()(C.a.saveIcon, 'fas fa-file-alt') })), n.a.createElement('div', { className: C.a.saveRow }, n.a.createElement('div', { className: C.a.saveHealthHolder }, n.a.createElement('div', {
                className: C.a.saveHealthBar,
                style: { transform: 'scaleX('.concat(t.health / 100, ')') }
              })), n.a.createElement('i', { className: f()(C.a.saveIcon, 'fas fa-heart') })), n.a.createElement('div', {
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
              }, e.state.loading ? 'Load Game' : 'Replace Game')) : n.a.createElement('div', {
                className: C.a.saveContainer,
                key: a
              }, n.a.createElement('div', { className: C.a.emptySave }, 'Empty'), e.state.loading ? null : n.a.createElement('div', {
                className: C.a.loadButton,
                role: 'button',
                tabIndex: 0,
                onClick: e.state.noId ? function () {
                  return e.setState({ noIdPopUp: !0 });
                } : function () {
                  return e.setState({
                    newIndex: a,
                    chooseMap: !0
                  });
                }
              }, 'New Game'));
            }))) : n.a.createElement('div', { className: x.a.regularBody }, n.a.createElement('div', { className: C.a.contentHolder }, n.a.createElement('div', { className: C.a.header }, 'TOWER', n.a.createElement('br', null), 'DEFENSE'), n.a.createElement('div', { className: C.a.buttonContainer }, this.state.isSave ? n.a.createElement('div', {
              className: C.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: function () {
                return e.setState({
                  savesPhase: !0,
                  loading: !0
                });
              }
            }, 'LOAD GAME') : null, n.a.createElement('div', {
              className: C.a.button,
              role: 'button',
              tabIndex: 0,
              onClick: this.state.loggedIn ? function () {
                return e.setState({
                  savesPhase: !0,
                  loading: !1
                });
              } : function () {
                return e.setState({ chooseMap: !0 });
              }
            }, 'NEW GAME'))), n.a.createElement('img', {
              src: 'https://res.cloudinary.com/blooket/image/upload/v1591301898/Blooks/phantomKing.svg',
              className: C.a.blook1,
              alt: 'Phantom King',
              draggable: !1
            }), n.a.createElement('img', {
              src: 'https://res.cloudinary.com/blooket/image/upload/v1591048518/Blooks/masterElf.svg',
              className: C.a.blook2,
              alt: 'Master Elf',
              draggable: !1
            }), n.a.createElement('img', {
              src: 'https://res.cloudinary.com/blooket/image/upload/v1591896075/Blooks/lightSlimeMonster.svg',
              className: C.a.blook3,
              alt: 'Light Slime Monster',
              draggable: !1
            }), this.state.loggedIn ? n.a.createElement('div', { className: C.a.loginText }, 'Your progress will automatically be saved') : n.a.createElement('div', { className: C.a.loginText }, n.a.createElement('a', {
              href: 'https://www.blooket.com/login',
              target: '_blank',
              rel: 'noopener noreferrer',
              style: { color: '#fff' }
            }, 'Login'), '\xA0to save your progress')), this.state.warn ? n.a.createElement(E.a, {
              text: 'Starting a new game will delete this save! Don\'t worry though, we\'ll give you the tokens for your old save right now!',
              buttonOne: {
                text: 'Continue',
                click: function () {
                  return e.setState({
                    newIndex: e.state.replaceIndex,
                    chooseMap: !0,
                    warn: !1
                  });
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
            }) : this.state.noIdPopUp ? n.a.createElement(E.a, {
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
            }) : this.state.chooseMap ? n.a.createElement('div', { className: x.a.modal }, n.a.createElement('div', { className: C.a.mapContainer }, n.a.createElement('div', { className: C.a.mapHeader }, 'Choose a Map:'), n.a.createElement('div', { className: C.a.mapRow }, Object.entries(R.a).map(function (t) {
              var a = z(t, 2), s = a[0], r = a[1];
              return n.a.createElement('div', {
                className: C.a.mapButton,
                key: s,
                role: 'button',
                tabIndex: 0,
                onClick: r.locked ? function () {
                } : function () {
                  return e.newGame(s);
                }
              }, n.a.createElement('div', { style: { position: 'relative' } }, n.a.createElement('img', {
                src: r.img,
                alt: r.name,
                className: C.a.mapImg,
                draggable: !1
              }), r.locked ? n.a.createElement('div', { className: C.a.lockedMap }, n.a.createElement('i', { className: 'fas fa-lock' })) : null), r.name.split(' ').map(function (e) {
                return n.a.createElement('div', { key: e }, e, n.a.createElement('br', null));
              }));
            })))) : this.state.showFinal ? n.a.createElement('div', { className: x.a.modal }, n.a.createElement(S.a, {
              standings: this.state.standings,
              name: this.state.nameUsed,
              numCorrect: this.state.numCorrect,
              numQuestions: this.state.numQuestions,
              username: this.state.name,
              plus: this.state.plus,
              myStat: 'Survived '.concat(this.state.round, ' ').concat(1 === this.state.round ? 'Round' : 'Rounds'),
              saveStats: this.saveStats,
              renderStandingStat: function (e) {
                return function (e) {
                  return n.a.createElement('div', { className: C.a.stageText }, 'Round '.concat(e.round));
                }(e);
              },
              renderStats: function () {
              },
              customMessage: this.state.message,
              tokenMultiplier: 0.4,
              buttonFunc: function () {
                return e.props.history.push('/defense');
              },
              noWait: !0
            })) : null);
          }
        }
      ]) && F(t.prototype, a), s && F(t, s), i;
    }(n.a.Component);
    W.propTypes = {
      client: l.a.object,
      history: l.a.object.isRequired,
      id: l.a.string,
      setDefense: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(k.c)(Object(c.a)(Object(o.b)(function (e) {
      return {
        id: e.hosts.id,
        client: e.clients.client,
        defense: e.clients.client ? e.clients.client.defense : null
      };
    }, function (e) {
      return Object(r.b)({
        setDefense: h.a,
        addClientName: g.a,
        addHwClient: y.b
      }, e);
    })(W)));
  },
  jloe: function (e, t, a) {
    (t = e.exports = a('JPst')(!1)).push([
      e.i,
      '.styles__searchBoxHolder___2sicz-camelCase{width:60%;min-width:400px;box-sizing:border-box;padding:20px;margin:35px auto 50px;justify-content:center;align-items:center;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__searchBoxHolder___2sicz-camelCase,.styles__searchContainer___3wNvb-camelCase{display:flex;flex-direction:row;background-color:#fff}.styles__searchContainer___3wNvb-camelCase{flex-grow:1;min-width:300px;border:3px solid #0bc2cf;border-radius:6px;height:50px}.styles__filtersHolder___3RR33-camelCase{position:relative;display:block}.styles__filterIcon___2a4-v-camelCase{font-size:23px;color:#fff;background-color:#9a49aa;border-radius:5px;margin:auto 0 auto 15px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.styles__searchBoxHolder___2sicz-camelCase{width:90%;min-width:330px;padding:20px 10px}.styles__filtersHolder___3RR33-camelCase{display:none}}.styles__searchIcon___n2x3x-camelCase{font-size:25px;color:#fff;background-color:#0bc2cf;border-radius:5px;margin:auto 2px auto 10px;height:46px;width:46px;display:flex;justify-content:center;align-items:center;text-align:center;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__searchInput___3x0FW-camelCase{border:none;margin:6px 2px 4px 15px;height:40px;width:calc(100% - 51px);font-size:24px;text-align:left;font-family:Nunito,sans-serif;color:#3a3a3a;outline:none}.styles__searchInput___3x0FW-camelCase::-webkit-search-cancel-button,.styles__searchInput___3x0FW-camelCase::-webkit-search-decoration,.styles__searchInput___3x0FW-camelCase::-webkit-search-results-button,.styles__searchInput___3x0FW-camelCase::-webkit-search-results-decoration{-webkit-appearance:none}.styles__filtersColumn___q6AQI-camelCase{display:none;flex-direction:column;position:absolute;top:46px;left:10px;width:200px}.styles__filtersHolder___3RR33-camelCase:hover>.styles__filtersColumn___q6AQI-camelCase{display:flex}.styles__filterRow___358me-camelCase{background-color:#fff;border-radius:5px;box-shadow:0 0 4px 1.5px rgba(0,0,0,.2);display:flex;flex-direction:row;padding:5px 10px;margin:2.5px 0;font-family:Nunito,sans-serif;font-size:16px;color:#3a3a3a;flex:1}.styles__filters___1yvZa-camelCase{display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-top:3px}.styles__checkBox___2PRFO-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;border:2px solid #3a3a3a;border-radius:6px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#3a3a3a;background-color:#fff;transition:.2s}.styles__checkIcon___3E_H8-camelCase{font-size:14px;margin:auto}.styles__checkYes___BYvQ5-camelCase{border-color:#0bc2cf;background-color:#0bc2cf;color:#fff}.styles__checkNo___3DjH9-camelCase{border-color:rgba(0,0,0,.25);background-color:#fff;color:rgba(0,0,0,.25)}.styles__hitsHolder___1CF_t-camelCase{min-height:calc(100vh - 280px)}.styles__hitsContainer___2htuR-camelCase{display:grid;justify-content:center;grid-template-columns:repeat(auto-fill,265px);grid-gap:35px;max-width:90%;margin:0 5% 25px}.styles__setContainer___m0KCi-camelCase{width:265px;background-color:#fff;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center;list-style:none;text-decoration:none;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;transition:all .2s cubic-bezier(.39,.5,.15,1.36)}.styles__setContainer___m0KCi-camelCase:focus,.styles__setContainer___m0KCi-camelCase:hover{transform:scale(1.05)}.styles__setImageFiller___3xpdX-camelCase{background-color:#333}.styles__coverImage___2tfWa-camelCase,.styles__setImageFiller___3xpdX-camelCase{width:100%;height:180px;border-top-left-radius:7px;border-top-right-radius:7px}.styles__coverImage___2tfWa-camelCase{margin:auto;-o-object-fit:cover;object-fit:cover}.styles__setFillerContainer___3hm1X-camelCase{width:100%;height:180px;background-color:#0bc2cf;border-top-left-radius:7px;border-top-right-radius:7px;display:flex;justify-content:center;align-items:center}.styles__setFillerText___23w9t-camelCase{font-family:Titan One,sans-serif;font-size:45px;text-align:center;margin:auto;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__setQuestionsContainer___2zEAp-camelCase{background-color:rgba(0,0,0,.6);height:25px;width:145px;margin:-33px 10px 8px auto;border-radius:4px}.styles__setQuestionsText___3Gw2P-camelCase{font-size:18px;line-height:25px;margin:auto;text-align:center;color:#fff}.styles__setHeader___PG4IQ-camelCase,.styles__setQuestionsText___3Gw2P-camelCase{font-family:Nunito,sans-serif}.styles__setHeader___PG4IQ-camelCase{font-size:24px;font-weight:700;margin:10px 5% 5px;color:#3a3a3a;line-height:27px;word-wrap:break-word}.styles__setSpacer___1gVdD-camelCase{width:100%;height:15px;flex-grow:2}.styles__setPlays___2umLV-camelCase{font-family:Nunito,sans-serif;font-size:18px;font-weight:700;margin:5px 5% 0;color:#3a3a3a;display:flex;flex-direction:row;align-items:center}.styles__verifiedIcon___QdFZ2-camelCase{color:#0bc2cf;margin-left:9px}.styles__setLastEdit___2WcGf-camelCase{font-family:Nunito,sans-serif;font-size:16px;margin:2px 5%;color:#3a3a3a}.styles__setAuthorContainer___2z8t7-camelCase{display:flex;flex-direction:row;align-items:center;margin:0 5% 7px;height:25px}.styles__authorIcon___3CT7T-camelCase{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.styles__authorIcon___3CT7T-camelCase,.styles__setAuthorText___1ju9d-camelCase{font-size:16px;color:#3a3a3a}.styles__setAuthorText___1ju9d-camelCase{font-family:Nunito,sans-serif;margin-left:5px}.styles__setAuthorIcon___1xpEX-camelCase{height:20px;margin-left:5px}.styles__otherContainer___3BlPN-camelCase{display:flex;flex-direction:column}.styles__featuredHeaderContainer___3Sjw5-camelCase{min-width:400px;max-width:850px;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:#fff;border-radius:5px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);margin:20px auto;padding:20px}.styles__featuredHeaderText___91lD1-camelCase{font-size:48px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:auto}.styles__featuredHeaderText___91lD1-camelCase,.styles__noResultsText___1h9TG-camelCase{font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a;text-align:center}.styles__noResultsText___1h9TG-camelCase{margin:40px auto;display:flex;flex-direction:column;align-items:center;font-size:22px;max-width:300px}.styles__noResultsIcon___1oAZt-camelCase{font-size:102px;margin-bottom:10px}',
      ''
    ]), t.locals = {
      searchBoxHolder: 'styles__searchBoxHolder___2sicz-camelCase',
      searchContainer: 'styles__searchContainer___3wNvb-camelCase',
      filtersHolder: 'styles__filtersHolder___3RR33-camelCase',
      filterIcon: 'styles__filterIcon___2a4-v-camelCase',
      searchIcon: 'styles__searchIcon___n2x3x-camelCase',
      searchInput: 'styles__searchInput___3x0FW-camelCase',
      filtersColumn: 'styles__filtersColumn___q6AQI-camelCase',
      filterRow: 'styles__filterRow___358me-camelCase',
      filters: 'styles__filters___1yvZa-camelCase',
      checkBox: 'styles__checkBox___2PRFO-camelCase',
      checkIcon: 'styles__checkIcon___3E_H8-camelCase',
      checkYes: 'styles__checkYes___BYvQ5-camelCase',
      checkNo: 'styles__checkNo___3DjH9-camelCase',
      hitsHolder: 'styles__hitsHolder___1CF_t-camelCase',
      hitsContainer: 'styles__hitsContainer___2htuR-camelCase',
      setContainer: 'styles__setContainer___m0KCi-camelCase',
      setImageFiller: 'styles__setImageFiller___3xpdX-camelCase',
      coverImage: 'styles__coverImage___2tfWa-camelCase',
      setFillerContainer: 'styles__setFillerContainer___3hm1X-camelCase',
      setFillerText: 'styles__setFillerText___23w9t-camelCase',
      setQuestionsContainer: 'styles__setQuestionsContainer___2zEAp-camelCase',
      setQuestionsText: 'styles__setQuestionsText___3Gw2P-camelCase',
      setHeader: 'styles__setHeader___PG4IQ-camelCase',
      setSpacer: 'styles__setSpacer___1gVdD-camelCase',
      setPlays: 'styles__setPlays___2umLV-camelCase',
      verifiedIcon: 'styles__verifiedIcon___QdFZ2-camelCase',
      setLastEdit: 'styles__setLastEdit___2WcGf-camelCase',
      setAuthorContainer: 'styles__setAuthorContainer___2z8t7-camelCase',
      authorIcon: 'styles__authorIcon___3CT7T-camelCase',
      setAuthorText: 'styles__setAuthorText___1ju9d-camelCase',
      setAuthorIcon: 'styles__setAuthorIcon___1xpEX-camelCase',
      otherContainer: 'styles__otherContainer___3BlPN-camelCase',
      featuredHeaderContainer: 'styles__featuredHeaderContainer___3Sjw5-camelCase',
      featuredHeaderText: 'styles__featuredHeaderText___91lD1-camelCase',
      noResultsText: 'styles__noResultsText___1h9TG-camelCase',
      noResultsIcon: 'styles__noResultsIcon___1oAZt-camelCase'
    };
  },
  rqsW: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('wIs1'), u = a('mLw1'), m = a('b6Qr'), p = a('vDqi'), _ = a.n(p), d = a('TSYQ'), f = a.n(d), h = a('pMbe'), y = a('1Yba'), g = a.n(y), b = a('GIcp'), x = a.n(b), v = a('dJL0'), C = a('iQ+n'), w = a('anyA'), I = a('ZENw'), k = a('Bz36'), E = a('bpVs'), S = a('EmPG'), N = a('TN+F'), j = a('SdQT');
    function T(e) {
      return (T = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function O(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    function R(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? O(Object(a), !0).forEach(function (t) {
          H(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }
      return e;
    }
    function H(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }
    function z(e, t, a, s, n, r, o) {
      try {
        var i = e[r](o), l = i.value;
      } catch (e) {
        return void a(e);
      }
      i.done ? t(l) : Promise.resolve(l).then(s, n);
    }
    function P(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function B(e, t) {
      return (B = Object.setPrototypeOf || function (e, t) {
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
        var a, s = L(e);
        if (t) {
          var n = L(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return A(this, a);
      };
    }
    function A(e, t) {
      return !t || 'object' !== T(t) && 'function' != typeof t ? U(e) : t;
    }
    function U(e) {
      if (void 0 === e)
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
      return e;
    }
    function L(e) {
      return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }
    var F = function (e, t) {
        return t ? n.a.createElement('div', { className: g.a.stageText }, Object(N.v)(e.dmg), n.a.createElement('i', { className: f()(g.a.stageIcon, 'fas fa-splotch') })) : n.a.createElement('div', { className: g.a.stageText }, 'Round '.concat(e.round));
      }, q = function (e) {
        !function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function');
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && B(e, t);
        }(l, e);
        var t, a, s, r, o, i = D(l);
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
            message: '',
            name: '',
            nameUsed: '',
            round: 0,
            isLive: !1,
            dmg: 0
          }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(U(t)), t.renderStats = t.renderStats.bind(U(t)), t;
        }
        return t = l, (a = [
          {
            key: 'componentDidMount',
            value: (r = regeneratorRuntime.mark(function e() {
              var t, a, s, n, r, o, i, l, c = this;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, this.props.user.getData();
                  case 2:
                    if ((t = e.sent) || this.setState({ notLoggedIn: !0 }), this.props.defense && 'final' === this.props.defense.stage) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt('return');
                  case 6:
                    if (this.isSolo = !this.props.defense.isLive, this.isHw = Boolean(this.props.defense.resultId), this.isSolo || this.isHw || this.props.firebase.setVal({
                        id: this.props.client.hostId,
                        path: 'c/'.concat(this.props.client.name),
                        val: {
                          c: R({}, this.props.defense.corrects),
                          i: R({}, this.props.defense.incorrects)
                        }
                      }), this.isHw && _.a.put('/api/results', {
                        id: this.props.defense.resultId,
                        data: {
                          corrects: this.props.defense.corrects,
                          incorrects: this.props.defense.incorrects,
                          round: this.props.defense.round,
                          alive: !1
                        }
                      }).catch(function (e) {
                        return console.error(e);
                      }), a = 0, s = 0, Object.values(this.props.defense.corrects).forEach(function (e) {
                        a += e, s += e;
                      }), Object.values(this.props.defense.incorrects).forEach(function (e) {
                        s += e;
                      }), n = this.props.client && this.props.client.blook ? this.props.client.blook : Object(N.o)(S.a), r = this.props.client && this.props.client.name ? this.props.client.name : 'You', (o = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                          name: r,
                          blook: n,
                          place: Math.max(1, 30 - (this.props.defense.round - 1)),
                          round: this.props.defense.round - 1,
                          dmg: this.props.defense.dmg
                        }]).sort(function (e, t) {
                        return e.place - t.place;
                      }), -1 !== (i = o.map(function (e) {
                        return e.name;
                      }).indexOf(r))) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt('return');
                  case 21:
                    l = o[i].place, this.stats = {
                      place: l,
                      round: this.props.defense.round - 1,
                      dmg: o[i].dmg,
                      correctAnswers: a,
                      blookUsed: n,
                      nameUsed: r,
                      playersDefeated: this.props.defense.isLive ? this.props.client.standing.length - l : 0
                    }, this.props.defense.isLive ? this.readyTimeout = setTimeout(function () {
                      c.setState({
                        numCorrect: a,
                        numQuestions: s,
                        round: c.props.defense.round - 1,
                        nameUsed: r,
                        ready: !0,
                        standings: o,
                        isLive: !0,
                        dmg: o[i].dmg
                      });
                    }, 4750) : this.setState({
                      numCorrect: a,
                      numQuestions: s,
                      round: this.props.defense.round - 1,
                      message: Object(E.a)((l - 1) / 30),
                      nameUsed: r,
                      ready: !this.props.defense.defenseId || this.state.ready,
                      standings: o,
                      dmg: this.props.defense.dmg
                    }), t && (this.saveStats(t.name, function () {
                    }), _.a.put('/api/users/plan', {
                      name: t.name,
                      stripeId: t.stripe
                    }).then(function (e) {
                      c.here && c.setState({
                        ready: !c.props.defense.isLive || c.state.ready,
                        name: t.name,
                        plus: 'Starter' !== e.data.plan || c.props.client && c.props.client.plus
                      });
                    }).catch(function (e) {
                      console.error(e);
                    }), this.props.defense.defenseId && (_.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, _.a.delete('/api/defenses', {
                      params: {
                        name: t.name,
                        id: this.props.defense.defenseId
                      }
                    }).catch(function (e) {
                      console.error(e);
                    })));
                  case 25:
                  case 'end':
                    return e.stop();
                  }
              }, e, this);
            }), o = function () {
              var e = this, t = arguments;
              return new Promise(function (a, s) {
                var n = r.apply(e, t);
                function o(e) {
                  z(n, a, s, o, i, 'next', e);
                }
                function i(e) {
                  z(n, a, s, o, i, 'throw', e);
                }
                o(void 0);
              });
            }, function () {
              return o.apply(this, arguments);
            })
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              this.props.deleteClient(), clearTimeout(this.readyTimeout), this.here = !1;
            }
          },
          {
            key: 'saveStats',
            value: function (e, t) {
              this.isSolo ? (_.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, _.a.put('/api/users/defensestats/solo', {
                name: e,
                place: this.stats.place,
                round: this.stats.round,
                dmg: this.stats.dmg,
                blookUsed: this.stats.blookUsed,
                nameUsed: this.stats.nameUsed,
                correctAnswers: this.stats.correctAnswers
              }).then(t).catch(function (e) {
                return console.error(e);
              })) : (_.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, _.a.put('/api/users/defensestats/live', {
                name: e,
                place: this.stats.place,
                round: this.stats.round,
                dmg: this.stats.dmg,
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
              return n.a.createElement(k.a, {
                title: 'Damage',
                stat: Object(N.n)(this.state.dmg)
              });
            }
          },
          {
            key: 'render',
            value: function () {
              if (this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.defense || 'final' !== this.props.defense.stage || !this.props.defense.questions || !this.props.defense.questions[0])
                return n.a.createElement(u.a, { to: '/play' });
              var e = this.props.client && this.props.client.hwId;
              return n.a.createElement('div', {
                className: m.isMobile ? x.a.mBody : x.a.body,
                style: { backgroundColor: '#0bc2cf' }
              }, n.a.createElement(C.a, {
                title: 'Play Tower Defense | Blooket',
                desc: 'Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks.'
              }), n.a.createElement(v.a, {
                noRight: !e,
                rightText: 'Play Again',
                rightLink: '/play'
              }), this.state.ready ? this.state.isLive ? n.a.createElement(I.a, {
                standings: this.state.standings,
                name: this.props.client.name || 'You',
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.state.name,
                plus: this.props.client.plus,
                myStat: 'Survived '.concat(this.state.round, ' ').concat(1 === this.state.round ? 'Round' : 'Rounds'),
                saveStats: this.saveStats,
                renderStandingStat: function (e) {
                  return F(e, !0);
                },
                renderStats: this.renderStats,
                tokenMultiplier: 0.35
              }) : n.a.createElement(I.a, {
                standings: this.state.standings,
                name: this.state.nameUsed,
                numCorrect: this.state.numCorrect,
                numQuestions: this.state.numQuestions,
                username: this.state.name,
                plus: this.state.plus,
                myStat: 'Survived '.concat(this.state.round, ' ').concat(1 === this.state.round ? 'Round' : 'Rounds'),
                saveStats: this.saveStats,
                renderStandingStat: function (e) {
                  return F(e, !1);
                },
                renderStats: this.renderStats,
                customMessage: this.state.message,
                tokenMultiplier: 0.35
              }) : null);
            }
          }
        ]) && P(t.prototype, a), s && P(t, s), l;
      }(n.a.Component);
    q.propTypes = {
      client: l.a.object,
      defense: l.a.object,
      firebase: l.a.object,
      deleteClient: l.a.func.isRequired,
      user: l.a.object
    };
    t.a = Object(w.c)(Object(c.a)(Object(o.b)(function (e) {
      return {
        client: e.clients.client,
        defense: e.clients.client ? e.clients.client.defense : null
      };
    }, function (e) {
      return Object(r.b)({ deleteClient: h.a }, e);
    })(Object(j.d)(q))));
  },
  vugX: function (e, t, a) {
    'use strict';
    var s = a('q1tI'), n = a.n(s), r = a('ANjH'), o = a('/MKj'), i = a('17x9'), l = a.n(i), c = a('mLw1'), u = a('wIs1'), m = a('vDqi'), p = a.n(m), _ = a('5gLy'), d = a('GIcp'), f = a.n(d), h = a('pcIS'), y = a('gljj'), g = a('TN+F'), b = a('iQ+n'), x = a('SdQT');
    function v(e) {
      return (v = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    function C(e, t) {
      return function (e) {
        if (Array.isArray(e))
          return e;
      }(e) || function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var a = [], s = !0, n = !1, r = void 0;
        try {
          for (var o, i = e[Symbol.iterator](); !(s = (o = i.next()).done) && (a.push(o.value), !t || a.length !== t); s = !0);
        } catch (e) {
          n = !0, r = e;
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (n)
              throw r;
          }
        }
        return a;
      }(e, t) || function (e, t) {
        if (!e)
          return;
        if ('string' == typeof e)
          return w(e, t);
        var a = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === a && e.constructor && (a = e.constructor.name);
        if ('Map' === a || 'Set' === a)
          return Array.from(e);
        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
          return w(e, t);
      }(e, t) || function () {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }
    function w(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, s = new Array(t); a < t; a++)
        s[a] = e[a];
      return s;
    }
    function I(e, t) {
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        s.enumerable = s.enumerable || !1, s.configurable = !0, 'value' in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }
    function k(e, t) {
      return (k = Object.setPrototypeOf || function (e, t) {
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
        var a, s = N(e);
        if (t) {
          var n = N(this).constructor;
          a = Reflect.construct(s, arguments, n);
        } else
          a = s.apply(this, arguments);
        return S(this, a);
      };
    }
    function S(e, t) {
      return !t || 'object' !== v(t) && 'function' != typeof t ? function (e) {
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
        }), t && k(e, t);
      }(o, e);
      var t, a, s, r = E(o);
      function o(e) {
        var t;
        return function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }(this, o), (t = r.call(this, e)).state = {
          ready: !1,
          historyId: '',
          standings: [],
          muted: !!e.host && e.host.muted
        }, t;
      }
      return t = o, (a = [
        {
          key: 'componentDidMount',
          value: function () {
            var e = this;
            if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
              var t = JSON.parse(JSON.stringify(this.props.host));
              this.setState({ standings: t.standings }, function () {
                e.startTimeout = setTimeout(function () {
                  var a = {};
                  e.props.firebase.getDatabaseVal(t.id, 'c', function (s) {
                    var n = s || {};
                    Object.entries(n).forEach(function (e) {
                      var t = C(e, 2), s = t[0], n = t[1], r = {};
                      if (n.i)
                        if (Array.isArray(n.i))
                          for (var o = 0; o < n.i.length; o++) {
                            var i = n.i[o];
                            i && (r[o] = i);
                          }
                        else
                          r = n.i;
                      else
                        r = {};
                      var l = {};
                      if (n.c)
                        if (Array.isArray(n.c))
                          for (var c = 0; c < n.c.length; c++) {
                            var u = n.c[c];
                            u && (l[c] = u);
                          }
                        else
                          l = n.c;
                      else
                        l = {};
                      a[s] = {
                        corrects: l,
                        incorrects: r
                      };
                    }), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), window.removeEventListener('beforeunload', g.u), e.waitTimeout = setTimeout(function () {
                      e.state.standings.length > 0 && (p.a.defaults.headers.common.Authorization = 'undefined' != typeof window ? localStorage.getItem('token') : null, p.a.post('/api/history', {
                        standings: t.standings.map(function (e) {
                          return {
                            blook: e.blook,
                            name: e.name,
                            place: e.place,
                            dmg: e.dmg,
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
            return this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0] ? n.a.createElement('div', {
              className: f.a.hostBody,
              style: {
                overflowY: this.state.ready ? 'auto' : 'hidden',
                backgroundSize: 100,
                backgroundImage: 'url('.concat(y.a, ')')
              }
            }, n.a.createElement(b.a, {
              title: 'Host Blooket',
              desc: 'Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity.'
            }), this.state.standings.length > 0 ? n.a.createElement(h.a, {
              standings: this.state.standings,
              stats: this.state.standings.map(function (e) {
                return ''.concat(Object(g.n)(e.dmg), ' Damage');
              }),
              gameId: this.props.gameId,
              historyId: this.state.historyId,
              muted: this.state.muted
            }) : null) : n.a.createElement(c.a, { to: '/dashboard' });
          }
        }
      ]) && I(t.prototype, a), s && I(t, s), o;
    }(n.a.Component);
    j.propTypes = {
      gameId: l.a.string,
      host: l.a.object,
      firebase: l.a.object,
      deleteHost: l.a.func.isRequired
    };
    t.a = Object(u.a)(Object(o.b)(function (e) {
      return {
        host: e.hosts.host,
        gameId: e.hosts.id
      };
    }, function (e) {
      return Object(r.b)({ deleteHost: _.c }, e);
    })(Object(x.d)(j)));
  },
  wQpl: function (e, t, a) {
    var s = a('YqwT');
    'string' == typeof s && (s = [[
        e.i,
        s,
        ''
      ]]);
    var n = {
      hmr: !0,
      transform: void 0,
      insertInto: void 0
    };
    a('aET+')(s, n);
    s.locals && (e.exports = s.locals);
  }
}]);