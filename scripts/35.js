(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{
  '0mo+': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '༡',
          2: '༢',
          3: '༣',
          4: '༤',
          5: '༥',
          6: '༦',
          7: '༧',
          8: '༨',
          9: '༩',
          0: '༠'
        }, n = {
          '༡': '1',
          '༢': '2',
          '༣': '3',
          '༤': '4',
          '༥': '5',
          '༦': '6',
          '༧': '7',
          '༨': '8',
          '༩': '9',
          '༠': '0'
        };
      return e.defineLocale('bo', {
        months: 'ཟླ\u0F0Bབ\u0F0Bདང\u0F0Bཔོ_ཟླ\u0F0Bབ\u0F0Bགཉིས\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bགསུམ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཞི\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bལྔ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདྲུག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབདུན\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབརྒྱད\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bདགུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཅིག\u0F0Bཔ_ཟླ\u0F0Bབ\u0F0Bབཅུ\u0F0Bགཉིས\u0F0Bཔ'.split('_'),
        monthsShort: 'ཟླ\u0F0B1_ཟླ\u0F0B2_ཟླ\u0F0B3_ཟླ\u0F0B4_ཟླ\u0F0B5_ཟླ\u0F0B6_ཟླ\u0F0B7_ཟླ\u0F0B8_ཟླ\u0F0B9_ཟླ\u0F0B10_ཟླ\u0F0B11_ཟླ\u0F0B12'.split('_'),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: !0,
        weekdays: 'གཟའ\u0F0Bཉི\u0F0Bམ\u0F0B_གཟའ\u0F0Bཟླ\u0F0Bབ\u0F0B_གཟའ\u0F0Bམིག\u0F0Bདམར\u0F0B_གཟའ\u0F0Bལྷག\u0F0Bཔ\u0F0B_གཟའ\u0F0Bཕུར\u0F0Bབུ_གཟའ\u0F0Bཔ\u0F0Bསངས\u0F0B_གཟའ\u0F0Bསྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysShort: 'ཉི\u0F0Bམ\u0F0B_ཟླ\u0F0Bབ\u0F0B_མིག\u0F0Bདམར\u0F0B_ལྷག\u0F0Bཔ\u0F0B_ཕུར\u0F0Bབུ_པ\u0F0Bསངས\u0F0B_སྤེན\u0F0Bཔ\u0F0B'.split('_'),
        weekdaysMin: 'ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[དི\u0F0Bརིང] LT',
          nextDay: '[སང\u0F0Bཉིན] LT',
          nextWeek: '[བདུན\u0F0Bཕྲག\u0F0Bརྗེས\u0F0Bམ], LT',
          lastDay: '[ཁ\u0F0Bསང] LT',
          lastWeek: '[བདུན\u0F0Bཕྲག\u0F0Bམཐའ\u0F0Bམ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ལ\u0F0B',
          past: '%s སྔན\u0F0Bལ',
          s: 'ལམ\u0F0Bསང',
          ss: '%d སྐར\u0F0Bཆ\u0F0D',
          m: 'སྐར\u0F0Bམ\u0F0Bགཅིག',
          mm: '%d སྐར\u0F0Bམ',
          h: 'ཆུ\u0F0Bཚོད\u0F0Bགཅིག',
          hh: '%d ཆུ\u0F0Bཚོད',
          d: 'ཉིན\u0F0Bགཅིག',
          dd: '%d ཉིན\u0F0B',
          M: 'ཟླ\u0F0Bབ\u0F0Bགཅིག',
          MM: '%d ཟླ\u0F0Bབ',
          y: 'ལོ\u0F0Bགཅིག',
          yy: '%d ལོ'
        },
        preparse: function (e) {
          return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'མཚན\u0F0Bམོ' === t && e >= 4 || 'ཉིན\u0F0Bགུང' === t && e < 5 || 'དགོང\u0F0Bདག' === t ? e + 12 : e;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'མཚན\u0F0Bམོ' : e < 10 ? 'ཞོགས\u0F0Bཀས' : e < 17 ? 'ཉིན\u0F0Bགུང' : e < 20 ? 'དགོང\u0F0Bདག' : 'མཚན\u0F0Bམོ';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '1ppg': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('fil', {
        months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'MM/D/YYYY',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY HH:mm',
          LLLL: 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar: {
          sameDay: 'LT [ngayong araw]',
          nextDay: '[Bukas ng] LT',
          nextWeek: 'LT [sa susunod na] dddd',
          lastDay: 'LT [kahapon]',
          lastWeek: 'LT [noong nakaraang] dddd',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'sa loob ng %s',
          past: '%s ang nakalipas',
          s: 'ilang segundo',
          ss: '%d segundo',
          m: 'isang minuto',
          mm: '%d minuto',
          h: 'isang oras',
          hh: '%d oras',
          d: 'isang araw',
          dd: '%d araw',
          M: 'isang buwan',
          MM: '%d buwan',
          y: 'isang taon',
          yy: '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function (e) {
          return e;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '1rYy': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('hy-am', {
        months: {
          format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
          standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY թ.',
          LLL: 'D MMMM YYYY թ., HH:mm',
          LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar: {
          sameDay: '[այսօր] LT',
          nextDay: '[վաղը] LT',
          lastDay: '[երեկ] LT',
          nextWeek: function () {
            return 'dddd [օրը ժամը] LT';
          },
          lastWeek: function () {
            return '[անցած] dddd [օրը ժամը] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s հետո',
          past: '%s առաջ',
          s: 'մի քանի վայրկյան',
          ss: '%d վայրկյան',
          m: 'րոպե',
          mm: '%d րոպե',
          h: 'ժամ',
          hh: '%d ժամ',
          d: 'օր',
          dd: '%d օր',
          M: 'ամիս',
          MM: '%d ամիս',
          y: 'տարի',
          yy: '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
          return /^(ցերեկվա|երեկոյան)$/.test(e);
        },
        meridiem: function (e) {
          return e < 4 ? 'գիշերվա' : e < 12 ? 'առավոտվա' : e < 17 ? 'ցերեկվա' : 'երեկոյան';
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'DDD':
          case 'w':
          case 'W':
          case 'DDDo':
            return 1 === e ? e + '-ին' : e + '-րդ';
          default:
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '1xZ4': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ca', {
        months: {
          standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
          format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a les] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
          llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
          sameDay: function () {
            return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextDay: function () {
            return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastDay: function () {
            return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'd\'aquí %s',
          past: 'fa %s',
          s: 'uns segons',
          ss: '%d segons',
          m: 'un minut',
          mm: '%d minuts',
          h: 'una hora',
          hh: '%d hores',
          d: 'un dia',
          dd: '%d dies',
          M: 'un mes',
          MM: '%d mesos',
          y: 'un any',
          yy: '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
          var n = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
          return 'w' !== t && 'W' !== t || (n = 'a'), e + n;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '2fjn': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('fr-ca', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd\u2019hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
          default:
          case 'M':
          case 'Q':
          case 'D':
          case 'DDD':
          case 'd':
            return e + (1 === e ? 'er' : 'e');
          case 'w':
          case 'W':
            return e + (1 === e ? 're' : 'e');
          }
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '3E1r': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '१',
          2: '२',
          3: '३',
          4: '४',
          5: '५',
          6: '६',
          7: '७',
          8: '८',
          9: '९',
          0: '०'
        }, n = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };
      return e.defineLocale('hi', {
        months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm बजे',
          LTS: 'A h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[कल] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[कल] LT',
          lastWeek: '[पिछले] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s में',
          past: '%s पहले',
          s: 'कुछ ही क्षण',
          ss: '%d सेकंड',
          m: 'एक मिनट',
          mm: '%d मिनट',
          h: 'एक घंटा',
          hh: '%d घंटे',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महीने',
          MM: '%d महीने',
          y: 'एक वर्ष',
          yy: '%d वर्ष'
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'रात' === t ? e < 4 ? e : e + 12 : 'सुबह' === t ? e : 'दोपहर' === t ? e >= 10 ? e : e + 12 : 'शाम' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'रात' : e < 10 ? 'सुबह' : e < 17 ? 'दोपहर' : e < 20 ? 'शाम' : 'रात';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '4MV3': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '૧',
          2: '૨',
          3: '૩',
          4: '૪',
          5: '૫',
          6: '૬',
          7: '૭',
          8: '૮',
          9: '૯',
          0: '૦'
        }, n = {
          '૧': '1',
          '૨': '2',
          '૩': '3',
          '૪': '4',
          '૫': '5',
          '૬': '6',
          '૭': '7',
          '૮': '8',
          '૯': '9',
          '૦': '0'
        };
      return e.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm વાગ્યે',
          LTS: 'A h:mm:ss વાગ્યે',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
          LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
          sameDay: '[આજ] LT',
          nextDay: '[કાલે] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ગઇકાલે] LT',
          lastWeek: '[પાછલા] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s મા',
          past: '%s પહેલા',
          s: 'અમુક પળો',
          ss: '%d સેકંડ',
          m: 'એક મિનિટ',
          mm: '%d મિનિટ',
          h: 'એક કલાક',
          hh: '%d કલાક',
          d: 'એક દિવસ',
          dd: '%d દિવસ',
          M: 'એક મહિનો',
          MM: '%d મહિનો',
          y: 'એક વર્ષ',
          yy: '%d વર્ષ'
        },
        preparse: function (e) {
          return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'રાત' === t ? e < 4 ? e : e + 12 : 'સવાર' === t ? e : 'બપોર' === t ? e >= 10 ? e : e + 12 : 'સાંજ' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'રાત' : e < 10 ? 'સવાર' : e < 17 ? 'બપોર' : e < 20 ? 'સાંજ' : 'રાત';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '4dOw': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-ie', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '6+QB': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ms', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'pagi' === t ? e : 'tengahari' === t ? e >= 11 ? e : e + 12 : 'petang' === t || 'malam' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '6B0Y': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '១',
          2: '២',
          3: '៣',
          4: '៤',
          5: '៥',
          6: '៦',
          7: '៧',
          8: '៨',
          9: '៩',
          0: '០'
        }, n = {
          '១': '1',
          '២': '2',
          '៣': '3',
          '៤': '4',
          '៥': '5',
          '៦': '6',
          '៧': '7',
          '៨': '8',
          '៩': '9',
          '០': '0'
        };
      return e.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (e) {
          return 'ល្ងាច' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ព្រឹក' : 'ល្ងាច';
        },
        calendar: {
          sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
          nextDay: '[ស្អែក ម៉ោង] LT',
          nextWeek: 'dddd [ម៉ោង] LT',
          lastDay: '[ម្សិលមិញ ម៉ោង] LT',
          lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sទៀត',
          past: '%sមុន',
          s: 'ប៉ុន្មានវិនាទី',
          ss: '%d វិនាទី',
          m: 'មួយនាទី',
          mm: '%d នាទី',
          h: 'មួយម៉ោង',
          hh: '%d ម៉ោង',
          d: 'មួយថ្ងៃ',
          dd: '%d ថ្ងៃ',
          M: 'មួយខែ',
          MM: '%d ខែ',
          y: 'មួយឆ្នាំ',
          yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: 'ទី%d',
        preparse: function (e) {
          return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '7BjC': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          s: [
            'mõne sekundi',
            'mõni sekund',
            'paar sekundit'
          ],
          ss: [
            e + 'sekundi',
            e + 'sekundit'
          ],
          m: [
            'ühe minuti',
            'üks minut'
          ],
          mm: [
            e + ' minuti',
            e + ' minutit'
          ],
          h: [
            'ühe tunni',
            'tund aega',
            'üks tund'
          ],
          hh: [
            e + ' tunni',
            e + ' tundi'
          ],
          d: [
            'ühe päeva',
            'üks päev'
          ],
          M: [
            'kuu aja',
            'kuu aega',
            'üks kuu'
          ],
          MM: [
            e + ' kuu',
            e + ' kuud'
          ],
          y: [
            'ühe aasta',
            'aasta',
            'üks aasta'
          ],
          yy: [
            e + ' aasta',
            e + ' aastat'
          ]
        };
        return t ? a[n][2] ? a[n][2] : a[n][1] : o ? a[n][0] : a[n][1];
      }
      return e.defineLocale('et', {
        months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Täna,] LT',
          nextDay: '[Homme,] LT',
          nextWeek: '[Järgmine] dddd LT',
          lastDay: '[Eile,] LT',
          lastWeek: '[Eelmine] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s pärast',
          past: '%s tagasi',
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: '%d päeva',
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '7C5Q': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-in', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  '9rRi': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('gd', {
        months: [
          'Am Faoilleach',
          'An Gearran',
          'Am Màrt',
          'An Giblean',
          'An Cèitean',
          'An t-Ògmhios',
          'An t-Iuchar',
          'An Lùnastal',
          'An t-Sultain',
          'An Dàmhair',
          'An t-Samhain',
          'An Dùbhlachd'
        ],
        monthsShort: [
          'Faoi',
          'Gear',
          'Màrt',
          'Gibl',
          'Cèit',
          'Ògmh',
          'Iuch',
          'Lùn',
          'Sult',
          'Dàmh',
          'Samh',
          'Dùbh'
        ],
        monthsParseExact: !0,
        weekdays: [
          'Didòmhnaich',
          'Diluain',
          'Dimàirt',
          'Diciadain',
          'Diardaoin',
          'Dihaoine',
          'Disathairne'
        ],
        weekdaysShort: [
          'Did',
          'Dil',
          'Dim',
          'Dic',
          'Dia',
          'Dih',
          'Dis'
        ],
        weekdaysMin: [
          'Dò',
          'Lu',
          'Mà',
          'Ci',
          'Ar',
          'Ha',
          'Sa'
        ],
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[An-diugh aig] LT',
          nextDay: '[A-màireach aig] LT',
          nextWeek: 'dddd [aig] LT',
          lastDay: '[An-dè aig] LT',
          lastWeek: 'dddd [seo chaidh] [aig] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ann an %s',
          past: 'bho chionn %s',
          s: 'beagan diogan',
          ss: '%d diogan',
          m: 'mionaid',
          mm: '%d mionaidean',
          h: 'uair',
          hh: '%d uairean',
          d: 'latha',
          dd: '%d latha',
          M: 'mìos',
          MM: '%d mìosan',
          y: 'bliadhna',
          yy: '%d bliadhna'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'A+xa': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('cv', {
        months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
          LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
          LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar: {
          sameDay: '[Паян] LT [сехетре]',
          nextDay: '[Ыран] LT [сехетре]',
          lastDay: '[Ӗнер] LT [сехетре]',
          nextWeek: '[Ҫитес] dddd LT [сехетре]',
          lastWeek: '[Иртнӗ] dddd LT [сехетре]',
          sameElse: 'L'
        },
        relativeTime: {
          future: function (e) {
            return e + (/сехет$/i.exec(e) ? 'рен' : /ҫул$/i.exec(e) ? 'тан' : 'ран');
          },
          past: '%s каялла',
          s: 'пӗр-ик ҫеккунт',
          ss: '%d ҫеккунт',
          m: 'пӗр минут',
          mm: '%d минут',
          h: 'пӗр сехет',
          hh: '%d сехет',
          d: 'пӗр кун',
          dd: '%d кун',
          M: 'пӗр уйӑх',
          MM: '%d уйӑх',
          y: 'пӗр ҫул',
          yy: '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: '%d-мӗш',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  AvvY: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ml', {
        months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm -നു',
          LTS: 'A h:mm:ss -നു',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm -നു',
          LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar: {
          sameDay: '[ഇന്ന്] LT',
          nextDay: '[നാളെ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ഇന്നലെ] LT',
          lastWeek: '[കഴിഞ്ഞ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s കഴിഞ്ഞ്',
          past: '%s മുൻപ്',
          s: 'അൽപ നിമിഷങ്ങൾ',
          ss: '%d സെക്കൻഡ്',
          m: 'ഒരു മിനിറ്റ്',
          mm: '%d മിനിറ്റ്',
          h: 'ഒരു മണിക്കൂർ',
          hh: '%d മണിക്കൂർ',
          d: 'ഒരു ദിവസം',
          dd: '%d ദിവസം',
          M: 'ഒരു മാസം',
          MM: '%d മാസം',
          y: 'ഒരു വർഷം',
          yy: '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'രാത്രി' === t && e >= 4 || 'ഉച്ച കഴിഞ്ഞ്' === t || 'വൈകുന്നേരം' === t ? e + 12 : e;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'രാത്രി' : e < 12 ? 'രാവിലെ' : e < 17 ? 'ഉച്ച കഴിഞ്ഞ്' : e < 20 ? 'വൈകുന്നേരം' : 'രാത്രി';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  B55N: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ja', {
        eras: [
          {
            since: '2019-05-01',
            offset: 1,
            name: '令和',
            narrow: '\u32FF',
            abbr: 'R'
          },
          {
            since: '1989-01-08',
            until: '2019-04-30',
            offset: 1,
            name: '平成',
            narrow: '\u337B',
            abbr: 'H'
          },
          {
            since: '1926-12-25',
            until: '1989-01-07',
            offset: 1,
            name: '昭和',
            narrow: '\u337C',
            abbr: 'S'
          },
          {
            since: '1912-07-30',
            until: '1926-12-24',
            offset: 1,
            name: '大正',
            narrow: '\u337D',
            abbr: 'T'
          },
          {
            since: '1873-01-01',
            until: '1912-07-29',
            offset: 6,
            name: '明治',
            narrow: '\u337E',
            abbr: 'M'
          },
          {
            since: '0001-01-01',
            until: '1873-12-31',
            offset: 1,
            name: '西暦',
            narrow: 'AD',
            abbr: 'AD'
          },
          {
            since: '0000-12-31',
            until: -1 / 0,
            offset: 1,
            name: '紀元前',
            narrow: 'BC',
            abbr: 'BC'
          }
        ],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function (e, t) {
          return '元' === t[1] ? 1 : parseInt(t[1] || e, 10);
        },
        months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日 dddd HH:mm',
          l: 'YYYY/MM/DD',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
          return '午後' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? '午前' : '午後';
        },
        calendar: {
          sameDay: '[今日] LT',
          nextDay: '[明日] LT',
          nextWeek: function (e) {
            return e.week() !== this.week() ? '[来週]dddd LT' : 'dddd LT';
          },
          lastDay: '[昨日] LT',
          lastWeek: function (e) {
            return this.week() !== e.week() ? '[先週]dddd LT' : 'dddd LT';
          },
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function (e, t) {
          switch (t) {
          case 'y':
            return 1 === e ? '元年' : e + '年';
          case 'd':
          case 'D':
          case 'DDD':
            return e + '日';
          default:
            return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '数秒',
          ss: '%d秒',
          m: '1分',
          mm: '%d分',
          h: '1時間',
          hh: '%d時間',
          d: '1日',
          dd: '%d日',
          M: '1ヶ月',
          MM: '%dヶ月',
          y: '1年',
          yy: '%d年'
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  BVg3: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e) {
        return e % 100 == 11 || e % 10 != 1;
      }
      function n(e, n, o, a) {
        var r = e + ' ';
        switch (o) {
        case 's':
          return n || a ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'ss':
          return t(e) ? r + (n || a ? 'sekúndur' : 'sekúndum') : r + 'sekúnda';
        case 'm':
          return n ? 'mínúta' : 'mínútu';
        case 'mm':
          return t(e) ? r + (n || a ? 'mínútur' : 'mínútum') : n ? r + 'mínúta' : r + 'mínútu';
        case 'hh':
          return t(e) ? r + (n || a ? 'klukkustundir' : 'klukkustundum') : r + 'klukkustund';
        case 'd':
          return n ? 'dagur' : a ? 'dag' : 'degi';
        case 'dd':
          return t(e) ? n ? r + 'dagar' : r + (a ? 'daga' : 'dögum') : n ? r + 'dagur' : r + (a ? 'dag' : 'degi');
        case 'M':
          return n ? 'mánuður' : a ? 'mánuð' : 'mánuði';
        case 'MM':
          return t(e) ? n ? r + 'mánuðir' : r + (a ? 'mánuði' : 'mánuðum') : n ? r + 'mánuður' : r + (a ? 'mánuð' : 'mánuði');
        case 'y':
          return n || a ? 'ár' : 'ári';
        case 'yy':
          return t(e) ? r + (n || a ? 'ár' : 'árum') : r + (n || a ? 'ár' : 'ári');
        }
      }
      return e.defineLocale('is', {
        months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar: {
          sameDay: '[í dag kl.] LT',
          nextDay: '[á morgun kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[í gær kl.] LT',
          lastWeek: '[síðasta] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'eftir %s',
          past: 'fyrir %s síðan',
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: 'klukkustund',
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  ByF4: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('fo', {
        months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Í dag kl.] LT',
          nextDay: '[Í morgin kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[Í gjár kl.] LT',
          lastWeek: '[síðstu] dddd [kl] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'um %s',
          past: '%s síðani',
          s: 'fá sekund',
          ss: '%d sekundir',
          m: 'ein minuttur',
          mm: '%d minuttir',
          h: 'ein tími',
          hh: '%d tímar',
          d: 'ein dagur',
          dd: '%d dagar',
          M: 'ein mánaður',
          MM: '%d mánaðir',
          y: 'eitt ár',
          yy: '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  CjzT: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'), o = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i
        ], a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es-do', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, o) {
          return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: o,
        longMonthsParse: o,
        shortMonthsParse: o,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function () {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function () {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function () {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  CoRJ: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ar-ma', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'D/JM': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('eu', {
        months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY[ko] MMMM[ren] D[a]',
          LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
          LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
          l: 'YYYY-M-D',
          ll: 'YYYY[ko] MMM D[a]',
          lll: 'YYYY[ko] MMM D[a] HH:mm',
          llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar: {
          sameDay: '[gaur] LT[etan]',
          nextDay: '[bihar] LT[etan]',
          nextWeek: 'dddd LT[etan]',
          lastDay: '[atzo] LT[etan]',
          lastWeek: '[aurreko] dddd LT[etan]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s barru',
          past: 'duela %s',
          s: 'segundo batzuk',
          ss: '%d segundo',
          m: 'minutu bat',
          mm: '%d minutu',
          h: 'ordu bat',
          hh: '%d ordu',
          d: 'egun bat',
          dd: '%d egun',
          M: 'hilabete bat',
          MM: '%d hilabete',
          y: 'urte bat',
          yy: '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'DKr+': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          s: [
            'thoddea sekondamni',
            'thodde sekond'
          ],
          ss: [
            e + ' sekondamni',
            e + ' sekond'
          ],
          m: [
            'eka mintan',
            'ek minut'
          ],
          mm: [
            e + ' mintamni',
            e + ' mintam'
          ],
          h: [
            'eka voran',
            'ek vor'
          ],
          hh: [
            e + ' voramni',
            e + ' voram'
          ],
          d: [
            'eka disan',
            'ek dis'
          ],
          dd: [
            e + ' disamni',
            e + ' dis'
          ],
          M: [
            'eka mhoinean',
            'ek mhoino'
          ],
          MM: [
            e + ' mhoineamni',
            e + ' mhoine'
          ],
          y: [
            'eka vorsan',
            'ek voros'
          ],
          yy: [
            e + ' vorsamni',
            e + ' vorsam'
          ]
        };
        return o ? a[n][0] : a[n][1];
      }
      return e.defineLocale('gom-latn', {
        months: {
          standalone: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
          format: 'Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [vazta]',
          LTS: 'A h:mm:ss [vazta]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [vazta]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [vazta]',
          llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar: {
          sameDay: '[Aiz] LT',
          nextDay: '[Faleam] LT',
          nextWeek: '[Fuddlo] dddd[,] LT',
          lastDay: '[Kal] LT',
          lastWeek: '[Fattlo] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s',
          past: '%s adim',
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'D':
            return e + 'er';
          default:
          case 'M':
          case 'Q':
          case 'DDD':
          case 'd':
          case 'w':
          case 'W':
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 4
        },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'rati' === t ? e < 4 ? e : e + 12 : 'sokallim' === t ? e : 'donparam' === t ? e > 12 ? e : e + 12 : 'sanje' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'rati' : e < 12 ? 'sokallim' : e < 16 ? 'donparam' : e < 20 ? 'sanje' : 'rati';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Dkky: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('fr-ch', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd\u2019hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e, t) {
          switch (t) {
          default:
          case 'M':
          case 'Q':
          case 'D':
          case 'DDD':
          case 'd':
            return e + (1 === e ? 'er' : 'e');
          case 'w':
          case 'W':
            return e + (1 === e ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Dmvi: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-au', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 0,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  DxQv: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('da', {
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'på dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[i] dddd[s kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'få sekunder',
          ss: '%d sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en måned',
          MM: '%d måneder',
          y: 'et år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  G0Uy: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('mt', {
        months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Illum fil-]LT',
          nextDay: '[Għada fil-]LT',
          nextWeek: 'dddd [fil-]LT',
          lastDay: '[Il-bieraħ fil-]LT',
          lastWeek: 'dddd [li għadda] [fil-]LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'f\u2019 %s',
          past: '%s ilu',
          s: 'ftit sekondi',
          ss: '%d sekondi',
          m: 'minuta',
          mm: '%d minuti',
          h: 'siegħa',
          hh: '%d siegħat',
          d: 'ġurnata',
          dd: '%d ġranet',
          M: 'xahar',
          MM: '%d xhur',
          y: 'sena',
          yy: '%d sni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  H8ED: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var o, a;
        return 'm' === n ? t ? 'хвіліна' : 'хвіліну' : 'h' === n ? t ? 'гадзіна' : 'гадзіну' : e + ' ' + (o = +e, a = {
          ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: t ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
          hh: t ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
          dd: 'дзень_дні_дзён',
          MM: 'месяц_месяцы_месяцаў',
          yy: 'год_гады_гадоў'
        }[n].split('_'), o % 10 == 1 && o % 100 != 11 ? a[0] : o % 10 >= 2 && o % 10 <= 4 && (o % 100 < 10 || o % 100 >= 20) ? a[1] : a[2]);
      }
      return e.defineLocale('be', {
        months: {
          format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
          standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays: {
          format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
          standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., HH:mm',
          LLLL: 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar: {
          sameDay: '[Сёння ў] LT',
          nextDay: '[Заўтра ў] LT',
          lastDay: '[Учора ў] LT',
          nextWeek: function () {
            return '[У] dddd [ў] LT';
          },
          lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return '[У мінулую] dddd [ў] LT';
            case 1:
            case 2:
            case 4:
              return '[У мінулы] dddd [ў] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'праз %s',
          past: '%s таму',
          s: 'некалькі секунд',
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: 'дзень',
          dd: t,
          M: 'месяц',
          MM: t,
          y: 'год',
          yy: t
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
          return /^(дня|вечара)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + '-ы' : e + '-і';
          case 'D':
            return e + '-га';
          default:
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  HP3h: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '1',
          2: '2',
          3: '3',
          4: '4',
          5: '5',
          6: '6',
          7: '7',
          8: '8',
          9: '9',
          0: '0'
        }, n = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        }, o = {
          s: [
            'أقل من ثانية',
            'ثانية واحدة',
            [
              'ثانيتان',
              'ثانيتين'
            ],
            '%d ثوان',
            '%d ثانية',
            '%d ثانية'
          ],
          m: [
            'أقل من دقيقة',
            'دقيقة واحدة',
            [
              'دقيقتان',
              'دقيقتين'
            ],
            '%d دقائق',
            '%d دقيقة',
            '%d دقيقة'
          ],
          h: [
            'أقل من ساعة',
            'ساعة واحدة',
            [
              'ساعتان',
              'ساعتين'
            ],
            '%d ساعات',
            '%d ساعة',
            '%d ساعة'
          ],
          d: [
            'أقل من يوم',
            'يوم واحد',
            [
              'يومان',
              'يومين'
            ],
            '%d أيام',
            '%d يومًا',
            '%d يوم'
          ],
          M: [
            'أقل من شهر',
            'شهر واحد',
            [
              'شهران',
              'شهرين'
            ],
            '%d أشهر',
            '%d شهرا',
            '%d شهر'
          ],
          y: [
            'أقل من عام',
            'عام واحد',
            [
              'عامان',
              'عامين'
            ],
            '%d أعوام',
            '%d عامًا',
            '%d عام'
          ]
        }, a = function (e) {
          return function (t, a, r, s) {
            var i = n(t), d = o[e][n(t)];
            return 2 === i && (d = d[a ? 0 : 1]), d.replace(/%d/i, t);
          };
        }, r = [
          'يناير',
          'فبراير',
          'مارس',
          'أبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر'
        ];
      return e.defineLocale('ar-ly', {
        months: r,
        monthsShort: r,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/\u200FM/\u200FYYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: a('s'),
          ss: a('s'),
          m: a('m'),
          mm: a('m'),
          h: a('h'),
          hh: a('h'),
          d: a('d'),
          dd: a('d'),
          M: a('M'),
          MM: a('M'),
          y: a('y'),
          yy: a('y')
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, '\u060C');
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  IBtZ: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ka', {
        months: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
        monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays: {
          standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
          format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[დღეს] LT[-ზე]',
          nextDay: '[ხვალ] LT[-ზე]',
          lastDay: '[გუშინ] LT[-ზე]',
          nextWeek: '[შემდეგ] dddd LT[-ზე]',
          lastWeek: '[წინა] dddd LT-ზე',
          sameElse: 'L'
        },
        relativeTime: {
          future: function (e) {
            return e.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, function (e, t, n) {
              return 'ი' === n ? t + 'ში' : t + n + 'ში';
            });
          },
          past: function (e) {
            return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, 'ის წინ') : /წელი/.test(e) ? e.replace(/წელი$/, 'წლის წინ') : e;
          },
          s: 'რამდენიმე წამი',
          ss: '%d წამი',
          m: 'წუთი',
          mm: '%d წუთი',
          h: 'საათი',
          hh: '%d საათი',
          d: 'დღე',
          dd: '%d დღე',
          M: 'თვე',
          MM: '%d თვე',
          y: 'წელი',
          yy: '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
          return 0 === e ? e : 1 === e ? e + '-ლი' : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? 'მე-' + e : e + '-ე';
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'Ivi+': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ko', {
        months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY년 MMMM D일',
          LLL: 'YYYY년 MMMM D일 A h:mm',
          LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
          l: 'YYYY.MM.DD.',
          ll: 'YYYY년 MMMM D일',
          lll: 'YYYY년 MMMM D일 A h:mm',
          llll: 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar: {
          sameDay: '오늘 LT',
          nextDay: '내일 LT',
          nextWeek: 'dddd LT',
          lastDay: '어제 LT',
          lastWeek: '지난주 dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s 후',
          past: '%s 전',
          s: '몇 초',
          ss: '%d초',
          m: '1분',
          mm: '%d분',
          h: '한 시간',
          hh: '%d시간',
          d: '하루',
          dd: '%d일',
          M: '한 달',
          MM: '%d달',
          y: '일 년',
          yy: '%d년'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '일';
          case 'M':
            return e + '월';
          case 'w':
          case 'W':
            return e + '주';
          default:
            return e;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function (e) {
          return '오후' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? '오전' : '오후';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'JCF/': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '١',
          2: '٢',
          3: '٣',
          4: '٤',
          5: '٥',
          6: '٦',
          7: '٧',
          8: '٨',
          9: '٩',
          0: '٠'
        }, n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        }, o = [
          'کانونی دووەم',
          'شوبات',
          'ئازار',
          'نیسان',
          'ئایار',
          'حوزەیران',
          'تەمموز',
          'ئاب',
          'ئەیلوول',
          'تشرینی یەكەم',
          'تشرینی دووەم',
          'كانونی یەکەم'
        ];
      return e.defineLocale('ku', {
        months: o,
        monthsShort: o,
        weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (e) {
          return /ئێواره‌/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'به‌یانی' : 'ئێواره‌';
        },
        calendar: {
          sameDay: '[ئه‌مرۆ كاتژمێر] LT',
          nextDay: '[به‌یانی كاتژمێر] LT',
          nextWeek: 'dddd [كاتژمێر] LT',
          lastDay: '[دوێنێ كاتژمێر] LT',
          lastWeek: 'dddd [كاتژمێر] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'له‌ %s',
          past: '%s',
          s: 'چه‌ند چركه‌یه‌ك',
          ss: 'چركه‌ %d',
          m: 'یه‌ك خوله‌ك',
          mm: '%d خوله‌ك',
          h: 'یه‌ك كاتژمێر',
          hh: '%d كاتژمێر',
          d: 'یه‌ك ڕۆژ',
          dd: '%d ڕۆژ',
          M: 'یه‌ك مانگ',
          MM: '%d مانگ',
          y: 'یه‌ك ساڵ',
          yy: '%d ساڵ'
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e];
          }).replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, '\u060C');
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  JVSJ: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var o = e + ' ';
        switch (n) {
        case 'ss':
          return o += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi';
        case 'm':
          return t ? 'jedna minuta' : 'jedne minute';
        case 'mm':
          return o += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta';
        case 'h':
          return t ? 'jedan sat' : 'jednog sata';
        case 'hh':
          return o += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati';
        case 'dd':
          return o += 1 === e ? 'dan' : 'dana';
        case 'MM':
          return o += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci';
        case 'yy':
          return o += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina';
        }
      }
      return e.defineLocale('bs', {
        months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[u] [nedjelju] [u] LT';
            case 3:
              return '[u] [srijedu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
              return '[prošlu] dddd [u] LT';
            case 6:
              return '[prošle] [subote] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: 'dan',
          dd: t,
          M: 'mjesec',
          MM: t,
          y: 'godinu',
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  JvlW: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        ss: 'sekundė_sekundžių_sekundes',
        m: 'minutė_minutės_minutę',
        mm: 'minutės_minučių_minutes',
        h: 'valanda_valandos_valandą',
        hh: 'valandos_valandų_valandas',
        d: 'diena_dienos_dieną',
        dd: 'dienos_dienų_dienas',
        M: 'mėnuo_mėnesio_mėnesį',
        MM: 'mėnesiai_mėnesių_mėnesius',
        y: 'metai_metų_metus',
        yy: 'metai_metų_metus'
      };
      function n(e, t, n, o) {
        return t ? a(n)[0] : o ? a(n)[1] : a(n)[2];
      }
      function o(e) {
        return e % 10 == 0 || e > 10 && e < 20;
      }
      function a(e) {
        return t[e].split('_');
      }
      function r(e, t, r, s) {
        var i = e + ' ';
        return 1 === e ? i + n(0, t, r[0], s) : t ? i + (o(e) ? a(r)[1] : a(r)[0]) : s ? i + a(r)[1] : i + (o(e) ? a(r)[1] : a(r)[2]);
      }
      return e.defineLocale('lt', {
        months: {
          format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
          standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays: {
          format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
          standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY [m.] MMMM D [d.]',
          LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
          l: 'YYYY-MM-DD',
          ll: 'YYYY [m.] MMMM D [d.]',
          lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
          llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar: {
          sameDay: '[Šiandien] LT',
          nextDay: '[Rytoj] LT',
          nextWeek: 'dddd LT',
          lastDay: '[Vakar] LT',
          lastWeek: '[Praėjusį] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'po %s',
          past: 'prieš %s',
          s: function (e, t, n, o) {
            return t ? 'kelios sekundės' : o ? 'kelių sekundžių' : 'kelias sekundes';
          },
          ss: r,
          m: n,
          mm: r,
          h: n,
          hh: r,
          d: n,
          dd: r,
          M: n,
          MM: r,
          y: n,
          yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
          return e + '-oji';
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'K/tc': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('af', {
        months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
          return /^nm$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? 'vm' : 'VM' : n ? 'nm' : 'NM';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Vandag om] LT',
          nextDay: '[Môre om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[Gister om] LT',
          lastWeek: '[Laas] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oor %s',
          past: '%s gelede',
          s: '\'n paar sekondes',
          ss: '%d sekondes',
          m: '\'n minuut',
          mm: '%d minute',
          h: '\'n uur',
          hh: '%d ure',
          d: '\'n dag',
          dd: '%d dae',
          M: '\'n maand',
          MM: '%d maande',
          y: '\'n jaar',
          yy: '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  KTz0: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        words: {
          ss: [
            'sekund',
            'sekunda',
            'sekundi'
          ],
          m: [
            'jedan minut',
            'jednog minuta'
          ],
          mm: [
            'minut',
            'minuta',
            'minuta'
          ],
          h: [
            'jedan sat',
            'jednog sata'
          ],
          hh: [
            'sat',
            'sata',
            'sati'
          ],
          dd: [
            'dan',
            'dana',
            'dana'
          ],
          MM: [
            'mjesec',
            'mjeseca',
            'mjeseci'
          ],
          yy: [
            'godina',
            'godine',
            'godina'
          ]
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, o) {
          var a = t.words[o];
          return 1 === o.length ? n ? a[0] : a[1] : e + ' ' + t.correctGrammaticalCase(e, a);
        }
      };
      return e.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sjutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[u] [nedjelju] [u] LT';
            case 3:
              return '[u] [srijedu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
            }
          },
          lastDay: '[juče u] LT',
          lastWeek: function () {
            return [
              '[prošle] [nedjelje] [u] LT',
              '[prošlog] [ponedjeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srijede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT'
            ][this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'nekoliko sekundi',
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'dan',
          dd: t.translate,
          M: 'mjesec',
          MM: t.translate,
          y: 'godinu',
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  OIYi: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-ca', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'YYYY-MM-DD',
          LL: 'MMMM D, YYYY',
          LLL: 'MMMM D, YYYY h:mm A',
          LLLL: 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Oaa7: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-gb', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Ob0Z: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '१',
          2: '२',
          3: '३',
          4: '४',
          5: '५',
          6: '६',
          7: '७',
          8: '८',
          9: '९',
          0: '०'
        }, n = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };
      function o(e, t, n, o) {
        var a = '';
        if (t)
          switch (n) {
          case 's':
            a = 'काही सेकंद';
            break;
          case 'ss':
            a = '%d सेकंद';
            break;
          case 'm':
            a = 'एक मिनिट';
            break;
          case 'mm':
            a = '%d मिनिटे';
            break;
          case 'h':
            a = 'एक तास';
            break;
          case 'hh':
            a = '%d तास';
            break;
          case 'd':
            a = 'एक दिवस';
            break;
          case 'dd':
            a = '%d दिवस';
            break;
          case 'M':
            a = 'एक महिना';
            break;
          case 'MM':
            a = '%d महिने';
            break;
          case 'y':
            a = 'एक वर्ष';
            break;
          case 'yy':
            a = '%d वर्षे';
          }
        else
          switch (n) {
          case 's':
            a = 'काही सेकंदां';
            break;
          case 'ss':
            a = '%d सेकंदां';
            break;
          case 'm':
            a = 'एका मिनिटा';
            break;
          case 'mm':
            a = '%d मिनिटां';
            break;
          case 'h':
            a = 'एका तासा';
            break;
          case 'hh':
            a = '%d तासां';
            break;
          case 'd':
            a = 'एका दिवसा';
            break;
          case 'dd':
            a = '%d दिवसां';
            break;
          case 'M':
            a = 'एका महिन्या';
            break;
          case 'MM':
            a = '%d महिन्यां';
            break;
          case 'y':
            a = 'एका वर्षा';
            break;
          case 'yy':
            a = '%d वर्षां';
          }
        return a.replace(/%d/i, e);
      }
      return e.defineLocale('mr', {
        months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat: {
          LT: 'A h:mm वाजता',
          LTS: 'A h:mm:ss वाजता',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm वाजता',
          LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[उद्या] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[काल] LT',
          lastWeek: '[मागील] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमध्ये',
          past: '%sपूर्वी',
          s: o,
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: o,
          dd: o,
          M: o,
          MM: o,
          y: o,
          yy: o
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'पहाटे' === t || 'सकाळी' === t ? e : 'दुपारी' === t || 'सायंकाळी' === t || 'रात्री' === t ? e >= 12 ? e : e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e >= 0 && e < 6 ? 'पहाटे' : e < 12 ? 'सकाळी' : e < 17 ? 'दुपारी' : e < 20 ? 'सायंकाळी' : 'रात्री';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  OjkT: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '१',
          2: '२',
          3: '३',
          4: '४',
          5: '५',
          6: '६',
          7: '७',
          8: '८',
          9: '९',
          0: '०'
        }, n = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };
      return e.defineLocale('ne', {
        months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'Aको h:mm बजे',
          LTS: 'Aको h:mm:ss बजे',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, Aको h:mm बजे',
          LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (e) {
          return e.replace(/[१२३४५६७८९०]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'राति' === t ? e < 4 ? e : e + 12 : 'बिहान' === t ? e : 'दिउँसो' === t ? e >= 10 ? e : e + 12 : 'साँझ' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 3 ? 'राति' : e < 12 ? 'बिहान' : e < 16 ? 'दिउँसो' : e < 20 ? 'साँझ' : 'राति';
        },
        calendar: {
          sameDay: '[आज] LT',
          nextDay: '[भोलि] LT',
          nextWeek: '[आउँदो] dddd[,] LT',
          lastDay: '[हिजो] LT',
          lastWeek: '[गएको] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sमा',
          past: '%s अगाडि',
          s: 'केही क्षण',
          ss: '%d सेकेण्ड',
          m: 'एक मिनेट',
          mm: '%d मिनेट',
          h: 'एक घण्टा',
          hh: '%d घण्टा',
          d: 'एक दिन',
          dd: '%d दिन',
          M: 'एक महिना',
          MM: '%d महिना',
          y: 'एक बर्ष',
          yy: '%d बर्ष'
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  PA2r: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'), n = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'), o = [
          /^led/i,
          /^úno/i,
          /^bře/i,
          /^dub/i,
          /^kvě/i,
          /^(čvn|červen$|června)/i,
          /^(čvc|červenec|července)/i,
          /^srp/i,
          /^zář/i,
          /^říj/i,
          /^lis/i,
          /^pro/i
        ], a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
      function r(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10);
      }
      function s(e, t, n, o) {
        var a = e + ' ';
        switch (n) {
        case 's':
          return t || o ? 'pár sekund' : 'pár sekundami';
        case 'ss':
          return t || o ? a + (r(e) ? 'sekundy' : 'sekund') : a + 'sekundami';
        case 'm':
          return t ? 'minuta' : o ? 'minutu' : 'minutou';
        case 'mm':
          return t || o ? a + (r(e) ? 'minuty' : 'minut') : a + 'minutami';
        case 'h':
          return t ? 'hodina' : o ? 'hodinu' : 'hodinou';
        case 'hh':
          return t || o ? a + (r(e) ? 'hodiny' : 'hodin') : a + 'hodinami';
        case 'd':
          return t || o ? 'den' : 'dnem';
        case 'dd':
          return t || o ? a + (r(e) ? 'dny' : 'dní') : a + 'dny';
        case 'M':
          return t || o ? 'měsíc' : 'měsícem';
        case 'MM':
          return t || o ? a + (r(e) ? 'měsíce' : 'měsíců') : a + 'měsíci';
        case 'y':
          return t || o ? 'rok' : 'rokem';
        case 'yy':
          return t || o ? a + (r(e) ? 'roky' : 'let') : a + 'lety';
        }
      }
      return e.defineLocale('cs', {
        months: t,
        monthsShort: n,
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: o,
        longMonthsParse: o,
        shortMonthsParse: o,
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY'
        },
        calendar: {
          sameDay: '[dnes v] LT',
          nextDay: '[zítra v] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[v neděli v] LT';
            case 1:
            case 2:
              return '[v] dddd [v] LT';
            case 3:
              return '[ve středu v] LT';
            case 4:
              return '[ve čtvrtek v] LT';
            case 5:
              return '[v pátek v] LT';
            case 6:
              return '[v sobotu v] LT';
            }
          },
          lastDay: '[včera v] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[minulou neděli v] LT';
            case 1:
            case 2:
              return '[minulé] dddd [v] LT';
            case 3:
              return '[minulou středu v] LT';
            case 4:
            case 5:
              return '[minulý] dddd [v] LT';
            case 6:
              return '[minulou sobotu v] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'před %s',
          s: s,
          ss: s,
          m: s,
          mm: s,
          h: s,
          hh: s,
          d: s,
          dd: s,
          M: s,
          MM: s,
          y: s,
          yy: s
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  PpIw: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '೧',
          2: '೨',
          3: '೩',
          4: '೪',
          5: '೫',
          6: '೬',
          7: '೭',
          8: '೮',
          9: '೯',
          0: '೦'
        }, n = {
          '೧': '1',
          '೨': '2',
          '೩': '3',
          '೪': '4',
          '೫': '5',
          '೬': '6',
          '೭': '7',
          '೮': '8',
          '೯': '9',
          '೦': '0'
        };
      return e.defineLocale('kn', {
        months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[ಇಂದು] LT',
          nextDay: '[ನಾಳೆ] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[ನಿನ್ನೆ] LT',
          lastWeek: '[ಕೊನೆಯ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ನಂತರ',
          past: '%s ಹಿಂದೆ',
          s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
          ss: '%d ಸೆಕೆಂಡುಗಳು',
          m: 'ಒಂದು ನಿಮಿಷ',
          mm: '%d ನಿಮಿಷ',
          h: 'ಒಂದು ಗಂಟೆ',
          hh: '%d ಗಂಟೆ',
          d: 'ಒಂದು ದಿನ',
          dd: '%d ದಿನ',
          M: 'ಒಂದು ತಿಂಗಳು',
          MM: '%d ತಿಂಗಳು',
          y: 'ಒಂದು ವರ್ಷ',
          yy: '%d ವರ್ಷ'
        },
        preparse: function (e) {
          return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'ರಾತ್ರಿ' === t ? e < 4 ? e : e + 12 : 'ಬೆಳಿಗ್ಗೆ' === t ? e : 'ಮಧ್ಯಾಹ್ನ' === t ? e >= 10 ? e : e + 12 : 'ಸಂಜೆ' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ರಾತ್ರಿ' : e < 10 ? 'ಬೆಳಿಗ್ಗೆ' : e < 17 ? 'ಮಧ್ಯಾಹ್ನ' : e < 20 ? 'ಸಂಜೆ' : 'ರಾತ್ರಿ';
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function (e) {
          return e + 'ನೇ';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Qj4J: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ar-kw', {
        months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 0,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  RAwQ: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          m: [
            'eng Minutt',
            'enger Minutt'
          ],
          h: [
            'eng Stonn',
            'enger Stonn'
          ],
          d: [
            'een Dag',
            'engem Dag'
          ],
          M: [
            'ee Mount',
            'engem Mount'
          ],
          y: [
            'ee Joer',
            'engem Joer'
          ]
        };
        return t ? a[n][0] : a[n][1];
      }
      function n(e) {
        if (e = parseInt(e, 10), isNaN(e))
          return !1;
        if (e < 0)
          return !0;
        if (e < 10)
          return 4 <= e && e <= 7;
        if (e < 100) {
          var t = e % 10;
          return n(0 === t ? e / 10 : t);
        }
        if (e < 10000) {
          for (; e >= 10;)
            e /= 10;
          return n(e);
        }
        return n(e /= 1000);
      }
      return e.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm [Auer]',
          LTS: 'H:mm:ss [Auer]',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm [Auer]',
          LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
          sameDay: '[Haut um] LT',
          sameElse: 'L',
          nextDay: '[Muer um] LT',
          nextWeek: 'dddd [um] LT',
          lastDay: '[Gëschter um] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 2:
            case 4:
              return '[Leschten] dddd [um] LT';
            default:
              return '[Leschte] dddd [um] LT';
            }
          }
        },
        relativeTime: {
          future: function (e) {
            return n(e.substr(0, e.indexOf(' '))) ? 'a ' + e : 'an ' + e;
          },
          past: function (e) {
            return n(e.substr(0, e.indexOf(' '))) ? 'viru ' + e : 'virun ' + e;
          },
          s: 'e puer Sekonnen',
          ss: '%d Sekonnen',
          m: t,
          mm: '%d Minutten',
          h: t,
          hh: '%d Stonnen',
          d: t,
          dd: '%d Deeg',
          M: t,
          MM: '%d Méint',
          y: t,
          yy: '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  RiPy: function (e, t, n) {
    var o, a, r, s, i;
    s = this, i = function (e) {
      var t = !1, n = !1, o = !1, a = !1, r = 'escape years months weeks days hours minutes seconds milliseconds general'.split(' '), s = [
          {
            type: 'seconds',
            targets: [
              {
                type: 'minutes',
                value: 60
              },
              {
                type: 'hours',
                value: 3600
              },
              {
                type: 'days',
                value: 86400
              },
              {
                type: 'weeks',
                value: 604800
              },
              {
                type: 'months',
                value: 2678400
              },
              {
                type: 'years',
                value: 31536000
              }
            ]
          },
          {
            type: 'minutes',
            targets: [
              {
                type: 'hours',
                value: 60
              },
              {
                type: 'days',
                value: 1440
              },
              {
                type: 'weeks',
                value: 10080
              },
              {
                type: 'months',
                value: 44640
              },
              {
                type: 'years',
                value: 525600
              }
            ]
          },
          {
            type: 'hours',
            targets: [
              {
                type: 'days',
                value: 24
              },
              {
                type: 'weeks',
                value: 168
              },
              {
                type: 'months',
                value: 744
              },
              {
                type: 'years',
                value: 8760
              }
            ]
          },
          {
            type: 'days',
            targets: [
              {
                type: 'weeks',
                value: 7
              },
              {
                type: 'months',
                value: 31
              },
              {
                type: 'years',
                value: 365
              }
            ]
          },
          {
            type: 'months',
            targets: [{
                type: 'years',
                value: 12
              }]
          }
        ];
      function i(e, t) {
        return !(t.length > e.length) && -1 !== e.indexOf(t);
      }
      function d(e) {
        for (var t = ''; e;)
          t += '0', e -= 1;
        return t;
      }
      function _(e, t) {
        var n = e + '+' + L(w(t).sort(), function (e) {
          return e + ':' + t[e];
        }).join(',');
        return _.cache[n] || (_.cache[n] = Intl.NumberFormat(e, t)), _.cache[n];
      }
      function u(e, t, r) {
        var s, i, m, l = t.useToLocaleString, y = t.useGrouping, c = y && t.grouping.slice(), p = t.maximumSignificantDigits, f = t.minimumIntegerDigits || 1, M = t.fractionDigits || 0, L = t.groupingSeparator, h = t.decimalSeparator;
        if (l && r) {
          var Y, b = {
              minimumIntegerDigits: f,
              useGrouping: y
            };
          return M && (b.maximumFractionDigits = M, b.minimumFractionDigits = M), p && e > 0 && (b.maximumSignificantDigits = p), o ? (a || ((Y = v({}, t)).useGrouping = !1, Y.decimalSeparator = '.', e = parseFloat(u(e, Y), 10)), _(r, b).format(e)) : (n || ((Y = v({}, t)).useGrouping = !1, Y.decimalSeparator = '.', e = parseFloat(u(e, Y), 10)), e.toLocaleString(r, b));
        }
        var D = (p ? e.toPrecision(p + 1) : e.toFixed(M + 1)).split('e');
        m = D[1] || '', i = (D = D[0].split('.'))[1] || '';
        var k = (s = D[0] || '').length, S = i.length, w = k + S, T = s + i;
        (p && w === p + 1 || !p && S === M + 1) && ((T = function (e) {
          for (var t = e.split('').reverse(), n = 0, o = !0; o && n < t.length;)
            n ? '9' === t[n] ? t[n] = '0' : (t[n] = (parseInt(t[n], 10) + 1).toString(), o = !1) : (parseInt(t[n], 10) < 5 && (o = !1), t[n] = '0'), n += 1;
          return o && t.push('1'), t.reverse().join('');
        }(T)).length === w + 1 && (k += 1), S && (T = T.slice(0, -1)), s = T.slice(0, k), i = T.slice(k)), p && (i = i.replace(/0*$/, ''));
        var g = parseInt(m, 10);
        g > 0 ? i.length <= g ? (s += i += d(g - i.length), i = '') : (s += i.slice(0, g), i = i.slice(g)) : g < 0 && (i = d(Math.abs(g) - s.length) + s + i, s = '0'), p || ((i = i.slice(0, M)).length < M && (i += d(M - i.length)), s.length < f && (s = d(f - s.length) + s));
        var H, j = '';
        if (y)
          for (D = s; D.length;)
            c.length && (H = c.shift()), j && (j = L + j), j = D.slice(-H) + j, D = D.slice(0, -H);
        else
          j = s;
        return i && (j = j + h + i), j;
      }
      function m(e, t) {
        return e.label.length > t.label.length ? -1 : e.label.length < t.label.length ? 1 : 0;
      }
      function l(e, t) {
        var n = [];
        return M(w(t), function (o) {
          if ('_durationLabels' === o.slice(0, 15)) {
            var a = o.slice(15).toLowerCase();
            M(w(t[o]), function (r) {
              r.slice(0, 1) === e && n.push({
                type: a,
                key: r,
                label: t[o][r]
              });
            });
          }
        }), n;
      }
      _.cache = {};
      var y = {
        durationLabelsStandard: {
          S: 'millisecond',
          SS: 'milliseconds',
          s: 'second',
          ss: 'seconds',
          m: 'minute',
          mm: 'minutes',
          h: 'hour',
          hh: 'hours',
          d: 'day',
          dd: 'days',
          w: 'week',
          ww: 'weeks',
          M: 'month',
          MM: 'months',
          y: 'year',
          yy: 'years'
        },
        durationLabelsShort: {
          S: 'msec',
          SS: 'msecs',
          s: 'sec',
          ss: 'secs',
          m: 'min',
          mm: 'mins',
          h: 'hr',
          hh: 'hrs',
          d: 'dy',
          dd: 'dys',
          w: 'wk',
          ww: 'wks',
          M: 'mo',
          MM: 'mos',
          y: 'yr',
          yy: 'yrs'
        },
        durationTimeTemplates: {
          HMS: 'h:mm:ss',
          HM: 'h:mm',
          MS: 'm:ss'
        },
        durationLabelTypes: [
          {
            type: 'standard',
            string: '__'
          },
          {
            type: 'short',
            string: '_'
          }
        ],
        durationPluralKey: function (e, t, n) {
          return 1 === t && null === n ? e : e + e;
        }
      };
      function c(e) {
        return '[object Array]' === Object.prototype.toString.call(e);
      }
      function p(e) {
        return '[object Object]' === Object.prototype.toString.call(e);
      }
      function f(e, t) {
        var n, o = 0, a = e && e.length || 0;
        for ('function' != typeof t && (n = t, t = function (e) {
            return e === n;
          }); o < a;) {
          if (t(e[o]))
            return e[o];
          o += 1;
        }
      }
      function M(e, t) {
        var n = 0, o = e.length;
        if (e && o)
          for (; n < o;) {
            if (!1 === t(e[n], n))
              return;
            n += 1;
          }
      }
      function L(e, t) {
        var n = 0, o = e.length, a = [];
        if (!e || !o)
          return a;
        for (; n < o;)
          a[n] = t(e[n], n), n += 1;
        return a;
      }
      function h(e, t) {
        return L(e, function (e) {
          return e[t];
        });
      }
      function Y(e) {
        var t = [];
        return M(e, function (e) {
          e && t.push(e);
        }), t;
      }
      function b(e) {
        var t = [];
        return M(e, function (e) {
          f(t, e) || t.push(e);
        }), t;
      }
      function D(e, t) {
        var n = [];
        return M(e, function (e) {
          M(t, function (t) {
            e === t && n.push(e);
          });
        }), b(n);
      }
      function k(e, t) {
        var n = [];
        return M(e, function (o, a) {
          if (!t(o))
            return n = e.slice(a), !1;
        }), n;
      }
      function S(e, t) {
        return k(e.slice().reverse(), t).reverse();
      }
      function v(e, t) {
        for (var n in t)
          t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      function w(e) {
        var t = [];
        for (var n in e)
          e.hasOwnProperty(n) && t.push(n);
        return t;
      }
      function T(e, t) {
        var n = 0, o = e.length;
        if (!e || !o)
          return !1;
        for (; n < o;) {
          if (!0 === t(e[n], n))
            return !0;
          n += 1;
        }
        return !1;
      }
      function g(e) {
        var t = [];
        return M(e, function (e) {
          t = t.concat(e);
        }), t;
      }
      function H(e) {
        return '3.6' === e(3.55, 'en', {
          useGrouping: !1,
          minimumIntegerDigits: 1,
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });
      }
      function j(e) {
        var t = !0;
        return !!((t = (t = (t = t && '1' === e(1, 'en', { minimumIntegerDigits: 1 })) && '01' === e(1, 'en', { minimumIntegerDigits: 2 })) && '001' === e(1, 'en', { minimumIntegerDigits: 3 })) && (t = (t = (t = (t = t && '100' === e(99.99, 'en', {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0
        })) && '100.0' === e(99.99, 'en', {
          maximumFractionDigits: 1,
          minimumFractionDigits: 1
        })) && '99.99' === e(99.99, 'en', {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })) && '99.990' === e(99.99, 'en', {
          maximumFractionDigits: 3,
          minimumFractionDigits: 3
        })) && (t = (t = (t = (t = (t = t && '100' === e(99.99, 'en', { maximumSignificantDigits: 1 })) && '100' === e(99.99, 'en', { maximumSignificantDigits: 2 })) && '100' === e(99.99, 'en', { maximumSignificantDigits: 3 })) && '99.99' === e(99.99, 'en', { maximumSignificantDigits: 4 })) && '99.99' === e(99.99, 'en', { maximumSignificantDigits: 5 })) && (t = (t = t && '1,000' === e(1000, 'en', { useGrouping: !0 })) && '1000' === e(1000, 'en', { useGrouping: !1 })));
      }
      function x() {
        var e, t = [].slice.call(arguments), n = {};
        if (M(t, function (t, o) {
            if (!o) {
              if (!c(t))
                throw 'Expected array as the first argument to durationsFormat.';
              e = t;
            }
            'string' != typeof t && 'function' != typeof t ? 'number' != typeof t ? p(t) && v(n, t) : n.precision = t : n.template = t;
          }), !e || !e.length)
          return [];
        n.returnMomentTypes = !0;
        var o = L(e, function (e) {
            return e.format(n);
          }), a = D(r, b(h(g(o), 'type'))), s = n.largest;
        return s && (a = a.slice(0, s)), n.returnMomentTypes = !1, n.outputTypes = a, L(e, function (e) {
          return e.format(n);
        });
      }
      function P() {
        var n = [].slice.call(arguments), a = v({}, this.format.defaults), d = this.asMilliseconds(), _ = this.asMonths();
        'function' == typeof this.isValid && !1 === this.isValid() && (d = 0, _ = 0);
        var g = d < 0, H = e.duration(Math.abs(d), 'milliseconds'), j = e.duration(Math.abs(_), 'months');
        M(n, function (e) {
          'string' != typeof e && 'function' != typeof e ? 'number' != typeof e ? p(e) && v(a, e) : a.precision = e : a.template = e;
        });
        var x = {
            years: 'y',
            months: 'M',
            weeks: 'w',
            days: 'd',
            hours: 'h',
            minutes: 'm',
            seconds: 's',
            milliseconds: 'S'
          }, P = {
            escape: /\[(.+?)\]/,
            years: /\*?[Yy]+/,
            months: /\*?M+/,
            weeks: /\*?[Ww]+/,
            days: /\*?[Dd]+/,
            hours: /\*?[Hh]+/,
            minutes: /\*?m+/,
            seconds: /\*?s+/,
            milliseconds: /\*?S+/,
            general: /.+?/
          };
        a.types = r;
        var W = function (e) {
            return f(r, function (t) {
              return P[t].test(e);
            });
          }, R = new RegExp(L(r, function (e) {
            return P[e].source;
          }).join('|'), 'g');
        a.duration = this;
        var A = 'function' == typeof a.template ? a.template.apply(a) : a.template, F = a.outputTypes, O = a.returnMomentTypes, E = a.largest, J = [];
        F || (c(a.stopTrim) && (a.stopTrim = a.stopTrim.join('')), a.stopTrim && M(a.stopTrim.match(R), function (e) {
          var t = W(e);
          'escape' !== t && 'general' !== t && J.push(t);
        }));
        var z = e.localeData();
        z || (z = {}), M(w(y), function (e) {
          'function' != typeof y[e] ? z['_' + e] || (z['_' + e] = y[e]) : z[e] || (z[e] = y[e]);
        }), M(w(z._durationTimeTemplates), function (e) {
          A = A.replace('_' + e + '_', z._durationTimeTemplates[e]);
        });
        var V = a.userLocale || e.locale(), N = a.useLeftUnits, I = a.usePlural, G = a.precision, K = a.forceLength, C = a.useGrouping, B = a.trunc, U = a.useSignificantDigits && G > 0, q = U ? a.precision : 0, $ = q, Q = a.minValue, Z = !1, X = a.maxValue, ee = !1, te = a.useToLocaleString, ne = a.groupingSeparator, oe = a.decimalSeparator, ae = a.grouping;
        te = te && (t || o);
        var re = a.trim;
        c(re) && (re = re.join(' ')), null === re && (E || X || U) && (re = 'all'), null !== re && !0 !== re && 'left' !== re && 'right' !== re || (re = 'large'), !1 === re && (re = '');
        var se = function (e) {
            return e.test(re);
          }, ie = /large/, de = /small/, _e = /both/, ue = /mid/, me = /^all|[^sm]all/, le = /final/, ye = E > 0 || T([
            ie,
            _e,
            me
          ], se), ce = T([
            de,
            _e,
            me
          ], se), pe = T([
            ue,
            me
          ], se), fe = T([
            le,
            me
          ], se), Me = L(A.match(R), function (e, t) {
            var n = W(e);
            return '*' === e.slice(0, 1) && (e = e.slice(1), 'escape' !== n && 'general' !== n && J.push(n)), {
              index: t,
              length: e.length,
              text: '',
              token: 'escape' === n ? e.replace(P.escape, '$1') : e,
              type: 'escape' === n || 'general' === n ? null : n
            };
          }), Le = {
            index: 0,
            length: 0,
            token: '',
            text: '',
            type: null
          }, he = [];
        N && Me.reverse(), M(Me, function (e) {
          if (e.type)
            return (Le.type || Le.text) && he.push(Le), void (Le = e);
          N ? Le.text = e.token + Le.text : Le.text += e.token;
        }), (Le.type || Le.text) && he.push(Le), N && he.reverse();
        var Ye = D(r, b(Y(h(he, 'type'))));
        if (!Ye.length)
          return h(he, 'text').join('');
        Ye = L(Ye, function (e, t) {
          var n, o = t + 1 === Ye.length, r = !t;
          n = 'years' === e || 'months' === e ? j.as(e) : H.as(e);
          var s = Math.floor(n), i = n - s, d = f(he, function (t) {
              return e === t.type;
            });
          return r && X && n > X && (ee = !0), o && Q && Math.abs(a.duration.as(e)) < Q && (Z = !0), r && null === K && d.length > 1 && (K = !0), H.subtract(s, e), j.subtract(s, e), {
            rawValue: n,
            wholeValue: s,
            decimalValue: o ? i : 0,
            isSmallest: o,
            isLargest: r,
            type: e,
            tokenLength: d.length
          };
        });
        var be = B ? Math.floor : Math.round, De = function (e, t) {
            var n = Math.pow(10, t);
            return be(e * n) / n;
          }, ke = !1, Se = !1, ve = function (e, t) {
            var n = {
              useGrouping: C,
              groupingSeparator: ne,
              decimalSeparator: oe,
              grouping: ae,
              useToLocaleString: te
            };
            return U && (q <= 0 ? (e.rawValue = 0, e.wholeValue = 0, e.decimalValue = 0) : (n.maximumSignificantDigits = q, e.significantDigits = q)), ee && !Se && (e.isLargest ? (e.wholeValue = X, e.decimalValue = 0) : (e.wholeValue = 0, e.decimalValue = 0)), Z && !Se && (e.isSmallest ? (e.wholeValue = Q, e.decimalValue = 0) : (e.wholeValue = 0, e.decimalValue = 0)), e.isSmallest || e.significantDigits && e.significantDigits - e.wholeValue.toString().length <= 0 ? G < 0 ? e.value = De(e.wholeValue, G) : 0 === G ? e.value = be(e.wholeValue + e.decimalValue) : U ? (e.value = B ? De(e.rawValue, q - e.wholeValue.toString().length) : e.rawValue, e.wholeValue && (q -= e.wholeValue.toString().length)) : (n.fractionDigits = G, e.value = B ? e.wholeValue + De(e.decimalValue, G) : e.wholeValue + e.decimalValue) : U && e.wholeValue ? (e.value = Math.round(De(e.wholeValue, e.significantDigits - e.wholeValue.toString().length)), q -= e.wholeValue.toString().length) : e.value = e.wholeValue, e.tokenLength > 1 && (K || ke) && (n.minimumIntegerDigits = e.tokenLength, Se && n.maximumSignificantDigits < e.tokenLength && delete n.maximumSignificantDigits), !ke && (e.value > 0 || '' === re || f(J, e.type) || f(F, e.type)) && (ke = !0), e.formattedValue = u(e.value, n, V), n.useGrouping = !1, n.decimalSeparator = '.', e.formattedValueEn = u(e.value, n, 'en'), 2 === e.tokenLength && 'milliseconds' === e.type && (e.formattedValueMS = u(e.value, {
              minimumIntegerDigits: 3,
              useGrouping: !1
            }, 'en').slice(0, 2)), e;
          };
        if ((Ye = Y(Ye = L(Ye, ve))).length > 1) {
          var we = function (e) {
              return f(Ye, function (t) {
                return t.type === e;
              });
            }, Te = function (e) {
              var t = we(e.type);
              t && M(e.targets, function (e) {
                var n = we(e.type);
                n && parseInt(t.formattedValueEn, 10) === e.value && (t.rawValue = 0, t.wholeValue = 0, t.decimalValue = 0, n.rawValue += 1, n.wholeValue += 1, n.decimalValue = 0, n.formattedValueEn = n.wholeValue.toString(), Se = !0);
              });
            };
          M(s, Te);
        }
        return Se && (ke = !1, q = $, Ye = Y(Ye = L(Ye, ve))), !F || ee && !a.trim ? (ye && (Ye = k(Ye, function (e) {
          return !e.isSmallest && !e.wholeValue && !f(J, e.type);
        })), E && Ye.length && (Ye = Ye.slice(0, E)), ce && Ye.length > 1 && (Ye = S(Ye, function (e) {
          return !e.wholeValue && !f(J, e.type) && !e.isLargest;
        })), pe && (Ye = Y(Ye = L(Ye, function (e, t) {
          return t > 0 && t < Ye.length - 1 && !e.wholeValue ? null : e;
        }))), !fe || 1 !== Ye.length || Ye[0].wholeValue || !B && Ye[0].isSmallest && Ye[0].rawValue < Q || (Ye = [])) : Ye = Y(Ye = L(Ye, function (e) {
          return f(F, function (t) {
            return e.type === t;
          }) ? e : null;
        })), O ? Ye : (M(he, function (e) {
          var t = x[e.type], n = f(Ye, function (t) {
              return t.type === e.type;
            });
          if (t && n) {
            var o = n.formattedValueEn.split('.');
            o[0] = parseInt(o[0], 10), o[1] ? o[1] = parseFloat('0.' + o[1], 10) : o[1] = null;
            var a = z.durationPluralKey(t, o[0], o[1]), r = l(t, z), s = !1, d = {};
            M(z._durationLabelTypes, function (t) {
              var n = f(r, function (e) {
                return e.type === t.type && e.key === a;
              });
              n && (d[n.type] = n.label, i(e.text, t.string) && (e.text = e.text.replace(t.string, n.label), s = !0));
            }), I && !s && (r.sort(m), M(r, function (t) {
              return d[t.type] === t.label ? !i(e.text, t.label) && void 0 : i(e.text, t.label) ? (e.text = e.text.replace(t.label, d[t.type]), !1) : void 0;
            }));
          }
        }), (he = L(he, function (e) {
          if (!e.type)
            return e.text;
          var t = f(Ye, function (t) {
            return t.type === e.type;
          });
          if (!t)
            return '';
          var n = '';
          return N && (n += e.text), (g && ee || !g && Z) && (n += '< ', ee = !1, Z = !1), (g && Z || !g && ee) && (n += '> ', ee = !1, Z = !1), g && (t.value > 0 || '' === re || f(J, t.type) || f(F, t.type)) && (n += '-', g = !1), 'milliseconds' === e.type && t.formattedValueMS ? n += t.formattedValueMS : n += t.formattedValue, N || (n += e.text), n;
        })).join('').replace(/(,| |:|\.)*$/, '').replace(/^(,| |:|\.)*/, ''));
      }
      function W() {
        var e = this.duration, t = function (t) {
            return e._data[t];
          }, n = f(this.types, t), o = function (e, t) {
            for (var n = e.length; n -= 1;)
              if (t(e[n]))
                return e[n];
          }(this.types, t);
        switch (n) {
        case 'milliseconds':
          return 'S __';
        case 'seconds':
        case 'minutes':
          return '*_MS_';
        case 'hours':
          return '_HMS_';
        case 'days':
          if (n === o)
            return 'd __';
        case 'weeks':
          return n === o ? 'w __' : (null === this.trim && (this.trim = 'both'), 'w __, d __, h __');
        case 'months':
          if (n === o)
            return 'M __';
        case 'years':
          return n === o ? 'y __' : (null === this.trim && (this.trim = 'both'), 'y __, M __, d __');
        default:
          return null === this.trim && (this.trim = 'both'), 'y __, d __, h __, m __, s __';
        }
      }
      function R(e) {
        if (!e)
          throw 'Moment Duration Format init cannot find moment instance.';
        e.duration.format = x, e.duration.fn.format = P, e.duration.fn.format.defaults = {
          trim: null,
          stopTrim: null,
          largest: null,
          maxValue: null,
          minValue: null,
          precision: 0,
          trunc: !1,
          forceLength: null,
          userLocale: null,
          usePlural: !0,
          useLeftUnits: !1,
          useGrouping: !0,
          useSignificantDigits: !1,
          template: W,
          useToLocaleString: !0,
          groupingSeparator: ',',
          decimalSeparator: '.',
          grouping: [3]
        }, e.updateLocale('en', y);
      }
      var A = function (e, t, n) {
        return e.toLocaleString(t, n);
      };
      t = function () {
        try {
          0 .toLocaleString('i');
        } catch (e) {
          return 'RangeError' === e.name;
        }
        return !1;
      }() && j(A), n = t && H(A);
      var F = function (e, t, n) {
        if ('undefined' != typeof window && window && window.Intl && window.Intl.NumberFormat)
          return window.Intl.NumberFormat(t, n).format(e);
      };
      return o = j(F), a = o && H(F), R(e), R;
    }, a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = i) ? o.apply(t, a) : o) || (e.exports = r), s && (s.momentDurationFormatSetup = s.moment ? i(s.moment) : i);
  },
  S6ln: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var o = e + ' ';
        switch (n) {
        case 'ss':
          return o += 1 === e ? 'sekunda' : 2 === e || 3 === e || 4 === e ? 'sekunde' : 'sekundi';
        case 'm':
          return t ? 'jedna minuta' : 'jedne minute';
        case 'mm':
          return o += 1 === e ? 'minuta' : 2 === e || 3 === e || 4 === e ? 'minute' : 'minuta';
        case 'h':
          return t ? 'jedan sat' : 'jednog sata';
        case 'hh':
          return o += 1 === e ? 'sat' : 2 === e || 3 === e || 4 === e ? 'sata' : 'sati';
        case 'dd':
          return o += 1 === e ? 'dan' : 'dana';
        case 'MM':
          return o += 1 === e ? 'mjesec' : 2 === e || 3 === e || 4 === e ? 'mjeseca' : 'mjeseci';
        case 'yy':
          return o += 1 === e ? 'godina' : 2 === e || 3 === e || 4 === e ? 'godine' : 'godina';
        }
      }
      return e.defineLocale('hr', {
        months: {
          format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
          standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM YYYY',
          LLL: 'Do MMMM YYYY H:mm',
          LLLL: 'dddd, Do MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danas u] LT',
          nextDay: '[sutra u] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[u] [nedjelju] [u] LT';
            case 3:
              return '[u] [srijedu] [u] LT';
            case 6:
              return '[u] [subotu] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[u] dddd [u] LT';
            }
          },
          lastDay: '[jučer u] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[prošlu] [nedjelju] [u] LT';
            case 3:
              return '[prošlu] [srijedu] [u] LT';
            case 6:
              return '[prošle] [subote] [u] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prošli] dddd [u] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'prije %s',
          s: 'par sekundi',
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: 'dan',
          dd: t,
          M: 'mjesec',
          MM: t,
          y: 'godinu',
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  SFxW: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
      };
      return e.defineLocale('az', {
        months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün saat] LT',
          nextDay: '[sabah saat] LT',
          nextWeek: '[gələn həftə] dddd [saat] LT',
          lastDay: '[dünən] LT',
          lastWeek: '[keçən həftə] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s əvvəl',
          s: 'birneçə saniyə',
          ss: '%d saniyə',
          m: 'bir dəqiqə',
          mm: '%d dəqiqə',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir il',
          yy: '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
          return /^(gündüz|axşam)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'gecə' : e < 12 ? 'səhər' : e < 17 ? 'gündüz' : 'axşam';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
          if (0 === e)
            return e + '-ıncı';
          var n = e % 10;
          return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  UDhR: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('id', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'pagi' === t ? e : 'siang' === t ? e >= 11 ? e : e + 12 : 'sore' === t || 'malam' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'siang' : e < 19 ? 'sore' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Besok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kemarin pukul] LT',
          lastWeek: 'dddd [lalu pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lalu',
          s: 'beberapa detik',
          ss: '%d detik',
          m: 'semenit',
          mm: '%d menit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  USCx: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ga', {
        months: [
          'Eanáir',
          'Feabhra',
          'Márta',
          'Aibreán',
          'Bealtaine',
          'Meitheamh',
          'Iúil',
          'Lúnasa',
          'Meán Fómhair',
          'Deireadh Fómhair',
          'Samhain',
          'Nollaig'
        ],
        monthsShort: [
          'Ean',
          'Feabh',
          'Márt',
          'Aib',
          'Beal',
          'Meith',
          'Iúil',
          'Lún',
          'M.F.',
          'D.F.',
          'Samh',
          'Noll'
        ],
        monthsParseExact: !0,
        weekdays: [
          'Dé Domhnaigh',
          'Dé Luain',
          'Dé Máirt',
          'Dé Céadaoin',
          'Déardaoin',
          'Dé hAoine',
          'Dé Sathairn'
        ],
        weekdaysShort: [
          'Domh',
          'Luan',
          'Máirt',
          'Céad',
          'Déar',
          'Aoine',
          'Sath'
        ],
        weekdaysMin: [
          'Do',
          'Lu',
          'Má',
          'Cé',
          'Dé',
          'A',
          'Sa'
        ],
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Inniu ag] LT',
          nextDay: '[Amárach ag] LT',
          nextWeek: 'dddd [ag] LT',
          lastDay: '[Inné ag] LT',
          lastWeek: 'dddd [seo caite] [ag] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i %s',
          past: '%s ó shin',
          s: 'cúpla soicind',
          ss: '%d soicind',
          m: 'nóiméad',
          mm: '%d nóiméad',
          h: 'uair an chloig',
          hh: '%d uair an chloig',
          d: 'lá',
          dd: '%d lá',
          M: 'mí',
          MM: '%d míonna',
          y: 'bliain',
          yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
          return e + (1 === e ? 'd' : e % 10 == 2 ? 'na' : 'mh');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Vclq: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'), o = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i
        ], a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es-us', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, o) {
          return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: o,
        longMonthsParse: o,
        shortMonthsParse: o,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'MM/DD/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY h:mm A',
          LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar: {
          sameDay: function () {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function () {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function () {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  WYrj: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = [
          'ޖެނުއަރީ',
          'ފެބްރުއަރީ',
          'މާރިޗު',
          'އޭޕްރީލު',
          'މޭ',
          'ޖޫން',
          'ޖުލައި',
          'އޯގަސްޓު',
          'ސެޕްޓެމްބަރު',
          'އޮކްޓޯބަރު',
          'ނޮވެމްބަރު',
          'ޑިސެމްބަރު'
        ], n = [
          'އާދިއްތަ',
          'ހޯމަ',
          'އަންގާރަ',
          'ބުދަ',
          'ބުރާސްފަތި',
          'ހުކުރު',
          'ހޮނިހިރު'
        ];
      return e.defineLocale('dv', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/M/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
          return 'މފ' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'މކ' : 'މފ';
        },
        calendar: {
          sameDay: '[މިއަދު] LT',
          nextDay: '[މާދަމާ] LT',
          nextWeek: 'dddd LT',
          lastDay: '[އިއްޔެ] LT',
          lastWeek: '[ފާއިތުވި] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ތެރޭގައި %s',
          past: 'ކުރިން %s',
          s: 'ސިކުންތުކޮޅެއް',
          ss: 'd% ސިކުންތު',
          m: 'މިނިޓެއް',
          mm: 'މިނިޓު %d',
          h: 'ގަޑިއިރެއް',
          hh: 'ގަޑިއިރު %d',
          d: 'ދުވަހެއް',
          dd: 'ދުވަސް %d',
          M: 'މަހެއް',
          MM: 'މަސް %d',
          y: 'އަހަރެއް',
          yy: 'އަހަރު %d'
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '\u060C');
        },
        week: {
          dow: 7,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  WxRl: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
      function n(e, t, n, o) {
        var a = e;
        switch (n) {
        case 's':
          return o || t ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
          return a + (o || t) ? ' másodperc' : ' másodperce';
        case 'm':
          return 'egy' + (o || t ? ' perc' : ' perce');
        case 'mm':
          return a + (o || t ? ' perc' : ' perce');
        case 'h':
          return 'egy' + (o || t ? ' óra' : ' órája');
        case 'hh':
          return a + (o || t ? ' óra' : ' órája');
        case 'd':
          return 'egy' + (o || t ? ' nap' : ' napja');
        case 'dd':
          return a + (o || t ? ' nap' : ' napja');
        case 'M':
          return 'egy' + (o || t ? ' hónap' : ' hónapja');
        case 'MM':
          return a + (o || t ? ' hónap' : ' hónapja');
        case 'y':
          return 'egy' + (o || t ? ' év' : ' éve');
        case 'yy':
          return a + (o || t ? ' év' : ' éve');
        }
        return '';
      }
      function o(e) {
        return (e ? '' : '[múlt] ') + '[' + t[this.day()] + '] LT[-kor]';
      }
      return e.defineLocale('hu', {
        months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'YYYY.MM.DD.',
          LL: 'YYYY. MMMM D.',
          LLL: 'YYYY. MMMM D. H:mm',
          LLLL: 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
          return 'u' === e.charAt(1).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e < 12 ? !0 === n ? 'de' : 'DE' : !0 === n ? 'du' : 'DU';
        },
        calendar: {
          sameDay: '[ma] LT[-kor]',
          nextDay: '[holnap] LT[-kor]',
          nextWeek: function () {
            return o.call(this, !0);
          },
          lastDay: '[tegnap] LT[-kor]',
          lastWeek: function () {
            return o.call(this, !1);
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s múlva',
          past: '%s',
          s: n,
          ss: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  ZAMP: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ms-my', {
        months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'pagi' === t ? e : 'tengahari' === t ? e >= 11 ? e : e + 12 : 'petang' === t || 'malam' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'pagi' : e < 15 ? 'tengahari' : e < 19 ? 'petang' : 'malam';
        },
        calendar: {
          sameDay: '[Hari ini pukul] LT',
          nextDay: '[Esok pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kelmarin pukul] LT',
          lastWeek: 'dddd [lepas pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dalam %s',
          past: '%s yang lepas',
          s: 'beberapa saat',
          ss: '%d saat',
          m: 'seminit',
          mm: '%d minit',
          h: 'sejam',
          hh: '%d jam',
          d: 'sehari',
          dd: '%d hari',
          M: 'sebulan',
          MM: '%d bulan',
          y: 'setahun',
          yy: '%d tahun'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  Zduo: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('eo', {
        months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort: 'jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec'.split('_'),
        weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: '[la] D[-an de] MMMM, YYYY',
          LLL: '[la] D[-an de] MMMM, YYYY HH:mm',
          LLLL: 'dddd[n], [la] D[-an de] MMMM, YYYY HH:mm',
          llll: 'ddd, [la] D[-an de] MMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
          return 'p' === e.charAt(0).toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? 'p.t.m.' : 'P.T.M.' : n ? 'a.t.m.' : 'A.T.M.';
        },
        calendar: {
          sameDay: '[Hodiaŭ je] LT',
          nextDay: '[Morgaŭ je] LT',
          nextWeek: 'dddd[n je] LT',
          lastDay: '[Hieraŭ je] LT',
          lastWeek: '[pasintan] dddd[n je] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'post %s',
          past: 'antaŭ %s',
          s: 'kelkaj sekundoj',
          ss: '%d sekundoj',
          m: 'unu minuto',
          mm: '%d minutoj',
          h: 'unu horo',
          hh: '%d horoj',
          d: 'unu tago',
          dd: '%d tagoj',
          M: 'unu monato',
          MM: '%d monatoj',
          y: 'unu jaro',
          yy: '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: '%da',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  aIdf: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        return e + ' ' + function (e, t) {
          return 2 === t ? function (e) {
            var t = {
              m: 'v',
              b: 'v',
              d: 'z'
            };
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1);
          }(e) : e;
        }({
          mm: 'munutenn',
          MM: 'miz',
          dd: 'devezh'
        }[n], e);
      }
      var n = [
          /^gen/i,
          /^c[ʼ\']hwe/i,
          /^meu/i,
          /^ebr/i,
          /^mae/i,
          /^(mez|eve)/i,
          /^gou/i,
          /^eos/i,
          /^gwe/i,
          /^her/i,
          /^du/i,
          /^ker/i
        ], o = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i, a = [
          /^Su/i,
          /^Lu/i,
          /^Me([^r]|$)/i,
          /^Mer/i,
          /^Ya/i,
          /^Gw/i,
          /^Sa/i
        ];
      return e.defineLocale('br', {
        months: 'Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort: 'Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays: 'Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParse: a,
        fullWeekdaysParse: [
          /^sul/i,
          /^lun/i,
          /^meurzh/i,
          /^merc[ʼ\']her/i,
          /^yaou/i,
          /^gwener/i,
          /^sadorn/i
        ],
        shortWeekdaysParse: [
          /^Sul/i,
          /^Lun/i,
          /^Meu/i,
          /^Mer/i,
          /^Yao/i,
          /^Gwe/i,
          /^Sad/i
        ],
        minWeekdaysParse: a,
        monthsRegex: o,
        monthsShortRegex: o,
        monthsStrictRegex: /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
        monthsShortStrictRegex: /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [a viz] MMMM YYYY',
          LLL: 'D [a viz] MMMM YYYY HH:mm',
          LLLL: 'dddd, D [a viz] MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hiziv da] LT',
          nextDay: '[Warcʼhoazh da] LT',
          nextWeek: 'dddd [da] LT',
          lastDay: '[Decʼh da] LT',
          lastWeek: 'dddd [paset da] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'a-benn %s',
          past: '%s ʼzo',
          s: 'un nebeud segondennoù',
          ss: '%d eilenn',
          m: 'ur vunutenn',
          mm: t,
          h: 'un eur',
          hh: '%d eur',
          d: 'un devezh',
          dd: t,
          M: 'ur miz',
          MM: t,
          y: 'ur bloaz',
          yy: function (e) {
            switch (function e(t) {
                return t > 9 ? e(t % 10) : t;
              }(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + ' bloaz';
            default:
              return e + ' vloaz';
            }
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
          return e + (1 === e ? 'añ' : 'vet');
        },
        week: {
          dow: 1,
          doy: 4
        },
        meridiemParse: /a.m.|g.m./,
        isPM: function (e) {
          return 'g.m.' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'a.m.' : 'g.m.';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  aIsn: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [i] HH:mm',
          LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
          sameDay: '[i teie mahana, i] LT',
          nextDay: '[apopo i] LT',
          nextWeek: 'dddd [i] LT',
          lastDay: '[inanahi i] LT',
          lastWeek: 'dddd [whakamutunga i] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'i roto i %s',
          past: '%s i mua',
          s: 'te hēkona ruarua',
          ss: '%d hēkona',
          m: 'he meneti',
          mm: '%d meneti',
          h: 'te haora',
          hh: '%d haora',
          d: 'he ra',
          dd: '%d ra',
          M: 'he marama',
          MM: '%d marama',
          y: 'he tau',
          yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  aQkU: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('mk', {
        months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Денес во] LT',
          nextDay: '[Утре во] LT',
          nextWeek: '[Во] dddd [во] LT',
          lastDay: '[Вчера во] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return '[Изминатата] dddd [во] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[Изминатиот] dddd [во] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: 'пред %s',
          s: 'неколку секунди',
          ss: '%d секунди',
          m: 'една минута',
          mm: '%d минути',
          h: 'еден час',
          hh: '%d часа',
          d: 'еден ден',
          dd: '%d дена',
          M: 'еден месец',
          MM: '%d месеци',
          y: 'една година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + '-ев' : 0 === n ? e + '-ен' : n > 10 && n < 20 ? e + '-ти' : 1 === t ? e + '-ви' : 2 === t ? e + '-ри' : 7 === t || 8 === t ? e + '-ми' : e + '-ти';
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  b1Dy: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-nz', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  bOMt: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('nb', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[i dag kl.] LT',
          nextDay: '[i morgen kl.] LT',
          nextWeek: 'dddd [kl.] LT',
          lastDay: '[i går kl.] LT',
          lastWeek: '[forrige] dddd [kl.] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'noen sekunder',
          ss: '%d sekunder',
          m: 'ett minutt',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dager',
          M: 'en måned',
          MM: '%d måneder',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  bXm7: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
      };
      return e.defineLocale('kk', {
        months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгін сағат] LT',
          nextDay: '[Ертең сағат] LT',
          nextWeek: 'dddd [сағат] LT',
          lastDay: '[Кеше сағат] LT',
          lastWeek: '[Өткен аптаның] dddd [сағат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ішінде',
          past: '%s бұрын',
          s: 'бірнеше секунд',
          ss: '%d секунд',
          m: 'бір минут',
          mm: '%d минут',
          h: 'бір сағат',
          hh: '%d сағат',
          d: 'бір күн',
          dd: '%d күн',
          M: 'бір ай',
          MM: '%d ай',
          y: 'бір жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  bYM6: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  bpih: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('it', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: function () {
            return '[Oggi a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
          },
          nextDay: function () {
            return '[Domani a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
          },
          nextWeek: function () {
            return 'dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
          },
          lastDay: function () {
            return '[Ieri a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
          },
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[La scorsa] dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
            default:
              return '[Lo scorso] dddd [a' + (this.hours() > 1 ? 'lle ' : 0 === this.hours() ? ' ' : 'll\'') + ']LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'tra %s',
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: 'un\'ora',
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  bxKX: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('it-ch', {
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Oggi alle] LT',
          nextDay: '[Domani alle] LT',
          nextWeek: 'dddd [alle] LT',
          lastDay: '[Ieri alle] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[la scorsa] dddd [alle] LT';
            default:
              return '[lo scorso] dddd [alle] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function (e) {
            return (/^[0-9].+$/.test(e) ? 'tra' : 'in') + ' ' + e;
          },
          past: '%s fa',
          s: 'alcuni secondi',
          ss: '%d secondi',
          m: 'un minuto',
          mm: '%d minuti',
          h: 'un\'ora',
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  cRix: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'), n = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
      return e.defineLocale('fy', {
        months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort: function (e, o) {
          return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t;
        },
        monthsParseExact: !0,
        weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[hjoed om] LT',
          nextDay: '[moarn om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[juster om] LT',
          lastWeek: '[ôfrûne] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'oer %s',
          past: '%s lyn',
          s: 'in pear sekonden',
          ss: '%d sekonden',
          m: 'ien minút',
          mm: '%d minuten',
          h: 'ien oere',
          hh: '%d oeren',
          d: 'ien dei',
          dd: '%d dagen',
          M: 'ien moanne',
          MM: '%d moannen',
          y: 'ien jier',
          yy: '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
          return e + (1 === e || 8 === e || e >= 20 ? 'ste' : 'de');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  czMo: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-il', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  gekB: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), n = [
          'nolla',
          'yhden',
          'kahden',
          'kolmen',
          'neljän',
          'viiden',
          'kuuden',
          t[7],
          t[8],
          t[9]
        ];
      function o(e, o, a, r) {
        var s = '';
        switch (a) {
        case 's':
          return r ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
          s = r ? 'sekunnin' : 'sekuntia';
          break;
        case 'm':
          return r ? 'minuutin' : 'minuutti';
        case 'mm':
          s = r ? 'minuutin' : 'minuuttia';
          break;
        case 'h':
          return r ? 'tunnin' : 'tunti';
        case 'hh':
          s = r ? 'tunnin' : 'tuntia';
          break;
        case 'd':
          return r ? 'päivän' : 'päivä';
        case 'dd':
          s = r ? 'päivän' : 'päivää';
          break;
        case 'M':
          return r ? 'kuukauden' : 'kuukausi';
        case 'MM':
          s = r ? 'kuukauden' : 'kuukautta';
          break;
        case 'y':
          return r ? 'vuoden' : 'vuosi';
        case 'yy':
          s = r ? 'vuoden' : 'vuotta';
        }
        return s = function (e, o) {
          return e < 10 ? o ? n[e] : t[e] : e;
        }(e, r) + ' ' + s;
      }
      return e.defineLocale('fi', {
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'Do MMMM[ta] YYYY',
          LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'Do MMM YYYY',
          lll: 'Do MMM YYYY, [klo] HH.mm',
          llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar: {
          sameDay: '[tänään] [klo] LT',
          nextDay: '[huomenna] [klo] LT',
          nextWeek: 'dddd [klo] LT',
          lastDay: '[eilen] [klo] LT',
          lastWeek: '[viime] dddd[na] [klo] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s päästä',
          past: '%s sitten',
          s: o,
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: o,
          dd: o,
          M: o,
          MM: o,
          y: o,
          yy: o
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  gjCT: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '١',
          2: '٢',
          3: '٣',
          4: '٤',
          5: '٥',
          6: '٦',
          7: '٧',
          8: '٨',
          9: '٩',
          0: '٠'
        }, n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        };
      return e.defineLocale('ar-sa', {
        months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم على الساعة] LT',
          nextDay: '[غدا على الساعة] LT',
          nextWeek: 'dddd [على الساعة] LT',
          lastDay: '[أمس على الساعة] LT',
          lastWeek: 'dddd [على الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'في %s',
          past: 'منذ %s',
          s: 'ثوان',
          ss: '%d ثانية',
          m: 'دقيقة',
          mm: '%d دقائق',
          h: 'ساعة',
          hh: '%d ساعات',
          d: 'يوم',
          dd: '%d أيام',
          M: 'شهر',
          MM: '%d أشهر',
          y: 'سنة',
          yy: '%d سنوات'
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e];
          }).replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, '\u060C');
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  hKrs: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('bg', {
        months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort: 'яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'D.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[Днес в] LT',
          nextDay: '[Утре в] LT',
          nextWeek: 'dddd [в] LT',
          lastDay: '[Вчера в] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return '[Миналата] dddd [в] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[Миналия] dddd [в] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'след %s',
          past: 'преди %s',
          s: 'няколко секунди',
          ss: '%d секунди',
          m: 'минута',
          mm: '%d минути',
          h: 'час',
          hh: '%d часа',
          d: 'ден',
          dd: '%d дена',
          M: 'месец',
          MM: '%d месеца',
          y: 'година',
          yy: '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
          var t = e % 10, n = e % 100;
          return 0 === e ? e + '-ев' : 0 === n ? e + '-ен' : n > 10 && n < 20 ? e + '-ти' : 1 === t ? e + '-ви' : 2 === t ? e + '-ри' : 7 === t || 8 === t ? e + '-ми' : e + '-ти';
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  honF: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '၁',
          2: '၂',
          3: '၃',
          4: '၄',
          5: '၅',
          6: '၆',
          7: '၇',
          8: '၈',
          9: '၉',
          0: '၀'
        }, n = {
          '၁': '1',
          '၂': '2',
          '၃': '3',
          '၄': '4',
          '၅': '5',
          '၆': '6',
          '၇': '7',
          '၈': '8',
          '၉': '9',
          '၀': '0'
        };
      return e.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ယနေ.] LT [မှာ]',
          nextDay: '[မနက်ဖြန်] LT [မှာ]',
          nextWeek: 'dddd LT [မှာ]',
          lastDay: '[မနေ.က] LT [မှာ]',
          lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'လာမည့် %s မှာ',
          past: 'လွန်ခဲ့သော %s က',
          s: 'စက္ကန်.အနည်းငယ်',
          ss: '%d စက္ကန့်',
          m: 'တစ်မိနစ်',
          mm: '%d မိနစ်',
          h: 'တစ်နာရီ',
          hh: '%d နာရီ',
          d: 'တစ်ရက်',
          dd: '%d ရက်',
          M: 'တစ်လ',
          MM: '%d လ',
          y: 'တစ်နှစ်',
          yy: '%d နှစ်'
        },
        preparse: function (e) {
          return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  iEDd: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('gl', {
        months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function () {
            return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextDay: function () {
            return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          lastDay: function () {
            return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT';
          },
          lastWeek: function () {
            return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: function (e) {
            return 0 === e.indexOf('un') ? 'n' + e : 'en ' + e;
          },
          past: 'hai %s',
          s: 'uns segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'unha hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  iYuL: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), n = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'), o = [
          /^ene/i,
          /^feb/i,
          /^mar/i,
          /^abr/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^ago/i,
          /^sep/i,
          /^oct/i,
          /^nov/i,
          /^dic/i
        ], a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      return e.defineLocale('es', {
        months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort: function (e, o) {
          return e ? /-MMM-/.test(o) ? n[e.month()] : t[e.month()] : t;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: o,
        longMonthsParse: o,
        shortMonthsParse: o,
        weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar: {
          sameDay: function () {
            return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextDay: function () {
            return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          nextWeek: function () {
            return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastDay: function () {
            return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          lastWeek: function () {
            return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          ss: '%d segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un día',
          dd: '%d días',
          M: 'un mes',
          MM: '%d meses',
          y: 'un año',
          yy: '%d años'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        },
        invalidDate: 'Fecha invalida'
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  jUeY: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('el', {
        monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months: function (e, t) {
          return e ? 'string' == typeof t && /D/.test(t.substring(0, t.indexOf('MMMM'))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl;
        },
        monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem: function (e, t, n) {
          return e > 11 ? n ? 'μμ' : 'ΜΜ' : n ? 'πμ' : 'ΠΜ';
        },
        isPM: function (e) {
          return 'μ' === (e + '').toLowerCase()[0];
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl: {
          sameDay: '[Σήμερα {}] LT',
          nextDay: '[Αύριο {}] LT',
          nextWeek: 'dddd [{}] LT',
          lastDay: '[Χθες {}] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 6:
              return '[το προηγούμενο] dddd [{}] LT';
            default:
              return '[την προηγούμενη] dddd [{}] LT';
            }
          },
          sameElse: 'L'
        },
        calendar: function (e, t) {
          var n, o = this._calendarEl[e], a = t && t.hours();
          return n = o, ('undefined' != typeof Function && n instanceof Function || '[object Function]' === Object.prototype.toString.call(n)) && (o = o.apply(t)), o.replace('{}', a % 12 == 1 ? 'στη' : 'στις');
        },
        relativeTime: {
          future: 'σε %s',
          past: '%s πριν',
          s: 'λίγα δευτερόλεπτα',
          ss: '%d δευτερόλεπτα',
          m: 'ένα λεπτό',
          mm: '%d λεπτά',
          h: 'μία ώρα',
          hh: '%d ώρες',
          d: 'μία μέρα',
          dd: '%d μέρες',
          M: 'ένας μήνας',
          MM: '%d μήνες',
          y: 'ένας χρόνος',
          yy: '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  jfSC: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '۱',
          2: '۲',
          3: '۳',
          4: '۴',
          5: '۵',
          6: '۶',
          7: '۷',
          8: '۸',
          9: '۹',
          0: '۰'
        }, n = {
          '۱': '1',
          '۲': '2',
          '۳': '3',
          '۴': '4',
          '۵': '5',
          '۶': '6',
          '۷': '7',
          '۸': '8',
          '۹': '9',
          '۰': '0'
        };
      return e.defineLocale('fa', {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysShort: 'یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
          return /بعد از ظهر/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'قبل از ظهر' : 'بعد از ظهر';
        },
        calendar: {
          sameDay: '[امروز ساعت] LT',
          nextDay: '[فردا ساعت] LT',
          nextWeek: 'dddd [ساعت] LT',
          lastDay: '[دیروز ساعت] LT',
          lastWeek: 'dddd [پیش] [ساعت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'در %s',
          past: '%s پیش',
          s: 'چند ثانیه',
          ss: '%d ثانیه',
          m: 'یک دقیقه',
          mm: '%d دقیقه',
          h: 'یک ساعت',
          hh: '%d ساعت',
          d: 'یک روز',
          dd: '%d روز',
          M: 'یک ماه',
          MM: '%d ماه',
          y: 'یک سال',
          yy: '%d سال'
        },
        preparse: function (e) {
          return e.replace(/[۰-۹]/g, function (e) {
            return n[e];
          }).replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, '\u060C');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: '%dم',
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  jnO4: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '١',
          2: '٢',
          3: '٣',
          4: '٤',
          5: '٥',
          6: '٦',
          7: '٧',
          8: '٨',
          9: '٩',
          0: '٠'
        }, n = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        }, o = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        }, a = {
          s: [
            'أقل من ثانية',
            'ثانية واحدة',
            [
              'ثانيتان',
              'ثانيتين'
            ],
            '%d ثوان',
            '%d ثانية',
            '%d ثانية'
          ],
          m: [
            'أقل من دقيقة',
            'دقيقة واحدة',
            [
              'دقيقتان',
              'دقيقتين'
            ],
            '%d دقائق',
            '%d دقيقة',
            '%d دقيقة'
          ],
          h: [
            'أقل من ساعة',
            'ساعة واحدة',
            [
              'ساعتان',
              'ساعتين'
            ],
            '%d ساعات',
            '%d ساعة',
            '%d ساعة'
          ],
          d: [
            'أقل من يوم',
            'يوم واحد',
            [
              'يومان',
              'يومين'
            ],
            '%d أيام',
            '%d يومًا',
            '%d يوم'
          ],
          M: [
            'أقل من شهر',
            'شهر واحد',
            [
              'شهران',
              'شهرين'
            ],
            '%d أشهر',
            '%d شهرا',
            '%d شهر'
          ],
          y: [
            'أقل من عام',
            'عام واحد',
            [
              'عامان',
              'عامين'
            ],
            '%d أعوام',
            '%d عامًا',
            '%d عام'
          ]
        }, r = function (e) {
          return function (t, n, r, s) {
            var i = o(t), d = a[e][o(t)];
            return 2 === i && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
          };
        }, s = [
          'يناير',
          'فبراير',
          'مارس',
          'أبريل',
          'مايو',
          'يونيو',
          'يوليو',
          'أغسطس',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر'
        ];
      return e.defineLocale('ar', {
        months: s,
        monthsShort: s,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/\u200FM/\u200FYYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: r('s'),
          ss: r('s'),
          m: r('m'),
          mm: r('m'),
          h: r('h'),
          hh: r('h'),
          d: r('d'),
          dd: r('d'),
          M: r('M'),
          MM: r('M'),
          y: r('y'),
          yy: r('y')
        },
        preparse: function (e) {
          return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
            return n[e];
          }).replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          }).replace(/,/g, '\u060C');
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  kEOa: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '১',
          2: '২',
          3: '৩',
          4: '৪',
          5: '৫',
          6: '৬',
          7: '৭',
          8: '৮',
          9: '৯',
          0: '০'
        }, n = {
          '১': '1',
          '২': '2',
          '৩': '3',
          '৪': '4',
          '৫': '5',
          '৬': '6',
          '৭': '7',
          '৮': '8',
          '৯': '9',
          '০': '0'
        };
      return e.defineLocale('bn', {
        months: 'জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort: 'জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin: 'রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি'.split('_'),
        longDateFormat: {
          LT: 'A h:mm সময়',
          LTS: 'A h:mm:ss সময়',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm সময়',
          LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar: {
          sameDay: '[আজ] LT',
          nextDay: '[আগামীকাল] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[গতকাল] LT',
          lastWeek: '[গত] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s পরে',
          past: '%s আগে',
          s: 'কয়েক সেকেন্ড',
          ss: '%d সেকেন্ড',
          m: 'এক মিনিট',
          mm: '%d মিনিট',
          h: 'এক ঘন্টা',
          hh: '%d ঘন্টা',
          d: 'এক দিন',
          dd: '%d দিন',
          M: 'এক মাস',
          MM: '%d মাস',
          y: 'এক বছর',
          yy: '%d বছর'
        },
        preparse: function (e) {
          return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'রাত' === t && e >= 4 || 'দুপুর' === t && e < 5 || 'বিকাল' === t ? e + 12 : e;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'রাত' : e < 10 ? 'সকাল' : e < 17 ? 'দুপুর' : e < 20 ? 'বিকাল' : 'রাত';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  l5ep: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Heddiw am] LT',
          nextDay: '[Yfory am] LT',
          nextWeek: 'dddd [am] LT',
          lastDay: '[Ddoe am] LT',
          lastWeek: 'dddd [diwethaf am] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'mewn %s',
          past: '%s yn ôl',
          s: 'ychydig eiliadau',
          ss: '%d eiliad',
          m: 'munud',
          mm: '%d munud',
          h: 'awr',
          hh: '%d awr',
          d: 'diwrnod',
          dd: '%d diwrnod',
          M: 'mis',
          MM: '%d mis',
          y: 'blwyddyn',
          yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
          var t = '';
          return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? 'fed' : 'ain' : e > 0 && (t = [
            '',
            'af',
            'il',
            'ydd',
            'ydd',
            'ed',
            'ed',
            'ed',
            'fed',
            'fed',
            'fed',
            'eg',
            'fed',
            'eg',
            'eg',
            'fed',
            'eg',
            'eg',
            'fed',
            'eg',
            'fed'
          ][e]), e + t;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  lYtQ: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        switch (n) {
        case 's':
          return t ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
          return e + (t ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
          return e + (t ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
          return e + (t ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
          return e + (t ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
          return e + (t ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
          return e + (t ? ' жил' : ' жилийн');
        default:
          return e;
        }
      }
      return e.defineLocale('mn', {
        months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY оны MMMMын D',
          LLL: 'YYYY оны MMMMын D HH:mm',
          LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function (e) {
          return 'ҮХ' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ҮӨ' : 'ҮХ';
        },
        calendar: {
          sameDay: '[Өнөөдөр] LT',
          nextDay: '[Маргааш] LT',
          nextWeek: '[Ирэх] dddd LT',
          lastDay: '[Өчигдөр] LT',
          lastWeek: '[Өнгөрсөн] dddd LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s дараа',
          past: '%s өмнө',
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + ' өдөр';
          default:
            return e;
          }
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  lgnt: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
      };
      return e.defineLocale('ky', {
        months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Бүгүн саат] LT',
          nextDay: '[Эртең саат] LT',
          nextWeek: 'dddd [саат] LT',
          lastDay: '[Кечээ саат] LT',
          lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ичинде',
          past: '%s мурун',
          s: 'бирнече секунд',
          ss: '%d секунд',
          m: 'бир мүнөт',
          mm: '%d мүнөт',
          h: 'бир саат',
          hh: '%d саат',
          d: 'бир күн',
          dd: '%d күн',
          M: 'бир ай',
          MM: '%d ай',
          y: 'бир жыл',
          yy: '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  nyYc: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, n = [
          /^janv/i,
          /^févr/i,
          /^mars/i,
          /^avr/i,
          /^mai/i,
          /^juin/i,
          /^juil/i,
          /^août/i,
          /^sept/i,
          /^oct/i,
          /^nov/i,
          /^déc/i
        ];
      return e.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsRegex: t,
        monthsShortRegex: t,
        monthsStrictRegex: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
        monthsShortStrictRegex: /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Aujourd\u2019hui à] LT',
          nextDay: '[Demain à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[Hier à] LT',
          lastWeek: 'dddd [dernier à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          ss: '%d secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'D':
            return e + (1 === e ? 'er' : '');
          default:
          case 'M':
          case 'Q':
          case 'DDD':
          case 'd':
            return e + (1 === e ? 'er' : 'e');
          case 'w':
          case 'W':
            return e + (1 === e ? 're' : 'e');
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  o1bE: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
        }, n = {
          s: [
            'أقل من ثانية',
            'ثانية واحدة',
            [
              'ثانيتان',
              'ثانيتين'
            ],
            '%d ثوان',
            '%d ثانية',
            '%d ثانية'
          ],
          m: [
            'أقل من دقيقة',
            'دقيقة واحدة',
            [
              'دقيقتان',
              'دقيقتين'
            ],
            '%d دقائق',
            '%d دقيقة',
            '%d دقيقة'
          ],
          h: [
            'أقل من ساعة',
            'ساعة واحدة',
            [
              'ساعتان',
              'ساعتين'
            ],
            '%d ساعات',
            '%d ساعة',
            '%d ساعة'
          ],
          d: [
            'أقل من يوم',
            'يوم واحد',
            [
              'يومان',
              'يومين'
            ],
            '%d أيام',
            '%d يومًا',
            '%d يوم'
          ],
          M: [
            'أقل من شهر',
            'شهر واحد',
            [
              'شهران',
              'شهرين'
            ],
            '%d أشهر',
            '%d شهرا',
            '%d شهر'
          ],
          y: [
            'أقل من عام',
            'عام واحد',
            [
              'عامان',
              'عامين'
            ],
            '%d أعوام',
            '%d عامًا',
            '%d عام'
          ]
        }, o = function (e) {
          return function (o, a, r, s) {
            var i = t(o), d = n[e][t(o)];
            return 2 === i && (d = d[a ? 0 : 1]), d.replace(/%d/i, o);
          };
        }, a = [
          'جانفي',
          'فيفري',
          'مارس',
          'أفريل',
          'ماي',
          'جوان',
          'جويلية',
          'أوت',
          'سبتمبر',
          'أكتوبر',
          'نوفمبر',
          'ديسمبر'
        ];
      return e.defineLocale('ar-dz', {
        months: a,
        monthsShort: a,
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'D/\u200FM/\u200FYYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
          return 'م' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ص' : 'م';
        },
        calendar: {
          sameDay: '[اليوم عند الساعة] LT',
          nextDay: '[غدًا عند الساعة] LT',
          nextWeek: 'dddd [عند الساعة] LT',
          lastDay: '[أمس عند الساعة] LT',
          lastWeek: 'dddd [عند الساعة] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'بعد %s',
          past: 'منذ %s',
          s: o('s'),
          ss: o('s'),
          m: o('m'),
          mm: o('m'),
          h: o('h'),
          hh: o('h'),
          d: o('d'),
          dd: o('d'),
          M: o('M'),
          MM: o('M'),
          y: o('y'),
          yy: o('y')
        },
        postformat: function (e) {
          return e.replace(/,/g, '\u060C');
        },
        week: {
          dow: 0,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  'p/rL': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('bm', {
        months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'MMMM [tile] D [san] YYYY',
          LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
          LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar: {
          sameDay: '[Bi lɛrɛ] LT',
          nextDay: '[Sini lɛrɛ] LT',
          nextWeek: 'dddd [don lɛrɛ] LT',
          lastDay: '[Kunu lɛrɛ] LT',
          lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s kɔnɔ',
          past: 'a bɛ %s bɔ',
          s: 'sanga dama dama',
          ss: 'sekondi %d',
          m: 'miniti kelen',
          mm: 'miniti %d',
          h: 'lɛrɛ kelen',
          hh: 'lɛrɛ %d',
          d: 'tile kelen',
          dd: 'tile %d',
          M: 'kalo kelen',
          MM: 'kalo %d',
          y: 'san kelen',
          yy: 'san %d'
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  qvJo: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          s: [
            'थोडया सॅकंडांनी',
            'थोडे सॅकंड'
          ],
          ss: [
            e + ' सॅकंडांनी',
            e + ' सॅकंड'
          ],
          m: [
            'एका मिणटान',
            'एक मिनूट'
          ],
          mm: [
            e + ' मिणटांनी',
            e + ' मिणटां'
          ],
          h: [
            'एका वरान',
            'एक वर'
          ],
          hh: [
            e + ' वरांनी',
            e + ' वरां'
          ],
          d: [
            'एका दिसान',
            'एक दीस'
          ],
          dd: [
            e + ' दिसांनी',
            e + ' दीस'
          ],
          M: [
            'एका म्हयन्यान',
            'एक म्हयनो'
          ],
          MM: [
            e + ' म्हयन्यानी',
            e + ' म्हयने'
          ],
          y: [
            'एका वर्सान',
            'एक वर्स'
          ],
          yy: [
            e + ' वर्सांनी',
            e + ' वर्सां'
          ]
        };
        return o ? a[n][0] : a[n][1];
      }
      return e.defineLocale('gom-deva', {
        months: {
          standalone: 'जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
          format: 'जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या'.split('_'),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: 'जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार'.split('_'),
        weekdaysShort: 'आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.'.split('_'),
        weekdaysMin: 'आ_सो_मं_बु_ब्रे_सु_शे'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'A h:mm [वाजतां]',
          LTS: 'A h:mm:ss [वाजतां]',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY A h:mm [वाजतां]',
          LLLL: 'dddd, MMMM Do, YYYY, A h:mm [वाजतां]',
          llll: 'ddd, D MMM YYYY, A h:mm [वाजतां]'
        },
        calendar: {
          sameDay: '[आयज] LT',
          nextDay: '[फाल्यां] LT',
          nextWeek: '[फुडलो] dddd[,] LT',
          lastDay: '[काल] LT',
          lastWeek: '[फाटलो] dddd[,] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s',
          past: '%s आदीं',
          s: t,
          ss: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'D':
            return e + 'वेर';
          default:
          case 'M':
          case 'Q':
          case 'DDD':
          case 'd':
          case 'w':
          case 'W':
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 4
        },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'राती' === t ? e < 4 ? e : e + 12 : 'सकाळीं' === t ? e : 'दनपारां' === t ? e > 12 ? e : e + 12 : 'सांजे' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'राती' : e < 12 ? 'सकाळीं' : e < 16 ? 'दनपारां' : e < 20 ? 'सांजे' : 'राती';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  's+uk': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          m: [
            'eine Minute',
            'einer Minute'
          ],
          h: [
            'eine Stunde',
            'einer Stunde'
          ],
          d: [
            'ein Tag',
            'einem Tag'
          ],
          dd: [
            e + ' Tage',
            e + ' Tagen'
          ],
          w: [
            'eine Woche',
            'einer Woche'
          ],
          M: [
            'ein Monat',
            'einem Monat'
          ],
          MM: [
            e + ' Monate',
            e + ' Monaten'
          ],
          y: [
            'ein Jahr',
            'einem Jahr'
          ],
          yy: [
            e + ' Jahre',
            e + ' Jahren'
          ]
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de-at', {
        months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          w: t,
          ww: '%d Wochen',
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  sp3z: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('lo', {
        months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
          return 'ຕອນແລງ' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ຕອນເຊົ້າ' : 'ຕອນແລງ';
        },
        calendar: {
          sameDay: '[ມື້ນີ້ເວລາ] LT',
          nextDay: '[ມື້ອື່ນເວລາ] LT',
          nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
          lastDay: '[ມື້ວານນີ້ເວລາ] LT',
          lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ອີກ %s',
          past: '%sຜ່ານມາ',
          s: 'ບໍ່ເທົ່າໃດວິນາທີ',
          ss: '%d ວິນາທີ',
          m: '1 ນາທີ',
          mm: '%d ນາທີ',
          h: '1 ຊົ່ວໂມງ',
          hh: '%d ຊົ່ວໂມງ',
          d: '1 ມື້',
          dd: '%d ມື້',
          M: '1 ເດືອນ',
          MM: '%d ເດືອນ',
          y: '1 ປີ',
          yy: '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
          return 'ທີ່' + e;
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  't+mt': function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('en-sg', {
        months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Today at] LT',
          nextDay: '[Tomorrow at] LT',
          nextWeek: 'dddd [at] LT',
          lastDay: '[Yesterday at] LT',
          lastWeek: '[Last] dddd [at] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'in %s',
          past: '%s ago',
          s: 'a few seconds',
          ss: '%d seconds',
          m: 'a minute',
          mm: '%d minutes',
          h: 'an hour',
          hh: '%d hours',
          d: 'a day',
          dd: '%d days',
          M: 'a month',
          MM: '%d months',
          y: 'a year',
          yy: '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  tGlX: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          m: [
            'eine Minute',
            'einer Minute'
          ],
          h: [
            'eine Stunde',
            'einer Stunde'
          ],
          d: [
            'ein Tag',
            'einem Tag'
          ],
          dd: [
            e + ' Tage',
            e + ' Tagen'
          ],
          w: [
            'eine Woche',
            'einer Woche'
          ],
          M: [
            'ein Monat',
            'einem Monat'
          ],
          MM: [
            e + ' Monate',
            e + ' Monaten'
          ],
          y: [
            'ein Jahr',
            'einem Jahr'
          ],
          yy: [
            e + ' Jahre',
            e + ' Jahren'
          ]
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          w: t,
          ww: '%d Wochen',
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  tUCv: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('jv', {
        months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [pukul] HH.mm',
          LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'enjing' === t ? e : 'siyang' === t ? e >= 11 ? e : e + 12 : 'sonten' === t || 'ndalu' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 11 ? 'enjing' : e < 15 ? 'siyang' : e < 19 ? 'sonten' : 'ndalu';
        },
        calendar: {
          sameDay: '[Dinten puniko pukul] LT',
          nextDay: '[Mbenjang pukul] LT',
          nextWeek: 'dddd [pukul] LT',
          lastDay: '[Kala wingi pukul] LT',
          lastWeek: 'dddd [kepengker pukul] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'wonten ing %s',
          past: '%s ingkang kepengker',
          s: 'sawetawis detik',
          ss: '%d detik',
          m: 'setunggal menit',
          mm: '%d menit',
          h: 'setunggal jam',
          hh: '%d jam',
          d: 'sedinten',
          dd: '%d dinten',
          M: 'sewulan',
          MM: '%d wulan',
          y: 'setaun',
          yy: '%d taun'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  u3GI: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, o) {
        var a = {
          m: [
            'eine Minute',
            'einer Minute'
          ],
          h: [
            'eine Stunde',
            'einer Stunde'
          ],
          d: [
            'ein Tag',
            'einem Tag'
          ],
          dd: [
            e + ' Tage',
            e + ' Tagen'
          ],
          w: [
            'eine Woche',
            'einer Woche'
          ],
          M: [
            'ein Monat',
            'einem Monat'
          ],
          MM: [
            e + ' Monate',
            e + ' Monaten'
          ],
          y: [
            'ein Jahr',
            'einem Jahr'
          ],
          yy: [
            e + ' Jahre',
            e + ' Jahren'
          ]
        };
        return t ? a[n][0] : a[n][1];
      }
      return e.defineLocale('de-ch', {
        months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[heute um] LT [Uhr]',
          sameElse: 'L',
          nextDay: '[morgen um] LT [Uhr]',
          nextWeek: 'dddd [um] LT [Uhr]',
          lastDay: '[gestern um] LT [Uhr]',
          lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: 'ein paar Sekunden',
          ss: '%d Sekunden',
          m: t,
          mm: '%d Minuten',
          h: t,
          hh: '%d Stunden',
          d: t,
          dd: t,
          w: t,
          ww: '%d Wochen',
          M: t,
          MM: t,
          y: t,
          yy: t
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  uXwI: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        ss: 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        h: 'stundas_stundām_stunda_stundas'.split('_'),
        hh: 'stundas_stundām_stunda_stundas'.split('_'),
        d: 'dienas_dienām_diena_dienas'.split('_'),
        dd: 'dienas_dienām_diena_dienas'.split('_'),
        M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        y: 'gada_gadiem_gads_gadi'.split('_'),
        yy: 'gada_gadiem_gads_gadi'.split('_')
      };
      function n(e, t, n) {
        return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1];
      }
      function o(e, o, a) {
        return e + ' ' + n(t[a], e, o);
      }
      function a(e, o, a) {
        return n(t[a], e, o);
      }
      return e.defineLocale('lv', {
        months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY.',
          LL: 'YYYY. [gada] D. MMMM',
          LLL: 'YYYY. [gada] D. MMMM, HH:mm',
          LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar: {
          sameDay: '[Šodien pulksten] LT',
          nextDay: '[Rīt pulksten] LT',
          nextWeek: 'dddd [pulksten] LT',
          lastDay: '[Vakar pulksten] LT',
          lastWeek: '[Pagājušā] dddd [pulksten] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'pēc %s',
          past: 'pirms %s',
          s: function (e, t) {
            return t ? 'dažas sekundes' : 'dažām sekundēm';
          },
          ss: o,
          m: a,
          mm: o,
          h: a,
          hh: o,
          d: a,
          dd: o,
          M: a,
          MM: o,
          y: a,
          yy: o
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  },
  x6pH: function (e, t, n) {
    var o, a, r, s;
    function i(e) {
      return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('he', {
        months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort: 'ינו\u05F3_פבר\u05F3_מרץ_אפר\u05F3_מאי_יוני_יולי_אוג\u05F3_ספט\u05F3_אוק\u05F3_נוב\u05F3_דצמ\u05F3'.split('_'),
        weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort: 'א\u05F3_ב\u05F3_ג\u05F3_ד\u05F3_ה\u05F3_ו\u05F3_ש\u05F3'.split('_'),
        weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [ב]MMMM YYYY',
          LLL: 'D [ב]MMMM YYYY HH:mm',
          LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
          l: 'D/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[היום ב\u05BE]LT',
          nextDay: '[מחר ב\u05BE]LT',
          nextWeek: 'dddd [בשעה] LT',
          lastDay: '[אתמול ב\u05BE]LT',
          lastWeek: '[ביום] dddd [האחרון בשעה] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'בעוד %s',
          past: 'לפני %s',
          s: 'מספר שניות',
          ss: '%d שניות',
          m: 'דקה',
          mm: '%d דקות',
          h: 'שעה',
          hh: function (e) {
            return 2 === e ? 'שעתיים' : e + ' שעות';
          },
          d: 'יום',
          dd: function (e) {
            return 2 === e ? 'יומיים' : e + ' ימים';
          },
          M: 'חודש',
          MM: function (e) {
            return 2 === e ? 'חודשיים' : e + ' חודשים';
          },
          y: 'שנה',
          yy: function (e) {
            return 2 === e ? 'שנתיים' : e % 10 == 0 && 10 !== e ? e + ' שנה' : e + ' שנים';
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function (e) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 5 ? 'לפנות בוקר' : e < 10 ? 'בבוקר' : e < 12 ? n ? 'לפנה"צ' : 'לפני הצהריים' : e < 18 ? n ? 'אחה"צ' : 'אחרי הצהריים' : 'בערב';
        }
      });
    }, 'object' === i(t) && void 0 !== e ? s(n('wd/R')) : (a = [n('wd/R')], void 0 === (r = 'function' == typeof (o = s) ? o.apply(t, a) : o) || (e.exports = r));
  }
}]);